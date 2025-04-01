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
    "2dBGZU2xyoX2B941jHjtGg7gMv3pifUSL1XwioiGqtfX6psQikyUhrjmpr28oaTsVpDxDqqh8SyAV9Wfr4HLdDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fe3T2utwJxaHLea8XqLZgNMnnwABfwMPcZtFCDi1oF4WPuFjukCX7rdGMs1AKG3vyFUvvGPmHhXRrSZiqg3Jus9",
  "key1": "2WYxfWvS4xXjMXzpanV63GHUAJtKVLd3QuP5uS5P7a7wD3HVPFvKRut7werHipQkDTEU8LCPyeaRHyoipJjw1jFj",
  "key2": "4gtZm5WpYRcMgsum3xm1YspXUK86zwNNx5qXsE4hUZ5yrRriz23f9j58K9u78keY7grSoZYYyLoi2co1RFoKWCVu",
  "key3": "FHKzrCR29CL77q7TfsnUyAv1Wni5RdEvWqEeVgQovnDQohixq33U3BfMQDLzmvLNfSTLmsDsBcgZGALvCtqbdjz",
  "key4": "343VR4JSKoajJSqpW4TfZJaJENbhsq4ocUZyD9kexPACFjE4emLB8bRDESgx8voYFKDMyYPeZtnsFreNC9S1rjZp",
  "key5": "3cjBcdDksJ4qKapVtTN2iRNmaX5qRPwWA3WV6uF5jU7E46Kn1ofwFhMhVYsSjqUnrqrxtusHJSAxUvXnimeMWSA3",
  "key6": "aeX7wvZxXuRPLaEdmmE2gBmbmWoDA4csh919zjLRswLHzTCWGfXfLMgW1Ce5HkqKBVULPsS8sEnhtLcTh8tPhEU",
  "key7": "9Wwxk8QvKhCLKWaE5hzt5LVCuyzmG4JFMZRvmP4A6KaxQ8HPdHBGbusN86PorAfKeb3BFy92CiHkA54eK1BZ8mk",
  "key8": "29iXuLE9tWStzYya5fkkWhPJJzsoYsxyRyU7RcbL8amA4SBFuv6gx2VFNW6DDRdWWVwppGvFtspRPZaNnJXk5h6v",
  "key9": "wvewUMjavodJgpMAQ3SygJzdp83yjcqtMwEjTR9ZMUaizUAkWgm49Bf96tfeFFqstJgJXnKVtnv9HaP45mLGC4n",
  "key10": "3m7GQPMzwZrNrKaXXE8mjJ8RoX15xdm3ouQjbg7LxXWJuazrUS4zRyMQ2zSKMKkuKeRx1iGpTMSuKAdJnJjWZKP4",
  "key11": "66q46C1LTKY8kdgoYKaQtSBD2ggzZCZAYs7tvCJous5nM8f9iEpjob4wofmtKiVM2reY5iAiZiZueXfoCNj3rR5C",
  "key12": "61e72bUisoKbHqZpAN4nUVUfG3aFQSeDXqXpZE2KusGXVM3gDe8zaBRkGxbyJS1tWdwsDX9pVp1GV8dqFy8Ua3f4",
  "key13": "5tfYKaMpLv6WphnPWKz3fR32MxTgmuY73wbLMvmPy1HnWum4EbYkd96P8xAaRiQAeetLfW7iZXFukjrpbhav4k1v",
  "key14": "29CXYayWr5z2m7nBMqWF3kh5g6qLiHEkjnTzk2WBjxBHLaaQdwxbP3DGB4hj9qH5BjtbvEU6NSDmNqPw31FmHJdj",
  "key15": "5BNQJYEQnxJyA2Viz7suGLy9Mw9C5VNCeqrucaQZrtJGXq7J6jJJiYkUzcBXYRvfwx3dHfVRCfn6afmBX6JY1amN",
  "key16": "2qHb6RpKnzKLfaMbiNKWExnhi18jyECmoPkhjU4huTQqdmn7gGEpVQr5yPP6aAydNjQsMUjhQXXMk1tDcuZQzajZ",
  "key17": "59o1vtq2fGeXXajdUsRkWBRwHui7y3KeUzyryXyvHabwEWHb4yb4jprKzPBfRgQGLJPxe3WKzPcKAJqYvMMKwYRq",
  "key18": "2W5Qr2fijKTT8girJVEexAD7uxnnuM3te8MkM2dxamRYxDfaf9enyimXRmJTBQYczCqNjJqLMCUMkTgq9fBUwGj5",
  "key19": "3dowmq8GZ94RhFRQ8pDDMvCahz2QxEd4HprkFhnzcbruwnL1DoT8uE5AFVrA46jqybKHdgPmWpicgyaWxqEtA9qj",
  "key20": "4eT2m4P31HHVp3vWdVojNfv9bGP8WEd3sJRbHAdAZyQ6V2GkmxC7cq4wDjJsyKWdY1F1VkXR9v1kFNKmu5MBfqPF",
  "key21": "4nByexcVuMGN1mZ4y4bcUNn8a7HeqwyfmqfrG8UvXmqunG95mjHsprApwdeZ8toaiE8eK5iRfhs5EckxFZtFX91S",
  "key22": "2qVxhAHZ7wHS9mHoFYhB1SfpZQ4i1ka3W6QacycKyyytiM8dFVYUssMfPtwZAFsoZan86cuGQMrcgKWFuNSCEqDU",
  "key23": "3qGGE3yQTLE9nnRc5z6hPpGe1Mm2botWhoGTekWtf22NSZt5New97LqehC2ansvEcpKex6mVAsaEoc9HFtUZyx54",
  "key24": "4GbNCDJfD1EvGo1Ykk6wxXoWaUPgPVyDtnV4dJqZbHmu9sd3PGtjA3DuSCcFvc1ANMQQ7Zmjca7FtKQHm6kwi3Zn",
  "key25": "5VsnwhZafZFaXDC14xPimgfMB65AV2XA79DWeUchEDfkp3R2y44h1bPsH26ThU4b4MPQETRpt5N2NLc5Fd4D7SeU",
  "key26": "nycSdCdPqghASnBenTWxAWmNAJbwKbVjKbpoXYP3S7QQj43rm9JFw8VvM1cm4UgbFTKVNXVskmVfjTcA4P8tHFt",
  "key27": "5Z6wUNpFDhqbCQVBavDB9NGE46oRTqesJqJRenVz3iwbn8DMFBnnmLbFDE9jk1K14T7N3YfjxhNYR6hjReHWtCKt",
  "key28": "43vVTooLeKZQLzoW2JMaZt2J3C6jWDpf1RQrihrHNP442Pjuy1fEqXwGuqU2SQX7ECRFLwHXbBsjA376aXRBpKWi",
  "key29": "3q4zmKXkqVgt3e3T8ejJcHzgkqgoFi17MURoUQ6GTNYKWC63dLGBTX9TuUjEZhg6rF9YxdzPF2ZBZkh9NRWTRZVT",
  "key30": "42JgXrPxtTRZmB6E9r7fejFDJZEU96QAu4wV6K84E8eziLUBxZV9LmZhYoGVKfeZELH3v1mFW9HiBieDxZjmp19t"
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
