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
    "5jFPYJD1At76m4vCRobMdhTsaU9r1e2PFBEQYFZuHCnXJNekd9FNsDAajyczLcuQZhBAR4wNvAwAkQM4qWRaBwA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WwBs1oqWFGrU7vqHVfeBhGcPxH5PYfpb3dpi5R1BHnCrdqpjxxmDvHSrkE2HDuGQoZipVsuAketPARzDRLjjL8b",
  "key1": "3D6KkMZJnCjLPiDwyZE9RkD4tQCZ2cdn4y4dEL35bCavEVnBTXANYtii1qUKM6yhSJUs4s91SroFoA94YmR4CKSn",
  "key2": "ofm1nb3Nvto3SYoWCMNTrYYCoTvAFaEorzKoWzgYMxWQ23t5tbX4DqpvzvecPXtqYFWZVEJ7M9UhYoZ5qMh1vRm",
  "key3": "5veyWyoPcxT7W5CMsfDtCkaSWgvxuuK9N3nihkxHmejM9KiX6MVJMBAf6knTrvPtL3UBM1gsQPsoqPDUM9t89yBZ",
  "key4": "42LbK6PF2T7Eoy1UxQEo1EmLn7Ehiaeywbfn57Fq1hgHf5Cq7TGqh2ggeowsQZbdzQBxRQSQu88pCvc5j2gnWj5j",
  "key5": "4Aoc1NQaZwvYJKgqgevjRx2NP5VnCiVP7dyQ1RczA1VtxkJMUBkaGFRBcCLFwznfEZbBTLx6DGdEugRZVeHJ3yZu",
  "key6": "5pDK6Peuq2LFGNt2LAeZkHd4EJ5bJY1XPaFZRz5CiCQbi8jXZRLPmG9ZUhxdA6dtptT5SUFNGTxU5Xc6BCtVkKfN",
  "key7": "5ASDhkaC1iPZHpUHWqgmjywqVRGu8YdHCxRtNwrQbYQtFfsTc7S8pW1JT8B8P9hHC6P3VyP1nVHNeoEEvJJ2pNx9",
  "key8": "3zGgALGRhj7gb9DGqtNPV7krDpzmzbXFhyyr34LR9Xy86azXCx2udsmCdHSMzwiwFkx2fHKscJiR4b6MwqvDKi7n",
  "key9": "5D2baDwm8G8peXCAkZ4KHNa7biR2PkKWgFrJT75P25Pxx6ZwQowfKUMS2gAm2DkKSuLCZrXucYd5ky8rzoSEQYk",
  "key10": "4x6mv9kphAhdi42fUvG2UQTD8EtdZJPEFUeerpF8dCDuMmKwLYN9TNNMwN5PPB7AbSvptxnXXUKnmzjvUvbQ1jvv",
  "key11": "3SMero2b6duqG3ReLnNYijpXCB9MhSFGxUCdHRRmuPdDF2pCJ5dfUeDNPWkD8KmD91iRzcqLfyKTAtcZk8m33xdL",
  "key12": "31evyHwmEjWsY4G1wQMDahw9TUbSsVfPhbFzWTpWqas8va8KZBbTuzdHmbLQNauYkaYf5r8heAfjSMxKPusqv1wR",
  "key13": "4TkWu1aXVwARJPma8nyBmsNboazUpsUtSkmre9g8rByBd4QTQp3W5tnVDchBZK8UkhrTrAoVbwBtZTarXJmNBe26",
  "key14": "3Zvve5prutpzTMMLmvTMoXvj2BjzS9vKntigFQgCK6g4NXpdGyuJ9rg7VZaWUvbAC6b8zALwtXTJPjd69Hu9BcKm",
  "key15": "5zqe6WNnc9JynC2RnMAvBJXQ5c99dyRE7rtz26bzBd493ARs9Bo7ZJitkskDkQ1ZC7ezF3zidCPoKdi4TDZTvKTP",
  "key16": "4YC3m5TGamDaYvynuUw4RuZfecysSy7RNatKL4AoZPB72RZhdpWzKGPBJz419yThmwu1cn7EauYjjeGWgLE9tP3o",
  "key17": "5njZkinM7SAprJM77qoQLrufVWWhtGwdxHawDkqktAMhjkqNf3KqSrhoBL6sVd8NAYokHxLSG1XiXWPu8KQGU9Fc",
  "key18": "3TphouCwaP7Njprm8mGZ4jdhoxEcoF76Jer1eB75Pe6qqdNtYhgtqvMsHjGNfMor1vE43P42YBx1MSGYrMeZo4u9",
  "key19": "3S9npLn2zJVAJ1fvDWRYuRk8MChTU2qxp87ovAVz4FqtQsfSm3xQZY7ULebdgNL5bnivZQNwLK52sWd9iVJ1C7tx",
  "key20": "3fTE7yjVjjjjMCe63yMXWRvgqGHEMae173aeeNnHAV43ku74KwRGqbwT5TuE8QQdS2TqARYYzwAUbx7jQxXeaMH5",
  "key21": "TVZshbvMiKa83ezvTZzqRsiQNV8bcRjJmKgvHo6i8EizUiwxpQ4MdHjgC7dJtZJL2fhGRSt1Z3NRvJs76zRdxUv",
  "key22": "2n6vEgZF73oCfxbp5BNtJaqP5i337pAL27fXMgESUFzbmoXbFyFVMbVRGoyn5AjNDkZFzTiZqZY5QQ455AzT1qe",
  "key23": "4gLpeNrVZ1BUAieM4WCk79ACxxTQ5QjoEHajaAzoDTR8Mt5zgedLycPXhtnt26LxqahUs1oFZYJLL42zHH1vUSqD",
  "key24": "58azz5G3A1fXkg1LKchRgP1LXEQcrH5KE2a73behGabNGpESoDq1rqGATXZpMaU9rMTj5enQ2MeL2CcUkSmKNJSn",
  "key25": "5DoXyd41co4AyQ1QnAdmddnQeM4RhpWis8sGCb5bZTAxDv1eadBmuiadmyfWnnrsEKDTMSEqAUQjXJRJGJfkRZuF",
  "key26": "ussWwQc8pmcqGkgU1Bg9yz3EwHuWoA3F42Rj2PNJyRMx6BPRRPycJRKFcUzDfG9cXaVEcsaP6P5EFFExzvu8nzQ",
  "key27": "SWq5EhFRxuR9oy8ZAjcADaCWP6GSUiTMYQYGyssw9gbFmzFzt7TZAP6e42gGNqnk7yk4cRxqnmQAXj9EihrSiAL",
  "key28": "24THjENShufTDWPKiPhv12jUwcBAUMfiQ1tQU6Q3odE9FZP8m3jWDibgi6mrknPqNJsDLrwPfg61QXyFbYzguuY1",
  "key29": "5UmnZ99XXBrp72hrcJbRJEjv2E5TFuz1uDwMsbdXcFEGHXZ9ghbV1CaZdZkQwTLgzw7KwCsEfm4WT3NpDdekCcy4",
  "key30": "366Fnc5bpuz2bS1FNjc8dKNMufg1xC5HwfASeYHNN2dw7ueMzDoS3J4NHDdMiajvmkH3Puhtqrw89sDr3DWKPbva",
  "key31": "4U7GuGbcYQ8GmR6nYoLWtFsrwJKnAPtuc5wGofRt7uj34AiqEhmKt6G5p2FtwpKyw5aQzVbUwDUNYZboTYrSTZCr",
  "key32": "3d6mVTyV5vmt8MqZ8gSRnJVanWAhMvsgEvgtQTQgsvDNBPkZFHYgkFrgPBujFEvfbimm9x8LttZ4dn6VE1Vou7Ke",
  "key33": "3YbVrKRSt24xbr3D94Jm6AtoMdFUeyipVizgDCXdVQFELC9QNG5t6CjyJx6QkDpvAQPaWRLrpK6KkMbU9JHWpTiN",
  "key34": "2WJBJH2k5pBffK7PWbYWUYwP3LW5B3qyFcp2oS1ucDpWxtZdVjL2wMR6YeyAQJNfayNs7iutNLRLPSexjRiJqyu7",
  "key35": "2Ccm46Ekfbh9GNMawNaiPHCgeRY92kp7MTJrhVB3RtUvXVVkJX8yrec5K6K4PDhzabv2azTnUmj4VLR6qXCAG7nm",
  "key36": "pRndyWKAnRRoxJ7ACnrWxSdqa4tfKu4N672HnLQrAA5fC9HkfFW5bs5N2KjSspMeHwkoLQB4ePs1FgXw8R8eWEs",
  "key37": "XouBsjd6wKPK9xJXMTDAnjC74sWB4r4KrKSMqUhHXaxVefZyFR4eu9wsR7b8zqoE224utLsmWgVo5tMy4KH6i9Z",
  "key38": "5TkdoBCA5xZ718p1BNr4kGCvEGDAKjuthp7XkbtocaQcua6CWWcyMmkUr57pzm781ozBrMxb26Df6TcZczVSWCyc"
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
