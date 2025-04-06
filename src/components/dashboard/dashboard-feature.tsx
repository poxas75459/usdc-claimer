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
    "4fWAeujNk88CCaVYfrf7Y3FJUfXZpQ9S1u5sXCii4hd64gRetKrpLREUwEvcGkhy1Zf94TDyom7tc2yQZYZVbwRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJGg8ERotw3XAkbfUjcwV51MuGDE4FkcCoC2XT2iCVjmepevMNLmUuBS8dpS4z7adPSSQ9ssR3kxXkqMgqcUAW8",
  "key1": "2TsJn6NxM3af9dj8g54ejGpz72Zw1fqEXF2bHQXsmBoiBbKbki3ZXdhFvvJf3zT8yWZybtC7Z6WrwQtvPDAiXHHv",
  "key2": "2sW3wtrpv7Bfi2CndobgE9GTn5F2weG9dhFiYvvE6thZRvQjZAJFkqtuuYzfGLdPKEHRuV5jgvMhAr8VVLECMeuk",
  "key3": "dFsP9hcFUgGsxA49hFVYtadR2oXvjfV6HAbq33QtoRPn6ABJYQpojLL9CsmfwxRvePCxsHCG8dpbsD3PnLaJbcX",
  "key4": "5nK395M57Fq5TE9TSzKGW29FLeaaTZTxgFoZ5ZfXTSTBdUvM5eNieg5cayMmL4MqUYYxPV6mkkXyDrCMgfpja55T",
  "key5": "5n4eQZjJA7DvLgonEAZdGH48Ay5zcAByNAMA2ie4ritCUiirBFnFTNL4ZZihFsAavAUJL3t8dyc2GNvRyRjAkY26",
  "key6": "4RH2iexdCFak9Mh8AX2oxKnPA8Aunma1QdHSUvD23A4MPrxM7me71xSRhiQta5nCPqkiFDMYZ6A8Q2U8FZrEu1k5",
  "key7": "3YR7Ek8uRmqRufTdDDPxcAQN7Mcku84RFq7oJvdEoTW6UZRC8CTf1QgkgFnABLM8LBgDgxTD9FLvEybGVnFGkVWU",
  "key8": "3PssvMgkakmEdAa2dNWHJrRCTnueuUMniz7qqFvVEv9xPxfCXNqjAuwDpdEjhPagUFQqpwX6KyFJxsM4sNyxUCaW",
  "key9": "2c5TeC8T1VNnRiBftHBawXjTeWLsZMQKdZtY8B3KSu1236N4kKdT6AeM2WWzGmnrWvqUScGa38dwd7SZnBF1zNLi",
  "key10": "1NbpWWXLZd6BqJxpkK31Kawi5KRXtZHfU5CXUzZzonwwo2Vt3u3UT88ZGZGYST7XLoQNq3hFwQE75hYt8TSq8tz",
  "key11": "2iZFHAXG3VxAQVS93pDAz4z2LrLCXYUXoo9gZjLJxfty7izoRJgnQ4dUHz6EmjurgyLsE4oUFs1EVwcB6M9bVY6E",
  "key12": "unsCNM2JQiFMQTKoaUY4ABKLaKjRx9FYgsvYu3L8LHCdKf3qhT6yR4YJvscJyrCvjzKKdEAaqCxP8n2vrUGMngN",
  "key13": "8hTFHQmZbTLCvsPWxhDsAp3Sr5ivff3EaS8d3YBm8wgyx8sRtdkr2sHnioVahuwMmgVT2ZrjEBjo9yocb51FHfU",
  "key14": "2ZjVfDfM63DQZCh4kWWhDLPxk9iRiRfLd1ho3shY3hid3xmzJRchZbqLWbZDWrYCCFyNWy6d4XN1gELCMEmhZHQN",
  "key15": "4eMdEPzivzx6bGdrY8NHNYc9jjuZ6m5BEnaEnLCRVPGh1Gns5qUNGEEPubeKrfLN5WfhtDAcYiqjj5CY3Ln36eEx",
  "key16": "37qQEDQqExVXErNhXr8t1oJQo9dZnfF6EE3mBvHw8rs7o5KGy2asV45mNMY45ZhsCU7yrS3f8Ubs42w9CeR6W4bt",
  "key17": "4eVCAfLtuDy3bWo2sNyPLVVvJ2At78dkhdK5ARdr9rj8wfqXQzE7NJMwJ8vgmiJjQ5bqXEpdZK8ZV1aiVbreBkKb",
  "key18": "2LYnypsB3C8rYKNYRbi2djtfKP5pGyRjuNosdiUQ8DQAfQ1GhLqDWk9RUy8MogRg9cHvxC2MmNPDRosd1WCmv1tb",
  "key19": "3XxdtsGtTRaSrm8WXEaNDUPejGaJTB77NSEPhVY7r3wx1w1D498V6N9SDhc2jGUW7Esew648g3bMgTKiZyBMyroA",
  "key20": "4Etjp6TPz3pEBJKeW6vSyvY7WbyzKEUqxJKcNVTQUG7hD6ASUqybXgZ8XS2Zypx3acukDYZmBxHy5x5anjySCgxx",
  "key21": "D6UJMyFHA7X3xuQ97TTFpSxxG8uWiuzn2MJ8QXiSVp3L2QH35uB74ck8tvD55GGbehzzEmNk1P5DHHkr41nx2Qg",
  "key22": "4uP3THiRzWUNpgZKsopZxQHwJq1bjS5ESLD9VZKiRHCdKJsHh58wJXvgGDKdUj3T7a8EX3oxhQKpMgPjSc61nLoe",
  "key23": "5No7mmCjBak9qJ8bnsFtSgEmnTspDRRHRu6XXFYtjqrAEURvffzXWyVwR7ynN5UrihnXfZhM5ancxoAtjBaZnqfK",
  "key24": "Yi9G2oYVGiXCxPZfsPZVevTinFH6XCzg6QvtDecfNygutq5mLUQ17L3UkGGRCgm14qR3SrWxbjodW2G4fv9JJea",
  "key25": "5aMtPNRyPUxdhb26jyXNHceA1hwa8dzy7SYBZtDTFVToQwuyKoPvkYjwmt7fWERNdUgVW1EyRwpsfivtDhERtPbN",
  "key26": "4yYWDoEzBHqpjd2sBypuAHcrdPdr4mdaW81HvRNgJ8HxyPFCtzo7JkWSLPPWVQCBQh1U2JyVVWz6xmJJyCWdBLsH",
  "key27": "4tnLUJKnsxDAg2ktWGTRfk63xcgndMB58BK853USoUxuXDGz8NeQSByXF4xY5tVRaZJeTJQurxm1zVYfgcbcrGYH"
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
