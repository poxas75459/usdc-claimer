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
    "1vejiXJbAKAQBEBK9Toc86AwLt24X8gsyMdtfi8oHirkU6u4HtdXUJeyRVzphjfZ5F9hMmvqK3fDnprjEb2dvBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xjpc1rsrvsyiRLairstLe6tmyrtKWhbwS82JRXeF6NxfWgpocdLxJGSoskiVcdKiLLRg26aMAHskrtheSKu6aWL",
  "key1": "62ucojgjg2PgHAQcDV87wWRmVoB1pWV2ZxJgipBL8J1UxRx24Z2ZMaxHJLbcbyN3PiHMEAaWx9hWpVneTxLDargm",
  "key2": "5WLG7NMK3mepAi4CM58746MaWtvL2b29CaAt9hdKZjFAGDnZJjkp251EUTEnXCUAC6dDZsLUKVij6UxjDqi1txDW",
  "key3": "61gG8TjoULV9qK3kn9xHsCGctFCCYgBxqmqDGx453vzb11dqVpCUoHi9ttZzeVzuRJhMGKRfdvhQjGuVUersgMRN",
  "key4": "4bcKSveKJD9s8MmBpkyVmoyNhgRiUBcr6yBM6pAqDbgUcLpgjLu86XX7WFS1Hdb7uz6Ypgg2NNxonk7yUNazxKaa",
  "key5": "5dbjNPoWJSoffLpXw4tx6QD9GDCGWitSm9GCjA1ktxSzT37xd88tdZoL6BqmARfnJpSyVqcG6gqrFxPx3YhJ5N9b",
  "key6": "fMj6Bj36gHYvDtEFA4595FQyjKmUbcGjYPfx5W788db8EKWbH9m8waJZAriCYjxJ6oWGHkmxiHGciBo796VZVVb",
  "key7": "4jTgoiCL1bktfkQKbfEvo4uBch8RJSKHQntwcpbuMhdQS7i3y73zwMyFLt25vZFUwFgmn8G5xZcegg5NokPoxhY3",
  "key8": "5tAEkW4esr9yhHEWbEdfASB6kqnCx9rfs8V3f4HMUrpBjXAGZznDx2Wa8vemKXZXrKpW6swPehdq82vGEHBL654A",
  "key9": "4VutUGDAeP5HzNqW9Gp6cQqHcjJNKwtR4DnPq3B17d9kzuRxocZ6BnAXiXjCqnx4hTxUDoFArLWYHTmrYGn6Cbzw",
  "key10": "4Cj74dTVULGoqCTYZVd3e3CijH7hmNLX4ng3JiTcyuNa5xdNj3rMsEDD6rJEHDG9v1jGz9RVczKQUtT7SQXka76p",
  "key11": "3mBCiNNMxyHHcB8XkWEpFUKZCHBD61pXsQP3UCoKXb9nvZXvAPLRHR6jcXsxMbW11RokuAps96PWNqrMBmrvUVxA",
  "key12": "tUcvikiroqCNCfw3UpkXaM9Hg1s5VB4CnXYGmdbPHbFDQZSQe9ZUkgQhF3LKcqyNq6AAGiZ4Y9HGPyiZXgQbTL5",
  "key13": "qAg8h5bbQRx12CkvfcMLrLAFKerJF6eWUZdUBjnKEWF3kc6gYDXyAsRHAcm1YdNTWonoSpACnerdNm1CFKGu37E",
  "key14": "3Usr7DEEes7PCSfnvB61ax8p8KN62zUJXVtPSG9DSAL6vbVjMX5XQtKrRvz1DZMZB6zLHENq2eUCgkNSua2nXGcR",
  "key15": "654rKAR6cnecr58TQGjoSvwwSgfrZsAyUaarPbEKMdmVFsGrm5ra9NUuummVDGPTBPpsHUx1UmEiCELc5QSPPwP5",
  "key16": "3ETEzxKRA5B5shTjwz9AVXqocDY3kiUxUgfEyob2sdruYHTX1bNx2RB8MNoDCmz2CUuCt7tNvzmQDkQnH6e6Fmb8",
  "key17": "5XQsBU3Luh394QAbSxje2LZ1hiz8bQWiWY1Y4ETCLZLnthfiu6MGCtEMvtASECKUzqbwkQx8mR3WJSzFixQCge1K",
  "key18": "4hN9SWn9tto5Z9wNZ1PDFsHxBpMKKGmyQDP9LNemzAfBmTsuwRiLRzdDqbCbFLFt2v4HRyhG5kGWNYgiJDuE9JGX",
  "key19": "5CXUrF2wT4VSzDYQ3w1Ptump16eb7AZMKYq8k53ewN464neZjCt9Uked8TRt6KhWYoCtvg5PKQsdXW1HiRhM8i54",
  "key20": "3iJhXycn2fbVL71HADMDbdy1wrBr1vZFH4KBGFCnQsEV9Ejvi4FmDpGZGsjokQQRukunHSdkNQRUKTN7bq2xjXQ2",
  "key21": "2mQzqjJn7ujPDyeKy1oEDqZaT18ySZ9ZGyNywxcB5gRyFWCjeANT4G4UmLKVfbZRBtQMZcKiSZTdwevqyT3Eo7Wi",
  "key22": "2etk6xZdHimtwX8aoEMa1542oVsvw4KkQbWH7QAwcGTfquMaNXTnoPhpkuEkA5UouZ4a65JGyda9NM4ZY6UPXwNt",
  "key23": "47Gk9bMSWZ9WoJmpiPagwyRpJRuU7fYWXHw3h8GjT8tBfvCtKwRGPMq8kdpPsnmTYgDQBMp7htqGMTdYvCm5wTvF",
  "key24": "24yBc25jmDE2UstW5R2PCEYfwmecxgP2AP8ADZdc69ifruUxnAA44Z2YxZn9RASQDKUb8B3Vob5DdLJfb6TGYfme",
  "key25": "2vY38YRYsSYgtJ8zf8uFD4MDgL96CJHhWxUH1ZV5Eiyhs1gdyMs7f3ScgQVu9j63mctpHVtQpsBSqRwZZV3iivRT",
  "key26": "2YVVcXPTyAHnNKEHHrcmgRSBT87QSGYk2EPBjZFDDBNTe4tFYiJDv5vcuL2v7tkimMW5Dny4t7Xq8i4VW3odSf4g",
  "key27": "2eEMkVHLEeyvYuaBFWBNfyqSt9WubQMGZaZoiMeFhwYPr8dSBCaZLW5eAVdKxTzW3zinL5r9VS2TQGeVCD2k5JQW",
  "key28": "AkJhUhdM2Lbzcs8s6HN9Nx3mMSqoPTRSRNpnG4dHmPPR7RYoQH6keWwhN8a2REpRafJa9Aeb2dQ24GwaAxhRjwm",
  "key29": "4MC8gQdxRh3X3yoUicadBDhyQTci5BKrPNkLiqFDyRTGKhBK8b6HVJ4YeWf9XCWsuRfp6HC2Tx1Cy1TBYjmrEDHW",
  "key30": "32HAUWyYyRaSxnUywh616kroac5fv8wFP1uf6tfa7MqCepa3UGXoyho6S3UJAsbJrcuYpkP8GPij2TVvBrqKH57d",
  "key31": "4CuBcWJpevfH2YcpRgP99BAVspLsWdiFBF8LDkPxt9YTe2MkAt5N2rcUFDrCTCVToKKdGGA2FMb3Eewx6A8JaVyE",
  "key32": "5thomtwHvnMx8ouKtGGNnj9H5jZtzRimaA3L157kRj1rzAgpiue7zcAB1H1BnzMghdVPvi1JU4RuSqq9uos4ojPq",
  "key33": "2nGmiWVRxR3ASacaqMhENiSqyZbytSqR7qZybGkaQjsSV1WRYQdTPcQprLBhKGzQW2M6BzbKnje1gtBhCL3WfXhe",
  "key34": "K6SaAEfEKdDk6oSrUDXfMKnxY28Zq9tiMR78AKgMFS72EDEAUzBZ2ySKLPoytyzevEKwPpSejkE8yobKnBDwaVo",
  "key35": "4FmatjLo9TSGHGMUnPfytmTH357DxAcdFpgdEZbg7JfukEnkLFWPhj3taAnBoHdwESexYxMVbuhpk74vfhvQc7Dh",
  "key36": "fo5YVy4P1PxujXfa3vLLAXmwVhRdwQp6Qh9dRVRfLgzX6wYmDBGDSjSLDR6L5NWXWuKdsumvT7qYyM4R46jhJcm",
  "key37": "2wb1htUpzvdZ7w7bUgpyqGp2FRRVNtCyHS6Go3FSidVvm9KTVTNuHXoGuLKUWqeoBqCEVjyUMcTGtXaDBfemCHnF",
  "key38": "5rgzdurCuJCEwDyygabb5icAHXFpq9vQeAt9E9UgpVbWkadEbcnhuWAagHtCKKBauDRX3zo9gaTPQt3mrBLZJU54",
  "key39": "2S58GKDXeFd8doeS8YLFoFzoSyYaGnEaEiUhxWPq3ZEJmcE6XPNkA6T5EPLQo4q1xWELUQdZF2QFQkWeVcQkNmQq",
  "key40": "37GbKFJZAoXxyaj1uj2pdkyWmrX3BHGmCH5YRrPrUKFfpQpbweqAAStyigyayiQphZtTV7jraYdJBPiNXAqEQbb6",
  "key41": "22AeYJRdsFUizRyfZRpYcXV2sh7z1vKuFn7pbpwNQRzjuMvJB65a8zaDJ54sQHQ8CaXmbhB5UDMPpSZsne76TGRW",
  "key42": "fgnQ8ZTPA5rbPKvSWbE4kh7V5kriu1bfMAt5N4S5PDf2NxBNawEchRXCk7ax4fxdRrzMVQEMWFWbCThJgesnLkY",
  "key43": "422hCVscjCt6bEXTGco2BJTiH6KXxmqTPqt7RardkooUV3ivV4yM3ATsgdJqWK1WxRSVpEZYs1MPWhCPrEpY65b8",
  "key44": "5eNdd1nCbT5kuA9KgDUex8VxuPHv8uVqC7LRD2CQ7S3pjXi51GGT7sANewMCvcRbrBbtLRxuqdGHn5PuQ3UYFp4m",
  "key45": "5MgwddLaPjSweQDsfSFZTA2WK4frjL7m5PM8w229xJTxydfK3GfSvS7g8yvwYqyWvvh3r7Np3FBAck1gufH6xCtp",
  "key46": "S4tytuLpQnqV87NeeR6XigYiAJCsyido5rCeyg6eJ6tkuaXHvY3QXPozZo14nz2wxzKVArLxBbyFkpiqVR9QnQN",
  "key47": "34Fu5wT8ymRtsJiNXhanyLDJH7z9QoEwndHsGaqjCFgxH8gmYgjWQNMBAwAQULR34qx8ACYvGGsN47h4hE59nnnY",
  "key48": "3WC1fH4baRE5Ev1NzY7LfuEUgPY7EzYmGRcZGgXyj5b4MqBPbkF6YGfSXcJxfZYdu94hHPyvd1mVijqQh8XXdXiv"
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
