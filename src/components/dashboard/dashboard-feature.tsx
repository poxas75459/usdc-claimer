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
    "4Mn8Cs3KsFSYLhCQPhFFPnJoDz9s4SrFUddMsdti6CYAqQiW2dYdhEKNqaBdNhtxiznc8SUMznwBDBSD6UQB2s4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hCSFk9dauGxaa3MCQpHhg7vQhf8YPANAJgTgGDeNcrLBCiNCV43iQN8jjCkQ2uJjAFrhppw5jhJjXJMpBP2ozcM",
  "key1": "rmxYmp1ifXcUiibkeAFKjwMv2uetMW6jpBcTDvUcksmZzLzUqyeS6izsWb3bckiEqZCFi2nWfRZEnP9oVe77pX6",
  "key2": "4ksoXHjyiJK2bh89c1qN1pee4Tf9JzBF6qjgmhzcFjUc8PcV4qhZaSQVCzxQuPAfUH1vJMCmje7F8v1aj7PEyisT",
  "key3": "2SRSvWDfGCTFHgEdvujtTzKaud4HtSt4G2EyGEQPcVnZRTs6ZGPSc7TkqcoZL8B7idrDNTSWt66V53gRXyD7tUa4",
  "key4": "4eC9Xs8iVDQn5EQmC3y2MNkybCKQS4MKXZjEjVK4rjD847sc8L3idEUZuyKjsCTyJGeDGexdU9LFy2uMk9r7824D",
  "key5": "2p9VtVadE4v4vi3UokH2ZqX3h91bPdTsfmBwKdwkHKmU17Keo3zGuT2mgQNQS46XKQtYgTs3djZ46cW4uvQKekuZ",
  "key6": "4JqKpgZ2buqdYUjDM52VizdD1KLKcNdEBmGUf9R6HNQYFKzA2VJqMoEamcXbcEVVrKJtruA174D8D2ioJsiKnnXv",
  "key7": "2uRyePFkp68C3rysqztmsUz6d1Kk3rgC7eUmE6SYHYvhk25ACM8Z6tsxetxkntjN8g7wYkcuBwfdqV4Qkab6w4G2",
  "key8": "XhJyCvWahFcFxr5kKiKgpioxdDUhzMywh1BrxRnT6ALdQjB7zYhzKF41GP2daAsjzAkDXh5yoKegsjn5myaLcWd",
  "key9": "zGNvwS7bLNZWxN4EXRaBiXvFY5in7JnZ78q3uUR1KMGBkde9b1PBhrLPZxLHYK6sveaTHTsFJwVihNHmnBwvXdv",
  "key10": "3LJXWrue8VnMpVVUyo3UtHkS4b4DW1kUFggFknxeupUjA7DHZha4LFQ2zyyAdtJ9ytc4MtWfJPe3GssKZvP1kMw7",
  "key11": "3PD5tJ1SAG9sksWCP6wdytm5Ma7AgeyXzTDDDtupMrNLaHbbgjRkXcJ34SP8caZbYCo5Y6c4oAcGLvr2YVxKPGci",
  "key12": "2bkCcmT7xhA3sJVYtSjhgQGjmjLX4RF1jiEUgsFjPLJLsHEjLAJmTZZrpsUiPEMsKjxW2RS8dVWjTdVhZ9kGVHYq",
  "key13": "3UgMZAohii155W9RxakAZttTo4qkB4hTxYBxu3f9jbCX7mRhsrDycopmpJZ3HzpPq1fMc5G2nzoCT7T2ZxoCM62h",
  "key14": "5BV4PbC3j5M99BkyKsu1p3VJq8x2XBNVCSwhpinAiH4zvkh5cbfE7zezR62ZKAXABHeBooTpMpJVvapZbKjmd1yM",
  "key15": "3jkTCDk5aZpR6L79zd2n5ozBpXcqR5t6mb2ABwV4TCS6HRjUon5vNwgnescwyUp8vDqSmU514CBsC9LNsatxWCd9",
  "key16": "2KWpYwk4mVF6AevhSeJHcVjnyuYuT54X1x12b8VTQfWBnpvLbHx2WiWwq7XQSu7xKQvuESzB5qp2xfgsPHip3pbt",
  "key17": "5mUeJdAvYABTudQ4mRvjpJxBaZVEon4G18PyfdsD1GC3AGq57Wdnb6FLF8HBLXPdP1YHMdMBruKVY7CNbMSMyWyv",
  "key18": "aciZXGbBY1p3C8PErWmyxJJFjrNHMmChtJgP8H3tVgxD6kLzsv3EFM2NcpcJP2RXmTLBvPs4zbmjm9fXqiswrDR",
  "key19": "5Qjsj35sQ2Lq95wqpCEBo2gdSsED5KaboC4G2kdVHL1XMRNgyMiUkKoE73Dfi1aHnvxuH12Kx2ybrgdC6vyAKmYV",
  "key20": "3jCbovmcHgxiVpa9WoVArySCSE2F2WmshpRdmkTSbbtKJbdTD2L8v7tW67niLPtLMxLepmDwBbRA2dr8sjzSqXmd",
  "key21": "63NeDhrFmuqL2hYyYEukSQ6ZkbtXi3ZKM2x6R96hdgaMKStf5dA5bijEM163bjza19mfGMsM73JxaytxpvTZNiVx",
  "key22": "49MUAawxqyx82xoYdtw5PRYJvdDZiov6T5eANHsoGgd2gEedRqCyqypZCZyCFNDWrP6YTubrXDBDEfhSFTPfQXjG",
  "key23": "4HRu7FBgWXbmBRegToaf9aEtTGhptWrvxrx9Pf6wvJFs3MUsL5VYykZUHWSAPFJ51SvrUVzoBmT8gpLLtcYktAVC",
  "key24": "2vrQA1kNrvxMCt1FWrHW1dJZZDcAgAxnPvDmhjfjYuZ3HmzLtibUAkvQa9ABUVEbQ8XVcCsTyNvBhAPUZZ15bJ9c",
  "key25": "4YfcUS1KKmxu1cA1MrDbp8Pd7C4qVLZg9Vr6rnX9PEfnBYCQBtnuCGAzuoDUuszWBuYzhTiKbgPRj1Nar3pKT26V",
  "key26": "a8X2SKEDQuCGYGA8evUjMaGXWCeb2eSpYrGsg6ZBD9kquSM4FUv8wtvz6NXU8M6kYq2u9aM5Q5MKnfYh8MWA7Ns",
  "key27": "4V2w96dJ898TwM5XPzMEue5Z7h4fcUdVAnHxq3vR3fbq7TWJY8mq7P87GiprvaSzQz56Fxt4FwpbP8yU5m8dCGnH",
  "key28": "24ctofYV7rwuQjRQwUwbp4iFmzpFwJ7oL1RrbBWNXfEoS9kEiqBuGPjfHFU2XBf6Ye3bf275wCK1ZVeFEuBPQDa8",
  "key29": "M1KTYRrt7C1y65dWgoVe6s98UDnSLA4WtMnpGPrPmcUNJsvuXihVtGBZLorPkrjawpJbv62ot83F16PSPPVepQX",
  "key30": "5iAsg7YTZADRH6KKu2wNPn3kCfCUJPjfbvtMvV5BqjebA52NfdG8Zz6uRb4rgR1YHeuf3u5cLmLR1bXZZR8wWop3",
  "key31": "qJ5vEyeRkx1K2j8DSCPaEVBPNnizGW5LSLXDL3QbffSRGEvHCs9zCZogpUzpnpxnQxva1JSQdPoSvyzgSkDvHMs",
  "key32": "2TtGH9q4HGFfWz7TR1grvYQajr8TScEqivUmhp1oKV4QC6uxKG1StY2wYty5kj2G8Sv7UHXES1ufq1j59nUJvXbY",
  "key33": "2fUV3SssAnDmyvyuyaXBcQyTrXsQRAVEL6WPqDfjg6BaQ9mxUVnm4i6e9Heb3i4AbM6ugFscHSiQN7AiPw5SLw6K",
  "key34": "2J7xUfCru1DLPKLzzkaBMee5qYNLvUmU9BfAMN8SsuxRRjC92bGDQQyZ98kxPPfUjA5K8KWfRXyoYicmmivmdNhw",
  "key35": "5ZCnqzUL7scZunQiBnikcn5gdD9B8Js8uBu9YNsoRsGaeYHzboDsNiZm77USbX8pcCSUsDhT5MUtfHN32ngA5v4t",
  "key36": "2bWHCckUkLoo7txeFANqPFyeTx7nZEA8c79qysbBQQXBWbWEvZSzARFwsTVJqdYsAtF2d9zLtNZ7CDtTaiYanhwF",
  "key37": "5NhLDQN1UmmkBXZeuKn9z6NbBKsUrQJuCHUtUM4R93FaCWtCaMfQpZVYxnEdwC4znurwd9yRuQyU9hYSuxJjuMa4",
  "key38": "MU77MVktsByhj37ZSAT4BuPnj8hM1MnDLnXkXS9SUHJ8fFm73bjGJNKUYYyz2bZwaUunWVJx8PGnARwLcf3SxK5",
  "key39": "5pSWkTBz7EVMR278rpDR2AqZWjeiGMECWvb4h1gsCh3PfXzDzcCefkjkpCkNWdNH5dmAgwox3HRxRCFptFDMs4rS",
  "key40": "2H5y4gaXgk6fWT9cmPYYvBf8Jp3ucXHi9DTpeq4ACKcLJjeTw7oUuiKeYyEHhfUXoDHYb3udgkhFEEBXSv8ifSmZ",
  "key41": "2kEXkyU76nfVo6B4hbqukPtjQiesbj8nKm4Y4DDXA92t2K58oWqNYNypnxYEbbyENvaxiiNJVdLRWvwHwL7DvwDm",
  "key42": "4JKUPrE1bk6NfcfAEM3cz8MHyqicF1fzewGDxPsr1NTw5YKZGUnTpYwznQrDWgWCqavaKKm3Q8fXazYtmpyXfyFa",
  "key43": "4viZZCS5TKXgHdmH7v7jYcyxW8chFWGs444ALJhnNtM9DDmwcpUsMpdGoqY5hnv9oL9BB1eUH8Py7AGcvheHHCKA",
  "key44": "mDsQRmwqnzVmGMNA7CqG5jJ3pUUmJD2GPvT58DcZyfXS4u5ivNiM4oNtuGVneRVqSpmFGuRAGBcEHzvfZgxhJ2b",
  "key45": "2KDEozfiLNU6AuHLCJGiUvJJiEPCRQCVaKUvQjXMi4zxBbzDdtaCRjuiGjg8ywVfXn7XDmUvsb6QbjB25oyAb5X6"
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
