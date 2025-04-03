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
    "5PLuJ832nJoy27BEYHDguHznJcaAC6tLjEN5jEZoiLd3vWyj5zy1JPEBT78D4cdFQYikC95ZUSVdvpBKWmHjSRZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QNbJwketgNryxbM12zscoorzFnxdKnzNfAVprAxxAZVdBy4n6o1i5mS3h1M2MZJW8KD8yoHBipCSgwQyRPNL6yB",
  "key1": "24y9HmVWvfKUCv3q8CBAA7zJRdjoSVaRwmJimb4rSKrw6JREcbTnMSWwDKSpecwiSCUt9f4Fv4jrXDM6eC6tRzPx",
  "key2": "3G8NhJmrUZdSozy92zhxRajp9pEFS2Dr1rdb76aoofkChMmfbXtZKGptAdUiRx7p63YGwRU3o7ae5tAniCoS2urs",
  "key3": "56dgJkxq3xoHz1K7r513hgEftES3M9pfSTJ2d5o1mq5LdzsUAmMtzy3ev1pFjTTtiH7R6bdjeLc4i9dqiEtpcokk",
  "key4": "5MbLnoX6GEL99h7w8Gs9FG8SPsUeqPTEvZqXwg2BQR4gHmYkZePh9E6cM4qEhukWe9Mq77NugHPZJf5yvEf8hTxf",
  "key5": "37vvdF2gzJ1AGua5b24KYipqKi3WCAMHtb6UMxeFEnuHLnqZ3mzq2HmAZz6ULxusamZpLT1mioZ4nnc6Kt18Zr1H",
  "key6": "5FaAMUPjQutRdWKxyZeojchpaK8iotJA3WikfPw6UkFCdzED7xXfM6gXtkhQgGth8KRnEFvtiUESFBjqC6tYCqtk",
  "key7": "5rbxQNJJwtybnPFzYjt9qirU73fTzEwJeU4Mek6UV8eikGNz6WRw5UKqvEyP7PC46L6K37Cavy4yJNeqoTFwY8EU",
  "key8": "3fZDTyLXVuehhY6QF5FRngysWSxmRnYTpCXVbBEFYjNGPaPyfM9v4djV5tr8zytedJVKpWGWqkXP9GkLT17C1YA4",
  "key9": "5MucJCnn37wsq7rQR4Khr9ucy7B3VBTZpADdECwZWHvzhx2shFUm6YM7BGDo3v9PZz3GnH4Fg3m3d59BMpUTgCuc",
  "key10": "3Daj4XeJxDLKJ9dkaQ3fULzYMbE3hVC2FKyZSgtiznjE3JFjJqjkayudMMZEHrXw5mDybLNF618tY8U1Q237tUcY",
  "key11": "2seHMrWV236EUyGcSD27W9MVRaBEKVHFp9H1Tv8DWebpjRmv3xQJhyfB817tqkp6oQcu4PZTi6rirTCcRjSnaRdm",
  "key12": "3LH4n2HgKM7zhMyMSV47YHQzDt3VLK2fUaGkYuvG4hwhMFUV1MG91AFjthYqgbM4N4491pBoSnWHq3heC2FLotn8",
  "key13": "2hLomsbud1EQCmEPemRKGjLPR2Ajnmewfy2TGB8TY8zBQdp1FPN3PCakSJWHaNSxoccduRRRDhCYpHuXifaFpcrL",
  "key14": "2AwfM9HaXy8DEGY656XL5eZSCUNz7KtGC3w9aw1TPogsQssey9ZQpFWF52oxVduw1nJVV6Wr8gn9C8zQNSdbGQJd",
  "key15": "4Y2z6m61vfmP7sFCAyydCwrzKAxRZtK3EnqABciBWsXwPeYpNMXZJJphHbo3mMgPF9itxcv4yscKHqjCZe9Ai9dr",
  "key16": "3doNg6KAMP2mqXXCT6Ezy4H6MLovaczuP7F7tJRiQZ6VG2B9P8QgbfMsvszJTi9Uy2iU2VL6ygavWEQhQG2HV6rT",
  "key17": "4jGspKScpeU3UW8YqQ72nwJRD86vh8BQiK7kXA4E1zD5wzcBNejzE6UswN4k76T1WQfokabguhVrFzYqZznMuwWq",
  "key18": "4Ti8CncoxKWuVtps2gtjMHrMq8Mcw3G8eW6QnkU15fkLm7xjwrMqT6QiFg7ZLVfuJMrFN9itsG2AgZzFJ6N1AwQd",
  "key19": "3nwsCgRm4nDLRMGYzfbt1afYhxXaFNMnDnAWbKPrmJARk41YcDRLJgDcpDVy3H6GUnryd5GD2T1R9Wdr3LXkxT8a",
  "key20": "oYMQwS1RWZFR3QMXF7quD5gzxpuR4EHNMdebcvDoxm8H29DkHjSa8vHFdWwKpCxbryCqoZHsJP54jd1Vd8nWDR9",
  "key21": "4PGxg77pJXwPg9CUMWNKFS2kjnD41WrS1tN1FSGzT3YQ3aeUDzb2ddf8x4yCkdVL6EMdve7Q3m5KQuve5FSEdb7Y",
  "key22": "3R9R9eA121oQATqrektLvW31koEqienNM8QNpgPVHiUgusAhrm5W8VZBtA2istx7F1vg6e7khgcdhyGi7bGNbAJw",
  "key23": "3P3FaeYCWM76gtDiV7eMKB8VLBu9AFwK2txDhJBrJi4hypx5t5o7fKV6w4uLRgb9wLmn5vgFA88YpLiRQLzrkJ6b",
  "key24": "2focBxCuaGGrri11bwza1SXnCbDRVU2iWQuLsh5iBoqXBYGb34ghLCQRn7hJ1pBPgA9o8KjTrw3rWi2PB1YzSsut",
  "key25": "4VJCMmr1ST4k8Rcn2kJ1Gr1BPPxfh6Y4nUKVTsce5M16wCDEkbAmL7Y23YUf3DRtzG4fDNYMZBkuwp9x5oTT8kAw",
  "key26": "22aakgooPn3sdBH22qemjcXznKXKrcz3Ej1qRHXVad6N6ejiDxzJCARq3CgJfxEnCXm7oJkZBgQepRqcVLYttBRS",
  "key27": "4Rj2wZBzRwdYtX85p6Rru9SMnpvWsidxA1PpY8K6sG4ZftJVGB3AiDt3tpN124cPRAdL1ScTr4MsHuGFecQ6Y94z",
  "key28": "2yJxB36AeM2ZQmPKLXfot9nXN9LRotAh9mMmBMN11utEfs2JTu91hJ8gX7nzrBDedakkaPavPgTwKV1tYPW6LqF2",
  "key29": "28YvuC6KBaPiMf8MXpd9Ckqybvwf6Q8WJ5QL8jW6nvQBik3rfnpjTh8UcdYornwACMh8xcjfXDsaT2zeMj9yv6zK",
  "key30": "589ZMTgTHmo4Bwun9NY2ntcNY97ehmiYgBYC2eQaMDGpWMBinG7Dy8CMq4bXrmyjqGQ7dSUqadZ9yCDyBoR1WfVK",
  "key31": "5QVb2rQvrKehGpvDpdGPPrwUrQg2AKxwMaR6dAWVPhEep9UWLf1nm4szCHoXS6asxcCQ839sf3sUTF96sDoqWswn",
  "key32": "4PQDt7heemJi2pzMszaoV8fJByhec2BvqLTdAbUdjKqs1LDLKFD9v79pZ9Wpz3uEPbPvHTZ5XjtVU2R6a5HizRqd",
  "key33": "EJVd8wAkHNSfpmVPSeh7Zn4NhiF9rxkoxYp5AT431weTDZ7LUUohBCJTWQvee96ZiTbUXyMZzpL6nwYiY88UQv2",
  "key34": "4AH19by99C5aHCsymnTbFVAegvZuwtWFLrBdrNGbCDpbRjvjkPet1y5cNH1AxXzTd67h84ktq2ZPcqscvq7ruzts",
  "key35": "24FPn5HHEVGeCMX9wrfn6u2eBgCrEG5SuM63aezzchS3vLzpTQApPxEGc9JbryAxvLJibTVb4mQtcDPbPaoeQfhy",
  "key36": "LCqTYX1XXWzLwUEY47MHRh8abxbfuXpwhhP9tNCrwqAdEQHX2P6JcyQ14NS83HuGA4p7M1rbxS9iFAkvN5zfoFY",
  "key37": "4uUcWMGhmJ59RYtwmDRYd9Z56MTcQigJXi7uCdoKaxCCrkfMyo9nhY4VtxE5oBeWF8v29j1Bf3vcALHrv83sgjbs",
  "key38": "pgLguxHzsdeZsswQoRkfnwbY1CToCC9R8WnrDWpG8KkFSrkKvxc1L2FzzmHwVWUX5sWo9uZx6SHoEaG7Lrq6WhA",
  "key39": "5CTwCP2pfMsg7aSV1tX8ktgMtob1XYKHmqtQszoaRAbBGSpbesBRu3gPvEEY3nbnMjuAWeUgyvKqSPFXY4Dmenem",
  "key40": "GZtSReVNgSUCj6XU1XmCzrqQXroNHkUGvKKkFjkWd7H1st1hq8u9jeT52s9jiKdCwrTa8be8nW14yiw7qmo5g2g",
  "key41": "5MVP589mHc7uTZZaT8M9MfeRVsQVpZp3orNcdQbQwxa6tvhGStcjpP5io1KoU1Fxj9rDPcwdWSNFR2bnGgUTUJEm",
  "key42": "4dAfG4efMekQMLi3MgsqAntL992KN95FsJ5gAJMZPvpr39fCvRXvYTobm6RJQ4xej2nijWdAnFy92THWENi2t7CS",
  "key43": "446iCosBina3QwUb5rbZpyDAtPHp4JMtKHUApCJDvegamC8zVK1D48AtVvd5N8xLRh6Hceqc73EHdyvZ9eX6Bza4",
  "key44": "3A2kzs7RgFJfGSkP8Mc5FpX9ufaREKViWkhQnS7gaso5oXm7mszUXYZZgZ9WhstVzJ9hwqzTCVTafmAWzqKm1xct",
  "key45": "3VVq1hysLX6m4vXW8VqQLuoDYmcYSRQ84JzDn9U1jkHSMwKxXQpfPekXUUQFnBjSzohHC46AnLq4aKoeDWP3aEYR",
  "key46": "5TgTBR6pGvWKe55Y4pdN9jG6DmeHd8PVFz7fFZJ8XgQRR5kXKK7CzhpSr7ieNz75c3PRdXUohzLWPgx3RiFSxEYs"
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
