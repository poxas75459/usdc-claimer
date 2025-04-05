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
    "2git3GbMXpxKPCLoQjcsXxr9cdfSMPA4MQryiP7aejjyHHma5cahJwL7a4ZrhERuELz9LRZvpxeiaBgjX1yx19VS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4FqsnnLb8ntc1rRWnVVhSUBpfGNwTBczvT7AmUEWmQmKwcjhUoJwKMSVXKfzegkCcAGCwN7hDoXgN2zWnPXxdA",
  "key1": "4QhxMF4pUJR4pDGgaESppfJbmNYTx51ZRVponjCPHp8JHauesxT2gKdHyrnbb92VtaFopTncTGRrBiHRCgzQuLmq",
  "key2": "rX5zkzEhFYgb9GxYjJSP3m62Fhr7JoENajNMSZ9Znyrk6UWyVtkbBRuBXpiLGgDX2ugoNW6nHsN5qpsH9zijr2u",
  "key3": "4NjFRf8ZmwVk2MkPi79LuTjtBxNNDDNve3xy8aMVTJYbyLFQACarjYatSw7ZqPicN3rh4Wrmi5Cf4SRudm7hptNB",
  "key4": "2YY9c3XfJLeFmDRB3pHofy9c4jELRcPpXK8VdHBkbvHZJct2gwb1BML4knZe5CQzZafaQUwi9NzBXoWYPWdQASiP",
  "key5": "5QSh2Qqo1DGwhsDqXkFmWyhvFCTkemvKRQNLCqng8rtEMtFgBevJt3gPCQDLPJN5kqYuZsaKwHRvfbZ7NVKXYK1x",
  "key6": "3VvPGCtH8GAw2fcPS9oe9phPfw7ZLJACwRSDj9qoDsbNvKCYReMGA9HkZSDfKZ4fFn3V3ouEUsdixEHC9i77YcfM",
  "key7": "2bg6C6ehDdHHs44ZA19BrbXFjx2gN8dQ7Uqfymm9K5PBgaPxbdW737JY662PAgwg7GbmBRQ6Yd9bpDRaJFkwACLo",
  "key8": "3NjHbJ58mhtB7M4jGhouFkfVVkWkEbxxis3fmFV3ajtNKp7efkgBEdxwyYGfV7i3MJZaamaasnCL716keGZUp7BY",
  "key9": "5htk2bD7zvpkgr56mGNyxXtDAZfFUyci63oQikpujkvJvKHK7u61NtPpjfCEmr5gKuDTKfY6Qj8D1jHVRMM8Ws51",
  "key10": "56KuuBoKvbxssNnhgmpzDPrPqqcL2u7UHmTJT8wYwqTrEU4mZnks2exwdgo5MozMBcBc25AUu3Hrn5kyiChx1xye",
  "key11": "2qjfsnpdXC246sBUPzCzAL9gzQiCSSAxDCabd1Ei8sotjR4mTww1vwepTFypzwoB37YBxWwBsQiKU5Grnpz2UD3W",
  "key12": "4fckwg2mGc5BUbeyJHeNRedJYcggH1wjJn4zUeGPjN2t9UTadq3HhbGf9Sg1a1cKzhQS9ARbcfuH51wySmpKZhrY",
  "key13": "3MzzVMq8HUsA3XwQSoJ4U7f52UQ6K7atwwt9qVuVBEDp2BPdAZVKsKFEn84iSyX1pPN37z5okwWTUUVoEgxrcmBR",
  "key14": "2zDCZvbSaxQZCH3CyXMorV342LtrUK6DXgP3ccUnhNj3MKc8eZHFaucdpHbo3e7eDhPJEvjK3movhDVxTy79znFM",
  "key15": "3eLPMoiRaDM8RuaRnvSkNi44KEU6PPTDKBAvxonGuFyCqpqaJaNL3qfrnyq2sjhm7CsfZe3u4G9orXFWPWKtBmE5",
  "key16": "4jdhN2ozSxEFAN2qNq9D56H7J66XPAMBtJr9yvu8NcuDyiARuerLucgUWdEs5kPdpmAyf3DoQj8XGXkstPH4Hbo",
  "key17": "5JfyRotzvKF2WbdGWR6RD6Ec8QSWFcJ5dppP6pj3FXdPpZxF2dAzughuVqgLdAVPQvNucwUHFaZFWGwp6MdVJ9tn",
  "key18": "25D1HRWGJYWqR5w6fY8ibvwdoaHJJUBV2CQFGqngd7mV1GgeEfhtbxibiY4sDhk5gZMki7hVGmqdT9S7W6P9qFE5",
  "key19": "46fYN5PdPJdERBk6wNeZLMfpzBBKURX4cCSH1jiF3FC2ySk9rQfo2amSM9aCbRtedL7i4zLyfoQTsVjK739Pxt7",
  "key20": "3bJrPq3CEU7e5t2ApZyzr4BSPoX6M22dqDqTWvz1m35QtNKAABGSBFSroEirNqD39CVkfrBQgg2JQWy2jCuTipCu",
  "key21": "2Dj8kFL9Qisde6AiB8rv5mnRMZCUSRdPch6XDEm7iYU5jaJb9JpsCwLNMefBczwFAmiU2y6AZXh9c4dryKFuTwgE",
  "key22": "2RS37KU52sG6wL4rRxvoXDnKa8JMY3wTTz6jYqaWCraVHmn8gUc3tk5b51dAJN7gMYwpKQgMD4fCtUywPmfcX2TC",
  "key23": "4yQPh7ruv9v9AeREPV4c9tw4Q9uVeBKQs5DJPZHDUj6iZpTcYi2eXQpQCnbH6WiDQtZ3VoD6VpXsnqdyGyLi1L3i",
  "key24": "2YsZEUUxBHX68wPhLSqqPfmepK47cEM9A5fKNqy7nRucPgbAHWr8FmhvxvaTFcr1Vfxkvb7WvE3cRHdxURckBjCv",
  "key25": "4FhaqhViopAWZAMZnPE95ZLZV2Sg8UwXebqaYL76Cdxku4KeCkSFNRdbFJDNEmecDTdzWczmpgkzGmFueLp5SxHr",
  "key26": "uBvFkcJfw4yB4nwoJwfiziU5kw8C9NQkEDNnivgTLqXr41bYvvYbnpMwFZkMVqye5UmUFPsy4igfWYZ14s2gipM",
  "key27": "4Uj9TDo6As21HgVVZjw93zcpX76rJwUjFoi4Xbv7RD9JDumg7FUvRHZJ2VJh1MYmYRxLm6epdnX6pPikhk4h9X3v",
  "key28": "4UjM91iRoV6RjowPGy8eM2WbJZXgf5z7grXoKhne5UFrkJbf1y7r56RVeisgXQ7mSspfjtmHaBMLJhzSMF59JNmG",
  "key29": "2vWH3caj9Gz34FhdnNrhtzydC8uHPTVwamsJ9SQ6ZLB7C4zPsNxo7MM2jgsRcX8Du39Woo74NGmdx9sdSwtJ1T44",
  "key30": "3Cg1xjTLakQ7MtxN2XDN1HpR4xzBxaofwFEThSbGRXrV7s84XvyDmnYrc2HQquVJN5Dc7f7ZVEUuQ7ZLNqbCAmaP",
  "key31": "7swhmSqkdnrmk1zLaRodbPRnuqRzSEbWCNgN28Jp6pvqqLMdPr7PhFd15pvWYUHQTU7aj2sTp68btqc9QK3oqZ9"
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
