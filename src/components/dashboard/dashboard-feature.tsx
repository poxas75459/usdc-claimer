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
    "f79xWJ9a4yvzD7r6Jnmw1ZHxXtBi4CGbeRqpU2rEcLtTGoDLL9tVPM1TRCzaycFEY8tf8Pjiy7hwAV8xUhiib5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xaA16cyfVaRZxTLrnqm3dLTzVcbuP6WVacmTgNWVmjBsoyEfWAxr8SSbxUMZsjssXcfMoyx7Tcio7d7Fd4zEBUT",
  "key1": "3C1EhAgf4ZJtH94a7AvkvJw82adSivm7EoDJbvjZx6nPYcQADfRZ94A5jhFgxrZxmH6RboVZCJTtcVYENjSBSygK",
  "key2": "57S1X9pM3HiazJnW8JBmyMdFsUi5QE5wc8tFVP4ERwhviGWC8WevvVTBqUoHDEzfqKyuRw9WsPHipLG2UYbkNKVK",
  "key3": "5BRBZYfg8Lfw886gt92YDVeLytctc6xVQXydbgehcWhsUjYUFPv5VREQFUujoS1yAYzkHNCdXLBvZHuQ22fvfTF6",
  "key4": "cK2DVmcheFAg96QyruewUn2o5xXYWzUe9pZBQR9pNbPxnUUf1baFJSvuADonE5qVEijRGgQpVBSfcTf76sieFki",
  "key5": "Mb4DX7yj4BAEKHokeREwYZdAk9J5c7Vy5RwCX8N1urPSTV9g4U8Xp7bzGZLJLuQS6SbwiYoqKuSKrnKDaMo5TzC",
  "key6": "W4bLay7uJ12aYhzdXLAJhhi3QY7ZRWcmhb9XXRtoxwAvosYJFoALbUhMMETE3ZZ7go2SeZdBetVEXYB9z7mw5MH",
  "key7": "41QqJt6GtTBncYRKTSdctESFhBgcPYr9TY3Wy2QMj8e5y5M8vnZ61ibtkHKcvwMBSbMzP8o8XuTcNuw3VL7KwExg",
  "key8": "4QozvXf9VvVcfpxnYPGqm3SevSHJcqsQquAQEiCQZF6PSLKgBLvdBG2ir2vLFS3UU9m5pPmpNFDMP9NQYZ46YjkE",
  "key9": "43ii6xU1BA9K38J7qLCq7CgrWCqrqAUetQqTj3qgMn3QGQRk8LXPiKkZzDnaJVhP25isazS8EBqijVWzAFWHGZa",
  "key10": "4LrbMmAuDJCgtwKRZ4aLTRySfDVcnRf6YvawFiwmna6d2Mr4d1Yqjmw5gGkSVyXYNLoSNtta5wQjw7qMoKDmjmGh",
  "key11": "5DUFcRJ5nR6MAbYfs6CJFyRfyzpnbpbTmmoMnyv4MNcCBzoK813GuF5wmB9mtjFnbkELRMuds22yqJCgCUjrT7EY",
  "key12": "5mSxDFpxFnSuWhfXQtu6TpVKHWEz5PvHkuSSpCLDWtAXCxzFFE6mX82B6c8Ubvv2p9YGqKrChpSebfguakBekwFc",
  "key13": "2BS2RTMc3yPqV7ZY9p9ro51XEYAy2CocW5SwuuEWFfjrh5PtZeseH8YM2hEURaGKCmsKetWZ2n3NoQbRdH3wiHhz",
  "key14": "5yThjPo9WzswcE7HB3aL8meLe2ePXyRbm1bVwTgG7xAFa9BCcBU6ZHGjxPneavxxdj9v83VBrKaha51e8NBSiyYn",
  "key15": "5cnsMXPAqYYnLw7jFhnaTSo7o3UVEvQDbkpx81dyGr68BKoVofav5F1Af3k4e7NbmfMvjLk2DZYcx8YUGEHDMZM1",
  "key16": "2sEVHTUBCckBKqz1GBRe6K4mJApveBBU5NQGmDFMbEXg1CKnoT2CiNUFZfiQQWu1PoppmVfpHEYNJz7U9jPxAfqh",
  "key17": "3ohsajuoUQkn7PCGJXABh9vGaNG6KJRRaopfg4PSXDuSCNmGvczkfSGF99eb3Z5iBcyghL6fzPAhvxsDWAwZ2Z1v",
  "key18": "2jjiA9Y5knivrP3DpAqAwvp22jyhR1QXrvA2tKvY4npFVkmni4SXcPC6AhPa3mermZN1gBevyE7MScFruBJdtccK",
  "key19": "2vgZSX5mJJ7d94N8jARrYF2VD3s4SwqNSbfeMxuRNix32yB5PouXJkFR1Rr5oW4SRcsxFjrGJeR9kSzh63mLu3Vu",
  "key20": "GT1vTsKb3hfzAtxhFwKFbMTSpGjeA6ohv26Azowby5P8x48q78tHzF49V6VoZ5MjEiKZCePVwyq6k55eTUSV9da",
  "key21": "45stS6AMAwKaDa1pgWV5dH2mwVcMAV8xRBQLBjK91N617Br1TFhqgQLnXydWeExVs5rpwRvstjnLEA74hRafUfqq",
  "key22": "5FEvaKiWnqdezgrpP1t2GKNZdaQx2b7wx1L5ChR5eT6BCeG9DHE5DF5UgogG4yQ5uL4iWSAPDGM2qcNT5r6xWMdn",
  "key23": "4DWqM4mTGdy5fbUixqkLbSpBD2B1oFnUMzBheYrttXjBEffVqDK6dYZbTmhPjsohD3FLZqxV3JWX9HNFeK79jwDL",
  "key24": "4yMcyaQdXrXN4ntr4wESgxZJqXBx562not57iHcaQKYXGuADPWt46krBd5B9pBVVPZqqF6knw8twZ92eLNm6bfEK",
  "key25": "4ku7iTbaGT88MMQkKmMZvNTnEA3emr92BjAwUTMLiD2C1xF5kz4R38TmFw4qNQzTnAZc1ZupKYn2uKmwSWgdPXCH",
  "key26": "4FNZwNrbL2F6xBbmmKLKSsPGkJscto978LLjz2RgBqatsWn7FySN3gq92KjWpP8XivqFTbqDWT5zTVpx89zacTdo",
  "key27": "4JHtCDkVeebm4sBCNHmbJBXDLxNnGphPL6T8cEjJn298UnxECeubKG8rBKapzyiBtLbJprrLXDesq7uuXoAouATh",
  "key28": "2Vc7LFbVRSxYmVXdovcV8NriQnBrVAYuTEfGrA4navoCAvSU6Epm2c4q4LwGM96ZJqqBqs9Ki5VD4T27JpJvwHku",
  "key29": "CzGZWh8ntmJRjQ4RdT9PqUbaHCmPCYUfuwcCKpdvC5RKfiA5XdjSYKoi4GSdQTBkZxRj6T3VX4YioYcvQ2iQ291",
  "key30": "2UKBan766Q9U8bpuo3LsgJsPdtzYErZV8CShjiKDnggpCv7dDZELQq2SsF3e7b1394pwNaK7gj5ovdJyG45p53JA",
  "key31": "5KzYQkVSJZHmfTdMR8MgmBVtFvGusXu7EGmQE8BWAp4Q3K4eyvguRFMd7oqTBNoQUP6wViGoHbTeXgeSziSCDdjV"
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
