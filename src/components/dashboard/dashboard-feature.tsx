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
    "3yyCfoFnhC1ydCSHC2kxDkn26fDmaEpr6ibTVVRrv9uZrqWoJPB1M66V4NUoLADud2JYjL5oyCoFnw6d9kY13o3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58uAsFMxZRB12uzrsL4WjQYt2upYotqTGGfnK4SmAkaa74x1mSzD8XYSRrmCiFf5Rbxypz5mqtP1ArVSHJyK3gU1",
  "key1": "2Z9Jto9JumJiMD8toZwJkyd4r4oy4iiFSAGmx21ccvY5xF2LExxFkCssR8B8f8keX2jY91Hib7uvSq2YCqsgNCQj",
  "key2": "3U8mbKaP8j2TbPCiRWaqWUzGdA9F3EXAigf53Z85wsw5AP1q1dyDEssCoabwzJQotbmWPaZyRhJiK7vj5jtb5Zfo",
  "key3": "6djLw2KsT4S6uvxhqsja5MpDnxwtXbVvjRzFeqWTGnBMw5YXPwjmbKzG8LigoStUit7MJQNaHcFjZEvzeq56jTM",
  "key4": "3DwQLiiDoQHgR6ZcUzpTm1UhuePXRjGBMH4RbHxU7HbySow1buwdjZ37CsbMBjFoLq7Q2tBywhmVok4PT86beQtJ",
  "key5": "65gNxWWzfVnheGUo7SVu9kGnHYvzDBRk1QEPzQcRThjSv9ypMG7FkFcuk5e8zXLn5kMwScnXMkGmNKmgTaytHrR1",
  "key6": "3fmvCZhqWCbiXffcK8boYebrVtnX3uCQ8n5Jt3rffCL5gwBTvCLvk3nNWgZ6M4XNm2r2WockCe6xoTU344HsLnza",
  "key7": "33sFbfPV335fSEMgumfH2JkDiDf5WZ35PxNHGEA74eqBGppwdqaTzRTJrNCV4d8HxHcbhuTxi24QQaeCnnCqFff3",
  "key8": "3hm7XufLnuBzG1HyhjEf7VoPmzWe9hdHRvLBYk9mQCpHtLc2mrtLsEAxkHwq4aFu6pv4gTK2xnrUc96F2T2vHZjS",
  "key9": "2PUWB1ugjoT4pi55fR7rGNZU69ksdw3W6UZGExugqRVi2m1Qo6y9ajo5x9TzMt731uvDv1p2Asdef5EJ2H3YMZmR",
  "key10": "FduNLDZQ2NoAQWgxqvSG2ZzDnpsb4Db2KR7nMA4tKn14Ra2kMguejhatrvp5TrKGBp4N7C2bf9tJedWVgfCYGZ5",
  "key11": "4mC5FzqYSQJuTd7EneLge8WfAHd9d2pE2LBqHwkdHCGwBpedbsy9dzYZxyWFwPoWrYuPX7PhAUz1m9u5iYiyPqMt",
  "key12": "38yTAqhuYSKfR3GdMUaMBhXE8fcSDhUmWtMT45egPwjw8P9gD9ewwk9zo34H7fv2gxcNy1dXZwZk2yyPsKFUmD3D",
  "key13": "5Sev2an9HhRy67rW8Hzwopogysgqvy8j7gfuJbCZQZhad1vGeS3K2urqdPo1DVmoWnAcRQbuCS5MY8tdAZbdnmsv",
  "key14": "4PbUeCgg9ZZea3dEGtaef1pwyRmdtGNw1oygHwAifW1nAnRABn7VnuvHBTBvLT6UatBZ3ectWEu5paKHKDVwrvP",
  "key15": "efN1dhNZf8XrR7YTiCXtKSE2XUAYhegaLJRrCiZSjBzoitotT6BNYhAfw1ptZuf5Ki82wA2rJzSE21irKq8p8zq",
  "key16": "5vzDixsJeGH2FKEfkgafCQCCkBRchuajQrdYPU3qfHeFaxsXGWQ1qKpn63commskVdztFgxX3oBLJdrnK4MGmDit",
  "key17": "2jWmPF6jY5BgSjLC2BhRhkdr8u7VaG6kmbYFdYuAaJvsPccytBtEnh4dwJXATEzvVEurAHpbDizTPeR95ybVkZx4",
  "key18": "3tjX3wWEFgqRvEnkmZXv2tMtQ17atTxfmPQtnfhy95ZnPNtZKHpvYwANYUGycLwELPgnE9uAqk9C2v1JthCZu1L2",
  "key19": "23go55zwHb5y59ZJJTsUQyETW3n9xHpMzrBAYRoqctoWd8QBPy9WEVpbYGivZrq2Tf5uWyCCW3Khk7YQvutbEQff",
  "key20": "2NfnwMttkZqE9ncWCFNd1az832rnpwaozwK1zV7JGrdWz1YUVgA93WXsLEBUvRP5Wcpiwd7LRNz3YMp9P1TE9L5j",
  "key21": "BpsvrXPyDbtMMdZCTQCBAKixLUPp1aA2CsFwJEUk2dPwWUVmp79AKhjovqDTmVXthmnrLARDzN1GMfVqvYyhput",
  "key22": "35xHu5ETW5oaoC3HzHMuTcR3bwA5DXLkz97Y1tXCAPvEmAdqG5TWtcCeGyhibF8PmiobAhDiwTYakSHk3734zPBf",
  "key23": "5a7b3NwtgjjtcmVFrL37GNDcfJmL1zVPLiTVxsrx1W9aVFLSfL28ysXkvPBwvRP7gHLQQ9QGkZYmMisYtJJMgtgZ",
  "key24": "5W45oP1b4YJ64sWd1nFjX6mGt1NpyX6eMjx8e3bvWDF5NSiNxNhvegr2JzqhTrd41YkCJjK7eyvRHj8m7kGRYZEs",
  "key25": "5XXwGQM7BWNeNSY3JSfH7gX1oaf8kVdib5dWvCSUGZtVjQnNftntHvWmKvMDLzJnVndnBAGTMiL8EVzE2a5adecw",
  "key26": "2vHpHHk7FVmWJHN9Fs174sZpi4RZZBuKVzkSJaG3ZUNfLWxXzA1tV6VjBbGdeVepuxuXxtm6ii6917D7XeWUixvk",
  "key27": "3SFy4mpNqykidfqTCXCavajBzLyhSMPsMFbkMUQC8ks8AHFYDwTX6AHVL16J5gsVAAJCiqqRYsHsBZyUqAr238FC",
  "key28": "2jfQnXJdsFY9Q6TwiPQEefedQWyhQXvcmack7vh46RB1GVi8DNyKjFFe1JcSRuEXSAdNpQfQEE2uZsbUvAwtUba2",
  "key29": "U7E48coBtJrt7MTNXiKykdFt5DvGKNTdnYbMNDaLqmXfra6VYFkxpwk6JXZQHBjwAkmZfnaGjbAZ9QWvXWhNGdz",
  "key30": "42uBaSoSPTzncLsomhdKywKK17t9pojEpyyaX9jpxb7TXkFfLeBJa43W4xsK4YWNb7fmiRAgvqrNH57MbXcY1Fgr",
  "key31": "2aMERHrRyzuo2HjVMiEhZfWTkcwCpJXR69aW9iJRbiSrg5xcjZEwJfDJKq6SSj3f7FFsm1Gu9nb7zTFddNLVDhT2",
  "key32": "448Y5Gmn5t76roSfj4KWqWiMX5dUHnArgPdCAk2N72VTBuu9Uoc2WAH9oKPwGyxkNzDJEb24MUkTsRZxGQP3Wr4R",
  "key33": "5XMw89LB8SU3hUuvzhz6o1RpMdoUfJhRDTxH372vct6UDWrQ6FRiNxdckLRjadJp7XTcjyRnWnNL7DxNoHSCaWaa",
  "key34": "47zCEQL9odWsfRo62HaJeuRZtC9vQNhL7KtggsaDKoCHrxPWizdmjeUYzzB8Kh1KnpqoGbzEHaoE9cGY7itbVLnw",
  "key35": "5oSFCBjaCXwVb1e8bMwMdMPcXNEfEuPg5B1pqG2vVoZRG2U5zifQiKXEC8V6YvXqeRQww4phyvJBCUijX4uhjoij",
  "key36": "5HhEC6Z77m7T8juAz1shg5SRZ13hkYZaYueN58hrVT6xbqZ9VkRdMPTY2sTvv5SaTyfqwzMU2eFSyKjvML5EM7Jq"
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
