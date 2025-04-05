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
    "3Hvk8uf8dGNyBUy3P4giCwTPkFXvw3AcLD3fHghQe9A77YWUEzsvFJLyGowpeWKYpTiRkzfzjv8jy5QnLXE3c9dJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54wZZJdEyihEZFAx4ogfhauM2foHXPNso4ChFV1bLxSvFLtNFgciGMM8hCW66WMiNkDjeRZws39rMLnkzVkMdz38",
  "key1": "2Kh8rS13MTLjgJQB9hwTN6WyF7WmeDUqtZdLyfG1q7LXFrZ2BTxoPWyJidJRdx9ZTi51NRwznkBY9iUxNDN5LWFi",
  "key2": "2fpXqvMwv7Ys93Jqiyvo3AHPBKqREjvgNZJuyfTtsPjJa1RnHbnbch3muticyb2yn2eDtBkmapraAPFD2CY9yjf3",
  "key3": "ohUnqBRjMLiWZQYZYxnvRHVabnZciGe3PChgDntbEgMPHqm8BTXww3gqxyRK6iXAgq9SSjvzu7wCEa2Ry3f6HeH",
  "key4": "zbcAwv9XCWoFbVBgpTvyWnoz4teEq4ZHmXkbjJ2EJbTNdUrFASUeJCj4AUm1JeHkKWsswwRaEnutaUPMPAH82dP",
  "key5": "2ZsRgVG7TTUoc5ZaSgtZqZvUF56CHEU8UUCxtwWNebeAkNTnvScRBhSVMAhH4ekAQtbRGDz42MHjAgLRheUV3PHG",
  "key6": "2FmLq56tnau7qiSs2SCFEV2oC23fp1ebDQmQjh4c8JR73KbxkMCcirN9b6fyHErk3SAXopQCMmJ5AFQpJLyKT1FQ",
  "key7": "55JEr9364XRq8vx5xxVwcDZQAYq552pq2Ddx7JubBvUHKpk2ifi9qE2U9q9b3n4bQnrY94LYaGKHb9XMJJmLWGF1",
  "key8": "5V4DugEZHsr6Zy7pbsnJzEr6bN478LQkRKn1KFUzYc5oVGuGWDgfKuqjgEByxwYkKtmsdjf3FCjzXQ6P3abWFeJN",
  "key9": "4DTperJ14FmMVPp7HPkbFA5vVWYbhCYtREB5sR3CY5u419H3MgNxKUhBa77SeRix6egA5QNJ15aCKa5gm6fTzvJi",
  "key10": "gavcEgyvXZNcrtqafcTV4X3JB94vABDWPRXD6z3RpMdHepWiKwT6Yi4KnUvT2yeH3y7j7f8uhZLuYNu9We3oLAY",
  "key11": "3eA1614g1NquEh4WjnUoUXPw9QHPFDpw95rNDg2BfG8cg76TqDNXj6FEZ6DMUsRgo9NjBayX2jhfwuBFgM1rVzBz",
  "key12": "4ntJ8rpbHiMjSf8UYqc9D6P2x7XjgJsUNXSApXdyhfe17VBzDwySAK2ejMsDcJFYo9yfeyAtk3sMbFU8Bsy3AquE",
  "key13": "3LpjbRKFGu2wvcRtkG9jcfNLSxdw9FNYj4rcAZi4sdmVNE7uJavW5kS9LvEFf8Ui3EmQauJ3wGcLnYqssnDcurao",
  "key14": "5QSuu1g8y79KFSwgQTCHYtcFsPdq5JpgRMenaSFofMXsDVPoDK6faicnDAbbiGjE4vzkFiNWS9G2DRwoA8S8ckmN",
  "key15": "44fBsPon5en4dopy6yGcAa1AR2F5aeFff9inwXMTwv3DvsJFoJmksrk12QxuL7BWYp1vhR539oVxnLyEdn6XRgM2",
  "key16": "45gsKWmehukqP5DEUFRHFoa7vKXivL8N1m2LvEyccFmeeYpwWBhSPFoDqcoDgdowBsc53YEUVLQL5coBSeWJN13t",
  "key17": "k8naRs2xpE93Cs8C4beLniuzDukGqEHH1W9G62jcZGamt4b2TfpaW8zKNwrqF1omnpg7DAp17v68N2chVfR779C",
  "key18": "2UhHwJqevDFZZLtWkVPtuZ8LvZVbLBon1WVqkyJqQpeSYnexyKgV5PpmrSFKhsLF5u6q7aXax8hqVdtH9VQTbKpV",
  "key19": "4WAB1PtVYB7jBJcYop72RAoQtEnrFjcpfCrEBFDmUUeSYQ7zTnj8G1dRggowJzvsE3yoRUVP2wCr9wpPxocjdhQK",
  "key20": "5YSNVPegxwFSDXXSd59tBp3wh55qJAgPCa1qEGz9mcDUgYe3P9NxD2sj5U3X8bBjxrhZk8EChvvF7zocKiqiWxKw",
  "key21": "2TUzBigGnfnc9695kfRikvJrVARU4x7JM6rXbg7DjRduhi4rQGCwq5fTfS49dfn1wxGDp1GaAdQXRuhJ5KnAZUxx",
  "key22": "4F7ErqHgwsRZca2tnW7SVfMZHa7ypzx3HU6N28YQTuAXhHjV19LJpebRxRtrG74dsBiFEg7EPn68bjNEQMFFYVQB",
  "key23": "2Q8LFmYucCEsyqmMmhj7teUx27QZndFhFy81J7yZtpPHxitdHJtMmxqaFm3dMGiKk79BG9uKGiwj33KLRSpPijUQ",
  "key24": "4yF5RM5FewzgBKeCLsL7WFq6egBHWzjbv5BJp4Fs7yCusiZFMDED8XAwAVXeov494FXtj3FPZP6HYfkAWvNmfVmV",
  "key25": "4tQCHBE6SyK6ebqwpvdAEWKm5nrFr6Zfhhc51sXgLh513RZbX8X19EjUwUjRgiraSsdXic9HHjAbrhMNqvNZyndi",
  "key26": "2jbfji3Dmh8H5CHMf7Jo6fAjErXcJNUMvYcgRzL8aLiivFYn3LpcLwaEGbuYrGYGf7fA5W2yD1CLRsmXFtuxxEvz",
  "key27": "32MisaCgH6xwYunimywsWT43PELab1y7jULK7U7Uezhp7SE3ryRM9gb6fvrQHgGZ8wPh8Vdyajz2YKeJfiCKsgjz",
  "key28": "joMrsER9oEoCEJ2VWhCwsGxZ3krTMWxWUxkTotHo5hrFNs52x45t2HeFX6kv6Ck17ezLAtwuNJdC2DUaJ29jM2r",
  "key29": "4bMT8nEKFQGS7oVhw58nedgqiTbhufVRqtFHuaaK1Xzp18PiFEcz3TXSDuE8NV1Qz6JGpFX7BeJxHj6bYSkCDBnm",
  "key30": "5AtJdJish5Cu5P82GfwfnEvNe9V1WxRvD3JXVQRdEGcyUDHNQWu7uvjbSsV7qfKnifv7Yjx22QmZhzMJVBpY98Kh",
  "key31": "51ENhFB9roheCMJQ66nxVtQDV4zwMhNXU4to9RwVasurEHDf75pJ8AoS7drHuFenfXjoY5v8gna5DtHByen3vPq3",
  "key32": "5uBkHtZ1JhkC6pJtpXczf1dKX7pehaMdja9xj4jibBDvbGjVeFrLDH7fkcAWfwDEnpYD5qkkC3EAT3QkRG4mQQD3",
  "key33": "4JMy7dDfSW8Km9NxhLHXWYPr5We7wgFJAK9MmuExYYPXaybYePNgqQJvHhy2zzAHnSaTXEren1icRnj7AHyum3qU",
  "key34": "2NTrwS8TNw2RNHc4goeW1PKPVTHi9r4h3sBA1cvZyzndX6xbkfnSTurZ3Rzwv2rhtSrnU9zCsRmXYnQkxQT4MYuS"
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
