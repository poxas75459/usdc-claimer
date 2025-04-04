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
    "4GJMVX2WZbArRBMo2v66cJ9zCLTrSJMvy4oPDiFm2ZzJw4rjyemo7R9ZLS8FvsuHM9baVtociUcTcbut3BZvqebF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D4At82G9msi4dtqw5UfZo7JkwyH5BsJrBoHGz1r1To6R6u3DxrvhCgeygEGnYgqh8iVs33ovSXsBPeRsJ7nLAgm",
  "key1": "5NMKsmYVyzKMg8844BwJD2GoAwRRfSuqSVmKxgtdjEC8LChui7JkK6ncKDohuk2j7bgtNDt7P7R4XRbj3nPy2pzy",
  "key2": "hJrfpWpExvuA35wTq9TdSBQ7aYgp7N8cWWgiD2pfhognzy579WA6sny7yukGSVHCxKnEwrwbWokTCPKowjXqzm1",
  "key3": "3Dk3WwAoPqpnMQZpmDjCdTDcbu7LkR8gNcv395RKtKynxYP1KcGmBtqsyDpjo1CW85nMcSpvuto3QBdFZqQGmC4J",
  "key4": "3g2eY7pn9Pagj3YnJjcistW3P4wGb98QegcZCwVywk4h6uafpqH9umnS4bwYVXywuU87nVBbRWfNhXDrm5gLorsv",
  "key5": "3WUpy6x4UpNutLJhzApQ8HMTr54cuS5v57aDi1rqu3mcEkE89CbBVZLSHPmHih3v7GmLTJ6GLxVG9Wodbip1gLXC",
  "key6": "2RCGgkBHU7Y51BfMLTKyFWjoTiEX1gSegsphy9gf9JevoE6gEasoWPuyhJUUE6YxJwETaXwjoYdA5kX75vKjZi2j",
  "key7": "2rTYcM7CkBd7w9X2tCd6dKFNjtF9NDp8AVt4hkdWrryV85NqibVSAN2ZTqvFginrJB68BN3YTp2AFj68eStRjJxU",
  "key8": "D4MdvHHdiDAMxWjRAsMajp3bvNF8D22kwWRiuBQMhB8Gt48ZSiPDMCz2RPuazUGge6Gib2QqQLAwJUwYBBqDRiD",
  "key9": "28sZ8EKWLKSZQZJUSF4APoDHSrXf7VcSECkcwg5pnpHYYQTSB1MoQftjVAvTkPv1tar5wkQK59XkNmpJZJRh4363",
  "key10": "3ZmUCGdnFWn2C9n4awA3DQiQK4nRTE2jgyf7eCCB1DUJa4ZjuGMbUKeP7eFkM6juacc9dXGvrYMu9F1Y2UW5xFmX",
  "key11": "4xhfdxMeVnS6bWuBQrxwv3PojYV8SUzjSKXkij96QLd2an813CEPndtnL8J3FCW5Twki9NBKxJaNEa38Z51E7DQY",
  "key12": "4hdA9BjW7VrTzK8Spwa26aqsJCaARj4eCchXsmVTEzFdtJbENbFhZNyzKS8dzyJj3KQgaTLErRp7UXP5TbHVNNnr",
  "key13": "2C6Z4qwXM9y9vFys75dXbkfabeeaaPYpwK54xT4yFif5645LjeSwdpBtaoPAWdJxB2sdPJuvBL8WUPPwNVSPKKd5",
  "key14": "83NDKgrwpTmonCvqYi2tCq1ULpAFTXKDKdbvXdHjm9ojdowaxdaXvuvcZzyztAKwctynWFhun3u4HnuFGAvDzzj",
  "key15": "3Tv6gPUcrFsM8cqmiarVViwwJSQ1bTDbYrqas7dhfvsYyz3xtTznDrjkN4oqo7dkbBT7bZhGp8Fjt6Bt2F7HGrsr",
  "key16": "d3wVHMyH1m37G4ft4BV5MSuSjy9jgYH1WuEHUTpciN5kwLkdeVvU92Vmm3tFUrvmN9sdDjs8NWXtGFZDWZqFYT9",
  "key17": "5ghNUfu7U9A5rocMYx2swJCExhsYgGYsC4YzrBGLejYYDtd85148yQaD7mzBHrxzvqs14ZVMZBts4BWBEJBF9dM3",
  "key18": "2AiF8JjgaXh7x5LSoa2D9b29kSawR15yiTyhEmvaa2Ak3vBHjyR2gkzAH8jRjhjTTdnL5n3XXMdRXtepx9uUbCTA",
  "key19": "3Qwg7z3imUCJhj5Jac3VWE94DftXBNe32vYgDNU5SvDvsuVDNjGD4XtqKhcVeVL53y7cQuXZgq9QBZuxZdkvXMD2",
  "key20": "5U6RgoJRJ2d3e2v9JH6g4UjHdgXzCPN9sUmzwV5WnujrsuyNcCMDtGrR39tD3ofg88TGyz8fkMDX9v4DTmvrb2cJ",
  "key21": "4cJEuPg3irUnc3ZsHzsqdu6HxAygyNgePTbuK5yhkP5dCM5VEKCPnuYKvZm4ebPXWFwrhiBvMauRKgKZGwHGP6EE",
  "key22": "2ZzK521SWEzR6HtCqdptruaxWomekiGMtDJW8tVEbw3B8FQDruzfM6cNuVcBDgdpiADQveB7MeaxQeVxYfgsTgon",
  "key23": "3eFiUe8rXt9yFpX4wDZ1VqebDkVJvEe2zbu14x1J9GgQ3NmWwr6RVTQN7tMNx73XVMoGZ9Ga15eeYoJTSfP5m6Eb",
  "key24": "3XboexcfdmNNiattZ81zDNYxtmq2qpMJvCkYtZFiXArNYnHJR5JC2z85mrz2gMpKGqzhKPFfaJikuCqVrg4Fwenx",
  "key25": "4hdGkKsxmVfvvhEKLXuiwEJk1XcWmZUNpXwNWwNLFuMb4he5siQ5DQTz2iEwmVAmT5nfoMKvFtN5KfqxS64DrQeK",
  "key26": "4AVLdVEiEqCAxGYBKvkQY4GRnn16QcnDcaN1AP2Av1Keu2N6tTt5fRZkyoCADFnYQFbyvZzbjH69Q86S6zVZUeJb",
  "key27": "HjzGw1DzFG76r5i6i4k4smc3eQD5FWJWJeAjeTSr3F9RUMRgZ14KuaJj7P68r1bmYhv6nLYfzzdW9dyZ3NAVQbT",
  "key28": "5Nu4dmmby3Uxj8NYJ4WKPHVgyVNPz3RsXtQncfdYcuwcEFVbwuK1WZoXcvVzpZ33DtpyjHZxtqaetuNqEM7C7VnD",
  "key29": "53dPFTfooZLsKGZUwZNL2gBB7gddkL2k96uAWA7qG6mYBUwiao6q4mBLYRCzG6w8TvmgAvWxSEdp7dGNN29ZKHDe",
  "key30": "5Y1BkRWSjcsbmPXHAwT7PK6QQoqnKGV2PQzFqgPrgdtuF1bag2sxG3YvY6hrCc1xC1fUueBYdtB3w4tnNc7Qp9Mo",
  "key31": "4HKcxVn2UAnWrJbYUHYdSDMv2mCcACXaKFyJWtPh6xNxqcjxKaJMfvUXkTeKhZsa9XwzJ1v8VzGv11MSvLA362TL",
  "key32": "2N6onfSnb3vLGpCnV8jpZJThxqLoaxXZZirgeJnv9yh2fbZdMjA9S9VzyNLBVi9HTbAPDM16LFRcfjUXnucxAEN8",
  "key33": "4YpZvFdKKHF2gohxQgWHV2vA9TJsBfYfkf59zkph5yAvozbnySw13qbgaTbfvkEFGpPuLUrJ6URrHimyYxrKdcFB",
  "key34": "4D2AJfGX64sjGaWTRsqcoRwSZdoqHGPPx1DVnx1r8GwF86cHrJ6io8FmfbNayEUNA1ns3KFbKyFEeG3bXSctAJoZ",
  "key35": "AHZy6jNuTzAG94wsAZ5Y5QHiiSqaQd8crR5E7Catu4AVQkg9RCCoEYLRso1h52HqJPkX83GoTNGQnEjLULqauTK",
  "key36": "3TYsdgPLgLdaPdpJYzK3rwrKYRL1muNDsnErb3Gc6WQMsj6WZhRbRzXBn98K1sQNWqAAHqjZ8UTMYFzSxYF8Boae",
  "key37": "5m9NWQ4vUmiVBVKuSRppFpsT9RNJxS2J2PHhg7vmHzF2nA8zbbNbuYmF5FMwGzMDg6s9aSAdnToYSLuXSN2Q7JHj"
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
