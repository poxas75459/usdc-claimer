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
    "WgDQNq8xuvkwcpegahRQeBzz54XN7BAe278kWQZHNMJqSw7BvxaR8F3GHof1JvedCWkNgkASXpp8H32r2z3KFgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1TZrj4DTR7be9girWzLHXMebBviNBAb1rSZ67abvcrmiDDgUuzviUB84Hj5gWx6neAbqHfMTp1qi6SLP9sy2Pp",
  "key1": "4tLQfirCbd3uwt8cWihG3zqd5nks3mrTYWckaLLiuawtybZKYfMdzhEsWXV1wSEL5Xwj3xYbs7tT9xirkdkrKP7M",
  "key2": "4W2j3bBBzyEenSR4hvqCsBf6Lb92MjinJPFX7UMapyZEoUYrinBAbbhmN6RTVyzejWP1A48WjBVZGPpvr2QH5jhZ",
  "key3": "32BeW28dRJxZph9CeLp1EJKDUaxqdvz1ZpYuAkkAAqUfPFXR8uJ7veajzbLnUxPiRAVWSpUJ5JBPLfjxUCHJAU83",
  "key4": "3eRm27VaUj74ncHpF7hX7Eh3WV5bwrY1qbyZTk3fqExALaU9Tg2fdiBdNJauaueLTx8ZE2vbXedmYjBTg5WQ3jGR",
  "key5": "J92NaYLQ75dkBUghUPyJ6uWnebWNg2bcXPRKfQpkwkjjLuJtHaGtWC8iKXg96FAuU14Fr5AxX38PNAuMPPWoe7U",
  "key6": "pY3uqXP9UDKab1HcmYeJBdyo11AMUpwkJszALUHZTq522S7LE7y8vXrQkeUyEnnrUnxYLfDXDppW9tr2daAfngm",
  "key7": "4YdZjsPztiKQpxwkE2H277sv66GyNiMp6UR7K6WGCCVvgkXSvqV6WurrtmRhpyBkWotaxBMHtrxfFf3FXUua9snx",
  "key8": "3dkBX2RHjHytFPhuo86uwt73ZWXqHGnJkkECKVXNkKThahH9fHpLvz8gaa7Z8pFhzSDiTb5asmogvvhxKZLnXHCm",
  "key9": "YWtQKDCkZkGLUKtMasw7fCjRZTbaob2PXYPUHuTYbt5JjRbAS5CWQkTo7TNCVfbRrJTVQjeAFbCFcfz8FHUPuD2",
  "key10": "3oSgM9v3Q32EArRd3aLKKHhdPN1FdTbuGN1A8zX32pMGPiBGdTme5hxEcDfM6gMvuL5hDKEQZJSUqcvk3QF4MkyR",
  "key11": "3gTJBe1G55XQHzU7PKqEnMNvbAgPxLuFMj21QuNRGi2bHMrYZ2mXukMFRJHtH97yE9Axsis5ymy7rdxMzYmNzsjS",
  "key12": "67c9oajKMV83C429Zmud9h4z8zRYNAgYy9kKkn8RyAJJbcHerBegVCQUrnp673e4ZXWnBsfSepbyGp1GVG7B8jQ6",
  "key13": "4DBCZKcZS2NVWo7GgeAKFrVeJQSeMypCdCcSH3dsvDpGTEBZ4s57nCQe8mGhzHc5eXgs7xWvX78xp5P8tZDpxiLL",
  "key14": "HpjA6uWHTpYw2zkH1wNv2ka5oXze9Mxcaewr1jFcSe9w9CkQXF9CmF67Cce6son5z7kbwBBoMz1yXdBWnsAgkoy",
  "key15": "5ruoRcd259JdLLKDhY2dF3rb1S6XsUHbdaMGxnj7DBD2BzHsdeYLLtYP1aXZCExPHnsJEPyfWUgna33TGSwLq6Lc",
  "key16": "3ZNjecPMAF9UxX6Y74Px9z8373VJCzwbih7W5H638XgXYWXp6LocNvoFJoEJL5RDEdhFSKMJK96VxcBMLyYPxGHC",
  "key17": "ytQSAqrFaRJ3bCdyrRSoVQvHB44twXkUFyzRvkr8kJi98hirxCZtogtzjR8KX3raG3ai4ixf7XrEgwH7hfRTxNp",
  "key18": "2ST7UbShesxYoA7q64LNpydRtyfxMPZoZobX5cH5JbBhYmaRE9iDDuvRGjME6jWrdVUsXfViNtkRNSs4BHjwbvcx",
  "key19": "A3YRnj7sUYqmnrr6rWe1JvifUsJSV5wdYqejerEKSdFkHxma3AAdLeps49zq5WviWCBFPmkkmAdSMFneCLknyQd",
  "key20": "4McspoJAk9kTkY9x1ZmRam8qk97iV2JCUZL8ecZFYhuX9kuKFH15YwtMpxsAtXD7mKXxC6H8izz6CunzDGnovt5m",
  "key21": "41d9nBrYoMN2Uu2rtkY7WKjMLGwnwYrgph5w8ACoZH9ooBguth13XS5esmrLMW9KiqmD1t5pPp3Gc2RhxzEbKo5k",
  "key22": "4MUW1HtApoWQdZwJFsS9UG6azjoMaaWGTwvPxcgipbbn8SZSyXQJfGZmjxekLVHa2Z4TEHdL5BCEFJqVQxT2skBW",
  "key23": "2KxiHL7nUz6HbJPgqKqWWSyTSH2ga1oVWjP4HtjEzGerfwBYiij6wYASCageMqvAzsFRqKs4rS8WEtrryi948MEz",
  "key24": "2Vi5auHNkBEaMyNXd55QT7feEa6bRzqvFWvw4g3Ar8hUhp2uoP1cW6YSAsqVmrGZoSMfxH84yvTv39ny5LtXzwkY",
  "key25": "2khR9RwnUTnC7VJWbE9KjcSfNf4ccXYfHBbThiQCu2cEboLh7Bn6U4a8kiKTv16oFFGV2aKjsXSBfZbx3MMhoisJ",
  "key26": "3pLTeoKNnHg9LKurwgv5CBXjerezbh9iBe5emYZHQixa1c3qAy99MbCjT8nhdRntuc4TX7aLTvgFWxMAPnJGTHR3",
  "key27": "4iQwkC4jTzscNxdRMZtaeFWsFDeVx7MQNBXFxPLbThiuc8ozeYkZgXmLcXEmGGzszf3mSkVnhnYB3Cx9a4P7hNaM",
  "key28": "2niHryRfqLzi54AXQJ6i4J6M4vjDCBGsuR6kvJPEKgwXsukZEci3hTfHQZerGTZiH2ZBdautETYFF6EcqmLyuTFg",
  "key29": "3fE7wMkAn9DnTLScdzYucZsAQFicTxR9XrimDvjBRz8sYJVgqTBY4KCGMLNK9LX9Sif7edhvxdqRfET9f2zQepuJ",
  "key30": "2jRNSqDfvMRknSnzeyrdANSFTwGDKdrC7jNzgpMm1azbQz96MvFXQLK9Cmsz1hMXeyftqdAhbVJ2ZFPo1qGU3SdV",
  "key31": "M2znKZfKFCrbnMUm2NUKf3nHCJqvZXm3sbLqX62JnUsyZo43aZM8Y4BW9MHta7UdZ7vwgNHuR2jZjiedTENFCM2",
  "key32": "5cKc6gNoiP5FCMET2cDRzq41QAcQGHLjoPXbCKgKcWqbRywMEhxdLWbyZeSzfZWwcWNJoMmREuJCR6kNXqNKUK4G",
  "key33": "5bFXt5e89AesV5msXHQ1mYCtVs8pnabKBK33uWEZGASFMr2JdP9XaszqcKPfHzzwr1KamBZW5LwYn2a9rg7fQuzA",
  "key34": "cFZhUNv9EsfDobCMt1eqduUa3dCt2yHhsfpq8enVrqTKRSUpJK471WcMzKg4jzhGLRwnhWQU6uJPPjWPmcuUWzR",
  "key35": "4pVgdR3dTJuz6KJLx785VUMR1GnQWhiaXKn94CaVBUDR4DqJq5PhoWPKJ48k5afW2wpAKeKTh1wpfWS9Dn9fQABu",
  "key36": "2s9pNE7aSb5D6MD4CwAQH394LFq1rfPnKbEndtUH3LsbsjDtucAYnHkQPy8SHHQoJ7TygwtJdSqp91cwjY6UNmP2"
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
