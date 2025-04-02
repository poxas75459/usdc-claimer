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
    "3mR6VUKWmgVXa8UYq6D7xXEskxzzxkvPZMbciZbYdEgTo3QX4K8VCRny4kW1fGzkrDYSojwGkhoWxAc7MZt4SzeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgC4Aa6bdbe21a3wy2Thky24FsLNrHyoHyGjze1CEakHF6XnPVuDMUwbqCcgAbsvx8xttkLyPHLokGppQiYfWRN",
  "key1": "5d9kae2kSexrp9nYvG8cCEYCqBCWeqp2u925bj7sqAVcu4wqoq2aH6WuiAa12hbdxEyvB8NPJfGmCSVtyggMGA3c",
  "key2": "3K8ECdRzshGQbQqzv3WDznBxaQNFGAB15uoTr185DXTEMtzFWoDyM7VZ5kd2xjJAtvW5UacXAQrvxYKQEwWmbsD",
  "key3": "9e3SbLhcesgnKmxJJoYKuH1RRJDbNRXe7drLcMriMgF4Db5ZCwZLbE7pjPtmcjvnTciEwVTdhSbeJ5EZyrRC14F",
  "key4": "31Xyzgfd29zrCKEaJEQTcXRvvLF9Asv3U6cGA35EJTiHXZ6FzxzNaar4th9yZgUViziMryudpqc4uvjUEBECsQRw",
  "key5": "wf177JCKeTANG4rG1kFjPNtAkbeyf2afRM3WQuGWsZzzy9TuXtxL2DyFcYgFDxphMNxZnMwr9T7SjHP9QUxAQ73",
  "key6": "61vPe7J7Qyx5znQRZzL19sh43EReyj4tTw3cqxEKiUaBTqkQ8xhTbVTrxHbAb8E8SfTRj6X8DBEuLMHAhhHFN9ti",
  "key7": "SuXUdKPUtS5knLgJ4ZdSHdxQyNYPstCs4eVA1P7KEQTV3p5qKWj2vM35kvnfcnQsB85JD1Xf6vRczxY4G8snXeG",
  "key8": "4UbxVYdrw3TDBLLgc47eA3B8e4sSzZ5NfYGXQBPXQ5GoczSsaxGTP7eqPNajqAxa9s37f3AftcMYL7mpjCet9NUK",
  "key9": "5jLJzYZZJMXPSU3gzZK9cDUcRAECGqZaSTab6NtcSXAuRcrYFZMCEqjskUK1kcZKyUviazCsazGTvANiNkhqJ1HZ",
  "key10": "3Z8tisR7f4a8DiUhhwwQS6ahmtTFWRmi5kwJvHJqtbFTRBiJPP2q5MMtYterVnebVYc9ekpNLpMWRxWEQtJepqTJ",
  "key11": "62DGrNgdsKAWuih7PzQN2fHGysXkcmgJ6EcXiVvTL3kbmD8BajPjcoX4LN9Txwg6gBYfAL6GvARgMWtKTJznpgnA",
  "key12": "4ajgGU5nvHdtWATk5fMVWKUA633EmKuvbi7oCAE6qpC8YRtb24nzssgJhBkxnQo7badv183JiATfFNXLBqpQhYyB",
  "key13": "639YH9E8A6HWLWrCUBseHHubYMyN4QGV3NEBTtxA6oVLAfFLijGaDpFnx1yGodhLm8oKd37sgLhaEdB1CHiEDodT",
  "key14": "2Wx1wnfdWFrH2iLbdtQKa921Tvg7PZb2RH3XLziyN28LLuPQ1BqgYaSMi1hzbfHCnSV8BTRKt4vYCcJT99UpXvBZ",
  "key15": "2jaoRWi5j97fK9JuJF9rdCwXZ83rZLUqG6pEgDRgzkGgrrVz6wE7y9vKwXrSbi7qSPNcp7222G9odMTXivPuZdsX",
  "key16": "57etN4aTmaqZmDCxdQ7x3CbYN8mozcf5MHSeTU7L2aBryMWCk7hWrGaBy5CFwkao8otRKT317uoA3sWQp7w8uVH1",
  "key17": "4aKgd644EpXuLatkDULckNu62eymsYPFKk7WBwPQ6k79mF1EsLVPnz6Ka5BoyQxmAZ2CynxgmoRb7dzqERrCfEef",
  "key18": "YBFWvnG5vsm7yszBKRiRqfHzbyYYVRFcNzETWph6tp3zcbhJU7ZA462FUMxLjsn13kBzma61afnzR1VWnQeCocC",
  "key19": "2vcmVc5Lnr4TaNwtnUJWtRu5DqgbQnSc1tU1MmgDvPZPCBv58Cy2z3MevwyzifbaHHoXFYVdVFQYfVaZd8CK8ptc",
  "key20": "3YXtvZREWcjBx9CbXXU68kyzchqaEHNgZZkAjw3zFGkatoLW7ZTfBQHukiRWigRLcAdfu1tNBcfnBDATMyv3Ei6G",
  "key21": "3fdjBQJkHYiHHHWPGDW3GTB8RU58UArdohJku1GXNm9iUQVwpqaixUCMCgJzEwmW12nugHZHv61m9ZGNL1ZvpvYo",
  "key22": "DuUWgYr6ZvvLif9nthkb4m7bYbPkbD2BFPmRAR7QS85xqTh9oLTFqaUKErjFk6NfAvA1nX2B1rMYhYd3cQEdCyx",
  "key23": "3Zjw1FmTpRgN9g9ouXc9rwxCj6RqgLAy6ZiFDf9Tf5wwngU8z9GMwgi3odbdzUcjUKdmyzR2KTfARZ9RF8xtdrRo",
  "key24": "5fJbmHd69KQpUu41AjgnwbJKUZvdqVYHfjrBD47v8xRBKn9drwHk1V1iPx6jXJwkz8qwThZcoaFGe6HREce2E6iQ",
  "key25": "2WsZuTAx3BPyXBFRM6GYZ7LdEeXqyJFyaC4qaEnKFtc1uvm3mQX3UDJxiSFawj4FyePYZv6NiqfwgTsAXYx5ZpkL",
  "key26": "5hvxoU8tTPCZMkoSqdHL1p9pw2sRQmRFZD2TjSWDkpvXxCurk4kGin8f6xPfJtHzMyT1awNrLxMDCKjLqxVbBRgj",
  "key27": "2pddCy5as5HDVYTHBL1QgnXHmKMxEBpEoXxHGSAwh2QWaSGcDnyfNqS2YiXaHzZkW2BPMqT59JLeHe8Cwrzdwike",
  "key28": "wkwToE94mmzFmQnGNXBudYUeMe1EUfoxuCKCKwauvDimjEZqvewwUhhfc7Y7NG1kCJ2hhCogQZNF4ASQpBFKSVR",
  "key29": "7qUo3Zc74jD2bAPjhtPumcZRKwZR861mNfyaCk78C71iQaBTDgPZcyC77h5fRdgxywwiEoiHzoxxxh8jSkn1onn",
  "key30": "2vEkMzvz6YnMAdocHi1hg178kLNTf5XDRQvP32pUBCZHHtXBEV3JjqpATatNyXCCdunU4m8oR48uxsC96HHMyQPZ"
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
