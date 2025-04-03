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
    "4MJVwUGvMYPrJeK7xzg7HRFkM4StxrmN5fuW2yrG86zSLfczk7UkLbWZ3UTjyFceBvvz31vFmFgFpPQCj1oNiVW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iacfoxZDUTjzWuPcR8PGZThq3zkF9m5hsp6ZhQ8GfjcP9LyJEWVwSKpD8NMBsvo28oWpiLc8ZFBkXmNN9fnXU2C",
  "key1": "5tVKpPP1bKBQr7aftQmcd7n2ff73jFByb143yfB8dvTeJNXxUvhjgrvdnZBonBUhS9eThCp3CXCHggjCoj2agysq",
  "key2": "3PnxhTYcA8dxybbk4AZ5hwFBed1nDncfqpryr1EYRMHKp4SjSvtF3ss8ys6C43KwCk6HB3G7cQKmJ4YDW8RMUKmM",
  "key3": "4BRxHeJk4HSKCizJH53YBWKWgqGwGqdb6Jcy8EcHSwgCtg9qN9ZhmhFLzZC9Fbe5mgJDJWMdsgghu5H6hKEeYd1P",
  "key4": "45efoXKD99DTd2v8cuHgjKUAyvSNvdzqnnJEwfrHPeTudsSGwdFRPs2rbutiHgwztybVh4qTFFks1wxNfgUEQwc",
  "key5": "3ZFb2ikovTt6p9dFxvCu39BZLB4bp2hLa6FFCAcAhHFZ9265EJVQ511oN45iC6XSwkVZGZw4Phuh1wxF3ycFq8mb",
  "key6": "39bZZeVeaSZxjuRtyupPC8NK52WgU9h3GxxyPWMe4Qgdt8vYonGrri3gqreD33CtuNZuU9eHNcy4Q6mWJ7BNM7Bx",
  "key7": "46Xd9XMKhXpnsJDNDnnwhs2CL4pctUTkK4xK89JbdoVQQAHomFf6MdzVwxzr1s1vjd5j68LpZpfURSijhe2CLBiD",
  "key8": "4N3Ss6713rsbiPLg9K3gSE4h1AqqqCUYVjd6vhrRf13tzkg5sCmNQrj3NXRSiFNpZNHh1YpUHv6fZykghYjRNhq",
  "key9": "41nkkyrh657LmrVxixjmFVDax9MQUwkvtNJ65fS2r9TRtXBu1K8rgRs5juftGEkCL1uTtEXa12RH5gV6KAqJBruL",
  "key10": "2EyRWnbmpiNjioKmQbTmJTyL1jwGxLL2xv6rMwEJk7xhhi2wyqA96zKamJpQ2CDF1CdcZibgTB9ECCTVRXKvzFv9",
  "key11": "3pEmfTF6m3VGckrz7J9oNZMnHjk87QAo7sRNmDvwNfBqsgvKztchF61qUJEik8eq9fFmVsTjwuuYjpeBV4Gm62tR",
  "key12": "5FyGEbps4rbFv9j83JrWsWVyExV2Cend4qAwUsN9wC1MVWedd2Bi7DBcGqgiQXMtEqYsYmwk9LnLCVabUDcfv2vL",
  "key13": "3JXSRwqhCXHQCzHKNhjBd6oHdXXu3139ws79V5B8SoB5zuwrvZZgVWcYanU6pMSHr4jJFGmRXxiwcbupG3rLjPTk",
  "key14": "Yx3g3QUV7p8L5iyXoGwFpxSX5mW8tk6beUoy4zT1P9VNtmDK5Q1msTsUm8WKZTkv1LKamFKJktan6Tw2bGjNL61",
  "key15": "2NduYp8ZJecLWzY1MSEtRr9HykLdxXNffesrYJDcRUJawZdcKgz41VF9g4oQB5nq2x7xGKBwwodfcSDq8PK9sNB2",
  "key16": "2p7Kh113QfV3w3naauzPcYJNuefXsWU3jJqUCFF2z1vCYN7kaHxjh9QZyQnEWddBY8N5xyxHRp1joncBqjqm3Kt8",
  "key17": "5TV3gAgFBKwc7BabSJdSowfxUCprStLFPC7ZYEheVcnc9RSK5CdALckkGYHb4KayruuhumqmWoffPtggNfgQ7mc6",
  "key18": "BAZNsKimWro8FcqAanWUgHe6eTxub3skB79X4YBxMpQr16QZiHRTicYJ77sN7Hmr8bLtnLTkFqKS9tDTqmAFNuS",
  "key19": "3zLcQB1edKQDGkdWwA9DVDTusmRzUkQmUxYcW4ZNbLUSJEyNWPR2bhMdfk7FPPA1f8LXp7Kupdn84Q8nZ7QSBKzL",
  "key20": "4jTkppSJg2k8fn1qp5QkCZBCuCd7PSmWSjHq466Bpbh2Fz7tdPBRRxTNUJSr4s9Q7yVnG8SibpnXMsWX1JzmX7Lf",
  "key21": "4vRLhAj1P2WETwRaHaA7zepL6FpWkkpmzH6HLK5Xsf92ckoNfZzKWGaQiF1Hpdpt6YjQZuxXoEPs88Q377sdd7E2",
  "key22": "2dkE9WrhWzMzP1yVJr3QofS7iNeDkegXh6ryRnv58gfShefvamVSALukwk6NdC6uRVK9urCHACDJTGcsEjRR2qyy",
  "key23": "5c3t7yN5NbkiHVxQ5z2GJEWcEegvRKPQEpcGFc5B3g2gbEmHVzkrj4WxVU9fpd8xrLSh7H9tLJDhjGcjerVeZT98",
  "key24": "jNrErwiwDkVEZGTKiXd9mvQxYonLmACxgHZvC6zYHoDz44EisJTQbPjTT5YyX56uVtPH3xW3mQArpsrxRsLDZjp",
  "key25": "2Dgs2hnh9fKyn8Vje12kP7kYLuBffjWact1ssCHXtSgrPdLoTJ2BU4P16tjx8Xh9U3CXKBdKhswzeeawaumdQqoJ",
  "key26": "4wwZZxkyypp4eANvBEqfKLFqb4J5ockYsiefE62e4tar6jj7XSN7JGjP6HGtjHNYSssWxECK9RdBKD93GmefVpxj",
  "key27": "5u76EUBZ3Jg5URRsZN2zJynWPBExjzemrYhzSLf44Xafxe11V9Z1NfKx1KRNbiK9eycwojGAADBxeE85dxZ2fEPH",
  "key28": "4knvL9Pfps2aH3iQNDzPhLtvTzDxMtzpJS5fCzAgxf42EQvziwSm2VtFsJxKqUo59BbRiTMva7nPLaAdDMpm8CZ1",
  "key29": "7fDjhcegnCb8TC3LK1822F6pF5nRzKWosHMd154MdJE7jXjME3VAXv1MkZcgmC8VEqUH1EbSBzdjYeKFHqPCFB8",
  "key30": "32TS3hKDgqksWNUrUt75ut1EQoJNM7UrRSahyG23J2buy5uCHReJiLAU5nrxi16Gu1F1Sd344Z59eV1LaC2BK2Mr",
  "key31": "5c3eyZpsuwoFUKXbUJtEycJ5VX1jtnyxNtmR5egWGg4QnnBRLBSaAY2TU8veVxFNcB2p5z3xGrKAeg3viz7gtUvt",
  "key32": "2KUZB9cDvJZbw3xRHMN3USZL9cJsPSUBLUsLiZKvFCydMMxwSW6C6qYuk82E1zcTUG6AY3zDFC568vLFn6ydSxhH",
  "key33": "3ZGrC6U51mLsF7gFTuZA4DhsyxXFbfeWTbqR8JUMopPoKuhJoi7NF5KgtNKq3dA1M95kM67mEMWXr5qMuVkCJnbP",
  "key34": "67T4Dk7FWDwWenS6V6LnWKHae6Ba9hgf4taDg47bDhLEA7mT3ixFVpmSabMkmmebAE4d2uzrdX1688Wvv6oRFf6V",
  "key35": "5CzwrQXTDGt4qZwtAobxW9YVsZCpiv2Hs6bkok4KL5p2CkCV8rNTDRuWSn5PCwE4EFL9sZgXaaQyaGfMFZZ6T2Jr",
  "key36": "2XgrjqB49FmXZJAbxWnZojJYLGhf9YPAAzzdJEomRJN4qM7stC6FsFESXPPi3zAcQTMqTQVPmcskytaA6fJqFSiM",
  "key37": "557PDUzBvyirhtfEqCeAYi37cibXN1CNwSKSQnFysuMGBgYtvvAeBKPMSZro7fjZ4qGYY74eof7JycJg5Pwf3Hsq",
  "key38": "327BvfQm1nqezakBsWBZTwn8xqoG3VmF49a7T9ZcvK7GPEZ5VtAw9ekWqWbbPbR7yHZ3bT6sqA1NrMhtpT693Fd3",
  "key39": "pb9cYpT7Z4WbVBmuEeYhNzZasdThfuBy8ZzRXEynPnFR8ZoQ1tBrT61zTaZ6K3kzqqyuYQCf5mv9QGFHgkAgufH",
  "key40": "2Uxa1NXhUWxQ8MHZEew7ZxKxCBL2AcLRNi1wjcXWG4xKDVRqFPrQLduXx3LLfPz1WvaGR3KpJyWMCZjthRDgryJk",
  "key41": "S76F3JxDWYJm3D8ahWPW2g2ZDm7E1xVoBi6dk6vgWxsC7gyEwT5nJXUPk4tcQmmozQx7Jnhh3CzyVYf7hoHUppK",
  "key42": "5RDCrQwoahkXsNi8CSeYtCLUq8pXQGDVNLt1CgM4V5z6yuhDyowJaf1eYUWysBL7Wa2JYQjyj4Jc3d1iMHikmWcr",
  "key43": "46Ak71rQ6DG5zoceFTKixMvoP6G95C8RWUdGqCayVf3bf6wnEgKJ6rvFCaqkMz7UGoiaKhzWTSX3JWpGtHP2tK6z",
  "key44": "6G8cLXcMGnLGJRKYwbk7wt2hkDBUruxynow7eSyybpkkF49pyTbjBeYBX2nXkZTmyddMTeJQHDjDHFXruDcaW5F"
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
