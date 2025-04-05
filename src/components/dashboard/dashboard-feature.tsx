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
    "3nCxkSYdGeG3kufz2omT5HLr1MbhVstaNvwuibGUwXrVaRhpzLiQh1QmeokvUqPX9SBwTDux1WEPbYx7HwCdJMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VQC3CoK9PmQYfNN7bbkoWJUwcB3RtePjFnySb6pgG9ViYm1ZxnHNsDWie4oELpeq7c2wFxyHK1qfqHwbJn9JhG6",
  "key1": "7oukWKZahvmupCCYFi1w5Pdj9BcDz3aCgukQ8G8eyCW7ou3B5dQaXVa1d8D5tMKwBz5RP5svJL7nn1yCSAGiWdp",
  "key2": "2iwCWYRDnNoMRcXGgVPtypKvsPVk289meYSek5hF7nV6GUQ7SzaMx9fbpar3my21z1FLjbNP6rXYFE4LFUbdCjKU",
  "key3": "4iMRkULvMKPbtwK7Ki8TyXX1HpfTHXkbDDULVMdNugdkPyB5LugVPBR9T1aRUxryecs5PLWhD8x926zyiTfgZfC7",
  "key4": "FXzkVVXdvTybJohjCyK4JpqFxfmNYrLqaJMWsmbXDrNTYVmkR4V1y4jukhiyoxb8seLRV4NQsJSmW5wa6NbsUnw",
  "key5": "5QHhRt7YtGsXRwpU2SQZ8xw9Y5qYxjbQgN5ZKaxYy4tpnBZZ9qS8Kt9Re2aT7g1tYd6DPJXgJqMKWqj2ZQAkuhF1",
  "key6": "jUL2eXb9mCFmCAh3muPS6AJZN8f1wzEWT93uG9nBwzpyKNHw1P88E1Jq3YgL4b9MzjQsB5Gc5xSWjyW2KpaLFSH",
  "key7": "21hGg3aGLRWmZHowPsx4hGTdMTnn5sRLRcxJ85ZmBuwXb2CZXPXaynpGdb4e9KLzd6JmdfwT2J73tPsWBLh14WGp",
  "key8": "5yKpucEsuPr3LL2gAXtsYLsUMxpLp9KVdFxaZQ8JMKxKfc35T4iLyqdzgaJMULwNGcoydF8YVGSMNJrbjfoBEgfL",
  "key9": "4MwpdHCB2AaTcn73WJr9HUd6DD8i4UeTYT7Ludm8iMoJBqPka8L6RdXAa62hpQGD4KeVJAuvs41zyxCeeGRvR15c",
  "key10": "5mWerokCTF9Am7Xz3XW1d13kAPjFivi1mMQcfQudccAMSXTMwXUH5cbyjG8z65WWXPqRriN7oAVEKnfHe91WPX4W",
  "key11": "2mMHcVjV3ZDSr3DpA4kHV4xK7S1iYwsdkEgqJah2eawM68oEYvkhhUimPWuqCKT2wStSUoHToTKHUqmx67tEDwff",
  "key12": "3N2EQT8SErpVK4xV1M7sEMMTjKPwpNj91Gy88DLMkwCr6FpGsY8m9XfXndjDtygCDMDy7NZETjdPCKWkmxw1fcDS",
  "key13": "5L8ZyVcZzqihVztikjJKMqiaeYQXenMopmcFNf97BycujpPazU8aNTDqWGXNEf3KwqAkoSLtZD9veAn9g4oaeRiB",
  "key14": "p4LXrYfMFqUiuHSgrotTTD4r6oKnc31Ati6LJYsQXr5SqJiuCb9E5smh8pQbmmFvE1eS3Tqt5spGRTtyzvGVkyn",
  "key15": "5Ma2o3bgvqBtg19MsJwpF8vATevRwiGMMWMnGWx25Mvd7df1fhKaWVF9rzaj7MY7tEMUp7wxJ3NVPAD2ix4cju7K",
  "key16": "5fFLQC4byvcrHUiifUFErDksqExGTpi1nCaEZmqw2g8dg9L5TaGv5WDFctEt148ZJgZp7zk1dUknhekVBBLPbVci",
  "key17": "4PgcRn1S5K19PL97LahDkDuFkFj2Jwt3WzsTkxmVfh9pRXBAGevvj9L6r9sPvcDBcuKGo7VnimURLoZvodHozeJZ",
  "key18": "2Doj9Tfg5Qa2NXS6vXWJzwdvqXWA1JV6jxquNvopw6kJuteSMFZQyvdAYRiiXuZjiN2Z16vdiGhvoZou2fpaqTBd",
  "key19": "3rRr1wrZBVaJQLYnN4uXAqWEa5HiTtdvK3AZM8HsjBKJZXeERRgHr9Bq8Ag1R5Sa5W5GL9m64awk5Ps2iHTsrrU2",
  "key20": "3wk3oHpqfx9MfKYx2HpTsoUaVjMwkU33qbx5TPgmSsVcbXt8hAHQzWj15ugCY7YaNQEudz7a8xXCTt3kbNE4go5z",
  "key21": "5nDpueQMmTCFCrVCtYnN19miFTFKdktjMMReAPs8cooMRuMtS2s5ZjQ6ZD7aR8Kqqhgwn37KyrtVuCDe3vfgJHoK",
  "key22": "5KBScRKMp4mvfQV64X6sAweK4z5fVrLZ3nfrASxhf8jL2CNxC248V9NW93HqDJ4gbGmG1u7vwefnDpQ2XDDTaQ6k",
  "key23": "5XPUo5CyYQfP8tGBrz4PUKD6rQFfj11jJLLnKDi2y53iPq9pVc5DFA2nMr6nmeMQJUvi9S8VB3Dk8oZQZmgr2WVd",
  "key24": "4iBmtxKNYJ7DKR7YDYVr1HXkzVwzZySLcrZXvoWaYf5Pz7j5woW3qhmD5NSHFiYjKZAn2ZDisu6TC6axh81bA5Uu",
  "key25": "57wqSjFChZ3g44q3g6TJongrRfDzDtrA36DgU8SDVcf5ZAWs1WFqh3UsEgCY5pn8RdeAGCx4ZmMXwjYpX1XaQX8M",
  "key26": "3fie6HmmBsAcsuwcg8euJMzaLiBVEWEUZYHz91gGBdBywwFBhyyc2XCEUfDmitrRz9FtRbYxKeThGaiN6J1KSfZs",
  "key27": "5kjaFNGXbE8gceuL827KfHa42cn68L6yqpbcxpzLCq3o6uDcawBTUs2BKp6hpwY48ijHDesBn5fBSu1CjudajcUp",
  "key28": "4SwnaUq9pfeixmuZoQKErHnP8hfZ1tufGmEHseBgXpoLzTi4Fzdry9DhBKbTBK3dSsukyJt8vbTXUJ966xZHbcCo",
  "key29": "5yXS2z5vjig8whr1VMpjYKp2cxaa3Mempf6gzebtrzhyT2DGmQVocxi7bZyyjB2SK15QKoojcdh42Z1gGEN7seKK",
  "key30": "2pstEQd5AMYcgNhwnufwtJxdnEyw4Zt8kZNNUB3X1QUJoUet5ULfnWNZ2GKEcaFG46WGB9cbM8Rt7wkHJanswmff",
  "key31": "iNeiKAKacUTEhoZks2NmY4FVnkdYaAPn7ZPQi7L7k7yeZgNHbPYC4VTKGhehEaCqEqkiDmBGtAgopwPZiX4jrEH",
  "key32": "4VxKAGSpoFmsDbT89gQYDLFTDoZfmCizSeRgiQmBDQ2NYPhPKGR1khvTxSW2jmCvTmMEJYptWV8Nd2zsAAvP779M",
  "key33": "5d3nhgCvPApyqtnUNAJa9Sn1LoWiShKiM63Hakcitp7Khaa9VipQ5c5McrNesPSJsK8KV5yjr6QoUycjKGfRHFX",
  "key34": "3zaXaN7VeMC2VgNSSdU6MXWd5T9KTdR8pXjLNiaJVwFc7ubteQug131zfeawFrYoPAkZEJufPfJ3nojDVsroh6Jn",
  "key35": "4bhMypBcGNXcxJEE268R3Xm9nDLpLgHxnFiP2Q47b5SSKwwcfF668FYFtUis4KFgqWDgjkXTAKbZRuemDzFcc6mx",
  "key36": "5bQceamUb2gsDJ8SQrLvUMidhpcreZwj1wmUQaNgrM5AZvXvvsqKWbDs6GXqY2PDv3nunvsHtincKNvYSQWQrJv7",
  "key37": "4SN8j2jZV4E5kw61Xzwe9CweywQKcfAMjRgEzcf4XWLbaeaRjecTE6qn6HjiPPJabYHYCP14s5ZCW5QBZgvEta48",
  "key38": "VMeoFQzxEzoWfp7wyWECEd9XYKH5g1zo8a2QbZcZSNZTW5rZTGnWci6F1sQPtZuBHtrFvyiBAoT21qPpHGdJg9w",
  "key39": "nUppm8wLWBKJvwY5ws9sBdLyMKuQxdZ9VFyvcnUavvz8UKoyq3BZ6yWKyzswsKmk8zqAAmQwwbGLWtYhJhXBhRh",
  "key40": "5cdEBdQCzfR5TGDCPYs45v8AR35HavhSqhcTaUhaL9njzDe5DiSRY8q3Wykmuog8z4UtsmhMrbgfeEoi3wwPdqzL",
  "key41": "3cMygj94JSAtsARibVx4SaHRNjGhwG5wYmWaVAhyuNPzXsTMfBygrDun45UDwLzZ8wEbRYnbS7iFpp67kFU76qqn",
  "key42": "33q69g1TgGv48uGAixRWWrkw9m13NN1UTDVmkstvoMRfYU9vfT3q8os4ob3UYJ9TybyNbnBWg6vjYY7XdapLLWon",
  "key43": "khW4mbibxiuHDor57EePMeBeSJAH7qa1Umb7Wfd2Gk25392QNH6o8WaTzNKdebRSQ3eQcHrefsnLNssDFXLGVbm",
  "key44": "m1Gd49jVyEoXeJEpg3qJcaYLEmQeZwAxJYYkEgVaUag9edjTfkamZeYwQGyyCxRwTJhwQsQjN2nRhseM9v1rWnM"
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
