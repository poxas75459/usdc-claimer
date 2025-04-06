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
    "3kHWAqMJns5TUue8jzMLrEWKnEjcPCYx8VB7iNdiqx4yqDxrKA2ePbJvmitdghu43FuykXH9VBg7bB5wey2F1BsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AJZTR6CrBGfcJ33dgQggyiFkeushKW8Bm3y2iFarT6D9sCGUTEB691ckyAKVQXtuSBgtP5iTiHbowxaABTrbnaj",
  "key1": "4TGPMKz2Z4cuuEyL66U5yfSX1sNXmpxRAURHmonA9p87DcKMwFjn6qSXng7YVa4XSDSWGGWYJFg7JTmP2wScqtn7",
  "key2": "2uXDrox4vpE2Axayoo2NjGt7fDnYN5TWpXnymbcMaMyNj4KVuPzFHSdVsKNBYsmaoPgRy3cUPFuGfbUzHutPRvtY",
  "key3": "2PNfefRZ99WRfhtuQkEHy9NBbwoTKgQBX54HiZ3qL6cmxNiRA2t9Yp3J2Y6RkCAmktg9mq55EhL32PM8zYWAiAQe",
  "key4": "5rr78xG1h5vNWUrHhceYJvSRvUuKbRT6NppLxJ22NyZqvAsBVMhrFVzyKueQqjgLc8k4ndRqeW9oHw6cCdhAwSz3",
  "key5": "2ymxNkrC3AcrscZHNyZnKoYQbrMc3pooVQX7bfhM4YJnUwZSvUtuznE9AQ8MsTbyV4JZXCaR2YiEGJBWMeQy5U9F",
  "key6": "YuSLjZvAR5nKWaxidP4L11L8rfsgbFWj5rjWbkFX7j6d4bXesoXFWuZ3uegSbz8WPjDrCaKjpfLAvD25NkSbzMM",
  "key7": "5eGegqts4kovGE7F9pL8uaeCRFn95nq1afUbtbN2HTdgj4Kz9pZXjxeAiyAMmGMVNuzBk7U64G1K6wTUWc73aqyV",
  "key8": "5ksKSXs2FRRjNqyq3wFFwLE28Nn5LCBMzfiUu5uXagHKN1q9H3X5pArNiHNtaUKKLR11rhbMysaomQMup7UEtpoy",
  "key9": "22wBs4o417zkxqDxjRk954RG5cijnVyK1pVs7cVC1g2MmYuWVibGm26YWZYm3N6qUy3gUhieGG32Vjv9eNNo7aPD",
  "key10": "2RLFMVgZbxaoQ6aQgxXKd6qse8cSivETXAtk7Cdres77ig493MknSEU5Uet9tVctfCP5EGxLAM8hpExdnttehAzM",
  "key11": "25FUb5Fo4fHDn4f7ZoAvXB9Vsn2wgHnk78R6cFdVq4jjKSwVHvaF3aPYRnVv4VtaixhmugoSumSb154DqoxXWqC2",
  "key12": "jeUcLZzbJQbSzMTWwTu7nnnwozGTM1WE7JHzSJfZ8yGuC2zUw9cdLnxrsDdKtRtenEgfQQtUEFPbFe878KRmr3d",
  "key13": "3xamgQAGihfzJTDcJyLn2WMg1xXukZt6adjeZ2DpnHZxo6C21En5nSQiFNVivkiRca2hfZNor2XvR4bCWEd6i5r8",
  "key14": "2YPVGK5U3UFVRhuvBza8kMozJRM9rzbsHKc1RtyiGw1KyJrTwwYxTHhFbZ2S61Bx8VYKQuhhN1yGC5vvUHP5adRL",
  "key15": "3TqbECJRfexmXDvjYf6gieYhAU7RugQQHiEhrc7EQg8hsGSea4AKmQpP2AENiiaAYaRshnvE5u98xjV7mCFJ2iaZ",
  "key16": "2wRDuj7eBQqHNYg6z345mheEJe9N3zPH3tbi2ophUeFxtZTq8ZHTXLvUhzs1sixf9R4TYdGXH34xjxqbs5ZRca6Y",
  "key17": "4jPHKTa2WETdcqbZHx2BgF6ghQVzEhNeqc43BGH9QEtsiFJwgjVuGCx4tgMsBiPt5rY8f53D8dUy5ABzQTayPQDg",
  "key18": "2TgdMs41SZKRGLRTBtoeH8eigA5Ve5BuUpKxpgooAJZUjNVw27DxA4szatTwyc77jL89cG16CHqkQzfQmFHBvVBz",
  "key19": "2wwf6E42JsddrdDmVyNoyPRu4Y8o2ji3dejifbpVSzKY3SkHbJ5GbXq761trFb2ECATeumJ6zPwZGQT8Pb7fXqwA",
  "key20": "5aZuceMYHzXkeUoARUwcHhQk3U7TMFnRKxRE2cUhcjNfdmDXTwUvPecTCCewa6be7BrcPxC97yp3Nkh7fxFX8bPu",
  "key21": "z6p13tZZcohdpaFeqReSxNTHq8Ku2xchY2A2MJYwZ7Edb9MWYEUrq3wCgnWw4Fh9KZ6QRtQMa8dqDRi9awCe1co",
  "key22": "41gdhooSNWQT1d2q8WKAd1VbQBwxh1RwHJ1GzENmBSXrdtMy7LeoeyZPsNHCjbuCtzErXCufMvzUEDvV4wNGxwB8",
  "key23": "2Afq3F4hpopWdxEqz2YthNetPQc1PEhdMzFvi96hk2iLtRMQ3t443RNTsjvHU5pDUXGReW4nyXQtKikGU7jRULiE",
  "key24": "46ehNWnWWEWbMzYAnh3hw6tdWxwJVAXi3vo7HYjWaWbmMCx1gZAbCnGyXhRdeNsX9Vd8e2JfYTfQ8LYuAGA2WRvp",
  "key25": "m7hmsoATxJzWC9TZT5vFapLPoYifxfkkC5rXPo86SNgdG7AAwTbeefhvBWpUjeEBLBXo1Y4TdLP3KZSG8ocHE1N",
  "key26": "54B1Ktr4MFGGywA21Ly9xUQdUKFo2jb8HkZH84zssACCPgaNZhmi3vTkT3ayweahz3X6xuBcojcvnKmAGvfYPtf",
  "key27": "P78W1r5v59cvnX8xhycemVi5JpL5eyy2Gt9aHDKK9dvuSCYjU3aHbJja5khCNssyChjTwCo5PCU353ZHgitNBeF",
  "key28": "2fSaRZeSvyKNbqer9YYCS7hzo9C3XQp89wMZg6PUpGGiu6KAQNr9nPYg2nCmCQTG3xLYQTisq56ZsBZt5LjJXHnt",
  "key29": "2e5qTM1iWrcT5Xb11pMncwQZmA3P4RtdiTz6kHaUAoXeAuFZZbEKF48vXWSWv2oFH4tyXQBxnwsHdrZv1H9VLuoD",
  "key30": "3u9wMyZPLFbGVxKVXPUN6bRJxSDu3DhDGiDv16AUCpgfsUn3XCCFXYPYttdwL31Hs8MumNe9cQZDyJtfgomcJXZg",
  "key31": "2MSFsAqmLeBuhqMknSTGcZRZ6LLzjKaPrYzfiY2fXXXUh5LxtkkjeaK9kuDwoHthNG1pTWchXCgD8w5WoC56do1Q",
  "key32": "mvnbKGQqiRSSeqcK8zRcQvKGt6VoUjagapMUmuqGwQuvifRMV6yfn61rHeqHwogUdrozFRxSNr4Sr95Hj2LGBV6",
  "key33": "4arBRXadCcW3NdHiL6qaGxHURdHGwJKEztGCurhQ1y5qzUsK1aBrVZ1KvVn1d9hmMoGR32LjY74YpupsbqtBSdeE",
  "key34": "598gHVbRCHWa3z8AXC4caLFrHkQBYtRGK6Q7pBK44RVFUncLtpQX8zJyjaET3NPepT3hTwcxUHpuUYwPdSm4M9qz",
  "key35": "4wHQyRJNeayoa3j2hPGV5ApFhGemXwccFx7SMMDYGkDQnJKwirfA7zcLokRnUV4frS7u8W6Hy9a9yTP2sJhJjTMQ"
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
