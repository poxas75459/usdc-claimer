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
    "4vX1oAzxH1LwK1goR4VCUC7SupseC6NNRQGT8ScYuFMtH6z7ugjkRaqn2pd6JfeEiiw79dGyP25GgUCRZkvb6DBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnAKBcrJDZAwqJPHV9HXBPKodjnpsdHwYSEUia52puqyeaZ7YYNS7JtFR1TTyBwcmVw47tK1jteMVJcxGTjwcwu",
  "key1": "5pvKSYTY7tiuKZtyGGHrovkGapa7kZwtYpBCA8A82y9xruN1Ab6ntG8tkKuGoDhgpTkMkn5XLM5TeVhosarULoHs",
  "key2": "63dxybhqaFybCqRMawPFXVpn7cYy2SoLx1Gp9fTp93bfoTMK8QsXwk8WDCzkiuYvaW5DC2wtCp49oKzWgxSvveaY",
  "key3": "2XcHS7rJsahGTaUADHDETgbzB8DvgVdMkq9eALpH88Do3sGJM1jkACpjU4Q2p8tYPEovddKLFxf4sUQUag8p3Zvp",
  "key4": "Rb5Ae7eWJQJebXgVGwQ6eJXYMPp1DPMC1Cn2mKHm6tisDttS3jsfxJkshA3LjQLSUVhXJh8nV431Gq8d6CaPkHf",
  "key5": "2bsxE96RaHipf1VeQ1igkekZzcZTZVocDVuRJMka6P2BeEwnHa3aS69ZQRbqkhmbQy8f58SJj3ZimkmjKniBTJr5",
  "key6": "2urmudKLytSKQrm39FJF4uoUQDiNdTgkrRJe62HX8rRULLaPTiTyKHNG4UHfzjkDZMGwKFhXXT7vkv8GfB215Bv8",
  "key7": "3uw6RvHmWdtb1e1zRyNXWPn4BpVtZES7vruLdoLZBJfibRAKv32NyKJhjXha2SaPcR11GoPuejRZWkHPCd79VqKd",
  "key8": "4cTEzkzdqGTAbw9YRzNFFh8DppyJGG5GrgmpZRpjEvJHBNri1ZvNL3NgCtTFwxSDuBM33eFytVWDEnfxuBNpXEcm",
  "key9": "3a5MVCCCQDkM7MsShr9qQCHbYBpEfHsn6RnQqRG4z6jxJoFhF3rZRArWRWVj3kZXyrb6oCTfwzuZLNJL4XThv1qh",
  "key10": "2aR5gPfrPvtGhkFNqhSxFVusQSwW7f2UWN7YjJyomroocmc3HqjFnmce1LsEYQ2rB57VPKSV9E73tjNRWLFrswCd",
  "key11": "3qsP3CgfRQianmtCncQqPm4SD7QrEtmLqcVtiufwXsCb1tnPaLXvPHiNKd3UWzVHRM43edzpcWfNbiDwtMa6Lxis",
  "key12": "8UQA3qB1b4RBdFGTZoP6QY9pdKuqAms38CPEzdViDD4c3MKekRKx5oi7WGfSs68kBaEuvqxWmNKmBvTM5NCUSpj",
  "key13": "5thRZTx2tJgPuc6r5TpAZ1VD2nMuuExFzbsK3LunPZYU7vJf1pXvMt4DDD9kssKLFJBtWA61swg9CfzQGapeFrkg",
  "key14": "5dHghnM1vkxL5qwE9w3f2EC7iBZFxgzyd2iioMCJHAMgMMv9r8sirCgqfEtRumMfUZyrREdo1Y5vL4r1NzAnvDBK",
  "key15": "3LGK5VeXHa7dQNTbiPq5NBio9zFg1n4iZHArHu2Ht6T4jnBzPbConNHXmg38MpWvqsYkjneR2UhrmgYWCMK6BNGV",
  "key16": "4fBxLR7nFowa6aT7V9GzMfXftN2vVdfjWqG5K7Yt49xGCSgYBXcJSBtLjtsdhmfz4Zkx64KPhbXdZ8qCfd5Y2f81",
  "key17": "2tfCo8nGMcBZjX4JwGZ5NmukH58XmZ1HiRk5rUSs2LB9ieD8AkJ6xtCzLEf9Bwog5DvfpxArhUR7kejuC8TJTWSy",
  "key18": "5w4gKqb1j9R9zdhsEXmkJShK48mzzgF4hhLJ6xp27mjF953qLN9bdq7L3LsJJMJmARoYaRQ321FhYeE88uardhxk",
  "key19": "52Fo1LESikZShqiw5FBdCLZh3U7xf7M1E6NpbaZyU76v8oEsWwr73SrRYNNxCFWmKvvQJH66qh9BWZrHYY6G3qMh",
  "key20": "2fV1JggME4WF9u3yut3c7o6VDU1Q3rz96DxFAFXMhTSKfBAjUZrK2SwJcdr7hcd5zWHuuY2hX4YTDTVZLn2NyzBa",
  "key21": "GrLNjyLWj4Vb5yh7TAEF1fRT78cp4ZkLSjSD9VPdBQPQWmrjDUfQmorfFYaUKkmJfypyvADgvekvyqGzRqaposX",
  "key22": "4WjXL826HJhnPcrXrmUZCJMcoc2jWLUHy9NZQkaeR1SPiYB7cZQnBYzdijTptuJnTMPrreDaVyafdy6qiW2fDJFp",
  "key23": "42V7jL5txg1Lpa1MssNtWFu6XtAQYTw7xkAgLpNFETuseEfQaH68J5ZbJzdiB9RDTKyVVRMNMxzKF5iYbL1BCeYw",
  "key24": "4ntFBQNHYkqS14nPTBN1N6kS2XbebnmaczKKcB3Zhyw4zsnkXHSYKf6TxJcCe8RY4nz6kfkDyeZbdLdncbKncCTT",
  "key25": "KhHrcoPbBZ16viwLn3W2VkCcnwanq9j9U4pbgaDkv2V7UfNbuVnSBazkngae3iyPP4vQszm2J6MvtwNuJBD4oSj",
  "key26": "4xxLyNyE865a2vvjia4pqpYCjHUWwbHkwD962pfUXkewKCtJrQknfd5UmT7efTRGQU3JFXxKo4NguiV9JfHiSgvd",
  "key27": "3sDPpMGQFE8BmCdJqj4k61ivmtRLfPiFjnq4QdP8oBBCBsMVT7vCzMg1RqdfXshYfVVBaeNN8FBYoHqAJH9uqxqU",
  "key28": "4L84pFtBxQtargosKM5ZuTcv57LYMHVUGYWbi52wHfKTzBhq9x5HY6pLYoRsWnoeQruTz55WwqA3snq8mX6AEGp7",
  "key29": "4C2xXdaVytvypxdBVNRpbb8eyeKpDbtgLZThwynEa81moRXJoupRjft3dwh9GMRjzUsVADFx8tTcEJy1D1j7yeTt",
  "key30": "129NDPWSLGjPGpvGdsvaYwtHgJxd2MVbWHeeTHTkQcVYjoadV7TwKdftzCf9DGorekVs9W7ozqQCoLEPWhzjUsug",
  "key31": "fcK4Xo5u3ho5o5nb2qSDn774DvK53KExvhmMx6ER8WdzVpvuLaBDL4WcTAjMuvbRp267snzYZC3xA2khBB9T2zQ",
  "key32": "4sVHNXTpuRryYnGKK62rD8SMYykP9CJzUUVsfBeaLmogqcy9y3fHjb3xvuhb1wtCf3GXtUChUYDSvkx4z7aEWYwT",
  "key33": "5EZdbJQ5Jifihjke7MVA1FWPnwdS8MzBVRx6evo9dgaGLUybG1f3VJFTDHRLVPDL5SYFQ9z6PXTa81aKMVyCrDU",
  "key34": "24MnV9y5Ad7E7Vsgm7hrTrR3svJy5q2UGeDWbDqXQgNKNKMbjgZysLouxcg46pLK3xk33thVDS6yGipLdW1fN4ds",
  "key35": "2opBht6r6d3DzwrhaDySdSzX2fH6B7PboxGVcqdbEPfF6vxjCwRh8Wgt4ororAkiFs29p4CcFXD3rxCbosj3Fkcn",
  "key36": "22oWJdj7bu9QojguPbPah58cRJYmH7gX7xtQufqme7Z2VEJJHLFMcBiWHZ7yMX7UDVki1WSCP2aRek46zGSY9kQN",
  "key37": "5S2rEbNqAiWsHNN4s6LsSzX4EjnGieDxpd8d3g3adha8pcUdtNAJVHiJyUsSqewf8oJnWooav3BQz5p1Tu7xddWR"
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
