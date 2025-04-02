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
    "2YEVRpsPcz6B422Yj3gjZKSxvB6j3hY9hZwbw75pcTgKgtcL8gBa4GaQq2dAXmuEvTCUoNEvjTFfF9F7wGcgVfNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46thnxKYnX3kJqF6Lyz2MkU6ve6oLLstS9VoQntYznbLgfoewhmUi6FCxJa61UEEiHQ2dd4hLH8g4kHspMiM9mfU",
  "key1": "2RoEiTA6rTj2kWPwbAGnxT47W9JvWYFgwLxpHA1Z4VDogM7LoqhSCq2rMmhXGk8zd5W2gRYP3JWZ8ksgsfupEgXE",
  "key2": "5p2CvdoyttpfkhxXSA5Lgbw6Mk2BY4eehyR4znoDgM8vx5J128Q4H72J3CZVwN6Axr5Ke53TrTrNLJhbsL87cx6v",
  "key3": "4y1cnEJ36c8oNVVDQL6DMM5k8e6MdWCQLikv7nLcK74zF6K6AqCmmWmktPi7Y9p1hymdsrMKUZEkG9A3MtvKgi8U",
  "key4": "523pHcQff3mNCkCGHox2VsTAcdiqRCTn5BFTWdWNjZcQb8nBXd7mHRPd92msXJGpGtim6k9kmd3qeL9pWYf2ET16",
  "key5": "MT8sLwcqxnHMeLA9MPDXaEpYmDSzniipeeTTHtWU6MBHjzX8iwutKWsZw3GHviCbATxvF6Wh25BcWxPtXTBFJGM",
  "key6": "2LxsQMJXnCRdGs45P6gKokY1M6YLbamCGBaw88jz71htBnEj2nJL9bbbbYrK52DGNu8z5pvPNQjTMvZGF1LxwPur",
  "key7": "MapvhtrQkcXDuLFTNrXCkDN2yUNrVcMhSSizd5nrJguSjVYYgRGsySkQHyqgaB3qD2w4sQcUTUJ6Wf5YgHb6MiL",
  "key8": "5wXPvsstEi5TLVyfnPRvG2nPTvCjZrsW3x5amrTUEGacWNCeT4w4pH63sPxv21qPYvzfHjjL9kgrpxBRFvsHwCU4",
  "key9": "2EHDx7h1rZ45v6GCLNn5CZtEaxzawXGLMhdo2A5F2XrxHx76HcwefwBCVG5dYkrSkUF1TNcQhmfhcvmsSUbojKgz",
  "key10": "iVebUGCUQrZEhux76umrbFVQJrNGTtL9A5bCbab6b6nZWGJfA3RcecE3KT36zSXDxXE4JL1LWSxcj448WtrcVXk",
  "key11": "56FtybbSSmBQ1LdPA7UMHEd7wqwDWUXBm5ukQYS5ywcfrAQBu9P1diPiL8bhASVekjtYU4Z81aZQWAMNxKDYAGK1",
  "key12": "AGAtyQskVrMF8QtefvaAQto5LyJQXR31p49WegH5QaPcyZ22F2VnGibmWJafy5A3ykAZaHHVAxguxVxDn87BCoL",
  "key13": "4wnRWKiKBbh7yuKPouWVRcj7RdicD7NHKyofGMKTVxJvsTfQVk7Fs1HkYe8McxuXrAU7S4amU56AKC4883S8svjq",
  "key14": "4vSs8vyJXjY8j9oLo1Jekq29in3BAKKf9NgzKCc7cGCRD5TSzpQRhmzqQJFFJ6Qhji2xmmockyRpMsY2JMtrZJys",
  "key15": "iZvvdqkh8Q6F7JUUKptbNMasQDKvFCdkcqawi5Yoto72mJG1KmnxhdbiPP5Y7iZhiZzsj9u77XVrtMJW94CyUTz",
  "key16": "44dM6d2UgScd7AgxjnRzoNRXfitqFv3SYFnFBKZVrTzXkBa7j6wcf5z3yd3a7bfLMTgkKEzByieJK4rE63QGwpeL",
  "key17": "2yrW7CouDfMgLEh3knyqCHaRdJZvSKQ8MESZ3R2gEHkrvnMH2n6VA5z3KYLKt47SYJk7JnoWevNzP782Hu6js452",
  "key18": "2AZ3qV1VP6gpjCgWqJYxGBNAEKyHrzymKN1fxfd64BHk9MXVetwsqqHMVmr47TXGBK1FycvPeCdbVuCHvJhhiTEw",
  "key19": "5ixw4gTivRefXPHQuMX5hjyANsVCJmTQiNhyAm45Q5tTVt23thBDRy4EaZZk15qnADQyVW7nQJFmV4cuau9NSpJY",
  "key20": "3ZDL7Q7G7CSKxFPkbTLYWXbCejMHFe9yWAQDieQZZPbAAuYYMPreNHPqWjXfir4RWyCz5e5cJNUWdobw8u2RdenX",
  "key21": "3XxfeKQnPQsER1eWnYLsuZCSZSB7QR8mzqm6FDrryGrUJuJgmUiiAx6iJ7Mb2GfZkoYXFYZcQ5JGVfYfUaidfDnP",
  "key22": "5guyoVgcNf4fPBgMu4pBwBJbTU3dci7juAsx7VAkt79P5qa7xJS551b5jvHfxDmyGrtKrXeC4oSBJiaJdfXAmZdS",
  "key23": "44wg9VG61jPffqiRmg5tAMELT1CCwHGkpkFDCawbNnQNLKCYzDYJUCqWR5wgSFNNjtNRNVfgZWVoGdfWR66RniPK",
  "key24": "3AHRdhtg4FqTGEMHU4Aqb49e6T7DxituRqzBgPHB2WCZxGt8RojSG5fWmAHLNGFX34mis2jB9fR76tQRzemLqAt8",
  "key25": "2Rz5y26hVKSppPFRMht99UcjwA2XR2CE4D41wkETgRW1uQofeEGKCFym47sezQx8mauUx9xKsECK8HVe24nGfjKm",
  "key26": "3rWNQe9y9hxoKdwSC6AuizzuN4MPnK6iUotD9vcWqGNuKasHzSvdEYi3G7RKuGfxkJnzb7JqtfAQwpxvifvuu8r",
  "key27": "9MtnHe8cRwhorwt7qhFVKGCWNeFbku2ooLyZd7eM2k8AvoDpdNHCHBkShX9jxfAZmh1JGjYbqaXB58VTreGWbqJ",
  "key28": "23BKdFMWrsgTBgKMwYNUbvoHceaQ62BJYrZDegh6oLdWt6ApecYfnNn3T1Gw73vee1Pd98m6254PGnBUWcF4Gmas",
  "key29": "5vR9n8xwWyurEKWdqnZ9htU8kbME8N9EsHSfoE1Z6HgpH11634TKBUfTq5teiSpKdNfUwtJDL5zzv9SQpGkRXjYm",
  "key30": "NDgfFGBrE5Y986p2EhTPiuAKmLzYPA8TMsUivy5m55jec1W55UahnEqcQvfd1exJtasUcqBqx2YLyM5JkBVCRbU",
  "key31": "21SCZezVS35UsCevVLL5LQUcMtMDMrRR3RDaBHB4eDdDYrNdeuga5RLJWDjCEGqGfHVDSC8gqQLApQwuuv5WePUF",
  "key32": "3gHceBACkfGnV7TnPyKJdpWEsQC7XqyDhgD4xvJfYnZ9TP3pxZCzAZYFv45oaRQ3rSML5GqBbqa5vDoYU2nNqouT",
  "key33": "2XbZsFMmmkkdWwhwBPbmKAQCUBd8NAc6wSe8vK5Q3wwYSqc6aLusSK6qchs7TWCschqyUaicVoBRpnwy9hfVpPEj",
  "key34": "478q3bwNYhdsudpUXKQ7PLfGvqG2rEpTAGXeMesAqoXnkSx7ab1csbfR5xHKorLn2BRMaTPoCA1Ca36K5ePraPxQ",
  "key35": "5GRqnSMGHew6EUUaG5CLDfSsbAYJA3xBJQKnmbsQvz9ApwfHyFZvoHSGuV5jCLH8tPcw5ic7KpdjTMUJkxPuHmQW",
  "key36": "5aAkzVesCf7iE5uJsGiHkCHKCrw46FS96veJVswDQtEJ8znXQhW9xCJRsA6vqXkrnMpqiCt33VyggHFbpD83vQ9s",
  "key37": "aFQpDFrAsvBFptqGaR4FpbikTSYrPu2BG1YS39ofLrMvdA9vMdKKF1T6WMHBSZMFd2AVV2UNYu8b22AoegNMLY5",
  "key38": "36rSLFVJbvrNC1ZeNFmfp15ftYF4nreF6fkoAjQba2F1hjzXs9eKEYyHf2WyrHxRxMtKE9LgryDW4dMa3aUaJMyf",
  "key39": "2LQPqTY5Vzz9r5NNcoqJi31P1HgPqAcexCNyahLXZgYVVsDqdWgpeAxbcqeu5gJJqRUwonnV6hJeahLp6mnkxdK5",
  "key40": "VV4rwEndZeQjx1E1rLFNGknvGaD53uDZwbLNKZNbKBhGamowLRvVjWeZpUmpuw9pV7kgQEqDkcduh4QNQwrBYQm",
  "key41": "4eoNCbpyF4Zo2YQTApNiAQQgV7WQ8BuzcMdkpZeztmN5tjPKWUyH31XKvL7d9nr8uBDBJTdPZ4qN2NnwvKWZHHHr",
  "key42": "3kgtvxCDxRk5c7HdyKZgB45AAqSGTzjKeM65fDoge6zHwyKTbg3qf2DcwXQmKSpLNLyd14nu5Tbu5q7tCa5Saost",
  "key43": "2UN3vYkbxe3xwrpXCPtt3vHoHLX8u2kg7VpmDD3Tu2iVpaZYm5vQ5SryPrn3wJ274wn5kJRKBGWJNm2eXqVdZ5ME",
  "key44": "3h6krmuLsB9hYTpgdtU3in1HgCzRkfKozrDEicKPZcDhf2h3YciPnbrByYnib7dumvTNLamETAX9Scmb9eBb1x5A",
  "key45": "YXek9oAKXa3fLdnTBzPvKCyw3Rdz1T2MNKehxx93SjUSt5SJFUa8hfTyYjo99RLddNKvfty5ju5CpWQuAtT29TW",
  "key46": "x1HiGxzwtneJgSLjp6gh6i81RUQXSZ3B6BrtLZ4VTDEgh7YmSRVuSAJiVM1aLgnccimMgBzo9dnvqLWmw7Hb385"
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
