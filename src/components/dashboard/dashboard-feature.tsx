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
    "67DRtSXVTKptuDxpozaQuaWjiNue97Ywo1T2F6fdgheiaqcdk9GCoDQm1iSHW3JKVmCCEoLQDE2PDvCjQoxVPMJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45uobC9DMF4UGCaJVQioY3jTDmmFv51ZohDmCtPji5Z8zTKoo4wFtq8xasXG3SajUCU7DDpDs3yPR8HrPmoARqQG",
  "key1": "LPYpoBnEn3XKETFLaBpxi3p1BtKRM4jUpZAwbNcvS76bzkkayGkWHxXLfUP5Bqu4aSd4EH3YgMex3P8PCBCrMat",
  "key2": "3VciU4J1kxPMBuDdQxs3zaE7FnmSe1p7omAgptT5Q6X8YRJ2LZgsMSxcoynMbDT36X5g81smwrv4LeBKtRpQbZ8m",
  "key3": "4xcf3WHsAPdBLS1L1Z2sHHcaW6dBCc1EyhewGohSYe1JRYvYvk8EpRr8zThncWryyxL4tyiHSbJFmvABjc2TwgtX",
  "key4": "3CptDyUQYfcf6qs8pJkmyGEXdduGdbTyLEHhkPE97dMk5yhfc1mLSLE9brpdnemnCJPSBBNnKX7huQNwv3Lo5cvK",
  "key5": "2TG2pk146XuGWNzAEoi6oPbVdSgwRFSuHYzXnfv9rtarfATB2Mhntf5EQvBXmh6EVfM9CBwSa5nmr73gM5GEaoE1",
  "key6": "32A9BtrkoeSGGhGqjWg4fkf8o8RtKzFD96ubQ1kLcAgVpKHcSkVSrkbppyZEtUg9mFe4p8THkpYsix2R3BgwMV3n",
  "key7": "4wGAdxszzDuTwdPtVuN8CtoBAgkF3QcY3KGWyJHakQrRvjgmt8NTTfLeJWTDWnyco6cyp8Xsqqv34ePDcxJrfnLr",
  "key8": "5YLzoQsY7u23acjtW3wUwgoCSbSuNo9UAKHabzno8UW83PFhTYzbcbYFs8pzBojGdP83HVPusBe5nyaZ5U59bPiX",
  "key9": "4bs3aekAUDPFETWeTYz2nvCJN27ivNjshYcxZyyshy2PiJUVnUp6yQxSVoCHZeRCKfqMapKMA5BkQo8hUPEyMZEs",
  "key10": "mMUC9ANXTLam81oGQm71SAM7Y99KYQ5gyq1QC9TkSet2Q6CDNV6uB6nj9pYEdXyoUf8zNwEeGR5497rgsrY5FSE",
  "key11": "4rwnFX5V1svz5Hje68wjQavRZBw47pZb66hh4jTgJTPuEbGBSvMnufNHFTNmUZy3XQpRtTj42uEMiyX35o3DbYw",
  "key12": "3ZMTeMsbso3VgZpRqcZRBybV7PgyiXUTFVh8m8Sxz7gpJ3knrkrAqjgQLGG7NNKwgRpjhMRvKzVj25vG3s47U3RH",
  "key13": "4HTjgTaZHgYELBAuzZatoAxduK5Wyur6bYBqbbCxP1P1peV99htyNwSy5i8A6zqL9Sh18kbsyKPoBV6oiYpRVzw3",
  "key14": "JjYT8H7aCc6A2DnezwaUkFpM59kpxcPoWBKWCREGStK4URUEXME8mVcu4fHBkspxf4Y4YE8a68MtbW33VGKNUE9",
  "key15": "28QnDgLme1x82x8kgUqJJuT7r6kEkRkftjjKS53sywaE5dCuJASria7jBMxfc6kaMaLkHi1s43n3Vu7QaWcKJiBV",
  "key16": "2pCoD7bquKgZGywJTWBmsqDLcyz5L9sELyTKFBGMHRUPHe9CLiUtLQxWCG6B4pCyg9DMWFjP3HhRw6AUDBH19yqe",
  "key17": "63oYQDH7NKAo1qVsLEy4Wg2bfXJDu2NbjUWrnwtPTEL8CuykwzsTn2wtW8meN1zh1qnkP2Ua5v9qD1vKrhhPt68s",
  "key18": "2zQ1Y9nf7qbWCEwgAgKpSbujVSZEo5DrABhdxAx5wRNZYNKpUktumaa3SFQ2uX1Q4Urk4aQ2jd8KVXv3YJFmZXZv",
  "key19": "61o186bJVFZvCXBWp8SaU8iq8s45ChebVUNjrhvEZM8R4sQpHj4kVNx7gNQ2aZgdfDgPxei7Z4DXgrQ6AigStbTJ",
  "key20": "3VA4LVhisHDQiGE25ARhz8e68ca5aLTkxmBq2EaBkd8ART3k4Xw2hevW7BeefykZeDfa93yURD4oQbphr9wu47vf",
  "key21": "24pzdDPeWUtCexUwskbiPuEkRpyRrsEyBAZCjMwHq4jmPiFgP4xk7SgGiX71CwrcDJG6oCsJ8ieusZHUg2sqSSqp",
  "key22": "3D4zRg8W77r7KeRV3pFHKBSPAx1b6apdfg8wjsWbucP9CKfeKYcZNufsgoWmYc5YZsm7xM8aEvzubAVLGdpZpwf1",
  "key23": "nk5EKJ2DRB9wMh5yv2hqL8gfDZ68aQnN3GrKPCEbp9fFZVFtv7vcEKxtAnzGzdezsJ62rZn5pFBLPKHhTDuQWVd",
  "key24": "2wC3D1w8CtoXS4znNzQsKPZMK8Yephp1bbE1qKoYDVvNK55MdyKxZULAYDsgA1qU4kRssoQfJDeTUkHLhjLWJ1Pv",
  "key25": "3HRmZbzAAZeFbugFfZbHUHpK5nAL9kUP7p9i2VYxjic4qEos5TM6cthJAjnTVhVbmGgPKzcQvKb1DCb6yLnqzfuw",
  "key26": "CRZWygWnj9T2M2bTqRbohkAnX9DSJYMzejRFXUhodCEqSRG8Stsif1krALa6jEVNtxbrSEffB9kTJUbsqQQEyoy",
  "key27": "2g3bZd8Xfxfah5qjbBdDPUCYi3HKXF2kfGYJy5NXys3eFz8QjDscMcikRfGUWg7NmEUcGCrPUJCtaRcdqdqSjjza"
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
