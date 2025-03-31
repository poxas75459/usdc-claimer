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
    "po94Uz4YNHPVxqbqFs19F4nnbiXyGw1dpTqFdzMgwb8QWLpC7JAanAK5ja3xeaRHMzC9rqD4zzCM1QTpUSwshVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpjMRfuT56YdFfvBbE4RC4BcwVitTFwndopKzewciBXH7CRfFRs7oAbjZkPHaMTE8x78TUvc2RkVjLusaNt8BLB",
  "key1": "48ZRzuKQf7rq8pbRzTCP7GAiamc6BTeDcU8uX1s2yC6XqkkPmndSJa7nr8ozjuDyRnQy73MhnZkeUENJLPuWfXrk",
  "key2": "2VqQUJPBAVNeyEy9fZmzSNQVGmHKup78zuhfqPEija9sKGyxLQHAs7jNhRXkezV5z776hNG1oYZ6KFdEGNHEGoNb",
  "key3": "58QGTboRDjpBso1kuD7TB8mVLRa6vsMjxpHPppoqhrgqFCgFifE4iWpZsRpJKxfcVm95gQHwQkLLK6yzoXGaM9X2",
  "key4": "qBSBVy39zBY2TswyJnLzgPH6JGvGGXkNz2Kig178uZp5BVxQRkdp3URccLdFMwsMcmeyfFiAs8gd1TWsVxZPTAr",
  "key5": "33Zgit8zNn6uXWr1SSJi9x6zDi1nd9BBBF4PMqn1z4FPy1m8vG557xTZoqTA81gk92S6EiyKripzbEA6i15335Yo",
  "key6": "28Nn7A3cCW1SFJPJJnxSjWDosRNkszvDwFzGRWDGdSPRFoY5Jfg7q4m4wtrpVBx7FPZH6ovFJY5PaWx2Sx3GVpii",
  "key7": "ZcEuqqeGQzn3pB9NPfwFWF9iJcaUF3T4fJUM4Z1dbubQNzkRvUdkMva9NopspFoFXQvLc1vKJ35UFbmT1ppWoa5",
  "key8": "HNTexk1AboU3uJ5t5sgqWZdKFDhn2s33EkWZGXhKriwvHrq3VPdhb64GPGP3KcLuD7NW2HXUW1PTB6APFgCqEQo",
  "key9": "4wR6GQUUi4eRAVgFoQikpHJpSvkyM8zQ4HyykgieNVwG2NHoiXMXVsMkqS6zV71WKKTm4b1EbUZAe6XFPnoqZHRE",
  "key10": "5iJhNpwrhsE2xXL3Rq9vPDxZJpNZ8aPzzPmNpZhUtACuFGMekNLXvSFTbgM6a9PmYV39J65THLY8QvtkQ71nG5nQ",
  "key11": "Vpb1uXJLX1mmtWWo3TBGaAdgLcgDujz9G6z5Z2vy59Bxx6Pw3V6A3Vgd7q7yk8uFegpfkjScYTrUqszeM86AE65",
  "key12": "4Eqy7pqeFYRMt9RCphsTfBgajbX3Lqyhu7qwtEBnzT2tbxGvWMgiUDeRfQcUonkenkDP4FQB9NkTreLuEcrrAQN4",
  "key13": "4mXPrkwxSouPtyrDns8Ez7MD6htEQXn4C1i2UCaWqqMdhQUn25vDf3rMQ6zHFGZzUpXg8GW9HFrNrESTgPVEho2T",
  "key14": "31JDVSKHAxUe9KrtNvXgLDeRSmcfSSpvDzeQ9nRadoXCWvU4HhBzy7u4mQaavgYoM1dzFfLWXgcnwmz9KMaBiu31",
  "key15": "5PDCDjMNX7ZFTDfYVHkdoHX1vEGHb3mQWwKuP3SBC9cU671cJHbwgE5jphoFfVnp5hj6H4oHdraaapN619kC37NA",
  "key16": "qHJWcJXzqA6J61aaKvEn7qMUVYCk9GZTHaf6Ti3mGQrcPRfBagt7LFJtKCU3eQCwfjTkdWZJkKHgvSsXsbmUfTo",
  "key17": "5dVm2a36jXp4fZb466WZxY2HBd3yTiQa1v7nVYdd6Re2DhxvX1d8VsMhoL3cNX2adrFoCKJsUAghGpLGiLACFHGr",
  "key18": "28BcyfL5tgvnnZVvDHTGunyfT3Eoeh2iRKcGCrCtihjaztETeKvBAZ9b46RCtzugFd88RkAwefJbhsjPyQufBfLg",
  "key19": "33zTD88juN5vaWfuVaPZEWDJft9iCwPtcUz8zW9HpvwZDsygn1GNu5kF9T5RgUcCfYAvDcdCZWsE49wu3WoiR8SX",
  "key20": "abNwM6P7P9iG4E557bK2DWLunCdeg5Le6s1C1GhwZJtrvWgscwRcQBGkaytUaG2QWFawhagZ5Knzp6xLYqii6hU",
  "key21": "4wnReGTnz4csiv3ZvUivCQo7sL82w7U2nwEFnkjNUPbkaGJctSN71k2iNR9Bu6EVCdpHNp2FB3qCwqX1gitJkb5w",
  "key22": "27qCaPuZz55NykH3vF54swHRS9eBCMAXD9nHQu3zyaR88B3YZ4tEDHGBAxh7pb3RK82bzAC5fH7U6sZpgJsDSWZi",
  "key23": "4AdRr6WJnZsoNG3kBNeUQQQvNJGDFevPt7Pzmv6qtVhZDmvvbrxV6J5f5GC6BrEroEcWVLzdL5i3VF2wV6xxz7ag",
  "key24": "2jxkAQXf1avAm9FHoN9QEUwfT3M6dz2wcXwDQRoFRovy1BdRGR7EZmW5MEPLHUM6eqUMDSinGKhjDwfNYokoS9qj",
  "key25": "2mhG37qbTGfx7u6siFbLmeWromwuWKmm7dfALMUPL5FY7pT2NdvNJ2EtNED5qPBdtQDzkMnZZZUnF9iX7ULpAkfx",
  "key26": "5F3kHgC4echezyoEGE4qCuRYaiVWLAcJ5XEo5PiWVCVkhxx6itw3AnpAM9f835KHeGYrfJ1sJL9VivsZeeLQHDCi",
  "key27": "2Z2uhV3ngtFiEG1R9zyWTj4T1UExJkt9eApkY6PFLx4CUzeUY3wZwk2hJiEzc6ETjdTCJa6m31uvhhieSomuHJUg"
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
