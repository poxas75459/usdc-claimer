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
    "4rCT4PwvuJg7FG22MFJ4pUSpAhJpjXbqUhsH2XjuGiDY2A4MtRfXVNp9obFGK3Q4HrYucvmVPTq2T5S2xc6iq1QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vuiLKNWieySfnL4EfHqB6LMZt1y1DoAARmntotFA3C998QRmgRqcp1aLpQKfdUDQqro3hH8PfMCAN9Y9aCirsM4",
  "key1": "2kZDiQgsjaqFJdBV76D4en1JJDWMcRe9PyEgwpX5nrTj3zJyXzWpg28bu4Vv7Zj6XPh2eh351jmQWCHSsHoH7qxn",
  "key2": "2Q2UAjRbgMQK38Hoa1wQoLdH5WeS8ra9GNCJn7SkVsP94Tge1EFg9C4DBhND4SR61BbCKdGcD7LvRQnD3bC6vMT7",
  "key3": "pPQ7LCbypjsvEuSwvMujHWcY4jeG2qhbLK95S9v1cJqorq3zhqH6T4ES2Dg1153R5vkgwEU8bKyrPemm3afT5Pp",
  "key4": "2oe1Xe1WGD7VqstWnw579gCfaVZhXGHN4thLZVUS7V5JJDMyARnfJm6taYpAM6yhXkLqCqh4uNwXohJm57jPfjAZ",
  "key5": "2ZXCQGxJA46Hj9qJmPunjR1Caiu9BJpQhtt1w7m86PasM7RGhyAWgTpDRWrSVH9kSZBzT9THC4vZbg3NxwfC4Zcu",
  "key6": "2ATXWhfxyyDthsf7oCk2BDXsio5uBFbj5rgu4CQ8hLwn3VqAnyGHjjzCPHg5VKxront1pXjpQiJSHfLVQtTSnqNy",
  "key7": "5YWeRipYqSzqwxtSFhCGCkNcCyAXtDdX2RzE2xt5yzE3Xi9g37jMJ7HnuEKexSprWZCbC3s4AMqyNq7rEhYcVJaR",
  "key8": "2m3V9HwDmNzV1uYhzy9trQNyStztSZBCb5X6ZQPabyexxN71gYNDUt8KyuE7SmKe9YN5Wkk7dtsNzUegCbh8D4bh",
  "key9": "3AKT1DqwM9Jywchk7DSXEfAUMBu3n2iMsPPHjD5Ku9vyRAUM4ADANUBGq5g6jZnHLc7qDBWHJLpKFJhXiQwzcPzE",
  "key10": "25pMfwJuZjWZupo74fhbaSv7caYCEwhfFB3vnBvW2GyuX6JebAxrtDVocZyWSuwgEEaZamfoyVJrcuiyHvw9f4BE",
  "key11": "pLXUpWhjcKuGVR8vfyj8Mq84KDuF2vKtXAeAyaZjaEYjc1mKZUfJAEUbUqZW1H62KdMFLPwLtrPPwKgPnaHwdi8",
  "key12": "5C1okZSHYowHKgRE9G5QG6USqhikwH1uh5hKGg3Tz1tHzXVRvjHNkVaePB9kwpP41k43fWHMRVUVN42CfmBEd7G4",
  "key13": "YKc6XuZ7oAtjrpdVdn7BgTHm45zbKgnMJdhq6zpYST2wPkzBjHYCDhazPDsovJC4dBWuvsJCGAjx2hZvMMtZXdW",
  "key14": "2rRJCpHMA8gXcm1zt1xXSJs8nD6ve6oNYVooMGGSBhe4VCQd9HFtreNXMpdqzFrYxyyvwJk9Qs6NBgzMDEa36NXE",
  "key15": "2YJCywEV4XBJmtW5eYwFsTeRnQN4mnFrc55ZTHR5CKuj5wedNy7G7z7xFsqXErka2ZMxiTn9D5RWnkK6w8jyxg3V",
  "key16": "5vUBkRDBP3GvZrQRXB2cVLEDCVoi2aFedNEf9y2q9Tc72nDmw54EvGErGReXDsW8vRif9ya3R5FHG8JsQ6nfoiyU",
  "key17": "RkmJZaZM7N3D3Zfc5RdB3AMCNyfXXQ6XorduvN8j1sxhdWHyWpg98oDo54YS6N3FHa8QaYcT2xzFNP7Tn6LnKf4",
  "key18": "3XsS7ihvmabvQUUR2eLEvpXmceDfLhye46XizzDLSJwpFtHaUft9RRAjERraR9V5yjzqUo8cfznvdABshF3f9BRS",
  "key19": "rrZQLgkrNjEgRbTzRutSRTqRyWVTTQBK86F2Nwa3mDZ5vGec4Papsh2WjwH6wberTULaSVDbd2Qz7cK2To9rNAW",
  "key20": "3LeoeuZGy1oGmJ7sDDVS56zPiSH4WE3nYk9uFMKCnc4yeSQm8yVaXWxsqtgRVVDhS3gMqtMkCnU1QNGyUejYvn1g",
  "key21": "5YiDNfx37kysLqj75i1Jo6DnHpmQBP8aZFN45MKS1GBwwtQNa44Wu14CjdmBexcvWJYjBrZDAofefbKWVGRTfgEq",
  "key22": "3VFvbVVLvF8aKvFnfYv8VnJhETURhbLSPQG8pV5rnBiWtbZ6fGi9A9b9pWxLN6XX7tJp6VwcK61TnM8cRqZarFqm",
  "key23": "RpjNTti7SQyjgYUAWbWavDZmog2vQikDEbxL4RdvP9xBEj884HatpFWDfxDg8wTyVGPSWDVh91cYbocvxJSfYUM",
  "key24": "2WoEE81JdsHRniH6XruQXm81RjN7DzEk9oY2o6Ha2RE3n2eBsKyXvEc42ALx7CM5bLPGkC8yJqxUdzU3R7SP1hjz",
  "key25": "3aWpB6Z3VbTRZ3mPnMjgJqB5N2qsX6eYATtyWN5ybvRwSwZc7eyfiDEvPwfoVRmS7iHrBNnFb8uasxpRzwXR6ARd",
  "key26": "3wJ7mxFjVUYKFHLCoXTgi1WDF1uE7tnpeTGkSjYqycejGDtnnJHWZxDDCwbr9z8cGbCCKecuJKdJy4gFQQm5E2Nm",
  "key27": "5kFYqR9ZsD4bYbquHqz5EEczkM6v5m4UCBG3xxoa4f4b89SBUtJvXeZHFBs6oP7Ed39UmAvDrzqVmjz2tv6xjDFs",
  "key28": "3wEUimuuf5gtQ5o7MfgzHMXNN6KCS9koJjJ8ThXgnLdscgVbR386nYVn34fbnzoZdFLMDqSiwZP7pLeAuewgaz8U",
  "key29": "2zF235qNR2PgC5EWSzEkZyU232cmvshXZ5T378JcBLfTXzrMYrSrSSSBf1GLAshP33kqtaDUbcKnoZRcr9Fzi1s",
  "key30": "3ibFUiU654pKUv9Khf7yLLChkTHJbnYgdtjfEz9bAqXH9pWpU8CDhFLNqA8hwxeQgttjGJyU7hQzL5jzKMRZG88n",
  "key31": "4PdEYsGWoAdNwjt7coWmLcDZzmUJBhSgJyKp1YxGGa7wiGosgabHQCEssJgbzQnfcrhHf9wBcvaNBfdyGYExQsn7",
  "key32": "McHkKVJtEpbEcoGhEHVb2svRcG3y2tTgSEh27uinj6UoVLYaW8kjSVNKHBhniB6yoxkRSQT6cB8UwjwNCdu6zcc",
  "key33": "4zLmkR5fU3XBoZGV2Ykz6ca2CXN1gSUqnUHpDQyDb4bZfRKu5LtVgqY81qTMrcLNWZHZ3u8abRXLEMDmeCA7o2jd",
  "key34": "3UA3Ps1NtPS3TEePA8Yej14EfRPZHCHLa3X8d29E9LpAnS5H33LxPz5w6qjY3kaoxy7y33hwHrmWQb1raugisZv4",
  "key35": "5sZmb2pdRLP3nmXAwDpC4VHDR2h3ySW2iN1gGBj7hWVckDmux4rGgSQZfitwNkPSKhgnmW8mBbDUqbQ8ATTSJd81",
  "key36": "VaKuUz6MDwKSuDHTnJgMwEYrVMP5vZK1FJTrhYGtP9xjksKx8nMvnNnATBjGZGYANgheKJDfEGM8WoHs67gZkEW",
  "key37": "2XjMtgHMZ6BSngrpnuX3VxKoBm5yaT2UhUwRDmGchCW2q1CVSKNDvkCppwABjpyi6vqJdvkB9VFku66nbVwKs2Xt",
  "key38": "2XN9rdgCizskhLNfvymzGbVNKpPaDEZod8QYovkDMYXiWGdyxSvMcdGZGz4oEAK1eKXfyRGUxwSDXRtmBnw85jkE",
  "key39": "YUBwbu5YykrqmSz163EdVHhXLEQNBPcgpfBr1WGuYRAYp4fZKrW6UCy96Ac6cENAjqY69L4BXm6wTNcHipCxMoW",
  "key40": "417UppfsV3Qt1BQ82SLcj7MBvo6AmzeYWu3YYUVJE1JSi6MZeYeSTvBwpvGsMPLDVKJTt4yKDh3nV3kBLQG18Eur",
  "key41": "3K9JAS1VMeHYqXvvGNnuUtW6gbeTUjw92xy8JH4h8ur9b5fYbwfYcKEVG12xNCe48sasP7JWqvrVhRWTSN8C8ALz",
  "key42": "3xiX1YAVUWAvj1jsJWRco3S7GrRCAxLJ8gFT2PEbFNSVGbEmpMoc4oRcYRTZ22JVrNEvxmcsDDkeZCu2XoFHETKc",
  "key43": "2415j6CMRqacktLAijyjbKV9zgUHGtwzN2YHzQANtRYjc4cw17Po12x5ieUWJugeUfbfFhAKtBAKFrkVs12Pw1pg",
  "key44": "51ZSRpMsSK7oCdx1xUfEDnm8yTDdfHm1V9DsR1g7H5zEd83NkNtaWg28i6Q3qw63rPvfGJKG3P7aewvVeKZZpJoa",
  "key45": "2FxUd5fskhqqRcQr25hxkRmw7Au1JVJPrzabXwkZoyXiczfKWRS819A3wiezyMhXGQQMoSjwESfLtXNKTGfjY6Qo",
  "key46": "3sUDUhbd51twX9CXF9JVqqeYLZMFmJ72PN132ZUxThRiv3v6YiFidCNpE9NFmo7spREzAntmdNBsWPH8MTW8BGmx",
  "key47": "28osGWFmXaBVwH8kw8FkKCcVrmVUqazh9sv4fhYgvXX7gRqwHTjKEe3E1oafH9T8ZkwzJJ1WYrNRAZVNGEuKyPzj"
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
