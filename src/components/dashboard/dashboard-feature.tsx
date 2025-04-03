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
    "33PidGN7EeSjpvgFX7BWnEpxZcRj4j1oCRiuUHEikQN4bsnuUojndoqcVs6r5kzAsVKmi5kNrfmZxnVXw8ryFJ3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qPrEGvXrqCwhUwP2fM5QjYwcqWVWFeXwEe7hKFCV731v1WEUDsHapWVQpravWYuTBhifhBKrEgutxZPFzYSAYYT",
  "key1": "38wNrjMitZh6ze7S9JBdHxShMAVUFwD2xrzh23yfAmqMFwAaYSpERRqRbRmfr6ALuRx28GrJQjrsFRppkcWqhbi5",
  "key2": "3mvBP7mwP2kisqX9PS2nrk4VbD3puuJtzsX3bibhLVGePqsM1cvHDBedfbMKkZUNF9ZjYdkVzHq5qMywx6bxafet",
  "key3": "4hTD1FVQ5EucXbHjPkLicrBX682kuQVWEheuYuADVGrETn6SkRpBrnzMYGuGVr5zbWqU8xjCi8tfAL8pi4jSRq5o",
  "key4": "3ctdtWDdrT2LRWyySVg4A814GVwHE9YMVM6LSd8zaJUNiutk5ntqU8Y8Az4fCsvYn8giroX5hu5Wzs8by2PP7jhZ",
  "key5": "sP1MLVRHzysNV1AgY1P1g5DE5A5aDrrcgugxGuRuemFv3Xw825MwkRBbLut1fitM2whjaVsDAkPTzpEKax5Fjcm",
  "key6": "3se83WNAFYZkWHF3N4mbiHkriN3uteUMsRSUwdtrbBXX3qCM78iPZrpWdfeg5mW8Lmv3eqPcKLw6LTsJTVhuSbh3",
  "key7": "FtqzZ2FCjxd4TQ5LneXdcyRCiri74ncm7WCBASwZZo2hVi5qUZwFqWMX9Yhox1cKQdRVKSR17Zz5St1xRP8GYGv",
  "key8": "5eDEg982XTqnqbCv4DcT37utBUSe7MvjGnKQZx7HL8h7HqqLan7QVM6SoZE2ULraHnWCbTMyGJYsWDDF8wgZg2ta",
  "key9": "4rYDZMaxKArbAMUo5CNJQ8LgaSrsbnmxwTge8UMgggrUGx8GyNkmDheL1dACsT6XRLyY49yjo9SWXgjqpzQ5Z38T",
  "key10": "56bx9YBmQoSfm6cJV89U3XjQzkwqa2FTYcS8rY6ZauAPRMrZgrtdgGzPo1HNVYukf9xtCvtPtfQPPn7sDAVwTuvT",
  "key11": "PGJZA9GSa4H8GiBDq9g6tJzTYGtcQMaQY81thGfo4LWnhFgjkqb5EiLEPXQdbTAj1AmJ9uGDwqaYA7HGV2ngD7T",
  "key12": "5JNCPCs5w9nw4i3sYzCxt5HjtkjPbHZvH4bxiRFijxXC65WEvz4Pey9Wat5Zww4B1WBpvdQGSyagHeB2bJhzwAdA",
  "key13": "5RMqjQqLXy1jthCrz4QaTsLi8mucnYswgTbGh2q4AdsdPhXjU4p9qRL24NnSnv8sV1XyxggzbB7FunW8R77LjM6M",
  "key14": "3pC78EWLzYp61A3mHQEFhq4wzUYBgaGhaH4KG97F2fqbDV4TNrYpDteMXKSjf9XhqFgPEPhtysCpmkUJH766SuDq",
  "key15": "3oxNjUn4WrshqR6VLdKEEdrFf9ZtsKpRfZzLSi5hM6sQkxKPYXgMmLrLcrmAgT7ouBtdsgfYEwFTJyJtLmP7YJpY",
  "key16": "5QRm2JB7L8Rzr2iuGgdLE7F65pJFbAv4JnziL3yKeCscCWRUKTn6FTevWE1K5EjHMdrZKTtGeTkRrpwJrVzBGe94",
  "key17": "2dgqLWfED7AWbdypR75cfCTjED27QmcoswAKkbBLbfvvprPYry477whxWzUvR8WJ5CanjZA4iz5D69yXMdFAJNcL",
  "key18": "2DAc6j9kejRA6rsVLxDL7HPGCdVGJw7W2h1YaqQVZzyHrEDvsvaSGbYsK2vVBY7pP5si4rQ5nYp4hvBU9MCS8VEN",
  "key19": "AojAdSMXMiAGvGzqSKGS6R4bcKoCzwXmT4gM2DWdqicmSz6JL8ByYNMAAdeB3X89TiHUEwsNiNMaFTLUtNP2DDQ",
  "key20": "33bXsRrsyJBMWuEkCeFULayT1J2We3Z2VfRGD34sh4Q9NEVfh4bzJJTMq476a5r9mHPpCkdYT9TKrWLsPCB94tT6",
  "key21": "63HNErJ7hyrUhi5q8HKoYZjn4TwkhfpEvxeuAQ4qj95XduJrCS2HMwkr3yozWpyPaynj1RyMHn1dGNFkY8XgCshY",
  "key22": "4eHYSCb7EKrb7n4z3rn2X3pGZrct8QwZtMWtdPty3zJPTVenoD2UpzbwE8LBG6hienifYDBeNHZavTndTPgcWZe",
  "key23": "5NPD5RCYCvRSwXKjjHACyHBo1nPzgwVaA6MEVgQAUF9gHFeGew2oL2LLBTAsnJr5Ux649QFb9R8GgU3jwjYxXmkk",
  "key24": "2PkcBtKyRPs5cs5AvUP7EuFQJbzBapH84poySMhxgyUuY9RAcvAuujqdFr98MWLeA1u5GjKtZC1zREidVuofnfmk",
  "key25": "QZFP7C3bR5bxKUC13R5QEL8yq91zV3Vhs7QpJwntHoMmzHSoXJBRG1XChzHhB4kkE12w6P3MN5Us9RXzwmRfudn",
  "key26": "5ZsXctNwuBWjqbSBN4xUYmwUYFUFiaNBe147y88BsB4esSp97FEdjrEsDByE5nGaALpjoZ2fcdoA8e5SfoKH3dfA",
  "key27": "2JKfnnGf4qpCw5qxfhzbvW47WmhdsWYfZnowTpjfU3SMt257twrBqUcRrDHuusrBqgTMfDq4RT2TmZE25U44j4Y8",
  "key28": "4aiGxxQNCcEZJKwTZy3qbA3TtJcJSWFUvpUdwQHfzKfvGG5XU6622EKuMncYYxtPdRpBzYdRsUeji2hf9hAmUn3c",
  "key29": "2rPwd2hNudPV3VJn9wENgG216Eta68gxzD97es8g5BBYVatWaDgR8uVr9Bon9KRvVuFn3vD1WoaEF1vDU23dc2eh",
  "key30": "2jg9cS9hAVysLk9tk2FmiibFxH9qTAEnYsXCsSTTtu3KeJpqnq6pqnvvuQrnL1TYo9D7AKFHhNr4U5dYJ7zFMBPq",
  "key31": "3QG2nVkMtWhHjHR7YfydE3ToRNUfEh2KtwV8TzS3pEzGA93sRVQLdytb5h5LJPFy7DW4sSj2Ns5M7ou3jQGWmwJF",
  "key32": "5cu2ndmZit81mLVJWn4aRTxZCs7KDnCLunocarxmradEZcwEJjWavMPfasjQSzGq7SxGD6th5YQsgRLSizihBhMH",
  "key33": "645h4BaMK12QPsmuhc6iNPUKsqLHyCH3zqUXRG2kyNk5SAXd1VJNeg7X8UxZLMsWqcxLBrEunZZZnFkrMECt6RTC",
  "key34": "4u6q7X9HsjVVzCf2h7Mc3t45WF2DU7sgWkCtjQD3pEUb9BLqZZ15Svs9AW1wSd4Awb25y3pbwkRNYUNDwtJgAqor",
  "key35": "4JFPo7oTwEra2VVS673xPqLHCanDN4Bh8LFgeX7tMU7ekcZej1uhR1ZjqmrT5Qy24edhWCLnGFa8dsK8aMTMPnvn",
  "key36": "4mWUcoGtj7Ws8RqPYZ4pgDbu4hLiobYu4AD9hGA2VKDSeXwJRei16SPJwhU1iQoCyuF1PSUxDR1ijh4dBBKbBQd3"
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
