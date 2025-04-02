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
    "43mjU9dAF3FRks3ucSwfQxszj21T3wDWHH2e6U2KQfBAHgoMLxtEZXibKnyerDfNpMkJgnnxUrYevWzLde5srAYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KrByEaSnvEEY54jZiBXnMTra68diKfaehj6AcvvQhWt4JAXX6EgvBwLMryS5xpRqGSmGaQw6VfCVxqpbQ7ApDGA",
  "key1": "5VNUbuhhzX9MJYdd53X1hMcNe4CqMn19sDMJS2qFJsPf69h4PXUeVDfKJatCCvfJK8ynD1NRg3Y5aQBpLyXj7Gv7",
  "key2": "3dDtZyJoycYeqG4aCJAUE5bYtozq1i6yLUzpE3gx8st2cPQtNs2T2tBDXqkkmLSnxL8q5um6BY8euL5WF1UwxCx1",
  "key3": "4RAYtGeiaGLw7MkDpBK1xRtGU6dFrY83a7mEjLFRURgw9FD4k2Rs7Ken5C6XfCBEzmPHuhoVPPnLB4eLYaHyPm2z",
  "key4": "4diLiaWPf7km7sa4d5r59EfXpzhhCdr4C7YS2zXSFEGUYnyaCXKYnqx3mpm4ixRqFHfQVPoMkB5aeY92HTBEGxfU",
  "key5": "3FXMpAvJULExtXGHV589d3gQpqwjZxxVA4fRFoz5juhCTyNFT6rwivxyxVfpRkF5JjUex334kis4xRabBMda448a",
  "key6": "5PPCgQ9tBYn3Qbq3tBp9Lt8T8V7T2m3msrxe1GWRM94zJSSNkwpZXjF7WjiHRCgXsLDqVzunnfeNwBC4RXsiCzbX",
  "key7": "55mcUkqTWhhkXQ8xc7vS6Lyo4jD9YUkzzSc6i7fmR8o9wmKfmAGi8UuYQiA8FbERDVXV7BjJHFoW7DaxjBzJcmfF",
  "key8": "uwHeoKxp1xyUfvRzfUo5qeGfj5f3XY2degPEJJrpM8etSL2iZTZtpsiSGAEY7GXaTg4JWBfCPv6Jz49uDtcJWgG",
  "key9": "5gtLjh46Zazo7awLA11pBJSzs98Jg6wG4KPnsbG9DZq6GTrCkXrHdu886M3EFQq1HMv8HywGEU1i7KZQmSQqeNS4",
  "key10": "3LQH47RVci5M7FejxXEFTuGbngnY9JMoghiGUksXf2QTscDasrFenmSTcWMcZrsBcf1fKZJAB9m6VKSDMDiCAdwM",
  "key11": "41zJpyKhpNZY58dGmELfEMnxPQ2w8rajKN5V8iVPDPgfoRvDovyK5FoeYTt94zJ6YZYyWSVyKfBxCbkEZA36tyjo",
  "key12": "5j9FpQSdzTXpGNZU5nbaPkE2Zk7NjAmbfWgqPrhFY2nnCw9XwYzAZs8uxH6SEAhUTVLpXYqNbtfMQotfTBSvkZPu",
  "key13": "5unHDevFp8TYajicwGvG67tm266NUgYwGPrT7TbSgCNLyfxE8Hhq1p5VtcUnm98uH7793mPPahmBATwdRvWw3hhj",
  "key14": "2wVoCpBYMu8hr8rw5Nqfafi5C6pE3fJRrbH5xK9JM264pf3pYm3mNFzQZLmfV5WhV7gYeSoed7Z8xkfqbJENgPQb",
  "key15": "24DTPpCbb7ha2jMnmxZC7bAgFQEUhXP78H6FU5spSVhcYCdJYEFgMdZCMAHLoRmNDbzFyX9Kbq4D1a6cBZvxXihH",
  "key16": "62FsR8aQPbpbXiQFmEWF8F98eHTJ6HQoWRELhiaa65jRtzHNAS69MMvqGeumkyZzxxzbQrJ1k2fhRC8Ei6QFCLmh",
  "key17": "2hGWgE9FSSLCqtBWUToRJyuUfad3Neoti7rBKa3yAF1NDCUvMULzDH9dJwAtERqv141Z6AzRJn1pp9opn3AwmPgj",
  "key18": "2Y2QoZsYQFgiBedwu7TDkYUcG3SfZUJEjRnqTBtsNYxDioredz4UVDj7BQHbSJ9bxiD7K65GrZXpu2jprnUbMH2g",
  "key19": "4HE8icReJ7NUpA4nxfaHgXcv54LekpapL2NswJU4yend54bYug8EPJk65XH3r4jVkGvD94aTVXSvKrdTgzWADPLC",
  "key20": "EQ7kNoVKtKe7hw1e66gae8z8eMt4ZdQNNuysGLNTKKkLzQkxNUsSzMiWUui5owW1hjRJN7rGYm3XUSH72wSDAnC",
  "key21": "37Hs5Ch1vpHzRzvg5JtMDDeLdexW7ksSq2N1VPEnzteboo8D5xVWVsmfPRLKaHnFTmi5PYxatTAfUjj5Dw8yoZ9R",
  "key22": "5QwVUvSFTKsCjcBqqxbdA9oniaUKuZtRuaovp2MpATVfNLTTxfdGhxTGjEsfddTs3q5WwrQDezpqBcPa5CoSLSbP",
  "key23": "4oLgZ9qtmVRCEjkmN7CfUTX2pUUVanNnFhLBrBwyzXGLS8aUrsSVmFSMxV4EmWb1y39xXMDFeUS8x2WEDzQK3K85",
  "key24": "4NL5XyMTkFnqJxeUwBugWwDRQ7EyTJaER4Txuu73Ww1WQBMYHC3JVtvmJ4NGBe12vPATqyEB1zeZTn5ZGA1uRYdQ",
  "key25": "54mV5FQ7oB9x4GMc9hcjztsy22ggzJSgELR71uZVVgCCJgEL3nQ9tSK917juENteTd2xZSVKkJgKccNonyXi7Jdh",
  "key26": "5WLPgcQmu8UJz14wDHFnY8wuzMahFVfDeVEu1MN2JxyzmQCVWAMXP6Yi2iCELcp41t9k2UCowLpwpdmicAZMoghY",
  "key27": "35QcmYzTnB1NjeUM835st4Rn68jcU2jRJnqZWHPdMDiSa3KnNaGGGdNJTtArpPJrqfHQa64d6Y3P1PknZoTxtx89",
  "key28": "4siMYdS6Vr2byBtrTpLPZpKjfVB7Uoi2ZUv9f1rWjb5VXsnP1ZwDi9CxT4ozMPMbuyvoRN8VZqBQ1TZ3fLCQir2Q",
  "key29": "2eUwFap7xpDeu3mcnuZtGewz23DBn3272BvBQPR3hMgUhizC8nN199z3VW1R9ZjrQV1KRbfzg6VKKFQ7pyXmzN2x",
  "key30": "AV8DxLckmzURbgJzQbD2wNypvZNrjk7Ww6QEm2qsNNS4iuoQgZk5DwxuENvRMVpeGXuxi2q1cdkmoJzwY5vXgvn",
  "key31": "2iEcwhYLyVx59quAUshBSEcu1RHy4LMfm3mGiSBRbdn9Vfo3BKCFDhWBRmiZxgJJEXQzvd6g8NFkS9stS9qqJ1FD",
  "key32": "4rrGcnTfvTqZL1QjRFvCHtShjP4GS9jPjRo9KxwnKe2n6QNy14d4DzZ5DkTjvGCgQrfh2jnkbPjF2yJNCg6sbcNF",
  "key33": "4Sm8v524wmPbE9iD8yDrQaw9LdLvghJwYvXbN5RcN2NcC91aLLi9wsWKKXimAs2bBQuTRb2BHgDchdPmKESeeX1P",
  "key34": "Z36RTt36mbSVdo9TCLjSkF3wndM68Lwd2Upch5DaVRxrPdHbw5ZSfLJKYKSQbjBPeE9XFkhHUFFQRCJ4LqWzqyp",
  "key35": "yTS77ifzMyQQVDqHfvWW8XZekaSjhDNqxoP4YPMZHBd52uLCf2ESJ5zwdgiUMwzyZR9d2CzT4XjbxyVLZgSWF3t",
  "key36": "33QF551by38Zb6v41zRRjD7x4sD3cbepwKp775r6EwKZ7irpSZ4zCCyTV9pgFBroDSSGamQ1YN9eXDEwTHjjT5Xf",
  "key37": "5BPspofyBUVUQhne2YFBpMVgPwoh5fojuv43rQbkweBzLUQ7PfKLim3V1vs2imFDzHedX4oKGiaz5D7xgnQD5AAc",
  "key38": "4QGhAaassjbL8kcDXuVHNDBBfMZyFae4rBqbAyio2fV4pHkYFKX6GtY7YkAiSk7B21r5V6L8y8uzrePui1Bavi2y"
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
