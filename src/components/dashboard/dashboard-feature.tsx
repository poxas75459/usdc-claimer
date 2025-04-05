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
    "2eannjfhSxnRUut2oMZgLqcjdzG87xARfR2Q5bawYHWXyHSqkVrqpwphWku9UnskXiXLPF8m3ZMEeX6beu86CGBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63VKFeaipVPKxGbeiDThSLMVJJ1QYRFJk8ghuai8z26ua4qbLsQ7r4usYrzyrmAjJtbYP5kdQBjwLtcSLr568cRg",
  "key1": "4ienwcLW9Y44Q2XgenEkkFpjoKuba9ubGBqjYUuHgPgaaAYpxr9T4kRQyavPWoNjwfFPMNgZ8tYyoBWFCvRowexK",
  "key2": "2S15aSrr7V87DDrFa3jU8xpH1moPUBMtRFDBPdpWhdLvYYnxZvveJCh7qZ8HAWwkE1cQof7Yq4MiH6hP5T9DR4fG",
  "key3": "5sh4sB8bZxfucdaBZAEB3DNEnbZXySDMT3T51gektxpfyhS6FSfiAkPrWCAaj8mgXmX7v8PzWHGPqqu4cL4AT9Cu",
  "key4": "24hFRxuLra9h36PJCGut3jYy8easoPyfwqTi1paNBhy4QrBH5ejWgFVycvs1uLWNXGBHzSYN8oZLzFxR7uGfsepa",
  "key5": "3S14DdqnSGEAYuSz6vGXg5syiadmrRT5dDc4VZp6W5W61CeZZntJvt794XDVSSyUu5VsvjpPJG9Qfns5yNMHAZNh",
  "key6": "JZaaf35nCgzqiPhGQv3uQYjY9ZDkEpURtR8jA7TbWAGqZeLzhGC2E4P5pRFXheWeG8zaUpucoJYww1kgYQrEfYA",
  "key7": "j9xWtbY2fAur4znmxueyRm71EmxqSjMdaMBd2JfunCm5gFe967i4so1vcw6vMX53rpQn56tb4QXXT7xuhYUKqMi",
  "key8": "2YebmzGT8ja2VvWzj8QL2qNDtNdEw3JgmSJ4vZFQ8XrbEiDzHoq3GtGHwpKrMosQ18uBRaW5cHHLDMLw8H6KGKNs",
  "key9": "3TTk28d5a998V3R3HB5GHfZabCAzX2P2KkeqnC2iQWmRu69ScCppsPs3zScm4wSRUuCDkxat1KsiyPMQngQoMKLL",
  "key10": "5gPqmge5fkv97rEjqNvnEvtpBTw8XCmEGFSZctoTUSPtUVhAtEgGBYj1cNppi8WGzXwkfvDshgrSh66gHncFWU1f",
  "key11": "2ww6xxmjFgKBEUf2Ud5fJNoWQMrXkHQTEa5LFdJ81Mgi6hTRtekVWQhDh7U3ad8fBphVGxB2rcZ6qEwVkipAJbWy",
  "key12": "3bUyK329oxXwyGEqXMASK6xxxiA4XeLRcA2VgBP7gBjzcLUiQh1tDm2XVG14xBJi8SVd9h3MmiYSFYykzyV8ZnRY",
  "key13": "J2jKAvzc5qL7eviHEWRyCEo6wRUrBxgbPzdVD6ZoURbDRv77dVEAHVrnGkXjKNBsoWxcwzVtXtqjaYrdFaddhtR",
  "key14": "5BarzHJQ4PfQfeBaobhmsu8MLsnrWeBGXHtcaxA8qCypva2KNKiLRCLxwtuyut9zcwVRs9uqk4jYFLN783FZwZpH",
  "key15": "nDQCAndtew2RsEnNkSZc3hPPL8DN42NcpeGk3CtDQJVemo4hztYmcauMksYhnoF5bpGzJ8yqfat5RtVjiXMpi4J",
  "key16": "3uBo9Ls3bSEnwKyUwigrE1KZpkUB6f9TZ3Sa1x64jGG5cycT9ENLjXBLgsj4UgYxMJdDQ3z953ukTVZjX1p5qAVT",
  "key17": "48tGjY6HdWE98RXbpxJqeQizLSxcBjzXskSkkMV7iDbBFoyqACCSC8BxmH35mfcVbQkDzt2igRkhMx6wXAGvrzKj",
  "key18": "2SpTWd9wNgvP9pa7PYNi2RrkFCXdnUwcdGLjcE6JR5yHbF2TGBkoDLsL58MnWVE4jShbj9ykT18EBeXS1wAtpw41",
  "key19": "3mFgeCGPikYBtHyrpgVATrsa59iSdjJaoEuf6zDyhCfxa6eNRehxKLtiwLxqQwLKDyWywVREbG6uiE9Dec8hbDAb",
  "key20": "3viDDAw8ZYLrQntxQ4ezmUp2bZTFJiqY7ZbKyNbCG7GWyMovj82uZxh7jvm9jvYXeB4rNwSif9FDFFmDgi6WPiMb",
  "key21": "5frQauhhFCzxChXEpu47ic6YL5BJPe5KfziWc1db8oix2CHXHXxShRauYA2R28GqZePsbS63o1TX4VnwZFUWgfZp",
  "key22": "5vwF8BdAGsuVnqCpHvDYzXr5Y6hHVLHY8hpEqGj7gHiPPcGsT6w5GtfvDBmSfMTh24ZgXXcBDBj6GuJ3kJ5YFu3M",
  "key23": "2aD8ryWtHE6DxySQ3uRPzuPUwhFtfA22LBaER1wKihuRPynf1zSnSBb5zBCbMsmDgJTVCSXDV7UXzuas8bXnjWyv",
  "key24": "2ELDeMA3epRUr923pY48YvXXoSzghkUJQDmnuLuiqQmWauDsUqkCq87EA7gmLfpdhjTT33U5NvHk12A7fXan6UGd",
  "key25": "5opAg8fvAgi6thE2SENPe3BiR89x98evc8WVVUNgDPLjkNyCsL58LRDRmnC9SXNBiER6paPzVKUNQsBQePr2WAsN",
  "key26": "4tNkPXUEEa5PeSpM1xV2kd9TrEDz6Q29b3v2eDAqbXUUszjkSTB2aPBLgVpcW1Nkikjhk7AV76aDSNDqhqw99dQL",
  "key27": "52ojWpZsnCAJdU1gBBghb3Rvbv6EfjgjYBUqBtqvxUtk3HUeqNrQPvpsJ4DmSCZhp9qqZ9sF791zz4rKpwXNo6uA",
  "key28": "3ZwpDsDKQ79UgHxXv2eLJ8d5U7swtikfBt4pzkuV1BznQhK6c8V8xv8PdiAcaC89uRmHnrJreipWUbK5eu24xBxc",
  "key29": "3b3CftA9sZXhbGS8nT1x3sVA1HGkpTnHc51BJJAAyiQfrg2uy4YRT6rAwCsKd6gTmmDdK2QMBPNp6e14SgKdTQ88",
  "key30": "zKGGf1cCx9YS1UfeifwJkmbUx922uxrNYS4QrFHPVJ5A4P7s2ePRpseqwJyh8YbUk4PrxgQLKSu5GG1npUwvUGb",
  "key31": "64Xo5nESeqrrKewNs7aMc22fEVXJMN2Gsk7czRB5apGtXnjWebtt5XATo2yFDkDcQ5XX88T3rjNJzZhwQWh8tycc",
  "key32": "4dy1MkXhtFrvr7ovPmMqs4HNctFV7SPjnVeWcjKheqQpaQBmiYDUKuWcVsvc9pkPQonbDuaRSepE46sDADuGWxaj",
  "key33": "h7Gbn8qBLYP3ZmF6gp9vj4n8mkhtW4Hnzh8qG75eR6LRt613FSkP3YeYyD8PEPdcH1VXTW9iCsMQrLbPVmpmWfP",
  "key34": "3v5ELz6ED5ZQUefiNQnaKuRQZgJJ85HhkA7Azw21PyTtrNBtyvMajf7hWSKcsP7iXf9xJ3LW1VKXF266gnctcSuh",
  "key35": "3ZZUcBduJcyUkC8z9BZiasFiA7F8CcErorhcuysngcPtkYZ4eLK8A2SoeysmLAktzRCNRTTwRCzEjzRJiR3zAKje",
  "key36": "2ACt9zkSMmjM8J5aTKhqWQMAAtosy9ApPQ3xqN7ZEEqMQ5WvYBJNbtFFmVKgMAcbCPy1yySioSVGTxU8QEGZna2b",
  "key37": "3iWCVrmKUqbMsjeL2xuKUTVohdJCK5wAkkxF3UApMT3GwayZddDs5bc1gMziFjEnXydfQtGs9bSRG5DJZs8vLrKu",
  "key38": "2SprogcvTGGGe3NX3VG2P96jQutn6WPAx4oiBe7FtPQQQpvujo3UN5N6PHWwo382Xcx5pJwHru8ZvbK5xo33U2x1"
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
