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
    "5PW8zsz5LBU9reuGohVSPeT4smw4GqLALLic2KR5tATyPBhgFkVcsFRc7ZP5qa6aGtB25gcEcG11KkvrbY3uYVeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ryzc9j6ij3JqcrXR2MELNe5tGdZMEqyoksB3cS77hp4n3NCGKsZ9FRi5qtityjXxP6FNMkK7KZRjDYDbJevUwS4",
  "key1": "zs9i3b6G3r5NxvTVCUQCg7fZxebwWFcxpi5GYvXXQ8bbBXzTU2cJ6ScTL4kCZHAVjKa5D23SGzPnPbkf92cX2Wc",
  "key2": "4zDW2haQMggMBFxh9VBWHd9JpUbsczLMgDKmDNj237aSJ39giXhHqtwMrwSFctxUKGd19wD85ZzdhbGKuzBbnDWf",
  "key3": "3GmcEmtCu4f4Ue8YZyNwmNZDQPLRs4mkjqP57gG2o89hjAn5s2VnfvDLw8dYjzeswUa4NnAWnHgKKSnV7pi9v5pD",
  "key4": "59bsMsh6TgWxscsCWxqYhhmeDQ5C2GyJuicLBsQu5i4b1SwTdnhoUj3zH51MbBnrzjgKPRpx329jje38WnkLVH53",
  "key5": "5ZWPsUux7o5NvLWGyf98jbABc6kypsvGqfQV91s2tjUyQFU4Dea1LgcMFu3czo7ouSW4Jv5HPXQoY5RwK1M3TsB7",
  "key6": "cAy4npoWyvWx9qkJ6TCU2tSX9XFxYe7HsqwVx69Wio3ashLbnfTFcD9AtJCsLFQnwLPBwNBQp3DLMh9VgwVDJ85",
  "key7": "4R3ys3sQbpwTq2nYMT838V7E52FEg4ikaRZztykMUUNLnXiixvXCMinbk49Y5DopyC4c4u7AJqGWx1TVQ4DKtA9t",
  "key8": "2HtnN7dNzeJ6FwQbvzsCnvt5uSJbLC5F636nGSoByLx8PoBF716bMaUag6Fy2wWeHvpdAr9x7uNcsoYLqprfb8kn",
  "key9": "3WaGQyn9UhqcXaf1TR75ZEhYKDhhSgHs2p8X9gs2yAKW9D3jYpS2fpp85DyE4Qb73CYDqH5XPqgbiA9iJBZKJKwm",
  "key10": "J2ekEe3g2DAUCKfmTvaETzmnnbWw6nxRLdUgrHCm8x7parpA2DEzscagYj5KKYzi88u8JDGUCxmqtrFR6YP6j8H",
  "key11": "5JRQYcZ441XB7hK6pd9qFAwZ9oGfyowht68cXwvcyggV6uSTX96ZTL8XJBtLp659ufLNacpPpuCyYRQqQycWjsZn",
  "key12": "ho9pTS1ibfZNYgB9nG28YZ5iBJERzSiqBfrtLcTPLDDXhminC6Z7zUjZuwEarrAmN821XM8rUcccc76XZbZo4yk",
  "key13": "3yAAX912F8a5nbHooeBKLW4kjVt41r9nrJTUbTdNMDvjiUDwsc38JuXE5mGbidu1fuAvaKsFx3brMSm34WmbLMHJ",
  "key14": "5BtyiwWVieR5JX1VyoFPi8gbwZta7neyg7ks2hxjpBSvNvAo1x8ZUPwtgRvJN2qmK79GkQVAX1HRFFiVD6picv39",
  "key15": "5gcSe96SVkXqjxHL7qDL2pZ6Rf44VSCA3QHheLbUggDzhrcJB8uzENfEJydHQUysvDA6gk1SACQt9QRYPaKckVK6",
  "key16": "5ZtrQ1W98Q37w6nAe7MTPmgWZiKdgioe2Bs4qBNgqAWgQUsfosqttbp8mhGQ4eEMwjG3K7AbuEn4aGNTCR2WuEuT",
  "key17": "78W57pE5rFAkG7nGEf5qqwXZxi1QDhWkhnLRgPQySEhNLHdrwXkXbNXqj7xGtr287JZNe1kjQWqXCYVTGffogeN",
  "key18": "2xj7hK6RmiyhtGeNXM5vnsNVjyPLtvjh9nemoNvBWf45dSVSJu5AqpGwhePZkFAw8SBEuy7bL3kmy5edos2HNGEf",
  "key19": "4wEtN7ght7ng2oM7k3nKx9T62M7iyhbgofJiZ9ULf7fKLUy32LBB7aUxemQ7WyUb8ATz8M955Jj215k5iYHbKVFe",
  "key20": "3yAKpXL4Ya9Wdv2CVqPi9KwYHtCg6eyXAt7cJ9eMecq71tebWC8yzwY181Hpz65zchDqMcgJZuLSKEwcR7e6yAxF",
  "key21": "4S6es9F6twUaMvVQyu78SLoAprgsKkYhkDZxC34eWV2Qxh99J315EQcQkvTyjkZgxzxfa8osdMc3V3SzDP2sy7nY",
  "key22": "56o1TwExSNnq3DZfVd2ioAhLVuPg3Kri1sSuqpviuQ6bkKPxKxxqk9TxeAZxWtPBShZqAF5pp7si2rxbvdiDAxe3",
  "key23": "5yPyVbhK1dZv1SmG2914iMieX19uRAZhUcQmjtkW73KMHLQkzYJRZe2gdyFqaxBmHjTCJRQV9g6jopsx2RQY2qhZ",
  "key24": "528by6F3Rpiqi3oDwFETszPLWoEnzc9XoJjA6jkmnhxjoMxJBAp3yVh6ZKih9zQUc48re63kB5Pe2xbxT67vJH4Y",
  "key25": "5DriefWSQ7uT368UuMjjwctVYUxHFFJgmrD5AFwXBPwiAWp3mcsGJZZyb5xc2sfTwDBUSfWyFgUeumw89z5diGW7",
  "key26": "2HLPiPf3Pket55xj4mkgyw8qRWMfX9wypdLBY7XtypgMjAckvTDvBnyJDiZ33yeFhp1bHYRhSo7coi7SonvNPYzv",
  "key27": "251VFGgPJLgpc2vVHq7F19fBnN6ZYDaveu5MuWoFx2G2fCDDxb22fb2xZCfr1AZUvFkGDnaqUqDWbUhDShaiYpMU",
  "key28": "5TbV7GFvt7vZCXgp6CF2f7UYXMc9YjeziKrvUpsUQWG8Gwp4ekUTnHmVdHgXcgpz22cUd3aw39nBCxuN6boggm1Z",
  "key29": "5QMW4US2AENk3mVsQDz6GCMi9qfu1ctecNxUNJ8hnAj2RDyDMWzdoyj6EzbXz8GRDLhzBeubbNuzofQzo9jQ4VNZ",
  "key30": "5YMu9v5awd9TQhqtZgHiuUsTPBQ8q63T8JaKLgU7Ky4QBE26z7qxKVsf4muMK2tGqcweFq6eK5z2b8NV4dCqZ3ov",
  "key31": "2yBQddVkDwQ75qY1CG9wwZKgPrYMcbSyip2PY77eFcYKUC3gerRyhzcYdiaGa5bX9SuKvxqPoZcZd3YsN9RsXV7Z"
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
