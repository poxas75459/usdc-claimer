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
    "4myPRjaNjX1VXtxogpDsCkMc1MH2rWP1ehzosnRCfCJMBRy6wDqiF4UWc5qcK8FEKCpYizgQbLf6yx2RQuSkcAKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVssxDVYiv9ZXkMRDe4ru78uPvaKu1oHaEFerLGi4sozNUL2kEyJeboE1NZigZMNoUpPzvmWdxGD9ew7BftFXgk",
  "key1": "5fZjJB2B4xbUT65xT15kzXwtgxZ2nwaSMyeR25p3WKoHGNbvWnyeDTPQt7zwh8jbc1ampgNvHiSuH3oxVxF5qPJ",
  "key2": "3NyxfPUmmCqQDCcBEiVQSiUUbY4HSNbPNFWXdawvqEtdaZVcrXHsYawzEDfvEME8BjCtqMvTiECLmM2w9uUybC39",
  "key3": "211WFngbFNirQnCjJ78tMnWb946qKZSm5sgNs2GEZJxxP6fh5v6zLn4UmqWkB1G8kHYqy9aByc29QM7gbxBL3pJa",
  "key4": "T1RFqvFa6zQkTdiZ9jwVtGnaa96XYURcFy9AE9oBrozF9U9UJ8g9rJEdKM6XS4TcSq6uhsQevViwfvgswUxvtFE",
  "key5": "4ZZa66osPZ8PEiBkyiQexJYq58EjMiE4SG46apNGfCR6upNmfsjP7VVFeMAdXdEAymUk6BkBgaPwhQNLQsjjrgxs",
  "key6": "3TbwYyLwPrP3mpGGRVjtYPEorM8U5hk22w34Hsua9Qo8wMsqGY38uyUQCnwjwtwe3eM6Wgm25m6SFb8QDMPTtfZC",
  "key7": "4KsY1JfNkUVuj6mJkRTJGfmbs2BmR3jK6qafe2JVCFUENW5hPkcwpo9XS6Tsxbwt7EhmT3erZPBzLQJz8PgaLLP4",
  "key8": "3Pq3dULrcSq7Gbvj6urauUBD2huhNP31YLjFRvwQcKbX5reqWvfWVf2S1DTSsVz881gKFVqekqoUgGzLHQbyuMT5",
  "key9": "miwmXtcui3vH4kWzNZRAzK7vSqcY283hrsGRU851ciZbztHFhvDhq2oMiFNPARHENySah7XvXgRj6vFVFFu3LSC",
  "key10": "47DSKZPGBynjnWyFVHqm78C23vz7GCcLcCx8CYGArEycCEBFhYtECWUjZ9XqVpTNXABjUBaW3DYCBy1hPNAtG41x",
  "key11": "4cLsmxUrRdP31F9o29g5PsCUE2vzzNxjoQ5E5224s1mFreHPjAYrCTyHnPhaaUrDiTiFFHWnpYPXHKhANdXEVhNb",
  "key12": "2MZoNXWJ45eMQ6eq63MD9RgJuqoNd19yZBauDhzWUYS5Hsdp6H5KpVyJoTR4thDDn9CPHXzUNLqqZcFjq4XzSn94",
  "key13": "zqVk5u1Tj6tjrw8rmu1UdttHz35ZPDFQgu1SM2dL1t5NFtBZDv2xMcVZtQiAf1jZe8wiAJmW27D68vmUjvZiTAK",
  "key14": "4nBiv9f6E8ojKpPbE9FJbeqGrBvk651CzkpCNYvL1oX6mFEsxBSUh8dyVz1xqK6biqfjffbxzJ5Z4xUQ87qfJ71j",
  "key15": "fZS8hTo6RnyKWEPDN9B3TwaTwEwYevZxpcN2H6epvRggqMn798RPMXaEPVoRDLYTQkzraC4sbm1zpHDyGkv7BFA",
  "key16": "BgUvWNntUPTQin6Cv9v8Dyi2dxpnNC25Km4s8DdJ7DuF5MJPa7cPHK13Zu84KJYXnDzT5oPogqsM8xqcbFbj938",
  "key17": "3yB6GB2ynMhx2iUhpR9BBQpEfHsEdgohafzJQz1nUZXUt1sByUzbj4eNMXqatzapaV9mEJXdiz3fuT4JyG1EyVj3",
  "key18": "n5RsQSCLzSiUPDarRdwrKiMetsGajYuVA5Ev1xvjcZ5CHnZTAVoSYqRvhWnwPCFP5GZj5BBBySfSHLbCjWBWfnB",
  "key19": "2o7cdjUBBEiRoqYPdBMkfFugwUuciCQi2iocBbTuKoA6v6z4stRNhKR9kbBo4J3t5NgmHpA6faH86pYhMUjKfEBt",
  "key20": "2BZrB4CLv64KfMVgoRpiZcakfPuD1p27fyVpDKGUmAKZzT8keNJYivwYZS784QvKhjjx5CcVJqZUfEQLXK56KQf6",
  "key21": "Xdn2Xm1NyyTTsdJMv6XqeFAvs4BQecaE3mMinSnQJKdyEtaBcVGXx9uW6torS24Me29cMypUnPeBH2LopagLBrt",
  "key22": "ZLuRmYLQLVCVUEqERebEUhrc8PUwgk91ktEVY2cA5KyxgA1cEv1pjVny4JJg1PSp8r13kcdxt6C5eQe9ZSCAPUk",
  "key23": "tS4DfoybwfhjQ5qmg5rAqdtNvbyyaeGy7VyhsXcDF17d3r1u9dFHdkD5s45gFaah25XQohVG8raZwfLUZGLR9Dy",
  "key24": "3n73rSnaNn7co6Zia1DXLiGoHrjD1yd7x1SzSr9gupQncUb8Av4VCbpX5wdmxL1wqLpcuPg9w3JMq8iVAHArjKeJ",
  "key25": "bEtGGHfY8CChuMGrY5sQ2N4zh3nerpFZ2PGdMM1QJYy9dcuTpj8srjr5JLC8aWSjmTF48diEW4YgRXPdng6YqSK",
  "key26": "4DABwCvSt7yQGp1ysuBGuZdKJa5NUmNGNzojK8HC1wufsndKiSFKdrpXaqYsUHDA1h86n3JqDc3zTzrSVMq5Tc3v",
  "key27": "4BFM3Ea6RELdrZ13j1qHgExCdYRq7LrPrTGLYuayYhDiGdz7m8Cnd3iEL8f85VXnvnhbYHGQwyQV3yJFjBa1eCA9",
  "key28": "9YqxyC4QghSnTQ5eCwpvBdHPHVhR2Hp3qcmoMKtosuUqM1n8nG8AUpmRsAEKvwZDNYpzYXBGAdZqtNYtU118Wyn",
  "key29": "3CT6eTwJomBdEHEvgUHhg1wPAvB6m3rgpnN3k1m4wTVJaW41q6GPnSwrqttAhuX4hRPeQM7XLkPSmsc99xvsaUXw",
  "key30": "358b6TxqKa9wa45npnM8nrBjdcAYceVGbPJSU3tAX9LWNGiFWXrFhSvxPYfYw7Uni5K4HtL8F3bb9uKSo64jSrTr",
  "key31": "3VtuHuRvCmGd1E2SAhzLftwKQqAa9sBTsFw2mAHa68T7jWLYs2KradW7YFHctcN18t86JN2zX77kasBcwGdr23FA",
  "key32": "3iKZ3PMozt7R8Ls6ujZAigLWDd9CzdjPMUWWPANcWktfG9pERbB8ABEQfCfJSpVRgWjkdUBEKFuEFfXZMfzREmfU",
  "key33": "5bLxgyEX4xH8nGGCgvzPoBfKZe9rkxgQx35R6Sm5nULTgELDvgeSv3Zk9i5ZxK3VviKSiWjDaARwSgfRWREuNijm",
  "key34": "VQAEsQpCmMyVC13EpE3LaNBS54iNchHWjCiwJrMb1EDTNJqbVErMQfKDKcLp5KRcHRweoyUYobC2FnqgufNhV1Q",
  "key35": "5a28F3vvJtxRHPgn3mNKCeEyVWDmPAfSL4Aj8UwtMF1YTdP2jRf7rVXMJVKnQua3kqTuXPL8bUPSbs6P3CKdirew",
  "key36": "nP2Wd2qKR4saZKsiznszFoH7mmXEKyasRNx4QgACchULu7EuvANwXd161a5cFEC1RCKvUWZ9ea8neUTaUpTiY5c",
  "key37": "3R9WoukDsRfyKL1Zybf7JaY7hvdspsvwqw4zjU4CjZoGK9TU94qm6Kvr4oF5tmnA1HyEHduPXBB1RLeoz6Y7cvhB"
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
