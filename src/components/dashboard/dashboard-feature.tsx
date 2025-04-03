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
    "2o2zd5Ei9U9yLG1pmSmikdYd5wM1KSXKwfhYHDWuKtnkknTgZscQBpdaDeewcnmGmAMdXe3goyqj9c2GbiVXqFoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QqqPjA6pgbkR6xR9AuqPhHLzCVWjMzVcEht7hqX6mrm1FoeaAghbDxtXXRij1t2xU6u6UeSjYJLibJF7gE992we",
  "key1": "3siF5Dvoe63qD83VKNHgWeD6ppaxCuKajx8zNafPxoqRgPg7jmTd9iHNPhF5qmzSpQMLhWnPzLyB8ToqZ97toJcs",
  "key2": "YQXbcGw4j8BjUUwfBadLjT8vLMk8nTPs5StSy77SL96nk73JV4YdcRwZwpwQsvMK588yh4B8HZadfkeU9o9cpzY",
  "key3": "2Q537dpmig6WbXxzigWPV1Byzhj59TYqNxCYB2jDEk9VqrJ7dNRJnUkXkiY1P2q1aMaJUxC7m7SN9U3CReCiqdHE",
  "key4": "4S2qavNsrHTPr4qdnE2FSdtvLHCrFmeU48ZjUvQzK2yzTsw29wX4TRvLQqxvDe9UJeXe77Mekkfrz4iewSX1wTXp",
  "key5": "44LSB1n8d1r1PeQvoENoHa4kj1wMvS6nQ59HNRprY7pHN1yoxqLK8qKzt2zLeBNGdCVVswpiFJdUF6MSVuBmmhs7",
  "key6": "4y3nAqRuLA24fUqsPUv5o3VoemerrVXE1DzXNcmmdB3SaQKP6wY5Y3ntEZfgTn2frLsRVrAfGrPPe7CqZntjFa1V",
  "key7": "2xaTzPv7mfo1doMUfKvr6BWjkrQuFsF96rd2MqfuDMnSoASeFpbRCsGJoFnPzXFUFbXwLCJzn2LN2FnVsPhao8Z5",
  "key8": "5EXN9uhzCWRLeqM9agnJq89ez9C9PYdE4v2P31fnJD2FJsVoXh5oV9Fs6tWghc6sf5wEc1Q8cJwnM7fVQFb2Px8j",
  "key9": "4yZhvZJxsuWvnjsYzxTEdp1TE1vux9Dhu26AKTXkLAuNon8yXdAT6uQ6evHU377K6NoAfT889sLfpHCmp7g8dDjY",
  "key10": "5Emx7RdRwBg46vQq5NPN2o6mLj3Tj3WCx1XgeKPYzuvbXd89h4PgLk6q5wet64VAVYgSHa3eA3ApU6ABPv5aURoz",
  "key11": "2b93b2HN6r3t7gpcNtLwCqzwSddieuLgHWVLkRWNSZF2naATPDqaTztiRqDwz5h1swAf6dezGwrDuzsLoYKHugMY",
  "key12": "36WqkXLMkeE5yyHCBhmuC6thX6RQgMdAQVsp6chPzdDR8yhAjQ8RW6YiVMvHYeFw14K34Dy7voNnEkLhqqHdRyGE",
  "key13": "2d2xSuPevuwoprMxaPXPdPSsFmPHdDfjFisphPkY2nPLZQY6wVQkxUcxZVcyoHtyxi8pUKAn2MuykidnQ2s4qmr5",
  "key14": "4jArNZNEZv4SimnKJYC45pQV36vab2uE7GeKcPwoViSnFj3YL2G4VNJkkanzdsxhtzBx9GNfUdaqV3ebgfhQy3fD",
  "key15": "2KDxrvZ8oDYXrTu6j4mKNgkYi9p8WnEum4NJT2sWtDXhGKeSuvBJndYi1J9KjsoUxpkT7ZgbtKtgogQGR8FbYWEv",
  "key16": "Qs1tCAemtLSRjQAFRUxqADCv8sQhRXwVhTfBoRoTDinkZYwsWAZV6jyfzWrBewKEz8iyjqBjAxjChqwbvyczxSA",
  "key17": "35btwq6jK1H6H1EQ9HMEggEQhoSMjaq7m1m4eV5asp65aEnnh7S2AbEMx92cuRGv3BDYMZks1TcWQqc2WerNnKnU",
  "key18": "S9gbNwdQXkDVZs4T8gZsf3arLeYRWSWosj1Q5pHPFcDBHCNeBidReBzveRAKTKfckgGm3vTPvMT4ibsDfZtvkAQ",
  "key19": "vG8K7Qe7BR3P5m8hX4fvUx1pixvemhm189NqjXMy6ysgfoUheKHNR8NyW6WjT8GQpBQg3UA7mh33RLvSXKV88qy",
  "key20": "5fnxiRAHh9qXv81S2rCbyo4E2M5kLFdxYqGcfd9FkeugJXZVUF8nJfpS95jspFdgFjrtv5aqhdsAgMjuq1VJKskq",
  "key21": "317RKm7oSVG52pGczfyedFU3NNmLsYk457QUyNPEvKwisr9XzJZtrRY8wLng42HBJAFbvcURop8y55E6wCspqFzB",
  "key22": "JFJVAzyoKC1QFAMXr38xyPAMXFfBMUUEaLpk5N3oogtscwxUQaDrGVjkSZxzfk7XGcE5QwhGpVorh9GjK5p9hfR",
  "key23": "f3vBx8anptoeDiaPZhWsZ2QBDjMjAcp6kphgs52o5oozzh53KDfJevrrQayDF1SFnHQR89LDU2Xt2249uhhGdYb",
  "key24": "3yiYDQzSwggQMYr5K6QgfN1YFrqHicU9mw1vVSqfESRHXz8DE3G6DYkHeb3dEsf7VFQizkSd4dUHhGSZGsSdW1PX",
  "key25": "2ArjXEY3Bnz8zxMSdg5eKB1gGL2ki8CdtGpnwDhoy4nV4U4NQFSK6MgN73oQWsaFmyCdq6uGTgaPii1aRUJkkH97",
  "key26": "2Y7RbEwPh5tumPtPmkTpgGW4rr5ubFG1DfgjKEcRjWiAdXemxiaiqN4ubkBcdeXSbAaQqpuPh6NX7YCmqGZkk8U9",
  "key27": "xBKtdWHC1aN4B5NZRda395Bzibx7VJ6r53c1fKynZwKMDRQXWJecNmHmtvj71nVksbpvNyaFVJJA6t48RwW9tRV",
  "key28": "4rxrqSjpg9Fe6134QpG8hnBV3YGza2ZaFwAUVNVK4U81Pwain8sXETzwqTvVwVdSTshhxdHcDPAZczFS3zKCoeEY",
  "key29": "52LWJK8PSmJ67r5CpHCvRe6zeWznzFojEMF2MJwemzKntgs3EPr5PKBBt4LWa3CJPLKNDJ6Xbefa3D4n3ueTXr6n"
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
