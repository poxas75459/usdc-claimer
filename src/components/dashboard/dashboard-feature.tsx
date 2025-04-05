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
    "3KTB3HC7BF58SNgL6V5Kr9YaumKzzmmHyrXTwhYPrAmTmkjQ4coAwGUBkSYwFF8D9jKpEyzmwmbHmPSMdWY9LpWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YRzqQdiAR39hwo5TWLFPSvhd2rjCzi914rgh5PhYN6FjURUYZNeyH7UiFCKH1byMzvkvTovpKVZtPVHADD3aNc1",
  "key1": "4jd2sXvZHHwbgdL9JYpH7XbeNpuewG9MEKbH9mr8UpS3QKohvHgSFbSUMYEebABdtoBKwj4quwqxtnsCDLsre25X",
  "key2": "3wMJWB9SxbusxGebY1CHPFnL5jr8JCJ98ePaxmErfA73jDVDtPhGDQQewsbffgHuJbN68sNWga6gGRxMkRbMv4Yu",
  "key3": "4JYJTjeb3yJDHByxijPyw7zfRiussEeTP23Tqp3PjNeBjQS15nCbZJrt8z7wr2oMFc6xVo8pMKsGrfd6dz4FjAU6",
  "key4": "4FPpEF2MWpMYmq6x4rWgiMgNtLVGQKPtcJD6FBmFd3afi7m1jFvqZcr3cTntr5XuYa82FzoLGxG8qu2ySRy7GTJF",
  "key5": "2eGUq86sA7BduMKBQxapE88yGsFipzHYE1X5SyqwbvPTV5NCLxM7snwc7ByitYh9TZyW71cE2yKmfMyNK5SeJ19A",
  "key6": "5QitWyTNyDFaCwMYsxDyhjXs4MFo8hLHy5tkiL1sh55VGCQNtyvgWAUeC7Ca9BYz5YCgbTuPpBig368F5zFFJZGc",
  "key7": "2bz6Av1V6hp8FWkX9SCTMgmGcMYFqpDFVq2dFyKAZdPTXiCkbDVFvQAhrers78wxyPXfewZhWXAUA9bG8u1YzCwK",
  "key8": "5bCgSWZ2RZz6M5tWvjsGmWvTh2DJuQJAceJCZsr1ExixLiAtVDBUJiAM3g4b1Lu2t1JarYYb2Bc9DdUfnUBSbHdC",
  "key9": "3RNK8c73MZyiaJEVYK9onGYztj8j1u6khqHFv9YZThYM8JEbXo3ruQjdSaGYFh8DJBP2HgDF55AFVNx6A6ZMsGHZ",
  "key10": "EJeWimRidxwmnWBpAoz1ugWLZhcw98Ja6yYy5BrXtYh7prcfPyDi7zf3dtahbtjxYCfxpsEsidfVoPHi8V6QPRB",
  "key11": "3ZRVkv9LYCrKiQNvWTjqaWMQVsJFwAtfvoFKmiBjJQESWp5RBhtdwh4qMtsX9ejEL8gotmJD466uakcRNxV36sec",
  "key12": "2bWwash3fWmBLKBRWcSgKT1U6TkCYteqRbGQcVZXWyYbjNYWxAMoSGkP3Q7dik4ueTp8CqsuUYAqBMKWYiRNhF85",
  "key13": "5LxtWM4gwGpfRkA8QG1EsownCqmxefJT9vtWPCLgr8vceE7kFSkGrvjdqMymcKHFYLDv8mr6mq2tzCccYf47Rgg4",
  "key14": "5RbrM8nCC3hAXbpkjToYJBgQGqEK444xYgvb7z5PXEqq2iB6twGd3WcafwHYVa1AgERhTu69kihGWEh174DXeaPx",
  "key15": "RVsGM9vebAv9bpeTwTMD5JdximPtj2oTeDUQdmfbvJA5CJyuXJVUk7BDURtj1cvvtX1s7tYG9XUUbxEo6s3zhXF",
  "key16": "4tyExHcV4rirXTFvT6qCcKGefeLifF6Lcxf1qYSnmDdHSUCQt8ZR5HGX9Y9Zek5fzh5VfCjX7ihKeYRfp1EU4dtN",
  "key17": "2AMk2gwR68ooeTEkY3bMyn56czRvt8MKbwQhYj3Rxo77jALqwqAHWmkJnL3EDr312e8s4boVQ3D5GQYrf5UBLKyU",
  "key18": "2rHnoXue2Q1anyvNybW5tfPBFPq4a7FBi7TktNWVzfMQrEfGZbB1rdC7A7617Y7B5UShS5MCAtwKDwRXEU9LDHj2",
  "key19": "4mJfDTovxim2DMoLj2t8wfJ5xZuGuDgjf7KrtwDXwg3QndQeXb8kX6J9NryWfmaPxS3kVnVbpnJ9kPnrd7BcgJSK",
  "key20": "49aqvmwnu2EKCq7E91o7EGi9xSGtfGKZM51qivjp815etuXLA682RrVgYDq26Sbvf7Ez4e5JmTMqBR7XbkHd2EkU",
  "key21": "4381ahfWQ6X5feR9K7j64646iwro8EdVVdgqwrHbYGxRTHfU9ryNMmn2cZeYmCwGMgEZZuVDvjHvwBFvna415AxQ",
  "key22": "4qAACzgT8hHYeWQsXRPwV6ngyJ5ZbM4dQtqkRasvPXcmwtrdXMN2ae8NRhY2eQcCULoBkyggN7gmoWF7UioZBMqd",
  "key23": "5Dc49iGdaj7KV8VKvxkf6YG9dMtPPnC9gyddBkTF9SXntgKim2ecipjBXpauT9e1SERurMDFmnNqn7ETnK4NwuPe",
  "key24": "2SAZPmEn6SEDzpV9v4TSmcePp4SCQqboiqUsxbfaN14Fcsx7GWBvCHhpgcaNVHUoJT9T25naqznRifFB23JXowa1",
  "key25": "2ZgMcNG2hDY2BWL2VR5ryJ21Zc43wjsAg452Ryk9e9xEWL8ATm3tmM8uPZAetPFvsfKuTHeU9EP65rELaNBgYX7H",
  "key26": "suyvhYefPJTFtidGSsXuTZ5aB2ooJPwFPvPTxzABgvinazHros7YTpktKUqEbidXpz5QRM1wMkPPzSamGZqpxEg",
  "key27": "5BPTk6jh43xsZeBiFuQzAbbWQzAmM6MLDEh5aqtvrEnorWaQ4aiGF8Cfy14ekZTrRLHuwTiBgGhTotZUMAbRbzRe",
  "key28": "GSRPs9pnTdjJzcf1kEgRiJnWTyffBR5j9HUNa2jtUYQHJiZ9SPz46tehuJVeXVAhQK7FLKWh6EsE9mpSQBiDMHn",
  "key29": "5xt2z8K5KKETH9rr8cQhSyToVVZbJnr1EmicBTZpuytMAv8BVNgCNo1kU52E7oTTitpJ97WLMjtJj7yyjzbe3r6r",
  "key30": "2y3go6ddUeTULeWHoFb8V9DPgnrrJaUbh5xE1oWLSyFKrEhwXEaV4tB6DCbuQfxLEpcBYWzbS8oD2a7DmR82Fs4z",
  "key31": "2uyu47bq2ArMFpzwaHS2SeARdoEEsyUTZieKuSHXyu8v46c4QMJw4btyw1cvycUSvqNMHRow5VV6DyMwwZn86hgK",
  "key32": "3NQhJ5biX7ercknQ26DX4hf7fuzo9Hs9KUg1DoZ9xQ6DAjcoECmS63Qaz6aaREuCiFvsYTScmfcTmCa4weFLf4v4",
  "key33": "3NVdTVsfoayzZLQcgAp9aSriGPWLdFYVBGLR3QYTnrBDn2Ae9G6eCnEGTKwmyWLAXui4Hnbie7a5woC24YxbgVtv",
  "key34": "4dfKhHBsK6Vt9jVZgSx4K22q653fjWvxbWzAxf2o9t6fpv4TWARjzDyk4PijxEw5MiTCVzs2ixvMvjcYskDqVnkv",
  "key35": "38E4uFwdykcYzpRzqqhDrFvUKdRuuM68aXJjtDpReBsnSHKc7vUDMz7Zssu8YRNiNKKgw178yfWVDzp6Efox92Th",
  "key36": "4fCkzh8nE9iLmdAEiWkmNdnqeSdXdDXDd5ECXuvHrb9RU6vARNhRGbWaWmVWhvPA3HDNk7PisakNDG5Td5w3fxTA",
  "key37": "4UVJqTtM14dAvQisxZBrYnmsnJ5p7F1FTVPUQu64hBF2NCKGwysbLAXRxKjsU3RLcyhEvw1ii1vdtRWXzjo5hVab"
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
