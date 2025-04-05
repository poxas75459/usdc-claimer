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
    "3oFQSSGn34rk1i5sbT9acZ6QguvszRTq1vefht7DgvQpDdhvqvGesCEh66Y6rWPLuveSwEa4Pqvno4BNnHSSZaTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w9xdQgn2ePredAxyQTjuLRSdqJGRqCefsuEaDXCbF7FM9r3E7EXpF5mXGnjw6FEgnCbBEdseQcGYmNaVipAs9Nc",
  "key1": "5fmbnRLgycyu4SnyC81PdTEtknPRb6xtQVaBi8vKRQJYvDmqutAotwXkbQ7w1pXm2SzTnY4PADRGziGDyVWkVPbK",
  "key2": "4DbeEG6YqZyxu6gP3yw69ki3FMqDPHeJz2dDcP5cth86Q35UYw5mbifz2y6FyuhuV4g7Updsfkon9wfxPvtSjxUM",
  "key3": "2XCKw3M6GS3tF7H56sdLRFEMJGFbqaEXDViwEdJnjmtqStTRnv3XXijeDfeDUHdvNB5N7KGkSLf3a4ZKghwrVj3o",
  "key4": "2HTYep9esFvmVatHWAuQ9ZVmP87PTfnYcNGu6JNanLMJLHQSvZfrJALvg4GpyaxoGHw7VC7SZ5Y4jjnmdBMKZMLm",
  "key5": "65YHNDQA4pEa9YKuMmdeMGhWFRxLT95ca7UYJ3bS2KmqYevzUYA25hekEsYtbMS2b5FomRoAYCd8AdDkcQPYkYiB",
  "key6": "2DsWGha2MYqizg7mFYphdHBPi7mJDXjUZfFoFkFntJQax7wMMNEb3JCytYiBKo4aFpUa4S2NMW3eCy28ig69Pz12",
  "key7": "3Yt6f7kYaL5kwsGtN6SPiTDpGBxa6MvRep7GFXf5nR4LDTHpMAi2mYLg1An44ukDYUGJVATzj3tBKEU9XCve7qsK",
  "key8": "5uu4b8TzD4Sd7pFwNNu8nCTLmp7j3QqPy7wv48VB6TR5fqdPHqDoMQSe6QLQEyiyVq6SSB3qF7MHHtBi4WZHkvFU",
  "key9": "2bEm6iAjqeVH2AM4xWEJg6YyXZ6itCnSfxgqZ71ZTWFep3122nCnGsyq32SCX27MjhDHKSHGovSGC1G7b8iUHYVB",
  "key10": "W9fiHEZCYop7gD18xyEeEozhtGp7KvMwWjBqtwL96JBK8KuPLc5GcLgzBjkea1GCLmZeobbAwnDzG5oaaPnUbf1",
  "key11": "2ZLQ4UzGNiqG9MxhRTJSTArborwEFrrhogZ9wfVKZqXroYPK5qfAKU9j5KHXgWXb7nuwpgEjhC5572Rc7KXwpKMu",
  "key12": "3qspE2CvfXktZmUGdnBSi8hWPEktcG5VieS8raZxvw8nQzk3KcSTAZkNVHATPLnQsaLRX7owbj4yduDPgS9VmtQS",
  "key13": "4gkV4QJNDS9XU9ogw8EXsenotz5yuyuYhUBodts8sbDZQis7L2r8wtFXdCogsP7qyKj4CpgLw26hiopFJxwEWoZm",
  "key14": "4UvFqXJSSfWap3tB856tWkNjaTdANXgNGeJgzqHJfans6LRsCQ8pU3kKddtGQn6rMp1f8LmBpY7jysK2QjaQvVNR",
  "key15": "32ixvY2RuwkCkokGBGBmdCfx9K1zMkntkff6EYMF2rMja5sWuufcGs4ZMhN98XXm5f2fU82VfAisDMpJh2zYGd9u",
  "key16": "45VsYyhtGNWKtaAVovZzUgwf9XdT59aC3zvCk2XZqZw3e1Rg6eQFFmYuKDhaEyPS3BaEFh1DvQ88JM49EJrwrd9g",
  "key17": "3LMh6o8qQVFtqf6t2pYheqYvWpArTqcskfpwL6nQpp58zgpbmXHci8SsRsPBx6VPsxptJJ2fpS5MrTpFp7ksDcCN",
  "key18": "E8vMmpcti5L1ZK38GXSnBCu9nTHDyPEYL59zPZHmmQzBhNK7YfEzPWs87tmjfFSYEBgnpqSWSMjEDkfPzsQmNQu",
  "key19": "4yYMQiHptU8M4Hnmd88snN3WA1UroE7o4BJF9RZ2ZRBfy4mNGAQQd5XwZdkgEzKDvVVtHTPdwyS3hMyM3Brz9y9C",
  "key20": "5EwpSidBxscjMYbCLAtk9GPRBbeyXmvHyebBZJsMNMbuBFSf2D5rxvAAxLcpEwH6euyQmqh9cRSgmumdPSBpmYcC",
  "key21": "3ecsziYgKZsZQPaYEySsBaraS7aKjvLoJSqVkYwWJeGwyJ8bgAXWztJVx8xXSb66mBJFc9v5zkPJXUqvtigJWvG4",
  "key22": "2Y2c5KXAWANsik5uDt3SGbJ4JfLUbhnezyScKBpYaCTSu4KndK2qPUMRjKhpBHnXd9FsqWgqUnbxKKSvgd7jKw3A",
  "key23": "WpoYSUFXvxjgj3fedyU9EsNwkt5XU7HCX27oWQmTipeffcDrsSGR7oCyHPzogXL1D4xCcuwcPBkEKqUTnKZE6cA",
  "key24": "JSmkxuPHJwxwEDTZwJvU1yaML1UwRkfw1LLHVxu9bxWpGLfgcumh64qQrd3SQ4xyyBeAyXtpusCA95eG4iLUihn",
  "key25": "2HRXsaVbaWGgoTrFBX5XbE5iCUJdVRkKATnYtrFt51YVjM5DnGQtP4f5GRqppnuEJiXTkDSjNw3kLkJLV8aGwLRS",
  "key26": "2BbVfaaLRrfR5952D2Ltf44UNSeM6aWYbvDRXvsTVA9ZT5qNSxyCC851bU4TooN2nNy9FvLRBKsVsVQmhQJy6tGP",
  "key27": "5q41mN8n6o7nTRQR4nkXm8RgFY6JvoK4L97e9e3sfogAnG8J8B623GGmoFkDPvXoAoT8VFwFDFzEwrjMjJk2yg3W",
  "key28": "vp4Vnu9W8WRWkLM5Z3g3b3bbaq9L7gn3JeVQMT6xnC6p4Tgd8uf5smXje8WXA2J6yE8b1Lhr5yhoc9z2CSMZ34R",
  "key29": "3BTRmEPNRdrHzq3iCJqALkFkCpxfP8gEytbWxfNBB47mU4k8UFzvnuM2Sz6SegMio5bTaYNukbwCkeutSdfxSFVC",
  "key30": "513Chc16DeRYkfstveQcbXDvcZieEDWRTo275ahMWnZdp4ipD4ZS9yCudCrV9UzHm35H33TMDu9U4dyBZgpXejGR",
  "key31": "2tF2F2W5ydtzBu8xu9adDAjiWZB3bsoBwhqNsy6ncrCAuSSkHySUeKqL7BE7A5VLU2f5i4qRs7bSbGTx9bkmcFxL",
  "key32": "2ZXFFMrZkSdjQuWqiQq2rNm4ZDAfKuB4NmEHyZezKPfBFhujNxeduQHCVat6ecuDNTNtgKufsg2cTHgn11s6nxa6",
  "key33": "5brfwegV72Kz6ez2omXjkkKrU8tA4WApx42WyBzCtbcMuFKdWv6Mwwh9KEpnVZn1u9HSTT621NGLZ7N7s5a4KdoN",
  "key34": "3v9tX1ezm68DUbaaVVjXXDmWeizEzAm3c5BygV61otHXW2kkHAYscwYEj3g2ocrGexEVbaRos24pviNr3YRrRUat",
  "key35": "5dazUxWUnzrHFHJ7BcAa3JgoAEjCija4gc7wrXm15fgQxECa3qWzjg9YhG6ipg1tKDhnWaV3pZPUpaFUarKsAsuD",
  "key36": "4qCALPQSDda6sLgScww9dygbJdPShnTvBb1See4g4j6zqEAUWD8HR26AwXta8zTgoUGW5wV8Np4gNBCX4Q5mprMw",
  "key37": "dKZMNghM4Mv7TxEeCw7CaEjHo3H4gtxSjGBzb9x3oyV2xp8YCrpNcioJvtRdX75STqMaxTyoVPg7UifcEYRfNq1",
  "key38": "aHsJVYbC2PsRFc88bM7mqbqvFLDtMrues6UZAMA4EEN6V7CkE9w6zkSRENuhzmnKYbmvNMypU5oxfctoGrVtCZh",
  "key39": "52E2SvYGrUQNvkXMQUnqB7t21jp4NWiG6hBidAVbjs9MeG6Yxa4BVnE5YdsmLAzcB8m7FXhZAiTZ38WWcfQq2QRv",
  "key40": "52qmXbtHREdL1NBYHNZyt9PLuyzir1bMZcBLAxPyhtSMV3nY4CiMqmRfPrCKzM4qEYu3S7UGhRT6fbaJFYUjMiQH",
  "key41": "3FvZjqidPe81g384sVvnTErVuofH4oAhD4QvoiSLaZs5ZGPCLnSw5VqiiM1Suhsjzi3zk9s1A3dcfnscEnY74FyJ",
  "key42": "4mobZBUtfSbGPM2Q6qK8vyhdRe9W4mH2iWt7dLjVxCeGjc2f9R9MfZwhZu1Njr9XquCNMMJZ6P8H1g9DSZ2Nj1jQ",
  "key43": "615xKLwRhigkrTaarX5igV9wBk36MGV7ordaobsFmKJfbLjDip4mL2QARh4tp19eXWgeNM1YYNS8Y5vcZwykh9UA",
  "key44": "5Knh7kcTvyad2ta9rdcengULcytVhYXi9AbZ1m51izznzXURbekmjPmApaV5CSZYqoQaZBKFMF33sq4KfzNyPwaZ",
  "key45": "3k9mGW92kwN7VjuiUa1hF5h4uZT4m1gRPRD4dL4wPzDYKbZ91JSTWHYoL6FQCsD3SHn5PS5ZeSLDEHEc1tWhqHXr",
  "key46": "xLgXWaYkaFXqJR91SwpGBBSz8TrQAwh6xgvFB1mWgozejUXHeGj3sYdiprUuit5RyUy384Cma1CbFZ6Xad2gpkz",
  "key47": "NyUWuAD1vzc26rCPZs4jSNSPy3vPeJH5b5FBHZsfrd1rWqJaTbkSovtySFApxMtQRSQuN91gCf9AVjhZgBPVg8D",
  "key48": "2REkWCNxgFpbfwqbUnLfGqbXt3ksQoVC6qcZBhfFfJmT6iwzYKCmr75G7eHiN6DHjrH6kC2xFZEegK3RTJMW1g9M",
  "key49": "5gG8MGVN5pTjCMMNt7u4iCLrLZfyvcC8pTzCGBPnQFXoQruoT6DT6ESDe4aMMUZoq9T6g14YceFKfc9JQE4przK3"
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
