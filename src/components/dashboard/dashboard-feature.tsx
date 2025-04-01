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
    "5Y7QUMCtNfuUfWSb2hn7BpX8eZEZhfSnnYQTb29MCxwadqcZufFdxdXWt5QNnTGSLMSE4UYEWMdALtbFxZTy9pDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkkkSMeZ9ZcnrXcqDyD3DdoMxpHu8WL2atQsSTHKTUf7U37NDUaFLC8zQAdRtq8VkDWHNdk89uAc3KyPABWumxg",
  "key1": "3ZuPvvVexqDkrY1rVhe73FmCjWQTztUbY1vQbVk7kmdraENqUmLvKiinqwmZ1kYXZcCEnxjmnEq8e9ULr1hkQAYL",
  "key2": "wa9y1hv5pXjHovKDSPy9fNQjdVm8De2tnUR5TQmXAUCQxdBTg3aLY76dx4diaGQLxbatJkRp1reZGTRrosQD5o8",
  "key3": "4LaY2FLH1e9s6LBZ3XFZEiCxCSCDKfkRyahhKT4xP3XqL3JqtVeJ7XsAiH2sadZJKEnMxApMbsYJs33mwbbDeQuB",
  "key4": "24c7aNWRYgMSXUpMKoxp9exwmA8c9vzr4YVKsGJcPGY4NKGjYGUenTrfU8HzCdGhQZ7fjyNywsBDkHQTsi88D6te",
  "key5": "2bN45Z28nvYxaRPoKBGFvKxW1C1VfygoQJZDQn9CzDLiyXjYq1imfChj5dm4x4sbo5gmaCZ74KN3jBUD5918DzBP",
  "key6": "4TrG1upnFD1xLLKHCDd2qNnvV6yUMsE2FQzbmSTuiXq8Pu7yLoQuVbRZKMZZC1Qp6nFaZ5QF3APv1q5pZVyWkYGi",
  "key7": "4b6WUa7Gx1w5Pmyj9H59c7m3LtgJ4xGmjrGhfKxLKdguFXVCF3cu1AaLMFNaZ14XdYoF5XSBcpTWYSgHM1P5CKgN",
  "key8": "5cb7eMwpbejuV6dnuNEUX5TaATDeipgrCGJj5n6w4dVtVmABfzjBKsEmL8uoA4w5pZfCNe65BAZaagXM6AP1FUar",
  "key9": "4mZfedJUifMz8yvviCv3h5r7EtrpqVRWhfagFA5mkAr6EcxwLrbGeT7v2PfsKzaMsg3iLs6g2kdCoWRowpg5z7ew",
  "key10": "5ihUPPiJSESB15fVFZ7pGS12xFLJVsraJWPcoZuodTtc9WLap3WcorvjTuvbh2ppWMeYRnZPWA8HKj5AV99sxBn",
  "key11": "41o6YBaBBFnsk6omfv19xyx3ZX5c2zqvUyWgiJQ8zvrKWqW2i6actB9mTun1xwv6aqVy7w697sHsJfpZ6gSJiFSG",
  "key12": "5h9NHRuCJxRk2ro3F97bm2cvi1sg8UqCt9mhRfiBJwJ5T1WvryTEViXTVrjL9R64whTEv69goC64ZX7hK54JDLQi",
  "key13": "Guf4vtmuRSfrpnG3gAy2ihhvwL7tcJt9aqV5Qbm9zWssQCbexSXfD4pRc3JSRrZiQvX1MCs3mJVdV5hKLh8gC6Q",
  "key14": "ihmtthyJ1oKejb1gzRV6j7dKXzJoADJCmmKij3dhhW7KLp7PiwhEWfURSE2Wn5pG5oy5aadrgaUH1keRmrgejrf",
  "key15": "5vj3cFLnTNdnPVmBgNgnzJSSHtmC2PhkQu1KpBeLdX6gvKVFnZSEL5rNPHeWnrqeo4MUpHwVdsfzUy39EzgccBTd",
  "key16": "WwkJNyuubfA1HoUkAXuy9Y9CZzyxJxHxahZ27gGR16NJwDNiWcsdEe9Q4JUCMUWUgZBKtPaMprRbNzntKBj62j8",
  "key17": "5pB4wpDMKfe2KxxPXodyUSLrEhhSgKQ6jMdnh3JfFzKGA7aiDGgLEYkATzga3wTTQxcvr1jYDs121ADShq1DvLXt",
  "key18": "48pWem46HBomkCgVwRhBAovZ67QEcr7z5YP88PK8xKsf4jwBaEgktipmAWnU5JrFvKT23RhStqJboz6BGDMSTHGk",
  "key19": "2wx2RzhD3aD6z7b4fVssDFNLXUpBUdYjdGLqw5MWfjJq9S5UczTdcrDFFvrdUYiFrjMz6uzdYynhRQdEiGyS1EeZ",
  "key20": "4GPNnhoLyYacX5fAvVv3NW7XZkDspnYzqih2D9XwbWFyHG2ry8tc3cxpXzUagqWmYWkmdvGhWU1e2jmb9GExU3Q7",
  "key21": "5rtUBuUMxFjKKNnFN4LRdgX6h8LrtntPpE7WpW1fchxnskz9e5Z9eijgsSqBnMNGR2eGFaL9vDQ29821Da66Sk7r",
  "key22": "5Qbj1mtnDrFnG8jnrudZQX8c9KENCUzRxcpZK6vz9VpGsKXT7fmpvx5MXfmqRTksVfNRmcc4G7qnUQEbXVdm7N3C",
  "key23": "4p8kZdFpmNLFJ5GpcFkT68wQgFEoggMzu3usrXN3pUdAdYcoxZJhPonsFz1Vm5nt6fQTqMBk7bg5SKL9hns8xHJ1",
  "key24": "5EcrQuR7LgMZseutpD6SrD2fMjsbGFoA9fZKUqR6aCCTjdYiRXTp4hWUSqASswqb4Fo84mfWW9fb46QpRWjz5fRE",
  "key25": "Lzp6LGkFbYV4QvF3v7xeEhwtjUE5b691bmFJyD2pqUNkTZdtxrMhrT2dCvjoy6xcaQ812GNvps4f3wQiME7BaDR",
  "key26": "RhfT8bKmEmViR7vZyavdaoX2bUGkATvaLaTVjZ2ZkMh2Hzs9mbXnHoKErmn9PLypHb9Xw8QNxQ6kGx4FG96Fscq",
  "key27": "4MdezDQ76idMnXKUrU5iWK6hzHNagAyKSZkeRSCGiAtHtkyEbbP8e5zhFBNaYS8qRWHKCuoC8ReXtSEJbZ97jtsK",
  "key28": "2fKEhKqMDc7bb6bdaMxN9dyLoW8HTmWfr4bS1vrwmFDd8EQDqKq9NcS4sH9zJj4oya9fFCXqPW5fQZxRmUUZjVRJ",
  "key29": "63FA2LpFEwku6o3k8m4aYF13w6Nzh3XNetS6xr5sGxRBLWxKzDnUqfs6DCTheexToF559mYM7YqJRgAZqxF3EoUr",
  "key30": "YWADFDbYGWdz3xQYcrzopZQR6wvUBArHvxFarfSrGtEeJNaJU6EZpkYRvYQ5q2bqoACRbtqADMzn3SWV1FdBzK6",
  "key31": "5LCN8i3jjYUMG8zM6BaJS4b13xaEsRGz53LHbj47tVZZKbPDPmzeEFPJEfyoSbcZ2bAJvmaLScy6xzPhPqPw3E3M",
  "key32": "5MyEBo154uGAs4KCDfx3a8CZsXxdMstingzkh5ggnhmXR4XtojiaJDUYCo7bD468YCDxNzSCm7yYZmEJvQRvJtbr",
  "key33": "5AHbRQKikqtczCQx3FFf7QXvn3fDoPnD5JtyPZRo2SD98Nf1Pq18dA7MopeVWgHtnzHN7BAoivr84kocbgpdTtNM",
  "key34": "59ZvMxCf2drFqEhCFuqejGSRpPsoA3Ja28RyNudxCxsSeZWpAxwHfNmwkYbEc2jJCYumh7yp12FffUUtzJE73SNW",
  "key35": "gyJpjHB2GPUwaLmz3dTaA5DMsHcYTC3PnYp3DdHMg2zaME6JgioCbXSV3LZnQK4dZFe9qLP1cXY4HKzPnvRLYHM",
  "key36": "5gygVQLwBShCRcLeF1JRycivWEwis4PjCW7Z5qqUH9iiRXzQGUgWmBLVEUqPpnf8JMTZjUzQwX6DhDD35srx1t9f",
  "key37": "5hJwNbjwgeXsjkehfcxSBejsTLKjTGotkmvuATJAVHxCPZTJHBB2SDV2fzDWRRCp4VP4nd8wrvtvSTDJPgzBdxXu"
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
