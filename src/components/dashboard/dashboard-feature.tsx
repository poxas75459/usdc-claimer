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
    "66mmZWZyFtVcccqHQ2FovaqekaYg8fFW93KATKhhwSTFEcbd5G1eKtyrchsNxpfZkubCuhcNiZXn4vwUGvDi7CL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HXTcMkjrNZ7VCYS8qjpgSbACK1hQh6LmBt7HXRkYEtTUDSLdgEXivYFtsBjj641rwjdxhnbjpXZTQ9eUqHteSSc",
  "key1": "3GtE9kgHpLVFLQCg2SwuGeDpzJa1EuHcsFjQTwNcWgfEKvL3H7NG15a6MBPjtRRw8uoVWPDZ6aXdVPK6BvXCPymN",
  "key2": "2KcscNEjv6cmCUpoNZK5KprvQASv6m1zKqP4juaboZNpGvC9pAhQivXeF3MwQRSeijRLGcnwdyYX6x1pcztgamvN",
  "key3": "3d8yDYxhs6PwkMsYb7Hry8NCoJMmTbQ7NHDqhwzZD7sbx5JyNZx131wgrZ4HEQ7ATikw1pmTzn8Fm8RqTR8AEQc1",
  "key4": "56TFsuD1J14vrDH3ZtdZqwADDkM7AJM7d1ATgYFWoFvBgoL7ra5fPgS6jfahZSYWNKChtN4w54wDcm8jvxTiVVtm",
  "key5": "2bJLwoLCN6cfHgqB87bxUN3MVUFQw56WjodgaGEeYZyzA2W8kg9BEFtFc25e2GdVU5q3qKdZfdJ4gQ2HR4G6WB29",
  "key6": "A8gBjvyY3ZCx8DF83PoaWzDZjSSz7SEhZya9kptKd5hRTaVNMzRWfVMnUnu2LpBj7acJ4UJFwHJ7o7s8g51LiEZ",
  "key7": "fhtpqyTBBaXBxvKix6SrztDPAqfH5yb9AkqP6RgyE45yqugFXwYDonBL8BmLiG8Yp64RAHTfUmh5BwJqvq8TED5",
  "key8": "3EFJ578py6HmtqGL1bgePZeehk7MMLHcHVthG5SQc64WPCeTd1tasmU7rjL6GRkBBF7catYf72fqns2RspyYymQq",
  "key9": "5CpoMDid2voDnBnytLKDkzVyFBTw46CfbXqFywa8BhAcJYSds1JBd1rTDCbEy67qqVYQjUcZCg6xnq2ESoGsQnNe",
  "key10": "5Eqb51VPugqtmBEWJsituz68TCkyAEiBFhJhCTzCLo7JdKzKMto9s5dF8WkC6iKChKTRBPiCqGUD73cRom2GiQzT",
  "key11": "5HtuFvbzw8Tuo8r24CpmBmyBJeKYhWbi4GLnMJeXQebJF7UVqKjw59cXoKXy3ZgNf9c4eZUXqFGPuKb73HoyHxJ9",
  "key12": "3EqBDVcK85qFtM1EmZbVQM5wr6hJW1MeAo4jRMTzRNqPCGKAnnfVgCSF4Nx9LuZijhYgTgMjV2ezfQiN4ZQDcuWY",
  "key13": "3ND1CaFVURiywwzN8yRX6FvuHV8ky9wQSQAJAV7WEQD2pBupaRVAZTiBDaakUaEEVFBxxN6gCbAWcbyqmvtpYJxd",
  "key14": "2vzAKuidPq4mPsgNhftigXgegYifvM33S8Jw2ywDgQtM4B9kbfGe83sY2zDTg67YPcAwQqgpRgV9EVaTiaSmTupp",
  "key15": "3fTzEeFQ67hixLvPsHUhD1z6YUKuKRrRyqGqHSqhX9VtW9XfCab2BSAw2BkjsFPPsMxPBbPPH974uCPSusE5QVH6",
  "key16": "rVG61z3UbLRkzvAtm4k1vRXPkidPLnrEf3posnptdNm3JEBvu7AEVYhwHNmA8WDm3w7yFY6BzC4Tt5GRqU1ibhg",
  "key17": "3daM1haWMGazSAjxMmP4manRSPMyHhmbzLWuFkpg37TEVjk4rEJ9UeKmbJ9TMUJDxLe9B2AW723wEtyFKWLJaQXi",
  "key18": "3M84TvHzswQe41ptgJVoMPXniMBCPMuAcDCpp36UbDAW4dv3ZHV54AZE5Fw4yDF1WZwyUmp17cFL1BkV2WQrBbmH",
  "key19": "2teSuVszG8WpGvruW2uJs93oqBFntGQUWqXsceGLZd4vKa9yrx4uuyzyTXkyNE1yUfiHmb1TY14ppiHJGFBurWqq",
  "key20": "2G3WSERwewHJbPw5qCK87i4fA67xuZmtkG2QJ1jAwnfZGfatGcoxgctYJvwPzkmDjbZD5wS5UNnvpaucRH1gSyDT",
  "key21": "i1wYZQfZgjvqCmUebWS94qkN63uy13wqf7XKK7Gfa2ec6pEizYVCmuvj43SvcsTr84G3PruS81Je4zaLc5oHbCh",
  "key22": "3qSyFTurhSfd9h6fdjEjVwtg6LcS9yBkrTb7EMxFvJbGPRoc2NrKim2gEy7JyAAtpkUAFf71LTFTzmy5MDzynYYq",
  "key23": "59xr8CAoSRKC2AHgzM2WazhSpQu817ruBkj7ST76i7g7DvTH5P9TyQAZzybcWi7XUQwbT4tBXboQbJ9F89LUFTNX",
  "key24": "5zE9bwWYg9rYQxxhwd4dTKMdC7R825tSnE9TPUccju3iC8P4KMC59zQuVvp4uyU9nmWxSj8jfAWQ9y7saYCWKAft",
  "key25": "3Koz5HHM6NQHMjVSG42LYTVPMcMbE6EALpXkMqb7YmDQhnh9jUESrPKDfPH59du9ASB3Y7VG66wJnbFkv5s5KeoN",
  "key26": "3jHZWzWsZYpcDQWr8SuYoa2kFja9onPZH8jSvvcHUdJ1MzbCtGSpbYKccxACCGstLcz5q21zJnDzfwbhPqCEPNnh",
  "key27": "4pvyaSkMKiKYqXqK5ngkRJNmowwMsKiu82N7k59vfjVusJdecqpap9eqYJj8D3WKsmHvHxUf7E3WuEotcB61UQJy",
  "key28": "3zfcRPooQwqCoGgLDE9r5rn1saUCTzHmNDayvKgunGVAxQV1nF9L9wNk6jEYVRr9TC7rpqJSu54NMXPHS7hXGH7R",
  "key29": "3fLvaRaCsfrgNx3J2D94WbvXS7ymr45JUqsvCtxofLB2X4JXgfWY4aMxwFWoH8YumdFGDJAxj1j7DZQyWPeWeboz",
  "key30": "3R3Tx4mgts7D1xMKM5tzntvjZM4PDZcfJAxa2M81J74FDLd6DcL75KgbzVsqwUAcKvrV3gojKTmTTweCCXDv1iTQ",
  "key31": "43EigQGj2MtiKTV281RfMTh7Uoc4kqLb4KZi8dE6NsFg8BPzC4zq6oyi2DHXezMVz289MqipQjULKhPpZo81ymfN",
  "key32": "3tMAyxYgB5XDqup371HCG9B64QBzzMah6CE6TcUxFi5K9BYPX4swzorp7H6vu7oWLeTWHdVzZPyWLoPHvXGZxHrf",
  "key33": "2CoeBqNXyGCsMJLWChQU87SMo6TqTzC2KY69Ht5VxxSqXfTUSzwmjazEkkvC2T1vPKU654b1op1KYdTF7BYAKwFZ",
  "key34": "hJFQtx5kSmXUAPCNcqYvtc383QerEjen9qjunMZ2riVMFC4tCUE1S8fSVD2McjMeLYqXdtFNNPGPrnfZTpXURiC",
  "key35": "4r1LuB9dJTN3dSgAvY17aTC863Gwkckdef2zYeZ86cawgs8DPb7aHK1xUM6zDdLhdFZB5VmBwALwatf93yKSdA7A",
  "key36": "3dT3YFxTFChhF12xWVEWMRnvUuwQ3L5mT7Z7mndJf88BvBZY7rg8ax1N8aJr59Em4q96h3rqC5UBVP5GQndjQfLG",
  "key37": "3uFpoLhpzN3ChGEjiYYqiuNQpiekWa9r9xNK3Kdgu8Y536YbHcLCzdBYAGaWohKe7js2pyxGnuSJGWifeUth4s9o",
  "key38": "4bu7ZY49cegiHGznqoqtkX4H6SKm8N6p5i4fRMQuLmZRco2yMafXPv2YedAafniTLiZFFTYWpegx5ba4uxH56ScJ",
  "key39": "4AZqM2t2a8dbBxD2xQ2Vum8e6sX1XR8TQXc4skMJxG9AN517LPA3bSbYFdSTTJ2dUQbWSstpptqs6ZmwpsK16iUD",
  "key40": "8ti9Jf178KzbbyR93yq5BfrKng672bUmUydZnUTR8g6E4GNpfYhEEaPrCunJmSbBNBerHcEEHonCbyGExLGUWfA",
  "key41": "GuskjjrWGTR9zvKqhFcTkgZ3XRS4pTRTYZ3sWR3mivgNdxwKASA9crV5HfjrdzkKNCbTLMWFn9TveBQMgUqm4D7",
  "key42": "2NNPZSFrcyFx4YEtCXrwHqSr9ZrDXFhKUm2amnhmQACtnc2Lz4YDXTLGUtmmocidMM92fGRdGEV4VdMq7CjrZ2rs",
  "key43": "2fEqvT93BQGAFasYbsKdhKxoppYxBfhb72kDhxLPPFwBhs53sJr8jcU8DsMgMae75tHcVq3Y1qtnWw6BcAXSjsdh",
  "key44": "3PKtDQ8yBcshkd2FAnamsXjXtbfo7EWWoV9BLoF4CJuatojNkmQPNVkugx2rfNZbS94rBAZNDGSw9shBbvuE5Pw3",
  "key45": "5jdD4WzSX97Br3sr796Z4tGb64uXipAeT374HQJG1qzzXSX2J8GPBc7hTLSNSi8kdnnJcdYc5F88yiMP6qUDeHpL",
  "key46": "5wCqHgGqY6yx2FCQhYhdxohU47U7JVWXQwt7RV6231P2k7YT5QNQThkS4tsghNZsoDrLCDiRtnFQv5xn5JNkiteF",
  "key47": "2QuPzYaEqqNKbFBbR6Eu4CkThhphydJ4BAzbQSn9svZAuYMBcczgKuXvHQnNCJiA57HpJW1grg13bBnRvqcqB58C",
  "key48": "dxdTMmatxwmVDngogecBnvxJvT3g6QkNeJwUKWxyAJLALmGJNwKC8v9sGViDdTRHguqdmnmQ8p1TaLgMp33CVBf"
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
