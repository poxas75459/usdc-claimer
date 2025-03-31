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
    "5Y9CotL4ENTB9JYvV2unAF2YeVZzSmwTxRDRJhbU7PFsTmdk7ArkqDYMaW7TGPDWJDsacWfPJy3xei5JqXg9WNi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vNMzZ1kgVZTwcczzo6LnsRixNtxSJ4fW6BteuQTiUjcf5j94Yy7tC95uBmwPZ19GFdz1cZSjRwbYXnvb36RQ48y",
  "key1": "5uBwuZ6cxAutGXvJrq577QfZwyPqu4GTw71FhBvAwyTn6zAATLdXeidfbif5EqpQveJZH7EkTVgAZ2DJNPd5m9V9",
  "key2": "bNPuP1jrAi5aEWkU9NBnaL7qdb1x5CBE4mKEXb9T3zJKW35ZkKeUbTHLVk262TEwiibPiqPQRHXanccK823t8Hv",
  "key3": "JoCRtqGAttrMWw3BHPArtEJKUGWYfBm3ns24sQCJT7MKLxPfny3G4bpKucHD65CgFLVSMsz8MoeTTT9ePwmVMDq",
  "key4": "3pwyFyoQ8zbWsCfg2Jjb3EzRSxLzekGd528GZyEbY8e4o3LZs2FtaYLk1XbhL46P3VaFTyRtBJCWUdjFSjyozbei",
  "key5": "2aPyZ1A7GT2git9Zh3wrEXsdPQwzUMtDBeq2CDeFSW4r3PGRUZY1E3Fgf7DKU95f9H1vAYvXdxonxFRqq9a94v2Z",
  "key6": "3ZNq7451amQnSgCmFFGH7DANkaeEJJ7Fy55aXDD5M7JS8aoUSdvYghr8V5qh7LPFcnRba2xqFciZtFVK24oEwyMy",
  "key7": "5W6iJFkz2E9NVM8vUsh3CL1wKj6CaTADNbSZSVFKaaypyAk9XrJmshmF44SKQLGcCzyjLhZKT2Ah9wLwGXthx9h2",
  "key8": "22uPJAjdnUwwcoe7nXqFt2kpAyxeRjHg6EEwfhj8pXyT7vS42YNq1bAZu2CwYpYAitAChn7cVXXayBLoiAE3KRh5",
  "key9": "2aJx2eZMtj6rGMsmfUttZW1h2BbLhB5nDpXqgZwxmizhoEuh8kEtPyT2x7tJ9KmMJ8J2Wmc4WXQMAtAbVjeVDU41",
  "key10": "5UVzGB85xkZM9NeJN1EiRMydqhQfDRifN4io72631ZmSeLwCfQ2hrMzfGTmRBxFW7xRYkFvoPkFSWTfZcpKAkYhk",
  "key11": "5J4ZEQ4oKKfz2gvrp3q7Yp1PrKfnTBwRB2DByvBMeVqiSVFiCQJqyGwnERykQJMQe2oej8YX7K1rDw2W4khNcV57",
  "key12": "4W4cmzTSRMySA7pvrveT23WnDCuVUCBsFeGjzYBET5Bh2RdXmcpyYL31TknCidLXRzXBPnecArUUBxTUr6DcoREh",
  "key13": "4rdwjkJuYwMEakcoUvisSCU9hDsuF3kEtMNkq34B2HVWkWmSNzqtnnkbqhRLQt8xzHEnh3jKdKwogBhzhQ4Z9j39",
  "key14": "2gM4V33iPmN8yCx249XPza3GbykCwrArWXv8d7px8eVxsrVrmgdkAvHjB1AXiKJFeodSk3HrAs8o86wGaYnF52j2",
  "key15": "3YGw5daiKfET8PjXF1gBapyTmmGQV2c3jK7vH6su9CPiQ9yiCz8TSWV4XHmW5cNADVLvGSB3Te3Ce9Z8XtzqMwm5",
  "key16": "U3F1WkZLX7QuCds1vLvWtKLVNpiWrb696RkkLqVyzqQ5QeQFbDjUBzVwrXB4WuaAMZUPGyFUaS5qxRGsKH4XFNZ",
  "key17": "5wKJj2qWSyjPnwf1okx5vH6uEgijSwDJLTqb6bRoTkEb7fNRJvtdsXZojii8Jd9aKHNJCFReE2ALjVeEwrUYnjT2",
  "key18": "2aSKSz5e47LZ2gUs5h6nvaf3FwTY6DUtgNgZBo6Zp25F6VK66gmJMNedZmNG4G2QEsKAjL7zzrgpuuriYVxMejhQ",
  "key19": "4iKf7gAf2sHGA3RXVvUkNuoy3a3PcqMu2Dhd5TWzDhGeMiAV5uofwzXNpsazcrw3dvEw2zbf7DXWWV5xT5RzUNBr",
  "key20": "2Y3BCfAgAyGZ1U98r9QR91pwZRioZsSjcomgxbbtUSajjRBZAaPdLqmw5GZXjz4CgaAwMwyMPDBj2MjfwZcr5yB6",
  "key21": "WribYtyHzN8zkhrsxoD5gxizNrmcDkW9oiQyrFXXbFA4PzbhQLiqk44P5vH1cfFYuqoH4k337d3mPBEPQpwxbrH",
  "key22": "F5Hc4vSZtDAC7f5CkK8uMewS1w5Pf5u65uuyuJzu7ZjcSJ6aqLotj9R77J9qRDg9EmzVHdCPSjfjPe1MUBRcBeL",
  "key23": "2omvBXLg5jYP95WmrUftoGw43Awtx5GfpZkzWo3fbPcNUsCfbsrmgNANbvCa1vuLgtqfb9jiCzWtnnpBaUQccWUn",
  "key24": "F1zxgttsZn7mziZfYdeySTGuCQXkChihew1muJ7MR6HpVVDjpjUT9x2pvXhAxztnhPHtMbFntUwXJQFDvZ5BpZK",
  "key25": "3kmQULXPH7ssgUk1YsteLegW3E3xGzkQrK2oFWGdoAMoTjj5vRzz3vBrJRiHRpNroeaUhkpGdHoFQazSpJ2qcKW3",
  "key26": "3zaQAxZYJ17eDDktge9EncsfRjR2w8KsbwkB128AL2CLmqRW47VtPCeKkKB1BdP79NzhkpjDm1i1xxayZG1sFYqf",
  "key27": "4nEKXYprGN2Qp8iA9kZqhSCsXc4gGh7sQ1iZdyKQJ1Xf8WQ7vysN2b2k9TGv83WvE1r1UfszfHMNXFKfZff6fcP7",
  "key28": "3aXkFparUhNqREcpkL7SgKvtrYbujUxCr6bohbzQuWHGm3ndHCeG1RodyHZTyr36aSyaaqYxuCJEjLMSHkXrL1ee",
  "key29": "5KS27s9TTqQ4EDXYdjpX1a5eQSotumy79YkqNL5Az3BHQDWKg5VrwpkdmvK8VTbTrTuVD7UTyMGJUKEzHtVz3RgU",
  "key30": "4ZpDo3WfiNGpQin7GUL7QwEZ3AM5KAcUbnYKZsWAtnShZ2j5qH8sbCN5dpGoVspqNxaCktmBTE2kFf31tZPMyi2R"
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
