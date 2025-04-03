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
    "3mSRPwisma5XMLWqu9PWvsrTwaQKFztWEi77td3P6HXmtLHffLnmmccimMNXuGhcFSAgkvZWNYFeyy9SMjzc5BVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K69TitGsCReZkuwTdCH5QUxBTN8A8ea32kxE6bKk4PXK5Lope6D7jUZgYGLe9pjD4GzWurjXkHbBZfVeLHGFRYn",
  "key1": "4C46LkhDBAGThwyBVWoQ4vaJCKRsNiMRMMy6x74jfKFjgCpuDTCw8cdm3E2hLFehKwd3r6XhJ9JNEzTRyTnUpwUA",
  "key2": "44KSkH6yktCscccB2r9bwTHm9DbQqo3z9rkt6rUBeF3DUSg8WRgTArsUcnACZto771DBCycouaZ4d97GF5uV4Qpu",
  "key3": "4LA5Po9pgHTa6TXRBs7mnXNsiGUq2MBs5GLEvbdaDn6oJTyVoADhve58mW6mJsNcBLDLEsXa36A1jKZe4cSsdHP4",
  "key4": "2A5Bq7Pn7a6wM4AzBESXN5m3RpFMYLhZNqBURTJGTuYPnFhFo2xx3RCkwrJaexy8Q1iJUR6mawFSCud4aDqBsTmM",
  "key5": "3zZqDNCWYZUCGYj5tuvUEoPqgFZah3jLN1AMoyzFfRKxjgyWTmvkWLhyvtfUqg1mZk17VUaHiuS747U1ygABpBGp",
  "key6": "4JeGHbjVYKMK289YZ9FeetsmsRvvcAyXCuyrKU5YFu79qF7Bdxxc7nRXHqE6jaGXcinF6ju6ULPW8UkQfppiKjRu",
  "key7": "2NUHXgmYpNjrzMNgTCY3DXy9RdmbvKsfu9hkwo4srPN9MCWeBMqEhj2BbAFy43UMhWTqbgWzKWSjto9LvKKNqDJV",
  "key8": "7J1H2KnubGJdfxgDWffPmwWJfR6D6aXYXdUWir8cPWcDjrZAJyMKUzLS4kr81QsakDt6AmtnpvhSNe3g8EJkq7v",
  "key9": "2sMMKJkzNJQ3ti2kUQuHaaPiRAXdc3wxKiKPTdm5GtGjQ7ceyuow7cvrHa2V7DJ9ir3vnTQEL1QzfgdAu3gHXEef",
  "key10": "3Y94FhjGEhgLmQFuapwYCnFg2Gf1saj5ZJQrDbvkuRmG5h27pyMLDog5Pack3xRyspMeXeeZP9P5q3UmFt9gCH6o",
  "key11": "2S5xbQGceM7VPg8HKW4b57AZ98kLyNEUPJVVc43PLBL2YSrxmz5XR62KUXczeQzfx4AYC2WCyD4W9h8UYLSTF5YV",
  "key12": "5TzHt3jYpXA7NzyHdbWdVBf2ATKgixmGUJ8hED1q5JjzZUNnbdVEwkihUy7FEwo6wpunDVk69wMENnH8AfUmCFtm",
  "key13": "4CqEKPDXeQJSGpDfnkeSQjxq1aAWqQHsXzANnLUeZDEhtVK4gbeh6AxixQSAJ7M4oRbgtf43qHAGTSAxBzt6BUSx",
  "key14": "5jtbzPWP3jU7jYXsucVmzUVMXfZrs76z5yHKDrSqJRCgE3r9EZjssQBNM7SM5cb2GJss7VAhbaB91uPNWwBVbav9",
  "key15": "67V9D1vAAdYKZoeX4pETqLZEMnPTdsV7w4nWHcvcsUYzyWYurJ14Ae6YPzvCyh4RuJkzPema5KybSdVDL4DWzG6g",
  "key16": "4veJeoBcGWPxTqeUiqHUQaodmZ6tQb4RAJteyJrnmkDZ5jCqY6zvAK8Rf36wXD15fNkBwAuiQD17nK9AazjTxzFq",
  "key17": "35FfcUBzKbuNxUxYsHcLbnbSDKiSmrU1dNrYxPfTAbUm9zfuafYZVNUQd4THHYLJrNRUYHYH6ja6PQ7SMqBNt4CR",
  "key18": "2yVvbjSDtpvxLFa8f14dp7CDEpWtutNSLuELHCaq8htoLbxDRSbgkKQYpiZUgAiYwQPMRmiCL8WCsqHqFutUqqB4",
  "key19": "3DHTbMP5EGvyU3XNki2aVzVhco9WnM2DTUTs3kAR4uuyKYkzvqUWdmCdq2LwbLrTTpuxmnWXRBGSDUaE4EDx6sQX",
  "key20": "45ygo19n7UhAFS4UoE4G3DPnwVv8NUxB3Usz5HfkLSdinsiLpF5a3kGb1Py4kog2Yhc1AKGXbYVf9BtayBZV6DkA",
  "key21": "56zjU2uquDhZUUFKWUy6QWMDi2L4ur6MkYe2JBRcghgedrbAq5XSMjoadUNHBWU2XDhNE4uXxBdjKBUKFqiZMJJw",
  "key22": "2ZdnjCKxweompFGSVVUxLzapKz5uDgDqaVvCmS8yuD599qsF332VDEYMYLQujrwzz7qA1dJeQwABQai3Laxm3yNt",
  "key23": "2pnux2yK7BLyFXjCEitUD1YbiKBcHm6g3fC4k721gMRozFTTmQK3PLxmA3644QbTZTDbdsympJqtgXarnKnQVuod",
  "key24": "224EpgMSscmNR4Evrje86JW5PmmFYjHFAqWEav7mEaWFFRitcWohLiMUnBA82k1mZSWAC28q8d5QaMzeQyTLBzgE",
  "key25": "oxSiZeSWZJdthhTicgndLmBLUHK7XCtLf4yDPUi1fiakz3jH7jHttXyrTqEfeRctu5q9bMKVipS7DZ43gzKNmd9",
  "key26": "cpbe9BbCaT3B6QxdNY4VEqDhehv6bCuLR4iwbtGA3Ky1KYohtys5MT9qsXg43kxp5Xkisaj1GcaagFSZFyBWn5R",
  "key27": "3B5fnwgLEA6WXBZ4TezPaaVNRc4XCjxRzYiU8Gtw6DXhEkWGNUvWk5crbyUZTjNKpEuqyHeVaNivqFcfkVdV3Zer",
  "key28": "vFprY2h2dGR7LkseGaUMRSAqAxocaG7s7ezX1c6xGqi8AAgB4ADYyBcj3HPMLsfu6g6kGZKPs6GHBTuzdVVMvBr",
  "key29": "3odg2KMFvm3j5gDzD3KZoKSrrP4fDEwQ7xR5Doi226MneTSt2npP2QkR5SvunVuN8qT8y1yBf6vPkshZu7Lr3x4a",
  "key30": "3TwyMRiNEgn8vWn6Q6qMFyQFo4Eia63mx8qfs2rV4VSmdfBgGVMQnSARqt8XJ1U8nENdTu3vho6hThsvHmZZKvGa",
  "key31": "a4tuPEhsv57ADyqchnD8MhKkQxJSbqCF4sJs7nU8NooXQqbQDUwgKmvBCTfkkDPnrGTehE1s6hXNdKLsExE7nWp",
  "key32": "3YiFFTTkuUg5rgLGhmTUcjKjEMZExKm7n5xq1UBwp6uF7Z9Yc2sq19FF4Ea6qAcTHBtB5TXX9b7tbSMV9HFzGx49",
  "key33": "5pydNzGNYgdroUfkZBFJPUPb8s9MREzg19ui6VfVc2XNDBEnsz3UW8gLcdZubcErtpF4ExfMkfABUuoGtRFuqAzK",
  "key34": "2kZPDwQGw3F3dWLLAtqabWnrvWDENjLFhpDdrD8d766KFrMoQewbU6b3WgE7QN41qhH8UeTS3Rgv8wvqBxiT5usq",
  "key35": "2YGkBPSGQbJycTkjMRJJVk2eEWba5N9AJg3nsPpjCzwif1tUcRyMhoFjiiD83ZkiBvvd25WHUGFEXyprCvkkcNWM",
  "key36": "3qiy7n4KRKY9QhXaWmaZS1GbquA2PZhDFqbVKc7RyTNe3JREbhTvcDQZsTxKQe5GDRWBm4LSS3oGQ24piAEaMTUS",
  "key37": "2tSAV5CuWtQnUqkzJoCYwkFypto7oEfBFGoaWTuRfMxJcyGngMrVssNkvdG2kTuS7tvxZeSCxtVZdp3MsWpTex65",
  "key38": "3F712X9CfgzSeULKu1mZZnWLAzYQTkibKDHZmfinV5MrhyQDLhw51tD7wPF5mWxYEcBS3gPsP4qDqJAmin3BWbvM",
  "key39": "jEuV8CNGnCvn6TWJB3GdnHyKzPsx3sTPpncunySYjRj2ndKSdzVFpBxeWWfe5Gzf4ixUsucaSCaXbA3Sp5ZACqV",
  "key40": "2isusyDsTTePP3C8qbynqdcjPn7tucwpVzVQDTpiccyDXQ1TkcRx5uXWyFHDbJWXJ2SMEtvvyoF1ZPN2ZyafsmEv",
  "key41": "3h1T7fqk9x2T9f26obRoxBv7Nshu71eGvDEobUKNoV5p3rZUAXvM2vgDGX4XZG4enWPs37WBfH7kzA7jHx51rE3E"
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
