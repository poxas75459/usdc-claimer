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
    "4S8KedgG9zzSEsPBgpt15drS78wtNh1ErDq2e9uGZWrN6PXieZTWWZqE7roTEB7CDk6s3U2qrjPvAqYRVqtvevWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PFsZZuxvnCoDfswx3y1JFiDeAjP4yUrts8KgjNk5aHtsrhi4t4L7rEAUE3L1bZKXTSjxraryufPw6UjX6vcAqxg",
  "key1": "5Qx9i3jYkbHzCo5F4TrRVArDQVBVtryo1nXUtRehDKvcHNmTQcPYtDa3uGQF1CMruuRj9Yw6QG4X9dgmUDAtojA",
  "key2": "62numhS2pLccaFxZb8ja53cy2F3s38VTWMGPA93CDMUkeYwsN5XFvXhkLanwsSMUUTcPhoTEdvEeWAd5EmN3PM7h",
  "key3": "5g3en4QzydHHJiTgpDnigGjBhr6516ZMuTESxTPSGkJdiPjvn6e2VovANnysxxUUX9hzeUaZ291iUKrhK7bEqMiM",
  "key4": "3NB8oLdGRYuHRRWJNZRX2mnWTppHrsHXgCaVEu14B3Bc3sWiic9F6NDkNYiqdR7jW43jToz4jLzhvFZNxp7YQ4wz",
  "key5": "48e1YrBSxBXFgvXbMCAZ5V9nEy437qjiPanJkSTKkMRRMX5WwMLHX1ifEfpvPmQDxx29QtrXF1Ukj6X3hBEPwvVE",
  "key6": "4QJPqc5ZxfkNK9EdmHvzuvsBUWwvVCEY5htd59YinRp4tnk8TX9paWJ1SbQHcPSkpEQ12WvGHGzELAUa2Mv6NJs8",
  "key7": "3Y6KSehkyDpewmXWdTnCBcvMPLCtRqKhj5d6kehXsMLpAu9au7dEU2SCWLv9wQ2D8qW5ohhdLSBPchyHt1VoaCqZ",
  "key8": "2H2WxK3Emsz1htbLZtVC8aekFoVaCFJ5pZCW3yaLfCJHk9NyyFsPPTtAZM6MVwJb25XB3Cx1f6PLR2Z24acoAwLU",
  "key9": "58c2AETWM2uVdy3RmhFEDb7EzCgwmaPvExvtoi6eP9AbYi2V55p3mQshEtKATim1szUuwhZ84er8CpuCLFcHrNnJ",
  "key10": "5Mhgzv7bmA57NgZdRfKwhnLWDvWR4GSK4VRRJzh4eWqJekvRaat4rBDh5xBdzN4XhHsr2JsDSbpPhsEcSudHyTGJ",
  "key11": "3XHWtoMgyhruFYKmjxWxAaCj1jtbk5iraSJaMJL38KApvxn6s1jEJByrgQhTdq2CuKnygsW3XTwt6vKzSdkFPMQy",
  "key12": "24bYMAammt16UrkzBgbnsryRDK2PhrzvbCzasficFft918joLDKVb4abAxRDkVYrGNAb6jXAcCpJKm54B2oJCvB5",
  "key13": "3Q3pvnZtzE4597zpK2i1cEc33bimBE6nGJACjCG6pSkshJPLNdbYKWsHXNhuwnBrTpefwAvCQRsLyyqbBynpj3sK",
  "key14": "5svFDnpnQJVvBCqJHkNdsbXpL7J3dxpPYWctkETQa4assoHzrfJ6cq1CaKnC8JKXvwu61hDqUQXYiGkbc2hLcCwa",
  "key15": "4xRcDQgBE5C3YWJ3esUmQA2qQswdxw9CRSjxmTRbwMnZvGzwD6V4UrG8M9WmyogL5BKqxnAVdxkbm2X4hRNrQqDW",
  "key16": "JcbLWzMm6Nq5LEjgxTYx4Ms1gKmoVR5W3tWedNLxMfbh8U58JZm7ho42Cvv1E3XMSpmExtgzRukCqPkCk9gqwCM",
  "key17": "5VezpxKr8GSxQCYz9a2pHGVYConwSJaqo91UEygzxh29x9uHXFS3etNXjXSPK7DBK5BYmxDPNtWYxa1Tb64Jr2f5",
  "key18": "3tXW6bpdUiajR9DH9s6zuZy2wJRunFHfkadEPpvmWAaB9Ucfh7m3FdXj26o3ZAQF7gkE2HKfnBBKFJm4sVPZVL4A",
  "key19": "4y365Ssh1Ath5ujYGXvoTSZyi6EMndu3UQhbcMaM1iuBMPXSJb2odutPL6ruaHhff1BZQZeJV6DACvpSKNyyTy71",
  "key20": "3HCncvz8Zrbs44riJHgJfPHiBCspBNpqiVSocG3wQajriKEXKzHqeGyhKV7j7TYAM8xRawDRdguYoGu5zRAcksTh",
  "key21": "2qPKAKEJfhPS8BrEQiCasEHoiaA3R8bgrkvh19CgCmqvBhSWF3Kz7uhLobdNsURmsLPAcB9prYNNhKi5jfrtdL5Z",
  "key22": "4ByeZmxvQ17azxHtGV8grcAjCwdDeVLygdKvdXuDSYnwfnuiKx17s6J4J8biAbYXzPBgq6PthPXfRoJntgDoMkRC",
  "key23": "5mvpk3XdHfZdFPQT3JHHxR1pgJvPYgw6dsDYPULAoWpdMd5f7DCkdqxndH6FtoB9yT9yNL72yeG7Nz8ek7QPq85e",
  "key24": "5q9TgxVFPbnEfNDdNQgzzR7p2U1ucvmA6KpmLFxuw21hfsQRQis9JeM3hgLo9EB8zxVemWpjXthaW6T6EqmtQzRA",
  "key25": "2svHnCgJN4o7tzVNxGP8uCCUFmUok42LZUSVUsYR9Asz1wwYoT7kb1uu56CWN2i1TXrj7LkU82sio4PF5Y52aToh",
  "key26": "2TEwZ5yssbiixeYkqnu4axVaqVMR57kF88c4voVKhMaegMrmCo2L6jEfvzgMwdVZ387aJgmhcWesUhbF5Wxa7iN2",
  "key27": "2EPdGNkn63q3aZiPtKy49yqAyCDZ8gvLr4h6C4Mx4n5wTeTDreLrkgANdS4BNRfmMCnr9HBWryf7Vmaiqe92AoK5",
  "key28": "5hrvxKC4GK9PCYVD72rM7V8sNMJ3TWGrJEoHeq7oPhk3P8dH7XtYbHyeZ1JpfSaLyAGQ1WhHgdy31c3drDyc3ggu",
  "key29": "3uG7imkf2pezf5JuJ6idHLAsUi3hhoCqz8ZWeRhNCmxi1hW6Kbunf3hwhSVAs66DLDcbov1qztBWWvVF14uQAgim",
  "key30": "46DfSsRUT8hwU1oNTjDcXK8i6x78YnLpekSK2FdnScnRt6dfDUJrESYBTEDd48AeZSg1JgykDLAUBjHaYSXL6jJB",
  "key31": "3nizW21jaStJwcxxTPSurMe7YxGsphvMbVHZoqLUadtBZpaoCd5m4FT6tgEiUckxSzpojG9iUktpswx7sEJ7NLnP"
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
