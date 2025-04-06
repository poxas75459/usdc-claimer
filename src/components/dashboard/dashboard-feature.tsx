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
    "2rzoQ2vqm5sDF1kHQe5AdpTRj5KCU7ibyDGQzckhnKtpdgwWgLHh7aYEMLhHumEZK9ztbhzkuiA5yCp42q4oE552"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6tmfmKtr9KPRWYmC1HiLW7wCRBERZnTXfsob6GQ1k6w4RsGBsfz45YgxXJDLWPsWLfN9nmGQyc1GRoqxEWFq1m",
  "key1": "4uQSe94Z9z5LeumxvMXvEGJVgJS3YbKZHLVSxkJEJ4y6Nu9jB4UyKDkLYbVQFVLsQEFKSHam64Aimg7ELNyu6hgP",
  "key2": "qYDpwmjKaCRArkvSoQAFZSET7QSZzpvzjE9Um8dw3uX5osNTNEuX3Lq95Ayp3gPZVnTpyvZDBFW5tD93bkb8LN9",
  "key3": "nvSabocxhb1ShtY4KYmwGMkJ5XE2Hg8Js5cnDXCYFHG6q9Jg335o7NuF5JbpFVbh6Fc8Q7nPxCnxs87DNT93QDf",
  "key4": "64qCnwi4k2R9XiMuAFjUiukJ6MMUb6rbFgQeFjjKtXiGzSWSbJc8b7FTNW5qvRczaCzmEnsPAKkYP4RuqHusn12u",
  "key5": "2Vjk1kNQxwd8KvXN7T3ph6gDEvtC6PRgEamcq7qJSyUK9ZJksWjMPn7Z5iCLVNq4Fod7pbxNVhJVHAyQ6cktg17K",
  "key6": "2WyZAAnwZnDH4BjsUbnf4EGMk1zk5jAUbmyJxq5UDN9gGubx4y9UwUyN9FtxBaUsTyf16pdC5cmwdmPFewn723DA",
  "key7": "3PEaMEWRMPQPwx49WcZLTNzXfWggQuvqx6xh5muiG1MTpXdkZsgyFJF1SqDWeKBcDVsUzt7hYZ1usu6c3bdD4L1H",
  "key8": "2iMF52peXktWQjbdhYkSJ794fjMf1M53Y6JZeaWAgFxdUaxU3Csm3VXDRVUZzm9zx43XKsu7dHxq4Kdi8W49fRy2",
  "key9": "5fDbggK4X5ju48BPggNYQLHCK4cFdgjdSRJAwrh8zUMCDsSoPMUSkpAM4bnwWT3xRse8y6nfLqJhM9MRe7aVarjG",
  "key10": "2czs1rt6oiWMf1PCRjjeHpJXjr6EoMkBHMu5piwomtPP1sW7qg6VUV317UfHvJM9GJ1LmxEMCucV5vn3Acy78RBg",
  "key11": "2gEgSzdkYMW5VauhCEqyrHR2HrQQBMKRYoJGEWUyfnPxqahXKPtUiv41gE357YPCnSjCUCKbVC8uSTBYZfikviSp",
  "key12": "5TGM8yKeiyqMQr7q1t5u2j4qACxp3S3anfjdRY5SUSmtGEwwQqTGeFbQRxxXex61iX6y8tJjvspWwRJ1UfECqSUE",
  "key13": "3UQdna4Jq373a4Men84KN9MxEXn62iqtNaBGgBU2jVmDT9MBsix7w8MV9HaYRTtfifwv2Fh2CgXgKK3ZC3xgzV8D",
  "key14": "5TuyPtVkUyF2uqepLQycrWx2FwbterqoWWC5aC9pu4wkzYbNzEzyWPHDoi9jBtTWgcngSmGEqpmfpMozXdbFxiPu",
  "key15": "uTxyQ5vc8oLEDBV8Fbv3vW2eQme3KNmSossgTwrE3Uh9exY4YcyHkfawqu3p4baftR3GFNff2eWVSGGV9YdjAbi",
  "key16": "2PjXBFipEBDmqfGhoNShhBhvv6iAaG9rSKwdPd5qzQENUREBq8iP8mfy5Rnw5Y2vdZXgRW88L7Jyy8MjmfMhoNS9",
  "key17": "36Y6Q6vCnR3eRmFQaZCowwitAGyJm66bDJFxCw84i2rXZY7p5gBh7mX3fsDQi6mGajApkD2GuY5FCzQmV1MeZyBR",
  "key18": "2KXimYF5STYUk1aPL25MVmXsCMdMMAL4F9uSyGyV7dQnaWEntQV8ey2y1n5YAVrRPmCGY4Ubbk5Zx2sexvGbNPKz",
  "key19": "Ce6fmFFoLiTWLigPvhJJVvT1d8ymVVucdC4f9q7X5Mm9DXg5ma2UZ4BnqpjmbSNSeY4ByT9U3wmXLMiVN6Dm5om",
  "key20": "H8sY4wfYYiw1c3Nk9xjipczoD9LcHMh9nHgU49UxgYJUUn4dXZ9UZGgL95nKa5S2ztLeRqzKyXFJwPNkk7wQ34e",
  "key21": "2wEiC1NAriSD7AjTLTp9qgs1ZkK1PSzREK9eczZYaQsGwFBZY28HMPNgSNYLS1wpdxUkaSVfGgvFEQVSDRdDVoSc",
  "key22": "3QS4i3q5vBMFT7SqZnQr4LhK4LXGD58MAYjSisinUPv5P5cvfzq6gb1UQgWHp1cFGnQfY3mGFTUfDBqcAwfe7j2c",
  "key23": "3bz1iPd5hgBwXYCcjGtbzw8jhgJyCNnxBaarVwmDhcGjXauWuXxLNzmPGWqkhAE8FMJUznpWijY9YHX5APLtYyUW",
  "key24": "6xvocywW4eSui8iWS5rT4dFVUpF3E69Dt3FTKAhXvcKxf4Z9PPZyEHzxfJpvXJMnkzpHajX1DYfSPsShxX3Wa1n",
  "key25": "MA7RAnPmvRDUdG8Vx9mSDsNcTgJ2jvaba3okk6kfHaQUkxJFjGTd9iFJW5YDn12qEXBU8SBDFmk4jF9VkKGthEy",
  "key26": "5EaKvNsGAzA41DRHtMVd6i72ttWkakRHBSxUsSePaYWL1zpQutZGQ5yNpvtTxLT275Ke9jtrgbDR2JSadH22R8Lj",
  "key27": "2TLp8T75TPg9youWNXbn2fAmfVidu4CYrzkweCmL6seWv2AUPqpCY1fUsS8MFV723obSr2Qo3oG4YTMasfnWHsR9",
  "key28": "5UMPfhHF5k435or6r9qWcwUCugCjaWHybFB7ZWLyT2xMfqMGTZQdLdnH9iXLEj6wTQ1ZyDw1FRvs8YC71gjGVdYP",
  "key29": "3mz3gcKptnsykwVVNaaBjXqv6gHNUrv8PZTwHC3dCz9wfogxqQivBbsVA267iGxE3KEaErn8Ce24HcnvN2cwJYN5",
  "key30": "4YvWM32C1ZUuRc4XM2ec6xuA4bxQKXpVhtnyw9fkryxgaMejmfe1PpWb6Lys6EVb541HWAC6jtGyMFAyN8cAwqwM",
  "key31": "hq2HsmqJLKk9BokWLQBhkfqqFtfixywH79JQE4r6FPxUvJPdyXTwCkVqDh3eSxzFMPCHGnmZJJtdXY4MjR3UKe8",
  "key32": "2mxUyvPDPJmGVC3RoSm7dHunNzzxVEx3AZuMz9j59b7Xw3ch3jM8VQb68pf2eUhGCuDvnoG1VJPwb1C1qPL3R8LU",
  "key33": "5NHgrapkS7JrPGBqnSehYkWGteh9vGmubwHtb534mE7EsLBwtqzcejKSWVF4QCFDgkpwi8GbLTS6FvNm1bksRtgc",
  "key34": "2tGE2RKEAqEXN1SCCE3janeJwQK2gepfPGp6svCD4pUDJyrMBM8GGQ5FumvxVm1bpMehkbaf9xZggFAK394ZM3d9",
  "key35": "2awwf5JQswVCFbWPjzQz6ZpMBLBnmo6Tr3dRDSLpHuxXq7K4TDTKJNwygx4s9wdckoQicZiY1ZMiSrZ6j5u7sQLa",
  "key36": "23AabRR4VChhXAMoG7Pf84XG7pAFPjg81CkB3xz1zMVVN29x87KF34gsySY1ceU9mhtwP1xmRpZqF7HHcM9xnS1E",
  "key37": "4jLaTrpvejjB23sfL5sRi5s8Zs7BN1QPXVG8q2UGNa1bPyRJD1R2PN4EPnFEfB6UhGYQdaF98E4pPoMqjkHGZF98",
  "key38": "5kLc97fonUYHWY2EgvBTgJa3gBKq8L8cwJ9ZGUvSN63LFkU2vwXa73NCB2xc3yoaTe8PzoDfHTAdzAPiTzJpDJDa",
  "key39": "xbTv9mVGVAzJ3mGyAGvSVX52J7aMReCZf7NsbVeNaxoiBLcJwfwg2rit59yufUY9GCcTNUx5aLxw4xXiXMbtgFW",
  "key40": "4eT22PhuCbgU9TEsaaMRhUV7v1tW9gh6trFLkYqCTpQKXBDohhWJnK9QeqAeTKQArNb7koJU8BRTg8U1MiUm8Czn",
  "key41": "2eCFDTBps8Sz2rvPW2veCtU6RzCDuGVJmwFtZNtNofc3CpX1fuuP5i7X9mpW4NvJrtERVEnBpsiSE6nS2iGkKaV8",
  "key42": "aoFKrGLsdSjAJM9aBTF33z6cPN31VSNpinfRuSuX9CVpjsZcc4jEQMB9fy6ZN4cdKvGoA6zcEUyFQ7xCqXbujjk",
  "key43": "5hnR7BDkPr3mzraRwMCWAjneLB5wStKwd1AhjdnQAjdzFM8ALtxzLj64Cn982yDeE6jzZFAKU9qRgqrtTGq4bA8Z",
  "key44": "DK8gXzoU8p3yxKgkTWGUtmYQn98YdvG4unyumvRv1YRktBeJuDYDS2tC4TRpt2wLvfktNpBnFhKVcGYHJDgBbPv",
  "key45": "rNSLwdjnTsJkQ8JWejzPkCDjjQNL4qVci2n5ZrcNFehWDr6nrsZJXkHUv3ByksEnDNyX9H28eyVUGSbGZzCsWYK",
  "key46": "5GfprFaGQHcjvmatRhJhgEvXqhEWGWRAUPVyoh9q9fvp6AL3MRpejcUD5Ug9LY8C8216JcoFy4wpe9gXut3fM6Q3",
  "key47": "5fFoMCGVfED9eCN3Di5oJaBtTeichPc3fsHEpeCPR9bQ35CLXTK5f5LQ7Gx7kRHgztvidVMxLMFFtTPHXPTGSqvP",
  "key48": "62jgt5Y6cM7HFaFzxqTwf3ipfBozJJmcDNvn5xKNDS1yw9vHJdW9d5jkF7GALKSjTEz4uJyrqxrbi5btmwpqL8ha"
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
