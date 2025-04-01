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
    "4tKhm26Hm1ZCqk9LUKm4ooNroYLpdRVgG7AJENDTmGLBenzGNEs6iedYohGVAZX82sAS2RePbcHiWPajnP5So22k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32P2qaS4Gh7TMAQF8jDWiW8bYtuLrXHrdUJAqJAAkmzcBDEC4cR94qyzSSV6JYieKugTXTKqJkNmKcCXsFQdG1PF",
  "key1": "44SWo7TsN12iZuFVUtKsRhcZeAEskBMwDjfybFPDvJAYVaZR9ZHXsd1nxDPRS3e4srEjqcKJ4wWdrxwHqBCeCLzM",
  "key2": "3PEVve1rEJYBrmgafB1QqYHJNX3ZZpMsmLwqNFmsSMCWp64kT5h6U2ZurBpEu23etmiGuhrQtMTRYx1NaAfNxvkj",
  "key3": "67YFxVKmFUiYRPXy83GvGjoiMyuaKXjwaK3B5NXQoxh6r8XL9EsDgEJBhf8VLXZHzrqX9Qhwpuq8B4aPLAjxXRw",
  "key4": "3BqWr1BhYCwMKhLj1cTvwUZpayUMgXVsPxZPns4AJM7aN6CFgz3AVmUCrnYWHrM1mc5Q9SCBk2EHJS3wEJqpgCtu",
  "key5": "3QrwoRJFrJUGcZyUrsExWjzanNzKCqmiWjJ8bQnvTinMxD6NgqwxNuYVbsff8pBf3Nvhpm2Z3EMpaJtxvJCP4Msp",
  "key6": "3NfmEoMrodPmnAmujkvPGikFHAbiwT8v6FjMSzQq2mXxUvmwouDcj4tre9GKAewwJe36zbQjEbPqAG71qB4Mx5Qi",
  "key7": "4BCT2cq9uk6KevVx3QevwMXKb2VoGKnjdJ7DtbJKez1PU1bXi5Hvcnzxh1x5tP2yo6v87dfscMktUre8YmKqAaRe",
  "key8": "3VRhNwW4zKm75paUskFH3kz2uWrKRrh7Ev8f7GqaUBC2H2zRif44Xwey6FtRhqPnmd6NgbxaR8o6cudLeDakDNBP",
  "key9": "5LrqyLVjnapFNDk3YbeYnuuKfcrVFii6ZaZHF7bPxKWstz7KYtfARtEkTkXkMzG1HRAY7M6kqvTh9PS7dT59s8E5",
  "key10": "5g4nhdrQcGWQFpbq3xZCfsZmuqHCqomMZjMe2kFNZEQNC4cGExDY1SLJw6h6NMYmvgxWFm9zofWFPR1K8yZwsBNS",
  "key11": "5bST6dscrKBSTZXwAbEjGH5e8aULjLrzqmTCQ3GaNDrhLAGRw3hekkTjuCtrzwoUrkZhtBkkzcSzC3GkzAGRSc7T",
  "key12": "2Z7LwTkS2bzhvk7j98JK6kSwz9j2EkiCjKH9S7ZVWALyCky1wpAn77VWebWLuLnhbdVLnkN3sLpYpJmgzrCPnXRT",
  "key13": "432pxxAAs7PsAwywxuyvc9eMaxoKCZfvfoo2FsqnqwGN3e7bRFMBkQhFe1qRRLGvpsMv5Ykan3SoDEbb8JdT364z",
  "key14": "gbQqDv5QC86EwTMZDFXtZBAFzYenwHmK7g2RkVBFNtPX852RpjGgrJb1654rasC5mUdL18xvrQmYx3VSUybjY2X",
  "key15": "36i6N6PvXz1dPnorpB4yRt6WMnuLBZYmvNk1m4KQpwtXFtd4Gr4KyB7tC8d17WS5HzsCNYoA5PS1rAZp1o2FoWgk",
  "key16": "51Dc8fV3HKrGvRxax7hHcijYFFKYG9cDxoSVKUkPUKdV2xC8GhSeZ8qGcBNZe7VMqn5W8Eb4rBdS5pniCCU7sb6u",
  "key17": "57qkLyBxE6eYqcL4JG6iKwQ38YZTbQqqWUJ25BFpnVtLFXDPued2ksTQP6XTH3bf2MMS4Z5p5KWDBPuaaeGSeTGn",
  "key18": "25wDEV2tjNPvS8fDpaD4giCraGPwYssQbX5agf742V3BBsgW5cvjBpq3ENao7YgsbsNMPaZgqr255qg2RVU9qrQP",
  "key19": "bFYwJeFSTWo7HZMYs7Txtmw1CmczncAkNmjxnpgHyukiv6YGB9oRrLsgXZCQ6WCVAngSXq7hzvjvV9R7SzZzTXi",
  "key20": "4rRWYpmS1hU6nFm7fzFPmPoAaeHrJffQEwcG5tQ2zhjyUCT54TGpRabjE2SDL5YpZ5eipMavQEX6a7UspZ8iXWdk",
  "key21": "2UKuF4xsjDGKWxuxXcyC9mt1r8qScSG3DT5eNqNUpdSD9srwSYp4oT1jBmTgCB728mscRvfYLa46DVXHSCacSdfa",
  "key22": "5SysSSQjK4bG8t2cdnqQqk1zGmb4dVpcALvEoXqnMivMCyxq5uy6hc7nhhzUWvyR8yYfFBZdDX7Bg9ZPp9osJsRZ",
  "key23": "4Pycw2LcJ8ovwzFhv74mmt9SbZV3LnStVRdSY9cpNPVQk2eB2emjsAStqWhPeGmxjFfbKi94noVDBhRhNjSGTTFR",
  "key24": "5oNCkDpjZA8dLefWm1FxwyvcixmNJqueUw3qUkmUp5brwQ1hx2srrhrS9TqyTtX3w7k3bizGRG6Ru5VUdDq7XkkV",
  "key25": "qmm7XZdQPNC5M7zEZ4QQV5os1ymSRnp69tsBex81D4AZDECE1q7Q7yq37YZfzck1JiFb7E2UHAaTgeFWvoE2hk4",
  "key26": "PbB9qCU2B9YVkvX8hVTNEKeTN6yRXCzx5iZ72vDYSvq6Set9yTKoeoZmMaLdAgBeF2auPyri7AL6vTxfwU1imSq",
  "key27": "2idiByWietQ4J2udKJ3w4P7sXVYcUgf5ffo3R9BDxDZaMvcYegbBFgH8v4aedZuiLm33Z8furbR77AU6kN5T8pqV",
  "key28": "8M88L4dSo2MDHMVtftD4T31jtTPJ7FiPnfbTqrfxt3XABxEqTpQwJJpmh4fkeRambpZVURudPVz9Nnh53xcAKRV",
  "key29": "5smJiSCHnCihRWqiAW4FEFgSAkRw2jf3mbpjg4rNNYZsi1EZS1iEa5gpTtYJ9QB6UmKy7R1egVyWe16nTCuuQxTr",
  "key30": "5yhskPAHSKknPekqf86XTxJAvniPiCPPaZdFSbB7oDn9vbHzAXeWLDZG9UyFTyvSUjQnVc9AQTTqDyP8SwU1SMLL",
  "key31": "ATRZCJyGELiWUPXpAxShTTXhXz5Gv8oxqbwUespqkEvCrMsrqZkc71yFYSnWssfaeKYNgsRXuPLKW3UsytRshHu",
  "key32": "4LpjASMV78bZmKkdxAq4F1WW47q4R3M4j2vuR6ndd3LbHrFnFJj99LRfpE8mFgE52pCndst9JD8ofMq9dExtWu3o",
  "key33": "ndeHdgg7RsSu22mcw3Fjx5cDr4fJFHdbXk4WstYGLu9pXzjsq4YKzBG9SJKXJv73e5u9tgQzsyKyR9LsCoiYUoN",
  "key34": "gnEFsKhH6LrTGXZRM6gMChTjAu3qPJfdf3pXE3vhTpMc6NS4rmqbFer9qAdeoBYg5TVf7niz9MC9VQ1JFDCkkyE",
  "key35": "5Zj3qeZNJSGiZ9fQSAzZJzkyYebhYp1urbczeG1DnzpEFE8pFgsv9bdaHkZYsbaPn4vYdWpSr3pwQJYV2D6JG4dR",
  "key36": "4DD6hWCr8GAtfMrNJKovWWLFCWoYJX39Kw3Bg5ToBp8cgowgm7Nd7XN9ofKZP21zHKJFSubAmBP93QsFF9gSyTjD",
  "key37": "5fd6LAq3mr3xbopU8AMwwReQRLtEANZSUXxeFiJZmZPP4exN7pcXFmxjrPH94bNstAhSN38yHCJyZo8g2vkrSgNF",
  "key38": "4NdHudQr6xH6wWRDEzquEMrTvcbrGaZgqhQgcyNYWShno89im1r2viH1FFScDg3Mxr8bo6wtHn5MXWG7JKqrt6fN",
  "key39": "2C1B5APsphuGqtMv4cLftxfMSiFm4T26sKEZ3MtprcnbhZEj1TDk4yMhF85yKzudpr5NfsDyaLzTfGwoDMfDhv83",
  "key40": "4M4SkKuWYYhSZ37Y8HWwhnFCMAgpS3aNBos1DQjMf7VjvPGWSACmVXzTVCrJ3wRZtAo1qn14CzNaUTzxLgrdX5Ho",
  "key41": "3NvRdtnmDA2G7amHDWakYNbwH2cpiddAeMW9MEm1S1A6wUhUeLtTidW6eiXSviS6gJTGxUPaSKmZ3b2bEHEC9BiT",
  "key42": "4pDfquH9aVK2RcXUHPCcH8dUVrYxrxJonXJZw1kUQ4BL1cSQiiBbv7g6h1Q8BQdmo8ZPxgwQEHr2TjH9Yokbbvuo",
  "key43": "5rmSPY7eGz6WG2jfgtbGy4jH8hkjnvjhHJMZRFcpkBxN4EZJ6iN3oxndRa8mxj2j7bJSdiJB5EfyeFn8yE76r16Z",
  "key44": "3MbvS9CAep7yQ9VhMcatRcfpkcySsFdvv8kbHm1pRCjb9aWEW2Ur8H5bfUMzyzGYA2DzeMrVyneQUSsqf1n8cC18",
  "key45": "57gzuhqahSPW9LqYC4CXF71FmUNSyT8E9dPeovGNQozL9iBBTRNhJGpmGPta2kf6WPK5DX9UXRusH6bApA3nDXp2",
  "key46": "5UEh2w3ddPTNtS1EATBhmGTskhXryBTPX5XorimVBarxjdj3GXzEdZ5pVadyvbXieBwkTKK6aeQSk55mKoKJmFGa"
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
