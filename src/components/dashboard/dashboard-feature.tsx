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
    "UxEK6RaXSUMEHssBUAvVZu2ZEK9uWotS2Us5Jkc7zrwop2hg7s977EGLFAcYUTeS3LPZ1Ui9cuybnJc67dFGKJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35hhZiYExcZQyqUWCtWBwXsSFA1BiaTs9EYibwZU6nrMoDj4eVwGniUeZAAs84YG3xUuX7UCtHMHAbDrDCLapuVk",
  "key1": "mXJAFamTHQ1sNoH6pYPjQPajdpzFzyK4Ho935iYiuX3gmSkxRXLV27GJqzpm4GYc57uH8YjPQZKGwRMo8BmmWTH",
  "key2": "5d2ypxFWrNRoetg551ef6ZGFGiPYGhfwAS6NUcCso719Cmg1vtjVMNzAnutWEroHo1LPWDN8EU58VA135iENq3yi",
  "key3": "4coYx5Xr9jTKEwe1WTS4ccF6VXjN3r5N7YtTwqtfMrkcryhheT14uTJYoHDrLBeQQ4U6VCsQXDshHa8SkwjNjfG5",
  "key4": "5Uekh4ZcRUBrAGpcknE7RCqZy3BqZoEF85v8wCGmjt6dc82Y4LYXZMqxC8Y92BqxWChdRAjkJd77m9ZdcjCtBWSM",
  "key5": "4NgKT8tB81NLDHqGfgdCKTKf3eeXthVfGDHnZ49AeoeVsis8HFRH1V84jGaQKye7Kk6iTLEWAh8m16NKc1EH8feU",
  "key6": "4jRUv4FoYaQGQwPZFuxV5SsK4UwbbPaY6M2gxLjGgCPMV34VJgNFnSKBeKV4QFVrWXNQS3P31pCSTDzufzgEKUJ9",
  "key7": "356JSx1KdCcxBq4VGpg8GFxcbn8NAAFF6kRYnVPCoEH8jGRCT1dUr9gYxKqCUPyZDUGeaQVveWhc6cJV4U2CzQgS",
  "key8": "Jf3zetwzeRiUQKbp9wMokzpRYnvNZ9RLVYorVQZzj3MvjS6d18hcYH736mPazVniuWFD3PhyCbWetHG9fL3Byat",
  "key9": "2MReBWZaCbPy3cZSm6NvUs323jqHcAUSWN5Xer2D5wGCFK3WadmX9tWqmYtjsVLvDSYC8ZJMt6rLwrPsbYbCBqAm",
  "key10": "2bcTb4AAQbqk2F5Jc7VKFmoezdUJy4oaXBSbLNjJcaBiTF776rNKQnWgdyao3LQGE3w8t5fW6bHi1YfxPwpJ9Vx",
  "key11": "4e7L3jSaf1Lq7TKjEWJRNivT6AgaxiYEY8axWaxLBmif4nCuH7Ekm83bcUBAGEcyPDjB1NPChfbnfAR1jNGa6ZW1",
  "key12": "4QmUcgtdHCfRQBD6bCsKoQKZFjfDxze8uHcKPijrjcdyNHe4tH8QbkdmZg9jfP2WxRZTorZLHgMDvcsJLKqqrS17",
  "key13": "5R3bjkcPKz41qk7oDzTEXdLsrUEKb2E9HYNS1Mjd9pArFGotZLbceadx87QBuShKYaCZDXmeikpJa5SUd1VtE6Y5",
  "key14": "MWxgscLBKMeMhbBjWkAwMFdfU78TwqHoQLgxgTnSUTGWPVLrqTWu7CmBZwYxLtbc3JCRPGovcmuqJRrQRZJV8so",
  "key15": "3ubwgPg1EGpcR6UDJfBt44RUtufz17GeMgmkfgCfLVm7u4GFdAvpcbiL3L2fkjrSCCjycXNExoSA5Q3p7FmudQqL",
  "key16": "5HC9V8z3tT7BErwqL8kWNeWj97x555pk84F7oArhi9tKamPfDKgV21n5433gKxFaosWHsRhbfMedk2SJi3thCaDv",
  "key17": "4pt552SEj5A4RQGZ3BspE3ongKEuBBHbmtPh1Dgz1LKfJsE4SRfxVso2GaamRUxXRzqWGg8hDazdXxJN9y2iKfiF",
  "key18": "233ULeFssw4KC5qQfbfTsoFPe5MwULCmCdJ9BThjLaBZmJy2pP4M3Fkj4EdX9n1ixt5c7Q24DUkokXW77xYWgTfM",
  "key19": "5egxBgYj6sRzk1QFSqc1iZi3TRbcdcgC9wbz7DedxwnP1a8UnfWX8AAqX3R56twcQYQ5FU4YBoYe7LRiJbD1meR8",
  "key20": "3ASD3qFDpajpQfc87do1KFLqBpkaUQpPhNXKs1k1YG8WG13XyodDhGEgJZoW8Jnf6Qv2F3E6CZo33nddhDSMP6pL",
  "key21": "f44Btimw9bebSt4FJKLCUw4jV9uHbuFnW4BZRofgE9tcBH7T5b3MavvH7KnLJGycrtLrP4gRAi2iBrA9r9nutWE",
  "key22": "51HCGgoKuAesujs6fv9E23jniZNxPvnEuLsZW5Mqcqr4kDqJXL6oLF39ctXCH6n8JrD7hscqqGzbAy54yLWNQA1j",
  "key23": "3QVwEFG4sxfZaDuJWzDnCqxWAbpbnmxiMdS4TejCk96PPpH8YULcmz4JkmSW91VoYDEkB9D7SUCpKBXQafR3gfG8",
  "key24": "SpLZ4Ks9NWvy4Aqh5Au2fbouiBsdjGgBSPBudL7AKgAjiN6Kajy22ASjR9d7P59RBZe68akmsHr13PMGyrB7hKe",
  "key25": "soDii84fCUSDTp73NSsJRjFREf9iQuLFvuM9gz1Ggh2HGRUfk4HN2Rqf4fUUQBizWambZLTKRUzgoAqgLP2SKBw",
  "key26": "2ZB5ByfrNh3oSbWN5UZKUvuUqfH5ewk89tviyMQnJarRfsj95bz6juyUNyF44RMiKtVEHHMABGqvmpSopY3yMh6W",
  "key27": "4YKoE4GxYUvpXvusJVHGpME3sgB4Gptkj1SYCzgH12t9HmAi1LTwYTe8eD5W1FKjTNWZFirYLLVjxB7yARDBaB7n",
  "key28": "5yxKDMcjcv8oQavYe23stHDAznRv1u2A1uxHy2UBSWRuEPHPvGXVi1FthaUxdSD4eGGx1x3N9un4X9RpvbAT6Ee2",
  "key29": "2TDFf2HNN2RQEax6GgkoSa6qYeMXdnPG7h1vaCVTqM7RBp4Atk5aJHhzHFoBpBaktcHNosV3LVMchKkJpGhcGHuh",
  "key30": "4mBnBMpNuxQfTtCNLsT73GxPc3wEdgUWwUeX7FBxZEahDiBbjrEEXM5owpshHhND11mVSmwMwdd3MAsrRKeD9RrU",
  "key31": "3DH4LcpFr2k8i8o8qFFVmoHoM5fJAFgTHXh4ZHkYMhNqcKxApk9kos77DAK8Z2Qo21i66WrMyjG2LZw3ELQ7DbX8",
  "key32": "5cggDRjBTrUiRV2ipgnqjSos3GFBwcRTrBWePj214AgE4K5enn4pJ4MwS8hM3MNwjMY5xrAZVZBYpoWp5p9Esocq",
  "key33": "Ar5m21xgaNQ1LNjorCYZZZUTDzYeH2SddvLeFC4YabztavZA6n6tXG1nD7kaHNMuEt34Kc5nkPP88rA1hMezfJE",
  "key34": "4S8hUZwwNAzVHBwkaauxwNcRpTFh6Fo1KnbWgEvfJZHgB3U4gnFpXzyWC3TbYZiwu5YFsJmnpguZ37rxN9gB1cE3",
  "key35": "3EbrtStTQcAZZiJCi9KqrCgKr54vDs3TQnhne4NU8dbYNQWWYLod8Eg28U96tyqZhYfuUUCLi8LWLrGBH9ZqL2J2",
  "key36": "8xRZJRyiq95B1g7Y5TNeTVQE7FHYL2HVWmdhmxQQtRYbm2A1p5UHuGw9R6AimfKhf7hh8CprSmzVzmAbP3CFzz9",
  "key37": "58jrPs2FA4MxHScW6n1p8CNHpxfSh2epuyvdg4wJntEAwmfLZWDG5C1tkQtGeMjNWWk53SQ1i7yTAWr8o4pVtQZu",
  "key38": "57vBQbGpcZx3n5GPYBCegKEgLvPwBJbXEkZdCRgPusYzdgSo2VE4ReKa8qtYyx7e2XL4FuXKsVYWUD9nfJfRwgTP",
  "key39": "3qqByDn1DS1G2SM5JF33vNGLVXUTMCV53jHsKk7M68uuikbvWvyQHhm8iSBU3rHyK24vNDne8Zov1S8aqaUPXqPe",
  "key40": "5mGvmRvdVjBLadKJzRQGX5j4QC9Hw5AYmAU7osfuE7Dcb5Jo1KPUa6yEThSUy1NXMkTFt6pwPhhiJzCqwzRxew1Z",
  "key41": "5Ycjf7Lfkei8wFdoiVMA63SxpssAoi8ZPyizbxP8ZvPPHR5cLBHv35LpbSa3qLg7cg4bKXDXWYnyJKDEKtgFWMU7",
  "key42": "4XjyBtqCaaWp3anhbVuPCeShPCf9RMh9uCFBg5MfbFgAmSnRAhZxQM4p2L4hF5mdwzyyVTkffqpRs5BtWgnd1gPt",
  "key43": "3Kcv28kYQg1eWyhjToH2aV95ZCKhhjZ7CWZnodRuC71KbE4GchoxiKW9dhqJgs61sZ9n542TaK59zWVR1BgLnmj4",
  "key44": "gCoXosk4HBkqdBdMqQUmdSyHh3Sh3AnoeiEUcGESQtoJLgrhtUw14TQDPYaNL9jJuWkjU34PBY3w17We8r7FPNX",
  "key45": "3KASuHT2Ckm8VSQBdX74oTA34KXE8LsF7DRD3sFfb8nFKNQLemJUXiNf9ofnAmn1DtPv6XKW1ttC3NLW4z4xpRZ4",
  "key46": "wgi3P568V3cdwkvWtzVsa5SubTmgMezYek97Cx6XfbMbQ2h1KG3YaeJYM8qovPGZ6Stakst4XaLjuBXBxx6tfNS",
  "key47": "3e64q9Yi1PTp8whrRc1zXYY6cbbfLJRcDNNGVPoFHussXRZa6oAZGAHFjdXGsQUy8hajpNKhiYYvYap2TLDQB2ZN"
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
