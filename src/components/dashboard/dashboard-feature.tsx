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
    "cXmHMC53gJ1jGyqpaThed1aCfJm7fzs6gXDzecYemzPA5f1NAayVoUwCp3uAdiRRT4reYJGDCvjGAeBgFnUGqpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g1U37boyCwupxRXnAhxY4vxLvLLwuA2gd8yfMJeWxCnquSn27tt7nVWHyzVc9KzyuBweDnVS46AahJftRaCxdEe",
  "key1": "2RteR91MgWZhZSypvADEjcXE1S7Ec3LUykSpodtejZPGA5io2bZgwqTcL5BncvMoCha4omD8ZzyFRzfDb2psNsHX",
  "key2": "3D2UGA4H65mrrPfNriw7XjUpqsDH4Q9vFyeRAdwzHggCMDY65BZgHGbwnfF64R9xSXf3Ndbi3QYVJYLYeezNvBzQ",
  "key3": "5X51EUUa3ZRaTRMZgJeNNw2RJTVjsZ291Rgsbp283zkT7189HezqnPZ5Gpxga98PeskfwA45HYEfeAtPoY88jipP",
  "key4": "4cbEQogvxjCwRohfsv7ZH8H1wwFUsJp11R4KHFjtBYrJR8RvUY9eTT4geE2Xfq4uJP1GcVAUmPmGtrRNenFX4Q8T",
  "key5": "fCMDY11n33CbJPsFidU6m7rQaFqVgz6WECUD6pQ7CKjHF4xUMtx1o8rLZa1gyTPtahEi2nusownwMobrATdhoc3",
  "key6": "4n8aEpgFdpEGAFvAvTN8sUFBazKwnPcZ3GANGTrXnb3JnJUTmnHBBCRoNx3kJi2EcHv3QSKAvXPDDE795vo9VdG1",
  "key7": "2jqPo8NMLU3XZZDnH5U7G8n8rUQuu9sR23oWs27dNiUaLPYqjkCmVha9uTUbru4vjZJEYTLNGQPtzaGQU9KAsMEo",
  "key8": "4yaFePovftWufanqyPRmpKFaY8Le6VB5qm2nAd5QDUe9S9DD2b7cU7tx2WVTAdVDztznMYT7Cevp71Zg5LcmGQRb",
  "key9": "3gEux9n449NPFmgzVKdgGf58daG5mYhVZk2a5gT9je6hF86RAKuBeuKUJreneKbFitf6sCnT21hgTvEGFHqGNeyx",
  "key10": "2W4u2BUaJnhsXG6D5vvN2PssuhekpeYDfnCmiTKwn4GivSorA9nSLDhQbQhoHgYWLXHECiM6JNXpDauq1GFAktcC",
  "key11": "2mpBMmErgBvP65Gprd4mVy3vbVtdFxHNJyragxGVbB9YVCjMenNae86cUYKoEAQPSxsN8PXVLge9Aoz2iR5KsZbx",
  "key12": "2Kn2npgbjScE1u5mw5GbEpfXFLjYp1eYwYNJTN8cQA6811ZugUjvGBFLgM1tCr2mf3Ch4Cijed8MwfufomQ8Bed9",
  "key13": "2MxcixdwZsxFi1QhUSp6XXVDwiZNRCR1svrebkR57okkRDorAgPspv26zpjWX2jYhuLEqgmAR4acq85ULgVUQfm5",
  "key14": "4nfRsUgRWrNr9hnqJMSP6JYGXjh5KmWJRxBUZtLPjxC7qZxp9zkwKAvXeQf5xpyatQ4W48Aw1bYw6HCSsNQ8UQhN",
  "key15": "3cHMcyyhBeQ2Em5yUSJVeicUe956ozjCocCwx7TVLAkLx2wkpigYa5DUL2uQ9qcMQMuRQmpVGd86HgmvR6Mz7E9L",
  "key16": "p1587c7x8mckRx2UvoKTyQhbxezLX6rWtLjCJAcrQmqjS2613ACWqpzfbJNi8efapR7KRFMJwVqayFpyW25vtnz",
  "key17": "65D5eMSri7WBgmymrP3u8eNxoWcekTYgU1KN9GkYVmsgnsNZmiqsSuTpanTzVHQkZxi8wvFqLVjXmhNXWE24Xpbb",
  "key18": "2MthT3qogL2FyaZRgi8MmbV5NhX5SsDZXdVAnum51vdXHwXwrzUKoZCMg3yETeUy9tgTH4SsCoaykrzpPyra5HxG",
  "key19": "ZXewvEQvXCsXG89222UkRmQYJkZBSbB9CZh8C5Djd5GfbA8epT5JoBUBNXboY1vqmmm3Rpjyy8zCYSWydDzE2Nz",
  "key20": "62AFdF4xqGFubw5mkqtHv3kWPD8AyGis7f6SCySFqPu4Z3Sv2gU6EyNQ9ToJ358VdoT97k7qFkd1gb3goEuZBtAY",
  "key21": "51CYyXP4UQttwE8HELxUArVtKGnYtXNZuBvaL9yYUNyXvqMR4zwbzS4hJ7DngSfW8RnXp3PVoBdZKYDxS7PbfRqc",
  "key22": "dZq2FtwdAmwEzaxn9a9Pej6HdfUdjRYhetd9JiN1jWvTfMJAYV8HLU61L5tuQKWrEfGtDEspys4xbbQ68UiCTVK",
  "key23": "5TfhQQXKoy9v2LpdwdHQzdgJTh8AB4y2TXN7Cps7SUpbn8xCDuJz8VCPbWJ8VGXmUYgfvthMbo89Va17Tr1WWNBo",
  "key24": "4MmmfoxqxFcixQYDKPADPj3JGCemYPAytUHQJm3ypaXGeYU36DmyJ1X97L3sRxCnAkEia47nA4TzcTisrUZcjPbn",
  "key25": "2TC5xUswoaRArnePqrjaFT8HsXerMynbZPDaXvnLbdK6xu2J75xRFULkX2onvZoGgs27VgfETLdRYhVZH62965fR",
  "key26": "XRysxKn8SwbBJPDKCMPcxE4GV69XywdDU3WFR2cwKUBjqAbJi14QGN4b4oiHvPpYUNMTxdmtuoGULYFKsv3PxTM",
  "key27": "2WCxD1W8nDku21rBukhgirzx9332GqWj2WQezA2tGWjq8qxrVRNHqXkKMEhAoK3qkUd8SgLATn6WPhTg2u67SkpK",
  "key28": "f162pUyiERQBKUA5zVaHKTE3ikduYtaNLTGVrqFqZB7T8SMkmMVKEPDYnhw19GAuqxo5uygPYfb7RVtwLS4zrwz",
  "key29": "5nzX6wvhuDBtHvH9SoXF5dU4MXqQ7UZWWPZ8pRpyD6wjQdBgUJGRSR8d2pYN4qjDtpMPaaeudaFS2vLbKZQWzitF",
  "key30": "2ExLiipsF3SuLbSnmWmYNTi8uhRkh2rV2M9zcqLUUd1arsQ47MNHfxETfDKGEjH9Y21YTt4Uv7dxmSgamoaVYvQ4",
  "key31": "5Xo5KY9S3KvsWbDzrYCEahsKHsmEus1xDVE8hc7hqQPPEXvZ9hQSmp9b1L6zzoi2vSxAK8BbQaZRsuDMCGPMiRoW",
  "key32": "7BH4pXaRfZ7oP581ycLAfRv8j9Qg4RnGA86WSZTtbPToG2X7Ec12zqnzECATk2EdyTU6obRbH3qDrcDx9KGKphS",
  "key33": "5E2G9VbeJVB8nmWnDLayYmbR6XY31ZgfDgn9zAXa1QAbVe5WY2sqBwKtgp13KHNkF9GeAn7pSMkjXBbd5kpGbDLd",
  "key34": "niogUGKU6En65HzgBG96b5EUpkb73K4Eaw5dFrypEmMLevdsta6zgs8jd85k2yQxjHKRCQWbRsb6CHrio5NLytY",
  "key35": "4dXuuC4djyLJ4BZ924RncLjRNLFm2MADBMenfbmgnADAShumhbCToCLvoWWUzKX6Vz8mrsDoJP5G6CqEXdDyoneP",
  "key36": "WwLvFWuDggJnJbPxqREd5KSf3dV2FsC4vVinMKHmHrhnLvc7QMPdHZb1oe8DvpsJGLnv56TYeSsfcRcJcujWDEd",
  "key37": "5NANW7TsFKgrRU4RqaNkaQ7f1DB9HjUKh7oqqor4kUNe6ktTQ5Z1TUCDZeqj7G5g9kor37Hj1w5nDio5UpvU4oqs",
  "key38": "3MfWrcF9YMEC71tmSSfuE2UVWeGTLfnff44BCJ5mpBpFw1r9gooQ5McGqmyppofpJb1wG9hCXj2dWp1QiYBd8Wfg",
  "key39": "35yJpx6msuiis6XTwRrq8RLrQpanxbTn1VUcU8Yb3z9Uq2TYZ6aRrDyvHU9c815GAfENSSXdUfJ7ifx3iC5rX26Z",
  "key40": "2ePKeDch338Vshb1mPufhPEKXYqsXJRyqaieqEnPc5t41HNyKuTWeaNNnJvCCzviNSbyKFxfg6LLLrzAjaQvJ1NM",
  "key41": "4xfC1beNg2KVmZ2V6fxZNiRC6WXn7hvdrHKcMAzEB5Q3m4AihZuwCLAGVT2PJZ33YAtTSSeB3zT7RyM44nzTbCro",
  "key42": "2vy8ofknhryJHw98Qs74yJxBPRrxmVk1oaHJjZfTQU4ordK63EtdhDQ99ArKkXM1zshrYwjfA7VXoH2hn643opfK",
  "key43": "2UH218C9oh9LdikjHvPtnqHuyuVMKQ5wg1TycMDmtfaViUebcDx7vVfV9XsPU6b5LmUTUgQ7NoPbpbwpdQDRaRxX",
  "key44": "3apU6Y2q9mwydsTgZuzVHqPNqJDf94qZkiZcePrqv7sJ4cvmaqqoYUthAX25a3HkNRx8Vvdqpb6GdnLed2pAYLXM",
  "key45": "4WwkfHktW5Wp43USWEgZu9TGH4G8SoUjWrEZS2YqQsx344vNVWsV2M64G23GyKzHBdd5AoE2AUekC7Cmzgrq4cHg",
  "key46": "3nLAiBS85SBeajzEA8hyPwbzqYHuhS6Nh4Gq5RdeYvgDTpwGAPWVVC8UvtYJv2USwb9w8AdHtSgJkao2w2jgt6Bg",
  "key47": "BsD57f3FaMCd9qcUnebFFdggXBVu3cVGuA5AWYsrTqGua845wFnKnepNHz6AQrUCKwfk7F9soxc2UMCXGpuaLUm",
  "key48": "43s97t7zqRA6KwohAkNjyrFqee7fR5uAXo1C2UEvmyrT4B2xByK9MybRDxzZXjgGS24v7ffRvCqRymfkioZpX9eq",
  "key49": "24iREW3djmj1bFx2U1s4QwQX5LVJuH1z4YnRsXjezWi5oudP9T5kmatk7TVv7RoQjyvo2ByH3kPppybb1hfxhWxR"
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
