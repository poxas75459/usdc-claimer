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
    "4pVL4qX4x2tKGh2Wcz1Qu7AeCQSqnJXtg9W3v3Z4xarZXBQ96wPUdECRyT4FSgSEwdopwkhJCejhVR17tdZZjk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jWpQL7KrcborYTF3onEWbYZSc35W4PqgVTMAqAFoE5RSq2Z7k8fRWQtzUyjo4Vym6v2T7KQok3wGquCmNMggeJj",
  "key1": "4Pp6eKME7mR4mvaDv3p3aP31sic7h4yLevAL9oQiTrW44f9DWSSbUF68LYEkLDm9nZpBqHPFioFvZaRJvhPWaSiW",
  "key2": "5VBcJXGcgWk8KRj2aLBfpSqqr5LTDW1QBt77fWKo8jAK3FBK8CJMXBS8rQihf8K5VPz6ErJpMqpo34RjScjvwNTs",
  "key3": "2qzPikLugV8hWnHmtnBNkPAtTxmTMo6MDNeFJ48xGub4FoM3zUJf7pdonhvH6v4JQdN1mBJQLMZxhCf8CGjk3hev",
  "key4": "4WajE4iMWAAnC2TJQtczEb6z3UFuXqRASxfz3opHr7Xjy5ZjfpurRPMdHVDXyXW5AgNP6gziMDSRWRXbY4wQiwzv",
  "key5": "346ApC9qTBaBrjoFtauy7WBW1FiduGNLViiF3QkQu63YeMGE6syeNC5rfZtnonFVrbGXhATMeYnv6Xh2aDykkAd7",
  "key6": "3RoDB7DTNBFN6th8qDyJgsF3NEMMPeQ6P3ZYT28zQ8nM2CwLiqTnDvADvLPjiEZJ3rgEkbtkkQoVGwVt5mRQZKcH",
  "key7": "5nc21bsoFzLAhKYKMHKKet17BTC34zSzz8HNLrG5iQ99KsuXkvczfM8SNF8HM4bEddH3zwJuEtgYpAtK9GYjpMZL",
  "key8": "2jSvhBxxskp8aGE1L7PW9StGv3fz65Had8oVuemULrNz2xX8xTLpHCCsdMDyVBFZKTcZEHYqWyU2GYvheKP9m9ck",
  "key9": "62R3XNCPxXZL4NJDcdqmLzbfRrjKR27d5vcH58nKwtSHYNp3ftyGkT7CCyyaiwZb4LuDTRXSGcV4KRP5cNr7gbNp",
  "key10": "5zq9bzkfxPqZYP6HF4qDea3Kde6FWvEX8c9GMTKrbJ3Z2iEoDPDhjf5MkxfRobu39PthFe5KmjJTNLPpYWbqCjpj",
  "key11": "4msSzEh61EG3daBDz4N5mywRTXsh8ezfcaH3yRwwyWLh7WhYPXUouLxvpgaUpNjgmaPj3dPMd85PY9D4yJLjqAX1",
  "key12": "2BqAHxcxmoVKpwGXkRabi1BDx7phjC4R7Pkje2tjNGkNuG7sZCUm2qE2iVw9s1px8Wb8kt4kFQiBYduxNaDzEwqV",
  "key13": "ZbAPj7F2D5UMN7iLwxDnkiUhH6x4BYidApR4CjV5nVh9vQ32dGDizeR1qFFKGqUm7NVpm1Mkj8dLk1GDdxY9iyM",
  "key14": "4waVD327caQdK49xzoG7qZau1aEaPpkp7NLvnv3EDTmN1BsmuJvRdwstazcQyT2mZm1D8YkR7eB3ifkWKL32zBHA",
  "key15": "5zWZHsJ8qq6pGRM45k55WxqxthregB1KjYtzoPBPpxguB545Lybrccb3oGfa2GStsmAzk5CDZ34qzY11ZyzkumJ1",
  "key16": "4jPqV8z1MhwjeuX9fTAVoj6T4caBDzjVsBntvTrmRESH3NGTsXBA6EPECGoULyRoGmoViPLaWM9ptxo4NELUw7cj",
  "key17": "5qyQeoF1H2BP4Soyt6tcufucokHGVV8baTF9WHbSHpmVrCz7PFgi9cwbdzYzdSCs6yjmS8u4zCKdzm7nJek2dGhU",
  "key18": "4i5H4BWszfUUVWHPX8hjv9Ao3LhqBY6GSdTT7ZLzaA5Vsr2CVdDZyDfDGwXg8m7usGvCT3rAxUGxdXqDNeWTnn3g",
  "key19": "4SZN53f1QZrXFX486wbHpnUwhqzymWP7kwRCnGxXj7EbJuD3ZhwT8qt5xUVCbkDAqEFy4UdiXgEpWrxLR8wqGptq",
  "key20": "X3TXf4rw3T2sc8SzptpLhquyyjovCnwwyn7Phv5Xy4Y3rtcMbTbSkpGiRZueA6NAx2yfVbwxRfLfJMztf8WYddL",
  "key21": "ZyQgTw7xF2ra4QwKL61vwLu9d8anXX5SDTmxiAnEm3Koftnt5f4gDzDf81aEXKmdkqQDckeRSt2txe2oMX76NSW",
  "key22": "4hfcgp7LhNWLh4MxpuuvzuHyrqaGcfDdX3cF1FzWk7ucr4L5qWmrPz5TatbmC5K4iwGwYMA6rTqbTP1K1Ta58fFZ",
  "key23": "3CwAp6643x8pz4s4mzGGm4E142bDfJC1VULyA3msFDVkzwjk9wvjiFZNNddyuSGz74zXZ9vGiW9G8wfqWUbwGQbC",
  "key24": "52UcadGaxExSzm8hQLFC3Z12vRP1WzxCxRC59SgM8b8bdyofreKgQ5PJxE7zgZ6X6A4DYNp2cRXvPVYjKj9kHGW",
  "key25": "FyoE9xmw9SZCsxjENUa8BYod9JCizza8TJDrS7mpnD94JyyC8xwyewsfDnc6sY2iFNXxe9N5gV9k1Nj3BwwAMvp",
  "key26": "8iP1zt6P1VHumarydxabkSMRcWuDiGWf7bXWpAtQxo2VQqEbvty9qXZgEje8PWnBKJ285Su8zTHNmgZQxCqtgiu",
  "key27": "3dp5BakqAfNww3GxLeqPJ7jN7pED7nRf6Wk8ZybwxDvoHojSg5JacTpdKfnvmEnfTvW5Z9XPsAXEvQZtwpJQUmZW",
  "key28": "5WuAZL2jvq6HiaGeKq2yb5YubM17a1EkyMFz6RKjdVN1igXhK6QXtFBSTC62tbVst6xaeut1WbwqFfXAJhLxY3sM",
  "key29": "2UHXQiWwfnzTmZqJtEDJGZ3aV46cKudfuAWSCbYjy18sdSzgx3A2VNeCsgvhYuNAaSWRdGpQ6PjKyZU3R5N5XF6f",
  "key30": "5TkKGATEUSWg1xXcqNb4T99Ykfg2AbpdiWCmDiq862RW6wqYPMdFUezm7r6RHc6jLgUqCbf2a9EhxxbsyZL5RaJN",
  "key31": "2izXTzzLAWk9hWGBeJD19LvsvfMDG2PumBtYUW9wR7kDMfsNdLMzuBEdTXKTZzwgwaWmT8sNDFGTMmBPz72rgQfC",
  "key32": "3oCyTv43L7dQHPUN72P981Xk5yWkhmLTiJqyREioYuyuFGRXC5Rmvih9GppG4xSuet9FHJgFeTFZDimbvSGfrxmy",
  "key33": "4j8N8XoVQxQejULjXdipfQT81nicaBQ2dN1VvAAT3Sv9md2dcmbGqJnNV51XH17sBrtJuD896DxA8Z1VGyhs1R1u",
  "key34": "3PvhQfZLJPuwwHFbpjzx9XrHiMZTshEmCKL36hJBTqERzXmbKT5GyBmciLp6vL432AHzBLfGevd7HJmgMhwgCX7S",
  "key35": "4G5QaGrDC4NnDPe1wMdtseyKVuAJvCwi8GrREgjLkWQv1YBC1roBVjpkddhU9UnHWvvkEjnmgvvCkp9UT6ejuNYo",
  "key36": "27dvXxd5xrRgPLdVZwXdgkXbW2P6Jwqufyxk4Pe1fhzKQZAWxvtjpu8jDaPt4XmPA65XnUazAJbufvUy5dZyGeS1",
  "key37": "5WjDAgfhND3FNY88cMuZakr7p1oYPR2RYRqLud7jV12drUuzKbUrD6RykroHxwiqykUYABbvd5PruqsNk1EgBM9B",
  "key38": "31tmPVywUPmkCuZFcADPN6MYmYMkRqPGwDWtuUAad6rCzCjQCWAFR2HukucmGUpTLuh2nMybyxKsTFYSaYmFkduY",
  "key39": "2aSsrnR8nR1ASDyE8PH5icx3nWDXbNFEfFHb5odSRjcgWxtLPCydPwN17jW4VATndcEaPxiRyQiTzNPQXhBbsYS9",
  "key40": "3Q3pv4arz5WsGT31ZAJFoJTCNqX4Xx2mn9f7g2LpUKNpUoEF169wbzD5PS9c3cMSofyYH12o7DabSiCDvGzVTrxe",
  "key41": "22PBh5cYFBB9W6SAg6dxBZkrH52WCYQQSRGQD8ptEs69w9BxBSQoZMkZkeCnruCHuKQyJVHKVa2rJKf82a89YXTg",
  "key42": "3yiwRD433SwdMdiRaPRVHPnDrCUVQHuTaUg2xNtfK1XKnZsxLisJCAtnpUuqdTBxcdz65j34LskzwRnQDsYkLhWf",
  "key43": "58m1GkVddrAKeYjLSBdyeyvV5sfyqm5sh9RSoRwd22W5HXS8ZQ6ezVvev8jeexSBrYNKWa4TAJy4Qs5tRt7VXQoo",
  "key44": "2PTEsBi8VrfSzDBh4LfLN4JpBwcbDPDgSuLCaadiLmLMLqGonVRHmQbUpzprNzvcRYWQe7E2WBRPPxJyg2QuntaQ",
  "key45": "479upWjYm8jQgZBLid6WvK2D6UejibqisevrFGs7VBseXmmpX5bB7Wb8WjuBLrixv1Hgg16sk7MbkEcP8K7QRwZr"
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
