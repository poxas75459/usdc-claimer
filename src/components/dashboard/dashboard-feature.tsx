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
    "3iB61FB6QJ6DyhTHDjKE3Ano7wdYRLPjjeo9jEJgQ5ceBWm6ivK8ZJQWkCSP2y7zfCU6witRMcDY4TNxUPRnepsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZYLNkXk2ZYKUwBsG9TgeEmjMVZ7mPTF5QCKMhUx9LYjxGMNVW7f9PXZtqateNV4MPwbPX4cTAeeWmJhNA9HXjep",
  "key1": "7mZxSPkmXkxeWg1iaMFhQqygP4kAZokjHfqX5GSscm8QT5sF8DyVXgMHRiLvBBrXZWHDNEsBMyebpBdfyuAHBCt",
  "key2": "3NPBrTXj5eivnuDjKEjMZoy53P7xyky8YA7hKnw78FfKo82gZdNpmDCBfhRdGbySXeVxe38VZ6zfMbXRShBaboDR",
  "key3": "aXNByhoPMDa4hjFkQ8ibUUXuF6vUY1qxpuwmZmZJhiyybHcZgDZLgwt5Vij5Yk6HtKWpJUMG9rRHGgSQbhXmGkU",
  "key4": "8doMwJAYnPMAf23B3xxTHpSuSzmwGRLNyCjygur2p5L1KuqKtJT2gTqQMT8KipQevXr7BQ1wMXG3k3mZcfWE6J6",
  "key5": "BF99V21Jd7C47AcRPubXia7iMBJFCdBCnVPV4oTNaNuS1RSTgAGLPdNNaV7zWixdbVyaUZ67YxFVcKQZBhPEZa4",
  "key6": "3bBn5a5979FyDVJJxrDnx8CoDyf9GwkQ8bZTqWY5Du5uYot2fM4SHjgeMoEASkznfoqXQJgovfYgxR8pEe5p8uEn",
  "key7": "AbCLQzP8umA5T6GhVb5Ex6JvriQZcNhfTQCCeHiv2EiEQo9xTGv3Enq6HvbPZy3i6WPMr8kA7yYwoibe5qPcW9k",
  "key8": "2h7pxnfPQ7ZVpSceX85UtHZWDHTFCEPpQx9VvvCPhJPkBrHu75h6GYkDfPLE782uF5R3qeYFn9XHiXdpcWRZ9zYC",
  "key9": "3tpEhy6FuiDMirz4deM47u9i6UAoQusRJmA5PCgdSapFLKW8dj3FEhY2HQctGD6A7NEKzz4vHWoVtWbz8UWmz8Xb",
  "key10": "2Su7imnGghgkTkzH1ZTCJ1xr1D77Ezej54YfzoaVjw2shQcvNQpEFYkaU99HM53gDRsnX1oXSaV1bVWSCGctYL7e",
  "key11": "3N5cp8jRhS6zTJJ3YveDn4v4eagqLgmxcWnv69daVSZuDLeERGnMy6nTYEg61i6Ubpm2Ga2SurjoATdM7i2dPxAr",
  "key12": "5UnHREFaR3GbcMisRrfmYDT6WciNqizjzJJwP3YifsRh6aSceswf9otLAuqXRRcQjQwsikoSZg8FMgtT6AkVszZk",
  "key13": "5htHJbAFdESyxcpjua9hBpahgU3hUjWA15hrwMyqmNqcTPS3JvjFFMzjM8sJBxaYZuoy8NNcFiMBtDq4mKDnZ4Kx",
  "key14": "351nhk4vHkDazzvAciioPZnAazZfda7D3KKCBekbEjfjEuaVCKWkfAn68qQ6w8BiBQnQys8crAwmWVGPPSw3ANhH",
  "key15": "5kNE92zzKjFGBeMyTera5Jg2kxyoJkSbFVHAi5q4mXTM92mCk4V4c6qvY5oCPhNq1cZdkhYz7usPLNDBF6FQQnGH",
  "key16": "sxAmukZnY5RyzfwpUZiY15BXDMrgaWQUGzZTaWfavregzjdQs4TYtiPqnYuXE7SiUipPMGJ4Q8tcWyp7Zc41NLQ",
  "key17": "2TvdpHSe32P5mMJYZxk86D7cgxPgNJv7K2UcLsvuCKv9GYnnW6DwBdfBDRCigpXCPW3MqjZkNEtyZajEaci7BB8j",
  "key18": "5BBmaotAtu4Wi4XhLi3QuceXgtbQm1tvDb8G6MRRHtdXPigMBpfBLWvLoqGtqABFtkNX6KhSdSSFTJeuBYa8PQuF",
  "key19": "uC77PafeQGxamAn1jYuJoe5XD1GxPh6jXSTWH8Rgvq8dzZhAgUxnY4ELHvdLp8iTGmToqnsfBrb5eQxw54HnuDw",
  "key20": "4qFBWBYY7n5nvvTBm2gSmShREGBF59dUpmcRscbXa7mdb8MP8Gp3E5NK5ezDGPVQHHyWGfPuHXcPDtceNzCgkhKv",
  "key21": "mR4eW1pd95GfeksPb9bufsmgkKkCCt7ERYCqZHY3G15zvcwwBB6XgLak7XqYBpA9TqVECk26aMYD5Po2DSHTL3f",
  "key22": "LdKq4kuobY5ubSRZo8R7XVdFXcsLXUz84WSxbj3Kx1oGdB1RidRrAs8KJvvggCyoUL2cfUYPRc5qojJQX7iMdr2",
  "key23": "3zoAbM8sFjMLHBPar4LornEWxmAuywCPchaCZMpiokJqzbB2HytXBYKftpkXVPeYzbBdi9XqgM1yfXsx2SmMJTmY",
  "key24": "3eBsGadwHMfVRQniBDPxepz7FrC2wKYDcqW4FHHwJCgJ2aLW9gAV5QNVBkrWrRDSPBFKxiTnb77P8crnMHpCFmPc",
  "key25": "3euXd4ptFeQWtsqW8yBKcEwJkuHRpHJZbRD1xjFEyNdUU4S2Tn5rWHqS6GNs3cx7XKQDeXQsVZYzDV5vFsoZW9Fr",
  "key26": "4gbFYLBdsVnWkCvAmqvdNeFx34zNnfqN11M3H52u7HwacyQgToarkYd9oxM2GbeMoJiSf48ShYoj4bPtKb7WweYr",
  "key27": "5jESZ76aHYGBip2qhyJJEwc2Rn7WhxMfNYB6b8q2RNNbNas4CqjPaZYsiFZuQjTht13XToBPAHx5FLSeDpomtnSq",
  "key28": "5SvL82jTRGzDGbto4qb1rDr6wybZmYEk4ykbjcbZ7gvow56S3qYVfzs6nC8KMACSjec7TKseAgKfPBffemvmvHA7",
  "key29": "3Dw1HoTW2xfHmkqqaYQGYVbGXowaUseoBxCrMEiBMpu3egjg2Lv8WukJ8uhvroTxtEj9NnWwPpofaxyg1HjjSzWX",
  "key30": "4aaN6Xb4AVNsM8rCVLYUbouNoKNM9E9ygKHixJiv1PkiEYf3ExjBZgCgZ69r46sJqZMkdWWV2DfEvTK6Pjb2mUYe",
  "key31": "44NrSoQSxrUoUQw3Ftabarvg7MQgmUta2o2RN1mi3sMpuAWH8hpJYytUJKieLAb3UYTxxfNCkXMECJtmkoNyhCZF",
  "key32": "3bYdJeaNvFMixArUb924qpQ3WzqM33UL6Z9yy9SUJEtVR5rhWCTEYDYvqSNx11YjM4EEudFZ5AZbmebMvKcAZkub",
  "key33": "i3op5BgbM45amQRCrn1Nek28AYbM8KXM3Ch63FPqi7VukLabggba2HRQxyde6Sby3tXYUEDAJ14tGzPQSMM5wXP",
  "key34": "RYJBnFXycJC6ejaUPvRXraE4ni8HqkZUsE8QDLEszjHJT6ejuSGb8MwBAdcQSEnMXwopXpejmefqQ1G5nSzRmbN",
  "key35": "5r9z24kjwWxymC2ppgUVhPm6hWjnMPSM7Vu8JGkkZVFXw2aCHvq8LqMbV7XFKghSLMBQJYcALwMuM7CW9U7fnUju",
  "key36": "3BiBJzQ11fs6pdrwZeFAnDMiSJMenzntpjhf77pgdBXiiHAWwzyAKg6qUthrQd9r9fFeUXQojZJqh4ndxLPnvn1k",
  "key37": "KLGWtfN1YmEEhQJz94ocn8Xj2gLeARXPf73Xx7BG3KFdCNPsH6bUSjS8G5SGFWeQtzFrqBHiQvJFeTnCSDEkLTD",
  "key38": "4B2JGETDFCtuJhFK9TSm6Eu5PYAsC3fnGcf8R4umkUJfDLmRHRr81zFJkK1pzUzqB6XPBHfRGJaHjS4m8iCradWU",
  "key39": "5uZh8sBLtQ6dDVTFVWysRYKWPQdSPJmsyBaV1qLB1aemeVzFLogb5PypTPMHez62wJZaPg3vvDMj6BuHbhNvGBi1",
  "key40": "z6yuEmKXM1ph8YkSbQ7DxN4TYxTJjgfBYebMYLjSViqVNJ6nSgAVEt6mydtqsDcWLdKb4kQH3Mt74UoD6kAR8Uf",
  "key41": "2eMoe36QyDRuNrRW8e6qjYuWiko4QCspDw6TsvbSRZDwdVDsHE7TiKjvegeXcC8dA7JsJvswSxJanMpqVkEPpRYP",
  "key42": "YSgii7Vsi2Px6jVqCZSRNyfYHpWHgvMUxFnzjSaGZYDmpZBo3VYtW66v9tmVgxpgD7w9YmHY6Zwvaewh5Ms7D1R",
  "key43": "393ifkNwHdaUW25pBC19FdL2BKnHUn5rYPr5SF8cHS3SAkHXgujLNQC5XKWqi6TbgrKtbV37mvfzaoRFPYnBhs92",
  "key44": "3P5G478XgsbxGkc3s3wm1DBWHZDZi4AGjz7JEvKvqNzAJcVqbVpoZqPn8f97Vbp5HtFxQPCtiEFwZdRaiDA7dhBc",
  "key45": "4UYZ6cwDaayCe5nSheRouj7pj2HzinRGVfUwn8QyRvDmbRX5JJs6EkLSpmGfbmmU2aoZuRDP4jrm2dNEmFG1XerD",
  "key46": "3H17e3Cg6VNpwvePN7HDj1stYFcyyw1qxM71tRyhocGWUvEYm52mGrhcHYAmgrk2GBonnBtayJYrhg7pDHVjATdw"
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
