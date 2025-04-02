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
    "5pf2uMgtK7nctKY29uU8x24NFvtigHBk1e7oTJ3XB26RcfcC8fRR6bFCevUwWbmmBHzFHchEtgfn6KhWWtUmnjFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZJ4UKP65pYWZKeZwJmWcbPKokyXsyLas6WDhFkP9Yad81KuCpdc5bbYkcrrpXmhwf5GTHi48pGrtEkPzHwbiJu",
  "key1": "25LSUH3tMSYyFud9so9stT8ZjgAYQDxYyYDxgsoKjR5rDoArhuf3g925R9NiMRRzDbcD42dkn7H58e4mPJTYLK9Z",
  "key2": "5TyQi7SAgaKpJMiyJQQ1ws4np3gef8w4NeH5winGzahdxis5NHCMqndLcMYvpVd6nkN9976FVij1at1iRurGVdSW",
  "key3": "5roJGd3himdgon8686Tjx488nPoVpXW22PqQ4e59Hx3To13Q9i9qkisQw4C7LpBkiskwyJTqEEVB629tGyds8BHY",
  "key4": "4136bkH9LTDyo9mGUqKTcLahwCYVpaxueD8QzMGTi9gbJChPD1qTzJGZij3wS2r7buR6qtWvmL5KpiAH2Wxicx2B",
  "key5": "2bm1GEhSQqJQZ9itJAN7yYgzoMgGUraif4SDXzJrrECptaa1ffZNQhmVfUhoiFC9fVr3KpgtJCm65GyRh3t5RwW8",
  "key6": "3Z1AaNXvBCWAsprvAqu4qbPrFkaUWebGUCSmtbAwymYvGXfRPQYfkfzLaDDeJN54sh2MJpMgZ3ZVEfKmaHQdRpaE",
  "key7": "88bVMqqEJ1TpBJGxSLBFBv3eVmhaYLd6VVnuSFpk6X1Xxa2ppNAMR7y1jVdUCia6qnkQtR5A3kcXJHmoYJqR1tX",
  "key8": "DPAawgWi74LNbaUYJ7Ha1ewnzUsCatF6SU6j8z2aDKnW73bHv3XsocAQZSeinUkThM5s2FkrBYRjnTftbfgtjEd",
  "key9": "3oY1MVdaZ8puTuJKhKGE672EmKxmWajtC3TfHRtA7eoVNnVAWDtMN8EnF3bzbDt39jdg4Xrtq7mt25AfS3L1QThH",
  "key10": "4vGsAe4LDVAptJmnguCCGhZLj5qLnZFhj5jVAroSK2wBw6z69vfAHYeAYzPVcEJMH4fqft1Bk2VzgLvL3kmUfCbY",
  "key11": "24pEGJMftkzQMo1vtsyLHs5Y1P2VV7pzLyGHmvAMhCheLtYsBJ6SS8erm6Y81iYDYsqwicLouVHhSo4YPyPZqCYs",
  "key12": "5m2oR78sYbrVwXHUE4AXamdjf2GWduMDPHMb3pxQLCFA7J9vSkbAwZsRb86uVZiR3mqPpaAeddoX3c5xEJTqTwvu",
  "key13": "2pZKHLP12niuWJgK1qfmiDNtPAaJWQ6ptyQV7tqFodcxS4o3TtHHxsBawhxR1xLLb8NGomd84aqmCyPaCS8G1Cf8",
  "key14": "3kW2cR7YpsixAtbFUShEXMhE6XsNPExWmfGL7U83Bzu7An6ZMimM3KpmPDmMxw3MLcizrW8KoqKSBV52ybEbCG8k",
  "key15": "KjNhfCJ8Uk1J3vn9afKVcD2LfnfwSuoEtFThBBdBwE9CaX6jZQRDjoarGgqnVVGnpF8RFFc95AwXxb63dcXVz2U",
  "key16": "21XVzMR25uePFxwmX3t5bghGGQcYk5tVT7nGnx2upxnfwi5p6jpMsdwb5wp8FHskkYtjp8k9uCQcwesjhCiQNkMM",
  "key17": "3hbGzYKjqkCJ4WZtfMRhiDLuEjhP7fUVy3aFDV3KAE3GUw286SGTyZabDiLgjwiSbV1YvpiGdm6Xj7tN5fJr8GbN",
  "key18": "4pxJkrjnhroGXpdCwZKcnaEZUisfMHK2MAABnoZ2r4W7KVTModyY1JHKRTsyg4psHr8EppxZkfis5Tz55EZJPkMS",
  "key19": "27JKbn44sLC4oGXKhGTjKA7qBArx8HFFPZAFUYDbxBsn6v2WmR32BnH38SR2WL9fozt9YtMkTMTu9XfebRxCjfWW",
  "key20": "5sHnE7BFvBn7FNfpCVgPvzcug4v1bGZKU4Uxe3NU3p1mtn48JYYCF8ye4Ygumqtw7sK1eAgXg7hGZm5UWBzcjjK7",
  "key21": "qLuE2KzNMeofxBaRodwMbcv8DN3gziMFSQTexxTS3eQUUx9K7mKXXaFv64g2wL8G3sNpitKbqfM13AW9gAVydfz",
  "key22": "HC1mZAAFuV2tptMW3Z6azUcvfQ6DuqfX6ZjNyyhy489p7JeZj1U44EipCstw8hxEgQA1rQN4VuFggmQiHyds8t8",
  "key23": "5QUxxyAqQ9DxtjgFYw6tSMv5nMfHuW39pXRxqLotsYDT7E1Mm6ESzzxUcdxbFmdNytWoo3RQoSVRSmpatGRVd3Me",
  "key24": "5DDXmztxBMgdy2NuX95Yhph9Gs7u4QbK1UktRPZsrHqBspj9mmtd7otkAqgSebKLkJkPGEN6T19r3WF7Q1uS3JfB",
  "key25": "3jkeyn8wVxm2egv2xNfKz1YR39jrRUqX1oUFov5WdDo9xVbKFYFdTWm2oHvWJZVYJdXQVhH7bWqDZ7Wwhp2Kpjra",
  "key26": "5h5FfaUobzZiE6Ummaf34rXc3Yz7XYECwosiBk2pf4a96Z3CmVR78kPnmcjkL5vugxteWfxbsRPqJoVatSoXqiSB",
  "key27": "cFjmy8gzdV7qxjkehVQEvb3fM45JBmToQyh4u1TkpewzUJ4HNpYqxVUvy11HSoYbsMwa5VgfgdMQcDy5Xz4q1Yx",
  "key28": "4xmfMknbX4CEB67jaUxNAug7z5UiE1VCkVMp3nLsiEkrcaAT4uYyRF2zRWWdEZtZckU3yTg7R3GYzoMP6j3Tt24X",
  "key29": "YoUMNg5FEXxiuuNXmLL5tFu4EzEDTbXPy2Q95yeBeshF3X9NRiSnKf1pVWJHpurATbxzQoXVFYK1aaPNp4nYNXX",
  "key30": "65KSJp8uodb1YJbUkyRUcJde429SgoRKXYm1bhrKSfg13UXMpfZuUq15vvXK5UdEJtwHwxN2ydyYu4HMSWhqaPSc",
  "key31": "3ZQekJ8njGBXLuTBABMfamMKWXvyMRifxyn1MrEktbkdSw3Du7pJHrU6hAAWgpP2yaxmLuwJ1KEhWSNwJyV7wAyJ",
  "key32": "3wnpsNq15y5DeKg763BA8X6BUy1gTti3W4Vb5EDBFhjxxkL9JsJA4Eihz3wvsns8RaQzozDfQbTkn3XphPjKeJnj",
  "key33": "2wnhcc4GNXduwW85ZGE1VrBciewewgqndQ8YCF5di4oUVVGNQmopeD9ex6uA7Qftk6bCsjAYSH7A9t7G4SBXMCsZ",
  "key34": "2rp8sSMebnv4DDSC1zRcS5P3oDBPzQzm6ejnQCRfxp42vsWQyJeVMiaLYBzaUdgHdA8PVGDdGvw6ehjkF3KFVdkp",
  "key35": "5jjFHLckXqkWVkhcHJmW4yvKpyZLdvaCkr6wt9f2VyNiPiXUfRCk8fBqh7MXrfzywSGCJyqE2JYwZyMSbSqqFQwF",
  "key36": "59FdmCYE7wA1ze4jj5h8k6uKgw5DykPxKzKyQnvkjUGxwfL2MNRzRj6P3we8CyjkvexYRSjGzyBUasvNk3buhdnE",
  "key37": "uCi9E6w5yhtBYVs8rXCiZLUrjW6ZansdfiyhLg22sjME54y3ky3NQVt3AUTPzhdL6qRQqBNm4q3Drq3TkcwhV9P",
  "key38": "67Va3QgYXw9qPK4qGzSnUaQ7eiiHA3tE7TFTGh86JJ1jQjkjxpFyDdXCCQnHNVjLrpHJDEzD1MSKB696BENk279g",
  "key39": "3td5DzyhfibLTQyVe4x65keEy68pXbVv7k4Dc66ghWe8Ni1duXetSei7UQBEdWANVak73jyMqqPfRQ12kWkMosrM",
  "key40": "4bzBjjVah4kT3oJujxug3KeBepFtaXM98g4FXsVD84DhWEnen3BBeLNeDMdmpamU3NrwU3PoJjNLcNypfngRH3Q6",
  "key41": "4F7B2QNRDeeDFckiWQnYDFjGFK5xhPs3rnvjKNsAeN2omLE7ErgQEn4zDJVyAaFAbf7FNbdY4RAUWUo1wwEXHX26",
  "key42": "3cKtBchukYjbsWn3YG952Daj25EDfUxNuii7Vfw9EFagcwcXaCXszyie6E8aNyUfSaYGyjAuzfYrsu3Za17P1ngG",
  "key43": "4T11prkjZAiakT1qe1kBBMi6D2o42CnyiLKzWCvrxwcpFtWZtCvE1SPtcZ4WvdMSLPQftpXjX4pmyKr4z11VHEbM"
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
