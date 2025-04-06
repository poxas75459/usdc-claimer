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
    "rSqVMX19bBczYhbSg7wm2NEEz4RE7mozcg8ej5RjuXgUfCjD67Z3t3e2yTkkcuDyfLXXXgkAgSCjrfG7NfbQ1St"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVW5yM6woVohFvVPszyDJVzxNELvv1v7gGqe6mtqvjHTExhWG6dAq9zVn87Z8cjRFfBQfA6RFEsQoVsbRtyN9QX",
  "key1": "3BTvapKpemR52cABosXRKoDegM3Lxkd1ykNCL9kaVjr9haYWHrp6hijM7SS1rZ9MDZLkcu9aKsDBA8E2w9XHrfEr",
  "key2": "uUNWaCx9aDQxtn2SGyuVU6amk5oGSUjqLk9Jpok8ZJtVMoU2XvncUmrui4igtVSifPQxCC273KvSQ8s4sUL6kdW",
  "key3": "2au6oaz7v9VgiCViEhTTphFWUQaiFpT1LSnaajQQfdoc5dJso4MPPkhSiUmo3tQ9jHGwZzRuRTLDZ3fUfJ5zjxhp",
  "key4": "3dqLqSNypwu5kifP8tr8GFB74DHc99aegnbQr2jtQpBkkG922ezBQrhkMhkPNRheo4UzCCTXVaGt8pwa7YN9GdWo",
  "key5": "2TEEnUZc2WruZP6NNWVcbF9cYLEswSutehiqZ6NazTA7xVQCXU9JZDZM8i1FedRmG2qv1ftcDm2EPqkz8z9b41GH",
  "key6": "xfC5XUCS41FfoMf7BH7wcwiXDtB5RKbdkiUwb6ASZVRCLPJww31iKtzfxNQKh6kpFg8Fb63VrLHX7wKNxt7rr61",
  "key7": "4gtXsHU4yDygWMnaghnFZLRX2mK1ApPUi82nzdoS6aDHUN1GN5N1CD77QssTJ3xFcQmiZMhzm9XRA8YE8AFncyb8",
  "key8": "22vkYk3DcMegcVFQiK8eqv4NPeWRKVBJkcAvereHsqNyTN7sQKU8PpMdSGpA9YSyddVmGPQFMoAZwF2mAhZdw9G6",
  "key9": "3wdafaFd3CjsC5pE1VC8FuSYA6fy57m5gvAw7rLvZSeTpmNhRLrwRj3LpqoCmGCXSSz7SpBShorLaCeBk7QWhbT4",
  "key10": "4diSPUDdPLPwTseZ45S9NFmwXnpY2Baj9eEaETZ3xGorz6gR2yEzCCoreS8je1cKfyz555GnQp7eQAgVXZWqjVC8",
  "key11": "5TB7HLgWJANSQykZxZyHp8ZcRqJpgHe7mjUkgrm6HbQ5wWWRjPZD9RjtJfm92R26FmGb3W4wWJw61trJ89EPzNAu",
  "key12": "58iAwqBvrNJLuiWvnW9PizZG7iN8hyLgfc8zwvN48MhYe4vnhcveX9Dcbs2M9NQR3zkFh5fdxgqKNRjfovUPrmm4",
  "key13": "3oaDSxYZaBmFaZ9cTFHjQzVCt9yghfLpSL8Mve6ygG99hh4198S8cYxna9G3UCL2vHZYMW9wMU1oJZuoUojDPFqk",
  "key14": "441KwK3nJvsc2Lj9wmxjsfu8mXmBcJASpWRxRjHT2JrXyxZmYBzhUnaDmbPgDaNvCCaUgb6sq6x8ZJnHAQbJqDUa",
  "key15": "5xsUMEpyg8f7r8FjEkSu9PhrEHBtyaYpe2TsZ9zZxkW4isumAaRLzc8BjbSCrXRDapVH2W4b5AXkHfLQPfZ82w58",
  "key16": "5vyDvVT9fQgQmhxq7QkPNwPfjnsb1kZbaffGTf944vLm5LL4WekCvc1u5Xvc3gD3oTVrJXxMeLFBQ5Rd38wg1SRq",
  "key17": "5RbW8Rqyk8REnW972UVGAfqwjje78kiA5sMXdkKNUKa2gYWyXFT2D1JFEkvQKjDyyjwLm3yC2ZB5WoEN11bDjG1D",
  "key18": "3szSqnEbz8gV729EgGFaKQR1Q2eshQNAL796RbfuGeiLyZz6qQqaatas6UwPRyWWPVKRaLe6bzbXiqZMraKcsPGS",
  "key19": "51b7py3eGFPEaVBCStxxrA7RdqpWxwqKmQRm14oSPcADiYrbe2MVZSG1nMFd9aFSUeHnj2TWvprhYwkSwFucUW4i",
  "key20": "32LDz2UEY5ZkG4HvCSMBBfgqEY2APqhDwoQxQLyn32jEPZiyn95cqCXHb6sUcfzWYjWeRsgroziqfNdk6nJXWqP5",
  "key21": "4j3EecPdX8oUgjFDkBs4rdUqKbsnrfestGR4PrG8jkCWvcPVGef5ntkXFdA5dru9ksVnasYffbvTs4sP8hy9xf5z",
  "key22": "1NkTGzTqRteqabx8cGNZsqXWwyYTrGMUM1XJnwNBDm8tADPB9uA6rmdBfsMLRjtJKD5CTYddVje4X2YfzjrzFHU",
  "key23": "PHB1WBASrAdRCLMrFQ5XjBjBJks6VcuJWvzSNGyygRrzzzmjdux9rwkUa89YGwtAhTkULkazrXKwU58vBtJHSJc",
  "key24": "qocCjenA1MggPKxYVca3rdQUHDxEfiys5qnc1VWYmALfMmqiSVP3g8Gk2Y9NVNmUwTFpZQuvCDgmdQCbkXZtCpV",
  "key25": "5UnJCwwQ4uU3c8miHE4MGTybsm6gxm2hZUr2WyPtoSgvpHULMV2LYVmQNJ5D2JccVSd65TJeUnJgNmHWoVtyVkFs",
  "key26": "5Kte25trui2zRLJp6maabxw2ir9oiZb9Q3CTaE7guq7cfH18kZcKCg7zkwNZDHMDg8GHSdteNYnwKUBMbyvpzpY6",
  "key27": "1GamLksax9MbSwqFjhsrU1Zmxjc9Wv6YoQn6n8hPapZQ1G8jsvdpxdvZpeNnTBdjz39b7rkPzDZ7wC6QYFDSsx3",
  "key28": "2NyKM3HuTq7aABuAHkUQmTjb8Ee2cBoBj3wwFCgGPusjQdnstgcQMmpCJQ5YNgZ5FyTL6CaFw416sXJZxYk3b9Ad",
  "key29": "5YFfGWbL39rdb4Jd7fs4HF25T3nvHaxUzgRMPSDFGZoomxiYdbbeoeXGxPZrcci5yTytoQRoJtcnMKHVTJRCNZa9",
  "key30": "3B5LwAgRCA53y7rpsWN7J6EjuoPzfZZEUpqbWN7jiMErt6iWrCizE89Hi2YAP1UxD9i75nAyHcTTe4aTgfrETKp",
  "key31": "33R8zj3sH2SLLU9uM2ioYtKSCjue8svx65XS8fd3372GRDD2Uu3gxKw2iQUgafg1sc4KSgR6Qyqz4Vkg5QQQgJrG",
  "key32": "9VZU2g3jZXmGeHjjzKX4EZHJTR9jTiYkfTPqtaaHrtAUKdq8S3bPWRB4vZig7hmpBgtv5bJMoMptAwq3riijukz",
  "key33": "3s5xoXazu2Ue9pVLSX4qRFML42sncYek5kpVtydLa3KudUxw9hDorqrdtveS1dAGeeRfZvgKP8yDSa173USiPcYH",
  "key34": "5mFfTGgPev65xu165nqQeA7ikuurWRDDsZK6XaffzUvQJX5QJGdLZH4gK2tdqRafHTjVw4NY36sH7LyyvEXp3EfY",
  "key35": "3JTgVFuBmgN3ywXoYFvsTrNou1UM8DkaxQ6s7khH2WAj45sZ14hEqUVZtgc9ptZa7Ut6NoE5NHeP3xQu9RoD4oGK",
  "key36": "5NgumFHtthLhHhwFXH3vy68qJXPo8bjaqwUxwAVfoYmS5g3Ado4KS2nj8BGWzuGshdwwfsi67wNYoHAo2yttJv7P"
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
