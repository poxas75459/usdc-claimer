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
    "X2owwLyUKdQhaUYtGBBgyyN6PPxG5pH2HAndXaKNRsGxrbmwWNfYpG5EK4o1j733iR2RYnGZoCtFutVVSky77bE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yHJverhEdGYo5iYLgWnWeeZHNkn3bmLR285zzSf52YdRyB62zCM6P5SkKJyRiDLrgwNGbiZgMMpNa8HAtKQ2fyb",
  "key1": "5R7rG36mSWDsdqbh6zKDrxdtQyxFWLp4qFQ6LovGKmk6qruw5TL2bRP84kfP4vvWLRBkmi4imuY7r3je3P5uuB1C",
  "key2": "ZcZb5jCnpgsEcp2JFndhmFEraPN8tnSQMG4RavgcjbfL92sQARP2Eioo3nYyG8TNfLcrmV48DazK3r6oVptajRd",
  "key3": "3NcYh4aQkb85eE6tE993MapR5PrUhb2tauQ7HgJjBiyyXaXjynA2giq8j9siEAAuTkwUSybfGD4qbNCAPSvV2fCP",
  "key4": "Ekvtxhe3EyZUTCFgws6Doh53me4cTCJw1p4A4QmYLqDQ86iKDc3zheFguzGRgfzV6bLDnRQEuixoPfeqsrADVi2",
  "key5": "2K6wk51QzfVLsD8Vu4kCGmKNjhdGBMTUX7vvyRDiRD7BHfDyw1KzYj9xyuzjRZWu8hWSNYgQBSznmWgCR5emm4WK",
  "key6": "34ywoZJuSBBL3XVPCtW7cfb52PyLNgKos7hMaba16hoXUmyPjbeWMvLVDNwsQLUVsgTtcP6wqvqFhwiwgp1UA2ae",
  "key7": "3Y7PaMTBAbQ5xmELh8KTVPaZbLN5znUPbARarimcoWqG6J4d4dey7cUDMH7kfNwzWBYYAjZUmbCueNAaCEmFB6pj",
  "key8": "4L7QJpKp25FgZUR5Gt2HaZEKHUzxmqi7G33d4iioM2KY3Ygfm2QheY4fxW7qkPikyC8VjFQW2v25i2osWm8M1oZz",
  "key9": "2UmPzfabovzmPyY7UAjYwCyTWCBgu3n1FyjUt4CxvwdCi1F3LmrZ5ZzLWEcsG6QUuLP4HWxHcBFUUMu1DxbTAHb",
  "key10": "2FPdrkEAAQ6HVXzy3bVU2Qz6VmVy5brLZVMhRejpym9CwPtnpXNLmrpdH4n9LduxuqTAE6uesoGKF3aBAAv7Wow9",
  "key11": "5ziLHWZjx79ZFoaED6GmVAgRc4WGkdc1SG6uwAEqBcL4yctCkCRjFyRSxFxVwKav6WB7N6GK2edzJSg8MA1dpAyX",
  "key12": "4U3GLnmVBNHBzFS4dwBC3CPMT1yvSPstXTxrdU8Q1gmXF4az85U287gc7EYzDESpHYHKX8MBcBsL9KKYkAifysU2",
  "key13": "2eh5fCmaJfaXDZpJiwysFtQiGaq7pnPVsYvUq3yy1dhFg82YbcqF82nXecGpcf7zs3cUQcprETTiwobkwFYariNJ",
  "key14": "5EM35Va9vK8brwgGsPWhnDBLdht3ZrSHKdUdFTRe4NCxZsCZdr5WcriZkR4jQTR7e5VUfg4NWuvfvtdXwWXRsPsq",
  "key15": "SRyivaSDMMyGSpDkaK9pgcXJqvdXvNkEqNGAVVKYBwVPbHY3qrqo4LMrYY7ob1mVSwGrLZCJSbCBXQEfX9thVuH",
  "key16": "kx5EKy6Es399odPkMDATVqrWjeQvz32JmA3GudCFoxA8sQMWdE9FPi1ks3XqTvKvAboAxJnxGFBPTjQci7sZX2i",
  "key17": "ZXoCfm7JCK1c8ZmDLijZf3c21CnHtSzsF5JAeetzvu54LAJ5W5qPpcKNt8T1hqWnYLp2feXfwCkEdrdGF6SGWTW",
  "key18": "3akcz2fhkwUUXbkY5ufFwFNyoV7eyTZJvv9YNXAd195FKKvVHpVdfqkkgJz2fZUbeXR57hGiopQ2wxpdprv4ZCyv",
  "key19": "4KAcqoCpq9x3qZfSw93yuzhKqKwoFVuk6SqamjtkLoxj1qdbau8XwAZLp2UCGKBLivsrZQzgUpCBF4qH8Hj6ADkP",
  "key20": "4qJwJt4JLPRo5m3XrxGUNccVZCNEJK6tVDWcaHWMBTRr3PizbUu2Xxo9nbFirLiZBUgLmRtKxHztm6qeDLVprURN",
  "key21": "5ipn299TMJ1wSp2ggXgS4FQD1MFrF4fZ6GcSGgmd5Wy5mUUCupzUjpwVd2FPGFziWRNAj6AQvZ7SDfc7YLkj6WCw",
  "key22": "3CQEgBGMQWAKYzRWLyRSMbY9b5oY8jkb5Zoa6EbaFAjPD7pZJwGW9uRUMaZ3MkALHR6w337FDtRPEQAk6bg6tGSA",
  "key23": "5tvsR3v6DhzW4SnVnYjiNcTEaW3yg7a5pyrAwoEZi7BbTBiNCG6E8xCiWwSX6SCDUdPBqJQiyC1ppxmRayEPSoYg",
  "key24": "5kNvkbvMesmD4gAbqjJCX8Cx2tvCFvfbq57fGuanRo1HwbcvaThLXQ65XSX5muKtkNcwGX5WzTAWLpwm4STT1VFY",
  "key25": "5fpRDV9UiNon8REYWVzZCpMRkPZi2xd6WCgegaR8F1fqweuNBQHeJvz54TpAJm5BRK9gDVB826j7V7CazpixpXvR"
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
