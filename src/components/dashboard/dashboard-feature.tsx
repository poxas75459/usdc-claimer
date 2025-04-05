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
    "5YJ6JREAkYMjW6WNs4RVTMhHs7QVpV2w3nXU8vLWMJ9G551R9sShLmRMv63PDMtPihX6WZam5ySjysbfdP38Hsqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qj3XGrnwMtYCUJ1nH3Nbb26qcnczu57Mg9dXRM5dZLASrgzWsYf14BzBpFWrhsgtQZVDgSFSFPsBjKdeePfr4c5",
  "key1": "5frJSCT4w9kuWWA4WNh9u2PtELHbw2bgh2zNP37ZsRNcestpqr6uJtDrC3rjokb4TCRa1zG97MH3NNzrMHn35c5g",
  "key2": "4V48UCvJY34w37Bbg5gNejRbwN6yrEbaXnGamP2yNoUXBy1qYJmdNyDi5Ao2mMWdaNpMKPGZN3VCvV1G8FKuT1Kw",
  "key3": "3UbfSFX4e8nX341s5MSA9xykRbdsNTXeKfDN3gqzTVoJzL5VN5U1rE3E9rtuwC5PdXqGKSoJghFhZ5JzCyqciVmE",
  "key4": "2SxytraD9qqnuhwFTFdvFojqch8963RUgzUN3gbnZYfaDdr25vkuJQbXTeY7D7enpdXHN1qtDFMAH8bSSwiK8k5G",
  "key5": "roRFazpsAroDDYtjvMh2uisep6HCzJtoM3PLiTrAy25cknJ28JFVfJD5TVeXWhnnqnAxPr6yoJrkKJdKRC7TFzq",
  "key6": "5sheWB1vqCJX1dDU4ZjGY6qrTYWoWieFVxFp3H9bn4X7XLVSWqPT4gYAk4cZJ68EW3rSs8Vc85CXq8Rq3YqUuYC6",
  "key7": "4V3CshKmbFkbLVJz5LTqnu4fCqC8f1u753QQpPBfUUujbBT6Kohha7o8oZrEcGoP9mW1LzkhYHq1QPg9DBbg4vxx",
  "key8": "5QXvfgvNNSZWcXBetb4DkoRvgBnpszZ1jb2FFWPK5ADK7qSVJLbFq6LNG2ryBtubiuehpXsamJQhChbvTNzVSasm",
  "key9": "4S1zrQCrQb4MZKZikgKhHRvMCNuY2m9ediCCVGKrWP4tDqFvkfBcQSpJt93EK2YDzGX3smxMLUKsTqJuv56pZW3p",
  "key10": "qP8bBsyuG7GHnHRQ3DjfxWp8zFMT4u9VBC4zFHewUoRnb1Frf4Wnj6uJJJLK96RvMR5vs1HMi6EXdPDXMGw7Xuc",
  "key11": "5bo5G2i3ecBsjzNs8US5v9BnkzwaHA6sGRwumBGQVw5wGyqGhyfHb1QpV7TcvuC6zcrFpegGhxuLiVKMVKCFN4Au",
  "key12": "3vAnoRbkWA7dsu7gcZAMgWMZg33TPYs6tTQuoEcGgXvzxnkzNiBzqXUHCXN83Wyn9WX3kUGREFdKNvMQGud5w3q3",
  "key13": "Fi8hwrSj78JmiN9w8QqFs4nNS2XuVgAFm9S74vfvVvJf7Szyz1jfeged3aDACQH7XgoRH8cnWPfkB73J7RbTYz2",
  "key14": "3K7jqcMqGALyCyNvyQjFy2NqvN13Pn91HNRYs2rCNkscyS2YoWNeqscWCyTZqT7XNvm1tyWLgZcpHQjFNnUkSBHQ",
  "key15": "5W35Dk262W19Qm41rr6BPeNHsLfn5bBPkadJPjZotrYVT4AL9oqHkssx6vncAd8DUajakGSbAsNcHzfnBfHuBti",
  "key16": "2UtFErkQdmDMGcfocBEQSoibZTXiQdj3EhahWBjywxYWWrhjaBrTiYoucGjBsaUzz9RVHYEKhKjpXF4eSxWHnPDK",
  "key17": "3ygkmmhcSfZrTSBdjrD8uC4JNPokNA556xyuKt9udKSBxTYCdNra1kReTxaPgsBTkQdZtZ9hWcyCmnBCGAyJqDhY",
  "key18": "64n7aVxToSHRW4cejXqeJn3pw664Gb4U2MPEVGPBBhs6px5A1XnNTNV2vVu9QigBMwbFX3F4Y8WQUNL2oR3UkCVE",
  "key19": "2AL7JYZLKMSRNJ9vco4xPa31LE9AVUbyD5tDwgawakvFkL7iiaLWzGk5Dbc4xQgbFE6T6zr6gTgv6vBrPLU9enAJ",
  "key20": "4rY2ptx5adu3cQgNZcXDpWvRt1ZGsMamX3QNPKYuU45E2jivmyXWhj1GhhFRseDDySTSxLhBk8Aioe1ZFad3AjZk",
  "key21": "5SaF7CDp6kTDgUfvrg1mkfNgbdLZba5NPZNN2WCGgcrFSQEQUeRDLrwMmtsTK6CmxS6tprSvL6BfxJmjjCJFhTc8",
  "key22": "37JKhFHqaWEjK8r9r1q9cKTfTonuaMhyYBgG1S6e4zWwMXcSkNgeJJM5tP6SxNHW6BGCPNYyCiT5dzz3AjHZC3xS",
  "key23": "3dg1YjFBT8M5UNh9u8Kxtpyk9B4ViA9ya4CNLK4RJzQffVnfCV9nUhQw2nH7goB2vo4ZHiqJiM3wEknNuZBBjLfz",
  "key24": "5rSuDsZUeoDeYs4JNNJC3MTsbrYsaUeJNaJnz9S4yUmMMfvWzoCTDpobdmGseLQtxdHSTLTxEC61SrRYyFnjnfji",
  "key25": "2NED6GDZZMGMk1wnJzwn867BB8XiJiGgrxQXxAMa8hWpwrPruyUdFrpahm2RJDEks7P12E2KmZSVtc5FjofUkYxz",
  "key26": "5VyxyoZ5yQV6mYSQ5xERn8boWMqgXUvT7BwDKytuXfu7ERUosMmkGLqPJt7NiKbG3Ts6Pgoc9sXUpAgvyh2pv31G",
  "key27": "5fqz5kAQN4BtnhP2ET8k3TfZ1NMwcgJr2YW2uz8haMTV4d4ycuzLbAF8ifJrXrLHtrG4puaffEGWc7D6YyGypBgn",
  "key28": "oDczcGxw5dxBtGwX57s2YXZyRfdmrusD8FPWtSYskDdXhS8BHgBQrYKg6gnb193nJ1iFhSMrzesHE4hC1ctPTjK",
  "key29": "3v4RzjwcPexFH5Gt2rT5qcxGbAU3PtHbsPFUunCtDMELnhHyvuYiUnoq2J97AVeqNRppMzx9cURf4UzhAoHpmVCe",
  "key30": "5TPZqdnDkp3kwr7Mz3EqYBCX77NUjBpLsGsZWKWZmufyJ3SRg7pUvDXv53xtz4A2c1ZuUqSN8fn6VaD3n5pzdBFT",
  "key31": "3gMHdjrzUYBuf4dsivqxeXMBw1ZnShTvosUKqQziuP3MmGW6gNPViN3frHn1jcxU3ZdifFr9HzXtif9XZMpMqpdR",
  "key32": "9dABbUhKEJBVFwvi7uP5gLzcmL2EciPkCAoqnM3MfarnbCeBjtXt1GEsqC82LG8YAKZvdCAcvs3HaRhs7b6XozM",
  "key33": "2EfPXFiX2jiFS1Z436zWC3pD4WCYvvvyyCTTs7JYUxitFmW6VHYjPEV4azRBABRRKLi2Kbhbfq75eaE3reeRJ8Up",
  "key34": "3TWx8A1SDyLtrXXawFuTJkJoNkM37Ucvb96UyRuA9QHisgRS91YrDsW9RRHTEP4MbPN3RjiwTpvKGDnUgojhhzVV",
  "key35": "4yTC9yeCdX7pdPQodTYxs9fhQs4Tbv86kNMsK8rn9FftTFR95BYHbbvCKTMkDaYT6pnF5mrPRyxzypMFJWM96wtd"
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
