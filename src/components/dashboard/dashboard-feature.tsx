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
    "5pMHEvZvFqKXQk1BAYzHy6N2uHouiG3NbLYmoviSDbKx9AWVHnaH4bj9YpgUEBQbztj7KcunGqUjscuARv86uWwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z23TvZmMz9eCyyZ9EPCNBTxaCvrH5kidyE6ogw9GVpAtttuMEkZftdF8RKAN5k4rGicFmskPpVhHqzN2ZFudeRG",
  "key1": "2JiLS5xoxnskCHBMLvQTTbQb7ycBMRDdGQoARqVXpR4Soajnj7ZHauzceQ7hjEKLrtKUGLDXEAw1yt15t5y89mWB",
  "key2": "2H8v3WdiuW5a93hxQazHMuBQPGyAYsvuaUJaZPHys8uNNdBSGj3tkZavymKN6dWrg62Dfe1QLTy6w6juHxim3Zyo",
  "key3": "2ZZ7E5rfAF6rucY4JmAuXE4SdKZwDi8FW5ZboyqRbxoW6WU4XPe6n788mhAkZY4cs8q6eq2NPhgR3cDAKprQ3Ti9",
  "key4": "5H5isxJM7BgiGDurLafj1GrVHefrymBaPRj9hmDUWcpF5p1hL1V2W5pv9d99cRtTV7MwQ5Pjc5EGwR1cnpeMQHXA",
  "key5": "5CQs7t7DvMR8un4hK25JukC1puxobuKwdQe98pSKxva9NTar91FopejxxQ9jLKVm6WWBV1SBQdRTbosTvExK9cnf",
  "key6": "GmzZ9DVTYwEQa1DmWQGhWJPdvd76NxsswT5TTgH4JTUqrRRDhrtZh5HHJCbjhrGRufFTmKvtLRQBrefm3XvxEP1",
  "key7": "27WLhXvNQXsYLpqKtRHrQvwDwfbMLaMSzR26TrhBo9caRS7BWp2UHUVwR3PQWLc3weCV2KV1MJYQereQRKiA3StQ",
  "key8": "5aXcXytpRYv8cGGNbTnxFKzTLDBy9EAVrF6VJP2UTb53EgQmNdzg1mbuHMng3UufNu6HQsHitKvXEyYuMFRhSVaA",
  "key9": "5DVuk3sv2rqVDV4qGQKiETCw7avytaWTWgsF8oNzd5AEHgunYQU7T9w3HYdj4nMCgCKhfZH3KWJ9vSvZmQ6MKzCj",
  "key10": "4U2QcEeR7itd146qnBDMdoQLSQyMamyFWAMXnzGycn6Mv3kwAn6BLCBocvkrn1zD7PtmN74tXmp4SWstXb2w8zyC",
  "key11": "2MckfiTRQMVNWzf1CTcBfeM9pPEPxCmNZs9AbbZQakKVUmq7isv3pM8c4Aw5QKuezG3j47YLT25LqecwLTZnrihC",
  "key12": "4onhMLmXtiwdT78iVyd7wzGydai5HYhNwpGmVpNB7XrYWnYu8FbKvSgZVtYervzUoeVPYUgrTic2MX7rECTHnkYp",
  "key13": "4hDD8gx9LSGZDJDi1Q8KS9qcczReHFaHzbHmbWH15bMBMUTyNu7WexRZrNpLQfMSgKG3BNAiw34z6dZDwGo1Hzqo",
  "key14": "3MgZDgmtWMqeY2vwrwSYM8z4QC51Uk5hx7C99AmBYodZjWALWbQE6WwHsarxzFdZ54TonfeNb9EJ1YHmjKjpebkj",
  "key15": "bomynMmcWpifYMCb8TZ81QUXdSX5FrrSeQaGk2VXBAFJf4LGGDFkjjStncnRHZBDSgydJmjoKBZKf9LWtVjWvVN",
  "key16": "2fZccdVgtEv2jzbQCcD6rm3wAdooQs8L1PQCiSEmWiLa5sTC5fs8pVe8KY8txUb859nskzXE3rtQCUKHbxDA3s7p",
  "key17": "4LFBqVzcvXPSGLkKEDj4qJXYkhkuDAmR4N9UFeP44GYc1ReQVvEqjacC5PUNYud8GzXD5gf2ghtD8YTnXa8xSL6Y",
  "key18": "abTrwPjwc4k9TGBzWxDGYFvEMCC9xzViKgHk39xXd3Sa8zwaEA8hjwVvvgm52oTYEzA2UAaQYBqQ5xxD8ftZxFL",
  "key19": "3D9db3gvzzT3TChLXLNsUQcBYRh6V4haPazY1oc3QLK4JLmY3ssMmt9BLsCroCeF68bEPDVM2LL7nn8ZXgJV9q9A",
  "key20": "SpCYhHdwjB5atApJz1Uk8Yt3BTUBJZo4h9ewnafCKgviq95vuq48PzxHPJ1ZNw3R9ZAJHvyqfjUhYSp7e5FHnu1",
  "key21": "23GrwpgCysRw3oNb43XjuDyvBCeCYqS4swsJqCfLndV9HjkQgWDfXkX8W3iyfZjUYHcaSTU7Rr4nWUMHWpBMZUwV",
  "key22": "5kkXBCM3D2MUUYAxgWRGFX2USmCUaLcTGk9KED9d6Lbh4GZcNBA7eCrvjZboZVDZ3JPvH7TCSQeDmqvCSnQppJq7",
  "key23": "4zdZREAmPEzvNrRwyd3z3zcYcf1ibZDQ3JxpnzPxPyesnJfMLpDCtRa6bz5ZP2f31dFerYsMEgUrUxV3ZGhiQJti",
  "key24": "4KK2ops1wUo4eoU5RrWKbkX3SLdsUZYmc8Joq4aTZv62b8gkTTHGvxmsmgx3vM7taSdvQqhMTu2ZNyzo3bJAh58y",
  "key25": "2fxzs8pb2p3tbRSpjWitHhhJhGdRTB4CBDxArVPijvHBHpeawZV5enajmmAdMKqaJrxCiGj86BcN6cZrS33z7t9n",
  "key26": "mqMCPtxadYzPVugUSwmtfEMAo55qdtt76caPTdAat8kWad8kyh68oYAzsvAR2ggGDbrC685X5FxyjpaLo6XqVhH",
  "key27": "5DP8Dcs4gGDEXzKA9FqpbLNcQiUmJ1UNhTVyfre6L59yuD8Gy6SsxDgfRMCeCjgN4XFJahwEyrJoYNhAnXk9a7ti",
  "key28": "3jxPNp3GfQsMLvJkcUoQLYVm3iN952p12qMWEDCgC4aZzNP72jRLsnmuKEE9GTUbT7D1ctXEzJ7KaudYhkM2ffMY"
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
