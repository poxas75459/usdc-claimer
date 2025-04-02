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
    "51DDmH9Ve4MJenSZfmCLWjby4AqmiWCjtHhtDz3WXUwTiG8dZyjZHkKVLpnRie5vmQzFMWvu3pEkAudj3C5xPSyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApCHhPJvrJq5H3NBgT3hsQ9FA2kSMcBoPdCPNx8cs6pcfWgAz85fi8kcQueFvjwoAjofBs71ULjBXiPVX3ej97Z",
  "key1": "ZtLwHNBSc6ASxtezEafj6k2JGkzbH7V3VLakbLy4oL4xMQVrMiNQ1mKd7hjZDRxgvD3RLponwEDiYTdRYT8DbFk",
  "key2": "3FHRCoDZhx43mDqzHedwKT4spRTm2VxS158YWJBTGPXCwsykwAtcUQX7chWwuhFcHXinvjdjJRPbSwBo58oBxW2o",
  "key3": "2p4rj7cyu8TFDLDZpaatiQEbj681AsgwyRq37E54KEmYv58VDNz67VFgYcDZY5DLMJqdpgJK2RUYzt5M5vBwe4ed",
  "key4": "4pjQZ4gWp4Dixdo4tENPCDPxQPAceEoLjb1T7DKwHLzkL1y4i2PGD2GAqPivr6pcBfJAHhaB99UHRfkDLcwcvSU3",
  "key5": "3VVpqZiBKciS9BTWvM4NAu2AhqkjRzN2ojPoxkT5GWxNA3G9YuaASTiVzD5xWtzqW6RUwMftdDvsJ1WdjrrafLvu",
  "key6": "4WdXrT37PMRvRPdpXyiajJU49wfjwugFhLHVUk88yFEpRxGn9228UTfTFVJo6y77uJtG7WdW8xR7WUkspnDVUowz",
  "key7": "2bae9YZeYy9k69B6LP1VmKio5MGvJ5qMehZW1DZw8kDi9PEnZ5nWLcSgTphtWUbbrvVnsEo8iFuYETQh9cAWLa2n",
  "key8": "4FoQt5ptUVhLgeYjWHAp6zRFm8X5bWHsuLx8KxiKb6pxaJYsyJHdZpxX5zw5oYqRftCvTETBNm2NE9LraERqzpbi",
  "key9": "4cg8NEKhK3j5SKN5qum4qqE7gKVN86xUDWNDohU924U1KT12HBu2aoYNKG7FYjyPv5BSjXwSGT7VVG2Wm3jJvdSG",
  "key10": "3Yo2oBehZUfockAyYtZ7z3J8xzTxVUUA3GK7BNeUz7fpkR3UW2saQySwvMuWDHodMUK8sD5uGxgvqb7ato5jSX4L",
  "key11": "5yuofFxi3zA28ngCsauaH76WXwAw8hkFSRg4Ym9Y9L2ezo9wftWqYDv3vnWrpiDLmfDnCuukQMHKsVDS5rapYFH3",
  "key12": "2NybA3VFap7J81esN1M21ga1eDjKfHsVhKSXyk6rp7qgpPAo2GA4JsAmwSizuC2DAkmthJ3a8yGoWmpFpFdYzH4F",
  "key13": "2fCSB1kNJwCVdh4H5uT3F4yKjffSyzG4T6ehNSioRJX6KT5Msrp14zxUTKGzkpa4oZJkDfnUsGNh9Bw4z4DRdc8g",
  "key14": "mQetXHUmWLiDijW6oYXXMALNcrAXPTBWvpbuVh8UjykykRSicq3jd1nBYw1Je9b9ZQpGbqiQXKhTuoxdEMP3EYi",
  "key15": "5pbpBTGmJmFvcUDiGCCp69wqQjdevm1zgMWrLwaVENR6S9xSS2MP9TYih4FLnY5u44rML1oML9EhqXbVKjDsmErH",
  "key16": "5LAh8NQDxZrXz7Htkk2HsXuazFA1xcR9g2h4V7fG7oFjECYwbtvopducoqjnQM5gdguMzMhyLLA7eSQpc6Ty6MSG",
  "key17": "3XWgC1hPDYCpJpHMUsEWfZPtiJWVQniZcX9Zz7ZbCnVM9Bhu68EkMdjpZ6ghbVcHgRomwX9iNJXDsSRoytU8L2XZ",
  "key18": "3fJwtpErXYe2tBSY6vZpoR5hE6zQdPBii2Z9JPerYjJsmC4XNE6iFvsXimzcBqbVD2M3xeyF4aMoqFADukEWstrE",
  "key19": "2WuibdykhKjTEy9Hyz3VQmRJomdSscXdMqig3quR8pr7uV3m73wV1FYA7MGjvKgAYjBBYTm4FX6ELsCiZfcb5NDn",
  "key20": "5Utxa2wq938W5ojDMsbETzJd4mze9UC4dniYjw497fUmigmZ8Yf8kGHTMKG8jrfXpzT2Cc5oq9di9RAp6gBSpCcy",
  "key21": "42UKMHwkTW9oAPikJCcxMmSDnsbXnyhcCy5CewhNWq6684gykMPEyGLbnpApyZvx4PhEsQw9dwcL4yC7GHLfh1bd",
  "key22": "4wRhWUAWdnrP42GwWtaNkxpB9KXGVuMonz2dk575r1CqT46WqZKxhBpGJ1xZwFsBw7qyYVFLkRoJGwbi3fxR7C5c",
  "key23": "4ENSkj4NcJ3JA2ztZGddKhfEe4rFBcnoGzbgiSfwukfqbgFvLCoNHeT4x37yJJucVDKWPniaABDU1NsQkeRioHRb",
  "key24": "5wrSvfAdXGX98rzBdafNzuPUxSigbGqUgw17zuo3Ac7SGK8tqKsW8MLuck62bcHenk6AUugZ5GqMii3ia2Z1JSP9",
  "key25": "2BbVh4wmPS362pAa4Vv5PcK2D7xFfqKGYGffDqLEV2Gz6q8tNXHrUowsjZhfHsTgYegLgtttWknZp2WKXScSakq2",
  "key26": "4fCDwRbH6MSwwjcdKiXTnm9mSFtvG7uqopv4GRPocbJtQrhqcm6z8K86ksDL3jitneH197MwcpKVhqC7iCxRY2aa",
  "key27": "23CqVwH2cJ59wCcQTBoxZTu9zcwCgdqNeXy8PxoJyHii45fFoMcCWw6GvMkfuHnHZ49BKSjFzHhbLSeUqDGss7iT",
  "key28": "2rw9HZdcbYfVYuQCYmWVCasvfp1qcMXSkHmFtFFKtac71r1xtAiBguh3QTsisxurAbryhHzMojCSZ6HEr2sKTk3T",
  "key29": "547CM5ToBBuMacjrn9gTqenBtRXiiLY9gWo2BzpLHhRDrizNrRiWbHbmh6MLuNTnb6rdKBGD6XChZtyNzCpWtiuN",
  "key30": "5cs3Y7AdRVAcNZzcteLU9wQERGLmjLzPALYX5z8D9B9yAw8pFZWE5LAM7mp2rkBKRPbiVXdxujmuGjCjEocyJNWy",
  "key31": "3qy3P7GF815Wnj1y4aY41u5pR7G9FUf9jA7Hc424bFMF47Ww1iCs3dzznd896gTYvUD5g8Qabv1c8AiH232wih3d",
  "key32": "5fTbysmPSv1fQzyTm1iYo6Y7jhZDieRPcPkwsKiua7rPTXxHjXCwz26pF9NbVGRsqWkYzczgPLrTL4rEoinSz1Si",
  "key33": "21ZT7QYFoBUqXEFQbAhoxbWG4ZRmzMnAFoxtcvigqfMr4936wi3W85CaZfEjwmqrRc2sM9DaANub5qNq1umfdPcG",
  "key34": "EvodR5a9Ru5Em8G7Hp7YraK6MwYZADN9NcPuUF5PXrt6Cf5jEUjgfbCGrXDZMiGyrpJ9bHDkNi8h9xHAHoskzt9",
  "key35": "uz6rpQTtzfnKhUSvzxXtaUFfPS4fCetjsL2mWSkvgu67mAGjtmjWcS5UksDedeaKjgdKa1zWLaXg19fnUzTHGo5",
  "key36": "F6PZr8jpzfA5BSPGmrWhLwdGkaMnwkeQkrxQWWXhHwGqCmMSo6g9BrwH2UmAAicT4V9j8ToYQV8mHC3RVTDRF5a",
  "key37": "4xW9t8nzzwQezyEMUKhhiGRqXd8486nLmSdBevze2bNE8SKV2XDPYq4FowRPkQMjym2cjRF5CPTTmoBTkrsDj5Qy",
  "key38": "32ut5FBJciqCvCaNaYkpGbmDbBPCok4rgbh1HYmbBj82UGTmHzQ5LQFrFBVuYnY2dLh6AFtTukWSZ3xPiRDivTx9",
  "key39": "5zHMnWasL79ZA5CA71W9yQebYo371eDkf75NbBbg5D81dWN4Q5ek9sWWX1VTaE4U2xaFx2Jgf9xnKvDYAz6wXRNT",
  "key40": "pRGUSAwcrMFxDUTXx9iQJBxGab6gQJzPwq2GhoNpAruBnK6JtXCqjJHkrWjUoZBNX8uX2PAc9BKESRV1zvhTZWP",
  "key41": "5e491TnesyVQTXET6Vk7qjChwnReanGvbAy4i7aRQRHFh9QbnMg5qGxroyAXyxV27E6cPAuYgCDUPcY3Z6DdTJFw",
  "key42": "2JwTM346MAKER4bSpzxB6zPHEjjo4CRYnLNqyYWqoAzoMjTymuhHJBsAZyvLPe4dWHuZ6affrKAT6RxHequZaCW6",
  "key43": "5SNz1zQ6y61u2orwBbYAGZdT8oRYv5UJxLjQTvLR6tMPiTuTFJxWRXGFjXd1HZmA1eqeVu3Ck4Fq4tGmFgJXwBtd",
  "key44": "2wDiq3eQeP8nYckB5r82Nmey8U35M4V4xy59pkF8MoyS1qdHLkyuEo8NW9RoRfuymSofth5uGYGNsEwXq2WPuNMX",
  "key45": "32wD16j5LB7aW74fZEGrykP3bkRD7GPcaq1CWuJoZ81TLxGTNPVk97ydRbJAMFprqviKstQti6yewc1j7ccfWYoD"
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
