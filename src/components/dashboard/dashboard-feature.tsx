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
    "5NyqMBc7Agmemh6PHeBzhnz6GxUDyafb8sgZRv4mHToDiETZaoiSwb63jBH6gq7wvwfi4VH5J1gCpaduZcAu6aCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vER6ftFi9fuV3R8q2vouvYgEnqCscocUkU2W9ARo3i85zHhDxY1A7Ze7b942R3nSckxEDgudCm2g5Pz55RS4Agd",
  "key1": "4y6KS5cABjonfFkecTyGTeNX3MGjSVzJXjC84LrjwMUf82hK6JJ7sNNVnQeifqHkKtheKjTHVCMFtoiy82qD5x4Q",
  "key2": "5xJcmR5SEVovLa2Vh6nUbvbeFM1jnSqbNgctJWLt5GLMCQqJBeAju1NAkYsGrkSxmJ65Z5m9JvYfwuL3KzVhSgB3",
  "key3": "4mPwbDkmPt9NaTqaH66LSrkweh9PMFfs8yeHB25X2Jw1rtRqqu477ZwZzUmWrcRPuNy6pRioECsVe48He5heY8Sk",
  "key4": "26sw4dxPkKCRGQC1146xgyLbJNLHQ3DkWm3N3NEbVU8g3kR5Kh4vL7HQJwAfiWkqyLfcX7hXAMEioPyG5fNwWjZo",
  "key5": "3C3H9r8TASzEeeYnGjDTbs9mhQHnJgHZtAYsAEVNVPZd1AsxiYDYPKEuuMXe3YWfLukmAcFXbB2jRsnz3fWqFTtP",
  "key6": "2ADBUe714KxeCJ4DX1BFfCiN5npjvp77ywMRde5MD6rHpRSbofxywhK2oVxKSvjJVSxPvaguBWbbWLXr4NwnUd3M",
  "key7": "5HF8J13UuS42ZG8iqGgLjSw96jC2KZqw9vZG7eJCfcgHpEYfRakz5iAWUiXCgVAvT4vgJ8ULQLcNbmMgbs8itZVV",
  "key8": "3YMXEq6bxVdexASQ7xNCdfcUx26ZrSnAtxCcX5SQQuat3NGCDgBCok32zCYSYRmVc2SRV4ox5Ry4VUe47a4Jjywx",
  "key9": "3C68EDFREAQwMo1pRJoQF2BxfTaJqzReTDRHB2kctQHRzZJ5vDAobYT79H7LwrsenJ1KPU7AgYJTu2D5BY42EZHE",
  "key10": "2uPKXDkg9xK7FWhQwbdyxVA4kVMNtTwTkoAn5ZFmG7JqWMzwc2UYzcgogFYAUPi2tC9axAGWNZKiYsNSB3ukRqGK",
  "key11": "4MDiMUYw3Nsa8biBXRmEMnQmnnUnzp9vMfCu5yRkS8zFxE6q3EsLQzgvyYXf9rEEBYvC91jdV4YcLYQahCNmsivJ",
  "key12": "4VNoL4RKfJJ5CDAx9z2J3eLN85W767rTtcd1AZbjzUUZUKogPUsLKS6EZR1KdgmLRZW3FucRjaFSnA7c8pZfTyEb",
  "key13": "5epQ9S8nFvAU7TnY1egqNKkuNPyN6hzGRjS6SpMK1Se7ni2aKRmoHJKbU7aH8XKULRoMXg1QJZ7eNAkcfupDok6W",
  "key14": "2mdy77ueuUtYBi8KkoysZxQUTg2ehEnbbvnCUYUSQj82oigA2JyztNFHxkcW9sF8fh3hm847Ku5VC5dFhrZFWzNN",
  "key15": "2KtsqcASwrEaVm2wXYTXsxjehnfnLwR712L9E3Nx9qzA2oKuvLAgMgYBu5KGKxG3u9zn2ujzf7FWCxiM8qB1gJnG",
  "key16": "efdAchGEWYwfognf6qvfjc6guB1FCdtNsiGXvVNx5Vms28FDDc7LnX3p44QT9FdPLvSuRFxYKjnrRKc3ruivWLN",
  "key17": "v9yavAspSnM8hx5tVaN9Jd9gz9ZRScr6xrNkaQYD9QkZogKSonKmrzCvx3nEBwHQD7giNfrcCoSEE3nL4yuuB4S",
  "key18": "2n3GeM5H1Amxu1oRmsiKJdoxjCcqHCaUWcKxXbuzNVNJaTLqCZfNjr2jYf3o78WwkMzGt8mN1k8gtjbNLT9koYnK",
  "key19": "2siuZ8Pvc5u9HvEsGt4nwwxFtEdCWTWpRWF99KWeDP4nHc4MnjbNZskVRJ4wZ3R9pXJGz9mt5QJ7JnNbjji7ouGs",
  "key20": "YbFxnp1oEcynRhWLjRd5wWVRfR586tDXqPx1vGszV9un5ubwVPv5KZM1WxLAyUNHShfKJA4h5PWFzPWspxDcuwD",
  "key21": "3QUoopyMUebozqC5WzsDQfM24a74pmkvowRAwQbnVz3qD7hXWyzMp5Ws44gsix7MiFPE4LEvcXXibhpWood88NjF",
  "key22": "2JACH9uf1XTz4s1gU6AtG2YSfWNNdf6Wcqn8KH7Vgqfbo9BM55Sb73L9A87BmLNSu5HqE4w4DhPxC9CjWnqZF8rf",
  "key23": "p5NchRsjhs7RVhKTXZTU4abTK729iYiFmph1vH6P1ZGVq3XFCZz6vuZ1sJitVZnZ4jcthejPEc6LW2h5ym87x2B",
  "key24": "2zWiPx8xFaeMmL2TsFgp57BavCHeohvQkW42ja23sPaCet2esCkzXzK4CgykmCPJTRmLNiaNtuSj95TnqQv4Vj6o",
  "key25": "4i9aALmE4QREVVp5mhVifYAoQdfBXckkbVvgNCnV5iriyMP7SAuVBJyyhE25C5eSGMvzF69M2FenE2s9UFUjNFwP",
  "key26": "3B9RF2tUNtTpJwCSRwJscmUP6RKAUYu3Wtq3WZsd9pnohMn2EhRWCxpsxtGBF7mQ47T2ahzr1xrt7iXHGmu1hnwo",
  "key27": "3Z13fGbnqpLR9QeEssDpd97D3d5M6TRHYrYsuJFNVYhzfcXds9bV2SxV2nhwRr2XNXey4j22apun5ESHnqCpKVYX",
  "key28": "4KvPzLiKxEAYFQywnuDFRBYLkbPWTAkex4YoiTTtev86N3VDyuxNB4GcZcdEiGsW5ai24WbeNzJRCUxsCU4s64Y5",
  "key29": "4DaqBtyEWrWZPM7omUp5uSwtxGv9FM4QBQ2QgmnyPhmCxYgQx7mhDWZmYaTZokZGJ7Rp7VDnGfXEU5C4uyy3AYvB",
  "key30": "2TKky39LDChyoq6mA8ZS1KVd3R51WUiucH5oLwJJKssVMVw1unV54Gy7HXkACek4HukGNHtFQzgJ85zmCswZnNqQ",
  "key31": "32zuGDCCTZ8sifiJRv7N2yzhDovDzNcCYJDXqkzYt4MsBFwuKyLviGzex7deHPPxCdHdGWSkArmg9FE7PsC8HWqM"
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
