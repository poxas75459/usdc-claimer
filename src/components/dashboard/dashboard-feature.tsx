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
    "5E8REH6tjupP7UvyWb94fBWJL17uN6kvUJx3Kni8CgwFTtFo2ABivQ6df5FiR86vS5irnYYoHSGng47srx7Szcbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3m4f1VKyADNLnFjBjjMBCjBxXAJ6tPz9PNTGEKRtPTp9ficTcaUszH3opY3FqPcXpQTmNCy8vy4FZSZhLcQmAh",
  "key1": "JXCX1ppNmywKFMLqDgNdz41iGZzrTaN2uKqSy4nSEPDFWm37DSYgSdRSAc9UEs9sNf59Nod5FTuqxeGM3G7H9wg",
  "key2": "4n7KEP5p7sg5by5hyRfbUk7koJg96izvxdurijc4coLihHzy6D42KD6Q9ACcvcHYby7B49y5gWU6SVK541EQ2f3m",
  "key3": "3SiAnucDtxhUrprwopg84aQ2DAQFc4WgxzWBjgA5Psu5ZXSGYoo6LUzEVVgtLh774rSJf4wkKod39HESQM5UUZtq",
  "key4": "PkREZ3XJjnzkxDFWETPYvYAyYHBicXjX2vfjsGECac6kSkpau9woPo1RTVtyeYLYm1BM47ciPHKUgvrp7faXFpo",
  "key5": "io5EPchqeCW5DrLR3kmhHJPvFppDWuk3v1Yea5iTkxvbx11Ti8tcsVWZWf3pQj3fzLh5uZvGz6SJXxkN2zKH6pF",
  "key6": "5u4YamrazTVuUJvt3kNwGFKMp3miyJv5vtnYLV3pHaRCQipR4e9YQPHXFAjkbyZkqE1TKVtCLKtE9L5ViZ2dxixr",
  "key7": "4przWWer64LgyQUC7xte6PNCtapLJJezD8FeZGGb4qYQ5sJLGemPuUNJ5KdvZx4LYUZ5CKZaESNZ5mkhjWZJZRMp",
  "key8": "TcsmnM5TieTtSyEHuvJwRmeWN919a1EMvyKkXhrYh5wjDnDScTBZ527sBiUEVDL9ax1YENDigdkMdKv3cqxnBhP",
  "key9": "3JQ7MtyWZxAis185vuWcdHeHY3VEqJRsLQfuy3xKn4a5sUw3K2cRKBRaSuyriVMJnzxeSdEzs93PsbPH34LcQSzK",
  "key10": "2xtpiePjdkBhWE861kDVnqaTEY3EC2xRrjWgkXqEojsmGma4cF44MecfNiUeSKVFQeVXCbZT9rgfs6m3rzjJj1MG",
  "key11": "3uwUEF8NynfkEdvWnhQBwpthY2u3abWJEHujTNUBxsEKdwg1YJvmKRtFbVPzRjZhbpLHji1cENedGfT7BvQbYkJ7",
  "key12": "f7mm9QiQ8a7VRQobqZ2ycFKph1VnLqjxdRGdwBFJfAKbrs5hwaZWtU3m1LLKYsUjdEvrmtr8FEcVTjLWsvMeAnd",
  "key13": "3pqNYmEPF8KeRSDc1T8ey6KTZrW8eqiJCCWaubLQFHtRkZLdc3wagWZeD8FW34gbLwWjZaDenRitXBeZLSyqSLaH",
  "key14": "31XhbyY4ycQCvqKXHo1SSffWZWyw8WqrFWcDF1vx5zevxT9ipNtRnpRZYVEziSRBB2sajRWj2LgZpUE4MbhBQjGE",
  "key15": "2ERTDfjQTDKVq72ya2UmxTb3X398k8QXZRssXYCZuoapo1ZtrZECpqyj9Vqjk8brUtwybp7bToXe4Egz53nSrxbb",
  "key16": "57e554jSjavsEnJQgTmMrnYRbwyGMn5fPWmizh4xTV3Q1SBBNPHvaDmnz1MxXcp7tmdcj6Ddhuf4Rgg9HQWYUrv4",
  "key17": "3ALxFwupn4NpYQf6bdwB6r7L21c93bh2R9eb4Hw1rKVN5bWWwnSUFZUXhxYr8UqESkpgduFZzSx8KBh1iTbcsP4g",
  "key18": "3nRVfWTiZuC3782B23VkafRfv6qimoRtjVsYyEr1YndcCKKdiWBgZyWJuKFuRiua3cRKmfHFA2RDCzUEKncBwHyu",
  "key19": "3z5a63TKQKPRSYTyKEkMPsg72vrrEbG9qdQr7URQtWxnctebEWPBKZc14cUuQUk8bY9qKbUju2fMWZztdYjTmfkm",
  "key20": "32hy5LYkUS4odV24gKPFpUVenY19rPJhXWJA6PrkXqNRB54fFQGUMUAhfnhS72mFi48vGfTpguovQQcbYgKhBf9J",
  "key21": "3TJG2njebjmHiB4HqMAtRXtv6F8BwVrT7STv2YBNLiFzZAVQpiH8uKxtYjfqJj12h5n9MoZbUihNQUeSegjh9K5o",
  "key22": "5p4oyDAJXGyU27w1rtuX2oQ84oRjuLRiQpVHULxfvWK55E1zj32tKFp1a8XGcJY6hdDDDDzeXr7gefrctgMHPQAw",
  "key23": "45Uv5E4bNrgfqAXfuw55VuW7XkTTwq1bnnaLJ7tgjwTojd9KPxyRaqJVtoFAaZMVfh7TEYgnwqCvv7uBkPr958dJ",
  "key24": "59fjehaUiEWsnMD92Hpk5VDu5gjC25hL2wQKJ73sU8xQ6LR1FkoPr2qXLVtyiDJddJR2AZPmSMKBPvigirroBRJ7",
  "key25": "3DWczYv3PgF2cvhteRaswpQUbuaiKf5dBkM36qVHhR6gi9FCSsNC6oSAPFfcBUN2uXhph438BXg8y6RTnW5QHzWb",
  "key26": "3yEtJ7xKjknSzErDcr2ce1Lxjc8FyYbNiPHquD6t7zyBMegsh5AdWicZVLkcCr17b59zo3N7yEpT3ZorBFonm6fo",
  "key27": "2EK9DGGG29Yw3jMyu8hnkHJJC9KgaP9K2xbfz2ejzLyDiQ8oyweoJH9N6bfoYuTDcegiUBRTjMxqapE4xh47yS3t",
  "key28": "61u79u4VAYmj3QYMpRvWr5peMD9yrN4zTe84dawyCsRRv6NWdGYNDmxCJfQzMuTRfQ1f9q5t85kJUedURT4fzYoJ",
  "key29": "4eE538ck3WSP7GimEabWcBaR3iYXaPBkaJET2icSojrsD6uyfyKbP88Eztf3DuEtmbq3hAPVFKjomJixgv9EqQdF",
  "key30": "3X1UKrh5xS8vbTuKZPKqFjhKnHs838Ba6mvjTEUHsMZJ8K7WBMrGPgbwmxSepf7GhMvGYhmUus5DYgJ2bqv34h8S",
  "key31": "g8fjETzmEXppjS4xPaiXgC33u8yEoYwvpooio93Z55bHxvk5gLbQJYSUVTdi9E2N21aGkVEGqrLtbqfTz16Jbmm",
  "key32": "46PcRf3gRiELTcmoLpurdG4z7E6yyKwe8LyiveuK4zZ6ovodKJY5jbYBxSLddt3Hjhk9nTyLKGg4FMATi8tuffUM",
  "key33": "3gBS2dwXXBMr841WZ31Eozor4cxegGh1ZBrGTUj55cYKo9tJarRAXkvw2jXYerdu5UHUkFmhqLjT96xQBRjKa28B",
  "key34": "5825axseWePWKqjwgWq8RB2jSBjGjVTSxHJVtjzw8hCuZv9f5Qq3CvDVovGZfSTFWdJ5yYZ712nqyojBzXosVnx8",
  "key35": "2JP5Eq2aBQesrcZy8BpnbUtL9MXR3vN9cteQsfkuyjMS846fbmA5BT2MTfHLf9ktJ94zmhf4TmBJzGzwfsy8B7ax",
  "key36": "2LhMmfKPPfFYiEgpfqMSw28M2R37MZj1Ug7kiupSi2SJ37BxEZrZT39CfcYx284o8JZx7vhvTe5hUkfEVgdAuQhW",
  "key37": "25x11N7ZBCrYGaNGwixLg6JH2Zs7Z66wwytTRXTugjZA12PzkrML14Ad5KMdYeaP12PJRB8RELEpvBR1F82WUJKp",
  "key38": "mcvkNK6qvyp8azeFEwrMmcbgMCTgW5tqFvtdq1z3Gth91oFLHCqBAYeCtU4G539W6x8FSbWfzdzzv7yrXyZkbAH",
  "key39": "5yKP8uozryog6rE2bbPSgTQcEAEtnwLaQ5jvU1iKxy1wZMBkBR2cC98T9yYyCFeW1y1rGzyAuyMhQ98vsNoTRqQS",
  "key40": "PaPcqhMyw54LV9L6Ld9GDV6PX9tAAiC35qTkZGKC7sU146vgu79yHT7th4qnj6tdSrP1cmR2V2n37vefQy3kZkV",
  "key41": "4dSAdzoGaHDLeAAj6D69KXhEF1JT3yGdWNXFYYDGU7SPoSGBUuq9hhJzoU2nXtTHSpxhyywwDrMcasrmd1FWGdMd",
  "key42": "3KxvzpxNHwbqT2dVoMZiopipw7joWoWaFPaEAGPQQBzATFgptB66PZbQZchTSaNrvbftXHsa98hKKz45jArH3QTP"
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
