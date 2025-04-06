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
    "D6DYEGDW1GNDkHdjkZvHWgpF7ShDdqNsJS2dBcc616bRreybD7xu4xLMhCEqFpeK2sBXM7CAvtwByi7o3cLGvpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35hJZouxVLDMtbMBwGvw3Dk8FzYyGcDCkuueepsi7VmikiitG8osgWGH8yRFkoWxChfgzx9z9k9HgNKiSqD5EGQn",
  "key1": "47haTrV7PNAwazfNwsbYxZcBiqRWSMBy6g8Y9ga6dnf6mFALmWn95DywR4v3asYnMkbP74q85KEuJiFa794g6f4n",
  "key2": "3xRN2fMMXfvCKX5ELU5QhWefJobAn7KZyysok7gqydzd9rpMMo3mGxmNjhhgEjKYE9ULF4KxxCkj7VteCBjVH6kw",
  "key3": "5mxbFA5xo76oqZ1hoiBpTFEuwT1GonUncT9uMJaMu8GhzgUKmsGdtnV4ieWLTYTsim6iwGPdj7pXpBhRzfus7eNu",
  "key4": "5Nr5iU9Kzx6cQ3kBWF1RCeUMom8zCh5dsa3WbhV4VsYFWwcoaST8jBRDJcJvfH9MbmBfwf6ZzELMwPYTWuAWUqyY",
  "key5": "5JDDqzDXSmdk68QUHNHYLYS4ESAG19zPhcDiUFZVFXS3vCrVAPgwq28Pj8V7iGtUQBKWqYnGBxs56h2Vrr9YQRXP",
  "key6": "2d635uPkTNHQsH1mquAkWUiteH8cyVJeamAF46c1qvMuZAX9FwaZWyDYBjyYjHGTZJhgRWT4aC8Prk3mGoCXCagw",
  "key7": "5nBjnPBhQ72qv5s8s81kTVMveQNRDUWjZLPbhyPHFRxdTrKKmPH77UheNCUCn7e15vM7mBdgVL2S1HCp5aSF51X4",
  "key8": "4piRPZg2JejvbQDeCGVfL79h9SpdwgHsnYfZr4vBUZAkrRncw2c5eB8qVLrezQE6hxor3MAcY2bgmqLtib9zLuwu",
  "key9": "2jAk6EKisQyXP7CRCQMonmdAdqxL8h99tyvn5VfHWZbNh6h3zEGHEahMBs3x7qmfpHREcEbL6qDxHKohU3CorW6F",
  "key10": "EyLxbjZzfQBnts2Zi4CndzDgDyJWW8WmpN9XMAAyiBf8LTT23NQStJsRevvGkZWPxPatRP6XjEvQd4HEmcGwGrd",
  "key11": "5RAVpr6hanKJ4P8P1vr62qjoi6SWKHW4NMamMeKASJwgdESrKEWuMGLkfFow6gNLsHipUKZv369hXFRberojPyzh",
  "key12": "5KN85Xa9yLJFJC4KqmA5aFtNJu4wkCHJMVeZZY5Q26JNEHS3ZbA9hmSPD5yaHfrZSzAJ2VAHSRzcQ8zK237QKebg",
  "key13": "vgEr8juo3P5TTdxgVVqSpfpWqoJSiz7EXCg1HSY5AYZCQZQxf99VeznXATg2WoYLQHBwuxTTrA7LNq1ErQ9HbQi",
  "key14": "4MCFHrhsAyjuqV4NteDAZRo1DQV1drLE2jAp2U6YCY6kn71VNT2zsFSjpDByX8DBek9ji3Feqy11fZknLDVeXAv",
  "key15": "65oAziWRGgHNAbSFXaRBZhz1vX28XJwKDiHZE7kA2rKUd2SLkm44rPk72KG2D9JQUg7BVBEX1jBArBbgS2EC5CEu",
  "key16": "5yowpvFCGqKNtBRZLW1dCEiSNcg9UcWvcoNmf3zTTPCJJ8hZcpkMciKQKpcTtUBp4Pf2bJ1iA92opASoDZXTaJa",
  "key17": "5SX4dpDRwBpCcUbXjxR2X2ER5CxsuwC4qKr9HP4PZSfZ3cygkEpu7MWRJm77NcT3wfVQndKfBeAvHXbuwHT7V2Hu",
  "key18": "4Ai7RvjRuMdk1Ui4fd3zUPRcbBJu8n9BuSejP7bD313zZKizEXqVxm2hVzrDS368VWEcQaqVXeoeJxT7SzcWWCfv",
  "key19": "4SipM8RyKGPj7Ds4nAjG9YhvLJbSHkNkH9NY288sgs7Huq1EcQSGAmoiX8JKczhwBgW9d5vtZLFFECa8L42jvK7h",
  "key20": "4zDjg4pPCfXYyp22DD334mF7kKQfFCkW7YRYkahs8UjechKvnPFQhwH5cMRdHeMAEp9HGrXi2vZmK51gJXpF4g9h",
  "key21": "4NijteFX2Agt1MQwhwD6iEdbPmNm2Zyx7vDhwfKkBNb1j8eSnk5FNs8AmuAmY9EQZKcNLXfSaQzq6tdahg6m88mS",
  "key22": "45ShbpLRvptYEoprsnugBRFs48rdHHq6wXe9CFjZME9hn1s3yd18tnmuuiA4V7dnPM43ojrPwjp1WQEGhFv2EzMy",
  "key23": "2fwi9ubCJJ7kdnvVuK1KWHJq4tzgn1e8RaMFTF5jD6aqyWsmWipRYsYXsDgm6wjnS3aZvvhmtjE9pTtEjw94EuJG",
  "key24": "32RuvQX7sDUGG6m5kWuXQJgEH88KzBabu1qe5odUVrvQtWnJeerRpYPG3v9YGn4qSfEKkDVQcV7JszFPxX6bqvQA",
  "key25": "2zHByKctv4kGdhUdN8JS9CdcVHDHTwWqez5XnbZccYQx2qSupyhWYrzDwHnSuE3RRQC1sk82VMywaKcyLvXLWcum"
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
