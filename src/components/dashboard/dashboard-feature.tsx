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
    "4DaQpwWZgjnfTknUsmWdrnF4dPdYrzRKAjV67V5FmyrupWHie1g2FNDHA5hyEm4dJi7PdkT4hbPrTPh5cBEx2xY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NV4bcKuUT58dqTWNyQPwWJEsvG6MfFUtKLAvSgDScsdxAnQbGmuW4UaBxQEn7oRiTQs9vwuPd83zdAGsDzLYfYA",
  "key1": "3YuLnC4KsoDbs5TMXuobP6gN9sAcjaFgTQbZwqTVwfbCdA4YssFPtMMU4JQeeATp5Ts9ysf85nYGc6h8Xuw3YneV",
  "key2": "3aQkK4qKPj4YS8xt5fZKLDjUnxRMbpzcjfcBQV91unb9CqrT5pKtZxvBJxVCZVdPg8TRYXbD2Yb7WX59ZCuof4U2",
  "key3": "3h4hZfk4561PtH413eWZHj5vTWHR5izygdFYY5T6b7DeZmDCVnu7gkdgvo8qcoqt6rn19bB2jWjnU2exjGkTQ6sk",
  "key4": "2v51bvPKjXAy5eHUbrTNB8wvNm6X4HczmSqiqR6VpgEPXBr9EWRBU8U8S9XVUcoDdZsscn77LGQZ7TQgmhWWEdkD",
  "key5": "3jbRWCEyZUiS6KKV2hYgsSkV2MDbzPkQb5RW4uqnugx9cmttYuPm8oVdnfHmavQnw2wNnMUovxU1bMeHgYpsuKHq",
  "key6": "4NwvsAfNy9uRHHkLu3nYA5XkT89XpP5dtveEzwjF1ybemJGymo7EKffTPYwZkFZf4bjFfYjcpST8j7fphAnGbRhJ",
  "key7": "2GsUrgeoMDugpKq6r1RQw4JNrv86MgwC1hsoktoyfhD3FxTDQisBkDVGJ5KRrWPWtubuZWDNbddJoQ7MVAEpm8WT",
  "key8": "2t6XkFMc44qcJgviLQ4A3pQ97HQNkGfQdFrRfMBMkV9NSYggY3SqSTobm4d1ChUahTfuDqEfGMts2tAL5puQgNBu",
  "key9": "3STFn66JhEjbEcvikeK4FEqtJYziHNpA3FmL9qGoY3WswTTPGCsYxKtqUnayfP5XVPykBhyLkmoT1gR3faTTeHWJ",
  "key10": "2vktewy7iW9WcZgdsnV8Zxxxni4LMgZ2panWUecTQAPJY1oPCAwEtpqD3RgEiC9nvWFe6wa5cYkSd5R2pepK4SJP",
  "key11": "47yLwMdNduiriGD8RCXBAnm3yLgNojSXmHUiKbFpztvdi4tFrJdrqi9N55nny2Q7fdahmXEqeLpPJnFHjmuYJamh",
  "key12": "25vKbhhWLhemC2Y5zyDA3HdM69tvy9KpdwWwzC1NeRaAJ3RZZdhvTxFbxBJ8RJzmWhvCbRB63KDXUMwCcVwEtbgz",
  "key13": "2VCvoMh6T4uwDcvP8LNcP9gjcbUUH7PYm9ZcUEPNWkCtsk2iodGSTvTf1AjNaRDwyfujz2ZtM7xu66EtNPhgu82R",
  "key14": "31TmTzV8cNgmmow4EozD2jeyPYvgtaGAy1yReMvR6vsFeTrs7SrEivqSgrkS5wpgQcrc1tTazsaBU72bJTZqgRCQ",
  "key15": "51KVNi91McyhU3FbwbJF23xvBmfYgmPuvgdFaczS8GWGNvCRNLt2Y2YjENR8MGbFfGD7bnpZQ6hWzHEEcj4XmzHF",
  "key16": "21Nw6wmzE8exE7aZeZnZUDfji6eD71XjKpKtApyPxw2B22Hww1G1C3FYB8Zkq43JP8UcdsDjBubNH14B2Z5sekvM",
  "key17": "5Vu8NnRZVGKtAHH79MMVcNHAyZNDCdGWsCuR7ckqhDQEjP3bj5828xtUvZeH5wkd7JNH2oAuPnrkxpUJ2NSX3PuQ",
  "key18": "3pEXCUA9jHxeyFmLtPoQ9ifvEpjmay3j5Qzi7dMXZN6BP4qEf5JQFAtLhuGjHaNPBmTGhybDpyxrMoUQ8Jf2wcwa",
  "key19": "5GBwYesVjvZ5SacTr9Y7xXhLmePFB4ivyeUE4AhQFQkiNarviXY2rzV1PZE9NeGmikywjzgx4FRiBx9qqJKFiYnL",
  "key20": "2mt47duutZ4tnHwSgrVfGS9h7rwwjWoSRmyPtNvEtTHaGn3Ft6AtoL32rquihhGk17uammgbZKVqPzbDa8kMvU6f",
  "key21": "3B9hJ2JnrZkcR21fHSKY8L81WVZB4rEBDWf4v2tyz6QMtyPVxYKA2FzjEY9LQXjEwcn4EheL8175ksz9zTP3y7xf",
  "key22": "5vYhWrHhVNiGxseJJvUvgjLx8cTp3fUrMcHAArxkBWPUMUKh7t8GekkaEJatjswh2rNvzgDPivKWgNBww1V3ZiiF",
  "key23": "3RYwKZAyVkKtBqFNKTNjypkeAW84nkmV7vuC9wb9SFKbbr3q9gBdFDyibgAv7D5Jd6wKwvG6EmQbBKUCKAHDNcS4",
  "key24": "9mNTuM4obqyjH7ceSjktX9YsnT9hoWMwzABX2TavH7C3GodW2ZY7qjok7kPLFDUuytGFwfsaEUUgt4Tzi51iK7D",
  "key25": "3u5ntMe36yw39dENYbMKVv9phRtfYNmWYKGCH9s4rsJfCaSKcoizSTZJxS79ewvWaNHX2kiWKmpwyB2Duvf3jt3s",
  "key26": "vC8Y5oKS7fVmroENQJqm2eybwaCg3QTX7wrrdZG4RZ5SBPKHvJKEL8jiM2P69drkEG3zAo3B4pvsYYah5ij8Vfy",
  "key27": "52zhK8dFVLyGhPpwnVZGUfLwkUmBxK7CcpuBotybVQA7usJkNmufTUwTTxbduzCCMYKwWaiUiC2UtyUhiLhrNpoe",
  "key28": "2cFPN2Yc3GhxkTkExuU5x5DK5YrgKtrgU5xbBXcwYHNMAvLZmXzKLA21q1TK7wcnRsWQQHkSSrRUSxGgj5X1wzb8",
  "key29": "547PhpLVvbtmmp7uGAGJcQfbJwtdyNTpbfweQ16PqPEWqLkuTP92WrwQAauz8H1wynqcK8iAvvHU9EaC17WHW92v",
  "key30": "414DnBqUoLbRyTazNSoPaXD8aY6VikL1y1inJf6aDjasBkZB7PddQZxtWBb4z3QdUACFng8CtsqDiTpo2fdATDPz"
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
