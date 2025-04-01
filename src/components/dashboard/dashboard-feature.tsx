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
    "4dN4N8QmG84wYbA6HnyMVcGF1HmJWabQFX5aNEFQ5UAVfMA4RmyXsuHzbfU48ZEXSiwFEEgVM8ACyjBZVcWZgT9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "239kvnxQ68Epx1kYVhHKzFSrumNpU52rfQRpJ1rbE67rC9BL6wzEXrbKQzWz8496Xt82ZVNaJJgvrrPVJdEx2Z5p",
  "key1": "2dw61xpAinrcX4TLrvbRfyYsynsvmusmK3USt52QmmajBUDq5wiYqnGuY9jFN4p2tcQtfmgLBX716RYAuyFwvdHu",
  "key2": "3rrYcf1APUsxiBZ6MW2jwrLwBubXzmkwcjEQ1KWFTUXmiCR2WQ5sbA6L7JEr1yBfS1M1qESh2pmiistPDpq3PeVB",
  "key3": "5n1wtYrUaVMsvvPpuXCDrt7zZbRxDh8a4WFL6gra8NhDxa2R4hobXLQtP9AoP9ojJXJsXkvrgFuD7Ttirw2Gi7SE",
  "key4": "4jm5WEMJHJoELnLDvaStdow2KgUBifkVAm1D85mwuy3ZuzbFX6pXDGRDKpE3JAGzWvLH7PuVP5N53Ksz64jbBMR9",
  "key5": "2zsWTq5LGo7ctxYaHtRjNGTHQexWR1PHXQXRYd5Dv157WPmWEYpj8DWyR2kHZ68k1wsWuC3FeorhUgfwf3vjkpsv",
  "key6": "5Ma1PLt3ZS9KUWZxkA4u8DFt71J8Qt4CR1UgS2okkEZjsrZ6ZK6pQcNQBf5iLBoojrZ7jaxPC4KDJuiS6M4jRkeF",
  "key7": "3b1Kjp3eg8paXXTspdZjGipKkjEn9Dthw79ofGm71aJhmxUHiCnT7hccQRC33bcW8c8thYaUnzsnmindB29mG9aW",
  "key8": "2fbqrGgy7GuFMYVrmGmEAU1LkDAhEfQknK3aoD3PF7nXohdNodpk2iaafPUNmKortPxAKDHJnBSdADjFNqat2D9y",
  "key9": "T32EyqbveHBnvVJceFHwd9RYV8QbV672cNUwmmwh97JuA1AQWJj1iAcZS6ErFnWnav2PEHgJgXjCWpLucLDnAbt",
  "key10": "4K92GDZ5rHtw6g5wVZmqpDwZLMWHBByrNFQhpFmEqPVRqShw7L1WUXfm344ouYb7sfSCzuFVmQgwW6vGAH5QYLv1",
  "key11": "pvV9cRe9NKmF6HsH4Q2qTZW84Lr966xJ5s3tcobbwAfx9pUg5MZqfAFtJa68NXdhFn4LKfavbT2ZmZEYun1S1JH",
  "key12": "28r827DYbbjeFiv7zujTMuoj8XsySkY1PKHReMjtgNG8oZ8z3TCUZ7iWazjSJi8uicmtdB2jn7p3eV9xX6KMxR7c",
  "key13": "2rKWbzf3yibCawrVhWUAHf8pzdAC7dgk6UvrhLNaSqt6oWTJsFhMKhDKJ7yUCK2fM84hRYUPfCeb7UdrJF7ZoTLY",
  "key14": "3KPT7FNSS3MY58hduytdXyrEbYkKXerLkwJaMpua8LD25g76qJFw8Fypk774GRanCdpoCUDG5YSdmdnKbCwNXvz2",
  "key15": "3uJUpmo4YwFVStU5FEk6WN7eppRZvXAu1nz5TGFvyS1T84mtr1mGjdH6KhxEidWeMQcCngGUS98DwZsopCp8ZzQ7",
  "key16": "5pFRoCVst8qB5YDR828rt6bEswGUUk6Z9oDV4ayebztsfX7GziNFXQNvqfTGJM55Z7eKfLyPC8m3WRw1yb5hzq5Y",
  "key17": "2pAoFsJS29fKoKcJuAiPXNtPHFQ2MBZFZnbtFn64SdjuLwhyt6e9cV9piJGF3vFjNtr8QVTFvAzywrQt2dwCxSSS",
  "key18": "5P3HpqXpJcCmm3TifzEQN4PMn3V9qAgjr8caB4XLamN8MMEDUn8hsrFSfTFvgh8WDw1wrKbQpW8DN5cX4fRPCaDq",
  "key19": "5FpCvwUsE1vwJyo9r9TLGTXfbEFBS2Zosw5x8HNqrwPEauJ1smL3gV5j5Ti93yPkzYLgm7VPvwJW7EKrrykSJWSg",
  "key20": "4N5VCRkktSRazxz1qEf9AooAGQduPgmJB6S8ZMeHDvQsSTRY2DhPUBF39RZnQEQ2DLHZ5Eo51UMcgfvqaLdmMNUf",
  "key21": "bh7Fy8mWFxFVMqQEBv6tmfA4GwKqaMKvFA5aW5KyTohuiGQ8YXTGR8jvakfAn2Dp7eKXP9AW2imsjrn4XohnKpd",
  "key22": "3nBFzVZ6EhWZqwh6dWr4jMjRfjyAmZAQJZMKniXu6uHmAKSpRJ78UTF5cTsJnihsse3L7gASam3SrShzoky1EYgn",
  "key23": "2ypF6JiixbuWbonyBKHQw8fnAiihScKPCXGfTxA7MKcBeDskTXxxXEb3fxRJUPa2wbkpitQ7HBFsPy7PWnkGgGvT",
  "key24": "cBFnFwEu33ahQ2y9JFczit1DSEBSYWACs48KG2v4BCVeYeVKiCpSaX2JWWUUr8edK7HdgzWkKb4VguVVacNHFrc",
  "key25": "thynP1HoC9WJoXC8AqxygqdFDnjtmXXYrJJQurcmwBBnKWpbi4C7qWRUgPuCgimDf7vSesGhRJ7bJuBJ25vxerV",
  "key26": "MBHGPXtWBTmfd6FYV7fvQHi9S2YJuBqoUVsvRhSx1uHfZkAzNyKm7K9paq5eevYe7rB7K94r2z7gsNziWpe7B1y",
  "key27": "x9erSA19asDnAuZssKgToDfQYMDsJ1Yh2QSH7sdkPh4GtxS4ZXxaL7JUSsEKVpTnNtz8yJqmicD9Lnkv2n3nWRK",
  "key28": "m4jdh4NoFCuKB4UBDqsst1hJ3e6cFeDjdGCfvjhAfLNv6hjvvpEDjRRsrwiw5v62Yu8uwGXaEEo6j2QngCDHyXo",
  "key29": "JaGVh97PfKKrEvxmjkuD4Bt9ghkh2g56ruuWn5vTdSi6CwWwdJvU2hrHsDaPCfV4sAopSUtG2CMcXkfe3menNfq",
  "key30": "2QWB3Ner9XvGrkuz5E9y4GmgBhqxTgiVjjofbJph5ini9VVuQtZVp5oxdafRyyJ948FqTc7GnnRaSCFephRUfgmA",
  "key31": "5s9bNRZetJYEmfYjKvpfHzZzsgGz9ToLgJJR4MXKYQChgo2HhFNXwbDsRxbpRQnAhiUxooBRhfYRTtWUs7tREfeZ"
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
