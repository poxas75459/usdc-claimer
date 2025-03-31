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
    "38L41RqS3fNAHSRWvBGigsoaET7Z241aNKhjtiLt7NMPkh3iQqY1oAGsSiJF6ZV3iLNbttLe7pbjc1yQWKPEvaqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkMVvzQUgyAVeNqH3JBajwLtm1Y83F6gSgNPc2DgZx2CCxZGhexxL1ecxqKLLJ1XNpirMjZhrtayRebu6PAtMWp",
  "key1": "mz9Hj4vHtmN7H4hm1voj1q5BHjxqq1AHHZQGgCMYaEUfh2hbnQiLameUnopGT1TNKDRysd7wv5ZFaHFXnA2MQ5g",
  "key2": "4xBFvQJ1dUKpYJAus9XqwhpQjtdEheRo1C49p316EyfSCesNqNgnC369aJh5qRBEahP4K3esR3NyzkyVy79Ymwc7",
  "key3": "64qCTYWDA4ZBBuruFtsyk3aMZz4V4jixpyhPhuJptFG58qsaj8C2QdKEjJMYW9hcs4oY94J5CSDwU1eotDUs5ETH",
  "key4": "GnCN8P8Y7cLcGXHZ39PiQX5SnmFV1TVaeAjVuvbsxL8sjD7MWqbjsnH6bPpdwkKCG5hAGF2wCW1fXkHPp6Yfs51",
  "key5": "5XreQFzKEefvjUTj3vLbW1kANXCU7diYgmMG75bhJaK4Y7WPWwcALEsHiZmFy3bQp3SqHac682NL3hhS76sQmEm8",
  "key6": "5Dw9ZAntaUDAAtY1NVRZf8va2eD2xiPHBcEC7siNeMt6VzuYdFqic12m4L1haHkkpeb4xEeuYVcZqWpHq7msRoGw",
  "key7": "5u6NsvxBacN82bho2Z1BBBNCotZFAJPLrpnfaViUUwQHyVPtTpzJS1Thu2xgdEcjMu5XMazAC3Ztzy5mvBCtihRn",
  "key8": "TEhuckyZ97fYPHyJbhYqBLi2Js4rpcr1eNRcRtetRQtUNKAuDthNXw5Xi9jfRoqChmMiCBePJyb9TDYZogJcuND",
  "key9": "VKXzU7eMZQME4qtJHBqfSQgLM8NDEmbh5DbCvQymkX9Lw5YpUmnvoAoq4Jp8Tvi4rLkSyXbK5SRpqnj7SpdLxmk",
  "key10": "jVWH2yUYwFnRCGhmZz2hfWPq19yQW5PEbMd2irskqYWPWYjwPN1J5GjVbYq2EBwpHa7hm5SJkXV4YapNdY17aYv",
  "key11": "3w2LA1hG5QmdXbnWnYaG8e6rXZ43Gizfht8VfSKei9h65hwD9UxwAgS5UW9PjSsTTLF9L7hJihmCRFyZZJfeBbvo",
  "key12": "3mYcnjUa61Wtu9xqcngVK6yUeFhrgVs2z29YNDUSmAGsbjf3YfrFwL8ce3P8w9ubFEGB3VzFnDBmBChEZCEjdKoq",
  "key13": "58aifMRHJSCRWeXc4en9M1hq89fVZnzWTFRHQ7zP2kuYyqEoy32eo5jxUz7mTG2XzxyBr6bNHLU8s9H5RtKKLzXC",
  "key14": "58t1kXw7iBkouvzHMpgexfHbM4oF6iD44VKfat1wwg4NEaLxexeueY7BexkQiPNpTRafjbYwKLx8un3tGHGajvjx",
  "key15": "3z854KRqAMUj3wHxi4LmmxwJNcnTc2o2xvZysB1PtCvua27X1rEAi1FgvkkJm7DeAe78oiru1tXPqJQ7D8b86MFx",
  "key16": "4VeuWeTaAp4ptwJyzh3yX5V4GJ1sjySEve6fQWabnv93fXjy7g9mb1cWYagmND3yXRfhHYLjD4L15k5k2caHWiA7",
  "key17": "3CnFjJyZFxBgSuW6X5avbaVMsoTjyG4hgCHjbnxiH2AHWRe8LsVfX3JCfBsu7eCCrfbqbHgLZnTVTNudQiQ4nZPX",
  "key18": "LH4QohTSzySWWFqgm9vGJihDFYFgSi56766eQrevdrAn884EsJvPMco3vjzVQzGN1GBNG1pRfR7sBpKyANXysYD",
  "key19": "3ihzCqEfSa1zek5Lo4679TBuTztQg3tsyApU7cg63H88n66WxzUZgurZLyFXhxTXVUeYTEQUGKykNT49v4nBZTk8",
  "key20": "Z9udZCrzmXZQdaenbqxJ5sFUwBW1BkwBoJSU91rXQJFzwagwW4yyLMsFGFFzNTHKnkNXh7ByraekwtFpqUQb1Rj",
  "key21": "HCwcV4ZADzF5TPesjfwqXdepSU7MUsem97Yd7tmNSrCSkguJ8R5jRZhsgQDcfvK9EoxVvNEQLzpX6iSa6ykudam",
  "key22": "2K3gQoPbZ213NZwCjzmTVQ15EV6eaA5bbsWTcw73BbRAfC8HSVPsMdHBgtWTMUtaRv5hY87rUwYbPXFnh25M6kCh",
  "key23": "4jqLqisipc9PrDJSiyVHczjmArYcSmZjHH12mrXhqWQdcoEikmt13yXAhe2ZR4BiuEHaKGmcatJ9pA4dUJcbaAea",
  "key24": "3ZBbb1JuW71jjGvx1pzjXEjyoNZS1HdZtikAHQq4LrmzYGD63HTDQ4xqg7rHMtUnJxxqys2so3AX82rWwQkpgPFV",
  "key25": "5TFcJBpefUyxNGkFZAWtk5RHtBnRUHrYsEENTTPSFpd2Z9rc6dwZaK5wP2JFf4zJzYsXbdERaKiQTodExLsM7QSw",
  "key26": "24p7RMGnF2u8pdUoSz3dYvamKvLWqaqpivb7aM1jyEUQpKsvZ54fikdKVMSeoDxpREyzoetBvCi7T4pLQxpg7Ruj",
  "key27": "C6wHjGymVRWoWKumFgj12anEWT1Ux99djRnjvHzx3zQXYenvycJ4UNhVM8MsHUJyMiKGhkcMiKsdKTuogSCeZLC",
  "key28": "3rn7xGnwkKAuboTWJZDeiGKc17wWC7LyYHWsPv8hhZUStC3PEv9akUd5hgvtbuN6UzUX4Dj1thwFfTnxB2EXEiSq",
  "key29": "UvgonDQopeYFfQkVGeJVTRhsWAiJ8HvDqhxZm39LFo6LAk5DpVZfX28JzyzBYKFfLLLsC1taBjPRG6gz5t3VJsr",
  "key30": "JPoSGEi3ED1Zfv3tTPPSndDAC8pvFqbLd7u5ZuYTPkmdEv1Dzk7C4BBXWxEuVXf6no1fbNzNkeBfQj9od6GQCKa",
  "key31": "UuJPuBsgEa4AqszRDWPyNX4srxySTphJ9o48pPUcWNnJmjknoDzvon1pZxp4hCGuVeMBsLHokXRdtXHHJtQrQDY",
  "key32": "3X3A6MGyL1W5Ef1wzFQwmRrTRmMoK6AUhiRiUHMYmqKakssFDGQuBReS64bMZ9CK5dRbvf9TaLs7XQGXFJUMk8ET",
  "key33": "3ekeyH3MUSSVydK4SK2x4KFPC9cZaWipLosdvMcJ3YJKi8YwnqNRWcgXV1Af6C2GXuz8LnCQgkgU1aBkK79Xid1k",
  "key34": "3v2sCHntfwkigPMTCjB5TCs5nvSQmNMfw3w3yGjy7wQgY6ttstd9PujCKzu6JmdNVp1kRjNUQo8NHvpeNJNT6Bpx",
  "key35": "3XF2m2ByqLSyVAkFLBNBWtA1y4UJ8zZQzRb86whsnzwDYgAFMKCy5i18ELvKuf5sZjDAAZodctqq9SCj3aWYH3So",
  "key36": "43Gxeabkyz8dKC6utuV9YhPxmGkyKgDDLzhxe7JcWicGiPpnYaX3oRbaU2XYa1xqWn8ky29bw8TN8JkkJSNqQPGc",
  "key37": "22npWtgEceDb9VtFJPdtLqtF5abPJ3wPtEx2ewtdxBqnLrt2htyku37ast9gSDP7baQmQNWSwupjGqiAmivvU53t",
  "key38": "5yKru39XMZPaCHbcGrTu55JSecsVxgAbjJGw9wF5xMq8yrXmeCVtZYJk41qhuFxXKMR7Uow1ktEqmY6Ap3GSkBK",
  "key39": "53txzLBEX6PY2pL6mJ9or3h8AxwjWZU1cvSmgTWqNkpPBfqSDL3WmNACSgcgRSBvjLFwWPQsbmhBnwhVebTuH4Bc"
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
