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
    "3VitAMNF4mp2DXYbY43WgYfg6uo6exXkP5AXoE7ZLCtcaFWbrUwFA6YHYByjF1oiydupZNBULRb4mBBmbui3bZHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63fkithpZfdpMzDWd2ss9sV2vGk6YJEcE3Cxv5TFizx44twiwhZjwnmEEdzbHWgMxV2jUcohsVTLcju8cmrtR4tt",
  "key1": "2JCL5X4XQudxamHwp2gEYE7DdHdZn51U1K3D867gXBMuxP8XsqmpupVz6CczS4Cpebv55ibpP9UDAvCXcV3kDWcy",
  "key2": "4FE4hNVc1xQa82K2SSTfVbRXrVuLkrqKQ67Pb1Vq7KiV3TLMVs6Y3GkT5hr3cZpEJ3HMrERwb7ZfeD4PzAgbciuR",
  "key3": "rHRV31qHB1wMFoDKAHNMysGNMXmf8z8XeshyFbqd2fTT4Hk7PYWG6fLG6LU23xQXob5hBTdywZB5QcgX6gMVd5L",
  "key4": "4PkdQ19EGcPFKmEvkv4G1Vh2WAhN8EE4TqDuicHA2kugiq6CVeJrAG9fXnjUoTf9MVAkzeZVTKNP9NrYxuPkw7F3",
  "key5": "269n63k9uj71Tn2exHSphftHSL8U37Q1hnJK7YQ6iEySRxp9KCtAuziRAznpvipRb84KZ4GKFReUYxMi2WtHSa3i",
  "key6": "jjF9LcSx5q1mgnDMRxcu4ioR1Nji9EFB3drr9kgLxZ5CtiYnJpyFnVCxXs7ZMHwHntRBGvsmBcyXyV2sLCCQwd1",
  "key7": "4yNdvMQHE1uzPtvNTN9U3oKrwxr1QvGHAshiYLxNnDUnctb6esAKoBgCWCnkvLEsApZpvnqakoikC76Ka3Kuzt4h",
  "key8": "3X2nWdhXCroaAAigW3xDzZ6sLDVaUSaUhK5LLPjCquNKAYi6sdL6sMBDffXyE3Vbm9uLyA8WaorHpsCC4VjDro61",
  "key9": "4NQtm1ZZpFU2ep8aAnBmLgBbNFuJbM3e5VnB2QqPTy4vSmBGoSAuaNfBcR4hYZUUD9eMZZG2myJdJthWW8UTnRu2",
  "key10": "212wY3Zfjgwids81mDH4NuSqsoUgWA3bF3tW7vmV43XDhAJsbpDhoaosFLS7YMzjFMjfJmMcwAv46trXenEpUGQR",
  "key11": "2Xd72An3eDqPDJBGb4AFLku9ZiCc9D9SMeWyFMYX5q5TLWXpin7VxmLVJ6FuVLHGUk7wL7xCSVbSgsAhd16HqQDp",
  "key12": "2iPM297kz5jDu8GYFskHod3LRuhTnYh2RYdBNA7Jq8ERVPDkocMyLr9n5aEMJKVGWfLPMezk7i6ouqrF1EdXUs6D",
  "key13": "iS1q23hgBuqhXMnABiURdkAuEXFSv9rtyYRj7G6FUEV3jktGQZt9ycrBmEAvbUwLDL9NFf4NKA1Vm8sLLYiuDNp",
  "key14": "3piCetSAZQiLXE5H2zds1PGJ3f6jeLnJ6beiTamvPTLmvi4GvV97UuN7dJCMx9f18Ffp1H9inLysy9w15K7TgpBN",
  "key15": "P2hJUjrxH5mU2eTeBS82VQpCRpTGf79fkBepM29pnUt1MvN4Dkef2QgCuuyb6nZnJkrFw31t5ExCfP1rPbX2WEd",
  "key16": "4UG6mhh6hkGfEZNtqhpb5BC1hR2HjPQpuVNGgxkkB1VAsJnWHzHWCcezZ4tEgJ5PXmXfufhcfXTBMaf4yt96WxLz",
  "key17": "5RJcqoF9cAKf5MJy4Fd2wehXsCN21v8PBTjf636xHW7bMV6BaNs73eEg3PgfcebFcGFtAf1nxTm2sQata97q3cTL",
  "key18": "4hVfqgkY9eyhUVvsFLVTBLUXbseLtzGvZtkioXq8yr2JJghr8rokhXkpnfDrHXUjPgeRPbT1wSu9GsX9w4hNrW4H",
  "key19": "4mqabK9Q7eHZ651JnQfb2c7XVMvSyQgNFjZKHMiuU68rJthBSrRsiqVB2aQp7x2xMXkJtgmFaRkZ88wwdRFBa4t2",
  "key20": "4u7A5o77H9ePniLXTqdbryVuoDVrWNhX6CMG6X5GTKeediT96oSSzuvnw1nZDNH6yA7z6rZTfPU3FjUhrnNpmLfF",
  "key21": "2bLGz5EEZmSE8eDtzGoq2Z6CdYza1bSp3Az263YpLqwoQ9E8rSX84KWMEnJ7T7eVxmYV8QDmUWaUPwXDXVquyG2u",
  "key22": "jVNd9xTXjgsVqFcEXBxSBNoRH9BaSQgvH32SRUBD7nWWoj9mKaM4DqJ5Xnz3ngEduSTM7a1CbCEbFDbugfuc7Bi",
  "key23": "8YgbGaxqTiPC959HJRk1an1yq6Z66Xrrs9kh69Z6eH8bjjo8NKQvsizPMucynJwH5tQ64ixs6CZRmiWcUBiocsp",
  "key24": "4ha81AsLPXXj1jty7ZAEo4GsnKdv747bpxTh6eFfjHBaVWwUUe8ivQaZMRuxyeEwJ8g7Vht8Jw8oAxiYLaQ9NxFM",
  "key25": "4SC7VQMXAm9bb4BcRy1h2p363CuKMoqhsAKGs7U9qNonPCjnW2CabLNeL8vumZgeTSUL3gjdgX4FSXnbTyKq4sva",
  "key26": "5pv4ch8Hmyas8U9s7CMtVfYxSd12JMijsb8vdExSePG8t5EYG7CQ6uNSumyxFmVPfFXxTw5z47sRQXNuC4vGJpZk",
  "key27": "5GbNqAoCaQdQE7b5HmqFaDM2Nhk1pTwF1vJeAh2UqN5qChLcmMzdg5hiVtH2ugnqWvwM3r2tMkehg75s4httPP6m",
  "key28": "48Cm1P6NhNGT3U3LEFcnYy3AH1ekgDUL3vA179cr4nANm4Y4trrA3QGeAC6mxzBVW28DN3WigPpndUJx3Vr7rtBp",
  "key29": "5F1tUJQuBLu2EqTAdAoBbbDULW6u5LjtBPHNd9wL5Ryo9Eeta6zwwYzKFWpwb35QCaxx6ZaAUQJ1hAogjHd5m6Ag",
  "key30": "639C4xpEjczGgW5upYi5Wq432pqydpCusnrmfrBcZdcpcRTbHRMiucBWGkGu4R8vbXy6LcyiA1F4g8HYCPRcAznv",
  "key31": "3qAAv1uN26XbLUV1yZ6mYU7ieMxt5MDfUb49xVxcCvs1jW4ELUy35zXKMRFu8kf7PN9dCQcQgtpgBJ54fdeoeMBR",
  "key32": "RrEfKqNRLhjjZfDgVs7ebmKKMXaMTEXT8HdczCJ9LM7uJz7KB6jxEg1ZPfNMWJ25ab79H6CGfWv7HiXGAKX7v5T",
  "key33": "44Wb6ssixJT8K3AfeducJSE2bjFXciLajGhxHJqJj5115XDjYVC4Bc5fnNRQJrCvS5gpjNWwthXi3MjjhPxeRPbL",
  "key34": "5GP5rmkAKU8HbEFuWSUY53hJ12NmKMYv7tesj2TydjaYQ35ptRDL2eZ742HrsY2A6sKDfrn5DyPveMEgtfpuUahN",
  "key35": "67kUGsYScU52YptqvUcEZBvVwGiVG6oqrehxVh3nCqBLr1zE8sVvEii9fH3ugBc9ydTou1w5NKNUnYwurjEaj2FV",
  "key36": "2rXw3xn28FYojy5RhgLp9EQuWG4wfxvkUxdLRA18gRtYEa7RA352mjDdfTX3isYgQkg8ibib2AEHUmZ5DL4DxxRt",
  "key37": "5rbuAgSLwg98MrJbGMfZuNjR9zqKFGbsMRSTKQmsDHU1a6EfRTqhjxPtvhp5GzVbviTb5N2XGzGy5XvxpgpZVVs9",
  "key38": "5DEBkJbXcZ5pxSj1ZAovKqcW1biAg9LK4en2PKaWnTCitoPBcFUDapff4FcSv3ek6zcnqeJjVWFwxS6nxzuRrprz",
  "key39": "4HJVsYWKtoiNZj9mZvoUT5GkN2sD3Uwff9nRjscgucA4AHMRF1oMzGFWDNsX27KmfqeEMmatKsxbCvKtjGAeRtLW",
  "key40": "2Z1B6a1eGLP4NRbUpvkm6GFQf6Pg6AYtnphDSMi1PWKgv7b5xCLGfv3W7ZkPMsmnjrkUXXV7F81HBZXNR9iAzr21",
  "key41": "5uMKjrfLa3bNV9zqTqmHhv5XLXXAm1tgPUxNeTfLwfbqDWW7RvYU3yxTmYPb8RBnBnsFCh4y9pHAuAtEfBvdUwMf",
  "key42": "3ftLykUUiEZz5TLeqN7QdVmdrvCNc6oUAvzn8cmyn5EZwYwKkY4oqtCVTQHspN9iSjUEpdxRDaMB9qMh1FqebLLP",
  "key43": "4iAXYvxh2YqJEEMXpP1KH74czmgpHddE5HfViRRDWrZTH3DSTw1Gp3VifRrJgpS1kkicQAikLzYcKjy7j1h2Z62m",
  "key44": "4t1t3nLh1qGEJaQA24uQsuGXKWDDNyVLqRd3A38qqBESKzR1U2usAVyqPME1Ru5iXBav6fRGsR7qpDUw7rsX74py"
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
