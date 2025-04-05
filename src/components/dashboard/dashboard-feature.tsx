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
    "dUE559iK5Kjb5po3vv7tVM1vq8Y3aNssfxjApDXuR2hUdg5MYL67dZbwXaQzAxrp6zmxxCWCRYFu2iwihw1kEbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3HTkrFEiXhTsCY8PeSqirRGgiktsnJjZNLSv7cTyYZFdYW7iq5mEox7i5WBUsm8ReHzj2XPxM9QoDkWCrGS6bA",
  "key1": "2wT3mGrUUEK9u2aLfDfLAx9D9qEUN79UbhjwYXF2qMpNWcuzn2ea7Vqz8kKrrrbvDHv8XLdgdvfPUwsjYdkEe4Cr",
  "key2": "1bNWe4sTcXgVGvcE4EebCx9sZiPVAtcqEzDbbejkzp4F9rc5Jfu8U4SG6XTwyPabKVnW6EWdGzDm5Y5oQocnq8R",
  "key3": "4xW1MMB8RCdej1fyBFWztwkzWUakqFf5BYbyTFXLXu2UNmZzUdbtvLpQq79wFeK5yrz45cBd54pe13rqmLnjX45s",
  "key4": "Qhu7oU8GLRQu1dSutkT9KN1iQK5hbv4cDdFJL6r5FDcoL4P6zY4Bx5nSwk7gT6ue1UooHpPRLKxoYXsbBcN2MVE",
  "key5": "6HoE2FzxkmgtJdbgfWhPYhivuSb8aZqfVk46rpLKDPajLghCZ2i6vtizCS1PQVxq9yx3t1oRELrkxc51aNBL6P2",
  "key6": "32vKKPZku4AHuSCGeoHkHJ4fDDjsvEqtJsqgX24Q5pGsnZGKRpF8yQNXwcseiSYodpQ7s4sHZv1HwfhkLBdJ15h3",
  "key7": "2wWUiEk4TEC9LNrSZPcUp9E6VnkvKY18iVi1VRq6NXs2KLmZEHcjwm9U1fovaxso91QJnoQbW8Sy4Xrw4VScBebc",
  "key8": "33eddofAWAWRSBTZk9PprfgCDeS8tKLeVj9AYx3V132QqHhq2U59qGYJzPiT3vv9E6fpxGAgC1MTFy8NPR51qk1v",
  "key9": "4TufyeapFPqjfqoPTDLnyvasqKKPWBpeGS9y5s35Qe6Jwxb7CFsqwG7GWXwhz77J19yUceW6JiNjQAYtDkuYLzcJ",
  "key10": "36iJbLfP3anfk7seqCbxqCMHbLS5nGBbsG3pySaBdQSPMvmqugkmf46gwv2ccbVjYFZuECpMuM84KdJTspMEEwE3",
  "key11": "4oWWN4WjTKFv7oXeSnnyA5tHRpCk1tVjYdBJavh8QhupZ5bAHddey8n6VvArtQFJf5Kzo6WPhFHiuWB6R3tu46Q6",
  "key12": "439oke69rAjnYYwLFuwXWoUeWdMDgEBar5xn986gy92Wc2RFiWrEfLmZ8xt8wKFW4qZgWCJcoFsx87qB32NoEcQs",
  "key13": "NWkrw38yKCRBVq1ewmEDWWu75JRJ8rVoH5r5dGDQKXcaFgPkKTpSoqcPAPMiQLr2cLFhkjDisChevuSppnxek9c",
  "key14": "3av4cci6xMoDB4xjvSxF2vEA215956RP7VikPQz8gvtMYqwGL7muoTSAEVCaaWYsxtz7DVh3MxMbof7GEUnsHugG",
  "key15": "5moNrCXgqn6RUAieXxVrGYSsxS7cSpMKJGdJjsAKobFDJcMSi3KUoZpgEUkuYs7kR9F4zqD9PfVyhy86pTnxhqTo",
  "key16": "oXTWWukzYXjvKZA2Ut4gWRB2dke768WFcWSWa7rESxsCMA4p4yA9BSqXtiWuQYnPmST6NWSEwJxFVPedsdf9S5t",
  "key17": "5ArGKFScQYPM8WJnct7KpPBoCyH9oks62x1ULNxqsxD7uiHkEBEMKKuCje2S86XHsR6WU9PQGRDcsvDL3pDo7wfk",
  "key18": "ZVqzPqVMbAzuuQiQGokdqqKzndzYn8tbfBC8PK5bd4rjzKEnoPu6CttHHmuCmTwYmfBrX7vASHGdoBhyWHkkJPq",
  "key19": "2gangJWDmwiyJUTTLGpDLAsRFhPrNhfBnPzKtyuVZD1kKDdAeq8ZcCzKYR1xL6hdczFCjwNKLwaf2joGFDVsvmqx",
  "key20": "5TvS7evbqab3sNitQgw3Z7wnaE6jHdmshyo52xDigxiSVyYAoKzXTdsbDnYaG8Q9gCU1CQCuxqKLiwLGWyKRqwRB",
  "key21": "2rS1EXNV9onen29qbnZ61xuhGddQWmqbagcidskwxTHTsWYnTBec3PDrhWCqtqaaVJ5QbAheKYxRQ66Q9U2DpBEo",
  "key22": "38QU2D3dXHmmNu2ztk7s4hcRvD39ieKEvZAdBhxefN3aL1oDyx2WGuzT8CduMwmm9iHoe2NFrwwM7oS14kXXZ4cm",
  "key23": "3cp1J6gJDH4tP8Z4RCe57Aq2SnFgBw7mLBja7VauoFv511VcgaSsL3LJnu8uDdtGs4f3z1nyWTS4V7bg7PW8mY9X",
  "key24": "2Zh33cHWWK8GYAiEiFDPF6G8cezb3TBoGe6Hgan4yXjbL3pQAhPfPeUqVsFLo7q4cpgQ8dp8vi2gWdbRRizHsXxS",
  "key25": "3V8z5Lesc8SNvGk3HCo4jANjL9fccS2mmkSKpLHy2gXcjQ3BeAtAK652Rpvp1RmxMF8eP2aMuzDnhw1r5LHuzrmi",
  "key26": "3a3xmLpzqkSEFkkermBw1iasGh8aowWEp5sQQWuye2wRuVkZETY2CU4WCbXNqkjfPkoTvjQNUtBEwcDWAxGGa7tN",
  "key27": "4XSsG3wj4LiMfWiwjPH67iK9PX9nkaatLNQPKX5GEA1XLKU5pyW4KhTpgwYmYU9GHQpc7YYiWBuXK9hV3R1Zr1Ao",
  "key28": "4Jvz1UV8yLyixQAfxhg863ML4nBavR26CeXCZjzT8BpCqQWdAhwd6tn17nXcSCXaQf6aMVtSLTWVcZCiRGC6yoiH"
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
