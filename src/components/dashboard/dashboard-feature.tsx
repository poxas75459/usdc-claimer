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
    "2XcALsPjuhLjGbqdAQJAaYUQgGNpZ3kDynTvHarqDMPMBgNyZBpBvAhMTb7yPjZMg5QzMz3qzA82BrejMaSA7Hfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SKwHTLHe432TDpi72mqkybECJWRp5FyGBBStoE2CMvtpKsXqwwNci87jtVkUXQcHe7qFc3gV9hGKDYpNARMCcjq",
  "key1": "2hD7w8ruy2cDdKRB2TwK7zKFwXjkmnNCvxCQYazvFPC9M2JbQ5vizEk55w4NPDsfiMP2gAshoa5pWXS3qoRZU3MX",
  "key2": "4hsUdG2ZtL8GYiXpi9ScD9QDJha3RLAAmA1fNnNMHppJuGbU7U5T5K4Q5NZFPTuC8JAyHWMd6PrTvvH2R1SXNEae",
  "key3": "so5bXW1hTcdxjLB3GXDYMgE2yCGckVXSbbFmNDWyoJffLD6gPkczST9deAKLhiAoQGrA6fAkbdhCUAYaBpkE2TP",
  "key4": "2JHjpVAij3WPXTPZ1TPqi6P8Kfd2vZw3h6rT5ay7FR5kz7f56NpMHytMotmbz9r1gdURWNidfoG5PjjUWKBjmfg4",
  "key5": "PRkpjPHYVEKBaVCyaLoFJe47toTbpTCdFoR6ejgrgP9F1wnRmuzvCCox2Fai5w8xjukef8nqa7qCoPYLc3TonGt",
  "key6": "2LWd8ab3TD5FKFKGBz5rGXKY5ikq4BhRzXbrQD6KbTkRauts4YrAxmLMQzZ9iKTiazHJRidrT5h4K1F65szFNu9t",
  "key7": "5iskY9uSygkEYYrojhxJGp6QMTXiH9PdWXoALWVn2Uz4iBGnbaj5mxLxj5fWioRk5ndQu3sFgZRJdSFwNk1cz6eY",
  "key8": "2eC1MV878yTk4C9sm29pskhrfvLem7nG1dkMeJ3wXrgSxkst7HXYLungjCZx7Pzbxwebs5QjnLRWXLxUqq5JAynf",
  "key9": "5kmv5wGAiat6F46XopEWvuPJCDFwJMVU6KA1kEh9zNFTbyuLW1ZjZ4HSaE6epXMdoY8FvPkpGGvHMm2dzYhBFv93",
  "key10": "63cpLxv9Rtx6Ga4tvzNMzQWKJQa4iASSmuUSjqcAorLBnhV41HiRnMxuX4RbbApyKmx6EZbXFxdCnFEV4XsyvruL",
  "key11": "3d497gEAL3CZezDDuu3MRuMkhGsnWB1wxD513ixdYCmMJf6tbLbiVxFYZJ2Z2C41yDXvUX21GriiNw3FtqSj9eSo",
  "key12": "2tMCNzFCv9qxGbJtJ8KZLeRQpA9xpKQykhP4xWEu1jwPMcmHneZBaTM1G5VyD9XGx9STmeRV4HetPTq7ugorkVct",
  "key13": "46iK6TDvi8Mt7SbjuYgLGN17XUjhU9hbCbhEcCg4YkUvkwoo93WhMePgNUFdxKRceQcRbkSH6RmZkpeLFQZjKZ9p",
  "key14": "2PsFb3kMsPMV2MvrbohTC7W7wn8CfLBK3dDjG6qJtDTCUghBGdMbnNSjTQtGic7sfRwFekW8B7ojFhDLRdvJyuy2",
  "key15": "5XL1hGfzJRsju1hAn1iQdNntEHyemZqzedVK1KLSZKZj5p2ZfBD4VKNSoY5cmTeeptpNZXtygxXvFrratTx13Hbb",
  "key16": "3q7NJvXgLbxrjndZT4vkyYYYY9mmcmord76UPcAbQH9op1bSKJ44fAxL65tTNfi19uhuWLcXYwBPynMCwtEQjQ6D",
  "key17": "3N658kfEaByZxRNUTkFfMH4f4bm5iQk1dV2zZ4bvpNry5fZQwe1FaKBmQeKZEFZiEhuTfabyq4GFozcVknQC2N9w",
  "key18": "4jXTZgA8DzyzcEQy42CixmpsXPUUNzSRPpAsBFEdLJrjaV819XqXZGVHw5XFgoeBPMq9XKSgXxTXkGm9tMvcQu7E",
  "key19": "4Ewpcp2bZSa4tRQwy3qJaqC8pk3hLVhpmV4MHndkCiCj1XR4MFQQvo34x8FGT8ZJarjpYnUzQnQaAgEA9WPfVXp1",
  "key20": "56aGszfmpN4STHNuCDnDeeG3xj1odyfn1HcfqDRemuSj2pbfKAjoKvoM1S5frxoHDoX48xXZ5q2fXULgWSUACxZ7",
  "key21": "2rSrit1KTM5sNcu2TprzhPH2d1A78iVJbtgGvagAhtsNrgzTzgefQHkLjVADummAztUkYk5wr2kRTEtraQKY2xrM",
  "key22": "4BZCtjSkd8KvUYh6EK6EZkvhWetkyTrwUZHf7dESHNaAwnzfZxThWC2wsGt4sHdLHvdXrnjtVN4N3GCtqUer1fWm",
  "key23": "sNEDoT653sTStYWUiRV7489SCawMEo7VAfVmgE1ow6VtnZhxDexdeXCgR8Q5BfeyeZviujWPcv1J5H54TGXaLDn",
  "key24": "61JKQDdvE4TY7JNrCJpMLzmjR2PF7KYmQb8qh9FmFJZ2whvvv8jBEHNGGQwaTFuKhDzjib251FvgauYGmdU8L2dn",
  "key25": "f54NEkVBYW5yAg5PZ4k6Z88caDdbUx19UpHkrRkspASaphx9Rep6SvtBKZHFTqK9mMzE4nYUirWW666CokK53Np",
  "key26": "4VYpt1TRXT3UzjXLryBhJPL1yJeaF4HEBU28Qx7Q9vdRkSmYTq3oPg2N7hudfRbyUNsejnUeh7xbsBm9pFrt1TEa",
  "key27": "5PX1u9urPgcsyG6RyoZdbPVgzZNHT9bx5pveCdUCPri8ow262TBMmhN9fshnKURbiuvMwE2jzXmK4TdRsCxVvAHx",
  "key28": "3r2vMxGgPvHH87ieJZpiTupbEkE4gbgXeSSRMoeTxCCJiRttNURE7qMtBdVK5EE296QnUeFcwShiL6YXP7NTaUUv",
  "key29": "xjbR5h9KiMWqVKFohRsxFQgteaP1usnYVH9pshJzzQVJKDskrV99qEeaMssBNAa5JwCMFDcUjkFgvXzgiYU7QZs",
  "key30": "4hmX7m1p6NK3HKgmvN6HsL8EuknGHSHborNnX9Bam37cd1HrwCUidpzd6QDR4jcpgSkbs3Q99DpGsexDcLKDsSjL",
  "key31": "2LYhkDkrhhmCaZvvqR18ytUPKLYTAgTfdHJp8GfiianrWtejw37tbGj98KUpETAdAYvMLaTG15VLx2pmewbnSRsc",
  "key32": "3Y31nhTcNJThGdGsoGMVQ3juKxSTbroAZ9v5PJ7RTzzkRKdZKHNPRuQ9KCHWNgntrKyTTX4joAyKXLx3CAknXE9p",
  "key33": "3HRBt8GMALFmTm5rE9Wvf3zq594ZzU4tz5QpDpx12cTukffQJaLhKE5pdjC8yTGb3VsLSUcr24HcDkBgEr3aTe5j",
  "key34": "2QDVmq2sKSANLyFz21BDaTzXqEwdPSv9xoQMhd9XxfJQUmypTbKmKJsWekumkcMm59JcSx1D5AZTQTMpBPwzyqdy",
  "key35": "2kfAKabD8M5u8DVb2bUEVWHSbnPTBYsc5q1gunqY6hYgi4dKgmUao33UJmL1HYPVDJGuuxgAFEAWbTcEaPwr8Gfw",
  "key36": "3VJHUmfr2eGcUUzBjLD3ZW9KsSU5NweVHp8484sLnT1FWjhpG8fjU2v36r8qFh9MZTCKCyHD75bjPHPUAAxbYdWU",
  "key37": "5kkF78RsWpQkQzqfd7zbFChSihv8axdxfJfRBfg4UxQVDaMiVphAUHPoW7Du2g9woR4zfAz7m2sEwfKnsWvFXiTE",
  "key38": "2ctDHLKozBMAJx5T71Kgy5KWrXcyDuUqa26UUKaxDZqtwoQ3xmXWK3cCJySbLCk44F816HAxf391ugsHfrULbPFw",
  "key39": "3YPpWMdtfGXABoUkDVnx9sqHsECGR7HhERCPBFhXanKxwh7Xv2DMsjg87Ds6bcschT8A84Mg6YzaUhet133hHehC",
  "key40": "2P7PbNEf3LL7p1XHPSZ1S8EA2YHMPuAbTmnfjBBDZE6ja8cqaLHaZDAc4cm3Da8mnba8RiEiseHzJYxgoeoNYNen",
  "key41": "kYf7qRwC1TCgwTQkMofa9ULcFMSp45qrxBMbHRjoaU5Y4Eqjdt3AjodH8WwSe9nZrtCH4UYsZQv8a9ZNGvqyvAM",
  "key42": "4mNXzgK7t8ygiyfcFZvqLKCAUEwY5NFjBgL33zhByY1orayoFcm45kq2AA5YjyrxXdjyaLwuLX7nPmVxFPfjc75R",
  "key43": "22H7UCBge11ziGh5ikbyB6LpcSSs42zfaV22aPr9m4e1Pa3S4QyEaFAERvi6qY5wfebj8jL5iMkTu2N7jbQRPSY7"
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
