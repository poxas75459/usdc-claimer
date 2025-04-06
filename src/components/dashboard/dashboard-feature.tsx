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
    "5YZbGuxe872zRD7NsxWPAfNZLEvhSnd6WqF2ghx7HZaWn1ebjXVRwe3dHG6xw4UNaA2YoyB7BLqk2wXMG4QiFei3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63TUV8DrgmumjwSkiqir1fcGqjfgZ1EVQL4MMP3D1yDDpdcqgZe5gwSU2BM1h7CehsFKMq82ExgXgXFQqTxRfYNa",
  "key1": "2ie6bMAdhkHViLW3ozF8QmQ4TzyzAPrH7tDinfqeniHB16HuVJjxwGsSug3pdnaYFMSbKZewKjPQBsqN6EtXEzj1",
  "key2": "2KqfuQx9xvsjrB2AfErAkmoZRsHojAK6VByH21LBELfvESnmSKWyK5VYr1cU8uRQDWbL9EeMcx6DSESGQce2EjVH",
  "key3": "2XmQixQaJHZzVksWFYhtTCVHJttswmKMxSTcfNqsVDHdWXMPAnKJa1Wjfv9XapumdUbEXJQDV5mQxjtPwgXoJpk6",
  "key4": "5THcAoXmSyEKD7p2kFANsCMwETaRbaHsDer2oVynucKU1TgCtuF43vq1crTfPyo4L9VcCFe1n8CB6w563hFP1jbz",
  "key5": "3gDv5itXVspeKAs8A9sLGCEBuWpMRqaA5eNLPFbCrNeoM7QCJ5sMvq5b1xQmJzSfBhqMrDu7kqbT3BFPFquog9sy",
  "key6": "4q69UGbqSwR2XK8bSPbe9yrtK4u96TAAJsEwDJwL8Na58umnxgcTRrR22PkGPBcVuf9g3yY55axMnZwRxfWvu4k6",
  "key7": "3pW3hWwz4vrT7cJACToCLVtsXwscdKnMBupnkgS1uiiXqk2y95TZgh8kMm69htAzQeuyzrMNdp2Z3Xk3P4G4SsCv",
  "key8": "5JBRpRshwoA2kKYk4nMACVKLB9Pi8oLG6JDTSt5kCsMm6NszZtkyQ8yL8L5XJaAPbJxtbi9GUvEwuEDff45N4L9k",
  "key9": "i176qYfC6JDTM1sHpvWr1cj7shdoctmc4gg3trXp18CPEtTmRRqSjLm8TdfuddycdCJXyjnF53h38DUu7Hktfav",
  "key10": "44KTrqHgwZd3B9cphDK4ft4QtVivHrQ7ZqrjvojeYAp1cxQz53Vk2cgSMz8WXW7eFfQGunR1fC1CLed7MNyYXojm",
  "key11": "2V6J47St6QnhZ8BdsMUiJqimKb94ermRJNt8acg6ZqgtyMeq7PpSFzQnJpbTuwF6akLeKXhfhSeiW5nWxr53Q39Y",
  "key12": "29yEXmaLk5Q4y439c1oT4YYNEjN3rap6dh4WBVYSEvU94osa29rWCjm7cf58YKDjvLEahcCY22fq3twbYGbGKJvW",
  "key13": "4EEVQ1t2WYp9Trhqp6URubCZCvFKsJ6zm8eginr8etGfeu1wSrAxqkZammYcxJnRvyTmdmHa66smNCzuJjuUMa9S",
  "key14": "4DWHkfUWvozfPtAV8oWZzwHT5rwp5DNRS1xQexekpK7eMQZtxV3YNbdHy9h49E26ZS35ULcKM9VCN8sXvEkDZDt5",
  "key15": "4ongHoN4iqv1itepQwi1ivVSyHM29UFsH5nNBDgNKXEMdizsnECJ2nWKiusNoeFR3T3RvVDkN9C5M5YkiGNLFS7V",
  "key16": "DpagUTpawsdaGM8qE261o9rsHWfQdxpJYjGW2ckHGDZShBr3dL4eR1UNQduPYRHX2LjtESWSGx67aHBXxfmPJiZ",
  "key17": "2GCHxkUJWLUrp84HHdxMTitFTbUeDrzZq1LGkSH9Yej3WjH2C9bd7sX1styXWa2JRi9GvDkVUvXvMtKBedavWdmM",
  "key18": "5ZQbmy7G1hPWuJ99kpmoKbDK7o6WzTbqC4axbgPQxpKQKAaK9JH3y8hbVVL9W3t4ZFpWE7oezBqCoWbpm72nphf4",
  "key19": "3Ty84aFV1juUSoUDPAoZn8JghaYYh4Hn1pBvoaRkiQmDzwFtBh39WYbWehpFAdrTMbkMw6kXtSDLK27nQiDig2HZ",
  "key20": "4imoukptbDnxGULhmJyPhpQufBDGcjohTNmBERacfhLwyLcvt3sTc6L2K1DjdC5JjuxfKb76c74ZaVUf4Ca4hoej",
  "key21": "zJ4zLiRoCvrM9eb8LejQUpkfawwpXY6eXgjfuo3mTY2nFVe8W41qREe1KmVQnjgF1q3ySZsqW25FLGH3PipGiFy",
  "key22": "3aFZADUFZjtUMNDLrYQPRi3BesyRG3WFAGTTuGuCUeGmZhDYkAwAbfCyK8mEoU7S6K84eDx8SNsP5gSEQiYNbdTK",
  "key23": "4UJTv7A4w56cwQfKLL5jPAJGWHtj7pvWY1i2tQ9mxTZeKNZz2fpmmam2AA7RpyN5gzaE5nNAKt5FHbfo9XKEPaxA",
  "key24": "4dTqzeXawHXW95qoe2MHhagNnvKyMFg1ENuDX6FPJzAGV6ftCWgFZhucVHLBB5HJQKsim5f4fq17Q5PtEHjGwxbx",
  "key25": "26oDgo2J5q1S7hcjDXRWNQgYan2PkpVrCXwsWDTwbcKv8xgYApdDMVxjdk9BvCt7Z9KiEMzofxfZXGFXtsqPz3wJ",
  "key26": "3QYNnUTe3WiPRocWdKXqrrfgd1LdfpocxTDoZNYj19jxXqDC9NEyFb44o9G7g7SMxykugeck19ut1EkE1g32JAFQ",
  "key27": "2Rv7LDRFwpd1YnFLC3db2YTHZXBEvnJB9jrajMP9WJ3ziPxz7iLcVUnmuArN82tq6wa3EtYegfhuCdugiEDKYEcm",
  "key28": "3WXDApWGm24WZsT5oVD2N2Daxpz8eYgvxKxFJ1xXPwEZ3z6LGwTpJSGZUQwKbkUwGxSu1j42TqqnkSUKkzA6WuNK",
  "key29": "2UirMM8YNFXKrAvJhpbCG1MqRyZzzgyxAhE3WFVscyMRwoRSsNZ4LmEo83JXstiVxxNM5ZApN9ZEUMQi8oZSETdb",
  "key30": "497ojU8vjMPKQuHGBBob3ojKqstDUNSW7NqBkyeRjst8H9ut1GoeH7oeVYZ2Efm8QsXztbtmrgcWpQSAK9nvHmnL",
  "key31": "5ePz7xdGwUR21hRsmJAXAiNAjB91Bj69Y9eaqcUjELAKF7sTcefveD86mXQXoe5GvXmjjznr13RLoa4wyvDJUVnW",
  "key32": "2UHXsHfpLbcqcfPqqTntfJaj11wvJ6ziUUpNfRroRUZpgywkDhTYTTNhBSNq64ESuLMDBgSQaAJpUnNcDxpB3usg",
  "key33": "5w8338DmpmmJSP6v6jeHFjLXDjEPSsg1kFZtHSjNgEoYds26uPq2NxwPQr7551ThspmKJVFxN4vJjm54NMqxraAf",
  "key34": "DPSSvTyootVi5zgn8dQisNN4W3L3DcVCMK4ajsreTUjAjQ3dtwom8TPfPZHRyXZoxrWsyhy8YAHydtBVzva5QAB",
  "key35": "CHyBTwAe9NQxXYixVVut6Z76D1KDH99Wfdq3Q5atPn9PXT83BFkJS5Y1GmD5fAL67URBT3RWMViTP72NA5RPyEw",
  "key36": "4mhjdi4rZFCibAg3MnNJaZPP7ryxASesHfAVXKM4yGf7gVZg2yzJegPRCWkpcJxF7XsLFruySHiDDHPGpiSGsgYV",
  "key37": "58pKZiJkwpiGGZAa1Fs2w6s4Q4bV7Ni848o3pNNKdGdyoTXPyEu2PfKtkYygmbxrbwSdx7vVhtuy1ikxWsnyPXxq",
  "key38": "5ADun3PbTHWLo2pwfd6RvRszpbDA948Lh3kzsXbx86su1G5RhcwQ9b3AwvYC8ff5eE6LTTHjrAe2RP4pK6CLYm22",
  "key39": "3v5ctjGAJyzURndm7yk5SQ8jc8gKBsHvgACA4Yrsx2iuqwfJsEeD6PDkJHMEWc3YkAB8ATv1TKKchLVkfQSk4q2Z"
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
