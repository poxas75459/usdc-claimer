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
    "2y1746nQu5c69bexDhKo9DChbgrtUfSvBz7Q5Sdy6EFzdJ2wTqHAsa4tnfyoDRCKaiRBfeqEmXcyeReDDR8s1dci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hzXyQAJyT2qKru7hL97tYu9peb5WMVjeWLp42WQZu6odoYKJRDmLRNu8yYY3DyS8USafg6gBnqfam7KZAJRRmEM",
  "key1": "3XBpgmLyH5QonzgJT8tXHAMmDTnaXJ2xaMYrs5VzEQXAK67E1PVZzr4z2YtW5P9VhGR7BL55G7EsAMPsgc9o3ibw",
  "key2": "uSf8adY4neJHCngY4njgBAUydqne9i3WsTZDQsg9a8ybVzstUbyEcMxzoDimp3fhd8cDX8Gwe16zsrtBtMqgnaX",
  "key3": "5nXzSZYdCGXVUDdFd3sv9RbeJp8Ky6C1sLGEez7h5VckvLwAge6j1nRceFsL3wSXzniGdLoyvwVoqzZB4Yb7HAGP",
  "key4": "2WFZTECxcf7UbKs8z33y3Utu2Kgwa8UdbhUiYLYLC5Dug1ZTmEZeNxvp5uRMGpXN7mqEUju19YBfdLJsBU7ztBet",
  "key5": "65bbPLorefWaXG82mfLReaNUFPwrFb9tZKdQfK55fBUS2snPYh68AmPEcFKT2ycHSxFzgYw11o125ZhNUX7d4qk1",
  "key6": "2QrzZ6amk3Eks194reuGKipEJxNYTnRj4G6YM3q15ctfbCCyegrFh4QHW1qw9V1buLpHML5qVxkbqQajAX27Ho2u",
  "key7": "323MjJvKYU7xKBd8LQ4RDSoSEcU3S1xG6UYgWK1KaXn2ddrxA7x8HdKgsoK8pzG6XiHeb9WtTf1JvYJEL7VpBdcc",
  "key8": "4vZ8kX2QcBiFzVnZkBntDNpUPW5tGra9ASysZLDfbehixSGr6i9P7u3t76FSwab5uxm4YqP3CyfWAVtC2YCj4jf8",
  "key9": "VtdMCFhScTBjexkVoMdqskHcAWmpdt1DU3V5Gt4xgJnaET8icWYEUtQuFbBGQbzM6h1zLm3x3GXyburCZxz86AJ",
  "key10": "5MG9rPkj1VG1s8CSWPY6y7Sm5V9GRW3PBhYXr5ddaNj6us1ozxBtai9xc9umTMbzfdJ1kLPavrP2trLyRHxr3vHw",
  "key11": "2DGNtt8oaxPsaGwTmKFyDnyswE7tDNJPWVxV92yKUFrAED2zAqPBmLwzBHoTSKTUXYhUXoVijP7GeoQnzJ5A2YZR",
  "key12": "2VazGCzyZALHJ44Bfc255XFgACc3XixoxzXfRpF6RKamrMXxcdG58kEBwdAYidqPwKcRkqL2Ry6U7apb64ExEXwm",
  "key13": "4JkV7sxbuK1AvnaVGaeEn5cNTcEvio4D3ifgr64zivLUn1mdtZy4TJmsGHvdRzcA2ecNvDMmyLokjBQBypsDH97T",
  "key14": "5dL8vG3kKW6rcheMdCfRrbxwwXndM3HT8xMaooajpPwwGQ4xr8hS26a3DXjzBPCqkvxdJMA8FAo1NLNHNStPmG5L",
  "key15": "5m8SBGEF9MT94UTbk9CmiY3sLtGTerzwZFdbb2FpGS6TU5PLFiS5zh1QpFuZLBu8egCSuH5WbKE22X1vmVM4Ps2i",
  "key16": "4i711CuqqZWWaVAzUtFnnVAGVhQoQNWwPeY6JbMdSeUEF8dnPwmrMV8KAYSdUQf6vmbM7tfgBQt6TT8fVMDHYzPv",
  "key17": "213Yfqamvj6WJ9eoAUv9vrZhxjb6xZpiTdrrugAteTGCyamcyfvHWQ44DESySCSuaAM3vASh85oVcNU22YF6jhyL",
  "key18": "2XnhVsErbFugxPC5TKy71jiZifjuMHC3iTGwncxVr7aQ6BmnVUEXsfCyCpQ6KVe9ucxkviKQHQuDMabvYJitXQ9X",
  "key19": "3CeQPKWbYsqntbt6xP1tthMM9qnY6AxSr2d7gULRqNUXt78afEsE1AbLSXrA7h3SJe4ViseZjmzph7MgE4xv8Jrm",
  "key20": "4GofN6SH6aRfXBCjtNdf4ViWdFnm46KrGq6EaJDrq6tzyT4VSDPH1kJfCWmCiX2WFGXJa8jwjrjWCqS4pRD3hdLB",
  "key21": "5VeBkQ5RmBjeBedLHHeysZxPtBKooUtHSjWGa3C53obVTMc1jecLNWKWDxsVBSmmoUYca7nEnhrwnF8mN2whPT4d",
  "key22": "2TU3yCxWZXx8ts33Sa6TCgaw5UdpFKLFPT5s33tTH9qLCBi5GTKqVqwY9bCduHUczSTZYh9qXxkU4xj5ho8iMkWM",
  "key23": "33iyY5aWnnEN4gJvsfYWHT11gg3UbixzcL2Ttkz3XMHaSf2sApEtmisrBby73Vkbn2oTz7tPCtgbqLdpgZ1E1RnU",
  "key24": "us1wmCWTDH4JQ2j6Qzp5WPqKmpdCpNrT1B4VZmK4iScNqbqCjNMdrRNRpKTdqF6ou7EgsJEWUwjfvFYUxB9Aymd",
  "key25": "V6MjTqU8vas9ZCDNfECSqCApGzkmJGoS35JXjQGnM3zKr9o5aeoz6ew9Rh518bUPCgQf5kPCbfHpEoKiw2sS94T",
  "key26": "5EULnfTUBSJY3FNzMxB89Z392t3jGhpTGwbAKbcE7rwyDN1pfaBzLPsLj6uXzQDNcoUvG1dienmsoX2eZ94R3rG3",
  "key27": "5tvxR77jGJLy7xKe4pyBsTJQnJRA3mmJKWTC5hCVQgRnEy59sZTKimXzVmM5kTcYLfzXFjRJJLN5T9g8pXJRPzm8",
  "key28": "52BFvR2gbq94U7UAdXBMuFeeV6yYvt5S7hQwtkugE9FGUyQjzbV5EDxLPqJQYYkLmq4x27jdgwmcuUmDZ1Y1kuNs",
  "key29": "95QU41DfSoFcNEs8My1MXq42gCkfDE4Fhv5CLgNN9JbYHTbT4P2qYqsNniFtUXc8CvHjVdToizt3K4M1uhXQwsg",
  "key30": "4oF4XnVQvSjLcLwNW3TTStn64YjrZVM5jHqu1LEX9pPTPVTbKoBNa4nTFypphmiFheTW54aQ9EP796rzKjDacCMF"
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
