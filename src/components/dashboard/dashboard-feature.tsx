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
    "F7CswLgxNsF1hr4EfeYfT39XfaAosMvgwLCGib3Yo7wWMRzQ6u9faznYRCCs31qYnUE7EEFzBXsnYT2XNCzG374"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVYXNjcDWbzYN936zZsBGopdLBHRAWAjU9tzydzgpSSaqEiaHMVVJhbDJUJ8mFokWKM8hyD93aaujGB1K5Sqkam",
  "key1": "2X1TP4U4JjrCcAh1SjgAtEd2R5i221oFf2Dw9jXdEAwereSkmViSyuYYHjJoo8MCAeoi1rsfLJvRKqbEZMDXHBMm",
  "key2": "3a1DmNNo7v6RRQTgpBxzHPcJAqjzGWhKgVA631rUaL88gy3hUukpzJiTQFaaNjDda4UxeZ5Km9P5LB6eUknfPUgG",
  "key3": "zkSDGkJZqfD9TR8KC1qjfifABki3i1hGz5DcC8eax1sMF2jU42D9YnkqYyeUykZ3H3uNjcFcd72cLGcRG3QumqU",
  "key4": "4hzs6MVdHXev8wBhzE2wZ49W8Ckc94msdGSxY3RcUVnQfS5SwDwZEDV7atkNMAyn8cWJZ2Z6QgpNPHpXwdVjmNwE",
  "key5": "3GUCMKbPuKtvKeo8k7Dkh9Z29P1Xks3BVxzXWQRZSFiSTCurt7Km63rA6hCoudH2KBNAPjGLYu4zZ3DVyXv6ThLR",
  "key6": "hPsyuV49mNTakVAobg3WHfEf7hzKp9xKnQbZoFvvgs5gA8sFsnoty2u7w6BmnvevhSv9ZSezgJDy2N15FKsmYUK",
  "key7": "KRjvevpZHiEvr3XZGz93qynnpG3UBTTDQz5kaTWBDGvTvjKix1PM6w3BuEcrMrp6E3dhy7U5j7cKvnTxiyXDrK1",
  "key8": "5mdN3oRvo3FF21AciRm1fytxpAMyo11rbmXQ9dQgU7CqQQJdMfN9HS95tfvTuo8QKxdK63p7HHCWHR4VfARUvajd",
  "key9": "4QoJsWtqPZPvVYjVEKH6qEfztSuz4scTtMdwUbFtfuvWW5Ru9bE7ubPJ25wEYFyQ7oopMoJyAjcpc9ARvbgiAtTy",
  "key10": "4uWYQcjNZ1CqzEuBFVDb5hyFNoorQAJ3Y9mBTuEDtMBgKd42diDewefwcAE6XPnenKf1PQz9csHW3cPkLC7eL9Ay",
  "key11": "55RybXJT6hWhhBd94rTh5q3jySYHkzNQfETHtp4zuuLYh9u8Ry8uUr4CZyDyhb1VkE6MKPhJe6qJ5Qd295C2fUW7",
  "key12": "3AJGeUrDL45Q7hDazKkfZ6jr17N3WcdPXpfXiLjZRSqhbPHHiZK5Sstr21A6kx1gZSGxHz1gxASL4JhtaR7FBWdD",
  "key13": "d35oggS4JQdCHgNvSXbhxka89yH8kyFjMJdNLpRmQWEFCpAk8fhzdiq8LjdNyw3H2yqEXX9o5vHhTdFK4JM8X9j",
  "key14": "3xwA4yZQZXzJ6VhYKL9AwkFjmy7wHgiYdbvAyN1tujK3NjE4MM9CSpFBCKorhqw4Ln4SiLx4TLYaw8ZgCLikGmPx",
  "key15": "ezcH9FPbZVWnUX6KZKMfh6GHEHqYeWKoXbyTba2xzDQaCPjpGYVYtQRvYFQgyQysuHnVsuHcizseduBmiH73qR2",
  "key16": "ix84mkqXtu1GaVXKVT3adwXwbGjuR8ff6kf5ehQP2MPHJccqtGnvfkvHtjKUBNGJxNok1RnBULkTcA7jwKRzrD7",
  "key17": "33ToCP1iiDhCYvRX4uRuK9RorVo2wSsbtZMaXEVHxzDxWJDC9xgygJ81VEeQQb3JPiaGbvXmiKaV8pwFHUC8evgj",
  "key18": "3bZXznLpgYkStNUJqghTVXtdmZtkUFtngrYhDZjm3SJifQWheuewB9LaeKCiTut2QWrMR2YffdyTA2Vzt7x4QLZE",
  "key19": "2uV9sWaW3B8ctTXbrKPJzq3d6gbFe32VGNimv1neLT1E5sCBifGHXpREdNDQ5HgY7aLhXCjygMaLCMmF3msMe6HJ",
  "key20": "4jcqDbNvcdDf39nLSVjtvEUDSihQqcjiQxRZY14MSc3QRBKTXdb3HuWWJLxRnSAD1qkkAYQgyV2oNEtnPwWYZ2P7",
  "key21": "2NbmRE2dhMALGV1q4xnT3Pfwu8TnU9qaH5ofDYHXPG8wMxtDMAxhVCVYMkFxYjh6xmyrggs4HUEreWEUJEFwqv4S",
  "key22": "2UtW8CqfJzfbHhFyXCkajWwUPMEem6YZJv21vu1oAAX9teJh72USUeivamCDgrCaKbzMtAWrQMRHmYtrQdimomvj",
  "key23": "4SkVX6n7Gypi24WmgG2tX6bn7mnGsgWRokE2eELhFGdKM4t5dtPdXV2CbooG8eTpGuHwQquP8tuEoYvY6xn8aQqc",
  "key24": "2vR5HeA3neymuQLGc3FrG8ygS56d9bBxZCG3iND8gnfa3od7nG6SKX9yNiWFcwW1X6FsB5ucriVtRTqsypgprzpw",
  "key25": "5M4G4Q1btJ6qbDPJRg1RNyJJ7PG7UBXi8uG8qLnxB7JooiFc6mds6SA6hRVm4N55gxpsM1TLFXcRxogLNZ6y5hEK",
  "key26": "3zLKrS9UuXL4apU2GViZDpfu34KCgKUrYDsES7n5uhdVQvGbbjKE7Ap1i5CQ9ZLsEhh87faKy6X679BkEaoDyyvU",
  "key27": "3QjCvy9rTXWNHoL6Va2B73Bi2BmoBH3xcZxz3HJv8sZ3vRT6G67uhemBgX2zWtFog6VMaojKqDroNefaPL41rkL",
  "key28": "67cAQrKDdjdFM5GNGNEh18Bvg5Y6ERm8fTTNV8i6w2iPstzGQsjmUTVedCsBVfBGZu8VHhaZ7KFQCR3Ds12fJL8D"
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
