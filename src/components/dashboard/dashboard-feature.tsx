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
    "2echPBNY9oWSfc4AKWKFvnurwdQc4iBBPQ8t1K3vGvzkQif2UtBUtLiP9oT2qY9aLHwMBJchobMnSrZshFftjLx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MmsrqfFkMs714U1bx8pNHWCUcjFfZhHjMxvL6RATaV2GVCX8c6XSBvavjSVkt5eLKkkiEsHBSoYkZt221hckKiq",
  "key1": "h8bEcp7MJogcggLCyPSJAp2xUB4mEXog4C4mD8zWvW9f2cMTYZrKqH3H3sfehs7dALWeh6MibGCWPL35PA5eYpm",
  "key2": "2MitD1jChyf95DtVUygNVpzwZ8QTfNzCifU6URrEBb4azG4i7vKYW7uSZXYP7CPAigkAQiBTwfNuYKepLoFdgCaj",
  "key3": "2Ps4v9QVbUvvwgKpM4u9WwsjHG5AkBtoQVNGyufe8ZdBxKBjnFuHBxwQ5DMsN1tBuFyoDCqbDKGwgbcfez1pdnJm",
  "key4": "4FAmSkpKDP7r9Bk83aB6TUmWJswvtmbn1gMWkE5k57pvgrB21vqL5X9pwc92pwheYMJDyh8W1GyVgcwSXTgztk4E",
  "key5": "3ourhhn4g3SBpQmz1aWc6gMYRdFxZJDMm5ihTiBJXGWGV8stkJsf44skrggNW7rae7DvZcLLTYRtYDxHZR6obwT6",
  "key6": "W3CQG32RMHGok69H2iW6k3kMgrWTNXByrkRtMhvABy9PHjLbAZ2XNxTtNuPUp6Arw4J4piGr1HdwtytNi6FyYdR",
  "key7": "2649XQBLLnfUYmaMhYLSFA2bTmDJ36cj1puKRGmfWoaLfFuuN26BGMmhZduVfAtfnUpbbhETNtbiqoT5FrUHvQUm",
  "key8": "4jowg9kv889ngisjbrrHg73QLpXTvkc6dAaYFmydpCwz6kA2puGuHbhGEvCjqcncM8zECLipYsVrADAU9BQbFs1v",
  "key9": "4j4DMMwMms6i4jQBLZhAyzhgyddw5s8D4RBNKPwq2onXA88MmzkUYVBf8zKc6GRzrWpZFLyruoMNK7isyVuqzGp8",
  "key10": "2UEAn1Z5ByqKCim7v5Vcgyz91nKAu7s7EQdULUK8Pd8s5T1rQzmXzgKRYS1kk8nLVqag9jDPomdfzzKKxjfnFV2U",
  "key11": "wDACw6h1uxxXXdtbVaprJ7GWSXCQjhwqdKo2MqtU5wZbT6HdVJFqshjjpSaCjkMST28Q6KKfedJBpii8npz3zKN",
  "key12": "3mXpPDhqmdax4mfkzRd3HbhgWBfgBuhQmNDsjSt7mwEcxp7nvsDswg8bXU7xfJ6BTZNBa8KFWEMQp3MmnZ5BQi5v",
  "key13": "3oUDg252WuN7c5xJCuCgMi7jpANerKrere2dfoMmp6ttoYPLGbDXLysx8jE2BbRZ4Ko4Yk5EHP3fQBFLWY615SN4",
  "key14": "277qX9vP5cJ6brSMZmdEMJSUVsS37NS27UNExuq2e38yktE5yTLPcpNgLQ7E4RAuCwxHkmmrJca8Uho9UtCaAebr",
  "key15": "3bRZHTxvTEeaUnCpqRxsfaW6PjLVHEyecayTQf4793hz3ddJDVbsY6pDNMw8Gaw44yPpJv3f8zGW5SQqm2ebeqXc",
  "key16": "48hShJw5BCbDLZYkCBtuEfyFqnNhPiGZFrnXXHXYbeuc56HppuQYxPK4p78eQAVUwzjPHAASRRQHrU5kTGjrqfaG",
  "key17": "2brfXxQz7RGnLBpTn4feNdVgbq1vZ9i5PQ3hhjgpYyb6uebi976amAh82bGRN9FbstHTRm8bamtM6756gDZFNT6b",
  "key18": "3TnTp21rTUNr7Ez2iMJpoCn7GcAuQUfvb9nHoMEQvZ9sTQUVgxiXv9ES2kzZNU1a42Eyc4oLY44f5xSJCbc8ETfC",
  "key19": "31q8YqJUSoa1eMfEZPGzzu8BpE82Kx7SgNsCuME6MXb3gh3QDqaCeiGsfcjjEJJRnecdu3TLjnCZFNGhqasJQNrb",
  "key20": "UZz9D7hmC9e2BTAhUaQcnkEoYVXuBwtfytMLHXqqxHorNXQ8o7eFLSEtwdYWtPNENDZA5GsxG3JGkfRyHfMcU1n",
  "key21": "2t9fLoEhmpF7jfHeDXqBKARccZaYo7cq6grWTcRJ2b2meK1P3gWxRhvKzzgk8u3CLHw7JwBJNxfxPon9hd6L8x6A",
  "key22": "4HjwDYDLLwEB9EV7giV3dBDKQZ8SWQKkkimQY99vhDoumoQaen97FynKDvqSiT37YANnb7yqiTCzKzsqePRd6NcV",
  "key23": "3GKpTLsXhaP9oeUkVan5rdfj4jXVsF91yujVZxYUcFnkaaN323ZbmDpT1D63U77G7yUpDWfV8S5ZzPeDbHfxDRDV",
  "key24": "67cbnT4ugV4gH84zV837RZHu2dKTRuXC7DuDSWMYaQZ7JEjeaQXarwsApCB5S5YRcQEDMGDDtqWYpX9KxdvgWiDk",
  "key25": "5888JUK6nNRJ56LsUCnvLZkTQxygao7meB28wVHQvJjaiE3af1dVjtobchdghRaLQfwZBndALsfbJJ14CiaUtQbZ",
  "key26": "4mBCf6vhpCxyCj8CwKXz7ptR8uVQSxP5XLWae5g6zQHG3p6GxuWPN7AZeqcecGhK6NZR4WnTmrNxWsAfrFUyFCzS",
  "key27": "jzFzJffsWU2ZzEsqkqCB32zGcpnPug6b3dxXZskZ6fKCuhCZ2XoUxeFS7mQUefmXgdALw86JVACEtitmKdDEXvC",
  "key28": "23EpMkZdMp3pwh3wnuVxAWnESTH4rujey1RqUXvjsD4g1AH8KtxP3iDJ8MCNVHDd4Z9KednBpEpL6LzbPoXYoJZ9",
  "key29": "3KUWSwxe3A3iboYsqshUPvtGSeJfJJgx9JDHyRaR84CWj88uVUt1nnP44kqLZhcNss6mAC9MP2KtLDAyTxfyVYSK",
  "key30": "4tEfwqrzQuzjGfgpjoYprhLEn3uMGJ9zvMwJXSpcRjtiGAVafxCtzhB6qAYDjgG89c5Z5hsxqTqqBRo3ada8gQZB",
  "key31": "43moaaEE5v5WJwJhmdcLPhTrgdHDpcfa9eQBxGyn6d1t3nLN1zF3nvw6Fx4zcLgLPKYj1wozUj4vk7wTuiaArNRT",
  "key32": "28N8WXwLZRr3L26e9tys5SHZuWctefsskEiF88LHnHZLq5FNyVnqrC43QdcsLWzkT6qDrVHX1wvWEeXbfyDdzYBv",
  "key33": "58Do88xf1WvSJKdLGYvcPamcJEdANPGSMEXmPcaQABRzHUzxZy8tRhhh18TE92ErSWYzJdrNYnkSU7VueFa7yKi1",
  "key34": "24MsAUCnAiQhHWBYXweZB1tDHAUWp9mQhHVMJXH2yvD5Stv35DUC5mpZAkBxgQbAbu1Kvo6FG63U5THg9TpjdqQx",
  "key35": "2FFUChhkQD7RdaucPvCU92BKw7pzBNa5V9CzHq1hyGs9LnETkhU3ZgPqdMgr7dRiwvTaFnpt2AGQRE8S6xx4H15F",
  "key36": "MFMjFhNHi4LAw3jb3C43591mTymadbXKGqCHwfMWHCKLWQiDVGvZsakvGsq3yHttzTJG2hfxo1UvxEdpWqnCLfA",
  "key37": "2tzVxk5JkeURkTfM39CS8vCRdYDQDujGb6bLSvxm1x9QqPcRfSa6GLLCeuVZ97dkckpU4bdyZVLw3GrnJJdSxZDZ",
  "key38": "2arSTGYFZLkxo81MmE8V2NxunWbGtd24PZ2CULCer4eSgAjvddoq4VrjRFgAgs7yrTwPR3hyhTu8hCuoKp9jNrAc",
  "key39": "3tVL6XvQ6ULSqUZQZ4hvYxxobAAxDZW84nYbSkcUfJhjbvQ7DKpt7ekEojxgzuL8fJiSiz1omWjsL6rMMcTP5ufP",
  "key40": "2JMgqzwTXAyvLDqBioT8fei2AtpweU8q7TpnDn7uGBPpuXHW765DrDXECdYcVkfFJkcTVpCE5EmM7o6U7B7SgfW7",
  "key41": "2JmER34GrcVET1kiENXLSwkMgwggQaNH6jWAqoQnd2yudub4Q4YNQguFqx3BEDnJWMrHmYxjSJHsmj7HgqxD5iny",
  "key42": "4mwT8XSybTBPbhzboecL7vW8YweiRANsdtfdaXmPjMjcPdN3VrYxjpJ4ntqNiksUm9B81iRQzzkzdWxr4U7iaYNC",
  "key43": "39ahaVJvHWSJ8w9nCdkk2BD4m7oL1zrCdzMsBC46VX5SJMGQDE9AnWC87QPw2bQuwy7HwqWQdxEnwuy8rWh4ATHJ",
  "key44": "dEpcsJY1eDsHnVSV3Ab11j6mMQdJGRdj8xZavZ9qbYDYoE5dEL4nf8gMYTXBUPNNqt5FCBgPHziJKnkw9sCocpK",
  "key45": "3tBMwU3vQQxuPzGoRkFt2LdcEB4zKZEWSr2vPz1frsbw46wYQVTZDnjw6F9y9Bar8MRj24QMGjMSvUZJGc5BGjfP",
  "key46": "5x7y1eQjFuQmSN2ZW5pRwj9Gv6Zex4fZEFSqEBgeAN8SZfDcmEg8iXqKwm3VNKdrDzxKMRPecoRJD2p1nxxjypbX"
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
