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
    "2pqdjUGhGiLUe2zb3VzDXYjEBkQ7GLmydGGUXicaCRfwA7Q4P5f3jvqHdVmz5EjRZ44jtMewZ75PviL7hLW7pGFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aD7ZurvFFFuVobAxN8u4dWxUxyeDg4EUmn6a27TnZXq2HsrxzZZMR9YHtoQeCyrrtUNcJSDUsdmuGjxdiX2vHNr",
  "key1": "3vuJjDCNiihkhzY7twbLx6gKzDWo7quLc9YwrGG4XVAzCmS4UgGuSNPPV6uq6yyLDgjaYTGzgyAC6tybRgDLQrBL",
  "key2": "5PkrHL42oQRRif9SkKBV9vM5s8hMmzK7VKemBsfnrRdZ3yXuDm4sfNjeYSH92S58ztJfLSVv9cFGuWgQaiDo8gQN",
  "key3": "miVvYbxPvFjQhqTg1HGQC8Lff4kZLM17fGY28ME9WPku18Rj8uucijKX7yrU1YBLj1rEY9wNn2oU1rYPziM7Ekh",
  "key4": "2oPdoZpFVjqFtLLDBEzjzr8heHR7aVWfvFLMb1ZvGo8nzeUMTreNi3xX1nJ2XS2Lh7xBrwNHLWQbkj4m5h1z3Wbi",
  "key5": "jXh7TFdj1mYUHAGRtLNHPJDnGbBc4uQxuUacjH7gFRKsugJGXf5b67cGdfphPdVoFRP1LNVKqXAXf2WLxXhGvZ8",
  "key6": "5hL6kc8DevEndQJs1o3K9YE96qAmaaQKMXxGBgbupTgTUQrrjXynR73WFEKWogs5YnedxWrmCkhcsdvtsEDHhYor",
  "key7": "5MN3QBzvXATVnmMrwpSLogg7ZWsUB3L8ssBGWzLxYVhqo3V92hBPJMSfSiW6Q14Bhn4x8Dsmdi8o5kQUva4VPiL6",
  "key8": "2dFzWJgttRZyvHJjgDD7irPTo1pJ9mHYGWwudmvi5zGSydcZfFyk5XCPmjPYfGAKMoc7MmNX8WeSzbz15aP9TUyn",
  "key9": "3t4CpnjLWBfwatMKYFcBP8minc9uQsaNmNcPMyuYar36LrZoozbmdxDbrs1wVJXjWtNQyCUz949SY2sHynpRDkHz",
  "key10": "3zfS5pXxxxGgUU1tvHJox2SeZVzDK4XXW7rLjspkHt2ntesZN9AmNkErcBtPbXbhszthXCjQpJva65Mh4dU2FvCR",
  "key11": "4riZJ5deXeZgkhTcmGeW7QyjWLrLBNVa6cMVpAeoogA664q8LmchvxYtn8D6zBr2xV6YoFfQCr1VnsV9tCox4SEA",
  "key12": "4VFNETcmm6zriVyHY1rwFK63e8J35ppUKAJkARU2zCsgrUKuV47mDbKNPCqK3yvefKEJR9Bc1jtk4byhkGKkVQXz",
  "key13": "24AFRcAs5k8Q9H8JS2k9jZnoBrdN28gNJctQ3deDwURsZHeqXWaQtPv8a8NzhAZqPdsgP9eh585d8PyU2Sc8pVxY",
  "key14": "ATT3m4KvA8ohMZ3T4xvyxC9SC8Kv5YcAQzBHRvrirH9nfKoQNwPBFDGsWnaaZCK4jfM9rnHDhuMQeusX7ijFB5F",
  "key15": "3d8TizuLKyyMssHRkxxAwDXHScJMgWm7YUxwZr4QoBusYzscXcEJYLceEakHtHE6R8hckhVHbmFMsYHQSuvyaHMv",
  "key16": "6425ZvEb8CoCLPY2fZTEZoPeRjsAaJPyYWdPBi6X8zjoi8UM1FTcSwfjwXbgCz4ncckmDysou3AGHYW464yhzUYd",
  "key17": "3MqZKp7p4eucgQqC1K1LBhWkg4dcjwCgLanFzVx28izN5H3MoJg6WupqSgpaT6EdiqhFCs13Zmz8eRcc48qHhBDJ",
  "key18": "2SivDc1WUUJPmNoj9zkU4iCx4y7PkGucEoM35TLCjXw3qZQB1CX8HL7doE1kdLq2ES5LwzF3C6bSX9KGUmELeZgS",
  "key19": "4c5KneknZpZj459f5koKgcpogYni64qWByWhp3SqLf112oUWPLHBh1J3KpTP9rSvPZRRaZgvmAYQRA7RMY2s1j2o",
  "key20": "52KjzFJTnXNG1pTgEVrvwfoVKjcnckYPExLv6VinsFFLyDxoyQ2MfQnq7GmHEybECkzwWsfv8ZcxDupUsP1p11t1",
  "key21": "yLQs88L2TuRj1oFphQ5htZ97PvWBpjJEofAB96ZBFsF59XpnTuuEekyDvnaFiffgbCWNeaYWdaUtxv59uyHeqEW",
  "key22": "5RpwfXXfVwxUxMdktgv6PH5TmRUQKu9f19vCPKLkLRz1RcGjh5CNH1R1hJaDNGZQmpdqKvVgQsxBpaGjzhpDk8Wn",
  "key23": "5z8zhscLRjBNiDNgB1KSownWxdfMuLmMkyKZPaujRrtvYyrwoiw42YmoxiCeuk2bSWDwFze4996BnbZbWdWhJEtE",
  "key24": "3hi7c6xK9UTrYEDESTofDvKiMisnQNbCMhsUg8HZyQGcYTz88LfDzNw18KpXZDci5xNEgFzMJLLattYDnkY2U8x7",
  "key25": "2vHk1QpYNXtbMvamEV48UENTmAqaSdBhJQDPYXTkXt3CwV8eAe29rt7L4cagmW6WkpbutCy6oNMDgV7or8DKvenw",
  "key26": "4WKGhoSsdPAhvoAeXKCNHUg3fzEN3PZthbKXaPQ8HAB6gQUxWyTBsJ3FYyD1qvCsbWw976SDDRH2AqSS8zW5ZbDT",
  "key27": "VKR9MppaMgcbAYYzLqfTghBZbgMJyAwwu15M8SgMjcwwoZ4LhBPN5tpLfYjVvRQd2rrFb6YRd29pMJqMPMqNnkJ",
  "key28": "2uPe5We8R8nFyqbfuX3wnFHTpi8Zah64nsz5VZE5FXCeM9TK16TmxJHeo9UksNbzQVDsLxBa8eUbubU3TdVEQnaR",
  "key29": "5vk1DU4FpvpDrPz8Qfnjip667FcaMttf5TbxBAnQofrenvv1VBuqowNomeqWsdekUdEJfNce8nKay2GJfb9juxta",
  "key30": "VMif8zAKESZN34K74nQcr7dbh3rVTFDxMyPfDHsMK3JYrVyLjvi2C8x5AXr98HpDRAsjW1LPRkMxBR1rhspea4v",
  "key31": "TwLFnw1hAgxBgzJif15sL4qpiepH1M9GcfT5HwE7xM5uFHZEZQZuxrv25jR9H5UejF1jd36JCt6w1dNh1k53JeB",
  "key32": "4nqe2rLBu3FSar1uQyjntcxUvbFEjnTQrmGXz2NjGg2cxkgTsyfujWQ87LvnKyFx3G2yyFp4DUe9nmeX2ViCmgcx",
  "key33": "5fHGTwoptVveEVmEd6Rt33hwBHKC3hQvheiL4Msj6LKd4y4QvWoFjfWajrtW8NDoQQkEWQtVdmqwGx1k4QMLitr8",
  "key34": "655VGaBNuFDCM6UWEmfGMuxN2HRzG4vJ11vr58QtuaLzT9wV5A8PtYdj6KAFhfCwrQdBcpABKGfLyEc8vx41bpCf",
  "key35": "3Eoyd9qXJwJHps5crojYQE4zfkqbLFCwZEmfuv7WBUvVziKXvMoThoFbQfEEQbUTs7hdg45XJrx8gj8e7fjaYKe3"
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
