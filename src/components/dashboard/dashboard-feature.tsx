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
    "WR8h1wFJ4krUhx5e7Qj9AcivqdATwJWwkXVW4BJ5UT4e3rRQqok4iHigunieVHawYqSh8At3G6wBrwnfh76t4Dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "462gRXFC2bnbpjHruum7XjT2LtEz23LGHWZs5mdKcDLa1623GSJNpvZPK3QQumAQu2Umqe9FLDHdj5PMr6qANvui",
  "key1": "3t77SgMM1xPyEHMvLbNoHWt77zz5ap7yKyT9qw152WyNf4Szr2UDG8GgsLrqhssvgqx6GqHGHKzJjTtiNEJ6gXbC",
  "key2": "3FnhQbYa8WY4DNNCwFkPvqEgjkJhLxsBzXezVrBBvEXZCd9ujWEp1afNj6iy4hBFS9SzMZkKq3geQtCmc66q6riC",
  "key3": "3AdQxR3Eob8q2myBnv9T5dgiSwNK9jaZfQF1XdbgWHnFSvmbTVBD439F8c3RTy3YWQyi3XudbbMfZg1m1Vbs6pct",
  "key4": "5He1XyzJc5xUxeUeP9UfD3jwFk6hmgdNj16kQtz1e688b8Vy52WvStBCm5g5DSXwYf7uGWqWCfuE61kfgFWSYvzb",
  "key5": "4JAryck1Q9hfhyuRiTPqQ4hNJLz4zzFPJAYUL2WcabR2ZC84UibBSQ77aaZg37N52wmx7fGFrsdprSNdft97KkCr",
  "key6": "5AR8kYX5Szs5njoRXLvjby6EsK6WukNrHsWoCF1QYfeDgiF2bf4dcqqhpx2frbvAwGDTHGGWCUkbzaRg1B3yhiUK",
  "key7": "4n6YjEQ4DDJ5aBrguXWq81ApC7FmZRrTzMRUAqhZX1y2hhGgy4adue5pDeWiKGNvw9wKdG99HFq66xZvP5tkZFXa",
  "key8": "3h12KoHeXg5vNTBSDzob18G6J27MyjhecbRK7PmjUAsGgtSzesboQTcw5vLw3wMLaYVWNhcnPjgy97uCPTFoKaD6",
  "key9": "36368Su7gg1GrfHBr1o68mFcQCKWsPo1Ndv2LLRCxo8zvtBra6usZcL9f3nRaKsB7gR66UpYe1ZqcMj1xaocAn3A",
  "key10": "JanhUPyrrYch5f1PGmY4xsJbvx4UtYC1dcU9RfSuWiTGx6wtwGCub21adTAw6pEjWfCtshgcjsta1a3ZuqjJXm4",
  "key11": "4F2LMUGcD7BkzX1Ve79E5btER3pX5Vs4JW7wE361x5JvvzUe1gGJLqE4ovtwmdnbJk2pFB8uC25ZGhE4Geo1jWCu",
  "key12": "5G9ZRTNZH84LZtBW9nmibjTTsYofmCVJ9b2rR3ZoMUYuyQ7fLUcfSozsQFkseKbkY3TjF14d9YupBHcn3ahK6D2Y",
  "key13": "4Yhq2ZCVZFqnqTLmDDCYs9LbiamnH9YPnn96kApeQbtbSaPvPKbtuFNVDDi62JE5u2pPZPzkiwvtUCgFdtpH21r9",
  "key14": "64t8yW6B3yNu2dpoghFbczeK9noXCPkTw6LdBRrM4qnUADFkXpuiwYwQFCjY4qf7X5pSVpKAgfQYZjALiLF4qZ8U",
  "key15": "5dZ9BS9vg8uSqLACub9evF676Ega4eZU13yn1ZYQ9QxdnreAA5GCky46daqjJ2VTfgngBieAxVBqGGTsuwwiucv4",
  "key16": "3Kg5sSD7oTdtXNhYUJqej2Avfy7whQjQJEv4YgDNRMLe446tmR6tLzYJQjW2kg7Hzdb4MugUKbc99opmJStQzG65",
  "key17": "T2VexUWRuUuWbtoQQDqszUgJBEa1SjbDxrUZgotnFerJUbPd9r4EiQzb8df2F8B7WAXLSi4qB2vVoNH8GHyiZ3z",
  "key18": "4tUXjHyBpJp4GHHnaCwhYreidqSb926YEamviFb993cnAXdvBbYwunWaZXFB1McFjYThg5eAR3FEYAg1iGzhivPq",
  "key19": "32emGvcHAW4Qt5zq6HdhHZisqEw5pJFnXoyRY7tPa76frC4hPsmj9F2XHHZvfGomYkuyG1TjhECVQNWAJxJk7HtQ",
  "key20": "uiWuxCQJTcfPEjNpdAbjtzxxWUjML2qSoWwTifyLA9MjKFJR7QdGo8wALUygWGwh3jJpskeiw3YC7JACCMrjDtT",
  "key21": "R8MXo371FmNNDj8vA4XGfXYkTMCfzaTqM6p1cDfvsv4FTCKZpuLtieYUY5c1AbBvJzhgf6mP8t8nNa2KijwqzqU",
  "key22": "42rv6BoUom39zbJFLiK1BBTaCxnNEmusS8u3NoPyZ2Jb4BqD1ANkXGy8rAiBVpmSuh4vVZatm1XRp1VzHPrdCnxH",
  "key23": "295xg135ierpgLCX9ZDZUVWjdVdtiFVhpt6e8bvpZwddbGrcsyBm6p5jtNAoxbPwYzavWHF2zrFn5afAfQd1nqPA",
  "key24": "2rNJSs3bfL3LcurE6X3XShy8xXph1iCX74BgUQKuQB8DzB7gBaGzPdpXfYXGzz5sisbxPFTPjrqaGLXduQA8eYyM",
  "key25": "W4gxcvDTzXQuK6i3SGV2QwUfFpfXtMvzyLv1jSw5PiKTmgq99J18X59cKYGSngfMwsc4h6zsQQS3pxDWN7qeKmZ"
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
