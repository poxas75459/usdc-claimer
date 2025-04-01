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
    "4dN8L2XG917qDBRE2sXqVznAFC4LDStFTD6LZHEKzYkPaRWk8Dhc6TUqMTC42YFwbyo3joNfdEEs8tvhLsV6Qnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4siHZjPwx5NnxauGEyx5X4rGivw2SDXuy7QesLszcMwFRKejB8bmHC3ojvtkAzRjA2Zcc3SuKKUmkE9smeWp8wmp",
  "key1": "5LxykbRDBL8nmiwA6rrZPFRbn2m5k4GZGBf161Ls177WxLzdt1REuDYzvVC8Y2YELBRbpj1JzVfpkP3Vmh8oRhiy",
  "key2": "2yNW6BeNLyH4JfHn3E2w3qnG98jKhGmvFdg1CDGFRqTHdcbBJHCMAhxHiPkj95pZ2rUBZzxoat4xcnuLutfYyDke",
  "key3": "5rHA87kDaFPjUmDAp7ndXgjduE5Nm7pyW7PLuh5fB4BJQT1jw5hKC6TZyVHb7WYVYDm42td9XgYab2opqiTn6XEr",
  "key4": "33hceTgLa96Q6j94dutrVU1dtSQ7CbiXAcHBHhdSPAaFuh5p6HPSKVsu6dDu9fnUtWQBjjUXRc2MyPLZgcGrD9iE",
  "key5": "4tkVwGNMq5JJS8xWk4KB1Xx2g7W5b4PUBHRGntYUHG5YAiUbj6D6TyWv2t6d8eGthDYhvPxG2qdtyWXxwiXxq8Cp",
  "key6": "4kr8qDBaTV3oXtrxAHpgNHN5hfraUyDBvXnduog7Vi62FUTQWYG4h1xJRUoi9hV25JXsbsxoZ4RwdGpMPN5sBdfY",
  "key7": "Hhz94zVEiriGdieWzRr8A7Pjzs1S9foE6Fs8YULzUhivn66DoyooyWkRHfoKNt32H2eTAYhsEyMFkJFGB9DwvaN",
  "key8": "5CTiz8GMDrzgGhVAqoruAErRkvVJzobddXfD9dxhUic1uRgGQkHdgQiK5E54tu2Atp86ZeN6HGQXQ5E8rMZq7jQo",
  "key9": "ktZh9QJ9FHUy3UoKPyBwj69rjyxusKF9epq6LESAug6WEQt6pyhtSPv8xUE77pWSiU1YvLdehXX3rjUdd8vurdX",
  "key10": "5E1GkitDTQvJHcyonqq2EfmnRB21re5Jz1q1w4nCKmU6m32NwQQe6eZyZAcEQ2tNQgQAPBtiofKcJoZp76ahVCwY",
  "key11": "3iSR9S857ybGqq4FtRKQjW66eL4ozuMAZZJCArYWV4oSDWb5PczkfMxrM6b4fP55EZ9gwYif68JxxUwEQPs3YAm",
  "key12": "2MdxpnMeayChochWoychUiqj64tgjtFAzzSv77Rz1PmSyRnV3HhwRJGZMW61rKBb1y6WVg5hr7BGjW6M6xtRgumL",
  "key13": "Yr3hzTjLYweFWUL6ytnRdYivjrYT2Xo6KQjtWxBtNQcqV6ETFx2ipV31HgFw797stRvGXHHxqH1m2k6qAfdJVT2",
  "key14": "pw3u2s9pWRGWPcnwdbWbpPcDXUCgWrdKLJaLVJUxfXAAbTRF43GbTpQvFf8BXjfwkzF3sPcei1PM7KZxSyzuwF3",
  "key15": "eow4HBEDmSxjjkxoUMxDzEurwGUsym97qXktqCZUfNFAk8C48EECaLHZk9Zi2op8WojTj19Vj5vdB5fVF8bfANm",
  "key16": "4oKUdeCqsLzE9VvEePReDNESZwa2Ka6bcCREuPVQNam3uXvqtMqc59GedAYUpuuYaJTop1fCp8ZRHRh9so9FH3hc",
  "key17": "4D4EkBN1hoxUuAwPYMEdosFkzec1CxRA8TdGoZTf8xShiHCtPeyQotoziHhknbSNbDF2bQ9KScEwMoqfushrnU9a",
  "key18": "aMYPS4UgRucqjgHfjWq5FiYDbkQUXAoyd5qKL2PJad7qZagEqNqKGHcXG8L5pF2PQnUumcF2cFFA7yoz7eVG2X8",
  "key19": "3f5f9TSoFeZ6JNh4YNRCa2UKCwSt6K5x6B4nnCFq38qrcnCM3bkTW5dyuKBJqh4J76KL4fYMoJgkEXVxFuisTtff",
  "key20": "2LMnvEcpTUJoYzTNXni1bUQYyoESCLytPT1rhKC4puorBavBm8KVDPSHhQUCu9jvKNzKgFzsSvAjZqECjUsgwNPM",
  "key21": "5DRK1fVxmQGPjF5gdWwyYTTiVS2QzfSJLWw8Cyot4qC2KEGiRYRvqaPNE62x4eRvMmTN682StUiNgrN7m6i1Zk8p",
  "key22": "2ysfVtvtZ4h4cUb948aWiLkJn87MJaH3XHtu95j3FjYKRQt9S4FwN5TpxBmXaJXSjXhHWUmvgoEBTzYVnn2GofYG",
  "key23": "3WjHjyH6nNadJ72B4LsTUWcb5xtGgSro1DRV4tQcKpr4tAdXsM3GryjSP8CUTj1YQWfvLdPvvR28HBnQzfKopnQ7",
  "key24": "2Q5554LJs4Cx2yZjSDg5bq9Mhx3ADvYR2VpJCwwXVSjdv3Qx3oa3sSqc1ETAoVkQAZLwTYaKJgk6iJuvU3EZatKv",
  "key25": "ter9eAN2voLNvCdDRZEgaBL3EJHhmA9mLjUJ4x8xQnVt5fub9PSinFvKdo3mwuuA5zFMVkbw38hEwK6iwG79iVb",
  "key26": "5v38Tah4vrEw6jM9KgPWmVDFbJRbqjeTQtacixgJRN5kuNARQpgtSZfqTkiNvcTGPdaG2BYemFLZL3cELPg4VVUC",
  "key27": "671KKwS468RT6YXmE7HH69bCAD4haDHeYGiDBumM5QTQ131uHBWnBF2ePxq9mNNARhKrifTD7mjsviart6X8X8SZ",
  "key28": "3aVubi9frwH2foCf8R8AUyhv4B68Lw4SQEXB8W5Vru5iwqHpZRLjG4PshLKoLaCh5aNm9yfyMNAgbk8GqLQ9SVf",
  "key29": "3pfG1U64RtokpmmcCvTU55uHUXZqTp38WeC88dJmna4YKBUkH4abWdTMStPB4tU5QNUGCGSi8SjCHqPfeLj5K1bE",
  "key30": "4jb5fZKFTuxSmpDz69kUh7CjtFERrv57sToeGcuFFX954ZXLcBXouWarD7aVvhZfURWgtMTUVkqKhKsLVAjaGTKy",
  "key31": "4YtaoirXBUHx9QyUPdE6FKqN9Qkh9ezSk8XPpwG1QJbm48KHYKkgNfTEj1o4kmnJ7kFTFZat9sdcugmiDCYWjFF3",
  "key32": "5j5FeurGoH5CX6eYdkyzRejJabc4JmVbgF1nxmS1M94SVPF4PGnMEre6kY7mTD7LkzMtbjt728AVbmxBMBDWFHZJ",
  "key33": "3UA4oH6m8iXRtDhiAGcQgzfYHiEa6rukTfbX4VDFbjNRPBKtDL79UwmwyrvPSCkJqaSZgdKwkqEzKMv9wrB9KT9Q",
  "key34": "4Xw6Sjx8YyJLk84fQbZxn2BbVCZjAzh6KgfKMnyrJuNP63q7cYx8bRmGFhJMBgwcAtnFZ74ge3iBMHnpUDj4vuFR",
  "key35": "Do3hcFDRLy4nshfBin5VRqfAxbtRj4GcwhfyGsSqLFsp46SJBnio8yLLq5SBc7mwmaJtUjqdZg5QWSLD5do5NYb",
  "key36": "jWP6Fhcg6vsGD72UMnK6Fb5zoTPArwQCi5m9EJGEUQvyH6me28WLa5baHtgBH79B31STBGE3wnH4D7iRXfpWauM",
  "key37": "3nxuakvHxzq9vYFXhFfings6ZuMno55xjSHDNNjm6oHvjvEcB6BAfKbQw7ivb91xjqd1H6ntZysyje582QL1ejrW",
  "key38": "3NDyx3D8Fia2srLQXjcb7pudpF4mhyvsobZkgqLJJdVu7rNeNcxJcurRe1oSso7pBTxQQDb3kk9rryQ5ogAKRwfw",
  "key39": "4Uf1HpwQLmLgaestHe4KR4F8KG4oF69x8m6NQyTPH5gEi1NLQg7SXDvpvv526n5ntDYKvD9AJyo2EeJEWyD1KbY2",
  "key40": "4JAKZUNbNczVikLn8YL5Ew9kbERcos8cF3V2yToAHkJqsHQHU1TbKFsKj9o2TcfhiNefGU4iAiJEQkds15vDxfHj",
  "key41": "5ULuByUKtA9rGyAPxPg4LGKLLDQNsziAfVEoh95dGaT8pDLRSptmUboktbx1hhVXUdFxwx4uYDpXm6SyhMzgcJVc",
  "key42": "2rnwDzpHGMtSjaYhqEFv3GYxf5qKCEDKk8rBTm9AjYnQzf8d7ZREDmhiV4eikR5frrUSbsqLCNMfRFAuk1krfYtv",
  "key43": "31x1E1DwpjdydkyEUzJ88aW3koLfQxT7WDUiMEGyMycv7acZi4oYcygUZi7UjqsxX3RxRqMo9tVxoKykoTaJ4gu8",
  "key44": "3eAVYTinsZB47qKDBNyKzS3BMHynRhsbuTVK5Pv7QVooTtBEumfPdkSQPWJijgS9MALrrUm3R2C7V8Ehxti39J2e"
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
