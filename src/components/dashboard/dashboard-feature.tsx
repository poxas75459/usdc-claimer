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
    "xNcR4Jkr2rdzsLyaS9gzTnqXKy8CPTyBn8M6zZZ2a9St4PCtZ2AGZDwyKgxeaFb9EyXw9Nr57BAc6jQQ5G8hRD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y845HBRVaF33HAeTxy4wAPphhwk1EW37xrqLbUr1Gonut5AkUy6AFFREQ8ntR52BPA616cSQoQqCh8tYJ1AKpQB",
  "key1": "5QAxPk66Dq5Y588su2A6MAGtnLjkg1uzMYwhapj3ZNYfk2DAf6rvJEdUzH875Pdyu9nTd3DFe1vsbxLRacS9VZV8",
  "key2": "5fzm2fzVhYaHdv3JhrQrksUPCYWrS3LBmpsppc4yxhiJ2Tpu2sP7tJ4G5cPxkXbHRezCMmJ9EZp8J1RGXcTdxxPP",
  "key3": "2M8bppQEE5QsTCzjYnUWzdEAQi6wkNK7iaXzWMD7iMibD2XpQhneCaEsZmcUmNTxHar5hxQYbPZMSx3sE2tvf69i",
  "key4": "32kDXdi5MpjvEfCJR2nXhECXXKVHBV9nemAAM26MghBhc6U2t9estBAarTfLcPBTMd8LjgSKAPSnPLLTxLHEzQJE",
  "key5": "2qhgVVj8LnWkYx1aZ7VvgdgvkbpXiJsScBMS1dN9zTGW2PLPhm8kc2zmxGNn8jKv6PTf3VYC8YrU7s6Y4jq5i2cp",
  "key6": "3pT5Yfa2BhWyPxqYCSoFB1XuCmgykaSoCRZEDoMyAZ9L2DfLJmvNEtNBZ4EU22Q5yfFw6XEzQM3Ht9TVo32Xbfn3",
  "key7": "5wryKjLnWFaCbMNdpvkR3B2UJv9yrWC7dVgQHJj4JdCjwsoQVtZRZoQCRhD9ChFPPBZuCx3ByrNmqDbTTB6oh5Br",
  "key8": "3xA4X3fyRX1btVogTZNHKuY8kmoHQmRMzFogXzHPdioty25dTjrKkYNfzNUDMqYtzwm9cEjhQju6yCE53usT1mHQ",
  "key9": "ZqBDs986cDu6NPRYnrCgWSTjCU5SGTAnDd2EyxVcxUksWUgaCW7nGcm7zvHsajePh8XTAxd38CA8jcHrkvvtk34",
  "key10": "59C4x5dfYe25aL7sDqaRtoeAkzsd8ok8GPrL61BVvHMEVdKeAia6oxbh2T4fYneLyAtLbN8jGVRvyUmjzAzshfMq",
  "key11": "2qfbvFHxteQooMeXr3hR4w8U8ky2aoP53SVQ1YY2qA4PJUN7P1Y3MxFbAnr2V4CU2AUfvKbs6RsBsJzDRMVnoGwV",
  "key12": "a4wN95TTmb2xCkQWD2Xbx8wGkzCsg2UNaB2JYmDhkSkkG9m2Rddwn5CSHX2wv8mEwz3VExUWx7LQdnh4DDiUWWA",
  "key13": "3KLAcTpDxmuvi63MKGsfydGkGLYEpzxTNoG3ow6j3vVAwcf6VJzgZ67sJ4x5heDNUhzEpHdoJijKnFc4XhsyKyy2",
  "key14": "WYM5DJi7qNeGsVSb4BPA7EGYhSW85XzJ9FTAD32hcdBJeJWPe6nPPazDJQbwcmVEdYSDaAHqx4xXtstLyjqAquG",
  "key15": "3qUWkNAu2mBRyB5PiQDGUGmExALnBksuT2RQ5ah9vTSieB2BePKAsF8HrbDkKkT6s9bpVBzyh2XXBkkwWTHfoyXW",
  "key16": "pyoFpus9BebvpiC5YYw6JDmSaNSFChXvudUr48PettR4cGNERTjYrXhAr7WDiBeFPB4ePKpDE4ZoJjQc8u4bTXV",
  "key17": "5wj37PoEXkN39VdevEiF4TMDDXoLATmeAV3ECrRorMXFs4gXPdL4s7gYx66L2Ud3ttPGzprk3sS6rE1HUHaqjGny",
  "key18": "3spt8AEAoNX23SWeZJmCpzKDBS26d23SrtmCWVPbWLHQtQfwcZ4yQeQAL5rFU7XL7sSiFWoFgFs8ssGtusAGV7dT",
  "key19": "2SwA89fJQAdJ91YRemChVvMy9xbccpnEdLkL9oYA71Y9Gs3KnyeDfBkCQ2wjeZ4C1AKyzxNEUFV7TrgCnaeqBRMw",
  "key20": "5ddijN4u46ZAeirefUZ3XtZPksUXXGfbLumWF4o1hromA6B5b2nrU8iEDF2y2upGpAGTBwBWAa93wJSGVbvknJ4e",
  "key21": "2m5KD5JZsLu8p4RWS8fdVcJMta8STeAYLCU7Utds9ma48GHyvFvS4JYsb1jnhH4mDpdDir7paLTG1LJh5rEnRw8x",
  "key22": "BRYQHEyoe6QfhSQu8cr27aL1EipCq1ceGWk1f45ePgy2XxkPEK13WDTs515sGj4U6vcweoaKWABJgoec1LLpGNb",
  "key23": "2NAGz4H8S8BPUHGgg2s7Lt6w7ouHich5yK57Y4ktjd7P4WpJJHHwiJN6RaTD4bYyQuKLfgG9anFqXKVVWJi42Wfr",
  "key24": "5nDkAFfZUjTPhpMb82FYXqCJaTEJ1nM7zFh8NUNRqt5SsstYcWgoVpQE8a8xNBGuTRLKjQ9U3fnayfaj4Xh1vaaU",
  "key25": "4rjnX3hfgXBBiT8zVUFteJ99BzBYpTPhCJ4zXpBXSTVXxPAUpvt4oK4UwjNZ4L1ZkG8qTJsnx3qU2W83xgRNVXoU",
  "key26": "3yqxcxorn9CvL51GmKbVAXvGo3ZAyZaawyBUK2mTsdk8VSjA7YURPVWgrsAYxwnGBPFpdZ1CXRqNZYSDmDN4ByJX",
  "key27": "4AKigVf2T1XBziS1XF4G86UxnVsj5u78VGypQub4maK7cRTdQjCqqRXmuS3bcUa1Bfiqt3x2zgp76K2Pw7kojgzE",
  "key28": "enR7UVa25DqrFRGUH3mKzcx8YhLkWZpVVF3kbrhido8YHEcizDG6XM6EGwdxkACKScmQKxEz5wSYP6qC23YNoMQ",
  "key29": "CynDhmzGFNUoZwEioLLkxh33XfqTxwmZFtja29Ab8DTHWwfd6KBsfjsF76ZsErvFTXkAFeuHZ4qHdXvCV6YHHHT",
  "key30": "co4Nt4H7VfPksMovTCHGkEgikioJNEV8Th3fJn2abScp64V3RnKPCNpwnT6gY5BTALpAhdK8XZchdXcxDwveCei"
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
