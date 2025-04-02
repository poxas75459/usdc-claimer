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
    "3Mu7WWSVx5v8zqNKbZhxDvzhqib5nEVQfixohVfA7jiPWZbHnmgYXDR9SnkGsv8TEg2TgZc7rzoSUQjVQJr3FJ5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1GBhf3vsasnCx8PeQ3LyqoqmYQZvKRW6843gheScVpnmNedKEV3qraEjKHPr1cjdb2Q78D6JL5aNtJvdo7kgwn",
  "key1": "342xGeYpiq78ZMKGw7Tt5PsGMLdbjy3sYurGvcMj6KQSFv3Sti5iQ3Ki4LJjB3ShrCej7JXP796hN5U9BFVcpgck",
  "key2": "261Z4bdBCjymoRhgeQmr5Grsra4aVCvZAeuWt6TQgXYZKTtzU57D29gU8nkfSJcukcGq6jwWPWp98BA1x7XAC89V",
  "key3": "5AamXbDR4trx1CfE3VsFZuDM5AMsikSEb9aoa4JA2s4SbvCtRaGynRxLA3iD2gDBFKZBUxswU3pA24ELLw8ZaFFh",
  "key4": "7tB7Y5G8xFkGQLSvqCSMw8UYJtn2ThhViiCKdRk9PDDdQ82SvCymuZc8feUGtm9fj2Qmg7QV4j9esWmrWKhYiWv",
  "key5": "2sc7ejboJ4HcG1eeep2reitJLnGHguzHUCCukLsyGD3mq8RsKf2Lxfn8kax79kiA8u2tWpJJieTNi5MsKpZoA3dX",
  "key6": "5A8rYq4JYtb92M4ZRXcS6UBzRzNonLBQpi7Gf84ByKX2xMoVgPQwMLfHgqz8RBBzVnrRGY1g1p1Sf8NSqEP7nFZH",
  "key7": "4JRtgr21stZerSyMLhkM1CEQm3oCzFhHe4YKuhNPQeXrvax9mbRhLxaxy44JSD77dMKGtsmDQ31fE4fkfZS6seu3",
  "key8": "4TTRRhVjehBUNyj7MFVYkPqEuGtDjhSfxdFR7ewpu1EpnT3vAnE4QHQvjDmziejjMn9tx5njbaZxYf48kf7ZxDBf",
  "key9": "58Peo41bUCVLbN2SJBfyFj9ML7d8x97QGZ9xksuCuFGKQr8D5w7U6LYKuuhb5AzUEMj5H5ZbEid4MxSsGE95eVUk",
  "key10": "34LHxP4ofXZZgFL3UMKb9yM7gyBCUftrYocMYcJiBUuJruxcFBUJAQCywbVe27Bkz5JvpSNsdVK4zi4u3eb8tx2r",
  "key11": "am9n8dx4Pk8kepef2du6RckrXDJsKVnjMb4vj3G9feoK24b7pE2M7Ahx9T2LKwD3v4gjQCUQaKkCd5YJiWFTjwP",
  "key12": "e5VHKEtAsXq1iUPHXFesLhUXFheQNuh61EzMiH46xoLPaWnruWDYiYsPdW5ieYJQeLfuJ8FAx17GWrXcZrkbYFG",
  "key13": "4jGugnkP4jyuWx2m3ENeY4rvgAFta21q5FMrCm7FfdWR3xnBkDknfSmKCsTR5DnXqh9HnHt5V6GhhMKDrXvZzsoJ",
  "key14": "9QeuVtJksY47jmYQMNDVcFLiNqpHsYXzsXqZsbCjx5FkzKc3gE2TK8TmxjM1FT99pfuZSt2TgCC837zaianrFwj",
  "key15": "EiyLeFo8THeh3kdCeZh4a3RBCWPXQEXYaBNquA5jjEAMwHcWcv1Jd5NTsmiQPr8MCJibSFWTpGmw5jmrBJjjFx5",
  "key16": "5ZUfJpGQN65VCj7pxDZMmpjePMEu1op46eZbdjDYaMbLEA8aPestnyS3BxjZ6Dh2YTEe5kkpBuYrwZkoSaShg3u1",
  "key17": "3UJjSBfZRhx252nCZdm4X1K1qTbpLjfwjSokVLZPUg7zFB61P8ZKAmaLtwbEQJSLXMd4DwK3PAqX5NHiMcUtGEF1",
  "key18": "3fmb2KbWCvvceyzmnR7pegEzBTYj6JZSVjibp81jqmGHhCsjPp77eyqNQuYiSTjucvNMgKuC9FWJfmRYUKzAkjk3",
  "key19": "5gkkmbAfMF7tXsancmLQWRgc4eJQxHvDHhURUWjmhkqTJBV48qnao9yakzcQNeNMWV9zttgsHKEx8mXyQNwMmAhi",
  "key20": "3UmbFVqdGzQgbMEGLKJXmb4ky1qASxVQRr2SDvptpUkYw3fivvJaRoyrh5v2Nb6D47kbu2iZ3k9dHaCBnpwKEy25",
  "key21": "L4W3q3ajhSHt8YturppwPBDrrzPVC6QNzwvvGfeyqoDRa9tNAuBpaTnUrCe2K8GJ4wJvyqSsYJwdAJNdDMvtrVp",
  "key22": "2feRV9W16WDx76T8STsHGCjZLqTQfseuDY4v3fjDB5ZVku68sLr3UY2GbebFf5nCVy4iH3HdaC4q372TBMF7yLbh",
  "key23": "22sUSSqUWikyH7e6cVtoBJDVsgQMFAGQzYPj5vNCJZy92RnREpy72kKgemjtbgKYtGWyPYAqNHiCziJzeG9HZQoW",
  "key24": "62Y4jaudzFejEQHwDZrJzpGY5SSLyobXCPv9JZzBTn7AniV1Yqc8otRJhPwHkuvkz8zkBQgZsNUN6LdoF2kjkVky",
  "key25": "2C1WLtyCKgTs1gbdWVe9H3PBi5vKiyWy6qxx4nnAKgUb9YiACZQXYKtYz18y9k1hBEDnTw42BDieJvUkqeS8dyXg"
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
