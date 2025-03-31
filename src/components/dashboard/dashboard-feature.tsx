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
    "4EADzWARkMP4aspLLxceJuCWxViiSge869FYZBp8P7VbnAEMpNnsG6kv7qkJggmWuwSs5vCqNhLUR9Ph2XfjY3CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNtpK9i2huy9TD65CUoD4bcmkegu6AAsKdGdJE42p5VF6B8PF6vrWmKaJ3CjruESp3yZWYViDVgygVatiha9kdC",
  "key1": "4ShjnXv6CuxVkRvxRjgqj7psZjtKZU4zTJ8L5Wo8K5fzwbmfxovQys6bqfrosoWLEq3FQDLf1YqaKKqUix2t77GV",
  "key2": "j4XnhV8yTGgLRnkHTALsaacu7RcDYJe5h9JKozeiiBskKsdFWbHLafqx3SuMhJJ2u2Z648KPoCVsUu8HrEYHgWa",
  "key3": "3Zbp8V8mfMKnWFNtTwn5YfsvjgwLZrCffVYjcY5gzF9g7AeSfhHYKrrG3yyXASMbUDw6SG8AThQRX2X2VAhWLHSB",
  "key4": "5FTvA7PAuAoUyD1GE651S4LjVUTArwPs6gc1MktX1oB68AUvERs3zsU22nYtK9mcswMKmDNma6Y9wY1c3uj2nAP4",
  "key5": "2wSPGdwURiUx4UFAoX4mnhkKU4X5pnNnBndjT7FhY982L9zrgJWiSe7MfcjGcc5opeZuJyUxgqC1qkDJsrRXiGuc",
  "key6": "2FF9FFLKjVDZPhqhwR3Ywu2UU1QkRqD8CD25erSdcnLZZBf1qcxtc7fuDe6YEwTLQD5TXo75dSm8Xbu2zu8CUpcM",
  "key7": "w3qxAeNYvgKjfCtWJ6rEyJ2uKAQk7Rz2mKfTeLMbfwfqFXWy3d9KSGvdopUgbaDVm5sb1sWoy3xy17VnLLvaR3H",
  "key8": "AkLo9wx1TGchygHgWQF12DXUoFkZzWSJ1D7vsWiAZ7sSTeJyzpZvnig4H8hHFSDAkF73DT9hbkmjwbfA7ZL8R2E",
  "key9": "4epkv5S9mHNNrHLKbHzWDyDqoZ3osjLFJZyNkzDrVfZgw5dS8VwW2qgggwHULSYA9sksBECLYPT1hxLM93ov8TFa",
  "key10": "2BrXKxJuYXL6NnT7vTQvrQhHFhf12Wf2FfUYofaDZ6LkoXhBAfYDkm6mss5xZtNASZNZDsAG7fJiVNyFT9QGQ19F",
  "key11": "4Mte3DPinhEYQkrhKEXaXUKn5ie3VAYGg6rHoiUMJShsdmTLu632ny427h51TWPWj4vj75mJtL59p4oMz2s1LhjW",
  "key12": "2373Ye32WqeSPfRQYv9Brgh461VW6x6tDm7twt3dcxZ7v8ucDGkerL3GZEDjq1imDZW9iBGVCMkyquDTFkWWJvi2",
  "key13": "5tT34YVNR8jhkmNP5iA1Eq9LRuvsj32TCH41HkseaQPP3yRmz53RoGbx3cf7ehv2gA94MDpDtXohqZKJztdkjh6F",
  "key14": "3mxTitHRjAozTVRSDGHB24NZhDV1bQ8hr2PT2fKMgm9MvjzTUwXjCuXxPRZjXqXwiYBz7V1jKgd6h8VyMLec9Q6N",
  "key15": "P8pTdYEKafEUiPoc3NkkDKRcCdA4fAKHuFvVTm8qvLqpKjSKzRAi78q88t7ArAhjupvjWTcVHyYnnvkomTMdfES",
  "key16": "Lidxagtoes9gb62UpLxvjRjttBu8h9VjHLWfQt17Dqt2azskKTNNt9SwK9UKgB12uLNHwVeAw3WUr9QqHm1uAnz",
  "key17": "58ZTqXyQY5oZ9cunPsLXcB59VUJNKo7J1sNYn2Wsb3JgHMvvmR9GoLZi5gUycct7CzMCnM2zxUsqcVgPWEc6dXkV",
  "key18": "3GUbrhrs1rCWuY6wrkW5z9zVKoVbBntC3vB2XuCHU1BzRT5Jz5gjudcNh6AdpPBWv4sd8B1vedy8YMEr5EDN8oSf",
  "key19": "SMXycE4Geb2qMKQTM1BKn63jjw1CKYRMYNVMP4kVZPk7U4rUZB1cCRBEWx7EG494Eevkneg2HbF8m9NfZmTCPzh",
  "key20": "5NR328HGrUXcfjc2oeLejgnDtz3WQFn1HWQzHh18x3DEf69hEbZJpBaha68m9qhvJHctfU3uxpBx4eQujVxdZ7YD",
  "key21": "2J3QU3BbboXKZ7DjLxNx8hyvWeihx4bVzsYzdmBgcqJC2kgikuVpqeuraNL5NsqjtneECyx2s192ttJpjaKh91Wp",
  "key22": "3HoBHwgt3oMZRF3Ej3EfTabMinY2bmXs3RkPikaax2qoseSPSPjySRxX4SJ9gknNkaMxd18cGasR1JSevLCWnKrM",
  "key23": "Qyd3NaPAcDGBoLtk5jwHNsGU2WH592UKDQyvRpp9UbREwAgP12UJ6PV1mdzATb8YbRojF95yBynsAwKUBoeWSUL",
  "key24": "2QbAWfa2Puyz3KZCs1M3QVux221kT2pU8YaWJzjcNPsbR4vTsx9siaW9wLX9qryH7Aq2SdpiJtxEnjGQAfox14Cp"
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
