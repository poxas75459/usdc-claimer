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
    "29dpjsZrN7Cj15tSTozvneSd8a4YowYNNuYpvr7HR6XEuoQkBok5P73dYSNkzK4wSkrwjwyD17Anb8ibspD6irgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yqgLerj9y6ncsMXhsFK8k8NAzoHjDLGYg7Vd7AMubW7XtUhd4amdsRBWutPGf4m19ZtrWXJGJAUfK78oe8WD4t3",
  "key1": "3146i8GepbCVdDAFrQA2cPgAdLUQtUh7u1BUUowf7SBsBPEmQs3mHu9ysCZNuoz69u8j9kEUVRS8mhGEoopWCKej",
  "key2": "3SMnmAz7kuzQKbpogFs32ULUMsjH5zf72hUQ61NzTVujnLiYUuSjeEAmkeBQgysVYF8Dtvp1iWZC5f5rzeFTeEnH",
  "key3": "5afQLyJSpLFYeaehQHKJviM1zSUfUERD5DSWw83z19op1mgn5c2PoD51tNrqtg51FJ4TGukgLtTpDNXZHxD2c1Pn",
  "key4": "4TzfWDcM2J4p6ByTfaLM2BqdxsNuebYXJPkNMPYTHriDYd5KC3MB6semHe1m6GLFFMutyNXeTEGPpra7G4wnVSg8",
  "key5": "sUa13QNYPWZA7MCe8yE8TftPh7TV2CPXfffWosn8Y1Rja3KLKN7eSSMDf8VnWEU22MTeyKryamVsYVnWgEYJFPj",
  "key6": "2eS57z896skE2AhQAZU8YZUSGkUnZYmk8P7PTLt2mW3ig5TUiBajY4tYhB7yRjPhmfX78GAFpQACfXB56u2YJxgr",
  "key7": "4A5X7BjnzKW8eb6yMK1HqasoBJkisTTcCc5yRnEdn2iSvqpsqeBShPhJcVaRgpaYjY7mwFyUFrYGwNy2jUNUti6h",
  "key8": "5NhRfLh9iPtwEgr3tt24DrqbMuRofAyGSephVj1sAewHCDYrsGd2rHrRZUCSS3joiok94Ku6xUD5VbQTsZXeHkTr",
  "key9": "3LofgMVXFUKmP1epdJYpzoAepeoPFsthJK4jnMgk3vo4tidBJMeMzyPeyGubGbxFWtsu38XBU8PeB5qBLmgHpy4P",
  "key10": "xTXNUUynanpsWuHM8dfP4QW3AMYDCSG82ngENK8yZtNEB3wrZa51vekm8y32Z3XZDQu8gurgyGDjWB3PMYpDrFr",
  "key11": "5k8w8zxUq87zDcQXMxXMqt8SWXZd3iZErNLPKQMe4L8Xis4qJdSd3s1FUaANn7tVG9xx3u5vVJJiEh5gmK9kgfCn",
  "key12": "2TrzSaqjh6YCm4VhsBJDQ2hBMQbcrv5eDJJx9q5hHKPBkmSCwNpooiGNwhSkqr4RBr8upjmZKjWHW5SLzfXiwxGR",
  "key13": "24APnXpHmUtS5Hxs4Y665Hq7KBPRgGGGH72cknA45Y6DP4wvRAui86xZuD2LSxarW5QLrugoiUkQ6NPkDwvVxe5j",
  "key14": "21gq6L2Jb4cpTqXaaZ3Ld2D4BwAEsqTpdbbcQmJ9k6qoNy9Z7svckpuhhV4ypcCLzxxXwPUMBDbqqLYy1p3VeZCk",
  "key15": "kBAeCWMWP66GGuPF99KNseNNhcW1jD9Xbyc4djkv4ANB1rssbZVADxyFBqtNq1q4E3wcrvFcAbWU3F4XfcJHPu2",
  "key16": "3XVyJazR4J8Ei1fNWkQyKaFwqkN2fWUMLDLgziBnTef1UaiJ4wE7zwiY1iL4HmvPU6xrL6gLRF6gwzzCZYFsuVvy",
  "key17": "BbZSEFjoA7dvHnSj2xrnJUuCYMVyn2vMmAXRVRibE2YEqc7VLS8yzdmPqWnJLUpo81WoaQYexHGiAPTiwu2Go32",
  "key18": "3jC66dV1V9Mh9iGCqPD6CGuvocP3bWms29ga5iy5GgnmKExV5pvu8GeaYpGHvqMN1yr6yrotgFTqT4bxSiLWjV1K",
  "key19": "2Fhj9YG4XgcKwatLWuX8HZe8NXssm9ympaBsi9oUFSNu9VGfZmJ5Amxf5oVSQVFTVjLUchDjX94uVYvPJrNuaFZR",
  "key20": "9T1JUjp4fSG3eaXcogPitgrjKAZnZhCFDegC35rL2LHEAwiNZ3Dnu5tC6CXYTBqyizk9MJ3A4zmAzAhBuVKWY6T",
  "key21": "sob7zNZWFNcGZdRTPB11dAKwETFcX5yazQrxfQT9Unr8zXb4pximkrrfbMxuzob4Umt6q4xm6q3rQvXiGBjiWHM",
  "key22": "s3euXHMqZKiuxsrsz38frf8391XCX3o9MbKG6yUiP9oyoJnrtUKbsFTC1kBCkdfZLSRnJaQqVcB4uMvBEKcH6Kj",
  "key23": "2C2akQRaPT52nDKRF9zxKWUyrJdCdTeh6DaDdXVMTig3Xvt5sUhgNb5txhwmWWSAbp9ptJ3VxzHyzoyBkJSXHJjq",
  "key24": "2dRZNmv3K8wbcXN9BKjF7qgENEBkjLnxJjnSkZ9wqzGdWGzmXJA8R9WNAF9hk6onMdAXNzUH8pTCxd5TQJskEUbS",
  "key25": "2RxqSPB9CQcr3RcV2fThBX5XfpKsNaWRXG7fUtv7F5m6gWs4rt3PfGYfw1GTTRw8irU3j2QPXsHvLofgAfA86rFy",
  "key26": "3HfbTS7RoVFDZwErqNduFU4LDjYTwSap8ncLA6w7ZYtAue2j32XKoRhSv3HanfexZ38ji91F8R4qFNx6ywxGn3o1",
  "key27": "5DhHR7Cg1TsJbpJsFQ7a6KEsdJEvQ5hyAZ5JMQtAnS2QxjkYpqmQHpNUEg9Dh1fc12jt5ckm4ufDuTfGicdFjjEV",
  "key28": "4vCnFrQLNfYz12SihuttFzEnsf7b33egvaf1aY3aUnQ3yJD71MR89PbSk24kGNbQ1LxVNwNhJ4wqT3xrUnh2Qo56"
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
