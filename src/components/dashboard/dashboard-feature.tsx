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
    "3ZyGTUffNduWoc8CsTFmJPFVhromK6eMYQoWVt8mj1BqrJThWUwHbH52XQY3QfEQCd6CBhEMoGH1jWanW4F5esga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eW2bKuHnnp1qdzwop3efeD5symEVeC8V96hiqsHDY7xXTMkcqt6WJix49uKDxqbAz9R7MWaZFSTAakPaDoLjqxS",
  "key1": "3EQFDXShLGhbUua54BDnnvJ2WWBDifYq5eFRLHyLE9xhJ4WP6djHCwJeJpMzGM1ScpJiPpNoUtT4Tz8eEhXnXb4C",
  "key2": "2EP7up6QsMDskUzV9XmY7viFpSbZncmV9M9fL8CHqVEdzG9CzMHmB8JTqjAeWtMyoJERBKKzoZ13Vv6SpHGztAbC",
  "key3": "2x6THSMi81vWzHEcq4MMGSfVJnGzTKBjtXHjrLNgZAaLGMJJH6wa7FLhkGUtPYvWS4jXsS6aqg3GzynuKzLR7VZv",
  "key4": "3SfNzBpTxNHMGWoTbP89Yo7iCzNXAKRb2Ef4xYxdHxNLfngEF7VhAMq2oWv7opwMnR66qrpRPa5CYsYFFmJfndAk",
  "key5": "377tkotKbi4CbaQhtLuHkTD8wSNYTNfNkrZtmDXcdwqRpqoAYzZKW6qeGq9CE4ZspuPgcZF2d18YjoV9znkuCts4",
  "key6": "2s5Bjb79iXEg5QSkw8tsD72mh4iT9bj9Mqz6j9dLBA1hPuLxayXwRkbsBdnY2LpFgSxrePTsbnV8VPgAx2ResnEY",
  "key7": "XQ4KrvV8t5h6VN95PsmT7VzqXUFfex1g7iydR91Siru3TzDJtEJQey46ejgFnc4yBEWinVuR63JLBKN5HmtuT1x",
  "key8": "3kWRnZcztZbBB5y9Jv2RCori6qK44XGU9LbBVb83nGKRkUwe1pkRQFmZ1LeGChF8oZF8CmezbsnnRnbR9CpLPHGS",
  "key9": "47GcGZEbXzwmQDkhpBSPTKz6ZKCxU7dU4UgicafstZ4TdTS6Mg9pqFcp99UuTkEGyALYmiA9wyLr3V2rVF6UmkzF",
  "key10": "5WABwBVesNmQUYFKxa4Kzbf8CugnrWv8GYCCFs5vQw33Q3A5J4mxkYbGuxHDa6HUtASD9GspegN4QKe69trPnEAS",
  "key11": "4gJn32jXTfz1SuDLcd7QZ9bsqpVzWeeWijBJqkz9amM7Zy59T35PqzrdNo2tBdRZT3nT4gVsLrYcP1rXG8rEG2cG",
  "key12": "4Y2Lofh35DmAvhb4K3VxFrnubyFnV9MdSsNPYTXbDDaSwCWBZsCDWsHJ6hDEoc31JiuUC9iZQXtu8yG4L1wE9sqm",
  "key13": "4kqeXHApksYXx6jvtef6v1354M4haE4jYJwkERfdUpYWUWH6c2SZQgLTNJhvhKgKWQFizADTyQrm2yh1Ee3LWWS8",
  "key14": "3Pkqyyr2BBdTnE5pEaDmSkmpQhx8dcH9VoUfg8Nsm4B5RrGzT9SJDmbr62phrLWMHXdK4489e712ZNwFSEsYeevp",
  "key15": "2Epv7PqWCKsgDxdQYynpUnoHATaPKMPmHJ3TFn8bi5Ct96RTs1AQ1pupnwyiJ3fqtsuXUrxuBc8V55QYsoK76vhc",
  "key16": "3na2kWJGConCgWcZSdVn2a8MfVgqmAPeZNKgtij6rXPcothPChQmHmLGfAc12AXraueG1SynjhHfwvFS6D8WzcJ1",
  "key17": "3ftrUm1yrbZHTf5ApCevXjJ1KyzemgEvufBYg9KhEWmd6TQgJDhA5HEAap35DVCFKqMV6MdeyrzoofGzNzYAELEr",
  "key18": "3UZ9XdfQifWDVrXu71C3mRGifU8AfzpbMF7RLHijRC7PYKA67WYmqaMy5pvWoHmGgFoUNtUYNWLtGRFyW17WcKE7",
  "key19": "4Yp5X1RNq64HEvP6ANBxLA1RpHzA9EANxq29hQG2wSVzhof1KRLnEqwygA8Eu1shSVECDzthQMTFpNEXdm2x3Hak",
  "key20": "42ASFeJ3LLqUYGbCjL156rR45fBpLZ52VUzj7qdp6B12z9GWc6jWBe9ZLCFyTd4btVyMYbyHCviv3NT5gBr7NCcY",
  "key21": "2gMLmRMp7QYLHFRAj2XJWnX8pW4YQJvpstf1BWVFVtbE8ChdTD576DfwaRwVbkggytaXsaa29V5De6q5Z3KeQgVk",
  "key22": "3DU5K9kMatt9yXJQDYZyrteTXKKUYn6Bn2uhEGjoQujKVLcPYgiNSX7Xf25q9VSELgkPu6bYfp5kGxcr6sJRGw33",
  "key23": "3nYauG7hQ1E4Egds5UetDTJrXWhVni2jEk5YFJTjLept1GoJLnkUyGPuEA8n5vw2ccc7G8Cf2Rf4VLwcXtnm32oo",
  "key24": "3a4i6UdHQKvLPdPDHEgjwX5NS8KZZVGaCKxhXRPYhfHtXQCfxHfq2cp68nVHCx4Cec54zTBNXniJ443H7tPG6Uwh",
  "key25": "3Pkg8kzMFhwDmLPRXrJJ9TAwEogYkQj99hw5MCTACtQUPA4DE7PznW6JqJymEGuJ1G36XgZoxUvZvW4XgR2kSUbA",
  "key26": "JHSoRa6FkwA5CNJ1D4nxArSfsRZg5VNeq5gwBA9R373zDhWGVfH5HrfSVV9YpZd44N3fK8YLWPWg6oXK8dWuSJi",
  "key27": "2BVfMmsUqqkpr9BFR5r26e43S6Mj6XVojTsq8dPu5eaLBBoc5yMT3cq2Wsj3Uz1BQnB6FHaqyyA668RoA7M8u7Ji"
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
