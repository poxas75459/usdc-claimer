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
    "4rZRVa73mfp6YkyLt9ybrfP8Gr3p5JdPH8WJz2Z8Ap4Zt5yG8Ln1hYFsdGL5FxkXv9jCirosteCqzNLjLc9NDnL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37bcV3aZrHUsSnaXDNF5xosgYtLwa94yjsjTc4MK7ur5yAcuvtRwVDGBHmPrBi1rXsKFB55NZKry71ACTYuuMKTu",
  "key1": "2DFuTJLaazS1cb2U5nWnrs47K11ZmF5vL3NkSfpyPpfvaFMDQY4ys3ReWf2Py8KBRMwdEnWLbyqXEpe762djMwPz",
  "key2": "5cb6W7cuQt5mbPpguYVmtQ9xppSqMZZBLy13r7LhRD5JeBYfk2fMngcKhUGmw7xc5v8aWHFBgVLGPtSF1erXPzin",
  "key3": "5C6rXztqpwsFBgo79KQAQBoBpD2BCjkQspMeqcpK3pBAtGMTv3U9AN5wMeYcwHs1oaFdqN3LkhtLreBFEoui8wTY",
  "key4": "4Q9AJegwHYh4BNKGEyrZ5o1Zy1wApizpsAuKz9dXb4rtvLA2k7rc4nBTCK9hoZx3jJMyBsmPGCMDMs3N9yM8PfBs",
  "key5": "3R5sy8hZ9texVGK79Y8JLPCyqvs1KU57gtxw16Z4t3HG5KMFrrHcb3ef9PQQUpyfZfypzz4C42adjqSJe3fH1JRL",
  "key6": "63UJz4XgZH2KEKvchqRxQrcjhE5JXJFYjuzmcVr5iS36R6qoX2DZBkxS98CKN2ZAwzSGNqLHVpdEf3kQ41Fgq6GV",
  "key7": "5CqsdcY847V2ZW2wbXxrPNBQJHpcih7WtA9cVGQb5RMzcAmMzNPR8NCX56CnuJZdMadXArrb8CV3UB79txMGczq9",
  "key8": "5bnYpiFQa9Jcnwb16LHGMxCCFkh2811Nf82xNC7kHt99gWrTEzSAM2XjTJq5XfJiY5TFsBNzGEa7THDBxuoP7rvL",
  "key9": "3oPtEXKX7SrrJGbxLwQH7fCQUuTyA3qNNcBVRhL11qLXdoLXW4aWFeLUyxYLD3v632dh9XLJ7yGbYW4qutCu5Cut",
  "key10": "21UVpwLBGXM16beG9QTaeWzMwgjpMw1mJ5BDUp6q5YYRPbRCpvy1Yjsnzdgd83y4uKNQdePs5wgUaaM4CHSLfYZt",
  "key11": "jCBTd1azGPmkPuvseCJprmk2qJJAebmkVUTXE6CebKxnWftTcv6cbWXhzN4XJbhfnCydy2QciczbSzL5iCajtnk",
  "key12": "3awwES4UmQrtBEinsRfsaZe3TZdANYCp8a2vrGaZfYz1UG5N2QxDHZ7XfScoVutemDuJLX6a6nRiFJS4PJiW9jYi",
  "key13": "2fFJRAAAxqExPnALcaWJBnK8CxAFUNz9rDcrYzKiZWH2py3ZQzMoDuapjPSWo935tYiVfT9qjDcteAPZjgtMfcuw",
  "key14": "2kvVnaNwW4wEFEBC3VDZQYVX8oPn5EvgUbR6PfzGw39Nke4gxRR5E6qJHepD7guEWu8pkaP1yKCQpBsZYpDxJA6h",
  "key15": "9XyijM1pHm7W3FVhN5LFf9T1aDY1AKS4yzWHCHuusCVho2Z2MQ7vMXCxwRaXhjXnhiorV548M3cRcjPrfWpkQWg",
  "key16": "2HMN86neryF9ARdfSV6wxw3g17rUwnGF5tjapV3h1dhXbYo2hte81jk11G8hBTPWQWjf12dnqGrjWZe7Qr21cnwX",
  "key17": "3PS6fLot28Sn4eVT1yuJemjLwsdEP4cezfCwQJniPd9Y8TAs4qkjHeqr9bHhNcqeKqj5SvCcMWd1yFWN1XrfZmpe",
  "key18": "Y6TdywhnrR3XYSsoZJAiex9T3rXcmL7efqCsrmJX3zZbUiFtk41T67L9Qv2YoWez8sZe2PbPuv1oDN7NPaugYnr",
  "key19": "6gbyto7d1r4tDtb1gHS5cmVwzHGnYRssXDtNLsMprsxdFFvAZ7hXhvMCXWypYMyWe7KeYtDFmgLTFj4zGZRmt6G",
  "key20": "5GPXDzvYbu58vCfGKfTEd6hr3X36hveBiqamQeTEhoWYiqZjA3xCfX6a97Z1JkbrarVSzWyiHy2LduKoC5oqLWQ8",
  "key21": "65CDuqR6gaeAYTEVULSqjbyvnp3dC7ZHtQLxEDaAiHj7YZP3B2R9EaCoHXVtMuT2vqMyfBpLK9R3Wb6BrZZwo4Bs",
  "key22": "5K4cHus4jg7mHTorJbV8FNmA1eSsqkxDHHh6FS6ZiZT4tc7PZx8vw76ZaU6ruZbeaZknTJ4pzq35zZDEhzcvLSU9",
  "key23": "37N8RkDdDVs9z2VBNiDnkFYBTfrwbCBGEuauYqde4DKhSFRzhc9mQAPpVDDuP1pTQNoEdfrqqjbiCSPS53D4ibJX",
  "key24": "621eZL7KrnFnLB1FXMWvdHXRACNAoEtxt9y1fDVUM7BpdmAm8D89qkncRA5SZo815nd7i8fRstDnLG33ZrCZAWxX",
  "key25": "P7AS9CaNGj2Bnrp4KGacNo6RcHznavE4mS2RFHvhqdS93e1c24FgY5xLdFjzR88XeNDgewWa9HfoCrD8Pnh2Jnd",
  "key26": "2UMP9wYWMbPchMVjj9NNJPR1ixAV8HnyiWBTZGVSmi8JtQwTqZx4csdi1UdALzeD8umCYTdxzTM4GEahwTPKbybm",
  "key27": "49yEW37HFzUJwpXKHR9T6UApcX8QTUpZcZxcEeHSMQW9DBb5PBZxwAqRMH23HDPUJzxUmS648YYMA5HbgrfowMoi",
  "key28": "5MkwPcvZN2J3FBSzZCaTEdjmLhbw3pVYf6ZZ6apw9Ed39ZPJRqRKTixB5YtEjbZmfmtb2EnAVpDyxUTVnZakDDkm",
  "key29": "4rtGtqfCRKwTTW8Lwj92fzPxLhy51GrSWbytRV4w993542FDKr6gdC5XUYrsscSQe3KfMZePQgfstSPiUdEn39Qb",
  "key30": "31L5vqfcym3F94geH7nzdch8PtDHR6UiRrvNrj8TiZcctY1KxdT8CAEM8yVvMZqjNYFbF7f7RciqF2ezUDYvHyqE",
  "key31": "3d2AccTXeJW5L92gpWsAuyRKqaLTCMc8fNFmWptVGVJZSb17SfrScbqfJCcHTNTzaWyZshpr1KFqoHCthYWpBora",
  "key32": "2MpC2QRD8oFXwS9YqKvXxUPbUxLqHHQpTUVRCUtEaruxiufqsLKEWbHmZ3g2e6JRbaCGLc2WtH5PGVBpSSbxPHr",
  "key33": "31bqZBpsVTEZPdZk7zSriWRA8bwAbWmz5Lyi86563KTsQfbsydytuTNs1sGhdztkGZ8whVLpYGAbkDjktSxrBqRo",
  "key34": "5kmjvEY39JN6iFCdxCY6HTSdnrYXKVjY6ubbintYMZCuPQZ3KL1qQB24az4sBvp4hvbmiErW9upS9GeCygpDfq5R",
  "key35": "5mpzcBLKLoR96C4L1FBAPEYBYj5SMHRg39nLRgCmGdve5fMsR6MBZ57Cv3Pr5f7WCbsZCyrQTfMYPiJVfLxnTEFP",
  "key36": "2bKVrkYugMNid5ngVbi7QDvpa1MXN5CyYZKMtrTMMyDW5AL2pAAZPoaSGBDP2KTR66kvS7s85s5XWEHb4vY5QBk3",
  "key37": "29ffoBGLMLRvD5iTzYFczsih7iMF1raVoVf39L68Axn4Ew4cBCBWukg8ZHQySub9dsuwKCGcijKTzNKcV8t55ma1",
  "key38": "4nGFS6bUAfMRHrVTn8jyPPpnzidpJhS4nSYjGG6CzkVtDUr4EZCp4HGwoXeSssnnu1GWR5NbQKGzy3twrFiWBi4v",
  "key39": "SuVJYrzVyfVNMXAnFyMNENfB1eSSSb5mTfbARQkqeuEyCLVfG4pDbNVjK14wpUX3fFnRfZBCGuV9VuqBmm4KRgk",
  "key40": "RFQXFFL5f4oUPDQfjZTKvEanUZYLjHrrXAFKgN4p5P3S5gq9fXXpHr4oJtNrRpt7dtmrP328W8RKkWhBDgGSHkt",
  "key41": "5pdUAzrG4bD9se1GBgmJEqYDhg9MGxQuZ5AybrNVc5JfgDB1ijQwNtnL6T96jJgNynJ5yJhFUEYpcQDz1TTb71U7",
  "key42": "4NYx3M4mp1mMqSc1AwEcL6Lbt1aQSiJmVpU3QPirxDkfk3h5dL64ZXszPfc7JwcGCBs3yt4eZJsQLgJbNbmXP7Uv",
  "key43": "3mM2VcvuKKRynaJNGGTjJuXChM32zzy5mVkwx57mcUQnsebhnHapKyeEaE8RsDiWRtioTdzkJqano5hmjZJsGDAk",
  "key44": "3jdsdsdZg2BjLq1AhiPaDmKrnfZVMEAsPQ7pxQaYn3LExLPpmUXUH5HixW83dsESD3AsKcKVyaGfUMRk52mz3hGc",
  "key45": "5wqk3bjYDM4MwmBnMNq12uwAEQczk2MkRpxF7RacKG12F2CcLzQs8pSY1gZpr5NQtwRhGcihfNNu9HV6CzoDhK8Z",
  "key46": "4MVM8tpD2au7WUgpHrgcDAW6DiiEnaYXjQd8kwBHh833EB3g7wVCJKyFAfYPjio3GV7kcw1nzv4jp2vqocmhQLFE",
  "key47": "Eka1htQo9XovDpA7oJohUDtomrLzn4Aj6k16iZEnrAREap2eaMFg24rW1KxQBsYpeWF2WfH5AxRTgTWT1MrcLTB",
  "key48": "3QQEiW3iRhc17agt8McLvqDZeSr9Xyb4SkSnDTnmSMYgs395xiDWWQZ3qhFwsx1BfSnPnxJ6BWdu3PiRcpEYbcdn",
  "key49": "4GR65Mns2epPNxnDcuGSHLr1S9H8JEa3DxCApBjM5xqGNdZJ2cDWNune1tb69wef68q1Zo9SKe5WdM2XPpXqXxZ2"
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
