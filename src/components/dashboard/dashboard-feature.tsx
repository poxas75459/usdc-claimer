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
    "5mAGtVB4iPv5baytTiTEytty9g6R9MQeGvTtXfpiaXTQNppdCminrs21kDRY8jc6EPFipV4GfGAwaEeGa8PCZ5kP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ghjw7i7NrEHEfAZVPDVdwJYg8gA9WcD9V3hNRSyfPw9d6McMMhLVpEujtdX52BC3U4MrTwtFhYzqQaLvq8qPZAE",
  "key1": "2aCApEgeELAfLQcMYYSGwBqWgd1V39V782hZ8ytfobBDKdKshbNCVz832oFt9A3hShRX5pMnyhTMBPpV2XmFbCc",
  "key2": "5TSE5BJ5D1MLFLLncUL3esNouA5b4zymDMehw1a6w49bfPjRhPNKPg84Dmu78b3Te77XnRMqSACk13fojUJTz6zk",
  "key3": "54uu9JWkGGZ4D52F64E8bHqmbvuA5Tn5XVmkxwdF4KutoQXJJ3ugVwPf5Eh6EtxUNDZCta92gh7hBHtZqmTWf3q8",
  "key4": "3pdjeAcBZDKPj9L62Bk8ZMKLS11y9X3xRiCTiYwd5tXnQVfL9fH8YtcYc7NmconbnT2aNzq9HTP2GG1wX8fvvPzw",
  "key5": "4vn52LBhUbb3aBeFCWVP5aneRWp9LETnc4qj12PWZ1MiQr7d6ZothH5A4u8PyxkrZJ5R9VDY53k26jh6VgFXwq6P",
  "key6": "My2uMsDnrwuwGt7J9WxsHrS2f5zdSfv8N4i4BrH42aR8cypnaLc3EmNYjceRHZ9zFu1BZdkKnBGk92JnL624RP8",
  "key7": "299nKHE9VLeoLEo5up2AugguT4sMHH1tH36C9J3agnE8wsJEg12XUYJBMPsDyahMkwzsz5dVUSwhyv9wkZNjv6Nx",
  "key8": "66vqf3nKD9oGC5ApnEiYBahmKc3yGAazkbKVEQq6ptXN7smUxkR2K7mj7Np6KMj1ZqR5BLCZ4uz4zF97w6WJds5d",
  "key9": "3YCMwkizvru5eioragK3Wd6yfManCiXehoRgKXErQUA4UEKYHDxcRKfhLZWPDPWeiCt2idQ6gSHug7136c81Bcbu",
  "key10": "45BEAzs2gX4oaHcFCNimx73UeWiCkqG7BRixLyEqzds92ziXVEAfaf2siPMnesRxF2tCWiDeYVf8ipAwEwUeF4bT",
  "key11": "4ewCJ1yauKBvQhtEKWeC57paSdGhT5njaGiysbZUzWp5qU9wpi7CkRtEmU7d2bA9MDqycomvpUj6cHax2Moh4Tem",
  "key12": "4541kKHW8i6BnNm9uPSekcnzMinpNTrR3MmEype33r11619MSyUfC1JaG57htrpkJbi33X4Zjk14uHbyCbfaTWtG",
  "key13": "5tU1oini2cAmbpiEVKC82p1ga8FYAfemns43JBkLxFyVmP5PBJhx3egirDFhCbVBsWYAhC3etrtWbi4qXdkYtS5e",
  "key14": "5WHftvhvn3wxbfcgjX4trdD1FaPMc4tvw2L7A8qW6FPUZyTQiXXoiZxpYnxZ7vVkyRMzKiPEikEPfVxRAsPPa6FQ",
  "key15": "2j2TPDVE8mu3wfKBnGUESMmcsznFUeffWxcgGKYh4k8gcF8a1EzkEEpd3QpiGt4rZtXTD1f1hYKnSgxkEXtNyLEx",
  "key16": "sVdG3RK34UeNBRkmEu79KuAFvU7Dh4rYheQVbeveqVnG2Z96B5jSTSVJELK6YMbLa1t1kwSBDt1ohTL3hLu2Kkw",
  "key17": "5UvkQd65ykn9gmoZ2vFoV1QyeDkF76GyGydK6MeonX4gRimW7anhFgcPEQHGYv6Mhd9Pe51LnH95qunKaxzYSLMV",
  "key18": "29bm6A5oRuEJDX8Zouj95yciKLW28Y5T2V3kxQmZ5AVogsTYfcS1qbgYudqELxmaZ38RjP1zjER2q8GyyYPFSZhf",
  "key19": "3TyV83cTGQ3aaJuGjXnx4fGHDFygMVb1hxVapReqthLTXJE4dvedB42MHK8teunbWLdRMYYtzUxZ96R4kt48SY8E",
  "key20": "3X12X8sF4Nh549Gvpr8oiebuC5ZWk3H6p75FVvfzxLwQpUU7A7nB7rg6inetHgCqyKKB5q4c7dpFJscM64oFqqNX",
  "key21": "265W1tYL6XKPue4766gM7LvzDbvWybZJcr2sueyGvddd7RsQpPFb59xH9RDn8utJyFG55GBwQ6rLnoK5QfiafFEH",
  "key22": "4DZLiqthaDFPD86aoqjRZcbdWGhyqqVYdRc46zj4fnM5ERQzwrwktunrRbpCv6tcvAmtgQNQVg61mhqrpRwK2tSe",
  "key23": "2q1FG6P6ko7B8sWmDmiC72iLPtPpymSJmHtbXDRtHkq9JiHdE2RjvnUehqEcY6Ct2RMvfTmfsg46eXSktsAUjTMD",
  "key24": "27GLgrpdDp1HsgLGnfeARTvfC8MbUNYTy8NmmTQg5KLz7Kv3EVG4KszCScqvYqX5Rn2SjzgnkVm6zcxXd3YT5vff",
  "key25": "5xdPLSdmb31CSTrNEQH8GjpToyXR3DwcVN6rskGoRVwC4MZxBk3u2X3CB7WpwB8VQfDzBhkzDrxyj7fMkJnewQba",
  "key26": "5PoaVprR9Dq2SnYbgQyTAm6PVdYConWfzLMozMDpH5X2WV7mBQ7WgUSomSiNaRX18KX17cD5bbV4m69BvhM1RyKy",
  "key27": "4hUtR6opbWcEX1NnnbMkcdfxLdXSFBgbts55UPZQDE5vNTnzpQ5WJPW23ugA9K5iyvnocj8Lyb7y4NXPDz8KSNKv",
  "key28": "4N9NXh9Xxg5yTinDqrQzfngeu5UNywKvhsPCjddiS27ZcovyDjt6nfZifc9KMfMqq53TMxSqMH9XUnWpTxpnNo6r",
  "key29": "WpAtZey3ZWbwiXNRy6MrScyzSP76y1ZW7giA5yZqMz7BMDzmE4Jwed1txqMXkofV8vVvoGentX8cu1aJUu81ao9",
  "key30": "5Xz7b9gXZovS3DYZFwEdKQUD66LV3tGi4qPNEzinnQEbFx37mLytAopbup6S93uo8q9YC22Ymmgi6iA9WyDnQ5Lp",
  "key31": "2KMPNJE1qBGT1dvuhVPRTdLyQ9bn6MFAgWuktRajF9iQNSX9RbEvt1jHquAAAdunqFKmKzjFs665p8YXSNitNfQV",
  "key32": "21btURSxrPLd54gdxmTcvCUiejP5AgL2pQS15cpoBnWfHwMoa2cPjoCCppjVxaZZNu8ezSaEDxPMombaVW3kwtSu",
  "key33": "57ETHZmJH9TkQ6ER75SrpzP8G1qkuhhBhJcRrhAhtWPubhAoNBuPn7YMt1deNVoxmrbN6sRzmHseLnCnSgZh2vLw",
  "key34": "4374tuTciojqqwYMWaasP42rx5o3N3FNVtm3yZrPcVnBHCyFzEFs1GkjdZjGko9B6kYhkdLJtEyCkR6aB3c1nMd4",
  "key35": "5sEcZz3QDyAPuxGo15PqwHBjLsSA54hQE9Q4YiQzSrfdjGknv1xhuKHrmbW5A5Hvr1GbuhVa4Kcu8Tb1Q6zDqYuy",
  "key36": "rS3vVV6KwTHuEnqEf9HpeNvJcyGDC5rkg56T3U89sT2mgdCFwDE7883M1uEzc4pf7PXBmaH3pAHXezEobyjc3VD",
  "key37": "2EjVQJx3tm9UXdBdd4SXNf1jhHNX4itCB8WRKg8v97DxW8jnK784m9yWgc2Pay3Pr99eKPDJgBBVBwLjJ4LTVPzM",
  "key38": "4Reyo71X6CmUVtA9LVMX5HVgoStg48pcU3kEbm8KvdDvAmVLWdfc54QpcNueXLxnP4dhbmzLdFiNHyV76WgVobNg",
  "key39": "4qHsrGPifxF81phDR5Qe9eA2CXFMyMLuFpkeg8iCczbXG2Ptv57KSmA2KtRi1GaB5cs6JTAECuzAz1J2RZ43Fqr",
  "key40": "2Tx75igQKpB72tcmk1sasiTE1vboMQWEY2oJc23VD9qdC4qHan1LurLHJpif6LKfC38CCTukDGPXkpbK2wRgaQQ4",
  "key41": "3w5RqwqHCoTyqL94auTizRz9fTy2VQMnKCZBJGiM2R1WMNCfLfkfW93ksEm9eDLXp2KN6E75ZxwXdAk4NrawaynA",
  "key42": "4LFsZBJf7eCDGF1M88hWGFPivtoGvLXHiUjrR3ia5ER1U9Bw5kCqMif36bj5D9uZzMWP1V2esfgNFww42DZ6xHhq",
  "key43": "3Y2mrwYJyi1KbP8JN2WkUuJdLTKYSMMN3tD62R7beMfGFkHtXWKUySpn4ZN6cnGhTyuafc5d45cfsZ29918wysoa",
  "key44": "36dRTb743HPEWk7sZYuhxkKHnFdnLP3d3GvBnQHMiZQqHR1XMKviqZobbJUNA46qmQSqgv8568BS6RRd56D8TFQb",
  "key45": "3pFfPdpGJ4BromoUqTigkCYw1o9Qt1zc2KkY8GQrr3rh8QqYCSdNG8SmAxmiXirT5Psh1XWz5ncDJHo6JirNSsnd"
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
