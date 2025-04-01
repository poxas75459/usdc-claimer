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
    "2krTEjK8iBGv9Y4QgGMJ1191m9NGZATTheDPYsBAdqK3DP2jDjn8bwfbVCuqB8Wn1N4SQ8T3HNJ3ZPG969xQvcko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tyjLP8m2hCjr5qy2jxyRmYvdD2iibWboPq6Ye8ZAWSioffnswZ14Z4Y6pMrArAY1osnYFUX4BYs949iwXAJSAFi",
  "key1": "5BbUbFiMCn8ANuX6JBpD79TsGjNN5XH3whS53qpZ9RUPJ8kSPZd67SbADjT2cR5NJ7esmj9RSfuVPneACJNWH3y9",
  "key2": "3vjS2fW4w1UAPUEX8VEKQL3WAaecb7EjhomMZzwqNwSFEUTr18YQpAmRoj9WVLHWKGuncorcqokeytqi8rFpnpJ4",
  "key3": "2kHQeT3PY2FKk5jWuUYkf8xB3Wf1KUVB7qD1J4uvMhHznGaDgmLurmZmES3aM47fSqdM8G36LnSH37D85CfgGsj6",
  "key4": "3jAuJvPrmVHWqYvADCW96ih11iMvDNh1Hc5j8RY65sFMtgsDnQGunnsmMqi9oYciUVozpFZLyg87bkW5KaarzPp4",
  "key5": "3S7Y4ayH3xTkoCVisMkxKJd5B9SqMUarj6nWVwwe4KerSibtRMs6jtEu5YcyMtxGj9n1QwCKFXQxjPtyPVUipYWW",
  "key6": "2ZvfRULunMWiCSmzCCozfJsADt5eZTHQfksRfqCoWk5f49VF3etKRG3wAV8nuhweWjBAyV1tdWz7vCewWSZZqCT7",
  "key7": "4sx7hFzRZnQ1nuk9ryJAow8ocCbiFZJTX8NzCSVHdXuvVrAo57nUvbV95kz9mDHwggPKL8xN9MZ7MwZinRxg6nsB",
  "key8": "JJf5QeMvtgg5ZtY73anMLCVdxUfvkebtD3KqViHpasMC8zACtjNZNumEcYbUoWAZEmcFaRt9bGM6AgRn8h3bqiz",
  "key9": "2dK9otdp2BsV2XpweJE2uRNgBgdEkoxHzz49dse6xFG7de81rcuwk7aC6AZDxCz9fCcWjPtjYqkRnWpZrYimxZmg",
  "key10": "3gaJSkakmzm7MzE8sHtSmVqvktdsqjCoXajZoiZj8dZcTQrwkMxmoXuvjqvr34kpqxzSfgbvDB8YADgYx2t3LQ6Z",
  "key11": "3PfN57n5J7488NuXdyo3UVgD9LNcjn9MjqkYKn7xJXTV9pHBSbPHVrmUouSRk8pxJCjioEB1yHs4o4y3bdDYg64Q",
  "key12": "5WRFS7bo542nikfjNA8N7Dtn4tdp1ES31KyVgSN5VV2QGUhd54wUMvtgLD1JSkeKVScBXYCMxo635VYcRjCn6WXE",
  "key13": "3zBrgd7sPXnPVejFAEMcqMJxVHyLHBYHqJvvP6XKSwUzh3ztAepyeyBXrQevahqeKNVxR9H7Rr2byy9dJFzKfrSA",
  "key14": "duKz8xENZXTrYqM8szJBuXyhUXbjp6gcEu5WELrNMzpA6Sxuo3eLA6VE3hu2RXBo3kaji1qFRdCp9SxUKSPQPVd",
  "key15": "3mxCzxW47oCrwAmRKTFmzCUB9SnioCGFrbCagbHfQ1EJ9fJVRCZmjtzNuHNN119f3n5NZeaissi96iSAv231AByc",
  "key16": "5yL56KhGcFbaTTp6aHLW32wVe1jZNBbX3QbHxGjJtNXfFBdFKCLmDHEpY2Tkf9cqUJfknhaAVb4jXVes4Bx3YiLq",
  "key17": "3JQ5EQZSSUMxqj38dG6f1GktjZbUcrsPZxuqAq6adR77EYBvPhzaa2EHAJecbfXTUdp8dQo2JnP6SYGrKk5h8mYz",
  "key18": "4mRe6t17GrRdZqYXESKkL5pSLBvUgzMM7A354rUzyXH2ppYGXHwCtuedeSsBLQXuACc4xXNAGiPmv6qhPju4gKy2",
  "key19": "3qmnbR7p1UsErmeQdF6x3qKD2pEqr1nV9tptd7a9fBNBQWKr7xHTk45yD9aGRxSzr5fhxHSx88QxgMhg6SC28Ddt",
  "key20": "3ieRQ7CdSkQKN3MBrsmSFE7TtVzeZYDnf9WyANUvEtkjcb1DuHSU6LzVqhWsjUqXez1HdurP7o7scoPkCuNujE4z",
  "key21": "4jskGDUKVFzgd1ANDwWZwue28gdEiNA1PbqmskCGRWM53GoMDbdyfhzMVYWqpjTVnVAxytKjfuSzYksj9nDnD6jS",
  "key22": "Cp8KEzUSe32UXX6YtqoJSVyKtMrJUzNDyvJNiMzc7S6jAm21odNL4ChZmcZAQnYj2kM9qzpRTDpS16J68SHZDYw",
  "key23": "8PcsvniD212AtEb3WEgSHvcdmxdCqN7xFHSrtR1YxeZu6Ga21Y1nLRBLGYMNZCVLHdPvz2Dwku4QN4T9QUmKWyV",
  "key24": "5FsjDovhDXocLnPx2Zjo9nco7hjsAFk1tpgwXtTwLjWXxyJTBTgU3g5E8xGKpi2veZH67pQzmM1YNBPqqP9n7J5y",
  "key25": "4VGoc1CmAGWvESc5MpN8gMmtXFn1Li9Aje7X2EB4TXTmFTgXm2viTfHDRbBHYoQ9LnaCaxQpMokWD97FBhPNPxem",
  "key26": "3yWsaMYj4A7ai6nHDo5WJTvTqCmHLBfKmK2aG9uu8sztpTPvpBMPPVaHrWLThUhTPYCyCXUa8v5jVazZdXBL3rdX",
  "key27": "212Ex3uN8fAsgDcQRrPNkT5oRJXhSXiwGHwfs2GKWEcPUWWdiZYjhsXTRZsxmZ7F1JpaF2tbgVojthN3GdTLbPkg",
  "key28": "irtpkK4zd3D9E4mYDtZHzPADQv2WgGx8rizk2rGQQSQcKy2tcU2tM8Ey4LaQrLeAB6tud7RGCe9VbuAnGdXw4sa"
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
