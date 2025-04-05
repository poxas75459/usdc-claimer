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
    "3jCEA7ycMEPkuTLdAXyxGtkrJc96H1VVArmGJbT543zmXusqPydCMctVGwyT5uo7xWosxu2x8BJCJY4135RvPEAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kwAuassgyH2Xcmmw2M5GoHf9krkSoNp3w5Diaomhc9SJG8himCqU9mdfXq8GXd6ceyZVWomzCJfPxrs36JXhJMm",
  "key1": "65zXyVdj5AGhgw9u2UJMwph7uvBSj13GpVTz79NjiEih1HxR59DjCAxMEePFaGrNsGCqg1uNdJNb19HtKjdp2wiy",
  "key2": "2V5pXvdUyFVYkFcYzGz2szmjzCwSQRsuFkRzqBCDhJ5NLPn2Hein4nnrQyZ9VpANmpobsgS76at7oWwGJJSie4mL",
  "key3": "2J2iPvX8CEAPxHiK2qPGkJB6AEhQ7FEiyKtfqC8GAZ41gF8iANwBSNQ2SbbsYnozu9d7jpsAR3a5hdHiTQ3Xy13n",
  "key4": "4mQDccnh5tizUH5Kon8nn1EJdwi8DVVKAgvyFhMMV9GKvfTtm7NUBCSAaUk9meNjcruGrjpkBMcUdPJLXvsf6sUV",
  "key5": "2FUt4TYNF6KH8BiDEXd93yaboUEoNgzNvwtV6xVZ8HfSkCr3ZWq31zqUQwCx14UbpDh7tsBE2uNasJ3K923DbxgX",
  "key6": "2g9uwW5EDdhRHLzhhbGPZg7XJyaqCFvoW7n62Qbq3Lrdg2WGcMhwC7ijZggzWLHJ3b1699ZzRauuRp1dTzSckWoL",
  "key7": "4SsZ1KUjaXkLodynbmLRocMfgpMMuMbQa6YedqWkPmxxjFZxYkupwrrTmx79YiPmHTfL3eTbbeqB7uBaUvzosGJH",
  "key8": "rYvztYDFCjffbZuQWwARS7C4m1KsHEF8UfArQxMjyCvsJWDyDsojdYgLcfm642i5wtWVRkwDhFdnzNiB4fW9t6B",
  "key9": "5VgWBHMhntZyVkdZQwmB3wdL7qWsAHAzpUPJx6hRyGNW1rz2UKPaL4JtNzCHGuFYDzZiTtiGjLj3E3MJ6SsXVyc1",
  "key10": "3zhnKdVxXQTL7QPSCrkUSBJVKWKToMmq4WfqdZuVVkDRU931QWCVC9pCz5DNXFkEMd7g76eA4GC6iCnNcpXPzazd",
  "key11": "3JkufD5oFKwnFrz4goYE5eNBjmiVvCPYsea458hzQvVJvqhm9gerJa13ZQWqd7iymVFt1Kd7igoCRFWgRB4Hoo9q",
  "key12": "2YxXDRsMKC5UpnLNvpdg5M9hKDRsZaZ4BrwKiSNmUPrNXRvhTbLHB1mmoRbqCp2zMDBvPsFTZXgebHsTbqTyCc16",
  "key13": "47UxU9aZez7fG4mrRC73tEU3yBGBgRedeAKNaaGUeXfuf8yXjE7vWikLFQvLkPGSaHpdkoiRGt1kRnZaxUEk7bPo",
  "key14": "4kzT3DQnbktFGjEa82F1skAFWpTntCBFg5e5YmmWd2SsCN16dUGZeokEADL3utpWg1nX31Qd1hcjBQ7egjLrhL4Q",
  "key15": "2o7gBGbNon1bfhC1g3qC3rYtUkrpDpiZsTR8BgVw5RfZK2r6q2CxtX4vnzptudFZC2xposkigddahqRo95yCeGfn",
  "key16": "3eNLEz1Zm9VQs18KY3AiBjnpNXiZB114RqDjEMShnVMpVCzfygJVUxR8MsmXTUrrD4CsMgzJfrUWHws7qHa4E6my",
  "key17": "5LaE6bMS9xrYgQaMoYNYxVgVL4T7Qj33aATF7GtKi583HPVZ8dT5gXE7yMyek94FevudbUtxrB3MmpYxnxJhBdj8",
  "key18": "4goNvY2d4WThptUzV8LP1xoSuf5ibv3c2hpGu8J7AXjXYhv9penKLV4ULYvSbonQTpKTuQDrsSYUtD3SQhxCkffy",
  "key19": "5vZdDwoeR5dnjigLUkJu8pu1qgwocwRpkkrZsZ6LNXxe5EPWaRAdPMuemxCUukAT5V1PewRZ7S22ukT7cZGRWxL8",
  "key20": "PsUx7NJe22ADyYpKuCBvhSt8JfGWpeXwwM8J2hNVMQKSSN3dEgpxW3L6vcdjvgqC23XxRaE1YsFDufGxxH9B3AP",
  "key21": "21dnuLaN6vspG6u3BYkxFev5R1ztszoikZrFPEDtvyHS4Pnje2U19iZByEZ4pjZdAN786VHpwqDMEBACJLpiWDdN",
  "key22": "5eNWjiiSatnaJD214S5VVFaErP6qNex2DZkB1XBvAutoGWMoFChKioH4mVy8kaoXoLDJXkyKV2SNjqKLfpoMZE2J",
  "key23": "4qBibg14sGakWWnTm7rEJdLS4F3hPVvqzGSBwEzXvUDf9epqHTZReN5Qu4vWZUGVvdjcQ7LiFb9URKFct9ZLcNZ",
  "key24": "ovvXoVFhrVrmP6pNJrm9GPvHZcwRWyUz2mwD74R3tKn7tvHmxnVfF9cQ3JQ4DoyHmc5xnDqL6xuFwDSVeAY5pyx",
  "key25": "5mMg1HYXoiuux2LLvyd2H8oDnNjGnRey8DbESmhuc1P2uCbCKTCiH26FeKcGgeP8oBgd2fKLhHtVtKeUnR5SGJhn",
  "key26": "2u9KRqJuenfbTM8NvRam2G4zdtpZLXDPBiRuJFm1FcE5mbtw7g5rqbudqfo6B8d5FHCPjjikwH8hUovCRBhctHdB",
  "key27": "Pyq2cykNSApYAR51gYAKUv2fmY3igHegzvNbFuA4A7dK174KLtTcYpTmdPxXy4ZuS4UZ2tDWEUuZH7ipDBAx5oZ",
  "key28": "3Hwiv4x23iP9qHEW8Rb91AviRKtvucCg3QGAGDV71sJCRaW7gCniwAhfN36UCVVHNjdbZEhNB2hnowGxm6Wx646Q",
  "key29": "5s8xAXgM9fEkxD5eBL4MCZsEdUpuCsyoU1jTupcdziWKQRERYX2Lbb9uAXnJJey387n2vRKK4h7JWxWB32Xoztg6",
  "key30": "3ovSNA6zkN4331DkARoR9PYjCYbHwTBAL1cjgq6JEiDSTPPmt1JfXSfBhyFEqMcsL1YFGfYDJ7hEamhhHNDUn9V8",
  "key31": "hyGNNB4TAcLAiakzequcssLnzvft7JzqvJhPKi7EtvBbEXW8bu5cW9t2nH5vDm7yJMfv527NJxazB5tUWMAoLEC",
  "key32": "2BkUdgu1XfnQYx7j7EAuFRDdev28VXrj91zxzgpjPd8GhwiApkZzN9Ar74EQrwmYLeMo3NZEF9CD9Bs4285iBfLr",
  "key33": "2KhhY5VhUqncgz2ifrqGRV7WBndfq2qNANFg8k1FYT3taKmFo8gESmnELieTSBstMDLnocRURXMscBZ8Ng7ZL1Xx",
  "key34": "43mZh7hLvWiE4Sbm7HCrdqpGSEJkN9AVSN4DSfPHzpD5PjRAejY4G6MNnyRU6PRrTCRZDRYgDoeRuKUmbbemXAHn",
  "key35": "2qhDVEAEzQH8LE5C3KrmA1aZHMV97LAJ8w3F4DML99geEzRUsmCm95wfLBtRH6WBgB8a6bTnoj6PHHLE1dWRLy3Z",
  "key36": "2pEtmV5JWjs3B67T6VaakczMkBcX83H7fBTzMy3T5Z2MLPntztRgKjKGpMMpz4shYDeTJoT2gv2S44Ks5CTUGtoS",
  "key37": "31QuDfPzvEbUyt3RBkspdDBZU2eM8yv1P7hjZVBXXLzSqqQ4YvyeoMWVGxXkkgbLDARM5b7EivyM4ULjJCCmkfCW",
  "key38": "5R4TVgR159bRNrYgb58w7xayGFMwLwF5ayjnwAjaSYXhScPcVjuSQfuBiqqDfhMTT5uGbSWkvmSJPoT1XciNdH1b",
  "key39": "4gJr8sQ3nLn6WdwGhb6WJLm9iJTy51UdLoHrKS6aoneTtm95WPkZqZuy2U4JPHkoCatGgMMgWQD5f4NBjS95TGse",
  "key40": "13JW8W9ADkQqHUqWyTpkGLGEZhSDphCuyG2mUXVQGJ9LFyiHt7puMC6EQGuMqMr5DHPpwhEmGbNTv7u6tFVHvfM",
  "key41": "3NHs72PFiZGaJQLpp7jUzihGpVC611jhnYmVbqva6EMDj6YWfdd9ibSULWCCJ3u3C8xHna4LGQu4pJPuJAPwvETe",
  "key42": "3CvScm8zmQfCgBp9tqz7o72teYyBVhtjh2SJMDP6uR1ga7FJyHnyKv1ns2t3yjFYXrGCyU4swhCeGBvEC765wJAG"
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
