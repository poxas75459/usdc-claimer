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
    "3ftq1efJSVAAj5ayAMDveyUX8kob2YH7JYxt9A6t98Gxy8dqAwXhAzzozdR2fNJsA21E75r6LTHAFzymJRpfNfFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBgvGoVEa5vgXVCGsb22Lkr8JEVE85V2aBRebX7ab7k5C5yBKZp7RdB5QHySfBQLWXbCpxQD6xi5qkyvvdbvfpg",
  "key1": "3ioAtTCJC1FHbL3E1xWCuKn2Cgt8kQDw5wKurrAkNQAVKj6hsBV1GanECfh9iC6eeztz5gR7KmcEPyYGPo1pkM2p",
  "key2": "5oVju5wVSgD3PCXVkdw1UzeDM6GLQiBn4V2kUTwpjyyAn2vJVJVom3BCUCRTMTxxC9q3FYgcjttt9ChMEUWXNBQ1",
  "key3": "4daY3euP9Tt7MiUJk61yr7RhiQuKsDURGbS7KpjaFsHMfZQUSUbsmJiW69KMANsDvDiC8V51f1y8dP7iT9yBLB2f",
  "key4": "3fwFhTCf8QDFShUXChKfuQDoY2fd2AK435iPyZhJU3LTXBqU1hXGRcYZJenc8fMiDXQMnmKvJXSKoKFsPvQMrwAQ",
  "key5": "2MN7LT1bxLSoZQ4cx1xDcCibcE6zxw3AHPztQ2wPVjuLcuSA5j966qV51aqqjrXaA9N9kQyS1rQp59TxWNhxKaQ8",
  "key6": "5YhrD4CuGWK44rystgXs9nNZokbrvVHJ6sRxHraVmYoRUn4pyJczyFWpdgM5kh8LWNEs8LQ5CHVqcJe5SFevdwqw",
  "key7": "4hGTSVJEVo8CMiY4Bqnjhr19kE55TWaGTcLuTsPLtkXcFzuHBeK66kPT22LJdSsFXySANmQRpjYhYaDT1Zef7JLr",
  "key8": "2hU9PPnd2m7XwfHQLHTUKgY9jfPrXYsdRLxk9CqdaxpFihvXwFjWzdiDcoGoZoDKafhok2Xqqo4jm8sCqwevcPhT",
  "key9": "jVhwEjkoJFekZ2GHqa5dUW3yVhqkr7DjNW7cUV7A7EUKiu66b7qTUhqJZj1krPA6AqKEpzkwNZtCrX175Umbx5H",
  "key10": "4cUQrTyrXETwaVarzGQcTzxDkJbQEAANdFUinS61Mf9Pat8z6d2jD4E5fmcARNh7ezzCsH2xqbLgSXCDmvEXM4PQ",
  "key11": "2Jvm43ftkcX95cB2tLJ6xCvFLhH1Uc8tm8tVtd8Twr6Zh5rQTjT3VkTCLGGJfXYTp9zrWoKjCcodxBtKyWzxY3MH",
  "key12": "57CDbr48tWBo1VNm8P1h79FDnsePY3A6S3FzdDydmteGnxYYPBxJZkUAoQjYMvSMHoWdrCYZSLdEPyXLig9HE8fJ",
  "key13": "3hXNMgtxSST8xozp6AYf7HTp893Y7WKMXUpwZDt2WXSmWRXjwykS2zxRk1aodKvRNzycixKW2aBDb5pn5NdQbp4J",
  "key14": "5RN1WK9aJ55VoEmFM43ZtEtRDmF5cwAFMH4M4VAr4sLaqTXnArHfdmKv3KvMb7rqiFVT6LUNBvWU2DrwTeidLug4",
  "key15": "3y8Hop2i7dAGGjekB1Wc2KkbQJNfPusrETPy1Rv9G7EsHaueo2P7pVSqkNgNxq11ohBFEpqM1JJ9jLjoWfKtXTXU",
  "key16": "5xFk7nrTLSaeiyYTcTLP5sVsdxT6C389Az3ejYuzzJLtUpcmnGdnpQAUY4q7bYzb9CdqTQh834CpSmCpgKqFSxzD",
  "key17": "2kmwygmyGuCpZGnwCa8VbY8FQUGa7vktcAnvpNJDFKh2uJyWCWUPjAF32jzwsWrpkBYVSvUfaSwpjRB7g5b4Q69D",
  "key18": "3np6xkrgrJ92ZZDH8i7FSh1HfBxAHQYie3dzPjBgDtL8bHv4jZQ7N3rnr19VJtD2thGKKTHZCPHjwHuaZZygyCK9",
  "key19": "5ud4TjqvS2jr4dVShBjDuJowRsd21CTR7hEDGzzfQ7c1qXsdsNk8LA4mvna6eNYtT86tBoDwEd6C6Dxp4HZ7t9AK",
  "key20": "4A2GYSVFMNm9qT726YmLZEr9sznK8eBU1fVGRiTzdH2rEirQqgSijxGBwq5tCoXPG3ZKUrXAhyTnNuq5x5GHMGM3",
  "key21": "5ZumPmFAFXmSg3nsNHVN6ijCfyjgsCSy8c6X2RegrStspWy7uPEx2FAGLNxhoGeQVDPMbRwT8Z9Y3tCqeyUvbBHK",
  "key22": "5ChUoz2kMbcKUSFJESZxkVckUHYPRcEbWGeDYKxVik3h1rSrSFkZgvodNuhS5jKFaaAu5JBxasJ6mx5jmsjcvhzE",
  "key23": "32VPRZc3vkbDh3fNg4q5vH6KsPGqTiARX412hCiP2BEZ9CJWHgwJBxHmfsMGWJKSuxHBoVnMVPi7EDYWA9vejfQK",
  "key24": "2b6iCPrpxyGM8v5QzxTiJPTdqnRiEqLuAD6f5koQfkLrDTCHJ5uXy2UjKtexBAWmubnZ1pKPkEZZLgHmA48kYqxv",
  "key25": "3p5zfBhXfSWZVjUBunMMaMRFo9Q8HMS2PuKH7vaJ35sksGyvjvD4Z7ynaY6SZz6H3i9kbBfac8rNXuaxoVKmu51e",
  "key26": "4ecYAJtrkccjTMiFDAXGX5RWJZ3FmGiQ1wVokT74s3vYjRtvB2ZvpkUQ8h4651uZqufowBLuFsqyVxtdXUtbcjMa",
  "key27": "DdZS2wAzejGNuM4uWtAAZDh2sDkEgjHyBTwt97rxbCPpyJQnUGcTubFvuw1s7zcaobXYHhTGSv3Ehs64jgkp9mD",
  "key28": "4iMRsY27ZkJVKao1haY1EnU87HJP1mGM57qdo5BkHLGuSjMkwcCEjieACdtd54vYJfvjESamqRpaEt6vSQqaPkY3",
  "key29": "a1D9mphLMFjrKkN7CcKgA5SH5fE2QaVdTwRKtra4Q49RsrYDdVoq44i1YVsbbA2sneq4Yy21rsP1NB1dC9Lxytq",
  "key30": "5mMKb3Yjb2nQa4B6oMYPBPt7uKSE38cR2eybtQWwvAUvjWmbi17VMpWjj8XFDBB9WXdCQT4WmfQtzZNMskD21xtz",
  "key31": "3Q1aRDTfQabeVDMBUVPXVRJWM2PY6t3kj87cjKLf1AgLzwLbedNXu8gVnYGFKWDNRrHi5XFLG8wjxCCdUqn5JgLX",
  "key32": "4s6BGmMdbDGUcHnKvumnjzCf2Wuo8ovDrRq7dtkzi61jS8tsXF4oCk6PX94PtPezJD54irWDAeu8aHEGAkZkXWDn",
  "key33": "22kBNjd9E14WVcXUaKaKnzte5LssJyqt73ky2oJmSdGTMp9ryvW4X3Snsz9pYVFNsVXxPqpkXqQ1PzVAVfHN33zK",
  "key34": "wyWrGeVVJis8LjvAzvxiuMzR5sdVu6kL5xrRCN8EcXipv7EAEBYRbdUpEQZm4FXmbkHtHsFjwAUWnQR6b87DyCn",
  "key35": "3Vq74BPkEwGixiKzMBLgqkqdoJSohoXYQEE5ubknyNiyVkPej5ASAVP6yiaknEpdceAYBF4p1bXYp214sQ5Lpmuf",
  "key36": "hVtQkEDFM6ZS2MkEKLdCeWGVXFudrJ51kq35t9u1vPN46ginfnzHZawYTVN1oSeW6qZqGoWeRkzzp742fdQVarr",
  "key37": "cZE7e4Fyxtm5dRYZqw27JbjahciGNKa9BNiCNC83qAjvXvofpFcQyWTA2C8SU8TbF93CngsGdFDFZKvcZCToSVo",
  "key38": "4GrbKHK8LNUXj4rjWtXhZdX3bQQdHRdCm4oGAzzHzZZpzArfDfK9GGjG9jCzKUGgjSmeZTMvCFzUtbpACKyDBTJT",
  "key39": "4NEDF3g5J8m4TMHEnSHEXnutJx9v4sMhk9ujVXLuN6CbjRzYcgh43xr8tKv1Z96aZK8cTK3txA9x9sJMvFgmJ9n4",
  "key40": "5CSyZWkcCs7tN3JesSZLsQFyyPC1amuaVZH5fGBHRxSucTk8DEkfch6w6AiE1ZLw7rd1JjX7kNACFNxzMD21d19T",
  "key41": "4fncLXudybAhVf4wuqvTaMXh3ck2dJf2HygxJY824eUbrWqZQR3tfQk235NKei7XTKZCV2aoRSq8YuoMG7fXDCF4",
  "key42": "ggvP3AGUgFkjDoXKjfM9F5qpfXBgBmnpaZ41muM495PzAF3wYbir5NkFgeSnHwD8rnGAgHtz2o5gnUidNe5vRg1"
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
