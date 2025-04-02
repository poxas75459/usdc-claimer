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
    "MBSWzYKyVyefFwHDLFWhYvmQBKqc1wzmqrUs4Yp6oqS6dSgvysK7ruzygxYa3Sa86zenmjcVPQZyjKLBCbdAmWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Nryoxhof8zZbFv2XMY9YgGSTedp1pUcJdjrVwbiA9EJxUurCjD6CGrj4iiBGqDCTrNrjNtz4zkKGmsCpTKGekq",
  "key1": "36693ES2bWzZ62Tbtgnf5V4eucth9woNig9xMkEoxSm5a9fQab2gvLuocy829wjeExzDSXYiHYvyQd36j7Pdysc7",
  "key2": "4x9xuUDk1pEw6Vx2B2waFU2Jpx2pgByiddzT6LwvKk8JwY73Gup2oKSrQdveBNo6izhzQBeP8ciGAaYjyRHdMWnh",
  "key3": "3MtnNZtzQ8siPgEhLEg27ChUktNi92Yn2GqAucqhVf7u2eB3fDkWsVhat3NQo6ZUwHR2jNCqWqKDrUH8JX46A66W",
  "key4": "YGVE4vuGv5Uaun2JPjmuuGNdfHYC2HykGpE8QgP5fzD2y99j2ucYK5na76Eme4cLoJHChRhf8LEBJ4Lh4oAKKTM",
  "key5": "41VPUCB8pGUGo5884493GUhq8sjKUzCeDNxHKMqFkkYJ8Xbdw2vAnTTAsNQiCd4fzH1Ygrst1jRb1YNrtwiaX6fE",
  "key6": "626vGeVSh5Q8GKKN3oqyppUt8JShFTdkrBm4XxVhTzFbVMB4suDeVJFJmpXemo8PkDbSsDf2ZS38ee495vx4JqSj",
  "key7": "9Yoz69ABVJkWQCUEJd7abGPs23mGEDxQhU91tMTttdnM3r6tq24PmNUVUe2Q89FfSBSNwRTAAMDZQogtKQosVfx",
  "key8": "2fjG8iUsTfacSYVPxBgit4G3yr83ACWFTDz694TUx6tB9mFREz5mPcq3r3HSaFa1kTuvb3P1fuWzgei8f1EbxmS6",
  "key9": "5udX15PkfW2CGVxgG47bGJBuUT84kJRkY5oEDeZF63idKiQr5h8eD1cF3zR2H2vXoHZUQTNKf7p8RfQJZMReowXk",
  "key10": "3eptZ4TDKWySudVmb3xKRQMY3pjoSaJnLzr26YWdXjyeos1Cq9QvMTvwP3erouG8JBtXyXt7A7TzgCWTntM1Erky",
  "key11": "2MTCmu8o4BYmnsau16BTj37KFDae6NrJASVNpMbuK3JKEPZRz4A8MkDrTYgCAp8afcML6c1oNAX59yM1nU2nm7vF",
  "key12": "oKnxoboC5YBWjm1DEBtujj8BDrHjVkgqqVQjb8RqeWYpxQ76kJHv6sRPbCjVq7QjLfkvDZfw12uwQN6CvTnqdFP",
  "key13": "4jrHWh71bwiDCtY4dQRey14wyYzF7SDyS5VMeKGMprWETSt2vj5VM3pAsDJiQrxHPD8PgbDoS9QqHWByag7FudgG",
  "key14": "3JRfZmRMY6ASkXbj52Txt3Rwpsfift7ZQbfmfZyP1JL6tyiZdkrtN81ufwKwytSm5XcLaVaF2S4QriQ135Znf1Hj",
  "key15": "51NaSnfSQx9aZYS7Zx127MyqvYCiLddfvUTheAJdgfK4RNgV8UTbHrrpMHiKBwEuXnJtpN2PkhUuvVxa9qhzwLks",
  "key16": "g97YSdzfpTr3soPoYbp2xUtuoFm49EfRFsoaBnSoU7VgKtbs6GZ2h2UYByHRGmeT6gzqGYnCQK72CwkVEBA9YaW",
  "key17": "2QmYS7KFb7w7kLuQNuBdwANsmGjV9tpCiVDp51cB1ttGK6N7r3uodGfveiMtxkRRjqeTfRwirLHAp61TNQhhMZPh",
  "key18": "4iNp7KYKiK489tJCcanFEN4aHwX4oftw16Cgjrt6r7ku4KwGbxWgybsDp83zX7mkeuVXTZEGGU4xuvhHjvyyAHSq",
  "key19": "35xLGU8o1DBM7PDCRogi1YBa2Ggx5LCKmMgWmY7Dk74631DU4DVtWfJ8Umf7Mk9djmuxUsvZ4mtbtV8vAp61jULF",
  "key20": "Mc37oEzGxjjguF2CJpnQnv6NKSBhJB8dV6HYftgAxp6RjZgTjSYLobNdk2zNACD5yiW5eXyg1JGxtF3KbBf5oVN",
  "key21": "4azFCkGGX2Vhtwqz4rG2MVF8qcHn3BKj91HoTe2SE4rwdWqXQ6tpTw4xQMhtKxLDSoM64iHvvfJj8EZA3SF6WUxB",
  "key22": "4vD96u2HAmgiMMUgVHPGZ4BjiwHUYAk6YLKuqQ1NssgQDLKDosoBcQzh39PUNR4tHqKBa4Pkn5LZFxkxcF2v2rAf",
  "key23": "uZR1RJXgXBTUM7xXdhei9jXb4rQ5LLtkdrDoSU93qtgme6MuptW8uaaWBtRYcUezWLo8BkwxNPkjyrqKgnaaABR",
  "key24": "64zctza3m7NW4NxKnLzNRQnUgVjeXNCiDfLwgfXdg5pGKC6b7QgabKMaZhuUp7TTwTHAutVHvGNWo3ahM2S5LGfE",
  "key25": "3vM9hhdUz3Ms8d5i1r7HsXRX5LSqJ7GxB3b7qamvpYMq2dbQex1JpTJYXza2FUpsKU1kqzvxrnjfYx2ynwULzbGQ",
  "key26": "2bTwDtdrLrF81e82swffnxBLwDxpUD2UjPw3U33hVB5dWbDK4Jt2QV7KYCkBtgcZecH71s5orssNvZuEwEDYaYno",
  "key27": "4pR1UhYXvFkzXW17dbNVKS6zAP6UZp8VCdXLGdNoTNxzvXGPzvHFmBBvJY5xEaoSGDPuyieqSh1gzum6yJSMuEZ3",
  "key28": "hJc33s18mCBECpNurKr8xw69qrFDMB7Jn9mpV1xkwmLfnwyYsE96fiXGem5PZMXsEsk3rYQJWvZE5iij4JtTZcf",
  "key29": "44GH2QFSsb3CkxSSDcjCkJkB4WM72ZyoCsfPmxe7FwPQdKarSEBNQqw4x4VUjfwFs5f1nAQzNntkKFgMZ1JPVZ56",
  "key30": "9n2m5SfTr156yfmphdLYuoTujTTBVXr5cuKHHumu82tdcxDGKxWs5Bf9utVD9aDCecHtmNqLuRnsK4QzGc8Essw",
  "key31": "24dKvQWvCQEyAWUa2ULHDuvtWsYy8btQacdHxJDUtFsEpYigo8ASBgL8MWL9JMxCNtaFjm4Uu5vTCShS8BNDVJuy",
  "key32": "63jXhU3A3XAgEytHT7EZLS1EkYPqf8MkjTuKEnNKmZkpjrMN4ut8ahJhrPr6m8a3kygFyr16AbqdEzTjdWcqWQii",
  "key33": "4qJoFa3jV1XRNydGhH4hA4haMkWPfJLRyGMSdCZRadPHfew7cuhDNSLjvvsoRRynWwpPwgAvSVR6G8acy3mBmn7W",
  "key34": "2ZZ1X8UK3zhhbxLghb1Lh2JDTuZU8x3bxgvKLn2jqCLrA3BGSKoKu8XwyZZZgvZCXgWyY6771sDc1Vd1o1Qj928A",
  "key35": "56DfdEZnxLBaBdNcEx9UPYjyVKBD7t4VjdTpg6j6KmcnN1AgXodG9QRCEELGVHkK3hipNbiNRJRXsPgNSAEMxzNy",
  "key36": "Wnx2jiAC8V6ftfZTfBmjZAEY5yyiSdGq9SsyzmPNy5sT4fkZNaiz6DdjiAzPRerNZGNc1d2iuu9aVckTCatgSro",
  "key37": "4JjCW2dixQ8SzUiEFNA1Fq6mT5cpYcjtJ1Bb2EtNaBfcLm4tEPbEWPCh3p2cdBYy7FTnCsYXbs1VNhuFfsNjbjpk",
  "key38": "512HCaVh5DK6TUVpZWqCnotuSUGgjGbCN8XsUoKUXL1SKw6icZeEw7qKsBTwCbJX3hmPJYbFF5wp8VKrs3yfwoRz",
  "key39": "29Rvut8cmVxf2CPqvKB2L3kwF1WuERtrcA6CbmSL3sBzXCa9NiqsExDA3QitR5623RE5ZkVKLrUZTsc8XFwjGX1J",
  "key40": "4aUbr1bAWTQgib7UXesvHrWhoyVv3FF4KTbtCLfxkbfpfMFk5Hf8zou1FufvjWZAKqXsshsnGkQK4BLGScrqzq9t",
  "key41": "5sJoAb72ygdChAMXvKUDyTAY9gtiz197bSkNiwTxwjCr3WK2WSamWxX8WW9JBguP9WPbjvaRXw1iBE16yV4U9iVt",
  "key42": "58xUKzQ5PzyrTvANL4M8brgnFjE3Y68dQcy71n6aHZSa2c74fwmqG263CDghMCgfyx9sTeyuZ4o79cVERwF1hwXH",
  "key43": "Z45w6oGm7MdqwYk6hMU1u822GDEmg6Gys6j5EGxThFcb13NZak5pVZfv1diSVxhS5bcQJkKKSy7TRhxAWt5YsxY",
  "key44": "59RS5vKAzCFgVyyL5C39xMrWSXjxd6srQSjbkqoJA7owm3ntipLQvZHFh5B7ad62yQhidjt8KeErEPR1VW7MQueP",
  "key45": "2N3rBgLYLVg7kauphXnHDHYkPUWn6iqdm85ZnnqZit6qW5MGXbF7VPJkvXoZGT2DLFNZpT32a4gdSQpqmmpDQadC",
  "key46": "2pR7uE4MSUJFXCfFtgT6cCARYYZCeZJeF4JGFL2WS95rX8pMXcu5wxWxfDJLEBzPGU5gt7zhwfTeHpAEVRDW4KjX",
  "key47": "4D6AM1W2LWpogZ1ZduLTB4j1Uc3rnB9XFdSkF6vgiaZRWfgU13JAyWAjXBQjWjcc1yfgfsaN9XDipM5zd8ma4gZZ",
  "key48": "611YdVKJCmdyYjcZTt4ARKKsgLYGQbwAHUxt5cUFk125K85Cc16yfye9YiSXX8YEaN8VE1uFu8LFmwYTNbG8JGAH"
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
