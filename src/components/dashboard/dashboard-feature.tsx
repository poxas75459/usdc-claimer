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
    "4KJN3VUEPqgge8LJVTSSiXoicsfkBhpRbnyoxyF2pxidpBCGitWFhsC7hcfmLjiHUKbkDWgi6nfHKEWgxehFydku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wyw3zxhMzu8MTYB9bd3M65EhqFZYjzTDeT85qAPrGSCPPcP7zspSKtm3acJ1xYgBwfvFaA37P46ztgSWCxp6JXf",
  "key1": "25Yfu3b5qDq9SKYcXdxMSFD6YUFb2cwPmZbHGPvDPe43f7bj4puzCR9WXFmmMJZhsbxcYgWfCX24JGJvVqNkjiur",
  "key2": "5385yTgrAxDV8N79n6uiTJRmQhxbSmjpRb6GimJKBtNvr7gW5pFcDpfZBewpcd3BHdxF4pEv2BnR28ecmm6SAKWA",
  "key3": "HUHcdC2NthUw7KeiSX7BLEBW8bcZSWpVH32gQzUN3NsnaGDfP3ButzzNUpgkunZwPHEchjgKdvwdtTSMeD7GqTj",
  "key4": "4jcWBFAjRhT3au4wLLzJEgNWj936uZrEsJvnGEvrz9jpKZ1FPUs3bmbeqsbmR3zNv31YmjxRn7mP1K74s3QCGvm5",
  "key5": "5yYKokLbFSWbyaX9xZqC5B22Xxrx49JjeUDkJ7aBoyuVYuC5fmAWKYX8EiJD8LuM6TbVkmQqZatp7EtngAevju9D",
  "key6": "4Lp3kq1vPa1y48NzFNNESHZJc4SwuHNMKDR9dcmUSEzPafuqvCL1Lr8EZQYqx3PZDcAiXZMF6bd8nbFoa42fmWQX",
  "key7": "4s2drCTMHBnKdS1n5fwRa8PkASB9xdNKddicswdj4gR6CsfQaG9tN1MTsPry2PfvcQDkbsmYuSRXBDaz2gu84AvB",
  "key8": "2GM5aKdiLYoA2xUFkA49LmxHEVtLyuCxA5gWshiN66PAXTCfcWPaakoVbkdDPZMv52BKQcSKSiVwUsgbAWj5pjWs",
  "key9": "2xTa23X9uGUVnTy6uJ39hRLrzGrJneqrDFFYsM21n7NGzG5sBQcH1GYX2zttybWQFYQhu1Kuasc51s2mptVXKkVn",
  "key10": "49jFqvt8deqEZRD4a3PPyTeypmHrNsinLV3HdfhLbBxDnn4gPfN2qjQHATGTRyWQLhd5SBsfbHbbyvWz52YSBqmz",
  "key11": "4LCrXiho4JdDnkdFoNZWrvYYDPgnQr636HT3ofwdkXsjVRnqPwxgxwwFe8GrihoLWbsZBsJrRcwLPfSn3y3GVZxV",
  "key12": "2nzUaafiXhw2fV8uJpU2FCVzYpTk9W4HFCTTS67JKnAoLosraH9M4VX1J98kCmX1PKvSiZeejibyUg1wMt4D2qnJ",
  "key13": "41NC38F8dVLbh5ma8223cDrQHgM8hjLNWbo2LWxMnpvrRAAeoH13FxhFaJ9c9wFuyjCn69imbEBueRDY56zUJ7d2",
  "key14": "4JCY6w5rP4WycA9u6Hd3QPdrUzuYbAVxRQi8B3ZsbHMeMPdhUo7B3FHjHF4LyXvqpAtCZRaaHAzvY7m3ULrg6zj",
  "key15": "3xht248RoZcVR37WXYctSNkcFSPanFQxBtAbig9RFDFUoXsYq7aKwfKhUzgrunKkvavhVLCuMmhTWsSHUd7Ew7rK",
  "key16": "3eqeyrqe1C5tdY1FPPjfa48C9S66Ydr63G3sZ1jgFf7xP9u1QsrspchusYmXpcerpU7VnDUW8yg3DrncKRMMRRi9",
  "key17": "26sZmZfCmfyXT8cZySpigf3Ry1b17DFwYrss2XEdgk2yfDRhZYqTcgEBN4Ax5KZe81nnLetqoeaq8rXeNvfQ8tMF",
  "key18": "599X4jyjmEE6teEbEYcPVnVCSn3rz2LRGvuDv7X8ktMtQ3LjLBUyfYuzFSGdV1TeMkoZcvM8u8JMXEMRsp77DraD",
  "key19": "2Mv39zRtFhzgLj3fKNtdk4b9P3HGN2a11DPpNDPXgcjQ5bHG59HcWCwyfKT6dHX79fbS6gfwygNTr1qkku4jq98S",
  "key20": "3dBZTVmvjQ8Q2YqgRuEfRcfar21R52v1pLUp8pw8Z4pzzvX4tXeaLuHbs6AK8QDsggosTjAqCKeVAEUCYKf1reF3",
  "key21": "3BcuABeaNcBL2iYbJwNSVcWsMRHw98p8QYdJvCyxQnJxzWcdd2iSietgfzYdXcPyUvKiELa1vPnV9qBd959iVm8c",
  "key22": "5MB3zQbEYzzcQ6jntyYzZenCTiYE9e3U5o6jBs332Q14iSUWAQGiphEhEAjzmpkZKVa5ScmDKvLgEYGT3yg4zxZK",
  "key23": "3in36kbJxM4WLTTYTLqzQJhMSb18yTm4uK2j8yjKjvy8EHFmCCoPfZoqJj5C85D5Ksq2yHumDtN1SgZJ8fcNEigc",
  "key24": "65wfsJbVMqcMq8nb2eizVN31skaiXxqVVeqeuosFKEHMJwkj2HKVygeGjvayJnsVpRKJwXmxapRkrJsvFirN7JSU",
  "key25": "4Kcy2FYqAnKBq7T2jtEzUtdVzjHRk9Yvvap16m5h9da8knA85cvPVGwqtXcLiaTCSWjcARk31m4UwYgN4fAsPPzR",
  "key26": "5P9dZA1BDMQpEd8fbL2cBDTHVSfBHVcK3y7N1xSWS1Q7hoVT3HDLjNmBMd37C6bTs94QGM1T75Hu49NDqAYiLcSp",
  "key27": "29fM2i2VAoaP46uQq61t96G7Uw5gQpzd775G5RjVxtoNkpRAXEEyufpqG2R2zockj6PgBe79p9oFSiQWQTbytF82",
  "key28": "W2pzruat6BPHhy9LJZL8ocJcAhvvhswvVR5zWNw5xKiDQCtuoNmvjWEarm6U3nRtZZr48feimP1wz4Wqw14aRgx",
  "key29": "2YvpTwMjoqC5eieaxYNQPbE1rjBL69PFaNdBQW67m2iX91CWGfCUGdMRf8qHJKos8H6yYntGNyKPr2fNtpdAGyVA",
  "key30": "4BT4Zm9Dfin4dKHxK6kKcBxs6T5AhL66yv4CPJ3tm1mruJrxk9ApUJnPa3wdVGpqhnWQZGcf65nNQLeUFGv2AmQc",
  "key31": "4vFAhFBoHKgwYjDHGufpAAUqqQJsyqKXfgFAdn2aAR1sSbJCyeeNAz9Qp5u2TGv19hgCnSXd5fVCPRrs1E3EhKS5",
  "key32": "3jgegw7SeWRrjDFcSYNooVCGLAkAqPg6dAUo9uS19LuwTWUFkYmVx2Rnzhvq9GuhFEiadCnAA7L1oaDY8RgqPRc",
  "key33": "48BZ7u7PoRaMzaVN5ZhdXpLvB94LURLaAAaYS3HNkGmDF1q5nHowfdczG9HDxKiR1vbKYFTP35fyc5Xc3BRKRmCk",
  "key34": "21qxZhQndMpC3Hb4zBVeoMQYQMkGYXqfsKYbVtJm9hBbQgw6uEHWLvqS6kUCyyQQEkaGdBEraWvLYk8d2PxG1MWj",
  "key35": "NHqT6N3Aoc5r62bVRPPAnyw3BTW7jtrNk8U9Bn5Lyb64voYHSn3YT6DsNPhBy27F94EDsqUCwF9EpKQrCsKmzii",
  "key36": "4xtR4o9veT5zkWVhbfyQwcSxxi6q5WXnYF4vk14fMz4B3ZaYjTBuqni6gRwkQM3CYqZHm5FCxYqT45mTNVNjZD5o",
  "key37": "3KrbsjfY7Jhks5DH6K17TnvJasivEWU1UznRMnvbLvgqFVdZXD9co7boVfg3XF4nZ5FnYrLntUjoc1yWvy7Jhnr8",
  "key38": "5DK2GcfBwT1oWAvaksRRfJ1biuRAPKDPR9ULgJiVnMCgLs9PXxNz7c4RmrFWtufVh77P84jwjSbf8B4BTvosX7DG",
  "key39": "4hFeHSSUa8SSWjzQPQomVVxgrSDDkBN9UsFioF2ZSSjir7XhcPaqSU8h2rsfJmCqnK141C5NfgMz41quzNmi1t1J"
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
