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
    "5qokasotF6A1YBZCkrwnzVTbvQNNg5Tr5ckYyo26SGzRBFKFSBAYb1jSjFpaqjyukmjG3C4X9X7fEpQ9Xysp6fdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7K8sP39KuvjUKzm2mKiR5RKkKR6GN78XyQJenq6dc2NbP4XYisPNhckJRCEN5YREPazxYh7G7dqkmo7TfzMPw2",
  "key1": "4p1ZunBeRYvD6nuyfhdkMqk3cN8PJb2dMLyxgCMWHvKuaukCs54oFfm5sEzHZ7eTqryEtJwn5Y56iqRmtoEd77cx",
  "key2": "396hywfwyHNbT2UxAgweqJtPXbHeVCY3CP71xJneVrkmtQgidfxYqN4b81Mx1AsMCdPXXRW6XGtBK7tD4Qzo4cZp",
  "key3": "eLq6KyWRKKB38WSEfTNjiU8exSNjcypSqroPtuTdaVR8DNqKBPLaFofBoqXUtweSadmWZ8AejLGt423T9Jo2wWo",
  "key4": "3px2iU6FBeV9eMNvV9d3Augy5TJj1CJ7x1cs1hzBe2c53NbGUZ3wcSCYudaTJ9ybwJtBauYrrFWaag1xSH1Xh8WK",
  "key5": "3i2YLitsZfiehuLzXNNsLBrY8Mzjf2TdJz8xP729GDTE7h38WvmDRnNe6wxGz7fFzRkMbKiSpKntnhZjd7n9Srsy",
  "key6": "2oD6iSfiGLSDVHa2jmz9ahuWnRPXSjmVz4N5knYNF7FmfT1ppwh2BFZqkWVS3iiAQh5Z3cuoNHheYJ385aG23syw",
  "key7": "HFgHsXaNUGeB7KpwyN1uMVNAfz4BAsMNU8wJYeveXSkBG6vRngYVYqvYGfxgruQh26zSf9PCA66BfCqWRavAQKU",
  "key8": "5hheKUYek4yVBQsoqYC2nmDtsqGYGZ9ZnnZVz9vvRqMVxooZLYZU8zjiqsTiMVw7B5ihZVwjk4tneNxSgg6Vj1Wa",
  "key9": "5HipvW3VEYeKCjG541Ke9FJFbYgMU1ewVQqbs1qTRRh8jXuXX89b4pj687hJfUuyFaSh9kY9ApDT2mDzPc3pEvcf",
  "key10": "2kYnhQx7qnFSXEdAU9QEaXThvpwRMTMoZMiUWyyLW8QzskVnvwa6aNbT2j829LEUARjWRyGSk91eYo1h6oih88Y2",
  "key11": "2uz3bRyxh5RKoWMWQwpmU9yo9qGKkXHd7VQLfCjkrKqb1py4YBMEyG71vLeUWCVYU9c9geaFgbbffTt2fiwDszG1",
  "key12": "3JpJYTMMa5k6KbDj7x7NFY1TEEY4VdHKBs8KHzZ87tuWurWXtSCBhq9nxUirTLy8n1Ei5et7SNV2uWdmWVBP1Gx2",
  "key13": "bvJ3F3Ht13V5ri8kKjMd4AkHZn8DNdKzxtntfPeHCsbFkLpRLF12MvBUw5ZhTz23asLJJXpJzBBvxHntsejkZkh",
  "key14": "28k1fVtfdtAb44KV2U8cK61iQzEgWoXU6avzNksMAYkQokeAK8zFjhdCxcwt7gFP2n4CemJDS3o5eg8Mna7sUBaF",
  "key15": "eUU7XJaQz92Sij7w6mPsJVsrCB3upZ1dkx2YbSJFvJAUie2zHWULF9h1cJf3yxtvBkk9sRY4zXMA2g4zmzarRi9",
  "key16": "dq6GzWHfXbbFBzij73Y3Z5TPSpPbS25qGd8uvoeEXbfHDJccykcViCP6NUXe14pexegxjVEcTfoirtYj8J2QRKD",
  "key17": "5SPPazeJejf99KzqP1yHbP8EeGh9jvBmEzMteGtR88W5NSdzuxEG4k3hHfGCMSe3bxWvc3DNzJttBv3KtEsbjjQX",
  "key18": "2XLpP8kSkaTWMS2MtXyJ3PVaetmTRXzXTPBxfAUHEtU8oJyU9fKryVsQQAmppCkB2XgvS9Nrs8aLqCtHr9DTcrRW",
  "key19": "4cnfBYoJV4Edq77bfi1q9YJLUWAB4sa3YqP9cSLvGtRaUUXgpzqA8w71o6wam7oPhWJ1MJjHmnZXjWhXoxxbG3zW",
  "key20": "2FWKBawr9Agc4MRGcF9bQsiBM4mRjK63NhLkFmqB4gv2nBiRrKGhNk32N7QmC9gjGSy278oVQyzE5GzSKmTwCWFr",
  "key21": "4Vc2Yr68hWtRLqRoDd12BAwyCBLFkBS4dcti5Jf9uQnfdbArJ2WfBNogH2vr3iSYNM2o6cEfxHBR6hgX5mZHKwwU",
  "key22": "Pv6Q6w5qEPq6jRZQUMupftSAfiuMincKSub8usMB9YiWpgxjwVEPhPuPFLuH6cNxw8NjQLKBQrk4Hsubso2taQF",
  "key23": "4Aki7STMYQvKVhoYj6aYpgy52qybUWLr7mzLBitQafLedonfJWQCbETGpcaSS6TKee8kBqbXtR8fU4QnUciG9NKR",
  "key24": "5xpVDDM7abHEA9TMVHQT1uhuSSaCL18bA1Nwt9dxNjCsuKEorwzqC3V5k6vAHMAGwr5Jyj3iLoGNoWbskKKiNP8r",
  "key25": "4cE6VYmd5sQMvWQavwWk5AGeLgsPgALnruK5cwN2n2sMicLHh6x2VK3oeHCiTV67L3UReuFDvcdr4EC5NSTC5NNZ",
  "key26": "45pyoKccE7JeseCjcNd4YiZPTfJajwvwok7HiE9zSM8eJLfKrihGJ8sr3Nw9vXitYR1mrHzS4c6sbhqcJ8DpiGhK",
  "key27": "CriD1SjiivSc3edGbjJQWzU3shBJkAqcgmjN2oWXe2xR1qUnFvgtS3BzLovTTZoW3HvXfUKtNk5pDbinGB3QGjJ",
  "key28": "5yYkgExAbCQvYbYDLTyoBcGiBPKjACkDhE3M1xW3KtVR88kgRxWA8dnNCADCUTg9uLR33zNUtVp3LPmYG8CYogdz",
  "key29": "5nmvwZoei5wUPc13FXK55v7jNWn8xYi9Yfv8Wvt5v6W7BDWQhmQ4qnVwptFtRSWouELmUcb2KC7Eau6dQxir76id",
  "key30": "ttQZswrQscdSFfocNv86k9bLg8PKCCSAr5gvAbnQQWfoAMnC2MUxiH3sCAHcGd9wNrrwNu4SkkerEV36AeGad8Q",
  "key31": "3HVSYkZ7zrTS9ErRx4C2W95LkXTinE58yAhfgdMDnNuaHHAzfYoAU9Wuj5Q3h2UCMJiJrhbwbAAzpJrbZJLTRbUL",
  "key32": "PrQbs1SBiEBf9pB736iZwCuBDxtu3EL46Zwf5P1bthp7E2yS8W8DNzSgzmwmS5PQQoV72czGW1nn1sku84xgpK4",
  "key33": "5R6VTBQpVrfySjc42TNPMSpwRrhYKCQZLNFuFozYJGemQWmc3FjWsnRcKNRkWRgWcXEUrLaApXj7CMzJUTThhnLf",
  "key34": "211vwe4nqWokbrfFRa54YX4EV678CY9cAqzHXaFhd37Mt78V8HNiBcVzDXScMqKwPtkJk3UppRdDoNoPVJWRKhFp",
  "key35": "iyCHJGrFWkUUfLy1QPujoekQxzH7izztUHEDeZnGrbwy2KHT6ix2AoJfTSorECV5WGktDj5ZrkP5tFc3sE7PHw3",
  "key36": "5JRMvp7DkpZVEf9aZEthvzQGcTbi93yqNLogabJrPLmRhcRrEvdbzpBYayhaW1PJjr6W6h9eRs8V7DLzst13KAzC",
  "key37": "3TvWXTb29kdsT1tqY899cUkoAeaYKMcVse45Kd2yrjuoP5DWanjZzRBzdFRUVtSWCEuSc5XTibSBnescwqNSp9FQ",
  "key38": "5D6WyABWcuPfHwBgB9h7SQd3s1TWK4jEsiELxKCpDCoRpNDco5Bijhd4wfy7CiLFKV2aJBSfZSCFPRTwe9LioKCX"
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
