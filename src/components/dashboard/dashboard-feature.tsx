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
    "5Xpgr7gy3SQJUytnUgQ3CmHDNQCEjxDnkgpLMM2cv8h8KuA2T3NvL15hRE6sSCk42SXYGpYhSmYd3GTmcuNFJcPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mkWaFiBMNfbTxaQyj1Abk3uAHqnjLygaYWZeD2FPuvFMP9CZ5CM1FnLxUnxgrPrqeYZAkCG4BAKqpzVfiWHmLF5",
  "key1": "4DQViwiLkuouM7MXhALj3jviFaR8NF3poJ4sNMN5aHTip1vw8TinCjYtGcM98etFw6A3VrDNnJfGtwrfJcftwVYV",
  "key2": "2kp7c4F19f4GJZwaiUtxAwXT6cKuSXbnR2VRe5YbkN2nZzhnuLvDHbnVdA5r8DiTUsskwGGSMVLQG4pfrCXQdAnt",
  "key3": "5e25PzV1HdfjsQxC522U6jSekcGMQur6mAVGVgFMjWsoQRUBWLieJ5SiM3bRfUgUY6pH9oqtemEvT94JaP8xqmDo",
  "key4": "3jzNRu5Zm5DW8DRfhH7zCEJJHfaQTq485miGNxh5SkY2ka3kEEHKNLu8sR14FFrHVLbz5QdBiYm2mHcPgBcGF94R",
  "key5": "ccuQQLkqHX93L1mVUj8wgY3VTT9RPuEn2kMPR7yuunsmBRmZdE9pjdhJDyKySSjEujn6RiEAEfTv9dtz8sXQKiJ",
  "key6": "2KAKmVxZmvfaBS23BZwPUdEubnqrARCPvAmd1AuaDbAvi7d4DQHxwzsiYprrkA9dK7dchyLT3UAfhaw8t3DYMMUM",
  "key7": "5k6hwprCyeX6BYPk6JermrgcYzsyumvN9dwKKo3t1TcUaSNBrNxejbnqwUF3aU8yef9AEP3KMtbUX3ykM1dC4tK4",
  "key8": "3vVeAR6Dk6VGKyx1fKqhZqKR5bjTEVJmsGhXZqswVCgkYL7z1cR3GNZZipHciLZzURBzYDCKzwQk22aiDbXgKetT",
  "key9": "44cw1FSjaUWP1deKTzX8HnbMzVKWMLfqZvjhVfYPf4W68sqwxJptWTMHkfDhoGLQKvc3FbCEK5FSFGWRwbS5zpPa",
  "key10": "2nHYhsmj7cMjnGPMY3vkwynix9hdmNs5q6EXA9XPih8CirdeAesS4tkrnQXt5Ua5va7eW6WAvGt1H2sbWxD3k25k",
  "key11": "bsaDcHMSumZusjKPBkU1sm3zAWgUHD6XBb6qSW7CycBD2ZaWLUdPuL5hWQHzL6Lh5ReCT38ytVn81SZSQZfp62T",
  "key12": "3ec2UaueQ1NVywvr6hGK61tYZstS1gi5Jo2H13SLnt2AmFmpGWMDb2zMMo1wogB8bh2TCxFiYtjHFdXnY7JtjUZB",
  "key13": "3hiFBpkcrNZoSC9DPdTotAu2dbtHLddRbyxsGXz4V5BrAjWcTJEUWnrE17j7WFccpKYL7z12R9SR3SrPE2mUJV79",
  "key14": "3XHj1Xok6VJEGH1Ak1mTUtd1xidHNYF49cVtQU2HBRypoPioKdunFn6UXSyiWnYdEaseffswFCJ1w8ysdut9PfqJ",
  "key15": "5M7w4y1c183km6XbBQBEtQk7qkeqNcFjz8ZHsnZV2uzYPCTUXN2NqwhrSPUvf71cu19HSdswaeFFLX62GFMJ9SQr",
  "key16": "4CVLZpLqCqBcTqRmTKcRGbn6VKFUE9oanELqRbi3Cr3eQzuGWHs2QpY3uTCBC49JCmPgFLV1L4P4uqsfvvRaNdUr",
  "key17": "5jgooU6ZEBfroAkKfPHGmBzc5G1jc5xhgiftJDsBqLvfUyEFJyBTi1q5DquQmFKm9KnKXdtSFQELBkdrGt8tycTr",
  "key18": "4pNd8vn84fDmjWDm2s7JcmiqpVkXx5neg94uED5nwFuehHdVEDax56CDcS7g1AtFzHYGK98f4gTCb8BhM7nZCLib",
  "key19": "2UGNhLB2b2dFDqMVm2NLsEBETZCTR1aVxEPDzoVLeySnmqtw1EUE6xtYYH6yJpzCtRJCHTVvCPZbuwyVjT88zrgM",
  "key20": "3azcYXcndoxz7cUD3Kmhyd8SeSWAgEsjtEp8BoNxVok6Qhtj8dNqTWqyCQhf1Fi9DYN4XnZC77yahRQdhF4AbKkD",
  "key21": "3x5swMDd15biEMu9TKZ5UqUjURVrk5ypox5LhK8moJ869vXB6zXE4A9NrNEqia2GP1yevhqmGhWEfmzZgAhGEnWq",
  "key22": "2ER9Uro67JVmXtt5qTAsfqtwEZwWFajCihyeqVTm5CycEpkqMCnXQEXVrWHXvnevvUFpcb5t8y4BoygPLD8GqXsf",
  "key23": "4M86psUbZMuHiiwmhEs6zow3DjunVWipeth2wjhphF736he19xpLnEVBVTF9VkiJR68hpXWspwwawTnBjpJiBGVH",
  "key24": "3kP3wa5zae517oz19FTR1rLwzmV6HZBodT76jCPZ33D1D9XNTeD7qiL5KJB7PnJzYohRDfKt44o43yPCdeQUEHBD",
  "key25": "t9MuLbNP6uKkeLQVeXqABzfgEGtvAMtYiiR6nXJxQWGgnUZJjoRyFG2kGXMSGB2t3o6eDzcsff8zXnqYUXrksM9",
  "key26": "nhKkVPYx6Wu75gUgWskyop5dabpGiteSn2dpgzva7k9wpZYopqSaunuQvouTrYPRMBzzSbSxNKYVPCVGzHT96Zp",
  "key27": "2R6nS9WuG79z4MsAu71nt8Hw5obt6fBJMpRVmLMmQgf5HEf5UrgULeTJuaaHkJYz38A2jRdVeWMtSTbGXAQE4oZo",
  "key28": "5xkkuhEkLH5oRESw7hqkuWQyaGYcKxiyACaXfJd5MdcrtPF4y1PiavkoWuUZUiCxqFjDGXwUN4m29uxBu2iprN1S",
  "key29": "39bjFP31LknfLsRywMEgNtJbYtBnjj4sDuiWZAsUsw3WWjarZsmbxwPgPXw41G7wsLJKdm6ZuXCdGHdBNH3B9197",
  "key30": "45LDpo4MkTo9AdXEnDRfKVLpFzQe6SeF7ghigQcxRGWtJWc1fous83kKqrgf2QaWCRYnaz9Y5X63kcYqCRktpsjw",
  "key31": "4ytiyTEDPBR2q1KWQuLH2RrB7DB94i2y43zrjWossay7nb1dSz59dEtGr1EkRqgWp9ZXyfJ9YDqJHm1mmYQxdXpj",
  "key32": "3dDoo1Je37mqtYVRUtY9ATkcVxgYzi3Nhhrw91DQxUsrHwrhWTcWWCGTzWX3JCCaqWtuBL4Ykt6gEwYRJfWkArUx",
  "key33": "3WNvwf15Qejvge7qTBWoP3S846P6wBYY8pDFjTLNgP4YNjkB3spCnCV46W1CJ9TMmkB3TsHcy9ciS9e9E1irSySv",
  "key34": "3hTyATRs6DynykfVDMJZQahZWHxvV9BCvLgXxG6mxovMBeLNTNxa27rrW4xRBZihsuhUFm7m3v8o5HRWbcTdHxFG",
  "key35": "99dBb56w1K9EXN94WQDXU97rm3vLGgqhDjq1c59ZARiB5DhJr1BKro35DNrGNpWUbQGacYtkAzrQmdw6qYwrfaH",
  "key36": "4JZRAPLcBPSM5mA9xFVXDFuPbUN8USJV9urosmrr4Y2VsQjx8qC7sPGwm5fWELosfPZ9285pifLQnee33JvHnLEY",
  "key37": "NX1BrFappUCDJxNZiuKaE42AiQiBJXDaDP184fn4MEbNyBAazNTpF9TFJCKhr262DVqzADXemaFB8Sq5SZ8sbYH"
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
