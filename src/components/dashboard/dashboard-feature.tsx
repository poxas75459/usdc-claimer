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
    "5tSjYT4LsBPBsYkMktU7SBpQyyN4JgwRVt8W2pD4qWy3iFWCqM6ydh9FyRavxscmgwTpXh2Gc2KtasNo1eAVKXsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YR54EAd6KGMU85UtjTCvB3aj19nsiCpP7yMt6vzhJnJJiowanEipzhfAmzDATosjQyq5iiFnkpjt9CE9uXQMXZM",
  "key1": "5mjcWMtZkPCEf8XEdDUENEpbrC7htDAN5f8KAaxBz9aubtGFUdrwzVoFyVHoFH2riEbuzfaWZqtn3i3PGpQdxZXE",
  "key2": "5263xvAuEzNPexuJ6bbyjn48tLwQ9bSnDAxunPSkaxgo8ZhXNy2HjgugM6z9kzdPLw1or1orxiij9jjbCeZuFAgg",
  "key3": "2482G4d3TTtZSFjScwAmQyG8PiHuCR7fvxkynngpqjeKYVYWUw8zeT4BaUcnDdbK446hTgR9h2fwjD3jjPHthJ8y",
  "key4": "rJmPtkwFLDNN23gynXroJyg2aqV7VRBJCyDEgatfFwRCDpFCMcqYSfK2F8dKLe7F8SSDyUTyCJ9BnqwDRk7eByV",
  "key5": "3VnkZohm7uTNdhWwExTPU1tnmUJP4tYNcKojGsQUosndHZS8xiBvCihiPNZw8UafYNP89V5dqNWtJ7Ti6knnVUYG",
  "key6": "4T7FSeX1D5iLcej1ukDMy1E6XqPp4rnMtnSzBMZ8sH3iiTeZHAEDxGVRLamHNhjdeQwa2eEiZHLBG5EcQU8swtE2",
  "key7": "5XERsgjiYF2V7xYyrWpNS3jknrFEQhyD3UAWtJJVcUpdtRfD4Keq8YeCxTgz66jYpckXG8y6LFEu8TKyADmZMWRT",
  "key8": "46naoDcAgu1eJvSTbKp4oGjBFqoJcHrDBfHKLGMGynfhGAjoMKWwcEowVhoRCjKjZVq5aXUCJaCGPLok97R6KWvy",
  "key9": "2eDjtHxgwdiqGE6dxr1sgLCpupm4jYTsHk4ZFtvTiT7doE8ETJKAFFyk2aw2HLAMpjppnQDfJdYtuoJs9GBD7V4v",
  "key10": "K5ASSAMs21eubn3MtCHqrkRZ1qr6rFua6L2qLWWupgQ89SoccYsVBMA8C5Uusg55jrCC4vuXGej6rvFvePLgHXv",
  "key11": "2hezVp2uhNsikCBnUFTNpWxQVgHZAQCNAVYiGeHKrJdyA8qNvqZZfitWUkkeRHUPZ3eiPrZBfmMCRpVmyU5wWM2r",
  "key12": "3tJpbvZd4D3srvwQo3iWLEjGYqEE2m5PAaKNSjTmAyiZiUBVKuSWHmaBsq6vinkbtTtEThxgUU1so2USAgcEajyd",
  "key13": "dB9zJ6KmEaSA6TYQt8mqP8atahayj37LLsCyswHsnBFScsggGMSqRkGuQqBu5kjUyjdXGKKCsztDpz4BeJVteSW",
  "key14": "2QuX1eehuWTf7EQejRRHRTvccecMjkE3M3haRzGvM7uwgZKfNDjAWb4PKXsuG2aamnNLXJLoRWQuYVPkDEG1NrKQ",
  "key15": "5ERrrKFbZ5oEARznWPHbLm12pfDoZ8vRnu1zh4pZrZTrxBRrxBMZx3oWo6v6cz7ABp6rKqPPiKZW9xSQAaSeRu5s",
  "key16": "3ywgMvKqCedsGpiJzdkk7dAQfFNbVU8hdQKhaXUp9wBmLaJrFrFGkimUQdNMkTGPhnvGHrHx3foS5PWaaKm1VTE8",
  "key17": "Uoo2BXa7utgV7vVMMJNEf9Gfi9Xb76H3yQSEK38bxsAAXrSMnR97Z1FqsgjSW2DG8bZrunx9C4VuZBivjRuxD1b",
  "key18": "4Gx5iYfTneHTJZzzT5yFooBoWR2QVzCUy7AJYmoynW6BXsVm96BFSdwTTK6aEW8fZdmWx8T4W9Y1iwHiYRi3XGzH",
  "key19": "2RHV8xAr8Uynf3d3gMnFnCBKVp4jSym9mK4MuX2xvsPGVw9zLT1c1j3vrV1opvzS9cx8kHtFUo8KXMXuvngE23so",
  "key20": "3rwycUwnUGqWev7JDFYpxQa7Vhbu4uxU8Jg7ajjisjNVZMTb1xp2HSbd7PngxxfZrDn5uJiu46QqCBsMq3FVfqbG",
  "key21": "4SuA8RRbC7HnAk49ccdWdD9ZVRbSsdqBfsuKMQU7n7PcR6SF4B1k3cmrmwRRGkqJHJkB76wK1K7VshVj7Rhsz2ti",
  "key22": "3vjkPWn1yuPjTAz3xLKDt6h4ptAHk5W6JAguUMQULEsUzJz6zbDEfyvU61P3DpzRVCiNA91qZC1i1E8hSyAqbYbP",
  "key23": "22Cg7SLSPj8kF35hjrHC3wxeWKJNVTSWtcCJnfGoF2sgUPzScNQEXUrf1GSNL8TCZnpoTtKdDvofE8k9E22kaBUS",
  "key24": "5CMB5JAV8nq26zhdEWMyk1gJUj4ZVjXzuDKzj4khBF1fGmUahmsryAurRdLszHbVdUmjEuUp6r2qo7XJdcLtNiWV",
  "key25": "33ggbt4kXGCe8TDYcMaBYq18xEExypfy39FFDicDjFPo54CRojcvScXWsdk52qaKo9PhU9Jd19JX5yHjLCUBWvrq",
  "key26": "124qKVgJxj1u83EC4gCpQEvB4qDhpivczecShTbA1xd2eXzjejHWrdkQgMcn5uYEGo8Gwz1afJdFncE1yUQRUar3",
  "key27": "ZQjVMcziHNoupmhN9uD78MnCJfdFkWUvwzCn6imFnHhQnEvntvZNm3dL2hJ1X2BCVyEn5CDgfpRkx2uCJstZPiC"
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
