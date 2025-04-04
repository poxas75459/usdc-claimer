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
    "Ccr6BDbHQX9NcKneTm9wwYRQzZpZhBK3oHuvXjHMiVJYKttw9Dvr56i1VKED18JEj3recrQVAV1MeRcVmFArA4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LHsnxNwkfjA5rYsc6F1c8RQho2hwxrz7u4faQo71c1cGSeWWVTcTPqSqemNgfxccoyiTKYQnxVxeKec2EoU5kqC",
  "key1": "4RizT5gcRnwLcf88reeZJJQnXWnbeARctevExnn3FDcMmsotrAo7t6dKgDr2JHH4NAcod4m16rwMRvEd7YB5KfHR",
  "key2": "4AjbtYVkYdiLqb4kbmsFhSdPzLuWGLDjGF6rxdSU8TYkbrLXw9sw6xxshwrDjK9RheT9KLQ8KCqXEWB4aJoYswQR",
  "key3": "2bLbFwSs3bjqU97jUyMbU4Ep4FMBfgz8mWnbFNjbNeURviD87LfCLohDumKV4aPmvappT8c2Y4MvMbHyunnureCo",
  "key4": "2dkCZJZ8CbgK6Zrc5ogeua4vzwQpKRS9QCTFD1D4hTbqcyLfyMsnxZUNM5ZTCFLx6i8h7v7E4Nfg5EaJWF9hr4fM",
  "key5": "4HmgNgjfyAkbZQhw35zSSKY89Nvg74ZvtBr8XncVMCXPtUND3bQMZqP2vHXxD8EsRZe1vCxKPUxn2VJoDeDwvXgq",
  "key6": "wohPQWEjSxeTi3uL9jEvhFVoMX4psrcnN9Edqz2rt3U1V5aPLkYspQTjwdkUAxLzFpoLV9xWxQe5r6W5Hw9mnTY",
  "key7": "3wbJxipUfS2JsLBC8kAkpENwZiRQURVbvYvxPes7Sjtw9ax7wL7PjNrBsm61bfG7Gb5jf4LyQwGVdKVNiqFooJXy",
  "key8": "TQg1EGNmuiAekjT1sKzjC6eKTLnqhAP2xMm2CeCdvrkvCuVsUZvpVpnPmPWCSdwdgHzQ2Nhueof9KpYDsBH3TKS",
  "key9": "3MGGx1yDzJo9pDHE2worWnsem3n3t29Yg8q4FQQGa2SDhFAWmbvK6q3Koi5Nd4497p1uNiV3CTmj6pTYYt2SKie3",
  "key10": "4oKshMCi7EzQS1gXMdKimnQNkspNsJkCA5SNZwKwdZnu6VcEVTRHjMciGAm3SSYhhE92umkc528daN2ycouNCdqY",
  "key11": "23yEzaaceFbyZJ3dfGeY57uYT3BES32GuSuNnW3JkGsVLBzgfnCDJ4fFGK8eLaczc3wLxsYCbev8Weioz5TsHgeG",
  "key12": "d1mU1wvRzdEvg2dZLmusPznSQrZRF5MsdD9DXTaMCZgaWbgnN1KxxKGtSMrKFRQdApPGpaWiTVnjjv7tjHPgvem",
  "key13": "2FX2zbHKrrJ2um7zSKUdKD9Rs2hXv1LHW1ZdEVdh7rMp3mt6cWBScNN9Rv2F3sdY9VyXUTqH14XzYjsE7YJRzUnY",
  "key14": "SVVqfFdSGYL1afGuNCtsjmfPvqCdJ791nUuiHUGhpvJfQHBj3CpCCRZrAyaJLh6DY8YxFc9h8XriYA9vfgS7K6o",
  "key15": "5w4oXYsj7EVuTLJPtc9GbfxsrkikSWC2oe1FUAwa3QMutAwFGs57brKw9Ks1ApQirsMtBmWvCMgqC3f7h4aZYcZi",
  "key16": "4z97gkDZo7rSnNLYezXH9Gmi9GdjijU2BCjLTZBCnmViHmYwKdyUwrrgT48SFFiAsYZvPB9RwPHXvSvEfq4wJw5W",
  "key17": "3mNSzdwZtPutHv5Lk75srb9vpnN9aJJeMMfU3EgjEfydeiyq1HgNVAG6347nyZXmy81sF3cCnZeDU3kTKUfChBM6",
  "key18": "4xhXfbdAPSS2vsGWKvuJ8EUYkqjvzDhtfL6jhPjDP3DdE53fArmzZ4RM3pATJiojBGjNdDK8LdXdePqR5E21Egc7",
  "key19": "4LVeHezhgubfPzwmAjy89fdjhLzdzVcyL4fe3QeUPXqLEpXxQRgVqEry3TVQCvqHwQc35TFcTQW3Y6NvKHmWamuB",
  "key20": "5p8qGtcH7e4yw31HzqAgSeWfwRqE1uyYNKCvrijfbDNSRtnJzpX5pMKaWdDAy4zNFbfLH29J9mfHS7N9pBjPAyfW",
  "key21": "3ZuroWFnyhXx82f4VCqdiCznYU6iKLG3xzcSWnJ2b2FrQjkyJLtQwY2ozviWBvYr8DRKYj7CTk5BKmNxKk1T4NxT",
  "key22": "53xwjnJj4HraeFYoZzHs8T7hCvGffbNWf5HtWuSYTaufJVe6tFMbjSi8nHS8mYH5oLHpSixHMUkHXvq17jqTEkwz",
  "key23": "2MvmVeMVdFrd5ksDzLWqDydKq8sKL6JLbfdNRkoRwJmTe5rp8cMrgVDTEJDiZTAoFP3n63NXCNMeEWsXACtkdSxk",
  "key24": "2gYLr18YTip5vzqxEcXupgoEzhNYw81xZGC2xGdairW5ywQpW4ZYswsNhQCSbXEvFP4JpXa4aPePHza1d5ZvuEjc",
  "key25": "4UbbrejMbm9VUhvgkR8ocAJ6YLYWFg1aj2ny7Se3vmwWTSkyWmL5oQ6RJS2LugzpsHYz6CkPkWpsgbqJjCBAU1eo",
  "key26": "4ECc51oxon86NMFd94KpPtGutgjvub8GB9faGSc22WoCev5gjjJCLyr4iTxZLcWfkS4UKL1aLmUrodzZfyrJqv4g",
  "key27": "4WcTWVj4azHudReG8HbiHBNvKX9gRUYC8D6d1Bq2JrsfcsCMNBnG8SGFyhbMD2wp9edfymdQAJXcFTZJbypxfyRk",
  "key28": "3DVxGpiEmErKJm4UcEYL5UE576JEX6zm2dLRN8d2q7GndwmnPTrQNi8VEmFNQArFmRsCwxk2emje99CCWaNNbknD",
  "key29": "NLhe41UvUthVFrtRghj1xjAM7j3xs1yMCQSP1rt2fa37mVtgBcmoKboGiJYum4CM3PkHCkZjcJyb5nZu77Rs6iY"
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
