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
    "3V2rHf5nteXjpj5XEyPHRiw3kR6EWrUMSS9Axj1c2DKz5FeU1dHSgq1ZxUqFDR8xyPJEaraXMuTsh492juzJynK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jTVuNcJ39rikacZFuGcoAmUz4vYrK52tbw7jxj4ow5PWS9gsHSRbDm7aFukPYVQo4nquy5ACGmA2NjWrwXSovRu",
  "key1": "ajd5ePLxxKeeJC3LXo3p8gD6JMSrmUj3gjr97BcCUFq4YgvTyGWVAxovv6w18N1tG5TjVGH2CrrEZM1WyXfmweK",
  "key2": "4SWFZMPPEbypvEhzxFxTmuXjHVELsSnsGyVUGbaLiAmbq1yZcCViW7CZwyjPMi178sxtU7CcZY3CucW2racFkafQ",
  "key3": "sEopEzww2ivhaM9yKGKSH1LGiFTXsg41CxW3dTLMGWN1u9uxagGTKAMZqa1AZpRoWxred74sfGmkyLzrVAnHJx5",
  "key4": "2q85vTYov9Etsqg37LFdgKA1nPCga3fCXpxSVZjVDGvdxJiKQEnr5uKydo5xVsBKU8VgvDit9MM3BM3NbexBJS3v",
  "key5": "3EkYc4sdcB2VQE2iMcaqawh1PSVBdXZ3L8TU9Hc7gT6F2dDWPihSdPbZ2Zc8aiEAkJeCFesvUfV2DiuXq8soKoVT",
  "key6": "2eL1uCQepeexuTKyDUr83NCk9WUNEiT5o68S2a4kbDZBRhebttKCrpaatYiXLvkwkf9KpcNXq73YsLSgevHFmJXe",
  "key7": "4BNUd9jPUkeERFNDjPny9nLhgsrD5iukWuBjz57FFz11cjtb36oSGes3NEJvfFWaY16aVwU8cXKoCounBqJMaTfp",
  "key8": "2pCQNuLTUnct2c753b1axpEoVxTSiuBXKr9V4TWgq78XTWowCbDkhyMFUvFmgNxFJzEyQSpQHHAbxvHXYySXqV1o",
  "key9": "3sZAdBEyWWnJ1TM9AmZJcwmBXsqtCDw8H96KgfzYB5RetbWRT8wssCKV4KwKtWMYqJHiqmg4n7cE1Y7oDvTjCiHc",
  "key10": "2Kh67R6h3RwBH5QEun2AjWLync67KgV8wzKfmPD8SkLxxef7AaXcm8mu2xcbChTvmwCXX3Ky47v2Tv6T2YDzuBLD",
  "key11": "4LwZgiyrm6mrBE75UJbXCCg4GiY8TEouEL1RF7FbwYKBM3ixeBUP5efYwU8YfeFoEGwBjBAPE46VKdurywkCrMUq",
  "key12": "ChWmDXfcBQunKpQhbJZSn2MYxBMYAeRSVARMMWuY9c9SbZvAiBbWgbw1LAqfYDe2nHUkR6jhavT5TVSQMteSzES",
  "key13": "46GrdGs2qk2P5EpiKyB1Jw1TPwzKP3fE6czU5GMM5t1Beh9xoQMaEYqBLarniCnL7Kkqz6uSbWUVpXQUvhvSdpwC",
  "key14": "3zAxzknf6hMQuUtXKFDrwFRcSQmJnn8kQv91ZBNR8Pmq2e1LZkfRewpSnspqp2U8ewiQYv29RdPKM8uWPShJZoSR",
  "key15": "5Xi3UwchGCjSZVZPfZSDyuAtW1cguzyeUCgTZDDS1KE1LEX49SvWJvxSdkB7bzqBLRWe7WLVWiNcbYrCun23Kbgq",
  "key16": "4zVYfTuKtbsCDzzKYDKGARYtgcYNmYAajr8uFTucLVrzvMtzcPjq11DoGghFXgfccuVUeaBEyFU864SAdNbv1CCW",
  "key17": "5ujBPq5hVaY4iPm4jGfje8Moyx3jmG5JyZrtfkdeN32UfRgxxTDC6ACwJE7H3e3hUDZJRoQZkR4n8yv8HeeUqocw",
  "key18": "4w3oWwr266GTbtNfHzBUpf7AVtb9B5Ah9ENUkk5EcmXanH88x41miV2MA35e8PreSBz7BFLH1DHv4sK3sWkfoKjE",
  "key19": "4kuZWRXfpvYQc3ysfgaVfzybwkQUkKKCY2Axv4mfmNxrjmqprJ1Z46w9Y3X5gqqve22T2MNLugAVmtCgoMrX1G7u",
  "key20": "36Qg7s4fh7BqoAJWG69okraF9Cftzuw7WY9h27WDbyZeNMRCZaz2gUdiP7MHgH1tPSTZa6gdNT8CCuiiYPSPuC7a",
  "key21": "3hGqYY3joPrhoNACDDJHJ4LErhCJ3reLLndpKY7p2EUhi6anzY3iU2MK1WKJNLVbRTwQL2YjVNdYL1Pys9wFhX44",
  "key22": "yZr69brZ7baqEhigznj3AazVg4oqCRuxmqZ4hGkZo5kyZ7tCyjLvwrHv5nY9GUuXHSemfemMUTiQtrXEh2YQ1ax",
  "key23": "7tEX9HuqTEncY9EPAMBfeuC8tjSsTF1dAqw8L8mBbR49HfjQyjxW5nRFGvg1nrs2rXweUrhmt8AE1MVA7EQSQBe",
  "key24": "2CCtGuRSeZzXKnR6odNjJ86ngfoeBLyKrv66SuaHvAmBnYyYzac5qS2JVForVv7yjySKLFBCQdH23HCz8DgRuRrK",
  "key25": "DZ2fQ7xRbySefZkdCtFor6BqyWi6TrV2bsCiPFpZ26E1TMbrPVymXhLSXz8TcRd2i5VgTQ5E7cGeL3M86EJuq6o",
  "key26": "8frtZttgkvWD7u8Yiu2mWwTszw1J5kWcK5SRW6Vufrz6kocVZZ77yKhqxuan7GnGjyxzWaE6EMAUZrHy7rTBEzk",
  "key27": "4mz7Xn15ygwhcwbEyH64MnjdWnroRZbAPvzRWumRmVZNuC8t6rX4DEd5weFBt2o8JVLQLgVLJo5g1hvKFnwEymoz",
  "key28": "2pd2PThkw2Gx4PgmoGYU43qcRpNMhJ1z4MfRuPAjD7toLhVU3VfN3VVLH9VxL2xD5ZSeTzqeQQnihSmw4piYCDSQ",
  "key29": "5wGRpm8agfjWUdsL2yAhbeRYK4dRn6CKyNDoQzoPbRsTTHfDKS4AWcAvgZvzbdbw2QRat1gazH4N8jt5uJiU2KCs",
  "key30": "c4Rq13RaZzaPQsznFarzbu73cAbwU1jyesMc7LyyWRpQUqgv96v4RfxTTakHvabPpzmC9xRc7NY5TPvjPHNZaMJ",
  "key31": "62X6ELud1HGrtjT38NG5TRuxbuiLrnstDLXjy6kKYghdWLXwSWfwfrcysDmFvNmgkBcgnpaDizbSi51ribH7L9QC",
  "key32": "5z3XHfn44Mg7ysNhK92aKeDHifF8uQHU5QsKwe1sV5az9E7JK7nLRAyESpD6ZsyA73KnbbkvEUzDHd53fWCvf6f",
  "key33": "526FM4WRtoXSZiacEz1rv1vDKuzkTgXBMagnyzGmmuLaMuwJfpEdHsbSjHCdna4gWaHtCFryUqUDL2VXGqHsZkfX",
  "key34": "2LZRUFkm7Uv8oTS1BLBejWFT8Ksa1Y3t7ZSrz9ouCah5i9EjPE3vDu49mZVMDyPUkWpgH3xhBbCpeYqBGfz1fbiY",
  "key35": "J8aXUJxSFM98pf5WQ3NbkNAreujY2HCPtx399m8GRHEiDjMSQfQjxvi2MD6hShbDS4dEBdX28xxjex4NJPFHgry",
  "key36": "3HowJAVMiqWef5pehkeaVf3RXEJ9eGYdhziHw4QndzJBv3esiZ8amxhL7jH59FqfkebDGX9QpXDwRCJUX21m45gD",
  "key37": "4jmr2mLQStB4L7z7SnQfWpdvgWzoKorqAxu5cg6HnPy4gocxBxHDcQfFkNMbhm5FGth9wuvdxTyR511AvdnLZGtq",
  "key38": "4wcimdYeHGa4byV1RQVcMB46JkFkJxZ3Cm2ouxBigAVk4TvQhj89ojeLtKmyfep5eBqDMrkhpipeg9cDHdmfXAU7",
  "key39": "2TPEsBUKjeur2QyLP8FSn1qkWfAkYjAnBxhZFgz23Mo16f9kiLmNPWj7dG9MDn1U7J1wHVQMh2bCRuwEMr8cKF4i",
  "key40": "2aiPt3aHDnCiKZS2y3G7HKhFpnrQZZsjPNLYQqfnFrsMZ4giV7RSVWwoNstkKJLrqDK8DKXtLv9TW28PTXJGLEhL",
  "key41": "64T4ZjXoQZ4HUseU8gHhwTm3oQTpGbN51ut9wCKdauFGWCCazC7kX9cs5ZKR9NB2r7iFhhPojmYE9NLH1Z2Q6L9f",
  "key42": "21KsnFNXmUP9iar7KQQTM9pwVc7rg4B2ypLj5fYgLBLXeWdXGZmiqnPHNANAyonMrSRqd7JAxiF298TJnErdoquM",
  "key43": "3Nd4BqVbvg4RBdJDVpY3W6mNkv6FPkEERKSUQPAq5ei3FZx59Mdct8DGSoTZCviS9mLhfWxDJKctJp737FZ773Ey",
  "key44": "596icRJfKpvvQVGHZmvT2mGqy4pWdp81HpBPmTBPS3QvRLPRBCFxWw241GBzu66nzxSgcpaFvs9vtZwHRk9pzvpF"
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
