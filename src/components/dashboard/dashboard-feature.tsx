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
    "3aDssCkVSK8w8swMoKCdFVeQTA6aY4K9BAmq4BBPHYFMGmxpUoiyrzBPFhKWuH4tv7YYxzKAeuGbsxFvp7HbGUwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pti2PihuM9o8rMXwdTzNbwu7MaoYrk4ZUA1Zgwym1nHvTpkQQTdXJNeo5ARRwsYQje2Kn2ZKcCQY6TnmtmVe4iB",
  "key1": "2pnvSTHMUFjWuS6J9gD7ufkDYPd9B4PEvNPqkD9hFiJvp45BkAoiN4a9PF17d81MuCzJprjt6ia4Xzj3h2sReAGt",
  "key2": "4McPdarb8BsGAf6dRXmb1Xh53ZwQQzAbjHBq8CKiLoRFS4sVdDv7uC7j7PdoeopMbFmhneXo28ruYkiwRt81LWvx",
  "key3": "651P7aJpkjxYwE7SwzvwzhhZ8YGaiticLdFMDknngEbdG7q1a93Z3GGnsyuKLTHYXfTsTfXYc4GeAHFx9mXcs821",
  "key4": "5nxVTDVyvcKdx49UXdpHMUL7C4LDRemGatrfGxUWH5wj3N8QfPVGKhwwmR8c6zEgmHid4iRcFPVpH43U2Z831yjj",
  "key5": "2r4pUH53WNXVTVcgDAFYxDJc7h5tXeSArLYStV8PKCQWUrGCwKuZDTZqZ14jqTVMQJSwmLKcj9DoeGefXQ17zypj",
  "key6": "ayKyx86J9GgEh9nE7RFSRmrsNemrjktbNjZy2AMyLmUgXJXBgtFL7aFJpxjs8h1vf4qX64xBU4YaaRmWs2fgnsB",
  "key7": "4gx5kW9a2vjRpkHsmEMdDoW837Eah8f56Xd6pa7eF3dXiU1iYLt5yBYcbXURaTpqhGZVjBbcaPt1AffTJfSsXX3j",
  "key8": "3MHeVxD9Y7fqdRbTy8uXSNJeQzwtA1a94Ugr7jUvirDQNjx4hUyaP9xP94g7TUpYt9UjqeyUq5SWBv2hb4ALTUff",
  "key9": "4gdgRUFfgBpD6PLVkyQfB3dFTYeZmLsbCmvvSR6goNUxVSjzf5xFbiNc1cyNCnnubQqKUt13PckvW6uS5gM1wAaw",
  "key10": "3jVZj4sahmeqiAiwhNuv5YchKpGLR59Mn32ZhBDMqMg6Hh7Emp7sN1gAWxgBiZkWC8CnUgHm5w4EuLfe9kFhW9Em",
  "key11": "3zyLPPxUNUVL1JuSY8k2SburYYQSMTM8nodJQMB6CNfJ8ZsiwTEXZfefSm2eADnrCdLSqoJPEtGENXDEf17QD8N1",
  "key12": "2BahopDHwwtutdTbRUdM7KN7SnHeBdQNchx1PCfpCSuqKDtZD8wx22cxWQijvLxZQ8AMgRiMfsRpxBFxBDprnyTW",
  "key13": "4YL9sJxrp2M8pLKPoTojsn4ie5iVkorhaoyjrq5p89L6rFeX89VdjrZZRbwdeLAwNj7soaLdaP7WXUSSDLasPbaj",
  "key14": "2mnfmrQf5NvNBkNAnYPLkfLeFg28GdCdmJmxAiE7kb2ZWe8pguf28pHBrMbcdPuRN75cSf7edrAcNDgFXNd6rg5U",
  "key15": "2Uzcp5nTJqTvR766yLYx9ueKnQ5tYKAqSiRcsH6EaxQFY4KVPCXPc4toThf5A8t7SBxJQnq9kVgEhEvWseZHGzhm",
  "key16": "27EFjTVH5MgipdkdyA2ErNqsqon5HG8XshuSCojBhRfZ18DFZdRXLjzkYTmURe8hWpicRDFQTTP7B5ZG2YTxQ4VV",
  "key17": "2znUQ23CGDGxgysiTZP6sYBS2MtK4gf1K8RpYBFqwjkjbskBoFf5k8b3ZMGsmr2Qujxd29dSCoRRZT4pTKeAkRP9",
  "key18": "58BYXjY3JUmUgFvdez9SPHxxBg6D26czBoztQRsuh82c7CDpZxi6DMhiJtWvsfADvtmJ5BqXT4dwEE9Cpm4DBR2i",
  "key19": "3XW4bXgSeHP5eBUUHjvWWPeVGxL3V1uQvno9akodiS1eK9UXdACeGv5rKWX726rAcDCu4Xst4fKFxBVg7ieupJd6",
  "key20": "5ZRPaoZL5qich6vAcTuQjU53hnCtG7XnyChBb6SCT4JNL7eAkkV1HvsGfFQVHD4vHkyCPkNUChnA8mRbkNsdwy3",
  "key21": "w7XkTmhiqmqKbfqCoi7QZnaiw5PSb8RwTyUncBrogdkbf6a3YWL27T5E8bAH8bW9FZ2GUu72mtZ7j1tujV6SUvU",
  "key22": "2xE1mjGGvuKGzFZAw3k9StPzYvQVVKjC4xBtF2JxKkJ954Kgbf96EiNiQBXzdB3KWDzMDqWb4x3nHuFj7Kt4umLb",
  "key23": "4szQ9VWi4UjpRyTfA33PWtXCmbEJGXxWTPvJ9FMvk6Q4WetPgb2WjjivTfoGVbAXD2X2ALh8iCFKxYUivGPksd9P",
  "key24": "5QBC4SKSLzzS4gv3pQ21Wb37ruZHv259nTsnEFJnrXM7tFK1nUnZYXG96HrQEt5LKo7sXWzbp6WCYd3AuEmkD1ca",
  "key25": "2VzWfaAhdueU1GawK1ze9Uy8GveHddPH5jpx1fqEUoGx36vpvwPaFnxQjUiFdGMgiPVahirp2P1gscDRzTcZVEGF"
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
