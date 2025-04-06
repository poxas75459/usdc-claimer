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
    "2HY3jyovrioD5mBdjRkawbwDWtg4QC8xjjHBvVqEuzAV1J1fDbXXuDBgk2wUU3KkvPduhcgXroyMKf9LXKWJ87KY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kaiuhup98wBvXx8m3n3iWzGV8uJE4Yad1bQtPQ5ydomLhgd7k8UcbscHw4h7q8BjNNYBNegkYz4PNNCfHVJPj8R",
  "key1": "65zDTEb17qLfgZdDCYCbQjzd9HYK8M3FCPpve2XKBjnkCuNFg5eW6d3kJDRhxUFHKRbLyLjVN2Mqr5rc348gBrN6",
  "key2": "3JcJsQXiSsPxVMJgFy4d7ZzjVAovGw4Q2JiJ3jburJXTnXYmJ8xi3Gs76yvHoWUgsfzWQspkMZGQeSVcdpL3dhMd",
  "key3": "JGBnJVWsusTv4neFTxWVQgqdWx4JypGHSVkTWgQqmbMag9SwubwtU4aiGEgT2PZjk1PiSbZLxMT6eDtNz8uBJxz",
  "key4": "zJjQxorAVp6WPCRfTuoFSLfYh4xkHGtGmkVdx8XHisZ1eafjEuF6ns5TY2cPopEfb8r6qHT7kC7JSxuXgg1CRb5",
  "key5": "54UFFUkA7MpmQxvN421E3Um642L2YaKp3HYWdB6XRtbEteJRJ97jHTd8dpB9hru1cQLWqCqbP2GdVyG4zyD68cZ1",
  "key6": "5mxcoqbnivHscsUTnUixS1mMWcHEnmribYJk8LqdujxuSnGtHhST7ZrmdQvoK4P1VSfJaH7ok2XTkgqCopJTsEKy",
  "key7": "2MWCa243nJngetA91yi9445AtMqyJYJi3eWk8AdiE2dau2TYap9zn14YLVg2wfoaBnAsRP5y4GBpXKGuGsjU4BeV",
  "key8": "3tZmQhie13qPaTbTDYJ33kXNBDJHU2dkBcDPxqhiB1nmSJSB3derrVEauSEta2iv5Mu2VCtDB4sjZeFRSNR56x1k",
  "key9": "4iynSs7kyoqQxQp1xAxpRGx2cbmmRAzSaN7JiJ2NHJeLwLLovwU1NHvsaYoLJk8S2QHE4cxVDmWf9hySH1jbC2bG",
  "key10": "5woQEnwMXCC9kfWTcKyW67mK94mu37r2UYKBhBQfs7NSi98oxkw5m59nv4D612x4Tj9nVP6ZYE75KsWX5udBfGS4",
  "key11": "36QndzMJkrU4XgfYNmV93UFjX3mvXwyGy7p3KZLK1TotDctrWqtTa38o8WBxbffBGLiYPANeMiLppafwG59mJxEA",
  "key12": "4pGetA2k6fpUiszRqTSdapDyhKNWGsucojQbK5eQPnj7QfXSNm7oWPPqNZ5h2y98mDHzoCFcJiZkmUe6ghbRp8Jf",
  "key13": "4R5tZBdsoGVZ7v4pcVFTGUp3tBCHTFHkxvSLcugLRYBYuaNrWsGfUApDPTAJmHiFNig6QMqXN8Q3kD4DUmJegkjR",
  "key14": "2xWKbVYbYiiA3qRAFACRFGTdaSZxsq5MLUzrvsXdRh7kMYsBVz8bD5r5zXuAS5aN8AZ2ox5UHquunAiaASRba6dR",
  "key15": "39P5yg1Yej3xef3RQxSncrNqTBX2cGgXH9nqxG52CixSMezDEGyvHaz9H9dbKjCzJvVD8bq4BUadNB45fAMKc1T1",
  "key16": "5XCwgXndEzkTbcC53fWGgRrSJKVbXs5YYWGz1rvoNLCF8t49QEYFFAuWESwMsDx3YYS9Lqpq7upxYqpQ8YF1NJK7",
  "key17": "2t2XeeEo2eLDV3YNXgwESSuRUKeEQirwj1SHBRMNiag4fCACnFW9KdFQhB4ug7aM2RYaauJysCMFs3oMRGRpWvUw",
  "key18": "4fDXM6QyeH5iepcFbLJNixJTeX4F9kt1bB62XAZPrxyoZ3ZJi5gGs2k4v51G4c86SU6HfhMyJA7PRnTbcDquhmPq",
  "key19": "2SQehubqb2N8mGpYsvpV4zszvD65bY9qbiCJQbz7N6oXCRgyUQ3pjeRNvuEU79j4X4WMQC8uVgLV6fm55ii3e9U9",
  "key20": "3Mq3WNM6zRJY5gvwDSUZTNyRsBBDBFDTQ9HR2UjPm33kwJ9qwcYXk7VEnvUf1A5VkNL1atqcnjJfgukvyRGmZj3y",
  "key21": "3Aw8RtJHL7djUxfQCPyUWWhGE1TaNeK9W2eoDC4zdjtqZQgHTeMjuGyHsGEYK7GozN9cn276Ukee8abjUXqkrWUF",
  "key22": "4jsSSPnonkE22PAh4QhZVPU1Z59ZdoRqncRdpbzJDV3VDFrdYtVYTkwjoJTaR4LhdVKHuhCnn3jHxnPZucDn19gg",
  "key23": "2SdQdEwGzPTnsg4JrK5JsZiEG3ftxioEvjJnECiMV4ehoxFPPvEYCwu9bcouyyYvtunwzDefQfyG6mh1cd51kQC7",
  "key24": "526gHKutfjzJSe4UjbA52yEnWPSZp9ezFPgeri4WzZZQostPDfqH5sNGEp65UTCK2GYCQRoxHVNtwfctJQDuDyQk",
  "key25": "4opbUtatpkaBvdFF2JA3pfJgTHpC7QL1NTYBTfr56x5EohcQXDaKDUEthhoh6azjbYgM72juk3hDJnAvmhHyc7uX",
  "key26": "4tebAnfsUnD9cuHsNupiaWBtY6QPyyXPiptMt9Nk9StcZHVahh4VT6Jk3mo8sPZgc1QUKkQnnmyQzvEvnno4CPAK",
  "key27": "21BgADzAtBbZJR7Z8xtq2RKs3DEhQsLWYbgEAYuvudmxNU3CTbaS7GR9maFFLz3Gfw3YsfLxapUavQgggiMvk5FU",
  "key28": "4gY74rUiykFFsahRnSFNUAFEZAXgAoQF9AeU7h5Cs2xa8RemEM48DWsYS6wy6ZZM5suzTwDwGDvL7PxT2onZPXLx",
  "key29": "3xi1qWe7psPHsc2fFPoTjuQU1D6H4tcu52UCmBodL89PhJB2LZmSJKnfgYvM38BMcrctFN8ZHYFVVGr5bdzqB9ik",
  "key30": "5LpDMuMzjiCnR7u8VDu234YuaR6GdTMgqc2hihFvJULeZmPwk2eaqcHnzXwuZQL5tjwQYRJqUzgXXFjbcBr8xVA5",
  "key31": "3k8f6g4wGtScjHKjqncSzfFNgjU2AyMyUPFgBX2yXeL2pJyvZgidXu1278ooLP3WaNm94t1AaBjWCr33yYdamTqr",
  "key32": "3uEMjvwEQr8xDDU7A6G7pKMQtK6jhpAxN4GRY5ymQSbANfDnrSH9KJW43ftrDUyEp6RoV3kfgLR34xjs1Rb6THgL"
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
