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
    "3weHzJVkxNg9icD1wxp8DN8BAScx9vBBi7AWJmUwBWDAMGsS4aCiNLRb7b2x35nf8nUsf4mUFJh7BNU9w1G9WPYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLT2QUrkNysKXW1nb5uipSxfby8TkxZWDhsYap7nhwEpCV8i6i5BaMXNDmYQKRbx1b6cNPaHwnDeQP1SBZRtKDt",
  "key1": "2gWA6863VKxa4552Wuefsp6mXHbGnPHxf7R9izV1WydBqLhY8Phpxtzs4JqBNm9FdrrCaoWPJ3YXgYZispvjQxCm",
  "key2": "39XpoEJkVDDsQJz7GPRMSgnzdE3oy7fCP18xfhdzDGDhujUrx8kRd1yeWLGhtPWM81qGNTK9JATJhyafV6navNs9",
  "key3": "4m64SvrtMjsaTUB1sSxzqDobiqDn1rdgi9KBvB1jYq9KwaZtCchXEKxchkLb2WSoTykMLzwfVDX6wVw7nKRvLq7s",
  "key4": "CAVeKsiLBdDnYfe5Y6mgPMrv5W8KZavLMLmGsbeRpucdFeaFrUaCG4Dda4GQXPSzLKaxru75FBS2Q4myVTfuoiK",
  "key5": "5JACKqSgKSn1CCTZ1t1tuW2hXFnKUMivLayopZSdLva7tJXf44GqrtpymqUfkL68ScSwkfkciouvrCnji5w7nUth",
  "key6": "5iUpzwkhNjw8qJQSLy7zjfchW3DY1a5EBumbc5f9Cvmj5dpnANuQ8d4Z66aXykV4PFysC4ZokAaPbMBnFZ27dhf1",
  "key7": "3yBuVsKbLe4skB7aLuuJVBBYnP4RaZaxTDL86cDwR7tfYY5P5i8UCN5v3UB5rEhhDPbHHk7SypMsRtAGmNyfPMRF",
  "key8": "QdmGz78rKKP5j3mqRjKDmKU3BC7DMS47Quu9FrdZx48p2y5gQpC2CYXSeECEbA2cVM8Z7RNjo94VeGysFqSiZ1n",
  "key9": "kRtzfEs4RPLJRv5N6EFdqHRfKa75tb491pMCFf4pEoqgHU4H5TcYDtTVHCUdStGmHwHq4DD8ABfgq3M1rEmGNnJ",
  "key10": "3LKNXpLEnmjNJwdm8ff9u7RQCwiuV6SQJQd2roQgBdZ2GewfWRtsSE7KPv9pYBf8a2c48qHiQEVgceyfpkEfAobU",
  "key11": "gn7y9bLYeTCpMvnb85tkYvZgpNTUt1TQx98CcsepMMu4z29FYYfj9L7ubmYQvPQDARDtYWNJ9SWYxoBAXeZqQWT",
  "key12": "4h2u6ekDwWriXzhnwszwgR72wf5Xyw6Ank6MUoj84rTMHJqj4KwFLDpJp4cN3zNbAogAhcYZvnxRafy9BfjBkvao",
  "key13": "5wMqYonS9gL6D64hBs2FiDddjD7bguepyWhf7ptSwdEAGNw4DPwAyqGwUETYKcAH3pRFDRD6aeBqjWRw1KAyRcGs",
  "key14": "3vrsacW2nzwPat2S8vA1Qddt4pcmvVWQ1J3PM5H42cKSjNp1RhFcP5qMwJV2h7jorC4mQJes57WyB1jhgcHGFd7",
  "key15": "gKVfWyEkCWjJw1miuJm4H3E1JHjmAq8GJwB6VeyqqVGaUP7rh4zTfGZfhSpS8zmL8SqKr4dpot1YSYZP7irrT8S",
  "key16": "2h4jdoVk4n67sRXKFf14mT1P3WswTvUjYh9UwXffAmYH6twZqYoHje8Fn17HKxBnDUc82V5d3qq55NCweVpC4SeE",
  "key17": "2DSxfYen64oFWxa53GznhXEZHgxAT8ZE94x2Q7846Z5bnJKrgJUYXC5LkxVAEFU8bg5YwFtSbe6VqiYgs5tu8VmG",
  "key18": "5Z7Vpk9xYb4CRBEdYBqKiwufJhw42VXAz4hQwvVkkogZiGZRsxrUFRKfkyYvZ2RqTst7F8tUxeaTbX79qxvGgbzv",
  "key19": "59ckMuNTBS1N49yZTj6VD6qeqBGvtMww1Qx5GW8LLjAeUTjfxn8rXDacouJJkpa7jN8rdzyQDvxFmefsf72Q8g8p",
  "key20": "2dxf6pjSbhrMQKyfBFNesqopkbX9MP1bXDjqknjAWkrzdAdKVaB1FgrFcsaZsZFzkH1s6wydDchWWLh5g45My1nF",
  "key21": "2YexjSQAg6L3V7cx1KESQsx38VvF9doR8Z9mPDsGg3jjqwkt5UmuDtAM6hd4kje7rS9HE7192EAUEbpWLxkJbknT",
  "key22": "DVpNtt5bT26djDQH4diTdFZEtVKjPygbq745ExFCjQMgURcPfvC62pBLoat7CtxwmYYcHPZU3bQAc5RGFzgXBFF",
  "key23": "5QFZ9M55g87zyM6g2eodTn97vJufp3T3DUEDRG3DZzHjg9ZKUap9kW8VYUG2LUGVwLNiqv7toV5WQVssNKjkvibw",
  "key24": "4yH42K3omtXJv51aq4NNbLfDhUMkMu62T9Z63zxKUyCJAAchtJSfpM6yjn9TfKc4ijUebHjxCm1Tz3MXWECPsgsN",
  "key25": "49Ly53kY1EbtFD551aWhjAwGRLKj3wd8KMpqergsx3dCWbTAoCBjtcJSjZeVDVAKqUJq7uqV6STGvCkyRSa5gJf",
  "key26": "5UyQgk2B2QaJYRg1msnqrZvUmBcEnwEQbAunZVCNTZRZsJuWQrTEdnuYh4c1iaLzYvuLMUNFuaaXe2jevQeQbQcJ"
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
