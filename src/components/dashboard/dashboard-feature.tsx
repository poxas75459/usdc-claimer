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
    "51NwUqohYYSw59eXxXJ7LP2Nnb1gdv3EyCGtmVof3VpSdt1J3gDEwPNkVejdvWePNW8MFyiUWUwaotnTcTG81su2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EsvQquscY4F1xCyD2k8gtP1soXgjjA8XG5pCb2r7rzX66KifKS3d4WhLo4983XK2ApE3gCFEZeuKwJGZos3DEwc",
  "key1": "2QMNkfJX2rC7rSebSUUsPSZvbxMgYCKGCEUeCKyFsfnxKGPHrYrGcEiScCgHrt49oLacvnm2GzzyUjVRqidMTx2W",
  "key2": "5kRRFhdAHFmgniwCE14Wi5vKCmrueUY7uoz2ZetmLTsvYEYWBKYheKxJ2XtKAGAuGZetMEbo1SFuQw8zDUnujb4j",
  "key3": "3SYJTSwVgMk3VJyKV8PEu7bsuGrByQ55FtwzTT4637tx7KmzSomRsEdyh1P6CbB8fETdLj8rx7R4ymZKGb5kZRcJ",
  "key4": "4mUYExhss8MmK3XDiQc8Daxc6zn4xtYpp53qY7LPhvPEoiYrAUN56XD3t4rWFNSnY2HKW3e6vUZVDZ4e3fJahqgX",
  "key5": "27Tj8adDAW6omTgAWg2HWftHMj9XSzM4kBYffNsaa6wS6yFUjZFGJwMLkKPez2veJTrtpYukyGByVmdKawB6yoMr",
  "key6": "4Wzw4SaKJqyt6bLP7Ne5VVvE1dZSrGTEuY4MWhokKtjWRVYFUY7vfPe7YdeySmu2i7MohUcjLD4PKoNQMAEQjKt1",
  "key7": "5Z3qoGxJzmUux63JfSHiY1RWYBujJk7KLo7m8ULQbaPo4CojUCcPzpsMH9dqKLzWBdhpXWqcDKzSuCcqevwYi55b",
  "key8": "2GPGBK5Zog8aCBsCcZvEduUAxrLaQzYFzpQeu5rwWCJFDcFS9DdfY96aapQfV7H3PHtCn9jbp9ufVa6aYwDqVe1z",
  "key9": "6746Q1ss96FYhiC5pJLryGzn1uTa9nF65ZMF2HEwLxPZaxVvRRdRhYkw1nmsvZh3rt5eWKsM7uhsZ4iAWNhfwyDi",
  "key10": "55Q3MoCsC71Y3gEf5aSUDbLLaWGcFTvZRrhZwHKRU9DY2pr8oqwQ2jTAUmnpXeTsLZsaG1a649ra97wk7RC6P1nT",
  "key11": "5qxbv1Qy7kDeJ8Ayg88i9p6fKUdrJmw7nWD1RRSfh1jyDEW7uLPKTjsKfMpXa9U3J37dxHAkPrpyMQ4Pj8QJctZc",
  "key12": "5MBBfPAyKZJFwJq36NJ4T1UWhRu1Q4WSLZv8QD4x1qjkuMWnfTZA3xs6rTxjGJSeBZfWhY4FqeTYKE3evkkApKiA",
  "key13": "49ANCWrK1MLn8TBByVhH1babJukv8A58kuQNQpRvQ3rXW1UR9tbJm5wDFQB2H35WasyiTmM4KzFbQbprWpkuAvmh",
  "key14": "yfV8tKgGVBQNmX8SUg4bwVPbKdUZb546b7EKThtXWiCybzS6EKLMQNAA9uDMx5vd396qCSL3ur9dJ8WWjDMM5jY",
  "key15": "53FnmpKQZsVmjXbfP1U3QFpEPPmPcCfMD2MWkYEfs8rMwAkH1TxhCrzGfMtuHie2WvfAdb21U8JGpE7MkMTHR2Uh",
  "key16": "3V6yrmZjvtpygZWsxrPdMs6Fr87vVRNw6L7bDM98GMziSLSyozUot7vo5TU9PmpTcsbf2CahYudhRFGFJfVzXYdc",
  "key17": "4RBbXWzJUmmm6LSydn39G9V6FQyDEzgULKWnBguJ68rUFJQ6u4yr5RbR6EQ9c5MyeHQctCtEm7yNBBse1EaHU9VQ",
  "key18": "3i8s8oqF1ZiTWUzjRKFsSLqPn1ikhY86GEZRRRb5HtULZ23s1r67N5wi19sz1i3YiEyAQYuPV3g914H5BBkiuP8a",
  "key19": "4Rro463riKuPtJ3qpTCANiQ4LwrGsUCd3ruYq9vEpvpoEEnUeBy4QMDEyVAdxHpUP5hDRJSzuKakHV41b1hDZZ8Y",
  "key20": "454EUAE33gF53dw8PoVrVqkmxsCq9ZtuBjHP3L2NkDGdaEDrFrtk7921Fy9Fq3dVL54cZxrGZgeECkaHECFtmNoD",
  "key21": "y3jsKKFybqyWwLxiRfQTG6JyeQqg8sc322tLwhmG9Qc4vJte41GuMdCZ84fuH4B2ZZbRgRE6zS6vGCaAkB42Gz1",
  "key22": "ZgLTcSpBFPi72YzD7sWwpnbPViz6dTuzcyj2eY5AhziZMvBcLPtaSRaDEuacDvRoRaF3vQfTiFfnQ7LVkt7sfUM",
  "key23": "s4s2mUA9L5Fu8AeWEj6aLx8tx8bD674rzRCT1YEFxAD4UMxLUK1VdTp4EZZMhe4ui33Y89jv5tsmwEMMpmbBH1w",
  "key24": "p34asoaasCeB4VCQfvozXhzk1An77eWUgjGUyrPcuJAzEUvj1t8C5YZvtUb159KGNUUH43VKY2Jvert9b3Z5JN1",
  "key25": "37FALcJ62XQPEuwcXkzVMMSvkdHDHxFoXoSdG94JTuZZBt3a7tJDYbJ61kfCXMKNWn3GNxM8QfY6Djb2Xx1C33Q9",
  "key26": "32hwxG6WV5Ry3ecWKSmXeqdSu7Yutw777Qa2mbZmb1dXoxKD3PjGJVFxoQ1q4AQEenpNtpC2Tvej2fdwTnUwn5fm",
  "key27": "4vgHReswJYGX9mhqQ95QzUWM86yZdbifFSnrXWmoFPnQVfdrPsCtgYUHNwx964x2TidXEcJQJ24GbdjFki2NwUSg",
  "key28": "4KJFQt1W5JSsGyME5VrKQT5iD97d9t5QEmFZ6h6Bk73iJQsMR12dgL1ZTjRFqyyFYaFz2HBqgAxzvBfV1ejvMyvk",
  "key29": "D3AunpHBsfRiCxaNEVqCVp3G3S8hAmLDrYoD6p4jFgweZpDKp4PWjyAb8uWiTk3zZQ77zkVSsqmemwNZo8CyaaZ",
  "key30": "3w6bdYC2e1Vu98mABBQPaLq5BdPzfpLUbbjDwJ2qpKwMW9T8pKtD6QVgdzXMEYMg2WaTjLYDgnCc1JA8AFwjtF2p",
  "key31": "5ZWdi85hXeMWA3pUciFdVSErdRpAX1MyYHfdGos9fC1uxD3ikSav8s6rN9pVkCq3QywFdaRSKqPVXheNonMj9tbr",
  "key32": "3GYYNo1DEoEDr2V1mGZBifkdWnFDej7ognEJbLHwFXF5dWNhWstU4TfrxvXcDdcVL8mt2tzKXpaDwPSaedwSvQwd",
  "key33": "2ZLAYBugoJCsQhiXspptKfnbRXVgAA93GPZzNbf23nFTbPsmVptytdrxGEfnXyL8CQqCqPyE9A2sTHQN4CLqStQP",
  "key34": "2Xai93fK81AcEBESXRmVpsw79QBmsj3s18WUDMSWfUX1Jk16o7Vx7NHLLyXXxDe9jSBq7QdhhYngsokoSipBRgL9",
  "key35": "2u8MYtdrJEkJLki1zeLKSXiHVGkuutHp1nHPZoHmyEVLd8SpV8bd8xJAeU82iLuJqUcs6NoE7PWDk7rMWZD1gJih",
  "key36": "VE6JmoysU6wMFn5DK6BcEVUpcYnrYwjc6Rk23KqjxnMTbxsmUKXTE95Bi3hhgwTAngqxHa5Cke7rmtzwsceoFp1",
  "key37": "2cYAoybNtKfqoXesfPLzd3Y2KGFQ1DtSUwNym3Uc1LFxFpQocTaoRbqWkL4jrrpTzehbUef3ReXVDoxwYMR2z9JZ",
  "key38": "37UENTege7CTQNX9L2FjgoXMRGAznL1uqGMwDqxotV8259CwvQ7SfiKMfAc3Bj9nexqjGpYoaxgxNoo6zmNo5deY",
  "key39": "4uZ9agCtGSySDi9NEQEmynoq6TyaS1v9FiJLW9iTKmNDH8bU3ETAVag4mLTgNYkji7ryPAARTP9N3vqZbkVXb9wJ",
  "key40": "3jRZRvp9kM3bqy8VkUjkh1v6x7r2r9u7Fp7RLdKc6mZ9rMkNP2rbTycjoz4C1scCRhx2PX4udxsNcK2RqBTouNkT",
  "key41": "2dGmLwAVPGSXUuzxBKMNZiGdrBYw2mNkavmfj1Nm2cpMG776iGYQ6KtnojMsTxkg5tUMCrPBn6GPcx9VCb6fApNh",
  "key42": "5miYgT728DDoLQR88TFbUyq8Q43B1XfUWn9W2cc5ckhgFpW8dbWrcQCsYHN9aMu8DtUPKHEEV6R8bkbzgua8iMDg"
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
