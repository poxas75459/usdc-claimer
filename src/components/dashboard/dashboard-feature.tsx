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
    "WXWezGUouPwtD9a6H4eBUhmSAuv2N5w39MhDsKwdL5J1aaVzPHhqT9owss6gbenKruS4EjmUQ7GtTJGspmFnK6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHaWWtBoVvU21z1qqciErMnPDXeaKdyEZkX5MzK47eVHzp7ygDB9AbD5FrP25yffekttbCEWbkFZNNM5embqvw8",
  "key1": "52tztkqHFmFmBQxn3AGjKQn9pvF5PEfrP1tJbLNgHPVv39Lz5wodfGFLwpHRMTLhykSHkZPd4i3EN2XkPfKqt18Q",
  "key2": "5eP9VURKGnycj6HLghspqAUQhCMFAsFb2MZRVTuYpMR15qNzzeV81noVUtyCF8QZSpKJbmjzAHAMNE3T6kWadaAu",
  "key3": "21AtbL7PXir7MuMah2ttNFo1CM2qiaKTs1qhgaGUtgRVSaSGyVeD394J3rYKhVYEMoVDohDQUtdh8tFR7nEKWkfE",
  "key4": "WgSLdyjwbxgNueTMiJDuZ7Kqn4kmxrnm2YxMQ3knGHrc5sKTs3mCd3HM5roDQ86EJyvyrZuXvMMf9f4dZTqATBK",
  "key5": "Bs8VKDihTWQ2YxhRZPMgUZnY1NR9pDRveosHeG9N7xTrXeiaiJexFmCJEXSgyJa6KmENaRDekkGP8BqLNCuzKBB",
  "key6": "5KxV5sg9CcRdigiZ9EmkXcQjDrkHpePrewXWp1KCDF5EvaHsRWfwK6oy397Z3S3L1Hk8huB8PdJkTNuG3wF1BLgp",
  "key7": "2QN5D1ViJ4L3ZP2cYoWNUaf88iBuJo9pXDRC4mao8c5dkVi8hRDDvsUtyeiBefg2xAwfmeTyPdZMRg5ZENznLxyH",
  "key8": "63D82thndZdHQEXDNg6mXnfZxDYqFkHza38WCFLCnZSNYT6obhu86bTCNPJ1AmJhtBdXhgocjc47rMEz7LU1yj3D",
  "key9": "3oWZhEbLeJvSU3H5thH8DiLpogLKCxVqLv7EwqXJgsWurnDPVPrBcWpDw1Cypu5DmDjPiJfnNvML9fqApUerBWfT",
  "key10": "3WQBiGQpa5mv5YNBWYvY9DvFR3bDNZbMAFoVB6xhKao9DAMCMDjHpw76Wrr8VhgBMcPxWi2Fh2B8tYJ2eTmMv73C",
  "key11": "2hrCdzsyvXz7aJVKJa5u69jhAM8iTZn3eHowXAFWeZ6f5mqBNAiB5JVc2Tdv8DrAnApLiKTZ9dcd3ErJ1nrYz97a",
  "key12": "5Zgk6g9hMnAQqhXywbcntBP8yKy1akxGSKP1koawH1gLdcepg2kypB6LrUnJTLvCSvhXtLv17tdg7aWVNo2B7PDF",
  "key13": "3LmTBo6mCggaEAwHxusC2GhEvH3oGwwfgaPnbLbszWYxZ4d3j9bN1gHUV2eP6zEnRnu3Fxqw4pEkYEkWuVpfu1kG",
  "key14": "5Ed8fwzV9kbaFWLaH4AugSySPaiXPKtj87RWYfEJRLP1WjhEhyCKeyffpfTY8U1GQXjb5tTrFxGyuc9wL7TiUizL",
  "key15": "wtHk4QgXnKioRbFDjbsDo3oPtH7iShMrferujrdbNqH9vHrmqfL69hfdowamizvVnLknYgoUav3TbpYSad3SvN5",
  "key16": "29ZxBi2nn8Rq3uQgzhsVt6r2cNYRusfQgTbr1UUafQ3UecDWJJ6uqKUT7jVbYRFqTKfSQkPNprA4cTEYJj5JXJsZ",
  "key17": "3FKoMVBRJ8DPv9AiYY6i3iDkHmgRt8VEeeAKqt7az7KJF2EEyYdxndnheHUQfSirkKzim2khAxAKnaxBAqPQEFEp",
  "key18": "2Vq4bhYBpJ4VbEkKYdYpaUQsfywjT53paADpU21uBH9yEG72tBC8Vph72SY6gdiZbKSa9MPTGdBzF5ndzGAqLGDV",
  "key19": "wp5ghA1soYpcYhN3R3BbkMpD692U5ZqecFVKKUs3VCuBX2VFei2JFo7eZDxgUMNvqCeSLSG77wwiWS4redj6j9K",
  "key20": "2RpQeMxZvQqN8L6WwtM2NtzhQJWzccujGhKD2S1DxghQSnDeUa7ZHFNAZ4HbWBSi7aBxigBQ4eNo6zUN1DHdyinv",
  "key21": "44dSrkXXtvNJxZNopinVruKAZe98pQvWFnWZrBmv6pVF1nRiBUoQxrVXyS6Zu1FHmHtKJBRH4ydKwZDL6Nmrkchj",
  "key22": "3ytK82v6HHRVcymtCSuot1jKgEwHxbptFsVFaJvC6J78WMSAfqb3yT9bH6LWLYMSgCQR7RzNCRvzbdEv7JgsHxAe",
  "key23": "4hN5dZD9U3wnZLYQmNqw2zZJfWvSAfVVwjvAktVmsejPPLELwypZ4GQc88sbdDH278kBxHZhcaXma1YfmWE5h2PC",
  "key24": "63ghbDFZRoKs7rRGU6ZVp3DdJgRiMn2tGgk3jemYgh9Yhqtkb7JvUsH4wAb1QUpT9XtDnR2bbNCbx1X2XTJsswSb",
  "key25": "4dxMn164N18eFtjRGbr2CTfBKJo8wH1QSbzq1RXxcrWNfzm71pGBkrpux3C59kXC7SwdKDDndmrRDwLVePq7L2Ac",
  "key26": "2GLfzFdGbGU95h8fZYrb7tnfvgR2w55z811wqcSrvmqjLvHVivwutaVVZkSAe4tE5sC2RLdLx1CMAiGoY8c7SuAP",
  "key27": "3vCxUK5B4bpaE35gETJVV73Zb3JYBJHj9nao36KJY1uZjZuJFz1zTetH8TGXtShE7gjmnqUuM1aPp3Re2Bezh5RH",
  "key28": "2QXhJh79SEF27jUTh16Z6cPrwRqTtBHAg4bLUorK6krcRjeXwjZB4Fncha3v7Tcd3neEoPGkL597YTxtM2abb9Rh",
  "key29": "59pyAwn5fYPxjEy5VBHsdKjXJVHNqyXr59JDUrEfAQHixV82TwHnJGvvcmyNA7WuEHCFmF3ePzPhgcLJju5SkdFD",
  "key30": "67CPMLZ9fcH1pRFRmZvBeRPN1d5DCWXyNhkhte9yE4cWdejsoDjz8N3PWucN9tP2fRuvaoAMgxAaGB2qKDSAW57s",
  "key31": "2DrhXXSnPj5rNbE8xENgyvd2aPd6DxVue6UpqcVsrGz1R14AQbjb6PsHi5H98jFbQZwSJJG9hy3AqkfTKhbmFA2A",
  "key32": "4UmkrkaS5T2a9brrLtUrVaHLZaeHhsJp2g3iJCmwv1TP2z4qRrNE3W4Ri15iVnAST5khos1VSZhWTk5hxAaeWveQ",
  "key33": "ZuufPWwEEFwrQbSb2H33rjPdQFXnjcMjufUjJwPN19kNaCNeaWSDjfYfbyJsJqR5pLyHuLSMBztGZq2kBK1iysh",
  "key34": "3Cof17Hc5MjY5WN7qAvrnfwHHYiXSsG4bdRsCPgi6YqVBEPGEf7tPPhMdJorfBfYAhR6fo2pCdgrotRbNUmvHMa2",
  "key35": "3h8QCd7PR6vxzyPebCc3MoEyggSNcGiJaXtJMWBgpiNEFtKrMskbEzYgWi97cE7TCjAdp4SEf7Rsxp3KfBKUde6n",
  "key36": "3D9i8pyxrb8jKwJoUTm8NawYkL31HC6y8cQywABc7maLdM2YSn9sNiybBS2Bb2DnbrAG8VKYBWkjsgXzMo8F67a1",
  "key37": "3nj5vbrbiLVHmcLP4R8WZstGvnH8ew7wS5SPH4iYxu36qh4HAueoNnLHgAtt9MCXNhidhFZAAAWC8YPWd3i6FCjJ",
  "key38": "3FfvtN33mdLiUhy6MUX83jqFo6ZFRGUiRsd6CF2CbcQ5dqqH7xW2oe7BVuFhcNbb29eG6o4Wd25zLByHdVdhzMfz",
  "key39": "2BK65GpkDGrAmjkmJf12Pip5UjjLYM9ci53HFys2nuJpn3G9WB7vgiHF79WgPx8V8Ga48p9hHw8yP7xHwAv6z6oa",
  "key40": "zWGhvVxD7mBBHVgyRmr3x3gB5DFaJhKMSroSia1qE9ghTTbEMtaQN1LWMg3asvZreW5M5hGevRbZDVbNPJerFTT"
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
