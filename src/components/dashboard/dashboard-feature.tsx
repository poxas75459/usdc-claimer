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
    "2na59Di5PGQUd93pufJ9LkpU9wje6jHX9cZp6x1C2S8PAgdoAKon9tsfiYWkU47tFFdaEq1Fyuev7YBxBuKUZDxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMJfbv1SjoSLwcz52a5wyxy93ZqFEBznZ5eVqP4tbJ7n4UiSC9f8dX5pyWFwqqT2qsiFz88VNQjrTyRSmkmy79p",
  "key1": "2ZzyGywaAXcPjUUgDuqjfaWQAPvZUBnV5gn1xgkjYnqQHhDQyUrNATBccoi7C5SBngsuS1xerrvniUuJpyqqJCSd",
  "key2": "2ukUboCYkTN8W9GJvhKEmUpPbNWMhtfZZGeuryKjsS8hRhk9Ty3noEa4Z6mQjBLuVk6ZZdWAumEbFoTyuFtrTk2U",
  "key3": "55CP8vDzyT5MiSSM5tJRjDyqBoDLpYyYosUKPcGkSiVfxrmMTHukUUJvqrV6yAwzZEYw7rtfzkMozSnBKT611Nuc",
  "key4": "4k6HqY5G992miCrunp6vN7tFreqABS4n1y2CE2P6Yd1aoyEtu5P3SbR999gqEUYu74bijjQMfVUhJ8qD67Ma1Aob",
  "key5": "mubNmiKcpkG8W34vQvhAxFCvU3SP1gNyKkFJRnFGmHQ3E7Y9UpPq3CyRwSV3SU34vEanorAV16Dvg6yHi1Euva1",
  "key6": "2P9q5WMz5UaW1rQiVHjxTSghFvKigPU4PwBE5owCczfFEP8NuDUYWT7ARYAAehwQQpdchC13c7sFdtoRrVBvz9tT",
  "key7": "5fvyNvugAHJUkAGK1iW7pGCkhthFCqgNcPxVHuMHkpPoJgYbmSC2kCr7ZBiYq8pbXYgBDWV5jibdGhizRYpL4L9m",
  "key8": "44PDYXyAwzmcuPPBeD3kmyYpmAWCs8YebQFChUEVtF5mfcnXACwLMCnrZ1tkexKE17Vu8JdDYYwdSjdFmFbDUdhF",
  "key9": "3ogk6WyQw2YMBMYHaizzy7DtEetkciH1BzVp3LcsH1Mo97WCqkW3hRbwMTfnpLHSQYFE78VXRVur2nieDDFfpTC",
  "key10": "5Jf3oyiXwPb5VcXSQL2a6TEx6NDVxrfcLLngGTRJT4Zdu2s9m2qKVgzfmdfKnpCLLTUeNgvnr7b5m8mfzaQQkM1y",
  "key11": "4dXhRicXam1h4fV2jEmpFinRFzbDcHgw8zNRSofc1RoZBdEYEArvN2c7mmM1RUXsYYtMRuJdcVhBWCPci9Ft5seG",
  "key12": "3PzP7KsFBAES5H9GaynFVC1XXcJ2SxUbbxqGtv7KU2GMM7Z1mBq9fMtW6zjsLcv8yevK4295LXraA3P4Z5nw9wLu",
  "key13": "nYdunhBRsLDktzxGy5sr8ZkwxwRBZ2VRdzA1mQevvSrhpqhxLN5wVrtNyGqj12S8stQGbS6PBX5mqHfc4x7JrRL",
  "key14": "2f8hcX1HJJfREFzzSDy8Vu1B6MRJLtTa8B569cWGssxgpooqiSumKQwaQU8nniRH5KuxYRW6D6TKtxHd2ZfPbWPs",
  "key15": "2XideK1NHxucw5AQWt1Ec3HdhvFdnub1ncfTZVrxtSjFiGWcYNmnz1GW58MTAzTX3fH13Yvm3MSnPosBtTuQ9Zyc",
  "key16": "zc1HgaQMeTCNkiMpjcvz2oPcp8qbarf4dN79tEiXeFWJsG1EHHYgDUysbPawWTjZpSaj1NDj5gCixJyKCmRWwap",
  "key17": "2YgfvroncJsXmudp5NFdtm9QK4PNGH2NGYqZ79gUCYQkewdkuWH6kB1Pib1gK2ajfqF1WvzGoyZ6VsL3TpdcrQ74",
  "key18": "5eaLdARWTRKnt6eLVwBxz67VNhmuR29LdSahSTS4XD4aN9YsFWKJPb5AYht67bubB62rD5Q6QiZqUqwzYD5YxuTN",
  "key19": "4VL2CpcfWu7aHYXbmFvB2PkkYTWoxamS7WmQ1MvmhrT2YLUwd8owizfK9fVXJkB5WPZSMTxGQm5o79JD2er8YeXA",
  "key20": "3NZ7jZJz2RdMbFhRsRUd7fNwtwqonCTmKApcoaDsYAWXXxmqvpzSDxA143EyU3sp1AfZLzYz4r2KQMhrNXsFt6Hq",
  "key21": "4LLBgLE2ZJp51gWApWzw5aRJwsW79VED56cJHjNgAhdBHbGoA3kMH5tn2K3EegDeuGcewZBCrnwjLicnEwk3E7yt",
  "key22": "5qrfoeTPBFkZTP8bqkgEtjoepQd9zr41NG6aDc3r3BqKCatm2FutSfyrFhdz2zK8ZKKBSDuKcoJ29cWS2rh3ghcM",
  "key23": "5moRakoro6J1g7vb6TMC6RvtQjoaydFSSVDqYpvTkxFrV7EAgMNzxTJ9sQqZKDqpCWTX34VSAPzZUGsTW2QRU2uk",
  "key24": "Nyet6j8vrFKe3BPVFWE1dUhCcJhPRSocdXDYSZZXSsDZYroqQpkYRFbf7L4J22c4P4ZcvrKdNCd9hJ66aPPWZvv",
  "key25": "4GHH4nG59TYV8Vk426L5vhGUXmsRttwF5UvRNmMvDpFU4S7tpgnkic5GkpVGzsPC2aKTZtEeui3VtZoQ4QHdZ6bA"
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
