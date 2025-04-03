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
    "KuwwehwTNN8GBJEYmttATUtteGDCzz41sNZN8qZm6VpmDv3aaArbDdJKaKAUuuDDCJgt6kq37KRc6A9PSy8NF8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCRsHmk6Ss9FpGyb6igHbEQeK8zdCBL3UjXX4wtW9hBiL6fVn5sgV3h34F1gbQzSgzC3xvuhGHDavPmmd8xL43",
  "key1": "3cz56Mb9hqDdg35RNq18SuLHyRHuJAs7MNUBrwP8EjKrjx6JmeoJSTymtboVyAvrQhD1xNnUezQeNBsUB9DRXnN1",
  "key2": "41WWfk2UnD32HtoibqNmbPRCSns2muejkvmmSY4GjNhF3xL6XSFbrcJtkYJnreEFrLj32Y7TMwrgWNPEsb6fEurz",
  "key3": "4HttLcbGFQYF9mFJt2Z6bSoZ8ihi61pdF4tDvaTgtijenMd4DHJ4WzPVC6ovhAE9SyApDLcSwp2R5CKy3FrZKcUx",
  "key4": "57yWSwLJgrB222fmtVWQC2DSTG7CVgYiHfgQLjniEYRWfrQwpv8Xa3dgw4pjr5WqC2CMYTVKC5ENQuhjj2uGa7Qe",
  "key5": "2k6ZR3QCM5ocdWkui3mbb72yoxTKXcaC1esxATo4wazMLN9AtNURbJUemb9m4ZXuytK4a6jHpyg3zqa6E4g7TKYC",
  "key6": "5z37QZyCsXSqvnvKcQV6BcdauvmRKmNmqUV5XZkE3k2j85FA6y3MmhbSJrDivQmvkQnUe14F4o7zN9VntnZndSap",
  "key7": "3kW73GZQTBrF8abT1dAcYEphSFcHCtJQyDRzcH8fAZLw8c5cAbUmAfn5h3P2v8p3KwbZiWvfji33PZnctWSz6BHv",
  "key8": "uRLEm58rmp8hfKp1mS68EFjUDPxtDjR6d9yz66KDmV5y5CgQXUapjXGHgToy4vhodESJpy57ZJrdZpvS4Kvbysv",
  "key9": "3padmnYBKk1CzuMLfF95Q1yUTf3YEn2ksdEYWpDEaJ655EYFyBKmJYetiuGvAF77Td6qxoocB8dEy5YpcwY9HSvk",
  "key10": "2Uhn5hJUFsQerc78Zzk1YYMsKhQhHJKFGGDrbom1zmZjzraMbHPQmLXnAgZy8GrpjVUwjoTQMRk6zbFx9g63muwt",
  "key11": "5DfkVHmRMT9yVTs96yiwjasgevADgviWsPFb6LguNKpDg4D9az15D3VLNoHAidDmJMPDkTdaWp5WwdKSZUfkpcov",
  "key12": "2vaQsb3MHhrCXhnpV1Swj2hwFQAq34zLWNUYCe6wFtLbezPj7p8bcXcwVY67LY7LdHCJJnstLZGnUZakkJou2aS8",
  "key13": "ZMXEqSJ3AQsNgYHUpXtuQMSMNeeiL6rMNhC2XKjhy6rh4zTi2WgfPu3HbhY878u45arNryLwgFmkQuwzttyHJr7",
  "key14": "2vxSyVsHByrExQj4cbaGAfAtzX5L6zxudHSNR4NWrK6KxNHmzfCJ6AzmXcZPnh2NqGTBfF5NjpHsmeZkUJpVGVk3",
  "key15": "36n16Cw71anAK1PqipKUXsZ215aJEttSDNHRLfgeqmuLkDE5MVkqpTK53ErWtQg9a5gzSrosnEsdbjTFGkyDJMXJ",
  "key16": "3BRfcr6JWcgGp3E9MLXaP73iiLtfkJ1bUXgmfHr8wajamvVnWcshEJU2JFBJxd41GihnPPR5V6f68579ChSZVXt",
  "key17": "3HLjWpzS3VVQeUYKgGRhCdukutmuVEYx4qGUFe9WE9XQx56whAYzPUN4pAVKqcAXeN476EKieJam4WtCLhsDhfvV",
  "key18": "2htmHawvYw1iVbQZwZ3Y9XMXXRTSqBv7iAbj5hFTwehvyRFeUSGEXRbejbXjN41Qcumr41GXuh21xKHGjtrRkyKv",
  "key19": "285sHSbLfKa8dtcEacHL4U13i9ePNeJ28WKHCRH3fQDzb4Utzr9K8aeSPyUvTDXfZqiuGKNjJH9V3XCioBfdzrWq",
  "key20": "3KN2Ak8LboWedT7JvQKb5TX7R9eehGwjAXfw6U4m7TwLn6Uxxq9cJr6bQ5Jw4SgxsHtHoXdtTwAzx9qjg7rqNCno",
  "key21": "5XP5RmiiZQjdLzTZdyeZyNTRqUDX9FZK1gi29oSw8CqTYxzjbhBEekvwsorg1nGokx2YESTdtNuVxpH5eFXZ1caT",
  "key22": "2Fx8Ph2qjzmYwDp8JhgM3twCv46UqSJyAuCywSQTBDP5a9f7Fne79yKg4p9rcVdBSgFEv9QD2sRXx1pbjqi4LUEr",
  "key23": "381JPj38Eww77P63JgV1D4vFQ8XCJ6sCQZ6Vp2rS75ZKsBdMevv3ttWfHvtZ8cEjjdM8SfbBhcMScZEVRsppsRDF",
  "key24": "4xk62Zuvr8wgaPZwQCkXKPdrimcYGtwHT92eiAUTfJxjAjgqnn1kWNgc6mdrBT1bVtTLtgvRz9uKas65FGcNz24Z",
  "key25": "4Zd7Yn6yzpNpX1LtMFiAv2tmYHQfKU6L7hKEZGjWysH8B3f89C5GvT7udiC61Y2uNEEtEn2sCfjUvHT6UJATAx95",
  "key26": "4SDAyB4JbFkguSd5f8Q5XiNTrNWaPeXMK5MdgSGVauB3CdfekoksSjy2o2SBUeYZhDwuYvr5YtbnrPtUT3QbYPvm",
  "key27": "4TKoMKCHUL2rRQJiWatqsrR6VChBDqSBfDkfcvwTNL6quDrhFF3wNi2C6pm1VkUdzr9jzP32Syy6fmYRQG9u4vCf",
  "key28": "2rApT9ZuoMGQwtCzWSuBjxfYsKSn8pZNdJvEtb8WGUtCv4H9f7c4KiBemojeyFCgKpCWrxdEVA2SCuDYKsd7XvyM",
  "key29": "5veZ4KcPYjmcnCLDZe9xtch1SaynFA2jKt2tTWkFeaZ1GA5ithydq65gA67q1Lv5oDfYRyeaGV2iiSKzGFC2vnMP",
  "key30": "64fVRKMgTX1UxV78K8tq5nSHRg7wRfB7fQ4U2Smxd9TgYzwgURXGZbtyMXkw3ieuErNCifbRVPCJ2HrT9MZ6TuyA",
  "key31": "4Te985m5vmMTYzqKqZrTmGuHMa8NeEzDC2a9aMHfqyRpXB8Y8e2tGBWM9W8Vgx2a6UH3UUmvuVfQFxMqHxFh7dXN",
  "key32": "25XsxWeuaqmfHE5n9B6YEarA6rZdPJJTYFEFJ9V8ebbLPGXD9nMjwf9t5xQyhgU1GuRkxhetQqTvJwqZuqLZ4kdy",
  "key33": "2oadjXUyr1TcGpZx7ndvsD9mt7iPsM3bxw6iUd2mUNxUz5gUiZ5R9ZJRjtHF1fmbUpMPoZi5XcPBnwr3chcccMyJ",
  "key34": "3cGAhxuRtcoWkuB47yqkLRa3dKmXsK4fqwqN8zpRVo7PDXMLRBJiT42m7e5nvMkq77CPTsKdXnvgMJr5CQi5uTZ1",
  "key35": "54bruKWxnAYQJkoF2C4GpXtr2Rzi7Em7orxYgaHNNiS2pu68akRFPcjZKNn5ZkWZZTNwUKyJskCgwpewYDEWtfXb",
  "key36": "3ZRfhhkEvdzzqdFSb8Ak849fnukF8LnSBi8WrRCN2Yeid8pUx9F1PcH79SE6d7juCvuKg7YZGc3Y4tXeu1mHzTNS",
  "key37": "5YGpNdpUKLf4oK44Gb2gp1NWz5UpDtNNkbAJHi7m2joBS8i36pjmYVC2ygD29oHHkyM1CGB2gYuh4mtmKX3rzfLX",
  "key38": "53iw66p9mQhNYPEbwxxUAZvuAQttnExEdAMbN3Tod1QB7TS9j94UoKRrZD2UsatCjYssnV7AxU1ykcFqJdYTQgDi",
  "key39": "4VwrnEPP5AUHvsyiQHLbkugsz882covNd55iepvxCq7chobnpuGSYWuoWtezAkwZJyWqnUneEq5JFssHo3cAuEZ4",
  "key40": "5UZcjdr7qMR6C71jKFFJnUUTFLNPGzfb445vtiGeVounuFFJYLJX6r7LHMngTZJtdaQWeqRiE9DW9mXvxVMdrM2H",
  "key41": "3omR7TVzGn2obrcuCduQk2QeGYUXpgbsBv62Gj7Ah7fpmer4trmm6kYqAMbJTijZHNDKgRKctUHyxKKmWLRKvtzo",
  "key42": "2Zw7HBVmKTHVAm8KLJmaWQZ4LWNtT4smVUtfBKvEDCssdu33vXeLwfbVGhHD4GacaUrk3tJ4HZYwDyguqmYcKybr",
  "key43": "4bwJLNAe4hm37LrJQMBbojXTgjhv4votxKf1AcTEsaR1G6dcPHmMLr7C3ZacEUYk1js2E4ds6rbfuF3kEYgqFkCv",
  "key44": "5SxKh1GYrbq3couFg4rMRKx41xGSawkLVLKx5GALfrVjAtaK4rfKWVfbLNXYf7cta9g9QwhAz4zfS2QAk58icrUh"
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
