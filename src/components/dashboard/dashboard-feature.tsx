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
    "3tpFYL2zTg6ZrPfQTreYyHSgCXPVymV3vTATn9ADB3Ftgw3Vx6HfXUg6NdxbB49akPxzP8KhezAyPd3pXf8RKoKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gkidqFezx7pFRXXhp2n9iCy1ZQURFcEvS4PN868KLPVEXjhYuKqmuTnS3FdVNUZLKr3rJ4QaN4vEFoNLs1atutZ",
  "key1": "gmuswdY1Q4awQvRnW9LyHdpZh4PFwCB13JWysv6sAMSbo7oeSt7GzEm7G9GKUS1sVNnygsetP1ubygahTkc6gsn",
  "key2": "myWFd8B53m2yZcoJ3US4qFwkHTMbatEUosupPM9cdGgaUCJbQ9iZM2Ft7hdzqnJqk4VRfU4PZCQhYi71bKaxoM2",
  "key3": "35Dyq8jwtizYAg53kaUte6vaAKPMwiAQ4bQ1xanXbwfFhLq7keHLvFaAtHZUSMGn9hJuBUMBV76ozQucKUCs2YBi",
  "key4": "2R2hB7ihTdzsFryUeCThVCMPEshB38Uc8z9Diwv6yoFSPR8DtxpaMNAqXN4sZHxJCF4KfZUUH4V2KzG4Adjn4qeF",
  "key5": "58qZYysC1Jm7bWPqaTncgMTo1rqyiM77mM3L2sj9rRb2KUgWDSHsrkMuLgfoa1sPBhsSDGivbZ3jbvpBmi3vrCZd",
  "key6": "2pQSzwvUpL5WDGQ1DNbtFhJVWexp3TNi6atZmoutx4pB4BZQaDX8QchbscZ39a1UmF5n7zmHdVW59chmebyvihW6",
  "key7": "5mRAvpqPLYtKPxWqok8PBp6FycTLBf9sE9LoyaDEeRQzzjnfA9ZiFgYG91inwVGeHVmaEFxngaBX7JaDX6YMZR8h",
  "key8": "qBtQHrkxJthcKSwnfnTRF83cf6JEx72b2s8KnGyC6qAv2rPBMXGZWeUZGUvVgP41exaceQrmUfZNf6NpQzk2uAG",
  "key9": "nLAF4kG9Z7YrVn1yRxWM1kZR8waEbZcwnaNAdSsfRLWZBRNJRV36N7362Q2FbEZV5hSzsxeh6XwL1j6ZVUbWjdH",
  "key10": "i7YSwyYHdsobDrBVMTCE8PMTfuHQNtYZP1ayBUE1aZMKf4nHwShUyzXvG3KDCAVvoNHy1L6ZXgfhqhEKyMCTnus",
  "key11": "2oDY5MWa8ubMdvzd2hMQB2X3hWBfdNtEzvmD9jEBFoyRsS9hnWHr1rDzASikqDs26FyBWrbfBdZ3XK5mp1mSbATg",
  "key12": "wrFfMLz7rcE4Lv1KGSiY1PX47NbA6BF88TrjQ232HkzNJUzXy47EGEGKvvRRXxTjHrrkvtasVTfnfUWhF89MijL",
  "key13": "2nPnuEy1WVXFwmtbHcFbV6hPr7dxr7SDWnfpaNpiHVRWQBy45bySQTidgfhQ1j1BvoPdwvNCmDv9Yqawhdgc5dDH",
  "key14": "4T1VqDcsXUkPQyNCsv69RuQDqjAx94CEK6anQNRNZe612WUpnEDXaN1h83aLVCxqiVeVj8y7p7MQNxrUXUF61Gay",
  "key15": "56v7Bh2BfFLPctzAogVxDDeRaSX5LEZPmWPwXgSQXwL8JaRNfGovnoPaoF8hpDXNBX37dWHHKBW86sU4Tkr5t8k7",
  "key16": "5KqWCydjSugpoAe3ssDFMaWrXvvrY9dV85F78uFtgSagL857e36wbrijzfEcJ1ec3D2ZHRPp4G3fQWFrMsmepTDV",
  "key17": "21tHBsZcdyYETNXceN8t9cL3scbj6FUWLW2ApnBxFFixJCoAGdvV6h67JfmSXSVqkQ5RXwmBiw8ieEbjmCdAy7LW",
  "key18": "5VYYUx1i45aTFWze6eATNffRa2s2hGGDUmYxpi8oYnkD7DocAJ8KFwR6KXSqbVHpYr6u5vMJ5jV9AMhGAZRrWvHp",
  "key19": "2jsoqCQ27Ruq3LsMTVRARqMn3UJQ9vYx1FXAW2WQuXedDoynJEsvFw98dysEHuWKVFRMvjqgowBtqDon8URBUM6k",
  "key20": "3oyvvNDHjB3JadFBryRHuaDkgdCJScmRcVetKvvqjqA9JUahthsKbYeDr3aTyTSFWdtq8UNzcaY29UV8Hxmbn79n",
  "key21": "5knz7WEx16SN8tNKsbWugPt4A2NZgia8Q8S1pAktygsM61j2muNwZBZze9owiFPXuVWBw4GbQDHZpgFhDkEhsZqR",
  "key22": "64CE9QZ5uZQs68BS5mKedjhwYEEcw2vG384rRftjahEtoiUbG2ZL3Pa97ieuMmNhHQeC2RwqYPesVcdxnoSzwJHT",
  "key23": "t8okVGD3ybVUAQuvfmXKMENvqKTXhPQqCSzwHgv9waq1ZDE9qpt8XNBXVpiEwaKQG2n8oappbSYJ7wniAZp6wjR",
  "key24": "56KU4eQ6NAcymbyKZMwb32daeHceuv47PxoMgnLDSUg8BwdjCsJdpYoJqsu5wsSY7XsJU9DHbvHrhA43FQg4qBY8",
  "key25": "22xn1fiXhLFhVoMgXE1BWKx2V7sKygyQZbRfFoGg5vBirLhAhniYcc4xzdtedwethU3BwsgN5k6kJJiujmDSCGBW",
  "key26": "5HXxK7L534MLCgsosPuCktxFCArXbZvtMRPzCSY5rrQi191fHohJFE2UWsg69UsigWCo6TakwEvQ2B3WzdUEyVvr",
  "key27": "3tZwGUGPuepw6ogAyaqcrzxJvSpbjftSYBAiDBW78BkDzmwD5YHGerZB1w2TVQGPc2UgupvJSvU4gmrSQWZNaKb4",
  "key28": "4rG6Z3ftwpMwEnBY31We69qmeVH4bN4iHzZPPK5y5YccerTkDKXLzyDaJ6s4m1aKjYUZerSvVDDNTbT1uHL1Hudu",
  "key29": "Ywa2QLYjjUnF5AN8iwBxnUVzsk8ni3619EC5RNLRvKRsTXP3LqTJXnTXHLGUYK34kAHY78ummXAWsrj4cmCA8r6",
  "key30": "4peL88aXeHyfJ79RSAwwiBu6ixB52fR76AUCvEapYxnwEF3G8Gn55mR455THJyeMVyj1rfZ4hix5ZqCh2LUKRWgf",
  "key31": "SSSvdtySLjwkTFnP5TRkkhVNyGcMpYzk46dqRa3wJGgTK3dStPgqUPGbqo8CFmDMs2w1pwSaaWe9fRFz7MRGpPy",
  "key32": "3BkwEBVyoam9qzcHSHdjipUqTo7x4yfcXW4pduz465BbU5U2o3XEceE9tGw714w7Aik4YecZ29fMgbDMfwoj6cmz",
  "key33": "65k9LcBXPSMfLhQ3hpUpxLn2aKaatzbP36JjKgZjpf8Ad9e1tk4o4QBPbeYqgdySAu5JzJgBGk7MF5MqA2hKmWBr",
  "key34": "yckq2Ex4ZaWPpCCjQRnjpQVgKkh8V4SnugyVrRLLgqwXMnDMHtftrCLSP2EewBituc6KEJzdhJv269vQxqcsGSb",
  "key35": "4iWZdf14W6eWhUg24MK1zQ616geeJWMMeSy2NnBKbnW3Afodoc4QgAvtRvunbFYr8GusA5XqVAn7J4zVGEeNUe1o",
  "key36": "4UckZWAs8Te2qW3mX5BikfDKV9KyxPFjK5rkg8aBoeuoSkcEH62jLw1NBdYNSJ6v7KL3hQtLoLeT4LcpSuPeBvux",
  "key37": "4RZpDbq5vSmBvGN3br6WwkZ6KhJ54bvnihooKChCqn2jM6fjfLWwUJeUjVHwSZA267HDaX3kQjvfgAvmsYjEMqXf",
  "key38": "5XQsH6ZEqFPpUxiF4Dm66fxk8nUFzdb7SqhHcAt9ca7QUBzLMbrGvz9YxUY3jMydkKv6EWRnkHAFDSWDwvFHk4v8",
  "key39": "5RSnfxXUsoQFABGGAHDqhsWvrBDm3gNatmj4cJUEMEZhcmLqRtYVD29u5rvtD2MjLAgVs8iUk5mghdspQGMgkhZz",
  "key40": "56E6FH6MmVqRzwDqF6MM2xACYgUs66YuMu7zm5Ymb17SrC1ZLXMiiVQNh5tqjkgebvmhGkTrNcWQbGyayXHjT6wZ",
  "key41": "3w47mR3vVdfymPPugrBFUdwhd4FzmddprqDnKQ6oCm5bqg91GC29FfCkm5qVxuRHYGPNtagPELtc5Bv17ZDPVRps",
  "key42": "3mPUpD3DXBKXfQHUGN7huYzA1RPREZ8iWqZXT3QndvJvmMButGAaVTdXqVq1fNYWR9ZGkKijfmtd5VoNH7bFGALL",
  "key43": "4GS1HFwgLZLFRUh3P9v4wdxUoNty1RFzVX6iHJcra73FYZoXDsdGgZVCiYQmS7D3yK81qb4VWEzuGK6FSkh9g1sM",
  "key44": "mGnN4aSe88kTP2ModJUWzdqVrnnEqBvEnsDvbUzi5u3tMRY3XG4MaNNhjUUSovHBz3kfwT8cpiFbi46XgzBkVNK",
  "key45": "4kE3cd3NKatwmSo18TfLaE8Q33Y1rCPWkBpfNCK7F5GrdKALazWzBST3aK1XuhQnYRMmTupdeXUVgr55Eoe44Udt",
  "key46": "3EBSJ1EX4T8EXjzoFj4kizA7pjwNsjc3DsiFHDRJ9Fr6scC75SHJbbB5CYvk2nqWVP5L5euEJ3hps6sTkTPybtpQ",
  "key47": "27K2whdgwTK3P1WkeRg3AsF8sUrA6QUjGVRNUNjinBqsP7tXaGFUR6dDrJPXTzQRHNXkBo2rcJW4SreKTt9GgWdR",
  "key48": "wNJxMtxgZK89Hsng4Vk2XiMvjt3HxyeNFboisXi3u2DYbczuWS2VbFm1q7m6HeKptXJ5ET1JEmDKJBheCc7smUX"
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
