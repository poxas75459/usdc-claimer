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
    "2ebM9qkyjdnW155pPrsyjUmmY2XNaPpLe8aRuvvLijGbFaDeL9qC7qttBR56u8KPKAphfwoVNutyF8cLjuCDNGPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tXzde1JZKodM3b5z18KCxuH62of5gvAbpfvbk7G8ezkTk1zmaYVZ8gErNXt9Doup3oSQiyRGZpwPb2AnRmXGyyF",
  "key1": "jX4yqrFjVbP2RKomnUnieL3V7x9b1ngtnBKK4nEzr7R6bVeGzHtoSqjwmWWcTjkp757exVDN4Z9LMYBCiCRsxSn",
  "key2": "3mtKVqZgBEtaBM9M89pq7hQ4Td1uEYZ1zUbwiRGuDqDdfu6J2aptC9EVAddjmzykcrd9A2r1W3RFNrsupkDNfHPe",
  "key3": "2KyGDtYnWCdiQtSVZ8RyP9qdRt7EYPQWUCPv6oAnpRU1oyCqBQSj2wEjyQ73wcs55uYdy8aNR4ywfhR7ERYYe6uG",
  "key4": "2gWZPVtm7Mx24KNXEXy5EHrAYQPCwMmoLGsFfxhN7mxazJqtedZXzoLDcZFvnY175J4Y8SGFHPY2oAHJJp735GcN",
  "key5": "23eFCDEi913mdb9yr64LxyebtgZk85t36gjXLfC11HsvKLJWJFenvTB6WwpJA3GwsxajDqLMJfXrDyCwncU5cdpR",
  "key6": "PkV44HPSYt12CShtRavhpG642dawbKfue16A6UA94swtmrcu4yzCxe137B7vZHwmrNfbYTSUeNFhzP1NraJTJTo",
  "key7": "2zHsZ8pCVzCoa6bfG9JCzKnYvp21kgQJkbAtXNNFCBcp7wUeA7z4NB73HZQiYCfx8upMeFtSgnWEAQVeyrEJpFAm",
  "key8": "5o1Zwttuu67Gaw3GAnBhvb4tvViSQYf5D6dWN3a9SpaEhtamsCPYSHtZHAhWchoX2x1iaroMZxEz8x8wehruJVoc",
  "key9": "3cmrh6F4devj1HzXMndbMC9aWgoCL85VjvX6eG83SnmJb6NuP5Bzomx1oAcN33wUhNRuyYYRgF5ffmWWss22UKrk",
  "key10": "5MKq4diBPYJfPxV8TzTYtmKWAshkd9MRoTkPFLuYKvbtyZDwis9pG7XrLTA1pbE76pvKbcBY9NyCupASQ3XFUocb",
  "key11": "676x8dJCrRRn2M2KuPFVjNi4bm6E5bWfJ6pni2GHNjf1hkBDPP7D5x3G22HRjjFw3etqt3nP6A9gZnxVf6JgX4MG",
  "key12": "4NkzBNhziuroqfwPZ1DVU5kXC5UwuJn7AWvdNzsPF57VEPq3WN6Ek6dJg1gjNttvQ5jt379jvXF67VHHHUkZhJJn",
  "key13": "3xdkDzV6nb6KeX2K8SmGWDu8JFqCNKwB9n3bHsNKC1jswggpotW24WWEjbAtTgz2MifzsUMMaSyDvKHHT8FD6Frf",
  "key14": "2TuGJWZXCqgozrDGhwA1cptJQTDbB8JQrCcQZr7aaBrSbUW2DTZwVdE9keYtxUPRvwACLKLdd9bvJQsXAv5CYRek",
  "key15": "2b7Vz6ABqWSWrRBBFjhYxSu68y3QZeZ5VBbzUwMoFwTWZSccenc62WGHfZpdMtFNegg8avWkZvmVNzMnWUoYqNC5",
  "key16": "3YjPrf9xnMsg1axxEfQH3AH7TfjNgGV48qFYwNfZ78J2GyjDMZ6XsrzdkJAA3Z176j8Ski8kBS4nSuASKEHboDtS",
  "key17": "4igUjEC2FjYBXGRWks9d3FYWdt4yjiU6QEZqQkevAL5gjm59D499b9S8o3FXQS7D2FmPEHG3jVjhue6JEXNLnuGt",
  "key18": "WVJwkSkk1wYiCcpyqdEDTYs4HjbWpxFxuQG4n1QxoPwdHHsYacK5FnX3rjfXydZzT3Rgzrcp2rAMRzufpyrHRSj",
  "key19": "5BG9aoScx3cd7isYWBvykU6Gdqs4df9o7wtAJ4SfzkC73BfUkD8DnYjCSqNiR2fVF9wzLCnSVnD6tAe3e2bn4D1t",
  "key20": "4xcfeRdmGjbDfio6phyPD4x69FhKE3ufrJuzAE1tEeXUgC65z3Q21ALsMxrrzFXHLRH6FNW3WUrb3xLC21K1rn7C",
  "key21": "5gnhCU9R5o2CivHo7LKM8e8cV443425Zqc7yGXFTmGanFp3fYWKRp49Nk3kK4PbY2NACxeu1iFHMADRgHgENVpfd",
  "key22": "28E5ioCT659tDGjDGZRVob9R3pKeNQEwMxX4K5wU3qLL5tPXhESPJZaj4NyBczGgjgN3PfFTzi9osHdZ9pehVkiL",
  "key23": "nVattLYpyvLQQNMWfrZ13VgKZvqxTCmS5b2cbW8UBADoE1uBMpSrWAq6HTddaEe66XBf9Yr3XnnJRWGXvuD6kbD",
  "key24": "vc8ekkrwcSEfsceZ2M5EyhYeLuRb5cHfrwbjUW7BwvcEmbcf3ygMF8CyqnKQ9j1XRawRuDHdZJKFUw45guUGjSd",
  "key25": "5moUh612LyFu8pNawBkV7QRDowbERKwiS1CxPHRgFkVLU248AirH2DdNopJWeAq328XoBFbY7rSqnH2ynbX9qCwU",
  "key26": "xBKcS9cbhcUCG1q9eFzQ4A5GbsmkLrKyBY39972YCeRW8fQ4E6EWrbuSBq3iMEWYMmhcXYvx12zPThvNsDD8kmr",
  "key27": "2nykSeqGunWZqeY3eoskrpYEyZLzzUQk6zcDEmUCCJ6S8cFNYi6YgXLKXzAYS9r4W3xqHm1KThhsPEsdmvuZ5JGc",
  "key28": "5tGEehYfpcEdt6W1uEdhZQtzmWB22FkMtohKSBCeGWozeXP16gqmkBU38pRvwqN2e78YcN71q8CWJQJ4NcPPMabn",
  "key29": "4TJXcqtPTck3rr3UihRh9gDMbEAr22fSqK59PJTRSKxGQ7a2meBTaUjYr1mxrZwbtVhonztaLL8fyU6UDGqtufLZ",
  "key30": "TyEYJ9GcSPqWCfXHykgehnQ3Hmv33vWe6MJadcAGGvEJuwyCCDuQ9dFrPs5SVcbvYHnt7j3MQZsiCowhvBYXovt",
  "key31": "2Z2AhtgMCpzQ4Nkc8NiD5PWnHNxGu4BLwbhhkkc2Mzamk9a4w5CLLvnm3xeKceTVB2raKtaso6pFSnCMHvnHBtpg",
  "key32": "3J3jL1EDC2S5zyfrQWV5UpUMXWgh2TNYyjDSrExm1mQ6q8Fd5UtLqgPryCLAxXQJ4uBBjGshK52qiaf3BFUzdzax"
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
