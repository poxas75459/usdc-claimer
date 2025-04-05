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
    "3UBEzzYM9FLdMgqQrsicrS1S8iLbkraD7ofG8f7de7X6JuGt75knxMjsVWbfaiLrzmYP6Fikjso77Eqxo7xfw7k3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4N7p3PaEwyXc784XZkz1AF3A1wXs3ZTjpHp5jaqvdgNwW1YCi53VZv4VXSHsn46eNN2Vr5xcKQFKGZciZr92eu",
  "key1": "62L9WUukgEeDYYkood9B4wq6Kke3pM1LZZxN6toJyrC7juzbQV5hHpP9a9EETdQLfZBQLHojeWbQ5Fuz9wtH6uQe",
  "key2": "4YJSeA2ygzQptFcP1UZuebmXsk1zd3YNMkRSF92tLV5gmV5cYf6xuSEf7KddbJedcbq29otpsyERCCxmAvjqCxfV",
  "key3": "YCLAemwUXjMBZiC9PmxR3KuD9Jh2T3FcnmzLgRKAk6Bz3C7JR3mfVzYEiNyjv52CLVMeTqv5sHDtueSaiqA81Ei",
  "key4": "3MSw3hZmgnzPdQP3T77eAkVFtBGVsXtM1ZRYiL5S4XtdDVJ4v2jE75o8gvmMXGNgaq2wQCfS71y3yrgfxJsrLaTe",
  "key5": "3QKfX4cZQvhaxZK4WacShNB4hjKJZXxbAu1PLreiPRqa436uhEZq6zYoG8KFYYa89C6QoXVa2srVDomrXP8rNtcq",
  "key6": "4iHqxXzWWyFRCPdgqFfnEv63xAhCjeMHtdnbAK5aabykzdsVKPZGRudfDU58Kr8DYnESyyYenKz89jncHaoDbF9i",
  "key7": "3FMvBdGxQrDQRq1ZUtJnE9U32RgfsyfECzNGTYagML5SdnFYMpSFrLPP4rKQ1bieQZ3P8aAQEMiPhBxagWKsE45X",
  "key8": "5TM3aUxyqeTUoAjLMtZnPCFYn4d1szYN4ecFce9sCZMLp4RkX88HornTddyu9KXn5JTgF9BbuXFEvGNcXcxtiwev",
  "key9": "JmDKXA9xKD4n3GbYUFxWkNXcXrspgBArW4LE8swze3N4gTjTbuVvU7wyv4mgsDePfxo1p7cPRCMooSvF3hUWcY3",
  "key10": "2arxEEfn6VxooV5xhNQY9rUjfqXtX8LSMMXyD5DcZwtHU3gCA8AnsNwc1v9DcYap4MUzQX5iMju1kJ2wbe6Szdzi",
  "key11": "5oc7pqQ7pdVEzgcgowz4j3LrwGgbYJYa5kDdcV9jiHA2KcG8AbpAXT15qFNAZUtT72Kkibf8gxPoHd3cEqBxVok",
  "key12": "4DGNP4TBFxmfT9TwGt28P9nemNozRtZR5XAva5nj7o68BsYzfJn6aNFZ5YcTZvJhAxopKex5RdiY2oysqwco9JGZ",
  "key13": "4BeZh2edPtE2c3A5DxDjFJMYzUTVVumY8xJ7tYCF4vnVFrFAKFmcU2QMNGvL4MHxKnLTgr8TXD5fVjoVChBYBgdz",
  "key14": "5kcKr9EwV3XBdDBtQsk68rpjiRQeKtiCn1VoiZYknuwxHBvHJChbZFFbXE3JxCAGbUSYu1LDM2gATJ7znxZQUs6C",
  "key15": "5LJ1woEtxyvBjdkpzVQdPiC1G6rHAMR5rxMpnnn1fgmMZPKQ9YQKfavXAWrga7ozbjw6ewkzTShcs5jpwoCw7mLh",
  "key16": "4TDpQvcV9c23eMGGajGnbTMZo8gm8k5K2QaZV1mPKtvvkmtufX36mqFtK1NrJfBdFZjyWtK26LtSt5DaaUUdwrDS",
  "key17": "3oP1FCfh5Dbr2gc8VuXwx5Xn967fLs5g11MFGnxG2GEJ7ZZSXvNQTDWVauU5p4LvBqMJMoMVD6JHFKqEuTmwDQSj",
  "key18": "T8YbyRZiVsnr1dNBDJAHNPuW9UaehyUDPTo6wDhU1hVNeMrzwJ3fgxeG7NfABDTWtKkYyxXxrK5GY917yS5Czxr",
  "key19": "656qfd8isfs6aK5HPDQoVYg3dbL6JH8bAtsAtFSVXJKfAk6YjEHMzHiuGn5eo9sTbwfgxFxiLoWjAFqpopgaeccz",
  "key20": "4WcjvbFLDofSkxi875kZvkFKQ93ExtMcasfNruZQpJso4uZ6gTJwQcrKSQjLBQpMQCWVDgNogyQa22iSXuowHrZu",
  "key21": "5bZ9dozwJVsJk2ujheku8DDP6z5WtomCEh86xTAVNACPn28pFVyVCLyR4xAD76c7wFKndd8MSJCC3bk52cVoA8b8",
  "key22": "QsAkDHXmTaMPAdwzxatZYQCKmzeq6JEQXfZAGMiQrRDY5A4UoStbhCaPoZaSLXeoPScJ2uYQ6FpR7b3urZApYSW",
  "key23": "oHhSNzr7F9QbRh1bezY9qtLeWWYMzRs62xFqUQnY1kPh8MxLEsQrwY3TKVKudFyvfCUThrYmCZpVTirQUPywC5Y",
  "key24": "2Tu6TZDbeLNkHQUuiJom3LFng6xqf36QGmaUHXLxwSpeC7633fh2cxSh4geqdtiSU4XJyLNxqnQPV6BXZEbLFhdF",
  "key25": "3TC1iPyLnqenTHq3oHs26utZvam8h5osiWZAAgViSL9Kc8yNDqpigRnSowcvwKpXxKtyFjdaVcwHRJopS8CYsRxp",
  "key26": "2n5mLzHF97nAsugqfb7o6FypuYNLtTaHDetDpqDZHxFp8QbgtJe2jMDbufTAASxGpyPrkf8ga2MB8juKxq4shok6",
  "key27": "2c9UBgmuYm6YPp3EYKeZeqNUUYLGh3yfCAotCARyYkiD8cNPLTjob8Hwhq8v7bkcH2T3RWezvRPVFJS5wigsxGiD",
  "key28": "3ttnZmwkY411FYf7UUJSPor8Foy6JjBpGDQZiXeTzfMMkcRzPWgHZ7Ur762jkF9DxDqYcJWoeJcHHkPELYKoyUQZ",
  "key29": "4cZEuSmQAsvNoV5csG5qFGURAJF6HDGMM1FtPc22omWwxipr8nrgTsRtHLa31W4t2oGCw7HGrPetd8mQZLx7WtAz",
  "key30": "3fZiFfQGZNyitnVQA3U8PMsMQfppHjRqN6xZ8bM9yd9vgRVAbDnhFBvE6dKaTzptTBRvz9bkhTMboK8DLruEB7pN",
  "key31": "EEXM1KZ3xaSufaGEe5TEC7q852ZnEi9JH4piYqXpVqkTqwn8nnQMVrQs3dHyBUpYeX4B5KAoPKqDr9vaFXqot1b",
  "key32": "5V6XdrjupWQBa3R5Qw8BSYv4WDJJ2adrfHk312CHpUvbcrNaoLhsrWhXDUtCCRtevWUAfh9hX4xjMRoLjvfpDB6t",
  "key33": "2mY3puaQvtRXPRt6geoTG4JWBNnPUWiQAh3D8XfPEzTQD8z1xMVMG8cDMQy3VNExcmJcrtBEunmqMAfXeKQxYeYx",
  "key34": "4tTPw9t3nHG46gzrNkTT5ixmEDYqiNabuY4KpknwF6WM3LRUB5932PFEas41mG4Vu6ZXouy43z8M9amQgsra4w5H",
  "key35": "28KJaYss3gRNMZHmjPfeTRmg8d2Wu4Q9HUm7hrAcMfS9JyyvUFHk5e5aSdW5c2nhK83qbJmF7nbh1xHc5ABYAFtG"
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
