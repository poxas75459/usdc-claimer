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
    "2jhi8eNDfaewavopkVTmuKEyXBUPYTeVXWebJYYpTtSkBiGTy8eQLbUuNWZ339YNNt7Z2rFy9ifwhP4efDm2AaJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EHXp7MENYAtyXSc5QK4gdJQi5psLvF4wmJpf66hrqiNJnhf48NeobcMDFzheKsCwZPtJtgS46dUzNczzgFzddRn",
  "key1": "3GF3U43aJTGFFykofkBbEYECTTo8pfjxpveyJKd3jLQo22MoQACKuKbZeuQGUdwQ8C2tFkW3j9Q3YrMGUpAU5zJT",
  "key2": "4q5rDqcLtdCC3oUgukRcmXweEehP412zqQXmGzXd1bj27RBMA3roGD4dGdWfyFR6EGDs3FfZPVbrHBy4trPhb82K",
  "key3": "24Cfiiw4oBLnXbfuu7qJ4DA6NCcsNxU3STjmqNL1VSL5a6jZrVfUCVi59PrNvoM5ishsToMJaeyWJdAu5MHFicbs",
  "key4": "29KjpyMcEXBNf71YBLNjwJou6Erxvoy8VbNdGvGqUJ6KnY9M5WXVkgdsRH5mqQyuXbik7SizpkjKJLYtSQUTz6BB",
  "key5": "57wPouHUEL6UvHX1BRLUgzcXyichHLtorFnfJWps4pWW5Ec9bz77PY1QwUyAbRqSUMcCFmYKCGNUYYY8mFfWxRrT",
  "key6": "5FJ1PoxCjPodnQWgtxVEsEVakbUSkWgYe4DMm9iVR2LNgTSM4fCqczsr2bG4MspMjLdQS3pmdQfqKtLnBi3DLrDF",
  "key7": "49WAqLgTdAi91h6Sd6MkTiLknkuMN2AUGahHCAzAtRpB2j5TeZGDjqEcNqX3NLeKKsk4hhTZq6iEUJcTYsG1FmMF",
  "key8": "4NCSbHUUgK9wJq5BQqpQ7HvH18tt12BMVe8ug61ef5DjcPxiZukXXF4A9SGdgRT4eznuZeKYSHtZfW77YKtJibPL",
  "key9": "5C1zi2KhzbdzR1kf1ZxufQih7HjjF2sGi3kFYt6QsndFtJd3RJB5Lv8B8cECajiYxe362RXo65N4VUth6ShH7pJH",
  "key10": "2GJ4RYo9NVgVZjzePTAbcKSATFC34QW2pQsmpYrjCHFm2yYoLpmwT3vbyhim5RLwjNWakNZq2NMtZPF3DwJcuqc4",
  "key11": "62uwK97zWWX2TnZVGEH18Xy1d4Rikciy2E6yJZHapgXRnesgx7VLtevgAD3DxoYRzqEi4LhktXMBh5MyXHFEiYgf",
  "key12": "MKQUtvRab8wqYnSVKnSHb6mmWgPXNQCSfLSybT8my6yjYNrwRK2xiKdidNxwrhJ9TXQ7sKvksU6x7y16DvGyVcf",
  "key13": "HnZbpvvhQ1w5mcpysUHEbQNKcgKVpBsHn1LVNEwFyW2XPxd9SR1ozx4NSy58gyfu5pG6DK7TqXYNCtchw4tJpYt",
  "key14": "3T55D95shGt7HVsJqn9Ji29h2KK2edjFFbiSqy7xH7g4jAhZ74Q9ZJwcuM1P1ko49x8LHcGnnhbCaRnGVqZoN2YN",
  "key15": "4ciJHqKtD5FAe8D2eim9fJ28AJ5JVQ8RiNSsWXpEZyVBzttZ4DKtGbBdYAip4UsCFc6Gom6VDriPS948uy5q5Moi",
  "key16": "nLvDJ65EPTLcVUnMuXexPfYb7atBDSR7HV17hm1T2Aq5PgagYD3xQuhHDKoey8zzd4ZGt9wyk7tYgkANgHa5K2a",
  "key17": "hpS2TgcHWeLu8snGem6Juwk3UV7fpR12EYXUxJ52faNf4r43EQKTa9Q7dcoXEGdxhLqBDRoD8qtRZ7tdZqvpubz",
  "key18": "r3hgAH1CvTMzQYCxGtg12NRWgnfFcmyizE9daUN4GhCPgiGvxvtkirBtNwi9GWX7YQPir7nnG69pcVMbzst67S6",
  "key19": "3JiBrK3b6g6GHCR3qkhKLuKPUoMbmDiP1BZXmNxRV9GFQXRKddwqZvDZu1CXQ9guwBAPzn1MnAuGZDg2DNGNtDvQ",
  "key20": "2sur6NoQNRqP6DnxSu5VzJYMpDByEq2cjEQL86x5wE5Jb5dAPbeAFgatWQfR6wJ4HTyoT9x9iHN2ZPoXht22mfbg",
  "key21": "1AHzc5urnAYaeGBNne8n5qKLNDi33daEYTK6TadydgvhP39CAUnmZs3YTF4KNR2L6xCvyA4jBvtHaH4oZYqzSch",
  "key22": "2utDXx4EdzGmqahdemNRHBFBZhYZTi9EFKeGCQLS2LPfzJJSntTj9wfcoEnZ9SKotjai5YCtnSJCYqVxJUVSHV55",
  "key23": "HiAwakNTc8cn3sEqo2MyCkmsPeywk8PP6pzYutoLo57exNHwtmdgCB51b3zzBhdRiJ7onaFaG68EBsia6zQRvGT",
  "key24": "2pwuN6vzvk3uBkWc44snqbKNMKv6MpDpsXYcbbQAZ518MUsDt7TCsFwAfeFNzpWK4WBT8JSWrUSVHcwkNvETJVYS",
  "key25": "JZJT2sNGnieVTbuG7eVhZ1Yfir7ktDmNHERZErqyDdELj9NvPU7H3u71dLx9RKgHMWkW8WovGXqTDMBoR9JToEC"
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
