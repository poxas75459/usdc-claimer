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
    "4whtPF59AiiJHuu6BM9RnGcjHuZv751v4ptbJrcg9X3arycVN1Zb8Au91Tks3WDw8UeaNPeLGrbf1uRjhX94tQWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44YPQDDJyJETabTUpRfRF1PvjBgG5BiL3miX3VzNZRTxdj7rQkYtrtANYG9o16NAyS5zdzBNixtmcxnTLWLwxhVA",
  "key1": "5WKmU3ZPfSh1KP8TjAthi7P1EL2sR5kxBse7Jt8HBntiZNiKHrKYxyNUP9cT2EmiFSMxjSLHtMx2iBXDfNFQxasS",
  "key2": "242a5EzavGh23bbGNjazsKH5E5WmeULQYsB1w6gzTe9PmzS9Sh2kM1XaGjHLpi8TCPmZxns9KVV2JyHcGSZtQamX",
  "key3": "4nW8Li1Sb1p9yuXf2xPCTaZppoLdd5RtmCtRJGHUvtzLTcCGxThUBNM9mQa1Y8RP2mzCcwLbPQjEiuZCRmdLUfaB",
  "key4": "3X1KaRRhHcpMbd8beeSzJsXJzvk32ip2ydLaSnjdizEq6kWQs9NtkowHQf5Qh7EUPN2nzMKGQjfviJL1AawPWzqa",
  "key5": "318qxH4sdg2Vo224StShHYeZacgocd6Aq3h7zsKYYCvq1ctWKskSqUe2zN78Li7KeKwSDscWZDaqZmbu1iK53z4e",
  "key6": "3MAUjM2y7Y7yBtuGknboYH5xAdSGk9UapyhMqs1JVFmmn6HFvPMPDdthj6GBRnhcs2mABE9FXVpVL3HMc3k6Dwzx",
  "key7": "4pg21TXKVFRSKYWy3d7FjByuGZRaj3AJ6xafSyHaVn4SxXNzrabxazpZDPEXLsqLdKfvMkaEFgy4xWdzbEGgstF6",
  "key8": "5ECgfteFVikucBo6uYGQaegqaF6msGVqVxqXuKywB8kvTKxDUf85NxjkqUZawBR1UdRE9rmwPXUvDmnDmCz3Px53",
  "key9": "61LZmFcBBA6H4NysnZLpRHWyykdBu1zfjxb3Beki6r4Lob8brYArLCJsS392ZHAojWfu4Pp1nv3VmPgfLA1LqH2B",
  "key10": "3jzNFMYuWDxYoGLMkidYw5RibiqDCcEPMEVykZo9SuuGvpm2g5dBfooAVP2GyYfTAZNNTrYqp43nnkLLLvJPVQFE",
  "key11": "48bkmmaDjxJAo9YX9RGQZsd3bxm1xGuV7jNAZxM4ECeXVtm6at5kQCm7DYCeG8Ecgnj1cuoEoQ4wjo3mac4nL4d6",
  "key12": "26AiyxnSffJb2iVpeSeQUuxfTaJxBGQ2Z45Qbk1HeUhvctUnAyEYiE5GDRW3hcJ9oFLKzpP7vQ6sUqdwvSMpcSvm",
  "key13": "6ZbGLiCqh8skRumHw5VMFLHWV1zCoDumqnK3wZBSGuWuJ6JdgBZns9UkhmGG6hrMzYXjWa1qExCzgdfDuS4hpjy",
  "key14": "4k2hKkQY9uXqs2kzsGhXessWze69dBt5pdeUM5ECCs8b9psYRi9VXXBnkXfgJsmSPJ5FDGmPSs3r9GeKMgRbNYJX",
  "key15": "y2QjUwTjmW9K2wYs7YJ5U8eeCQJYJjHwQcRuJnBVeE6suEpe54ybH2cdgFFQbe7ya4WbfKgL9ivbCgAVNrVL5Kb",
  "key16": "fjeUdwTPmC1vmzH77qJx3ym8q3GdV4fSizrzT3XALLVxutMYUomizVsaF79TgSsWRXcAWnrjPYEXPPevCEpgWoF",
  "key17": "3g9aR7mbbHMHWQ6j4h2kbK6fWua36aenqZUjgvjy1kmV1CvanH9NWM1MVra58gHctqCKhTBihaxKYPkYWsDxr5Wu",
  "key18": "4NJoBU4mpWgN3LsvuAz7yFbE9PWxszK9sxMdvFJJxVgbk3QfUFH1bGvUJUrVxrMWJ8pZ1eKbz6DtQM8wKq2q3CUq",
  "key19": "yEsxK1fKPa3kxRkEC2JKcD68o8hBuEuEkaMSqNhmB1R7nF9dFAzM8B5E3pGcQchynDaCYfXrQyBK7fpEafo5q4t",
  "key20": "SX96oVj8zdYUemPmFjfthZdH9BFovSZFwE52ypGAtjJRPjtazxosRDQepfqPzchkYypgnU3iFQLSNpyMn1CsPEC",
  "key21": "5AtsuUCQgYQtuxU9zwXECFYKARXZi1wcNRRSAeAkmwgZqVUSsYjdspXFqmbSkSQPyGtjqyapnCYKBJ8FfXPRy3ai",
  "key22": "zTXXVTPEXQnMFPsLeGiYzQD2MoABH2K98QDsKqGdUWNSgJJNh2UVHy38EuXkPZQvNaBvJN3W1AWFTq3YXpgBZow",
  "key23": "3LFxxdn8XKmqMdyqLT4CU4JvqFHBhhjmwzh667KT4uemToSH7Fd7cbZcxkfApKUUWwDDWpPBF5f69qJagiQkDdzp",
  "key24": "2QwjkGpp3yaikAEnLRaA43pon9dsAp3rzUrg2bcztuLC3VpqxaG9X8dGGefpFiWoo6aKecKtszLFiEPJHMBuBcYr"
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
