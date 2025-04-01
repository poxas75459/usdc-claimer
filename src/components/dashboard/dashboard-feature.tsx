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
    "R3ZRCFagUFa68PUhJVpP6wqitHneFqT4JajDRFA2mxVRNatPNBcbTuFCbaEvoc5gx1cyr7xKWcRmyw8VKMGWq7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WS6Edca9ELG76ZYQfkYyf9z6y8V6eYiV97NLBHDiue4aTyMQjy4UeeKKpnAbMUH18vpWySsGTY87f5wv7kX35Af",
  "key1": "4iaSx9kXMFF4GTir36upQQfDwfTfSg9vFaFtwaYY9SNBCSXGZTVzVWfjz3tViyWQnZhMc836JvB1qpdUbokKNW1g",
  "key2": "3Lb7BMyh4Vpf1nZXMoDeGtB2NYFETuSeFUVxSCtjnHpAqBAcVSWN1RnN9TWvAAMXYDQMmFjj31MVjLDEKUYeFY2e",
  "key3": "hrRrMR5sh2BLWpGCPmcRtEmma8Hoifk8sqT3wSuB4kunvw1bdXT6ouzffKt3W9oQbbkRLeScWa4daMyuCfakMXk",
  "key4": "5NwJWX2Dc5R9NaWshbCMk4jhNdxS11QQUJqvYB8nVPWLV2XTCK7cPbkDM9UDfDcr5zcjqknnCDq3ECynm836t6FX",
  "key5": "2wuYvTKDLqsP1Q7HMBSsvPJNcRx89qZQxLQQbRadbTgicfmPuXqGZP45jf69K435aH2EQ7h4HpdgrmPk2YK6LMHC",
  "key6": "5JPcxnMFC6siWPdMgqaDyz2VPfZcpi5cJew3ufgR4r6Zm6CmkRpUKkRknCihViCUy5JVivibtm8YPVaCffnx7FLx",
  "key7": "5B27rTgi1upy7MVGNjuZDHNySjNmKUp73YiubQav5btxCNLPwdprdtXBbbvfRLBkPoXezD6oHqBrPVw187EV2P7b",
  "key8": "4oYzzBTBacZLkyUkobE9osZM6PG63igaKgoCo9i14Hi8Vo6g1VvKMUBNHL4wnJPPGbqWfWMwKsLDK1tcD2o7SriD",
  "key9": "M236PhpF9uPzsMExvejFsgbZsdK8Lik9fJuqodFAMtxV7SSMXDgcZD3w4ZKFXcGC2gniUsw839anHE6A4gWM4pc",
  "key10": "5uc7WPdfnfMMZ6ahQnTUrjJ6JuCJDBXiEzvpSA7nDXwQGTQ7P9cSnHHcqBwTSm2H2kXQHq4B7PvxpC2HwEVbR3MZ",
  "key11": "4dpdQQuHnChatWyzgioSi6AVFyNW3Dtc1E27dgJjHaMgZ7VdfzBr4YYSFXbBxwkAtP5KparqqtdGBDyVYbc7FDfM",
  "key12": "2sGJeDL5uGDgdcacUd9LaSBuBiTmekHKDF6zvAeMosVeYsAH4qcfbik2715t1CJL2KY6T8MUJXSRFMdEAw4v9pRS",
  "key13": "2CRSZMnF8r5iJH1hYduCVrmqvm2qmEsJEbrkE6dbkWdLi8zcSxhpQEvJYZKcjeZgCKXu18Dau783zLFkiaA2Lw7q",
  "key14": "3upGMZYiSopN3ekhvgewHbKRQTGR7sGCkAB6TWnCEVxF4THm2FSsvn5CqcbEhY3TmL2wqZQyFNKULpkYUhnErcXm",
  "key15": "2ZUJyYawimPBDpuVbFBvkGuHe5dSwEumjZH9uYTm4jZ4GSXZKJZAzzw5qKZp5DAW6mN4GQkZ1ptMS6k8G389tAmP",
  "key16": "5f1fvcp3Z5RyXRUAmFUvniT1nTmPXHjb3iPH3M4357sKuB1JBeo6n25vPBBHKL2ZKmJiL7aA1FgYjBKEoL8gXKHR",
  "key17": "2WkkvCgvPic1uRi1qPYshCzY1HqSKihjgoJh3K4NZZmHWpph59RUEH3m9eeSW1dbFKpMQbvRXD4JWPovfQ9V13hk",
  "key18": "2DvNHFtxstzd4FQkqzmuuNt6s2tcrmmG7rcXNDY8SV8iiPuMgFpD3qftabLFYaBMCox174ThyAKJEdWerZBTTKGe",
  "key19": "4mXD4vyLpjVJSpRATRqSyVJVew2UJyQwsay3gXShvyBr3wcF29bPdLQL7dgx6iAQvjMHh4j8DtydN4RRanFAUw3w",
  "key20": "3sqKG5XB8MZaa5a7YAc4YysWXKbaSKMSDULbMEZaiFbPAXZcWWGAFXMdosFhgzqepHzT5j66wXLD95xQp1rJ3zQH",
  "key21": "2xi1yGCRFSgcKkVBhuUz6ZwYofd16Dq2idAcybAtoVCYcH5SGxfSkvCw5xLvrxRw1FtrT31Ys3vhUWNCS9A7HYTR",
  "key22": "5NDM4UxLjY1cpZp1jvBXQtxPbrw73xn6mKfMvnGFE3mja8BPzh13rWq5jnhYeX6n7zoMhjxbwnfPFZ2jPBFYLGZj",
  "key23": "9pS1gaEedPHiEV3UqVELW8R2Z1yW1kQVVXh1yhJon2trRe2iBrLd6KUsBwU1MaR4NbhMr2df7tUeBcgPuu6pomg",
  "key24": "3QJyG3EFhYARcycQ4pQwyS7QaQ1avnAAcCkbCW7inuUHKmvzRDCdy8Jxe56QSqPHqUeU3FwAW3kgy2okei3e11oU",
  "key25": "5nusxAWeScbTRMQiULmpvzr69XR3sA9nQ9GpzLE9sg2kNJWKtjg2qEDcoD5efsfwLSpsTuCNMkUKzT1b7QxsrTcX",
  "key26": "4TE6K9DktNhDjFGvEYwTXBdfGpW3YTQbCu8xRAQ8e8e8gnBNEAtzfYpJcpD7Xc397cwVrAsc68gPtNUZ4jPQfc2n",
  "key27": "4XTvD4zNRdKRMtqUu2hEMkGZZT4CjZPuLjTtV2ySFGcT1EUjTHdgsTZUASE72qNY7BW1qnXjVnghKkWpCDEdtv2h",
  "key28": "42punvfw8NibbkFcFLD7LTXPqHaNqo5T2VwjKNoCzEpzESmRMBrn9ggASCqWXt5f9MvnNFkEYzhYVqsoTqxDWpvJ",
  "key29": "5KawR2vkzP6oKKroyB2SfWuYH7xC4YhDxxL9f9T8ychWynznzhpp4LxWcpM8XphVGf4S2PeS4ZJxYmMf5WKpbeN7",
  "key30": "4zJcLZuAdsDbefkoGhtXbmZBAN6eDHP6TWfnjdJPinu3nfCSBQrY2psxaQM8wgiUsyjBVdW6EbNfw57k3xuHS6tj",
  "key31": "2phLZE7Rn98Z8UdRbUdJKXjGkKRnhXJ7uxwapHxsBx3mFX2jnfsSEUPGNGJfkfJcdzUqFu5jwoU2dpQkETffQEu6",
  "key32": "3vebFTQcLjN8kZZWQXKdTiqUBjDM1X5hKcrzJn59Dq7Hc6mA3qUDSAqr7AgzDHVvGdoqSNFA2u5q1yNykXPprywa",
  "key33": "3ADWxg4zkCAK8tsui4VyDSjhR2j73w1JVSAQ1VhcGDag4B7PAaFjA6GZ5zheLY2LE3a3uQ3RoRBEUzW7SpEzt2rv"
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
