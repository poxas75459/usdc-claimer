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
    "5ydNjEr5esPfJu5E22KAHoHzRXtBsYdwGTDnSSF8wQUs1xuWHBeafRjQWMHTQX8JaH5S9m3JCLUeEZDVDVNsAGKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u3J4YjGG2GjZBdpBDMVnFkqxe3WgbaXunM4pQHbxrWzZxoxZekuFGDVxcM73sVfpefERTJgREmjx7uCjfvhMYpZ",
  "key1": "2gxMPWjtd7cjVyAFxFngigGutjnZE6sJfLZmeFS5qyKNLuoTDrXqhiEH3rYKEdi1eEBT4reUnZNpDagPz88SJNRR",
  "key2": "48Vg9tDdTGk7DPjoVZqkm8Gq479PeT1AhCnMZkiysra1gHFgJvd9CzocZ3UVC1N3WmzYYCuqYbt5fecdnTkicY4d",
  "key3": "2fVgVukGSY4tqDPpigGPKuj3YiPq99FMkku91dJRb8oEqbFN8g3NRxvCd3JrGK5tRh9NZybxFsT2XydVrbTpxJ2",
  "key4": "2PUmPY64xLss8iaDhhNKNUKHxJDE1wCugi4EN2QdVYQZEAopjUPqY2XDvjpSBrJiLeei8asiJmY3ESxvFgFzETL7",
  "key5": "2gRH6HjoxM57gYshDswsn4iV32rPRGiwDqt5qh3L17d3KYagXrdEofRXy7upGVBaqPqDvRMi5wuBW57tqJ1rhksW",
  "key6": "3sjTx6iPMcqZL4A86r5yDYAMsw1XYa29HTDQjNUH6oCx6SLUe1dWgjr45WXCdV7sLDKMndweM1FhCdPrZHPGiwoj",
  "key7": "5K3nwemaG2wWBfubZLy2qBxr2rTZCdQbtGAduNrRb4fmgvBU8vbCTwpZxzSAdDdPgWp1LauoYDBnVpcjBLpPS5Em",
  "key8": "2ySoxGR85Mg6UR9rXGr7LUqquChkQwdZ4nBbEQPK9G227sEMZUpyz4C1Jjq2tTnx38usH5gJHwcPSUs8Kqq12Hry",
  "key9": "5n5teMsm3WNjmw63LRosUjXfUtsoQNcwqWWpNPqeq8vdZCL3s9xvu1mjKBpQrNVNaHMoFysbRu4AjkoMbvjvmJc2",
  "key10": "4SDaY9g97DcmoUAZSTKpTk4sfib9QsKDpSVAq72GRCDax5EwmVYvXyUex2dwDTDqReAcPynuBbuUe6D4SCBK1FMf",
  "key11": "2eN14ma3nYoKvKeXKe74BGVtgBD6fj58CXtMp2KTBTyiQBchfhv1RXq9feCLq6QzPYAx78peyBNroGzKCwEbPZi5",
  "key12": "whGnnMLh9ytsRvDr7QpYKP8tNNU7eSRAdCWcHJzLkNngetSFbvUf8AXzCgiVqseKdYdHyWyNFcZpBs1w3QkG7Mc",
  "key13": "5uK43HzXjrTVVxnu9WEvUrnsiCQZWGt6Gz39JTCTVSXe5VnJ7GsWMfCL7avvY3kdtUkjasVi7n7E9HPSZiHxk3b1",
  "key14": "2SsEkov8PeN7r9FENrqMx8FGqL7tqiui76ZYuwTWnhAJKro65wY98LMN6sPHsDsNEcnitU8YrvBFodFth6t2MVWc",
  "key15": "48iMpCnFHt3tMnDqiwqsPcmV894XTmpgD9dKr6VhdkzUNNrnQbkhiU1oLSuofpX7Uu47Cw8XsRGch2Js6o3U7rJv",
  "key16": "5EfCp4aq5iAdpVrvSzTLKAxU9qRMkWpdxu99LXDuKRbyhm1eiyb4okiDQPRZJEeiFgy34fRhnCXhcfKVSQhjzEZR",
  "key17": "xjmBixjWCZgrhWDzeac8uw7TVMmJXhyUoGqzC5SxP611fkkD7v78JSvJBjWQQtSsp2HSYRQDLAuMpWJdzu2jZGY",
  "key18": "jqBcP5xagSrjyYWpjHAHZUna4rEDLmFVK9yiYxTq5hPCS4eDVncQ1L3S65H8xTJi38ixNe16jLeTJy7Jb49agC2",
  "key19": "3qLnaHoAAGVx2v1ChLkkG7ASGmPdEgpoiAGEtTWNvSABxDv972zBqdK9sPe5umdLPbyz7uHUnLy2115RwxRmaM4A",
  "key20": "5ZBAu2mX79GcypnoV94eoEUQpqTUriSgwLV4mF2GH63DkenBUKYi22EcQEMfqY5SSVPTAmvyEnhKxENi88k7sVp1",
  "key21": "2ZBcWNDyskT3FamJrJETmJNMFEpqS8BKJNzjDUZfmGhfMPvmsSBhyUN26UPWmnp5gGiEce5ZaWb8sSSxa7hPcgjs",
  "key22": "GJZy3kP74EpAa4CEZnFbqQ2hiK3CDXdve2t6Vj5k4txR3ZE44sC6zkEeKb4bi8jiWB4K3RJK2q5iUizvSPqPGJ3",
  "key23": "45qNmNeXaSt41KMTDYav1jqeJBj8uMVq4S75MVgNCgvaPwt8bmVmL3FeyocpyJDREovJBDvk3fyHYiAEjPtzhskM",
  "key24": "3Ps9Bmi1wADhAU1PnmxME5cHtgXinHeW9HvevPkbRpB3AP3gsqDzzFBU7mxMw5qE3WGE4Z9DZHj6sVC6jU5PbMmU",
  "key25": "5PDq3QUAan8m4unrzHvLLwWW1yxcAwmZrauDR1XwSS71p8iCHrm9XMfsHsfNfHHW2ir5YotjfRVoVZsU1PVmZGTR",
  "key26": "5qokWZ9HhQH4UYJynmz2ciyHb7WmhFZUH7NpVnVT1XeWeHuVrX9y8jE6rkQgDuHBwhdBcJegXQVtwjqrnFpqiYBx",
  "key27": "2PjMnPATfzyLSAA8NFdULKnR3nYtmVjDmBEXCQzah393cEVtuWB7AuVymjBrvab83FHKSRYtR6bdpwpiLPnqTtgK",
  "key28": "31bGtPhd699iLjs6HxEMUV8B5HtRaN7Bao77XEmo81p1UNwGmxQZ3PcnZynUBJ1tJShWtaRZaWeSKPr1hiEcBk2a",
  "key29": "286rka51ehrmbMznkkuLpqpd9JY1cnj7Hk26TCUKUXozU6S9MorLrk7rTsddrpJH9aB2Wnv4BLRSdzc9Sb5aR6zt",
  "key30": "5nwe5CQPtN6a48rHDknCt2xGPv9Kekd7V4J3ew9fNTUhaur3mhTvmAJqmQon3KmPwTfJwPWGzuhYQeEj3ccjgJs1",
  "key31": "67WkEsxsYXfg1kmrEUeixpzaqxDCdLvA6DPeMcwuWapXTTP2j37EX3paWD6x5nRajArWHBSDt5rLww651iFqUexA",
  "key32": "iotkG4CPuqS33xyUcwFDYWiNZqr6AoJqxhYZabVCDAGiPdbRCHYRbe2RDX7a51jnVysAZJ8ZAAeB8ab6XjC6MvH",
  "key33": "5TMYJzg57Rfoxgggt1RkAd8HSQ7rcrBLn1MjzJgRTbG2FWemgYHwrPJxv4hG2mUjLaT7HpZo1okJxkjcwCUUZG1u",
  "key34": "28nVyLYTiMDAR8kkvkFuVohhc1ftKzqTrq81942UNm5LANcbUzM812hx9UpjoWv3JmCdRogXgvSzJAPSnJwVE1M1"
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
