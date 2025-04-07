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
    "3sCZ1v7j6JdxocQHoWDfkULGmXnc8d44zj6tzNecYir1Xkpf2dyipmtwRVP1v8dcMd1KH4Qp1g2ZRAoCjzTE8ZBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bnU6surWwZU6i8dD4sAvFuYPMDmmkA7imy81fHDVsxEMtZSDAdFGCDRfpVpDqPjMMsJ5VGZ9DpPCK41wPYShE3d",
  "key1": "3hXzR7T3i1JPBWbhCCNCvzMiFAAtef5kPU1ZWUiebLy4iizwGn8KEVaEJhsiL9Cf1567UZUNEzFxFEeXCn9HDw5v",
  "key2": "2KoPcaMZSvFbmNWK1D5FysMNMV1Tk271Q7172MdzA3vhFBmNzBoCY64843Eevnkp2gj6UYHc12oypKFosb4QgsiE",
  "key3": "C3TNndrjN71ZfxPgYL49kgio1ZQUgH1vinx36pqbgmXsMRwkeJf8f11RBmSKFzUojRxM6wA66tsc994xNZaqXKt",
  "key4": "3GL1nZSZfqoi4jE9xrjbjdwyKTn8PW4RUgNeKNiHAUgp6EwPUdZqfaXAKM69zKbZT3LUwRv9uKhcSxbQpN8wrQwz",
  "key5": "J3PHrzaKCEACm9qHtyHfiq3dteKDT5dUGMV47ixY4AupY8ymjXrz6E1hajs785eyC6toQGLbN4dPNvsz251L7uw",
  "key6": "5aPxGGyTudKkYrJe39rKZ5LKJHsUkmVannNkiaUMhwW7NzGBdZuGeRU1Kix5tFDzC3WWkwMrt7hE93uvdcuUMwWQ",
  "key7": "2P7kJskgQFnWiG5spcDfroK38epjmwtKBtEWd14YRrwm7JwtxKG1d5s55yFjBaE7Q3i8736jpLxWKyze1DtVeKLr",
  "key8": "4oTXLDUuSVdtDs3ZTd4PuTAfxxTDjqPAV8u32eXHq3jh32oEF76sXJb6GrrawpiQoC1uCjEbZ3rNLks83HsFAXMX",
  "key9": "3GPn5xqZzhRc53J9Wt3f99L7qMCAbiUpjoMQWtJpnkEqTtEvCQkoWCmTwKAcZihUPcgQXWr6mQ1MqsUoZVFsafNh",
  "key10": "2sTknMufcyRUWyGgiBtCna4RRsAWEWDDDA8Cr1uvT1t9xMCFndGzAWmDKa6nYGbfP5P1HqjuuyDfuGbXZNnypyUC",
  "key11": "3KrnibkGwgcJsTT3mCLFYratvvcKJbLV5PUuP4aixiFtfaJVeB6p1P7YECoaUiMyG4W7bMPyr4TQaMAxjvBpGb6c",
  "key12": "TcP8zKHn5La65f2t3PnAQvyhK59FRYKhWjyXVTs1wVt2J1m8yrNhr3AJ3AovFvCbaarenJs53HMYd46SXnGJVPk",
  "key13": "m1kRQKM2bPmWDeAtFV2kLECCStt9EGZw7gB7S8TH7oh85DV4GRz6jB3BrmDid1a71S8qch2LeUyuYJrziCK5x3D",
  "key14": "5USbvVHvcai3vEAeQugUohBdw2RuvghyZi42bKAZDzsqCFVDdUR25kQiCnjMhRJLJCu8w9j4ax8Qjc73cJrw834r",
  "key15": "3XgY67N5osqmXbvHGpW2YHG2MWi3WGA23J6V3FFseyYjMLo5gryviJgfH7oKxFLfXFPXzJBt2hDKtTBSwN2E8MqR",
  "key16": "2EsizScQUn6YesRGgyhhY9ZfuWKi5nTkcjtLf2E1uoZNTViL69JSxsYRJ4fycukh9qi7kr4TPMAC4zD4yCxVNNw1",
  "key17": "5NJEeDC1p4VQUoR4WQM1v5nL6WnQUv5CTrBLieBo9p6CjE5CBBSX8qjqLNq8rXrcJmDNbCKzVDu76hGas5EuCxxD",
  "key18": "21JC9MYc4L4xQxAyxRVG9jWHAurY8JXaNyQSuvfgccFQCWbspXLt7DC1ftXqHweHjyyrrQZDqZhermGX7EFZ3GFw",
  "key19": "4zfrbiQR6Tk33jQnEu9tM8E2Z3z7yq36NyunDhN4SdfMuskYV9CcZ8Zi6eCCv6Ay53ZBMesWajVHzkKmDq5LXB9p",
  "key20": "2Gjd1RytHna1haMrwqu4t7xk8VxdkhmfPVUkQqBTZpNtusJK7hqTGWmnCi8FmFNVJPn3Q2be2YnMqh2vCvRpK2go",
  "key21": "3De72Vnaivj3A61gg8TJgV4BbURT28zqBrXwhuo6rRMuWNgsY3ebaJG7LnuzanyHdL1fZhHUHb7pnM312DTugK7p",
  "key22": "3kkUTyju2p9VwstHE4vCz6kyxX99Sq2fH6LnE7fWPGaYZvufRxAeQn1wGS9REkx1F819UNaW43jSLu57NAxWL93L",
  "key23": "2t8S3yqLmnKsBdX7PZovC93NEQFh4NL9cLo48D2ySu5b43GfmtYohZmMPWDjh8XghZNVoRSf3B8nHyTgxTY4VuRD",
  "key24": "KW7KkMzMVktm8rxYsK9gsowqPUWoMv97M5u9YMSzq3LR3bwVVnH28HnMS8Scw86DdVec1iizqUqd6wmX9jzaS85",
  "key25": "3Q9ggd7a47vtCiKi4VDQcPo4aPRMJxVtHucLTbjfoBDvTshFvP9UUQQdkEmcnQSJpyXcdZ6y8iPXT2EUFGs7eL39",
  "key26": "2YmK2ArMLiDX6ozrcfpUed7vtGnNneQi9S7mscCTEDJSoQWRaLeHwJevd4sgaAVX7RGW2dvDcr6n95946mEyxHyD",
  "key27": "acMbWQoo3oCErRtGYPtmizAMjPidfbUFYLg4quSFUSAhZ3hNaUgkvDt54zARRkbBYZDqRQvqmutsFEdek1kYZWL",
  "key28": "3NVJfSaLgpaQVtbp4V9m2RwpEpJRmYGPxvmVGbiWUiD14cpSpkNH5yp6Q8KetQYGofJiUFY9JeihPc1quGsDt6uy",
  "key29": "4EZfU3HuZQfGJ2csTbyxZwPXcJGYpTw4egVVFJ7Lb4J2jHKma2XY2rvm2SRFGLmb6rj8Cv4d7rms4ipTrP5r9G7J",
  "key30": "23WdLz6vo5mzr1pGPdF7fUbLKHPB2J9eFxpWs4oPS2je846hmPxA7RzTb8ZCwpqwx7pVLJTqKRd5y2ey7W6W1YmM",
  "key31": "5338tydoKMymUuzMLrCGtCgRhxo5xaM2rPAeMiKcBjdPwQKUQ3QmgX26BavEnQCB4iJsF9yZe8Mn2RpQCjEqfxPA",
  "key32": "8esJUnMmrxp5ciFF7NHrys9dbDTrPu8bvtPeMaazb4DrmTuaMFEmxy9uVhNMWFEdCMgMx9oorTSyycBRrKsz4xB",
  "key33": "3FzGjXcdftHMfjpY6iduFKR9EEGTiDLbZRdPQiacJzLcmsB7LS1BM3EqtJjWZDpXT88RFa9PeaZQYu2KWx6AwpUM",
  "key34": "2EugtEP4zXDP18ZJd56ePJyBBFn6yvyDfJYUdEjws5GwRuUu4u6Kz35Fw47VojfEjeZV5sJMnzf6W5ee5VjYjp3e",
  "key35": "r1hZuunaGmJx6iywfUHVRVzqMGmeyjj7pZGPaM1BXcZe6FoL79Zv7LeRkisyvCtQdX58dnUNSu85hir3eDyCXqR"
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
