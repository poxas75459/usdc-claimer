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
    "4vQehhU3s9LHcyAwBZ46LmecchPoARazkPnBMrQwT5sdmnfaZc9bjFU3FQG6nNcYqUx1Uv2XNcozczfGFXwFecHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wXmzYdgAbraLohwf6CPe9WbkWed5R7TRMubqNpCEdyvJ8nbkKZMD7sGsJgCf3WzphYLR9oVozUQxVzE7Diyfedf",
  "key1": "3ZwD8B5NF6H3gsZeQFX1dJTFxaMU1K8bC72XJstPnGDYtcArqEmsxTwpddo9ofWC3ugddwseSYxGpKrpMcoWrRXN",
  "key2": "5bX3LW16gJetxSh1oyTKUL95D3vbDogAGVztqanybhyzkkpVtyyGyfqHByQhGhVyp99wQj4xAyEYPNik2x4ZuLCS",
  "key3": "2xvEHk1riv4d3SZP3VqDYsga5hn6AqqKTDJ4A9TLqfDMyfZsLBg4qh5hKMyjkpDzQnY9UitssaAuyvZcaoT859E2",
  "key4": "5Dkgp9L7NfnM99ywBg65LiwhLRLNzRhLJcX56ZEKBBhQYHyBZdAJDd7CXsdedB4wZrZRzCyuEJx5KJJK97G526mE",
  "key5": "3vJaQAcxfeSxNFx6T1L8wyDBbUbMEW4YfiUEebozi1nhxDUwhR1WVdxzmcH8Jzgw7i6gZ1UrU1cJpksD2mSyp42g",
  "key6": "4g9cMqiVi7hS2uw8jYD2ihqzvjhM8vorRccr8PkFwsJU2egFL2nr1x6eFVk9WK63xB8xag18eVV9gw1YEmtN5uTa",
  "key7": "HrdKf8vEQRKFUxRLpc9wUgnV1vCMH6auKUw293sjjRnggHnhmacqbB3ZJncyyGyGcDBg82npNUyGmYsVUmZZea4",
  "key8": "Da6pkzhVtuofPP4PePbuoxsLUvn4M5d31rysCJqakSC9ndofThfKuCsy2MzH9KABdWNVjid4wkJA8GRgqvxjQhK",
  "key9": "43HABcMcoCLJhj41pcVDGdU2ucZcAPhrxGGpPNGj2nqSEs34H5Jm9UFCgLo9w7taYm4Jm6knNcczVQtrEngEvwDB",
  "key10": "XQTdmbC8T1hdeZ91qRU5Nzao6684FBVPLZpqFwrQn82yT829Vtrmnca3Nm3qtQAZg1Vhtnkva3g9cCnN2JzqjVS",
  "key11": "nFxJ7b4Q4HxdSMz9NGinXDTRf2a77wmEu46b5MZ2mM5P8WFzm3nnLrXZZYqi6qBzL3j5RxsXWMa4i9nbFM6ct9J",
  "key12": "HvS7AYPzHCnHf5m2aAkRhLAA6BYgKSoHrvkFGLK5h7fqi66SEJ3y1GLgTTo6LXGf2ThvvWgXLnmQ3T3pA2FxvsP",
  "key13": "5ro5H7tPch1iGvXKRSPqApBwe1XCLsrXqn8cCKKtq5S4dHpjjCbrcUvG4gbPEtPcTgk7umCeJ4CXoagTLMs5Vpd",
  "key14": "573HchvuFyRyW3nGusXBGuWQCRzmerHVqjmWHaez5H4YUqXLsiddBW9hUMTJqZuhcwpbXZEbUwkSBJGkSCnaKCXE",
  "key15": "5J8Wcam4cS56h1TLPNyRxHUzXpWSH4s68yfiBDaGFiJypcrov64HTy91nEnaqzyDqS8iWZPLD9twJ91kMrvhSXZM",
  "key16": "3zvMsskNw9KzKVR6vnkCb2Y1z3LpBH6W3cxxBXKvDHNsTGKNw1UawE8GA4ou5rU1X5WPQtJLWxnweEMmxwVpJMSQ",
  "key17": "QQe7U3XcXWRPbfS6hQFyY3JE3wzy2FG9X7bdT3fyDTZrodp6XFR7N5SkZ8ZXgU4t1RK9iaU7u9oqg4L3gcRidSr",
  "key18": "rkPvoW3tfdkhLFD1QXdyv42HFpafAJaevxG5Uqop2DLgtAx9pwWcM5tXYnzoJJgYRUyfTrBRuC6kvSzVAv3YDgD",
  "key19": "3BEB3AyrCqTrzLpb6ULrafTaizGqCVbFECdPjEyd2mAZbXvrWyz1i3KAswMsMRoBuAxNL2yJb4ycRefwGfqQqBUG",
  "key20": "tGUBhKKpvRLG3oZ6dC5ni6RpoM4nTDaTMkcoeFEmULBmgRL3y2TXXpvUxLqvv31L22RLdoHpVfPdZHL27nrE62k",
  "key21": "3Ux55j7wBgT3we7gMERax9Sd3e2ZuJziimfuPV43faxcqs5AexnjBYd5wURweTXG4fx7FZ9qs4vTeBqghWQyjByU",
  "key22": "4BUZGBF1GgLsXfyvGpbi1e4gVXzE2eyL6PNtYAEMQquvvmX8dh1jyKpRD3n9mX3X6Bv2MqPmNJSQJ4698MJkyD7w",
  "key23": "2Pjvm87VbUAACMa1aU87MyQjvcrnVCsvqDW8PSLkGUA8o4BK7Z8uJNE3vuprAkYkKXMYpGrHK7Xihrw4JUUAank6",
  "key24": "5d7rwzMr8gvP5z4B2CGbDEohqqgbn8ZjgSD52pL8GJAbQ6VtzLK4WVi3tYhmZqiZqi8gtsWNmhu8MiPwEncJo4be",
  "key25": "84qmsUzDcRVAH7wpyXbUn1LJPEY8MkFvjw6EkZeKqfk3vaxDCo3AZLgSQG2xMqd9nXpSkJWfAuyoQbendFRYNFD",
  "key26": "4k3JcG8uKwgdqvppwkCJ6ACmRHQy5LPUKL74csL8ZbSibUH3HNzR5vJrfjcwf4EG1thysTJDZcip36ugCZ1cNjwX",
  "key27": "2HDutSFKS4spEhGFJ5pnAchGyXJvwWGv6n3NPihfx1MKBmxLEg6LhwgWC4Gp6UFogg7ARLSogWxxivDQnjCcx7c8",
  "key28": "5Y1kwQxTYVZ9QfcPPhALToi5prF4dVXE56x8HrWCHtrKjoAcH7yyhDbJCPVMPKRDWr2LP8i8Ws14oafJE4vvUB3",
  "key29": "AEFMvKffz3NbCKu2Kmwn9fczzAhi3aoNUZ3cBoCoMyoZ3CQ2kRuYMmM1vfuAfs3f8HWTxzbSKN4QyDpxDpXtd8Z",
  "key30": "RHSu1vzWz3Fi2H2UEMoAq5PEZYge9PXhFLpD4yfzqvdDY3noKUxwbooUwXByBa3AS8cMh3bETbmzoEvEg3yPCzv",
  "key31": "4pBrxRL3kbXLYyLKEawohKEa3BLhG4gGND79n6LDWAoQnFuYFYpE7h2wp3Dcsr9mb3S4peXptCtDzHWKeDRU64Ra",
  "key32": "4mq2uo1LZTc8wQjVfsP76sxr5ttusAhpz3wFx5Vv88RZMVFrDzzha6PzwEk3j4rTXtQtF4FpMd3Q8x4ez4dYZ5uN",
  "key33": "3fZjThsHRqKXdDdnYqx3dPFyWA12DwQ1Uo6hqwYdR7jTZfg1cKLxpsv988UcATxv3hENFXjdjmYLQyvhiS32ysqL",
  "key34": "4xx8t8iBNJiYz2sxgw6gg1UjGq81JQePLdvGGj4vPFwswag5ScTJxbrrob4Ktqyp1evse74AYLXGKRCndWRxbUxx",
  "key35": "3HMPbrE3Vha6ZNb3igWnSo2WyP4JTutFSsgKdzztiNoqh4Mh3vH2qZSe3EvgSL6T5PZxdqWZSg7vtG2wu8TbCA2m",
  "key36": "4EjcDDezyrBbJvFeQkE9yRZ7QphUbLapKsVcAzXMm2ih8GYJfkVhDukVsywGxkhNRqk9Tu1jCYoK6mPN5BJmcsL3",
  "key37": "2qBkmzRHcZqNgjLs2JH2fWyfCgYqNwH62cns4GCCbHHfNKCr3uHaRSys4p4bRAzs8LXiLEMBvsghsBr4X8ME1ktZ",
  "key38": "2bR1Y8vif91DM95bynpymfEDrZ5forcNdAe75W79AEEN6i4Lwbg4JE3tZrEtMdGmhvP1KiWNsnd8BLVdgoEhkWmP",
  "key39": "3tC5RFdhG87qkf43v38yUFWMJjKZpNauEan6VuKt8Vpct4B88yWgQc7N9YKmrHGspBzYiJ3Tsv6odKYdxVazheQH",
  "key40": "2DQu9tdgrbW8AAR5qC6WpFsSWnfaxLyyqFeSGiskRfYNC5DbPdEKvSbxHMUtNZBWfwSFi8rKM6DfR3aUsqmbZsBy",
  "key41": "2cxkj6CvgmviJmtAYZKwKEjAzcWQVYYHwZa31HndkBbtHJBDEukyZCWLc2U5KVaKcC3k33iNYBGEC258EbHnDZ4Y",
  "key42": "3NcRyfCL9TZTBLZzSLBSUmctDJeg3v9axz2KvQuRz67DGkZFGTNHDrncqXUm83Vp5STwabzHtaGC7pG1kvXy4zR2",
  "key43": "3E3v7vy1oppVDezgZkYE6rJFmkKVHs8jBhsYSbu8324ec11hiroFGM23kzjCBdxeq9YXDLWi3tDa68A93LYckC2q",
  "key44": "4UvEbZ8fbGd1oCmdWVv6McuA2NWR13TPCgeaLhNPWzRAhwLUNvcuo5nMNpCSq9Yd61sAA7ncz5zWFTf95oe7AcTW",
  "key45": "61qRHvQfcz4eGYgTUyiaHtj1krRfKGJ8FgzFEmKxUnrAEZubK4vxT4hcwDo6v7yWXBHey2FUM7vVUYaN3jPHcaAu",
  "key46": "5nXafuhetjpgj252TXWGY8e2V7JHQYCX5LaoDReL52kLKFgMs3TyfiU84ZaZ1ACC6gpZWGGMR9LQF7P9LHUnUVd9",
  "key47": "66oKcyzQfXNcYNJbJViZXFAfmT75hz5fF6m1snNouV28rKBMokzY8nBFkvzpTjBx2Cc8DCbWoivwveNNXXLd8dnL",
  "key48": "3C21yFjCh1ckvnuwASuXdVCr1qxYCgEM9vp8sk41naacqrsnMxzeUWqbK1QDdUHVViWYSAz1GmnTNWEktE7HyfJ9"
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
