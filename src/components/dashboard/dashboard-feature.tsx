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
    "XaqySQi2RUm9rtKLjhfXDmnETRTGEBcFSL4ESnR9YSFSa5ksmFLGGbwSaSsuhoZGiiUzxJrCyNXZRRZpNQSr8yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcdRdrrY1xed6v4DbqpESUFBUTWZqYiLf54jippKYUxs9Vvuw4CV3mBr79nafNbnCKskLpgqWXpQhJC8M7iKXfY",
  "key1": "3FsDPbqXQ4pe3PB2bMFvGeC6z522UKYaFfruWoBsvQwDwYW7UATDCwmjQqJvRTcpmJcDqxQSU2ZL86XA3JvuW7XW",
  "key2": "39PmMwmzEi19fnNawyfsuUSFHgrKdstBqgnWDKiBd6ePaqyLmkmwcZck7eMweKfGTtjQziymQwx3DjCcMVuH7Ksn",
  "key3": "3QL85NbAVZRx2pPg3nsozDhCWeepC22XMeYVk1x1adMstTBhZVkJurQtrN7zGa9kigSJtMTQJMfCCAxPcvbHNjeM",
  "key4": "2tCsyS1TwkUhkSFUSyihrmAYtBZojN4aV58oLULjQPNgbpAcy8Z8xbSdu8fKppoRoDyU2UyB6LLmp6k4UJiRY4Fx",
  "key5": "4wBDAKksWvgvBC7Z879pf4pRA7pQGA28NEL1jcYcHMZxmJhcRJ5D6WDt1c9uuRb9z8zisLdF5PfXSMi7EYPhd8cP",
  "key6": "3yGiJCDryPtUkVyELDDV5WDaRji1QubvF6h7W9eZZq9j4Uj58u4PmA6pfg5cjMm5nQd9ydyfszzqfigEb2fjB711",
  "key7": "msyLQBZ6hjPm2JJSrCPopFihRGKeQnL5Ns7N5wQ4G2fALpdamkUYTqdvygmgWpf58nR44TA7qPcjBzE4obKVU54",
  "key8": "4PxK2SNDjMRMRhNrKnU2XZdi7mu6UZUwyrGGunuwgiUz4cv5msxUKC3jfqV6FW6JxkVdRTX4upGsD8ULiwJW16KJ",
  "key9": "2dafUT54eCRqpNq2t2HWGDDMzE9rXMpwDCh9isD2rNN6u34ay1P96rxgV1oWeaLiBCMGZ4nEz5wwxoboPwyEP9qf",
  "key10": "5GuTCK6n22NUvRCqpMku9ZTi3vsyGEHkVKmswSRxT3jiu3LSTY652RhL8V5tsktnEdKgy2KjZhdXACxvAUoCfeF5",
  "key11": "5CYu1Suf4o7YARMjy6UUwPCBafWGv3KgDQKcryzupPjJEbJy5dB1VaRkHFSPoQwc2HCwDX8YDzKrwcTKVpwBk1XR",
  "key12": "3x34qmVnmH3wemUUbg54FLATjj1d7wnrSagq4Wev67WR6yBJARKbW62e7bhAv5DfNWhJphSdsTfdyNjSYh4MuDBS",
  "key13": "syzXYBKA6Gcm64Pcfx43tevXZP5fYB9hjwTMB4avqaGx4Ux7jbe5D8iXLj19GCj9GAXKsZXVyoLVcUdoi92RNZU",
  "key14": "2acVLsLL3YfXHbHnjYP61r1LH9F4ws5qjKz59qNQWbZwzPLdta7rQo3AkchB9GUnFGCrTkmaZu59gctQ7UhW4GjK",
  "key15": "4nQZHtrAACApdAVEg2QngUsYwDYbnXeDFqihC3L8pA6pK7DdCrMc3pR2HUS46YSYNah9MTJRRYMeop9FmrQT53XD",
  "key16": "3t7ikZKoCtxsSLdvdVfpzPiSnETNXXcrgW7BwkvY42SLCoJCK62bnbh2sMVidvH8dExC52weEk6oFrqM6ARmougW",
  "key17": "4YVm7oRmj3qCoX5LRWStJr9QWF3dzFpgGjL6xY3UgsEm668NPUALvFXWi7JoUUTF3o2YiV53f3tkWfQqZYvimGSb",
  "key18": "5GsTi3nanRQE4i6WwSPzCrASpK7aNJxJjznjGiTz9qZ26797AGNfmKmjBoxeF6kzBv1wu3nT87puzgHkwKJUYJ2G",
  "key19": "5izqa5JjpxoekFeqCdzDMvaowNra8VjFtRdrBvZKFDQMawtHX2msATDD1rSKTBx6apxaS8PD53PS9z1Xh3E5x4Yy",
  "key20": "2FZUtE3gRxUTbFDjcE6K3qfqRxUpHjftbmAP4ZsnQuuWPKQjzCVvgZLhf7x9BakmySy4bQcpFgJSG8aiw95Ey1v4",
  "key21": "3Wu2kQbT9B4kPiCYRcidb242eyUqQ3PjdFNmpUJ3i6TwtMaHddJh7Sd5JwoRc8MMGhkgNSZT9NFU13aGzJrbSSHt",
  "key22": "4RUxXvXUSgJXUUF9RzZYi4e4RzESWaSSiVABZJJDRgiKbN1KHYai9wQzhhGXTwrgqLgzwAjJcCCFeeNmCsAdG7UT",
  "key23": "TL19GR8nSKn1DzEyr5br5VFB8BnkD9UPqZAi1k481L5mfarnQft4eWuWGuBLgUc4BhrwGwF3yTC162BAvwCSR7W",
  "key24": "LaMUYS2YouszTuECMXyXNJxDzoAkv9AuU8RAAGBw1qJ3GQdcyNnACpUht4RYQC3C6qPu9g4NrAJKbNVnKuExLno",
  "key25": "3ZykRhDaRBZwdCSbMGNrA8SGV2tvqESPD6edk1CpwfrV29wYLkxBPmxoAC6B1SRPj8knfcAv6yNh9dEq3TkbT6QL",
  "key26": "5x5MHQt9PZXzdeLLMogxK9gPdQ7jinYnkhEgamszJYoikjbWwVcMUH8xd8s3AMAYtmRGQdyVNJ8NadpedM89xWRx",
  "key27": "2DEwqC9EiPHjxeGmhNT8knDP6duJsyTyL9jM2N5tdKV3GmUHs4caucH9DyrVpz4fbJipCGB1kyFaW3jbcLWP3Xjs",
  "key28": "5z7us2wzcBo2mWnzfWVhx7L8F4Vdg3siW7R7rhK1KDsnhFAShj9VfukxhMGwAfp84vq79GwkJ6ESWFMBZV7BdTYv",
  "key29": "4SHLYKQN49hMAw1dM9DZWdwx8qiSBi5ju4sKqXNkDGDE719AgDGLqkzENB8vN53gVwMjyXzLTDZY375QSFvuC5BH",
  "key30": "5QiJRJAwAB2jTHCdtMFnpxQvieSGzQ8kiZcmfyUyayMiaee3H7ZYNm1xF8Vu3CBqWz4u8jtmVLASy2raoGtzsHAD",
  "key31": "4PVuEvR8sX2JbFgwZJbs68WvS4q1k9L2FabQznUmNEZhzoZxEBSjzVN2qQdt56GZyGwpbbhVWAT7JtCe5R2Manso",
  "key32": "2cQpR6YNikSnPFFatCTUeg1GtDA9am5YbnacuPeUUSkwpmb3mVNvoLqz1PCxa5ZjE8EgH9ydbZTgcwqYLxtDnND",
  "key33": "4xibWW1mTxvy7ipQwQYNwUGVYrYr52pnUYgNBp2kdSBf31WT6Wk6RSYRRJaED5hWArMH6g7rGYvo2wAcuHh7SZ1A",
  "key34": "2mDDZQ1r4J8w84UZWtkXNQjjkwN9w1o5At7LrAutzybDByrqubu82Af5ZRfkHCECpRmiZRqftbXj9UTzKPBbhUyQ",
  "key35": "59bpaBiMoqWvouf3JoHBSAKGyt6xxTY13xJyDkwz66bfzMqhdZivuSLU6JY738ihzYvUH7z95EBK9FUhTfb8Pf3w",
  "key36": "5aFBbVrPNopPVAF1tJRL2R6Y7AXVdV9YL5cvxo91UAixxxTu7UQMMz2FsZ2yHo3hFABNSUyf8ey1ECZSXtS3cqHc",
  "key37": "3paHM2VXoN7ceW4HCfmzBXy3s7tmm2bLFkC2gcRZJ4zoJeQQxSn6cHY7ZTgMMBNLFMPmsYMY6tadViA5NuYcFNK8"
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
