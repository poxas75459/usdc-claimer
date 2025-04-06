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
    "2swgWwVQhwhLQMwKfjA7RtkeRYyigWibk5aPfPAxvZmJNMD93p6vfqhvUtcbx5y3A4LJ9oKy2W8WNJue6yoeU34y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t2Qa2oMnD3LG6sWQMpZxbkHsPo7W8N9u86qRBRUTPPFyDT8vjSPCvX6pUCzDP1pQ3u3jo89RPjdpeoX9o63t1Lu",
  "key1": "4s49WPPHvjLdFLP7aRquQUYnYQXLNhzsTCn762HDTsvt1wJsCZevX8KicLwvtfzi95zTZ4TZHh2BKtK34RV9cCku",
  "key2": "4ShrJde9EJ97RAeZVRkS94uVzv3Yn49BkQh8UV1bezR32udW1hhc8cUGzmNqvSxj9rvy9HkyXJaQVX51GY2jMAvB",
  "key3": "4p3pHHiCpvQZN8HQ2fmyUjdgSmybbGfVZiNuC8KMfsQtixGwP4qeTWama1AXrbkXWQLxJwA5wStJy5VbCGevpao4",
  "key4": "3YVzWmXiGYAzN8vKtJzxSsjFmXG2phxUJPyKy2Pir31G3EfXxiFbN9R49aRe3PHEeEnJ5douNpMQqMiXhmpHouww",
  "key5": "rfNg593ztPeVogj2gt7ajPQmDwKYgXLX3fD48FfCVmLa3WejzzUEDnoRpX2bRzifTckz8JTan8wVzpGL2qUkMLV",
  "key6": "5gNYm2NXAnmrjADC6f66taT8VYbs6Lt7bnPt8DF1XckPghuxQFFGNq9ZV2GaVWAcMttSWtQ1zvJS5zvsf4K4PTuE",
  "key7": "5MiH5u8U58SJSjTnAk44no84DzzLuxF1EfobrQvnVizfD3wxF3DKiAvnjbah7ZERdppwVG8ysusY8aScNmh3GE8y",
  "key8": "2cwJj4J39aVQ8vpW9vtXS3bjVBbWsXSzWbQHNLPwfGaAq12BAJvNcXkAmL2Vmu3WCfJgcsTcGGx8tTbmdd2cETfg",
  "key9": "5wjuPP6JtMDuNa5qbfAkxE9GpwWe8CMQYocS4FnpyjM8Qg4VCfCQrEMGAtny4kf8bb9zX4sw2Xrm4LJYgPDnxYUD",
  "key10": "5APdZAbNL4fkgG1CfBdHHp136omw4GDK8HEGSQy72u12n9txnbsdQmNJvuKYCecdh91bzPPNbbbCtA7wzWkcLeAA",
  "key11": "5u5aJGWCDiPSBE77UCwCSHHsj7hvLoAzfSADJN11rgbdGZro2XG8uDZtwTjbZ6sQgScEXpei8KAczunosr5AZ63E",
  "key12": "3Y2eMa9HRVsiNYvDzwGzP3bVX6omdy1uMeoHz8prXdqNLvhqQ8n6fQ3K5m2sUowi2Bj3WSCYm9PPtm3Kcr9tnYoc",
  "key13": "5fgSpE5c3scoNpKdG9NwPH5osx8onK4swKstm4eyUcqeVu51m2u7jKGhvvGsU3i9nNqTCjigQxUAHJDPS3zBv4Hm",
  "key14": "3dHSbQrFvLHqU3couaZD8gPfhT7L13qiwdzSKz8THsEqnerMYe6xBFFHwtmt8X7yPsVEcrLGVhHTpxguuD5avttY",
  "key15": "4zM9PWfVJGCnvX3SZiwoQCgEyjd8G2Xgypr2wTWmPhUBfiPp8cFfZbLFzUe51CnLTQEmnhTTztaAERrn3LSrzUrm",
  "key16": "64NjmLtCRqzH5mup6t6aJYrpA1o6iMhGdZnsvLfAmER5CdjGhtWomuBSescLkZmyPEgcXAP4nNKZKrLwqUXs2frd",
  "key17": "CZz8vVqAsdX4zSYUskYauY6sW3Qcsre5iwsvZD4Y6zm9JBf436u4Dg59ZEwswk4AwwjMa7AFvGRr2z6MWVwbmXX",
  "key18": "4DoRNiweJeaTVigTksrftN3SVRXT1TKuR7QKD9Wjm5d1CCWP8NNYgHUNcYocaHw4DR8hS66kdpsCTijQMpt58ov6",
  "key19": "2TuxQT6aAoCyD9c5aauLvLpmmu9BW7UWs8Tp45Uc5YC4ZeTuTbJfKu3yABVV5kLufP4eKW41d2dTcE6RVeaEc1JU",
  "key20": "2mkpAh51ZeedpmXmFH24DCVUXEW1MaxiZ9anavTpi4qmuyi69xwgGbZMxZ7gNtsoVC5aVw9kbAxwaBCdpvCw55Pf",
  "key21": "bqzzDsSdckhMhooscdQB2Nw2Ur4pZwazvQntjUmCEmvkPAKhi5oEbJs7h1uqLFcjip3ZxTScdJJPzBj68bD2yiZ",
  "key22": "4v1iWeKnxFYEgoqFZi4wgBEdDArNSRh9bjtuEVT52giv7QqG1JfY8gP4KJxyKdE4o7xiD5E6vWFHZymq9gw4QLhR",
  "key23": "2YmBqszhyEGCHTKDNN2GqgkCHxtVXhXXExdgdByFHnKfR4Gq8voHw7zLBndahQAnKZ9LmPLUAefMyvwY7iKncB2z",
  "key24": "2Upz2ZQoeksqs3jjDFFAs6ZrZJjmmNpfKkNHtFFYoFsNEveWCKWDrfhLvAiVZEESUhQ9A2AjX9ui7TRVL5ipYNji",
  "key25": "4jDFwMwyWxRZtaQhgX9ECQA68bxRL5BSUxP7fhpB7TcsFuvAQFkPjPi1eH7RYo1V2fLFUSpWwG4Z6kv4AACEMn9F",
  "key26": "2VEntMSBipF837obFey4wvwuTkvJvboq2ioJ1iBxrJhxrp91fBnhnzJxUFTWoBQ1RnA4vgAAWomuTPxtzV83gRXM",
  "key27": "32gXt3iPm9DUUGTS3nLf19zWroSYDfPjyE7AD5pitybR1iwj9Z573Zjsg3XCgDsGKM225Q7TDobhgGxPtrvJAG2Z",
  "key28": "53TM5LBHvKyDEZRKGP2z7DKqN4C7MnhzacP1wEyP6c64fLACCfJA7AvtcqXnA5HYgMR1VXp4j8GvVDjF4MtdLWs5",
  "key29": "2C5n4XHGiF5ziMf9fn9hwZCguE7Qu4u6GLmjr9yBcevwV6vYnGVVk6bmGZZQY7ZcaqgqqwnV1sAjd6QthmUkpr31",
  "key30": "4v4j7GRZ2j47Qsj93iHqYmW4yEXzYCFoNXexpmD1hbCrBpa2jjyE8ucFPRFE6wkAK5YqWEugh5XtCxzM1kbnX4dn",
  "key31": "5W8Dm2mi991GRQQGqBbGThBt4XdiQbCCmWJjxx8k2xLBfBRWt1KH1wbazBHcx67UE4KxG8rBDo6vXeEz7EvR6Uiy",
  "key32": "cW7M1ven9qvZLfj3shiRZQ2WAWyvjEdGDMSWjXXhzZP4bGPgKmLcJVodXW9k4YXXt52zdd46Jju9aHewN7wcR4a",
  "key33": "4uWTanF1GowzUCDmQURmzpAmZGrcmdfPfAHMjk9vxLpnN7Acr9rnL19vNS1WT6o1hgUh6kSunXNzchEdPbf56mv6",
  "key34": "5kRgBdYAhXbQqP2QTgKF4FrmzDUFSHZp5gA59iYDXDT5VaEngUP6uYSowxuECxDDiyjhGmRy2j4r46kNoLPGm6AV",
  "key35": "3swzseZnUSSpwTrYisKyvsp1qahih17ppCTtUsoXSXELgKGkZGMKXpWfuqD1ictstq8gr2a5L2Q68ZwWRKjECpyB",
  "key36": "4GuZFLEVUxsXcCQTcp7e7rQZtbWbbeYuwHVMzMboN5CqaqootTjiJe4VS9YZRZMJYHxJVWcg9oNC9v5CWqq6SeZd",
  "key37": "5ResNVFU8dEFa4sZt874jtsxhGniSAKRMMnGUgf28fxDDrPWoDaTuHLgTMTrYntU1E6FvhzkmdxpHDvTJZSxQg18",
  "key38": "3g4QsMVfkyziVgLcGEFdNKygGcM6vrqAA4Sz4AobaMBhf6yKSpeT5CYgscyQGSX8iSh5nw7watXtZ51zot9Megbk",
  "key39": "2apCJ29cpr5WJi7tDsXJkzKSN2gKDRciEwXFRk4Td9W9CWmx3ucisExKc9oANAeuEcJCyMvNp2KpPGDY8acKtkD2",
  "key40": "4ySwx6CQrBrLMcswDrTfVgrtq7p7piTSn3HztEoegsautAY8kG2fBeS6Ba3oGpcQSk4otqDd8qodu8jfzGC6RP5y",
  "key41": "5eYnrPoiBd1APqzJtfKVMe69ASu2LDd8Do58QcSi6bsV4mwqBcj8EZy6amoTh7JBggPS9maVyjhy1yjJrkPywdAf",
  "key42": "323HsLwPebPW3jzJmnsjdFqPN7huGwmyapRMoLGJ7mD5ZRN49ZKRnd12rg2UhAizNkwdGq14jwAJEwX36QtbXCbZ",
  "key43": "5DCC7j7VHWktGtfmDxJK15xxs73JeDH9jbdGTemYJ6fbBbLSyBeFoexAuYDzPaaFNnpi4eBdtrkdgU7Kb4N8hHv5",
  "key44": "MXJiDEP2SaDcBY11ZhhwajjuWVTkrBPwhys7USFBxnic1VboxKA9Xa5KTZJ1HB8ZCuZ82Ps2aKShpKmaj3sv6Z2",
  "key45": "5pgoJLUmk2KTyPH9iTJvHumLPCnBu3DwzXCDDrrLE8QJeEuGU7j5SX9nDQpfqdFUm6q2mcDYKb2ZWRPK27wmZvQH",
  "key46": "2sRXrLtESaod85K4saC8gnCgCgwTErxKbyXjzPcSvaYYLLfccQSG1JeE9MGS5j7Yg4VYSJBf3fG42Lqwzvtyi3g6"
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
