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
    "eo7MdNairysWNsnCXW8zu1i3Dr5CfMyaSbFXUfa8bHbw2gDVzSgYTDHP7E1Q5ZeYMb8dqWGbcf1VLPAi61SXiTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXDbin5eahUq2AEuofQXEJQM6nij8msf3Q9VDfFFnx7FvFYTY2SndHfCHm3dZTa6EW6YywuyPAQf3kJUMMNw9Pw",
  "key1": "2SX85EAdkPYHqVHN9ZvYoumFkeaSkGCdLZ9Jzj3hZusZT7BH7aoCAKrGPxkC5iu9fA5a2c9esycE93r3NdsmsSea",
  "key2": "528N4BtRL3W8NshofcJnq2ifyjh8VL8o8jkeqfHAkFv7uxxdgonwniHgfsXo1oFUXHxSFgUoCjCusmkzi895YcWd",
  "key3": "3RnzNfhQEvX57tZ7hn6u36ahrVb98f7YnYg5HMsJ15C272kCc5VcpTsDQjUyekwezLajepw7tEMEMnUDcAEKnS5C",
  "key4": "4TKwBUkBL8NLg1TezsPeRcFbbUQezdGUficJmjmdU9qw9CqwSDd7f3gAYfKTF7Wxf1Ze9Ucd8au7ababXSxAf2dH",
  "key5": "3zPVktqXFHNVs5BtEQpyP62PcxtBjGmgYGCxn7YbX72f2t3zE46Ew95GC3hNPEuAT2tabjiAAom1Kps9DBk9JwEa",
  "key6": "J1h3UHLbjgE2hSbwHNnrWyzCpK8smjCcLmsXaBoQQGucjeKuUzfGh9TJSz7Kf5aAWTWUhf7a1ehQEs83eXRQNV4",
  "key7": "4GQEK9z4TzskAd6xG7DSE89Kahybw2Z6JQ2rqnHGVkcZ2ud56CNKd2njn6QmKknbn7KPFNeBw8sf8HTbnM6dat8m",
  "key8": "rw4Zu9f8vVhDcchDPrQ5H6PjZbSqMfmEZpNPHjCSfSUsLYfr5p9ahvgnYD4fJ1N5gyBNe1ZviJVSEXjdNrEvk72",
  "key9": "5uAerMv8zrTABJFGCXPrtswkJGkCKM1xQTfGKBPLZL5iRa5yPzmmgKFvEtFonnmcHizqvXs8VazBjBwzQq4epRDg",
  "key10": "5idvVuVnwJVGPhfhzJVHD4VujmJCR32xQEFhs4jwXSJXgn3Ht7sePWsJ6B91tyospNaZmCvAyWJi5eg896NGpfbc",
  "key11": "3XsAmtALpBrBXawpxG5Z47WZrDTUJmHfqTXLGMgY5zFUdKrrZjM9mXs1srmfnRC3RbTaj5Fpw8QoBfzdkV593TwF",
  "key12": "268nVu4UQj6LvbwcESjnVyvhqpaTdFavxDzCdPe1ZHm7VA3MDGuVweJRmJ3DWwqniSZi3utPwoNgTqEqzkzz7WYY",
  "key13": "51MEkcaFkyRi9P2peUVordKNJVQzPrzsRKyL2s6eXQp6ywmsVpodW6iKu3hAdyVdV5Z7v9h2Gy4Z4b8ZFpQzTUi1",
  "key14": "27Amg1dDfN7HzNCmY6JNh1VmNr4W142aBqMcAEKWdsUZJa7vLiEtoiKZHtgz1wZFqHVjZBjJ77swV2vnSBS6sJoF",
  "key15": "4GGsUfX6n6TZg4EgxZJqZp74L1JdTF9hQv2wELkKtmDXbcZz1hFoinFXRcPP918vAyqKUzTJefp5RLNPzvTDogMd",
  "key16": "5tJp1Mk81QTTzjiHT9esH2DhB8sFcywxMyUqQutxWkt9GX1YtS1KTftWDDt52GC26iomxPJbSkkUtYuHsU5GRBiP",
  "key17": "2nKCm4jXVvLvvJDHyt5B1aDnHQNDpTkkRVwGbomxyx8a8Z3Gq6HtyyjmnxbiP9FKTheg9vS2KDput89UCBNkdVTU",
  "key18": "22ShnzU55WDw86ycMhbCTXVLaqAhAcv21evKeCZDXqwhi6GyQbtTphNzAtpwRU3HHUBidrchQhAFRuj6wtgnqrpJ",
  "key19": "4U51EhfvZRs8PcCfwqQtCgVRbZbcrJDwbfut9wrBPArckaPU9Y6ctQbGw5K58Caq1xkUF9rtLg7GVBh9we7drSio",
  "key20": "3te6y9WKKo7nNZcGAJ4A3gcjJcWVavvQjaE4hCYaX1SrAFLh4qHv1RXyvCdsJGaG5F4nS2i5xeuRAfBUeJwmjCvv",
  "key21": "Ff95Vtf7edHqbes4ombBtstXkyBanmsaa8Bxsg3WGtH5XrPP9qoW58yPHt1jsynT5LKmpzGYgfJdaTsvfguJqb2",
  "key22": "5VFjSUYpdBWQF7g8NmpagZaB4F5PKjXSESNk47vxfn4Hp2GqRvwAKAc12J2jJz7TfaYb6mpHtvEBK46tkcafmTr1",
  "key23": "4jtMkaTRoouNF7joct9PKME2QBtjCg293LhphbA5mqDnh8EVTV4aEoSyNtZts6ZNtyr2QULkTxfwg3ZgGwcHUK19",
  "key24": "3jixahyw6FgFCpcua71PWxG9GC5muRm8yWJiEGgV9UvFtG1M1k46FH3tetBxzjBL2oio1zk3qdEtrm5Gm9MKgLvb",
  "key25": "323gbPZfuP5uU4dnVyTsfAFKHrGbCNpESNr7Jcwn95oCUCYvwj2qNwsamEfezc95kFywJqMEXEvpDHBTMzXDR8WE",
  "key26": "fdv7FUyLtbLrrvkTg6fppXqYYQccfJPcpSouJ1Q8oS7VgZ9b2puRxKeGTh9EEWC6wbn9QRNGYavC4M8wfSzBPjP",
  "key27": "4ujKFKk8ugY6EseXQiyHERCzTxjBebDnE7uSJKd3BweBbeRE3Byz5A4uncezqwRAZzFj3gK44U47SW1qA5SvYWXv",
  "key28": "3U9BurSZjNQR4E86hGgShtof3UFLJqYqEB1FrTGCUvWhnabve9EWQiQfJ2hdSZpd5NztM1vvCFrPh1noJvgbRaxk",
  "key29": "3BQ1G5mmDmsjPQdDArtMp6LHaxGhXQJZYN6MBeUfobMjVAepBNXH5X8Mm5TiqiNX5UNC38e9VGt9hFkjG9ukF7jf",
  "key30": "5c2vY7psMmwRpfoQ6oStJXDzKjVqXcc8YsdYwHtEVqxUjGw2jYD12NaJYbHXR1Hsdc21UuQRwf1JioYCzCVQpZrq",
  "key31": "56JspgycftuXRzCb8iPu6eS6gab5KnbiG4RVn1SKqJfBXitvYfdJ7b3dRB2iUwjtZwrTTDnRViVergDoDn34BLZf",
  "key32": "2JUUtEajW3WFS95qFhnG4G8XjXXc7arscFw79MWSJYjJFXepTFBwi39TZsffvDR2ZCeyhEZmKreWPP9DXq5C2WPR",
  "key33": "4Fv31AnZbHn7NoKhuyvvd7cwhyAadXQQTMFVX5x1ymAusspXN3QtrSHcSJrA83rPcxcofpyikjGYQL7tgy17DYxg",
  "key34": "aATZQSQtG7igbCU6dbdoWVkw57i6sg4FMPwsyjcxuQ8jiB84grxYPVDBFdBpDn2BmsjeRVakAw9dFMhiM69wMYN",
  "key35": "3e2aUN814osa9yyyWdryMVGKscyXAP5UUoenHvrH4XcYnPoApygbxcp8WbLctNT6b8pK4b7bsRsN5i2qYpg2Ry12",
  "key36": "2NSNHSkYSMBPYLRX23NYxsBAA3Wh4HKoBf4q6urGUkAYTeuGyJdmXdZSTNQPBCFxovPHUvD3dC3bTZPBq8cse9Ep",
  "key37": "5JTD8biciKQ2CWihD8ANjMaLBuLLgaG1gYddY5GK9NUSruWkJMqXZ99xY2b9sY3GVdYPeYFPYK99NQmqcH2Jsxv2",
  "key38": "5cssS4Myv2gJDhQzKDKvVxpAS7wFzUzhTKeXtz6SipLmcwCFaFsKimsZuyqLtuSSDpFUx5n48EYqvH8FcPG2Xejm",
  "key39": "4E32UYaPTKGioneeV4Mksh7vB7tdRLgMvfXGraRN8LbjFYUowBGpBGhi1yTQQKFjn958JqCYR6hJ6Cg1V6fqRZBn",
  "key40": "34QqMYdyWPvpjS7oBnqZxRT73zzKvKVCKbJmunpRiq4cAv7xwBheruhAtGzoEvXK3MZig1V2QX3xHa647xJUcTNZ",
  "key41": "38L3uVN2W1winw2BXqqekBBBajWxt8mt4A3bQ68ZNF9qWQkX939QeNDWfaPY4J9ye6ihj8m7xPhVeL5WA8NMyCY7",
  "key42": "5hBRFKLnSme3k8hnbEcagZPqKGpLjnRJXj6bYZvZtyYPtvmbCDg4TGRBjNGxFxha57YbBnG5WT7BqGomLLpoHdx6",
  "key43": "2YDZisSG7sypVF1ADb87E5p8jzfLFe9XnZSbgpwn1dMgk1p8QQG3gWsoKQBuQhX1XkH5S7ft4E4nF2iCqHMFS54g",
  "key44": "3xPonicseVtSP5aMgV5gcDuxhvgSwCTuVn3rRFj8BELsNNitjQzh5bstu7uA5DL5W9rmrMPfKMMu1FYCYda1KG1B",
  "key45": "248w3tiT5sKk4DfEw3MEX74wWjVXRcC6mdh7QTBg2dqBNz3V7x54QBFPrECujnB8xr5rh5U9LxtKTy4Q3sJKcL6W",
  "key46": "5Zh2rs2MEJNbB7UbTnvnxur8rbMdzcZE9wzDUS3YKNzisVDt3uC5pX4igds7riadcpiFxwkhjBrEfiVnF3aRj3Fj",
  "key47": "479wiB4bnyYK63SKuDUA2huPiQ45L8Kqz4S88tJR1ZE4FbzNpv7tLGXbxqrodbCYrVKoetmCDs5NqLGDwrW3EJwf",
  "key48": "3pw5wfNnJfMnLuckdwbun7jiHKJVGFfHg6acqbS3T8TJSoRHU4VfDEZaRsCWitp6dS34A8viWPXLEbZSXQKffv9v",
  "key49": "5LfWeW13Ljdtm1N8Vzz546TcRC62kA1ogpucSeSMYJdzKjRJKReKhoi7KjcNtmFYaTD6adw5C8PURCL5uRUWpFMV"
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
