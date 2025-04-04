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
    "4Qi5M2iH4b6rNnw1WxNptHmYrjoYG8kBKXy3aQHtTWW6jNwPgyzESad2f2XHgeqSEXDZ8A6bSjCWS9sNuN3ixRR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vhmnSQAfXZrtLPKxWSsvYy1xs8T1cvpGLomJhokpcUiKtDh7wfpWYgV4JHb4LgXvLECJK4uETgAZTK7hTvuAVXn",
  "key1": "TmsNP64oV7QvpH54DHJaGUXx77WyhRwe8fkz78reZfojPEfJPmRq5GrCSq15rbBq1bKS4gsWXDRYg5ChPuQTvsS",
  "key2": "4KmMfFiKtzjzC42jRqAkT2E4tELeFjzJxQV5b3fYa5KWkbhB48ENEKy8ZuY3ZLfpK5XgK4wEHNAfjAAnub7aaSEp",
  "key3": "55LFVh94jZzjgPXV5sZveXw1NW7dxWRpFVceZ1cHp1rGbgsWYbdryocjkVfvn2tEAyygX2wQLtcsDdRxSVe6ntSJ",
  "key4": "3u35vd3cuaSQq3ve7UKLzNwvR2SbeY7AnvJvD6iQQKgSyjiKKmvNugz4YPUfih2CS2iRP2nYZivfLmTPZd9mDPCg",
  "key5": "2uHsBnjF4v1caBQfoeBEMwiYszkBNTxVw1SZELeTsDTp7UEXyQBoZXA9sa9SsCD8xFoGhMcvnEPgfYDNJgCAj6nK",
  "key6": "suroABC3jQowVRmg7RT1mw7LBfZ1bZjrQtKcQD5GYdLjXkpCVUrWway6mH3WTHoT2NyzarUstuPmDUo7zryFLjB",
  "key7": "2jSzevCG472DPC56w8DNsc7qQBu3Gbhzg8FrkL32iM9GddY2K24dqLsQ4N5qdpq6AttFmQwcmwSQzSWG8hQJBAyM",
  "key8": "4tMPmYSsjMJDrXR3Rz2vT5z45ingAHAQcy49Z2GPPTisgNjVPmHci8veS6mQMB5rFnmG95dzYfN6Hrv6ZwH6pfGT",
  "key9": "3GmkuhYMrEaGpr9HCeHQ7LpQXuzMogTy4BwDLDdJ8wxbnEerBLWauG6G2fP9UXniPaDiqg7BzyWz8Bp42ymZepMJ",
  "key10": "2hDH1EEyrCmLtDd3jCJgWViozeXZoLLyQnJCN9KvU8gipJC9tvMGCbWJ6u9Xjp6G2KAMPXctyKE8MmF1KKkUuSPu",
  "key11": "3NWYsuknMwpRq14vbbiQsxNCutLkE2rWQ8YBai2Yt3ttvbwjC4aXvsUGCc1F3ah7NPMnjJQ9H88xZiVLnKgznqT2",
  "key12": "2RXcB1HfiQuccXdgpGV3e95Ew2EQKhegyFXMQmeC6LeWqo4TrXMWhCFS5k1bTLWmZDW1Gz8gHiRYAbPwMqoHsnfE",
  "key13": "29GN8Sjba734Ficf34UmgQKQasGpDuHm6S2WacdYCZm74YyRJR7YnNHCqCr4qesYUyHM3gygFiabRoC2486QvUxN",
  "key14": "2V4tf6QfBfHPvGSM3PpTNXBpdgTvMXYY4WDdkjy1YxGyfiBg2z8CddwSbEbUJaWmy8hBUBpbdcqnZUHkc9zg5ivE",
  "key15": "wsmNhPasDzg9TNH55nYveMaWDY3da9Zt5WUXJr8AX1tkqrhaVc45f7aLYT3TGA2p4rNyYjuJrQgLieHETzz1VeM",
  "key16": "2Gc4vDgQTpXjZAHuAqXbqMhxKGoK4mLtczFPRAWMRhzm7w3ToEXDAkSt2dU7J8TCkXGCHqZDiCcQkANiQxcx1RGx",
  "key17": "8n9FyZaoYYBZz6wRNx6E9tkUKNmXfErkw688RvZvs7rBCi37frX1euHWXq8MzcaWgxr85v4Ji693JEvuxewxued",
  "key18": "5tY5rETnEYDcr4YqWwSbu2f2AZip6c2734fuHAevsYHPXjMSRRiN6M74sus3QJHuEiYBioLzzSRQmFPkHuGH1CJj",
  "key19": "5PG6YKQzEdudTgLKLMtsLXbTqGQ7Tw3hNTrGVxPjRYPJ4MGj2eTaQnRdTPrhb8Zf3CSrAXQcazsG9ARGCwfB5nyR",
  "key20": "3vnRQVwqxGxiBJFG4Z62uDzXtS5uVg288X41egmBaBffCyessZdA5oj9aJ3fLGipT12xboxH8cppjF5scHNwjg83",
  "key21": "3aZL4x9tUwRSMSpHBT7x98Td5dfRktTqewvVHWMhVKXB1eEpLFoAvhBhU45Q87nA6FRSrSCvNqhZN2cQwYW5yeD9",
  "key22": "2ASxamZW7GXdoLR4ZRtENE4YeDTvfFZwpxsPZAjkaZ9eqEzJ4sV92tisHvtiFUSyB6po62bW7cYJ9wh2cZ5GRYL2",
  "key23": "51XgSsQXrUBphj3o7Fsyc5xfwbgtXTiEPwJHTN4fQUa3ngxJY2a3xUKC9s3DpuXgfybGvgiq5mnJNv1UqWr3tDH",
  "key24": "5oFZ8TyXNrmhxioqZtGkoaLPheYanvbzMjocY5E3UQ8Ka4JV9VLpeU1p6N7r1WgkCtb4ECUfPytaa8VqSWYie3t2",
  "key25": "4P13bEVvWdnXXP4Hek9h2VEMwCFuqH4iGncDPccscT42CoJmhBc3Yuf1fyJG6ZWYrpZzgnKty1mdnmQHde5Qsfqh",
  "key26": "YFXRaqitdv3N7ud1ec9qQ255muesdX69crNqjSkjKmbc6RUaQw8Z8KwbwcRzPoz9VWdyXtqNtUkqmtvgfmgjw4i",
  "key27": "5xCPHm9UFc98DiZrXNEk3CmGczCuuJhi8wKYhp5CHpLa7cNy93HWSsWbGvCcNAUBq3Ced8P1hUfNXpkoStisY2Ch",
  "key28": "3BD2VeRSSfBtQjrmAZz9uANcqHYMHWHeVeqDqDCabCVYRPTcX93wdFGeFqWBMrW6K6P99u3fJvna5vBos8iNAvHD",
  "key29": "3CpZQ3kgWACBHGYram6Nbkq21MAuptdtY88zgJNredKdk548GPW9L6eVjQ8PeTMmiuy9ASRwDKepHSPpxBegG7o",
  "key30": "ExM6ojNiLwRwvFyxbkBY1kvNz7ATRfdzWtSEYG3aYhousVXHjsiUWLDthtZ48YuV7T9JT7hgckK1umD93gwXBwn",
  "key31": "5ruB7rD4SGMa8QbhGNhdgtChEr28bc372MURCoJ3Hmp5yfCBbvfgPamfGy7pqmdqpxLN2BqXQdMbqQEQrmaCA1Yj",
  "key32": "46P7cX6XWvj4XofuargLVcD75m63zLXafSejy2nAqQN91YpaSeQnKRnao7fLSGz2AdeH2YxuZm5r824Tod79gpFP",
  "key33": "4Nu38WJLc5jVwpQXQdahzrCtjLvR9YQg9mrp8Vntgut1ckGdrDAKrvDY5f8WdcwDAdDrmg6csb9ueQ4Gb1LEXSsq",
  "key34": "5UAfifctLR1hr8JMLRKHdiPkLihSwAzUxy3Vk2yJLacWBejviq5fj5ScsTpEcTvDrGDwdSaZizBQTBDrvPorroXv",
  "key35": "25njShcgkHT5SXz7FfkeTnct3kMQsZQRsLz8VFK2Yi4fMcM7RSuM1pwU6PLcKbru8wBfJzuxMAhEnVawCozoB9yS",
  "key36": "ZWiuAbBw5hsgCZ6EJjTnEhJkEtKTevppfX3D7JCkAbBRebmaBcGGfKEdN5i6UCMaaDXUuCGig3ZgMBNeb2ASxPC",
  "key37": "5xkKfGGH7roqd1TwixnF5dM5uRyve2VrWAvDs2EHv6Cn7vbjHqbKFNGzo8dUocnijhrPk9WLHuvZGBFGZqwq5vPE",
  "key38": "2bc8LW1LRFFKcyFyeCn273V8hLbDSJ9A7gnSfsijt9Rntu2C7sqvPRdBBah5QtJJoJSngWNt9xp9Scv1Gqv3FPvY",
  "key39": "2qgR1zsXHici3GQXbcrL7BeKsiT73szp9CfkghJaa7nAQu46RCtWQFG6ZCwJm4nchd24zuudKwR9vch4zXjzcR43",
  "key40": "5PVzZWcDcVbwuVme9EVv8sJbtB26c8aF9tcfidsG9x2EVVK8hmKwBXN5pdW2FRe6waz2sr5Zs7tCChhoWNSiv4wj",
  "key41": "2nAFkkWBpwCGhEyVDx5mxW4fLFX7vCmA5XfynyKTaAU4SoyBn2JNvFm54cpYy5kpqbXh1s9qhdUhVaQC5WiX9GGa",
  "key42": "5HUDHiTVSM9yFHfy9XXxgnWXMJUCL1ksKZrdQccHx1EXchxunaaRhGhkaWqtMiYhsafBEuYBknmFu1rqYH5gMMUz",
  "key43": "2wBjbYE1hjfZr9AxFyprdSjJkp13kiHRrY6njc5vdC9Qn6hawhYpdQFL7bbGnQasM7saehijjRQh4TzYmXK1K3Nd"
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
