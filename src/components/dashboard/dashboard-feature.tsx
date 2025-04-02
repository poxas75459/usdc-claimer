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
    "2YCveM1uMQCXihcRJzAZFvraCQedcGrr4dY5rX8TpxpXdbXy7GkY4VWBi7Udv4JE1MwfR4nwNT5oKWeHAbQ6CMu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRxxWGpSjRDGX3xUoJpXbcsYD74oNLZGvjWt3zxpf4AzFkcHASpoVV3woAqHDxzvLGFPiW98BCxETT6oYxgWWHt",
  "key1": "3XDjCjbfryWNSvfURg4aXefSp8KyEbKUJot1khY78s7FTHHFJ2X1sLDdXWUXegarE7329DSV42WQgd18bEg39h2R",
  "key2": "24DRxg6D8bNceCWNbyv17WoqWaabaUzjDcuo24upcn124vy1ZE691mDufrGokT3sLXBtSXYvULJwccwjpzr4Bs4R",
  "key3": "3Gm6dTdwGgkTe6f47UewvfqichP8P75bPgezYMHE43SCFycqrVN1AnqphyazDEhtYnBxCmfY7CrstTBAprZr1M41",
  "key4": "62n6zXpV7oWG5XzrhVECRmduTiqUDtMoCmJ5x6m2TVw5vbCZ9AS7Aduc1r233t6UyBY4Viif8fVTyBkLkR2G7jez",
  "key5": "4Bgh4opayM5cM5FxLSjkA8VuPbTkPJoUMg5RV6TfF96WmxBUENcL4chdCn3mQ6dbpZ6QHRpjjN7D8GjFTb4N9z5N",
  "key6": "wrJyk2BEgNHBNSXZx7CeXTcK7QPrVpAbcybttwxkarujhzPxGCiQQYUtzd2PGFaEvAuoDmHuLQZFwr4rubgDEjR",
  "key7": "3Zjh3y8kdk8LguKpnUGx8AeyEwXv898mrmfxSFmKieHF2VAm45XiC3sD9MUWeDgRpemQ2NBqHYPGS2dedySeffeo",
  "key8": "4v9zrgV4LmY97zCtK6tCuJkZysCm1eAqGdDcoT8b8bctBsM7YmzK8aMTEWKWHDaHhdXzEqhqBgtR64wmXbzmQfY2",
  "key9": "3Qw1kT1K1A2Dc2NHT9iGkXAcmx8c6dbNYuGHVrKb9kFFwvTEPy4B3hWwsvJoBcqwTDNqTSeNo9UF9YicBPwvuQQx",
  "key10": "38EF8TaNQFn27doJhWaP3C6mtagyFZM3gopUei5jnhdD2SgEJDr6frvdoUAeSiic3LpeSuZam8PY7rmh79wboMdh",
  "key11": "3xCXvYr7iyDTmEW17Cc5iT1he7zXmq9JRJ8F3b7kxKtkRtMttEzTNa5hV72KQX6LU4b9dk4DpyG5XQeSKQRhf81y",
  "key12": "2o44NAVkMS1BkNRp4xDukrDgfEhsHYPAGHKxsD39KS8c7GBmBdEZY3yGreJowpTpFoLpUR7FuqeVqYd2J5PwHpSs",
  "key13": "2UcgQYzy2s25diAmGfoNzfm9NWNL4usxtCZo5Ann6uYjbGu2LuJzeqG7nYTjUsFDT1p3dRQAzVfD448JaH7SZhiz",
  "key14": "51eScR1M3nKQZpxgfdGP2NuBVZCjW3YjYdhVKAaocAGEGyv585tQTCSqX5sjXDAzBSZv3vLT8oZCs6RnXKTUidei",
  "key15": "5bbGUvVj5BSL7fJTBBZxvnRUQKoeXYGqGUK6P69X5MnLUZE4wUQcuh1ZnTbw9kUqCMMVGfmsSGTEEpJDuSYVjKPo",
  "key16": "5ypVUWXiGnowC1kDGjzAJv6Qd1or621DQrnPFj9idQX6avsStypoVcFsdRC2PSUhtY1p8e8ip8E85gABQYHau9pg",
  "key17": "2dQvpUchY8pnAhoQaoRDCa7vRdNtknfVwxdzXFLHxBGrjShdufBgKMVmdCe5oP2DTseLJjNk7jDHwWFgxJYq5Lyb",
  "key18": "2FddKcQEqi8rUGciprhC6Dgv5XJmKFMMSNWK33TyEndDy6YMD8QEFm3T8NDSbwqsUmeY4DHgh1ZbEqNAuhQNZkC7",
  "key19": "um1JWiRut9HmjDjMQRdCE6GBSZTiMydSDnRgqUzmRyNCfNek44rPxG82AJo51RBMzvuwoBta4iChzxrbhq6YVa5",
  "key20": "631247X6B2MibD2ncX8PQ7eNsB4spcbzsDaw1TusozStVgQRWLHDCSazV8hs4aomikWdcd1C7KqvTc6FpnEnh747",
  "key21": "2NuD5ZULYm8JZdJs5B321p2EbArctFoSsf2zfNt7QiYfdJVBsAb5cdJUQDZZaeXHzXYZHSDjKbbcUUWuWWRJC74W",
  "key22": "4Fh1Ka98GVVKZFbkmpRh4LAswcN1sqYNGNwpWi9j3rs7y5CByGXn2ZpJr4q4ZACn2XTR8FRr1Qo2jvBueTDTUeh2",
  "key23": "2VcSPKE7dcrKnG2nQKZT4vr43yeRNSfLHfC1ZTB8SL7FdtkDNtS2DqWo2d2WwKcfUjZuFqhiKSLmC2PcLFxRERKQ",
  "key24": "37RJifZPq4va1LAjv7SB1yD43au4BkoUaXreFbwDm6N9H51L4y5HZbUA7Wos9qAHw9h4LwFYjvwgRhckSw19Eutt",
  "key25": "4YFJoMtNsGC6H8GVrasE8UfvuAxKvG2suBLUsqE8fuWuNW8zN1xinGMC5bFdyML6AvU3VZ2G9hVfP9BsmcGX7Sgy",
  "key26": "4smFu3xA5PLde8YzFPZqv8i6QdTMEcnNM19PcMQfKFyknBKBaRMXZsQhJ57SgeXSR4vE6ijHxDB4bi6PFLfbjrES",
  "key27": "5M6buBjGEUwVmUVXYAr5i5ae6KB8SxuuYDnehL56vn39J8U3CEynSfoToCYD4qoudzMXHE6584ar9bAXCC27vmoc",
  "key28": "4xYA7ZveZLVioR5WQKGsCWCTk9YEKZFujdgeaJYbCYPxm4fJbU8c8ei4CjqcGfFenfC4pEX8bRpDmpAvThyFivgC",
  "key29": "2oUZMRtXKWuUJ2afFagg1y9xLrNovh8zcdcbdnT9Vu1LeqNPQahbo4UQnP8eKQ7PqqKLNyWhMJwV8UVs6d7jzA2c",
  "key30": "39XM6rtjkeAgk2UkLziA2p3Nv3RJUd8YEY5vCv5zbitKKP4j4a3oque93EGSBFskULWSwcNWhQeyoq3BZow4ACMa",
  "key31": "3oirThtfgqbrrBnH1ExGMig49aTxfwZYSZA95vxN8zSwScStzerrGGbPYFx42GV6iSxFg3uE1wDwxJv431Aw8a2g",
  "key32": "4H2K3wAvQCDsp77p4cVttbFLCtFvXCn5DkMfvYTAoZdqHvJ5fcwzWKFXLcpGiw1nQuz249ZDPt1NgJP4vaB4TDjx",
  "key33": "DsSU5R38HMMfSjmLfW3XqZRtBPwW24fgmDLGkYk9acurq8avEtfU1DrEtaBi5h4tm5rvuPpjwyygG97qd2a4zyg"
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
