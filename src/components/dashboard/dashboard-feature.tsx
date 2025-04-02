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
    "5fJWtE3J7No2RVNdfE27s6ecNuXRCapoobGTQSxMXn8zqpi4z9zbVn6uVAiLQRnQR19GLRBneAiTzdymdmtCT6DH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47nCiUBVSUdi1caWmJbL51Z3ZCTaSR7oag6oJouck6b51fcAp4EzD7qfvdU1YuzozgsPhQ9W5ZUNSXQMrqeoJ4hg",
  "key1": "8bTo9Vd13yT2aXXFRFsGiPPqQcDcGUSQ6fb2B3W5gxNFCe1x2WZ9cyck9zuXQxdv6Sa692DTSNEP4uV2BSkrjC3",
  "key2": "5Qd8RqVbmmrEmKnfvay4cwhXzdCzueGYdL1DJfjvoxDDGPP52RoYJJQtUxKY2hVrfAM666pw1nTMuuGLhsA5yuV6",
  "key3": "2jMG89owVJUQtzuJtXBjEa8YY9XMX6wJKFJ9ymtm1zVEdzR4XmBPfhMA6SWF2YTdJFu5hrgsmgUx2yV9swjp7vai",
  "key4": "tXjmetKUX28Qha7JoaZgWXK92yDk7xVqkfb2kkR8dJPD8BMfkjxWxnFTzviDjiwGr1hR9SKkCGp9qqZvtLAkKS4",
  "key5": "3tiomyNu73GmxcxDGuTNCvzaTshgHGnYo8Dpp5Vwmk31WwhDqqcGrNbQDpyvTYaR9kq64zCCbe8bsFgm4QorxN1u",
  "key6": "26bSvhFrEegaCnifHnyCUju8zE2WVE2icXhVz62NquucBziAoj3eJABXD4ABndU381Ep6YRcyLWppSLjAQQiFBhY",
  "key7": "5a6D3iXMRfMRnKUBKFE2PYgPAf6LeXA9TrpHF5ViTJeNfJPaoKwfw7oSiJ8YKfMeXm6Gmzj4W4j6nc8Nk1shdviZ",
  "key8": "2JGxCWaspHxwiRFPQSABGVVy4Urt6gp1TKTW1YrcSys96pkUWsoXz5nfj7W277LQHMPthibBKsHQEyoMsrzYjxw7",
  "key9": "2dVS3oyvdRfKgGr62LnXRzoX8xXzvNX1WmMHm3nppb1pPNtTR1RnnJaPzqmvaqJfABGL97R4XHX1c5ukEaqNWMR8",
  "key10": "5fQdG2oDXpCoUuboURzH6dgFEbm4YhBZcyHsijPTRhXY6cJNSooEMDeBAYEgQ31pSzQuvFwsGYzKND2T71nDWQ2r",
  "key11": "5knhAWH1GSaBcgRBgs8FWi8FVLksqphguYzqABLZX1rX4dd1TtSMgNzdpyjy3UNSU1hBKMnkLpuah8JPzuDVMh5F",
  "key12": "4kbLGREiLHoFNXwFojAfL6q61NSZ9gfPeGUPXadYrphUyqXxNdShMcRTqeg5oSBgmhgiyyv9LW2pQRFDVxJhUngt",
  "key13": "vwVV1Uaa63HBZAQ75EZauTHWfuE5LwMoUz7oc5f5ceFrNBQQ8VPyeW94USu1rD1jATkBLBmsJ8vXDW2CsGgppPi",
  "key14": "3SaY8f7YkWNYSWCfMB56BbsNBanLfzpgA8VooerhxTuF4eibiVHDRMH2gJPyFRAAknqBAbTadKUZWMxYXDpoDUPs",
  "key15": "2qxaXBT4jNrsDJNbyxFNmhAP34dg1vjobnEatYokjKnNHv8bQ6bkk987ocqkXXqJcHCF4MCTkcvyBLCcroFGBpJ2",
  "key16": "4bXxuqqyVZbwJEUTUEHTA4oDfjZYebgTW8BF8PrB2VpaeUfPHhkEJPe1UYewk9bENmKPStKuDGEHfY7uz893CP3p",
  "key17": "32tTGQiMjh8yS7ESoeVGUKCFZi4vGhWdtqoWmRBrAQJsoBNiCmzSEr3CV8a43HCASe9W6EfegFZjjGnYa44PqmDy",
  "key18": "5AsFiQ4enWkMHZ11rHxkBayPveD27Dgqtq7V1RpaDShVwY7DFQaTWWkuM8evjsuUFDERCsjY3mwZVBSgdTxfnsX5",
  "key19": "4aBVSszAoF8UjgpSGE9npKyMYS1j9RkfEWeUvzmmtt7JcoY8i4ZNNvS6FyYFEwSmvYxTnnRjQpRY1QSTQL8SmnnW",
  "key20": "4kDkJSwKNjY2Rsymx499ee3e5hunJwgKgEd2gEoiMWWRYs2yBVw9FHXMWC4JD5HpxvfdHohNmvsU9iw4fnUorGzD",
  "key21": "jMQo39pTGJ4Jb5y93gwzuyiNJLuxkHbdPjbUkheS9imGJVu38FubF1ttSoJegcYznQF15DcQdy5tAZFYa8ztcB8",
  "key22": "3NMam2f1tJQcJ7AZKXr9YN6cc5972N3g8VGhUxJuJKxKqZSgAEApdBgjxjP6cPdJ1GXH6qna87RHMG6z6H9iRSnp",
  "key23": "5iTViJUyD1nxBt7kbe77XZxfHmrB67hEdfhKgA6biJKJczd81VJQj7JadmMxQ9TjhszCa8eZBJgxigatxfHAmJnE",
  "key24": "v376S9f63E1XCVXkmUA17F6w382JGW6ctzkW549EiU6iLGaEL2ok7zdbuf1dLD8N5acWBbRmWuBwZmEu9fr6U8r",
  "key25": "5dGGxusTY5GiX3dZL3NTmCUK6HDfpzQ2DYArCrqAEq7EJa6pG6xA4RDWC9RoLFmUFdNS8XV9r4MMuFzAUWkxxgnD",
  "key26": "423SUk3ko1Wuq6tgEEfb9LruEwdcy6MJXqv62eJBe8fJqQU5XNq1fjgc7DL3bijbDKFU3ynJnPJ6XmqY6cQamWmo",
  "key27": "5uFWNc6tzSkjHF1TNWS7DsfVp3s9hJhHyWtUGWG8Pocjkr3W837ttUQqNuzL1PvSqteSsrpCYy1n7UYCbiWMsisn",
  "key28": "4oKKTpSFQpQySWGXfEP3xeuzjPf5Nvw14xNtf5KnH2qxGH3JCzh5c5Eh92us9QkqMdQamuvxQn13rkuS4PwGb2Wp",
  "key29": "5UBSBVydM1i67QCnniWrpQxBmdFWhLYC7rALr8NqxQjcAhSFMto3CGXGQgPE1To8TJexhcCzVePHMin8upgBikSL",
  "key30": "3mbgbG9tGGCg9Te92pPktJVw8VZ4bpjGMARBQHgryVGAwcsUtqu4wk9PU6t39xkaJAu328xnppcsLGHc2vxDuRj2",
  "key31": "b7EZiPVWdQAro36RZTzszdRmYd8KNsjA51PL7rsiDRmDqifhxroG3XSxAEMNTfFBbmcetCJXDxGJVbuxKBSw2RR",
  "key32": "5Prz84uzeCUbv75SuHECNpKiJyxC1Uz75ypby39i96pCbpc8FAsaqU7ciXF79p5qcX6YfZi6iQWTBvM1qcKD3eXn",
  "key33": "3956hqPXXaQPG3sKtkuoHrA26HFAHp9xyUKxZ3AD7amxFBGRGaL7kTrBMUqFyQ5ALsCmyJ2eEf3FupoRm9roDi8u",
  "key34": "3xzVrb3ikYe4uD27r1YG8eTQbjdJtNhFHN1AcdwWTLQtRmM28L8yzjoJxso4BNdbJQ1M6AoCcxWPSxgQmGL8iFdt",
  "key35": "2JKLJKTA1J6wQyEKqQ4bwKiohUCVvTfx9fMFDrhFCcyg423UPi3xUwhW5nJGNT6dYNbGzF4bgH6av3KaoDHGL9EP",
  "key36": "5gYbuzYLpnjKfRoRu5R99j6tyLA1iuMsKFHW7xDTxKouK5zZyNX2MTE7pfJiAwoRuwvCgGcjTx4TgsrrzQoKFjjc",
  "key37": "3dSvMEUK2mL7T2jSd4qXHuMeGN42fFB4wofvRvHmLZ6x7WPZob2MTdRYWfjTTWHRn9ya5mbNvsa7Hvf9RTQ5uqqH",
  "key38": "4pJgKKAdgsvhG1HCQQ8k2CrdUdCtWk5yVonct7nguZ3iaBT8EqdEAu5pC35mcySy5DSGdb7z31rcXXJrowmD5Tog",
  "key39": "9T4sX1U5VGDMyV2DQCZFmbNucV2D2AEnZbooBTMiZx1QRN5g2oSnn3eszS3VDo4AVtp9NFHvNKqTm1GKMA9ryUd",
  "key40": "4SXAyrc9zgEYn7vYC9N1wXs1K8Zhb7zi6L1FhzCz2SFsYNQ9uHEzh5X6yPPcJgEbyvW8qLxq45zgk6VqZgh5yRii",
  "key41": "2Jc1chohXKhFZGrnckSKeXXE7nSQ38Piq2AnrAwEJHyChzJa6fmuJD1ocRHvMfTebnpJRf2kvhgGgha4fj3U4too",
  "key42": "2ubsAoVjMszjjkYU8mDp8f4CzEA1gykZ19zmXgD1B9Ee76BibaCty5g4NTGA3oDwvd8RskA6F4FGWMztgWtHwV6k",
  "key43": "3orSqvu4TV4sLM1sJay4m2nw9VUkUHJCvcBhn4stWFYJcZKcv4azyumE8aRaJux2QfjnotEaSMdzkexH5Gq4wTmR",
  "key44": "CHnDsrMQBWN7tdXAp4zeou17FHZbVjwLnzgaRo3M9A3fPiyxjicT3ApVR1MUXPgrCA4GfQUhv5PGLa4mdprFxwk"
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
