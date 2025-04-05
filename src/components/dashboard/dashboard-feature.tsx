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
    "4mdBoHuzdCkdyFXsWXW6naUacXHzi7LWBUbP1sUj1cQnR7wo6BcxpFFEtHwvCmRqrGjdaviTScqvcW57cbjPzAWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38VaiihNLuJsio6as9gMN3fM8anbH9C5TNmwmstSAfF9NCEwegSGJfSJTxGFiGkL39ap2yR8u1SsTg6LQ3JKvTD4",
  "key1": "5sgJhabqbDWFRrkmZiq7U5t4a1AGbMyrxbrMgGfW561SkzEeB6aEadmd31zznHQvJMe6WCkMq1ns3ALwsG8NmDHR",
  "key2": "28K7rRNN35FVR745DLpHvcaMnTesg9t6Y9sHJ8qdjhxe3PxSwLvqw9k2NE317LP4BTgEqNof6JzDMKhQmgc8pKza",
  "key3": "67JUtJrpfcYVn1U37ur3UQDErcFfvGVp3WpPDgEf3HF75MoGJofA1Z9xHwszsi8Hd9k7KpcMG5ELA92Xj1c4B235",
  "key4": "3s5W7sXcPe9FDD3SdYC8vQLtB2uKFkvVqA76y92CSzgv82DhNeozTjbCZNSAJATNadnau1jAPGm3pGmPzvBy9pKc",
  "key5": "4YhEQE5VHe2yGMAzUUeoLsstBfvBHPoFsV5opJrwHg5Qa3nxytMf3cP2g2QftTMXL9FjHSbJgfMRyYsJahRCatXa",
  "key6": "bhcSmbZg1yr5AkmpRcuGWzKKZK8mqQu4Aax8YCsAF9k4y1Rf6h34BqyB7ojMkvfmzdRNvQuKNnYsvapaw88EbY2",
  "key7": "2YtR2Jbp559wszKj7ZKo1WMdAQv9LHnSvULDVg6F58Lz7dH7TTLWGDih6Ysqijo74foLGZo9AhH4z6LVoKVr6CYg",
  "key8": "2aHArT2rtynCPF4XUppEkJ5gb4jhK6NmHzuwsCuyBdwofncwbm7rWmpHALvW6pNS7ya4NrpfuJxMpy1AB2hmP6PS",
  "key9": "4uBFKLVWCViBRfRCpgtDhfdbadQBpWWcj5CBN8B6Wgnuty1zYKPKhk8UXwmPvGw3DWc7za8RYfS8ktXED4BUhRKA",
  "key10": "32bEdPBEpKr7DVPbN3veaB3egoFwryj2xuv5aPSxdGszmKTZ9qDr7xk2AiTaKb2Zb63q25se5VAEfhBxgnsjYaNv",
  "key11": "42CVCUUd3YpQwqgPfkWHWH1ZyTWSYZhHggEwLkKuXjiLvJcftcoDBicxLVFS5bywywuHhjZ8tFn5TsioYNR4rCTb",
  "key12": "2N1Y6x4tYm3mkd951VayWLz7F2Y7zYzkw3MuwsHAHniRTWeK8R1Q7qv1sG1fQu1qypDtw25u6qKXiuRsBpUFEJug",
  "key13": "2BdLQg4vqvq6ZqTqfVF8ATuKJszP7oEDCQkup2LZNoo5jUCCQtLNmnzN1hfgaNNeVc6weRY8uxfLSwSSX27LQNso",
  "key14": "3GrZg5wrqzUzoFa9G2j33B5nudzL7saBvqpAL3vj9QurS6wc23jWemMhbPV5X27eeaU5JYGDuCsqZmjmnwNnUALW",
  "key15": "mS5VYS5pniWvzRRqPT9FYXsPK1hSwhnhizpb2ARmBxftuPPegqbfF8g8viCUBX66pmqKpwmyaTRiVNNvShiZzeg",
  "key16": "Rqj92a9n4hP4m7kpzKb3pWqdqsBZrZiAucC5Ea7wkrXK9M5DBzGEZARDQJ7b1Y3GcR7VvF4Pxji38Y3VEo571xL",
  "key17": "4DSehNi57J7Lzumhwt5aU4pV2xQvbcTAwhgY3zyyMF93kvJ61Np8g1yN87KErUAdnEcDG8szB7hSezDPvv2VGX31",
  "key18": "6CzFkgGVSUxrSdZRY5qw3E8pQXnbAtw1n5Yihgw5zavWWoZCLeq6zjaYfx7ZkVaMUYAuauB2cfT4Cw2wTmoyAzM",
  "key19": "Aqj2DGUHHwd7FrqkEU17ki6mtMKHyWbbY1mryA9fhqBaRLD67uBDo2JyEN5aum3V7y8zXmLMjCnrdvNcAU8a9ag",
  "key20": "Jj3k5erGXZc3zH9JPbBpoNYTUWidCXwvk2dAcz5vG2L3TZ1ZF9WSKbi2sCUehYUNFKYqa1sLQd5aWEkDmhWBct2",
  "key21": "5Kkxx3qrCXj6Z4ehMHhrKy6VLJCKCwCq81gz2BXVyjt91kdQLD6EA4bB5ft8XiPE83obf8eBbeXGuihRS6oYE3xh",
  "key22": "3uVZMzLR6bY3u2Mw5LCaLtNU9boaYvTSq3R5rKUaznQh3XRiT5XeAemhDt8tPLiveE4E4hFTCQt82Nr55BgXKsPY",
  "key23": "2iBEArEKoxP9SbrrzYxkyP3QRkKKrKSSriD6c6EZPVqGXfkEs3Cdjqd6xj2cWLdppKn3Ko9LSzC9yUFtMY64kmcr",
  "key24": "4eGCybDNwECgDmB6oCvpmaD4zVQNy44ooJDXacF9HjdvGDaaXKAJPjbsGgB86X1zNEXHHjeUCVzAz9HhzQ1EB2pc",
  "key25": "3zLH6gWdQ2gYoDq4SLEVHyg8QvPPxTGaoA786MfoLJzjtZcChXiDVCeuVq1khWE1uJGTDjNqMRuE7HhoDcScS6Pp"
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
