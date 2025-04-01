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
    "5vrPhYBAy7HJ7fMrJJi3kXHfFCEiohFE2mLUnzuvBGy6zWcaDTkg7CYGnc8XGgg4rFaK3wm2M3jmcBq4Bm3fhD5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYPLeS1NTYEnnG7NGHtLMDEajcyYSE21rkBgpSPmKrhddQXxUgsXxYpdCMFUoiYQDBJPbcq8StdXcScsAmo42Ph",
  "key1": "aGYXGvaZr2YheEHfHWKtQxX87jVf52db36DUV1tZhMeJVvpthSg3r4H2EoaRu7ktzQoEgggzAbfEmb36ZfZSsYr",
  "key2": "284x2a84naPFqqXVSBFkkTb4PigeiUGmCfKWBzAaxqvXKT3xHWqrrtKWVC8qVhV8be8hdsm7bRaWc2pYJ4SrcTrG",
  "key3": "EihJhMmz7HvuEcupKkXTYmE1sWi22cdLUN5xTLZU2yPkWKpG7ZjGtYtoSPqqpT7JZKSHNHgugxWMik3gFQPAApb",
  "key4": "35rwfNEeSLToCKL3Sx8mP9ZQsKXvTmKrrQk1mYth2oQg9KNfxTBsusn1EWcgZbt237rGcm3seGfNvVQkyWAKVGqQ",
  "key5": "2cirfefrSRZ9YsFHqXc5TtpkhQpW5QrTwv5PattpmXsLENivZgNqA5oprK79gsRsLLnWFKeGypA11qogb1N2isUJ",
  "key6": "4TtoZjn2VwPc7XvJhw6VDHWbG5nyubkJZAYbf45fBrtMWwDGNZH5r9iLFbdAztwrESkf1E7NAD495tWpCdSNanSs",
  "key7": "5x9JVHiw8FJ6oZkVPHNQtgegdMJ9W7s4s4Gzts2DdfEJR3qTLB1V83YbXBH9qswimLZEXuzE6TUQngp2haPBsQhY",
  "key8": "3rybC9jdzu5gZKJwg9z3qV8qEvP6xAMNe63FQK6YHiWnhro2Se3HqWrkGLYtbmGSRzfjze88UYfNAFJXvGCYVLFt",
  "key9": "2mdKdcgYnPhDPY7YAd5EU7ExcjXsqac7NXVpcBtMGHb1QcG6hEUuT5NXsb26AxrN95SL5Cvt486M5NR23hWyp5xg",
  "key10": "XKm6kcrgZskimVEXvAPG1zv8n4k3bXN8iA9Qha87fx4S49ZzwAYTpjoA3mVEHQVCkB2w5N5vLpBjo8Gjug9hXE6",
  "key11": "5NTSb8DSqeHmZPt4LtaJaJADooRfqm1XcCVmkPAhqPvpdgpDY269UynWFiJRY3NChchpRAHvxvdQEDvj12vmfe3a",
  "key12": "yoYyphdnNmtKswUvNLxnpnXfaGvVxfa5Mz5dZhUoJ24EcQ4zcpvdc7UXebX9Uwe77aKfZX5iRNhYxG6GX2cx41p",
  "key13": "4oBzBak4cxCBYDPrAay62nGtTojRSKeLBxS6APesogYY19qPRobo1oLk9t4w5hPd7c2LXLDctuJmQEeBJfAnzshx",
  "key14": "cSGLcqui5xEPgV1tSkuc6kpbUEvzzxYKdGZBXuA6ejnvcS9h62v4dxfGSsDoG37PJnSZBAEBuAa3VE8uVdfBDGM",
  "key15": "4T7bLoHadHfe2PMcGhvK6eqNVQBf72wrYq45rsZZsVVowTnQSm4o9gGxGFxnmhjzYMH8WbgD5HZk1VhfY4Z8gWeL",
  "key16": "3hXmKJ74tsKocjBVznAwm68X72jBgcyZfknb98QenkzXE1uDfAHVpw1hRRfwNcmv8v5cv2FPb7TS19KjbVvwAzM1",
  "key17": "3WThU835HpRN8dqpYLzt9vSk5cWyz7haEJdqK3Ze1HY8J1oGWtxWVuDWPa1V4y3Hnxg5z6utESdMhEUutSTYFyQY",
  "key18": "4iRT6xybbLM7mFhcGXjjfyGz367XvQa9ejV6fuJrjMRhG7XsknB4ghzHpAZMQzteHJmZViQ4WHhETMgFi5vKLMTg",
  "key19": "2uXuozqdChNHVACma7iSmBAuGk7AQRLEmJtgnURC34q9VoAE9uKStQtds1TwN8V2zwFKUePJ7rhvtV7Ub7GT5g3Y",
  "key20": "58GYaguEqcuLBTaTmqJ7JkteLS54zveS5p8wUMinJ3PqbvAXu9DL4KezMpvfmqp6M75zA4aTUEV1WugpRKbSCAfB",
  "key21": "4NkaVo2QE9z8xC2rvcdKsSwFXSDB46V5NVFTNRPXuFTZgypCzfevUSomCFBiiVCig5xTpUC7CPLcP52aSmcSQbYF",
  "key22": "4cZZ9oJx3Zn7HdMGffcWEQhJrrfT2ZWw8C7v7XffKGddbwHR68F2rrhYLg2tptYWcR9oqjTFh3E5e8qyD7FyS7ip",
  "key23": "QqH8D3umbBAKBWS4gDCs7AR5BHrybwy9DbBhhdLMGqZomrdYoUhAiRJDzSCyMCs2t6XM9jVLZ1vBvCwaeSPwykr",
  "key24": "f9WbZna55uf7g38RoioptpPRFBjomx5gVhRUKgf2XSHo5ozJ7q9hbuPRaBdV9ke4t61EfR2YRznrhihLJoXijZB",
  "key25": "569xiWWKRYHUdZndKZ1VjhQzk8FcTcwu2g1dDWa64BvwiuitFoK6zdHDv8zKuSJaBPCUmpVj2PYioaURKN2uYbKz",
  "key26": "3RUSEXYJFCc17JKD7bv14os7pDFuBH4vXX2oEmXFznbne1pUamwNmUAY1ECywq9xoixYfeDFn2w74Cx6itPCq5r8",
  "key27": "45WwQki9QjH3msQU4zNhf9gvkMb6HVsJd11ZfLCCV5G5J98h4Y6P37UMGdfFXKzeqzC7sfEDxY3XjWaGbFYgsudz"
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
