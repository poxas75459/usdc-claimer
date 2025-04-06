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
    "2Q69StFoUuhyvaYYz3u39HtKhRTnhjBpFC2nCus5MigsMyeYxXtM12DKRVXa87Co8wJGqefooQVhhWVhY71oW2Z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P6wHUbpS333cKBa4VPbvN9rMZSfYkbFvxgqZx1qLguHgGggDiw9FwyEYuFaJw6gvD8tNhVcwXCB5uivFe1t97Gn",
  "key1": "3u7nQ2KM2YSMtL1d4i7vcvwvzKpp5ER6yHdA4MH3nU9zkxuaUXTRxYgwSrMihkTHuVdKNDT7oySuTd9iQvv7RoCR",
  "key2": "3iQA6mBqedPsnz1GG2dDvR3ZxNhZ7JhSqnXgFbZz5YjnSmayBZ5eZXCHidqt5VD1NdoN45ELajoRvfEHDw6f4mu3",
  "key3": "inv8LhGZEz8cUbygYsMX7SoEg3rW3YvqL3mT8zdHs5gGBtdMjztqycvwgTHn8hprRARqC97oCUxtAXPRYXveoqC",
  "key4": "2dvkCEoHxFdtUywyBwDQbsPVhi8SbJHcqkgzAwvknRQAYiHqwa5HcsSuo21UhJVznpjEXfRzvHCZBiu2KZSzSEch",
  "key5": "4Xw1Mdjcw7iSugAFe3WTm5YvF9yw3J7e7VEwyMFk4RPbmPsZrMuqG3J6ZiUVdDz7kKY3w5Bnf436ruz5ZC3ZKvQA",
  "key6": "2g854hL2GVTVAKctuQxTBe7vRUkZFGwdXYjRxQzvGJ2vFss1v8pwvTrPZaFn1M9UH221Q7BWKx2GtUbC3iV7Xmuz",
  "key7": "3LdYPGgrT6vUiHPKnTVDXPu5MFFATwSyniDGyF1nbsskn31Z5ZcFbtCkoNuch2YCbo2bzS2cNbB27Wa9EQgq7R7d",
  "key8": "5zT8d8ZsubVgESnnWZey3RKQcJi61dGw6BHKeomTpzcqhafq5xePHNDTqCNawxvMkSo5fHjKtaqmozmADo8vgCut",
  "key9": "4wu7kAoqGFKgWrpXjmZbFvH1ezVXBPmiVdCcwhWC6dBntffXByp8mkC3NcqWVXciHpnQGBKh7WfDmci66b1ZnpDU",
  "key10": "ZRAafAKF8SbFaL4i4NWsZP57uYnGoXhy8AdEUPVF8MJ88V5R6yYesFmQYC9Mx9aicLC3o6cqmRkB89PiDanHox7",
  "key11": "2ec3oEdpDYdi4XSqHJiHEnyWUbf4wHKuaW5uAoNPmCsEHYy8ozna6ZnTfXdWDj6t1q34FnyA537J9R5ZKkbgo3cp",
  "key12": "26oqtqEmWfidRg1hiefaLJdihRTPYhihkTgG7CWp2EaiK7tuMAKmhYa5QAj7ktUydrJNwMKqPpFJPcxt1MNS17m2",
  "key13": "41cTz5WcFPE9tVPiK2hXRAsXQXtSWW2tthdnSCLVQuQYGD63TJsxBvGBW8QtABA4jS4ogfXV2AqAC3UuhZ7nFAsD",
  "key14": "5jutAyZVk4KQ6thrc86dY295YZkb9sr4MWbTaSkPTArbBT4KNDFRp7Gt2dtnRVq5bA7vrCgJptss8XxZJbz4Lqtc",
  "key15": "5ZorwtvZKu27TDCgtDzCqG4TH2rcj6uwxQLYPYJtky3owALJcH5uxjWsieubJh28GJZNXCzTEhGfDBdDp3MqviPv",
  "key16": "21rFLY57hUboKFo2DazRAR8bPgnTF51C52nw1F3NhjMKhDKBaR1mMnFLvC7MckHuCMGcPUYT7A8YEgy6L37zyJQv",
  "key17": "48fyahsxEA3AfsNwApWZB3gWwrrwCN5crSQnLoZFSr5kGeNBxyrn9ByYhwdw2tkcppUwjGqorXWLfb23Gryeq9yC",
  "key18": "hGcejBy9xNGveR2ZLTUjYAZh3bWo49k8pBZpNiNTBbp7VfqKw9zFRBo1UQtevxJpYykGeZij2B8TQG1zZSeq1gQ",
  "key19": "5DeE2RKEAEEhfpJDxcrohw6G6oU6eoaFFS4Fm6EzwCa34UVZwCzQS577k8pQMmXmXxbHGRi9ebq1vHhNp4KuqSex",
  "key20": "4bxCeotZwcnVXmvjCTnRRHDFLuhrxzqcgnACtQUtq4SEFZrheRMvxQ5bEDvtb1i7LBFTPM8vcjG75duxrZuaU1T6",
  "key21": "51EjZ4jbHDscPtnRLPyjYEA2iZNbgJqRdNL9fpfeYTkwHFXZHXaHyqY3DHNz5SU2Y2gpvy5QK5ksgLCKPsHkyh1k",
  "key22": "3ZoxaZNBUmNTKiaQ2SgYes2nkS7S6QQTn9JF1dWcM5ii7dJdaJHgD2eBF238HmbhC9Zhv7j3njHti5T9fYbNz5by",
  "key23": "2rjdUsfcmxx7Jt21Sj27cNZPVJ6DBx1bfWqksjNviFPLXVQmuvw69GBti6HoeAx8wQr5Au5Zpoc37GEwQAsKYYnt",
  "key24": "3vQwuxWYuDFLEMUokgJ5aAp87EybTMHjQByaMjAfFvgxm75yoKWmgEdK9TUUCciafbmrvWgx6iDhoRZTWta7gfGb",
  "key25": "8a62vAAivgoGjhPY6M49JFYPVy6Mg4BMN2N2T7F91KymV2ANNG3euSpWJsgGfn9WFTAhx9CotH7eiG89KkfxZUh",
  "key26": "3yZRa1JXavzagu99PFrzzC548BN9fz1erCft7DM6xGe1JNRhLiM3prLNVRKHGJHSqpTxQw6QmoxtKpwsEhhCV8hy",
  "key27": "5LFTt6HkxJLjNEbK9tV2hMKxBEGnWLFVnYaSfrYuzhk4iKADYcfsmtsTfJ5HLiHtCFcPi3wjeej3HqY7eUfheDg5",
  "key28": "52y4xnkbTfm9VurXb2tojGmmoakbab37tPaHTpD7CddnuXcJY6Z147x1nhZidWyG4qb1rR5RWM86RCziovYYGxvt",
  "key29": "4DJf8Aord9XQGfFUTefQBq4FdpeE4rRHJgiBkP7N2RSUj8ipxri6Psohi3Dofz2rPGKJDTkjTwEmCpfK92UPbbwu",
  "key30": "5UWHcRrQM9iLgVcuU7ECxhoXvGCQpJqfG5d6EAgox4wiDYMEtGYPRvLfVh47RodJPtxDTejq3HWkn8yhefRPpbTD",
  "key31": "44sHztffFjJogKf4wRukjMasSJU3YSYHcRJh1HPKJWioFySU2AtnNmH4CPAbUfPBhPfZdJSmBXnU12Zzgzf7va5k",
  "key32": "37eKRjvKLsRwDP3RhmJ1cZ7UFRGccgDYqv5FuAnfanKABSdr4Kt5KAtov4Kx4q1qUUUi7JdXtpZbMVeZEUPgArTy",
  "key33": "2S1uwbSzLMBHnyC2hkZMkxWKQV9XiE89YKk6vgXtzXHshnELMYoe1HW1rVThmf5eGuff1ZdFr8EkcFZW9Tnq3HEH",
  "key34": "4GNwatVgCJfjMcY9Wg95J6N7RcnPdGTosJdfHCyGYYZipyZdhcU29ZLqD8ztVFoMNdVcnw5kgHjMiuow72AaDVvy",
  "key35": "26AUEKjrmjedny2Xhrp5EetuGAbfMn7RpUNXyVTzqsrWSuRYemUZnsiRC82T7kGUYTWA22omNK4AWbaqGTsWZ9aq",
  "key36": "2AnnrEU5dZfwDBrG1PzkTTRFAhT5wBeh3JpUBiLyfc1RDeLy3Aih3bnqwLiwb7q7PXKvVMom9T7YDgjab748TD9M",
  "key37": "4brSKozqJ3CMYJzLBN81b8p7NBiZ5BaLKmD7FHit4Ba6E9avzJQK9opuz1PQ3Xh3QxEwXjmDUUC2AuwTguStxcmY"
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
