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
    "5k2XRBLfttfvSx7V1X1VgsD9PA1TbJ5FQcmg6bAp1o51neAEW5RKAqRMm3azf3AkivJBqLwJdxttQY72jUJHns9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kxC6x3NSVGNqnKsFGRCK5N4vsYyy5Jv2V7KrePKmJ7KpEvbasJfG4KCovktQv9UoH4ioYyhFPixXuzAhhiLokXb",
  "key1": "32HzEeoEAzNXRWkSJChVxeVzNoxsFK8mWmP17pfKzoMtZ68rz2oiAGzhdwdyopKcCNEQruj4ni8qGwe3sdzCDFVT",
  "key2": "2QK6tRw41rgQZsCZkvCjETNckRMCC6sPzMogq9QdTaFkydQo4uFUm7kzkwHqd1SazUkuAaDkdNf9HLExexmvCmwA",
  "key3": "374eoHdsoLJ3Gvbc6KCGweH5asjDJeC2EaUbCtkjwKo8GRkadn79H8QxkbNvaXtRHDvSQdBNhWQpJwT5yoVDxCxH",
  "key4": "3FqEc6kfU3NwgSFrwZHDafNMk8zPzZSTBHZwgLP83wnKJMcqcN4JWU5GV57yGJs4wYWTpMi5VeEBaMbYJi6nKoTm",
  "key5": "UkBP1KR9LdgGZxwBGpXq4SeZKXQYSM4SVmkGq4bndkcqzMuvBDReUeEoaXUC5UtyMrr58iWrrHa1yEoPWf7bX3H",
  "key6": "46Ciz6EikxJb6R2gjYpMtsppJYatfcf79qWgFCPPowaSLofcMvG3dzjGGseeh7qj3S2e3SP9n5hCSdPmsJCYW5PL",
  "key7": "5CGeueG5n8KnnfgSCSeVFe8j36cNxgQnBhS3xp5RwDCx5KkrFtc8cUBCUixVFPfww82YAfov8dcvdXEUSazecxPf",
  "key8": "hnxAHt6cTuC5eKUn9Ssya54ER8FVBAYHxw5qZuQLV6QQmtePgX3uGCMmGThHhBdMDmNuVh5fWJY5M6a6PHDSMe2",
  "key9": "3NbBjmedYwY3bQmb87apKAzcp1TrKh9k58bfxskdaMcY23YXTLKYMxy9JZ8zTsY49ybJFGYL9gz8i3dFBae1Cvup",
  "key10": "2fSiGuYZPQ3ciCWp1oAvDdncnjtURCbJqVEMffiai4gSdDqgSRzDsDdPcPZQGSsKM7RyRzBCdWgEjaBJvJfsfSAh",
  "key11": "eZXTsuzBQjFv3uZ8McJ1ibmnyHDmB35mGQTcAdLofd2vnfFkXeqM5w4WxT6b7QKms8qSkxbwHrirVEdjeigfxk7",
  "key12": "5UfCPqVj1k64kJfGvTikV7cgcQocPdVVD36zkshBDhaYVXg7kuJwLVHMDsk555V2HU4GNRwyCka6weyZ8bz2C7o9",
  "key13": "4Z7HZ1EBYabPYYFiZzmgtMhb7yZh6zzqdhZhbLqBVsx8WnGxVUvFF68BKmzb5g5K77zHvFxe3GqjNyUfJ8CuFADv",
  "key14": "aixVcjfm35HPvGqECWyJiu8QuDabsPuewRdEwbLHh8abAS24v23jCSjEvAu93e7DYK12fo2KJGg23BvYQJv9Fcw",
  "key15": "3An9xMoA13qNwSNkhV1xTazfnQVjee2XfMoRgYoEgVdujaNPUSJRjzrCCthxXBtujg5Tbh4TrrD5qMPNXLuEXqaG",
  "key16": "gmaUKtfjEPim3yJFzAiZidsp4y4AzbJ9YSfzMgB6JUhQQFiFZUfCdByWWuyvk4QkpFJEZsgUkoTPedHSxgr5taq",
  "key17": "3BT3w5oLAA693Ezw8ckzBqRWXbAKdUrcx5BU3qzSETaYo9u8hBupuJqcKszuGXTazzWYrFD8J8B2GDy2WtGRDuuU",
  "key18": "55H9fTq3JkpP7gr3kDSn54CefqT2E3dXKuxrjCw2VVu1kX6cS3saVV5AzJ7PVqT87H11fWXytzwLfARmeEaCLdSy",
  "key19": "2YavxnTs7ySfDEKVaN7H1SiieVWWgeDLfsFJi718KrrPjxyvQfhg4tWv2aVXmxC1t2wM6AtdwLs4gjKH5HSwsS5E",
  "key20": "5XVKYKEivUBmJFwtYErznh1T6pA3Bu11r1HYDXthbpddswHDCjviqrApjJvG8ivcU75CqJpwa1cKhoCJMz5RKnCd",
  "key21": "4Kwmjjs9cPqjsUX1E1eTq3ZcooNUGLcadkQQs9zRBJZ3SLtE5p8Acx2pXPdSofEw3ShZGHWJrwJjKUZYkD53KmZX",
  "key22": "4UgdyuVhYkbmPwWF1Jx4EXvsdeiUjseGnNerfF82Yej3wqmr3ENMgPvmWUGz1tFJXroeoMWDeAYXffRmzRXL3cX8",
  "key23": "2ge94Ti6eF25wy6NvPUN2sZa9a72A7RnxoanBNtwbJLqML82XBSJqA1aMtvvRCmFdYM4mqAEAZbYWNYKSjMmqLBe",
  "key24": "2x2mn75BvgefsFmDVJxZMWkPSxueyVbLWkGcFADEUp8C1gJY1HE7f8aDBqvVih9NgJnT8HXWwiEpGEQRjNJbSRyU",
  "key25": "5Y9LW9R3jE6btKuccHZaqTLopJ78XiC38vQyWDwt2nPkKZWdMHv8Mjpy6GS1Tav2tHo3m5NdpoZJPTYVK9gVGbqK",
  "key26": "59Ff2MPtzTZbgJmeyXasdkExWvtb7DecgCzP6LhRFFReeD9Uk1PGR214hw1DfDWHA7fwyQZin81iFvxrYpmaqvoE"
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
