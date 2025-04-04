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
    "3QXxzeBnFAmFViZtJ3GgtK9gef6H222c85R4V4jRagpGLfvdLKCkY5TbHArepxtK7RoMQa8cWGypkmo2rUoybh8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FUh5jYxZ7ZqC29EkyiXbhRtdihAe6jKKJUnUEAhzK7hVXuQsA76YNdJHHGoXFiwAv9vVjffp7GEagV1SzEVxkx",
  "key1": "3cbak6K1SKvrm3a95xP1vnZM9QAnQRJoXQkY5ALFNRiainKbxahLa5tA7aCiLSCb1JYWmz56AbcxrvyZemRgfc8o",
  "key2": "5Knj66VpBZcUam8eeiGeoabfHWooCJi7fjAjTSbrL74iWZ88XajwtEYjz4UCp4pJ81aPqjeomT5gjJjDVCDhMxze",
  "key3": "2x3XyFzWpWLXDUDGzupWPq8zXhJR5rcd47VfYKE6D66nby7iNVb9wdZkZjVcsh3zA5y9WyLVeXsj3Yf6czykfPPW",
  "key4": "4GT9EcxmjzVctaYWjGv3fzN4DYUDtMyegGWAc732SiwDgnkma2CJu6aq6hjgEHu4fzsJA86ej933L3YLBnJ124nD",
  "key5": "2tP1QjKEyN3P4cYWNci52dScFoxosiJ6zh3htuDWYR8m4tkEWbbmapCDyEYrRr7z5Qi4XnfxTptmZATG7qDksLR3",
  "key6": "41Kdx9oWoz2f2qDghaBxXduJrYoMKtfVdbZXkuTRxsnA1sRGNaT1rowDhDnC5j6TxEyDWJNxShwDWDXk9WF8DZfF",
  "key7": "5tqiVCDSGNmhfb8F9pRTR29tE9xNDpNumk8CbH2UnhiRBvkC6Q84zawfgPH9jDWfgPguy6RCrNUk24QqG92Xqm2T",
  "key8": "5o5fB2pFxL6Y5MmVpApx4dV2LKKRXQ3r1uWyBTcuoTz45Hy8N4jHd8ZuEESVxP82i8wtv7XEGakDyTwoLrEy1ppS",
  "key9": "5hp9Qpvzm5yGgb8d3dMK4LnC77HEwiPXaeZxU5adtABWddWDoeRt2bhThqTeU3b3gFGyJapajUZtqxoGXkZzD3Vc",
  "key10": "a1dbv43VcAh57MN16kkS77NbbRx11p1LoNs1L1ngS1RbGbqF2eHtjdM8PULZNmBoiYtHNszvYRuvuCPeNUPghP1",
  "key11": "CXMtePDF7ET2pE8oFV69Kc8M2bZ8HtmHRbkAYuCvNDgdo3TBbtXqWX7zfzy2HWGcnGKp6iP79518iQTx81FVNpt",
  "key12": "S4DV27GbxEoDsAVm5WtoqfzuhseXhEzUwNw9CKWK7CausrU5iRetJpssR6BNx3K5pP1M44buevVBbWiLQUsRC4c",
  "key13": "4MjxaVA5Sef6KHLDzjSpitZhmyfjKAT4vZ8rWCM9XgoKoUyPpTefWrkY7dEVmK362dz6awUjLQqS2ZVNcYgypPYY",
  "key14": "5RCyXRnipywPKEJ4ztt1KhzL6m7sSqCn2LbeR8ajuzvUnM7XwcBgwYtncwF4a4H8QdaWzLQidW2qM2R2i2Kz3xze",
  "key15": "2xsFMKRsdkGG1DiQpzjbjb1gbGPrDB9ZjnbwEJ29Smmd8S7FzDpN22FMzxKKLAZw69b4RMqxrkBn5VQpZnx7NBb2",
  "key16": "2Z9Aa1E5ed8pPtJw2PR7PN7i9xRTfxBjAtDxu6Uvi7CMgLdaWfXH5PM2J9J8xJbA399DGtE8PpLnE56yn3DSiTxU",
  "key17": "4kLvaqjjcMpwEPx91qXo88Wgy9KmjhRX6P1b1YkmG9567yVdY7JNTsqswELCorTwZakFPTRbx6nXD5YjWaxg5z4q",
  "key18": "62FfxnLmd72WsPnjecPCpVXVMBLyUjUj6EvhYfZp9E3pcAztnwMkeagvC6ufWM1uDDWeteYEDm1G1G59e6vueXR1",
  "key19": "4cy5nGTqTrDMNm6WfQzXBbwvH7cfNLsxarBfGPb9NCEr3DmAwxqQ9JDu2zpz932rVUFTnTW3vzXMst8gyxiiziUF",
  "key20": "2LWeaqUeTg78C37eFLGkSHP63Rff9qh9B9TyYcQ1R3Y8N8gqivfPG5WNFVdCRmX74LjPZ3A79Yaea3zuozF5N8ci",
  "key21": "LiFXyAKCigJ6THu8ebJhnn7tKB3XLhYQMEEM5hDa64ytLZmmRzk4DnPVrNqHPikVMwTs9huM8uuSu7gDvJG6ZMN",
  "key22": "243Uz7npAsMNuPmdZEzyySLzCjMt7Y9HYLaVs6hLf4Tzsoii7uXDikBB2ZXnF8EJCqxANPimxzfvMYon8CvVX2np",
  "key23": "5xHksby8imJKe7NE4aqzRVBJ7zm2iPAewqPzqzeJP1dNJFyrpAvQ55uU34jN4441mbfWdwFTK3duTFoUaxf2QDpC",
  "key24": "UhPfehnTnEcBfparxw1ga8oUestPdDuAn55z9jCHeDXS5R6QbTZdq98xSjtUMwQAZJkctDuPP5nMEE6KNTWcm93",
  "key25": "43r4wLvtkBPJ5pmQsx3sJZNJxWJdQiCKG7xxjsd6uXfurWGdDbx9Z2rrLfodFTQ5pB9Qwr1vrx4BbJGXzzVr6rGX",
  "key26": "4FNHX7jrZYBRn27bq14Dn16Y3Q6xUJnn4ksk7KmnwMG6AbbDEaW3Hf7sbCATvWvrbeRLsGWELFYEDRyomohhzmcu",
  "key27": "HDiSA56w4n4WjuSLdv7DqtRziDoN3khRPTnGQG6vciWpARhkh3vgygCzA8KNTfJkVEkh15sTXnYkyNPqDdnAHTR",
  "key28": "5pDmRn7jQCK94h5gadMbESVRggKFjoj3EibfnJy4Z8mC561eyoYrNoZs7p6wmeZ6nBRuEA7STUQGEoaDX4EobYnX",
  "key29": "52DVPdfJdTn5thHBW2ZvQTFKhecPUyQrQyWxH4FJBzF3KSw1LECrazqx24dnJsmn5tKUHkCgdykxsamdRkjhcHZV",
  "key30": "2qNcSnP8EbpxfbdvDp39XhRZwfoJPH12gvpELYFKbZLwzoqDpzpYV8DdusNmDz2BVMsdM2xLz3J9hyV6JjcAfb1q",
  "key31": "4afPaAEb5Px3sicVL3JPzm6sRMj8rY7LitVvUsQxZdn3BV1ZBwCBgJGy3Vaayv3cpc5q7MTtvumNJ29pAgzwvThm",
  "key32": "SPW3svAGK3thC6XjBdU3uTJAcfPQBBJkTQ4mq1HDFUpnkgttT8aw7j4RsRTFkb84ujBQ2PPzNG2SsmtXwpa3rnx",
  "key33": "oYFFWaXHpGXkyRqgMsCqMxA8nBho3vdb7LBYkLNGvvDYzAt5HfyaCrKfm6vetUSYQe6g4ap14ZYftWj19umSj9E",
  "key34": "5Bso5F5YwC1CMMe58pvPCNMHjor7tn1XJx4xRS4bhjwMPKRMoRkKZBS4dbJqmagrU5nhMwZHspYP1DiTFi4tYknJ",
  "key35": "3bEDwvrfEdUGAi6BQbiqsU8YNpRXtWyjuj3aUzCgRMzX55hySuV3q8DSqGE1ZDb9QeaUViwCJMjSA5dP8M9cLV7S",
  "key36": "33coCvSX5y439FBYZdbxmXFMXG6zSykYB8Yb9df1H1kWgYqUruJeWwyZRTPJE4kMpTGp2qAKrcDFSbSwbyr5bWky",
  "key37": "c6FkG1Z24ZQ5nYChPL5RZ955byruGNsvpbHv4hVuoGYJQknZq2jKNoWC7KHo1tZP4t81SDcd9M1n1mKGXxaV4o2",
  "key38": "3gkipZHJps7FqE8ZZyCcdYcQv4Dr3dP4jWiPkte9iH7XwjWSkq1F82diEVwUpG4Q2dZBPLiE7y81cxvHCeN42Nzt",
  "key39": "5674EVDqmzfcbQ6mcskZuqVq9xgzb3VFvtZbUfYMw3twe2S989VEefohJnAZqx7NwYPdc8ZfoukkPdu1FJ556Jgp",
  "key40": "4ndjLASAvCehMLLBgo8FMG1hw2VuZJgof4nrHHkzjFzv1pcaqwVzF5vun39VHScWyS648ECgHD2aabqQ1cBWomEZ",
  "key41": "WGrtxyLLdpJTeQoKyqYxwjSSUHv2mAiCqW3XUCrmd5itoybfPyy6puT6zsGB7tjQe3KDbQcgwCRmLmu3hcYSDJz",
  "key42": "5zABho4L3jyVk8usWjcvzu9QLt6BqpZvmz9LgHnAvsTgygiCf4VSesxXTbnE4D3ZPbT9ViE6DrnYuarE5oano5WE",
  "key43": "4TCxMzZe4Vc1GY2M6UQJuWNuU3ayvAXPhgS2JUNfCFGn6HXHqZUpcU48muTp9U2cnuQxodQaEkaWsri77KEjyRNh",
  "key44": "5Wow4xnJucQtF4Hnd7gGZdK6GEq4zATHL5yUuM5fHPsuaT9TvbkevmigxV9hUD4GmT1ScyGZbjZdG9zErhcgYnUA",
  "key45": "3m9gLvaEWsNsnprRBHw89a3vvPJEpDRSG2DfMxysai2acZQtnvRdJvan3yZRchMNNZ1KJJBde3B44ncAExfNxWhz"
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
