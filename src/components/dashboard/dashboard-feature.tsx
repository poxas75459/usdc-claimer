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
    "22KLqUF6tu9JSnLQRhcd3NQaTWR3Q6P2PGT7cQtX8To4pcHktUBu58rXvicbgyke1Xo2PcYgCfBpubcrNM2uLeYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oFq9qkkEwLtgSmpsVYw7kAinwAomSD8obVVYVjczG8dWbye5vfTjH8r6xpsX5ZQAdqrForSurAZzdqXKfRpR5uF",
  "key1": "4RqDELd2ZKLSuwwVdJB7cnCVCX2daCzzFNadiEjm5CMkQRgAteAnGAYyecP7JSTG1CQYfRbvrxbAjR61VTuLTQJ6",
  "key2": "2RQ8GMHLJdFKJhBTsagW7ohg5zi18HE8rByGPYbffaAYSwRwp7rhXHuMz8pbnYwL4Rooq8Po3puncvaVAnQrEcVK",
  "key3": "66FGB9DTttBRiDgCiQXJeVJf6LC2VEGDhVciUV5pyXi6z9VgFFpiDvrxHUC9AhoHVtgn9PyNkK68gY7pURSpi7fw",
  "key4": "2ScRnp2QwiVd23UPhTzRDFYUZTtKpzGFCMNA8rPujcexT5zKoB9jdKciyxJYzKJYw7eh9uqgibEKde7D6nWtfe3P",
  "key5": "5gu48nMEXp9qBvYwhFce1AYxuyUHizk95hArYhrUWZ5fG1XL9zj9sFRTFU4eywATEdox4Ph1KhPnawNhqFGCzrhQ",
  "key6": "4fVeAXtiyrMYgdJKnpFQpdBV2Lvtg67vBPgz6EVXbZKmYxqKzRBJ9GTyW2BhtXbptX7cMGyBEbzykam2vJs7uNXG",
  "key7": "5ZTDaTh6cvWRZEQwxSxtWjmkTznj6fPmQhJm3ZC3GRdhLEffhKtb9wzrpVHqnF5G4d9Scr6h9ZHJxt3uumK8ypvm",
  "key8": "yZhLu8y2tZXWkb3tdCqYP41Tpo9umZ3YQb6La277E6MfaDo2sBgAPnhHpmeHXtatDTfJJyFVDK4GXWF9YucXGQ5",
  "key9": "2M2FbjswqZvHtkazLF2aC7LSGzdUrgqm4b9yKffUWYhbzvV13g77BftgMtRu3ifjTfFEikv3FkE9ETmsdw9zAE9D",
  "key10": "5oZGUWzFwLkLj8DgLjtXVuAMusYKoyuU7TDteBMnSU8Sad9gXd2cLLCxGhtP6btfnyuXDewF1qrmgVeC9xWrxJEB",
  "key11": "2V4UR1FjrYSGdoR95UVWStnqRicSZZsJMiCz7ZGvVEmzLm4vVLBJdkdUbdabVwRCvdcjVfHtkN4sgjV5G3SLju2b",
  "key12": "qgF4hm5TBhtowD43VAchPfNixHn5K9xdoLdpbReT9pJ6kcPnhj7EKN4qr2sBh7aCs8qkAuV7UZnsdKKE3ojFJEb",
  "key13": "5AMaKjpLo4nax1DkRmNsGUtaw1z99mNFYPkxcNQCMYjy1gcKz1qupYcouq7EvzkNeYadSRNNfRueEsCSx1aiNmby",
  "key14": "P9a5MordimsskgK1N7eDXJscodaGEZTZJCUNKACghrXKS5RR9kwvC32X4UdQ3heiWW4CjauH2r25HTtsM6aPsrF",
  "key15": "5byzbvEWu4ETLpqiXRehU1AUY2wf3vriiwpauYmhzfx5dkz8UnirUQGuifRoFSUZ7pxm6D93AV4czDbHN9MrfWHY",
  "key16": "2RS569vyxb2LWuYxwfTJ5skdMNEBYd1hhSXY3fgy6cNJEnQ1PE8ihBAuoV1YPyhouhydMrUc6Zrc58Kaz51c1TLU",
  "key17": "5LuDqoTiTomJVxjQ6oVNRftEhsojFVMctadMH1xsoWPRYRMbPuMba5TinhZn6dKFqs4KrrPBy3TCVWUcqVSX2tAr",
  "key18": "Tp5EaUriT6mBYiku6vpUcLVQbxTvESd1X6RVLYUPCBWSmaTErwXfgPv3cHCWJ5Fo7PMo3Csvm8EGSn7CY6Ji23Z",
  "key19": "2P86esNma47XLUNtbAHfkRLwSp7ofv579aKWRr8LvcYqFYuBTwuBYRuxJsMT3FUmMo6yLn1w5pZQTp5gMrD4Apr9",
  "key20": "2CmMFg4izRLj98rSKiyRtxDbm8MbT5vJ2cuuHFGF4Dhhs4QuynE9mG1zFArCJDXxZMWnzraPr5bPaQgT3WS5dtDS",
  "key21": "56xP2bQDnGx3dL3FymJkLN7JvT3g2ZSRv1W7UEiniPS15McNVUW7txRTBC7H92gKxemc2d1FaQsvR32jMP6LgfYA",
  "key22": "AvHyDw3V3zqk93fBYBHr5reLmSiHtsqHz56ngkQ7zzSA1UDL83kJ9jvk4xF1su2fMmYhibJP9nBFpJkjgA2ymvz",
  "key23": "4s6hg4rDTZWTEBPDYy2wQXHbYHFsC33BbTAEg1sZUksLo3fqo6MMgcHRHKDgXuTRYxP3SVL9CMyzHFTSU1tJJNbW",
  "key24": "53rz8N8GJ4v3ivqJp7MjtrtisQGYEwhqj2WVAuAd6MtgGV9XBFTo7wXexyxp9JQZtQFwvZYvQ5i6UCjwXNdZR5mT",
  "key25": "5gm5PEPKJxXH1Aridj5NTDEWmgDqTSysfT79y4qamng88UJzJbiP2CMsTUFAJS3zHCNaMWQCDRmLzZAHxYTfK6EE",
  "key26": "4ZNc19EnuPHFZtg3k1xRYffW4ZZsAS6HGfFLKtsEwgGFWMj4t3BGG8Pz81dbp5Y5UVsjR34FwtXVtLwTfHsGrnSV",
  "key27": "4K1sdDSH4sbC1kDH8n8uij7FExpZKY4vULT4sH1B49TiFca7MyDQmXjveKCc5AUPhMTFAxeHwo6LL7LT2Z4ee6ZJ",
  "key28": "3qJGDyNaHRW2m2mgJ34UmsSEEA7arzgNW4d3efGYRDqCiMLkoDE87iNAPnDJu3Zg5nvXyLhLborZaUwFFTfrhkbX",
  "key29": "o1JxUZr3gDGD3D1Ue8mHgWGkREjimUbYQAJs1WNQ5Tw9fArS4AuiCQJXmhhMYdYA67oEbezyMXgp4Xox8uhy746",
  "key30": "dRF71LwpKU2q5wbEbYzcFQcKdMTcqnzT4LbANj1QZb9kqxN6BgTfUQt2XPPBZiZBpvroKFwZguah1wjP7J8eWpP",
  "key31": "Xt2ZKXdsXRqRBa9dFJxuxjZ3B7ZQqPZz4QAkjKir9xrmU4TpcXGXebdqFQmam1tLE2vFT5VT9n9LBagodHZsMCV"
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
