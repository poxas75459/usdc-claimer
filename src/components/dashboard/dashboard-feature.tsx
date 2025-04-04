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
    "3Rgug97WdkWbxVmdeigchpzMagH637nts7iLvkxnU6LGMm9QRrqZhpfcJ9FzGB8MmQ3skgxzDRsbR1VyXDorFm86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oi8KWpUJVQS7my5RZwCufkJz2Uf3Bvhi6RwnFqJobn5ATDFAgt1MKaCVwbfmWjAtpbXwPZj4oQtLbVYbFqAP5Ec",
  "key1": "5WSZiYMBrn67F9x1aLUJr2mDY2Ac2GPGQVSe6KBpSt4rSavP45mYYtMfTnazfDLW96D6BcGpo5hnEtJnD5RTH67q",
  "key2": "3LCD8z1aZGB29SC67bj2LUBrzaojpQrF8aVG7vqCNNh3aLS4Sj58WPJDAeMBZxohKF9nzhyS97VApM4jPwJYLCtx",
  "key3": "2WTtoVMtmTnVGwszwAWkJi3dsEmR5aj7TE9sJmccNTQEnW7iAicYZnKKhuqTsLpm1b8cQxhb7x9auSpvztio5sF6",
  "key4": "2snhH7D8Myq7tNW5dxnQ811eJmcN6U97uNUYfwBVBMXaPpaGBdhhk63NAvccsLJY1CnKTpjsvkLXpyamWR3ysW39",
  "key5": "4a7jr1RGax4vNsHyqofHJCLaT7GHk5xnbVn6bvmfvnUaQ8BxKCm69b1cYxsMEAwqPaNs7ge4yLcXZbubT2i2ov4",
  "key6": "4qLXdpee7YXZWfDY4sraamgqNXbVdmxryEkeqxEU8isL7DTV8RKp36MFS9sGyR3sVhCmhYdPHZfd4G7UTzY38kqp",
  "key7": "4eaWN1mFzvzSKZthRYg5AXX2DJ3sRsgA6U3pkF97wsLDixi5PKWvzj13iL6tyxCsnV7FK9ttHSzkzvWRHQZ7ENSj",
  "key8": "JejRJgtYa88Qtdqd85NVr6BzLMTBBGN1CFgqoytR5BZ6rw7G7AKRAF6rg8cXsHRPM4BV3Sz7HywJkBSRivAAVte",
  "key9": "csE6iQJEumsiBhD996vsiVaKLtdoBcFXrBvNd57mMuawby3ZS6m1sYKm4yYemoPcAZcNMPgKZM51dUoUffCYzEy",
  "key10": "64co8pHqHMRdATQdviu6HVt5cMdAXR3aXdCYCSStKoyVh1ytH9sNhExVyRDgfCLDw2NweU7tynD7VxTPuucXUExp",
  "key11": "2jp6nuHY7P7YQLfULTPPNCPcWCDGnEVYXX94tvyDpQ5fSbe2cxVZW3spe2pGXD1wT8BbbnkwZkJEmBVFpe8cuQrG",
  "key12": "3vEz2APiGEhpmFV9tgjDN4CC1rDPLwEh3PA5MK9KbAfEj3VDUNf1JGSoidTivkaMBKgRYBBvWNGY2cPYQ11Zo3Ao",
  "key13": "58WnMPyQgBAJo1R8ch5XwbP4HqBw1pGRNMwXjMa1HwjwVR5kjXBa7qrGaieCHFTpVmMpYgacfDy1uk4MmsBvRQAu",
  "key14": "2As1i14zW6f9DsCPutTZzVJ286Q4rMzKnTyzFrud33tKXhye8JnWoKczRYk5ABFYm9gviLcqUvf6Yc5jhMpJ1mUA",
  "key15": "TYGcK8hHe2UhAJjH8g3a3zXn7tr2eEEZ9eUzyszbB41e2vW1LL7b7ELRtz19qwKj1ozAHNBRUv8RMBeqzK2BBkn",
  "key16": "3KTVWM3wtE7PBAMg3PqFFQhiw2a6LPSMFn4qGsinGsRAzxXLzBfgPT3tmU49asijWYctJtjcMMMzxfLmvmqMq516",
  "key17": "5PS3BsVXH9V8EZm1HWtxrKpujzpf9xPawfVMaUEJAe54EEvDEPm23cC28UCES4g2tb8sWMboe1YshX7jzJ6VFUZE",
  "key18": "3mE8rC1riNF3povR8AA6KZxrgrey6DoxofyYD3GT8BZbYQpU1pRh5jWfSKtNnoP6ia1N1uKHXEZu8Nm6LjTuXWfB",
  "key19": "5qRe9isDUBr2qicLENu54QSWDwM4PoJiYGEuoruSHNNSs6tm8XGGzv2172KZ6DDgaDVAbArQrSo2knXWX4FCz4g5",
  "key20": "2EuXuPSt1QhhFeV79fqbQdTfoF3BUbfFr14Z7Q6sAMmVoSAFSHxj4XpCX4tKCkTMYsgFPDqpSYenpB2x2X5nK2nn",
  "key21": "2dJt4gTDWgPLaP4zbPBV8qCMxexAKfkWrf42S1MNPv8z6rSwNtTZmHifo9uU3bSMzK7JwMcAzU6f6fTLNtHTEpKE",
  "key22": "xVnprgW6uUJCRLFN9wcx9nGUcuFzBdbiGWQcsT6SDTiZftMSXea35dRyk3PKMop3UpH1VqukydPmCE4PAWbB1uj",
  "key23": "SRSHeh9VS4btzZNw6JDxThmh6fGnLJyW4w8LFVF6YSiKTM1EHiRB6j5gikkyEwhtp5b9ZhHeYsb4B7Acawe74Wn",
  "key24": "5mHZtvFVFTNQvS7Ps91J4jPg2npJoSdKJLf9PbmAfw1HeGzWDpfBdSdWCNnkMt6iu3NtHdzRu1AYT8iuAFSBawVg",
  "key25": "2EcJWmNy7mCb6W1of28T1k1hkoRhH1ErAtqWat5hiWnLuY2yLn4SkFE4itEQqotarggHkrdSkqaFy35QRFqgfPwk",
  "key26": "5E46AfyT68SGztEWuSZCWYjvRTveChkT2r5d6iZtT8icHUaUqB3Vg3zPvJDproYCgkKP2pM9VEBGpisu67yxT3Kr",
  "key27": "SQXwupr8QLLP5yr1BRhLQ8kvYJizZPXq5FfTf5zbSujkR6PsHMNobPDCdZTocrq8mV4XDJE85T6hrsDeYrE4A1n",
  "key28": "64f4oA4PkLKaxHakWTvMCQXiQcircXe6DKL3Fw18PLHhUEo2WwcLrkuw3DamZ9nLbctcJkNorcwP6BZresGjGMWt",
  "key29": "4cLwmiMzHcjDiWBGVzikEh1iskP7dsFbqXnKQ8wCwhUZ2ZphSuTBoAfQoVW25kDzDs1zHFyPrbJaR7je2eTAvv2v",
  "key30": "645JsADLHT3Q2gpphUDCH7BwmKKudSzGQbEBWaht7RGAwNQ8i7bMvzLGNMR7P6Y7mJiBZjSwXoAYqbRJiyt24Sxj",
  "key31": "GMnu2LUumRF3rSWgs1rKKijFsu711ELWJCziYDRuKDFWW2vKzLivB4zuKfMFa8twwK6JUk81aictND2Xbtfr71c",
  "key32": "4BwCeqC6hjnLNYmBwn3tmpKVBWxc1XwB4bkHAxaXTeJP5tiM9WvBAEAasfB1gXNa5Ae4GbYNM5gsEWDjkBGUYEg4",
  "key33": "2wi8QRcTSGF6Lehu4bkfWuXgMMc6bVfhBgk3gpehA7i36drveavyRb2NgapTmYxVdhrNbDq4MmkuU5FVcrPEZmJQ",
  "key34": "3aB3XbMg13zhNQEL7LGiFQ8XnW3yVR21u6uniUCE1UpsjfPUMjt6WmpRoMj8V8yBA1xqm6eBya3LPhc9kUaj4c9n",
  "key35": "4hNfTioCCZHH4thiVyNxdXnxETQrSuJvZkDLzmhi5EseGJk7pASyr8FRqEFFCJkMqQPKVSSHb9ByUyoV5ZVDWMo7",
  "key36": "26yvqkfSo4xSHJdppzNX2XFibX6b8P2wQTueELmdHwFb1Auv9h1FGtckMRGE1FQWYiniPAo26CQTtuao41g5QLXY",
  "key37": "887TD4kNh9RzBLWxK6Yj4Hbya3zAMMwRMLYx8WMXSfRU5gyTr7V6hHTVEjJmzoWChy1ZYtDL2Y5RypPGqeXayLh",
  "key38": "4XsEnwtYx6wriRwQHEs5GvLMvqrpWxDanDy7XRKSqrAQG99Aov2niiTbxj6wpigkTyjWZsmgefsssZjXXb8wCLcd",
  "key39": "5gk3XGCdwfbWZm1N73if5bb6dFSm4JttfvhF8nhXKAKTVBGiqmVhXrrofGTpJ7Uo3tcaZYrBhK6NCMXpbyDFox3b",
  "key40": "2S94K7vTXS8f86GNcVkp4XnVnFrCmksC7itBmyU6wbdFRWNoxCbnfknPtiLQYy7ogFTx1gMMGNEZML2ytXDuUMAa",
  "key41": "3mAB86v2xGv4QmmvWdwHktDGNBxcAxpr7cQ3Tm6evD6seKA6WT7cy2T921yEYd1hpzDBzy3eeGaPLBpTfHKSyawM",
  "key42": "3TF1d7QXSLw4wKXkznKQ8EvKgfg3Ep6rwMxnhVBAJTKnHzfWsVsoPyEztUX3aZ4EtqRKZHqtSA6yNVX1hkXLjjJx",
  "key43": "2XPR1TLZziuSFogFR2VmwVP33b2KSkY9UGaPvHVVn9Pi6MrUqH6j72thyL8M8ecS1kNGGaedZ5veBoWPBKHK3noh"
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
