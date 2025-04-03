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
    "4sGDyCuHscwN2KgTbGBcxMii7KBxSG8jK32mYBxFM7admZNr7ytzyLdipZP6YvZFZ8u6ajbkLV2LXvTrEnDz767M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JywaCF52CZCh8S33SZJQwm9P8nQtuqJZmqzBd46D8yieBnYjsjxsSP8wgn3CKhVchKMU9YtwCKjmRqWGRBLVKDc",
  "key1": "4KogbPyYi7s5mNGfm8gJDq7WgkYZ6oBUsd1gbY2iDJwGyoAEE2ZBfk7Sjymc9kHUooaa5YP4gtNE5WNXMjPpdW2K",
  "key2": "2RR5L4DsvD7UQGW14Btc3nUicTS4HgP3oCJr6JEXaDzCXYojJQH4t2t2knTzjp2LNSwB3zhaYuZSeMtAXRfQ9Kfs",
  "key3": "5Vhjz568x2L2cjTKnKBvshLCiwADQS6CbkEtvLeNxQLeduX1pkBzZbe3tYBtSpSeRAW9VnYsvUBKn1evTiUSFhai",
  "key4": "ejAGkJufqbgYCeaCbcH4azcJtGCqzJZpE1DxNQWr3fe4KJcKsTboqAkcPxPtiJKCQ55pzadnSzsWFW4JCSLPZyV",
  "key5": "ffNPNRqbYaFPyEVKuicqAhwEWhXTY6zXgKywwmCboDci2r5v4E61WxQZZj7irJnSqYGRjEE4UA1k7QTAUneNAkF",
  "key6": "4hiELi8TBdG5S89gXPPWTBHN35x4avV7Yd5Dp1voLsTM6uDyHpnBUiNSiQ3RoxGEeiN2MD9H8E5CDWHNvvbAowgA",
  "key7": "4G7driHf49aS7qaatR7DJGRLimmtP4nWHL9bPGtHG9rcSxMuGzqC2qnsprMowxi2r63QLQVQmxrXdikjJq2REtmH",
  "key8": "3YBuaYJ7ZJau3yQMBxmCmWGVBTmpYrDCchQwCMqanZ6NkiNX1py9QCJDzRMuZmT3FJtFocesvjJkgtwDAVxFLPap",
  "key9": "2qxhKcxJgwrEQ5JfQgu32U5yVpQLEbPx8e7mQLvQijAaFVdpLQTx6dd378iWAzqqUMQjHhqfgtVCei4DDJgRdY1Y",
  "key10": "4DZ94NfwDvzGD2wUqe8fkcdYPSgm4XvE45SijMXSmusckHn4NKtaKabdjeisUfDiWVnoVH58ia2b1NDBZ9yTbxpp",
  "key11": "5oHdFcQqGKz6L1iuktiazLmmTHPwvqZPpuzQJ5q7DWLvjpCwKPx9Ui6DXzt6unTzTpesJ7WJiBt4sxYzUWNojFxs",
  "key12": "3prVxY51dxWvL3vp9o4zbE8MpZ9BEeajTAmFvvWrtwm6nASVsU5jSLXiTNCcRmDSkT5cCc4trV9cKX5ku5LfPmMe",
  "key13": "44Piku7kkAixMxc4Kr3vg41Ewt4yQtA9FbAMknaKVM7UEJXwUAXrZLc2wfbfhE6H4qThBJQUv1KdaULsZfNHdrD1",
  "key14": "3Q5fyjxZCfsiXmFQ4hmiBUv7p8UpbrN5nn9pWyf6LdcFcVmNx3gucWjV4t5PdjMruwpnMKhPEAMDxdNggxp1VX1o",
  "key15": "7NYCLxRF4ZWmyi1XXyNfDBgxAR3oWLc7bV7ZmUKFYAUQZg7JbfDxR53QyvdjdbzrJYKZ3xkJ2Qa3GTfFQpR2qu5",
  "key16": "2m3as31LPd4LfErrov3zbtsPRS2n7txBLvpSyche9RvT9Prq2d2jkpcpYUMqP4mKzeGAtqfj5H8dAFrMYboBcaDv",
  "key17": "2dctjTGfKe14utr14SVwrEcnJV43ZbWGaTpXNnCaYAJ3WWmHwEdgccvaTwNZSgDzSJhiCYe8TrqBTmvMzqUWCH3F",
  "key18": "2zMfEkkhieB7fpZ3reqci8aV2nYpLCRTnu7EU9MPRt8vSpiB1CF1zPVswqEBh3qfNUkNopvFkBhaQ9ge8HSqAbDh",
  "key19": "1f9tTnouCmdxkVPGPAjXLX58sFnvEQQHV3y4ck4LrpgXM1d6sRqer5Z7JmvHMVLWYzkybo2D3e22jGFMmXZcwp8",
  "key20": "3BBxNb9GeM3LvXCqrd77djjJVSe1yYfPgZQLu7cw1rCS1RTztjhFyJkUtsMQkvQTEBN1sW9pgRqhLESBvqWYSZow",
  "key21": "4KKWBKN64ecDSnV2yz3kDDQybSgMZqn4bM8rSs2FqLeFMXhLpswEM29pMFd3FFop5V9HBk53AG5XSxsSNeKZttbL",
  "key22": "2642HgwBTwXZqVLNLfqNM1Bfdw4686usjTpe7xLKk4PLTWEb7LeY94oekTVsEEYvgj5xNeBGKZhTjWFX2xxGTS9d",
  "key23": "97ZcbDFsKBfCD3kMhQAwuG5odpF1uHFPuMiZzDJ94oaSn6ubiL6VuNjBpUKrDhXKE2LgesfaERk7qevzkkpYrRs",
  "key24": "WdsHr4s5S35SKkhDc79AXQL6fNCR2guUtFBeMgNCAHsSyakkc7W3YmuZKZsQmhHSYs1CckfLAwf46Ys6tvfc3fP",
  "key25": "4R24GwVxz8ozzCXKo5UQXnCmuY8QDVCGrDg1kiRwRCbYxcuQGDyHQcpniqwBk9Wmx3bLEzhb8Rfrqe6jbu1XpJfm",
  "key26": "BouonQWxtmPV5MGux6wgyS5Z1B9oCE1AmkW29BNSncn7MjFkRkWLe1KBH5fWAFeXrCb29psPrGgST2sQWwDHmRc",
  "key27": "5wXiRx3YMWZXyZviPuRQhSYMKjspdq2BNnmYFYroe8aL4wg5KcmLf8b4fvHHBQHT9nRv8hT4ZcLBzbeTVawp8H9d",
  "key28": "UBD6ktVeys5YrZCsT6WW4FnJsF3LLrGPw4f5nVNVVURBrb51cXNxcGauMPvSVkTT4uT9ZrrZjiFKRQXjzRXA9ND",
  "key29": "4Q9rEDb2bLeorqLtvmxeVzEknZFCn2SMqVyvMDkDN4WXz6JRvsMWWbFA2akXuen5NRjP3AvCmFxt3Zt22HC8vn2v",
  "key30": "5cYpGJHrQ5S9X3hTEvn5GFhiomEkWRicWhqcukc99MwT29EzSw1SMo2jTSThchGyuQdxSqG2oPXVPDvzXypciozz",
  "key31": "3BsvG4UUJctd64UNyHQorQzf2qGeMLVndZrFaxSdF2Q6pajHZMDvsVHWkdPw5LhTExPW1QSLRL6b5rJshYeYHBZ8",
  "key32": "5iv45BqbCgVxznZgHR5DUK5TGgBq5PPawTyTMDbvUPkgMrZrE2qm8yanKB3uapKAhFB5PseP9Bxm3ioABVNh8am4",
  "key33": "2TfDxiD1XaWU3WDth9JiZxKx9tPS3eB83WynsmVk6yDb5rFPawQ65H9AvpsncsiDnTAhbrgo1FSxrESjvPzdnmv9",
  "key34": "KhfxiqtAv4mRRCFAKKofAAQqXKxYzJn5ymLP9z7c8164kQsFbX1Gp1dFrDp6oFU5pRN9Yb9YqTaBDWiahY6uW15",
  "key35": "4bMd9WUgeXrLbfmT4hBNrF5XkW4V1r3nDdHaei5X3HBVRYzTTmJm928yPqJM5wNqCokPa7UMgYNqXgBXtvZU662Z",
  "key36": "zG6LcCfxndNYrqCnHvKbUSu8MitdBVztm385DHnDexuxyTmVZhNJGThJyfsSGYWXWk4BTcjF3nFyZ8VVCNvdttE",
  "key37": "7za55Tf5jkkLb7D1zGMFE6WwnjbXcjSqUqzoAw6hLjosumRf5yX87NbWURCfz89q2KCerfFb4BTsVj5vgbnAeuB",
  "key38": "4SArdLUdjateETTt42nVjYXoXKPDPhghi6itvP6n2UwJVYPog1RhdowsxBTVikFKs8wTmsPyLHYRtNUFZRrMTifF",
  "key39": "4p61DDmT7fm1FqgVXVC7R8BtBjMm8aQ6RnSiVarw3VNCKqtCtTWQcd2GCbW5q126j9s3W2ngNrrUETqtvrZEX1Us",
  "key40": "nDACtjpfrQ7WdjdT4jAtkaj1sUi5NYnreUFJJJg6Y3RxCFY3uuvqSY6bJqt5AgtvNDcDGLjfRMhAL6PMiJkFNhh",
  "key41": "4oDtMcCnBar1ZwRdkGRgwUqD8QXcJ6N6LjXJQd1pD16mJH2jRho3UJkfdXzBPspn7eJfTGrEqveWNkVpWfr9VnMA",
  "key42": "2gus2g5zGGMvAEsotc5kjWGZhcxqKNmoNFtPR1HmeNo6kgBZ5QTHw78Rc353ySPMKxRhxJbJyUvGjgnpLQUyJX83",
  "key43": "9MKaALqTVnCReenVVqJegh1hWodVb9Cgbu96edrv1bvYePmVYSrZXijqMkZhBRT4kG66BRaok3jXvMzA9ebiiEz"
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
