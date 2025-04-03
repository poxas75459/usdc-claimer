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
    "2qnizCSoskQqhddkdzFVbyaYZguKJeUBTPfiT4v8r42xWieaF6Pt24RqNia7jE8xgYGkn4r2dzL8dkMEUiicpC3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vtBmoF3eVeomKgH1UPLDZUvFzAd6FWiRMYFAf4w19YkRyeUAre7QMviYVi7QzQAxQwWJGLVz9WPxPBFyWgp1aaR",
  "key1": "4v8mFmyDEQeZ7id6EhfnUYJpb9J3KJGRyyfAkgE8J4nQMVej66TqQ2ewLh6CSDcBkbY15wGwdhz7b8dG8wRkFdig",
  "key2": "3JZmQuc7TjjVzTYZRdNoSngmFUyZnbhqokSf9r3GPLEML1y3aaaSMam4ksr7ZTVNPwMDMWNKpL6fGv2bsG62ERW6",
  "key3": "2UdsFZd594EBpyk1AtQdV4BinYY8wugrdWkKdYC9SZaCSr2vKsbfPUPLdnm1KHD831bVzeCL2zxQyGwRkMqgtt3G",
  "key4": "4ighirBWJLuL95RVtGwNaoGYzerWnSF9b1cmBzisjNdr6r9iCghPQj92RgRroUhxZwbwFtoK9y4eh4pTtQFqTTFx",
  "key5": "53HGTXhGYRMXCWovFBocBQ7JVfTSN1qhExa5oz6yfArXN4RnKQtdpTfuHhWDF8hfK4zdcZm4GAK4cYxJYyJRd3vY",
  "key6": "zVfGHmoK9xekXDWj445HJMLTvBJa8fg3iLHdfaYX1NBxQ2KF1oTaKxpMQUpN1ydU8sgY7SRynSb2s7f7rD1qeaZ",
  "key7": "2S2BxGk36n43hyh4UYuMEB4QbRXUcBizcNALXAjkXH61f26dQ3opnXVZnpeBnazQLayu3CYqdbC2rHMbh9XvVSVs",
  "key8": "661MQ1MpuBT8HXUwcKBsr7KECCggNJp2NrefGFsJPqo9Mqq7A4Pp534V8huNtdMMyt39je7GHonKYRg61ANSZddP",
  "key9": "2vEeQbwqkMZDmiQDW5Gmd3SBn3cbY1UWDU6UML2DKqs4HNahdEQMraVhemdtXLG6TFgBDZFoWSqrFFEiXzahV6Kk",
  "key10": "42cTiSGHf5KmrHkhuC8mJFinNxPCcKqT4dFEGXTXdWWvwphf9LU2GC6fk9wN17ha4p3N4tQ5nLpbDSg9kqc7scDK",
  "key11": "cD7kC9SZe61ukL7H2ndynry4pwwq2cnZBebckCRziaAAVgQ7ziN4WzLP9rr9AebNn8mHZmbAkEUafTdhhhNqeav",
  "key12": "22FwoCBdn3m24KNeFTNRirHDDJvr22TQ6RgqdPufsga48hwsS6y87eG7HAsc6XPgZujHbrPFp2d92CYxc3e7QZgQ",
  "key13": "53Ur6mbJTiz49U33nmxmvFAgVEwTAtYizbw54uLqVHtqj7wkZhu8qcWiYm8oTgnpimBPidMZAzH7MHtNKrZsoYA2",
  "key14": "5GdTaJ5DWSaYHmMmsBpURuZiKoJdkZ9Xg4gw1EVcZAmDTSBVJJj4W5TtoXAMNaRmYTNwu5CH5TfAD3N4xstzD88k",
  "key15": "5SLDu3gsgLZfZpUVzgc2mwBMamAXXQzA9dksWCYV1yk6amGWYt7wDqEkQ79ZWqtftFXdig8VG7Ad4rtgfigX4TZC",
  "key16": "314pXMgXn5WQ4qXv6yJyN4cUSysTqErHSAvHDj6QbMNMpBXuxZoLpAQ4GWsn7sHQb3TAYqCKEen2KkoU5t4hiTd7",
  "key17": "4Ef6FxHH8PpsJ5p8oy3jcgR14nrdPUKzepEXzfzyp1qMDUkE8BzySL6ctXdPvUBkd1Mv9E1Az7rANBQNMa9gsqrd",
  "key18": "3jsbG9W4KxNvUvgWMSNLjkYVAwYyWRvcvU2DDkvxMpq1tHxBkgcN1bUKQSjBnd9GapKczwCjsW1BdkGzEMrmTg7n",
  "key19": "K4S6L65mJEjUbaVABpEYSBqbLoNSXf8baKGD2fo693H9F5Tb3jXq2iwAeu9BFVkbhWckSidUC8LGSk5ACD5JmnP",
  "key20": "54po7SdZDWtxwpyd6hLUqb5rczwFnd91Uag81y3XYBjsF45URmSAQpDXyEPLStGpZtxraXzAEGe9FEXBsAu1idxr",
  "key21": "4iJqfEzoofka9GQpHBeDPJS2sjFEmVRPR4mQeiFPvKjXvvupKGKjtwdAqgrbm27bBnVznn6a8rca2Qk7Lei6sZFm",
  "key22": "3dKW3jSbDoVy3uVr59gHa7za7hX54PaNf6RJuLYhcaMiXbDea2k9dEte8uQS3E244EukBP9CcPKp1H3eTcMSVdv3",
  "key23": "5PdtJu2Gx5XsJZZQM1kpCqHS9aeJsqJpfuqfs5XPHLw1pozpn5NWSnMBTfiU9TZAgBhUE1GhVK8Ehyofrp7fQ3qM",
  "key24": "5dpWJ3R1vbXNg7wRcVtUpyB9c2DLNjsLRMAXCKguWuTBQY5pNUAfu7YG4qRw77MZAQYYysedfFetFgRuLf5UXGAD",
  "key25": "3pDUoyRvLnnPp34vPk9AVQkhRqcFxw2zpaU1kiLSdU9KXTQSSLHkJSphBBMKWAK83bMJxsGcus78veoujaW7BvW9",
  "key26": "49fTw4B7zE9cHkLG4PdfSGLro77gsBR2gVGy3pcoAgLjYsLYZMm3ztx1K5HuEB4173qeyUeEdeVSzG65rxqsHp2P",
  "key27": "2FWuCZJ9SfJvXMFQt88ELno3uEUPBCGTcJxtpsD2a3Rjc3TrHKu9Xw3k1RfQELzn5pxW4GKPqsvSYDE8E9hc3Hj2",
  "key28": "2qDFyLogzbD8degumYURhgj7AbGazitmqssMYiuLxxmM1vnnuaKEpXkECNsqABXmLfBMPFvWDSM9VmHXgeyiP5oc",
  "key29": "Gz7Gjpinv3FyejYrjLX19TrhgiJmAjPpJbRKofWLjyjqGmXuworaRP2dg7pjZfo4Bgd93dLuZRcs5Ju7myEJu8e",
  "key30": "4k46sKWPbfzaymhPL4E6QEif41yXinVHXc5cxDGegYxjf97o4Gx2sduANRVdJAqjDZX65jFUsrviHiyRWgkCWeR4",
  "key31": "4GzjEZDybhqzSmrNpfABUyzsZTSnv6VgbVGNjzMQ19i1E5wXjWJsxDCZdfD9V52ukfUVa2zz3XJpocWBTotGfDyD",
  "key32": "3rBVvCBDPWjtHRVQDYxotJff2U5ZDPytVQJ63DDiRH7G387Loc5SGb6ki1jaf872EER89d3SnsxwRqvkpSC8Toa5",
  "key33": "3KJzLTeSj3SmCiwT8JiP4WfuNHpVzzyBXZfYArUzdoJLEh4tffBoJcycqHmSNL1XWnMRLt8S5tAPKeUUktj88KBa",
  "key34": "4nJun1NBywrajPsFNKKA58kEcb64ryS1LJX9H9ekdsARp3QBRSBoPshEprQhHqXBYupciTWvM1y5z4VUtBEzRq94",
  "key35": "2aiCne8g49UJKQczZuDopgcKMtgh2WcHbVfhuQ3gtnRbzbU6KQP2AE9atPsLCy5YDf6VeWw4XtR8TKeUnJidxb3s",
  "key36": "2G2HbsskwNNr7UwkFxBVJQaSG6R8xthJHJ4NAmi5m1sZsN4LW49zw4pFDxzxz8YG7vDLQmozLkDouiMq9mD9FrCF",
  "key37": "5h1Ln9cqVG6Uv6nERbgE59DkyeKV2LpYMuD3JivEHZUnKaEJNuuXuq3xdg8PmGzvPD3MWLFfVMPYwiTGsKV5Xp9P",
  "key38": "3z6nC43cDYW818hfmyNQUa4MaKfAgfjKP8dVkM1cx1N9qeopjU92kfS7uM4656SZFdrgmzdoTAUUr8s1ShM5D3Qx",
  "key39": "2du9FF6uf48f3BPAqAZGuzrPr1QkjkWCXY5dRN2t3vzce5LpLSit4TJPFTwey34c7t2tQ1KnBhk93AJPNLUBynxD",
  "key40": "41n9JqA5UYHamBYjyLoPMiuv2z6BHcoBCApmebBsEXYatWmKLvZd3RgrQ9mYYphDVnuSn5Aii25reaTBsAFiZSNL",
  "key41": "4XDRKcGJFugR3J5NH1v32xQfCES9jSYGiY8L6ovqFNfEakNav3XWQoqVvuN4Tkp6FZ2GkUApfwFWywexPr1nPfFr",
  "key42": "dWJ8C1sVdCsSPiMjfpfPKUX5GMhvnzbQVVe7QDrDgABxNLPXyJ8xanyCWPHa6tq5XnLvkTSUjRPdxfGjttun9bA",
  "key43": "5TzVSg2g8NxmiUKi3wj3kp9WHrWzAEQteuqWGXPTgTZ6RHTh3xvNqSHEHMb2NADh97YVbd8AVrTo8S4Xb6ptdRg1",
  "key44": "2rcx6ZkFKjxrqBXouZjFdP6bbGrk2ZDoMATGCPHdd3BENB6QKATvkQZ7iWfb22VRh57kmybBbG5HL4iokTk9oFJb",
  "key45": "31mA1cpDeuMrL1XRagwRp2tAmcf6TR6awYfJhkLewEsPXmQyaTZzkRdKZyBFUmfQwy9QPaBc28Enw7oSPNWREHo4",
  "key46": "pqcXVZ5auL9gjcouM7YeRVe2Znw29bag8QsATqhFD8iAp61aRcSe5u78tjvnU3AoR42wgouUeuLfyeL9yhqbfTV",
  "key47": "FXQcj9aepQRAamYvLXL5e1doM6mWWJboR4WoFbJ2pYajyWeTHPXVeBaCWfwKkH8zM47LfoamBCkLQT73kpjxJDB"
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
