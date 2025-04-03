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
    "37N6VW7rpihHJwvdN4XWyZMX2PHwoRdMs4YoJiCQMs8eTBqi6MVvbVFDMGrbnDjZchDiZPvTRaB6tGyqudkuAGPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4shfuYf62LGa3WqNMEjK6RMPirkxYYPVxxNJTsPMef3RTzUiurwGbrxETaSFs9dL9Axsdnrd7Kx1xqHozf78gS4z",
  "key1": "4XxnCSA2fFKP73KP9vGXV78TEigMa4t5219xVa8XXvocLJeFcYnoo5s3Euz2SVmQezVV2zpcpaLckAXPNM9yBrnW",
  "key2": "2tgW1iaUoTFY8aVU4j1U3jWrAismrZiy8aCrML9XpVK4JcGBjxYSHYTmn7TbK6wy9aDgYgv6PWG9o2HwdjYL2YEn",
  "key3": "4TVhHygJ4ak6MFfbTHKJhtSiPoVqDu4JmZaB4kRRTapBNqSymeQD5g3NuLUVC4HpzAB9rG3ydbKSRc7afbAqVf4z",
  "key4": "4x3LbQimvGCnbJTnaowdwDdYnro8yQQmSmcedrWiLW9aEaKjQYF7G3kjzbiCZ8rwZLUkXLDozr6nwt2qKTw44xKh",
  "key5": "3WgE92M6Mj8wLbHchzZEaoz8venbLFKJDnz7RujzSdWP6VN3QAaFVDtdBgDAuDab2JNUuaZdymF7Xfyccrab1HhH",
  "key6": "2RDA4UNXQ4jUZg1n5NVS3JpWaYKzrAeG2mXTy8n6e9e3PzZRmeSkMgByAmP4SWtcgQWV5kQRzJUSAfQGNazZZxFG",
  "key7": "6291NTjDUJiUvLQT2DGHBKCDhKHyFjacA74rnNdVn61Jch2vKz2G7qMsthy2iV2C2WfkqKJmfWufWTkpPeNtBCLS",
  "key8": "4X9oFS4BGWPwJDftppjiJiUjtP6ZxjBJk1WqrUCoE9nybS1F4dwh8dGtL5WUgCbyjMiGooa6Mr4HDBHW9bU9xrmp",
  "key9": "Sub3hrCK8sYuNsbeZrE1CXXT4LvivoTM9rEjhuSDmDC9FUDmBsLFAiuuUMmiXnstKAHidqgamWGUExHtvRdYPvm",
  "key10": "56tsQWkxc8WwQXakgCSnpJPheBqPqxAz7ViK7rDYg8KZhyyo6cYxsgRPoqFQxFCCDePBX6u97V7Vsh7MhJ9su1h8",
  "key11": "3aH8k5yY58tvsyJHvYfcBuxcmAuVfX7NHxjZhZFiyXFnP5rAzctUuorFL96hq7CggMzMCLjk2soRi4gHNpvgKB6F",
  "key12": "5AbD9YkJQAFmY6qRUC4yHCMFJ3GE7jCgKwBQkRFSoQvWCKcUgBSnXXhkLVot7wcNUJbA7vDTF1HntsNvTzN1TKMw",
  "key13": "5PFzuFRWWg5qp5gw6R2k66EK2L1upF7USAfsCmUMP5dqxfAWUDTaLy5sNmbUBqsF9iQHMwRfPhKZP2EhzX88Vf2U",
  "key14": "Uzr45EnPLEqEj9ssk7w1S79yi6keRvneWEcbuieWKbFK4XkSajeae3SapAw9UyuoANzeVoWWsfk2Dz9CDzAiSsc",
  "key15": "2XiXqGFALMctA4CWgdBTb6oh63AVApWPsF8Ty4jJjZcnL7Wdx81XMbggWv8RKm3RtL23Ym2KeJDByrNji4pzKXfB",
  "key16": "61EYTgxbDB2qxniqBX12vuDbqnrUuJZmmhC9oVZbV8d6UG8MGmpDpZJuUUx3U9UYwiJ5NUPybRsWHhC9wn9nGzoY",
  "key17": "QVuF5JuBFLjZUQ5dropk85dcbqh1R496payAez4hzVsbL6hrsPiKQF9H1bmjVkNfZPA7DdBeHwYk3bc76jiUWvH",
  "key18": "5peRoP6hwwz288PK8Zcx3wHxmYHMzK4nB2uuEbockzyAH4KBKEtcrXQuTP5pzH7BGhaUnRG6PzscBSig3rxTnA7y",
  "key19": "5tMa4bMT2m1DNCe4uCx6KZzq9E4Cz2AaEQGHJ2boECcYKwrYMwP6ibAwUh2PBJFj1v1rnctSitZDQSZKvPkmFJUy",
  "key20": "4Cz9Bwu1m3L52KjgtWBZvQ3sjg4XHADsnaP8s7dbsEZQo2EBHvvVi6V4MG9RShswSx6PK1GBmZqRNYLMzr59akY1",
  "key21": "516iRz1HdJxye4DLAfYeKjwsAPG3YCXzy1AJbBTSLJ7FUCPwDbRzxBwS8z8tE6Sqs8KKvdatfourPKY8d4nan9Hu",
  "key22": "371zQbYq79XMBr1XWT3WK6EfrJzqsw65BxK9KJT5EXSdgVcVn63715b6eyndMjkQcA9CuNy8ttkAj5LYD42gRv3b",
  "key23": "4NpaK3KrQfHSKtrtgtGbFJ1zpZAqFbMYjqaJ9LA8Vz7DYRd4CtZt3EFRfLte7z8zpkwi31ytnmKUSrhLngmUCoGj",
  "key24": "2XohYgMeSrc1To7cqcspafnr4QqCvaPBJC8zqh14gufWEmmmt7oXnmvZzoMWSEVj125aoUSU5oTP2sqznpKUeYrB",
  "key25": "5QqRzbFR6a7dapG2ar2KfHASyf6SYZErau8oENEfDZk5Yx72BHCcwkCSCh74i2sWauAuoWAp8Hzkfn1tpHgBWLSh",
  "key26": "RP2Mq5ohQhBiVn3cBkr8HKsMxLHEpUrGiiEaoTttJi2vzTvzJwUngfjFNoxhdqw4x7XtRyhFmnhVEQRs6sySGHy",
  "key27": "NF5r39RzrdWVRVxXP9CecqKQq2Sn1h2B4ez1xDykq4U94aL3EP8h6zHLDvUQ4jQXmTqYkpjc5eJRjyXpKEqrB1s",
  "key28": "46rnxjCQzgB6xxFC9u1pNZKV9JES8bvpN5PPN6KaXuXrELFSPQJxZtZ1v4Tk4vdvqKuHmwPRB2ZC13Zgdc3ECuUe",
  "key29": "GaUTFaMBEaLcRBj2VS1srbSKn5S333T8v2dkjoE4vfMMGpVb2g2f8xfvifjRxiRUS13qtH77Nvez3eS4xvkhDQg",
  "key30": "361maqMNtppZ8S3HkdCLg8ufqp1Joh8iTL7yTYnfEbkbRogjyCGF3ooUdSop89cCa6usugU8UgKSTwDx2mXgNRJy",
  "key31": "33Va5AG578JWjiznw9DeJD6z9QfaHJgTYhdKU9vx5fkzpzX6h4CeyNRqgApPDq3kcS5sEbSueayjjkb1pNN9cnjt",
  "key32": "3Yv6xhZBehPV8oNBTPTxhkuYrBLwF7cks8snYCt5dwKbV69zXXy9z7f52WC51rQCPT7z34cuU2iNGVaVPUpfUsd7",
  "key33": "4sAFmTUKAMFQnHvKp7fHUpdvWEChE4hyGCGKcr28N4roPeCFTQhr3BJ7cgG1XXWxphEevxBq14k8nXXF9mCRKpTw",
  "key34": "bgsepbAgNkNxZZkqKcqgUi2XmdJD2L5jHpVqEQvvTcmYMpuMN3eccedU2uBWRPKUfeVAqchk5QJ4KUn5pXnGyFX",
  "key35": "4jARQvo6ywCLqDFhtrdj6vS2aFbn1J67CLJE2ckZbgwa3t41CvPPnHxKSF8kC46t5Ba1iKfeq7v8zATW4ev94id5",
  "key36": "ZpwhrMVu9uVSydf9cQe25PbsRsetquJgLWDMgdQ7sxxajWFfSrA6w8SqF61nBuWtuQLo3HQCeE1JAXM8zS8byxS",
  "key37": "5kS4gDhx5sGwSZDmMFaxHCh2CFDaM5AV3apRthLY6hmLJdPpX3RZ1LPb5wzQ7i21eGL3TkbjtwKBtXieFPA5NmV8"
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
