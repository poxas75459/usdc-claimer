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
    "pRjochCY6BD59CJktiXWNkTuYE3teE2zzgKaVKWugeiYufVjghC7eJwToMNqVZ8GVdBthNgsuKDcxgwM3aAvFDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXLH64dLDCVLR1AgFgMDB9STy5Bh2vi6RKvPXh6bUYM5EQYKJW435NYbgC8EKfFuDrgP2o5dbD3KpWfCxsRq7tz",
  "key1": "ny3iniNNGLUBLCVweayZvGt7VsSJUfF9tdu1MCWt8LvJPM4UQQdTURCteSHBryGMS8HTUStgAjqFNdQusahstSw",
  "key2": "65pDx37nMZn6Lkf22hxCwmzNX4kUiV1BMVMU2NsLKMyuRm3M92M9no5iedbok9Tp8nMNPvR5HfMixRGWgF5PmncX",
  "key3": "2crHj78ne22KuKiA36PBfADEzonopqh6tQsukfsM2JHKvPrziQszarRue3oE11kmwQNkc9tC4SKohXnYfQuWrWp1",
  "key4": "5AxvkrN2pfeFcHQ3JTNWtJgmvMaXpLrSWnbM9yAjgcruFCHfvkCf3TDqabtpcxFQeeBvqB7DAbb88c4jC84SuijD",
  "key5": "5U9thqM7jmNmod9Yt99vd58aQCY5XmL7si4g2KTEtQPtrvFBcPTHmFB1tNjaSitjGg1aKyotGm7jeevY5By23L4R",
  "key6": "5oPkrzFjzsuT5bMZoZJUvR7ENZq3HCu9425DDGoQ2igB3gUe6RJXLtFPsfKmsw7tNjg3ifNMGKgaFFpECE2jCUSd",
  "key7": "59FRRFEhBZfJ3BdKgcryGbwqjicRNHgevDezUwRNgftQEL6dA5dVd7Vkvpx6MEhedMQbU2mwkaTgNQkfXiNgqkA9",
  "key8": "5cgFhJ2jfAaUYbCYiqZpuMGpxvpzkU6kxuVXCUHQyG5r8Q3ks9FLfDcuvKaR77Mh49NxTLtAqTjo4Kb2xs2itkZe",
  "key9": "3qvrQqDSGBJTKKzgq6GTSaEztfcan8n5extnpsCh7cSPvsnk5PiL4sZ4m5Lkjnc99u8wGoC9k6vLUP1SCgkezcap",
  "key10": "4yBMuZqysQGDrLnGpHcxQvZhWj2gq38qh9QPHUkkVHSNKfeSxzfTUHn85nCDDDDjUSksWfofNszkWnMZ3kngPCKC",
  "key11": "2kHtaZAEx8X4ZmQBh6nrRHmR2s6HMmBKTGMvmYdWF7SqQs9izHcW7Hj2ktjFmHL3XJMfKDwz8m1QsyEg6yQfhB35",
  "key12": "51oGRUiB6xwxfxCS5GZRSJ4rhLcpu2S2CXSrp3UFEfJws4AwD8kh8zXtgmDtgWHSuSFKyq5rbQZkenmgx3vFLzmX",
  "key13": "5Yh6vrFKacwNH3xVwKDs2DwXV8GjdyLzQN5Y2zJmz2t91fbmfTrzKue5xctPNhzJZ7kFe5cEVxAUvzp5DQFXjDKM",
  "key14": "3f28vDJ19rbKQRYRmepPJ3DeEfdmCr5kS5do9gNznhByQBPpErzzxxgRnchDFXsP1wCcwGjGQadHpeSia9wvtWAv",
  "key15": "2byRd7DwFuttrz7qGKMrm98pDxZwASzRWAwdaZZYqSHADt6Gesn3Gm3rrbZWPY9vgfJN3C2vusdS9pJuTAr1VL9B",
  "key16": "3mCQfr2JSQ8JKduKHhM1UitvRuE79QmjVLtnZXT7EkbveuLucwm8AMPaTrusnaoQM3qshgJ1teCjcsWF3thyzwkY",
  "key17": "5WaJpfWDTGhGLoVjqcwBQfc37HxWBMr3HGJgxGpp2q2wJTUcEUzp2cTkZVK4Hx1aL2AjgKk79ieBdjJLdpUUeF3b",
  "key18": "3U8989SsiySWRu3EHvMy7E6ik5LHH1Lzy41FqL4iXm3QcXJ86KWxbPuEfMYXWQHSKBiFNdeimMzyouykktDY2nNZ",
  "key19": "nSSV8sBWeVueRHEisyXbfjM44m2bSaxnER1P3bSUYRbU552WKWkuXVZbGXwvpreS5UHsUhGKkiEEsqoRiGbQSKU",
  "key20": "btFeR4hdkXUQcfKa5YSbSjd8h1Cvy8QERYUndG6JUC3YhhgxE6HL8u2VJMRVGLBdrNJB16spo4aJkwzRvNBvjLD",
  "key21": "56ufTnzV1aWXUiaVnF33J7dYTeWP2MHMBWxWVK211pQD3Pzh98WvZ7f4wqYgKsyhMYr2eXrQsZAe94XB4R6h2F3H",
  "key22": "4Przu1bQyjpfgk5sd94DC4naCHKhr5LmVzJUC3GBhDwcPFaJaT9ELsZwgR5zoDBrTKvuD1brF8mcrpvDVHurDFbP",
  "key23": "3gxW2aF3jMzLgmDjUE2GsTJByqxqkmKjyLPByMwkuQSXsJDVFmzouGL87sekdDPvvg9sYxcdsDuLXy2SJnmptX38",
  "key24": "4JBQEQwCm35rc4YK6JwtioJChPqpUCLLDQvUYFXDaLzCJxx3c8zsy4VQhcfLJNaDQbr55Nsgb5V6JXNJ8Y9USCDx",
  "key25": "2y4R9YvFxLAFyyBg2TCBrhiR6h5xo7jKr79fuPdwn1BUpDqy57b7Q3598es2N7BNzPXgAAkQewpTqzfFT88eNpno",
  "key26": "3kNiAh6m7ZYhaK6fF8yZgQio9oTEeHtr6Y7L23AUTKDgfz8qafV6kgGxBAPUh55aSawPKd6zjLDrgFvf863psZrd",
  "key27": "36qDdXDroJVQvBKZ8VjB4dbxvphnWYLPJM8vxjyxHwNgrZRE1Y5WPk5kUEJwdLmkhm9H5oQ5P87VN7i1zUf53NGq",
  "key28": "36jsXxrNEVKyMHTLKTButywsFcboxtn3X4dNTSiv5fDn3fuHUKTibba4EmzZ6zs57bA3dv7EMCVAvs6xmrmgn13G",
  "key29": "4nF5eRHdZpk2YynfJUHGewrjzBrK9e5WVig5xuwga3oQ2tr4czQWE5RYK88FRuJBwwUxC8uv67KiYrexipYcAgoG",
  "key30": "t6PHAaLtvwnZxvNasg17XWcuX2kafjL5q6Ykgt8YQQHQyHZ8s23hBXuPbc38AvvZbrWDJEgCiBJb9xgYoXynxDm",
  "key31": "5RkGoRcRiV5J4QH8dqh7mqp6AiQAfLLxGaKEfzbX1ZuqrB5wGGXSiMPZoBzN8sD9wq7DmTC6iSA9ADt8A8am1wwj",
  "key32": "3ZvngKncSUEr5phuzDU7s2bNe5w4jTSCwckbgL6D7yiTcQrzYzdPM4ZoZc4Ss9A64bVrjERsCGqGzZzBe5FNrkiE",
  "key33": "34NBNnA3VgPqNWWbxpLTmTx8SRixc8aoYD5zq9e1SewFP8jxVJCpAyaHjiGgQuS8n6prS27ANeA39Sb4AdfKZVUw",
  "key34": "3sm7348ypVPywhGKmhjFqBv4oXCs8ju4zxrHbFtEdEDKFLQP7Hmmatxi5AA1sfncAA8EyqvSnZZPWH2BSBuHCT4w",
  "key35": "2fLvmg7Mi3mDnmerA6sXX3aZJ8uHr163bowLLHhHPBtv1jhmiEyUF5YJwm3spUfuQJH9Sh3G1iuYw5NnLGvwYmED",
  "key36": "4QKE2BYhbjcDWGrcmy9yY6LV5weyefLUCJYdccq2DHNvTWWEWeoTg8DNuZnmTztGJ8nCUxtCFm6v3xUpF1Jegm4P",
  "key37": "28k4Jentvzbkts3xqP38x5F1KgBppsLXbdySp3tGb2wJQ6XVMLu6qtzW9BdHabXadfjVHEM3edPpZeXgqi17WKd8",
  "key38": "4qvRTZETopU5zdp2n9LAswPVsZBiq6x6VoUC1GRTpGkwD2MyfNq2EFznZoCzUECB5xsvhrPBeVbuR2vngZKbTc3Y",
  "key39": "3UKi6HxEvxHuWSvctwMuzY48JiYLbeFtFnKu85Xvsb4sTLVdBgr8Kt6SvDjBEq2YHFN2rcBnYXyWma4yC52C4ERV",
  "key40": "48y781sg8RB7eufAo4hdnamp2JJqjDtvrb68ZCFufpLyYtJkKqJBz4BU3kwPrPXKLW5riipNrhSnXKz4VuuWadZy",
  "key41": "2JSQ36CHYQ78NEUQw5aPypUAycNN4NssHUNKwbC4XGeJPkvRfa8sz8bjr3bXYVyZCp6QvENukDniHKTQPN8jEJ39",
  "key42": "2SBmRFYF1pSL5F5K5nnZ7C6hmqEsEqFdZBZwM1PiM4WwKGJRTmfHDGj56M51SKYbhLfPqXPjCGz1Yg49ivfbvC6L",
  "key43": "2mPv1PKfeSeeMPDCZ9C9x7oRmkydjFCeQggCN6Znb8yNvtaBmW163epQzqo5JZfPjiEpuPRsMGq4N5JGBM8HX2Xs",
  "key44": "39sHeTmhBHWiLiH4q7Yh3XYBvd8uyoo1poxAUKGDd1nPuPi3iH5aXHvwtQ9BC4Pu4dQVLjH6AYrgGqYPQvehtr4U",
  "key45": "4Js8suCoukFiw82W1t7NTDpek8s2Y2udLrf2M1SpsqoEBuR8WNSTgMAiMZ6rJJjKFM33HcCnsYSBEWYZbEVWnc4H",
  "key46": "375KZdCggRHjmHfYxi3525NiN52y7m3JGAYV8YoxBtMGMHjmoZULCfHPNPHLp51UPAwXWYMQa4p91sDAxHCD7R4N",
  "key47": "4EjZDDZgCZyf5VRCnMf4QK3tBaTxPbGd6aGqJWb463QMVTNjSQhJJiJ2kXwpuAEG3SfWLsQTWDqZ97AmsdscZwuk"
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
