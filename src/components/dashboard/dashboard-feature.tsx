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
    "7a36qDChHSaAYUTPCJfuJCo9SPTifVgv4s1eh3vDhazVUEjdDN3VNVMQUwjx9s2JvsUvxagp4pfaT4HpYGjXeuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZeZGBYQs5QhfKWZgh2rg4SEP3FHHy4n2PH8KAAfvpsmdc4HmR38PZiX1A7jhFqcMH6MQRPyNxauT9EqSiCQxfFk",
  "key1": "3iqPw8pAzQvoeJfUtN7wza8rJeZBR5EnZTYJnb3CYu42KS9FjhWaZnv9BuZqfJVjM8qEiGXyxSJ8WcoFZxi5NgxX",
  "key2": "67nj6YihGBNLMBQbCf4ArRw9KJxfDuA9Uviwyosf8wUNrQp9G2zGGNxEuHEeNz5yMTta4JVa19aoHEpC33qHsBbf",
  "key3": "5EE11N7MY8De65CNmLBBXrzqEMouaboupSsXyPZLMhCfN7MZxpmCqRQJojkeyxvbrV648exYDrZuxkotD8MBB53o",
  "key4": "25CuGSGdJGA9q6edALyYXomBJ6TqHqAhZYHVypTQYstsovDFUmPCTGaJnKh1VeBzSwfALqwyov7gLSNvsYTX7joo",
  "key5": "3k5ymc3qA3SEdEiHfKzVuRhuZAcxdksPdCVH5UVP2TexwpvbuegiHYXY3ShTYgBs5h4Hffxbj6KniaZarnzhYx13",
  "key6": "DNBKD2M6oTiyc25nzmfZcsZZHMtFP5YzRiNWioAj9k5pDE3SLJabFLz8nNQG9W1MrkYmGDeiDRkUcmcBYHYiaV1",
  "key7": "4oZjKBzDfuDffbUZWWgkmBGjcqhtxXaJYgBcnRX3Wa5RqtPiAVjz5Q4ksy74PaAHZw6BqqUHNBeGrtBfVCxk4jUq",
  "key8": "tjEe9UgAXKCDJnP1X3k2wVAQwiVL71BYbQGNThL5WYwN6Vg9eoLXghQAPGM6LEdNmc6o7xhbwVdVok2Ctrd5wCD",
  "key9": "5XARyQVeqbQ8oxLDZb8fpBFPw2Zmg2xgN4qd39SDdr8p7ZUkhfjCtsGg9R1LebqokGdu4VJTS1513mxNha5n9S84",
  "key10": "3dDUEC86Lyy1kq2dN6arASo6X6VxK9mXryu22CpXhTZRtegoXJy4AqZZ9uPMkLe568mDkGgiyGSu2CVpgLphQFjv",
  "key11": "4VFDkepATBu8JzQqSWNrycwoF5uec4j4HbbLfN65696CCrqHWxDNz66NHPkcA3RudV2DJSMc5g4FuQgLmGyvTkzp",
  "key12": "5Mj9EKo2Pq67Yi9ySAng8e9mbCYwjgHQRdC47dYYFvgWtH8Ze6BvrqD9gmrKRjyk7ms8jkrez6qFYfVxcJcpK5jJ",
  "key13": "4dmJBSvx2WJaJx7RWJK56isCV5UP2cCjyJkJJVxmSsbx2k6pomyxbJrGqN8XbUSV3S1k9UKBKEkcuBFhmmUqURBq",
  "key14": "4GTH8E5UV6MxgV6dTsrFiZNKqxEjeetaeUN8bKKVPzBd3zYfb96torR9H6EKMrLZirjv6oyuuE3B5HE1hhyWpt69",
  "key15": "56hyBneR24fpCgJrZC7JHyL9iakdB9p4fwf2YATXWzQfL9c1HQnWnRMopVqgKekEhHUmptTKtPK1Pg3V9p9aPr8i",
  "key16": "2EQdTFCmR53ATxgeHKGokSFeNRAcb1VqpTBhRz7Q8T1CjyDHNsTGMjKFR6YCoSWXgeZgN5Uq4ssosGCZitkEEnAn",
  "key17": "5ReQcMMEfa5HFYHdLSaJrBMX8xK4E1QE17dDc9Khz9c2q5UvrvmrxCXL1uX2QLwzwqWvm9cWuHVX3gZ7EZbpXPmh",
  "key18": "5QnWnfkjFeEP4j3iFmZUCieubkNArH3q2Pr8Xt3MXKFLuzZ1312PTvdmo3F2YKpmJfLMJJXi2hgm7dDhHXgMH8Cj",
  "key19": "2EmozDERrPCyrNzonT6Mfcs8PeQwDzopZvyeaLdY1NWQbMhp94Pz7RS21Nir5x1iVB8ZEUqqd3D5bhrGuzxaY7Lw",
  "key20": "64xBoxQdS93mUHFiybCg2T6vBoyf4tYAw4s69hQRNZjjHMYM5fDCDdsTdm42gECaWGuC2fef3pArz5Va1uPHhbd2",
  "key21": "xurcYWfeB5D6tYid13LcMrfc9ugR9yeojCwitybNFdh1Zf4Etitdeb2v7hjyMUN7vTK7rYQqb8c18rsf63b6rhM",
  "key22": "yvPUexj322Tre323bLTNuHdFzDJNT9MqTCXeGqe7DpeVyi1wmXfT7R1mhekQg8JDyPcfbkNQLPGhyzq5bfzMDw5",
  "key23": "44opH6BU4t2qL1w9zx4BVWyALRKBRCLV2LKQ5sby43pTAqvYgT9QuCBLgJwgYdNrE8sUQF6K5WFJZTvFjDXvMHvC",
  "key24": "4Tu7kv4EK3z45pb1jAynhqQP82z9HH3N2mFk9cg9ykLgGziPvB6sDrSrxAQZhXZ1CS7Q2H6f3kXyTK5SuooVtX6z",
  "key25": "5iVRFwj9Rdws8PGvr7jinMgNCuL3BtTQU9ZnhD8gf1y3cE4KVmK45gDGtLug1qQPvQ58qyr2ehAkB1tHjkm4pWxS",
  "key26": "3TZwA5vFw8wTrw8J1DmGPALt51SKdwD1mNpQnP6uVNQu1zXkeKb4K8STwadC53VpbN5fbz21fbMFAxwM4CmDMuQJ",
  "key27": "5H31hHUXQeK7wQ1qmi6bGKcRTqZFRrN7yHzwpL5FqUbX9KSTsQJSkR9EwkMuw72KT929uxk5zjWqbRqcU6rnS2JL",
  "key28": "2jHuLLsTW9W5YWFvZKcMTeskWKsRGTo4HkZbNMtBnPKCd52mmXieRobZvCTSVmX3guw57wCREd4B9LPRk6KZYHNz",
  "key29": "4ibbboyZ3ofaKuSdSnPChfFCjhA4tjTYr3YWs24h2UDgXDiFGtMWFD7kQGrJvv634TCNZZhuz55heaqPXXjJJRXQ",
  "key30": "4N4aQvP6ZssUGw4SyTwGK1UZNKM7awpVFh5MxcUdRFrjKQid931Y7aBfzh1JVnWqVJcZBGiTfzbn6fFX54cgyjNG",
  "key31": "4beQ6dHtvuGAWDoWwi4kVyV7gbnqCm4wkoMSg8gLnrLyJgLyGMiW3TeSswsKBU7rdLEiZkG5yAEbDiQ6yESNj6RV",
  "key32": "4FCWLnAfT6iY79hNBSPEnvPJjKkz8aQmNESEQoNVi2P6mUU6omytV7iNjkfNWTAHgnoQN61mofSeY7Rofap538ja",
  "key33": "5UHuSpKP4sq4pL3k9ED4s8rsK4m3BXVEiVLmqD2YBm53Yk6M8NduaJQg5LEEvDChWmF2DfFPjQQshqYCsaWdpZuE",
  "key34": "2Dq5NUQsCGZBYratUqcNFEtR1uqgptF3fxrpdb2Pw2Tdaov8YUs2qqqLm8Fw8G1vaFNDwyNwLbH8LoHznZdz1Uy3"
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
