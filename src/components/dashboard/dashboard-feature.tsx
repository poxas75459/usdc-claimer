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
    "2dx375g1UYuiUbMNxAYzQ7tuNtuK78dH2gnnCkb1FG7hPwt7h8uadyrTypM91K8ZUnkTjxGffAH3KPQ3BiKCmYZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LCeEW3f1cVBVZY9nuCppzvUncx2zjCQPUjtqaFVyVf6yoTBpHFYwpaWvwfJrfhCdD6m6yzAwtgZv21x8kKm49BF",
  "key1": "5pFCP6GsnLJmASCktJ5ajFKhRf7zgUWAuScps7Qi34T2vn25szWhnJLnH1Wa3rEVp7N2KhTNaK3mS1K8eJyWV1Fi",
  "key2": "5z5uELyJEhMBsqg7U76sSntjMNJskVnzBdExs5TuPZZ3NtYzWbJ727ey1PjChr4Y73Kj2TE35CBSPeJ4GEu2a5m8",
  "key3": "1Nz6QusddStnLvu5nZTcdUD3aYUr2C2shJzdmLoMwEFZ5MyTeHnCqwu6T9PmoFuEvKbTCVE4tDMgms2Yw2dfWbx",
  "key4": "ze9pSWdpM7ZzSL7QHESGaksHV77MvDHfqGD6syA8e5yG8uiLEHHKYt7CPsDuXe46ZhrrnkNRYm9pxJjsGczHdrW",
  "key5": "2j5y93xARfGd4EhMomK7tENFsMgVURTboMo1fv6esfUkYc1D3yFDTqwSdF1snBDYzsDkjzikPBc7Y6x8QEWBjYnx",
  "key6": "5ePSgEwQQSf5nGHNoDwG7b9Ao7T5AVnAwjYfjeon6Ptuus2v89ERQKHBQNbamYLfmt8bVCPFo2eZb8Me6ajjr6hx",
  "key7": "5aaj6z6aqNfEnFn72xxS5n4AUPTXGUF5oPxwR1T82YsbVYPsHFqHneukHJS2SQTtPuqouxyZ5sfd3c3G1kGwoYRH",
  "key8": "5Bth34LC274cbyieNPZMdqCQ2TfrXnPpjiAaePfXwFp3U5LW5AhjxagLUsnvxK121QLHfdRdJ5CYCLhN95Qdi9Fm",
  "key9": "4kMzhpKfyB3vAhDgEX4ASnRNLdLiEugZ1pnpuGSK8RzSQ3D1GBrgQCyAnB3U5q2iQ49y6DLsnjCh5Qyd6K6NTjQJ",
  "key10": "3APLxQmG9EjpzpPCdXGnvL98NQGQ6YH1xgSBfUaqAQxrwrG6aEFUNrLpevLggLS7STScug2vYTuTrayUsC77T2oi",
  "key11": "5DDeJKwsL71bb3HfCukpi5qoZshApnR6ZsV3AHzv6BWL88KLDJTCwRGFxi1to8v4a7wNQPTMbeL945niJG69aDjU",
  "key12": "33w9eR7F4UeBW2YWSkKCViYmm3eMVF6mgc64Aok2N4yZGdriCuY2apGmMWKSzfvZDigX5AUeArJZ9XxFfoq7YYCZ",
  "key13": "3eMwsjrMd7SDVw5kui7cbHCst2AvqrHqQ5kY7aNmtycRft5C9URXEsFqMx5t9c5aySqpjdWE9uXuE6QwEBMCyWyz",
  "key14": "4thuUzMvW4o9fSaV4KwXhfsduWu5ck5Rr6ShNoMht1yA2W3734VM5RVbQN2YeWr8RDTKh42qHYR1y56v33A1We6S",
  "key15": "3WsL1G9pgNgXr6ZRm5jAYv8DZoBBDqECHmjrhFcS3Fz8aLBrqjmQuJVBzYPPQXd2Ra6VjbQiYHUCER9ZyY6QxHR8",
  "key16": "4S2GxL1LHXabn5Bvu2Micvwe5yshvb7TF2Byuydrh6rfsmejVss3Aza5GzRGd3wQLWpUHszA6mrVMonooLkJYxu4",
  "key17": "C37XcAGoJJd7xdFbKXBqG6idVbnFTjwKKs53CB7XbdvzhLqCeNkbeWVg9P2XHNVtQL6EyCMmhuijnGGwhD2MBcx",
  "key18": "3F2oNoGrfp85wVhmzgyiYQCd6JKtbgVmiPfd6XPBkZSxRvpQQsXnG3E1mfpv194J7snFuQznA6Q52KwxrFxSbFwe",
  "key19": "34BUGvhMvN8pVpaRsP9EnJG8tp3mLRFdLp5aEVdS52BPYnYRVDLcqgGn9ce1BmDEH2Zc9fN2SZUtfEricCYEL2Ye",
  "key20": "2aZUQYEq3Gi5sdce6yafGQacSeCGgTrcdTf1mPYNZY5yxnSKzUdCtNUqFtyLkvndMFkRW5rDStWJ4iXsVML1bxNP",
  "key21": "3iWqpr9MBfvdthMVTVtyW7mZMr7H2wXotLvUCspm6TtGpvnBa15uui1p97A5puidQ1uRpMpa76HBvASsEjEBHMuu",
  "key22": "3LN3R7HPeVbLuqd9YzCJHXEgdKrjFcSkCwHb5EbB1zZiGWRvZ98osLHxrsq95AxtnAKwS8QMuDwhs1xe7iici5oh",
  "key23": "2mn7RB2zjTNqs6Kx6w3KGXsSTgHcwRjCrSQd2GDhuiUAxgthaHfieXioLE5dPsqyeUWwBkMT2LZieSkHTuPSJS9D",
  "key24": "54YmEHhrLfYoLeG3no34iToLrMe8s5pG754nrdu36LuR6E3WSbjKbtnP6vio5uveFquhLmErGWFCM82G5KGTxGqk",
  "key25": "2ep82LT1uoqUZYdkBVF37wQBGvT8k7XqZxJDrHLkvVunGbpFBNUbZjMKJcmCdCDRcYs6vND3cKadHgahgJAHKTmf",
  "key26": "2A1e4hmxMbSFnKKdAisUcQSZK6tUbxQHMLn87SwXsi5Nupx7SfNrLgxZXyyebBt66DnQbi377nvyBQS9QD33tm6X",
  "key27": "WiG4qv5BTyPdws8t4Ruqi9dBn8YNcALsBj4MqPsLn9obX65tWdkRUMjCQZYeHWsV74XAH1465DTt5S36scH5VnP",
  "key28": "39XbmgVYuHNMbaH2fJ5McE6sDZcG7H8GnqjJGmf1v3Q8idvrTDc5vHeSwg5UzAJbKyAnkiVowbu5qhK5GULHPXqz",
  "key29": "5pCsPfBNdPAsVJfcQJ21DWcxdDVuGpGVA82Q5WAFUevEUkrt8BugJrxzqBRpGqH7DNRfggbGRtAqPJeviZRWv55Q",
  "key30": "3cH4FnP35JzMKS6EQkEg5Wp8eghDJkDtNrppnmEbhQ57bwmYa7cwp9M5wcyNFM27CQU1R89nbjaqgFKtny33LdxW",
  "key31": "26k6exKsSDf9PHXLGbG8b257RkeSSAiCLkYNEq1qqXwk6TPtCuyQsKxwhg5t9jL2UHdnFGDhjvMWzEtmLbtbJTP9",
  "key32": "3twjcRwWTiQhuqUhSiwrwrQrsjHuMvfSJ6W2toaicdR7C1T7q8zsPAahVrLHVngZNYcWfmji6nfBnaSZ5rrjjnxD",
  "key33": "4p2jDV9udgYsnFzz7xGdmvCC8MaTZ71nKGJyAhg9Mf2nvx4TpUMDhY9Y5ZTh4SHV69cMT2XuYrLPTJbepcfe2jBq",
  "key34": "2krL9A3t95sBqPatgwuih7UrzJZVjkZoETVkgxu8hSx5StUVVQ4Sqy4CzVmvWmg5pFngwgvu7PJBjvc48dsHvtf9",
  "key35": "2t82T9K1eSyn9UisbkSkxwk9qF9wPdz6CPKjoYyvjcHQyvvrZnDy66uebgBNkEBS1GYLJhi6fryzjKGcoCxcSxkW",
  "key36": "ntWFEwe6rnZUxA3hkjQVc4QCsiv1hQw9P5MnXvos4bmbXqMoViRU1rAUAtydWyyT6RHtF8uHtcuN6STu4DgKB7U",
  "key37": "r85eRn7HF5Uke7bTVGiCF6UKg2dN6KrKvs4Z5GYf74ZAci5jHpgEfj5eiqwP8uuTPKDsuprpTE5jYgBekfBUujG",
  "key38": "VvcdQADvU92cqM47xK2ZBYMmzE7xwU9DRyyR7a5W1bzMQDdBvBaoGBDAXZpT19oU65bAbsJYzi1Nj2EKj39QE3p",
  "key39": "45boQWU1m6j6C1akZjHzkUsxP84HKqr2V8ru1tWhzt5FAtmvWmjj3yoy31tePEU3GZfAujK2yFZrNfc1ARxJyzeQ",
  "key40": "5qksgj7wkTV8S4X1rqx5eMq7xFSG8FSFqyMLGoaX9qdeALDLaEaixLTL1eAmhnHut9oE2TkJ5M4PNyVQ2Y8YzaZ9",
  "key41": "5BqmA2YLW2KuEdPc38MX2Lo7o6ef6VUe1b9hQfxbNaKAENqpDVzPUVGr6MgVWcDRvTXektop3zVQN1y8xuhkkNHW",
  "key42": "uu7R4LYmR39cVLcDz1GEXfaHLNFuJWKPNFqmKBv6yYc3ZUpd18PBoN685bCNdSGEGNKsr6gZ8Y8UWXiCxtBEFUZ",
  "key43": "oh7zpfHQEzectDq5y4LUuBsKhHdDNiNCSbfm9cDS6PCKhG7F5J8a2JirRTAsCvLJFHARrLikBqWgFbegi6G7SYV",
  "key44": "5KNzfwHmRrJ7TLwK71NTQGmnXgBvHrYFA3T7Q93m15DMdsi51kcjm5fft3odpUx6EuCj2KCg7kYCMqkp4aQQxMDU",
  "key45": "2ZqHQ4vdtpjMwH9ZZrKpRJj2MyifZ5FAfEyeBB5Zg56pSd823FjygojuSv6viiN6kSSwJb37YcGoBnUMYtEP1bLP",
  "key46": "bHztiZu628vxeQVYMsGDJeqk4NPbJmjHjchtXmCCvbBc5gE68DKF47KY98CynpFZ7KKsKtbJd1BtVxbnfB6juTE",
  "key47": "zSJGpKy6ogpGGsBkcH9WRNUU4N1uShi4p1ndrzWC6QEV2iUTNrqXd8aPvUJbQ4pTLhKntekLsTd27XNkVJ5bNby",
  "key48": "63eQHucP16WMXSXYf4i8pVRY2WBYtNtuiEYFKXjLCsZhVwuTjWQQ3baaCU28x5RHiLQpsv66sB7havABZ4zKeR6Z"
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
