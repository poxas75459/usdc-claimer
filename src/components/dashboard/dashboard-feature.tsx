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
    "QMVkVxEsKzhfFrxbFcctGFoMZKWPeFvtWs4M16Jsf5id5qDUGeTaCFyuDZ15d9Ne4ZoaeE7bcJNpgCJfA1bh37Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64frRoCQSMUrmwzoZ6Nir4xaRewde92whszDrjB7uaFqHGpCDepsvKK52RoApBaJBtZffeMcH4CVJcmyqmmsohdf",
  "key1": "wZqsm92BzrRxt76sxRMTwZAKiPQD58PdHLL6bQSATk568RLKa5YJ6ZA1tPU3sNBA9CVpz43k8zmPzm2w4dZxf5X",
  "key2": "3mNTkJ8iW7MUCT89aWutpYvXfwc4GA24HMK5ezFX2KR1pr7w7NGjH3jH5y4JN8EHMfFH9z4FXJBKZhFymCnJsr5G",
  "key3": "33XF58ZhUSReVmLkTv56ndnVswZbmpMCbEhgU4YSf8XoUAu8KLru3vHfhcY8WgeZVLBppfAA4vzhDa1yMfzFYM72",
  "key4": "32RTuQcgBG9vx7A5zJHmEgb5HD5re8X2KyDQoTwMgqbj25AjK9b8ue6gTiVVwS4WH9xVftdrZojcbWaC8Peb3wxJ",
  "key5": "2CbCksmftf8gfohfST5bFVxKdHCjc8gKb7qMcg4ECK78F3ch5aayUL221ykTC84KLu4MAUC6nbiYVSbTYZ9Xqb3S",
  "key6": "2uRpqmGBChnec5DszdFAhTvGvuzZsna5C5bA44irvrYK2oJM8nxE6wRZNPjhn3QCPE77PhnenT3BGKwzGucZSZJw",
  "key7": "65He49k72bwPrZiaktKQezF7Bpntx8DoJ35aBbRSTLVAZbg4RfwixTVga6uwPnTmuRJG2MeXkxxedp6fvV3328XD",
  "key8": "3uaM4vHwzR93z95dBDhy4ASaA9UxT2V7xJ4ekvrfccvRF46V7JMcf5Z6C5uRZrC8oD7vcfVEXQBQJK5ZMwkZb9iC",
  "key9": "5YyM9KMbP9cpKqhYWaVsR1tUJDSx9bYpK1Cmo2QB5jqvtgRQRXXFRhZZKGvqPFNsgnTcT7B3Y2trCJdiNTqSSdXe",
  "key10": "41haoQMSvZEyZkJexriTpjYJ3ejjhwtJ7eLCHgRrHrBykja4oM2DvXzjkc79459y5Df3uT2RjGUGnXLt4gATx5hP",
  "key11": "57auBbjHqN7ZY5JSUthahUYyZHKEupkoDYiWLVCVnpsqAPAjr86LZet5fPePaUe1x4sLzj8qeAKrsF7Hatx2i1Gg",
  "key12": "sz8HZuCKiniyd3tz9vC5Q3MgM7cMc4hU6KMwrEU9EA9wgZYozpaNsnSfaSQSvgTsaYRV4igRFKxodpc6Z5zEfSp",
  "key13": "3xQD3fBjKUrXZAZjwx93JgpyGqWxCNoAAWWyQgBGKKch4dZgc5j9VrkbFnDJVGAV5t6RFM7gzrtXDMcJxiiMQZkv",
  "key14": "f2drZ7qyrPDNrnrYvR7gfXFPaM9JdrxrRZUTD8xn7TAbsjGmmkE75JMny2anzcbgH5bCiFRimWCAZ9FgZQYrcQF",
  "key15": "5bfPPn5soGnuG76jh4HWZ3fJwNKdtRZg1nUejYqS8ikvapHNB6jPB988TFtN8UqZSWMv5UaE7rkrC3aG5NEJvMg6",
  "key16": "4k9pQtJAxd248YxuJmjRHkbgnNwqDGTgzv58npgtjf2AWU9YuTCDp8aV4XJ5n6cQLLMk6emLmhzaVT5j3xK86Ko9",
  "key17": "5PHx5i7qPP6jivuP3UvSBa8zkpcepCeT7BK8gwbkbgbUs4nf4DnbEse2w8f7t8B9dGxqM3LjPsHcpbZjbWvseQo2",
  "key18": "sLAirCAmSwJaYeLCLeYgcAPM9QihDq9rR8bY2Y9tA2otXCrAfkmNRQQfUWdJLG2bami2AKWRHQfjrZQWZh8v1kG",
  "key19": "52st45rr3PMS9D2oVFiiWFgE9c8WJyisE6CbusP2kCByK9U8x3c14K7VNZsGScF8bXAoa4tZGtFYq3jUXrJCux39",
  "key20": "64otTWHH8h9HXLagm2dubajMJnkF956dqveBb4QjvpXAWLnHW1vry82PwpnD8azTkKoA7tM5NMZa72ukxH1ngxTf",
  "key21": "3f9BuM4nPqVMWbYgJ3s7Hdau435CWLHs9hirKNpSK24xHa6468KJBxK9eRf4wVSoEogzZrSyBAXX7R7MSkWw63je",
  "key22": "4TyHrEZeJaEimoPPqdXKs5qFQpaRmXn3dnGwCaZgCcvqQeLvNWEtdbHRhF96ZnHPqSNc785crxdDkgaokDjSUpEJ",
  "key23": "3EZ34odndEmgzht5G6HSRJbsr8PPpUi7QnC86iFmGghVQC5iTWp5EpyfAmUFUGwDUYEituPwzeYBS5EpgoV2zrcU",
  "key24": "36TRjmRc22NY2S4UMDB2Xd8CfBKe2F6vYjPC6XTdeEX9cqvGZyCa2mnEaLShWfjSQWrVFF1ZuMaduRsMANfVojnV",
  "key25": "27TkBcwr2bMHVnwu8Zr6qAnqQq5HUdgM8E8WLoM1TzXm6TFSwesJXzhxaCHoGNDiw5A3zM3yHNZvBn72MBA2Lmkm",
  "key26": "3yTBjHJ6G4r739JhWm3WX1GKFWXiqxV3mkvVoc28QdJyAJrvbCb9wnK4AsnrnmyzURbar1racLhrBezau2fcfXzj",
  "key27": "5QQ7zTBqAxdFCrQVT1V63bf5bLA5qN1iV3RqDfNobc45J2QpUVGBpNXKaPDcRfWuAf93kK48aZ495nsTtYQHhRF6",
  "key28": "5tpdriqRY6PmVQEEsfENkTNEw5kFTPs7yAs5g8o33hdYwoHd3tBDJ7Z83yAioaQw9wpfdksseSWp3C7SwWAGG8Y7"
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
