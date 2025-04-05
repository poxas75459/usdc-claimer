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
    "27ckjdt8gobpvrdC9pqsbR7ABFi8MU86xDdbJpywt7ew9Q87JKKxyW4jkfLhkG6PHHERcHGotT9CSTzbhiuR4qPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "566LcnVu6QMuMJCqcxVyypd69z8cM2hjzS4BE2pzYDw4p2g99D3gaSnWpy1oShbjWChwYUU9KQ6LautAiPUe8jpP",
  "key1": "5tzvAQSNzWoWoMKbYvdNCJ5DEMEB8PvUrF678Wg66Voe6yzmbasTzFKnwnwMKpbu9iiqhvkbNTKwgH5qUGA1tXY9",
  "key2": "5qkRL6nnQvYPRE2xafKVibTCQqdN5v2Dxy4Fe96hTTa38EhwXzVze1SgLET6VHrU7uLuSNm6CPryemaCGLH8MKgW",
  "key3": "3zF8d1gjib1DpHpeVntkad8MgYCwKgNfmbCxFahhaYaCDthycXt2tNeA233PMFyMysPsDvVaJ9NhySqxtvxTv3Gz",
  "key4": "4FXRw9JCwdkUTeL5eRcn8eJXEkg9RsGwZ1NTukLiEh1ea84fZMi9aCzQkdvPF3YFUnFrd4j65bgUHn2SaaFo2urY",
  "key5": "4ccqwTD7zuuedYMkfFK1k9Vi5oXyPaCqsGh6CdFyq6wKJrSgpr2tYnVTt7otaU97YxZdwYkdb2kn8nWmh1int8s4",
  "key6": "4w8oV3gXcH4XEFZ37kC7jJ2qS413eEqDmoVm165cWTLTnXshuSJnFLsJZbK38ifwGnsiGy1qTT4SD1TGA9thd3CV",
  "key7": "3Xqn3RL89ijhy5AxTwb73P2QiJaLRXXuvcDfZcsLKXFSrUvDave3YWvoZSbnm3AA4qxsJjB351YWWpeadAvp9DJ2",
  "key8": "2TAQWpUXtRyZNZx9DEtkVmgRb1DV9EdwP8uB9fd9tRMFRZ7xbydDMbsfVPYmcV8UchbEUzhrYxRAhjWKjZjjMusQ",
  "key9": "2f83J4ganVubdcEcm4Yq3HEqaGugNSCrcDFqRxEegSd8itMziyhtbUB1uARN3tYAEB1axuB9ySPc3zYGAjy8VsH1",
  "key10": "4brsLbytf7V1cpffedcpt9q7T2HFP2iF8Hf2oa2ZkiH6TNJV3rTXMFbqCeNc22Kx5Cx6etyDvPU2KsFVnZjHTcN5",
  "key11": "4HJ5F21nAEQdYJXctvWCwwwu1ikiNuehbATYmmftTgqqPvMeoEY4iGeHeGm7y4xjGuHNYrbwjRsMn3L8Re59fs5p",
  "key12": "5MLvVnLwsfAmCPwqQUkYUY94X3rNRPDfVrcgf511ZWxnLH8NKPGbLybRNtbkT5omgDAvFRVyqXnBeE2b5vY5ozLQ",
  "key13": "3vfVA9ZXbuRjxNzKxaFnBGVX3kYHcurHZRF9CuTf2Cs1oJsJvPksbfuar14z92ayXEoQSq1RhscpRbUErDqhG7Nw",
  "key14": "37GULW4sJCuDe8YCtWvuddXnzFNmq1ZB8wBu8nE91fXAt1JcKK4FpiqBTrC2bFBs9ZdmdH8dT9yCPHbbT86gNuZA",
  "key15": "4hR6E5vY7DXUNyXQ9LtWvVecvA1XdZ5WNHGSPgGa1wGefzkQPsCHwy9oAgdtxWawuccutWJDvkMMUuQ8y5VUCYVu",
  "key16": "5CoVakdsQXQ1Jq8sdZWzW5xas8UJzxfrgZsV9Aip9cCPuF62VRdWfRC9bUDEtKazt5wkR6FJPJJnKEmu4yTJWB4B",
  "key17": "224LRaeidNyvafQDJ9BoFSW1KyFrXxjnuEqUTNU6m4MyjicBgHEBcwcjGEr4TLdkfNwJgUc7iEGBKjDf85KB4nBP",
  "key18": "PdBKyKTgzpMJqRHqbjH8EH9HdEStVL7mstns9iTLtTKBf7vYT73jvD2J11xqBHdFBbEbtwW2qqZaqforyAURZ8a",
  "key19": "tUWkxMyGDjWVs1NouqERm6WgjhwUZDygUPHEhpWLUSoJLauk6KWao4hXesc961RWy512gqFTzkNi2s8EjdxyiJZ",
  "key20": "2qAmCn3iSDBsccHygQUGWyseS5iuhBMjD5gNA2F56Z32goLMxVo6CNx5rYiJ5EVGiBC7MJ1mH9kG8g2QNj8hF52n",
  "key21": "2Sm38xSABdMb9byoAVt4tvtprFhSdnVnawbKqnXLT7A2J8PDwd9c2bNNLDT2cFxYfAyCRtvx5c2ryB1qS9gVCEQG",
  "key22": "2eu6BGxLHus524WJtbgHUXCWDQBwVJiW87dDiaoQ23zKniW1s8uiwS67AzT7dYr7dZvezP9tbJj4n4ihQvXJqtgd",
  "key23": "2rTZSbWTSWTEJaLPiZrvk6DAbDQwEMogUYtGAfA73sY3t3Rqy7GfiSjrQ4RmoNPsXqfc1EJ7k5MzWsbAZF7CFajB",
  "key24": "2mGGHHvESdxeFwTnRFs76YMB8ebz8dXRnQxsUeryU7ygZqjNVZ4ezXQRJQhvynXqbYaQTuMkcYpehbPGnhpsDBij"
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
