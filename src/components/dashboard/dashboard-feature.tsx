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
    "4SXRATJEUdnTtArrNqJ24S7712LnmaXrivjmv91GsYnFqfNXv4yDFstmFxN99h22y6iKA19SWC1az7LzbTy6bZwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NFr9q9qMiAB62AbetdSEJJNjrKeEYZ6GSk7LuMyi9KPiNrWBbNPqoDYAuKq9DuyRy6RT1BDmHVVXCHJeJpCgJAu",
  "key1": "5FSzMr1Knq33C2DXp9rjnVwKYopum8eZFAELr3noHqMj4Jc3nzFzx5R41RdCitXeFzQSFYaANid5uHmLW1gddkyM",
  "key2": "YwUV1cKkrQJi5KMpZh1SVbs4aLdoTgpbvTef3XQm3sKVkqksuVK3JQ6HbWa6Anf1aXAYwYJJsibsUF6nJJghYTE",
  "key3": "nbQMYKVbNF8d8NnAw3Sgm62AdfHf4SXaUpZS3LxExacTGrroYjTw573XLFmUVwmidqN4e1smtKR6MKiSxicrCeQ",
  "key4": "3PRPHRuVdwr1VsSgsXuUTnaNMWZbMfWzFZ7o6a7pSEKUZ6YD9pBxoHRRbEtBd9GsNx75y7HcVuav3LWMPUMrDTjf",
  "key5": "dJhbH1NxnSVbA2Fq9pzHBufdszm8E7fUVuZwrbtUpqek7HhHMv9xavC95woSPskdT2H2MWUBdJz31HDDtLNhR8K",
  "key6": "3Fz55S7t8JavFHbrDW9oGmdiDsdTuwUsikLDdrmJHbHh3JWGKL3mR4e8MGFh4SieYh15tYUouqYMRFtBVYDvTTeY",
  "key7": "5tw8z2P8Bz3XWcAAtJ1jJjJ35SbsyoSza526yY7FN4yfW5kHgecuEketi1RWSNbCLnTehVNK9FnojBhsnFCmHPZi",
  "key8": "5adoZBQuKc4MhfDFeAnYgsbTR8TKfdSHDSEevKhuePdKuMxwRi6H4ypdD2cEw89Xnr8fjnwweakRkBeYqxCpHx32",
  "key9": "2c1EcoEhEudELMjREoSjxpy1nq54gCjce2Hv2uAJ4bH3rFLryCwy9QEayCV4C1ZdskPz5KFTxwmiCTQGmtFP3Uxf",
  "key10": "2ZDpjHfmLe1AaUUdZTJHjKsep1ii9a2iEN4opaQA1xcmmS8Vdrxa8h5GqHSpfjTkhA4zNMiwE9iCB9Ybt267uwGq",
  "key11": "svjdRWeyz3G1tjc3RCFrr2kQVWeicMsHXdpuirqPQ9tDDaVqETHfWycoN1Fyg5qdGnQxZbs56JNSMs87bAf6GY5",
  "key12": "5KqhFUV9EupCKanEHRbCUFFKqc55pGaxpqvNkujwQdJN84GhX2ebJk97Sjqra4fzdPJw8NpwrU3yNR2adrqYefxN",
  "key13": "oEmNzyAE9syxaUEuayRWhtvxe1DGUNKcqXjxo5zTJYBmeuCVjByCXUZbpKDsHfrz8WguSt9nkCnqHaNboLzgPzq",
  "key14": "4kL8rFrsReUaBaZpwe9FMSjFqmZ1WDZR2c3xGL1FKBRko4wpQAm6chMys57S3CB8PBy1DCu4ohfh8kUfR85Vh3ZG",
  "key15": "gEYvjimBQ6a5jXGVeDvC5RsNJEEeRgoU4DVWZXuSozA2iWctFF2VnDwdb2iZU7E9JsWFJ9w7RyXwVD8obZ6Rbm2",
  "key16": "xBCkaSpwXpRoB8nUdNKTDUHtx8H8Ty6MWM8jN8g9Yz1dtPqxbW8S7Bg1wznjFHzrFzbVzr4nhc1aeQZ4V94ZbqP",
  "key17": "3KUhgMUdeRuETwcyuJW2Xs894Bh7rwjKw1ebScU9DGhtoFABSkaD6dBND8nT8aDNc2TZ1V1XgNUttyE3ksCmiTG9",
  "key18": "FmEJvx8ShLtam5m4LLYzLK3E8CCnN1HKFJ5DhchdM9e2kxgM6EwGH1DzQmzNe7cMnKjF1GrvhFSdGdjJniTpDu4",
  "key19": "3BJ2nPqNmsHAPHJAWCXkhpzKNVG6caq1K3MSZgVBnjU9kiB78xAipQ77Ljijtyd6TKzg2omjjFDnUYHSSoWQzKCo",
  "key20": "2GWuQXxTCJde4kr2u1LaEPYv8v7VQnxDvp581ViB4nHge8AWh7tRcxQbqDHzsJWuppN1JWHT9YMBwkSdWdXF2ZXS",
  "key21": "ibxUCTYQ41PGHBV1xtwy8uxMQJZHzJ1oa5DExjVer4ybU6yuEhzdYttdVagumat8w294jjf3BYBttB91agjWMsa",
  "key22": "64TgA5HY6iJEFK7J9cr6zc9Fx1DXeBwS75oNJAKcA5tyXUg6BhSGFW4aub6q29SwB8JkKJfnHR3YKFVBxtBtwZR6",
  "key23": "5ofVvK2R7qr8V6ek26bycExumnrcEqJ6Ts61TaTtBkuqWKMeeGcaaHV5FpUCx6JUMLsMcxu9S5SnBvLMhSXVZgMX",
  "key24": "29kXt23cRyDZhsUZKX34GZnxL4NCBRMMGHLEgqqpeXb9agVVJtBMD9FHuiPFK1qACmu9GoE999R6vgqrgVz4CjTL",
  "key25": "kT2ARnnbdd9wV4c5AdQni42w6vmykptv2ZaW6yyvu7726gVkBM69kTPtV1abgHw57PjEmBb7JJ1fie39XMP6kQF",
  "key26": "2skH9SiWkt2ntEXXS94cmTJBtjrzCPimuT4nj5LxmDMi1nMyWek1xyBSaLZnW9ettWQtJ83PSUgGdJfYTb8o5Yzk",
  "key27": "4AqaVGeoUGyeXPypnZDmaw9jJgScDufDGAAgjWFPhNcQu59ct5QNbRbcuU7dGjiXTAwKLJj3wKWLAtozrjh1Jb6T",
  "key28": "ArefYLHkG78kJKVtyhaxyRrYmccV9zzLe8Y9izkZKwaFFT8FyR71FfwVEYnYHJ7Dtc1oEuiSEHU8o4QzB96riXs",
  "key29": "5DieBBewctEFJUGDKLRNgzT4UQKoRVG1Vee7p3znxEzVXDoLnbGj3P3UUNL9o3gttpxhaYnjTyBHEkF2juGYLbMT",
  "key30": "63jUoeZ4xHcJj7xkK4JkiRNKwhixAUdtQcA7npfA4G4GWcTuntJQ8WS9Y7RS6C9XoHPwHnnxMoGERy8aTYsnSe83",
  "key31": "3P433xYEbLPQKZBWTmGng6iWRA9SuBVjQ1bCnYsLNUcskkEprjsbAXfy6yCan1gyrXXzXxLzk42MRoB2er2oTh6b",
  "key32": "5STz2ZgpZGEBHpY3U7QpNaWi95ctjENEbYJNcBsmUJ8EhxkP17N3rx9AQZeT39tWs7DXsGBUMkpHzhJrNuvyfYnW",
  "key33": "3dAWxqqPoZNyVzrmajF41SdjSv14HsxjD6jvygLTWhDLYRJdRdpnpZCNrok2MEaAU758sNNvRZk23ByFacKtTWjk",
  "key34": "83poYDWuatEMiegasxKfg9wLkvG6wALLXmS9nGmh3Mtr2kXSrzjAoUaA77PQddwauvHNMrNcgrardFd79Qpo5HB",
  "key35": "4Df44YspUiMf5cyTpE8qzHUPDDBaChGuDpvAxsyhpAU2HZG4QVFxwneRjXkNpSqiatCa72kdzTdLijS3tMQWr5Ab",
  "key36": "MZ2pre3bMHMGYzV7NdmaAr4PMg5o5ZArcmufox3UnqQQ2fWZtr1JbduHTVyUR3ZksLMYr5fdDc2FJ3DhjosrH8q",
  "key37": "4zBmD3QHVmZPNTg9WRRompwqhQSTzzHmzaXyMfx22FvDE9uCEog8RByjRq8esmgkjexGR2zDsBh8sE2R3F1LWnTJ",
  "key38": "3GVERdg7kEic2jpVhXJE33VsYUK7SJhQNz97nGovFU78qZ7bRSnV7PAG7o3kZF8wGcsaerGFGcfYJjoxtC5EUXmj",
  "key39": "5QvEKFbRciW3yb6U1gFWHQzXPKQbrTTmrGb9BH2LiaDqQXUHF4RNWKWtz9LJBdv1ayeicy8dPANrZEbMK8JqWnMy",
  "key40": "2dPK4Cj2KM1RaAimzsdAo4tN1Y3yWckfGzfi22fkPtCR3GXYicPhAKt6Dnno9d2TV3EtqFkHXr8bLtUTLVofU7tZ",
  "key41": "5KV3HiztM8qooeeRLFoNhJcSorVZMNwX3Wg99oZEwp3jp5kUYEWYGrvseE3ba2C76CqdKZGNoJ2kQhw4Z2XXotUC",
  "key42": "7RJ6QJmEiaLvcg5N9jKpoKqdk7sWep74yu9hEkUXMa1bwNm4mnLpKW3dVSbeLGnHfCX5bHtRyXyWduA5nVHMM6d",
  "key43": "2mVEeKHRP4SXd3GCLsLQo9rAhUTSGX9yP5pdbd32wvuvmBJWXWrjBeJBziKNK2XZtun5CgE2az29aLs2hAuFyUxA",
  "key44": "SzPdv7ysQo56qmX2AykxEn3tmi47C4tfK2NUCuZ59X5GhgXH6vCMsa4yBB4dcKQkzuWTF82CEWXAieK3e8DgmPY",
  "key45": "2XZxv7i6zfW2qZ72qbhN2JfEotAK1E52fmQ2JAVk7PZaqFQcdpQDFNhkZ8iifz4fWL4fn15T7hHPzNLUemArDwQ3"
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
