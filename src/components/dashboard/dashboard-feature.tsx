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
    "2eeWNo3EHpWxkcFQoaBHqBbC6tJAb4GdugfVxTu8AZHCK6wsTfkym2wXSbyjJTCs6gRBMjYnd8kJPSBDqpKupGbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DNt5AjoUZrK6HSCiVq34tFqvKXTey895WXkJcJF36pgGiKZ4QouGok1kj5u5asXmwG7bRdCdtcoTsY1Pj1rNu2c",
  "key1": "5SwuUSaXzbByskAftw6NDwtzqNzGbmhzjZBXujBgwhUxQqS3zU65GTg6qcgcvB9HMumk79Ds2oTPoC1M6GD5g9ZG",
  "key2": "CFJ5FevUuU1B1ferRvBPpVLHsgYucYRga1AG5GD6krVLJr41RHh4TNGcCUxmaPH6FLtzJE21jsgUReXFLWAP3MU",
  "key3": "MKtjqjbBnCR4WfAEvrhF5FQwMfhdY8ZV2VFsw8XK5y121R4F4zxqhYELr3EVUJFyKRdVEUKqEmeVxVYij7A9u8e",
  "key4": "3hxz3VWvXG5Gmz89UX6MtzU1ddM7eFxuuxcMziUPt7ob2pToS5XCzENK4ZzANn1dmnpppP8k6qa3SM8Pkwrtzn1G",
  "key5": "2nZGVHwZNGMbbmpGnwMjHZRDsXuc2xvMk1AwJthaRCkvv7dm8bZQb8zwykFuoUTSPZ1TqYLQU7ccWjW87AVFBRVv",
  "key6": "657zgRHA3vyW8oS5CKtKvo4QDm3cL3eZvaQUpuzWJMYbyEwiRRrkuz44R8GrsSVvcVgduLFHanxDEuKLidHB9ei7",
  "key7": "2mFFqWvAk9kUfxG87zZmkKYcxRuztPS418LUYmgVMC4AsF2ZANhqbSdPm33V9Dc5jiDCUpTMk8APutTmcBVrvsBD",
  "key8": "4HmpciKv5Qx3C6fp6pZcEpXNLV4DpBv8CH7DVihA2VitBWHwUq1yjE1j3JrcHUTbjLAtzCehDL7mtBmQD3UqsNEj",
  "key9": "2rk4cjR8rUxUbfpxFU7p8TWyaHXajx68iKF8iU2mK8BWogynPdojzp6GtXDuny13wh1GQ4zLQaFqbTcNY5tAubhz",
  "key10": "QSMgxobSVxQi9x5G96zgL5Zg61ZuEtg7wyDBerCbSNMiXLcja6tarzJyVfBoCUUBQ9Stmn6LWKJ4tWWGRx9FVvk",
  "key11": "5UYtZebcozpGZxJ44XVKmfYZiCxYpftEBr2NMaFWNbCKbXVt3w4jiMb3c28sSKcEdNY2zeDsbDhs2kWBqZumeKqX",
  "key12": "3KsxReJLz1kWSqhSSUqxgJ21itrq1Fotr761EU6ydh2WjqTVCNyNYVoXVxo598uDDfkD3fUvhV7CD15ezFUL6Dvi",
  "key13": "3La8MZ9YwrTfJ99ZCGjFqyFrF5u7vcnRy8T6CUuWSKBW9GpWtiFRKrVJBd54dPaLKuuj54MyRjGSFjkE733JSPJ3",
  "key14": "QgezwBoRbsst4GqqGdmURtJz9XCpVUD1VBbRezXrirZVxk6DsY7WvhQ3S6o6Ks3Evb1hzXgvSdsWnvd3aFLPV29",
  "key15": "5dvPPJVGsHynV57gsiGyHtZ4wnaTD7bxUyLpFYCnhNF58AvEWkadW7mUvTacBYxNL3uoynh6CzwPPoe8XdbFbZnV",
  "key16": "c3umAv7FXydoK7978CgaN2N5BBw8qM3n8cokW5XrLMMMv38Lc3ZsetP51FhBHMrH3j3eoUuAGVAvTTjvWRfhvkc",
  "key17": "3NqiEboxtvAw8njweeDyy27re2EnWAKtdzzDpsCcLZC1YFzUHjrjyzrpcU1grQPJPKDczrWMrMP7vDDJAVQftxLC",
  "key18": "2sibPdzCP35VxCdbm6L9iUEr2xZ6nyjtYf1Je5Qonx5JDJAFuLjhE9EQiEbzgCBdQv6oCGTyM6fN7wXMooUVVFTf",
  "key19": "2UMdtJWugmMPzZmhVW2VzFmbkspYfmrqhV1tJ3axVviv4t411978NcCKWYzUxExPYyEAranTTj6bskj4aYZuyhVe",
  "key20": "4xXMWo5Ewfe6fUbbDcWxigsX84ZDkSsSgrBB6EjUS6Y9UXg4pNxWaYFHCcJBuYniYrkYizUjuLTCxhWdAXTrzkMx",
  "key21": "4xB6WzzmGCn2x1rbw2Vic5EqsfGHCXVDAsYrLvQP3xw7b3q6uoRn5U3TgbYrXbjoVJGjy9WnwnFTtWyvWu4keJJB",
  "key22": "58EHUgSihNK5ynbeX9FoKm4AG92rGKF3Ey18RkP5YQmXTd1x2Z8dJcvXfUNeq58ri6sFuB6YgMXNuCwbqXJ6RqLq",
  "key23": "5JbtvVkSfofhudkriuN8AJyCUHxbbSv9BuoEfDDnWN91Hwjwgp986EAGAzEGBxR1QarV75m72hSonuWPxeC7HFcs",
  "key24": "2vLXkgVcqU7vzHdLYmmAScjB5JdbxpG3RnVeThxqa1Zdw2zT9DrfnnsYVn2V3dp8PWNZRAkbNnptHtf1uB4y3NVS",
  "key25": "9dSzq8e2VMQ9nzHM6cnE8zx73ExNeQWZmGcsLVGZ8FrU3DhY8TF2DNv4S52CVzEFBe2YMRvtu2qkXSP2ysjGco7",
  "key26": "2pjPVFg5vdW5hrBoYBzHXGPxAgKVKgLvDTgfTKobxGE6GuWwHc7rMZ91DXwSyiG7NRPd5hdhs5U6MbgAW23FMiRL",
  "key27": "5vDqWdisFSbLAJs6gKZZpdyztrc5r6vpodM5NpgZuek5G1tv3J1VSnvD59bw1SSZBv5J2qPYdLHcYJW7ZmQiK3g7",
  "key28": "2zfwyQUgstYyrpdAdMv63b83wDvUijguHrcsNDGYbuuuLjyJJJF32AEaDgTipamacLmRFauGmD98Z1CEiyRGBHzR",
  "key29": "3ckNB9JLNUpJdb6ArVZ9HGyvwHjZePgsCSzMjoYVRhCsQmbEWMqpU5n3oj2BPr6FDEba5iM94V16mkE23pUKtxPB",
  "key30": "d3vsoTEfxCaSA1bA2ofds4WiCGZmn2xpkPDfcgQf2iJjQ6KBTttGF4YdKiUwdfc6iQmX2fd4gUaTN1NgpSFMVhy",
  "key31": "yxb8ksy1NdhmgJjHUKBL75vsuuEkDBGDGQmFKZ7s9BiStGeZ385T6nBAYnQCN3nmBPbKQkJxRfYW64XsHXq8hTm",
  "key32": "28YDTtkUAQ5a2Vd41gB9p3iisT2X9UemN5APiF6icHwH4sHjW9h1Hbrn7uEQScnmYSH9aixG37TP8GpbmwGDJ4RX",
  "key33": "QC88g2mmSZHzN6QpEA9USVEgu1dNfpp4UK6g2XdUqou58LTR25Budj2vs3qTFrK9cXj8wUuRzbVpWW9M5YSsapr",
  "key34": "335WKN6vYjF3gnWcNzeg6QPEV66f94tpudehoMxck1Mo1j3oNw1NsEj3vQvYWawbqdKvvbYZhkJQH5ebN21HVgGc",
  "key35": "5hLq8JnzBxtFUfdGN53A73nw5aE23XsVofH9uCP2Chw39zAAK3m2gRSuuE1aydrP7Pk8sSihpf9HrGfm89f9Tsi8",
  "key36": "3G5DPE6bAAnp6xpqHsYnppN9RaBz7B19bLggGAeB4PDA9aGwT9uwxLLmKaKLkaLcf4LAy2DvqPyJ2TB5yM8i8t2d",
  "key37": "59m5kZePEDAMD6XCxekJuWjNDv2eru4jNQGpmBtdvcJqPAMZtuvq9wEeUCo6vJQHkSmRkt157JPsDWio3n322Hyf",
  "key38": "4fLA5S3xaN2L3AbW39mq33LkVcEPykSh87sPRXgwsmj2FK2Ckm4ksrQ7vHDdQhPFMLQR98VYpZWpEYzPTPX2rcT",
  "key39": "2FCxWw3poK1VduvxcDmPMkgZ7qB5D1rVahQTJgG75Viusc7SLDQYA5Xr8TWXLi8uRDwYKSwnoPLo5SGjzXMW7kC2"
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
