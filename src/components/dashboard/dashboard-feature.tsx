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
    "67SMbZHR7W6veCgAEsNvtZDtaGZpRZSMvidDWUQ4XG3J5LXk8RXEF9psfsipZrKWCxcaiLBoNh77zJ9Nvn4tVfer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i1AcNexsDRHnDZsfb8xEBzzu17q49HudkajCygBTLUb8bV8dSXsMuhzxAZgGfp3B8shoUFqJ5Guypf7YbsFUP2Q",
  "key1": "51s74DkWyM9X19oCJby3Qd2V1cJenPuEpeJybUHa2eyy6LWoUkiSGrNymwPeGYag2UixCGd3RVKrLqvLg6ZPNkKq",
  "key2": "2ksTLiKBCq6M1xTvWzAA9ED4Hu1FLSrMp1tvaLqVx4nxNGvgbxSmCKLRE1MRGy237cfoLmmcyGgZBq4YjzMsTGCd",
  "key3": "5VrwPTWtn7g8Rw3Qa5s6Er8s5j5XCHPxNUGBoBMmDpwXw5NFap45Ga4D9aEgNraJRYeVzjnAMA3u3fAjp8ecJjH3",
  "key4": "4QDeiQSb4DZJ1cNATwkzDLJZ3CVyjbzMoKg34NEqWSUkNkY8Ba3N3cnkSbXeYtDBFUUeiyjySz4eA1vuxD96FcU3",
  "key5": "2DBH41yCfBefhtH4D5voyn5Z1hFpECAjNm66BsTrXsnmbgKihReizyShNSTWNuE8o4Ygrs8AXu4GyxNCD6St9dKv",
  "key6": "2c63XN2j3KNQtPq6ejaDX9VNXPZKgz2MbiA8ufwnUWstNX8XTgSvK8HCZTiGdratjgnvjYzt5b4X179FfGTifBpn",
  "key7": "5NBpjBCu9TnZHxkJrvP1aeLKixZmiPToBhKGEP3THUjQo3jZNNth2bTVkmEmtp872WymCmy6KeQGjnz8UxZE4THp",
  "key8": "4j4RPJcQP3hcEfRBVusykkKmJui7EGZX4RwjyB3pgpK1Ea9k4xK8NvQPN2XycVSNs2TWrgWXiqtGSwosBF2NJNNR",
  "key9": "g3v2dAow7EC8maU6Ni8oJp2p6iFqhC1U97tVAXxvtWTH1qRKesWvkJ1m6SkJTrnkwehq3qNiWGfYLxzfankZty7",
  "key10": "59rXwFdMiJHXdVdRdRTFGpZbRXL9Akmb26nLnb5GjTBHYhKh9YoWuJfshjHdrAXPQBz3nM72K3MvxhRbYKoQcicu",
  "key11": "2PsG6rpDHFKPrdTXWnmSEJfWDBqJRNBZBQTCEGiLmvEB61QtRbWU8Afbno41XitDh1Bd2tjxV85BrpkFWi67hyMk",
  "key12": "5SZhxUWceVWf1AsdDJJb7dvbKQhCwU3ueRvQuWo13wxJRLLTrW1jqUSHPSZaCW3a5Y6yEY66QRSj9Vu5dRGfobtg",
  "key13": "2sRg98UqySsZCrASDfaZmZx9ZLSvgPaNcy4Ax9BbMo5HGz553UA4daQmxmp6WWcJKnmeqDpytS2XgspBHmqty5L1",
  "key14": "3bw4VkXd23fYL37B6M9e9KhWPMQdfbEFFK47Ans9odJHGSnH6FdPM1wN1ExfaBYt3KprVcgB1d5zq2YYBczodUKU",
  "key15": "53BY5mKJ2WqAju7hVgWXUU1pMV7iEjhMp6GorM3qxauBG4gvHnLrVQaXbFc5Wx69KMqM4zEUnXFzeeyoEGLp4XmS",
  "key16": "4MQQooTKVnZLiVCi11MyWfMnXSdXfzCWJ8zUp3enTU46yv46K6sq1H4dfihkrjfnS49c85UTJZ7s8pQ9meq2Nqq7",
  "key17": "53XN1X7TzZ69cBRnmhkAj2wQJM5DUw2XuUxM6Ss7YTLTikAmkTzvH4JXUFE6vUJFJzGnF74hnqPx4E68yatvzdDq",
  "key18": "53Lanz4C8Nb7u69z4XD2M7hvUeYHFVsZtU1mdx94ZvNanMBFodyx2cRVjcrdyo5NE4ddqskw1tAe36a1hJL1Tg1S",
  "key19": "2gWWz39iFrNc9njFgixdn6xjiiWa3nz2v3ju5hSdNEwWZkrABw3AmF7inLaqC64Qi4WHFwC1o814m7DeWviSuoGt",
  "key20": "58Jn6LY3xqjqmkrHTqerzkEqMRDHAUSg8Az3bSKf7UePAjLZ5tyHLbPSErf9Q2ekNAyLcx7jZiQSwzu5PRAwX16s",
  "key21": "4V11ofN6XiSJdw87nQmhLkVonpnFYrUzUZsQe5KYM4BSMosWpueDctFzKmkBgsoRRWnpkJac3ixtAPosgbg1ahMf",
  "key22": "25jUpAfem3oBAG3maFVakNrQyrhegtCxAP5RzU5xPpua5ZmQAbvbNUDn7AeivU7DsqhuDzZXbkAXQTdNNNErG2x9",
  "key23": "5Tpzgd4PTxToWd8GeFrjNHFWs5ZDuWgkr8sMdeWFpkSxku821deMyMy2c6ysHhNtEGVRfC1Utonfo1nUeHbx2waV",
  "key24": "367MPmkqL3nxRKcbBTdmuWCHNXXzxXCUKPcR8Hw2Tq1cxAidHfAF5S4BVdXSucqsdAo6bP21y36ZeYaELzTrC1qJ",
  "key25": "5Ba7Fe57PCU9uoDCLf7ptVTKUV4fZ46yyvr3yfixCFHMKpzfysQX7LFVSQY75WAUxYL9y23rfqQSaLV4G8WYCKz9",
  "key26": "iTn53A4s11knmQ17Hi9i9Pe3DnrZRX8KarQDCJMJnjwDKGuKPZnQJ5QpVSz8bcpFM1ZsbsY7m68UPZ72P7VZm4A",
  "key27": "2pY217WSQQq5FV2aK5LEF8egLySMUqGgS2nz4BJbaTgmyTAz8uaw2sA2PsGkpBMrh3z5aqcc5Eo2rHXfkvNPewct",
  "key28": "3nXeHq9cLmfsJiEgDB5nPNewJ3NXtJLSPwcm8TNXg2BjC7FDE1sdAMHNGS8TPf1mYvf5fU7Xj62qxpsdenznnbeb",
  "key29": "53ZqWBDn7FbidLf8FiUVaaEyxPvHLioTr7KevWm4gwZP8m6uBpHXbTB9zxV3NiZh1Pu4CAkj93dukTo3gMdT9gmu"
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
