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
    "2ts55wUYJuJ3YdFcsF3pLevCxWYHDKCXw16Xu1P3A457s7X7a77bJLSGN32zGnSbeGVJ3PuQcEoLceDQ1VxbgFL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p2grYaUfkspnAZDAVTT8i8fN3k3xjuWujZoLZH7a3P39FFCm9p7VDvnxpXoutQtEcKQLfRcWdeV3TMStFdfR3ay",
  "key1": "bLTFjCz3wgsb9BYmHPc85KbS9qBC5YujmeHVRQqCYAVZa7giWmQLqMyFz3ThM37kWTN1UW3uPLm9QdNjixjVeB2",
  "key2": "5d2B7JEsmK74uUSYN3Ukx9DbJ2BaDZ91HF6fFyUU7yGtSLxQk29Pk9nWLmVNC1UGQQvUwEmvN34L93ibuUbiiW8a",
  "key3": "n6CLqZUZurE8PvPvCfzPpiufxLcQtgUjsvoHcgDxYGqJubTyPNhmc64TveeragpQjizEiNNPETNwr7vrDyXvVkX",
  "key4": "3rMMvWmsQf5rmgWWap7ih4SzJ9waob49iR1rVmWSFFPxPXLHQbmrToRJgJ9F4RvXCx3mx9f3xhSC2qVAYtgnMs51",
  "key5": "3atUfP6dcdVmKkXLDq6GxTD8avmYMH9e1brv6QxapsxbHVLbEFHVs9qXn5w982amUM4pEZxp9di7s53MM3X4MJZP",
  "key6": "4PnPjjXc8iZPuEfZ3NGGpbovRkQupMKhWfNyjfQmDCLsTNwyM48LmNkGKerihiyjyqnqh9irPjFN6GR5LqapW5LH",
  "key7": "3h4uGWC6Q5FEBboTD29KAihQcuYskWxmDbJEvF6bWUYTecqmNMTD6ixXNDUW4g6e6iUAYTmzY1jQrJ6HZuXCuhdB",
  "key8": "Fzqu3Q7833kgEoAJtFyqqPFhTBwnWrfgzbiuSSpzc8fKgEuCV1YX8XogHUcbzu7rtQrwYQty2LJB6H6icK6mLch",
  "key9": "3V7xuxF2Pn9ydsh28hh3sbJpgU8rnjiuNk2Dao8o7NgCBgdv7V1tFaKBLpjtNiQtyZa1T8nZUFJZrUTb3DHvQwFc",
  "key10": "4zefdN2ByLPwafE59dm34FLDdE2WnWwWiFmYVsE9covmRmy48zLxbWNVjRsb1Kfockt1KMu8gFNvED4BvWChKRrB",
  "key11": "47MCWpjwe3i7QU1KRQfJhLeD5TYB5qGqR4Ukw3RCeMN2q1H2NKdGBHyc2j2zhDvhaWtH8gFLT5dUonFFrdQeR2R8",
  "key12": "3GxXM7GvnFdB7J94hUcWNSfdtwsiG2rDH3fLArKNo9xhHapP48VMeoXBxCHeFuCVYRJXwJWR8pb9C8QDpn6P9bb8",
  "key13": "oX1cczpv87ASTWgtNPenVHUrU8nU94iGNwXvcaXb6MBQC5PqigCtFeMRaCFhYbyuv6ARnXVg3XrehF6EBrJLfGr",
  "key14": "FU2HbDjyCpw3qtP47veWaB2kxStugaFtu4YJe3kc2FPCAjvRKUfDPAi3vZ1p54eMwUDzeBCzwNcxJfGGCgAWj5C",
  "key15": "2MWyETEdDwbDTa5Pgge14P7m8jAusBot3kpFfncM2MuvCdmHkJMuQNX67s3FzB6bzxheF8dwwbXDhkj83qz71LTG",
  "key16": "3c5v2KeqZLu9KDPM553xzuvmAFKqXXu9qqEE3fYM1g1sxHZtnqzCdcE7paZzuCSbW5rz1RDbcZ4PNSWAhbtWoDyH",
  "key17": "W8vyzrCLwBeJzQj5k5TL5f5DpNRRowa5WzMtr6JxgdmgAwDbT7nRcZc77uFR8Y2TjhCqP7wR2h5xRR8hK3wRV4J",
  "key18": "5tvt5Q15UVVETvUJPpZ1DfRyBubrwL8mTn2gAJ6Mqn6Jbc5FVVJYCZkDbnt1F8xfeyWqdDsV4DBWZ4VaRY1oVJeL",
  "key19": "3CdpEKjeKY9BB7Z9jtyyq7so1be2i2vJjAfo2YzTGvxuH9UPQUgYNFt9EuMfUyfyRqFYbNDAkC4t65VwACaVE332",
  "key20": "4xmRxrq4Q52EAsHmHwnbHuvENbmvh4koG1uVs2jpM6EfNjkWoPm4nqdEQJfjuHgQfbpBaTyUdKaRWRHWovfBqsQF",
  "key21": "NVDTGuYtmpjHvJStU6dDGmGmerp5eA7cQssBnF9f9SD8Bw1XqFZWRBy1AgHuzA1kMMwky3F7r9bWKai48tFAjk3",
  "key22": "5tijwuqKuvFXUTa2wA5WwqcupUNXKoReeq9xtXei7JUkgWS7CLa8Yykx7qMcwdhtj2t5MAd7bDVjDmkrTaGNj8X9",
  "key23": "27UJ2cJPzm1APPep4vAVVxHxX2jMtSkxLR5DE9FJ12nGw2LziMzsB414JH5w59VWXVzqqo4e4zhbMRDPJBAZMQvu",
  "key24": "3srhLNuuMcz8TsH9cSH7BoCiL3fB5LG2qD8zrik7uddpPZRqX6C2aqdFbkcZdeC8n3etKvyxxNCuu6fFuBV4c21C",
  "key25": "rhDaHUoc65VA5yhL2mzrtUjTBzKR3wq7r6AD8nzRkFxafJ8YBoTDUzKaurC1sVvumGmFQrHGVVmGbBY1PrMcifX",
  "key26": "2dT5ic5fBD9rLRoUXxFfBHNUhaHXRA4Rmh5PAbVaAHdZ5sCdKrkDQcNVRS2gW9jvFMjrGBGrk4dDXHnaMGzXshgu",
  "key27": "5wEKokHuJHDSLqSRUpT7Hch8GZQSUFs2xwoJzmxFPi1FGzc7Pm3Upv9xzeGxqk5XCoDhNxbyp2k43Vi9WrW6qjov",
  "key28": "5DZthARhCMGaFTwWFu3UohhRnh8yrLLx5Ar2pNHUBQhCwD7kzKxNQRvLRuNcjoUEfmbqRy2GymDodeDJt1q6XBk3",
  "key29": "4A7wENhysS1ueEebqTiRAJ7qsNNuzBEkCCJLvz3VtzC8TDg1WGBRet9fXw9rJjgda3PmC7d9FSFrMcnJwsnskdP1",
  "key30": "KdBUaNi3SuaNtWTgFSSBYSZbPG4z1EtUR2cgSody8dywUxLoSWo7eDFGsncLWPi9HdPKQGTL9NF6WP6FvW77Aen"
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
