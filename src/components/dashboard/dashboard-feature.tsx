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
    "2ZY3sn3obV5V7WXAkHrLALfeisHARkA6qdGM3iTGHLYtruLpGB6V54o9RGBcB9zyXRtPSDZ3oK2RPzWTZXjNvwpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46znxqB57uWsXrjtuEbz91fraZGvH7hamJaBuDwF9jRw9Y1a5dkFhu79YK1Yz1HsweeSwprFu8ueamfDqdoZwzLw",
  "key1": "4rPvd5ASqAACmdZpQL3ybfzbd8wBEoicxeU9acwHVFN3Z5sB9So5eAbDt4N2MnuerY3n3zPuRAYWW1dsvpazvNaq",
  "key2": "5aJ9gDAkWkceLcptBSYr3URrMS9d3rMUuMT5FS56BAMaQdLfAUH2xaP7dziRAb3kxe19PAfdv4qgDzXbMpmvH4kF",
  "key3": "2vY4G2EaFi3nRGCrwvnT7r9GuYfq4EH3UB9ecn1tsauY6PLvEijN4T1eH74Szs1wenkK9sDwfNBQ35Xy6nJz7qgP",
  "key4": "5xbxexjtfC2jrM6L8mAxDEDz63mdkeRDUk1ehi1AZNrfSviirZg9u8AdXNznMg4dSr6XNa5kAEdvFyPbKfquVGMc",
  "key5": "4rLAK1Rgia6syYu5zoJM8VUJDE3XkUZYLzQxfGua6GGpPizmgMYC2NjpmctLoo7GL3QmvaJwd5n4Eqf1sPfsuDnj",
  "key6": "w4N8FeYGy2vdetxTd8cunWtNi4ZtqcQPcPqAEL7Vnce81RveQLb4sLWjtsHpN1AfhCNSFPYGQrA1LQNGMaPDHrK",
  "key7": "2DvHWGUTTqbnHmdj8USp4hTr7TdmD9xAsAU6NRNpQjaQ7VwN7XB7UFbuhXi9brri3Jjb4RKqJqyRBG7XvPX6aDR3",
  "key8": "2vbPfFVFcsRuhXCChAJEFgXMg4G3vNx6HwLdMd1EzEQ7pgASJLga3HkLBJ7WuzEDvuUeW1hJH8QopEaWQip3HZ2o",
  "key9": "4Y4sLd8MAQ2aYvtkt6rZ5RCPpG6k7yFGoDVmhBgzMgLmsPFh6hQ45xpWmwYtdRnD93vDLDkFechi2SWg8nkdxSDV",
  "key10": "4nMShJioUDSxbrT6mhbrL5XTXoUDmgXtcE73H5nYVhsR1zvSxf7XpkFQhX86xEaMyEZsdtRPZ9zdjfkMU6dGg8SV",
  "key11": "2dfarBjnBMJuFYVvbcWLJoKhiKf4gk6g7ZqASxKV3WN24Du9uZ4wtp7cHxYzL2hoF7zAPpRVqUpgrMWEqUUXhDHB",
  "key12": "5wLmMpBv2MryPVoQLqbk9EvKWxeuX9xvVsDEVPz1aqTMXGPjnCdJ9VnggsHLUbShtvnuD9wMmBxp3LM4Hdcyx4Zt",
  "key13": "xoQP5ucR265VcrLznFWNx8f7RhzW1vvpfLrTLqpfca4pxiwbBtSUzfDxjDpezXde6GweQQbhELJYWofqps6dh7M",
  "key14": "2PU4YxKJYYF3gV9JocKFVesNo5VQWMpuC2oS9NR1a5A6Da6Pech5rX2JXipZJuQVDqEFa13efEDbFe6hzVaiNceo",
  "key15": "qieXapTvqiBB1inNDGqtuEAnU6YbQWiFvVhLSwMTUPQJMXfHjYzMVhGwHgCWGzsV1qLhBw1du7yYa5Lu4HFaeQK",
  "key16": "4zSxGDXHefY7A6AUgqQXHXB6s1pEKowAH1hcDmgNGcQ8jVBzybiJ2JyDkkGQhNPPyf3jPk3SsYFH6RnoTYYAWq5w",
  "key17": "5YxvXF5krqDPneqbWCdByKfDjeXt7rySRYhWHkYL7Fp4H4Sbcv3auDk2ckqq9Uj5pmjhVS4zhNbhMTeCTd13do4w",
  "key18": "2NDytyF3T3ZUHYFgnGqakp3nY6Ls56s1NVupLhi6jzGrTJA9mkfci95pDcKnTdWPEKc1jH8DBmFf9D3z9trXrfGk",
  "key19": "2TEFycTdLktM1STe6pv36DCQMrReJV6AQfTbxNuVdmNnupry3nSWXiph6NNtk73psmpxMjceo3b5Kh777AEhP5Sk",
  "key20": "5Rx7qE91UkADs3YVYr361R8DgjvrGm4nXALzR7Y1kCuABJdrd5YmnexMBdG2q7qXFKXwg5R6KbkzErKzwrHBebxX",
  "key21": "4mgMJGpxTvo5FCadNwKowsNQbjNsoj9G2SuHDGP2AsNKjQEUNRmB9jk3ap9Hvkjv5Pe2xqixC1xfVE7w9KbkZjSg",
  "key22": "2kFQg3tVEQ6HRDH9qxp1F9qwk17yNdAGc6HxfAusMM3tyRPaS5QBozhsyahYPghvzGhjR68BzZsfAfktTXec8D6d",
  "key23": "jMFd96HR7BsaQhmRNg5iy8nfVJpEn6YdhJwuk3fNurkRvA1BJnyWxp5bmDniPWLvSJGHVTyWnQK7LtvZT7i6M99",
  "key24": "2ERtqHeEF7kXu4MJ6cG7Jnto2xKoWQGHALJEwCCvhnRFnsWRw4JT2w6AGQvo9mGbhdjgES5fh9BbDuhkoPgYk5Ge",
  "key25": "hSKixz8CK5drnMFcwWPusidj5xSXdkL8C261BEaTGVBWd7bM3Hw8xVumzMkjgRKxX2PdDxcBshEhQcYyoDfAzoJ",
  "key26": "dfv6xXjPZF7tX5sdKozHBJFrpgF3Mtrnan5wsiejcsybdf3xLfKbvAZsBgGfopYrxWYtsmLQGqqKquT1mDmmmW6",
  "key27": "5jtUpydCVEk5qodCCt7DvEmYPGzTz2U5U3pGJFiqcmDJFQQzUAPJ6RpLWkECi5VtuQrprdFL8sdBDkYkMeuC9BA3",
  "key28": "2yw9bkUgHnjKAaZc2pkh5BvCjVSgt29N68q6y8MEYkh2CBEPCfbW465swwAy1CmetSQHhMAEpSSkNjS3CGvPVKqr",
  "key29": "2RPTaSuQFEkpPxcFQB2K1XLzKGvwcdXxrmgdQpuZrqHWuS84aBhTGmhd8perXEutm1dNqF4vy6boDWUyLEr3vZxu",
  "key30": "4Y39cf58hcC24Y2iMA23P9RizPhoz253axcgtrvqcm1QSwTTw4nff7DgrJBZT7W2EoUxGBaMXanC5LpGgNCvrH2U",
  "key31": "4Pg8tvz6FZTPsEapi8o4grr1eD9FaZsNMEpjgJQ2w2q85jrRzoQWW75tok7Y5f49pYZwq3PBLHk2XnkqLrmTzSAp"
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
