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
    "51VEovfwKueZSGrKMYpVWmkSvKfLmp2ues18oRJaRaoPf4BfC7x4NuidWFrkXDopbp4VsqubeDvvq6BNFAfA5iT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HtQ4KpBsqA9FYV3qPsiBhmVVFv4rSTf5dkSy3y7soFp7bMT2CN6qbnbbg6wYaxy7cNqdZxooiJDZiFAdeR4Rsdm",
  "key1": "5mkPGq2jViehJhTskdtJtuoFQX2SbYhoQVNNBmd7h95sMQNNzqBeutiiuomun2LEsqJYeiiVALYGeT7CUwrMnBiR",
  "key2": "3NUprEJ6ANAVMSrZW9kC4Ysth6pbNLGEgNnGGDiGZBvHcv6UTaRDQvtSM7xaULwzymizSwmZDF91LwbiqJ1vMXS",
  "key3": "54gMK8p9xZKN5Lscx9zKbk8sP8fcYwAoLYgYPK9guMxzM8Ahpt4VbytPCoKweVdPp11PCQMSUHtiLiWthpga1RMv",
  "key4": "4Nqrug58vbNiYv4egkH78xbTSPvG1Crx9LCJcQQwRRsrBPdDafjuz89zhaA5SbPrVG9aFpMYnrutPHv1xW2mKSo6",
  "key5": "tYeHaPibEo4HUrzjEQx5jKCa8XE1oye6173pYvDUvVyKsHmThycZkPhwb3Ebt7N61R61jonAn58mP7XzSSrgNM9",
  "key6": "56XYDgqwLNPgBAQjYryw56g7JWh9NuMh2QZ58jGZDnapaqfgKLKXpY8j2trfVhEZ8kgPg6CaZvhgUNtnvx2do8aV",
  "key7": "6D9jLKrNeVuepuDGPT4hepsK4V7AWYsNgha2fBC4ddfaK571yNwAR5rTdHous1jjkBX6w5SDRp56hifu7eLCZvK",
  "key8": "5G1a8BJdYzjXydYahLVixKurGsUWXFzdwdjjc1NZzmnAJfJZ1o4Y7GqezwGbgzKJMQdiY11ybUrx41BVMyFpFRwg",
  "key9": "4FgqBGpk9pe42A8Ne52yCP2qow2227HswuvoZAwQeVZBWouNuzFppR8P1dowGhueD9mWsH87fytbpKWVqxHvm8yc",
  "key10": "56fcRpZgWSZQHb7W8413YjzxQLUNGDX9QjuJbBogyGnncsGDubXJkABGPNLANz1jxL1TRd4NBq5cvQi8B4rhBves",
  "key11": "2QBthJTPNbmnz8JFJJSjyF7AFD6gLDJ7aUWFyqVuxoBDBBUUcka4r6HAXJPTzdYKu4mPzxUaKBwCJhgXccvgDxoh",
  "key12": "2DkTVRmFz1qgc5XSSsB6SJWNVU2ARxB4FYrJVcp5imkio7dYZ1ytTH1hxYVhDBdJ3jPfcKNg5q1RMFqehKsudpCK",
  "key13": "JqtmvDw1JgVTYaKkWMv9sQh9wYGPMfD5Kyqtmivm4kdqCGecLRipNUV4vRWKmfdoxKhRVcSxBnxPCQhrthAN1K1",
  "key14": "313adYKMyLSaUHLVbEBRqr51vr2hTvLkgweiq3jErwq25DcS2YnRN6HSDzUkXNxRMswBe4ijceywg6tHR3AnHqoy",
  "key15": "5gavFu6cc6G6pjbgc9kKAxUyjshS7YbBWqgJsxjpasEGcLGdWiS1D2YN1hCvQ23gGHHC5zwJHj6JPxurceyUcwV3",
  "key16": "4ds3aX2KF6vSkRaP2HgCjJFr31Csys8g6SUZZpFSpxLsYuHn8Z4anVEekCdo9RSrgBPpCpenrrrYx4wfJmxvqGbD",
  "key17": "4ELTFLS2ycPyoRE5ZYSNj4pSfAZg2VKV4WiNujpxrs8aiVKoRWfByxQsbcQ3DaGCXuoWiEd5tbouXGSeGgzh7uyS",
  "key18": "cGFh6bqky23pGozRVJqUAuqmRfN1SFJZ3Pcgctdm2GoTgwRomz848VnTq6nMgBcHguFEZCneS3EruJ5M69vk5C8",
  "key19": "5itE7Joyw8gXG9Jntf1oqvjrMf21QMUBMXWnta7kkYueWqCWWB8xLw7vfKG1gSCbSd59T28tnaK74rmC7PXciWcv",
  "key20": "ogzgyWnhjpG2rbMiuv6vpnZZaHGFH7xCLaBuXGQs3pNapJJJp1wVsv8E4ucTL3VnpJG5ac3j28th7FbBZJQCKqz",
  "key21": "zMr8NNsoBnu6zCrbAyzc998y2P3KtEppLxhL911N9L2ReD7rH1oCTSy6PUpB4Nk8em1xVpXjXNL1nLCMoe1Dhc9",
  "key22": "3xvadMstEHRHj2G6LGmwMdbLqdqT4fviDZJHHfY5UBtgUAjP6wLuDnEWbEDKimJUaNRkoxpzUuJdANUbtgbTKho5",
  "key23": "2j8TELbCrBKMLHAdRzYYN3JXvw6qmg4mnbtFkMUrunVMKscXB6XewZDZUWNMzJQd7ctvr3f9rGhrE3pvvczTpUkp",
  "key24": "5Vm9FemNtwef2qwT1mv8HJkEmHCKea6Z2QLjFKiPv3v59u9YXUi6jY6SZHjBhC5v9yXEm9KNDTh9j78coyiHUUrJ",
  "key25": "5V8fcBc3VMHpfrgUT8RCS1qtej2F7ZTZbNzn6akEjsWSN1cW5YZZV7wbBoSxPp96SynBASibzBXypqQTmN4vHwsE",
  "key26": "3cZU8LE7e54o8gMNhfukwDe5aoiN7D9v2srwdTgdX5nYV3M3hLT9Wt4EoWNEmC3i6c2aKBTc2ZdrxyQgiBvqDVGd",
  "key27": "61tXnLa2cayL22uoP1PHeZxEgn162a2HqEdh9N4SqFXRaU2WT9To6UfhQf1WeG8MNZqyxx15JQhmBc2nRvo5hsJC",
  "key28": "4fNviRXeLwbCW9L59hucC1D1y3Ufdv2aUkhWjMqwJ5zgcw8xkVxH6rNMmmssXMjQyaYV1SdU3qtkS28ysraUHesA",
  "key29": "66kRnFWb3N4dmPcZTrSYStb2m6HDRqvvNvguoiDJqQN9vs487Po7mqHXSq6XnHt8F4o6nXrpgnNFFXuZKt79CWDX",
  "key30": "4DjTXQzZwjNCsbgLKVwVV1fBkHWVFe7okvqCvFPfmQJjPmPeZkM82mRdNmLwNRS2ad718Pp7xwAsY4cdDpS6aRk1",
  "key31": "3T4b6WUR9kZiBBThGkLM7Jt1QxxPYyE9SCx9MnxM9wt7VaFUY7tHDeSLGTCBsHJTafzMotHMU5ebR5FoqbFYSREV",
  "key32": "2Tg9ggTNnTUrWkieQxGEAmFG7D6izsaaExMBr1KH3nxhQxQUyyhucQdpZueY6pZdxYxXZtQfzqnWE1ZGgsZZikTn",
  "key33": "3AVTwZuAQvgE88vEq3z5dv1eVxNXftokKYnNvhPzH88zhcn5gud4925vRzWSoJh7GineTXfCfULtkoWBFERAh6Lr",
  "key34": "eUwB7JzmGhteEqM2FFDUpxsn3wGAnAquMd3GLjPDvugQfeeCCFG9cL8Ur4Mv94STUzx8h6yeanaJ2FnwrGuCHx4"
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
