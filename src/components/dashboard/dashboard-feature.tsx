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
    "2bXbmz9AhUoYcYoGaekumSdowLXDndkyGmS3tmhSMmvhZq45rQSpKQYBcgbB1qPRCy21DM9mhum4KiB4YvmFkuvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G4uJjy17AJ13cuBfWrEEtx8UUcz94FWMP4AQ2HCFHQ1JUkELyN6yFpqw4oa8QzsdU4Z2XNg3U9WzDhHoAEM8yKj",
  "key1": "5TVZG9UTHbegR2e1ezXwVXmgzx6geFf1PjakSWeEz9F6nvGpi9Y7NzK21gzgue3Lk6cr7fkzJuf93KjzCfjpAkwp",
  "key2": "MVvgkEzkfJTwsRUurAHYncaYtng8XwkwSCCoqCnEcNzuukekoSVKBCvNvZTmZ3TQ3wW6PeyEPCoR5yh62K4V5Qx",
  "key3": "4qiK43Ue17jfacyNE2xUME4btT5U6VYLuKbyZYvJNqNAk1g5pk1dx5ez76Gxe7zgKzEWbavXnUVuC9PffkPLnLjo",
  "key4": "RkfvsG9WawJUrs6KTqpuKirjGwPZza19W7CPNveMoPWhoyXJxiPkiQ7DJiMjhyM35rTqK5HjFQYDyZGGYGzikpf",
  "key5": "wpryuymUhDFL4QEcxqBZKaqN3wDtgHihLUPBUQgCBryKAMnYkqwPrAkcj6nbNDiLW8f2EDJywtx6tAaNbfXhULP",
  "key6": "4yCQG2xVYsgahztCkVZUgPfnvTgW1BLTKWR1kLfbPLqkexgCoupMCd3jxhQX4yWaNKj8w5wnvmQpjXQ3YY75gjJL",
  "key7": "aEC82tpdttJoJSfELsHxemfKoZicLgVCiPn8ZR4vznJscRD9LMHUfMhi5vYqkTRjaGKFpciiCvErKLEDyDSA1QA",
  "key8": "29vngjviJ3swLkf8WSp9tjx8YbXj1f4UJm4unL3Kbs6RjnsCahYhkWYRxoBwg3JTns9uSWiRHvJTd1zvjuKtMU1B",
  "key9": "3r1iQ3bMKX1FvkrVmua3rExS4kowcoccagfGHhkBkY8LrzC4CF6qpVqKkmaQQTXskiTAavtm6LrfCJ1fFhyAMR1k",
  "key10": "61mrx7CQ6mNhwRDSUCMut2htpemKet8jhJXRjcXeEQLzaxAVNqjD8c6nC1ukxfPrwaUzaq9PKLmQzXrrduFNEhuk",
  "key11": "25jDfZUyHzysoD9sqomPjcEb27LviQ54mzBfVpdQdzDFD2WfKEpzJfnLfX64A9CsR8uc1KoFbG3Yy6riPBLWcMDs",
  "key12": "3HPAb9nxaFjdAfdPwCmhANKv38smswuP7K4XLmd2wT1DaQiEjws8pXNoVzPy493rU6kBUCuUyd1A6HcKQfKdGCZ2",
  "key13": "2jRn4oBrjfZBGd39a5u4nPyTGCY3gV15EKeokHSN7evPZKc2QkkQHAQYta2P8QuSyx1EPn1Gn321BMLVhBUnUhmA",
  "key14": "24YhQmd4QEjw3n9eFvoTqwGCGrKiJNPwRrGxLVmW1RfkmMyAGEbY1gFfyUKxDqXKdX74Yzmobiw88SgpWR3cwYRe",
  "key15": "5GMgq2dr9nudTt8isvM7crkNJHpjovMwB5GfpBBuh5uGA1KzVuYPUVb73Mr3mzaEAgeag9ir4pYtn6WwyywbUP7z",
  "key16": "4fTGGcMvaCAWqpKCzMDC3jEbDsGf83axQ3T13tcCGqMR8LUJBKUL9goNXUmEY5Uj2ZGRBjAahdCDZyXGbHYRPLra",
  "key17": "tQ57URvLXd2wv9P4JU719GnZMYeLsa8YvE1empUFzwY68awGUhhXyz2SuepVL237pU61Lhwz44yzApZtd5FVZj3",
  "key18": "2vj94fux8B8RZZ5evUFC6ZbSy3v7E8nbH5YEYK4Vmc1pXNPg1NquGCXqFGHv7zLZjahuyL5h6qn6xcbTy1uFNKfw",
  "key19": "xjDXLUVYDzrhYGK2FRoX1SnuKatfb9Ztmuxjajwf5MyjG3hMwyYEoCXf6WPvesuo94dFrDjAkv8Dek9ZCzCMKhT",
  "key20": "2AyDZQSi8exmPg63sxkv6GzWzKHXxKZEQiA1d9MKGL3zsuYP9haJJqa4nQhsspygRQbCbecmRJT1s99nmMGgRuFZ",
  "key21": "3nG1zXFSi4JbTwJdE4tNGYooViUig8UPPftQ5P8WyMUKasNMvA4NvqhnUDtA9HGXcZJhfZ791ifJyjeeJ5TXg4qf",
  "key22": "8XRFJT2URALPH3KJKKT2HRcq5xm58a83MNSrqDHvX3LLPquLumEFd6NuGEjx5JCM6UfvxD7T1YijUCmwiEtTcX3",
  "key23": "4HRhzdfw2MYoJ3kfs5jqY7PjrjJiZNmSvk7izKDcLt22CLvofrTuHfdi2kJfMTBgotoceC1vC3ZFpmPgpcC4Tmi8",
  "key24": "2wbN15NP3ercZJ3cN2f5tuVZJ8oUdxY8VpmHsu1PhkjTK9ToLvA7z85Z1a4bNsEomFT9c9txmjPDUPAy5kMBupZx",
  "key25": "5SVoo5u2xXXYSqbpybX6GjF7dKQjGxHcngYKkvxr1mqdnhAYVxs1rVxenaxo4YSwBCCEJXADh1MGVGnbtfDyCDp1",
  "key26": "3VKvYUNeKqePiujSh5jUviJdqooptpaJmU1yukADvXY1vv7KwksT9T37xxPnNaW4RuBAQBB9SxYuSSdFWePxEyBN",
  "key27": "5HuahY2EVprHe7CWXk2qW2K6CCcCFbbaxGoJ8XgcdRgc7uUYZY4ajhNKNbQkBiMyDXqyViDnYkugcQYUDBpagu34",
  "key28": "4Wq6LBSi2H5yPqNb2jt1oAzbYJP4ZgW4cyKq7pbPqPM8DXa3GBket5NrpeB5otf6MXMzKUYwA2NLktWGEDykpiPC",
  "key29": "Cb5LuYWtXTaH24ckZcsrebfr6N1NkZWabV94vPwwJCbLMmkyRnM7VMjYH4ubKLwQLfNbr1fUUH4HGXtGjRE5hYf",
  "key30": "2ZAA2BwnFHL97a2J6ySaZXXwhDo5G7yoVVuYAoqm6jHJZejPRcDPa8qiBhr9AVEP5yfeej4MRHbYcENDnr4c8eUF",
  "key31": "4ez4j37EY7vd8RxMKEM4bQD5zHtpdEEuSf7VM77gECFA1oi5Q5ZGqxAkrTDxd29wfq1PH5roLEScQaz2WBUJ9cGP",
  "key32": "5Px6UZd6tG2vVNHpqbHe1Z3XyeBZzUQZbe76YhugXbSZhxsp8VSKLjFBwJzHR5DKswucYhNNvzNiXtwqU6ekLZ1Q",
  "key33": "57LMuudW7c6vEpRpim9K7k4Q5tzEDL36K5sB3cT6CKjCBudpyQNfygXtp9eHC6qum6vVzwd5R3DPzcrqguMjEkt",
  "key34": "4w6gzGRyM7TDm8N6MGwqQkUJrvUvgNvnMmi6ePu5TKSrmZ8m1WXRAMTTzytFWkeW5XY9SMCPUecN4fkgBaXFxAwK",
  "key35": "UAkbTpEUckzLqF8wPDuN5a8rnr19DwvXhpWTpnVBqp295WdfkA5TE6p3Bi3B8eMyBUsVBDhHbGVV9qn6vavcm9F",
  "key36": "62NxEi9UZ3mjwe1ZU74RxjYWzsosYTQWZ7EYW5m7pgYuYLAfmrK52riYZm2TiHmgaTQvuNiLjRTwPxb3WzMJ4igv",
  "key37": "4L7UjneP9pMQ7ZFX4GSQAumqnWVffusUZTSvZUaoQmwCUyV4CP2a5AGNH6kr4VYe9BJDGWarKmXXqALkepdL9PN",
  "key38": "4oBhG61CopyHLcXJN8dMEiNhXjHPSDWdeiBRY8ugJCrk3RAgP3Bq2aZpdw9hy1tzVP6KfrcazpUM8DmDe2xCTwni"
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
