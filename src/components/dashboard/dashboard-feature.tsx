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
    "5UHZPqt36PuaUSyghXhGPRQQSzn4sThvaFbhwEAESwLoHPY8rE9XX5jddxeKeP29AJMZEdbu5qt52FDJNTduHhFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfDoo5WjmxsR7oytmrcbNS1ZzwXg3yS7uFnCTSSo5MAUFUd5YjNZvST2BVSYmLDA5JZuTyXJiqMY5BAhAmL7Kss",
  "key1": "3ZxeTWNakHnnPBySB26UdEBHCc9AVWHEEZ59YXVmvp7k5SiV8UBMYrT4WMWjJmjYT5FNfUkPbBArv8ZanBjbMNZ1",
  "key2": "2XRrpaJhjjerWpHswZdSUGK5wN1vQER8sDNEEvDEsKv5HKzbBx5Dk9cmJgzRczc3GiXe1WmsG5ZKzZfHuYCdpi4J",
  "key3": "5oBp2RgBVbbm1sqCaRNa8W4CiCSR4F4gBiJzRUVMwDDRNWt2nWSDkfgmx6yMg9dg8ZZsspvdfKXsk64mNjQaQnnB",
  "key4": "4pU6ChRssLGraxSoBoqU9iCTaRX4g8pnKunM25GYusWWQoGkE5VAUKAahBgNeaFJfgKBoeF7j5KzpiTSR8AkAmW",
  "key5": "3ExoVsZCoXmqBfvnRdUrMnfKwHxZAf1YJH45hY73y9Bvm9JuYHcrU75bFXXw5jx9qvtT74Qzgk78BY62piu6zUwh",
  "key6": "5FrcEpEdYbiBSwtim3EuYGAbmQrqULt8jMcHbANGN6CD4at4hut74eCEPgTDb9KKy3jmH5NhZaWP4bEMzGowocf9",
  "key7": "2h9f5D687rrM4JukTf1Z9jhdmiugTdtzwTKV18utXmCcCNM6pECACUpA8GKW5shsMcvQZBJWnqUz23eqeKJE3sGh",
  "key8": "4ZdUstMSnsipfDxpzGMDR8DRRQ68tYh3vRtmAHDeUPtUs2w6TYitcqT2zpxiV1SUxr6zQ7Kt7t5mjYf5tAHwFyaS",
  "key9": "5RQ1aoTU2euZNoMz9jCaiYUhdnZEjkWx4aA3XCXVkgWynWbTtjXZUnNLfBHriF5t9WSbZV7RHuBq6yfoNNq3gKP6",
  "key10": "2Rt8hGJpSx9XLtG8zuNkq89z5Sbkf5k3tiQNm42xg1tUR13ucSvd383Xc3f1nKJQV8h9RxqXsHcrUYBvNjvUpisG",
  "key11": "485sWmYwTQdedk7Yeq7WRjqx3xbZNtZF8d3xV28vbFaykmBmCnxwou2uzKX4mh1n8psWsLz6osRgJXHx3FnPQ7gr",
  "key12": "5yenxgjZZHQAW7JxreS4W7YCtSiDrwW1H4a9WxbZXtsTgxVJLdUuNcQg32KoyNhpQdzMv6UMZz21oSTBJywSje5h",
  "key13": "45TYZyHBFQfk5YeMJ2xYcwVREjSKvoAjVh2yf4M2ouRE8xpoBLAtk9HUhoZETEcSqQNfLbCFyTSWcZ3TaA2K2Hmu",
  "key14": "1fU8YZ8MyrozA4NM3bj4XJf798M43mrHeBwW6KhHBcuv5JevFsvuCpS8QVijyVqZtYWpKLZFy5a4t6SmjgY3ko9",
  "key15": "4dpLo7BVnbH4gCBpESRpyfcBUfmbe57ojscvnoC4faqYTCFRBfHYzJyXvhbfsSn5bNmRCEJUnbmnDoKcxeettD99",
  "key16": "K6dP6rC813FtQWvNQ638uEcPQ2FVKQpGxDeWWXgMNpVNrxeMeJshcVRiFcJbJM4ghz4jdo9NZNhcmfaw8taEgWE",
  "key17": "LyfeXvjyydCaNqxLSDeznnA9xra5a2tQpPdFzYEbN8rVPWsqwSRKeQ4LY1xFpZnxF8v8Xo9vRXjxjSoc76tUSnV",
  "key18": "3L5myeiUQSd4zgXAciTwkpEgqyrQ6MAFRGs4VQPShazqYVngHKTFFZ4V983y1ZZ4ST3UEdhNxPeAKpHtRLZuNmLJ",
  "key19": "5syfrt8fEThwjfHQfvGg6ASLBZ6CLP6ngqnGDA5HhsY3KgdhbBjUBj22272gMaWxLb17eLq9oSbk7bs6PGHrm8Qg",
  "key20": "wQg7UrbdJbhgJF3XVmgU7ze9wv7J7JJm6M4U1Hrae16vbFPDeiWmSCq1VDaW7SDxYyqeZm5j48mNMW2EVdSz5Pk",
  "key21": "3XPonzEHePAmymqTyLdJNPm9UmKUQftz1m1mFiCkf7jgTUVL9mc7YQxzk92i6vtcZtbnqsY9AiKfoZctEdXsriYu",
  "key22": "5TAsofLw7wmUTFJFrmiR55vRitNLfo9QrR7oHH49MVUejPXEy9B4uXbH1BnissnzfhZ9MTyLnWQmpZb23G2AQF8R",
  "key23": "HppjSENSphU6UVRiXr4wHtBTbkaqcrU9wTXfog6ptvYFKc7gBpoMMtrbHXRnJUoFmR7S9hfae4Pn6NuwsirNJpY",
  "key24": "3otCL6qH3FRXDEHQqxK1UDZRQyddKz5Q9xsfFmtSih7SvFoE4sTBfmJ6qngxVmwEetXSL3PgSUQuYaz3tcXg4ncS",
  "key25": "4ntJBQjJ7eySBNBLRm1DvUYBxXN6mKNvJSDH8GkTY2iUhYjWVr9cdNHWKqToFTgMPmqp2V6UeyEx1SVfotSXHaa2",
  "key26": "2JbT76xKhwU5ykB6PdNVZDiC6ZfUq1Da6iBk1Vt948rULSXSCEgmWRRHecHnSEGEuLhKHNLcnB6BMRXX3mQHwiKA",
  "key27": "4jqFBdgxGzdaBorWv1W2sDuEivDM7N7UPzwjtAgcjtAaYBt7AGDm9LWn9oSEiQdwR3EiAbgWVt3ZXX6VNrwJEgae",
  "key28": "keALxtUFEi5La5JkqpJcQgsysga9a3rHVQCxi3TzuFiH7admVqvceRYupKePezYKEnjbYwDQz6uFhiLp83AzKjb"
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
