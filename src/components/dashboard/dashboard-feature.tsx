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
    "3qLB6uyukor4RMBfQ7FkHj9K1v9X6byreYP4S7d7EWAr7C2G8zNcrS91WGwpJW2pkwgNer3doD6u1FYnhR8zhcmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HASX9C3f7jLDcRCNpzfy6pEPmKW1Qbji2QCuT95qZTuNi9KqF5iCGuBHhiwGcHHKsq1a9zRcXT3yZ5KHG3RGhTM",
  "key1": "2Kc91HkuuKo9vz9DNiTr3svbNDsvbUM4YJyxVkFCLresshAf42TUDmayD1LeKjtCgvUG4TZos6TuFcPBk6JPqRKB",
  "key2": "3z9DMu9nc9t6ZFi7qsF8K5w4GoRF6S8mE8WztRg1Sf3vo88TKN8VroDrduGZtKdPWCNZ9MqpKsqLrUVhjXzXfVUq",
  "key3": "5E8jwCjdsY3RtwdS7624nb7JPSdgxhhdXe1Qp3mYJqVB6cmC7JEVA5H46q3WeN7mUzDMsgEb8D8RqM8mYHccjjRu",
  "key4": "4a7irTj2YceMwYqbRuUrtkMS98q2VRQPigxxd7katWifSkhscqwsSZbtt78izCzPVX5axS7SbAv8optHMAPgdyn8",
  "key5": "35Xuajip93w3hmDcAtRZXDecAXpYikHkRFQPxcG1zMebaGqJojtgLoLajDihm8PSpX3o1sxGy3hBjHFyubviiC2y",
  "key6": "2uDgY4qz52zQLQYCLbjkf9ELAP1dazhAtTZQc2FoDNsDg1xLt2PDuq8gHVeFZxzJBCHXmXiwmKJn8RggQhTV74om",
  "key7": "MNjPxn4uHXqpWPbCUUw2Eii9cm7rKPmu9z7oqmeUPRuaBBpCqhmoVeEZtVF7hKu4Nqk1NKeaiG6tpaoVmtyq5Cm",
  "key8": "5xvnv2Jrg9EtwBVxsrvYzFqMAodmb2eri4VeZdg2CUBinCt8RK33FGGkmyp6RexAQsxt9jpXydx3TszS69zMMAFB",
  "key9": "2YhcxxDbguejh4k6ZC6x7GSaPvbjaSCs8iA546XWkbZRGPQy9rAzh5mbhVDRLma4PEaB6kE58JTs88Rytc1yurwj",
  "key10": "gMZAZ1qLs7Bs7LVMQZeL882frp5Mhwo2aBsMuiVszEizx1qWznft5fLHeT3z1wTU7Wn8dZNMsBL4a4CU4mqW4et",
  "key11": "2wrBTJaaDKJQgDThhZvLeiPLtsDrBrLUH46SCKQtQcbchmDR2a74arXCdXhuY2cUnUiZgoUmH4CUKhyoUTMh29J5",
  "key12": "4V8e9VJw9kKycjut34RE2h9CuZr3cGPoSY8ry79Pg6Cr1mZ2wWF4v4qUaPiXAwfd65B2G7m3xQJKu3raFcJAukni",
  "key13": "47xGpg6QpfCsCofeLSKX8VSjRyozD8R4zFuXatt4FpZtskTVCXPowvfw8hcKN4Q8uY3SRpGrW67dz8MHgUiY44V3",
  "key14": "HTgwCmMo6AKhNJgkP3PPb5TiQMD9iW37rFWoNb1W1j1GMn8QapJj62A5aJkjkSSYtEyfLmx6os2go6rVuvCC91k",
  "key15": "4kXPpLHFTJ4wyRqgkrpzaJqBQBEJLYj4TeGJ1hUGW2U87SuUfh1w4gvVWw782kGu1idJmYyFpquHMEh3uHaetb7s",
  "key16": "4rB1EAfYPrJaDAK5QNwoGiNPf3BHsxuqQdAryg2MUfaH3ePuM77rq7QKcxmozqatJyewYekivvTVrrEe7CB9P5CU",
  "key17": "4njiHpge912yKnEWxPuqSMMV5q3sa3iLsvYEXdtAiamqbXwgjjSyTMkSigvvyQhs8sHmyH5paGqv6yJo8Gt5edEg",
  "key18": "3x9TKt97pkLGXqSHFeRgny9s5cRhZ5qZBcjSQ81SH6Ga8yEK2b88ZWpk8JAXRQGJnvGSqDKNCA5qWfNWP2x3RG8w",
  "key19": "2oePnovBY5yN91dU8S8mK8GLsePqJQfiiqzYYn5XVveUBS6VCTPbQbfDUAKh2zhoAkKaV5RhmXRV6Jw3uUVqjQ57",
  "key20": "4hTmKPZuHFZsYqkh3zD6tDrNnvRW1v7SMhQnP1X3ndgxJ5qyUafp6RtHNKHN9PrEE7YyxSbXBAcYvQ3e4KCihGqs",
  "key21": "3fE5BCMQqqxa635qMqWiECWmqwoLDdmPED6pwSbCpaoLZGVAEErxu8Z7qEjMMHwbbLxL3pVqZBUB9HeVe4qoyqq9",
  "key22": "efhejvdr9RrZpBXQ6eHW6KEb41uiasJhUxhXL6XeAjzLNkMCbsyZBMfthuLhq7eXWi96h7WmxDsYofmXppuEEZW",
  "key23": "43vwUirJkweVaz5xCyXf3R23YfkvLceeW5f4xc7vM29PszZnzSnwb36h71opU3syYFDdtxdnpzNXj2wnTG4rgjXv",
  "key24": "9FPwXZzoG7gcW3wPff8GTKnWZKVnV5YYAcFgLUnGrDHJHhHxfvAenv84QF7ypJXxQo9wZFmJNXEdBqPP8u3K1mQ",
  "key25": "3xe7TerFHRjEFvTeYVV1W26HkwTM3wxM6yT3oZgectDNbDweNK7WuKbaTQD3YgSaLYZid3rGBLvKbVbafuwEU57k",
  "key26": "4u3Z23skvqNgQNiN56Ajh9u3iFZ818FH3482MgM9ZuET53oUEKctiJs2PuTfDUbi6dCosQioH8XwNSNvZxrKyXx1",
  "key27": "3gmwwpjHcdfRDWAU3tPCoQpQ3wqHNiz7DU1V87bvFNNijncwLmQZUMDNJMkvTTAnSYfRX3ZZxUhLd9opr9j9PAWp",
  "key28": "3RjvEuXKh7ZruK7nJDmTB5wXYKRcf9spqbDmH4E9UEM8J5Xkx3R9rPYgKwXEVg4TSUTe1angnTYX5Z9ssSscYjCa",
  "key29": "GMP2MXeKWxdSqsPkhuzT4HkChC3D8MPmADcdapEp9tbQJbk4KYHejdfn6PoC5dUBdmydawyh69xJs4qDEaa8zyD"
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
