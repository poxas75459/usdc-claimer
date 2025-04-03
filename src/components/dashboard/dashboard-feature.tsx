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
    "5DSZvYjiZmywiBcMZ3w3rSoMeB6DkiNvi8ysSfFnehaH4oV261xT3UoypW2qcBnRNJbBeG9v34LriHcA8dLXMx1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57arV2BaNuMbUNci2w3trkRXzfCJqp8fLdV85DmypVpfqhboaxPRqeMT8FtG7Vw5t1WnF11DUY4sT2bkZprRJG5x",
  "key1": "34qCkeZSsbzKnPH7bo75fL3wHCCLb7zBA1SRZPH9xSvxwxVVLmAh27ehgZnE8WtvKxUuc1RNBCQfvwHsLcq3L4LH",
  "key2": "2kZ3fXpDnvhL1UryiFCFCrpdmSxJSMbWbDE6uEN6JDTYa75zs79oTrNiJmcf2c5E1i8HsDEuKxTAPPHLdT1EcTBF",
  "key3": "5knz7MbB6XiRyEqbia2o3U6RnWGxDB3SPXns4pYLyqj83eSTLcBkzqtESkeT3Yox9KE4DxGiK7aabuXcWFDp94et",
  "key4": "4vWdNwUvCBD9WUWbF9bPvTycHfSbKuB4njzgkXPWxf8Kn8V7bbSNjfkNaDwstU9FvHDFgSZvycKzM8JN4ZRCGBYK",
  "key5": "HkE4noegMQ2v33LVyJ7wttTU5LKP5y5mn6o77iVGaN3Ugn9NsaqXQKHoP2YPo12RZpTeWfVUzoQTVWFLLF2CiNQ",
  "key6": "3ZUnFZkYwZJAAkj4tydHz4KmYbfWonv9fctskerNMDz1Ubxw5tH3onWeE5oc964wzu97Pruzo9WxEQ9vLA2kSzWc",
  "key7": "2UGSvfU67itkruVnT34Fvt9j9hs1iv8RpqJx5jCet8hFVoq2qA2shTq66jbmkyAwuxPPkG9EUmNYAqq3m3gEUwYp",
  "key8": "2ijm91CqehXsMp46CEZiC6FEte2nAV32UFkAuw4Di9FE6nef7j2D3MR7Vb42YJk66gzLDVD7zh1bQpR2QVmxNB9F",
  "key9": "2YgBE9GHU4Acs85N4czn7wwbzACdaaEfiJKXXHHuGh5UHv64DbAvHLqk5QF8EQXWPJXShwziogcEMCHC3eEwDkKV",
  "key10": "5aAMFMpJPSYWCkiqq6YCV3t6rWpByb3ckXjtQBZx9mDXb75XAtU5vo6xbjiCDdCLUfMQEVCYZPVh7atzeukYFjuo",
  "key11": "2VBHZCdLBW29sqBriXq7xCsUWQwYK8qrAEjmxG1jpZCqWTa8CXeY9JEA3goQhUhbQ5gGgR5MyGkkpCvzK2zKE7Gr",
  "key12": "5NqVeL9CdxDzvzA4rHSziETemCXhdkwMTtdkNV1zgcCDywKvRj1xcGcqKBumFgEshF7tQSgUPPL61Gke7YWGp4tE",
  "key13": "Bqgt7wmYREa3kuqVenwV52CEjKTbrg3EaUUMjfrCnRhdFAqEmraH1d9gLLZwE2ff83yGhJmKwb43Y2m7QEdQeQZ",
  "key14": "5x8jkEtYK9ceXJqQxZk2hiNBTasheMyjKEeZGPVB8RWRu8vAmSUoMbvFFJZwhtCwA745axRmp5CCpqJeXLA4GeTV",
  "key15": "2gGYPEtu61ii1FTefbe3at1kUdFT59LGhGB7gmLCd4AervhxxxCDK2w1rXWBx1yAbXmR7n4xczFP7yAd8o7cLq7T",
  "key16": "4G3j8t7FoZRfU67ZZp6pBtqXBH7Rtz5pNbZ5YkGMXWYZWrNnPWUzYJ4eTTCfBGQP9Asp8kiNqcvoLjM6z2SNL5VF",
  "key17": "4DjR11sgb8EsjWuexPLXELC17uf2fMwCp5j7DBxkayvrCcR8uxF35BmXYe6osCuUhsfNPjfPEPaKZTNKoPibTT9a",
  "key18": "qEfDN3HNwVYb3nK7fqdB5SnNnZKifCpSbCV7iFKDJ6uu11QbSNnhebfxLbDsLfZcSGBGEt7ykU4y8wcof1hvYTX",
  "key19": "2HVqXp4zGzhbzVwJToG1PWsV6kB5dMM1zpAQ89cMKmQYt17B9TCoSxxTG4vvRtTxN1VDqZLY2sxm9BVEiGHvbHd7",
  "key20": "2tHAoBcK6vuGEzuRZ6f3cUE3TfMH2KvEbekVw55MPFgoHnNxGwpe6yA6VGPE8swAAAEnyrLF2AXXko9fsqs5ZKwF",
  "key21": "5NWJsknPEJ1WPvW3PeY3MPSN7ofTw2s7yoRE7BT3zaoWtpGS9VEDqwyvpWrKg1uiLz3uxuF4XmDMqwDfbnmEdzWG",
  "key22": "2ruWUp3AWxwWZcaqHzgoyVSoepTEUKREXjEYy3d4NfaS8ZZWBG7CKaHmWrgS5HyrD62ot9QFnmmChKR1rVYTA1nS",
  "key23": "33acimKYQ8AcfZHSUETaTeH5pJEaPLJvViYzK3789omFp8cvqgsfVPA4nygXPuADh6stWpjNFYiByYg1HHJwLPcm",
  "key24": "C1FZHsCkxqEN3W7HwbqtJvBs2T1oS4TdfYrCRzFGsx9HRYXVk1MH189EH4J8xmNdWHnw9zNH3zFpEJYRvXGi21U",
  "key25": "akH9Es4DpUiBYee6FYwRdSdtLShGhkEx4r8pgd7R43gYReGVaAbLMPXAAYsmyAJXHxG7HSYZDpAhqZseKVQKD2e",
  "key26": "5BqNBEZNJ5eVTz58DXvpqok3mLP37h9UGxRsyz98wg4iZjpwUe94NcfHP7rSWUxzicVNWjhfhYiebNwjJEQ6k78J",
  "key27": "2j7rf8LwWFG39Xi7vNpDcQpnMZK88A7Tda6xKeKk67qSgfGzgRutj4RcRQiNts2Lvv8fgXSiXWHdqFZhJ4DaJckt",
  "key28": "5YddX43UtpusGE9jqETejbiwWyVu65eZXjNa8PWTYdLSEzJMZQiDVoJhQMq4KLXZCuqfBeVMVck3rWknCcfDzZd9",
  "key29": "63edT7GF1ppmhXWfUAkwqp2fswpPFKXV8QhjeCFPEixEubwYpNuEKNyNKx85StUN66WYZjERP71eDJndZnJ1Kke2",
  "key30": "2Kgtkxctjfoeudh8q3FgbZkik9EZNtrhSNCW95gF5XctDswBR2Zb9GUQLFnmt7N4ao8V81kQeu2wbrNAUHJYJ836",
  "key31": "3xQBnASSNhvwksGosWBixi2ZNj6W3UBDY49AKUJ6e7UREgZvq85xjBpH7PbSezqFM9jFbF2PghN7qrx9UzdMPHLL",
  "key32": "pRXMGGb4eYJWsLPJJGVifGqpnHahF3rYpGsVJT15FcEYe5hwgcx5cJCaJ6wPQnVhNqrxa8sMURkYYQTzvmGNh7M",
  "key33": "3zXSxukfFK7bR6FavMdXn8Wd9Gfvdxf5kM4NxWLwKHbBBEyqnMJVcRJ6y7WTmTikTw3ojonrxTcc3hABQiKDMdtu",
  "key34": "5Sh5TMxfFLaxAYqp8TiSonmrpE6BhHWJNWniyc7Rxsh9mAf6BKT298tZTT4yorRuYGpmKKsuHHgsHo5M7zEyFetF",
  "key35": "4wNENTjGcfBVpZrVzuytucmNKx5PYXtZnov4ZLdZgau5oVS9Kk2WiTchGW7CmXSMBTdH45P7TjSHTgXg6ri3BNtU",
  "key36": "2MFwo2S4CpijYceW7Mz6hh6iNN3zy47WTVdSLuQLQqBjSbpq4pTXkDTZf5V8bbLUA91gEWUNbpns1wfT3GHLLfKP",
  "key37": "2yfURDeoKZZ4tZvtCjWFxMeHcQjB6jYTtNVKr56tmzjPvHZcJ3sNG3WCy144fFaz5aFNidjgDVwxn8fmdKVmZTmJ",
  "key38": "56fY7kS44VTqESwUAsCHzfEx9K1utFueE4wnMHZRrvbTH8YSGf2LSV8qXF62pwzxio19KezpdP6HHCmHCtDqLGKL",
  "key39": "3Tm1aebyKW5hQmmeb7rZtU1jtnS6Hb3u5XmKx8fAAUnzT4BY4po41UeqVyE9YYKBPbzU6DcRgWTK3myBzpp78bBX",
  "key40": "5cMpfvQK9nqXSYnVaufqa4SAMKs7tjUNWA7BjxM2xrRUJrpyYnVH4kmqyfZe4JDSXPcEwnryNZjJiXnAUN6vShSc"
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
