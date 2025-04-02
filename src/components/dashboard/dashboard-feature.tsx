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
    "4iuqfWXukfLX7WHoPsjLH76G9TwPhP1T2Yt2gZNZKsnQr7bVXSJ4LXkMiMMgsnRJm6RDSSVV2yGUFG4fFK5tkh6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zGJZxAMWHsztEUAp8vLK3DkAB5NGX4frvtQYA9Kjan2c3Tbzkp6Eu7qskiJYchsEEuw7ohwtxQU4E1MQorak81H",
  "key1": "5hUQFUMFGvpDiWtMudK2Ar26peV6upZwaKkJofx6WGoouCg3dShyGktA2GuHNU9numWD91reiDkRdwUhZaGGnNVn",
  "key2": "2jygBSkUdsk4axEZqpMiQj9s7ndyHixxxvvKHUJsoU2UTUxXYg9EMUuLyXwRSmt4hqYKrkorfGEw5CJPynrq2ubi",
  "key3": "4HiFKZi3jiGgc6yqKHkSuEHb7DZw3qVeNQFQEkoweZmHknBoevt2PB1RJosFUBS2Sckd5SvVUGY2Yy84sLCyfSiW",
  "key4": "3E1nuE678Ua28xVNNWrue7jmizQSxThH93zFLr8Wv4YcjA76c2YrVTqdmpWVJi8K4QJpP1ew5tiuiPFCUd5SsgSV",
  "key5": "4xTB7MPBwrcqKvbRbSPgg32oUiwjyUohEJ4QTLUM4AfkUZh6UKjrMfbkzrPp3NK57AhGLeGHdAF3qcJHYKxDBPGo",
  "key6": "5JAkeGrFVb5EyZu9q1cXDoz1LjxVQjLY26uHUDgeHoKNtdVPscnBavZE2JAuqdCHVRrNGfQfD14yUkyB5grswniv",
  "key7": "3s3Zs2io6TPEbfXok7SWm7BKFsTvCuKgSPE13bwHM7je8BCkNThBKkEnKDZFdkj4ZqjaptjpfdrDCDHAeEGo3aLD",
  "key8": "5p7baL9n1yfYvkAQnqrL6hj9xJ4BddeCkAMduYoR6Ev3AqoANPXFEkgAAMf1WNtBoqz7E5LKLUjDX9uQ4zPjY4hz",
  "key9": "4rnw6hNKsCgsSCTAWYa6xnpDZwR6sGkEPQdx11BfSk2J68AvdaCrXcNe67F8c3ZxCobRA3osxw7E3tiXSDywsyQf",
  "key10": "jchrnMLFJLwwkxa29sSHbHtpSvWM5NT1qRNTMkfD9SYckkW6pT3smbgf8VAHBAhS5Avqj1ggZTd2MxhvyZ9kUtV",
  "key11": "hsavUpaX9XRUqwUaxrg9A5dkE8ffv8nAsCCdrFVTLtgJDtoSFzXumP83VGjdqJrwbxshcR5URbJk3E3thUgwvQT",
  "key12": "dvjWgUgpvTvkhx5sa53SnMYC2rNxvemdGqaBb8uLYEBQfackAjUQZ1MjJoNBsaASCuhzzAd9W9nX9k9xYLivuqb",
  "key13": "4bXtpnDoUjTWfNCFEUhnXofeef9MSGnvRcbcUDaaduFqJBW9oRo4yd3jT4ffzkM4n2F5uiDx97HXSsob2bc7Zz1a",
  "key14": "4jpruvmay9k59grPEZF8dQMZQmErkbKmNLYT297wgMokV3R5VyX218ETNzP4Y4Xi3wA82jCuQHm2nH6bwUMHQBbn",
  "key15": "jdrEb4HAntcHbzpK3B2KzobpZddYWvcodVEURAfjgZVkxoy8WVPM4xLs3aUGTDvRsQwktkyLxFFxAxKoGNnDB2R",
  "key16": "3C81Htknc6J4sYXAcXP1AjuB4UFviHpnxgMSMfk2yEAucXnc8GBcVBknaTPs9LQSBhUjaxwAAQpgXScLEJsqHoDF",
  "key17": "4D2G7XaXsYCBpBRWDdBr6w4bkKa3bgdVCo2kYq4pp6MZ9vwhq87biaRKoXEhUq9aUBYSJiAQkb2JHQUWk6NyhHiU",
  "key18": "5LKgMNF4XdcbGW6tbmsr5hMrm49bUBLHLMkAjAHwSoXneF2Mn1HMgJVGsAE9TQhinCedbB8XQUVpmYJvN1WwMVKe",
  "key19": "24xthBYtSZCGBWgZA2kQwDmnrnyeEm6TouVyAEjAb3zDr5p8oY7buVYgRZSJMueJ2p8Qo1dWdGRWFJc2bBCuLKGg",
  "key20": "3wmYNYV2FEuSeFitrKJ7DUMjRqDzTQwmmwdaQ2mgfcf32u4o6uDfnH9C99JGX6nr9w9iEAWDi85i67TeBNbQxERK",
  "key21": "3uBQdUBm49gbcDv5Zuhf7GRKmy5boRSoSFETkebTAipU5rtXVFTMG6ZGKCAdqezFS41Ym6S9k3rfEnJQSrnA9RVd",
  "key22": "5UtppFtb7yqdbmjzTYs3uogAWhUzJpkkR9ivpNoJyoF2qb3Y7GzKGudXQM2MqLszvEfgYpt1SxiYNG2aFbZfDVs9",
  "key23": "4zisoYux77zN6phAHtwMk6ueHgmYXNc44LLQmFgsb7sgQpycKQdDvRyR6WSURYhcaS2gDQiAFhy2gpRVS1nyvEet",
  "key24": "5S2NFJtxkbQC5A5T4jiuDmwW5SRas7CBxWJqbHobj2RiAVeecMpvJdwLajfcoi3WfP9p3DdbavoAULqomwsXReX4",
  "key25": "2ty4U3aiRkWjuVJXogfk5jLYbqs2g62iSstkAfJF99VSeA66f7nTTt22TKeQhTUkadWbWU4e5663nZ4dnuu55Voe",
  "key26": "4jY9rq4mHu54fd895Tp9qrkqgZPfj3pWLCYkKE9csyDATzwfgKRY5ZcTYR4Q34CE9d2AfBjkfj61VpJdhgSjPJGo",
  "key27": "3Djm675oRD3n5JW5KCwZpvJwqPteL6EeU41brdPVL7wkFzws9UiUjhovEfFSoVWcjp7SF5Cuhm9vnYEDNiTE9TVm",
  "key28": "45GS6uEBhPuUc4Ab4zLmAVcqQrvoMHZ3dTjeWNDPhPQovbK1axkcJRYRwZtd5gkDkjGV8HYTyuBbHHtsCFg1A317",
  "key29": "3fXTBUG1B3q8o5imnXNFup8TvR17sxJDwXz817hmLBxr3LQ4X56vwiCbK6DoFym8H8MPHGheDVnBnhE4GfhhJczM",
  "key30": "YSYjdUazmkMKCFKVyVDReVkZ6CYbvR7SzyN6zdZzVDekv4S7CBNw5se6HKXa9oQcuL2VKjnUbifTBnUd3A2EKDa",
  "key31": "54UdQzfxoUtcKKML3t4VUPrcQGMmcRDNFU5ABWQwcg8cMKp9YGvj9Zj4kYiAtwwJom4DasTg9K4tAgsXQ6kJ3jYh",
  "key32": "5NcpmFHu2Vig7s81mdyfCRUfhNN3pF4GJfar24Cupkz5rE6np4WR1oGd1j2Zqt5AfT3XySbUSZZenkTMVVrzGtyx",
  "key33": "5ZGkRa8mSkGXdzQvNW5MJjWBAoq8HxwazotKAwQFTgXBrJ742toxW3CmTSWmNhx1tGg2skLoAcKZqQ8rW8kwAc6Q",
  "key34": "3vwcueejmgztMAg27hMnYtYWLTwrc62YTU9KSffduyNgFDUXHNcdbcSqoRrx1H3bEvf4Wka1PwWDsPFDib2cRmxE",
  "key35": "5GKfVcnuZZFNXzC9a4f8bURafB3Hd2TcjP51Cx1QqacZhzPNXUbGCPxmEvZhurm24ppqUyDwGG8FBNmLvuuzocga"
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
