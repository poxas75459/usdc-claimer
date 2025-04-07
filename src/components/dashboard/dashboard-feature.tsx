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
    "2qmZqCVuY1dbcMhCp9kLxz657EkBNqjMYwcqtpgf9qXdehzfzYfPMZKgBXuJpQ3hbfX7w9TZpjWDg9AkFAkTMXHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FHnXU9eAxCdzv1c59yDqAs7RxGEkJUdkhRw72jZrVAL2Sz5u5seW6cJJFPw8WhTRAcer5APF8ZRCydSVayXRkkz",
  "key1": "5CL6u3TqdenWTsrc7ijoYRnDNX6mNomx8YT94i1kWX6gtX58Cj61G2jAvh72WcGYCUqjUMXixfRqsAU5hvuv2m8Y",
  "key2": "34nauzRzW3gApsYYWXcfo62sRpiQHtYC1PFtAVUCoNufUXBkcVcFPm7VVKXoeWtiFGWdUeTnGrTiLc1JU983KbnY",
  "key3": "2nzbJBfEGU6qKuo1e7BYAeANHmZqprib497u4zd7rMET9nVb5xCZUgZ8EpL2Pm9vcVqHKp41mgzaZc24tm5iYCmB",
  "key4": "4jwzwnPfNV24EZVEqjiwez72LgJwpYH7sqxbqv7rw4FudDtgfQePdgoUMJW1viGjRUZ1rnvUFGfK38BW2CDRYuAV",
  "key5": "3gGdCLgU9v2v1dLj9Ri2TsjsjvdbWWVKysExQCS3GSFvXzeUt1hadFwjAisCmCHwMjEUfb2QVfuj1ddBfPqCPdRA",
  "key6": "VT8gENpGXR7bbt4ebkWih5ProMpraXuQnpZ4rQ8gqw66wxKZ2ZSUGqjTquMyJQsHLSkrpT9vcRozLMQmCAxbvvi",
  "key7": "4KiC4Ph6yx4Wjx63KCGZniDzX5qntYAc83D2ociCbZPUyj7ff4We9aQXMt1kMZwXjmiqJyQ79oTTpg7ntAgcHuyc",
  "key8": "4Pp99E1KV9KBN4J4wRRsoZdsGYUUGjuxD9peos8Amoh7245pWArmbJWujR4izDHjDVmUvPYo9kCU2N6rmfV44y2c",
  "key9": "2eKzCqSDxoVHdhT3RxU1muCXm2MTfMC2JR8m55fms1NXTssH4LvLjkzBDFpoqwSGqDzAWUPiZEwy2JN441KodA5",
  "key10": "UkQWZjRmhPJGgdbB9eKAWVtF6jgwjQcMfM6eUXrWdhvPQugrytMyT8BBQxCEPwRonFkkNVXp8bQa2f6eR3ooZCF",
  "key11": "5QRpcCp3HVsR2L6es8FnTJAnSXL24YToerXQxP7zTkdxCjKHvynhhkZQs3QCWprFCAeKuRDeV9frpQZ5f7nfV3Jc",
  "key12": "5Nz5a1BLuoF6UmWD9GMRnqN1Me9yQ35YKJwe4y3BGthJZh4ZhRycx6goE9gdqHR9pB2pqiqCjxTNYSssPDCwPixA",
  "key13": "4Rq5UAfB5PvoXXkijGsYmh8TBcdPXuDwEpAkiKVEQcYe983tS3mTKekXPaPEmARYfawMRcZorKz6uoCHT3rah9AN",
  "key14": "5Vi3mosaRhTW3oyBTyTBkrxoPdcqeahCVrGmb4MRQ7arbpvFeGTXbcypMhrxo3W3wmEFE7M3GQ7h6VXpuGbBpAd2",
  "key15": "dXd7qN7cj4abHMcLDB7pibTi3xfEKXozwUWSZ6aDbvSvA842qqN2G3oedScKgPjrSy1X32jMUwGtFPTEnWu371c",
  "key16": "jeoznvuEkek2E6UGXZrRSfHUi83mTSP25UmVY66r3D5qzfE3MaVzN8uieGUcKLGtXyT6CPCL2Mr1HCRjKi136Gi",
  "key17": "Pmg8xBYcQHLcWR7kgW24kWc7Mavd6ssXRsnGKwDo4ubsPzeyvKobE3ZxzEwYJrhSQyt7QuLcYrCFUx3Nck7aDwZ",
  "key18": "4KNg8RMS9nS9HvB1HUzpQW1W8gGP3pNyRcxeJVVPRwKaDjRkPasd6YkzfGD6HVKNj8jZcwmhmaEQdt2EekMVto2e",
  "key19": "2jHg6x2Cj5DDKrainpb2SvjCNEBBFdPEtZvwR928nZ2PyDGPRBVcMQGqP16CkEvnCvQGqPgdJtzLkMzZaphxHTnC",
  "key20": "4ZB8EZZhbSRPyvWe7faE4XQvkjAUgy962sr5vp9sziUQjeNG9JbjPKymYhg2feGG41PiDi9sYm6iNoJiu8zM8DKP",
  "key21": "5wFTRsYwmAnNwumkM4Xyxwiv3HiqYxx6usR7iMkUyptFiFCLKQ2agT5G2D5h5JpjkxqTeom2Y53jc9c9q5Z519N",
  "key22": "4HAFdxsctynUi3nFtv4oLZ9VAWpFwoYFnrLo19cdUNdPSAcQDy9qbS65KFbq8oYKa3E7HMvRktJrsDC8wHzALaJw",
  "key23": "zXahphPskGnT6uQKNxksqZqfmE9wEoyYDze8UfdGeE9jTCHgsshSqzs5msd6Zvd88YziUqPmXpFRHTqjSUEfNiY",
  "key24": "64BML9j53k57Ez94yjccfVicZBnnxpYuwc4vdgfgEPUZYtwkj2yNantsmRnxfgcrNTHK86RtxdBbXfeSuuJvUh9L",
  "key25": "4u36t44W2FWqhUuaXRpiMW4qFrYyXHivwZQHLnTehRGH7UFPtRZXUazpuaWtTeWa2NhLvvqbSqQHgU5hoG1aoF2U"
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
