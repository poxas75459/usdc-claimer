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
    "4VnqB3RweAaqSioswjrX8Bv6ER2at7rYCHgbGBa1UBa1eaayNbx1VQmCZcoYBQLq6rVTNk2CwSAkeurTp6jvCqJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iEkC1GHsom2tHU2rXZEDDy9573PNRFbVxcYyj94puhTa1LeBKLFcmnbcYfPXgHehh2FoDLHVAMfUc3wwcamkxna",
  "key1": "3N9tDWhA4hwFr7NPiTGAtncw2s8cbNj3TQcJFAqjJJq1iUXJxgCt54njewRjXokFSAmNnLBfMDAbhvWx3J7oEiG8",
  "key2": "3VH92Nw4cTn4TMFa2QD5HQ6uRFpiPrC7jn3n15p9UFZMJfwoAiC8Um7onQ3qZAGdMiCRgkzHZBVoRZNsuaVBPSbN",
  "key3": "3Tdh2g1yAPTEYAagXnynmocEMW8umCBs6y2EZTEuQQoLsNHBoTsSTRp1sdg9ga79sb9Ug4e6b9Jvm6LzXvMpLYZ6",
  "key4": "7kkYrvpmPLu3kbbJLXGi9Z1uPsogLtqYz7hUGJim6TSoTRJx2k6Ag4PZxcqUkoDf5fQUqYZ9GoSu16PkxxUKELy",
  "key5": "56bYo6aeqKYNchMz6gR1bPeGsKzcMUYUR5daCrV6LCazKN4Z2d9kaX8CzQz9kdSQVKXJVNRQC7fJyaot1Bni41wY",
  "key6": "fMLEiQkQH5TRoiLTY74Cte9AgkV7faUciFcjm3d5UzK6zJY52WzivuiRtveGXV3PA31gy7qYYSPqg8ye2quvhyN",
  "key7": "3Ktr6i7yjxYRGJpNEsDXNp1bzt4EMctiRBwazgPBrnonQT1PCkYtDYbuewksv48hrDbQrhjSTD6kCNYPcBoJ2RBk",
  "key8": "2BrpKUYfSoCEsmYmpL4jHzEY529o1EcGssWAVLEjXYbi2g7PhNRRvd5bb3k2STXT1Vv92o1DaGxuEkApnKeFraYL",
  "key9": "5woMjeBB5ib4Rf2Ed9fkR1a7RZUKm7uBfREX6buWHq4ADdtGdkaeA2EWucrUxsyXbkAzkH3MLxFQgwxKxdDtCoFy",
  "key10": "52i8KqiynZta1a9zhKRWfwmz9dkZCVzHFBDUrv17MCvFQBynRXcouba7JbLmhcfzEWLePgDgRyFHSjT37BEbYJvw",
  "key11": "3KGusCAKmy9Y8D9G73GJnW7QQfzSD7oudvV2GzNqDbFnJRtpDqZck28ChEML6GHqDXFakpJKY2LEfbqbvjLXFXsD",
  "key12": "2ydVLJ8sLws5KdGH3cc2j5MvxTKNthQRB1NeyGcLxVFbo2g7HfCV54S4RWSBMDVKrqFjyVNscgePBWKRuZ5sWX3c",
  "key13": "R6CwKfMkWVYDBJryQvxHwDSxoii63tRbE8B323mggkrEzdoRMYtHAT1XZ3i2VcsKU4YFaoimdou13gqsFfbJ3FT",
  "key14": "3vALsoiYL3qYjGELdazJfxN2epw45GWLWStxdqswavt37DuDZG9Des1GP4cRzuJiDf8wfr7vsEvSUWWxJmkCQ1QT",
  "key15": "3kSNBXLdaj3LZ2NVo6YWvsUnHhmPfwHrpsUrS5Gi3gya8urxUu12CP3LYTCFTAcpZc6ePyXEbYUNKtdAsTzjnUUy",
  "key16": "3fZuC7rHBDJp5xKqsoLkCrr8cdMUiAjeHtjRMXEy8fcSZvngdwjE1hFV79T3p5RBfSA2aiLd2UrbHx7s1xKWwjc8",
  "key17": "pJVSZw97YdYzvEQ6rWohbdyho7Z5a8eSz8q7DxSVRk26anL2Yiw2Gj1hDjLbcDFGusXRf5gFTrVe38BsNGySq5v",
  "key18": "UYRZzCLwbaC9NY7WphXpVXPV9f8S7Y7krGX27a5BYLp7chGAJj51mauYaJvcvg5btDiDSKbAw2r3tb66JamgwJM",
  "key19": "3xzwaM4sUkSxv7iBzmJo8eTdaDvPDJ2boGuhjqfgYRpjG7caJcTqvqy8AcTkYjAeSo8EVWWKPXzU6z2zE6xEiwzn",
  "key20": "51Q2V1tYEMArsEKYmbU5G2E57MKjR1AFpgdkGgAGhBj2TWLHhkpCqZbf9AFZBU9Wji2dWS5tweWgsiJNkAv7AUbW",
  "key21": "2WQ2ZxGh32aFThqrRV8sZvoCTpUrRaAUowJsbFt788xdjXkeGFFK7bLVU1GRZoGJfBFfzuxyZrAzpGfw1BWX1r4J",
  "key22": "24tP9Q3Pyddoa8qpPtp1JMjxf561VAbuCAR9kuhMMoewB45a4Dc3haFKV8XNdKt7TD6RJuwDz7X7kmoAzWaSUyHV",
  "key23": "w5pkodG216zYKpL8agrNZwUW8RKTjE5F3miRzPCghe6dLJfVrnjfmhjkmwmAurtGW3M52Hu2H382FvyDdjW9Wfs",
  "key24": "3ZjTLKGTjFFUzTnHpt9QzeW7TvSZKLhDZByP673k6ePqmDovGTJz4DqAgKhE6LQgqvEAc8ogjHFtHkqp2p3NEokm",
  "key25": "5QSQeBNvFTCbRm2wvwwcqymBjGzup3uuLN7VMwpMoDTBWynp9MoQiLjCHVwDGSJc1DqxUuZ1HmV7wD4m4hzrL5dA",
  "key26": "4LLpWupodAPuGtrLzseEKzrDK3BWskCcV2QTgHkX5MsTEYfnLYLPm35LDQ97xHFitdfMnm8EUkuVRsiwmkWuq9Qj",
  "key27": "4iLVoMV24kU2VhwggeaVt3sxRR4hHexKL6Ry5vv4jjjQTeHPygdGHdoJjKonXpxE5pUkBbD9WmYfPb6HcH87YkmF",
  "key28": "27FcG5yvA2cRBWDNEZ79jvtYjUFyoAZNYokBsEo6MYEpe6oBPcacip3X1CkCCEkuNRYX2iZosyAaiMyYH42yiqnC",
  "key29": "29BD8dCEYm12t5hwJGew8GTsdYAAYkGQW4gnUpMs1wQfTW4HUzqgwFLUyJonJRRqRdmNucQmQmQ4U3mWpzwSXcsJ",
  "key30": "3Dm6KNnkF3eWCTSWiX81b6hvCiCbUAb74TSXbp4jTLTYHE4oMpJgi66zYA6scXgPAHgAUU9MxfGa59XmBwSiyXVg",
  "key31": "333i3EhLDJwfZNhDKaY8nkxs1gBmZPMZDBNa4wrWcQv4J3AfiMZemt9xCJrwWDGMJ8iRcME2Br1zkqyDqFiLBRvL",
  "key32": "5dcQCsZNhnoxszToPBv43cJy54h9TRBUL58dAZ5SvgSnEZK5TuzWFKaYpftm4fy9vtkdK8aWAEGfTkigNxmLovJK",
  "key33": "23n5r4PWcdcGfGzdH9uxpu1KsokJFtXMiRT2dkCiRSGmd4ax4YhVsMvGKBV3yVnnXiNkPBEuxj191kPwPYRQ69B3",
  "key34": "2i2mASW8LWqWBEfZp2n9bD6vDs1539ZARFXQMyux5HrAxoXHuQ9jste5kYPiGMt4UsG1dNav2duNbricRVcbqXEZ",
  "key35": "86FVd4ADhsaX7d4Pn3a6dCQCvJcisWafZHV6X5CskKsFixjdAoWi27U18R7kCywjpjXDaMPJDSbSrJnRn6GEtoY",
  "key36": "3HSKQk4NiAqRkE29GzJAK1r9DFRAAardyKySi5FG6ebRVFY3f3qJJVhWnehnEmS8iLmTLZtTPDutXv6QprxE6J37",
  "key37": "XY4jF89CU1pmUtj2zA6KwFiWviEWnH1XJABhseneJgpasQpUD9yz72awtBkV6oi8mgcJSEX6oYP7ZDE2uS95WKi",
  "key38": "2L8p2TurWYB3FvPHhKyrtyJC5VRCgExSEWPhgpQmXCidQDRSYhpSHPxTM4M8MvccP39Z9SjScdJYnwkwSggu7GUd",
  "key39": "3tbu1zoPwioFrbWX7fFTVxp3x5PteksvckXaX3N3zAQmXRAoeWno4a1XJNi4TxaoVxFKieobrD2SDZrrgZyqaLKB",
  "key40": "66Wgjxs6tw3QEdq4z1ekYXW74ngTgYg44oJYPUCixNfDQjPygCycbYjz5Sfs41UpCfZDSESgDgrVwFChe5uwjAXt",
  "key41": "2BPNfFu6js4xuLUMD5PH84boHk3Cwgao9fRP6e93FYniFaU6azU4F448vUvjGmQxbDUYf26Y6oHNzdvniLXBJwKd",
  "key42": "2KQ1qHSSPK2hzMRiVPaQ47dZJ3MUfmwhb1ULnBtYUE5t8LPpZKk7d9HjfLdVoZK4gxRPyzE7RQ39RpAJdiX6MKT8"
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
