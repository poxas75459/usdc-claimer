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
    "2Luze3fqeasw1iRbkECHhSysxLmyhNtxdc5fpKkDVdNt1uueuq9NTokxTqjDigeKugABj83Wf85HR4wrtBQNm9nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8LJ4Z9D2kuFdTBHsDnvrpUfxXo7AL3559erSnhUrwWN6AsEs3AxoefndXcebKMWc955aM6AsJfXv12x87gMQshs",
  "key1": "63TNuoH4TRMuhGdJnduUEx2fFzUDt8ptCUV1cELiLyjmBcjY8LJkcMnjwYd3qLa2gk2oseQDGGGgJc45rNncsKjz",
  "key2": "4TgjV91BrKBzxyjgb8NRaBG6ybbLcFV3j99e5yEkEGNzuFGuvV42GHJYvLxshYFzu4Hm28PJcTH7aj4VeM61FY8Y",
  "key3": "yBWXJHy8PKYCDLkLjYT2NsMaUWnhcSgL5npRMnQY7Bf8ipyrn6ZhqKtN3Bxqoc5gruM45d6TDvzAmUZTuNmMgi7",
  "key4": "5QyBN3GiJr9Eo8etnweFwvpouwszeekQnuYXmKXV3eWnZgzyFmoEVMrw5RVibaxXabfYeBkiLCtsrUufLe933gu6",
  "key5": "4kbkpnnASHkWbyABAFibxyqMANzydP8P4AkFqsb9p6LiKpYp313b5W7R1QZDGFRp6hrkjs5x89onZy9TnDMW5Lgi",
  "key6": "5LD3DmU3mBcziQigrf21SY5uKbpf3j8uy3UG9CHbR98gZcFNmzTFKKfWNteFV6B9y3UGHGFKKHtnQXQVrB8v3T5T",
  "key7": "3w1gZyarQWY1Rf5KzB2J1D1BryXEUwZzLzooPAEJ4HJhJckEYWyS1rzF1J9niL8n5rFThU7EAP3V3XAn5hUse1VX",
  "key8": "sLqLkSEbUQgApYTawDzBA38pygvHk9nf2dZznTpY6EWNgTfSqLpKN7UsAusVnzR99G7Amz2mrbd1epkd4B5rdnR",
  "key9": "2iDtyZPu3e9P4RZvspwo2ZYdyP6RvGkk9avDz8bX3pFqcNrHSoVF2cZbk8zaaPsHPYGXSGfawqVSQGSSKSTu6Hxe",
  "key10": "fMCfWoDeLnR5Uz8897aEvtneMnuTzYcVQ41cZS6jLK7fVSihHS3Uv5iHmnLcjDoxrpBfbPQDT5eHVTyPd7BksnV",
  "key11": "2wZFHkVkYjdoBNcW5XC6KDBMr1zuvQx2yCu7ge2mgKXtWcr7m2Gc9wM3pr6nSkcbN3ox7MMLXDVPyAzxewVdPeug",
  "key12": "5L6set77nAr6x18P8ReVj6wUZDwmB1LzJAZuEafTiq4u4Z5Z39FNoFck1GCZg3JxEvdAsPM2HFXkLGovt5uqPVkm",
  "key13": "2QwdYZcgXgL24yUtVJqdAEhaY9dN9WCwiQUbPmqTqvHWuuudsMy8AtQDizF1VARb7CrXiyXhZfSQ88wW37xKdb1q",
  "key14": "5Qnbo4nMpWvJsErycpco2WbQG4ejva9QrqA57TLu6svTyp1PNYCrP5EJSEtbVdrnEuzGjaZTqALk67W5TSHr7LdU",
  "key15": "5ne4MvLqT6qVPT1Dn4a8KyRGwmVUEuAs9Ug8nMoDyzeK3voqFwHci6ZhuZHvRXx1e9TGTx2YGkBf1djhdSRha85b",
  "key16": "2nmHRfizGeuMpQh3hCqN99pWAJYVkP5GPxNC2GnR1Lz7oVynDjtStdF8tuFPzPLtgSqzvJyPcoedsSSvKEPETVJK",
  "key17": "2We4fmQkmtZam8iJ29gr4BEt28cvKby9p7MNCWjpMXXUbHh5bBN5376tBYbdUgCcpPfhtPeGXt7XCsV9hF2dFG6U",
  "key18": "gWt8z8eKrYuBZYKWjcKzuQGw7nhLVnsVSVsL67sdQiJDYwt7VfvXv9ADty5ipzd8238WYuM2PaJH7eLj9GQhQDQ",
  "key19": "4xw4LZtdDsnmRU8dFMViAmDrJWYxepRzY8JjL3mjtDtkP54osgUi8ShntFdMSWAU4qVs2HJTMri7HiAkGH7BanQR",
  "key20": "3TXW6qFZPDtvVashZH7z8zqVXtdJcEJyspAH5bZh5oesH133AsdEvyCRdGnfAQCjZTF3FxfXwVxRxqKCSgYF2GnQ",
  "key21": "5GtEuMMdBZ2z4w5ekprBd3hSQypFRupRwUNwR4HoDA1zVVWRChdJMdeckbm7CaGU6HcEMv4d9DW7mc44ERC16ytU",
  "key22": "35tVky5pjq6nx4vdt95YcstyJdp7WTykmhNzXXrdrT1SzFK2zfd5DzWhjF34qaYMqJQyPkwKdHqMYXMohcXDx5qE",
  "key23": "2te3cuLrroVXF7PtFWQjmxEsuFaKzPoxgLpEGPLP2ah8Xh7k9rTC3MMZkHn8useygUt4Ko1m32m8We3gv1K5ZZfx",
  "key24": "2yXSYteSw6Z23kdcstDk5EkprgVnbL7jS85GL5QAHFpjD8DuNRFdxdPXic7Yywf9KFHTAmDp8UJgv8FY2ojRPNr1",
  "key25": "5kccdKY8rEUaVJiJSRy6AMGGLy5xo7NRTFLyZdPJYzd8ZNMB3sMfneZRv6teUueEeR84up57L6BVrrHKHtV34XXu",
  "key26": "5d7BRB6uyNZJegaKBmTDsmcrnhpus4KFmmHWFwRYwhg3eMvPyjgk6pbvfujrA79kC2b1mTtedvFKfKF6rHntzidp",
  "key27": "3nY26NEATvKqUpMNkCE32huCd1AMnrNT5oDTrTNbDv2pbaQpaeiwmYMtHEB13ao9W9dYGBoPLpG7d5SCTz9x6wgk",
  "key28": "3ybuALXjuuNkuN3BTpwHm2wZgFaaFdNLKPRcSQv9SHhKo2WYQV6pT3uHferjTsSCEV3nP7Ln8H44Jk4HrgEuoJc3",
  "key29": "3mgi25997aFffwGvAVKhodsHEZGXCVNFi6GYCac4hckpTwZjTjFwTtR8ULtf52fQcuZ4WP7FMThDNpL2H5eNUTGK",
  "key30": "4anBoAVNPkuYBVj5VMEUrhFBXfWK8pgJrnkJ4wsUqE2hLBY5aHcEMMP8URkXodrNMDFbCba8npgTfMpaHnyPR4k3",
  "key31": "2LYqfSsV9eT3RyVapUsAQJz7LZUzys7EriEBC7EoQd9WWpLwcK3Y65tmNK8WtCaP9qy1wa5fVUcm4nvv7mVWEKcL",
  "key32": "JgzZiYYYtCiiz82dQrLH3t9MikvUFntB39rELoFKtwGdcsARjhjCKnUDADvgdJu2fo8T6DMu7sQrZ6QNZGaRqSE",
  "key33": "3jyunWHgLZeLmzoeZBSUnK78CGMaKgPHVgwGrXvbP3zp3MQGFJ1XWNoGzC9wxPnNHeyCGcJxzVYit4qLtXdcCHqH",
  "key34": "3haX4pcEHy7zwjg4jhtSheESqod1CEs61FNMXytreKt6F1L17sH8rPTHUH8WtrLKdccwXDS1fLgib93DR7NGx3HB",
  "key35": "5m38GpSEAXoQX46w5KC38FCPi4KrjnB7QL5nz6y4obrEWX66UNtp1tjSWnkHjqT9yA9giDXAtjpCVLUQN2XvygBp",
  "key36": "25cakmr2nNtRrodhv2GTQMrqBZiT3DJDiWdXWfFEVq1XacDemXbTaYtTSLZgfmzfvuGNHuFzD6DKrFJoBp7Uengv",
  "key37": "2hDqnTjzZFGbyN33yMwGEj6KctsH5rM3TRhCWHSGBYeCXXEGGpztfaJDSPGj7JMG75uSxUpL9eQbAqzrPPeLgVMu",
  "key38": "4uF4sHbqqNMw5ZStVrozREucaFzp378xusfEcqcmnf4Wwez9doazQzDuCfoWupnb29jC2WKdJVLYEZBMYfmzAYPX",
  "key39": "5ZvwYdixLFqiKECCxaTPA3PF96eHWbiXr5NUbYdChGPFMp4UWFAdKjxhJDi1Kt4fBDDsRCBvecdC4Q9hkAUzcFS6",
  "key40": "2h6BemXoWcW1MYkEVB8fybxwC2HZHYz2LKMX1t6N7zMbKPbh9iA9XUpfYDK7Uzkqk5eQYz8DNX8ePCoUxsUEvM8p",
  "key41": "61rBpuUGgkCwJS4tK4h8Si1g6Vxvdhpxb1GXS3jYUVVUzjf7XiwCYhddtSHbPBaPCyW9z3m6vDQkRjNcqiaWGoXN",
  "key42": "3UvwwTd3pg5H3fcmV93NzuzgruGSpEsZ4RnGqz2wAXjFhqoJyN8QwErMZt9yx9ZN8RnQQBW1YbznBbY5T8JuKMkh",
  "key43": "5diH6jefR7pTNHC8fiqFgvPC8VSVZXu6eiHbjG38kKjR4GZNUkYbvPDK5ymaWS2KBtSmALggPhNhGuNv2femwYUh",
  "key44": "5azR1UyWk89xAQhR7fDYUbgc5WwUGd1AHY3RENksgZZ8GwTQSbvScTzRN7E4uqVVZ7VqUgQWj1WpEkJR5rBKexHK",
  "key45": "2xhW8ExPvF1xSVxJKo6dwewnG5XbJYCyceve8xxWGQX9pmhk2WeK4ZwRHBxF77Cny9ArzPsf5nLTYgDednayKxjR"
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
