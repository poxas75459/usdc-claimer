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
    "3C44d3WCeczENszs9zujwULNsUixQ8hNGHcMJmWMYtqxbG1DbEemH3VHswawsm3ZPvd1GSnREQRZYeWffnuiBBQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLuqZfRgGTWRNbqQasXoJksX5XWCieD5kj9qgSKiPRHuRWVVLw1z4pY68dCA4cnJ7Fhw4BUMUrmSzYYkDgJEuQP",
  "key1": "2VNThnyAbFSZa7WVp8uoBHoMwCPJTXttVgNgEd4PUL8bnRV4bC5ktM2DHMSSae2En5N14GHnTP46zsDtpkbGW5eF",
  "key2": "3ATAxaJEYcErde8CcLSZcFrkdL1SRbwzadcpwtuhmCRmsMffDTxe2r1oHRvtjqQsm2oBy2shWHQjEEfuxMqMq1BU",
  "key3": "3mwFmYQ65nkvWnPZkgPZbGShUp3AC18xUBBYuRAseTuvA9SmwV5NpSsUjoV9F6bRFCCLAPZY86gAAcjhGY6rC46X",
  "key4": "nUAFvPh8oGopMGrN2BHynVYdxx3J5MNMu543PrSmzHcJgnDJGjGMJkRbNPEhse8HDXMsDFpEDjsp551EyR5VLBY",
  "key5": "2V8LfN82CdWeAknjYAk4J5hHtUH9X4pBySf19paughZbPL3EsThPTc6moLpoByvzTJLqnp4gUwj5ooEVyZ6ikr2o",
  "key6": "5ZWwgN9nJZ8GQaeAbAt6Pz8w9rRXyGmtgf2VYLEUKdETxcbmsCQiFFanxH6B1sKU7TFGDncNFL9dZ51nQfWAaDBB",
  "key7": "5V4yHQWzzKqXr91gAb8vv4Q1kiJrUFvch3E8Yv2hgpmjzUrrDaCGz9LwWUzGCpYMu2gYcxJCGDotyFGnYDNjs9ri",
  "key8": "4SGYRSG1KefJMW6Ho6GweTBvZ2MMXT75czffLU3PsHwciGazmeYCVcqhPUygofVC95MKxGJ3MVJZ4DMWgtwToTnh",
  "key9": "3QZaE2TdcPE6cxsy69RMZCs6wuN8rq98fNysWJ956AQEcDFkkgxAXAPPZYfWiKNc2Zn9nh1g5gsMZpzuAQZwWGbo",
  "key10": "4K285QQ871nnhR77wyMHtccJkm8c93GLyeaNtc8c2QDPQ188PUP7FTwuQx7DP4ZpodVCwfqyFGXoosn8UTpZnpHV",
  "key11": "4TExedcbS16QQLdqp7SP9a2sT2QGadfANe6qouwyyiLJ24879mFssmVYaZj5hZftyJ9XzQDhstEp4MvgGyfdUzt8",
  "key12": "3YV2whpzw1TBBvhQaRC4op3roKzDEzK8yvuF9JgTWfFmVv67taDdFhZE3wS2LgmmpJYvsn2uoZ3KVCPWQ41ctdtY",
  "key13": "5izDPgKmZweGsfKgRmVGVZFU35L75ts9zBxMLH6icFthHpB6LwKpw55AKyPkRz7XcqQHETCEvaeadhXEHujXz5P2",
  "key14": "46Dzv37W4TEZp9JgxX3vnwxPZ7xnwBBr6G3Rmq89nxRvyAN14MrM5PsQtUSAv6Hq6x5ap1Ug92kygbc1AUMGjhvS",
  "key15": "53fdPWRXpVi5V6158Jx5qg5YGTmnUBgygNHetX1z9wBsGQ573zsYTRemA4HmSZCBwjFdMFSQCG2ZY1Us1xbrb9K2",
  "key16": "5SB4mWtt1XbUsfZqoGGRvkZuzbPQLQf8upGaC8RoAwy1Q3hQPghMHHYQo1aAr3itgbY6Jh1DGLVF4zHeqZwbEWtU",
  "key17": "B7oUwb8314sh4zhUfrXKXj9TKMQy8rMVyWttXT58MF8PXbErN2aAU5FZLes8DQBkRgxhC5ZRGmzm7wCuTGszVPR",
  "key18": "34ktH1SAam32NhRFzkiFP3SuHwS1pabfeYX3vhnkdCvLe2hPGEivh4gwMxDTsoDcXzHRBqV4zHQTwaVQKJMmNqjh",
  "key19": "2cRduf7f8qBmsBgVf76L85x1Aq3pXtxkztf9rmivDmBwc11J3yBr7BxdFiBJPNz6KENwVBD6n1eX73RF6Cx5RfZr",
  "key20": "3DfELgyR7BEeTNwRmvHGzWFJ4rUJJzTLTFUeg9UDUQSbtNqx1q8yJ1rb6ea5UwUpHJ7YhCS85Ez7TpvC6MsCkygN",
  "key21": "4cH4gmYgXEB33mikB2EBrcCs4GtiEyEFnpPJfi8CmWoGvHEjzUMWAdEy4YvRfMseSY6pZYpJkDt7GzXAcdmRZdEQ",
  "key22": "26ceoKvy5Afj98GiccaA23kgEXNvGP5F8hayMrgz9KwoeqPTjJumx8cSDZau2D43ftpCApXddodv2DWvHBsLKH7c",
  "key23": "5YJf3vfXmkYHRpcXMxv9YWTp8dvN5eyz1Ap8vpchDcW78NrXctoa8Fx41EuvVHBatcyofARqqTsS6NTKDUgqVadY",
  "key24": "31vWVy3q7edCv4Nyd8rHLJkXXif9ErxdkyB1cXZEtBLKM1LgbRpw4di5xsmrtZadSVU13PqdunQDBsz2ESMAocfy",
  "key25": "TT1KUzqGmohEcEFZPAq7rvHQUAKdKeiro66Uxo4UV1T2Hnvkn447zzatEiXpwCkn9EJV6uvFbsHi4KHU6RYtezz",
  "key26": "5Hy44cD8Fv3xeG5dHbtP8NN9EtczLx7gT2aw4FzxQBqWtTgVZcnd5JA5tXATyYviKMdVqFKQWTKqCZnjaB9YpNZo",
  "key27": "5EwRdueEM8wYfb8eUtk6d2sf6XY8sLJg1h2vRn9aLhrrSEN3VDBmEUbQyPgi2LcZ47z19p2ZedzShTszZDyuJzVV",
  "key28": "3MbV1sMowjwmd2iiegxDneGgaNJKWcLMWrQSUC61kaw7udMvhMjZDxN5h7FvumxCLkaVwZXBgo3S538zhe4RQK2f",
  "key29": "XpFKjhKpv5W2ZgZj7g5KrL3qFVLRsS5qBA25HmmTXiFALCNHhsWZXXigqWjg3gMB3AQUwDsEmFjGGv8xH1NHbhW",
  "key30": "4JWUxPZYPmG392jgEcx5nwT4NSyCfEkTRW1oU2cTU2Uc6LdkhYWz7pS89w55hLUwxYBP8Zme1TStHaS7GqHAYjex",
  "key31": "534ZKBgpzWh16Fm7t2xU9J4nB5T2KsWfQDuE7AwmV3zCy14cTWmPfKBWY6ai5oRVJ9XNb8skquQTkdWtzMEN6thB",
  "key32": "212HWFDSMkVbDkamnNMJuHUUkQJe2URDsejWzHsMEAzamsD4yAzShexjL2vsTSCZCiHouRN9VVKNh2YRSEc3TQLg",
  "key33": "MytkUK9NiBVNmB5FbBwPaF56pS8o5vwzvPRQdgEa87d5PTvumjkNh4iNvdEzkEx4hacVuRz6VRMHGQ2DSZKKqEC",
  "key34": "42KqAY4wdRYt3xvy7WgVKRsRGE59hDbJ3Ek34mA2fQoPSBzK4rmYkzbf4EjS8aRr6VZPisne3yL2WXvZmzyvwu2L"
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
