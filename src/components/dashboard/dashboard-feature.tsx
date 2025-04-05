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
    "3okoo6bNPhGHK8geXBPffSyDbyibCUtsREWhDrXgPkm8tr9Sogkwxz3BhPQYkX9Jhc9NvSeWG3hqq5JMapeoWCkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Af3EJVTodCsK3aqD2d3pb2VoGQayu4QsXMUQhsnrpQ74w87BdQKki5vdLKgWCu2cuJTX8tTP92KagJYPZYTzoEn",
  "key1": "3ECYDmGucoYzgFdtH5rJA6BWA2HaGa6wiPgQPyha3SzniyarnEnah5EmyXPHVWEZY1nRFjzFD96nKQTswqd4J8fT",
  "key2": "9CfiaJ6MFr6hDfWCmDHrrEa8GnhvzN6FcZ15FzbHF2LNBdLWqzpwmSAQc6Dj9xWPnDYzxHXV1tyoXYsMwvgN9ak",
  "key3": "59M1ud6mca5XnHVt1vADX8g6J3sucuPNjvqTxmjhqLnT2ueyPXVkvVZ8CbL4syQthPhMUHbj6HpLubjtqp3W3E5U",
  "key4": "55rC18hSTiWiCTqiaw7f6YqjvWfFh6pX7K12rGGxuWUTBNYxoCTZii7CaCEFp7wyet8obyG6kzP8vnKGRREuY7pb",
  "key5": "3GaCrRZsv8DRg8cRZ3h3N3LDcx5t1MEXMMfkUMY63TYxwoYkwauYDvfofi8iPpFZrMCd1chWufSFoGfnFWUZfr6a",
  "key6": "2JvNVhWqGEuRP9WN3MBGjv8eWPmPk4CxZV9wpW2V9V8F1AvYCH7jsFDqENqSanVPXkQ8QAizZyC7JsoQvuzjRvhW",
  "key7": "64ZzEwXu1MQyeTpZoMrJ1gyHMv4Y5fgBguehw8rCowR9rCLPyYyqBB27rE6ZA4cPmMkbV9VzFxfETeHvh3FX1Q4p",
  "key8": "22mYPxiow8Wuq41uy4mAhVNPkuYriwa8WxoZP1jDemYz5ijEcRoCnF6S6wXnhcpGWBSaaTs7TZU8VQYz9kv6fsYt",
  "key9": "3AQDGkUg4dpaXF1gVo7oPRdeZtK3aKd4TML3GC3bJzpc3oHddRjrJgDeP89928eoUixJEJhEXS9g9ZmE3EeniXdD",
  "key10": "5WBaRRmgELS1giDPDcPX4C48i3QehaTsLkR8w1UmiQBFtTK3dGm6GCyFjUUiSHqb3XsfUR8ypHEp6SXCFdrHLGwg",
  "key11": "26AVNAt2uAB2M2FgGxLWtZNyCAYwomYEL8HnP2sW6SjqMyYqwKaTx7umPM2USgeRaa6cn8i26WvKgQpzkoNCdizU",
  "key12": "MVuMN6ebCn9ZLBbJh74u8nn65FoskwnSuznmuH5vzztzKjztbAkb3pCkyHfW9abyJs6s4h3KX5F28oQAuztn1dB",
  "key13": "4jKEYgHwscEZCZhES28m7yzQRJA7Ds5441PWp7rVqnNF28cxbEDnAXCMFGtimt9kNjE1VUFeNkxhuifTH5ocGrr1",
  "key14": "2xA25XWQx3176LJFL5DqEpz3WwgzB55sF4QRXXdtA3QHMDJBH5Kg5bnLGXnEBkLuuSgBEzRQwrLPuXhJeYiau7ss",
  "key15": "4zx3PG4kbiAUsaoiFbjAzPnyJ3un8iEum26mahPEcs3RZUh2Twe2LBT99KHhkvSDKb9sbuZJsmV2EpuEu5LArYmD",
  "key16": "4oNzEPVmc1oKFfFCq1Rs9xqFbraGPpztdyp4rLxyZuyUYBFm6B1gcT1auJABCCEiXkH6GiWg9uZd9Gd5vB6rvPZM",
  "key17": "3NtrzqqY7rHuJ8VbFy2XjHAuUjWcsTa3CoY6dpLcaEzatL711RwWcGCasNjTG3ScacKCE8PH4dA54oc2rrQTB16Y",
  "key18": "5T14fkxQz4VXvaxsTjapkcZ8A8beUibTTPwgQu8dQ2w1PLxgME48cKZ3uQKpw1f6Uvo32ywcxNMpE4JpzX1Bx5hp",
  "key19": "4ePSnpuEQspUVDzvcYcLSocVEPfrvaQ4dL9hmk4NhZMhaEgySZFP45Za7hEaZ9iULQf2enoraR15wiXsnfrfx36J",
  "key20": "5R2nxK9UJAP8XwcSV3HVBdD2UfnLSDnaKL6J5AkxFfSBZdCt7yS8E2cmDsVegznqZ2zJtvpZqP5rghCXEPEeCkRf",
  "key21": "5dDR3PBombLu9dxhtcnWKnQp62mkizckMAXtR3qTtgkoYdTYyRcZz4dfP9qysr9en28eJ3ZHVffQGVQB68YfJe4s",
  "key22": "4mebY7TZXkeZtSc78unHnYdnm5vBWzwLx67PiBMDmwqSs6V1UVbeeJYKR9xSHi9EtfknZMvpZbV7hDenXDaNSHKs",
  "key23": "3nnB1uFsWzwD6B1Efrh6X6EFYK8HZFjWrp3UMdz9JRavcHwQPDbfRdKBUghXeE2eiDTFFNzJTh9VJuKK8A3EYEFf",
  "key24": "3qdPv66Z2majLvZERTfJE8YKRkNqXszidnpGR2qoBpSCVnSb2FyVwdrNPhKVmeaPE9F3cAf5wyWCkU67BqivkbEb",
  "key25": "5gX77giEeSjDbYgjKziNt8KvG4uju9NVbQCkZsZ4DGm5vmsBF59LfP19vMP1exqkHRAmC9jPRJQWnyQpakeZpqgc",
  "key26": "2eYdmbntsifkayhVfaany4vT6tc3KrXhcgP3vQDo75frhMqJ4awAm4G4isWuzQamn4QeSD5fLVQPRK697rd7UnMb",
  "key27": "23GmNezYsUZCEMEenEAb4Q7gSBJ3P7DqR2365EQEVV3GwedYhWYcviwvzFSHCcVxU4xf8ehXhRcMk75qbgDZ5Pxx",
  "key28": "53EUoAMv1a5cgsD6jHLx6SHZFFrWnbMpNCnYJ79yNr824ymqwPHcMxKM5akdnqgztbF8TZFyss7hJzHSYgBbqET5",
  "key29": "2nBcRfcyYzCEhBXrJ2QCdeF53y4FeAizGWt9uoX8HDsFoUQntYPYdJokA4tk32cjXNbnWS3QC9cVS6ufJq2SToXc",
  "key30": "3q6MN78fwQamCBz8s2s1Zc5f8QZ7bep8J6ZEanvHPAZztfsnaX3ccURGs7auC5fbcB5QttDR9L3854JGcKDiWMhL",
  "key31": "33334sR7Qop8rJFts6f9M5DEyxYGRJgF5J2T7b6LVmPhfDFfYTg9xXUPEdHBXznGKMZridbjJLM34QgrSiz5p4bu",
  "key32": "5hk669R3ZmaAttXLjHH7QLSty3NjSgdhywwSc4uGk6a4vjbfkSCYA5FSCw2kG4ZgReRxDU676KymeNARjfGjE6cw",
  "key33": "TCofNMtHaHNXvdzA5Dv5uPRb7tU1UvxuXbhyPWQziMUNKHLpQvYL84Dnv55r47CuDqb9NLeuiBvt83fmJAaGGes",
  "key34": "3q46uacr8nd3XE6k3RxY5DiJGycFxWMmv29UEk6KvYjzL7s9Qoykqvw3eAh3tEhvJbwhW3XVn2mGMNhzcVvomMCj",
  "key35": "5pcpvWSi1moTu8nhCaLBJ2bshCGyDSqfLaCPfWt6TpCV2qJ5DHd3nrhf1Z5fhooWXppG1aHH8qCjLvuxwnitgKdJ",
  "key36": "5cywoedkxHR7ThwgZxqt4gxXvG3D3HhtoHfPfL5Y63oJDTUR3ukzUsPQMs1bPtcyan7URQYdX7xFj78u4QNyuVb"
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
