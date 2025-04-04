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
    "2CsUiR7m6118DzzKnbpPh4SdQx9K4HwFUwRxwSwbJyacG5YuVqHVRkETRRY6eXmJqH7K5bh7CLv9f48Ph9pS68zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HH4ejiZt2uz4sBvdFdG9emXZJr4dFMJJnNF231SXfKPdu1F8PLaqfMRyfLfpkJJs1XFUjf1sdhb9m72iU258nQ",
  "key1": "3eK1ThgJ88xHixm49RbCuFxv4fhMazmkqxbUEUHsAxnd8s2X9XwWc6cYa1yNnv6QY62YfsPMHzH8ZepbFvobGms7",
  "key2": "2M93eQeTpFY3N2Qj8W5R8MB9jm5EbEyng4SCxd1457aZo2QHs4JVXJVd7SG3zBViWQ6nyxgWw2JcjiToz8csioG2",
  "key3": "3UmqLAjBwFHMNNiRGhXxb3wnKLtJf4w6KquD2ZdjiZbLknmnenFtoSJPFPjEGL35CNZVd56cNjRrG6Q66G9x8VPL",
  "key4": "2frxxFhw1QW4N6JZqKeSGw3W5vNe3SBMfJGiAgu4qLLrEbrL28WnZ2thvWriK1jEDkLz4434fM5kvbUoDEtwe3e6",
  "key5": "3cdaYL6gFxtERYS7dmAzF42VqQULka65aA1AMmgoUoWkmAjVeA9Sgkznsgogppq9Z7yE5TbSNgp76iV3yBMc7FPd",
  "key6": "4EWz3xPnrtgVFbf1nF7je4F8nZTWrNsTiNkgWpkpZRqjHXTA9MRmi3iTKtPyUAcu8VNHv8YgzhFt5kvpzF3E4FZo",
  "key7": "32ioeMQaAC9Uxht6FuFYnULJc8ov5J6NEWTbkdHjLMpyCXYLWWBR16b4apKTUDcqgu28WMHwPxkW46hbfvnvMyXs",
  "key8": "2esPEZvxT5gjN1BHzRZkKUxMbjaCHNboehxR8QKsC3uNkA8j4t8TNmGtZWjsa14Tk5Zb8fRvooe3Qe5PvdmdieR7",
  "key9": "654AyqiQzuwnYewKcgAtAYMY4vfsn8PA9fuffytmGDJzPxJZXuspF1v8kMh42JoqKpg3W3pzbDJP67FZ8ck6hoUR",
  "key10": "5DtPtYagXYvMpFkoRQ4ysopbcEPKWXG8tNSnDZhnaDtFz8cbCbP7kmYiG1RN3fy8Gv4FptY4fojn7MMRJ3rkTguP",
  "key11": "3K5Fzith47XcRXJXHTNVMmKYoCcx4tmCJGLgyn5kEc9qFLvXBcw8Dun2Twy8g4iXg7VWgyX9Yk15kmcGy9UwkDET",
  "key12": "4DoQxhFgDP9b9j98TquLTFMRmRGGrUgNoBuXpq6hdyKxVvxb6rUT5iNsMJ2DmMZLRk29CYxAvgjTcnVCMS8YkG4p",
  "key13": "47VjBYRke3gqTWBrDzPkf7VzyjrQYgw9Hr6xNaWXPajC3CAhbqHkNnLgnE21J8pvRgH5q1Zxh27h8APUDgGfrWEA",
  "key14": "t1THMYqW2W6vXeT5Jt3sMDQR61Dmpvn1LqzEPBgaKhpNsRiJuA6gq14CtfNn8deSsSFHyrp8ctaVmFHAPHaX9sE",
  "key15": "5tGynfaaGrjcwi3eKqc6zKDPTDhnCt2UAr2Ej4393KjGKDHNJuWERBPh3cVrERTEFAXjNPU251QkimQnK4QTym5D",
  "key16": "X1VGwXFTK336HysrjeoMMgoz3k1PbDNcWSvr5QN9qrx9eR9pKXFwWUU8Tipt8evNLD8u3KWCp1rE6Lkrs1aNcV3",
  "key17": "3nc79UoRaV1CZSuupZTTkTj7fgxNjsFT34hGWrCSjrQf3zn5Mep9X1Naup4yeq3FWiGyapDrJqZUA9Q2MvMKY8ac",
  "key18": "HyuJDstPnu6zVGGPTsQpVSj8N8cv9SYE16g8dXYEgBTqeyadY2YkDtWpWnSZHfEi1Bvv4Wq1jwC4T8qpT99HQuR",
  "key19": "4pe4PvT3NHhiAMN2T8SfG91bDtPSM3vWUcsZJtN3ta4juXYjWrqHNW9CYpYr5hokBnVxm36PntACeSporjgBsb5g",
  "key20": "5BD3KpU1oFG9kcvvYbkWLPxDTppL26EergutHT65sGpNuapvKwKjChmiNcwixdNscsUioKT9WENYtYuXXo5Xz74G",
  "key21": "3G6fkCUBfddN5oZW4UhKorpVTd5nbseEfgGtLZdna1nNXFZTTbUpYvnPqXESwj3Dqccf6EhXuKy26wtX3TyqRW1y",
  "key22": "ZKa22QqgAmXjeNRScPxyJcXA2iptkgi4skvfTGQZVPm6Qksoh69TqP152JCTuCXUSxApJGKUQrHrBm1ZrmJLkco",
  "key23": "5Fh3X2EzGMY9P9Z3M2ahCBaRSLv7YK6e7PezFuntJhAcmhJyCT8LLZ6gWEGGbybfRqpeUNA7NbneRcVAS66uyLd8",
  "key24": "2Lv4m4QQarCjF2yE8qr79Ri8n819Fc2XeHq6girrbtKbZfPH3Gc8xjYuHUVAZTyAHEutXmc3DcxYNMKeQbHVFLYQ",
  "key25": "4xmKtaQK36QLP2Qy9RhzWoH5j83swVtHmWL2GatEyVqHaRCc18nnxn141C5hkrPDgWtoWG2w9VThDtRdKzh43uVK",
  "key26": "b48m42Q45Jprzhkh9jLyd8EpxoaZAmMmP291xywbDaZh1dzawEHDnfZXkFKoGgJgRgUuJBR7Rw3r6jzjDim1deH",
  "key27": "43JdkFePQ9ag4vPrbv2MVRpbsdLwYYWmiWukMUDcJTCYBBNCai5cmSTxtkhVtzA9rthHEtDYJ8y55wgdVPyYpzgQ",
  "key28": "3WjvHuha6cLY5mY6fLqeMvkzLU6xrpwAZk7iV4edtwyAmqU9xXd8emnGX5ztxzn61qDW5yV8BEs7EHJLYE5eTqi5",
  "key29": "5aavjfU1mUxRRXJoUhmkRvxDYj6tT6ki2B4Z9sRXhYosupFhfHSGP2vkXeMHaomtSigFV9cAtLHSE5GynvWt8Q2V",
  "key30": "2SqkrTZ3WqnFVfG6X7ezsAEN2Xt26WxVXpYtZocLCLWjFpJP3ZxKs7gDwMbuY7UwnrAhWX2tUpWwYCJH47EEHvuM",
  "key31": "3phRtbhbMjULfyYcXDFsjXLr1AFqvkuFHntuSSskFtbW5wdbhq9LWpZeE1zKgCET84qpfdokDyTpTLiBATg3cdkq",
  "key32": "2ojcRhfTn6Z2zQbFLEWhdC5o4q5LWuTMmPHYNMeUESy2agWY2FRtHjKtyvctRy3vSFTpdaqq2oHvPN9VP27XwAMQ",
  "key33": "3k9ybZxVQPJaWDFdQxSgJ26fYAdeu3aaP2q46UAQYKFz3fxWrx6N9ZusdPBgM9yS6Tw9m5GKRgcM5NUA9ztwYHX",
  "key34": "5P33vPiMdrGFM3mtU8fXf8CPjRCcpcVEujNdfSeFxiZwi486ZFiG4ELdRfzFvPvhR9C82KEzeTioYZ8rtc2t9akw"
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
