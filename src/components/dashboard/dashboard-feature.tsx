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
    "2GBTj1JjrJPeoBbgX14geQ231kde4xneV6Psyi6tob5x7AL9hQeVSBC1TSrrxxQ5sYmDDZk8qpLc58PSsf83b7WR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SXi22FvPXbnZxMqRi83a4VZQz4A3t7dLXAvqbc7u9HdEfcrD4NqVq4nFS2TRvDbLKs59Gt71gGHkG9EcgbQaP9Q",
  "key1": "5yCGxJFYS7GZnkVTPNLMLFSWK7ebuSeH1BjMWbaVWXt1DBdM3UkvPGq7AjWwpy52Uz24Gek9BfXpk4D2SvGWjMqS",
  "key2": "5PffQ5NwgtmatF4zpsZgSFUgFaxSnBBWwWKaezDjo2McrwgQaSreQvktsQxJFFoJdECqwkcRpi4JRpVV8X6ctyEQ",
  "key3": "2c785kAzACXnQRKnZdRWfdr1sRv6Pg1Mzoatbcp6YWttiJVqf3RHoZBZs3Dac3jtWA7AELS2UMicMrX8tBt9QUuf",
  "key4": "59wjFPUF6U6v5fp2z4yaQTHTdQtFq8Kotr24jHyQJ3dCNV4TtUhMvJnLw8mmLpjLWKsUPozYDMixAEJ2nzxCq2hu",
  "key5": "4z9LVgTsXFn1e7afR7GH1vrxhGUvdDz6E6A723c5WcQMR6vmxmppgi2b3zK1Css3o1bAdocpeWc6pqR3yYPLYQGZ",
  "key6": "4x9b3z7FugrHSNYetasJaaghDustq8qCP9kXdYN8nVXx8RrysziwiXnxUofqv9fz29CP8NjvCrV9z4bKVCtjcYmp",
  "key7": "4HtoQvaGAo6nmGKMn76aRy1eCKTzp3gP5Nt614cdHAeCe9moy1wBsJe2yySh8NjvDJNvEXV1MZezMMCcyrfrEV1U",
  "key8": "37kFgGF8mo5anWQCkCiisxJ3VgpvZfAarF5JGNQnSoVC7rr1iaLCSmGBmehXbujxQEc9BMBRqXzHJNmewT1dVkyS",
  "key9": "33MuXLjotT1BghG9NRgjQEYqUwmCHd2yEVnCURxFkRLdXxr5gFozuSp5bpFYLwGY3XZZvxiMLoqXWYwA7GZt1jHh",
  "key10": "HebhPqyXVPzp1KxcMMcP3fadyH3YAunpT1mLCwJUfHvJePH7F92u3wdSadsxoSBFjGoKxRgFXc8wx8J3exXLegm",
  "key11": "5pJB3CBo6FsP9B2vGtMYyHpPxCc2k5ziXZLbdrMHpLxTQdubHP7iECt7FPK2beC9onyyjXfYnNVJfFsGPSUvXB37",
  "key12": "3yQAfbCxwHxVQdVa312n3YBvmQx6LYCuxDhS6vuhkKgusqHawhaEwmjNugX7DjMtsGceg21LsZQRke3WpZ6qF435",
  "key13": "3jR5YDvjeYY5L4SEFMcLZhSspMYMNM36FsZ1QdtES6boB8iY3PvfrAvoqXXSjaqiebpiNHrtwuYLVeq65YGQLFfr",
  "key14": "65EV8sYUCX54ddZWmTMtNvz4wKjyFY41Am6hW5jE6KFFd5FPd6WFYvrZu8vgPqqCi6ZYN9dUVZjQyZC2xbQBBFLq",
  "key15": "3S2KLZpmhgGxHz6QaiZVcp1m27QLkYpbyNeE3n89JTmKqripVGTbQDvYxw1RsMZW5s4CHvwgDXtZxC9KC9qHRSr8",
  "key16": "LoNkaKn1h7WPMx7pni82kqLJ57UQNrFmVgSXpoAdgu8c4dwxbG3D1wUQtM9MVR9i4o14rLhVGMTgg5ftzRP5VPi",
  "key17": "4TtZcRckCSy5EVkQyg9ztgZnrPvPkgkQJnnsFQ3oNs5S815gtCWkuopQqoC2YdKud19X62hKef9q88ZbJc17x9So",
  "key18": "4A2pZykFEe3u9FrdWnhkMtsH2Gd7pbjoPz2EANDjRVFvLXwkA5CBwPP71vS5GkyNEdHTsEfAXxWfd9HWJMyH92WZ",
  "key19": "2CbS6qVcuCbPDbQAmSRjxChQkDddfEKsb8MLmYp8v7mgEH71iwwFUws4HkucLEvrmpLFnUEdz5NoTES9fDhhFmQJ",
  "key20": "3zsYV5zDqv7ASKadRVeLRnhWwaQUUqQEmhLj44QKkRCWiyNLc9wBQvPDpUQC93ydUk9zGunFb1PP2NUF5bz9Dba2",
  "key21": "38BxQdVbTXDCi5jBstR7KHosYxMpHTckCGhqBPKyBsjvjVs8WYFcQALeLQE5qzR7XiRmfWmovb9ouayHvX23gAtL",
  "key22": "Nq1bZXA9fuwtJJbVGayAzAmJme3z9kCX34Wtd7jmLFrMbLvJoc4JsQuoXw8cDEtvV7kyQ2Qz6gGHvvUG4JVo3U9",
  "key23": "3zNC946tov6ZxrNdtG8PD5myqBVMHqdTF5WGdSUuR3b4xXULmtq1DB9hzGXXq9ThCxgzkN5fyUzVFFNaJKrCiCtD",
  "key24": "5PY63wfd69C9B6xoHFDqwqmbhS83jiccebELvEFH2anysE93s9cQaq1FGx4sYDRrKzeU826fhR2e5cyuRZHSat9r",
  "key25": "4g2bdtV1588YCR37ZBSCYGwpREJBMJbtztqzUv3PwtuccQFW12CTxqMRCQPG2U84PF2iiLpZKN3EQc6PAvsMNR1y",
  "key26": "DoGg1aZuaAZ3cu3kcSGWt6Hj9R8aNrSyaALr3xqreNit7ZMLjR23YRtT2kEEfNAMuDNXDu1pqWBZ7oH3L5Rdfwe",
  "key27": "4Y3x8Behr3tXSw6N1mKGVpMX7t1bBGS9EKBHhDKSXZhNP2nVf7Jc8Z8B7zngxxP1anqza2Tf1R5B4AuZHyqeijhQ",
  "key28": "4YbEcPLu9XGw6X7kKtBuhp8d2bb2eDGzbgsxg4hLxSC7qyzKFmFTjNaLxS4XRqsyuWX8xKNWwJBxEvj1gTLMgxQ7",
  "key29": "4EbEE7tcT8H5AXBvTzoo6aEDffYM8JEGBwsrDCZrQzMtYWzYtgd7GSWgAWbDjfQKAA9KyWXNchPEDqSA8beQfntm"
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
