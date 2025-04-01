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
    "C9wap8MaPcgpWrToBmxSQ2THL5DitufonJXdWfcwRuSbkH4NgDQQ6QYGHmBAjtAcTxjHvzpGeqTbPXTXcVMqX7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RkAh2B4Nfe326LPHqxjaa8KW7RiLcSJMHLnDmxX5oYYgXUbB8wfLaxwm2o6RmZWcPzswFu5dEbFX1usuLHomRZH",
  "key1": "eoDXsX9hfLk4Z6bdx2p8i9JZpbx1Txm1a422SFqpphrTxneB3qxhCqjwYj6Zd72veV1tBwfVu1PAR5F4JxoS69P",
  "key2": "5MHqDMEUPZ9MvovLpguDUe2bLop435EzagYyeg3tLTkA2ex3dppNvUG3YnrgZboGhwLPKGbZkp6hrTb8cyzcXuWe",
  "key3": "45WiQxuxLhhjPiUHzdQBsY7KUiG7gpVf6cxtPFdkJFBF2LMExhfq2nArEZJTrVzewnMt1vVJsVNqQmKNsLp4XGp6",
  "key4": "2N7KutVBBMD9317NAa8FXhrjvhJgCJxC8sdgNxYezwmYuecdWg5B5ZEiDa8G8avvsfCDB25cyKi5MVV8vtnbGeCr",
  "key5": "yqGCryhLDZEQ9q5B4wMgwZhMkjWhLcuBwkuNZUirq3MKwQu4LtD5a858HKN44JijfqfBPwnka52u5SGZrnH2CBh",
  "key6": "5m2QDsmTXgEKb9cpMuQ24KBECzKkKULGdYvSJnm8RrHbNntwU69a5hhaqkxE5XYh9bnkKZscJNLvqhvkgFq8y97z",
  "key7": "BiRYoWZ5pRyM2bMZFHiVY8cRFFUBsi83dN41Yw4V7Z25yxHkMLpmY6yxZLBCh5BUZmhYuNPaYUhRRzRk6yUfxms",
  "key8": "53wn6tpmvErDZC6RwsYcGoESZtFbHMxbUywU2fiv7yWvkJUnq6dCR7tuRbmqAgEnXAV2QZSnLUeccKNaAkPFWbNa",
  "key9": "4NC729J7aerLHA7TohrF5rrZqPy5QiZ9JKGHuP2MQEsjRfEvUL8GXV1tkXoTiuqBuo9B85KiyoGL341P5eyWLmth",
  "key10": "39ca6hzvFrFrBMGYBtGu5xvhzPcxURFkyxW9Ve6NpyBxRpPcoaR2db4T7e8VPYoZJNKTMFEniEmU9xxVGV3KTC4P",
  "key11": "2cjzdS2S5ZD9Vy8kiRgQEuEh7T9nMiEzBAc4Nud7WtmiEUAd4e7e5stiDoJHoXcmYQrGzAssreCoVpaEfCeuXznz",
  "key12": "kLbuZ4qNzprpQES7ncER4NxnEYS8jCLYTibBBcojcJ6SYtmEAvwJbuNRc2LWuFucMoGxPrEYrKvG3WnRYq3h4tN",
  "key13": "4VRtm4Z1eqzhNKKyTFEXHWgSQrZzVf7NLTddwmRZEtQx5JAaGLALk1WtiYMUnN6xr375g9YUxxWkZD8xhQhigvhd",
  "key14": "5oxNztk4CAoz731sFQwzxaAgHZUXTT3Udwd3eBZ3xNKghcq25NLhgag3Sc3hqFmN8cRgPRUENghQud1a9avoWTHV",
  "key15": "x3LwD95sbJXGNS9dGZsbmMwEtVJFXhpkvqUEUqj1jzhgFHUWVXT6BvkfASAGrPHEk9anHna8gSQn9xUAThg91pt",
  "key16": "35BDjYnY8Wf2t1padWzUdZfeqJTjjUGy4RQzvyWQ7dfeUt24rfgyXVD7ARnWfYCJJrXVwa3x2oqWdBeeabcnqMnB",
  "key17": "4ZAngmPbNErYHSXK7gihisCP6mtc4Ztsy6UHjV4AdpuBshTzkouAnH8EyGrE2x4f9nWoGSvMbCGTNUDY4NsSPRAa",
  "key18": "3ZGnUr7vENRKMGFh93TMnY7fSPcsEqEu516oeZJvrW8TKw4E1knVqhXTiTtf97d5yAeyu4jF3nxF11hG1ig3Vizq",
  "key19": "zQnTBvMYoowayk4xfpRU8uEn53Nm5WBUTEtgU5hguziPGQCRLoAihxTvQRAzMzmFDNrhPAKSZdyzUvwkb28SFCQ",
  "key20": "2ZwFPmedmq7zKHQR5JKToXiJiQf7QRU9YaWLiTVkX7CeB4TsAdeYFYt5okF3JKFog9mqtS8Yq4KubSMe6sLQTuW3",
  "key21": "4SPtQSr3qDHW8mSX8BmRDVFNrwYUWGFgWn7u7Jbic7n5JTACPJhxfwVT3iPSeX25ADTn2eCoyh1W9WyYpjy2CXfg",
  "key22": "4nzwcFR4KHu5DtzkX8mVMAVj8464MQMkP6VESRtzzykPt5uHFZrXqka23Lk5qm18Kad9GKncrpVhcYV1iwzjsofx",
  "key23": "46E14oduynQyNmknJuhNvh57xY5ZSQ9fLA1x766EXK8QtMAnoXsk7sq7kiYzQHXCboEi82PHNiktZ9oq74mZjq9q",
  "key24": "3FbSfTDC5PPF3R2RnquviFbDqf71RTuEK2AxcycuuEfwDFSFgeuo9wieokMLrtW2WMbGrYPbrk7UzHXPqSWvMBai",
  "key25": "mhfBh8xB3FVhEvE3cpSXRTwkVLXYo8sgeBkUEy488v9CpuSQhxCxPTuSiwvLN4rjQjsWePBHLtofubCbvhsMQD4",
  "key26": "3z6rVTC4fEkGtLZYEDeFgoRj1qYJBbwFDUFhWE7qFH1M4NbZB94wgcoe7HhjXSXowtSU2GvGBxWAwUBqQh6TJ2ZU",
  "key27": "2Z6CgKkxUco5YL2sxFbPZP3gJwRjnRbX1rYpz4Nqd7yEU2nXThiSta6vJY3xxgUjbXdSZc7QHvVTpwd1yZLUGGUe",
  "key28": "3zjmjh1jotrV3hcexdSbt3iUFvDEryMuAnt7L1s4GKLs9CzXesEEH8q4uDYghzscXXqEpSNaGgqwW31pYJSPFM5o",
  "key29": "2ziuUXG1FPXzL1hz2zL9YRsLSqXx6kHLjED3FNZM5ayKr64m9ubEjXjiDRn2T9SX9BnyzTMmicC7cP9D9zLmPREV"
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
