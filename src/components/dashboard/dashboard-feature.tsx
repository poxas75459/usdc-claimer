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
    "2mFt9E3nyxk4eQHjYH5349SKVKSZgJzXkqBBoSKviVNRYPXHT1Ay3A8FGZwNHL3qwjWksjLHBzsv9eXpkJgwU6kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49gXi8a5D9ZYgZabrnZdhpo6vBn3Yt8JwgbDn1yi89eM3d9a8ioVsP96QcgdHZTREmpkqBHhqXwqryJBeAkpRagX",
  "key1": "3jYo7ae29vysKgriNiYQfHh41Kff9ZwguB7pZwquJznpPjsAjL4dVXFtWeo4H439Pa4NLx6xqZsJ8QjvdUeS9YqS",
  "key2": "3JKMVGbhpVaBmei9aRS5aKXwHCb6D35nCsQzrifVHdWR5khgBsBhiGPUZq89BqYX82kRPhbUDcqCWpn2x5K5ACR1",
  "key3": "2y6QHrevwufR1ayWQfu1r44CeHqcD9Cv8f1XuAG52HCGgSmcKUcfLiR2nM7byNxBrEeVUVmGnMVs3AKucZgvWoEE",
  "key4": "4AiM557AoobRdq2FEc5uRVGwL5mBNvhmwNdwGwuxLkSTdXkQ3vLNDXtLw7HeqM2ov6QxMexbvW1vpcxx58AJXkLr",
  "key5": "2hEqe6YSLfDfpjcUG27Bzw5yY8aiZniLEZBxUDEwa4N4iEYVsxsgNb43CppYDcNCvXnxYyQtMKn9FXHz5zTMi9U",
  "key6": "K2Cao5pC6gJTSjYRPwB3Rqo7668t1BsuMYXuSBWL4aAaenCv7rz3zqcdP4fAAdzAmbuFDZgrahYkSBnJQ8YR5ws",
  "key7": "4G6JdUhAvAuV5RaxasLooS1sac95QEF9u2WHCuybAdKQ9vccucXJuBmu1MXzADhC59bJLX8XiUV7koMF9STBy7Na",
  "key8": "5327qdaqFNGUR3cPowhPHaeuXvgV3Z3PZvm4Tpp7AAwhBcEUG1RHmdLzDXKntGozsqSmZztv6fJxUCxfBYbbZYwo",
  "key9": "DQE1JAu9qsuRssvM1i66gkQRmJDMWZ5VMQe5JezPVAzDS9wsxjYnEK73FhuY3kW8Nv8APzMWzz8fNQENS8HxFHA",
  "key10": "jN4Vp4SBZNPsHEcjyCV4Fqfa1o6i611Jpe5Dg3SaznCaaadXFbez1HnDjf2SciwknpzvYT5jAuVgPQaYWkQC1U6",
  "key11": "YmdGAZyvySKTaV4zDj6F7rbbrcRBzVUTHeLHB99ynn1cSjbiaZ84yR3aYT2LZ33p7NrnWTHArmZcAbL1gnCpwVg",
  "key12": "4rcHwPJuYj8eDNvUnJDFezymqub56AQdKHJNiHz1aVXdv8X1MNqxg2tdhRcXz32dAdovG7Y6iScY3oLtLnKAbsWG",
  "key13": "3bMHQpE9gvSH7k6Hq3b9zJ3WhMnu3QiR6bchQD3uzz4CrXqhrd2AjyivaEv66NPTUk1gfMZcQfRjxvFKCsai3BHv",
  "key14": "4ZwQ8sB7MLyArqKrjmmzCSF6HEKLGHhbsPDbtV7SvidiuFm7d5PYYeaTi77czDBWuovKoqFbXfamncmwFLtx1Z5",
  "key15": "5EoTEuAvZgNzQWHUikKjDUtiwrEKFRKZdsNtmev9ZzAVX4eSS6kE8qPuc7he6UuZK5XptEcNzSMwowLKErGpMHJe",
  "key16": "3tzEq7zP9z9XcFPTDYnmFA3LPdJrX5FxuoB1sQiS49rwvhA8WNViuRJuZw2ieYd1SzjbskUGLtmp5Jr7LWmfBWzf",
  "key17": "43kcCEvgKcSQRfQJ15APKHJHdnfMax78vaguFPUmXRjnDzJHXjqMtia5LrBJqDQnU5khCWLVrsaT5aQAQNDY3qrF",
  "key18": "4eKwm4ZMKhxNrYMNKz6KbPEnPW794fZSjCpxcsmC4YvDXh6PG1H4ijKzmgCfyGEaYEpk9VrzgzjuKUPbLSeDAdPw",
  "key19": "3Y6u4TXC1Bz7VMLC45KNHMUcq1qcovQq5h5Uv2iPqtKoSytMr3BZRmV9BCywrtUVqjdpJwHjn2pg68wL1XSpQ2rN",
  "key20": "4K7H7y8wPTNKuM68V5syP54sdJSUAgv2Em7C8TYgDDTiZU7tbrNnC2HUqtmG3K2d52fDSWzsXmBsD9kTJ3rvUJoa",
  "key21": "61vGFqQuUHqwkUzSgWFgNSXm3EQ9ah5Aq7nCcD3vEEpEZfCf5r7g9CkKW1EWtRkFu7eChsYA5r3kAiHshQo7N9mo",
  "key22": "2uxBLK71RWXURm2gkJPEbaGENa5Sben24fURFR1nMfGSZLEAh2tkqJJxsjRWuS3aQH2jaKtK6VTsXxLTW1LxmADf",
  "key23": "up1j8z9hUEarUC8v3bKPMGRNEMRi4rZtjD73WU8rJATG6nrQ9divrsD57PEDqCtNH1tftoK3cFxbQZ3oY65SXkv",
  "key24": "5jSq2TqU1TyPgLK2NAp27fRQEwzrubanaKSSFPTNhKb7tNUccbAjhgPaHrx1AUrnxav4CPywzkxWs5gJPoPhi3o7",
  "key25": "3BT1xLJ1y1aCBC5Gp99Xbmab5yHscjbjHVqKnGDjak1GpiyUSFZjv269YyFG6FZTWJTMQdmhzwE2ATquQSjQUJ7A",
  "key26": "NGUjs3mSe4M9ApTQNG6WAEhghJJmydfPZwghMjdf1b868mSHFYZTdpEHw7drBPAahSnSBR76YBWr3v7zCs71qq4",
  "key27": "AwLiawQ6GhQJvfDv4Y64aLCqexGiyckiDZQasCET7aCVcLJc5Ms1H8h782C8bwTZ3pcwZnA7rhui4EbZsvKh8E7",
  "key28": "5L123G8fm5EmrGMhWs6Gi9YK5QPkUnEHaYDzULKNHB6iXjKLbHqvdWPXdNPy7G8QDXchXi4Ry7mvsxTzGNHZmvJ6",
  "key29": "2DMxcyeZqGrzLkHPiALZeAxcd5UfNqtzzaK48rgTeZBrE2uRsWvJ4qFnEduHdCEAbGxtSXtRZjkc8mqxg8jL6YYq",
  "key30": "2btjcCyJretW69bTnMT5Vigm9vDrTpGMr4bx9Bkm5VuaB2ykkU4jpnmBKgQy1kwCQLzjGxgtdxc6gT6cfWfJZxp5",
  "key31": "4iNnCDwgqu7suJHwc2sj56CnCPGLyhDvuwQKxPEecY8hpSnzo8PP2eY5qqXWPicFmArSABGhR5yLCbQ5GbwufGXy",
  "key32": "5dxo5s89GGQStbHe5SmbcwArXvCaaoaFaLcTpRXunY7AKUsZxTf6UwEqs53Ed779BSP5FyRRwEPuKoGcd6h8uf8c",
  "key33": "2YZrG727gabwQASCBJXTsaXX2k9hfHQTc1W6TwSQCTiUBG1PkGxHRMT5Qvjn9FWxgt83ac4vEiu7jb7rbYDT8B67",
  "key34": "iUowWpkE3Bxk1NjUKUpf8yLviww1B7ZrraFzmSBisHJtij39QvnEWQFbnuqhyGbyNmr75uuyJcYKBDRMoPJ396R",
  "key35": "42mpXjKxSDGT7MpgYVKkYd2C1QeBSxo3jVcnM8geKrmoZF9ws9evhXpXLRQfFjanTngRMF6Br9fMhwoon4jVCH2V",
  "key36": "5dJUPPJHGohfzhJKCyaTnx869shropUP8rorejdw1qBrhs5LvVDzy5b1AQ6DuPmD7BuAnAeX2nBKsmDnTZW88WVo",
  "key37": "5GsDTX35ccp7qYJ119XSjiTofmV5ujsfHuATfn86ngWzkqyUAeojVrvuH6k8wjc23QZsbRZPKzqpt4rYnVQHg9no",
  "key38": "4NRaKpdJPK8Ja7UJkwN991JnenfTRBj8xsVGrWa8a8DtSchhJNAQHMDRYE5bZstEv7MZNMQv5qYAmhLh7LvXnYDs",
  "key39": "33zCgZSfCvM2gxAQpDMz647nDrppjYbdvboZi7rUHaACuTnv8bMfqNXX9gHkwE8TzbRGGskBvfM4kaPUTv4QRKaz",
  "key40": "2HRzWrK9UM1CpmFrz1snzoLxQJzBoUk4ptHAP5bzCKKuLBdsN5NCddKFzRBqShdFq7wf9zJqKDf7p1ZnW12QL8Hb",
  "key41": "4mdjtAVbNwJVKQf4qGbWfoCaC7q4v16YPLYEpENkLBs6msU1e7L5PaswMX15v91sEz3Uq7QBK7qEZviCeBaPkxuW",
  "key42": "2W5E7LC4fSmFRLoJ3C5qaRcNw77ZphiH4UjtTktYSojsPiBkxs1uk2zFvngqKb89AiFvJcVC1CaUuY5Ymy8RSPZh",
  "key43": "3XNYtZdrBxE4xh63CLbPspn9SGGQ1vtaAitR6dPMV3HreA2EeKBk24nbzH9dyUuDeKmHYo5zsJCCm5wJAF1a6GqU",
  "key44": "5jtTNJ7YscB1ZPiBa7arKnWNCWBk7gUGKVH8G798HTyyjYCizBZpvGrqyAPQks5pwHrKaYE1KWLGySgxHkLfhMzj",
  "key45": "4wSbhvrKxen35RLMkH4W2NBfYGD3yE9NCmvS9xstfPH1ooutxHxur2QgcwRnTTmd9QxKhjJn5RaHUxSYn4ykmxu2",
  "key46": "4JvxN6sLvD87oXnPv82VbvanQ8wQSoq5kHEGMtTh9SDonjH2QD2qfji252ADZM9uiiJLVG8n1aJ3vVWwLUfkwust",
  "key47": "5pPZMGLLiSFwiSZvyF1Cn4r2tnHwVRYYuz2x4EDSwp71x7JvmRNMWcUEjeq2K4mK8VrSDEeBZw5WYG4JLgHQYGhN",
  "key48": "3xsNPSJ8rt9pxNqFc4bDjTHbkA1oERV71aZTvkcScWC4oRLq845oMMzES3GARVVL3k4JJzjygeQZv4M5sYPRMvda",
  "key49": "2dmdk6J1vPdioQQ15XA4TxSt24oVY1czEWijuLqTaZvzADWJtt8zmsLGRyHRxhuajuMNa1joB1q6Vzq2Xexobico"
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
