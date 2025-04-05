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
    "46c57smGJV9ktohoWdFU1g1XRRmq7tvpHrrrqXpLNxVKAD46rgU68NXk4nhGuh4tnhs2ZUeAiFRvNAAeAxhEhdj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xXK7CRsCLYigMc8LsrgT5CxN8LW8gb5Y1YQXQnXU3cgLTHbhrV44d1dP7C1dted7juajAjMDRMXJb5npCiCXdqU",
  "key1": "4k1gHRGWoTQk6ynD7Hh4aKSFxeY5VA2LLw1hbjQH8i6M7a3FZc1LWpHb9fHHetTBCDoA76i3R4y5bjqLtNg2yANS",
  "key2": "2iE8v5172uPy2zicrtgRCRPVQZ2ZAACbdnhddXtXUMfvaTMTwELyeWSxxd1QFaAEnG8RSEerM9QKHhvnM8GdntbQ",
  "key3": "26NxokZiinXm1sCgGNDMdqJT3CJBdtoEmTC6naEWF8WybSF2uvTCawmNnPjFParSh3YhCbgXQDi7n5wzmo4Kbt9L",
  "key4": "211s2sHUqCwUs8QRknXXVFuxxsa6JjULWyCNRtCoypo3cbU6NijaR8YDugT1F5iSdB3uKHjBW9Cf63qYpqfZViEn",
  "key5": "19aAi5PyJxb5Aua6X2NQ4WQRv7kz7VNjUYXCvbm4YKuTepoYXCS6RLihfB85H7Y8EFJ5nktbMmHFdhsgvaxuMot",
  "key6": "25vDavmsVYxzifQQ4mbaQrbxu3J61nGd3KcUFwohgfbvbJsSSVEpAe8pKAhJN2KEtQJtAJJdfKzr7y46dWrAKTP7",
  "key7": "YCApixxXXJUYW1q4oSCjacpy89TR4GiY54ddfM3i3Es7YYGcXF17grrcjPs7fXuBfAsTiTuamoTjXgD6T3N6i5k",
  "key8": "3FSUSGwY9mdQz8yUDDXZ4oBqSsgNQwCUzz3zQAGHk5rbUdArW9wPG4aYjLfzemJ7NehJLaooARVSY9jR3nHJrmkR",
  "key9": "2XMyH6SRN2TFKXHB7Xa94rtZ3nYyMLacN4H2SWDNDATLtf6Y4PkcmA51U4DjQWnnWGWy4tsnLWRFWTJSTEgWvG9c",
  "key10": "4EaLrz7ouXeB5cPX86kaDGgfrkHqWaGHXUGP75YCzmi4VVtmCi1K5jyimcbh6yjQdgPg5UtzkXBkLEZ5Ly6XEatL",
  "key11": "5H3JAR4bsqnVTz3vHQBmXEhWqFmtMaVPShdeLgWwQPyBV93fzJ93MUK4t55XMRRe3SLn9JacUVGYDPxRTho6emi1",
  "key12": "3MXHGj394VXev2v1Lrm38zfza6vzwpdCeDkeadUVpwJ2S8r8XXDnxFvNmYj4X4ufWX5Y9DtN6auZYLiJ8EgexhuT",
  "key13": "3cfytf4Kr5YjLCq4M1mNbmNbzaFBxakP78mH7WBxtG7sCjzw9P1c8BJ461hQQXYzYrWJXB1k3RL46croVTmuMVvz",
  "key14": "cx2fWrKYBJe7J2dh51zXLiTPgtvvZmUrDz5ukwLVaSGaNtnLtsAPkkLaBDYKL1zPu2pBaWURme3gb1341QDDA9z",
  "key15": "5pyp8a38YbgBBTvoB4fpy43kDcJtKUmZkXRUAUC8jXmAiDccnf6nzxNvzsZMNWR2z3BFErFZ7wq7kuU8J2yi9XGJ",
  "key16": "4pzDN45byZG2M1TXK7ZjxR9Ra9XBGj4K7sinNUo3GM5DonvLFg7cJFAo4aKxGth123ukpQv3L8unRyxwMXegRmyC",
  "key17": "3Yt9ghpm6U988Ya98mcgjjackcafE7tst6F8ayDFaQ2zBcJZH6bA39GWgZS9SKcvrryN1CWosDMsMzo6Nmrc6yjC",
  "key18": "6cEof38XQ1byKRc235yHoF5YsApab9SSbwY6STWeLHCsyjFQhFUoHJ7UYXRMmckc6qgbWrVSPrXqnyaEy5afU82",
  "key19": "5adHfKHKGSQhhj4aChuRPGwXFBxZVb5aHdggi8gpk6nc1TkJxbh65QWdpc5P5f8M57aRMZedV38A1ju94RA1sZ9j",
  "key20": "2MVFTfdWos6Y19tS28tj844Y27HiNk3t6QHazjE2ay4WxsSJ5CSy8fF6EnwnNFmqmem8hbLaJ91rWPAe76XWjeWQ",
  "key21": "3QuAGypTT1ke1BEQDLH1K79GSqkbtgYuJj5Moc4qxWy9kS3mX4r16ARmjiCuTz72Mfxcm6zQrQxC5wXP2bqiyfHq",
  "key22": "2fkcunuhgUh4V9WS7oLLBwbTktsqC8T9hdApYBsfknuSeAYTGbj8PJHMcqu25VeNeMSru2GCHXKKorNuySXMxxfW",
  "key23": "43EDxvXc5v3LubHwX6QfGJpEYRXgUPzuXesryHd4AjpjV6Wr1WuFv6tN77bcPwhHSSBmwVFzSc2jMr3bZmN4YUsT",
  "key24": "5hsMHLVk2guk9Mqx91tSjaMTb2nhVNiUKq9bT3JKgt5p2ijRnNyYWgi4qgvTQ5RFtTHjUM2YrRf3yJeTqUAHMnHg",
  "key25": "2id31Cog9GHRP4KjqMBjzBuA8sb68Z36v6DNPGQjrEiJUA83DiTxCdQ28Mbe1XMSwjstmjDGGvC6Krir9tu9YEZ",
  "key26": "5vjQ4yjjc41So3JEiqoRg18HDDSjs3eNvEy3FRJEMNZCjDsQ5PBphp6k2UkoTqVTHNN621SwrGziY9UZiLnvaXe",
  "key27": "41NyvhgogzEu1cc978mTeoQojHqEiqwLwVDgw8xQvn1PiQSYJxz2VvJvFGXnUJ4QmVPwRcbqhVXAAw9ghPoz1kvZ",
  "key28": "2qDi5jPwXa2zipZXfBehryptx3tQvhbfGfNrHVggfrda8Xnc68ZN7fUgzmkKDx9YqyRYoQSmRBQdEgHKX11QScag",
  "key29": "3uWKotZpYZukpUrShQVE96FWFHzQjWYUfuNhdfmzvE14Jm4nrTthdgiZvaGfxSfdpZcHMju34k6k9xgB8XRkyGYD",
  "key30": "4aMQvGLARCNahDoxyskmgXzd9YVochU994F1L4ZLfFPanTDrbeCuhnzjr9B2TkAbhiEPBH8YBhBzZFYmrdCN5LLC",
  "key31": "ZgpT62Y1SKtRFdJP8EfP2egscNfWty5F6vQkDqEwB7TF5oJF5ciBGd4RPEpNoPXb5kTfRD6fj3aFUcvHXhET5kV",
  "key32": "64cDq1JfJZXv8rCxCqtDJxztLgoW2ybg1sRX9SWqmaNGA2iepacdFuTF59M1TzgesSjWXotxhKvL9ayN1pNvckZS",
  "key33": "5K3bHxRJkLqduuKZCUm1tvJDGjeyKRe9pw4L1JcX8meJQshoHcNHUbQEbuaJyzHoTC93U1j46Cv2sM2XyM47A5c5",
  "key34": "4b1x33ZUNfR5EhQbsjfrgTKmqhAcdmMfMizZApWWHwm9R4exm4LB6xoK8YMj7vQN8V7Q636aC4eDnLtwhXJZnYWf",
  "key35": "25vZcLcAA7esWhg3Fg2SeZCnCBVh8WHT9erit9o3pGn6KyvYUhq4G2rtExyhi3mAFevzujD9f3u9dXtrtWv2fmZ8",
  "key36": "2wjoU6NWaDdp43cot1sNtz7ayieBJC3Wp3NM3cHGhcPDgDT8RYC8wMEJMM7Gvmuay56yn5HGxp97RJjTbGYpiMAH",
  "key37": "5ur2jj24NaZSbmDcumLGK2rzh3LoSnw8H7n9fS2i3WBg192YPMBC4kxFYPJQ47rXBUnYSveoQcueUSnPnkZ6hXga",
  "key38": "3b7j9qPfYkyaUArrG8SogwRcwEnAJemJVekrxLXhrPEC3st3poiXwreeFBdTSpnF7Aqk2SQcksvAo6FARQn1PNiF",
  "key39": "2pRvjWVW7v94dEaBrVQYnzkaZBeRRtqCoT8ktk55FPBh6jMS6yDsMSg5MnqXkmWLFsJMTxkLnSzUiKLDJLNwEyBN",
  "key40": "5XezADGUweAEv8AqNNhdrF3zTbSwYbRzVgj8cDZg5L35JE7a5mmM1nfFxPUTcn9XNx9qnfHQvoWg7HjsRKoKxYH1",
  "key41": "51LeDqeMc5Q8mP2JxG2wARS6AKQe4a2JxPyAbYqVwgTyJ8sJYB7skWa11R7jBBKt5MeJXmAG63kMPKrsiD6G8G88",
  "key42": "1MPQxe959mPrzjiX2cLMbdnY2C5aQVKkBZUBgkNY8v15T77cdcmSKSd4ujfQkc1g3Bk6PmcmzBPUsY5X7nYmUif",
  "key43": "45K3n9XNfm5iwq3J36TeJWwijQDxV4VtXRBvM9SoKs59pwPnuWiSxfEh19GmkjxBfgbUE296hME8NZJUvi91dqJa",
  "key44": "4ySP9Bq4Yka1gvn6EXj7dvCrkRRMNAH24XiqG9Q8UJzGj7kQFj3QQCmeF8XWnmJ2qLwWgyEvbSazAaeK7RTQLsXj",
  "key45": "4qvD1p8fLzbBf78XPaJiBtDb3hQ2gJj373gdC5abaVLmPiKT3qk4bRxpMrMC2SJbCKUcv7zXgpLmsEcepJhzRQ5w",
  "key46": "aCAnxErQ8UZxf4MKyDdsmbwzRH49LCK5wKxmLK358hngBANPVudzCqPFfWjngxj9vJ84AyJ897EhbBpX3QgG2Xb",
  "key47": "5WD4kpA8twSKpxWszaqXEYJmzcCwG6K1GQ4yutBHzJLujKMoz7yT6UXcxBm1K6KQGTKW4QgQT7mfzg9KznRe8VvG",
  "key48": "5b5q52MWh4FBYp5NUkVvfc2whVRY3VZiAqMVpJUHBz5UxZXfDG42QpMJ6F4Zg4sXZJ9Mk2aCFdW26s8CHgN8Z8N9"
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
