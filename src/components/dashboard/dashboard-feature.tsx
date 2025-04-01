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
    "BVrifMb9hVyW2KuSSLBjbSxu8WsncttGW4FeM7NNHQrTkwtC2D914Y7wHNV9NifWAYxCJnNPuy9QanmpWMBmjXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MjBgFzab4eE8P7jm29QjiBhmPfm47bB8rrAGyZwWmvZVHbjwbHea2RnV3oGBE2kQxURe6Uit4pu4YuUMN4p1M3e",
  "key1": "3BhQY6tBuu2dBg2pQyX17q8i89LXac8BHD5tsFp2wygtnwsopzfPAm7NMTpFJ6o1SMrbuqKLR9YqHRei9PSq5a22",
  "key2": "3h7hwijMrTWgcijtG13NU1L1t6fP6tVMGga6aVLFWdP13TkhzkMFqvRa1TQjxmFq4mPb2gjfhoNeJTMa4fkrycvd",
  "key3": "3eh3BiXzA53PzmpeJpWPnrNQBTXND2qGF1d7dkbALQm8tMCQxa6fT8xToWpoh1msU3CuNweSdU1YjNnZMsZaMtJz",
  "key4": "5JXHhM5Ws153DV16tSMK19s1bp69TZtGpSiARtbByAvLhrpzrjk1ewKBgn14m9v3vyiFyp7HpE8YtWz2cFbixsPa",
  "key5": "2V3XY8pvhmhhDWCyD4SFMVCTMNodhYbhg5hJpyE1t5H1BFtAHJqKt5SpcqYrj3d3wCGAEx9YDFXthptpAJSho7cv",
  "key6": "5LxujvHuawNeKDHdEzm8azf5v5L65HfapLz5yhhXkt8HacgCA1wUhYKTHzTv6DmCKzJ6BY5zTayn5ZYoTyyodfNu",
  "key7": "2AJXArk89SMcMHUzk6TqYDJr9KrnkbR8n4p6BAyznq2erNTFQQWex5tySktRBrHAQXgdaKhxXQu7BnP2VgUswDZV",
  "key8": "22ecPYu41u85FX3ozDx2tiKSehncQs5DDoTW44oHHC6TuhgvKhaUxbrgj6cLjUV1ACbZcY5k7dHZ5sj2DNpo29J4",
  "key9": "4ACVmYxoFNULmQfwectwrKBhzAPmQYi7fiA4rT8tyGrV6hkcRi3SLiuYgBNVrpjEymbnGk7ZSGSamjnH6RexUAS7",
  "key10": "3onTuRE7bB3uN9MJrf8YjhvHsKA7ossxWJ67g64dig8DFMwN52sVzFqECfTTtavEAGamaFTnSPi6zTqP7SQBd1PJ",
  "key11": "3rkeCpKEfRHw3zanpd3CBL1i3C84MfaqsywNLfC9rjZxZDxUjVddg5uUVamCuvTBRghuPARa7Gr6fi2m3wKnRi7Q",
  "key12": "2pwn7nvvjkecoGi4FhghThPNi6X78pM5oVmFg3dtJGetiE8SvEPyqpvmZXTWYCC2NqXG8cyE5qCt2fJy5Jh1KjsB",
  "key13": "Q9HpfJPnCA5LuvWXcMoNqTfRqgpe1EUEfWAk42Wzo2A7bPgTmkuPv5nuFqK2mxyDPhi4u15b33Cnia96puJyjUr",
  "key14": "5R5Ye51EqmWm9HZaprFidmh43pTut5Hik8DPKANWBQzX823tDtT4pJqCL4XHZo8TnzJuH6jyHgCyE4dE1vTbRHmm",
  "key15": "3yVbPLn5ShnNbPp9c6XdnE9LCvNuL8W4cSX14KthciYJhMhjnvGQCQL2KvaVNmzaMowE6q6Sh3aBffiFmFSKh9Ee",
  "key16": "5VX3Gx8CFr1HFw4zv3PKP5LAfuVe5JUvMpPbQ8opyUGvkYBy4zaVazpD4c25Kg3KvQhy8cNJkunpYCKGXkVPLjgK",
  "key17": "6fh5jzHMZ9LyVrVDB4bm4fXm691GBoq9DNqcGmYGGbuz5uL8Ss7WoikyxFJdGHk2TPFUnhouL6xjw2GykxYmYJB",
  "key18": "3hYU5L4Y2bUJeAjk1qxi8mSwRHoSMvFNcZZo7PCU1U2pHHLcNTdN4mGMbrwprB6Gt3ekQz5KSJe61LwNX2VB2jGu",
  "key19": "2KDvtxF5Y7E7ACuNHuqjPmBnfnN4NvoBXPBwPuFShjmPukg6knpsyqYppkBVRr5U12PzmHcUUsXZSZDkdnGU8gvo",
  "key20": "5dTfRcgzMykQe2ZkUg4aarn6nGGwrPWPSaLmBsU9HSwtb8d5gQ4kPKmvd5qyQMsY6GjkS2LxrbXxcTPm2JtAf3c3",
  "key21": "3RKkhr8kxyLLtczFQ4FFDRfi4nZApwudYzBpFzmYamB8vKn9ctwKh2V4kMgcWqHE8jre1VtNaCtByc4TgU5dfNNP",
  "key22": "3mxQKtgxPy9ndLxbpQZc8yrm7G7r2ajesYtQvftzyf1eWGxsK8vbspVmru5719G1xrRn2pgoMPoVpKm6UpcKZ5bz",
  "key23": "4cGcJ4mN9AwbjBaYQFB9zWe2B7aPC5b2yBWD9XVerJpNpGE2LXZVPkJiSe8AGeWABubTeDYNSEod3M5Cay57aTQC",
  "key24": "S3QchpYsd3FpohLjgu6urVLkBQYcoictHbzc2hHZZdtvncnzHkteMaQBwH1nzVJf9N4vxz6wLWH7Hdn5e5uf61E",
  "key25": "4Y27RWWVWDV1JJP1ZuAK5zXxmpw7bKGVqTXF1DZ2g8nFrY8cRiGX4PFJuBi6C1x4MyEk1Fot39zYrD9vhFxQV6Pu",
  "key26": "4rNxZJgqUdsQZ7b1G2hFJHorpEom78THZgjcd65yEkMdQMLKvabeox2JBp37gEARXqVBPUQ6ES1rLH2nWoSBzKAm",
  "key27": "5S8zZu3vzS6ZqHdyQN1Cb7WaLpKpAwvpxXHCPvSzpCKwFegM9jgzA5syMTz5uPbSPQLELcivhrtKzHkBE8oZthWA",
  "key28": "29BzxmeBtP96GH4wrNU9UP9C4HYstDxPEb9JkrTXQZbnP9Ycuy9tVqwJ1LUhZYL817NvgAaKhP4oURbvaFy1vHkG",
  "key29": "1BZCspoPVpZ89Za4HESpAEcoF9jNHfkTpSPUPS9FPehWmJnFhXA3FE4weiFtg951dF3R3jiTerevavYEMijDY6N",
  "key30": "4BUJbM63Co17tNoJR3cgXK7mLy9ozTvBEkBz4Cbz8ScADV1qAWY9MgPpmAZpeSNq9BEEeq4W7vKgz6wP3QZWYKnc",
  "key31": "2HX38umTAhSVxyvu2C8Cg45UBSmXzezTwig1Eiwsw7rTXLxCTotAc2DMsSwULgJBhuBS36Yy9fGNGhSioFD9PATD",
  "key32": "YR7xPcERUWfk9xLX6cZn7U4McbpMcVjyFkbMX2S61RJGpLHUFXBfLcpYgSE6DqYLq35Vg4E9EdCWCWHruV5CdiA",
  "key33": "3vDaAg2itoz5tiGRyK7x3JmtEypgESeD8QUC4F7djM88noenYD5dAptiDXG4erGvyppTMvMbMzS7N2Trf59qfiuZ",
  "key34": "46abnaQApUvUJNEtjgP2ZfJfCjbahfkNaxTF9XhyAUg1uUaGPciKAJbV7pSn2Dv9HFdAmbuB4fDBuJCWXHQR4pq1",
  "key35": "gk9qhN2rSnU1uoZ51fuYqnZkLKC1azZ1MwqE1uvGDbbe2sJRUnTF4Fx5SX6XT6jpKrZZN4gso6z9d6fCnojyBdD",
  "key36": "2QHNgeQ1avmLWNNjt82xC66TLjzFs8QhyRwYVtjvqgxFqsT3zAY4LxfkMX4KysFgTfdYq3whGRtUVmvr8U6AzYAp",
  "key37": "5bsfgzT9WpSBsMfCzDLfnXYUzF8zSHWhFJcCyhHDTnJ8Z4M6YF4JXwEf4Zr1QdrGEnoWESS72Cn5od5RwdP4r8pC",
  "key38": "2DRDVnnwu3Kb9Co5HccGH5bw8sNfx7Fy1A24rC45SfC6LWKsrGjRC1vL4nut3Twe4vT6zm2q6fC5mA9CACnpWCPF",
  "key39": "3yFT2P6k9bjfUmwCaucYwcSLtmp9dj1SznMVGrQ71MkcyZq4xi2Ttx1hnTwma4VVgh4hCiEaAqUyp2ygrP9PvQQY",
  "key40": "VFZTm9AKkjmWjri2GpPQJ8gLZXV4zVoTZzYnFjbyS71dRoRVRbXUMCaEW1qepUHLXmFTsga9NofdoX8ou4JDroZ",
  "key41": "DUMJUoSbMG5fhy1kiD3sVCApM3sqTQMQe3WY8HamHsRb7MsggVtL8aarmcEvN8WnEVtnZ8QAS6ogpiHzgyqurXH"
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
