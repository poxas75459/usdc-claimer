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
    "3GUhRwEiQBENyEcTqDFmpMTVRJt1YLcshzVR2mA7TMoaVs7z2kJZ4zQoV2zZY2BgSh6sMvLzknfy6XH1jsAaokvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uWLD59kvtF3sR1CLrwmGKLxnt9Ugkob9aaYg3RC2kumWBSa7hcZiUSvHeKhKUtiubofAUgUZU3a3wTzHEQ29hUg",
  "key1": "2xcX87vqkcqQxtPR9h2MhEQsimrnFTDs3gwBjFkN7Tb8S8A8KJEKH6H2gLq9Ee2AHrV2EwVTDwdfSC31ihZLYYaw",
  "key2": "4H9QXDLpH8n6PBkCv3L5rsTBuEDZAxgpq58xiNDDaW6p8LpF2qnq4GtBhCs1fwzTmY2TjWpZVSJ8ZpJFokbzu3dB",
  "key3": "5RegeoDVDURdVGvN5ucPQ9Sy3aq5iLLHSV81oqggEGWNkXVDw12e6C4FuWrvYEkraK1MuNguWMxpaA9QHkUGRZrC",
  "key4": "5vNadELcJjqGwvvKwj147U1WPKuS5JL2x8LdUgfhuRqTnT1pgwrK9V7ibvo47uL4Aw82iKvh6Bfq3PMK5rQ1hVFs",
  "key5": "3dL3zxgfjxKiNihNTh5xYy5d3zJUaPKYnrMGqmBrCyLN5QPzzbx9YRTSoVATYG36nMsTc1e93UZwvTCk4Eyp7BqE",
  "key6": "3XedBnmB6xvk8MsCRTMHo7uysNKuSnzxsSK6qgahBnPxs4rfP6hcvP8WbXitnaAdPN7417VvYETsJ2jRjPFHa85g",
  "key7": "3EnfaUaRmhd9PeMVsVDYDm87tmx4bCWQmqjx7FkKF5RLEPmCRfGwFxzRXqnvuwePcy6tWBFq3zqhSoe7Yzk7E3cT",
  "key8": "3mV1bgb29fKWM8inH6BbTFQfuvMpzkntvjwNvXVZGc1GQQ4L51T1r6RQLYeLn4Ug18HMrhetEtR1bYUV9dFFxvud",
  "key9": "5o4DFLNnBLoUrPWDXTnio6BpCLGCykP2yA5XvcJEft7UvC7rkAX3bQdV9FcBVzdaJcZCbkjPoawjXip8134pBbw6",
  "key10": "gFeHPFCKeAFAEKNtbt6GAYcgdFt8HKKCiuQGtsTXi8UoXdyeBwX3kAvd89PUaSs22VFuJsKHa6DTUtYjzXy1N74",
  "key11": "2YBYGbUSmUu78xp9wQ9XfEZtjzvQDMGMzfbGV9uFrgNgQCzoeiPPSS3rZop4chb3peASSQM9zShkxz6MsY8dZMG9",
  "key12": "2X51jbBF5tNnYhNLVjE7hPv59wcoWEFr5ufjWBUHp2Ft9fuMAQ9KqBGacioQmuw9DW8FistA4yEDZcov5eNXNjtU",
  "key13": "55QZpPHYPnxA6aMEsHZZbhRvKs2jaqVxmXogK8g9fF9hcLzs2xmRowNdQ5ZS7L2ryyLpeN3KRJc8GHjEC5wG6a3c",
  "key14": "5BU8M2ybwqBGivDoykFdKjzEDdQbMboge1ctAuCxkKECwDrmpYUTAtCJqHWQf5MPsd3RtG1R3U7oKeVHySwGPGyV",
  "key15": "2CMBpEpxrvPbmA8JaoHyZFCqi3mDenufMwydYRhDdLNbkJJ3vEfdZELRS1E88zwKCJ4yJWdpwpa5tEc4znL4oM4V",
  "key16": "c7k8KX6asa5FZwiQ1A7wULVN2AvShgoBCuQnomtCVUfkU3rFgB5C4XLy2hrtsGz9cT4YiGHEjWHTCbmfsYvaHRf",
  "key17": "44476dAErAHwk6oKWdP9C1ZNpH63a1PZNerbRnEGbLDJhkLmbkshyQ8XazUeGZpiZRQ6sNK6jrmMxbjyXskKpozw",
  "key18": "2eSZqcBgfT4s8NjM5t6dzLyhW7WJzMez8CUZvMiqzeaiPmLbJUcaE6G7BepjKa7D1MrsPoP6sgSKoZsJniJpZsGU",
  "key19": "49uXhEYe9oa9hkjGSAjXV2T8riwWDmfqpUK3dPen6xVk4nw8yRqEY8z26MgJC4iELhTA2f1Hd1V42h3YQEbXazJD",
  "key20": "3gua2UCqehbpTmsJyAU9NjEAvxjntfpyjWMKenCp7zz4DjTXFpLZ9nTnJtKYKgDEu94K7jhEzmpTDfSUswp6nuTJ",
  "key21": "2YgZYTR1M8gVmpnq8Hfixn68wZcwzuJWEx5Ccr96sTF1jWbptisK2LL37HJzp8c6CQy3Y3vx63NVDkNuiWLDrmH5",
  "key22": "5zTkBrgZvPpwmzz4CD31ZubuENpqvWovonf5WCfEJUterhRpBVSgj2ixD5Jjo55a9VjVuFZ2ruLa9i9omwq9kmtB",
  "key23": "2Bwv8CJrcrUCpMtgvv2iKe82F3KjiaZKVXwsisat3eTFMvABoyhGCw9AbHzVn1aKS9Tjd6cSKoLQsoo3HZHPtApg",
  "key24": "2hHUzydkcZ56FDzjnUQHVCyWjYEQLABct8cjek7xkNsRAz4eyL4Xf6tDgg8VTJsSUMxo2iS7wN7eDdDBmhfmXQp1",
  "key25": "3e5LhiXtUGiPyTTe549AVSBu6BC8dQcT25S41aAZCPdE6eReVzDEYAyde5fxn625immErKr9rWUqR6jn1XXTSmGs",
  "key26": "4UrHDTyaLmykh9Rzt73RuRhA1d2ndHcqkEtJnbE65Z8kt3X75nmFJ4nm2ByDrhMUrbqmQXFA2MXHYUiFtWBEFst6",
  "key27": "3G6ynHPViLwdm5h1yC6FuxEHYodVAeip8XVk4s69EVT3sZxqXN44Z2PjmVsgKqboSKx6pE97kiRCASAjNk3kiUJg",
  "key28": "R8Vbze3i9brdjTU5ReCHebJNebFeqcFpk3ZSeArrDkfeR6vTcXvuJwrXAWsEuommRUuoSy1b4rCLSMkR2NAwvnf",
  "key29": "3advpVNGFnR2kHwvQoNYS7JZeWMsbok1BiJ6FZPgotB8bAbn2EQgbRYTo1iZTMtokJP3nhSpwZrqQGh6S8F8kQ9h"
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
