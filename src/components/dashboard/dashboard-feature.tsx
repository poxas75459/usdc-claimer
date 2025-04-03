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
    "2xuzC9Q3aPAWC7j3QqPnrw9X5FjrT9t3sHeV6BpjSySsHKy8mTMCfH5kocpb81kpnQHEiEDu8GJycJ4EBzS3suL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xGXmfFnYuGspdcxfGSavShoLvioHosb3fPTKF2hrPMSRfiBgkbQmd9JYqYcB49ExXEMcCTJa8gmKsZqFbKNCA21",
  "key1": "usQ1evgBnERrx8PSmMacAsifrWoVowpQqSSq12mpgSnbyJ1XgyYtsPpYTT4Ku3NFPKkcSCBYTW3igTnXiMjgLyV",
  "key2": "5Ljg6KSrM563rqMHEHXfRMrWfTxsiokkQeWt4y549TpTVNfJJFzHRzz9TAr4eaDfkB3vdaK9WkGugXA5xm7FuN2g",
  "key3": "ohtN6jXsmNqvmf7Hz5F477RwFRFEBeUW9Qrm52jFcGMyUfKsndFbUMR1u7NQECuKYBV7SApKEBBTZdba3JYSdQV",
  "key4": "nCTtZPFZHosq7wna1KDVpj3cznqu2fa6ym9WgKLC2ng3mHoErM45JkATgbgKGHnvbL3KYfaQbcYqd771b8SpHoL",
  "key5": "5csUSwM3BBWu9wJPUJQbeaBd9k3bx6zSRSJ9zjKBWAjbzUxj128RuSVrAChrPfgJXyueTy4KCpriptVTobndVe7U",
  "key6": "4FXrtLrCj3MXGDHJdXxSCkqhgDSivSvHi5XtDS47GTbR5mRcyweAtu8xhb8PEJkM3utWjWw1wSb15dwD6duggyye",
  "key7": "4UZ4UkngzWkKD7dTSGqAjegFE5B5DsmnnaQZQMrSPPs3sYCHhNRKYnPGjt5D8dSZc1trKE7FeNnfFsGrdC9AaKGN",
  "key8": "4HRNYwyZvZvdHRwvnnxTf2RmHTSw3yckcRUSyuYJ9N85FFFzAHKREzB88P8tzxaMmWsFaT1e1PaY9FasLseiUAtG",
  "key9": "4Sm9YSs8buwrG3ud5GZ6eFGHwLKSL3RumUu4r16A5AT3E5BbVgRgzfaAx5KBxmZ4rCW418K5g5uKWBzCT37fXEHN",
  "key10": "2Hx9Gcj2kxNoPozp6gvyqwmPZc9SGjSR8QRA18JdaFF8mP74NbLgGtimwyimS9kUJ6njdbQM8e52hQCYHynQ7wds",
  "key11": "4XS1L42kizyZGkpv7dZVpTPbA3soAt2tPuSkcdnoT7sfK4HCt1xLeDbAghsvebhdwVjR5GUEYXshSyvoAkHUxwje",
  "key12": "2qtNh5vQYkZadJpiCxH6o3J6d2wB4HF81aauBsq6vB3EcsvsmH2JTchhHjjdaTMKaiQGYiYAbgZ8sYwoPW8DBESA",
  "key13": "4p1A2WwUx8xSjXF1U3rcAZL3eumVnpUXfaJqEw7ULRELgZ6ULhb1gtHBDVXrbevN5PC1jtBkXCNwmbL9uauRWGcL",
  "key14": "9a5cwE4k8sPPr5Spx5NwAfd1yXZ35azgscJPUthaRbtQ5xEouhymK7cFQ7eLnXkLwqSmojVZ7r4fwNJvDVaiEtn",
  "key15": "3hB9Z1CtSKu1gFHYPgYfkygnvD2vjFSgWrLL7NeMnSdR9LnMPTzUDgBxj8A969YHLNHnMGV7J7CzHWV3KkbverwB",
  "key16": "4THKgcPUxuMfc2VzH1vDFDfY1f3qYMkucTQPTozyMxQbz3igHWwz2sE68DQohp7yWMmhVvA8zZAfC1tRtvJTxhan",
  "key17": "2sJTm6XsTgyrpjZCshVsA1FmVZmLvSx54o1HBVL4nKN1F62tqbBzLzHTDCr1PpkrPcPjeKjxTQLXokwAteTrRTHA",
  "key18": "2fcu4hH9z85SMvVVGhhGE1mexzUTqC9PcnJBsZTDz5jeu8wuzSeYRFYo59TxeSndFTXhPJV5DCQLYW5fzcwsxkL4",
  "key19": "LWtpFUgbxGvDLFtii9LntDq7ZRm9yK8MU7PqfTsqnVScyemt6eqbUJwkh8RPRsmzSpSVhVG9P71a4TMFamyszE6",
  "key20": "3z85ZBQRezUd5n5aKCqAFQetVbzUKkpeWBBCvJ5FGXRTxDZt9kMHiYhCRhCHKXF5cZjYH2AA7QVkyK4ubC8zQTF8",
  "key21": "5akRDHSXJNzNdVyDC7ZSXtrBPXmzqYfs1DPJWu3W7npFh2hQHYnwXSRhJp7nNKBpsos5FgH9ugd96y29jvfa5uxu",
  "key22": "2Mb3yWzP3SYofT7c3U1gsEc8XUUzfXMCzGeYc5Bn7aBAYKb5sEh13AvW975zTKTHNq4zw9vNVPDrq2rVXKmfSJVA",
  "key23": "2BxMFzEb58nqUEbZaHTVFH4SY7kMYZwcA36h3Ki3SXbxAHmDRS6U3th3RsBYFwBnut8X46wKie2DnTnWxdwE8px7",
  "key24": "3JYfPKQAL9ePM3fi2GcSFEuSS2tDLQnAuRbxYmTNqxeom45UU15NGHafqhBLieHNLinYomRhcBA4Zn79oj7pw2nw",
  "key25": "5Hz9pwgQys7pmhH2kf4vhvQoKHynnZyNq14TUxfbb3VYpFQ8xbcBzVUQLFgab6bxgWs7G5sxR2AgV8BunGMxQsJX",
  "key26": "3hnW7H4ukdYbEx81MBF3YtHEKh5UvrTmoYeHjEdVMVJ8CB3Mu7DPxf5aMoaaf9KjdnjN7h1GevE1e4u1NY3mAVgt",
  "key27": "2jvVXzj4qwRVWnX7GbiDyeX9nK448MAgDhC4e5Anh8NcNwQL2HZRwRbZAgppgxXk7HmACSpVrghvmQSXibiBi5fc",
  "key28": "4UcHeYdnBfeeRxbuEjmEVM4feyF3ou2ia6X1zDgb3wG8Yb6G8cY9kUYfkqZSheRzYAdExyqwmXzcR9YLpVU9KhpZ",
  "key29": "4XmUnMcuHMZMTgDmSpxRjZA3QJh4vjSpbPY3Ds7dmd3z1v1pbVRV5qCXHnm3urbWjUtK3pwXRVdjp4ApTQSpr5yt",
  "key30": "5tZDXBQJ2gvkX9z5bXuisYdGMTCapzCeiQRMtKaL4wNNWEjD6F8LVtR9qvAy1sQQCFS9fcEuTL9JKP7RLKF2G96p",
  "key31": "kJJTreSMdxQSFXhhybz4CF3oM7iMwLXpozVrxgRmXKccc2MjkeYayJJuguYPgUHN4PjWzERGC66TEhJqHQvERnM",
  "key32": "2nQVHJpSRbJJtwsQC5ADaLnraLQYBQ4wUPAz9HK61ocoLEFbXsx6sjcVcg5vRKKr7YYWpLs8MY8vYpmdHyujpPpY",
  "key33": "jcLV2aXZ2wUkTP86idqtKXZc1JwpVnSGWc5EyDoqC7jx93yZV55eGhueyJJXNTPwNgEa8gVZVjsV4jJKnPRJmyn",
  "key34": "j14WkkiBf5otthyoufAQrUpCgdkWkG98umAbd7EYxmHjcfi2h4f23iYYyC7Hm8E7mzYU3U9pjQNoqbK9sqZET6D",
  "key35": "iLtiXsqijC9FcHzpPhGfmbYA1zyvk6Hft9bttZiAswYM9hNDkLk2sFRcnxESBFqJKUdjDJj3RERBiKRX8ugSKDt",
  "key36": "5Xckp8auzFc3oDKVVQQaoHTqAFDvLFJph3ojy51nDetwPvdqqdhVbWrRvE9qFogGS4GfQK9w1mPP17z2izXdqWJ4",
  "key37": "5F9BFHWb2ZvJCKA2CavzmA6Fffy69jvxm16Kxur9DQjbJPmPRw8dFJ8Nazu5CrG42yB3XpSqCLh5aspnehB93MDt",
  "key38": "54vAuX1LgHfcXZ8dzz6SYhu9XzW1tGiTzMC36cR5RRBFNevDoji563ZQpDxdEQonrYJ2A2KHXTHBARaWeKaAMMrw",
  "key39": "4ReC4m8owTn9vjphcpFVLepNzzBP8aKbWfunioFbizd2W6Rn89AfwQgLtMkwACZtPrC8PgVJt6aqZZfqXNMhNmtm",
  "key40": "3BKfvy8G7cv54BgK9sF3oUvg7pSrSQM3wZge2AoMxeBzN74yt2F8EBnSnnhxCSz8xFbKrMPiruHbPPigN9t8Zbay",
  "key41": "5FTvXJzQXmQZCDB8ybRQQry5Qo1xpLc9XC6372NHD7Y5eZHGCtKSzihTqjLJYRkcCJkVR94gMv9sxxBJQLHTCyex",
  "key42": "5zyZq324gwFPeoyttd3rNzNVCuQRDFy2max6ru5oouaLpaGiJTQfvAbzn1sQ8AepXWLuwBiCJVkB9SK7CAabZnsV",
  "key43": "3QstnUS8Neiich8ktAYU3nmPNSmM37WMKkkuVYKpH8U2EvM8zApnAKts3uYz9uvW7oZ2KJqLUkJzymDtXBZWJtcd",
  "key44": "zbF3A9ktd9p8aaH5tq1CGtoLMZKGd46Px4awxnHTEK9nMVG8t8LUrJ7uyFKGfH1S88JCkKmRgdG3XZt8FTTXqxd",
  "key45": "4zkqaaRdsHAyXoKRgNwwUihjLiAoQGB5WZM4TA5EMJcxs7hBukda9JCAkUzCFXsSCDTvfuUbjTrPnoKBXmqhZ2cH",
  "key46": "5tnLTufvRKnCXeQp1zSkN4pYU76ZAdpFdXpBRGCvg4aerfb3GvN3omAJYAkyRNjeP6PwPdinAhdcneBqq86by4VJ",
  "key47": "eWJpufSnbZ8pA2k12x1beyPMjxpXts55y2SXhv2LRVM3BGYtQSUTkQBtEwCw5dghpfxpN1uZTvq2SfVA84LX2gi",
  "key48": "Ya8rQtpQjBarsxS95vZ3kGtUChzh9RmzcK3anwg2WQagzMgJLFB1SY8n6HM6UVQWrggKNsq43FHRzZzTZGTM6qq",
  "key49": "4s9fCknpuaKCHNb7ELWSmtVbPcGvvVY51qh6VwL3Vuwc1RdmnRDxaH1vbtRcoH2Hy2Bn2YC4Q5wfPPcQLWe9Ehex"
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
