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
    "4oA87xuhQgaxEF6xBJCb5kaLzr8RYCsTvrdz4QwahxTx62Zpo44LBDzMjFi3JZf9gh8m9oD4ZGWjU8wxKq6aMaZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kUxekPc9Gqbek3orfFY8QFEBZ17Z2axQrmhWku2HuvNpQaDJeaL6WuEioZnhM6DBWMBCSdzPEpfipWEW9thAsMf",
  "key1": "5znxye44Y6jAVGdzwS2oPcQLyn2ea9g6aCAxBocFVVSifCbKedFoUA4RPiCGN1TmisFPLsc4Qa267H2RdATob7cc",
  "key2": "28aewbc4bhizTZz4YNmi5eGsqN6khRk7bbYMQgPpGN36cyF1sQpvZmcLUrpHdhzc1azS7DwEPYk6tqKHoXv461AD",
  "key3": "36sjWuQkfYCnqJKLwNgFtmAZYivbh1WDxvtrSvhZkKbUMdcgMeMHQ1N38R5e5B18JQhnttHJVPSTZ7T1u7VnEVzH",
  "key4": "siGS7xqaRJYqFnMHBaBEG3EFnQASdQ5DnLtWxMkp2ZgrPHn6tMZibtKnTSw3KLschkFNDk9nTEQ8jBkL1w7PQXL",
  "key5": "f8vf1P3YczHZfY6zBooDDBMjBmEvaJz6ujq3SfStnfqYeJousxsgpMtqyi9Q1upagkZKHuAjxYRgdFJuCWrWAkq",
  "key6": "4sdJdvFkqJeoEvJpsLSXndPisbpVEu37Pi1wGkNiCe93DxxEKhBbsasMvjcmND1b5DWgh3s4hedSfvkCayd5Fmgk",
  "key7": "3L5wPHecFSmsRn5g7nrs6FVYXBtz4etwqAoo3qCUemPiozNS1PSToPJK467UciCCAWfQDkHZ9LKuf5orwXm582vs",
  "key8": "3UESFwdR1J1Dv369Ujj1xvjPW4ZvrDiuD5xbRg6MyWQN228cvV8LLg3VTDp5ZsZEnNJvK42qyFMoexBMPeap6ZmL",
  "key9": "2okWZjsUQniHa82WM2YdgGve5ghC6qtdEMkZ7EFyfj7mv78nz2zMixwkDav8gACKuVaVTSSH8kCt6wk5fXJMAbip",
  "key10": "3WMHryrrE8hGzinVdPFzwkfzoesXE3VPs6Q4CbsVix88DkLFYyFnJWZjjhmTU1Hz7UK9EXtK93XD7x38FAz2GYAF",
  "key11": "4GPSx9cfY2xUB6jBq6mFpzDGFXJ7acyAXuehrKWyEfeKyi1ELFBqcGpvASsWWMQuXgpGjkLUN7ih8H6T11zc458m",
  "key12": "JB76dxi6jKVkgFwNLsbmnP2StEaFdGHGzABgUxNuo3xFL3qLXJbjmRv2ES1Uujuf3xQFndEPS4NAiM7f88gjDx5",
  "key13": "3Nbi2LZCc1iKdqcReUKWigquBYSS9d24gNvj59ZMP5uQMr35B7Qaa6M3FNp2yKPBgEMWttCYbU3uMUvT15pqsgNg",
  "key14": "5KpMP9C3FcqCykqVof6rzEVyBrh6ypWwNSJnpYvfnYkH7PedDuB2LyxCegzeLHXrowsPqZYfrV7WGxxi1rTVMEj1",
  "key15": "3yadVCsCLwudUCoj6M5RU3iF5Jc4UWxhF7MMt2ewzfNKWLvUW4csNU53G4ez3tpm2GvmXSx6xVD8Lfs3sym7M5Zu",
  "key16": "3AygK36qZHecDWEGjsheupU6iTMBiv8wRo5dTLKeNn3B7Bmi2odrwmiSJmvDd3XoacsEf2GNoTYWYKKJrcXJMaVQ",
  "key17": "41G6kWCgkgw4dwQuhwhk5P9QrWYnyEFqSyXsApn57iwkjXxcUUKav4PnvosMX47AJ1vpXeTdPhDvwMYM7BcNXnS3",
  "key18": "5t52DbxjWvqEayCxQe9tr954jU2WTVzXUvywgECtNMHz1YZecZCxp43MN5azyZZL2GZb3ywhe8Ex3KpAqahLvUtT",
  "key19": "2bSobYSxsUScNnpurBW59Wn6VMkDSZkyWvVspAWf6HDa2EnJVW618i8LXWR8WtuwnnkM9DeWzdfNpcnt5LWSRVhS",
  "key20": "GA8RZKr3jUNZPqkujaLAu5ST3wjnXnF2HmcfD6Y3NvWxXByr3yELJ1HEz81UoaqfNXmRt5jE3Y4P1vk6dmsHgUM",
  "key21": "2VGkTRKeWk27WaaT1YgAMfnwYvRs8ztzwhFpJ5qbWKU2vSBx2jfVaNAnzF6peS2XKuyqhfAfByePNZx1ZV5VkAMB",
  "key22": "x9dsrz1RF6tW3jbeBP9HWT6aZyMSzFcJppCe7KEWe3wDEd9FDpMYTEwiUL7hsyL89oQPkE12tpBrKpddmunKcym",
  "key23": "3q3a4zUBR8hQxYMxktV7Rieknm2ZBXPK9LQETwgPrskByniCZkpxK941Uw4mK2gVw6tNwaVpJrGjZjjbosig8b2e",
  "key24": "3yBYRF3XNJoR7ikwWVxw6XWi3CEKCzUzGWCfNXJuy9MixNTaAYturGhKW924xvKY1gvjFWBMdR1wzANfgHzESUxt",
  "key25": "55BXRyvAfA3P5Dwp1jaisXe29GkVLCZvR4ucCUSjmAmTZc5zZuXw9AWJtXsyHGdgLwQPsaa3jbPYvo4zdp93J3xL",
  "key26": "5HTZGzAFh61hDuAdAvjMnHnqK4yU8A7Sgq38gDVVkBTCkH71w6ppbF7eshNHvfrhNUsxDVGiDgpGTih1VJg4He6S",
  "key27": "4qtm7pZ5tqeU6gZ5tibyjgv97gtAP5doE14cpZANzg1oWdwJ82CeQcvz37KzVD8T926LV1ScMvtVZSc4A4nqSsx2",
  "key28": "2mUaZWteATV4426C7yTNdrjaPUmiV5ftXKkGPsS3MjEZhDGTuB8PVE9Y9x6EHKYLEbC7yYbM9GVt9dz28iNjTyUc",
  "key29": "28PvKRVxMfnsACSezoQPiiMbhbHW4wm7kyrUq1PmjScPoo6AjUBWEiX14VEJGyKSMi2uBY4p4UiyNSion4TV1sbQ",
  "key30": "4b1pmeHEd3XyRY7jiRgDan1EqXJaQ65k1EpXfUTPBcgiYE5xeSHC2KNAvNc7L9vhYhssak2YdAKubWHS8r6QQQB9",
  "key31": "4PL7GpFvRta1DKE6PxDg7jRYuAH1kegNCBrwRmiPGRj3hMRY4LRyRjX1kxmsdXV4DaMLNuGVVWbAbGofFif8V3pV",
  "key32": "2j8TrF666quBmbVzAsQu9B3uByYxnzpfF12jtsMvaQrquANtgDcx134W2G7NsYZa75JbHc1TemaAeYxBDi5VXc25",
  "key33": "Q37QM7xk3dponfPBEnZ6sQx298wne2fw1smVLBwo4bSLSdkPjwgdzGkGuRH68M18BeqeuGAMiyrbLCJcHh7vznB",
  "key34": "49Zf7rzTNTnGJgTiMFqgnYejv4wQENiyyBYer8gqiTWwfGuQoseFzGQq3kETaEZZyGJdg7dSG9fYCMVxMunCePsU",
  "key35": "5qnhbQY2ZYFX8htzrHvf8zA9FnS511wvLDVxFzKs6gBrP9sKUCtkHrTk5kQYrvyhvhmnLSZ2Vnr6uAamCmn5MPgr",
  "key36": "5k7aLJudbdF7eEZfCyxoj4gthpHAQsbvtPK2tjZEjKRKjTRvr8GrFCAGBo4Gtqo1RWJwy7uBgwwpWv5RUmBGZULv"
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
