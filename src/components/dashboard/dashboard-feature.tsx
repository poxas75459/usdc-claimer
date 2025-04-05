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
    "2LBobAyyNKi8dzrEaRLGVeXQnFD1x2UTq427y8fmYCPpWU7beHubzrQ8GnSzDfuvo86gcAJgzVfogNExN5eyCfJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ue9WDsyjDRA75NAQ3H2wgmjNAXyZAfwRnsMsWmeGLFj1QiMebQd5g1PcyeSHASQ35SpDcwNKyHvcoaVJNrnncPf",
  "key1": "r3FHC5WyZmNT88kx5iBLDin7fQ8stmcqsQuydvQR4rbsMmZyjUbrFQTpwG7edMRh77AEh6uNg8BfGHPuD5Gzvto",
  "key2": "4yCSHNoXzVzid1RZK5GRFrii8hEoQti9CxtSJrJWuCumj5VSTcwxbgL87TMJscwVRcY3Bap1H8Zu7SwfDP1Yi73o",
  "key3": "KKqaipg9hgzB8C658MmbtDtMstVkQa7xAgAUPMC93icC7N9dRKZ79qEYot1Pzby6EnEfQWE472wnbzxWYdU4Fmq",
  "key4": "48sxRaUkm91jRDmC5gXZBP8X1YR1J2YodbGg2Ph5zogRSeiRK9bzH2Xx7be5BCEKoadGMEro8d7yKSb8Qxz5TSap",
  "key5": "2krwKRKhTg7qh5csV2WvezNTx2bV6LUGZa169fmTHKWqLebVcyU2w6Zyyw5kPdHwvmYLWZ92qp3vfYs5RwERK6Sp",
  "key6": "2Yc6F3qe56qWNC7RY8mQd8ehNbkrBEdeDJvdvrpkifRuaL8JJY85w6BH9X6PWL2ZnNCFyDEav8XvWXmCJKvzpJSi",
  "key7": "5QsfZNpq4gXg1xkNwNyEwfcdprTT91HhF9Usooocek2QFhMpufxpeCtqwRbtCRtDhcY1zD5Yc5aP6MM2XAzCh5NZ",
  "key8": "3FxScQNX1mamqMJKWtrK2QyzFE96Ka3s1gMm8zUk4UCAugi2rq2hwk5qm4VBjSMvCyh5SgitiTsPduXG1xg6T1W7",
  "key9": "2UENJ1Ua7rNyDnNeqYLTU7ZzfEGDrVhbVowFdu2gVuJ1jkomTYRz4oDty5dRWFjFpkyRj4PyVM5vRQhZhXiHbSXf",
  "key10": "4kkitMMhK5nA695i73375hay42r9p5WtXsNF3a1MLyHkUEqmY1ixtvcJgQ4YGJZSU4C2PdiYx8QrMip3omJ5vSUw",
  "key11": "33RZQ5mUWH87HRejNBV1DiWUaKt589v9qGfGi7LTVbnqf1hg3eSpZATsNFBMvoDZAREBjRwonWikGY1AuzHpguYc",
  "key12": "3qu2c7RrEuedoxvooHxwi17T5AGoCWFPiA7SVr5PadwJzZupSqnu8g1GASTg3M5KTHFndB6jA2vjSXqqE924WNEG",
  "key13": "5e1Z7fg4yy2FT9yrNysbktouWkTjY37z8GYMvBvtzZSy3pcVaBf9yFEhEhoU7GfH6XJChFM5x8xpgF1Y2TnuLuoC",
  "key14": "3iDR7THAhzH1ne5hJdhSR6YmpGacJu7uJc7ZZ8Dy5zZGDH8wzHAtRjACG4rWrKchLVBAfoxPb8gCDA4B26h6h4b7",
  "key15": "mDwx6koritEj2WyzV44EFtv2tHKQQFVkrYFo2v793f9E8TnvsYymrfSqK4gFm55GwxZb5FQTNS7uuKVnbMdhFgj",
  "key16": "2Qc98kDeCFocMeqir2CQzytTwZuor8cfqJ8g5t7ZGCtZm7LR4WWCJsRzHVNGZ6Krae7U4KuVTQHgVQHCwjd35NEk",
  "key17": "2eD41Cnunfp1GLBojRhUGHAeT9sJBwpZ7xGXBxEnPVZna6gHRrjnxAApk6x9Nzm4WTJQoGvtXCjw8DqkD3zksaCY",
  "key18": "wQCdRwLvLMeoZRKNyHCEKkY6Q6Hf1zCtuN4SG4Jx6U99giY7UXYFnFoCWQWEHVBYayZi9AN9hw9LvVwU3Ld6tD5",
  "key19": "4EsnFgsJnnRZQhRAoRxaW1hudHZw8TfUnk1h7RBptkuUkFsvpzHNT95RtdwBkKGFN3AGLAcqJL2QEDhP4G537GqR",
  "key20": "3RaCVAs3GmrPwXPwb1evp8A4QsP6HfmcVmrS7CoLNRbHkHoupW2fTYHbaN59Yxz9EeUHByyqnEFjKhTSMiJbpJgF",
  "key21": "5Fp2CuvToEFZff5zaVNmC5X2QndbJCtws4EpXwrASqJgW6fPvSAdRGMJu7oBHyrf2EzETnKu9nFh4uFWUAQGdqNt",
  "key22": "UVCKfkke7DXqNW6pxu9D5M1CEthJcVgy1XgK32kzJ4ioKaV5CXtySzYB4dgpC9bYfWbufAs13wFNuQBPcjN9mfs",
  "key23": "3rm94ELuqtvoJ1yuE5JkMGyYsyBJXk1YRn82SGRPApm2MPKDLWtq8XtHB5FCH9knjsMeQVrw7tPc2Z4ZBLbK27T5",
  "key24": "5oGVtC7ngvmn3qQHQjVAbEDnejSmaiqguiTmLTbVU7xb6dm3Mg6k5V2f9Qu1dqh7TxnezsXWL2rN6bejQUeh9qJn",
  "key25": "4jo1KJph2C5vkBmDU8oA6f3NG4qh9QsSVcE4MAjAfTWxr1wjLfRMUaZCyJ2y7eUL1ys7N9xQaVPWsZJdWRKcQfUX",
  "key26": "4VyBqxq6DANUHnECHzPWuPU9fgnhnA1DDySFj1WUyHWPeP46sSEDCveo6GKwHtnvRZq2QJmTcVzoF1RiqQAWWHTt",
  "key27": "3qKUGch3znFnJhpC9AbDTM8yfsaNsw3PMEX194pncxV2byCrjhgPk2xWsoQbrhua5J9zhRa1HaHWi4JXLDgjHjj6",
  "key28": "5BzwUvVYD3U2Wf1Qmdv7FShmAhA2YYiHhM7jpvVBBGFyPHELzrFQ9o2MGTLyASEUB9nFvLo7XCHWJMgXiYJVkhP7",
  "key29": "3j2nNGNUKPQ8wdPKE5mmDNt7MQSEDZfz36rqjthHDYJmeWCrwuee4WyfJNRdDpsfxUDVUoE3Dn6jLYvFAwgmUXuB",
  "key30": "5Fp5rGE3E1J39WsMDH9vgrhRHPWmzbWXzL2TA4FdMQdWtijHy7i6oVQAkBP8c9qZzgDLXQYwk1FPGyuC2JiAoYa6",
  "key31": "2xnsFMPA6sx35GQ2v7hEUkEx1p31NxX929Suaip5XQNYhqsoLrrgeXjoQGTdc4dgBY8jPPK9H45r77ojcg8Qsew3",
  "key32": "2YgJJidDS9tjwG6DWAjeLZhzNhEjMaunHLcFpEHPvwDxLKmz6f5Fx7ohrwwfeEyWoWizjtDAcjmn3dQwBv7NsLvQ",
  "key33": "3n8ACNFX8UTs1HAhSnXVSLtmnKD52xRKGAVD6Bx9XRtYdddW5FWTUf92QtrMfEnKW3g4r4ByTdJVS2A2iyAi6gXk",
  "key34": "3m7a3f535XoRywQRijU92PztEw4uEeAtmnUU8y2bhwAmU3em4Djjza45YUwrMJ2P1jdGQmjCM6nC9FjPNiyPd6G8",
  "key35": "4nbt6bkkg3iUCr62moHcYKjKRDW8zcVqM3PgYWq9LMXzwRnBCfHnBThDULUd84XDmcZakkEvfBDo4zRZaq62YPBK",
  "key36": "3pKsNZMUK2zyBcSn8usX7SAMPw4sHt7YQnzf3Y1M4nBaomNKjJkoddzuxAHLsXUTTiiSBPNuVKqtqmcqgBQKxDCx"
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
