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
    "56arW3kmAZeBrBBDCEZwev2Gm78LCFvnWFJZ6NByBQuRoc7BnNx7bLVTcVMcq88Z5WkohitNFexEHHPx5rW9Z9C2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X8vATepCK8BWpNs6JU9mbC44YrPkfVk4P752qaHxd18b4rba78FCjF9EMGPU2RmQBfGLZbhVCmEcuqG9vr65DeM",
  "key1": "2ycVZuK1b5f5TNdeGp4RAX4Kkq161MaH77kS7YrovDPkWv1bqoXnHsNceca6nrdFkryhZT96khwDDD22QLqfwpWG",
  "key2": "7cjrQknj9B6T9NWTN6VUvS9KZH4T5HwXwoP3Y83ztFaqmojYjTna8wFytmETs8M1ggAVHTC7wWPsZzDdsCiMwAV",
  "key3": "2vJPtj7nafUMY4q72qAVLikbhoV6ta56c4yzJhnGJTDQgDTkqREhJEBQdcHsqj6jHxm3xyJCMgwwhyUy2HpAioQn",
  "key4": "4L7chRFBJyD1Zkvmcy8iuMVdyN698VC1MSioJyMySqcCWnkNYmvw86nRiwsPoDSJZ1EM9Tfx7jFgF99izpdWQKsr",
  "key5": "4wMw8zW575ya6vQaZgkfZPurgzmZzB72WZYDrh2veSLadu1AfWzEQt49JvuSbuuCgAy4fs8rYbv7G72E8aY6Afk8",
  "key6": "2WbsyU1hPiTmkDpVMWwxQMHcpzUwBZgquVZGWAMpnZnPbdHLPaf1GagRBg4n31B5y5g14p3CDyBpq4ZgN2gaCqkV",
  "key7": "2qr3w33xTt6JtZdpjZhRPVgB76irGsKXM4TJof2n8azZseB78ML4puCrEQN3PgeM3xFvGQSTcoHH9zUZ91c19o3S",
  "key8": "hLs2v53xVgphz9BnHHwdXWJ88Bza1cx2yY1yNYkzSZd63Wcbo7PHeQ3snWuhUBy2qVXxjgweU15VU61yEJkUv5q",
  "key9": "5bRS8QGysS4nEYqtzZbQqE6FmBeNKkUzeMXQYihwnfTWJ1zZHRtheYHYj6Cp2u12Z4WD1txyNm6bByBb4dobyoQS",
  "key10": "5vdALykSGkG5FSeVqiLDcrNNkCbLb5dbvXD8WX849QWPFt4br2JdvjzRmrvZQ9hLhN7AXQ2U2yxgeYSSEccNKoKp",
  "key11": "4RGSuXY7NRKc3EvtewRxRqiT9AzDGMLVNVC15YK3spk5GZ3XSdwPg8HGxZt7Dh5PT8oPB9wm8taZWDCtLhY1JMTR",
  "key12": "571FrPne5V9uEA7nqbwXGZzDwdjLTu4njtjPfK6w35x2mLCgbS4KmroGRhySZn8MMuJRWaB51m683tUy788rZ6Mw",
  "key13": "5kDdn7giN8efMbKJwcyBCapNaVaVq7ha3pHbe4b2fAhQYR3cnqmXYVBbKQY1wbLJ6RRmqTythLEQcn4bEt4dJtvH",
  "key14": "46kKbej2SbgESjuY7KpdCi4DQYtUCiKa1BbyLdVAhcir2zqp8sGLs7RGQy88owQtPMCRbgiXnkbnqvF5Vm8Vnw16",
  "key15": "PYPaTSfJfk3Zk1qzaWRqZdQubK9tAKh3DGYgx2nsznJ6tvWGvA9Djaoh4L7M1v4LiH6G7uJ7FtcJJUzRgXB1VEm",
  "key16": "5aiky39w7SpPbDsJgUpu2d6zhu84oZe5hgZveZAKQXjiN7DpavPxinG6wYugh5wP1hedKgKuQp5gU83SbNiB737i",
  "key17": "3KdT8TgV4HAPS2CSVgUPD9F6ezbWGYPwrVGYHjCiNkAFvXxZMBj3Hf6NSyMuqPec925uY78xE2uP8dJn1KbG15xB",
  "key18": "3z9HLdCsq1F8JsTYTFYguzLpC8Cbn5BV98xq4Bks6aTBwJE2YyuUXjSANXTM6zbDH7rCi1kbrRzc6QSbGHomHpP4",
  "key19": "2T7N1y8MvfDTm7sZXyL5YCZgWE4JNJAAvXe3JkLjeSF7puwiUdXvxJvy37t8z8z1HdbF37yuZzT488bwkcm1GyQe",
  "key20": "4ti3MJBdqM6dargwyy2Lrm5c314nf9z1H2n9r22sdrQE6CJ8jxWotL4MPGgJYd6VS5t62DAAQQtDdCuLYKeJXkp6",
  "key21": "32bE5dqPmV75dvm324XJUEJ64zcYGztRA6cn1fGw2qFQqBpVzchxMtoBXcA9bJhCqPMNpTvZLAAf8AjkWudiGPud",
  "key22": "3Pmo8PFfs4JARuDWuDSKrSfrtcdhfsJfd6ZzWz946yWdQMqCcFSETmz1MEpb9VVAuYzXrDBBCjNxjKM4wDKfUasw",
  "key23": "sD9D5B2C8USfYtsiupBbhPyP2FYJqQFBJWpW7oE15GapMo4QV3g9qdqXa9xNmX8xKqw6jkAd4o5jgAWU5P7qv5N",
  "key24": "5k47torpY4kn5TTPWpE2xKc5gwXZeuvXYizqsJbqPq7pp62E45gQ2k4Y1PDj16rxtT7VGqxgJRGE2Mgsa8aqjmkn",
  "key25": "THrDiFgQJSX29bB3QKGFQbQ5RNE4P6jXYbaqn2A1DCz1G3k4L8DgtGQtv4NY7iTPaQqVV1VGbE1YuUeaZSYur1R",
  "key26": "5HpA4HCwmynRCCW343sMK7sZULcVuUHikJkzQMQ5xZYJfT3i1RRLiDTSagGVS1MrE7jbTjN8xpiyvT2GBf5or31L",
  "key27": "5azHhKYq3KVeRzbuBDPg5eM7YrTbPX755DC3i598dEEzPghWCFkRbBxGd8eECGyMkjXv7DKBTaAV1e6tpSm5jHDq",
  "key28": "4euWBPKqAqTCyoSeuGTsW2rXDnJ6LsgBa7VQMc9ZpGTz2zouzVv7gEsGYen7ike6PGF6p8QRt8ZhhqySGtAzdomV",
  "key29": "221vS1fVZnVjCFkqqmeJY3Ewfy7Qc8x5YBQpgnvEFThi1ogMDsu9zJvmmxHdpeEfoFvc6EJJtxP73Muh6727huYw",
  "key30": "DqmDRm5LxG7okTWbYQcrqNvb36tyXsBGydXjqjVZagZqGqJqsvzvf8ypFtShK3F22iY3mQmX7eDVUyKbNYa1Ga5",
  "key31": "3Fd5Mqw2voDzFHacTGvhDDvkA5ZMEX8NptTKgYk3cSWL4bMSBBLvaiGd9uhovGjXEdV9mXwNEF3WswAG2SCM7cp5",
  "key32": "5qpWATVc6fqXeE2Xa8SGc8TVRc7crsRB4nYETjagHfKEvBgGf1XWP29iYRBezhatjbBFZAAbwCPCV7rZwfZnpCJW",
  "key33": "CqmxXHkvXvxRTGYJsDc63G2sr1DpqoToHQ1WoKXoR5P4v2xiYDGQcir4b27n5yd6qE5TzYuK3cEv7gmNAqMf8aX",
  "key34": "5zSxZmdcbErgr3zUZMuXGL5Jrdpg7cBLZJ18JQUwiFnZSd2gQs8Jua1pKZsWP7Jc1yAiCRSicnFc6LJkuZaHismJ",
  "key35": "3etuofcPdzqXtxTfqDjCKtEDfcuaFR98gDxbxvsqiJKMgaMuFfLM7nQPuJzgo52K15dYxJ9FnjSrmUBaXA1FY2zL",
  "key36": "2wb7ajTnVQszRPvaX3kcot7KEdxo14nT89oyruc4LLhGk3N7xLJVxyfupvhVKmZpWfV6VR6HNBHAkBtbDP33LYd",
  "key37": "2XC69uHyTmVsbP1z3XZ7gjr7EVXf8vwjufVoApXM3VXJQXYTC1avnVPHCJJhprThK5gsX38yBeKtCw7ugVpqUMW5",
  "key38": "24hk8ZatM9F6n1uBTP7ifWtQ97YVu87NmZj23N4J97PmKfkxNWFahRXf6cUuGRqMh3BiiWWqgWtoExoQXxaMvkAX",
  "key39": "3NU5TTdds59PDcmUJbok7NVJvriZNYZB1wmyGWbTfGxzr1DiKsftTJj4Tzz3F6vfGE7q9oYtqZJ3bqPnYNu9QmZg",
  "key40": "5rLnr3QA62x5FaLxz4kp8MpHt2EGZGC8DbNrn8Rq3DJ6ojofthHZd8n8s4rffebzwJtuTucbcAvFAU542HFP4NxQ",
  "key41": "5yHDVGGgqqPJ3po1oM21N1z9esGssrcugFUUsZvt3gSyUKEnjhZ5EX93VxeRxYWySAxHMEoediyahoMeN6tq871g",
  "key42": "2NDzGwUo4k8nUSeKL61rT8eK3tHbf3USAoPScEYdohxvwjQHeepfEVPMqMtcCizHuMUK6QX3DfDZ4cfc4w6KdPt3",
  "key43": "5rukrosGyDjC2ez2sjBd5XswXcFsPESj9ek8bmQ6t15oHb7H2kS43d4SKEzY32HQZU92nkTkZm2DcsjvZGE7SpKp",
  "key44": "2nNX4ynpYP3hqcH3TDvmRGTkEiTxuT7xY45k86m1HgFqMvbxjCdfJbp1TyxeUnd1f5CXj9M9bh9bE1KSD8TcrfqC",
  "key45": "3zdu6T9XKUC4VrGL11bnNgmDCKgu8tcrGTNRg3fHw2Xwi4ZMGZzHBeRBQZwX8vbonevBGoDYE1fsToywzrcwpMwf"
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
