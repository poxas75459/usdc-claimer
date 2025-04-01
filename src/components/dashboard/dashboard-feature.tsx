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
    "4xBFF43netynxLF2cwotFsXdzwJGCtfWwZnZJQtRnCK7CzkJxXFbYyM7teb1H9RtQnT4suHsegHp5wS34kBH1EeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hh9NCG2mjPvdyGhb7j9M7XnVX7QP6YkBMhLsgesQxpbc6Ztr3T6kCehPeB2yfYshwwfMhh2N6T7uUauCHviLcuT",
  "key1": "5quBoXzcpysKM2bzE9d5NzmZdTM4qymz7WWiqZ84dv7Djn3ZwkCiLxPFq2aS7m6JBdkrS4rc193jqMLFoiTcERG7",
  "key2": "35BqBXVRka21Q2oisA6cqRq2uSXpNAMDfdQzs1h3djgk6B5wE3ysJFwqj8ZnjecCkHL8RogYeS1phKn3E1VzWt8d",
  "key3": "Mt5g735oRXGmZf3XBtZSWXquH1874wZ5WJW2obYquuUo4ZEEkFKMUcmSP9tBq9WGB8pWv3hYejWFzaugXgQbzij",
  "key4": "2VnxJscuG9zcKSJ4PJDVNg8nLqsTrkengrePq5Trbmhzg6kNDJqF7iyyQbK6542w3u3pGA21owoRhfVSJaTwAWBM",
  "key5": "2ztEmB6Dygm5BHYDZwghbUeiCVQKSEPw458xq9Jyw41vhPgjwmoJsxpXFfBrUyqagggftWDRad5YW2PQagZejeuA",
  "key6": "3rnESfEoUwz5CrsXpCZS6h4UfEm9ZUhsCxR6s1bFAb9i1CvL3rjA9fB9KQqryRura9hZE4yW7EWoFRzWpAcEsu8d",
  "key7": "4b7yDqZnkLqZK4Tqsw1RtvWoX7L1fdsiTUf4HDHULks6UoFRZ7N7jRXzqaNP7hp6GEn4ZeH34nPjAkMPCaSMGE1K",
  "key8": "TiiQmPGn3Tx8Jjqp16C2qRT1b123dzp5iQpNB6nE1SNuK2LhvmbbHNu8Vk12JbqtHhP9SrfWNvJihxau2bcAR9y",
  "key9": "4FXvkCkSdzq6jvHAAgdL6rjCfh6ymHymygCjd7xLKFDApd4cgXqH24XppmjV6Ti5BdgMHnVfHVYTki3RiEMTLyM3",
  "key10": "2GFcuzqRLj7bTns5DYfavQ3ZWbssSgW77iRmCwCkQanM8Bj3UibpHxMoUWHuvJ3MQnq9KB3GJa3AEF7RA4y4WQtL",
  "key11": "28uMyqtYSYR8C3qL3MDSuWY5aBxFAyXXJN4nHWs1CJAJ4fDkv13N37wV81aFsrxjMN88178a4iC6Cq66k6Mfucak",
  "key12": "23xvpXrtgERJ9mPwooYRoAwq2LdBWfR7VGWWSqXNBHw97YRSCKo7NSxDaRLCV7cyJHUobxQ63wfFpeRB56Nu4WPA",
  "key13": "5F5hY1RxYnMaJ4rVn7oFXnbQJfxVKEDw1HuKS9gKvDTYfQH2i7ZGiimvJEDTMXPPhMpzfKtmTf3c5FBcxxgvv1HK",
  "key14": "3vJRnqAmDP1TWs4Dr3mcKFJgBg4ZXAGBSyu5yqbt1WPKRw3hB8p33reUH5JP1GPTsRZe6WyjxWYw5NKsGzDZVvSd",
  "key15": "4UTPfPMGMPjLNCRarVqWdhhFMKNcaFuM1Y34KR62viBmaaa7kH8ZhKAnfk382DAEduVYzGzcWZBK7T7L7ECjfqPt",
  "key16": "4AQWMyLEtHq2JDeS5vqLF4sJXRjDR1cQsYHtxFPPSwiW5ZNUnkgmfpJP42AVNxnKkgMiXxvLJ9QFKo1BQRti5aQV",
  "key17": "3z5PbHgD3twHwTjGNzqP79uhffY8xP2RpQHK6XuTL7eFrhzwuqHn5SYXUaDRnNMgoNayWHpvT7qhpUdoJdhbf3Xg",
  "key18": "62W57F7nFgL8Hk7qA36bN5TWXXc7QJvxfjZtjyB6iu7sSWi4qZMuq6V11hxuKhVDmMPkmTLsrUAA4vL9f2f8biYS",
  "key19": "3CaZYtM6L8nzcnBxWCh8BMzhzk8SMNRDX8L9sm5WPLZXzyRRmgXfQ3GSwyQ5oiAuZtxZmWpJDQXK1UKUGmbLgavF",
  "key20": "4BBu1GSy4YzW1w6iJ5WYYP2y9FzKmx6aF1duA6dhxDPDnQ1vjFpaWjGNSkbxV6Enos2TTCsedfKkU6s2FYxBTGWT",
  "key21": "24skiJaFdcuRZw1xwqib1k9P9ietRNoXzSEGM8ofT17rx4uyeArVj9dNit5FQwmsGLz7EU9PJgRcibemAKVfmYYd",
  "key22": "59kc2Mndei3HSAdhLnS4PPyU1RvY2HWt8m7k9W91gF94XmC6B3YrGew2hMBP5o5AVdnCRinEZQmW48hacVtQhjV",
  "key23": "5XUJg3LUE7CnegfP1EUbyNtQwBK2p9S8PCnRVDVafPn2vSGbA8kBbCVtB9Bu4HKqiJ8KqiD6L47aHpav8EU7cZAK",
  "key24": "5ESiMtwS9uqcJ3Vvse16w6yMxgSsJY7Bf7FcyqtpYHhXMCBr923vS2uwMEhMeaak56Jc5UDaHRsuPdBcoPBMdqnK",
  "key25": "5CTpvVp9WQgnErqR3FoJAfRHmz75rnwkxGRqoRRLcvH86yQNeVEb1bwtYsV1jFkDrKmNRFkQpTjMb4psW7XWVsKf",
  "key26": "45sAaoejF95VPkuJKpTppcz2CuVkKnAom2EeyPSWwbLZCKoLQGezWpYSHkfAzJ45prRrdR2e4vMwHBdKDLSkmbjr",
  "key27": "2Ce56H4NbjnB67bTVQSNQkRoNCnnHsDYHBT3HsRtHHJMZtjeoDfNsg9BH2NwNGoCeQF9SctVbgeKJAKVwrB8h7t1",
  "key28": "Rsj7NRRgu4KpBG6ksZzLR7V7nVnr94c385pwbcqyPekr3UsLwFRbsRhoMgBqwpNnKzR4QRktpyeN2qog3mLZC7K",
  "key29": "5zvVmL71E3hYXevkvRzt7AUxvjtgyGr4AjNqiTrnu5fTyDqbNJxTMWFGDwKMRHg8EVP2kQq3uYCJVPMcimyLBXFM",
  "key30": "39C7gHJq9ddqSg45uFQRjPcxoVGgJkNC2QGhZT1FAP8VcRSegWGJ46gBQR4YsqFLi7xa6BdfcqrGM4rjumQmK7JB",
  "key31": "4dVTyPCrtLjBPxm49heg7i1jA36NNH7pPXvNSqsrW5hsCGEronNKZKF7nijB6wQ2mPo3JNxShEoecwZkgyKSpQ1z",
  "key32": "g1973BDe1oe84pcvDnivUjaPYWyXB7F5UTMYMSKpqi7dqJYikXbCRKCg9gdBE3twBtmQYMc7UyYd7oQbNW4uWvW",
  "key33": "35uzC9KL4qCXqQx1oyiPvKg7LVBxgHSJ3UgdpJTEjMYBv6hbTqdTmSwjf3wdGEy9SED4xxCaqWfsXDgyFs88ugWn",
  "key34": "4BwUmzZKcZnqkT18Vr6mZE8VNt98Cwo173ErJNsuPRxaiu4BPgtj4PVcSqDQCY6x4FR1ZDgYG1StRNHYjRs4arZR",
  "key35": "CjAbxfLmntbLkNijaAcpjTUnEnp3xHaavn2UzkAEsHpoyHHBscF2G9eBicCuHZF7wWrsbVKywYVZ494hD8AASUn",
  "key36": "5Uza6D8CT8mXGMvJETkcvCEJSm6GwCxzFo9mWMmpwWbf4fzNXApfDtimGcYBWWegZadWzGzYEumzMAGRzzHapYvq",
  "key37": "3Bc84t9Qjh64f5mZk9MHqgHSr23o3vWctoAiC7C2Ch5KjxwMH9kN2KcYAPh5t98WQwJEucpEoEHqcTW8Ae4NxJZL",
  "key38": "pM4TnJo3c3Bdpd649qjHXJ8aw5tFvHrYzQVoXgHFpkgFsJfeGBAp9xhMBRfQ8MhJTmchoyQqh7BTBwemsjsFRGh",
  "key39": "cvqsB3JmemNL2eJsaG4bxXSDvsdm4hCV79rcde6sTrYyuk2fmkDv52zwMg2CnJiXXUcD1UR1xfyKYkHi34d3ACj",
  "key40": "2okMbFdC8BU5TRQnw16oTysgg6hdf1Kx3YPMSTornAMejoUxcBsAgBN6ivcNiUtUvNHiM3KApqCaRY9SPC2nFLqS",
  "key41": "H27Aetusk5v1BrYFPgjqW4yb9H315ba94qDRRbFRbJK31vTibaCgwmqAC2tHynGAsjkPPPxGcUEhZvqoz5Rrs9q"
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
