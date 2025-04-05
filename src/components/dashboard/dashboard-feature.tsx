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
    "4GfdTYEtKgfFYuL4HmAVsu8SrLuK9BHwRCYafVAXQNgpPmqPA68uS95uuEGT6V2WLqoig2HFiqBxTQR2pn8CSMfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43BU5ABMrV1La64EdrWgobNZ9u63G11rz3vv8NdfCM6HMpXPaHpT8fLRe8ToqCkje1wzMWNG8GHJYA1KhHFJPM7Q",
  "key1": "3px3DAShdLGEkLB2TftCFVPW4AwUwUjBEnzcPoRZboKVoTbF91D3YTqepXq6bm1GTEe3arm8Tw4MyP7ovckYxFeF",
  "key2": "3wnMUUeqWTiaaTTxkmckxCgSqeyB1goVGdjZ69U8gK8z2G2g65LbWNAWUTGaztxA8sRP8XLsW9E63hHp9XKSngf3",
  "key3": "3qdC7ALzYM5UnmURrTcbUtQJkHQzfrP2rwF2kW7c7JPfKAMCy9ohp8cRQa1Pqr5EHc3H8zN5XKsuQSsgBSZerVM7",
  "key4": "2GwvULgkRwzndaQ11tfnVvYdayJeuSv7twAXGqC8hngYbD6REVGy2W2LPfqrmxDY4zPvDX9Up47nHT3nKYAQX4rL",
  "key5": "32u3TPt8gQokyNcq6zf2WVBJxCaXTb22Su21Gf8p36ZASXtzJstkC14ZPodvJugxksEBTgjhFPsP71JyqSSdvkgU",
  "key6": "3eu3ee5aa7GAgErc6wpECb643vrMQbx2r3J86vnFmvkFaXzFBMwrU7ktg8fvBixeQLdu1Fiwvz63BQWQc4RjTBQo",
  "key7": "4D6hW3Zq1hRJGQeKGDeXsSiYKDyUXYksmcw5KC6KfWK7Xg3jjBtc2Ds8o1GgFmXqNe8X8sawDjYphD7eBww4oYP8",
  "key8": "2qPUgdhYePswr5ecZCt5PGS9UoKfYN35gzu4Ez77wZY3aoJKcK6oE7P6usM23FPAnjLR23RY5g5Wja2ra36BJn3q",
  "key9": "5ApcRp3LKUEsF1kz181CJYdXvuHMDZyVNc92MCNAgf7gRHbUPHeAUmcChrVp39zA2JX75e8jF9nrwcqbjXCv3iKs",
  "key10": "5gBSpeDeuPzPjPQFaKcECS31czZyD3oAwyZBfLSGLGGeqvBxcAaHctwSZYUrS8WaSML7EWSuTtXWe5b1Fiwp3iNf",
  "key11": "2EAQ1mAxHkV7pqjgbnYgerRuJEqmsJ3SpU7pzU3ePnVMGjzsz2qNotifMvo2LLSow49rkJ4wmhhTaABCtbtvSTPb",
  "key12": "4wJm8HTYR4fZEZWc2r8NXTds6xSKTedbBMFLadBjJwMe64KW7v9JjbfQitA2nwUM175y5onQPTbainfRBJANFqjz",
  "key13": "58K7sUtVeJ3THLjEYmFHV75fNYWAXXWVJQ8YnQMUoEohicp8AQB3QGFu5ZckGVJk4T2oKHw3MUB4ReYYdf5paXAT",
  "key14": "qxjTZKVmqN16q6QrWyVG7g7wV91iNLZc3PxGMEz9k5ajgmHanSYyWs7z39Faga78xveSdRRf2BeZgcpUpQrvemW",
  "key15": "4Fz7keW1rXcE7ydBW6L2YN2reLfjTS63zQVhCAKwBckztvNdqPvAibAdHup3rKJ3ayxGhTBFdzZRJ9Sh6ASyxenE",
  "key16": "tQ18JV5jfggvpNm2HNZTbswcGjFtBGpgKp7RL3nYNgTAXkeSkcqzJdjyZstN9QPUsjFamkXeegm6Ur9TB7SPtYV",
  "key17": "5SH51XtsAYWYsY8wtD4YZH5xCWbpcF2D8fYhHtg3T7CAj9rgcgpDCEJmRWTsLKyDr3191Mg7476zPJLcQWMccNfo",
  "key18": "56EpBcxPnJ96ph48NKcs1MvqKUd5xzSZDjdTVcxcz7ZVcHHWCJmYPD3m1bdCPz66vDbB2DjZTy1HMJUriQDdtDLW",
  "key19": "3tnK4jQf3qwiTk7dusqQnmxc2t6bgJmBGcBhAsT9oP4NhBXHbgyjRMgVAXEhaZss7GYcDxzbSai19iryxgGiyypT",
  "key20": "5jUWjQyfdaUBsBnCgtjFY5cjGfAQ4w21xc5hWym89LLCXbJ7sJYZ8DwgFigN3WHzeJy46KBCbn9fEDf6yoLNeUAD",
  "key21": "2Y9u5xG5YrqLmNEXj2w7Jz2vBDk3ioauePm3pHHko44xqmMVNtDGvVbA287dHdG96thgp55fgPZmEoo1J4DZLMpy",
  "key22": "3wdxvee7thMFhW9XCBoiVGBgpxd6YYcEnoWMFY1BJcyeJuAm3xthyXxkBNL2gyL54nhAATAh2khSyJrDjfTYvGa4",
  "key23": "2qkd81KNvUNHZ6BAHUpB7hHvat2i99KzLEgKo7u9HtP2GxhapNsAWqX8ct1Ejkpao7vHQt7LkX2UeHQVMvU5F2AL",
  "key24": "dWCJU6mNhEtLzpQSRZetwYd54p5nDCrVBZQapAYRosiAt5vma1LhbgToPugaEedu9YXofn5yXeVQV13UAJ2VtGV",
  "key25": "59zXYVSprsQ35LWr8pPh4PRoS8nZx3TmGmMNvPtCe4M8TfzCB5NqKy1wYeuyAQbHCF7kHEu3xpc8eGyvBZUXKnYy"
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
