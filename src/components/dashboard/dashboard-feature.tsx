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
    "4nb58WjcLCbU3FWGxUbkTrDKWgPQcdqwNFMskb1aGnZD3SzBCqBYxps9CxauWwV7bKTRsZXTSWarr3WNYnTRw529"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNDLwMrdpktwckyPG8seAfYcqgmP1oyFmQbzQ8ESuBLch2YDnL5HyT9kWQSdZEBdVVHBMKZ73jw7fV7gHBxUyzz",
  "key1": "3S9DYA1rMsH9bANNh3tTxTtV9VR3bTvGSdxoEAuRLokxBwy7S9JQ8ZqyC9xseFYzrChv5qAtvAsJJ1EtKz8os2o4",
  "key2": "5D6vV7xhf3ixKAQnb8N3nv6TXHa9G5iMeTSkJJG4NnjwsM5wB4SYCgx78tGNaTN5GfwUY7oGhbz1t2nYqitBNJXi",
  "key3": "NjbQaV1XCKB1fibF1SmN98fZ6DM1iEj9xT1GmCJwFUNANovTwYR1SWVZEjY47kiD7vhqszJJUvzcb6rWWRXHHoc",
  "key4": "3XFegs2ASrqoscfmSkeYaUA4fufbj3wBeBdWzJAh4VKeRPdnmpJ8qSezMELEoEvsPEtQL9KSJd9ixyopZFv8gKzH",
  "key5": "3fQFmQqqs9WqewEZXkVh61CYTM9pBY6nj9AxhWc2UDVFLLKyZjEeMuGqpCHPfAss2ay6E77QCUNGE71yg9bLUMSA",
  "key6": "4gTNfArruqtG7ZYnY9Xpw385z393QAK1xh6rBbrBeUhTzeZrCcW3NtP69XRtVT6RSzDq1gJgStAYMJcBph1tqohk",
  "key7": "2FpjrE3c5MaL5EVRA4USzBvjGNCt9tndKdmQBghnmgmkjsLMs8xTHs2zaGg1cbxM1NRVPuucWdjqk9jeTRcGjypD",
  "key8": "5MchdK22cVjA1mjkJyahPYXFAfrp56ecnQ4N4fUiEBFX35B9buADXJu5tci25AMue1PXKfm2jhs6anQShLwsAmP1",
  "key9": "28bDrukKDEqgUgHqTgGVi7ZfZFHMrbUNz2Xju4kHe1XPumCcWmVx1DXymgMoiFg9GMwY6NxFFf6eVmFL1pUaAtjS",
  "key10": "2c5CQAV69T3M8df9oZ3cuaVwTgd3bsecvWBZ2FCmEtQz97pR8YPbPQDaCiMQBhKAJYU8jkaLaMV8twNrwWxgci7G",
  "key11": "2ttmCaYpDCBFRQJCBJZMQpyab7EYAjBi5GZxFATq61JCMiEXdEbS4jZqs3JECB1dgGgnYG2xFG7FayGfyErJZTEo",
  "key12": "u3d93qLVccw9e19k9mJxXk3NoKZYimp9FKkc4N21Gj78DgHqdfteyn767ATmTGm7rf2fJ55L8tFuFBhsyUjEhVb",
  "key13": "4N3FyKzdQdgFZ1fArfoKBatEgMDyy6YvYPmd5DyYTwAiSmHVmsXEKfz6Rm9dCThGFa7C3Afz7M6QDpZQtDExknRj",
  "key14": "4dvEjKFdx6Sx41NYnECrkk8tBtAgdaauhrumrXSieDUYtybocMnv573JddXrvnehRCaY81oq2McTcFUrjUYnNu44",
  "key15": "2fz6SYDsdtpurjGcYZkmwxt2R1Ns5cW3dpRKL8VcBJ8TZtyumsaYDraLUfm1kkpN8uHXru3dQvu4ZEFtwqnzao4o",
  "key16": "2Wf4ju5hGbsJrwu42Anfrx3iWHc44xEHNXRxuXc2zsjqY41SA41X8eHKxCQUWSZ6Tcs3Nb4YRFmtrBD1JqQbmNpf",
  "key17": "2MArMuB4rBXYvf4BfuBnkuydPoqMJLTazFi1cZxbV6fdcV6icmXvm5hbuwaqFucfSmW88xWw4yUz4TNYUfyLhRpV",
  "key18": "4PUiDzS9bwadP5oGxfSWH9rNsdMisDNqqvqiYTuxw94skZMmpdFgNLzBRDbTBWU3D6pMFmnFotD8xXgKnyyuaa2Y",
  "key19": "4UH2vePUkQay8DRW7iEhdhuCdAPiD7xfoZW6AzM8gXmSoboFQ91tUyMXq2CRzprQEPtzGm17nhAXysFyCTr9qCmw",
  "key20": "LhrarPybvC1hbnuum5H5NmtT7FpdKvGSJhD9KbArUYWMkHVtiEQHNrAuQibyWFWquqt3RbmrRUDyhpQZf4yzD8G",
  "key21": "A8Bb9sr19xKPpw4u8sZSswDeUYndKszvNrfsKWaWQUqCkML4zfxsQ3om849Y6RzfFV5eXkwhoK6fWB6RCDREoX8",
  "key22": "2EUSs9mvdsdTtMgWsQ8sWjtXLn4t7H1Z9jxppmZnwe8SrTEHUarYmFvEGTtR11SC9pvFaq631z31tFbnUTbZcwYL",
  "key23": "5x6B1oSV5u42gVV2DLXjXC9JfBt3cMR2qmzCPe5QdqNWuYtMqULJq85f4cC6QDsjs6iEnKdXc1rADM2twaDhbj9Z",
  "key24": "5d1Rdi4HugLwoV2yr6GfH5aMSULGeGLMbfGBgKsq5Ei8JniaaADRuiZfCP7oexKfu8R5K7bnpaLJ1Xb1PUXv85dv",
  "key25": "3dXrBwausW8f6X1ZtDKVHcfjrQqedaDnEcJ8E7iUoxB3tKoaGW8jeGhcdFuKdz9u3guaMEoRyHPdBk95STfp17Lq",
  "key26": "5tiWdNARCAYNUWADrFptpmqXeMFbPv3cRLuU9w2qG5wZkwyhVA345tPkPNoi4T1gm5C5Ub7vra4d1P7kPGnpjdP7",
  "key27": "23B2f7xsMR32f4iXCF4CcrSzH3QErMq7x9HUpdtnzvueiRHwGpQb8R1FinyktMJNvsamaNLLmJxqCvd322ZtfRiU",
  "key28": "3Vge58pohEhmxHRxENofgfk8T4tU49zC4g4Arjui7csAj4Vd4WbYGhHANWTrHu3uxdqBPk2vffRFrSVV9ZXtmKyF",
  "key29": "4isp73Q5sBikchYvaJKpvarSk55Kx38m7facWSrX9ZgXn3joqTHwUfesukWR9m4638GxEakoFKiE2wUZwqXFddX2",
  "key30": "4U4qaY7HAwEkhSgF5cuiaZDgTjU1eAcpA8Jr6eH6q2RGvPKfHKR5jJS3aAWSfJgTYst7mDWF312tEm1s94VpKaWM",
  "key31": "4DCYE5JKijUbUXjFxsscamJUSdZQz7CdDbcru2cntxr4kpz5VvM4vGbMR9w8uHskkzytDv3KWspD1YfPvjCJvhEk",
  "key32": "5qhxYF9rinRhJAiK941YiGkwMbzUttymUdg1j8avRxsoejduf9M1Sh8HsVU6LhYRFy5oFknZkE5ASfedmdHBDSSC",
  "key33": "2RPaW35fuwaVa8Z5SaPksXP3p5Gko9tG6obkPGhxXFoqxG7f7tCbMsKoM43Ejqn2PUs8hj81zWQDsFy3JL37XgVv",
  "key34": "HofqfpyWYCPDNPaifkSth2gcKRBHAhZafBaENrBe81nCWJuhTj4iF4NP8mqJnjp76wQL6jFT4N1i7Aub1ynxfJd",
  "key35": "3NaVjHh6YHiUHSQ3JqeV2ZsDAqqfHQwacnadXVVB74638krys68WsQwczjxh5KmGrGZkAZH4fxPiJZeh2oM9P8P4",
  "key36": "qWJ5AEsHPkdRbpFQHvsuHAfnk4WNKhXzmDFtTnSsZR3pWAogbXSCjAJZmk1229iKEVLx8wb39ATZpupHKoShrBn",
  "key37": "56RApZcoX9R9qBhY49td8iyPeVdYio9f6pFfNpqxpZTTmvV6CBtAZ9hHY8qKhjbyZHmempY9c9yLJBe6GisLrFJc",
  "key38": "2fHkeqSgDfGM9rLGHbRz3257E8bYSUuDCr44ZVYzVnFQ5emv4fsxCrs8FbKUiAaZYge8TbHai5KqkefRSuo4E2rG",
  "key39": "2qTwkmgZr9dntmqDthfT41RgayBVcZtRfwkx6L3f6YPJzvgmk4VafxhyYU69SoWN8S3f7V3SXqeDVYdckC3kHYVY",
  "key40": "fDRZRXyiTECkZt8MnsSkj7g1ZBWyJNDefy3Vb2V4kh5xhRF9XeVqBqZdrxikHcuuXxNHqNhpv8op8bRVsh7GAcT",
  "key41": "2BfBgy9KS6cKk9xoTZrT4JT9M2iz2k79fvo74P1yUqK8WDXD9J7UvxhhxGX7gjToqVknsVZTDEZka7ViqBgYQ7hn",
  "key42": "4ZFWpfhh3LVo7hWbXBwFSQ4W4NMj6wgihHHQEEywfcVeGSERxoqW3LDRR1nAARBuZMiGkj7Xpj8MMKYb4WQPj2BG",
  "key43": "4ihtoY2eAfSEEEnYhvkar6s1NqhRLhSD6v4rBoeFD75BsZpujxzPoCSseysqGPya7rYNfR9BHDgGsUL9k51NXYCv",
  "key44": "5DRdnZuQoVfAd1N1kMALKh5X1L3o34P6qHC79dUts8TAbfMXHEpDiWL3sVXwCHEQzhCBJwC5bzJZ6xv2dVkrwfk7",
  "key45": "TF9pKExwg3B4y4iYmrxSs7H9uN2vZvE4TmmGjb2sxnorCh3ZVNQXpmatioPd1DFYX8azwUA4Dpm55jABUbHKpvH",
  "key46": "2zcpNfKkt1FFRt5RRvoGG8oMv9vd6SQfSaZXQp82xxxtAErJsVbdWdphXizg3v62T1yV7BHNnKGfpM4tfBPqMZpy",
  "key47": "2dtvDHjXYqkGmt9ADaW43PwfMhnZVT36n3yHVB98uWpXDL4JRJwSDhbmG5yhg36Trah7AqtxEre6juKYiaUbUtn1"
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
