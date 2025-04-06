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
    "UwqYNSjcWEECQyy7mEWUurqPCfvYx8eQ3F54vsc7LNixBU9Ed9LXwYWJfwVE7GzUcUb8riE8ZH4uTVGrotJHQkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BgeNTNruTk2aQhMKE5BJQTY568knf8HMJ5HkuXvJKgGDe3d1JGgUeoVAGdxqCFHmAh2LLK7SABxTRJcdks8ynf5",
  "key1": "5RLSKeMEJ4ZDFXEBuMeFvYJRz1PGrZYJVSpCTEDERWvWxau46gwqUyBfEAKjeRbNT1iMAekwatNRMpisioQowm4",
  "key2": "T7yJFW8roeBj8HeYS2qCVqiZXkaUDzf8Zfui3oUFQ7vMeBwjjaotci3csMBGmxKDqSV6fkPsrc4RV4ouDF7QW7t",
  "key3": "R7VG8GTTs62Ektw8XsugbPCiqufbDxDGwrreBxKMXEXy92xn4HgAKKU4kVEBeTba8KgM1KBAZFFbJge4XMhr3jn",
  "key4": "5H8wLEF8qAJNck5HQNQYJehUD92d1rFq8529wciUChAaGmdS3gTH8chCfTLkqfRHGYwMPpdWkmsmPkdEErRuwvE8",
  "key5": "2L55k3oQXpbSsuchSCyMZ8xkCHMhVqwL9jsVPZKQbMdsBdCW19PRZTpVunxMKvh6k9L9ZTz4o2128ptNQW3p18wc",
  "key6": "3xnDuev8zkJhGuTufgUhEJesc5bDKMHeW2nn7trEYoJiuDGNzhY1SnjPLAmzaC9682eappZ6hbc8FD2mCNPdexyF",
  "key7": "6576gHUv4SCav1W4dDMyBVzkwxzv3w1adAvnqksqbB5RT4dugPmYvEch1rt3so3BzN2yDVNLLUoNSYPJAwnU5Ut4",
  "key8": "4ZgGKgMS2Tm55Fx1H3CXKcTeoK5CHBA39Nr1nuSqVCyEaGb4ncnXBwZadbyyNVdZgTU5jLMepLiDpvkXy9hnT8UK",
  "key9": "4rLLVco5sGmanaVwNbZAuAKxicLAN2ZSGHgxsikX4j5h2VRaRge8HChpJuzmAp8FVydW8wGCpiRMFmFXBfT8rMRc",
  "key10": "Jg4JWcjbfXn2EYz3BhdTsgpp8V1XZaa2ujh1sbTvDQ6LyunPpDdDdoL1EehGfntQxjLSfRsTGsVAAU2oMnYHWio",
  "key11": "3tVctxiaPPsk2rirACWNmk4i7LaQH5Qf6jCibupKCepnjWqtmKEgG5NgY6yUGZbwTqDvHAF54N57k1GKTPvVdu84",
  "key12": "57WV7jbA5qhyw5dyQp7i42YfyC7KovBVhhBsCaHuG6XKi9xs1LV6VpQVTpZXA6h1xRXPKEbF1wdUz4Y1u19tCLeK",
  "key13": "3F8CqLmgV9guEd7XxUzuj6o4hzhRWuzxde4ezpRUn31i6HFtdL9fM2Udu2HnSoJjUQXMTLyo9pUPwaGAsMg9keNR",
  "key14": "4UGjvZEU2wCk7k3uqjK14KYbVkyyJz9PJSREo3tHkpgjCCk6cwd34xch6gkKfiWnHPia51QEdKy51PUUcgn1cjy6",
  "key15": "5JEmZnPcUpPh3brJFiXsmFuB6JTDAJNHtEvSnmnc7xNPKkxGDKto5kYR9S65EZ7i97SJA1a9n4NTXQjz7WJVwtgS",
  "key16": "2g4tF6LqdGZSAVpZxNaQnKoPnqx6EVFujiXJ6WHNhXceuDnThYff43Ndfw6oG51fx9tUX5UUQwLD2dMgf2RrdVyb",
  "key17": "4Cj7EGMFFAqjqXPMkBu4rMQhiE9yiSSZ5wTUz3EBetG99u63ioK9oaaVXx76skrfWWQFJAmB3qkSLu1EpZ9WCnUH",
  "key18": "34TT4BP43DscNPdcx4Q35QHJsBkbFiZX26UJpPGJVdWowfkDX9dRfnCXnG24KGHZJcLAfL7Fbq2te1uqP9PBNeSF",
  "key19": "64SWo5ppuTAQ5KVmaXeExCJ4bjJhiT5AG5NsXehAGq4LUBbNPN1tsWt7P6cNVqPQbKQTvrkuAQd1Q2tjiiXVeid3",
  "key20": "5AYoSicBjTJ6cQNQnaPtjH4fAXTy6sq2mXMfocNM3aACj47XGcZtR8Qtp9aGZLSdt9A5uomkKzj55TopgnA25S4N",
  "key21": "2Cn64jNhRrEmJQRPboCWdud35A4DKZyY4N6DgUDTZintg6GW8xUH2jjAtsD5sdinsh9kGoEYBdw9H7ECuWDazU82",
  "key22": "43V826GQXX5cG6kj6iEWmLyC7GQhRV2Ek5uSg59QT6ZeMtvwdYNqzemG4RvuDy1TDk8P3eCCSsBsymV1x49C7AuV",
  "key23": "TFXXpetiG89Jyw2sbqmbe9AF78iKL2pVr5EYTYWcWDptYBHRidDqsSahhkeXkHPA62wyripqzKVCBcKj2EWFJRD",
  "key24": "5CzbErToFn5A8Z5ZjGZsGUs8mgYTqHxDAHnoSDQ2tUMjXpw7Rs4dHtHkttA6GVCdKh55ihyMfbxgz9jgHHv3BQb6",
  "key25": "4ZhMCdJKrK4BWtxHNqVPWYmPRV7vZAWsCyK4RG1mYQTheTwGXCLsXqoyJ6vqLZx8HwzmrfQmxPt1CCdS3gQVb1Zq",
  "key26": "2QoKx3tTM4JwyH4wxA93jiWPJffCoGXXtUz1hpK2NyiW7nYEBhwQuMfq46geRUhJ67wxxBv3MSfsyf1TTGSEdv1u",
  "key27": "3z1DpWohpW4JnyCF5pG3Zdzug7YDCEjzgUBz9tfebbmWiZFyVnvQXcKPp5NBssMHtKnr3g6YjKhMUiuCypGq9rZ",
  "key28": "FA6U7STBjS3vAom4km6ExGB9yTP5cBMD4yWUS8won6P1PmNqv4GPDQN8xKczAzThNNDre7yiL2b58rosFynqri4",
  "key29": "mLvPmLznd8icU9X1KietMxGior1e8ufmm5RmTG7dqzA9MS26EHfPqNSLuUJvcUUAdkAxxJCVJ2rVAqUfkimLZwf",
  "key30": "229w49d8iLwJS2RuAvKwGNWPKENsqwkuMj5oLLgDQJQqPC6rtJY7FqogPjSnVDBnLiYEB2UkFmpbnVwE4f8Ez1SP",
  "key31": "5ELNnoef78vPQc4bGHK2tu3QUAnHRRH1dbQ16skci9ZTZeR1ycfyccgKHYx2hDHbXqh1DaHGqw1KRiVAik3kSJ1g",
  "key32": "4wwkDR7Stc4xHtJMbtHbTwDXLywZs2iJoXcD3xzUCK6aJKCefy23ziZjEReUFkFdJPZKX5Vb9kdA3bCnnZ3rx4GH",
  "key33": "ciNjsvUUT1zr9v6nyjuXegeG2mRQkJVLgk1dk8oGoEfa1vafHwPg3XLXoQRMoJWQ8YMtoumm7qcBRipsgYfHhXx",
  "key34": "3SDbLJBFV4BK4RkD9td4s35Pt1njjifgyKHsdScpGv8bpF3Dy49o6oahtBCaUooHGQYRMdWwGda9Pp5dbwSvuRRE",
  "key35": "3cUU5BLs8hmDbHzcropeDK8BQMuStz8ykEZoAiApvcEuZfapmUPcKR5hfR9nXEuxVRAjF8y3RDrqe4jaSDTYvaxh",
  "key36": "5VLBTCGSJ2pqtAqrZnJ4YXcTUDDnL4oBCpCZPXCmjrKWscaJJCVvhg6rVxRBsoLzTigRHRq7uz5xyGBeomVWpduD",
  "key37": "j6SBRLMwRu36FwcQcKDqbDCKzHSJLx5bdWUPbU1XR5UXtRGPxYUos9DmzrgAGSJsf2tNXmb9E8Wjsyhibcyx84s"
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
