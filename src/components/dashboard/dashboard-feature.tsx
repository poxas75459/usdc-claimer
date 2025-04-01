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
    "5my38uJXoy9CtTktHZav64b88R7cToq62LDrANZJpxrpoinei2pSC2JJhSKhLKK5HeyAKrTGHPBHDPCeGgHyfiUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kzVPgrmHfbqzhumiPWGSRgqDkit1LnryYem4fYwkq71a7A8gZMgcS4PyJrsRE7LEvQ5aer8JiwPozXXZXBncNSK",
  "key1": "5M5Sq8reftYajCezzufpZad5LLFjiNBoETDRftc4WtvnJZEmNah5ekRne2GiDLQet8FJtDoHY8t6q5FRynfFZkUb",
  "key2": "5rB3LHij4x889BrqXzkwAQanLRd15RA1hBNgFoCNk1fLzBywYRYderwPSJhVLszSbrht53r8178JNx1BTW73iUpi",
  "key3": "4zkQLGM2L61HmpRMkCL9z3atXaGewocP7ZMaUDX19TYDb3gKnVFwKiLMHKTmDWjnBAmxysVLnrpDi9S3fMYvy6qR",
  "key4": "5jvuzFp5jQoJ8MkbbqtuMGPKUvgCsBjXDXedDV5w9YpuL91fxcRyaFXyyHLy5atxKicHu6Yn931W3QtKAdFb8cN3",
  "key5": "YR9PVqsP9wPLEHT4jubr8UZHtSGzpra7GoaGBUB9XZx9SZsKtGsPCxg7iagwzUgW32Ut8weqiwDEnKDxaiPwdu9",
  "key6": "3Vh7rZ6SBNkwD8CAnxqifdcFETCH97na7rH7VyaUgCangrRrdXUXRVwLXmPwjBDsjvgupYHYkwMUs7euZn745V77",
  "key7": "33h9KBTYiWMYLknDqZRq2ZdjPU5gxforTbd1Tr2C32onLc3h4pocDG521XEKeynuYvNA8vpGLMYoy19a7beifL3q",
  "key8": "2EfWHQ3P9osPiYNbq6SL1W1c1zeCvV6xnuQtmnA1vrmPP93zRW4ezCj5MPLbRDDUHdfTdTbrh9zEZjfEFcfekvTZ",
  "key9": "34rBuQ7xL7aKF5Nj1rrmefW4BWuCgTP4YAjw7Fmj5jPypFXjtvmK3XHMESx6wx3MggiuZiMGr8QHxV9AArqAcJ6f",
  "key10": "3NUqnyKJigetTEuwsanoZstL4zwj1fCeWPkrrU1JRyduggtky2txaEDW2fTv9yKaFwS2frHj79Uby8nAVvEvuXe5",
  "key11": "49ygri6At7XuGEYZKEU1Hw615yjc6vMaJ8jzqfrzUukSKbuPGY7FsxM2uy66pgdC8sJxjR8Ds49tTDivjjtszyb2",
  "key12": "4G2mqT512uNwG3wdP71qpA4EpJrysi126wUxkcEcteuUmUS5bZNh8xkEhFDtHTh8E7oo3CXSggZusySJDTe7GyQu",
  "key13": "4ndBTvrypgpB1pAqsXBzXoWHxDhpBmAY6dvrvUESUKo8WkSiqioNv7Qo7zpPzEwXVrTbbjLDVRnuEehFe98iyfe9",
  "key14": "4gjAKa4faYQUntTVz3CN7RXAHqrZNnfF98z3tPAdPtEbtRx6pp1CxBVYNTFdtqWGTqZdrpN9mMvtv89K2TUgo6JN",
  "key15": "2Ee3z4aNhKqo4RHzDGRnsgaRHxGChAbT4BiYUtpBLTMJ3xMBwjcueUkziiPDNXokZahYMaxKA2xcRiS2RzTDiuiP",
  "key16": "2JRuppBqt6m8Jf7r1MLVXAzptzGniWRAq2VggbTvE9ZAHm79tWzTut7Cprj1JStEknvKu6ndNjTJqsAfQ4SYHgvH",
  "key17": "2j64ftJGW5ZTe1Skxdgo8HNrssNGNgaqnPzZpZNmrnAUkSA15VL2oRc46Kz9BRwdT4i4M7v8i9Kk1UmQ1sQ3FT71",
  "key18": "4wVZXgo32c9xuyrGGdx9W4W9WPnPMWbwGeRwj3u5rdWSUUvh3Dq422XXKN7Gz2Us6Ey8TNMfL9y5bUcRmDuH6HR3",
  "key19": "5gMtBCTuQAZcmmKXWL1vzwETDBM48URZAGmoNYcBMg8ne6rqZ34tXXt6oUAfVrwTKm2qki1NXjZ4CStXtBCAM5PQ",
  "key20": "AJ5tnNXmoPrjWvnVs2XrqQrdNG7dbXk1izw2sEYCh9CZczSBXvRATfi4stvR8errh7QXhdztPuc37HHwnw2Fd4u",
  "key21": "3LNhzZqDz41BEGBnurPpnBPH686fNJiqCdrTruBgPmdigS4hMDjff5Su4vPWdQzRMe1CMyS5YZ5KPA9uSgVJ4p3K",
  "key22": "4aneyNkAXJe95UWSp2WzeqD7tUqtPE3MaVSrh3i6JoGuNN3ZAnzBHhArqTGGkzQavP82BDfo6SEKMd1pmorN12Rd",
  "key23": "5BpntkDR7btzzNcH3We4X4Fk1qYnzAsDpvNrfi2hrCrSH6nPoqyzwDF1rEBNvKvS9jZNBWTmaLT5XrKwWDZx1n51",
  "key24": "V61MdUQJJkFR31HdbHH9qsmLXRXk4sHA4G4UMHaM46sxR9C4S9c9EXAjRKMc8cF1Ai8EGyprswhbG8iXg7Xx6hG",
  "key25": "QVY3zSpfJE1j24878NGLPFZ8KVGoeVNjf48RVRVn6JinJZnGaKnAH6QmE3vF4zjQCtDNjD3WeNh9LEhpQ21Uqxg",
  "key26": "2Ly8DbzbmJ1WjPdtienxPsK3LeGhd6myu3eCu7kG6YVBusjhaNTJwfFjMhvR2tRuFdYDEf1DpQU26oRmk1sLNFEV",
  "key27": "kumfSdUA7KgALhGvgsRgkec4roJ5aKofVYMQpPVgTdwFn2nhbGRCVPF6Yd1ojeHxpNiGk5JkHisjJJTf2nNT3Um",
  "key28": "wnziF97F8aZSXm9nSCZqkfaXsT3S7BruvxQPzWvwhGZgEcWVaGT7rRrvxXPw1ihUQJUPcH99pskMfJPRuApQGkc",
  "key29": "4fDLW8xjy5TxKHwf7W2DhN2mRtSjas3nWMMrkqwJdsm3QSsha3nfUuwpmSYMz8NAdnNuKyguvRnJu4g1TaFJ3XGr",
  "key30": "4iPPs6tKS8SaGmfR1F4CsSS1L148rrtnKYkUfQNrWHuQQ4utU5Q4cXuriLs8Bc2Wd7jUYGL5YvvkGWbWN9DFaDom"
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
