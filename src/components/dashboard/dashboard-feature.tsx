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
    "3f8w4cZ3VwFPrdZJXj5JzzEbGLPBcbSk8SNHrNBcSir6Fznr3PKCbp9smRyAm4HRH6WmQygR4k3H6aasVZHXpKkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mMuDFNkW2GTqwauNUSfeEPCxm5d4mcawjyfYAWVkitEURrxZoZdJQFCSdmoFiEuHZ5b2gadAMezCU2CBnnVGH83",
  "key1": "299BbbDzZsRgVsfBmKCW66fWXEfGPDhVwspby1YiCaQx24ShDr8S9iy4FN2JhxJ9cwu7VwmEhEWtPTntTB48RxvD",
  "key2": "5UVYDVXy7jmwHPZHqRteMEFfka5LdJ8uXbCqWmmdYfHdmrdy1r8oFxNSDUMx9nuuhFyG6h2VMTHsnW5Lhrjrx54L",
  "key3": "hRgiBcbCrYh9sCa8uwrvdcpquEyPRzTAaxqiPy2tRrv33jPzkxGU5fybGZ6CkHVAB28r1v6A3FQRLThNNVCwEWv",
  "key4": "65F6543C3v5s7UADZ2BBVRx9yfGUjfiHz75YRasBZ71kEhpXfCsZbzY93nkSdw7bQWNmYyfixu1jiUPudJsAkRGq",
  "key5": "yNYMrtyGRgMLYGDsJoXFmUPgPZ8Vzw92eZ4dhxJJQYiyvakhtJ3zD83WhoacmWe6M6mme5WueZHckb7bffwuTHi",
  "key6": "3ugGn641Nz6Epzt41mDoMpsvnjG6HptNRoE4tTEVdPQPqf9PJ2V7xmav3B12DvFU9h6sdUGQ8buaYFAj4xXTdqq9",
  "key7": "5kX1yNbJrgR38bySAj5JZqqqqyd5zTfPnmyUZyQTXmvzdMpxWSbXTBBXVNGC81WTBTTYiEiSK24yFamS2Tk3tTWz",
  "key8": "4fxtuNcDPHvhiyTaCFWjGkZxnZaNTxVMBgXs2DJUgAu4HpGFpnoG8oUbFmCMghWmBGmWXcKRoJ72CDN9ZoWB4FzP",
  "key9": "2cyWvCoKRSbV7gZWB1hyYnwwLQNKgjUmcmjSpXwK3JnjKLSMWhRLQgTs24yWniunzV9dk8F58ecpT6rLMiybU4Ht",
  "key10": "53A4UE46SZ44pn3HzwCZaTZwM9kAmmHnaGrtnFE1xTrsWE3C8D65DBWb2h7JrB1MiyNyEJ7wPfFWDZtGiXKRsR3K",
  "key11": "4WL1MCWJcWrkug5AJe1qEiMvLyEzXiibeSjvvyowiWA8TQUZ2tKq9QjtHv6hdKzyhL6t9MEEqWXSj7fBZkZMSn9n",
  "key12": "67FNsCoEeQboNqLipn7ErbAGrYFGBtSoDMpHjBFQiaUXgB6NHAERgdpgRmbiQ1Ct2KheFYSaLK4MvetBnQ49X3W2",
  "key13": "5W5fWMgHrA3WepABsjATCJQaLHkjKR8z4yH3bNeyo9b7KnNntD5Y2YXRfmAqpC9yj987dL5iV3e5sPDWCbPsEByg",
  "key14": "a7fUM4EFxwr4kGhnENfC7bDEAEWdpXNWQgXWn4GLsHnSW6eCfhFHrRXHuPosRfzsmTNLPPbzvoG9EBkdxBNY6FC",
  "key15": "w9kGkHy8x19zXpLJmzZqaK6VrXCww2kQ7f5ZP6SLaoWCj6AMaFDXdCfLms1gnEzkNpwP3GPiRZhy5QNugmvU2Rv",
  "key16": "QGxuKG1zcUMcxyFEPbZ4Sx2CiNsvpuUxsvf9m6HPvgb3E811axGvSrBbVtBY63c3TTQfNQxEpFXB91YRKmdrgWR",
  "key17": "4DFuiEHiTsRF5DiY8VYbkJhbuZUuB6HaYfYSpcARWUYd3YwWhRZN45nHzi8s3du9n9jV8kZxgZfGBYdTskbbSQh8",
  "key18": "uTcHpc5kgjdbAhQDrMCaGeQeFaQkEVATQUk9PqH31TW4BGDcMk8kpbJjy6uTKdBfu41gXPcGw5acAySp3GyN9mF",
  "key19": "3AEwF2bsWF4n6tj294UaEgoxVfkgDX3aNpyDjdMHgZqdtxNG8ZUsP9cAn3pk4msJtX3fSrtRgQwBAz6FYgcd7Rme",
  "key20": "5hazAHCjMsV5VJgybqJ9AJoBG4ZjPaZ5Fu3TVGSbCGbyu1XAHFmMyryLY56NxhucjKatySypH8hnNxiPPxTEve1W",
  "key21": "21UtJtjrauka7kRvfD3CkRhPisWVMA4VPWaNpB6coCz8QbZo8xgPJh2BphJXfFMq6QWBk8VF3uEsdeh1GyMmA9tL",
  "key22": "4QjEzWDq8LvPAQZCiaWqYXANhzwGACCJuHE2c4FcCy1qsvLLGSjxP2xw9XzbxSvBPkhoAPhNVDCKX8miEEhfqHkD",
  "key23": "sGGXWHy2MqS4eTXwZ5gViRJvkgiBpWQiCnRksB5j8ms6U5c1twzefGe6rTCXgW8ktY7jASs6K2vAZU5PdbdHxjR",
  "key24": "5iQt883ZmxHbRnbhqmzTiG74bejPGijtwsVDN8fmcS92dv2VHSKVHvMhbLZSAD7CLvEedpcUgG24KXD4QKUDUNQ4",
  "key25": "38nRyAWdct169iwoc9YNWzBBrpg2QzKwUD6EqvwKwmCPnPwvPuVFhp5v1oMFHub2nkaCAoegzJDbr2KRfefW7PsR",
  "key26": "2VKVeoTrKPaQHX1KzfM6N976Jmp2xS3tBmB5gdDi8aArJi9gGfr6nTMbHWL2s6457BNKHYxgWypTeKnq6tkNJcPf",
  "key27": "U7W86dXrHhJD9XpxYp3YUkXiNWn9he3LmopSydHg9jHNYuxU4gVKKdnjXQTsSETfvAYtVZdEH3wYkHrRqyxDXFX",
  "key28": "cEviXatMrSL5A4AzWTpDDYAnMuqNX6sX6TnYhwJ2R26yE5AamJEVxu2ot2ZnDPunkwS6VrbCodyS8Rv5Q8PJgQC",
  "key29": "4qhsmxG4X1T4hS25utpu5dWWiHBx5GXFgN63tHJuW6sgXt6wwWAXsa5rLVRaCQ35kcRnQJBvLM2UENEtERJ6vMpc",
  "key30": "253QwH7xwCg8TpB4GmS43jwEwmXKVDBxSUySsXu1BAqd61ya9qsWDwGfhEtUiiJnbt1LavnYexGSy5tZhhwRRe3t",
  "key31": "2VMWo4NKYyi7MW7EoFZiUQdez6KtPZ8Zpc9vg29XmmcZjfzNfxn1my4sTs6yUPWQqcPM7MeL2cL1aRkUygdVTia4",
  "key32": "5w69gMji4YeyQ9QbFmaksCN3dTnZb4Ytfpaou6WgpxPsJ4V5mwFmEKFBNCCZ1VfChsp2bVwkUVXQ3jzntppzkTQh",
  "key33": "29QXRcxLG6HgANZvcAgGWn4H5jXfKgSsL7TuyNxEio29NovGMhz2zxueASdKd2v3PbCWqhkJvb3Vuabs4jfGttpA",
  "key34": "28zukbVhKj6f9cbVhomz9aNhViAy3CzqN31vuGM5TfLLfsZ2j4ZJFUFG1g7qmJt4CD2tXF923F3BFL4QFVBkgRnQ",
  "key35": "uoswVFvPt3DbF5cuFRDTq3SxixF3pXBBmUx8oebqvUF4ScSsvsA1nWm49keSwBkdZjt1qipAba4MnA9eAW6wNBj",
  "key36": "4b6ctSeJu7Hg8efXHCtiTb4KyukVVxvfh5NEjCJcGN1RK6Yh3L4m1R29ajV4vDdv4j4u5VTr3yxcddU76rdshQfw",
  "key37": "5TCsVBEv2gQ3ttZV3nJriCjn67cMbTZ9CrnAxn6ST1NH2FREvkb4QY5D4dNg6zbCZ1AMGWkTUSv2RbdS5aPGyx4Q",
  "key38": "4JBVEj2nWWpXf68Up8sbRsbZ4po5uUmPzXWbdXwm81EdSR2WGGpRJ46ezpPn24TRbfMVLvg66rwgBkXXBnUCWmJA",
  "key39": "mAttGFBfhDWfi5ftUz8BXcGZZMjbWXSKrwAjXYdVPbGY4m7wiwUQN4bU2Q2R45R1Vm1CWgDXhjKACBghJfJJZtL",
  "key40": "4HiYnGphnYkKufse34gCs5AjeJKPD38zihUpUvSukxnTMwCAbm77nHZ4AfA7fdZW3asMME55yDTHknvSBvYxYjNN",
  "key41": "2mS4qsCxezQcp8hbDNxXje6wcrnpyYQVZVmDjshUUKy4CsmXfkhXtY6qwPUTuytBefYavervumCoHFfHuXwkCYgA",
  "key42": "3P27D6YCiDpcMFqzkt89nwyPZSfeyWiXej8ANucMmGS7ssnnrXBd6gwhY2En1rzghjcsYzrgNSnphvd9ZrMqRRA6",
  "key43": "5T8yCZNvM1Wx1urEQFinjoUjomgNs8LT12AGGbAzUtLHLz5kzwWUgG8YE9uaS8AZABCsoarYQp8mFMoQfM2C7nvp",
  "key44": "5Tk4iJG6MEc6j4CZxoauB2TB4gfk1WGGQyk7DzjUU18rEUY9iMf73D6v25NC48miKnCfR2aPn6ipomKmBmf5136i",
  "key45": "3jLuz5V87Eqy9CAF1F84MQs6kukFu9PyxvRhpvvWSLc3J983q1HLC9w7Pu9MYAhwbw53WqPkXSv5cwPUKm1RAwqh",
  "key46": "corJCW5dgHHJnb97dySNHZPwRQkyRLZoPLoaSGn1SK6GaroHm7KtmmWZ7WzR8qNLVSgLDP2FHHiaH61DvjS4iQH"
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
