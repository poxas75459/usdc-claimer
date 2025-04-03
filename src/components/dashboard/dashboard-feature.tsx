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
    "4FiGhJrcbqjRoMGJPoEiMoUKsqA2pMy3zeCZZNB4njboxGAPYt7yWY8Sf5swywxmznjNkAPgQwSq5u1ozki7ESnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KezeDBF3macAtQTfyMMPrM7oUzogN4ormjPhzd5uMzwQooTMBPCBp3soii27pgMeKTFMXvDYACZjvwvZrGoR7yU",
  "key1": "2vt3N8YMzdh6rJWCSycWznfF8XsSc7L2JzausPmjKgZNErbhLTBJ98caM5jdBKXCfQSvNP4DtsGpoSeq6jHf2zFA",
  "key2": "38k3guxNNhN1waTw3AUAUVtSDBCzwyLPAnJhqT2no5AM2KnYyxw9dofLgU2AqLTFHp6NR6wtkuivSqPSV53qBih8",
  "key3": "trQTnhjbma6fsgJDtNApGv3SKFSFLVDEZiCNNSzYCA3c8f3QbnrGptdtAdsRPk8SXwu8NTq9wNpzEJ1umytSk5S",
  "key4": "22zjFmcFnS1EvGkhKHwvkqRmtjquHeSV5t9ZXgb5EQi9iCXgAiYX6LoY9121UvNNs1x9sJAP8D8zCvCK3ANsjkeY",
  "key5": "2w3EgJxu7MUDdVWFBWRYAjDCBPPceJWYxBKEoRSnxJxnLQVpFf9u7Uq4fAdZqDUuzKTL9qtvbaNJWi3RebxpxXcK",
  "key6": "3sD75YuRivTZDcuPvdYX7PPbQskLanNLHPnEZRnsYArdDtf2UQ5NywCDTzZUYtFkywTgfDuR5TjqhawEiyUiCgyW",
  "key7": "5j7s68HMHHAm4WZVh9CdcgNdV2PiZJeEt4JpzgLGc5Qcru8TmY48mXUKKWxQUaFzQKKNcP3hkxZrpGPWXowYA4KV",
  "key8": "8jmkprpFaCjSxWfQx8HXNBi8k9JgDTUNe7qB1NCnLahatup93paUMExzQtyR6EunynY6V9ksFbjRti4BVJBRr39",
  "key9": "2pjZCh8ER4eBFSpAKCuwHzHyEo4jxhkYuyczr7pceq86d3Qpjc3e6BnUSzuAaJxKsEzjF1j7Hg7ZjtWTFVwJZjcn",
  "key10": "27onrgb2vi4Hb8t3eYLes5xNKAJZ8sKkEaVKRbhEZ2gUSDPXVj8wn1QXPYi1NsRtMALnWqEyrpsvCecSsXDzSXjQ",
  "key11": "4dwn3n13gNqTxcJDAjAvxy94cJjY8uQePfivbxVHeK5fDmHocz5q6fjFdCAid6YgPJpZUj6dWtpexMC5mJMYc3bu",
  "key12": "idbcWvQQExwnH5ggnYWUF9SkUspaGRdoBkPdHWGaTJs7e1Nxj2JEx3YXFgb3KgmW2dWKFNBiQr4W98ddSWp6wDg",
  "key13": "2dFuRDtzkL1BENoKFNrpec6pk7rReNws3cDLmCHmtsNcxc4jxMt55wFZL5EL73i5D4pSL9q5D3uZEJmBjqYyJBcw",
  "key14": "RhdWsAYVEhkiAq6VdzwCx3GQPh8TVhmFAZHRrLnWUBkNHH4dwSQ9rmJJWvtpoQ9MGEbGQnhCxbvZnyEVJ24F4iX",
  "key15": "3cgRZS6u1GSJsXn2aVYMFqxfY9mWjEoi3LVtg5VgwV4tHwvVX7vVNdSk5GSJVadmY3p3WhM5myxX2EnLUqoFaTP7",
  "key16": "3KvZ8qVzrvGbYJ32DEPVc4LjUNNWrZXkFpC1F4iGPg4YFQ6NJwyXTecQC8qizBSTSZZNMEBaE3AJYU1PYuPSQxXX",
  "key17": "29PRBQFkiFVYxtGgvjKQ75gkLoZGShq3wp61LqmaHcZoNSe6YAWPRJ8DMh22zm43owCXcoWKfD9xGacNPcqD9cwF",
  "key18": "3Lk6D8YKAiJZLpEa9ZLBxXgrToU2VeeKaF6SJ26TaS1SZs7mKgG3qS6SeR1g4Pv85GMujGUxr8d2BqQsrvyACxQc",
  "key19": "32zzCSvYYtP6w2WUsJYrZdXrbxA3Hh5242eGBDMidGfNi13m6oU9ShYKUoMNw5SKsD318uTGcipnvnzKEZPJHEMn",
  "key20": "34sm9hPZiMS4riLv3zya8wWevBRt3D6UhscLf5J1UpNCioMKeVAa2e8w5BzV1ZFaxveMJ7haCmwBXhrM29eMV1m2",
  "key21": "5uVCyUFHWVTWwVwiXyweq7VWEursrMJL13S2Emku3ihrAoEUgxAa6rTeeRzQzKezbmj2fvGPfi9FCN4N74jxreng",
  "key22": "2k3DteCjFNJhwLmbofvn2eSB3S6EgjUdb3H8cG8oVAWjPAJCgidn4V1jSyHv9xwuWHkBL6HBtLr3cmevbKqBLxcp",
  "key23": "5GaaKncXBSkb9KYp4q9A2ca5GVfycFHg7WFAukRgis2Uu4JABYajHacuKRiodkJdoFFJD42RtLYyBAxJYFHLjHM2",
  "key24": "mJXixzdSpvzqH2soPxwf7HKdeAbEeCczke5RTvzBM1QsAaCaLVBL1fKKPZd5vUpogU3w4TfqiPFQ22SUQwD5e2q",
  "key25": "5iz3r4t4vdrJKNoqrPAe7AjZh89iA6aRuK1ueswhiAcQHKxMfvPyMPmDG957QeVZ7zo4oH8xrCBjYQKNdjHrjAfc",
  "key26": "3jnyA5BcGzeYXkTkDhzfqQg29UVgYMCF3CMhZ412ofVJ6xhjZVE2G36jRTMzChiZvz77DwCyUCTdYRWdVBBGZ75d",
  "key27": "5NhgHm729Jamu9FQPn3ouQpen8ouqWwC38nFjCNpBT6fYoVVF2XHdNwgcMsDL3Ey1Rf4ejKuno9qrzELdDoM2Cwp",
  "key28": "2GWhjSqBhMH7rPzr7KnnG7dTz9sQmozkhk6RetTMyX44HK2qDSqFprpoQBPDiZBmX59U149eXzk1TupKByytGsGh",
  "key29": "8UVCyu5zLsVcwvSuyiMKMDevDvdCGdRtP1MCX4GdtzNKPbvdvBFAryrnbYayT4dCb92a3EgMdkAiU7FHT8E4tvX"
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
