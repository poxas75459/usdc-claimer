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
    "4fyt3ktnMP73Pu9CaH3SQx6QeCYYypCQA1bRar23GGLqoaYsLCyX7tin2GFVhMdeWrm44EVgcGWuHP641parsPQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ghSEs8zsBcGb8oH2Z2hj3sSad2FqBa491cscp6yhq956YA5mJCV9MRMpfMn9W7KHunSQbwdeUWKDqr5fcWWaRPB",
  "key1": "4h6ZeaLcX6CbckUMRoCLJRxdWVsHeyTfrjrTTXQVK5j4xYpTwvxpXShbboCeunbMWZMNmGvds1KNR69aqgR2Y3pg",
  "key2": "4ZtwkdJY7KXMUYpzcSFzeqxQ5QsjEiPYXumG4PDRXbg5R4Spq8QXK56g1aCD2GoVtsbVfWZgbzB4tqissKmhbPAE",
  "key3": "2iwoadTFP1VVRfxkXM8fKhinrdFNYfMd7F3YroMrik3jqh5YqxtAEn1FJ9c8xhrUC5KTfmw6EKnBjVYTzwYv7i5A",
  "key4": "2MuegWGTZENy2o7WAHMrgmw5yyCwTix1PS2qm5pEF8XMYoPTcT3xAarPjcM8Jd8jQ8TTeijQBoNvZivEoHEWn3jz",
  "key5": "2SmuQMH3s6aGXCfWhzAWxnQgPrxTVyd3QeibbdnJpgJHW8yhS9L4RUbo6EB11HkjLay9G9ZSYmBvB2JpKvqTKRpA",
  "key6": "3xWPBxdQWgDGFymctqSDQAmnVCTKa79moS4pM9ahbFFEz9pd73BU2LRYTev7E8kBqzTQSebdTNqE9UEy1xiu21nk",
  "key7": "3EUwakHsrycWK9RueCMMQG8gDUfkqGGVTxfQtpRBA1VZYKL8CHrP2avSFULBdHDQJpXZDmEBYhFvbQPdetMYPVmo",
  "key8": "4zFcCHw4fCfjJ5epbCqDM4PxsSh41ZRTXLtJ5QxoUak1TMwFBGukHSKtJcSVXFeeTbphVNogMua5VrMB8u7K8mUj",
  "key9": "b3GfvshvQKjBiq7feHRT8YLQBo3WkdpB1sMmcaFjywcSr9TMKFbB2b8rkFDW6aF1hHqzJcsM7EY6crjTXvKdri5",
  "key10": "2Q6QFisjgzWaAov1cH9GD8WuZmKGuC843Z9r3zmNmefFzam1NDB337uhPSyBpVS76Q8zr9Fa9XRUMFcdVpBYaHz2",
  "key11": "5ZJaTdxmBmaiHUsUfx3UgkPr5WGRZNx3r6xxuGg6C7pEUQ86x9R3ALdPtZP4KCvugFaeTitcMEXFsg47GRKCXYPf",
  "key12": "2bKeoU2ydXW7cdVKK8ASGsZiVF2eXojUoohSy7fYh6J1zfzTEp36PdhzbEjUE2yjy9NS1g4RAnLPUhsvBJkAhSzZ",
  "key13": "5XWvAW9YUgpdN9YiPYvmRXHEYGhi8sCdTjatpFk4hwWwUck6VzyNx8FBt1VejU1AtA7a5iJ1aG4SfJVrEps393Ky",
  "key14": "2mGn5kyoFqDC8rJBnGWr6tt26YjMUhNqLTjid9jVu86STDFqGsnRvPoc3tCaA63zNcdYrzXWPCnEyq1xA9G4DR4j",
  "key15": "3MfssAZYcG4rNtRF1G1afQqUK83Vj1hDCLgq4o3zUX8H19Kf6MpS9ozAiptPRxHBpmVFvk5nYn6jUBktdMC3WPcT",
  "key16": "3XgzGbDTZv4uDoNxkNvHjc92jTJxkAF92s8GAo6WUPRBVDsK8aV43ZWTrjH7XHhRjKk5APnEA3mTGR1FonwsLmdp",
  "key17": "4hQomjoqHyJt4LQYtfFawYb4NhQpwYW1stuRQZcuqMCPfVXP6d39xfjgDAcpqFHPRowPFVBQg4afkQybXcsHKvvN",
  "key18": "5euf7oi6n8mwQYj2Y2i3zW7PpAQwTkrb4SLyET2PeuwSiwJ6bvKHc9q5Ujaxj7DHVLa5qESRkPMqHqrktkcgQyBv",
  "key19": "CnCyePcXw3xHPPwT7BYcVfnyYzV1t2ySz36fxg5xdsqfVBWH4uDWnsGeGQkkMg7ZQMMbKQwbLAZXeyK5uxUeGFz",
  "key20": "5f8z2u45WcyCHF1isXJ1qHQHEiNp4cAv71C23Eo8Jqr2GrPqBy8f3NXc19asPk2sEcKXq78NbKj6FswhJV3rpJ7W",
  "key21": "vPvgC1o6vz6v7wg6ajhuAj8gS139tC8gdYbXHZBrXFPNJ68jbvD7a7q7uhDTfxT4GFjKzgLtadZasaQAVQpULZm",
  "key22": "3NoeqaQEvUQ7BUEoRj275x5YdWsLQeXEe5TrhUqgRFHuhwMh9RAcsbDciZJMjaKftwPtVgkxd7SHSrY7mY7yML9z",
  "key23": "5UdZTYErfW5o2fvchNdK9F5aEodWmzaB4AopzCzwZbC7nw8bZvPuNQ5McvmJYuRKgUpPZostdRk4Sd5atKc5zEM3",
  "key24": "3EyJfQvNeaFxSSTpPCXUPbYKpKd5zXo5smLUwyrXgibQd7DMPgwmhSX6BEMsJFCWbSDttcsJNrk2UyipDpH1wx9t",
  "key25": "2aHjLQqq4v6bui21Dwziepp2obrWXgAGmTquM28mbcLthuTq8vFqdUqM7ubT2YH2h3qwo3em3FHg2dqTtMcWEDXi",
  "key26": "dX7S6XCZaoUjaz3YEYbnXtmpAx2biVmLzgZarnZZtrqhPAudn57zRayNBsiPADoUC1xwHGpGKMJZtKQTXTrHxkk",
  "key27": "2zoiS34QW9YcpPGAdsG9XrYhZDPtjCMcVimZ6qLwJ3YbGvgBmrqpNjyw87EGp8gYjhYVqcXMrbToRgg7GvbRS8RV",
  "key28": "4gH5hNq8dPmxYQj5JFELJ7NK8egq7sxSPRTWwULZfps2rnuEZaYH32U8drcBviNuikFXTTykULj2tPBWb4QADwzH",
  "key29": "KVseuWMtjHAR4w7ZHcEZ4YCmrXSY1UQMvyuna6MLrJuwBcNHyNYj1DeFdK2o7V3ZrouWuj1aHB58j5Rv8TPmVsB",
  "key30": "4cU5pfiLEcrgsN9Ws9xQ5cu4VnTiE75XCAKWMM9ReHKD5KXduVKWRHU8qX6iy3rVcZoUmgny1a45weiYgVpMLYe9",
  "key31": "5pkBfHuN8XTUytkAJpfwhyT4yNrK8Bmny4Ex16UPW4h9kmsmKbVZHAXCoYZoX9qMHG5UwiJ7aVUk1sPpQ2zyx4p6",
  "key32": "mJcaahRydp7ye7reSsmobm3jY7XV31jzfYDyL2BmdcfEdadJgVvkseXwjcheRGKUjPyTYDCjskx3dtuUiaW6Dre",
  "key33": "32E3pXVejBYwtr555tuP7PD23nmCK6RY4R63jkpN9qfzw8ubLQ7QxpJA8tUM3EfyhQx2icBad9FBpyqqmT4PjWWj",
  "key34": "3yEVAAyhiXUCQdRfCXrMpkuoUCvnJbKXWpmc6YfN6uuM4sSvTQFSKHnBtHQdvHRPzL6ViEMZEpRqxUyfrKBPdixo",
  "key35": "R3p4qjiCwZAF8uvVo2jJujEmCqaUmrQEBtsYEE296ZjJKY1Ezodg52D3SSgeYbk4KeDjmRxS4KySVPZ7EiQshqT",
  "key36": "3JtbrzZtuaRwWPPkUWwVYEwWukx2kFJY3sQz4SUU1KSph9RUyX28diNyx8VxG8BcfKaCyH2DFxzGAw9ePPBQ4i5M",
  "key37": "5hmaxVJUBGgzLS3rzaL4ccfmKzYduaBZvKUXd54LxfmVWuYc8FQ4uENqJb6XdZRsZhtQgUjmjSGxnWB4VS7Y4zKp",
  "key38": "3Kfaui6LhajFxJhhDddpgoJH3NimN1uJDnvtkPNfERvhZTgDrewKi2Au2uyz9sgsCCQxBFimyAN3vEnsQdpjxDp6",
  "key39": "5Uj9B6a2VBvnxMBygh48xFaUSCvRoYBbKRx8tgYmKsvBcFhixL9WvAmaiRxMhGk47Qv8JcstQmQjFHs65HkCAXwj",
  "key40": "5d6wYX6h5BitQFMgwFwdNd5gGBCLsAiZc6kA7bCEPMuLfZfqiZC7Px1rbjhYARh9rumQLAbNbiEprB7GjQxW3ous",
  "key41": "5bmYdAYomW4NGMRiwAAZcRh76dYfVby5NV63nJR7TCeKkoPtnouCdE8ZRPonjybHSexRPbxs7mt1TeHU1DFeat6B",
  "key42": "4M92efbtodHPRPYQaZ15i4bfEbjYibFp5PKx5Hg2JPE3hxHNyLDqcnxVovbPNtQehpghLDxdUjE5jkDA7oew2nCm",
  "key43": "hz6Phm9EhotKU2AVvKZcgPG1WFuVjug9M9tbypcK4F4sib8gb3ECcK4xKhWZg1ZdCDH92NtZP7QKhq2ShHyMSrR",
  "key44": "3GBryqxT428dSmm3Y5Aj7rnUuzVhRWpVh3UWrHk95QPSZmkVG1BrtubrhVGAxCDMTNTRLLphj5VRk4ZtRgGsKP1e",
  "key45": "5rKUSJnizx7eZgKw6GoB3A9h5VuAHcuJsTH9xh4S9maay1hpFcweMW4u7P5P9Y535PCvNcBand3vBdPprUucU4zK",
  "key46": "2RiEz6XGqoE833rJUBV9P54snrBhFWTC6ucZaP2zBykCmq9PQWpw9C2WekYSXYSwod9YZQmiDz1V773wueNz6s3e",
  "key47": "29xECoPJjWTEtS8AWaNqjxunHhuh3ykHwSquAHmPeDbpnjGcM83FMHP32tzQQ8LFpCuULoa8HmHJGgHTCgg5ALps",
  "key48": "4Dcq9ZqAjbCvjipuAWAzQGfuekY6wy3mPvMNy2PVzReY3pnhu2J6CwzG65KJfoYmnNsY3bcfG6FhGXMwWRKrvhQF",
  "key49": "4pti7mTWpePgSCq82VGu2x7uFDU3eWUPsaFDf5UQ6fFmj5Ch9zKP74doBdsNLj5vLPBufiWqppA65zZoxs5FjFgA"
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
