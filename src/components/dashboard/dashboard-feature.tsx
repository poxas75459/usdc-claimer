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
    "4mfuczF4AnqCp9BsvYhLKPgdt24tvYAAxSiSEMS9fRdR5jBCcDCBefF64g7KnS5rf41GEiQTpsroiEX1FatpjW1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mq99gaTxkytDopfryPbMFsoRDs4gMGCYkCdbpyLXsGcVvrbHqHWU6iFBTktzdr5bAEXjKHuscgXbLREYsZdL22E",
  "key1": "4De2a3dmt7NSjYuHjDTaaSRhFSUMBxUdbEAh316JzqAk51NMbGwCUiVP6WzKKjNz17nDc9rJKfvtgqyYjs2uhE6c",
  "key2": "3F3iTVk5W6njmFxcxeKMBM5LPZzoW1mfdz6sLmZ1aRNXKj9MyUCsRbzQw6bdZGKhsAs7WFigHChjZPXb2G8KrBqc",
  "key3": "4txW7dcefxWm2jditaFCk3AJLhVCi7PAELgCEZeALufiBJiPR36qnBbPWNEj81wPYfQ6pwPvZkDeB7o1FYoR735N",
  "key4": "5Wf89Xo6egE7oREu99smR3ZawLfs7QDnEo89Dxrxubzjuyb5FrgfWLS97BXNLquFdzbSTxVEwk2HHsUgD9xgaq7j",
  "key5": "3kE3jRB7kZGrQvMr3CxXg7cEYF5EWca9oMiL41KfKyNcVqeN752YKnDbepkjjt5MoqjsmDJa9kpFkAjXTvBrBBdi",
  "key6": "2mEU6XBWUGbmS5guTqtsFQdCyLxhfVYBkfxB9Z3gKqSJkbyvy4gF7AGxTfb9rtZEHHevkFriWJnrt4WjgLGCRvcb",
  "key7": "5fqU3YbDV43FfbWL5Rbedg9dWyAQMnbNZao7gqNtAsxG2oCWgdipSF17Q8QSFk8ui6ediQaxXJquQ9Gyno5tkau",
  "key8": "3sEbkHsgG4NDpxQ1Lgxi9EGT988iFdKqKxYZ35A42wxSvmi6cDnHBYfCKjrevxx8rpsgb8EoXDoEMT41HLQahUen",
  "key9": "372Wmptoz82rhL3VZ1axmFGEuCgCXbReVhLPzPAr87P2bjusZGpsfZQfrjPHnJ81ZPu6Rsyk43CKcZ799cNG1Rys",
  "key10": "2QAzXpxURK9kf3y6egm5K52bDh8KCcJhSTX5pt52vRPrdpMhVRTvrPYBu5cDpPgJ5q4oZgWNpuLSC62shsCjgjd4",
  "key11": "1XPbnJpLMZN1Ve69UGie7dNmYZHLcou9HwsY3LSCEdjiqXDFovGoRw5LYpowtoPbLqhPazDrbKP8KNrBCvDGSLg",
  "key12": "4EQ8ygRMyVK3HUifZHh2JttADArfbo84j7W4KPJPyEBfoCjoniRnsMYtxCQdPfQovpVk6QjsW2Sg8ce7gV8RCRF",
  "key13": "zyBrEYeJFut8Ec1aiZzTPupJ86BEyMCnj9aVBGhe7YBHNGk2Hdr9zUcbWDLACq1Y2xDxYcZDwFbjihMKaPDVg4X",
  "key14": "3HLrGCMYY885zuHpbYmHWgqafoNrVdMjTiQCAm7uv1Gtx1ycMo26d6t5CUf4KN8bVuAFvW9hzxzWB55YWNY3gpsQ",
  "key15": "4vagAwrEhqkdH6DSNkjbGhKR3hyWNGcughJ9uHZpUMeRJrbiEUSCiCUR3SiUGyHmjg7RocQQuLh2VeCLeuttA4oB",
  "key16": "5Uwe8d2B7TT3vr75of7SGKG5ir4V7oMKA3pKArWy9xqNL6E68zmGChzQKtNEA6jZWeXhh3W8eceEtfYzyi6teZUe",
  "key17": "4oxFcuooyfEdaZJeDW6UfUvfY9TZgLfdaKHX8qX8hEhTQTzHVXsfaP3zWKkrig2usdSQ52SmWupUG5f3mdinU9Fo",
  "key18": "5VodE61bi4Crz1ijEfK4nfiLiFvJUz5ZXgtrmCoYDStJCW6jV5gCD7LUkB6ZminWkD7xgBth7kE6H3Z4ENTxYD5V",
  "key19": "3Juzqf1f52WhaVdG4tWoyVBpPJTTmkcHpuhpQD9MSP28ChFPV8JZEJN3T4D24t6LZmAqHivZzFMXnhk72jc4peQL",
  "key20": "sX6ZMFFcKDjNzpPZU8G3jomyEjxMAbUEF2y59LjmJ22NoBTjaFujdRNhEbwPY9retx5eGA9rQhHDuxow7prx4yQ",
  "key21": "xbNveEAVZyqP2zJUaL6gVem4ag17TAEaK6eBJd4VBARBbMpS39tAtgEucn9PcHC3jmbxMRU2cYWPwcEkjVKGfzi",
  "key22": "2reE8orcZNB2ZoYUfxCpBZnjfMqmZ5Bn8gftijDbZnjG2KgRHiVjfdueNGfFAZ8mgSG6zY3Zh5CAK3zw6H9kSySW",
  "key23": "5XnEhs4U8zYxHFUie7dnoor8RWe17joV6QFKiv5Kn61p9AsXkcdaeACYLwjkp3dLpMmqQuG4PDw8Q5EAxytBXHtv",
  "key24": "QT3vLNndsfbruHFz5CdF8cyqrZdkHjPchku4LtBytubeGzQPVjU85kD9pbQvKgfdrzqHGBAhqgzH6rFmpfMYpqd",
  "key25": "Piq1jPaDi4QJqksW7bF1ZmpvDrYNdBU3J6XmjouJxE6gmN1HLJ6iTmWfLqi4hzuXnRjfAncTKe6nbyw3UWTqam2",
  "key26": "5tt1Fdbi6JxCcuWjq5KyDPFS2TH8RdBFUuPnomj8VthVXap8YXLvi9J7RiZ7J4x5hGEaz6VWdMv4ZQib8Q9oLLPa",
  "key27": "5F6azBV8e65CzAyoje2RSPh49BsRNM9iB2wcW4qqG7rQyzM5HknmnjZv9JCxUCWV68aUC9xNzuYk3jsyTrzzjcaY",
  "key28": "4Nh37EKD7UMeKxup6zTqpDZjpjetTNnAdjSg3HEgGnq9B7oBHuvTxx58Y8yoUhpfMMUYnvfVN2J6baWZM3dozxLQ",
  "key29": "3yGTXVcN5fXVqf6bTZEEe6nrUDhVFPuG7urFQi5TP7Fs61uuHXKF9KpFxHDSkJ4kKCg3gaTxDZj9GaCiq4hWszRU",
  "key30": "2QKyrFmtEe1pD6aAc46nXgqsyEXEDaENVkhGzdssVQ5gkfTZ5NpgoVTxHsFbCzGJtfw3m1fkKJuZjZyuuysAznV2",
  "key31": "2XvqxL8PqZeV7a6j5pUVGJBSFhvwe7r6bGRBtxmi2ASxv7LSdyfzT8bAY5SqtykXFDmyMQfAQ3f8ePRHgsaB55rj",
  "key32": "615msRKLxVoxBsemWtgdw2zCkySm2vYgpwiWRFyFHZJFtFfLciCqtQrAx3k36zhJdz6rva84rowHsnYVR2MgwZEM",
  "key33": "4QHQumGfar6hPuRbRVjcHfTy9ifgfWTa6XnH1tSyNUvUXNvS2nwx3Z2scJRPUXuvMRDSYvquLKd7yVqeM6vRqxDr",
  "key34": "284tFRrQSN8djF2tj5zbMdSdJVPYiBeV57pvHPFQsPdGwN85zSnmNZNQDQV5tbGs8tr7qPvkmcVrHaLEnZGm2kgK",
  "key35": "3gbPWccBXDjfzdL7bJhRoEsp37dEVEAkoroJUoBkAaw2fou8t6KmcoFvVjM9Bd2iiHz7Cfjqo5KmY8RQgQiFtw16",
  "key36": "47gJPUxbEtyP9E9BHoR291Vy1rdWBpFZKudPZyUYN58uNH7rWhHQJAQ8TgVdGxho2QHATepF4K444x4wt4268cfV"
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
