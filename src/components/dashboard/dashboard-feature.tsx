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
    "5LsnWqLJq74ibP93MEmvomW46dkut3rePGrAsdgKWRdWFATgovnktaKB7eQCZVv91nDyHBbfGYfMLLy19xq4LuP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDEKtswtM5W2A2CzNWbtUhysFLeYy1QbD3Cj7er8YPgwHWA9hT5aifaUUXXJhG9KhaGen8dTW8cqujQhc4WHaA",
  "key1": "3TW8N2Rsqkq8j5TxAJpC5Ur1aM1eYfBcayhjmwZ2TAA3Kskrp4ZhUTj39fHf4ju5uVB7nCiKj9nWMgg3U5FFx4p9",
  "key2": "41gHhxVxpuUMGcPUFNSS1rQKtFtjsjkdaMzmWPPsvwrj65E5RG98Z7diFkK5KdXpSABY1y3DoDWxdrg8vXFrWPYn",
  "key3": "3MweGVcVfC6s341Es7fyN33dDUEz4vC6Aff7pueRaYh5Mus39fULb54UQZ6YTc3u1a9nsYPSAsiKQL8k3JBbZXLv",
  "key4": "2ADdeueeQb6VPvbSXNVfDvyNFe652YDzZf6dRQzhR9mUNfhthx73jhXNrqVzjuaBiwN7CS6HRXt9E9GAX1CrMma3",
  "key5": "rMFS6EnLK5ZXVGPFMyRPm72o1snbUL2Jo9y8NtK7SVDiMWVdqHnbcKzDtP5ao1N8etHK4Hk9tHKuRT74xHGCtsF",
  "key6": "5ChfFbmLDXBAyVhEC4oZfcXxVWPHqfdzQd5aVc8KY7GYZdcLm7e69EBTZkqppSdrpro8VTjK4FHvxzP3XUgW4uVo",
  "key7": "2EKtRZhRKUJj7tx7PSA2bBqtDUJzwMHTLmvQrbYnx2HGqHyyXWAKwyyygHSt5A9f8G6CKeuQFwUzRDZR4M1k7g3S",
  "key8": "3UB7SCrrzWixAzPdEPyKpCWgVPrqKfnSSbNffiW8CeeVZqvGLbWzVQqZyk5U9EC2oLbx5YMPsoNNCcPduPtpkJ5p",
  "key9": "43WkGws4YptjWxYp4J823WKt3suKiihnS5EQvJCM8XTp37oeJtf6y677HTWZgtv3RCjxUuhFDxsdnVNw95TA6jW2",
  "key10": "vDEdrLFp4EbKPAfAauGNeSdDpXieSvyeHkuspaspE8uUjYmEfQN2Md5hPS2fHmd7rka3TjKcPMLC9vWb3KmvyXs",
  "key11": "3GXvvnBWSWbE2BkC5qcGwKWvL85NYYcszCnMw7kXeFPiyrfR7pi1sh2Mja1BpAegTmQjgFW1f8Q3eXj6LST3EnWm",
  "key12": "5ccXbf9sZDz8nvcJ5hFJNbh2kmLbN9au4E3GFh4R68ZiLa8TtR4SGKekhAW6nGZdHZoDAEF1ErkxxpreZKWUikwS",
  "key13": "5K17yt4z1zaZTcEJhrLaHe4mqzbAGkEBAM8Tyf7BGRtwfepUqBvAUku76WEbV1pFTt4vkJXYiGzufbvkT8KXDTBa",
  "key14": "5ayvnbaKAqXiXM7B7MtRiVHvy23cF3mFHXgRJQ4HMkXCShkULhBpBZ6HXasqDrVSM2hToSVE78K375VxLYic6v9L",
  "key15": "2YzUnmsEZUAZHHLMBpcR5qjH4YJdoifihroDendjWFwyj2vvL3cJxcden7dH7uynpys8rEJr6KYk5qezU8fPr1zu",
  "key16": "36SZYJiNdErVqwhFNodatMWUxDCpEQHZseNuZV7VXXfmXqNENFDmoF7K5hXYT62tLn1mviYEE6e7gSeWv5FzhYMF",
  "key17": "3CE4JsgjvBs2He79BhWT9nQXymtgRTCY2QY79nSsuDovFntvLywjwCKmsUoAQ6KDF4RiuHqcgYj7Z9F84MRAR8Nn",
  "key18": "4U4sVpRYincA4bpJ5qTJPsgJAeVGEW84sDZ8VxfSLkc74AddouXxB7aHifCHWE5Y7PWBMLjevREDz9vkVDB2RpvN",
  "key19": "3k9ipugz4iABZ5qL7fAPPfQJKvmkMoGHmubFZHqa5jYJFsajfDjPUuPQstWyDQmYCHfQ51ykPY1Y38Tkrb2mBXdV",
  "key20": "2t495DE1VbsP5FXPSf3MwDowQjjxxrJSJyF8qTDrztzXMEbEE7PTrTL1GF4pXCPdrqPTNV3oAWRa6oo8NF9bTY6z",
  "key21": "4EzkffzCZH76a5cRLTWfBqY5ZaUBxbB6mhyp3BsiiaEZ4k747v7BSnFqD73wG6V9vewKbZQnoWtDjKEUYyXoQUFe",
  "key22": "5uDZnJZbTiWGNki5xdpHEpkjwcVkWfrxSJRUADszc7cTa7Gi4D1Zs3RXte8JJUVvVffx5ZEp7ZmjrpoBHx2otica",
  "key23": "3wVXSSxzfAKrrbxDnuCr3diqZMjpDNKiPno2P5jEpeXADeZFzysXr3HPLwnAgaXRQPNZKcv1UwqTJjd3eoMf7oMA",
  "key24": "5r9fPX7PjG1TPSE3gdoW4JVgqrg8S5Tmzj66X2HGHeCyyek2H6FUd8hhY7N8xu4dnyLMXgSH1xB6BkS8Nuy8zK28"
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
