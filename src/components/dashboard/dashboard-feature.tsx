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
    "5eMdYhP1JGwNPGsmwMwonwtnz3LMVW4R5ENvEoYbnkDsXNmfWGnYhefVYPbesxJbGGga9db8yeF1F9AhFSizETBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUmAWYEATvHVwpEaE7C2sf8EQLhxmQX9n9YLcn62FDJZBipWoPsE416VxZCgSzfm4hbVK2EWyhddGgA98yYR8CS",
  "key1": "4i9PCVto6sGX21F9bUjxK6NwxxBCrGRsvNFvJ713h6eGNhhcHRwqniPbp7Tkv2VNNU7qvh9SER7kssdgBA8xEy7M",
  "key2": "5TvHkrwUV3dj6JcC67ScsQ6785DQ8Xghzu512cFWXkR8Md1MVQAasossuJ3114MTZZfUmmiGShByyxi93BHtqqBm",
  "key3": "5mbj3sSzcpjYVhFQQGP9djybu8PcmCBm5JDfCebL7NiSrQUBq1hsG52Qa8ANvCYAi4JP84pTogH33CEUL64WXaqz",
  "key4": "3Yj9M9BjAdZ3e2RHtW4xhHC5CX9A8FeKv5vXD2F3gnWn9evpFaPkeyJCmXiDjDFv1SPubT1WSeSdfN3fMrXvoxay",
  "key5": "wHLwQnr7nuFf9gcUCNpFHY8QH5SLLzvSwXgBE3ZVme2KoQAPkcqEmZww4x7EErm5ywu4bhRZXD3Sd7W3geQWm91",
  "key6": "2XTSRQeHJLy7UW4Npvhgy6WUPLkLLgfcAQmrJVW8hGjNagw66ykAwXny6VpMa6pptiyQo4tRxSa1scTo2Ad1rHLh",
  "key7": "3KDXKEX29hmBWR8w4t2ndLfbNxqiRqF59oiJMuhjiAA4TZVva6oeFAEjsd7a4ZvcJikgx1oqehAx6g4yJ4BUHmwv",
  "key8": "4xibJ6zXjKRNiQ454CcFye6BLTuY9vaLSzpaPKCHkQ5aSW3WyBRMUfPLevLeZK4nQGeAzpcJMtPGgUX4saoQxmcT",
  "key9": "3ozJosVdx7DmverHYzYRzTJ8k9TjUqitPuDUCQL6xe734nM2jDzWq9LswLpBRQAuUyyKLuo8UEnLA9ZwFaN7aX8N",
  "key10": "3MdsJYe7aWd3NRtB96XARk8piK9AjzfTnDuBye3qPYxWfwArr3prCMHgm3cfeF11ZF7fSDifR6AFpXg7ghwUNMuL",
  "key11": "5pvpuDeJiBaFeFobafK4ynFh3ysq8e51Mb5p8YfuJMuLTS1rmGQhtU6EuMGUMeLAvwMNMPrgG4QBLAhKKLFXmfCX",
  "key12": "2sm3WJokwm2cMcCALDCvszXgFsjg4qDqKNymZagZuMv4oGhWJokPaM9oMg6ksHYpguCQUnH5GcwCCZhZuENYLoRt",
  "key13": "39uLutDRfrCXngpkJXXdhJu6tYDrfm2n5n5jYBQ1St4Y7gNxAPU7KGVRe64fzuNacAuzuRRtemkW1HxxhEc8x2qg",
  "key14": "5RkDPKoeCRWAaPyanh7qnXXTWSkKa3VUaRPskNNGTFA1iAvXgsqKGkcona3GHatU1p9tKXzjrdak53UsVSTAF9xR",
  "key15": "pi8g5YsBVvT5JGLRcrKq8NizidSQzPLHR6BbFAyArwsjRz5QpefALFCAZKkmVkcf8DCvLaK37t1H8FpwBnE4EZL",
  "key16": "2G2tT5BrWTQ7cvKT5GWArKvQf4ewetUmX8RoWSL8o9dXmVm3XtBVr6pYJiv474hQR1pjk7yccpikxdktrahdGLvE",
  "key17": "U9bqTsBFSVAA966ytgX3nnLP5r64LJXYqq2gsWMvRAQXrmX9FhDyTdi264gBBxSqAsY8JGd4F2fF6abibzxjMM3",
  "key18": "5U2KuZoY7uhfSNkadQWxcb7Um312axJJDXXtofwSmpCZo79v7Dr5w3LNkdokPG1DChkcedqp4GiARLzdw7XcEguv",
  "key19": "w3k1SinkL89KEL97yUwQ7w3ALEyyjsTpkiDjYPs2svJESDsjUwAXQNVK7qYGBQVzEs4sbjSoVzQ5u2oHJU3WJFQ",
  "key20": "PaUAcstkWnuc5JvCunjDw242n8APiVDhK96YxoL4t6E7j49rA9N83vueu5u5cjFHqHxZjvrGRmtUFxNTcGbMLNC",
  "key21": "28jGDA93hKD1rkteXsghavazWGyURjEPDyN49VaJgiwTgb49C9Uv7M6ukeX9DqsYUzpd5VYyeKLHRhRJQwfq8JEM",
  "key22": "5kYgRHCnrc2m16HpDL1kHa82NujetTHofAczP3HeUBjaRKRNaHxat946Y7tBoNaTqDv2tYf77uZXfZTw98s4Q2AS",
  "key23": "59HPg9tCGMbMYjHJzYHZT9ZFf6xwtwLVmFnJktu1XGsoj6T8dKkGFeVGsip8xqetRw9MZBuBBHNyLhxoRKMZXDVe",
  "key24": "5kpYRW21ZuHbZr78pKZUSW55xUz19yvLdayw4kFYN33QMzS5uyCLjxg28UEth2vhAJTEiDqxa9PhJAzYkGeTnMGL",
  "key25": "nb3891bRmHW2aPa291VDb5xgTWTKSf3oGtTKQ5BMUReEwqbo3F8VKas4eVfRM8jBU3U2Gruap6YE2kTzaZR6xbj",
  "key26": "2U5sCWKo9yXid3se6854NCjhPSWCTPuyfuhGthDZuUu8LcB2wsH46nwzHzWyqFaP1mw7K4PRmP1HjGT13FT2duqd",
  "key27": "32ynue98VrB8D5fhKQSGF6qi3D4hWKNWxqw5e9NuDywQsYcPGom1WUdrBQnLk3x5wLW83gjM9wCoDiqJ523uVchD",
  "key28": "5CD9nrL4nNFMCDipfD9E9XkgUFEdBHpHAg7ESrN5VXtw7PV8LzkZZ5ZY3i6mN6SnYodQTQPbiAgocDTvo9xjN8gB",
  "key29": "3ahuNpqHTPVCtoxXdSTcwDoV35ArzjiGH4tv7duTu73Fh7iUUrun7Pj5F52Kz74CsxHutyT6udjHXNDgGViEBmiN",
  "key30": "2dzWGzu4w6pnXNJfiDdaG1XS8R7CUwxvfyZL5cKhMNoPk9JNbCZHREVJS8mzaRdUi7saDDtXme1EG2bmqPwAQU5Z",
  "key31": "2rd2eF9AJUit6EB1pNZHHDH8j18UZG38pge9fASPHm44BDGiLjAMmEUgjjSeRLm1Nee5ER32tAZU59mwgC5rctvs",
  "key32": "zzwgRbgFH7AWrKK5EsJk7qJbxVN9BnWeUJtsTLhpa5kg9ocBGWqTtMBbQxWwbkv2fhAik4X9AYfb8MXndJ3XRGF",
  "key33": "5ZCtzcvKZGDWKqHXPoTRfaTT5wDTieHz4Dm9WKYg8cKQUUYt1S3A8Hp8kFUmDcmW8ix9CZKMERdyCsf3HcDSiLSg",
  "key34": "5UoQWg1SGe9iw2qDvmHj3beitzbrvHxcf3WGVpVPeZGesY1bqwTyLTTuuEfyKMwr5sBvh5BZhLrL3DrXgGppfdER",
  "key35": "65wtA47yEa23oEMxkhZHPmhBZFvrpoudKqXzpLRSLMu1LJXYkRYNMWHdUp4cEZMZENJUb17HzTfHH1FZpzjEAcWD",
  "key36": "25xzi8yEmrp8xmVDy9v2SVJ8cpAcW9ovbwFhXo5fcygpKiQxGdg893pYrBJy4UGSRUh66aXYxoSBzF8gNL3z3ohH",
  "key37": "2k8TfcrPrr9tgDoSWPFFewPWVoCnDtRNCveBh8hzpShq6X2hzrwKxZMvc8bN5MGr3greBnMT2GDhKYNcXqv3Jmoy",
  "key38": "SqUGrDx6CxsqJ96SJsj7hDBfAY1dEF2EuzmUt2qd7f7iRMPa49Dwy57aS6ZSiq3VLi2r2mjUHW57CKD5tCNd9bQ",
  "key39": "4RvTcV3Ws8FHa3zxweGHYGncnwZYwTgwWGM4C5VNawPSAgS5zSRcKiz6E3EYfMhMvGCvGJ1JXyTxwP4WFgBjmSY6"
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
