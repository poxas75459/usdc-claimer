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
    "2PCbnR8Bxhgw2KuxAFMS8ZBD6N1MFc7ZYnunTzXt4vfAXEfALkB3PkSRdS1Li2k2Ccgn9T4zVTfkpeNzvYQ1BLsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d3XZ4ysPruuKziU8BycBkPe3npk1FtjUwNrhqr914xVgPZTCnJdjybqF5pKgLew6GzD3toBApFjXXpckhnrHRUa",
  "key1": "4N3ugNMhBoP4rfonxgVNwkh1kqNAwiEzn8sfb9sF6uR2ipY7L7yfrJypn9rNk6uHsBVtxavsu9Huk51wfR1bs1Bv",
  "key2": "hH4zS1WtH8KWphKo23RhioDM6y2LN77xJAaiNuZopsAJbAdDNwfxRCpGeDiTn8YyP7K5LwoVMqQ5WtaCuHRHheP",
  "key3": "2wDSs4bfxe9dmbDr1Eb8cG7sJYjCtVvsdvY4Zi1tWfcnbU6pzojB7QFKuQgyPiTDWuLVkrkL1qjyhqSjwPQPiXxB",
  "key4": "5mt1vsgE5z2EwjiJYPXmeDhJTJZpLMQbXfgttgwKgoTYw5SrKa9wHWP1HVfAW8NM4NdYCJadq52YtvMZbYwJVBJk",
  "key5": "49cSNKeQwtpMYWQb3v2YASBvjp63ZkNpM8R7qhmfYHos1QY2j98EsBwxPmpUn4FAZLbQTsehvVPvkkRNZsea5Wpv",
  "key6": "52XGvWLrE6TFcqv7gRC4PJVAJwGYy1x1Tvhuwe3fxwu5qgUTDqV5w9mf9xkdDA9BnKLi17mPtUtEudcDGvN61QqH",
  "key7": "5NTedwthp8osS5Q5aphxSadsauM33Q8gRvco6ygLmceXgNiWt1zsfMizNnAhGGwszoiSXVzdYmdsugwDxQmbW61F",
  "key8": "awhqG8SfbebWoHd3ivwc9Dije39Hwj12xzuguFwkFQTTXe5ovvohEvMaiSmPTLgabrsGpaGRSaCs4FyqZwaGRoB",
  "key9": "5nNigCLpKP1anyyBYHpP1ckNupSsttsQrbkQDZS27UENXCPoqXJHZzPEVMPrm6es5CAYu4mK4F2Yy5YGmXiuKhgx",
  "key10": "53uTRArtewjnem7ZoezQB3gfr2sPnYMeEfLPNW8wdqbpiXaBt1G5rje2YVPaUsgm47cTNbtMTsGdpSmjwd56qD6V",
  "key11": "67U25mAFNMHoRMkLNvCYM7GSPH7kQAV81robeycwmEV4HeYmKMrd8YSCj66o6ok2AtNzZHWt9QW9u7S2RHkQTKo8",
  "key12": "55NtX29e4A4WsWTazScpYyEGjEPodyd2ozBDGxHbLrzEQVFbYjAHtck6iXUkd2kbni1RcN2LAWVNAvWUPe8FeQw9",
  "key13": "SD95ucdtDGTK77aq5AQAovGJns2JprXbJ4uvGVt6srnrJPCcNSvLLCievoz3RhM49GUbPWY7fVbL2uFCDdZzNJk",
  "key14": "5gwtMTa5dL8Vv1HgxueUH8HVAM7LaMqUx5cUdMdgUDCnRmbP99Se28kGvhdo1p3DonouF5zWmmiLFdY8owZ7Q35a",
  "key15": "5A417yi7fDBYDLTwfY2pTEXaznE7tRdn4sndFEXJQ1iwdbSUsB5obmmevsQCYrAHN96Wq4xbjYUvSBp5sZ3tPen5",
  "key16": "39ZvNxEWLC42ktn58kF58MXqETZKjZcYnyRkFPxKSdU9n4Vt5wie2p4XbNTWk2L6ziQo2XcXr5ta6RdnffPVNWU1",
  "key17": "3sHws7zjSPbcTqRPgMDZrcspwdiAVPNY749KrUjHMUZNagJiW57DZf8hxXLgmFry1BgyavixxMTvfxs273poga9L",
  "key18": "8AUeFniNfixnVwTkNARnoRzucCz9o5RUb4LUaxLe54Mdrpb6kav7XhF2kQvAQrR2DDsAVzYLg8Ngq6NPXcaQ4bd",
  "key19": "4zGqPbchmW29zReNujDybESTCXVBa1NbK4HTmxb69zuFJ8RoxbrqsxVYC53KuGtdzzF1w4tN89PUGG8nHXZnCBGt",
  "key20": "3PanpSs3RbUWsjVDHrXHMgnaAsG3NcVESUnzno1sq5X6FvEw1M98m1dGW5s2JAAcrrWAKWnfZ6bALBqbLpEWaYbk",
  "key21": "3gYrNUc7Emkj7o8cq2LMhAdoosSfSHwf3mxnKd5UUs1XPKNSaPoiMwnq6TZ7CKGyH9djtbMUeJcvFaMpsbP3Sm9d",
  "key22": "5QhvZFoJUYigxrNKdTqGMTCS4goby5uM4xLsV3si5LAYvjLsZuvwQMZvkkMTLKZDZwEvsGg3z8WB6aP1j7DDcV15",
  "key23": "4NoxRgmy3efSDTdedJAvp5ewnTvNedRxqUTztr9W8YfM2k8cCi1yZ1qudmHc7rQ5yTq7ryw2djS6w2VB1xA49db7",
  "key24": "4ukH8jn28Q6Xazp7PRfgdfv4x3PgUPSiEqX93NDMhLZmpFj1RZd45ZPjvAFGfbkzPZd2f5vVL4oCqxpnAHU7i7qn",
  "key25": "51zAJWCWtBsTyE1V8PX7qDCjEZt5kuYjUS2NYSxiqgPosYzf9WU6tTe7PCQGuWma6jKeCAUsRFuoiVwbUw7K2NcV",
  "key26": "4VTr8RW17w4UPLVcQ3azLhKq7DTNFyZK4WjMa12imfYQQBK2E4u8zP3MoR2n9iPR6asTnWkhcxpDLUC88ZHpSoBc",
  "key27": "5BLtMSARomGhXEyzQ84stnoYvo8LJ5jJJKRspfiUcd9pKTBGnbfN9jaq6neWYsztC34uVciBECG6oxtCPpS8JntT",
  "key28": "cbfEu4bCFgkn534KXXo9QLhfq6Z3YdBp5Jzi3YK7igBhn1xPHDoxLkRLtpkeE4rbdNCbqtojZ1XsWTigeWMVmt6",
  "key29": "489aG5MGkG4tiDRfa8o6tJcw8qiXQfkU2FttWyZzhvaLXCXawgrsKLx3GN386mVH115nvUjTMtLB2eDkmsp5e3Kg",
  "key30": "5SZbDpBbTSHJAnoFhBENYrGD3ebKLUv1hgiKWiyCQdfyveLW17oUKKZSabMPGzWqxPZZ1NGmARi4xqaUHL3DdQN4",
  "key31": "4r6weEgXwX76z5eiek5Pa6swvX7zhZYxyFERQVxCyMtjo2mfAoC1V25M1w5UZnh5u1Zt82Vw4mmiePcEgXiBSWPQ",
  "key32": "4DdtcStrvczZX8vfW4CT5YG5qmkYqHW84q9RRNZRr4RrAD2uGWxBpPhJLWpHMmKsxwZfcVYKWrBBUYMrq5VU2axh",
  "key33": "5qfLnvL9VCAqgW2RQYsVxco1oyuMzapdsnmeG7bD5McYiquqYWEnY4CACEDXuL3L83qrvyF5cfAbLHNHGU4AEYvp",
  "key34": "3i91U2uCLHTYmEgzh91c7GhnEaL9GSh79xEurQiZLQiV1i4QyziffeHYzPPPjPyjYVErD1cYxVMwDhKY1XFzDHhM",
  "key35": "2qhKVeWUexDygoHQqzn1xmUT52U2kWnndv2rDWGUv39w95U7CeTHZWnsbG84PhXYQ9dcj19yxFzvZBBkMFXK1bgC",
  "key36": "5x7eZWyASsXRUFm5UCv3syXPeE1U65LxxdtjuXmNZrrS5R5vv6JvdGeiKq9hLZmAdgsBHh6r2t6CYFHvbKskbsu3",
  "key37": "47QFKnPXLfWa5TAZ7XUsZ1gMuDKt8gEuQe4b4VctNFEVkR65RFhHTsWizSDiTwGC51TTqVBcGTgVmDakRaDfd3DW",
  "key38": "5nyRKuzw4GcbWfTtaw3rKfukinY3Cyn7Ruqn7etWuN6943NsvwznPJtv6U4E2WnTfhLsogfcktX2FQn8U8iTjAbk"
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
