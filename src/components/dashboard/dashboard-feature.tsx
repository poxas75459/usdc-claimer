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
    "46E7uB3GZ3kUGMx5eKpYkZe1U7SkeM8rQA5NQf1TnswYNY5ykeVQu3KLiNZSt8mxcVbZ4TbDUxB5HEZALZhniDz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23tqDVXqQiD97vqeNUwjyRmrBN1bAy1nFmehayNENS8xFHm7FPmATcU3huM8ZrWkvRHr2emZDgTBp3z1CeQQQEX3",
  "key1": "62eb35PTeiP899x8Vkwmur24CMFz16AgrPdmskJ4gRxKTYEnCa6xs9gWWsCpm3aAdkSdPL9Fy1rakHvaYAHDjSyp",
  "key2": "ggQJeoW5xup45AcZev1pwR8Psqj45PneW5Q62YrEQSUXUD3d1Rb5o6AftCDDQ1A7YEGzSeL1UbBV9bZtSzuGV4j",
  "key3": "4cWszjgL4CSSmaGuUGqRURvAvmPLzksM1UEjT6NTAToR7nEjCvj7icHECSBmby2P4r799HepEC7MW8jFCkYWzJng",
  "key4": "4PT3qrUKacn86opKinVZFqh9mEGSr7ekXLt6TaXZk5qN4h5A1nC2pZdMBAitqwHT9MHgkvRpZxCgseg38YbpQ9QF",
  "key5": "3JTNEvsp4zkUzSoBU7HQD3ZUdtmJ5FvHd4FFC7bwZkSi7mvyTFcnWKCfttoSF5SPgnhRbLdtSyYWos5RH4Mq841d",
  "key6": "5J1ZNtTVJyinAXCbcNNsuV7LnyaqriXgR1YeidfUzvmFCrrhTtMWHcptJyhuvdKHGz1NzDE7N8EF7Ljjhppuv7wA",
  "key7": "umEwFQypo1U3wGiz2YmtCYjifPZENqfp9LFjMmiewGewjjDcBxjYBcBfap2v4FF1mJzNSSTTTVWyY8AUawiMnzD",
  "key8": "2mJDWeucwjjFPTfKgezqTqj6i5aXZjEUkYP2BKg44mnPWuVfjpZSHLQFWGLcurJaqSXUKH5R6AR9z1xK1WQXfhyt",
  "key9": "4cLqtBToLRkTFYe6aiaB7sHiwf3MXXJguqT8zt8m6a8sd9jdyBUyZcyPJF8oh7qbknp1LE66wHpU2npLefrCsDqw",
  "key10": "2HDVjj1mChWoUFtJmjZv9NXr8b5cpuGFT33tTsWWcFN6zERPAQwJNcSwJT14yGL36cfd2zWGN2ugwdVwscBC7zVT",
  "key11": "3Z1f9GjvMJiA4Bkv5FMJCrgffEqtAAHRAmeBP2MjQtvcTdTDy9XVtJJAgoSSSQMqQzjGt7Xmp9DBjhYwcDAB99uc",
  "key12": "51hBWr4C9jskRWwCctfpwS4s9FPyVHZBf78K5hHkKpkMhA3CABKkfK2V6suef6NPZEipsctkdqfDCJkUMc2QpKY3",
  "key13": "5DDAiyCyj9H5ezN1sMAkv333PUGvh28rayCUWTiervY8UUxfT3etP2EyteBfbh8K3JC6RAGTZYcBxkAoQhUzmDK1",
  "key14": "2sCsyir67Asa3WUgTfZJSN8NE9HA66Wa6r3jRkRTVzMubXhmoXhgrBya79qckyAMQyYA3t6eaPFJC7SjyDJe9mh",
  "key15": "3cn52UbfRQKts3Guydn1RSBHHygeCLq2RYqTHVYHzWqaUvdueuBx2YzB6XRJQLucZfNv245hXGYwX1dx2UrQFdoG",
  "key16": "3sPwYXB8my2pyawGD9QSEKbpurkNwxponapYRuAwi4kWJ529SUSe5rskwviynNS9uLxzuVv7X8LrppX1yn7Ac4LT",
  "key17": "5zizFm927PusxMvKjH5RcStaZoaiZmoMN735UiJn2v76ttvYyVPNRArdpYS4EDoPoE6iVb1CtEEeZ4sdPvrqJjCB",
  "key18": "2r7GfcFZUqYKd8AbiNhVs4SuUmc5egQ3oUSJiedtGcJdomRza7gQkoeW61uCYJ7xg13QxENUJ7zyY1es2coETjPs",
  "key19": "3LkDeixXXGkkuxPqiySJ7S5pfxrXYfbUH7tc1hcSjySnmg8unkyD3b772DqHe88TpfEvmUbErj5eWSzNKrZjSg6m",
  "key20": "5tbtajJKB77PPqcyivMeoCFvUAh3fE574GXQkcFiUGbhSoBde2k31nWf3QTXifKMtqc6zJ7TumpV9SL1kWrLziX1",
  "key21": "36gLyrNsrt9XBuV83fgd6xmu4ySMQM67oaiHSZJGiBDm2TEBhqTeZUD1iv54uRXqbye3TmPTkjNUs9uLcKoJmJq6",
  "key22": "Mt66vR6XdgPtYrBcpf8p9WfTwme6Yn3qQVrbg1WUHFhkJnkbdkoBH2WwELhQNSjJVQMTgioba8fyB18qfFs8sn3",
  "key23": "5LuyeybTKDJeGt3yrs69mfhdGux8kdPFTdTvzxu8LbUt9gNYoVhfzvWKicP5WZsE5oJA8m1kFXsSwbMg8r4KVtAR",
  "key24": "5h4aXg2tjoqKnpSu3neC5WwfGwyAJQQj1u1C3uVGEFNcqaR64G7Pb5JVTF8QNznYj7V4wmyXP9ZeL5dmgEmDj7Xs",
  "key25": "4bSEdUJomP2bBKCtZkvjYFJL23qGL2ngvQqex9J5C2cRPxBpkBxmWJXkCwAjubh8z9zCPyNJyzDH6hUdDS1sUAnh",
  "key26": "9Zp6pxzzCg1b9CGLjCnCR6QFo1SSK5NveccrGhUwWRnsDQc2SRAr8apj8RTZJrCfuq7ZTkZvcPW2dwVr1rbNqXF",
  "key27": "3Lj2WP3U4oHxP9KATGpnxaUNzmHfGNnLTmKhKcD1a3argrykyAKwrRUEnZJhjHZgEhotJFcaV5uztwifNasYgPs3",
  "key28": "sppXST1hHfFoYemNAZ8djvPqZBhVUvd4nkibbyeFSWUsPmHAYgcKe49TEJoudd2r1cbyqBLYvTrcL174VKY3Zg7",
  "key29": "5EH9FtgyVo3bBodLRwKX9ki4C8BnFCL5uGxTfaCzRMHNp2RTjQXaaXBBN9hN5CF9c8H38uQBELb1Sd3S47PxSfoz",
  "key30": "4YJHBv3eAY7XaFiicTftDWZabCY8pfu5CFxYnUbp66Fv6B5ec8wvq7P14ceghwx19MNZm7o8f4NE5rfFqSUoWbKv",
  "key31": "4VQKQP9UN1eZswMTDW48naNVN2QxAZ6nwPbD2VoSkaXB3YzyWCWmTLyzmYr7uVNvsCo5YKFRSq7HTU5UxWGfJZNs",
  "key32": "2J2LqqaxobqH5VxSoTTo8UUCEi1XqwUMtHErywxA6hxw6C9duXU9zS7DvQiaYMEzkMJ3zqQ7KKU7FYXtoPRwwJ1Z",
  "key33": "5a9MEBmd9aLEssBoqBd8M5A36QqKz3VHySchk7XmNUk5Nr2wRwN1u5V3ar7VfJcC5Et3ghvx2LHGutxbMqCCooz9",
  "key34": "4b3QJUyJgguCdZDA2CH95f1YSqf25RZ6fmc45sAWGqEJirwdhqdXBwRHfnFoLEmoKddYuDfwx9g3SotCrfmzXxM8"
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
