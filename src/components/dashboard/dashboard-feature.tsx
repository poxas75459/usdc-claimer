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
    "3Nv1tyCuc9R7WQhHqT7CmCdExKE2jEwszjjpSzuqSASEPDFH94pocEQnBWcusANH6m9QGuGDp6CU1VbCj9w3CrBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39L7dYCbpR4WwSTi5n4qZEUc7Z4E5KCHNEhvHY6GpoYEL41T7ZKSufKbmh7ttEfyYGmKg4XYtpxkMLxvTjBDa2tJ",
  "key1": "4UFqVRjwcH13tACViwFwMVmk4BsXyCwDi1H13BRQfP7FAs8YwcU2n17YosfGr1EjGJuxZRqGEr5u18WoS2BVLqWD",
  "key2": "2vJE8LGL7DeHUUWdpcVhkDkXodvGW2n63WbXts1BswjW3QrQjoCqtPZVAszKSh1UwpNPwAjEd2z5TwKi2DWPCbpp",
  "key3": "3KkJRQjXLYqA2HghGzeasNWDgb8D84E4EmPo1vbsHeSNKrcmuGLvHShq6Nj7agsGGmXsQ4FGUmHZLtQ65Pjhggps",
  "key4": "4PF2zJMExSx3qG1H8HFUf9a8ZNpyEH5B35LdQoBVVs47dqm5BwDfy1Ke7v4FJCcQq5sV5vubMjVEnykzGM77xkL9",
  "key5": "szMroVQ5Lmj75t9bKBPTYnCcjALPtDb7SA73yidcvvDMZDCV6RUxyqfhJQ4Pap45jdx9RYDX5Fop4H9c9NzsUbV",
  "key6": "46yCEx6ECTFqGby9C97abKbE4Az47uAhC6o1jCbCFYykbqpoSYNvhJ55tDVBGXxq3yFeRe4BFz427LHysB7znyv3",
  "key7": "5S1sRTyuJeoqEQP2vrid7cC6XcH1SA5cHc3pd6dfibEd6mRd12uygScbvptudTxDCJbJiqfmJ2f7KmtzWxiwm5Jz",
  "key8": "3pFEGWM2rv3epYRGdzMftjnrqg7marP47zXM1W9LtC7TXdhHfQvXruL7u9ZqUg8ve6yDtN9ihh8NiDVCeBNjQYX2",
  "key9": "5Vjz5THrCBQvSBhSQguxfXbHCns6A7WA9twGdTeW5TKsQazshBoTaPDNxGTqu6UEp1EaH3APi2dVBBugnJiD2Psq",
  "key10": "225wLU62aTqaT5A3WQFM3Bd5Z44R4H53uNWhYhL9PHsRgHp8hDwVygbVwvWiwT2BKrV7EJnhYG1sGZUU5ujG6xd8",
  "key11": "3F31Jt494sAE2oqQNLaTVqDTrzeZHSH3T9cdHorjgVZyNGDeM5pmDetKsohh6Q7hccrSkYGT9mMXAUchREjHn5Wi",
  "key12": "4sehKwUAaAs8WKyDmEVKptFWyHvSbe7aKac3shjJ9QFGQnVeSmmWvNJoxYoUQ5S9rXUF4szgzgocoxN577sdCD13",
  "key13": "2SKXC7uYsWSgUiJ5yuuyqUciwGFdXEhBtj8bSc9kMQU1gFJnkWXaC9r8evvk9EFwEFLL111bdZwzcy7jPqMZkQhb",
  "key14": "4UresmyX5veHYbR8NDhKEUqDH4i1mxTnAgPhj9v7tZDuwm25Bi9W4Xt8ZzBb1kXAzonAVn5bsaVda5GXXcF68Qv3",
  "key15": "wzssPHsbmqmSK7MPTjsugxW9TnvaadbvLpwKZE7D1AexQqofAeN22h8gWCJPtrXoCkCRxbQfxq8EPW74WLkRZYK",
  "key16": "5qSsVjwxhucbThzF8JZpr3bKLkPMeLPof3texFV6BJZogbUpRb421JmPiqoUX1HwcujcnpQRy2GfT9oPq89oNAPa",
  "key17": "2ThN2igxjyGNDDKtHYh31L214VePmQzVhcHGRo15q8ME5nvKBbFhbT8MtUQdSAXnjkcWrVHssMCx3ay6hsMKV2be",
  "key18": "4hCFsx4g97GD7w9xkynvpffve5FLw6A8P3EF4GafwqsQWhf4XXy8iJgFiFLxQzi4V8Zm9XcEqmSiqRefPvQ4zBBs",
  "key19": "5bYh2q4TyKZUXJpW3NzZufxFgysqwJQrtA39cRe26Ha4UivKQeCBUoqUD7SQvMq5aAHbvQ4EjLooPUwcdDnfZuCQ",
  "key20": "33rXFRdctytmcYrp4EXe1a3BxU1g9o7xDmYqk7SUUZjZKDF4qJgCFsWo9GdKyiDfxGmdSxsqNtz7vomYtwPAoG7f",
  "key21": "3KQMsrQZSEYuAWSNcUKfj8wHZ8RHdYdCbzTeJe8ffwR6nBEig7tXKnGUmGVyEJAYKmjYwB7kYjnfnWx1CZCcSBeE",
  "key22": "4o5YRReUmkUGQJSmyGLHk9Hbp8nEAGtBWtA7ykMw9b29bLygmSZYi88uLttF74Gw4yxknyHu1mWSHWCLV2hjwvs5",
  "key23": "55dfRL8nqGNrNte7wrj54SEwydUscgLZyC3Souwg68weRuQstMXSMfq49arF3jwzMG5abeTLXfAHPYVC3ofpv6zy",
  "key24": "37DZLEdr78t3WZDaPaT42h85DgzRE6b72Yre3cwde41KrwCJamwzcYEPmpSR3iwMDKwKyKuExvQssryKcrWsRfKy",
  "key25": "8TPfq88LmyQBKmCYJM7qmJZPPRHxRTtwXUMLw8oLFx5HYZM5Vxw8uPTuBHyaMEAUJzSYkMQdfNBLq6UBen6fQPN",
  "key26": "S6C9s4yRH99nkBgCbD32bcnBF3wt7j6bQ6SEtjSNT1vBw3SKdLaYus1hHuFNPbXHYf3vdc9SfBLDg4AXDPpnkmV",
  "key27": "5ju1N41QAuFZGv76FbiGWpTu8QdRKUsxu9ZEJRgeHFrUBTNxk23oWoDsDWJUeoDjr6axNJ3sBdhRjmBcXHoVtvyA",
  "key28": "3ySLRCiaVpeXeHrXe6SQDGUuvX1XscGXSVs6DbzigMnWQDDEZ5JcLXHoga1PCwi5TX8boz7NRzQwbQCJmATUEpyM",
  "key29": "64odpzwvnHNtHzt5RsjMNtzkZyQAtJjfd8MPzL2uVAGwwa2MWSURxEJD77Tvu3WSas8TDA2LDvxvzZEP3ja73Paz",
  "key30": "42CXztsKy9aDqVqGeicrzUdP4d5GCpteGWJV5Q5BrF5563SR11jNNVjhC2C6XBcJQeeeXZyz7JRX82aXU6tbjdhB",
  "key31": "27s7vfCSEb6JcKwh3StiKLuxs2oYLenf4M2jS6pYPY9v7pXttrhbY65bbchjWWa5UBJrmiei6mVcyc3yc3rRtRRc",
  "key32": "4i1vvxuXW48WyF5oo92KxuJ1GUj4rwAwXSFrXxDXK3MBJ4cWmP1LmFvkqDHgEK1pVP7AzzQBHZA2DBjoLETnDXeB",
  "key33": "X1tsSpRQqARb25KaNeuhyatCmqjiGN28d9y7ANZgb1SDB2eooVbshJKHtJtn7q1wV31AsbNjpyFCwAsgmE9g6CD",
  "key34": "pGvsy2pdmZCUcMrNy1kMps8gDtLnGEmLa7F3R5S2MEPPicQCYkZnB7j8psnWvACNFCrtGFC1F93msGevfdgC4Ko",
  "key35": "4w3FdErtoqZYtuzmubuDjhCq2WWX2q17tbuHZsBXsqzK4YsjLmcSCCaEd82t8wQSLTmG2FszK4PJSGJVKarLRvpL",
  "key36": "a4que7jrC1HwxMpH4fBrVbsYwp1Ai81z2VsE9RXuYvc9AxdjEzTpCWK9wkDbBcwJgJtK8DVR82p64rfNAxpr6Bv"
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
