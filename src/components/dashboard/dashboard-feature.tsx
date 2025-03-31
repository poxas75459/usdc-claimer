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
    "EBvK49RcCmvBxHMgtSdFHQHGfQHUFDMkrYWxVcy9j24N69J65yubYEgjoHWbwJFTYYhrEcFAHo8bCmyAoC8s9Yt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHkWCo42JHmjq8RWoPHAwr8vNaLnTNz4Z15H1YaFwzq7CZxzrDifR8cwA1YdwcRK1ChKgtikK5jBqnJgxpibx6R",
  "key1": "3TUskLLuazA25ek7kszxNaGDSzBfGZLUsRWVpnyknVxHisfe1FJxnL68zJtd4krHmijuHGdYGizZcaZ1YoMFRGja",
  "key2": "3jF43HaHy3pV66LrYdSetHAwcKBmTDtz5VBj2S2HKCckzuZwxVhXbvLGh7H38tiM2eBtUCoCmZXfi4Ayg8ftwMaR",
  "key3": "2QEVX17wsdVoGWGpXcRtCAKEaiWnEksQjaGMuCjrTU9GXMiAdRC7wck1aGnTmPwFXqbmWiMsMugitf755UDRKHCZ",
  "key4": "5RaW3L3DUvjtFKCq3i18nsGv2mLCHFujMzTMMnfckTYWd74LNhtK7YoC3R6V6qiZWGTh63HSrwhDs9qgAniYvG9o",
  "key5": "23f7f9PUG38361dwfqecnDfHx5frzHdibJ8NTsdKpWRZmRRQHytF6ocjFVDZF1GF9BrAdiGkU9PhytrLHs2RhHPi",
  "key6": "4TvkpDMF3kpymqbn3x97jwj6nRK3YYBf9L5sQdE5ecUfqJRnu7TTMbk7Uwx39WCKd4JmMWJNR54om9sUddconHyw",
  "key7": "5fbqxtZL9g9Dyz78Ph9zGAjTGwGXERTpgY5GYAJFKrPXDTyqnv6Lypq2vac1kL2DjhhecE9XHoq5xbRtjhBAoB5z",
  "key8": "5QjfAdTraiaGDeMxu79eg75rbbeWRZHnS7mBM676vmAhhqXVm8Rd8a1PVvJramJ1ayY8MhuMsm3huaJcYEbLdKrS",
  "key9": "4EsfmmLNkuwm3bstckhzb4mEuKKqbD1yBJkk9fhAk9z3ieAXceBnEeeRwQQFsL7rXZa5kF8aiDWxu7x8J4SdeTkX",
  "key10": "2SiM7Nprx26aVZxsbfi7k4QSH8SH56hc2BxjvASyTUmuMUygb8AonUduyEmaJs62xGe3RahvD6yX4ujLRMgv1TLp",
  "key11": "2cPa2bH5YeZpQxRfgGZk6mKVHTpcgKTjf3yha7tyFoxmD97MSDMmi19xw71DxEeCkQTFAtRCWW4nN6BfPDHAdFmQ",
  "key12": "jYLHjHU56k72toQmaJC9792epBb87UXke6wjHLigFPBQzX7mxetKe3gZ7whXgEDA7FWSB49WQP9fjG5cpE39cxH",
  "key13": "2pufkqmd8Bh2c94R3wUcrQ4fxSo7VQFMDVuxVCkC37zuxVgCUg17pSUmRXVLSqk9EpjNDf3y1b7V6i9Ehf6FiQSh",
  "key14": "2sdnWfg224bVX3buU1WFfo2ewXhuH4qNqXFCWksxgPuziHV8tbmrFVLWn2bQXHqgFvEiMFCVgpSZHLwAvN8Y1ivr",
  "key15": "3aRH4KkGdR18vC3DYxew9dohvXtL8LeSScZYeivztC8cfZAPiREdheWb8hkVngCVjnzC6Wd1Us2iu4ssZ5KjhCu5",
  "key16": "5EFLpL8YgoAR7V2nwG2mniTKWy1ToVSD1jAKkSpN42Sir5jNCcf7p2pB8cH16rtPFdJjCkVrSkWtEbk6AfMfNSsj",
  "key17": "qMXFHHWHb8YVcih2h7yTH8rp6ogLnNqmGWpUcuH9CLr8u8QcbnD5LUKkNMdCf1EQuXZJ9SDXYY5rbfh4HXFuNDP",
  "key18": "4BQtv16hKVQdPe9RxjkHGNFzn88F8xi2ZNFhY64ekN2zhDLBc2MMijJE9ZwGHtsaPpoyYKnASGvS6k3NfKuRiMUw",
  "key19": "5UJydf1E7RNLYir93Krmn2qYZyKEL1Nm7yoBJsEyLs6Z1fs2jyFuB22BXDXzkj2bGZvcY4AXoxiSMAQzXjPDVhRw",
  "key20": "3TrQ6LWR9K787VLnFa1dTTop5oKbCw7ayjqQWyHSceER5cB6wYUNz1je8HJVnuXPj7Pb2ABdraW3wv7Ya4xPfQtK",
  "key21": "2UPSBHXQN33SGdwp3AHEApuHPiPngusQQW8JbcgN5XqQLnJAPRrJ81QniKRYwUU3BPDsmXjYqnwnKGSxjg8UncVJ",
  "key22": "3T7ASmenA7TQDV5CntzRJ1cfsh77jJEKxiCtF7i83zDwRgR3X8GYookpueULVAHf7zpFoaY4CJQbwsuRQgAASocu",
  "key23": "4BSJhE84PWhQSZL1jorGkFqWd5RUeYnLVHBA3EnDSoPdVWt7mJHy51iTsBREFLejRzBT1ryFDNQqPZkGFztss5eJ",
  "key24": "3rku6aAAGe7puyCRKuxUWp19i5Ss1sRFR5hdjjnC8McQSnTTypcYCLmfiqHKd4A356PVfJ949ZweTxHFmHdfmPNa",
  "key25": "2v7TqjDejWDuAdRueuwqcncsptJr2c5y6xy7aXjuTac39L2yHQXJAEnz9dn9JUAW23SHwb5vwVGiteoJctmXM4xz",
  "key26": "4wAv6PHsbCLA4fojKke1P7SFpcnNf4jT4wsXNAKH6giwaNd1C4jCi6qQfn6Hk4qZ383xUVwaukAZKwVzhXTpaaqG",
  "key27": "5v3XccL1ynqJxzypVDHK6M9PFjSkpG4r4u8p3qhduwjM29QfJxxmYPrYM6N8WrcL32dkvmidbueDoTmnZpLnsPAD",
  "key28": "3GZ1D8kynqk8qC1pxQpzdPJ5Azzwo1pKvQCUh5jiojHKZXum1x1q5ESVjFnwAqptGF3WcAuP1nBnTu9FjRWn7DKL",
  "key29": "g8AR6gJgLcrWXVgy4Z66qDDTRZX8pi9Dj2pmpSvc23u1qZwPRRJEKHYwSjgUzfgPbvcaTThGtT4ZQuCGp7Xt4Rj",
  "key30": "3qBPexUrcZopAv5EtxUxjNfKLuMsctE8M54XaEz6AsMuFfDiivWheXnFQtqfmg4U8sAYuGQrbLaA2FT7iqnRXUdL",
  "key31": "5CuSrqmHhQUsB7yUWUV8AqzJAFrysngMiBwJmeULBqhdTRhk84d1ig2HD3o2K3oGkuXr2QM7KmjuUg9czJUaEako",
  "key32": "44xcxzg34pbNB9s2vfe18FUaZBKyeBqbxWcezuU8q29bK5XCPXhozmBaEkq9PmXUEeB6BwfDYR3uqLZpsphSDLcH",
  "key33": "4euffTRZ9GGe5KG61qQQaZXVs3TsXY9faTfvfy65iUnWpY9PiRTVoh4PHN1zPUNPCEJUeve6sBb18E3xMYqzUYo1"
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
