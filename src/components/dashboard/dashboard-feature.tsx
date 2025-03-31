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
    "3SwrJRDNK2xiURtn5Jboey7nbmQpTmtBajBnwybomBuZtYvshfL7W28MgVrieWPN8oZeWiJFv8dEcskCo8X98tHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZaVBrqMsbQjeTK1EAnP7xgWtgjTzTkehAq9iCKknn2sGLaBjUp78jrJai9wCF9oPA2EoZYYUEU5YaMyMfjtBgg5",
  "key1": "4H6zh42GqrrQkCbKVLnAebhpBH2SButbeAuZHvxMti76KSpceCe5ZnZMTzW1na58heUEP6YKBqa6rJJDBcoiav7W",
  "key2": "3iPhDYDv18NTHL3JFLLLfSmJCzCWeSrxq1AE9tNGMzTmzDhVGRCLdVGCKPCfrNLZDZ33F9P9DEpWEoSmQShnoTGz",
  "key3": "WJcJVvTTjYwehStdjMkGeJzh7oadeKpkPbNDqMKNtuTZkpC9fzkPnyVXoir22PLZU1pGBRArq1RDP5eP4wyoEzR",
  "key4": "4WV7asmiVDm3SQfy6HSH5pTTyDMwuMVYb3PbZphefVTiSzPhfRAa4qqKk6v5jYYrfdamDBRNMx5KnAwTwZxLz4co",
  "key5": "2an1vhkvj6XKKXKCaiiFgcxtaeBUNHDLP5aMKBmguDWZQM1pKJhofHu3fRv7FPuSRQX6YxYKBHMjQdTz9iKtAC74",
  "key6": "nJSrmgLRGmSxsENzha6HgPBCT4ycSPqqRUs9tDXc9xhuLPKxhoAfSZNowToWafiDTvsBeDF5uFsNK14RQtzKBdx",
  "key7": "4m5BnfuCoX5o4sLi3qd7fVwa4369cTfnWoWanJpB5DGR2bPzEBRB1KLp9y4mYcyGSVUBvNAYwyRzt4W397VBAU2w",
  "key8": "2sBQ79bzec6YHWtXRE3hW52nzNM8XiwceypcWZ8rac936JLNC9c62yZcmKJXi5sU4SK3GodzU5YoVqHRpx9JrbX7",
  "key9": "4PdP8t36dRm9C8nSi5gtQDNzButEgFnmyTCBgeVAjPEdDkaKUdaJMVyP32v3jdDaUMF4pQ5RipVYRtgx2viCffza",
  "key10": "4u9cDeNkGzegeidmDt5mPiR8jExcxV6yNJxajtEjnyZKYoeo7633dQvJYeW5jJ6ewvYxx2sfg5bnh6H9QN3QGSPM",
  "key11": "3PG52fmPsF6J7hjXNkrfyKWKca77UE68yXdQcRhDdij6ntUaF6qBtc77Ggac25MtFrzzNwNGxySYUedVpZDNeKhc",
  "key12": "3wMcU9LKgLoGQcDFE4Ctx9BiRhKjCKsd6oLAPv4mHiZSardBfKnkkFpzE942WFshrv1kixaT9KsXU1BrDi1jqAyH",
  "key13": "4VdhdGxbXoQFdgDtGksvC7DZqzUWHNMyKEvJU3nHzjrg74MwvG3e9sRGVsXSKSneRMb9AMwr1cfaf64n8PP9GhBC",
  "key14": "2nebxkK6uzLms7Mw5HaZkfRzTV9hBSw4sHfgefRYNyZYonbTWNQ34otwuEu7qVRSA5peAJpQzfK9W9Ne9WGgdrJV",
  "key15": "9vo8xp7iwxjiA1qLs2WwWmAbc8iKnyNyHbGfSgaUr1pgV6wU5nz2nbEuMYgX3wfHPjyfMLtuRJC46gZeifc3RUu",
  "key16": "u9Q1sQryHuU6mUUD8s4W8srYnNh3JGG4Nwmzyay7Sj9JMjjN5ekfcuvXBWNH667Tj9gYyjARpzAA2hbyE99gXge",
  "key17": "27fin7h8y61ea1gQ86Urb6fmQp6gp8hre8BwRgS1nE78Zczut6UQ8r9eHfDZq4TEMRnjt6omjXV3NQozuyUpVnyP",
  "key18": "5dmR3iYPuUatEMGWN5V6sFb58nTTkd7fQQV3sAQjjfhSUxiEiZGwiGs2xUtB2FoioCttWgQ81cmSRiBDNiRVPgxA",
  "key19": "5AejayX58kk5VfAgCQG171ZGSprrHH31y9cHDL1ZLN7LbZN5RQDgH5DBtagmoLNrB76eeaGhsQqESESUPeQieWGS",
  "key20": "Z2o3x8u5Zv4HeBQeEH2nbTrbCcNrWhR1zaG1BoJzJSWdSUkGz9iUpCjzZ9pwbMxftuTsAn71mrf6N9GzXTwA2yL",
  "key21": "3k3cmzoXuwFUA6dLwUnVKR68FhFonR1yMn6BG8YM6Xa3KQeHXzM43vN9qSXUK88WVkcJ8cCQKoVEML23qXgavRPQ",
  "key22": "5Z9crAGDkrwqdd9XXT6WBYSi81MfTs3iPvSXFgUqk79zmBRPYbXx3o1xLAPpNiUfD55t9b3adV8Bw9W6aFuWuABb",
  "key23": "3ihQNAR4vcqnPwkcLWaUoicMTqmb8K4WBfiQRv8dj5prgdrHaYZB7dUXayqovSYEG4fNGb29ZrmJmFKBiLxjeYYG",
  "key24": "4JZsHWsh6TgiHzfCbEbeMdyvijsJVyWgvJcnSeucdDncpoiTubV12CXnDGoSmty5n48pVxdSusfckvHoAv9P4nXb",
  "key25": "3D8onyWMX3bVyHXpMNX7K2VWZ2YhqEddVDV1J99GXg5dvkaW1EtZd7m2nmM5kXpwEgoEW6ga4a35NEKJeb1hhKsH",
  "key26": "3MkAhUyaaFe4vb1rzX86sCVV2LHnB3GEpv9mU4uC984Bph8REAJo8i9boe7Q6SHuRVU3ExjiExu4kuQWkvxL59qP",
  "key27": "WxJXfVgHLsKNwBH3h6CxvQuNVGMmpwxk5AMRQSd29hS35DofKSByh6zADMVqMWh9Jp9PehCJaNJny2kK6DcZgVN",
  "key28": "3KJmJfz7FcUqff9KVSrzcLhBKGusgVHRP4HQqBWVAtuVa4ZRNz9QuZFWHvkfHK26CQC1xggLc9NCbimR2wkYVZLG",
  "key29": "4AZUabf7U3FxyveYUmbjNW6LZ5tQbY2X7uZUqyW1NETJ3JE8U89JXrygaaBADDo1t4Vab93RFGkCAusk2C7uPRb1",
  "key30": "4Aqw2tWkctMrbUnXj1ZwSede2rrvKGmbenbxyexGLxdgWLxfoxjJwCkHXrekgYjuH55nu8ofnnBaMKQtg1Qtj6NA",
  "key31": "5i8DzNjKAg926EvGdLbCJif9q4qStm5XccxRjiks9yr1Z1v1DvZpuPR2iiHnGDjFYzDdkbm4h7zfoU8s8CH7tYdF",
  "key32": "PFRjSdyB6zVes1oULsMK9xidxy2E44BoEBqg3PBv2Z9CXKb5xoC9BNqBXAzEBth1ncEZUsWN6bNL7Xn2a6jx4Lb",
  "key33": "4tbGYXqJWyySWxEB883TwNk7nACy727HugNbhaacPotPCn7NS8hdxhZkKzxf5qFPmffqpBxP6nX5SdLNUYvTG8pX",
  "key34": "cfHpgzCv1yk2U9s9FcTjZEru9axBAETLM5qtPF6KtNdhECiFCRMrvCiQr9xsTWW658G3EtnMZFxvpkPmixAWquV",
  "key35": "2hv1CsrG61Bzuzu7n6upRfKEUiV7awQqdiQL9Kx7v3uV78dghdbCC2m4uxdVSZcwZUr6hyRsaRV7fPcKA6HqBAZF",
  "key36": "5wfKHwu6Mfkp2Vnf9M1MLfpmBwCNmkB7TDomSjqsgDePhf2JNFBoEGkTsxxnoVSVPXCbjXaXmo8TVjERmBBWe2PF",
  "key37": "5ssM3ffiH9kupqssPiXLB4rZSvVYHhHCHzc4adBCzLP5Btz98UnSPAcEjxJDgY8TfRCR4agtrsYq8zV5UzXk8zkx",
  "key38": "4pD4r86S3SBryAL4migjmPVrTznU2u4JcYx5ZgctaL47CzfvLsajvVqKqC1w8BPDFRqNSEQPgdz3Kc3At3zMVueE",
  "key39": "3aw2WoQtSw61KGDJumnYVy8Soi4mViMabA6XRKj3u1wfhB4PPhDe7u3XK9k6maUyCMNKYTzBha79M1ADwcwY8251",
  "key40": "4pcvHmLTC7FXoJKxgk2M8uLiDegDaYZjuNHY9SPqLKR2LLXAu2ZSagb3m6AvpvKAjVRsd7fZr7ZXq5ScXrCc6aHU",
  "key41": "BoA5Dz1a3NznmJFoV9Tcrhx2SY7pC25kjMaGdoA1YA7rMxJBT7LzKBLp3YNFYSEeUfAmbQCka4g5PnK6rbr3cvY"
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
