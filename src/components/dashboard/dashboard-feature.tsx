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
    "4chLAibTDAwqDnvKA5ayAkUA52MDvsJ5o7jGZZnECxrekCDNFNWNma9SqRpHMdR1QRpuBY2Fr4AukRfywpnmpHst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSEBRLKSzVD4fgHEXA8tHdMerVPgr482JQJBauYD6sZCWP19JJshEnMgTjHHF5Gv5DQQ879HcPMd3ZcEDYBFRw8",
  "key1": "4m3WkNdMU4xvZ9XGhtzYFjiz7XnwY6sRExgUuYeiY3hgDfpD7oMu4FxopQhWyY72d5rhKZ8a2QnYDfs696QPsNDZ",
  "key2": "5ZWJv2n1XgKyV9bPQEpu5Y9iGQZtD5b3ZxF1xVoHHJRAM8eVZC6xY65E7FvbkdNzYcHjKH18qfqutFLLsixETxvK",
  "key3": "35P27YcvpvXJXu4tczrW7B8oBT7bgMxe9CNhGeHWWhNennUV49Jmed9NbeBbHbSjewWLoK9cJKW916xRLW1pdyAf",
  "key4": "2kiK5J2dAvWaK1Cbs6moFhcqfWHw59N4AstaZEDTmxfaBkCtHjKNYe9Yy6RNXKdWbHMKgpdADAcHfm7AZfVtAEDP",
  "key5": "4PNP7p5QzcVXvmTyFKqJzGzBVkCNqCFEyZwxvim1AJcWngVEk7D87c1YMohK5agF9tTWJAfHUMw3eG9KJxnyvwPu",
  "key6": "SHMJvRgNWVUfWjC3A87WyT4eEKHC9c6p1sk2fb3aZcjUFZ7Vpkz8ku6WCYXZi9coBbiSZjwXKACQCVHuQSbXdrf",
  "key7": "5H8cwzMD8FgrbDwssGtpa8mTNwwPduXHCszbMtHPPRHLtc99HefyYxWEw7bJwJQHkXv4hF2csgcpT1jh18DP8w1c",
  "key8": "4NiL7BKR8QywUKhc3n8kfYU3e8dARzK2Xtuok7xeWK2GRLtmcr63fH65U6PeiKnmm3q135YRFNaVERSdEHEPTn6a",
  "key9": "5ViWTgM3nJN9aAciCVYSgxJvSDj6hwuDCGPu5BPRQCnxmZ5dQR8dMGs2y7Yj6Y6ssnXMjKRjBJyUnG49J9xQEwaT",
  "key10": "4F7zHg5EVnwcrYDdowBfkX89kV5JKqcw3HVNTEeJEtoWy6YbRRqVYFExbBPsdJvUpNAjfXxDxvCyfMq7zjDtogTc",
  "key11": "3ANVJChMTHaXzpsEtdVBAa5zT5GgqWFUmrrh8VNg9bf8J9idCLxcxgyZMhtJZaPxWqnphVWNpXRWaPBRzQDd9D9i",
  "key12": "5JcLisHDLF9o9e3839d2A1yXQy4VKghqGLTgFNA1REmcybUDVTMcBEfffY4Qmm1RchXmjHvWM4T4YMN2CCkSjVeK",
  "key13": "3isTnTWcwQ2cqqAggRvFf6A5C25EZz5Gzu14fhBZRduLDJQu2P2xidBo6zwk1ws131g63wDpK1Apbu452ktFugkU",
  "key14": "4r1R1ErHz5JBp6eG5Psuty6gdGHLb5KWB2RDAM43Bp4tifM8Vac3JcedudigPcFxUWBLtsU2ibBP9vnGfboXKCh",
  "key15": "xHMQmsqCcnzhhgXmFVBnXnqLUfF3yJ7yfMMJM4K4KzJBHwnbmHqQrWH4i8S7eFG6QiKmJHJnnABaUxfekbcauZr",
  "key16": "3apRFS57ucJxCWigy9Q2pdyrmhVKoSohVniRSFzKsubeKEBuu89u8B812VGDBPQDbpJTNKdxG4Aju3g6Drt762bR",
  "key17": "4q6cSf6wdGK6BFYbLP8XsPXFH9nbDWKgXJYiuNmAgMwE9ixweq3SGDDWHQ6QazgzdDhcLCybe4HWxfmG9xBAc7dg",
  "key18": "9GTiZTv3oZ56jcykZ7br6cJovLqGN9RL1JsbNUD2thPnm3qFzqUTPVeuqgZYAT9jcRaKPjFZBHz2Z9J4pUKKrb3",
  "key19": "GhQC7fjohNQpSZR79RvTSY9EstWJQqGEoBvms9jWfVEzzHnRDJVyEQHWTQ6vfwmVdp7fMMAjhCn8LXEXoCKLYvF",
  "key20": "5zVfnvK1jCJuGKP9yi4jAUNARriYEhUVrnYunPb4m8Cgnx8VPpVHhePEaJvhrSg5dayAc3GVCvjdB4Jshvmdp2pc",
  "key21": "5DQ5sc2JesSomjg9TS78rFM6TCeL8YcvqExuj9M7JigYHxen8K6CC3ApNLfHAqdxJ4TLLTvAaT8wDeo1qPwC1XUx",
  "key22": "31fCKVZSQre1WW9jj4WRiGJ1j8sqK6NA2eLDgigqosoHAE6NJXpmjgXtGog9nnqKemBEcFoSFVg9SDqrB3DVAxwZ",
  "key23": "3JL4cX4EDjxnJJXrVUkBBe9qiPKCbh7CAugTuqYTmRFTNDQacT4Rv8JAqt4dYrcFsAm9HZnLBW5CiCjo4RKJzn1Q",
  "key24": "3YmtB7VrfinmrA5HwgkBhv73mBebf5vwHGsDTpcS6guCwC6ppuWSv22FJJAbVaXPDoWJEzRxSRCDhes56A6KdzUf",
  "key25": "5t81aaSW1ENEiuFEaGZ2zqCHW4aVygCUQpiXqopkFnjTxSS6Lmyum8d2E6npfp6cqFLHxj57kADcT58t9N3kqWGn",
  "key26": "37Azon7jAaCu19u7mkrCjt4baQqNchqEtWkdAyTvmC4ToW1Ys68XED5EqDLwe4AdEQtqoiHnWb9crB5X4n9j96wx",
  "key27": "21NmrwKGYMc1igmDYrT3WwiVCcBRep5WgdecSRmzoWwZkBZ9Dv272Wdsj8Wv5gkzFWstypyXCF3xTx9STqybH3Li",
  "key28": "Gc1u5paZ3ZaAkkdiABPDfTpbFYaeMfbmT1dQmRTc35FRQrqWtwvqGDaSNEFYTtbMsgeMsid1AXUysxCXSxQDHZ8",
  "key29": "3Tq3NmZzNcy6VhBAqrvtkywzppcdWHrTaGMBh8U2Q2fYhUisDpo52MV38RUPmL6hVUke2w1fnmYQRJFN4gh4VQds",
  "key30": "3E7Ghh8t45mAdLh6Ser9oSV67xLCLMHTYozSyk1KVMMVZVt8xXnYmWwKd6EQox2vgGoeeZYUFe1NDu4PWxsoJUri",
  "key31": "35J6njpziqhjCH5RpDqMnkVzpU9kzt2JgT1Ra7pHBhJC7YqrHkawtSuHiqqu9jzZuYvsaosBNynFgiN35hZqzVLy",
  "key32": "3JCPbXeMPB2mxB1KVZ6GfLrPqdJbjbcUBqExA6LyV2Cm2mP7Ukp2pFErAwRVWho5ZBzJQGoVUTyaAyrpispAiUZg",
  "key33": "3iept35L5SCC5SqNZHDqLbMdpGiwDRpGkxT48dEjCLNv7SWE6atgAhauFdeKSZe3Squ3Jt9tRrgn1wKUfLhFGomf",
  "key34": "3ySXRP6aK7a93ibgKoM32rezaRXCRCXoVtMErij6A1FePRkYZfiohg678aNSJhNnCA7tWTFYHyRbAgnY8z1nNinR",
  "key35": "3VmmsN8a8ptmD8S2PMwDHx4fbF89813j8RnxcRHPB6RRGFYUEDqf8zJs3WvY1yMd3gGascnj2GZ5z41R5Q3UgtUj",
  "key36": "2yKPBviohupNt47qocCn3B4bziK7nty1dD1B37D999xpNixbGvCgyUyrqL5ZRryvcv1uoRJJEGKSf2a25P2vQSP5",
  "key37": "5uPWtoHAx9ygpwLtFRAfnZtJSRNgYWz8iVHTEHRgXv9f1jTvfswZkrRAvaGpEYPkyuLVesg1CikEaDnnzZRx7oMV"
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
