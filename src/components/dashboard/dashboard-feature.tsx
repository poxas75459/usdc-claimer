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
    "4Doh3nUxToUSyH4aT382UAGCTVbeMT1EiEMsk89iGGxptNoRsSAopRaGcRdz16Uue3GDVmTjNEyFF1M3gQVzp3Qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "227LoMKij2KRKAJabiD6k4xRQUkmGDhVdqZR513maMYo9Hrpikc2W8gmTQaRhD9PRrza85kBBhxk8ekXZSZ5UjCL",
  "key1": "2PdxWS8q1oj2Sx9t5N5gkjTGtqoC1VUL3psunhjNgdJQk3rJgBWw25zzYdrEt7uZeVjtWhiC2Mr548H9fEX4bSuH",
  "key2": "5fzUfVD4GJCPfseA7usQpUZW8w32XSyj32KzorbHi3xjD2yAdHBuwAVbpERqNQ71t3w9rdREnxmm6txwmnWG8P44",
  "key3": "zWKHBR5XXe42tYwsSvfgnpXaT6ZBVrUoqEnzzh9KXV5EcF3zmsiWHrkvZKUh87nDKMBmpwUV1eNq8v8fhAB5fMA",
  "key4": "294Kwk8rUJW2tqQaUM8dbSM1EAYdjctJdfytAvKaaXsbmNLTZtqJi7fvBgpAhpmkrsgb8izrzxKLEoLAwouVrDvq",
  "key5": "5ZjmtGvVe4wTjbW3jfAfCtEL1KnTGQbqbDxUGz5213MB188iPcXc5beBshuAo9PiDpxTZo1HkNG5DVBJN1ZKrYX7",
  "key6": "4YNjjVKz9tAAgAAXSdr8YCjJYTVh4SF15CnZrLfyxAptPTDMb4GpXUcGchUvNFbRjFVzGudP2VvunVg9C1XEKxUL",
  "key7": "sehwLcyFSDvXAEHeZUoBj1sGzRHxVpLZC97paraVKtitj2Qqgb2U4n1nzkb84xPtm95zJWCmtFM6m9nX4wsptVX",
  "key8": "5BnSf4kn94zZ6CC5iC7DXwvKieTTMn6TnwbzSs7xgNdyC6tNYwXGGXvq1gS6FMWQBT8aEfS2S49SihzAoJDgfXJe",
  "key9": "64vgQvZGFanVCFsc4C6NNxspgNUpEzjN3yLeNSrVGkQhDfFcmpjoGxYRUKP8HXdx7NJ1s3xh7Qiqnht8cruktVb8",
  "key10": "5xuCS8SozwG6gza1TzwAzLjCxLK8xGWewYia3TznMCbWuucYy5db4HE5SvbDpfzkG3zH1A48tWNMDLLCd17LRVNT",
  "key11": "5LAmeVVqNLqMKTvoDJH5n1EbojMXpLWmqStLFCM1joZdynLTYM1BKFc6hb5ZvQDEAsZxDVw4CbmF6mcZjEo8DY75",
  "key12": "3cdLyE6n7CR1pCDT8voeyoHJ8mHaAz3RAZVetvhi3Cku3nksb4wv3Sskr6Cy12fSGqLp3HZ3rvEYDt5iq76geDvo",
  "key13": "4EUGKoVPZ4fet66dqH7eKgxKWfbaDCa7VdHoU6gHA39AxLM8sGRCr1d2YCKpp516X76JiYVUYURRpckFeNpB7zyM",
  "key14": "5UAD9ZMmNkyDA9xfQTUPNSSnDgEio8e1m3S8TfKx2n7Ciyz1cXY7pTGC2qyiPmAru6eXrUdQTD4UdhwBjYh5kqeD",
  "key15": "4Xy3qXWuuPHPmJt5iGQYG4f7tzJemTFtkoo1kz833ohxL81bS6JkjJJRYvGvhBdtukXEmWRYVVNSxv3rWCQHWPop",
  "key16": "5oBJznPQtEtxu2WCpioFJ8BnG3bNQMpZg155waBHUDFYq7LTQbWLmUn5u56QFta43jDfinNs5U8JgZ5NEk7haE7L",
  "key17": "3mSkcpen9Pz4mkwMDWEAedksCzseAgL7PBnpRxAQ11QLvFog9yUnLrMB8QwM8Ep2UBWMeDi192KhyzSCTSketcmX",
  "key18": "5q38nQG3xCAP8sw19CRE8QphEupLiqNTzzPpr8Uqmq5JMkaDJi2HXmTVpU5pwng5tez4wN58iPcQMtLjYTSx9DJP",
  "key19": "4Y1F6sjp4tVCFCLbb1b8gxaxwsisxgD2eFfo14b7KsLpHLNpBboBexRL1nYZgXZ8Xiy2JD4MadP9ozfEiLaAPw2r",
  "key20": "g4LVPMo9XczRFCK41R2SfFjdgqUsqLrrHTYt2phYAry9TRCamQfeAc1FMmQUgFevRoejA4naTxgVQAZSqiZNao4",
  "key21": "2HXsnZ9jLSyk71C8vP3ehWH2yVNMhxuDoTDPGC8GSiLqSmZrgQLZs6kKZTGUxPgUvqutgixWzGr14rPbzeAvjTgm",
  "key22": "3PQN4BnQgCWkYPJhK1J8KBEQ5eeW6fSZsyAkY7EaHRDWU3whYM2Rj3caFhW57ecVPHgNBwCExJWoqmXcppRBrvke",
  "key23": "4tTjVfopR4V9UqhWv4kNmqiErYbybw1anNw5EVqLeAtrHi14S9dH52A5p8BAq6m2iMwECUGeV6aETYS9Mp6Kkh8u",
  "key24": "5J3kWEpGzE3U5fJknPCMtGf2kPhez1isuK6M1zbcYAJEVNrvKCZi6y7wh49jzoVvrd4TtYKSuprALtxpfopdFr8M",
  "key25": "3YpH6PnFgvAs9T1pnvpxFE1nh6gHcwqLUUvcxVaEuuiGcgKNr5fSkThMxb4NbKtzrJKCARfojtyE59YMTBhHYnDc",
  "key26": "4box8xF5AUkbnjBMivWaSvMxHrjSDyjv2pL9yuLpxprhJM8fy1XSBAAtZaTYqV6LL9kRkfMaJe95d5CENDep3oug",
  "key27": "5RLsZ1hwiuL4GTjNX24o6hV1kTzCfG6JAw7uByDwwzEYus5tp9nS473dadGTn8Puzts6aRdGomR8mEC9pTK15NoV",
  "key28": "4U9zG3JVDKn3ohEddKThU3C5ErDnJ2LjJSy3qDnVKVoeuhgNwb6gZ9S6HRs3utFAXR4HY5cdXcfCwXGds5MjJbxp",
  "key29": "5uR1A5XwzER5mfinwzcivxRHzMZDtEQwmy3NC3QTEsPmwrc6fNgWWXPB45pF9EAHoxrmJdX81gp9Xu1oG2fwc43o",
  "key30": "4AedGbbY8ZhLUPh4wJdi8AJ29xxTrmKtze1kn4Sq9ZhMEfGtQ2r9WAZF46P4umqrfiSv53ng9oj8NqvAAxbv57Xw",
  "key31": "5NDXfrggREZ6iCuqUzQNrTTMADaS5WEi1jCjQaasijYg7BKUA3ZJ32cV1oLbtdygxQH2WvJ2soTGpJFnd9guh7sA",
  "key32": "6ZZyd15LwfRoEYG8Mbp5gbFdBo4LZ7V7MQEozHJhvv7DMbHZNBurXYHAp3mnEWJ43KhfVaBwAAXKC3HjYUgHkqj",
  "key33": "3PnWefDrwDdF3Fc3KJ6xhUsa9YZaZXXd98zpBiyshyJXk5P7cjiPit3kt6jnRdWGG6uzcaQHPymq5QYRiQSrYfsC",
  "key34": "3nzXain7ypZSCyZXAJduns9R37J6KykMutq1Suku7h9fo553xEDLaPNcHM44CdkfZ16osTFYtnVFCmvTnKgspfkw",
  "key35": "5ooXTn4FPzfzCw4dSvqFooYruPYS2BBFZg1eeH2Gox7dcuSmR9Zet78BdYE9c2dRUWsXExTUpYU3g6hwHwzrBorj",
  "key36": "uojPd4qGWFW636qXtEwqLroxADLnJysJaMNQuXHfRuZZJnvdf4U5GYhPSDGRsafaFnrpQ6cB4gjnDw5KCfNHN6q",
  "key37": "28yRsisFnCSMQDhUSrLNuTJ2MgmgC7yQDxEGpw8Pi676DpFMcQmqcTfic9zThfDLoWD1TEcYPRdJbQ27s4vcbmYb",
  "key38": "2yVNYcxumtaqJ5sNj5LTURRf1uw7jgKu4PfGJU9WAVdc2NLw1FkTzCJz9hJATSN3KchT1x1ovhH1rufAEB5NqhtK",
  "key39": "3J7TC7ZAv3Drr8vsS2FSbmUAstHrpakSNf62dPk2vT1LYtDV3TKtiRDcoR8hVL8DF8m1bdkUByiwrYhDN2dgUkBC",
  "key40": "2nzj42CHWtao17R13nwCPZeVdZFpe29uNjvt3CwurqUjCSSzbhyTvcpNtvDCchQ6iXchHmvy1rKBeUZH8QmyXTHR",
  "key41": "3Q12ojCCdMWHe8JFmHDT3wakuK9cqPWmmYMRfmzCZ4eVfWV5igupyewCYh2Zd7HGuroGBedHkyz3RYjPui5bqnsq",
  "key42": "5v7Fb7RdhnfHM3CWk75dpnQ1DHBde71mCPcb38xN2S2WWJYh8dzbauR4wS31NNhTkZncgkfyLWYN8S3cr8fb3Rkr",
  "key43": "5C6F5LHxMPSiJSaKcYTECEmwM5Ds7UyC591czEuondaTj358ZZxwPaPrfTEEqLeS4HkaZ1ZjfqRFvSM4M8cJyiRp",
  "key44": "3fRxTCUtY7iRoRm353RSsSKcTgkAanC2RRsHKD9zXKCX1QQo9RkqVn8gYqnyGPknpgxZNwUQ9Tr63fmHc2S62hG2"
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
