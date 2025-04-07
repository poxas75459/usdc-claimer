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
    "561X7CfQL8q9iftPagXKVnA4tzZHWMkdwo7ncd7quoujaXSC5ktPLMGm3TTdFVFA5oZux8GbkqN1hXNy8NXWBSkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6q7xZnybMugfaGm9J14BD1J4onZQgjfXGMpxn7CLP7QvjeZiCHuG9z6WRybgQTGBV1FZxP1yEXcYcaEMmN5rb6",
  "key1": "2TKpPdT1PeMdqVhvv3EFaYeaAq7LSQQKQxPkTDW14UfvMRGfgWWcfCm65rLNUYHvoYfwyWqNVwS1iXAUuYWvznPm",
  "key2": "4RyhmuDq7p5zf9gekCNqqqhCZy2hMTkqVn7DSknrLYQEn9uaXSXah9vXTHRDMXoNyKCBHTQ4V6pKNgP8qyebzx7V",
  "key3": "2N5u54AMbVGTt4zzDMbRyyLFt3y7tmSrRUdrKQNEfVyNz21VjRVGuzKqKgwQPJQDp4wYAH2wKodLfrFcAQgkphXV",
  "key4": "2rfNh2BRUbzqUxEWa97TM4ZruF5qQDz8HK1vmDUJher7RzCJz7LWwJuRJKEu3YQhzmtSxDi1UD4ALrPRotqDn8oC",
  "key5": "3PduMYVtSbUecDdQYQL2nN3mEgeyRAveuP7HB11kWmNHaN1AyqLRiKVs4NVAMUGtE7Bp81f3BPj1ndPUvP3y8Dhq",
  "key6": "3ZnNvXfBowe1R6WXbcQqLHLGQHhrLNhPvht5USSi6gEhgcuaDfkdgGQgyHDxQ3PgZYU5SwUq2jkv4Jk8r815W1A6",
  "key7": "2HXHafPuFhdAuwXG9mZyZxSEmTVUaQ62rtUWjVRprg5Fk8RevN4QVCaT7SKWMhomFBL2TD7XViZAq94buKQcHHsM",
  "key8": "3TcXtWvCfWqR8cq9Snk3wDYANS4qKyF5tUrPZpDNZd2a6cj6DkJ2sFivdpU3aBSRVxxst4kCuQXKCoiAWxfjEUbS",
  "key9": "Br8W6VS9a7eUD6am5WhCmMRJTtauKcRoZ8C6ic11wdKQbsWJsoNobaxQG2P2j8JqiUYEnmuFK7GhfiHZBbrszCj",
  "key10": "rkdFdB5cKoCt6jHeKthL5mkEbnLiUL2rGu6uEGh6J6acbZ1aEVz413XKbNgDAdGako81Ema4HDHYVj9tiZYdKgv",
  "key11": "2YNG2WUATVbo8LuPuTVgut6zSJx4uCAXTVLWAtYtuorwci4zmVn9CBT76F31hoszSrEnLYanTer9pCqQX9MmnaRT",
  "key12": "454oKFnGBToWh1RbRsUgN2SAq7ffMmpbudEsk8ANgXP1yv1CioAL7Dr6EAKbkoHm5rSqorESAqsYyqhvj1U6D6jF",
  "key13": "3n1RKdBv3UyFYeoKWi9Lwcx6tbfMz7AZ7nVxL2hZ6aEc5AMtkHvW2MjPaMyqQ9M9B6VdK8DdB2SvZszo56YAZf4J",
  "key14": "58qLNc59PmhKqrWJjAz8ogPzQDrmCbia952KhjPpcNA9YY9fJxRkhE9rbpxAooy95QNr54F3caSMNCHXB5GS6b8i",
  "key15": "45MSgxREEZQGnYKDVyfJjBypVMJEA2eeAxLusvDMfuFKxPbHYN2vd5iSMCC8vgueF5PkDBkU2bGbJ9LuYVJb7FrN",
  "key16": "3X9hhCjYTZAmSVQ6F7prfL9isSgjAgxtKV36PVRycNUaByPvSQirchHHD5jCRUPaY86w8VnspFnaBbnVKfC887rf",
  "key17": "36TS7AaZ97xcM2jkub4LxmXoctrUR7kHtuDLrwcWiBjNmzk7cWmnGSWB34fL3o139FwxriSmzEgzzAFoXex6nf5o",
  "key18": "3GaPQ5EWTwB1BfiEiQ9dKVLZ2fk4aGGqyqKzkhF35koW4PbAwPoMhAce9kmDEdKa51Qq6MtsCd2UH7wCUPbKy4Zh",
  "key19": "2xzr2vyreTP2KZEW8idvLipraDtUngnf9B8J4TxcPwktS9MPrfQyFMNBKGrp4ho4tvrJwBkignY1hC66hDqokXYf",
  "key20": "3Lu6TEmuvpYTEPNk6pqADweqHiKzUYerEPRaMeZvACYpU8D8PFuAj4BUp9xskYqjVUK3nHPr7FmFw2g29DqzirVL",
  "key21": "57dX4X9fWd3JU7cPGS8HipGmCdpbk3uyFGjk2umW8uGiQMe2cVi2AymcSxoeGwMzpXf7kdffFnrApZU2eMhhXFNG",
  "key22": "673c4MK9VmJ1ihzYcxR2Ydmv3zbvCkLXD6acqYxHvVzhD3dK1hKtk52M5YiCPyToctJhi3ncmyrQsUL9PQQ9mtQe",
  "key23": "3LJtHLg1M4TAxhwtNqT7uQFqiNRhLkPvKWDbMJwdNmfWJy6r7h7F8mruH5SmLXuDUDHAGfyDvopG4HcWVu7sQzfq",
  "key24": "ZofkKL7f8KTrNBiQMvnryLddt7L42GdirMWQhr8jdVHaMtzwYg6R92oNKYaaxtbB87Z1NorHdakDWVWR2GTYxCm",
  "key25": "5hS9eMmYHPt42VKgfVC5fyzRyAtMFqKS1dzW8aQkUZZAAzUmGAWDAq5omEvZv8YkpWm53HjGd2ByNWE9ox1wUzaK",
  "key26": "2ea3D6fP3QhyTeXhkA8R7VbyPYuobxYPLrYVPntmcaabkvCoq7juXtLgN8vv5SgDnM4EUVeURXYaAi9MiQmi1quQ",
  "key27": "33jUZG2h1qSJciEFkwsoCe5zFLHji4MjZeSuScNb9ZJhxzfaxxbhia9LC72gkzRaE5GngVKiVtAv9gmQRg8SEfmJ",
  "key28": "3X3VmxL3Dn49PhKu1XMS8nV4Qy1mfL1WtvRcy1ucSGiURzbwRp9UkjUdKjGHfYW32fZnW5pdkhRXtwPHiMPidqrb",
  "key29": "3tFAgCjuESGnNhhLkRpmeoPpvWJqHJXoAaKhj7FDKjj4FMSuA8DpYqfDP4HrWmcf3MdH1sqsF6NVdmbTgqYWbm24",
  "key30": "3Mh43ofmNaTqoXZCE5ET1bYM28oMTLB967viBnjXHYGqHHQbzkvwcznLpgQ7iup6E3nPJ5syLmtLi4a6dZwBEziB",
  "key31": "5iu7fKUEr8pYAvcsrtETNvrF4KxQDcqbUnHVJx4Wt91tYtMYNUtsx2X5HnAGLYrHnrUXALCWK3NNhfA5vAfBFiwc",
  "key32": "4bUftAcSqMBz3iw6VhgYVysWrg8VtLeArQ6ewcX5zuvNSnYiqrELCYXiBDdyaS2qAw7aX2NP8LhvtZJT1FRXhUZ7",
  "key33": "2URkLiwYh1DhiV2pUGWPpkM5yUW1w2hqibCdg9k7nnBHpS8aPYqScncwSCDmvHM5PwMcy7zB4K7oPAYEZAETxDV4",
  "key34": "4QeYfJJ3Tf8eUCTki5C6L6NpGXT5sXUWU1m4x9wRAfSmBTuGigMMWUN2xDAWVmMduQSwDJGJvsxpE6pijM8siu1N",
  "key35": "4WBra5DBFsd2sA95rCH6JgnREdHWGHRxDVkmEdABT7F9SCiZTNmCqFuJEigkbSs2HxVGrHPLEHPo2mH9se3a75Q2",
  "key36": "4K3T63MfZ9Jrh58AdHJazK7KeJkaAjoGYa1Y6Vso1kSr3AKAKUNqmxDdo515PXrk4YNZjXAvES3wEp997YmD4chH"
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
