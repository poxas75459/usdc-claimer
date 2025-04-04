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
    "2NPKwjtr6Gu9sXLaFwA4ZZKLhR2T8zd23p3c6a1hr2aSmGgwsHZn6evgqL7PD6mQqjmsQkmXLNH9jX3SUR2gJxHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3SjdKUvcQdM8XCTeXLaq5nj87jw2MRoubtseBifyyQvAcQafxnYvmoPSR1HZCDj86zysv6qpKHpXS4xHEXZ8f5",
  "key1": "fHiwuuCPonUXEbCdksQoiBZ9cKQfNjx85Nqet8RTT84gmkSTxrP7ozpBABRHY871X7BmBXBUssM2dHjcMNmPUdx",
  "key2": "zR3pEdpCX4vnDfr8373aXKFfhpY9YUAwixu3UhCYdoeAvfsVccAXK1F3dyFxLgn3dNhEPSXQW15PJruPYcFoT2Q",
  "key3": "2Yz7MWbiqnELJ2au43gmoY1yACFEAreZifkmPw24JtY7tFeJRjcN6yifuYbNakLv7jW8snUw72PZ33jyvxG3usm5",
  "key4": "4NitTvJwksNh7pvuQ7CJQTJvXZTKjNGfkDNARmbVpKBvdnnebthNmkHtgKezoKxSqhvfjFEEZw2mKd2yVrLSsEjG",
  "key5": "4ohoCXHLJUn35EQnV1cd5mb6zsTsvh6bFEWNUKAqLHg75wgFGMCajfDb3HqtsasMnL8fezKnRF7ToKHqRWgb3Z3i",
  "key6": "2NxqzWFwsTNzGQbCdod1sc9EjxRhSmpRVTcGr3dRAvYYdKn7VRiuD6f4xg3bQJzMTTXLZnF9MKehKjuokgBGneLs",
  "key7": "5cske8z2DWtBD6Lfuo8CexQMHkLmRd7garHMQvigiJFvJdowqPQiVJU2m8wA1smuCKEjZ7j4ARLB5vyPAyUgMLvp",
  "key8": "3irEQsz9U4t9MedKhgTrZEGCSWVPPB23tkwbPWz16fpMyWfqgx4hrZhvNg5MJME6Q7kU7bxaJb864QZLWaFxL8KB",
  "key9": "5Lg53fxjtNpyomSvumcGAD39cgBbyr3BzfFfqtDYKVRuo3Xkr6vkizwXAimGcadt36y4PdcrXEd9pbP44H43UKU6",
  "key10": "EErefAPGQJxsUBtpcWwUSytbHqVpQhULQ2qKBetUyVJ8kZJRxfK8hCpwGYeum5sCeNT6c7J9chYeE9NxYeGNR97",
  "key11": "uV5XwEcybyhmHkGQbhRqowzPuXSZUQxLHWzXzWo4v6Q292rWqtBZKBdH8hSvhKn61ZZ75x2tvC3dqpwJLSrfTmF",
  "key12": "3JoBCv3VZgHjrsZcg7E2dDz9SdHhUtCAVz85e2uHFMPDfxW7LbjXnMKrtyjqNnbPPzHbWBdBSF995PAPhCGhQ9aP",
  "key13": "39Z5WCbkPW7E4JNJGnu5jN6TR3oKDA3GNPB1C2YN4MLNrxjrb4SSnkimj4KE92bXWaGgG1JVRWsJzXW9oXKY46D5",
  "key14": "2v5C6C24HdTV3x2pPceW4XTofBVZdFrmBEwheDmRpJtMpqrZQQvkyNRedBhCE1RCmKCeRRCFeYaz5kV7fUs2zzwC",
  "key15": "677BkHRdkTqMBbWpNCCgbVtsYgLqo7zUq2pKeRsVpmWag5P4HY2WW3MqvvpPZQuXrjUXkDYUFbxtceYN2tfqYf7n",
  "key16": "WBZGTW1pvSa8rs2nA1U37s9W2V7h9weQfat4v9P2V6nwR8htkAKKjB6C3wgAkgZn3hC4n7RgGkrQC9DCfqZ91MB",
  "key17": "2ZCdR5cA5bSkteyfijNMnY7dMVPiC7yBULHk29p31A3RNuWLFJHsdo3R7y9KMynpXFQzmU1YpGJZmxTa1YKyzWdS",
  "key18": "3dMaNj2ZScnGFbb5b18oa3CvPDGtSdUnz7pdc8Dhw95Mx7S89Y7Q8QZFFFi8H2oaq9cC6HsQtymgeW94FPaYfjxM",
  "key19": "45B3Q996Jy2s8vq5waH2jEJqXANVDUKP1zf89dzmGPBFCqmHEhQA85wmJ3rQDH23wQAwBbhb1BfRBURM6bdQS653",
  "key20": "5ufDozajaDgcNrajyDwmMTmJ7wBqxiectKMkptjJxaXDKRuAHkvH3nHSUbJ8BZ959gSzNJuTw5R3M1XuQQygDfV",
  "key21": "42GwWEtRHJMtGufwewmgZnDN1pWzfcVkNu1wBNxDChWkUQqnbdobQ1Tz7JoidgcM28MLGR4XGykHk1BhYPYKw1cB",
  "key22": "rEeokdJ1v1jHktuGxbyG6ZTfYpkvPLkNTc3JmWBGfbqTk6g9bCmMrdSk9SKGdD2B8tGBbvgzBcN5TGHqd7XZzCY",
  "key23": "5ztopxTCoQywfZ4zn1zZo55RgBSxiXTF5TnZDfYRZQ8oZCp7MuqrsoGhvFvWVMZuPNtNyXYDXm54rMFeYvMeSPER",
  "key24": "4BpHYbrAd7CGEMqagi3LfrUMfBKs5rUd3pQf7pzhJpucopt3D5QTncwJWzGSdbfW9cLyswJSrwjQXfxxqr3WnmRB",
  "key25": "66kD9hFF8fK7Ber6kKrVFUwqkqBnScAHGu19hB9Uo2aGGZFdWkTRFPJuajBio8DyDcXCQBWBhkc1GakuPPTV25rz",
  "key26": "3zdGnpJFk1fLLV9HYrLrDvSAdLMzAbseht73ooavn53qkGcdjA21jJbvBfwTe18D9UFVKxwHQ5a3ybNCob5f2Nk3",
  "key27": "2usLhroXMBWXS2p7RVzubvrD2Bc9RdHQF1HjXtYqL4xE7R3hhhn4AkMvJAcJnfMcHcZ6u6zTQXnokZfxW15wsxwo",
  "key28": "4Qu5xw22XYBXiWAPD4VcJ38jTtdJa9XFPHrfK3cDCzikypmRdeZGjb2yKFjp8RsLGjcEegbaee2iAcxn1xkYXtMN"
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
