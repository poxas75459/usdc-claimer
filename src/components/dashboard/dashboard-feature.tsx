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
    "4RWxsxZvxzdnVGnsuWK2rrd5qaMgd6f8t2JHUqnXsYet35szsiP5xuoxoEhFCnFDKi3m7VE6PxYxJUZwSg9KqN4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bMDSyUWToLUw5ihkGMC2eP9s9htas2ohSG6qrEwWaHmTvMkwzQJMEHNhd9SEB3y8J1KLqsdjHzS4rbFvSimHg1P",
  "key1": "67LyHbiMd4KAAjPzAFmnfWhjMrbchTsMJ7fp7dh2WqrQ1byc9D5gSurVQpAXK1YLrN6kiCUQ11GeKiv7FuiHNk1n",
  "key2": "5Ti1j1wJ61rrTFAMVeWucKQBzHAQpLMLHTMSA8Q3nahRfP9ciz8W4eGF6pifKZmsLkVoy2YfktCGXdPfwAHbpWnZ",
  "key3": "4Ezb42AMPpTCGbkx6rswYyzLiSN51sLdwdNSAGBeSmPJgP24LekxZgNjJmkGCCLBYuf9invReYiUr2WEe1pBHoWP",
  "key4": "53EqA1cgvQAFtzmLkynhufKJRrhABq85PkksxpZLbACkyL1RRPWDyAM33Ebb5drThCsPG5fqVxdtHrbKXrBCvSXZ",
  "key5": "2EApf6DCMQUhiWEpXgnogoRBQgSjVDZkVbCnLW76F4RBqa8TsmNZJmkVeJXy5sQ2pDVWrWwEnBh2TL1b4t2m9SZJ",
  "key6": "2jS8YRMPMWmxtC5bqE2XeEZ47EB4rtSXjGzLf7evreXyBrNqeYBYUJ5VLPvY5FBJXoHjkuaR1VVE5KE48udYgRQ3",
  "key7": "3HumBzrd6o12ZweKkYhsVWKUnWoXhpLCT2qQwugRxYXFdH215WYxErYYL3WxxrLypTJq5KCp9uoAcZ9vMzbhpNxz",
  "key8": "2uqDmaqJZ8oW7R4grdqZs8eEgCKk58LoEGU1H7CiRf2RMa3n9gnzeipKNv5PfSModF5yH9UAXZF6vvsCwQX9ZVrV",
  "key9": "5SS3742h5d5YT27EqTGhqZ4Ak8XjUQuMj7omwSmuv9UFfKx9rLXPEJUbfc8hUYJTQXmM31CSZa8tYF9HkqC8Mr3F",
  "key10": "4EMDBzfTmKLXmjJWP7vqBX7WpwSbdKdX8Tx5o8aodzcDmVmT9qEFkSn3Rkun8Y2mjeeV29Dto2pa7VxhCewY3Uqa",
  "key11": "4uTfWCg12ggcfL53oGPxXvggCcyScui4MhyiWP3b95WJ7MUwRDGQU3aKQSPTLG87rGbrWLmNZdRo5rZEp99rawxu",
  "key12": "4syVpLFgwmDeF3DSgVsWW3tZAkYtyYfzE2SbNyy6fypj45TdBpRt3DNXFy8is6RU2ETncFzBZXipX1w2fpJA85kb",
  "key13": "2Kf95n48gKySjwXpssHx8RvaRx4p8UoQ4LmYr37Ftrf18BgPXiNPvN3wDPKy7hxWazezN4yY9Mabeh1KkxUov6X7",
  "key14": "PpqLwkhevDU4nXCWN4km7WPKP8tTQGxLxmVNBkoLpWXYrHJsoLBTVGuJdMxg55QphfPeKvxoDZsaxc9qswpC32g",
  "key15": "FLXDoMzB4ebkjVq3xapstJ71c1JsaHb7R9UHge56ipXaw3dQUJobLHrQwqLzii6KNDPATbZtvGzhCKzzwMi8wmW",
  "key16": "4hQJ5qMmUUmNZC3k9tyJLKAK178hipExg514CFpp9xB4nx16YH3UkRwtfwzjWDbUiJjb7eJhZjoRuNTU4gFBkcmH",
  "key17": "5tzpopvKfZnWFnkuLhWV7CcJG4NFz1Sfbntwczj5ga7pKXugJafZPAvqU7CiFR3fFebrKZYv4GRzfkW5FvDSFPqS",
  "key18": "465QzXLrjbwgBP1EFk64pZXHWvgfepX8zX5jjqTphhSu3Uyi4cnpXgZ53mT57CiNS2C6SRZASZ5JAezthSnkRj5U",
  "key19": "4Gcgm5uVikzSN5P9x9NqoQ2kSvkimSf4UJgZgB3qQcbXGnacJ6tngx1LvnhyGbQRk2XJ1ZTcHFyuMXtAkGrMEaH4",
  "key20": "UejTQQatChNR7V4dkwA9npanA75PUuMzWBBqzzkGMxFDthmwt9ePMZNMBhncaK8tRbwfbtKJezGXrUb6UE7KFAD",
  "key21": "y3nKhMNoac58LSQdHFSMcBnUEijyS51MM2TGffyQy7pqzwUt1vtc93S49grnvHZeQCe2q7PdrkoVSX4LhubXWoj",
  "key22": "vfDgzv3cfADjwSzB9rKk47dpdERfakXZ6B7p2ifqGk53NrG3VebD34BNnUvYnd8n7q1sjzpBLeWeuW5o5siaYip",
  "key23": "5UZhnB8BSJbN3JxVDmrofyDwRMASRv2YyGXswwp3SMvpvcd546mrHCU2ZWLePTeYKv8NMyQeo27CxGwbdERcHj86",
  "key24": "3paCNU2QF73J7m3mKyvbGonA3iy7mry5Fxh7tPnWNV4ZafsApMVJm33wjo5dsFHuvhkEzzkXbLDyJ9bGzDjLG8uc",
  "key25": "RBqKmsfaVYz58dF6VdY9w8sGDjNSGH9s2JwJRtiwA7GTNf8sRZ59TDzhsezeSJJHyBRoUPWFvjcovuQgcoWMDFC",
  "key26": "2gSnfkj7SQqKkfikA1diWWDcMksmwxszSSdJzw3cGk4dn2UJ4e5ZHtoFjrxQtcESmPKvwXdKwdLDA1dFheoHSQ6t",
  "key27": "w2vp1cQo8VQBooRRpyF2JqPMxWfPGi35oESUFEvmPXMz89eVp4QM8zYrHtYwyBRQqPT5qGhXgw4GLiCDH9WG2Eu",
  "key28": "62TYZMpriwvzbFsk68atgv3gXT1W5VMM5Df1Kjt5qgZdiyPbVjTSjrgPdf5ZYTFbpWcifQdkY1DNKhPzLE625pvn",
  "key29": "5xtyY6MaRLQPKrfQrwnrTS6gqYWNA7TGcmV4CLhW9dxcp3hL6nSckjyKT6VRcEBYBHCZNpEtSDb3CyrxBWZAK742",
  "key30": "QdNbKek4A5bA4ixUVkM16ZUXVLbuWJkD2w3onkSLGPJpKr1tNUzjw8btnsse1yMmtJBHFjZ4danXBxv7S7A438v"
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
