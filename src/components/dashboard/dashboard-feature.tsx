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
    "5zZMcU3xCQ2k6H98ukEVL4WwZ7AS81i2kuw7cGWuczuKYKMV53g1mG38JmCv8GxZEGE66E2oZJdK8EZ2FnsEeekt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ELpxJBHssWedYoKMEU8jhxuySANkVB2T7f8iXz49AaUdu5dk6KdGMPvZh6V7Svn2QgRotfLkbjW1d6wC8XtkooB",
  "key1": "h3RsNAWRSMDPGStRebcVQkVTpdWHaHX4H5GwN18ccHZxRZ2mXVevbtHySggcaEUKLCkJpBehwMvxRZ25abSrotu",
  "key2": "65ZvE8F97yCaqqf1Qm3pby3SfyLSVivpgbmkC7AZve9ctQPNqZoSpcj1omSC5rnZzfBXjtuUf8dc2EKsxYMdE2ba",
  "key3": "4uFR2YbU2ZaieVGbLuwpvSf4PxEQxzK3qou9PQ58wiPrmxc6swiV15mC9UksDDYmmPFY6qojYcLbq3ZDsyVajMpv",
  "key4": "2Pry4rf2WNYvXKHUV4FP97prwvi5Dw6kSy92Zo2MJGs8U7ej1vuxCtJYNGsC9P1juNy7oLNPdsNdUYy8naFgcEha",
  "key5": "4fZXhmAkgZP4FSqVM2phnuwWyYAF8uNvXD4tx23DRZLZdR5rFRfwR7W5LYNYWTDi6ToqCgyiG1EZUEAAQAkuWu5u",
  "key6": "2FuoDWTWupbE3ZxJSCWbNF8UiLPK9pXvNYx1uPGLEPviMcFtid38WGPvAvonFHbUuGM2JmgzyqMF5pYRjRFru4WZ",
  "key7": "28PmCnpPymk2wP9jqHUeJrzefooKvKxW1RJEyvS3LXjLhyS8YKtC4pXwPAWB61w2Y4yxwi5dLiS75hLkKTVLd5VP",
  "key8": "4ZZgp47DpHmJw9ZtK5HUBeuLLwcKUqxNX68ej5Ts2WkXNLXnesTjcVStosC67yp9MgWP7gKwFZJFSQQLNMVaNe8m",
  "key9": "4PpidFMrcxfXwjWPFeirsUM4oVSf1FASM4PiqBsjNFSDRwizuVSdWJZXZs2pbvoC6HsayWg4tP4GoxJuJmNtzjvL",
  "key10": "2xfpGxcAJM9pPb2N4U1q6KWuJQbpcZT76yeBVZLrRAxTJW69Fmj3WW7XAHBXyrWVNexYCCHNHxdcsewgnbW13vbg",
  "key11": "5speefkuV1s5qypfNb3BHQFwUTrhdXpL9jExpTN93yzzf2PE8cvVPkZFHLfPSpNgdSE5KVdhHRc1qvRQ1JBArQ76",
  "key12": "5YcFGDdDURfLEj7B5CsQSq7kZtgcDZcNuKCexBSTsG3TZXMXWK5ekb1L8peWdDeChDtpsvNK4S1XhLm3rk5yKwxq",
  "key13": "57P25Rq3N1P5a94Z2eL87t5SHMo3tNjVrWfRRmk78XuB7ysjVb8ZtzAGcnMnSLuMBQDDqRLP8WwhEJBhN3yfGNCA",
  "key14": "2nju9vkPV38QQE2wP2GAoe2da9qooU1acHCA3CXpbbjgUkessVxE6yG7Vdv2SQP6pYVHfJEmVdnV3jdF8a9Awbnb",
  "key15": "3kKT5DKsen2xV7mPgwgVMuedCofDHYbbwiBHajjDkcyServVoSpS5u5JXc1LjzCWJyC9taC87ApsgiAmLAm4BxhB",
  "key16": "TeMEDDctYYyCAbmxpgqNpTEaMjYff2HyvPZfcJAT1F4HxLHfjXXCnpxwSq7TVcujZnGvRwQffVjf41XSJnQk7oE",
  "key17": "2Q8ZyLEGDCZcxo5Jk4WUm6iyhvZCNEnMMc3p5GmPVmGbfvjgYbzYy6G3sXiJJKps4JMngEHPgojY6JeVJx4qhtgy",
  "key18": "4TcksasUWbycisZJEm8nM6YGayxkxPwCYMPDLsM5MsU9cKhHPSpbztAL1MDip8Gnoxe1pVSce2SDTUB4FbBXAdNK",
  "key19": "5nPSWhvDVGQVT7ji3qoVCp4gJD1gnGUHcAU4YAhCwyLafZv2ksAcKxCg8ETJPGz2c2yFGbshVjnPxR2S9owCgMft",
  "key20": "5qpAyGeP9QGeWgH6pdoCwaa24oMbGKXwgC4FR73kXKFdkx9YXyPQMfAdSKCS7YdzzNhX3oWXEj2h8sE43Z85JxD2",
  "key21": "2Gad1vxxLCmKdkEkGXmCwfnRvs3tR42kVHTVrxFb1Mt5wGjRhgYpXLfAehiPrt3Cqoj4xSQHWcwPyNizWFkucfn4",
  "key22": "54rfNuT8ccHEcGu7FTaBh4MEYLZhqn5GJMG4u5a2YjBvgPu9cMmX3GvDryhJzXbpLorJygNKTg16jLACeUJ4RhLp",
  "key23": "5uGzC8YBmrH7GZ2tfHX8kTvgVHQBtmgnDom4WwMcQCQf7ZhXbBB6hLSxxBrQo5BCkRTYuvH9JBqru1cpoF8CNuRS",
  "key24": "3G3xn3MNVtp2HfGgd1tEo1yKAvEoSiYfpxz71iVxerGBqAUktkMPTv6epQ2aKykttCoyy59w1AyqGBjcs1eexj8Y",
  "key25": "3TVQYZXGam3mrP2jPvVmCKxET9bYjCUNNHZTVateZx8Dxr5HH1z6x1qmNYrbg6Bf4K8MZjm6a3AQaAnwD6nEWwEK",
  "key26": "gpDHruuMYV1eR8Y3qPHims7vBEKXhn4ir1WxLVRhvVC2NbhwCUn2sxHR78ZDYMsJaBu4hUxb6uMPETVekVwksYC",
  "key27": "5hXNiXwAkDbuprCZyfxkXVFkR7Vw95H1PDRiDvT72rE2cEwVLbiJGNebghvHiKraB7K1M2b8zKgCfEXWakaZWB8R",
  "key28": "3rf8yja4gr7Vb4nSHkvRWP2pKCjEqfrVD93gkxcQZMTDwJWk4ENd7jcq869ceoQwQXQrZS6yGeU1Zwoqz16SAbWH",
  "key29": "3CeJfcZG3u6JQCLLhCqFCE5gK3BjVRF3L7V79jdHWKNb5Qq7A4WZZiGSCv5Ynpdqgwm2cW9hdqns5VB79qtFzSJq",
  "key30": "5jnfLr6iuqpQPk7BVZ45unCiVxBk8kcs63JLf1YHH6nc9Q6yzpZd5YNh4Ajug1acwDxbL9n9CZzqqfue6e1WPuXx",
  "key31": "2wvzQKd4G81Wi9PyHzEqpC3nJFCsxwKuZyCuEGEEVHXt9VdAYjsh8LvBv1tmRtFiiN2QCKrt23KCRYpnvZqQkQrG",
  "key32": "2NTfnMfFypzfbLaAThysjF8vvWjuRT1a2ibQqjUDD4sd2HcM7wJVtJffPT9AMrG19AvpM4ZRKHsEDtyBbQoiEKRr",
  "key33": "22zQVrn9ic3vLGRMmCAHTMMziJkkexG2oQYw3JCwxJGTA596iqZ8dDbZAJ99d37g3qQ3Erjbox8TydkE1og3y459",
  "key34": "5r6rvwkvBnbhKqACJW2cLLWt4oFamANxtQz6nD3JTziRAmKfroiXKtEMpfo42YkCXGykwnbkmPSKZspCaTABiF9e",
  "key35": "351CHSZ8CTmhAjGw9wbQHHZpBWNhDj5RakLTx2hmFxyJVLCev6XEDFbWVRxyP6VX6NPVsSJdNSQc312mXktXmQoe",
  "key36": "4fGifeAZgadLCJVKe6zLydxhmmeRR3EwxriCK5B12JnAAbJye9BCG5uKN8WCoLWyxtEgWT79iCk4HRyRai93JJ7Z",
  "key37": "5vY4h3YkgVXHSsFu31JBAu8qcEgtSbBZo5v93NAX2uAjXLLVhNE9PaRRpuvhN54oLYVWfmD4b3rG9qiJoahDrKLT",
  "key38": "5odvt7eEZaxinVAHQ1vcsc8cBa1iNX4i9uFSNvMUbZccd3XZtn9ZNQ9jQTtWejkcHvL6iczozcdEN2ev2a1KeUXg",
  "key39": "42pH1BJuYY5P1U6zSWennwb6Sag8UanGYGVvcLATdbJUC2AShWYFw4pQoahuorW2v8L1ZwzymPxcYn1PptUURhGJ",
  "key40": "fsnyFp6t7PJdbavCEpnLJHtQW38pczcj1iCCpf5QYaD3W3aBrJwKZPgP4AkAoJ5vNNZvRuFW14BT2swXQpa2isv",
  "key41": "2Cp2iyDay85PpcdV5HrRueGYEGG2Ru2URKhDvaQrLPs6tT1YQL93dbbtkrLm6Tw5dAnQ3tPxvHRq1S5abwSzNumQ",
  "key42": "3wLu5WqaUaXXE4Q2mRVFHk6rkeM5GihJh9QevDDr5egLSDyQLFhW3k19odnWPKFn5uAg9UdAq8UoLXqYTbfJD7jv"
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
