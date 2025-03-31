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
    "5VHhJGDoJPu6EWprtVJPqvNHhtagvQPbrehEXDamrPDtUgh9EJkP85JSVNZCqeom7udQKuhi1vQGztcfkVFiJkm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37zrAA3Frpheiss3YGeDkZtcEHYsgBDFqPq4bUDQVqq9kqp44Gj5P2Y23skE3rij4E46fvFHDvRagK3eWDTcRSYj",
  "key1": "5UjQuU4nrzHqV8TcNtcduiaqAsrwqw4HCFPDrDfsBCWKy9DPhVHWzaBRSYyjUCdrcR3ZKVJJFKQLEGyBmxnoxxEe",
  "key2": "VfM7Mx5BUii7enaafjijUXorvQWSk8usgZyVzggvF8xa5VFqrNZaHRnPSxfySzcxbQgMiSXyvrxAuYnWaf37GoX",
  "key3": "5qLXb19Wsv6BC2PMPBDt6B3wd3VRVxWTje5xJco4XL6zK3PUHrkbiDK8CJuchogqGwrdqQK8rZpXSAXjeRdHaNTT",
  "key4": "4nRGUjY62mBVKEKVtCMcUsSTxyahNUSH2za1NdBdD9jycGVZ8mptyDNzzSGJmYta1auVm5W6JfEke3TXDxCu5CEG",
  "key5": "5RrfPKHjpNJxFmNdfUHSjw6HhgBkq4P92BP8xbX2p4XELBtXwxFuG1sM6XBi2kb9crnGpbSUsq7hxR5MGULYEukL",
  "key6": "2to7RHWg9ViSqnhQdywDxBfVi9dshHWSzstpm96tZP5Fjp5i7Cvt5YtJzsqSAdFReaHPsG2MYYAFLXo7iiyEsK2C",
  "key7": "4VVYc5UGwvXPNmmNyakSiHX4khtAnD9ARJx6L1hzM6My18sMdMuPkA3yk1XfaGncaKJrLAUCLGrW4i4CzMjjE3hc",
  "key8": "ADiuNApHvNWKRyy4HNsZruRTMtQydeuLG3QoaLGdWpmbP31oM8NuT9yT334JnujJXwu6UYmPwQ2QCtFHfinAe9v",
  "key9": "414grfFsJDNp7jQdeXGtKj13cWmzw3V7LjPG5zhFfsnmc32oAPNN8r6BeBfYTVnazQdZjKXVXq8Zw4vUmGyDWXkH",
  "key10": "d4XNNwqWAKXNpMYdwyK4HPoeQAsHqTWk4tU3qXPk2gC4xuDaXANXuyXkNB2UtSnMd7rr2suwq67o6xjPD4422hb",
  "key11": "5QUvvu4qfFeQ4urWGsjPasTn7GdLfBx8pFZ59gW7ogYkMMz4NDVc42h1tofmRhDzwHTgosUiVYkvcUpb4SEE4QhW",
  "key12": "3uSwVCPmj8pApaGBa9yk7PUWDbmJZagwPWSkbKzzk8XPhYfnHjFZik5BVryD46U3xcfwxgF4qHuZpge4EekXm9L1",
  "key13": "2o4PDdv3NhEn3Ny7fEdoVzVXmb9FncSoG4CPwVoHi1bkiPUwxnjxVDfpsD4V1iSMjLQNxmB8eEq6s5s7EiyRimkn",
  "key14": "gcA1iPQDDFobsvmQPMTMRmBtm3AuAp2jzzUqrL1zN9bshxZnyq42Cm1xe4bxtPFcd3xUZNcWadU82vGg3MaRouq",
  "key15": "e83ER57PbV4euo4o6QxRzrcB47xLpfptUaWYxt2bx1f8NA55snzDLBzw7jTWRA5mAQA2bmZmZmkzG5x6K6WubzS",
  "key16": "2iPcW5Qb7W6AF2GKDMHR2VoR9DEZix1511bWnTimVQaHuFHQvk1jS8cFdtctULXWEmFVdcywrW8MstVQ3NXzjhK",
  "key17": "5tyeFszWgSK9H5uX5oDeePP1fvxF6oBZuWQqmUer4hkJ7U4nFU4dW3H7P8BXjPvvtfLo8P6DZQM1PUUriAWYcUZ3",
  "key18": "1SuHk7vuyxyikB1x4Fkh61ZGpffUFajmcZrDuw47Ja11HrfpnM7CBfAU8ejwXx1e8gEXVWNjwRnpfjAFR3jKEeA",
  "key19": "3sGUZvgNGsqcyeUYWmVeo4JFs2Ey896y94JRG7UFZqkFQDpfMLowQnBdzNLncKqMqzzGRfs95JJedXU4wK7pqawF",
  "key20": "2jCekTmGHcEga5Fc7rGgrCY4yq2GwBY5q5Qoe9q5HkVYSdeSgnGKj9Pg7JK5ftfrB28Yd8WM89xXAZ69EoCLqxxj",
  "key21": "2piHC2a7jWsuTwQj76YhDJhQ3kvMS7XZQ6BoLqhwPVunFUKfAR3X24KG9R8FfkM8rCLAfy9e4asPvuwBJ3WMPY6j",
  "key22": "HNYpFv4j67jToVExUw8Vimuh8BdQLy4EhYPwFH7cy6WMjsZ9bY3VVYzyrzFzPg7JqTWm2sE3G49Q9wC6VstoJY5",
  "key23": "28M4DPxZ7Xvzmti6QuUxBAfdUs4SZa77HRP8WzaivHFJZ69A6ezGiye3N8GJUd9MTMisxxT1yfV7TNQ2tFeucsSN",
  "key24": "4vsNXVDbGoSyauyrXdZ9i5ZHJxEeQCKhGAn6VT1qPFuQd2dPzvtvzTwjPLAf9gbmZgiUAKnDhnLV3eMG7GBFX6o2",
  "key25": "1SXWrkaKQ4PBcarXf3PkynH9WQTsZysQXB84icc9WYZ7YLLB9PwAHiTTap3kXz7S5C8n6s2xj5V7REQBY6SwR14",
  "key26": "xTTmvShjpgknXhRArB8Ka2w5WAiZTsb7DwCfdpiNWqGk2q1rQ4ZKM7QbKKqqiRJbtTEvLeWKMLPvUFFn8gjVQYu",
  "key27": "5GmjRkQ13LfwsmuYG1XYjKkHoL6j56fHkfScpjE7q2mLtqj6AzHXcenKh6hVs3Gz52rZYNvrJfK66KbFrZFDfXWw",
  "key28": "5a6AihGaXESNccnV3heNNr6yrwmH3UZiGuCwmKaum3pjMeprK3pPFs8jqxkoBfe6T69jTFkt7aZ187zEPzDAFJ2d",
  "key29": "3KxmbQg29XE9xgJURgXWfS1QKWUVW2eoknH5goBjddGqqYAb8cSHgjgDgMt1pBtx7dxuGFAHpcGD7oURfWzXUFrr",
  "key30": "EgFxdoyMdgASkiqrtTnWkfRF574TNwB5o1bvBHTQ4VLhFznCJLbhsW6JgBbScaj7dHyptzfm1RKbn3JvAaYzM7r",
  "key31": "3BAqkYSYSAL2hXaWZCu5meMEZ1Mc1vPowHsBg23RXCnEew4gtyqYpjRJCe56Qx3xPR53kBbSrcCdKzQRFzcxcZha",
  "key32": "3CpqdcUfMkAJZPD2Am81j6DQdkMrHrjNYSGxzM8Mj3cBQMtkExxnbxCHjKrYUhRamkJMf4ca776Zkq2GoPkCJPwy",
  "key33": "5Ee76xgwzEsBTUxfVUpi1TVTWC6Y8BL7NBwBeEqjRiPkekPkxPuaJSZfAnm5F1LbXZjGfeNbC1XzeAAapq63LHYP",
  "key34": "4LDcoVj7QxyoyJyNymYxM5xYxztZwZ3vWrAW79WB3MJNEUGtE9WG4KzbDWDBxuZ8gqqNrKHQeWigrJSGCgZwSzTt",
  "key35": "3tiEiis1QmdcgpDbGDLSv2fMXRDfVMVsgNKR9WEJiQn49tuGTc4d5wRPTTW5HZv6ZhfvGGKj3nJbHCuSjkF1LT6W",
  "key36": "3xSqmCyZdRFT6wUv3apUQZ9xe3ZvDKDaLaq3nBHLMb31RKEn7mpVKmX7kfVCRig6Qia8mamqrKhvm2nKY9RRLyjn",
  "key37": "4gAUJQpNZE7SqAuLyJXzYUZP7QUBYw1gy9bfdY5C2RRHDe7wcDMzLza4q7YTVNksX77w9nFp7SgUYEvyvsw3gA2Q",
  "key38": "43Lk3WRDHKDVeCohu9jVuC2hqiNPX6jFuC786NizrGoH2tkCgDBj2aqs2DFTsQ2cAmtFSBN8KcGvpoDs3kpXs2k7",
  "key39": "BJhyQP8uFSqyhEvwC1fqZyv6x4ZbQsye5tLWGDp1bo2eSGtrdNTvrZM2dkkKEKzfVRtbq7i8BsnvZNFzzLgCbJ1",
  "key40": "3rMQdfffhmKhRYPhgqVWucZ2kuPSQSUxjhPjaZhPtSeBce3R6nMbMHy4S7z2uPXedJz6zaw8XGL6GiYPYRD4x9Bz",
  "key41": "417o4g6MnCqgi2aNchrubz9WvYtFSd4sdmyNu878aP7p8T82fiiL4ZAhZaxMBSb37DN87qgZgBCu9tmj9xQHbToH",
  "key42": "5iLERfftFp8XKYJtjQn1AKGRET3dED5KZtGApw9ASRgkd5Qgsw3giUEAnwucCZWhxEcfUDK8jDdivtGKsUyzKZHW",
  "key43": "5DSHANaBafCgP9xsGrR4YAAyG8cem2sZvWS552yzHD4tuGnjnrVtMJexv63C12wzYSmdKC1AUcshE2QXMkzkkJN9",
  "key44": "2wHS6BkqzyLHxVhg9S6a4tznoe4cKo4npr28gQhsUdgPELfGfnvJ7EfbPbEnSYPPbo7P5HR8dUraRnVdEY4aAj9e",
  "key45": "3yXgv778PWHYG12kNcTfhLKZHL9B7R5w9vSh52Lr1qYX4HDytjqbAET8Te6baxs78EaN5sXYrcRANKnPukC8HxAL",
  "key46": "2e8SczCASRhwHwVbGPmfY2LRFhLNtjd184q3UMpC7APdRtQFy1JtKgFov4UzsgSQDfEKo9tThxuH6QXqQ1uXsdST",
  "key47": "3nWV4N3QLSgxf7g4wexNAcw9s3EqpjLHzgKG8sdHoKJwKTWMVig54GeRyGycE8xpsXCmqA8dsRvyufmpS7e58dGy",
  "key48": "2GD4SgWrTGmeUca27DehYahsYHBtQcWY4Wmm2ayBiGBg2BH9EcESGR9nM6XdaRUtpwfsi2RY52hJcPQYjtKjzPxe",
  "key49": "5D5uuErxWAifbTgT7iX6wyuVSrz7bfv6cpAFrfzY3v23qQVvKL1D9MWDw153mcG3gMzjRKEw49PyKTnCv7eozBjx"
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
