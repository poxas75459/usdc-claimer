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
    "2SvTBAqw4Z4o3xDr1MV2Rz37ptoPwYiBnRvL7cNnFdu9uvtQnfTEGQrkyLBNqh4FcKRJZ39wZDa8vTkWY12TZmkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bx4FhzBMLZ6VgYfyVeXLesgtNVXFwUpeLYUC8TARwA1fvMz1t1JgqTfvMLKAkEMuyNwa4QYucbueWGwzfPiWDLd",
  "key1": "bCYMXt2pBkBtcbyy6sQPvYZBZSLoMsY67obMKAFi9QufHTUcGQ8Twpk7PsWpSyC4f1zY9wP2Fg4YcPj6yEYnBWe",
  "key2": "yJRhxzVbsQ6EY788KPas6PkNGTPwjcsfTDD6oeUYNpcnCPJDSmV7SND11QtyNqCh95D3mCc1o4joXSzR2Q797ui",
  "key3": "4pZ7Rtyq6U2pA4jh5zKLP3qiVvapud84ZFxqDSnegobtgxVFpjz827gBRDLJwqVbjH5SJCPCXQLLYj8KeMJidTSF",
  "key4": "gdEHfmWLL7ekNUZXbf4qmYBexmeinYSJXVe3SWoBC21J1roA6W9sAwMTDKkgsaJmeNsKmoZTYnVpc1k95aWBPXe",
  "key5": "ENfcEPiDUuH3AKmDnX9vWbyVCHmFYHgSQJTZqT48B4qhW76sAmPHMXVMYL25FAAXHq4ag79eG8z1qudkug7zduD",
  "key6": "2TrViarqfisBv45dXhwsxaunB64QUG3UNfrK2cnbHWeP4zAyNUR75yx6vd8GRWds9ZvEjjAj4xPvw6xZSnNBLVYA",
  "key7": "5T6ZTPcVCk46Tdvx3omAYSmTNBUrKFLDMtdcTkxwDwv53dsfaCmbxL3vnDmYNnv9bZVoNdh34L1Kb4e1vw2SK8my",
  "key8": "57ci3JdUHvSaidpZEKAKscXPko6guNSZycCjErLZ7qXD9Kotf3bz4S47CVeWCYK4T3HL9tPELMD96WJUXRZMtYZE",
  "key9": "3BVomJe1a5E9i6tSEZVLrxjoZzubuLHodXepn4yFAEiGA7rai8NBSVd3vqhRcvVjw4qTPYT98g4MG2pXDwUmQzSa",
  "key10": "2ko9e2TDgRNw6SXquDS9kURM3JLUFyArrXKYagxiKpgFVEkMYbDguFevbTRajfRMXRwQqNXoZa3Uo7nW5YCz7s5d",
  "key11": "2XEkqpNcoo79ynWBWTmU5x2trUuyT7p7BVsUuF2qgRyebZwqpLdPfMSwqRQbZjBPz8WxEX7WnLR6usc5BnS64o4d",
  "key12": "3vqQ58CfMY4Nf1jpe1JK1YcL4wBvQch3sDtgxSxzBdx1gmSPbrsfqH7s5wS5oHK7hQdBFSdpceXvjz4JJRLvFv5y",
  "key13": "4AzTNSrhFynUhFCfJXrN9ZQyzKhhhe5ubS5J181RpHGyA7oJB5gjSNQRREHyHvetyNYgQbwUEDQ2ke1bwTSYA1mw",
  "key14": "GF4F2QbUQoELskhfJ3ExKhEXPU583zFAK8j8eAiBzg4jsfwGGfu8cU2nZzzScpbtzZAfhLmhuKyES3f5719NFSz",
  "key15": "2YgqYakhsWYPu32zEV9VWNE2D6yqxSJXo4wwTcS7vXUgCJsPVp68baXPDmLFWBNNZWCtLDfnYh43XVdM2xMRYLHm",
  "key16": "4s85do24e56Lun2B9BmJjBfrTKbE6W3Ld9iJVJnGHtkxsQXX9xCnmioT5bMLEV3awxZ9YXxsnUDXMksXAktCVdzM",
  "key17": "3kmyLvTiDQ4kvw2auvgeNZSCVenyqrFMvUcEkeSrV4Qd2SVc1tmUAdfUv4S1X9yqfdDU7td6UAeUXZKwgeqas6f2",
  "key18": "3HqkJNxiHpH1LB2NPNqgJdMNidgkqUpFAynYQXkBhPuYuBEGFsnex29zPdXtsRNgftBkccnzsZrB8eBPRcup9UvB",
  "key19": "5MXRmY2BynPd7Z6Lfjq7FcBtnWPVUpeNmRVAUMiViQHN87Ta3f4QL7VjCV7z1Vb6Ztw4vYSnLi393GfDEFmuxaro",
  "key20": "Bw1sKyFhY8vYPvJi97MLLXhgTJQunySq8ujJS2XNWQpJcShgQYwgY4Cmm3AApmUagAJCGoVk6DghYfe8NQruAw8",
  "key21": "YKK51xxYmpQiDi6nFXhQUwiX3hyjquh2UMef6thV7jAwsitLhdgzeR82ysabfmmwRu4CBP9EqNEqz3EB3a9vKAU",
  "key22": "4oSWfBLzM7GnmYwB5meXsYFoRq14Gt5kQYd6H2cJbHF5VCGLtcC24ttz5ubsop6VxvgFqREfMbVfZfr27LeBgEuS",
  "key23": "5F8tP8jQa3p3NJFf2WJyTutDQYKdzp6ia8hgpkwL7uhzsaGKqS3bwrpf1ykcWRdiM3SgkpMo2k1KP9EVu45EL42C",
  "key24": "3H2DysPxK6Gy1w1D2WWFtfn7CGb9q4xdfikkUibDMg2ipDqQ6bVsi1py3cP9MDMXmtcERM7zbWFBmMcqEUwMNP4R",
  "key25": "2F8ywx5t3w6ToVcCoz6AtDYJBeefsM3G4eGRDkM9nc5MRL33Xq3DhMqtCPzQBPtXhyUj4EY3FJB85cmhFv2JJNZB",
  "key26": "3nu67RibDTP7pPR4oHGZqHq3KBpePgxJvhs8M36AcbHXeU2RAoqGpbU39ub6mR4JWCh6wXsxUZSQiRkKpQHpTebr",
  "key27": "5WHYXNAXbVcbzANH4SiyyZrhBKnGJAAbFkKXSH7wFtgF2GQNJdsAhVdGPdRpWvPzf9FATbFXBT1BpMbj8QvffdJK",
  "key28": "2Sei6gWQhnHjG8hcbALfbdVu4AjnjEje7E7yMbBWqJE5NSsSzQUrV2tfpw3AfJwAvNp34P8PK2H2XMVwiAnYViXz",
  "key29": "4pbu3tyJgRmCFBSkymJjUCrUQ1Kciv1Sd98vDpXRCYaQTJNTN2tpMyQwKJv5m7ENFoZiPNeiCyrCTCcCHNxqnKgh",
  "key30": "45y9AwhFW1CQAWkAe6oR8geXQRo8SzRSvrvV35vvUfnmFErurw5f1E5oE79GkrHgRCp8ExVacz8p3DCdpZTuxsvD",
  "key31": "3B3SeMSaGMWwZ2LNXydCgnYxGaQ8iTTr1SkLNtybR6kvXNQ5Cj1vStd9R192jf5hUUG6wHkBhCACAKr7K99YGMxj",
  "key32": "2DRgjAgbJHiT6WckzGfk7qPMuzxr3qurrNPzEc6JWQaaU9SVc8fzxy12bnhnSifbBwanhaM4ZNesTjwfw6qSUmPD",
  "key33": "3kj1GoHTk4WnKS7b2B5uLU5vZA3zexjTGSeyU28JBPbR8EzuihBoVB1RnBWD89A2AVzZnPMwWTfDk3YkEHSbJMw1",
  "key34": "5H8pAzX5YUecBbkiu6B4qS8G5rFUJK1uLfn5r2Vt1FMDmhedLufd4GA6QGnCrap2R9mSQfpYGuedVULiuccQPZCB",
  "key35": "3hteDhgeZb257D1aMa2hTBGUeR39pL1mbYBA1SLvBaDCZkeRov9g3ycHkGsY1xAWkW2USDZAznF1qN9xZhDyiFuu",
  "key36": "5qKqaAXQQxAz2Tczwr4h76kG2SBgCLBqcbt56PMD1oX4muiHhm7xDx1XXkGKoDGrTh1W8zaadkHETa7xbNuPsLFj",
  "key37": "2xrRsZ9yA9PCjaTjAw87nb63fWiGU2XUK56hWA4KmmSHEUjscX4AHw2WA3HVGkSZzUtka7zDxWinNc79JnU1m8Nu",
  "key38": "4obAVmE2KkSvYswSFbwZPqmmzPqg53yKUfxxX25LqDxBpkaRfnSRkBgwp9pUEtYJRKqAtL78u4hNJ4G1RYkjb1sE",
  "key39": "2EiZ7TojhgUDr8aC921UWceqLYmCVbjYMgtMHpwcz4bShvuVvjLarkJ8hwhG8MsY6CH7LfkdfoCunY5y7MYQuvZs",
  "key40": "43QjeBJtwxbHGaxgKfg8ng9rzFZWDYjwBKLwMJnGsUmvwBsKBYu6iWqfYkiRCC43ENsqxLhWH9B7RHC9Hdroucoe",
  "key41": "5hGYQQ2HuJn8T8LZDJmQhZGH4ZgnkWeKDK29Mkc61UArQGu6r3Y6bfLyYLYNiLu3W7diEafXqjAjxQ15YJ15amHs",
  "key42": "3dNEkiJiys9xZ3Uwzf4NP77Sbw9CACo3sD8Mcqw5XL1WuFxhqZDNASjbh6aGBAvKibwz9oxWUaTWJgmCS4fF9QXg",
  "key43": "65fMmjYQXLTiPkQSN517zh2ZRSbVtxFN2z4G1XSs5Nz4UH2hGWH1dcwGgYRhNhysNMiv3ZowQAoz7wPqRmm7ceiF",
  "key44": "3JXfzzsiKhaSTx6qdqPJk1d8UTXAeoWRQohu28TwDuNJWRKfyEB7pn8wSZwwgeDEPzGdT67UwKxJPXG4LYSdA7vX"
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
