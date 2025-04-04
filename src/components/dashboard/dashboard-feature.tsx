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
    "216t9JLtwUuUcmaQtcrb5atTv47mckHVQi4YaCQ5u5UQVcjo29gAfr64P97b57L7Ge7DQxi2FpsaFbqnym9FXGyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FpVYzo1wJ6KN79NZnRzzg7hXQKfsKUUwo8ziUC9upGejWyBLFmjAuUqtF13okMoAicoCA7CtuRLtECTcgdvNxBN",
  "key1": "5WocMDwecwC9xHKzSfxkAcY2PNYfecQhhNHCwsU7XAiF56PYBdsk9gMfPo8oU6jH59FzLqz4sjZWvSt4KiuUb6oc",
  "key2": "5rmo36sZ5tJKkmBGNU9nRaBEv1Q66ZjcKvxQyrWiPXPbSPoPF1bvPy8cujawbvRbwaJGczT5ehphbEPPw7P8UTMA",
  "key3": "4DMi6uCc6Lnj2BKKCthwJNwfEZMVuxnAypGvosVZUeaVpp7iiuzm9nd8ieQGiUytw8PhKNbvUfZkj1JAEkZtdGV7",
  "key4": "5cxj7VdcsFzMWH4ZU9cFpRo2kfYnsJjnx6ajvggiPwQksKcp5R7zRtStJVkZ1k87amRxLDdd41zwqa94gfxRzxfn",
  "key5": "2zdebEtgXdH5nVh3iaaFKBFdRFVpM8jTRXiXdPYNXmuHV57MippqHgxZGCTeC3zKzyF8CND3p8v7cJvNnnma7uWD",
  "key6": "5jnZm69wyXvjcTHw3w3KnPRkwbtB4AxT1WrTVudNbHwQsQysZZosgRVJdXeCcEVuZj5wNfzYiAYEidvLXcxqxCmZ",
  "key7": "3YkaKCUh911pxLESZqmufRTLP8Xko69BcGgiEZ38wR2uVd5HvnWD4i64fpo4yU1YQvtQMuSUyJVtwZZmzNUZpX4Q",
  "key8": "39BMZbegY1Du5WADZ5mQRtVWJ2o1j9qXayYhnxQYkPzZ23MmxSZKCZ346YLPMyqqUCDhhZyiwj8bSak25Q2GVe2V",
  "key9": "mSyLxpbYCrcZke9PqxEFGQGQhWSQ8W8GDtS1VqE717SdMT2HPNtPhmuUDAwhp7hi1UMmJSMJzWUV9oj6VTGQ6Jh",
  "key10": "3LyAPT6KXQ6EVXJq2YnnqK1xQmus3X8SXfF9Ne38gNbiUxEYzHLek54LnnVaM51cQS9ZGiCNQLd79iQTo2pbuVon",
  "key11": "5L42wgFMtECYuqyPjTTiHriRfpq2sUhmrtmZgdwSiRWmrwWzqWumVgPdvq4s7M28BDcfPR2x8Hp6QAgoKuMJHd6A",
  "key12": "619j9iw5gZxEZ8D6vA4owfJYp4DK3dxwVUaZH3hS9TXodGQaDCqKEFok9rBg9XqPRoYAEsVa3DrE2SEp3K9pwHqS",
  "key13": "5z4TKzD7HTCSwhDQBzn4ccEkkCE2v41aS3hAsyD6ckaQa2JotHaiDHJSshdiwdq3j2BbHJv3Q3pE3zTxtEJSx3Fx",
  "key14": "3W6x88xUbmNQu5ckngaY5kXbxq6seSaH4BmPxVLvoNs8jGawsn6MrSZPjpY1kyan9k4BnUN6BGUMkRi1jeySNLkE",
  "key15": "5JtnKHQ4qRk5HixcZkpTqEcAbhqiXWwh72FDjUW5N4uyXUcCB5jShHVSyi3QMpfcvTVKcY1g3aqJaHj7suAkoWhs",
  "key16": "4768CnUp5wkGuASxiT4tck9spwfgyoQFmPya5PeCD5d5ZLXMSdp22JAcxwcrKwfaMUz5iZGT9aZQAxmd2cZBgPzy",
  "key17": "3JTee7C92raNnibrAFk3jN1JfQBzmqDxeXiSeNfzKBgadZtLrgyfApcxK1fbpeJ8a6oUxvqUy7Ui7ig8rKMq1EX7",
  "key18": "56fQUHUHkZzTCyTzfAnDXCe8kZfpkVwcX444JmzzRewXPdZRgK5YczgMQXS7twZBaW4tL6dotTJy3h3D6mW31TLZ",
  "key19": "3hFJpy6rf4xBzYyY2PchywNVZjHvVfN1fErwsy73HbC4jrGU9bgjpvwnAe82ThAgEfBzrmB8AGufy812VMRZa7Wj",
  "key20": "XaDeuRLEPwNSNcMNGLVVQZZ4ZZJziGECky7uua5Gjr3GauW5csxGzqyuVsZBmmLuESAfGeJ345fWmLbNeuMQcQb",
  "key21": "VjxX1xAowW4cqdnWkWJCEGrqFfxTjCq31XwZQe9MDnX6kWmRZfrwdTRWVyCLqrnTYuQBChPK6D8vawoXFDSA68x",
  "key22": "485niMpA6sdLu2YyUcnw9iB2x4fuBb2rAoUXpfEfBFdA19TykNk1FzttqKoM4PUcKgotBd3RRX4eiWuYZvc5wr57",
  "key23": "3oTKzGcnJo3N6fd2kJTpoDgzeegeNVoxcKR5ge1862F41P6nZBLr9Pw66sDWwRa2ot3WibLMewC73Ckj1ktfmC7G",
  "key24": "42UMRYxjXFPfjs2q2QhEiQELECFaK8eMNswncDSBggwLWd89DDaW58MkTS4dQPKyfpyKsn7fV3yHUU1HjE6DqgjH",
  "key25": "4xExvaLNgUj44RfFxvf6fqzfLGqex567XHpZNvCrQ5ay7wEnFAsBteUTF7mTggBNYg9J1UnKqiMu1FpA2RejeVaW",
  "key26": "3ihCEKQThwpaF3MWejJX1Tw4ZNn5ZEA7ciUBQnYec7iMzxPNYQaCpRWNLhuE3TBs3i1wxny7wjL2qKv1PfT2eV6u",
  "key27": "K9sBLfCh7QqunypdwEbcncSpAuhiVPZFDbf28BLywA65bDtRzuaTALsYJ6qg7n2YyLhqAFeqtyqMkXxPPd9iRKX",
  "key28": "4VkZCcegyt3at1PR3euAWuPRLaKcfEnGJcRQnu5KnzAkWDfnCVH1kmfsAK6wTbDdvp4UrjDhTrbBbG4GbSHsRxqJ",
  "key29": "396ZdrNN91TJFrJonoPdEYsHgm4q5kCaL5mrKL127ES77NAtNEC7dfnUDdNzSzmwAphQeKvprmxZd3KoA3jnRY9C",
  "key30": "59o8FwkBSi7756Z8MEST5xVeVFMH2so7JNoWzreTogAYJpcMcMytHtAqDu6vMZekXQQYc2vGDDJ3ZcAsGh3VaKpu",
  "key31": "5vZ4sKVBtH4YuSwYV4RQWN1Em2qmaUyYtsdwJ2V7xzsJss5KPPY5HJA73dUc5HvYwV3XboYfiXorJN8Yvrz5iuye",
  "key32": "4Lv37RBcHGkfRWBFTfAPks8meeHoQMzxZsmVV5VeGUmDm8GNkTLXgftWnTx9qMuyNTL12wehezt7hc95hh8joxho",
  "key33": "2hc3sgmz82YEVLWdFpijtK1LoSb7duUN1rZqj92C6vMxvnvfwW9hUuLj2smqjnLcximwvw4hEZQCX5NF5HncsF53",
  "key34": "5mDiAFAZjRUZ5LDLbZGSkWq587YKFCfyQDfFKFiitA5mU7EH62EmeJWbk6Q74bQqHupChyXy6wooZkdkj964cGDp",
  "key35": "3iEqGxcXKwaHEfDwxhU5DXQXon1fnXHdybVqW59twQa4FnNKoLHoVqMfz3fqBhbF6oTXcnW6tJCSJ3U7FMghEMiy",
  "key36": "3dXyREPTb4kWTUkumNdVC9KyCYJWf5EJUKqvT5hEmXGuab5rrBaoB59mmbJ8Sk58vXGTbgW4Tksiiv2oGhysecn6",
  "key37": "3VM2HVYfFXumH7zDbedfa1UrgPNgfLkJjZHMG3Ftfj4gdrewGAYamrUuMpWP6FERiSKvHXc8ZzrQvXvbkUr98oCG",
  "key38": "42DL3tNe2k49XNaTWZ9uxq6AQFoSzUhQqsrmXsKXSmx1Da7WswSHjovUjUaroLeXm2eZPWPM4PVDJp944uV2KRWc",
  "key39": "2BuDyjNs4AbV8cWnw93Dnfir16WxXacPm5zQuhChToVuY5CcjjURw8WEjnTod2MqnQzobmccCBdpAu36gtbiVRet",
  "key40": "oz4nVDJ9Eu8XDxwLsY8XAMEZGzS89TM4WgoNTyQ3rDkkHvPBvEpWhJy4nxYB2ZNGJCbcpCDJJaBR6xYUTYo11i1",
  "key41": "5y8CusmNzGDjWSzXRYwL87iswhfUz4y3a1nvkueiq7htpHekEc5VjTQaZx89cVjLPpWPYa9Rqt2HKX6mFD9Z11oC",
  "key42": "65F5vRTbAWfMrwV2WNaLCpy77nbqA9MuEXSBbC8R29fxrBoZSEtPyWskbhcajSED3MvbrsQWzK4KRvABBQgVt29g"
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
