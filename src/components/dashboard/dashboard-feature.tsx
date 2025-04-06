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
    "jpYkcLirC6o8Mcf2MwV382ivoGHVdvHDtarVM8RgH6CZ4fQNi1MyLyzbp4zbfdgj1z2xejUnkBWVMWoFANfYBsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KKefydK9xZFvEWTJpLqBjVEmnrGkUZNWBLXDxi8BqmbWBq4KHnqPNwasZw9etfR1TK2ommYiWVAy1KGHmJmoptg",
  "key1": "3ac8U7cdfc9ss6MHi5fm9WSNr2BKdr14HZcxZMNTyYW6iQUfszePVhmsNbNBeQps3ZJq2JNmg4GAob5GNJsjoNv7",
  "key2": "4gpaVUAievLxekb3DNXxpEaB5rzKHFh3CVLi8cR3BfhbxiUa8VqgNUjSXjravP3wnfbaqtMQ2oytZDUT7axyspW8",
  "key3": "416VPdHiQ2pYVr4z8WD3se7fvEx45EV9ZjUeDg1Xuuig1tocdM9vTC5Bg44jrNgoXAyWJFdcE2CpX1iTBeDMkKHJ",
  "key4": "59szgRSym1AU5wwcdrg1TSJ9wSmhzH5YynhtgUgNHxPNr2Whz3KvrKX7rTs8e1LN9F5Mctn2mzsciBdvKwuiabPz",
  "key5": "3y2JK1KueXjxUk3FmbNidATop7zMQRsvyLVkPEjSTU55KwmGncrUCZb1dTfvRwnUAmw79qBZXNWPnGvdfxf5QA3P",
  "key6": "3GRqvRsY8fDYEkvYPBQJpesQPKjyc2wgmSNcWbF71jL82rUpGYri4ARR8XjkCzXmfzU2uu9y4FDar3c7hCutBXtw",
  "key7": "3XuMHbBizZ1dvFnZqxow4VZSW1Uh2rVbjYN6jCjE8wpUFvvuAJGiK33FroakFjYCQSUuDcfUGszBxxi5aXWYxUnm",
  "key8": "2m9wcYaHczw1DcAyBHG9A4eDeJN2UgoHhsBxAu8TCgMksincmqMTUFJLG5TE3DzebPjfdKfDxHvHPuijtevkKA4u",
  "key9": "5sAjZLihknyomACsC7RFk4iMVkAvPS23kfiQQDBuvEczAhkkEFC8YRpV5U6qtPqq5JyZ5buqBtt7u9To6q84PJxK",
  "key10": "5cTXrqgr5tVvmJnHxNP9t4KSbZPYZ54ee6UyS5cHERdpWcyYMwSQrJ5A4mwZEMcyJpRW8GpM1wHW7TgRozJq79Vd",
  "key11": "SAHGhEUjDrSuLvyT4dzxuuyjVSx34yZhhD6bkEetbJAa4efgp6RtA3LwLS3XFUSRWaf5TRN8cYeXj1Nd8KVPLKS",
  "key12": "629HrpZvaHSfSCygNtcE6ii6CibS9qrQbrcRod3LqZnA2QHhxnhsEwkTY1cG7u1mcZ3fWmMeHLCbhyz8qqQugc35",
  "key13": "n5Gj3wLThMNdkgor5EqHj56XxrtxkxEyCp42fT2sXAidwJvT1yafQY3FmJQjyzCFC7DECjM8vyqd5sv8prayrZ7",
  "key14": "xrpJcrHXkPGYfh3oDcZJx3ULNgaBakepA1CvUKcaukgsPkSnBM9JpHx9x8Xz6ZhXAi5Mg717XniGB4JHMVywMPw",
  "key15": "39PDPEzrLbZVCpt4HdFqZbqYZDViCJpshdToPpMPTUX8GEnk8a1Xoq5ESvmfxg4qtHFQ9ojgEBVs7WJNqHmr8TGg",
  "key16": "5NMMaTdoTvWasZL9yrQWVTLNEBd7ywGwhpymspfrrJeRWmMHJxdZSstvQ7QdCLwmqNn8pUH7bUEYR9XFvufbBKkr",
  "key17": "43zkLeqi13uQfcejVo72qkMR63Gm5ppovaXi41cMYThuvgYXjFwDLVoV67ruLDXcbo2WWYBb785fdb7jEjD1y5kP",
  "key18": "4FbTQwFZNArqusaoTfoxAY2z9WuKXfPhGyyrnh2Fznkt1UY7GjdDW7QFjCJE1CEYpvNCe39wQCfjDXCazHqXsBCC",
  "key19": "5jSR8Lko8gVhAG86ezCxQ2NchLXYTfmr2cFkdhzy7f6KT67UfJ9hSniz1AAisGhDaWdS9mYVBLF9ERwmrYUKm4xz",
  "key20": "5yYEXWvbt8W2voZfREL1Hno5hFjTGac4gW6hd1zJkdETCr3tfXzGrmivDYYsK9zmT3Jin749ES4JKVgNDKEPRrFL",
  "key21": "4doXJPReDhQD6nwk73WBsq5HDvhhiSiaiS8HycGmWCrj1sGj5jpBdTmJ3C8djKAGQpyiMZ1ET2hEf7JfbQ4pSjHK",
  "key22": "vEBrqp12awA2rX6GG2sexqRCdJLVAUwp9BVHcAPNUNA8ggPTekm38HCDGEaacox2wp6nuWNYNSbLhLw2hzMdvJd",
  "key23": "2RBphsUDTa9nbAtqoFutouFoN9e69vwXE8Ckp1f7zKAUG7R5e81dkTLpzqRqJPHPekbobVV8xH5MqryEuaNajWcF",
  "key24": "5wWVGusbwnkVQVgFm2qWrPCrWXS7R13emummmnK9FoNHsx8WEcbCKzfsn2QBLcfCaVo18pq1EM2rFmdbouDSMZvC",
  "key25": "2SRUNopLpTHhCr6onitAFkGNA9a3c8RCBW7ojeEAMzw7qUukdJy1DwZ8NGYi9QcWkAjrPnitAcJioMhmfPBrrYDt",
  "key26": "eQh5eCXUJAFeY1U8nsxNDbDchyaKZb2rE9nJFxuWrFRB3xHQK7EyxKX4RPqA8hUKskw18JFERhWgUFxNnaLAPBj",
  "key27": "jef1oUkYmraGMxbcGzmk6SqkytRgLCNnFF8jFmAPAFhgWbYoYUQiZ7B6XBjqcr5aHq9qvn981aVZ24W7Ex5ErEx",
  "key28": "2ZHsMgn2ynBde4oNj5kaTsJVmsbHhhbXiGMGSgHmujjEtL1rVWhtJmMfncyVyW8TMkBepCviWFWsStZuVo8NB9Rt",
  "key29": "42r17gxNPgqUN78bnQh9Czooqqg9rLLAgDV5FP3HMcVkq9HSSRUGnnpvADy7j2sW3pDgNpYeQjeW567zReUfTbbP",
  "key30": "5YRHG4k6mESXVBWr2PubYmZ32msqTpT5utZaSCa4rA39GNfMr5yCprZDetZYjGbPRv7vsnyKkoxLnpZnfoxqjJ7v",
  "key31": "3KfxyubDtWyiLaSGCHFkh61h3wThCJtZY9ye5pRxJpTrfky81JJ5FWm5ntHv1HhfR424WRDGmicaZtig9qe52mjz",
  "key32": "39C8iVAYv9Ke5B9j6NSAYdP97obbvFisgumWMQ78Rz3LfCLmNHHV6VLbfjqa2UGos5EYn1cSwPs48x1oHfyC977Y",
  "key33": "uzBccHeJuCfUYnF1qShgDijo5thWJf5kRz4DtxVrVCmN5bXejT4rjdEsf8htXSTRzG3EW3p9xeHb56EfweW8aXe",
  "key34": "YBrXyYyV8FHCaWaUaRwgigX2f6MxeZe6BCTyTWqvsKcFJSdfzJkhtZ1ZU2tyubMPADXP64KgabXYmA4C7y7BZx6",
  "key35": "4kd4f74JKgNmsk3gSSgJbD7Pv2WhcS88TMoRNaeR8syjYrgg2Cpzdu7LLTmJ7HmvPcmsvtH8rU6NwKYQVVXSpAUo",
  "key36": "5k8DdAMw143cPC7XJDCVziJg7kVFUru8FXNmL9VG9DrsGqY6J7UCgATvrpBH5AojHvoBLmacLsdkT9gSjtupP83k",
  "key37": "yynHQsM9qvrjJvzQS6optq9K4MR9eLBxm76pwkcXSH9VfQZekwUh7YEvbHVYwG86VS68uAzFQXKe331P8yKdtHe",
  "key38": "4RGrcgdDFdikhrYQyQNzyudiVVfwDXwU3HY2PreRfCU8PcsUXXRczMQro1gjVTMBY9P4ggevBdEX3q6WHe83Rnh",
  "key39": "wLYtSHkkoxHTq7858Bg99sj9WyeWMYg6t9GHkLsPnCMsxJZjAgakg6MAUHfRyBqJhUtSwZqGCjwp1zN2zTY65HF",
  "key40": "2aaSaJEzAfz1DkZcEtAZ5iVw5HXvzNK8CKaJ97992HrtLTRY6KmF4hz8iuE2CTqg6CrcfDoKmRpTAqBPAc7AuGhs",
  "key41": "4UgbjzpdMGUfzCEPtBBApCyT2Uafjkqjvnx3EH6jf6Y36twZahCSL44xBqnkwCwJUmcWeEy6XkvMUtAdNUBBK8tr",
  "key42": "3BB11uxG33q3TuqQMWZ2iHzvnu41bdJmiXsKCdtethazbgudhHDjAydbkwXfQDTgkvNTTn1M49RnDBoQwDf5KKKh",
  "key43": "3renb7o7x8hVM6XoGRUbBtJBJCST4eMAGCEdckroBbk7x6NZN1ED9stS51w7UzzFz1EYtgST5UcB5eGYtLJddPHA",
  "key44": "3ES1sUgKx33QrMpFuWZfCzYqbiuJYkqjQNw2nDLa6hJQGTV4RsZdgVbfVevHJ8E6Xmho9SEJtNmKaXcRC343zTQi"
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
