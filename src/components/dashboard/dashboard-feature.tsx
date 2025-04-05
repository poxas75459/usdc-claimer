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
    "XzPRNBTWtxHAU9HhyufcUqUbVjQjJpvBGb3t2zc8RfAy4AXTHhcUCR78PKccwFooqdCpWSrctqnnJpN3N94VKm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YAKWQExRCuAu9kDxKEyekUvhbSLbn3uZbXfHpgK2WdGojgRb2R2bfytfckreaY5Er3k7S2ij4BRtJjCrR9VrnZW",
  "key1": "3BTYUoXUmY8b2ASFVws75PtwkKQ9nzWgbyEEvJ1Eouuh16F5oCWEv51hironGkUvEQVcGGgtmySTMy5kP8NgLBtX",
  "key2": "3hKHAkSPTwTfjXsTUd1t35AQRhatDUYWk7vGjweDb3zr1BgVNCCbKM1y4iS2j89N8cisPY6pPqDw3XMA9ZHoveF3",
  "key3": "2rV7p9jJBpZ4ATGnebcFkmtvgYVhTRHDXccCVLWkLVPgXNZcckHa253tj2QaKgDQxNLMwbRbjMC4UW4VrTJ5fyXS",
  "key4": "4YRREAroPBp2G7Lx9kCvT38X7RNBtFrHXPUjN6cEnrKaLvwf5aS3nsLbZvQ5p4WMsRvXsihD5y4WV5QNe5x5CYoy",
  "key5": "5xyEtbLdbFzdgYtrhLQguEU7DdVKkDoutjwWn7dUp113uYuH7N11MRZBnQdoVubfLqkqw8cbCaitgfzCvJ93Rejh",
  "key6": "5bPheRZn2GoFRgUE5vPeDus5UhgWHAbEk4284ho5NKKazTTWXDHbDZvf16ZmfAbnU2fu9RUyuwMwJQ5XenRH7cks",
  "key7": "21yjZbB7iBG4nWVsj25edfaf6QyHEu51g1qKLwXxmmLHerQYvt5M1oAksVWptjgVDUjnbC1Fq9VwU4jcnNzBQiJ7",
  "key8": "45UnVQGWoYy65Nxqu3oeKvTswyZ4wNqwGFtM4iw9PAVhSHAGgu7yks2CbF7QDSUPjRuX3xVJ9JBDrhsWTxPLFyKE",
  "key9": "ayH99b8r4D3nMD5NgufCN6ZF94KF4h8nFzRNAK3a3P1C3v674aEyCu6ZDMYZevKozuJpFZar9Uxm5FWPwtU18vF",
  "key10": "vyPNM2ZpgYuqtBqMpRLkY5EnuJkLbze8REjHiSjLPSHs1BJBAMLjsjoMRWNrJV1tCRYJTrvSi2U91oSuyf5gsiy",
  "key11": "29qwtL2YuLj4ZgDsQZfp93shXHPu3AKtHMHNe3nmmitwLXqa876rfCDu1BZAe5EnmrjfCGGkNQSsm79bxpsegtWV",
  "key12": "PqHerhvDGJiRBayr6YjTHi8q4wNqgs5WTVtW6uL8RuaUSfjLFeF27Wm4rCyKyvbAVMfecjWX29xVxaUNpYUaVpK",
  "key13": "3rpCkFh4Rm9EprCwB1Hgk85zxTgzqBEWR6bNeRVStqkSVsjPoy8DSDhdHfdWrNN364oa9mPRT93xWyjPaNsRnzP5",
  "key14": "4qvfUqG6MA1CaDwndY8kqutD3tvt57NEi7JJmUSSdTZ6BuR2JX8cRS6f8BKzPhMtkax9uB8py49WVU8sBGm7PcKk",
  "key15": "3HctZgZsw4f4tW6QHvEaFsGiM6KAQgh9HCS7Hw8HAorjQrR9sBnZyPrZQ7JAETwFZC7pX12rGiCNztVsJJ5zvks3",
  "key16": "4V6PZv5J5pEAKwjs2G9VDYXo1m6Mq7zV52sceYY5Q56D6GATfRWBrcXkSSopSaBvg1cJUYC9vPqWnUkkfhCx1c68",
  "key17": "4CwYWnMC4YviEJm7R5HrzFuNEbVMzjR32nfWRST6xyVk4dUyCNPBhq6SWjS4xFeqSBTojX2xkDb2jd9XzmFXZsoW",
  "key18": "66DcKFt3QKFTZ8Yte5nLfKkiD7xKN87s1gUJJj67sYoNqmL6ETNhux35GerRpkWTkGqAPQr11PPAXXfnjXSYfJS2",
  "key19": "2deB8kcHVZDtPNGq6StWTYxMYtAQp2rYQRwn76ohWwrXHKdk9aKmKXNWrvz6bWqkpSRRVneAXESioSx7cNdknECJ",
  "key20": "4B6pXW8yyVM31HVWhm34rYXyaGYA41qx5pSALXt6oinZKgPMeTwPTCQEDXocQHtwp3R6LzwpD5zpJQhFFWR6My7i",
  "key21": "24vqm8wEvfmAmXiFYnKX4mWeZiy5tYs9qAUHGCLbQtqCLYLboJnQ2W3h2t3iZwek5cCd1Ma5c6mTLKXXoEtk5gqh",
  "key22": "2DdMmqX9xBJdg3kXbmLZVyAoHuxPpzTgCBUGD1mqcHsXiZfbfJ3iyEVsbEkfbhxhEfum8Kjg9M8PWeyoHWaJ3dSq",
  "key23": "BkS56NVRY5wQNtBVzaok34F2DGYiDAJ6C11XMoGi4EAuUgoAZgXANeE87viHoVfLH2mh7QvZgLjKRwdPMkLUgLF",
  "key24": "4GDgWSVr66zgsSJM8JqUcJoNdbLcWjVNifg3iNSi1C3eY5oGsNZWm9DZcC9ETByYawKFQv47qg4s7MbY4c9gmGaX",
  "key25": "3bwiZvxDJe2egCfk4nroSGq4G2ENgkUHNgAAMNajyLhVoucUU1oaTa1CCBGkB3KhYgEbxydJWaPQrCmC1dbR6g6b"
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
