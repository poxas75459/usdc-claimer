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
    "2dCkh4GX3AbzwYR9iAfvpqKsznjxUokxUxpowaEHXpD8r166VkafQB5vMbtqdQ13mf2hdBKWmc2QtNrrCTdfbsjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L155hpjwtN3ercV8NXYMAek6Nh5Co5SFV3mn4k8Do5jtyoPjKfTo6dNStWqb6PGd6rCLeYc86bjTD4zXUhPVgm4",
  "key1": "2tusAREDR84YEMXyoiCkDuRa4nwamMaZMRbBqBCdQ9C3FpabmtErUPwc6edN6x7eynKk7MiknKrCJMqdyvnYwWMf",
  "key2": "5TSJabfqukT4qT4i4JXW8A8VQ58xFCUqhxu64KFkPKwy1akpRkJ9HicsJ5sJbtoadXQvFJ7n99i1V2YGREB5MrHR",
  "key3": "3Ai4b3PrKZRGF2Z1No9Aixvd6qTN7mH3R3eoWRU3HFpbki1xPXhmQTywLt81SnvM1pKj1prZM5f3Bg3gHf17HsgC",
  "key4": "2Uqnv5GkeBsWcoKDteEEr1J9thLYgUhMvg5hWH5kQYjfa9M8Xs3qQzkVFFszCCkaybRVsEfp9oAodZw3C442u5J3",
  "key5": "22EejV8X92cunvVVKaJutwBdWZj68nMVZg6AHdDfSi86iWr521dCAtYPZLSYdXwzMgpKaMNbhVehZMNxqoCw7kW9",
  "key6": "4VjJgZDWXqcWXubU2k7NTs1LTTnCf8DZhgETxTH5vT5bq5uULfcvQQaAzd1KRcJu8iVRxwAAChXrEaE3tFgMUcEb",
  "key7": "dRjPDrg2otnGxwdaoQ3kiqJhN5ZbTgr3rCJjpWPjQUZLxvgHmXzKUv3rBbgS9Ymuz446Xc5ufbciYKq3hAVjAgy",
  "key8": "4g3vDeinsDWNiaVYWLb26astaoytGgeLoXg5Gnu3pHj38Vw3NiUzUiJXtsPaR3eeFj1P8VmAfRxWxxgYyYgUzZdE",
  "key9": "5VrwrYo1pAyR1DZGRNHjbkqh6kD2sUCXsviSzMSQxMQ9V4AxQbJiyDUYvxBY3GLfFpjj3UQjw25maG52yNqCMRNm",
  "key10": "2vSRzePPYppbvbJkg3Aph8msTnWaY5etDGVpLLFW93FS3zkpAnDoPiFoYis2UepZSe9ycc9xQ4RJA2WKyMjHBMMP",
  "key11": "5MHocfiNU6FPWZQqFyDWqPFdxmHWUg74oS4pnPTv6yWq73xESYMVCfbrA2GP8Juj8yoyYe5i1GFmqVXaYF4qNEYz",
  "key12": "41ECR3RCyiGVw8GAJhQNfVyNVhuu1yQahJhwXhuw8Ku6evBuhXKjLGHRN5FtmUVYgPqcZvgMyCY89kbqXDpFFhEz",
  "key13": "2eSuA7jMDhrJzRH4xAb8g6wmyNpFmEpepUSDsdzx7jaCW9rwJY7nrUkRYfaQRQFPJ3GsjEKoKkpyUjSUjB4aVxyp",
  "key14": "4oT8CseYtZqvhbXfrjWFx59RhLfTgtqqNK1iyq8KCcRUfcvEukMguvH8Fr4qHoBpnnjY7WFcChbi83stBnMYs45E",
  "key15": "67SeTgSFZRXrt4XGtimUGwEscEtNwjpJRHJ9y3ogaVKyCtJ5ZGCGiK6AjAetteiM1hmGnCy1Z2dT6Lnsp8mLafxN",
  "key16": "4z6cyr9Xj5ieAzLe11NKTbn1FeW13XCCV1yxUgFx8ALRypEYZoHvhMbb9DMwoBtAJFxnUnQ4AQMzt5UEar6pRSNr",
  "key17": "5UZnHPWkspiwntWZTWZ2a3MDwH3ibTZB6JvUtLLDX3VFg8hypKRtZycmeBCBKjSz22JWVULikkQVQnT2Ko4j8a39",
  "key18": "DTsDNgtAviHxziv1a6eah5qKRtbNXUC9xUcdYHEtZWZ9Dn5odbk3cUe44MbnGZ4mGsHXdfhekwL4DBgmnNize4o",
  "key19": "3xA8nm6AF1zV9soneGr15o8JhSjPfWcReDF16Fmz9fshkGKTBAqasNxd6bRCZ2bqimrGbKFopeQyB5ebv9phoKr1",
  "key20": "5PTY1rc6GpKrTNqLXKhqKSL9uqGrdsPYU6jBy2Xj6nSAcsvpCY1yqFmB7Z4bhrvK11DTbuNueybnmfZSHKKHPoWY",
  "key21": "3k1xR48A7Yg6bCQbpKfnWVZNa6mHGXyFnXHmp5sCAwTWbs6uCsTpXPuJnbPmgvMDtGNhoAskRcAPxrducirqvunm",
  "key22": "2qw43gqXT1Kt6jscyMsTpfSs2kHLGYCHovrLs65g6bJ1bNKv8aNLPZ8yfyGyGyY7LM5y8cADptvhvJGrJcjLxBwT",
  "key23": "4mM2wWzKky6jTzehCbfASk4BXmDMoB7N21a7y7H3PovAkMSUfCF6oo1U9KW7sYKE7KZb4sLQTD6if3N8GZGXKSRG",
  "key24": "3w2wtG7xqwtMGxzaqz9URwyKa4mqh2G9LUhGDu9omyPQA8fHKihWfChQ3KRzKLeu23tdAnb1xqkHNwYNfpxhTzSV",
  "key25": "4QSDNUTUdZGWrCUGWSZJRLtSZaoFGEVtSPHhNsdNQzJEvbChY6jLx71zmcACCrKk6o1anUFJ5DuZF4YEWgMtnhae",
  "key26": "5gzJhn16gbPTHZEvgT5CuR4p3pSUnPWAWwiPAmpjM75LKv2BwhjeY8tfMSLt8KeF3WAfr8zoPozcUtmmqHQrs5gT",
  "key27": "5y8b1JSAyVxNRNSMotshaTV5sVaoRqeMufpJTNoxMKNPQ7Rk2vx7GmqKMSfNqCUSdHAfH9PK9LWuzgUdeP5uPE3S",
  "key28": "4igGCU4keGrKd57JEht5bQQe4sXe5vDdLvX5bAqgGk2jthMdYuzHGW1FHsFdcTUTy8UsDv9c7TCsnynkVndSeynD",
  "key29": "5ScFfNFhZjEA8WYRBBrQNLseps8tyfz1ChibLaHwmPmbZx3MrfxvoX56A2scuWWf1jtAzdo8pLWhpeSZiT6PoZZD",
  "key30": "5GqrtdHrgr7b5bqTt3G9sGX4m7oT2LdkY9WqBjDPQAUgxstrVheJjnC2rJ6epzkJaWjdXhshG6LuMktroAYKCugg",
  "key31": "2LkKBtnap5tAG29td1vMDMAQSSrREmMtEHmLauJBLAg1QwvC4CfSw9dvsLcNygHY56MY1gaUrVRaV73dDr9ruSn9",
  "key32": "3RdxhqFBNcX1RExCJg9epvp7GgM77ottVPsGf344rApLBEoeTCfeV91YXWxDDHzLisjCEXx9eah8Qgh7D4E5GdbP",
  "key33": "4a3BM6YHEbXV4DUDuyVMPqdUp2iKmnN1MP7rDkGcNqrsjQdSL9SgqYXfHKzQv1oKTTvmcpYX6H8u9bWrPwF3pBsd",
  "key34": "39U4ocW7iXEY8CnZWNrsiaVqGncv4ddjPYzVXbwSXsYmvrh2kre3REKWHnDXt14DRaqmpbzhZvjUG3Ss5eMRGzmU",
  "key35": "4ZJKHr9AZd5rkeye18jMsN97ziibPRmnse8qhLLcaAwvdZxXiMbSHh25ZrmzqWamL1GM5HR8XFbrwAvfkom1pP65",
  "key36": "46WzgeFp3bM2YfHbYn8gqwmu9Q6KJhCHNz48NAfM9jmerzYrRt3Ltz9mdVJngDvD8iP4w178kV8e8fTdqBGizkGY",
  "key37": "NmTYs3r53omeFSqMpnFkMSJ6yy3o8RFhLpNNQbtfXDzCPsCSx2nAAbcPPWGKJCN8jSpStxEEWTdJGbwJyc7Dsnq",
  "key38": "3AqMchJmQ5bC1tWEGDiHqS3zmNcwHrtoNBSG4mgDZZkbaf5MSaVkez4b7uRjuke7dQVnxVYpjAHev29n4TqEBfDk"
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
