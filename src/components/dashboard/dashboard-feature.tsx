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
    "4ZWBukcvbZGfC8WrfdizXPkTmx9x8q4rrjvWsKbuhYS4rHYb7WK65eVct7v6peDR7m4i4ZSEHV9nvmbULhdSSH1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhGy916c5KEiAdufrzWimkDTqvTcECGsDERXUFnpKHiMmaV7XVce16ouejNbpLxwxdsE8JyEzfWoW7f8ZoiNi6H",
  "key1": "5jFtWmXaM4m2pPfboNHznvEBMynAYtvH2bV4JXeyqxLvsdbPH1fBoVsxHp7tyfCC4uytycXs18R2zd6d9A3jebpp",
  "key2": "2HAVepe3mFpH9yJnL8TkV5iV6ubyDsB5ZUPJRW6wvgW8AG2NewmQs1gJeuh6GJ8NsKvNxnt3QvWpaZ2appg74cYY",
  "key3": "5CavfThjcFEi7BnKp662gYdEFMQiyeoLzDs8UXUmRujGVf9uTQCTedsPdcwZiCMmqT36azdoDR9mVpEbpiZ4wBAL",
  "key4": "26tYZLj9zCKt7Q3CMwDa14PUeYUCiG3QscNHnBA7ETxELwwfqBhYiqFQTLVFpDfDwNpE9vBbPTRAbokSmZsncoR2",
  "key5": "5MKZme9hYW8aUTGu8MxDKoMsEvCSLwbE6dndkoo4y7SRHZC6mCkRJV3W9A2KS5ZfgVUcyWcmsiFrADCdsB86Y9Yg",
  "key6": "2PPAg3UmuwAuadopTuVXPgT2e6ApaaNfmmX78kVj2TQ95pHXLfHNbi837yQj2TYkTEWyDQiU4HZQHkAwJHrDfCXY",
  "key7": "4pr6HgnUPq2YTZDCSNKiDup89ZYjAgskbcZomxkW8KptkfHaAqbpnKTNiRs5yvrXWYVTurCVX64cscNG8iKcqg8x",
  "key8": "4mNARQ6KSf9Gviz2dvsrGSEENJuTXgVfyaTLr4XgHG2gyXCNRTfum3CrjELFSCwXbZaC56e45PJxUFwhM8QQis1W",
  "key9": "4Z1LkgMYDLXpwU9c13v2eTKaD54WHv8joztTSX5GK7U59Z4Z4Y9kAALT6Gcw9kjnMfxpfdWjAdUYGr9iJi79pMLD",
  "key10": "4A2NuGRZRQkwpbbho15PFuLcKZ2XbkrfwS8SnFpWWnxk964tg8CEnM14EgtuhJ6pkREM7qPsRtmwkEKjmjkUxLHT",
  "key11": "5UGNb96i5YS2qpPzETcZ6ygRnd7FYChEv6BfPeSut8J9n3vB6TYWA2xYeTkgk25ob1qVENonp1JPv6phicN5QP3t",
  "key12": "2WukNBSG2crGeB7qMakmuoDwMzTAJcXa6vUYD41zyg7zEBG5XZT2qr2M5dVJEWfk5F1XMYiaPg12Pm22m9yoxaMp",
  "key13": "47zsWhkywe9tamdFmvaKTpJJBpcsozPS5gFMMVLaxcUt6CwGb2uAwKDL5EmVqoZsa48M6cxAc1776aqr1JuNmQBJ",
  "key14": "47tPax3wc5KS4BFJ6GswgypFwhgxM66JYMAE72rPhQLdvX4yNfuGkLq3mtAkvDJVnDN4CPxejspYt293NWy594MS",
  "key15": "22JedJ9Jm8a99MmVLr637xsTGXYJn8HBGxFNXDEXDBMnM2BhqhehLdxUo63f2wvDPFRgHoRDi8ZftP3KjB3QvMKa",
  "key16": "47cpbbQHA44Tx8oqDKxkdvuombP2X6JPdeE3udviDerT6G6CwhCZmju6nJ2AznazGsW2FqTijkGw4yhW8mTJy1Ts",
  "key17": "4bh1Emak8Q9EUV9w4tCk9RyYeA7RsHwMr1cb3wS2sKvii8FL9awN9Q3ZUX1udH5xJ4W6qT5koWCQnfxEkoqfhRoW",
  "key18": "4ERBeLLGPTMShr9qa4cfKX7eYRXoBHrNMSUPZJ9rUw1G3DiivFz6pnS6BNXSXrYzqW9LhGurTB8ZosUhENRb2v8x",
  "key19": "5QzYJdmiNPpXXKQsxS2YjbHK6eevwdzfQKKHgT8CMhHzi1cEteAGHYj62A77ft3T1o4diThHASB849gTC6S4erbZ",
  "key20": "2Et23DXrqRapBjxF7HVqZt4QXuoZK3zu5sQADXQr5W5PRyJ2pxpxhMJAdwLQWZQWpjDqVh42UovhKYVGj4m1HzxM",
  "key21": "3aLY3FL6qgBAbWTf44qQVJhQKh4K9t8BMAM1e6dKtTPsaFssNU9G4NkMnxxRCgmbjmfBhBMHDBpCdsNDzDLpZpK1",
  "key22": "5h2wphJXYBUkE2xepjf7Xxurwzq52mo7o66ZAoK3Q6w651vteCuygVLouMNfmwNJXgajyuTNJ7zXQaSRJCvwMeWk",
  "key23": "4VKhpULAmrT9kuupDHp5yeuDn5NF7vnMJzDgXzzXnjvhT4yQ8MpyXTys6dHEYik2J3DyVrVZbHxSEkwXDbmACh7m",
  "key24": "5YSfLggCgk42YCSo1YByFhUYiTCinfTRhBUyDu5np2QjytmCanwAyjJdiebUWX1nS9Exjj2f5Z6DnogA9m83Uze1",
  "key25": "5y9XXvDphGdGHLhZtpHG9TBNZiEZrTQsNyX5AFasNqermcnXa5v5tGynQzEzoRJNfs3dTfhzGmVENcBFQnhEcEHN",
  "key26": "2BxikpVSmcD1Y7yQ85xcmkhB7r36siY9395DRypKjQfxuGo25cSuGaQiLYYVjPzzR75SVBY8axiPHBoRRswJeRp5",
  "key27": "dJs7uadSGeqPGZhQp7JAfGt69SE29riiB1GpPmx6FCLmSiXn76diR19H8yaaMKWmM3nnVA8N9Awi1HWRBviezbL"
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
