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
    "2rp9tLJKr5AEAvRvZNGqxhzBxA3ynUWUkwBtT2jS9RDJyNzghpmnqGLx3L8V5bgaeMTPLptuT4x9gWmJB1quYgP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k43CT5NKoFZUQ87X1B4Y34oLSMzkDocSigGo3nTNsmVCgQrvdMt4JRHXFKUAf9yAxGK8RKm5yELpSu3DCHjitfQ",
  "key1": "4aSzXGmcnpmJe6WnftFXRQoy4oUABABpFg6MxXtGaqAudgUF3mVSfFtZ4D7bNvRg9eyBTzHPj5J3KfcFPLb1ABKv",
  "key2": "5K2ArwpVwYrV7QB1xe3ejzZeS1hUobnsVLeiAZ8MBor7NcQMzxuPPhppZB2rgioZdtyMFWcHMbZcvhmo3Q4XS64H",
  "key3": "3FKHKy3973M2HuDuAYoZteGTsYua6QJZRdHAjHrSTqXpt5KnPnno4sDjbJGbVcqSjK764LDQcyJk1PnAgJZTThqs",
  "key4": "2dxQM8pb8HoxnwtaJZrTnJ7DLoWYXVMJxSxeutgfaPCGvkzt6yp7BooQQoW3Vbj9aYBUnJEkeXHafyFp3QFfKLtb",
  "key5": "BgMigL7eCtoxGW35GfDnPhrvECLP14cxcpjvZbGUPoaPx3YnT3JcRmUFMALTV3rPK3zsv1RtgZQnZ31cPNANpwV",
  "key6": "6WzKkY7WU2gCsKjhQp6aqPWJzU8Fa1qSYZKKamYQjYUxC2snsBgGCJsrVKGwnwZ5TXR1qKYYafnRyVaaQzyNoMc",
  "key7": "4crPnZ4xCHLcmDrtJR9PULffuCtbNSEdfa9ydNbGvTCNAmC7vWBbRw1tWxLVZFtwspotMzY9ATc6ugbdNccC1t8f",
  "key8": "59swb3uesXbr1fCmSTwt1ybcCkfuzuFDh95M7DkXhP1MtNrqCykw2khnze5AFVdCjtgZyTdwsuRifbxHveuabK9y",
  "key9": "2HuWTCabQYeV8t2cgjWPaCpPDijBjQbNrUScxMN8wboYMuEsG79N84snBU3NBCdiTddNoPzusAdcMinBRRVSeRod",
  "key10": "3MPXSDNGpEMQJJHztM4D7ZsDvNumEvnfbZQbcfumxQr9ed7925YQyqo8SpM8ue9hrA6y6crXksVRQnHbdK9wY64o",
  "key11": "5WCeWsFCoz1bhMch3h3SEbE2sFCWba11mCxTShbWWwBwWZAuEZH7XhrePHoL9CFKqh2urxsgWP8HUrE9wtjiw4hQ",
  "key12": "jVW4vznvrUqsVEBoiPkQ5eBY6XPY1mSRXcF9tLUbzR3Undb2NKsnSRGhTzchDgkjn9x8mGAJprKenoWEj3C2eKq",
  "key13": "3W8fSpPMbKDPM6gMt7N1xUWE5ya6spLVUbVAAamnbsXwYc9moe4ew8HWzaqZZtuXoCVyVPmpayimcoeQ9zx2hyTT",
  "key14": "3QdJE8p4LugjZ3Qhz4YMknZRyQMji3GnMPLQBjJfVFxiPNFR8tvzWWe1epVnBJvnCiFasdiMhxyaQksGdJAizhoH",
  "key15": "TZakqgBuJfd8VRHQzGkzV87WGBbUDLY9X9BG4pSeKMJnHXxYmXYvGBJ4y8Zdf6rQpVSk99WRvAHaNRdL2LoGcwd",
  "key16": "28oRATx6yAapvbQdY7RbckxzT89K8vgyGNVzdJNAgTuMHeJ8kWJpifCdpJJrKfXWAhTwzVwKfWsdFvtDSjoqXUf5",
  "key17": "6fsm8fLjPbmHjzGW1qERdf97jUHq3xr2RcQfopkzBWktW7PBdLUmjrZQvEJcfv5TBK3dyky2PDy4wix1JBmHajz",
  "key18": "3DcBh4dZXVdiLdZ2Un7ZkBHgTADRszzckbej5yT5syUjytcjZ341Vn7pb4eJa6rNya55jExN4ZhCdGDxcGgy7emQ",
  "key19": "3cLLZ7wmRFF6vMfHQFdSwc8M7fhyjfp65YcQqKFusLFtAe3goNTk7rdRsjT9BNDhoDJM3XygDrMu1jHJGXktTD3R",
  "key20": "2QpyBUe3C5HCUMcFuq7nB3f2ctpQk2h4McGKiz9zmAkmqvMrU3Bb2z3dwDAGToBYwqLAe48mgocFr6JE7tmfAenm",
  "key21": "BogPBxsyoYkTJnfrWqjUGeUBRGj7eGtX47e3TAC6CD5ny1JtvwvsdXDGSkgmn8fQRHQP2BHDhqChTXt4C8UGfTH",
  "key22": "3s3YN1GGWfBHTX4BCgWwVCYjKigY3o5LfcyrDs2gaGwiaqkV7oYWvTomA8qfN8uaExyPGVrtahr3sw8KK8rCagZh",
  "key23": "N6gUZzd9KzJ9zdZBywf9JCvtr9VLhZJqmBvgLwXMo7SEQ3FB1KU9q2QQh5zfWQXU1wyBm9vsWMx7XYyheAGe4jN",
  "key24": "v2qvZXVar3A4Vj5CJ1fEnv8whUVGePG1D3p9hnsjfFF6V71MGMXxnxAGVcr73CCo6x97BXVbBQeEDuxbRbsFMWM",
  "key25": "36bkk7Yc2NhqyHUdSFVUe2aR8EszT19usMb9spaNaYDD1FE1QhPqfft9kf3QDjFtVz482egR5fzAPwaZrrXMb6b8",
  "key26": "3GtLzvykJyRmNsQeZKw6ZLb3ZQ1GYyR8EGT96sjroRkF28xymrryvNhdudSPyeejPJKQAhugrsRT9owZCJzWXTpP",
  "key27": "2fDJBXzNccvW7v7ggqiuLoenooj491bJ9vNnwoX6xxp8cixeJGVf7DLAULA7xSRMtHQTFzcecq69PPBvPMhGpfNS",
  "key28": "3XkkJf6fgFamk1toPTQZ8gm851DovmRP9AcR7fgX2ymCkSjGq4PS4TxavBz7gEXSpUnhrk1gdNhVe37ckr1FdVZR",
  "key29": "FE1ZHRsGuWXK8f7KSszxnmvzwzn669MJA7YX2P8FiqHyU87aBgogL4exqkWTi3sRSUxBYGVuHHtp1aUQAy624ac",
  "key30": "V2YqkXwHjFY9sBxka6rjMGGNAnpDxGgYxm3jiVb5YGK2hb5gDTGeJsbjnLX8jTQBfjqD18jFWMf5iZs9uYQZvNE"
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
