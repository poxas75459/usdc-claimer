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
    "42ojjZLmqzTfX9bPEbS282EMV7scJLEWyNAiGPqQuQb4yXPfXPVoU6kroBhacP39dsMFySZoakzVYmmq4RcRws2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwdSgFcyNy5N1qjrLAFV8s8JWpE2BaJX1TZxzJ872CG7zHgByVYYrRzozG7nmX9ZHd7z54tz2wQzeoLEZaTAhmV",
  "key1": "41whhiXf32kpQzeeNa3M38yUWgSzaAFrqPTN6VGNgGLXkAPNJJgE1eNGyoMSVh3cLvMsP6sz3582JgndojptxKvL",
  "key2": "3tBQZ86WrmGdimifExKkXpoNXnEAQq2dQvg8pf6n6wNKPBXkuDDDxUbec4bN1AbLBBWgRYEN39asQJGs7WqZfmiB",
  "key3": "r1PLAuQ3LbcCm93TRA5o8QUSgGWJLnMjtjbmXU6JBFG5gJHMuGFjyqReqeNkfF2vLNFVQuMHbimjK6cykGhgkHN",
  "key4": "2n7QejHybgRTnya6Nzt5Wk878LpM2DUzCaxF6oVfhJZwSHApaMkDp7X9x314sBjG3YedTVvaHK5zD4aXuHjL5qb2",
  "key5": "2AjCG2kfQKwQqhrHw1emhW22z3NaK1UckgvxQ3PzdfqZAshrt1187TSwm76otRCnmf288rbvwL35d5WF4dqsFyB8",
  "key6": "2UTMYWcFRpaZ7dgTKJhBpojTmzVViSGv8cn9SRXR98un6B1boUqDZ93QcBpPbavBZzxGMqhbRPypwSaLLJSsa45t",
  "key7": "4N7SW7heD7Sh9BkVQc9LxTyVNY6tsjEjBo8r7pedg26GrQ9AM8cdaqNdy8cgWEezTGeYGwkunWE3qeKoUjyhPG8R",
  "key8": "5nCquukgCN2CBCUwjsTPaU4Lt91YhN8hQ2guTWeP7YHZfQPxTDFBJ6cWRg5UKy5C49fGbDbncq6BkvuGNVMZs7GN",
  "key9": "3KJPhUAgWNjTMjsNuHBg5JfAV1VoZC1fPG2mGrZ66yVEYMZdWrCW67NoczubrUAyxvWSPhZaCMpHMaiac2Q7mbcf",
  "key10": "vH5TzfeHjgwdYgCMx9z1npLe73QBsNsFsLrf2WQYdQQSCSsAWJ54jUWdMcuRn43EwkJmrC65oZvcMqZ5SASe2di",
  "key11": "4DMmK62aykVdHqqD3fo4dWTCWis9GujZ4HLv2kEqXLzsD3jce22P9HhigLWRFJHytZyyW4aB8F2JwKG8hDWypEcg",
  "key12": "rB2zqwxgm4Vz6HbBWzbhrJuZ4SbSU21P55a64sQNNwg24vnEVEgzsp4qghziELKCwWwHrYvS9DwDUg8MSxXtm55",
  "key13": "3oEpC3aHspJsQzxTvMTgAfdJrZveU1DDbq5kQ4GdM38DDYCYgm3JoCEJjivvv4eqgkuEo4qbEhTNw1XpREHVG7sk",
  "key14": "2SZDy8Pk9SUWgydxoWDhdjBAiNZfam5tkkMLrj1Si8mYgixYk2mpNwv54GXLbVw2NEDGyQe6VVNwjnM5skQDdQee",
  "key15": "4cWsLsFStk7Zxme4GAgAypiSzy26v2GB3E6hRxJjJWfJN3enWpn3z5jeBCJ91f1ZPF6PKmwNXsAoU5og8BGJ9ijU",
  "key16": "2n3MG2HPSByC5XRu4UV1gaXeiddQ4YRxfxDkDXDCLDwgskmbPc6u9u6uo6Cf3DJw9HTnRZcjcXu718KZEFNV5xxF",
  "key17": "9XGzyuehkVUkiRYpUd37tYmjvFRo2ikGf6J33etzmYt788tkqPA4T82wQ2KJjk6bPCS4VaZ7W6ZNTe2gKAtu1Uk",
  "key18": "2yx8oo3VPsNSgW2KNSM6kwUcYSD7UMHsdAK1A6uWH9bxXT9AF8pWgrdnkRYB8pGUxpdwdrAHXnwy1TDeBqAKNwQs",
  "key19": "3wc1E3yZzLTsroaozvGYPi4SX1DZG4sFpoATPxJ73UDebzcNWqcmyFaYTPTGBHSTN67eod1LbXuTWcbKQS5kEm3V",
  "key20": "23Pn18g8JD6riLsQXdHF9qtjCiJxAiyFVMyjQRK5RQo45CqProvT3NVqdjomjgy6o63Jw6Qmy9cvzMSJ565hRgRk",
  "key21": "34pfZFRGw5SzTkWKDewo9cuUPUDFdJuaqXns4Pbun8n76i5DMn7sYdVtJvjajpLwKxh8iU1tECF5ktxpXx1BvCYc",
  "key22": "2kz8Pwhxh9weh8YoED6oztTjAvKDg6cgWQCxcQih7eFBZXUgEiCK4Mv6LQHM3fmGZy7vETSDFVuefh6VbjvLd792",
  "key23": "sTet66hoL71z7qw5FirjetTd1BKy2XmdHkoWunQN2gY5aLjQgWk8fbLf2KnbGSsVnviujbHbH5b8Yu34m5rU31T",
  "key24": "2wW7bmsnkqSxYSCMV5sC5hyVHZ9p3BMeTQPzPkpCw5ZeEdCJsUapcZHhFuJwKDNSnfNEgviSB9DPowmBb6RA17ee",
  "key25": "4Qqs7synosyiAjZeMAo34FvrPcX6JnF9TLf6LG7QJ3mAXcnBDEwwSLW5faegY49SJFLqBjJBZQxBZcuFSc8LMHtV",
  "key26": "3NYQeXZbnkQJL8BkvK7ufU7cvbB6NmPtbHYLLpMWN8zFHzfvDegzDc2AsZY7wTfAxixWZSJzcDA1KoU1RQFE5HSm",
  "key27": "2upvqfjJr13AD368dgLp8rxMyRmKjAsitnoLDLYPXYZDV4w9ppozMYwWnqWw1dmgoPqVTuHZkSnvp7qsGp9aHroJ",
  "key28": "3pyet7wGDJm7Wvgdhyow5n8LEz8czzZUvgoAtYxihwWdFFkiQhwPNAc1PRGPL7Q9tvqTjWGRpk5YEybtiPLLb1R7",
  "key29": "38EJiHHfPm9PbB89hJAvffGPKvotyrihjMNgeS5JtNv6ntV4d1QjszWZ7i6qtxeSbk9q23XUJQtEFhDLhuzWZYBS",
  "key30": "2tSXDZb7vYbt9tZi6MAF3TosovYUJBZwRykRebjQyub515B1a3otAD5zA8FNYob4q8enfLrrx7wjJcgANQWt4QMp",
  "key31": "pQsUqiHB4LHBqqTVFM6i64mwBBTzBhJVgk5e4LmAcs3iixQcr4WUJ54mB9dpDxN6isTggreuVZVFAzXDugsynCN",
  "key32": "3g6nd6wftdnMWhgQtPzERjvLjZ4Aye4JcRnG7RnNSF6CwprNWkDz9StpwQx9RWreuu6ryB988fzAdi4W7QvvraU1",
  "key33": "2STotQheUQNMfwxpKoyeNcBxcC1osfnV5FAVQTWsJsEMoTJg22ENxRUEVQgo23zxrQN4vCcoGRYeSn238vGhtfbH",
  "key34": "4i9er5tLr7bqm1hGtKfof1GZoP4o26bkcWWULidKYXEptaJNqNTdCCYqxSTFuyjfRChRBd8iGfjsv9zE5t6g2G9P",
  "key35": "4XXBXr1Q2rMvkZWC2ac9Bv65WYqQjnEthNribFXEQsfmbEQAvkYGyhjNHX63BRowBLDz45LW9h1RToJscfR9LyAG",
  "key36": "3izxk7xsg4xFbM55MUw5sV1VdHgNR15xohkrFKRyhH87C8GaH8TLmSwnfBvLg81QtC8BPnd3h9GHCM9Ssi13qJ2c",
  "key37": "FyCtBbA6AAfmXB69KyWjmmWonZYoh21HpSxY12TTt8NZZNKLpDytCcNmxjDH8WY74hhVj5X82pyvAcnaJyoE98o",
  "key38": "3C2HULtBtWWrZskc3B3nEhC19E9uW3EHpi6vMkeAyaWN41J3gkRsioKg2HZKYii6BhMQPkLyKt3K8JV8xiLAPwXX",
  "key39": "2ZGS5hzzXvEdnDgZ1Q9RRe2XXZL4UCscQC7hWtHpEDM7XLYjxznWekdZeWqdphWdNgF1pcsg4oBDJL6t6tuB1RGt",
  "key40": "iPrS1YWyiCXkxsiMw2UEWJStKLQSQqBLHmvB8dE1KStmQxnnWRx3EA7huvXbqRMfPgy1aXW1hGxHkWzkiWmcQ2q",
  "key41": "WFywnDT4gYmYMLxGvdWACZTat3QPeYPJhqLGaZB4xRMGsd31V2osMpNTLdNZTbEZK6tAaymAy6WM8gsdDf7BDaG",
  "key42": "3EVUZwx9TJPfPptHhbiEz4i871PXy9mN5zFV3BtBemdAwPzhM1miG1nmzEFU3NtcxkfeefKyavyRH3Z6FVdGmFpD"
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
