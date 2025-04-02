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
    "4Uz45EfBTtQkZyzSvG9D7UUihop1gjJpuk4Ea5HNpci5ieT2bjzQCAdtGKwXJ2Y1qHkMFZDUR33TMVokHUwixSwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wqz5mfFgC4HtFyo1ksUAhGCGi3tUm2dx4rpgiQC7QbkuVE8LU9pQS4UH1vegMsbNBimC9qHD4M9N6Q7SSiZm8im",
  "key1": "4rFm4JAbAWVZi8HbPQwEBCspKsaLjERYxY44sEVszSKFnNg9GmwE4PbNTqM24NX1MQ3GfaMzCMoeqsMjSEJh4npt",
  "key2": "2ZzmDuz6xgDa5X4mGUiCBjTQeTRXXCrwckdzLTzYwD4vU6Q6dUbSMjTmnWJP1fYTTr7JEPaGkSMZBFqTnwj853Eg",
  "key3": "5aomqmpoqGk49vbumaJbPk2rLUx1JN4xRqunVkUt8qdEp6866bMftG3gXh5YgTo85TZG9vsxxuejwvYuxJX4S5jo",
  "key4": "5nxKCjtkpD544Y9EmogHhniUApG2tBHhJYHZPDjAYrWW7idT1cdx4VBNfAq38P2Wa1DX9pciYCNYx9eDDdQ5uqf",
  "key5": "4s4qUqL8kEpmqZenrGjeq8A5QH8QHqR2kRvNZtkPLC5Z42tJJzQ8NikRGd81oagJfcmH1RpBHgwBUbZUJ8ifGvYU",
  "key6": "rQZNpkVQwEAbdocbvkQawdJzs16Vzyvea1vxRweVsGjuWXiWC5j5rFjJgQAwKJZnSoY7kTojXzAHeopWbfYxhDG",
  "key7": "XmfgkM7VnKTtLdzc66usHD2NYrvrvb9v9EdUfhW2AREx2jX19XMjFjjECoowjmAAmq3vmSnmKktj4zW84TDmC3b",
  "key8": "2LN6oh1N3mPfbsY2QRcShic2dMC8AUrhNjTEDmZQZnxDGz9vme4ZJsPBT9JSYJ8raYgSPQK3kYxA5nZGzwmuCHjS",
  "key9": "a8ATyvH4RX3ebNxWwcne7dQPmgQ3rK8A32nTPktmurJt75f84JM5BSYaPqZg1sAMRqcwyKVLQsaQ74JVH7CUCzL",
  "key10": "5FnRAeNcU4sKeWKRg8V7cGoJiHt8LjmQjZS7juNYf9BYHtkCFWHuN6GDf22Zzv1T1jFWFuDdJVQpHLv1Ko8oPVkq",
  "key11": "35e5LAHxAucu4AJ2PXRC7vxoVYKNnpvDg7EytLPGcB32sAGPHx3CF28XNF3eNvn4aaYYx48MWfBoL2nQhrueLEKY",
  "key12": "5XhW2n8QkF3q8preWsUNZX6dhyR7Zy57iivvxMmQFHi5mrzP4RipQSMVLRud6g5tC5EMZhyguFuqhys157rFZ9Ti",
  "key13": "5HBSPtX386FpkndVEBAQEwwPEPt25oC6wPNeAafDgo3ubszsSQrUBDetdU1RVNzLfPxu5cW3TdECgYS3M1sNw9w7",
  "key14": "5q6C7z1GemtQr8BzuphPqqCVSqWAZ6BL11Xat3qCXne35jFovCMXm759oMrccytypJTnbbQYksWsGnwu6U5Ee55t",
  "key15": "3UQZcdqPFKB4WB9aMSqTbXuKYvA5V9pVrEiTCgFAmb9dPjdU7bpT4PmPDo5HHGxBXWvwTK66GJuS2aVfiqErauv2",
  "key16": "3AKRN81pHW4fq9TGs7z2nMTfBw6TjKq25rYy1kj4pCZ4BdCEcrDRgTBnwoGRu4BpyUDPadKx1bcmmx7qYwjR5BkX",
  "key17": "32brZYrx89kJHJPsYmf4iqCFiBxX9wnqxWzdc9qJJrEEJ9qTEubKpqk1Qvy814vrTidCjHQQwUz2SjzSrEwgbtNT",
  "key18": "2oLUdvNxib6zNphMPh17pPwg1d9NEjz9PNNPRbUaQ71kYnMXXYMvagVEhwF93CuGCkCSuhP7aVEig1FB2iBp9qmY",
  "key19": "67fw3TzqVgeRfVXWRcdPfbYW2iX4X1fZvacQwtWLaXBjnFS6Kg87WpQjnzb9ZJuQyA7QLvvLZGditkcbSYLWchHF",
  "key20": "2Ma9xJ46kBL8VnTLws8Rpku4NTBjUhdmVKc9M5DZVAcMfm4jS52RkJGbxnD444wMyGHQHWQJCeskBPqPWeoEaKV3",
  "key21": "2y2MxenZtQScXV3VoHphVxwjxigvVnhmDx4qV3zqHp5GasSQyiMXXscASH4EoBgcTbSMv9WBtdecUTq1exPyJa2m",
  "key22": "3D2QqWRHPdQNV8tkBPSRJwEL6NJu1Mm292SkQEawu9wabSrhtiudM4myH1jgcpcNoSf35VJDNjhBwC54zAGDmTaZ",
  "key23": "4VJhZETEhqxgYaw9JNgU2rT3ZsLeDA9LrANDwPwGxfunz9QXuvVTeaE9iqrJwh565UPaJLmrPoV7A3X5ETRjaM96",
  "key24": "3Rqjm6EgkjuWok9j2UjgeA9mhH7rkR8mhWLb4BeysLFR49FGBfehN6xKgxXuaABuRns9DqiCmzWFZwiXaMyq64mf",
  "key25": "Qfrzy27MxT24UxCnr1y4qXomM5DFcmgpdftk96uCE7rQPBChuXjpnqNN8432qBzEgqKwTshpENabRSi9TsBvBr8",
  "key26": "4JSAeLiqgmhNVnsDq7EhX8oFL4hu1GH7wRpzACbzaoBW78CHFGHkRQKa11icoc9zNNkLcrWYXLg3ZQsQnTGKCCZd",
  "key27": "3VaNexwi2EVpu5uS1FM1Fi4fpVNYkSF5rZhbVxwhRFyRJqYAnSH2AfCPqxy4QzTzUsap4nFLF5XCkYJkSi8QbAoN",
  "key28": "CcmNPHnvofbgVEj3ZerMw6MAGMxX4iGkUcAZjB2sSFXNR3vK9eve3Rc6zwyvLfDiEw35aqzjCfgJTqw9YsRqwhP",
  "key29": "3xiCnWvuCJ4ooJiadmrrRJafJk6ZHM6YKR1V47kDayVd2JirXJPF5b9DvmdexFqLirscEtWr8WbVKYeoKNc9CwNs",
  "key30": "4Aa1jFrBW3xY7oSBXtgj7ApXVKdPFdrTkCMh3fX743XjY5tByTGXPnByD1mq8khGhCieZ7bDSdB1tLUrt5HHEtZS",
  "key31": "3hKzSZEH5BPL3tqwe3XRwsFKQNsE1xQip8TwBtKR9wq6ZC8ZKA773h8Z6L6MGQnLaAFBDsuMknMu5Y6TtEzMtCYF",
  "key32": "3nJZQcL3GYsmcb4jDUz4sDH1gNe58eMN8S1cE9PaKz6BtWDuNgAkNcgYBvrPah8zrts8YTVVcuaGDoibQXRhjKv9",
  "key33": "4WH8Apb6AyPtxyyphhskfVJzJBuXWiSPZ8Mj7XfDByrtytUjtU551TSFnun6enGTikA8fN659ThNedc6s9569Lcj",
  "key34": "2CASF9wmGNFH5Jqs9sFfNPdMxGE6yH8KFfLfzG9vRQKQjNRCZk7hqjLYHJ35qf5eZtoEvUtYpbcJnLvcZ65EKoq1",
  "key35": "3pRR64VtvkxP36hgroNc9ovYWXSpMbaAt4Un2nfA4PhNLyiaXJh55gJhgj4PN5YZCW1WiMCDnakQX3tmujsSXz4M",
  "key36": "598RmhSFQLgMcisvAMXfM8WcUbCimNnN91NtCr7ia9P9HCBSJjLV7mur74kCHQyA3PcoAGpgoNUh5Qovfu4nje5W",
  "key37": "2qUWVxfLLyESPzDdTaeaXLskwq9WF5rVTuZkNupRpbMJMVhKTkRfNcds8FgqtziGmmCNiVk2dRRzi7vra1nwf2F1",
  "key38": "3TFteZNQsftWk9VVxgKVdCfqx79LAqPxYphAoqef3fCeZt72bHrvmVY5vMK9hAy6ETgztaTf9RV69FSe2RsHQUzS",
  "key39": "3ZPBKQgJbtiA9U8YD4B2KURkEpjdxx7NWiQt5By587h1YEeji7jJ2mCwTh1fhGhRWqPHQcmRibG96JY4oFyS9va7",
  "key40": "NMy23HLu9ZVTk9cJt91ZJf1rLEJdADKEwFtvudBhsdhSDp6oZsHiZPgqb186zKWdeTKfN8mLUTUreMi1myur6BB",
  "key41": "21q5UdysaQUaKEe9b6KReXpPbRFYRveo3hEz1Yv24C4tsvzDqKFAJWLk6JbY1mUpUp9QkWYWVSADYu42DVrp1mqH",
  "key42": "62SmqwHDQTpQHVWNcthVobkFWufn4XADJampxxR91mPpH66e46k6JfinDDnzMKuYZNTMLqzWwvAWRDW1PgsNtBfE",
  "key43": "3uP2Bj3F1XpKrA5bPcHXqDxk923qqBGzkaEuzMwULz4mdqeLppbsVX9c2hKyacWZZF1jMwpsPGDhcU9euWxGhU2T",
  "key44": "SZwWMAr7svgMxf1MWStKTJRnUxyaBXRtRP3NYK4c3mqP5tGARaJ6e76T5bzd9Jrin95GZUiK1QQ4rFpMjS3GP5f",
  "key45": "4wHYD2iko7B5gwQmFX7iMkczqzJ7bxZAGcMh5isaWvVwvVQ7gumojz3oTaoZUVhFHdBavhgqqdbcb9TG3TLEVN7m"
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
