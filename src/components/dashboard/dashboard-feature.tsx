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
    "3ewdDa3u6CtrwxtZ41micBP91V5QcE9e6zDYrQixoGDWGPZgUx74xVg8p7kRCC8YyDyX6ufkWDfTnCdif83m4j4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVC7ZczEeNuXp5NCV7akyxuKDjfYUYC4FxbgGzJLjtD9yacGKbFsbnZCYgbwdzr15WwEkyfM37xANhLnas27QWx",
  "key1": "Xt68McWpGnUQ1hY7qikk2TghXWCCZWEFdd7P27gjrxTsuatDMtMia74zoKXpkNDk8gM5eHZm9AnHrgVBurftPtD",
  "key2": "4QGEMKTTqhJt4E6kqBEsGxMPtJTUKYWcPntcZwGS11uogmoMPn1F19WKKjfYFs7N9omY55HUYQmbiwYsbNgrshiz",
  "key3": "2KEogM2MhEXAYKkbeiccnFe6DhhVQ1GGGrVz2VnDepK2oXnG7fgQuBh6BJUqPfvy57pZUG3N64CEoJZLxfnyk4to",
  "key4": "378jL6zp7hvoLBPXdAsaU2oGJKBg2PH6sYSyAHSHLZzPcDn1377Db27AeeR9FEJBjfqgovJeRqu3cUUAcWk8j7Xw",
  "key5": "54Q54xDyJNMfvzABBV9vxKygoe68E1D9ZhvMPrLZ6jXenGJHn4DrYJ6y8cRjNGGfH3ueWq9JZfSZUmRmAGWHzcAm",
  "key6": "4sDonKeBrHLzq2S3ciiEmMfNw8ezhrn8gKJ5KSU64TNkQgbQBqU2Zeg7MWsFjHpkYrya5LvkDqdJGH2xM9P3H67g",
  "key7": "4XwYJPCRYQJHAxmDhbwhRRsAeZxCbwu6WQcdjzUrAumH3xRPVw83MjHVyuFPBDJiTYHxUJLurd7XUpzWLr4FvJfE",
  "key8": "3yNP3KNmQzXzHkcbJY2v3R7qtKB3J4aMuWFC8dopESHPU2JPFNfKi9ATGH6zZwRdjhgmMZmiX93mVJeQsXh42ayV",
  "key9": "3qmPAJ2pkM9h7A1BmpxYnFzqh2A5yYsJKHPeTWpk7TBAkBeCA3RL3Cq7JnzGwGecxJaP4aneUKaV8ZEFn59NJSbx",
  "key10": "KTVavBRRh3gdSTvGKRV6Ktd3uNHa94A89h99u8JMhCkoiiwmT9AmpU8YHwYzDCGPSWK9u4Rsfh2tFZF3LubvMzd",
  "key11": "4wf2qCWzt5aBBKrwxXpZtBrRLzrJyUpqGFQhuKRRYfKRWQ2f8tgyKSRH4z1FsyQ7rVHBgd7rXFTzn3PzMkusmQn5",
  "key12": "4GY7nBjJoCcxEiuUc5mPJLRrhZLZHfztHrecfWP7ddZreuAZzUozAYh9gq7hqcENY2xEvYjc319MbNUDiiNqdhgQ",
  "key13": "2CkYNtHNva3K3GRr9e7GQwdzWXb2ZXjCa8qYGbyeGTaYQdi9uWci2gNFu8xWLFZSD1i1C5Y9iMp3a212Bv3zh1D4",
  "key14": "3a3LMqHjSTJV7Rs2C31ti3KhKbJsR1dU7TznrJpagVcNySHo4aRuVHahbC8HkuQfUTgidNJ9vqveNeCXeLDnPtuB",
  "key15": "2dk9tckRZS7iyM1kqGziciusxegHVqr9hioU4vWnPVuDgQf8LVeK5wijC1iNEnHrYMbyGyPuci1aAJVEjbcNnEMP",
  "key16": "5Szfp5YFibgVDGNPb2w2L74Q155ngxxpA6siMDY72oEUYtWsQXajEsvMc3CFd2adV3oSyV5urJQhA3on2zTXhrTa",
  "key17": "3D5U4UP6X2BTRUsmiwHrpuNEMzJqKPvkSADbTB9UoKkLfjEoww5bmn5rkxBGPoLDyJyvMureRFmB4GiE9UGu4jHL",
  "key18": "3sCTPzrgAUCRGTaBY7uHr6iiLt5Fs7BepELi2rcik6v47PkykrP4D42WBiWDqoaP3DKphN7M6sXFSJi62iXWE2m1",
  "key19": "2BT4teUGLZNZH1nMME4Sa3vkyicktjURba8rr8qsw39KPYVZBvAzbZh6f4is1aCqgXmEkMsGDMx69vNseshFzaLf",
  "key20": "5TECUupoxZjRUhNvLJfzdrEqxJmJDFJvvMhT7yXkyqsadq53rq6jrbNKrfeeAVrQGygTHLgRjFC4rVCu2K65syXD",
  "key21": "5YSePs4CHUDzuw6Zd9RWjNTtMzC7tMKbxNMA3utKKoQKhs4WjjmnTcsonHYAmf11c9aD862MyvC1ZLvWMtfwMped",
  "key22": "mmzgqGDeyMzLy3oN5xK8TowzHzfcVDPgihhfQynUZ68wRaM6RFYjqL25coPyXVHhAr9SLqw5mWjsfM5cR4xiP7Z",
  "key23": "5rxiziMhyVU3CXGC1rtfsDdn8LBrbdKQNYwjMwy7XSXKDzYytYSkPmcXy6mAsgFEL7f43AZCnHgCCyQaTZGSX5YW",
  "key24": "43xSJwhjEVHPcvebNXDXBTZx43s8GYkX73aLeJTw7KAFym23pEGj8fMCU3tVWXFa6HR64dv2xDrBFRtUTpdzrLBV",
  "key25": "655fFyzNuXAALj21sr8DQ7ki2kdYHRy14VqZNfjy3FocCgiCLskib4netAaaxHMn7ndPmpLHUBF7UeNZVeuJ3KCK",
  "key26": "2oyEUhnHkC21pWgujMDthhMtMBLgAykvhxPk2SMZZVJJXnRVqRp8h1fAtEG4i3d5tTYCCzkkAvKDBcK8kTKqPdSx",
  "key27": "Gmc9qsPg8bAc1wyxda6c3fSC3KimPxnjh5AuEEBD71EBYEwGhiN6Dr3PKfQebytzA6g8ekJUDTN7vn4cmeLVPbR",
  "key28": "4Dy2BygsyDDKjPKnBdEZGJcjBQWFfiBA5fTayRDeLmFGscEtb3etHm1KHrG79Kmxe2tY9aRgFT2udmcfU3gJa9tK",
  "key29": "UeNjdb6avYfewyxMquU2biumSZzG1hdsfrkxBoZAXq28Pv8YokPa93LKoRBdrETUGKqMKUjMBnMJ4KTK1mbRrNo",
  "key30": "RABUb99PURPbgjxWm2Rr8jMzDwa1HtH7JWyLBkusTw1zE2JHu6a8aFeEze7Mk6b5VwoZPjDozGRkBM75DmBZpzX",
  "key31": "5xnusRsyajWa2V9F4ayTZAUcvo3g3MyTBzCpXFPn8PPPGGFa568Sx2R7N8MH3JocxUT4eQi44SdwGVoeYMvkZSZM",
  "key32": "2h9fPRMGbxpfKZeKtmPpsi74jR6EcKAJBWmWFSjJJzK3YocdVmJ5nwSBDKPo331hx8iqtEinm2kpYPg3VGoVqU9q",
  "key33": "52K8CVy9cAUd13X8naCtFvxU4H1ui6VZU5QZiCzNCjpF7J5UKsCXGqJwep8RjXQgnHQb5VoPRJ55rmAHXMBpgfBv",
  "key34": "5AsHtAAycaDpVFFYe8hhPvmfiawZGFfkGNzgjDUmd82oBd5Hz27cATVTLX4G38pUUEJnUD5CmFMcuKgQXiCW1Ts3",
  "key35": "3aLSMqfnwFcWEmnMo4PtsJhTQZ3B3AWCkbCjAeZJmtyuvu68d3FKP1eHhkHEiKufGSZfvJH3ZjmzDfpxsioZKoTu",
  "key36": "vCrAhXhkwjizrNDm5cxbzthuH4PqtWgtEMfD7C1wMJraN71n5wGFD76xPaHQHddWXBJTz3k4Gp8Mf6KSrwNSkx7",
  "key37": "4QaAsCVbqdhtFbczgsdVBWpVvT86oQceTJ4oQqVQvQhHVZDeCM138bM179s9V6dCvETmqcBYtiHqM8fHQMKR7cCZ"
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
