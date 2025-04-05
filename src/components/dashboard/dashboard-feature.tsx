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
    "5yExJY86iqoX2PWQZ8tanMuoEgWQXYLXx9nLPtkAndkDgQcHaaDayaQT4DBgpdqWDrQTPytxT9HxifvCRsjaWk2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNfbgaa8LxaZyCT8KoRCqT6VrNHUUShLJrx2KZtSMXtTy2Qyh8FE5VAB2QpQdSDU22jfqUK2XkzSGfLNYBaL7fa",
  "key1": "3AyLsARVbNDbCW7dUooR3btqUGY74rAqQ5h4xbfeG5JBYjrvCwoPdF97cceffKmwXjgvAEnQ5NfZjWoeiSWbKiJM",
  "key2": "5RAEVyekiwwMZ8fjFcaNTzjFafmirXp5MAEEabJL5Cx5Mwzyaww67MVtgAKdNRT63UaUPjZF4Wozy1TvmXaoRSh2",
  "key3": "2FnkeADTbZoFqhxQBRjRDZsKRszCBnEJp914Dv8j4mXBuEsbBbLv3HmX21W7uMeoGFpxkuU8wsPazpabn6CHid3C",
  "key4": "TVR7zGhdyqKnFR2afjm8M9gg4fgTtr8Mz2P9H52ZyTq2BqrhfZHZ29RNvD6z4mKudXK6QeGXsjhkxHmVmyXhNg8",
  "key5": "3wb6pmXMaZPZJ1J6jR1gEPsDJ4cb6rSbvLw3qQjgrWub1XByUQ3mRH2XTrVyruWYumEoeCUgUQKxF2yix9aQBVZ",
  "key6": "3pmafpEYDUM3tNw3MEikVfhFoMifaDb93vyFURuFcp2CS5N7DZaz5cpA75huLjAPsCAQpTzKm4GZ3xCYRSqjyQn2",
  "key7": "3wq7a1wgEC1BzhyunbuhVivdBPi6bfasJoWHtqh3baF1nbVGMrEstMzviENp9V7UJhovu95GgPr5waihNEiWYGpw",
  "key8": "W2GdoBqNhW5EVALChXrDziboxWRzvuHFM61facY9jsT1TesBLmcf1NGN3ZZhyMFayujGprfHbg9JgruLRD4RmEn",
  "key9": "4HSUbP1ZM84XbQbBnfKxXENLRFiQDXU7ksafpQMtZda6U3sLtQ6M6yrAFusDB4DVKeXegtmRDNLCAB6mWJBiYetb",
  "key10": "3gyNc9MTcgZncLxz2cM8xCXJvbRButbMqzRGofJSUf6Fph72RbQ2Agz8XW85qBJLbfZtQSVacJGDiEJuhSu1fDsu",
  "key11": "ykThpPzAojMsyuH2QY8dawKyCZH4bnNgLNTDMV72TXMiucZFUoU5d8nVxeKh5qZMGyTJW4hcnGgKsap95ztkaWm",
  "key12": "PEeQ8u9j2vEebWedr8QHtXhcgQHXnhCieG9qTeqYQadSsN1RLQJwmrPsKv6QzV2CAKnYb72mn5tYXcM3zyYs87A",
  "key13": "4iAvJHuDUCZr4bMfovPhN1ZCQgdZzNip68fzE6tgSWnGwdzme5vikQK3wKzwvPoXXsa2e6xYJHLsskUSyHcZaFMR",
  "key14": "4JdWye9CgHp7CTSVfq2WsPHsBjBbQiuzugPt6bNzj39ReEJPr6kiXa3TnGUipAUvkiGNsFZGvnBnUtgdxpNGmXm6",
  "key15": "44H1XNxWaB5aMRjMvEmd5FufqmQKPCvNPrhMAXnwyimpbgdQWsv7GwxVbcR7q3kggxNCYrrGEhGfue9cZFRSdy8t",
  "key16": "4sUamn16ea1mePfvQHSiYZwJVbGUdiw5uphNwzSPs7MJkvMKKHfizQFEbrvToB8qLia5MN4HEgduzQVw3KMu2aKb",
  "key17": "5KvNCc9LBjmNcWTMYaAuLgeaSJ26w4GCQ91n7jARMGjahzZt5j8Zv3JcpdoipnCr1Mncj1y9BE5axY2fjtDDQWc7",
  "key18": "7oh36dMxgf9JmHR1tc1EafHXzt2NQ39T5Rc5rkod2GxxMLPgUgNm5qrSqaJifQUXD2599w7s1yXdfS1VH2xvhRT",
  "key19": "5FGh8HLXXBgMtXBjj4t37gbDqiSE1MQz1oa7MWrk6QA2tPrrfbwD6TV6WjAcAGuyKSpSMNUby8vnDFYLCq3yuags",
  "key20": "4K9cyp2Q1ZKAr4necDeEZHEsDS8jshWb7rhM6uFiVUsMEQUjr54MLuZksZLPLTWreCtLsmBtHtpv3vk7Ypd7AUHM",
  "key21": "2SNDvibpekofZbYU3fmyoiYxoAzYt7rMf815kdE4dKcj7aPXyRVqmeDxbxf1TjN483VNojVfRZVM9eVe43pP8uWd",
  "key22": "5huZ7P64qmwYnyXrvPRyrqu3eJ7aqMBhabd65z4eDnyBFWTLbkY7h3FXxHESib9zPEEFSJqeX7C2ja6EX8XBg6gy",
  "key23": "fmw6e41oSifm1YeqWpAoqapdd1WmAs2nhQNBMQUbypUcgeDHyE4u7yxbqK56pjfWN5wUcZVYanRp1DiqQZgFQuz",
  "key24": "3eCMJuSDnZjn5BidGchzedy92ddhxWsKYdxeUJXMaDGyTvqAfJRrCBc18WFWZM59Cg46ySGyVohXWTHmSn7yzLzu",
  "key25": "YSbdUAgG8AmsA4CxZja8XZnHbr3PSLsFgwGU46vWDqscwCzS9KKrRvpnoj34XBxDdRbPbbxw2iK12McL8iVKWEx",
  "key26": "4RehL6wC3PYnYcmJBoqpgQegg64Z98HZuAyfFJUxtws5NCKEQcdiAX5Zth9eFBRiadqBZwkudRWj9D8B6xmz7Nny",
  "key27": "4pgEDdxTHTqAKaYozYqFZgEpt7t24exSuAgTb7Yqps9cZKmtLYwPMvTcAEPHNzPYU92RBZYuRxY355iYZ6uDiBVC",
  "key28": "24x8ML2ANMmpsMSihYt89g3FQ3GoE6WNs2RE4kwwijHCb3fG7SAC3HetbzdR5srcH1MjNsrnLE26T6mLYuyj5k73",
  "key29": "ndAECfSZ9ds6bsRTyR1j4QK5F6KRzES4VyvB6DTGT8jZj678CYbMg6AezJAw9Y8QGmcixLyAn4fCqZ5TYWMUp8V",
  "key30": "5wSgcAMV4RA6MX5G5z7TKsXpzqhjsRh28buamu2VKFhGwYb67g7D1k1LT71bMWe2hacF8bJcdp6A9HL6ons5duAx",
  "key31": "2DEcyz8fWZzDESNBtPmtfKLtppGrtMmczKD4hjAaJk2PzDC1pVt8Q35gi8p6GGsM8kRG6vjMgJT2unnb2QV11XTu",
  "key32": "V1SVQuJd38xsz1ZGxCBbGKi2Uwo2nsUcHUdCLYWPh1qv4dGHbqU9y3PiyJRYwXPdtEGuAxQyXvy5SKWxHDLMQps",
  "key33": "4qyBpVPLU3KvUD6sMHoGGhJAjeh1cUA1ZmYFiLZUZNYidC1aEyLFJUXvr9g4PgtBo25RmisQAQMUgMUWpHA8kkdz",
  "key34": "2jeThq7j85kZuSDWqBpEY4pkxTyeNg1ZBPyAHQaeLDP9VN3KUJkp2w7dLHQewcvTdzUpCYpRMZEF2HZoxYL6Vsnu",
  "key35": "4AkXvC6F5bFejZ27GtjmVSQhAd9X1ZQbkwRsBGWpDA2k9KtJ4cwKFZYurMTwX56u3Nu5jh9BrB3pcvJAu44Y1Lw9",
  "key36": "2YtwCUCs6hFrvZjrVh82QgmVyc7em3cJmZkB8BSDjCnGTDe3VDffeAbNmWXJs1uU6vgL3LXYiwhDGZLuEuA39oDx",
  "key37": "4jyfpWmio7qXmk2D9nB85FNE2AgsyNuBeEZARn9ZyjqUBV2rEwbo1HjCLU6Gsgpq8Ti6TcUsDvKmZ3yKCMd71DRJ",
  "key38": "2MrCp6gb4L5okC4dwrbMEBdSZH1E9VcGKgNGswQtUvpGdXeqtNxGhyZzowZzjaeqy7GCQePoWpoEMhH6LgQvixFw",
  "key39": "4NWkqUcBzYxo3XChq85JsugJCZ5T67himNMYztWuC1394wzeyauMDDvF8qsd1pUHMMoqMNm47E37nfGkVmZsLi2z",
  "key40": "pP3jXA1GGSf7x9GJJtsh6sF71rxToVnss8eVafKKP38L764BqyuEetTTu9r3CLgi3otJaycLm9BNPUxUXCsBUm6",
  "key41": "3dgsbLYVpTah9RjzbNNsrzMCLmR1WcXFkYK9qkgAqqDqaNpgJ5dLhZWhHPwTqDv7XNDvTA6GKZgGiiDLfcNizt6P",
  "key42": "65wkQRucyrvUAc3CcNTNY6rrKaKGwRQaN1CLsP6GbWTyb83iMNKZYz8omMmETDgRvTRGgwP4rbMzyhJ4cz9ZgnGq",
  "key43": "S8mH52HKqkURs9jSj3hEGnxvhZehQvr79mHGUTR5JboEXYhiT2z2hJ8LusSzXjsewkPbwDAqgtVXkLYPs2nrnt4",
  "key44": "4dRz2uR93VrH8wEpn6a2YyhgJvAizZ2EbxbovymiPhch9BVSDtTVoQfhZ51kWxU18iP3FoBEfNgGpahC6jz2shVM",
  "key45": "4tKoTRJG6ZgWnn8DGurfUDqcu6aKoB9oAQwNeJh8sje4vEPLhwNoo4NEAEQgEVbhtm7BvnubMQs3Rhj5kqWYYkVs",
  "key46": "pw2v3HwNVJzDYSw43eE7eXfBv2M6CsvBWCvvVe7nK6n9JqV9NyZpeUs8nwbcqa5RSDbXckhgWQGeJ1cwK2rZSYP"
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
