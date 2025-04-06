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
    "4pXob5u89e6QYQ7FmW8ouW34wS59FiS9eSNU95c8EmXPNyvgjnLwp14WTWvCqzkzeNhC5RekEbYMLe9zFHH8uUpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJRy96vW74t43jQZBNVPRizFUF6WN4fjs8TkB8S1RjWyUeQxtzZkKt6UULzGw1D3JcYgK8XwyayrbviaMuj8rRc",
  "key1": "2YToKVeAB2ZkZasXxcUNwpGhabZYPPcVPAGqm6xVfABbqXFYnWhYs4WtgrzFfjADizPYy2eEBD2w7mvLbrtQUdeP",
  "key2": "23YzJhHRPjwWXNuFDYSQd7MiCkwvYUBsU86vtrqbGtixVdZhBByqvPqfa4U4jXHDmFWJdZk61ktTJ5U2JBPkENys",
  "key3": "qFJkYQRd9mPhVqtvWwrn9MjEs1eDnviVvwwQLmGh5ccK7G9ZtumLyRs8mSRNn1FZkDud49UqMN71HSLQg2SddGF",
  "key4": "5Aicv8G1sACtGr97k2QvjxpanxpKgCRFNyewaehxBWEJbdytf6tMXH7HwQX7PFpMtn9u5GqA7BCYrtxhtJAnV6pv",
  "key5": "46vJjUmAsu1JnjN6A1EvMK8hg9zpQK6zSLgXSXnCoqku7xrE4K34kBX34CggLjhdA7ynfgDoHdUqryvnuH8ptuxw",
  "key6": "4WbKmqTPnxf6Zffd8iyhwgo4xDNK3iqh5TicVzeQ1pMWXUExhRpkNF2EREAdxVE1SbGYBetuaj5XHEnGUFKhUQ2m",
  "key7": "58HCrDMEeTmaYdBwuSmc983eNyNuo5jXPq9dkX9Uvm1ff1uqcZUaYyw5nMAMJqtxkANgVcKdUxYiooFkt5nZHeNE",
  "key8": "3gHNArASwCXfW1zpvV18EPAc8hyLTse2Huo7GSVqNA9ndVqSihMf4VQLz87UkAXPop8qGasA4JU4jPpmcZ484znM",
  "key9": "5wbiH5dgu2f3x9vCDxxMtqT6mbLvpgnLbvo56G4Gcnpd5ok9nBcBYankD6aLMiVCajbXCFNav2Pb86KeYVYGBrxE",
  "key10": "35WZ1MTs1ezvRMsosSxPnSBQwFvEQ7huwmzjp1YLnQMLHt8h1ry9CiKo5Rq9hf8yKw1tEetihQDi7Gmz7EJZNwd8",
  "key11": "5qPcr8Ynr6z93EpY3bDqxMYegZnPuPoUc6PZAAPrVDNjv24mpru6Gz8uDubgd5cNkp2h9pYKdjozmPeTar5yF5Bt",
  "key12": "fqVLPRFnySZ85oJnCzVpf9xV3MB1VXJBpG9kBVN8j5f1iEGg1QGD7yoUt3iSwdJW8cRytkhLhEzaUag7LzAa2S6",
  "key13": "E3MQeEb3v5Wtwu6jceewxq9QaYFTieRR2PVPhzGvRoPLBwbfHRiBDmszC7azY9Ldp7XUPXN8jpWECPbx4uXJPf2",
  "key14": "2gXjjGfGnfvtwv1hYc4hKQ9Hu8EFDYLFz1U6vEJLKsG4AbJnLxWzSkHseiWynvgZ5TbWnW5eck7u5pPtAbLgEwgF",
  "key15": "3nxkgbe8uiQzQ7bCG3TrNezJUwv5DuBbuXUVcYHxmzjBtAHDu4FzFuBhUEMstsp6xGCaKwE9onwF2oHZHMFpmmm",
  "key16": "5ztC6sJDQqhUCZXA54ouf2ij5VMc9oEv6mFtWBeRE7ZQDsxjW2rjncsPkoCF5NpXaxziG2mf9sZk31HWwTQzhDzK",
  "key17": "fbvN1bRWtH6ejjsh4rdM6XhsCWR2KMbNQPPzof7juvBVbdTt6XGHjpFfSxrsccqopDddCdmCXAEfKXVveWGNVgH",
  "key18": "QoceABS7tC5S3cmz6fJFKMX5rs6YG4Nd9E83GBrHvCuAmVanVH2fS3daksgcofZhmxMCmAsSVFqpVMsskQj1TDN",
  "key19": "3xvAkJhuTT1Z9eNPc4uGAa221D9ZQjqyQg6BTP9tbeBWnSZzbCVB89zMZjsxREeACKR7sGtJj4F7HwrDVzknoJWc",
  "key20": "2Tiu9Zq3XKfCCTY4QKFQg49eaBhymCZWoLCwEAnvzzQmjd4ngpQCjW2F57rwPXXfbHteBu18pJCJBk2eQuSpkTq5",
  "key21": "4wp2fvHusJYkvVEzfN1Y6tnbzZxdCdZ4Gz3usjT95hW72K4LGFQF2FTYMgzpFJFF7uoU8M1ycUxtCmgP5E6cy18A",
  "key22": "2pu1oTmbqsZZVdLtK6arcMibEv5BmaP7uGnm1pEQQ1xYzc79hTjLYPhyRUVBgyLpEpjTXmgoVVqu3vURgbgNA2JJ",
  "key23": "4kWXRoEZNK6exyyQxkLMMS7D8NtP2GKuYPnEbJnrUvV9ypnH8vdqtnB34Hww9VAjHusrDS43e278CFiNVgTU3v6d",
  "key24": "GTnXo7kaQM8mcr9DKsQbhk3SHcEX5CWZzoz3TZ11t36peovmVXLXbNSBgNA1KEpdRUCTRV6JbNhkj4iggZHwRAs",
  "key25": "2gnRcUqyNdeCuBq6KeLhnZUNzLS6cZym5LpvZkW7s8v61JSGsrrydhNJ3DTJMkdDVsc4DsNSfvXsf927QjYa2CGc",
  "key26": "4bPSuinH7DBQH5qrm6XPs2qaJXkaTZQQmKCGDV8wfWokufTRNTQKsQzE4YJoaGZCJsoEvzMVnFBpH3WHWkn2TNn9",
  "key27": "BPkNckzTC49mdfT9b9HcBhEu9vLtCm4Mc4SABA3aJPnuy9Vr1eN3ZNbLLbc6fqpE9bgYdjnnQUyix26FkYBtLMc",
  "key28": "2LPQDEaMaDXi2xkXcdLyn8Xb7eV5Lg8uTAGFAznMik7exs26EfXEVhFrSQHJA6Mbyv29z9jBEN3jJcCGT1TcAhZQ",
  "key29": "5geXmVcXmnz62AVdL6TLJpv9YCPqAJJba1d4RLByn7YH4d5BzLxNgUk6H8fkVJDJU1qGjMu4nC5D9wcoEcXYgWHo"
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
