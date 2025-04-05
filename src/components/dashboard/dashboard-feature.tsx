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
    "4P8GD4e5puywa7owbLY4xD5UiYr4aUs8YK37TmyDNMQigMoh61Hre2GJGdicB1sM9D824gGfTixQtbjEu6eDUoZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnGt3y3DUMxkSU7e6guwWjxbEoP6Y8WUPXh2wmRFj7Xs1MmGrhE9LAajnepXKTUomw9NvcinHN5qHUrYTC2jcND",
  "key1": "3ADxhgrTP6ioW3k5dX694UfWrMyKeUt7cE4oCzYbREdysP7Kr8hsMVfdBtVytYDXM3jTUWk5m5G7F9CXRLJWa8Cv",
  "key2": "2FVMCftb2crD4kWAtsUKYgTSs9idSU84axSoUH5SB9jsW1FP62K2iELsYkiGg52SeMVyy62EffZHpyBvSycQ7YiL",
  "key3": "4JrCMCVrdMLDL5QnLPqFHEjQN3sveQGxiaziYGVFBGBCGdqQ9KvrXJbAeR6SqVehEBdHdjT4353U2gDZGZzYeMK8",
  "key4": "3SPm8zws57nGPSgZLreWSBX5rgMQjqeHNTZrPgbFqorTDZ5Y6tYmPaS4UiVnAHpvVafvF5SThxg123KdNN4RS9Dp",
  "key5": "2k6cEPGf32kWwzTheEc1HKGYFa1XtzUEGo7VzNYoeFiJBMtXaWnnywCdE823FjFmJ27WVupb2de5BgjQDh8dDDiW",
  "key6": "UsXWt5gFBNZprxZvXQeecY6Yfg5Jy65WS7dSvNKHYkU7mJJJB3nQLKPJQQGA8gSSdyZfFU9Ln3SjcCotdsdMJ2i",
  "key7": "FBKaFYEHnYhSPNPup6JdvQL7yLhiz4mm368rKE6FvwePxmj8ehs65MLSa8c57HptU45VvrAHgcYCgt99PGRGUKM",
  "key8": "2MgyoNq9UVMH1fxumf3YJ44NQQZmvKB1QJcJRvNBRJxcnYdJMWT7sGoMjYCxbYXszNGYqu9TtbJun8L99dQzgayC",
  "key9": "3kX6p4RwjUcVcb3shQeo2YtB554DCHExTywtvTKUpHtN5jeqTgwuvvxViBEPepMuRgfKWiBAoAaDscAvK1ur5Ejn",
  "key10": "3WcYBzeAE1CC5XsbAYxzvEqT6YNaDdeVDHRrGhb2EurbYcjqtvSywrpEumcxnZA3hWDQcx7P2FzefvbRVcRxGBQt",
  "key11": "kUUhkvxBtZ4mm5yieBLwLUzpMvb8ePrst6RnRQMDUbsEPhTm97euqLJwBaeazAJUA7iVghPVEsDX21MdApGEP7N",
  "key12": "JBDetzjCRyqeDRdS4z2p5PjdBFcL7TukqrbHrDKWLZkMndu6JCvNSN5XLjuPeMbQnJq3MVyHxb4RAKWM4xGZ6oP",
  "key13": "3onaPX3ZPyriS1U79JoVakMgxwUUihSe9yxmrLnhaUoKoVDFKqtuPnDiHSoJobczLqgrEYwVY16v1jZewypK9RZX",
  "key14": "3TH5pDNfvWKbY3i8E3EsJYHFQywHoY8CaA8TBCvZCMg7h4Z3mcNw1RueLsbL3M2bp83DnsWAUjeVdsK72Y44Lkvj",
  "key15": "nko7j4Gf5Qz67ZAPR82QTmDT6ssDsg2kqDk5AcqB1PL5iFLGq2vqdW61qpXZZ3QEG5YEMoH2dEajH1hXCwaowbJ",
  "key16": "2XhcqCRwGascSFy5FWWwqbkbMh3CzmH1pCAHwGE2kPqgsSYzrUUUtUmFeBJooS6LfXV6J3tUPrCazK9onxDNQu68",
  "key17": "4fPEKQND6HxcvFtwDmUjLQwdtvYmzm7QceooZkL9j5Apy4YbpvgjjN9TEaA85v9d9ftRzWHXFrkCETeRkU6q5gWC",
  "key18": "3qDqeq1Fm9MtMcLk3jyNTYKWuQEAgmDUH1GQ2zgqXqvvxcuYWeLyE3Dr2ASLwNkLB6CnSj3z7eLKKF9AZRmYWsTy",
  "key19": "5vLhaqNF1vbCWU4RGWjk6hFzCqWsrzYd9FycvCeQjrnEJEC7CdNBa7KbAXB7K61jatkFwKGZvYAix5KabJd9p4hh",
  "key20": "5rS9nyLAeeuowEJ8GQArijBJ6EtAuzF4m1b1CBNF39VuAXFjk91cvouBQFb64nzvbYAnKo23Uk5xW557kUu7v8mn",
  "key21": "P6dkwMhfKy9RzpEbGg7Df64vNBrsY7HJdNz9niGj3adJU7XJw7Wjoas6RY1xzRsiQ7SLnsdrvN9hKZYHjzLPtdP",
  "key22": "3LkJTHRR8qwjNX3zmZXt5ywER3LyxGsF1KWpEVkAfTrDku9CS2N4kwkrPbFgfqUjcxXCHDvV4EzZU5gsMsU9iEZ3",
  "key23": "2ZmbRpRDQg9tsS32etr52QeTHnVf6PFAyLuK2id8sVMpjXBu7bepjS8a3Q7h47bLTKkZeTRTSBxty4KB5FghtQtr",
  "key24": "3ujc558YYKPXA9WMFeyJKsvS1xzTmeeDZf9iw6Ti2d1LpgSdfUjpunMv64umUHB7bHWXSVPgYDVip2gTgoiETyQB",
  "key25": "2nrV7oyE6AK6byNibDRZWKAarmt6v3qvQJEfJZB4wULoKvpRL9LDtetfxBKNj4z4N4ejJ5MQW7n4GqUUjCGpfZbq"
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
