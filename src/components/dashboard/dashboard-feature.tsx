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
    "3LMa4B1LERs1kY9kC9d6bkkRAHbTrQrqQk5Xt6sLCEfZzTcDHfRdEfAGhveNBDiczhpschFGmBbAEFmV6WySQT9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24wWFGNut3rAgY8CLwd6GBfxUSuGXPZvgWi1FDugSLevXPW83mGtr1LpsPf3WzrfpQuUp8g4qz7JPh5GZUGS6Jjd",
  "key1": "5QWDoDNyeLVUkfSMnU8rLteRiNmAx8Je4rhy1HYxdByG5vVRg8GnNr5xroTQTnXAB3YhA7BLAQwKtwxsfU1sp8xa",
  "key2": "riEc7js1QpzV1WqfytrvxzL364xn92wtpha37p5q3HRhoEmLtHa6Fgm9WWXwbgHKM5xbT7qJ6DLF4TYkd5GRaCT",
  "key3": "21tLCARhYGJVY7fafoXMiExRPJaKenL6CUqgTxQAmQFoZqutZuksHSgQ2Lkkoz94eC2taYsP9PLwgFot7fr5Vzhe",
  "key4": "XTxkbj81Gcfqnk466wWXNGbHg9sYWfBr8oSct5FKRmM13GKeB5Mb7vdXdQH2VPk8TGQDrwZPX4GDbU8Pzr5xayU",
  "key5": "5Kh3hcNbHks8qTYmATXtM1E7D9L8nSqeCKhz27HvNSFApA49SYNzRFem7mhXKRVnUZaBUwBWFGMdezkWNA3PvPzM",
  "key6": "2g346x3RVsx1XU3Fgipbgh1jEWoHTMMf6B2vkBdBa1iohzmKEtUY39na45DXVWyRXYaYZFLJWmQq8YR5gJhNy2Wa",
  "key7": "4Gbjpdh7PVZtCgbMWVi5ZRpSvzyXh9X69zewYyuYCt5v1RmNiF2aeGFrktuC4t6f4UBuMyCZwueb6JEBFgHiqnXo",
  "key8": "3akQL7iN32Vo2oP8LGCUux4DH5Fr4BtptaPFjCWwbjtSxesUrqtXeqNL29nuhgZJKt54LDpYTKTSKNV6eAzBmhpu",
  "key9": "4vBNaVRmmMFKMdgVE3mUZ35fJ7FckVviFECGxp2S41tH7GpBKMza5RhNktVU94a8ryuk1vEYjVL3gTWqB9h34EcR",
  "key10": "ARXTHUk36TfJn2ja4BZBt6qUdbCTs5AMe9WhboBJzvbf2CgZAygHTzjiHDRfs7sEYuWZJwNzToEZjW5NeDtzjwH",
  "key11": "y7n8aVTYtay7tqcquu2Pir5h8XzSZbK7gSQcjDptPaUpUmV52TxGgFBY9UReFt1fmybnEKNTktiZpTyv8PNxea6",
  "key12": "5PUNER5SRS1H91HhohuGUMGEQG6v7UN3LmMfgVuCZGdth7b3noo5ggZtZ5LyRm85XSmpbaxAax4gWWM7AiwVKsZ9",
  "key13": "r2cFqeenPsPgXYhY6o387Tm8aJGoctKt5YKa7WvdeydwAcE9JjBbk12SQi1c1tVdp6aFS2DXQFN1FcX5oWrLA62",
  "key14": "57k4x6jcwUt1ZKnkkGXE28Fn5GmdDfFtxL5YK6QVAHr3zp1K8JMCkxQ1nSFS2JuD8drLqHYDpsYbLGAmarTsugbS",
  "key15": "25MPC4QVqS19SxSUyHfiPQkYjFYcgn4jCQWkXkWQNcaHUzkHRZWhAQA8vPSsoSCRkJrpRDBJbt6ivZKS8ZrHZoeF",
  "key16": "5dQFdLaWNh8EvjaiTNNpyUWTCKkhVY6HrDZq431eajggrDXUFjG5qgZrmtFCW55GPT4NcGZb2Vw9dwyRJCzswRnB",
  "key17": "UMf1DG45uZC449Sx4Qg2dTx3WangtnJgUdZKAPZM5GBsW5RgQowZq2nHXF74PRP6qzVf8nZdoihRFM8cWf7Qj63",
  "key18": "3Br5527jYuWXRRzt3NBFdsg1gi9W7VeWVgcvSjNqCXPiHfCeqM34nHyoFMjNGTGXUaryWFHLmK4ufwtzJfZcyj73",
  "key19": "2CarHoM93c9w4gVyCEBbhfWK4giqinj34EeA1U6SRh8bj9kzFZ6feaeV5QKiwpT8Dw8UskURoCa6uGASdL2jAV7M",
  "key20": "NE96x9DsnVNAQk7qBDRKKMh9Qv8VYVSi4GF8XQN7CvTuLTymFciqhdgiwh7iLtGhMzu32bJ63rrv6uB9y12khqp",
  "key21": "E8mhNoyuqbEKgofpQDnagodXQHVj4wHScAEdmqoQoxj9WugdETiEJ7vo1Eog8Z8SLv8m8J75hYFg3ovASK5xLtE",
  "key22": "qrUjUyusgJ6hsmNHjggeLpxHztokA5W1f3oHVi4i8NS2qw4yg82EWtu3FPgMA97moFz5wU2U12KdLGXgLdkqFbw",
  "key23": "2uHDv6ZFozSBGXdeoXXS4fFt8n7F4sawoGPQScYWJvTDxi7ZpqkDWVXhMkKz3L7Jd9GTqZZifH1gSRWCBue2umPh",
  "key24": "dsWFBHYyY6pDfanLEzd2h7KUY1yzXunQVhhUSiMB2vGn9gKC7fHxW3BUmwg1MoQxdiJPBDXgaLEevjktX2KWCA9",
  "key25": "3Qo4RFGM7ZS59Q6Xd6Jb7MDFo9xDSLVcYYH69tSLD3v5Lq6NGXroYDYpJQp6NJby5nPVvhuZPvJ2qcvSANGQpeW2",
  "key26": "3VhwdQGD7AmCrnhPzrcyemGW5aHBskDeX5mxeY1GKt9Mvj6KhfmdBTjDFA3pVN9swNDiDyEWqJp5N5vRdzuwNJJ5",
  "key27": "2rXPCDHF21ZBZEBBspv6ETofEg9wuvtvdWFEKCq6JswjnXWq6qqTUfuQfxUuxEsXE1aTyRhf9z5efXHvMSTiAkqG",
  "key28": "2DJqUmfbDmyz3e1h1L6LnLoECKAnQW23CXHNheQNT25CBY9Td24tyzaEBPEzZmtvyeyaSvSdrqA7qXAP1xYUp5pf"
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
