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
    "y1UZbp8kQS86htJVNrGdAYLRiAzWDHWPvBTpPaom34hgae6mZ2T7KQkTHPn1DqNcEKsPcZS9NKqPWJWGJN3T4QW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m98N8XafojtcWZZHYV8kAppffcimMYRM4LLVRXTSrqbb6VD8DVM5bTJA6X2t43F2n15wwTcSnxccp4w2968VLmm",
  "key1": "j7SiTXXegJundsNnzctpsdBCHn35uEvjkdWpMXH9gn27LFaQLSCWgsM1ctsYjSJfmB9WEnq3VkWxp4u7tybUHfH",
  "key2": "3xHrG3A8dqZKFAPpfbDeGvbR4KeReFyndpMGNs6egBwssZZsNuZYHLytZEqS1WcjuRagi5NqFk8Lvkr6VF8Ve1LS",
  "key3": "WkPkHMVjV7a48rW7AvEyXkmYd13BViTRAK52TDrrfQvNqEDtSyp793f4z5Ym7i2xWKNRmKBHkfPsNXtZJ9UucJN",
  "key4": "2ps7bWRQgEnFJumPzaXHW8xwBhkN8xCM1g5xqye8byEpKznS7iXweXc4WMKk4Qpi9A3PhSeW8DCjTVyAduP8n7zp",
  "key5": "62fkP2HGGYzNRYCvaQC6YDTcBvRFratFgrcKwi5vjK1CPEJLHgUVUhY6Uobes1mSW38EpwitRpHRZN9WQcjNnMuq",
  "key6": "k9pUPbwrvrj5iHfNutY9YK99i4UPnzFwgKV2M5W19XDKk9ugzqcnZbGESv3KznZd3N2Lo3sBGWeYTqeHms4YqN3",
  "key7": "2WSKDBaKuMXVScSgyiHKhVEJiSkVv2Zqi7kerYb8q7fywiYh78Gu6UafdpSciT88jwb3Ff1JYRGDX9F7USeDEJh3",
  "key8": "26SpXQ3vTk4NkakPqQgGq8iGCFfE62JceJzxPmUkyd4FuM7d2CJEmhSmHXZtAcSA5pp5dndvaswK1iUDntt3fCH1",
  "key9": "3RmM3js4y4SCkni2iSKppTYdraHWD963xYKCLjnK7SSDp2RNWpRH8M9sjXtf4QFX1WmStjXyC7xibESGFe1c65t4",
  "key10": "4SwQKvKQXgSphCn8TsikRSSP6VRJ38pWacRxmGrss9DWCiMFg6TTJohTaARsHrJKefsKdAdEnuXeWFV1saadALLd",
  "key11": "41d3mtcBwA9QTv27iTnD1zzRUeWQyHqd3pdATCrZ19dQ4NxfwpfdYUdyYAdd3yvC6zEzLmPhd33xQys7WrQD7hqW",
  "key12": "BuRySk1MDra3GRzzTdAnQ1VZGQ3tMa14bXJ6HdniWyC1XD8iCVPLgS1bpxJsT1smGSkxb6QNFFDaHEywQe85vz2",
  "key13": "4dMx8qqnsEp2JrhXwJLPXDL8KJUVBHaf3JNyC6rf5qScaU6Hz7Cps4JZBaAqvwXMUoTZaCfs2rMz2V2rcWkLy7aG",
  "key14": "5fexBMVKXNoeApE2vZAH2fj4mGex7YzV9hCGcV5QYJJx66eHZEEaUy9fAb4AeAVfLQSqH7dMef8Pw5LHLCWzRZH9",
  "key15": "5knduNN845Vej3Kj9q9wLprsocL6i3g37AwaRpFUhB3XPp8fVWW1MPR2XuQmFbsihxj4HmgKxcVm8fGYNQSGopDa",
  "key16": "36yPnJGpDUVkBuiBYMSd57Zy7V5G1N2apTRpnEz1uYGA3ixm28yj1HnQvHPVbEGE2H4oMVStywxdDNRzryFmAx3",
  "key17": "4oYra5ECVj4HaQVM8umAt3veHwVCSRzrHDTUeR8W1rLqxvGPfuR1RraHTMBGJ52wyVnHqWyudArYSXwrkZiWxWux",
  "key18": "3iUJEsc7JNQrBJLtztKEDm76C3nt6CYDqTs75GJtGPp2GpRT5GEnWCv8p1zFCbK8Aq8f318XCjUoDZSRZRqMmsti",
  "key19": "5TuJEFkyzXX7jo3wdmyBFPSrBqqPu8mqn9H6wM6EsiRRnb6h3BCTQwLq6Angd3wPyGCShz54t1gB7QmGd1P5cajZ",
  "key20": "5Z5upVAKwKuhBm5fUYCjJQCaeWYt1vTEHxgrqdvx6v2GwVujGu1VBpJsZn7GYm3xrZaK5wqz1N4RdRcomzHrkMbP",
  "key21": "3y4wvsJu8tMW74UZcQ6Xy9J9du7eXBMipf8WCdJEzwsHkzjTxtefvwLFaPyRHwPTcg85hie9Axs2n7xD7bEXyMWr",
  "key22": "2Fdu3ahd4CiNafg5pskRpsG3HEs7mzNvGKGZBcemuGAmy6pk3YcWBtKj6Hqb7V3PaegbCAWvaysXYaMYRdtfePsh",
  "key23": "4Wo2gbhcvGVzN8aqvYvhu3SsqW3BbHNjyFcEBnaAPsGLZbGnW4ZAb8rjMRvuSnoHkRMeqK2PqifV76L6oBKHD4Mh",
  "key24": "2dhoTX1nNcXugfDE5YkYMUNNy45gnwikzM7dArxeNYqzyk9pMw5rvvhR2dNWuXmjyTAkzNb2dnV41SWfp92M5WhM",
  "key25": "5qfVQcnUzCzM787P2qTex5Qy7h3fxn8B7Q69bfM1j8uiuEXBgxHyP1frSTuwrzhvp8u2o1NwZD6ZB4Uoymg839Fe",
  "key26": "64KuHZQx8EJharthB6gZimreMNMvJU6cixrSx56CLHv8k5JnTPyskF8KQ5XpDLCeu7bnv68BLAsNHtJMZjkCCec3",
  "key27": "4mZDR7BBvfaZduNaoycwzgMP2r3X88hmbSfc4ogruv4ZTPb7B1dvfNXbkzzFeb7WxzGfTVi1AL8i6AA3XtvTtkhf",
  "key28": "4vunQoXf3GcXBg7mb3U4XYXMosjjX6U74fz5hJ9mTy2cwYqsqhGsZdCBG3CxNYK34R4EFF1u9L8JHhqJnKjZzRNV",
  "key29": "5RRpnUrjavVNxoYD6CoHEsGiJKEm6ZN589ZPQNQD62GbsCXEAxzKn1UsW2zK7p5Cg1EJmG3R7z3JCuLNxmfkAb5",
  "key30": "4ypFKRqBKEfrQCdFTeJkELR8RkEUKgkZMAPYMWamiRC1QPJmUyB61h3rHshXzu2MbuAs8pF8hvEmb49KqHov5K9S",
  "key31": "xBgxzq97nTNGH5RTUj3EvU3eh8rHGsK1EorW6Z95AKmTmoC3NkBi4nnzGF19LRZjRnJRZ6pJkjtvs9cgsH4dQoc",
  "key32": "5eX7Lk1w2j1Qddw1yHxkRNvXXSRvPWfEnY6tGjNR6UULmvhCmRY6u6EdDrg6t8YgwALwFeFV4dRQCbhc374vEusQ",
  "key33": "45FbSWGjPsKXpV5Hvymr89fXxAYgtuXo3TkUj4LuuiLZffKt5M2wvcaL4RKCqJPHttJ6kLV3CujY3BXhdzEc1aty"
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
