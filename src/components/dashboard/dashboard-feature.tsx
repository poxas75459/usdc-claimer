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
    "fWEnLuaNAJrQrXwD3n63scLofEDzirjEQaFnZxLtC7z1ajcS2ELFdtFL9FeFk4gXYLzrhFaThdrJzsk7hjpVfQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sz4oNV83Df2q9vrHwH7b1tyCVsicvQZEqTprzZHEkJ3WG88J2jvR6FkYBL9tDZ68jv7x9z7Hb3Y9Y3gRCSwN5RH",
  "key1": "2hEuusLtUKY65FhqgCxJ8gMcjTUyxDCtiEzGFj3gnEP1VrK8aF6Q8H6zWtdCKLH5mwyvAEH4tAW5apoTuea5Ldrg",
  "key2": "5DWLBU3ipfiMPkrtzur9rJiWbPdGp8aYzTSYNrfDnUjDWbea2ifg3V2SwynKBeRWeFkPZzVNzU8Bzm2EEuj914o2",
  "key3": "5wMvfhivfaVuykcy4nAJq9NE1mqc2KwYNWabvbcygyd1vNhj7VuCUdjiVZntc3Jy1vQ2GXcqhUDWBVmiMd2CcJTY",
  "key4": "2jWNkVywyXnABREpmjc9sMcFrjD6gk74zbns7fjgGEofMHLYewk4cWVgkKtRGxqGSaCqF52W5JAJmCnvcbPQzMqT",
  "key5": "33RWetmXQKBXJSgGJWocWDu3huaBd2b5iEEndjJgrQuCAjUhe4m7pAhZaw6Ucv5WkcEprRyxvqX1vTqJdjhQy5Zq",
  "key6": "P9QsRyj2hZrcirj6KVatTUWQqDf4AMtr1AUh12chgvNNopeuiL1ndqvC98Z5bJ6BPFTJWKU7Ex8XGUKrpSwPueK",
  "key7": "rDYTTW8f8J791rF1KsZr999mAWwQoRmUFcmyfekUip7C8WMVLemKzr1HNK85sdotyD9q2pTm3c6B8xrwRBrhufg",
  "key8": "pC3sX4w3ovWzsB3aM2e2PcvQnJYYq1MzyaB7cfZcGGW7iQN5zeD1BTLtP4CF2ZNTUd1mmkTKDjn18EP9j4E2FgG",
  "key9": "3rXTmGCk9vqWz9aeiRwhCGV2KvAxTMps1v7MnrBTfnVndXHy1XCbZMpZGpoU418Y93tGdYVq7iZpkRzbi92jxpfr",
  "key10": "4LGH5DR23Nw89fPGxg37L9TXEL6PJ6VDmhgfb2iYVgjLFEu4X1TiYiAtfNP5gd323LmYR6vnvoRdRx97S2ChsDci",
  "key11": "4Qxz2Q9N9ubm26sgZ6rpuf9WdgA8UdjhufyKsx6AvMQESEvfhyA8tWz4ug4kTrtjgtHWxM3CvMvQxkSwf4qipUdJ",
  "key12": "3RzNmUkqsBhshNvDqKwtGvKQrziEhD2v1PE47cNY8PvwJLf7nCKbdvn6qQ9R2PZR7KeLXmSdVJZsYWsXFn3ij3FS",
  "key13": "5wa79dheZ65NZ56iePMJ8dCz5K1SwwLSnD3iXkxY63gmKbpJShbD3woVEZwfAfaPBQWBqU1MjSGAwFv3GcGJuguX",
  "key14": "46Z4WT2Fv3h6TR4LG5djwsB9EmXhgZCu9SqxwxQpPQJAPeN4aqQCQ4iLD2i8eG2YR6Yah8t5gKpwyyvb755DczSW",
  "key15": "46U3zyr1FRFF78RbP2Yh35n1uxnUFucgdedgwM4ayDiLvEkrhVEz45TE3xTUDQtPiV6uNHCS21SEe3MVMAUminmM",
  "key16": "4X2gj8Fg34rCFXaU1WaXcywiTcG7JhX9CmrgnXBADUmN3ummfjnAyL31EYqragSQ747n4jHWHnXX3rVLDRqhN7Z3",
  "key17": "4n1RMAwVUdgaxJo1UgsUP9zt5MVvsExrmqYjkE5jk3XUbqJqtTpXcHYdNYP2194Hn6bMdwhzXsV4HroR8GsQZQVf",
  "key18": "59wWrVr6mTRjXcLwMro5raqomcVFtNySjEZ2AiSmgYwAWtyR4nU8piAG9oS4W8cuWmqDjzgsJ4QaBTv26qatdKAu",
  "key19": "3gy8RCRwjaW1UJH6G9HPsD7vNX6cisnmbonz9MVxWsoPEWv8RQFSwuaiFuiPVA1CtdnUM5f2SYf3wCMDFQkG4TUB",
  "key20": "3BuWLpiqMGkB5Ccvu5Ri85FL3HcLNSwNG1CW4Yz9aSzUiPsbviYP3r3Wdy9ZN9uftichCJhUa7fegQke21n196Y7",
  "key21": "4PtQLkBtNAJeN9zrVRWdUbxAxfgLcVpjCnBGZ2rMgUwjXSN4vhKkpirBxGrijggpjXDmBrgU7wwt66PB4x9DSwKT",
  "key22": "RiGscDjEqeTLBamj66rrpKFgYWe2M4fosP2pVuVqimkHKW6pYiZTonq2xGfD8w9r1o2vk5xbhijVNRLMjv2RwWS",
  "key23": "28h23wbEFs6HYZHp5A1cHQcpCUGdQmopYQABHUZV74tQStMDRSRkWfYkoFEdeLzHTJwLcs2zYyBmhVshFFUVyFDz",
  "key24": "4zP6B2VSmvg9xhWXfKSpgrJBk5AKYsk83qrQgjNsRdigeEE4VhxEVUDtjpKorayLDPJCkx12pX2kFfcKHWNt3fY6",
  "key25": "5dRzjQTKfj5RFH2oY9Ng17wCcMufNu2aYmj6hJUbMozrcFvziajth7u2vu37mbdWZ63MWjEM9BW15nyFtzqtsBY9",
  "key26": "57CbLcdTWx7QpwynXv1Zb42DaDVUGvMxBk82RrnFAHq4WREdDpTAddT1jvfdNWW7oSY1VHr5EBekduRZACrfXkXD",
  "key27": "2tdp5EHAxENjxkPo6xcDEuyWAbHC5EHDWNazEL23VfqdeZMmjNMS6c7AmZvrUvX19c3EjypAg6ZfiTXC34ipW2XB",
  "key28": "hWYdJAiVAqTgRbsxFp9oQo22m1136m2eKMtJs5Wv5aPoh48R9uEhScFsj3am2ti2qzQ1umLhATmPxg6XPtPMWRz",
  "key29": "H7BzykRSARudmMwHSLuYVdE8DU3RZf4vh1wi7VUaiVNEMZ6Gjx6UckCb4mpoT2fygtsiUhnnXY8y1JVh3HF35E2",
  "key30": "2A5sW1x1b846jxFTyYZiJe27rh3xH3QJcc8wTmfB4fJXwetzTYu8ZBQ4FGQAc6YQ3ndjcp14z7Gom1xyAajw2ESb",
  "key31": "43JsxwHKeFaaAkCzG3eJ8HkrkY8yHmNhs4EDo67rLP7ohqXpsDDXzWXYf95qDQzYmUH16n46uAnco9ojtYqA1bU6",
  "key32": "tkVvadM6KVB3LTRdpwMZ4UDnPbmkiA48WKyFEJfGwkiBngWby1hbjSraArMsbzsLvPhY7HE38vyYUKGnk1pSMFa",
  "key33": "Ax28bowiXvNaJT3bFYMqbJbDqDKcs5NHq2aAr4bFwGAQ1HigocSHckLr3fr4mKJaqqurQTsHVidXyFKMkHiW5ZY",
  "key34": "hjdLfeagoKhny8QDWuNjocE1G3BnyVCAAimunni9cDW8gPSHv7tksTDCxd6k6uExzPaAU1Zvrwdxk5vSRQZQCHR",
  "key35": "3iRT1MjrRN7hZ8kR5t4KRe1qjUbuNGDof8YjTh6jYrweRhaoMNC1SQUGCwSfW91hE9Cj8CjWpDhqLSKvfb9ttByU",
  "key36": "47qAze3Q3aaDKfbvqcRena3KCzXU8gf9A76phfQwgpZSoWpH4Q9118gsyfuv3bjcy6Yt8kLRUWHyzy9gCjJrPq5d",
  "key37": "5pwLDryWRmh8gF26A4XqCdAyqzxrYCYmSRvTGnvAMm1vumcBuZC9jqtjBfMLNhgVDuT8xE6Nq3fUjmqymLenVa9u",
  "key38": "5JEZ5gWMNfMj6nvZcF31A61DjENVU1YnttrAUHN26WvMK2MzCXT4bTtnXcUBg18rpYAtJ9RpBenM8Eprv1VTvJFb",
  "key39": "VAuHWxiFPr2NRX3zghBcTKjT7dbPx1x79GonV982TRS46vKEcwTV6KvA2QwJ9i4iZu5Dx7swtt7KcF53Hyy3MPD",
  "key40": "5x3tN2yr2aM1D9dFsMsxBj8HHvty5KZdvV35GZHdVKqfF2JSqPgjaPa7HfeL39XE4JrHxW7hcJq9vpCARMcreJhD",
  "key41": "61RSymGnp2hY3MZEMrrj37wdw3yNMNNk8em2DckYWtVv3DFcdExLSxH1T6iVKRUd2jkwuxDCDvhWyHcB3fYh3YHj",
  "key42": "xNnPMrQAJZnJaz3rE43zTWM9UCpr1QY7SbXDwqmCPRDXFq9qN1q6ngjYjZ4p8UYaj3z6GpGR66Dv51BxjwCfaNq",
  "key43": "31QrCmEC1KVmePUjYk7ZNWuaqvohEN14yk9NFXkEGZHsQg9MLeyn9X5j33H9eHmyddeYrJwScUmAo7muKBp5zLhp",
  "key44": "34mdG4hj7mWjGTPQqz1dtuC1XA5s247dc7rcwbY45B2E5Cb4m7eksXjZe9ecMdWgtnzn9XJKtx5ibcdttVnoyA5s",
  "key45": "4nfuZq2fjcnf7tqyXZoWgYuQ4rTDazEPE1Q6jBFA55ahfNkZpyJTWpUQenRTpPbBXbxujRPLpFLNo6k56YPBDMyd",
  "key46": "4D7kPfHj7j7YpZxtXtJFkZxpDa7MS95u8Nubp8HsGBprUfuUF2jTf52H4uQL8nHZAQ2FTokQ2Kus9w7SCX5gHxwG",
  "key47": "QyvgTWDuBESjcoMowABLiqXEpgyEcHS1PPXAzJX9qMxtZst8JyEfoNeJyZoAvrwvT6THixTVt9a8oB45WB5A1LC"
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
