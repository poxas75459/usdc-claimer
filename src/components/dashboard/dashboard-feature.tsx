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
    "5sCBJTK6Ypn4pxsihfV8poBVDtQhfTVN1gk3BLwc729895tSkTt8kysv1kE4QmfU56piQx2UAVDkTUQGbFKb3wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "533Bs6cDnJGFrksKpgPhCxjSEHG2k2CyK71XgB6HXgzVpZPXTQ7Y4pdHCmQdXMdL52EuJcBuv1CtXbUirRKbGyh7",
  "key1": "3nJ4RGLQjhPVtqe3GptsQNEfwbCyQ7vuunwqxuRMZAAiDuLzkKJokwwrPFh6sseWv9ctAzDvD3J4RkRiGi3R38Zd",
  "key2": "2rW3VJHjiwddM7GTMsirXGmP4koCD93s4aBJNCHotJxYHTHQeeYM86u6WqcorbSbMsww792RgerfWJJHMW188kUo",
  "key3": "5Ld83JceumBZHbDxnFNqJJYwhumftftTpby56MmFEaj4EbVAHop1Dhft2tEt7Z7ekzDpRK8c5TdP6ntTc3SefjYp",
  "key4": "hUDNKCTmHH6W9YsUYUqG3fUPT9kSmXgsseAU4L2K979fQcRWe6BZWqF4F6FpAEWp53oBMczgxBPU6yBqF5diiPn",
  "key5": "5BrZESJffw4ovTveLpf1JtLSGtfd9XCEm6fYG8Qboh8kDahy4yYmivPKQTEGoMgsNGYzfuW3Aoay2EB5MenGF1QH",
  "key6": "vkjcex3rt6ZyuKQPfLJvxp4fnm1SJfT7qSJDiELYyei7tNsfPZwdd87rCNeSXgLhTYuwQzRcRhmWf5rRZMjkSvV",
  "key7": "4r4gkEpGy1827FasThGpKUAzLWmg6dDHSeqfCi9ZYuphwVzpyhjNxZTAmER5S93BoFViVB4Ywi1sDXihBNxS4Cj8",
  "key8": "TEL2cvtBUbpeg7W6JFYTzdF6HJzD5bJKtLyQa7bsgrwoyEd64cRmJG11kVhQ6jhZU926RtegzcEuwovJ5WKfXw5",
  "key9": "uc2eK8vmCuMGFj5DxjK9pxyYHMMnsLqhYdzQpZ8dipagKdzpj8wqPmE3n6wapVkKVJ1Drrmc7yXKEotA9Y6Sdib",
  "key10": "5fmywNFCVVKsqfGCSkaKhDpLxZ4MgM6gHcBaQ28XDMzTonqB1LL9TQPAjjNPKi9v7Hje7abQgP8V5BVtmeyj1EUW",
  "key11": "2bZktqwXRxyUbgsPpLNh7vqAy9TWphtdiEiA57ykepJc9Lgn3nFrSpdxLHHxHTnkUBjAd6cnp6YatGTa3k9bBCvL",
  "key12": "2efuA5h5G2xMRE1fMKWyse2LJeC3Ne9NisK8nY4Xobv8aFmzPZjmDXiYghNwuqpsCcSy4vKpz3WwbH7z3ZioMBuE",
  "key13": "xmzNbVJbHmT1KX1Kv8qiQ4J3NgdVAw938wUXZznsHBcEsbBdjyZ5MXPCWMVGZVNyKqCD2vc7DG9DsiLw49c3BG7",
  "key14": "5pASSMEVFJgGo1QnheBVUfbcdRmA4A1wvuu7Cv4iCzC8wa1csiafVZ9G7fCcdnutX5YCE2FZumi4xaMe2w3BXUsb",
  "key15": "5E4iAgQrnSThto3ZqaSVfMZ6mQprZsbTD686bbnTYERt9XTcTRtefDnwC3Gci78MLBKBkfjphKtNJbUN4RuJL9R3",
  "key16": "4E8B8VVyKhnK4a2rNpBLSqne2CSyXqcfaqUi9LLyR3Y3SdeS7zYa9HCppYjM2k7HHmbFwyx5E4fmFX5p9fTZ5kLR",
  "key17": "53VzFS1aRxfbfLgiXq8ssSLvqu75n1YNqSnY9r6r37EsfqeknntAZsRYrdVg9s9Be3ZJ71gp1vcSY7Fj7MGBtEws",
  "key18": "3RD1osEEng4A2g7e9F6Fa3P6m3hCuV8HXCeCCbmnynFUmqiwW4sw3sAuhCd6GfoybJ1enxV72qzMRfj2mxEx51ME",
  "key19": "4L2NvUxDLLTyLB4K2GtzRT1tng67X6FXqha567XF4e1J23BwobNLYVEnQYbuTvLYkhRpiozhYbq9xmcVpycX4ahN",
  "key20": "3Vxk6s5Zn8BK3ZDS1T8KuFJ75YNHfzAX5aCcg5AZDG3buyaidjXVkk379dCfwPSRMoBhpoqa9XV4UMfinfPmtbpr",
  "key21": "437xeDmmmaFuaFHsx9XexUvymnEMmmiKoh6EP2oBNALWphGxMwhxNV8zmnmMRkPvikmxoGnfDG1XgWVpjYCk7Awz",
  "key22": "EgHfNDTsvbZYXJHM2BXitDyTMjXKAgPhp7Dr2iF1Q7Rxb7KJH43KE6VLaps3GKEk9Z6Vj8V6LmodroxSaQBfYT9",
  "key23": "3cyqXfTkCE1vbw2PBsjxPEHHBrGC8NyZ7cMGiVnF8HAp7XJSo9B3qi5zdQVYsEy6Qex4esMrkFUQLNuzZJs93ytd",
  "key24": "32LsLM3EzpgVL2XfUPuBmpLtacAowkHTyi2j1QvkJ51NnJuuiAgGMAbBLdupXRt2NK5Ui6sZUbjfposcea7k4HLb",
  "key25": "Hy4YwpwBb8vw9HvGopa9BkAxDJTFzvDGmDTrDYLXMXG2JLZrFj643bqRxVL2V7V7Cfqj7uDE81LyybcsGYVvEzZ",
  "key26": "2vdfEZYQ2k7dZ8FVYc5XvzRyRb38hFcjAYcMdfjNUSGDcuKw4r6rPLFCZSFCsY8sA9MuLV7S1AppASPw94usyCZH",
  "key27": "5fWEEZoStaH8H5zKRLQNRSekyMcugZE27Be7xYb5dMBFkbpJ3Ys6dRE3NA9BphM1DSERr4phr7YpU94wEAGGMLek",
  "key28": "5FYgApxVd2tuZVuZ8PygzRBGT4gpnkWP4bicKghDuR6kJb3EUqnqFsiPW3gQ9MfMhj6LEgLDaw44AZuyvqg2ygza",
  "key29": "2YNwGimj2eqpcfNA1Vuh65SsM7Q3WSD9KhYHjhQwjNPux2DG2NCUMihUA2Y1kRr4Mb1tRJeEabW3FrdHUavXEFqb",
  "key30": "2UtPiKpPWQE1ZFgWipApEwQACnMvaQXFekoZBHuwStqQ9aCyWuEWm98H7gKK3GsX4gqpUzhr6LHHg7wmpguSUjdr",
  "key31": "5zJLeALVhVRbie5kh8Rik77dFGkQTWf96eyfD91vHrU1Vq1UMzUu6My4RA7bEDfS4kC8mbdGo88kyUJqGmc5PdVz",
  "key32": "234GjN16vZ59kcrwyLDTTygugc54QXSw9oqABKSzxyqCSLjAP1RPGvSAfPZCwFveQbZuYMLX1zxfcD9EjtaPXLZL",
  "key33": "tfKuyHCbSseiTTyH53PvKPA6hkyV9zUMBwNnZpoWaztygwquoQfkmVGudwhYAaHhqMhffJMFD2gd2wc3ENWevKd",
  "key34": "2bNetZmu2268NREj1aBXFKL7ztry53B349LxSjGZvfAnurab8kEFJyyYArfUMDEfYkjqB8yoKDXBog2viKsv7HT3",
  "key35": "499icjynaoUvQWiAsaULRLzXr8YHhKBbX3MPaJAf3MxAURoS7i4xdz8uDq6LfrStoQu4XEQRxqhLsch6gEabNFfx",
  "key36": "4NAnMdpGDYwHXt4munYxzqNmGnWsaKLQKyvDVN3afDBwMy5LFUHievHsUmnUeFSRYV57HPDFknBZS6cQDo8FG937",
  "key37": "2KUAf9HzFj16fJpBAo6RjMStTC8zzBNdxfWNfQncXyvh7HwbyaHRsUochQKn5uLZamdHmGb25XCBGLV5fWRoi111",
  "key38": "REJyMF5Pcix15piYreb4QVxxq2hZ2yMSDh8mieaNxXMDyJRWDKq7Ls29oHpm1YhMnG8jnaZXpFXjax99qpuJQiv",
  "key39": "5DykJsUC3Xjm9x4es7Q8ADQ1RshuFARMhRdeXnqroFYKfPZ2iGYisi5BKE7xYHcHnGTU3SSbmNA9757TThLfWL22",
  "key40": "49mTDPBkUEqxY6Z5pHG1uEpyZAXUA8g2YYiHDgiuBZo8kLP6GsnUG1oJxsUFr57D9hg7Vqu7nsE5o3o8tcdwHeVy",
  "key41": "2kYdpFnFgQhBR5zM2wLD16e8Rwqf3fojbUqfAQm2eAV8D3jmX5x3EpaJ9sznJsUdukaNdGdTKcuJsncbKELEe12U",
  "key42": "2Mqc373RpYTS9i6o9XGezhB5FjTaZ7T84nLuNAE5mxXyQ8vRtLiyvopzqPy53uomxTytd4FYJM78RDYtQnioNR63"
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
