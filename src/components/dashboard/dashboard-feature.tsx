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
    "5QBNDygaxTFp7tMPZqGUEdXC9ASkui9BfmnWPGDcetDahLXdL8VUq9iwpxp1ZUpHRr3NaBDE8yN6g1BUyuKEu1Jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zXFjWg5pwxPGb768ukA1VD3YMSa4SHbsYAc1WPZSELc4qLr7VQKeDxYq44cTDzESMrhkkva8ySuyqWmJSWo2taL",
  "key1": "4aTm3oBFEWYC1byR8pCdUaptxMQt1mEk5g6BkRTYATFdhdvbdiRhdcTL9wj1BL6hDftYC3wLekhqGExqNS4JmnYH",
  "key2": "UpvHjnF8ikVyjtDyFpG39HvuAouXdrUStJYzHMHjBbqketmNZPdvdtesti9RKZFdyRTt7ZT7Ety1P7bbom1RJsK",
  "key3": "jiaFSdxrtbwwvTqhB2WAdqD7pqDugwFKxmegyxDj37S9umNYXZZ2Qu2CQDTxyUbEkQw4YcEmPZr3mg452X44TDs",
  "key4": "2y2pDNshmGLjDmWnseRE9sBguWhj3z8mxfgNxsYQE6jyyN2Dq6HHdgPkmteWSZiFF21nKKd7Etfm3EkBfCGK3Wed",
  "key5": "5TCu8YUV3rmV3w2hzxjSnZQFFV5tXkSRoiY28H6nkhZ9igUKjwLbJYkyEPPkxHMEK1PMWSp1jxA3jFNRvGqdTo4Q",
  "key6": "3MUk8buMDQUrjB7JAV7HFiPBh3v4STaHgjzEPWAMUd7FENLEEJXtKha9dGfyrBCgQ4rBX1ySrSCwhEbxTrUaBHug",
  "key7": "2h1ynPL47FjEQaP1RfEnWnEiAiVbcW8KnjMade2EJpbu7KTodqc93CNFVV5xhKHggC3jVm4TMhxi25D8gSubzKpz",
  "key8": "37E6TwY3GXRx7nq6ACRETGkpwCJBJ9MY1P82rpZ84YPyxH5VbsMQ2PZZWNxaZq6c8kUAdzvpCaQm1jKFEgBbQKKd",
  "key9": "5ziGt6EpXd6VZNZCFue9zkbxcMKETn3RqEQq7LRSdvMBJzEeGShFbcDJTBBnpRHt1T4mYjtzRKkFGGBw7sEvv1tK",
  "key10": "2pbrvWV6gW8U1j8yDyLdLJrKtWbvY2k4bSkuHkxMHKFQr61WTMa64t7SeaASG8YDvyxxXfBh7a3QXXCPGh3AT7Zq",
  "key11": "22QBSccr8FVC6FNEzXMgb2HvNqzpqLJ4rPj98oCtq7sW6cR8uFc66o2b49t1kgzM9e4k7KwgHe6YTpw8ix1oBu4J",
  "key12": "3Xr2LE1sSbsJ2syj68fMefv3S4nynqtXQfiaGri926EyRePwiXwwTyR3brRWKBaxjSYCpanbN1ngrW6YqQ6FJdgC",
  "key13": "5goPAB96naGwVGVZizobZYS1PQwGrTo3EiuqBU3pt7L8XzKwnP2nKGZBaKnZSZDrzYfFdrkkNYQuR8v6HBheW1i",
  "key14": "4quC3mFtuiagHKupJp189AYRaMymZ8Y5ZCR9zgMiuS6NMmePhktcH8XgWfSsWMZBe3oYKFzDYxT1adnxp41JaP6E",
  "key15": "67e3urN1hKGNQZoPPRFM7Tjie4NkbNV2zyT7DJf8MUgg2P4moU2GYBkGJHjsjrKHUSoCSPviiLA84KdzZicfda9Z",
  "key16": "4LCqfGVyrKUYWw9SxF2u9xXapaYDNSNCDKvQ1xJU7jMU7PnF7uJVk4YDNZ52ztB5Prc2oRfzvM2z3XyRV8mMKUZu",
  "key17": "4851D41Ec85JPMTkk3CLRkLoTkKfYM9NNBbr3uWeai96xE1Q7D9VqHkHog23rHzvSn8u29MPrd2NiQd6A1S4rb73",
  "key18": "kRzLcoW1H9DLxn9g5FALHkkZxmCBGSTjQuXPnuYixaNUGWcyYw7K3bBjmU9qDRJcPKyc5vEax18yEC8hKo5xCH7",
  "key19": "5kouHfsFQCBXkJdFEAg3ukEVZZPyZZKAXGsF5eF4kx18KdJ7EACJzGZ4RhwH34a5GhChbkJBfTV1XC7GTLBG9y2e",
  "key20": "2BNp5TJWchQ1NyauWJMhwo5a8TZG1c1rXPAQQmXLDgLELo2BZxWrgLKtv9LzLJr9qJjY86xY5k5PbND3revzteyd",
  "key21": "3Xw7HWKpfqpG9Joyxns3WEzwK2pgmW3SE8eqmLeKh82CrS5K4ASdThiLM1eGRU5tSt28XfTdooBgh4qdbuSxSRXF",
  "key22": "3VQyv471AuH2hTV8W4d6YLE5zKKXU6kK4bVwaekiYo9g44K8yRHA9dvFsrxDk8QVxhukvUFyS4Z5dHCE4CGEaxyt",
  "key23": "666fkcHEm7pwmWW19chkZRPzSMJbT9h8Z4yAfpxzTK5vSR7X52oPGTeRM87AkEah4AhRdxzJpBcQy9E1FEPy1P9t",
  "key24": "2TM7XMm854WJqksjBL24e2CkjehQSxK8VtBi6DLPhEYvV1VeGiQkmXibKFyU4ssLBfdK1Hz62UEsPakqscuHc5pX",
  "key25": "4BHaf9nx89TKfojogbunCVRvtxuWFP1WNFD5mmFLaWToDkXAtXmQBiQVXA3xXwsVh6dZu8L4S8SZkXERNL1oHTh",
  "key26": "2muy9QTamosWBHnHWfbfhTmLHZ8Yo4GZaxCXct7kL6tYZvS4b6jfPSZaCK48NySevqWTwSmum5tEdxxkLT73nQf8",
  "key27": "3BpGEpFULcfXoHqDFcUbHsHEuQeLPqEiuct2HQDcLMeT9FJ4pZNQjbE8Dr34uMw4xip4tkQmwrPyDsF43NJQwJmT",
  "key28": "5m3pTP5xFbq4FrXaG1ZCMVteZ5UyABzZZmheFmhLsz5kDCrLXMgcvicTxt7oWFggP3WyptG2kGneVEaro8GCBeoZ",
  "key29": "2GebsqQsW1gi6F7vg12rnQoJAficcun4hnvCUZUDmo8Mv6qwcW9hLQUYe4fzLTiT6Rv1wx8yFCvwT78bsYeAu745",
  "key30": "4umfRjLPVinJqucidMbmjVde4DFM9sMrHpkYMz3vKVS3gARBSozjruMUD5GNy3Ygim6CXngvEKkaWQCwVcnY1dAU",
  "key31": "45BK4A7R64icB7DcjKpBkBaTZSphyPkqQCBQYdU4GSPoxX7n3xCkWTnvAXHbZoeUSWSGA5HQdaHs2TwRjuaqAoFw",
  "key32": "M8xR3RfqRaDsrnGXHQkT6a4Sqx49M6GGAmYAvk7nJJB2iKhZWtLSJTDJm1Ktj1rR4bATJ1doTvLiDG9jqwxPuTG",
  "key33": "4aVq8jsAn7tsh7hR715c9xCZutAjTrHvXhzx2XDu2L9M9oQJgf1FJZGnag54rrbq2So9jC6WYrvWJZ3akziyrDJj",
  "key34": "4mL1okY6WBAtmyYPpnYVQJVvP2DUpxtS9VECuPf8S6b1GkpSsJx1H6EyChfz8p9eJhZ36tkL4P8AnDEo3rMmoddV",
  "key35": "3RRU96ZN9v59jsXAixwKJdyt4Vv1VhYfeFHXo1gkCyFDyxjQ4qUAnTb53tahFSDqyRdA8zJKaLqN7cVHMCSP6yZm"
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
