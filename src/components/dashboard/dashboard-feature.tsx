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
    "nbmys6T7z7R35KLrUHQXTMWjTBFEQBMFp1GZqjeTYd94CiasR5pSBcgohGFixQMaBMw8k7dUWxuE6sJ8dXy12in"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1qTu39hboh3UMVGa4Qe5tvD19HcGsHsdiAMbGQr2SBHgDdJKyEWeeuH1geMpkMD1s4iR8hPsWUab9ePJvcBJfo",
  "key1": "Cxyx2YGgaeXqoAZuBcBMUFQDmt5DTzo8ZbPfGkupVF6hJFkFiYB68LGtB9uB6oCM3FFLup1ytwBumpRcdchg2tQ",
  "key2": "2kaUM5xvr5mUSCetsGs5Xy25zZB6AQ9QFsgT9jS6HbXcFmk9QAcrYaNbd5hk6WTcg8e4uzyoQ9qNZxUAt3KWH6P5",
  "key3": "2NgQcByD2aMC5GBqHtCjAxTL3yN2jx5LYDftPWzC7CCha7VZ5fv9ykavRKT5kfyTBn2jGa1hCDpLiAUULgK7bjHz",
  "key4": "2ApznGd68xdzTDgmXUhrEpvwkBHr779rkokPF19g7nsuNtYDvTDHwpaKuurM6XFa6GkXqSBoRXqN3QNjz5xP7vpP",
  "key5": "5K4Afa7uwT8wnpQetfTrAaYHkPwUc9qyUtYLC4S4zptx7dif1aCniotTyJPXbB78RkfQVRAFrPmNZ1DsX6Dj7ko8",
  "key6": "25i5Lcze2j2bNRa29nHrD6gNx3LoNoQ7r4hGcZyki25tuL6v6yarNMoU8RqPa1nxtV86WC7yX7FsS8ku6pKYDWTn",
  "key7": "4jr5mbcWCng6Jk9EJNbg3fnFjhr8pcafn8ve24XGWD4LbCQqgcC3NfrAUVQWx98Ri3gCKarzuySfkC5QnDZXpYWy",
  "key8": "3YStEizsox998BcfpKGZ3fZuLWLTeQoZrt9pQ4K5Koqbn5U8MEre65SyyUA3s4PcccQbgse9F6iQwxN53jmntJvi",
  "key9": "3gGSi5jH79xmCvgWBk54kb4A2C9dyUqzJ4KAZXuZCuCXXtPbdqtnDQbNjHMKdowyMykDR9TWgPfu745PrpPgAT3s",
  "key10": "2bQgZuYSfrauji7nVaqzFqReyveQreP9nLfzUXTUyBV3G8aZfDwvfq5CnHBkSHAtP1dAem5baB9zexPJHqaAMY6o",
  "key11": "3wqd7BbhEoQqEKXQG8Mxt6tUzgEf47djT4nLkskNTFs5c9B89YL7BSAZTrNZbiaehLVi6XKVxXeLR4gQVHcC3GtA",
  "key12": "v5mWu1AJZd2UZM8HekT8EcbCg1R3wd7GPKQGbv6mSiy1EA5rMrhDaiju8U8sYdLUNFH8Vsm6uJzernKpJKBh9kB",
  "key13": "3Hv1PJ8uTLN5XAwUoE7RZiWfZDdkhNCHgGbAELsC5Nk47dsgbNSf7M98SCkbrtLzHAbfg1EpUPuCwA9RU7Wka5Uq",
  "key14": "2zBwYWcAZVWQ6Vp8dcKBDbHdVx7jfpQRuKYphrmAFymyQmS5T4jJGaoAWZddxyHXQM3mrk6sN1Fq2jvPptdK7VSm",
  "key15": "5TsryMcdnPh6gpZNNtdZP5JFedqBuEvURkstKbGthNBCKkyrANo1ojXD7hiJiMY7hCagVwtjJ2QvjvK2W49i7JeU",
  "key16": "DghXfvXkY24Bi3jRCjDEUCkqAJyLgUZGLwzmsEUUoAHLZLE7UTSCyPB4qkaHFJbctk3vQp2Umguraah4zBkLw7y",
  "key17": "2YaqBRvMgLGY4aATdMW6re1kDz4WHo1CGGgYAzi7XEBraQf9noc5LRKpXMveGYg3XTK1WV4MzUzH1uJksmQRbQmD",
  "key18": "5s1RSiEeygf7qXhYPoxucZP6BVSoLxqKJAYfxBhVpYYUERnttsEvSPdf2i9KvwSG9fksuwKCkbw56mKygrBhNvay",
  "key19": "24v9ZAds1FZYXa1WSWnR1KxeqE7HggktS1nm34oCjVjHrRukYcmYJdnMpS4TjtEWcnnjxKGD4mPH5nqftQaUagPf",
  "key20": "3Ea7dE8cPAZA85TzSkC6iqVCpngiuQ2kh7MS5cye6PaCb2afqXv6p53dcarGYfwnq67C6oQy1DUU6rvD6X5XC6Uz",
  "key21": "5ZA32vVe19CLjUgYWxf3ExdcVEZccyg7Tf7rfBpQpc1Q6Y2uKcPSN9ddKU5FjDdff3WwVckffbABuco2MXia5Wjj",
  "key22": "3AsVGSKt3PNocQspJe2sccAf56KucDZTW2uicARRQr3ygfskSQB8q8srCFLTDxr9RbNfJfdx2VmhXyvCJFfhoZNo",
  "key23": "4KckYyxiek14wpRtXTyRD7TNDBgyg4vJznACLfCqws7sSigTgT6Ld5QEHKiWumb37MwTVZ6XtpyMv2YazRGhxtXD",
  "key24": "254SCzyvEozqfJmSiixAYcg9BsTbcX7r2NGeKAqrAby3mA7TYKD56ydqTiCm4798ER1CY3vc127rUo1rKa3xD61L",
  "key25": "5F53rMZkyhWeHHvBqUen8T4oJ2nMKGTxKTwuLrE35tnH5nyejWFiM3JhRU2HbmtDjpGtZAozBzjVRiMdi9ZVMnce",
  "key26": "2TyLmx6o6E9c4jyRE942E2Atusghn69z4Jq9AkU3TW9EKdFvoM2Qr8n7KxHW7XbSKWdSCZ92Zwu3bmFYrBNpPTn5",
  "key27": "5VHdZDqxLKSJvMo6oMEDLkP4FS7uskdryg4wksRe4ZwKh69SeDMB7nhVQ571FN9VvUyQ9xXeen2PeX96pp5Wm2Qo",
  "key28": "ChZJfXneaPP8gj4bK152EWHGy2dK4zhYAd13hGe3BKt54nKi5EwaMrCmS5yaYBCv7KZrtwQdFyJ3g2kmR9sJCrV",
  "key29": "38KHatUAsLw19QgpoL9fpCgpqjK83Uu4UkJu7nPzKXvwrFmtaDDSz7R6se3QEmY1VbEdEKfSZtxKTuGtaZpfwpcB",
  "key30": "2FJVrMuxfjAeNnXo4mV5K1UvLKn5v4JiXBQdi7k54AiM16Tgop7QB1uFCyRTgoYTkW15hdGdc2xK6Gk8v8D6EGbf",
  "key31": "32rTmqLCzupAVvuA2xna4u6KyttLeaiUwtN8dyeJc5apLGYU9TPPM4bqj4MB5cbrvvCNH4hwKsyTLbKEZWisQYuJ",
  "key32": "SSLQ1wT4w32dhy5tizubSdDcvBeBjz6Ljd6b3fEt2kZN9ifLAm2EutXznXtmVnFiHzpStMp1zzmf8zSWKbp482W",
  "key33": "5shq46iuT921qj8rcCUh5iVDL4asbNrvn23dM9cA1QFYV2vS5cGLhxGdwgFemSE79bz8sck8bYtCtQDGA8dyVoHb",
  "key34": "2CKrJGDHz3mKTD9221LDLxNqyLxG5SL91WSu1AEKVPD2tXP9YiWLAJsRFEG4ZpF4vc31SNkxw6mSaoMkmBqgVgJg",
  "key35": "P7U394XyjzMeHgx6SaCbF7UfUYtpHrPx1h7N9du5ZF8AkXRZEJ8324PDsqXq2UiCZsGUDj3gGG8VfcZpdrForSt",
  "key36": "464Yr9CKEVsLHFRivtFzkrwnMzQEiTC5gj1wSMEvgZo8AZh7DdeDxkF1tZ4VmidqF9VxAg22eKecewADBQMY4NkQ",
  "key37": "5KehtxonYZZNv6jKcS4Ahki671fxDgYdFAvYQUErvS3JTd3iz77CX6ow9Lv29BdTGRqbw961sTve72aUGkYgMoH9",
  "key38": "2bzbkMDovKToMnZi478Z91s6b9SWqyUarYLTeQjigBxQy1JgW2JJj8MwzK8bpSVnjHfTdoGnuzYAzxgHRxAFrsnn",
  "key39": "2EumFQjRSXkNfJdmx1NxzGaJP3dc2zC5W3UmgkrC7oAnmeBKwG5XKxa5ny5ydEc3FJWbUq55rngRkuWFigwETqmp",
  "key40": "49XjFaAiXf7ZMbNdyS5NPiy1EeXk1xJ6tmhwvzMGgiDyBhh7i5sZtpzUe7fVimfajZnsw9W95skKb8gzdwQ1DuXW",
  "key41": "3DG3Wnog3JGukqmeTdqF61bADtj75eW92VqqJTrVU7RzPj26BWwbJAjCYffwgCE84krBFs1UaxWtZvD391xwChfw",
  "key42": "nteUAGLX8PW52fiNH1gRJeSMDhAyJFWwewZQBvB1kFHk3oXVbHjNYmF8BT6nxWK3ZVfjuxqqnhjUTVjzgzzSJxy",
  "key43": "5zSugWRAkgKyWMAoUp4RQ3z9yH7wtoURAHXWxczFU2wc1PpiG8xUppK2iTm6npoEGZdXfZ49ArGdHT3CiTonSPf9",
  "key44": "5yLb9PwRt5HfsAD7SjZes2mknr4hGBxGerqhBmbGe43jjLTpNoyiBQPc9NpXxeUadaY3fgGBywtFTA36eweFyeNn",
  "key45": "4xZwLYwoLMAhDqgh5BhhtHmnYTjVnpeFzteHg7dLt6zaRSLmh4cXPhL9xLq5PFNPKpjaxRcGDmaXu1x1QsCZ1a5Q",
  "key46": "5JPjNsh7ECe84DJ1QnNj6LYN3aKZD3Em4LaGBYtkKp3v3tjyJZgdmKWgYHvs42ot9v53vwfWHungjuEWGLgGNrS9",
  "key47": "5gWgaZKSRbQz6JP6PpwfryHqTgmnFwd3SkdCBdhBo2tv3Q9haxisQCqycVimvSqmujpAwbYA1EqsmzaHyAYtHFpD",
  "key48": "3Y26U427S4Efr1sDmcAbv635bxdCogcgZnADJC48kuBJucedGDE82qGWFwDgewG9E2WHKkpJ8ZV6DQbY7oyrpz3V",
  "key49": "5SsQr8HgEhkfiDfWSGcoWgUwnMyH5D4wQvtLysxK5WVAs5UWJcP15Zt1bstdR1Pd5xZziybVXrKfrYMG6REWpvBt"
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
