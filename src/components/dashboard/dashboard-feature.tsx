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
    "4GirXx74BFC9yPMNFAsvC1ydvkY5FHuukBxsNz1EcsJMk4VSU9TH7HE8hi49k5NmKzukhjRKiBgBzV6uy3J4iGLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MEM4aLSUunNrQqKYPjR5FongFXTcXKYfDyiecBz3aq9mhb8NauooMVDze1KrPLKdhSgCXb9xgS4dDWxH3feVpQe",
  "key1": "2CkfGJ5Y49USyp57iAPeKSm78NwpzFbHLYR6aURuX45DUcAbEvapoyJ6tJeXQ3ru9tWiqcykujv6Gt3ofxTu9YH5",
  "key2": "5hvvdYJYeDzB68FS65LhrHhT16YVM1CSomTG6gXqUDoikPxzSCc93pKNMPwtULVDGqyeqwULJfBeGY9n8V5CZwXq",
  "key3": "KGDPAgcCDF4iFyXbgq6ANN3o9ZBCPrCQ2RDb2HX593ZkGBvYpA4PWjcftT1psqEER6E9EbtjnoXQvFkDztkewar",
  "key4": "3kXRWSKadi7a2ABjygswsCQyr13CnKFnjEq7L7piWaH1fL68PwxRPSP5zQ57472VYgCQXHPyc8LecLHFwmvnsnWz",
  "key5": "746E8ZYLY6MDFt4JA8SkPMbxmWLFTS6A6TWMCGmW58EULAtL3PXwm253LRdAt62o2x4Z5HxsALdNNagTrZGFA2k",
  "key6": "3uU6dxeQNqkGZyG8VS5qNjrVfdjodGksd5uYSK8CUo5BhMUGLCWgeirndciEHCADvJqMKibhAk2L7Pa1KUTqQKHb",
  "key7": "4FLC38rmWpzvpcUZrt3ZFZYQM8mzXCLmQiEjUidmcQxWy6MnQjqXYmZvitq3M43aukqyuMDp3Cs9mdyndvJ746y",
  "key8": "5wiKBK4hsrgK73sEpq6iDtbQe3zfUbUqfwiKnYo6Z3EKEGTpskr7kH7Vj8kU5oAMXpB9GiADowapDVyEaAjsUuge",
  "key9": "5S39cWwbJuv8f21BCkKf89pjzLxixLZJcRsbnBGtcow1qAnMKU1Xf856nkhk7aPv2joo4osgRDdpwov9pcf4X6jL",
  "key10": "3Vr3RwXwBmXUiMqzBNxYRdx9GSprC1ZXUL7rpPwcRJ9ZpZbq3iKUmNeYLX3a8bsQbVdwNZjSZKrzeEiwone8r2dv",
  "key11": "tUsMc8yGBg425owoA4ymk51v2D3z9xZha3NSudDU6Fo8N5GTUoXBkAfBUqwTkrakpHgNw2yow1c7DyM5eCbw4LU",
  "key12": "2nfa2pGdUchGaBuSdJ2UzaYdsh6MomvmtoipQe6UqmXM7PuzcjqvPdM6AXpRieMedEhWxW9xKfVxqhx3J9FuzdaC",
  "key13": "2nR3rLUU9CFTReRZJuuKgsCrn5Jnx5cSSeWZ1AwuyF5nXaK7atwGr8mErSix6sVD7RGLAn25TfQjvKUYpsuQcm2L",
  "key14": "2XKoswv8iETEfUJjyHAo3rJz5re1qBbBA1HpuHUfQD73bZicMVvN9q38JjTQL4r6UHs1DtJPxn3MW7nzrvCXKpCr",
  "key15": "3HFY7idbyMsSx8UNJ49ebekYuYhGjmrH8qWwNUSETbxCPEfMgNCqZ6kZNZFSgcFYgSY3D3yuK8HStj12mSpWqXGT",
  "key16": "5cuHRkXjfqAmtWJxSuHFnHARUriwxbWcK8aVdYoAk8hnvcd656b89G9PLvhfETpGDiMRa7gbVUuyZPosw5yNXaPx",
  "key17": "4FPUWMdHRS3utPkgEFGpXn4tQe8qmcTxkPS3rSdaB3L71HPDsRMuTZWsTn4qC5nqNhtAxFgA3ZUAoYbKH4AnFz1y",
  "key18": "4zm4hPm1ByDicLkWY8LRjtYtV7pFTNSwKr2zTW2yRXBmhKzzfNrm7fX2EwfbmHgJgMJokus9vaQDTyr9vMmrExKb",
  "key19": "5e1Upmz6ikDZehHzXjWztGFEMSLmzF5Mx5E3S4ujTZa3sqH2qWGmzA8vsmJXkQownG5ZNwLwd7fMQxuKL2iVuz5f",
  "key20": "5kaCJwTVQCgsEiRKQVNwck57ADGZt5NJwYnJZnDM8yZJeurPp7y8d8KxRgFmMoqhhPhhhqjyfT6bvcX5pLjprNKz",
  "key21": "32k68PASXSS4MwXF9Xj9nf6d7qGFdaUobHKEDfQBTECHu27jc2gXhvhZCD4ZNAD7GN27Aukf7P527gNVF3eeumwd",
  "key22": "4ZjhpmsTC5b8ZU2GyEP4demtXdLhmkY3eZvSCYkow8Qokdy2vPH4TfP8i6iFtfK9BCNQuCgSUfzp3PXpWxbQUHkW",
  "key23": "2JLjXMshna4G8z76oqxNUdvTxqfY9We8sEeGn3x9pzAUuazNtiokPhhktSKBsuBcRREJKBfpKR5gwRP99DmoQhEQ",
  "key24": "23ZTVF1sp3gPHydFKyFB9DFnNDQMNbd26KJUgMXNGE7KXTFhrPefKapGm9QsoyRF53UEY8ZRe5E3FphZBGPzW3xP",
  "key25": "YLbThr3TXA8qYKsHVsX2d2oqnNZoA8HNhQFoLpy3GiPc79voHex9Q3pcb97egrvLgCVmRXrMM9UzFQTmuP2dosH",
  "key26": "5UJv8RuLh8B4yaiEeKn4THQ2dA1yxoY8o2VdhkWW2jHtCquSbXewGCyB7Vorg3qPkRQdzMXMRwuH8TLYAMAprFju",
  "key27": "3zh7wjqmaqUwFsaWgDGu5UFLDw2wbVPJMtWKzoGumtkG5fSvpqK7Rq9kuGeCQD1paAoyvFnjrJPbSHFEfe3VRdJw",
  "key28": "4m5QqsyfdjLrpvWCNG3rWENj7vHZc2SqGEmUVPMmU2vCzuSpXhW2QT4XRrAjniQnjbCQcB9LUwiFZ57vkxujt9fh",
  "key29": "HWhD9ZEvzT4G42pU1nPY1iCxiHkydbWdZJ4G6kiV8a7evyGNkS2DZuoNttfd2tvmBw7zAKQ31S78cxpmEKb7BRw",
  "key30": "qoRSbPxzyKHPSvBXs3nKuP6U13EtQeraujiMB6x5eifrUSnjNYgHERCrrTfRVRUx77Tj6ErNstQsgiVdVySDmte",
  "key31": "4DCkeuN6CubUK54ZcPcBhzPUj7WyiyK6mwYQT4YY5MXwjX5YcAr1pXHDFf1WrSebZNuFHvrZQ8M1of69n3bA9tn8",
  "key32": "25GTNX6UJvrQqjKENhXVX4dhD1xQmnZf8dkN85LfeYSMPEnbj25E2aGLpzheA6ybwLpsnNrDrSB74ybcnm7JMaCz",
  "key33": "4sEhDAktDc2demFyFDSwEYLnZMHMg45GyHYC6Bk3hx3dHCqdeDNna6J7iyuH4VdpGKXQgztGnZYCu9YdN6xx9mBN",
  "key34": "51NYdqij1ZgN9doKX2hBcqZVrZZavAingtbNx2XMYXQbmJ1xebkrGM9TMyrPYeB6UgTARgTdJ1W5uopR7hKH46Jr",
  "key35": "3aeVgqQYtkFk7cZE9LUGoJ55dm6aQdVGtFYeeHhTrwd3DdvXkjBZ6vQWx89dLrte5fRcHVAfMzVXYR9PFKDBhRcN",
  "key36": "58LZ5CcS1KyTAuDBDXBKYNFYudakQioLQGwEtPRQ2YeExaTeHsZvxfG4UWaqP6uExkWyXRqebYZmjJgZ5gKT16m",
  "key37": "2uT1u1RbXwRcEupqzj734gw4Xr1MKkCXCRfkf8FkgcSWzQwMs6BjygUb93ajpgU1WjQrgXRKhvgcL5VDW6xz6PMg",
  "key38": "4PB3XVMhnCK3GSHeFr1NcAXKNFDpEap6XW1TgJe1W9q5FfyNF6bhxikrrqX4aAQA2b7nHVhT6TdBGt5XutLzYaY8",
  "key39": "3RsLHsUPHMXCUWQvHqjg7nWX4CKT879Ku6mvzDmVANLFGkcMvtiiUXoBLqVwsx7oCzk6Q4XTYXg3FbFXWzsmkJWg",
  "key40": "2FVLpRAHKiFKDZ9zPFWquQs2wedYVakXVMdUbYqUMhb5er4H4V2WCTxfmxmtqygKnfYsjvvYkyZPN4SsUZUJ1nL2",
  "key41": "5psCtx5kSmDKacaU5LHy5mChTRk4jPGVc4VFAnZSezDj5TKDQBesNfJKxkFJBA8VKRdegMs8yXqefnQQGdCrL1Sm",
  "key42": "3NCATRmV4d4cFSA3jPN28tyN12CoWcPLAeg2CwFA4daEUmjqBNbZeVH2Jss5Q1ko6npfL5pJr6ehceG3RkUkrhX2",
  "key43": "5HFSusoFUb7gmbGkBa9TbD7GMk5aKup5KY8SvMJVvvtUXAjqzr2ruhkGFdV11BLnVVjpYENkMNHSuejkFhMQqPo6"
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
