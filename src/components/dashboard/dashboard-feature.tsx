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
    "47BWgdTsZkPU1VXKpQkd7kHD7tPrHeY3mvR14tCDJ1ikasysB8taNeeCGWXPHjjacsHN7zyHXXAVKGQm6KuYmnmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RnqYtEqeAA8N8Q3f34CAaBdqLMf1FuLg4VytE16BMAgvnKMjNJPpA9ioS2dynvUcSxZ7kD4a3jKkcFmVckbDf6m",
  "key1": "3dfcboBiCj1RMkqNwfoK4BjEzpRs8t5vo7yJzWBaCq9Z2btqCrJkLu85kmpcxiyHJaP3MXYYWTp3AnXt6t3W6BsQ",
  "key2": "2JWmqXzTBopkF5ZnvMpLuH4MHhce6rT6pf1TefktJ7nqNN63uhHT1Kp5Ts38PXhAmVUBQ1K64sEWJXMiJzGzQZx3",
  "key3": "4GGsFUdPkHwcJbES1fjg4wMvLk8Smq2dkoC56VwbKCT3ueFfji1RxFgUWb4XVkXpx9g5RUBkXH92MKjXbe5fBZG4",
  "key4": "2wToyYs5H7BvKdqhiptzFxmmY7aCGf2YjiJHacyZnqmeSetoBcLwYW7o5nKChpcPVAUKgP898BCAg9T6oCV3oYhs",
  "key5": "5Mqi9ex3LCSBSFk33HnrkXaA7TjaoSzQoWXExAXUR8LKCCK11BTFwVJHMDjEFTJM4qTVysAPqaAMgK96pNZueNTh",
  "key6": "CtKD2eDFDRjhfhtkUm78s6rZPTaZ79WSSDCXVd9kbAofLQPoinmWBy7wwQdbSzErTTB52VuV6g8GUkQoenZxctC",
  "key7": "55zXA8K5fm9VWjDjdg8kE7BaDnhkNjzQzBEpVRPjBjo2WyrnW3xbf2d8qTWc8HAmgApdAEYB2dx5fFWXu5HZDSLc",
  "key8": "KNogVsk77irnMkCx88y65k2cpg8W8RvPxmBdz9vb62fA8gzgZwDEY1amz8vX9zrLhSXUA2edL2xUUEtnauWXSYJ",
  "key9": "55dptv2eGbaYmDofP8YJrRLwcX6KHtWGVKg729iY9sFJx593Qz8jYz8YRAGW7YuVU3HtZvMJLj7DAHHFjCoqzVpr",
  "key10": "48jZPTTUZWd3uib1gpQ2Yk2F4Dq5doQdw1p9ts6yiUDZUa5h788zgHmJvP3miz3phZi7MR19VAfduSxK92tRkZXk",
  "key11": "HZjR1a28dpZFAC666gFxAVzsrd1e3LhMrV7V5Hzw2jErV4yTt1eVCyMRaNZMM3A6kPfx9JMBJ9xfh2Rrt7Ra2v1",
  "key12": "Pai8F12hRMD4hKcbDvCsTeQP1RnAJQZKG5ifXyRwwsenpU2581juyWnBt7WrwxjQqyzwH4YAjPRptRTj8XJoKGj",
  "key13": "5H6RttrwGJALSypZuadbv7L1dnjhMSE7tMkJu5ueL7LjsaQvt3c6eceDwXgcVT2KHQmvQMKiGgVySXuTZygXcMz2",
  "key14": "5nkYv5tBkASAryQgNsQtiPjiTArLWXPuTeSkv3Z8ueuk3XH3Xgnmio3kV4MEpLmYa5jedMFZEcq9ydrHw1E4DNJJ",
  "key15": "22X73V5ApN6oMbBVwYa49Qmdn8jCvXtvD58J4FKszPs45j1N3GVA94EtjQrAThrZDuTfu3UK3KSj78tQ49PhLd9y",
  "key16": "2XUb5Ezt3uDaDj7N9Y6zUj1sgCMSbpMPAxAr41mujcmkJiWPMtMi129FgYgaaF6BxtKhfe1ySbZ18poBBkTupV5u",
  "key17": "gddfwxEmNxUTreQs8eGQemXReYdSNwhM7dRaSTGu4iq7Rydjm349Jdn3SGic5o6YjBz5CpNbirTAnMrzPwdxGrA",
  "key18": "4n8d5pVmqbsr9Twdurxw6i4zateRwi1aX5smBq7Kg4pgHiNrZmdFz6m2Hd6rQzXcYJJKsPwS9CZrToDUHvBma9db",
  "key19": "2SetWcVkJQ2AmxoQCwyz4SKQKCymGSgfTFuRjrULESRMihqoLvHk1aaW6QU5xmSBaFuoGLGghr4nrz92UmN1fygx",
  "key20": "WAdzBNH82FKF7HazCGmCrjhnw4KRGtkddqzmmEsx2JcsmdB639JGTed4acy8FED1H2Ya7CXkRbd5ANBdhMzVMbZ",
  "key21": "2w1fYKLM33x5z1AQnnAwL8PiUX3MkY8RYWRMA8vmt4o5RUG3nPVveGmcQSWj23omvAGc1QvW3u3tb1hFyKtskH2",
  "key22": "22zUGYCcu8HapcCmPcwhp2VeyZ5zEiK4iAzsCKghzTGUUuxFqDyKBGL8whPcgZXgsYfrzsFGtqeVwyn7Z4z7zu4F",
  "key23": "KmvWigXK6a36L5tdvpNmwr3sur9GTwUCAxWeyfJ2ZJdXA4bCaD95EjRGLqW51Po2JJEBHpc6GRx1afrCifydok6",
  "key24": "3TxN79wJtrC3SVXLmq3mHMLqmuvhEwZ6rgjq1AM8KWv9ckH6vkFM7EN9jeKaMwCHTtxDKWYKAkJG7sXTevFv2A1G",
  "key25": "3peev9uey6VBVKGvD8c8S4BuSJPraVBSGWH7ifsRcZD9aafZ92f3ghijoj6rLvvTiQvbkzb9DAprvrsatzHtvLVS",
  "key26": "48XpX8Ssmir7nvk5mx3Jw4GRNe9tpiLojvD4NEsF5JbWRQG2i9AtCPTkhPvMQuguPmJCuiWHWikgMET4Puf8Zzht",
  "key27": "vtwSaXPDMw8SfSe7t9zTRVwsiRj3NYT1bN87ewCiRpTtMkurjf2UPFxWcKimWP9jzbQr4GJsbGLM9FR3q9J5JGC",
  "key28": "5y7JEw77uzKp3nDi2FcMfSBHjt1PLQjYhehnH9i7shLGkt7XxoiTB5zfXazZedyCcanCwPoYiodQbDeFsEMXA3nX",
  "key29": "SL6XjbA7Moy3tWUiPx2RfHc7fggucTUBbzyzD6TS4sX8jSUQYa6DhUQoWbyNozmkF8AYYk7SD3QkX4dpyMJWdce",
  "key30": "3VunCTkZsDzDaVatpKayqmBxydt5S6ZiYvyeHvxne4nM5rVayiJ62kbQHqgA6QPvp3rLah7FRi4TALSw38K5sNkj",
  "key31": "ZrGj2CkPER6YUS71dCKi5SL7GBchHqqhekXKNo4SJizL8fsLwdydRx5RHNQCt926k1NxEt4JZgdPeQP8NbWrG9Z",
  "key32": "4SVKrEEGHoEw82bYfhJAbZE9vws3Cd3AroodsQ87HUA1BVZ8HSLHZYd7YQ7etXGruSsXj6dq9Aq9rkrCTwqUzYgZ",
  "key33": "4LkQrEY6KhFqiq8RGJrisgxzgYRRkmwJzM7kDzkA61Sz9nkizPfd7V91VobzdL2bnDs1v1hh5VNGYngC9eBPEXs3",
  "key34": "ETbYGKpvFWdYgJV1LTKkAan9xQEJQoJTq3reaz83A8zkGDyBm3S9b7AbHiv6M6NLkPmzxaw2t6ML5238eeNxPCG",
  "key35": "PiywqNMtXNmx8WXLtSqs5PupidbQnWGQxkn19XSSLscx7ovLRBwLPm3fA7Cgsk7WGPq8iW1rUYyQQYAZhaJzowE",
  "key36": "38bt9MzW6iqgHGsj9yj9N9XGtJp6YDhp1HRLsdi7NqASgFWZwjsjC92zc7o8QE3xWDnNHdsdnd5tKxStdwL2aCFW",
  "key37": "2C6pVEmzodrATEgHY1RVGyMauNcoJ5LAWC5fde9m16744CNhBDyucrWfHzu3uAoGNfCwjFH7na6WHNzPbmTrki1e"
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
