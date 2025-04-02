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
    "5QDgWGpR2MUNVk6AabCPB5bGzfzzBzfiWo6noxnrvHdYwYFAkUV4JXtGsvrjQfE22ywCzgjYYMgPp2m4sKW1Xn59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64qAS7dAD8xXw3YHgiumFEXq2LyVpvEaQt4iyU2XUakCrneVmHipsZ2xrk7KGiTfVeN8hATxhefN2EobEKVkDT8G",
  "key1": "4cxsj8rKrCsWd2uvVSPm9XP513Hvbo1HrdMXGHQfCiBAEHZ11UE4h43oAiPRpEdfc4TLYpYGpaFj75n668qEcmCk",
  "key2": "EnJC2hfB5vMPkuXKiRJfEBPyJfLYpzF8zMrVomojM7896uTHAsVEr827xvNYD43hY9bQHq1HcwXdemWdHiW4Wzk",
  "key3": "66aYdUdjnEgNk7kvYXvHCrzZPL31A8d4v2G5DZGUN1ErYhxcVWizSuzgAhZSbPYa6joi34378ms6kzo9kQMRbVJw",
  "key4": "3NbAfndxjKN2dye8K95P9K1buTHD21kuKCDvHgzZ8cvYmeYdzak9MQqriwTjmSXwk37rPUYRAJztWS2EmE7CsfPX",
  "key5": "3Fhyp63cbxk7EsGsJ7YdU68zXoiRBJBTbaP6NZdYmyECGFg1QpL5eLqNu5VeJo2KCPvkFkjFKQVPQtFeHqjEznQD",
  "key6": "3i5N177WbD3QABu8jYyo4C92BVgWdS5iRZUtg8fQkbgXQZCfWjzPbyoYWnNaz9sfCNwuRmjM5cnh1NKNgfFKAfNx",
  "key7": "3f1wnyF4V79CqrH4nNLenpXBK6SXjg3GVbhYFZVCNUDF3eFmGdg5ymcz3Jecqz2i8RsVhUMEgDWwj3kdVvgmXXHS",
  "key8": "jJjJHaSa771fmx7noLQQMb7ihtqqEBrWG78JzvXPcpxVnDLTKhNzGR9jdhPFAMXmexCvPRagsuNeeKi1deMJ34p",
  "key9": "bhuHpfjK6QirnMpazRtWmKW16c8uP6BA58wVzGFbgs5eudmEAwXG5HEE3W6HmeNkUCi1w3A6FhcKBfusi15ZkLN",
  "key10": "2wFyMCR7FGBz7nYB4pdzvgHKBJJGv17Ggv79PkfvfkeHBsSr3c7QpKEQHEG65X5R3Yt9LBcGy39NyCMDT1oZDH6d",
  "key11": "rZ5guvzp81MP8XD24zV8GoNAAJDL1ffyMxQfbKRbQfL1cbpt3qDomgig2oJ9zYbAhGJxvLejhzvvC5VA5C63r4z",
  "key12": "2ijGUa6HqDfAQprqoBhK9eYN2BKdKMZK8AJDTbBrYRUY1QhbUxyzDvq5MRZcLTSkE51zdjwSbu9haA9EVzkPf2bR",
  "key13": "43SHo7pL8ejzAAypzHNm66UgPrUivZ9CKbLGtt6tPpTa31KGJS72iqH8Eo7YQb1vzNcSp4scjtfh1V8jcbBV1p8H",
  "key14": "4v9UZZ5NPCoLcrRAGmt5pXkMAnJbhNFnFpmU8dXNaaSubCZGh7gaJDofug1LP621FZ7TgWqyTNnGWQB4aX5p7AyH",
  "key15": "5VW44ypbi8M7zjAqoXR6VE9ar6DUJZ4AAYVZYDTei5pNAuU9m4bZedVPP6mFUfjtVaP9pMLwYWbvR8RJjByq4xY",
  "key16": "3cCQ46MRismpNtbWkiKBAXgAnWJTqjQTcKH9YRbfzYiEAeFDEtajiLPEvr6n6qNqSAdrvKp5wc5JDKcydSVEmxDJ",
  "key17": "49WNH3xmUitwmM6EtAwVXQbhyUrSFSm8LVv5MWSxsDcFdapKkfvzUr4wrMui4nUbiiFi56kZLN5DJKtynLmHYXH1",
  "key18": "4XNx8DHNeqEJpLWWj9fmXjkQMi5WEMzCRMcsDc4ZUQrzizkfmTzteXG1zSjxLLbKFzEBcw9mXsqAxf9km28HfJu6",
  "key19": "5MFrSjmr1axXLbgbApBVMxncJrWx44aV52sovyr2gLdzUCN4xxMyCK9Hn3CyXtK4yKGHhcmGe4D9tBX9n9qK7TkR",
  "key20": "2ivbdw9JrSewnw746BXivBLwJUAoBtZkw8uwmfd3DtNyNHT264SRnxAGk9P1XuZTCWTFTVTASgTAdZAu9cyQvBpr",
  "key21": "27vuJEk47BqMkzNLkxVivRxcj2PB1HfUy3hpYriL8ByWg7ncyLZGANmJGbKj8YzfqTEdvN6a8bYaGgDGwxtuuLpJ",
  "key22": "2DdCWz7p3ijBCQPnnRSUiuZzofx4RPLDgqeGxDtDoNB4DYQqP8oGNtjX1qN5Wa9sEJqkd4FagfNovBFxUMeWUW9X",
  "key23": "3yq5ygWYrFbA7k8yBebW79EDyiTrYd9xxsQYvZWwib8hmU1x4zU9zSXjCYnaaHhi8ERpbtc2XkmANtEfhVW453NG",
  "key24": "7paefWWzHmCXfcwJhZw4AFmDvVYEjmuf9bamvU9kGVjsankm82ouwJtustTXLq9Zd7ww4ZVuZeAtecs8XMLH4dK",
  "key25": "3iFejcxVeN2tbd6vgMchMYa2XnLDHRK5GqCjYenXDQPFh96dtc7eW4eoKk1MdAsMr2Ymnt9bLAtu4jH3S4FsJ5ik",
  "key26": "2ZNEH3ksD7zknegxUCnsSciGX4GHzSz9wY5KG3effoLJPx4v4fT9poLGDgpBtdAcbDodpirRUzRQETGRGdQ7RAUy",
  "key27": "3mmK9LF5JEFo5st2rgEsqSmeawuokrH8yWyxWAVHTAgsY95x6cwhdKtQgwFrR34yAuW7HSDo2hbybChxTcy6Ja2z",
  "key28": "bCzE5btyVU2iJrkQRggwuUd814Nwojt3HBxgcvSum1tgkKq65CnTW7c2uutr3ZaX1ZydvPiyjxenPGxQdkhJXDV",
  "key29": "2He71Rt5DQ1BKESFwrBnxadNe7audpp4F9nGyxQ6UY9Z9t9g5Q8S6NACiobxLQmzSbTMQsTC27ipziFAeMNRXoxN",
  "key30": "ttBUv8GbFxemh2sPKvcshrqYxZQtdeU2EApu5FuQErk8YTvYDjy7kKHapF5HQKGqJ2kSUCgDQv9jSBr25m2tgBY",
  "key31": "PSeEHzkakp6xjR7s4ZpuEGHMP5UPyFXEob4Kq8soBhDZCaYmnoG7yBwY4FcUV5iPCq8kreb1a3kJwA96sqvkwcJ"
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
