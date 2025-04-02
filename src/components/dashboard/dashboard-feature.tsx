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
    "5cvch5wqw7dkAxaBe5hi7PXGGkimgRfT2h9NR3vEAgei5bxdunUT7oofYY56Mi2KFV4aeix5u35iVsmBm3c9KWGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JVAGod362eiVZ6ANbgQRFK8zP4oyMdf7YZaZDGyZFsEUkRm6SbgUd9tjji2cehYaDhPtGQKmVydEYLaJmvnmwb",
  "key1": "28Rhpa7kVUp4j53enjH7ookdp48jGv7QvDCdP76ytkwrRs1NfDmQVZ1cZoyiS9KiD8eMesZXZM7ogjrgkqFq4shL",
  "key2": "KvXtxq7Uhg2iGZtrnFjLuG36k1gowAjWo3Hdfh73dtz5hRP6Z9W6QSZ8NYDRRbyaHC9RL7J5GDLgMJ3yrGawtsE",
  "key3": "Xi2mwcrZCi6QQcH8YdPgvscKiupEBx6EKiBg8XU29Pd7kBEXwYYK6YdXvd4LrYkdwtDfjBUb87gKKL7m1QG2UKz",
  "key4": "23xzJZdo8i71UHZ7q9T9JKNZiHJacJwHUrYsMmBaN1X6tk1hNSy7bnYfDdfbyALjTaNYBxv9q1RGuuC6pFXTsn1c",
  "key5": "fmnAJAqWoqsn8TPPNJiephXL75PossrKXMuyH8cbkWe2VtKBhTEdGn7x34Svh64X4buoLG7GnZPERh5GmtsS96R",
  "key6": "tYkncTYQVJ5nWzQq6NcNZKMqUiVewYmZLtxkPwHtKMFMuR9L3qqXLWt73AAC9Nk1ri15yjfvUb9nE53dv3htQ3u",
  "key7": "3BtNAsZ5eKHmVYhY2nxnymczYj2YXUX3ZCUDpRezbJuDjRiWkonc9Dywna24w8oW7sfF22wCryTcg3vYVEpkhCvZ",
  "key8": "xzie82tr8AU7rTw5BFzHynMgMy6NBq22AWc6oHauySiAzLQLanQv7kt3rti5PHP9i8ywC6NTzGLXLJLKHLgG2oi",
  "key9": "2mmXs3X1hoNTXk3oFf2tgfX472ZVHNKTjd8C8Z92vZt1N5bCVo4L8L1XtZ5RGBQwmvdR3nzZP9pz1HuEfAdhidpS",
  "key10": "Pad88TkExPbbaWaFZMkFD1JrfiNXbnnjHLBoGZhrfJ9ysS3bUQ3hhvhVBtcJDii23aPxzgEFEZggn2tWkY5uLM8",
  "key11": "2bwa2jGbA3qo4BQ9qDNsBAjMwnQTJoJ12syufRhc5N9MGA4MP6A2fZyZiHp9AmG3gKt1yLyxJdNXg35L82txWjTF",
  "key12": "3tgW5aFxY2E6RrammyMqu6w5EKEEGSzn7c2LfF3Ti3Jgb6btVbwg14xNf34skMVDfsq9jTXLoXk82W6ea5PKMqtU",
  "key13": "4K95WjivPv7wPtNtNzrPmiXmtX4F7sL9CqWoZmEYoch9WaxWBxu6vjJdWobdk4oDGFKRzDA2HWcH1Kuq2F1Ng7N1",
  "key14": "3YXhWnW6XBXw3Hpcmk3qsmuHLM9kZk8T3QVyY8syW6dU3T1g8wYBBQCDtaSe3ujG56cvshxcjWr3c2hiuQzorCgW",
  "key15": "3jqMpmqGNcP4ZtVaAn5LZ9F2t8uyxeGifeWrdYkbRCXeCr4j5rjHa7J69UQFTqyAXLmQr3Fze3bLujNgYRwEzXGR",
  "key16": "3hRMbR8BcvzckakjBPo8sPx5JF4KUj7TFss3GRdU7qc4fupS2M1hfexbpXVAb4pbJFbBogJ2gMWkSmRqHQhAuFvT",
  "key17": "2tZa87jtj1MJsw4zgBete1TR9Wiv84HSkkUyuwMZWTboNey5ugMPr1fA11a6FMswdZYaE9fb1hqdTPGym2hKjKuu",
  "key18": "3zDT3ekXJDH2ndsffHTMFCriP5KPyH7iLGMvWQgidPZr4yt8wUP2dH87QdyE39E5wShcwnKX1y8DAzZq4953VFR7",
  "key19": "2P3k682ABw8gzDHWemSjAmJVcJLN5NG1QzUa5ZZkmBuzPeCohV9aE26PHAQeKdGYHR6ajzSo7h6nzugxoKbTbJp6",
  "key20": "5BqEvfW5atZzPZrtX39snWjbFhMq4kNy3zySzTUXXRyqagpHHGuZzVr8sZpAk2G1J2AWE1K9pkboAg9s97MANXbz",
  "key21": "2hMmg7JcFYJQZjQyDwP65jyqVSuwQd37XvSdAgNDnRx3MgnMGSdMRUMAgqqV1prKsZgJvxpwgqwohfa7A9fpxoiV",
  "key22": "Uan21kPxgY4KEj8tyw7r1qqyYqi9sV6k3qWk3cEY48UfzjsKuZdAeyGW9izjTzVAygUheG9zde4DXdpdXrpaiuo",
  "key23": "4tyaZLcPDYYd2jV7JS9sPcDJVQoMmXuWbDTBcAhPrQXjxPhobkwMQzyJe8GhdQq8aVxvm6uvKyH3TEDER1B1w7tc",
  "key24": "2kRNkEzRnvbkTts9Cvywn4ahYhNiUJ9uu96H6xfyr9ot24VYiG58knMriLVrSRzUDY8gv6vaamQnKUZiTswwuuts",
  "key25": "2u7EKWN1Jr4qKYzhUTpshBV5t4cjU1h41p47bbBqBFD13ZH8gn4DcFBiTpHPZD5h5DRuPtvk3K2fvS2Zmi33y6k6",
  "key26": "2skdQsfY56W91UpPtzXTsrg8CMqwc6EGQVLXvwyuygHjowkdX136XfogC7Xr3ZsG3aEf2SrnXcvWFCTGP1gnDtGA",
  "key27": "GwW3fwc9M3zWJAe4ciGrvDCnNtKJYqbLd4be4eLu6dD1mud7F4hTVNDhCY8a4WNc8Y2zWaRCACiTSyuEkdoZ6Yo",
  "key28": "5en43rC9v7rqLs87zdo9Un4JTnu9DpDKnUg6E9sXcyaimBATtd1LVjEp1b3PXj4JfotSAB41vKqohXxymDu9jXWo",
  "key29": "4JBDpEzW7jqb6ZRYPWER2xWPtij1jrNv2FXY8kAGk37cB6HqKc3zhJBKifSdiVYbkX9kfzWJ6XXcwGfqRs3kJywo",
  "key30": "4E1qXwAowaXNnKYkUqabyEk85Nemcaqq86pgfkxY7TQ67zW8wZGW9DQdRGswdfonH7U8tVmMHpfmawKGpisLpbGf",
  "key31": "2bdSNYcWyfVoymQAJBb5T38StcPB1YoMkPGYfAZXuPRXf27rSaaH9ZHT82qYE1yACUiquZEj8vewuny8pY1AYpaJ",
  "key32": "2n5NQB7Yt28ywB4i4x3wzzLNgMpbR9pbHcSSb7BJcSAz8QvRtUcrx37zcUBAA5A4W74PX59UA5inux3U4c5jZ8E8"
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
