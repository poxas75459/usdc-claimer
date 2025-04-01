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
    "HBy8xMHanyhQZAJeHHbsHw2ke5sp8X8WCzzEWe4G254MkNdqgMYPNUraEWCyq65rTZyBTLBta65t58wvGixLGL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZCvsorA3y71VDBogxvy3bpLYfbRA8ZcRZZo8geAwwLxekkutUAqao6MpkFpvF7zJPLZ3EGxtn7MTfse8ybJyQn",
  "key1": "3N3pFsE2XRtEfx5bHZhBLq4Cn8P3NqCKshW1N5TygxpPjFkC3aGHCHAki8AYi9Wsgvxuenpn6dPkqmN4JXJcDrxJ",
  "key2": "2omGfvntYdyTKFhgstPDr3jWfQwJp5Y1DpMN9XJFgbpmwDmGEgvZD23ccLA6DcuXYHtwMMYHpLRH6THtashCTG88",
  "key3": "BUiqz9gyw2kEyf3yQE3qYeQHujquQ7ttLuvPandcH7LMEukEwyRaniP5i84wj5BRjEVSd4uMj2pSPu4MFrS1pph",
  "key4": "4shdGk5m6z9Ce3veS9x2nzknx7eBQkEsy3EHAootr2pei4TG5V3suV3nMMgoeJgkkzaMi9BCUsGRcG57DbCB7eL2",
  "key5": "3grgJFHRRrNd8iSGYiMysj4Y4182dR1NXeeUKivK13qdLhV1HHjYarDZ7S2HSH4Yf596FV38CgTP7fMGmAmWfVa6",
  "key6": "52A6y9v5PPNuvdnuqk74PFtHswv71rCX2f6C88hxzVqfCQaXfpwNzmzWnkqp3gaZ5CHhycoZKBc8Uuv4AsxKrTWP",
  "key7": "xwEzbQFj22WNM6yzW6Hsi3nCvPs7amp4VZEXXZ8gqS7pyCxeyheNxcxXZ6h8GQnFkVCn9XBXTWGXrTwT7iau9u4",
  "key8": "5vzCevvaCgnwQpQKCPjGFf5tiCwEBLdRGtQoBT4a77ffmJUGJiAquY8nRAXiVsH2MvhfEM4S6xGEPK9eH2KrWGGk",
  "key9": "6417WcJFEFpryHZa4WuqJ3bECivcBC3g7XSH84ogL2BytZEYHpPdYZCdZuHNhwqi18A8XjCQspMSvfJ3xgcHHmm",
  "key10": "oegwuV2qppzm5GyrzH4r22ibx2uUFCMSAZMcziRMGbauy8Ku8mrbnm5inLyL7tiwfUZbb2hs6CxoJyK6MUSSzUV",
  "key11": "5Xfx8ddcxfKtqrgK4rkEDPorBwVu3g9thte3LgCZKB129Zy5aNVtt1EqwGGfGMzj1BoWfg2S3ghiCXSzYKzi2rEf",
  "key12": "51eauZNEskDbv1PPrm7XuuGbavAXc7Wb7wedxs1pAir8PYkrm2MERYnERxdE7hRpy6AMm7f3KpiNaPMRYjPjQAUs",
  "key13": "2mguvd1igwnUYHSBaTVEvrduTQRJvdYrBDPe8mkGrwXiUywufuzhDiPXHj2RxynePACHHiZAE2QccetC77tRR7SG",
  "key14": "4gsBzwmDiNwcQTnj9cH5fS2ubuvatBgWsphVW3vSd6z6RWucCC3y9d4FZjKN2paE5hXSvuAohZgD1tvFKQtyFssp",
  "key15": "2hyZ5vVXiPsCJ7rpZBdavq2da2kYjiQhBj3mdtuoeVzA3gM7o6eNiByfqLk6eXzyTQpnEhvbkYF42DnjcN6AQSVb",
  "key16": "5QuJ6qMx4Hi5JQuTqYT8ZTxvpUU1go2eJfea2XSen44ZoD1UztYU7crmNeSw6aY6PTBDMWS6YhdUrTf4GdnmQ4LR",
  "key17": "34CDeuZ3PLA5aBQnc5oPb4FPk5imqrPiaJjb23VrYaYcgqNtp2yCyo3ftgc4D4i2idvsMyLxWBQNi5U5b4R1oYaF",
  "key18": "32kv4iodNVqB6mePcRygiPnNj3CRVWGYFunEq6kx8iG3r2LcYh7zkuhBTELYbeLUaBAsmgG9Lb7DA3DMDaM1UqVY",
  "key19": "fSVZB47EvkHG4qR3YifnrP5Ms449KrSdpunzN7vNxpXsToSud7yM228hicn5cgwV37YoxkZTzzTc5Xk22cJ7Niv",
  "key20": "4cwpCLZj3Sgm2RxxrueQohJwEFovatdGDVhA6isbGPa5mGUSS9Z5pyzpYGHnArKqj5QnW8YXAqcVv6MtLwTic8hT",
  "key21": "cC3kT7rXcinVADmi8rkS1tmmxFH4RT36xZguAt5sxMSNuf9ggfNNE5kgcUwicBF2KscLtSebC6jw5qUa2pykMYv",
  "key22": "4RmzC85taUEu8SybVMZZzs3RywqSe9sDi9EEyyRuPATvxCfL3aY1xMG81uReFXiS7NxdSyF2BFHeEjhTQtjS7NCC",
  "key23": "EVvYxujpx35g2iZMPvwcnEdCAEBa7LZpFUERFLNU2yvXgQ7NjCMBAbTEY59fsfTVQrGNQu1kUAVjv6YoQaangE9",
  "key24": "4dHJTLXT9eYcwaMU2kkrUbNHRJqBzL8RxnoMxVQepNJf9G2uzm9v3FRLRM5TMXx728fYKa6vJaEmqqW9twX8Qtr7",
  "key25": "91SjgBaGRRNmPQDrrLfbzNj5aPfRDdo7yroVjJu1MpUhmAQq53GMCmDqakXmzsbnuPfMnFoU6c3mrVEWExqibYN",
  "key26": "wN5zGoeMDASy16EwMWfq3BdeVqmac15hP8z5w19Lp9buMNMJfvD6Tt7vTFWi3Crr4dRYaH85rNMhMCbUpP1kHWg",
  "key27": "26687DyH659ZJw6zdKedyHpCAycbgvwwErNnGzSVWZjp9onpGELpFzyj2ZYbcXpc78DfwcTJMQ9SrEqBmfvY7nH2",
  "key28": "5pgvjae7T5dnHqYiFDtJDBRuBHjLkFLSFs2mafz4f6vnMQry34oAXurXdDjXxz5AvZmm8WAD9tW2VmcVN4jbVCfe",
  "key29": "5fu3J3bjhZMRpafq4uhKDrte4Rgc811t8LSuU2pcgtLdvN92oo9H6VCLazhLLzYnHxvrnwBcfcQeKTWLwpjUtf2V",
  "key30": "47Ex4hzWck51VKfvXpAGjTetVXPTPQotWKwE62VEwUED5mVFi2W5zUHN1keMNa24iwjMwkw7kzczsxThMvG6FzRZ",
  "key31": "52EWQsMPWtpBbxwVtuPnXd7V3jKsAZW9NF1vCBjCJ3QLJM4HhCxxKkUnsAPpkktcfAcqXzgJbxNRiwFMMVte87Gm",
  "key32": "5j5QfLAhLPy3SgRLFkewomjUKkbvquYXoDTaBtMu6xNwDCof7MeC8pu6Q6R7yVZGwvpPkAvEbh8qy3mQm8yZ44sH",
  "key33": "hdUbu6cgcBM6UfxpFBPx4bKU6vbDYva1fRxwXb3ZbCwK2xh3Z4daa99ia7bXjL1KpsrhSHSon6LcYZUSTt1UdBE",
  "key34": "5vf7j84U7i7brB6YwrsE2Z6UkdJuTCfGVkRTjpNbAspyYj7BxiGNJ5YT6bmNCdwnoCwHrYr5Gb5NXDNfrkUrAntM",
  "key35": "2MvHs61EobCQFLqjm1Rahs3RYr5WnbWhzCsNftAryeAHana4VrCDKdXLxnxiV64a67enrewpbSUDaGdW42UFxfWs",
  "key36": "5DJxzQFCbprcdVbPiZm1j939i3ZiAuNpML1q4MXchFseZGhh27xcnP9nzeLQevVH8npaoDdUvD1RfZVwtV6ecrjL",
  "key37": "2rkZvaKW6FmjHghc5LMQ8Pg6eumvsg7XQxHbYqsFs2zrWYEDxJr1haefiAjrUF3CkDdbsCqusLNdemKojQA6CJoe",
  "key38": "CCcifGEkAdR4wYhZWsEbRrL9NwTufm36wBFxFtQvm5g9EKAwErrpyUxCQnSGSnFAAsar4F5DrMRgRP5ssZZ3z7Q",
  "key39": "MLN9nrrDdnYpdadQoaKRFwzNyqZvGUUUNpNakZZgtxmsqvyxiYQJZNXprnjyaLvYZSHcLTyvA2DZcBVGbEG7VAu",
  "key40": "3PauYHactMgXrhvjWh2ZmwYVZqSLCgAqGjDnSM8vAw8GVfUJAXQfL1U6K4oN4YMgPhWFmdJMx3WPzfCRHD89mSSZ",
  "key41": "5bhrN2fjjdS4kQnzgb3PA5QLrFfUrquAQbRyvwUXQyyeS4FXLdpqVfTNAxnLhDYoDx9R4QG96P8QiQc7QKcLY6hT",
  "key42": "59BDLMhhrZHXdm8iPN4otUN1jwh4tdM8dWUtZMYWDv7FQL9ySVxHAFWsnggnk6cPM7ZyQWavyAo44SqoDatTmCy2",
  "key43": "2y2iAFuLrq5veToxaokVBHB3DzC4CcM7dRjKTKtBrTbsEp9Syv4rvzpFnrCSNdWBg5KEAuDmUkPQUrAhi76ERw9P",
  "key44": "4VV8oiKE3o7uY6oQ3GdrVRyjhumPWTzQRGVFXwCzVphUeeaKS5wq7VGkf7mroQGLNhzokxbpacNGSTEUS4d9gZUq",
  "key45": "5TdbStxLhBN3wTcJodPTq5xZiTEZaavfQq8FyRP4MrVZi2aAAkXTKopjPwPtgwLWgfzFbYrmcKnh15KGMypSqTmD",
  "key46": "211jBDQow66Phk4RbXg8qEbrdKY39rfXQaPgNqiRqnWrhNbSj1zNujbXux2Zz7GhGbPnCNG2yz3X1mXAfFrBN2Pg"
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
