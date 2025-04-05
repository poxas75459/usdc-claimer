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
    "MKAcqDyX2ux23T3xgzovxoniNPc98jK7Wzw8oPLuYGZSRNqDiRqwCg4sKxSNKVshJ27twgjLoEGCYryEsri5fby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BEobzrceHdPmYQ2BQqeyJwSTVscwLAwmrUoptnruihjtN144pegMLyyLzZeP4hQrC66GwzuAoUSHLx8fa7wZfQY",
  "key1": "4hkBvJyRVXn7LP3FP1ZcwErcHp9oefkXUfGm7hJhM5H2ei2TiZPbkU4zmmq2V1AP74ZTB2LHP6dfgesucxSm7PJ4",
  "key2": "5UbFRiExCVjaFeBW1vtRGSRtpPNqh5xMFb4Geo881DJqsvkt5QEkoj4Zrcp62qSJaMWXBVKQ4ts4tkJpxjhWAHDc",
  "key3": "2GR6bt1Ftmq6rUTQN4csZG27puzFHfcrf2ekRBBxucrdbNjXbZGutNnSnrkcCfGgYiow6EE2V4wJjMHMuZV26ABS",
  "key4": "3ipQozxGcvdC6mLWJTQWZ5ZGFuxeyzuwcvkNSmx3EP478pWkkqFxxX9WSFukCjjwq4vGxvUpPCir31w3WT4nUZbv",
  "key5": "5KSRFXESx89qjAjhFoCLMwxqY4kgYYfsYhY3LiZRuYYt4mFvs4CRksw6xAFRGhFkbVNnxoEGgX6ZJA3fqdtiMMSV",
  "key6": "4LRLxvoKUxV7pvVA1LDf43pedgxYp8ST7AxdZeEB2TLEKj16fczEHLKEtn6eoAQA7rv3ec74bkyrvp3pXyrdhVDq",
  "key7": "2MBMCcqQrXiX1ZN4V7sGdGuC11T6s5Mrf1RkyFg5rS3JFhXneXaxRJoCjfpuvJN8gsq3hgwNnHTFp2awxocZ7QSo",
  "key8": "3UcFDXLqZdHze6QCzR2gEgLny52qKSKNREkGnwAUXtmc1GgbZoh5JUMdnGMTDvsNNbfgLMsbrYRDPfhbgyy8c7SQ",
  "key9": "4JwjSBG2GyLKFqD7rUbptV9dYvLvWouttVP3AKV3dM5mKRpR28woQwTRxXqQo52o4FTAXi2dYx78oMhDFQbeEJrW",
  "key10": "4zHrhKYpDsctEU6BsXCkxMSKfec9vr8wj4xoRMscZmX1J46PWgqjgzPt3afwxsmJWiwneHeox13wETY6qDxgHxjW",
  "key11": "3kHq6M3chdSMHdEAq8XTBroLYzWscdWyRUGC62zoEQrdStUezbHLBMeYUpTehi7QJp69r3qBsrmYyvvx2xaK53Zm",
  "key12": "4ydDDeJ4hgftkkSGi1U8nFrPTddq8fzHJ6eTPrpUhUg4wmkUSoLwqL5MxokpFYhkUSzKVTjsnpkfbNXmQkh9TEXe",
  "key13": "cA4hiJGBFjbfPKt9peEJEeN5hUQr1Yu1foxVyW2y7EYSUNpoJcEFRBmtUDuBBWf5jFx2HECsjvs6g7M5AoyqeFy",
  "key14": "4RwGpMiizBAGPd5ubtVBzFvDHn4qnx9mXHC15zmZXwrCoFgS43rwRDg6aYZpsQ8S3jcGJep8Bi3CZR6uuyMsgNTN",
  "key15": "9QxKJaqgM8CtpDFisn8rhbpdbBVXKPe7QCuCyEX53iEc29HfccDd6isEFeXcHaqXxZHiYHqV4FPuaijTLcYTE7R",
  "key16": "4PhgYNdwPAjNDyvtzvVr9RJvdYqS4XpsYD3N4kSp5dMrQxHS1kZiSvZ6wg2BG9bJSdhcsuUbQJiJ8En9gEGBSKX8",
  "key17": "5JPiiVRHFvxTFH9REXSRfxyyorPELNPM9XRFLJyPWmTNJMDhADcY65sypZXK8Kej13whc8ADZWvVVhkmj6a6y2RZ",
  "key18": "2Kmy4GvM2HkXna2WEnWx58i8fPrFPH1cMVq9nvgBz5tkEA8QmhMsr1f7cWCfmSj6xdYLitqx398TdrwMwog89hw",
  "key19": "kagZp1H633tmTiYDSVqodm6MT3ggT9fRxT1CmK8aMZRUvKLiMvCDb73bV9XNYgNsBg1YrCSpuo3N4R3GAzSfD8a",
  "key20": "5dCS4xE7zmsiDPYW84doDfEf1R9VJrvhpHZfHLrWwBYbXhr9RbuPf5EQ4GwEmeKiqGR2HAmwvrs3gAg6jsHKhuRM",
  "key21": "5m7XgcSuko7Cnr2YRGHtdREgzTp6ptLuaksb3wFgy2ZpXYNLTsAarUjoupfLtFgY3QAWbjpmPSnJ9S29FJFPpzMw",
  "key22": "HjoyPLh81RDkCECugdEUJxdPb5uARuscdSvYXK95qKfxWPZVFxcKeTtkWmMjEyN9VLtvyJtJzwzRfK66Bg3qpLK",
  "key23": "cE32VZTaB5WWKo4BS5UQcuUWz4bnznVYZfGAUzzke3Cw8NZfFAedh2uH9Y8v2CAiqwPC94ETLEBYJJwFjcnEiUs",
  "key24": "4RaBzs9u9L1YNebkFBSyhAdPLT6PZMQkEUbgfVgqRUE2PxpW96zRC4nuwZJEzjSrERyJHmptvNA1nStxpQPyeVqv",
  "key25": "5X6Db1HMtkKFpkqE7jcBrMG4MZJR5nypaLU3VPQQJMyhg7eMQexminhALfcyEwtv4TnRxkDAfMzKMEMSceMB91vo",
  "key26": "59fLvkfCnYz1e987ysPNBbDCkrUpdFtNJejJfHKiUYHWBbguY8yeRXK56Jj4CL4fqmbqiTSczKMXzNKjL3A5tugn",
  "key27": "3yViFK4Cti5gNUvFRCUYkJWjzbTqajL1UHKeb9FVivStBr2J9LzrWV25x9mYGEUnAFzbfxEUyG1yotnT6cmy3Pzy",
  "key28": "6754ZL6u6tzihm5AwQaheQoAxrAmT8qTv6DSx6qVfVgSjufpXLc1MQdutrGNcj2YDKuQr7sC4yRAkavAZ8V5EHBe",
  "key29": "3s9Q3JFa4yeuRJtmVdt3ePgXXprbeCQtL3ruC3EsUvf15vixNpLUzssq5J3FyHtwnaou2rcTMsWTTnzWBdgGdWD",
  "key30": "2euaKGRqC8qLNrY2AsbiAnLkQuQyXxuzA2yCM2M6Eq3D3fmG5j7mru4HpMFJkQhTDVGMLtcmS44JwSDGbSgHGcRd",
  "key31": "RrXbYpRRosZoGAqoAky3z5BWfGYsdYKdQP3xvNBRuW9vEYPQnguhKA7ev7zHtAxkpJGzEZRTGVRQN938kxrMsv3",
  "key32": "49ZdW6NqYHQ1WXJuYeDTvWz5HNaQyMHuCuC8HVqHoqx3YHDnL6gqLh31PJTwSinowXjhjn9xMabRLjfYhcRMGPWh",
  "key33": "3XQueKZVjeGEyovPvQ3JmqwsodWpTnpXpGRgi841Ny6VDbajJp29uxS9ncEk9rGS1iKVBQh2X28UD9LngE464mvA",
  "key34": "5swGefkKZdrxG6et1m6SMPtF9Tg7V5YBZZwXF9iUUntNs1drqTAZU5McQQcDPCjVC2FMpdBqd8QBxqMqThTyr3t2",
  "key35": "5YthNVa8YWuFGxZ7sAUkFP4VJdiaEAfR6hfxi2GBPYf8FzAa8QQQifdPD4awkDg1CCEwDZTmSUg6YdTBeWDUsxVq",
  "key36": "kU7eJJEt1MfpUPZTfkwzzmwKUMpgE8fTtFkfYKKA3b1xAvai5w17dv44SUMD4QHpQqVi6rtwrBGtBYvtG2cZn96",
  "key37": "2SLacz6Kc1P1pp3p8UhfC9HiXxHPP7ogJSJpbqAzbZG3X9BqpYXWkZuBB5H9L7j1cXyRCRmyXuZiNQAisYqn6RH3",
  "key38": "5cZAEmQs3m5aKe177qRksJsMhNkku8A4PUcETZNZyixS1YFURDyiWrg4dgAtnT7M1X7rRHnY6i95V5srfwPrQZBE",
  "key39": "2pimCfRJ6aFQM6deQrNcwxXDwfW81fWtSrbUiFAEGpgR8yLF5HfkGnkz29DzQ9ignrguQTBx4FCEVH7qKL1QqpLP",
  "key40": "318yPKZRzBBYwrLtQDf9g9fQGSGna8e8gtYacNg6Yie7F7pET1CqDZ5LCoeJiNakrsRgM3w7y5jsoAmvX4B8z2Mn"
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
