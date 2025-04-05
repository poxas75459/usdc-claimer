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
    "26KcxgSA5wzn8Dwj2se9rFehhAWEeunSa2SthVaEhJBvVU9F8HWJjUJegV94WBTKZkEHhvzwniWNskFCdr13pYz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anae65Vcu8jKHgH8zWmV6AZhjrPLU9b3Rd1SC7aNU27SsZqWdrnAq5iswZe9YaYrMD4XSsR5BpDrwXLwK4ygay2",
  "key1": "7UYdqLgKPPBZpaVxqKz5eBnJ672Vuzk363kQdHDL6M4qDdTtGZAhhp8tM3vKYJiwSwiaKqc4chEN1y7iqaB5Txs",
  "key2": "3TeMjMVHEsm49926zfN3t9S9UcsYSWHBBYdESyjH2tLL3DDpVEHZ1eHXBfrDLbfXMN6YA4Pphap84E534bodMZpU",
  "key3": "3RHg4d6axxi66zCVJ3vxgrhK2QqLP3R14HFRgcz4zoZcFNKZwaW6L2eAvsJ866D8Qmqfqs7aG25mmE4g2ApEkqiu",
  "key4": "5KR4bJySbVD4VMoV72W4AyoEQu8swENGfTuzNy5m2WNHEoZYnzErSgV8JnN1WqPHSy8MFs4CfDuTjCTtznntDCKX",
  "key5": "3VngF49Vq8Ff54NwGq3WHQa12HkjwyryrWN4vYk2tiRh2me4CYkLj6kRvQ3nB8EsYpNrufJHkLxr1S3AuwFDajT3",
  "key6": "4wehs7wcynPVXb4yRKvBAMNp7f6oTDf8esAmpGxTmv9uy486LGqgDf4MP77iin4chPRTmsqaam6Ls3cFBtHqQ5Y3",
  "key7": "4wD9mL4waWcryixXMFoUjCpDKXMBoNk11r9yo8LCPnxvjdB7dZfxFx7unDMXcbGVRDQwuF4U5jAsPPYrKcdVRYZs",
  "key8": "z6mWjRhLvgkThMD1mhKyPzcRT8jrQHzKQSSifwWZeiH4YLLDKbWnErVRVj2pm3guJAM4kujTX93PMXxk3RNyo58",
  "key9": "2BWZaWRtSfQFjH8kkPsMHhQj9w5CNKYf6oWUigbXZWe8D9RzUxiAQi2uQ42AaTc1JdtxbgXJNw39rNRDECap3aWw",
  "key10": "4M6hW8T2gayaRnPfpoZkFnorFC5gYevhLXfJKqavRLHBEpFXE3EqKDynpLXU5XGjNS7cCpJfZH8qkSwbDxMovjwx",
  "key11": "4rhc2Xx9NqkN7bDwMkrqGoYscF6LeYtUg3bnjRx7rfaksgWEf1pe5wsCV6HsCDBaouX4AjRWgsZ6zymGNQCUeFRH",
  "key12": "2EZsUGWwfS3MJqVTyG3yqRH5vXPpGrjoCsfeVciVoxtHsZQti7JanUWbCzkjfz3iRPVeZo3aRkzxGeawJqUR6d5v",
  "key13": "5WpaT4j7Er1oRjLxRToiogjFK8XBNi7Cn2yhCi5jWidepnBwfnaswv7xDRExcSrHEqNPf8u334r3gr9nDj4SAgAC",
  "key14": "3ngE7mkZifQcSiWwNZ78tFcivrCgDaKN94WoaGPVNeHH1LGtGutQ9tkoGTki3M8brFEtYP2wMDy6u284qgdtYkST",
  "key15": "4Ww9kbvfEb9vzixaC3hkjMrEyqD9xpGsRfLEancQdJKLxiwdyEbayTgyBiAjLRaRy9B9WWo5uadQaFLTwD8C4He4",
  "key16": "2LPEWbVwquzWPrZG1sVpgfK51uvsNmm69B9tNZpa47vp839QEFwpZk5U7CrDHnm9MnTVsg6DkMPU5aYdwcJ1WGzc",
  "key17": "2RYRCngw1zp6nf3c8PvAsLUByDwxTD26rQwJPghsiHVTcM2YnZATGXYzsCoZpvfNKSvQQ7LbkoQAJQmkf2gS9exK",
  "key18": "bMrMqZMmEF4KTbZ27pREjgEYBrhAh1QNycyed9mVefgpgqSdmGDuUMFFaZ3HsvaygKkCn5XoU87hXCMJjts5buA",
  "key19": "4eVJRrX6sY4hmsCkdModN5wwCdsFKo5a6ZwGeFm6VuQrn1TnzbaFuLNaUaHTyDn7zaZQHvu1fnrzPtvTp1RhvrRg",
  "key20": "59u8W8uJf8vAse3AgxWNn2BzcasvDRm6UwsYzUQ53xsh5TX4LWtxSXugXTPk1Y5SHqNbM5pPM5kYnqEj6WMKxPdk",
  "key21": "2Wkoex184ZFSwGoUMUbr91ktnADaEEZ5iTASkiB8kcRyapvZdeKoyrtCPy8CiqHuNBEmDKGx7LMSFhcuN6JUXYhK",
  "key22": "3aLDgrsEN8ptEL9e1pRZKsbMUxyvR6NqnT8rSN5aezDiWZ2triRgsh4q5mn8wfRrP5oAgHMVwMJfTBedYkjrbwQn",
  "key23": "2YJ4ZHnNa8iHxAeEd5gE2SPUuKM9TQR5qiD6Q9dpWT9jutw6dJL1AV48mziVwy3ZcMmAkKhrD4SEWSPY8jARsgye",
  "key24": "3sqHpgpX9zuCRF7ZLDKmZ2pJn8Et6L2A82WaPBSGm9EEfdNKcikSCjKSLPNurgRH9shrNQtHG1YJdmRnvtMpnfr5",
  "key25": "4hdPfixdVsvADsGPT6M1GwzebPq7nBri7qBqMX5wCs5a5xmCwzzyYHHvAgnLmBCTbnYWRNH25MtaHNjocFC8KTsT",
  "key26": "LE56cZr695bMHqv3fXZU6XmwG2K8221CMBWJdpofV36oiTswFJ6DQRg399cfv7mV6HZfbc51GeRtd269y72xEXd",
  "key27": "7344CzjabPFCgQhBeC2YHQEKPREiRULv4gb2HEm4QXH3xsbkJ5yXv2K5eaNRR6cpo1WxUZ91gwVWNfZgGaF416m",
  "key28": "odkT9v1TaQFsoDNPK1NgbCdW5M5JVyKGrC4YEy4SuagXDWGuyrx1emqV6n5TxcjjVekdeXxdQmX8egYtTaVNCs2",
  "key29": "66MEhKUXPaqUQhqceusXs4M3YB17y8LT9z4t4pYMD84Uc8pFs3R7dhQSHnadTGpxaNUq1RKAHYZ5BR9XdssHR7p6",
  "key30": "3ZDtyg4Lk5Amqknr6JmQyqiDqYdqXG9zyTK6v56WpDwX8JHd65Ka6AGbwnDPmASwxvbdunH187XX2TCrB5oNxfBm"
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
