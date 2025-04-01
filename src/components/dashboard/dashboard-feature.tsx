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
    "5nFWfZhqFRdgSaTyDaXgdBrKhqDxu8g8dPngQQCt45SDh5m5Lmbub9F64iRHe2o56nmoMKALWcS4cF7UHqFB8fXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fCmX9B6icPpwJYX3toSTXYcDy49rXo6ryrX5F4nYsMWX3JxFxfd4CA7LNratzJT7MiCyKj3LkxzDbkVuL3iGXFz",
  "key1": "2KjnVAYVMegJtUpEZzR5bRDHrdFBjQyA91vCod8ZJ8Px8bYFd5feTvuUwuC8dxp7JmTJk88zgmwrX4Q8twpbrbe9",
  "key2": "233vRyUmtTzkzLNtFxmmNwdVt9GraaZiPZaitv1ooTu2hFnJhaUtdLemnCazB83cP32rVpfdKT7z8hJaSeNsThoZ",
  "key3": "37PEYDW4TGJvcQ4S31CoycYvTpH58JMShCSPhK2jwoUMXAvSVekh8G5F4478uNurx3rmGNGt8jm5M3McvdyzedFp",
  "key4": "3q9tJj3dTzLwYLCjYfHCtNkgX7pYiNot57EVgnkLU6juGJarTk8UZua1waDb71mvQ2obmCCGK1hCy1uYQxsTwWtg",
  "key5": "5PKQD5HYoG3Ltc5RuNafBXm8BrEn3AQgsX5H9wDnLwu64cWyQcQt2iF4vByaDj7zDAbjD5UmhsqR54YNCE1PiLYF",
  "key6": "448D4Nag2FmAJawnJZHTgVQydzhRyNMtsjHTDftsbbbWgn9JBto7pbZzHp3pUjDacdGCQ5qXoQzjoJJvpmVEAdZJ",
  "key7": "5VDVx2XDGs6KUiZKNE6gAvvgsWryhV8L1F4PWiGnJBboeaHBHwdHm4PtTrc5MfSJjeY6YGjfRqGTiC2W2v3azZ53",
  "key8": "P7kdYvChengWanEiFQDjaTprd8n59mksvGoW4sKUKZD4Vqg1PFGm66tmuzkeSfwL9nytpkNdgbci9yajPS7aeRx",
  "key9": "3nmj6cELxk3MEaTqsrhLTvEJqxqiKzZRd7iS4N23KgMRZ7mrnNV8uZRUGpy2X4kTnhYs5MfdXTwqZgK6HoxA9rvq",
  "key10": "3gmtvkh8EiuHcEN3taiUqrDqA6Sq7WBps7zoTpZeDzD4WVb8wkypL935qsDF9FveCDRBCL7uufpf2wypNeXnazXm",
  "key11": "53pbCEawNq2ECnjJCrGWZfK585WcR6VakdBQzrmphgDCmxcLoycf6cGts9iw2v2AqQycpUgiHKU8ct9urw78UHAE",
  "key12": "3QWuBY6j2F6wPXJvDNv5jZvDJoiUMYk7zyazvFQBQuJgiNJmyjrXSmz2KPr4TYTPy2bpgMbpG6DcoEuoRdbxV3pF",
  "key13": "2PeyBxGVJ2Prt4SMdfcidJNBMm4QAE7JYjoDP6tfqArRSkJB5JZn3CnxDPHD9fL9VWZokWNccZdJCJq5CSGU4Y3b",
  "key14": "5oLgQZpCkJLsUvq5fnWf87DqE5YXdfuUPuarQe8xtzxMazp58PESXisRSeGbMDJLaHyTgjNg7PSzoiiT2ZM34qFo",
  "key15": "3T1f9PMqeCXjgcMGeTo5bsMx3YcqQ6nLtnskJkS7EkwNZjsZyyT94eBEuBGV69RDhHVVKpFeXtKK54294Wg2KVKq",
  "key16": "vBV7u6BwcfWJXwJ5L2TMiPchJQinvP5zKRXDNoDHwn3amK9MvE2aVqwSLNkcpqACXJbwPcoqZ8ajdP7FgQwHo8m",
  "key17": "5wQhn3c2YHzhDhFs6FxZbprZoedLb5mgvMuok2Fpw2F7QzGrgbDHkJH59KVkneDfD6vmUaVG2QxyaEn3vVR3MnwU",
  "key18": "3UBRxihKAwwkX7xv513EFuZte9vZRqzRW41J1hL3h7zK8pSkFkvSTftnJzAJwTWm6k6bVUQwJpbk6EcXEi7yXftL",
  "key19": "o7SdtTgHpAR94Ljnw7tbSozurLf7LfxD7KPcKBppyiMXmQQfVkMniRRwuFD9dgREpP6UoeVLvFui6Z9J4XSWAyA",
  "key20": "wGGLgsEq6qkTj392yX6dAtvWxAyP5398hg1ezfzR6fx7K8KyziMruwDMnGSBALgowTVCuASuuvJxfmpRAqQ2YqH",
  "key21": "5mZqNGYiKwGpDMRak3VCu2edEyBvhSD4DaresRi47ySTu4Dt26v4nfjHQCJQr496otX2vbRb4QJ5wP6suEuEbV7Q",
  "key22": "RkazFQ1GzYyRffethxWDa5ewg4fLqdM1mLEAaJNgeBsT7A6eSJmWJ3Yu4mbBdtghs7Xr1JTvJKscBEbUgP9DjEg",
  "key23": "3st1H7MQTrTLE6NXXDnC1wkzEq1gDe9gaDhGQXLmpW6jkazboWstoTHCdAP2y4HqrTYcB3AF7un5ygBE9xp6w7Ti",
  "key24": "YzgAzRjmxZfpfi1G11D6tDXV2rvhr5szx7LHadzH3aNjHu3WJKkXtDj1rgvBPC58gzjDGVYTiuxNcvbiwP6wtXU",
  "key25": "3N7YBAWXzPLxUHkVySDf6TvaqjRWbF1jiuyYS9qCdpWiGhuGByqPr2HKryTMYuA2fYUn5S8F7foGANh7fPvrE9Vo",
  "key26": "2yjNXVc3tevZQ6uH9caRvrb7JkxkzdkjgmVZtvDpEsKX9wLmWTqttbcAMZuCoRqhxzmVp6RtFmCxQGwArYxBtcrc",
  "key27": "2BoihAUvfGD987E5h5eb9inmtwDqCMHQGSMKHsRes2AK2HxnA1kGXqsWU9vTz987Bge1QtvMHKqM1soqQM88cgZu",
  "key28": "37PbcG1TEgMqKWeA9b361NJuFvU7vzpkekysRFhVWF2v5jHK6ZPBpEd4BEoe8eNz3UPkaXMTvz1AmVdZwwBzkfp2",
  "key29": "4z3CaLZhDP4giwz43EVq2DY8GZyX36aJaoWpZxGDxqxtqHr1CzngGPPgSzz8PRCHHBepXYH3HtJdRvni6J7AzQZh",
  "key30": "5qG26TgHqYTt5PYDq8nH9VYpHu5pJvTapYkYBaYixUVAZtvL7EusMHSNoYt4pXQ3Qds7At2vC9iMPTyC9sSPYTNM",
  "key31": "2ZXf25P1bT8nUxv9uef14oHftH71RNMhk4g9WhLPAKnamVMbq8Uj8B5sPPWqzhRFWxMzjU2noQXZj8jQtuCscRMC",
  "key32": "3uyi22rbbPtSwcGgjSnHLH3XKpyAygYxRJV87w6nDU8YqvxTJm75CCiv5VWCHxHkaHtvJ8Tisxx11jitqvwPSK8j",
  "key33": "gY14yT6SAGWof3EBn7beFSoCNyE79fzxqCCvxmtFFubqAHJForAtBuyPx66nShFiYkoourWioVJ5fnmgEAiEQfX",
  "key34": "2dR9dnBGdaxLHPZbztznzZLDHe9MgehksFweFg7Edz61Bx8YXg9FjB9ZDDr1VCihJ7SCiidvVcHzyZcwwsfkT2Ts",
  "key35": "4ey7P4SG9VyRXJ3V26zmTH8uTgoKLEjh1vca3RyxjBs4SeRaZipVDnHpEVSvL7bQD2VuyBm94RPTfnKW9JoESGtN",
  "key36": "4GwLHySadCL16Z2RqJJmtgSDbGsfThZDp7VrnraFVDCi41DXj1wCG7ahXTsARkFHmKpfeczsiXcJwxhSUynjwQFP",
  "key37": "49mczrGGv2rw81DXMwpJttnKJkr9aCMhchQUna9k8MPcCwszveLWm6Pa3hKNYXp3GhHYmNdeMbYr5tEbcyRUz5HY",
  "key38": "2r6CXm5xEnqrbpwpQ7riduE589S3M2qWrH4vc8YuBpZqjdofN2Qe2mFuDydwkaCLVFyekszonGVkS8vLp3WULZYP",
  "key39": "VncFHnuSVws7cSrTBrJ14LJ6WNefA8oW8Ky5sMnfLG191VVLRAAaFbizdj2zWDLKYxbqK1tzefRLbzbQae513tA",
  "key40": "5z8VSucqNyQCXAfBdVD2NzENTGDPYzUy2RkikaTUULdhzWpVtgrDVZSGaawbUd6a52mrv3yoHYD3RDHWf4x6JLQu",
  "key41": "EWm9JMUpnSeahDhJkVaK2dDTb6GbHZpnpaWGVXvNquWaeb3XdkLK3zWFeyqXFRR9VkKDkCKmBXwJduANEKNM91V",
  "key42": "SuHQwzoLm4b6QrdRc1qudHKWqC4ws1VZmU6m6CKuqL3ruDLezTfm5XbHg7Z8skaRhcr2J14Y7dVfhQp2BLZT9UD",
  "key43": "2BbY1DWknKjefmWMmR5hHS7bzMhfx2nKdV1z4RHbaBoG4KSWWdtANFmNFcdXqRgJvvqRm8WajKsFLecNC6WKsu3E",
  "key44": "gMAqzoK9ESFCJUjhmzVvwp9hzvGL4DnkCHs9iASt82UkLW4FNp5JzAsXeTAxhpLYbd51XiQCLGCzjaEnjKWWtv1",
  "key45": "4tu9R4JDMNfjjrmdRkcLtguexaKvBdNseP3mbgb3xHiQsfqRixy3yirAhqmzRCBMonQGuWbomM2JtB8L4pAN9vgE",
  "key46": "4P8Rhd6cGx4RxyDbHJMys1VGsuPpf27zyTStCVB8tyXzuKtSERWZ4GPvSeoeJZvLwGcyGvqXiLfZZ2UwkMoubmM7"
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
