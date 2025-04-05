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
    "2d9eDZWkUsjC5jKaspqzEJRKY81ZRBRnPjEDjmYkYgYAwXfxtyhwHHYGSs4ehrM8YAcNs3nvJgPk41Nrnir2o172"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqQLG2AKxpq2ZZCcwkWYRqnhXVjuvoWApPguAYnXTZLw8AjGjFo6JRGYZmXhfgGtHmGEjgFvVPCvDDbEcBhVVMM",
  "key1": "3rfd7e1tFDUzNsUJbjN6YmxgyRkjXE2imKHaEXVKU7AHRwjaprtthsqeUb3aLrmUZE49ymq3aVAWeTyD2JShhLzs",
  "key2": "59QGSg72JqrSDxxgLGaf2DYoyDwnFUYMUhxzYZEifrDSn8xQxtZTeJBai1As7STomtWr2fjSSmQBsZF5suZqqyvH",
  "key3": "UmpQw9eKZmGJwKv5tj9Wk6Rh1RY885Hos6FHnVthLQt2345sVahZsB9oMqmwPStVZtwa4mLLZAYUCtvnSLmJStY",
  "key4": "4wnnZ3qQqH9GwDF4vKjcLo1J1cEnuWBgewKyfPtYofzxqAdBFKhDdK5tjUN3gGa6Z5j6jZ9RRmjtdfs4uRtbjevx",
  "key5": "5EiexewufWTNuqq2GbKsimjdV4KKTLZvjzbjC9gRHtyHkusHJdRNb6Mddtncp5SbEE7Hq5YnoaUXJ9b8kXZwrbhf",
  "key6": "3YPqTCtFGfEk5Y8fC9qxPVjM6JGN96c9ddwFhHqfV2TWhcDhxuBcr1VYgddNRv53GvWVEckht78LpcUW1HYNBFhk",
  "key7": "3VrsMBwPZ37mAcGUDgzccETiG54GqLveSMkUnFsu1H3A54RsWsSt7AyXrdat1Ku5CmJPprwgcEJceXJyMY39En2h",
  "key8": "Db3cM9qehELs6HJ8z8QvkihCGGAVXJsmXRooQRTBqj8zNRY6wo7K8DCjeh3e5vyDJzU5ap9tirmLGjTaZ9TSnZL",
  "key9": "5vVCv3NHxf732JNq9qn88ZNxLhdqBJGDyUbByVWWqDRqcHuemve5ZzvmyqryJbZ7rHb3TS9CyHH9sViFKZBje8vS",
  "key10": "22aP4zFQTjTDiDigv5p5Y7zhsBUsCSPXeQasQfnChMbZabRJFDEzmD44kZPu3BFr1PegJ9tJsnTqu3XcZ9KUtAqA",
  "key11": "2TodcyQuh85bpNKDyqtA964V8KS1FAnWsZToUSEXCvkgP2hcDe1MEApGNZUahsrduQ3AHnFCx6nqN8aQvnVjGxFF",
  "key12": "yvxLZWAwTKB4g1V3H49kCAP5LNZcA5ZYdW5JZ9XUsALSCraWuENuY1Hf34Fv82EmNNpV7bRj6QkW6PfFBwNMNpU",
  "key13": "57YZqh2FvMrFfAGtMEqNdS7jAKbaeEzxsHwd56VqjryxJPCKzo4CgAyYZHaKgjWCJXFGrmuHsdNLdfVBpLXqEfxQ",
  "key14": "5w6gzbnyJmMRehE7XEY611p7rES1snhjrinKGowfovwiK5F6RGm1eGMKLck3NJmgyRBKSJAPot46KTLe8yvi9auR",
  "key15": "2zCg82e1Bw3MHZAJT3A61Cd2miGLHR8aoN92AR35cN3dVu1cMjCcByCXbh3FKud4FKeiwBnXoj981CMXTTT82WRL",
  "key16": "4GgY1Z7ENgx1MTaFhhUBKkUxxACcjnaJUYiLrazDPeN9iikThemqy4A2KSDitW8ynvnrMxABw8eMpZQ9YBPBDjQn",
  "key17": "pR9hu1mhGZw1zEEndDz8N3QVXU2y7ZvUJ6TqR8DVagtMQ4bx9tzZxx5jwffk2Tb1Jc3F4bzqi2kr1qcSUJF9n8g",
  "key18": "4drfXzi8CYiqMCuWSegTFdAZiMTFbg2YnyJndq1qBGhcpgsdk8mTn3C138APVforUYNbTgFMZy1fmtChY6TGsP8d",
  "key19": "5NCJHhVT7BmbtywXw9TepzfQ8GG856qJsmqTfYPRxCmyq55SEjG3cnNyJ9NqR5hJhhsFcDqEGPoWN1ATYuNsKw1A",
  "key20": "3AAdWRZmCB3SRKo9ZR41z1BMZm2SeuSWFagvg2LvkpHQHJdw4Hhev6A21LSYNf13ajfzVeamM2HjkvfJJswkEteA",
  "key21": "5tDbFJL6MnoHSZs9SfZYVNTHNbCwGi31Va4d9es5h64bHLXZW3pvrBw9a4NKXnRYVnxajCQzFMdh5Mdyf7J7md5o",
  "key22": "3BqVMiBRMCRW711kwdDK9GcQSdUWZfjogZqShvqQHkYPV8RMPaDqhCQ78GPqaJRUmp2wTrWwAmxLZQ7Lxeoi4oji",
  "key23": "3gY3dU893Xkr6g8qi1iYW4CEXmeK3MMKSaPngyW8BqmmB96ixqsuUebydsazrr91pwNmmFajQj4vX39sh1a19nuw",
  "key24": "rC1bk8B48Y1tfixy6x16x5aBnwPWqLcwwmGapunUwTzzAjcyZT1N7xPyhYnstZZ5zP5wmxznauzgMeQ7UUQubpJ",
  "key25": "2h263GCiNNUjaSBVEaaJMmfbmcXzAYvNwX95iCqXVspcp8S5hmyGsZaEwoppjkPybc3dDewBCSUMzYN1Why4fRbq",
  "key26": "2aZH1RiUUQsxgnYPjLPwTXyLCN732N3CjfNSLcPZhM9YficpUyic3Pw3Yco1XrLDfqQAxkg1jJkH4ND8z7uQBvcc",
  "key27": "563AFmZ5HcF8UWd72w6zbCQspBs1ZXgZZsJV2qV5w1rsz91spHU1wDzDaAToghSKRjN5tX3wZRFGPAt8XrtAm3r",
  "key28": "4JV5D61zweCcUTq78VmHCoYRbZhwFAChzxvmwXpy8DcjeEj7377MfoAE2DELT2H3wxGox1jYwX5Dh8b9MJqG5Js1",
  "key29": "3WeM5PfmCstrfWNKsnNWhKcGWtenJvLxirqpnU5iNPASugidJknPqxAaTqJhg3VdatH1SAyyNRYXE3FgsNXuoJhD"
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
