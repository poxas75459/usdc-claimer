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
    "3afqFzWAeZfTEenQKtqyRpKAnUMRbLaLQjSzqtSnMyBuMKEbAao2wFHwFM3UnRCvBcmoknrF6KAZgq6DTL5hpXmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PAyyJDXJU9QAJWK6re9NuP9uMFr9iRiLCb7AAkTT2be59gkk8DpxqhXKKRzyjeTAXEMYFZREtKH8KcjLSkZmbD1",
  "key1": "4cxffhP7W7fPxDZbbb8qipcBkGgMcQs2g6TM42Jo42Aj5e28LL4Kq3Hbi5sjdHSKWHBmT94YoM8ptbR4qEqtGjwd",
  "key2": "2cmgRdRPFue8YZJxCAfJJceGcN78MArypfHviVVxLP1UYDgNenAyaSE2ZvhmqopZXmzNmBzw7zzY1YYKarHTQnRT",
  "key3": "4LcAts7Tp4oP7hJAM9RGDK6X5uV6KuVwbppeNWkLBHVe9pWyumk7YH81CvNtxkc5d9GrNhvJ85VSh81VxSRsxJWB",
  "key4": "3dQMhyiWxcFjTJBoWH3SR1Ca3ptwWG7moYUnYFK3xZLeRbb7NCzSMuyfQHzjRrfMBezFz2pHMeQ6Ls7NiZfsziV3",
  "key5": "66j7sjb8gHmEoGPvagqytveyu2dmjz7CprWFBcpUDqthmrd5HHVGSMFnNGxmy4y7GBxtySKvasZgh8Atta5AvqCY",
  "key6": "bnhnyL6AcZPEs3LviTFDDqACHdMshTM2wDtmcJoio9L7unkbU2ws5BoKMmgv4zLJviTHkk8axLKsrfLSeZ6VbmZ",
  "key7": "2XY7eGDmZPbiTeo9iYdaJe8GTzVZ2bnLfHYpKmwoPmqP83EFDAZvxrsQbpKa2Y6qU3n2FjcjMFxdNVRMLaBMTLUu",
  "key8": "22KnaHyi3dXmHwVoxfCPGYxnPjFeGGDaKPqv8w6aCicwLNwcGvXYpHpWeRqNEmcAfo8kLfPgkgm8FzaFp5n7F9mm",
  "key9": "jwxT8wtgpQt8JBcf46qDPHVsw8yLSmXmFmnFUp66TwLZkdFi4p4uNMhVHg54UQsFvEKtPeTXNyjsaBUpa3KAS2b",
  "key10": "5Xq3SLyLCYvmmZE9N2QfFjmzbo8Xmmz3HQz4qzb8qS5APjxaEE7heM9vPfUTgxTbSUxGy99zH7jjsU8Ao3igjLPy",
  "key11": "5fEB66Coo98eccYxYGM3orEer5bQvEufqfPyjVN9Pa9JzHd3UTG71MRcE4iTRuNaYTSJaQHaAdTutugYxt9H1h2V",
  "key12": "2YqhH4qoGTqkcodSKxXE1aWPkkqHV9P45DJJUu4QFCUSwkY91HEqa97VVgEPL8QVttE5xjSRduc3GcYeR84PDnWB",
  "key13": "2GqA3ba3BGiusSTRxaLYMh5QSU9BwXb4vr2WUcENxEZFLuay2366aT8T61dwbFcAgMqwJJqFSuYUaJ6KU5CqXPn7",
  "key14": "4agzTCUrQVfbrqfHCEpfo2tn1pAhGaKqSMD3WevS9MhRqFbGi2MmqUhv9mXWoFa4Wo5b2bGkbuxRV5BypF9SHTnq",
  "key15": "2cfhNEVXajhT9wYo8jPNB7dS2vTE4g6yWx15Eat6VgzzZ1cw6Tf1hM5MJ85EQvJm2PDYi7xhFUZEsNXKv9iMjQ44",
  "key16": "2Wobea2ZNJ4twboftPwwxra1XBr2zgDF2UtuMUmbMpG93ns9BW7vFSBaHEuybcbsQQsPFHy9rjFifdHBtZVMdhzZ",
  "key17": "d3g1JBtKqMovviHs2S43aFiG1SF78WVWAp8osAZibkeMXJvBrxsZsA92g3Nn8urxPkwspqu263G6DctAqTXDikq",
  "key18": "4ijXhxLbyMkg36zfST1gxnLnZLE5PYVVZNP2tH2oKMfiVw4YgWqEqEVMvkq8psmwKHkmqNT32cNqXSxyJ9Yo9Ny4",
  "key19": "5fZY7wppYHDyn8wrkKR5vDsVPVMjBu6gaNDHEE12DjPyhGTKbkLY7m9BmWAr1vz4A8BoxE5qX15X91TGhMjTUqKX",
  "key20": "4aR1NkoQ34mCFsSsxqU2466yf1MFiK1QkjPxFi4k7EUdt1ytpShLk544wtBw6nsezPbtDAUin1Q9r4PF8wNurCRs",
  "key21": "2KM7ajzrYsJ9Nkwq8sf2rREdBA74k67YSrVk2Dvt41oYxGbb3UMKUFNCS6VgSqovWVYEjUjciJvxLTbwFdii2AEw",
  "key22": "JdftoDyPQb5tXWtsUgm9bzWFZMsQKULrX4ooP61Yn3eeLch245af8c1BV4WBQfAFfPrCPiS9LGK7LK4dX1SWSMB",
  "key23": "26Eg8zQaJePDbzjnD8qxxVwm22ZTSG7fFUo8nigKiADaVy9H6QqoeyoXFHnTaWocf339BLfg3UrAtkWHq4US7vtG",
  "key24": "2Vvqwt9pcnLwx5wZeZ8dSrYkHH5fyz6GVjDGENiWkKs8X6kCymGcgrR1ceKE6x1qD5fF1gWJ6xPcvh5v7gR2yoDN",
  "key25": "5utG2SRfyHT3b5TE2pW1aJJrhythjbwPyPg3HJ3Q2thjMcXW4BBGHjyjt9V1RvrGvmNzfqBDyi288FvjHRVRqw62",
  "key26": "3vrm4ptiRx7PDWMDxefRND75Lfwr63hEoGJRDuDxtjpXT4syHwgKeMCCpJczxzbMqycW82sdassPechmBjAgL4wN",
  "key27": "4VQsowdwQKDFVf7W6fZFjFWFgc6i2btr38bcdHrd3Dyp1xLFFsgLRkFHtZPbsEwo9tCp6kkJmT6Wo6Xs8tZt8wUQ",
  "key28": "4NpwjCcqjjiJMoy28qCLxBiV77HkCnyr6tPsk8Q4TekXBpcB6TxCn66FkMsxfr4m21ymmqRoZ34ZfpHZxJp6t39z",
  "key29": "5wBrshRe4XriZ4S3dziC61yQ46bd6pEsbF5mWbprZmhtMmedfcxxqGPwbxxirE7UhcSooeYkSb5jU4Ntgjyr7Cb3",
  "key30": "57sXPbkPre7ZnMHBRZzppx9wgwmY6BLvNn7wG3gJ27Twy1XWN1t1z2dgMvjXXFdAQCMKJ24yjbWCJ96gLVDcyXYE",
  "key31": "2wWy3ypsbg8B7u7aYg2Beap4nJqXC6CQYRqPqKGjjd4VBzFh33hiGKcQXtBgy2kgrYdKNJdyt1q6A2d6EaSRpSX",
  "key32": "2kmAVv44ogwSxJ4MqWvSfzuNYBEiPrT2cAQJHwVLCZYphTw11tsUQsUDTZ6ZuNZEDxCaQRuoaswXTbeoogUCjheq",
  "key33": "5kcV4FEAiADhNbbMyoDSTaY6dNSMqCnpVgNvXgh4aC4MTQwxXjpW4UCzTDii41tNHTHpuRGUfWcYnbNVM5aYibXu",
  "key34": "4bttRb9Fah9NuF6CefUXXgKsHPVomkjJKn2PnMRiBuigfSQKTNLcWU7oieEsyqJvDZcvGNcWHHTVo5Rfhno3UxJ6",
  "key35": "4nPUKccbeh9CjfiSLmx562pE5QMqcsrRThWRA9JRRrVkoktKrHqipjkuRTjVec5e6mtroCmeKMkYg5joSzHJL4cY",
  "key36": "4uYkhF6RS7f7M7ANzWEDziJSqEGP7YMUZz2Y5MqE51GS6eaEjKpXKSw98ZmFCGdnfq5TRfaM3ka8QakNwfzrM2CU",
  "key37": "3egMfCWH7eFssGRpkvyeJWhCJTrdD2t9wqU7RNvB6LuaMofFv4FgX5WvBVT4H6t1bYBAJjPHaDvZJHKw73TbXPPe",
  "key38": "4gMY74merqQCML47d4tnoDtHGUH4PUsPguLUGzqV7HLg7Wq48ZQ6q53EgHrWGhN2dZ4yfQLKHKY7xu1adV79VXMF",
  "key39": "5Mjafv5BVBegjwrqdBchmCcA4FxCyke1dYHPjYPXERsb7wFSWpLQfCz8yVZ9XVNX1Nvorq5WENogwfg96hjceb3L",
  "key40": "5xfiohnZP2jN5PVS6H6iC9yDPae2GDJk2WegYPcn7fXiumwX8MqByaEmTmMJ4kRjwTCY8kFW2PbTwgC89oxvemWA",
  "key41": "3TKhGJUnPCeBRmudx5ACjiGNr8eNhX4dh5UnhiTmeLn5Jkvb3t7F4SGWgvfCSkK2ZbfYvADGifbDpHiAmp82BM12",
  "key42": "4KigkacJuVdhphL2X3B8h5khihPj9DjCawyfXzafBdTEnMK5dbWnL7BDJQmKHP4dSU8PincSsfYbq823MRmVwfFJ"
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
