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
    "4NMUDCKDC1Jj4eJCf1Yhxu7pqditQW2VNhNJJN5wYTEVCS2EESKCtB9qNg3iMJZVQ5raMycqhv3yYW7hsnt5aJci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "522vhH9v7nX99dEkD6cHELKSMf9XhTGDFt2njEqp2Mfunz2ESTR846rTQS1jHZ2C6TpyXJKKbXaHVUJey3fkS43w",
  "key1": "4Ggds8Ng4xA5E2sRed9d3DW8RPJHsiuTfTUtvh2pJdATQBkfEQaiXR6gyeL8D6h6B9V1JNbBPC8zkYHoRpyGpwVM",
  "key2": "54WNP5wo8pVomh8BqeTXV6UUiQm7QN2k8EfNPkvFyHpEM9tz5DG8LgHoVQpCpJWD4orEU5eQ9xbUXrS68shukdeu",
  "key3": "5Z9pqCjRpb7VmujRV6CRh6cFetAjJRKDoRcd7D1g7xjBfEDu5T6jPwGCEFD9HR3cCgir1yP98eSXpyCrV13TX9xC",
  "key4": "48rDv3pV9e8Bop2rEBTzxD1snUSjuBbNCcd8U38yEPZFCWnJeB93txSAUJiLKxCKXi49VXi9ck48BPoJkC2Aa5HV",
  "key5": "2kg9BzeMNRMfrgd1duTpnMzni1u3StEwghv9WFMF3X2uJDqD5bhw2WC9e2i1oacfSPSARw3TQ8abG6xRAXEqFtdg",
  "key6": "2GuB8VhfobxW3PX3zRyZSZm1ZNDK7N1ZUBfzDFMfcbPzacN2Mo3ByaDN8W6wZ4BqUbXmbYPtGspueRnVVkNccw6H",
  "key7": "4g1NW4bduB26AAM7AbQpwAJiRbdgekgynnUo4jJc2Je7Qp3rE9dBZtVqH4ECnNJ66z3khsq5rddsXMdZh6Br98Fr",
  "key8": "o93ibPyfxMt9wkgJoqJBe6Ytu2QCFP8ymSFnAjiawamiR2PoCixksBF2dSkaLFqE9GSY9kKZAUrCssBAkmsdtag",
  "key9": "5N8SCHpF8hFUAGSeqSN9Awk4ZL18tAEdwWSHKraZVnWiha8KLckNLzCeuseDS5emKfPzeXw2KPwwyanav6htAHAm",
  "key10": "hSkyGoEMNo4Egt5KVYo4AkqbVVEW9QodDcEVKguUQGGyDGKZszrVKnhcku3nnSa6FC3xD1kgDFAAN3r5y9JybTt",
  "key11": "4JHQ5RXC4j1BYeqiQX4norEZ9WYmDDFVUN7Qz2mPuVxRHKtXRp8Cahw5i4mCH8Kxg7VfsP7v5J8BaBGtpKNPV6sK",
  "key12": "3MT379spZKzPhkCNtRRMVxrUNULzgT1mdz2AUVtmx38pkt388ow8whpW8F2J2Pxhe6i3ZLi5fqZadPmtm69PuhpZ",
  "key13": "2xeneMU6TWSucKSqDK1RnioxsyJB5Jws4HWzGtRX5jARBXBtbdy5FGxCQT7z3E3BkHiDnLj4fh1PBjFBy4ga4FSx",
  "key14": "2KqpSP1J1sMo8ck9aoVeBGF4HEL2b6sWMHz1ZmFkaZQbLM23WL5xPhTCZyQrwiCox5vZ4bqohx3k3Mt9sWMsxNYR",
  "key15": "xV4Ct54cgDza7ctchnbTSKRbiiMHFy7onJcdKTG6cYoa63KF5rrqhhDvFV1eX2Tw25yksWcbr8a5UijPRevQpC4",
  "key16": "3K8S7Uueod8H7iXVt6xKhrX9weuEF63Yc9PbqEyTKGDi3npmqtyKRBacCKVJncPrF4tjvqenZ1vieeFgkgFTLyh3",
  "key17": "4grAKRie3iXmQHXmH7a5RQkgKXdAL2R8nW3EYQhTWMNMPkoqqRJ4MDrQNPuUEFv5SgFc4zHcC2exE2HA5UtWq2HC",
  "key18": "3TLmRMeNwjSQqRPkzCvKChrfGyNYaU8xVcfakJi5NJFnW6yv8HwYtKMfSSmwQSunDy1fR1ENXJNno4tKxLUiZyc1",
  "key19": "5X63MfBLrnGwzJMsy9c4FubJesnYCMsZVYStgr4MkCdAJ6dpvV7krUHEcdjQUz7yVqKUEH6LJaQuSLbiaezEhwfN",
  "key20": "Bg2TCBK3W3zbXZ7kyW9kbyC9BA7PYg1JzEeRkkodiUGbCAqjSuvxJcBusuWj1LKiDoUonyuNxbChU82EXJH1WG6",
  "key21": "24JcsPUoqE1zjP1chBHwdyvh5rUNNHhNNQpAFoGRarxzbbwHY3pYGN815C1LvKzopMYFYHrjfzPm23Qb3MzSGj9u",
  "key22": "5qNwMRRKoxoMxjYfZZUY2k94t93dAZofoPqEWMb99txjGtYaRfp4qcG8V4tt6uVcauZ9nRJZnBD3PQWFLBMeNQmv",
  "key23": "2qPz7eJJ5F9FrcbfZ7nVDpHUTBQjuHe7Vsm8MsAK77ZrYU8V15yAN2mmRZdcBEGRipwJiYvAHxXD2GuKBmnbCRda",
  "key24": "4EqdTZnBTS5kXD2NRZ8Ci63yy5m2Yi4dUJpr77d4YSjMBLGkznFvCPKcnnnRA28zWrXYYSWyU9raLtKFrqmuHBir",
  "key25": "4Dku29isfL6kCVGbVGhxUHNkSrnta3XRmcAZPTfQVogCKFXWkTdEtoUjMhpzRkoXaDSHMg88q44tGUhp9pZ9RGA8",
  "key26": "dD2awB2ngkupdSFJrmK8Ua7qfZRGDXmaERRJYjnQkqNKdsdbAAnBt3NgCrVYt1ZHpTCriSDGYBqLTf5XfCGj5Ed",
  "key27": "2aMqwCXtbVoEB33QqWDDMaKvXP13FPNchqWvGg5ZFKJ7qSuDPTVtEV5Rf5HvssXVwWnVSk92epbePb1YoxkwTpf9",
  "key28": "PoDGVddb7n6KCFv1LVgDspuqFQP9hBW42FpctVi3hWskuT9BKz6WJqNnT2nY6VG2BtHvzpbCJqN7ndgX7mokWNL",
  "key29": "4WgVjsKRsdYFNfBbKxq1fgVZdERZ9cGjhwyJLQtV3cT114xxCEyxP6TicBMVBhuK9kFq8HyTjZzK3Qja4oQQq7kN",
  "key30": "2Dtg85W5EnELa47zZoB8CEAjGnPKMrwScSG5z7dAG6KgUWEG1Cev822enGAcgdadbxMYAr5gefMTd5Mz6jAFhKid",
  "key31": "HGxPWKuK3j3nWwQ8yFwjhyvay7CpuaKHS5yNHyq6UqudWVA3dQtib6cxAzYo4jZhui7jRQtjxgqh9VfgKX2LuYr",
  "key32": "2J8aDCDZS2HLLWNhtAHViQkovqXW97TMjg1xQHZGcqf31sTS59e1TLc3pTD6LRY4my7TTCobRMUJtzL7HM1uoSQP",
  "key33": "4m1m1XUjARY2Rn1Rv7EwPHAfFNRC46DyWXHgWqfEMoTM7Lki9qw12TXMuWscHsTguk9tudzj1uaRNa4p7RFQ7Tsx",
  "key34": "3mTjF4ELAXF5sJkWKzhxZ2Kqz3Fr5UcctKTU88Y2z4ZCfczdMCf51WtXLFgYCFWLC5NCh4PZdCZxpaiBF2kuBbQp",
  "key35": "2ohqoiMnmqEJEr77pAUYdcS3J8D1jBHYMUcsgitzsMSBwD373zy2VWZiGa9PLARdcwjmJ3RMM9vo7tW9XBDJCry5",
  "key36": "4eCTJFxTw1aSDtVPC8PfA4WpECNRoZVay6v9Pibed8GjEhiT8i2mNBYdZs4Fcg6Jk16YJS3WpegCRtATopYPv9Gg",
  "key37": "3GY5wPr52uQDibxUwU8DTUeDmQrH1x6C3CkhCMYtYvEbutvvG6Hfrevjp88cJTK6RDQA1y8DAVw9DFvRXAbfiYhy",
  "key38": "3hFadDFHk4SwSSkVsQ3g36SAXjmEdAWKHcudJUZ1PwkQ3APTLmSKk8Yj3Gf75J3chPVpaHUA1NF2hHz2CdoV7GhP",
  "key39": "4Wm6QncmDJT9Nt8xAe51zas9RYvPVrb4JK4hLdXEMRY4HD7iXMLrb1o7JSjNbBMqzr3PNtQCifxhYe9sLavmz5SA",
  "key40": "WyKy6nHhsEdEGPym3gh5EjM3iDRKkUuTk9W92uCrbT2pjyoXt3YuyXraJ9kEc4fekbcmC4XjzXHMNnrCdtfFmV3",
  "key41": "2trNBsTXMBHb1YFeSSXGcW8UpPvGSHKMZPfLNCq16e7a5zBc2f7WCqsP8HnLZwmt5s37CCx2ECWhEg8Fsw9LYEva",
  "key42": "4psYMfDY8PN5VE5iv1HshwvYT4TQKw8vw64NvGDbRbXuGpRN1EaWmazkv9GgBoB9rR8dmk6v2nGkCQgScSsgQVVJ",
  "key43": "4K4dG5m5nDCo8RNGsFdYd7Dsg65RaMVPQG8gHdgYg5z2QR7qDVzBLNPQzn477e4UxxFXSwGS2UVTfAqEmnXqnsWV",
  "key44": "3MofZupGKasP64haS5DZL5u2KS9yvMyffiXy7mUx9UH4SQ7dJsSXAaZjVSTu2hvHVVb4hvEfp2xB91PgAeDtWYJB",
  "key45": "2YVaeNmXD25HAEKgTXxKHci6NkB2pnre4WozRdgVh9FPh9kGLdSro9ZbT2opxvkMMdKvPwKytQXrrcTUambBMrEe",
  "key46": "2kjA7NoiQfrM3wQwf7GZF9HTXfYnGMDVL2T57FeaqxzZD17pdcAWrmru5mbgpPPFVsirhN6jvXJcCsVZkiBEKwxS"
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
