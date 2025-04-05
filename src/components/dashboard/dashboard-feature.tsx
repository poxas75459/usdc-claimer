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
    "4b6rTYQfEdNtPQhr6UC41JiSpXG2Jn1LJASGhoWCCjB1hbx4J6Rw4vUB5bCZiKHcS3A9c1Q9gyndXCLVTgEJatpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eCj5kKkfB6ooVpzhUXtE9V661ZDds79KMZmBWCtE7jLq3opPey1EHGTntZtdwysgBNTCBVUds2oj7i7vesvyGCX",
  "key1": "3ciyX13rUFgk1oLt9cc8s3zhTidKtuyqaQnVaY52Wf9WPH3QN3m2pgVUxa8mYhXqqQLpGh2hNapsZqmNhNJMyMLE",
  "key2": "2n4mbvCqJwDwLt7aGqKnjuqRbZZqgJwcJ4dC5x9YQ88rrAALNjkxQv217wh7oBKZ3HMVxzjD1aGJjq6YgvPWs68H",
  "key3": "5QmKA8rRYhzePYY9ctEuHE3CcudbJGMKoDf9K8Jbh4ThY48GKMti7L6Yv8U2S57Yadcchcew9xjT8yhFReGhHRi2",
  "key4": "NjZmbP57o1rfaV7Mt9U8twE8TGKwXGgnsf7m6ymMuXVP8i7VkqYAvXiL8hWzXmhrPzECxmdp1jSVA4hREDXbZyE",
  "key5": "5g3kz2Ndd7afBMpE8uAucRh697jg67qDxAXES6HxTM5WyyM2jwQoSswZXrKGsFg5K8dwVzHcKPhsLzqcQU46dsap",
  "key6": "8pTguJprjUEki8pqkizMGRDJ7N2VTCuUS15XEaeyKJuvkeuAh1w9i1z7f56jBymkHXL7gDayeyLJFJAPEkeanDp",
  "key7": "79tVPfrX9gVmitBRNwvsP41uMaXcMVtzNYpxGYtkR3dmWLj3nGwL5c3dvQVospBgXEbuwM5L7DAqyA4mqkYYaQX",
  "key8": "3CF3LLPdQwC47dDLqiWAK1G5628xxBWzwwxNbPWX9e4SFhyf6PZNsTz1E2FtKHnFFUajkSCpVGAe23jb4VWtAHGg",
  "key9": "4SvQe52R1MQp8uHS8rECwBw745rvaZrYGKFMFt6SBMEdqbFoaxDosxUdb9WPMUhgyJY2urPGaV6z2SxCRTERuG5r",
  "key10": "5qsMt1U6XtR2Td8JxiMa1T1iTuU4xjzQ1NTnVxhLsApNuNYCN6VXwFbx67QTiTyagtXAobnQzmcEh3W3jBy8fGpc",
  "key11": "oLmv5J8mgGmKjHjKihBwiw3wDdiMyLx7y4RKgds2Ua9d7w2nFcE3eaSyKYrjXT8PPVtcaYk4tfwLmgjnYmqP59s",
  "key12": "UzNMzVUEzt9tQq65k6gh6n4VyE2YyES36TpaHtGUAT6GHf4tbsEDkCkmFpi6jMwakMVj7fxXwHNZDEE6k17TY8z",
  "key13": "qNg5ht23LTbNsCfo87s5pca8QYpPPqGxZCmLbjo7RSk16pbfrAukCtzjNB3GJsUrYihGJEMauhQEomiePfTjXBd",
  "key14": "5ajvsjEvu5DSkkQQyf7pXU4yZ5SfATkak6FjVno9wuhHnyRC1nqnvqDeLsNv8gdR7ZxukiLBgb2eoopmWuXFLufV",
  "key15": "fB5wHCHenC9Qb6np3fdDnvrJjaD7qRjHGRhjbi3BqCWneYLRVangxAwvdxmpSULcgxhfsGebkbybfzTeMAWVU4Z",
  "key16": "3QKsc1ExgndmvYkCfYUsW2jLwRMwqcWsSimEKCUb1zuwnK8SXWQY5pRdnMJGZXj1Vj8dqZPHSd9LGwgD62Ve1e8F",
  "key17": "55tGNVagr2dLZkq9iqdXF5mNyyE5p714FruyZX4cdxHBqk4y4qT8ify92hGHX4ZCQQQVfvRCcUqXbSjtp2qpyrLf",
  "key18": "x6zje3AXUabL8i2NsiEYu39GaLpUfjnbgxyF32KRZuEJugWb1hHrdiC4VWtq4tK6jUoaiRDhQ9EWbhmkukpDmmy",
  "key19": "DqeFcfeZGcGvKw8F5oVBSxqNfA1dmjTkrvG2tiFBNDyVMo8Pheoi9XDDBFEeQ25vvaVV3HnUZydKprHWRHLEQxh",
  "key20": "3S5xsFDpJQTTU8hCSEGsG18tVCYtTJPdkxNsD22oPgtwJMx9HUnRdHzbfSNyJauY469oao8CDBnE6Td6HA7gvLKU",
  "key21": "DKrMoZoePj23jQGNJna8R4tKTpL7yQ3dJWTnb3eDBth1qyZWvww5HtekkLVjsao3pH9sV9XTrK6vYxznBP4dEwD",
  "key22": "5XC4oBVQqqDSvrKVTX6ts9std6nQUwSR6guWLxookW5hyhmGVfixUg7tsWf6TA3nAPAui6jxDRWvJEHf8Vkq7HVj",
  "key23": "29oRHCUcS1aVg4VNCc811danWBuW1nwTrQKqJJTJy8uFN71Msv2EtRkUjnNF9z17ks7EEhJNkXkfDd3itnRhH9GZ",
  "key24": "389gMRreBZjpbZUxk19ZznyWGdrU6KZQveC4gkJ4BF3dHL7VaNaDzURS9eBB2zEAySRbx43XiURcAj8tq7LJfmfP",
  "key25": "3q1ojrErDnhEJuuvCFUqW1coQF9D5yjqXi4gYBaEXrX7FRxH88Q2HMhjEYu7e7eT6MCp5PDpGu1DbaQ8TbyYrCSN",
  "key26": "48QJFWjhj7mGnnj5SuMJ9avx2HNtJf3tMHsn2urKkiQv36SoMxjefdvpMbRp2U892DFwXbtKh5Nv2HKFWkZoMzVA",
  "key27": "3oadn56p8jkw6uFByYDUDNcXudeNZW5rHuLQHiKkyoQkiGbedUK8FJDknLNJ2UrsRm2hjNbDquTHmh6wYFMSUx1F",
  "key28": "iK3xt8NP1adRkWaySmXeS1Gq5xDKJyJv5GVewA2vX7LjQdbxYPudqXxQepjJegBAWeycdn5yaaoK8pGepxhWAqB",
  "key29": "8B1rmHHSwjwNBPr2b5uBVrUVGvX1G4bzrpYWWBDPAgN9ZAaQhSpxBzKXpJ17tTjjAptSDZ17FSTZynt4B5pTtZm",
  "key30": "3iEz6AujVRCqK6Yi1Xzrsm2nG72c8ajpxSLHDtXP6kEQibEEsKjk2pQJ5qi8vDjQg6gLMeiS2E3U7Fe9difftZFY",
  "key31": "TFboZUNEkHeLoKQWz37Yh3uGMALaGzEcBuTKhiEskMZmAsxretwSoDYuYcbg3V3GrdN2Q9rYfRfxW6x8PtnbtAY",
  "key32": "swsHRRfps5HpsLTBzVVBvtJamiRt3HfZHsQdmJrFFtRZWv3ALd5ySGvsqyPrnqz9mcxv93oDr7Qehf3TqPZ1AZh",
  "key33": "4SuSgBvCxvTw4nmTjt4n2W3Dw7k4CbhxDFskib8fr3Wg9uQ9yEZ4p4vrJAGAiD8EYs1wJwVxMu1pa7EkPvmf9YZb",
  "key34": "3PXd79Mhst3AS9ZuLCvq6xtuuw7D6HZWfbgUrXyiqsmSGtpuv6JqgZui4VbTsejeoKwnfTgqY5TnJg6Lnb8z8Xh7",
  "key35": "3SoT78ha6sztADvFS9u7o2ZoeJi6yRoKgmJ47n6w7W5MCqayceVWkb4EDvWUTchdCbAwGYMjBKEWL1Gi2tkUJzCY",
  "key36": "3tJGPVpz1W9YW5JKBrxNBte5WfTbrqfsAt8XWZn5KFX1sDTnHJTng2VLAWGfdqmg3QoMTSevJSM96WAJtoun3rDL",
  "key37": "hKCye4wQ1sMeQMvStZw2Peo1gecVVBAyEaznp5YbipMXxc2RnK7YRXT4TEFmWRMKR5UUDxaUaK8NXyGyDQYn1bJ",
  "key38": "3xQhodGvRkCGegydpEZC7z3VzCSNkPr5SwdLJ4VoRtCeTWSnWe522zpUnq8WBntNg3imM61A4nFgvw1q32pw2scq"
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
