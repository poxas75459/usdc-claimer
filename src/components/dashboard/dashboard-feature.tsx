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
    "3ydL2wrc8oLrnK3EiNt3gpfCgj9GTspyrmJScjywhC5vA4k8SvuDJHeKS8vb5PW2veX8aoFjMq8CvrdwBaiFRoJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ukMXB82qvJQdNmdLNnQUGAkic2Z2Ye2aANdTq5vNo86bYJnCzUK2rBGnjwdo8cVNi7Qy2VC6Q5QJ17he6BC47H",
  "key1": "2ErVTW3fpsBnNnVCuPckVaprP8MHUnXk45pXov7YyiZ4TGz963PA2o8LW7D2qB2v5bfGp2r2txbxhuQNP3Ya22vk",
  "key2": "37cznZLJgshFSHsxUqjzR73nUfwfYkQ61wDazJsRvD3J81Pw388UJ2e8VkX3LG2fkbHNcihoRDd1cma8qwq4ormp",
  "key3": "BDVZg7Ud4syrB9QJa2Vkpxs2ZYoFTgvKDbFESkjJ87AxnLYfcaw1KvEtftaMj86AfaRpPcAjNB4j169pDXQMbCy",
  "key4": "5wDrje2CnrTYFb3bAdd5NyxTLaANik6SNwdTyVqNaAPpV4MR2xvNbyA4TsCn7wTDAUGzDfVmf7ykC3Tc6PKvFVkF",
  "key5": "WQqnbCDopKUuVGG9Qat5q2iRbtNZtztCpkJkj4C1wc3mp2q2JRa1diUa634L4t2qydCom3F24XUemw6noeUAxYQ",
  "key6": "4e9VNAYU7oRjadSGFCWzMUxAQbPPVK6kHNmXeiSfxmqy5MKAHzZq2Q2FkNY8xaKedZVmrGbrqNAK7eaVCGU44aHZ",
  "key7": "2kvMb3RuL2948Aid99LBwGsjiuu2u5QVjPQY3eTujDHmAYk9wxHH7EcoVAuctLTkFbJhiHjyzLRmoeodXhYKF2u4",
  "key8": "4cauZvKM6UioSyWJWAGwiqSjkDSYwZh2q2XQQwcgH7fYSpHJkeCALiaBhyGfxu7NrPVYyVMN96irDP13ctQphP3e",
  "key9": "y6pUikhrn3ejYT9w6pgfLveFTEmYLugQ8SnJdNjVUGhecgJmzmcw9Wt7deh4GSbZnrZcwPYVTLNQZ8a9bUaSSAc",
  "key10": "3cgYi7fPJUhHQGuwVbYUAsfJsdU159znq5yn6uZKHrjZpMg8D1JYyYrsyBfFvmpHtGzHp7fkoR3YPkBVQebGs9qr",
  "key11": "5DByP3gnFK7RqcCzkf96Z23nCVqikLT5YngHNFkQYqdWLfVUhbDSK9yYSLW85DNTVfW23GyT1HXXCi2McjsALi8C",
  "key12": "2khCJ9hwvEPwvUs2G6YJdocwdVBocFFwmiL4gvqjvmUNwAZZjAfj6czDAFn1UHMGXrcBvrXBkQM7ZXAGtFMh4gAZ",
  "key13": "EAgb6xWykZgk2NGQWNc1PTxzsTpg1m1tVfVrEGA3sdCJNe65iT5UkF9b1AhiGAQ6Lz7k9xbNbpu614zpH8ircFH",
  "key14": "3Rh11sft2JYi5WBQmCzgCc6YzFoCfbdhT2THpbCHdZSkqnnwrLAeVmPPVk6eeXDhiDEWVppFe4UEnwvApeoKCXiv",
  "key15": "b1BGdj4TwJE7YxQTkg86kWY1TYmRFJrvKP9stjN6a7xQm5wbiYugFcDipJ5o9QqZjYvhjv9F4ovsJotkS8nTCWw",
  "key16": "2s8gn2Qqa1eVeaU6U85Y57vgcbByBzhu7RcSxB55fSezs1JHxKCJ6V8HrghwNyFcH13A6rYBPKZmrbMgUnQJTRZ3",
  "key17": "3Lf1mT35kjgx3Mibosc9iPQUfivDkgY95Fm2WgiodRntXMCwPevCWScD8qNzdYKEy6VTDSSEvZGLouHX9r1QWNT7",
  "key18": "5K9A7wfkGz2GbudezTCviwKsnmWfVZnjcFDnbiAsCjHQNE7ojPcN7BmH9QQnnKFNquDKC4hcgVAXbrYKn5MvLGFy",
  "key19": "LG5ueJm31cgUxPckyQUaHSN1yPSjDqyWPPP2a9ZviPXrGjTaDdwPyvPrRxchMTkEEu6TuH74s88Y5vEShaGhcdg",
  "key20": "4DuZWom8a3ZX4sWEVdeMER9wu5DPgWpzBCyykMWQaQfPKELrJc3CMUe6yVWbZmFCPwrC3tPVChhKctunVqJ1TrD8",
  "key21": "5pCL76XgDJqFMuHy9gHV5zYCkDjusxu3PtYadDVAjWWDf1JuAJLTwmvaTz5RoS8qZ668Dwjq7iuwJaNwdwAMt9mJ",
  "key22": "3M9E9tTxPFABsZMgnMbTCa3wsLYct42mMNFUdc3hYzpZ7u343pmFpATVcbLeFAEweRGuSRqjkmZeaKkpvXGCuVUA",
  "key23": "85Aiwg6U3D7ebwacNs2Xx4Tvv8GKCBTyaDiTfozx8Q5nXfaFsNKNUucdggimXuQVvpizC9yZyLe39XGBEeJM8pj",
  "key24": "4r1GTwBiAijPvNTZdTgCs5AtyjGcPPHiXsBJD8BKzBHToL6KkAqtFAyeG46efYPsS1L1fhgGF2vVvLS7GP7LnYg6",
  "key25": "3kUkrqHfgd4cR8irD4TBA46y88N1dwb9tSBmmig6EiHcKfUmtyzyMzfteiM4x4BwomPNN9zA6hD2JRBLWGu2qLkF",
  "key26": "EJfPZ9SnJ75amRAmQEb3rLBW4XAcHkC5xQMFFYNK78C7YaWgY3wBpp3a8Z4nboGiw6StBdSiZSh9SXEZchJK7rt",
  "key27": "55h6fLFoAuZqVsBxwZ2915vPHad3QL4Ly5bub94yzi61YoYjiWLRoz5gmy7Qa1G7fCcetGkSGWtv4y5regJrMevn",
  "key28": "5oG5PH1E8rfNCzjmHgZiqRDxBeWaDeyE6dr5n8MFrvySog1vNcdDt93LZWHpnviVautBcUWsPcRpUsaybCgNZk4b",
  "key29": "5u9FDUJCM2uNoVzthiLK2jeRm4cE5iqbdLfXJZXS8Vrkz5LNdUcm2oVR8K4eXtxQhEgb2qzenGeozSqWkMEX6fTg",
  "key30": "muoMLfH5GoNY2XZSLE6ofkdMyUY75TzhPeatoauQHwqLniE68x8yv4VHjduLfKGmtEUGNKKwmJKeFNPgocUe4VC",
  "key31": "3PbzMQSZzvqsu7TA4kiyHj8ErHGRLBewuMHmkkB7dnn8DfPeHznUv9m4n96pJsxDMAt84uSmRBhQGV6v3yxHdWd7",
  "key32": "3jUs6gehWbhjG4667kgqztufoYQNwR8ws7oZR2XBQnzaKmH6YLUcX2ApXnv7YujJbBsyJsGg3yP5nmH7jJ7Pe1Gz",
  "key33": "3pi4zuJo28o7eu8TnGFjebJ8AtnUNmaqFbFU8kdsbkoYCBptgqTRbec9TtmB1H444s9uegt86xTr8Vs2brjiANd7",
  "key34": "4v25ca6VjiR9L3kNJJfFkkYieDS5F72TptWn2dasCazT6pXcnDWqimYhV54HsHGyFGDmVqs2XbMnZGpNdo8ichKp",
  "key35": "2G4Xeq8DoaEDwaJAsLHzwn76GjyvdbQLa3meiLzaWZhxH9XA77uPB8g3YM8ubDzDbW1XkhasvS3kH7NzVZuopJuk",
  "key36": "3usqiGKhH6b9XAFt2ADpT2sSYB8T3jPVZpWvPqcKRSPoBgm5yZH6PJQGH3CQR9nD2WzuTdaA8SfdyLeuyqxTsQqd",
  "key37": "2yAZRq3woHmCe15zsqJ7BmFpkcYsVN85rT9nzjwF3ZNKHE7pvUAUnCfnfPeY5j9VXSpMDwQyVDXeHXXWnqPoS6sy",
  "key38": "UZya5QkAP6enPVrb8ktBdZwjmnrgrx4KRxuZkMWaV7Fhe5ryKGncUhFbsf5KXssLcMjucvquzPZiZtowe8ATY5f",
  "key39": "2G3L8sQUWmpTAwPYdJK2QNLVQYoVyGnhWdfjTDiBRTfB1oJjruLiEbbBPhCTd4frxfNtJAnxe6eN1Ds5Q7bsynSj",
  "key40": "428srbx5JgSTkNn71CGz7sU6KmcCNdwrDuPWxmQLfFxrMBzL6GZAE14aduGd3f8y8FfnLq2EEbUqzCrCrBsxjpP4",
  "key41": "3VsvpPp2hiDpzggJPDM1rj8A8oDkUHmHxxpWMStjieEW2xMuUJo556Vc8imVS1fTDaWEDkb2Hag9Hxq5vFCpSsbv",
  "key42": "47nBsFp3Zms1QpAhrvfyHXyhiusodBjPtwPJeZsB4vLKEJnabKWKNJygiSp6TvngcL5XexzMhwMsLJijaKRSCXX6"
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
