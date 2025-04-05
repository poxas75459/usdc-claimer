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
    "3nMoxHEFfoaZQGJwdmpYbhrcaFc5vqvBUqUVKvg4F6uKvUUzhm8bzdpmDpF8pk5X9TetyS7pqsJH6nhXPfAdt2Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RKaxWA21atMPK19MWwQnMvHzeHyGe4sgQqjHH5TGQtrZvoQunfcADs5SEYcCwYtVoUeTo8nTc2F61RYsRanCFRY",
  "key1": "3Uc6rnmfewSqyX32tgjMw2V8spv2KkzKQPWUxP4DQtevHu7tgvAvpnvhMrC79NscH8npCzY6bwVZUXQQVkXsUGBT",
  "key2": "5awtjiJCWq8gz2CcJBGHiComF9q2k87vRrPJBqGasF6eWDdWRB21qQuDWcAGKsucbmKponcckNcGRtezoULZJYMq",
  "key3": "3Vp8ZYboTf99e5oQuyUAxLQPCJZenNpam2nsgaa3tejMAzX7phJ4Di36FyBhiJ96cFidpYfCrVBEZYUT66by2TMs",
  "key4": "46HiaVepSqFSiKgQTShcyroXvbBeKgyNxrWSLqcwWw1CN84KbxBBbc9RJSp8jWArFmHiF94iEphkpJh6wD4E4Pke",
  "key5": "2U4ueNwefadpcFwFtJSZpYLDX7pBHj9eKx8k2kiNGr3ds3jx5Jht8ci35gPgiPhN8Rn7eJCjRGHWsWfkGCmsyce4",
  "key6": "58AnAkZosvnpP8415wwuMFAymKzSKkVvtdeD1aqAs9bsyeKtwxNH7JR6i5VhsgTaji1HJqET72CJdRbZ3ZPccBfn",
  "key7": "Fjh3ZFx2uYySrPERDCxSNFwbmF17GEeeDTVgFNVPZM5s4vv7s9QcB85ga4mhMgo8ptgMxn4SajvkWofccauHc1b",
  "key8": "26ULiimAqvj2hX5jKwFScYP79C5yc13EY2qKYYkdBMsksqz8QnDkDF4h6XQFFQeJx7KrzNTaZqNz6N6dndQ4trTC",
  "key9": "2eFsF4A4kyCaeAVrieumCoQRAbQdJ4UkA5j32ShmnTp2U2jvb7BbN7Ux8wJDVBTHKxTm13EvRFmmGtajaSJi9FHq",
  "key10": "4FNTeBuBXd3TrK6HBp6LchH5YS9iH4FN9wXFbCmBAhPN87dF7fNCopSQyvVG8tkYQSGHDFmowfYGVyYnssL7agDR",
  "key11": "9waLZiSXKMbJBfaTNpPhD6rEFuVKM1GoTS1EDksqQEGZpFhUgVDkWks96Mqya5seWz4D1AtdDtnrAVwV7za8usB",
  "key12": "3nNCqoJwKWfstSbtMEEUp6YH8bqEmBrsKFVjC893wmwXSr9YiysPX2mpR3orDox1dpm5QmUW92Lmuf6Rh1mxbSvR",
  "key13": "4wYn7CDu28BBcKgf1pZsBTStQCkToiSngc44Ym3rGYP61EYtCGW4Hk3BZLteYnuhqGJGSGSyUNosAjamwRNvQBk2",
  "key14": "3aauG9dGpx5CD7tRaYayuuFSrTT1LDPHXeDqCU8S6TW6ugFcTtZGfhGWCpZXwi7ShqTRYfqSoMSwiD5RgtQ43bqt",
  "key15": "5ZMWWrVEXeTzjfNHujYHG9F4knQjPbYoqukPYjU3XNEKWL2itBkia88c6aoNatyqg8fniiTATD8jjHENtZbEnW7x",
  "key16": "4zhzYSLeHbEkNbkLNFH4yjTAaiN42yVeGVZKH7UKwBxUXfGxUWsFCuFqPaqUAc2o84QknhqAu7u1bPFKUj7fp6jW",
  "key17": "3VqaLTkGAt1ZGRjeYgrS7XEY8ZccDJ4ZCgGKy66MYHKdmvCefMi3ErmZFmfpQFs6DeWrRJm7DY2B3QaXF1kSZnuw",
  "key18": "uL7hQWWKbMu9WErvLhfu91TRpLMxwYh2Wxx86dLSjSNnmdbYSufeGGkV96y4tneK8fvpvnMPsaUPRodbJ59XMsP",
  "key19": "2ZfKRy4vgM4GtFDGtPc4rE7DesSRn9QPTT5naHYoLFLxDmeR8egDzoeDpwZgAJF3AHqM6YKQR52UJyQyuFH3q3W",
  "key20": "2K2DonwspNjVLFKc5NBdhqcVgioQ2nE1x7MhcqXTkoDrTKnonvU8Xqpagg1Sees3HAayttETHzLCVuBv7uZpXLQN",
  "key21": "3pZCf3FSsDesgYjw3mYiXB8YyVNU3phJ6UCDP6zcKH63DH6pzPb3CHHmfAndChCF4oHx27jD1GEQ44ebsRisGkUF",
  "key22": "iLExqQwJyC9uynNV4NnL3a8z9TRpqY82n8ugdDHtHXKJKWqMoTsaYoaeqXpockgnABmz5VVbBBPyy3DybxSEZFe",
  "key23": "3H2JgYHvj2ZPMA8ZDxHeCLHLhu4gyT7Sanas1kfDW2EwJkvqgHrLxPa32LTbevJD1hPtxqBNNEtBd5iMmT79hLZr",
  "key24": "5Sof6jAnNrYHtb7a5vyiAayvXfPmoF274NgnVjpsEdAB3BRBNGumccpLzQzybXsgU7guodFogRhicN1CBM8wLvgj",
  "key25": "3Muv9eENHvxzxsYiPcGhsqoXzC4Gdt4SN77Y5XwNWWE9TowBqktF7DQiYLbWenuGaa6EyQbvp12AyEBN494vDeKN",
  "key26": "4oAPNDbgdLWE697mC8MEeN6ppRhjwzzWAckLsuJX6taFpjzY6vHJtuWZHspuMz9mYgcmtsZj6xBsD65Hk1wWjxne",
  "key27": "6FdhgbPcAo7zDq4A3GDrB6xciD6G51iaTRkabgHEX3qoKpjAFTLKh1xPqWWGmmbBKSz6VfeSX3UPJrVKN7PBrwM",
  "key28": "P8zaDf3qyxrEXLFeCbCzLKNs5m2CgEZWMX2f3wasgbPxpTdPBw41sjpuuXBHrAxjyEnA3EjZPmLDZ3jnuEKKLK9",
  "key29": "wf3FzHCPcGUufrGh7mdmBKaFNjYNmnyuvgAx5osECESpAvydduvT9BafzPK9uNQoTwE8aX9YHR2birkUWS8br82",
  "key30": "2Fhx8YD8x8CrFVWPWmP7YfzZWhkBo2HAYdLioRq8CMuX6TTKHVKCcxL1po7chu3HZvmGubNFaKVodagY29GHXrXf",
  "key31": "4mSeYkgVJU8fYZt8FsHPea4QxKJFqezCkaFjLepXDJpF4J6NQk139qf1YPgBzguZyq8psGfN26ziUM5T2TuqfUhC",
  "key32": "2J5vHExDToXP1nh7dDqhNkgrHJHAbuEMEz5v8xbtt3SYNCcaqXfPkXDR8YmGTJnza27gGMqRuAdZoty35uVhtnXy",
  "key33": "57aNNejUskAykVFKJmgsPsi4JmVqmisYUrXEEwogE8a34UALRpgXRjYhnXMmFhDMotYxHsrzY8MRkwbYRDqLmmSg",
  "key34": "ZavMGwDL88KtBQA2PW8xjqWGMeyoHZJM9mLTw7vaV7NXggghvcC1ebtVXEZ2VdiLfNzQCbummqLV1tSjAuHLUSH",
  "key35": "5fhoRVj5oh8KDWpccQRo96C6N2GNXeQReygbcsbjrdvz2Xp3tsGWoRMdFNejQ4KB9dK1pYM5GU7zC2tNE5BWGaPY"
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
