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
    "3SuujYJ4UisKWiApmkvTNy91aAyhQwuydnVh1BVznvUJJ7myHZQQAENaDfRcg3wa2WW2gE2kNot3UpxwX5W647FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VapeQEeDq3BuXio47NquQzFUUcHg7S8WwvwvvS18ujfxt9ikWeaNuj5iM8T7813NKWz2jwR5G6jMyjdLoXuGFPd",
  "key1": "zZkv1v5pJymde5wgDsEquvtnZzArmoU1nTcGTEyjuJZD729FojtkX8owv5i7v9KQMsnRddBWTReDqY7XkWJyfyX",
  "key2": "5b9rVYCguAAY4MtMRz3TeqHriNHi336ZMWhLRrpo8ybyBgxSJEFxhyt9xF2YFnt4U1ZgnEbgwfbBFDL9MQz34gLe",
  "key3": "4NURN4dWKcbD5tUHwqy6nwhxYmCVZFmCPycqWrePA1i5VWkaLeBqTd1CuqHCXY7okNGYDYBVStw7m7nHRz3wxH2F",
  "key4": "5aKtcyjKzyB6LkkT8VrVtvxyXCCafz2EPQCQumQPZJJuE2YspckK5KY7XSgvqHusw7fRPAVhJ8Y3HwZD3vqqMqmT",
  "key5": "3h9L32VL5u97UzJZLTW8M656xxXP7trdKTmQDGCR2mJJ9R1mwe5tcFij9GSvvGDsBsfWvLNrVC2j8MZeMDHtW1uM",
  "key6": "3qqDJ7A6Rtuq5cAb8wehT3jbRdvs1qcVMBnZXDjFcB9RSGWdTcAdWQHW9o3FcuYn2oG2gSSMWnwouaBxotYDwE3k",
  "key7": "5af1Eu9m5FmTtwJXb8n4dTRtVmoVMdZdtP8f8bFFtKJfm9vuRheSFKGkvp8EktVDQRrZmNqwivyfzvm5YDKf91tL",
  "key8": "QdGQq6GA3GE5ts4hnwoDcBa1Js3H4y8qCfDmSMN4NvEbZd8ngLKWc9CTiLXrSxEdkycwr3e6u7UwkQWwNxVAYUu",
  "key9": "2ZZJ5TsBuN9YJu3AY5WsbiapjDMJStS8qGi23BWqUWukBx45Dref1K1Fgxx2y2gWmHwP6W3ooRjPB6sSb2gdmKRz",
  "key10": "4QbQFAhrLkqaPvSZWpBLGBnFuh5ui363UaP2gkXyKqiUhohpxQkNN7UZsATrLCHjRjHjJFKRepUQv7HUwh3MxBiE",
  "key11": "A3YbuwKyH4agwRi2aqcfBZi15KQhzLudAmYG8Yi9hpiijvjjCYRYvEh5t19nziFvMKAcN5M5r4qvzjvh47PMF5f",
  "key12": "3FFRuAeiNusQVw3oaogU2S1zmSFusquGtAv8ZqpnXLd6tx9DAWypmQ7rHArBuRXeTLgh4qNV2ErpuzzFF6DJFJP8",
  "key13": "4HLzuPUzMAHD5MBjV4n113nTubabXjVMNa4ibWUj9nY8oa7WEwbvSs9fEmVuAQMzityJrKaDu9n3gfmyjSkfVK8D",
  "key14": "4TePFQwvKDRsHHTn1PHMY4WQw9CPu2DyX7FcBs2V6H7XCTR4wXKnkPjxJBWEr2jGyhtNdURXkWEmxARJz1k9eH3A",
  "key15": "57t9W48iiujFT14jybdNXRyjjg8HNPgJZ6kVzRW5D2Ezzg1A4DWMSCYLDmhsknFTD8m8KA9QgD8hnD5YQazCArKb",
  "key16": "5KUXQVHXZ8d5Z5PUrsqPiWyWUcSpx7R1ephAzepBTfBXgCN3824RbTrtTGkjx3PmiquzeAT43P15k7H76Xec2HyE",
  "key17": "Lvhwxcgf5rQjM8DW3G5fj9qU5pm9mVaHTJBY2nsnG9VbcZcP97GF1gHhK7LepooDmY8dg4Fz9pPkzHgT59huLwn",
  "key18": "q6BfG6gDHSUSKzSF3ufjxL7tWHpiSUk6qn52QRA8b4p3fQ7izCCw1TS43tJegTADWi4vEEBXr11SdDTmSCZKk2F",
  "key19": "4nFRb8zLCE3Pei9YxbUUsSZXXZPXnBDqW2mFNMTypdtTuEy6doDiy1GeKXLrJNjuhJiPzX9zU8BKdPFH1b4GjHE7",
  "key20": "zVagTPUaeh2Yd3CUVtUSoyyHiRLGyZt2EFB2MLASBts4ExUKvfC2GkhcucSz43aEqYegftCrFEZM7UxuTn9xRXp",
  "key21": "2H5zYDMJ5rSL6tm3sxFjneEHRgQe5uPG7C6rsmPzpjN5o4eFZLfN3Vc2995cFdJFLnvknFEVN91ei8pdDuV22oKW",
  "key22": "4ZE1BH7bpysVXzaQ8ttVSsUfChWKBajJYubtTVMh1HzsP32JgCX8DGoZuinTqWVrYBRMpcPuaamuJtxeyU2s9RwW",
  "key23": "2VtHpSJnYGKwpDfDCfNg7rVKKABRD4dwkBJVc1d5XJ5B7rm1KQw1uESSWM4bmL2njT5PG6Bx6bGCSPxeQK6rn5hf",
  "key24": "2vVz4pGRvQ2AJjmZznbqoZyTnG3WQKvUJhxi4eR8n1TCgZsipk2xRPpJL1Cc6ijHuytFLb452LiosZdNw8tGSuST",
  "key25": "4tFihHmJzbGQY4jMnW8yoTyMoBJBhwGmi5ZU4L49ggQFSfdH3Ps8VpTbAxwMEqjaWSXtXUUEX6vNBjxXKHN8Z3qc",
  "key26": "4g8UJxDkzBSjT2Zd9TeLENCa6SSCRhBA77KHSbEjMz4c1de4K8HRLvq8AeVyjdCm4eBv8LBtPuTD6LY8rTFafHMN",
  "key27": "5sm6MLPue58REzDNsrCXCaTHgryFJ5nUseAJk9hDsYa9EHtpwa2eBPNuVSB1GQuLdS2MXP845pFsvfYHG6D2UR1c",
  "key28": "2WNPcW779AUr2a1GBbbo9EeYqbxu3bDMzANMCKNKKdijmbsFyL2jk1pDKfJj9zuLyC4qGX8DfyHtXPXYHkJfyeyq"
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
