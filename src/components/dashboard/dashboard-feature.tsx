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
    "3fw812S7Eue1E3TAkjBZDSTrzwmek2QupK5ofdbCNDSmmKQjNbjFUWJnej5SZZ3UL7Wu8JaKU4heQfEzMEofyCr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nxLLX6LxF5j5zi2EnFQpMopTynuCK2mEFDK1pB33uVSJEjPoX5EKwdMnFVWno3qXd2jQr2Vn4KMY5oECHeWe3Gf",
  "key1": "3GrrbXEG58bmvaPdG9e3pQnkNi1aH1JHMBGnSvcNF39uEXDtjVK2rQyu3K35ZWDKVRxP6M8vsx62H4KgkTyPyHpr",
  "key2": "jabsDTgWsYgHb1xLLmPkmS21AwTR5R1TNp9ZQCTEiJCS3gHjyPRRZEa2abPJrexXFQaNxVFBGSewLiTzGpEP17s",
  "key3": "e7Tmeo6yQjnCAK5wpA5tNfsetysf67tSdZMUhhvArhXEnzxDqu4CkwR4mr7EPuSQ7YnYVKpPdFVTnqMaiBFWzQw",
  "key4": "4WBXbE3dcASB9Gvh7JiSY5mtbMLwCFzhUhUbyQNaw5cyQ94KT1gev7NChaSUkVwydCyTDmAwt5HAXsU5s5VBpqKn",
  "key5": "5VmDZ891vArvq8dvcqJKFAjvH5KpG7uQr2PNVwipqatRU4cPYHo5weRvpkMYt8usqNDZdW6t7JMm7nKo2JDrgUBe",
  "key6": "3TkRJYBF6JmLgZRHvkmQsb3BMH7738uYCbWTH13j9o2N8PGeZTPvGwNVk8geoEdfGHneKWumgLS5Esux9gnomkNH",
  "key7": "4kxnuKsKG9sji5HB7ytXag3R5rGkV3Q6MJ5eqNDhr713Up1ETVXB37Ka2MXLYxYpreUWhgpN2nQ5aUpqrx39ztaz",
  "key8": "4npJmmBYygA3j2EroPbbwgit4afnAWg7pSa44rTLYSyXybBMfRBA7vW66cVDzTrG7EooZCrj82rZLWJzFfDmWrxd",
  "key9": "5txAyWTcaGoVuqqQojgCqFN99m7cHrHC4eqpyyJsunX3XFxzNcbVmmEy5AspVjbiZoSGL3f1zaDx5ZZWuEbnxDn6",
  "key10": "2BQqNdJ899qvgKw9P1ifsZcEHbqE7anVRAzN5Y3Snz6hgbmWTBzynT3X7nN7EV3vDL1YB6wkKnXhH5hPoEd52nqn",
  "key11": "5hAnzdVDcJRtEWTJR5zmyhLJf57SNnUsX9VXuZDnbLMi44LLGrpckYX7v6E2se2Jycr1kKSWGWMqvLrJEKXAKFqN",
  "key12": "1ypS4yTbPUZWTZvuz1FBC9khqPKnTfXxibhSSAz3cKKU1FBLgv1yhx1o9EPXsYJw7mwKuFVJSpjUS6LNSDDrUUm",
  "key13": "5r6Tu5scRoEM8DD88qhM65qvuATeSpVxRcSE3oeJGWMvdNfzK97VSziMcguBAHbTJabUqPShHMYvDj5rHcwUc9fC",
  "key14": "4kYyiC9jrmKRscwXyxg5Dwva7J9wmADhHbG4P1KtHgbPXENNg1HenuCdEpfo2y4QMiD4AP3JPqV3BtaAYVwNToYZ",
  "key15": "4H12E1MMbZANMoWnv1n19wewDemCUMfocs1CQR22u34j8MeNuatC7SMaaAsVuKKKrDbXBG75kj1Nrwam6LAPTawq",
  "key16": "3GqiYttcyjUpWsnx516z7pqiNnYmYNDhC8oX4CYi1CXyRphNTWXBPvYsghYBX7EnEGZWmduVFJ2Cw6m8kHhSQG2R",
  "key17": "4Yr6ezZKvMh34RRgDsqbk5pZJ5BvJ6aaKb7iBCA87cWsvyrCqVcp5pev9ApjRmcQQaG63LdQFLhpx4tzGGUTcJFs",
  "key18": "28doBUGRZqZxQL7QP8ZaJXVAWRGCtTyuVUoZiYtNKVjb1ZFEyRguZeKaReaioHZsrfeRMdxtdM9GoPxhrHv4vs8z",
  "key19": "2UJPowJqqdgSf2LYLDmmvm4Ly9efSZecLz17BFRCystGz5TFX4fFFuV3JvjQ8QPDWEkCEKxUrmtxpVuHADntmHoX",
  "key20": "4WXz2RWBkDVBLUeKUazXgx49kyUQ5K1D1iBaSkEC14qmZ2XMoUqPUrgCDheRRHmPUqx7x6eKk8kYgN8Mn1PppLDH",
  "key21": "ahGoT1cyE7GSwSmwCKmw6ktwUHFrhTn3ZfmUPRnDGK77FnksWC2iMqEr4sEK1iqwA6zrPY3enqVHWxCEnVpfKsC",
  "key22": "5N7i8SzEmjBGPPnmvjZEurpiFve6ogB5f5NVfcWDRxMmfZwnxQzqSHo5a2FmfkzFULbFAFBqKQ1QNzy7rGa9sG4h",
  "key23": "65ixNnV5oDpcP9tKgJKdjZF1j4mi1QgQp8SkFePF47yBCV5EAGnC5ZDdurRWoVh7WDFNi2fNMA27QEWnpCJcpLzb",
  "key24": "3QRx1EPpXGMNSLtKhMM82mBa2w4q1En59HAnLMgwy1Tp3qPptRJq9kEvRbjvQZngozEFYnjxfi9CuthrndYeb3oc",
  "key25": "2w7fyCxbnjfuGhwi7brsQkBfxShSvmuNkAhVYzQxmQJvQnUr6Jqz22624ccFJTLBrMnX2k9QLQRg5NECzYZapaPw",
  "key26": "5BCU5DJnsFmwBjMEqWrxqweo16SV9hDXLVxVZieot4C2FqVaBDG4FX2RTYRUFM5B8MYXAyFjqGdP929dBmfLSFQb",
  "key27": "2m9skxbPhwUCR31n35atzX4iqpawbMcccy45FDVotkGEzUdyeKBT7UUR4R6GsQXW19qZEhp1vGBi9iQ6agmQxhZz",
  "key28": "Jyy3o7oMjr3UPhG3uwVg8YX8T37crfqwKSkZqcWR7ARkXDYnKPWJ6tATWnXs6hNgxnDNjp2M4iYySzVkDdMzWL9",
  "key29": "5ZsBnek4uDHcY21KfcN6ScZ8fqmvTiyPkqorXC5Zq5eC5Ux3iyV9NBeusS9AaNFdMAemYDnFaUBdRjGcBwLY1nvq",
  "key30": "5sRcTCzf7ktoeh59bjFCXX7AU2Jtto8jMbXh1smTai4Tb9bkueZdSJj2gyKX1ECooABKfa9oHZ18bqim5jF9TWRw",
  "key31": "Ct3BjPgABvv9VdCHT4dAA3MLNiF8FN1hzgXJuaj7z2sbRkjupsJQ5iiQA66prjmTA75pG4BPSc8nAmbAnCLm8cy",
  "key32": "4B5x9TgS7prYt7hvbYg4EmRFut1JDZzUhMz27jmmjHKbwM7mhcezHZVnKMAnwcak74knYj6mnFYsSYv5Pts3ihba",
  "key33": "WHfqyGTfGuwwBauq1krPFkvonJkv9Gyiczvi4zZ4mbDesPrZMatempH9MsKbxWq8EDPxtxRiJZaxHqrMENgL4UG",
  "key34": "bTkdq9XFjDpRaaAnG12eVxwALeT9Zx4TS5YxJfaNvcKz9DdKYmw6TD4q46kL2aaU5TSgVSmtijhvTZf5KQy6qZE",
  "key35": "YS78S5BSJbsf3jMSADKtLZ6rhg4hmr8cuggaJiyWimGwc83WibH17rUMP8wn4JFmmGMPLTwnsucqUkfopSfQ8am",
  "key36": "2sbSM18VLeWvnNJ7UdKprBUWmpc3LgtDhichwCP9u4gAtXFxzhqzUbCE4F3CeQWh8k2BDhpsUniFLsu3xspbZu5x",
  "key37": "3CYE5y7RoWRZA8ZqSQnCuWvsbGNR8iav1v2iE1c3k1JD7fQtXCyuTuNw82mHdTyq3snd7bSRq1DPgs48JXsUHSMi",
  "key38": "2Wkb5ovKUHb2BL2633wVw3UonTE2XAvd9Wb9uPZaMgRjGw6KkAZqD3ip549rcUQtnkPacJCrfcGuZXc6JBsGsEyw",
  "key39": "21QBJxyQdL1RjZ1Jng7BBHKNbgvmRaowYb1eYMRLgGn9jdHtzbCNjTd2B12edcZRQEoQkwvXXYdsJVuW9rgdA34H",
  "key40": "5EggdMs7gFHgP8eakHSgYaDSr6dbKXMBzaLvQTbDvex9U8w1GRf5WU38tGcmTLiEVxBGiKWnASRkf7FKVnUjytnj",
  "key41": "3i6k3AWLChnD2TPNZTnXC8PZtnJeT6zF4YQHvLH6pZURnY7BP31r4yBwpbiwBNptmyBrJDG14muAFfGYAnwZoDxb",
  "key42": "3zCcbmmvSD6geLX3uBPLaNuawFtwDbVRYsGoL5tJMrUqHfS3DufYtLCePM4RYTrKhbYKkaDrUW93aUyDmpdN8t8w",
  "key43": "36Lsz3qwjem9YEDULZbyYqZZMLi2M8SUEdyWLkDPC9k75fww5rZB4prnqkkZSBarH6ENsjyqjsHGHSfLwqB3zjip",
  "key44": "2X3MoKwR5YRWdbbVaQeK7iTcDPR98GfkSHnt5PQMZcSX8qYHaRWAxfiLLduGYj1N3452u9baaeix7ZsgRRB4cj8Y",
  "key45": "41cT67FXum3JpuUdFR51m9wSGKPfH68jottoQf2pr7RiQK9UU1apBAfUSzH5L6nM2niauDKLBrETuqaUvTs8YdsH",
  "key46": "5aqZnymSmUHdroZtn4mUs4AJzjyPTXTauNsSETjURxBeAFbbaXQJpjWx1jv1uq4tvLJYSvEXz7kQYMVdPBb3qz65",
  "key47": "5QtW1yPJxb9NPjtkjsyEn9LbUruzRwUmwzCJrF2kAmc1e5v5SE7TgwHuGJj741PYyMGf4e1dszTyf8yeg9X9ExPK"
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
