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
    "5FwK54hShLE83mWi1yrrehyXQ269WhhgrWV5xcXpPjkSjnzwELPwgwGJwFgbdR5SD225STrPRM4vRn7miFm4wY68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aP92mYCqMdsRrd6BqZCAfq8fdKsoMiVHN2Aqs8UAXiC26ajLrt6nkBPuAMdMjJpJdRbyArGRbJn1D2hQa9PDXPg",
  "key1": "2zBYCwBqsVkTQe66DgyP3riRUvJs8fZqyGs9ZeMPdt7L8PwufpYPDQfcjCWEzKFMoiaHx2mTma3iwBKYFc1enJLo",
  "key2": "3C483LkvKWfPCsc6xPY9J9d3FVgQfvZ5iyVjvxknt8VZsH2KeoJEsebjwSJtNzhmQVAZVvLKD7eVPaURuKo7hBG3",
  "key3": "2Mj75hSHHPLzekK3iNBohMhiqyy9aKszVyTrmPzC1hRrYn6BBvGh9XyQfWh5PF5yYb1iZg6NJuZwZYzydHgKfxFM",
  "key4": "2QC2U63vo4VnVjvXJRTaAu6DDNVRk8oNrxCwdJ5idJaCqJ6hMpgVnu5cha71eQfL4w62RMaQjYHksPndy6Cf1riy",
  "key5": "2EWGBdLStsuQM25yhVsJDVhSooULjBPPWEqWQkqdWLcZQXkfFJSwSpy3RLxiP6BKqUdzkUmjn6FuHjhdnjjPDCmF",
  "key6": "3nUoh6cqMzSkXXuXtE6GHEhvBFJUNd4YGqaDK3EaVAkqTA8j1dgqj4BcFyjmjRqkEaRTxzhJEYenErscVGdK64PK",
  "key7": "5yjJwGnrWAU85BA7VSYn2y6VKFoF4ku8bxaCCddn1bRD2M2MfYEyFqEEtjLf4qibXvczJwompYqhM3aa8D74xS8G",
  "key8": "5ns7Z8iY4j3EJtL14wjoP23ra6EBFHhEoVVD7mXrLsrvJa9SveTtfgnMinTgaES9eiSNsDZ1LknPTwb2nxEAMMLU",
  "key9": "42AWpBHmaPvYzcooKb4vW7RzAapcPMHUBYKMe99SLxbv3xbKEdaUjKBK2Eis2j9yiCR6H8iYMNio3QGdhgUxXAVv",
  "key10": "61K9LCt8rJKEGPSFmXDZcyRzvaj5vWDYdJM5eAsdUiWP43scE6JM93HxzTRXYhTLK5C3YCNf9hpHvqknsfcTvNmb",
  "key11": "2koz1mAWADZbiQ3qnET333baGQeNF3GcAQksP4dUjQ7UouXVahcoxBwTNUYW156NHMuUrxHSaF7qTufa95ia584C",
  "key12": "5bsvR1EMZgKk9r7VfSmua72iARuqZCM3FC8sj596zkuwf7tSRrpcb3wa8CDbtef2SZLLo5j8m7ZD9RfwkeykqSoV",
  "key13": "3DQYvrPGZfEghWyNExpmXANmytypXk1kHLg7fg26bCTmntmKeihg9Xz6v7vmL9DjLNEPbBRkXVHPZPV1DbQw9pxc",
  "key14": "2Zx6RcFnZSE3pgd4yJAreFZC6eAeuJpSkVKRF68Vcc9bGQqLT5c8rAN9bRowFGCKZWmJaWXmbHpx9kfXXKE6sMeV",
  "key15": "5esfVXz3GLpBU5QYdctWWKTpfQ4dyREFWaJDPAmxEevTjNyCTqcVvTKBy2CSpUDSmtFKePRRyK4iZFChEnhSWU2y",
  "key16": "31SvaXNgva4VSpieuV4quD5oyhvBZRX7nuZRK587YEDRYSdcJZFByLyBqJreFx4fmw1oNw56q3NgMNUN54MQQNpP",
  "key17": "4VnmSZvNPtvrn1VH861TGqauzGViz7nC5tw4ueK4eaUQpAaX23vk6vNUZd2doevRDT8CEazK2CqVAYhwesLoyNAj",
  "key18": "4pdSSdQws5VAiy1nkaAqoBd9ioNtgYUZ3D8qL8V3eYpGtykKb5FxscDtnRJzraAmQhYWHDQb3pHFAX6L2mPW7Emd",
  "key19": "2jjA98eMYr1WW28KtjhjEzh2vxvxnsqTvm7KNq9118iXHatA1qMjLk23zTNoAG7wUh131oh8ypVCe9JB3KkLfZaZ",
  "key20": "3BVz4GeAkjSvCuioHdjXvmAACDmc1xsc351TvE3kVfJkXnrmqPm7w6NXwpop2nyMz6aX3pKJpLP4Yf6TiLLvWB1w",
  "key21": "3rzFuxNEkaRAzfgpppaaUDBbKy1ALhw3ffK71rCkoCohGT9b6CSUktTbBvFZ6yb2ZLwMFuCDELKWNHCECgZVzz75",
  "key22": "31Ykb2B3BYQiycKWWUqRnnH8WUGcZJpQfQt5R3s7FXVNgKHFYi3QkfdHcn4ELiAJDEXV6m4NfP1ZNi6bLEEGaEE1",
  "key23": "4aiUNx72TBnLoEAkUZ9TdtjzX5PspUDmYJmC1s8rJtZjEWGArrMRxgduTYykGqztGe19vsDFeoRNXVotXAyevpTo",
  "key24": "cViMGj6SCwuN9hT2dwPYX22p8r9c1sxme8ZpnGXnBs9AFrcAwwwHNzYaLn1ZTKDUWs1gdaV3JVqSU11s3SkqQaQ",
  "key25": "mUECH5VQRMRm8zXGHnyhdNHApTjNaZAYx2i34YGKcx3nfUjUvPRzpwYMxhz5zx1odSaYb42TML8AfbSJ52xheZH",
  "key26": "432Jc7wcBE1MF4HT929puQtdoB56FZ8Sg7jvtdN2Ht2NmxU1AGRXjvZ3Brtw3JihQa9PoxZEeYAm11bJhT83ufTY",
  "key27": "XhPpFYJYdZ9t9pWV678NjTp4sAw7agRThapgqLjnNoHPRTJjqkZBSMve8KT8QVLUpBCoVFRv2dAkAnAjxLJ2Bfa",
  "key28": "3zbvngUkdspDe2WaSsDNkptEx8xcTwai5TzHvYCR3zgbstvGMWrdABDcPhjuNxDAY979ikym4tgjqse9ieG3J4GE"
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
