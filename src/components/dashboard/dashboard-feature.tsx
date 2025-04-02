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
    "4ahJ9i2PLeKHp6TxNkCqBreJoZ1Xb9zszadjg9vYajtet2YLjbuFu9hgEtxZW5aNJ27UPQT1aMVRrx6UYput2shK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4scyJYatCjH57CHYZhZ6Fu2H37KMbJjHYUzbA5jki3h8jvhu1Teekq77UB5oXqPvKp28Ycwit448cKTMays8EU5R",
  "key1": "4pz47w3DUbNoLWMvrWzfFrhoANbp8SES2iSAVg2FzPmTKPQoGnUWdqrAadFdkpcxW8xJFHNsgBZoy2wUq3va1jV3",
  "key2": "37F64kavGH538anV8PfLypWVACXbrrXQE5dP6ruXp6h7EabvdyS1vJDe5K1qgpCzoV75fPXJTSYv3GEsCA75XvnQ",
  "key3": "5DSTj694Fsi3cctsoryKKRPyAbxy4w68rck5gbDNG3YFKcCxxzR6BejmsKeNdCypWBXmp3xH6W9H9u4yNBgVX92D",
  "key4": "3D864wzk9wdCxfXvUxe5RFneFQ5TmtNEcAeFCTSR4jSPAkre9QPpKp14MBkQqArTPFom5LsBMDnQGDT74dYR915p",
  "key5": "4A6wPF8qfMB9xnLn964Zs36y6V8qaxcmC1aiurM7SUrAgPRWKCQmkBuKSmmQHyc8ZCzKFw61RLvKfLJbUhtxNBrW",
  "key6": "2MMfje4CVtbn69q9Fbj9VHJFvg79WhyB86yMtGAPvkSQ76tJcWqQMGPUbWCqF7bezMRxPP4SkxPXSo3e2puV6Qf5",
  "key7": "FAJqqPXE6VQLsJbGAUnGVamGT2LUiLQtFtLwbH9zHMjjiSVSJAP5qRCPALAUhcoJcuYM1TrCKNNbr1AoQ89A3rU",
  "key8": "x9Eq81Cvssmvnsv2AjmnKeL3zmktrmzeU9AdChUHNTEZZXzTNVie2YfZLCxP2PCLsTFgiT2JmwL7apH7ezd4abo",
  "key9": "3yQmSyDcYU48QJhxiV4F5ThHRW2Qo2pJ2gXB587XUcavcHysXnAtmdHFjzTLMo9mccWBSGyRDPuvdkGQ3mAHWM9S",
  "key10": "1exwk2CYzRAevJJpsbeWKHMCBqhHhWd8yBLwRt2JJVbP3HkNFnHMEN1PN388h6dgn8ZV29c2n41SdbeG6zyRz9d",
  "key11": "2KgD3bvjxAfy1s1H6dHHp9pmA5spJkj6MW77md7XsiCHJpPPFvDsFb3tKAuRVKThmpjfHLBgLYycWZpGSxw9i9xr",
  "key12": "4Yh9WFyhnB7bXbJeP8aeZxBthKCFmh4Sy63P1WjVk7YUMFoYSumUysYvKeJxyQcSQ2LdVHSVbBDggACvgWmmDFsZ",
  "key13": "5gWf89exVSi8kP4syqhRJueAXRom1qnSBT5Zx8pKLetpW34FbdULn3qTmb6RGbUK6BZQRnWsnNUNLEdFfin5mXNs",
  "key14": "63zenfGjp85cmj9TRKir3yDZB3kUhC2KHgipLNUs6yu5Z1qW7jhxbQ1UC5XVa3324eWgLXwgx4g7B7Aqks8STiBG",
  "key15": "3SaiyWYqrmwu3sMKTeGAJkKjSsFmDJjV5MZZvfPzVMjJ429PVv6Jhf84hT2i5Kk3vmay5Kam9wp8jsgfKATGJFpp",
  "key16": "3Wm3AERDqK84zNLYbHeawcRHX2EFmTb8b1xvU7NkzsLBKWeSkqYYPzUsy8x4ETKjpqqqPsgTCLUAKzXnJocX9WQF",
  "key17": "V5Jq5KPwTaQTFMs7LmofEHgaoPxYpbC1dKa41xrAnt6LKEJC1oACUy8Md2LNvFdf9BQc7Dwv8NDQ7aBtPpUjVh1",
  "key18": "65aZCeGxXWxWyHZGhJoMhNLXCGbvo97Jiv9mZqpMtLeSTevx8bhgp7nfKEbgZvYMxZ8LFRZhUDSWmme7xYDUffgG",
  "key19": "5Pb7ZWxzGQ3fidiYR4wfrebJKLAkAkZTFSW6kFKw8DLMWHrde5VHRPr5wmSJxvtgysJtZXaio1zXv8c5fGZ3pDPp",
  "key20": "bejrzpfPg2xCUmM7PmST2EBxWtF4ksPo1Y2doQz1pMfhzW9FNz2stb8vtjZr7KPEhbmoRdyuDpzVAKjWjo4ynSi",
  "key21": "5yTqj4okRT3AQsUcpvkaBGy3nCaCHeQ4MJLshiN6vLr2kuH5cZCQ7s4PN3Ta4M5CMkM8mfXnHyAYxTSdfYb3miDr",
  "key22": "3KbNGki1gPmLCNgJd7kiLBv7eRMJ3UrsnqFrwVNyAZskYgZmJMoENkg7dtZiC5UfdCYE9G6c2sHErWqJVou9B6nF",
  "key23": "4vX4z6oyBc6bugw6rBWjRGZAagbb8ySvN8Q79BECPjhBNffC8PJK3sKruos7eWYeHBsGajWsYsyEd5xDsrrCLTCi",
  "key24": "4xBMwakRagstZn89ak5pykWE7To5dihFUcntpdPS99teBxW7kP9DBKpYmXvs5TJ8NKBLjc4Sjsu6R9Qo2xMCYpe8",
  "key25": "FSigriDfSxNCq4JM1eNzSeZzVES7iFRLCJE5N1yPtwnKhkYY8X225udD4Q8uiZCq9eSLjBDViqPhutM7PuFP2R4",
  "key26": "2ZEaDTPuzpwsBpkzMV8WPX1f1EtMcaPeEZGpTZHPQwJ8VyRC48RkRQq4DcDYjoZMTvsFJrnJAi9tJ3wSUTJwJhxq",
  "key27": "32DxRYnrmUB5sDr1aHiJdXr1cLFZR5ZtJPz5L8eavPArCoErkZtbBFgBszCWHQZsMCdNrx4V8N6e8QsUegRKcHT2",
  "key28": "9uMXsJBF8iAA1LGPT9uQRMDC8nfqvr3tHccWG9SPgrw9K1611Y2CNt2zFLXW5UFTiHRR4CtCPeCLp92kcsh2TEz",
  "key29": "3P3XNRQPjoLqPW9BVHXeHxWy43m3EX8YKTj6hUqztHfYZXjHWm2y3VE5bfWkmeZgaC3TcqYp1ZKdCcgwJDYfxfrF",
  "key30": "643UJJgjrwd1g9vN7D8AvMusUGXgViC3kSTwCW1s49Nh1oeMJLgypgSHGVzQuB9SibWb2bBZq4mZx6ue8fBWFyfm",
  "key31": "5LmECD3CiHW4KPRrnDbmSqZz7oApWpVyQTuNZSwLnPdFWYbEtaDSUcwQDEF6X4uYPnwYjeD8AGpJuaPE2CEG9zjP"
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
