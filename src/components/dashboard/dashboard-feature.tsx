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
    "ghbi2Pu9ycCCKTXBqhtLrJxZbJBsXmmK7kUjwuy6ENL7gEtPhzEsmL7wTnzh2f7yiQ8JoqWm6SZTZWoMgggbRKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phYAELXq5qF715JBigMRkSfvmrugtns32wsKvY8SR6FtVuQMp6sbjkEocummc2S4RdDB4uYch3hqdH8qB1FcBLC",
  "key1": "Wc29cZ3qWPLjQ9NXacyUXWmZRjX8SRzCCbtsgSqtT4Do3P4161oab2cCbzkLiHvJk3B62EU81Lt1ixGKW81BfN1",
  "key2": "5pfu63KM3iaBhjuZw2KjavjS4ucty9bsQXztBTeWMkn6Su6DVe68zNss9m7QJjBBX89b9Eqob9bH66XCDQYixcWM",
  "key3": "3a9kEsnnoAFXrJXK2eqX1y1FfRYmD7Eb8Bsd2wS3tcCyohuVfoGFaPpjYi5EkPzRjSf65nrTYy6NwKWMsKfiGB6G",
  "key4": "5pFFD7BqjjW4oDiMwqk33oSkjKFkBebt2FHAS1MtFYMuUf2y3tvMh7coEteqYac7bo3cpSDz1syT3hNZhsxbLnra",
  "key5": "3Lo3zTECizPeXgdQjFiGavKcp4pycCszc5WN58a7BKzm2nSvKojUoNAXE5a7BDSq9vPuiHmG3Y9BpcKy57LmZg6G",
  "key6": "5HchRuntHo2cwGwnw7RhBXidtohHu9ED2HY8Mx4SMuaRcxZ1rpQH45afHo4VRUyKRQYXB5hvZT1rdfhsR6Yxs6PA",
  "key7": "2GV8ye6PKBnNAgCJiJEvKTHZHD7fwAkQNGwJEwhsnSg1ZBb9uBJtLNDDnCAAaxiNr9R4TFgYaL1iEBLFfdYLzQYD",
  "key8": "56MVyH1e3Q67cYwCnhVEbXBEGjhzAupCZPHup6br9uvg69EXLqxjg311xRd7GgpwRkwjBgDFegK4m2qxNmsoJJVo",
  "key9": "5biPeVSvcQtuq1vQS4hSGPCgzXbuuAFVA4nbhsbEQ9G5RrS8VCD3E1PC5aJhZqz8JCPM2dqqaLhADBHtTeKRkSs8",
  "key10": "5CBVdxCV36re1M4oTFT3P4Xagpps9huj4XJ1BgBz2v7SnK3VHQNXF9N6f22tMQxzx6dYLTQY7TaxUz3ZnnUEHHxY",
  "key11": "4kjW9UxYJy9wXx99dMHQ42WSbiwVGQfSHJgn4FRFGXdxnKV6TyAtWkCx92vyjXQchSer7NVtp1dhXvyfyaZYErba",
  "key12": "37cSxkUpyNQeFtGWFwsrjfKzJMnshkPwLAqtwwK5eSgyAvAEY6yDbok9Zi22YEMPHiSBTvbVWCGVpqkr5F6qAinG",
  "key13": "4hLSX64ZzSJwM6me2gvQizkCyw6bYujH3X5r1La7mPCyakw9KjDJKmcTB2xCenn9359y6k7pZtvbDH4q1AfBXEwe",
  "key14": "4aYnFpkSQU2MciLY1R4RpBwouLttQ1zwqWyQCzr64Cc3PP8ubxi24fXG7DNeatq9fpc9Hq4bLapbNHePdPedvjLz",
  "key15": "34UXchr33bKXxWvqYpGW6Kh9RKGeS3Uty9vKobqNqQqBAQ5Q62Q268CkcmiNC4o7tw2APVJrSJNFRpAUt2LSPoeN",
  "key16": "4o5Rdf5z4JpuQ9wVbhNbkxwVBta6jMiRutMiHFxZLekFbkpUVuNWzSoa3cnJpfA6SScWj3RUZNRGoPAbgCnAKdr2",
  "key17": "2qW9NwPcunpEoeCgYRWN2AqQUjwpGeoxHVA6WuCaXteM2xtYNkZ62gTjAoBpjHCV2h8w4CtLjiCvQt757k7X7fW7",
  "key18": "3B8c5bUzjtk5ZcSKgWvpyJFh3Rpqmze4sz7GwCUspLMDYXFm91icwbKb3ZuJeK7wwS4AyVvoGtgUbfDZy2N6rK2o",
  "key19": "2zKGKr6v5UhTnFFVcjQiA4AniwcANQDrfuCRkqH3qmuCTZn8HdzEGpCvGUHdSHgmHrA6GDV5e6S66AopmWkX4jFo",
  "key20": "2ukiTHw2pZcrJTYXY1Aj1XbW272da7uQSSR819uRHhYyy18VQ4Kydhw8sAfRqnaUvS9WiMzgcyRkBCQaW7dvQ3W2",
  "key21": "2vbLcaWaB86sfhMFHB2L916zVtRXtYrBdpsyAi9Jp27cwoFy7AwPsAsuGbVuZwa3PHriqGgy3uw3tTuqXutADSaG",
  "key22": "4zTUdaieiijHJsk1whxTbz2KhLpHaWWJzhUZSh4LJGSeZREYXd6FuEScCD7UsYZgAfL7ZNMiRWZhkEFm8pqtkZwA",
  "key23": "3JXnd7SrR79EUyaFaHjmQ6awsScbmjfqU3PMx1jrYEqJvpx8JYxm2hRaRUUHPqHKizUdpo5mvSBxmZmMMMzAxNfz",
  "key24": "63ThX7pTCeF2jBezf6HW5gCFVK2iRrEcQ95UsEVZCywEqqsnhotkTLTKDUgAEm1WjBgSZXMAb44UH1wAXJBo3qUa",
  "key25": "46pJ9sbNYCg1YMSZrbLBuS2mLVzx9k2sVXZjxWybgvdpnHH4JQc2Ep4e9Vg8PDmpc9CymcPobNGuw3vBDVECuKsu",
  "key26": "3skuj224bW2pTu1Sn1Hfvx7LEDZZGHpNK5nZdT3NsgfNcs6giAzQGTBGSYamxKQ2VUKAYfPchtCV4NWZSzsUMhvV",
  "key27": "5Ykdc8rbPj1DnuiQ9BKwWJXX3rKCZgmh6nwd2XXJSB9cj9bLDRTNHjxeiss7ik2crxsZbRrMELuBcu1nHBLjVkZD",
  "key28": "3gHVJPyvvMLi1vx3T5WgTHrAFabuaMYN5aWFqVrPr62QNjYtKgWgdVM4kz3mGHkQM8tM33x1ekFN895evD4LDS9x",
  "key29": "67gFgD6kpL7ztDBdeJLPUunJ7fDh9R91pL99o2MwM8ZZ16dR3Q3L1j5NSY3qit4bKvjQcFf61hPBYYR5SvPxqhKy",
  "key30": "3B1BZuw62zhoT3h7Gw5yuJ79VqxE44qnRBdvBiPh6Lh2gTBMDKFCNryp6fyiGzm2xyN1TDAv2VAVYTg44bnQZ3D1",
  "key31": "3V7r5PjYK9EoVARDoXLfqDbQibEVXK4XfRoy9jx8vxbHncGYZ2EQyF5MSK9BfJLZxvbW5Pkikn2MmW1jQskTNcBQ",
  "key32": "49cJ1dFaUAJng2KN3un6gWzpFyV7CBbZy4EdMc9ZBVRe6MFEteFfvx6WS9V3NuKD94CSAEX9Q6vUX1bmNhDFP4hy",
  "key33": "2AGqhjurGDHkRS8cgAb4zPYrTBTgf6ku9SaZE1P6BLHHkD7uhG3X7ipEVPXretq8LsDj3TycrjpypzZqzpcneRfz",
  "key34": "3J5Y22fapJWw5yV5VGiURsgrQw5BTj4R8XRwgnAha5FpBqyN21B7d5HfRhQXoJ59yP4CTaJKuKkGqPd1WfjWjLRK",
  "key35": "2bkMYN6mqDc1cqSU1kDxKFdqpaAzJCQrgMXYfQtxhtvyKi2HvsuyrHi8gt9BmKdeTJ1WaYUaB9upwnGL42wWuaVr",
  "key36": "28PReU1xJ8N4JwYrra4ZyX3hoPgxjviDXBVHg9mKUbYMGiJ2yVuqqDb7Y6aVKG5wtngdUCQbHPGRSJ9u7UF8APbH"
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
