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
    "3pdcT5tEYCAZKS8zbB3uVx2wwxy1XjjHkeYmvbGCnRBxuz22HPhgx35D9JLZsB6vrxLFPFvxRD5JSUJEvs97GM3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFZ7FsmX5HagGAfUm6rwwRGJDknmWFXCmMuqDNsyvrsWyxZs9rfHdXKPzyMMwj4LL22rQz8qdyRRudYF7rKi7XC",
  "key1": "4nbycoy2Yhf3uBhuQQYeBYBYEHMLhrutBYdRLadZzvf6dKZb1ar47RfbUxicccJSCXPRWeJigZWx3BfEu3xJYqTH",
  "key2": "qZ5JcfuBWzxk8gYnsgBo1SwzKff4cAb3og48hta4BEjtTQsQMK4UErheKBA9sF5SuXkpHQ1W9Syu3ayQfLzixjY",
  "key3": "2XUXauydFsEtBQJZXLghaTkaW95BNKAcdwf9qkmVqBnZKfo1Maqa8bMyKdoYZ11ny428oDYi1SsxrHboyAFAFQkB",
  "key4": "2bBKg2DfRKuDvPpo3UkoGUz3NjyCGYurEyS9GyUes3wgXR8ZzXN5PMA8TvpCfZWd9mcDQjnmRVPuPW1EqooDPyvG",
  "key5": "2GF3mdLC9PsxVb65AtE6Sb4F7YtknZpB2hre71ppvGEzNBfHLFcXhi9kgujGjz14xhUYHEBPhWXXymRCy19bE1J7",
  "key6": "5mapqap5PTaXSwnQ5Pn2tMvSCjwrc1zsPfq6Zasbw4TkQ8z3s4N3S293T3cTFvQnPDDPfhbNNWyBj334UNfnVjm7",
  "key7": "dmcQrGkvdFyw4wEtrqJdZ9pGYHo7APxGSK8C1XrNedC7MQyHponDux1XUq4KCerk86AACwxe55ynCHhqHejGfBv",
  "key8": "hPtPS6AiMfvmBE7mUUVWpdVrkCGoV3W4sPAWU8DYVPpTKb9k7DznYyh42DK1xrThDU7bBtXAtBnooCTumjogS2N",
  "key9": "2nunR8X6FYcybGKXUtKUawRjN79r8iXYENdVPuzHSKxsp3796ySFipRPBWFCknz5biAcbkHWcxYC9A4DTydZ5g5S",
  "key10": "2RQminpELdEB1Tsf7kajXvq86BPT5fNszn9c9JrHPK6tgysVPxQWQMuRtYwQNBWkS58D79vUNfZ9P29HNBd4r9ui",
  "key11": "4JBoSdCMpthwKYF6Tdx7DriMseyxYj7RvLCvpWRpMDxFv7HmE2hZqvtEG5TuHtbziQDdmfCNMjn1CnDSaSiUGSNX",
  "key12": "2ndd86ioTeedgGAZ4JhbKV9VZ6cJjVsDMDcHZYkAF8BhSC2a5hV5RLd2nv4XVFkGCLjDV4dqtRWn4d6yYu3cz6mh",
  "key13": "3Vo1s3ZCg3zwvUfFLZxBFqAifsRHzbV5SVS9Fbz6wz7NAUqT7mbZgsBVhL6nS6antKVexo1SkM35347ZiDA8aGWz",
  "key14": "4dEqFvEBenfUTYaiXVmmrAQRUZGArLuJkGcNQSBoeVhUsiBZWYogW6p8bamjkLpx16tF6iv1HCsBss4k81dbMuo3",
  "key15": "2JyD9Wv8saoPQKodTZ5uX1C7RufmWYU6mq2ucMt5xnCiVVFVPpVH2eTt48QYo5AgHFp5EYQ4wEhvJKGGD64m7iSy",
  "key16": "22SVg7jm9AUyBX4tQf412NSxKWPng6VFQ4Fdt9nD2zgzZg8hTgLpgqSMmtoBMyNqsQ4Asry2LnBRCeycVtwzqLkw",
  "key17": "24bmMagQwhXzA6TsYaiY9X85Ydxbu81LnrUG3kzcFBkWQnUivwrFFoQV8Wpeh5KG7MVbNJxmRj5qm99iZGQTXhBL",
  "key18": "GdfeETj66PfWTebQGgkYdNWu6BEK89JSH1k515Qen2HwLM39ZzTTcsYA2bkPhVJXWnyMSGaQqx9Ri87VUibZhmD",
  "key19": "3NBHqkqrRaeHmvbXxuUt12MRYLKdXyNkCGFQet14KN6BMnozAw9or34aBayreuLSwSqoAnZEmDrcgny2LTrgo1Wc",
  "key20": "fBnKn4bEgCdNXqLmPJUEgtGNKHqPzsFeNZWyAgFk8azpwXNS3ybvjNJnhe57W8HGxwLigY2UYXzRtyrVAdvdf8Y",
  "key21": "3rCP9Fh6KjLFiQdbXvfBxoEuSDDhhyqpVFdCH8Bw5wCdFayx647R4DQqWuPiHfHMMm84PYRPFyzcNVHMzGj4QQsZ",
  "key22": "3iLGodMq8GVn7DVyFujPKS4gSELm7VfnEMu7unM5eLdfntWfhbAUAZckKJGctFfwxyEtc3WxQ2nsei6xzqkfAimr",
  "key23": "5E716uQVk4cKFeeXJPv7UnVej4a8vrLb669ZvhF7xUK1hYrRCXmoAVSZi2CTrrHgLxzaMaLfpZPzcWzfBxqM7Sdv",
  "key24": "43jbNhdF1RJfodBsxsdmoqBvqEf4j4aBDensS4uztiMLhmRqfaCyZ8pqTpkkoY8BFCRRCbKpiDsdxxRcMVVCqHKX",
  "key25": "3krrYDf7W4EV7smw982DLncEbVhFR1RtGgNKdeR6K4qPj8mLb6QMGbT1f3tMRNZzE8BT29LHTMLnKsNLREnRaAJx",
  "key26": "5qeUBEypatQkUqbLLdbFXi94kiFUQhaqu5kVLr7DafWE4wFdZrwKcNtSPNHXfBpfSZSSzw2SeryMnXoPLLnw79wQ",
  "key27": "4Mgc53Lz5sexceEppBFtLTNbXb9w68fWG4h7ZEdnw3guTt3mNZsAHEu5o4VbDFvjGDRQysGhaCaAYJAjQ7B3Tdg1",
  "key28": "5eVPAGcPXMHYUrwGoFXGarmsuNFdBGPfDnfJKRQP4kNM2xGV89ioJ1NeGR6ye8CC6fvYovtsHDNCGkTNNjLpMx9y",
  "key29": "5vwfqPfNhqoG9w5MrKPag8vpiiRA1YvAYYy8ARwtu6nX9CzBZt5NrxAchJiRktGjtf3sEvVpsvApEyLNC7J3VRDb",
  "key30": "3jahqttQZ5v9FWXmyEjkC798RrXarjxgxCVoAFiwG3iT7YZapKY83gkxqnE4UJSvYpLKuvRB27bXLkwFdig2x4Qi",
  "key31": "5KkZu3x9SC8UD6LPY38z6HMJcE54fVLUFTAuE5v7FTsmGv8aYXeX8Vr5tNUxhUM2LiMjkng3hDk3bMNSEauCmHVy",
  "key32": "2rj2wveq8eyrR5BXMcUav73NmcEvo3h6GaX89hmbSFyhxUQDTpfeRQ5BMWRW2Ca1gxyyvJiPhrPj5gpqLicyga9J",
  "key33": "43UrfC1U7npr7zp5Lrc4CswAFVpvkpHSdyUgq68PcEXAiApo6SKGmYtWrSMm4Vb5MrDwaPkLRqJviqyUmR6vNpQi",
  "key34": "4qGaWZsGXvQ6KgdXfDS2BR3m754fsaCaMxnbuZuykebSGQH7JePyUdJoqEem1Hij9ndGdyYjc8sCeSFXNRVmRZUc",
  "key35": "4Cnkyd6JaGcUc9Xc9gdLgrYxKuVGnK6ozGEaPrKkUVcjJ1xeUxzkt9MAoBA1RqdSgHjFj41tQWNEiFFuMMUK5ruF",
  "key36": "YgUGX8AECgpKBFgDy4cpAD2Cfoj2rEjo78gSXQa28Dg2yzRsJAPN8mgspdKVGo9286qfBpSMAUsbYUHKdFYN7ek",
  "key37": "3Jy2caUb5qxgB6QSkpXxMQXvXPhWDM9g41Nb3Htq3TP7y9REJQ9ErEK6wCCgbnwAt1SD2wmznKLah4kjn6Rqscy7",
  "key38": "gaoJmQHJT9yRmw7SS7BcA9UctFuZqj82KTz4FDb44gNv8WjWpwUr9PMr6gu17seoyqsc4pY9kLrGCKoJAkFtATj",
  "key39": "F6Sbxw3s1396GHRiEeDHKsu2Ghjb46NoujeUpaLUx8RRKCFMECwjwav4BaGvW9eHBBUyGivh1Yu7uEYP813ppz8"
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
