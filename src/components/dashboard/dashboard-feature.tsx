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
    "2en5jhbcj8eyAZXeuDqTS8JwdCnd5FbWGgm5EgS82L6mSyeW7S7tHnL8njxj6kDBDPRB1XystvRuEN7YHWhUWdup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "248Z4kn3akwfWaJiRLDNDVyASy82EjTscfJpFH9YBekLixnHWf9PvHvH19Nx8aw139EPxWfYckfUmyADF553wnrd",
  "key1": "4ZvnmHXaNVDgfTKXgk6BUsX4xTvcUTho3HoJUXLrkf3ZCuhXRArAis7SHknSvmEr5DYMGEi1M6jGtFEeJzpjwpxf",
  "key2": "2SYnmVoMmoYPQx7BBpcTHnNwA7DGxM7xR6geQSFoE27oGKTSCNdeqWznjGgUranN9B2VLALSyjPEUbUSmsGLMxmw",
  "key3": "27FcXk9FDEnYBvfyYcgL42HMPgEAjbD5UnJZU7iyAfCVpNXKemTqsiyP2UmdH3bmC4qKGMX1nvR5Lh5GhyUPFZaj",
  "key4": "2CFnHmxeiAniBgCx5WXWESGsYNkui2wfUneFSPU1rpxYSC7gmYuvahPWhUBWeJkDw88sRo2zvPV745JrVhiTXwxC",
  "key5": "3kDEF28G2nzDyR7VdNEACSHHDAaMBzzomxK9qHiKPW4BgYYrGPyneSPXoUCQ4vmucSM8pBFyrVjuc2rTbMtJLLYU",
  "key6": "3GKrVg7zQyQDyS3fRBhZn2KV11KJT9EeAq8hbdhDDx1UMdR3xSuo8NU66V86ZZPZhGjMBMKhehbyQWWNN3b8pfzp",
  "key7": "wgb38c4RiYy3xfyxjiSQ2RLBTtFokCnMBiby6ANTYK5rhZcUJS1LPRwc3gqtmJwv66GFDW9vxEjYXcusTTRxuiU",
  "key8": "pXjaJoPYuMQqkZtyji6aYPmwCUx7ooxoihszKNgYNqUUn75f6Z24kyhs2v3qrc37zuFZxABmeMwb5AJgeKMvVFw",
  "key9": "5kp6oZRfXKgwfE6mQqJ6sbAd3VZTLvkmVy8gma6qTKnLoh4mQk8t9GZtndTrXMHNAovjoSa5MBxBCNwWuNujGHxF",
  "key10": "32mGydP63yZgr4dhCJGKFMfQ7nm5peU4zM1ev4KPdXLGY5kwQpEsosBZxaMqw1xiGdHUBM2bJxpGsSYJopUUovN",
  "key11": "5Xzxo7StjXMif8iqKsGmj7kBJ9CUgDYk5HtptNrWMPdrFzqC1Jr2uF1M7Z1tPkdRm9kwGcsjDrsuDVQ1DGXw1Ndi",
  "key12": "grgUtd5VA7f6WcM4L4XFk5gYenmCow58mfmnJszLHeiQ3hLvy8WoG8nmQK1hqgS8TmiBeQsU6zcVMi5oCnHieL6",
  "key13": "2Ja6BGn84XWiVkmmYUmrfRYMPzTMCyDkFjUgRnSaiJgEjTBg3sD4R2h9TeQGB1ru2UjFVC9nFdPzaVzbXezE8REZ",
  "key14": "4xthFspWVQctH8qVF3mCycrQwBxpFEh9N78xFua4qFfZj97ALwHCoWdxJD5oKBgGmKJ32zU5mWkbCs994AzpYSG4",
  "key15": "3BiJjsXVdb1o8ikMye9k9pVHKeXcGmaEhE7tack2WVkWMAwCBiwJ7xMeYqeMAZvYHruMJp5fBiLiHbYDTRQ7kSTs",
  "key16": "5dmPMa1rsbYh3msrPFNp7BUDKTDGu7Mre1ngJC7oiuU1gvsx8bGBMT4AYHw5F8NFWWQygucRNAsroiVsHL1XRyJc",
  "key17": "4fBsRv1TdGa7nApXKVJaooC5X2MGwUCXCpLRXgumgg81Ryk924VjQJxrycRC2RZfXtRU8xxGW8Eoiwg9B6oU6BfT",
  "key18": "5f3rL6ogquXxCA8SRH5Q3EktfdZWh74zExnUpvxD7xshAf6gZ2mPEogZ9FCmtovY44EddbPPdTX9wDCgSC1Aa5Jr",
  "key19": "2w5MpkdfYkx9cDW4Df71QNA97U1T2xpUdUxjhXWX6aAmrJMzxkh8PPZHU218WZ8GuWDyQ2ebeciKYcKfpvT4cd5n",
  "key20": "2yx4WsK9DcNWdTqDUBYjC3dmFjwf2AVHtyNAGPaYVePuRztuLUpWphwEhhvKw9fPtJoyESyFV8nanFTw3soPu8BZ",
  "key21": "491mGCKAPifXdd2AUwdFMTQgCep8M7MVLaKGbyN4WxCFAC6HHJ7bF5ZM8RRahLYNshbsMovYqwWyAyyNukFn5s5D",
  "key22": "3kbxTXXpDNpX7JcQkU2Wvb5Kj6FF36iJnE5i6iptFVwGuzHCT4oV4HZuTNrJ2aREw8Edsxv9iNouwq931poSNBKQ",
  "key23": "3E9PrW9CpyaCXrm7VY5bd3DCm6KAR7D5XcdEetytfYW6aLzZLvRWtqB9F7dJZMq2rJ3iaYwkbniJvQWZQVu5qfNe",
  "key24": "2XPkYVaodtrieY5YaPMp6vfyEjTQttATQRbmxQSVH8g4YsaS7nJVv83XdRQFevLw8BeM3yk5E8RdtAsvi5whaYD8",
  "key25": "kyK7eusN3YM6UMhLmuxiWTTwUsbxS5sZZ2RMxX89rEg6qmMSvEw8JdLm8QTUhrDia2aevdHA8hGdiPVEduzTuKr",
  "key26": "3GgfyedwLqGaGw7YcHTrdTyCPmVfBXqMGVNs4mmTt4MQG5UsTAQHCoDSxpgUvGVJpdwzHjVWE6c6sghrCnAtsZsd",
  "key27": "4xqGD4EEjLE5NCHvJKQ4oDkuCrxqfaA4zVwYxHG7eLZNkkFoMaPJzw2z78Cjh1JcLY3P5NBNQKRwHJtj8RbSq59T",
  "key28": "2iv3yAxSHdrWSDfWm1jyvgmkib1UWAi5gM4BLwTnLpzExpc67qqib9mTnQdqFBeviG66reuyyzcdR8Njr6B8Y4B6",
  "key29": "3Le9P7KMN1TP9i9B1w1dPtoTZMMobGzPbpnSBCY7wrP55mECj9MNcxfVf89hfRkimwniEoh2j5r7PQbu1x7AyR8c"
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
