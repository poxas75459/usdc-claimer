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
    "5Y2JzLhMPq6jvb4oVGKWDfFfEaTMFrux7mv5NEM29Ccr1EBGFREBENto3bxvwgSL9mioQ9GYmfuMoCRMyY5UuYh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59zb3bEFLuEh2o3YB7YKAS6wasMnBMYEJkx5MESr1kgbtkJ7oLiD4Qpz2brW739CBK56YHF4oY4HstKXFxmuS7dd",
  "key1": "4CpTNyPxCfmAQv14n1b9JZZRX4XGJkEYQJ115GCBNApNoFkTPYvY2g3fPWJgmtZWB2pxupsRh8gAdwhi3WRDQH2f",
  "key2": "2GrtwfgnryHGQJdLupfwTS6fhRxddBubWu1BihBgqroyCUwpuzJDSmzwdtSGh7RG72svvwbHsLBVM2vdo1nP4meb",
  "key3": "3sDnPiUg5SreHPW18416YnKyEavRn4YLqUaMFAeDJoCJXBrr9zDLHLf89YRpCksQwjW9aAdoWafZmzeLHjrAPnsr",
  "key4": "4thTpiiLDttHgsBfUDqeriqKdp4XGaEZ8Z5V7CQJVCtnnMXXwA5waJHk4Zt2adQj98zkqboRjgYDuPxsR6dCphmc",
  "key5": "5FugdGxB2QJSrgUZr8R266xRedctSGPVoYH9HyDgGYNHdhKmJpcz6JBaY75B92roWJx4Xax2ajc8YRtAVcSxuJby",
  "key6": "5eULh33E9ys3BX2nb6xkSqR2astD6WR1x6YDzfExtXjitgVEbAVYqSjYcQmC9PS9W2YsHhWTdonYq2VUAeH1xaU7",
  "key7": "3HoSoEoY5mzJkLhsCPqyoPnoQChu7rB6sz11jS45ouShkzTCbgswwEvbMJhoeuqEQisufYJJuH7PpNYbh9mCLfTA",
  "key8": "651fahgkjf1xHmTvxyaD2DnJxVUYTMtB75vn58greZYito9yjHmnGK33afPBuCoRyvmobc3PbkswPuzUhvVRj67Q",
  "key9": "2ej3N8JsvXCismPY9fTtMkUFoTAwRa7LjjA7VYVTQUXNAbY8Nqa9dVvYka4ZfQYijoBXj4e5PhUimq6RkAE1Gbaf",
  "key10": "4SxbkKL73UF3tyUgpeDzLGbG4s8PrwUi6H5V2XZwRNCK651CkjamvQdtw3s9cs8gMCKthzVvneBHrzyMgcRsFCDE",
  "key11": "3CcTeKmvB9b44SjokJkgdwFtfv7CJFjw6fz8cGp7AkALv8gdfb1CVAsgCnNDeb4gEBq46NCuHNBWS4Sv4eJVu7vd",
  "key12": "5LwnMZGgJ9Ak1CwtV2cizY5FxTghtHjkXVNueFp1GeLY6p2cMvT5jt3Vzcr586rUTQhXG62NLiRn7hzoTrGBB32A",
  "key13": "5DKqnni7FDn2cJdifZCKXd2BAvnFR1Q6CNXtkpjEqqRPLbU4sKDb9Ta2HK7eq9KpfhPqWHKWY9XqmM3nvVtAnkyv",
  "key14": "dXF4J9xxUHykjwhVqHrrXD7qv7VVKSjkMHn3uqZ17jndcQDiUK21fKEmbrMvMAzcLEQMoTRhL7gDtrjABzYR5oa",
  "key15": "3SLYxM9p1zHNhuPDfiTEh2sHZWng6xurygqDuwp94nf8hnnpgRvMsUzNRa8iwShE3BYCABAbH9QaKv5stYE5dtnD",
  "key16": "XjsdYoQB4tzH1TMT6arc9Ky6LkPdpXK4ikYJNZ1Z4TKoSC8hanVr4rxUjoB7hw8zrcWfXVFaWR6rBNJ7jjHwehy",
  "key17": "4StEyLGyGynWkyjWNUWaG5Xc491MtxJqef45BburRUFsGfgp5nT5irU3epyfEr3W9oNXv82xAo4AfYxemY4RVBZq",
  "key18": "33SzTHG9qnEGbrqwSBhWdosBxsjGLe5crqvBhBKRrWevkKdTJZ1HSgjuHq7y5aNXGdnRLMfv2pdvvkBcPEJJXaeR",
  "key19": "5ffdPdFRE54HyL2z5Kon1ZhWzVuY82sFjEv5XMRZQ7W13qtT2zzLT4piaMUJC5wwKqpdkTcdYJzpDjXKweStfJvS",
  "key20": "4XvLbEUNzSYcw4DeAtBaKx8WDctsGg8V2B6RVj9AuECQMzYmd51jg7EfCtPmUUJR8342XejV212kzNX7982Zdc9u",
  "key21": "HFVNUu7vAH18DnpQSKEz7EkmVm17LedVByGkhLALYYoZmdwRFdaYrc5B1UvdVK3h5YoJv5VXp95ma9ZgyZoenea",
  "key22": "2iocQ9bYawkSXyn3Zz4LeBab7uyTBEPwNxZSrMiFeyTrt8aQfkt4YFQcv6YpzPE7hPZRt7iqdDvAdWiSDncWZhhj",
  "key23": "5dnora3fqTZ5gGVMhGpfVLLDip7TYWyJJvCKBqd1ccUWJz1b5cLwaVNXsEaXeLR916znbbzMRbWUgwp3VLy3kFoy",
  "key24": "5Q6ucV1MS652vJaaascwPAaNEU9RmTohfbjGcMv5UxQGs4S1HtzBsnpXFPvHnsH6CGvkoXv9bxocbRdgVfs4ejcR",
  "key25": "5bfFZ5C7PAea6gEu5xAA8PJgVFd32VdfKbqsDJ5D4NnW5PMN8mdPH4eWa4NFwsApvrhnnZhywtwXokKsz2cZQT6K",
  "key26": "3LB4eZe54s4BAWTpuzuuJjSQr31HVaGaFViFTUz79miuNgC3fj2PGJQ5S3WBwA62H7w2yUEDVcehYJWFDPFFtgKK",
  "key27": "2uvRMHbBHHLiHmSSKngmk3n7xyuw5BS8rNEQPDnDWUCuZTb6Yvb4ShxFH8KyhXDHXyiFy8YVHdcyDSpPJ2EdCtt3",
  "key28": "H9dK3yQfmcPyc3MVWtPvk6UyN8PLEPw8a9CRcrKZEfHVtJMPG2CMfHxKUWNJvgfPf6yVm3AdmSCWXxvo4HQ6BB4",
  "key29": "626kMrYihTWbyhdtiRPECg3ASQAfcr1YUYNNMf3CYbxFPdnxKypjjf9AVsJ8ZqrfgtihafJZJWa1Exv6ecS2kvPX",
  "key30": "5PSutgmswnET2WNdGFAZ4atZayagZFuPtiK1a5HeagsdwdRyrm6ZE4Y6VCVR45d3Hcoes9J1zC4AJ3pNyyhdchBk",
  "key31": "f35G3Wt67ys32eF8BGgwjU6f6HxobEswkz7iuk21urboJy6bX9UiikzWP3Hes8M6id5WGiJsij568gHzRSxxG2i",
  "key32": "5BWwULiX8PzkGd8EqpH75ypvWWg4Ms6SXHB4JdKkBppL1FNbnuP2HV1knxh4jCDjqbvzepgqhQZram9nPvecGiCn",
  "key33": "2VVQNYYLGRGFLAjwc4ATwzphgkbV39dj7uPehexQJwVsJcfbcqH7jssP6EkRC2fPpQoqsVYo2AoJA8GuKya6Hxhx",
  "key34": "B1bDD23HQjgNv6ZGFTF8bRpQa38He24vVJdKvgxpS5s9k3YL9XRJRRo2zyN83cyFqKsQS6kG6Dsd3trFWk7STKx",
  "key35": "4jnuwsTcU1bVm3t8BBisDDJ2QqYCA4tNdWy7ZdKqnikgNp3YsRTLpPKcr7CR2NpZD8HfMW41WnGJ3goErazYGsnY",
  "key36": "3QznasBbQugFNcXJoB2ykExNRcKMH3bFpovDg8dmn5jUhndWCfPdk1GWmw5KMq6whEvY48qBc4zVMkZJqLLh8JMm",
  "key37": "2reAgKfeKzYMPaTeoJGgutNevHk89uK8HkK7E36qB7fUxbopodgdCu2EQ5teNXdsjNuWrjbZTND8RUkGXQmiLKFd",
  "key38": "bZL76KsRBDCZTwcaAWrUoL3kTKAEdjtrT5UFS1P2HZA43rHMGDNgbwKKLGS3RmkCoinqXnemcTcTSD7VNeiKPy5",
  "key39": "2KrDKRtYakUhffTDWqTUraFrA7r5s2UuLWShPQdMgogUT53QpQT3GjmrZcG33racPcUf2MC7KcLybt76GvdNKiBc",
  "key40": "Adsws5ynNDeVaoapUYaJWeX3SGnwbA9HEqqGEremEq1JQMCNSDJK1Dq16ga5SvmGbifbrzjwbZSCcvLh8bw2z2E",
  "key41": "S2EBSxySDamv6wNKBAPcr1omHWPzELZpkiqvMSwwhVTgyme5Uhe147oeU1DA8pQCwJh5BBfTW1Ss9Bf6ZHeNLhE",
  "key42": "cr457b9PZmg2NG5y8TRSPSQxtb7S5vhhsVVkrMdPHd1ZT35Zf83nhxSfrfjDpGh7fXQBa5epQF8389LBMyAi8S6"
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
