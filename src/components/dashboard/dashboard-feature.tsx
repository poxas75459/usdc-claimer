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
    "61e6bagm4k1uCufmDGak2rCVsXDk3oXQVa1mqppLK36AkPk4u1r5PY78VuuCtjDE4wpXJuCpK7Y3YLf5XQufsKAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TwPpD1y6kbVS2EF7NziMeKRgWG4SpUgiiELJPZwRNwwpQDC1seRyd5J3xAnUoxEKGDCLPGiBAmB2j2wg6wCi3US",
  "key1": "2EC95LSoJnDSe7qVghzrSoTLFbS1D5X6pczsQRfYUx4rX2hvyxeu3ojjsb4Jh2Goa8gyoWGJwQeLZXweX5pqGoV5",
  "key2": "DncWQ5QXiB7ZfQRiaP7u7JXdd5nwSuj8vSqkAPUcPC3WQFcGX26GkumfPANvApntuQpFvDRFeXiwXQme6KCiBvx",
  "key3": "3LopWkyMUH3Go98gK7att5PvaoH4TpJRpFe92o4V7GhpH38PPMSMesJimNLkdUYMUnau9cEgxqu71mdRwnDYLRaJ",
  "key4": "Re68MkAAxCgxvfU33pD4ypSHqoyTkCizn5ERZ3uT3NmW6vPsYPUT4C4x4hBC5DBfgbvfemN4sGqgq2Vq18vooEk",
  "key5": "5sgLeVFNTQWmXLKprKgRfCCuRq3WjxUXQ1un4eSmHVL7fcwSED9Qe4dJDXE91g4HdUY5Aiiyv6MvZah2tyvFidF7",
  "key6": "2Nx9gze2EUj82F1CRU8JTnGE5jHV1FbXT2K3zsL3cYozQdhbkRrq6Be3AfZUxbvnLTVgTPGWyodjTjC5mMrGia4Y",
  "key7": "2DCYAWXtqnev12TGU46kj2EqYYXRJFZtvSacK2j7wZwtJfP75TtPrbRdRVASHdyFV8Eq3MiuLEFqJhPeaViDW6fb",
  "key8": "4xuzeKP7U24dm6mbdmoDLoA8K8uqSa27gU3ZJ3Ho6KtSxDk3iaKjw5nY6PkYSkFRAz5VZbG6Aj5fmjEY4YdZweY8",
  "key9": "42x6cWNMaXRcYQj6HRG3cqgwMGDikEnuKX24zLVGP3YL4YrcmYx65DzUKL2dLVfapD6Qs2WSRQTqX2Rt3nrKv9hw",
  "key10": "5tfC9SLpeuydnF7NyQPXk5Kr5wngGveKVkzREvUL4sG1DNRd863Tds8yjSpdXvrXknt1vzYBuDxefWUksLwJ1jQX",
  "key11": "36CkW7U4h2q1verKuzh1Hda7HMAQXV8MMQ6zfJgzUPVDtiTyp61BydAemF9QMWpesYYQSLURUhTCBd71zYLYRZUg",
  "key12": "2vTLFCYnTnfCg3eR2EXZm8w5To6XjVmzazZPo3QaY7kCgGCCibbakDA4W16vX3docAQyyxKreXwYNRY1hsuQoRfs",
  "key13": "57Atb2cJvBj9wrgZV82RCE8Nvv1n9k52Y5wmRAk4hp6MWzYdjgXkayEvA8aj26GtaYW63odBcB2yg3Zn74sKZUgb",
  "key14": "5oADgTKxKRWcpH44v6r5n4rkZfuMPh7BEPa91r1GB6apcRnLLQsETVGrPsDaG5Cmn5DC3DAKLzkZ8LMrQLjW9C6q",
  "key15": "2huRo3FYjdC7f3rHYdEs3naeECuwhpLdmixfMjZVuF8zQKp56Pe2KCHZZpkroK1Cz9ZW8WEMMJ1UEJagVvjqJiD",
  "key16": "5NXAeX7zvquV5o2Dy6rduHS4QmZW8ebmqfhTNuLR9QMsBXex3zmZcpuP4PZXZ5MhsYgJ1mKdHwxAPTS56ek1X2cr",
  "key17": "3CtSGHdLkinkLmwHx9dvrZv4BREAYw1FANiFivi4XDmyEAoTqkizZaWzFaWKUb4EUVUW4gjrDytUkerZocYjLWUk",
  "key18": "61m5jMr4swScJ161hdYTtP8RT9fphzEMkPo2maSVMBxbodP14NJfqUGtPHbSNgRFtecRKq4nxfPrePcJTCbUwqmc",
  "key19": "21Fi8CcUxwaBdwZtEqKmPiUV9sZYV91NKECLTUjaQpJu5X45gikCT7rACPRAv9viVhHxrMsPqQuzgBopgq6JpLwo",
  "key20": "nz8pe3hmad57FYKWGjsypcJSCuayXzdahMcaMkmYxjXLGdy1knxjqL1Jhw6z2Lu9cbLUeP9Rk419WzZEEc31ov7",
  "key21": "2Ydc3AQ57uAgSVkLUHiJfbeE68my5s4kCXYvuFRbiF2tjA6ZuMEbVi42GG8hu5UZCKwMY3Uh4F612fHJfdnDMBiN",
  "key22": "2Tm3i6m7Xj4jq7UAnyW3GrzejzNBdLZsHCkee8zh4SRP4Tw9tvTPzSwfbN49QeLgURJiVXQurwABekzRhCf1nRek",
  "key23": "2JZ3bcy89YfZc5Me91auDNBN3RHu1RZPdQEGYKjkQymYuKZEDGi4CyoaRQ3ZqeAPuzsDnDHaBxTSaCrAgVHS1aU3",
  "key24": "54oKnagNanmzAUmzRKtpzVcWeatKUJnKLSZnUt9yt2t1vnbjc6W2jmaqiSt78W4CHTkoBGVkTWUvVytV4niX164N",
  "key25": "5XjUhjQVSbtkh4TFH25CFsoUx4ZDkYiJ5qwLfHiegFFsf5md4gKpzS8q4N5gtxEGWSfmDpJgXFv6bW76UUrapLrX",
  "key26": "5pAmtYNhQ6pSZr64KpsHdpnHsaDgBhqHo9P1vNRFtUhZzRQtTpA37Jwo1eFrxDF7NCzYuzNZ5uN7NriAA7FXhcow",
  "key27": "5AhTcFcR4pdKkgg2X47Ft4hXfmuu1Q2GBs65PNQ4LM8Xj8ZvSVHxqN63rRrvg8b9vUw23HGxTYD6LmEgADPkx8zy"
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
