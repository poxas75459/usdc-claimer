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
    "5HixJGd1HQEdnLu8Wfo3awzECaSRnNYAvWLbLau7PYtF5dvhsL9QzMbsVBChM2Nj38skN8Un9JkuBjxkrin8Fq5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qigt6Xd6goTADcjdSAtGo4npcnfrNz3xZmWjw8sMfGStjS76irCvENueMrQXx8LYS4dJA2vJZArEnF49eQSQR8i",
  "key1": "4NZdHTZgtsAtzESwVncU5mX1FLVKVsDqhTvvD5LvKGFtqYJKqXYYDM9XdCPbcUHHonouPKJRphQZ5kwJn4hkrNVj",
  "key2": "3u38cwg82zATuJENeX7JE2AqsJro5r5xCans7hkK2v4c8GHq2EiSdSMRBNKaNaqFdWpBC6Kwxm2Gn8S548Lr2bcd",
  "key3": "4NPCuk1wEfvZM8BL5NnXg8zkZsUJPQSBKVCLmnbgDK5cs4nEQao989NPsE87k6StCvFjYNUdZKtGFZHVeRLepKM5",
  "key4": "BBrDornunVb6s9H2p9iHaN4HDtPjS5bGHkoAL4EKxvL7mypN9KHoF1DBHbfFcmiwJMkdRs1mfqpu2zKZ2hLsqa9",
  "key5": "3L8L9UtoXMC6UTyJ9MKXHMeQ5evhWnRzwYd6TwAaM5ujxcdNdAUJY5KSJgB2h9KfuF34y7PXTNFXbw6kdWLnR6ca",
  "key6": "2Gnf24Rsx42RNWq4x5wnTv173NBbVtMfQhwGpYHSqGsEVFmVt2HENvncCpD1qQpnU75kjUaBQLvbDHP7RB3mKjLb",
  "key7": "wtjwEMnuSJtaVeVVCcQoCiYkJ6R9qE32hk16bTb8WPbSpgu8MLc1G5gC4UMLHNBUKy3fUFwLNhcixNFGGkFtFdi",
  "key8": "2DYinZHc9TsTkPkvcKuZ9zsViPH3jj8c2bJx5bY36zWpDfarYpMr62vTAAoL9p9RK7Zub9yFxcLhbhMRfbbjGen5",
  "key9": "3vYCZ2FzxZxuoz7g2UW9Cob5qLpVoPHPdVitTmio5C9BagnGbovnxJzzfD9i8rwD2kMxpGKPLf1EHZXLRiNe1fmb",
  "key10": "5YN5cRJoEfECP7uq33c1rKq3XveUA4ioq9Xtfajf1R7Ct8DaMY5W6Rd8jpAAKNkqK5VnWS1XU9sZ1sLRGQdYhPcu",
  "key11": "c2TGfVaHvqg2dr15XvreAaetMf2MkTk9a7wm2yw9cQuGuMutX3v5zxxneSPHeGboKS6vm7idha4x4SFgaDET2mt",
  "key12": "EK6Fw2uS2n8Ai463wbiCFxdgfBnYHtvFAYYh4G4XE4g2Bks4JxTncApUCBnZmVRx1pBKmGXfrcB53F8imsi6tMQ",
  "key13": "3z1sCmFkEH2eQuVmmp3zsr3VUg3PfMnw4euTej7bUqRAAtyYwZPaPb4HAp66QVnhb8hdLKzGMLU7QgMbwsfRVjas",
  "key14": "44xNdwsAPFLAZPFae3gCr9BmtKLrW56GY3BRJG8eKB7kVKnfRHBnrbikPMtHfgRrUSWYdDMgFVPb3fZwTHabqgbA",
  "key15": "55hk2PM6ruWm2Hw8Aea1MpYFQSBkkQDunEjZaHpuMgpeq7sbjtDiQvryHcbnFdjKaToshVmNWyfCVhzFBJthzyHA",
  "key16": "2fSCMVMYE9TUHY871FwJqiXuh9wjdUTg2BAy9XUKK5ptJWcP3uUpUNb4Ycv9NGbnYtjQTHQ8rYKQNq9YdNh8uJA1",
  "key17": "E3JwPgyjrh38GkLSk5HiuHQojANoGAxKgSD9dxyE8AnjGSzETEYWihkrynrZZnCCGj11UK9mvxkknYkoCwE3rNd",
  "key18": "3wCCgo2Ta3mowtetG8UgohMDKnHLpkY62H38AYWT48bBDPU46y6BrnZJx3gLxzaNwneLcWxTJ79WDiKEeQnm6oTq",
  "key19": "5wWsobBFCfuyGWr1Ky9c2fWhrtmq2vA9zVkaFiVmXkyzqvfyowFvpvDSacgJXnyH4phLHUuksz7GzBWNJ7y8X5D8",
  "key20": "3Z5qZVRoSFW7zB9DsqTXV46s76KKEAjJpBA26ocMHLxVfpYxbkfFQb4ra7hhr8HVkac4BpqdApsg9ps348WRJGqE",
  "key21": "5JbFjUGcLXpmRb6rm29QUMubtbaLX4VRT2C7jpZLxSRAtKZE1S934D9mER7AKQkxF73k94QpuAuAoobKpxHB3RQH",
  "key22": "377Kms4e8Vr2ZxcJhLxBjxC5tXYWUAkyHTatKk5DAKdotZcyaykWQxokeoPXvEiVCDKot8SfXWkwmej4vFEzV9mH",
  "key23": "5MdutjSfJc3EyP6Gx99hMAGfyRSs65Yyyce4rAdFosxGVQEVW1bcUyzmST2F4a5c6CCKL5FfXbonYyKkZYujLjSv",
  "key24": "exGvsVwA9TiaYWCMSTo2h3LcbtG3PZJhVH6rnTRccv55nhtunmiD73hxJCfBxabgjjbGGAWodCvq6uzzbnmgg3C",
  "key25": "4NEbinNXwu7M33NZGdmyg2yx9heVTqmf7vYbxV1D9sifdXb3tusz7vfX5yisvQu1S4CVmPw9bHK8oAiriRYXSh9m",
  "key26": "2Miu8TQqXBxFGj9Xjd5mQ5KPWZ4QyeH52zcBSe4kHPDJvYmLQ3QU6N7td7rMz3ov3Aoa3oKBTUnnwLAnv8E4vrdv",
  "key27": "3gycW1Z2YgkYQH6tT8KUAgJ9qHUvDWrgU6o8thyzqZDyAV1hmhXXbfWTLHRjRoYLJCpPTBtoVJGvLoHoLy3BPNwK",
  "key28": "8z7VDHqYqxsvhJ7kTUX6njVWGe7PLgWpjLPHH8ha4n1zmto5yxjaWYHBD4RvraNpgUDhvihgZX5kXYjbRHcT9WM",
  "key29": "5h4cB2rGjJYgTXdKNvE1FRPQGTLshjztwynV5sHtgewWMmGM6cA77iS2WKg9KAmH2zCtPn3LrSWYNKunLZiDmNUr",
  "key30": "3XXUtESpyArRB82DF9pNHsFS4fjxWAxUM8xmS9DLKyiYzThYKZLg8QPsVM3XvhVwTg6GsjfLx32BHvy9qs5eZoNR",
  "key31": "56YzVeNQSf3uaRJ7vqTWojZpigmHwAUachA2gxxmmHo86fUEXcMaujmhagCDhbr3tyFR3JdC4yAtFABvmJ5d9J9n",
  "key32": "4EFzosCjrzELD9FcLgXkk27dUAeCjVPTm9F7VQpUfpGyihK2P9AoYykPSn428sPUA59QHt6QNoSHC6GUJUtGFotD",
  "key33": "5RMJ83UjNeFMqxNcTnDbq2gY9Ay7NSGEg1egYmPDZeGYbtYCF4YvXdkP3MLC6HaZucZg6ezYP8QxAE8jkf6S1ph7",
  "key34": "fZPCVM94cLdypMazdYgUqRvU4DzUTx8ohJeg2PqnXQmSk2H2k9DXsXYrYScQM2bAv94tCAVPUPhLW6PjuQYMRaq",
  "key35": "S4YHMQaVzowfumEJm5rBhr3rKNTz8yT67fmiKvH5ZvMaMxWCpR6aZnCG3koaymcPg9xBdsvdqRVnJ67AjT4bZX2",
  "key36": "5u9yn1TXMPXRufx4GqXiAsjYAvj8E5PDJ9LhfRCbjKULCb2hTLyXSd1sx9XqHmmq61TNybB2QxQ2n8ywfEswykNN",
  "key37": "5czad2fmYiW3KBqG8twQbMmhk3hrxuBapj2g7KSgqQkijCNXsRdkpwm3KV2SkTEFnARLacZaxJ5LZc5HLVrNPy3c",
  "key38": "5E7sKSMJpyDywWuJXoU81FmRw6XqrsFZ5243P43FincFaJ32sH7FitZdvTmoN5gh3NRq4rMTh1yp8e3Sw212xprs",
  "key39": "52R2zy5GcrKDSvUJ2otyDYU1knUXmH4x2miY32XC5gwFnjpCtU1UXTRuYdGpgqjJNPVhUbafNTGFYw4wMMDMRYNB",
  "key40": "2jAdJWQ7d2ySZoMQXLSsKA3W4XSBVtV1QMfQadKZn8uSCBhDJcnckxfwegGBspY4K3E52bhjDLHcqndMBLK4fosD",
  "key41": "3QcbmZRhLP1HZ9RpqrZWbQCp9UiANe24DVtwkiXXE6WZLAf1VdCLR3PtQse6Rtkzv3W2LWMuutSZyLJZETt9hfkx",
  "key42": "1hbCgCM8STL3cfYc31FGcZDeA1djooQRfo89NPCTryqYDCQz7yDaDdNubshVBLVYQc3EUVErFkjgeQ1uFa8A12i",
  "key43": "2Uocv3sfCo6E4HNNZNVzxWQgRHioqRBmidNkpGJocPGAvyY3yPLBvM3bJ3ZSAb6SJCqtSDnpjriQe2Rs1cGH9FY",
  "key44": "5eUqK94aFZ1SX2FVAvg9DYqTtTMY3tAdy3EGc5FurpusTTr12hjxAV4VgiJd1cn9fSndwLR3ZLUpJ8RpM7XZJjY7"
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
