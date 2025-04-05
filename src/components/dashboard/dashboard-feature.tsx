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
    "5pujC63PLEsA68WSU56kU88814qWmRxYBYBMG6k9xGJZqFRRyspRXY8tusSVNz8TUCsth7nTrdiUS7uu7TJvwnSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35YPfjsXV82Umbu6uk6DH9YfySEArx9GAUsdzDZKDVw5FFfgysmcrsWa4xT8RgJo9Vvzgqfn9ehFVdpoBRbHVLAy",
  "key1": "gA2ymZAdaLK7DiT8uDPd6eBhTkjpdHHgqRoCWWuR73apmnzuCWrRdy5TpXVpCRdKMJfRi6414k59HezK1QQubEV",
  "key2": "4wYXaMtUFVsJ4Jbp5wDd1ywvpfoaYwSRbQnyRuUw4sE5tMRWXwCGUCYud84HEsMadTMZvK8EnXFmcVENKdTXL2WZ",
  "key3": "29oTGWUQ4NXeKhowQCQeGs8wutKrRQQnTfnYNEaXSy5kwBwp7H9M2YtjkoQv7wLDJSLFTYs2ePTgh1dHsAhUN21a",
  "key4": "3yGkotJWyit8G87hapfmTf3kED2Tpr6ussrbKPFzuPZ7xvRVgh51fSfkATVt8PCuDwhWmrZd9vm9W6TRRU4itF1c",
  "key5": "4KG9Tvn6PF3xzzGSGUUDPckQjJPsTsqnQoqE5RBHzSZ7EiqgeM7tD8Ajio9DQ1sTg7pqRPi26Mzt1d4oV7RWpWUp",
  "key6": "5sJSJMxfQf7nuUP1dEv19VDSPtX9gTidrwP5KqTRQ5xLooJ57StkvGpnyjMudmTCH13G25RP3jysL3m41da4j4Y6",
  "key7": "oBPAz5JmxsKYo8E9aFvpWvkbyJKT4Xh2XDMERnkAWGPzLvW6ntQKFoiPhswyHRgzEZFaAGeJZ3D3m5zLTDSqbD3",
  "key8": "3paM8uEbURTHEFvmu2AQCZXTb3avQw4NQcpu5uE46GZ1fNTuBeCiNmHL96zsaZp5e26cstaJhbAwvY5AoS67rQZE",
  "key9": "2ZRLAPBLiZgRft6KCmQC3G7TAFdDEw1gc9tYG7PF9FY5Zgv7jL5EPyRdcCaVHbwtk8CLrCjuT97zf83qMBs4PUkZ",
  "key10": "4RExbAvEUu2LBEzztZf8J7ph7VvBqwYVLWCFArNhZidrgiA2DHddBGjk6pDLMQ3k4PbgzHsqV83raR1x8mZmSTCu",
  "key11": "5JLEbk3FWjC2gCmngxozpWzQknGEsRqzjrNCS42qWSACLZ1ueHdnKXUCRoGST3veFPDi5JBDeWFDu3W7iUUkgy4b",
  "key12": "61KXsyg7xK2NqoE6hwgs8BTQvAkjsjRAeX4vk8oe8uype7S46p5yNUTTVCRhHvmTJ9xYPQbjSK6AmZMNhrXKifkU",
  "key13": "2gUDX5QBPSGVTK91hpVHeZmzCUcprhsyYYwHQ3AaCqjVCX5H9U51fNU7Fbjd4QmKTkEUdxhc784BRsNxmBsQD6px",
  "key14": "2YZqq5H4fBMnSH7xLRy5ye6cgy7HNXBLURYkpjyCBT9G69mY6J334hbp2WLGpWpptdbemeqPppF1F3jTKRPEgged",
  "key15": "5s8kv3XSHvyg1enhmsGQ9pnxytkAjo9E8hBWjNgK8Wn1wEKyE2v3RtuuQwzkMXMZkqHrvf2mWXKY3bsYWnnPCcSw",
  "key16": "4PjBbjNFGWavXBtqF6frPSWws8tUdUd5gDRvLFqk1mbsdFfasMQCeWqQJUeKdKVSp4WChf8RCxPs1kZCPjAoKnT1",
  "key17": "5sAqjhAdQMUx5WD2RfHPcXVvnAR1FuXfNqqCrsLgvTemFutJWtzyYj7DL2pjarSt5kbU66NunyX2e1wy1u8KycQe",
  "key18": "5JSaG6U1D8Y7q3D2jEW21VrjKCWKwRFR9o9waWrjTgMXEJMqMeGZst9vQWPtU9Mk6M4EbCBu4rMR4MP2XdsHjVAF",
  "key19": "41pjqj6uyovg1WfANx3GAxzQ98wXmR6quXjxPoUCd1vHDGwGg6VAMfXUZvCpyyn7oCvtvkXWCq4QyEwjYaY9cvMX",
  "key20": "mtuFMpFNu4rB2qF8LrkYFT5xaUBAqkkhM8Z1QAg1dWE5NWhYgSR7bxtyKVZfUXEuyPBikEtqXxv9HVtGyBfueVv",
  "key21": "4VFSm6WgfZvqjhn1hGA8GUzrpqg1a1MLfFGJXnKq65Xd79hguLdpoyJjFPkrNhSdQjVvH2XVNd2qVkHHao49wHuq",
  "key22": "2MkjUvSQgh5Zd8yuhQ2X1uBnKBrLZde5D5oz7UXW9zJmc15HqhV6Gj66L3AL4RMKdWdWpEfipbNV88mQPvE9tor8",
  "key23": "4xaKp6VamQ4ctQJJFjkufZa1NWcV96SJpFAbdVdrV8gASX2UBE1AxiPu6j44VDZmajSGxRmjxJPnHQhGKnUsEZiU",
  "key24": "nz86riBcSycinLE3nvSU5raYnmuFnGxgrEpyS94UUnbe8xsFHDpjstTTuwrSYSFh6S2RqRVuRt5yezrtEi9aQvV",
  "key25": "gKB6JN7G9MvYARLa1nQ53DrNadksdqphoKEYHr4HvSDwAWvTVe1e16mjxd1qvA9J7EyyDfuQQFwjTm4y1NViyTH",
  "key26": "u4PzdcvM664XqijfiiLkc7VPiDwQeDPqbnjAKdAhQi8GnsdPWnwwo4nndmUNG92GXWUGAdL22oV1reRRprPiNkh",
  "key27": "6yQvF3Y3vbi6JaYcJ8zH433UTjMPHmBpWvVLTs3Ce6TBKsQZURz4JA8QnRhfy2ZrpAk7bRduk4gcrpq9w8LK75a",
  "key28": "2WbknNA1GHSu3ifXAhzU7AqxnUuJapZQD1EYf1oNFtgC3KNWMjtX7QGom1xQnmbbtQHpcU8WiMkryjxxWJ7y2rHm",
  "key29": "32zafNvHfkWYvkd6mVsVpWu5s5Ho6rGPbZkCTHgPQT3qyXUB3ceF6qaryBCn7p1XeNRbeboMm1fkZd9DPLt3DLCD",
  "key30": "1297CDW2DgfFgcnHXyq7xC1uAihtXjqB36RLR4iA1NcyMCu3SPPt9era73oBkmxGGU9KcZWLSTEMgfRAuf56GBpq",
  "key31": "395squ3gJKux5p56ZRYfkoFMpTmsRtnSqdesfhtQPYBeqz9cz5yr69MnnPAZ2nnncizFcv7iajtP3en6n98yXqrq",
  "key32": "4f5hv7wZePv6Lvs5rJNJGgnE7MsmALdkvfLgjTZib4i7raiqbPpM74UDwyg2UVUF4VtbaRiWBiw1xs1toZ6qy3yy",
  "key33": "exg4Pi1xA9qP69JJNzQDbQUjotP97GaytN6upUyd835qVDUwVHRX4gy78DB9iHwiHGuxr5gB1aFKuGLmJZvwVgs",
  "key34": "2JjaBPMzRnG318Sd2xATxoSWDCwBoxxH5eryBt4XRFmqDYRSR5MsyYjJynuahRCcRMZ55nnVbsebwVuJk7FUtWeo",
  "key35": "3Ddn5NVLedDnUeKt9YXgFdSFVeYAL6wg4VyUU9RJyTuXfDHeBJmkKPNoBgJpdEw62wUrSnuqVrhdHnrtufYMt8X5",
  "key36": "65fvg8HVTmejJnyaMiE5zNvRsPaZUmNvLDrsb495Rg1aVtPj5RyKv9CFtpKyqQK21esuqqenWNPm3UyBtU4pmq1K"
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
