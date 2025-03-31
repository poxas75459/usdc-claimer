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
    "3VvB7bAzRKiWjLh9Pu1evakUsfcMorCeGrLSzeN4H47GJ64A9soFAxHzBEEU9CeWLscHpSJZUbu1K5wL24RfXsx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjkwChbT5yuSKvrZPCZEHcxtUUWF53tCBa6BhVTC7bd5LCdaQPEBwpsDW6zwV8UJ3ehzBynRQYoB6G3sKeTaeZ9",
  "key1": "4X6etU9myN5Uvnmxj8wsdfVijRk7rY28yZyRqr2CEXNB94dqZGSZX5ZCowyQwB94HYAxPDSttxjmXHtHpHe57d4j",
  "key2": "3YzeqvtVuC6TUL7atYRVs7P7WpD8Me1Sewsxwvau7e2p367MVGUn1vwdwn58R5oGQc4ZopdP8rigysnCb1HYc3wB",
  "key3": "KxVNoc8KRUygVrSKyhjkQaEbVNxyDznUduifunFHJGeTfGoeRrWE21E2VVtDYr54pEWeFYAVx1Mz4mz6f5BcqEm",
  "key4": "PSEquAtjkevRWGcNqndtWKiHqzRKu5oqPakpny3NhUBx8W7Ei5SCqwKXnccJpLVGpKmcAMyKGNMzeMJH4t1vr4n",
  "key5": "3y2hFY1uYBNhmETrR6rCYgsUNFSqe6f9LkU2KuJwCUf2sXdKE6vSVjkMqqcr1ySMMGN4srpYSahgCCx6sU4Yfddo",
  "key6": "2D5Ri5fwL3he6sgw4NcNRQFJnGLeE5gkEugVTxEeCfvGcEpijhHJ3udrW9qkLQ4zRn31DgMMXNoiH7qNdeNUicFW",
  "key7": "2vLkyqYwG6FW6rmtzyoD5PXDCaVAB4npLJSBKtzRYLBraegUxCd6GxvKCvWU1W9JM63cw1pBrbjneGBwJYAb4Yy8",
  "key8": "4jetxmpd5Vjv6rt2tPyqNf5755JJS645WwZUB84gjn7p2Ly5G4DRRrLsEjE52aARTMHgwevv548eRKcmBTQiwAx3",
  "key9": "VNAFwpZZbpk3ien1pwKpFoEofUtCmhckoEbW1jy5xKrpfRNyossqxacw5SspZSWvhz1oiKSskraaGFiCW26NG1b",
  "key10": "3Ym2TaieQk2vLv2LbWJ6qafRZfC2YtACTuGK4VPz2g4L8BCsNWNmZs2XHLp3NJiuzZebf5UDAcx1aTesogfqFMJr",
  "key11": "2DrxpKG3s9D9Nfd43dUwQdyA8s1s11TEJA9TnoRpBfmX3nS6G7tE59n6nZwsYrAEGpruCyyM3wNrvgzYfsUPjXsD",
  "key12": "3wACygivSY5CnrSraZrTNeTUDktCKP4FuMCVgwXct5xEp5sLKH7y1T9Qam8543r3B56t9WWNhyq5PkBK2brTbLHp",
  "key13": "B17D7pxDSBubxzN6576pL6V7Z7fVrBVA1nGD97MvDd2X1oTT1LgdvYd1R8NtJzfnn8huNL7sdTq7WPDjmdQnpcc",
  "key14": "2bdAHPQyLTFwSSAHbY9FVSJ64MckGMoYm6jQB2Z3pZbyMQfk4BwWwVSXp3MEceawEyypZoktt3xJB3tkXLbrboD1",
  "key15": "232UvEJcGgiE36r8WVa5VHZzQtRQ2LzVcJq87vFrrtRUJk1zjEfBC4xFYK2RQ6yQnfHoPpsDKj3EfVrVXkYZYVQj",
  "key16": "h6cWBTcFmRcjpoF83i93r9hccMYEFupGuSTuskqGQP3j8oe3YmdhLbEUnrBJ6jxBsvuregxyo8FSY3qAcqbgPUo",
  "key17": "47TS5ZjAZR48L833Z48DoJnw7HfFiM1Ehcwot4bVxj3icysdpsitq8rWEAb81GTvHXmyE8wLKCATjc5BpqyVABJx",
  "key18": "3Js9AL8tNNHSPwEhYr5f9kFjwkYhhxiPq1FRZ2ooweXSPeshzPhfEWNGTAmbseSg2JAGgCp4MGCYVHVbGXBaaTex",
  "key19": "WNsuQxK9etwhU9PTpsqsKo5j9TnZT2hPHM54AdS65PYiftKu1okdPkxuDgVRWJufM5WuuxoskNzPjs61YGUaCvk",
  "key20": "27poSbYjpxduo674DGMphmotGGmdmJ4TsSmdKnkpbhzZ3p6aCj52MurZNh759DR8mpLsZUSvkJADHMrCBCubdoK8",
  "key21": "4z1R6C6U7G1HCJDSaM2GgXXs8S77qgXgxCrfd3b6MdcBfYvGernGPp99DfvqRwhZzXpaeEi22qKntugYkRJwWsFP",
  "key22": "43knXS8MCESM3NLvJmLGV5oLr3VFKDmJpNQ98b35CPW1hR6TU6mRcxtCqCyTTXNkXGUc5LPi1RSRN1HpmNNqbn3P",
  "key23": "2tFh6EcBuMFQyJAJbaYKc2yER3P8V41WqJaUVsvubh6gSmgfPKZJ7EPABHkoVxDGHHGHQzFQfRheJ1UKzejpkdQA",
  "key24": "3LxCw9b6vB5sSrmSmJVcRC9sTDvqS59arRymHUN1vTAQadjjhsPpCZsvJWA7ubBXvS2hpq1FDRtJXUiyfT5UNwJf",
  "key25": "495zncPFy817xwUXpC8FLoKnkgHKti7Vz6yqr1wwxbojXgKTt3rJxiSGFHDhMYr9gyR6YqGTobEB9EgkkQpCBD7R",
  "key26": "2ESjL9TW28GERdBMTLrwR7S8zpmPsx6ZdGeHsyMLqtuKzU7S8oFfbQNoDdgP1YPfXCN45cji732UYwCSkKw1F1WX",
  "key27": "4De6yj5RF8sbJehzwP4627246kHv1iaxWohaJJiD2rkKMEWCFmZsQHJtszAEG1S1guXhSYUKH4VYqZcHTS1da7kG",
  "key28": "VtKwswSH7Xjp8vXTTS37tU6MbZV4WeNXXT2XH5naXVhZK7cgDJjK2xqV9DX7RQiQWPGvW1pjjTPeEnRZmA9rmKZ",
  "key29": "5xc61MkfVm41es6UG9tDAUrsJjDENT5uMyVcftVEkixc985eRSsnWpcJFMhtxVgVNbDYfUMKP9qR5fTh9Z4C13fy",
  "key30": "66aEbw9jwmDBsotPSM6uxP1VQHs2toAi6DQyygQ58Rw9LeNwgQZKnrBQLzoet2RqEgqnichk5ynfr6Y4Jr2XDQDv",
  "key31": "2iByucBBgRH7A45go8EhDdJ24n4hgZZu2HgGLnqinWemdPcoypzeQYuXcJvtrxGYdMxg25AJDh1uB4zNRmERq1MM",
  "key32": "1H2aLJN7ALQnu9uEdwGBi99jvUvCAhE9WffmYxFais5RkoPbbwiyNeBcWui1mv38o2DAEkfbFgGD3ekMBXhiXYg",
  "key33": "4PXyFpTt6CdAL6tV9JyZbasZxfPfcEa1oJByf4XrXs11JD9azan7F2NsjQfSM9uU76LzkTufHgRr341DNkngnM1",
  "key34": "3367qWYgQgKSuv3UHT9uPD5fsVNrHLBNwqLC6raYDGurnnZ5tqDCwDz6Jhe5rTQJAva59znjGchNGUQ7eqeGp4Ce",
  "key35": "5D6cin7KrGjEBXJfvu3agn3R1gaGpiBcB9rSEtTWLDezTyMw9JPxTEnkwQjGp8PQ9YsooCeJg27JpkmhzqTzJyKy",
  "key36": "4HJ2P5TdTisH88woMG8J8iqsikw5L2FJbaueWE3Aqgk3jdtH9YKbdQdHrme7cf6SPJR7umnH48V1YJRkyhnFe7P3",
  "key37": "2PMLYZeKqFFPxMAWJUkfT4tBAn7Q4xXnJ3M3awCg5EXHDRgsf3jkBYLUf7vfNt6suS1PAP841eKNT8wBABAaNY2g",
  "key38": "4cpqMviP9LqaY54HLdvhNHpiXHLQjhm7qjuVjrfHAWc6hFh6kcWqAp4p2gorQ6eh6SxkSB5WcFGi7cXDwjhsgK8B",
  "key39": "55FzQh9aH33AwagxGssybJ9TaT28AWNKx35esDuMUXZJYKZa1X7vMmfTwbQwf7Ei1Z3pHK7dsaRKE7iuEEPpSf39",
  "key40": "2G1gWobsnGVc6Koj1r1vbPabyKHLnbeV2GJGNq6hZHSzpTVjsLTGyQFsKcizHkhJKmErVHX5nfnBj2atdNEQJgCW",
  "key41": "5EhRwZXbzLbTwgjAhcFYaCQEeJK9ioiN8u5S9nJ5b3GbaRQcN6GJhPH2EztsyWdoGUacWFp5GW5dK2s2cK1mjfqU",
  "key42": "3UTAjSipEqsegtVVKeTDWZ6xQhFtzyjytt2XLkt7kj7gvcTX83nQFC7xzbJjVHg1YfwCjwdL4g21UNLN2sULXziE",
  "key43": "5eo1qdYc3bqKq1Buf5mm1Fv59xZW7dB42AriUPdSDm56MQDEnmtZE1fedWRxZe2ziYF7izrB2VV7MZiDMdq1fSSz"
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
