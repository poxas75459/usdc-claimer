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
    "hWsmxLej6YxSUwfvgfQafu8wT56sNYm2vjLk7N5f7uSFFVVojxWHisbFe5SMweavKirvYNcXAHwXGeA63doxgaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nc917b7DQK7wkxcxgyu24ATZyqFajLYH9DbRAtCSuoE8eU1Dxh3cdPS9oP9fQ7B8mdK3EPXuZhxtTe9cAPvVPA8",
  "key1": "48iTtXvCsLWUXttzYkZ9bXY1n5ziJvmk7CWgR3ptsaTDnyCqP5FeKg2PQRmgfmQDjEPkdgbfEeGvHKyWhuZqVGHG",
  "key2": "4pGo9fXqJDG4hLvx4B5tFHLAekXojt8GZwi7CFzJk8JjsC74zt8636sNTDEsEK8sk6T59xb86LStDAh3KoU1nzSt",
  "key3": "nVtiExcMyV9KZbaCotNRZKx4ycm8exSxU8CNeuzRrofuu3w85cfZhEtYbLr2Y7aECG1ufs2htGVQvLaXfUXcdyW",
  "key4": "3H2KhjhSCBc2Wan97QE1NrqtYS9tYmKkx27Se8v8mtMVG9agyFXu6GPzw7bVH6xmMsMPAgc5KayMGtYSVbRJqfYj",
  "key5": "5w4zPcYULN9qzTFUzrNwJAzXJ7UFWffuwnkt1s6NxgP5DmaoJmQ54Qn1uoF7Ztt55CUn2eqkwtCF1ZXqCieDeNn3",
  "key6": "4DzT2LXxPHb9P5C5tv7JiCm7BnVriHSSfVsDkXpYhazGmnuocrnzhvFySJdVPsqpUx98fuNR5MDNkCd1SsvRsyNj",
  "key7": "2yVhfQTNUpY2PLpL5YLUzGHD7VEktzxKSgV5HvwbTUQso7GZjyLvUqgYPJKdfdaSAzxrPCirzDa1F42CUu3pRMM2",
  "key8": "2SCNfyaXNZBV2rF5ApxiDfqgGCZivsJ7Cno1ebXqPrbFmcsLYUHwSdYsGytQvbk7QMpfccgwQtXfPGyg1b2EGfB5",
  "key9": "5WjgRPRe4DSic11wXEMGKabtBuSHJX9RLbdmsbvEu5LNteevhbWWXX3gieQXnZCNNCipAs9RzHhicukzuZEaYKab",
  "key10": "4YtX5zbqdoWJ7C9Du6mYfDH92wG1doprdc1S42c43Bd9ZxkMDo6rArBAJpHL5tMa3Eysjo7foVh8sV3hyG9iseQy",
  "key11": "5xhtuwe9Tk9yLqPDHJe6EXJFPyeyM4iHBkWiv3QoBFv1E4DeKWoytY3E7khwSLVtVqnBqAXsxeUEWD3ADzED9N8n",
  "key12": "3aRYD394QKDgtv3ftq1jQ6qsspGP6QKPDZz9DgoN7AoqMb91X8CEu4xPR3zawkVcD4wsKaFLAv9rcGBRxRWnpLVQ",
  "key13": "22EzLrHeZqnu6aimPCBq4LUhAKughw2SfQbdzhYHkFMWvNE3rGhDSe5S7K5aegMLXDN65DWGeg3Bny5HcgPt8F2P",
  "key14": "4idbxxWFsGHUYdERvJb8gP7bETMGpLGr52qw9rMWArzLQeAZK9gK35aCtzHJw6XSn8aKHRPN2zEZRgoUyNcCXJs",
  "key15": "2seUe3S5jjDRv8u7tNHoNShS6ah9Vh7zdZsX9rUVfpCvm4GZoFmz5gMe9usbjngjtbNai7wFyNRtN6KojbezZgBX",
  "key16": "2Y9oLTttAbJs2g4eswP9ZEpofbww1jcrmwbVeGGResGwDX4VCgjXCyuZK2M4TSJzLseRPuTsnVg8YJkh8cHt6htE",
  "key17": "f8moraaqjjh6FHK4umnBv377LGwcYAEpQzPtxBWDhYzN5HNUfnbeJwn6ChXpZcRspx1gxj24gw2JfRB8tedzA39",
  "key18": "3QEQwy5PLUnQGTn1WPEr46UJo9xGsqTqgyMjUo9ZAnxeEp3XQocNePTcLBSMLrN7QZY6daZz2niSKEE6sToKyqhw",
  "key19": "4GL13K8iTW7ZK8Mih2K42skW8BZBSUHMVU5tENhE5ymghjCLFnEggVrMerrikBYRw7cvxvcPXrB46GJ3DutNX3yB",
  "key20": "RQXq16oLxjCB4pCnES6xCSHdYA2CrGtWgyW71vkKg9yAeupZqEEiHtdZBMwHQ2SRBiktxxEwJt99hkS5CTPSjUz",
  "key21": "Lhb9VCmXWAC77cZr7enbmPejVNLKHQJZ5Vnxr7vvRWat4Ly1YMeRZ7SyDY65vfgMJurbeUGyMq9rQjgecSVspZy",
  "key22": "4PQADZEpseio8JfkcctSLQN2RM9nLb1uUFqsMK9jUJ62TyPrkgvr4Uqio9kx6QcNqRx87LMfhXb2mdUUtWatZEER",
  "key23": "2xeFVVGgHVphDf5ZqUPwrrNjy2bX7VJpAWYZwNGwUHvBfXnncyXu45FYBw3xJLvuWi5Pc7TGJ5r6k7SYqCNh1svc",
  "key24": "4CQf31Ca5WgpbuQd4qXhX8Tw29okc13AHrwkZqW2SYLqHTf1BBJvhPUFGnEhn7MDjZtD6VZLHAsqVZuDrKps9xWb",
  "key25": "2qXSznMB6qE98d3rnUiT5rXTfH1Je3eh8PvLQQJaVsbi14o3hrsnqG6GnJi8VGF4y5CrtsCCtXbyhK9kBbruRwo8",
  "key26": "5CamB6vFsyxbZ5HQtcPTj1nk3BjZ7nj4Mqo5sFtSEBddw4y7UCT5mp5cojzkEKPkKx8httP58MGJP7HnpaDEfkFW",
  "key27": "61tTC9YhykVsVjVXxJ4zwBG5xNNMtDqYN2tk8CcSvDb7kgsu7pFYNmz72dFPEz4WnzAXYxxZcgWFBSpPFcrNXEbN",
  "key28": "22KHx6wArHvunWaC5e5bJodFPFmFuRwwd2BXpqUKpQAqebCuktrdQ1AY2Vkw7XH1QJE1q4X31XWJMziGmqoKVZH2",
  "key29": "5Xny6q7xwaqi9mTs7JPg4QRWdjDRm6iXUzT7NSmoeAoejSgjYgF52W2rSokmPUPoVf6shgL4U54eAabzzkmHFqpJ",
  "key30": "2A73bhBtSm9rdaVHgHmUHrm7WLohGHjrmGbmq7iz1xEbrK6FYLZs1qLM5XzAZR4hdX85bvsc5YqtLhMfG9Wm5mU1"
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
