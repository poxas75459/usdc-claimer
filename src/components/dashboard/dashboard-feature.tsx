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
    "3e6VUFQBqP9CTSGc4uNgCzSGHPV6KGtvFoJnmeA8ei89kKL3bjDadpuT3hPm5Z5r34tNhjK9t8aPaZLdwYxq3HX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28RdSWaa9MpjsvjZJrYoiLjJSRbRcrLS3oBmnsjzcexntbhXQbXnt54qAVkhFFrjgCHBYGy1v6XkhumAooj9ba9T",
  "key1": "3w6gGTAQSYeE4W4A5psVtSa8494ZteGtBa3P1c6kjEBNxrinFyjU7t4XgfxpeEbPDgTyzs2rG5Pk3CQ5D6ji5Cxn",
  "key2": "3Wt5hf57EPNQrPVAxmA84qu8En7M3QKWQzMvhgwpV3j6iTWe2L77HYPojkvHbt9nCEyUzTWmBQRuz8qrktzvYfYa",
  "key3": "kdoUzb5K8Vo5Wi3CYfLJFJZPJZozZ23MALjiiycgYF4frx4eopqbUM7oQCmGuyGpewYouGjYqQqmts8dHqx7zQv",
  "key4": "5vJ271C6g3dyvb1B1MhLtzQCSbS8rVHPEsjR3Ea1d6irQxCasEFy6gymzmfxhyMAsDKNDnCjtf19SfdRfRyULBw8",
  "key5": "5xkxeErzDwFVu98oqwSePpzEVQgRUhL4tBCN87m1piM9Edtq1giZSknSS5gjsXn3cLGvrSTuMrP1RqPmrD39GCx7",
  "key6": "316Sisb2ZTThvdgvGQi3RqsQc7939kstpvAcSvDjgL8nLLKZbYvw3wgPXzenjH6fyqhvt3DBXvz9RFhJf5ZLzTg6",
  "key7": "45AVL8m43NLY5r2kz1SftVHvKdyQA1ta1BLg4b4SvhHtomwhPP11dtGRz6pBjHXDg7KWempysvYvp9hAAyDYEK73",
  "key8": "MuSQQx3wXJu9PiUnJLW1am3G916vjR7Zjg2kp8JBaaWeyNfeSRC9bCgN3qYy3cap1yegKda948yiQYnyihYnHQ9",
  "key9": "2yZdkvaQuLTvLCVrQH7fEezJ3EH8H7fmY5go46AdTtZMJmCMgyauvQcvP3QWsJGhrQ3Uz2EzDyw5thQWv9CrCoF5",
  "key10": "3J6LdfwwYNepQJjAScAT2EAztxWKoC4ZQheiKZqaxzyw6RsjFZtPzecvDFxm1qkNPuWTfd8yyRarCP4P1dHioXcF",
  "key11": "3eo3W3PqLxNirfZ6yXZDRhbaUqUfDFpSJfnufYxDRsPUe3pABuoQmbmzFsvJMUxMhwnU3YkdTEaftUzfnCBZPB6g",
  "key12": "49MReHzjrh2umbosuShHSGUQU8kL6F8YSU3dhSnAd7oiJk2AYvx5SXEknh54nF8u8sVgBD4saWXrxyi7skQV8eSL",
  "key13": "2gGH3xgqUh6ZBDV44unqKvNK25yhgNXYnq4XC58fhALF7g5NdgPyBhoTWuSkaV4dCf48iNMSB85XN9xu3J1qgz9r",
  "key14": "CCGn8N5anMEP2kh6y6kw5juqNvUhjqK47RMBqvYPqDghWiuiM4cevehSV7VnUvooXLKPaBfstDxBVvC7KBoQF5B",
  "key15": "5Gy7uZz9zrXzi7tCwtcbCZy1AjhU1yPwL86iamhyXKBp9WVDTT6nn8EejF7YMbiLVKTnGez8HjiNysNZfP7vEBKq",
  "key16": "oBrkjDRTxE2729EuTMhxhpGmNXfGjQZoGeLE73AcChrzPkQWbxz2UCYfECXC95UqGKj4bxcmBEeGc5Soew24xwm",
  "key17": "6319GAoZPWkkREhPKeGVFF6oWPPet3JeKu65nkM8tYSmSGPaUYYSBCdpip5yyFzrsYhxxeYwxd625GrPMLS64jh1",
  "key18": "4s8PciaTCkepzTCrtBvG3WghzTNwJHMLSDJgWDWu17RLHyFHPXJUS33sKYGC5HQKx9ZenX7VZbSVu5RgTnsoCwBv",
  "key19": "67f9t7bbMHSAccvykovPGu8adDdDboY8PWZDZXZQmfTUdp7ZPV8gbyQXPDu6LcVX5ntpiWCwU3vJHCd4kZjsbayy",
  "key20": "22jaP5rv1FvxAReunN22qfhuSEUcJxr9aQ9j5fLaKeV7Ef8w6XmmE7iUqsQqzE9BbBgtrUhP8UGgReE2pysidAUG",
  "key21": "48pmPm5CwLWkz5QHYp1FUaztwPB1FSCmsPTWRfyKN1hw7JcpFTAu6wt8XMdbKoSxZVBCibpJAjhCpfnA1Xd9VJ74",
  "key22": "5VBH52NRpY4RPXj9McZN5D8yfaXZz5e8Wh63PPe6VScPqMw7P2f8DeLJFP4rG5oceizA7GFJTPXV6jUDBKLNYFqp",
  "key23": "MUvu1Gwby3wbiZViDKPVGWCT6AMWd6kCBZgkjB249jXLmofYAm2P7jqm9yaVBGoUJS41PVCRPPsrY8HPaHG5oH9",
  "key24": "RM3ZH8TM9rSiAjGrEu959HfZmvWnJ9FDK4qRFNJcVz3CqLS9PyNV2kdomS8rTQSruqFzrmU6vBc8N388TCgyV4W",
  "key25": "3zKWfcKGLgSb1sf3cJhVz7mgS92MX5bn7HT3yJ9skqsh4ddSAauw9aJcj2zriiPBfo9DHxMW6MR1SQZ63ZmkMTSA",
  "key26": "5SqUHBEM4Zkypv8YHFsW59SozDQJxpWacbosBiU3YhN6yEKQYPM9TkcVHb7RQrHFZxjMVfBGnWnoEmKcNjvyJpfb",
  "key27": "2oAbErp5g9UUjqhDZuW1ze2RooZScATkFp3kpohQp354pKC7ksTBmSxkXibYaRBRWJuNYxEPmnunKXFo1oerei4U",
  "key28": "4M5LVa2xSDaSdDP9CWudWqF5YftkAGeqymL2jXre531cLiPkKW6o57t1ejTqB1Uu7wy9SCN35vxH3BrUt6B4gnMA",
  "key29": "2md5Uqu7oDA8P3BzqVpj7ksTrMdpHqWY7wQyU61CVCENuUptgRVcRWQpGTHfJ8kB3z8VzHEe1ksdzXD2J6yCvoqq",
  "key30": "3vfkAJegQwhMUz8EuFK8Jd5KE7GByBR5pxQfMvVKvLC6dqofbvBh8TfHMaZ6UxbrMSTwxrKbLzrU6k8bfSLqihhr",
  "key31": "2LwBM1HDVkHfgdnc44EwoYRg8Bkr7chq2fSVLQKWgS6NeFc5k7LqD6htDN1VfWsU9p9nVeLrWBZFp2ZjeY3Ht6cR",
  "key32": "4GxLF13GY3j5FXSc8nMMd7Fy4PsvaXhTPjNxTgdWqwaB7MRL7iaEfECbU8jbD2oaQ3pkKpisGzNxfZ188odCTFcw",
  "key33": "3RPP67ddVEZBkn8rcbMdBFfBVhykosZEJ1Mw3EehHCf8AtqNCbBMHyqbcUuRBPDv5mJSLTqaAVKt7pdT4qPSu7jC",
  "key34": "3DFmKtAvf61FHvHKRvFiAFj8Z6WHPKBAHfxvZBgfBp8ZPAGLxuwUBeSxUJxUrqHwoNQNnqaA4BUpE76ZzD2sbsp",
  "key35": "4gRr9DFSFqobwUk6pPP2WdHUsatj9DseQmN5QZvYe49DW911ddKFeZDeq33QygEL6JK1Dr18ygWoh58EEB4Wjnrt",
  "key36": "2jnf7k88NMtqcvXyymkAjUUrSk649EGG3om3YjGsgWoAvLqTBvtdJBRN4fQg2KhCheKnmNxEqqjA3zoB1V4ZwYTw",
  "key37": "4jc75XF8bSk9iZM9fKyYf3ChfAxLUZSFatqq4Hys9GGGXVpnQUV76UYJBjViUsUiMtE6s2CZKzRgvHWyZ4mdnLph",
  "key38": "3qRqyQFWmcym2HETCnuY2nXsU21BAtmbThAmEyaNW19YG5C4t7925gL65zZt9eeUiJMSAzQ2acizEvJmbGvboaHW",
  "key39": "UGVpJmLLDbrtdyY1KSHMK9Y1T31M3xDiAvLYZLKT7FVQb1AWvXwfKcyYNZHgAikC8yDpGqYHCpatmTDDNe95sh4"
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
