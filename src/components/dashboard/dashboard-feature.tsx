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
    "2teuNYEc36XaiGn1TDpmvrtB12hFtwNkFM2cT9QiKgnDRD8q731k6jZffPeDuYitdMQ5mgkbnvNS25ikMF4LA6sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D6edR8inffvgHqgE1feJ3McDzLMebJR6rJamARKTrB6PDuWBtapd2MdRHG9kbXht5nWBhma4gYaBP9t1dFZGuWv",
  "key1": "5vEdwo4pdF4LD7MEfL5pyYPDVaBDbR862VvBuTWzw3G2vq8jTaV14LMDLVYCyKViFbNbKgaxBwGGnMVtZev4RWzm",
  "key2": "U2iFx32BFLGSrVyVANRUTKyATu2tZ1eqRtMzJienWLNncDChPMzN8Bukv2TNuN2unjgnZ7TErM9nRQASkLNCJmk",
  "key3": "PZHKhVzKHMYz3u6Pt87hJbsYLQGFtF1X2dA6mx8Z9ZKaT8HFntgre3ZMgn7qExNvPwsfHpThTTMcVgPYtJ7STwN",
  "key4": "4u7jmMWBkGUVegefWNJSU4HbWiNZHF37GkD28a3a7rjLizwYx7MbiSj4KPdRt4A9BBkYnkyDeSWZbN9d8h5STKpd",
  "key5": "2ojWRAWumcqrPwWnTQ2FsQSyf2YjxhLAKthFVSivp7tb4boXcxSfBmPfSJNvY6rbXmmHQKwd9mUaFZz3BDPPiwds",
  "key6": "T1QcYsPfho2M5yxmuE7PWiyJCeiviNxCnMgCB4dw7UDcruqMtDk4aGV58K1cAMaNopfQw7qvrMc8nvmPc8Yc4UH",
  "key7": "5i1kNFCPs5xuXfeUBUiGBAS3bP61yM5ZUQ2xvUDtEKYPJG5pDDDZ51ewDWnd6nTmrstcwbckHckzKxQhTS17CmGn",
  "key8": "2ZMUMcGbi5C4gw6sVW1nwAKRfurnqCMBhj6MYNt1cvv7hSNqTPo6tJDCJnoR7XiLFRTzQFp4GN1LnW4nseQNWc2D",
  "key9": "4ESZYf5axUPHhQCPeXkpuK79V63sedEWmgZ5isKYmfJhu5NGjQVqgEK3gmU2LfSqg8dYb4pydh77Rpg42fsRVqp9",
  "key10": "5moZbQcNwpW74epQEWnPQmvdzzP8ehkCjaMr3CrZEh2zLKBkK8BsiYvzbGg6wgMufsLYe9D5nJRnvcCkdpRH2t9T",
  "key11": "5euZPDPGCrfBVkMjTUAdzvGf9r9NDwGXFskMP5Xm4bo6NND4uEKhtkUBggMwaa6mC3xhTAcVBTEaeudad7AeBXGJ",
  "key12": "2jrTZE9SNCbaDh4W1XRFUGfpRPk7hsa8RDb3o43TQhaddtq1sn3Purw4fCtcQL47VvvLK4k2ydJMW2AeS8ZdwVYQ",
  "key13": "2xkBkg6Q8ysicerxgFNFHF2Ry8Lsw6VtHrAMA6wxTuUSyTJun3NjViosStAdbhTLhEiYm7d2oBxPNZMYVD1iuLSY",
  "key14": "KuCmCkM6CXKFNQQPYZDFmnNyX2V7RwZ4ZyySPAEGHhqCqUbSzhWKvMWgV2nbA18GUEEtHnqMZS9MpVziYCZWvLQ",
  "key15": "35kypBtDEqH8SyHqPyxUMgFj6FnxHCv4CA4guhhy37PCGMuY9vxa5vMX3YfxegTeeHJKeVxoHWJKSxdYT5qXrxmi",
  "key16": "2zQq3xN69afJZFAk6F57pMzuPCbTqTMT1K1YocQv6jqHE1dT6vzacMQSeiwjuvM6rEmPZ6Kwam5VWgheaM9uShcq",
  "key17": "c5s3SoABh299aPMRxhu575pRCQJWW8D9RGoRDtJdK6PEqw4nimj18t6tAob55TsqY5wpi6NXLL3PzakaUe32Q8P",
  "key18": "5FDSXrrdvMg1nqQcr17zTwNa2M8LkG1qDv3adcpAFgr4F7ZnPCKPjQJX5oEX2iTC2JHT8c4THG9ZWaWknuAG6fGE",
  "key19": "P7JpE6GysfyiUSVrL2Mirwi9vB6162vXwaZWdqHGSf6wSRBwvbS6mVNoYRUZhRBU3qsTNboVdMr4tm9fqAEVqJy",
  "key20": "3qEw391JpvKmzTcFN36Wxy8K5upLBLAbuM1B4u5EXM5YWwrZp8UkxMyKNhJ98YFXKmc7qisArYKwASjXpUF1nenP",
  "key21": "3yc6kWNGH13Pb5cPgnttMABAKPdDd3uxtcyUEabebv2yuqCPN3Jzg2YixYaWtLYYt7xLbudt1Q7BidPGx1Wmemqp",
  "key22": "4MUkTXP8RiY1Xmbh8WN6ZAybF9v7TVshDckZwLasBWHTFDxDuXpp9W7bgcscRfgDvtCeM3xMF4GpDQNUoKgRmrk7",
  "key23": "4oDHKohCcXYdpwuWAPGEB8PmcwatyihtLh5GM9KiX4YNDGQXz2YkBzFDEH2MxQQHFmzK3vniFh4GoPaLrmR3Nqfk",
  "key24": "TpGE2uEwpte42kmitHy4AJJqYzhPtUzpGRRWA1Q5bgaXEPHdy4RCHk6ZoPduLaZ7bBJyWw55HZajXxrDod2JAVM",
  "key25": "5Yt3j3eTtwFWvwVJHS8a5XjNXdtpQhdcKnBix86xW6ADmQBnTL8STp3xzesvgB2ZNqkmeAeDtsVMdGN5nwJBtqKL",
  "key26": "Rs8DMjfzfsVNanGjFum7ChD1wgNEP4eboMKvWRSGUmZe8rrKSFHGY2y2sCVwk7s7N1NB25oSBSQAYJkUDcWztWj",
  "key27": "22saHXb9FcP2bxkzq17Lzt5UQC48ydgSCapxXf9xUqzjszUUvW5upa4LBRjKTJUXSY9AdUvr2ZMq51NrbjtoTbKZ",
  "key28": "VMPntAyZRDPDrNb4kqYowmpqcadAP2PtXEREBHrS9bp5ZfNogcdBXT5TcGvrTJMHW1HLBnSttDRMFH8WpH3eTEM",
  "key29": "5EeQ5s8VZBRHrLRaPNSQ8aeJeX9zZ53n8VzQVJP8MNHwQQFhgxnfJj88QSiVrcZsgXkA9ZfxeNjs1nGbyii3YA8U",
  "key30": "4eMD9Tqb5jk2UeDmGtEFUK5x7Xgdy4VFGfkiafLCTnitjDYzFwUzajuxNTsQqvJqNQKFMd9rz81qS52qYoxnD1gE",
  "key31": "vW1c6cGvdRwhT7vdjZVcbu745oQWyykn42h7DwcLcS1EErzcPegAiYiCKXbCJjcP5bGeQSPbK9aN6uss3S9EyqF",
  "key32": "2s5VR1ccqPf3dDnWPaZRuDTvUb56NsnTFuvvkN18FyDwNhb3NGGLh8A3nmBaur3w2vMHcsU3MZF7gGFgCghNnegP",
  "key33": "5mBsbeZ8dnTtha31C3UeynMbXZsbWe7Vp4wT8Ddxp6PrVqam1rK5VHwotV3QJWwzd59RuViG9Wf3BsJMmyX9NRNV",
  "key34": "2FoxLjYx7uCnHmonSNP6jf8nhZ2kZL7ZWzZT9pPYoCqajqdKNjAvKuD5oDFeBsNDfDvBqWKejR93U7aSCSKYRDDT",
  "key35": "5kKyc3g7SwATNqotqFvGXS37XnR6nv855DZwADPShgSVWnYp2WZagqKa9NecuHxhsusmRf3RUmCAiVYnvSpybpRA",
  "key36": "2JPpZ1GEN5S7U4rRRJ6g2bhzxD5YbAQ7KW61Xn3LmS65e8g6hL3a4PPomBbhjf7c8bKCryUtSSDetA8thQZCiD6a",
  "key37": "5L2Ec3aVoq5m92PJwsG8FuFPWPDF1Ytx8vbzkMceM8dEvxKsUKnVDp6jgBk9hAxNiCq2L9C6QqNnGdo3aiQNdDsD",
  "key38": "52miT87soDjycF2GRkYzogycN1M6ZTFp2d1uBN6wgrd7eDUNu7oVaywhV9EePMRZoKpqaaKeKFeMUEhXPJnDdWms"
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
