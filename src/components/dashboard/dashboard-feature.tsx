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
    "34Uu8zi6FfC6mVMB7BhUpJSrZgQk4XwQ2U9CHh9F4zaFSYJhARTzGBh4wEGTBM1ac5CPdxZZbjfdLd8BVgDkcpBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJLCzaisUs2SuyQFF8n27pF1HVXiQqNqaGqVe9p7P3qHVrrah61DzqBte5KSySxWXdQVxTVSWAoqreTCxjwGEN",
  "key1": "41Y7rN87ob2ZSpvoCLk9cCqqZ3rW5yvBstbao2gq7oNECc4fFyBnYJWb8rrjZRXJP2UPdCkgMy2TXGc2h7P8xim5",
  "key2": "4oQtHCU9FC1nzQEPX4LCd4NszWq88RaKVTKRUb85hRVEcDbVwFsDv7Ks9btLMeQdF8LpTsQKh8Qm9LAWRxmodgJb",
  "key3": "3CYdcrZnVEW4JejWGXk7H4tjJu1utE3fDzjWkX3VEQY5nh3Ss1iG4SEMiWAcqjNPzEWb2t32drToYjm575yhYExd",
  "key4": "5qrNPJifdg7G4me9jYmCPzu6UPyt1fAYnomJP24cr2GLiPE52EBKihmCq6f5LSmXV7yk1KbbG2opecmekFbRXs1Z",
  "key5": "3TPkgSvFqFiirLSK1LnFYedrrFqGqJkucS9sdEUW2cJNHksrrFFv1PeRL4bhhbCJFhX2maC6tjnnz1rXThyjJG65",
  "key6": "4otpyEFEDCzEX9DosD8c3aymyWtQTfSJLpY84hEoTV1rykVmTP2L9Mzegou6uh54HLRgzsFBW8atiHhg5m2VZCjB",
  "key7": "4mkaBA1HWjz2DtD3dr58YWGxvboJTc893dGHEEzXUfjDvp5YjbDZd7dCmENmiFoNCntXj3swM3LozcMbtX2rHy5X",
  "key8": "4fdzPqH3W6kLEiUk62oaTRVy42t89T4vZ6TG8gYY9xhoJjsH4qqtD1nTbYTq1rhZUNMyoQdARx6YxAdXMmupNQfq",
  "key9": "48j18nZqkPHzvtwTcSsZA2pcUMkFQcqPRUs6jLwVDfkiAucUDN1QkdAuLo2LHmeTfE4fFV9t6BnA4qZCpsDZYmfD",
  "key10": "JCxEvRcZht6irnKrGdBXijZXRYakD41s6pQKcNiwEpirBqDDEQLtBETori8vJmrQu37NXTh5QAsvJPJhqJp79Qn",
  "key11": "47Js7ceutQdeVpFtd9AFa2zrZWA1qDYDMau8gTB6WNZ7ySmeA4JMUiNg5mgoqEcKvcnFWfGwP2HtNuDrWkiRtrt2",
  "key12": "5XEns2kj34TNRV5HJyJs1JnqxTJutS1xzACQdVv2Y9cAGZzv71mLpMjesZUyg9Qbf63WcnfMtnemsyGnN42uKj9M",
  "key13": "3bTWCFjA1ZrBDKPZHEugA9C2MYLHXpZBD1i18NJmxBRDxnLf2xSPWCNvBZs9TDN9XWGHVymL7HtfZj6J2dNPNWX6",
  "key14": "5CeLTbc3cSoSbvSuCNAKFs63p1DA8RQ3aWAQ6XWJwKHdvyX561PNvZeyYpPVNqgvqh3RfMumwvEYMcSZh7nAGkAx",
  "key15": "5ffb5KqtgoNCX6jg1EPNcCAXYNMcwqvqURy1y4kXDpcDHR4aAgbffCeduFkzG6wy3EJEvoHU3DQwbrvmn6Mctxmm",
  "key16": "47CdKrRDzFU6qRaMZRG4fXxQF11C95AKQsxV2Tb3DcHiPYejaN1L875ixuWQiRs8rBqkX7s16EndB9Dmj4jBDegv",
  "key17": "42eCFgYyJjPZpbrCA7CRYQSKYLuXqYfAYHgNswPvHQ4v66Kfvhm6dMGHUqTjH1AEcSdFub3ne21LXKRPP8C4LX7y",
  "key18": "krCYpNRuQYD3z27VNhFx45SXcrEA4DRLE8j3EhT6ny8mGAvh7HqMY9S7hdcBrDZog2iBf9L4mnvXjyCQ4gSZ52a",
  "key19": "3MoQgTD3V4PaQHmPqbLVsU5ZLTuUVTkKpgPbYvHcYtYPRU4tEyB92e4CrSd5aiy5NYzjBLHregzrd5DGdnAmW332",
  "key20": "eiQbdJAakLZdV4CTBeuCSsxNdp53x1WUJg7e1XrcmjRKRM2fGgYP9xcijBKddBTVsRHZgAkkrsqJbHTNsXGYizg",
  "key21": "4DdosF5g6V3UfjEN41zroragZrydY7vusaKto3k3t2ShvDXRSKUcu1okCT3rnAhj9XjHqPGwaJ6nX9xnqA7yZJL",
  "key22": "4PkRAp4XdTR1UBey3BzDLVPmzXLbp3EaSJ9ZKU4khswguTFvJdN6rp8J9csVKZoapye9NJ9SwAqPUja9TusYojPx",
  "key23": "2HisuQf7ndkuchAkomwqpj6QpEeUnFDbjW9Gd24F4xRSXjSFWcFxsiyo38LKgZDnGTjdX6PoZN6yaqfc8XZyNtKG",
  "key24": "2D5HuYh2GaHfE2cteUqL8K2bfZFSsCJQXVi2BoDxYQ5XHHXTDwwb7fbv6NW8nLGpp4nKgKAnVPrwcV8Kif5FD4pG",
  "key25": "5jRY1yoarpE3hDsuN3speRcmb5tx6ksHeSf35mRYJ6Hczy3noYhHsVPTa83symHZikWt31Yie83fhzarR1ebSa7z",
  "key26": "3R6zG29sLy6Btujvfbtgf3LsAG6qzVHuTmYW7zCL1RAaBYCCuWTUTWEiKVGRPtSsSsSgYWeRxQrbLEw7371ULZzt",
  "key27": "4KkMmBzoSMECCzY5goWaPiMsvrv8cCCvZ8h8X9Ptp8F1gLNtheedHkokkAS74brnMhT3AHdM4VsZvkUJSFJ8HnxG",
  "key28": "5YrDU621kpFS9QByh7MWUAt6zmQa8sa2gURqQn91e9biyjFe3cbUTfxdRjTkV31jqe61FECvbPJwtZkhwjuxBStu",
  "key29": "5epGwFtiWLamix9QXac5CuB9rQunBXWFF9gx8YkNSmQNK91bPvyEmtP8UPe5WfMfY7SAEnr4jYYYnxcxDNpEJTU2",
  "key30": "LZVbb7jfdt2C2q9QBhJrSTg4cAPvwaJJeigErWcaCHit1pYgS7q27bBLaWSF6QypB3gNTtN7LNGV8VA7uHzKV6X",
  "key31": "5NQ3B6xYkNXFxzDa91VUxFaHQ2BiQvdKQju2B2z85yhoCayEsVaxbGPRZ1h8Fpy4vQ5ESoxCxYWozxitZD2F8qMn",
  "key32": "rd8AUZC8ENtRJRVbSrD4Kbqw71wDbS4643y7zUUc9bejSZHLhM2rXsQF7HpxYGytLqP3NCM9cs8Ue4qU9P1LXDJ",
  "key33": "2DSX5YMSt1zFvR3FTnvpRtbucdzAiBJBv7XU1PwpCWBUyd5upKgZkS9NAZ2ZYtQFd4ymhSzPz5KKpfCnDojWsKeJ",
  "key34": "4z4hH17vsELTeFC2NrWmP4WGRoU6vnRpnXpbDJS979Pe8a9o7a8qbfCGAuGPVj93gFtv9chF1yK53Q6urLDjoNdx",
  "key35": "4zSyh7MJkVJSjM5Y9VXJuRJ17jPegufsSThxNJq9Wk6HMxsCmjQMj21NHgep1jBhjETdGNoVty1iuEcH6fpfY7NB",
  "key36": "5zFT2WExSHdPfo7dufAo8CmvESzF6ksyNquQ25rz2RyxumrjG8dyuoKcArDBnCiviAiMKPbyXev9XNGsQcEWUn8p",
  "key37": "4e6YDx3jHRbDyADRnTpyewstPenMwjZJJDVbJXZ4WVnys4inhBdkgbLTuFSrTQff57P9iUTTTuGbDFBN5RFvyv17",
  "key38": "64Ej9hCQ95jmzUTYhUzaxy41FNhGFNXxxngyn6U5aQQb8wpnVrcZBX5DzbqynhNcm5zxDdLaKcYEGoQVDNhnA9gp",
  "key39": "4rGakf2WhwnZnhffBnRJN3JMzG19gFYZfMwHwoPQ1gQjoRxKhgHq45GVha8jfUeS9RPDvCAZteU97mJ3yQJeG56S",
  "key40": "4CHGz9EXoN1CFf6PyAn9G3VDqSRpbHYUSukCmxMSek8awkPjvZ867UGquZ7XW4YrNstmnqWf7vp7UtVgW2wVBa1T",
  "key41": "4rE1Le7npmN8XTUFTiZoeR7iZXAi35kFbnJXLrRTXhFkpxcBgwUD8347cpcnRtDWiMQ2ajV6WjdZhPaYAc5Sbp8g",
  "key42": "2t85TWmQ7HkFC3Ph9NcnKAYBqWQG9XzUa1k1mu4e3RHACG9a9cMZR4me8YyhUtxmHrycznave8sX8nMjzxYdMfJr",
  "key43": "3akuQyf7vi1KmY8A3w33NYiYAfFH1SZhCHfPSMwU4uFR7X1JgVY3HjA6UkUBW3wnRCk1QDV3P8hFus31xJUEsBcz",
  "key44": "2FLz9bk3mHojbdPpP1CcspWizzMzEDVLnrjZm6rf4fzz4rGuP77EHS2ZaxExEAwTT4xhYq7aU86KZGoH4n8m3Aix",
  "key45": "53WyziPxds5LasfN885xUqjPCDhFdUhno4qUtjeSFFWTkh5maA8mxYfxdQZKpTBW9fCRG5YPVChs7ioVgrdwY42a",
  "key46": "4zSayXaFkWKXxxMhr11gccDahRwZEUm3BEfekndc5MbYzZjwd3gxV2rwZtk4GqKBKUD451cc3DeiEBq1sUurDMCo",
  "key47": "LyrB1867TLZdWULckhBAbVeoTgKcdmX3F7xrEvA14fXSrjT2rqgX7gFpMVgCqffQDAxuTko6Q4ByhNDTCkrrDYv",
  "key48": "2PrCfLpdjYScRkQeE5gHeWqjKC3bFyXEeWmNcP6jBJMSRwWU4QmgU5HFVzmzJ4gcWkd8bCYqWZvy6GqAyVT6oqUP"
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
