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
    "3muWexTw9gCkTNDL1eLDdf4qqwFbrr5TAwopJoxWPCNvxWSPTFoxaq8wW6i2KbkWPhVNZxUeCC8UfdX6JM9jxgQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8hFQg11jwbtC1A3itM98Pi8EpaLuwB6CxmcvxyFcnbX8MXAegEFqiUSvZFpAzfxaQAaQY9SzzmZ8kkyxkD9NGu",
  "key1": "7B7SPfrYVT8QbS9w5ZPoux31fPPuRWuHtHpY3NKQTjtTmmduP9R5EY87sEpue9voRGzw4xubtJzBeZCKTbAaEd2",
  "key2": "2ccA7Ka4LrLepXp7HSWnuaqAM8CFnmTi7gDc6UQKYCjhpNCvrjJzyDw2SRrcyZbEfvEMPMKLmyyPZd3DjK2a7Pj4",
  "key3": "5caTqG968aWN6eauNxftsVs5CiTJupHYPUhARoTzA1LTjTbrGGCHHqghipk4b3znZ5QWfe47qZACyKrUco2hsii8",
  "key4": "2fFQAYS9oRpAJaicapgsqtyCeRuSy5oSgzq4pRAuxDBcvpma4KqYky9HWBUHZ8yA81Uv53LG4hrLrkL1ndcufV6",
  "key5": "2oaSzt6U5PV6JoY73UamMmxvS4vyTuny7PiPi4TfKF6ui4a8PuEsvfqzaPDGa7ZgGBBg7yH4GwBks4wgmBVkVnY9",
  "key6": "Wxu1Wrdp2SdWDqWL8qm9oweUWjuMSLjswJFm8PSKnfSR4ies8gwHEvH4w7aEZPzqtX3mFeD6XnaGpD4MNfg5DhY",
  "key7": "37Q29a3oFa7L3pbXk5DzvaYCF1ciBaJYjpJc358JBa3YsM8m2i9CCyNwj6tVqzCZjvxRSBzrwTPsZkvCo2c7M8W2",
  "key8": "2aGZVPZzMapHxys4sGCTa2UwtrYTctswCRv5JanwTTHBm7jjKzsvJoM1ZFgsQHVoVoqDruMrRdSsB8z85mLBej7T",
  "key9": "52NtM8ViSmSDpNTCwK2tF2TNCvwY7KtxRDdn9JvEEUaesvfpKDRi2FjxWn799xbKwydbgB88FDE3CbutwkVTnXsP",
  "key10": "66b45TwTKLBj6PjLEUDiK7jKApbfBErR9xREDbfxCvWqANa3v7L1m1zXgJFaSwYeDDXDiQGbxAB7hhQ1poPHkKYU",
  "key11": "2Uv5EHzckNaG2Fcb9W1cq1biHu4kcEiUiRKYT6dsdmsfTPBmqpguNj8yn3PdnytW9sWLwSzJ3qS3PSqMAiKWeF82",
  "key12": "22Yg9xVmPARkokdrSDrgiAzwUxECexauVPm7RACFAqDzjs1hEYBwUupSD9MwrpYfYLNJ5W8vzZ42WB1TwNz2ipry",
  "key13": "pgTFrGATn8vf3t11Y9uovbUQLC9S6CtdugDdMVWinGtxEcHm1EvUoaqDzD4z4DyUxbxmMdCPCqep5uRGBhJiwtt",
  "key14": "3EBPYVPZFSg4zznhpvGP51ApiHYukHFMypHadaEuQnbtpk54NTsRV2jBBzwZGSCJ1txXyY1vuVW7k1dVaPrysyZX",
  "key15": "2abfci3CqH5tQm6fb3VWQRXuAtChaCcDX1FRcgA4ZxCRnrb5hVbSxNNKBrU3XWSLCiFQMVpP43q1Hk9vENHKuRQy",
  "key16": "4zCfdSdWkmnDrgQnqS7AZ9ms8QF28uUn9bDKsyNiJ2EHTj8bCTBE1prNxQ5BS5z1kJr4MbhvUvJ22y2dx433TnMb",
  "key17": "3f76K8zYQdE7cXXLhr7ZL4JNiEBanLZPT7Bcw5byMStTTnGS7UKyo61g5FJH8d6TWTztQUvoYbvoT1a9b51dqZv1",
  "key18": "4NJkNf7zBBSooYoZtQsDueACzES5g5RnWqbcBHUFcSiVvJWLuTUdpsKPZTrLAusYi4sA5bsDcCMPuTGFyxY8WwSe",
  "key19": "s9itBtvVMCutbXXtEGMhuTjqLSyycpFJfGyHadKkK3gWJhgMusNoLTNaNVsJQDBbVncgVzRGXEx5GQTdvZvXQM4",
  "key20": "2qKPQUHU9C8sxwGXQnM4n2aQs2sUjhBBv3WuYQZ2cffHAuKezmavHaiHAmzH4B99SXZ1Gdj7sBqAZ8cAWWXFWSTq",
  "key21": "5Y7bVxuZeT7JnvxAyWQW9vMYDWubSFn9QzPM1DUfq6bX5Udyx8cnyVfkt2fXJzuHaU8WYRmsWQwy7aBxgewrpTo2",
  "key22": "4DXQCHyWfGYMcE6zEy7jdY5rTEenjATZTpTgQWY3ebaZezqR3H8XqaRibsb9PVmcHydexawXn8GygaE3BvTBV6zy",
  "key23": "3fMSiGcQkS7TuQG6E38GgcFYFwBHMfBmm7gf36iUrnLoTtvjCHCDjf8RMxXAUPAXi2U27xL2PWCcjwAgQE9SXvmP",
  "key24": "3nkxt67aaLgmTNribm814BuR6LHc7NB6zzdeqbxu3M9ZgGRtViUiJnf9fp9sAR98BYfudKSYtycDVvPaC12BTWa7",
  "key25": "23CRQWjC4TG28xxAxnPrdhu4njW1aPCNu1p1kum8rNU8CquDEtdipaW1pH2rZsbZ93YxR9maVwRTNPsSV8ju3kuK",
  "key26": "4iUFFr4ZcVKp4KjjYeD5EiBaHMUpvPgakSbHuff5G1k3dqEUyoe6BbdQ8qYnCsuRoTHRRpkNxyDs9KB3ZV9caZt"
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
