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
    "5pyWiBhibcW8jk7ey8vCyCEfYtkyv8urJ6PzFi6xCZnsWyUQpknYMGjjA6db66WbYa8LskFAWy1Mp1XG4cYk67pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWiWTMkhQfeFjodKpVXc1YDL6Q5fPVE1g2KAHbQuZ5we5DWVeNkF9NeLcyK6Lpe9rxEWUMZ5UxEtNAP8RLDvvfW",
  "key1": "3RBdQwwYD3LGyuZd1vmtAEBd1zSFkjkY2qrXMK7T3HsztXQqE471GKNEgyc5bgneKNXJTMTy5hTmjGbcEhWMttkx",
  "key2": "iCkTC81dwvY3PL8ATMHfe1z1s2ECD59dXPsUxS5EcUiM3QMvVpHJ3QyJYseHimngecSn7yDf1e69fAPGwfwUPTG",
  "key3": "zPBuGNZt7Su9YHsupbVoJMRL8cuvvpMJU4dYYUpQ6vAECHPej2GdAQwQJPMDtywEQFSmzWWqcA9PcSx1VnUH4Z2",
  "key4": "48erKebgvDgfc54HQuJYSY2xJ172evDHGBCcLytdDkX8rREH1AQyYv6Eo6cpnSu9WjJXDjkwHEdNqD5wtQBfaKTp",
  "key5": "3DzpRtMRz4euoyQTUzdcfBbAZoj2YHuVfJBJJf12W5STebVtdoccY4NaYzVHG6opLFAM1PPJZX2n1k6kmZxmxEWp",
  "key6": "3wwiRhJHek3aQRSns1LnEenpMin5afvaVEiRCkLZeDsVdtz2SjXf58s4TJaGFFzVuWgrbDNWFx7ondT1udcQXw8R",
  "key7": "2HRPk88kP1Hxdod8HCui3FUiJHzKHDTqKMDLbuqUwhc2APezayF1ciosYGw4chrqq7nzUgnR3bdNErgRrpJAYRn7",
  "key8": "3PHKt7m3TbRGjBLPyHwZ66uNmWJixBLUZf7set11jPoB2yorogiKUaDwWYdf7tVbNE9QyzuMhX888dss2otauAvU",
  "key9": "eRSP173AAyUXMTrPmutBfpGerZQDK62WVVnFPtU56sdme6ko2kDyZBQ4EsuK5RuBjdEKLR7KNZsNr3eKcat27J2",
  "key10": "26pha8u7gX9xZGWuZhRy3Je5cUkJq7kmVtZxs8oWnSeszbTtphx4uJTfwTJMzVT6eftxNhSiV3GpY3PjiUzaNk77",
  "key11": "33SdJrAJJJApHoaB3ghc2tfRju6Ae714EuF6eNGfkvXFr8c9gtqzP7sd9P1wWsG9uZSnhku4FSWVoT7oC3ysAUTp",
  "key12": "5N255wBzZEbm1iNfqQ7MuLKssA72F9cMKssT1tWJc4Pg8nDLQMmPhrBSxcn28MKcVrXZBLsZtCzxVBWBUF8afJ8",
  "key13": "4hEf7X38zsmawToe6NDzfvyZFd98Dtt8Q1D7WtR4ut6bishFMYJJzh3DVpKqSyfLWM1qNtJybfTBbn4rxsvYT7Bx",
  "key14": "3rxYX9XdxLfYQTA57zwaUtsxqCn5sLjGLbqAuidqwF9XGoec9wg5dp5jwpyCXNGfuBFL851FH56vVXU1nLsVkbXi",
  "key15": "4rBKV5kqrS8aqvomp4jvjp9F4ysQyF5wYsGCjEkP1rLtzEDRhKyMpYbUnWhBvaqZACeUdrxuE4dwvipsKTXwBz8S",
  "key16": "4X2qKsbCP1K9RBK5MaQwaDN9r2te9RavBMEMZyWzL14qsikTbdHSfQeJZvyFs5Q6uRgoRVCP6LTkLPmv8L3NmNHk",
  "key17": "31xunWkNMR1Q3xecwmwdeSLUKCnk3suVgZAcYKeP1sH9iSdevpF3hWLfMBqHtt9RtJqBZKCMdHtoLtjyfuRx1mwV",
  "key18": "2NgpcAEmoa6qYRQJqWVMazKa1JZ76RKRjWGV7RVooCipoz9YJZELFXTx6am4qexxL9ME8Xqaw3fNstrHVW8Ynbm5",
  "key19": "28gee8k6KHHChMa4oBocbK2uYqpTT4uZYe5wWM2MWupGgQY37LqhbCyu3obg9uwPtcxuXk31qRpRV6AzJ5qudPLQ",
  "key20": "5ZPzZgWR4r3PXr7DnUC6g53mvcWuwR7hMMC7Egm9CZUxjHVRsJbMJonTLWPCAqddjhw7SCGDwvffYWZTcAChxVnj",
  "key21": "37tfT1KGdFNDQZmMurWUNpaz2C3mNG1QFnt4nNW3ndXP6muuee9s65iYyMf4gnkGZ748NtaSoSkinW3QwHMrCY7z",
  "key22": "2xUvU5cDxKkbagTBMJtEiuY9pbDhP8RFbZFxEsfinM49q4VaQwHK5svVu7MuH7S1REdbYKTB1G6P3bVnXbtRqzzE",
  "key23": "46wyKq6VzfYW3nctsDWBUzi7923mPfaY3kk9FL77hrPmxd3NnPHNmjNySSJCUPvFqkgdD1yPhpwNXXymr9mfdDYb",
  "key24": "5bxGuUK14mzm8zj3G5QvRfp5gQLSXwAkURS4ifqQjX5WTKBxxFBL3EcmyPWfHJaDSVWj1VVoxN5NtuQjo8gSeVX4",
  "key25": "3cn7ebzcyouzY6yYhphHcLe9DT9JwxhJfVjbtqg1jmB9cAs8sg9QHEMPo6sNzjQxE6HVSJ1bUbCioC2TVe3YZ15o",
  "key26": "34t5JQ9KtTSxouWrkcyf4DPnqwaFU8WTroHRCJKT9qGzySidWFhfyeqBRr8m3CqB2B3rcUb8mzCTNizSCr5fSwDf",
  "key27": "2VPyXSDEvgwWi5B5oJaWqWLVb8VTs1uU7dTkmytirX7APLTzLa5xyKUGyw9MKhAe6K289E6JjU1UMcG3kvCiLoEv",
  "key28": "3gycRgH2bhnHx5XX6YRcU2WyhyKjWTJKuAvRwi833Ke2uLokLTqZJhVDHhpx9k6aWC3CGk5ANE2N8H71gPxF9u9q",
  "key29": "3zbBPp7HLhv2pFZfjWELnVYQ5qyfXasKyExVgy7bA1Lhowdy2VUszbD3PPZUHt8fRmsMqk32uvSfiS3TgH4cbDQK",
  "key30": "4EnAdKqfpvyeXiFM5rf8c5Dqa6jLToUcUM2dWS1MvKEojeUf4qp8K8qes8SgFaCCGLCFvKFMcs9GKpzhG3FCU6Bh",
  "key31": "3WwCzPHZBh3dh1J6Ewr7tXGb33yf9C1znHza6567dUcKTjrbHMibFkRWsdd8kxR9zhrusj7HKMHrZih4rtDU3yvv",
  "key32": "3NZSrZWAJM9gv7W2i36Lppk4PaTBgiLwCgQWFut1ppLqsCMzVCzswoiCq1nQa3XpMbmvtdCjGUmPra1vy3iobPjt",
  "key33": "d7EA27xtLRorxyJG2H5SvTqafDXNJstkHH3H8C5TCxt39cYesHubSp6uEAGsBnAVkw1QFDhtM52cez3SopJSiyw",
  "key34": "WgKp6vSG4PjZYpdDBP9HD6gkEdHFQ7p81DMem9ziq1CJAvGnVJJtHzxyPGVUh1ugGEjkS7MCgab1H9q9b3DQPu8",
  "key35": "4cQdCTM5PoFNevXgdYCQgQfN2pbjxqVzfwcYA9GmGdsPS3pnZ7UwXpeMbPE6iB8mMbDXEPr2i2xzPhX68wXHkirf",
  "key36": "45Zc6JoTwUT7kTUNxdMaubZxekwpRqnpfVLt6pmgSmnH2kX4HBHtLosU27ySrQU91J2dnQjZjbUth1wrirZFJz5",
  "key37": "Hb2LEPvrp7dMZKoH7bgq6WXPV3tcK9s7se5qaRdk6FoWBWwJrnC5E9eeq7MXLwtNEc9HsHX9CXh7GujRs79o6V1",
  "key38": "2KLfzzChNSYXW7dsE9R78gvV8xw8XT7GVUvCLZtUUeQ18uvaA6emvsrgWRtcXrxAZrtokxCSwHUfd5zBMuexyaVD",
  "key39": "4hKh2g6YLdEsmddon56A9iiEtAUwzMaodnimNHw3wA1YobiYZ6Yyzjv27tYtNpEMQY7VxWfoxYLqyWTYvaj6XWRK",
  "key40": "5ckGyxGgAkbcuCvwt4HYFJQD7VWAUPCcczwEifzDi1dAPs555ntBuLms5oWm7czvd2K4npchMQnMM24bkmtwNH5c",
  "key41": "3QMLGTTYCMbmVZoCuLz3Urb3CnEf9aGE3Q2FaBkfN5DLNJeT3WLjCcWqWtwBSGz7Zy6GArRfkKXJBH48PQbpJBHd",
  "key42": "5odW9MUBVsFBsSttSEmXWard6ZJ55PSkUdUW5p1xCdJxVCCjWBa7Zo3AfnqYnr8RMLcoRe4uFezFUrkEmMGLynX8"
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
