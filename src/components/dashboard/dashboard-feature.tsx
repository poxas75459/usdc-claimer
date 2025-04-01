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
    "Q5ayfyoMBsvqKMaza6qeHf5wTLDaYhBWP7gJbChFNqgNmnHy8ddMBzUMfg92xy21uiVpdaXg1P9rNTECAWYH9dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56gUvBFHyqZmwjyRWnaGTXSQnAesXZfHFPxEeUUjZ9J75oJ98JBQfnRrdvkDDQA2g3q4N81ih2x4noV92SoBgvsJ",
  "key1": "Ry9g8v99EQod1qgoMEZwGZdXUAdGoag7YMhYLJnnB15oMbgmaY8xszYUZQq6fWUTmpEHCCZ9oDBerF745fFVBr4",
  "key2": "4yvrJL7YgFSW4hmNB9nqbKeqvprzoFNcmWb24KjL7ucJPfzaDtBay4ooBoaGmkkKGECA7Wa4HYYD62PBX2yEgfjo",
  "key3": "4KmxY4ggrZLbfroosBnbLAQAA3Xekd5uihCSUec3TjvvNXYEdHETJtS3iPwi6jX6WTcaSagsr9RAkrxihiMoDNP3",
  "key4": "59XnFNYrqexPjQbitmBJBLFotsGcM8A6fY9UGUZp7pwZDzKcq7aZr8jZaZp1D7UUkoFgut3reUCJS8mk2cfGqzJs",
  "key5": "41EN44zZy2c4NPzEDNmx5wHgfj4ptWuQAaRspGuGD8zqzhYg2L7TpB6gPtfN8nx63LHJWSYHzMqEuQVmrnfA2gBk",
  "key6": "EB5hMr8QeUrSVyAv4aJFALJRQD5Rm13xTLoJxysfxsqTYAe99ix8agA5AYkYZUWUZcPceyWi8q7gLM5tyAC2uUx",
  "key7": "6181B6esQ2yumn3jbwD57QdNurn8K28jUdsHYja9Ur4aAsaYHn1mDbVo9bEnGznP7RL39gCTCGzY8GcB8YgE2bdK",
  "key8": "3NAaUFT9nXGqYGm98WYnkGRsBKBj89mB3v1cpG19txg17aZMkRSvNj9s7UPUSRRAgkP89UawEuroHxUkqmqxR6ut",
  "key9": "2U2AikEcYtrDnDjv4Cv5Krvh6hR16vTmwwYb9KAKR7A1peewgP8zLaFYxqbj12tmDRnBomqQFoHouE3Pd1tZNf1L",
  "key10": "2sW6zb3fbzBb8rAngXGzraKtgqD4vBGCRwhEngZXvhkWep3Ug8UXgZnJWEQ5icW37VB5vQr1fXVXtD9xvnVMvDiq",
  "key11": "2ew9bgMtFNorYCKKmizfKMXDq3jtD9YbUGkCn88AXkVgT4boX22LVRiguccMVKuuJMSojtqaGaxxKHfnkqpJUjLV",
  "key12": "cPpXgpEmFDVsFR3a4THkTYsDhXU4KBbuGMh5W5AVyGuuMFrHAYzSrVDfR7w5V6gnEKxBMHqFi1GpREPseb6ChG3",
  "key13": "2tMYaJn58e3KrPtuVb3dRvDL4XwCMtRNriKNPe6DFEy9HUFVXZANS8w8c186bRQk2HAWp6FVeruuViHaiRhh4WhP",
  "key14": "bZMaScHjUFa3KX6X3HccErRhSPC4SKdatyy3j5daHCvJyvW5q8UcT6aPaUpGTmmTs4Qezip8WddTJx5YeiLEDB9",
  "key15": "5vU58RGdzFcaajn6S83BSSTgFp3jX3s3ZW3SM2nvji6cvYGiWFxAkNLNSP8GnK9mQMthtsm2mPbf3Caf2yR7Khr1",
  "key16": "ry5CvRN5J2eCFwuJyC2pF9ACyhW3EZeFG64Xi45HFTAUjqJPcoK26EAGwSJvjXiDuwwKPkpxoKuCZH9Zgp6ERjK",
  "key17": "23R7EqRUcmaXMWZxoSHCT8K6eUStSSYhGGucetpLt8CwAe36JBr7tLkrW4T2gEV74a1GuBgM6Wb63itwr2UC7EYx",
  "key18": "4SmXgFfWNuw8UkAmDvm1F3CTYJtwEnYp3JKjjrdco98PMebfEFFa7LMZQzXEB5nSN9ZY2kXK6BDBrLhxw1brz6UT",
  "key19": "5WP9tZNDW9an4n55tEUmo7kG4zgArR6eh9RcNUmT6FyAvPvb94QoMzEoFWoTtLLqUT57Aa9gAhwJ2YPZPppz6EzE",
  "key20": "4LFi2sbxaTkNFbezxmRPAwtqBeXDYofkyQLYPHbqwaZB3g5RU9yfhCEsNS88wKcBbc5kB1wnemMcNRrP4LCEykht",
  "key21": "2V6eH6xqgsceiGtJf5dMokh5xKjgC4z4wkgCG1QHgN9DGSiuvnLxZG9X8RmKYXqKT4nXsukrn3V7aV8YbZueiwz1",
  "key22": "4r14k897CXCgXRnJfn6dsuoazH9XXKvmb1PVvuiXuH343rvWtyyNf9kPq3CV1ZtSts9hNPqDjhprnEyak7qg8C5X",
  "key23": "39qHRVLjwRLrXfsveEkW8426oaSHkibhzjUgLt38m4Vy5YEtpB93iZ8V2ZrSYFhGotsrWXVkWAmnPQAfyUDbbEwD",
  "key24": "3cpKHuQMD2WQ1RVQcuQ3QzxgYxEbJgVM91H9fsDu2TexAkjxB4poQodgoRqRKmdK57XHtK5bc15AbpyobPE7sFBp",
  "key25": "9qbd2iQZnHtzmUyMvALke47CMEWp3VMtaQC4z9k1z5JqoqzCqL7en2gHTWdBJD1DAcA3iW2CPtGZkKUGCLnMn8Q",
  "key26": "4KcpoKmj9fSHJkgnsWsXRRFnxGw28QRxmgSUivLBN2QxD8W61c5w1fbyRkmNAuzxNsrySB5bEZp5yV5yZ9F9h3je",
  "key27": "2PgAEFHbbpc2BQcdPZxfmn3h9LTS2Qjh5Pt8BJyngR8kcpAKQdZgyba5eALiutfhoTFEcTk5DuAhEc1J3N5Y5Sva",
  "key28": "KCoBmwAFqKSgVubcmKD9cwRRxpcNTWr3R1VFUoiaYYBAvTrwm6g2vHfvCuSPCdZQp2jfeY54mXny3ZqRZhVDJh3",
  "key29": "2xkfRXLkFemHRpzoCK2wxJbkBX3dbAixGFkfkgSDyNjiVn4cWpUrKqdprEb6U9wKxMfEQZPC22Gem7zmbnBQtneM",
  "key30": "4snvzgBWLShswJnfm9AvDTaFFqtEoLw4D4Hpf2EeYfLfLZRWZtbnTEQ4PWRReLhZz5Dy3C1U5pLkt835tEdWDxWq",
  "key31": "UdqXpDU5mksrfTer5L2HjZuHebgFVmiBbRtbUKRooPgnNtwxsmdqLMQUuS34438jfpgfHeEstXRzHza6ewAQhoV",
  "key32": "4XJQj1VXbYuHmrqBWYXnnTt1aDhyUsGrWHAMJDKPkkpsnn2Qx9fQbQNtyENdDz2cJ4pAa1C2eivkRUbF52o6Z5Ee",
  "key33": "3dsbHCx316vmWL2sekSd8WPaEGT8d2FZP4BkRYEztdjbh5aydf1cK4UTT4Am8ZDBCmYQeDuUBgKmXwR7ENyjJNju",
  "key34": "4pBtGkjgQyjJffnxavV2ka2vjsWtDutiTn3QGyQpFEPRe2C6GcsopDEsBTBamnkEq1YNKrib2QirDHK5F3emkD4E",
  "key35": "4cGPZE8fd6SCgBSE2sNKb2PBaavroLHbAHyR28u63Yr5PN9xqU2fwZEXD1THqLB1E7bukDXb9KnQLtrcLFeY9ktp",
  "key36": "3AQkfeaFUoSmDdjgAZtQfHiivkKPJXhSon496GE2YoTqw1nNyJKaPagHK7j9dXhPdT6d36RguBEzu66vdRzkXGVy"
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
