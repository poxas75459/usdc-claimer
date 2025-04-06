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
    "5WzKMR99SLZ3AUogdgtU46hF1HjDWXTEXwBhZo6dYGxkpdohv3koi9dQL9g6BDnDmWpeEtqBedCn8ZKD2BawT85P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgTME3qv4VdAPnC6snwcaryRZwsonak6h5kdq2FVJuz8fSwhdSkTWsT95hvwW22GJ7k6gNPgdNpzwhnQ5XbNKnX",
  "key1": "4TkAshxYGUWgtv1oH3nbn5wiiqQCKsCtgwwykGtt3iZV5tx8fTNaniQPpDSskqwXWJ9n5qKGLFesYSsDpC3GXfnk",
  "key2": "77eAuBWaJdwcbpUPkzmsNABz2ydSFfdMHk5JP438qmpQEzJ1pHXVvc6aMqHSYHkFTzPhv23jNCLieWTcFLLkqFG",
  "key3": "44Ckp3F3BrMai2tmwVkpMZGnKozAKZAvtyga5YSFYEoYhg5djcNoRfA8CNjMKXC1CRytZZiEva9GW1hEWza1GZt3",
  "key4": "4ztVdv6JhkcUgCvAcbW9jx6L6h1ZwgBYzLsTc5bmFZXa6RK3iE7TSFs5iXuqdeofG5oLP4FDcH6dTWgdnBGZYN9X",
  "key5": "tGbhJrtzNwHkF8Xs9eLe69ZqoEGfDJ5xnXgBydZCPGAXTTpgjzfySQNV5CvarvQFwiaPs2RDj98iLomvZAtfJrK",
  "key6": "5nHpELhq4YFePRUq9EU8nGHmu3SbupCvhimoVTuLGvScz6YcCsSSGXrG6ebWCxnVCjTArPLMnxTLt2ie5RPLX5f1",
  "key7": "64nWV4kv5Y9FhPeN9YFyrYR9p22f6V7AfCKrpZiqskvdhksLWaCrxrthxiFhKwsrM7fQG26tPVYHhVEYFJLGTrbt",
  "key8": "2qqkwnmVFaqP2fcK5x5bhUjES4QfoXc5m82Y511rki86vH6hFKCkvQmWXfd5N4w1xo9csmeB6qsiVWEC4eytXB8z",
  "key9": "42XafM8Zh3UwNU9BRoj3t5zEyesT7oRScT3XBRopcWMTsoXnNCtzQga9iyY7ZitrPdcfv4tEMRMGstLCkH6U78FD",
  "key10": "2QU5GmpzWhNJWTjxtzBiwfUoQvDqT2c462dfPd6vWWNJcHhWhDW2Y73LKuY6QYgKSrqdJjrDnKDkWv1MPXhejVzb",
  "key11": "TzLhwLgKoTkgT4aWcU86S68xFtCXqzNPTGQZDGHFBuMpKaLPJQRZmyDdzRQ4TzGkgDd6M8nohdufLffCUL7572d",
  "key12": "62zQui3xBtK3Z3PPTHQGemEs3MLnyb1FV696rg5gKjyEzNURranmp5W8zANJSNGz9dyoQyqnM7oBySagCZ6stQpP",
  "key13": "4a7Jv4Vj66PiiJJT8Zdfjp5CpXKqWyoWNEq3npxoFbfuuCrdakGYYB1y4iJ9T5sHHnwLjM5e8DeaiBeEjQ6daQ6E",
  "key14": "RW6jaKomGfoJ4rKu1FNq7Wso26pRWSMXVQ7euYhTcR3dVeexQJFzqgxbgxhWdt2aLdBHHUqfv5Be1ZsTt7abobJ",
  "key15": "2jEzHXYYFLR2AVRCJsFGJVVu392AQ1VEnsCQgKMWriqy7fLQci8asUTbBeFjpeji4TyqQUyqKst8c6VQcjHifteu",
  "key16": "2X67n7Vzye4ifFSSXiQJpXdBp3auzg2ZEuevbWXbeG5oC6YAJ3qUZjbubuN5FChjPZ8uay2peRfZEj3JVB6p96oq",
  "key17": "3sCytT1eNmnZWsDBjWy7ojWGT3vvirsuChkwbJcrcin2oBL6GH9iX1EPvnfJRZviGXgHX1sY3GgvUw1HvjZ78BPi",
  "key18": "5LBAL3rDqWrZFBGT4k53K5sSXAKT1DRaCHXdFr7tnqh4EUq8ALDtVPwSAVT2267ALKSVViDQdLN4X4ribz1T7sBZ",
  "key19": "63kAEvUvNTDaAbSsn31jFtFTK7ugDNjBALoDEiwwN3VBSt2C3g2DzrWSNVbzUpMv2MfWNuik2rK37gsxUKKMqFMs",
  "key20": "4CpRajbYtmnUmqUoQpak3x1GXAY6FpBYuqrgZiFkaodRfwzjhizPKKtkjmBtauJt1cXs1S4HS9WLwEbpKnW2W2jH",
  "key21": "3qCoMMcLDhPdNASPhfmkpsP8spyAhGbMhWzkPPBL5GS79d9ts1gBYHBJLiGXR2pGdJKMMziwNSGUWEFg7Y9A3vWX",
  "key22": "3FbKQqz7wYZGytrx2zLyrLXQfGTgjJo8kaAMiQKxMV42EmDtzPzwiW9fTGtY2R7BuGUtQ367u4XgiifD8HdF1h8M",
  "key23": "y5cLzyxLSUXoH4PdZohobHeE2uzQexRS3yL3beNXg7vR8oDRGqoY9AaPKn9yjhWEYqngoAyHnnSHQp7DbPt5v7i",
  "key24": "55sJJ1w4Y39nyfkEY4sTEpAa3wKoeu9Pzvsb6otyJHCsUS4QUcNDqci8brVW13NvWGntppdkDd1GKKDvsxDp5C3y",
  "key25": "4WFcuWePwtNurN3eKLdUQhjUiv4jp3injudxTMBESc5dP2JL9LTQBnQecn44g7H7Pz34GooS5idm3vdgZMovBFH",
  "key26": "12BG53veQbT32Z2kmcP9vtMWXAPJ53p3HWmqdE8SWrXJXpQgDTYw6sjrNtqmvUYSYvxTbCXgLD5wJU6PpRawtnU",
  "key27": "cEjzYSUPUx1ovGrkZiuBERLp3Xo3WR4kgyoHSnnfLhwdpYs5JRyFd139ENKszA5tYm5xEF2depmxDhE9Kh4RHsu",
  "key28": "rM8YVcdY8RVUEs6Jf5Vy3Hd9wjEqiwstidQ1nx8j5aTFoxBk5f9AowjMdKFNAJxiteoQRYRAm9xeC1Yd19QSjec",
  "key29": "4wUTqPGQjHPrKYD5T82Dh5zQNNn51S5kNHLd2LPbPZPB9RmD867xRAWxSJhuoo3t3h1NKfWgU4JfEboRrr1taqob",
  "key30": "3V5HsjwV1nkpRBZdjhJ5w2A5Zwqb7QKSVyE78CVrSAQspP7JpNH9h4zCxf27bVSRMwdEiEaD1yjkgq5TvZiC6WzN",
  "key31": "5seNMpSj5ScMsF1EoNfKFYVDsdCbY3pArsFjo1kHi5QCLX6cJ1uv7ELRFroF598hDJqESeriMSDp6ACR4ydSDuqK",
  "key32": "2g4F13vSQDzXLvPNRSW3dT2ae6H6V59GojFJE1HbtwHai3DSgw53sEgS4s4JDhAia9vaHH3CUGvF13CptNFumykX",
  "key33": "2hpoPPGkRs3hNZ9Us9gLnAk1FEkBrGUKRzjLmWtyTHwkYfZxKxNByfv2neTsY4i9NLYo5FZQwcUP38c9xMnT31Yp",
  "key34": "53buFEHwJ3THWzjTj4qMWi9CnHpNZu6RAF1sHakFPtezQg89FJwwpoKaSeQ1P9VXsjnqHy1WAaUB3xPez6WbqRLA",
  "key35": "3E1ou2VdqpghHx5cqUswhupuqCcoYSdqVb1DXAEJyRAsEjnYEDbABLvdAXFFBnnuNgPkwkD2b8PhCqJoDoRJZnU4"
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
