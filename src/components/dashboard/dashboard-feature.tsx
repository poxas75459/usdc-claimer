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
    "4J2KbYab517TWQBSbsvg1yXqxxFG4HQFbimuP5WXw7F23GTKPEX11NVyszKfMNPs9bCKLpw7hYhc9v5RioXwpS7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KdVfoQCwLyDoHeY4N7U2WaXRrTqRQwC4Nitqypa9vXyNN2GZ7bVjRbdxFftWqbYn16yan5VRBMDykwmo6fMmip4",
  "key1": "9DNkmwD7JQa8ECSw2Qn8SyadBsGJdUTrrYZyHtDZjvj2aJyn84Y5erFh8uE85AWsk3XyAnbNgTLMj5jvnRv4ex2",
  "key2": "r14CKJjP7zffgF1CgTGVhRoLqz7SWuaWUtdiitsuQtNexZhye229w2ExT7XNPe45zX1rBsoLDXQDVYWbVhPKE3N",
  "key3": "3WVAChQvn2Ux13p74ntXenYhqPie7ywkFLYJkQvp9sdeNBJRcHJ7N6pb1VLhahtvp8vbJWqPQRjZWZmaYbxiLSR4",
  "key4": "44rREvCSn1BQgaTiuc2Hq9aZ8evpwDBmDxyDKgEnv1iibdURtg7z7pe56UCpXxjPCwADsC3k81igJRjpsGi9wkoE",
  "key5": "SC4i3B7NxRCK8WrA2mUEjaGXvrCzEW36GLvTEXmBP6GVH7JKi7i9PNXFRiqBhnNfXXUhmN1ah9h3xU4opucGDev",
  "key6": "2adZoRi5XFaTa6TyYk3tAXvctGdm48V2oLR31GopT2mKEEQRCgMYUixoFWrmjfS2vBtd8bSL8ZdvYFcsuc5HLHWq",
  "key7": "49Gf16ndpbYdsinQNtzQXFPKGmCf5UKmWqaHXHioLdWAMWAg4x95WxSLS4NytfC5SyHzLqPnnFG35PZRSQqTsCmA",
  "key8": "Rnot98pHarWNfrgQ9ksvpndEohUd8Y8K25eYFxnDUcFySuFQ6qeHd4yfpEfKmFEfEqDsTfHwwffbjHXUaH45QHF",
  "key9": "5BP24H3TFdWzD6a1PbApQZYhVW3Zhvdg2wyqcKJcx4EgmSgx5DEi7hQJXrehoFLMihHDZZDbejoUY7A5adhcP7yb",
  "key10": "SQcjvCpNkfSj6BDpFjY5KgZGpJsnVno6Jq225nFRoq1mzQTnpwUxDkGYN4NqrA7zrogdM55H5pvGFqmokzec2Tb",
  "key11": "4hRZFyPwHGGHbCpNxNRzB424VmPKTYpJS3UKg92eVXDEaM9WZAz9iBWok9sG1c9mgYJ8EXRmkxLVm8XFfxySUnAq",
  "key12": "3utVTSgnrL2i9DdW79xawLmGbWtaaCwHjpaUyXwLd3xe4wEMPPWWkzeRtsiUsQJf7eHkuDd77Zm3joMzmhuuhdQX",
  "key13": "4XjUAernTEWMQJnzYFK7ZfxmUU5REQBMnimzZg5SruDZbxHW3C6GY33RYdX2Xgm4W4c7LxPv5UcycVYa9Q8waN6o",
  "key14": "2n3mAmkAnCEpPVn7N3iiSKknWCpxpFFfeiqJUf1BhvzNBJWNJu8Lq5U8UwLmD7nqwX23P3Pr7MRXEHNb6t8G5QT1",
  "key15": "5Hu97zbu58QGKLniVLAhPCxVj6gwPncvCkcDYhbFfYSGnWMWb4a67CfALCv1QzLW38SfFDcpN5uzJ5PyJuhsjcun",
  "key16": "2FZM2x94DK3dAH4j222guEmNxrH2Hx3yn9bnVHVCanX3wg6Zk249XW1hV8jV1xguohAeQR2GExkYto3VWjRuJo9e",
  "key17": "5akR72WCB7p1MmQr3n3zZZZTEqiY5GKFYjP9NndMQsLbHCfKE184rhhAfF9GCwiCnxRnaSf2B3DARQc8UfM3jhdn",
  "key18": "5KeqpjfkfweCTKBUvZto8RzPP87GRXg3wM3Aky8dFjbrf2veG929pE3nUP5vkYA4d9XJT1F9j94Xv2doTXY4dgpX",
  "key19": "2wrgymNJGGkYiK2BzxHTqH9kczhoWv7G6VU7d3tDcwbUJuw4kLmGeP8WmKHzLiXvGGrfpRsg1g7QpigS2rs1sF7e",
  "key20": "65gRqV966igw1xshfLt9qH9j6aaEPt9B6tJy5KSxukn6T29MknUewzPXqvn1XQAaY2V8QjBELKAKvsMiEn58ZDBY",
  "key21": "5qwhWZMd4VPT65LfBBNFCnZr9uND73qSSfkjsTkigNb28GMsmt9SNuMNyDxfWPKCWyrXVmSty9UWbu6XRRtCjPz8",
  "key22": "4fADqssyJAK5ZX6GDj7eftAsFurUzMvFTuf9WkU3EraDwVZ5nySzde6vmJKu3ynPsAT7WLjftjH2vExoAhZwSCEP",
  "key23": "gTE2DarJLNwYazQ4m2axWxNVFgB17nq5Zke1SZDqUNPQ12vVbCdv9U27CcJsjkZatBNoh96oKrb6aspuC42fXTi",
  "key24": "3SAyfUV3VTBP55QHPdj92LLe1pLuYDq5WS1nMi1dC3W5usSG8KGZcqkeUkJqWsJm3x3U691ni6hvoN3RJMiQHTk8",
  "key25": "4SNDYxe5KnQvMy3KsAK4wEJ66Yo1Qoywcab3ZGbULd8LMbp3kkSCm3JtRefn1ShnCKMrPBdgKEzs3EqvV9UgNT19",
  "key26": "3ZBNaiy12j19PadzLS89aELf7UxSoMfDmZWMLTvcSyJ9TxQjfQ8bAw3j7htze3dvb6cfXKkAfCWppMuFBJDbBp5R",
  "key27": "327fVb7BLRmZ7xQkCNbjaKpduww416EXAbYBNhrpbsoxiMEx2d3xoyvdUSBoRuxvZaw9TxXKXDDdfUuKBFYoCaF6",
  "key28": "2C2ubFwtjic3uUoqEQxJxVAn2i5riiRc9fvy2YHKKF7WESvvM3UhetgEcryuqH2gw6UFwiSRxfPgcyQcDDtUptVd",
  "key29": "kyt2jMwxrRCu6J1ykR4323prKy7dBYcWzgodZZPUYoRxMCVtDJD3MjkeGc6SXBXDhvRHAxs26MCtkGfwGnPA8c4",
  "key30": "3ZNBGJyLpXcxZTW6KqdFDZ9MnHTFYyNuEU4GhZtahSWavszVZS1D1GPNZHUmtpbcfD5wFp7FMkdJ1TxvDXzrBiUF"
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
