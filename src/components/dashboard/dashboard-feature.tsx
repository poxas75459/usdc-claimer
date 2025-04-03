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
    "25CY8GLR9k5T2e4fcMv7GQPPrVZ1s1TpsEuGnNFsxv57ZaxQfyzTq8wNZuunJdAocRaY5zYi7KKav7B41sRn6MUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ix5zJ8e8Hqh6oyD1SdpikrPPCMrPXqdf9i1FtzYyHFqEJGDKho5mB49h8ryVRAkXKkuXXDzkt1GojzwxwFPLcw",
  "key1": "2TgAXMzDFZU16Fix42bbuKPKpCMBnwiJgGs2BUy44ekDCxhKPLKGmXXawwZDepWAEqKcKnbSx7prKCsUPhMFf3bG",
  "key2": "4W88o8pjpvRqzeeNZpRWUrbKDzkexFnBPXY8zUPY1f6EjvDv3PrPgh7JRkyLVVT69sNqYPA5SAzqvEMvAPaPjXid",
  "key3": "5YvToxrJ4xiNrzSVVkLAxoHpgNS7ehjzzrFkW3ibqJJPtApQkRtCSJA4fyUSLzsVsZDhwaEoVwU8hbnp66xqikgM",
  "key4": "47gn7yc6J9NPiKqEdBPifJF4qMitixJnF3oethtzU4bp8Ndb634HqqwCeUTnW9UCJTpiBzQoEj7hSSGFvSQmxKkq",
  "key5": "5EfrH9sf6gbHV9KkaPBf6bpTnQn3pdxj7yTpER7U9vzxDjckJhg79hkajghWT6xB5aDukV9YJWuvt8HEz5W9VmZ4",
  "key6": "NBqxf2tYcBgZdkQTxxsDzGRgPf1jnmLVXuooLDwDqGUCY6ERDxGtnPyEMgaCByrFnWw6by7iFvuzwabSD24g16y",
  "key7": "2UbnfvPmUtRyD9v9VyQYs4Cnu6omo1ZmHYsVBTc2LQBkx5oHU9dxenP2JBMZ5uyzMZQedrdFupLHCh8u23J67Ab9",
  "key8": "5p9bCXi8Eav2AZEXw9qNPkxfnVXyR1uRY6bc12cSoDMzbKCv6zKTLJGbZg4fajvHHb58S8EUpRiiPBFtu5hobS17",
  "key9": "5ogKevs5foqLUH2nxERRuzki6RVUnmvLDuJk2kBJj9Wdw3aFmBh5YWXS7dnTGmzmkd7NETEvdkpSpB3K8nyDs4cW",
  "key10": "F9T7mvEx2tLLdPySNv24WKnahNrQmRRs9mDQssyAgJUismr3C1YwHsSDCgmDjaL6zdFKkqthpV9jxx8jaQSKWbH",
  "key11": "4T9Cu793yFcSdn8WgvxVmxU76FTbNRn8xDeVs9hqU73RedyxZActJnBAaTob3HPF9tAHoxD5oQVhTR4ZxTJqZQhK",
  "key12": "2NnVSPMT9X4GEhQv79zi1bPhPbHnbHiXEfF8LQeQjf8QxLZP2SpNstC8UzBM9ZCfFvzsky18gmST2Lgmcc3Sso1y",
  "key13": "3eGz5ci2vVrTummzfcrrXmyS3sbBz136tV5DzRw1hsThLmfb25ytYQm5FHQotTtAzPYkRHPwXjeQ5p2hy8ri21Hb",
  "key14": "2hNpUWjaUVbCVeQk5HuJxkgBoRUENgoLfwitJm8GUzfZtW4PYUuNJR3QruzAdQQk3LKnxEzNezs2WXg9PcjXpAeB",
  "key15": "2TqfgRUaCfN8CstBHksJaYXm5h1xRHcGJmMENNx3ZRTwq6eTQ47MyR6PgbPYUiKDqAdnpiUXJoApTjCtmecugkRx",
  "key16": "4LUicKwj68YawcxRM6fDkKyN2EJtXQ1nKn4EBXQSxnVy7NDno1TLKC2aNv5YnWbHqFX5HyoA77q4xsvrhpkaKUTt",
  "key17": "2ZrdFXZcq49WdCM87ite2NGMutiU8S8BbbLgAfvpp1FhWznLyKHRYQsjaE5vBC4fKCBGxNKMyXkUZ9Fu6LXkrB1L",
  "key18": "pd54Ho22CMqheJiPQT5X6uPiuUn7W3BvBDY6XDcJRAkudz71NBeKhigoBDuLNUC5z9s3f4cZ8ykfavVGoNms7XY",
  "key19": "66AgcZiPfEN49EGVo6H7dJfs6uFo129QBSWLV1rQ83sZRJu4cRWXw74MEvExCbEDMMiwKL4VYiPprufVy1h5zBSE",
  "key20": "2Rqy6kzir7ADh3PhkAFXfsPePjntP9VurqGs3mXW3wyLqEnW3DsYkW66aXxQyRkkyURHwA9zLx3WonHNprViDHpM",
  "key21": "3H9UsFPvNrs4cJoCF8r4Uu3KobJS3z44jWLuP3C4uCaWqc9kaXXr4jPshRt1op7nwrgkbs17S9kTD8f7WwsnR5fW",
  "key22": "Smk6XGN4Gh23N67mp63x9bF2FGPb4MmMsPFM3Xe38b75iyBGqsXaJFu9xxuyb7JjHk3jaju36LhC6T4ZmfwUAdb",
  "key23": "5Jhf8UEMHSTp25RHnKrErSLn4bJjBjhxmkz8FncSCKYrHJHNXCizQrLKgChYx16taw5oTNpCJEjDkF842P2KRrwq",
  "key24": "yQ6yus3La89VgS3FedhvqRDKFhtnBMjaPto6qbyeYGamfTkhKZGfUjkuyxnow3PNG5FYim2oSCSRY3sWoaAskcg",
  "key25": "UaE4FKJtX1D3UmJuT4qLW9fSnd8SG8GEQe39LRv5gbaust9AL66K9r2XvDjSHmW7EuJU62R2ZWndBnYtGDCzsnv",
  "key26": "otbttybUtS5LbrCSYNdyyCXEC2B7b6G7AhB1XbUhM8QXQGGr6i5JX3Rg4HiVipvoq6o7Z9mrNZN2v4mvkNhAmNP",
  "key27": "4SAp1UavrH9dxz1VDrdEipFw3961e9FAArkwJDJMxwK3bYENNeWtWKz8aqN43nvk9FgyoU9i7ETVfSWqpevWeP4L",
  "key28": "5pf7rNunbxqqjzN3jF7fKpqsHpgFQMhLJBoDYPjWiph9STRvBdpq7YN4VdVXaTqSfLwz8abcH9uLnC1HEp31Gxyf",
  "key29": "3bnuM7SUZcxny7bgVdjX8ZNVMYVsjFbN8xRZ6EysR91VWhJoeCf3kyqp5iH84pB6XyiBd7MDNHreyNUtVSrGQTUv",
  "key30": "32dsH1B8ycjfsWo28UEbdb2xsRaTYpaqJtpe1L3qsKFxqbu6LFBBHLfPLr9KoEXN6NQM3Wn4iYrb8eo7eEshfDr8",
  "key31": "4GxarAc2kcqAomJqDSCAVa9h3m8CbH7fJScJREkbWaNwaPt49oVG7dw8mc4DdwBDhCv5BnKNrpcBfSZtybMyB2ak",
  "key32": "5LGtHjYGbSh4oJNiiQXWAqP5ea4xWD8BtxAg5jntcfLbBs9HZYGS3HUUZwV8tN8GjtH9MNbRGojv7M8K8LDnE3Q8",
  "key33": "3uyJBTo42oV9J6FZAPLgkwkArSr6ur4iud3f82bmGhKKwzhYUFsDPF5GbKW761pohupVWyNiNY9JRKUj9abni3FX",
  "key34": "4GB5QMsRaMLUV1hzTMvHDbv1YTctynhAyyvw7VBVbegU6zRuheUHox6t27rBarHt189yLJH9EUe9wpsH5rzEW7sd",
  "key35": "2uNimjyuGRdPt84pSufnk5DrFKMYycfARXk7KQHvFe7RVx9L8g3dDJJBiqXjqWb5daJwQR85M7CL3v5CTLDXsHyc",
  "key36": "4j3seaZTrZSceqQTHBGBf6idq7XG5KmAdvCryAxJK97UiDCT8pVzhJBkBKQkemKPWwGNcpbrvS3wCDZHptqTT7LK",
  "key37": "2KyvELiKPw7HoGR9dDUoLvDhP81uRb1JNA2XGzZpevLnJft4BoW5pHE4VGYk7hZrPGaYz2D2v4wRqsqYeK97Qddw",
  "key38": "4y5VS5KmmXxpHcS9gkd6Jj7uhs7qegM86WJgdhuBw9pCroUVMGPU9Ur2qnbtdomUnNDkZ7jTBgiasJwks1Rbg9TN",
  "key39": "2KF1RxzjrHGvaiDJ7pA7yRyVDjYjVsycLfWWnooRp9oAZ6LnC9aKAKBY5CGxt6pWkKJZmRkA5GKc56MB4qCPE6kx",
  "key40": "5omry3gwxVQ37Bv2CHwimabF3hpoeLs6cxW1wmFMKi8bnbLtdsjci8Yc9AdRMdxdkL29WKiFcZfrW7fti7qU9k3E",
  "key41": "5JV7MzPqxDePUVn3WqoxU29JLaTqSfG2Kq3LryTitLFtvnomtZayo9eXc8N44zKp3Qn4W95ytPZvUgULoF81AuHi",
  "key42": "2Y85PdNc9zDYTeVBhcPghrC18iDs5Rw1u71WRxsqfWqYZ3wtt9kRkuQuxxdwCyNqJ321zMbTk7MDd4U8m9GKF2CM",
  "key43": "5EP74BGxfGa6PLLiyo5R62arcdD4PKxeaV4mqx9XNb6VYRnPvxTeNAqNJzy44dw1unqjvZS3b7kpAMiiU5M2Yo6w",
  "key44": "2MXPruwwECBGaQuuQzj2rXJLVZ6TbgGX8zQyR8iJjHQNe5YjHtTe7TNBFdw27z5j6eSJm7sR9Af6uT9i1j24B3L8",
  "key45": "3vapm9oAmCshmMCS58E8TZByPSZVcWUTMzK9wtpVhjTmPYDA4L5pbh9MXtLCqqBJTc3DkU3DrARQfg2mDRBDXre3",
  "key46": "3D9KBM8Acg1NrjKorH8wfH2gPUbXPyickGo7FZbyBWok5buQHZQPvLTp6QXV2db3WMg3AWaWfkhSvbGtJZ4ctNjx",
  "key47": "2NfCs1bmSWqR9WnPrWvjja1VFhoUU3kjikZrB8Umyt99HoQh3zsjjSV9jTuRthFWSwP4zspTufU4ziHyBcLdPpeS",
  "key48": "2aaEFhVcedWTTmxUDcFNJefyNqQFkBvpvLRhJkkdSPXnCDkjUSrNMG2imCnw3FuSrsfZfRrCBQi5Rhath5waXCEb"
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
