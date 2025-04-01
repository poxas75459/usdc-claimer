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
    "44Y7S4V1xpC38Z9nkQc4TogB6ttPBARZAUsBrrW1uhL1aZBDXaW32BCipRWGhtpxjoTywM4qgRTVjzJRR83ymCzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tq5CjXy6HSvFAVpR5UkBXjzoF4qr9AjVDXqpiqgCadJGXazWDowiYZhRttJ3ycEoKWCrGaPyJ27rUtYCgDTrj6E",
  "key1": "g7v61epoLRkyq8NZTMEiGkaYJ1zqPBWoDESfqo9h28QyxipNZiTE96Xd6FKSbmU6Vpezs2nhzYnsvTRHRpWRoy6",
  "key2": "4GZ6dF4bGarMNrAoeFoWyCd3hpJb53fpqE58tLbkmJtPN2uVmbt9Ekh9Dpxnvd2vV2LszbTjzmbXEqGWWCAJqeGu",
  "key3": "41RZvaFNC7e4CwfVixfUT8vGApuBHTTeFbaiGmHzMFANX9ckX62BPaBCXSspzsnYP9QYomUkv2MDy5UbaXeURiQM",
  "key4": "4K7SAMqmhAGsuSMZUY3uQgxD8M7p8p6Xj5QAg4pTaF5rT3RLc2zRRXz7q8EjE5yLViuhYTLgxGxrVJkEuj2EuQ9h",
  "key5": "3AQBHHMJvFjvH6QiEvTJAhbykBq5F939HRW86iTGpW8iwhJ4cukBptMGzLQwAxvQGH2SFyrfdY9CM471N8L7GLFv",
  "key6": "4npBabt3xLeTHxTsoLYHFfnuvqvmZUX7oVg63ZGbTZZ4RVwBkhTxSGqjkYx5jUcYMTdUaHU2jXQn1W6bwj2XdyVw",
  "key7": "33wQyw9EnGNmETXpvBQHSbCNErphY99NRuim5uuGphPLHukUjthQbd7dho3Gvxr1Ci7wkhAUsFFUwG16Rbf2hNju",
  "key8": "35udkucMNMdHRn73yENvsXftB5KTgqq8mHeYg4qyrt6PA6hUCxMJcNbMm2G6o2s6WYCpYCvgLijSR2wXoiBq2yTx",
  "key9": "33jRaSSgXXWuPevuxot6reroVqitfqvfWNfqBqFbTfpEWD1BzkUUVNsvGHzd3pg4TxeXHWmje411PF3DNbjB4r4R",
  "key10": "2wDUjuQgcWAxKvAPVmJRMehbw7cSX92uRRz7gM5gGwSz7AzCg8aWxGKy2PastP4epRNcz5gFss2qwrBqVPnTp9Jg",
  "key11": "54B9mFmz5mJAtf2qEBXvrsypEjBTuMan3AmDjiEJcTYmTREopEKBUpES6i74Hztia7VSrUD5Yn1SfFJsxuorxPDv",
  "key12": "56qj6Ynoxc2byVUUNo11QKfwjkXDU49GpfVKFt5AQpwxtL7fYrBimJQNDaKryCber9rXrMTBFYtNg2zLskV3LED2",
  "key13": "3pVAbrX4eqauA6nMSW9YrhQsprQHemnnwh5i3nTVjbZ1wGL364v9W3jeL5r846LY7tbYzzqY56EjBPdjAMa93q3E",
  "key14": "4rkZk2SJeWS3A8g77hfF7KjQiutZPo91EspuVrBPHSsahqtwazPo7jL1rdi9noYfyRkPBX24NsJtyvXJBkbcRZA4",
  "key15": "5Sk8rjkFbjsj99Y3xFoQ3pgtHZMfM4yMv649gVGPhqKaZFoodubCENmPjsKcbnGKQ98Qr1sAfg4jeGZbRRmJZEqK",
  "key16": "4tJySDJNcVnHMzB9Swrv2UZZWY7od52arnjPx3d3VLVyeX6CCxdNq5yrLQ1yjBqKL49BEKgTZALjie8xyLBh4ToN",
  "key17": "5GsdJqMw8pQ7aXG9h292u4NZ3WoGnXYYGV1PoLVQSfNqrfq1WJ66xtym8gfwgSUQATXBsXXHKfiH2zBPx7tPDVt",
  "key18": "4WUWqxNHoydozpTTySdB3xqJcuxzq5JiuFDehYSPg69qsVRjzghBJS7GmX2t4wNqXokzdSRMj3jH4izkM5CmGxQr",
  "key19": "28K4Gffvb711Ndbtfmjf5yMUyNT5dugWWNgwUvNN9bJM1HbGEFrRv9bhDZxoyiGGQbFUALSQR7FQbd5tUyNpV5ei",
  "key20": "5sn5NSuvD9FmNcJsBBxopdKex2RSH9xPuEPMPqQQ1d29kZygyecR8zt7NjYC16fwZ2MS9aXpRg4CKxLJpeZoSaww",
  "key21": "2R8u7enJ3eeUu3jeBTms6uLS8ALcD2j4SvrMVpPuCEnffDbTx1WxPYij5GYrwGJbmfmRvQPNpAq3Fsmg7Fmh9ZDH",
  "key22": "4xTfvXvHhBWdT9PyT6bbZRZ8NFWDEQqMFf84K4FVNvdVNqsd2dvY2TASFCNbuE3qyC8Voe7y1MMQaNmQucXusSTB",
  "key23": "4Wqjivm5wgo91Urh6Qgb6r8WkaqF3cNyCZe2v73bwXRBj9A7WTkcXamUXmemNj2HBS6j4Jynryv46RYjqXBYyCUB",
  "key24": "5QKH8Gbn9Si329UMjhMidUXQ9eQfnmnUgGjxfDaqTJgcjygjcM4kkgMHhvuvu4pv7eUr9YUVB5T3yM3vo9kXvEnB",
  "key25": "XyhHb9egzS3kwz5ESUXRC4Nyz84dtEJhV7m8KExXVjukKBFwGXByHGHgiWrSVy4V6abcLrNyzgZkjuLH9y6iLqA",
  "key26": "2R9E7udvMoMNsf57EgDWi9BCzC4unuYWaMkAqxj4CaXHfCz2UzhfrtwvwoTjCP3Q5mCySiDyVtSkAGibChEq1WY5",
  "key27": "45hM3nLnwcdo2rYePuEhmEerFjj4ruUFSxVST3CsH1BSTigkqgyezmpfz6nVZA4tYZ3gtsgpevrnLkKK3Xa5XY4X",
  "key28": "2jkDQL1RGTCFTkkid5bhTr1ReJNqzwiK6jmLonAanjq8Q753GT1yx1TR8yhLCHioWNspXz36c3QWTr8faSSpx2XL"
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
