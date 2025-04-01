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
    "59sP3zgBFYAb5yNEZb5siKct71WZDHB2M4Uh2TeWDyDvF6JkTQzTDPq7FMuV2insQAEY6ja2RxBYaPDPdQujMajr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bs6FgxdAWeTssscir4PCdcaeWUxLfan2RQEwhQUSN1FLa3YTYXkhn38xww2RbB7GG4CNVVpJPLJDPcUGomRDgor",
  "key1": "3V9oyPcvMhfzYFVtBQWqdH8VZncuqtmLLj9FcivHsUTCXo8FqfXgbHPVXGnZ2cQSy9C2j3AWzWymabbspKLtFudE",
  "key2": "61qCCGxnZVLZoaMJdrvgsUCnViBgSSY3HZLZqRE1b1pNG3mJQdZ3srTURuNRwgqVQWarW7D6ydeEsc76o7b2xTrn",
  "key3": "2ru97sL73vJHUEHFrRz8edv7ua6vYmhXFiJizyv8bSCFejY7YtuJiPJvHp26P6AWKkwMZBz6qbnXtrEsHPqUuZs9",
  "key4": "3nixTWyW3YjmEnhTNBL5KLkuXxnQYGURLRKz2pKBToAhtoX1pcoXTHz9NGfwvhMMiMd7XuEw2VYegjpvtK7Dddbo",
  "key5": "63enGcpyDTP6zTbV5J6G5NDhPAegWH9ZeEJxDjzuyW9YeCajrtkQ5JXe8n4JFhpM2zcvUwYNNAUSHQ42SwEhFyG7",
  "key6": "Nm4Ns7xqSdAWFTbX8n1CQwG8YamWqaGmCqK8XoAz1xntoByGWWhxGg5a4JNUMSWSHG9PBtgS1Cu1hJNSX1yVP1s",
  "key7": "5iQvSStGDALbXpxJDDpifN1k2AWeBRgbMXmyhUENyaC3yjQhV1swy1LHdvSEdrJwYqtsUi1CWud8qPbr7oNTKkwG",
  "key8": "4r2i2Wf9g5j7TKcfeFA9TvEbkrdrs9kWA56FkFbEQ93cPp3HHXPHaqxVYPbbZXhjLxPcm6VyzY87FyrSTvAFb1kg",
  "key9": "3afZpK1wDmzZ8dHgzwdFs5fmJS3qaBKjuqL4deoaqgKX9EuffQykjfhzVNvAMLzStWZyvLmS9An7aStSThUuV5qY",
  "key10": "52HgiM3xVa9t2RZFPxvKLnAyBEeZs9GNg5Z85iQJ1jvj8fLJgJdFdZxmz5M9EYxENNxjpxaUQG3o6bdPessR7MGy",
  "key11": "5egwSQBYkgaEMw8ztjKvbcnS68xmvNimE46wj4drSLvGsZLMLsgpYAsi5p95hxgRZcWSkx6T92R82FArnvH7vZY5",
  "key12": "3FcFjBdST2dq6GF3Vaw1GxVW5rC9yimogcAoo1m6M7UADcZkMVxopDJMoEUGNWW4zrbPhdvmbue64LbUiLbh1D6u",
  "key13": "4PFNwEHUMU6eYVRk9dXVodFuE9cD9LMfjBbAhrmgy8oFFMVxY22mVaxDRqEw4iXvYndeUBeYWh56BGbVQPier2su",
  "key14": "2xfYtCwXjqz2EvdQVfPHSn7Uitb8dfMMEcrGQxpKKkNaZFL25XarFPBGVgEexyDTBPNNzTN8v83ixUhvvcCVskn4",
  "key15": "5ksCZJhasJPSFoEXuKJ7fJ4ooCkhepKztd6zgwBnDSzB3hxs1vT4oeGkzZ8p8xdKrkGodHWP1vpqV28NwJMSLMp9",
  "key16": "5qMgnbbBemhxxnuHkCqLfJa9Kk9NNpYULHDhSWMU1gcUHzxgJ2iRENRRPSJH9mqry5CmSVvrH4Y3bEPKznrPF6sC",
  "key17": "3hRizuuXJHqy2nurTzMm7QiBoJnRDj7Ka63TUT9dF3gYaoAJFun9U3cKJg6LH18wPsZ41fGXUc1AdonJADJ79RFj",
  "key18": "zYaNtXtKhdbdWw4aAaefh4KQte9NPHME4Mv964HSapphSwcRw7YgknQBw9J8StZgrhSvFHV8DKx9GvN4jNLGpLV",
  "key19": "5W8SKKrhthfdiUqfie7b2td7pTB6XrurZCq2PnztTNitgSgMaHCEkJtJQBYgwu9vj3jZeHBFEkAmBkWkygBE4S1X",
  "key20": "2svANTM9SS6mmEpU3W7QRe8Q9p2VJAhV6AJMUgBd9VxJR5bcdZHfmRXiZuELGcjz6e6f3zU3cjVCeVTBQeGmjBBB",
  "key21": "63cCuZQFjupyWP24LEbnk5DqbEq7CAgVrM7esjR4XdVmTwYTtoPbT3cfg19o26FFzryn2UAtBonMKrndYd9Y2996",
  "key22": "fmyKG3P3xqM4FU76F5kx64AZNSvsDiM22B3HXY6u32ryx8dv4HAajrLt46tD5PEqoMe2K6ifKNbDQEqTSZwCxc7",
  "key23": "5DMKDMhrnXSEfbKjGp5SA4wB6PYQqw9jjmFHy7mNLpTD2SAV3wY27EkgAdQGQ4B2dHf9pJ3PpPMtTH8svuwNu5vi",
  "key24": "3z9gVz5w4ns92LjoqwzsaaHUz67q6p4arTBRSN62UZVZz9xUHXjBfvGuxCFhj9jg1eYEDzCPo4t9GJ4Lej1vvMPX",
  "key25": "2XEs5YjDuvFBXWdx7nQmT1UghoZgXUJVZ8eeLHA72RzMLyyh63U4nM2QZa1Ee59e6dHey2yZQvPrQwESFqQiPYQ9",
  "key26": "5URwCiVwcmCQHwqp76Ge9FbFUkkz3XLAxL27bUbJTVhpWUXRwARuLd62QAGq11KYJwuT4AubetKG8GHBtBVwzP7b",
  "key27": "4kMUmi3jgFZWaP19xrjKhGiK2Z9LUKKuuxaJ9inQroCigX4fWWSKU7vxCF7z9eYgwMHFhZVE1kHisrFtUxnXtrGS",
  "key28": "2Mf6EjCTXCNvvHQoVZfpMhnHRBU45SPzR657fPdkcmgKZugD74BtECeWFz5sinJRFufY62pTBhHu5a4QFNZ1SZXx",
  "key29": "92GLdfor4RjtrEbbu65LHgCPtqgE6fB82ue9JhfD7je2DpdA442QXbKVouPVVpuP4yUMt98scwvqTqxyiBhgmZn",
  "key30": "53nHQDELdeYhYgPYCfkCg5MBhqFcaxQ5i3TywfV2QNL1jrdfwEfhKTwEV6xbBWcaKoydJ3aTrFF5Qouci18Gzgex",
  "key31": "3gC4zdZaNzvRwdUZkwg1tttxLe7RfFkcYQj1bFxEENP7PyCxcLbmH2W3JaS7gxoGuDACWyy7nSrQGTGrTKAS4Q3g",
  "key32": "3pD2uwAr24NSkB3NV4cJ8aJXhC9QZRum5ZUrJjuViRkrAgxGiMyY5NBv5gQthqBWPzKwXSpajzcfKCKNpmRTguKF",
  "key33": "5SXuRK4qtPRQXVLFDZqyV8bwyo8mYrkh3mh4pGEqL8ZbuB7vrN5mviVLAUpnR9NVsKSSWZbxHvgq2bkGfEH6tiQN",
  "key34": "3TuRA7okLdvhG71tfLWytzrcE26kzKQTkc3Xp4iVwj1Zf7rESZd3TffgNXEsbKWziRY8tffEFLBTbRqpQybjYL6K",
  "key35": "MqfRLi1ZEiAC3cumLJKV5c545TqRXA7YzHvdtnjGCJmArWf7W19VgCJs2QeGMz7TmNDuGsoX62F1g7A5U5s6c51",
  "key36": "4CAA5KRYSBx5mgGzcFPvR9si4w9v5aUHPP52aHgvU8ANTB1rXgBdgmyURuNGzdbVY3uKFVoPBkMyHRELDAuNfmHj",
  "key37": "2Eh6TVpwjc6G7AoZAinyLiumtNaursDLrWrh37uA9gnMouMx7uSviiaTLx1m68NJ1M3QiGq4VJb5hpf7CWCbVWSM",
  "key38": "3zEcMjcjb6jTbnq6wFcekCAHot2y8uBLby5iyA2UJcDVYN9BbPNAnKeoPAtWgHFaYZgrWq2E7RbyeyLneECsrgiw",
  "key39": "oRLC7YfepjZdw4R77PGvGxdA5Zp9pMjyvhkWJSezCgcb9j5DsZut2MBt2qcuP7AhBShWVDZeiJFUCzSwGMwwto1",
  "key40": "GacEcLkErqwyGYE5NMvw9S1Zp6Frp1qrKr1bGQdu6zBMyeKdKYXUrhCsXNUhnKuqrzwDAgbujS1KNgUBnSHMxAb",
  "key41": "Ltx1wPwjP4awUpCreZtWnN7dHAvbrnQFiqhsYY5yr4QkDLkHqZ1Wqr2B3kMvXCjXaCBWfww1UCTC6xdUmdeVQkH",
  "key42": "gWXasnPdpQKKHK7PQtA9Y5nGcJQEMYbvXt3efys2R3oeJ7A35kxtcMVLSBSESbzw6uiZjv865AVejQpLvU4sogQ"
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
