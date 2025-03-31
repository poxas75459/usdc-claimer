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
    "4TvvZgqqBLzykAzxTFsZK1MY4LwQw3DG11RMWSyUrEWEoqefkYqfxc9NZyJ9AQpq4rnBS7LNX6gFioPE784vhHMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63p2DNNCpPCRTBSv7E2XxhVPfRvPPwoVCYVpDCBNdaPzHQgsufBU8xrAkbDejeTUbiyvLGYN4RF2sraCo8rbe7Ce",
  "key1": "28Gjh9hKgvjiL6i89YM8G67NmE2Mt2gSx3qXRTGLWSCvySaAwDiwtEzYYzAqapScAwZg3ahVKNKArTfeCMGSbZW9",
  "key2": "2zjh2r9Nfnvggh7fddtzcrG18tu1JLVeQLrVxAzTBXiENN7sw4EnQoFRFfvPdnDp6oEdQhBH1VkR1VdJiq6Ayp4p",
  "key3": "255QviyS9jnRtBqyoaLUjCCH8thFLcCKvhbgLtot9UEg5yqjhuBa7AcMeeRqZn6ywohRqSNiJyomh97ags3RnDbA",
  "key4": "3PVhUygnbtxFTHTA5rxd5e89MHxXRvudzZmXHLa49aMywDZbw1gfAZgLMKzGUyRyDopQZY59WKNxonSVqCXWYBku",
  "key5": "3Qqez96tcncHdx9zonThM7a9MfRZnhSeZ4ySA2g9oGGnvEN4sNtrNVqDsWXMVr8MCbyCq4MGetB1ryS7EPDqina5",
  "key6": "5Ks2PqU97uCuXGpZGGQfYNS2VG7my8gMZq1g9AJwqfsStpp7Sn6RX4dh2cpBL6xGhttjqzQ89ZWAC7CzRCWDyKSH",
  "key7": "26nA2guRtKm6bCAWpoeMNZ2vtZvnTcx3t2ZkYsz76c1yh1sQLCAPkZTVkiSdcAfRsQDot7s8iemD7EMKXpPLWgYd",
  "key8": "52FHXLJJQbZF25dgdguanPXbkbXUT2rQh77BBEHZNivKCvsHV4KbEW6YBKmK6G3ULmAjjcSpN9Tevy6Phafo9QjH",
  "key9": "9GHGRyuh4YLeFFGNt7DWbScoyUV8DNfnDfke893XqheQVzHFLYLXRX5x6QHmJ3QRYbWEpKdGYhpnukMwFjsfd3V",
  "key10": "iELkGA2ACmZvKEGVLMHVhbotV5DHPiQ9PbvTU9yAvzQeCQLyhpAnzf584L25QZ1oCCWLVNUjfyxdZSyi7XeSC7t",
  "key11": "4YHjhUKoEn5b7o7M8KPKRaWbUbfnayRyFSRLhrCmbuD2wKj3rLVHnWU5h6P9ZZrkntdEjmoLKkfkqCSZu8KmqYHC",
  "key12": "jFt6jDzZiqX13zeoUcAH1nvYrPEtPGKFQWoj8UyML27uFG972dgkHiHJZYKUvUJDC24Mj1iZNW8kxrz1Zpy6biS",
  "key13": "2hutpfj5x3KpWy8S94VgvV5Jo8zMatvm96a9BYfLHzVrM1kVEAPXbtAdZ5wazKbrcdYNwsy823NnQw2sHtQ28vPf",
  "key14": "7hbts6hudB7T7P4dtE7jxbk2fBrVAPhi8EfenE5UmqHZR1vbvwPM4nDHZFyPrtWDzYEbJADD36Zf5SbHioFcwGC",
  "key15": "m5HjPqwdRasfDhpZtpt1c38JXHbCMPb9DohBHwc3DrpBMHeSQd8HVo4XJAeWE6DBYdCzEzTJ9np4bCtv38tNkkZ",
  "key16": "4cETxNNP4RtfUJ6eDALCkA3fMg25tMR9CAGvr7zPJLTGVPXVn6tyUPjL3p8E2ZWX5x5rppF39QYWnaaHUuqDaPAH",
  "key17": "2a1Sr2RpteCEdeWVUmewvKE6REwuibHeke3qYSSuFK1SjubADJKahineRWwdTv4DFojx4EmLHD8aByZEX2Ks5Pxq",
  "key18": "5wqDATDnqb3W3TerSdAYcUC6RtTUwHNAPzES3Gp2x7kmfR59eviDqvcSCWJKpocRRa3CQH8WEmz5Z9DbaXiWqMYZ",
  "key19": "mtnekCzdmt1LEMNk1E5varN7w2cAY46QwQKHfFAQFeBYK6NfkH82BECvVq12mT9iF5mKibGNTJhUgU91P4R2r8M",
  "key20": "4dLHAAGAZbG633X9CEZnPaMpq4t7ouPtRp6WYsCPf64RH2B6tMMxdQY9kSPmE24HNiu5X348QacCCHq8smwtiszz",
  "key21": "2hchd1WwCgzzfQV7XL8ohFxdAVdPVqTdwFqeryNqrHdt5QPwkTAp9Y54Hv9eUUgKHeqfRYsYxBiKAuteBbcJjM6Y",
  "key22": "5WmGZPGFtBGbwXncKt54obxXaZ3DD1wLvFfbNf92iozfurBEmonHXEHFRjYnB4rFbzMRxt9CRysSVm68v5UKvp5N",
  "key23": "JeRpmaBLXx9SrtNrD2Y6MEpu5ha3qWXUZ42CZV9VNscbfSBLaErqhqrAXbFfqWwLQ8k5b2fb2vgt14MgmuSkuvm",
  "key24": "555B64EHXNrpVeTg3S3KFzuCoFdEqFFyvRU4fCRieFi2KLzbNPHYCrrktELZoB4pnXHEKkG9TMFu5sDAz8sUC1K3",
  "key25": "3bMgNGQG1FUCn35hWiWEw98c5B6T4TULJ8K1r6RL2YZUwKcz8hCyKbXPTLpwVevwk5xMjV1uoNX42ABjV8J2T3s1",
  "key26": "2LzyKnaKQwX28yWFctA1do88q6PcUztATbVUJwp11UrLabjtKpKznCehLMxak9CWs4bhLvKbcGeQgwocdcVcz8VS",
  "key27": "3o9VmUwE7eLdDNkLAHm7PHDP1ybq1cHrKSuSRnxt8iGBx6iX2XLP5i2BKBnXZp8LDr5MYp8zQAD1TsbUfcBGz8jx",
  "key28": "ehd1o3iEUG7X2LbutzSkNSwMKD36CdHyKuzZmUhCzJxV9Gmxhybsf9EmkfaGqHHKChg519zSAWxNhDEsJoDxGRv",
  "key29": "5wgU219rHNCA1ZW8uY68pp5N1fuD3wcLmx42hSsKfzVBAdzsJ9ZQP9qebpL7rSSXxsYNYgn1APH1xdHogAGKEP2T",
  "key30": "47TpSNHiPC8PbtpbCvtRsQvfw6pctSZAeHr9r9aFjoM2v53TXVx4cEtqPHX1bhqZRuQLa1fNbEuAJQK3WCqW6req",
  "key31": "4rtZRpfaKerkjG5zb43GDVhE6dhKmg9PGQbnXWqUqPuzewDQCJhPfyhZ5EHZiJ89zPXHu2T4tG9Ct27L9ooup2U1",
  "key32": "3jtouiocAbFmNap9a1iArNXTTfqexnGHAuFbB2EwA8VySctUw715RK85H1RFrw5754BLXzwj6qY5tbNNmqKkDZan",
  "key33": "5ssHvLGoJW7w63tKDjRxb58Dz4scqVwZkoJic8NEQBNvcfmhpww7PZeugx5vxU4WaTn2voYo9MX6h7SESkxVRvcE",
  "key34": "5T56m4WycH7x3oRQFJmGASEYvG1r1wzPCfq8qRbd8bL3hPJTMU9KTHaMHffLvZy2uBgcPLCbSJyfyQwRVuq94Hr",
  "key35": "DsLBfAA61jVRvJkXQbnVtanGZWAEZUo72Dz9AYG31QbyHFfkxhcxoAy8t4y53wVQQEfBYH5AjepmNWnpSNyNeUY",
  "key36": "4ZWuRDsjFu93nnC2HV9ktUJmP35aRV1RyBbwxfuoiEqJfKaJQdBdcdMtTnV7jnbBMDUyumUwmzg9afdVcuyL5jZF",
  "key37": "3WxJJeqXmq1tdYm1eu7RjyhghsQmA1hwYrSjQpnxMsGK22AiXZ9iSHrxa1jHDM7JxWmME7Tw6FkCoA39BFBZkMNF",
  "key38": "e7FDUfSN7cv459owghKhBJhFDE7h8vzHh4W2nt6j6ABmo3A6ezqDh292zmVcJX47gac8twByxLHNf7Bh2V4LCrh",
  "key39": "2gGZumyEQ5tC2mHoxoyoPPDt8QucoVkseSTUSVouhTUkZqxhzJnLZJJR5eoFPYFyQ4gkXxS1Ya3yjiYUbWVkUdZN",
  "key40": "5u9gCSPZSKJa8eygGG2gVc67EXahvdk3nREBJVKsFHDVqqcVdXthWdyL54u2uP37i7SevEj3fMFpHtZnheHxjQkb",
  "key41": "2vQB1UYF1pwv6NL2c1wNCtQsKHzCetxPjHUFtmp3t9toZuBGwP83Ns1M9BcoY9DUPKwG2gHyXqF2hMYCAbEi9yNG",
  "key42": "5jLYX14bDeR8P8e6nHrHec4ydAMAsNavoXbNND7o7iYy1T3oZGFMBwycrBWM96RwfRMs78Xv5a7gUGBFzC7mPzsR",
  "key43": "3TtnWtLhGyP6vUZ76Jfu6CdwfXd7yxCAvNSuTm17jnCa1MqG8P87QN7xASA6hGy8cKKUvUshbSoc5Xyvqt6juvZj",
  "key44": "2EDM3LbDwCgkHd6gSoBVF8XG9sFVh57SnPg3bFEmdjjPXLsxgi4xYVkTaaE6My4s8mW3oif3wHoNwH6t1tic7ku3"
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
