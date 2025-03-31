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
    "5K8ZHuRBBfi6q8Esqbxy2Ha2V9Wz2xhMCBfViagMrRdEN7FFptFPkc7Nzvj4S5RVo7BGxRyzWPZae9tdRDxYNUqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DfCYfGeVyVFez8U5VzBYgSgugqFPJJztPSvweP6WXWQq4oebTq9TE4DpLGrpjnC4sZRzixbFtjqySjaFcjBeQ5g",
  "key1": "5jcE7FV8tnYfLnjuS2CL6dNcaWWdinHpoQsNoUdBBChpJeiMGhPU3mFVGeZurR1FhrhZYL5ZJzSkM3ZaY3i1JUc7",
  "key2": "WDVePqy62VidhvkqJufqXn74jkkKFDcjEcyQa6Ey8df8NDjd71fcntSpErfTruFcudxNBvr4Hrede2pVK6P7WTe",
  "key3": "3a5V1iY7ezkHTcrtMwb9FUit5GLhAfGcB7vGDpaq351LX1k3yJeK6NfHjMegFBCKkNH9kwzksxue5aqHa38B1pdT",
  "key4": "ZNf4s8wK5ntCtvrK8NxctkNZkozaJ26qRxLAKKfPYgq1deCitQphWrN1Dz3Ctjd1R18ATLHXJ6rN9yoEYqYWjYn",
  "key5": "33XNRKgu28bMGUv5WRFG2nLRS6gs15K3uQkyxq3qcCpF67btVr7NcgnqoZMjQFt2QqwdKKS1vkG2SMec7n47kyza",
  "key6": "5HSAgVUpEjWTS8QiMg1TseUQnAJwTJn67C9oiaLuqxWCPQF6XvvrP2fg6ZzbGjZ1eS6bJ14EWT1tfUD25WEjcRY6",
  "key7": "PEWp7xtZdpKjvv6KwdTbqNG7BVCoGYBcuPEmJa97kHQYNJrWBKGdk2ckK9dYb1exUjmAEeu8WnLxh5mAsbSNtV9",
  "key8": "2auN3fmDfyXtnYRb8RWTBdFQcHabAXtAoGZYzZbrq46XLeuWg158juobE7aeaT6h6GMRrPvcznQPctnJH3nzQbw9",
  "key9": "S5yRkssRFWRdK5i5wmfzYcy7W9FFzZUyCSCNVx8p2DZmoqYnBRhfipz726vKWTknPG8S5sHjKwqdxKCGZkZbv5r",
  "key10": "29nMdgQpwZVQ8YJYeqUBYEBeE1pQUKdqomCyoV47zyoTnxK5JVXRMbXSpyH372XZmLZFmrVyLoqMbkkpTpPeRx4y",
  "key11": "4bAeipQPNK2oBgtXL5T2G4Crqa3d2MjqKdSmsLBfmaM34NWppqp7R5pDoRG7aozAobUnDMUDah62u3scdyhfz89v",
  "key12": "2ug3FQFKPzjqV1sZdRP6LBG7QtodjHtfbnk1ocaT88EMJcj1bkhAZLc2ZyyNR3Zfp2bt7Q8nd7jsF4FyZH5dSynn",
  "key13": "3QpyyejZE7rTPwappB2yyZbXAThNXiXQ6i68gda9y7dcP32aqnXUNF2oXM7WaP1EJME5q9JpSBsr1VGrPSdwBMza",
  "key14": "5LPT3LxVmZuVfV3ZjZEYmq35wJWzRQv5bLdZQSyreJ65jJucFaWzkL8L7woFk7rhbd5TxYL64bQsLm74XMRs4vtd",
  "key15": "2pNi1PHgo53MpXkvHET29dqHHSZ57BGbvLa5gMK7Zkmb1ZZXJQQz82hZ9v9s6wdq1NKtM3U8ghyT472qtix2Vb1w",
  "key16": "5kj5RUbytB1Sjvu5nwE7QwG1HdFKDNH3NxpBnmjcjTS4KByfCUzBYzsB3GVK7ijhsyLVgxSXFquaSDiFz4w2WQSQ",
  "key17": "2XeNjpZ411Tn3yEXGpStpcVN4ZRG7dg7ckgd8xSDJ9rjj6tC9NFVoiwhV18CzZVmEoYgAWGWG3rr9qRh94qbuTpy",
  "key18": "3nuiFeNTfU29MAb3uEWDJv2kcgUgRg2jgtTZ5TU3UWv6iGz4hUXwKsztFCj86Uk4vY5mbZxwXszDn6dkVxa8vQf4",
  "key19": "3hHX2f8SHtyBkSW1sXcFpxNW58zQR4DzimxZm8kwMV3jYJfw4BuFjHjNz2PAPbRiwRVUVj4RHPywXRXuDY9fE6jJ",
  "key20": "28rM3Hj8ogvHG5L62XdCfjXwZY8ARHXaD6k3DQx8aXrPHnhjWVCQauEzZTstptPiBKN8HuUZx98ziqM6yeDQVgdw",
  "key21": "3GZN2roU9GdPghD3Jx9M5ActivPQGDzr1NkU37VueYHuMVqdWhnuM1RjdySQE7tviVURk8giJQUZV9LQxAeQdHiP",
  "key22": "4iiLSpUMkZ1NuF8PPNH2kMSPdybBLYpWhUSY1En6cBeqZYPXexYpsjxhpi7yccpRQx6eHxnrnRurvt1tQpVdX5wi",
  "key23": "2hAk2rv1w9KvZP3PxQP4ubvWWEXwQqMwDSBiN99cth2xurWwUvvhSPPDsEcK9vKrn983pkntprAT7MFgZjGxDu63",
  "key24": "3UrFYYrZh7E6n4pZ2zKXt8KxGYeATBEwq4UxJ2viaM3xFBjS7q725wG8AjbMw6ucwA8ouvfRFuf9RCgoh5LR7wnX",
  "key25": "4hf8nDazPPv3YYrfQCfTEk2dxCrPWcDoJrBPhghrBWucn15rRtLNJ4xDkm7D33kwHCBvRPhrdLfbpSWv1sfT2Ko7",
  "key26": "3LhgN6Teyaj3woBz9ZqZ3ddpGV8B2sWkm2HpSfjoVRfVaoLVxwyQTUKarARwdMVhr3pEtyncAkmP8LK5UXi2Vggh",
  "key27": "56xkC5EezRwLd3s345yXtnhJ8GsQMhxUadvs9nY2nHwZ483GL2fDd9UxPPVEg17hj4R8UCs6xktjpX7DgRN8NWZ4",
  "key28": "2qnUtzAxBPQVbTamdwuYoj1yjp7gUyYWbuUnTtXxHEmwiViGnbi2sjybzoDSGsb2hwkS2EYDLrQwXXaDhLm1y4p2",
  "key29": "5dTidUf3ecwtwunrL2Eyiqg4jedwGn992rAtjmzmEvP9AcF3R4X14yfQXisPPqEhrc7xpsozWY2ppxcFSewmsqat",
  "key30": "5VGy6f1SGkZyichMx5C2wTzC5ympewGuFKANxqEmE4jbv5QYbqimKe8N2SGe1g7fCsKt5S9NpoRfn8L88Mnh1CYF",
  "key31": "2T5UUyEF7K8BbGCdbt5dxK4pTxTxjq8ifta5XdSQgiX387nhR6eVSoiXhBHCmvCojtgjqw8yihADR3FofE3s2ENU",
  "key32": "3SaWaDc9yvLZaYceqVoCJxFQQGM2WMAeDL3AKBTb9jN8ou5EUBEuv3b8NSDgoKosQ7hcBmEr7BsC8n4G8AFhsGoj",
  "key33": "4NNW8hp79Lnf3xUm2CUhz65x3Cb4jWgVoG3Q9EwEkRfdAMYPYxVKRcV2qYBWVQP3vEhfbjgwj94x6fphRGSqHzGN",
  "key34": "378V5EvntV4jmyHobwUitwjGLy5b7XPEmP1WcdgWLkZbS1Noo3PUPUZPjFKLkDTf2nGW8oMDJhPXdmACVPbeMjgq",
  "key35": "3wBEMmvvbzXfruhEyJQbLyr6nsBYygwQqrqsuJrq5WCXdqefuqFBwCZnbshCYJH42RPUGw9UP7Pnw2nGLkX1ctsr",
  "key36": "2BwFFurX6tnkov4oHLxZfWNnNWEvN7Nj9YRnQ68YBvFsPRAe3kmybQ66j2tGAmkYyhV7qTur3gHs3tiMBH7sGcZT"
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
