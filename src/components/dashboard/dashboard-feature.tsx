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
    "2rPhW4VXs16er5sqFFkm6G6DUuA9Rx7GZzvHUAYGn5M2eBFF8RDTdJMSNTq2MfLDm6ibjFvEzwf6kDMQpLkYLtLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5Npwjs7vtymPd9tDGkb1Ym6FJuoMyaQcBp5p5EHvoZNLWP42RKwP2eKauFdpQWnwYH83yMyJwPtRyqa1pVcsEs",
  "key1": "5nkbvvxN3YBEpWvwH63ZAxxoEreAfkE5SFNQJWyP1NYTaT8veN7hWjWPeadsqQnhnt8K5juXtZN9vkw33eYviMvW",
  "key2": "4EjugYJVcihvNoXmAgQm4RmPaMjNXmkZnvsRapmMg5wPfPfRNKMB3TTMdDYda7t5dKh6ycpDXj6AvFs6GRsFuACt",
  "key3": "2h3pjtAbmpJELV1e5ibD8vftv8VZ21HenQbRK4DXMMest25qZ8Rj1sbkxkiXcTSCKZqizYzpQx8mGZWMCjvKf5M3",
  "key4": "3RNJUQzbTXTQqPcrmZ7oJ46FdZdMn3V3voeR6wwwzRcTB4NeM1AvCQmNKdjbEAKF3Jhi6iTTZg6ABV9S2geogq8X",
  "key5": "ELQ1p62Fff16RbHF1DdCy3iujFy3YLTWtKL3Jxe4DPZisjBTgpXcmhnpC82Y9bR2WpopBRp74jyycYQQEKGbATj",
  "key6": "53exkq26v6kFvH14MzHAYHNB7NA59f1fso7CjBfNR4hLGRA71hfqZaor8P4JagcMsfHDjGPEcqF1hF47AZ4r8Z1f",
  "key7": "umR8D6jmSEz3P1QbF3i7XoyL4UtX3JSg9vsFnfbgCGAE6KjgDw2z3x8NU7iC7p2mHnpnJeT6L9bKLyfPr6Leizu",
  "key8": "5LSRf19d4fBeRkSoiYfijy2VW5ocxvSgG3PbgqVLRtehdxMcQia4JKiEd7FRudefsG2iTJLKmD2uLreJYg2JizJk",
  "key9": "3A6FeNuadDkspVybAp3JtMMFys7rE8jhqW3qaBaEGfefm8p2byzRpqyzLcjxWWVooFG2W68cpWeXJUGMBGSvKrkb",
  "key10": "24FcevYD22LRRCRrcBTwfgj5Tv1na4MGfQZy1SQxndxiD4th7iwTeKNXcCRrzS9GquUFotGgtKtfoer7yZ1y5Axj",
  "key11": "2qN1n8Fr1p5YzNKSyCzw65PA3qMRYcseRVuoEpXBtmtMeEZAKCn9R8SRiAjuPzuTG6fmsqdyo53eS3S7J8dCe5Lv",
  "key12": "36UFYeKx3wfhwt1hoa5sTaDK8SSb3HN6uLGUWdqTuz5cp5n9tywe5FBTR7vETgTahBfbrCZiwCihGPLK5kFxXXaj",
  "key13": "3nrcgX4mpPJ7TWzWVxG4m5Swuab1fvXijSaae1ZS69QEZCPwLvMqugnxPTqYVVkXAUyCVi9U9eTgXfvKabyhkQzR",
  "key14": "4dY6YHvgA5yjHfroWYM2AJKZVaNXoVG3ZVAYFAfrnHHz5xewewkjNP2dyr56QsEfGKxvghcRNauJ4xb1eyDXc8QZ",
  "key15": "3HeTqGudsgirwnQVG86wUDncykyYhk2HBJK1rXGLj4eTiD3AEz87KRASKcwYw9GjDMVfszr9ivViqCW1dyGFUZBi",
  "key16": "2Q5LzyiPxcctowCJBA956wTF5odGSpJZcrHtMnTEfrya9sz6Lvj2DT9bt3WEAnb96BaLaMUcZgdGvPaiibHxqZZA",
  "key17": "pTpTMnB4fBAKbcnmzW1udvB1ZBnrmvKADDSRSBSPZH8jnyHTFHF3XuSs8X33T4ZQbcTNv6kvrkHs75kuiCRBn1c",
  "key18": "4xXBZeZ9BX4YCqAz9ozbFmSmEs6GN3RQasdehVJktqGthMrNJNC8NrYo8dP6J7WX5CXncYbowhDihzwSEeoFMD47",
  "key19": "TuPGGDZTsNGiQDV4vTEtLexq3QtE5b6RpeMrX7jfhiWcotkuvsg7oxmpzLaqB9AcusRGqHGxsWw6UR2j2SpxBv9",
  "key20": "3rZ4PWBvsRD58wfEbvorxZDB8Fn5Mr5a1PUENTHzzzB6MyH4mcwTBHDZwFodJ3wHXFADyYETW2waFikBxCRigBUX",
  "key21": "4YLNsNDrb1Paw86er8Z3v89JgkhEpXJ1K3Grcm9ue3r3WdWMnBhQXXZ4M57BMDEp4nx8GrqnScCJfG27Hh8qTgBf",
  "key22": "5z3jSukbe9Rz1qRmxkCmit8DfZ2nhqgQYteMsbAt6FyRGe4ciZEx2Ehn6xgamDpXSqqhaFiYcWCDcjFNjdfFcHnK",
  "key23": "qrWD53BbeWzyUUbcA4frHmXipCia59iUfRbtDruPFPKtLwY8Y2XNECRnKW4cA1p8wXHV5SMuSEDm524HVdtUmeY",
  "key24": "fd9eDk7sRiB9q6asLu55k9SXR2HQBrkbWQ6Um7izdipzK73UNtY3pVSUTAKLi7p7SuZqG3JoV7Q5nL5NksepQ1V",
  "key25": "3L6H1HqFewBoxpmms1rvCvKXWCQ9MxMZKzSComE9N25Pa9cy7Zwf2WFWsSivQxfQG6ZiMAzy5iUTkFV3BS3w6asf",
  "key26": "27cLdMjYLW1PnXJEXJWEF6PxgdrRPMARXCtcgiCDXxp6K8DChYw8d9iGC3UjPQv6KynYVZ3t6MHi5Qp5DbRCRxb1",
  "key27": "3rBnN2DCFkHj55w2i8afWyvyL5x4Dxv3b4niMGhJUDLbvcrNSUjxziDT2MeKTyAsVae5Muc8jELL4VydjfAt9Y3k",
  "key28": "4NiueygF3wa72mJ4nEn95pQ2WQNAxTLwEXXvwWLngdvm9mHpgyZZZ4VWZ4vpNDDWMGhZWD4Y7Hes1HrcrcGB68fC",
  "key29": "3qJhRgFnxwGk8tVon2StqZjKJNpfBGcWWF1dEm22JyyZdd6QfjqRhUvtk57PtJuf5ezrvaKw1qYLxFijDnqVnynS",
  "key30": "4u77ZnYPoPrFYt7YSnkRVMwDcgDCTZNcXzv6P89dvZCdErqcLXyJen7naBGEaE41hZvaaxCbEuBRPoAfAWRXrGUc",
  "key31": "4f2txLtsdbbFMoCeCdd9Ly5uGXZTRszCS5iP8QYKN9NYHQuF7jQPuFBasS6gKCPqsNaP9MZR5zubEujkjBY71QQn",
  "key32": "5ZVVd2EgBa9VYJj9N4YzD8o9HTZP19y92ELPJmsAvxzLHk3BvRzd3Re4nAmTUXBNxYUpAeDmVG6smvA23uq698Do",
  "key33": "2kHVs46br4PMiP7v9vUduFcPwCTYghxaQ9u7R5ngppbYZuUpkZvq2N8tGZjyYAdfyikWBKk198Si7yJMdy87Ne4b",
  "key34": "5RuN7ykqfwGsd5a4Fei6SvY5QyaugHYZZBUPGEyeFsXyHY31kfsQqziGM7LBAoVkHoq67KYRS2NSyDy7H6qSCM8N",
  "key35": "3Ec2ZadNmHknZH5BafnMTWd4pCosHdjDgyEzjE3RFn4ToBeSoYDeveCEVYGGn3wUYi5EpmozRoSssgHdp6B17gdr",
  "key36": "NJrRi2y16DPsyFzzrPRLKeMY98msfqrn3mxpWyQsm5qmqPQXuCsJ44z5gCQtD7AQCE3FgbWYug8Z6ZVR8z4Mcpe",
  "key37": "4VwWpmuTymrxGmAxprnLecyK9gEisK6NSCPyDukuPWKVKPmMPJJby117JnErN7J8E4aXG9kD5GfYck1uv9fEqYjD",
  "key38": "3fxwLudP1vdW9S17dBy9cW5JUJKgdsVJMBGguiRP7jNM4wa16QWF1y7A8DeJvCHXYc8wDwxV3qejKSrDoACtZ55Y",
  "key39": "33RDdekR2DskqBv4qNFggbJK9P3LJLU4aF3JHXBWcBph4oke9EWwvAprTnNcR5t573bynX1bEykzMU1XVvHyNSz9",
  "key40": "5KWcVUqFToGyBQ8VozZ1fk4Mx8gwGz2tPvRZpQnhuE6PypN3UgFvFZueDGys6H3A7RVYSxDjEBQpEuuavSHJmRnM",
  "key41": "2R9DR1CVTW4P2xykp1GxjfCrY8cEX828wPvDYRTxrYTrfJM2H2DvYHU7pJH7s5rxXQfPPSpRnxjGN2A4HUTJ2UVE",
  "key42": "3sry64ZyRagYfxT74dq3UNBm4ZPQg1j9jV6S8uEV1AU2HopM3sfGdnKcUaMfGTMaeCbS56M7iFFdAp7jHzgut6PS",
  "key43": "2xoueUtgC9kQcZw9rxd92oyw6ZaafjTcqfwnfYk7gunnKwFdiyfiLBjk6NQReMxP2aDdQunGhSmwmch5UjT6LAa2",
  "key44": "4S7Ba6VMPyfpmX1T9rc9H6abDjmiaEoUgHJsd3K4eQ4QH5khq7rxXz5gk3ZhrP7mnZJ8XTnWVYspF5JCLn1e9jTu",
  "key45": "3heX9rwWxdqm2hn86Pkbg89emdCWhuu9DGpKnFKYE1e1y3mRd8TcCNgM5SWWioGZ2Qtc8God6sqJ592NR45uyK3i",
  "key46": "5sPvCiBJdBsRgkpT4juy9mfqh4Pgy5vprgU5ibCJnK4ZgxeBeRPGJLz64a3yDjxyvB5qg3dK9rSPJmY1ZFRh8mLx",
  "key47": "3QfdB8CjQ4o1EZnwSibDDhqHnaVesuG8zanKu5eqBX5FKao2384ssbp7TcgjNPNG4uLAY4PrRHQthxSh6oHrY6Qf",
  "key48": "4pjs297QNyb7cGhoGXXhHMST4Jcx7AUJNy8Kcr3M9PbWkmhGCtuut8X93aKCh2ewoBPfB4UUUNrqaU2jy2burdNB",
  "key49": "2MuuxNbf55CSdekMvoSJ1F4hdSSsiVqoz9ZamqpwmNkqLfuGP35o6aQLAncP2vxRSds59uh5smszSi8cP9qmm7vd"
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
