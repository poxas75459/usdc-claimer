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
    "4PzpceWZUfMYE8VkFh6nUxDUk2e21zdFoBgo1EauxNp2nMrDkxgpH6H7z45t3farW3SsHew6iP5SF7PDZq64ZLJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4jXscM58XmjyLi3cTEBeth7XqEZ7mDoFbbk8Gy6qnUCBcxfWftRfDPk7TKP1imuwfctiT3JVYLhQdqatayGTAP",
  "key1": "2XKKAbtRtY3efDJBHoHikXyqAzNc9xXysuoVuVaS5qAQuuZCwGW3gScovHGKdYLz8xtaAGimD2kq1AgrKkgSee8n",
  "key2": "3rGVCgMziwhoeBHg9CHx4Enkv6YMhYM1GHd1YpQKpqSGCrBbFh6VgvTbtfHGRmt1jKHdeXAyXx5XZF78z3q9aFAH",
  "key3": "5tAGhJoMM2zS2WDbc97wPtoo7Ne3ae3J6ZzvHPDdtHi3KsLm5hCHGNq7XUMtuoSjGUQTVXGotvK5qy4fhGSiV6f",
  "key4": "2toi8vVoJXX3kkRTXt2gvTKrs4U5zVkwgVSD35QnQ67ohUJ1wwLqihnXm8G2PmhzQS1fEy9PBo7tvzzLs29fcVDw",
  "key5": "4vvwdscSc8RiVJgrRCBrMeYAC5xjqhaf2TJ3GKWu6YVBkfFVVCHhqMdC6UZdgsimBCB8GWswGpRdoXqHPC7PTU1q",
  "key6": "5HBKMZ8AJ1M4zCQ2bRszu9LfCfBgRFwJo2eqKjsxcwAzRwB98Yqw13GBv5eWvs48YK7vKKKmq7jY4kRq9Qdh2jXu",
  "key7": "4TgFoVVCJ3CAF4cSSguUJFi1HntHX4qyEvaueVd6WS93kvpQnrV2xygrWTWBe7PPttXkN5qyeCwMhiXK2nRTQL2N",
  "key8": "3R53P4MmrrnfBSmdz2LPEY7tHNW1HCBf1rPJYdzH9aBUFX4Lm5BnBCxSbHcjtZHkJUUm1DSfGxxLafUpzAnBTutX",
  "key9": "WjGdjX4kiAm3UpyC3fgNPy5M3xi3eLiwLMHH9rRS6JUKqzTK5LLiG2BBTxnTm2XLFSDaG6WeN6dFe1rTHztoudJ",
  "key10": "2oipDBqdZBF7tUkM7dxt6Nu2K8mmn4tDCk7zBFAAznL7RUfQrJYNG1U1c7w4wGHq7KtQd2J8od2TvxtBTNJDcLNG",
  "key11": "Ne4bNtKpoB1MCxSYhf8tVXv4fYUj6GqMy4WNV7mXFU9z3st8UZYFTbkw2ypfGE5cobj2AqamDbqSfdrdh3bys8r",
  "key12": "2QgZpRbCGFpZivWUaUKRA92VVNyedKLsVi9LpSxmw2i5rpb8g1ot9Ky3bZue8vMVcHvawwpuS4eNcPuqzqhdbDBM",
  "key13": "2t1h57sYfdjUdYjs31AKBfgi8oP7ezkueAJfsuYpwqRBmXGR7cVaDjHmLFB8cfNod5hWrYLAuyg72VRJ1VbdiAJc",
  "key14": "3cbFV9QrhQCiBKVJhbiHeNJJev7haD5vegZe6FkPib5R3HzC4tg16vdnAZzGRMN1gPSNvuqhfmTSCkh9Y72H5qCz",
  "key15": "2chHzmGTtfADEoZ2Nr5rLaDNDA5nsV9PAR5UP9u1tT4REndT3R9LttEqooTc8LDP59LD2MTWZZphRLu8WctCFgQ",
  "key16": "2mkdt7q8bmpAU7VeUQZAY7uZ565BZc8X3CbpKDqvDcNBg6RumGZJKZWBn3iZ9vr6tSNA81BVef4DvLeAnuZ6zRPr",
  "key17": "2RjJeYo1FpSafUWGuVLEYAiSHzRjXB5isapCkDKTZJfvSPKmeo92oPTuUjm1qVGVwEiB36x52vAPb2u74xUzhMs8",
  "key18": "MYLqckv6jku9xv6Qu9FsDsadtyk2Rj26tBv1YMhcNvW3skPnhFBPJQ91xu51deZfHrhQcPJCQC1gf7Px44eSHnH",
  "key19": "CkNK3enqVSbraWCumEnVXVYHhfTTePC3EfBuatFLqgbPQdqfRzNqnHgH6Z83MnR34TJvKkezPDvaV7RsmQQz4Be",
  "key20": "42hBLWsd5w2wjozHgiJDibzDpdiT3qBkgzTqCYV98GkVbKjFhYm2UX6mmQGYdEKUp13MmimBXA9X11bZiHhQ88cG",
  "key21": "3WV7VZ4P4hRAU5v4v94s8wKXfud6dBgjgTgcZCE8kXKd2YxspEVAGRqmpjxuvQvRso24NRXrsaaNqSBRF6SH58oq",
  "key22": "2sBdFjZRhfTGXhy45QUPjXV6jsKfnVrvZt972LYTJKCWgfqTo8m9rNT2RHHoV88q7bYoDNi5ZuvKxyiQ6PKCfxau",
  "key23": "3RospKiSB2NnUabuvQsyjfeC1rqG6bQGrrFkTC4f6H1CyP321ZoJy6jPWUzBvkA9NSoGhdGUEShvknCBjcPhs5Xr",
  "key24": "4AcURzufhdtWAYGCjtvdQQoJRGxGak4W7gtoZxY472fYusLAQ4TMKyhUiyVjN712iznARdLQEuSUYxfFEKRBsrvy",
  "key25": "4bT4xst9RScfUpDhz6bv5gt6dNGTfZpfXuTTKv3njemBYcS5zWMMLs9XAAKtQ2SFxP4PSN6YPQ2cePmjntZZTFTn",
  "key26": "8fFYA4b5D5FVdw4tFw5fuER1T5M2aceBhzrxbzDrmgpF8xy7Lf8NzeyzwmSqPisUuRd17PFd1P2BrXAiM54mn84",
  "key27": "2u5kMmqUziSocYG9eqJN5Fa789TrkJonTr8ESMHaKEBJG6qsTHZvzYM6q1KVjg8kBFceJPDVJAbGu1eNtPDods8P",
  "key28": "5XSD2fuFcHyMVEuAPsCe7JUyg5tzs7xLqh8jo3SkPhT8bntzh8MVbxP3pHim7y8G26j5LwBziDTrcZ6CkccCM8fV",
  "key29": "2E8MRuX8Jb5Bo3anAu6kvBdFvJfassEpRWpttdF8XXwkqoSqatG6SCZfy8gqwq3qfQEvEu6AmGuTZLWErgRhgpWw",
  "key30": "sTGTRBFRJJcSjN93DrYSuGpfLdWESBH4xNTwi9sbsZfe9zPsa2njmyPdrjy1Kit4DubcKfJd99bpv5dXmzZ2eub",
  "key31": "4Y6Z2gxegK6cGpDcd43RQC1iHUcLTgcfUqgd2kvWq1e8WGz3NdXrHZ7qTj3HqnefyGpZnD31q8yo51Mji4VXJWUQ",
  "key32": "5Ji4aHfKwdgfzoSiwoAnByVF83zUjwWDvESFauVtX76B7EHpvM8w71FS2BiYF3urPzchkRaj4vStyKxu5W3yvKKa"
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
