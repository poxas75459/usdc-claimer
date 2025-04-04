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
    "Wvz1dr1vnUEC2W2xSp6d4WusdH3yJz6oWrAzAsWJZH2gcEf44CMgVNV5CUKSTUDLgfYs6NqaLRcKSRQVcJfV9sQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sm9PqNKDi2baPzbBoPYB48dpXPansuxJhr9SZaJsQF4KgQPSovakuWFp9TnBfoViuJr8PAK4auRAJwpK4P6iE7N",
  "key1": "4N6nwF6tv2GQXjeuMCz3Dbhfp31p4HqTR7LjeZ64d5CR5qTXNq7QeA4wFbqBpgDAUsAvRuDBofGHzPhXNg9BX2eL",
  "key2": "3nEonzJ5fjMT4FUnZAPah3Q95gnWLGAH9KNcvCARkdV1stq65MwftmZjFdBBvQW3KPayEvgsfiDUZ1RKjKps1cvN",
  "key3": "56ZvfgVBTVZN31T2cimS16F5B1qcS7PPHmb4bxhEJ7kEocyknqZxEGX7hV6APJxK4i5tJ5q7isTkF37aU2epQG62",
  "key4": "w6ebo6YxK3Vvv6939VB4QcGUe7C4N7r3UKeNDQQBNbfLTyqhL4iaCn1QP6we97rm4LE6fuRrdAmKUB6EU65Gk7u",
  "key5": "2FM7YbfpowkoN38mqxQmJC2BQZYZemcZYMR8uAK7oHnYLgtfMdkcvEftq9Z4NYoCF5zEEmRdRW3jZHQXef9moNYH",
  "key6": "4Q39v8Q74xvRyK3K3zov3bidPXVxHSqN46rbbgPgfeze7ifJdVJprTxx9Nx3g4FJRBC7cx16piNjyExv3bjyEbpw",
  "key7": "3MmQdtdcw9d4sGYAi98P6GB8vEcYgYWa8DLw6T5QNrTwiiCc3H8idm3Us2nTVwWmH2MEJ9NBknoefBJY662wsfWe",
  "key8": "27cPDafw5BVaHuZ9Wa2chDDJ7nvqoWBn6NUKkYsy5wjL3szCd4khLPoVWcSh2YJvXiLFBwyAYydTuWBLEPTvJZ8n",
  "key9": "4gAqK1YZjChH1nKvgVVEjCEBMYEAemoP8rR8zhmjLBKPKtCWbCJdj3gERSFAiojP41qPgoGK4DFv5whHS844xYbb",
  "key10": "Rb1QHAg99amVEkUCecvxuvj2VUZNfjXt8kgcBy15qnqXcRBmSxiftk34U3sAZF19qUvwUYweKcBLtw7qAYvW8rN",
  "key11": "2eshGoLTSt1mDcjp4jfcZ17keUpBe6BEkmvyZsP81v3Ddym8MqHa6jeAWyB1X4xpGFaJqhGRB18LCVdvdrPSkw1s",
  "key12": "3kqXW4c4RgjFYTeLJN9uf2xxB1FdsugKV4tHtwxRfEitf1Jzy4e8id56rDhVyCQFWiZ1epemBXHXz2RSL8MBswwA",
  "key13": "2HXbayo6PWr6gbZ5uqshrwmibuvQFNYXdB5Qr2XMfjFaRKKUE1QCjbueypKwgZ4NTuFtTVhCzti56Vgm2WL6qpvU",
  "key14": "2HQFbyzUF7P9L1xKbe57tTZuSbYx1jbTTYcc8JNRvqpb8zkii3gAtnSYLrXXpSYk3tAu3sQPaEqEmYtv34mBDmQ",
  "key15": "4hEJyJvZGn4StqFd5X1ZiMd4hfHUDb463czzdU5PciMb3Aim8nbhBFnnM4ksiT9vVtWcYbfEZMvo2gP5jW57aUfi",
  "key16": "V5dqM8XDjGwFW1yQQemuEHShiRPGpXpmNDDx1zrh6nNCmTJ36vDqdLnLVZZf3DHXps1x9SSymKRUDVx8EtbyhrH",
  "key17": "5QpX9N1SkFZcHY2m9Za5UsA3RgK8CJNBjth5GV3YMeB7DTkLvG9jR8zVnPZmThhuhjgkyM9JESv2Cywmv33aSapS",
  "key18": "5vqpGpYnGWJc4DLR2i1rx47NWp7R2VuQLDr1dG1wPbtmUyhXPqEfgE3ArFgDfQaZjKdu1JGmR8Cv5NnJSKmpJaBs",
  "key19": "4Ed1dkFggkvrKi5ahRSzLMBvs23eBzHeKqYbEJgUqjWara3BpKSdVHpW7kCeu7H8rZc6hqoGZTFRq5AUkCpxcR49",
  "key20": "K7TeifeKUfqN8KceMoJsrt4rGxtB2kw5YmqWktxb1zrdZ7vt6LbPtdh6xn9VRXJ9y7ysyoLNp8tDrAjsJYyLTn4",
  "key21": "2ocrovd75U4gPDsmtKDuzmXm9k2mxbUybErHVQoE4saP5uzbAUbjPXSw5BjejyvhMBmaqnEHr6RuyQwJbXYNt9Ht",
  "key22": "5vpC1g3HRr1TkicEuc7F2Q5ijsVFKGWtuxaozdbfbQ12sKaBAQSJhWmsQmiakM27b3e8aH6qNw18mjfHxJy2XLkU",
  "key23": "67j92xaJrdXRJPL82wVVYktGpf5R9iveZCNQAc7ZYdjXqHs3D2kiMpM6E77wPSCJG1Y1Qybmgv1vwvkaSuQvdanJ",
  "key24": "27S6mDHRFTmTmSjKG9yfVTWYSWEST4Z4tYSEdopq4REQSUtpGPFdoSUEoCpfm61LEdRdoCBQuFosM53mwSomSJud",
  "key25": "8QX6rfadje7K6QPWB89844ZRKDZtxH5wTekSTXjTJptEkGsv2Apkr8Vknp69oFJ3pi89X12GfFqTmNXRbfWaYjc",
  "key26": "4XREQsoiKXpm8zipyZMGKTyzbjoKLvJsy2EuSFxHt5TVWPNimetk3WDmSo5MoeBEQ8RXdiiDdp7Q1TGe78Fpth7K",
  "key27": "67cKpEwUFMG9vvwppmcCLq2CCrKLnsx6iW5HXhhQAR3BV4rQyrRms7MRojNFMDTFybsuCWhSfXXzSVYxSKueGNbZ"
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
