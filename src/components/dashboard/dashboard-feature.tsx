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
    "59W8BPs7XAAX8PoCfrEjLb6tdrMX9jtmawcm2GJdomqT7M4MCWJgnNiPaqTduQhSPyfaFs3ee1dhF4NRbxak7dQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iUeNzHrayXhgXGFVmKYr7q3A1UGJsqvmxEJTGigwt4aAdBLaHmBXTbciWefMohRVtGmya2p6Fmvgfj7vyD2yEqq",
  "key1": "3eKLS16iJDpDKWG1X7mPsBBhfBEdLVWqKYncb67pmqjsMzsaHAcdd42HuvoB9HHJpM447qwnX1vtFeHz6fPTtWRC",
  "key2": "2EtsAgBzSSbbGR7McNABbP38cTeMcLu1mC3vtBULtMtVmeMRHNrtwrtzYcWppyjqRme9QVzD13w42sTwVgatbkdJ",
  "key3": "3G5YmbCETAS2sDj7P9FBcadJSuEU8WUfLJ3dCxV8CEK7xyGabSkHQWbNDLpLM8mgSgqMGzuuuhAAXsXRJ1NUK6fL",
  "key4": "5iHgyo5B8N1o2d5QDoivFcttgcVspi6GiS8zo5UJVWGcFsX6adJBhH5oMpQgPGZ6FaTyJCS59Vk7tfYbNHfLkUmE",
  "key5": "4nbCa2HQEdBXGDrThi68Y1SzS8CGmpqkh4yD6UTxrhwhe2M6WLPdrcqJxhHx8VWUQXe7g1xwiUmmo54hXPAQcqBt",
  "key6": "43FPRfob8L2vit3krjnKGnKMd8v6c3vzCT2rawvATdAakXpzizT1GTVUBi7FexeBkKL6KsuEJCSwB2Qi3cWdmTGJ",
  "key7": "3yM3NMDqAVuUUerWoMbAgtNgX8CeVJ5XxmjXd16qos4qF4c8qzgMKHGw8fMXZUsh5q9LAtEzeGMJErL97UWfBRsF",
  "key8": "2HpUvgx6pbNcfqctTc6wYHkH91bFCmMU61vn9K1VoHC3GuZUecUAhjTXuatZC7XxqLfXmraonvpUR9m3Bs1tXNJx",
  "key9": "4Ymccut2eLqpzcK3Uc3BoFqLAZW2vbyzzRZAQ6tDZEenERCnRZsofAnN79gADa19m9g3EfRq2u7gNQ4AMBHZ9Mhv",
  "key10": "34LsNwHuFuAmqXZ3X3w8v8KcLQUvb6DhmDWfAGoRSYX53mzxA7Q1kijNR2ydhQ3ovzzFUSiUbP2FdUra8xqxmr8G",
  "key11": "67Hfkq61QTZZyB9BiQMXwoFdQaQjppPUkyjWkZkvuVW65jMfvwo8VVNuHd9Ecq44o9U8VYoy1EJW4iXUuk8o8y5m",
  "key12": "4xatPJwvdG4LCkV5rBFgFcwpEKrkwLTQeKeWqJtq8L5RttpGLAYipaGKzgMxAXfayWZNLUfosZY5vuAtBopRPxSK",
  "key13": "4J9zz5cWb6VYQxfdfpgZN67vvwFyGww5VAZ44pT1jriAytK2G9WNvRKw1FVp8GFh1XRzK3pMgzckU4VD7R9ggGkT",
  "key14": "2srX1HrRSVsRWkPbriM8VBLra85yLXT9LiknB6rhYYdYfyrc6wLmZHxyMqLZfCUFCxT7S8sNjpXMGJXjuydqcFeQ",
  "key15": "3b8zKMJtNMb9e15Teqv8F2uGpU2GVfbvKE2x96bd3eeJ7ZJnXuZE4AnxbbTVyXhhrdsECTKBabKVUmFuXMbbdzUr",
  "key16": "4ZqXxemNCnk679gSvQkDRAW2WW281ZuXixYEMeb9SPNjmjVkw1MwhhbDytbcq4F814TNh76LcrNLmuqbuhewdypM",
  "key17": "2UYSvpJLvQQbQ1tiijHZ3FdU7zYZCknRDhgvo8MdfCdG9tm8DTiBLQnVFyx1PfmL2swg7M53Wv1X6z3sqvCtvpbQ",
  "key18": "3mUjve83CdFH2wyKeAtB2jkbe3aSoEyTxRdexf99onPL8tweTtyyKhKy3ioJFu14dR9xtDzv3rqowJG7ZMxv1w3R",
  "key19": "3XDWH2wF5nB1xxgkvB7kb7Bd3HMehePgFLw843CRZZdz2upcNHn6ui6e2dCw9VeGVZuoqrnjupcTQTAwetivctb1",
  "key20": "269EdEVaXwTYLYnJmZqHpWpusrG6BDDw6GQG6riamzGBYxqHFBx7UCRTJiNHaggVhCFxWJFDDvn7Gj3bzrS4fsxt",
  "key21": "iopc2kqmPjepN5QPNcSUQWyDMW71QRToUt77LxioyLt9xx5kQjrPKnDVUw5SMSYodFoM3Gtcz1ybaDy4eFLiMdH",
  "key22": "4zsizYQ2wMrnFj2tCkRshsz8C4i237iqHiNZNWQvoMT3TEzJkhfau1gkujZA6dKZSBF8akbaRvQQmLC6cLonnhHP",
  "key23": "35fHuCmRZzkcfTpnBHE9ok9ifguHCgST9wDAj5hTmkzy9x9nW3taTtHg7VqbkyFjccBsB7j8pS7GNHcpdVJHa5sv",
  "key24": "4cVseSgx1iSwPh8X4b7NizwF6KAxP8gocV7gKdwHgPy1eP8s3rKWNaSb7vrmCyQRwnkHkW8iJA4sWsS9N7fCj8Dw",
  "key25": "4wreyguKg8H3BHSJ6X1JZSqyaYSQFN7K7w1UFfCc6QgbtTvEfr7U6Mek3FPStpCs8wbfYr16hSD1wuF2yj8eXVxo",
  "key26": "2wu9pecxfccLHycvnSW5dv8aLtikDR2MESVpmvqB51DtKMcSX3NLRrhUiEbHrpFEe5dufq97kneBJ6uUw9WjSiLD",
  "key27": "wUNTQuspc7f7eLfMVwUzDwRpmppokJ8JQD1RqXgN9DZdiW2Fc7mMUdEkVUPY6snWddaVGmxukSxTbsymVqb37c7",
  "key28": "3Sudu1DPnejA5xrBjR897dQ9d3Xaj7zpVnKmAyrJ2BFYwkjSFLYqR3aiyDnYzab4rhVfkgaz3nFdbj4PZg7VvN8t",
  "key29": "2CHqTQTMvrzzHxNNRZ3CyvqeBypBTw1mough9E3P6dJuyaMYVLLsnzPDfNtQ8Rhp2mhdNXx9vo9Bjq8Yv8HNYqnu",
  "key30": "3DvsH9GRd8kdA4aRYbk1KXKJVSDrhz2msoQQj5pJUALSZAhyjiaXFrRHX9QWww6A2kGgqYKDjj7wsm67Ja8sMHzn",
  "key31": "4QmXU3UFaEvP7hm7iPp2YFLBtV7DnPgF8RmsFP2Ruku1Qxny9CXKpnuqgc9xtoYbyePA4QgELDpqWzbcTi1FWuAx",
  "key32": "3xwtTnxM7Ckcx29VSPRwsVSXM9kgiBoFwAymMY8TcsbXiAvUSqhZM3AhjwBn2kDrowQJ1WrE2UBYDHYkc6pKqgQR",
  "key33": "2C7qHrr2ZJvaLb7CntJ2G2w7YfSHk33QTMSrNdpQxg5ExqX4wHgxN7KE9TJQ4dn79oQ32K4A2P3kLtmw7o7TjM3i",
  "key34": "5f54Ncs5MwLNmbso2HStMw78nYZfHU57QKZuYjWzpUpJozZi3s43rHG4uyN9drfVMLzc1Fa2W2W8ZgDrd8o7Bydm",
  "key35": "zsdy2ZeNtaJ3oXTgDoG6vV4JxqbGwtSkjHzAA6kZVC6BaV2GyB3A7L9uVv2SiEYmWPAPRo3yup6fEg36aFTg9zX",
  "key36": "5tTenoNpMzrHdqpjyZjocsop6TmvBVmZDm7mxXjhEyDqB2G6CKbZPB9xeeBfwRS2Q2eEtHMTEasTstb7WLhNmdNv",
  "key37": "3MrASvPPE5jTgTwdprVjjHc3tgHeEfmxxzxmKE6CvL3ZCV1iEr1nf3VC6r8RnkAH6LGEHP7WvSceeNRnx82ADXuT",
  "key38": "4CdCjWticzdyxP1PV9NDN1bZiquZHCtEuc3HS5XHgRm9Yz8nmghyUeqGD88fa8znMMkGicx7Hj4vGtoK39CV9qLu",
  "key39": "3F78ipWsUfKS6LU5jzEsbQvriDgSi6C8CzDXqUZPirdeFCXAb1cDYshnKfq2Q5mzR3PyAqZTt2XJV1rPC6poR3HQ",
  "key40": "4KKZ1NmtQBWgfcoNGxhXVXFfiYgQYSmnRB2XP8kvBwNGXkSJuXaoQuLFjyT127Dy8R8AZqiqNN1cniHJdcm59KND",
  "key41": "54KjYRj5UqSWR86ssanpj2TMys2B9FdjcM59NkgjahVSaXZU89n4hCQB5YSTXpDNxGm6jsYFUAMtUpi4Z15NQGk9",
  "key42": "h2yXrbKmFU3HMVtghwURjQFU6NynmcP1cc3dDT2qR3JbiDG9FPwus8EUdNf1PjYopcUtZ13CbS3VkWCkoN2VS3K"
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
