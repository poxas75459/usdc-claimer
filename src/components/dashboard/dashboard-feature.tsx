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
    "3zMpHeb7TmxQ3t7mRkoZeJK1AqGSsrVBzwyvxNWrwdfFPLUUCLWwzPkffnWoh89WFyrWEkWSe3Xz1JE3DRV9iqK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSkF4bhJxQa7RQnigMFtLwhBkKABubVx6MdqFUAWCxVaaiCAqjpXAvk4DB3aJBdgkob5Zt8x2U8YMeH1oH2dYwY",
  "key1": "54SsQDvTv1VqoP4nZ1GLvFJJk6NCjNjL3VuHn22d3oVxhpswvvzDkytG4wh4YnmnDdrTi5fBzaYqRhZ2BTrjJ4Rn",
  "key2": "s3y1uszNJUMTgLHdbAFBGUZEN4MwcnZLbNJYzL4uRDbpQ3rNC5ytFQvWTd2Nym7SyYwgLqSVdxSdcCn82rUnxfq",
  "key3": "a5ivQkXs4oEeZ1Si9t9poex8fScLfDEBzEeEcy2J4wxXuHFnKhXzkC6qMExeBiTA26B6hXsqiBnnXiMM9EvPctr",
  "key4": "4fVUjB6LZNXR72cKwuNm5pQY2g6ETeEhzQJTeDsKALLDfYU5tQJGPLckwXovjn4XPECYLVpBLEZCbSTX6bjpv5Vr",
  "key5": "3sp5h3VvZ21hRMAJqPT7rBkWzNHaESzK9HggCgLkfEV9RXny4wfMggteSVucUJ4pUF3aXGMRPasEPpmD45993khs",
  "key6": "2ybm9s7Y7Za9BKDL6gQMV2Wm6utZnVpkq2LTfz12SFtL4eciJg5W26gQebRpbxNcYfJZQjonRtuxB459xZZQ1DBt",
  "key7": "51kqsy8Ls3k8fJTxfG3Zopp7a78LgibdP8jr7YMQyXTr1RHf28oBfBuvjHhU2vxb4BGepTzxVemAfps8ptF7fM4V",
  "key8": "3SF9kVDSrxnZJD84Cpsq27d5563XBmC2HkGWq2oZMSSyXgt426nw6mX2FV61NyouH6FFt71CV3rzmQz3eD1x5Sxd",
  "key9": "34e5SkQfMTLc9duGy2RKBZq7qxdTYWFzU8rjoxVsppXnQ5U7YxDws2pWLY78q8JvSTAsFKVWuvpphdChSACofAma",
  "key10": "5TH6bw5QeP6iAgWTTwb7836hWVPy3nEJRp6KuXQ1XDGnKmqF9ruGuSLtQHsVhmWkdoNLxPxchHRbQqV7XdtGG8Jk",
  "key11": "vrT6wEiM7KPRZGwCW21JhEVJRj9j8tCfA5NV89HHXQESSyxjahAchCLrjsonAoUVbCeSPvk8DeGMSpcqJnSTMHU",
  "key12": "5DUpmqW6791FiZC1eCeWM8n9MpYAaUczmJG6b35kjJnJrMqYgr3v727hk7CUsYCr4e16wniPr8GR2UajhMgjaboK",
  "key13": "2xEJGkZLzdB5B6wzoi5MeKbk76r9dcSpBMEENwtVMk1SSBMT7JRvTbmT5NMx5cCNrZR6GbaMVkZ7srkyD4kb9vo7",
  "key14": "2LNpf3JwVbGQA1QEfCBXTKQ2nytscAcxHppHKxqUAuPcAX38RKJMtiHfqbZikhqumuDNj2NLjCbc41NEPme4pHDF",
  "key15": "5hTGWigdhNVLL75nsey2gteXWTvLQe3TCvDriVzVvJgNz6yTkfCf4CdbFrsBe2eus1aTPjexiRVKRf1wkdsNAnAw",
  "key16": "3ujrSHu8ugQidW3LiZZG291Gck8eZENZ3GKiCiBwRG88gXfPjWnYnU5L9RbHBYSimf24Dy8VVzZJmpcGZRGU54vn",
  "key17": "3hivAdxQjiF1U7ZpTS6b3J7WkUHiCuR4ZbCM7u1PDRktwt6wAJ8rg5U9UMXdpQhDSbsvQcGbhwzmnzUFRadeUcAs",
  "key18": "2BUGSjmx99VHH8GseQBmbdHUj9tFDFkmY6Hg6bvRzCGHoF8KCKMvJ9eA1SyXyFWWRHefYEnBfoFwAdMZAV4Vj6g5",
  "key19": "f9MHvQAT5vAxivPaqpybCZzqzihszx7LysZzbMp8B2tH8UtR19tEDm1UD5YmCpq8k2imLPnjoQcpaQ4wowaRV9p",
  "key20": "358vTwDr81GFXHqgHKhx12zaKbaeeYPrxyTdAiTFRoK9Npr7ZRtCBsR7frCuG6ugkUi3YY8aCRS4JEM3P9KBnHwM",
  "key21": "5QdZYh9eWs5m4qwYxiay6kCU8VNyarQq3kmiUcBRSUcgjpRXRNAhZ4QUrXVU6SyqFXVHST46JGNnpQ5DsJkjmrai",
  "key22": "2hfJfjnwxTkugmKBtuKKZt8DsA6r89vNYpKBpAx6SAsAzaSYM8iNs9cQU5MVDvBmUHRVZ9cnXmjKb4hEu2WS3ryG",
  "key23": "3JKGtnRAU9nwjBhREeYfGNsg2whb3cvawCpN1pDFguksxVMZSphLMcvadaz8zyo1LNeAcGpK9rQxyFwHeAbnEAGo",
  "key24": "vyt2ysunAKKuMj1QRYzCDZ3iKppZzWRZrU5zZZ2vSucrVqVm1sqe1FK9W42m3cGS9UUN9hTrSr7MDU8mEwBaGro",
  "key25": "3KTFXSKs3BXtGoC57952h9L2moGH1H7yjGixaoeus4M7nZ5DfbubHSxU9cBtS79cALuF8Nr97htTCsADtyxnDAa4",
  "key26": "4MYoNoBahfCkPnKJ9fbycLs68YSRyGfE98TJP9cL4T6g4ikJ6Y6afLnREK4zAadGUiRbzK5QBmpwBwChUyza1JNX",
  "key27": "2Cra31nAhVB3fZmKCUmyT8rjLa1xpHRPogjx4bGsZTXyYyyzbQP9i6rfu5UU5dufSox1yTnVT6EW5Rv8xYgduzz2",
  "key28": "5mNf4NK83TjoKqKj5Rt4g4BxoUsf7kfJkNgFt4cztgRMbF9s97HXpvvjERHm1uJxgV6RJbob2qczPgNyyDzoN1ir",
  "key29": "4qoqtCEr5MTFnsnbMErNjh5qgRrFD2cbiyAqmeLLzPw2ZtQMKUxa86XodQ7RZ2L4c34PnKcs4JBHdXw6WSZQthJA",
  "key30": "2d2PPRUe2oYC16D2x2da6EPpZw15CzkyEM7eC4yFJGKxMtBZK2HfKum4msvTk2GLKuLpbDr9Mpn4bFuryiW3JiJS"
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
