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
    "38yM1BJapu6PKiuTdaogGLUzmjdQUpjrsvJxzuTDJJuiBEsnS87qs194X5d7C2qdHCAks91EFhKG2UWhZiFnrWq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AHiGBkDRAFA8vapYscB3MuRqtPJ1M53JPMx976nzoMPoSZPUKqCRRj68hHqpmwmRpupqKya6KGPteFdnVEFqZh9",
  "key1": "3h5geJ1i9MWt9iMQttHi68qiGa3qjZpxXNLyo2mdGEQvQsZeWEFjHQ1rSGwpXVcjh8SBWRDeDSRBu7dqUtDq1n4s",
  "key2": "3ei2me3C8Rhqziw68xSuMkpKo6n8H4kSt73Cw6YDFQ1E79jgmvXdoXSnc94bhFQ6FRiK4gXPgU8UyVrHS7r5jACp",
  "key3": "dp2kWw7RvRugqjt1Yv6RfPvtCPZuDW5cFKqQb76aeJ5ofkhRgyymtaBs1ueibAAbstbPzWz36oscUgMJVsGqHCe",
  "key4": "4jkaPek2pdiwYc9z8V1ECTtWsmFFedfaqapGjARvSR3SSHcu3rbtRsxoVzBG1PPrvrbK3RGU1BZQoor4mGybGA2V",
  "key5": "4eXY3TaXmCZFQhhCuURCcXaYWyrSGhC1eFWCXZatDr2x4vCUovUCPtHNpkfUBYzPp5MTFaLhDmJSxPFCWMdLG1N6",
  "key6": "5kuwj8nDVei25CbLUt3zavv8Vfb5iNTrcP49ZqnK9ffmHjTbJRRFYFamTnVvx295mQGR3YMY66pRLQdv7wzrbtPe",
  "key7": "2ScifdYBUBW5bWVnyPu62G4gKWuUzvXzGJerJubVRs8qcQjYkKoLpaHzzE9Z4BvZtKSZoR3qmiJihhYAhuzauk51",
  "key8": "2wwWrQbLoGtbJbKMXfj7L9wzQ1VyAT1xAEviuSGEBKKCdu8TBGdWBdvcHJaEG6sW4piLm6KET8FHcBcG4i1HMWAa",
  "key9": "4pcF8vWTWaB4iL6FPP5VRnaCgHL6H25kqpmbyKB8azzbnYEv67QrKqLBfeu9UfQSWGS8DydzAwDPQ6PXhLmQvrFH",
  "key10": "3vyKGWN9viuM4HjLEfJvMJfnt2X3zzDddaZ1PWjFk6tUdNMxAdTCbpqtnyakZg53GVnrGhtk8b6CTo45Jan7qFrj",
  "key11": "2zUCS9wLisMKaqiXXJL59R4MFwTNmtArVW3chwPAYXZqdJ7yHY13voEyLP1yPCGcgDCHnM622ry66fvDuLsUKDdF",
  "key12": "4TyeTEGZ95bEFSEjPmVYWWosThk58EHJeiJYtotu5UFrMnyM2kzUtmdf2vpnngn53nMW986GmQZRHRnTP9nJyQ7a",
  "key13": "3rEcGi2gMntndYstmvfX3eKc4ZXdcgVvDnrBCFj27RM6L7WFx36Ew3i1BEtuerdtDwp1A68xfJCSojFv6u9PRe4M",
  "key14": "1hyyupmzBtX8iTps3afU7wCmU5kquoxxnxHjXHtnsFu8Ckyk27QegQng94Run6DJ8egJKkAcZSxA7zZGExkwPqj",
  "key15": "28rwXadWPQ8Q5wziKXttsmXpLSANpdghpqVJfZsa7ijVfKBUKJqK4XNHyfvC2K8nFg4dWJ8mZL3hVk9N1LhGxzY4",
  "key16": "DujPD4oFLEs4NbVJGQNnoJEbSJE5J89yML8LodgmjL3Npj8MxazxCEAptAczw9RuzsTNRPekDsYzf9cs4tWdg74",
  "key17": "2KujtB4Qn4AM1dtEVnuNXNxj6hH6hk1YX45a6SxDcPre1MnPQEDkuuNtdYSTGWzJHSyHULqwb2BkWJF5xFQmSMBE",
  "key18": "3xiPmSpdeqUNFAgzPXSzJnK36WCtpWwXTM8ubXmuskt5oYTL6hcyxRY8YuB7SZ2DG3vDyZnhLsQWQL6jm3yXLrJ1",
  "key19": "4MxSXJ1nhDS7X1danC5GP8bxAgxMLB6tRp5ooLuPN7QAcFNx4kBxqwekpMaKU5wYwg4rjCUWG5HRoKk8G9uS7crw",
  "key20": "5fGSRCEzjVRjK9SnhXi2SQXzEiGrLjCCnzFonDXAm4yqkBBXkjgbW6YYBLAyXsCw7Hm8PwmeTtPvnom9DSxMcUpk",
  "key21": "Aq7Mk2ZpnAnjHdJ9bn2qrWwY4icjns8Y1CgC2EgtnfBEZRGBmBSu9uivsLuV888GH8EF2iuG6VLE5MVr416B3An",
  "key22": "2zJ3jvXkUuKgXreX1MwFSXM1aeGBpUBKtPJY2bJ7i9DvR1RMqyTWPKCgBLvXbo8HSSYRf1gffn8tmk2VJx3tJuCT",
  "key23": "4WFUdAJTBjFmnmzhJVUpMABHzMNbu9nuGZmGfJLALWXuqLr9pSnEk66VcbuP3qYBHGSwauvYt39HtPwqpoU1JzjD",
  "key24": "2MWi17vw5crkQvshoj56PM3fWVx1W5DPFURHY6Rg2cFKtZh5XxqdLv8pxsTyJ61qwvJ8N9qVhSFXWXBr4Y4RBPJ2",
  "key25": "HvmpKiJM2W5YeqX7Z9oEbpri8GvcVbR1E8TKmgZD3PGej3QBjnAgz6r12rkhPGqhGYDoeEgbuvc6KD1EkJUL18A",
  "key26": "2x4p7oc7DwcxitV1tooZGZEXnUccBkgSrt916bpMuAZh6BDP9G3BpYGS3EffRa7HAmambGdYQ2ya7xJqKgnsfWbd",
  "key27": "5QJnEZj8FD1C9XCvBAATGdy5LejcLnXhSCqBJv72oD2dmC48MTac9VwBhoePSVEfcokBFyHqiZmsospGUUeNwyrv",
  "key28": "Ei6iGnW2e2swP5xKweRZnLL5ExMhyjcnjb3kRKNytVrQ6EeXJkpsFxT2gmtrSpp3sx9EPnQLte9C1y9ab4At75s",
  "key29": "36u6bXE7Pi7CgS3D3PYCKLxNhP9oXQsv6ayJrhoexYfmDwC2UWPZqGxKHWm65iuXxoRQw4ygTM5GYogsiMHQxH6i",
  "key30": "5vN7WdSS1iq1C4DxmLqV7rbAXW5j4TLqtmjVkG6Fa4jxKy294ctdYkTBgruPSMxKuhusFS1giQeoQ8kMorKT9mXY",
  "key31": "45GXbLmLr7WeLHnqjp5xCBUL9KJ251w5kNuvJzoX9EdyGVNn9hoVDcRR2i8krTK9JkXZVFgPFuGg4x32tMa69ogJ",
  "key32": "5vS3Unhh8RD8KkpWDC1QJWTPdSjUJvpgmUywGYjY7WjuRW1vRZZwnDmcs2Rm37LLv85Wmm61HK51vUWY95qUBuy8",
  "key33": "NkQzPaAX69KYVoQLCq5VCkK7qnkzVUb8SqpG8BRmWoSXaeTWkMHNzr13C18b4Bnos8T2GLfrruGbApyoF2PSk5K",
  "key34": "5Eshkz5sibYJDGEJRm3CjeD4XSG31LsGYAqxZSCgx6jPBzpkeeZ78KXm4ABWB6bvDN3KA3Fg3NcLRTnXJTcMfT14",
  "key35": "3cgDYvsYjCTgXUvJmqzmKQNsx1VyybWhfdx1RxtHrj7bKxn8vvj9xjKsc4Cn3eex4pW4DNqmSNUnH4r1MNRUCPMK",
  "key36": "3y4k42AVFthmCaq9XSjfHyiNrxd3wTDUqULmuMabsDQixXPJyCrrMhELswp1AV7vJgfC9Air6TheBjnfpBmBXWYR",
  "key37": "pLehBQgSaX1reVEWJb7LRJD5UkdW6WYdYdG2zs2vbb3jQmZtpc3fYC27Sx5VYDDNLnHQdmVWiBuq6wkFAVm6KQg",
  "key38": "jH22Vm4djShbmewwBPejpyY7gJvXmMKk6H2Tb3tkpgpE2gg1xV6Tb9uT4aw5RTEuemGoKWMkDnJdDsAvRi3wYfw",
  "key39": "3rtevH46pyPBvW9tnwVy2LaKjqAF4Lm3xVps7LmQWjCwKfAf9WsjKw8A5fosFXRbvvRE2R1GqV2Rk8uNCfkbhK92",
  "key40": "3ScPsx3SJRJXNwkmrf4ytmnr97B9hZn5y9Z8z6TKRRaqhoBehHaFMetxmksECpBfwL1C9mmQPJykqgQ9ZtPHtfoy",
  "key41": "4yAc6mdH8HCZ2CLhZew7AjExP7xW7Uj7VG8j3Nv5hXetBDnTSuCgNxYU42KjPac89fsNmYQRYYtYGSYCegsFysyA",
  "key42": "3yPnKMuWoXrcURE89wqD5v4dsfST7GhvDeExbspdwmhkz9Q6PyQj4K9ZeSAhvHmQSfdBVRMqTuxTtYCwEGxTHJgP",
  "key43": "4XCHRccHZws9mW6zgVuBqcEgiBj8XUwaCRGtgrngCd6MQjtPQFxZXoQiK2MuoUB5Fzv5ap6kVPzDjgs5fwKCZDBQ"
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
