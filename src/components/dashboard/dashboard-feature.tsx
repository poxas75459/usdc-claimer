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
    "5n2YFV4HDr8x3D2uTdhtUP8ZBvEXJgmKZkti5cGNyjtbBwUJd2emoFUG8JzuFy72jhXQTRKevYtncZrSht6LAouL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P3x7we8XEFRTKZVXsPWFhuA9k1S96vwXEwo9k38qEGi93113XZimW71NVB4mpeso1eR2QUBL6nfwX7zy8UADoA4",
  "key1": "3QT8kexSMpZ8bXn8dnUXmeyvtqKZNVzNh74r4znFbs59Y55fZVi96KMtoTGFpzTZuzzXsqRJ2DWSyiyWifBNSPHg",
  "key2": "2Ldokwb5AXL6PZcAUN2bNb2ry8QKgsJoscWVDsc8n8tpC2FPihRB5Az7FEAijMJtDwxXnTYCuycooG5s4tab9ZXe",
  "key3": "4aFnajLP8n79uzkJM1Kpe8ZEvyZNMREKfw3gFH4RV3WiEW5FQB9kzRTiyqN9yHpmPNRKr7YyiGkktPj3DCTGhP4C",
  "key4": "3YfnWssszGyZCeYf1e6StX9pE1tsUUQ6Pvf8GCuAwQs7CEnDv5q81MQexGucmWWvCQk6N9d7Etpir2qJ85AhMzqZ",
  "key5": "MpRsU5a1YjhN2aenZCXkJUy3NsUbgMXosa8fVuFL3P8EEmT1uHa7QAHL6RX6AhagovT1fXEdkTVV9WGHg4LBfme",
  "key6": "3pTSs3WvcfGjcT9eTJqSB2JZoAZrDVH2nD78HJGNpiFAcTWVvUsiXvZ6eC2qqrdrVwoaRywYAp7y6PMKKxVJtsEP",
  "key7": "DPMeebz26kp1hmJVFLM7oShqPK3B1fRiag4yTrGdjWcaf5SfVnQg8eek4gwmxDwMifoexfzZVES8uJepo6JF22Z",
  "key8": "4cKYdMh2QwwzSsuNTW8DtcwxjNFgiQd4thd8rhbJAzcQSLCCiRQX1eVkU6QdaEC2BqE8bDYy3fRvUHwV68gdcoVT",
  "key9": "3WV1e77WayY4pEq5nJRhTbMsYMpGFPYy3UyV5UGLSnh5R2CbWUZzesTfKf5UbZgb2PYwKj5Z9L7qEjMkd9Rf7hb1",
  "key10": "62GKbJR4stuYaQ3Xpw3FWnrnUHhNF5TFZ8DkPJmQ97cujLjZcTxkPJqeKsS3aaHYHFab2tpqoHQsvxsv68PSUXxa",
  "key11": "MQEs44HzitazpSMzD9nq7qNQ1rSN1SrKtW7eNM9geo7idX5J6upqVdguQqmLuoJGAeSPpLvXVASTNx9rMNTkKVf",
  "key12": "2tqTKXNWQZfNtuuLCXkhTKE8k8HC5QyGU2R17UtYJukd48doALQn44NMjiGibX15ZchoDvgBKtVDWXpuLEheu5pr",
  "key13": "3VgMR3pfPFTtnvFVqrZ4iRcCX97iUR8fp5q9iNJeem7Hr97uLSyFZh16n6T9YWckTmAgPgmC2VePHFPsRKP7wqwD",
  "key14": "3TtfhteJJXjQdxjarPZbuiCVrN4rr5J1VnQdJVQsmLDVJijFiPuHaMSNQkXtox3HPvv6ZfSRRXx9ukd3NssGnwxB",
  "key15": "f3r36D4UKqRn3To5Ri1h1kvugv7bJ5QYACaSxu7dtKfFC5fvTgJs8MW3qNmKoWyAWjhKPrCjMwCZYoBN2aCBTBs",
  "key16": "3u9n3sSzJxbpjPFWvoCdsekTrSKPqT2SRpnCoJESEpMxeoWQDzAv2MemRTEdU2oZZJ1jqpEE8t45YzSkWVVgBaLa",
  "key17": "4CBvB4Tf4L7kKvPHGfCKYctuuYs6RueEfJmLmqmyLfBXJHmBUD5MS8e88hkmpTf8f1cMhxLHHrjuVvDxkYzB4hUH",
  "key18": "ZFVLQqN12XF3b7Ki9N9zySoQkKjARhFU5wjmHX2d1GAtbqHSgWuqb7VNqU5LHMW55q18czgMQ2gQ9RB9c8tcLpc",
  "key19": "4onjDVTDRJhuX5FTPVHMv3r3CuqQ1rf2kWr8cpdWYhnCUTRfLTzmnhDHE9ZUS8XncCY7GEAKq1M3N958n1wCZ9Y4",
  "key20": "2KWi4N31cZ6zr98C9DboyQTspnUcFrdp87gFksi19URCwz7SWTxUpCYXTSSHAwZWcsPtu1AzaGQbQiWMWK1q3AKP",
  "key21": "2nUDZywNqmJA3hJs4CVe2VCdfZPq6DX1THz4AnWF2ojzUXE8mGtSNZDQobq4hhRjyVrLutdJ4b5FktdKx8dpg3za",
  "key22": "5jv9egprLdTst2LzNKYiQFMoPpq7pvDQUfqFdFueYNh3d66neiJrcQNzFVpY24MS9n7nyWBSQufdsqxQuj1mzq9L",
  "key23": "pGrS9ZYeKvdKJyiSKoDcjbkCEqfZPyyU1rBiTx91SYAdVzYBpaNEaLZX5oZYm8QLE1Dfvj8DSLm7SQgTXeQLwk4",
  "key24": "2bHacuaRj9UJtE41QFaLGUSixUsHMrUVVkmfbkS1fmGkUzy968w2D2p2JXirNbcJ3bVYXTFSK6mmyYAcXtoLP454",
  "key25": "H3SyvKzzuZbWmh4Ra6SsFAyfDB9LF7LNNJ9HenGNzcCFDTWtCHWmugHWHJQUaTajrP9VKGRhsNrx23GwXNdwqQs",
  "key26": "aSxtwVxt4W7CWMeRhLAZryawJs4Yun3mhX26n5XjsdyaVzBLWAoveRyPe6yukJVEu13CLeGeKq8AgAB38Upqmx3",
  "key27": "M6RStU9wDAQ1ZyQDAN1kGhfsEiG3XsnkswcmNJ1zM8pCxnRZKDEXxL1PDnKSgoDdfpNvSHaJ7Y5G7qSczo3zT6K",
  "key28": "5sWZeyJwA8dbZymwWcRdNtsGMaAQPGhasaWVe99F2V6e7NY5nEmd3SY8mongmESHmvkPoXQVtQmFYyE58zg76tcZ",
  "key29": "2QAyYJK7WnPf56FdYjUiN5JwBBkJc8hc9JpoDAWMgk4PhXx3dbXGNz7Wf6745tFweLFgZvxCQE7seyj2WiSXf7w1"
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
