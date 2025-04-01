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
    "5r4iYwkz2jQjXoQemCfRH9xERcNwQzE3tQpt7QoVUdDC93ct2L1bhdwfMBHZ8J92BbPoTrNc7Ps6YyZRcAhVYgae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26bivgnAHh3RLVd3E4b6YP16wqQro6BcHv7DvUFYNzo2MjHMw2Xyw7G5w2HZSxcwoLCD78nbRe5ScnDud48n5Buk",
  "key1": "5T1sdQrFkFTpMxbUcr3pBQFrpRfzZZA7As2jLiKjLJKrHKSqMpCx3CbbJxJpWc9ggiW9VXrQ92hbTA3ULyz8AaP7",
  "key2": "kWfWzMJXDPCy4nHAv1xpCMh6UhNmJM2zLkRPooghZqZV87HAzjKKqWjLyMJ8aWa4ZZw5g6zoNanPwgccee1QfmD",
  "key3": "3kPkqBhFDVfNzU3nBb5zpj4kgumotVncfHYm3Nk2rtqRDfEAb45pkxD5d2nZxUjcUK3tYNEyEU6AecXPVi33r6kd",
  "key4": "5UoiDHyX8SeYAywnvnAUB4WdvkX42WWr7nMWji4zsZWQ1gkaqjStcMjGTYk1PHGYQG3DStBHrwLniWYXDMtrqo2Y",
  "key5": "4mPoRwLE4iqnnQmJDTMGo6NW9b5K1ZNfNn8x3hy2uP5tAwDDfD47x7poeDoaCucK69bwZ6JmchxYtbL7ZCQUWnGm",
  "key6": "2BX1VVX2PLE2piVAG9yBB7TjAYuDpkLLSV9ER4zzuGZnaHibqWLohXPWHJPiY7tbT7zbCxbFNG8Hvx9VC96SKSK8",
  "key7": "3bF1Hyrf41TDyuR2ByTC1Paxya8hjn4THK1gv6F8FZvibQK4hZsyqNY3zBdAWT6TUNdmtX7va8RF7XRwsrVmYGgF",
  "key8": "5D1uHTJuBKZSvK9T2X5MKfYXVPzsxMfEM3wvDS88HmKXbGdQ6ST99fAftCfE3Eb5Q4N1R1DdpJELMNFB6uPfRezd",
  "key9": "64ASwgGzy5QDhst8Xmv4kTV96JBV495VnH2zGatorLGLckCq424oHh38r4GCBkFhbcDLGrCp6dCKgDvQxw3b3VdS",
  "key10": "25sMUQmiM7geQHHWL82Sqs8SmK5ujii2WrQdCTYc6T5riqzipEg6jbJ28fuZntXmzXcQucM3kp24ZVxdLfjDjhEZ",
  "key11": "4nRbfCXoXsR1ZkAiaEapPxbjufoTe2UVKYJ6tURE3toiKZ51ecFRgTo64Ej8grT95vbWFVRN4wxXaK67p27ycMSj",
  "key12": "sw5FoZTvFZLRxCMeDLwx8asaBx5JAoUn7ti7VhMuSfudKQK5B5AASpDBYjLFtbL9A6viiKF2Ggi4v81kW6gWqcf",
  "key13": "4SabPPygyRdFA2YD5XXWDT2sfRvuGnsc7zaHtxRUYKFwarVsPf2LAdTcm4Dqfo43W3cVJeVy3fq36FjoXnrRv3Nz",
  "key14": "xsfBGf94m4ztbma9TgjU4EuiXU5P8p9SbjtLKKgDwBQgg36yAnun7XwZD4GPcbxGgyL38NE7hqPpD5hkid29XBx",
  "key15": "22rY3jpEiPaua6GkZfXm6vRaG5ZHbjnqtr1VPew4SyCJmech5o3ed6ankQv3jtAxfRMbjGJkTzXZuj4A6kpsz8A7",
  "key16": "4RWNLnmjLb1s4fSiXsy3TW9xbQJLokV3HzpR85hyuqGv7GmQYHCESKTrSLpgWvkTncQr6sz6qaS1TCNc1egEexJ9",
  "key17": "5wfTWmH7NNaPx5AZvEfAC7eRj2znmsc3GPSvmdtzze4sjSCuxKuuycHKvXB7YWabgrKqTFHBoorHtFBXD98q4Hu3",
  "key18": "5jwrFRiEVrtpC56gkopxFQb87ne1AQxi2mALH1K9xsvJwW7F6W33bhiBQVKgg6RXmwrUbSASVW6uDVBLnah41wi2",
  "key19": "55NxPfzM4SSk12Jj6CgoidgTnXSctfoLbb3isgQ2GiDe4RvNoDa9FZ9Jwvntc1WNkqqdyRfhG25jqXYvZfAyDiAu",
  "key20": "HXUsimEyxxLVyhqBjfYy7vhucEWUus6eMaB8y3LsS8YxVEvahw7Xao7CfTnzkvoPPRGTaAKPaa49Fgj5rVHtj73",
  "key21": "45WkT1dtnioSZG5GtmhGxFGFkt6G6rxuN5Yprs4WEBwCzF6SCWG6BKLcena6ewqFXVPHVary2viuJ9RLmDXymYcX",
  "key22": "EqbhBP6gdqwZZLmkXJrKKdjUuDoV2etP8heri4YhxF5oR6mba48Go6EaZfSUG2MeuZ5vy8fwxUAQQZByZ2MSBoj",
  "key23": "3tYYCL2jvNdBjT9zC8PXtPi2DpUCD1sVwX5EdTv5JoUdodKEbxs134xMyeJRZstZhfpZjB5iQKRPfidcv75zLn4f",
  "key24": "62LGMke48NtocZ8WVahyNiPhvVrGjvfvB2zrGzckZNhFiEScw4V7hfzXG96b4WZvbxgUCdt8wJuRR3pNAwPxjsZG",
  "key25": "3nPnzm5PqrtcYtqkgYZMg7mVmp5f9qnCW3r5mt3cwFCtEe3MzHoMMtUurikDKcvUXpJxrPRiGUbCZ8HvpLFPTHDe",
  "key26": "48dG3tJGCfwmucbV23Kamayiom1wwCpCoscr643xW1mAM62zb5yMmP6PSj5vxxCkqYjua8DWZ221SVEnAG8gbZ6w",
  "key27": "4QorxDzxUpshKoe2FbzHAQ4MBdefzM8WMPE2jj2ENvU2CtJdP9VSAHnJx1dMCNiM6zKf6L6epE9HKtDAqidVbh3d",
  "key28": "3A5NfgS31E4ryM67c4K5WVzSEALDYunxcYcit5xE7diM2ieMoNQxmgipJyTXdsahS1yrQ1fxEUdPiJWYnN4gVnvy",
  "key29": "5Kmu6uee8jggKMcZWszLynwcn92YWbnRzBZtDCRtsRPnLQL3ea5i53MDKrUDmA2vgboiXi2tJGeqsDNPaDXaGvG",
  "key30": "5bZFhX9VHZevRS5wCUzD3mrSWYMr4swtSyAdDwURBj1AT5uMsPJoQV1SqvLLbFgcjsPKqsyugtygu83F2Qt8vbjx",
  "key31": "2W1ssAc4MnrLvnpwqgNp6z9ftF7HECzUj9GnA7N4h5zqSeqZsDgSqkwXEPgP2agLsxmu6EYwzTPBcuhi43YVZbJj",
  "key32": "52oexNyijfdvtjmqxGJSGWvtZLCNzs7LsxWwe97Xk2AKHprt68cxaFQunTAePZk7ayDV1BeMSo7qdzdxSfeUtanY",
  "key33": "33VUsqzWxmGBYfiwa2oVEc7Vg2TUU8GfQQ36T5vkSRzg97HsoyqoAFEo3h9MTKWUvNnRdS5BQSgv8tmQdQWUERqm"
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
