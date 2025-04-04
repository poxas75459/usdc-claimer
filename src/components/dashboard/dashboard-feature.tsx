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
    "4fN1o8ucnbemTJgoZk6rVDiU1fMYVnYKQiuzPWWBdCCSeoNqWdZqA2sMUjWkaypnd7qH7ercRHg32yfwYyZFSncQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gmXzv5FBwmiJo7DZkK68ntPUJJZJ5jiiTF1yhedfYWdYv9iD56aa9nrXpwKj223exNtBi8iFQsf223yCvyHPncW",
  "key1": "4Y6jbj1FL75qDnaAdqUr34b4NjXF47FJ9cTWPVi1WqcqhAhDwhJx6sFWJWRjsfidtr66JJawpBNgVZ4LqDoYcQdy",
  "key2": "2MiZcnFe5upDNz3maZ9DvLj6UVm9Mo2aZFDVDuXuG1UvRi4AGpo6Mi4c8wXnKhbPScRdhcHK7VeKqu82qLKjXPC8",
  "key3": "puDSXowJ3WM3iCWUZ68px15wJQZFaLjikyQ4wqf6KtuNoRyjFTNqTggS9MS3w4NWFD9nnS9vwRRK7KiKS4t94Fp",
  "key4": "JBRQd5nWAS2SGHqUeondxbJ2P1Nm1W3SvvUfoYym7Y58dth2ixbwaSdpSZx4yoxybKiauSnaEYndacoWJ5msaKa",
  "key5": "3jFbnfBh6haJ1KcxE49V3TJ6ZqwxA5ecdarujqUs8e9u2pTYvg1s3afMoXa6yfTRcvo3VHn4CWi6pZ4PeNPMjxvs",
  "key6": "3WFoD1Cj9y3VNnpJcGcCnB7uG9rGgHMSG1qzZuGhUApjkdi9iz5Bx1MGQyhzuEXzFTmMNfXvkMpGQKrvXoW1T2S8",
  "key7": "2vGhw94XMQb6Ar8W5CdygbVNrWJaxA4cnt2VLyTeeDD43V6LiGEzUWkpnHHEte8tuLDKkvFuc4sEWiuGuFAuPYPU",
  "key8": "39YxWSbXUnKeuyEZzT699wikH9bm8scFvNVmyT2eKApXEujjQH4C8eMyjy12THE3MwreByaLWE2UB4PYieh9ai5T",
  "key9": "2rLnPhhVi69gpumiNQDqMGUdKGPstZeB9MxpJbcmYfFyf2QLJ8JG77JYC4ouG6CCpKP6USGMV2hdUHkVYK7EoMbi",
  "key10": "4ZQpcywmoC8ja3m9BpTFoXWU9SMgJ6JSoBGe9m165zoWxSZi22Qyp5AM2ckjEJ36o9skKYbySaN3byXGejVLBKUa",
  "key11": "2YNwQJ2YJFkivmXLRr4n5C9oZSXbJRvM38sntw3B1B97JMAgHPyddYqx6jYRvwxW6VzgtiSaU8Jku5dmdk4SrSnF",
  "key12": "inbjcUJv3DDAndwE8Xb6D1mMV5t8CfdFde9sUcda4DrhqKcHFHvWmQrYG1NXkH8cSornuynQCS4UJTJfyfA9vAt",
  "key13": "2S7uZ9mQCQXKu7Hp5qN6fdCgRPLrJ8RV6ssmjUwPCqZKEfm4rqLWSbBmzgSZVHUvoooLCLfjkejJtGkQLrVSiLWV",
  "key14": "44jUwots5Q3j2mC8JMdDS8cSRDRGrUSbpsYa7QHrX3Xp1Q1Wj5JLQd1utCCRcUhWwehtHYD6kL1uo8UZk7i6QQ8T",
  "key15": "3ecvNKhJpySKNiSyxAqd4KRJTpuZLd9rCB2Yefb87KAgwEfiMdibctNBKfVqrUKqdALo68qxEzqMd3ykwYftqg2Y",
  "key16": "5F5yCiuhq4ePXSWaxJs1zEopEFX1mQxNQzHq3Z9R1axd3ydNe3X4gRHHN1yZ2aJDv7MZXC28wmasMypc4JXnCrEr",
  "key17": "5gbfoKf7WbTgMS7p7TMDzZKPkgtBMfM9bzprD5CAysdo4S5Vkp71Zf5RMYanwtzVTXti5EwdneJnthchrPUBARnn",
  "key18": "wx9vYGrhHhshTxtBpg2BSuWTiDauRXkEZfSiv64mpfoy6SfAPou5cfigaAjyorybfA5QjJR5hZQTjnXExd3VETA",
  "key19": "5L3rpdarSTY49zxmU9aRNxNtWA9mkpZuwEBpFHsT5qeethVrNSw3aNwk9v5dsN4g1v9FT5rdmm6RDpmzUz1mRq2e",
  "key20": "4Xwqi1zDeUStUTrjyeJsWHRkryA1jhie14LVvh6GbnjExC7diyRRDFEquTNHBjRjuwgzKM9vwEimXzEiSngnY3zX",
  "key21": "2kTypmYByPqcoroun9R9tLYu8oydj9H8J9Nhy4uUUJ9fAay34txn8E2RXuqgzbS68n9opkRuLS3pbG68ixRVAgpG",
  "key22": "2RsTZ5LDAo71tWX2mPecf2tgKMaUYRAK6WPE5XMeMo6zeDrEikmszwBwgik2wRQXJgEyhthw7uaMkpgbB8or1i2Q",
  "key23": "3eAA7PDYMZKiNccmPSfYi3TcVGPsEDbWeBYEsiRRs59qiS5ULdVEV6W2z9ZghfqFW6xTLAwmSskDBhABxQsQzaNB",
  "key24": "wf4TJ1ywb8Ym1YLj3yjjqJLQNNEFZZuE7XLo5Y1Jip4Q6AtCVR3FXKERMWoyAeF7U9kyZH9EGjxtGmSkvackL1Z",
  "key25": "5xEeWfDvPuMMhiZjmGCrxF4zN7TgLobSq1QuFGjhwgUGDKgXnJ64ihvPDn8XQMkzSKsJx4oACX4V5D9QwfsEBMio",
  "key26": "4qDE6fRUoRDHKJXqeqpxDymCpofuYdxYGK5vCqc6MNmLhRmUdFiA8RAbHQwsLQSqnNECm3uiaU1V5ZoaTahnEMsR",
  "key27": "4yj9t4efwkumtxAqde4qzUj4wiCmfr1i1Bq6FHNB8hs8uaw2ojimsve4XQJL5kDECjtc4sNNzEmjm2JmsEJks5GZ",
  "key28": "374pad7XjPaUWD9juyGdQEjSmKFVrzFAyQJd7Cctavdyjvtrkd7ci6vLi8DLHmtjGngLo6vh39QV7oAC9L464GF8",
  "key29": "5Ayv5EbQi6ME28EWpo4EcccdZpUG3Q1ndKnsy4iFXLLejiHfMyJUuvYSX7UxfSzKqhLwGBMWqc4zgFxEEC2huh3T",
  "key30": "v8tHZsd61meVxzAPGKX883MpZbVPkwqXHnHEFFcuAkCNAkDn8xXmjFmMZi3umtLxvFHrTDwHdvGE1Zm5wo2mcHV",
  "key31": "4v3BPixfzrxQTRegBDAxLGVvt4u3jXSPXiHxuNRgswXKa4kShThoq4RCmrXasS7RpyYuwqacoDBdubHEhShKtHmV",
  "key32": "4YQNAZPr4GjzFgni26AvC875FZm456yBDaezTUeMPKh1m2rGWJG7SNEcuThfrscXH9dNuZWi2Qdgdy6MQGw7yyS",
  "key33": "47gjCK9uw8B36Y9uz8nXk5NiGcTSD95Hj2yiYS8uPVQQZBeRJtU7o44bN3WXEruRwvujS3X2tE4bWfXvCbUPaS68",
  "key34": "1y6ea3Z63vN7zvsKEcTy3XoKTLmhdm1pZpxVoCh2pmRveCYFux8DG2okEqWeke2NWvVPHuJwUnyEBEZ23hiVZWv",
  "key35": "4YMyiuFcWRPT6Pe2qzYdDKa9zfz8sURkyvqfVK2hMBoHCBEnPLFLFLJWeTDzFtqHai6gzMrxMN9A5fUDv7F8uYWB"
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
