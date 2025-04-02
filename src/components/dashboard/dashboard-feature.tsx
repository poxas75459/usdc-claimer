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
    "5scdjWLvgpKpGHbPVY593CjaVwrNVMcGkY9WU6DuSi9wS1dw8xkiKQTUGpwwU6QQXqBPL4cy7QHbjEPDfahk5J9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fsX45EAnFA6YLyepV8fxeApXo3m56CBnBP1CF8ChN1QdzVNkxmd1GxRKrgPCgtuDVqrdJMRwvFxVfLj6Qr9RCdu",
  "key1": "Br9dnos4nUKGePMJQ6FgW5eLn5bMsG5XH7zKG4GPCRHj9mdJXr8Pry9hfZvM8efoHb8s1LQDrFwNYJVc1sH1fGS",
  "key2": "2FhPywi76Mox5wGAY2iprEGuQvCzEwW1XFaddE7hU7sFPXkPC9kgc9AM3SxDcPs7mHRBFhmvp8pnhZoVBjtU4kEW",
  "key3": "5nFQBFW57sWGNV1kACNmgkfWuajtKV1tbVJbzaT8pBuSFmMAQXhpsVyQAoLFT6f8yT2uCsCGvSCqfkeoxBRNS4K5",
  "key4": "4j7bKgyKRdNCCbZ7fc5v37ifVitMYx7mpdxUiq8cg6Q6Pucf4CCdvCnTE73PNCfutSVM94bRtabsMbN8HSQ1rLkC",
  "key5": "5AnYALAEBv93Qryj86EPcGxYyqMJ3T64Vf6XwDHYoXDprcGufvmCjHtDvRqx24ZBLofR1eTw6KYAnUgiEUkXxikN",
  "key6": "34V2smjfrSj45vjTr1DFHLWkjiqH2FsmWJkfaCQkDMekKHCvAqcsAPpJHddjVtUnfVvAXDF2tLTip7ZPpeCRZdt3",
  "key7": "3o1S8b8hCML7Rfr6V86mCie3hpD8ygXxLEM7bmi43do2VeXgJpr7KUsMTrEFJYDPLZ5F9QNMb9uuwebHS73jQh9B",
  "key8": "49Zh1h2kGp7YJxYWcDzh6Q5yNj8R6QXoN69kHgRFvG6rfeqypPGhoc78v58GSR9AUsiYNLoaez5GgvJpTbskEmbL",
  "key9": "36ZqeqQNgFBZD4X6LwG7gcRHWzyuQgZGr6PZCcGknNCeVxATpsVKqyzX7VuMQF19pj7Ln8EoRVWE3Vj9bPr49wVD",
  "key10": "4hu8RpwDDHWXAjac2ypxHDNx65Z6gYcsvY4axMbhp942qxdThc3kWiqDax1HA4MWwvyPkNhK8AX5FsDpgXLmoYms",
  "key11": "3uK9VYbNZoJjrdFR9QqeNf8J96RyEMLCjQdNL46R2LpTzJXiGeYzkuE5NJ5kJ3fZD5QWwE1Wf1dBkpA2bTkaRKLj",
  "key12": "3xfz5dqncUTjZx8nxMm511BfaVDFBwPyqtpiGNmyRgjtKKnrPwDuR93t2HrvVkgT4JNmZ2KvgmEdbgE5Gk7Wpj4n",
  "key13": "5f6VtEQz8LBJegeNEvZoNVxibGRXwP9Qbaojm66S6stMo4DYUfpQz9paMHePHRELuQ4y9rN4SgVX4onpbun9wPhg",
  "key14": "25xHyvtMnK8Uj9753tPMWYbhX3tKauib8xasv9gHieU2QLmBYemUcMjBGFhJu4MaW2KThJUSz7XpGjzF1iNkRED3",
  "key15": "4MWtANKLS6DhNuGAEkG7CkSdq4Gc5UtewxpXrX6QosvWb8uhDGdYs4GwL51TNxmVtrwXn7JFpiXHSGGm9qQCU32x",
  "key16": "5vKLAJugSRLetjUgMzUdenyqVqgMRhCadETVGN1eSGPJhhvhcqrLKzVH4CZLYcsFXjxytwasN6KRWwdxnTxkXcXK",
  "key17": "DfuYDw3v67et17Lg5jXgHhFeEZ2XPeR4qLvsweetefBZkMVQetg5YeW8MLW1cG2KnAprm5tNGfB3m9dJxBfMmXm",
  "key18": "oRGLXSzcbr4Uij4gsmGcYVYdaSqLkAwwHnnAUvSdSabAMcjg285EfyZm8FM78Gq5uW5nVDgjajn8PxtcguquRUa",
  "key19": "4RNGKp3PTjCQm71SRAWsZz4sepadknm5X6aFvJuuZebzS8uDfqxcGwMqAd9AmSzHbtx4nkAhhgRVUNfXoZoWKMMs",
  "key20": "4EY3NdjdRBphjQcX5uoCfVoHnpGAQ6bD3qwmgRDH3x1qJ5bERhbZQiVdVGwCnRvTdgoQrWfVYtPu6eLnfCrBWu32",
  "key21": "4YmgGJVDuf8JwKsZaqbYfqE5tz5BsFjrYCNzmbDPzBHSaq8fE8dbjvCCv21tzQrfBSoqcBioXPrxM1VHXaGe8Nq7",
  "key22": "5BjwP4JrtGp27MMqJtMxEPoSSxs2cJVno6Hk5XAcMjmiUDkAj8km11pVVrD2n4k9MKzkKgaFj3iZgYMAwXHPVgjF",
  "key23": "4Qi9FTSBVRu5PMHxNM3VFYVG2UXUFNTtNxQ21rjmmdauEx9wmuE8pASgoBxHWdBVnycQfxd51xk9xDt6EvpbHxth",
  "key24": "55eE7akw5yJtnK1C4xmMPEriDJYa9vbdEfHMUqK6WqQNpEj6CT2a1ediYBz2KRytFJQjNUJV9nBoPxFL6pCr14iy",
  "key25": "XFZNFDHCSxhaLYB7KG2VWkyuQHHQaz8NiXRAw6oPFFFXFFAs938jojsPL3TYyEUmigsfNXQYqegqWyddz83wvBo",
  "key26": "5jsUGEBLw2EKTdULookbwYffAnMLPcpbqXHuHcoDirMcEtksMMVW4XXqw8dhjRUn7KmXVDT7idyfTWSZWT283by7",
  "key27": "4LcWhPL8NtmiU1ibc5r4CVDy2i3qbGpVAp9Dtqhu499jMf7cxyBAKMxh8oGHaC3HbJTtM8m8pX9huaZaAKEjUcph",
  "key28": "3AYxCjufR1V5foN8mBKsRUFAMob5UWMnZcXPav6TTebBvNYQPaxjbgKezXD89GNhRH8AuYvAvaaiskSw8PdNbAee",
  "key29": "3teUyDpaivsTyphJwW3eDcZtu1jiXBfe4jWquMCEFt7GMdS6CQbEqFXRWerXUiuvKPdo73YQ71Baqm91Eoi24DdP"
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
