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
    "2svY27KoQtUR6yeeTQtrntpxfZPnt6xcEgFUgojVSPgFUHPiUMnVnVyEp2HKScPwVQoQyaWm5inkJ2ywpg8uprWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHPP7mdLhbLxBDpzQ2CpMgea1PpAJgTQHJp4sQWQj9CzWNmZgBbHNKwynFccv3oUPFseAuVYtR5xrg6qwjxu9fS",
  "key1": "5VnPGiwtBbcRs7WwSQEzRbMBPReNL3bQh8bPBpQEKp9gvAr2uosnHbfxMXVsF8PdWpCoKJnT1ZBB2WfMRxeBL6Nv",
  "key2": "5pA3NJhhPq9NWUeaAfHGEPBZZxe68RjGgJadQgGv8Jb7MHqRoJkyPtJHHEskVdvz3fmXU6pW74wSSm5kKgC6ER25",
  "key3": "3tHpEE1YhYL5hySUJrvAxauNfGQTidumkGebWAQvxrZewui6iPzDY2HzjXVGce2P45FBd5hnM7JX6jdnMRBYCrLH",
  "key4": "3S1LvEKBdvjcGQCnM7AQ8czpZXTiUhdcS5nS8NPriw2hEVQq79nuLXNHuH46JECAV6tGc8GKA5sPBFeXzdjhwPkY",
  "key5": "4DJjEx1J7eGb4BZ4wBKWFKbQEQbqNfKntBtt3ua9FzsamV6Dx6nkorSC8RqjiLL2ejjtpg1WLJRMmYqniBo7mWTh",
  "key6": "54iUJy9zfvtokDVyYiaebubbqDZESCdtMuCUjx4Ax8mfg9zQ7MdevLJXYYhKnYxAnumHFPhE5mUAgkVWxNZaem4T",
  "key7": "5iX2qFvt6yGAhNDYphD5CkW7NqFFNxyJTBFFPndL16r4E5NtZyUhReeAjTUxKCdnyYesk18unSe3kQnQ53Bimss3",
  "key8": "2RLe54KBz73Dxv6VvMFfKar2XMw7kvzjgd7b9srZxxyb5Q9cJPoVEHr9XrxtbFQgMoUBMvk3agFWFmgYS5ZVrMxc",
  "key9": "xNhncvvUeZyvT3Z2JasGQwCxqkV8kyhbk6zLruh8SJ24aiubDeZNeuh9LtmvDuXSrF9dsSyEH1j39VmFQ17tNNU",
  "key10": "2BbQDauyADS5aGgd3WTMSmP1hTZfcJamro3vRs9AyxPmLyr4CgkAKgQKV22dZ7aAtU1aQ4k32vtYtCfgyeDri7tU",
  "key11": "5LpYqKS1FWRLiDemCXDWsdDwYuKeDuVgKKuSnotGxPc7a9KyZ54ckuLtMag2RAndy1s1GPWYW58MjYyDtjak2QN5",
  "key12": "5r1HDhyHudNKyqWQ1gkCjGnm6XWX4YLbjPPnyodb5R27oy4421Mj54vhABufg1XqaMpJZmiSJ8NMwaTZEyyWVWdq",
  "key13": "34P8vJN6FshvupZbNDfLpvx7TXumLvdrgQK32EoiYeVvtNk4NVKmrRrQLUqtA4GsdoMmXHCGpox9azRCyKefbduk",
  "key14": "5W4oBfUYGnn8awy7jy4SDku8D54zPkitUu85idGBKghEEKXrhH7vpMShv4hwfNNftkKGg6kLpiFqBgJP4nZn5yao",
  "key15": "2yKYfuN7VkV9NzFgGZkpjo8SG33dpgHsDQ8t6h6rvGh9DaCpyCeT7AjZs9b6b3tBB7gRaAKLL1YH4KBVhcMaNRxh",
  "key16": "61vSXto8y9WZmVXZLbCPk4Gs5fRGtikwbnpPPqkPSafZirXEwJJXefX6cw7JB8vFfWrPt8Ek7qS1WGLgqZ5EYhNN",
  "key17": "3qBacCKdoHMipZShvVHJWxb8Kdtaq7q9qtoy9wxnUx7zanHELzJxaVikoAqHGNbhhm5TejixyBsmUefeM8Rbx5X9",
  "key18": "WP21D4tTx9dTFpvKxXrpER5TXJdH3EUtwYeP1qKfcaD7hpg8RkvVMZ36dEpyjxJu8PazYHR6XZ4bmuxASQc1kYa",
  "key19": "5F21JZDgqpkbKWyiqYxRC5kxRQff4K7PSeFHLhiGPEF4qdinXzXTZnQNH3po5s5R32MmeargaSHuqUAzCGBRTCGC",
  "key20": "63Q5621HzoWqXYy27S6EtFSyCp8gYh2Ch4ojJER49AKYjjiW3hgW6vPHksdYbkyQ5gHuHqWN5BZojuzh3jAE31ab",
  "key21": "5WM1FywEjguxo5nVPFgS7vLUCtUUTDNvFoRcmDePeBqNrrpuXgjZmfWWAh2Y59w6Z8YXDjoWdXcb12FisFev3ApU",
  "key22": "5ZSuemgma5cu3E4J1bJRHrZFTSCFxqwxHWjJMwkwB3q1Qnv6BTUBBchyPehMYe5B9TatQ5RzYwvkwWtNKhvo9BVo",
  "key23": "2imeJR2EdfuxTo88DjJnVFvD9kdyH8WXmdfeysfYW28UHc8HL3LXJPEBSRBrGjKaGRE5uVoB2MkBQfkfjfoPygbc",
  "key24": "27jSz2udVEshFQiZveJ4vkLzr5GZJksnTdJB3fBNnLuN9oQqT8uYg7Le9LENDRbnYjePKkBCkjA9mS8dUWoL6tYU",
  "key25": "5i7ouMrT8NR1Kqtv8VGCEjsGdA4AaEmheNoNWhyK7i698M99ivVo6VfVTbM1Eg29cP11wVJQwWrErHbomm9TvhXS",
  "key26": "2VkJK2BgWmwiJ2jJSzxBR5CEc96NFYSDyUXahcichVH8epPUUov6aBs5g5xX4xysuRkWJQX1ipMw4atRBTc8f7Zy",
  "key27": "34QCoUhjWDK3kVxzX78xgcq25rh4SYLB15W5t1M9GmzF5qAmZ7ptCy7se88PAmmY1ki6NDpbBpohAEdmJdMRgKRG",
  "key28": "292TU8sHTeSxAuE3Djy2Cxei8NYPhDk8fAtLQYKZvjKjLcj18i8mPU6EYM8MPeQEa1hnZBZsy32P7UwFGqWHtjgA",
  "key29": "5gn5NTqA9yNkTo7mA292eNCPgSf1fiTSErW1BjzPbdYgUjk928WQwdWnyCtFukPnAJjkK55t2hNqsP551MxFHJMq",
  "key30": "JopScDiQkWUi2uVE4RixjLof9PPLZLzvgaHj985wMp8zBUYs3aQCk9obzRCQSJhHSYDkXY9HqSbcW1VJjhgm1dU",
  "key31": "4FuoU4Qc7je3t1FPNTxL9Mfm1mqWN9LgLd185mPsA7CRzHxPEXo8xCCUqK5mF97DFJ55VmF3A69MVjpH5EpkpjUV",
  "key32": "4tRUidJVtyeiUTmWaGqdNGeKLNG7i9rBycJ8qg9S5FBoHV5XRejFvHc7Dr59BXVXty5VPafXTyXJ3BzgX773RWQ3",
  "key33": "1qdfizHkvBYg6Ek6QWqfwSx2ysctP7w3btzpf3tqeijDFVNRkdFZWeJn61FMm7vzv2fdUX3yxipVLfpz3Qzx8sj",
  "key34": "2UJeQvXrrTmjHi9Z37HxmTn3agtGzJeqAyVT6hL7K3fPYbY8hE8X35FcXYh3XT4vTAySMWuN4jWRMBz2MbjJh3C2",
  "key35": "5yrZdKL7Ft1iRaGaTywpCuAkpGqRzQPioVJbwQWucJXULrNbsnijHj3yTfnYm2fn7nyQPDkY8dQ2umrV2n65P3cQ",
  "key36": "5ikqTREiLVag4L7yUNavE6PktND4yBkeEXxFWNpbar8hRU5pdc5Zngnjcj55WpMy53e4FRbMfhWqjyczt9bgSWBn",
  "key37": "KCCFS2hgSFtipze9qvkQYHP3XuoM1d9hCGAQfD8abYDisw1RQoN7b9MbFrDZdu84CCFkoXXrZ1p5xvq8y2MyuKm"
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
