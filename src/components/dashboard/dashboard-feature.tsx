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
    "GWP57NZ38ujhP1SbGE3zrHibvHpd2RkmiTAHtEJ4S7GRXdLx6tTB6pyH4eAsdLdf4Z1YjpSGYEnu1cPTMDGbyV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rASNiauKuFJsTHJT2rqFKo19HCTLnicD3RwErGUiayzQVsXx7g2ztk2vea4ksGtHiYcWv9wHtFHasmxX1rihgBy",
  "key1": "5nnyvyWCLrxkYAhMXGzu9UZcJALPXCanWHjjwC8bsMBX1PLLbQVBGNtXGnAyKqecWRWvXvbffLTW4GjCNbWstbyB",
  "key2": "U3iw4KwsVgpjeBSkxURFMJXuC5seCYmYEhP4vUM4Tjm8XX1J51oUARTV6Q2N1MipN7DTriPESFPxFKMRkFKNesz",
  "key3": "pUzkLEPZVayoK9bkrD9gc4jtkAjGzAURgKjjerEdLYhS45pbytTWFUPm7VNgWk4bSPn8QW71Gtk4de7SD24aV3r",
  "key4": "299bHEfwhWBhyhQFQUetE1NQRgRuKg9kpGvBL17MBq39P7baTs1XbQsc8951JNdqdf93FTKWiQZH71SgsMdhx7Mc",
  "key5": "3eh7thtXYnwoQ5KCXd3MwZN5LWYjDNP9mJXALty1mcfV4MpZQwc1UwVB8X91W68HhrhvN1DXboeP7imCc2i1PimK",
  "key6": "66Yo6RmR9Z48jMuejF9icVMwp2mVufkkDdVZXioF34K7SR4GkgsaUwenpbohAKmvBcyNT9c7fb5r6rn1CZ9MmLwA",
  "key7": "7vR1zaktTPF76rN833GNqz6WxV4kj7cw8o43xGzeEa5vhP9LY1iHgK33FZT4mkmn7HR2vu6XYdEiQMfnFDThYYe",
  "key8": "2Sfm1t9A41j7Q4P3LFtGWQFKQQEY5uLfh5afRhYSMw6LR3PdmkJmsF8WtLwn2K7Zcp7od9frCGiUbtRLLidsBdKG",
  "key9": "4Gn4wqRW1LfyPXGZkW9SP4tCiXxnksnBT1SpcnyExsGWb3gw8tb1R8W6UmbLWpM469vQicBzq6f5m25DwHTBAhFF",
  "key10": "4nXdaEh2R6UX2C6iLQBMr5AByz3CPoUbQdXrdvt7VHUKn5sY3cxxpnUcUCnukn7UHDjBsBEW7UsCy5Gm8ayEFqjr",
  "key11": "3DtHx8buQCKYHbzpGYq5xGskarho7p3npYVaDDQjP3hHW3jswWtJEpEBc9AmDVi2emkuMDvmbB5rFnm4bzBF4MMd",
  "key12": "2LcCQnM9nmQM3uWBj9aWyyE3HRdHMLWty5kY5i65dw6gZoLuFDnxNEED3STE8dcFbAKN6yZKTsopYhxysxxWrqZ1",
  "key13": "4TaPkgLNQnCPiUpmAXTRWf2pPn7Ysx312UCkvbkewK2dH2BMv2jw5S94Cq5V4jjuivELVn1BXKkCm6shQHZM3C9B",
  "key14": "55WkMPnnGEaaHnSG2aK5vggH55Q4GZbXDR6fYwG6on3VU8Wh4yEc7qzPpG2Z8sSb4x1xaNou4PYB7NS6fcHv2K4n",
  "key15": "59UhyKhapTnP9Rcnx6X6nRLG7pLGuiGK7t3KVVu4RpnUKM2hwpvzrPg6rpKKqtKF6Jh17QbSTw7mhCC4AYFYp6XD",
  "key16": "5ZV1b8Fdb8UrLhaZdXP4dwVozTZJMfyVaipCYCRbnMb67dJeKBn3xTbDiF1P1Yu77SMkwz7UJeTPABEC1bjR2ATb",
  "key17": "3qyeXo6qBbs4YL9tqTpV79qKVTi8afXAZLU2KN6mMy8hbNoTDfRcFt3pNLYrShP3iW7MSpstEpR95mQHp6LcBRU3",
  "key18": "37ShhbLHq6H9czCrBs2J2Fp2osrVgdvKkAgm1iGXWRyPZWJ4b8YtzWKs23qdPgzNcRTXyP3aYURN8EDVwkxE1Ziq",
  "key19": "z3urgbCeUmiUbHPhoZMH3DpaqJPvRT6htdASqtzXEvZBLzBoLQ3awjoCJ2HUaDtH4Q19bGtGpNoX9YvBWbyaEgK",
  "key20": "gKQw4JueicCyyTDhtpJ4JCaCWmai6y4YttLsjwswntFwJx5TPKYhtPxjqjgWNde1aoDT6uLaL4sG1Ur1BjmtDzM",
  "key21": "42DcC2NpdnikJA3TsX6XFFztYjFnmhzkKYyHAWVmgdJJMt8i3tAmWooDuKTApd2gmZ1NtHYFTFaDYCoGUDqmmeXb",
  "key22": "52xwxv6F229RcVQBa8K6kpLBUHvra316voqtc73gnCC4bPu5WR8G6WC9kXrqhk56kZ8eAsYLn3PgoHXAVFZRrn9X",
  "key23": "2QkEw6oZxc5Ro5e46WKXdowm9fY7SBHd1bCDs2NE89PDEphipjAb67HSi8XfVcvo8ia9rqBiArMdQcjgdthK81nP",
  "key24": "2y1tmqHZVzw949GaKP76eFUXFhKqeSwT7VJea632RANr6F471CT222VQuThkYUY4vDEGW1Adpj7xsP15scvEg3Ya",
  "key25": "32yCL2NWAJG1kdcjFr4wpgTKbEZr1PQ27zdHZdaX2jrPFYwbAQCRAmtedS1zajL8Yi35T3kfLVavvpqy2gkhDUKW",
  "key26": "4hc5BegrZDj1pYopA5RjRDvWc5F5qQz4Hp5HHoQUb6BAstRAQP3NFJye9Y3jRefLZqN3LmH3HbFDNqrYW35rTmh6",
  "key27": "27t4qdPB1a7pPRCNW2zyWnpQu3iVcYCYFAtkZSJX913Bg4GY5Xt6Tduv8AypneavpLrEgVG3RzncWnpUWM4igAGp",
  "key28": "5vwqGZhCZKKt6knZnhUddwY4CzE44QdZttooXnoYQXQMLb1wS5G2LiGMd9Xt3jSa71kUFFHcDovwRjb7c7ww6wPs",
  "key29": "41yW7qKNn3PiCBr1UU9pa5iWkXmhoTiKEmRPpgt6W4REfGg8EzGcX9GKKnK9ixuAm5EzKeciZSv8XHMjT9ACqy2R",
  "key30": "LjFvDFDFbvygX1t3jbv6PU9yzUNJ7VCux8mWfDsfzyq5wvjaL4WZQv3D5B7EHc1HhJrFRPz7gJZPHiyqPAxG7bA",
  "key31": "4azdAM493Suv4749F39WT3QZq6sJWyPs9yA4TM3GJRF59Xa4bfriZH3rtC9g96j6swcmcHScR3dDiiMfVqT1rWiF",
  "key32": "25tWJ5uBbxw1dwa7MmT6tSfbh48N9e5Bkv9TeU5sJ4K379SWkYqGjv3eMEEK6V9LDeiv4uBWVJHdWvkfKkRUGpVD",
  "key33": "4fqZWkz9J6bXLugWphcYWCATVBGP3aKNTwCgrQqi8gJqTqaNsSVhpqwJtj5dEz8AZU31cnJ37GkALhxAbdUVJxQG",
  "key34": "5yQkfNUkFph1x1fMVTXNCgKCGoPdS3HPwNMRdwevoHvUJMkSDarZccNKcN4qdCLtUgAE2WEnZKUXZ5cLGSqzXa2E",
  "key35": "5ANEfpMphVzY5ADWsjNqg1x6UMFUKz3WKL3JrvDUeMzwmMYTy4nMxxGvdnLs5uACw8KYnvB6UGnM5LaNKognAHbV",
  "key36": "3oDFdjx85AjRVHtPxqe8kMvJwdtECKC1WXp6EsanuaS1zUWenjvJxZaX6B5vVc9EAUDaYoAgaFeWKctfmEKhTM1F",
  "key37": "4LccqLzmmvvifbV4QysBxfpzWJNCGCgMjrZ1jRdjts1Xm3y7uMKZRZmKL1iqQnU8JiiEhsF8ZpuBBYhoJCaqKQ2d"
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
