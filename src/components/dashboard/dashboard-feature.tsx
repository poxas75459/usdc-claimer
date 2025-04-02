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
    "3AFiFS2zEiCUmWG9pJ9G9YEAbfrGChizzFznLsAiac5f1ughjsPYUhoyBT2UaYqV11SdMXjUk4f88mbTYTR63dEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36nPFQn6zbcfuBvctrg6A2p6BMWyYZo8g91QUQzdYWuCxi6sZCNAD7bkLfvRnPE1gTK5JATWa6i58tsK6YpEp6iH",
  "key1": "2ijyyWXuBnXn2z7r8Dsf63PxsYbaYtKEz4muREeapoDwHjAgfo8qxf3tJj7M124LX329etiWVcJVV4dBiTW829Yr",
  "key2": "5Fw1L1N47ySfsDFWpQgBtum1KtEJ8KyrkQJxXQBFmVqk44NTdrEDf5Nx7YkABC8yYdvVMNEHJFG4LSWpvwoD65Sv",
  "key3": "4biVXdGPUicEBqG3mZNASc3f49weoZFzsQE9XcGwMT1m1FjNit5jFYgSwtcsyRfbecBNg1gqofEoh1ug8ZzzDrcS",
  "key4": "4PXrPv9fMn3HaLMZAMC5tbh9mAaJMVhWJXMADXtVuJKWxfajGe5uNkfjqBXehgWU31TBKP6ppPWjH8AYxYjDXaAd",
  "key5": "5v5eadRDKBud3hzDUyscfoxRERzzFnTLPfvvPHnACxSLPcbNzE7PNzENNdQccuFWUxVmfv2B8JRXjnwg4poErwkZ",
  "key6": "4XQsv3E3SiqqZj38XN1q5dYByKBPM3fEJbAQ2LV59eAyNkpEyLMJPv51JnrEPxcJgQyCmL4CCtrrC4JcKWsySByZ",
  "key7": "5ZFdzb8ADjJRvrkwtQ7HiViK3zyczkNoWDrgTpWjBHzSYgHro9NmWPq2NU5wgRJLE7C8aD9i213HKXvqn6q1oUr1",
  "key8": "5NsdMkfzziar3eH8gS73tyBfAYGWzyYkh1YH9AufHWGcMXjVK4E6e1weRQ2bkJbk88Af9wi4tfZsGNKBMpTCDFTx",
  "key9": "2MpzVEDrUPBNDeLygY4g749Bei2eYXAiW1kgmvDCnYdKxdzCEYY4DMqPeyoocik7azUqyne2h5k4rmozTTDzHJEB",
  "key10": "4fBFKy1L4Yh8xeQG9HrZ2AJXHvBD1gjpnJ1yBma83N29Pt8csxbvtcEaB7XLbigKGr1jUoonBuAFzoTPcKr5Nvsh",
  "key11": "4guU1VvqoZ6TeeufHazPDUHMRuVv8B3s14Npj1eNi4HfvqxcY2WQzHaLMhnUDY5bFxGdxFVCrvBfSyf3yUP3oavB",
  "key12": "672Srf85AnUPfp6yTi2kGjPxPaEqytaZUVAyBKnL1kyz1DARARdfwW8jXiQJZk5KeAcTiPWiNeJ6Vcs3QgWykaAn",
  "key13": "4f3EN78CFdCSiByQbjuxxq4rVcoyuKMdPrzZa9cssmodvXQ3G1YNsuZvSs5YfzmyP2xe8oVwy9qAPpyPReHRxcxU",
  "key14": "2qLQ61pzwWsn4J1hnaLPkYrzvRhpEezoqtdkTGwahxrRDNDZAMrNEhVqjhkNXcbC8Q9nwH8ubi4dFkqvYy23A19n",
  "key15": "3jJmKeogaB4Za3rjrKhs7Jn5JVAuaLDtxBt5md3ELKZA5qJtSMBY5wMtkJvnK5do8pyiGhAQFKpytyQT9m5amXBE",
  "key16": "5EptjNWs2Xdj2FDo6pegt1yt9Wq42nQHPa2RkU7mbJMi3TPKdubbPERMvdBDspHkBGZhEXSNx6mL39mhWQr3zFRv",
  "key17": "331peLGogmRakFLcF7w2b7p3zozfafqSWX2yu7ari2UZWQVnnsG67ibJj52JqaiLYn5dqbyQi4KfCG6xp5sz5XYc",
  "key18": "4wnrYKymzcwCZC6ub4MsgyDYXHxK2AapdTca2ECmuPDxjgacZjAP2MBBuqpjCb9dQEChpk4gGGKDnMbZz6xifuLA",
  "key19": "4MxQrzRVr2FwWc6mgVzeRHqjNSRFjkhqhsiHrYJozMZ7jWR5vFnU5nPUbr5FrSEBFCHMDhUmzwBcfGeX5tY44GdV",
  "key20": "nq7T39p1hFTtjdMJfhBGU7RmWzfZV2t1WtD95P1r2soyaMsAQmQmDXTNtbM4xfWSRSiL46d2QbfzwWGByXsqkYV",
  "key21": "3PHzj5bEuw5u55PZKJB3SUWE9RoqimyVkesXbijKyD7bJgUbri3PthNnhzueNa9AiLH1aFs6BaCmxgTApUwkomox",
  "key22": "59iZdfiCBnekJZhDiNwfHRMButwgTdDzZDDBhCq4MhU8mrdf6R2kj3xDUSd7GvoiuXHYiLQjHdtRGEopkEgcA4uM",
  "key23": "34BwEZnLUXbBeutoRSJwBkeLSY5cCj2JEfJ5UNyhJB95GxNKU3E83nHTaJCLvaMPgasUanFdYcc4pKDtfZ1BHcXQ",
  "key24": "4WfB4W6H4RmbAJpE5YCxQaAR3aXHRiG5bdjGoDCckF3jARuKXcNVLzfX1CJ1VGeivoTCiqNRh2keBTKWecad18UE",
  "key25": "3ARhxGtYSgqgV2J2kokrqaxzYUYUu4bvbdUkY8HCVGYZBsgQUxtBAhLQPHvS4tsMHmM9YSVDRGabi6ceVgCC62Mo",
  "key26": "5agc5kTjmoB2x6uxHtYTRdJ9yJkgwiJSCwyh7NLwfoeyMmSjS624z4YuRw2hFzDiPWoLLqWoGuro43okAtZrFmLe",
  "key27": "5PQfDJTTgZjnYMmr6Z94LLXtEvYGYYfANSS1ezx3x4dHAwNSHjJ3DFRNgN3eMoZyWkUuSevNw6azxYJigDNjoxQY",
  "key28": "R4qpVcc6wBtWUPVrpvcpkysy2sQ2G1kX8wJjpqUbLBusD9VmjGYKYs8jN3pQHjBwrakxLJz9FnE3FhZRw5uHT1n",
  "key29": "55DtKUMiDGXbVRFQMgpXzU3NJBdNuo3p3VCnVzXLs4eq1TgNrzr7DRzp1TtK2BshUeQEuT2y1qHe6Q9JCwTXoXMo",
  "key30": "5mNdXWnKxr3yetBHcnmkKvG3FyWKtsyHRQBm7MARZswXZMRkPdm5AUtG52Y9ASK2cC7P6CHvMd5KqYfaHoF734xs",
  "key31": "UqGXijEFq8dUv97rGqSrA2KyMd13vaMeJspePaUDcqbovuh1ghceETYm6vNzNkkL69wMvXsyBmnoSMR4HQgWmJV",
  "key32": "3v1onSFuX4BCdHzETyPGpbMi4F57bRYWm5mac3Wm5VDvHftXTqi7VYg1vAXrcj3ua6Mn9yuEmoJ9qBrxYDp2jgAE",
  "key33": "2sFBKFjR2xXN9JAFbyB8xZdkAS5BEnJa7NkuGnykiKMAuphDceCgMC1tZP4S7HmwFKpRMfnsCF6nAD58xKHGXKvp",
  "key34": "LgKG4RCizBB8T6eiYq3NeiSmE8X7LxjT7nH6CCLfFuG46KQVGzLvX8pqFwHQ72ZFQgEkTAxyKkg8iy4XLXKvDBn",
  "key35": "5DVwaYzMjdRKJZ7wsEqTpgo34FS8KBqkdsjomQBmVYeGpqMsYm76Xv1HKFRD37Gi9VrBXEtCw49wpvmnt8UiFq4x",
  "key36": "xWSWA93A1kWurntnNfiA7ejW4HvwwoNxprZ9N7buWD4rrrkdVaqr6Ms51JCREFopiLhNmfVq35ACJvEo4Uk1UcB"
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
