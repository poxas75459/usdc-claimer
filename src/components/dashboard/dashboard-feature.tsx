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
    "5xnKBsMp78qiBBnMfsPC8o83ZC9X4gp7Ma4ZxoVxPH5JVCSYDDoUvsVhP2JAmeywPDjwwn8SheuYdgw4yYKYbSnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fyf334sR2VcSKfmzdqexLJzxdxpDAgvPxA7XkJVoewGzLftUXBdFtX95aoReofZ8xTmMZrgwSo3hGAxRa4HQhPa",
  "key1": "3Nvrjeuq7UA4HeNmFnhP7eMq1sCLP4uhWXob4azkLQVixCKY5uCA3j3pwpiFbsr5Eo6xpUadthF34VdvMsT27Lh9",
  "key2": "3mJTxbCmavdjAM2WVngy7AJcpxEaC2oF4Z4m9rspb4xyp3JfQSb2VnWoKw4YZ1R65mkeduReFhM9JBv8tfTE2CX6",
  "key3": "4VefLRh2yzWMG6tunrYLwc6KVfzMh1ty3At8KGYNxYLA629pmM8DhCdUcbasZt7u4G3S8c7iWb4UJB2xiXp8DF6d",
  "key4": "2hKKa4qs16a2WDf8xzqa4HNsvnPmch5eyM8zuBcFpzifKoYyx6DWd8VrED1s42wMxELRN4vRAp3JCDrvizMTjz6h",
  "key5": "5S2fKpHq7NqAJfv6mNnX2YA941oZjJfXR5V9hgZhUatbYhUQK7MzzgXT3kqX1KdEULJiqwWgyW3vkB8nxVbXAWhd",
  "key6": "3WeUavT6kGvjkzbGAthvpH3rjMUP3oN2aWPKChv9J3SHgCCAN6sMrHkU8D4vuupRf5gqwughxc5dhQSzaMCaBSaA",
  "key7": "2PTtv8EsBSppXGtJRjmbsh16ZJTwafxdfa11BisbeboeNkiLtS5YCTAaNptC63P3obhxyod3dbF5u9bNqvoet3Ko",
  "key8": "5RHDq2YhgF66qUWYvCgLqNDf1KLAccutLSn6KQPpGEJbsDb3MSouPg2f1A6rRyNWEcfH7YtuJiETRLJqJpLZ4yBq",
  "key9": "2CpSNgD3Ksvyqiot7BEdFNwAhLUtwJd2tEru4YUrKHqLqdyLweAvozD7g1vPL2iiBVxFdgA3YfUUb4CPDvZ6ZWht",
  "key10": "5NJY4XQrLMqpPWrWiN8LBkT55RB8LCEBHpJ51AbaKGKdQgFpEB3mDHByXhqudEJ7veLHbPJgQcMtSn2CZmdenqAy",
  "key11": "2vHhYNmpKiT1UpzBo7ME8vHyrbH2NBJS8RAnVRVdFFigLXR17UyB6vZMwXtiMxsscjUVsua17t3cu4t8dLH5erM1",
  "key12": "3zXA9w8zoNS2y4CFnkWTWei4cWup5hNmBHg15Gtmd9kP3G5hyAKSG1cBMSwRxBgnbsDyLgjRBLC8rbJKjv3ZKgBV",
  "key13": "3BsNsdhMMeHE2jii7rW8szFUURE1uhT15PEd4K1VdFrPCst75iwR1rSHBxrSkW4JsdrdjjzfcnAakr1UqxjKxVG8",
  "key14": "4ejZn9QesxUsH5EgpXTdaeizQpmWfdHonfeULSTPr5FJL2j2HMseoZHZNAK3yeAS16sWThmPv3mGGvNvU2Z85XyJ",
  "key15": "cwagNm7hHtJmGF9KLmbzaVKdYRPZSRjaFeSXE7st113Qe7a8sVVeiYzDRjEkDT81kcTesGVWTCLVDLMSygyayPf",
  "key16": "5sYD5owqF3WaZmsbMfDuNexFtog2pKbbhgPs8GcjMwpJMnEmveDKZrR7vr6AjU2Hw7cGdqZKd8GVb9L1sMTnqS8S",
  "key17": "gHBw1Vuz7Rx9z9UMy1kFBja38AL7MYdao28oYG9onXpZF6GvQndwxqNxnD6MqfRkeyTHzoCaA13RYeANK5ZqwGi",
  "key18": "5TsXoHcnCV1MDEUPjXzec6jTXxqRqtym3mnaDMQrR3moq692qL7BajjA7iM1qRPVLk7mLAYMZDBL7y3vHYmhT9mJ",
  "key19": "grVbSDFpSbARtfQwERrAL2CgYCStNofBVpDuNLyU5PESgnPgvFr2vtQhc1XDHqv2xVeLXPwELcRcJa751xMLtGN",
  "key20": "3tN4txzFuv16wUH9KY3q2LPQYwDWyB2az3MPDXYuTr8uc2FaHZ1PWrqNtCBeudAneiHWEvYLTnRypgMy13eXk1d4",
  "key21": "2oqDEkHa8JjibFbmUE4qhKNzKz68pNCzPxdQAMUdxY6M7dCbPsHyE6ZfAR7z4etBgio1fXS777ceuAdiZZdfzEjG",
  "key22": "5ZXLQossEeUz7HXsuzZ4F6gS8G8kSrt78egeURDVLt5UvYUodkQdiwq5gizRyKuSpuSSPk5YqMASG9yLzdeJPDtP",
  "key23": "nVnJYBDjmgGat9JcarVXRXWAxXV4Uty6vRWb9TcYYhPUFkPK3Mi8vVTzRSNCQ6GP1sdAdJd4ydsnRpW6Hy67VLS",
  "key24": "4JMaea7qauznun5UsnokFPwUJLGhTidUhup8cpZFkn3HJ2WBhrwQ4hf7V1HCFHFkb3nWmAXcYWfpfxzzkCuN84fR",
  "key25": "8idpJqdGX1EMBpDyZKuVQYRNWfpwCHh1CiZcRWfSbbvfVWb3TDy8GXdwbYimhzR9QLVtF15RKi34Fz74F86CPMQ",
  "key26": "3USkJvTmsfwqYbAAMS3yBsjJxzY5U3kXw4oSNuvB3s98QFifpjaXa2Cg7F4shcrZtu2BPA1U9SB3MSoZceo9vQZ8",
  "key27": "2uTT1xcXMTjHg7kzU9doMcfTZNfDv8ZN37wHaBCfcduKAUHLQCDxk3rLqE7WXkQ1GW3Go8E4UBfkhjwQogcfX7s9",
  "key28": "57KPwXyy2nGsLMG1E7PavapRCUcxp6dxAkqD6RtJDY5uNiYSMTTZ6T6SPwdXKHjufF3AwFkCvkQqqK988HuAcHdC",
  "key29": "3v4xQq3sjC5Gj5rEtCNM91KZ4sLsf6jfaGUTdSEvvezp7oMVmh5z9w4VB42A3HQtuLJS5NsjF4v9pejyUe5TcnJy",
  "key30": "5x7Uiud3BxkUoepcME1bbww3wj7iA6XnuzxpqSjPadkEPotxRfjgBvTWNq2QsZP6q1nT6RPFVhuFhH3bqoeFH6Mi",
  "key31": "3BimgT3DxfuEYJf5gpoeb5WyahuHkzdTsJECVU7tL2sPf5d8DBoWHEsS9pqNP5RXuPCDYPuuWraAfnAHU57WBZRU",
  "key32": "3393scfjnGfvUPNQjnFuCaWHd3KFvwKG51eSJ7PhruYNhT86Q3LRyvSFbEq6dbpLERU8tSYZY4GFvYs6vE7Wb5Jg",
  "key33": "3EWDi7NtGHXTBv8vFLUkB1tLBCQ6PB17ntvw6Ugcozf7DytaMSrDCeW2io9VNn52GPq3UG5YvhJtGy5wRf8Ry8aQ",
  "key34": "53yNjbMmj1LCGFpqXZW65vhof9KuwHaaHqsNLc2rNyDL6S6JHEVe5mHgT8FYMADzPnfeYJXjsFfqe29gfHEgEu9V",
  "key35": "3oG1vGcZVB35o2pK1YWzZYrY8B3AyZuToECVK5Ee78vP63kcM1MgJHPfY35Q7h1Va2aUHFriZy8qRvtAUccmC6RT",
  "key36": "28EFh6Bkn555j1cGUEgbBXpmyUWsjhKjjM31ePzdcjzNwYh53huF4RoH4b9B93NqrNTP4RE3HXLmCd3qpt3zBEsn",
  "key37": "44uqiaFPQfYgUMtaJDcziS515jmD2DxXraDCmww7keqUP2giabm8XbkTRnNr5oELLTtJS9fev2YDHGZACrzcoaUo",
  "key38": "5r51hRtMcotwc8LKnMw6Ug4R5thdDJn8JtssDTko2UpKE6qLwYc7M87sc4bpMceJyumQgFkWr4D1QSgj3fLPr7V2",
  "key39": "24RwHsqFpM1kff1dRN1RZmK3Y23z88yvV7mVCNq91sRGK6JYKmpYQPLzzMtmVdHAUCW8ocTcbBYgcrbPo1oKpLWx",
  "key40": "5ACbJTGjqvF2iejXTA7Fuw7xe5pzUGmrHKxgbKh3kQHgBRDixszivGvhpTQbCkttfjtEGKmjzyiLc122aFj3L2FH",
  "key41": "3Mjy89qKzPRfmTfDqen6hfFx4bfsHKwmEe5qjvLobgjB911TTmBeTZke83Eq1QzbUcQgE3CTSMYr78D3HHgBV9D8",
  "key42": "3JXVzXRLTAm6uKCCfzPcjtkv3SyL3MY28qM3zaSqyABh3WxmWdJATM3LDieY9o5wp2df1XdoWGhkd9s7kEso263v",
  "key43": "aCw2d2WXUb7DHJpsQD3tmKyt6d2ZKbGc2KGYPnuF1Ey9hAWmE5W5upSdwXRkuEzN8V6TFFo7TcPifa5FY3ra95N",
  "key44": "4XeyxHamyfztP7wmZd3suRKKViVXykVR74veeMYSFrrSAW5JJ4RXdAWfLmKbJf4YBrHotCd4HHEEVF2wAMqonZH1",
  "key45": "2wxGdHeuWJ3JnDwhrDoF3ep3k95TKsCakmxQaySmCb34eCRoDGMVa1NTq9W9DYyFGvAZHzB8RRVb9Cw156uxfKjD",
  "key46": "2L7EuYxVNvP1rgxby5VNipXF3zTt3E6oZmPcU1xqytwa2FyvTTWiFubEpCLdckQru5sBWE7eYJZcbSPdtKMqbxAr"
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
