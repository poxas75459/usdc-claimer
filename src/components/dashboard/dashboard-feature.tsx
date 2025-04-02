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
    "2Ne7LKR997Ma86iiJMVW89FWGtN3C1kvtcuCxUqHkqaLbcdgRySkGvNPCvfi6jZgsw7UHJatrr78drb2kzqAtnmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q9DQ6RKNRNgQn3sJGXqKoRZRJVycW1BwMm3WdQfTJ4jd73NoQRkonJoA6nop3cGGh8nEdDDxu9xd9tZPas165Ep",
  "key1": "3XHMLDA9mykshcQT6LYWQz4v7CucebzpkpsNN2fCdnQSHMFXE1sfViwRtECxkzrmGG5XXyXYtjkeQjxpu23BbB3m",
  "key2": "4whngq1yHLrY593cRGkohLADYWtVybMjSQkh42SSpPaooEb8rbwBYctuoYXxfrukjf4XWLxsZfFqrFTweCA9onE7",
  "key3": "2Z5zE5F4ixsVNxifcbGnHrXH9ADAYWwAbHExDpqHSpnn95NYotQAzC4KqLdkEA6MskyQ9Xp4hZrY8BGx4eT2VjQR",
  "key4": "4Nvj7kAToR8V2fVpt17G6pJanktnB77FFeBmhNKdDQ3b273xLJq4qasrV2nfkFVc1uV84xUPULX4qQn6JL6WBQmp",
  "key5": "4wPyQweiTpXnWvY4kQL1J93jojosEGKW5W84mez8pXY4cfGMdMUJPGgSzcDTXoVpd9LSTiLMexL3tAFzGwnKSwt9",
  "key6": "5YMbPCKomDvLskgNV7kKWzTSmkBDA4cFejgdY22KN1vn2Mfg1bHwLsU4UrrjzcywhphDGbyH8dy9gZxUWJMpkyBV",
  "key7": "5pZ3nMEivCjSbkz6KVthoEYCV6EaSsLa6rhMaqdZwnSxeFCBt2vpH9EwuZ1scqoG7KDWB7NUWPKfeAChKsf4Kvx6",
  "key8": "2kjdKeggHATTL3v7GYpfSkoeUjA5VQ6JFpS8jqokXLrUvnMzsD6tQ5WNH13DZufxzjeMJJ4rqnYgdbvY3VecY7CQ",
  "key9": "4R2Dmv1tzhBuEtknqG8KmQH9i8PzLUpf4eAEmhF88dFhadsKYC2epJf47oW1NzprUmtakhVxh3ZhKi3b1SQnb38g",
  "key10": "JECnmiDq8veuV69Fpt7oEnm8z7g3zc2cjoimG74u9jtjGDqD2DJDjcmTvuKmZjfxNWgfLU6kX5oFTtSdH1Xmj5N",
  "key11": "2oWZNDef8cjPp8BAtqrRk9crkWKiatmwj4kjbWHW1SjQrbznxMBt7VYr6qXB6J9jPhjTwD93VEYtqJZt5KFdQjW6",
  "key12": "ckyPHrK7MLooCy7srJrqtNU6KiDYPj67HwmsCv1kXmeXDtay9Y5Zw1aSLZVU4JFSzaUi4uuJG4Sxvv3AAP4kNHM",
  "key13": "3g52exxYwj31QceWxwSuvdG9pYMw1GNBdcG3brSvcm3gaJXMiBAPJPmgGd2wRdspvHTwRAX8CMWH7PUfdUGSiLna",
  "key14": "ziaH5JCGWJau98E5ro34BMwJeGQxoNNvmsddVHUGMWF5uvJF9ervgu4qnGrDsc5frtkjvFE3gNU6ypf8sFEKkRX",
  "key15": "4rw9g9NP3UXH8Qyei9J4EFdcgv6UEx2eKezQfGhpMgGL88SAauKgeKQASqRVJPMNHQ8pZ3xNN9sgu47iVuQfTgkB",
  "key16": "515du2DLA9MmnT1e1F63RHtt6BUue1ZkSHyMTePCgbQz9VGDgfcEDcHGzuazrQhSGTYdFT22vsWtH1NY5iZyKEht",
  "key17": "2gSCE9WJxPwJgDhJzFPXgKnsrajJbTVkRGDWX1789Wx1LoRM7dmpzPiwoAhA7MdmLhrYRoPpvmz4X2Si17D9BxNf",
  "key18": "47Thb4K6ttzZxTkGWc6CX5rhZt2nG1KEDGamPHA8cXSuetynh7PM69HkiUyjNaSWDZ15KqaoA8hEYfh4fUrHqxFo",
  "key19": "zSW7YoAQsmkXWuRTqkba4j2eyy8jP3154AQJ6tBbrjcTHitgHXbDeA5DuRH7JeXNYr5kKPpQ8k5PmqyZk2S5Cma",
  "key20": "58RcbxLmnMwGK7JMhm9HQM3twHHL7JLPZ2eFZwhSdyd1k9PQ8rvnqSXQse5Da2anWnj12FXhaBkLpcemsYrKwh9o",
  "key21": "5JXKFwyAFCVasdhkCpMgue953aur6h58ALFtUWPD9P9kyxjvuZ3AUMLeS2iGQhW5NDjNBRzYyiqJuEE34JJtihmk",
  "key22": "npAUBksVxshESF2hkaWdwbLtpWa7okvNaLRaZqxLhmgkEURsLzxQpwke67N2xAoeYcTWft4w1nn7q9wq9DzVKcX",
  "key23": "2rDwQQMrvgr3gszQNd6fjCuW2iDbjP2ieHgQRY7Nth5kSvHoCq48s3Q79p9WTgsKNckY7x96xZJGfk39qz5QW8p5",
  "key24": "4jvCLXGSKcBAqYdBPzWyicdGrXUqhkoihJFk1qeTnuwLUyG52CAVwav5AwC3Gk8MZ3vzyD62DfoNwqqrw2HJcMmt",
  "key25": "4B3Wqmyhzzoo6SVvDgJ47ajqKaZzgxanbVShkPefTzNTCGoPwajP9fMr7YgkXRw7r5Kz4skzdJSN1PaHPcpfWLpv",
  "key26": "2oUiRxFxkUEDw14bgrNLXpLoWd9cg9736AspR9g5qmJRb3n3xTLMS5sq33bYVgvHrXTiGSJWN1T6xzSf1JrfCJ5i",
  "key27": "2tkwGF9zsKePgdBaiiHtbQxHeUyYawwSessm2GQkfURt5UcdtvXCjMbikh2sAhkwxNYYWX4f6Kxiw5oDG8AbbiAb",
  "key28": "5wgh2oe9SGjAgL3oVmz1uUURL57mWy6zzfgdYE4p31tSJQdVaJ2JU9HkHd4QbqzRq5n9Aqsk14ZadQdKeF8xWCRr",
  "key29": "37LtfndDv2hjJCaEpVNkhWKbmj89bGsBK5uZ2V6qJ1Qx7YMxxv4VrPJrs4aS8umfEXG7h9YLC8jyQtLmE79HRHrA",
  "key30": "2Y48XmCRpBUZN7kdwdVwFgaucKRn8REoeckAqCD7CUQ5kKidtXtTfWhtHMGGvLgQxtmWq23GJ2H6Kh9JiUoA55v5",
  "key31": "2L11YGUqvt1XcgCnoa7kkH7NnfFLymcaySnDEngqyRGBaC4iuzi7LYsbCT3vkMYNcrkBSPyXT2r8pa4XSgGy2NHC",
  "key32": "4mygvpsTbuhJEWhefauCaPQEes3J3GJ2XGPQiu5So6MVK5Rx18mzqhFGdwmV6Afr755rUucchQuhMC4fqpb6KRK2"
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
