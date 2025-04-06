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
    "2mCxP5PX9eRi2C2qPZBUWz5Ryvd4xH6u9PzULDB7mJC5DbrnGywbqntVbv7aMsSby29sfqd9KPmV4G5h8riw6dx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFVqLrb9JDyL2hp8YnGcFbQcpraDEySUrgFhNC3afr1Emj4xUyoqo87yPGNfWe2tWHrbURJuRWPfmBWLMBFy2aE",
  "key1": "2pY5HibD4S5wt6rSYsWaQ8ZQVpprmVDoE4R7ChDfExBJtPHQcM49vuAtavxxjPep9jpiphRZsAYcD8By8psU9wPo",
  "key2": "2mLjnU9FrW6BGJcdsgvRGbjPXZoANqhocfg6FNCUDG9srphUHrzuHZC9rGG59kiwYvu3PK4JjXUU9z1JV3qoUtwC",
  "key3": "5WfU5kzAyDBHuvWmjjgf6gjPL2PhycNLFV3WpLPyQYaZeBP21wp4zmHQYmpJuVXqReRZRHHb2WEtAfx8E42mVX7h",
  "key4": "65UM6VMxZap8GWMqGwha8jC46rQBDZFMTrK5Fw27TFdbhGDC8qvtXPtNAkTPLjhnBmGDyPLaZK3J4rLKc4AxedM7",
  "key5": "3jpD7FV8VEp8B7qxVFYPyayWxXVuLcu52eA99QRfF9YM6qiaet19pUst9gF2r62yWFyy6hU3rm8URGLmx8UigKoj",
  "key6": "66njqcuP4JhbsGfRJumMxnpvDEiEaufVT6uDB4dYtqCCzXMz2Qo6jpZB4UbgAZhK2bqM6Ug3j9XLzYR9aXxArssd",
  "key7": "4dHYbRdXidtAPh7MVLbU2aLiymzDAkmSP7wvb7x9ogA1BwtAv8eNRCN9rtkn6W4y3YT15YxDhCCWHBngqwgen9s2",
  "key8": "5TyTyK3kVpGMjwH2Kc3diRwbSdkWefFNJymH7CtPwWwbvChuN5ZNGc5L67PrqCi6nJ7dDZpYC5tHy7pvVkbAUsZx",
  "key9": "2tYzV6gHDz7M49FmcjCKkyVUYCexujL4n179xsLspAq5nocBGqwJrd7UKCWtWSdKCGH4poSBh9wQv2LK9RTuAsSt",
  "key10": "2oVFMFYBTkwF7XqwdFmFh34PFdwziBedeaWiKpLFBE5podPq7FKoQTSxu1c3aYocadQjGFugEwpQtkzk2We28rvZ",
  "key11": "4XAYJM2wFW3SPU4CWtLwAf85SfTrqUACP348nHmRgHkzYbUH9tGxyv4NTM9CAjMFBzp6oyqREfMtjKUQZjQJ7rpU",
  "key12": "5BLu81UGRhN1fPFL76SUK1p5EAM5At9Jhy5AtaP6AxXgTxqnETQQpmh48PKVUhKfYvkXXpub8PMf7vQZ7hKvSD6o",
  "key13": "5i6XHqonKmjUAtprhesXenFmksTpLnvPVF157iCG24XRo6TigGkfnMwmfs3tuqYUihyZ2s6v2mERLy1kPAcertXb",
  "key14": "31Khj2mZwTehLnwDy4zbawEhHoBo3APWGCJkwNqYHsSVun4cLU7jXa6PfUAT6EtLEMkewRDBoYm8UwCbQHyY2CXT",
  "key15": "4BqutiWY6XyoAEkx9o35zG2JktUqrcPqA3Ce82hqPPr3RGpG2187DHwrnrjLmijSKoLrEmbcch9WiLRsmQdoKn79",
  "key16": "2ojhnnGMe4hK87FHbxm1rJveVFyyZLoKUfVDnWYL4Q9ZwuumAi97LoX7Y64ZTrSHG5QKEMNW1FKxujpefCGoW7Zi",
  "key17": "3TYA6yANXymU76NTeLHDumJMGxYuGN7fiW9kesmwW3hjzoG8NaDDuKUAiayYoe3nP4vA27cZxGsSgYgrANP4aWb6",
  "key18": "qH5M7cvdTJWhKQ8fFNMFq6XnBUrx5zJbeUHBrfh1Vv2bAh8EfauCeQNHgok4JZo8ESYyCMUj4qxgCmC9jSeqrWB",
  "key19": "379JaJg8MkvhsjAv69Nc83aWUAHftYvwy2C9WZPgqbeb4tfU84HxrQJHeSjh58spoukifzZSrAzzCxiur4YmjuhZ",
  "key20": "5hS44gpYkX47bYrcDkqz66odJ2muzo9YJDTbtVdvtZEF1JRWxAnysCqHRmf2if48BbAU7yTdc9wcTLTjKVcoDYjF",
  "key21": "24a52xJTuDNisfFAfPgn4p7mriEWZw41fdKuU8hem2Ufr5pyDDwAcNM353UDJMGGp86cnNtSU1hZZv75wKUSuHLX",
  "key22": "3MbEswNYkWHtAs2x6APZKDV44cXmCgFu9CZBdHARcXahubmTuFzoLJqgBKnPCk2pFeHSogrkGPJui8cTHDuGfTV",
  "key23": "3ZjUcXnVg9CYe22cNmzcgpmRudvkqDfbDnviUeLk1wKYgd8NurKJ3XguiK6CXirKNy3Tv97e3f3cfomj71agAGmQ",
  "key24": "42tS65nhUJQ4xpqygwMVjj4pGoZFrH5ocjQ1wjRqas248ekyMEDRM8NVMoXNiNoiyfZqvpJ9QdxptqBRQkmYqW2r",
  "key25": "4sdd2tTjP3gkcFGY8k7h673L31Y1F922Jk35p87iVsUvCNTPFBnJwZo6Wie6GV2zcxMpcibu55cFGamf3FCpRbkg",
  "key26": "B5qoVXxSd16nemXxcdFwk8cFyTgNXPdQVuTWjZw5PNdJ3Xcah6RWvawwG9DJ25shrPJCZmaxFwZ8Hz1z4GiTr5r",
  "key27": "Y4FMxUtVFBvZfeQM86NgbigVrUwoyf6hcAKDCA6sf54JvmrigqzSpKCaACyvAzgm4sxsxEzskiEc184h9RDz8gW",
  "key28": "4vVHTLgMRYvsCqmJfwmKsGzk9gxejZBF4nxAZMytTXw9iWiaCAD71qRpvgW6QA4iRBR1eho7J226opCEigCxjtZy",
  "key29": "3wNzSu4XBSihALEHdWYMjhTFdwbdHYt3LhjWKvJj2kBfUeYMA6eUVyhGDJH1UKbfxKAW12Yh6pupCoDrkgHKeVfQ",
  "key30": "58P7AhDZPkgj43vN4KXMQKKuLMaSArvybVhVCeq8ptvWbgFXW3huzsjfeHgPsTkdTm3VbdJnuB5rxbkwvbmFZRnx",
  "key31": "28NYoABj1PxugUxmqzpFRiwU7aSewDY4mTsHr2Bqu3VvAXguRLfUfg6v7GVX1xTdtA6Aw6zZ4DVo5bVBmpWwNLj9",
  "key32": "5ak6AucJYWGSG8B9BzSghctQCaayFoFM9gnBK8vY1xRoJy4hna3n1YyMHQMxstyNuWu5cDY1eixXMFsc9FN5Lu8W",
  "key33": "ohTUSuGNBNp662hWpeqvvg3AFdba9vTUwYGiF6ajC3VSZB7Qe8jrmPKrLkb76zmNkDZCVamUJyddWDYuaECyjnw",
  "key34": "2jUaU9yPf6isUKDDGVTzeGLfrgpUrF1pQCWXFYvarxVehCifx2JoAgq7fnMAAdGJC7o1gE8cnzFUTxKR14uncy2P",
  "key35": "25xzvz2eimHab2HWZ7VNGYm7VmvgF6weFx9WsrUQhH3NkDDxTp1hSKFZUCHy7cKtgrz42S9pzFqt3RMy6SuFaQjn",
  "key36": "y4m35NtTRFmKbTvXFBKHuRbjeb9dHvmmQi5JyujZEbjBSk1s8Y9RiscB5HbkY3wdGnrmYsQ27WPcoqZtzTB6ted",
  "key37": "3aLuhMjRUKRoeyJUFr5ZNj8DP6yhHx3sMwrnkgGmdyGpNjbfvUWPx9FwnBKZ81DtVnVGs1QKVbNuRkX9wVPwk3st",
  "key38": "KXtr8spbpuw9WneAUCAnpy7GDZbMRZqvGJfBrQ8uvoEmZXfzkSQTwjyi9RgkyX3LgsLkg5xb4EZWy3fuw3Lm7mY",
  "key39": "5mRrqB9FYUBYJqWiiP6bcmgPCEKjqkCjohvPFFnfBNx9wR87wzoJ1jRSoAdkqBTBNQH3nkTu9WjCq5AC7EiA5bQ1",
  "key40": "5kvAcQX2fa11fwAoY42DRa7U8JbigCmUp2uDFzD283efqkWtDhH7b7mYsnbtHP3oXjZNZWD8jbDXdG8neCJuiNLF",
  "key41": "5wn3TFpiDQYXCkvg5WgvzaYHKvWhVDU2AnVEhvvSbAVxwERkBHxiNGNDkF7yXiPJCXHGWqcGeApvGgqpTbZVYP4J",
  "key42": "2DTCJN1UHno2s7VJwm1WSx1kQFujm12xjXrcQtgjKZky6QmbDRasV9GXsDdYQUKSzD7wdtghhBWN29hTJo7or7jW",
  "key43": "36ZPwpdASqAwvPrnYWeZhrggpgGGwuDFTMyRwepnhXiuEPiHM6LU9tKUSSP3sHT5RW4v475ZaucRF6x4FBbzXCq",
  "key44": "62BxBV4KV2uzGyw4dzgMGMR4jzZWSviaqXFTCz9BxhzRMGHL6c6hB2giAehVttzw1ecuKAAiBqZUJfEWi7BBQctH",
  "key45": "47DMudkbHqUeDnWmb2jxJ2jhHo937dQ5A7koQJDx3BagEYyo3QB4Zvs8SX5APvXFM8ck9Q2pV6JHPHnjoz15uzKd",
  "key46": "4uwm9pCH7jY44RwVJPsLa7NRDEHQwHnNqXPrF75eyw2eF2XL6DWN2eVnCki5JbiWqPoArB2N3ZETBwt3g1sBZ1b",
  "key47": "4o2MkoPDGB1x6nYaa371HL7CjPwz4riaUg2ZwpQ6orC4ftwfMRHihENV4yTUB9CPSteVqCzFcTF7LMMvJTgk4YP1",
  "key48": "3tHeYhgjvigea5ZgKxN7F4fMS7tKrpy9dLQ36MdQRRw9cA4gjyncrBDJ5fHngMRJzownjjw5aWKAYRge28jnDXb9"
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
