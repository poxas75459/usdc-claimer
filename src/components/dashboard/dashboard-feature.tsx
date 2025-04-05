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
    "46ABiHYwUWZ8iogxQtS1Coyk19Ztc3yEEuSqrdYhAFzLy9gENciJanRvxtfb5U5tDH2mjELPnJFQBNcji7z86V2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tgLnpyd2cFAurFM8HTxKLMLTaaup8bBWMQeEnQ4QTczGVgy834WyTqTZs7qjkcF8JYtDZwt683YVC5M34qWtmY",
  "key1": "2orFBWMGKUU3AjYuDJ4SJM38dAsczrAvMvsmtRmVqgMnAhcWZ2P9C8oRByz2A3dUDyQGu464JmkH4zUdfJmXJqAs",
  "key2": "jeXGRNx1PAVTmHiFYXQLYGSdrNwjeXD4mFzeKSVwrqxQT29VV3beUHsvoUxK26Yv93LmAWL6b2JY6AVzDq7389Q",
  "key3": "2ZAt92D6bMGmm25z7auzsGLVzTL1ap16vUWCfN3Qb5ww5PRFevS87uzx3Hj4LhzzTy7QbTipT8fQC2riLE3kwxs2",
  "key4": "4eXYsM99x1tG1CVtWqstbxzd7FkGYiLB48KgLR3odTgsdtZpjbMyEEeKMcyp7WmpVMqaFNruEkP4GJVtRrsfbvDz",
  "key5": "2aqTMn7ADSre98ddLMrskiDfiLn7YNKSA9CffaF8aDdBUCtLVnhFQsihAPi41hLiLKCyqQVFUqJEeE8uQ5ewEREd",
  "key6": "2i4s1WgKJg3aFwUtCzMtgabUHGXZTmPdyAzG463iVv4k71ZmtH3ANGxAPRiVm9pjgzhmGHVyQQc8uoBUyfiPrASp",
  "key7": "3bBf38j6WKnXubGo4EXBMLKyAoJ4iddKtMhFKw2MnwBM1WyoCtsfY9ewtNTQbgnh1oCfbG8b8D7JAM3zrhHTUC9D",
  "key8": "2o2V2yDHbU1JubjagdexEGxt1trxesNx2WoGKdRbkbq3Akq1wQ3z7RBnLcPBiia4Vtu3xHQpyHhPS63aQxFS1ETP",
  "key9": "2LK62rBF4dNrn1GzccYkVzugEXKxxb9T6pFJNnZ6PMxvygtSNQdDbY9bYeuyTcPGoHW5XUpwykpQvqkkBTF3LCfQ",
  "key10": "3FmKvVDbgpGqtmyg4XwP2AGHAGZkYfJbXTecW6SjySm3Cn66uPNBg1ZXnn1dFtnepWxNXJk6sXgHLFrTXSnj4eLu",
  "key11": "2yQYBm4ta4bEiWHHbdPRirxcQ6wPv4fpS3DB1gNAEPTcAvK3uBB4pY5kGbJBeqVFpw9byTeA9Eyo6ojcwJAfwxnk",
  "key12": "5v3gDodAvU39CBRBaHyAq5xTcYLZkbpkpQZQ2SQwcrbaYeTD4MXRV4Hx7A4CqsCnRErsNiMBhxvGZ59LMCS8jDvV",
  "key13": "31NDuC5XXhREM1SmNz9UBgQjmuF6Q3mtHuBcLVsvdWcLACvgs8aJDgR4oD8WGHsntypZepuEsWqNryEReFfmfUXZ",
  "key14": "5a6rYyhkPiHWATLLUc8j8RuFHSMtjFcq76qxPHCUUU6DCHZkb5HmsVSBhUVkwjEQmp1bVtQ9b7UFPLeqpKvQMT4d",
  "key15": "2t8h3nND3erZix8CaYvDMTYC1UNjbEB5qhX5zgeggktSQVVKUFHh1HPkQY2T3MnixfDwPagy1qFsSpTEzxpuFScy",
  "key16": "4SU71de6fgCscnCHbcj8ycR99XnTLiJYteE5FteNYzQpaKM3Ma6jE7qwhhjv8D3i4JBVETqicgS29YugM1Co936r",
  "key17": "547Pq413r72Vb8wrdjMybrTgpG7sEbMDj2MeCFec5qMxeYAy4vQTKLpEvbEZ7chxKAqum6AjDXMqyEvheRuHu9Ho",
  "key18": "4ftsTNui6hgi7Bt6MoBbKrK4n4mJQHf2XBBE4XWW3co443BfoNccoUcJCThXB3tZWnfdLnMFXkYdEsyEsQBxLmsU",
  "key19": "22kiFvjzY36iuJK7APNu43r78jUEUiMX6mnckGVoSGwzuSL7BakzTEQ8Rf5NFToUBaAcFaYsmv9fG6nSTcAmHu7L",
  "key20": "3nUKzMyPDCpim7hVHUcqXys7eTTLerUsJGpE97carGW2vf9Rso2Be4pRUAeTGteTp4BpvEjjNBuMsHHCH1THEMEe",
  "key21": "2dBeH2xN5zjpQ9nAcbVKE1TX45iK6EAfPhPzrN3XQFMe91f8DzazpenvgnikQxMjmimN7CbXZ8PdrY1kpwZTBg2w",
  "key22": "3MWEyjhw1ngSGLiPA54mFGQJ3GuPmLSe7LoTDwzPooshiug7QYi21oWB64Pzcrio9fo87nV7jPURoeDNcufGGnnt",
  "key23": "4yPNhsXcbQPPKfEwsJiUF9niJopQ7nsoTeueeP4xPoRPp1CLKwDciTU2YjRabyRRVrHqD51vZmi43c22swZrCx5J",
  "key24": "384kUrtfP9SFLKk6uDXnR62NbbVgnzitL434LpXwd8H997w5xT4EFhksmnhcNxBqFojzt9Mrh8fPayTPZrMLD8oA",
  "key25": "39yEsXiFMTqKbaRVqx1fC8tCBg6Y6KCQ47rMcL1XdS6yBA7qcg2UTw1aSL84qBCn5H5UgeqY5BU5tWChug5939FE",
  "key26": "FXvqAEUfcBf9dxUPChZ4N4s6Pa4QNywqkc3i1DSAYarQYJxKVbzwvnQrLgLg4bB65ECm97onifkY1TJeJJq4D6p",
  "key27": "5ZnYNyDHZu7NdR2E4VjRuxPoUX7zZhHPtB2xSfPaKgLKyzVvLWaSdBoCdsmUbLfG5vCkNaEAx8dvYnHBwyg6WPzx",
  "key28": "9Z5GBGnA549mC8YAwRrWV3ggPLAc5DSXZXrJQCyJ7iaUiwgPQGqPxdCvJ18b76LHPgbhwcveXFRLMj23A4gLv2s",
  "key29": "tTqPPBhJXqozDmDR9vMu3thkiepChtc6HCmXJGQ8wF5Z69QQvCjHQ8jg6JnqDmPznLpDzhgxKoLrJvWfwiz5KqT",
  "key30": "3jF2nUevAeRf4gNpoJcvKj8XVRnhEesFVC3nmRgrff6uW5QHKvBzrpbpTWKR9rFngfZ1PhSW83NYnTpVdt7xw7u8",
  "key31": "5ivf2nMNM9uqEcoxtc6CcV3d5PimduQ6kgAVwBYA7C6diJTQiPVDjpyvumZCDbbCCAoFXFVTvVCbxMZ8JiK7ZYvU",
  "key32": "3Sb1m4MFa9YFVZcocn3iCq2DsGoNYGrBUYN5YGDsFdZGHZ5g5GHounqNbiaKnc2JSuKwfMMoW8H7wZPQbem7G2Ls",
  "key33": "366J7E5SwWkUwUCcam9nQYu1hRXXDDTPeZHCtvywFwe8wx6XbWr2sR1hE972J335uyCzUNWeLgVwEEva2ZFpMnTX",
  "key34": "52rUknbpTKrjCv2H2ptSXyff7FKaeSxkF6dtHxUXNfJchbbPYrnuVMM8r6MMwNyPDbdkGnRc11ZJ9Gb4kZcJ4ekN",
  "key35": "3jPeSMQqRzfNmGQdgyvH1ZdFddwpWcQGTCHSy6ckXx95HVnzCsuwq5yFguh8FMYnJb5EL8yqv2pYzHA83AeNdeXH",
  "key36": "3T98gXcSg81JKNxudettSgUNuzQS7YCJWU34i87qEYNPhjCxVpwXbCvh4HziFs4HNAbkN2zZBWpkdPdfgJJpjwBU",
  "key37": "5dba2xyhThgXDXed9egS13VmriEcjj9KvAcavQb2MAViT3yLuTEfPQ3QcKwobH7nJ8kTRuFZMpjKFxVSoZF59HWm",
  "key38": "59hbuFEoGcxf9nktCLbKkERrUFiVU9d6SktgoX6cQ13jPBtqdYfdvNcoJiDFhwtwn8aJAMQdXyiAvLGhPFkMDuMf",
  "key39": "2x25BCdojPrh6nM3UbsKtWSyeycRt2hpSqRejRjFTPypM8AYACQMWepUjhqXAApuo65EV6fjJNJyaeNQMWgEY5Cx",
  "key40": "Je9kjryNXLNNN9kL2xiayPrWLRNonrme6k2FPrtBkBLLPcvPUCbKfkWHZoBjBZ27j2D9oiwjw4TRMSguVDGXowU",
  "key41": "5srzsCgVk9VFH4Lbug8aFRKPS2QzVWi4LnJzTqbGwdF3Ug3X5Di1jrNAiPLFcoPrV4Yed6ytp6QpkvF83anxG85r"
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
