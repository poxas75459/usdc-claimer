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
    "4u8MCm4jcbAazehC92nLoE7E8vpJkXpwS7dXEH3W5foSDSdhTwj8cwcc38gAdvDMjKHpHBbvMGmXqYEA7P9iZ5gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rWCKYcMyTuzjhNCq4MpXjLQEmmUahKpztxAQKJjLHurzH2VdonBJSEJGhQ8iBc1dkUDjBq86DDwzNVQu8haiAJC",
  "key1": "4p7SHEzc7K59zGXmy5b1MberqQbtP64x3zkQdjspAF1dfQdKaSTYM5M5haa9LawFPfj4nBLJjDZMsKRqhqHNzdhq",
  "key2": "5tEHCagum8njdGizZPHU9SWKqvSUrgEdMAVM5JnApcpv94ghQi2tfAS2Nw1VkTiY6odbKsSgtXCXVWuJziavEgEX",
  "key3": "4dWSq3F1zAjzigjcj5uZJML1KPh1Avr49SbNW7GVTSSoEkRnskUbbPrA1EpuD7Geg4F2GXW8EZcQqFxkszZ5v7Ho",
  "key4": "36ziELpjbi5FAp7c4mutTutR1deoMHtaJ6ofDZsCt5htWBfZA2Eo8ox23ctdvs7yE1Wir2DNEjn5Q9Kx1dJGDpxc",
  "key5": "hhnYTrYbwDvZ3qJXzJN4Hiz8RmYJC8HswDDvrtqqiig1E82XvXMi4u4JtbrH5NaVW3J8YGBX8YrZLEi7bnC56FF",
  "key6": "fAM8gzfNyVTqjcaAq1XT6ze5itPYEvxCLK8rSECAKHgrP159JXskEtfeCp9zn45Jpr2sQmKJMUxiMk972zSs1nQ",
  "key7": "48e6NzTKxC4Pq6UFA34GZCujS9a9Wpmbzb1bNWEYqVDV7VCppkCLEmUTcYQv5v1CH1HCMB8WdeVWHio8D2ZQcbeB",
  "key8": "kiK49FWNprUqmgE39NRg1tLziEb4fghimabRyta1dRBXYnaxZxrM9ezXkLTr44aqS7ruTecnHFR9p4JySvcrwtK",
  "key9": "2JhqXhrMC135WGH4DWmCefbmuSnujAkVeBapsDyh4CFemeZ1qsBgGnU8HbPgtcHkjLCSpGacfc982cU9AWHKU6Df",
  "key10": "9wkBBv1h9iqnUyHRjGa7nXJcrzxYVKgFP5TtJfvBKMWdowFrhAbh6r3DcoySEJ21Q6GFUN7mn2U3bw4CMNzvcNi",
  "key11": "5Q6heuZHxfn6F1D8EssTEa4aPyTqnFJPnHCez2mvuVrChCSFdZBMRqkt5JUtXuyyc2Mgy3s9Ny7ptLcjZkf97TUK",
  "key12": "2Mv9HSdCxCRYtKBJrY1zhvab6aY8Yu9YmypDjtr82NCmwU8ECMAx6LJAE6VvgtQa2qZEkUFWnjSegA4u6Quyo5Af",
  "key13": "3ed3xXux9CvMNgGgUxhCgyXsDPJ49FoutAjUoagtLWNh17hzfaVShttfzNnK917CNbVFGpEzrp4YZDhUsL2nPvmW",
  "key14": "3tw9pvBMdU4RVFRg6GwsJ1ggCKtCovNkHnt6JvTBAfdbn4bmAZUXokwA4y5TyHtfg76ovX4ibMVvdeWaHigWkvTc",
  "key15": "62DgGV8PW5psdTtThUweXWhT39Q9A3SaWzP4AHQtELA4BcA5ETk6suH2ELnoK2Dt9PKVp7Ub4WeU4bjoAuLNUdmQ",
  "key16": "65ftAofCs6jS7XowffFYieC4vMCgaJc7pR4siDRHHgyu8AesjZ3WMxzyoEEC21WuFYdrhGh5U4PyhxJT7QUSNot6",
  "key17": "65LK3Kub22ujaWBqw7EgFH1zspfJ3v535rVK6vgFH5byzM9piNzuq9y29VzzDg6NBM4jdwAywBrbecw3aqx4VHq",
  "key18": "5pcsPDPgwnhVqvjrhHsuvgg89K1fNXLB4oXPa2GDzBFPkXW8aaTJf8zaxqKJdyFXigNCmLZcbGgKsKeMtxcWviqx",
  "key19": "5WeGWnLu893dQNXNeDKb5QuoukDFLYdfB4c4wBSXagNf4NFKMG98LQPSCNBvsjPU88jyCz8LyRZKWz8QnEoRBhXJ",
  "key20": "2yaLPSesZtueQ3oSiowegui8VCx1McJGijEH7wXZhztG9cCVewJ59zrgbn3AQqp5sCPQgn9x6ypFdZysDENGimk3",
  "key21": "4wgpCwzKhgnnXD7rabea6W9y7of5rx81DUGzVZGmQTZSxhdH6RkiJGKexxAcoAjpoJeC5RfvBcwL6JtFLBFknCjU",
  "key22": "2Fg7uGPMTwk48VYGfZdVW8oZmHi57d9emtZVtzodu6RF1wGDdCPgVTa8VjNikzwisebKvUh8fDT37ushJgyGmpGV",
  "key23": "4Skdb1kgPKyey3KFJkJFaLrZwz4o5Ma4UU1mzqeHix86YKuw7ATxwXigJbJGmzZHDxAUCw1VD7M5iP9Eas4MJEJG",
  "key24": "25yAfPfoZob8hAZ9PAkXnbpMASKgAxABbbCnnbvdPK5yq5vU1SeVLPkGMDS4EvequomEjdWG98FPUej434FWJf88",
  "key25": "2gizivW9BXD4Ma7wTRyHjGLQqeK2XuDPycQJCbiWgwLxdhjTrVrBuUoBQbDn73D9rqD759HJ5u4fpifJWh2u6n1y",
  "key26": "382tSJHhqiWeR1gNJr8mCCEQyeDJ6j171uAbCd84uHn6294LuVqrPWVRVNrfgWJbz89q55ZpfTSioM8idXG6Gm4t",
  "key27": "3ABgzEXx3DVa6CZK7oL8QGKxm9A7JSXq4BBsRSsJJDm33nAcWListvah2jJ64f7RHkkE1wkAPiRdDFn4E5yYuWPg",
  "key28": "3cySUbbJTvvYhj9qKsGV1BrfSx7HzXXDKjs97JjkBKvYoY6PHUaEYDaXnQTxg6Bm64FUT7H1zpgnkrB9o5yJwRm1",
  "key29": "4LARyLRaRpHjZm64LfWXnQ8WhTixwRTgGwvbY3D3Yr8fzMvH6BsEJEYoHXTsPKxqXLL5ic1saun2HMQQvtujPsKo",
  "key30": "5gui5DewrBLnvhCrdtniV4BsjVUuJbzEyJV2jMZYdw5V1dXoG46QzASvRJLs246JXUdsXVN8uvu2MyUzz3mcmL47",
  "key31": "2YEhoFrjt9koCLhQfoQcZndwBLNHGZbKzHTGeZfb3dDCxWJzLmtpUaFcazAvSKTrYEYe1VYzvYhzs18Lcr3AsfbW",
  "key32": "57dNeF6ymyziQaoMkByNYfc9EKSGgFTjoBwAM3rC3XpWLWwDVrhXbubq1U43h4X6SQior3DCigujw94iKoBK7xKH",
  "key33": "2DC61ZB4KnMXFogiSYeB4zw46XoGa8Dh3Ux35juGNEcjG5BQn13UM8mCfmV8BxQ1UWb8JSsvxWFJEpuYmmPXAamq",
  "key34": "3ygcinuwhuhRUWYcbcEkRzdzVAMvRwECgy533tes33Ds9ixiSViTVEfJQtmGiQHeZdm65PHh8YaMmXUPs2GMnmG",
  "key35": "4cugBMuGtqPvxT1CVCJf5atUadPdPBK9ygxdw2sr7ADGYLN6yESjuS5AbHScPf7LNmnVXmHX9MFEnw3mwJ2Lcu5E",
  "key36": "3G7LQKzZvu7EtrP6j5REjM866mfEa5zXMrrSf5wp5zim6sLu6ymDKRz9eoFFMyt6AGYBticBigxCFmsnZ8HYxzyh",
  "key37": "5ARBkMLsYqebCkLRAa2ohyLPzz4WzkCxJBebJLrFFnD7KsohTJZc8X2hUe6n7hFz21wHX81eyxrR1Vh4Qu7Uu5Hj",
  "key38": "4shk6M8V1deEGZPQTxCUSPqqTcJftD4GTP8NoQUT8mfYSng5q5dHhPxKM7asDC9BcTDhAUF9xi3n47dvsKhX5rpa",
  "key39": "xh18GuthpnCcUGS4azU56f2tHut51tqQP7WVvFCvHpSApkbNapnj1zQ9jg8c9R2keod9Syyaeuv8ztV2zXMYzDS",
  "key40": "4phi5t1ppgz5X5G5eCuedQKJpFPSQwgoFUnh23zE7xo49LsXTjmbeVy3fUoW984gCneWDeLgWbDHHiteo9z8P1Wr",
  "key41": "4f9sm3acfNm9SCfcBihhgjbeMqgCLgsuYtCjGbTkTxMxd5VvGjZSvpi5WKKUXs3nr5D3JPKWUeknrUBMBwKf9BpQ",
  "key42": "4npwq1MDFFuHoQyxatxjUyMrpSvEzpCpkKVdHHcBVC9swNc7UDFkjBzqyd1WDnUE8qXqPoeUyswhd2RhPKit9yJg",
  "key43": "4MJLdPbcivEEFJ3N3HkGqikqGWpR2kPpLA11zNJ6kvo8nwpK7c1fv1snpg8FKLekRPPc1aEV6Xo6F3RPySDn3nYs",
  "key44": "2uN3zyuLGvh5khM46ZDxSqv4GtTZW2pa5RTGnVigaXo5ASFtSDr2aRVvRjJHAagh9o7zwuwvdp1gHEFnU53zmZ8m",
  "key45": "nhzJDb33AGymNmvqxDMfJMok6KRJVqnKvnFMmf2VaYvUcGMW8jDrSi4G2caaj4oAPAJEQrMvWmhdf221BDTJNx2",
  "key46": "44mb5zK6Ep4UzLXNeZPEUwYrqfite7oETioG5hXh9FKbTxDCUm9RPwtqdGAteWhp5Q9gBT3yewQZYnqJCbngyxjA"
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
