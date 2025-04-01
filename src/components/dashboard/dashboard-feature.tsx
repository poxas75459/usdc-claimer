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
    "3dKyK3jP4S2FBExTirT8ehLs388ss4FwpTyzap4RC386p5f9pFav2fFVcFmCLjitA7ej8gejk7ZJvhKtok7gy7sN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ffaQg4r2RW42DNjjruQ23kuiRnDTVeQVThQ7DvVotTLHqwqpcdHCAYTsfZUcfEd9oTcsbnrAsLMUDerR9hPB7tS",
  "key1": "3gX1G5eL6xKZcGW4iQSftfcUrYAahBzNKYegTMEuFrsvEprP7wSZo5r44e8BmzXLReieudPcsZaTjnRUfrhfohQa",
  "key2": "41SV99zWNVk9fuqPMPGNn9mjiihbisJ3eEStqQhTtHRJdT5kURX5vfLR1xaHL2oPtXXF6tznMo7jXDFHxAsfqK6K",
  "key3": "35tsoLoP5UE8xLGYfmmC8wfpQYtMtaiodEGQRG3TYHvJPfs2AQamLQEP6ZtUHjaizXw5RmZCygp18gv5LAqZu7P5",
  "key4": "5VoLnyAxUTdbj7Q6YesXQbxFsaiUnCgwBnzzawCwjzGFD4i8gaawnNgrREFd2ybYTfE7bMDy9HEqK96E3dF53XRH",
  "key5": "2STWogmxEugvKEwAfznbGZeK2y4JnayUEUF7dDCj5jqdezro3R5MrZ91DUiZZtwsugCka3KfLPbnUKJUnR8VtVCz",
  "key6": "5c2sx5QGfyS9UFyGkrouuHzHy8d91m9audnuhbu92X34PBXpDusqJZ5xTfqyEKyXkS9thLPDQYHrsUrsxQfZTfS1",
  "key7": "48JEUFe1qznjeNe5S8KMkuuai3vSkxNRcyyieE1aQNPC9jv7pZNj8E5911gFe7VtG8Xr8UCivYEk14GUpwP1Hiud",
  "key8": "4Xx5intr2AkFHfyp3ZQ1kNLBU3CPyE1kgwFjTDqS9xwTQjQKyLXDveEDs7nEAzANyCjWKffq5FNERTnNp12jjn2v",
  "key9": "2vDcmPGj9YgM8bvvtrxaxQxykBQdaSGHyXR6Q8wtayXNAjN84QRQCPCpzHExDaGW7552TiLxC5hZPUc95Y3Kgbxa",
  "key10": "4a4GRre2xgUBiSCLNKhMHujjuNDticshDRwCYkwCPiRKW9jEf6Coskwgei9jpjB74TuksW4S2aPrMsL1XFZp34wT",
  "key11": "3mcSTtxAcf7NVNY7HNxms47eEYd4mXZ6jsvZrtjiVTK7pWTtXouAkAJuQYKdsEbaMRJNDofJw1yPpZc8hMP9pyKM",
  "key12": "3YNcdhEh58MARov7cBPgHExFCnmvPayrh3dn3vo7WHNAFaDutFyTRPWw1ueFzFEvAqB9pDeYSabPgA9g6TVd1xvd",
  "key13": "2FAagXFfvmcwPnjLRSTQFT6Z4fbtXrSPB6jHFsLBEJefopHzZJDjg3keMKt36ZYkbahTn78xWc4tAq4mFJT9kFZd",
  "key14": "51feTE62GEngCywJxhj9AFF5BuPNmjUeqxmGamQo4Wq7wPKDgEVc4bEeT9wTVftjHg3vsYNeDTbJH1pBWWrhVhjR",
  "key15": "4MoYTgVHNC2edjvPePdi2176nupZpEJbMZu9P3V7LKuMsEQf68GFpUse6Q91AWwGRiEJ3DPnzsw7zGt7bA1temSF",
  "key16": "4HxHKgage8WvJ2b4sdBFqRCkQnP19KEUCXBrpnxwJgqFr16hW9dfy72G3rN2E3Z4aY1oPtDQpHHHB19LpMSB5Nde",
  "key17": "nvpuqCUfm5huKfxKgNbtUTkKaiq1UDYp8meehrpTXZhYsiwMxwCm74bdoqFyhijt96JKKHoQds7L2sNQW961jz6",
  "key18": "55xGYDH1ub7Joayr91RXU8myUMRcPsAzXtkTUABJQsVtXg2fsqX1nZ1HhYcf7j4w7Ky9xM7x1KGG79GFvGhhFkrj",
  "key19": "3tGMSTvFyNKj3KJd7YqeSqbQpgeCNMNxzTJnzmFZEk8nsGCkowZzCvNeSZ12EG8CTa1zva5XgSPhcRKqNq2eydJc",
  "key20": "4U2XbJbMDsjDsdtipc4QU4Vm7bzDKVJrAcixHnx2MG2ES6vif7gZCnGMntyAeqQUNE5YMjCLUspHnMXrD3SaNBwX",
  "key21": "5AnhLnqZuXz8ozaCU4Yq4a8x1crrAcWvLikW8ujuR1VdfX9HgRGJ3wiGbwf6Sup9aY3xtGsz7VEAq9GzPXwSme1F",
  "key22": "b4Ffkq9F4UAdd9nzN5sjX6V5vwAGcZS6Z6BQMKmvmbq9AWP6YrCR8FL32y1FHnYef987QbMd1oMBg7jBXCu47KN",
  "key23": "11FHATdNMG6wwAtg831CodWw8GK1wDXv5kmkLR1GadTdaTPdmFVbG8qimGgWZr46TNDu94VKXtjPGkgy2FZdFAf",
  "key24": "46FXWSXvDvZEjPMCX891FxiU8568tSPEoJdwpHGDdxcdwEfSE7JZRVRYK15Ypj1yyMFcAHx864TFd9rzRj5EUs8M",
  "key25": "3FCCYMHB3RhRu6NbmitUVdtJ855TVvCcHWQx69W4LYF6G3W9oyPrxeo3wYWeVQZwwz1aZb6q2di2tyZPXsuAYMq8",
  "key26": "Z6UdP73YQiiQGgsXcN2xHWUD4apRhHDM4MgDYyEGK3aXZszNHCFGaKEmYPySVQrHquaErRSsXfUFxAe5Aa8c5QU",
  "key27": "5JqzcWhzS1DiFVQBzV1giGRFiGvFzX32vzYQKmQQUd42iuSmRgM9FR2ySf2wTZ8KTeQL4q4jnRodhygoJ1GJYRwk",
  "key28": "5Hz1VxcLme8J326kpoqo9yppSbp2diJAHTSTK54WcjrhvuN5Noh9FDwMeW7iTFu1hYk5Pavxi13BCrsDKBfY66hH",
  "key29": "325suoje5FARsovvWKARrDd9WXrcTQoD843NsrRdhZbNRaTxnQK2hXpbcNZJa8q5MBEtNqSLXsTQbA7SVU26HRiW",
  "key30": "2ALZtA94eehW8JRg73KczPT1s1PYWXKAytXrQtkMT75zbQN1Q9955p3CQodXdg6TUj32cnimcCo4Cfq6h2DpGqe1",
  "key31": "2eKvSQ8wqXe5WJMaPp27n64DVikDHhiFoT28Pbu2xps7BekVLLzN61XgQsNtVFSK7wwA2LmydPRZ5cvemnv7WpnK",
  "key32": "WSekDjRcfDW2tJdm1P2igzC7w8mPNrqbP4tKXqTQhiNB3GWPy1r6RciKZEV5fXfSXPpG4xqdBtYVdN6R5s3hkmf",
  "key33": "4xctqGVVN9JHmWs5J5cL5QsnofQL3H7EcYszUqTb8f21teGd8T3SowGABJShg91FSxYBCufYwbdEEzGrRNKgRWq6",
  "key34": "3RF2rWuzsSdxjL7QwjA6fLUKTPEWshu6mLdPKYhPzLXKw8kTVuK9rLTbMaFAZokoyqPqj3feBwdwDPM6WqPA2FWc",
  "key35": "2S8exR6PmYk3h23bmCE9BEPvBqcPi4bK2Y36QYSzTYKGcG7EzpSj1zmidt7LFwbQ6crR3amGxoK8CnPToRsAdvfm",
  "key36": "yivuzKT6T4dybgVwmeZBoNdCmiuLnf7PQGNK5XmXjDVaEYrzPuvd5DT5oEbuXjjn1wcatUwX68JN5nD4D7P2EED",
  "key37": "5vaSYeh1TBui1GSazQjbDycBc6fHkAZKRycUeaUYvDifaXEZ62EHjUb2oeuS8i6Vm26jXnmNzN6TMts2Eb4vbnuU",
  "key38": "dvXEnSt2Q6ioeyB5159tzNFK1UujXZPLrzcJqLyuqYyunak2RcRPJXHk8m2MULBXRFVWHLhtW1i1XTzcKaCKVr1",
  "key39": "2qtiKyXbDQbtGVB3TmyQvBgsBbTdGZyApsygCvmQFsandemfHJyKu6ed1DBBSoAFs3CApAsuYRMPZotiGHKuvJRv",
  "key40": "3GJdP4VLUE8p2nr5JnaWTh9WgzQ3CP9bfX6vWShi7KNzDTtti7HeaqdDe4sgwLKY9jNkqF5rRjqpVor5yUuAMc1s",
  "key41": "iziRCESahMhYVCYH8yGG415XB9uaSx9p3hnHzDLEoaC7vTfQZWkJbyznHYCaE83cxYDqEfor9bU4Ugoq9z3uWxC",
  "key42": "5bPJgpxwrcDSMt21gwtGAHATT9APeKUCEtupn5dockYFdPWcDfpNodAyFz9DzNJp568oW1EdqBuX56wHuC8ar1zZ",
  "key43": "hYHLKQhUEvYNL87CDBckKiP2MZQ4JXhqgQ2vvV6gzamdHNayvWsKfA4s9QsimTUNPfehNwkqpJfxVTZeQH7rxoa",
  "key44": "4QmHiUJEcE7P8vHGuKR8QGTnP9XYMVHQLsS2cdWWvpt4PvVNvTaNpsatgWVvNHBSEyyJ7ZehE7L9fRnBdpqtN4fk",
  "key45": "27vW3m3okmkwko6S8MuC5nrhsLWCJCHfZhyySffiAy9DTWMtPsVN8txcsz3NmZ1DgXL6fAA8ruQEZFrfoAeYXxUj",
  "key46": "5xgvXydnMPbJ7XzcK1sJSh5m5mgSjvvdNUB2enCYXUYZ6ce9yfuNs8nQpVGys3p4GSf3vgHNWx3RkgK3tY2deAg8"
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
