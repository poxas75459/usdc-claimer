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
    "3JT3prKpd9GQNE8PBtXnUkzMytfqYurDZrxYtPS9DgZftc8pipp1pNQxHHzGA4QvnENNkgVeLLjubtBhfQnxWim4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnJyT2DLPM8fKKeciwrP2cji7E9iU3HgWmWSP4mNNRLiKxskajPnGDeCFjYK9UVwtZgLryxLgrmj9JnWQK48PS8",
  "key1": "2E7t3hdeBKBjiLfrkqi3vycQphHVZrpugKzK14AQiQJAfuvEweKJKDNZtiBnQb85FXTmWXX19UeNcYgARp9rNvRf",
  "key2": "5gYbcKLQpFwf2Z2rPXHYqSb4fif4qtCKCbpPxtKp1nrfZjjmnmBLcsU4QStc5V3BmknJdRF8yvZ39oqh9NEQrbCR",
  "key3": "2mGPedrNNx8T6yAE6b32stGgTidnYa24wq8xrJTSTeNEJihkgBfxmA5qw8ssHy1t9G2epe21F24z3CBYqV8tPYWV",
  "key4": "3oSMAivGuretgUYuBEcr9G7BWEJysBQmuo952tFmW8J9HWJTAQ6EDxFNyMCqryTz27bJsBeVdPKCY6m2eCzKPbZN",
  "key5": "YBNFPd59v27daDrEkfH4p1SDNVymywn3x9k54QxJz8mvQMWJHE2Vdiy1J1aArXkU7A6kHnnvdKS7PDkrG7E9VDr",
  "key6": "3X4d3wMzG9vJzitgU6suxX6HxqwLHZmKsFe2AqDFZ1oyFF1bXj2LNfxMKvuE7m7TQbvShsfETGK97F5kXLz3YzFf",
  "key7": "2RSkngFQBVXAqvCahodXiuD9iwYe2Dgfs8WsMpNizksCCdVR8WeaeWyxxHYtEctGP2kA5tHL3sXEPt9TwhDRudYz",
  "key8": "5Hb9eLqWqA8iNxn54MkoDDhHCox3UWwrAHDNB3h2a4fNUAZayvVyMmpUUT68SVi6rjJqrcpKAiGMdxJqNRDAqeZR",
  "key9": "4PyYBhtbHtLozjNz2HLY1AssBWje28DJ6y4aKkrQ3VWa9RRvQmHcu3UmEQKaNAaSHraKytgfPbinRtfNA9EUmwMh",
  "key10": "MqxtBSQhUzfQ8TjP6Li8Hvh7ifj29jE9zAsyGTWmq4ihKYSx74MqUfFM9kqB4uJNTDYLwvc11Cgwwyt2EWLTTAA",
  "key11": "5x7jsFErMZYcByCte8A2DfypPHs7U2LGqPiLVvGd2GQAhbGjmTMjCvYhRqfMWdt4wT6L2ZcAvLX8pEeB54bBsMJN",
  "key12": "4PZWiB934yTisUiqBr9W3e6J8i4aFTzKmsQbyvrDK2HzWNa17TJDGwgbDAbkyddQhVeZbNVFYqRg6bvigNWZd65q",
  "key13": "5YDN733VgJbAm6CiM1Wh1JYLtoSBwro3pAC1q5AsqNUPJnQPiyQxkiYxMtJmnycz5Udh1F46PWCu2NGFUbrWq8uM",
  "key14": "4A4tMJBGQf7qqCMupVLx1Zk1tuzsGQPpAHS92FdbHD7phQ9ggGTCE15Yr4vP88apSa3n9wUfXiMjRZ6gitQ1Gzxd",
  "key15": "4stPddbncgDpjTiWfuWhQk4qvjJKNn67jKy5E7wRDn1MGHPBtFRSs4tsnzTzNC86ceq6JAz6RHJutMJcbiHheUYi",
  "key16": "3mX7P5nnb3PfQD3BKEdwKdG9d3C8H1LVFmmVWn5j9kLrARXNz4jBizy2kBpHxnHNqcdxNppXnceM3wi8rhdB9r9m",
  "key17": "3hBCdDhArdTXmEePCssRcYpukPyXT9dLfay5uBdzZPaQwPCiF8xNFbYQiMUKbBhWr2EhaEkfQ2VvLCc9izfZ1Mf",
  "key18": "5aLYvCKMCyAdU1CSVJxqoRHsPfWcX3hQy2ASMUodexrj7NLMjwAp3BXqZTWx18gxxzdPTrJP2UnVQcPZ9h6MTkye",
  "key19": "3JsXDWgZTLpfwzaFhgE8msqf9PSihzYfugVLT25ouqsr1mQUXfRrNjr6ok9a3XjtVuYWA6sNkzzQ9EJaR3o37x2X",
  "key20": "4YhibsDhiHXWMV9Aa6m1EwK7BNxfvqQgdtoSoPsrCmEAij2s8ZfhPtsA2tCLWWmsc1H9jZpALDVixib4cb8KaRQM",
  "key21": "5h6KYYi9yvn8eUAgxAAJ51UUZ6kyzHAe9Vv1JwqgDjTYa7XexrUX8bPLPzWDDtHheamR6WPbJEMhs9xUQneNdBA3",
  "key22": "mTd65SpkmdW2Kvqybw33u3E6K5eBc1Q74Nm9qmCvVr9UcZB2xS3eCD1FN92A22jGe5RE2Y2TaQyVHEZXZqJ1pdG",
  "key23": "65Svmjp7V7w4ENcXk7pZGwtmYXLthCBjG47GmAy1LzTKhWZHu4ZWj6MfaBwJC7MKTaPbHRFv1KyumQYjXsidcV4r",
  "key24": "23n2epmGomC2GbnGFgFWCXdRMahBzrJ1m8gRgXvBhA9ucAFQuSR79VKoHprrf7XuXEigv4gNST4X49hokHvQSu6V",
  "key25": "2hzi6P9Zdvbso9tUPvFJMPa6iraZmShcCJRkyvkdCFL6hRt7op2taqopDX9Q9RwnqJAUWpGphep4GVLont3A8KMC",
  "key26": "QSsj9HXxBR1D4C2Bqi9mEuNM8sZTzZ91BKfmu5g3T2A4APCvu1BGFyYv6WXEswnpQzwhBpXnwWZQGN7TGhutTgF",
  "key27": "5DVAJLzH91Rky4uxk1oB81mRihKEwCHUoCqwtQ1ocGh1qz1czPPY9ME6F4xfs1JpwtfAFEosbFUrcL5UL8T3rxtW",
  "key28": "2423hZijvZH6G7Tooiy1LFURYXzuAxqmV7nJbcwZUzBCobinDATtBXH6GBw5DwEFAE9WZj44cDWb4E3z5DfjeANe",
  "key29": "hACWLQ5aVMygr9L8DyktC2cYM3ouSegrs2FMxMomzkdSr5MywJnCvkVEvN8NpmPAaoUsQtj2aBpdooFyvmYnHim",
  "key30": "2ZahU3W6nGLNNhDeRbdYmXmWVDBVeCM7ykT2iEcfvtjkn3841XvfSScNp6xSWdWBpCnDUqGo9Nsqu8bxWJArZGy2",
  "key31": "5S5qnBkVSF3oBTET4QHp9arMFUFbqd2BpV2qBAbCmqvUK6u2x9UwMmw8oiKUj5sunUu3KETTtTJz77cTBSL7wRUA",
  "key32": "2o4odKs2SmhoXXY6Z5YYsmHodXMXshpBYk5ycHeZ3hDrzaGuXbb1TvM4aTJFCXwBn2AmSFeKfTs8MbybM7g3eyKt",
  "key33": "56DzNBjFCS6F6dWBvZ1oQznxdH2EsQ4aa1ziDGHnZFvoG1kqHAtEvdcowvUu9tpJHE4yDB4mkWvcbkytJHP579tS",
  "key34": "3XGQqk5ibtExYK91ugM5bEJgrMEqx16xnDxr5X4KDUHTV2RhgwoMU46RHngnWNwP1CUA7EN6Q3e8huvkj5w2fEVQ"
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
