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
    "5LvbwWbPYfwvVRG7R7gxtTiT85YVqFYRSeMbq5UWxuWVEit7i84YnRYHSfMbSm8Fjk9QegeLSKnoG7hJd7BBg77e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xtoawNDWnkudfe4QyTd6VKNVX347ZfBAgW7T7CtLVWnxgEacE768aMFcyedjpW6BZqZeQLYKNXPr7Qz4VphaKVj",
  "key1": "3Wfv4jrKaQwmH7iDwafKzKyHPmgZqydfE6V39mKcNbh9Ef1jN17XB8HDAbjSLQkvQeSBoehH4ges7MCjoU4mvmdP",
  "key2": "5mCRRXmdNaZrW1SQ4KmJ9nJLFNvNNpssvGuBHrRYgQ2CU75ZHNDwFYnkkEDjKUeJidSRyvDXaPUU6vTBPka385jt",
  "key3": "XnKuTiozHCVKjNdJiLRvjHDmywqepiQWhkrKiVKzoXatcdzVTR9nkZvqj1H2g4khtvCGCMbuB3CUgPyjUsVAV9S",
  "key4": "R9EL34SutJit1CaAjAr3dRcQfd35rfgxPD1YvERrxiwPShhspj2P5eUuGB3LKmd9AduYQTsJAjv7wrDMQMfQpwS",
  "key5": "2n4waiZUmV63yY6omcCdngDNVGT6ASJ7XQAA28asLsL5pM6cXRTNtQpfydsmXv1BFFjANFtWrDe987hEBn35tg4t",
  "key6": "hs4RyqEuo11gr8gxH33ZgoKAVkoHbBErtr2EjDiJPwbf9sXNX2itmStr1fF5YsgZubkQAAFvHAwqeVGBr6EeqCv",
  "key7": "27iWeHr2fx17HsfiR8W99GZtjTz1ScFDddMtyLjtDSyhBHKMisitkQY6DDPWzpBngizrZUVvjbK7eKYg6qP2vh9j",
  "key8": "pUqU9JShfc8S2B7L6ESi8Hvw9mUt6vF9NbsSpCJLpu6Zh9Ve3V8JhaQCQjKqJMs577E2cDwZM8PcWbXtuZ5P4e1",
  "key9": "4EyMnsR1BAVDHTb13AvztFVa7ERkL2cBToRWYamUbbQdsAQFeEfRZvdQP6KYkf2fZAPYvniTzFmLMRSQ6XhzWnfS",
  "key10": "2LNoSQMK4YVcUnocJpoV6Xh8YJPYTh1ceKUPh8M16Sk3H2q79EVkyB2VakK52v3do3CHjsHybrLeB431at71aVs",
  "key11": "5sqHXX94fZx7fvx5wRuhykpaDUCV98nP9fjKJFdLwnEV7Up8kWJeeu5ory8TEAVcRKavazvwTMxeAbxSGbuc9mL8",
  "key12": "4PdR4xH86a3o43prVQMu7GUCMPPPmnTVp6o6dGW2QdeSFSr7gKCQmwD2z97apdX1aCFCq4GcPvVwZWYYzhnr6MEv",
  "key13": "55bWE5J1JoPBTt6N7Y9hN5eAhVoqn2hbfkmEaBc8Nch4WZGDtFvr2a4qhhRXBnKq4MM8fkZKfNn9WKd9UuHyfrMA",
  "key14": "2XLMLi5UVzzNVjxKE68XdMLh4Fyq2uMLYfpTiM2gntH5XHN3Wo5GzJC85nNAE8ToM6vbRbuMY25xsSAc4SZFqjxH",
  "key15": "c9CJ4BinnvZWyd5z2VoDsvHK2MYyF2ZnbdoBvtPbGKkiSsLvpmjkGxLhEDLHcqkCVWfUEYuYVAzi5UWBfer9T9n",
  "key16": "4jKre59GxzirYJw5kW1JPb3zmYD1LTcvJ7ERc7qNUk6mRCbBo3KENypJYfQxoe4kdW12uLaiMx2CJFxmw3Z8rrBe",
  "key17": "121USvJTm5B9Qe8YLBnZEsCG2LE1moA4r8a5qpJ4au5AbMbWn81ZCUrYEw7qtbHQnYyoYQbNM2NQYscwbE2jkCZZ",
  "key18": "5SLwdtYbwzgxpMCWAv1XJ7qendxpDomZqy35W41QkXzAHYhYmMosCqXN849RLWBkgQZ42kpke9wdzjKwjjR1GDiZ",
  "key19": "5aW5Me7HQ8qxXmC81tPtFfM44t8STzqmkVqpMjd8dX5ArVa94FedH531noMdrKHScwdNMEBatE6bysj2nUqL7XZs",
  "key20": "32KJCN6ahLP7V318joqaHEcHfdVPC81rqoUk77ffzjpp8KKvT9oTUwGpq824Xu2aQTjr5jP4Gn3rY5XKkWKGkHkc",
  "key21": "39WPEWZFvWDZXqV3pPTJoCRdNtPVUdk3E6PJRpWrQagXZbMX8Rsvy6o6TTeCXoxUA1fRfgh59AXan1M4YpsAq1cs",
  "key22": "3gCgjJ5aeJ2sypdmZEbDTnwgWxViHSqghNAcDJRMeoHp1z3z6uAYzYAq1SbNjR6yGvp9fftjNpVcYcLpeSxvFmPu",
  "key23": "2zeC2vkAQ9pnX4zgo9dpuZCzo79B77LVBYUswX9WjqXFN8PqQj7k1kUp92QT6w2TpdESXLT5gPG6isPg6w1skvJ5",
  "key24": "uWJKRysQZyAdR1KeLSVwLvzC8zGivnRRKC2x7JaFbbdLWCNV66Kr6A52B8uG5m78X3arunCBSF6muLYABPx7KxN"
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
