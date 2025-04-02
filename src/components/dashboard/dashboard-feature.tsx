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
    "3ekQ4Er2eDcAAEq528mwPL8d85jWzfUCTF3HZGvGgfnpvTjcDSx3E4GYUZ2MASyuRfuHuZJfwnYwMhEAoT5E9Yje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wQMsbHpkBJZbnMzYXAkk9hUqWhjYxw1h8bAKD792AqTAYZC3mQmLgymREdRCV81Ybt3Spjvyab32PkhWnFYRbr9",
  "key1": "4EgGeheAxyZhEfMaadK29p4xHQifdD8FQMY3myuNWrXh6xDJA1AjBqGHfKyYWGNAiSxK2CQHtucQnzkzaS8yCt76",
  "key2": "2SEsFSVc2rEVtMmdPZZ89KVbTWjAH1sMYLioSxqd3P2jPNsAxWQB9N2bu5wrcrhdLwoGu8zYheWM12ajCREbvkhs",
  "key3": "3HQJXgQ5wEBKQjieAeBDGusZiY8pUXA8qcrBMf7uiZRSoZgcm4F6xQPgUCC2wfsm8DcqcrqJg845Z7P5DdoAjgL4",
  "key4": "3kNL2jLw8fdAEUJASL5hY8GRoNAcPGS5uYpjv31GgiawKrstjkBCCGg3SzrJCyrKuHWEo9Fmp4oRqQx2x73fPEhn",
  "key5": "46ryvUcTxj2LoBqY78E9Pzkxno1XjH14E5XEmcuKE2mwqPwuNYBXkraf6CgjGG8DTeST5moMTNZCsxS3yGiigH4m",
  "key6": "2uTmZikAEf6kwFSxW8ALz81sQVMXhcGf9T67JLUgCkXhXrKYhbf1iVjyiczX8yTCXrjxMJa9SsV39p9gdoDSkjJt",
  "key7": "3z4eFWZ8Nf7bHmx1MMA7YRXCqTcgsvHQZLyeBQNDVjHhs6FHukGVHdPeb4Qa969kvPBuyVi1ZYgqCN4xWJft7op1",
  "key8": "5zU78x3WNDfsW4fut1fdXVxCmUYW2JJfrJjv7PXkW3VokXqEviiyTepznTKd6xGhjSSXpeAm3S8riw1npDqyJivs",
  "key9": "Cay1w4wpCsdvmvS6EwJioKuJpaJmkBK78jGaiNDNjsjpgM21fB6gr8uevq5KErNpnh8hr6x8eY8ypL1sRsNxmrb",
  "key10": "3zGMQHck4M2AjXR5G9Vb8yMjvr7WnzRWf2qLyoDUvJFw1mMjodrysr7fAMtcbMLnk3Dd7jwR63C54wTfTSNogsQf",
  "key11": "2JE2CUwPHYGEsxaWhqALj1Kr1FSMyFfTkhs6MtsqkJYEVGLLcTfxs3DL3RVZEzZ9T2pxRmzYYRKYenkPYFcgFfTj",
  "key12": "3cR4uZ7DMz9vwmM4qfRdW5PTJcP2BsUjCwp4tCVcHRhDQ3PdyiV55TYtQ396uPFh4PNtH97a38JdMPV4bTcFjHma",
  "key13": "2WmRTisAuAvMn6XM3NK4opNpfK2uVZHbpbQKgwmfQUefn6yoxrbp5DxZ1TdAn4u9KxvLCv1cHAzr1tCY7MNX3TLV",
  "key14": "m9vuaqVJSDbup8dm9EdNqP3vVWJBwkW4ETNoPPk6DjxcbCGqb1tk14W8YShpbpUrBqef6uSpCtKYrVqZzRHdXaU",
  "key15": "4VzUXM5mbnbZ8DycY1zFTgzHCApA1EzivxfoLTDh2CactJWgvzj4XXdPoVBiFsXJ9vnrJaG8P45MT4fXHQSm4Yy4",
  "key16": "3XakS4RJFSVzM5pno8vTWFmm84yS1bVKXteLWQZes7s2iSEaD7PgGXDmBQ42QoXTbmYhYvRhT1aQfwV4jQ1xmqds",
  "key17": "3t7zTUYsg5kw2U42UipmhPLhtgy4NHg24ro1roL4PPnoDpE11xVzSGaxQFx36GJ8tXA5kZwjdR1fy5fBCsZ4f92Q",
  "key18": "4X42vto1C17D4g4yPaSVaQhayooMZgzZ6azaTa4QYEQDT1YnKUcRkPKTD98FNT5xprAHapyp6E1xVBHSNV4qHjL2",
  "key19": "5Manf56H7WRGpeAeRYAu7qXLZiu55vqtKAj4iRErE1WhhfrWZhUExjmKEoYPeKRspdGHnyfWY3YhiaXV9nvoqnHk",
  "key20": "4pgGo3DLAF9aTpETyqtFVyYtAnHnCW8tMM9x8CQyngYpafb2gdH7Uasd1R2oX4qEAY61uvyJsjCSigNik5iZ8cGD",
  "key21": "3V5UyH7abk1NtFizBingedh5kHaebazUdop4oiavpLMJwxawLwMz8gL1jKvS4gf54dp5zW7SWwp7dhY5U66f5WEU",
  "key22": "5sNk4tLmBXVAQ5ZxzaZpcHfzfv5FKsUGVfpcgAw3PEaboq1WDJaaSih1qrVUUg1A5YBB4H58HMPp8hXo4ufBKkfR",
  "key23": "63GBePFNMptK59WfoA4wmuFp9nv5HrDtyvM2gvvbF2r6f7iNCu43CSvkuYARQiaUH8jGBqBXWBDyTmQwhcPwG8YG",
  "key24": "3GJ26LgtfyQjtvDTnz7smYs3ciCuQyQQk41xcCyBcginqgJbwjvkihkxLeiPHrBr8S3RVXzoeDVEHr1W38kchN2b",
  "key25": "2mupvspQALdGKqrmm39cP18EXTzAzVY278r7Zvw8VrKMSL5w9pbkxJicBiRLk8eaJc3ZqgnHvFcotH5qDtM4BNDV",
  "key26": "3WXqtG36eqLA4ucgi62TRKexZvPA6gPohMcsAsKtymP7XMcSFDMtEjJoxFQu1MJQnmR6BmwBm52YRHkoJQux6JcQ",
  "key27": "5y55pbsngGrhJmdRm8ctAJQBLVjaK7k4zYeAkLvCwdWTmxA4muhDtaTNTgPmRKsqAQfCZrKNex8ke7iDjHmGddzC",
  "key28": "F5kg2ReBiJZvdDyH3hEFN5pbYJ8wWQeKg2VTCg2KuKQqC4Gsxu436s6VpkYvuBBq6PqtWybfC4XdxNWXVDSEexm",
  "key29": "3qZ4j57EL6PcgMVGHqvANyoNR4qbEDABvhwR9p1VXfjgYqVhK6uYSL52etSdxipt1tK3eEXsbvjmdVYBxhLC9PmH",
  "key30": "2qAutNkKJFF96of51FmjhERa7iB5mFbreGKbjT8BMkhhbHMr7W9ptiF8QfQgTQdGcRxAve34PqyyeRNCsn499333",
  "key31": "iHE2XAZ3qVVgxPVFov71jNUbMWrsmzw2DnAMkX3KaEBADL2wn6q5vaSJrHpeRBHk3e75oVDHNPhE87C1XwJd7Mr",
  "key32": "524Mbxsx7Q2hsWa4FaEAU1RStCESkVi2eznh1qZ41Zwx9JPrF76pJz1Ke71VjLZtwsZWdP182CP4SWUYFuMqDRQz",
  "key33": "4kwdgqY3gz9cYMBGmN5277kJCen2GKhGZ8fydVcxF84FyiLQXGsdvkipFWy2aCzNZXKCVE53vHUWD5RYqWMrtw6d",
  "key34": "QinyYJSEhBDypkHpFe9F6gGRTFBGMW9w4V3WTA4n88NzSiqYDVzSbP8M4NG3ZUTBhDBrwCedrWK7tF3kzzPPcF8",
  "key35": "3ow2tFHqcSHdyn67aaPyrGv8mYdNCLnoyF4huWcorxtR6PPtsk5X37u3AhVMRtHdN1wuBKa2QnaoLuedqEA58TkT",
  "key36": "3Q8g3LSPhUBfmVGpSxgKBYkDHm6AGKSbYaXmcHGe4FndGa6m3fpFXVmowto5usYg7f21QC7qogTL1SCojYnQ7NH9",
  "key37": "3dF1aq72EQE4KZgvNR49QcPjwe3zBq2LCqDDYsCrHGbcFQZKyBynfDsyoo3MKurtbm7hTrNZknVmRW8o1gePMyZF",
  "key38": "3vdYFbgKCetGS85uiMj4dEQo2xAx7abqVXkLr8vVQDWSKYzPDvsTcqS21qaYyKGaG6aiJffTdPp4FYoo3dnLyntz",
  "key39": "3EZSzGBMeLknLGNKUFRAeb8AjgZWa5xBLkx671DFZs1e7VkSCTJvZNDHLU5hvy9RRUaJhDeEqupPWCJuADWa9CwC",
  "key40": "37iQHn7LimkJSRKjnVzaRUa8GqSXVMNBxJaZoYTt2r6dVyxw8uqQZjXxAyHBrGcLm8EYVNudLbbkNDTnSkVSX7rY",
  "key41": "233WL4e5LiXLmHkfo8HPSu9NBeXHEpCr7QcHwNpZJihcgDf9ooyNECphfHj9Yx26uFig4bNy5Azj6VMWFppSU7Eo"
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
