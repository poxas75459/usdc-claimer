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
    "5wfzMXyQ5EcNM3VxxAPYXSwhCF9gW5DNLpsTMNYUxcR5B2mecwEYZxWkwoiyANRBCVDLcNUaWD7Doo3xrbGuR5Uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nhB1fBfFyywAv9L2zSrhJufcpAsJT8vzXcSXhXsr4wQN1Res2p3axYV9FWeQottRqQQD5Ys5ocvZMZ5mqigM2G",
  "key1": "4bJUcXi93irZpwN1B4Bm6uzEkR9x6MtAoTzoGzJvr93g9sdhLNXLG7haa7QAUFqG1uKgAWNwRAkq1ncEzD1LKxJx",
  "key2": "3VNGgHB8zGmaxr4yLZYMz3pk1LaZUCL6e4MJPVJx9tJyQUeYmuAM1HEGXYkY7CdYaDMEE7e4iUw2aS6DJrF58pxX",
  "key3": "5GunyRWxdyUm471kPAZEzcdhPNFUMcXSdVPVkhux7wHn7ip6brURRWCFG2CbrSJM6RatdgjC3ErhCwzjRhBXNfEg",
  "key4": "2hbEPqh2bXtnns82AsPkX9wcdk5LcDWquEmQbQcuaGG33zSi5y3Bu3hQ4a35H5cYmyW8gWeEMRJt4PbbkUmGcYPw",
  "key5": "3hSPLf9TfrQpyeZWZL7ga3ae4Q6FK4sn1W5Z9niwGrnniYU7GbMZpsc2vn2Q46HGZgdPeWZo3JjALN19QdFbZaPC",
  "key6": "5abec2jB89CRrFQFW5e9wT7mqnEWWx8Mm13tL764ownS3BTxHFduKEsGQWXaVr7uddb4Z2WsbbzKckpAeSGrwPTf",
  "key7": "4vKZWy9VSy2HMfwQURJDw6ypsKVUHwAWsCZes45ySs35QWTQZwFY9yxH2UV1d7n3WAQHizpdT1YKhtD5hxY25pAA",
  "key8": "3YANK7n2HQudRv2iu3QtZq38QvfJfoLm37fFx8Pi9KKE6tg96d8VgczVAYdGMg13WseMXaiPJdr2piPWCfRf4LKL",
  "key9": "3sCUA5kRJVQBH9gvw4x6s6hPWvuqCMmLN8Haw6gB3ZoXHCWsr1YvEiHQzK49rBh9d229mFGsixrUtKHHn2zUSQ2a",
  "key10": "3JYmkPvnWrfgq1YyQEXTZzEioMjGoC1BXXGCDinyuvfNYCFZSY5brYv1kM7rc1hMtwCnMZHV3NbBX3Gh9NR8oBQH",
  "key11": "3VkE6kmxsXPEwZPoNkJrmsrG5d1xSyvnQV7ywnffUQxCH8nkfxzCa54eMNuW1GGdTs3NTsb4iwpjjwPBw1aXWSvN",
  "key12": "3yTuivQGLEKskHkJQk5yUubXTb1PFF65ZSBp9JrMJWFmbL9eudAY4M7zvFot4T1tXzGuo2toGEqQ8yky2aYgKHjD",
  "key13": "5dcDMdrbMbq2wVKCQSbEgDdia49BLwkGemEZdUeZMkUCmUVugfDUYKUmfBF2FrqVUhY9RCz31RDEYVgNWe482Mkh",
  "key14": "5y6T3RG26tbBYfcoUjMJWMugcYZ7x2KiLMY53x1YqsZPSvSZKcSNRQzKNTkDmjGjmrLCbrUPvK34BeXaMZKa6Bxf",
  "key15": "5JsmrRCSo8nDAMDaWpM1tNgcPygJGKA71c165tytMbzFwR1qCKrUcPhF7gedCefJ97qCpR93V28GtiYoA3FnyD4B",
  "key16": "3fJf78cpbjbJckJmxrp9MTy3BuhXnmpt5PxAsa8yTwzPEHHrA4d2JSKxWZFiDuDJwoodqGvw9nv6JW8tFBaMRez1",
  "key17": "32bMqc7mmko8eQYciV5Qer2fbntxWHMyv4A4L3Lz2f3dkxjDM8sbbHBeEB2nB94tQdACe9Zqqwot3AQNEkiBrG64",
  "key18": "3j3wqi3jJW1FrYSQUDv1knh94twQu1y58DGaRxk34TFWhC5iVBYXpgFwF9hncJuTNvZr25C2Xo8ej1vGjLvo3qA",
  "key19": "uvNpNsaV33WyU5qT6FVExDUrVud75Z86Uq2BaGyVjAw4df7Pcs4QSa76qtkvheVpi8MrMZkfLY3kxYAQQkp8QJr",
  "key20": "5tuzmZCzBQ4UcsXFkDeAKsudeLVVifz14mBiFwyfgPjXJx13cz8i5skvD7ayejm2hXkBjLLy5oP6icvzNhZ2e69E",
  "key21": "3iKjxgdDpCP9aTxHoujr38xh4yTeNazBN51Z7vwbJg8rfUAKnXWhBkNtxE8ipTZfA58XUDS2YCSqDpWUQbayQAWP",
  "key22": "5Pwwi4Kk2E2b1uGbYU42ngxpYxTacUfHdwRgLGXXK2ymGgMNGoLbogkPVbcphSjezENxvdTH6wpqrkkVpvvu7mkC",
  "key23": "2tkQFq8HCKakX9WVw5Rj3eA3yHd2grd2VVjsSH88GQpvDdRSNbwhpgg9zfFsqnQbNjpbsjVH7xphbts86PP6Mqc3",
  "key24": "58JytswNiyW4uzym326Xc4urwpBv9CHMhmXQ374aLG2bmcLmvzEsL1uGpuFt7ARLULnS5rpvG7pVpEvBLMc5mpps",
  "key25": "36KTGcsxvHKkrHspHpGNJKxt7J2qddxK4DqPk6pfvF92iC2WfGW3P86QaF61nGvEKuRfmuh73xqboKCFAabff18c",
  "key26": "AjYb2Jmxq2nSHcaPsR9sevjRmhHQzYmYQMt1KdX6FPR6ds8B1G51cAf3q6K8poSqqsaxLKSbjcqt1SMhd2pPw4Z",
  "key27": "63HU7v5j817cwKUAgtiJxGho1b7Ydj4VENBrkk5KSYsEkTECjHrfdNB7sNDqBxej4Y2aTvJBJVKz3gtPT9TNFDMu",
  "key28": "fwZSRW1Kjy51TwQuFZuUS3R3i2AmPXnshpiFkiF8hnr78rKmF4d9zegkpbhuZRY8xadYJS7eVJ4Xz7EQaJ7uGME",
  "key29": "EiL81KpV6UjeqNUMxUtoEX7yxrxUF2kSDuiaKQCw7Kov8cowZQzzSA8HGB4vY1YWFuhhLZWz53UWrcBgeNznrSA",
  "key30": "46xBS45FhthJYWb2HuWEHsnWUJ9J4Jxf7toQVdyNY7CkQC52yhuzaSkyynuJoePeUfnn5DJAMquuL2jQCeuuP3os",
  "key31": "Yoriw47am2De3ha6Sg2oe4eHqmZJF9z7z5kLzSHhMCtRWGNEZedMoQ622UnLUBERnEJTZd2gYuFAimeJ15K2KgV",
  "key32": "42dXKSU7ej4L5dDChf3sQU5CKN18P1o3Q1ftUTUP77NMPt2xs9UfgWaNukyhqgPjDrinGEx2VB4g7q6KzWQ7hTmx",
  "key33": "5378r93GmNQ3ZbjhmbUAFpskymaa7Eco296anKxZzaaZTDo72mmwYJh7YSodHKz28PUUawUJvBchPat2yfzkSoh7",
  "key34": "357gNX6C3iPfRL3kag1wD2FfpFqJ6mxjtfMQdRcTJ8GvbF8z457YD6VxM6Jj3uzRGWAKxnwoqCHpYCG1wPNDyZ3D"
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
