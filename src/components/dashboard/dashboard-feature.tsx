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
    "4kE8GxLhKmaF43KfP4hvUqtjuQkmUq7VaXjYNi3cMw7rY4jgSibjQt5FkzWF8pdkd9nwqPAHj6U8iwqHhvvS8n5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u7EuJTjzs79ApAu7Kr2Ed7uJ8miwPjp5rn3PdSQmm8pZzshHUGzh2ZkFHHqR1avaEELRCbJNsteAbcswSMcmWgG",
  "key1": "38awvjTMVq4DjtP2K5QecQdDrVWiciJ37M935miWLXM2JG4na3WosAZDcKqKK1U7Ln5HkQuUZSbdZfaKsSzAKMau",
  "key2": "3hm6ovPGiC3jC8C3kGxcnk2WJKeSQvLs5mCdHZeZ6u8LzTpuG2VmwsGypwyv7j1gw2xy8PUhTTX1rbrvc6Fovuce",
  "key3": "2F6z5GTWyB7ridbNDVNum1K4HFzj6Db9CU9QQmiL5d2LXGnsrL7cusMwg3mYubj7EHt2TAJ24F8kAAJJwmjTmoiU",
  "key4": "5iKr5n7ChiyJyzWgSDrNxEZT9Fct7z5ajsKAgcdofXMjLKpv8Sk8RGocTL3WZkYuzSfrM9fsxSsC9GaMvbuRA7em",
  "key5": "uKN6gWEvyvGw2S8zLLqfQYgitDjhcem7BhABcgTWDiETaizPkkQX6jMmFoGSkAjzeKQk2uCHZ2wLGaopv7DAkYT",
  "key6": "4chKXhsYb2oiKqxRbvsMbEyfVa9iXHrh7L8CARH9AwCXZgvp7N21uVSgE1QLVm7HNFk7LPbowVfN3aUBye6WzfKX",
  "key7": "5cjBQ4AkwYe1UgyvPLp9JnSxTbJfcbpxBEpcACyRfX22JrQmoH3pRKUh4gAAiiW65DwdeyAxCqeQxtuhrfy1zEjK",
  "key8": "5zAJnDvG4ioua6hdjoPaq9BFgMHdzENokSo3Eu8f8o9evcXoJMyvCuxUo9UJZYa5SbeAzPK8h5tehX1UHtce3j6Y",
  "key9": "5bprMbviN63J9YKmhxRnS8Wv2FEqaJoHLBwtYge9tnhxR9T9jNYFTgxQrssz4ix96Rj6ECrVGvCeEZFA5VHUhvMr",
  "key10": "3vhP38iwq4seFUvhruBk4xo8csQPS5zUHARGXpRV1zEWcoPdH615iziLePwGAR2pXe49BK25mAoXWTtArDVPsa1x",
  "key11": "5xX6JzTFXcf2NaKtqPGgdT6CuAGmkeRh5q2zK3ERQ7eEAV1gcitjR651U4gn9oAPi5GaoCqRW5msdvigqi4TiKeh",
  "key12": "5KYtsbbaSTVk3bo82VUa9bc7mneVdKV9fJ9PvuA39k2p3CJ1M3RGMN19iw5QNpH91WWkfGxGkcTamewmPDAuHeu6",
  "key13": "frPi1j1USXi8QqAM1RaBaiTzbB3gws2Ektf8FjK4hccPNmpnD2ogUMYCqJ5Rt8LjXnRiM4wvHVUoZcajvjvmUQH",
  "key14": "5ZwjQj3h8VhKWasbNUpTVQEc4ENkw3p3VSnExnrWcU76A77eku5UXaXjSETHemiVRa9eeSCFZL8LJCMWZ9We9NZx",
  "key15": "4b5AFwKcv5Hv6jRd2yAU6HNX1YX97WvwYWvHVudkDwX4oRjuWWXUWyciw5UtqL3iNQW8zzRuaeMncwQXAHkfvfAw",
  "key16": "2bjXPGCLaFCyQafGENGwTJ2dABvh8AiW32c1eYAW4cRYDhZK4V2vSxJqXSAkyrWXxQJD8Hau5EuqVvmbFNdWkZiw",
  "key17": "3UcsqTzeDGCmp6ZoZRjV1z1XyPGAbZKtGmrbsK9afw5T5ibewU7M93wxajX5jXSKiSjKg5QBCrQqgWYXxPpyUw9D",
  "key18": "3vd7V2C1kUJLLPjxzENK61pc9U6Wm2uAodNzwysGuboTMr3weGqxFtrBat6vzgr1ygrFcGR5uxBWFvcUZzL8BPQq",
  "key19": "2YA2cPv6ZtY1cES2ZT1BgZHnc1K5C1DWZGSyAPwyeUMeCshvSCQcgBmmQJ1td2zWqhLoGYy3DB4FxG4LGbeX6Q4V",
  "key20": "2TUS1WGZQ8eYS4TuXonPErtFEfPdmrfq5CYkYt9B496cywEJAXTKPZJsQaMeVCUZ8LWPEWweqa6yyj3Ucvds5zQN",
  "key21": "wbwC8cV3g3TVCAkWAmTyJQH2MxvE185SuBQgmqeUrYPTZXmJxwmsJXuC5ja8bGek9ZuXWVFyQmzrtL3zPySPrqv",
  "key22": "5EK2y3AiQ5eHGXm6QirB4igJVVJGcXUALdbJz1Bqkuh1pni9Quo8uMpkhx4YmgPNaWMFT59w24NJptkitcRWcQwe",
  "key23": "33Wscpw4yU3fUtt8fdfnGsqnevmRtgWuGGox4pMBnJqwfax8DiPUx9nudzKoxepGJReodr5stfdVCihsjErx6ULz",
  "key24": "35mXxv7CrogaoqW9B8e9sSG1NzUypxiifNUUeE7h9MyrJjYu48TpK95CG9b54hWYhAC8cC7aZEcuHiFojsKHcHvK",
  "key25": "3upbkR5kqeEv5gzEmJPvUCjd9CTJ7VrN7DmC7NwPJiNcNKMUUfisBS6MzcUr9ynFw1KEnd5Qt4TNQAqs2oYYywWz",
  "key26": "3NsdCx7STzVAmFJojWKHgBKh3xc2aGfg6uDk5t1KSwWt3XKYJkcZPfnGkkpgY1DZ1rZht1rR7wQ5VSiTtP1KTQur",
  "key27": "45o3ToJpoGsj9tquq2C55PEENDubY1hSgrxk5est79qdDyzvWBgCbA9u17zEHoNbsaDqkyi2X2oVTx6GiPa5mSKs",
  "key28": "4y9GL8zp8ymyziQgeTME9SRGAxTPyjtFKVCr9pciC7D82cEbDLofCEsdKhaJiDyEeUmdHywdM6htZzqRDDC38bp",
  "key29": "4XjrisjHcoC6GnpheaUGgoz1bWiMk1nuSdNjDrxuXrU8Z91z9581a4aah1WmNpKR5pbZLgDdxfCyTS5XaTVyXTRf",
  "key30": "3dKidV9i8tS35ZG8pvyLDKAk582ryz24TzF9j4uH4RaiM2HAFSXPd5ganLCR1s1ujiP8uybarBHpJuUkx7sUzG6Y",
  "key31": "24rF7zDdCzFBnrHwCRmTWts4jXTXGujFAFC74KpwMGqfjFpfqGpTM7XXroVweQu6KLgX5TiSAiVjCtdtt563HNCy",
  "key32": "e6jHbTu1YK6kLeir5sgwGZCjeofSqeSnyD2ZEnJHMAKASjY4FLnRhhjrsdanNQ8r34YsptdugJUKaS1J49TGdSi",
  "key33": "5an2Lf4xWF41BMxvvKZt11P2KPymQNFEWGwgojof6G8MA8jVaFapDDqDvMQUw4eVgmmYTV9VfrCuicifbMbhrAPt",
  "key34": "5RCgx8StMe9Yw1yicwafqLD2qWAfRPHepmGLEjxA4yodhHJWeUUb6FBSRtkxgNUCLSDkpQtNkKeTrTBQU8t4Gm7X",
  "key35": "2e19iz5JYy4gLZADUykWZwtVg7NrdbXiaJrG7A7VbXhcS78NgNfWPaNoyeQsczpRjb3SDasbXMs2yK9yozGL4Mga",
  "key36": "51pbBDi7msLfXzHZnGraqcemT57h6Cgduz7WCAP6mPRnZecPNCtiUwTkvvDwVQMCz7mjj9nm8PJLzsKJAshXMWVf",
  "key37": "57BbK7p5GyFTSLhLexYKZ2PNmXDYutuz1S6SvBLrRc84JGBuAAQb83ceu7ywfpQTjN8QdEY6FzLdd9m9ZtvLJcuC",
  "key38": "4FhmgjLRiBCamncfwgfWm6cu49vedKu4Qa6er6MNijc2YqScqijZhpaoR7BkN6T3dveMW12U2qyzg2uL1sZDa16V",
  "key39": "3hXJxdDmfzfvBjJWYUAuRNzpN6wCkiPwHJNrx7tyRRFczTRx6nQSU4GujHJD9NWTcLRiD56gLZhV1eXWhTRgBjtE",
  "key40": "4LENHAa7rshuZbN18VrbbDTAvGz1EpGtUedg6wR637jgCe7m3YjwLNKqeXL3hTfXVMWze6FkfCpuHMtQfnteRb4f",
  "key41": "5AchG5vBH5x3bt8iTgyQm8UpWNkGEh3hdJTUxir5ZQSUwLCzHHPPVaz16FtXQUZm6Gk8qPuzZPoeGt5wd8DTSQPF",
  "key42": "2Az3i27uUdyJh7yfJHSxxqYKosja65EJQKbtWQABYrws17fEC2YKhD15jyDT2CGDgsXdgeh6aKYhjLERNFxRvYfR",
  "key43": "3iKK28j3P8UNd7yxCsafq2a9SZ4Rspcy6bruk9hBAkQth5V7bSBwS12kG5Tnj9QfQrnikNdRUui1xLpRfd1ic9pR"
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
