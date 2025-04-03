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
    "4TeRbDKY42Y8wFBvjYbw7dLK8xLAuaenWiDH54jzMCwyxcvCBQAP5J5NXLTSUyPCECionkU63g2i4jnMsHD8c2kB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pv5RmNcewRuyDFau2p4AmfSpSzi3nAqbsqEZp7Jwx9RFug5EPNC229dWPiMjZUiKC4RUsbGSCfvc9yCugFvRY1D",
  "key1": "5vvTXDeQ5dc4Ms6o1bfXKbZ4szf5yHXotqwgHjRgX692GYVfnTK5LsSixEosS7DzQ2tGrTsNur286kLDfWeKvS9Q",
  "key2": "5Rkzff2Y5TmgGwHy1uhdbaw2yDe22Swx2yvCSrKX5v22xGNMgV2xK6ZX4VSpb8FVYNBafLb4RER95cLgCSR6RRAf",
  "key3": "49665DskgGN8abTxyzN2gTyLP8mWSmWiiWmx13zGjYKkmCRAJejvbCaYJS6NX9K6Ks4aDUBYLbC2FkuGqZBWv1aM",
  "key4": "2MZYarLNwMQLorytsv2bhUuBCmF9wZdjFxXFuirekCZS1ukxP9kD56GbTRz7uqsg4zZJj4mTdtCzCVUKMyd7WnNH",
  "key5": "3Ty5r6CHHmCNwKPwVEjJtrCaMfbDiq9uHqcsKwGtxGqAh7kyh83tVwRdkCbomcrPoGTy8F1gmNXzpWtjyJWrwHzw",
  "key6": "2KZT86iXrmVRtRh4YSKkgURwKFYL9s1DxUah2ZzmLXFTonGkKypAaMFm5fBg3DdG7CuDx9xWTL3BvrffimaBxRrp",
  "key7": "2p8GQJxHzw44ZopfMEgW7wAjSQ7HfzCyVPSCtYwXN3CKcubvCSsiFbXYqV5Pj1KNUZ56K4ekVxkBHuLnHzjgqAUS",
  "key8": "3Kz4iJXTVLdEcnHXCgDUa3H1sDBHLmK1kaJdxuT98HScFk7kQu8SuFKwhJfp7irA9gcxeg7xvuC6nXWG7dQYKrBp",
  "key9": "4iqNtRK459ADEq7GYFA4xyw7gTutavQbAi6N7pvFoyj9anoYvcCahY39G1yExnooSWyibPQT87mEarJ2nNtDsU6E",
  "key10": "5ZQCe88hXieCTDXX7PiSSdTfVGJnnHssW4j1SoCQhHdF6gCTDfDAZcNcWcqwbJC1CcYs8cujjt2R4XdjXhiJ9MAy",
  "key11": "4P5bm4gGhApqvd7vQt4MBnjHKE5rC3SNUCgJjZQAtg7HuL2rskkP5R8zScDq199eKRRBzXce8BhY7gMQ7JzoTbhy",
  "key12": "43Dm23186Q9DuRMKacG7N9y8vgUwXFzDzvTerkNRSVC8mDXyxHUY8ufRyxwgV9vvsWGMVEzFZyUz2s7VmTykQZWy",
  "key13": "h84wDpkg7fozMv6oWfsqJf9QDAiF9PeHCrpwaBaBMJ2PCxdjQnH1rt4vfe6hhwKHbfEwEJcVahxL1bgixZj9y53",
  "key14": "2d7NGziLk1Zh3afBEUkREcXEbXkUzUs4FhufNwdZQqVs8TVs5TywRVvmDdo8FJMUZiYj12BJwYtDjKKRmvukH1hW",
  "key15": "ZeRutet8m6fQJmLLhqSRbXLggvUoQRDSf4Q8kt8qXiDKtGABwGk9D7aC2gp8osuhsP39pqXmTBm2ExnRTxjA81F",
  "key16": "5s2GwDQpaFqfxqcL834rByADJdYLULavwT6ifiWHF4wDpBLiSFimvyw3TioZGCA1vRuynz6STKpSzNY95QfRhudf",
  "key17": "3ANhHKEBf3X9f7BuGZeCvY6TmLj1NN7fqVvxrG15accgSzprAwzxJkFd5futCuJaraL3pvBwFXCxPG89L9s5EBzA",
  "key18": "5JyFMjEf66UuEnEXhEmTPnFxihok8bdKCibTxL8zDd5Kdvc3UXnXj2ZwBTYszdoHNKQp8eFLcg1rwFKMWQo5jG9z",
  "key19": "4p8Yr2SFwTujCeAkGcWc9c7A48L1ebj6MSk1GHY1U6xev2bMDW9CC7h69yTeV64ps2Rh1GfgdzEweKjAfcQLiRhu",
  "key20": "4DTrjnb7GkKXjNCT2QVWufS9KMFmwN8EzLqTJgPM3THbq92sFoqkSp6jDWUociz2qV6YUrUYd24q2JuCELrsV8dG",
  "key21": "5E4movpctzJfVRAz3ULCNgfithbUYGeAgWKWibponf8spGqSBQN7rEFqAGoaLEuAJpngLczMV5iqd2eQUusPGF3z",
  "key22": "M4vunHCRyAK1f22fABtPeZYbAEZYTP8bgoLTdyAkM6iS5xGotoAeP9XKkda5bXTTqCMXkC8mV8A1XovxzCwZ7jb",
  "key23": "2z7bSrC3LmRUpryyjPDJZDUSPa2c9gHcXa6TtDbH6hcFufuSUzCtn1wW5D6fXzCsCKZWkKxGqaUbRCGX4qXrB8qU",
  "key24": "3WD4udwKuhhToU5XBgY1nxcgthkyigzkX8zngDFHGnxP4rHrFbB4BswGpX1QrSYvvGvMGPPb3ELPKVzrH7KshzuL",
  "key25": "ZSKd2CLTrsAfnCcFvfND9HwmB4UxdpQsCYcmC2qjVZGKquHXh5icwyG6YjCvG1vPreRVsAnAwfqnJsB6wRgkpkq",
  "key26": "2JaMbB4XDu7vdjtZqLpFHnm2qmwkNcjQYeingS7TPeex6HEZVqznMAF3jqN8S2F3wYxNfwV842JG66ET5754497U",
  "key27": "4zsRBqRuBVMTJXVJV5RnANb7HQy5jyRb9UzHpmMz8D91nQxHtQYpKkf92wANw1FTnEtHP5BmWXAh8atTaEDZoP6S",
  "key28": "JtTr3dwUUoJopDAQ7RrLXDSmDL963vD9rRRUJqY9deYbGckddcbM7yr8JvQoq4p7MM4C25EvoNFQoFN8rTWGMrz",
  "key29": "3tCDvpZq189BHDk8t5W2vGsJ8wgZZGwqBbCywdGaCoNk7c3dACdiFxeK8x86GDrZGPgxNDhXB2rdTz6zf9ziPMez",
  "key30": "3zkcqYA7GwqEbHgmaDGonKLmfLh6P4XEE4ihZVtciqRFs77iPATJNaJu6GwPN8uoENddR41R95g33UWPtx4ZWyjk",
  "key31": "2i3zYiWGiDpELT75QWosh9UtcqMRymLzTAwT9qQWJjdBgG18YFxDNwHtrirZvdWkUAEaVHBwGo3xmwL7QQPYUFeU",
  "key32": "4dxuWpUHrkuCkebQxQ4dsC5WvsYx7QxWReLrDSmaz3NoAh8mUeva5fReQCqo18noofBDni1Kh3NZJ3qWPSzoeSAe",
  "key33": "3iqHBar145N6VayPM9MKtk4Ey3ZNskuMWoMAxwrwYNZDodUnfofLWjEvo9KLNRzsG7yvsDHHDc886wJdYba85Sko",
  "key34": "4AJNnYkmt7Mc4gFxYmXP9Eua1MNsBjsivKaLLbuLrBBke1vb2SmY3X7kDgDtxAxFp6aTFRTCS4t1oHagaFrvnXM8",
  "key35": "3akTXjr9qcNvAvkAJ5HhSHe1QyXSigh2XWEGMNt8QctUmSFmoXCnY6eHAwzJTwGjv9n783Vm7Bpy8ycftn2UrJZH",
  "key36": "7pP1HpjSq9QcAANvvoM1YGbTimBFD45a6TdqWeBWM89GKsXHdXvUkyyNoSBkHoFaZCxtDFLUDGEZtyoNUPGYtqe",
  "key37": "24KTYU1PjswPfv9sBDFUqv3eRVvsxAzbeHQKB5tvbSiQSAE468h9dMPZ7ecXxo5qp6dgJe99wt2iTtyrZAUMhM98",
  "key38": "24BSYFriVgPGK5skmbDGQcSLnrPyszLRApamJdghAWhZTcwTySqYdxcvKuwXT5GN6fZerjbMzwrvgKrQQdP2Pra4",
  "key39": "9Z12MCwqch8m3irV5TDy1H1eHBG7DL3qeY7vbhbkT7wX2AUPbp45AUakr8JKb1rJw4yFJj7jVxKFY2SGtmAuDyd"
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
