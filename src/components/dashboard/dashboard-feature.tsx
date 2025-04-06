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
    "2ztfyU1uhD2xtg73Svyx3Y7Ci6J1u8oYGjSZ3NG6kgiDsk9hviNPtWtwbC1D6AEUYiRgpCndjVri7VbNGDx4eiG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qJ7sQY7eqBtqdQYpzoT1xHecomsbefqhzJo52cAXQX1mkqR9ssRrwYDy4g7yp6awXTQnkveMCTgGZcyjNHAvyx5",
  "key1": "wMmLb4gWgKZfb93bV69uJEaZHfCi66d9kQpCnaW6PgYTgjwStGZwz18TGmq12pQPrVZzb6AhfzYkfM6p51E78Wo",
  "key2": "5SJedbzWzXhfrR8rY3V8KzNvEfH9JJ348fkTijTc5cukBcyvTDuhMyprtzneaHEUoz9sHzz3iKsyuBpeJGp6rsUo",
  "key3": "5ttBkZPxFQA1F6YX5iFhooHvdWJTXHUsrNtVUbycarcRcdjTARataqsTb4fz9PjDygnpvrX9LYGUVYLNU8MvQeKN",
  "key4": "26cmBU8bKvbWYusehFFP4gfm8W8tJUtiYqVjoxL8iSdaknveBXKwYK7QKejcL6wmdpSzgQMiqkZ96jVw23LBvKAo",
  "key5": "3RPJYJG1PZGtA6g7h64VNwudC3dkaQ9zjx6JRrSDZs4nfqv8DFbMQjWJ8r5Y4p8pY7oQdn4HD845AJXH4drqsjk2",
  "key6": "21DaucFUHEjtZMTmRE4ma5JCpV9E2yL1DfB5Kar9wbf4ASkQHw9ngX7xr6nw3Zs3qGTw7LepEd4Hunxgs8SUYLW5",
  "key7": "32rRD13kqGgGpTSj96dcWr38iKN4mzoP744mGqRcDHCXt2bTrQzinnEnVN7o3U1Ke3cE23Yh8vak452bBWPR7x7V",
  "key8": "RQUeo27LAEm8Wp6kXHjeoDPiCWCqJq8kSYZyQPhyhDGdGyAz59nhzmXmC8AB4ML9ufb266qhHqyprDLXEFoua6F",
  "key9": "3na7U5MfPtEJjsyfbTwBiLfDmwpNCLN7Uo3B57XwW7njrWMysqLPg32qfsR5fr9RiT4Uw1fqriBqYt1PykM33Wty",
  "key10": "igSbfzbAPTShGjdqoKqqeoFSDfRrWfvaRsXgfHShyLQhba2RS889hA16cXQuDiNirTXdLkGhaYfeieLn1H25dns",
  "key11": "2ZhFe9SjdKW5DZyDhp3HRAcX8Zgv4B3R4JzU5iywXoprJfNFFe48Ghypmtp2ot8Qf6E1r4Rb8QAZDb8ZMMRm2Nm6",
  "key12": "3j2gp2ALXUCrfAVe456V8wvNiQVxAUS3LjrHpUuJQ5Ysu1tc19g9gQPX31cifnYkFGMzEtRHEvh7JdvSHnbv8YAJ",
  "key13": "3gxrhyco2UpvPq1yjwqpUzbP7Ccaq3mnG6pTa84syVu7s5gMxu5zTq53NNDo2AFw6DDUd1piRpscEoWTexogsPv1",
  "key14": "57tBL1roBLGhrKsCG7v77cwAHHozEPiBaxSRANhvWiNZSjQSsBunxqZh2m9YwGFaBGKvhrXuFHMBu4YPGRXpzWWC",
  "key15": "5jQwwQzGpsWaLmTpbahhJmXAqg9LmwkJyC6iHnxyxA74zDkffwYLy9YxnApv12in6DVLSWqioCWobhunTso29BKd",
  "key16": "5Y7dJkwwFcmH2xpWA4kK6EjY9YEWvDPr7oCdNpVPmr6LVS3oz55HmofSefEG1aGS2ncyhBXsHuEZUqNT43TZyfqd",
  "key17": "5fmnoR4o4z7NdF1mxjjEaTTiS7sdcBMwMcoFHx4cuJAMQNJjWtXJA6RVDERXEPQtT1ESpnJcQ8UPMegwBDWFVQs3",
  "key18": "3qQxNMo682Hv9PCXT2QtheLYp8vm2ZFuVxyQK4u3Zj2d4Z2cZknT7g8wUjgxSdzkn7PjYVb7aZocbt6djZx97D5k",
  "key19": "2UWvTFMGc8ebAERDL6VEyAyQXmmRpeUF2Y3erLcVvrn1PxmJKYzSABsE4eKCxAmmwmLVgi292aaQXaQe6YT6pd4j",
  "key20": "4MzbYTTvZ4ajk2CnY8aJFji6KM3fg1K2xAzbrYMCYqbhYurExZrYvK985mn5yXi4HtKm38fYpkLugXQ5XVBiAakd",
  "key21": "24BHLDgGvWXj533WpGx8rzHHWmkZ9vgkj31uzC3GHFACMSbyVMy1r9WLv8PqquFz2PaBCFipZ8iKqtU2jbqEursF",
  "key22": "23CP9ENi626yShgSc2ZvVebLoaHkG9e5tFu9fJsdpfqiK9LPyDdNJAjH9WwyGohvMNy12hF6bjGGT866NNqQso51",
  "key23": "3xMvj3KEhyS2TZADYSqn8dUqGK4kxtqzun1Kf5r2YUdEyb7t7ayprxH3ewqtFg8bmtWG5Uo33jkC71X5XkJ7btKp",
  "key24": "26Ad9iR2bZ3f5YtMvSwCtq5wrNL47ScSsXoKhTrsQtbLfiPkQa2dJUkHhrzcDsJJeKPydPBAKnS3ukAL59Qufw6s",
  "key25": "CpKj8H1cpzoUJBGD2PA2nfgKywdmRCCFuzbRnf9eJPoDR8XprmGtsCVRHEiLNxz1TGHCBx68E6M3QL8Yxg4647z",
  "key26": "GTtDgbJvzVz5vjjuBhuwaBRYfHeixTQVDLrL5FQQbBWimH468fcbL3pF9UtueLzTZ3XmKYYFkRJzCC3L4kK11nk",
  "key27": "2gedDa21ZetKBEdiz7sek1f14LuWTcu3pKkCAN7QrASvBYnJYa49A6JGqF7cuqLhPEAvoXTYVcwuxD1pMGP9Zg4z",
  "key28": "5c9BCMCLdNizgxsMgMGNnRpuZ9WwukYBX3pMCaMywNYpfjkS6oEhUB2uGtyyJu19EghYpu48DNv1dBgZ4xSTeEWR",
  "key29": "3DXrC4X261QTLc8SuPqs3WYJdx5HpZ1B1HbhpJ7RA2tK9ACb38DmGeyoZZvRBkyWGGaWTVvDc3x3czi3Xjb8PVHR",
  "key30": "G3ZoDvwPLgqZi3frfxCJkxUC7mcWwm6VS4Sv5aggfQmncMitcwrC7d5UGP8WqSBCF2bD6hBAjpDHJepkVx2jCz4",
  "key31": "3bQrh67uPDM4qg27Ep277fHRucDEZSMFELGEzHYVSkXu5V8kDpHgD6Cf1mqt7Jo7DWxb5ocYGoGC3QPpBskiXvzn",
  "key32": "4bJaqAo9SUwes6uAYDMt2pATcQVT9UhWT1BthygcspvXv5s1jptTDbJwkioeSWo3uEuxRufjN9VJ1BuvhuHAiGJo",
  "key33": "jd2G3rCJR88QhyBFE6J9eqNcaMbGgfSoU1nKHQ69obhWwFTx1ewWJBSos8VGAXBrTg2cSNQGeKA8vZd4CB2DHjL",
  "key34": "5BfDuLi8VnzEMogydsrtZi8zB1W1u3TpEVDjv1JTCEQouP47ME4p6gZWT7n9mhj8TYe6vpuPmpqyKj8YMemQwr2D",
  "key35": "45njRnfv2Mn2ivRveA4FdKfYAMyoNBSfxY1G26sBsCX3oEdPTcDHmzyES3QdpTMg9qtePaWhaDDtDgrjLGMtF4uX",
  "key36": "5sV2frKoftZj1uzv9vDCG2N6KPLam5nQ78jC15UcYwZR2zthMwZbTtqCtnWzFV3XRv6mMmxhs6eD1asiL7EWU9S9",
  "key37": "5CGTLWiNzD27WAo9Xori8J2VggxShqMX8ypbVitQwh8PDoVUMayY9Xo5k8vpe4X5t1ypbrj1FLERxruECLChEqpN"
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
