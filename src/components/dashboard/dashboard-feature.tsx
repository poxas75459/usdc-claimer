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
    "5EUwhdoo65YFp3mP3Vn8jPt8riuL7Gjgyq3MejfidMwqSx3CHChqMLBdc3WgvmJDmFfmmNvo515nZCU6kXwYsiuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sVmTid7m95aAXCQjPs1TaDTDyHC8ybhyA5WmZ2Sij7Ubv6wzwjGYZ2fTFeXPoTbJvbULrfTckt7ehRUY6neggqc",
  "key1": "2W6zYcHo3wnbhNtuPkVwGgJ4fBmkQaV2z3dmr8jtBERh244HDM75x7d1ZJHKpvhTQgtsUEvUAyDzBtVZZUngL5MU",
  "key2": "5LEpVTsTcZuAYtVvReSGeoAVzxmyhAG2Td14np91wYXoNDAbmQzqv4mS6rriZYVrPiJQGGwcGVrYzduTR2KxzanT",
  "key3": "4KLjXq7fFWLJQM4bQxNwg2wuaP4c5NiY8aMcgZfmiExgnHKfb9Ck3zzaSrmkLRCq8TFQ2MVjpxApLsL5dmbMtowf",
  "key4": "afsbsnLbY4KHyP8RJ8pozd5UQ7CDsB7wTphobJygXFEj1LrDR2xacSBFDyGutBoT78hMPQeNsdTLsrc3y1jJUqe",
  "key5": "126mVx2Eq4wMbZFCppux69MKKvDMjsjRGMG7toyYUHSMRe3HM35E2f3aVreM1es7MukuXPR7hh9YJDgQUrLGiKTi",
  "key6": "4eSQFmrvmkWe6YLbZgd1FtsMjD6QEjeSWsPWKbwBCd8VoLadjDNaRgugSejAB4enQMLhnQ41u1i5N6PvuTANytSC",
  "key7": "32bWao4AN5PBdfYDGzjgpruK7Ps65YWuwKnVS9RhsPHVHPqveKL4eEHSDktaBM8JSRNXchrgC4V7ooMcf5P9BuNm",
  "key8": "65wMDkCxVYCfE6qzBpXEDBwgvXqJbFwKy7bS5piRpGoGEbFmeFbXaX2oZgmmAAUbNNZyCjTEwjfJghS94rELCeqq",
  "key9": "4QNAwN6ejYtirFbjZo3uMKxsgQ6TAeJPiFMEQJUFbgMDk8yUjfxiV5zGfE1MvZgCyRUps4jrTjYsxavmMLCJYnZb",
  "key10": "3aXtaT6zsTXmJRyvrAEM39vsSAaMRUx715B5FEsGhewtzwdXYybyJnxw3xKBueUnm5H1MV9LCbrmaM9WN325gXnk",
  "key11": "2SQMwT8Tsmh9JCvfNj9UUv8Z3VFwsHayMkinDj2kcW6MhHYweyvK62mm8FvGZ2nKYuSypbua9p6yCQ3Y1oygpmKG",
  "key12": "5v4bEB7tDseWHuWmq9dMZ2NPcSQ71yj7cJcbWnn4vDrheVnDXJds2zqY15gZheWUVixf5ZJUxGSyuKcrufuPp6WH",
  "key13": "5pEP6xsyxHYAc5h1TXPaECZ556LDTwbgUnneE1NQHahoyYz3xwAFtjKKfHAog29Xk4PCyNNxo5SoWXD8W3Buyib9",
  "key14": "32tcbLYZh3yqmb86Fc7tVcFQ6G4DKbhRMXW9Qwhfwcy5mwhQDok81KqGo9i7zL2jDCAhvC4mSnGdPz4fa76N9TtA",
  "key15": "4iAtwXhLCcDLcGdwf55yK41LtQe3FE5cjuA9djAg38siALnZApyxpK4W6aowUeWVTRwBJBr65HyNaoNziJikEugY",
  "key16": "4Wmqnh1EsrvN2WMb9A5B1HpZNC8i6aWuBK9QYKm5bsSzNc7UEs4cuNKWXag2PA1C4jBvgAgg1MhbJktYCQ2DseEG",
  "key17": "4pR4ZD7yygwaCCupkv3FjH8KkLzYTPiSNBAwsYHntdpNp2pxUQ7s1dYkUJiRiWngYmoVCMYhMtBu4Gxte4GNj6ZZ",
  "key18": "22ph1XE17CB2FkJSdW4NZuCXmY1HTBw7pSVyZjxSt8HuJa2Bb2UQJJbi8YF42Co2C7AbM1ufBUCLFzNf5v3xF4Po",
  "key19": "2JksRaWe6hLDpDM25TF9Ttx9mXjVAoPWvX6ArmpmnbxgsEfJ36og6qJewb7ZtzsYLFmBjL5s8dZMYouzXBs6DYQJ",
  "key20": "3tVDN96oVQRPeuWkT3qmbmxpcmGzuVmAwM6rFiXo4i48fM4Z18guBzxkKgkUtgAkj13QzLdwVqAFTvTGszSg4J8z",
  "key21": "3UWSwK8LfCFCT7EBTWZWufxoDiKZ4nZyj4UDdnxLuCLmb4A6tq5k7kHyjhdSMkhTsHcZLsqNorS4tiEDiyzpLdab",
  "key22": "4s4r6HQrDUADz3cjwkNnwmgxymtioxVAfaDx8xQVWxyumShZHmcTEYKW6TmdhodT6gDPtZQumZZCtqoYEtLTsxPk",
  "key23": "2QZSgfNdUySasahjpMUZS3BCTCxJSBRhnzFRWSVwngRo74w2Q4CHvCTg2sda3FUaogHcztbkSYsRkCs7dfoTMfKs",
  "key24": "3eeRKTFnA7nS3QtCMqnuwMJ4Ycgctitd9ed2vQgbpvb1kt2nZgJcfiCxhUYjaWbLoNPHJFJdSRVBRSveJ2Dq5jN9",
  "key25": "kNM5B7oUoC2kPmQ9cmSFGJN8yhiTGmGjivfUizi3DejUGRjP3UGbSgXibv3h6V2xXacGtA7wQfAZKfWUJNXRYQj",
  "key26": "5ZXK9vz4JbgBF6xFerogmtUeuiVwokTTRUVkrg36AQ7uuxbP2H74C6bsbzcomfN6WCDJyg5dsXNHp5wkb5uyP4gJ",
  "key27": "j78sKobTsLjBnaMafoTA1aWJcjnymSAAHbWpYfKh4oqXnC8zJZhLrotrxj3eJSTpJCjx272aiCqd8VsqpweUVXQ",
  "key28": "5NcZFfjmeFz28ZvNX1PQos4uaTxVetuXKyf7sEJNgcBkZC5MApMmCsmaWDobgF9psy9BhUHGHRQAWN1Endd9WxtW",
  "key29": "364VSRME7HWDbkPEQAXyySWixRbsNtBzev6Ytt3n8Pb2ccxm4yEC9toSZ3G5ztqmruwBZUTph15EgNoq7t6WvfsY",
  "key30": "4SxeS2aT5BLhDHuPvA3SFvaHBee2iTc2cY5kECyshFoGKGK5WnN9HG75f7ZyLvXQSXUH2f3moCaRh43firfu7qJw",
  "key31": "2htju9oWhqqNqevfFgW4KtoerSJuie2ueCrQRwZm9ikMBeYkhzBDctkYa9DNMVFy7oqS2fxqzWupogm6EYxme6Jp",
  "key32": "YC37rLWmgFGx7C87FU3ccnSwjcRQLix3VU2bR4iN6ZdGzEuDKunPTKK2qDeGip1NTtzvEgWg76j3GyTSou37qGE"
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
