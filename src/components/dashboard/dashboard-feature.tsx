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
    "5GDaiNHHdnL2ex7YefdFZWxKd9byw86T12ZbRDeU9CfWreXU4AiEnsaPs4HspLv33hSvvWZaa5yTpfFRxdW8KR4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nu6cCQyvRBB3894LoiosGBRxMQKFqME36WtFrh36CcMPNtgm2QV7gaScRk81FfmsTJSf8vD78iaSWKtzyZDDAfn",
  "key1": "aVJ5ZYCuV3W25A6xVtYJftvHZHqEApLHio4bPGiTNyBjrJYhapnvRpimrcaMoXMt1azSZuqyqtdHTG7ZnnFuHYm",
  "key2": "2LGzrZasyggXEG7Cd3CrZ5tquqw9XhnmbSS1pVgAjXNkseGT9rUmEPoR9uM8z4ex2vSQauyumQiHcuXHRkdbGKA2",
  "key3": "3vd3kx6P77FU9XjoQc5THKZQDMZahM5EK9yhXbRxXLvaWPAfTb4sm9Lhc3JCBy7Afdp5sf2dDo6MueaLxJTaRQ6W",
  "key4": "5HgVmo8LHPkZKmgaYAdysBxzWJYrSZ4vPfubPcpDwquvG677AducffDF7kusrH1DCSAr9Ji5fZeNymki8vcrMGGL",
  "key5": "3zfhTkS5K95cCLpviL5cbL7HqoXFfzSsZkh7kD815SLSPKZuo84hA3JJCzHLrLY8fVG49o7ZJHeXe8DAZsKArJHB",
  "key6": "5BRSmmm2DGRi8q1Wm2SH5rQRri4NrvdUvbKSZ8Ym1kZiAa5DrPkJ4Gy5PZxTshDRptFfZebJhyayxRCPGb8iK1XV",
  "key7": "24hes2SgU6aHTo9EhnZDY2hiSzwSyUPe2SpxovRMoTx4ZBh6JS7UT6YoannngfBFdvMXKPJfToYFntEKa1Um5N39",
  "key8": "4QyF4Q9joEZesfnQzx51sbLTuZJsskhT5zjJsYqMWyFszzm3cVN35u61NcMZwvvCfH7qyFahA63Xe818Gd2JDyQy",
  "key9": "3VvYjkecQEYwucVT462Q1ixrpN93wJQ1kPoQjHJNirx7vz212E4qEcdKmEAUdtkKFVQvwgcwALpJ6B6y8fqqY9cK",
  "key10": "5vpbS4TBKiyTYYSMGVvhrdsEVSGPtGwobgSoAZJfJRCovVwgM76sFYp8okTmmXsDLnVFC1mgVN3JaU7YC7Jg1Etw",
  "key11": "keaSMMBVdDjeArxxfmE5U81hLAaACiYPdj3ntjTyrFWHayeEodU7Cpo5UJM2HXDRL3emM7Qjm7yniq7NsGprtqb",
  "key12": "62uuShKSJRGqtyneqFwfBWrgw84jCFF5S3czk3teE4sEW3yhEA1nH7GhCNMZZDvs23BRJexUS7M2h5Ak2cQ5VKzk",
  "key13": "zoBhwsoTEaZmQxU8t4rxmkH5hMWNNmxby59QpptDCoq6s4AaTG647srfdoNTBexkHgySJ48bMTgLJpMuQyvy2YT",
  "key14": "3LKEN7uEuDchjucXNnd9Pwv6PWJYLAcxup4FgQiieZ6z3KPfuqU8HBUqhX8vC2PRGELJt3AvRea4fN3ehZFbEA1T",
  "key15": "3GKRahhvWxNNp55tmdp5aQnxjMPtNS3BecxDdCJftUd36J59g5jaZoR3hxjvuYnaydyXqmdVxfUVenkiHtPjuA2K",
  "key16": "2FeT9MMYmoZMw6YAPPNEbANT9FjJMqZ7TjPGRLfgdW3ndYCzJeq2uU5SdeMqCMggaXMcd2YufmJjCDAfNmJKG6CV",
  "key17": "dX2EdzhDWqER8PvudimrZk2MYXvzDdPrnCBiCjC7m8nVgEozx8Y21wXyciA96R2iMr1NJbDzhZXEjaa6ivGkBcK",
  "key18": "53x5ACTSN7ToJ8duC6cg2U1bRR7rFfTDWGakdLkqG2ByL7iyVHW1UbK9zUHrc9qybY6p4aGrB9nzXzogrHpzPV6V",
  "key19": "5wMyDbmAoRcRDMSsRebvCMH8JThWqVFayfaibPSyrUHF3ALi7TSCqyoSHvkJQDVRJVsq4xNPLkzX2SWX99nNjzRC",
  "key20": "vpAaayWg7odLDMbaK7TBR7qJGfeMDF7AbLHhC5xB5hBHPqDdGrpRHFBpoH8jtw4NgfbGh3CbieYBiQ7GMo9TC3e",
  "key21": "4D8vFQ9e98iJi1poxVBLvokSCJwbUfnqGBCkGjgBsTzh4fJP8matr3Tenxw7sv3nxKStZLFtLs9JJ7kkJvjUaxUL",
  "key22": "gbKN7kQh8hUqfAKC5V3DDCT5jggxawjyBU5GPQhCJwz5qjUvRfzntbZRsk8EjJ25UVuxPhDCPGssKa1FkCsbxCD",
  "key23": "5Lq8Rj55DfKJsTRuR2NoT5v3y1CboZyVYsWt6Z6jQ2jAXzBqbGa5THQGFLSWXkorw6fRK9FwcNLjoke1kZAuN8CW",
  "key24": "WzgHepYeCxioooJyFzSLdrw6syb7AFCrLiertv9koVQR6oz3pAM1WRGAwE3CTDp6HxC4oNhd8eFPreSPqPqWMWx",
  "key25": "Fc2v7tri5kcP6A2xw9hC2goeXk16LVTEc1X2FXixGXh539uipgq6BxV1hTzNmXbvB1Mrdq8R4ZahYMSdGk78ux8",
  "key26": "2kgcFpabNR3zt6ZC1mj8fJU2NZmi5T9LBwFWGhWq22AdfFE6GWodvUQA811PPhkjRVxDMDMKteP8v59FvzUvg874",
  "key27": "2neceHQBwfyE4CUiAz7LK91V46Ty3ZNhyEqqQxVGwfq5Fdwga5bS5ApVGkjVns9UsUj4x2dHHUL2kC1TrBTa8zoD",
  "key28": "FFokJEpb7Lj5FPk2M46xEHMvWau57LHwRPhwTRev61KAXCf1KuJGJ2oxwkHNHNFKANCnRu28tcYKR6kfypHYPfY",
  "key29": "4wcxGoTK2ViM8CF1X9sfzDcUhtw8r5WtqhLZN4TmmsbgBSiApg7WUdQkZMmJYwJw9XFyy6Rs6xNTo67ybCqPm7wi",
  "key30": "55s686nTdanxU6ieNAoaKvtJ2N432RNGGDGSdZhvusHth5qw7cwaofi29JG29Nboe7px9ETvLe9JxKsu4hHNascz",
  "key31": "4PXUZedNiapzBNkJAD6zEK3gLtfmsuznoG4KmbFWaEmxCS9ozB167EbkNNaDc4F8nb3voG1LY4Vdc31aMBLui2Wz",
  "key32": "2qoMG3cXPsG7Lwt99ukG4U83AX3mgUGufX8CiT4MNWWMFNYnVVnCNMwM7hS7KiwQX2Z4croxJpaZfK55EEdAUtMd",
  "key33": "5tyjmNdgHP6QuvKoekUUqs2VfYFwgU9dwmQrrWtFvTQgkFGuSFY51aVU8tV1L9G9ykNruaDzYvSBwvq5JkKdTiEE",
  "key34": "3C5ykhx2c4vp4f21Njams35KnQ7oswyYxehJ5TJhSboYBvFmfwi2ne58u324trD9tSNFtjdZQWkALrn8cnvWfGAG",
  "key35": "29z67c5hREn8vXdWvCCsQtb1EGP6jjWCamWE1jRaa3QEgVJWDsYxTaK5Jam8wSRJRuPkAffmzDAAQ4idxmq3iaMA",
  "key36": "4xrMwoBUXnwbmZSfh4MbAsfURocS2JLGcPhhsnbUi48hsgv48KbcZp6zHH9pZV45hvkCMXMZ1qU9hVW2Ca3ya9iB",
  "key37": "3su9qq8ePy7vWD25SvESVnxNJtnq5pszrzcrmPekJCYx6hYBsqEQ3XmFeob4DiiirnAiar7DME9zPKJdbqeg8woT",
  "key38": "2pa8Qi4ZhumYKfCpCNo324XuGpSHcNetLybWtPEj6MaocTUSTKSXt2V9VkhsE7K6FqNctsZUPJH7r3ETRmyvbpAf",
  "key39": "5DXGBfYefi6syWrmyDHpcL2g9pgyT3mvGpHpemQ1XoxExMwK6ddAz9Y5ykdaBMPhb2499AwPokpbHp7s7UQYwyMJ",
  "key40": "66LSUtfpEFVHEFuDHtF43JA7Z2CdXX9FHL1g2yiqewL8eugwuV8K9ViWD9hi3MgyJ5T6tptAKGqwRN5Nr8mpUgTJ",
  "key41": "2Z5hnbYM5n36nRz8ks8MPGkmzcyrghxsMhFCVFjnLKHUrGiD6mKfEEiKxAMPhgt56zierbqm6Qkdnb4XE8bxoKTz",
  "key42": "2t6GruvykqFDfXHwWAZcas8AHL9PwDvnHGB6HgnqY7grfJmT4LmiEvP8rtK3LjnfBe3UKEFNQkVTcUyyadkJ6RXK",
  "key43": "2P5obJ4WeKVP8xz9zLKFPuAVYTTVmLW6FRgMqNRYEimcAQwyBwZz473aJ6knprUmjmdav2ZUenEDxFoUYPWNtqfJ",
  "key44": "4Xj9837QSggp3fvnwyX366uCqzseMFHtbqcfcREYWwRthzY4PFqjAX9dfWT8fEfwr6DL58u4jYMyMRANnCwxuKRs",
  "key45": "4pndtqgK42BSFC7zvJ5ogfBqcouWZLLzynQMihqFsZ6g2VnWSLtHJxsmb8YVr8h8wk24CWJrBBydGi3985qt68KE"
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
