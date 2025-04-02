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
    "3H4J4YidZxz2K2YxY3peC6g1oYe3EqjsNbZcNu926XB9UumeSWhZqNeKaEwVzvsyy6sPTnQfqLF2eGSM8vc9RYXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7b9ZhcsvoPF8gXJHX41Bd8CKjpYQ4qFNf6v5BdffZBLCD1HzcGsXEG16ehuMFiL1Upmgu2QVjzfDux8PAUiVrxe",
  "key1": "5pczHqjJd4TirVUh2591MFugbKuph72TwFyttiUdf65kAdPYZ9i65fhNBK7ik6TLvBt6hx6YbxJoVEJ5Zq5PWnsR",
  "key2": "Q1ZHVTDE16m4az39xKuAMsDUJkkwbrP7MoaeUgRZH4Y3Bu8UrHidGCTLkNLhZ85NHShSsdNdfsbkQrLBySatuQ7",
  "key3": "3n6jHTDzMconifKVNx22Gd79HR7uAAtdNtBQ5SW2b2oS5nnkKseHJZ5jBVFuGn84UaaBKqXSpccZ5xV6BofgiX5x",
  "key4": "36ZRxgcgsNjVrjHBvuYMJb1pB9YMcXvdKk42tMPGbrCsm1vax3cMoriFv163wmVMSG8fTWbqqgcfkq6TmThELSEV",
  "key5": "3LLRPSXB6jh1V2HzPRnxfbL9Es4k7qXjFE53qLDLBjQBkjPsBD41tJWcy6jEXYYD1hsc3w3NccqxfsGed8R4SsLS",
  "key6": "DW4DSRJ1kUSzdVM649ZQYxGE9eBDGyBmpVDUPbPCMYkQEb1x84SVC1UtYzAoycfvs3CPEurRdursQZpBE2ybUbH",
  "key7": "49MXfwboMWuswTNuZ2Xz3qpnewACheHY6XSJzM38uyeeTyT6Z5DfydYfbx5Ai6UJkW3koJg8XxCYifaRpdMDKH9v",
  "key8": "c2KdUm8vbEjagJcHqAzKiTNoV9hDzTmxCSS9hAd5WtqH1ukraMYgscD2rWmbDBaTRHMqmnwgZwkG4zhsSbxSds2",
  "key9": "3BUmtJeM3b6aSeQjZbtGfEVNaiFoj4qeDuTZ6SNQ1Krmv61UtUoJQFzqKzXMJn7nWrUXWLimynSZ6ea3raVk3RyX",
  "key10": "23GKjVSWnEPKB6xEFeTZKV1HZPkFBnUXa2hGUtzKhdomtZ3bptx5tkbfhWbVQNHYrpfbzNDwpdtk1org8VeAxrZk",
  "key11": "62G6xCxzbGUVpij8HvF4qbZqA8UYEJVosnbVLAbj6PK1ikUjeZ5PyUiLdE5vNmXiwpuPx2Twojt87j9GWC2ZMdDJ",
  "key12": "26Nh81dSr2eEqUzqUmTaLUcYyEcA3NYCKxqXmzA7PLL118hMZCoTtThxjeb2PkBSRAKngmETKLf3jFBf7R4HcvLR",
  "key13": "4QfiX1JtGSBJcuCqFX19RwGYKKn2sUrxFLAjuoZDHJeUWKDKb6hWxMaj9LmfN1pUoajdL3cS9E4GBP1QBHSdbjfx",
  "key14": "vDex7VFEbsheNSucsxdFq6HuUDNSLYJEbdxWCeSTHJaL7JhsCRxZPhjjkiozirScjz4d6uDQ4Mg4TQxyayVfn8k",
  "key15": "3GHEzQV7sbuNyeJ5eHtukty92aVakKkgvkAMGW1MYGmYiPdqenNzwFDKGhjax5dSGmgCbWRzoFub5PZ7cEGH7krP",
  "key16": "2mm17YhsEz89XUVA6qe1gVkQ9zmVwLsPjoRUrNU6FpY4g9gsVXKB7Ad8EUpSd6kBz4hTXSxiFg14aZNMUd71389m",
  "key17": "53xt4mWoVcFS7uXgzLv1QfmWDtk9Uo2AAAqEFqKUgsN3mPUXpkBNkKJgBNDt5d2dWNtxGvxBLXd89Ntjnt2fVY9y",
  "key18": "4SvFxQ7u546jbzUt7RBsumnisZfs4ChYzuQKA4mEtYZwY8HcNDJMiXEtvcHbm83UwwfVbSJYUruGe9Mtr2FFeapT",
  "key19": "5j3iv2UQdY2JT4Q8PpuKXJDF59Eg5BS1z5cs58ZCHjmG48q19YFFGAE2jyGV8H4ZJRe5KvYMALeUMPRw87qwz15x",
  "key20": "tVieN3bfuUCqHNJTJ8wt48Hi8w7TaW5YUekEC7AimybMmZP4MkQwPViKGACvLp7kidbBPWiF6QVts77PB21G1ux",
  "key21": "3GHtM75FLNq9jiGEr37MLXCLSn7bRFE6Jf2PgeMYhSRFK5zHyBcYbUjiSqVXBvGHphsREgGsetseouSa49e5hzi6",
  "key22": "5GLQpJw8H4ij2C2woBMAKwsoGgadRoSMpRs4UpWDg1d9E7YoDsafKom7jh5eaAmhos5jaNjGCmRceh94k5QNP1TK",
  "key23": "4LVb5BU6oVxXeGQhQjc9a2s1qoqx1o1Ki45qnXwk4Fzi1EqV4417ejNj7ZTyo2rXKmwiebjE2XRnGvcjXW7ARQt5",
  "key24": "5ejJmHUhhwNkG3hqfA5rnGYZXmjWkHmpo6iEGp3fFYPrdzWkAnnwCWs6VZy2EpP34zhLcSXibtKP4e7pbPwhUpcq",
  "key25": "3Gqyu6N2UtocftQpqSeEqq614zBZqvtpm6tmnZQ7jpcgsSjMjGVBJJQLriS9xsEZ2StT2KpzeeYSHGg5UAcGKCq4",
  "key26": "ymAG4p3YiMfGJFUq91Bp3NhmSCCCPhdoHN4wfJzoWmzhqMjmhZxnMhxAj75tv43mTYYu9EE7kzFH6V9EPfuEDTz",
  "key27": "4j4wcnnjzZg1t4hyUKURBHKjrzNEVNsFPqZ7inowo6A76MPmnC8CBZDyGa7QcXkEFEqKvncLUpWD8x7o1WCeKW8L",
  "key28": "3pNSJDyEtfabwdGmBta6gptNdR7TfQrmyy6Rcnrum65LgbgNfx85TeERXhPKvoJQNPozKUorbizbTKKvHTqqV5ND",
  "key29": "4iLSoxgEF6fxrX8nHrUw3jaC1FMez3C24FMmrLJqN8JzszEzEJRXuMpJ21W1rXKYPbAgC7svYAThzVFWqDfhBEtP",
  "key30": "w58sgmZfuGJNp5xcQCtpuzAyJunHeiaG5h6ceJad8LaJdh8pyvq9zMttjGqzA97FCRrYJfxgatgDNhfhtszje7g",
  "key31": "5drfSyzEz16yC8QH8YhqKi5PqwewJhxLdpyZsXjA1b4QMSwPjbLLEVUxuyAoBcaLDBtaEQDaaermt2YKTQCEds1c",
  "key32": "5jXE3CfkRz4FSRgp6mCgWcWzcXp5LDLLfhxRWLVH7s7Fcsfcntr3NFyEpVCTfYYDBLeiwy3tGHoWxQLaKE4Z8DSh",
  "key33": "Lt8g87kcdbRm8XsxZifxk6PdVgnxstoK6DtQhd41cQ1JrQxRe4x6F4U858QLawJGmvHGBjpPgdePszChjPUBsT2",
  "key34": "4hFE9TYp827dm9wo1GZwCZk2rayGcEjuDPKHTQs6HKPXVexK9QbegXZUf5PqQoDYsbzp89QqhnWZ72inwnnbXs62",
  "key35": "GmPPeYttwiML3N6GDoWUWaKgfHNvJWDxR8XfKazHX8DCduCSGVsmdyvLDFfaCWkWbEER6ytXZuzJiA1GEAw72ih",
  "key36": "3eTBtX2PT7Ek7kxQ2DgYHrKRtG2FGB6MkZxYCVJAHsPgyNe4VGhcGEiePFk5SemWEqDZvM4EKP4ZXBKA8HMkTnNB",
  "key37": "4yMWWLfJkM5MYzRURqTyrLgy1grWRj5V8MYJYfaMHnLp9XeiBi9KogdQjAMzyi3Aou59MzcAsMqXzDroV64tBwty"
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
