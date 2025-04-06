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
    "2i7AVu4LjG1kLiKazmnEMgExV4QRVKqfyQ7j3GGrik2J6iQZ64CxbgHt2XMHHvRtEV29D4VF9MyrRBTtxq5vBNLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cG69kHGsLFAcEGoeCPdKS8xtzwjGdRwzw7agKbuzbYNvHsXAJw9TwQQ97pbwZxn62TmamMpp3RsUTU5RPnAKnVp",
  "key1": "DC1fTmQZaAuWZihYSxm6845SbTDPgCdT7GQcxSumGuXSpTeakCiDogvH7yESm7tphdQgsrZcWFV3bqzxay5LAAw",
  "key2": "5v578hb69kCpd6qQ7Dj8dc5RLiDeuiKEor5qZvV9ysn4CRSQ3bXjJUEjkgeGLR16YM9QTt6ebnUWSgzdz2RNrZVg",
  "key3": "3N5co29TNwndCbA76ndPg5fR5ppQFhE2pptK2uNHcShU2AvKAuJ9Rtem9Jwm31CmurKvc5PcdYjWnUBS46Qpcgzb",
  "key4": "2wjcQnZBnNPc8Fruc1fLxc6ak4UzbXigYo7FCY9MfcCDHP4LvTtyo7aX5jiDgNt8pknYp8ZYJyrt5msrCsCsHzxw",
  "key5": "5Ru48Ae8XStCE6DpRfg5VKHbnQ7LngUufSUTVyWe8Qc6nxxtUU7Xjbk9zuvXE7AdfmCcGGqR4Jkk5FWZsrwqSjnW",
  "key6": "wZWTjuZbfA5CC1Y6uFhdguAsE2tWUbe8mvkfZAKAcwgxgszvJioRtjjoNmyLkyzgVT9hiXVKrXLeLscjp9xypZG",
  "key7": "455PWY3MWSBjwj3DfWh4fGifZ7P2ZyEm6rYcJu72Z5RNVSdB1mKsUKBYRU8YuHZ6AQyVuFeeCutjmUsu8QSTGdy9",
  "key8": "4G4hSgk4X3Sps6Kc6NnbmLLseoMvJrmHa5fbWiagQrgf5Xq3U1hLppq1fzFV9CBYVE5nsyXWJ9WqFML7u6fMaamM",
  "key9": "3a9pCs6SZ8Yfs8oVLXnxtBwLFJ7MNmwHzX9WkC2xfYpArskDAVr3v3PcY1v7S9JUtbDtXs2Wy4fmebRQ8ZkecZpB",
  "key10": "2EWSP7LvvBzExvx45yZftZzyLz8bXeFD6dZvxcgBA9SZT38kqaQfeAFyURksBkWuoEsRzuQyfKMLPEGLz24nsFoQ",
  "key11": "TvduJYafZGg8HBKcbeaaZH3vRzYHBBeAwjjCRfb5vwSbhEZm3pGm9MAzYGQjro8KPAETuRYYgiaRf6BhCK7tfsh",
  "key12": "4upC9xUQpwbq3ZMNaW8Jkb7GFce5dRw6KeWNQq2XjbTZGpeAqBnte4Ctpco4B5hVxth67H13zDGtMksTCq7LhXsU",
  "key13": "57H5pCcLYP8CBrPZhe2zTESZ7cGS5PAk8ms2qH1Hc5h5jiqrm7VA8znsr4rqGXHSJYgmPCM3LjwsZsPw73cHqWQL",
  "key14": "sZMX94E9ACUiqe5RUwMmDGkC3L5jS3fNKJ1n6E6MtVGQcrY2WQ6hNZtX5ASgjYS5Yatnqg3LsVaxnmZ5qUAoF22",
  "key15": "Qai71QdmPRjJiJUVcvRHxF8BH9bY4BZGizLkqBUWQbnqCyAo692U9z3GbizT2yHs5tnKW71ky9XMDrJEsHrp867",
  "key16": "52gQYfaRcyJWDVMmRr55TT5tBt6PsnteKb1QuX3qiSeCjgaxiu4jQxBjxyhTN6satPwPrjmz28TQXF6WoVMm3D9B",
  "key17": "2gztcq79yZWd4FPoXkGNVgyyymqKoSFtNhffxFuTpg1RyDcn5CBzeQ7S2REYERF84NvMBRCp3xC2b4MbFiy38jrZ",
  "key18": "EPbjK49DENHXXPzmxpTB5aDgwFHQBrk9VSCnpgfShWH9kfw54rDLGXF88ECzyq3HbTxLEGKw2n9HbxcmDxptPhe",
  "key19": "4rUtCa11MjwNjAhA8MGnSQys9cALmquDK3zWEz4yUMoL9TEnRXioJxo1CGjpFkA7paPLtAY8vBrAynDUaeFhLwJ7",
  "key20": "4c2uiZnTEBWjVqXgTrrZZdM7JaFH5TFbwaKfqkeD4az1B5uS31ctpxuVZmHEJTFoUBa3YUMKHjWpKktzWT7cKjbF",
  "key21": "5JaCfZtSV5wY5ZrVGVCrW7V6sV8N8LC59JgUNRMdCfrYZxb9UcUPQw4gxNR2FTdpW36qJKHhWiQchanx6DiNvCwc",
  "key22": "2sszjFX2EGPTWz5Vzqdtsm6qftapXCMtJmiXryPah4Eo96V7vGKG7ia5DGpHyjWDmE3PrSggxBo5MG8WQvRv7WHt",
  "key23": "5kj7ccLSGkSBKaQ4AGxbngfrPgQG9JUkHx2d86q7pdxwqKwGsiztGZgZm3oTqVqMjfE6Cmr6HwDDYD62nkvjHxPU",
  "key24": "35N7qauhXtp6jchcW2ZtsFF9zN73PWcsBtkQ2jajymZ5Y8NnAtCzSvwm8bDxgbftm9hx4D8zS1zZoAgb8GFjm5n8",
  "key25": "62JvXjWyCMNVZ6xiCu3noz1MfwkjFvW7P3MbPcVWDpPEvihge4f2fA6CgyGqUfCoiM8aAiXGefpAgPXDzpeBcEqq",
  "key26": "4Xr8znErX8FDrQxBUq5GDxt5kzRQowDRGPyaNXhPeq8swD2qRTgQycQe2aym8ia7zrtJ466jAhS6YB2eRuuUv1CG",
  "key27": "7NStYh7tBoFrRF3aUCFxXyum9HYBa56bwxb8xp3FPAnqXwyTaD1JL4Yw8BqfZ2CZ83fb3hi1wqf4jzBBR2A8iwn",
  "key28": "5SC8NEP5VmbxhwJjNCo4HzNWwBNJYbU79pFmEhvJJ5VDMaHa7jHvKDKtZozJTnH8oEfkFxpoDn9vsGAxStRqphFp",
  "key29": "AQJya5sMhts1rRy166W5G4ApQiHeWHnVtCiHg7nU4c1s6V4aofwHDkQ7CzmMxLfWqTRPNB8n2umyBLgm4h1ZqyB",
  "key30": "FnSmATnt64nMVJuwfxKqtTegPSFojwXbZo9RoEDdoX4n8ufjYw8veHLftMpo5qJvosirbfmNFodoTZhQGGGgLSU",
  "key31": "3UD8waPgPoNJZEiKWqYWFS1bwq3nYA546qS2nvaysWihDGmS82mhk1mWM2wrPCKvJatuquN9WQdSxcnsyffKt1QD",
  "key32": "VVFZWChk6BVZ8BBgkrhdDmTLSv28eUTPwB7zCGmFvYxumDmhP1WkDbYtccgyVQqnqemJ8MMx8eZcusqYNFWqtTW",
  "key33": "jHEx7A3x2A1mnqgmZtfsF57a1Dczze5n5svnTY6JFen7SmMjaYXEev9DZ1pkjTh1SFZCp98fTZcT6MBKjsvEv5g",
  "key34": "hf2MtBx2t4hssqUSbBJ9KoZV51pNFMABznoMRwTV9mx3Phd36JQ2jvYPLbm7cKQNTAqE9p6wS43fVJ1yt853Re9",
  "key35": "mNTTdCRAjFfnwcQpY38mt93Nbvw9cuuqFhQ4AkuntHzQ1qVe1aWVjw9g9qQpfuAWhHtatRhASqrYwzHsj9Kyc4F",
  "key36": "h3wKwmdEWGQr14fCcAxgBgVmamaN99pmRi1tE6AVpFt7AQ8fiGv51rMJYjCueKZ8rQddsw7Ktd8WbiTnDdD3a36"
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
