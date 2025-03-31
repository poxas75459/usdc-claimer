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
    "3u59wQhwL7gCqNQs6QmsV9Hcq9GXufy7WFvLGbVeR5tmnncPNDZi98vL7SDnSCoCrEtnvhV6ixm4x2fieXt7xh7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjSDSb2rtdhB5MYGxtpynxqBEUbhM1ye378dPCYQ86ZzupjGoXqDVvMFgxjvaVbavCSF2DHPnY24nU2VAgQG18o",
  "key1": "4MCkwXvvhNda7Q5oJdeszAo836Abiv5aC3Tk43xGGtwxvGgeaphjKC334KVCy6Lvyz1oRH4eNkbe3WiNKhxmE47g",
  "key2": "G8kk3v7jrYxFb5wWBzQNvdEUtFuLhxrf9duiCA27MgMFps3ZbKrz2b79GNf2rbqYpayBiWZWxQv6rJk4iNpeHoe",
  "key3": "3UKGA5cZcs1qRPE6gVPxRXqBSAuDZKAra3HtUn5N2QecLVvbgn1zQwqdYBByKW5riSUmtYsqFkxG2rxxRTVfdmou",
  "key4": "2PotRJe2jenti1w16PvGm7DyY7q58Hm2Tw76eXx222w2EbT98Q91ThduYBwVUsJG3cyCRuLeDg9xBT4qQnr2BAXt",
  "key5": "3PjwrZWLCbHWGSJuCoSaUqj2iJQ96my7sMZFvp714XGBqL6UoSHkcNQFvLeKLhEugyiX3rdpLVbAFwB2MhZj3Lgx",
  "key6": "3oep2gWGQLCWdTNZs5mcAPp4FSmc9Pkh6ej8oHUdRPik4F4ftTJULQd9MGNfmH3cmyuq9j25HmByMJxpnm6qyKbq",
  "key7": "3cQ9d2SXxrjcXe2eHN8uC27CEmvSygmnZ8JQBCNkqMeHm597DKutGxwUNw6wZ1zxhvmu8joFNm1ho8okFXtqgKfY",
  "key8": "Pg8GwCwXh1kqMb9UY7J9FzJdwo2ZCj5Q2kh1XfEBRVrYzCYEnuhyTXgXELKBzdQ1DFQUdmKEdX9kkpbzAH4MwUg",
  "key9": "5czdJS8p73Bfs8ZZKFU96qTPRr76MMVwL7PQKWe414p3N5NrjkAz6YrYjBaJgoUGwi2UvvZdeC196SvAB6dx9K2x",
  "key10": "45k8W8RHcqJNwrJdRXEcGimKSaTtpDGaqMbE8BArS66Bb916fNou9JWeVYg5Xhh9DkmWDFfbvj2b98YTYPxr1iG7",
  "key11": "4Fak3xn5gHvmkXrp1TKKWu1pKgim3XNRGEh496xSiFsrdBYBV2zRqWAroY29HXgdLyGCzzp5MtLf3G15XSAcf6LW",
  "key12": "BwfvfnbKp7LpQfpep9MWcfsCJGdXtdMigJv3VJ3rQ23VJJe23Qg7LMikHkwCDChPe9nJ8QHD676FbwH9rLmLn43",
  "key13": "2YjacxxSCao62ZnBMRHqgVts2eZM3nHvawSekbFHHZdjVDPBy1gUo3nVg49J9Lq4cvCBTdAFYS7qGpodvvKBHYuu",
  "key14": "fVM7WBy7KU5dJgWE1D1X9n4aV7KMmJRr6jTbCXskLsohKNzFNno9hSBRnFFPzGTJodu8JLXBkp7awEQncFFN8y6",
  "key15": "bjcZ2PhahkKYCgPBaVmS8ecTbUNYmjcs6r5HqWswFaYYnv5Bf33rmzGiuPhqZ9NRASZTJLQicDPt3AxxgCs5Ssi",
  "key16": "YJJtV7KP8JPF4g1AxVuhvZra6wPr67vFt27YvaNCkesDy4TR63sjEuwE3362HSkwzXGdt4bFKJvMXu3G5mtHArF",
  "key17": "36ZwZ6pm9bHithyvUzEo2K69VhT9Qi4oNpUkSnC6d3TGD1U3DbPBfQRWskdJ3P8ezJpjFHaDZkDGwFZHTwFBVEmt",
  "key18": "2bGSMg4oSVwHtJW68Aa1aQH7NfiwYVgQ6ygM9csfyn7qC17686S4C57kT6zfe83JA3h3VGxxLBAuPFBi3LfY3qwK",
  "key19": "5yrJ4PH9msnwVZ5JsdigjfSWXrSP3BswymBKcf68hQVwFb3qGjbdpKzgJmVJ4y3vdAVbxE2CixDC25RBV9WURPWW",
  "key20": "4TvSJ7cMNeCjys2V8mktfcZqhWRkzcTvQY2Vina3DUMGCE13WmBLxFrywGMk2SmEMH17fiGmxnYKdC3tgANsodMU",
  "key21": "gcMczns2LiCbmKa61YDh85Tr5gvH6zFM8C1YU8bsE5u1TTtQejvifQPFXqUvnJyaw21V6QvkwWoLMb6Hdsvs2GQ",
  "key22": "25bpXh6a35AC5ZecYmE9TMRQsnCzCAZaVC23PJ6ZUpv2uQrdwXbZeSSVmXfxqegMBFpurvhorCNvjYCJDMMDXwkc",
  "key23": "3SX6zTwy8wkzD9p5R6ww7zY4WNXtAyx4vd2Yyi1kitdTJqvcTSLfGTNov5A4NHa9tVT3qChyGryGeV7RhMFAjGYA",
  "key24": "2yeTpiqFYmsLksrU2WERmMEbeuTFjWaCX3h2R2catXYDyzHaby3ncepAdoxskkZMRioRSpL4aQoZJ8YSJgaiXgZV",
  "key25": "4SKqv7SK4TA3PSvaNYZeZWqp6Woa5ejaAFDsxj7KKrcs4ULVqSVDxUj8dyV6Bp1X1Y5cF473jyJdMEiUzS16eeth"
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
