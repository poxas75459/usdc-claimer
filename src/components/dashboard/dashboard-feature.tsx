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
    "5JKjSVtpp4P9EnUt14wb81h5DBkfUxpbjtVBoch4vbm6PxjNV9W9YCeMfibxVknu9vGrKh4xQ3KKcd6MMr4Q262J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298rWGFw4qc2N1aembJLnd46wYUEAHDCaDFVgMexM8UBhQT9NrM9ADA99PagL3tHuRbcMBXN4wNTZHkgL8cPoDK4",
  "key1": "355ivo1VCFmujLYUF9Wny9LQA6EzzGpKzVZUZfxzZxfdN7WwVPHKjzLzb1P3hxnRJcMLJhgJDermUvxrZvHsqTTC",
  "key2": "4PqqsVzRNxeg3PoyyKLHkG31XMfEP8WLjMTriK5DewZYmXh56PrhbXvsGKsj2uyvRgrhv2xu5qhUfD9MAz3qZhvz",
  "key3": "2oXtNYohSC2yUtLd7jFtWLaQBbyKUk1goSAdS5z68934awfSkdCVP1Dk8ioCe8i4SfFZcaLqWNXFHf8hYxoNjxcM",
  "key4": "4z7iyGmu1jhnakiNJMXVjworpYrx4iBLDhm9iD32WZ8szhLU7TfqvqeV9rtxe4eFMRYGQufnmpwZ1WUDaePQTzyK",
  "key5": "36CXcxjDCPoiFZxX4bfC6MxVgDAwDCzREKvJPcwH2vRH3AehWWnXLJiCNcEn7wA1idAddxnJXPRZWaBdHwJvriys",
  "key6": "2BoJYocdmk6oTQrZR9bnBEpJNsrXr75ZQ23M8Rbec12ZSWCfMWFxjTk5NyQn3YH1Y9dvhFNbtPNDwNdpppGjXZE3",
  "key7": "4zYzhf7Yc6232Er41vv1wC6eSgYUDR4QJwaJCLHty6MTFFoJf7ZvNP9ijRuqWHLs8Y65CYFKoUp4r8kogTQjj66v",
  "key8": "5eQjWPo3KSPSgwCUgG3BiGe9hfHBTqGmvi4Y4CDQ8x8RJMCxV9VTcLjqz4CP4xLmdaZWTwnTJCpBnUMjzGn3BJ2c",
  "key9": "qmmJ9sUd4X4s71EcoLnZkynQoY6WKL4XG9DeftANJu5bhrJyy25Ht8rUvNsQyjwxXnK1nn9f5ci1nJH8x5UKW6S",
  "key10": "3jPzcWDbdvfp2KMtPSz6tTFT39hiGkwQ1uCLEKKmhSFPZauMVLbsWgjS2RVDAQT5tGaiRPboChTNJxBjD4qH1jbt",
  "key11": "24VoedWbgwKAwDk3p1362seZC9kPtgSohdpE5uveNGr4LPuJwCnRdkMoWQWirtYQNE5U9TCx9ymCtwd9XVGwaxsm",
  "key12": "2TTofFQT2s7n2zcwL7RxQzak2KbEeoEpZa1ntyMwjvhsasdnqr1WhpK1qKKaZRwNHr6mv1QTXTg8kAgaQyeGfB6W",
  "key13": "2qFpKtsH2jkdhW3PZy5PUcMdXmFR6y5oyMKjVwtzytcQgioefohsa6x5sQsoiZteQRkDgfFAi2o8wahkVbxtzq9d",
  "key14": "adZqE7EAMkmvgXL8zd1tfisFwp93hWRMdfHFcWw4cfFqps9qyzidghGgvoahMwxhzX54Tzxg629n9mYFfrNFYqJ",
  "key15": "56ejzbxVSaBTuqNyat2GLbhftdUG3TNtsUXELdNu5LwsPGmYq6iF6JCdgQvo13aVQdtRT8in39RsW3TRaKwxVubF",
  "key16": "4tD8kYKbzan2VMEpLXrHAW6RaMnwegX7EhJfHUsKdiny7HcrhmN96wjGA7PouVH8Mc4RzLM7uwzXtuFScMqd4eRH",
  "key17": "53VUDs339sGunYZ8RGvJNpouj5m7nyNYnopTW2VJ5aK7n7W28617W16XoXNDoDSGEAc4nRqcvdxmSGpMBFpAWtM6",
  "key18": "tDeQuCh3T16JJixtvB3ySTiSGwokMiZpnsW8gYHNh5ZRETBzo1Jv7Dz9kQzVoPA5sQNkoU7A1Jd33uoxFzvMiuS",
  "key19": "4bM2KDymQ63Tmk8cvSPddiSjfu11XR5pjEGWJEL9HXDZwDqVM9G1cHWmB4aCpPhMh9Sk9EM6hGihEVCT94XrbfWP",
  "key20": "36EpcP4to9Y5WAQUogNXRqXc45tYrsEd1K1ewnHeq5WDQfjVdkTJQqNnzHZSE1TC4pPvTs8Dcasa5yS3TavjDFi8",
  "key21": "45jHH6BZu4sxDZ92wAmvX2WcMHVp1BSsSpaHTRcpQhLDJqWE9VG3k5jdGGyuCoi3NJqkySqwSWZhQ8T39nXJgkE1",
  "key22": "eN6BHkQw1zc1xqkcx2ezpNoKotA5SFzYqXhK3ZYXmhaac8r4MPDM64r4GoBrX63wD5CL2Dpt4uQ7FTNT9N76UP3",
  "key23": "4QWUaysFaNfdpmhooLTAgCGLpPMxQKgkbuvYtzY4j3wUBM5GKauUmavF3TxTiBUKLEL7SDssL2y9r52UtV64V6r4",
  "key24": "2rF7rNFbeTCzHVHXnZyam4qZyfkZHnUhFB6vfSmRUpJ5SUqB8K1AU87eJFXmwS6tYfDHrXMgY2SV5ysdHc7Gkzep",
  "key25": "5degiUAMWPmSNWkJ2LCiXj5QvuRvYpg4zWmykCA7PEgnkNZJq3mkX12QgzmgLJP3ubqAJbeEyMJatvG3ihbVgSxg",
  "key26": "5JjERWuZumsCHhzUVqtoCzyFxu4twXLwDirmmG56UUar7zGhBQMaHhp8GK8AFHk1KTCWNCPguJPW2qHesA63GB34",
  "key27": "5oHnbai3Dd7KKzQr77F8J4cib6PkdXCQa24uzc1HXjJbFNjc4kF1yP9siw7D4CCt5z3UWane6T8bwXQbpFMcwVUf",
  "key28": "2RtaKDCCHcPG1TwE4L2HFTGRRnzMFJt6hZxCr9DNvSm2j86LwRwjbV7iTDkBLsPcL38gjA92EGYpknCfQKQ3fRK",
  "key29": "5yoyZSzTZTfgAmYpu1YvkQDyhUsCcHT3VJCeNfSbYy3LchxY2x6V3vBbQWPeWUFhztUxWAk68bFig5tVyt7yZHxq",
  "key30": "4MvWxrW4tf6wB12KD1TZTPAnRXyEu8NMLqW9LtZ5RwQUEM5oEho6mTrxKY2ShfLwQCeDvrY8cHFJhk6Wvugyi47C",
  "key31": "2YAUS1amcinaHhV7BHUMjwZZRwkhzUSvc2gW934pPe5nJYFj9tXNDYoARfJrusATGMzGh4k3bJhMx7pEo97EYAWa",
  "key32": "34wuhRcmgaJ5PLzewPLMhujFV6uMtSDkLtF6RKHETVxNUhC8RsPS6W5mfM6eUN1mzd6tFRc99WcbsWSwJLDbatz6",
  "key33": "pNSXeKt6niFVDokjLxrBDfvdc7ewzYaqww9v6DUYC4R9A6SJipPamSmAzrL2gThtzNzuMbLVEHsU9vFN4MH2G4y",
  "key34": "2c4MTXsXuiGdPh87sYdKynQErwvaumLsBxtgYNh3qVCdprXumWAFbDNMFEahqHztDCZizEEFTDu4prYRAsRaSJKe",
  "key35": "mWnnRW7WEBJcUg2Kms2ctJNuFWMWXuJJtoEG6f1eFe9pxhVy1pnDtj74ES5PikDES6SAdZcn1KMFfVmxJAoyoLn",
  "key36": "qZ5nifvk6FeU9F15xW5ZGCvUesFQDhGA6UFg7LTdoQsZyEPR1FDhGL4ssAzNXTjPuWP4pPYCC9xu8ESVReGLhGa",
  "key37": "3LQC1fQcNBxL8VXvth7mAB5HhBiTgbnik52kcpXT5MtwEY5pN9QpszKwD1rznm3QF2ujNsFoMY3UufAAssg9x6LU",
  "key38": "5zdyatjzsvQDitmfD7oEY6WcAiYpfTzEPWdtq5jVPF7xWwdAt9VxHsdLFwVb9hAVLYhcgSBJuBDwJhp5uvbC2eX3",
  "key39": "5ykxeNFtA16sW8UjN88a5bj1wS2yXtRL8cjHXY1dqb5VpCuEEMfsHnttA5cYLnK79nrFJrQeNWJdoiey1mtwv6fF",
  "key40": "3gpKLgYLBGtBJgbBZ7Q3jYKmGHsARgMvVKhsvnj3bPkcaeQwwYyUoF4okkchYkfzZ4Tsvmt3EU27wUhy3AL3CYEj",
  "key41": "tiZuEjr1cy1j8iE3qMNZ34TZD2Vrv1W8Wq2WGKPZ2s489UU9ZTQrZjE27or5dLmvCfJnjQpNktC1iDVXMnw1Sy4",
  "key42": "4cJ4nWUdAUhSGWvMiTMdejj27aqabVxivFRFA2u6A69XFiJSpszqyueyBxDqa7dLhenmsm9HFHm2Aqqirn8nX3rb",
  "key43": "4fXAHPkBNp6CPhkMSUFtTTwxnwaqeckbVgtU3GMqPwPD92P6a6oGS9hxYSso4DaKECkbtDu2nLYJK2PpGKjvaDm3",
  "key44": "5L1udX2oNSXF3DAdfWQe4v29VbwtxyiogjKQCYhDJeeZc1Pt5BBTpXccCqwT9kGBxjf9dbbpEsyPHgbfabo9KLby",
  "key45": "5Hgdr48Ln1CunBqqRPfSWgR6dZYuFibKpSK6wYdEm7GDDvFSYia4pdVtzaKeNCqYHQs6ck3fkEMacG781C6qx1Wx",
  "key46": "cVnxqsUHV1RDHUWpXTE2g2mhb47yvKyWgviaQH4SMynp7y6U7fNfV2xTTeioPzowNjJRt1pgd3qE3rLAcbtw4bx",
  "key47": "4p8qc8TJaeSjyVgZm8cyjrtk3jgipuBTU52uBsMXL24F8zoFadpeN9S2V39DvCBuKAZxDA8PFXgeH6wRUtEPk6Fo"
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
