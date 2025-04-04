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
    "35LAs2DXLjMNrZPwhaofwqvP2JDmojmGAsbi4X5GwodhNoVjSJurZwD5tNFiWWSNsr31pSRfdA8qQgWm3Xmg8xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49sCsM7znjed8yKcrRVBexrE4SX7AtgVmBZb5zVQwhcsZjishnFnMQVVupCXU61nnZEgkSGZFucbv8UHLstpBEXq",
  "key1": "2CedbXkzMuNpxDv6D9gnAjUJbUKqUo1e2u3wwbHT5N4W2YMT1W4aW38JYwRgTvu997nMRWH5W3k2f7Pc3n2bo8Vp",
  "key2": "3iWZ6vcqoqDb9uqgYyATZGeJYpyWi9v74PcSVDSf1PPNcnmdCPvXZg48aQ44PM6EQTpJ3wSrKhj2R9tb2uiEnhMn",
  "key3": "5mj7sefthT1QgdwkASgGvTkKFBDdKDBejPMCGqdQwD7gsDmqzDEgo7iiMRaschfVJ78v3csxHexmGcVv82Wnj7aB",
  "key4": "2Kfp9kncWgnkJNb6zChq3z3yoEeRfU5DBisYpSZiibt82MFDjN8qtZ5aZJwrxcZyXKnfMfYVyZtgG8FrjnXTiUP6",
  "key5": "24CXQkuQMfvdBRtmxQkCUVp9gx7AXzCV1VVufKjczZ8pTiX15ti1oWrnZfySBVWwjADEfs7c4ezZ5Q9vk9LJ9QzV",
  "key6": "2qnrmR6ZzMyaHBSzg7hcrL3cpTtWrZ5zXwRmHvzrBedCkc1CjNodM5UxHA5wDvgrHP6kuzw4piHctvGz1imibFAt",
  "key7": "5BSuVZToezBvDojq8LajwcTgzpnWAFdS99pnbtop48f5amzeLMDUvxx6bwy1D3ipjeJjhBWbWEZqoSHY299QHVBJ",
  "key8": "3wVV7ycyePnMHHaX3BCCrACf8nDaBWWVn4YHAUt6WsmG3qoDYzJPrxo5kVznY9NPWthb33E91daqR5HEMpvgSdoB",
  "key9": "2a89yLHsDV3jMekLfwy6oUFXn53i51iBgZMcjaX1iPhnRCrgTjsbauxc8U3N3T6gdP3xLQu8vpioThkE31EwjyqJ",
  "key10": "2AGyiZs7AGSsFkvsLzvsiQjnR7kDysc72xy4jih6LvNCHCYmDhCTVYA12hzL7JFfEcR3nXdaXUdxnKjaDSdfmJE3",
  "key11": "2gAPPvqGPMVFJx6QHk32UurLqYjAcoF5wquAzsYM1yz2rxeW7ufgUo1Qh4nMx8AjLdaGCJEGUYnUQv6skxg8V9eV",
  "key12": "3cB4CpMbiHsJjKNmEq9PEb5czfe4n46tUnD7hFzE16U9JRB4yD2xMGfU7ATvCw9zT66pcwE3gDfDgKDRH9AtWkSG",
  "key13": "4osmJUAXLBHF5AZQAFKVBBFFmXxdKjx3WryNyFpJjeyJjCaNeifMTVo34BWK7GovMpyvQPv7eK8U7bz24F5WJmNz",
  "key14": "bZTS9XgnfmR8d1WNnhmvJkWMB6oe8x7UwJHg7FoKj4i2bZgnhaH4VnbnBdgT54dbKBf1qTZe1DnxJCNpZcsVH3L",
  "key15": "39DcoK5fXmi9LwUQyp1DZazLPQSYRHzAcnRZJrTS74BDFD9EaGqxWqVKaZiknWPbutuJy79oRhnKyBRs7KnjJ6jG",
  "key16": "2GaQPrdiazAKMK54f5jPJBwtabXPqRvp5Wp2LnA8vHgnF791hyMheqdAs2hHxQ5Do4Ewq2FMDAB6aBAivfkjsYUd",
  "key17": "3r6ToXz55v3g1KgJZGNgjVoGVSwewef6F6tg39Eopr8ChdxjGgPtQnctbSD9CAmkXzBACKMnkPKUVd9fu2c4GbYT",
  "key18": "5r9LYvvNFxvsverAt1zokUDZf9ua6TNBhAwkbPpKvqE1Kmg119XvjiHDXakKK8eRrf3bvdtSjQ49Hq1zgacVk7U7",
  "key19": "2SKeMn6u3qBLNCwJiSNxtFSF65zBKqWVzUCT4CJZK4KmdkXo4iNbXAd2xhyQ1DDe9JbiL3FFUHmYESkq6bfKK6F2",
  "key20": "qRgBeNCi3sq3mXW6VsJdLasCH3puk2xV7bSdiRpZanB94dCyn5xvgpFCmsLgKMhXQ7bMhPDc1ZppNaFe7AViDnC",
  "key21": "j9zohr5emb3tUxbK5HgVg98ydxV9P6eaGSGWNzLkc62woRgRq94TfKbyCuw3VcLCGH1JCrabL7CrZtMGB1j3jB8",
  "key22": "2wkNAvFcZfmfWijvq17bwwEyuTes5EBvax3iK49a1t13gGHPtB1fJ7UurcgrSvoVoV8Xx9qrBi3GYJ5u8zZyLp3g",
  "key23": "3qKHJXJMri2JF8NWZPd3puUyL7uAxqMPvW284kcCXFwjGZNSmP8V2pYGquUBij7kqVtFJf7snz9FxBDHmWzTP7ag",
  "key24": "4kxGeFh1VEZZY72GUhcDAA69rnvJEEp4GG9aVf7aPZuw9S5j5nLi2B73RK1ecpiCqubhhc1eLgjY95sDdJpcPhJc",
  "key25": "224tH4GjtCB78949ZA7v9Lc3pXHcZiRMqzCcyfeVBghTPrJwvJjZ691BVWWLC8divJaxWYMLouaJk52o9ZQZLTkq",
  "key26": "2TATiRYhSB6Nv3qo5BgwrRjZvnEVTyb4YCYooKCFkJvDpkmQ3BRye2KUNpNkEDG2oGHm6J4kJGaXGQpGMPGrCwxk",
  "key27": "3fB1LEqF7MDeKAujx3eABtmncLAdKSucZKkszrcRUPmQBasgRAMRMi75SAz4phXi1aYQ8kVx27E13DdbhsT8fr9Q",
  "key28": "3T2GbSD95PuoEiy3vJiHkKkXoNbze4wNRjsto4yHKscYafDyVbAL8cNS1TqihuBUQwdsiyvh4B1qxaYHGZFaQD99",
  "key29": "4wWgHJy9vz1pLjoNgTqmRuQa11eYEF4Lcu3hx7WBvDqLvNygNA5jAo6hR1CknW8rMd9HB9BParthPGQeoNZSR95a",
  "key30": "2ZK58TbKuyJzqcnH25ZzaVoBoqjNiF8n7xuqnRTTxnYVQKbrJ2LVHL5NRxCXXQ2evXWzjtLgfS7mYwVyUPDcKqo4",
  "key31": "4UbWwDrJDf81sRv9FxzANGj3C5DQwNcsoCp6efadkCb2RsDRmwY92LGKES5KaShxmU971gZQ2FWtHiehs2qgPx6J",
  "key32": "3id3VcXyg1Q6bjMvCNbhcCkSq6UPo16cfsjzVUwW5whNiDtM7QV1U5QzfynUm6Gm8GQeedwUhNFo9JQeHuBp7WSu",
  "key33": "4QWWGZuAnupr59c5MsUA3R8KVDoxiwzQ22nMs555aAtezAsRiRZcQYc2WyFnqcaSX2S6DsSaHvWmWp3xm9FEcfgz",
  "key34": "2qW1C81weW7WA3LGCWSE74Ts3pgAdgvJFCw4mmhwMHg4kkuqWkt4bJrbLhVNWbFjz6G1Dp2NvKhV6vp5LtGpZxAG",
  "key35": "3tT7pyHssYuwAsvCq9XQeWpM5KFw61W371hxWxkjiJxJZH1bYFSpdQBYrgxoiNSKDd4vJivEhKH3myhxct6S4U5y",
  "key36": "4DYqZNBeCXkuHeK6ngFDBTsyBLqgaQH9D6HMK7UM9pvxJwHtbYYBrGWvggwyErPGhn9nqMyUaF9Ymuy1BWNDZYZS",
  "key37": "4YWV2DBk4mEegNK7cM1BgS3JuqP5bVosydkF9mGnWyaZ2t2HGngQXVrV7pzTfsCNKyn3am7S1teqoVb6AKsrRQdD",
  "key38": "4Svy33YVui5xskRocxrrX8ZNeASJf5iccb6auWAEDwTosxNMJLjaUtAgUcg8dQ831JxHWCzohmwssSDPuiCRTZQT",
  "key39": "2zVjt3hjtKRpzL5EZScpyXDkEgptZUsisTiA5V9W6mfbWuRMefbgpkjNzdLtfX12zXhHQaqsVwcchSJ3GfuEgzzT",
  "key40": "2xUwiXY2wW4GAntUqS3GJN17DxyKT823oudDhhcQ7J6qZAiPAtSBHiRAsDJcTTxKiy9Ns53JywDyvx5XdnDEFpQ6",
  "key41": "mhiBSgdopa7SohdqzLwEPRChvA5bhSXUt4XZYPEVkHiRKu1psUtVUFarcc576R6w9asRPLtNe5QZmJWvFKdvhmR",
  "key42": "55aPYWWjuVuY6wYh8yXfRoVhZUWRaDCveKTWM8VVXwLKjSX9xSeAYp5MUxtDab7hptuw2gzAS9SpRcHw6E8HJwF1",
  "key43": "4kuF2Lryz8vX44KThDHpcxqnGmJ57NVFmbBc3EXX81UesAFsbT6ppgtJZXaL8iGbP6SkQn9dkZfgkUhp1br258DU",
  "key44": "2eN7gSSWEpeVdXR1zqgwaBNxNB94x2vyo2N167EeL11JBoKUWtWqshAyDXdJN8vCqECLsNiFYVUPK8r17U7b8BBh",
  "key45": "3nxPWpPDWoEWCE18NJxtRJNcKGKAV5BpfXd5XHFaQN1KZTkiwakPpohJTPdAoxH1uKt2UCah6ei4yMHov6rKfiCC",
  "key46": "4BYeGwSuad5RDP3fpB6414WGxJcXug1f6LeSoK52cQjchyDKPBgQDTduhgdGj54S2DTqX3tr2EFduoJ26dwxnr58",
  "key47": "5ogZT2hqSCARYjMLHvFAJYYwJwvRwaBcxJzbv9a3ZmCym2nT8QJLVnMCuGBSRyaHigsJZw5DUDWuRxyeNT51aqpn"
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
