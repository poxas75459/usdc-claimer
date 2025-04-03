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
    "4M6SMw1nbTNwRggCM5UgjzA7tZwaCQyi7UzvzF4XuNfkLoqWe55t8hd6rfPDpQrqV4dnBGXvNYwntxDeF9iKT9HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tG1nqgG2YD3EA1ibjj989mGRCD9sEJX6hrJqRqWy9mVB1Q7gD2N2bCHmQpbxc8AUVLBjewi5MeQb4PXwZ3GQerN",
  "key1": "3xQ4ERwRrqrMkRUQDxMS5soeGPjfSWTJ3sauBKtso9somUMYj4dJMF8mQXHZ6vuvw3jKHqTL2upY9wK5Vg7evBnG",
  "key2": "2LANsYs9mVR8k1BGzjHGbYQosFEzcm86fvEtb2iVU9mWzAQWaWMpADWx7RDBzF5LKeKnXmmVHbCn1nGNgbb61j6P",
  "key3": "5wHdUrc4pHnMuJ3FRVMyqDuctmcchgAvMGESQM3zkZgfe31DeLs1zF3EhbC4wdY2NAWyqqUhC6cZBXS2XKFMQMze",
  "key4": "x5Ppvos8fxi1jLaEEiXjHWLjzZiKTs3jrQkextaGoLwbxCDiwBbWcAxBbdSPijeSt7WFtyyuQ6ypATkkeL8fd9K",
  "key5": "2G7zpcByCxDpCQPC7Cdk4KwFB4YvSwqjX7pYm8jSswmvbUpfDRyV2CgM4aS6UwJAy43JSCHr4WYGxAJ2LCpXpd1M",
  "key6": "3NPFc1rkX6QHHbYQVfh9QGzW6ZnDEZvc71G6NboFowNxaNQ1X2EdZdHWfUm3LqvVjfJEqT6v9rJbzhNrwCaHAq8e",
  "key7": "qxtbxYwtRKsxgVX2jVPRDDjsrxgrHBVVy3gdHNA3sUEydwxLCXPh8oewqnhrxQHWSNyC1vhmgrpxUgtVZv3U86q",
  "key8": "3jgd5H66NmjajJMZmsd1xHJxFJibEcCZZHQ2VBcPfW7PV2FgkFZ1EzzRwDAoMzX1omHHWonVp18WDosJpPTPv3M8",
  "key9": "2G6etEreBhRSspBaDdicCwS4t95xSBqtqtRtKF29DP6nsN3e9A2WDWyfcxhczVt2yFLjgu6vX3rtfcaAryeyPZN1",
  "key10": "c2QTZPig19EnSuvtMSWu1JXQj8BU4HtM4uNekT1LvY2Yh8BLAsk57xpEQCJjMk3p6BsrwQ8GQV3jXumHfSk8JHq",
  "key11": "2fnGdtyXx5UhQBb9UHKH1ZUCgj9JnJNS2A5qfEZm1biuzuqABYSNVKeCXsPSGKjoR6qhSsez8UtZqGVJRvJDazyf",
  "key12": "4uMfrgJonDeQpr9c6SN2tU5TwRN6E7WSBKt8LXHPUfgxaAwC7SN7iTP4yyuxFut6M8ikV14Vppy1CamzE7vhE8LH",
  "key13": "2Gxz27zFxs7x2jNjX38nS5y9sN1XRjm6Mr2hBTPNe1V2TVByE87mQEavXTc2WBVrujSqKHQK3Nmv2ogKSdg3zmy5",
  "key14": "29Q1wYQhUYaK3zXnRhXsrKrtB3CKcgQkVveZvfFUJnsThDLt1CyroshBkyNAhZkpa4fzR5HNB8eHMFuFwqQxKSKa",
  "key15": "kjnKMY33h7rgwTJr8HafawDXGaoHsGaZTKbyqSoQVXtWd78GRqGsnG1AMZGouc8XbY6ne57Zw71qi7KbS5f6H9e",
  "key16": "Rshmrh4TTmQKuHowco8GwzdxmUoiQUSzr8dHKULyWUPKKhFcwrYHs6QZHmPKerLx1i4tqfSwv61oc1tYBTTGL15",
  "key17": "4jmmRGgVmUqvuCuArerZJRv5QcV5GaCDK9wE9y1PLJCdcNqXkww4LHjDKyv53yqraPQkyASXKJKGRyVudNdVmYtv",
  "key18": "2tZnaG3WNYrEAHXUWoLDFw5zPbadzA4boe142q9YCFD55A8r1BAjqzyBiWrejEm3JNzGuWv4o8SVTBhwTdUbQ58d",
  "key19": "4vBJJAb5MYJM3cPeQcG72Liw8jq1aeL6DfsQTSET82JkHs5cW1Bbk249UMhWdVBGr7mnQ4RmKT36TmF6d8rPNToM",
  "key20": "PtnrFZ2B4TpYZz64bHraVXNbqt8yeJz5DyCTkkaq7WZS991C5ujuNnvSqn1XARFqCmmQ4knKq1yMbZktFo4JNJ1",
  "key21": "2bFkPY1NwJvYJPWq7SQSRZDgdkphJhpX3T9zfj7VwADQTVhep2TbdAAQtqLBEMSs8C2vTDEzgBZEumceP94G6cfm",
  "key22": "3LQLHj28w6qoaL52WbVVBuMHZSQ5uFwpSwaoZu5RDVmfnPp9U3v5oRUW4XL5non2neTVzULVDYAgYZ6peVoaETmu",
  "key23": "5Tu41cUZbC3w1Kubg84vpjKvKKEgKDwkKjxYKrFnePHHocS5sfdPgSJDw9EkSoWD9XERuzuN9DVm9pqPcFVFX63q",
  "key24": "4TKeo5SAsBZhuxXkUt9CfZ7EHgGGE2M58taV7vj1SV5AydaNQVKtjG54QKQihnZqBrnjaSSP7g3cYcM9HJCfeiSc",
  "key25": "55HwGQWgbnTWhu4XZFeXCovL7xbziwsHQ2QZtjcMHMTbvSe21BM8yTkyGPD2kAvKaEZowhdtbsKmv6yYnUbtbUDx",
  "key26": "2AQezYZ2cvd5ui8LW7coRArhRJRb8DXhkZ9h4z1bEvg4bHf25HSYk6mQ6H6dQNN9ZLS4wQReAMYGPzgBWfcLonUn",
  "key27": "2W4rnxG7yofc65EMJ44nRsnJnGEHa6zePi8CE7GhbT4PFc5p7YrP69gcq9DoUfsumtxjMFgyTZFiiJxSxzow9HED",
  "key28": "49BjYY4tJvWoeG24HMPDhBhuQhErmtn1p7Jd3T9BbBcpbkLuaptfAYkMEfdGKepnPX1t4yEMvvAfnBQduT7WHwuh",
  "key29": "5McLG6EopKtZ9QJqMQozoxmvtnm6RiTjHTCeXkXiKwpiMSChP7qwYuizX4N7WLmwW5A6sehmeQyazLyKo6BeazpL",
  "key30": "4tQEXGSyUQNBum2Z4Da8YpA4PZULLUHJfkGQH4LkDW87AK2285bSsyywmD7aYwFcU6VvA2RBwzF6cdGqmBSrM26c",
  "key31": "3X3721ewtVQzYnvp1keRBWz8MSArKXnFtwg7TFZ6K6PZAtUkQoGYFxmSaFbXsZmGjoZWWeMJJFr5UKkCUfYeR56k",
  "key32": "4BnjSYUqtV6E5z2RKxqgaqubYpSexwNDe67W85QTaKLWkjvCFv1DcBBPF2PFd5AX6Emj6Qsy5LncJWrDXJY299i1",
  "key33": "2Mo1ZFWRcDxLuLHo7w77tmJ1YzyNQdqnUDyEWTKfVPwrNpK5RLQbxpfvgvH5duirHt3PKUF1TpZRce1RpF5ATST1",
  "key34": "53gAhdr13s7pmftNEc3KtvwfMLQQR6xiT4a1jnWyffyu3CrHnSMLcJVBt1yNq7GRmRFrHTDEVWBEUdNxrQTuPWhr",
  "key35": "P7UNhA5xw8GzXjxHcu7m9t5aZTkYKRqQdQS5QZVTX52rgHQvjQyHKQKfazrpepE9oAh2GefA4SMi5T5U53AX39d",
  "key36": "2K5H6GDbcfiVSVbJ5xsKXLCDaA8EbNm6dYVV7kqPvZpyhi17wSZn6vhupLm2khToq5YEwoycDQgP8nZcKCxTPHH3",
  "key37": "2JVMxDtSfYPfi3yBpg7jtKgaWMD8MVSxyqStaHX5a29C7kQXXSwK89HZHt5FVHh1yuYALDRtuJNBgxgWvnot63mw",
  "key38": "336pebqFn2PyrFa6yuwEGcjeg2rbybxGfzNfeZ3yDGC3yr4r3XgtfYNjUayGJqCzaCeMg3nptGogxRexFt1exdsp",
  "key39": "3HSTyZ2KnnoKn5dXc9SuP9XHbftaNsoEdkFU7Zj1koqUmZZ42ATep1za15WTd1d7GmZ1sJ3UoSj49A1T8BZACU2s",
  "key40": "3ZnXX5wT3NV99Cw4qVxqq9CExGaf3K91Z4rmjTPde1fgKCE4Gds3ZKpZ4XTKQWjewxy7aR8Lo6UtAgzEJnVCGDyF",
  "key41": "36K4zoN6n3cShRxiVTCe75DsZ5B6o4Q2DSh6gLEhkpSxDQ6ujoefk5uK31MLwHvpQhVqhXSo4z5zM2tzHbRSzByG",
  "key42": "4ysXdbCuKReV7trUuvTAWkKHJ28gCpq3JJUX3Xsyjd83PpMTJnnyybPSct9bgZ9FcyaRiovp8vU5pVZMTEAgUduN",
  "key43": "41TAKzTWugxcjKDn27fUbrD4eej3NvzpsVa6qcwvq8VLvdeJAzqiCk469YXHkaRU4h5kHi9besip28WxZT6rYvi5",
  "key44": "2Du6pEdXvV53hfYAbJDXDJyKLCd8zoDHHmgtFT36TqBTAGRQ5DCe561Gb72tPyp79TUdiXKFnWLJHHbCXghBgmJ5",
  "key45": "m926Q7dyBjAsW9tL7TLV4mWAN1AtPde42G7MBQbkcJU4gUxaXa2npRkcU2c4Yz6zncUvfiTTEiGKHmZbMX58fGf",
  "key46": "2L9wnJTsi8xKiBRX59KRchp1njUm2MyMJtamYd36U9E1dwLZ5D3GZMEvvMWzZMTjjUUqk5ncBtv1sH1JPDYwgw5s",
  "key47": "62uisyapuLoBy2Hm5QoReM2kSKB3a55R6woT9RJsuKSmyeVVM4BjfGMu2ErnVvuLn4trV2uoVmjDrqkALaeFyydv"
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
