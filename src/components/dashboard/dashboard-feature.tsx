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
    "5dGj9fyB2gL9MoGBQnEqQgHcpSVg5XoVuxE7sMzb9vEhUNcPEsP6nLuehoNWccgsdB8QM3FHanDV9RrXmS3T4bFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FiGj6ddUbtiQxdCviJZzeWKYJbLTSJG3CwJQL4M1irPrLX9da5YViVM7FKiPbaxdTpTmd4oV7mmxY9C5Fi6yH9f",
  "key1": "RKp6VYcecNNgxs7SgR74Xx51HiLu1TYhanqLHP6knsMJzJrjqhWuhtTuq1xQBfCCWaDUdmdQWCoopaXB3rKiWDe",
  "key2": "2iHNXwd9pEM1GBzLHsa4XNMfU21ovyKfkDy5yjE4n6TErvxRGgctqxRRG922Yzmmf89zFMJH7JCKQW2sLNsmegM6",
  "key3": "55JTwpatGPsr9r4eCG5iVJyJUsemgoXFQRyqi1iZBgrmHo8anj1KUg55FCEArY5dRf8nsU4cMU36BWd5XgyFMCNj",
  "key4": "4C1jrga1x4p81EWcYerpkkXJLxC5mMrKVdwSejJR4YPBegkNCMREUmWywtB3r7C9ZK4MXoKrgYo4zp25NFAehzYP",
  "key5": "4mmvPJab2WCXf3Hv2VGCcFoWcAHbTuw2m8skyCxasg2ZwxSSZ5n6L4bHwmMxpFWgyhBcyuapXDheSG1khfD2e1bU",
  "key6": "3ur64JNyMTJ4CEvag2RJhzaLKfxz9PDHGKSdfjwAzRJe5SeHRrzWvzhgD5UR9E74djmYYdGvMYXhMaXvYzGYqAq4",
  "key7": "ofEHC9RrSLBkcwiE3ACu3ESyeoEvd48nfv258xnpQbwg8SBn1gL2UEA5SNhZH937x2pvEwFXZnHSqHXEC4u2m4b",
  "key8": "3iJd4ya31bkXyLszYneruVcejFuA1FgQHVuEa35bjc6rnrGuQDf8wXHrKCcbLNiwu8orD8Mjj8FVT5bYMUE9m4uu",
  "key9": "3P4K1eNeUWgoTuDf395Wtpbb2Bg4sH9KYDobZHLmogrT1vnznLiqNvp9b3NV8Km4KyyoW6qkiCHeim2bbtEnFSXM",
  "key10": "5eSx58gAHZLiR5p4TWTTJc8NfT5EtL5vZVwx198kFH8F7FXpPh6ZLW514JKcohMpsMJCwKh4rKSUQe7rb7XHESLw",
  "key11": "FEhvEPksMgmniVGijaFNirCfNMPULcmm9628yNXvB7XePmWt8w7ZWnf8zCacKPJGEoD4HWzaYA7sRhHeBrqM63H",
  "key12": "2KWRA1zCrWq2krwZKvpne6LbuGgyHXTjc2UJpW9xoyD4njDFtrauMWHvnV5yVmnTXmb1287eK8pwFpTZFo6YN4jU",
  "key13": "23MnmqArehHv67p3E2njGtCuMqbEck6dyHeekk4W9oCG87bPHtjtsjJCq913GV631j8LT6He84wF8TEg6W6iWxhL",
  "key14": "HdSNVLndW1Yvh6d2g8jTe9Si1HKTvMmV9jzmE9rgTK94jHmSE21gq62CmMBNLaR4rErzP8nS5om17uSwudzNA6k",
  "key15": "5iPX627JbLRjnBpGi9yJvJiduBFENKLT1RiWZBoUai46vktyg8edEHszFGzXbmKfUsjxB67xy6QBAmL6rqtvae3z",
  "key16": "3nAtLFwdmykDY6P1c5pgsG6Q2dzXjG2jjWULS7qPZT2azS3a8bSqZDHZ14ZbxTANMu8sU47Zs2WdQZJdHn3suMpR",
  "key17": "6uAQTx7x8FUWb5C6jZESv1uGhwhMebqsJiyWdqF1dGL9yv8v4C9cDtQoh5Gn6rpEbPpqDYiTMs89Df4AEgaht91",
  "key18": "2ctVUaU6jLkyRhr2cjUueRMfQdxptQW49Jk5kd5ZMYJ1pEVhPokJ3ESBVcLQ5bLPP8Zfeww6DihKUXwssVCvVJWV",
  "key19": "2rgjeH5YNRCo3hLEHEGsopRYEryA9cczd7GrcmS7XwRfhA47QEnVN1LKR8UudyWMgA2WdCruq91UQc4WM3jCwPuC",
  "key20": "564eNvGvGffwCugfrzCfemwUDihk9WdwCMd2t9S26QbMbCVvUmhZur7LeoWffcf6Mph4ZQe8hVFJHtGxfo2aGZ2r",
  "key21": "4H41EhTf14KMaMZHhQE9RYoE8KbUP6xZFDgYVoGLqYYfZctuCASzDHdxe6Pe3Womezrww1A8CE9MnrdpLFFkWioC",
  "key22": "3y45Ax31GzNdoAtetbXAj13nBBMuVmH3jeYGVAMkPxvPXH5C9LoCuquLUMm2K3A4A5FKiEzbYydHXQiqpGRc1FWQ",
  "key23": "hyYN6byk3WHdNz7X3nPVuRmZMx8DXCuajrfXNcu4uC5h5WroH3ToE5Rh1nBR9rvUSjyL97tJYs7DipHtycfY4Vv",
  "key24": "2GHU7omuMq1BNkcJod8oec1S96yb1a5YT8PjYV822SyeNdBnNmifEqHeTnBa6hZGQi9VujdBCjBLDQgeqMHsMdcr",
  "key25": "5yvpUxwq81d3WH1xkzTyi3oTA4Bh1GnoTh6yJFZjUwDkUpGaAQF5hixuXsSWQSXdDuUxjnvLWhw7KzC2TpdSfvUJ",
  "key26": "2q3pYAM94n5FrsUMcK2tvF8JSYB7mMuR7tiBFxkdh6k99XbqZfDgmAm2dC9vtoLU8LHEe1so9B9LNEcA9Y6PHEWY",
  "key27": "4gEWP82Pwh9MiegFX9z3mGbo5CKDS7mZ1JHjpyQuxQM3B2PxAQMuHpxeZa7nU8sGmAQjAjqCZ1hQkF4RRaNtYmCN",
  "key28": "5pWkpE3iQVpRaU7tKDUBmbi7qVNgyiHJvESkiEAELztTH1DCaZs7c8SBdckvTvzXEZ5Hr2vtVoqMFTr4MbfiP5eT",
  "key29": "4hPQUX9kwGN5TJzmQK38c8SEPN9Jpvt9BWJsjRBeTNqeCYatVFkcxBrg1BSoCcF6eTUJHFcmXPckCeJ6766333yQ",
  "key30": "2STLp4j4QSPFiZRRTnDTs5VGkuNN8g7BmSQD9pSAJ2A9KboXqFoDfmixczzdkvW8jVR6AMJ8n8W9W2eQwitLJp1y",
  "key31": "4zWDA4HVqAKHT6p7hGRHGtZZusGV1912sTeU79axvPnS8NhvmnEsoA6U6epDho1BG6hPjBqFy8WJ4LQKDHpQTyn6",
  "key32": "4hmDMuoWXEamKxpeRFiUL2uzaArFf7yaYifC7bYCNF3KgHr2nnNDSsF7fcVyVPcKfho6Mz55q9BkQkaUVPEU77zM",
  "key33": "3gEZKjB3KHSFx5MiPvXcDCKhz6rSHSyeRCNBAdtyVLCtXgm645VrXzx81hpTc1rKTivheooSx7Df4XiH5ToFYh5N",
  "key34": "4yaFcfzsZLSXcot6pQoxcBWqooERgPSVV4H7kj6TgTEmbCiYUtrdapseKT2qsW7vbp4jA8aEeTKszzoSCt6hDoFm",
  "key35": "3bJ4bd1p93VnZUx6mZ6rrZ2wZHQDQGCsbXMNijAPkjVKFSbMuiQEGmD62oUcnRYcdhgfr47cMooAcrdoDD3j4wCU",
  "key36": "ACfVuzDby6pYQokKCShHR5GoGA95AGiwimpgHnuUoJgJSys2o6AujQUH8US3TZPRxgPyzWCHzwsnFvdvSwrt2pU",
  "key37": "5XfUJ8Q3PCi43FzAov9YkXkU9Y2Rc3MQPeSMuEzR3MRLdFNUE2YAw1g4vZtYg8XFVxMHjNaBj5XUFCWkFgXuwE8F",
  "key38": "3fHWGPcWVL1n5mFuzUVxTRZCwFXBmkxUeEiPtwj1tqiJLJBxwop2TeVfKqW19NPqufs1SoVDyjVJmhrhaK6cRzw5",
  "key39": "3eFsFeTcaDTvs6bmkG1Mo2f6NwME87whfrDkuKNtTJNQc4uSHNnwvNapyLAi1zwWbp3WrDgWGXxP6yQYuv3pdRfg",
  "key40": "YZcTJnVsrSUbv9HDv2tTceRcm6RNHYL194MBM2kukaLxTVGintvzSyN1mMTvDJ1shSo7AM1cxuv7okzaGXqy2uW",
  "key41": "3C7oRFgJDk6cK1UD3ycHxWXipAvqYS4smjsMjFes57epPCkDVCSWVXjmEEha99LZHW9nbH4suRpw4KT8TggToB8c",
  "key42": "3tr8epM94iAyk5UatbHg1LZ5xatXctt8ib6jXcJHo7k2seUjJkwTqNE3ww2TyechVCMiaJRiK8iKXBHnRd2yZtYs",
  "key43": "37SLFQpHDdhtsFHTMeaU7Qi6Wi459YGPcQ5o9oJKd3HAR7Y5stQYYowAqKnyNhkouspVozCVrsvgxy9rV4wrwhhm",
  "key44": "4KXso8mdZwf739yi8D3BRwN5sdmeyFjWeVqF5AnnjWvFXShizb9RdjSayMy4QQD1xo9Q2rHsS1TRx16H2a6Cgta3"
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
