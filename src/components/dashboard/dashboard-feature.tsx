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
    "2YUhtVjVcgaC298FVgw4jit5voLz2HwF3MjKBVG2rH7stBuLS7eU3KYMrthb1MhBRJQ3nroFhQRvyNfdajiysUe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAZajiBQzSUkXsa9Yn2mBbmY7SPGJBc7XBKQuomVfbcCLqJJ8LRP5V4V8d3Xty3RJ7yEic9evkWPBJzqpmyc6uF",
  "key1": "6GfMhfgx6GDB2jji7zXG8T2ysRgSJkh64tHtJGFZc71K7TTVonVXUhpWNZxTwbTSAGkgfaJD7rBQgN7KBf38a73",
  "key2": "Ptqc5bHb4C9SuLXSXBWQBEY3p8xWdzFpoSb4Kit4LQEpWtKgNiaAG7sEc6nUDUQDjcGLH2BmMg4GyqLcHPwAkGU",
  "key3": "3LkpY9uSox8GEiC7ra1DAA7puMCABGUzzmUY6Mwb1WjkYf4SjE8p6c1JJuBfzZK5GzTTzuSZ9r5EksW7iev3ZnNk",
  "key4": "4iSMQiQ7y7La7QtH1FnAwKBP56xdDS5TMHifPT1rjxY5DKLQxN8b2a1mSW92T9BUbtzHZicxpUWVjcGZGEraX1f3",
  "key5": "4B8y7gV36rt9TyomkrzwmTDZ8rWsV3wEmbrSgVjVwDehTBHMzQ5taWyy2LhAsE3ugyeqDa8JNjJG6pirmQpsgMSy",
  "key6": "2TvL1nk2L9DZQX98jSXtbdvhJGE73C8nPUneWL3B88yvye5TyMxtPcCebJfDvRtyGAtMPfqsgtN4MDYQdFs95WoK",
  "key7": "4sXFM17tavGiik8HgvdwQoMqZ2fvFWKdtZkD9hMK9xBDqsCDMrPo5m3hwBHgYXH7vDPhJLK4RB6YyBEJyu4eUJjL",
  "key8": "2fEtxiki796XNtdSkuJZMhKNisTbp8CLLgVMVyu643d4w1VbUegZE7rS7bE8TSPJ6Va8Z3ovymmni83asUWqEDso",
  "key9": "5hNKtQ59A6f2e98TNmoniaWnPnoMtxfSyKWU22Dk3QvtRFjNe42zcmD3EXRTfPoB6gJ6XAjQbLcpeoLN2v6C2iv1",
  "key10": "45Vw8e6Ej3k4Rv83ypZGFSejv8chzSzJwpvQUAwdBAGnEWedbVuBVwYMYWMHoS78mnhFc3HjHvsZiFsDFuiY5ATH",
  "key11": "4GjfYUMHKqJore3N8FQrJMhG6129Ah6cfZt25rGgGaC6jyF6Jy2X2fJtHie2RZFJ91K2A16p5Jfq3sn6xEF2DBU8",
  "key12": "DHhmHBbx1tBwLdLpkoeDRWSRV22KrUSbmPyppQnVivoRSjbw4FfBkF34sx7wupK4m8AQKfHbZ8a45GZgPcmmfYo",
  "key13": "2jMRyka3kEAfJEaHnYSg5aGMdu8MPYgP1HCWv8Z1oR9cFqof5cVKAbbaJNsiUdSpniXkykotTBvxF3tx7tWwSabd",
  "key14": "35L89X6QHKh7hxVM26utSjWVud3VaxdXw9WLQi3FpSoxXV3wVBCtBqaqsLiedLuSMbUDG9j7uz7kVMEbvShRqe9P",
  "key15": "6EZVy9r6c43hfHpbKb4FefYnc96uHnwgbkd4wCiSMYGh3AVgUrnRAXPvtbLqKSNN8Cr6N4dVKWKHLGYcdiuk4H5",
  "key16": "kuBfSrJ9zFVG9pYz8TPFWFfsth84JaXqWX26CYM2U17Fate7MvUHmyrprmPgUSJarqkKd2ow6vZaVemDjoeG8uT",
  "key17": "3eqgqW79VCFfDxJAxxaDoXn7Zmw6FyU75HD8v3hZUHLPL4TX45VZZ8mam962YjSVke8N52fvMTFVHNRLk5sUgyPj",
  "key18": "GK8LZ5YSTk3biydjvBM9vELfR88NETFsKMx7onMdz2A1nGz2GvAtzWDT2EKWRET1mYHeWAP9QkGhxHN6iCpxxCT",
  "key19": "2cMJLEDCSkRjhmt1yTc9AvkwkVtpPESo3p7jK3ZdP4mFs4ynCkKVHvRVDucHeTZHVA3RDSkFG4buQBkBTPSPXzYJ",
  "key20": "2VrVcsmHTwh5XjbhT37ei95LGMBHmQ5qkxQM82ERSWhcwuEq6gXuddZ9GTKC3Y55HdDteKGcWBturbiKV39to4FZ",
  "key21": "3NACV7mtYoWYUiGumUEVjK4ScitM96KjNnxPDCLZD3f9RoPqNekfATPeHrxEmL7Nr8TMoAStzrRvYnYvU8h7Uqw1",
  "key22": "2RJDEbTkxt6DWmEaspcmFxiAQ4jVKEA1w3XLYvmzcVmtQkyQqViKMKCT9akkBi5qz1cejQyetmU9QHRQVhe9uZSL",
  "key23": "Z6gWtMCeoVjUBiuEpFVTfhH7A6BVLcvK65NHDrNUv7R8RJf5fU5TT1szFDvD4UyP7QFtVpEUBw37mojk7jNiNjQ",
  "key24": "3FQvymLUcSxePSdBdru344hkfS2aver4EYNBD7GT8tiDyWYoQ9SsgtxshsKCNFbK4G8pN76oHZdKJSzHpwdVqTDN",
  "key25": "272TvhjMMGGQgiyPfGNwbyTtxqVUNHPYqtzat6qbvNFmDu5MQofjQZ6bLL8Qw4JW1GjnpoQFv4A64U4z6W29nYwM",
  "key26": "qm4bqmC67kTaeWqDu2spsGsB69CpotLaxg4PsGvNhNpRrDZmf7JQMJxW51SQzxS2pesorRQjVJTKuTUYfFiJP4N"
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
