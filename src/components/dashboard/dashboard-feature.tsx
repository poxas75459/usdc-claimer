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
    "4VtdLCiKFXukqoadgb6M7jxW33sdY3EAUeGPu8QCzwBZxjThqZgqV7dJd7zApdtgpc9ZZaZA7cZPSTwRPv9qZCXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RyYr9s5UcTAUorcxqG7YCD4NYA5xVAjXw68yHGUDaPxay4qrkBMdfBrNitiSHean3CXd2EJ5XEGaBSuuxWjWcGh",
  "key1": "561hevy2qErevjh9nsWpeTMfuNyAAJKZ7ur3sC5dnJ8UdJAEbUK9hpXKHCv1jsHrCxNnhQrgXtXLAygzM2azMPXL",
  "key2": "2NkwNKjbcDJQqgqdHYSktQ2Nc3FZoq4vZJ95vxLuTcvYfgwX622xMdM9BoWegNsU6gcx76XJTxkTM7MbfbHTwB6y",
  "key3": "zKhkm4zDN9RpFRS11UeQzfLWNHGyhGyifKSyYrqTzK4P1GtAAXHXPKB3kNGaA6tLD5AGvc7ZUXHDWLZdbhJwfJz",
  "key4": "esyWon73wNnryPycdA4tpyYpzufMZqUxXkCnSp2usnksWtAB3mqbLv8LLqTWdsUXuNcXcN2GTqUgFu3kWX73kqX",
  "key5": "5pas58hX3bFRrYB7nWEuRkff14KoSLFPhZwhemz9QGxHsrtWKd4PvDPGR2XDNkfs5taBCWWGUGCe7ahafBwuFit2",
  "key6": "2Jot3EVgou4z4NgWNeHBxgxMW4889USZRFrwtY8QPfwgzuJnEvq1J17Th7cWCQnPF4JTZo3qziFgfWDhpELQSsan",
  "key7": "3UPwTzeTDJYfqo9t85AME9yv2J18g6NNP1ZAY9aPFiNvxUY9Y65pLP4t4QsYwhDumtgnUrUFrC2wakF34gPRVMXP",
  "key8": "xJ2PWrGzPYgtmgbWGtLViyP95uAzrYbqp9uhzEKYT7Ux52SREiD938kn5nXYQ4JFJfzfSGHPP5E7QD9j4Hwkz6D",
  "key9": "D6ENZ6h43DninxmbAG62eukMMvSHCZApW9Di9dvLFE5Dvo9o55JZAULHRXuu4HD1yJd24o3xSBWiuwwP8MoQmts",
  "key10": "65UKTuPtE7NdQeQSb4ta4Emz6ZX6cQ7s581yiJZQrvpkvhT56NAi46RViWDvHBrtns68863GuQo9T2AAFyjYhE1U",
  "key11": "2vLAxC5ksmrSrw1obk66nF9wkADG2MphGXsw8yf1SgetsrkGBFW8hk365hc3dJ3DtHwv8tzbbCNRLxoNFUwwu8fC",
  "key12": "5BoFk6nhSUD4tABPNAFMRwi8qLpjXyj7Ym2nAdiYRFd4asgXeWvn5vwhitUTJPDY5BNALiKqK6zrbLTHycwRNnqi",
  "key13": "VFpQE6YWmyYt8BT4NYxJ6gPKo3dFDeVbSS45p7rxGKMQxzKXq7GiyjT7tgZZrhZw356BshADcAnRRndQ8D7vxYy",
  "key14": "3rHcj3QWA8CvgidAnU7FmsoBoxr6gxbdfAMraj9qErsY97LCwNbc2Vx4XtL7G5AgSGsRp1nNPAMdJBerSxsdjwX2",
  "key15": "3UxYMX2zCqdDBMAEBq2zsG2jcbaLf6AFA2Qd5JjAwhnnFC8hCQmvi3Cv6NXi6WER7sRxAFwpvnr2SGzsnFdNBsZN",
  "key16": "5uATqBet4hycW5TKfooTtsQo9hgb61zZJN58iJKbU3VckKYxhxStNwvj5hZeTF9NEq9sKfdwccDHjWW24LLq55v8",
  "key17": "14Su4E8UPKCmQz7WMCThCwtnoQrNnnrquFJSqqzUCGQakPaHhtmhnY8PFxXHfBtva3yvYSNuU3E4cdpekLDSeZt",
  "key18": "3a95wS9GMA2phQRRrnFV6XtcsobL4L6wwbHWY9rrTRM5yiEkqehT1bKvxUeFaxoEvQGwVgPsUxGBN8xyxS5u6CHS",
  "key19": "4pbjdpn4VfCSeFPjsU4mGZiHyNNmchsXe2kcQqUTkEET63uVrLHBuZZW78iiGoH9egPhAg3zaucPmbCJ7cnatvwE",
  "key20": "5jdRtjz8MWitu4JyX1jJtTwNA3636H7G9GC8dedS7duHvwNwgFsfKzjJEFQYuZocEytiqiADXPoFkDN9dE49pa49",
  "key21": "2mJTZv63sCkc9De3XzgW51XZxvE6SFGJJheLu5okja2Z63zsUYcQHeAkokEFKyBxyB22QLXgPPpBnoYpbyogQ2eW",
  "key22": "4UWmXYA8i9w3xQ2EQ1BDg6QRJUZtXhev8PjVkvx3cDs6A62QCrMiAsyhUQagVkRoQ5rMTiwGPQ7mMUMm1W9EH6Ya",
  "key23": "5tvkpdstnvNn3rXtaGkXCEweGgaysiuPd4SNhh2dWa6cYDKpHHZmarGUAPiP7u6aDedyFVCPpr84PmdxADPRUYBE",
  "key24": "tann138gkcmKDsbHKrGW59mSSkJjAhojTp6zdgkRGuCexkwqBrJAreG9H23i99ZkPhrznYw3iVUFAKWB6sPNFng",
  "key25": "4iHUz9KquptPCkPfAw8QTctyT44cd2LdWXfu12U14xfZjvnc6fWm9RveKYzydkC9e3gV5pFSjhGU4PpC1smpGFp2",
  "key26": "4sHhjREuY9zn3EvruCh9aJH92CfxhxKmWGpeEnTB3ZSPLZE7KF6cnoEWmMqy2vgifnXbYn3H4qbXHoxqZBRKc7UQ",
  "key27": "5g7ShDGk1Fw7eLt1451TQyaVzQWxJcXFmyLtpYS3UgXDBEwQEcNwQgWTeTy58t1KJ8iic1pA79ZzHnBGyAdgPHbG",
  "key28": "GfBXvq2ihJJMckLF52Jsh3j6xsmZ3y8z6CKVTvvfFARzKdVdaHEdhbgpyVw4SqSr3kYBbn3JtZwQxKaTsavCRii",
  "key29": "XCNW4d8r28xBbq3i2fWLgc8qijXbofk3fdCLwUbA9f12dB41NPxsmEZg82qXUNXL8LskVR61hbqHjze6WBWUwRX",
  "key30": "3T1eUAHkFppZhBW1csYY29rrc5sZ6tn9U81nYm5CiJKiwziwuvVPzmXxLhP8vjVEVA4VfjsRNJUj7Xz3B3TNu5rK",
  "key31": "TLfzHVwsL3zZ13BcYeQDZxuxoYNG7EVPfvmScvTxeTgLFQmDiubHvbdXkhkzpAq1m6j1CbtRmUdiuGkMpkYfX81",
  "key32": "3FFy26fMiWKYFmFtv77sB3oWHjAGae71c15ytisXKVUS37jYeCghyrzz8ahU1r9cmHjTtPpM6Lh9qrtvhnXEPo4M",
  "key33": "b5MnBE3kvaRisxcTvL9J1dysGJZny4nnfKR7wVsvUaPBTu1o9Wk1rmsgLwh5ChDq26cqKryTe7NYKJPvedfzUoy",
  "key34": "4hifDYCDsnNdQ51jBs1g8d91B7Y7rEViSMDTVkZDxMtbqgqf9NwrGkc6b3wQczGvV2LTxEfRdQYRTRq8vNzjZvbC",
  "key35": "5KeCK88NBkZuvsWW2xBQTeQJJptUU7GWtZ6LaQJQPmwd7ATjkUXaFowTLsqbyiZVn4cbHs5LpNTHhkH9gFUPbYH4",
  "key36": "23LbKuMgaDW4WHTo1P7xJzhyoKqyYiJFJs45qBeJqiJxgxFZJUEQqUr4e5ASs9frcP69gfnwYEfdDFArCfnYsKMU",
  "key37": "3C539agSvnbuCh1HKTZGdkzHka3UarHtsBWN5n8f9q9pyjEppUPD4AUTuEp3fTYTJTiHcEdh3z1ZpM8HZcHLb6v",
  "key38": "bMhx73semkHuvLNowFyuFXLrEaj91QnDNVqkCEeJ57M2kDU5HWgxNj4EMjjbKkVdCoHVQf9R9SAf5XNVutk2vhn"
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
