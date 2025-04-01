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
    "5dR49qfTTNqXSCTyuNbZ3mdV7fctuCm7U5dPwGzfbJ4yoGsx5eKs3bCJuHKACrE9KUDVhE6XKNVdiPaMz2ePnBD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JPgjjUBX2KML6DDNeKgJ8xNCFc1SGhK6ok3DptPCManfqKKo7BpBG1oxcH8hNpN1v8HNSvpyx1wEEG4MSpUjR8B",
  "key1": "5FQCpwwMQgFj8WRfUYwkFFUMMTtx47BTsQTpuxJRFNRuEBzXy5eh2fwoLuoj6yGrNg9JBRUDqQQjpX9FBZwmFRq2",
  "key2": "5cVBkyFDxyNEAKEJCfEwifSqR5BvZNzTk4d4wQSCteXsLh3WpTpQgYuDhfqwEjVy3guGsbjWXWtD7xYKz9yoQT47",
  "key3": "21VqAzgVkacDeaTF1poVfy5AbhYhrNtaf7s51YZL4B6RKGvnoUsSpQuZdG3ZfMeufPJneat2x1LU4LBtJZoQu5xc",
  "key4": "B4E5dPjSQnpW3s2YwunEzCV9wX6436iq1YmZ4BB3aBxF4FtC4RXYmvXwayPR1kP7fzb4HRWQnh4y5MaB4k68i6B",
  "key5": "51ksFgJduLBd9MmorfpuqeUxkqTqvbM7HQfZ54oNnwASCyKsjFuRhKicB1rAJDDNC2WxdVN7pLctwAZ4YibeeMcg",
  "key6": "4jRKaJiWxXAT8EdfqFyKZC4TbdS4BZHiqZDDi2ZT55v7BErWUYhpbmyvQepJVU14djjQWwZbiWMJFMTDCFvsA7a8",
  "key7": "58cXTnTniNWSY8167dY2jSe2gQacZ9PhsTftXPcryKd9f3N6Vbq557tazxL7agHsUqpBUpbgp4T5bHgcafPCLLGp",
  "key8": "4UBHmdJzTTVC3pfEQP161SurgziYLFmFQY8LizaXk7rsbQtUfxvezY5LJFBNHGGgk52RMceXjeKDZ6anDgTzx84z",
  "key9": "3YhDSVVFKPMErZMs2dqSVVro7YFZivB499zR1vKMhRoTHyUoUBCgPMvZ1ezZ7LyTLt3ffEikocmgZFPcw9EqF11p",
  "key10": "3D7mmLQUQDLEzsF5C4QbAdqMA4GJjV2B8QpxfpBHDv9yUopzwYCG2y2kufPg2cAotL8s7BDLDKApPVL3rFPWgVrg",
  "key11": "5jsEeqRXUpazmX1gH6FvTdWat48un5WUjc6u3d732VpWPk5uwJrCuthWuctxpHuriypKhpKVveFwkLFp5AGvNX9o",
  "key12": "2u4udUD2TXTbsDtDciVuckcJkBuUFWDZhpoMQrWW7fkSe53RsQqX8JyUzcTYvWNYmxVovWvpuSn1mtPKBZZUYswv",
  "key13": "PbhtXdRpHUAnZBLQHUckpYnEFxUDpcsTq2E5wn5rJAiNVDNKDhUMnrnjEE8Db2CcJuoaYXhMJBR3ZB1amScZMFM",
  "key14": "4VwYpVFAm6ZLJfGPNxmiqE28vjTRT7MQhHujK1mPvBEc98j2YAQSnLhcfJzE69yJrUjtzV2yDHWSRtSrwzdz4a5v",
  "key15": "5YB6WCN1vmNC2FpjKpeZtCDEfGMf7vFQURYgVXoz4g99Ev9ozJqGAJHR8U8T4oqqnQneW6VGMBz5TeEUEc5zQVgu",
  "key16": "4m66AQCjKd3J1ixwFGfHBV2gFaDBi4NMZdMVcft7rnJjFBCxWnWbj7DAHui2xgLXkAUcyMpEvXxjRznqDcimfyBD",
  "key17": "5zoEycwVuptY5kZ8qacMpzhNZ5CcRtYyJg298iQyvyunzh13pWbExhw3Rxkcjyw2Fd8XLvtxmPGMh5GboS4BYt4Q",
  "key18": "3B9e6ybMzemcs3LLvU5dpqTCfv8CWCHpb9nr2CQWL3YJZ9J95MhYmNbe1yjz3iSXhurjyVvt37Uka1aFWyaHKu5s",
  "key19": "CaBoaxdjKhEWj6kcmG8kQYzbzoKzoZcVKY5j4qwLunKi8rUbyvWfdmXx98B4E9io7QHUocA2y7GZJbd8nTm5FfF",
  "key20": "5CWZxiPB2fC96ZHSfQfphPSbXdeBbrr7adQYksfUXj4Wr8zDbKzyfw1VfEoviJvPVsPn5Q8Rq5QwRqA7Ake4P63R",
  "key21": "2cHUAUEXSPW3xcQ1qfw9iSyfEt2J46WLaa9Jxugscj5ciHZFiUyaFAC2ixd5696mADwC7wY5z5P67uqq8nK65mPd",
  "key22": "41dDKRsJi6PUPLCdynStpQah5MyZ7nDfXKXp9dbiB5Eip6gSmCMgLCTLjYPg5RaDTVEFdL4fzM1VvAsJHAZRsZeM",
  "key23": "3CczXLqSU52aCLD3tdFH79bj6BduoLeAqTy3eFDBYHDCXzZs35hFPXyQTx9forstDFeBsPFZGMiMwZb3bPhsCTrm",
  "key24": "5HbV6dwYDTmUqXbK3FFGbXKZcp9UMBRKcfKinAcgx3rr2Up5BwUp3FoX5grozHLqwchJ7dfmk6xHV1uLpnjXJAx6",
  "key25": "2wqa1RMvaGbPCpScciuv9BC5ZPypwUXstdRkePzuZDcHCQ546k7fdodm3SwhDVc1mQ4jinqZ3fmQuWQiiL8q1x5j",
  "key26": "burY3HHxSri7Z96W6y8Wgbi3s4ttMLUEjLZoT4g3RQUuoJYekGQ1ym2kMtCP8sJuC9FYzjukjRNYJJZCQzAYmrv",
  "key27": "5iyrHuz2a8NHfNwJXipSCS44bQcAe5fusB2mCVnFpq9oPVHKHaNDmeHpY4w3URNYxpAFK4rZqfgjWf8dhmhuHUC4",
  "key28": "4RGijapCE1A5qCVieA3sdntsGjzhHXcd1A2bNE6eTszDBtmW3wCGUhtm5mjS62wsUtcAMnpLHbwwg1NutaUFk7gG",
  "key29": "3jjw3bVvHegxX4o1C8FBwapiT7GGbdKh2nuvmBUirURGHGnim2D1KWF3FJAEDWPywMX9Ag4GJ7o7Gz2uEDj1C8Jf",
  "key30": "5SYFUBoaeJLgoSHZ3orodGko5Sa5TvoYQtHL4NEetHBpbETVCjdw5L91wHt7ahk367qTen7yXNyDpcsXekKqiJAS",
  "key31": "BNWf4n2VPqvk3bKaLoxgsKnJ9gKgfEH72YYLKHfMPvcQ2VhnYwKgVpGEJu9UREdKM8wvKXdE2ff4TAu1NXn3M3i",
  "key32": "9w7CHGRNwsABCW62LeRDXTpNbzZEQ5cdnPq3gxCVgr8KnbmkfMvebm2Qkn2AfxScrXsS9KrcGDSZt7numncxxd8",
  "key33": "26MqAcLXPJEdcY1Swwa6uuH9ghbsHSbAjLghFeb86DoDGSnsog6fWraUqFwtBe9n2Yuov7kvje9w9SjvwS2hExDs",
  "key34": "3GAYZx9BjGpwrX6piiPL9xWgKhFqyUwLvRkmQot3yZmtv4jS9VPwx5GMb6qALv3pYwFwSnjkPQg2t7WGVGDBMMtx",
  "key35": "5uWFoG6vNRYQkGXnnDYMMZimXi3TZcg53vgmLML5GAchzbaJ3mitUAYvzZkrAxqM2CWaEUEiFhvXWNyggCGhVW65",
  "key36": "2QRrUs7DdQSeGu5qWzqhNThYQx2JteGgnYtGNXqnZJ1wTXSiKFt9DPmgTmTa8yf7T1nEpv8Q87gJe3wHjy3ZXVKr",
  "key37": "2FX8wke4x13sA8eEnLdcVEnCWVUMpbQhm4ku1mch6QMAruvuf5Sv5PbskNDdo5xDhThRDAVXRs48eTh2wvvs3bBX",
  "key38": "3dDtZMUBvaugWrR8rdG19pLfFYyVrP8VmVuP9CNhCHFyoWTun7c1maPrD6dGAvmauNooRKZPbRvDqhLgUHM6CiQj",
  "key39": "2sgxjX9ePMXZqPC36MvVYz2ry4iWu1Zv8qoduB6n2T17xziENFx1FAHUGnBuzM1eaZjZwtDCRqvzaxXBcAV1enAJ",
  "key40": "4fPMC5Evhp6FjHk51Sv2iriYXXRJyHBJuHAqmWsQ7tFJtCdgCZwgTcScCAy8CBPEaVoR2UeV3XGrHQCwrsG579vc",
  "key41": "4NUVyBTZTD38C4bE6EFFwLfck9ndC2BsY3ZhJgZK9DE8Jg3hwHYz7SycY5L5Y7X6LeFFudc1epyXHq6BVyQBgF7J",
  "key42": "2R4kWVyyTWWoyjqY1rR3wMBra4Y8dy9EpSsFuckWR4xN6XNJn9Qfrc1kB9ghj2VhDH4p2gTkmXoWtqDsFwP9pzt9"
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
