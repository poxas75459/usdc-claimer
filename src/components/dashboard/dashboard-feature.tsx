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
    "5QgCmqRMxdRVVvcPrLVHvMHBDajUhrHSMyDGjYUsp4ZpaVD9Hr1zEzXgtJuz7ARo1fPYSmbCmN3Xf4E6uNLLE443"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59nw3bNm8MCeXHbKUZtFmR2LXKPejFrbZksqHfrZtqoXw1i6tFyMuBF5EZvk4iupdnqudZTUJ9NGRAaK7qjohvCQ",
  "key1": "4SSaBafBJG6a4Pg7xQw8y2C8bT9QT7Urmrmf7wLbG1UTaiY6SaXWQuZKSKh4S5W94ftUcL1dhFSMJW5oCi5x4Tvk",
  "key2": "2Hk9FhfrhUojvNdasuGeapdNdKuFVzLrhXokWBGoRo93SNPxDsGz9yo7zCssb9iGUkNejg9i8aV7jMinxJtY7oG9",
  "key3": "3CFitBCqTx9JewDLAWB1vrSUxLZ8bEsfmfeCzWzYp68VDuzFdK2tEQFWxzzetTWYPbcYhg6oL5i9xpvsVQhTKjUx",
  "key4": "49c4Q7cDJugqWt3KtWx5HQEBu4PPdWvg7J4WZ45s8Ufhygfp2WkijMEPHTJvMSoLjpjMvLw9cKv6CyqvkVEDYKnB",
  "key5": "zcQufcEB15kCi9i66rtiCWbNEu8FACyqMWRcQzySUp8LfZ9pWvHcmGBACbC5PM6eHUgaJqRaqV4zR4Nib1caY9D",
  "key6": "2ApFdAvgnym5qyWDVMygeVGio8bgsWmYwE2axETbbvvTLvfzWEjAzoAsUZErff5LyfE1mYbfFvHudWj35dHaTLig",
  "key7": "3gEvuJ16n6JQoRoFMGgW3BiypvWYHsLfsg3TZKDe2aTesgBVQ88aRwNf9VFyXQrokfVvsJDvRnoEaGHPtVLtAw4y",
  "key8": "3hGhu8MJdJQekfKiTQv3pHhFAokJqXJrKrgPt88oXbqT5e8QLz1RazrjLLEUwbgoNjR4ryTVdstL3PEcPoSwgRUi",
  "key9": "vjAMoyMCMQtVtXeT9aYPMsprt3EVxDtNnrrQBYz7CCeyppYHxNNGcypyAUVKpCM26mAnDesa2XXSWkpCEzhoiGE",
  "key10": "3mKmgrtHKgdqJ9bZgcFWtfsYPMxq7wk1R21iKgvRZh3McrdwGNuo7TdNakcWgpxh3MRcYt7DZd32dREz7FHRXF8E",
  "key11": "52M3EvyC9B14nibXqbMB6kFT3XfSMLHmZCVd7nBtwHSZZn43asRvDXTaf9s3bXjNhPmuZkbNGriLJGuJXJTGrdZ4",
  "key12": "5xYJMzxwRssaGrUQPKWriqRcja5QuwE9QBbnmzpmKhNJmtXeiZmxX12nbWksiWh9XYTwpWPgFyXa5nj49gfVeShb",
  "key13": "z1Rq7RWAmm2H6566PLne8FZxcyPx8vF7hjod1JrRMsWjvEQMcLPPwCbUgcmZQDwVtKiyhBfwqdJ6irjKf8y1gk5",
  "key14": "cKKQqJQqNYigx77BeQjWuWEQ2GXQWoHSKnTgVRJhptvaWePPx7DGq6gZCPHn7W4ebny7MaRpGtbfdnQvZPwwg9E",
  "key15": "5yDCZazc9CRBsvYz52LpnY4ZukWnWwYWYmQXUguHwKZ6RFEpWn9CZUu1VeVP2WQMePcPFCmMnmof5oW7bBAkKQaw",
  "key16": "233XtbfdbhNAfExyHxq295NWNQFDZL2QCfnnp7FJJUduFkF2Koh2aTxpj6ryY4YrUEkQ4icBjBEsUBGiqgfX6g1q",
  "key17": "3c6SKqRQG2KwXnMTwdag6WhE7xWuBCYqSx4LQBmTQB1BieK2gKoJdEF9ZFPKj9RnvhPtTu9DLzvU5uWSqKYzF7Jw",
  "key18": "5bkTcXxFXoHfY9bTfbH5JeoCe7CcPCXiWwL8xUH4rBjmpoU1tSFKqFNEm5HR7mqvedMtrQMtHv6bPJDSTqcf9zKW",
  "key19": "3FDWuKC1kuxvLXXqMxasrH412qJFFJb6hpuNc39qVveftcfuE2fLA1Kt6XX26urjugxpWWTps7A9ycCasptYiFHX",
  "key20": "w7a3Kqyp2NDFyovstuiiYY2G7SA5SxwTPBrTGpwha8Vh9v8A9XMQDoxPuufPg68deTN5xhkKvSgr8Xn626EheYE",
  "key21": "348tA4PKpAatyV431zYPkotNAtAjKS76rZXwCRFJa4TKqqwocqTCD1axi2Jj9WThfMoquDopQzdzBNYV9iD4qBHx",
  "key22": "4AAAfNA3hPEHxfNqFjGhSmxZFFAPChPaSedsbPMnp6Nd5DPWoKz5wLDBoT7TWAoQnoZ7yqBLHNdyuAMojxvkrCQ1",
  "key23": "67oiSECJbN2BNpszQS4Pm7gN5cWypAuZ4q4xevYTfarczeccHv5ohoh3V4PYMiwW2BJasSJKnrRCn6MYT932rDr6",
  "key24": "4QAdw8o11aceGDF86Ukxj7CBZhQ1uwuCAyyrj8tr937mvMkBwUVAwQWN16x6mTATchAAFu8S4Gc7ygSwVRuMk2GQ",
  "key25": "5mKnKaEDUqxW4qDApJ2HEzjxm9mAUxCynkJ2v5pdTzWQMbPPUXrdnMACJkYdyxaBKJuyZTdEBqmqzo9KSipnceXW",
  "key26": "5SKKdyhpm6UTsyLAbVamZu2LrS86Qa5eeBDXaQRrBKkq3hc7gCGzguM179kMbsyn9tRmnoaxRtqp1paGBkjzmFj8",
  "key27": "3qHX9h58tvERhZ46PZyyxxmsiV3wkLxvZw9U8YXzWLfJQSrUVGZDgYrLhjHqZekWeKSkxoYCY1JmQhaeRj46fLQo",
  "key28": "3ZefidMHZ51L4kHDU8hQBGZeGPKSWRfqt1PJUDnz1g47jaKT8NxX4QPUWt6LacLsC3cMQzoRVp6eKAceNE3UDAdS",
  "key29": "2vdDdv6W1cwbZYQHNnxh3CUNjR28mMVDFeWMwHeBPzViK2NCm2DnsnrdugwyS8vWvA7rd548XsiVgWPinAmGYnDG",
  "key30": "k8c9hXtANZqkM3XbBJGSqcNcx7tQdXFhxPWdLKpnEbcw4oD6JzW1ZFDrXYUgTTm3GAkNt7R2bTUqym8Hys8xDvx",
  "key31": "4bFk5U7G76ua4gjmYL6PFf9w8SFY8Q1KCDAkZWX7kN5Xu7Hie59hf2Bw3SuZPLCEXkqnpmnHTHnXhDy4XyooRpru",
  "key32": "2g1ACSwSswVi7uZa4Vky1Ldjxy2Z9XZ8tRhM52hWecJacYp2Rm7dfQbLrGrKRgCPP5AM7epXW6YXuxR97dtwQjHq",
  "key33": "5iebWoDbMivgcMtCPetgTpmQjGEbK8dXbpLXuj2TrBgeqg39w2pG3Mni9j9BgPxxQYnzW1N355sKspvUJ8DzqRGf"
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
