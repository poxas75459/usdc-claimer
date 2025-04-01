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
    "4rhKL6bfeJN7q7bvpLpuDpmoxh8LcpwYQLhMGasviy7j6MrorbEpETtPgTfJqUpF2ecaehbS6KB8WJQfNVTaGwpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vK6QFEDsp7wFBZhYz8fUY7hFL9vXZZxPhjLPV8XZbhv4pkJ6e7pjr221c2vKRwwr2QSqAWiZncvNsmBBEFPSuS2",
  "key1": "5ULMDAUv7KkEDz8Wp7iSHUur5AcdMnWVQxXydzcd7LWBTETXJ44mjfNzyncm6Emw97i7Wxp4SeDxx4bbAJMCB9yv",
  "key2": "4Evt7UzrrE5artMxJrrrtiLHuVY7vW2issTtckGNR63rH1QGPDCVJyits6VxZ98fmvVzUwfbf24bGXQvA36g12Fz",
  "key3": "37fNpXiZ6MdNdFLh6L66Qq8R9tQpa9FHttgEsEEds9zimBptQtnSUCX7xW3iyUnyM7cjD5Dz3G792xVwyoRTqDsH",
  "key4": "2MwDtyEF4KwPhfHrdUuPiWWjJkgbNfUDdeyJTRHqyqbY4XxgqoR53EpTqyM1Dbvn36yGpJTM1K5Jop6MYg6m4HJn",
  "key5": "dHwtK4rnsH7dcNa2nDE95pWtXjwxdhETqimMV1n7zkdwqQFnocZBgw4engi9Vh6zvQ5BTLRabjRYEGFRydpEKV9",
  "key6": "4PALCvStqhmLL1s5G92mitoGDRq1tBBgioLxuxaZ2wVbaZxFVytbjbTUBovedfCHSNA6iKvsCyguEaxiyiED6ZVh",
  "key7": "5ofeGKNdnwwtkxfxQ5AoPDiWkUqoicXqDFQekU6riCYWdqoeuWLsg6St5rDpJoAbF3EfcyajPSR6rMMKaxqzvaTs",
  "key8": "5dTQ3qr2GPCfD9VMn2bX67ENJcWdEgEZsoZC16yqcrb6XsCWhRzcZyH3gighEzDpvMjAokJtogn5BgWVs2ciscx8",
  "key9": "67XSW9qSyYpXnXqRAVwiAxUy98RfLfNWS6EVFaTNRKrJARyKJvXWGGFe7V98WPkHqkN3RXwMDj8xNiEURHBfmdLB",
  "key10": "ZEtjqeaxKYYJpNtNkuuMxXkk2CF5d69nDdM9oPj4vSaAgmVDqXt8G5UEJqqfYkcxC1iU5px4pxYxGCob2yPWYXK",
  "key11": "75qw4qEpsn22qzoJxb8qGKJ7tPgACNoGcQzeLSSWug8ujmdsZqMnuRv7wdHaXFywozezroSBZG9S4KRLakwsZGL",
  "key12": "3yf7uBqTSBmyov9YG3eE5Wd1A9fBTsNKQC5vku2vUuQg8cLVZ794AsAjbhc2U34wYnYkfkfRhmaqghRTsxhZdCFS",
  "key13": "5Qtg7NnGUCRhVzw143q3GL29nvYeUWi92zwnwcUJVCXuVxYmD3twsUBjgrDWLFn2zEVssix7HarNjF75bxe5YfHo",
  "key14": "38ER6WgZYFmhSYM2gruhBQpmNHRAcc2QrPt8BV8EjwxyoSV9xYdDzdQtYYrbnmWrLo8p5BkiMDEYxbYVbMCFrDa8",
  "key15": "5LsgymyoXR9wvg7T7vCVVecZoX6WYcETR9ZsrSx4wrTCaxcM8dHKCEmbtgXidwgrjjacKxAVf9BQ1rmpqhJfRDYr",
  "key16": "3Vja1qQLY2qUFzPcQet41Gq3eSk1WmjyVmfW5sNDUzKcosar2pnUzi45t5QYx2T6CnMrFVmFxWp9dQDdpHLvggdr",
  "key17": "29WaJnqrjVEvNraHEKUoXVtBb5CaBM7yV3jqyDogc8UTfPwPckT2WtukPtiNn14APBtmH2SvkQgzSFwNUjiTMak9",
  "key18": "3WjRgsTmQm9drA3U8zPTZYctWo22LDwu43KqcDC5T5qUriyTL6qr8VCamrAHRKCSMiqHRTsXZZ6AVgKBFGEMBYXF",
  "key19": "38iDqF4AFLwqXuC64CcpC72THSEiG3WYwKTwjUpnaVLd62V7UZGrMj9jkxBGwn1rrfZWh9soejo1LuXSWS5q6Mjz",
  "key20": "3YeP7EXFhMDPYygpsrJmMp3ZRRhwHtTrYpjzdcqJnpw28VrwxwHi1spqeZ8Yc6CT3DYpxxhNLNEnSSM54HnphjH3",
  "key21": "fRzUMhSxBF2s5nuvrqv4uANfkkz7AyB3qbJN8Tkqohjj3yyBaSDGbRs2UirCbF7sduPRUFVSqUEvbBQckxRWrMD",
  "key22": "2DcitCttp4DBX8Nq39WrRchCXstMDY7hiGFAWPm5Kazub6DUUtu2qCDKVxXQ9tSSksfqmCsLRuEgDa3ip9kNBo4c",
  "key23": "LekjduqQHD9CHNUUX7bezKCDH5Q8X8Kbz2Bu6f5ZNFmMHZgxN5Y9CyrjQU5wYwTBrmizZgSWs7XbDpW9Swy22Nx",
  "key24": "3CRFm3Ef2gRXV4gfWo8hja3XMkSAztHBZ7Z2X5nmaUJ6gnTqjNteKe2Cdsb4psRgovrhtfE1j9oVkGHhM233FHko",
  "key25": "bp1ZpNBCfJixViYRGaPtXH8e9LgY3SkF6rHAtY2QBCiSNsCTCDphytsdpTZB1317PMUsX5Ci1aeBarPV4x28oyh",
  "key26": "5uhjtEPuuRyQdEf7VuGCmFjFvTpydyNCU4sD2B6jV22XjGcwWedniHu5wmjtBC337UkRCJBNgungkqeuEpPgbW8w",
  "key27": "5wwiauLL9cyWWKb8sXroSg3XFYWnqJm5qJaE58TUsNuNkQomyR7c1vBpCBPofbJ6VXRxfmBn1MsYDqZxdVeDsMib",
  "key28": "4kvtkBSfffaTBvWKpJVL1hgUCG4NvNaEje86K6KLZ3jh7VRKAEgeMfnMSLiaWzD5o1ubZcRfVtUq1TZaEtwPUjQw",
  "key29": "3Me8f5xLzSVexLb6vVCVYS9FKf2LV8nbkbiuNqgVdQAdi1BSAkV4zPVhqptSe5LKfCvTkH3mxKTQMSMhzKNBjoLv",
  "key30": "wHV8dW7zKEqWWo3DmLMaQL6UcE73gikyFgcTvMejrRLYECJVXMTSRWrThe2kvMfPosdHEFUGg8KKSedVgqd2Dqm",
  "key31": "2YJ9jrhEX1VSFViuRU8tSwo1sfQr8KzVt3KzDjf9Af6LHCTFD12Sma9xsx7Mdf21cWuwTaz3nvDkF919YLAD7Efo",
  "key32": "4UjAFDV7HYt9L7b1XsdmmhYc4gCh3TRPWsybnwXqJVoSCZgHHNjpkL2gLsjcAdXkLtDvuaJKRDDQ7oEHoDp6U4GC",
  "key33": "bXfKwVsPgjjfChix1HREXUdwDWjX9kaxKGXZJbhu2bFHQLVoBZXV1rSCHFVJ44J1nHZLsH8a7aobQKLytnKrEYQ",
  "key34": "2xyeDQveJ9NjJq2z39EHUgj3p41s4gZZV52H7b4QjWikfS1DwXGwNwbXPx3SB4sLqHLWMY4yob1yUbAEgm8pyKbQ",
  "key35": "gTvG3dT3FmUxFqsqmQDQN9NBB8SeuGPmBqzT7XfHLHESxDqsQh217uBWupJBSwY45R9eoxDoZRmwku6sJH5MtWv",
  "key36": "64nJ4y694yroDTbGo69UfwfcB29UNA5DmnmxsJdpYGx89qC7P9CgVUJTSVG5BrdAUPDuFn79u7NrWCY3S3AgYqQV",
  "key37": "25ppcT1DbfAqAvHciV9gzmXnLUXyFkQMWSusDjYuRf1cybskdRjGCRHm89JFGhHx9ef3SybB5z34UxSL7apzT3WN",
  "key38": "LYEwXQep7vu5ytYHG6dhiKtkXPS5gK6pFJrHoegTB5miKpagQQidXdMQXoN3rrLiQ48wkoQ6DRkvX62ZYfrc5qg",
  "key39": "2D3gnEwtZcWqLR4anSkaxMZj2fLb2hp8ijXsqdNVeKSdqSUrX5kpiUd9JtjkFGGsou2FjTf2oDPCVqUSZzNzcwMU",
  "key40": "65Nu6k9v3Ap5HVJXcD9Vg2QDkQrkeHhLhhhXxKdoSkUUvnyUQgPWMJqNGUemcCBSTY5YfZZ1DnrsBTM338k2bPMk",
  "key41": "2oWnD3n4RCSADxWkHV4zpTE2wMSX6twMMnjec2LUViVEPQv1GdidoccqfwLALumf6Sn7xvpLMNsprW2b9SKRKPqm",
  "key42": "2nkp7XWECuCby7thHgMUdkHhxYLdwtSuJPS2wRk87AGqhLg3Gx7mojH63KcSdLWJ5Umu1zhMyKLWZ7aviFSJWbq2",
  "key43": "22zgzEgvPPTNFUDEdbj9AjCMra8BZAvYDui8tc2CSfWDYUjTQKECWEH8hkgqTGEiPWY2zB5CnM3XbsPUUejCqnTu"
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
