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
    "F8LKoyGj8kLuiHyRdT87WW7aYUtrRUMEMnaBXtm27jxSxFRt2sCr8PaDfZEP9ATrjF6mqkB4VLWSTXEwaxVTuce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNGDS6EKS4JRHdsAmA4fcEoF7ZjyBaToNWWp6zSRfXAp1B86L4UetkmP9PD1pUJRkodZFYBDju3GayqNSyXKYAp",
  "key1": "4FG7KzWz4Agd38s9KfF7pB879qATpqRty1Z9cKYxRXfzfYe73xurtDrETTHVM5CBkzbdj6P73t3TY9Zxp1BMaUnW",
  "key2": "2RrtRjWhocdFRdo8jfRYnhXFYw9ajRViTVs1FyzXvFaPDSBAunnjkPTei3naibgahr2yoZAAYGfdCDPRiFaceHoS",
  "key3": "5RwQ1ufH9cmavGpkxJQD5kESsC7QsfxW562qjS912rXV3cBYVPmMGP4khmph47nm9SFdY5Wt6YYU8Y3JaWXzvGFk",
  "key4": "63ozzYzyN9At5fS2chZm49VSWZx7AJGM5FkKbAhWhKM5xj7YBAR2vsHP3vEuq93psQhwg92cxYoYyhCzaUBPA7xW",
  "key5": "2hfx14XJ7439TT1wNmTCjvFSJvnTNPRez9ZSJqgn3oBJ4DeapT6ErYpfATzxPdivyHiX1XQKCtUgyd7fTobifVxp",
  "key6": "3BKP3nJP3u57at6j3gdSF8ciqN11H68oU8Ry69eSTXbvh9bMH8JDxsX5NMqiaTt1T7VzfFLkvjaJ86vqhCw93Qvv",
  "key7": "TFvu3E7Rhk9Qt59dn5veZ5H8NiNNqQNMgFe8Po4BFUCy61eGUo77uZwyxcBABLYz9LKP2WZErmhK9dcKocFabPg",
  "key8": "5FSLsYKCzZg2XEkNWqdojiMoFXDhVzUy5Q68Czbryqx7taMD7jUXNuZKBZA3MAkp4g5dG6nzd6NzRpwFk1CPT2BM",
  "key9": "3TS3CNwdDBaq7XHVcej9v526r3vT1bKEjkUj3PB7ECzAfvJDKKuyL3EdFuEZaZvXLKD5wE6JmuD34cyatE6bYCjK",
  "key10": "3tSp17kLHYyq7pdbQ8ixL9JkvAUn4BtxAHWczMDW2Fd2fuWyASV78b3zcvxwYHcPpEYP86aHP8BzY6tmn9fFQc1U",
  "key11": "4SkZKwwkYgBx8Wak76AWARXDsnxJbqd1kktxWUwy97gnpftVX8Nf4EhXFcdNGugtR142bj45QML2r6qdxgzsfnoC",
  "key12": "3QhwaGsRLExeSobLnQcTgsUtwRueC7AGJiNCZmYzX2itKnju2q6K8QvyKfhJqVWnKQ8inGHaa18uLuUMLm3nTHZc",
  "key13": "4ekJ4yzJo4wCqSEFccnwin6SVDvysDDhpE9PuSQ6b7YF9jRWLDzfHoz6UFNypk8fMyw49TbAr1dyrkqTchAgaHyx",
  "key14": "PaDgaVWuV88disUgtzm4Zro8qWzUXQrQ1gwtsLLZ7U9PrABPVZuZ1AfKvRm5p5qwzobqSxanrjfZ539z4yjSyYk",
  "key15": "2jZVSKvJFNeyEs9rYLZwhvHBViDgYCK6Gpdk8eDWygbgBsgq7ANzgTF3MsrUGpqNx7qBqbaAaHq5zJgzKYtW53A",
  "key16": "3M4KQKzQKGPx8zwRRXzcouYrzJwFwhtFLfoLWXGGJZt3HsQkXPvnDujaDXSEEkMtcPynaLqDgk88Ga8hqDjkfuYq",
  "key17": "1kaR879Go2AqXvnugzpVjpVQXav2Pwqg5wDkNNKWnnYcy9ffmv7NPMeEYckjpH4cuEu4rAkB9Y71K5hhfQ5QTaS",
  "key18": "2zF3RNJ9Z1DGctqwzy52gvqaQ7jqQGBd8RZiuQYY1GYSSnsSKXpYnmi4myLwy5eWAzZnM2j231ZTbZX3KdcqzXGz",
  "key19": "4qEcbrJpu7CPEVYLRnNsb1wDBbfw9gCpZpgXzcDeqcC8VEcSD42pHqDUhcEeU9tHUYkQtbwUcZVfrV6Do9168rNQ",
  "key20": "5gwJwAbD2Xpvh5VoAJGHBHK2L6xtQc1HNz7n3ZyBCka8KTPEnw1PZgy9qDJG26GmABYB9TAfwsaDCdvbYkihdb51",
  "key21": "hLZUqGWiaXYzXmQkKhw3Cr7cRUFTycUM8nqpBQY3fDnBhmQZGxXfQcX79hjPqkx42CCWojtPKcNYD66o3zGoQzX",
  "key22": "4rsfRCiZvysfwRLUyCdqVFX3JcZ16qM3zwqWZAQNpbhDGkvtwVhf1JpsSQAvKLs97DENfsetAa2aHsmLzdvwxi2s",
  "key23": "uSQN2KnM8YWJWfV1uCZnNLGTfm3Xs12rQ9Q5PPgzSSrEhLAanN4J7bVuDLaBwYh8jeqCw1ZiNgzgyPz2YG7WVj9",
  "key24": "joHVCtFoVR9Lxzr29PKVmY1frXXjzPFQ5vWuYVmFV9joQnpYUsNAr9b8Yg71Uq249bzYUpQxUZqrhzsTqJN42fj",
  "key25": "QvstB9NT5Fm7ANEWVxoqfxCZmiFEyE1X3ZXYei87vxfyegmRzmf2PFhPWiKtadqmGMjfRZKV5CpzcaEH5vq7vmd",
  "key26": "393G5GT3KJ6FuuN3KuWJ9ekYkKVhRHSwuUbzjMt9QjwoULgnNCUznLY22jcKuUqMkXM5sJAJHUaJNgSMXhyTkjVn",
  "key27": "JfBmFNoPvsSTQwR6zkjYnqw8Q3pRVr1Gd9nBDyPYapedLCgRtmhKvQt2FPHhnYzFnoGfWaJBzpuSaRVtdvbp94E",
  "key28": "4UzzzM3HM5s8AeDqatkU1GSujarEMyVqZ6AygssBd69mEhJaTzAiFH1jTQraisPrbTbnfw2na1nQAqijC8NTm1iN",
  "key29": "2HteFqj6mfq25bgE463USPT39V1xNkBXCuqvp5Vms5irUPC95YQsaKhHSSxwmoZuguQ8g6uwfNSHrCHMXM6dn1QE",
  "key30": "2Hss5mrMcm4Pq1TAb8kJsWLRjXZG9FWJuzVBNDFHaVoRWC3hZkAoc3uUyUnKdTnjTFnnrsBfcFCwqKLjB7izkXYz",
  "key31": "5Fqf9trh7FUNjwktuWA3EzVH3kqXaHx2Sw1UoyhgWBwfqysmq147ujLxJZn2AB3xR12fhVw8BUodVBidgXCJSkqP",
  "key32": "4ok9aumoXG996CaDHFdBaraoUx6t8jDk2ewPmQA28crzZfQFhAzD4H3gtrPMxJgBHfD2n5vVHazwnQc3vNgKijR8",
  "key33": "xGpMib9F6Xy5xNtt4NVmbup52zgHbPWgrUbRbCLumtE2NR8ckj2uVqCLcEM9bmLBtMTLjr18EG3iFaUkdcX3x7f",
  "key34": "4bMjTB5XnCmEFHSpqPCKkom799bvx3s3WwtGwHveZpojibfMvkThL5PJnU5A9paqg6wD1jfj5NVRekTKFm1TVtVJ",
  "key35": "5JmnLjRKtxmAsDWftzBLfgNqw7nvoEzC6V8bAYWSkcepf3kSqtmr95X2Zcw1o3739DJjVPa4XEQBuA2MJqY4bfXZ",
  "key36": "4pf8nBTTwJrJrmFf3ZNY96FW88kDmFzVrNHaX5iyMjqeMXzhgot5kA7oRqAveWd2YMchA4FGy1WCKSG57yV6BSaj",
  "key37": "5sapuQw9EgDBNQw4oC3vRkXfXzypsGJoNK7W2Lt6SiQrGktjLSZxCYU9AWYhcxE7nNH3zw3nnVwhzC7JN5ZGirck",
  "key38": "63hSvcJS8YVvrAKyrRRfdF7ANWDNNCzfAKRXG3kpA7GaM31K7kKUBPnWdSEprPtx6epiYZfQHeeCdZhwqr6DRnwj",
  "key39": "5e5TcgPXTFkB6mGLt8XbjUawmHtAQPKTRAiMmmnqhxfEE6gQrVGi3AeoAVhH86H6URPDzArpCdFZgg2ZTegYyxYp",
  "key40": "3VtMeZeGcH98K2t9ZUdLbFovu7hni5rvtAGLntEikd1SU89XL5HiVp3PMpUx5PgZGFxwEedBhRSDQq4B26JSAUX4",
  "key41": "39SM5qYvhY1AcyhB6YikP9gJmw9sPzSt5c5mUQww8ancuAmEouq2Em5AmwgGvt3Eu4972nK8NzjfDVycqZ4i41A6",
  "key42": "2W8jMpGKWdv5f2SoFuAdWLyRnAJPnAzadMJpS5G4sG2PfkAr8yJsuq2FvuydHqUJaJqmBWk9wKsABCcZxLxLjyWd",
  "key43": "2VdgYUYpMDtPzYKTEmorAyFEVJiwshnqCWzkLzYAux6AFSPzyansaPB2Vgr3jsyXpH71DqTrEH1nHYXv5GCMk8zj"
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
