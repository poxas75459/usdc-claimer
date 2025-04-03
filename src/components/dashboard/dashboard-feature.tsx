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
    "5VMDnEsahwSTrFZKt7m32YdkpAcdzB7Qh2eHMJeC8rFq3WmEdWYRPCwFrLFErfwpYyumAQEtHrCUowSg2njbN8Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yoRZsTLEbtyQMYMffgtZZGAHeaHvDJQ5psW4agBEYszaQ7VeDEN85SN24ARZEukAqMqCi5yA7pUeZu5u9czpPqr",
  "key1": "2MCYnxaHtN8CFkLNgPVPUHaC3r6q8KMs16vxo7ERPUkWFDJRBMuicBLp6bQtGMPSipYWZQSFJcHLKxTTyTK2B8PW",
  "key2": "2ryWADWpNXPFQUQCHQsbpMvyDGJvYbvWNpjAvM1xqnScVidr4FYiYxDBYhLnhQu9LcbrNfpFUPxMQeKRcZPNfFsP",
  "key3": "5ChgDcKP8Vu3E2wzppVoqgjaGqcVWkAivT6p14Cwsv9cbCbpncGckMtwv6tCWWuj7fq8GEJAvvhpvZ6nZUNGmK6y",
  "key4": "5vx1mpqUoaBmQUunuAXNeRSe3Y6yFTigh5SBugrt9W6JXX9tq3Fgxdhifnrdb1uyGPhLzW6JsW7AVfXrsk2GxRBG",
  "key5": "SsPQRJdLqH9mJvAhW8diXoAXEtUWGzBngXEAHZ2n4wrrDcQLsgsZMTHPzKLoftCFPFcW1ViHKhajMFAj4jYHm4M",
  "key6": "4MVZJQfwxTYiK8AUrgTt3NHcCuZsx8W4td3Rav4qxqELafwovkAXcbFGFvVe9NYh9JFojk4NWZoWmuLYBCty6F1p",
  "key7": "2BihEjxkc124Uv8bi1thxszgkx9ePFiBGKD94a9msQa3svoJP1P2EmG5uFbaU8nCsTQ98rJ6tRXPhqebE499FRp4",
  "key8": "5BAU8NDGaCvfLK8THjSQehBRPWW3didVXb988Hef3KApwi2Yf9DnjdjuUi4WNPuaZ16xjmzmg9s1ZEG4uUEErxXc",
  "key9": "3q8hq54bVNCpA2UKv4i8aepaoUmEKiJofyzD7FYm5fs4GXonfDBMJidPoptTBXjVnpKXBDueyMcX4JfxRC9bCPPD",
  "key10": "4P8XwLTG6nNP2oXcd3MBjsgsrfXGommAH4NK85iK9rWETiAVZagNeg3TDQcb27hgJeTa5h16s5hLGLF6EHxL9mEf",
  "key11": "44oZ8kr5Sz9RdaLPpnm2MJepjkqBLrWCrEaVdmAYobShZ8sm1jESXjYqAs9YS9mccCZcxnPiitSwacPBnjTru3Zv",
  "key12": "4B7NaDPLMXJKMiZVueX6SWxvNSnazSyWWSCTd1nX9Mrr2QFrR4xuNdebLDxRfBDRd18iK9zP54aWyEHjtWhMHJRS",
  "key13": "2hMR7Bf1UUw87RWXu6xo5Frmo5q1gM6ucujV4PBMNbdvwXEoG8cqFbSTFeEbSLw2Fkxy3jx2DvWhTSDRGtYTt6tf",
  "key14": "3A7YKzucXG5DpaZQjPZFzMYdnG3hA2LBSVB12gjQfpJBEePQc6pvR8GfKqAffQACuyW8zjFseykyYp4ezUUr6ef2",
  "key15": "43gF6oLKgKq9s1bwvcV6WxixjFJA6GT8UG3ZWFkHJVdiz1crp2qjZneDmpQoxMBL7TZDuHSUsebX4vWt8Agj8hyn",
  "key16": "614hg7Ja8aq9e9H2s26b6NVyxM89yTXXFMgzDLYKGPEJtT5SupF2tbm5oGxrFFcMqwQmEkdSjgkvmmUqYN8cuod4",
  "key17": "3u2rNHbFFD82YfXiE3YvjXxbV2sQGxYS7kbjgzSDi5hcVhgtZezWW2B2n1nPKSZoCa84ExceQdCLMZDD1NSxufKx",
  "key18": "5tJN3CGaof1bF4xGNodrZYiZCPSFa7uheiQYAkvFFPvPrgE2h5DJd63fJfVLmhCYsHv2ZbqVskGYYZZMRfLwyrWd",
  "key19": "hEBCUhEU1NjH3CVUGWVJhUAWmxEUmpTrVCy7fpmADy6mC4ZgzHLQTT3m9uPdKBWJB3C5FJ93Uf9XgQEvaKgYVP3",
  "key20": "3Ng4ypqaet89qMXfphetTKNSWAw1RiXJci892RZ9T8kxiy3vZHdvLZMGaY4e5LKqG8c6WqPGq7FMskpaKeXiaAjf",
  "key21": "2N6qWEn1nibFhuVaCfS1w9exGaEVUZNbbdwmaYrVhLCkk8JGVkrVEna4XB7zroW58P1816td8tWcY1Aw46PczG4G",
  "key22": "5BY33921B2uaM1GRdr7m2UFJMpxsCGGfZKRsCA5EnpgA96MmPjgKh1qv7aqVZXSPyogpuLKi2pPozZyYpimGTpXr",
  "key23": "5gMNdWWoofRrHt2NLzdSabRPBR4nLdNgDcVwmXFj2qFtKw9i4ghDSsZLuQhDMmss291R8NexChSH8QmCF4kv1VvL",
  "key24": "3cgNYgB3LvyH3HihjTCt4kPRKmyusJGkoU3GAw8a94M5hSBRzaM1g49BpMgvovzF197Cyu4iRmnJYpeFZPg9MiEo"
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
