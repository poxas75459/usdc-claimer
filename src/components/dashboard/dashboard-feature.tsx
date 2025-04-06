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
    "3HDB6xy6k56sKyTNR7YxFLK7Ds5VJpUfZot6FnCQYTsd5K3vkkfDaHi5nCtRSJFfJnPQGNEHryJjY5QQNZkBedqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCVY6B8UinGSbsfHxRZdLbhYmRtSPNjCGqgtk1jfVxTWNu8viKEvvj1FEszpZM89SzSt5tAUWxpKrMumzoaqm4Q",
  "key1": "2q2ei8d5TrsmySZUzG2GJkexrC43pWWvsUQ9N3ygf4ynuDijYThn95shh455bhRtiXPr2LtMUNDUdMKRwnKHWVHj",
  "key2": "7N3GGSLpPMD5UEZBbyCKXJi8ThytFoZdUGY9sHJaq7dWuij5iXofojboJ6pJMYd7GHeJZxt8dexVQUyBqni9vtB",
  "key3": "3tYhBcxsELNh7TRNn8kEkA5QWEdhPA9MFsFwit6RB3opQbrykVR2qiDShqdaZg2CfzL47jL3zSwLWcHjSRkRoiHR",
  "key4": "6625ubt89VkWYTNccntEJxJbURXxnrUDEnTYmsdoYAxiKoc59SEovN4okvbTDoZ3NHL9P8m1mCbLg9ay6qPNjAt8",
  "key5": "WRRUQMhxcoE2LxJV2Y7yfo1GvyyQkhSsvM5neCTKmwXDx9NZQphv1SzpdQ1WdxvUwGKCgopGyQSHPco7AszKEx6",
  "key6": "3bpTRGtqPQ3bsrycKEeY9qKsHgRxWtxbahYga6iM2gnpVM42acAL6DcVZrAWxVVtbMREWXwoCUqGW29zX6V27RYM",
  "key7": "2ThH5iBZuwhpptQamBbDaXgTJiL1H1TKMScKHPz58u4vwzrXw8xQPPNuqa7MocRtZRqF3uE6kcsa8nnddb61jLpn",
  "key8": "5nvo6F5dozsq6ZmXmBKMFcf6RzuRjkJEvRnjUX24SQELB9KuYyVukz8PSzR4XNfgoDKqCtqxV58oTiCw3hRTVGGK",
  "key9": "2BJSh8HrD9inKJcE4inDmYSLnkPVmTb6nEZ6XvMzQRUKtKbfdUmUHFnxQT2xzqQnrD2jfhUYMEzVGo3b2eDup63C",
  "key10": "3WMGmDPbv9wkaz4gpcjcTqbkYoHy7jshxcPaQVNxtyaUBRNhuJZUL6SPf12sykqmi4j8yE49NKif2Rxy9r3uZbCy",
  "key11": "2XLpdidtThbyRvahxFLxR7GVuboqnSJfey2UxwuoVrD42HmdctSC29StCK3hskkNcQgfgsAwwKSGWnDV3uAH6gcV",
  "key12": "5bMC1jM791m2CJz5LLddWDVMugvH8TcZf3sRftZjfSH1FS6NsEGXnadMUL9NAJSr5tk56WUhuxiFQ2hD5R3Xueao",
  "key13": "2eshP1mY7HPMCL71eDQESkQVJU6iHz4MzZFs4ChYLU4CoiGJCvfXT3ZJJmuj1dATmT6ewbvWzb6qKizLiy5u72Eh",
  "key14": "FuYnnVkWXx68aFRYgZiHiYVrTrpjFSnFbxbJCPaQc8BEhyupWqH6TqqmMiTu4KvwotjKFGZRzqSWFsQ9kBttYYn",
  "key15": "4HXAhBgf3GtkHWz41jEPcyij8tywTBo7Cwuk1Rrt6j1PuxtBT6zBgxZrvfsC6Ur2wa2qT2tcQE6Ztx2VivJrev9",
  "key16": "z3JYhoc6A3ZLGK7GQnYqe5kzHesfZLvChvoTX2RMbhWjPSq4FT6uh7o1cpUKqbsA7nw6j29FhpboupMs8sU1Kpe",
  "key17": "57CcsZ9F24Wx6wNSQ84vnMhbaMyafRubBBpUUAA4AT83KooBQMSCY8MWaDoCSf161nvtxmam32N9LxQJkRJcE4Ci",
  "key18": "4M3bs5vKnYfbRFDvrkF6TGPuXNh19ZVu1YfsktMKyetPKfXwNJ6fuUjFggrFfwR2DsSvTaV77pTJvsUJogLmhojF",
  "key19": "2FubnFiqg6od15CpEZcaQrrnK8hyrJNp43YrkJ9kgj7bTdg6DWTR9EBVRNBwUuFNsWbjyNab5jkuiNhp3dRVLK8a",
  "key20": "4nsXepYfscGXsgwEfPBqaWbhF5mYQrvGPYMi9jk9dDiKho2z2xZAQ7f6bsTdL9cxMGc9YQxeYFWekK5CypyfEfub",
  "key21": "2V4tStmXJ6M2ARVPEE6RGrURUCf6MQcxDkbU5cP8jP36U9AmQxmdJfPyec3frRZuBof4oDAQC2jJbnpWgonrFEGu",
  "key22": "595tpbi7iuiom7vk2JoLGBS4QVsG9fPQDJ6q1tG49PFX4NEcstSUYzWHecHWSJ2jR68iHPnoNZ4JXZ7uDGs83WME",
  "key23": "3ySh4fC3HMuLtQfUGhydou1NBFeApwKV1XCv3g85RHCjvQVtZ9dNZoSvMZ1XMeVe9YRZPYD4nJLrPYcrS8tWbSu6",
  "key24": "34dWSaE5ZHYY9jaB5y664TvkoFiyLoYwuxNJaGrmyQEjn71MKQfgTFGtzoYkLi17Xmu9ePRvNNR3BtNGNfjHMCoF",
  "key25": "wsUoaLdNFuNw32vwsGgNe853vszcmwwJK41YW3k3oC18qcSRqAj68LNeGh2W3Y36EYtDoJwdQ1xc5wM8FHzE8Sd",
  "key26": "kGQ8DcsJBYBQ2eMpH6xp3TSR8wLu6y44agkzryBE9n1HUW7uPo2ERGK8uXeeWymAV2iqMSobxf6gBCsAuR6CcZU",
  "key27": "BXRVPq49yL3eBncP3ERY6uT9AaomDKBqHY5cDTe247fMwVTjJgfUgL9xyhqYZywbwiRx1MLDRBVrA4idb2mFupw",
  "key28": "4cx3xS5SY13bwGxs2VPa6TdacaBzDjwMdjmUYWPkBhFYuNWgBAzWaDmBeMzX3pqByC4jbWXt6XzqTZrBYeDzjTeZ",
  "key29": "2hSda4xLo1Ua1z4bLDRS1zMY6UsYfeXk78z9Ckej898cAun5xW9XiX3BfJnuqbogfDQT8YLUBC5q6GGLQysczgos"
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
