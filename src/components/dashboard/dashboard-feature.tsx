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
    "2Rwwz49JSCY9yiAAYJi24QqAreHhgJJtqJriHkqQJR2GQ4vKN2X3CYbMvpZJH3LDcJwdRifMj9ivow7hXc4CrHUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JTusuhBKpUmdTMFxS7bqbdvWfysiH24cTXnSyYRm6j4aeFXMaaG5pZrhGtoxYiHgbGXkwNi7ABGmWrjLKJu5M9z",
  "key1": "5axvuNEVLCAQz2U1mbKkcAmgQYUTxifmkKDRYav8k6Jmvd19nukeiT4iEgZ1w9PiG2kTTZLgT9CpH9X4RAKP19Da",
  "key2": "3j3YhJP6dQ49pekWgjFJnaY2rwwFPdLEbzKRxrJbwAx6mkdGnR1egKmZZRioK64pTCj3JEG4rSWiVmyQ1mGegPus",
  "key3": "2v3BzAzDBVFaiRC77LAX6Pwawn5FJDYF7956dngAvpR3cu7XgZNZLXbqjdDCu24zGQbGpvE2i3DuiWWnewKCNrLC",
  "key4": "3DVaK9fpKkbSfgfP3wCEWNzXLsz78peVyGWz2PtKnYMG3pVwS91VLsgz9fRzwb6zcXSyTWEsw68M6KdDJywC6s3b",
  "key5": "QGaWvPSKs3DtvrPiQaAr3yZCPxh3c1WJh6HrCY4mGPGnmkQGtXnnpUS62tGKkuVBHtpEtzZjnR4HkPQWBLiYGV1",
  "key6": "sb9fGKYpTFJnBeWywv7qCFarYxNwhGRfWiircvURdwi2thi4hBRdxKZ7qQ46oJoehbduoijAQFraskqyuxhuGMR",
  "key7": "4kghcwGsWT6TrPc5umjzHUsPkZBSGemDnTBQUvSgKjHdhNyFPUdkac6Uo2c1uFqXgvSgAByK8zqohWpPFouE1BXp",
  "key8": "5cEURvoriX1Fxp5FEnkjnwjgHQBwTRvdHqMHEh5xtdke7vPapaos4FPNpVd3NDvQHGcPEh64zGDBy6bLwsfrs89Q",
  "key9": "2eEUo6t6DtysXtN6AbHz1CGBXLnRUh5Uped7hFeHqfkyorBCsZWeHYqagHf7onFhKq81VbVzqDNmibepXJWyABRb",
  "key10": "2XoxoqWSP4vsb9KRfU7S572jJTtnKAihU4SELpQs7HvPRXfUaDzxPEQCPqYHxm4xRE48LDNzjXtQu9AES8zUsccG",
  "key11": "5ThHVyG5XvTmdMBdA4rkJ1dTEZCbF5Q8VPS5Hn6vBWJpzpE5MCtesV5ARgU2GrHCUm6AgWYaycapjqg6i2qHsK6u",
  "key12": "5mQjCBrZbZw6ZX8rrbAo9hc9WiFKioFpH4WwPnshv2Sxk6aEpgPbheQWHSDQvvemRG4c9hh33QVaF1AFefY64erD",
  "key13": "3TodfFyDi2qqdQraFync76T48ayrArKSvMwS7AAhfqfMSEqSsL3UjG4uuiJ32Wn4TFE5bDbeXFtd8RqHa7fRE8Bg",
  "key14": "4fAJKb6pHUwhcVwcACFHA3BaVJSncM8yjgayWwt2WrVSkYTfxRRBX6Aa99fRY3h8tcfQWK3rLWG8NjRPMXSrER7a",
  "key15": "26t42LqaVrAus7pXDD9ReD3xwzvQTwt38dLFtgDJqRDwtzYezdUSMabcFdyNPDuCW9cm1wPvT22x9STk3HiV2p3S",
  "key16": "xqWxPqihmGRY4qzD18bnUWFESgnKW8hQf9JUhNxqoWPyGqpxqRiCXmLYxhK2ychr1L6ki2Lay4PPPKitJMWZ1xj",
  "key17": "5CkXzmKG6yGVxDDzvw7zxiv9Qi8mpptjyewRFfeQtXZbyhNi74w5uWYxPigG6jDZTMPF3TK4T6GWN3Cj1bjAYWGZ",
  "key18": "5emYcniL8RexgVHPHKrsXf7yUAEjL9tupSUH8hv5jBtBJ4BoUiRBptCC5zLN6CdpmedXWDkMqnGH4EPtSGJpK6UW",
  "key19": "3LyGFKhD3ADk2VFcVaG3Lt3HVARdaEA3ukTKMYHvHv7mDGrgcwKe9eqtLNMxfDN2C4PSdjfaydZZv5PBLmcBeCA2",
  "key20": "4rVTjG16JWdScJiGp99EtLNv1EpT8oHuwiJTtqHqy2dWBdsPTXzUSCEFCen5D2WBZEkruCjeMyVVE6XT4npFxtaU",
  "key21": "56fBtzZkfqxrp3N4YNYXyn92L6j53eVEAVTgJQsF9dAacKvidiFgwqxkqyTEAxPEQTHmgdNFctms3NicU3XuKLUq",
  "key22": "3ov7ECYwqdNDQ3dVoQW5MhFNMrXgwUWrqKzWJrCckb3F4v48ft32LocdEeZT6RgkDwJWC1bkjzaaPAWHTGB8TDUh",
  "key23": "3QiYWC71mT8n57ao8ppcqEJJip3eyd3oKdCyLpuhcKQKFbUgPxqoa7WEUy12FR1LTEyYNL26kuqsQoXCt851NykH",
  "key24": "2Qq3SsiHVS3NpPjG82PDw4fA9vsqDdtqVLudsEciNG4R37NhhSmZoQp7MNqBcE39Rb2BdmYhNBEWT6NjKSbmBpqq",
  "key25": "465F3qFXr514tsZmoyDXz7m529kTeXfPs4sjDPukpq2Ma6Nc88x2siiiysk5C9j44fQkbX3GKdcabUwuiA7L9qVz",
  "key26": "2uoLTW4vAKg7jxi4JaJ3iYTqUbgNMsHfH1zg6SJcoy9tKaSparAEJxZYv73qzt2QWCUUaBcEnd2ufws3ae9xW3Gy",
  "key27": "2kwrHPy9CiPJuyKhiXehduGkWQLkJgUqLH2ANgjDVpCUb2aXyRDQP5EsSeDWcZ9RAQFHycGju9mrgR3RmFgELsxF",
  "key28": "2MXocKZzh2aMhHjdoKmgk3JXvw4vEE1d58fVit6dDWKq4EWCCty7js9zU2G49WqEqD7FkRQymT7jQF1XtiQVYueb",
  "key29": "5HjRpXc2PbBz87oYp2Y6gyc1ZsYfKX4j5NmGs4WAoeQ6hpkKTxFgndaBAnjUoeroTjNPs5wf2F7N9nBhyUeeEB2W",
  "key30": "5Mva8zNMiu2r7wWuEDWoueQVyrfeGGxYtgcWTJkDXUKaKsqgWZhmYp7TaegHM7L7sDZthHQju5m3Sm4ezxg9jme8",
  "key31": "64Syq1LoYboLTCC7FdTCWpAfUHp6FBxbL34ehWadrGNAbSErpFSppYBZ6tS6o8rdwexTuRffjXXwzeYeKcoPCtHB",
  "key32": "4FXfccjYQ3ToXP6qJndhzhRR7N7u3VTzHq6XmaekfCy8WaeNjyFuu7SnUNueoKN29ZULdUDc7pweduiKzhbShLX4",
  "key33": "2eukEupfUXK5gQTTS1d3zv9vUjJ1HRcjWWN9SG3rkyHSPoKjd1hmfQkQPcwFPq9svenBiUKxBnJgEuFWhAHWB5nY",
  "key34": "55hLynwPUD9rBxAbPKweKeURBXjitGhEmwrasAghKcn3SsjVETMZkWEDWcBZNY7Yq8wBsAhS7JehAsmTZ6pkaYW3",
  "key35": "1Pyp48Bc82RRqziBtWWM3qKdbx8hhcfE2mLARuR9heZnAErDvTxTZaeyLcZoQky4dsBhktjoEBKDaebAKvRikH5",
  "key36": "2gjocZNb1tjWJmAF9W2zhc4fiaU6rE3KcTuGQgmr455FFCso8eZ7oH5xHfD9dXAa3iB1wSYtfh6mBbisWUUbk9vf",
  "key37": "4qhCXwjrR5Rn47aWm8coAmeMBPwqJipUjix8FF8EsP3KbVnVyQc5UbaDrvLVjrcvnuqDMWpTfcABmF6bzFeBgH5g",
  "key38": "4T2owEyYEaJFvxQFZUJ4miqLmB3CJ1U2XPvvM1ch96pC4WoYEyXAMcba5ndmDftFZUSsgognJDU5iC7B6BSxkBcj",
  "key39": "4gSNUPCWLpfHfjjsVQ4UtmSn1Q9yhqQMDvSj2XFKRMigw9c4wBXnPSS9S4d6JEywUQsXHEafyc2FJaco6manX1WR",
  "key40": "2sx5muUc6aRy3jNjfHtiBrm9CSVu9ZJgofNMgCFBbUqUVMHRgZW3qK9A3meFmCkkQetqDvDkwCGQ5kJuuj8oNF2s"
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
