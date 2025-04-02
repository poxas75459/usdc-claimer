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
    "TvcFkvAmcUZ3crU3hEyaPhU681E3ekkrkQj39Zf3jyspGaCCu1FsjpE6QZ4nwf9TuPzhUCvFDgTSnwvAcJzsNNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pK8qCM2PTRYbc37n5PUEiKE7ZJbAutMRt5MjbRPwQrGybPxhuMxdnFYxAokZ8ar32njiJaEYc6kUKdbPv4n12Yk",
  "key1": "4X7JpSkQBfGwSu53N6EhxaTxZikV18RgiXezeCMTvVXiGJeTanULdnEcf3peF943gYfEVddAV8eH84DobJSFC4rR",
  "key2": "3vVeANF4zpJEJKed1HQyFXGb2uBYyyL8x9fX8t1f6rsdGwbYVX15A51B8eMNcFR8CrtD4EoWEAjpmXpsfWwncDPF",
  "key3": "32ACVYP1NGTZTpDNJrwr27FzsnkJXkeu3AoBE3hFbyZaYD63hBpGjRhNXYdpVSg3feEGkFnWJE1LT4uxxX5G2S3C",
  "key4": "5uhAf6xYFjWz1CaKjWWxBGrhwLfMXpEWmSAjeNeK1pcm53ZC8CWUqzwgXHvUdwgc2JKSAVuBCRdEtYrBdrokBU7k",
  "key5": "5922KNJjBkRf7vm1HkfpJbHeaGMcJ9QGoFTQt8f6MtFhy5v1LJHjHhLoByEiyfnZMnoFJ4Rj6WRBzG7wxbs8PE2h",
  "key6": "2o9GAZUhtWeuvXjXaH4okoVg9LJeMYiLyEWqtyUuT5GjC6AzdHhavxMShrWsVTrfvFhKrZm6eQg1zjWDXukMMXy1",
  "key7": "47MoURKiuMhtUyf2hhQ8c6a8iZYKrcWXSHiStraiJ1Rtss1fo74YVzkGCypFuFLwH8DUGQpyBvbJSQvt4ceVgfrm",
  "key8": "4YuwLeHK1kmjfbycYPoiehTsDr63XT45FEbu6QrjahY8infxLXxwtThDtzG2nFzbxwRX3Hobdagh1jEhAgGSKCKc",
  "key9": "5WXUdTtgMGMp3oKwzWPJRquta6JHSFbcKeh7pfFZwCaonBxcbB1uQscvGKbmNDTijqYVb2MrsyAg6ftkMc4pUCwm",
  "key10": "2oyerg7BNSg7mtxou5WMqUwS7XAxgmDujrBFbni9A3at2ZkateveSe8s6BbdZghn75hVR9vWXMy8d974dP7bnjrC",
  "key11": "hmzpKfbettDzyeL8z6UyPJY1qtbjXiBFSKQ2ZQh7VRKB4hcsAMX8XDDKrnQ5H6dXuQ8Z1MCgs326o47scCDd5FH",
  "key12": "Xn1Js4hxaMbQZKpopfm2K5TrAs2sUft69AnJZstrub5fwywzNPkXEAXZXvjJCLLycwTnJju6YuPQ9cAngvyFY34",
  "key13": "2cQn35ZfY7Y9LSBbDYaZrR5S5gRBR7sqginvHoj3ET7yNzBTQFbNg7nBCn8UeMnW2NKErNbXVgqSWJyZBWRHVNGs",
  "key14": "5Vd2xVNbiL8cmBdPhrfphffHqPXtgzkNngq6TCqBTHH38mo21ntoxSN2RKzbQB3yLEHbsG4e6SftbvqWDTwkn8tg",
  "key15": "4dccYgAYXBJf26hiQUpjUGgL3z3e7YrPSfUCLwkdVh8qXX7ru7jSDnjcZMZoHkMWbaCfefTFbzZyLFM3fcQmwyLa",
  "key16": "4KoPGZRgZGzSjTjxQLijRFGYWp1UBGSiteCcJtsdsRR4GbCaUyfjk8YFKHBCmVUiWE1m7C6a5sBKMxVArtmLD4EL",
  "key17": "ZfAA1wRo9MHBmyJWJ4fXUPZYoqMkCfnocf6xfozdMRwDQWe6XDZXBQBJHH9Ph9HQC8WVorSGRBZ8cuXh8aJNj1j",
  "key18": "2XUu5J4rsU6FgeoYP6Rv8osGhJs3pWF6GfKkCeiHUxoaTvjTEtRXeWahAau1yMZBKX4tGV8Pd5rLUM97AVGQ4yfP",
  "key19": "4Ph1ZmaCAN3nDYRhKUn7h2w2tedMbBbjGGa11Cax3Xzmb9HoQzpj3WefLUJr2ZAkfp51pYdVoN8sYKjoP5LjfLCQ",
  "key20": "uEP2VxFkcEhnm3F1cP9bLAU2QtPYLEgsPBcpuQGBRnujncGmEqhN62foZacR2A6wR4TS3J2cLmsH8g5BfVZcghF",
  "key21": "3HkUhUo5kWBvv6DGC1DNAXbSUKeh61rJvprgop14GkgQq8yw5pLBNYc8RmchWszgrjUqWDeGu3pappNi4yEtZjqy",
  "key22": "2L6Vo9zHWEH6J5LHqv23Ujvci9Zfxzm6fTZVqW1JZqwSvDgWZJbDFWvk34Mojd3hadSckwURHeBLCSjSxJP823oV",
  "key23": "2uGoZSqrihGuVtsLEZMvNZT23mBLH9ySPduLTyA67k7bMC7GEfoV16kZE6f8tpLxZpPiikrFhEjFYZ9BLAfRBfQS",
  "key24": "3JMaBHFPNfti7oWthiNrTHnQTFnRw13PPkevy4GSqcuVUXT9Agh1pPfzYTLxjt2iYPgoyuV3QMqvDZsizkHiTbmJ",
  "key25": "3P9Bfi6bjceVNhhshGeC2wFoeMQP28GFxutkVbw6G9kJaGSkMLxPX3jwSAqCB6t4fb2Ay7tbxZ8ktE2qwFVVtiR3",
  "key26": "31XESgzsF2hnTkcjdYQBSrf7DZDGfXq29qU45XdgbFhtvtdsKJajZww9watDWokkGg7fk1VY2jBSX7uA19V8m8tr",
  "key27": "wdcmExq6nERrYVZeNTXeE9y3r4montr9Z7VthWdY2zdDvWPBV5ofunb9PMnFFPheuyeUkgZKyiPaNqBAhVPHhcN",
  "key28": "2LdNvHnCdwLGNbVPwK5Wj9dJHj21pT3w94wsetHry3TLvJZNi7DfNdTUfDnh1mq9c6PMxdzrkFaF67h1kBVqTLkM",
  "key29": "5VaEARQtaBtT8X3TJTrm5s8zCNCQ1TUmdLQHABmc93ViqshxqcL971zSjZJCmiEsV4Jrxy9h7mVcfXr5npU3cfhn",
  "key30": "2NopZTdbPKHze9Q6wdJVEGC8pMjPLNxX8fY1jDyjpqjqiqxXzgNwUjhYPz8273ZA9ctuyqGds4KSKJ885D7vge6A",
  "key31": "3nZRNhxyMwhzAq2XXo7iCyErvjpnCfvvmJSYQYEVhEMN6XtDvq5oHVNj2oznGDEVnGML18DCSpuMCLj5kxajTFoF"
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
