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
    "4cQ7hckPLwn9D8LZ2QieD7K8ZBsDsixqwQRW59nTkTgYpKKphL6d2KLRBmdRdUgjNTMWbLEqRsqKZxP5BQg2dhUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsNLUDYJoKHtYJVn19gPYR4JcRwrhe1vKuNakDbovtXssQJWYW783duMTyuFxxg6Cay9M8c6qPQtpGq4MR3BZPJ",
  "key1": "2t8h8hiRm8jEtC3uv84kne3bgCEkZsRX6aS2hATjSeR3DTpCoqeKrzgxExHzivbdpthVVsAKA82Qom1wj9ZK8jxY",
  "key2": "2uyWTU4t6ZLaCE8rtk5kZynRDQE9o7HYSVcMpXuLDFfKJdC2L7BqGmmXBvwumd9c5MWMQS88jgcQMeznVwLC6U98",
  "key3": "KEkGzQSFc29BT8V8vdBeJW33kL73usxiyUqGgHBcWUCUvRa1KKsmsRTX9v2vWn9dNvMPQ2JW99JZPXQ2h7HXfGD",
  "key4": "3uPKZbUsWEdTB5ULaqrERAMDpo3bNWAvZn6UgvQ3ErRspAY9Kyn7FBkk51qjPrQTrtQJjt5uvdrUvtM2Dad65FV8",
  "key5": "3XrEPL6djnGtpNYdnCY4LNQyv5mbFZJCu4FXAx1GrXm5YWUN9cwCDv72MFKwz5Ddstguar24xqdR8WPC6SkaFeQz",
  "key6": "2rS3wAeQEXC8w6MmjfpsCyhfRPXd3Mps2v2wrNmpBDa4iR25AKGq6WZfesTjtedCQJe2CiY9FkQE6mPM7TYeYYiK",
  "key7": "C3bFs9rEffw3dpjKVUsaNmRZaT3RPYmMTjvTpxDEZC2pfd9oeqEMVdeaotrdmiX95zChEeh9TxZrqcHF75Nm2bo",
  "key8": "4RzCNpYksXdDHQ1hFbotQeRacW6pwjdnphaErqcNnBcen6Vv2vUMiW9bxZN8VPgdmEVu9acijvgKQ1yjmipQXMuP",
  "key9": "2d93JvnX1fGbAp17k6KDC4B8y1GPi2rbrL93houBhYQbayR3L186Fw9sgoMmjfGaKg9SaQMHSegtAzA1EFm1c4Cd",
  "key10": "5BAdQCrMu1n8h1HMRrEoWoZnsfUanJnh4TV6PojD8cHcv2oST545Zw93o8nSK7pkTRPbcKumE6LZqLprG4LwgFac",
  "key11": "2dgvPNRqAC4vuAYGoeJcNP9CX15BE8uUViFmg84uKc7YnLuQXRd1oWeuK2E6XGLDYM4pdBH77SY9C4tNqY2gWrfF",
  "key12": "3dF29BXk3gbSmvgng9dYMJN6H7iR3xGSY1VC5KSP9E4RRZ55wbk1CcPmxbestvGUfA7XMhcbw7AzKUVjtpRaho6Y",
  "key13": "5LLbFC59d8DPb2v3mpqPkCCrVXiF5WULranUn2HDbKeLT3oSaQSAzEDQV1AjdfX8eugNg5nqKHYiJauzq5ecSfcV",
  "key14": "67ArsGiwoeSGqQtW2op1LkDm5vnL9vB7W3N6vYQT2bgdxhagM2t6U4ZusdjWsQ63HcGEtAd1vP2HDH8QRRVYLFMG",
  "key15": "5WDoeK13HRRVoviDE8kwfqg8n6wYX6wfYgy91dFU1kQECfMwJxVHbsTHcE5UjjSWDyEJds8hhcSkSEYRygMompFt",
  "key16": "5oey5eG87StSGn1xuKj1oQYqp4VgJEFNkJEJRbdt7najxC3PRjbnjxxpgcjyTLm8xuYu1N6KjrRSuokSr3QmH5BT",
  "key17": "4YmfTkZjB1fXTuASnxsK53M752BARctjrqjxQT5aqSMhdBsfTPNf4hDMY4CLiRHWNyk66k7uR6rBWtiNTFw39FFq",
  "key18": "2iUsTcecgaj9dphn3rvLNzbzUw9yxkptarVvjXmSTx6qkbGvsQAVyrk7gXh6Cn8i97Uh969B72LNQXYoPi3kwZ7a",
  "key19": "2rpvZDPaYbkVqdvNeogpSfkNZqfCspXFBiwh1aNo3tH4v81JadxvEhEzTohyWPpKsjDE8v3ZKAyo17f1yZp5zo8V",
  "key20": "3haPDj7umFPZyEZZ9YiNHuyBgb52dRJxiSFbHSbm8E5M1RDTYuLAttawQoaMciKLbHJxGib81uEudcQK1AUxFHen",
  "key21": "56nBthe9CcjXFDk6q6CCy1zoWBZTaCXMuf6fksTaJnCkLHgUSjv2NRjJtgVbcPhq5TSTiLH4dqeJ6t9mbMr3L7bs",
  "key22": "1dQPXE8k5FwY6BbeqoXiJ4w84AcFEGL4CFYLkyg3HpUpTvJwc1pdXtKDX1yyTU3pvDX3TLfn9hfqYtb6nxkRe9X",
  "key23": "dqTsY3X7KrRgabzLw7mcZjMK3Cy6enMRbPKmFfgGSxUciJbVT74m3Q6eDyLF7o9xciiSvSc9s8eELgGTYdbjRZw",
  "key24": "53qNrBakDScofjJsK9gRFjaDUVBc7MKJfwqkNhNTqpjC4ugKUJbPUf5cY7Q3ZjuBUgrXJm1mfwdCq36A4ZLCoFyG",
  "key25": "2uTo2Z9xmDipgnt7L7jPxhVKrGmeKNL36j173mrPu8B69GVNfDd3yY2hgdTmVBvPKdLMzcWvd9ZNaXdExKBkMo4z",
  "key26": "4dYXwSJ6kg5wQoHnTdUQ9d8jfXKLbBWFQtz76RrDYEr4KB6Fy5DtAnKL2zm6LpHMJXvqesRMWE3oD155e5wdr4xD",
  "key27": "5eQunArBKwQjhad8KYMCX8wRveq2CDCRBchZHRtiyA13t732bWc8GyUaiDencikmTB2HiVoTzeMMZdnAUX9C3jAY",
  "key28": "48vq83uAbUqyEeMznPaw7fsuEsFrbKBGnBwjAgPRUMvtA87iGBKmFeSomSa7HtJkKmmhbpU9ECfuoCC5i51NT9jZ",
  "key29": "4rcEzhLBPfKx3UXbMcB6dhwX8fZqGHjvyXGTrjumWMKnhP6rEE1YVCVeyJ8yrrjtNXXpc8FTsAHMkEeFA9VkuhbE",
  "key30": "4m6nxhtjeLjJBrKB2wS46jyWSjxRf3L7dbJLZ79dWD5q5cfgwytKQQqRXFTP3ADHSTnRrfmXpzQxnem7k4q3neRB",
  "key31": "3i8GacT3rM39XCJK3Ba9i6ic7xmd4QLJL2bvAT2roqn9kNrwtCupbUa1xrQWonwjAmJ97iC8q5jMZ4KUBoeHBELp",
  "key32": "wkHYvihVvJTfV9F4nnsGcBu5WcUCQVjsCcumx38XYztodB1piNu6rLn8gEAD1Tj9fLZeiWhQrCaMRt3BVR1SJm6",
  "key33": "5uYmkDwFg8NUkvi5FiRYSqj2S933PsAMpbYtxtJ7fwYokejCszE4kSQnt7k4i583HUkLuZTLcVnvJso3582rpVJP",
  "key34": "35iPxEUdvBx3zvvgnNqw6P2bmcbHTwt4PYWxNQo2WSxKdFtcck6UdQVaojDZnw6JxtFTNfL3S3bnYxVbK9fgsoan",
  "key35": "3zud1mg2NyKzPTFMQcV6rsoAkAoeXFGfW6fsrFtR6cFLBi51NxE591tzBtUMdXH6MvnZsUfEHqPKqFCtgHy5RWGc",
  "key36": "3p6VJU33FEjhsxpYnE98Lj3x1ZC6Ae9MoX8xbtpj1AkpSuoanMLkB7DNXnoTUn3TehUWCqMZjQ6UMRRQ4CWBUkDK",
  "key37": "4JM2jXQPcaggnPV4f3JidwKYvdnsSHGDnYFYzvmTfXrwnRhFV3AEY3ru6vWz3xrXKFpDj4GLiLdT6REVqAVRwpX3",
  "key38": "3dVzUkNV2n5XZUFhX4ebWLzetmJXFBYb3gbTTy5idNrRhmJWb1R1LU2fTDMxGqDSZjJSNXtLzVezw6u1YBjCg2TE",
  "key39": "7GkjqgtsxfwzebjdZgJBVC2xn9T31k9UnTCvQjS8hRSu2SUuBVWbv5yzPFxsUCz2LrJoUFQk7zjyQvAEpkuD4uS",
  "key40": "2fcFeBUauyuUZvNQgykod7oTvhpcYXZawQa4rTqvmyp2adu2pPFMzfCRPwb9Kh3f5oLjNRU27a6zoficcQje6NoK",
  "key41": "2t1AyFWPoj5JEVHFd7tx3ARM53MjS6qBUGLQw1rti9FTGisR6nc3E3ocAohJrjDFN4k1b8Zboog1aRpRC8EWCZ5G",
  "key42": "FquwdZjdsQcD63woRxUtCuBqAT8sMaBajmqxrkZV2wBFHkbZ4bEEKJs4RtGMXxEQj84JmyB3GDcR1F6kspph4DS",
  "key43": "3bJYZ3scYkR4P5m6fKdhLoR1P8Gv37R9vqwnFXzUbXwniyZVARdRUwAdEHPRVNAS4Hw3G7XfA5iFWbj6WQrztaGH",
  "key44": "4ZhmbhF4L3TnEXtUFqSSheJpm6Fy3PLN4YTXcdhuBu35hkJVVPJ2d7N7vxhwtGY8dYNQRCvt4PtZDWj4wPQD8Cm6",
  "key45": "5LTjyJrtzX1wfgico7QRCbF59D83WWPdHLbMrLJjFz6kKJTsU6gkDspPTM1tXMJi5aY7QZNPjtbdrgQKEVqhYwuR",
  "key46": "4gEa51cyHhNiDV36UWVQKjiyNeZ3xrgosrPLWW2g6363HpRFAYvZrEBFcEfrqi9UKFYQ6bvtpkeQ5TGL3BpmzMVo"
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
