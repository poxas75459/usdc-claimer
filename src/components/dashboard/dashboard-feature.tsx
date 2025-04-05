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
    "4PFuyHsTAB9k1agYsejcwYGtdEkQMW4FEzcuvzAL7JycYA4Zo6cyWSQx1RZnomuMrz76WWNEu6B1qbJdpgXMCB6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m5Y9mMBF58kLsR42QJgcRzeSQ4NrsidpkKuofrfPQA9BPWGcLauyqCha6oV5LfW2wV43okLYSYtL3DkbkrLQ3Yu",
  "key1": "59gU1d1DNDtCcjjYnJbnkEggCbAjFNm9fY4NC9G4wjGiJCee2b5tUaVEzedJSNAPXZ8vUS6wri6FekhQxm9MS4MV",
  "key2": "iN1uKRjnzoxesDLbtLarAP16HuvNWobEbhywvZ69ET7qruVbpNqfWacppixfHCyfkj9rN6Hwk2MCXf93NinjM96",
  "key3": "2uLGzFmfnuPqgtx5Zo9tDczbjgqmnqukFkVQcwq6xsWoogER44xdsQfPK779D3iDozcFcMeYrcRwBmjLEMw618NQ",
  "key4": "58bXeTZVFnDpYRVJ6ShPsoCtvBNwv1TyeZvGj9QHd1U6918HejqXfyaZLSju3cd5VMajz52xJyF5vCNzpp6MyfQr",
  "key5": "4CPynC1dAnWWbpCyTEXevX82o2Fugvo6NbRz21uYHAQkjbj3kwDomvsGtxuZr46aExhc1NFXRspKoj9vPqLgSKP",
  "key6": "4K8PbkbEyJZXD4RLwNc7CucMjZF2ffeGqocuGZGBFfmFHxZ813VpDCiQLN8rnYAYwkLXXdtvnSFHTMg1RJSMahWJ",
  "key7": "4PH28GJK457NUGR2TrVJDM9CZUw4tm1RrA9pUAorWrYQyW28bEk9Cmq3sCQLighVoJ357CxXWpJ1XaagKBVPvhga",
  "key8": "5CMJBRL2w7qQVc31axGga8GDJbeJasJJtbeuupC1vufnuQax9kFhZNGNTxANUpFcD27GcDuJz6B9KApU1guAWZSq",
  "key9": "5JA3rhjK75rnDA59e6rEK5qvmqBAcppABMVKGgJt5ZtyHw5g9Fkxf9YqDiFqvM6n2F4sHXii6jYCN4kw32dW3nL1",
  "key10": "4pKi659cTMagToY4QzbPYzb5YMGi5WQit37tW1muyWzMNvJYsJkXmaJgamPeur2uXPzVVPPFhEqaNKuu1nYyaWed",
  "key11": "24qQ3M7RXdruFbRUakKYmsUD8WzrMASLn57zscyKZ2ArJnZVz2DeeCboqoT1BBCo5kGFLMNmWP3Mhk8T8Jnww23c",
  "key12": "3iB8zwSj4zLeMZJ8zh9ccGXyBd6yvomUcPJLamZbBMy7d9fxWHy6qKKZSPPATEqe5jfqxFK2iCyL4hJrcAmPoae8",
  "key13": "5zHbARALLcucMm5Zhbr8g6siWX2Aw981f8sA6gew5Xck5YXgwPbUpiMHsuGw94QuHtGfRfNdNe1pp5iRge4tCn9b",
  "key14": "3G1QPDsoTMDQkWAHPyQjENUV7KMGySYaThTYQ9JxxPApAsLT7oGSv4V8yothHVtzyvk5WGyhNwkuwWocq5ZB153e",
  "key15": "ULYvHrmBYjMAdYBTWDg64YCA6zWKysUPRppSPUmsQcwT9rv1uRXZiZkNSMg1QpvBYNUH1diaezrUkqi6fVX4mew",
  "key16": "4TRgRzrwpLy4ZSgY4CaUTSnv12tbhqjZeYYLxxAXWr1jQ9WT4HefaE7s5jjXYvj5yWDhfqk35mbr3SLSmQGEgvsV",
  "key17": "3De6AZsYWJGJhgKMao7TDr7dLccB1KGPWLgdCozz45jzaT1RbSbKeKfxg37qeR7W9yt2525QhhjiwC2SKT6MDn9i",
  "key18": "ph6BgyzuvGgyvVBpZrQ8kDRX1QfJn8c7YTbDbAwZtNzCNyXEqf31U7a2CyfhwfiwSUAxhFjZao4KwNhqqctgisR",
  "key19": "4RpiAMsE4WVSFaVKj9XPRQdJeamgdagRELAmDhhPJYQcMdcupxhkrPW9trJCVy1ZnmHtUTx8vccc1ziTXJ43DRWE",
  "key20": "4sN5hUe4gcmHnSGfpXYUHt57nY4tKpTiq9LbTayShhGzWKqmSAEzg5BxzwGjqgPYAC2HtwNnfRJ1W5xYXBm6pWFU",
  "key21": "2h5AzwUMRCULBDfocxR6ELerrRWJvS1XcFYRzDoJb7k1YizJ383o5omXKyXv2to1AreydJS4sNUHre65M75vAGj7",
  "key22": "fWBf4fUqPS5A8wXmoMK7KNpEbUqHzraDLPk1X8kn5JGD1zRukTFZkur2jiXAr13mGRPM6Vgv35qDeRKn3iq9oq4",
  "key23": "zchCyhmYE25ZWaYGMGaMckGDE1QV5h7MgaFeCD1bYZY5yWGw3BwFVjmRcTk6yMhgruGgVLKQPhGSkZ8595H3QgE",
  "key24": "48Mam5kdnv22jkkaQTRBUSZfVqezaHSuEHMmNWeoDXBMRsj7FAZ3rmURin9ZGyp79gFJVkmXTkrFcvaZHeTm9Von"
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
