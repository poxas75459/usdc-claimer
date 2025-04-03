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
    "4iCRV9kKAQVyT4AHfXT3EXxmutmEg7gAQrScyen191j9DtDSaCF91VzmnGCBj5zm8pXQF638jBgwp3V4tMiUx3fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKAqaNU8Dd24t4Tz6jiXxo2fmr6U3UysKNQCrcqHNLwEiH51j3WvVSCbMHUp9qBYD648EgSFGYAJQ4UA6czqgbn",
  "key1": "bzdgL9Wnq2SRViVm9bteo9XPatsqKsGqpUiDypv6h7jNLHndKAzwKetr3WR2bkg5n6mKFqHvVYixWoUtTQKS162",
  "key2": "SAv1CgpbUMD8Rf8LSB6tr85xQR47cmxJMePiur1bepdKmabnwV1fA7Y2DDTbkZsVQgk4oHyijphVatKtUv5nnXq",
  "key3": "2gExseZENEeRnRHXtWKpvzeyvm1SPD51zxSTgpxfnBqeZ2AngxgpkE8kTNDf76ZKugZmLjaXtnFcCKrrK1aHNqg7",
  "key4": "32gJ5UgT3yUZrFBxsSgMHPvzoaCAXp3jgysUEryQSuqrYtQcZBN5tKztfcBykg8WtMnHzypvDezJbNtNMTLLqmfM",
  "key5": "WvpJhtFwuvJDbFuMwtN9h7BNM7CBqacupoZWL2237EKQWNwK57ipCPa1k2a5knrPKdbyRttwi8SA96C5VRsLJWf",
  "key6": "4uJUFA8jEdhrgQNJ67tUqeoa9tYKJFHkHfpY7C86uozRo4wsuUpRFdJmqARUWLiX7v1GBatSgLQFUHt6ZNsuPRDZ",
  "key7": "46UwxGsGhN5mG1C3wiuBBZrEBpSZ84NfspE9DNxVWCCLSTUUp4Em2amP2bygcHMEBCuLLhVZh2bDVeGPHBfBNHkv",
  "key8": "ybL38BN6RHEavGkbfNTdoeQkJDEXr1siCHdkRSHGsG1o3ri8jHEAtEDehYC7TEiujkfykXm2rd2xB2e2xPwhMnB",
  "key9": "2yrsUxekW1QxGFHBsYi5dYEoYPCMannjUFnhRQDMTreGa9vnwd28mE6sfSb7pDLRnjbTnS2K1PshWzvLbA3sr27C",
  "key10": "7TF3f1HAK3UckuJbxpDa2q8XgN9aGsKgCUqdNNA1F3JGMaSmRbEuukbtxu1CwLVeH8q1jggaHFgbryeFXzB6muo",
  "key11": "232jsjqZiurDQ1Mcdbp8Fnivff25TGAMDACwwhHPeaWArUugEHQ72S3VSPd3uNc16sXX9tyETxoSGzpaHotGQWQs",
  "key12": "254HV5oo6VGtucXcsFGsJVPYLg974kd67NdnrzhT4sZhjeWKVRgMj1F8MEgDgfJHqSVT2ytVLJoUvbuDBzMcTjTk",
  "key13": "kk1WRCq6i6sJ7AMBNthmhWnppCLL2zX7Cu3FiBHWeLBjd8Tf76FabnRLtsx7NSfdSxkrW1KB7eVMhQhdKiMGJoC",
  "key14": "4Mspe7mhCUqAS6EM5SwLJDghGi1btq6BPaq5fDm9PFpARBjm9eQgniX3msm7wHwe7QRbkiqV34Quv6hLyUH95mb6",
  "key15": "5793u7i6Ufza6TDsdvAxdqaZ6Ric1Mdw7iEmx8ZewJTxoMDYkyCCeL1QynrRUEAa2gc6bhSPxzQz8sKbgJCDcvdL",
  "key16": "3NRkmaiZpFHUeAxJJJcBaPcyDZxcZQEb5rmiaojiUytjY7xXnMaT6j8ATJagvJF597rGqL6tUifAWQCLXdpfFK13",
  "key17": "2KXVQMR9wCv3JG3zYs9UG3PCzssvzzKRr3gBVreVSaZVBZkH9TSCeHpPKN2QHbPJFB5wPhntEjgYBTZmnaXf8imM",
  "key18": "cbDpTQvUjLXjxYUgSAViewevW6i6qNYW6HcUe7v9gc31PAnJu9TUWDieEHnqr7TNYbarfMzyarzCPSqfFpYzuGA",
  "key19": "4ysj9YbEtr54jqycVTzajRKewMH4GCvVWMZjdH9VQWBhRMVjwFYzLFvHJXMvUuoWjQ1UXpgBwhR1fK5FZcoBp6B7",
  "key20": "qZrf8ax8woeayXXq2ewFqHkSDgH8VmBaxySUqpD5QgQTmDLPNFhjKddQbipjnEiGrryeHV7HeohE87MCi5aa1KV",
  "key21": "4tXRb7xwwJrJeaA2thuQuY87Tcr2nf3WEEfMsn9psbeSL3NiQfmGskxJhBQAwSsVDJGTkcNEtxy1FtkUgVjCu1UJ",
  "key22": "63Dyg37w3qGQYncKBFqeEmAmZyYqRUoafSLYsEk4edMgrJDPNhk8afR8DAD4Ub8ftmtetqTUqE3rW7A7Zc87BtZr",
  "key23": "4nmcR22EyjWEicZLM1rQ8ceAevjYy2rWBEDHZ6q5gVar7J1oEfZZgw3zZGSt7o12LRuG4JafGSqNhXTrKX3BF1og",
  "key24": "bFympASSzX5gXs3oUjK48RrsMLKGyDTZzaWY1Gh8RukAezLRgE23mtdZ4AdTkEMo61M9pwEsuJujUvGeQDBuSS5",
  "key25": "5D5XYpBXfzG6gmoDbbQzgJXWqrFo1s5xD4NNv5gwHekg63oUcw7Twbpf5zcgdWmbXZ3SJMTxbuTASSWnu7RnZpKi",
  "key26": "3jsiCvCeMWMiUUcHbHZ5X1nG9a2ZXBrL66BoBGzhppYFdWLHqjqm2YxHmanz4wzsJEnZut52qrMaAtVXD3j7QfJw"
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
