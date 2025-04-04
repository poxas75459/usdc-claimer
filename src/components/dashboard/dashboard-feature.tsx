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
    "5zHVDHewyxuY6MxWAkFpaJJTr1mMwb7zsgTn2DRA7npBrYVLhMEs3beC5M1NBVfejvu2Us63d3mSAVbLBia7SgD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVPU1VmFA6yrvACSbLKyq2iHvvu6yfxWYkwzFhxitnSPRktaXi29Xd2BcBqCKHDGEXjHvZQtdVeAYguPWJ1pgnL",
  "key1": "23EcyxBLG6KLZw5pNH4A25hTQYEfdWBbTcdTMWNHNzmbnvfpXpcrb2FyAaH8UPukD8nMjUWERXX52LtbwEX4v1u8",
  "key2": "q1xNUppXxxGipE53muoYb6FCY4uAXxQmuEXuM9fFjjUGSnPvbUG2JpBWKbSoX1fxKUxiKUKEYUS3A9eoZj4hFsm",
  "key3": "4zXEZFn7NCip9dF7HSDZtiZ8a9k7YKzB7mFyaMDmVRzbkvGPD3vt4QuwWoAuaRpCqxiv1553HGzXZgiEyLeUoQoz",
  "key4": "TcDahDphLGSZPHpfL1XDpVXnWNU4qHtuerSCp1ehaNfo5EG8pLwmoTkh5s9k6bsNhnJAKwDtehtwX4qvPSiswbY",
  "key5": "4EdXNfVhNsfNziRjPZ2mZqdpx5zb2VmVqFXbw3GmYgiB5xFdHmpdhAZvAVq9ttP7u6ErMD2g4g8DdXYYz6mc8tmH",
  "key6": "5A97dRsAvgNzLb4aHxV8CH1s2LhV6iGgjQJ9xF7ZstD337ZtzQBX2njybKw4MpZZS28JpnWB6WsJPWDJ8LSufTX3",
  "key7": "5Gh9aAjVpEoBgZiyF5g8jQ7zrCcqXLjALeU6vrdtVKSbdQ4TFn65Pz9727LfV5kcDiP2WkczvaunvDYvrEt7qdRi",
  "key8": "rconLZbATjbhu7MFEq69s4DEQTAPBkP57BrEZks36gEhDgjaVk3SUk5AWzze2tRru3F4mxkkoU7iFLfq8yCmgsM",
  "key9": "2z4shKuuighXqqGb8HoXPJaYf47k2xd9cFEvHpXPVmQ48ef8m7GVRYQk9NJYPmVMNaAWi2YY5qWX9GuNNhKpvaNg",
  "key10": "4wAgieKBeLqo2spiJf3rtpeTyCVjtSMgytujdfHRuqie7rY4kfrFDLNA6gW6fg9gHQ6QciBnXTajyeEA95DP9qW3",
  "key11": "4qpGiuZUh9RVGtf9eZEdh5GWNGZKXFqG5xRL2vDPfzpaD2SwKe1w7NYPtpHNEvYmUn2We7igFTPa9P8SWwq8i7kg",
  "key12": "2j44PHH7ysjqFH44HCSp5qiT8GJZb6VNSxAKByq6rYbcjGzx4nPCpjwJSPYuvRNPCXN1wcJFaLGoA6pYQCA8jeX7",
  "key13": "2WQMVVQErmeTto2iSp5TQJs8QYjGjmoAeEVL2TzRBXrgfbiYJDuai3mromJGCisEYx4ugmjtfPEpAPMN1h3VWJoS",
  "key14": "39CQD8DH2SeddmdyG3djTTiot7ojfsRzHgPgtLTbNCABcYCmpnb3uu5Gdc8RxeDU79HLScScw7NdpAEXWDgAenzx",
  "key15": "4zwuiUdQyakbHy8Zj4j5hsSNikffYH7wQX6SvodwsQr4DhBB9Fc34DZCJmLHQzRdhNNhhyzDchp3qYTnWtwQTV2u",
  "key16": "3py2v5ixewjjunY63ew6KNZdCMjzRg5cYJbQFH9GxuMzsaWv5BFDhqTUVg15J9ABGS3z6CXjdBGA6iDJPySFWJ8q",
  "key17": "35PLyG3oocC4BctYXSC2GB7y9VAb4GjSvo8kbjMpLoC16vQgMoDUhGWVyn59R3kTWW5f53wWscNG1Roo6B1Vmkfb",
  "key18": "2JChzHwSEfyJgPqnH7jejAp2rwcvABoMgptUrHqJCngSqBonww7GMSgmKGMjk9wwYo2nEXByqPAsEC4EQpWLUmPP",
  "key19": "4BzfsQVAGzs69xp3MMNsid7hbA3B6yaboPtrEgqzSmMkiJWJmhiHcc52cU4pgXfKTDyacqRCt4ddnhHbi66h7i8Z",
  "key20": "4HgCzgSExrY1CrvMr8YotmKwTW7MWAks9hsMiWpVX2SWrMYqSpKVcdeB8zTcHcGFq6XcvPfKKDP75Nunkjn9YVpL",
  "key21": "4NweAE5gRjYMJ92EP6JqxRCAvgspzVp6RKMfGr1AuAJDbzPjGCE5WjwHxc99XcCnVTyxXRzNVAQL8ckdpe9HKq1Z",
  "key22": "3FnhvP8Tt6rgwxy5Jk1J5Ui2eqF3xxt6scwg2htBXFmpjMkLFk4KeNqnD2ZkYNCbhxAhmNsCGmgyeFquA5kSthrE",
  "key23": "2T9RTG7QLUB5q5RWfu3LC2QSmZ2br7yShN32hpMv4qi1XqxSkPCzXPCqdFsU7iEFzQcj3PiMb7P1asFN5uNcZy4A",
  "key24": "3HNjRHafqJDgDsHEXJL6PCDfAxqWdVVZu3eMviDQ6iqjAPQhnqkXFjEAcSLFpK7NWgWVQ5VUpsNgTVMJuqbgT5co",
  "key25": "5JHhY6UV6ctRYXfNwnwyjeA35GRUmkyAi1aJsRPWkvr9HQzcfjfQvF5nPRDy8xa6Bzc8Y3Xbag3apys6exgJKt1q",
  "key26": "4uoS4LNjt8YNSDCsRQM3yjvGDmUT2WNBhWxVmHZSum57ijxMfUqp2Wj9NCn3nXiSU8rMM2BsdcnkY4L6LDpWKasW"
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
