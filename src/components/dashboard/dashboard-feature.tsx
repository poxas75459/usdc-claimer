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
    "7sJwAQsZRpfjPRuh3qqZ5BDy8vRP6zMG8kTGf2yKKWgufiKg2pvQwXvZvwwbiNL7fgbymmqEfh9FW8NvaPuYkju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d54AoV9Jeh3zSZWA27qGEWBfWp2nkFgZkG7zwwcmLvtZ4DoBUdPVsUTUFttjYyjrJjPaXwgfpcNVwmh9DC28XhS",
  "key1": "45bHKp4k5tZEjDvGr5sxEYJGmUyuPaPPowVgiviYvte73wbfpF8qA1eygZGywy8kob3p2mkPBpRSUM2ctUhRgwcs",
  "key2": "R9kbcQDFRVPKYtNeXdFb39hdZj6B2ecd1GVEGLbykhxMSsVFshRhfF2tpKnSH8d2xK3Fe9HCs3DYr9PLJ2wGwxY",
  "key3": "AdTWLpVL9eYn8MvL4fL8UqE8dzhqQix5MRgeJZ638zFpBA73jXLqXeSkPedoM7sShAiw56awej6N6iKWmbYRswi",
  "key4": "vd3fBXZCdfKfq55hBb8f4dU1KTmjLhmJG2WUaV4c2uuPxjxpW53CiXP6G32k2K2Pj17H4sAghwcgsnghsLtGfqC",
  "key5": "5pR8SZ4nijBemGEeXzR66PXCNKAesbe2jHjn7GbM8HLjqHUnicrJULcqw66fncTa3fpiZ5NEYZN5woLqWPHx2q38",
  "key6": "64aA4cJji7t28tpc8k3n3yR5WcrBqkBgR5i3Lj1WxmhWfXMtNZfjcUoi3jGXMGSvs8r8GSR5qpypk2A4V5jj9o5N",
  "key7": "33t69MUsharhcaV7iAQw6vs2zkGBsVPfbouwvbjjx9Vbn2qFbJrzgdB1dvRyWtVW2sYJjSHcqxfipkdaMHoWi2Dc",
  "key8": "5Hg5adZqC331ioevW2dSSyVgZALo31nNmJLqwTrdqe7x447aFBGUgmDmEBf2VzwLCRTz8eEP54TsH1QAh4h2P9ya",
  "key9": "37xiWZX2dfgyYvFNfjd4U5xienX2nE1THgvARJSxvJjEyaVjUCgyZptAgMyjjSKc9mKwXtAcAToaj2WXjsjAjygA",
  "key10": "4oBdtvJD4qvHXKJJkzCNJH9wpCrkWmtpGqzYpj9jQsHtfCwCEMVeZ8PyRHMBoSwYnhfnAxQb4Mc1VBMtdANNHPNn",
  "key11": "3QKvVPhmvzeLWpRUJWztRKJkD9gbyF7DWH9bCzS5CnZ2CDBDxRPhKGGA6YN2PCSsSNEyM51XDTch51FQdn7jrBt2",
  "key12": "4HzoTFeGeKGkwnbcLedLeGkArv1kXaYGfRCNBPLdGScfeE6HyU5neybSM4wKvsPAnN1exw8dsuumnHb2dysvviZz",
  "key13": "2d9eaCWsdCqiEyXnSku8bcGz4cH8U86NMH1gg7NG1nFJhqgyKqEToEttVkrSVo2P2u6CrxmqXJ4HRq6EAjXTcaLh",
  "key14": "57fSL64YFmjBpwkF2yBFa9mVktmJiKLXGC65xFEw77W3mu2EoFsFaUKsv83GBY34KLxugdFBf2KdFSrvvSHrBNjp",
  "key15": "3zNxwuJinUMNHa2Zb8GxKTb2cLybgGKBzZujvnx7ppQoT37kBSYXR4wZ3WHfzUhpzyMMZtaYsc7qTmuKpkdbin6P",
  "key16": "5cXSe4L6QgUNwFL57wuzhKAjL3PGiLoa6tq1usSRsyCuHZ9YWNBu5bS7C5McT43gQpj3VB5WgdFrRcgqEnuHPbXs",
  "key17": "Qgi86LWFEeQ4QzNELjw2JMmMx4cW6L1FaWzH3EdVLCsxD4ybZGat8pqzJEQtWMkV1tufn8sYFF3ZABVKuApgiUw",
  "key18": "4Fu9CLCMFt3b53JkzuiDeTjUH3uBJA7Jzcz3uM5qWY9GhAknmpMzXtr72NL18gk2W8PoVvEfpx5RS7CytaEJWF37",
  "key19": "37tPSCW55d3oYmVeQZx4zRWK6Uv5b1tbbf9CWp6vZWPbhWjmriMDCJ4G2V6hqZ834MEwi25SboynhNrMkSnAUfCm",
  "key20": "3nSovUtjj2dAPAwsWP5SJDT8wopAnPSyrnsEtedLn4nzrt3YooqGArW9Mvppq5vvEXG2BUNLbLEJvK8KaKArfrAH",
  "key21": "2465XJoV6BqH8xHQ4w4gKNurcwMf8zHz88XRwPE9DGAtxL3WvXwWgid8SB39t2HLvYANS339XN8zwPFzSquezsAq",
  "key22": "5LifVynzPLJPts3v5bZoSC7anvLTDTLGoaGjC8pXw9uK9dg2SjfEpr6taczRrFDt7GWb6PZPgfkweqNEenzJMrNG",
  "key23": "2wwxbTwF5HkbeLJREQWpM5r8JJCzAUT5SwYiie6RQF5pn4XyoocTPG9DfhaEdaJXVYdsqcxJdYVbtsLTizWrBikQ",
  "key24": "58qGtSKekrPJ9ZNds8ri8HH62kNoPuRrRgTDCZ4ARkb3Rkc91nBgXzapp8dE7mHXurDHn2qRAJfhHqXv2BnBudGE"
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
