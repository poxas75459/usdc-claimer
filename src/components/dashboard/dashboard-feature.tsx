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
    "4xRocxqWX9cTCxvQMyJiRpor15xhZs7QYQJW4TokCZdpnTmHRXfxhaAV6tznwNmh5vsjZ19TTjJTtp5h6avoi5FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PxSEKEZSit61AYAjpSLapaKdUYtazbwTenEpyyr6cN4RFYVTA1W5dA8K6MHVHxwjgpjLdaozxmByscAsUzM9zD6",
  "key1": "5S35wFNkGRC41yb3FziUqToo7RqWr8mfV9D9NFLMhWXjtQG7vqZSZ2cLobp52W7MhPNp2vyNKyeVeaSQKsFueX8o",
  "key2": "4VYdvzjTKXfi6V4WF9yGc81D2nPBwwo1CbgQ5SmRnMtg1M1JRG6LpeBbLpv2diVMio6jfbD16wt8SoGTtspAEX9o",
  "key3": "3DLCriGMUAMMvpX9ub16BJBWn2cqUfNw3itonxLKbNeZwwagwALzhHrbrEE4eNhPugGkd9umMcoaahbHiUuq84zr",
  "key4": "4SRCZCWJx1SHNchkDxZnJ2jBzY3c6BRqubeatuE1GWeDwZ16H1e7C68EV89iCkb1uzuxJpo2RT6G9J2CCyZvfzed",
  "key5": "3BsrgCqmCCwkYwjYw38zSVeu2j82gse4oAbSs9hDfTdAhE6MwcxpS8ZzuZXKwNAAJBgqE51nTLJSEPudjJmEGmZJ",
  "key6": "5UEhczZzhJfw9u69dbr6ZKj7LcEDcvGi2mcuGjTMbGrr1NiqVZSMSgLWZRivvV2ooG6h9hs8kydJWF7rfvBWt6Tf",
  "key7": "4uWzi9obBojuiWpxKYdkZZD9RTpf1A6Cy6gb4iBawNchMhW5Nx7zmDe6SbWhDrdyU3HWq6R51nDbyEDdtocHUjeV",
  "key8": "4zEwksNixADPkramCToaEhk6MJwsK21gC1kmSmWTbpBdsCMST5XsavB7rZYzgvyLjJsViENm6LT5tpcrJnQhL2Xj",
  "key9": "EPEvJaQyxAjZZ9daqVy1arvap25V6xQp9dDSaBbHRQGpVytmctyZswbu7gtTdwgt1enUJXLAmGWiP1us8kjFfrz",
  "key10": "31Hr4qLokwEWqggoM1VoBc3rDsp7xrgns9GtoKEE7g88AnsQzAycEjMz3xvZTKNnzFjAvbQMDD3ybKwm24xK98mL",
  "key11": "aXKUYmFCDRzugWbLJGt2HJMjpML45cCTwyzjx1SKGJ3qahsAcgU1KNZ38dHSJfV8tTn1f7rkvvM3YbbXg8DmcPP",
  "key12": "5F7RcksE5Hwj5nnuDTsXTH2AGPPGuC9uL5Wy2GikZsB2Mkqpbn6t8qKYvqYcHoAcnKgE69S7jFLY7TE4t3Zgv4D",
  "key13": "5d2uswVUSkvzeTiB9bFpUfZUVPWdAvuuq7jnb4oLdbsNA9cX5ja37Ndu5hTS2f3Mwv5jvvVLHkM4higtdEEmc385",
  "key14": "WggnAqHbj16yutvyWQ2zM6Pc8yaWioipxVedqfxjSWqcPZ8UmTKspYZrH56RyK22JKiaCXwQxNYGnYzypMUcwhE",
  "key15": "59RuAuaGQHVDUHpsb1WfTzKwnfvaruApxFmx7LpJjpRBugPiHort18UvRG4aX1H2M85prgxT2HHJewMUEHQouyDP",
  "key16": "3AgbEZTz9FWChrYNxztFdVZ1Uy4Huqr3CwFsBCZP6wzDdcoB4EggsRTnqRqPb5zfrLPptk9N9fFUvsrJZCCy3dNg",
  "key17": "5ZeoBd86S2G8ZsDQmVukEBunmTW1qv84PY6rttw3t6BzGpdszvcgnuyguK9bEbzsGj3d6TwEYYfLeRH6W9oJ9N8a",
  "key18": "3aoEmVczKTDbFKGwGpzxPzUpHmowGEurQ84tKZj8Fs8doWw4AW4BGBzXT29nSSMii62dBhHEXuGM4nC2mn4mWYAL",
  "key19": "4jgiuyt9kFjuAxEsykPhRdVaAPdn6uAXYkyy4hZ3SBA7BjqnKs3TLn3h2kxFN3RaztYLVN9R3Ap6rQi7Sqv6cSeF",
  "key20": "2M786fYJo2Bdhu3ZPWwRsRQeitCkEtUUTWfRrLtXWp73v3ZcNuinZf3QtoGyNiuFgAXceemupKuyqbpcLe9t95fa",
  "key21": "62M6MKoeEQuSfBuJDCZeSF2SrZv7XpE4DGtuTrpLseb6pXC4qetCptmtQSGuuwhUxj36duy8gZfikPva89MJj3VP",
  "key22": "34f6QaeEwkhH4FPwdmvz3VJogGL9cysKdM1JGD8vscNicWQgAhRLXk9yDMG1tjDs55xZhcKZeKUK7aHJTWqr5Dgr",
  "key23": "2fTHNAtJV23JwTpmTjhzNsdqhRaKPAStG6nh5S5eUAkhrioPPNKCw5eiNyqjAcD6piHQm7CUVBVBfrAqATNqhKBe",
  "key24": "8otHiV2HGdEzQd5CnGvEXF6HeVCAsXVnAaLtDKAFKFP6mZm45krZ7eCEieAF6PUq12pSVr6CznxMnzjA91DLuoL",
  "key25": "2QvQTXcWtN6YQJnJpCFamb4n4QwiwjbEWgHkPeVfKtTAWG2fsU5Yuo2zawh3kJ4s9RaV1s3JvHyKsk2v6Rgs7GD3",
  "key26": "4uj5UfizmNwTUdQH1utdFwZdND2DfH2k4SJiyogiGmnWej8i2Wm3FrPQYwn7AEYZvxh79T1f9B2qM8yr78B1nEsg",
  "key27": "2VAqxF9cVPLjNqByfQhXvKTGS6V8Tf7EiVXsvn5hrAmUVWZd3rTxWzBDwR79M8UoSoGnZZfqsqSxTfDW3fxaiPBA",
  "key28": "5YHVL4PaPxYEkCRtPGbjkCkk7F2L58DxD16qR8Y7FToLwNdK8yqMnBCfBgcdhcDJdAfLJT7SPBAayDEdABzxJ5kU",
  "key29": "3jHrmNcQvquRpVCjS3oDHa13b7TDJwRQ9ZgXhsMwV4aZTMWV2puyczqTSQvdTx6g5Yfe6kJKGk2o1UQDfd9mjHjd",
  "key30": "49MMHMawWwSf9nEXbN5KUvRgbDuzsX8dBTL9AKcQJcZ8fti1AbBpreqeU6bvHjaVZahuFbQVkSsZXzKRMRYkTYAE",
  "key31": "4VLXtrBm7X3yyjsC3HmURZ3oVrsWBTAz6AMojwc9CKFjmW9r7sKiBHF9MPekpRJEFJ8r7d9m2LGjEaLwVgkLk1ne",
  "key32": "7d6HhoEpUpKvBgrXN3ocmiGqrWoq1gNZkXsDWqBRbkAjiX3jp3x2XfgpFXVtjdffqQcJ8vzNVbhLhwuMotunxin",
  "key33": "3abrJcb1i1oVkTLpcbPJYx9KBz4ev5Z5Xt1iua9sPvdaX7nATNiNkGjUkPDN1BPn3J2sFzukc7didF4obSNS5Q9n",
  "key34": "RrqoXCHx8cEhMubPGSVf98n8T1GgvuJ6AMr2zk3xchzEGZyRrsG3tn9usDLXbpHhyiuHQsi1EoaPLbYAGUSrNzS",
  "key35": "2w1wh3wcYWQCrEW3R77FzPzM7NdJejTy15fLWn2GMLPFwMztW8mh5eDm94LfxgJu3dhZhNmY4ZCtDPPot9dWkFP9",
  "key36": "4VUGD6tmCVZv5X3MynqqiWVEZvSnuEXtzfDaZy7vpmtGqj7kg2kuqYXN95KDTPR8zXETS8EvyKsDACNVPaWcTbN",
  "key37": "qEPRVquLoFtZpZmyvN2XpYKz8AjnTi3NB8SMhmkcsEvt5qpBySMwFeHjskUNYbLUKbqB87bP7XE2X1ByVE497vK",
  "key38": "3Y4x8kcucEgZC1CeToVetBtkqX9115FgQcgyMJinp59FN9bN2WSq31fnkC2tXZsGeHnnv7A2oakXfmqQgFB4LmKW",
  "key39": "2vGcrKJzFi6FzGNWzmyFfqFgg6yJqkoCeLuj4nLvkvZkK4qeNLKiV5MmbuvxtHZCVFqBssUKKtpRDrWhTtTaGVo6",
  "key40": "5YmeP1AcV6uqo5CFgvbz8EBjF2RE6MQgVoX2jAMj1BfAzhLV3wPWvAyHL9uKWDxasSdT24grYraqKo16USZCi4qt",
  "key41": "5EiLqBP3fmeHTnQqJsZrK1EUajhq1PYsiK62s2y7pP43dtx3cXghc9xzH2EaZc4xVCzYrw8xAKDMMDCZ1zk4U2tn",
  "key42": "2BmrZADxpCmjn2DTZzN6tpm8s93EBEFCUEs9a58xwnMtQmz4r5y8psWNY6iTcfEptmUK1mHzbPL7Phn2PP7xr49J",
  "key43": "471bzu7eTZA8zxZTVJxsHeFT6SCPjjd1ER9c5RhzuQZ1V4jY6W2Nz8T6iVXqvMq1BqXJU6c9ma4A34Zj6KL4BVVi"
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
