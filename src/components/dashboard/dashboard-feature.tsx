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
    "ZUUcp4pyC3bJdcXMXhee2UWtgGrreSaFy1cuBjoSF5uK88xmL29aSqoyNB77B94Un4vPdUDe6eXTTbApbVJPPDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a6n9ZzGE36Sy7YrZ9xMs4WErnE2uG5iUvawe9TmufhB2PWFBzFpgwwruTmWaJHDKjXM6haT1CLVH2i9G47VCBdS",
  "key1": "2A8Q5qwcJ4m9oJYG6dnfmJvBQqhRPdDWLXk3LPuw2Q2mhNv6HTZkXvxFNEQKBv1S53koZJqVW5oZwVxkecgE648w",
  "key2": "5ooQ4jFn8ow6oCTfMcwfTdZ6Xg4BAp7nvFPpNkd59mE1vJmsmumDo93K9oTsRRr6KcPH2CLpRHU4FjFcmhFdwepq",
  "key3": "42tFRyRJwAtqMeoAvRX6jvvJV6iezPWVuq5XJpTXfKTXCXbudH7RDw9pwSXRuPcwzxgzgcnyA3tG7PAFLCcyVMhq",
  "key4": "5oX4o37dcP1EgCh9wfUNjR3MzcixzH3nt56misEyNVHu8G9EdhUKKJy3LcCsJxG54924rC1Xkm3yLpp7UQUp2vkE",
  "key5": "4tyr6k3b6CxeJdnM4h6q4if1zF1yxsyQgadvPrGndCWMza2rrheUAp67GREeNmR1wk9aZRW2iD5wdY65tp7NAKof",
  "key6": "Qd8qHuH94oDqfin7usKBryrtx3d2qqozqH89xgRMwDccqtet6qxv9gN1AJJLuaE67yo3QH8Hg4ehgHp36v5pK22",
  "key7": "4uY8KHhX1dhmbxhY55AoKMcFAgxBPtMXPfF4n2FWtvHsdDLg24ouUGywSuUTg7q1qmBi9x1bGHYt9e8vqPipya5R",
  "key8": "2n6PV4TQr9XWnJhhDy3SoQCpQoWiF9JqcUs98bYHgbPiEMRxtgKYPqFrgczEzDj2BZBH9ravyAzpSZw1BVf36uUL",
  "key9": "5K2ExpYzVNtGPr6sJcs1cxWLXYspHMx5RSUjahMGR7DeLiqo6v6zpDAQqV2xES5pixi7RvQXRdnAxgq2sH3NsbRk",
  "key10": "XQ6eCfFcXvchYw5ZTnKkYXoDp6YFoxUtcQcRQQwQqxQqBKdp1k4L4Ebn4U2hnmPnH9q9szQamAZSngFm4D1iV2P",
  "key11": "45gpA89WCcbqzCciQMfDvMAUSwPjqX9dT3ssfiA4HSDHMkuH26ctrcVrpTArn1wMKQnUVEmJFsy2q5ZW7BkYabq3",
  "key12": "484uR18LnpMFvQ8nPSJKkG468veKyLDH8sYsDJnr1xBs4sdzFXLh8wssKR82BXx648eci6SXabHM1HHSyzQpsukt",
  "key13": "23unHhU6Ga9A2LeoGYddSf73hq4oke1K7bjkFv4BA7AEw8KJMjvoG1ErnQQoSWu96r8Nbgrgcrsschgx3oEx6FVL",
  "key14": "64YejDsChUsAAGAxr86VVCtF54zuK1wYgfSfB5xisjcknGKRuoPFTBwSETiT3KURbSwTVMhFTYiT2EMWtJ6tUfLt",
  "key15": "5Q6mxn9aziWgLba9RnJEfXBbbyqYX71Smk58ochvpYvkisddPjpESfPrsDsN19g6gqW28rXekXnNDFKbGaQYrvbd",
  "key16": "4Y7AatjaxL1FkUUmRGrmv7qB9HPB1vjh2QCmTsMHZJkNWufb44qazEmss6UNFZ97xci4SFHjQzGPWLvmgkzM8vKo",
  "key17": "4zWR5fhPYbKHhu4FbxmG7fXsSzxTZH87mNbhAuxTRGrqekYDCHZTbzJ2YqpsSes5nziCsCAL3fZeVYJzKW1SRPXB",
  "key18": "4E9bTs8sxszRWVQfyd4byxEzHVHFz93j1QNPQaCaXVgu2UeZNYiKWptTSjBSP94eG8MTbMYTeqpQt1cxoKmyKxpz",
  "key19": "31Tmur1p7pzYsk2LHPCmj2CPYr1XcpWa2TBM3qC2ame3K2jrQkzBvke4vQMBKNh5QvDmo1cbTaDQccM2Q7d1KJYf",
  "key20": "5mE5iYNcG8HkNbPC3xDt97njSgULpu6SoDWfnT2zFKhojhznc4f7UjDU9bv1X1bC6JsnLTL6kTsgLsHxFdB8sf8U",
  "key21": "5EXxaM687FCtm141m6kDs5uAsp8J9t2JwHvZgRBYc2tYHFKauRL4HrkBVpYbUzwmqWyaq2ydv2cpJ6PdBaToXkHu",
  "key22": "2ExvhokDKuENNEyUMnWoMoFhpKcrCaXgFzT8QfgTnDosUt9jSPbkeDmJCxEPXvynh51YnqJyqAer5hjPCbWhQSQ8",
  "key23": "51XfQWffhj3wJLCdQmTjcUYNGy5MGXhXgCzbUXcoaW2kr3tUpwXhzYrSAxcUmiQ7KjVgQ7Z2NUf5etLqBETiZgeK",
  "key24": "2t8ihhZsM1ZBoGZgtGAELh3batmK6PNyd7CfgBtwd2MH9PvrFuTwtGpP2TdmNHJsezKXoeXDsW1jwq61zwdmS7bA",
  "key25": "2w7CNAqe8QJgrGKZNa2KzR4hp91EVaiHytY7qSBW2LsFJZ2WW5MN8UoZ3ts5ni5QsVC7QZaYq1QRTLNVceiVeaRd",
  "key26": "127oEXup51xSKDhzZfrQ4FnJsZ5nqHqUgcLcbpaDmDWwQBFaUf93Y8fS9jigSRyZ9pJY8uA642ecEKXJKsCN8e9B",
  "key27": "2pfrmz2bwVweQ5CuinXvoDLvygeHsabo13SsVQ3918RS5EXh5bcguRRcQYabMh3bv5TStqEhnnZynJEvWBLvAkym",
  "key28": "8aNYFV7wh4qxPswSUg66JaYkHpU7bmmraMFjgEnMJJ1Upi45kvbDpvYDJXCMcpVHJMMnwqrHf6hkWJfraac9ySv",
  "key29": "32xK5iKJScdcU9JSXkbnCSRbvi6C5KgC3421kzY7x6KSGXJh7CBQ6mQC8tbp65Tsi7hbSvPfwGNTjye4h2qY4rLY",
  "key30": "X7QSkwjDE7rXp9WR1fxVmyiVMKT4EmDh4ug3Kmsq1UnbQKmfbR9DH3HUcfr5pQMypM2xb2Sxvs8PcXGAz3WEEhb",
  "key31": "3UvVpjdd5Snt7eEsZfoPuZa3harUcoZPJjUhFF2KjN2ZtaXVSZdce7m8xu3HRhkLmxLUbDeY2VYu74BDceeP2gZy",
  "key32": "34qdus9zJVyeCpKQ3MVUYZf4wFUueK3cVbX4Do9wEPPTtoDuQERnyoLSXBusBjVbcLGz5jaUR4fY6A8U6KKqvoRX",
  "key33": "5gBCS3sYwkQmGgTNB36swfnARRHaeHDRsESfTKyXD51Z398vn9fdPyPeW7sFrWKiRjBusp7odWDVsEC5jp5MJP2J",
  "key34": "45f3v2DDKQDSGZXCaqVoPDUhfzbqN87aJfS2sTC4xzgXYRvrs857gmifNuAoWmj3qPJdYz6to7vdDR2Mb36RvBKM",
  "key35": "4KHXV4AxKQxV8Y5ZY6AAmpwUt7j3gaPzvH3D7kej1ABmvaM73hBxizjWtHMfjYaeQppG7wL9t7HHXRNQZuLkzyqx",
  "key36": "5Zr8mGNTRqoYcUrKcYRAPD3RWDKjuh3MKRAwsTKg7sF9ahKCSZeYZCiTMUfAtz4rCyqAsjvcdFhrfokq9J5z2tg5",
  "key37": "LghsDiXqNXEEHecQFRsQLMuTjZb1ftgqaTphDG26ViTb3ET6SBm7tmyxiUcPuvWu5pMFaBsWAvoqGmXodjQxq3y",
  "key38": "58yG7S1DhwhhQwqnS6hitGMJ5hsEpxgUwVX8yrBhMMFz6CMeg88qszjFMEiwZChERBdgAGpp2UyuBKGsQJVSw3gJ",
  "key39": "2V5u4NjDWfKMuxFt6JCxrxPqSibUy73cWceTVzoTJqQdvHncov2bFN2LB6XvSpn6w6dzDW2SyziK9ndGoLzVk6oz",
  "key40": "DVEgXRPRRfvP5YcKY2Fdg4fFe38VZCfnGFqdrFhCFNhipmviAUGzT7eSgn5ajv7BpsRkPxmHkAnD3U1hrjPeqjs",
  "key41": "4KH5ZNVhNFBPmRzLmMercQzFnoSwj33JUpqraMewzFh3LxAcFMCTx3gkn8GTJYzAXuyGHb46QnVHSUNakpzU9zZf",
  "key42": "3ZTxcemoEtMfdDn6cuYrFkpzLXdfEASauSoy2KzJKsUmgcuB34XeBesxXJ3Ha9ccijJo7xcpBFunMrtAsTTFam7m",
  "key43": "4QsDPXNbuTJKvNobm9HX72tcCzinA66qwTpBwTYo8XeTWedzTnd4vUhpR6xXSQ9bZaDEqZEkMyMgq9rmU8tqV8R",
  "key44": "V3bMij6VEZMacCCqm5kzmrxF4Mb6Gi2XtrHTeZeLoE4shjRp2x5Mo6inZLAGKoP5EQxswiDG3MpAEsnEfoEYKdp",
  "key45": "hQDmuk2x1GyPdVwLZCvHBtGKcWacxYC4x9qQxvrAqC5W8XAPNu9XzZGwecYrWnXCPXBu7Dz4Fymc215AxxTztgX",
  "key46": "31TsEwk9gakBo36AgjazvpJgRNqxRTE7i4RuyJRr4BhSaZkpQLXtySg8Px4xABKmtbhR3JJFjiLHDp6okrEpiByD",
  "key47": "28xMXru2VsRUwpfHrX9DcBEzdSBxG3xWQcVjLeknBo8VPDbg87KXf2zHKB84EXks5n7jAjXfaCfSrmJpbEMyVhry"
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
