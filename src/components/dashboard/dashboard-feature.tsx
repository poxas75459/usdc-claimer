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
    "2Lffxpa7e66hNUHoVmRkrgZ8acVCWD7WUVWkXLDmwZdPZfTkF6H5h1CDqBpq1Qxv2mkhomtR4rcmArxPP7ooynLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yKunYr4tCyYradheoP6e3ZmeMJwhXcNYBvJ4mCAX3DU39zUQ7ChfTRzNhQDJEckbojfL8VXWLgRCDAnJPhs6k76",
  "key1": "3xdiznjpvSHCVajAcaiXENbQkV5GS1wn8v8wDogari1zdgd7ByAUmydNpcsvmW2iqAm7hHedvZzJRZBRtP1EBZ8g",
  "key2": "3g2hS7HN4WYEvCmcQ9SThh9mdBvrmxP63mNoZ8DcPMNCppUQCmKTsP6RnMP2G3avCQv7K4D9ifGGtaeytHnh2F6K",
  "key3": "8hyWnXWjr9WE524qiiwkWwWdAnE7zRUfdHfTMJm5rkZSqHECgonbkuC8jG9FsZfY9kreJVZUHoGjArjESjBapnm",
  "key4": "4sDo8wnkAwmY8o9bfKQbfUekha5rijxPtsrqsr4TV3WUaC6ybZvGSaKNb4TqKL9sPFZMvtndSasHWrTnsfZbjCUw",
  "key5": "2mrAsTmEoTGtQQrzpabDBko5iEeyqce7Pw4VzYDe7f9tJdpEXGvwcV85KAAPnkErefsvCWVi6bQSUYQ9XuXBcSV9",
  "key6": "4PPhdLxAntSB5E6MRFJNyqc2KZXhS96cS1tT7vEvig3K1pFEqPRfhqg9ArwfEdfTZmXfoBDAXB9JGpc6gmQFzChz",
  "key7": "2HLZtka5hDDuX6MuY6qfrWAvtCxPbYyEwPnfafQNDuRwQRrdFqaAsV9f2MgLHP8HKzMpj5jmRvfFdjz3qv7JxJMA",
  "key8": "5EjNcjNhNH5sQWjcGaCK7bAysxRK2JCjdWFjoKDoJUkeSqnqw8SfMRKtRN7jmcExBPVHpTsFEnHw2SrYbPfVg9c1",
  "key9": "3yrvh88MKeSb1UhAeiAUMT3G5WJUDFLBUD1BuFxL2e1yBoqE9KBWMbBFMRwUsar1u4jMYAfruerXZ1Gi4tWC89Kf",
  "key10": "3AeokStSkKnHbFVAgxTGTzo1mBrBmPG6ezDp6UFWBH127qxRynhRWsEDSuuuKk25hwo8E7HsLzoY2Xt2Ci682cbV",
  "key11": "4ML1CsAAV1eursXRSiKhR4fVXXiDSSbjFWosKQEReHa1hkTcRdCFBXSHnmoZMn82NsfNxgNfZJR39AN89FwfQKwC",
  "key12": "3Fy7u6jxgwJuTea3ASYnX7EzUa1z6EJkN6sd4264wFmes326BkLc8XQV7Ve1w4A5dHNkWCmhtuPJX1tCCWbAkNUF",
  "key13": "2TAUVC6Rvrhv2F73mYytdBNqGtypFuiYYWyeRu5aEaq1cteS7teLx2h7NxMbrWTmfdgYULb9kjyTN6stzka7XqHp",
  "key14": "45ZSEQ4Y73wPaqacuvUidQYtpbt2LZiZB7sAKVYuCPUCpoGetmc9pbmg4w3Xy2dYx7ce9StJAAbCREFdnYuZJZVg",
  "key15": "3QWsxgNT57vy82WD25F3NqXJnsdiUWtaFHEPmTQP5y4QPzxvwwKrS1djg4j3SWmAPKzmphcDiog6EtyEKyThWviu",
  "key16": "27MFVmQ7BRxMaG7GCvQDiUNWqZHG8U9Troy99sHPZ1AbkJE8cjsZ3f6vZWGw75t1BngUr85nVqRphygmLzHLdeqW",
  "key17": "26E9UXaxXk1W29A144swyZeUwNADsxjZYVG2vqxasKty5G4b9qfbY6b5og1vhiJ22vogQ4A5NsSaxwmfZgMKTprP",
  "key18": "8tJ5NxUCQjWp8X6wzipTQrgqP6sEq4ArjX15pWgX27GfbYWBjaQT3c7UDFDRrPdY9yiQ22Tpzw11voxGJcNJQz7",
  "key19": "j6DAzcNA1HDkDYAJcoJLifQ7YHpoD7evuydVA3CZh8QEXwvQ4dogwxGBcVBjovB1bWZXJLYuAQSApREwbQ4cc9u",
  "key20": "44SAxAw4NSzzrh6hg5Wz9rn8wwvPDu2dm3ToDo4BAVDrbnRU6cUegVga1FmpgG6cHabRMDAqNzQ2peTnaf7Zn21A",
  "key21": "2fmQg6X6ZHZVsGGrjXMJcHQscgFPpMD5Q8UoKzvwV2iao6LYawmGRFvucRmWzASgrUvL69MhN7wdZBexdbesb43J",
  "key22": "4m6vPQ2Z4VDcwtDwuHbq3iDPam749THi454YRHKBqLiNqK39nh8TVTB7fu7NmrX5RyCYwaB6geuNe2zsa8GBcrcU",
  "key23": "4krcsFYsEai489NZVRHpwf3AdjUM4WmNzAn2EBdDP577ywL9hB7VJ6JmmVwnrPgmHgQYhKagpGHAd9fNULwsdgy",
  "key24": "2bHow2YBN3LowwFb18Zjk1bGi6zyd1AvSUiMisJrJgaCS1jx5i3Q9jp2e5XnXwNUevJXWb4DeT3oE8uqkSVHEG8j",
  "key25": "57pXZyjX8JVPKyUThYeVpm4iSp9xkpSzK6GkhVe5N14FU7n2c34EbyTP4WWRwyt6bwckSfKF9EkowiFbLfpwEyhD",
  "key26": "5njiTWi6jn9bKkcdAq8MA86ns1K33rzb4jBzT8V1FiHsrSgVfAy7rPwme7QvPuuTEZtz7tYfBDNGbNfinHXc7o1B",
  "key27": "3ThJFcjygnd93UUNESQae7CgCqrFrGGHACturJTujVy9qhDoqxizcASbNWFke8XPz78MNqXGCK2fqJbodJ7HPNeE",
  "key28": "4b5nZMxQLf77vfqD4Na2rfBkGe8RE7n9zdCGfHY19oz3JYPf5VJCYy3UTidos24xG41vfceAujDW3eewPVSUQjGC",
  "key29": "2aCrrK5Qg3pi6QT2Cyan6333Lh8NJgjNC2fqNogQKULgzu5hnxvTCrSbC5pjjPBi5iiHcVFgL24qu9PMveh7y5Aw",
  "key30": "3M9ZQfZvgsr7kcQzLnxVAZ81Qiy291Z1FHUu5xJp5hvn3EdNNYdFccKZhfEM2McTbfGQ3U7eFA1DSAdr8MY9p8wR",
  "key31": "2iAAqwy3s6Xb2FyMdi3v8yz11sM7Za81YHddMnnSRkQagX5pQsTfKQDzbU2BuRNsDyoDfcZTVPUk93yTpeBjwxGQ",
  "key32": "2uqF2uBGfX5oCcYceTR5K7mabpUwta4DeDKorDCoQmnRBTh6jzS1qkxjPsAhs8HpdfmPYAWnijknpnyqD9mwsjBJ",
  "key33": "PdrwpJNLtRivHCWwenUXneUtvENy7QQ2FpH59KsmhGWRk7snj5nshzuGq8wkgvxsZkyf1duiqjAjPYdD1n1iw2M",
  "key34": "2j9dc9fdjRHHEMszDnSaMLKYUJmkSZxJEchMNR9fzDTZ6gF68hBCZGYmYupjXf2krwnfzZxZTbBFX4iwB54P71YM",
  "key35": "vhJ2mC4vfxVXDTW6abeFLftAwYCLzNc6mMfth4g3e5dBv7C1Ks19zDGSkmnN7xoQmE5q8pPNEvCTNarFmoWpEnW",
  "key36": "5wpCJziThoVpG9ZxUyRR7MSibcXA5ZQLqnahUkhdgSA5dKvBido91wcfrFkrVjuJsb9SwE8iNhcNpt2VJeYPgidr"
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
