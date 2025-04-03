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
    "2TLRHf6LJ6yeVfjNgByJV6fApX52tcCJ9Pb81F5YgiG8kws9qvL5icpRv9abEabqiUDncRFuQ6ByxhxPg8mmtBWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ripbWETKGsALtjAHBYLNYxLr5Umsh9st2ky64hH6QQSHHtiBgGfteuLgZ4i8mtJTDufnmKWec4RvmrN8irPctGf",
  "key1": "ajP8wcbwHVff1rTrMrCTSeTyipV7geCkEWAtqr4XUWyqxiMLZBVp5Dfau9GUj6iQkPAvAPJwJmQyMU6PhDewUnA",
  "key2": "PGy9UKhnHTLESCymkBLyt96qXfP45u5e4NTEkp6aC53bDaA8K9xysbssTZN6xkomwhoHXJ4GJZrV4yCnWQ9RTRc",
  "key3": "8TdAtGsSvv6S2mc52YKPzvZ7WvLHy1XHbJnxGTXKKVFAJP2FmRDnXHZoSh4aZsm7jvsmpqSDT2JZriV4NwFTK5q",
  "key4": "5J5K6hricCZQrCD5DQpnS1fk1jKYpzkDfQCXp74LgnxDztoC95NT42MKGJa6TbLPCVe2Uov67UvqLqVdfG2MzvyM",
  "key5": "QW6TvCo4YubRmhME8ZWrmqXtVZGDycfBb3zcyZAmsnWATstSRvtpTUp6hni9EArjL9cEBCCWTmkUmg5hs6mUu59",
  "key6": "rd7XYL5X1AM7iRg8WpUU7yrS7UWBSJXCaHVdWLT7qZ4usBzX84CFt3N96ecEq32w7n9Y289teiB8xcpMzvMnJtv",
  "key7": "NHsV892DH5yBLJAaQrHwCBauoFURQbgq13BCtVd6snekkcYLyfLfs5mqRcwuUnuTG9ryEYUciGBp5RVNGJEyo4L",
  "key8": "3ZQSzu2Ld7j8Qwo4CTeYApXUjs6fjz6UDM4xziTQAVqRAyNJYQ9YVojyaKtXMAGfkhZK2ijLVUVXyeYY9EznAEe5",
  "key9": "4AHGrqgoK9yJBBos2VTYKgavthJiJC3L8FLzNNUEAJ6VnTFUgcuGjAbadjEHSE6Gy9wRpefGdDwKhwYuNds8pDPJ",
  "key10": "2KVLQywHEkTB8p6T5VAVgoFx65FedsdfCQYbPi1p5QTXk46vgVkGRZfLND7kfDz3vdfkMDbSDhnVjHz1yHNQLy9U",
  "key11": "3RNqo4jaKSkEHuaKySPVBdekdmTnbZ5MRkGaCVZBMx1yeH9KJQg52L3RuYRHkvQxf88BSSQq6a2Da8DSLWbm6WNy",
  "key12": "27JrCT282f6bgckjjCK6BoAp8VDW7Pmy8DZGhhQvoqM1yEEWiKXh4gAYXwfTHY34eKhs1ZNuRMzCHqsX5yQ6hC1n",
  "key13": "24z7bkJVeLfDBd87KgovU8KRoon5fD9RMAN4N4K7BDjxm4Ezxt5399isXA3CvABzbxuFw1VnrZC7szgtRyqfQxqc",
  "key14": "126WQSTNvBKXGLbRG2ChydPgpCyW7BggbpHMSD3yH54pqJRy69iqgSkwCJpNt7FAhTvPQGgHpiuSggqFMdcZn8bD",
  "key15": "35xk1WrJWDUSW48EHGbs2HYuAMgxUbYs6EDpFo3TLFzTAUZvEKWw1nhiwiBWxzQ62A1NfUcx4eujR7AMMHAhtVv7",
  "key16": "DcnSkBBqAM5pMNn78kVazjC2xR4mreNVxNwMVG3ewBgruZR4CB6mNDE3pDmxBv1uVKWxQvmTD3jSBhmTVWyP74G",
  "key17": "361dbgm4nfAkSYeWdX51w2tz5ztkwRUHkqpMquicPU1iSsgFbdhNhmibyJEJ4W3BBUPbPuS1mzuJJpNWgZ6VXwtS",
  "key18": "4rNWZNSWdJZXBnZH9wYgtUnSriLHei7SXKRMfhWAdEfbMvsLDPzp3nkVdNsd2vz9tFDxdpGoXtVSUGMSmJBCHQ5K",
  "key19": "64jQvRTcofmz31HpypQ31bpXFSpLkYV4n4aGMECnVSEY9mCidp27WNvNMeXunBtDxRceqCBHiSGWrWFRmVbWAxpz",
  "key20": "4mmfBwsRBtsEtQG2QvEM8zGQY1MiWxyqnXUrakXJBZZEexgtJtMNZy4jwVwSEwtAriFPW6gNa7uiMqismbpgfTfr",
  "key21": "T1EsCUUdSyo1NjVpjDbZToLXcCUf31cjuH6YZC2yKDsUa9uBrzVbWmvunn8zygS2UTBTdmiyHMCvEUtjCmAmcWs",
  "key22": "5ZjWj9vLnx7yb7J9sNxPYRSbqjGZLfMXz7RWQVKua7CtHHREii1kAmQbbubmpD5UP6eS71PPYXeNA8ns2Pz2EUts",
  "key23": "21tateUmYjM1rjdsDpzapv2WWN3KoJEeuEhpNjCPwSPCvBnFgfj9KFkxKb1RouESX5cGq1bLLHKd1SnmtuVrd4Me",
  "key24": "KSrBsX6tHXkkAcCwtciJqoEyftqwJupAnKFLyfU6s89Zp7z4muPpPM6YLmG7Q3mFnMfTsevC69ja1mRvJFdQsXF",
  "key25": "44ZHDyPnYLXusPd3cxFUs6Hsb4ac9EL3xNdUMDfNLJqdZzhH4HMQwnGf59jmfoTw9QB7D9zC9ZHknQhMQL9mWLRZ",
  "key26": "64Vn2YaKXdMPgTNNMRuopYP8Hh4q2yqpA84gLooV9p8ZCuhEGMZ4whcpwafb7kkBHdVAsimaEkJVRPvkEBdTDiMz",
  "key27": "8bnLiFihJUncfoTZQ5vc4WV8sxjmEYuHyXmdXAjfswJGhJkUs7MFgqKsuDjHiYWGPfyKRf8Mjmfnw7oKWRi7e8h",
  "key28": "3bst5mGBoy7XKfXkC5d12euHWPRjfRSw4M242QU9UQUbgG9dsSppZAgU4bWfeCqBYztRWEAkpBaRY9cukRLDbXea",
  "key29": "5KCCbNn6FgnJgsx8RRX6wztkiF36399ygmozkiA5D9unAvSEVoJA9F3Rx14GytZ9Bst2ucarYZYJKbv2wv5Hpqkh",
  "key30": "3e6Dgb594wNpauVAF43pQXbxuZGtWK4WcgeohC7ihAwPUPStp9cWwEYGoBi2SindL4QPsszj9QRfqR88Phw67H1k",
  "key31": "5oG8JrzFwvxteGm7npKtdAt9v2ic1WGMHk4g17N22oDkK8e7W9u3Noz8mQySGm81xPoyQSpiFXBvQDhxvjZvEJYW",
  "key32": "5TjmxaoN6L9yewTtvA5iJbL3wWheonMhnftVqS2FKDLpjqmKakr4YYbbP4YUuVRjeKecDuvodM1nsi1nVhgqf9dD",
  "key33": "TA3DrS4My6b8YorCKpoy2iehc9t6Np7msy3Gf4QJkPLj2gYqh7VnUzfQtkrqsUrnsr9CEyjJKJhZTmFJc8VGBMd"
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
