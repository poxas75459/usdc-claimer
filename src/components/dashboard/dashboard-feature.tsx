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
    "4oLq1CJzs781zHuYWaEo6wBGLNto8VFRcyWhUmsLhRF7oNEPEWEQFmY26Ryp5ADvxy5LDbaRBQvDLhbfdkkQgagd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55DqfHZoZYQ5QmZfM1vWhnAVzQff831bn8peChLFreyqrwM4jkMb8ZCrSW9UMHwfTPps3BTpkDpcgTRxVX3g1dQq",
  "key1": "3pZs1aHPuXHEuzn4cpAQ2Vtr9Y2GpmcsjtReXXqiZDgAC4MDPaSuUkycgohPGK3PvUaN1z8iQx4XaKdtay1sDHCK",
  "key2": "5Mts6bStTKHRvt9UCTJJRvqJa4ri7FEisHDpuQ1xEwZ7kkKSk1uDxwL3zSHNXyw2UkY9ZLcvEWKyWZF3oQjUEt8F",
  "key3": "2gjX8SWg2WexZjfZaW82HaXyMRADM4wLmtrfUnqMRz6a7BqDUqVpP18B9CtLBNVwZZ3AiP2u7NeaWhgwE4epi4Zf",
  "key4": "5Lmujy8t9pqLeDpckjvEGwMi3z88x5Quc6fkwXmGBAmVhR2pyBVT2vVKdBJDniiixtu7L4w76pMZFx6Ee92Zupkm",
  "key5": "57WtsBVzdJZ4A5c6G5ogF29swo8bWmv6j4B4k6afmKzxptcCasgmnoDE58pHYS4cU12FeZxY2E1yCBZ84XQUSNYi",
  "key6": "3xjfHds4w6rW9WvC2ZcA13SfYm7ps8GdCSHVhAydY329YtrMFVMtXUCheaXLpiURgZTuQsaRZU4kvtBM3DZnbmdZ",
  "key7": "A4fybTYD3TS6naxbhHWo1qwwmbZ7zgmwoBuWJSPA5ALRcv1MMaB7UG76ZL3ZHkPsK6dD99UyDioXsyKvjByQR9G",
  "key8": "zk33Q7P2ksDyv9UPzUWdos2tWaQpRn3FZ2s9ggnYCafbUu6YB4CkPR1piKwDp4BAVJy5uG8AnAw1tXxBWnv8Cdt",
  "key9": "5MAzvaBqe5oSPMSrKVUX6kcVpMf9dgSuhfBLedNpy68K2t5M7Bc2XDg3mWqG7LyfeY4wtAyxsSYWRcduPeCnFhTY",
  "key10": "2mWYvCiY3pyTsZNwB1RHYDfvcAxmfGBPnkPa9V1F4b4a7MVeeMizgqEeDJi6rPiYV2g5ZSCJot8yYJfSumxt7Vgr",
  "key11": "4KPJkexegM6anzcS55EcciZBhTC7WqyEWQxhhPQyKRciqrFqCosB93LyEX4nrC5VDgUUVsdZU571eiYB2qtRQoJi",
  "key12": "3DUnG6SaPDorZLMa579jcKcTQ1kWHfBwXs2ijCQJUWbnpeDyjRAodkptq9pVbbwEVg5MhzYrFQtxMTGViMZauECW",
  "key13": "ndaWneJNuV2bkZ56TtanJpGDgFd5TFjBm85zfgu2Pd2BC6eQEkWWQn81ptVs5ZYMptaDymjB6CaosBkp6kNixUB",
  "key14": "5ebR6brhqhD4zktjNz8Jptwv9YvFLVDuB8pujzuiKyLrFX421QesxQ46dLUS6fqTikzXx28B9yUuKVQ8yfnN7vjS",
  "key15": "31Fi34hoGmy5Db9hGRCrDCC5xiMGTS3i8jby1zZEr9u8YionNQ4T9qrftgnYgPgSkQgkE9iq3NSi5FiraYhfGP6b",
  "key16": "4qy149gksrZ9viP1iKns5dwr8ekk3bSPqYoLr5Qf29KPDoo41PRpTWV1EyV5TAhTAAaRnuj94Uqd68a8ZkZp3aSq",
  "key17": "5syeMrg3fXyB9p7ZQx7Ktxv6MHgAUWypPfes1k8W5GZTmDk9TPhTXRZWWXVeBDW46DJYkfpJrV2HfmsP1EGM2mSL",
  "key18": "qP48z5VtKaxRw1f69Q5v3p43QA3L3EK8VRtVwqrpyMpFXNovEgJYGkJvNrmMtCL5bzjqBNjN1EEp8rtVYTXvjs1",
  "key19": "MPZSUSWx3qCSF4ayYrjD6y6SuPQa7vixQEd79EmGMqVDvbHrabDgZzU4mYmPGtoS8jerRZ9nmHMvDsPMN8rkRVJ",
  "key20": "4EjudePypSUpw2QVuRyQzkVhVpqsm6tEiXF28zHKHcB6WqSdEseANYEdGsCc1BcAAYNsS4xXxZHzX1EY3cWyGmq5",
  "key21": "3JDJ27AmC45bLoqCkFPNu27YHJgbCxUFrZmCPiagNZHwngvTBngtv89sp8Q1iFpNjb14JBUUixjdGsbvPZkPJ747",
  "key22": "3X2JtRKeecKhzHdbawi7oPpthUM3VgahVmuEUDp4dNMihKCMgeShBahpZ3i3eJ5DT4Hsow2rABypfWN8E6uyuB8g",
  "key23": "2299Nixw3nCy4DaA2VDGY2siBJr1cidhh54tvM8VyD18s1e71oVa41646bvcqVQZet9q2GgRSjWxsFZ9cZaUnXCd",
  "key24": "3wzJuagKCrEyGnpLuGj6vmFxFYxZwWqzGmEHbiELeGfZzG9usxaFvRPSEZUnPVL4YXCNUs84qGkmSKgPchVkqThE",
  "key25": "5uCB1X6EyUNS4xXeR559NxgdpuEab4S3KcVV7NFBXyp1oPmECZMTi4gAXvwsYSQ5hrgCa2b11PYe6TuEUQorShpC",
  "key26": "eQMUvyssZEnQ9Q9dyE2MDK1fq4H4uQrThpAitPmxm5HyzdhBqrkTjbRU6HvfwXugLZcyxMZLhAZJTcEUMtzWaAG",
  "key27": "2z9tPA8QAJLd1DvHDeGGTmQnsz1MVWaJG5XwCXkoVNdfALDWUu3DJ5CHo58qREVHJ9WwjBAkQxtEvAHw5xAPvkLq",
  "key28": "52UkBxWj3qoaPFjMLzb5LFJ5EpRPEoDkKBXb4C28Ljp9q4jvZxVjxdJDGQR5AGHXh7DxjUmUifxDchRD4d9keEzM",
  "key29": "2nC2ADieAK1fndTuQnFmaT5Tv9ayuYURnJ1GMCQG3UYD8RZeuTaTfuoVWCgsCSkvV5QY3T9JQsxVT3usbZFrEo69"
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
