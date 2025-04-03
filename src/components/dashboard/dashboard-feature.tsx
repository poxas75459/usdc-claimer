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
    "2k7QUgUq2cSHrUu8QWRsBh5xiZhFgttZJHfwjE6VvGcAFwmYUhiz2WCbMEtaTUGEiDYuVAwvU4bDweqo3pKcGCnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrzdiLdGpA8TY46fwuanMVU4dvSHDEXMHncLM9PRNesFyT6S3FuseyFKVFUiz2zsvJACWpxFFvSyAkQTxY5xnwo",
  "key1": "3MD1GMLVFLEwanHThMDFMS8kt9SM3XHCJ2Tv1uSUcPnZmjBy9Nwmf7Da349t7PVai1mFy8KEsdWFLhDTVuXtUqA9",
  "key2": "4BjseYVCqvxBQrwDayEwACXJZ6FMNqrurT3p6X3p5QPFMBXzu7fN8Ain9ogMbXHemHgimKF7UbrD3TmSqoYPPAy6",
  "key3": "2MM5YEwJK81QsEGeKHhXawgQnVafAhQSyss9To8Sf4ug1UFWsbsf7FPnECv7VkSaCtb1m5KtM9X4APGS9kRcaw3w",
  "key4": "EDbGsBb5c4psdJRM8YXzuEUR4CLxopA9mJohSkAkURMNxBF2HuFfGpeN9BcxfRqEympNP6B2qUFXC1jbLm5SrvV",
  "key5": "4n3Q3wabgcNg9ErvrK2BP9Q3fBnJxU7DH3twCRmHczUCMYqcebbRPhUvJ8TgQsSepjfMSQgdnhunSdYpxaDJQ1KU",
  "key6": "4obi5ChCDM3SF8Q1Wwikjoe3SWRd5WhLawT56rbBX16xGiJb7vPN8ArqzALiLDt8xtQ6V6kZqyqSoxZPJmMH5jBn",
  "key7": "5Q6SzEEjiEMbivapKkJDhNugiA1tW9TnvEta1LADX9TfCgRPiXHLHtUN7CjNDgusXMxqduocp3TiQ9oWgCZ6PZgn",
  "key8": "ExUZcyauENB2QPqQFUu2sPZJZMLwWBffYMinn1Fkj972DiNzsMgFNmK3pu8QY88Pf1AAPzVTXp4NQJWqChuuo7q",
  "key9": "2SbZBhZvJiBJRf8NZFHA2Xq78fsGwx7dGV6FUTJ1c8xsKHPtYtpWJ3KbbWjwGRcw6GM2HtVm6pbG7JrRLUQBhADa",
  "key10": "4mM6652brdCDAoExs73L7t1p134F3EnJeSSN5YddEDRZoV5DQrs3nF95RHZ6NwAkhVJsYUEppHG85pcj42xPmHhc",
  "key11": "24k3Mhbtwk6TShAYK2CG9Dii2DtxPsk1ZLCtjogEUxmgCDiXimxfv1r1Qb9uWLV1nXGQvaoJ4HdPgRPpxULADrf8",
  "key12": "4U8b4pPYC3W5eNzSkNDkZg9Zx7fFVaS3Td14GyQgC5ZgC7chH89ZtTid1N9NxgtChskgtrxWqJYZTawJW59hTC3t",
  "key13": "2QipLRhDipL8kYMk5HGeatjkLMZfFoRkih86WjutKswYhMVy2ZneP29yk6YnEzaQ7KVzWBmAc2PNZu1ZKdQ3QS6W",
  "key14": "515XfzXXDzECnsLYLtYtziJpFQbz66mZU2iH5z5KgN22Y9K5TEPVWtXuCcsTJtvJhuVFbLj5tnjU6gdWpRKTV3LG",
  "key15": "5hsqBKgZeXEf9tvcs29ojZXzSAynyADMD28myTF5MrWD5k7mFxU3BPh6uqKfReFWPbLthn2e4Rj2SkF4jbzdo5mK",
  "key16": "qMthtAtsTDGnnHT6ZAtu7d6JmyHWsPx1c34QScTP8isk5RyaeuhuftaBszbgFJo2f6x3CAanA9cd2pgmrqixYTX",
  "key17": "2N8PjrqTK8rodiiknUYRwPyZT4AmuxDDaR6eyPPFqgYBNqXRRNejB4GRFFnpspEwarEPKZyEaq6EdBMrHtwVKxV2",
  "key18": "uyUjqy2zQf9gCujfTMSEeLqXjt2cax7RnkztZuM3RApwdngbw5rP5BWpMY6VAfekfy6N8LTj35DWPujS2d5DYnp",
  "key19": "2e65Lic6wn8xDp4VM4CsQQvfmcCwK619dvpuGLNj6VNisdJ5jWY6XEkhbCjtuKhX7zajXnwPCXNmqAzCTrofiS9n",
  "key20": "3fAJapdNR7D1XiMtVCNdB9RbkEUz3w7AdrWxnqEx5Msj25iAGHFTS7DBjfcvksAib2UyUgeBj5EoXRanFceUtr8w",
  "key21": "BPbXsvr1fdp6joJ6fMX3si3AHJYegkD9cFeupXci2ep38WTuek51y73bUJAJyfAD4HEHuLfYNRTjWnsoRw5TT5s",
  "key22": "3BDnGygdzyrn1ruEmMFb7K6dm5E8jguPkVUS58WEiV6CsMFc76eiUYkyDJA2qTFVZbRwmSSLr6zKkp2BThPJSCqt",
  "key23": "34o9Xz4AvTcNGySN6yN7FgiEopzDJk1ryoHLnVL17dnR6W6KrdTkUViZcKDQ9NrNBotnCZQGnXGUS5pimyVx7FYM",
  "key24": "3hzsVwBnjGojpQvJiM3m8Dr3KFiMj4wN51qU7C8irP8z8CvGWfa6rzyZMDh82gE5Pjh3Z35FSFfvPyRtGxyB475D",
  "key25": "4ZHaVsMetLyFoMVSUBXVXTeYbzfVZSSLxkUvJhrwjZptiDELajskF9DzYyTyTvutCbhPZMo4sgN7YnTe4KkGgtHe",
  "key26": "5EEW4PQyei3aJaqGqzYmqqbtG4eLTPeMoGuYaWWRHutZg8KXVnbUqgwDbmvwdUeJAmALtbNu8dzedB2Ly4pWbcD5",
  "key27": "5xBnsPX43rscYLQhsx5oxKoqjK9Emj4ELYGTBeH9a9cgv8teFYkwvhSb3ubtNBbUtaHwp3oSSQwkFeVXhEYsUmnB",
  "key28": "5Y5w5GbPjFNeXmgbmwsgoUvfxny62YByngVcg86Vq4fgBRgh7WFfsiZBHGcUdBnYTApXoWPkZafSe6uz5pH5vdYP",
  "key29": "DmhQeBdepapSXzk919e5bmwyukHV9UKpBFqaadwYAr9AiX36crN3nU4ZNdnKuKuoA53ND6mcTJk5b7zAmM24EKw",
  "key30": "3GErv6WWB1XNpWSosizXAC5U1EeFqqFZkGTGjuhXxZGSWfmZmw7JjVEjm7n6QxXE9sCy8UkCAYnnPqQi2cw9FTt9",
  "key31": "2UL7NJCuskCcXzjD2fF8GV8wcSZ8nbJsDPrbTrASb3VGaHWQxawwad8T5ajZ4sPqciTmMPs2KPfrAYqogL5uFeRU",
  "key32": "4ajPZoMzCmJ6fMrJvf4o1mFi9ETkM1N4HWuEibovgGWe19WHCxzy1YWcjCQ1ivti2w1z7MAZ5uT7iWrJG8P2SU1y",
  "key33": "2RvnrgqrDeyFTV6mTB5Cq4TwuX3JDZs2A7eFGqGVmisx41zwLTg69MHWtUEM9TNP2G5CdoHKCrGmXwBUDAum5SxW",
  "key34": "21mHejQK8ADYZw4L8wnFZJU759cNghcWqCV7k5QAfkELnQYkLeEFMaCLfp4vcQmqaV6z9B4J9mpgFiMvWXXWxxL4"
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
