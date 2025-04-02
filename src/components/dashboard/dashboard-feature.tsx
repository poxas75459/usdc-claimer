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
    "51oLiHqpTj22177gxMhvHt2HXb4LkkHm9hsz2UMTYDeEwXk3r6KVDSpxJvr1H1ftUTPoy5VsZjJPgiMsogpcXa3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgKcF77EPx8KfJAbUxHNNBdz6dnazW92APspFo6hTgJQSTSXerqBF2Ak82aP7z3RB3BFgDto9fxQP8KF9rS6xH8",
  "key1": "49dSufc5vf297JRodSE4yYYGUZJHNLiDKQgcK826ZZ9o8qNRezAWZaLpyhP7GeD83ATx8zMMbP7rxzyR7CR9Wyaw",
  "key2": "2BfRehGkeFFU5L4EkpygwnFuPAhc3jBrgNCYDFEXcHHgZuUDGWPtVSsdCg37481qESDaRLajfvngFcNBFVXFNNQT",
  "key3": "3CDJcSzBTnofReWjctySo6hgpAwSYSTefr6gQRLFaz9LD3v6FciNdH3urmSc7ZNRxTtbY8EGnrC5s7NdjeTfvpzc",
  "key4": "5zQ3aj8BYYuir3cPvMaXKz1uLS3jHyQqJFUSugsDcBFKXFe2rFsMuN4hvDas1QbiHyoeP9T4XU1aD1RsBM146PFG",
  "key5": "4B5D4i1r5tinxfYVUpDhiDkk8fJ2PA3Wc7fJKVU711iuhiR6B3tm5UgmqDrgPfaRVe64xstnbxwTb5sQKzYY5uHY",
  "key6": "23mvQh1YmZhUooEdPe29VdGsUHoZNxQVYw3K6U5Gr2AhUgsgAoe9stz3ndtoZ9pL4Azx6Bdh53aBMiozjJsc23t6",
  "key7": "2hYUePPrUcZEdy2yjSvXphuswwh4YX1mUckvGRq3DNS4St5vsiZ2v1Vv8vyaDY6eWMWfhfcgbnZWrsc4sRna6qvM",
  "key8": "3zq6psKSRHqofn7rohY2JkSxxdpVwhCSAFB5wJq6iJ24WUnN3BKhzqR7ACxNQsk47EonxATALKxaVbfGFEyhPrDE",
  "key9": "4vxbMjyiD5SikQLFQS1tnb3L8Q5gijugMhdCpuBiojQ9WX1Sy99GKfaC5muQgahPTrXdbyM5tiukVSTjVkLRXzkj",
  "key10": "4gb4DJbQViei96m4vR15aaBUrrRcsZ7ijrWo7v3RkebyKUYMF6zE3EURpDt5u7AfuoJVpktKLxts7yJQXM44c6YH",
  "key11": "58EFsDZRxCgUDWiBwz9hAtzruaWcs6KbF4qVpEmcm5nYpFusWqMXopJCqZn64GpXRwCA3T5PrPYhw4VdEFuvXw6T",
  "key12": "5HVC1bfhYNAYqPenHSXHYcuEuWvjcqwNuF3DhNzCiQJxryx2ACfi6HXmaQ2zMAUUZVBW8QVzL1ypk7w6p3F7mw5z",
  "key13": "2zdfNLdhybFtT5joKvKBBjisPLZ7tNpfxQJtHpDMWFRhgcN6TyEaRwWMczYyNYgXWXfhX1qrtwcUUUs4xvesXKyX",
  "key14": "5BVZt6zPsMqfmcKFhTGanZh22qtedr1g9dqLpFJp9VcJpLBVqps6eVZmbPvo6oaNUYAyCyJkdRLXpmbxX7D6Y73z",
  "key15": "3ZDbUj9GjKkoW7BGcdyiweZ2b87WQDq8pe22YpyJNuUzVHup1REf5R3GrbSYxQRxMTfXYKNj7wgVDo8wvHVNeLzD",
  "key16": "442ZuesL9eRPhZ8GT9TLow2bURXfW5oubTVKfbMCBGrxUQcaPA6GLdpNFskiLj5ecc2rFpTiw8UPptMrrBZehwwH",
  "key17": "2vJWsYCcCzVqQow7uxgVzwyaqDVNSy97gzD6tnhremCW6LUdubxQs8N1EpqRDRrGTXvPc8poFwPwcHPcuJtspXqC",
  "key18": "ggUTYp6WWD9HYmNFErBaSVy547e6wp8srpBvvrHYf9kaF8JJgH1QqhGFZ8aXYTcu7Aj7RfrcDqfL6LuQ3iqdjS6",
  "key19": "2cLzabd6es5N26cJVen8cXCthhFko2PdPXY3c1hG98m4xutqrLdiCH6nvpupt44YPPPey4M3vBD9QEXxnTakkXDj",
  "key20": "5KFeDq7QUHn9fNPbdzCTLxcEipyq7oAC4UNFWfdCFJNtcQAuZn8hZwuWqySj3VFHY63R5rP9C7yDigcWu5bAHWBc",
  "key21": "4caLiszCkp6SGqBdjYCF9Zm15W3Y4zFwwp1dSp78G6ri8AbB9xpSG1mWpxb31EQBbTQNhDgdbK2fEBSozHdGUjrs",
  "key22": "61DGn4GFBMQwVjHfzrJKf3BocAcjBDszS2GWEyr1cWLUtAmUh5P8HGEQ5qcVimzR46xeq9eJ7WTSUoCd3uKwk5gN",
  "key23": "62zMBiwWjXCB8XTKkxPePUSpnN7yaZsT3zzzT7BfQZHcznb28NrX9Uzcu7PZq3ccrpQiYZ57aT6Sw7dNZFu7Jdw7",
  "key24": "1zkKM9xcSntW8dA4caVyBnRDY9qNq9Lkw6ZYLr2MwUZ5evPvqQ4bnMActinTBYakczG1h69PQoyGgR1J33PCmMP",
  "key25": "5DBtkk1Y9X1b8QHEYH6JEP5xz4zzLhAH35VRFtJgA1jHBJ8uuqNGsEFFqA5DnpNfSucPQQRRuFeYkZ7ydZXz5xf4",
  "key26": "3saToGgqBeo1twkU6zuJEBUYmMWxX5zBMHmyRjfg6ZroDU1r95DLA1FWNGjDWC2aAATJEZXHru73ba9J5iFFAotM",
  "key27": "xRJLacwHk7w2HxR3Q9rAQXgouji5nksaoZhMAxPE1kGqwmhx7onrRADnQ4QvVNtJsGJgxZjsjQi8Jk22ioJRmQ2",
  "key28": "4GbtJWBRLbZWhhxtSt6AgKjnDP1xggDgvx8e8aRmiSmdXTV43d4ALLUeyGFLs9V3ZdVryy1qeJa8mKma3waVVo1C",
  "key29": "59gzafMi1Q6sVFDVsaPpcPR2yXX45VunKmAhm4SjcupHDbJL8eTrrf8Xk7nwHD2vNhTsdVWdjbM2DHHsspnnrMWF",
  "key30": "5VXvo25KFn48MqCABDJF2XTbHeu9wP8sV1th9bM2gUnCdYc3aJCsnHRe398TmvePmi17BtUduyRT9ebF8c5c5PBA",
  "key31": "3v8ZPqHiYowbfAT2goVXe8Hs44fdBCFMzdYibeUQUj4kcEFAhpjzuwN27ktc7z1R8cGVG4P2ugBSfYnbki1cHuB",
  "key32": "5LZeba8xitcmcqmUm8gbujxq1AFtgkCrDoP9A2xsiwLtuUQHAjDtjLn2df6pfmHVDoPHwj75mwDpC2UP9ePSEWDm"
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
