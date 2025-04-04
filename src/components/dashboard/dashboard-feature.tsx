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
    "1srbUwL9UaLnRLrSQfpV3WwYPGomHLDaGrLyC8P5NPRpN8VBoDLsKBnw2aXVFtQiyGGdKM5W12bcZwLU8hWRYwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvnbpE5YWGEZ3i3ZEH8f51dMHorxLdutfbujY81biZYRGLLttR7hbr3UjT3XsAb7cqNzbMZwPCLuCCnJz8NNzbY",
  "key1": "4gCXCLvYUudn9rBjttfyPfC7UJ79SGnUSTGkpSC7J2WTndQSUr2WiMi2xGPudrg6QBs7nYFboNr7KJ2RNFLKNmJe",
  "key2": "oMHuecfSLr5xe9Ve9dpFxBNN11DdQLsn7wmb396iYDsxqqerV9fnTHag6PMFCkGHa5xM7wp4J5sSf9HDd5ntRC8",
  "key3": "5JExrRmcP9cADebh1w5PHoQCnqYt73QmAiw1tySxtKGxbyGvtNhnLYP4N2GbXcy17r7mU2QHChtKSmCtQfxC9wFh",
  "key4": "4F3FKVkbbPPBxahdYWBGi9HR277ZyxHfaboyjpCC59nDW4cyf1u29Cvxyr2gXHdwnejsPsN9YXPzhgBBV3hQGrEQ",
  "key5": "4PbgxVTPdrHPxDk56mMvyvJvbtrgaY7Gw6LCYNxqKZXa7gi7eHPvNi6oqdEtaZxZC6uPnk1g4aw8tiW2Hc7UMGeM",
  "key6": "2N9pZAem6tiDjHpzQAvkYYYgkhLpzdxQ3VtC1dRdn851GrCVpqjaqPYDR6SgmG65nUpnxm1HQrNoq6KpoV5XyaZb",
  "key7": "jayDCCEPWM8X9iXsvRh4wNRLCSbyaR2MMDrMxu9bWQRj2kH1gT7fQ4hW6ZinjYEhZvrUJJdWR9LhrUnVgoG9MmR",
  "key8": "25XycLnHqfiHQb29PyeeBhHwDXDrtM113nUKNNUFr88VW6Rq6wAZoy3ivqRy668mhtbcrB94989JnpvoUVGzXY5H",
  "key9": "5CSYciXhSAeDrsNC8asPiuUqq6U9PmtHimjsmLCxAmShVaDqn4ctjZZv21PQZyxnzahrudgdPeMFX9Zzny7h6Un9",
  "key10": "5faE262AD7vdkgeLqsPgRjfwBuLu6v3G7vCvRxQP7PVb62fuc3Lkif1h2zWTJLnoy5bPoTfdxTe2AESEV84taoKH",
  "key11": "5Nj1vtBkiFFEgcDkDuYxVfwwSAHvcQZVxppZYfsNwzfyQxLkn6pqcwNLDhfsGSdKiKXneUFSzzETrBWZu2H87nyY",
  "key12": "3K4E3cb5Pgyt2HzH1ykB6KrJZtHBJnb6v1ZeRpNdTGU1zT3dL8yyiDj5WK4Lwk7cpZMrtJVr2JWoiC4z4hAy6Znb",
  "key13": "3FCdWu7DzY9Jj3JeYopLV1okCBthQzATnnoX7yXivmnjj3ikSKSUzwdK7EST7hynKJf4Lx3w2yNBMqVztTrPQrai",
  "key14": "xWmtmDS6BggQvtuUDtBQrcbAzzoeFvd8VL3G8AmVEc7v7ZQkspK5Bxme1G4GWG1w9YH1vFA5AAYKxAdCR3C8rVZ",
  "key15": "2yos9dRLw45e9xZEeXd2zdveY1BbVzewtQyjfp9jHZKH78BbbxobTAujW9NTLbzf8t7bqYZqRjmSK5hic4MoWCMR",
  "key16": "4UUDXDzowjRQWc9HAgctFU8ZXbNHMXBcyDTvjsaNhLYBuTexSyhybSGCEPKGP8gqrRPK1CoR8jePgi7Zx512sNDo",
  "key17": "5fDCELddqUBYC168eGXDFr14ApM22Vm9r3T6Cz3BULtPtz6jDyVQtz1N2GuUfX6LtLVby9DtSZttYLRHZgEHeorg",
  "key18": "42CDKDatfZ7CtGP9gEc4PpnC3fQ6vnFsT7jbvC79vNy9ZFwrRF6qwTKS2dWUbN5S3CbC7H14niFrZSoddWUXzyBK",
  "key19": "2NnVATfRrsqX4wtZfUEpBR3ZUm5i5kKRd5fu3DngNmZVcp6Sji2uQ6JbZLWFMCAY4Txy5UhJQf6BaSG1ux7qq5TA",
  "key20": "34dmUczhFKmhu266zv4uMu2qnvnzMp36PxF3xH34G2erQCWLqfi9fiTA2dngi8A5vphT5PNek9tVo6ynZeWZQ433",
  "key21": "YdypwzLpRf1Uuw14vD4aadQMWBsmT4XtsoNqB68zrmrMaTrpWZdp8eRadviBcbywzyxLKJxp7h8eUkczbtGdz4R",
  "key22": "3ErUHyhYzHsW7CxvDKKivQqWFxVrxdBp1VNYcBS3qjshAdh8WfeALM4fzLSrTW3RY2ZLWRZ4g7QiUe6eQRn24jXR",
  "key23": "2pcVo9FYx9bni9MTifBfrEWWwGkNBM7UZJVJ7J1x7nVN47DvRkihW2kmA3rJjFLnKSQp9JhAubyEFsA8e7hF8V4e",
  "key24": "uYxQVdkTceLppDd1wP3dTBmZWbx4phZC4k6SiADzVf8NY3rhAwYWPjDxWBQAu8ia4M6pfCUQAmnr7jeipijhhWS",
  "key25": "5eBVHcKJ3watWdtgFZDu8e9dtoAY5MURmuLEfYPw8HNMpBN3fzSeibFbs5btQdzcjAzitFW53xxFjLUCx5Pn6jXC",
  "key26": "5GdkdYiyRz6UtgDY8SBrDbwjwen6U1VfEqhrHK92ga4orcp39x1CETmAPi9Xeegf7pktmM9AonSUq7ZUJHgcfiRB",
  "key27": "2efh7hTyxMHu8iLEQ3VyaQXW2ZnLa1pHxjrMMJKkCJeNYUkrbRsEHyva55F3attSEp5Z2PxWWnQxoDtyZjctBd7f",
  "key28": "4AfRGiHSQ3j1DLHyDCy9LH42sR6Hn3CuAAYPSr9UkstPV21G3Xavwaf42D8xsoTzhqiRNMhUR8nMwY2A5EZTmiRw",
  "key29": "TFvZTxCSKMqGE19NqWT5qsAL7Xs8Bp6HEZ8noDvX7vCVZyoRXXtPhuigHm6UBRBfh7Wv7Kf7RRVe8JybwzNeYgC",
  "key30": "5TQLh47CuLBtXEjFPizZLd3fxKypZZCpPBf1CNHakQsDVMDRzswJm3LCCGfKPTCbHxhhAZk7QtRaVsw9vf6BQ1yM",
  "key31": "2WbtH1PNA4N2tH9DFA2izV4umsreAZSpRRqEm1EwZgHX15WVStGC89frs41kcHyxciNiNEQ4icyooksXRrybmimf",
  "key32": "3hyLbreh5MJF1A9zZNcJXMjzi3QXHR24Uj83muyB6XVp7ULsHDRJD83ZEfccbM4bWFt8t964buRaHzG4CnqVS5Bn",
  "key33": "3EpLg5UeoV53G9DNc8Syza56oEpmckzuP22UQD49vL1qkDtgnfu1SYKGRkTBzW3DdGixrkmtSCbBRPX3xwovquUy",
  "key34": "2mqHGh4mcD6dXLPzbUzj9uZ5JAfsaRjEYrjWSUtVo7u4EwuFV8qsCmSmekwWnXLo1L9jyXdTj4jjYhWCeUCQLAFY",
  "key35": "4yvXXAXdhZiKajEtZ8ynuLGYbFYirnVQvcxz4XotKtr3r4VueR9fD2ceANabnNwjRDDA9krx17tVN1fdprPiFpWw",
  "key36": "3fGHigjhZGt2RnLZW5Ucgs2QtA6H46ENbHq3z4LPWeMp5cqQog584WBUxHBJXhZG9uoyEWG7CLNkmshi5WDc49zR",
  "key37": "5dyaosjAxsh1TzuxoJ522AsRVJNTySCyPZqWNFevaqwfXTs5qLdyJGyLa9gUPWWsp5ShLZnoohi9VpHMKnsUcFbN",
  "key38": "3w6c3vQ1RW8RBHh8ytXqraEU4KDgFiDDt6dkMrXRH6bYUB3FiEbFfxvP6opiF9DbkB1TTpbkpwNKhWmqEke98TwL",
  "key39": "3GxAn86svy3rzpGJULJJPv9cZrEBpUCP5FKpSc83jr3NyBsKdhJCZzrKrxpkF9rWKYrdvPFR8xaYXwpesDmsDDxC",
  "key40": "5eM51TbH6SG3z1aC8Gq1GmpYYY2EdpCcLBGYeCuDbpqfeWzAkGpw1M1rfbdZbg4bgL5SU9fv5m4WsqzAqhiwc9jP",
  "key41": "2epV1hYhggMb8pPy5DPMpkS1oPCfF66r7r9wbiHigM98V6UiBUPGt73kg8gWBnJT8MaWN1z1PU2ZqM16CR6T55Vq",
  "key42": "46E7EcenTy5FMku3gfGfhfLCgP767BdVTzkvF6YTQJbvuaC9rXKJqgJDf8R6yDmDHQgoBqXhkD659iVEpzRfc2hH",
  "key43": "5rKE88mWdTz2Z4EDnx8pF2eXRqtX82FEY1XHDixqpS1JeaozXT6dXVmh8QsPPXn13giQA48qQ6wSk6kaSmRiFJJC",
  "key44": "3787D3eBSREihWeiNE3QvTsCSgAyGcoKbS5eqm2CDyLvZUQdeup7q1hYpQ9BB6w2vMu9uChLcztUFvUSPWNZDYrP",
  "key45": "vs2fxF66gnpNr4WpnknshRcFHmt5X1QZcq6LG4tfxtxm9PghcYvx4CHtcxuCjh1gDCr34gJFrfJxZXZj8bDMX3C",
  "key46": "28mQwUsgnrgcEuYLDNHwoMwG5pX6EKrAq4f5ESdhuE7DRoc2J6ZnJH6bsDxWwiKqxCHPxddaA454Hrfi63Gc781k",
  "key47": "5ZoKNi7FRzk6kV7z1kw5yY8xYcwYYzAx9C2pZWeSWhMk3QSD48raDYJaNCYpuzTAm66Xp37ExNpFBueCDs5f5U8Q"
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
