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
    "uKaX6cjzMJ4jnnHL5u3cQU4taa8ucKGHZ793GhDTfHE7maSFLkhPrT68LhMRA2PwRiXQTcmiBSsmQUUvSw9bgvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zVKYSBfUGc1XxCbv7LBhMUy81i1BLgnXZyxvWHqtmkCcHVrX8rsBGXGb99KMf8Ba5qitH9LsxL5P3rBBV2mcRvo",
  "key1": "5TWEzPEsn9WSb582HhDinp8iMbaAEhnbgNCs4UXPbqgu5toZaVkjAqngt5r4NSB5KDkTwBgFJaUXFLoB5jXKYcRW",
  "key2": "4wH3V4SNAtoqFLRJbNVXCxgrzmESRRJjcCFwQsydArSBCoY55LBmSrbUupHfjkE8jkbu6DN4PCdeUEciihNdkgKG",
  "key3": "5YMs1Rh86XnueYuMLRveMV2QbCKNA1cJYbzfcDVVgLcfqceL6L4aQi2qM9qi5RyFqa2ZDqEtLdjpTFxTLRNQVWZ1",
  "key4": "Yuwax43qovqtjPVJ2JK8Y6sccgVYSDcrAAG2LKQmCym1gb2JN9fwuUfjvf4MK5H4HZn2JxumeFAsgLRhnUZ7H11",
  "key5": "32EaMMY2xCXijLHkdEvy91eiYdEAK3t7iXS6mNR3XqZBL7mzqHXJCAUEc4rb3hxCTSpzLBwKyVgqBfAMQ8izGdHP",
  "key6": "5M2mAXALvffD5ydZBFqyBTxf2WZTVqqLfZTqNzoVabfTcmRtdBaqkfHQCqZxj4Eb5433p69RHrRoDmNz7Uy74iNy",
  "key7": "5B1zB5KLmxca7JtDPfPiZuaJyNYuvgu1JeoQjHj6Ui4pMgdJwVd6XJ36bV6L8r8ApsEquF8TqemBrLRojDqmjf4X",
  "key8": "38mYAriZmwv8Xfe7RwJSoS5WVeGXihs9jxDrhMMaapDUmsSdJZukBNLVmbx2dmq8pVa9F9e42kaVNMMU3sTpaH6C",
  "key9": "2xQjuYejpHddUksuUkUfntzy1nHgJgDMZpMzsa7pUZStL87ytYUmEVdyzgo83Ki59t1MEjJkMZMgsEG7BJrAsSF9",
  "key10": "2v9eSEomGw5fp6Dv3yrNEkoTszp4iTUNKC4d4yrW5VoRsEZwRknRBFronP8HHobut1F9ZMay381KdJVq2BZCPoKV",
  "key11": "2sAntg2nmCmX7kDfCdTwtyudLwqU2CBRMG2xRo4f9cNbVGAhUCox4YMhSNDf244b7RvQNZTs6VF82iWggSF8xWEh",
  "key12": "455PT4HkhAzEsXPEtbtcV5YqrpyPtkbFkxE98ioUjTXyQwqbMKwYb8bm9xbYCMW7CuwtuJCuXwchW52i2uGvKaUT",
  "key13": "4LjqZJCGCapDFJZ99ZM1fwWxxtZzMfkaYBU5Tev78aMa1L1CDxTU3DDXvRMBhchth9LZ5iU1G9BMZP2cc22Y2j1P",
  "key14": "4kRWCtfH86vV5nWfXyzini2KeWsRiBkyXasjBgHocr7u9y7XUMQcUyzoS2Xrw346y725jRiXu6SMnY4qK5rbNQvi",
  "key15": "2VohQaUxSrfUDWEffiokEkA5DzV5MqG5mPVvvByYdasmnZ1GTKn63BoELzKAmDrSYkbxFaphksUexqfkoM6SPGcs",
  "key16": "2gkjTudR1WrYxEusMNLcxLKeo65uFLdcL6JaAQxZMZMsaEb99s2eDDJqhyzbJj2R8yLfxVr4cfaEmgs6dszQmJS5",
  "key17": "3HjAnsXLotN9gQZYaZy2d3eKACgNGWcbNDbjpcJwzV2wgNXMbAgqeeZHkovF31RKbXEP1vyxwFqirMbii9jgvhBV",
  "key18": "5GoEPpp4GzXVZfTCEU5gG78tThZxKLPaWjZWFJCBzGvhBAyejkJQGi1rktoUqvHi9A6ciQ4oePjRGFM3fLu2G8mf",
  "key19": "sLQDd9mbe7bjT3o9sQCdJXzrst1kp7sxB4bpwxTdnsovNJA2AZFsJtCk4NvsfW9SG1L2Leqz1dL9h6eDUQHFAij",
  "key20": "65paMMpD3tSBrGsHYrJqpqjR2AojxtMTe99nT8BAmX3hLqE76uwfRLQ6pQKDEwmnprwMttCuyRTLP1CPyVMuFXVa",
  "key21": "3axj61m332nDrFxHTL2q1Cw9Mi5JiQBS4FnbrUFuekoxkRMNnMwrDarVxggi8bQdoHAykgo8DBaqHEqubzSnEiGp",
  "key22": "3XEzs5PE67y3Yg6coFR7nrmYKvya2W5d211qWs7cvBcAt5zYn91zz3yRQZ73Z8dNjH2YBXpd1VggcMPhQZ5JCvAW",
  "key23": "24hiBv5VrqiqBF4RMChL22uK91DoRYP3XsoN4Yh9NyN8eLDVs4HJjfh75BNyL3LRs7ghxQXFX7of1PQ1a7EQ22ye",
  "key24": "FDFwkvznEsfeEjy1M5uZ4TSCeMczGmZPQ4J7icLEbkLqYZVc2jyfGoQqHryFTt9qcvJ5csAkZTR7n2LnDLknWCG",
  "key25": "caMKnHY6YeDpk3NJRp35g5DVtGZ3rxAhRmaUQyEow9P9qxBfCPXJ1xFdutFb68Dw9iyGKar9J3wsaf5bzhXk3Fr",
  "key26": "3V38qKz9BbcuYzfeayDWdQvLubYC1TAe5v6Wb8ZCpd8YMYNbgMBDoHmhwbMwVmSSzJHrMyutVNJz3P4jmz7U95oN",
  "key27": "5Mu5HPCLi2xUFd2t7DPqYE1hbN9GE6Eq97EmZxuWJweh8E2BbFUsfVFnVn5iBfkYJBbxn4k627vW8hU6LoX399yg",
  "key28": "3raCZsGXJt1NJfRpsGsgZsrvCSCxkSkB8NrN4D1FYD6JREVbXAzJ44WnaQawxMu9tN5UkAkjQ9U4H6mrvRZguczS",
  "key29": "5VVS3zDzpHPeGf2EtwGDf5kVRpafBcsd1ir19gsAJDk6LJkSRpJiZVezYtUhqrjaNSdPLQDPoNxHskACzpgYadpJ",
  "key30": "57kmbQuYiQsTZGJKhzD7X8mLTRkfoQt6RAqsVpiuZLVPtcGR83T1V5wxEyFuJZvdJ2nVR9pmSyJDYmgh91VgaaQN",
  "key31": "23B1UahLUcJCjKWFSuKa42yYkdHEueFbrtZEbex66UvkqpfpPkkpqHGMiY292qffn23A3Yun61xhHgaMPDZBW6Ki",
  "key32": "5AW64VuNL1HW28AyburZMzkuitaUhPt95K63KN38ZF4dsde2re6Ey4nsFWoF8onGiySF3LyE5x8yVtMsF3tm5NpQ",
  "key33": "4z5v2NP8WPHrngXCbmYopsPp9cPvqLF31JrXsKNmKdfDqKsCY2sKgj41DeKNnRZA8XchWnfGrLvJo9oB3YPwLovx",
  "key34": "5o2zNxjxQoBhBWweghkRAKtfJibsUGXK1oRbAZTrA6a8EyaNkYRcLnTFsiPHLBKE8x5fkvjhGDKgksNiRaKhkqQc",
  "key35": "43M5WudX8csZjuVBoppR6BjTTCbZcGqJUdLHtGffEhWDmryhRizzErRDQAkEJG6tdWnv5g3A8caDmr7qpf3HHeL1",
  "key36": "dLorrpyoHZaBWbeWKBFrzzYkTjwkrDizrEiA3k94QUD8oCkHgQTokeKuKJwGBCqgAEJChH9XxTm4HHJZux35RDE",
  "key37": "23QFdwYpCYRUJLLsFrf976YLXhqiV4YqYy1Q1q7MK1Ycq94dGYFf4z8W8rgyKKfGPtzmivkf8JZffyugtCrDVsvK",
  "key38": "5TF2vtmr1Yu2jXk6VPW5G6zWv39ABUpw2bibisFvzw4oBZuJvT8gEVraVDqCjymCnZxmmWTrXh4ZxPLniCeD6Dy5",
  "key39": "2oxybec3C73ghycttkyrw9Wq8QrBHhySsSAgmwZgGXqmJQnCKq5kvArwRHVsy2pUw3JtPj15anakqG2f649FTaj8",
  "key40": "4ziV6Skmb6peFBH8vmL2G3Nw7Nnw3YkxixwXvMGu4H1FDsFfCvnPKveuviy2WCZuX7pJyAMntBq2d7gVCoHBeZX2",
  "key41": "3vwfrDfqZMvRtFW45jZDxsC7FrCas1jzGfvX1cg8rLeign1d11YSgye2MG3dTjUoqt2ni9gYcKX2Z5zs6HyGiyXU",
  "key42": "4UcD9y9RRnHKAtbbLjEawuxhPPDwoDt9ZZUfQTVFEwH9zVp5mwuFKpbMfVoF6f4wZ6Esakr2jDD4v3MgZ8bBpxJP",
  "key43": "UFJ2TU1twz2e22RFfdn818uiqCWZpq9vDoEnLBrbrTjcX6Y19opxw5yqFimc635YaLqn7oSb3VpQyYezsz6xge8",
  "key44": "k7nrYnhWvihFn7onmuDRRcsgouob3m9eMFdmQ9RhF6Ho4ahyJqt5W479uSancnE8yQaYL3cazsFXBe8RQtHvoZU",
  "key45": "5BjHxKgoD61mLPKGXLuXqVZd3HsYzwtrxZ3i4hMuHdUDxzqMyYiJQAQgARYojHKFFJM1s9Yqa6MA5bN7wnSaxEAj",
  "key46": "25943zDK9pAHhbe8eCpAcbeHgQcKRdHmYYVwUYN4RnWfqMmdCwhXozVavmGBRBLt1bZzRabkjDRBz1sFCGFqNyKF",
  "key47": "5zmAqHWfjD613Kb1Ltd21wAPNo5YyXBnPThx6SzLVE1wZDMDN8GhBNEnL17giopcgMC2M1Q8Bj3SPQKB6Ly8MMXe",
  "key48": "3AxNDLG7f11QNjiRRoF3D8WktWuxTaGpHkwG8h5KeeVXjpKDTN94k4ApHr8mh4DheGvzrMVi5msrdvxaCXxBGWYa",
  "key49": "5DHKRgpWRPdUAbjb4VbBAjRBNej5p3CK6XTUkFKUnWVP3dcXLEbaAovaoqkzxjrSGebWSzkRWTjPNcj95e5oxA6C"
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
