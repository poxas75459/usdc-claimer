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
    "riYPeGWmpGhtGMcXqtVtGJZcgX3AgkesdXvgXUMB4RuG95XFhrRyFkwAUm3pkuPx4RLdJ8wtiEFQAdCMVjjaVu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XP1KVAzAoZT4PA4yCzspTdGk7kq4YTa6BuF3SpEV2D8n1SRP2XM3cn2j2G84S9eBYf2fWgKcTK8uWdyqBEuLQoX",
  "key1": "nPMzcoMmMpm5Geh9AyaEZpM9b2Gq3Cd7oE5PJU8EJ1vzXaLFxkKLE7Xr3txq4uYZEmXL6ZYeGwLZa6ULm8bFqHT",
  "key2": "52YCVhufiG2JR79y9RwMhVPqqvak8pK9i86VvjgZjkqBS6TGkFQUSEmEmgEgHN1N9KqysB1u1RvGM6uHk3pqxvWt",
  "key3": "49Ac63sBTyyv11Gz3E9haEF2LyoT6cuaRrCtwjtzMqcVPoTAyujRiwi2ozLpJ8JpowJ9sj187j11mPTEVMzS9vsa",
  "key4": "44rvBxUfiH9N7DkXtBWiQ8q2adM8FHKwAgRry2t9bZfzm8TAMQrXsCLQwCCi9XJ8wiNhxWT12kmrfcafqMDtJegW",
  "key5": "3hv6KYyg62GR5ta8z726Z4ce42z12QDaVVLSw9gCX1abeS3Qbsuhe8BCRbGCG31T87QvgZEj8eLRzUZFJa3SQcAY",
  "key6": "xy51J9imVGGQLpSuyJZTa2zRpdb6n7qn4MFViQcKJ4T4yQTn3sVuBrBDThd1rryKAKxNNLzPofAoopvYHceFzEU",
  "key7": "5oZhMn13JdhTsCcPT75c1qghMwCvvHudkJCnfhuiKuWjfxwBDZVpomX54uy9N5JkhGdWVhwyWFyP2ufUVMxEaDqe",
  "key8": "4TxNnWKX3w68rEV74M3ZjNw73nZC4m6C4ehycWfSVPnUvPYDoqE6RBYYevmP1UDX4StZkZmVbKowRj6DXV2Y92RG",
  "key9": "3VkGxJ7ari9d6EjFrz6jWTGsmQ1ZL93DeW1G9wqEQvedDk8MNRpbk4yZLHwbW5aFeKDp1xPFUTVsVD4Vk22Zz7tV",
  "key10": "3XhmDZenB6zzR2v4gGAN4rcYTALRXpCmDpjza5CSqFFDcam4Zq9A35k2y6nAfqAMj65adrq9yjFg5hyySrH8zSKW",
  "key11": "63ZRE6wUu9UK3Dz8JkjBF3JG18Q1LbNG83tKNatTM8Z537upAGh8p9ekb8M7Lun6ubMPHmdsBeciapcpR51B895B",
  "key12": "24P23XNUV4pybVXS2GE81ikmPdNBpYekQRk4R6iqPZFc4yMErv4xzoiqvJmBYyqfkr7Zsf48z58W8BQddH32jUPT",
  "key13": "jxAULpNzxmJEdBLrpi14XiBmJMdMuDs2Fs8rH2Rti7WBBCeemjK8iQXhuKHhC49TC5qfaf2TwhPdrbCpjRPt8Du",
  "key14": "4SyCcnp3rvmtriBKaTwEK4hdSa7UgJjDx8vNUQ7JQbiuTmbnRNkYa7mxYZVGPJBc9u6oDDLUo2qWin3LSsp1X7VR",
  "key15": "2mSJBGjCHj7LBdVEuHchzZUCGbqPRQrZuVysg2WR882A5xwMvASDW2zSgdYnY2jjFmEVctrjRfZcQNkuRk7BgkJU",
  "key16": "31uL8dmt5BtVQsLAPEdmAnX6U7TSNSjBApndim9Ue1X4m8AwqX6MErJ3kChqjY6hra7h6cCK3MajH8hHW5ZuHfyY",
  "key17": "4VsFUUkKzPVMcHhPfNQEFfwtCoARHFUzxm4PTDsyZAsPX3XiYExSRo4LYPpC6tJywNBMDcwMwvRgbpRzefBs8vb6",
  "key18": "5aJfrbanx6Z92eUL3CiMJ4t8WRDNVfzjjF7YN5SmQWCoQjuknaskKiJGDM8JMuposuXiQnvS9TsY8EEx488ikE7",
  "key19": "3xsaSJwNfPTmx9KkSVwxNb1Yd8QJJoECTmMusZnbE9dyPt55LcwHtTfXGzt3zAsm4iEVLeYrA8cRCLF52TtRuvZF",
  "key20": "2ibfSW4z4pz7FCCDSNdx2MQieEa4zkzCwfzSrJejaa3Nbx58EFKctyUFjJ3cFsAVFeQdDMwmhxrUBXsLRdJtkiv5",
  "key21": "5ZtZi3D2Yqjwbrzo8cGYNFAcXwsgTdVuqQR4VoRwegV9rfNRLX7jsm99gbw4wpMt2TEdyZdupR3ZtvHdtPPANgRM",
  "key22": "2ajqKFNFkDGMNoFsJuDaYyTkQYVx31SB1mqVubimmnND7ZTTyKKRtKBju5dK6ePACYWRF2Mf4dP9NjtkiszbGjtk",
  "key23": "47ZJcTqnR3Vc5XDdLay1z7c5panzhv5Egk7yJGNNK77733Y6DR4z3RWWtvhtVDqbbJpuXJzBFT4EXyL2DqCs9na3",
  "key24": "48PSu8zsapf8GjNZUbUnvBDjmbMAxnhK5PN23BZNc3vw61hDJzADguPqjn5rsBiz9rEWc1nLva9P1ojGuJvzxVRH",
  "key25": "4Cr5TRfDWm4DKvYxqAUUnRRruYcFMxd5W33FRijNUc74k3wAgaMbDQQYmfsU2CPtMPQDkLjTmasGbNrP7qCdTbpZ",
  "key26": "4VQmZPdFzTS8UQoRkbj1CegZiEUneyJrHf21TcCK3fqzC1u4uPkKDFPRzDZhchM2ogZxmXGjx6aXWuvGxDfDf91M",
  "key27": "3zso24ZZvhsxfV8LohBeWVTMe8J6bc8QZ8aG8BgVzvj4hb97kzKmLe5aSvxX1a5wPtn3z4gAjJ3sd265hddVA8i1",
  "key28": "4NbMeLFd3CV2VvQJDhtga1pa97NVKKDsAhxuUuxAbqNN7sjx78jMqo1Bi3CuhojzuuBsa7hoDCoA3Mt9H6VJsSyi",
  "key29": "uMgBHRoqBuMVprp3r7oFkDxGoRWfvsK96M8q6ptz7qjCex35RTALp686H8HA3GqfVcrvxbLJp3XjwpTqGXJtqcU",
  "key30": "4hsCNd7uJaBHKVLA1sVq9PbHePg3pvJkBCudgS3Gjstoh6f9txCtMyNbdaSKeEyck9Qkx6j2Ug1WVA1qQpoXuCd9",
  "key31": "4xQuviiwUvHb32Q1xaRqBtnqQVh8oFtQLiYmLhVFgEEtZ8vJ74oJFkhDFhE8wwJyJZVYxpiwaF34Qar2ZZJPgtBM",
  "key32": "4KQcpbhM1fthUKSKPa5sTbv7wZJQto9wh4bDV7rKrf1b7X8QbTxF81sBBPKm7TDFEpD8chGfgu5AXF3oqjBNtcEF",
  "key33": "3WkVnfM1A1Vrsv24EsvkCRkGt3bGyEazcN11gCm8GLebYLFKgf7GY5JtQ7gg9Z6Xa26DJh8dH1KBWU6u8NKDUvFp",
  "key34": "1Wm5EarxpevYDtP8HP7B2ps9aVTSNP6XHE9xbjGPSiACd3o9CbrUG3yW9VJq83YQ9HLTinkGNk21GnrDL2Y4tfi",
  "key35": "2rC7Kc3PTziZZg7PqBgbWnBQXCTu7SnCkJMDuUYfVHzjvxLFYNcjXigwKcAtLuAZxNTD3i6GwHKcYSw5G1dMiBCM",
  "key36": "2Qp3VaGYu8d8oUkVt8GvYhaNEc6UvxZMfJD3T6xXRGcjohW9kKZrgMfXzAHQtnxrhrPiraQjufTG5fwjYTtbp9h1",
  "key37": "2Geos1NHGpdenhaDeU8EUDqbjzTCafZfeJWczac4h5oA82CAqyaMWCDyAf6SdNYk2UZ4VkTnPHLeNSE9XurcSHYs",
  "key38": "3YXhQzwzhaGYgfqVBCbwXHAVS33tKmpBL15UwiqPtWPA7jE331ttkKPaFRDDReVhR4FrC5suEoQBG9RWLd8GzD5m",
  "key39": "4FhV4P9nU3Xp99KMMATjtD5LZpBqgEqXcaUQfJrRkKn29Z5UndmQRb2mGgzcDYA7zCaf61GDCpGQgdNy4G9ewm9W",
  "key40": "4kDESXvW5fCfsSapUeTD3yUMc9Rt5zEPuzm9a4g3xPTtxRVjR1EQS6oa3HAftQqTCpjomH9VrdDmr4tBdEmNRTLf",
  "key41": "37cQsCw4Tkt6frXLH7Pd3vXGLABk4FdHgS8zjaosCQ9MUqqNJpBuGYaVDp5EcJE49S1erHsfTiaDSCYqqREWi6xd"
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
