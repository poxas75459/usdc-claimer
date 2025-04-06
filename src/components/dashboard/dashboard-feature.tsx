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
    "5T1PzjDrTQ7499VktmQ5txEjinmBDNmPUV2m9ooF9nePmmJDrjdH3RVMq85XyT2APUZkhx4L79F6N4ZE9NNs3dev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5co3LgnFeYKFXBd4Xvp9mm4V3toSU6duNMKnccC4SJXm6Ad4uyTgF1vx33g83Xpa2YiF8fA6VSXg4coDyxvw7A84",
  "key1": "4V3V1bWJgTDYCkY1N6qVUaRsCTWK2o55QXUvbGbNZoeV3qb16oqLnjFf5wectYh1o7ogznKHD58tfskrLLkThASp",
  "key2": "4L97nbG6tEbhR4HaxAu5zDzh5PECsMbKeYZMwDbTxaGpB4XDFnYvJAzNC94DKNW5tQimxVqtcVLfq7GHiovkdgqc",
  "key3": "E9pjbMrzwhgoFpLuAVbZMqbcJZaisxgGhUGcTgNW7xrFV7F7PAsdwtcopDJo4BrWa8Sk5mZ4t9WzSA3QLXw63Cm",
  "key4": "2QrmyidXY5BkeKy1uwLUp4bjRGg9aTha251jpznbbFRqbkMDMYvc2jXjkKSrwG6UxhPSTXpieeTuJ2tKRdKK87i9",
  "key5": "3GXoKhWzBAD2h2pjGe1cu6oP9XxrHwY1nVpiFWxLgQjE9rETCT9rzoP2nNYjRMjYzj8HzsDQVrFsgpA3Q24BekQj",
  "key6": "VQokf8eD3CxGrBGHkiY7YACweTkwAMUBJ6W3VjibPt98YSz6iRyH7yBS2j1uiLXUU7HLYEGwsV13SUeY92eJN4v",
  "key7": "pNmThpwpfkfhtBpG27cikfPzSazexuh4byBab4NbMqFooHmhehfogrM4otMK3K2WGLknKCCedNycLDZs4YetfXU",
  "key8": "3rGTj1mPhPPjjWp7AZf9tHW6JymTBNxZqqt7Z33m44ZVGaZM3gTVSKuKBjqvf62ka81jgyRBfz11tq3m9ggSYy8d",
  "key9": "WQy7XertQQy9fRmSFaQhZBGkBG89cbNsvS4akj6kv1ohB6j2xyd9rrNLsoAyeLyuZhQbUqrXgEFBZ5cPP4BPMo5",
  "key10": "4KFL638aWF1urjoLTDm8kU1Z1HQYy1KLigPMACf6ubLyg5hXyc2rGij96jsviZ1ScJeKEQMAxRMQCYv9394FEa4Q",
  "key11": "5wZjpfQKJ2XNWaJiyKFjzrnJd9mNKu634PikzRfb8jmapSQCGT5cfFJ9pazfe9Nd1274MdShNaH8pnqyzpWjHevx",
  "key12": "5ouppJY3SjKAwVMHgNzUaRCQuuYToEML1XRebd8jK2C3yyVtABC7B6dGaFKCdTysJpD8Mm8VXhs2nyM6WpmHG12x",
  "key13": "4FndHcgGUnQhDsumYjpekv3cMakf2yvHSxXBaZiQKFJfrZ96XsbgvGQH6krXzosQQFUjdEiafPh3y96qbTN8qx8V",
  "key14": "34AT7btYWc7DLgcZwdHkfaaLSuZfh6cFSpbr8BSVKPomkvMNzQKZGXdbPsGmQ7DStB6ZURR7Xqc43TLUhrPinukB",
  "key15": "SjaSTfTRH7Xg78QuW4QRpdkEjsKg5wdTiWt5jrWKmKHTRK7jbT3UYeeShfHCb1kzu2gVM4fDProeQQQR8ktWraC",
  "key16": "2K8tDuvaWiExBeTmk6G62Q1EmPcag4ZV1aFi69wcaYhB36L34b17gR6ruHuqp67P7dZBSd45wwkLxAJbEqM2WfAy",
  "key17": "4DRzp119s2UDU4YfEChrEkPpuDXGsTTwbu8GHyEG8DFTaMJzCucLzynuPoVfTMA1cvpTFx8eQu8hgdnGRDoJ8wNT",
  "key18": "sctfgRHX4QyAWRawiXTwJgKcEZ39TqPj9NfPECmMVrxzHYWQq7buZeUGoxD5q3LWwja1EK8C5EcqP4Uy2Ddwnwp",
  "key19": "2ZVcQzZsuoDJy5CTjMwydx9RW4qxRSTwu4ELJCHuXJtujpFnrDQH8EGVZA4eYRiL3WmXxJMDuqHQV938pWoDfbbU",
  "key20": "25x1SzJ4cJ77A5ZQY9UCqq4yEQEL83gMbBkGALsLWgyYc5xWirYHVmMdupjGyxMRN3QNNoPrPtxTtxHnAH4UAmGV",
  "key21": "5SmeYjUjhbLXApjAtUg1LWJfAvo4h4keE49rzbWyGxoPuUaspjgovgvxzNJd2rhqvubV87hpKneYRPrKx97ohJWt",
  "key22": "3ZPac6eLantHsu7MXoarLGTG47LUfcnFs7VwUWBoByV1xJ4j5BkVi5mKJeWcgL1XGxBV5QxPgEMUweCQGsaBFkWU",
  "key23": "3BXza8aENkKWJrw8cbqG4pNhuQPLrNcND5vifsjrdDMxxwE2d7NjP53Ug2UddVovzp1DDA1ME6nkGM96MqxermYz",
  "key24": "2Dk8jj3KSqk8Y2GfjPvPFvw8EJtibb7NaVf5n3sJ8uhNPRHNWnKZmWQkbx2uJtqyfyRB1njZaYJahkcQr6StFbgH",
  "key25": "3ZNdaXdWXiMjcWE5U8nmnPLFbRHLcr134DkXS8tmxK3vtSeWPLeHuYUmZTkYaWe4Eh8DdWZdXR8UWyqzuqonQCHz",
  "key26": "5hSCz7kEbd1i8eknjxqmWoU6BNBoKY3J6j11GHKZ5dodwdJ2jYahHf7Sy3hiQMemb298EgyZV1mFUdtvkpSAPgE4",
  "key27": "4YqYmic7exsRkjiBKxxEon8qoDt5HEnxUEhvwg6ytfwLrTPNSVFWH7b6azqcekjnLwtwjH1jgzmbJeoGZkEzU1Ha",
  "key28": "4xYkQPkhXn55qsxYjufJ5CSbsmWzXUBeJ1cnLebEmgcqDDcuAYm1Xv6UyFtDubvEQeQvZT22HaC5aFB1NK47cQJg",
  "key29": "3nLvb38xyjAyey6nCbbHjrLT1SJ7DZtdPGBPdtYbnXmpHVD5aAAocNZ5JGAcyGRgmqdJov5MMjzctTv21sxnG9VF",
  "key30": "4SvKFRLjcab5o3FD6BwgbuWWNu3xg8D9uaYiRBjhYVbjybS9phP7KGfadvjh7z18hQb5aP36tnCypA4fNWWWhk2P",
  "key31": "5Lu33ZEMNDEzRKYAyUYiY8CcP6UvGJ6xBwekEifQ3gB4qq2w4x2934HrrRRa94on6aDpwuwdh8NdcZ77AY2y8uo9",
  "key32": "44fnPSHjeEBGqbLJNC2AhEi2tBezdDGy4UtSzj8f7C6aNMr6HUYWCtTruCnsgAGdxwb7CBcBVFsL5aNgwBxuFHpj",
  "key33": "MEhmQhCqq53yyzuePSksXePkLZhnpBedHUhfDYUGNMdsC35LcbwfEJbL2e2E7RSgMHgTyCLmBmJeq5k9Awt4Xwt",
  "key34": "2R4aX5fCov29rGo4sxZQSGJCxYHe974qUDugEWmm6mXKJzsQAyC8NizbKzVYSBe5ispgnJKNQL2vEsAz5MoFDGAT",
  "key35": "3cte7cd92aD3Jt4mNkdukdzBiuKFKAajF3Mm8561uyYZDYvr96xoHSfDjHps1X69P9ELh4JeGuPid4Fa8pXQaYMX",
  "key36": "5x5ustajECi5oE6zuXRWFQ5kkTxZqr6ZTsjF3xBef9byct4gQ2RGyeAouKmwEeDrrUqm7mdHwiBBRsPwyxrHULif",
  "key37": "GYenPQak7qVfTg9F5gj7LRwFrFWUoi57Vrt4rUg4eWRC9vTqq3cM9FqNr2CfkEMYjhVvMrBHCcmTE9rXWMjhpdQ",
  "key38": "61dhFu7phLP5ZJj3h8NFb8RfVcy8qBpohQtgkNkXpU4d5P34VRrJoDjzDzGWAFMxWrW2CnVEEqWftmZLdWb7wev3",
  "key39": "5rzyCLz8giuAPsHknZc1KEVSGUtaonsCNfvxvWEUqmrowf6Z4jF1SmoBg3remwbSowz4ZEQ2ZLfkr2cw1MzfJ2R2",
  "key40": "2vRkAz7UGkiEtHtwSgKiZTB6kdnWMcYAfiFjqkprvRhrCfZmqR3jQzzGjwKs6u63qs9tZjysSWk7LrqjwoaDUJXt",
  "key41": "4yNcU9PfgcbQtVFWahKBLg9JMdmYPmc4dc6eywBsFBTfU87K78XVsYuJLzfvjaeBJCwNS4sqcGbgma9pWETg85Ep",
  "key42": "3WMNzAk1CVDjsZbnWEP8d9YjLzNUvHBY26tkEy17NjnPDCqQLx3nfsV3WA8ETaQpqBJqU75wUakU4gXgVYk3J6vx",
  "key43": "3v2az6Nik2vigKjH2WfW9tLEAL3qt3kMhz6GbTShzTf6TU6EbbnrkVC1LUKEvRYZEPYehVgGXJeeBhQcVvX722sE",
  "key44": "3PZnQTd8devdZz2yr7Tj5hXCNV8Wi1hxvMpPnKbz7okfiFS5NL9bH4aNeFLn1mxmCZn18k3eWAFN8fprRQiT2JKe",
  "key45": "4s169PGoxEeVpTfwLrqmum2JXPvb3KSjKegYEYuxxkUZRUPGsLRKgHxUkaznAcpKVAHA5nRrk1g9MgRmH2UfDMbs",
  "key46": "5HNCj1ZnT3byapXbj1pUBmaQTpDLBd37EKpYFVMNUUJ7YS3h2oLi3qHBMRYzXPwsavMGtmKmkWDMUnAk15t61Nsf"
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
