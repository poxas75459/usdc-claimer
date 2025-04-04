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
    "4VNW3FoET7Y2xAEz8QCSzyE9cD8Dox8gLa6EMEEdppCn9mqAsqWRihSmZNch5WNJPgcaJvThjMNeRMf2mS6DoDqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nt6J2H71cy9ScXuLpBftXrfrpogceCt23QmNXp2MsYUNbVEgM3iXhGG8hhToPbcB5Ms2zzKUB11ufWgxX39V5Ka",
  "key1": "43NMrr8UGakbF1iqY4czMisYRovfmQ4Va3vo6kKzYkKdvgyxG2j4mVu4gY9uFbW3ADkobg4AS43gvt6sG2m2ac7X",
  "key2": "9hikns8cX6QZJreXT2mNGwTXyoP1qd4hWQnktzGZAs4mvfnt6vyUJomLAhogbL9dnanqqdXLxmS9WzrE9m6sqc7",
  "key3": "4uQcRqLSM9Fgbni6h4Uf23wxXdjisQzSyu43Gk7aanUcaj6oCyt3pVFWZyLJqJFRHKgq2gJXFS3m6LrBMxLWziTR",
  "key4": "nhQZkkDY5zpdR9SLAs5M2rjEUy4ysF6Jkt6VxbGexrBZA4YM3fN3PU642XxKLujahCqAV8fy7hoR5rvmkGzzLFC",
  "key5": "3KWDD8Te9fZj5VAe6gERUjdkkPDb3f8JE5wukQQ1wunewSU2dt5pP4UDr6PBHRz4b2ZQvRE9FS5dze4yurnKRcfc",
  "key6": "5MSu4LcEkHa3aV2q6UEdPrCNdy1zAAUPHSeppaWCm5qWcqnDVNaC1M5PvaPYk8TiabH7cp5aUrkQGnvUoH2rzmMM",
  "key7": "34dFQ57UDM8wJ5xbgzwC5pXzenATV2nyF6XGrR8L4nXcHj4jg6kL1X1tKdiW5aJS4wjkuwCkkAxQBigfLitQEtgo",
  "key8": "fYRz9WAdPk3cKfW4bjw7Vk9uNxmj5WJifSmPvoYpeCpgooYQDGoCXi67eQBTyrringBNEtQsLphKeK82HB4UcLb",
  "key9": "46xDV7NrVvxtE9SjwjyyNBrPXuEvAeidSkbwYXZZkzKnAY1fQAvnTD8Q4NNCjbwyh1GgMe68fSs8d1DpwcVxKsbp",
  "key10": "5sw77cVVEprXjH7mZuzY5GKuRfdiyGCarX1unQGKeSrpafLm6Yd8evjzQtVEeQPtSQcNkXSxGqXZoECaBvLbXgmT",
  "key11": "5TFv96Afu5qV9bFdW5FD1b7wY3PrCK283AdHMmfB27hWcTSFPGVW7hF2X2TUXkHhzZEM1uchbfeg661rssNV1jEn",
  "key12": "2qZjGXQxTf79zK4uUajFPzjxdMdgHcFLCtheY3LVsAqYFJH4CFsTKAgd9FddyqKEQ6bQ9cSGVs8DpbCQGJudh29b",
  "key13": "WeEK2z4wGXDUKR5SAVvCLCdQcbk4dn2r3biUSNpK53FWHfZRCGAEpzd4EQefSjEPFvyM1AGVg7uxMMvLiiDKAWH",
  "key14": "5h5u2S6nm2jPr64JNnraCpT4wL4NLd6LgKyXpq12GtN6FebqjyaMyWLQ5L1onW8o8BiVYSvdRkdkwS5zxsspL1Rv",
  "key15": "5sQJStfJn6UsKWvLwQ5RRBanbSpEmBFqdqLps5fXciTNptEJzWz2t3G2RPxEiaLpCVCSU86bvkGAZwhYGLVu7wnd",
  "key16": "g2gCVBMs8oBKCYpuncaCJa4fxa5ukyjZoHr3cKZbNKPrbuHWnK3ov3JYZWS1159vsXMRKN3AM1bq2zLD5bsue4C",
  "key17": "5ArzuKCKJbxgS6FPLMEATHm76QVyPHFx2ree52BrscW3beAH6Bod1xSaDUWqUp2uSkt1uCTMHpGRPfyLwHfLybA8",
  "key18": "33ZH3ZPsFjSEoXky5JU6KsRZ7dP24JUgsFbLQv68F8WMp8kYip3qBaZuCcGwi6P3eSS9vRRLr2Pp9ebHbnU4yor7",
  "key19": "3bxiiK9uexLayvmjsxq6QkBhDvzQ2PWdEVvgxDLqrRoK7E8a1Dr1ihmnFNTrYeWA6nPV64p3sTNJXncPeK7tQB2B",
  "key20": "4QEMh1BakFbHUPW3e6yVVmsPYfADvFWqT38HqZnWVLC5okKKuo44B445YQQqhFCm7u97z33gQUqSryRjJhZt3HMD",
  "key21": "3RWezgANYcEb8uTu7cyCSv6sccRmyX4QvDihLb9jEyAgSEUWK4aeHynbLxJ9bsZbsAQA6CgxtiJPn7TehyEtva9J",
  "key22": "GjLuZednNEW5ezqufxbisrxGTZWWf6Ucj6dhFffddqiHGag2KCqAgyV7GkVY5DHrpeD8qakibFZ8nKvgVuEspYy",
  "key23": "3T71g7BDq5RWyF8Dd5zcwXt8JZhLkt9vrdmZmQX54TwLjRYxmkwReRGXCZZfBirGcqFVnqjMCqg1f8CnTxFNLSh8",
  "key24": "3dhJMGaFhxjEjQR65FtSKQcCijPFggUEqjJMPnssrjkaCNkxvoCZXc7vowZBovjeJNZET81mHNboSQJSvp6g9kSi",
  "key25": "5ajFThSy4L5as2KJiReBKonTQGNiX6WquDyExZb1m7zzLuPErQB5VGVhNJ6k9trRrZL8BDe4tPtuVR8cwWQ7d9Uv",
  "key26": "2JnYxNTgdpaMc8EUKcXGNd4ujDzypCjDC6ktWBn5Uf68Ax7qVeyQBxdpZHKuqUBYbonHXHqCBcTJeputKL4VYQY7",
  "key27": "82a4vRnmCkie31DUPXyt6jntLf7HLXgZ3fsPio1zfCnLQb7uuoJ1BxCnr64RnQhdmxSTgZcjkm2mdrpwWFsXcjB",
  "key28": "54VGenFULJmQHpdNL6f2zCuX4h9qA8dqM6vyaNMQVKW8rEL4ChSb6Q5Y2kPpuG2bhHsnVNtW3vr6aRh3KMFcGmJn",
  "key29": "5zqfx4E3v14kcjXnTbVnMnhhafwybaWNqDSDR1zJ56wjaykwoMbEmw1K8pF346u1BsV6HURefDPMG2zWRZKM6Aoa",
  "key30": "5v7rhw66GygnPpXobWCtJHLrZo9x8iuygAD63QgWQKMkioawDAMmgsAUzd1yPR7SddcNc7Sr9aXRumvgJehHR7f",
  "key31": "5aJh72dvFW9ph7M3TRJqfpJcTB15kJfKnin6eaQTuUT4tN8G39EFs3RkTzNawxT9KM5ssWufYoPUiLqwJn4LFX3Y",
  "key32": "2rjaSeYRACFD59xmgN5adg8hzK6Eh8AvLwW7jEcjczwLDn5A4o6zAepteRAN1uRQFR2ci9FP3S51uxn2oybwWCzS",
  "key33": "9RKDTxQ38kKnGFbKmsVnkxXb62xmDQud2AtFehYiJtFEoQ92TYZzuURZBEnKRki1gbdQ2yJ8G8V1j39pifbc3wL",
  "key34": "W2XR4KGak2mwymT5RYHp6vFRFnqZ5kQiwNTX4Mvok8GWnTPqzek9pTdHCgk3uxJGLXDmCZTz4nSWRCK9KSZrH9U",
  "key35": "2v3CozhLoX9kHVhsKqfXfFuiPwy11EAEhuKqrxh2oGjUb4nzVvu1UPVWhr3WfV5C6eS4QbtbAHJudtSjpKpZDEZU"
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
