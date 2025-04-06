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
    "5mzVt4SC4Uwh7KEpvLTYX7sWzPedyLM9o5cJAr9yJgDBfTeXZB9Nf4GBwiAS1fe54T33usQgdwqt9QXpPXtQ9wyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHamGFsVDDbjvsMpf5aDHWVBzwtoLM8apvqNMg5PdftANgkAmqmmUaSFxtyHaHGPzYPMVdQMnziQ9ZVSwnLqWBC",
  "key1": "3b8hRw8TMYhRbpWYuYnLZBfmUHjPcLXQTZ1firNiKiXAYvwSbZqJ2mPnQ5VGuvGRzHVk8NpjUFpHHUQgrwAyj28e",
  "key2": "rb5Ajc7yvHZW8X9oby6UUW9utxgvYVG9QWysknsUAToqcMaMheFF4kMVtMnzToXxhsGM9XPjCjQc3ygw7Qtf75c",
  "key3": "4QNU4Rzg6CJ1pgJGxRcAGJ7r2xoK5VgXZ5G1LM7vrcanDZHo2WwFMintzrhppVkzyhyRvmu1ap2N7d2kXsRmA5fg",
  "key4": "pJwkZHrY6VrbYfwP5HfTVmqAc7n4GCZjs6FCMFwCSxkVgj4P4bBxXaJ7Be6btiSeFWXP8aGLJoQpvd19TJHw33U",
  "key5": "3hT22CBhQyJyfXj6zpXtq7JakRCeezpB7Qfpa8vskM3X7VV3VmjSXoD1SJsuXwK2C4vcBadjhGpoHKJv3rSruNF9",
  "key6": "2fYt5TnjyEY6xhosZtTChExLMRf6aiUFJtkMnXQ3AfaQjHN6HyShknyw1iHXSu17kkHB6SgDo7DLJXWrgUejUbGg",
  "key7": "5boFMrjAAgCnsNhoztAifFLZ5v6Hdt7V7Rjc373dZmDchfArneAg3v7PkZ7wvPZEZH1XP5G1XCVZRyDH5Z6rgeC3",
  "key8": "ELYNwbEYffGN2iSkGKVdVFmZ2D4GtTbC59dHoLwfYMAShnkM212zQwzx2ZWSrW3QhUPpGP7secFaUL69cHLkb8j",
  "key9": "2AexpFzcmJmr1C9EDuVZZPpH5QQMT3whvb8JPrngrJkLfj95tGsEkxJG3hua8UtnhnepsZL2yyLoSjmVWfsG7urq",
  "key10": "2NVKgC61hvCKPFCjw7ww4CqDstfj54K85sD5WTwrVdb6N2oMkzbERFyXU8fhEKThYMg5zoUGda22J8cQW4TEREg9",
  "key11": "5znrtWVS63cv8GUmx3yVwh9SUxYhNzGvZ7WjXm3Xui8NMCKbRXPxSo2DJN6n3MLidykHJmMn8kKtDncn8PmR61kJ",
  "key12": "maPCKW6VdYiAeTM3R3WARxFuuzWPPkYGJ7JEFMfF1Eqxu9s1J2SvEHvYRyqE8u95eFH7Ux9PePddgUYHeYnuy3D",
  "key13": "4iAX6C1Nq7kMe7pFczswhpBx4aQWMVPbkNUcciXQYBpBqubcrdDWCj1dFNV8iK1EFYZaWX3SK7p6aD3AodV3bPbk",
  "key14": "2tz5Z2uZuKwrRHPBjhKGMGGoygtRirkXHppS2w68JxCURLPuTyJ5kQyQfz91qAVRVSspRhGxEfzhq6w2yz8coHUk",
  "key15": "5UGpverGU7kuyhK4XjNoWLABSAjgodDRqDf2xB2TrAKiX31DAUHi57CWHdNAvmo2JGLqsmwQaPYpzVXsM7ByBiMD",
  "key16": "2bgvKoqv749NHkMjMRpufEx8GwWbowBkufwerJ2LKRSLwVQeqeqvYJkSU5waDhx3mRkEUCozADfHCytCMPp9wM5D",
  "key17": "2xNGM1YFUoi3X6rHRCkihsFwxmqdM2vaNhir81weWHP6jqGuHnUARYayFj7rXMxvyd2ZoFfD5P5yPD6mdjbQFAiw",
  "key18": "ks9KXmnpZQ32p2updSXiHZ15k8CSPcdX4odBgeKq7xHaBGnw6igcFY2BQVvaPT5PAMxEh5cUb25kyW6yB2aaZUu",
  "key19": "2pBcRi9zDfCMuwW7GRndqcox5nd3pK3o2iLwiT2garh17QFh6ck8Y3V11Z8aXyVmq3GrSgShVepBEYdRiJBo9xKL",
  "key20": "n6KLYc2KsHhc665oD7uDVV55epE6iRndWvhuzct1yrDeCuGB34UX8iHkf6q7SZCU3gxNwXpWfDm4FLjGoJ9gURC",
  "key21": "5DUzYWUmPRNDArLi6MvxxKNxPQ6xCF4Gmo2mQLtjP3fvmfU95quMwutAWcYWLwyLB5daZ5KhtWrRmSogQYjRq1zq",
  "key22": "4WKAZqztVQ8VPqTddUzHxS3P2oZT461pCE6yNPX3wgfEhBdWLshznmRaez7ayBJ6zstjwKVmWMVxipUkVSFGiRBE",
  "key23": "26sMEfQbWKLehkNGnJrUmaYhLmhanr4PntgxfDiN4bgYC6xC3ZrGC5QqoEnPnEDS7hXh6BA9cgybhimJHVgL4cmj",
  "key24": "5npbYFFg6efaJZWrtnkFxWrZxobVcJRUJWyk23VYwNaUvQVQFt2Z82XdQkBZAnut5U1Mamw7qqQ8GwpzYYj24jwK",
  "key25": "4CkjEKmp3CsrHjYxhrbYwiyZU1Gq9wpF1XEWZv4i9gfMgKyGqNDT8MxmpamvJeaVxGS26p6KnMXdW2adRhBQko7w",
  "key26": "2TvCR9UtR5Mk8Abg2eSfpRPhXgWjKKpELGH53dUMeQtHAm913zCTVnVbY5JfGqpLkGmM2qwLNUjCdJy1FmPGMuJQ",
  "key27": "49bBMFoZWqvTL854LDVpXVjZm4ePZLZbcC9rgnPHzihFsu1Hp4rQiYWSLJ3SW7XdeHH3GScQuEUYTk3MokY2YXBB",
  "key28": "bRhMimyVWxMZx7S8Jv4hdnSUb9TKPLvHBxmRmfGY6Pf7wiiSGJ2b8MFLyyLroFwLjAxkdUCrJ3dpSioy2At15MH",
  "key29": "bkTyJXuRT2Kpy1XCZoHC1GZuSkE5tcUwxg8dKgQHj3sCLo2i2fdM6thgF4jdzsR62SoTXAeyD6iejeqMkSgDjB1",
  "key30": "GmKYfp47jKvgBhFz5JLgPXbLDiwJR7YaRKtGYqK9F6x4BP7sSqEaA9ts4ZMEq11j4cjgH2MnqL7Ggz39yRcE7Et",
  "key31": "5wYvCnSneWrhYnt7xFRkzsxRhnRx4vTnQqYPrXxiuCefBmKusGno5VFsFhHC9QxarZgi982ud3Q6xVCUeQyHpQfr",
  "key32": "48KfMY4ptn7jc1E7K5MZhebuk9wNSorX3xvLmfrSRifFdE9yMsswx6cvd7rSv5JAM9xR6yBYNFNRxZ5fzdB6KMFv",
  "key33": "5grKhU7CxJu5fp9iwfZG5Ra9KJrZj6n2hy8nivYDFmTkpx8gHUYyses13woMiq5n1HTTFe5CZVusnkrmc7BeLFRx",
  "key34": "5d254HZZhoMfE3wpP5g93o3J5hM2Euk2eLWc3GLv84smTeLGZQWBkMpxqfLimDa82DwjVDEAzUteSZvt4DLfBqZF",
  "key35": "4AP8aVPxajhRBen9nz9MqtYByEVSFtLCYkWENFSf8CaD5LpGcZE95AsMsSNciePfPrPhuBRD5xGbgrBD3gzXqQs3",
  "key36": "3HJDrEN2XMKFj2K79sZgGpuYY9spwrJZJQiz53MgMu56pfkut9LVnaZdqMeW7hBC8VqeSW64neoo6sjERrTvcKLd",
  "key37": "5M63mA6SxqqxVXLuAau85GcSeZ1WMfCA4aTcRY4i8AbSUiK8nSDpWXFtEMrmp6tkRSWMSjrgwbJuEyh4fbgx5Wsj",
  "key38": "Qg853CNxeZ5WZwjnDUVdSaC29vbizRMenovvijMnKeXX3QsbuANsq7vRe6fxm1fPvx3ACPUtcpiCXi39iDkR4gE",
  "key39": "5rukbw78UD8rn9VfM3m6fayYCeDx63aCtvfvQrDL5TVin8AqQawxUudWBpnDpMQxXuWWKwa3vf8rr5ANej5puQsF",
  "key40": "9mHJnnzdGBXkm4cL2KLEJtKokU5VKjbPq6aViG7qr4DiixGoFH255B57FRg9UGXHkaQPi3cDyKUngZ24d6pZDvf",
  "key41": "5GmfiUjmynYV9z7VwuDzFpLnVGsBxANKv5GvdBuVyzhVQad9nRfPm6nSTNG78yxQfPwnNnfGmrbCLQoz3UboRzpj",
  "key42": "57rv7u7w8xvZU7a1HovkVDdwWULTy7dBysHEKiZ6gFQDNDuVH6LeYC3hrvwhF97eLEyiTG8gDKZD38vDJkcua4bX",
  "key43": "5BUcdXbBs66KaVdubALDVweCspPUdxrgbt2HGjx7aPSMwhiwqqrxpYUhwwsCtqEAiGURd8TQQpeacZ9dRDcRpiNj"
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
