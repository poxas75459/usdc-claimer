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
    "4dGqKDpDQmrtTtXxgCumWVTFHQvZdf5Bpw6eRmUVqib2q6yPhtxg7QRqpGsFugjxYtkJc7ecyq97QvUBbr5HxuQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uxTA26WwGtyk7Ju6aT4BwHqZo5LFHMsCaa5ZYxsg65ndWg7upGgNki2JiR9LdvZuR2tokJjAZkA6Qytbyevjf56",
  "key1": "2UiCAhnaNPren59vh67V9KEfFKVB42d9otn8p9mRcVwD4WDkgYnzxGk1tByMFJ9oJ26jvq7xgVvKC1746P93t4go",
  "key2": "pNjbgUPbwd17T14nLZnVdtCn4QBxW3d7fpvcaiwxwUqcFvJSEYWQzMqrFAW7usT2GKhP7ZF5eGgd5hAn89V4HAk",
  "key3": "3FaTjLyAaF1ncESoVt7suNStM5Q5gaUDUwAgqnt5pBS225qTUTfFDYwfJM3rgr2zGhL3v84xxRNUriqN8aTTLMrk",
  "key4": "5qcBgyLPxo2WfxJ5VSSNYSDusngGhojgHtVqHojtYr98ivc3RFMEgPqUXAmeHAazpfLtonDWmsuv6fAE35gRpno2",
  "key5": "2fSUd5T4k6Q58CBapkdnihrNiLeyuwXzScw3YBNopNgzSLSm3Q6hNnvWD11At2nJpyTbeubCb9Pcbhp7akQdGBbU",
  "key6": "5qWc9C188QHYLVPScPBhUNjMDKwNXYRX7MdQmtXz7ChbhT11Xng9VdkqA686Mxu5voQpLzcYQr53XKGFL8tQYLWy",
  "key7": "FSTgTFYyup7t7Cr5gt2ovXsLem9CKiTXwVnQLktFvNAwspWsbnfcBz9o2nufLX5CR1TLypex8zujVWSKYsNF95i",
  "key8": "3putDBy8svS6WvSJ2yq2KvVmv7NKGSExLQJeB7h5EmkbVJVE3XTri5s27U5DS35mMe5pNFW8vxgciT3NCQy1Zagf",
  "key9": "3gsYxtBaDFMtNbkcwbNSQGrFNJjaCTzZw5b3UE7eRt6BSQ8DqAAH9x7cyzX8Rhub1R2x2EPABTdNKYn1R54yQB9D",
  "key10": "3FkrB3CNcn68cpvrgSGpyCsW5gNbQCX2u45eztGsZt4VEHuFzdGYxH4G5SatQdCcsnbiiPADQ3cojtzE6a4sDJ85",
  "key11": "5URq5hSVb9ECGj8vqS1jyiL7X5sdQZxKy13fKkQ4gMtYU4JU38HDMGvxE5txLyo461LvRRpJHTPdkXomHQxPmkyU",
  "key12": "4FJzb5adeyefx9MafXt8oBQ18ZritftJqM4qt7btVvT6bbmKgXe3xZzZ1LwQ7G29uLWqi77zQ9TGJyKn6PDP8Fae",
  "key13": "2sXspEzCoVsXStNuV6Bvv4ShnZ8hRTroXxQ7PimSZAPSV5V2V3Me46Bf4f8re6Ge4pNrFfEFDEmKPNdzncRG1rsb",
  "key14": "2VHVXFvQxxvyttgmAEwjPZa6bgFbr49gbvwCsKvASmJH87utooWToLLojFrruGndNWqiG8wSdiYpDe7QYPcS3Gqd",
  "key15": "5p5NdQXRyrGrhZ75h8EiJVyTHEtPqShKGpp49fXPRXfXSaaorU8jPT78xZrcRCtoFNGmUVoCJNpGTGEwmSq5iYt3",
  "key16": "18o39uYi6PVy86AzQHguujRJyKbu77NTTwntc9NaxGWYYHXsSiJFdexQFaAjwr1H5vA31pPKeoR9qtHdqPtbHQX",
  "key17": "JwGSYsThw2qoGBJWzK5pwRHS7xFa8gNeKvamMPkrriH58zB9kvaU7yWfPr5CfixCfQr9gSuWd6A4WfDCHZJgHZq",
  "key18": "koi1wvF84ubdd16KPvxbs6PeUu9sqhfdTQWRfipeNKEZyQ9yycPLpG8h6SgAGmS6kMLF3h7ZNstoVGjDNXqhUCL",
  "key19": "5yqvyW9UUTm9cc4jod6MDSVZMwe2HfVU4tNYCxpuDXM9VmSouzPMe6FVKKeXptQuxVKTsdeUoQSJn798EBDjzhBB",
  "key20": "2sts9dJAQe8JmtifoF4GH9ZuYY23S8JZrhTWMoS9NPJ3nYFS2ATw6k1uj3cHTMUiBen54NgixL2YnUHkUEoJr7Ni",
  "key21": "3esnwzy5AhohGBm19booWkW5AZEQU2Z7F4MpeWQkiZoTRiA2eyJzwwzhJe7EoaXfwq7w8Pecpbv1vSE6F6Gtsbpj",
  "key22": "3vw1yjPPU1bR322SU3CHwsg2qH6gB3PeaujCxe65boUVwZ7tXvEonw2VSBCKWP9cHytjMzPWYCSA88NbDd3QXEm9",
  "key23": "xbFUgSKRVaFFDH2LLabyxzgMv548XFWjKV4sBGkvDYcZLT8aFrJBSpkRCFgJDREa5D18EoHe6xrPmYHACsFTwGA",
  "key24": "5UjA9vzrsvtFTgxtQiT4hk3m6dxcCXme69PcJ6Xkf9HBWnQUhNPB171Ku9QRp4QYx86byLM2CkcyW5J6wwuquMQk",
  "key25": "aK5cSbeEFVE6qSeVDYnyZsUbqnfZF5eabKto9rSFpS47UNadr5AKQMhXx3YbE8HBUuJWLEjidZEZ8AiakHYatVC",
  "key26": "4hk7tTaiYxBP9hUUURBnvm26wENctEvAUVAtVcXVnXcNyLNkGCGWHiANxdixxQXBh99uqFPYsycGWuKqriQfNoCP",
  "key27": "mBfr7yTabvHHtp8bNw3b7UJFDYpuNoASFtgziQv6fCTKGAobJ6W9HJ9GmJAK96Ro674vaU9Wp77KUSgBDc6vps5",
  "key28": "5wFJcTXhHwa1pLULbjrUbwS3okr6XpAbfxVDY28rw11e4aQLmtViaLDDnW6R22KGVd6tWtYRNWfprffHGcvetSL",
  "key29": "3tYvm9QTNyTua2NQRMfB1rEtguJWcbWRLXfyJVWttBvvWXwrkuU5o4CALrQ4xVZy9PcgU8a4oGp8ineBdu5eFY33",
  "key30": "4cZWtxZ9pJaRHG3tVnguLYisSAWznmsM8GDTi2tjeWNJgQjK9dwq1Vodcv8p2KxAD2aGgXgdfbRbjxMpWA3tboDd",
  "key31": "4Ui8yMmHCcjeDBxCYXK8G2inDzaRE9n5kXK8GN2oJjpXdh1sJRP7qAtzASeTnWymjkJxZ3GX56xjzHu4pUs7eDna",
  "key32": "5fJH5s5yD41junmWVyimjQ62mEHnSEJpGg6SnqtTozMRBSTnnKARGXUS2Gqdghvhiek7rfrQDgqmPsKgg5WRc36n",
  "key33": "2C4xaGMmgXC1KCS5UTitfiYJT4aVmRYUDasPSgEWD53irBh2NZEunaz5XphwEPnLHqCRd6kuY8Bey4QeFC27wpns",
  "key34": "5WGedenTNoLrconJRZYdP5m49W67ft3h3fyzc9goWb4vNiiyU2DhFDkoQeeaiX35RU17JbR2xmGWy91AJt3E8imz",
  "key35": "5ANZPJQ4BwrzJ5pZPt3AoFTiPFpk6ezJ1mf7C7HMeNPZuPGpFHwo4bdwf6qWPhfKa6zJKb9bDPBWNAbr4DP17qeT",
  "key36": "Be1omG5TxVrjbD5JW2Ma85vzXPYGYnPq9tfZGz6ekvDXVcuS8xBujcM2byyZEJCgwkQrpaCLH16ZzcSWtq1Cu5z",
  "key37": "5Dj3vWmD5uJxZortKtLQCnD3je3WUK6xjQCbPpyzBEwC6ZLYSqJxvdY8FV64JuUYaabtC24ZBN7nMAXTNNhsC1qT"
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
