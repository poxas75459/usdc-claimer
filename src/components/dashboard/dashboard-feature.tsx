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
    "5qFfU5ampy41LqES7CrxG3AdWaPFKyDzuexag8ahpCtaXguFbwFw4qrRx19AeuVapCfWJgBVNrBCgtk3RGL8ZHrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bS3v3HZmyCQNbEULSLN74yCrcbL5iqRxGrXwbZfqgzn1VQDAFT18yMzK7ER57ueCc85ndKB8w8zv81iY2MnAvaZ",
  "key1": "3wUw9z81S1nCnWpXR9AUAarZPzmriRHk1juqKzaoxeoHpmE7MiFbV758BHEcmKvND869oNRF5c8Crjm24ijhVJed",
  "key2": "3icQMkhaaRm4Lx6GoxaxUvmHyPscqWoDmfbQWjjAcMwedTMR3VNLqTrE24H3W3pRVNheQBJ5oqAvJQGvrEbCmMQa",
  "key3": "5Xnt4Zmvmd8cWzZRSbEtUd4CzZkD7HjfCK7QcEpexVAkq4eYDzfhEGKYr412xcZ8EkbzjQAziWyo5tPFR4oypwZp",
  "key4": "4VVRn3H85whFjZen4KEy2DyvTZEjpsWg4RDbeBqLzXScJiCQdjS7eBev51sh8JGmBN4UoD2GiKez79DRLewxqwhk",
  "key5": "3gBwH7xfQwxtcfX7qyM93PrKJCxjyjBDwDSCXubQQ44nvQaWAX2iiXNQ8qMn12oTXMwCLkJSL2Eq54Mc6mAFumnZ",
  "key6": "nY1Vt1J1RatsREZcqBisEjKbUDPsLiGPNEzRJpXHBUuD8hK4khbnpqXoqgqUUpyk82YdEdpicR6KLeAqYYFCHvX",
  "key7": "4Dm3BqhHua74Cv3Qykn7LPB8zNgEt6j5xcEGZzu4tJxtbTFXQtw1f5ePUzUkH91vjP26Vfkn3qMivRrvdhAAgMpT",
  "key8": "26sXVLV3LN8PxK1Sp7YsRBVnXKVfwHYRYwefCU6dnPtG2EfVMGwBvVueNuWPmbQULfjGy7R8e63UVPJ9VUWMz9no",
  "key9": "4Zeefv3KWpGStKnijPcT5FsPfGotC3qRF4j2mn1bV3U58WWrvXrgqZCGMZZZYi1kSivKNXpqDCNKRTvc2LwdHEYQ",
  "key10": "BQL3cY6ftk2nKJeYeBvsD3SV3eU4L6w4V8vLWHhngw3dEq3B72GwL5wxkNWQWipcykgYo71h74L7A6kMbFKvEnB",
  "key11": "62fo6u2Z4uTQqU2iXkgYFHiMkGJRdjJhY5c7ziCYf84HNnvXd9tvD6SYJeuBHHg82iagG1uxuNRFNEwWLah3AhXn",
  "key12": "5rCKkgPqVHLenF2ke2GboooynmZwhWNW9fvPrha3ExVKWi5Azr2FUfemUcWDELPn6HQiW72FjycZFx5H1ATjPYaC",
  "key13": "5NGErA4xwm4X3i7ywWyUDiLmpua2Avnd3H6hUBVk2J8LnSnYKq6MioNcxaNUqZMmo3jRxwatt4YbCKsxmfT8xBFL",
  "key14": "4CSZ3nAvCsCGm2k2j2fwm1Y7Jp169trGewjWDUUjSb4spSV3rQPGG7FeoHUnVJHHid7CpRANKak6TauDTD3qpF7o",
  "key15": "2NhgHEZBWCpj1dfSrHVKsV6fWafNyTBUxfdYVhow4GBJ9qTaBhz9Szz3TXi9eoX8q6j5gU3nEYsrDUoeer9AtLEo",
  "key16": "TjgT5bumznBD2MjJ13Y8Hd1Zub4ZaMipcQQaSP9FXRg8AACaBw5N7gKQvSC2g7DBHHsX6eCQnWLVkoZCZimer3Y",
  "key17": "3nrR1nV71E5nUBz31utMdYGuV7rjwm1ZnVGWDto9eSqmvAwyS6uHCJryL2z9CoRbLe8sDno4szRJUyhFxqHJBpi2",
  "key18": "jPVdr1BK4iCzYszPMBfkDRdxdjPBhpNZh91azrCNmJKk5Aofc6Wf9o9frKNfoQ273AX4Q3S8pRp5qmeZTAGp6X5",
  "key19": "4sUjLX19JmfimcdWDrYWbpteJFsoyarhpL7j6p1f8Rwi7pEEWfqaDGci2JFTgi2c5xTX6RYrnCL1KmiMoCHeZiQj",
  "key20": "hCu4GvDeRRaH7eCNNCA1rrVV7UTsFYSTpENSFe2WorzGiGFseAaEeQTMCqZK6br3WbSjusnxxQJjWh6tGEpLFvb",
  "key21": "1YgqSwDnyXiQbiWBHJM2e5NM1VCwPNwBqN4HgkDb4rxSFiot8QJQ3KK9VzSrkyogBD6m7aA6wTKq9YYaMAcEd8D",
  "key22": "3UVAyNsPMKUJwgmNVarfA4bCpqn6Jh3tG1N6wvb8gaCKq29SmF7HrvA2UA6sq8Cn7Ew2XiuVTC12U1bfUY4ebR3t",
  "key23": "33gU19SRDYZEK7eNcCDUCLCkKrmxiV9b4MxsQWPaiT3Kn4TNCUgDHFb2wVVHZ82Q3C1Kjrg4tNNJMfMEWEb4YpDy",
  "key24": "2ZdwoXwg3RXWty5nu8PjGg1P9FreuJw71ZAED1TFz4iSZn8PMAgGQFbjSkjhXJR43qapNVS3pfB8dGLRVBi9Vd5L",
  "key25": "65exyYgA5fPjv2MophjkjRg9bUcuf3xZer5u6cnemZdtTLxcnb6CxxKKXoaFnvUHvWKeAMSu5aDGjY3FM18bfDhP",
  "key26": "2RMx32eAfp2PUs6TN6LsNDMEzqhPCsncBLi24YpR7EV82eDBj4YqM4cJHXKV6gK6ZU4xmbfRwujzmxAEXAM6r286",
  "key27": "2pdhCiB5SVFHewtVjrLGhbwCcuo8y5ETnzDqL4vzXQ2AJMu568GARR5m4ZX5nTCWU3qkrCmCu5HWX8Zb7CGRYesK",
  "key28": "4JSv1m1hZ19j8UxGhTCdfzyEKqDx2bbjJpzx7Nd9KjbLutS32h2ZLKoekbLUaeykrAic7E9vfyszgm45Vakknsrk",
  "key29": "5V2e9mbFZe6Kq8MLNPemBDdVv4mYaGfCLvnJo7P3w8Ai1GZ5RqhfgGJ96cKRRPBZzsVhPnqdAgiDaeUmGuZUZfai",
  "key30": "4i7MoFYGaebwh9LUjBBSm7nPS2k4TYzkxQThdX4XTHQM9VUiLi76cephSCNxXhAW7QNCzUT32J9EdZ9qV6qgtB9e",
  "key31": "2HbvNyCRbFXgUZsHPeCkjjaHF4bwSV2293e3snX986sq2HDC3jgKbpBBJxyHQXTYFQWprfU8eNnwrtJ2DHEASdCG",
  "key32": "4Gu6yVHTtwm1qzio5SDpHu5G9mUXeLGpvyNkkvE8fWvgcmKcBdCLGrhCtbvKR88nmGoLKUxArpbkWApmPxWCEQdP",
  "key33": "dBtJbZeC4Z7vZs1aQRk5xE2zQcvdk7XA9iJ6tiAhbjnyqkpwuYxdCGavStq3ipxYPuQFG8V3aGE4jBUKPqX4XDr",
  "key34": "3DQuKc1gwqY3ngNsVtZtXGanyHBWhsN5UGhkTZHZvtjKV6r5osMUDxarW4Ra6xhFfUUdaVCecit3G2nkxYYS9oM4",
  "key35": "3gkTP6CkgD54xa8DuaGwUFo7kWBTbUq2msYi9GQWVGK6et5a1aYVnS7EjbhtRJEAV4dDu3oAfuaaDeQ3UrPHApUE",
  "key36": "AXGPWgDhF3hgxMYNP5rwf2ai79HkHiC9xHxzj3tY7JvEmKfhpLSi6wKgFCxANxyh54LwgePurXv6JHp3yQvFXW3",
  "key37": "3zoJAZ4RUf2cD7BpcjM2CKS9HeVx6a8aq24stQTTfgSprm1jKtfUcfDeNyZcpM58wuk6CTLUJ5w8XzPsu1BsMP64",
  "key38": "LpUetfTdEXYXf4i3N3NXvzr2aWmYKCeaEnBBsc8giwrSYHk8VMHJpzczaUbsTVpzGg7qj2rwwnZD11B6RQJcWJS",
  "key39": "XPmqD3NHHwGNyEqdnNxyXmS5mQmgYYuzMuMPzpwEuNKTHBDGYrSGVj2jZUaLZJoGpLnMi2g83rhktGypbc7xaC2",
  "key40": "5N1X4U9a1on1MRznmA5fajWNdzoPseSZ6rywsFaoqc9ZmGiLMYHy87LcsfUfTwFgQA6Qs4Mv8WFc1sywtGmHHqrh",
  "key41": "5eUTDWjmgSZkf12SFfyGPNevUkYRshD2FbZqLqQAmhwpT45WTMEnvxK4BambrKCCMrpQTTZ1JsTK2A7h3T6G4kLA",
  "key42": "HHvuxpKUMJxKGKk8eCZWRFNCErEKf9FNzjoipMPMJHsD4QshJkGfRoG9rnxsxqxgoePtegH29GM42SEJ7chFUNN"
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
