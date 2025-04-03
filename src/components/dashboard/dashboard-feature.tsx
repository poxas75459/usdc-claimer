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
    "5Nw7zEwfQ2puo769EFzHCyraLyccDNVJ153NidU1AigrfrXmMiwLiGM7jbBXz5BaSUvP2epGNpMmEaxebHtTnUUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzECNyjnUkhzckc5n465aCQNBuEEudJAt1fdQQ8S9WcWnTr7RXet1DDBAnZcN5onK5LVDo86KpirwAYqnapkoM4",
  "key1": "Dpnya1HUz4vpmMrfTUYHRoFVX3EyTfMb5B95LWp9PvRqkThr29ASSyRMNzR56WqfDFSwy38e7G7r8cxzWX6Pp5e",
  "key2": "3Wr8senttU5nGXXwCeexpVbHRBpzxiYzvpYZD78EcuQLDMjPgyVqCX4aUB5jNT3Fr1sRAE87paAdv2Zyeorm2WLU",
  "key3": "3Efdeaq6Kd9oSucJAKLWkwdTDfxsWZQrZByh4EdxZvYCZ6BxV87w2Ss53DTJWVr4PV6VU6PpjiQJHwvBWCSgAxg2",
  "key4": "5MUoRsk663fPUsF7G1EdPTw2c8GF3YFehZuqZVyyTw8U1rxTwYQ3CioL6YvgbTQbei3ZnZiuMXkH47Dr2T7yQ9PD",
  "key5": "26QUSnEp2yUWJCvZXEzBxJ8rvSGpDmm399yjoBs1hGNZCsRCKYk6qLfn2Xm5t33n77hLVaoutgLJmjw788XU1spW",
  "key6": "3MMT9L4Aw6GUbbuDX63CtT6pd1gqbhWnDnp1D6oJ4zfT9v2eXQegbeJZoMS8kPvhPtSzd3CBB2uoTY814US73QcD",
  "key7": "4799saUQbE53uJ4Vy2be4Uu16HUdvToRC4ry4Le7KVP2ywbeSMgY3TT1sbMpA4U8CryEhuhesKd3e8WEMDLXuLAE",
  "key8": "4VQhN7VD9mwkfgJZLVjFhrywuadGDpEaaFCQo3C9vu3TLSLsgwcyD7TYt7xBZ7yzfLGWoEcLzQmU2idYiCWJEpsb",
  "key9": "2cWNdwLtffeHLuJJjA55uVAXayeiP87vMWcaBmuxqMP2hPqv8ZTrM964iEvrVsUJAfuzw1dWqxt7prNKU9Z1P7Fw",
  "key10": "2y2fa9cU1LcXTysekgJSVtK1p6APLZ3dRxvZRmonzisAvNSk8X99ktDhHkkBbpdf7ssdo3iX36dCdRfvuhG1Pu1N",
  "key11": "2skn42ftm3nNa2jtkv6ASQ7HR7oVTs4pWZJwTscAnXNDqg7bqYbMZCozVs9dtaCxNGCVsP8z3oyTmAFjtERML3dq",
  "key12": "57U3ZHU4aZLswrj6ztPqUZWPhB3ENbM176ymnrKne7yMBnhY8z76JViduT2pPkrSWZwuX6GTn8w95Pb4Dc32ajSk",
  "key13": "PLwqmj22yYUFPfeqxkToY6Q3VC7YwBeYgmfz8WeyuawRG8o2iMrGQwPJQ4saFGgwSMYhKFGHkeviAH9S2y3xHtd",
  "key14": "2fMvqEDqmWv6rZyFeUMzxGtFR61N1BRf4mH6tKXiDDGdLCHpB5eiWZ4Jqkx8D6UepULeakLrVoypXvfj3jDpSf44",
  "key15": "49uLJmUcDsQmoxT982L4TkqzRHbCneUnRcyQyRmkPfvYVwwdzYATu8gVijy5Tks6PuJHaDxzdkx3tr4gkL8GJ8Yj",
  "key16": "212XD8weqq7y31AZNE4re9WXU1dSxQYLorErKfnpGED3SH7YRhDc2DVh6u2k9hq9yiEWQZafGRR2HptvAytbY9rx",
  "key17": "4miBS1FCTHwub9VWy4d2HwAqvixG6QyFurGmBxJcELVkxfTjkSNU5ecJAmUu2zTm58TMaTLaiNgXqxoUpm7XkUSv",
  "key18": "61T3bT2Cj4YSXbZj4vT8XJtEPzb2JACjhnp4d5nk4gUCqmFyozws1q5sgnXYhuqRFZjPSkVeUv8tcL437RTxjkay",
  "key19": "3hktFnfsyX2ET8jpqrwn34LXp6HwEwJj4SvaVnqVJX3KsrJcuAqLJvwbB9HU9vngm7d1n92aFN69Ph9eCcnMiwUr",
  "key20": "4arz3SRHLCoaiagfVKpQrXeRFjsCgRZZuzXTNCVH6FA7eiTXB2jPAsD1JcCQ5JHHR6BMWpVaDY3eT7PMtQ631ZdK",
  "key21": "2ZEnZyMoGj2yNS9StorD55VyULanc4JRcQA2SuDuD2D1GFkPHoR4VMgfYB7rNh6fY2XuRhnpoKkFhb7gF4VAJfWd",
  "key22": "g49aP9kRDUcHGR5BDmvN7W9TQYW31ZZb3P2YLEAnoVjHTawfDEd7hpg4B8cFez7n2U8vp3unmxAo5WNxg3tDssj",
  "key23": "5mLVigL4LpvBpmfVnN5AhF7trhYSniicQSmCmsn2KhumLrpYbdirdSQVt3D6xwi7M6WG9miREcevjeqEuEef6MHo",
  "key24": "2ZJaNVv626BZBNFjBN9xzQDaQhgnW3iuQYFwnDeMskT3TWeuYtS8rvn1RVc3R4CKTspRfNwC8JjVGEj1vMMmea76",
  "key25": "ik3jWCbHDu7ptR6R21KBQHMB8CwDvT4bkJErWG2zUd7kWdHLKERR79scyNG7X77AevYB2KkVx6yQsioiSRHVi3V",
  "key26": "biPtmnFzvtwgNLPYgha3LbuyoJYVhwWWm2qYkk4SjjTASpdonBVrm6WQfmMUgskaDARLE7DJs2sobRroZqxQa7T"
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
