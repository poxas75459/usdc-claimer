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
    "2cXAnCZ3qNK31Q2NQYwmnzwVNB132D3LyDEdaTkn6y8Z8uGiqPu7EseWTZJVingn6C3EDs9NGCP26dKuXhvYFiFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i11W2SRXvXemZtty1zc9wd4nnwhxhRPcKCuDfesjB39SpdZqmQJ1zPR7hDtX9TRwqD32PN3m2dMKinaNRq825UC",
  "key1": "4P5dBoB8wwQuguVaJAHVQ8CpThhmvyfdmGSvZp7BgEorM7KqpMZWFLJQePUywAmGW4XWvud1mmoayUxyv31c9N1u",
  "key2": "5Ab8vJRTZrVuieWRAb7YLHnkqLhXq57WLxM7NZBnTYLMaUTGsAwyCTsUTBJvn3Xu6xrCWp6V49zVepqf2zwLbKD6",
  "key3": "DHzhyANWHmUEp4N4jmW4YUH6x8pxnt1ryKafDKovo6MjqiCMnf8kJW6R7qKDAGvNKcDBKjxXhAZCdha8unPkhin",
  "key4": "4AYsyz2uBYwC88a3JxMr9ft2McNZ4ynNATegwmzbmsZYdWGwygDc5vPkHixrm9ReJmjnnSfDWupVtim2mP1S73if",
  "key5": "2fxMoEB5w9cj6w6rm1R7y3medrnLnQXry7USGzYnogRz3BFgZVhQjQBG5po51RcGVo8hK5goF5bsjoicez2Zf2qg",
  "key6": "4HpxvRKiDjKW3eVGdeGaz28FPMAuwJRU3PLAdCmUUsR5EmENbP3bvZub4wdK4bneAg9VcEDRgC2Y1hXz3Dv51tP1",
  "key7": "4SeMdDczZEj5wPD17z7mYz73uTUQNyZUaqw4xbaHZBqAuXm9AiXZ3uAKoAZ6PE2PzFQeXmnobEnwghreTghnS8bh",
  "key8": "4vQSQYsV7GZcK2oP7svuSVLbozid292H99zxd6KC7Xt2A1t9XBMEbPitPR6HMSZ8yaBk3Y441wHmo4d8G7YVAm56",
  "key9": "2ZgzXP2ucQU8o54ksBEKqZR92zw2n6GdCx364xJWH5qRHLh7tjL9xm3NftQFUuBtpGXPesAP4ZaqfEFHRgZxY1ce",
  "key10": "XiN5Ki7Dhgr1eYJArKuZ2YLrw5XDYNiUKcUPk45ZKmwuvWxCj7ByR7spRnkxb4FfDTzdDBPpuuDzsmhL4mzC9Td",
  "key11": "5T3dtjyLvzBcrpqkAuiCsgfq1XnJV8onzkhZbmx17xX3RxDUU4Wq5zmNqxWk8FiDu5SjMH8gFudaFnzk69gUks5K",
  "key12": "iSwB9Vx9116rHToWWhwfgTFS8hSjF3LquuEXkhNGn3svZXm1a7i6gtKfshrAzMTJsTyKxq67ne1rhSdJmdBdkuz",
  "key13": "n8BmSL99LKQ6fYbeJaBSU8b36tjWEPAbqH8LLFARnPXbZwAVCLdrsqAy5GdJ87qVZY1gbLbFcH4HMJBgTrm25cF",
  "key14": "5jkh4vUGMzLZmZYEbHhH4FFq2pq77zQZKaQuDaPjLEJ779QvgtpFU512aKncACCZBB9qwGAH7d9QEFzMw7AqDrvg",
  "key15": "2syUciXnLXRS15Qhft7wWr7sUmFhUHy5GfjJ46kyTZWZFkZp1EpZy1HoSDc1p1ab54tQ4WTFXbgEaCNRaT3cR8BK",
  "key16": "2nCptaMcujmSMPSAU8uJTsB1UDM7zxwd7T6q8ZUF94yoyrqPe27wQDfyq8s5VyXKoAXtgFbLyVfKGDAoiJdDHcJE",
  "key17": "53rqHk7bMd47Rm8xBoTQ12ZTK8LQhBTqshzb8j7jR1xhJZJobF8JdkG6geTR12FQhThQB3mDbx9nu5kFQzXiAJQn",
  "key18": "3PGtXphxzdYih4TWgXr7wFrz6m3Sei7GoD6aMMfrH9zv5oJGMAJu1MZPves6eJR3wzqgtma7U4dR5joeeJbCZ9pU",
  "key19": "3xCUdSgUxM6uXWdnzy2D3YcFR56c5DLZ6iVNnXoJbVphYfYXD8gKSZ8dvdCSDHaHRQGJstD3LG9hkkYfzaY19Kpt",
  "key20": "424o4u6M71MnaExRDLD1My6ZfP7vDTHX7x4zDeFQswaQvoaGsFmfNN5MozomgPekNXJBvzrVto3JmuUjq9kugAGt",
  "key21": "323kU4Qi5RaQoxvLi8K4D7T9JQBMXowHkwXsvP1KrWNyPmuruURSXEKcFXe7eDaTmdwPqtYkprUWkUpA2R7W7dX8",
  "key22": "5vVAZSdSXQkLXzpmHqvtczAL9ReNnSr9WfhgWvzjbeXczMTyH23XHDEfr2sszpoS3QwgjzoC19v8aGAo45jVq7Hq",
  "key23": "5kjCaTH5Aw9ho5PRAunjD6raNKtQgRRtWxNQwTXoqcQiEPb6ainvdbWQBUEoT5B1hRLYEmpequLEbRBUrZXjoP2d",
  "key24": "5P8WrXNUjEpPWByeZyyoPH7oaJuMzMA2tXFG7N8xJAdvC5WmnjegLktJgH25BFk7FzxGQLYPoyAxz4PJFnNQbzZH",
  "key25": "5b71NzGFG2ap3QV1v8AWPqLDTF23Sft1UoZEZyQcy8Hrw4c8gKPkZufcKDs1aoHCjCf5NfdPWVLmF96rEjy3UmTP",
  "key26": "7xbXtfUV58h6pqXSNV93JfQNo1AxEy1oN7EK1wckMg8joiLf1goC6HxYuKxzWbi9v6y11S47b5f9ebmmQuh4taY",
  "key27": "2SrEbgini5tePVVcxhE43xJh57bGSiVZSFsP6RYgyoti89yEgVcVU4RfYyVMWeWUdvCzVF3cqz42TQQGX9r3g74k",
  "key28": "66xsVX9sdzJ2psVPG2sKPGuNjDbW1PJRyWKYrUfTsjqken9888EvVthK6mfA1XNdDKUkocrezMbqkTVHWi3J2GQV",
  "key29": "3t35xAiSKrsjkjYxADhso4Pp3q9FLHrhwXkCMN9FmWputNMBPGY9zwq8HBSZ2h4TDDsDmsudpoEdHvChyEx18RpB",
  "key30": "v3Tz43djtxMWa9TGnibTZawX9pE9tY9L9xY3RKjswC22XAWGZPhNmkTqTTcAqZEVF9Fnqk8tu3mtqRv74JtrEzv",
  "key31": "4h13FzBdmPPFPSuFfdWA6umEy8xyaF7j9WSscWVS9BXYegmTvT65w2NpU2CSt3ukZg2QVKQV9Zd6b3TPbv5tjN8W",
  "key32": "2eaM9zV9p6WEGMkwo34LvBkwfaJFrpZT8ragwsGSHSkMf5e5tFUrzFKWHFgHDaAZ2NSHqS7WWXW6U8sbX1mNYhNu",
  "key33": "4nQHvSBYBSZDYdmdDZ8a2ar5rNEy2TKLCUjCMLrthwjrLZnMiBx8Bh4dG19TMHMW9RTxRR3DDaXksR2S9rwPHKDK",
  "key34": "4jFpvmFmCv4yZBgiTC7ZPFroGGk5vuaxG7B2edwf63VNfrVQFonydxxuHxdw9hxkCrFKtnAYmmaBBvKVr45SRzr8",
  "key35": "5GeCXoVVRsbpLkpqEXp6JGExZ8omzki1sXPxBo4JqGbMkv32ZgxT73C9b5F9gh8EEwkQcSkwb5g1zY3QxJTjNNBk",
  "key36": "3mEYnKvHDCDhJvWW8MvZs8SoXcX4QE61iVaUM3do4BdHbEViKWM26Q6t48YcpaiusUgc8YmTyKGybQiVDxE1ExAg",
  "key37": "3cWUUYFSBC8RwZSqNx8B4zWZ9t71HH5ZAsCuNb5XjhHbv84hwLqVBif36Dr4n4TNDjKS3sNYK8y4uz6cYpXRWpWM",
  "key38": "4DPKBwpPkS3TmFQK5HqiqM7nGBsovVnQeMrRqzKCcnCeDQHSR6UkpRHShGC96BHCgA7qkfqwe9FyKUjtyJhvqnmT",
  "key39": "2T5P9znMwo8KVFcK6KVhL6pzJavSicsMc2cb1v53Tk8uehVdo7kTzBCMJyf2oQqhLnpeoo7RmMbFZcohbR3vCcR4",
  "key40": "5oThZQ7AEjJi928zNpnV832qMuM2hUoesFoRZF7nzpXGcf7XB69o24z7xgSw6hnnwiXigMLzpq6yRtwU6L45SrU3",
  "key41": "5jPcMe3HoLgEVUgMB3aqhwf1Abnq1BzJGkD4bjLg11eREuoZBjKARdQug91vR3VjXhcsp48N6zkMoXJ9W4K8hsv6",
  "key42": "2nMrmLpzKGreY9UCA2dK6VWzjHhKwpUc2933p2nQGAi4zHmSK9YnEYvSi88t9ig85QdR7hB1kgEdQ3UVTK1pcp6F",
  "key43": "4gTpnxNy57vEPsVos6wNYz2U6pADLYpYa2q6tH5f4PNJe8q5EkeL5hc74Nojq9b6PYTdG5jpAbgjKVn6veqZMtpA",
  "key44": "wn7dGmL4uxLMVDXdFWF2ovUz9No869fp2yrtwS96zWU9vNtSFkTwjyjp6Kpw2rjkAMvVAZNx6fodEUGF4DtPtNf",
  "key45": "3JLzQZe3zZhdKLEfW4NqGzENfXWTunzYFAnvQwZAPHmGge3qY4bDd6qTsZJ7PAFyi2rnW1F4hkL8UjVbbA8y5DsB",
  "key46": "2T1PRMCJYjMbkvg5GPX6vLGirauT7a4LU1d2q2QnT6JUZSzTptJZuYKRzth1ToiVYh6WgH2rzvUDXA6QdQmWg8nd"
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
