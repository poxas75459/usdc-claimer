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
    "4hL8p84xU3GiiKAgTF5jCto4KgPrBkt7xtLqmgqTmUbgozyQuU8TcgdiYGUZgQh5TxZjGz8Pb9nawRPzBsKzJKm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G6vvNUfMkioB7MARASNae5KE31cztFkjBPruNweCRZ2dnFVESHK5HyTBfB3GSWJVS4JThVsXuUHsX29S75zAuAs",
  "key1": "3W8zggejxmpXDRrcCZN4RZh6kDgugAdFezFsM4uF38fd1turePQnAuXioLmAK5GC8pUtW3BP7jasXMDSsD6eitW",
  "key2": "5brqx4mYThvv8nabSbBBSBB3KMxgfvkCLkk3hze1gXYJakjGTxjFyR5Tt85fcE9KrTtdh9idwb7bme4pohdqFtGR",
  "key3": "SYpqNZSNC6xuqn9sMZ3xkrhTcGHw31363jRuDd3GkfeiECGCHQjttWvYTTs6oQPjRfNf2Paup6DP2pkJBEE5Jz2",
  "key4": "3vELwaGEf2DMPWfkgEMN2yDMW8cEmQQ2iy8uiXyffMGMSCaC11bp2NshVuafLPegwtDAdHCns4rwai1G6yjD54mK",
  "key5": "VABERRfQruZwAgWaGsNt1bU2htJ9xfo6be8tJhoBTJsqcYqoHk7S7WcTZsxC7sZ6PUALJp4twBc8o4KkRmgwEGJ",
  "key6": "9E1puoreebwsos2WhD938DtFg9U8PPruLRExzN13UatVVf7Gde4it1mLguoEBnXtjsGHxxYJWYQ8D5KvQGHv2cg",
  "key7": "5ESHqWkhFmBPYVKa4T63FjXiVpUDZ1CZbusc3P33zkgXA3gwBnWyPFwWg9tyNwVvzBtSqX6TpTjZ2g55AazE5qif",
  "key8": "41pUjTBqMr4kZo6kpaYvFQLbugL4KDzJgidTCUDQ1JFYHFgsJE3mrTFjfdByyLyXj2PkspNeMPCA1QAmCbcQaEKF",
  "key9": "52J5yFG61PNFpmaGgNeDpViBjcvAgaFPBvFv5TCDo5dHHmpjvRRJDRZLUW6zbszZZ659tmYCyZ73mVNMZmETFUzK",
  "key10": "5FYEzFSifuFnbQLV8ZeKFdnuFc9b2XgAajFxsZk4Nw4PnPtKAT8twDBVhQgZFjUT9r3LeWJ1n5My5WESyvwcuYMY",
  "key11": "eFXMnVidkpBdaoU5qAMhMxQWy4WEAwTa7tp6Sdr35nwDwCwrTUi5B5PT3vMpqrp9N7J9dAFc8QWDj4Rr45CDtzS",
  "key12": "4fNBEUeoMC3VyZbdfawPr378xo9iuzRjwwtfBiwBe5EGcGjtQ5CGQrSVvqSQZQFT8PY7wd2jFQPJo8KbTjEkEHux",
  "key13": "5SjRW3ELdB7VBkxSZi6rivyb6p48h3XVyKsn7ZWNfwsfBXEnvuexFt9WDGfGzgdJFkFXGfnNZRd3oDYiCWpW9fiS",
  "key14": "2S1ffCpXzUgvCm8aea9iL6T6kXkrfmgEPJiUvM1Mds8PDyCpX1bDt7wtNK87LVpjmuUwt1HtuM2V1bNuUs6VSRD3",
  "key15": "5Cp6UrYZSsGRo79yj9sn7zFB45eHbgva7kzk4kGmrr9mEq4Yi597uUAHS2S6Brgjbqbzw4qR8nWBCvmFWaxZtbWN",
  "key16": "5puQTUJrDdzS4PQjnhANNbkhiFSfv2FnXyx9BiQZ69NSWTUFuNjCeb3itS9d6bza6tpdCcpDapaTrkUxqdLah9Dp",
  "key17": "2bBvQJcThvt5if1gJXL4EaX6hi6NwiuNnX3GBKrQpLf1apTKGPU6ZzXHTE8wDEDoADmfDtgBosvvTuNk4AMuccEG",
  "key18": "5SDcKARP7iNb7fERjbBiKFYEWdbx9Zz5a7VhfNHq4HqwgB6wGgwozDGgRACsBSubFvvzC4u4qgdmJ9dQ3FmdmynA",
  "key19": "SfJmZxNXSeJSRfXVgLRgJDPq7mieNhbamX8siPp5ebYRwVWVVRB5yBQaELijyLuQ5DFvgqHrW5WVGStHso7Qg7A",
  "key20": "67fuFzEhJ2rkBkMJnKrRmdXMsFFD8uz8wYfizpLnZggNkJGfuPDKBJzXXwiAK3Zk58fWCC7cg5RpXdh7FA8bAgVp",
  "key21": "2RtcneKZ8R7QD5ng6G4b8y6sTxzZDGp78byZvZTJQQCDieBdxdGj13bzU81HV1KYc6byeTYLy9vyoqEasLXs21T",
  "key22": "4mdnweYrV7iAcsfquwvgsiwoykDET5VBDC8wENjq5JQYYU9AabmfPbiVJcx6o8qNRi4oE3WRAC3zTCt575aisQem",
  "key23": "4H7dCAGwG32jkygdJKRL1Nk1r6aK9D4ECHDLkijQKHGU9vfApPVaWKRdbLw4TGdA5RSKub8ATUuyNsEuqwuEL4Ta",
  "key24": "5HZzeYr62gcEQaVNqSZhsWffg3Wj6msjZmCPpSsauBz7nqG4BZWyownzB5YuMHeMTLjKxRXdBhKkhEy4Yf2CWoyq",
  "key25": "2Hq2FY3P3vFrRg4eGHZrqBpHrx2XEqThuPdmABjsNsHhCKz8uK1Y6MgA5tRmsp9NECW9BFAcc7sUjUK2bZPRWhVP",
  "key26": "krgVAyDxopAycKKhgQx2AZ1JZzapZAcVuq2qKBbdZRtJyL17Bhniqde8o4bEZrQQwZPE1E5t6beUwf6eGYXDFDD",
  "key27": "5X3puQUHVpGnEh9bsyauciD37g1411aHsUq8eiNYT64851D3cNVbiQBVfYqPyNiBNtrJJAnWGZ7hG9u8R8xxjEge",
  "key28": "2qQi5Py4U4EN6TmjaJihSrCq4Z2AaDu3Fw6faGAWbZ82fUp5quhqFFbUrUEEdzYF2tgB5YTk3XhzAzFt2gyyGLh8",
  "key29": "3hfikUK77pdo6uxEbu1X4zVHHNgMqWSL5yaAF4TENBZn74zZ6uMaMR5VTyNpswRL6yte677uUxSiS3GuM3ifLfwG",
  "key30": "55PsANWJ5Kva8EAhELGC5brWbUnRg9C6KQGhVgiWyr7qviKSG74G54FuZqonLFLcGX9n87mf1PiQ317WXgjjLjaJ",
  "key31": "47PmfsxfkxaTvPF2Srhs7sW4H37GQs7wckVxZczGBtvNFH6QSnYX6AtdgAUZTD2z6fjCLTLjpCYxGRHbjNwfHCce",
  "key32": "3oDTzYXyRnLgCYnEMRh2nq5c2mbyy6XQqCa1BVKTC9nANsehwxfWJkK6YkcajuYDGAB2TSAdAjT4qAysABSFd8A4",
  "key33": "Ax2cSCK6TihZsTkLSJimeggLHwzwdWkFEfNvpyaFgsAAwjtXa8fjHzvVaUYvtyneC3Gk79aQXe625QFgK7J8tSV",
  "key34": "2AQRjpGDSZKRiF47ScR3PuoG2L1wFMavwP8a64zh1Vtv5Mj6iMEpSp58kNHeUWUqexnRPBzdfiYwb9FieQytbuP1",
  "key35": "5SCnvYddyrk2EjMtUrGnne5b3ZjQGwDzLaCdHegcWPVfkxUFp8j1UCrCPaspzrNvKooYf1PU4kGPf3XCk157PZoP",
  "key36": "4v1afUGQbZsaAdPZEfJJsYmeeeFjbTYbgTBYmGt7kFbsK44kprKWVT78BoJzM47coQruTHDwNcWk6LxnBxS7w4Bh",
  "key37": "3vsCgu1PKQLFNz2yRdL1XpZTnPTr9TYu543b6wtrsazNPsJxgaGDnApJdncrwYLuSy37ffArdMqMbSPy265eRUpW",
  "key38": "5MpaAgm7EUxHQT6ze1oVXWUyZubRZVA7NB6m1ztDmycKjkBZYo2AbkLBRo3cFayKeSyL1Jc2A3Zo8UzFppvjgJfr",
  "key39": "5D3WnAFm4xJN1F2GrhEmWAtnTrj52ZNqwMUA2Sx9DECKnGysRnaYtzDn7CJD5cVqoXhYhtogzMLdbaGN5uk6QLvh"
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
