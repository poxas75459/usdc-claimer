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
    "26UiQ6JXPt3Wait2yTnGmDo38p7jQUcP62yQiF4LdxYkhv9nLMTVdXDfzAQdGnaHDebuep3XGvojBk65bSQNh4pX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ygEWXJM9ym1EHJhTgob9PMHWvxbzuc3ZR9pyH8xRteqTiuLukdHrEgQ7SyRw3yffFuHaru4bk88ovyRBrWF1Ezu",
  "key1": "61oDQHX4UC4smSCmDowZu1a2qkR335KoTfe4ooSGHhRLbm88H2Cjy5kucdRvSvqS6HaqmMWAZJeDiT6WDTkGN6qN",
  "key2": "4KHZX7pLAbGFHVYEwRcN9anKikAXGaVSqjtJMHYpRc66tq7E6bwUjtHvcKm4BVAkLSkTou8S5pCkKibNJCpqUTvn",
  "key3": "5Xe2uXZU6LmAbPXRCemRvRrhXKRFdMN26v6No4WDZ8WEbmGhnaQAqrUq4meNR9gLuNm2svhvzR8GTSLRgvYRT5B3",
  "key4": "2C2WdZsb6uiPs7e3HEh9k6sQEYcHKcqQG8eD6BE9HpMHhRdSX5Xefa3hUiGroZbWmHuo2yrQRv2yg93haxjxYWtn",
  "key5": "56JW3sbwLr72QLbV3ZTQWQ4aL62H7D71b3gqq73sHck5yf7mumBMXtUcPmVEH4Xx8VRbsA9Lq2edSspSUfNEDMYP",
  "key6": "5tWdzadZ1xRHztXLnCEXcaVJ94dkjk87Q4ujJ9mnfc7W2J3sySP33ohM6JyK65aY6sVJTrTRhBqVVjQcB5mRpcRk",
  "key7": "49cCWm1kMR7pUZb8AbiJHmPgGs6L5B691EG8TukPEUycf2anxK97LfikPDMofRDaMaoeHwsHvQ77eDmDn2GBto9a",
  "key8": "3fmp5oLHB8WFkNe1f44AsT6z4Bbgh9yQem7TuiXxP1ehg5KU1BWo8XuJ8LkLb3Ugxw52K2cWMY74zyd7REyZtKBx",
  "key9": "3pkHkCtJKwrA6bRZ5JUqKdESBDM1u3Jb78GtRBwSwtPcDRv6KwtmnV7AgZR1qzW18u3e5s9ecRX1jeq4aTJLAgF1",
  "key10": "2tbkhjCpBDkVi4ebU1Hi7z71yupcfi4JC7uKoGdnvAVtvgppv9zEBQv1w7Si2UyzmKxMaVRx1rtbMQzJaHmBAjRc",
  "key11": "4iJ13MTf9QGbJeKV9svBdqR6uKLKDq298eDR5Xf94mYe73LHpGgRq4zRmvsxzWFpFq29NLKwbGFaQuzXha9jQE72",
  "key12": "NDVW3PuFyzUSBHjMdrzE8hsWvE5CjYUa4EZMn1yoMc6XFEBKFy7nZ7LkvnzFRzCpVEDUvH1o3dtyfHTTrwdGjxT",
  "key13": "3FQ4CXK4cwmwNrTryzGsDdDFcUoXEcCrLYqYXtkgDKno542vfeEGTFbeHnff6Qo9YUTLpRs64Q5PNiT5ipY6thdV",
  "key14": "3mYNbvXNA3dMfL4Ryv4fot8B5PZMhzfQwuw1DjoPhq6MQU7pszB8cjo3FDpLHkB44dp19GxPajZBBZ6NAxcnKwvy",
  "key15": "4moqnR7GK6DfLmQuW5YrCiLVwdsaKXaxqqJ9hGeS2FT2C8SSXQMybMYzmR3Hbfd6abBpoFRbAHGZDM3RVVxJSzC9",
  "key16": "2AMTLAen4DnJ76ab5JmL8zfDSmsCpaPuiuhg6mTKeifEFsWA2nEP9PAmm1sQe5oFAVEbPpqRnd9bDbE9fmcKbLVR",
  "key17": "3P1hchysYyYAiy3FUDSWSrqVaXQjx2ySsMturfgKit71czaFnWAE96JatrUKDL3kZwM9KPD3xvmrnBtqMCKdBNmx",
  "key18": "4f4Wiisxmk2AEjikHvpogDa27NVrvUT485SM6XM7K6Ejby4zQp6gdp4FT3qhi5jVxZUWNyFRpZMPksVPRvnUFy9M",
  "key19": "37Ao62nHujtsNnTJxEjiKVfgJo644AN9v4XEVceFdyCVfaav5KbAH9uJ3GSqSafP6FmDCDrqFc3qTYFZn8YM8x4q",
  "key20": "jo6mTpfS78J8SsdYth1hx79wo8QZdxEp99sXhVuLx8FTJ2zQZ7QmBcCDg19RkfoXBAqN5QD5oy69FDn3swb7ZHh",
  "key21": "FPvcQiU1mu2HP8MPvkDEeTscKtn6Hguq6WaLFdoX4YjZGuh1xWWMA4GDFAeCJEv9SxZ6WR4T2BNsHnJ5toEvUkC",
  "key22": "2jBz9W2LvUJ8Xp5aMM1AdjkwSn9CZZo38pWmSns7m2DFz7ev294S4BddMXCu95cpZZNyMeWQzKTziVmk3YyoXJbz",
  "key23": "2kfixshubGTwo6RDY2W45ZShqivwNFpEYLjqpo6dEcmuw6sbnqT2CFXw9ssLfLzWXkwZQGY7aRroNf6WdnsfxoEn",
  "key24": "2Tk3TZS3HFtBx3Y91pjjZwBvw8Z3tVeTeorTJPPc1yTqdErbaN2ArQPjH5GTV5Zxuz7jK8jYLSeAHt8Ex68eaUNQ",
  "key25": "3YYoyqrVtZeQuZ7RVfNrU5wZMyXLeNtUC8KLnWYQ4oT3LM2Zes26nFHsELcrE1tzTnL2DkZ4zP7Jz6mHvMUNG5cC"
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
