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
    "XzQQB5xEGaM86ZRBRcGF56omCU7bZsj5fgxsWuU8BuvJkPDa4QghyCLgkVJsPd8rUd6r25bHjzJzoprbDMpKiGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34BT3CDaDkmb6KbvP3sovVzyFq3yc5B7U3ciSyVqyk6Npwftg9AqsJy9UUurT1pVVFrFMiyYtMdF3TKr5tkKGevN",
  "key1": "3QuTvWpYc6HMAJ22GYwtd9fjYn6sKRfryqE3XnFDGM9AK1fbcjWED815xVFvGBLnfV9psK4CyaUNqa3hJ9rEMeco",
  "key2": "3pbatE15edwGxdW36o5BhkeJYULvq98sShaUS1b23TpkqtGCbSnL7PnWx95re172RxHDh5mm8oXApMk9TkRXJpu5",
  "key3": "54gFrFGgvmuRXv5mpCZufmpp5RvNd534k8eSoF8nYYy3S7qxGzqgfDLZYGsdZYuBASVXZYonenrQ9gnAnk4GgGxJ",
  "key4": "2Bs8vQNttQbgXbwevqp9i264DgU8AREsatZ9NRoUYSbaexXWACRcWMF3Zt61zXSdfWjXZQ7aCw26RmZ6fg9vpLqU",
  "key5": "5fTBGEE5YDUAcode4MNaspd9fbzXc5Eg4uejACTsSG1TXVGhsWus1oaUHTKRREnFrbK5uwrPRuhV8D6rPSxFsrz7",
  "key6": "2qZ8JmaH2iUV5tApV4sjFaN8T23p6xacxDbkbCp34Ly8ahfjA5gi6YyCaumo7VGxtfMZz6RgPnsd12aVJv5nDaDM",
  "key7": "5Nq2WEoR9yAL9NeJnn234uQTn5oLE9nbMjCvYNsKui8UvEn9scReDJB4aX6XnaHdiGVcSJeiKv3N6wXaWwM4X3W2",
  "key8": "VRPZp7jT3BJhY1Y4dcNccLcHjU7GVkrUsVCEL9zQn2yPMkMNQUzhAhpTsBV3Gwd7rTbXNrggY2NacQgdMjSGvFA",
  "key9": "3yAzMwMwRZr3xxFYEGfTwLXHwQnka9PRLMjjfAMdCW8xETFJKSVop16pai9gHD3docgZdEpWS81h1hFYNmQH3w9x",
  "key10": "3ypVJ9aDyzTZyeYxmz6wf78cG4Nsr5NtEmsFXkqckHfzZhJ3PN6Shqmvgx6ZsQgeST36xnVTJTHEWbaSrTJgix2F",
  "key11": "2UEaatSZLSBjN4UJHsc9p7qejJES1UPZfht2vH4UWgo3zaqyW4omQEH53XLbSR2DenHMJ7VgwsnmFBzXPu1quxw2",
  "key12": "KQ7dojXYs5FTszTWXCJpoWnVUPeJ2z1U1bPGPioNF498cHm95PEidcSTCJfZFSmU9L2zQtZMqPVmnhrpazs8mJb",
  "key13": "3kegCkh5MeRVY7ccLvhWnrA6X58BofZascMUQXTFNmubQctsyAAbc97LXpXRoxurDuAt6xit2TarEc7PVjFgjhCU",
  "key14": "wUD8upU2T8VWmLa73C3aAGAccL7tin18tRAxJ4xobV2TGiFy29P5UzK4adUVEkhkemkKTUqtwMLQeLzgy8qdTAu",
  "key15": "mZ1kvenPmEeW5marYJhtosV9XU27sh7CUTMU6WhXMDDBgbSJm3uzmiXE9xbBUbcS3T61kaKeYtxEaPVnfhveqAq",
  "key16": "ZQdbeawSbq8gX8xRcps75p3GXSXH4Uwgdy14RzUvB8xdXdN2GxGq8iUsPurTszaCPXv1pvqHa6UT6627fmz8C6v",
  "key17": "3BvFEiq4yCZki93sLdqu9a6Tp9cwsRzywHNpQePNK9o3j1sW9FtBWFyg74fVdC8fTotsyxK3Y6ZLYdReUxdnvj4",
  "key18": "36SRzX2aw4TiX7t5zGacA5tNxdxFfZKrbS9nneAvVWNBHn5W6dkGNhRgj2xThXVkepGyYZFdbn2rGTbMfu6ch6rX",
  "key19": "64X67si2zFKJaggwMCcv6QL89cjb4jxre1qnHjaADR38PgWJmukT9MvPs9oDxsRjLh34pV11xrbKeeNA8TKWx82V",
  "key20": "4iZsL626vg5HCf8QMpDTQyRQZxLqrp3uWMamHm3CG7xp7LeVTN2frMyG52XwFXYo3A9keiQe81jz86c8GHCbfPPW",
  "key21": "5wDbSK2GW9rjv8WidEjKvsYRMmsKFX8Q3PJVrUTrkbWjdu3hAVf5AdGtyAvLqnip46xHCkCTCYqX9NQ6335Pp4Sz",
  "key22": "63VNMjPjGQfWrGiDntWZgBKdRKikjMSXVdQrGKtfiviLZH12WZGBvyuunJYxvfp5q16AHqYcyTyQjB3zqkpBwvbv",
  "key23": "2bwg1mSd2EL7SQXe4sBCNxZ9QXT1tQXLhLJDVciX2airzhFPaHLwsohzGzKr5RchektxUDpP12NkHgHumMkZj2Y6",
  "key24": "4KFbe5xcgivkuAu7XujgNa296XMhsVtsZ9T7TNsZqz2MME4o3C2Wpv2kn7DEsxzimcCVjL6v1rfNCT3pBt4obQwv",
  "key25": "4XpVsTMQrvfNgefzbwLUC4HhFjj3HYvyo65GzgHaxfeWuipi6aJYA3qcSc2X1KJhRvzHBXV2qiRwso4ATUGvvvoM",
  "key26": "2UTvtczannqDY6oMLLtKKDa9Bg1edzxm4mzvB4S4XB3urQiQsMEWa43PFKGJuJDBDDdBdScNXmN6kWNN51nUmjqZ",
  "key27": "2ysnGjf6Qr4xzvhckqQgPDzeiqgQpq8kF7AxYs3wXMEgptpRj7RXHB2x35vhuiu5saTedp7LV6JfUxghVQU7Tr7a",
  "key28": "4UDmwHEGQu9LFEWv4m3YRW7HSssrd44GgtJeamiHDjibnuXUoyoDHyseznkW1qHnnynqVMr73wDXnzX64S2kvyEz",
  "key29": "3TDSocswk2sJGhaBk3fjmop9ATNTKdR5ThDzTkj8YRFmys3xiUYMRhFQ1axNPMgoL4E6jCSGPZ9f75UM6Aw6se31",
  "key30": "27PmMyPRKbQyE2R1ZoHBM9sSn5WFooTG4gcAq1ndBAVLXEusKPRKEUGRTYC1Nj8NmFVNmXqeNzkLKLj4fr2hwzh9",
  "key31": "4xh8s3YHfkmH6Q3pXW9LkNHhcN1XHnUxh1Fp1JyefyvNZpdUt5poWjx5qgBciukVATQNpeCRKXiGGwGGKwErVvcw",
  "key32": "5DLciDCvq6SRdgmbFSbcGwgtWHHfCsm4ge8SwZoEJxUsAWVYjByQW5oR65VzVuGQ1nb6Mw1Kd4tmyaXCcWyHpLwQ",
  "key33": "37KaXabYLABfpntjbxGya3kZPxQsnwQ5GJCoGx14KTfnJHYTtnn3GNCGsZ1hUFnKsZUJdPGNBiDpNftURpyXhqv1",
  "key34": "3aVNq7wUfiJHP4J85HArdqYoJhLoA5btNofs38hgcbhBFPHkEhp9bisVhotAM86Rxim5MpvWDsRD9HYr7FD7wV9f",
  "key35": "63YQoXm4nCZsRE5zfjQNNsqZCyeSgrgJvbtZSqWenMV574CiSMCLqfY2QW4QCxXoFoM8UEiLTwVT1S9Eu3VE9den",
  "key36": "3rf9btv6BYpRwRWpvPx5Bwbdkgdkc33nfBN34dawv6LNRznEC1gnykJuGBKhewSiSicASSR5qUarJ8g5Hbsfbwp4",
  "key37": "42gqpW7Phig2qGL1DrDob3WgJZPwCeACVJpEaVfBUooDuwZ7Ba1MaffGnGArvcQecEdKpPNYYKJBybp8F7Tc3E3j",
  "key38": "3ymP3ARZHS4Y4KkXLH4hBv9WbNdREmqNZGfAp7pHg81WZuw2NBpLYDAcp5fSg7CrLDcxnUPrfRqpt67KDJk2bict"
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
