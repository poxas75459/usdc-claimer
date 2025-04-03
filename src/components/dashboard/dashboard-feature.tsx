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
    "56iuyokfE33SbEEpGLb4E2zitCKYTsTa3uHjK9z8pPXxLg1EMCDmm76TVDrf6y6NfPivWt495xs6DGzeFw9dpiL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GRPWVTRHadQCFb6AduepsMnYJGoDhy3GkW3jk3dgi7AAukbh4QDcF3gibXdpR7vcuRKjxwhgWwBYZpediHLVdeS",
  "key1": "3vr6TUdxMDm6tMYfdbzzqEXEfY9TAYdm1Nds6YmofZ6XNDAQBdVsjuq7zKcKiXFeECaJiqnnojA4WNbKh7QDDYyd",
  "key2": "4Q3LuDGBu5o6S87x4H6QRL2CiKj4YavUvhZbq1QWp2Xem9RR723fviKRxLcXx5inbXJnrALpyDKM1LA54inD1a4N",
  "key3": "25yCVbqAoYJFLrdqPcqELN8K9r6PARzvtecTmUok8qmap4vHCn2KhxhaVAT4mS335kFJS25WqQ4shKzjbC4aye33",
  "key4": "2fjAN7sxXeoqyXrnihYnFMmrr8g71o26LYA5eTQL1uxk1ncooshUtnqnGpqmT4qmeg2Le97uEanErRKit2i1eAk",
  "key5": "66Gf4jZrcSiJcnbdjXUSqSi1E9cueoVPTmH349Msd3AfwyPQfo5rAtpUJdXgwLa4AqLNAjtgowBRGYVz3M5Ja8Eu",
  "key6": "BnqjKXbJ1NSmKnHxZk5Bc8gb9oUY7dQTDQdmoLW5feWhdhqJT2hwUGczrKLPCDa68dqzXqSX5udZbniciGcMywC",
  "key7": "2FbHfcouNuY8rWhtmoQAjGjrHNn1XPPEYQ6pqecpQXdQK4NPyPvBdHMyFvm6BQkTfbTXnrQnp2bkGKy7hasUwGxb",
  "key8": "3ZVtFGhpRuSr9N1A4i2Gjw5FMyuD5fcRxP2kXpK7yRYtLXaMqKDA62qh9rJ4QgVLGyaLsioZcbNvWyqoFc9RGoJD",
  "key9": "2JbM42NCsh22vvkq38h3zFtSSq92eReDTLxaMVwm4YC1qVfZBnWX9wSGhoVbruNmLj7QbQfjvWqX18vJ3G7CqVxR",
  "key10": "v6VJkvegKhxffYtQt2PYgJmAiY7ow86yX4xQbdYobQgxmP1mqqVFt5L3HxBaCWxK1ovXN8HDS5PNSdHUaLX5Afv",
  "key11": "5xzcezMhW2oDJxqX6mx6nJFPwV1bfbx95EPuUPvzErMi8KU6Zejgu4Auigj4YbusUtv2g2p8A8bhTbh2FEvSh8xh",
  "key12": "3gPT77UNmRyrohB8Q2XcpDc57woqNS4mepAN8b3HdeeufRQAikLVq9j2318WfEqZ1Ht8zjq5xUT4GVp5cMuGGDQt",
  "key13": "3rnRMFq8DHj8zAx8QnqurqzbHvu2wkC4DnF5ySUM33Ueu3Luf3DVYZN299ud3w3m6s7s1LhBmjjEV3MbsjDiVzKr",
  "key14": "3D1o2xXk5pZas4HNXNK59mLcDZwf1eJ8iCzNaBkfZwhWeXnoK3Rco7jpEPKKfFusBArZEMNV5j5LTdtAYnDku1tn",
  "key15": "4UUfSGetKRMNKh5mXGgjqNZLAZDBew5unkeofu99j9ZPankeaDnJaxWYPdxN458o6NaZ4YJkrqg541jSBab7jQrS",
  "key16": "wKvsKKLh4LiK1qkdNKUYd4Q7i7oWaQG9VdpTDB2nHhVpFTvjfKqXVJDVDBSJiJ5Jh4tEpk6ejdXKWvetgvU33jn",
  "key17": "2Tur9sxd1rW16bnTgGhaAMYMuHzBgZK63LbgoLjN9mD9dCfoVYfJBvhRUGMpnSfGP9vhrWYYTkhdNvp2P9WXtyuC",
  "key18": "5ntsCgUM6SVYFj2GvbUPE5UZQr75m9Riq62i5nCs65hZs9HyShszs2ZYFwr2LCLNUhaJJ7udQouFbvTvZzXhsmQs",
  "key19": "2fKmH56fQ9Sbxh4UNWv9RABKWRQTX4t3d344sdFXVpZZaqiBNmhDofFa9sKaxsn66HZiM1ZY5pTnjVk26x5XQp4M",
  "key20": "4mHcwcNGzc2cjXu3ZWcL4qeR6wr3975X5uHs9icH3DnMcZv8JoiTVyzJVokV6Kpf8rjaXNCtVc5J4uVmQkrHucjn",
  "key21": "2F4afar4eUPLXRzCspPZ6BtMXm3MNz8iGkJkJkk7L6vmZ3zfUHSu5SNwkXiWQvW7KsEr1RBHumyVw9CpG1JvuXey",
  "key22": "m3dWwogFCupRJzqEnZw1JnsGgDN2vMRC2ALb1mpdKfGKpGi7AnGwM8f5g9DK4Uwx6hrjoZ9XvufQw3FDUGUj3nD",
  "key23": "ViEbc9dH5fbJ6Z1NX4DVyrt9TiQAGi8apeRBAJmCSaEwhLHCA4wEHAAzCKvF8kbTZQdZVQ5G9qrWmN9Ep6X6pW2",
  "key24": "5q31rFEMzD2CAd2Buqp6ZyGMcGP3F8azAwbBZhJSswGfZr3bTJZXWM7yEL3rToLScFc9Sw7iVWQVhhNkvuuewVLB",
  "key25": "5mzBu3gVadegkjbkzjV9Pbm9ZV2kSWmLwwELUtW2gt5iyeTJSdhJtwgUe6a6ssnm8Eus3GqS7dmBSnyH2u5xPeCS",
  "key26": "4Xys1rPV5p4P18N2PBQY9hZPo3AwnMTW8cacp5qNpir7hGZWB2tJciKxr87rqbb9FVPVZgL4MEmouPAstUBdgjxS",
  "key27": "29ZX7hbNkLwV67hHA6rZTvdodXohnu5wZNafP7WZ6PpbmDfyQYmUxukLKwFDKQVc1BMzmXMYRAwBCthKtA5DKmVM",
  "key28": "4e6XoCZVPG69GHds4oygyqmMnCoMzxXvEN8AeCjRmBLTejxJX773YiLA2Uk2NarYGj4ShdMKnwF7eZTaGZEnK6tR",
  "key29": "4EwNnLKTM3mwXd2qN1sF7o4e6C7giCZ2B921fwhLtuUaNpmZyeRLkrZFN77E6AxfEuCPx7ozY5vqL2FCbSKWJcGN",
  "key30": "4bNsjRSWTxbkMhhgwc4FcVJu1ysptqysbk56rDUKUKszTDKguPRtiFpScW1VkubdujMWjYzPV3W7aZGK8EmfCmfN",
  "key31": "44dWYUyGwCGnDDJoWiZwdrEXTujwUoZ5MchjX69GUgeSiWfPHwcQUPGkn7FuCiauQFxM91EwPxi5ib9sRjtZTRJn",
  "key32": "SEhqejRSstFnPAaELtEbxN92zRJLbagmFpX239r3SoGH19xnr9yCJ6b2wAGuL3iEcLB7F7HucpXUTZpVQxjUYBC",
  "key33": "4197itZcceyqYowdnEgsJ9ybQH56t4W5pcwi3QupxT6eEdRN2qch5WJapoaxseHL2cdAGJDeJ45czA8GGgy5KY5r",
  "key34": "5nTqDiiB1SZevCfy2qBfwCR4bsZFtm2mXRbUgc6c8kr7nSStAtaT61FnjSoBTg3xWjKaWfxvndZ2dJLt8MBg1j5g",
  "key35": "5GF9Mz1bDxGAY4wtChrk5pWkfZqg7yTFFvLjJnMeEieMpMzUySDERW95fu6TTAtD57NByTCnwAksf7g3m5S9wcw6",
  "key36": "3m7VRJdiwtywCP8Qpht9ECbB1Ge6Kyr9n649Db5tqJdtUv9X94dnLj4byXkWzYjPJbUDCPZPcV8YWkKABujAM7XD",
  "key37": "4F9HK9Jvk8Tqkz8Rrov4HnmAH2iAyNUgsujn1oSex9uPkSxmHtMbkMT5oSQfgntKo6EjVbqiDqaWxBrZuUTRcCPq",
  "key38": "1gmyNFXHiTWqi3xSAFbQzx6GLHr35qgBwmf7a77Ez5MBsFFDHF78uBnAqis7WzHFNUFHgBDLL2zZxNtkdjfwwSC",
  "key39": "4pJymDEaEEZcUk7X17HbrW1bFECECLyiB6uJj6JG5JwDNL1DwB2zr6oxx4HTUkfx1Hm6FHhCrM1V67Gk2ZAF4LWB",
  "key40": "3Z1upiCtFfJQae4MVLDhLLT7kzkVFNFLASaKKRn7jDwWV56md8FqkTe66VUDrsa3kZ4X9DPpygwL5j4u946ijAVT",
  "key41": "3vbAyaFzuV35WgbPhocj1zFijYvyPZxyayN7gtQsFWTywsio4SFhNEbVfu71NcH5Ns3g2nqUhhtZC2AgbhW5g9J8",
  "key42": "4RVggysZJmqYycHBgjd7Zgs4PjupaDBBL1rfZd3y3mfRaUeaH2xArE26dT5UEP4FSzmW99b6WpSw1HDvqRnYUboC",
  "key43": "4pqbcGtpe5MNVnstKwmL94MbZjEgFB11YmiyLYKESmz8iRkWFYynyQwrZp5p8UyMqXK6Eq1DSXiJukWJjH73MBC4"
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
