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
    "4zP2GCKT7daqJGFkQMEBHWyccWqTqnKerimpRyQb7LPKUZ6MxRWZnfHDALAhTXGDCNAmfS9h21ucEUnHyhNnTMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zmRtjAZgNCWerD95zAYfw8ueSohmV1Qt9Xq9EEmtS8fXYFnkJQMEhobZsgGZDgrdpE3YTYZMvZqYn3YhRDskEx9",
  "key1": "YdcP2WW1Tfm9SNz9RpCnae2uKEGaehnhz6CxcCve1jJsun3FV9JbgNVawnuQv2MeiVBZXVbuziD326beuFUso3B",
  "key2": "34Q4A5Z9LnmjWmVmcFHbVVgFeGPt1tz78xL4fNADUoxGoXPXq2bcnyKqTYkWFYrHVwLLXoWhR6VeibgqtddgJQeU",
  "key3": "4oFgQPeKWPkpU2zXSYYB25ojkFsxqnrMyAq8VXG7rbqkdcp2WFbrDSVQQ4E8tMZdbnKg2WHRg5r6VagsetMzhqbe",
  "key4": "4ysrgart4mRig2XsSnG2ysJjJweo12SSARXoyc6Tw7Cu51BwvZxNZXB2pje6TVdaCojmfAZsusaFR9GFJZ6TaDwM",
  "key5": "5e9rPQYTebebH2ZQswGUwwixoadFzJdbBdrWnFWHyiDydAfdtpGSPq8zYPUDNSno8JsqqK1S83qGeKXmMTMbRLoF",
  "key6": "3foDs3WTp1RDAqvSfmZ7gML9zxcQJQkf44AULpiU9ApAHZBNvUcTTqRohJXeyV3ym2qcMN3VKTMZz36K2o9mPbWE",
  "key7": "5a9gE9V1ZDeXBEd574zNoBpLaknnLkMMykKUz1gVLnrkzWTcZsC53VtLvkU6SwjRu4bkj8qyXfeh9nD9ozkNGRDR",
  "key8": "33nbjdmjrgNrab9K7FMovJTarWKHKQvEWuGPvTWigciokCC6J1ozmNUitPfcqoviSdB1Z3zcZufitGtDkDnbtwiq",
  "key9": "5aiToVr1Dsy871sWbQE9sUmYW9bPwdAeBnk9qJZQiAoBrwLrSLcCfQ9WGcvtzN36biddvr2wGAZPPbTj2H666sJJ",
  "key10": "4Gihoc7uqnKgydV6FWQsT1ru3dbkU9SyTPVQQP1n3sBaMDELDB6hUg9nVKkKvXXxGz98x49igzd7zfxdc4mQ26Aq",
  "key11": "hA134PcCnTCaG9N2j9peKtEEnd1RHuMQZcwyGDQ869H3Dy5X1LCSqUTs1gVEU9zyQZ6tKApZNhiAyD6PQ4UQpaA",
  "key12": "2JdG6zXWXAQEHb5wonzDuXbEHpBZsnVkP2KA2FLk8qf2rG34Sw9xSLt6hsSaWNkrRpyzwckVHNke2iopM7dJ2CJP",
  "key13": "3TLSnRWhiPr7sQ8F5LpYaVRc7cJifvHEvw1SUAQBzYsD2V8pjP7mMKssg2yP2C4UMtL8scoVjtsV5J1Z4QSE8X5i",
  "key14": "2GVuSwvJjqmcZJfobgjcLbWR62V7Z7GKu43q4EMHAzmNTqv5utzehJSVb225nXVutfSVmmVYHN65zLwNRjHzzDLG",
  "key15": "2yRzszUcaZTsWtFZQeAwuy8UYgbLu8qns5m8sYPtmseRQiPLvEPWqcnrCSFz2uyZVvZSm6CHYuJ1h9Zp9NaoxTkJ",
  "key16": "NEGqX1DyuhgRkWs2SWBPGxQ1ARf2veognTWQ56xWXFqAqKzsY7LhhFnNdLWxoZqGC61UVySP35WTTZwtLjFTZi3",
  "key17": "4GVtVDbuTLtDQmSvxpvXYgP5ju4dJwuENfwkrNrRArwe37pohCf7m1KEkfPJbYSSurpV2G3JtzikgXBzPnsvoCyi",
  "key18": "4WPacejCJuLy4E5yW3D5Tn64TMnPQyejh3Bp28Z3tHSxye4qvUxwEkMgKxT4b2QJ2yW7rv1CUUPhQ7ZGTP9epQaD",
  "key19": "36Wn16ykj9booF626AgKt7nNg6nAEzfvsP5eYuhMJLD59cmrGBJm2xXyu1CmNVBKADs1zR1DWpKLSUTSMgQn2wUX",
  "key20": "2cKjg3B6wF7S9c8DsoqDSMk7Vqe6EzGe7cp8d2inBj93mKfCQ6zzRMJXsjUQQESi5S2szzcwu1on789rXkdDk6vy",
  "key21": "53hLvkcty3wWFtwaMcrkbNouxPqtmCwr4xBTKuguZkK9fvweqgtWWwnYJBaSmHriXFP6BkSJSi2Xw6EGYQudTTm3",
  "key22": "2rW9EXV3oUrY1waGqt6FKVtuE3B7dqbEoqjaEG8xvuTfqmjutDDYoxG6zp1VzcyTU6B9NumunAhJL4aMjiuQe6x3",
  "key23": "338hTTDxG3FVyBXgC1hvrZHVqyjar36YbphieHJiKRUMLMguofkYkJqU62br3VLCAWgYm1aGi9SFg7o9azpk8eBS",
  "key24": "fRZa657YkZrHUpa4psQ6GE4DdATSLhvD9aSqeYzLf5jd6eQYUkDGUxSV9VCTA6pci11mnTydMLUYQ2ZsB1HJha6"
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
