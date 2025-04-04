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
    "41cBoyg1dzCp1PdWE6harwmgSxWv43cPTmGWx6kkJVLtSeyb1pv4kW3BBpaMuqLjLUcjhLLe76EPCasAVcjorFxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k88dMZcjQDWgjn3Fgmr1VZ993URN3RVihaEEgcvNUFUdR6A23QZtLheieTvnPCWfADm1ZxZizZYkFnmubTX3TBf",
  "key1": "4Uq9MYzrgEszCpWUDGs1hUU1VvpSyE7MBuuwhk5Jn2dvxR1BgxmhSvFj6bYvWyfJosxudCAC8Yyt2xbNHPY3S1WF",
  "key2": "5Yw1RmqV8Pp1JwNfyVeUxkYoHhBW3JVvSD7cC7zshoKdqJYJ5tN1GjV5YHuwDd7uzua7932ck5FBy1j5yD91Xp8z",
  "key3": "2mETpDMKGJJUcd3Kur82vaiwD8XjFANzcVcLZaCza3hRpLQkSjv2AEHzcbyexYz9Cw9dgjNwwo6imK7FbHiuCGFU",
  "key4": "4JPnMovz1LaL6a4cY1P1kb3QHMAGvRTPSrrnKLtpUhdXKwK79TCMt2f35ydXqncgrS3Mq52hntZPvBMFg2XCnThp",
  "key5": "2YUkqseqrLt1wG1Hsue6FWFgyE9PubfpvN8Km3eGWrHrT8ikCTNU4RSpk1qZW2ZxErbr72vGbFRJye2PNpAgpySB",
  "key6": "f9hnvb97VpPFQbViWyMPS5oHbeRhGztz7ds8pqekriru6gnheQ4P36TW8DB4UbxuntYYcUA1rHuBq85AWHYQ8GZ",
  "key7": "2kUC5PHgudUEuKN3CsDMyiEsQKV8F4edgTxh3iK7rXjxzhMEo1wKvPBUyCuzb24okDEAWYmn9HQqFmcLVRgu5AXg",
  "key8": "2Lu1nSQ9mUsG8wB861kb1skL8aGVHEketuj2SRLqefZNm9e2aWT7ZWSxAChnaTH93PjUSFmjanGweCFqfgKbXo1M",
  "key9": "5mUwtmfZAqSuRivTApkms2dcsrJGTNMKFWdbD2wNXi2eSX8dhoJjGSfHzWA4uDrpfY2buk1hMGwgrRV3bB9uZ8Hv",
  "key10": "67p4QUjZsEdiwxz5Ury8JPTUX292VRRtgyBKxZdMECXmvg7UdMprxQK4pCTtERG5NzMA26PkrSpVjauuUmeZ8aYB",
  "key11": "49wSzyZLovfNjg5FK66ZS5iKhwvVXiZM78LdphWAi8uFBgxNBYjJYHugk5mrcwXAi3zM14oiu4LhdxjS5kdthUXx",
  "key12": "5oEK4qrv5Gerf26VsmDR4ob6Zo7cPZrwk8Rn7nxCyS4so3QdWS4xQH5bUcxYA19PmC7BQBw4J2zERUBW9QB2o2TT",
  "key13": "4x6TcgEhxByugJtBse4og1jCsVNALe9koWCBFTtBcvMR3AdQ3Z3KoJcXAN2X1gSXcz827pX5WY4FmuYxcE9Fndkq",
  "key14": "2HQ7uJEF1Zqyrm5AR8Bs81k9X5y12KWHcMwU5c45NksshbrpnUF1UaLzPjJU5Kj681ANKEmRuqVbzEPWkgbPyT8u",
  "key15": "3zEepunSo3vqzBPkUopbLcJj4vQdPUdyJaNo5ryTZCbZoWinKMXefPr3Cm8Lykap4i9319Z1XdSv2CSZeHzaqAYA",
  "key16": "2LzpGDDMSgdyW6UNcTXH8Lr4oxvDAcCHEnXfPaDp6gC7BNyCZt4P2NaRSFKRpVQizDjzcCimfc4E6mC3mtQWDjWx",
  "key17": "254EZYVrRGLSZwhK9QLgXwj3EytNjoKcMbZ5wmaZXiHr8XVotRh28ERv161LGhvCNXR52ugNaLmaeuXVp83YTmws",
  "key18": "5ZAXpUBuXixXJrd9SHJYRUrjzuvWshppC2nmR48yTv2WueCS8ZKhyW9eTsd1yWeohrDu2ADxHYgtAdf5gMHSn14n",
  "key19": "Pk7UoSxx7gbBdsU6kqYksLeT8BjTtAVonMNc4XXv6e9KC5rqap6AAqfw8ad476jX9LacHVUfcDY4Txs1WPG7ZeQ",
  "key20": "4LHFHwuaUjn8evfwSVEmbFVsdBMkSspahDwmgqVqNrqaYdZJcfKXZwaupBxZDPoKAEaLuH53W3eWGE6Ma3GZeaRv",
  "key21": "4pGwavudwmAqKbMVor41fxBVoeKVnFWBcGS7czWzA5CdW9V4LeaUMfU4YGwHAjPS6HV6pG1AxSBKon2ijZhZ5MP6",
  "key22": "649MXG9gzA6bVpHyc5X5wBAzfSSW7bvHaNdmGAvTr1ipsAG6vLqu8Xo7oK9F2JMNsutfsd2y86eRu2WKUZzyvv4B",
  "key23": "3eRxFWfL6eqLtd2521jqU1mox4wEsFSuoo8srRyCDRtiqcKgcLT8UoDsUbJg3Q9kXq9kWpnGMh4UMZ2xqsxFriH",
  "key24": "5MFBcVQ9gqMmNbMBhky7VQGqUWEtgv2ik3fEcc867QiRKJh9UuMk5YUbjxvXaDokdxhDJXGZpoScDCjxG1DHgqZ9",
  "key25": "2X2AgANNXhaiWaQoktpAtLpUoMKuHwi8VKn6AMhQremeRB3tsMtzCH5wRYNTxgaBmtQXXEfNkV4ZDddMoShWW6zN",
  "key26": "3odpUdTLtTuo9yJBBS81bbHmdspk4NkVCt8MNB3PsinkXNws6PfZd86sdgbZetySEdUoD5nmcCYoPSHBUi5bcrJc",
  "key27": "3DkAXSJ2zmrVhQ3ynyRLWm6F7tSMQZdzWVdGHiU9GKDe7YftBvjjxYMUtDAv7tnbMGzKg1xe9odpQb58HEsHWumW",
  "key28": "4EE7PBnqkhHL3AffBKENLWMV2DRxYqzbwgjrBSnr9FmJUBm26cqV3MFaisQn8xJ32pN7zZZrFFXp82TivQavsyyM",
  "key29": "47VWMZCxeHeRJB9AH7uz9jwszqfUQKDsk8oGmTTYe8Fkz6Xt133ym6YA5hBDv9jdeRknR7tAg5n9HpAtgCPFSwh1",
  "key30": "2dLjhY76wicoCz82Z5wkVr8bSpBaNPSRfkFwL64CJE2V7vecRNZzu9rHdN2TceEcuV1YsXSUJMo3xBnUfCPawjow",
  "key31": "3nheRHh76BdVDQtCYazNbrxHcEsPi1rSBStdyohTPE3xbybHJVQfTQZPLkdsPqVB4MKGZhdnLSTGcqRoiqH5sca8",
  "key32": "46wy3bdbCcLLjgc29BuBY8WTJz1neeC4p6hA6LmNQsNDiwrRtK2WStc627Hs4km7xQADJwANwa4sHmNfrd9Qocq2",
  "key33": "4DyvMKLzyUujAcs17u4UWekZsubFTLrswBWYBvdxF5RskdSaRS9cgQNNfFS1x54TkUixUhDXgceg9HyiAyfPHh5c",
  "key34": "sTFkvQNbpFthcCDtyYmmfFsE4YEyT3sin1DBGy2BfVFYiyhXqoj4KnbsCvehMMobfARjfk25RqNULLj3QUFVPtf",
  "key35": "67rYTv7vZDUrFsLmKQT5fstYdMztE7nd8J6kSEftkAtcWwnABKpoWfm3DCQ42CMvpiMdQrb6b5ZQSRLgWTYfB8yw",
  "key36": "3Tb7SFpzvVYRkEU8fXsz1s8DHcCiVuWwnaZVS8dwxgEBjdmM2wu7WHzwzNRB9zbckBqgYF2trswUw7iCtzBRhDtz",
  "key37": "5TFXJMiLoBVzr4gjnBS82qRKyv99NY3JySM79RXhmLTidWmSbZbJS9DaVsY5dxijktBuPcEYwaR2Nh8jozupvz4j"
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
