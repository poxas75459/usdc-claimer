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
    "5zMRgKdZyBsmAWN9RFptP2CuHj23UZsv4wx8DH3MeQTQPBsora6eHVsWDyj5W2dF7gLwmbjrMHxKz4EjcqedmVJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "274KvrDgeKwpx5QArCyJLXAeh5oLCxzX96FHTM39aLDjvHuoaAs97fXYWj8iPzrZ82FuPyyynHFs9xndjHYRJ432",
  "key1": "3ERQgzmvamJwm7CuUyo9JJ59mD2msQP2BY9DM1tteSn3gy2F8guKHzNHgHJ7mUozRWFAfbKY5j9KfJvM85cqgS6S",
  "key2": "AtojkK1bJu2jiJr1mrTgEBCagZehytbadCaWFwUSL8qPWEM4Gh7bWtwup9ZkNFoAgocZpjh16SjnYwFdsRgUyiC",
  "key3": "M2mAaqfQCJSuVqipoM1dxbajsJBCYtsvRv5RGP24fbsLRzqcmcBDDXdG6vEckX4brRD2j1WjbbNdPwBEXKfpYTJ",
  "key4": "4mydiXiTJEJnLsPvaHCjv7eNpJTUiDzRXjHi2gmfS1ppMGaS9qijcLvh94XYeZXNeVwkDRYn7SziHQDQTSXBnZ1d",
  "key5": "5L43JGGzMxmA8pfEdnF6vowiGSvgMtnSzZsjwn5UZLeMKuYXUSicvZmPdhtSW5CtmUYuEVUaQRx5zwWNYLeF1rM3",
  "key6": "5MneoYgmJFgo7raqDHmkqCzxLVLWitqJit8EK4eTmiYb7snMGhR8VjVWM2H7C13N5rMm4E3xercXekMbwDywALrB",
  "key7": "4NhbG4426cbMHpBL1ngFen2cdvDBKRyZBqgeHoYpptKvuVFwYaonJR2rM5S7giuLdw9Kvn2NYNfmHdYwqwS9johx",
  "key8": "3mSNjeefQNA3nmCckPCaueJpMPS69vrsvJxHZjZU6kwi4VYahQSqoTi4vuKuKXJyAWgHqTTXkEm3Sex18jDajjHr",
  "key9": "5WTvefUYWZ2jg8SH1YcYNBktrdxTJCtng37TQDewzZErXRYd2NVxzVUg81LgTDgPKAp3NQpSxE62ckU4vtYR7vdp",
  "key10": "61oLGtCT6owCtLTynsjvAw5tj8F3ZdpTYkMi5Bv83mWujBgnNprrrCqqjSd7KWrUXAfKcsRDVMJv4x4RnSCazt9x",
  "key11": "44X4HwFucatDWziQE7sdCDL6hmWHVndqqxpEdEJSJF7V9QGEtRdrewuBCZjH1KWvu1STSxcXdcutMegnbxN1w9Tb",
  "key12": "5BakxnuwZLvGpshwgMNhSEXCXf8qBDK8VsgGnNRTqXFNDuEokaTz4NJ8AzeznCaNzWxnQSny4JFAmwBm7sbXpW1h",
  "key13": "5yjmvAxmmWvFMCTtjykW1dW1yUGryjogp3X4WuqSgKLcrDTG1GWGCAyDZNSAwEoqrTVUsnzTmxbrF9bHonub631",
  "key14": "4iW7UGofHZN5vPZ6CLhx8Z38MsyxCr4AS8FuXrmMLRewyd7q9RB3G9hVJHPDSGaCBNpKpimVZH4KBCACy4rxFTau",
  "key15": "T8iwb8HThZbFFHc1cHBwXgxiGnjLJFnbZaCGMLwaTE3u3fELLyBzzLwjxtUEpm76j1Z16AFvhh2mLaKWcoJsRff",
  "key16": "KheT75KbGmSCiNsiA3oELcXskp5UcPxqVM18L3sexYFXtRXcfRtWJeeHVFdicLfCz9V6e2LNDUkaon6fWNQTFne",
  "key17": "5EKdWcapfuoByknhzthg5PqojN78bfy84AGuaafNPrATcZaVg4ysW7FazJdHxgFkWhnC6Snd5PnCqAvSYqPGAWrg",
  "key18": "2Gaf2wBn44CNKyfGKHPgtaminLyiNcNghi4gvapoV4FNRYBr87qwsFerhSfpbcG9SDGgKLtg6FceWSSZVc3yoKaH",
  "key19": "24jrxJXBhHY7S6B8BPXK8FWm8DnPPvsTPGk8HcBk5cLAs3JXQVWJ79fHMS5j9KaqQ4ctmKaJrUnaGscqETAc5U81",
  "key20": "5knLDJrA78sz1m4kvWPsFg6vddt7CYuBNGa3MLfcP7kbBNMV5DF6oro5uRSNuQvAHBYnPPGuSW6oD3vAv3YEDmDe",
  "key21": "2bjt7rBiHzoLgxVnyZV73T8xeBLYPe54TjYp6Kw9ZPHFnLCo5Zij9G4nUgzqEN8TDgNMP7yoN5DnnLpPC7w3qid3",
  "key22": "4ZU2WXuUCpV8zmioZrh5WY3PDohyByabKtXhM1RHPTYDe7XUqj79Q89hdB26S33C3XSY7Ecq5yejBhvoopfpRAfg",
  "key23": "27ExDNwRs6C4VTAb9LgPQUsiVwd4dc7GKjEUo3PgxiYDxRFrvKfWt7aqaquZn17c5DcBVn1CiyhFeuQyz27TDuxW",
  "key24": "4AE7czFyWuN5g3mjJaTYHsxETXmLZn5cm6NQ4bsfrc1CBtcTnAJRh2VafJ1uHkpmkrUPzewYSJhVAqAWxd7KZeD8",
  "key25": "4oCke29H6nNCCNuNruF33N4f3t6BFkmHi3MsEuYxE8PJhGLsEJtoKjXWNCbAaYoZLYpyjLq6FKEz9fcBWTsRX3k9",
  "key26": "5M7HoeFpqAQ52MAUNH3XPoPT1mjJvP5iUsXoHwEgAFSqWDC3LBmsXbmybR51Es44ZA65X8zyDXxkrX2KqYhJUqXv",
  "key27": "2wCjw4XoSw2PsgZpGPuEDPzYB8dFv3czcv2Ki4Yaxr6S6gzpeiJCu68rCiMaMocbzihuRcNtZvcpDzF29Mv9nAjW",
  "key28": "4dzK2QXAwuLAsDv4TBeG7JNV1V65wPfuRUAu6FVdxbjZzVSrEBXPUUN6bkLPzfvMR2S6Ybhm4sSYSKttwaRoQ1g",
  "key29": "4osMTkHqeKQWpkumAdqezV6JaAKQqETXm6bSHfbXghoc3ECZ6qz7vXXdsKrGbD6PZQF7ib4KUTttNLUnSo9rH95r",
  "key30": "4AWmRXTH4udKEX9uymnFrjCpg19HuaPznCFTRLQ1NSsS3Vt3ErPe679dkAgWnW2R7R4nXDJRu7uMpRJ37GTJCr8L",
  "key31": "2zi1cKQ2pQNY6FqBwCdzhKgTWBYe66b5TfFPqwLieawS8x3La3H88bSydEde2cuMgMT7JjwzMUGtSuctky3iRkCg",
  "key32": "8BgCpm5t5WuCzurmKQNbfN42uQWNWToeAaQoiJ6y9VzHuD8xwjcpiZQbZWaXkEc2bnuE95d3AgTZkxFD9x7txRb",
  "key33": "5uAeX7VKzZVpcoQVHqrDhqt1cp2BgQ1fvBeJSt3ACn3Jzm9yDXDq5ugQJDUUABuNsgM5QZbp2d1XhdjWseWYXyDi",
  "key34": "5uSa6wbMAxcGEFX2KmDaq6JPMchq9WdLcGdTSjUyUtT7y65pVAYyVsX9MG427bka7nBzkrxckSZU9bTkwAKcsmBr",
  "key35": "Q1YJFJCVjmPtLe1r7nEyLFwUEMSniXodbYXRq4voSqmpcWxPWociTx4UxbypcjfPEfQEk3oCWEXdUSab1oNtESE",
  "key36": "2XSihhBdiBdNAGRou2erDg4DkmFNJtMXUeP5fxJgsooJCn2TQ7PEb7v9PhcbQNG3CzY45H6JjVEXp6CmhKnXjskc",
  "key37": "3YBWNyysDNpeUuzczPtvrMAzaihTmJzAw1s6oSznvUBoUAEc9kEFtxucVGE7orUFLwzxjgdzBWR8LEh8TWGZiBES",
  "key38": "3SfA4xBXVMuRJznQmtGyMnCSohWCo8ciwDtTw3a2rsLqEPNt7ViTSbWHiAWpJP6aZq8oE61ZFqEqiboafVt2KtNW",
  "key39": "5kWC6ngWRh42kfU26DRTqM1K8u2WG3YocRUCULarK22JCQUE89ABfEgDEh3pnC6CknDX6YoafKV4PA6WMkF4i3kC",
  "key40": "2jhuWzQ1UxVz3rbepD99v7gvQPhq2w86Yar84LJ8UCtkSD41PMEhfUE9pBmkCnbnkY9XBj8hiPBkQEN8aBLwr94L",
  "key41": "KrvguhRXJ6U5wb4SVzK4A4TUSiS5FRvvwV3TBH2zGW24apFgFw6d97MCKCEzuPbkiVm9ayZTfx8n8N2H8RpX3yW"
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
