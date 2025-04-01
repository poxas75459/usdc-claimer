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
    "3MWh34AVWnCZvWicdA1b9rAxNJAa2QXyQYRw91xr2UzL3Lm1D9YYoTQUS4hQvq9XVabX6WHAEnsXte88eNfW74ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K6pq51CAe2UcJiu1LexdcyMQjuocXsP7hHqThMBfMF3idTtPdzQVm7nFL8GBwCWj9LdZEmKA5Rue7DGzwdDA8or",
  "key1": "52qDKtjE33hpJmwbZpjeA5JFw83kmYmjngjqfeRMMMF7iChyqgj5ZgvSYb23nQ9zgsEttNDtNDPkot5ndsC94wV2",
  "key2": "3giexeNB8mj5PGyuzLuchNCWRAzS1aMaxDVmP45djt3BsUVeDjk3pFuveHi6xCjpYph7gipycSaneukoJ6YrUsRq",
  "key3": "2wQQRLv4d26TrLefpzrf6sspy1fZkXs5z1FDKpAM7aPkBNKoaUP4kwNbiuFheER2E9WqPLHpLzt9s7DcT7tSTiZh",
  "key4": "5HubRbwmofHz9FcQEp6uMhLjR5rucBph75ESBcaCLqKszqzZDe5ipVTAVp1oi9sxAi67NoPBYyrSQbNKrRnCpdxp",
  "key5": "5yX5oWr9ma4uug7Ezb3J8cvtbSGGzLJutSbC5jSfG4kTwpCwW3kSg4UmsgsH2RvsvmkEYFXhR8tv6QJTmaP7Kzwb",
  "key6": "3Kj1eqxB2Z8Juzeo8teEG3T5SgSdbDdUNNj2VF8GcHs3hXmUJh4KkEJ8VRp9XgrMdx4eJmoWzSJeDadnPrqFG5KK",
  "key7": "B3Jy4sUYHjLK7zwh6rTLaM6H4La9qnorr1pxPhqs7ML5eLzUTLkwbheE45ab4c5KhS6q9cVLAFSkfQ2ZvcySaxj",
  "key8": "2r9KJCkpWYT4wZJFaWyMUXU7211HCGBez7KffoMUXZqsoFfonGKUCyxdi6gT3ag1fMRB3CFmjpcXmGTwHYi8K9ho",
  "key9": "58EJ7LdSXXEU9ysZYkvpEmfa1rkKT8Fwj6T7hJjyPmBiKtc4fcZA7PCTWTXoAhzfKoS6YrxRL7VZJwfaU1xau1th",
  "key10": "2ridkCaw5nTy9STxsjoioto91CS6WdvvHMVxABBDnVgBMUtBwMTWYmei2Jj4WDWUEoMEbvsN5XDVBEBgkqTTedUi",
  "key11": "2nr14Frq1YqZHAXiESweSWcffwbnDddTip1GjH6cos3pULtid81D61nhm8a8e4SveXjzp1Wwc1Cc4usCasyWAums",
  "key12": "4g3VpwH9wLFpkwrcSHLsyo4cDogM1v99wiwY6FobGFsVjf2aL9YZEBPyrd8bozd9XYCLNaWvumvBvYvhWhMNygoE",
  "key13": "297tg7xQwk31xDCT2b3mQKvLS7vshjmKdmSPKefXTd9UDPjy1oAz3rpviouFAaAW8xrnUkN7tRXGiYpxGNeWovMV",
  "key14": "3grVZpYBqRvyx7UkCbYC9G1jwXMZ11mubLgs543twGLQaqDcsftCH5JnnizECWtxSAhSYRhPH8w3kkEhYzk25WXk",
  "key15": "49mE8LF8dCfy4LVoMjFbXQUu3qVzGfLFYVjgN5rcvPpfERvt3JJGMhBN18DSifyCE6MReZDAo5k9Hv4qhWQ129zj",
  "key16": "65ARDtvn2qzqh11aMtXYQiiaUGBypt2JzWj3fuBE8aPasZbPA5VL33bn4Znxt9FaiEieHKxjh4xFhwPbwxeB3JRi",
  "key17": "4cA5eWAn6uvLbwPXFBYmED11Vr9PBhAVBUrXJs5vKP3ace2cxepaq4sLZaWiyn2oVd1f9W8FMfHRQshqYEi8YnNa",
  "key18": "5dhtNJrDfJUVvAtBMkkUGAaEMpx13ABKKX6hw9bpAK5tsB7RdQYHwxY6gzLUjTd9nPFRR79dZFfLeFTa1QyyYjQJ",
  "key19": "23dePSGjoEAs2zbsCe4LJ31rRzdqeJwkihEjoe2pFdZmV8ykZynRSRtuj3g1t8UFXir6QZCUX3y8558TmWzGyZhx",
  "key20": "66p39ZU3e3xBessANcYYeeLSsxZJT51uVtrdmSi16mJUDzoB6mnspkdja7dT1VZeHzwsWTSo3FLChGD3XwcgzvK7",
  "key21": "4h8zsGeqDwXAYbzwJk3HpKMJM6hwYzEMcp7xMgnCRezRJzjRJ8MXv8uYNfoa3nZuyqT8LBFrB6rCPPP8Vkhiuzid",
  "key22": "4KB5YmteB9D4CF23nWWT6XAswi9SY1wC7V8vWLZKuYrk7rfu34MDCPH2UEx1XZ23BuiXGMvuzkCdRBKYtFaxgTvj",
  "key23": "3F5KmhgQ3jW2GpSZBWFd66ArAihPR5gQEijh9zc4m4i6BAq5S6PnqGzK9hdj3rXWJZ779nKYZtvneDEfH6y9wWMq",
  "key24": "2WSmXEBPmTYvtRFu24V8VSPusGxGqe9wLFgGxY2cCPxCNSYUXvAL4Xhdduez88i1jfWuxK5AEiUAg9ZRoqBoB9R3",
  "key25": "h2Q5iQwfCFZozJXaNpf86CzNuJxvDH1HNawM3og29mUgdaU6itbn4cADuxKPeSr3pFtV5gjCTFWq4YqhYywNGmn",
  "key26": "6WUDEirSsuGmEAdtbxFtEYFJ4CvVdYo1Db5uetKnkDwjKd8nREu3MZQRigLjS5mBESwQiRwbb3GJRujYfPPMppr",
  "key27": "c6cD8jCeu6LhbgkbsXvS1z58yDjbWwsPXQwVzWsHFqqcH4Qb22KqBF5Bg9HD8zXnNWqmvqsXfurdQyLfgymZYsa",
  "key28": "5uQ7uopUSFc7GMPf3RKevCJzjxiqaA6UUSfDTtHjdJuLSVgjDBUm4EuYnGQH49jUYg3zHckfGBT78kot2z7p6RpJ",
  "key29": "35BqV8PXqfntcBUJ7ChWGuGqrJ5Wb9mSgMBbqe2KAJq78SAXE8MCp6oNHiKRRtjKkVsfqx6CGjmyGKdEiWc7ZR5b",
  "key30": "2UcGiP6GwgkR1bVQwEqo2d86WoLZFMaP36x6hs8gPGG19KSntPT2E7E8SuvPxFRtfCwtvoaJmh651f61uK9XhAkY",
  "key31": "3uGCNNnvQLhDn6WTbuuBf3z7zz8QNbg99qatV6KZLQEDzECzEhHhYrEUbMxFmCNm24CafBxJMURkA14x9HK3uVGX"
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
