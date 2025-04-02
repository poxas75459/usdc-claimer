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
    "SywRaquer8n4qUHPShU4eCUUXh1dAb86W4g3bp27t5gNi9HhKUu92jcaHsaEFjU2XBeFdjKR9MFKx2LuPFoQ76s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49e4zN6kPgyfw2adUjyBMSwM7DzczXmYEjjQUAREB4ARCCTmrR7whaFe7JxGPrXVErW9AyJWVhyGs9QvRcWpSFGQ",
  "key1": "3nJGpfVLvLNLXXqda1TF4YaL5C2eVW2rG28EBQfceaJxY8B2w3r8dufoc2vVDnSbqJf43k7AraadijKBww2K1Qqn",
  "key2": "5SYAEwBkFbYWcSMJ7ZpXMBXNQUc9Y3Cwd4pyra5sFRuDkDGgLCvHLEcPgb9UCCFbjXDBTWK8EjCu8JiVqeD43je5",
  "key3": "5sA9NfghKkbwSrPYRecBzxeaychtZuyvqHvrscyzMCkzQXXSqDahUN8yHkHSYjoCxSUCNUASDDHMym2wn55AGq5g",
  "key4": "36ccCHtzpGvVvGTcSxrEDjrNKBzZDB3Z4g3CYkKJqoSpi1J1FcmxJGCF8yQrnJT19VDNeytJn1cYDbUaA2Q4bHPM",
  "key5": "6dCNuzHzsqJWXP8dp7qdhrarh9F5G9XqZXKDeLX9kp8rNLU8N6fF6ftLEL3NFXah3joezmdZTee9WcACe5BLQ1n",
  "key6": "2m5YkHrNSwS1yDNGVc6dMT87ir2Dd6V6usc4b7p9VMxyGH2PCZW5e38dhbmJzARmSTfqKjKdyAiuj1QdswV3DHwH",
  "key7": "2tLF1ZW8bfDZrD92c8eKZztBmnAUwvSrcWxJbow18V1nhRqQ5uJZ7PcTAzAE9iahDxnFitBjwwwv9HtF2AQWjGHg",
  "key8": "5gwAnMJCbPyNZDR6UsQ5WHbG6p3kUinLoVkW394ojDvVdHPzBbSh9ToDATf9KQ4rNCxmZNn62sxNQ74FpzwRBq3e",
  "key9": "5Ro6zwaYFQFiD8Zn3Qk3uVcoSDRopEovoLJFDcLGz2JCVx9bR12p2a3FuBZHiwFHWJSk7Dd7USAo6SfRogPLz6vX",
  "key10": "5F1EoCnrUfiErSyzD6AZYQMQ1BbaHai24VC7txKzzErQnZr5AQ7tf8UMzvFVBGUjmYyeUHBZJ6SHUaAWDgLoT9LV",
  "key11": "2xnuf89mi26Pd72ygfQbPnMUuus9c6PhaBL8xBtSDYc7ZWdKakt254Cr9nWtdzMTM9rHbX9wLPf6XLb3GppYaRgG",
  "key12": "35DmN7VRowxJg5bun81BWCPHy5zdbmhg1Bns7TGs31zcGzgFzsDQpK7uNrVMdsDp7cqRtEkFrt94W8yoNdCTekjH",
  "key13": "2TWvGBCMHYWjU6ZR8zfDWP2proz1SgLHHVK4ryNR3xT6ShnQFMBp6GaAFeD42QpLJ1kG3C83NVNbeMSaJ5euXBEy",
  "key14": "65HquccrMLw1Vtx1dpj9FkeAGM6PPe1dJNyQBFU1cSwLMqQYeJbp1Ph6rqt9mNpNkbMkB6vxkzy6GXAnczRZKcAi",
  "key15": "413TnCL5nJkr1ow7hkDYE1rtPthhrxrFPf33aJzX7VWZnkedUBvhtgztsCwYDf3STaduvSLPnhuvFCxR3KeFkL9j",
  "key16": "4T55fNmHXQXXbEDfZ8AXeYcCe6TmLRFAk62HcYHd5RN37rnTWDiCGXDeh95P1e7QDBVA7F3QGtrFg7cPKzGL9AWg",
  "key17": "3eW84yvPZP6BDX3jH27rfTYkJYzhJRYK9zjo96zv4RvNUPKxYJH1WC62Z4LNpQ46ZuWk9Cw5r38r4LPbzuJv9moK",
  "key18": "5wbQp4pDsebviZ3D6QjwRnKeY2L7iBfTJpZyfoNmqbLLrBqJMrz1qbkbjs33yUtNZuaCiCtL89atRrEsFxFFR9oA",
  "key19": "3MdPcX6cGC78bCQnc3ucsaXpN56jM84JVLPWtoefgz5osefHhk7c8nDo784duEpkM2cPB7DkoNZ3snLyn7VfBHaM",
  "key20": "3SnYVpY9nDGNSc2449xkqE9xGJPu3Vu8XYzejoAEdguAQieCqGpbBsxkSunZYbXSSepMnhBJKLohst1bENrD7akM",
  "key21": "qR4HvrW5NWQ6xrVMwpuWR2jZgwWq6qBrSnoGtLS7SeYYtjkarcdQ58AJH23twp6y1yobMvMpMHKtrZd7HZC4PhF",
  "key22": "29RLqjDrsWzLBm6LSyHrVdjucXsUA8TawHHMsVRed1Lt6jUbVN4Ns2GNS4YXKGXRkpuzrDXCYP7jtoVqmPpkQJXN",
  "key23": "4ydKyMMqo4FP6Nhf6p9dgS4jmYy5NWNBcQNC15kLEuyzwpwunhViGkrLkUNjQTKtUga8zaQ44WQooDbKqwZzZz8K",
  "key24": "5CcPPaaip9ustLB56cHRNxMWjfWQ4VSdnamLvmGg8aaYZ6nHLXEfJqEaFdcxMpChijZWB8LPcMYZu5WZ1R9gfxPj",
  "key25": "2pprd4wck8nwSTY3w93qjZZgCHVNnrxoaLJhR9BddLXtqahYYtXWxrn2Sj8Lz7EfBeVQSUjbbSdmASuF95fGYkLS",
  "key26": "4VHU8hKoCD6AMYxNv8RkEU3Vbxb6xJ9jWvtMd3nTaebsvCTo53Tz3irsAnrKkoYkeCsNXSdL62wsw4CgLK6UsKvf",
  "key27": "635Vkfw3npn1aKYN3cP2Uwk6FTnd7gXU9ZWjkEJWPPbZi5WjckidUkdSEw3bGfyzExbXUmAmmiXHgi5Zxn1xXMmv",
  "key28": "2ZYVaGzK7QcxvP8CepWE5nHDNdrPGv3xaFUtkSps3hLBBrZfDXh8UTQp5u7CxyC3SqkwGXoqSdTs5ogNwR9k5sdF",
  "key29": "5Xg6dKFMkPrHzondHhSgqXYFQvHEagYiv2TyDUjHFyctu5kRTpw7eEA99D3jsJmsS8YzVYLrt5pWAyWMp78YcPWk"
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
