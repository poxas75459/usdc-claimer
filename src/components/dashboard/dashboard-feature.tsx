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
    "4DbkWR3gBQu2MZsYYF66gWTWTQZFi349R8QZyyDh3t3mdGpEncsMTpHw4fFim5Ed11uaFewCzWq5iyNaanQSBKrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Rrh47gpeeBEsNuBUyurGGXTm4oyT5UFnYWm4QaeqvbuiZaQ1NRWDEpv6qjwWg9tzStFBbQAELCPxhVPy6oZzGS",
  "key1": "3Ga87HT58jb3i5PdTQRAefqPb5aRfevvbrZpryQwEhrauhiWKYu1Cjot6uK6LtUKwuG61s9r8PZonThsdYTTtxEE",
  "key2": "5Q3Pk6uugGGL6hnzJNCYQq4vwYnaGoMKBEy1zCgv7Fe1GsRixpbUFquvc6VoXmCZgH7mrAvmCMAAMrMmEYXSjwrv",
  "key3": "5jDAzRJ4P3UiUYyoV9Cjk7ai6TnPzw242nWhqtzTFfbF4dkQMdR3dk4XjMNWRrBkrf95Q2cQJCkLpWWsvsbcSQBT",
  "key4": "2okcRuGJa5Uzg8xFNnAAXtUntbQ6wnYgvViJy4P1WAVpiEvgm1P7Yv9jGKVL2xzMb97cCQ6ESQGAifKdwM77sg8H",
  "key5": "48qrz9RwtX1a1ayt7eWi1F4yzZRXwyBwHZfSBDDy3vbfFz4RpqbbnCmknQHi5UijVeAKtjy4BjZsZa9cr5szw59D",
  "key6": "3x2oLsK2sasXtqAMZi8HpsXvRGQai6W8H64HQp4wMPE7WRBUX5J1QeymGkWSwsH1Mnp8BszPk4GYgNbFcEQUJx3T",
  "key7": "22LkqFyGBAf4tWM8EqY5cjkDgnLs2FDp2QrEBk9Bu5hzx15E4VwwLYLcoXgRxd5RmqDwHwF6M53fK22HjMD9twan",
  "key8": "7LvazCwHRk86DNggtcxnwrNQ2GpXSd6bCMq8LJsfiNvvwcCifP4WVAmRX5Yr6vACpcpgz2RoDWK6ajBxK89NWWJ",
  "key9": "2pKMCzXA6UyYXRXRCfmZo6YwQUEmRSouSBsdR1z9RTD36Q9tpX31G23Zg6HcGWxywNqoCxjp7kYTD9wYH2NHwGUW",
  "key10": "5LBVb2FUUZoAUF4PbkVEWJoFxHVLZ2dpCdcxjHhL6JdvdRNoMYuZV5zjYHV7mKUpBp46tJEhqvusnjBK2zN6UMEE",
  "key11": "2UGJu9AfDgyPuvhckfFTXhtrdqAoHvYLADiC1BKVNW4AExjUPsEr9yAmkPTo11ceoYNPh4rkWhMF7rBTojrg83wQ",
  "key12": "3raht21vgaZX98Jot4eP7fboE5kpeKamDqBmRAoBT1ZG3jX4GjNh9bUcCqE5EqRaq8AyNoddnqjqi2bCR3jgZTm2",
  "key13": "JTBQShrNw9ZxuxC3rMcUd1jD1Shd3W5f6vy6fY4qvTfPNnudPqFyFuy6qhjfbazxivJYQsUN5qDoy6otuKjG4tm",
  "key14": "5Goc53syHc7btz6z5mX8KvVPqqDoAh13e9yunJd9aP5HUNuDUNMzs4UQLyr7WQj1sCSTV6yJUdi6FKoZFj3cRdih",
  "key15": "34KKFwLACdUwKojKYBqKNzcbmL6bZhVy1Pf2CYxacrkBHKCaQnpoK1gN83K6jNKjsH7juPUoo139jGBj18SsXk1C",
  "key16": "4Cx2QVehgCQe6ovCrT5gsMHkTBnWnFXMX8Ym8G2Ggky5Ap9uYmgNRSR5jp7nSt2TVThvhEN9w3UYtLk5Y123PgCP",
  "key17": "5pi4abk719adLq18CQPwTVYrZJZsQGTsp1BTLjcELN6BEX9Ac8SfzXP2trDSNdVGHx4jw4LUiRaNkF63icYTpGGC",
  "key18": "4VtSrLoMAgwRT1GZXmNcgKaRyNzzUZSkPKVPgTd7Ftz2YMqt548i5bEUWeNKkursjNz9WaAHiTKBUDf2LeBb4BeS",
  "key19": "wkJffzjk7RuoVVPmM69rKNPQtbTQ5SuM2rWiCCSeSHg6c9K3oJf1gaD46zDAo4vgeTFdbzLLzrNY1yDnLPYgYud",
  "key20": "YuCCVxGbQpviPHy3aqD4dRMqS736c5qj6DSRM3LDwbNfiH451YfWd5KzzyLfFZKePiHn94bA3vkayWK7F27nHGK",
  "key21": "i1q5FujKgwCFzYCLGWV7qapc8u4EJG2pJdKogkV7kZZDMgTJL7fii5rwRyEAi8VLTp3zNhbxmkVjz3cL3fthsnC",
  "key22": "JJBeawbrGePfdbjZrKbU5fpEWPaAYYMaqphoXCbBvogLwCajUKApiTWDSCs7EVr78GUfyUGtpz4zwjcrAgZPcsw",
  "key23": "33emjpCemvJXefLZfkmo88ahZi8AEJdkZEJBRRrFF8wSTmnRc6rAYZUCYXrWYgQ1PE6j7sLA4Ge7sTpvSgHYyeWf",
  "key24": "4Eb79BsdXT15jET9wJsbrEGyWDCLGrraYmBabMi4mA7TGSr1brizFeubkiiiYHmr89xeXSyEcUcXyQYPXHLRryfP",
  "key25": "3aYG4EMZiLHoQjwXzPoPPdsz3Benj3bfFqDeACx6ms2VRgHL3c1n8tLK19EfpV4u9ZHbDQAnzwyRUzrJjJSL7wb6",
  "key26": "3apDiuWPFZk4SuhmUqYmWfxx3K38WKTeEGT8V8xcURw34644KbDisSW1pWBa4TpkdXRbjVRSDN4vy8rp2c12YiWC",
  "key27": "3jnTyb49y7emk4c68K3Bj5TJhuge2PUEzFURuvAuuMBpjBjzdiQ8LuhKdq7fxBB7pxFDQdXXUnpd8Etsehm25Qw",
  "key28": "2kdoUTBi8rkL6bPh3NfWsKEpRGsQu3DnwC1FX8FRZnjeaoSnVv4nNyfsYV6W4JUL7mhpGFgUQPqmXKeWRmrAExKf",
  "key29": "4CxPTAvU7qf9GgtyF3tibcEi6mbWfSmdAJJWdngnD4QPRxDv9iKoXC1rsmg6ywEhVYHij6BHWnCUnsNCzSTTQaSi",
  "key30": "38QiKApJ6K3LJ6N99ZLKv8MWA9vbKg81iAwCi78VVWji2VgXmgsX8k3688TbWoE3LZBQ3QAsVzBA42My89v1VWQv",
  "key31": "4p5iiqnmvymWVLYwGyxuQTqyE1ib7zZeSgQ435h6ZWrmPBZBW5WL8umgrmESMTPTVrfZVFqvxdcD7S5nMQNfNojT",
  "key32": "3JYs6u6tFLxHwtjbBVPvJjsM3dU9F1hmXC99RutwPCdJZ59mQjVEsVxRnDXgL7mLfrzHyKtBhPWydvz2rnWd1pZH",
  "key33": "RTgHVBZ47dr1sQ3biD1i3iKtLWrwtC6syfEr1VDE78PyqG8ijgRomtRHR8WCvK49jzyZsgCoeaqZAjJbdvdzTPa",
  "key34": "5AseoJ966tiDMFyjsUJs7yg2QuVzqT58TMDZ8VFzT7Yx6vmN4szreQZ5aXaLhSUjFJ3urkdaBhaJ653MiPiQWPwr",
  "key35": "wkm73bJ7WNff8LqB5TENceMf9S2o1qrVPMXQwMdSm5zjMZLWXd9F4WJWH9xq42rfx2g9tNkxFbJjs3kVG9MejsN",
  "key36": "36R3pBYQfizpFMgbfVTe8y8s9WPxdhAyrj1P1xkwK7QX8LNeptNu1WaMkKQZVjmN4haRkknjKA76yActMmmRPcmN",
  "key37": "5Myt6cBLPx1D4EiZEDt4zGRox8bJvXFXubcxJq5scdBuLGK4KsyTWPNLuHkNKNSgju1JAYPJBUiog45GyWdRxuZy",
  "key38": "3LpkwRm2fPkVLdFmuFyFCURqBpxkA94Y4T6Lx9tca7bdUp6Ji85hMwubx2SLyQcgKXji2D47NefLQCyGwVHZxAu8",
  "key39": "29jZbaaTiTGAJnWiR3oL6BboFYcjuaSzJFyNmKNtaRdSUF8b31ZUfJMZ17ZD4Gs1c7qD5PYfzQsisFkoCP33E3g3",
  "key40": "N8p86wueGzfBWHzRJ83jbGfZQ2Sn5rWvKgwxf8ynHUpwWXKVo4oeEDdiLhQsMnSG5tuSeHSdQXFCtTqAcj6NJ8U",
  "key41": "51aZjv3mh1RtWVtiDur2F44bPR9xTocyJLb1m6et7QtZRoyXk8JLsqfqTeyTsjEKovP8dNm9WUrdr8Yrg7RL4vav",
  "key42": "5nQ3miTXSkngazWBqU7r3KPzB1MZwybtqzAydLm2qQwVitaFnQJjv4ZFZHi1Fas5Bumt69YpjkxMprr8hH5aVkA9",
  "key43": "3SnT6jzrcHpisJPPzJr6DvxFidqrgngQN5tyTVcthYH2ZqNNxv5gtN96cYJMRFcqypdbMvkp1bQAmy2vfGtz15rt",
  "key44": "4hNQdH9axSibxammnFVtdgfzXAZBR1LjnpHaP5B7xpKAdxv1CfbLoq2PwYena7u57TADh72SMNKR64K2yFjXcgmK",
  "key45": "4XRHrsNcemNYhZdSNcWsncdmtR78xLDrwFFGSDWjHSBAQPJK48NVTetAWYr4VPggHqFMNrhUTYb389zc4qyVUhBB",
  "key46": "3cqYoijvv28dpP3UurQi3ZAmduF3i5xSgjqWa6YaQiYFDZkGfqwM2RngJcq2RTr5c9njEY1xLuxMHs5CPFKvXW7t"
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
