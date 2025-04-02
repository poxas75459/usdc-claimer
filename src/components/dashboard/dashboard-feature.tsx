/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "imUEY9Y1MpFyEyXjMLSg8NgvWZNTPSGhoLdurYADTpRypWRfzizdffJaVjcgC9BhkPLkprHaa9QodGwViCq8qB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y4dQqtr8BF3paR3U31PnUwuYURTaSvb59DwrGhygGyvdBNaSuN1PZs2XN3DdrEQpxorcNHN4mjzBNAQJkMap4TM",
  "key1": "2zsfAwoBLxjk8DpbNBdfDPU9u5CsdUvJEqQd3SBkHsGPL19b5VYSg7Rbu9HxY4Ud4bhLxpDhsrJ1tgxqNTNz73mN",
  "key2": "44KiTUxkgSanZ1sbaQ6d93xn6YWJ9gnm1ebs5KYtjFCCK5HmE4a8DurV8URdmNXqBsa1EYwUqwf9jwES7fRvkGDB",
  "key3": "3ZWat6zeye659jRZCvmXvDWUeSuD32dV6KWwjP5MQrcMxcxsbhaYrr5QYz7jV9byb2boNtaF8RMFsXrbsFU3iNu9",
  "key4": "5EjdV6uSS3LBVAogHHqGHNzpoJesXTT9caHBR6uFHHchwFdDEdmfMmMX9zBjLimtympgznYsv13pKijSpEAirDxf",
  "key5": "3ZZaddggfQ2zsAkAXib6GkzQKueHM8xfAGQ5nJMFYtJN6keCrLKo5P9kE2yhaSNf7D5AyeL9WbNWe7VDBQuNUcD9",
  "key6": "4SFSrjtUXz7yFcwfj5oHNrQtHPMiAGUP78RFXdgWRk5CFirHUaQKXine5bSfmAgiiKBudXe4HQeMjnVhzPi1zxdY",
  "key7": "4oofg1Ztkdj4CV1wcqSvUSm7xnh4Xa37wuM1fDapYyNUaLiPHLr266VdFUtmgKnRJJswNVvSCZM3mbQ8ycpmxPXH",
  "key8": "3a76mmEKqfYGUmiQ92oiHR8VnpJUatBLnEwxYsBFZgjgJ3RLjb28drnqqTaMcJkikPPPa5Q4A2MHGEpZfhY24Eph",
  "key9": "4jxdkjhx4JfPziZTbCNFos3W1gaoLCYDh9RxR6qEDje7TvV241nKYe3r47ve4nQiSjkAEG4VBqWnS3T81PV95U54",
  "key10": "nk13MGVjq5d5sJUueJntWsAk7gEggACzoYxDCGtMWEf8zuvmKKYkxHD2DVDDAs4vxFchgSZsrLi9QfrCTBkuSTZ",
  "key11": "5C3cc3Th5k8c3yW7dhCdg2P19J9VoaufRXfdhE5wm62MhNWm33HDHaGwyqVRoKmFvGtcGDsDD5NjLCm4GG7EJNi6",
  "key12": "5YSjJsjeaBUiTpkdXh6F7YvTzCZZLcqL8Wne9XE47wsDBKBMuLzbFYjhASRRMq5RUEsRrnX6PQ2NoFMX5qWuYCfc",
  "key13": "32CJzVfUeTzDFY2C5dYm888ZjAVCR4741958KeCS4hZDtTaF3aY9Lnac7B9XLDBVSgwj7fBN4Xs8BGEWBcveHetj",
  "key14": "2HaaCw7tAiiKqMuTGJddvjDgvHEAFAPStsuuG4WYRARpXigcggi6VH6GDxKSYcZDAWsYG7UYUoPmMWaAMS5tqgFz",
  "key15": "5KB5aByroFx9asYX2HTpw4jizdHm7M2cpod4LYv2J3ycu6p45DZUxNg1qjEf7iwpQJ8DZm3zg1E6fUyMzxXkzFMK",
  "key16": "2NPiBX43qLNY8ZGqD6ETzBGmdNjaGMFtjj6umXyANLy7ZkEWakSACMquGVhNpES94BugT9zKkHrz3dKm27ESaLSK",
  "key17": "5H9754YUX9BKVDRav1Z5VviPJoNJymPhwo7mLYEfXkgbp4JPYGigtymFWWFF36as4NkJCaFjeVo9YmMgBs7WmPKz",
  "key18": "399iajzfCxGjgVdjsy5V1HT5FpDYqQbpfeXQWE59bya2Tex61YpWMSTMb6EMe3x8WbC1WyPNfgsd6PdyhNXApqHh",
  "key19": "2hjGdfic734Pdu9Fe3k7uo2meqjV66j3smc3to2f7H7G5x5yeusLBfuv8JgPGp1vvnuGDHgKTuRuMJ2EmmSttX6Y",
  "key20": "41Y77db2XKcLQ3FGhmcACKvhoAacY5n9xiNAqgsVdMdeCXzH5a4cXwT3a6Hm6pZJQD9eKT6dk77GRSDzvezR1WMk",
  "key21": "Dgcb3TSCkGCXovR2PtUkfVTonngV9LSgjz1VM6he3VGVwSkh26BoMjZFBaDi6CTp1GemTpb84K5UE7DphkpF3Dp",
  "key22": "4cEwt5wE3zf3byMk6RfsXcFLn2GspHys9QKiXJpjyuKoAuvhJkzneYAbuX85HRSqCYt1dX8KdqmS9nsi5bnnqTN3",
  "key23": "3dy93npo88JYNUyH8HE2C7Mi2d21UMG9eo8PZhxLwRVvjbyFbiPZuxeEkdLiU1JyU3z9F9PGjq3JycSydsSS3Zr4",
  "key24": "4mrUebJRQdZya7p7D3f4t3JMS1BrknTrnr7iha2UzjRg3rj3ihb65nT9ugk8DhaPehVYXrHiG3hYjzJqTfFvzaQg",
  "key25": "4d5PRAtA31CgP93o4DSC348jsiVWMnybwx8ifc9pvxVGRyS3mnvU6YxU78FyixFp9BfFHzF56gt68F3bdp1bG5hZ",
  "key26": "3UtkPr7kh2FWtFsgsYvocvf6tNkke6B98SPYF4teiDxnq3tgsoagWrpFbWS9tNVfJguUmviEkmtNxvpksjs54ezM",
  "key27": "3mNEghFN4abT7wJhkC7PopDavNqnDMhAHvk7B9eDMyvfN4nmhDhBgBaffFY8Fn8RegkW6H9ayQuMeSoa44EAV3b4",
  "key28": "ecx4mJgL6zK5iBXi7Hn1oaedtj949o8nyMjRwfP2ZQtmb2YXWG1XbAbv97wnvXkNGsrWAbDv7Aeghhs2v4hxBg2",
  "key29": "4PPYC2oKikNnCJ1KWuchZCsuWxjYCE2d9xQpgjyV71X3nkb3CTm9oFbZjgcVBtXiC5zGCDRt7s7LX7CSZRaLgSzT",
  "key30": "7yTfjiJahtcP85sBC91SKi14oFsyGDJfhDkp5Q9EMs3PTaQK6feZRjzBYwip95qqpfTbjwqc4qMbAnYNJsgGWKV",
  "key31": "DiLCMcvDqovK6YFxptoDfLATGnsx3id9yVMy89oJfbmUQkzmqXmRfUKGgFTHD7oe7sRQUFPgdyqDnokMWBZAHFT",
  "key32": "4ndhFPzmJdvFAbeacii6WoRcuWsSQEji4mV2wPMT5A9nByEUmpiTXNpstUcyL8vC3FzhsH9m9GpvxPvccKkZiW7G",
  "key33": "441u1aQM6b7UuaGoCv1rgKbLmqNXDbHC9Nb86pmHAZ3uqP5unFHg9NM6igpHZv9QitGWdkzCR9kKtJzNfhMgkUFC",
  "key34": "z9XLrDrpjBVm1z4vgSXrKaDja7zRqTet9zrhTxfPCxsDbgnzoAFLgP6HxvUM4C9zdqhFv2ds9Smq11GrEgw6hSS",
  "key35": "5QoyVwCTZ4wCG2BwConhsH3QHBfdrsq5Txwose29xAoTRoTAPT54BbKh1GgM3mZ4zYh1DSqC9hd5JJpjWF3Z1fLM",
  "key36": "5qEDgQ8mK7UqjJ5rxdGhqDjxEsU14MKPo6iwoNrJ3ycdKJ5CcgQjniFD9LKswCdzEFPKfsgPVpHFZMPMuKqVtFEP",
  "key37": "5QA8ZDoYas1wmVQWTg2hniQDeK8N2iimkzEAod7NgREAnaqYj3hykXA8kVUvwxFYimgt1q2TxFaTEBa6ggmB9Xyd",
  "key38": "5RxnczaofuvTorMkP4nBVJ54hLzbeWWqvA9PzTVi9vD66iUCsc8mApR7JvuGeFRiHLmwfe1GRnp89nrzTchdDhia",
  "key39": "26N5KvvKTxENB7QBFtdTvywQCYMN8jiZgqdJdkdffe8n4aD89dESunYvEtBZPxhAAxrLb9maHu7vS2fyruADsss5",
  "key40": "3QFKG5TmZ7TMwsqqPk8sxbqj27d25XYSoRap49hoTK7zXaJTNEcySqWugdmHXiQYBBmJmHaTRh49DVkmhrkZHK8g",
  "key41": "UUn9NPsm5HLQh2RuDhcJmpVBUFWk1FJvUTqryk6GqUjFxAmGXrUpwgqp5ToCyensX1wv1dxhjDFZbFFRmVm4K8y",
  "key42": "4dj9F8GjTvCcVtoqVeeYTEvZtwWKPTjsNU8K6v1iTni3PXRqhky5LQ3GWoM2gp7DKrX96YWsGCPkwm78mskZUypH",
  "key43": "3ZV4b2PSMk5Jd4pjYX8RN6zSqLjDc9GxMmMBgk35LwskqUGMGvtvPsHKLW1SxwNU4eQ6LW3STA98BAjjTQXiNj2a",
  "key44": "3f7xgdrU55WXt1gRCNaScPmPd35aVXrk9jV7VVWD8CEYnKNrjxECVryJdpXBtXeAi7NpCJFTDbz3Ch3bhzrWgz9g",
  "key45": "4LVWEwdLuzdWZouqQeUDjUAqCxuoY3awi8ZqxkWEoQTb7Ky5LczNy3mCYKR353euu8xfETdc3cCz817aTr36gdW5",
  "key46": "4BToChWEHjWiqKtT8MtSXMeagPsen7iMEmWzHkT2uc8tMPJK9BxL29NpqPmcUY7QPMEDEsqC8JguzdnfYfujHitE",
  "key47": "429oxpHZF5cjcV9nFXTvKvwYK1rFFE3Sh7tjAbWrTZ18kR2tH7EY65Z4VTymZFiUvvfWfVoqYHVrRfRq3wR8UBqY"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
