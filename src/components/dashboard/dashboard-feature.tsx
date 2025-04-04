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
    "2LbB7UfhR2gnFPRoP8MTPJDxts31zbLK4nyXNiPzBZCq6Ujvz3kGiu2tgBbqepkFFWWNA3B51Ebzjx6QuNp28RtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xrp5tiGQhj7RFB7fandZwDcAeuwbw3zausdB8bxvhM3hUTyQgEEZgtSh3YtxgW5KggAm7behjQBP6u4879PjWMM",
  "key1": "3wY5FdqLkgLKmZr25FAQwDSfsRmQt1ThguTZWZpT4RS749w2MRzr9VTfzwoWmN5bJwii9cKCN92dqjtqZ8atPiWp",
  "key2": "5KAHY5nVwndcPT1kvf8f7QhgJXbkyS5brjAiZBiJUGNFC8GPvmhTuUeq92h8As8qtNB1xvHkE63ijdC57egpk1tp",
  "key3": "5pTMPiA3fiGqh8UPH2S7WW1VbAhbAx1tWLa4GUiKs2jPHB4vXRQ43M9Bq352WnrYrbtMBuXBXzAoaMGZebRCMDbQ",
  "key4": "57a8syzhPfUAieLJ3rd9xK13AdQyefGMHBvfqFoEpxJF6tCrNL6QhbNKt4v9RaZuRDmtLfMz4nC5qWWVbdaLASyT",
  "key5": "4NHXfzSEzZyizRRdszn7uBbMsWHpBEHT8rw4hXxUqY3sU2MnykBKd9dVpHXidhkLk9uUwBkuRfgxJg6KGdNSsR4g",
  "key6": "3rTegrr4WY9SQpbWf3G9jmFfYgc5hsfNz8iwFpQP6FP1N9AhXnBY1ipRGEEkxBHrvQeUWzHLnS6VK5S4GEX8Afbr",
  "key7": "4QQvfp1E2GWZkmaBpNmAGVEqJQzv39XSNSwq7U4tHkhKKs7824hgmKdh5RNvZGWwv2YbnhifRfxLtJQtfsP1Cfyk",
  "key8": "58mFSjumHZUu8RiTLp9wHFSQ13DABTNHcWNZNzXgge5uiiYGY8XMKRKmim7Vx1ZFTkpf8LZGfE5gPNm3jgijTprm",
  "key9": "4mD2KM9WFbDyyvqH2PepTABPnmtevbzpVv51k3wTMWmtBhn3N2Dfo4Xj2GjrquschacUjAYfrC9WbD8m9kqibt6k",
  "key10": "2MSWT5NANEazEH3us3uWvWdkMwp2aRDqaA2vCV3i31aWp3sddNwhThFxS7JVwrznQuTtn5resKGhUdWws6m8Tt37",
  "key11": "47Esnqkoryg7TPGRfNvuaME7QCoqyymPHaudPgrRBKwmehF1F9JUVeWrcQ6EBp8RwVXnCqbhwrysBP2qvHt9W7Yk",
  "key12": "4z7uiTarUGb9ooShCXPeHGPFM4UTufJPGDaSmwGkGhxp5Weauc8gR57zAWWTb4pckifaaJgJW5eKKXzCtBUWU2xE",
  "key13": "392uFgcZBPQmWy1uYD2PWTAqpNkopPfpHi6QQFfEKmz3JS98ZZvb8mLsot196AH6XeQxwcFLX9qMT54iA8T53Qj4",
  "key14": "X8R56gpoKRYSz1utLsLVEzdK2QMRv5JHJ2HdTrSey3Q3YfUbFr9KFVt8wGvNTPACkJMGQ7aMm9dzygZneXyMH5y",
  "key15": "R6vv6Q7QCmo9Avn9rfzsjtQYDa4yGUTP4gCHvscmXMa4VkWarQFh7pg7TcUZBKjCWHBuSuzZaeGHtyCLEMf3Fma",
  "key16": "2ibvEF4GGAnzuim3QzYUktHf6nGqYjCBkvUNMJC9HtUE59Wfo4zb2e4AaaWgetGeKrtLrRMnLHz23wDLPfobPJrp",
  "key17": "axE2jvgvuSpUX25mFN58hdy43E4fajNHyGwCDaVTBwGW6o5whwgM7rUThTDCtpkizzkpUkLw8r98GtXG5zK9o2t",
  "key18": "ZZDszJra2WXKTjqdsmwoKwynVJMMDokN8xusWjShPoDjQdJTHoAT2icrmMfSaGXhSMXrEVYAwkH7rwVz1oCE9Fh",
  "key19": "2kY6RqLf24UUSBx1uoxcTu8BYWeqsnHfASYX9kVokCbV87Kpr8345hquYQJtCCQFQd5mQgpYdnwP3hqx3LXXX1JE",
  "key20": "d9SAY7JFbhfEuckZjeisafJgavB9apx2yTcnqka46QRB9fyprkz5XLkU4Ae6B3xN5EcnWWSPEBpYcVVzxduh3nN",
  "key21": "T2Mkc3pXWSkLBUcVFZ37AmRyhWZkBSbMFCGE6jmvxSPC4Jg3UbToaRZWMccKwjqLPTXGFbw7SMhjsMq9TrHq5XG",
  "key22": "5zTBbb4MUEr6RxSPoJdGrE7hRPmJfeu3GhmSgaEWLxVXa1p1vbEa1iwGYbbzRExqRwoeSge9HsdpzG2FkQZR7NsD",
  "key23": "5WgqmjRsfZ9CtA3aTk8Poy8iBmSRuRsXRUS1cZ9mEmbwnNLe41ZtJeN9iR52CriDcWWA1h5Lz2JuFhky8qvUD3Wz",
  "key24": "3tBKfBAUpaif85TLUdQsLEoNEZYhxb7ayZKMJ8Dydqz5uwgnHCb5YcXAwVFc82DYmyKP2rQ7yQNXyQUH9VpTL7ZT"
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
