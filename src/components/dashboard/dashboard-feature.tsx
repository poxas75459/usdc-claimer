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
    "3saKxvqx8PLkj2bnupQJN1kCvmBZ1LtpSBdzcGWfqHX47P5RLgPMmhiAiBg99NnavBYT4pXXQeHuDFoFaFy9mvWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWz6r4oCGpGwmr7qMuJbmATD34QQSHAAyNuP8dUJYQmae5UtiJABDxMYFqzLDkk3DkxkwrpggKZS5GQFiGBu1N8",
  "key1": "2tXntSmU9PtAfvYoFPfo45ndTYriwsB88evgHy9tsaVRZdKwant8NMQLnJSxpRR88RdLoSUu74t3Dz57DWfxU2DD",
  "key2": "3NzEBB4FjPCaJkwCHzL7QdwFdhpw6xfAhC7NamgpGogPQkAe1Ewrti8gapkWXP91XomEDykcaN5nzaxWcN4ndGGC",
  "key3": "5YSg3zB9BRBKEzumN5rtxV864VRj8x22jNpt7nCBqsAsQkAEqLWyEU2ZQaJfQjeNd6h4LJyb7qwcMKpQcBDp4BML",
  "key4": "3X8eJuQnQvJKH1YskXjyPeRtZSji4xaHTmCrhZir12mbbxNiuChRhd2spZ99Y3aPtP9uQ4HZHYq3hfXqsGtr8NZp",
  "key5": "374AiaBCpG9N56sYiFp8sYDYpb16jBv8Ai9E2GnRpjCv1GwC4DMyBHEXE3syRP3eqvU8qQa2gRXHRamNjkmmG3b9",
  "key6": "zzc2cgcVnNjzQLYYiHuV5kKAebZRqJqjuDwkoXckVSHcPPaYKph9yuw9JzYh4oX9NQyaUvZTkyHmwfb2fnPqFa7",
  "key7": "55UdTNdbLoHAHK8BaAJGUwhfKo6bvxhguWmRVKhYvHPNRZTzrhVXPnMyPJFhGYX6x6jcLkTemuWe1miNLMGPNfVV",
  "key8": "5AVTh1JRhYLmMVwiaBhF9ZVXLsEw5cb2HYCMR4G5wsoiUbvY6Kgh68CFNB5wwnQdEPC62YYik4e5pSNJTQazds7q",
  "key9": "2JTBLrtjFU3x8b3K3YEEuPj95t2wZ64uQYzv924xe8tpxeSqh6kNUNnTMZsnchan4AhiNeErc3Pza2y7dJXiSXrE",
  "key10": "41VM8qrs6NqJLFchwfNo3Xd4Y3n5CBAerCMvB35jWeaHPzyjPGnj2bAPg1FD4Wh1t9Ya87DY4155KeHq5dUxNxTo",
  "key11": "4YpZiQ8HsNa6ybL2Av9VUUyj9UgXB6QVy7nomSh4Kgxxb3winn3Vq1o5mpVmZgWGrQqxnWtWdicWhqf6HYbYwNcF",
  "key12": "54m6bnyydr1BedGgRZapc1FL9q5Sunhgjb1GqMpVfKr9MSx8n4qywdLSdQVTWpzitoWiAkZKaP2Sn5XXiyNSpT1n",
  "key13": "NzPKG1wcwdmoyBC8HoGmGMS7KpHSEbGkdFYoGQeRuekafdH8jM5LH3t85s2ZPpx9KRZy2aSJNS1Bv6wbo9jrAN1",
  "key14": "2BH9Nwzd4qDbwVWMVgfWcAU1hCzkaTyzwkWicDLQ2x3mZGzTVzN4QSPBusEJsmEYDKrZLxXpbsNBrRLjYPbptVjy",
  "key15": "Y6bcNEcufLKvD2wpSjNRJZcpsGUgmyUJQSTHDdHZ9AbRbSGdeiFadoaX7YYQXyPqqZwnzcWy8ueBM7AE3fAHjTC",
  "key16": "4bnK86sy6Kz2v8jbxD56omfCZVtwJSb5Lu935DFX1Bg2Ncewuy1fv2J52ko655Y15vb7WsgjknNEetnALEjthQ8p",
  "key17": "btzmytstXmUbSSG7VCLxQMzBSiZJjPVRd3nuQxBHtoG89Pft6YjLiifZsfn3uNey5AYYz4xtGFq77jkwgaTuq7K",
  "key18": "5hMdZfv7CHULDPkhdBkUhFVnHKFdmSeXtwAiWtGPpsSgtjDg7reQHPxZgNtN9tFkqJF3Kbgx6SNmWg55Ayp9TCLg",
  "key19": "2RShybQK5GeG8W6Pa16isPzR8QMEfSA8ZYsDXYm5vc3ZpXmApUdeWT9gARy6PBDxP9isSfAVXYkB6f5bmzBUjs73",
  "key20": "6YDzDmjzSXSWio4okpFma6zFJjefF8AT87JbCJKPythEcR53qLDWGy2dZ9n199wFVJE2yZiCZdmAWs4v6bD1Fu1",
  "key21": "26pLr7gAQQjyiqGKe7L66eq1AxTSepgopTsJdFxyG9c2vibmW9F4FaZL388FTp5GLzHy7Nca64EefP4bMQnAUpph",
  "key22": "3XuTYRApCqQbpMuVYd7gFxynibbbniUxDkg3UeqWFgXb99J8NGUf2TfWz6DiBGa1c1sRgJukapx526eEzVvAHQU1",
  "key23": "5a56KJ4fRKC49ADmsWDqAieC834fpj6p358xnz76XaJWPuqRgywtcB6q79KkUPL7JQnXW6y3Usqes7J1mbv6uvot",
  "key24": "2SZTGLiM1jABnVWDPHx1BVWVDgd4Bok21ZoVPTWoKMood6AXFL1o15gd91CZdQCEKu2zozCfoPF2hV3vKBmTqr2x",
  "key25": "yTyPM86XPMyipPyKUDtK2vqhHJpqKdS64HAEXiCwjsbf5v63ctKhPKo5c4kfkqmk7pHckfSrtPGNqJ1HJoFk2mf",
  "key26": "3ALm5wTevsSVzKLdXy8cjPRu1Gjps83WHGGGKgCudLXCn9QPbSbDPf3Zg8nVoeDKVBVxFX9TDzeXHCRMBUvkYHYD",
  "key27": "3xu6YJXxR5cMUUxTYNHWwfD74qHkd14wcHSAg496oFujG67TQKgswbizpwP1FBnUmjTRcBsGGchRYNu3HiZYRtUW",
  "key28": "5dya6AnSAgKRCKPLWuVkGVHJGCq7ptRj2jMHynCrhvWc2HCcGdnhrXMwTxGgmPnMbfQ2KEw3epHfCqWqVpuSGC4g",
  "key29": "chKCzMYAvbCR8p4i3Bpvhu4Mk3BTnLrHyTB1qkoSK34hz9AVRriHtT7rzhi8wyQqC1kXyM55ePNJmBk8HCjx5cG",
  "key30": "TkuNaXd6cAowyHjbCjGWRYGaYdjLotsjHzaUCCiwJD5PfdmioJogrG6dSFxAFDBkDzydzvS82pw8WkW7vpWRWkS",
  "key31": "4XN58uVv5d5GkzY7epRwWkNggo6xAJ7iX9bTQKR28BZt6AugAH7zfZ8LWW8SeN8Fyk4R9XLrSU8BCsRn3RWuAh5G",
  "key32": "5Dn7zmHQqdVjNAWZsKj3sQzZ5fKvPbt1Gpt5KedUob4CznFbVT4qkRJu3SBLwKXrK4JAAWHtkpGxqhuWktrbzzF7",
  "key33": "3yJTRbAH4pnYShVN3s6s5iNhHntAyDSLW2vBHa6Wocpx1TPZNrX56Fvt1Z3ru7XhsKKb98T57BVsGFgRUB6XQXVo",
  "key34": "5zXtWamwvq3BYrvjHaavHpX9vcGRtqMfBHN5wLSz7v9HZ29sa6zJjDeqXjv6LgH7sB2B5sJa9yZYLGwcknkHW1Pz",
  "key35": "3yNmfTVm4QDZzvqHRdTc24recE5SrtHJcUiEzHrg5XAvv2qekSvGuFBVZrvPTbvHQqqCCbnuiEc1wvUBjXBR59zL",
  "key36": "3c3CNrinDhJvS3hfbumY5a6q6LcPwvFSv3RHnXKQS81rTqRFGBMWsKksVyhj6NcwhbfKZMPKDrk3w3opZHawgwWA",
  "key37": "49FWUYut61GH1G9ZqrA82xiescMg3rb8hUGpQakQQYhDWt5K8Zfuv68U9MzAnYavt2S6K3drgMGU6QEDK198prSn",
  "key38": "5hPSX51JfTysiW7ZBRijL1Aufob6Ly1EXn6gHtXgRR8pQMt66GHwEP7RkxKiifzmtS8Gozp74QEo6SkcmQanz8x6",
  "key39": "2kFd2GL1XsGCDq4u3DYQW9X4Cp8sJeSzruT3Wb8xpYvD7a8fMzSqX3rpbSBJvVUrNTrCGpFGou1giA7xmWBWwibV",
  "key40": "LdGihScPfRLWNXrXrAfV5fDe45a7n9uUfuetmx3UgoSrqfrBnMbNmnfyQiYLPM84qHZDfPBfjgfpVoFfwXFUhXz",
  "key41": "YKZLG8YoHGDTh2Pf6NLL1isBJu6s5wXabn2zCQraugxma93xSxfft3vvVYGY8T8V4ZD84EF4xG3EGT12FJKNzmV",
  "key42": "22X5QNFABaWXPzj7n5NWUVQdJ7XG2CCcXhUNN67dqCUUZuwt2du5xqmepDC6Wn4XyoujYwUr6cUXbA6xbaqj62vE",
  "key43": "2GzYkZnaQB9QjxRf8FPT719qeCpvC1FLAsDEbedCfT29oaCeWwYLRDvwr9TCevsHYh6kP5YrrtRyLMQo8rDEQkmL",
  "key44": "1tdHnRyTSMNmbXdtwnuEDzxM2iBi2LjaRzHwvzJq2kStYsRfqdswjgLfqvdWz7m3QWkVsXJuedZ3XNFZW8qmHAf",
  "key45": "4yvkTCtMsqHhi92iDJZFv1q7CZ1Qv1FdXy9ob7w1pEgfpgsaBbA71LWX7mcYSEsfTpQ4bT5yxKZGXQeWGnfHrGZK",
  "key46": "5YqAHvyGWCq9Piv4TWjKyVKZqkF1bdqmDU2LTvBC3xzjnmM8V4J5Eg18G8w391gQFhtVHNwwtyDmz8sN4K7zqW4J"
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
