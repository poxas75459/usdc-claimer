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
    "5H2FTmN2oBLB7982Eh7aSfgVRBhpBHZPtyv1DjPYHs9nzGv7tY7UQo1iDZouzYVyRtK4bF6S19431NEtfQs1DYff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YUvPVN9ATT5aXxbZpx1DAJRcWaqJ49jBvLY4NHBGARhE2HDrVFfvW8wr7HkFGnQTncXkG3hgsPhCgQuA3jJFbE7",
  "key1": "5nAQ6Y9pMUmvEXUEahM1TxrubcuEdBG9wMECJT1ZUqcxfvjtcqGgYVx4hhVucrCQFEXFEwNyL4JL9wFJty47KYHi",
  "key2": "5oD89wNFMaye8TAA5WKkYkQVoPzNRZyACLhrr2cFDdRkRsvsiEbmwE2DfjDvEtE7aGfSdY812so9YrkKfmBrscjA",
  "key3": "xpmd8v7BTCKbut2QhZrSHe28d5DWrEaFNptXpA8i8h4135k2r9hk1NPXoy5A4cppfp7Ytqg7XFQa2fKEg8NmSx2",
  "key4": "2n5CQp1kgQFyyDsmaDDwT3dYW7j42h1QLLf9g3rmtEzogiQUMUFcJjDL9khXieJDw6yfHDvzfsMiU4EwKygitKgv",
  "key5": "4VNtYQ1f8qd6GEE1GwSWr4LUumzJXFzQ2EU6DLRA8SrSPew2aaiJbu9eUpxbMFKkpvF12LzNH7mXupB1DQduLPNe",
  "key6": "2PH1KYw4Na6jX8bVVELj6qpkUEsDhfBwAGH2usAysK38L5FTEM9ra37kaG3es1Zyjug1pm1YwY2SyDW8Mtdcot9j",
  "key7": "5s6xLWX1BDVsKdjsiSR59wdfMx45KPZYWS56PXBSbNATATYaoxNTonLnDEv5oqEGgE9Zc8EGNEiJdqV73qHtqgac",
  "key8": "4QU4sWzVkQtvdVQZtLBuAzdKdDAYrirHq73TRsE5dYGHCvbsTg6689NFtXY7PxCHnc7LsQucXufZES9ngnDg9rNV",
  "key9": "hvx2JZact9HzZtXfFv7SC78uBpJvy1R3zHdodMfWdtJjEKBg9u3H4KWsXCGFv4wJAUaosFqKJ87cDo82iA65G8e",
  "key10": "gUY8nrcJtEeyRnvv2DTNUsHnN8rk9gqdv1eBwRzpRF2tVCfdLdwidDYwEd7mJcLzqTJAwetrzjHUws9T3MQhs1H",
  "key11": "5P4baG8KeYq7gZFGdJbTxav6QfE5AiGspzgW869nbvdwJJ4SyhZSXbrHBPoLwipPo3EaBwzdeJMkRspKnKhWAxK1",
  "key12": "5GmLr1JLk19k6wtBSBV4YLAiNcAhsqzMKJdr7YsKdaBG7vbdupoDTj8eVTEQqdrkyopFJchm2Bj6rAFDWwXKvMpU",
  "key13": "3bmgL75i3NoG5gkZBqnWkkuyzcRTYqE4UXLcgSnS7uPRULVqXmseXTH64rqwCGqAxRaeGNGGtRevTrLmdqntvoRJ",
  "key14": "5HzDuReWeEb8oRquEuwdnPWwKbmq8BDD7gm8FTYdxc1cUyAVKKyvKKNPCsw7SEMXxRFTKmiwTr5Ugq1gZ1r1VCTM",
  "key15": "44CVDUkUYNNqnxu3YcscQ8bc4V75ug6C9xZ9e2Yt3itUvdCzMvCoffNUZ1rYnb7zJNozZg2UyvtUTPjfh6DJwNmm",
  "key16": "2rNE4WSVG4M2kLEQrWme1UGVqGop48ivvGmjQwvuejELWyafet6rwKugGiHpPoqxUr475cSS5PqC2LbB7B1ajV8R",
  "key17": "2xA4K4t3ZSqAApGoAg2Jdc6RUyDN7WbjwuUp8ZgJfiW2yKbvziC8ZhcZr7w3rjrhk1XaS8rjvRuGy41PYUYUGGWZ",
  "key18": "4HeMzgxjNzuNEuhvSyeqehTmCVThTCe2mR9gJBzkJ2koNSNtcgdPvNJsuQyBvZhAHsRAktZFDCme7mb79AUoj51K",
  "key19": "3LQVgXyciK8Rww7qUhY1x6V5pBqwX1oewzpantUKstRDsAgLAL8tg2sFmd2hbHtDaiNDKeGBoZnZa6b3AttEdMr2",
  "key20": "5X5Zc4w3UCR8HpMjFE1RKxxw8to1h8rS3LpBjkMJ4c5ZYj6n2QsUeBfWBp3Bmg5aWJAMdZ8QSgTbeHCbVqqHRvxq",
  "key21": "3nxHVJMbxE7XXVU5fD226QgBtaqEoHpGVDBCjxAtcxbJ3WYhP6cZPSZUo8Bbo7oSU6b5nqudDU497j4G17Kgmct1",
  "key22": "2RKC79ivFqeRiSu45ANw3nZgzyhaDku1aAtAh6MvzrdTFu8G14bqETgbBaZHozJWDWHipaxkVcnmbZyomFL3MbvC",
  "key23": "3dgEGCq1YGTu2RkAgywSNL1DkwhHvEXTokR6AGsdyjefeXXX5goaw6NiMybTY7uQagbLMTaVVaAZtL73H6xkJJnA",
  "key24": "56q9io4LV5JARPgZDL8htFutnDSaUsTKjTuU8hXsY8vZfhp693RT57zcgB7HFRG1169fwxPdMCXRyqJpD6eDs2TM",
  "key25": "N2BmU2PeMmxcBPATdaDLLiHknQU3eb43LtebDQ6gh5HW2Uv5gSkPNDWtyrCxWdYNc8ynHVw7sYxzjg56pZ5iJRp",
  "key26": "MED55D8DKAmnDaCACPaNYTtNZZ5rf43R5KwveKE5zTCSZGaXWiBNnX7w8drfZv3V8YdPkSFWH95pWDr5DtuGrBp",
  "key27": "4yLLfZr9cbRAFagetExYDgBjLaGQYSoDBKn2dLj2PdAGu83mfoiLZt5h74Ezm4uXEjDbCt2GWZCb6UgKfYzxZUFt",
  "key28": "wyvxhFjDFWfHBAZMRE2vwVbq1LK1CocwAuCAFricPbvYcjwjGrDQ6tLZdQpgh9dR5hBVoicf1BqhjnKtzjDckdu",
  "key29": "64FcUVWDvFyW5Va8F5GrEEFgnxUFnZt7UCDzc9F7hJMV8Jrb69m83MDTFMA87RJtDFBSUPGSrXwhNrzF2JDDEK67",
  "key30": "4jvDPyxG7V9AJZREkyGfBUABUvM4ejXsJkVSCkKkimEfSFzcsWZYw1dWi4fFdRAwu6AMC2Pq43CCmggaCxwnKHXa",
  "key31": "2P3xgqb1QhFMHpY8CkG7yKyJpp8KhwEFe1VV9CbN51CMJruexfLctoJST4rW5uXQXh7habqWFa1dYjDDkssMyHa5",
  "key32": "2tXRSfaFdcRBxk7TNnchn649dS6ZGq1Bk2r8jCSTojsB73UXzF9s7uDR3rg7sExojTfFa6EgKTSY9takCqrMRikh",
  "key33": "3ByBF2YwYduCaxhAat1SfNShGAYYvLPj8CEVMRJd1m4eMXYF5QzjAbaWjcxLs5X8frcNDGt3j9p1KqtwGVFZybTi",
  "key34": "xME8M3WidT6DYNieuxBTSPuBBq6CH1dK6G8bdQtPJczoPd95YupXcSUWYURkb5t2Ye3gLDVj8CncxbCygVbnwJR"
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
