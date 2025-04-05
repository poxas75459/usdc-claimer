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
    "4RfpvaJXxVMApRpnjMTjFjr2P1TyydbSrB1orLaVPJUFMWCigeXJ3aVkRMt7MqP3dMVtSBZWgnWd5YehPPBZPDqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQ7M9WfM5vyhaabJKHTUJoKs1oLPFRe1pvDBAzRb7oPXLgYvFN7pNsmf2RxExTqsbE88N4T1QhL4HQixhyT1SuF",
  "key1": "4zWZhx42VKR2gqxRPfCHqqQAhizZupB1DLRGfZMrievqj2MW2zCg5MVDTCS5LooFooHGYrDT2JfbffHstcN49xNm",
  "key2": "mEidoZPBtp3eoUv8hDokf5KvTjMAh3rwHKCqLq3BWWTSnUV5prxa5ug8pEbvwoFn7zW6Fs4LTHskbjQfeFtiMxa",
  "key3": "27ynjchQbrMAHNUFwpLp73sTK2QTVmAjETzicZ2waaheG6r6ziQKf8oFaC3R421p8Z1K8M1aaYCeCYy84TcXcskK",
  "key4": "4XZJvdjzQNcDExRkDkWVNYSF1nZxS7HDYDYJGCeWMEAeCcHgEywoK9zNg8tnuvRkAc1iJRLk4GsZH2uD9uQ7ALcb",
  "key5": "5prmmyfTJP4EHtVeRNtXkj3Nv9VY4e3eqhCyXtPzS7aKqn8MjAzDpFwWyddFSFe6ZUv6Pad1REnXCCjv9AudqVFD",
  "key6": "qSdiqJw9EKsh82JrV2FVG83kXXNEYPYdEMstAyjAbrmtcGqiCLefCm28Y7mQZrthqCZPHZF3ME2rp6cgbB3bZ8r",
  "key7": "5kvfUnby4px8HUMT6BZ7o1eQc54H78aAYcPGpJHBMkvXxYjM3aPzGXmy3WqVwgPsqTo6cyhG63YaW5dUuSJ62iG",
  "key8": "3S5NUaqMvtFqgRKAk9ProZf1z26aPym4XsnsE4dme4zckMeV4sVevNejSMdz3Bgf1XyEzekj3HpsUYzMSgBAz1am",
  "key9": "4Gnx4Vrb9M2M47dKhrYD986VymmBZPiqukiaorEcBd4VycByPszzozTccZpAmjvgwCPbc44CS9gjUWw1vytgqXX1",
  "key10": "E643hoqv3qqGgbCs1SgYtopX4sPpSvYM5gqm5rF7k5sZVTjkHdSzvv64sQT3rpSaZz4NtVUkTNQDc4GwNB2mdcE",
  "key11": "38Sys1AECkpZ9xofdjg1LJdBjNnG6NFVYsM8BZUs9XQToKY5ZuHWFmY1GxawmhXarvohYd2T2Jb7cLAwhX2V5HL2",
  "key12": "47iQD6wVe6KiuaRe9ZspcrsyQpeSvX7bp9kGv1AJNKbgRrtVdZHQxxLefDgoqUZk5qQAaoH4y1ppzZEPSiSJ3XB2",
  "key13": "412shZwCD89JG8dqSNkTeYgqLUujsMQf9ZhheEVKxEDW5sEfapKr3Q5EcuHAa6VBhAA42dAXspU9S4zwYbv1J5AV",
  "key14": "4LS7Fe3fVSgQY98MqaMfeRqPhqAXhrn7XxSSPw67uXXTPZkmTvn8iesSXXtKCLsjGErKKhoSF4tZwym17b6pUFU3",
  "key15": "2mtYuUKZN2Fec6oCvim1RJsKDaWUUUXyrCKk4GDf2mpUETsbr1c55HNnNGroj45bxHUaZrzfVRqjcY2nHa2J7SHF",
  "key16": "2apKoQN4oCVEPiCG6bdR5UYFN5LadWU4KXvVhf1him5N2153KtAAhvso6EnPVWZVGZmhW9Jzi2sF9QFSNCjCVvXk",
  "key17": "28dp2V5Jpcdy7DMABaUWnEY9Bj3iXpeZAEpUSvJx1TMUbELuhdp3NtG8zCpJyj48RkgK9717pWDd8qrfc99qp2uM",
  "key18": "31Xur5pNokyeGVk1CxP8Y9qqxzjnbqkb38kKMxHSJn3DzcEUdkTU8TPrSqWY35PfE8JCS6Fs6KgoPRjau92d7jgn",
  "key19": "2mjgE3V4CgHNV1wVhuXQ1ekkmNJJLFE73zoWhHnd5GLkm17oe71wtet6vbNXjgNE84AGtBgYRJ6NuPXNjNXLBp6y",
  "key20": "5mvkmUES7sCDrJAzybL5P2coHUoXVCEyowePoB7b3QV4HCR7YDYXTsabzdoyhXYiHNESbbaqa8Yq3v9Z2qBa9auz",
  "key21": "5jbbd6HaFJF1mZyc1vtWYt4YhaE3kJaxs35y4f1RGgsf1ohvFNdPtNRc9cFtQxoNbFBrYJDHUustdtPXpoyUX5dF",
  "key22": "5WtdDGz4DuU32j2B3xuifV6g523rEJZh4KZtwbJ5D7C5CT4tHQMT4GVexxynHJnoXCYDkWNqNyn9T1eS2QSFZqLC",
  "key23": "2BSdC8RrrMDWGhLMr2hBEFP3vE7mpEFF6AwYYz7Pb6JP38bb6CKbawNsym2JGP7ErwNd5stP27J7MPc1g6ZCG19i",
  "key24": "62ENQp3BnYQyPqmUCq8ThxngWvY6fYGVmQ4RoT3Z3JBzznBuZorHvT5z1oAdDVXF6C47XtBkB5mznFLurGDaZCA5",
  "key25": "3S3dn7SL8YaKdw8Ro1dFMmPtSSTTRU8ZxkK1dNTALe9Aj38V5N8rKGrU6NCHwqhShmsVKx7mZ2EQgYdUbP8YLPCz",
  "key26": "qc1aqeXnBrupnhVKRQc35D6TwRroK8qgJPiXwkcnL5yBqYVdFnstCE6qircoJ1fxq5BEFZUJR6GWnvBWBt6yoCD",
  "key27": "reSggxh89cazA1qMbmp13ENkqv3p1bfs889tbWF1587oF5q6JpA9zkwgrakLvQaaxoi8gWFnYAFDZhbksBgzKhF",
  "key28": "4kM2y9J6arMZdMKimxL69iM1G5G5N2KL5HGpubPBZYZWH2T15E3GaMWAzHZLJZSX3juWMtxV2aAKcvLHNP54QxYo",
  "key29": "2LVkxkvactts2XtakdT1hVXaBHmRYPNuMjWQA5nRs7kRjsh1h5VzuC1fzf3LzLnfNAy4ufg4tVpkBtZSdNatgEB1",
  "key30": "amLU4A3R1AxeWC4fWgmFHUf2iYkdqhjvhTNAKDFNsobYR86jXQaCDS4Lm8VWRi7JUCWCzhw6qFFjyuAwkY8T1je",
  "key31": "3PPUNXw1uLqFaeEeJwtVFHTekBBS6Xy8HNAJMh3JR1PCrzmbj6qdYUWU6P38ra7TuJ3EoSud9c93u1ViDe9WwTJK",
  "key32": "3y3UzPZswrJifnMvt5ppPT5jhzt47zAmqNqKt88wdgw14hM6EyuhAExxaWoLP2NPLytaydadz1TWYHnpdY8ngGco",
  "key33": "4pXAHPRPaaaF1uxGXwE5kMcZ2N7xk4spGvWDTxN46fXZSVi2EUC9AjyYGN5TGaxsX8qQQHNmnw5dJYYnSWF2JKDf",
  "key34": "3KusKFVrWyiqjSPDr5PTLcmaKfCjdCD57bYs7p4XEyEMUSuxNZB4k5cHBicYeE9SkupoqWtn6v1UcNLRN7zR98cq",
  "key35": "zbhnsJfn7HpFbRAUuBKL8GNjVwGS2KPx8xjBkgHpMJ4yx1MNg1gTBh4Wj3Dmt5YpuvG61WQr9dZDpE8MRmMS2nU",
  "key36": "2D7coQHH1kQroyW3fcXzqY35wtB4kw8hzzCgGwuhSCoERy9gy1dkeD7ZyeQHdqwqy3osJqfJ6ctKVwSRRoniR5xq",
  "key37": "2Jm4pWfCeeWc8j7SHoi3qJ3USpMAyotKqbFGdMdCJpGAofzcExhNAA516sVq78ZkMADRgybHtAtwu1NnrcEndk2n",
  "key38": "2ZabVfsqTyJbJV53gEDqVt4DjBreFq5zByetaqmHpxCx3dGoev9dWT5mK7eq2Mu9bo3pT94k1966zugvmVjJLFaU",
  "key39": "3VQ8x5dZ7gtASk2AyQG18B129P5Xv6Q5LGaEoBxrtR5NxX5eFr9U3WhZEyRyFUb8eLydnGbnNW1UPkp4auUW2amv",
  "key40": "3TfvJLHHnhGC5tpLko1ciErE7rnDz2Nw4q68SoZ5pSUxMwH8hqwYvBEr1LfJcxK7q8kR7PDzKAjA1aE7NPEXiPPU",
  "key41": "62aWyhNtdFgCZ8RumMJqgjZVLZZUFMSUFtrfy2FKvDhtduAZHrnGMij6bLDfSUuKGxmBpcFjMbxPbnEq9rZd4CH4",
  "key42": "4XSXY7ZaADKzJPj5pqvQKxgTVFUiS1Y1VAsKEnT9tbtq1Tv36QLFuRDqQTDVGMFEdvoLobphsGeec2A7vzBQtNNs"
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
