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
    "4E9brb1PCQDFbwuteuhWbUu5ArnJSaFpEyLdybbGrTQxQ11fkvD7aJgjQWay7vWsbEqqjNj7sZPJWtaxdN6Ww6Hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wk8uDNv2NadrcGrS4rLKZMZDNPAb9u5yEWgZpSPAxqsxAdkEHaQXJwzq1p6x9tH1B3dgMrMnhhEn8Pr77QDEm5C",
  "key1": "45kE1r7UP8dnqtSPa3YLFSUZ9bqHLbkWka1MKCaPgzRBfVsq9Fq5tCvZQd2Z3GyG83fnDmsmFzSjPwPJKBC6uU3T",
  "key2": "UPUX9erauFrvpSNVNkZqySkysetjjDHUzSiWQELw1tTzHtyQdy3tioqj6gBUtPuBGcfepMVdCsqtjVGvxKMDT54",
  "key3": "2vV84MBRLZgM7sDFVWkNfE2cFHfGrvxSfMtR433Zs9SoGtDoWoT33EAM4L73AfNkRaQGxhpdTyQAqBJhoCxRRcmi",
  "key4": "5dM8Y9F51EDXmTyEUKv5EDScbLYVh57mX9jmsoXJcMgLEBtCGKWWZzRVaYqQMaAfRqDpwnfENX7EQ8XR2CU2c4Xd",
  "key5": "5Gni9WDUDSetLyihN6qPD7cMJtDWeYU3inASqfGPwp59fNWsxhJW8SfPaEawHTdRo9BV9XgaaUb7rnmXNuaCCr6v",
  "key6": "3xgS6oVLuWNseqc47jSpgaztVbyQiNzkbeUz58z6wCkUJB1ggZYkiE7ZFxbyHg5C5xMjEztfjhXKMK9h9kkBv6xp",
  "key7": "4VP9Theqa9BjAMinnLvjEqBrchkFKhVbRtgCgadiUvnprTA1hwhMGn43pUYzvsbfxWTDas3pmvscQbrycTGFer3N",
  "key8": "3s3fkoGkiDhGtx8GSzZGfL7tcz4meRqjLSxKuFRzm7tBAmWhhPzbrejK8FNMmoA81N5KKTR1UgmArRMYFDHy7fq8",
  "key9": "2W97kmcgHKhAa1589QsSdjBo3pFbWLVPtj5DYstgbz4c4sQ2eSNtyLbPefXmiGFmWeyWrdjUGUCoUh3cX4kUC6my",
  "key10": "2rq6qZKtTn8F2nJ7nnsW1Z9ag5zBri5dFd1VXUKLHaJW22VBRTzyoFJ9g39B6NGP5wKBVrsE4GpsqAAjGG5ybz3c",
  "key11": "4vfbquop4LNmpLUQdpr1NegfMJuhF9yPt4fDX6SbNSJCgc1mKLWhH3aTibAr7ZKyyRHJnhN2nRc3qgZMGkkPfgRZ",
  "key12": "26yrDQDZAVS9XRerafNq64eyhYHhFZ1YUwjA2LtJhcTQSxzmTgVQGqPUXdveXB1MzyAKTJjuTCqPp2hGJW9PVayp",
  "key13": "3N3Kc8L1q4vBuk8MhkWGguLDJHnEGb2QsGoBcguNrywXynRw7mawZZF7bRD8GsCiDTxr3BBQBFpVAmyHSMsJ4xHU",
  "key14": "2F7QTBA5J2LouhWZokJHwDeSXVQrU2R3xAjDKdZRM9iUH9BZLHnraTigZtJLRAkvyEqxEPqYkGHSK9MFyizKgHGV",
  "key15": "49rHuav9GipXPfgsYJgiW23KD9m44MGk87RBkXsYn6AwCukT5HEvAWzCKj7bMw8sAoFy5QLEJqzUgBDgpfjXwvyh",
  "key16": "4M6DoXRVN7vBeRXhuZSp3wJyBTSBdV9kfMcZknxz7sxq76ezdLJBdK3DcVUPxnMVBSMd1Bnsk9VMpGXZKQsCjmt",
  "key17": "CeVfncExhLjTLnRUm4RzRMkRWATUX48XSwbru5CzwFvf3gmL7sqWo4aTGsj3ezZY2NSCYpD3Dck63CTYFNXhF1C",
  "key18": "65F26fjCMqBfKGmh9PnBVcqyVD9RawgdZ9ffCsHgBRtso8cDCsFc7H2CGXtiqYPPSaiWkRebUcjWpiV3ixSJP5aS",
  "key19": "3bLzzWjBkHUdiGLvEXgqrozxGSwEeTnFyk9oCJbRESXzkXPptbQ2uHEcvE6DmkiLxcdocaL9WxAB9YuK8t4Ly6Yr",
  "key20": "3TPhUizaLGUnCK7ooEfkmiYuMfFQE4XudsZpzvzFK1LuZaizJAAXYeNAzy5pSo8LLtVmFKsdwPjhTSRWk5us8G6P",
  "key21": "yiJBLQLct5mBsDK8fuSdSnnAy5YeFJCQYK6pQBtFBDvR13EPErX6byJNNtKS6bz1agZF2e41B9up1EzPtdqvLY7",
  "key22": "5mVRx8VY2AijkiHugeqnDjPYwDHCzWYcUoHYrFSdGJJ3DM4hecLhhcDJfCufZjrDZcDiNuckLruvAg7tqzdwuf2L",
  "key23": "3mt5X2AcH22f7GWdrStVSRmeYKSSgZQiUgySaVYHP2WxqvynD2X67SWdazN4WNcYv8hLwocbMeFuVEc688twMSuY",
  "key24": "3ZiDgJafn29NqmzhZAtLVQX6iu6SCMRE4Gb1q8rnDsYnkrsd3svrJVb6PmyxyMaV1qXsKekDr42kcRseGWZB9NvT",
  "key25": "51KfEYLzYfSxuoULzd1F14M2BmzPip9jymbNkuGyVh9qM7QHta5PhDavBL8i2EtonR2TBPUFsjeN3DgyUHtkpiBw",
  "key26": "5uvZzpiZvNGHsAfBwzeAohx7nuqeMKqZBswL9T5czVFrhB2xt68Gx9ZxigJ4jW1RAEwzkWuCX29Ae5npGJXoNZ2s",
  "key27": "GSpPS8H5RnSca4ozTbicgH8qXkXFRauHGHK1Vhmxt4trGmwd8TAG5e6BWoRJVAytJBRmx5TeYGRuS8mbHYeTNd5",
  "key28": "4ai9VhoXunawM7F2fLkQ63qqBXfQW7czbjRLmm54VcjqDvCwX857L8DPtQxrb5mBjWSvDyHGhKTBMocitgnYumpx",
  "key29": "3yKyH1rLKHQtibsL7h8rerUQZ5tVwqot4pwyGSNJ7GEZKAGmERrvEjCuCZJND2SCCc4VhAAAx2nMmiwSJ5czzFPn",
  "key30": "6Db6NUDHYXaXijrce2hKhw1YmDUkjs86FW5yHJZfwLuFcZ6dNDQWUnpPF3nQ46k8wPgVyPXPm98S8nUiuhCnzBS",
  "key31": "4isfxq1eu6Es9f7NjYVpDX5U6XFm191K3NcwHsJKCkhnLbEDXWWfEnhspEKaRGN1QUdM6Rby9g86CkkKBwpDZqtn",
  "key32": "5nonfzAC9kd9mAzNyJceQq7ArmL7Jo5WM8N6vi1Wspun9Q34Vt98HkpNUFH5k4NScXBr1Dkzq8tb6n7gDEzzTmyD",
  "key33": "29e2vVsmESatDGsMrJVeJZst4dj9Me4o9XTVrfzDzkvBpmib35iq4zvz2vmbWLdHtiaNw9UnvKMLRMJrACqXn97G",
  "key34": "vpzKUHLNgRafv3YfG3rVwY4w7SfpnnFH7MHFhWkgzCt4rVcwhKj8fTGpw1Sc2BTLP1xTFqL599RXRmPHxYXCEsj",
  "key35": "3cST93gwnHgyCBQ3fdVs4W9iz12CVZYoYmYpTmEZW3Y3RCJ4coggueJ4cyqHnwabM86yFgu5nGcKSeSiwNopWapu",
  "key36": "3rAnyDWSjFfAHQMP1oFEHV1drHCx8AwsBZBySYBspsDEYMEgggH2hkbiRgwBPSzpGLR6epvysCqSriJMipBsJMV3",
  "key37": "5JQhfXERJNBQ2MorRcpzSV1bUwHnF47YGZHZ8Ez2tqLET9DGWGyT4qyCSp6JPmnxUVz8ZPJkpp2oW2L6pMBaatiA",
  "key38": "5DHscUV41LmgyDvM4tKzxwbw1VWfToz9oYeFQfa4366gzEi27JLyL46Gwvg6XermcS766JBcikuMRYBExypPHMY4",
  "key39": "KborC6HWaJPZSgsLdbH1PuXmjmRdGW6fuDUNUs75d5dUmWb4Rtiu9uXXSWzZ2WHV3bTRfNrtfMpQVEQfviXrc88",
  "key40": "2a3xzemqk7bJxSvgJeCxKkDmWpJcQ8XRRZL3h3Jr1LwsNE9VZXLiV3WUzw7GMbEsMzEUAfHUwnATDCVfy3h1xUSD"
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
