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
    "2h2LWeCwc8tejakwZ28zySLnyJpvLdkikC6c2QB4VjAi8Hy43kYftbYDC9a1fviNYKigUXfxmib9GuvvYG9jtUM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d5mrMthoyCMFBa51nDWGnCHvTDvfbX17PmA2gUaVV1bxQn2kxNp5YSb2TMZMSspwWreBwVjoXGJkcgNBs8VBGn2",
  "key1": "5AY8gAJJxnpu3qBnn7BN3Qm2n5JwPMsuJqaMcExWL7SfTpvwVwEcstH4sNrVnAz7A75ptXvfkRbzVvwhhUq8BXNv",
  "key2": "4ovBpScsr8GPwerdeAMK439MQLhURaTyNEzCgxsCFDhrZcvVpPsGoRLX7YFAstmgBuqVi8cLC6Z7rUZRpcGaHr9T",
  "key3": "64drjxYMYy1U3wJcWXX4q1H1S6UfV83ym5m8vnxDbuWqwKnW1Jpye8UQaat7k2znaPWRChzaKQuS7XjdqAGvHA9E",
  "key4": "48YYiZtRQFqUSjD1rZsSJ6WCxwEk1iwC3bEn7bVk5bPScjng43YPVVn4Vwaj9etpmgwBsen6k5pFrCDXtPc4VVpZ",
  "key5": "4FYNCuMg2QNrKvsfTYaUGksK33zWKy1AVDgcpckiozT4ZohxkJHGUAMmAcToyqY3a7YPbYdWN3HXaU1BjVNQmb4k",
  "key6": "84kxzg3SS5PiM2xVmatJR4NhcVgN5Sd2Rv8ZYshcbKq18EbtdaEe6BdQ2EyJjpe4B4LGKLN93q5BH6FHTTmjqqM",
  "key7": "3Pixp7BfhHmWgpsLDsChK3M3AK66kfckoP8djNxSR8djbVrbUCqaTvbALv17WkTVrLLMsvXUJuV4Xgh9hybCgB2u",
  "key8": "qVM2RMoP2AqXZb2fUgsJmHpMZKeuU2BULKZGy2Rq5BWuE2ZRtaBHSMrB3odZ297g2CJ91jrb7z6AgB7MDNkGdsV",
  "key9": "2jpSSM5Yyg8ThZx1CSdLoJGPBfEmUL9GgSQcsp9aBPF2NXnaX9nGFQ2fqLigAraFE3QpEpQnLz65V55z2Biajwey",
  "key10": "4cn21ngvugp4dtvUKMQ4yEc96onz7kxvH9VQVasx3F9CNy1tfyrUzNMG2afXHMaMpJ6zfvx8hfgaG7UWGSWvvJFy",
  "key11": "3zuiuzKtYARoHmsm3Q7mZJNzfAdmjvHajGoDRwPtcLh7U9woaUfAia61oRHpEnVRYqF8fBtSNDSnUNgxoZHU2KAM",
  "key12": "3o36p3BKmUWYsAC5AQYJwtqu1FVuUgWJwr4ZaTqRu6C9mFBTDdX2gDuhpFPhQe8e6SSuvWTtBrTp9MD3NHDZysvi",
  "key13": "24y7wiyWzeEy3c1fq24aL2DKqknwuWJyF7GMby6c3PprYzQkYQtG9d3HwFn443KkyfzCDgnmAmVybxywVVVx97DL",
  "key14": "3KP6LMdFohAWXM6C2hHBE3g1iaC2WkuK6pkvVxrVFTXvsv3AtnWDPfad6JsbPuoYZ8kNdniZ8hSu3Hbf3LFJUCD3",
  "key15": "2NgYxa2JVdSinFDZCdNpb6ZdWgBbysVhmypMz1fibYwvsrAmmHLAzRSnrDBTeebFTw9XQNCFuRD2GinAQq5wMgtW",
  "key16": "2vWR5FYUPQ3qPZH6ddG7BinPyPgCd3MEsjzrNHuyjqcYydVVXuz3eQxbecxME3pSZJvQrTLfAo92noGPvdtjoaZv",
  "key17": "2SQ2cx6XwKYzKGmrhYdpKzY1Eu2tCrKfz1kKrvhN9TceC7Gd9y6x91gYZEg5j1XXxDKcNPjEpFMMAsNRMXoLgPHg",
  "key18": "2ZA6XUmvkT3pdhA1QNYSPkjCbNiSVK6Vqp8Ef2vuBtiYaa8H4mvfXwr7Lf1ZxwQFr5f62xKViK1X1fTR9Apv5898",
  "key19": "fqdj2Uc3bKek23TMw5Gq8C9kabBQmnYEb4CqbWKSFajfwUGsvb8EfTmBBQSgSXtKBrwACWivcHXfNdTfwcTXYac",
  "key20": "4NfyuJNRjb8PveZ31i5oUXLCTgp6Jf3xxbW9fPPcQsU83SfBrSytUcQPQ1Zp7Brse6hno1hkV3MQ7mE7Zmh1GAZu",
  "key21": "41HUYEewQeCoixBiHKBKTkwpav1iJ9f9rPHGCgJwNfwUkMowDCbNkdSTWynNZuH6MuLqEq5iyKdPgPR5ydGNotw3",
  "key22": "2mM1kmcMka3NW3SNYsqWHzARuX4jYjR2WDjeH5LEnTM7Z28QmAk98LBrB3N7ryC33vwh6rQD8pFWyR4MKrEuC7Dg",
  "key23": "64PbT4Swoj1CRyo75BFoZk27WoRijSq9JB9obNKuYKC3FgRuYpkM29py4cMGoo7BKMHeMfpuHWwt1YW17h5tgFeS",
  "key24": "28XiQco1XW6CF4KK9RzgH9KGKSKqxZso5DQ6ugnE7cXktCnncHhQ1qQrg5xSJ8Jea6kC92WoptkeLX1d1vAVyhou",
  "key25": "2aPBfZLdiDR61vZG2kBJ9PZcRTGLsgKm9qgEUfUnb4DFP1hnkXsdCc3XyhzhFhui2ZEh77whAFiNnWubNPFxtevS",
  "key26": "3TtCmdJu3pfHyqbHa2rEGSKjVaxRYzNhX6NVv7rfJ3yMQ16NBRb7svJC4fGTEnPuZcpUPSqYnB8EG2a6sGojT376",
  "key27": "5zUSGYgzB8SaKkBPnU4roECvgczNWwHuvLYWBKcffNZd3kAXnchm5amaUskTnKYp2Rn4PSSm2LhVeqgWJ9JANmhP",
  "key28": "53K1JwKLTyZW2QXfzxKUWGA6k88rR8Dk88T81g46xwfpFeR6tX6T74nDKowq8cqPq9rnyCYdT4PbDFHpDkmHnC3x",
  "key29": "97RHZpzNxdmnM8PK9QXMdxJJZvmv1x1saxc3upXuQhkzY49HDY2jsLuTkNhXfEgQsCAwNrn9zPWRRNtpxgvxJBZ",
  "key30": "413JtgDR2FtkydPLVFuFGtBPouqJDCQQeT4hDMMrM7xoSWUL6ctD6niJup2LqD7185tvLCwcjJMGSSKkY67MTWen",
  "key31": "2vC9k4sgcZFz9UJV79YdNPazD92s4e7L7AggHdGu9FxEuTiM4LKJCqWjeFPsRXYf1R5u4KzzN9UwkHSw8PGV4MGE",
  "key32": "4d1HpTACH47xEkCSmXU44S8qB35N7ft7621PGqYsvWu5HKhLZfKGkapghhhDerZaRp4NkZXXSgLeAEVsSbStcovg",
  "key33": "641rREHB5ax13YnWeKNy2jGh8CEVE1meyt1sRh1RUUf9jctfpVXv6cAwX8ycH9kG7Vbnn64hLEuBNzy1XHqAj9HD"
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
