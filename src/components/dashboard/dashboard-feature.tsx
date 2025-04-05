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
    "4oLfprUcBWw1x2Kx5GhJV1tsqe2QrFEZnWprtRETHL5FAZ3Pjgpbu7y1Q5mhnEV5cct7gkXBUY1GXAqNY7Vbdfgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jc7Xw826RDAsnx4WroQPeEVq9Tp8WyiXg4zKTAEDibhnTWARCt7t8K4b41YTVtp7Wf8FwQegWwJc65mAK5BrcgJ",
  "key1": "51FPq7nUM2qHCaZh9UgK9NaX4Y6korSiwPWvvpCPWYGsn6qSe7Zv1eTmcfE8c9qYGQf5Lt6NXtRubEoj7S46eBSL",
  "key2": "5eTUB64Q5vtNbkAaYdS8yVQLSBgRFBg1nHb34g91JLCoTVVMkqvYcJcLjUfq199k9zaCN2cpcGm7XPcbun4FvBjx",
  "key3": "5o3xgQSbrfs25DaPrtvGoyoziGsqBx1vsV1Ad2am6oK11Lw3PRQModwKYbUr76tyWsazxnLzcnUjYwsT55Drv7jZ",
  "key4": "26bCxBgR38eDyCH6gkPmEpYrEcvazKYgqY6G7WtES5bhoj7S8rVngSppxNXSyoKYNXzmsS1U5fMew4ochm96xoVt",
  "key5": "5X1gfcgAYeZWsMg5WGG7xn9XgDHNWEjdZsw6bJeAx7xpzipQaXje18ZbbPB7NhoaxiyoWMiFn8StAPKscKVqq96g",
  "key6": "PxHzCGd7CUJr3xqiCdn9poNJbqFXboKQiYyvw5KJUhP6qA2euNtBRt7PBmv9HbmoJ3YKeGeKLmgeyRAN5w7SCMY",
  "key7": "4RYG1EwDj6w1wWDUv3ErLV7Tm8ihZJesSJJHqquZVsqA8p7wSZn4QzRSbhUVN7RDswwPygqEKuPxmReUx17dxZA2",
  "key8": "4Anbu2qcpqpmN2SXpfP1BYqQxect4GwPscmCGbbM1z5P6K4ct5tgHnLEM87Yj91e4kYFnsjvAycTRt8ySDwgZJyN",
  "key9": "kNjvTBeesBuAWAfyRooueSGyA7RgLq3jNzUdEpezGzczufjur6ayPeu5G1jM6m6EZGZN5796ETbGW4Syn12WHDE",
  "key10": "gHUfxpMyoQqMA8dEYeEWcigfxYNeekFj5HyasDmQeUPhWSVKXq7hbuWY2GGubCH3J6NJeTCUsnmqs83QBTwS8aU",
  "key11": "5mEeNubb7hY2a2aQVzaTdSCMig74jB9GbHdGCy81QFU4zwSRa27MfRn79xgTXfXq3quSZmNUngdW13AoKuEtHWPA",
  "key12": "WddNHMCffERGEsGdTRmBJbUZfJcoQbrtxehcJfevdYzGZUzoSDKxmFEL3Aj4kwcBkTQEbwRnkKWfDw73PRFSQQJ",
  "key13": "2dbANNnyPwy5XGhNncJUCQqHrug4ZeRUbYHewes4fPAaFBaVCqRjP8KX5hVYVQinkcAHmYjjsDthzCZSxiJKifPt",
  "key14": "57uwsxWrWfz2VqDsuHoMaEh2jaoWhFnVuctfPpvZThd2cwyuLK5GMoWc779PNjGfcX6viaGZNa6hsqqJDPvU7c5q",
  "key15": "5KPB1DUdDeVDbXpkgDBPj7G8ecQ2xf7MEEzTeuWhLvzjFbwpDtp3ne8Bg5i8RnoNhTo7iobwDRAEwzsJJGDUaViG",
  "key16": "67U935jNWzvsHxwhMm4UERgfq9oUkV8c2ZxJsPgMcgnrY51pU5mCNs9g8CSxdkgKaa6UpgMCU1KbTfQMhvJa91qR",
  "key17": "3MVaKyWrKdiptjhcxaxfgEm3cGkfW2L7TxtmZ2ZhCbmeoQsDKFe3P6vGDYkpBSV4z8ZKAyVvQ5cnXRdRAn44N9ey",
  "key18": "4nTJBkyYtuZQbYxxzAbaqtDpxvyZVbuLnTYTvmNuYdk8TG4Fc6kyhSaWX3Tqm9mZXKoa3g9SjSCvgKoGKzumVY5V",
  "key19": "46M2m2RkKPdqvAxpdBfDb1gem39Fzz3Ar39BTNYqbkLSBwNoV8kw5VbVfdK9csLEWeLHAgjndGufBCQuuBZeKp2D",
  "key20": "Ywe3zJqmNeSvw7L3QQJpx9L2FyP4Umz8x2KJJ5CdP1abM7ZZFkz89deZJbsrhMEB4W4rsK1GLbRg6gihffHdFpc",
  "key21": "4LYqX3NBaHEZs4w5oRB2UYKNpXerTDS5LrUin1wFGMeE36WCG7jfmnnrtNaXHoBGtv5i3bJrzWSUve3Y9M5ML5uC",
  "key22": "2f4KTemz6jjFVo6pfdWrvpoPVjyF7SfxVdU4emsCvGBiqzE9nmwe4z1Quesr7ekRNYXXVCobFzF1pnhdMTAQ8vDr",
  "key23": "bwWxEj6Zd1ZYq4U3cYvT57BmkDJPWDAofv7CZvNFAAK7D8gX4qDQ1YDRhVqKZeztseQ5VJHZ5nDjdspz5ZvbGLG",
  "key24": "2mmVrM2eB98JbSigJoBumw4rsfEbgiM4eAoPcyyaU5VnDytf4q3e2PVn78sKCYwYN9jy585CqWGRyXEhagfvDSsF",
  "key25": "48FKm8cTBPRGkjK6gFsw1UsD5QsmmnBjeRRYXiaG895kN1iWjoxsCNM1dhPMd8ZdWGRmyHPokHaYpdPUxbGqcXc7",
  "key26": "uK4CfXMJQ989Ruoqcqpk6oFyLvPNBsfEeHZKUXzAxKZ86ngg8F99pyWpPivv18Y2en8tpZSYixVxedqMZD2eRFZ",
  "key27": "2A6oau7M8wK2U7vWtp5HJ76d1FymNhfggiZJGiqRuUj9hXNKr95RmBQysw9oF1Yq3D6SamxSXSNReHK8nUXNN1NH",
  "key28": "3r7iK6dAFeUaX4yNjWKFTg8LgGTGhtki2bS68ALcWMfKSUWaBAhxT3FVT34Xtagm2rkfWsmn53SWtE8i7DdvEBc8",
  "key29": "4cNm9ZyoufB3T37NYeyp7hskhyav5F91r3uucP7gx4Nz5oPwaEa7eNyi7vVYL9zcVYPBNdDt827Z3djCDd5ewWVh",
  "key30": "2F5Zce8U32djvCU2UboeCcpchhyB9JpZnwYdQcCUz1VBXGwvXEBWpY3FwvriKYEf9EzkNKKiiUPPfwZfz6mTXvy1",
  "key31": "4krm5pcgCbrLnKsZcwQ5CjVnaFkKpJutKk2Lcoh9hbCXPau3d6zgvyjPUnFUGcRMt4oskq2jCknAHVkPn7uvKhth",
  "key32": "EgcWPRy7zyV1xcUTbFuwJZZd2wQs25qBh1tnCBFKk3rCtGtKVdyv6shzPqNSEtTnoWRFM7YjZearjNss2rL7WRd",
  "key33": "2BRqH9nXPhh8wFRphstMtDN1iqdPNwgTmtfWWuooRqxrzC5kxUipjXK11veavhVpmJZ1KnjiJCczXkxeoE9B4LPC",
  "key34": "knp7ipkc9rAz1wZEbAm4BcNZR1UFfoiLuJEydHZ8L7oztvtqz5Hnoeie3p9QhehBXLLdgtTDb75D6b2o1Lybkp5",
  "key35": "Wjiqu3CMqWonH5rFRiHCSLKG6KDvtnTjekWKy1oDX2KAQHP4PQYuPcNbJquF1ceiTSveHbtYZXeTNdnT6RTgRRy",
  "key36": "2QWv6NxWX3w8TgD76Vo14UEKzdG76evzXE6BhyboVGXe2vnCU4fW4wSoHuTF1oCd4gkLNvoGcKw3zthdg67FhGXb",
  "key37": "KcsCw8fdtoPD82zbDWKHmDF5DcVAa2zLdqbvR13p1fZYqVCsbXGV8Y6NhyLgxKuVNX8VeEyqQXdEmPWkKb93PNZ",
  "key38": "5UKz5Jm6ppPdGQ6jTSgXaLNH3Qc1H7Jd5pDzJ13hf87D9WBdwkHfunvc5UenAmVX1kj2Cjxj4yZ3exZWUpV69DbG",
  "key39": "4MopitxG8KGsggT8u3r5jAUusqSyQX34Dkxux2uqdGC1on4d3jEj5JjGBoRNLHW7bAgyccXsAqihX3uWngLs4hRG",
  "key40": "2bC4thEXuimcdHdrC4rSPXKX2SnfGyy8NbdWUvGpBouSvU4R8Xd3iBeaDtK36tEvanpdbKdAGFfPWxhsccHRV7Yb",
  "key41": "4YFYV3BS7e5pxsSatKZwpbP4A7rkVt7aZg8y9tLHKxEHtWMgkqtBVgm2Ydu6EHFk1pfVDnNzSdZ6Ym9vAz5nQHzW",
  "key42": "4NmUYXoXHHJYZ6rni5pMSuUrFAFMPQNyC8HHZYk3Ja6qwzhUHH2iTWTf6zJrZWBPy9ssEdbdhFdgKDzXQXABaiLd",
  "key43": "3qjeEq4CpDcQkxhHb3RVUttTnCcPowkw5xdhokVioGbLuyEWHscanxzfEn3wueULkHqmSBVDPhgNNtwfrMdnkMwU",
  "key44": "3wp81UyRHPtKNgPGjxJpQbMBDxuk6J4GxrS4pNgDXmfKoq8ftAZufwGrW9YBMSBV2xmKJMfKqYJBMhUqX499wTwP",
  "key45": "4HcaVoSnMU8h1mnDZ4d2cpD9DcfZDjygsu435PRQmUWerZQuDXFaM9WwMASXWYSTyeMXobapBssx2HS9XaKqxTDE",
  "key46": "25WcinHDe8MRRStiFPRh4tmSkxPZPZVQexTtNuYgWhpyuggwwrDXvL5fp7d6WTbHg3GoTp74Zv5kwCPCacnWpT3m",
  "key47": "6ER5mJtdfEaqS7C9AyqE61Azn4BfDPsVE2zjNEztxwzGuY5TUtau64B4qj5bX6dYPS3E2TW1e629kfapRXMqaKP"
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
