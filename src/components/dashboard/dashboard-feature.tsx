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
    "2b2CJ6ETdy3ChLJsLXPDZQ1fA4SPMDfBxCU5UpKLVnc6wQyYKPeSX7FodWdc7ysqTU5aaceQtnyXbHzcfo69rkX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YDxTB2iazVBJSeWqtZ5EY7Qo8ZHnN5gAwHY41ZHNuVdYjwFpiRvQXuaiZb6Wfeg9g62LG2bYcT8B7YTakGYBaTK",
  "key1": "4kpKgU5pfcu96L754RGdyNNg3qgbEcx5T42mBEchszFz4qzXRpZfZWKAXQwXk2bfELQ4752pP4tH77U4T7AM2u8i",
  "key2": "hkiH6AzSbHqvCus6xGrRjeRZDffTjfokiJ5eEzPoQeAcM2N2gZb4jdFcctrVXbers6em8tBfihePfkbVx1gj8oJ",
  "key3": "5CcZs731ikRzShHs2krfscatvtYStrR8EdYq1TkiN93ahVSqfcq2QoDfPmuDeSVYHnQdf7q9SqwcFjjKYL7VDeEJ",
  "key4": "46EHE7tuqa6MvB4tyvBpMM4kFLrtWCmZKpWmbZg2DSEVKYtQiMfRDrHHP9x4R1ZG32mf2HwdhKwsZX8c5FFbHbFC",
  "key5": "3uFY3CjojTxexgj7yTqrtrwb8DNMtRjyXRjNYJkYy54kPQvoLt2wMkfXnjCNXrHmWCJTzH9WsG4pu5FiWTc6PvUH",
  "key6": "36Phb2nbVunMyv7MvwezSZJvxmj9zfXrfPPenmEUcWMmymXyZCtoh6YLD6dY1ppsMr3HKdKiZexJWNDmrd7xJ9fB",
  "key7": "CTeGDf3eoPjQWSKQQ99ktXpWvnhW1avjeAziTMCeCTGJF2JqNovRXHEUmHZFmXBu33uobJ2LFyG3xD84Hmgg5gW",
  "key8": "5uHpPoRaGvyoWbU1Y8tEnevBso3x5G6x9cgMJGBxGjdvtNLeK312narnvcSiNHmoBiGhkc2Q6j92MKnLQgGApi6X",
  "key9": "4Y3gvonkc5oAVxMpqgzAXcvt91dKTU4LDZL8khyjB64BBd92W8UuVtiEhr3wjNixGx28HvaG9Mcy8ydn1HaEDKJv",
  "key10": "4RaDnsgVoKitdCowNKA2pQGapMiQABQLMr5AhbmvCEuHdkRMZs1fn2QVgUKVxiWisxVT3FMzMm8UVUF8EkhS3xEm",
  "key11": "27GsaaLUfiH9C6D1Ltxosp4fdmh7fLvNjEVMU1KnzSFMHYS7RZZitLLPtXibJbNBYqozeNTecvdF9LDWD2DfSZw6",
  "key12": "2LErsBYX4hiodY8Mu5DCVVdnNzGTvnTSc7myFG8VMMR59zxV5TSQ4jhCGZrZxTxG5tMWWjgvW69M6h5b3gbmYEpV",
  "key13": "3GJb8mf9LzDoXjDgLni9eyqrBBos7u499ZxRcxQ5JiBFfETiiMKzxepudWdULqFmQV1dp5v4ooZucHj1aBqYMGfv",
  "key14": "62Awv7MVw9mkK8GQFwn87iFPwWYmS2vZ9kwYfa2y5p4MtpLXfkkbcK7d2gLWceXYBmMKNwx8K7Ehdg2HBLv4XM3D",
  "key15": "33nogYQvxXsxYosumzykPxQRXKVWZEL7mGi2CQCdNPah63E551zDkWhMotorKFv3gH9pQbPmkL4Ec3ugpQhp6v4s",
  "key16": "4CVVrG1a3n2LURjmjsdrRmAaTosjBeGcei84Gowph8RN9ag7RFhc5rSnbjea3Sg8PbQQXZUbJwAEws4V91jgdsHp",
  "key17": "4hhhLpJEeA85eBcNNCkc19RrhLWei3DWz4sJ7hahSyYddEz36ZHLkARtrHkGcFvmiNaVz4qjqRE1eNT94VXwcPNu",
  "key18": "39epQ8cUsTYXuC6Ro6JxLsK5nq1Wwdnk1LkFqgBnUS53j1JgbARxtrATjzthCoafBLK1FvzyKE5UoCKS7pbM8xzs",
  "key19": "Xki7Dgy9oxjgU6pEnqK7JwxfBn2BfRTT7YNzqBELZtVzCSkhkbWVzKcSJECySjzrdUP8YWHf8QRh3C8DAHLorgG",
  "key20": "59pHG5PPZdPdSjuqLm6jVrA4qnBj1GSMj7rFdBPg44NXQBpkx9C5fz5nAzQWWhDQ9HKkWCHfHKZDtdgKGGrjNt8j",
  "key21": "62Kd3YwyUEP1WSjgBvSkjTvgxAerLwcbgrLJchQ9SFJ7yka7Ep4BYiTEycPmsY1GPehKbbhzifHeji3UaUtm2YFb",
  "key22": "hntufUPEYzVCKzy6Wwgk6GeDfyZmXATscKeQnj7UNuh1RfY5xZHhRAfhdNb4jALq7r5u8x2t2UwwAGPvQTezj5V",
  "key23": "2AQkyFye65Drsc9iaK6QkwDWYYfy6n8b5sRuaV2Ke2DFxqb4Q9xoJFvufP7nePCSoeRDknT34JoEZCh3idxPWuWN",
  "key24": "2LgPZHfHuKcBvSep8ntscy2up2pgB69xZqP3AiEUNy6sfH3ZqthkRubTC2RMebz9udbFsa7ZhQXeKgfSw2QGh4ZS",
  "key25": "43TtH1Lsa7mVxza1sNiKJtraErRtXiujad8LXnUzKF8CP5vJuZHfFfvKnnqu2XsdeStjbrRWQk8grbLjEGVDUjKx",
  "key26": "4xNEggkwYxcjcNKfHTtBUMFVxTjBAyHGPKmsCKgcbw9S7WmF9pk5sdZVCoxbBA3himfmGwSYbeFKHHMhi1deL1wq",
  "key27": "4WQ2K9Nkj47soZUjvDPGAYBptqkNUpqWvHuk29NAsA58i5nf7qrQRdghUw5LM7Pz3gPjrjD1CPzU36ReYbdJudkk",
  "key28": "2oc5ZTk47RWezxTecgrX7ZEmqhvr7Yss4arSaEad5m4sQxj595SHEFMs9KMkvD5FiMsigLBjoyz2svxrNJDhNjkX",
  "key29": "5CyWx9iYL4BQjcqB2bc6vug7FYeE8quLAKBFbiRxboXcF5yETPN3TcVBA8S6wruk77Gixh5K8W5cr87TeBJs6W5T",
  "key30": "5agDcLJKpbvWqgDF8mtWtvm1Y5s5uonWqSnTLQn6Ag4QSJa5T7kcWnJAqHQxEWxcEtwQFn2qSUj1ze1ACpjnsp2i",
  "key31": "t16Zv7ZPK3Ded9ntRCAgabiHvkgdXkbwdmFLNAxvUs2DE3PgZyqmuKrxaAWTTACkBBi1GWHu1Zt4gS5S7niBZgp",
  "key32": "o1Z3GfyJSzzunm7F9aLNKtyB2s1U7V9bUsRVaxxHa94iUBBwQDdFMRQxuL7fQ4eWpwfMR93hD2nykrtXheSsCUU",
  "key33": "57s7X8aDnC5TqMyukjrckahDertDfdG2Q2yQwHGNwy6NcgdnySBVYHKLM2cFFcZrb9TWDwET4j1KBuckb11uC1pt",
  "key34": "AnZZNFPu73V4YQjSuZV712AGp8srSosYvJqL7gVAxGAeKKjNApToobPPfdCuPDLVvKb4f3qr7adn2ufEDyYG75j",
  "key35": "2M5o2yMFZ7kPcGhfJbh6CF7jXdGCPy32hgfgmx7ubW2RksJ1siEvXDCuGvEuBWmczdrn5nAygXcxLkcpgkcWA64k",
  "key36": "2fH97gb3kpYgiLUMdJUPk2agWJeS2aCzusfs6fUiH3iCnTsboYsDMnRNUW8PjPVutd1xLddH1az4cxyjZ1apQWyd",
  "key37": "3JcRPv7jhvKoPydXaA7sHHqbrYiMwx48QqgZAeJGm9tub6U68SRHWuVaeBQPxYea9sA8Kd2JNqJ6cpPEv8eLUtUu",
  "key38": "XDFKpAub2TqPXmxcpL49mVJsJM6gWv1CsyTPCUNsP71vKvjZEnFHGPMs1KynesGh3YT1WJ2M8p3MhRoTwXKeix8",
  "key39": "3ktDWJkCxGFaCkzWKYbFkvnx6KRrzBkJ5NsEBrUZMw2nXE7t1nDKrCNLEZMCvJ8mLPg3bJ3Enwyc7cqEFKrLtgxH",
  "key40": "5PbJc6dSBoaZiRDuPqYwsYTdyNgKmccJo9CHLMpCNT8dA6KDnzasvPgqFk644ZCqbRFAooMazcafGEeKGzFBEdCL",
  "key41": "52sMU6275hdcR7X1N3Z158y6R96iregKQ68Afarv7wddC1Efwx32GzAzsJpWieb1GUDr4Kc1ehhdhebWZyW2ZMnu",
  "key42": "2CtpsVqNpp8TMvVPwmQvwTLmdu8x4QjTG2DWTpdUnHGELYk97F8CTiivZ4w9FzusAqnH19khL9UzDJX8arKi8ryw",
  "key43": "29aWpdf9oi8deEGVRgZzoxvHmzLZ3aqKhMKFqCm9EBnwKouTNEjbjKuqho6oAwgSjr8M7ZHFNGVjUQybYBtGcwa7",
  "key44": "4PFB21kjrpoKi3shdbosJ1GKzziJs8DZs1UH5zZv8LQrzLzPz2o8q36g61Af32FhbYZh3LmESZhd22BF7uhhfbMj",
  "key45": "39dFhq8kEhAYXEpSe8mNyd6h45iPDDx3WtTnTbQLSp5gEBZFgbfc5A7yqnxxn2f557Qh2WTuoy7Ckjo4bsmmHGEu",
  "key46": "4MC1H9tSTizsGvdE5BCMmLSSRaTChtzEkjqtUUijVE5rJ5AF8NtHegLoMFu4FBJpyYxSLjhdC6hggjku7izFb5Nt",
  "key47": "3Dz64Uge8joXqBzxHGHStdv6BxhF8SaAMn8zXNaMa7GwCm5yDfzFwoeN7fZ1bkmaBCZahXpojrgZV84adY9DZQhm",
  "key48": "2tM3rH14Qk4s46JR87DPbA8gQ78okMuFT7TWqwpWxDmivp89qFYGXR6NLrMDPvzeBfNzWrpRA4PqkXAf3GUCTfku",
  "key49": "2rUAv9xhESiaE7qrnnLL1WJoQFe7AEW1qacD1GYrnZ2TydnNmFaJsYMNx4CAnVVG9Tyxe27DhfC9xsQ1ugdSJ7ur"
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
