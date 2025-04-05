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
    "gfVum2WneigA55cqkcbT4yYSYhMcfmfPtySPJXkSCiuoeEUZVNgBwbX98FdLkpFN92CX8FiQ5GiYiFWT9SEsAmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TA1bz3LENjneayhZZbBhZozaZK6x1pVw4GxsD2QT2PgmPTgpMk4RMi3YspVZeLAbnuKKwpLAw4xmedoSRR1j5d",
  "key1": "31SCEUrgKJVXAUPUpGyjSvbBAHyf4UrWpQdozUmCgoBmPyjrkELAwq1tG8RQwbfxnuSpHLxeUnjHjWjTTpRxXZ5t",
  "key2": "2Nrq7GzJthE6c2T7ZGwXECZS9iaY9pLKGw6GeAYB14R1cG2zmX1uETsP7tCN3WSehHG5dFnMuR8WZvENtfeLLAzv",
  "key3": "4oAZVcyM4Fb3q1A5eW5WHpR5rXzAq3UUTt2jyPar5hfFXufSzRMGLu6hMu59JfZ2J4SsgmF35cJskWsAQkw4uh8L",
  "key4": "5xiZSA1WMZtLx6uxTvfn9ERVSdspTvgy2c8JQBZZD9n3uBCfMSuFkUaDZCUbViXUTcPKVqJ7KUTmeeTyxhWqzaky",
  "key5": "Yj4MuZEYj4TfLQ13j6qyBWKFCpUmaULCwuVEx4X8ynMaMwUqJa4dzoBw1ZyUTWH9MRFHT39HbB8Pc64CNFmqYZ1",
  "key6": "5YaPwtx1GT3sAUo3m8BZkBfv8WHtSUf5hN6NbrmbdDwYNz5udPrudkkoGt1jwWgxkmcsC2AB1JJxprXS9o4ZQH1C",
  "key7": "56EVd3a4d1bX2Vu8XTFu2pRwt2PFqTzBHF9JPKvMar8PQuWkfmm2at7bYAavTd1Lwxzh7Fygfgbk5EyzcTNVn7tr",
  "key8": "3FnumVaMdcgwNJQXZ2YirZhE4jdKVy9bySHa7hZCFwg1PAAC6EM9bYEmhsEV2N2cab8eCHv2Z1UfKHJmiRYyDA8g",
  "key9": "3vrCNfY5fzTkoNwwYntfZLfbr2sPWvbgjn2axMm5R16ip4pFGBPTCy7UpjzLf74Q9s6xV6qJoDW1wPtStLXMpZ7s",
  "key10": "58i3jnAxz1F5C6LBPjhWdwkvNHqFqseWMoRdWBm9cR71Y3DLjNmymC98PT3Vu5cWuegWoFBcmakQp8p7vfabjhov",
  "key11": "NPe87tbHLu258Mskf97dEWYqp4LvaKGMMcscEM8wabJtGk36AcTU5Pp4qdWfXrchz327mUBMy91zFcds24J41zb",
  "key12": "394LqL8XoHA5KmpVPzh7DPPrTu6AsozrnqH6Ls4sq1yDM1dgMcmhuR1dxRun6N9Qjwk6GjZoyFDEUnFeYPQB9gWP",
  "key13": "5TReurqf1QAFMdrgM4EwJf1iPQb4yJTiNG712W2mkVaar5Mjc6YQYMNhCdnfAmeGTXrDV9rxxXYtNwzYk8atdXzR",
  "key14": "3YPrx9ecqHYxqveuBGXvZr2Qowa8yL5pZz6CoikE31VUavkmr4Ze997vhwAus2TvnG9Pua76CNxknbkio2zf4jDc",
  "key15": "pXNz4xYt7iep2VfuHFbaTQ95Fytybeq2aYhYbwubKcMMwMbABDj3v2SGnqfuswhuk2mu3K9LkwYXMHCQuCYGLB3",
  "key16": "4F5VnCFszGrZys2ymoHU3xqHhoUDe4p7P9ttdLCfjtuyNojk5u8em113ZJ42rb7cmP67gnuudc7JQXeukFXq216n",
  "key17": "Ln5uM6cGsSHXovdQfgPLQHzNPwu26nxs1N2W58WGwuw2NffQr8vjKZXXgBBESLMSHeoFdLSVkPbrgq274Q9oszq",
  "key18": "5vNFyw7DW54BtqseMKQ32u9LhiqqcH8v3MyK6GLMaq3EZAdQeDuXNFRTGarsyXJXyqgaLY3qgXFX6nwc5zKy8A1j",
  "key19": "3ALyA8gRAqEZ3Qs9LnM41ySwu56ezwMQQYdAxzakbBoAvWUGKRkQr2wRKBMEgCVMErTDRVZSUVHj3DB3fKckQDVB",
  "key20": "2BZsrA6kMiRmi3tD1xP8b876SGztkwQp1PVRYNLCdT1j4GkvRAYzWRZha7GnoRRQHKmV2RSGtREtW123XT8NLWxF",
  "key21": "4zPAytFtHpUZfnxvpKcxvUZihLCdy1JuegBLjxsu3YVqWJLWqUw6m8VhhDfEnhfFX93bEQLi1a7pbMfmouhWAnGz",
  "key22": "4F18iun5hzax525VDXdA9BKUbbFeNnR5oiyDx7rnMHBFNDuxibWm5Xtnb3F7rLoxFQESuYXuymBgWDE5QmR7zV1h",
  "key23": "4gWhPDBx58F5o7zY3zb3VMUScJZV7NzRjWAon5TchK7hMYXZEjbaqGNbocTqUYcqaEiJTgBzgwKK3AajhGSWb89i",
  "key24": "Pwmnz9nJc4Dvv51sM8Pk8f7WeFrbnWgx73HrRJeafstt2DWy1FaJpKLdn8a32jaf5rSpXDzYYraUweyR47HGC7C",
  "key25": "4SPUMXx1RT73akyLegzahNKBDmNGxpqk9JNYHn7LQALP1T9ZRiEALCYN4tzEwM2uq6Nwd8oZGwqdG8BAk2nwhFk8",
  "key26": "5h3XQ9xHwYE1FuQrgKCFoF7BJRCRx8WpbHoRq46GS9sMfXoVdSnpFQQe9Ux2jvjAtJNw21hrKq95bzzJBPPFkicS",
  "key27": "2LVxAZAee8Y7QqfvX3oZ3u5wt5x4J7BU1XkU1wMumqriCeUBtqcZwnozEfD4zVVR7Uuzy9FV4TkdnCpuEcZMDhG1",
  "key28": "5paBAkbda5pirh2SHJGq8UvSVxdWFwziopg1BXVYaS8DWxCF5pta1zNSzMePrTd9BqQoC2KkYJLrrx3r2gwqzNZc",
  "key29": "4Xj9k47Q27VbcfwMVgMrdrpQit4rmJQiUMJVKYWjW8vcDWMZMNqrrie6rJ1Bd6HP3D3C6di6ZLkX9rbPEuEZvPQh",
  "key30": "2TBp4Yt7X6PEd7VYmVbjQdFsHeLyPZ4WgW9j2td8ebnjPW9DgtHYgN2VFNsVTdTpD8Kow2Ei9m7pEdBZLbGV3Tug",
  "key31": "k8F6EG7M4z5h2QkggfGwWNcGp83jLhvaW1KcwiaeSUXX8Yt5tAvKvo15qpAxWienUX3aSUN2TrsBfaQb9VRLrw4",
  "key32": "632tP7FyG7Wfyip7RLmXZu1jeN4Cz4wXcDzdDRiqToGJYk1mkyAYsMqYakgzUeXg5k4CuBK2TZnyuMw6aNkKzzMV",
  "key33": "2HD4tUpqxngA5ntFMo5bcCqYDHX6b23cZed2x43b2EfuPbT8BPnhov5cqgvyKvY2ngq1sysPivWqZVTc1HPfxi3d",
  "key34": "3ykhA3ygEmapzssZu6DKYjWRuDZyLer5KNjUNrY5bq8w9csXVYAN1Zd2pjyRvVSaKXjCYapq1wcgRU72TbVRDwNN",
  "key35": "2yVNyVfFKCdK2P71uG8t1YxTWfda9zibs9xCnMxnqrqnJtc8WaLTvy7thfU99D7C1HwrSd5yLHaFHbPhczzqsZqy",
  "key36": "4gK1jYnu5qzGftsx6EBg4pjESzD1xg1L3ZdiRirFLDCb5Mc8wEmB3rfuxQ9edx4vX7LZ88wDcLAmFGV4wrfC9eTZ"
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
