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
    "3R5e7zD7YiTighDK8d1FzhQXs9Tm2aJ3M6qXz6sqVTk5WyES9zCMhFr3jfjqjtqYp2BU5buEdAPCwYZxNWtfcLWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hmsaoWLBCagwhLdRBba5bsbs9uqjeZ3cjVTbSzup25a1cVXabw6ts7YeWTRGWcLMneES5MhVFrDveVvvftFYNsn",
  "key1": "37zJjuLFXRedU47pzi8mpoKQptYKYLYipLrLKPX3f67Djed1wEbpaP9DYpXRprawhpQ5GEmXjchTVK8QzCEsJ3jF",
  "key2": "iohwf6g9ttjQMhGV8y39QJBATsuhb1qKnPziKA5CCoEyhduifa9wYmJRUBcwQLQeJUdsvuiEt9TjZrALkodoZut",
  "key3": "ss7ZXTFBEjgPbPxMsAWjaoNGWqKT4iRWzUpmNodgooZWGAYrMF6vqYmp9xVaXSf7cMSNU9WR4XZw2oiGx73Fh9Y",
  "key4": "4mP3SYrv9kiw7gXrVfQxkYczK1okJHt8QkpSv2yyd2BNzb9EZJtC7VqAzNMzqhY33pY8tyixPo6nEbZvn7yi2Upm",
  "key5": "gBBAgTUSUrVDYezCrnE19KVsWk9wahQoEgJ2gpFFJh23PhPSnW326WQZhnRRhrSiQKkkHZE4CGjYoLszVtqfgNr",
  "key6": "odrJFHyENxps2pTbgNZTJm9U9mTNHzMMHxbFEkPD4bZWxhrSZdLwKVsv2TYYzYPxDvhTUpMyd7ENw8D19hHQmKQ",
  "key7": "2kGNoqY16UtVHrXMvZwhTaHJcXxDU7dYKDbWvBwxN7ahQtthywiEwWYgDx1WmL8SWNF8wAGxnvGhTmujRrz7PzFL",
  "key8": "3VemrBfXy97z3maLGSeTpya7WsAxoPyd4ZasDYvPJRiKcPXTF3T2SgwoZJNZXmH6kqnJ7CmGvh7uRGA9wkhGB1FT",
  "key9": "5bLxWniUfRbMrL7sUeKw53VYTib4Ufnv37fezuw5E67UUum7tUqEBF24S73RKYPC1SwyeQTbYRBiCRFvNm5UkS17",
  "key10": "63TDkZjdvLT8gJoiVwd57vmBPr4Bsg9EzpJit7utHer1mB8zyyhbByysGS88cKQ7o8nUhB8MXydUgEoDMjyxENZn",
  "key11": "5RQbrGzkcpNtZYWFLsrVXaMyjSLavBFd8qDyVoCdtp4yU5kWpq4PsSbNw9tXArta6DRjaPQcahcDeif7ZXqyVC8z",
  "key12": "556Yjy6tLJsB3K8QVxfBsF6yttzPfYdcgDNpLr3gNJomPCdNaomZ7fLJGbvoRaNe2JqvGge1F1dnZkPNuJxBSCSi",
  "key13": "5c2aYWS1HiPXyGvWLKynEceWq1Qhr3XoD3ibTsgERyqiwVDA6XvTfqzUrKymy5hmNAiFHYQJxgKyLSii15ydY2Ve",
  "key14": "2N24QrgbNnMWGBD8CK1wXDD75aHqLDa4oyqWs3r8o61p8LJoYXgA55QQ39YfcK4Mzq7XvKiNp5ZD8egxkJa2wwz8",
  "key15": "VkbWh6PeMCjYyARr85Z8ygweWuvtv8QS3AqCzFXVFpNMXUDS3eJmNoAGdqvjdzEzdUddqLwFURpVkr5sCSX5n7g",
  "key16": "2TNyhZh2XeVjwkYp4epcpXVAQB27HBVv1FkqPsjvf5A1mZsJsXUR5vjhZmrXKrhQzhPrzKVLn6PyK5zsWWT4JkpM",
  "key17": "3RVBoKKiYcFdTmBhDX5sBdfUnEHY152yceQpgxDMZftoCyBymYkdEUkDW9twDwC7htau5zbVot5CTjCbmi9MYY8j",
  "key18": "3pXGav8FFusLfHPTAtM5DcbWtFr1cuWUMK9aFRd9qUkFP5eEtD9X7Gus2BwyM8o4bjr6xzcAs9mfpLj5Afngy5ie",
  "key19": "4uDUQdJoDt4x4QTasweVY9Jbxj4W17zrhRSAWFME3keVmVDCTi6ZD8Fo8EcKmfQCmKTugKvNEyHgMrxutzEm9dW9",
  "key20": "3ju59PnSXFNVtnhuNd2wvb34jou2YYK2pJG1gpZaymvivzN7sy7kLvUE6UByjHNsXPKbgcGC2e7vBPQgALLH28Zt",
  "key21": "kQvHzo6GaoK5XxFywc3Um496E2fDaXwBV4y6AHt45PRe6QE46CvdUq6AbGvqz5pdNS2P6Fy1hfqin9zG9rBJdam",
  "key22": "3EXTvsduU4TcrQqeyB8KNpywSyWSpZAxEHSQQpRzS4VjJ4Mup2SiJXWKfYNKQDp2w6To8QmEZXYS4hvvyCVaGxvf",
  "key23": "3R3xzkuitbPwAyPZzQJ1vDzFMVV5qCeYAXQXf521XykniMwQdSG68373LczgoZK9EDta8cVvJdQHH8F8WJ9jTvC2",
  "key24": "4b9RwpGnWkWASHF5ZizyDmsixaHg6Rg1xNRKt6ib5V2iDrLEU2TPRJZwZ4FntorKhCoMo4dZTDFAjxzg1xvxdDaP",
  "key25": "4mjnSNXWfivNJ1jqapUqWndrYTExwiDMnUMpWP9rEBe3YVkgfriqHrBkSPxcyFH6mt8UAFDsnRQ2VgjVqGE4N2gG",
  "key26": "4pA56Q722fivhQwqYgUuRW75vkqV7CTdEtF6Gu7WkP81Sew8tMs68Hxng1TrxdoJfc2UUkP6AxPpwfnJKRJzXN4c",
  "key27": "58VGjP3dAKTQ1fu8ucJvcQmnJ322n2djCbLWnZtFR45UaMZr8fnw1bMmrkFm6vdk9HfTbPEHdVv9Z9jTvQjHbQ79",
  "key28": "27dB2CF8hvce9tx3MtpkXn3P18ewUv1GiKfsATkVdzZEv326UU33jUscjWQ1gHoBUQADriQDYc2ZRDEE4Vx1iHWM",
  "key29": "5yCLdUSyCVzwHwjHT4SGWEyJwLdqRhb2NdVN5KRaaJEFmiemECQhctbSwANtZnaSk6rUpHKPxChQbH5QdWwHz49V",
  "key30": "2MSHw6HcVpDsKvAN7YdoAsxvDbPVwpwrici4rcK5qW1byiDKFyDyXLnAYaPxZ21vNpG56kdq7vCCKAref2QH5L5t",
  "key31": "2eD36MKE4GnwynPG3ZX8t1kyDafnGQSL7Wh1szyAjEGFuCC41krJmtVNj6cpo1myFE82LxRoWNxeE9dfFwzTbmxN",
  "key32": "Ch5VbVxXMBsQfsgt5hYA3kbjHDbH23hotY9jgNhy2PTG929RptjWCTy2HH82Hp5yjwD5NWA373mHzchBLqgVeC6",
  "key33": "53JtnCozC9Pwx4s2kVbPuNeC7mquaF12Q2Z3smpNsxWq8T7bGWSZpZChjq9SNFhBocyH7a6QXqMMnPBH9dcvzS56",
  "key34": "2ZN95iYbn9rkvUU8WfbikUUxhXrExkiRhLPiQoXYsRW8aohPT9eRXv7pMZKBQjgh5FAGmHqHTdSG5QZU9UKK4uwm",
  "key35": "xHW1Axym45dmwBkHbnZ7cQ23sey1A5d6ydUtb1FkbffJnFC1r8XPJwS17Sda4MaQPBqhafwXFSavyPGJdQMtp74"
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
