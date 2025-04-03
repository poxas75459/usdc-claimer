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
    "4aCor8xeAURwbU8hJzs7wFXvCk2sb1Qu69R68Yr5jZRGWN1we3xBAfQQpEd3zZZaJeLXvMgQWKqGxRQHxyP6tXov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GcvZCs2XqVSMkAiSSAMdtXym5NuHXRi19DgctGZxV1vLHiZjZmjQLiz6JNp8geoDg5kasqT68L45hSmre9DFNi",
  "key1": "2Y193TXWcLLLN46g9DTDnxzSKKGPhZaDQMAPGyGLsYo9PBoMQLoTubfNshzWJxPQKS8CW6kGTuNJBBK1TxYJ8Dmq",
  "key2": "5yz56wc5pqvEZqycnHkAWHiXFaZiS6cDShJKw6mkKjaRPLscnJrB8RRvANsh4WGsE9A7uHEDLJH64A26e563bCft",
  "key3": "2GqD6FR4xi6KfHWJcpygbzkroaMtBTpxvmJWpd2REwPgDUosnYn4RwZFqgpEfMXjv6yhBCfNM1QXVC6n5NCb4GTU",
  "key4": "3Be8dPJwv3azab2yeKQ4ZNdnWsiiBgAPfTMffB6wTx5TczJ2ZVqDW1FmBhCTd4UN8pcPfL8wvUshHSFTvqSJr1AL",
  "key5": "JbEoewptxD1qdXtYwDdWKSo9wPr4KxYctEhhYNQdSkxVhjbq4o8RrSmvMvz9TJb36BEQBEf7QQn2AybVfc8XCqB",
  "key6": "4f86V4VmjnazxoR1vVhZYyLgqhjsW2ifyUNmSPmUPuVxErz7QqrQwF3WF8KFpvkD9v2JPJJCyFJguSeP415GNzE1",
  "key7": "3MGPsXGjyX2pbvKqWgj5m52upiabsh89z317RR1Mg45KVkXTagw6W6uDzqMR9UwXGC2b5PiAcRAZubviipHe2BvZ",
  "key8": "tdxDjKBSenPMAWVZawpupyBQhUsS58KsKz72a38Mh4HBAdFy21j8NxLMeEGyNdJD2xo5hAyhLjB4E94XRW8b9cP",
  "key9": "3UfXD4jMAMHRf7gQsBTnTuprkHrW1T6v9aeViLLENeNHHMAV5Bs2cALjqm24QrdmDRkhgmjps23X4Pj9dGeEjtnA",
  "key10": "5wch97AKeM9wtn7f69EwrWBrdrc1noG51Efqi33aHdFDe9BXFqW1gYz71r8AnRkKKUZ1PoC1uHZXuVfe34B1XwRm",
  "key11": "5cS2dLfViGTGx2hzjKRvM1wysSmfggjChhFJ9dHt5fYuvSSBdrWvKLnWSXsfSaoDk6wfEQBH5x6ofRnK4b1CzrY5",
  "key12": "AUxMTMqiFfDiHBDbCKzvMid9XCu4SQM7NVcV6due1LTDuZZHGJAP4c8aZjSevpp3QqdUmDCFCT8PLv7jtnEU11p",
  "key13": "31okhCQQRnsxFnTGNAPLk6AVrZJbbgGoCHULy4yzTMaRGf4haUd3okszP8wZv5AKB3cDoGtANcKsR951y1YzGVEr",
  "key14": "4ksTjHXAagJJULrfJsMLbeJmFWazdSQJzrdrUcQXpfKnPxLtWLv1eqFZ46BVucKi1SuxjjJjqM1ByYgr1Je2gdwx",
  "key15": "2dX64hPbeT36FEDcfE7wL24XwXusPBQkTKg9ZwaQ7D7yWx94JSjDYKWVvpYXXrCEaweVJJmzQw74fJZKoG8rMY8T",
  "key16": "4ztYYDYKir3imbJyizZnLBGdMNy4zM215UJCb3akQNpY1tA2ajSsSTzux9Mgo4jkusgTwBuvngPtPYYwg28Pwy6i",
  "key17": "2mVVL8GAHBMDFQcmzowofKBqcE1toMVKZjDzw6XLmMKq7quLyvs6BCM75dVKmP2grtxxsmM3ctybZrBRitqWV7AS",
  "key18": "4tkpmbmU8Rzd1FBTHMDoBctWUytvqyzWFKVWa5TgZuF6xqPbTB4W7DAm5d83aaxaMiD1oNE4eQHeUPqHQwnpVZyq",
  "key19": "46CJtvgTKo6roH5jPgpHdgCUsaaPEy3xvSCAiwnuL9Ch2bhqBX16o3UK5Z8QNF82SgLVPJhYNzWpLZnr5Cxh9Qcr",
  "key20": "4J76PxovCWPA8DLFpUrnEMqJoGjc1aKC3u81tt1iW9RY2w147VXB71L7BfpNCpk7H22mkNWMFqyuWkbtGebZUgnA",
  "key21": "4kNe1nUBGSoHBPhiDmfQs92fiyAprFC2mfXdJzP8nU6PyPPy4xhSZVDsWrxRDKAKLhQBv1uEsHUHGPkwmdiwWyv",
  "key22": "5vUecqqN1LK1ZgNSRb92QCcxTk5mM5oh3rXao5z8E2y9ehckkLwUVsi3Y9uG942Urwj4xyanu3JxHA1AFcnrdX1H",
  "key23": "3TZuwWZz4mkyXtr51SxZB5MU2CKMgATm8nmkbRbXWZYEwbPV1c36wmPgKe9q7nLt3hqGjeEcjBPF2GMo3EL77ba1",
  "key24": "2iDMzNNRrJEFiHg4CbAdzVuPMxQFauFmqxAtBUHi7RbxxxDQko34RZcR9PSMpwKQbd3KsaAcMqr1hfe5NJoQcaDy",
  "key25": "26ESoX4VXTDFPSC81764UHA2B8moPYdBQPS2LByKrSWna2Kmkb98VYcezJ7uo2kTAwvWqCBCaqr24GxMqPpRNKyF",
  "key26": "2W6r3uBHa1CfVtL7r2s9A8Jjr7Vmjbpr2pRwadLpvuPkkJyvMGUcd3wSPZ2uy2KKPoMPSmtiex4j5VoGAEQZPjY8",
  "key27": "dG4XnuHqmERDypWFZTt1P4NazDSxhCtqGFeKMVXbix3tLxzBYkvKEzDwvbJH1xUdmRbLQ48dtLXYNCGZDGyHyQW",
  "key28": "3XXZTM8E8VQJzDBtYWQzNP5yzAHpS1rBdSv6e5eWT7Sg81CMCSNukfibrkjRon5pUpksTzBAYrepojMWHCWuEXGR",
  "key29": "4J48ZGjo9FyLdr1nq6vPb6hYRZkdr2sd2vZLXj3J8tyzza5LnXazchuJme8ADEc84THjTrZ23En1hxKk3RCtXWtG"
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
