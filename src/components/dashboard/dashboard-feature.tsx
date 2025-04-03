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
    "4xc6MbHYMVSDzREfiUF3gU4dsPkji2r7zT9c1VzaxiYBK8NFc587U7CSdPAH9AMh7JccuDvMfDst6jbUDSwTMExJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M7EtwSjb9Prw5eWqfFYPUe1PeWTEd216oVGnCmPPp4vQrJQ5oyUt9jkPyriFvtx5w9JZGWUMTbRVEFyQpV1UPya",
  "key1": "3kbRrSjYfsDAE3cS6NfNhKckrRLnyhmha2bHkPVXvPdEyo49NnnfNBmGKvfTG5qWGF2PvJ85hd3tiZ67FQvU9SDp",
  "key2": "2F4u6jHQKaPtVCfycAYeyBEfpUsU8qLyHMMuQ1TthyQNs94hukBpRJgsStmAGmSs3JNAh98TzkFPXGaaKL8iJML9",
  "key3": "4kqzZudzFPZJtsJ99bjhR2dyn39d8qTXUYnxFweLhKPGYdVyX5PbUA9UPuBhJkoohcEz8c1VfmDeBQo73VeM7LLi",
  "key4": "27u8FKx29VVzMTAHceRdzNt4u9m3F8mQkhn4sLV1UZ9KAdueucjU4Ln8U8rfUmS3KUg7qKk4DGKrdtQs9sAqyoZd",
  "key5": "4KF7JxbxX9jYVaYEGUpwtSUybYobPKa3X4ngYrazXNQpFk5rW5fUpb9Cw5c62EJTqA6j5kzASQrgq6LY95PSqu8Y",
  "key6": "2mfpeG8AWoY8WZrRWL1UECb4TQ9gXM3Eujrm3z6hswSDoH4RQsLH5AAWbZPRiY84rSp8aETyyUsDyEFVwpsmxv9d",
  "key7": "4kBDVhpuKMdckBh1B6vZ7rQJGjMQoJBzufyBC2HKT2E5jFBV4EbCiLgaPum7K6uyFriCPbFJxWMtNL5fckw1ewVJ",
  "key8": "4vtVCrTwPVKdLidcdMxMnd6UdoH99oEEmXijCTwcABDG5472P2VF9WcuFfZvxw2v9wtGrfcRtChP6r3dRTLfPbbq",
  "key9": "2cNve5rbjDRVY8zfGx1W1RM9KqqXCBshGq1e7Br4iUj4gTRL5iARYxvrW1wpUDW1qYzRGYs6FzKrCde3XTWyuE8Q",
  "key10": "mcwwTDskcYm3a9RPd7T2GQcRX8DxN92FQJp1z5Lh27XWybNiHvbyMPnd2GM7ZYPBLkq6gEoYcpB8wk2hfQ49cNQ",
  "key11": "65umGtHMNePPeVuP5kA8FMciUpoWserXDUDiQyKxXv8SpouArHWxmqLeExnEHcVVqwRqgMWtXccyQ5bWkq4D75VY",
  "key12": "5TNGZLkgy654mhtTJF2KMGgM9DTEhQr7B3gob8DrHaGHbEZd9JMPJ8ySZhiGg1kxK5LvopiqsA6vNoNF88KGoVV2",
  "key13": "4t5gF5CwmhthKfPHgDhesuYUkyf1TUk2mZowVZUk3NCcs8njTMJXzWXhqdiqt1idvrvyWdCPPv5g9XcrrYg5H1aH",
  "key14": "5jGButm96TacuH8Gp9RQmixPJNDf8zkmxKUDDBL1mepWciSkdHToytu75pVPHZxTcwdbcJTcq4CrwW6hFrYZT2iy",
  "key15": "4ccEJTEwVdyTMRAtzG9UT5Sf7hkvwsS7g3nqhm6c2iWdcE1vU6r21rqWsRcG5fy6z63VXzQ7UsfdsUQQfrQgZY7K",
  "key16": "2qy62eEu31oz7vBFUuqF7r2d2b7Z7iqR5NipcB72G7wf4hPi91WQpQzBCE25EwK4kgHTP49LFi5g4B9UkLoeRrGm",
  "key17": "58vdvjhZVzqaoxAB696cJkCwY8BPVPDd6Jn5gaFqhJwZTMe2Yn72HvJPp7kQpYfedMkHiHqefUkiNKYkGAwLwFut",
  "key18": "MCpwtP6MwJTCHS6VUqBXC8jqzeWdVyQaNczCbrSLuddjEd8WKqj88SYXvfg7C8tyTNFBxmoUJAfo39ScdYQQc6W",
  "key19": "46xrpXzfe5rTtnQD6trG8gaVfnm4DsgMpf63bkimvjbte3AGjfExiWetqf3nmbJJswaWXpjRMugGuNP71qh8hZRk",
  "key20": "oJpM6o8Mq4zDSsZpk7kLJrwEGvkyc85TvixKAEGmQLDLAHPJLg2KEiHeCzoRDZC6vSX9CqGGCGGRg9r9WMSFgu9",
  "key21": "4phEUkBtxZeaaCuQ4cQEeGx4gW7x7ScGbUxXw97iESd82GXJxyprw2Poydzw4EiVWLM6EPeb7WPDLcYEHMjLQJ9p",
  "key22": "3sfbU5C1TkqUdQZhn6gcwk9outrKBtx6WB2793A2WKkASYn6xVQTyndKmYb1tDZeZzMBpbVHs16JoS9RK639hbLD",
  "key23": "3kjH8ECSBCAKmqkYPo24V15kicy2VoC9eEooT8Hwzvd5p3rmHAj6W5SZ9k4PWMofjdFjqjTXUUdamhJTcUNnsknC",
  "key24": "5p8TSWNhW7aJjr3H895mAS4KDSLURDsdh5jZxaRc3ew2vvheZi9zrF8qyAs4FrrpptTNT7vswa1XXkCFhDqSKrLD",
  "key25": "4rbcaPKo9RLbda5K3J5LbVPrn7ZkrTkXJdZ7qyRokgt3PG3xxH8Y2rMgEV2tdLdktQ8oveRvbDg8Qbi5sPbxjaC8",
  "key26": "5RS5PP3cZJ8ACmVZN48LJDu7aR4WNpGjZsR4pNijsedkgyvXK5NbBZusAdYeWkBAsK4ujdxEisDUv8RkDY9BQ8r8",
  "key27": "3WkMd5N6T2rVveE38YkEtfk2VNjmaquPmp6Qsb4uZi7JMLyEe7uXpvczaGr4U13aW9WfW35cpjEU8GYEWVdTyXuo",
  "key28": "5bNgtwGfbic8zMm9t2W8LYrMjZpW1qNRr2evqT813VzEjopGzVXYp9qsjhCNt6y1nNVNWiW5KQydeQhZ7ysx9PLv",
  "key29": "35bxYRaG4iSuweQ5fnT1hyWgz46QbFrLdTyh214WX1BxL6H9RWPHLt9RRXgDmYU6DB5LQitBby8wAn6i1DDrWGgh",
  "key30": "2PvPkdNr7No9DcoBxvRVNqE5SnyBu8Ha5CRFtYMChN19MzUktw88KdsMJwAX7aiNwwfG8LNw2dMXRdHow2tGvwe8",
  "key31": "4o1ATBsXMXQx9KqPGcQxZAUvjFosFW83fEQ7Q6YJmFgpH7BWXLWEnXfkvqBatKNeiBzThE4sMX2JSCFSTg8Hcj8p",
  "key32": "4DZhaWwUrCood3Rgo8jR2gkAjWhERGoQ2P7rhoKzGPksJ6xtyxKbGfXAgzgDDsLDphYy5c3KMT7F2uZpFRxSX3tV",
  "key33": "3wmRyohucmb8qVhBt4z2G5PTtjm7snUQBCobf5u6QvELaUN3d1C6vQRCgqtqCHn9S6PVvqfGVH45AvfKJT5MWwwp",
  "key34": "2jD7oj8jkeWrQ8jfLsSknuNeDFJ8VD1a1x5toetNbfJLYz9nLZCcBmGPK12hfb8ecrjiK2mqGs9jYPP1KKj5u8QL"
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
