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
    "21UUc1XFJjk3cyMbLbK1WqnHWKxd9x8YzBGP46eqSy1egQT6ZQuqdjJF76AfaTigAuot7ej8sF6TUGMT2Y6YboUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KMVq9eFiZFu4HPix8ctH4ZYxf3wFMGtUFXJP2Z2SDUaAwkKqNeNx9aPKYQ9EeeNnug4xsHUwG23CpJyFTdDucZs",
  "key1": "anKVgTK2TEy8rzkgpomtZEzSHR2wVwX1QeQCuZb2FhbY3GHMAyiPxEzAtpGx29WHahsupLXfuLHGNRZJu7GmZka",
  "key2": "5XyL2EkkNukRK9SE6R3XmFx7LNShgYe5by76QLEBKHe5KDLVUGooBrpyhKstxWJN2R6K9amZTpvjGTZTCNVTetfX",
  "key3": "4UNWR4GJ8qGoSAWKtUVsR7f9D5ZDUvbURYNWbi74mDEeaBKVL6NLFCYhmMgHWSwH8McvKqFwt7eA4Ph8vVMasUxM",
  "key4": "W6VAUkLTYs8MfRr4zEiozXJmpgL9frqhW8XfXUNUgTicE8egGugY5pwJgkCcRffK7sv5DFaSeiKopjyVyYNBsqF",
  "key5": "29Q5CDjJjWVFXWUwh4pTRUw7jcu5Kro1yHYo4GbDrQm4TYTTXBLu31efHX7Qp4HWJJ2AbHLbANChVGV9b6KrzD9e",
  "key6": "5Mfmvt3B5R22wibfbhEkKrDuiG3uW77pTNRpgxMmkta1KqxtZ9bWKVrPwKeTcbv7eu8HnwcgPFk9mLRWz7SvuFav",
  "key7": "25JavSK99cXe35mUJZuGtpuse4wHZyGpcSdQ3QjcNBZ5BKy9YNUTRnd8YHDKGAdrM6xE8yXJfmqS2ziNjAKqeVju",
  "key8": "u4bdWfYMfMsJGX3vHdiTCkKfc4tkvs2C1PAyegeAYoaBwSVrsk48bg27z1EgCrqe5oB1z3XhwboE6FTkaSmg1DP",
  "key9": "27CagfJ9ff9yN81u5G2EHHH7zm64qqy622qxbcsHvRU6t6dQfKjLrR2fRCMsLUXC5TRonM3LHkBzmsDVwNd9FTMQ",
  "key10": "4xm5nK6HvGHV5yVETHQKsq9VGjdeRKsyHUU3Pvc8LsrKX2xCttJFJPQpuwmSvMtLmr5z2p2k2o4tEiFLbAs6RXyx",
  "key11": "5hd9shYyJs8pp65SokzBEwk7Q3mekG2S4X1De9Fcu75NPAdg86TeVaz4F3DDc3fNa76o7xfmnaTjV5FsM3WnUz53",
  "key12": "HPmWdDZDJ97uWzD1x37McXytK3LvSPb3Fbd68HQCWS1QsBtdrzYCoUNkErX2zt44yvHCCiFR7ejQ7Tm5MtvNaxN",
  "key13": "26UKDQ6Fi96XV86evpVGkF5o2iYv8xiczARDhXDhCh6SSSkqk8HX5hDaEF6xAoMxMQs4EB7rsXGyvHC4jaDSfW7a",
  "key14": "2mPstQ9KDjs6JWfQ6zuN8WFTA1FovacjuYRqUG7HLU1s7sPo6P8F6SJMHRSAHcxoLX4R2rNJ5zH1HwQhV8jj6xMv",
  "key15": "hpvF6Sw8jGCAskF5wgAmHbcj5XAWC47JBZCAZrtcUeVBNwRiUspoACatJP3ETjg1TeXjsYLos8ryMndntLRu3Kf",
  "key16": "4eqSp9u7a3PYUc4w8uoKJWrsMVKESqwD5uwpNQKf3A2MwegpnhmXvjvVTnqb3GwckWxisuHm2Yh8YxavFWLp2oAN",
  "key17": "BN5BS4Rfx4b1pkpwcA4R8QWCSjRJS5ggk5AvQCK8qhnDZWR5yzKyWJxrtvYrNVqS5WJYYf6GU5gVVsjBCquqy61",
  "key18": "3RsVncDxS3kFT3DCfp8v6nuTzMpmHRwGUohsHaZQdg6XePgAxnsi4oRbnSZozBBSgLtDgzLyWK8PeG43PPwKiQy9",
  "key19": "fkXGvC1Y36kYkTxMr7wCwMcxTgS3M2Wq7S6F3jgdP7xp9PCPhM5ZHUby56q1QBHLGWkd7Dz4enU6YL8G7UYb38i",
  "key20": "4fZkNuiknQA79WB25zEMM62S8L5xzyqmb91954ab9afYwv9xqVrqxQ6Cg9avPEQZ5AYoyTWAQFQZxcgkQbEhNG7V",
  "key21": "5Qs2EkGKKEEFhQeNhQ89aCUbS3Rr3WKWcmrspNkecKET7ZR7UWBuuAdUex3SCnn25GfXm74x3TpAXouuXx4cgJHW",
  "key22": "5tj5TJg29ra8ECB89YUwB4Gx7UYu3djbcxWNKyEVjq3NFobjcitnFyoT2832iiXG913jGa8ubfFGoEpavx8rv8Ba",
  "key23": "2WHhDSz6wrv3vGsFeyeWwCKbxLiatt8MZzuji7BaX9KgakHfo8uwM9ri6TmgWNKTv4gFB1JtsAmiVd7vRxjHts5j",
  "key24": "3mMkfBwcAdtUyL4CXhf4Xx2FGy7Rimtjq5XwxtHeuUkA2HMUNcRvNCSkB2fvCwCPXZiBaD6ijUSTVTyUS25iMv1b",
  "key25": "wBiiTAJMxRyuKuGm1TkKYznxtWLJxKRsTaBnX9N5mepHX4EEqPF8eS7rn8sdm8sxhB6SVQZJAE1anci222oxnwt",
  "key26": "2ntg44mUd6d9N18oisX5cXmY4g53yzNgHGeejEr89HVQRKiDZPn88dMM3riyYZK3WEogU7VBnQr5Jy2wEdXgoF22",
  "key27": "QjU6Fy3nPG3xxGE2Bpe9H7C5t4xAWWKDQkPFCDsZtzWZgiXKfhD7gqMUBEABJQCrowLaM8F9emheKborq7wE9ZT",
  "key28": "5r6BL95VzpBuSCVWq2xTCJ7ZqKoguL1NtqiBsJfSJyPaMZSSuf6E6AjmZPpmTsdtkvnBf5naXA4fNXkUmmQCnvVR",
  "key29": "4iN18GR7WUgGmsa4rKkPrqAiZNABc3Ab8zUc8QSt4u4SEr7Swd1FdvYFPWJuhVNZRJKQN9fwSAWFfwXtpsbmgkSN",
  "key30": "51MaKWsqAZ5KcmHUiAGQ4C55sNfkciFc5zSKaEkuHjx3GNCbkztVfo6qGZ4gxvMnWzurAr3XSo5bnB1jdU6DTodq",
  "key31": "2juayzDC9jHPJTxwaZJZgA9PqpLR7kTWFnn16qY5NuNbhAfCuwr9MfADVe5w1jBdDYekJQqHaAohxpuTjnePBW8L",
  "key32": "18jb3ftqMX57JJoGSkhDWiyKTPkxVXKLs1SZ9zoKkYgEmSXJBBfU8h6FvnrqPFgmQRACE3nF9XPR7wTBdgQAXVu",
  "key33": "ChgtdWSaVCYLRfRZirU8v6GG7cFNp6Er3D33FAhEnBGgLfbQ8oD4Jr4RYiaGianiS8htYB3dQkQCBH4uCD5LFC3",
  "key34": "4byHN4mpV7KyYcQVF9sR9gCnmGaFweQcXjRmDbLNt3Ys5dTMPB5vyDvKvz9nKmkEXJLNeeDpZXpt5vrRnMhYKxbd",
  "key35": "2zyn4Qc7th7Bvjx9UtL2MkWLxDkycWPs1fSpJ5cE1mA8tQccg7pgwMZpV7JSrrLuq6FeVhthJRPoUFLtxaBEjb14",
  "key36": "2Wb2XZDJH9fJJSPp6F4CXvXMeSTTbV92RLA57QL84znPLXW4kZiEUCAErN7NBtFuL8s5iQxNzneLmPnADQXwMg6b",
  "key37": "3cCcfHqpSyMh2canJr7Srq3hkFfgu9uSVFuWzzDfDGPouKm1mRrVCJUiserkATQnnQjd7Rbi4SgmkKnDpBp9SNz9",
  "key38": "PXA8JaLjYnFTmCjzFnqqnNEGxPBdVFjoSVJiwED2hFRLjJrQPAjrEBBgVCasKLzSmNEXeK3k6VTTWckST9AqgLS",
  "key39": "2Sf6dMiob2epMEjsgqzku9aPhh3G13GNptVS5qxLVWETSesdWF1tzckGLfy5ud53V85YzEhxiFLzWaM1EP5hT2u1",
  "key40": "5f9u95ihPxku5hn8CxEyb9C6ZXMCnNw6cvxxLYH2MW4auuR33hPqnDMu1a3i1PfVs7fpDA4WpfMd6TYJCeZcRbSR",
  "key41": "67mmHd9FyL1S8Exj5v91Sw1K33xeG6wyeMH97PFAJLBcivLZzggkP6wJrpq2n3xHGqJpoALaqBhqbkn2gMTGatpN",
  "key42": "NzKgWURgLXnpBXSVVuPGrGH1iKBAvyfoSpqBohjbfiM68jrQ7JbmDEiw3NcmmzsN63U9v44HrcYJrp38pvj9Q21",
  "key43": "2E6hQ8B24LVSFhhesAzHn7FXUeFcR9gVyQ7s2F3gsVBFedogcJMBHxnKmuohGrSrJ7B2eicwj4hvqck9hGgGTYRp",
  "key44": "4EXtiZkKUFF1FB5XufcaBMj3yLWh7m68oEMR4h5bZRJRqpuFEwWRSrp5ecrrRTE1ARubY3TWsAkYWikxsMTsqQzr",
  "key45": "5hpkkGu9j35bYN4XnpKs5s6KRXPrm1TXqFC9Lk91GuZ5zyfj9pgMS6eNYWoizWWb1GarGs26xJxVVFxjJDKGEh1o",
  "key46": "2xYMEkPpsSUXk4rQVvhXGpdCFh4VMw9UQiBvtTgnzLDsKXP1Y4zrUhhKsUXoBZwVh13aC6iKVEnsapWbedEYAzyi",
  "key47": "4LBSr4FiiA1wmCr2fbeDcSYAQGBj2iXCwV2Suq3cdvZUGLzTXNBVWj5KNzmyyK7fQHifrMXKEqj3S6BmZiFccwJM",
  "key48": "3ZZJnn26MRtj2UztvxzdNqVNvZNubP9jAmCzk6ptQvCW6SXnRD9h4Z2WLn3wrn2uWXpq56bKZXqsQWvHz1WVEyep"
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
