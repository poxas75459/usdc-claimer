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
    "5y8NGz6Vb1tLbrkyZtQqWCedKmRatRS7FNHmH148KecxR7ikmsFVyG8XYn9uysY2z1EywSUNguF1tp9YG19VvEs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EqJfwjjFXcDy9tadkXnrF3Kjm1BX4TuTwj9qpEX2gvhQ45dahsAzJMvNRf5Awdfvtr9cP5KrciNrxAUf7pMApNN",
  "key1": "2rWH9nu7AacpJdJnS65oaUdcB164pYe4UorV7Eh8m6JRwmwhNK3ofQkmbVMN2Ut3HAKdALm38qrzDPXzsnENEAJL",
  "key2": "4HTKFwPJHGaP3uPiz6X2hpaSJR65vSmMkbuqs7dYgwSB8EzfEHGuf4frJL4gLceSNvui9qFfP38DYtuREGzqKTKm",
  "key3": "4ZKse8JDZEAHGUeJNq6Ja2LAcc6dtdZCQ8PYrUx5WuPbevZY4ZLtbcPRV7MPkpYgsCjhoYmabvMDfHyoGUknNpXC",
  "key4": "2y2gWc3ex5CkbAkLPKRQCpdni5zSZPjVGeXGHYinapQWAiwjNnfwdkYkD6j8W6zLVM2WR1dq3iErCbSj2zSPuzBe",
  "key5": "5B7ZrVEtU36i1AQVHyMppUP9sTAyu1aZkJqyhazm83tQbsy4mp1yT1XNUpq6ZgF2La3o5xL6PEdUX7BcnhC3qSvd",
  "key6": "4FpsDh2YjrN7RXbk5JxRgJfvcXZdUZrmdqA8a1KymEAMV23YcterdA1v1EWoEKF1WDFuBacWivmkdPAgRsF8W3ZR",
  "key7": "2YBCfs4xw8oXcR8G6DTKzdFsntx8gNqu3e5jYvHAjzdpLDUUQgj7smYdSexvX9HhDf6gDb53VxifLnVd7Ua3u3AL",
  "key8": "wsjyUFNsH1vik31frU1eFAEir5n6wNPyC35DXMqd2RNFULhiwiefUReWKLDE5FDN8Z53H8gkdH3nPbVZZ9WnWFC",
  "key9": "2RvbnQWGHmQLFQFstzKqBq18Yekp1Sk8J1Zk5jyvSHaNh7RnJScuP9yB4vFvbGgrhuJvS14J9tfhWy8mnvT88SnJ",
  "key10": "63bYhEQvkEBzunDc5JLb1vSoHvuVcojE2NPHWDGXNrM36Cd7DAr42gfRHPa64GvooqgztmZ3UDmmBEjh5ebGcXHa",
  "key11": "5Ku2jZ8yGsjawfKCLdS4aGfjV93g2y9mvzz2xf2Lz19HWjNGDPqCLyMwGiRDcR4bc8Cng9qDz49yRrfqWWWDmiQn",
  "key12": "pwY5AjoGdwwmQ6395WnyPj3BsRWMsWVtR4QPeYzeznovYoU6qb87XbkXhUJZ3WbdnMScjxNxAefTZk1HUYh3M1v",
  "key13": "5vTWYdL5i28zC69TbB8rHkEZUjn8gtKZvFBA1AEXDcsCSdd8mPZQ2TWNrVKimNEoensvw4BkEHy7X9hcA7srSFz1",
  "key14": "3DttdomzNwNmFeRCRzr1jyU8baXipWNvcA1kUUMi6hx97aKpioophAnUv8VEZskcKNNCfATDH6W2e4qpD9vJg9dB",
  "key15": "2PZPhfxevfeXx6JKn9JFW6kAcXsgKapZmDXf1cPGMxAGZgcTXhDwXCW8W6kSkCn6xxAt964CdyeWRUrD1UomdpNN",
  "key16": "2pCtp9ocAsFP7f5rddBKkfRRgEVb1Y3HHCfmDHSmQpXRRQUUP9q4DBv55CbxPLuiGpFBFbgGcuQFjvQRNqeTT4UK",
  "key17": "5M1z3S8dbkWf373we1Pstjm37C9Qso1hTEpAdUHRNNpmn2LnqGueUNUyz1YkY1f62rwm5dbwbEMN9ADgutHgHqWU",
  "key18": "3hJ99gBc64EpUPMySBzw9HQY4wq38s5s1XHAFCRQc2es8nBkUV5r6ZS2E1b9LV9K1TMTYHnkQ7m64z3eUFWEkxGK",
  "key19": "3hNuTCN6Jp22AMtQaoYmW6kWJuAZFnqr4xy1VLY8xFeqG72V84MC8JzMSiEpJiKDHV9ijPyAWpLi8BQBqx4cbD2v",
  "key20": "sdvhDMEuhKhQBDTwKwtduRAM8XgN5pWQDjkjsueGY3tNHq3yBS2VTwQpZaRxyGpCGZ1bxefpc3Tov8w5yVDtqTJ",
  "key21": "4f6bY31isP7CJ8JGWFDh9FW4y5pRp3JLMZwBsZExqmpcrnHziaMvwCoFgTFJC2fvfT5e4hc9WxNxN6ynjciy4UKM",
  "key22": "3XojNCpLxBsURd3pPG28t7yNGzBjs3gtW6iHbmJkv5MsHq1ySeEANvtnMHESJfZJDpVb1gxcaNgzWfHPxwPUoa2E",
  "key23": "5FdjUNuhbvkUPHCfE5Z9kafSjBU2oLcmzBGp7BNqCQ3rK451cpmtLaC1NTAJnV8ZRhLCqx1PVgMW1hRz8nu4rpQ8",
  "key24": "3uq7yyrsg12AnCcWCwMxvPWqA8yfcmhUJtJPdgq23QRGaWg3EjFWFAAtrDXyd69cNtxRNpj9p9BJmX4grkxhdXYG",
  "key25": "4RmhwYzJzGyRBd4ojQ3Ss7HSVKeRLHv5HonDbd3w4YwHoBkLNLmGNmuL47KGQKHPVfcs4VbtT5PoikKNEQjmn9Xn",
  "key26": "2dmdmMzxZr2FPsVCqajfy1woLXT4vMA3ArxstTvfDbaSGmfaQuTGZRxW34GpYmT4Y4peoytCZLkSvzijEFfzh5kK",
  "key27": "5Fuy81bnUYG2rrgwitRYQH1pVMTHHtDgw8teNugpyVqfTDNSZ1qXgVh3mUmXciqmhh7HUTzyJLSTRX9haRwiLLuU",
  "key28": "45UVodteASq1MWeJFEjFaoJ5cWds3K5dC7fYQZZCi6HZtpeH3pCno1ugNFgu1pzvrKYpheyT64Znw3HLswckrQAN",
  "key29": "48o8JhzRsE1rUn7D5mMdyfSvzCMYAxLSBrhnsiz9wXVhyUdDpxJ9pZ31m5FigB1xkpARpfdf8x9J1z4P5P34vNdB",
  "key30": "BwqyCjvyss276BitahkAstfXjy6Vmv4sLgQC3HfXpntcVkwWmYtSQhskNH29v6ScLgXpJMkSYULF2c7FHZGSrra",
  "key31": "3Y9svpwqckAeR8vgecyYUYq4Fh5knYxejrn4PqZ8F3sAsdgsUX1vUEeeQK79SV689Sti3NoCPRYsYwK7drCoFrzK",
  "key32": "Au3iktMYy2QtUuKrEchBQn7NdRmoMgg1Pf8MARbxSKQKeXwQCnHqCqg1Jgz3sFU2RjfgSr2C3cT8DkwfcaXsoc8",
  "key33": "5pchcuL69oEVsMMQjWjSMqQSqiq4yBucYPJFpjbULiH8N9hfFEpNvnYNZiZyE9tsahyYh9tYmuKbmuXUif2CRS5k",
  "key34": "GVJQ6zYqSchGLrHwjXGRif883Q5mf4q8huaGHByS2c6Qi43GaZ4NcXPvnqzhTXwEgB91gAZQTkDQSNM9pVqw87v",
  "key35": "5wegrUqh7NvwecYRPHuEzgVVzvdCVmENe3R1xte8JwcDGQfjciXwL8QhdK2pgkHsUVZSGfuDhtop5gfDQ5RiYYcC",
  "key36": "2Em3evrtKx7xAx5hrZrJtrKrMX25C29SJjHok6DZRLhrVYjKrcWH1eUqWaYJyxdd6gjzxyWCLxiWATRrfoktKDxx",
  "key37": "NPSm9Vq7kHCvgW2s1PQbr9Zk8bH8PAiE4gGwEaRP16QZHvZdZ87rzoetfdANA9i26GdQeKDkkMcjGWrz6Sm43PY",
  "key38": "2po5ts2QcPGum4RwwNwmwTgvh2kuuRoubZ9Uj4XuG1mCUij9SEbfgFppr2hQx6x4vGf3VnAjVuNFPWV7wqm1b1cQ",
  "key39": "3cC6YWZeLcTLyzRwXwob8bQFWDyuzfxFpsVDnxx2BDH5o7Ht9KA88qFM79yGnppLphiUaefGWnyKV57ek81fKkqW",
  "key40": "4XX3ftC4SNGgWKCordwz8ZmwEEBfvVcKzpeNPibZoNwknGsyMWJkvRvxgfaSEvEaRjB4KN1gjA6eQ472D4kRFP93",
  "key41": "VCHcQg3fU5c2vNpUgrtMPti7srNfSr7UzBDkCKzZZPVHriEpwxUqdKnEafneN6twNyEzdRjshiWSpnNRNjRfQe4",
  "key42": "cmRJhcgmGTvagPgmNn1zcfpsBfAUsR7s3u8BvKUnNSMFVuYJNpTQAs94h6GHCQQA4dwj4Zti74khGdBFZx1aNjy",
  "key43": "4FDhq8txEeMrAKQ7jNQFt2PGEaweh1D6Bi9w8MXyHetVuPKTU6hDpNGbdCmiarFMSnYDfVyJqesUAVguf135fSHf",
  "key44": "3R1woae7yUJdN8bZbQUv9NszgLJRE3UZCFdFM6nD2YMTUSD2qymnx155iLp1r9CCsAptnC13nhhJgEoPWFW2Y1Ri",
  "key45": "5qTWjMzKY7E3vvjoQ67zE5yKHnKZh9Yy6HNCQAcpRaAW7Rjr1HrcbnaNaHkxMKxuNhY9rtgn9Cy79CueLmgeRhnG",
  "key46": "vtZs8uWxxbo9we4epUN7UnFPZUz8bwR3bn244MZ1xJTmYsJk58af7898RrVrL3MTUTAsg6CHHrZ5YJRges8rnHT",
  "key47": "vXdDZo5Chbu671br5sQai6CtrkyEBWqRZ497TYq5ygrd9XoThioMuv7Ua8awXR73kjzQ7q51wu5HY9z9YBmvYq5"
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
