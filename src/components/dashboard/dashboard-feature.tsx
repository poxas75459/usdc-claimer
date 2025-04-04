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
    "52KUuqa9agMSkaE1USRCbv1JDxwZTUy73f6ufHNGgAXmDHAZ6qJS3pU3HhgsASDzZxkJWpPGFWNu8kFsPYgkorHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzNzzd7rVmKqAHKX6NdW78Ws893fUoWN5qukVWbzhGj8BHwrvibyhwdNU3ovpyzmt7cSQwWzPDSJivWXD4cbT6b",
  "key1": "4yk3ZXL6hHzjVNN2pfUauLo9DAAcJ9Ub1qJKfpKREsUWJLkjmLcBbncKYFw7Hd6W4NUffn17CFXe8suLQkHaiVJH",
  "key2": "5aghwMnH7BYvHAZp9YL2koaYVwWbJpMTCi6ivJ8CLXXTkYNC4GLhRxdDZfqfGXy7Lh2osqpTEhMNizrk4MSg1aBh",
  "key3": "4hUEvLGXCo7zXL5GpNGyoyF5DDpUJpuaHK4giVN2P8aeZfUB6VWVkxS9xePj5BKJCJPZDUhmTF17bViJqAv8UoAB",
  "key4": "3of4XKgBQknSUosAncnuqA1BitZiTQiTzgXiBRi5gAj2jyYtu4XoyeaUyZnQ6PmMrTewmDPx3Nun6ZFde6YYXE6T",
  "key5": "3sQENrv7PdC6N3Frt6jQGA6mUnXEQc8x6sU8SS4swT3z25oVetj5Tkwyc1byb4u3x9jtMGh239jAbFAnQTAUN2s9",
  "key6": "MhyLHz89TDSbGgv2thvy5gv189ubzNNX2ZU6FnbevQZSKbVeS73S5AHfq9UcGfBBzNLpDs3cVfkUVtFNKgDqtxQ",
  "key7": "4SVKgUiaDAUn9HQKYVaRiTekAZ3GWCXymWQSuuKzeGGE4cRiETs7GhquhibLL5sUWoNuTG3ad2n4T975cHNszzgR",
  "key8": "2cSPgwwbqFnee2YCW4svb2Yj9ZxR7LiciLinyxk1bKGrggsySHstXybqc531KXarSqK3djsEVzmCxCGxiqzwNYKG",
  "key9": "345GdxESf5g2Xoa654uey53DvhEuUGCQNiRaN1YZWpftLJvzVZ67L4tUVxSzTbdkXtqiJhFC3LJEQgzNsgGY1USY",
  "key10": "3aykSBYwsBUkjGDNdMfwxC6oFq1ExbZLqbSY1uhqnqRT46xJzM4SFYDAArX8cgab6bAdWoXpCY6x9yRRFhPwRWcV",
  "key11": "3zHre5Cfy75umpMuPsfcdosNQRkHAF8XKCeR4ppCHaMJsF4AfTo4iGfenANJZnSSnyerhy3bcPZm2rYcFvZd5MEm",
  "key12": "36B1kaqYara1NfSr5JgMG5nqJEjhvyYheqS6nweLgbxGZoxMj12qeCUNm2xY4Zd3H4o48piaEZY2Dpg1Bfi38Bkr",
  "key13": "48TvE31ztZPkE7s4bfjknV8zTVzFgDcAsqVd14d6EFhvtyRHjBsbefn6aFd6YJEVN9G26GvYgfeirPpgNVZhMwKi",
  "key14": "3J6Cxd9TEDEF4tcq9VeixM8PcY9xP5kfJiXP9WWJKHqJ9ZzqCVtjtJkQ7WE3KjiwDvZRgGRc1sm7taLrNz7vCQwx",
  "key15": "525Lgm2JgbQ4t2zLBWXcBnx6q6W58Ve71dv7FqHtPaW8Jjoq4zjQRaeupBvAtsVxkQmfhYreZdrpRUJxhqPLtkxU",
  "key16": "2KQ3BusvLKQNHULBscvqcYsxFQPMqT8gtq7c3sjd8et3kn2eQjk7pJUeXuMhkCTP6paMLDkjPeL1YRrFKQmozxVq",
  "key17": "4gNwFWK7uFJb79XjZjyGGdnR9DG6RWB3wdtSamLx17QcboW1YpR1TeT7fFCJ2BmXtpoKQonQMuen5m2TGX2LkFo6",
  "key18": "3WG1yFhjpeSip33PdgV8fsTDyt7M9XSu9KmHWLLMSyRLM2Z5Lp6DPn9TLBJNP5PX4BnqmMdoZSM4zYKDRt3j7TWe",
  "key19": "3bvUzcBVGRFKCFm3YyvJFrgokz322Jp5GjREwoCJ3ov7wXeTpKt1x8ZV6ZQymhiH7sV8gEixDcumsWk3jLqvM6by",
  "key20": "2Rpyi1RtdjUzjFMmT5EhbvGfdxbeXJiNtUfZaWjN91YHUbW9KmGnuyCmdaogGjTNNnY5KrMGjQikoo3Azbo6VNmL",
  "key21": "6fLFCQ9u7LrPwnGtmBywvXRi8C7vJGjc31dcjTX5YMmfyF3RmzsWDovkgnTTzMmL7UZQAdfxj3XS44gaef9PqSR",
  "key22": "5Ys7GBFizVABUz3FNZ7GDZUU3NHhmu7C6SQwmUYavshxfC5gRvDJphjRWus8zXyJ5iisZcRMtTED6aFzVEzWi4B7",
  "key23": "28JuqcGfs4f4YsNZpLAvs7WnCj4bLSJ6EbboKPzXNTcE1wCNASs4HpdxMZhK8pcrZLtzNFYwme7e7df7kkbCEQfm",
  "key24": "5zPZBj5WRhMmPWxvkphNSQkVSZmDXtdKnaLBMwVPQb9RKyxMjVJc5qDR4QdwL83o8wfnHGnmhuaX3YpEhSTnz6gN",
  "key25": "3mTN6ZpQPtWzkPc6qx6C5o6CuMj6JdHvvYfgnPKwTXagnkmvqL5xyULhgcDPRxQ5Wk25agiVbaeQ6Y5tbW2qwb3C",
  "key26": "4k96A6r4Lq9qx54yJfzRux7Po3VbuB21pePsLGioX5pJsSQh9qdi5XQAbrdxVKimBLY92s4MBaTguA9LJgMPveS4",
  "key27": "4jVLYXxj1XpH5n4hmYPnkybu3uKLDQkMaJUoNq3xtCwqeMoM6FXCRHDb981qUWYL5oZatk9koasbQuFtmnNbtkgC",
  "key28": "61DM6RcfcMJ96ZnjU7ByBPHhqnnREo3hk9jHoJLwB3M46gNVYL98Lr3LpwHNqLt9gvMZu5grKoWMDi6epyz9LVMx",
  "key29": "3i6QNSapb7Yk2HR1AXtdn8LAYJK346PhRzQmFfi9hi8PaqsZnxN3YrByy8KJBL7wGBn5oPRBjPhcFEESLnToZMKc",
  "key30": "4D4QGEPpSCdF9ek3Crc8ziYBC1kgEvTm2u1ZszSkEkLMkBUDCbF6LFGPVEH7eMVMe5iyajZoVK6JMwCgHeu1GcjN",
  "key31": "2j1xZn6ffVTCoxSotog6H3bydD6TrLz4Vp2CotWa8nyejNrnmKsQRopMpMZMKKUz7TxaE3a2gE4Lh9UB4wqgzwyE",
  "key32": "AMJUHSXoMm3Vsst6H2RCQdc3wX896GCY2zxMPNnkhkBuZ9koRcDZPgKNytVNaPjc4wfoV8WPfbRY6LWAsqZ1E46",
  "key33": "33GvMsPeJSUB5sZCpUFSrRTqPd5H7bQQtNrj9WLtz81eWHeZTsMn27kExBqLUJrRscy5JtV87Ed8uiofy8dJ97Cp",
  "key34": "4N8PsJJwX5FUZUxaPihwRvbbXt6yRwit4dFX3vXXQdcVY5UU9SLy2MBo6eVjnd7HwWoBvSdMKtYr3RFJsSK6mAMX",
  "key35": "4pNThEG5opKsbssCxeJVnSzrHhDro1iYoo4D4o7NTdwoofCPjzT7ozDPbuMcWSFt4ouKaaGNTVXJCJkwhxwkGxSG",
  "key36": "1PPcGRddEN3ycqLC29DvmhvzVzPrBfCej26tC6QAH45KefJXuh9vMPUhXkxoYro2g5aGthPyEzgPwwJkdYd3sRR",
  "key37": "5zBYB3vnLECC7HhbWXKffx8EokHkif8zFWjC9TdSZ2AEtvAiEVfoKeWp6wwUbns4xZ86oE469dsUzwdawjTBgh46",
  "key38": "3L76Vz9bRiEpFFYaYrxycjopndeLmkes4pD3fgJEqJE8zVzL4WNoogX9uab1NizcFmhb1v2eAvKUqX5mNX8yF4kz",
  "key39": "my4zkXgJktWAvQQwTnoG3w5EbG1eGTRrU9qwREnFRXddKxbGTD7ichK3ZhnQGGeJhSLwbDxaGdFNZUgKFDirNsG",
  "key40": "abWtiBrV7vsSbLfuYNDDEypar5ETH6vqT83mfRS6g2QTKJdUw5JYco2nAyvGNfokjTMoMFgUxmm3KvtPaWEopvB",
  "key41": "YaCbdjMvATNr2ehHnasLQfD3NZCT8F5h5v2X6bJP2kx545u1ijQQGc91qT9AXgCjKDdNvHjfPB34EANGfEicb7L",
  "key42": "3nDLaFoJTnacy8oiUPddH9QJUyqqCcvGrEhusjAncvBCBHZuc9CgWatoC6pZZ6SXuFk9WZQUKFU78fQ26uzPMXv6",
  "key43": "2wYFwU5LRnkUQh2AFedQTS4U9ZKWXMKsjoBSzgtRUXdNsRnX7nYLiZJMRobik5fy7UCP2C3cJseD5F5cHPshChVa",
  "key44": "5HWTFTB57dSnZmjW2a1iukRouXF8t5JkKVR7zQLY7YaEafKrtksXbhtsq5sGzDj7yqUaGbpTBhH51qC8EoVExVni",
  "key45": "361xbr8EsMCw3AGSkAYihQm6b6qUkMv9orcdXRLSSqjWk7yK9h3zAQ1eH1J4Qb9XMoo3MUEXYoRDj6z39qDB82LF",
  "key46": "5QrcopbTSyb6NQ8JFq6wJa2GqxFLjAQqHfEFGp6EyJY9fVJVXVJjoXV47pzMPtsLwfDiRuPh588XoRoWShmFJm7G",
  "key47": "CNqGMnYPG8RptxKPjjvGvWU2X8qzRxnDDxfwHmF3A7bhkc2of59vD9tLy2CwPs3hXP93jvboGdxc9rw5f9SxsGY",
  "key48": "CapizURs84bsPUrwL6ZrJswbd3orPDPQGYatEthALry3GeSxwWKTgmhxMZGK58QZx7MebvWn8Gq3Jasz4BBiQNg",
  "key49": "4rNfJAu1Znpvu1sAcorJjtmd1eLtiBZ392qACpn34Qn2pmX5JJp3CkV5eqaruSmT1Z7TCtiTyPVQQJJYaAyMgPgd"
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
