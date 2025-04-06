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
    "3ZxzuBsXPBfms3JrF6nNGgJoJ6bnP1Ee8NLsmNL7kE3jSoH5t7CEW4nvytwfUzWFYa2QCuY5YSveMKoNU6J6viKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hRhBS4M8NjefKagPNMsZSLev3w1RKTyjEMyRXADjPhrqFwkbi2smQjNBubxURFP8ooA9kkXVoTjoCwWvAxtFLN4",
  "key1": "5EiEeiut61ZG7jJkRZb5nkZfK3K3NaHpmnB4sBTJoArdEHpaMzHihvAoA23u25ZZgywDCVwhmyRsLSAY5qsQgKDN",
  "key2": "49AkhP8cSm4ZP1TTgL4FiQV4et6WJK8EVEPTCnCqX1P2wrQioXUCLRytDyE7nSZfaZy2e49VrcaYzHuHnqG3d6Pi",
  "key3": "4rH3DgEcB12QVnPPsn7xo3xV9rLYkfHsMca3jUtKgAPt4FPfuvwMX4wP1B5bkfUarsYVmpdAhQysAxgZ6eQv5FdN",
  "key4": "2U5pkGw3xQGkHKycjn33fLF1TpLtV6f4BLXagTDStThEywGyRNQfxRoD5eMiUoZZUjWuPGPNk8ntuXcRhfEAi3AD",
  "key5": "2KaPxaAr6NW973MpyyScBv8K34TjURhHmKJ38JKX9mrWAUfUgz8S1ktpYrfT4xSngHq73Sw3LWBMVWMv2aeMU3KH",
  "key6": "2jppf2pd5P1fnzLhKusNWd1eDGvxihSwn62w1UDi2mkzSY8u716YFuwXeKz8XFR2xkU6terCgyJfQvUVK1Pdqxxn",
  "key7": "3r9FKocp6WSLG19ro3tzk8YW7WJXM47cwWZPRw84df3khsXgAXAky72PqugNh55JVgnKVa6PqsQXuHp7CRTGaM6P",
  "key8": "66MHA7FRh54gJmCaHKjNNJrRmMbu9gEwkTktURgv6DSU93tdhXxmd33KNsG7cvGsnJc6GE8YAZrsEP8SxsFLgWyD",
  "key9": "4dXDNkpsquXyA2zatmL98LgSoVq1cTqNSCsKE9Pn5Zg6iYKHGqBZCziFsmebYbVcX1pUWV29CbqTtEqQg3GAGeo",
  "key10": "mPyScMqLSJvgEpxobzsiCKfkAvj94wi9YYdoeeSCD4d8Q3FcMyVgj3Af5ZhzNTvjTw39kvnun5ZhH2tiqdEYpvs",
  "key11": "e9FNuFCSRGNnGHQdr9r9sdeKsc4gpDE2LgQp5HzZkBqhsGxJ5ecstQDa3rff9RRVa28ETEPjva2FkTREqxmbQdW",
  "key12": "2kzZkukEXFxX28EyX1J1MiR7WurxWcRSvZ13RQpM3Zxsb8gNk3MDPndsGHVrihzQ2S1xqbRHYJueu8UXvjSBdkE",
  "key13": "Hg8a3uQ4k2QMU9PeXbYyvTF6RrezgBugUNEUuLa4qhbqNWssKTfQjhiZjaPrKgvsnyesL8JSGPkMYvNTThJf3k5",
  "key14": "3sS3bLSDzhPbLn3M9DBpS1jvgkJAvmNbaJF754QUjGQZ2QUgKzqU222sjZZg9zaxZifu91f3Z46YFEgZGovmHFtP",
  "key15": "5AYNjBCXH8SHePtDgye3kTTHTm7fpA1ikFGt3zzXfHT2q3UQjnQPPXDGYZLXzpzZu91sWRATTHJTe9VwPczmkuGR",
  "key16": "3GBRjbvskd1phgKouuqwn7A2jGwsevtEtQmQZdwcESJMQB6wroNKUttF2d6v7eNWCZxhhu71vFu4aUiFwSyvi1By",
  "key17": "eP5mrXkKFrgwncLQaT88L5VgCX2ffTp9ZGbuENNUcQaYwuwGFsVx8kLev65u6E66NSH1KYzDJ3csxZbhGn4PUUT",
  "key18": "2hUqenHAWjQpXchsBqWF6r2fyUwPtvmNQrYj82Y6b1Mz4NeKHSmK1kDa4tUWVabRkEyzYgapXiUQphBafVQ4GY8v",
  "key19": "3b6Uxk3D8KAwkCt5sse8q3ULbcKEynABxsfSM1fGt8u9uETpXL4mSrj8LVRPn8eSV994FhwsZYNqXnKv2c8zTkUc",
  "key20": "2XtinfAWyYyMG5GfB24d9KnmBZnYo7JtPN1VMeLqYWwGFoZ1hPhzKBCetdWGdyBJ1BmouPbyGzJuMKx6ZtQMRPeZ",
  "key21": "5XGMVpCh5p3GvEP9Anevb1oAtCoNmtLMQHCE8itaaAFAzsaMWoGT1fAPZ8iqRHiB81rcvMdrQow8u9bYvPMTTV1N",
  "key22": "4rLpUPzGR8BkYzFvcYKtowwbXX44HHYzZZBMTZgsbpBUbtsVUdxewMZ6aBdv7e3uXbE4GHk3QB9XjKW6pkQY5JzC",
  "key23": "2GUTKk3KUzyiXWivC5C4cT9kkAwRkdjNX4JvdMRbWhNTdz3BUAHsH9kg1FSG6QX4rrwuB9QcPERWaMxUYMTxbMJ4",
  "key24": "5wJYsXJXt12FybV6E3Gb6HSrSxHZRVzGALVq4TH2o3nNbbjPc1BKGcBqJdqRMRv4bTgDi3spmWtjH2osMEzCfnRv",
  "key25": "3UbzrP3ERFJy6Nhok77kW1jLEvds9B7sWVj1bfqoZcMzXvSdSx1gLta12mWhBx8NpaEMNVcNRiwozZzriTi6KirK",
  "key26": "39VQGaeUtxynhrWPRHkkhSGCAHQGvpVFhg74gkKdQUWoaFMyMLfxEKz1JNTmqVRKiw1LZpBbCZk82zcPAmNJsYie",
  "key27": "4UpJCYotBRsUhhaP2XsGPyBBB1AaXwpxDuFzEMUFueCgiyQSoeHzuCdj7aMZHhNZpUKyT71P5Vtryh4BMMvJDbhq",
  "key28": "37PL6j3Kwd28jyRNnkQm1HkXAJfGF2ZF91n27xUBNQ5jvry968pcYb1KidcD8CAVvGG15bvhAKiMuLadXaCDoKQy",
  "key29": "37LrEMVWeQ4GDdhQQi2EFQgkSzuXc6ghVEXAFJnT6BfkfFQexRbjBPD5knwHfW7ZPEYkAMUHW46cs6MKWeDbWk3x",
  "key30": "4g4wXh4MzCbCSqKWj6LBewWfoaQpXaZ43y4un36KWErwoGbSfDDwaZhxKBPnELY9LCZMZsytfy29wzvfkTewcxHz",
  "key31": "A4M1ahCW19FjKvCntqf7AbRMp3Dq1zTu3oP7ss7mcvJxsoemHvt7Fp8Nsp2R62nUQhwAKSXxLpBvQAbeNp9rHNy",
  "key32": "UuskR6uwE9EUMg9EcBiwoXE3TvwCLbAPcqNCYshPybFY3EyoZNxUxSYb66jaPjCdzpojEonRT22TMzRQuVZqh2H",
  "key33": "2aheSeAfkKTMrGdCU8kpygAsVksjveGjHnBUpby7enhTUsPE4qEkJybm8NBECHZJsXcysDPJg9it8irmCDKk2aqD",
  "key34": "4XXef6Spj7P4MpD1KBHAVtDzvEMorSWwxH2nGjAYapUN2C7f1myPs38oL2iw1G8Cysubwa9E1pVaCPibtr2aLckK",
  "key35": "1Sc8xasgBjQi9suiMgzQC4vP5K5XAPvD7Ryv7THqWzd8r7WdF4ntj9KHFiQKKuKZnaXqYsUqWX97dtPgJxEfeXZ",
  "key36": "4hD2LAjcUyweQni8NHfaPThDBtrRjSe1faKvR4tgSXAsKXFZtNZHdgE4TfTWBPf3TQKtR51J6u7eZHhTeB2dTaKu",
  "key37": "XxYnA8d3wxEPfrmzQQ3RCQsGU4kYAFABCBPLixvrUVVWAV4CbWmGpC5vqBjpAds1Y62mbVhbZgnKEAFeFr97z1W",
  "key38": "4JgoXNZ1S6jkGax7bXhKMptQQRfQAKiL4MDLGBLwZjrep2ZfQEXoKNCcth24EbYNC7m5MXdw1ZKMHJPx7Tbdp3x3",
  "key39": "33dFvJNkKjU3VbNL2dyaSPZzfJ2eN2TgssVCVfgZ6yy9XtHFFd88hpDSJvb3FyESVqrP5V8cGGcKURBGSmRmS4Xm",
  "key40": "2XcZWTnPHbP1buYCRHiuKpL45twCgue56tESSfZkGuSkcYSiWfehCAVK2mW7duP2xgoZU4jyuQDd9df8du3XRi9x",
  "key41": "2waTpmUP4Eoer2zuL4pdjwaZsjh5LLeEF8pFxJXvToz5YsgN5iAud9bQpE91qWaEkd7LBFgX3sathY2yE3ChKsSF",
  "key42": "4bx7QDd9s7es1JT3aXBwx6K9MtkTZnuDMPzyq2yUCjaGV9dmt1L153kHEFHCFu67oTtcpJVrwqpoVg5TpBtqyegf",
  "key43": "35YDSmtAu5NKNKtCcLUKY5DEh3MbmwuwBZdHqisARkyaCYgnhRozg7YkLR3MD6kP8RsHZFtnjp7WtVQvYCZa1K37"
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
