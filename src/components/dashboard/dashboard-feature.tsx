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
    "2hHtdGCboRPor4yGne2zfrMm4BRKMfosLAZzSr6snhCx5ZBsWFi5SnwdUomYrtgqcjb2KmztyiW7muQ454aJidhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ajRSnWefQRZhi2VRZx4rUi8qmdRwrZM2UTqZmSV6yJ3MsGctEiqDVik88KV13bpujhHdMqRpz26gYGbDdeFuZk4",
  "key1": "3RDPZ2HSu8ovb3ecKsr24PNPpPvyuZ2ktPgJEp5ob23JDCS2zuhmiiRoJNAfy5Xp3NWmSbcUHHDn7eiqPdFGgb1c",
  "key2": "54vHhZmvNowi5oeu9XwLbnBm4cufBMbMq3aG6Am7wT22xw4DBsaP8vu2r3LqrP1MnPNMi44Coj4Rzdt1yCCNydQe",
  "key3": "MCBG67RY6C9HuBfYmHQT582SRp2FRTcucB4C4UWWuZacH6tvr1LaUqvuJ45VhHnrRuKUTkp1FS5kxRbZDqYxQvi",
  "key4": "3qg9rW6NAnGkZcQtFSCvzzcmYA4eLF3kqGyE87UhyCvDTSAKwHJtkNxpj356sVsdtQ5Apeqf1AqTxkhtvYG2BVpZ",
  "key5": "CAgR9DvcRcfVkBxeXxBjVPpQ8LndB4K7jrfpGmcQTh2dztXwHtdg1Dey9Q2uVja1JjtFzRLE3By4Nhr2sCB6fYu",
  "key6": "ZHN2V2JLBiAqvdMQutsWbTsorhMX5juyAouYGzExYnTxmNypEeshnTG5Q5xgeiD7cEZYXf1Fq1cSeFycxa2GrD3",
  "key7": "4DzsAis3Dpis4XDF1r4yGNiKKbE7rJyvaBhKDYk78GkbAtXN4vJvHjDgQ1B4RhUmFXk82xbyeLtK8MKmt3qiwQST",
  "key8": "3baioMofqqymhCyUztdUXQJehwbVk7qFfEqcbqV7HFWNzuQWhSuQhu7Q6EwPZbuQBw9Te9EMGy8Lssi1ZVHHgHQS",
  "key9": "37Zsv8fd5VowYVJtWjzDi6bh76keCQaaHkVRPw449pUPfa5dHqPLH8FNmvQNorA715oJU11nAJdpt3HUucz9zdys",
  "key10": "48crNrDV2SeKZcoiYtY7QofhKARcsYTqsu7a7yYh72wEx1KTcW8xP4w1HpxGxq2LwnSJfV78Wfz8cPpUQys3vgmc",
  "key11": "h9XsUVQ3TrXrDgc9u981vacibkjCtMQ71cfKZXNGCtLufyyP1r7361mYoTKu9reC139WRDbEXLv72EM8yVEfTVA",
  "key12": "4CMUVxc3PWszSBKRnigueLTBfaLAZckHk9vxEjEtNkV3pg7UCNZGhefjpi5HByxbUuGgaPnh5TuEhYjNDyZSPiKP",
  "key13": "41jK3HznxhCcdppWUtfHnKzuwRJP2xP3nU9ujdcgqebpQ8Wb9DXZLqprk9ESRJYcdAq5SG5rqGRqCnzMdb8jbzmJ",
  "key14": "5MGGNRhyGYL1PGmin5cz2cwPAKjX6igWbTXY4A2m9reegoC4BdrkBSk2uZqKMMHe34VUXEVjLED2vfnEDjqtHhYg",
  "key15": "2ajPgJrD9hEmPuRtcQAYavgxMmBg9pc9L8vNAcaTYpUkXLfe1kDEsq83hAQ3DuhDw1ZDMrfMAdxHTPG8ja1bmvPw",
  "key16": "2CtsEDF1ZGT9PPk4TVKhm9kUmmGkokpDz2WgKtfbceaXwVJr5xY6Havah9gu9EQ81GhK32UjT7ekUeijBbFLAX5k",
  "key17": "5mYf1sarZiwZAoJEwQitJkQjVJS6Xyuq9ekNxpjkJbgke5YEKia8G6GFLGB8yqYWojcxmdGSw3mDh4oznnm3ajmw",
  "key18": "2wnXG1jixHvVRDhkMVFFEGCSWpYEpBQ2h1ticz9uPrWs8GksLzXg2cWcMaJGxXK3wobpLPJjVK8KpGSJiGLHAbP6",
  "key19": "64KeqsoSCmG4J6knE83B5M7ffrynudwUpLSH5EPTMv5H4A1BUmrocdym2ofrDaFeM7BLJJoCvoJ7nXahS92Qzq7Z",
  "key20": "3de6XJwUxLjWPA6SLoh9n6xmbQWYn5Et9iCthFA9cattX2Y4X7GunSPWATgcUUwc6bqcqqXF7wr52gDzfCaLP5No",
  "key21": "2H1u7c6X8fnT2m5HvxcGoDNrCr12u4zgDcNy9cErhE991SbvQj8CuixTjsXRaEygKVnYnU6h3ZXYbfQRce5DUsFE",
  "key22": "5gVVGRTgZQAo6t1qSvjB6w9nbWZLaMm4XfUwBaAMFAew1q2upi3nbZdULsxTcMm8DPcV8REXzvRYedSpNT39VYPU",
  "key23": "5F9gN7CxQK961jthNZJUXYJwaYENcFXww94YT1Ztigm795ah9z91wnWehxywMYcP53XrTbeSU4in4ApwRaWF9owi",
  "key24": "3xByqN1ryQBjJJLN5PX8BcpADNYBNZuEzGCcSATNoUxUSgs8GPLCsu58f3UWhGQEaJLmGJ3u31132rx9iR4zVruo",
  "key25": "28S1fZW73aNmUxBGuZxpowCD3kNrGWt98B79s88gSsi9p72SY3VJuV7hifBqPz6zGnfF5KWZyfya24oHgo21xm7x",
  "key26": "ucvev6EfH9JvPuAY2hzTefypZTJWTMaP91NHLukwP5ayw6LNXLD2QPZPNYWsTrRqJaU1NwXQfenRwWadFYVotyQ",
  "key27": "3x4RcUpi1tXpxLLMr9XxrwgZHdzWAR48A4N4rdLQfnXa4BQwp9dnnuTUX9PhCPydFyCHxHsNTmBvPf47wGQviTgE",
  "key28": "4heiUZsrkFM5QiFtFynAnXEdTuPASPiDjkmoQZrRf3525zdkhYp5RmappU61KppnvADmQ81hpcEjPj8dFax7kZxs",
  "key29": "4RXeKLAS5Y3Dfe8aiG6P7PaNhucqKjVhLHBh42yNmrM8iim6RfpD1sEVUkzFFWRXFiAeU58yEViYLExCWz3srYp4"
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
