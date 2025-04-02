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
    "4oLrMpWLEM7Jp6FNhNa7TFKxF6gjuC2BpuP6v9HdKuioKtTLEs7uGoiHsctvhPW1TS3tzTWtz6PMMpqPYLspbDck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFYwScctEw61kFirZVDstk44nwBNS4inwpijnaxmDMy8CLL1ESZka7x9DGCAFAxmZDCoQHKH9L4XiDBrtThSJEg",
  "key1": "3WetVdotfEtFvisgHAdkqrzqBM8LKHLvzGTbScLxoHj3g5Yf2V2hxQctTzczFi3XZQ7cJMiutRPoKjkHv571VTis",
  "key2": "2VGAUQGfaPRGmefbi4qcM7Jd2PQkJzeyNrDr2vPisTdUw2gFQLS1zfQvDighikM95hLh8mHrwUcSi3UycWXqPqVV",
  "key3": "3oYz7ekyAP56LsSSqLXfJKeNXt2hX44QZJS1EV3Uc8FppPgiqZx6bqC33cw2cZV685EYwz4qHncfDDBk8tNr2jcE",
  "key4": "nzLUeJMjK4hp3qcdn3g8ujZ4RxnSPS7Hccs9c78qNvKviR3nZEX6Jfj1Mx6YoA8776qjY83qxUAmxzcD48A5KtK",
  "key5": "2ZJr637GtrwFgpEcyPMdjNcLZfwy3YNkD31YEXubrBNZLikXDmHeGVEv1us7TfLJsqQpSU5nG1uDNPyQW7W7EXyC",
  "key6": "3ymrAgwU4eqvSVxcxYubbBiMDnX95xPLzZnNYUP3PnvGhMHWNPqFbzHhN24NqBh4ASH5vxviaYYySnf2bBN6fo5Y",
  "key7": "5uTagCXXM951KoYVP3Z4Yt4sm88CouVXxg4wEyFBqmxKB5GNaQwrc1KqGGJZFUHfhnp1WvKwZrKYKALGK9SdPSVH",
  "key8": "5vDPXkXmz2RNnWmNBDaCJUVt8dkLRbBw4RR2x968k2e78WQXZnps49byyR8t776mxUuAmvcmukNkfpvAE4fpkWye",
  "key9": "3QJL3QigENYJKGcwsJxkTWpPE3SB6FUjrJGfLPcJpsy6hk7sqFKU8hyKeauRnvGxH2CcVL2DN2r3tDxDDacbnb4G",
  "key10": "22uC1cfQnkLhJSWAFmjyspuTbJNL3iQNtDcPH3YMVMQzGvMWce2gePQVdLvfi1m6rz6gjo79NWTwcvyGrYBSHHpP",
  "key11": "3sjvhZ99pjMwra6Q3iLRQ6yvkTXgQiWn9i9Wmkw7FXeD7iZXqTnVNDXfLYnXcfmuPd52uPHSFPMZwZE4mhMdgxCg",
  "key12": "4fZrrMp9J22LyZ971DPJ2oq9xGrBHSTDktjUwDHgG8wSRsPwkjwbpCVEV85J6GswLfTb4yfCyChZujcPNocdGr3Z",
  "key13": "5aYit1YtJjAPzZeF6qHNR1UAjuZtit6BmxA5ebuUuMakGHtZVys9dDQu7U7CWQ9KkyH7GFKigvXDQrLvz8DuKKZw",
  "key14": "3yF8WTrgWzktciZiwLZKszaFb2B8nLzwwZdjgTJWQjcCpS7d119jP4sPjwMXwaMm4nghWUN6AFDMMszouqtHoFfi",
  "key15": "4pmkcYKSA79gvWn6Zz6CtZU8gSQ3e7BH1Ct4LbA24YMZMMvivEg9tWaBusK3rqXeRPvW4AFFProFuzWUurYiCw69",
  "key16": "TTAgih4DCCVcExnBwvhDYrYgQq62AXajkSEohSVHscMTFDJD47WNmCc3jGQzyhZV2YzHKRZETnqa6fTG3jPbP2q",
  "key17": "32ydQG9N11sZtkPoVnAf3jarmbAFWgJAT7PXArPktpo3vsyknHEPDzqBDDANGK6Qz6iCRbSgsyGS1T3xzdFeG7k3",
  "key18": "2mMbmVzL6PobmDijtCRmtBPUrFhgYCbbf93jvN5bPrfWXf3irWzFyMmigFihGqzeoDNsv2UVpTe8qrgA4uDbzrHu",
  "key19": "3CrRR7tiJyZZaPbWPh5DxEt6wdcXMDyyXo9WqZFY93eKKKpdayok59HqAs5GeZFLhgFrUos1LdgCAgboP2zASssz",
  "key20": "3f8SYVDcXuD85cDzcc6Vg5AwyFPQ1AQdLQ3MqirAx48esekaHG7xN4ywWbS5Ni8wn9G3gnPg9tQg39aQpdnTxUyi",
  "key21": "2VUVKWAd8egpaTtd5ebj4cVnEi7vgSjjKYKiiHjc4Rz9eGf33E2ZhXTwLmbQT98soBBG5Y2NdmFJdd1S3RC3Ksr8",
  "key22": "9aDGETvvRH4rncKDb7LTAKaQjocfYLuN43vznwaeEaD7KYtJjDFWqenYTE3rHsyGB77HhNPEq5skTpQKNxEKdC4",
  "key23": "2NepbjKfwR5iiCxHsEY2urQVjGsHvbBQMKcnBZvEWymqZufGGXePPGyrJJistAHLwkmWyRvBWdgX8NzuSQHwrVk",
  "key24": "3c2JH1JDWQ3TfoFgF7v1ESZt3PJxVKHnVRJUJhQeVuzLTkjwxJz1tbiYqDwZTrERyA71YoLqxkLkZi9Nu3UEM3Rb",
  "key25": "3T5Z1RLcwPgZLr8utfswkSRYpdENcvPsg39mJiTgks6a3bkbFmuSmNWQkKrz8pv9M4h8AVsgL3UvH9MTH4DAcZB1",
  "key26": "5Dobb3qTAj8XSp7o5xHBxv612PmJA2tjfmwmzcDLzGshan3ckpAxtUEwQ3gXrTpb45nzQHNkf7AJgxDxXSevhef1",
  "key27": "3Sc5P7zEEBLRBtKkE82wcrLLhSXS44xKvZMiuMbqQGczx3vaXv9bFaoa9MQ1VEAJzz955gGy1rGxvUUxxY1shw32",
  "key28": "4EupyK1Z5Wb2HZSsqyZ5oDqFySVKdPPjmvkQLJMNuENARE5u5uexKnA7zQ19iEj1rhXnuxuQJmmH7EYgE1J74YoQ",
  "key29": "2mRND22YeDQLRH2xxEAFnXSHNb5ZTtyWFpkq46ayKSqDVaPZCgDurFQABafdnf3VRD2TcgjHqULk4vLXL3AbucTY",
  "key30": "4Fp4c4XDDdM7QuPnY8QfFEXqDhocKgcSRYZxXf7oTemLoScq8Dqn9UufkEimKsY5uqTwz5iEHYnFkZFnVDJyYYPc"
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
