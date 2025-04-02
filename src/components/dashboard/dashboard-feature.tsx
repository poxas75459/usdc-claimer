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
    "xoyqzN27RNV9PqCCisRcPUbDmdu9Votp8Hvyd7auhw13BaRxJYsmsDAEKJjHnFgjFDNT4WLjeZ19i9Nc3L7JrVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2121zkpAzzHXpoqW3cmzvAZsWFU2hV53nBobMBwSZf9Ahb5L1MUs9moDg77c8ZzNVQkEWvyDxtiUvHyJ45MPsAKT",
  "key1": "44RDfQxUqxJFVM2HJwvfWr79MTEhBZZDe6frL1VqJathhMDzUrwMVZSxK8SqWdeN3hcEMjDnocQL3AWunWCTDpCQ",
  "key2": "2WNdtw4HcrNEdeuGYZqsgMJraEiyaE7fbjvmr1ZhDUPsdbNWM6ofkJ1L3YdsxMY88e44Wu6vPNU6RJ7BywnE4R5R",
  "key3": "58M119j7R929d4BgjqdRcy6o7t88zFk5PZ33wB3Uuif14nHHmJcz7xnAhVXZRULkyWHKJaUKaGdNoYaTtrKGzMPg",
  "key4": "5MY8F1vMy29dAnahufZJJbZMe6rjokzU5MXFDVRm3rFdkec6AD6YDUgT4wjGL6XEP3AjwHtzq9Hgn5tTEyLAJ14n",
  "key5": "64RxtopJkbvxcxM4vEuoqnWEKaceGEceQoSVjDZcM9YBCbj93QCLXpTK7zJFhaaqT4REE2DhHQFk8vvMkNDLDvvd",
  "key6": "4Twhr7dC4pAoUhwjAH6xdMrvG6EtXAfZm1dxTQ52KQnEGSyFfJGHRbQKkCTbc8zH2Par9u5tGNrRZpADzfHxVJpL",
  "key7": "2mwgLUqs2C83okXvdHCVUVLgBiHWj436Z8HoknVLaSgGhbDW4Mxo2JwMVVghjVEqasPn8aoeJxoMz3sHAuUawccy",
  "key8": "3d95YUN29TmEw2L7ZgyTwYa9NPNusV8CHA5r9Vbx82tACpv43fceMTWZiUADyRBpntWikLdRB3rpi9Zr5WYVAdZM",
  "key9": "2wWjf9jn6tGRRonJW2Gy5UuRoLk8eNapYEnAm8iBuARnViHZLP3mpHRxqSSkEBBsaNMQbUKPJgjZ6RyD8FGS3ZUo",
  "key10": "4gW7Pv5haNoQVBbwNKYrBJVR7z4zUD5vbTRvaV2n9g3HTyNusvhoYfX1nuWkrftAYDZLYgwMz7YFrgbAw5Wi5fem",
  "key11": "EDHgCxBF5bZh7VhtYg5DTuejW6cHFjsfo6VSLDmURjVCqbgELbvm3R3GBom2eyDCKPSnHXtSMeX7uNJYziasLav",
  "key12": "4TNRhWaQ12BkSHuXYiwLtcxTZFhhY7sGrTLE1xNA48Ny6yFJvtmkWVJxYAzdedeCxuj19AqeRpt86FMU7sWMkDXw",
  "key13": "zi77m35xHXX3YoAvwF8PmjfaRyscU4jf6yk9hJqzNbGXQwLvpSiAd5xtyQfFYnAXbg4VFvU9BwSJN5fyiH19mDp",
  "key14": "24WHQiQExoDvSr8Ugrti7fLwgzkrJwqUcVRooVrsg9sUeXDbDKhVRp2FFQidnSUgfgLbYwc73S46dYPCXQwS2hrK",
  "key15": "2thn5vu2gyBBJ4KpxFb1tRbk7CCnBJ7FhwPxsud2AyexDceTkWYEV9BGLGtYPqLBMikrS7rz2nzuA2jGa2GX3JHS",
  "key16": "HsmSQAji8SsNCJMuogpKkj9N3Zp5JiCHFmin7zhSNpKTYWbHCM3zCU7p7uHzuL7yU6m5DacM1jerQZeWtxXzfeM",
  "key17": "5tH5CXXVFwYG9kxdan3G9Ujqa27s3d94WX1Rq8qByRz2aVGdJyNrKcXEigy2MWyC4HxEkdQXzfkU18J8zuUyJm3L",
  "key18": "5C42fzezJowpbFU5G7ZeYw6CjYGxETn1Zc1djyzJtAJU3RSJnr6w6uW4R8gC2LQ23WTZu6fGGiLGMrotq3KTHbpu",
  "key19": "vWvGuqngoQdiAM8TeqBbFave7YecB6iXLbkXRAA4tHSQPrewpvv6YBcsXyT3EF3fuC8jNnpTFsDyKvbgyEPyofx",
  "key20": "5axaupQqc2yJDVReoRanc5uGhEKFm3Eviwe3cDAS2bkoXkoTe4mfqyugGSqLdTTuYdzevpuxffsEJhbt1w4vZCT8",
  "key21": "3ynZZ3sLrY49MzZ3T1guGZq6x4XbL5p5TM1b2yy8bK9geUJksjXv5EUSugeXoDztDBPJ5HdX6VS7qjPzkmYjzM7z",
  "key22": "4e2KhZfjwAdATQxjWycvP2FB5Dz9PXLR5cqWXMtz8EVj7Avico79HBeoUiN6V1ffQ5WX8kNkfE4YLF8fMnbNmPaM",
  "key23": "63wFyjFwz5UTo7oii7XHVMhDcTXbs2ewAF5xo9Qej21Y1edzMUmKAP8A8snkUk2HRobPUSMfMGN7CxZLFaZJMnXU",
  "key24": "39KHsWCHbfw6GvwY1WnY8e9yU3frWrdA5qeXMFVQ2KwrAhgCNvisR2NNazuED7Ng64j7ya3CjPY4L1BeAp5ZS71p",
  "key25": "271GvCYTBb8JJ3GRMiJZNJbxHs3QNAxRPZ1h1FucpeEuteCwtR4E4JAxjKLYtwXzdVFHxz6dR6aE9mqg4hPDMo9r",
  "key26": "EbJZGVdBqD5jStQMgmbNxcYDFUjxndUDpAb8bAwPj1y9mXWA3Vbi4gCfJVh2JCzaezTBytU9TxqxSQST9XeRKj1",
  "key27": "tYUgpvVM7hTF6esoAfkNbeWPT8NKBptr6C8T3aCMisHainakeNA2QG5WyWurxYEs4KYeFJB2hiVin4BTZCsQujP",
  "key28": "LkLrNvPeVwNUTyA9A6ELPDLWpUgagj88gGwRj9z8C32daYTAo39PDjdJQSn66ri39MG8LuvnRGqebeFv1dHrNMn",
  "key29": "2izqsTfLKeDqva6PsHFVnKm2yjcDmuft5Jcb3s8xY8zFgiN5b6iXnW8UP5YSTVVCeDdsL68vB73NZwyayyrWrDfn",
  "key30": "3AfbEH4KbupVuFUWJf7mxjUQdPXM1MvAp5s3zY4rbjgWd98cTz3Xd2wcr88e4vW3Cr2Uos8qthgJFvMq6Ldj28L1",
  "key31": "5MqUFycrMkLkojcpygawk2TNwxuXBStKBbbTQCPGNdKVEzJmfieSCvo9SntKyBQCbq9Lp6AXS4e3iuTnGSkX5FFw",
  "key32": "49AYVCydzFzfp8N6sXvZrNRDRzWLCtXpK23YCZdNwuZqXEmnqJuVsrjSb8QGVXRWYSoVm3vt3pckW9L1byKe1Kz1",
  "key33": "642sp6NinBU6sXcmrZM1Z77bDb3WW3n6VqDNW61SdUE6qehPDeushkKXEA7MvX69y6h7vLLCHZ9iPhE9froZanS4",
  "key34": "4fBmXaedof4FQEPiR7achAfMruBLXy2dykUG8GYMirBPqBj315RPXuocD9fe61CUofZwb6PBpQkjUX8r6XJhLFXM",
  "key35": "3oJ7uJzta5ZaQgjAMfCpoUjM2yZaVDvju3faniQSHmVvcKQEpvupj3CKNhe8YedKrmd3wUx5sbVWLb27dC7brd8k",
  "key36": "4uxWsao6EnFSGh2Qhprw9CkQ38A64X9MKf4GAmtTx4iyBbZLxNDCSrWteU4L4ygv2NpauLmd3MrBggPKkYrSmG6y",
  "key37": "2P1Shmr9u86muww3LZ981dPZ6mYCkqFBueZ4efjwQ8jGtFkRterydxnpu1yHdwxHiPEk7238u5SfGALQqVP6k7K9"
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
