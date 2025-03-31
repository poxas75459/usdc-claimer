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
    "3hmsdmW8c7QhbRzD4FPR8ASHtStb2GKCsw6joNBGB2XKQaACwvEwnQKe87RvstUEDxKdbvLVivgk8vUjjXcsXDjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ieWy6Xv23mbQzi2y3AAV1gGTqbKM7xLzCGM83obqs9zgMUF3AJwvp36bLNvNNaRfQyyivTQmsSV7QsF9PRWg4SJ",
  "key1": "5hKEcuEJwrugtQicDRLBTBsSo5k5pixYDMoMzAjqmAF21T45Q7anuDJsp29mF7j6qCHPnM1vrNHP9RxGXTE45RDF",
  "key2": "3PW1D5bFvdLLs911quLCnxUPXRb7YftGSbobsBiYXwomnAdWHCeh6jvvRQG2aC8BAayWb9LovpHqEh6qy9h1MM2M",
  "key3": "3juWchYQzXr1nq15e31q2gXdXXuyRwUmCftEfHRgbtzvFjMzUaDYvatrgmrRMDuoPJk7UqwMKrh22ktH3nuUv9U2",
  "key4": "5W2DQm68oa4y5a4JWNZHeotrBdi7SVLp1B5Fp4nfev56LnpRjDw1eY97JqP3AswzktH8aBLgMExZJzjcYTqzfCoC",
  "key5": "x1Y6oFMwHrzxiNsyPY985K4qqerDCna9oLgqWuTa8jWmVCNc9anrDzJHsvd9sZjNBbQTM9sxc4f7TguSpz6dNDu",
  "key6": "59Hge1mtrQNgqPwndd65bHoPdw2jjm7Ei687BbjbQX79bb5b7nezHCe4a1VM8oCCkaGeXHmYk7xpNaC4wXB8ZaHG",
  "key7": "4MoXXQrVBdFMK166pMfV8NEK4dhpuW6UN6jfpeVunuWnbuVxRi8xxhvCAiYzf9sWnPdVPXHtuWhmmYPZo2Z2ueup",
  "key8": "5ha8HxsACnjKKtXqjUgVte2g6VRvqxozcVKKiNFvVPrEWu6w2TWETMc614r8iMTRJKG7jufA1dHwb1egLVQnUXW5",
  "key9": "3yvAWT4yz2r2FHDrXXBbVtpCoNMRpPcFK1c9qJQfLoA3YbwphP1r5tnrbqfwzy7bEQ1ujbCj5Ahto8yuALTafpkB",
  "key10": "EkjB28sPStnFhVuJQZfE9ArcAwm2SeicyKxKhGRCunggTEQPsUXHnurDvTHHQnxebbb3RcVuJ4gGt4tJAHBvCzW",
  "key11": "2E6LqtatAC3Kn3S8A5k6JXxGtLBX71pYf5rqMcwdrUrTFZ9mYuG4Z8b1boPEjE3tk1y5igk4egdeVYUvvqQ2M9o2",
  "key12": "2jAZHthBhCqKBK8LQwQWvdGHDShm4ubNkhkv4PyykNeRpPXSGGZujJt83nv2M9PC6jgVv8cwgAvQtMHqBPATDjv5",
  "key13": "41KvYwmzh1hotMBoRzXuJfSsmyZq21PcCvLzXjDqm1JGGktzEntJsroMURtDef8r1WffaGVdjVyjT3xzNk1yqayS",
  "key14": "3owkeVwDnUVDNhax7XcXn6LcogH5YZTkFbR9niZYFrYMNqQNVJ97VSyRCKVMN8VoFihWQMuhZYmMPbSe4btrsDxt",
  "key15": "2BgDKzb8J3nYpVyZFwrBAPPRN4i8MZ2uNrVwt3XSStZ96yFChgruXrZYrWWXG1RQYzuug55q479y7pmCJQueWMkg",
  "key16": "3KStyNLmNiT9b5ahkxDokHL1c6e5TMjJZFf9huW961ab5qqnxN4Kp32dzdye7b6KxHK7fabkUij88MsCGLHvThkB",
  "key17": "4fVqJryAgPcyywP2tDzEHT6rKuprCZQ5c9NZkHTKz3MoBiLJjbwsfRUSRcHgTDCpFQq2SVNst4cbWSC8D2KcRfEY",
  "key18": "4u1NiGW8N7NjjLk9soJ7gwQ33P8cqFzNQ2nQU7gTAcdj4WhLRCJWVmA7XQXDvFhxp3JSfXJs2xXxyufeoFDtagLG",
  "key19": "5xPPqBuayttMRhY7sLScbwufsfMV5rS3pXpgJew5tgGuvinfMcLiSHZyyr3qLZyH3pFkhWzeEsKwj62oXMbxbBQi",
  "key20": "7uQoCjPLV66ShbuBDka8QMm75DHbpA3Yew7gvEPBHRiSJNGnjSRCFGMaQGjUSpDC4UdeKeLR9fodPpB6M192Kr2",
  "key21": "2S1vEwpEDPAdVbKWvxphCbDpTkUkJfPD94gJBoAHnb4u89XMJqYwYn34cn2GsjRLt89Pxgu6FVVHf3RxmH2iisNH",
  "key22": "WiDKpAa3Zffk6kCmeiG9UcfwDMjzMG5ZWTm3obhfWEWXt3tbYToY4hS1dzMR1KXKSj8SnGjvKa5SKsPfNzhaiAJ",
  "key23": "3JG3r255xNnBkvWgXjStCTQjXoNJYhpTZ4V8r44FJf3CFuVP7QsK7iF5FoNMWcNLk95P4Jiq2ssLRspNo4PrcE9U",
  "key24": "5eV212vmkbzbfBrEAeBh8ynpT54W1xLe27naeu9wfi3Ho6ffXpuXSPtBExHj7G42zYtgF8dYQjHKqZ6igzjcJjcT",
  "key25": "5k36sZv8pPNhfdyHjKfgPuVg3wPiPVaVdE6XDbg6uvyaqwAj46yguQZS11vvCsecCdsPugwdwrbnWBk5zsJb35Qx"
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
