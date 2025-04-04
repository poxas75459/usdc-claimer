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
    "5mwr9xRy1pEXdNM4z6HkkV4zjZCRTgMMtaJALMxh6oxbxsWKoqUByxyDxgQT4o6vtvDwrTGmLfUZdUhCs9H98Bjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tUfsPqaNvNKdpUQtPBtiR82dq4vwVaqYNWfi2PhMcF6W4dBvSNwxMbinbCTjk6Uzv1MGU9P39Eryi1EhmcFpAQC",
  "key1": "24uDa1vo1qxNstN6TGEs4EpFuEoMC63XzAm6fm4PsKzsWHv1P9e5QdtB1PcCCzHXrZEmGEjDTFr5rdzcoYwKtjqe",
  "key2": "44w3Dusa6UXzCkdYQVkUmepM35WEmEfJb43eJuGSRuLQWVApTPAywL8tcNYYvKZTNfTwboPzddRA9FXH6ELzMwqS",
  "key3": "2vmPHnqaVwLHPm6BYQ5LdVLRMoQ8ng76FwGGpV7Y3JR1idjMiaQGQr5Efp8UBoaRteGcxgL3yYSYwjbsYYuWsbLS",
  "key4": "5hwCVy2r4d27QcDtb4B1NJnyF7vBmNZ86ZBzY6aYLfVj7GHtbj2xkReEGbRa9E6ZUyRx8d47r45fK93DXpQ6F5d6",
  "key5": "TFattAtdK3hccbS5rZuaRo2wLF9K5V31Vfbk2jbVxMVnBPruWCJEBksHBgkZ4RgDSZXhMyym3XQb5jurhH3jxv7",
  "key6": "3FUJECMBjwWSprhDRXnbBxqs1jMFxLJDBrrwCePAFPGErZWPYFv2YZbSgHD1BLA2bsfGKoy2aZJydSTwQvs3Rncy",
  "key7": "2zexKCTM4DK7oRbEd5M2AxcXLkUVkzKtfhRmhXX51Rfn1EfBxLFoEHTAonsDoRAzhYuzijGxv2vSdXEj2jiq6vh",
  "key8": "561pqxVCF8Vs2ks4kN3kj6bSzVumn14yTEKxcYFKeZd4ZF54XrgPmwZM4YVsnqjXpHVRtRiDMpcsYriDr9F1MqNX",
  "key9": "3tjBQWaDgb3WhxyzYHcSV5oBrQfL51rWv3pj99mpoM8Ercp3tSASLsr2nVSNn1wRsJLdbJ2562DpzqZWftkfstQm",
  "key10": "4AhzJ2xZ474yhARrUn2WVn2KHrSJ53An3iJ58Jmodh7dBSMiniZXideh6J2pEk8whUqq4JSBT6QomgFwEwLf1mL6",
  "key11": "Znptm6Hph2kAAHBfcytK668sEpfQiXqTxMCSMAc3zrE4LNj7nVJ21Vp1HVUzmdiuyhz6NK3egsptTXLE3xMpytb",
  "key12": "4YVF3Qe3qN9oYEsYXhEdCQUT7wnfHmurL6xRkSftqw3rimCbnQ661RcZFhrDJM4AEkWgkjXgz3f4PcwvHxU3aE5V",
  "key13": "51N1Bh6QG9awDYjScNXAx3DicLtkCG9ktHfchWWcDPHUb42PvPm3eGrqCzqzEUpEqcjBzPUUL6bFFiCQbWRGKor3",
  "key14": "2HVgWcxNRtXMnTAP8nZtkdsY3gmvEoGgGGkgQqLTusJBGVXta66ds3xTEPv4kh4tHhkhU2SqfU57hry1L7x9Pfzu",
  "key15": "2yGH6ZSPkD5vhAMyVhQVMCtDQamgFpMR9kZK5m8n8Te4HGHeRZJuprixKMzZRYCHC4P4Utgh2bFxKicnAn35GnLd",
  "key16": "2YCiLnuLg5jgHeunGDmfetgt318QwC41scL8ELsGSyJPFz5GEdzuDQYJAK1zwQ4TT6hffuiCdXWtB992R4dbBDfT",
  "key17": "MLk9TK8agLWX5fEPi4C5ztUxdW5VtadXbstXJakXcS6xuFq1jEPQ2qqbFoJAohk5QbZG2DxnivvzEofgyp64s3d",
  "key18": "5NJFFMbq9YddYRYUupeo1QydQTr9LFCmUMLxHSHsR9tB2Xd1ff4KZHbvddujEmGuuuAXtdb41qZKf7c48o2iohXU",
  "key19": "2m1P6xSbC5fSkupC76uZtj7evrL7qpNJdmsRtxCLqBa3sg79N7GEWRVvX8njVdCzJtAMDBcFMYFWYDoRTvZ2Ma2P",
  "key20": "3bSfqj3Dzn4iJrQZQ1gcuNm4KMmmUZRPsEj3wgDMQ5zQs8AQKdQBsotPAw3df4vU2ptUwC9LrYcQc7ityrw1Kucw",
  "key21": "daJPbakuPu6WR5R6KQPn5y91y9aQT3yVDHiXBjrhMdn7fDjK4MkK17GH8wbQsEfe5zEsgnpRQnicwyHWJu7uXAm",
  "key22": "47CUC2ay67QJrenAdUwhjaDb9nqK61LMaoTdquPi72ecimryfFPZY912yJP221cmEVZ85Gh2CJgCDPcc6YwqqwmU",
  "key23": "tgHf1P95BFK1tk2mTzRtiuLQVBA6KpqAkGUsb7FiiNpi3ku84nPsSrBNXBHFumBZmJ2CEmJovaH7eUuo4gfHomA",
  "key24": "2RKjXt82s4tRXmZsQeyJB6QLnKvPftGu1ZdtHSPXgHrzyoCPLdi6TkKG3rsvLtZbpqabrBQkU8rN5QP8yitJRbLa",
  "key25": "5PfXWk1HDLB3WmU3yjagBPhRjrjkKVmfKsGoA6jt7tM1rm4bw8sCv46Z1n2B7vajmFfm4uzusAJXur9bkcuShNgq",
  "key26": "4HfPYZV1M3MVz3UnbRxrZwjApRaREcJQELpdqu4RH44eDzw5x5RNzGMxawC4abF35SFRhBbd3CMxBvnCdYYsD91D",
  "key27": "5FusZoNLLDeeuUGCs8ZBYvQNEWRQDBFad6y4gukpXjP2GtW13cipAnedfXBviEHqbKSv6a8dmxVeva2iNnHeq2r7",
  "key28": "2Y7VRh3pvHjZkH1uTwsDX1AGTBy77K4gqzzDS2cG5TtWWFqPQdBEYYf8N1xd8o2ib78RnNQ3x6s6xEkSgyvnWqFJ",
  "key29": "a62q6bR6aiEYcxs7nQ1vT6UjCNSWtuGpPCYCqwdQ5mKrqtrYex1uMcKWonqvvgRscYdqpANeNTVe1FTidFjQZSa",
  "key30": "2egMGnH9AyBp4ht3xh5kavMZyVoUfqwmtzep5Zkp58vakNRwpTe26iYGdQV47wNbs1fb6amukLZWn1Sa2CeKTbhL",
  "key31": "2VCsYzYQwzgub4Zv6z6GFKwSaZwGaVgFk5th3Rpyvh8cHFdxv2z6Xoix9iJ3RwCyFxEaKi91qnawG5XHSDNDh2Jz",
  "key32": "2TsCrepV3g723gy32o1nC1SUDFKmf9y5gATqn8Vvw1SSpCAkZgsyCLi7pshba8RfczJbpHpEz9tTF38aUNj3h3x6",
  "key33": "3DjADJ9Fy3kN3UQfKMngidD3Sn6D4PdxFW2MbRsP5TyRXQqCbt5aF52KJJCEGpx9apqcBVbb3pPgGbVKu8oCSDgN",
  "key34": "uJr9PMncLD17svXWm4kv37phXf5Yn4HKvZT7B3ELp46Z46MsgKbdYow2oeQq2UQXfcvLZXfsyoU1z36EQxWPeF4",
  "key35": "2iVK6QuVPETuBNJfDDa3LEuxA3TkaqFb1o5GYteQMf8eeBJD8BZJcaeKgr9CSrps6pRN2fkmJaLzXxCSvseN6grN",
  "key36": "5X5wTs3Af4zP6L1RzHSoUaGvrVwCZZWRsprM4c1endoELXiBzZ2DbHENWiskcwxQX6RNhRqsVxUKiEA58zxGDZFH",
  "key37": "3uYTHnXmc1NTxw8iLmPe8AjECjh81a2V1kxBTg22urxdbzAvWbX1eBeiKDGYeFhqE3i4kWhN1cSv6iV7HfKrKnuF",
  "key38": "3SSBkWiBn4ybkLWi9TXQBV7F18YznGZogckGeY6jz3nVw8Upf49Lhe1C1c1JuKQKL13mvdePjbYESEzuvRddzWDU",
  "key39": "54ZhbShVr4eCnbBHQzB4pLM4PjLXsmWKZ2C8NoVot6d1TwsHQD9sXnGCNGy2jN3gk2f3gFJZCghEcpJNy4JeBJoq",
  "key40": "4fQ8Z6vy4Fbh31vsxYvJZRFJHtMps4PvzheR8omHx9CcuPLjHSvjFhG44rKJHvy1GAuRruJvXXAgkCn1jWbTrSHw",
  "key41": "5y2g158Bt4gpFaNFopPzATpxj8dYhMKC7AHvEUpUKk7ta89pAFpnb1mQiWM9QZ3LAnsbGzfyvNBG1BZRsge9mqRq",
  "key42": "32goah6d2DHjHUNXL9tUvj5ybQ5KioKo4Q3gNmNNyCyRpMetTDGtJBJQ6r5r3NGLD1jdUiaxr5ryGQqhixutKwHp"
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
