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
    "28utLz8WBVs4NqBQJEZ3EH35Yugm5R2sjZxNapfA9zJ5puy8jCXK1dJML87Yuc5Rd3rGfVkjTk8DxhH291GheVqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXaAUH9c7LTJkd5h4tsiukcehnesaWd59sLfTBFGxLrVpWP847oVLXvxGR74HysqcMSxHPb2pdykEn1sEDnEvPD",
  "key1": "2yVzyLagQQTiZFmChEiJLiZbvQV5zwcqNxTbPzhjG2GiW85sccEoibaUAm8HFnXwdr2Ep454GAJvdG4WYKiH6wYt",
  "key2": "276gQBbekWBNzbjgsEQDNoFWHhrbeZG9YFiXx4aExAE5cYYtj77kZLtHeG2L6hs8qy73MsnyQQX1TTanecMzJ4PL",
  "key3": "28cpcZ1VtRTaepVD9WuFN1uQ49pEqyGS2uPgr81voZkKTtWCjKeGQqFDatRz2LMocPSqog85xbfXy4EVsF31pvKJ",
  "key4": "4qd3CSGb28UXW8JrnbYrLLVsxAWL8M3kLw8vjB8GsNH886ApEGeeAUX7XAVDMmp1amQRdw7Bk9NsbUzQ4nUp82xY",
  "key5": "3YuMGiRjwLEooZU8z5TdnMCyVitdntjxwRTRyc2UzVWwEyksxiJwDUyWXfR7y2SyZmfMkFWRhzC34TxMU3eCpX8p",
  "key6": "m32AdgdbS5kK3pTJ9LVELv34E6KiJKSbfekQaMePMw4qfLcqy21azv9ENLGrL3gFCf1sqSc17szZXnfYcNcxJoi",
  "key7": "3dLJBoh8qS9Smanhx7Xn97kh57QFWvLLFKjdpfWZr6V4ES15ommSPFHxgNRyxVirTnkCarzmz92dArNBFannnuC8",
  "key8": "5zknQHhuCPRVepHTtsCniBqKMFad5bu66ReHopHF7pBCB7vUjxUcvJVKqkEEi24BPomYaAkWRfGaqrGyu4hEn77A",
  "key9": "4eQTi6LymCH8SnyPFW6PYse2cnC3h9VZM49DFaDUFvV3ThmrzhVff5vAya4hCehw54yoJNA1ujF3UeYM1NL35py7",
  "key10": "5zQFhNthAS5PevCLCvre2a5yrB3pYH3NzDBZGXdwS1xMsr9tgzSEbzgaxMSZ5Ty5i4JHYo5K7tLMQbDn8SGn6aZT",
  "key11": "5WCeh35B6YscUZ5SqiYUprt5ENth7RmqrYii5kSXTU2aie83XnCKie1d5k9ZXze9qmk4rg4nCZ4D6Tn4JnKV7486",
  "key12": "5wpUiiXAn8dcSFDwLUZuMimqyxz9nPvygpM9UENM2QEo59f1UhLDqay4BkVCTqp98xB7W9cCUKLYWmHjvfFekm96",
  "key13": "3MqrvAGp6kicSmiUsun3kWywwUJZ9fJnzw9vE53qBLbhHrqj37CMCv8N29AUFT7dBYZYcXKxeMP6tTjRdvHYCtj2",
  "key14": "5xqfnqs3n2A9WsyCYNVXkW8aKUfkHAQRbhSNoQa1AvjiNrqJiPeCTC1WRaiYduave16B87tifTcWbvVyfcW1uUgS",
  "key15": "bb5tkFmV8EQWhjhFB1GPz39GB5d4jLZa3rCaqzJm7uSgc5DHeCnqxpZ5EUmJFFEVjToz6GXtX211fzxuJ4VZYTu",
  "key16": "zuz4bKHdQAkCzBketEu5V6JLDFC3L7uyBugBDcREcGH5sRRSbitccbAC1h9FR6E3gTWVXTgTAqziRYzGSkGN57D",
  "key17": "3kd2Z6hiv3WsmPXhJRtoCW3BYuNv6zZwFfQiK7tTP29gg1inB7q4xMXhwzxU6VA9KxYT4GhvBHgEE2LeFY6Z24uM",
  "key18": "2Mhf5S5o4g6qXq6BnVcaYF4GaSQDa61FLp9AqGijBwhk25yLSjYkXQK6MVc7BcxbjiovfoAoihzxo3FZTquXNvZL",
  "key19": "3iujHCkyrwyyCvUcXVqRRDmuWC5Qs1pdCJd8NF4nJseaQueFi3fiBDHMCvqdEwwM8L2MetkS3oZzh8SQbbgkxrBd",
  "key20": "4c8tHHjaLrNZwimPx44bcrTaJGGcrBQueZpR3GdrE29NCNpasN15dWHFLF8HarTcRUKhpcGnrrbZgYJqdWN9kZXq",
  "key21": "4E7Qeq3hJj8s5qYe7qLzB4qBAqHTUzH3nXfFiksF2c7WG4HZy6sDbbSL2515YH9n8zLbYCCX3ZysjXzpBVSFBJpd",
  "key22": "B8DDvT9tbR1aKoM36r3duu1pe3iASWwSzfU6KWDej2sjVZMW3JLNuhmF3E3JsCGW1zMRK3nHxBEHbRFFAdrFzk8",
  "key23": "e5pD52EHHMm347n5KHVUasHjChqVPzXkjFzGSD6At2ZSgaPVfdxSkvcJ3Tu32asvFgHyj8d9Y64ptdLaj9dcLjd",
  "key24": "4FCxR5z7RwGZQqqrqSwoYKzjpig6XDcuvLMmPuE2yTgi8JdoarM6wCifZmfF3jcD4ws1FYvQd6Z287nMZicSutp2",
  "key25": "2RgDgrCSkM6xbSykQAAxBfJ8m2YTz11yJCJGxt6DC7CpiS5CujLAFtQ8vxy6rMbeLo1GiEqommstgmm1KzAGAbTx",
  "key26": "5iyPt939fMojsiYfU4L5TbWapHhTWfbDj9s38ag6QLoiQvwcLaS9qrJMUjDzyEwDZEito1K66r4iaveVHMdFvrUo",
  "key27": "3LqK75LBKjYY8KJinQinwW3Zn9rtLg2yAUa6zXWv61ef6a4fnwKciAS6YGWGwS4JPCEYEgwqooGkzc7mJa1mP8qN",
  "key28": "dRTXijJW5MMppde5sVuzJGAY6CVciTNiRTXUWP6Vf6o75rUE5ZgsRuvX1G6pCfd2qu4xZxGEfSeymDjoWh7HFKN",
  "key29": "P4waRsnchkWgBCcB9Az2b5TD6NLm5SbkRspuJxYgdSc3prNtXptyai4mYM82VccodAKWR1ChJpEQr3tiSvZXWNp",
  "key30": "5MEsxnyGJdjttUfrkJJZkfhgsNK24PYve2HvEWGq6aR2Ywn7o2xDtfqu3j7Vj2iSK5YAJMyBsiPe7VeJpZnzCTr3",
  "key31": "frEmUttLnW8BkZ5nTQ5xAeNEit4yVwUHMv16pFgbx9XwAX8W6QeXxLvfvsFfaCq2mWjef7ypezksyryFtEBJoYe",
  "key32": "2kvVvze9CfXcjBmZTrwosXj9YFCWstkMK9UmoYJ4jouGjCyUzv25h2TLDu4iiCJdnc3X9enzw2iUsj8bizHeUeFF",
  "key33": "3YdAGwYj3DPTfAEgufS8GeLJh8kUsABZZYUZK6tXFDNDwk7hxCcC4DMrh1EZNzUPL9y25J8h3EFLjJFsP8joCYBi",
  "key34": "pbggaFfFnyD4aAJFh91Nn9vzTu4Dz9Jc2tyyLHW5VDFJ4C8twp4jBPZmnxtJrPumkBscjr8BGu9XEDY71kiYnLr",
  "key35": "5VaVhPe8VMFePFZnWLb2Gd5LwoDnbfNm9z3Bz3UNH3BnhGfRZvi6ggvZhRCdSGCfhTQzAk6ivE68LvLBK52L4huC",
  "key36": "3FDZRzi4xfZ9bYS2jMGWTZvtArZGLueLn3to1BwsqeDUsJA51s1sFdAdiZQgjcWDGNa96gYf9QX1ZwX1mJBk3v6o",
  "key37": "2X9BxaA2vLyGMN72FKLwzgh2FBC3S2qChzz4HKiwiLMBqunQr6SE3C9oJVYoNc7ebFxAeh8xvT2onqkGoKwxE2hF",
  "key38": "59n86ZHGtsMwXvNxC44NKZHWWGurFtG67WjzCiug2sSo26F9THDY9kV6gSWRK67kKaebFaa8r5HfKiN29YcMEL2a",
  "key39": "2Nc8QWqkxpFSTy8fc2DsaoWYMD7ovGBXhz5aifWoQFnZV9jjLcHHKyLNgD2sYkECJB6n8JS3HEPiEUTY5djpvTdK",
  "key40": "3tGEbTEVigEk4EMExzBpxe3zUU1sv7dMoJni2PV5EhR9juhrFomremZxc8fwFeCg8YW2dMeZWv6SP4R2kBnwJvBy",
  "key41": "4bPjujkToDxmEmJEi5BPk8KnWX2KdXqEin4NhQ1vW9g1fwBH7RVHqpdJx6DLFAMDnxbwW9ntZh8usyBqctmQApRV",
  "key42": "4xXJUD3CAZ5hnK9uf1m2FkZXS1kZ5wR5DCZf83aiAc9WypV4R9KvDyZQVi88X9JZJBCcWVa6RYcP7MPucp9EnsgE",
  "key43": "21yyzkgs1QNmf3KVdK1ppahosBjcCLaVh42yyrUP4XBZis6sFiFhAeqYBJqHr5Q8i4yFqjQoUSNr7VciY4A2cAWL"
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
