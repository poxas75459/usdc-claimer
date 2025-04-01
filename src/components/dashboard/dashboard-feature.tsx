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
    "q8fDETHBP5pxXtnuhG7MMzyuPN4ZLzz6JPuWty4ufPwQAnZVVJEiHq68tApL6CZoHmk9YXgvUvYRPf7JRujduFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYXqTWm5bqW5j6ZnQVWnGqTrpyvYqxDdh8DVCdgVnz2aW8ksLekro2X8kLXqLkcCRvUggJonaic5jn9ozY5v5QK",
  "key1": "51Pvw3ukLyhsLxDQLceh2HiuJsuVErvb8AdMPcZzNFMbQBfxWWZcSKRdXPUvuAoaNwG1x496pLjfsEKbimzp9ugH",
  "key2": "dESMUCi3Vs3j2cEER1c9uQ5ojDNP1DSmER4EBD7K42nswoGyoBxHhvfcUrasoEGNqxpBH5b4mey3A6S2q9tmvcC",
  "key3": "58QnYdak1g4fhuLfJKRtgrBTcd7XyrpD4w7eAi9xKDEoPLpC1m7oeTavnLC13MDfWXrgFoaMsdCk8wCHZkVrg3Rx",
  "key4": "5UfpX4Ag7yAQvd89BBd13nL5a2oun4Q4WKNq3jmXTYQpzNKmQNoXuqZakkeBjfKvHS5p2TYKnSmrnNYjtXKh9qk5",
  "key5": "66tZfzXcwmb7FKspj3y6hSHnSUyF7xmWJHVmykBRNDW3rFzyU9XBU3RvvuuffeLpqyB5U4Wkh8ZiQpD86moLQZ78",
  "key6": "2MXNEKVXAK6kXvF74aqmtE1FSjSSohjJjojEnU6zCdzaKYiGLbUFKTGgw2uNEAbd2NAFAinh6c68fCByHwmux3m5",
  "key7": "5CVc2CFdubhT1u9m3XtPtwt961C4qqJqUxAdGfpQ9HYmRH3nmZquPYb5QrJeqqzfhb3sTYjEgoDZraF7rG4sXEHX",
  "key8": "5Ga1SJnuZk9YD715MfCvt13BEUdNJPPexrJj5j4HBMzMnTqC1M2SMAuaRTU2bSzmp967vGrnZQwdYmuRzvyDEKBd",
  "key9": "xaZNbAvedMtdHgrSWc4eBjSTTbTDYadmNyV5zE5a4nEP9Lw9o59VGkQSmWLa3QzAQc73jdDJwkY1aTwLVePJXtb",
  "key10": "3gZ6f3DZYLahwv5X9aAyspVTDRd21YTAzzs8bQQorduaTuV3WXkRRAMLnnT5t1roV4Nh7Wg5ycZVJre3DVE9mYra",
  "key11": "4o838n5Cnri8keXVcCQhvGKgDcFCsZTVDaEiRgq4EVyVg13nJ2KwP8cdWL2hCtNEN5oCNfU5tZdYhqRRaPSS4G7N",
  "key12": "5NYLyrMcpb611SPK1gAm8a4u79FnRyp7YB9Jk4GZXHhTnYsboVNb6Hze5vTF4TP93CQFkz4tT7HnF9hQjKcBo1T2",
  "key13": "4bnBfP6PREqCoprnVAiXAyYz4bEBkyigd624vZyXRyMCNTYuth5QqWWT1TyS7ds4JwvXrJ8CaUYQUZrDo5gTUZDx",
  "key14": "2dReGASv3SdVfk9Q8BQxjawMxdpb68rUyvSN64J3Lf41Kj5kL6YPrScoNGknWei3oNBCD6rxS7usc3yErpxudqBE",
  "key15": "22uzYVnSggU7RiUwczKxHaVPXHChXJYyi4uPzyzNjwteovRao1KJAVrcf3w9xsB4L2wzTFRsXcAhQQceYNvX2tz1",
  "key16": "2GxJJGQKKxzCbZKy82FS4NBWbX86VRkKd8gifwP2UgAjT347KKBpC6T7xyoBNUqyxdx9JUcgQpLHXY7PCuxW5m1P",
  "key17": "4pCdTzAThoRwSM7TfaU4FbJAffhXh2jCCmcRXkej7vu7MEyYb8jPV6L2g7ibGxVuAdNKLuSW1FpQvF2gkAvm8Zi3",
  "key18": "65w3Bebpx6P6VmBseWoZV7duQnaX5G4tZKqhuCQRFDsCQxuteeR3JxpTpBUz3AU55j7vh65HQrzYrVSgqzfkaoGE",
  "key19": "3QkT9EpfAGmp5XbvJeNB28ksYoEPqPYroKc65ubMu4MaUAEycVB97s99R89dXoR5CHxoXH1cmqRzqXxzVMudxWwN",
  "key20": "4VefHbuPLY3C2uzRTojxMDhGaSMQmaRDs1AspdjU7W8DzpuJpNny3zApwSi2E8FEtgWu2PywPLqd9uCKXbnTXABZ",
  "key21": "4vWk8wK1gHT2dxwYRobR1RqBismqdQxoFsePjMAtAS7L4hxBFaRWMK7bj58ayVoFXuk78cmzzg3bMWkAxQ7jeGrg",
  "key22": "5bPmqDQ1FzBfZ33BD9Y8LDhFtJH2NG99iudvhuUUcbGeo7jv7X2tbxEgQ3QoNPLWJG2oNPh4XYn1MEFnosCZ5RL7",
  "key23": "2amdZQCwGEjpYrrMMBrp6v71QfURacjNZ6KgKDRczpQ41QzAxQxFMyPT6NVGv2PCV5DCvNUJ2T7SGBA1BdE8h2Ca",
  "key24": "5Upq7cGFq3qCkv1e2CbMfBfDsUoq8unLHXeGyTux8h4VvJsJtiSyxscMdAwNDZWLqpG9xHyxT1hXHEkaJPyvyGF6",
  "key25": "5KdU6jSeEEhKe5iXg38PbuXUyHi1KAtmk94P7xaUBHknQbgoA9vBAgQWRgHQ7aaRhrEHqt3WouNMVHdYCD8mCQxQ",
  "key26": "yqdHHtR2qtBNCtLw21ioPf3sEhbugBDnNBYxAxnApFbjsEnpGrexCboFAaMUG41nYkTuuzj5Ekh66f3M9ZsTDM3",
  "key27": "4TXA8KEPiH6BX2H6GVbvqZYHiDozZDHexcHTKYGF9bMz6t7bX2h4mAtg7g72HbFLwT2QfR3a51sxZDMuxJLeXRT6",
  "key28": "4u6VShVgjeJ12nyJRL9bPuGoB2koJooBAQ6tAw54Mcr9EMB1eBhp5B1ErcUZp9MtJuomZphdHGrV5RegSCs8QuVi"
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
