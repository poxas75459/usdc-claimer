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
    "2CC1Dke11fXBkrwborv11cU4xBzvYZEu5QsoHbkRJdkNM1Y3fB19iQiuzzeY9LAP4G9oH54mRUW7yuihP2e1unKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jvTwzRqm8NTVWXjgweNHemM2q4bG9n8kbcXm9hfH9MTUtYLFUZpccvjEzuGT4tVQ12NtoUJevW9dJM8nkRZNBsj",
  "key1": "42iSxdvB7VAaFAT3CktYr9xRw7oEqJkQ3BvsarQJJomgAqFBphM85TeXNSB25zFobgUaWLnc24UDm5aAxLDA2pHy",
  "key2": "3HYspdsX9XkuSVqErMr3amApoJxQ8BVe4Cn5d7h1HLJDz5eQr5PSmphsAB7uhJ27fetHbB1TfBaBntX72LRrED8z",
  "key3": "4khYjpuEPDMCY7rxJgrM6R9FJjVPHGhpDjmZCqckxQxYd5EY6wTkh4QUnFLrcBJh7b2gdLq9bXGbDDNZQxsKfpCD",
  "key4": "4G8u29wdTFvG1UWW9F3nKkL2Q2UPpmDrphNbgf7K7Db1nDy8wnwuGua1GMu9dMJm5F9BYQ95voFhRphWgQHHeSNy",
  "key5": "4EFnBLXyBdscLPgSKNt82h1KdXx5Hhia3WuefoQ363VuLMuAGfCYU8JfDXSzHeeC15UsmyfAz8bxsaKsqYgqEqUx",
  "key6": "2s75Qc1H4tkStbcmVbUqmqxkirzKnbDEffAbKUfLZGV3tyj2UyYAKHQSkpeuzWuUCXyLhdLpLfJhCxNNxsRdsYPS",
  "key7": "66B44BZBB68XkkYXjVWayYgT6qZQ9pCDQFiG4cRDFiiRz8HUQ2C5M7P8v9Zcn4tfhKAZWgyqTmSKJMuYGUWc8Czj",
  "key8": "3ee2EGNMA1YSG8m1TKmjJKQWzmCidB4XxqDXeDff6ukuWUkj43Dcrv9BL4Yk1Et8gQ8vd3TotKPAoxTvUTR389tR",
  "key9": "CY3gomGFEpGxRzc3gZ8QQcEzgEkoahuPner8k7XDULVcNiuMj3vnsEiEdgPPJPnaF29aAPisqaKd85zG9Emn6st",
  "key10": "5DF7jfBgLggeuj2dwmYu5jv8tCxV3qaFNEHcM1MDMEP9ST4DaqtmXuVPaCQ9baZS7G3F2zv8BHccPKCvrVmnRJpE",
  "key11": "4CTrSp6P7MLHcXpy45kswG7Ztes5R5w2PkCH3FozqAsxFSrtDhJXyhq8sejMfhifUHtqwuoAPuw6UFnAvxB3QK5r",
  "key12": "4oT7p1EgvLUSXPDcwLK4ofs51HqYtCrqXtQXLkTUg4W1eYEhqQ7u578CAoAzxstC8knXV6QCt5GTtiqQEuhCcVuS",
  "key13": "mDzFqEtxcVomkuD4YnAbP1pyuo7K6LBi9ZAEqbJU7QgEPrDKHzCiktNwfPnxVKHoRZa4PMAmcPV9ftrnJWgMBDc",
  "key14": "2ksnfFZP2wC1CvFh3dLd2xBJ2yFrkr81xTEh9rrRGUcWVW2b1NGN9hrUGH5CJz4RjCKkksX5DsV9q1MEAA75uzw",
  "key15": "2KRvgy1DTMerRUUoy6UbqUJrrrAcqywzEComwsWrUVqg9NKrCZK5RLniCaHWUuKaTY7yZC6erNLovYhTgezUsdWr",
  "key16": "2bYPikRQrxNnYU7wx94c7B3uVXmEeS14BCkmsaWtVwr3ZuUgFJC2CULAf8hTGhQPCgSFHw8iC6BCkhUb965M5Whk",
  "key17": "34ZsHSYzoEqcNVzLKNTpFsa49zyF9XDvia3DrAYyzvX9pTYzkSMfnMNuCvAgcs63KYRSxjrzQ9AZTMFRATz2VckW",
  "key18": "4T25ttYo4wkMwCvzHnpzy3mu1HC5fbgrGrxnNtx5RGqLWGVGjehxNqpyaGLJJ6r5m9YZH5A8qYPgy1UrYuWA2JiK",
  "key19": "3M5XmX1BAoJaRrXwrkt95WAYH2d5B5RvBndhcUVSZePbrgd12dGRymmfG2brqd11AoB2PwUxuNXHyJLwbD9JUu7d",
  "key20": "mQKFvAGpVGJmEZPsai28Ui4zZnVv6vkqriSHo9DLJNh8ML5Zev9L1RTttzyMK6ybihbJHbBRVByB28LWbDUjo3z",
  "key21": "iCF6cRVEds5yjs8N6WpwNFMQmUJphpiEfi6sSczdy3J2vWQQEJiVL4HqeiPtyX6aGnZ1h8M1TRc4fFckbtAVGq4",
  "key22": "5NgR8Ae56ZvU59bVcYhxm7GjbRVHdaCSsbrhink9U7hUyxmzZgfXouVsuKGqM84WsyJDP5DmUmAgTJd3QPSqGoib",
  "key23": "3qjGyJftTHUjbg3ei4uFiSpQFtWCpGGeaQXVGeZa8YWmpU6V27TZRyPqBYbmpkHb4QB4vpq24iZ17Y68ZKXJvALy",
  "key24": "5R3eVbUzmnfkZb9DamoqewPoDF9jJUHy6ysyUjX1XEphAbwgKz1XD2DyekTMTENPjRCpWP5e5Lf7TwVHazcuwTHx",
  "key25": "moGk5npZtGjEsoU3acbQhJWohTSWJkEErxgKDNbcfSsCYin3AzE63Jy4TYm3CfUxyEX3gqsuDmBUNjm1JxuNFuc",
  "key26": "b8hmNmR5wQqvB9BTKxqSrfru7j7qQjS1gtnFQMJo1UGANT6zS46N35HV8pnWokFfmf8ww7SMqfMdBUFLMydBm43",
  "key27": "3bS87adRLTMb3haHnJY6nkncLZ7GLwXcXMSsbyCEq85P44SPq29AGNkBENoNUVaWnRMXbAVWpNqPSAszFthufomT",
  "key28": "2NFWT5KuFgqnHfKe56NWyWVjcPYFWuP7AsVCtwQjMkdYyiihLmBLrR8goTNmJh4ffWDzxtRQY4bsmbeGqHNbJ1Y3",
  "key29": "2sAZBiT1LyCtegyaQtiFpzBTPRLKHBepQs6GeM6rgdqJZv59HJN2SJNdJNM9Du5MLxsEPqDyWLE99mkJZ4nD4cU6",
  "key30": "5Uyk7pXYdFruee9UKPqCQSdeZqd5D3oVwg5Rd5w9e3ZQ9ujbEYciujqu4AeWwFnxJPH2taQN8KVLRmKeM3WZcWpc",
  "key31": "4Fw5f1cmtBU8rpnfPod18zzocZxN3wnAGbDVwxeB6cNZ5kSxehoSqn4V6rZAxnFmZt1aNa3PpycDHt41Y2oDRLHN",
  "key32": "3W7kj4mHMuFXPLqW3Ldq7FsXWimWrioD16Ww5YFRB8z1oHPq21xd8T4EiVPhHvcaX294bkAe4R1ExAQSRdDPftrx",
  "key33": "5NNXcztDGgdJsnh6s9c8rwit6BRnHPUFys6MLJVaxi33iNcXspAsFLBXigNErxQFhsxgrtfeVVCFB8SHaFD8NyLf",
  "key34": "6JJctqteBvUjtA8CfrjJwJ4QybrfNKFaH9y1MjGsxX2hsvRwQNxSwjtksD65yQzuGHzLEuP4N3pRXFbSrR5YzJM",
  "key35": "31t4NR2Vb8aoaRUw5zWgDFdCNvpf1aznoT9y6fuxiLsahmiKZqihEF8eEAtBjgyW3jYAHg3BCNhnQsdEcua83o3i",
  "key36": "5AS6dgekG7foK7grbqezhdJogmXr3DozTXX1KBjckaRK9H5yhEgYgxhMzGWbo9TVzEVHsudwXk7wnhvHYdWDVmy3",
  "key37": "5z9EsZAWfwwLGzy9omiVVtqzFZrvxpZTS5QxyUDMoeZVyxnSRPbaGZkodeqiXeqdmYi9pJ8rRP3xpvfYBq1RbDaj",
  "key38": "5Nb3eR8GkGafnHZvRco31yaAMtvayQpzQooTAJuxU19789gHHvYa3ry7cfKrvFjvXk41BAmpzeZfx7dBNW8S5n9P",
  "key39": "2rBSURY3qnagozxJ6urZD874KAGANqqjPcxBXnEyoPYooZX2iNRwXYX1956T4AkDLE9fVEkF6fgmLsXKYYBfEG2f",
  "key40": "22tHBhMt6tcTijtTrkm6PmXyjVZ5WLW2SeXBmGRbiXjt3NDwxuKsaDzmKGJWyQ8h4bXJL3X7DuU26RsnoTozrrGd",
  "key41": "5R3ZTfwQtmMFMtwd57JQSTQPb2TkemZ92wb5ENZMw8wErNBppDW3EUAK8rrFa9o34yNKDtUTwGEpH6KTYj4HsvQe",
  "key42": "2f2J6iwEcGxJUc1nwEJCTBib5KkxEAeLuiYdsQy9b3U9FcZhPY9XGrXcDiQAFippG3Mwtz794rTUmLCuaxWVYJGs"
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
