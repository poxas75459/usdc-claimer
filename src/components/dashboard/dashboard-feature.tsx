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
    "47AetsB7rxpfeDo66yhH8EYZ7xpwekCkXhFAWhoqHbv3PQ55XkMToKGaBatFVH8CfLfMih9gZ78v7XX3ykd3kzWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ztyc5ALjVrbsxhnbfSBrXGJnHSLK63sUtFRQoxFuDikGaq3k8gt3WfnsJPvGrtWEkov7mdtnn6zD4xcbXC4T37q",
  "key1": "3GxfmuJ5YXTTvTPhQxaasZRpy3HkrWjqJ8ksiKahSJRjoXTFe53CPkM5DY475uacxC3sju4kWH2b7nfbrBFkUGWc",
  "key2": "5SucZBhYY6y3mRZbe5AqXkDqU9ghJW2cZL9G6ntNWmw7jqrvVtp9WcbTBvm7JBb8R1irJZ5EJrik6sfUYir84gG4",
  "key3": "6AyELpypNn8P8vTPBT2dtoGPxvyhpLU8rXVfKR2mQrfijhVMgNYFcMa1S2qgzKvcDTv75YUD4u4dREWZiduGPW8",
  "key4": "2WFCao5v1iyMMJLsh9dBvaacmDjP9RiwZsXbEVhsiyaMppRbB6XaoEhHZ58sMNQ3zq5fAac7jwoYfmRX4pgtSqqR",
  "key5": "5LoHp3FkQtTv4bdhNT3d3hSBMGZdpFFSG3TKv1qsiMsKg3tuQD26LUb335ERVuqzvm9dkTbCST1hgkTtay8sDuLi",
  "key6": "3KDSguKAATL4eSDrsvdwveGTJgi7Sq4fUbRHTcwY1V96KVbKZStdTzvqht79tePbomEBYkv1G6rcW4b575oPgQfg",
  "key7": "5FkP3MzAX79rrPFwKgfyeUqerSP7xPRwhwhAds1zGLRc4mC8K1bQyU2kL8YF1sQHzpgx33rYWXzeFHxokshfE1cL",
  "key8": "2gXvWjjAZGyGoHtqvQ1H31SQLHCCAKa9nvJG6FTSz35kJLS8Po63nASRo57jwSsX4wfM4Gef2Ba2ZSjvmvh6SZsZ",
  "key9": "3ogoFk6fVTEbxLxFaEfVhHuPkxZqvGetevHANKDbAgDaFVLj2V9a9xaQCqoWK6n9g1Wv4ChPZnQ5bMM88VvhBkbG",
  "key10": "3MokMibUs81LQ6b7oqbzU7n5JS6nkEgMJzXoA1i3xcy4vsiVAGRG9iB4eFLKkJcXRWEWGEwqyttvzTiR52uehfwb",
  "key11": "euiJHuQNGwxm6uueinFAWgSD3eU1URGtqHEjnh3Gqk4zRbMNmcRFSQcc3HKkQauR4oinnJrdXLMM6ghQnX4wd1x",
  "key12": "41UzaM77w1f6SNLEtD4KGXXQxcm3uWN6vdShzPmJJ7t1wisc9fwU1YcAUMHCHxwKPL42MUNCywed2F4ToZoFxFQ",
  "key13": "AmJvpJKnfeVaQLg9KrpimCBhsh7tTr2zNLeJt5kV5RiuXMnCucPCpXskydFvs8UstvSHfb1xYjwR3Guz6smXNb4",
  "key14": "3n3Xj6z2qKXsHy4e1qzfd2L51F16yyw8TTTQ9Bf7BwQecFigd46FaVndBnJTMwR8WND4RBCjsD9SvU2YVLwPjpwH",
  "key15": "2RdThTKn1xg7Hou8WxHkFRKpd6Vbn3SXjAryrpm8RmJktoZPahB3itNuANU6GEBCzYASqVjAdWTuxDph3tSDw85a",
  "key16": "5K3YAyHLt5MEfBy6fx19t8fWeYf6x6auMiVydUYfSFf3Gfi17EQ5fYS4wkNWFY7catN2tctVrMAgVLrbNyV4bsuf",
  "key17": "2kPjfRAzh5QeTSBr2AnuGAYojrraDqgZQswpc2MDWsWY5ybjoXmNFuqRFKDJGLsghP9fhaNXH7AUTVhRiZYq89Zu",
  "key18": "2hdGFExXE4okUt3EE96D7twsUg8yk3hugzwiTf2NuY3jsxgynJLm3RxLKprYbFz4mSkVGPTdUimfMECCa91BCtqr",
  "key19": "3wb7LXX6SrxTehbtnyxjsCvtcrwBNFbqEUjdsXVooir2A7u3da6yQ7hxRDQWNRP6qHkxYCNxVqjskv7jnRuW2mxk",
  "key20": "3SaaXXhJJcEtFanATzmXWH2thtETipz3cjCEgYAiDZNU4xLJk4cKLUBYx7fBaRf2bRV3QKgAipj6Qk6Azme1EriP",
  "key21": "2TSPDewpizMvQ8BG3udYtQm8CH15QRCeV1Qv87FUEbfP7Ms782BoJqZeokMxZkvnNNFRQjhFz3CAbuGP3KVk72PM",
  "key22": "2FZkmEx52hAshRYytH7E7gRRwzmx1VL5oLxp21qKxaLSHBwZLcMFcf9Bs2JYhDeX8EKqgTPhNRmt1m6YREpwFh1V",
  "key23": "4d1bRSYxST8B3XoiW6mU5q2tUaht3nCHSGw5EstbXJSQDqnYrF9y2TBt9uFHGFEQN3S5QF6dKoGjfeunHAJNRMEM",
  "key24": "5XXp3E837X69yeX1c4nK5iR8t31frQnRwQKmfEUpf1YhbXJQmbCcutWE9PnY49dL3JpXjg785uZdP6z7hdgvsXJX",
  "key25": "2YfhDDVrxLaCZBaNa6XWc9LEv2KEfJcgNE4Kt8VBLm3GhFZ9vwCq3GU5EYCdx8RxQycFrALsKEfoxQMFKXPxrVCo",
  "key26": "3m8ATVNUwfKnvvdbtLYs4cyeY6oFGiWz9KSqcoJhyGccKy6cGUaNBueyNb6Sugo3YrwNrNg6cfrLUkKTuadjF1jw",
  "key27": "5jbRLmTKHmjYN3EJYhzMc71u4rdx4xVTgUiWxwBn6144G55ZehBdBwkCBeqojEgXq6p2k6ChMSwDBPqRZLrNpAC7",
  "key28": "48mdsvh3sakoEd1REBCzq7o6k26ChzQs5W1zie8tNcUFzs1qX8HoQxxi6bs1SonGhXB6Nz3AeNkGeVjUjWkVuinF",
  "key29": "43ieB7PrMfYECLyh27GxH4hiGukdQt2p8SBjLdct6fQV1F7cGNoG1SLgvexneK8qswkN642B2oKNt2kB9BRBTfMa",
  "key30": "5WVxs8fjexFDWGbBpf9kufJyRWm2mVDPKPiEpPzawvzYid8R48ze3Tr4nKNBWmrEdbNQpej3PJjKXgdpLNhsf4xB",
  "key31": "62d8LTKGsFeZTJaeqedY9CLPegioF3LcYmkv73mQpVAPA3yncgq6FgirTnSdsPNgQiGo7mURRK8P4K1BTy545Pat",
  "key32": "3ahRX1Ly36J4amKyYYH992aRhx89S1tLMKp8h5AewS247pzvFx6eAjGdcjgsY6xqC9S6QvobCpMyuprrpkGvXwpK",
  "key33": "4YgJFyuuezSKKamz4dL2FdD9Rn1MEjeyBcbu4uaGzfMDqNMqu5HUAu4KV111awkhZMH1cAyWAD8ouP8XuZSe9RcA",
  "key34": "26xFjTJMQJuZtpXpQs67e3iKo4MPACJUbAEyyJZSsq4AXJxjDmAZDkiGpZpahpxvvTzqoryH7zm6R3Z6pTs4S1T6",
  "key35": "3JEuLo4YHmgw7JrES9F7BJV3HEyqK5pjJNDGYVrJS5APEJdwF8UrNZ8FoDq5DPvpGHLrr8GmhLeS2d8Dm935Kjvy",
  "key36": "374R2rPEMBNRWjFFGLYTDYu34tDuZggS6sat1Bx6UHt3wS3ViEyGKyiwyUqR5fuiKZx8XoMXwTEPsB1MDA9Mhqkn",
  "key37": "39ECUJAoEgVAxmGitq1iq9NTkxmssNf3dgLE3XcNWyAK9jXEGgTm7Zf9ogrfoqNhczr1RGNPghewtppKw9nSQ8D3",
  "key38": "5mDZsw8KJRaizMVZcVusq672Y9E8BPE3BuQpNqLD3Bmf8jykDdgoWSR4832W7bY7nXLq1XQYrR1AYKuuWv2RKGKG",
  "key39": "Wnqe5Jn2TLBR9T947ioAWPaLwunxn4rn1vonfS8ybUEuwntTSNGY7dmCZwud4SXo3z24AC1FEzkVptfxWg8CBig"
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
