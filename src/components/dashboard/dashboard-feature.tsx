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
    "65ZZZrkjfwQ5jjfGC6VWcs5FCa2wpC4FT2NEqn7c7RutjfDAfuUT4bN8wHkWbLGjFq2xfBDixpUcnuZHer3pWpXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k8iYSDLfCUT4uepnqMhsNmNqbmuaeaUZCERHH15ygW25ezYdZJYmBwwPjCv74rcRXhutmLZHFoKgWEk3mvoXACM",
  "key1": "3UA7cc4qCEJXNbLNZxBMJWUkCUkBZkXeJUGNbXSfJ8WkdjiprNmjYiB5q6U6UPG7KwmEYtfXcf1kKXxKxbPzgh6e",
  "key2": "4Az6hHGmvy56jTwaoJAxoy2xLRY2dFWByDzpkiXEq7aeE7YSrEi7Gr8Gv4D7rPfDyoWpTotgZ8yv5C2TUiPyBKym",
  "key3": "4Jkz1tpa1YGma4UG3typg4PrPv8rPoUQEVULhPtGW2kCWWxb15XPGT4sJC2ecPhub36AXM1qGUimPj8AuyqcThV1",
  "key4": "66k5Ljh57WtfSPRs1wGtbde1KVC72spbgLqdgGnoxgE3ma5oBD9oP6rmBtcErNvXpKWZXGMxh9A1eCTr2SSgJSWn",
  "key5": "4H7wWVkx73uh3qMPK6JQS6FcpGcamuVDwEudhB95auAfiLV8rnQA2kTdAaH196mnTpu2bk41AMLSf4PzDfcnA1JZ",
  "key6": "5TE1yjCAZjNfeGn9BUw81XbqVdnkPZQetuKVhovGJYwbVnUQj2Dz5qNDtp3CKcxvLrozy8knk6VS3wATWhVH5pVf",
  "key7": "PG81uvjUP7y72seyGRYApzPfqEH5oAUej8yexGKrDFghioDHk4ATHSUHLommbQ3UpHY241eiLnR7p7nh2eAnG6Z",
  "key8": "2sRdkCeb3HG6CsT1quQUQq9hjo42o534DGknqUi3cXbbjbMCjMdR511e8Z6TybahSy44XQUjMW41YVVNX3kbtLh8",
  "key9": "57SRFL7uj5kHhRYN8eVf7qJ6XfQKYcdUnQ18FNhHmb2TgW7ziM732BpDF6z8gzjsdJdtken6xLfjT3dL6uod5a7y",
  "key10": "5VBdgJVLGpdrKphjPAoHK4gWnBHAjTA3WmXZKHzCAzrYRxog14tDEQrkp6E48rEjMdcoYXm6Az4x1otn5b85ETNG",
  "key11": "2K4RGvEBWp54DVRacqbQqXniMEdeMvfh4562ufYeLy8eFhmZ6qqKaYxEuKetgud8YcYfNNFqQhjiUR14nR4bXSPA",
  "key12": "2qxPf36tnswZUA7stQiPbqgeG52mkgEDKLXsnu3F9ToLRPZvC3XmFduy4bFaTWmpHeogfmSFZGqn1rmegZ8cv66x",
  "key13": "42kF4t1YDfBzz1FSaUYUzkEBj5XHWhoEdUDr7LmAjdbdhPa2fVC43N7eQQfDeMWbwUWyykFnqbhXeaMGjdJGhyuW",
  "key14": "4sgoXTfBtg883necXUGAhUiy1SLddwvKxDRhzV6nZCHMZHnRmpnEXkUiiLvfecGqVGzZxbLipsQfCMjgTNKtfzjx",
  "key15": "3BMjmEHm97AV6HTD55SsYaW5Y24MAMokCCUXRpK44X7R7mwf2pNs51w6wDaLS7ztdgkZNND3ZhuvodN3AGLknmEs",
  "key16": "3NeUMPKn4s46LtcuWcqtJ1HQVPrcgPP2UfvhH3xkXFHk8qUasnTWYxz5hH7NMrqJwcxJjfZrVsvz9mDY2mxuAoSY",
  "key17": "5CXnxd5XuRUaz6Xt1SV2SsotuJQChnmJJgWwBq6ssqMGWfJxn8uxrz9dq7LYtKwVjhePBCP6P4mgnmnV75PeKNQm",
  "key18": "4gX9fTRhziswoFSxxRRSU85zebX6qCPBnjTEck5kzj5cKLWjJdmQFyA6AoCHKe6sBDFQ56o2mzNUs46EJZHP5Rdq",
  "key19": "28epaMGKRVbmERB3bQicdVvkDyk7ezt9Gtt1udLmxei3TEt5Lj44W2dSZ9avStoUcRcv77yMgKn7ptiFrbvhYc8K",
  "key20": "3bdn2c7WfWss8Saxi8ER73DpRKArFidCQXhM8ZY3MMEELVwNFrwpxDkoSR4PhkEx3rtfzTkP6zBvSRVXyAjgBoTu",
  "key21": "3v37ZQkEttKowRsNZUvu2ZGtLEEhCih7upavDc9ZHJijpLtaWQZQbeAN6Smo9Un16245KuJTtN8qm4B6Ds6iBwYb",
  "key22": "GyqUzVMgBtDvHy6pjNXd2f9SudCW55AejXSEkckEoou6eTkf9TD4R3CUy69Ks7ZTnrwECkncJWDwfsVyh1q8ThH",
  "key23": "HsHg1X4Qwq7D4WkUToK4L2vRmA9xxJ7yTR44xGEcmYDUUhP9QW2eHhSa1kEWaeFdudAPe78uVMmKgeRrBVDW2RJ",
  "key24": "2KhoJdBjUjspsEEVnqDXyoVDtB4g89FV22HHeyyeCG4UL5diVe2ibzYnY5sJ41sQZRfCKM75YzHtGmfAPzSw25A1",
  "key25": "45tEKGZNxQ2kRgGCU2NU2sThjmzqxPJ7Yuv1tnuc2UGKgnm36ej7vL62gpZvoMm5gqRGeBoWhJy6ZmeqwMRuSaFZ",
  "key26": "5wQUA648iBuEDPyhfB27KcqXtmusvU8YcP2sFgnEUzhKdXN2YR9VWc6eV7GZ3FgYjxdfzxKk3jMnseXwU6fZY1Zr",
  "key27": "31G96eCiNRzJ4ju57rFNVdkofdrrEEPVaGt5Uh82XVD9dP92i1wZPg7pdJVKMpfXz6rLF46uLdwWP1XRc9hi61Zc",
  "key28": "4Stk2ZiLVQkrenDVJhseHL4WmW8w4X1JgJo1FZRBASJHyip2mbe9P2ttmuwQKZRc75TfLY1D8BvCQs5rHTxh1v3c",
  "key29": "2op9aEPGYBbFMhQouy2u6YTxJ7FdEDdjtkH65TkJ1YSaYupXtanieYkfRmWFNDSd2c8g52hovzqrZ48EoVN5Y59F",
  "key30": "257GtifSzRmUwGewArF9iQvymffN6FHHRBUpXLmnw3g6jk2e9QoDvcg9WULP98MfbiAkbsN7QYsoWV1ygVWFrPU8",
  "key31": "2xCC7eeRTzF2m2sAEi4bpahLXBo3KTCffDZzgZB25z2QqP9yv2S1aptqR1z9NBQgyK3ind6YeAtHrsn6XfpEtrmi",
  "key32": "3kQNxp1oAHWazDQPB3ndmXBYcygHgQNvw3zfTCmcEFpPGwuueWdVbc7FbVhoSrGUn7iFiKS9UQbdZNRQfQvzQ3ZY"
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
