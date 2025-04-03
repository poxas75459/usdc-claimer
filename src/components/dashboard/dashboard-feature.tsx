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
    "3dBmZFAQwbRHg53tqxPmecsdfj36qkz1aS8HzP3CMTjqw1bTjqbzTvW2uth5EnY7uTUGdYKWLM8PMwAPi3muhwG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ozuZSpD6iu7KXcug4Fmt4JTifZnNaPcrZ4xi2aTZmnnvR7jQh7LSdr2M9HBiLTPzXuMrT3HwTwGTra3rbutWCcL",
  "key1": "5KHxM2tVaTqrKQiBoPKyQqYk2WpSokTyV6cQP1K6DHYLKCe9PnUK6S5iPFYifxD788VZQ3qpYsYLxVohXXF4JpED",
  "key2": "448WzhtYbDfXyuBdcv1hwxvDPLeoJS43KyEMyrnu5kPfeb7GHTYGcpiFLQY866syCAUUL51kRoCo8gVj8FgXBqNF",
  "key3": "5EQ6unhwoGRsfWA7J48hV4DWsshfd9oLhiNmuVbi3psKpc5ozeLqXH3L6Knw5dK7Sj2R5hjn1VnpyMsu4aix7wKn",
  "key4": "577bvrgEYq2V8JdEAwo2md6UzBEay11Xqhnnc37YY7BkgpdMnrnBYDZrumKmFzHGkpEaXfPc6yccATe7CA2vVVyS",
  "key5": "4uX9Xd52pDGDkBck8znXSkvEuwqY4VreGbG6BZipGnGjVgT2nkFmSexKTTHQxBKnvD3Hisme1JBrribnuVhQXV2M",
  "key6": "3CBK65YFCF2rm26sJnfkCrUtg3ipgYGHtsA69jB5cRXb2RTpyVqyjKDrMCjxdUpAc3wW95HZspZ3bG78DEt7NCeg",
  "key7": "2s23gNdr9W8NTchtiBCKhZmzzGurAxbJgXtERPg4rNfDXAW8r1LgH15BjLmktNEDcx7GBJAB9S8Xs4i5UQC9TS8H",
  "key8": "5mTaUKchrr2b62GNS938x49zthAr3c6uPRF6ESXKMRya4N8y38nLnrgSTWvJnPaX7SjMQzyLUx6GHr2mRFBSxMnN",
  "key9": "S2UPz1TxauLBfpZCYjUDTDdSLmfbcY33hWP3uV85pEnEwKKz7bSM2MyLuonzX8Xgi467Dej8TEc2Bc3xUfieoG1",
  "key10": "55ts5qsKfpALruCNi7YVhUf9EWa7H6MwgtYCccU86o2HmNSqE45kkHZgeGYaceF7gEEN72BUkTTQ4R9Vq4HAKffM",
  "key11": "534tBQr6MsBsCK7HTeqDTWfSHovaY8o3P2GAiMuwh33Q4tNbKJNRzsEJRtzApFnPUp4pVkvMB4FsPtmLb5iTyKLH",
  "key12": "5QyJ693qWRT6VMVHw5GBH5MQwqKcpTqcbq7hNCvrnrWoGkDGpacHXrUL51qF3i9fgGDWWCuGewycKBGXCnfrmC7J",
  "key13": "36394yv4DanXA2Z6VKCd1PeksVcZXxck4fQwjKRxQb2kciSjzt39GoMuFdWkzQiNPoHAWZXLy3qa8pdxcdNtUM2E",
  "key14": "5Uz8bAsJkiS7P9p5tvjBfEAaPzHXcEYgx6wwKsYhFiUV8azaWPiCa564Weiko3svxwwR9LzLSZoVMDaURWZ5LFmp",
  "key15": "ugTZShH5MBUuvpQu82oGsKFvyQH22wiYx5XVZz86vZ7jrPkDqZME3mhDu5jVZjh6y5GdzTN3Yq7SHwskigsYQY8",
  "key16": "uR9JJnvB6DHPSUC3XuR8yTATW9wtLpY6TZrL2WVag39LDDaHn5xYEhD96FhnDaojabKiddGGYocvXBSF8n3hWpP",
  "key17": "5s3EvnL9fUtpJgD8QeqkdDTH5AiL582V8W2G9ihpS8B19CMMQXXNr9zGH85zkqqMzq6motUK5GSrm5tCLUZNXrjq",
  "key18": "4kf77J71idD21VoUGAot1JXh8Hm4dDReDzvvhVshLbAzySWfy52AQ1A29555ADnH2thkE27EDHcSXN6DncokbwUE",
  "key19": "39zgsBZxKAe5mDJbd1ecvt8F5tm7D1UXiZofwYqN9erxv8Tt3CWUhwkfMPmxMxKc3ct6WCDiM3Tb1b4zJXTJZneZ",
  "key20": "2MebFWJZBj5ZUX2X6wKeE71WtjR3gvorZWKhYH5wks6BzBEmbD5BD87fK68MwT6sGW5qZAmBwhqj7gwQfjUnDRYY",
  "key21": "3z5hFbRQ39XsHsoVk9K87r43vyYqGh7Mdhc8s3LJtcXgBso4yM179EY8yU6HdyAgij52f1Fc1HFpYieRCFPsgrjQ",
  "key22": "25Et8xrwWTMaKaxhjbG8mKjoRo2UrrbTCXBGn3RiM9BDuE6ZGxbuPR5RSFBmwoyJK2VGF66kcGLjo1myZpwknWXU",
  "key23": "61Fxe2AQMwKxD6t7LgwpmBAg9kju5bZEd3wEyPJmvu4dXTjKdU4EeK6xwLxeVPdkfsDoQoP6UyinQPnJ6UbvJMMq",
  "key24": "3GBexmZyGRXUJ3LLx1d7bVg3PsvqjJDzeiXi4nK1LeypsZXSmNy2EZ9Di1K2942P7EmS5Pie7iWzK5qCa1zXjGE4",
  "key25": "4dNa4673uK6iWSH96Ga9h4QLMCREfuNPLAE7GEjKx3ttpDSHm9QZSa4E1McrrbsjufHzj1cug1mk8YgAUVwtNDzS",
  "key26": "4KDRpq5EVKcfx4sasjRme3WggypYT3YajC4341LpSBoiGbTyEk6fVnZf8CfGfSdxRf87kzUfH4Ugs1MEBwQz7dL1",
  "key27": "4AaXWf85aq3cNd5VhRa4z97r9znJVqaA5EUXUZVQ8Wpm5piEGFx3WtJUjCvHuA2n3NsGAj6Ty9CTqe97oqo7BHue",
  "key28": "3s5p4Zn5JVwsB2v4sKw9S36DwJ3KD6tVrv9PCH7HYsittMzJUu35bxURpEJ4EAyUDZ3LQq1Uq77Gi59JSvCQraHt",
  "key29": "5wT3TuPWR7yTFetbdV9A23sQHxph92DbodommCUKgRmcQpe6gHe69pEm24MzW3TtzKZnaF6tdYj5sEDHrEeUoien",
  "key30": "3XMzWCVcyVBtHTwzrzkDunjak7MYjrXSa4tcKWZ6dpoTLki7xKKkCaVA9ARW6ykYVU2bcpJPXPCVTuDWZmkYuCop",
  "key31": "5iuCX8tr4kDjUNpqfRrPy5K7Pt3y6CrnNE57bEcFhKXRjCG1CSu7ujuzuxwbPndNswYLuXNehvT6eCxnke4VVWXR",
  "key32": "3pLodeqCCEKE7dGu1q6eLsbMAV3Pe97PUTkgLqPiufGowbHncNmmowvxNz7JZ6ZgWK3vNhJaBwATC8jVxi4QxtFo",
  "key33": "3X6UnSCxFLJTbuXmKTHPWKXfCCuCDmM4MXfie1eJqzAm4Z1tTbABEYjfF8mbG2AF5FvQArnfHUotkEq3fawvQ2m3",
  "key34": "3cPpRFDDKeJszpvH1WGmRAg43gfcew3s9NpsWdq1cbxjXSNXA8qDU8eSGCcWmKX8vYxa2UmzkQMvcHAugrkdBWwi"
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
