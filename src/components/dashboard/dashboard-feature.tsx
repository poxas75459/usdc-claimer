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
    "gMkMDpqWXVpigSCCjvTcYTbRXpnfoPXUjT27Q8h5RHpquGwAzSaZ4HctBcPpKW3Bt6zLREGoiP1oZFkNBnYWiVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nvh6TvRMmtgeko5ZRSPK658w3HcxJ4wttgpjmU45T1JW7AtgQcfMppdH2JecZhifsBXHhNYFJ8E31RYioy5Udet",
  "key1": "5o5B3gaM81WEL7AhRtEEM8xLpv5e3zXsPJ5UPqwattoi87AZunt76zY8zr9AEPZAvbkYxee2Ya6JnNqomAV29NYD",
  "key2": "35BBYB19bBdY3cn1c4WVgF6E3tuYsjxvfhpQjEKLEfPQ5r8DyChJwwjcZ6LDffMDqBn9YaMYCMKPmVLCUfvrB9RB",
  "key3": "2o28FqkZfgjNWLwvsXRafxY8opos8YyStNnjAq6kcbyuBDNbsJ8kTPojA5X6izUjf9TirjYUS3TJ6E1EUr8Y74DS",
  "key4": "5TFrgxHk7vBSqoG7U8TedeGMf57FeAm5NcBFLW9N5f5aZjWpvpoReoWeSKskCq2RStZQ7PhnNx3CotNEGKqGrPh5",
  "key5": "4N8txnwiPrNrxePjKyaKc8bhQMCR4MqtUPFZMZRDn5Lfsn4RVD8AtLmZnHUVH8doZFB91jNq61E6zopBx2yR6UiB",
  "key6": "3qen4pnAHPNguSrT1pgw99rRtzkMP7eYvVvzERwtWN8i3kqiKiXarWQe41PWh35PkXVXhTprEzrPCERg1au8Ca19",
  "key7": "wFEjrsSZRUPhuudvqLDq9deZR1VQYHWMcHo4UPNrpngnHrXmLbPuJYbeZoBN5VKg4m8putXt2R3uocKQtBraTmc",
  "key8": "2Wv6mSvaxJk6joBRMYqEGJRr6Nv76JgsFMagPjYcVqDhu5mZLmA9EZpsvySmFRuSDTfrBrStPFuydTWGse4TDifE",
  "key9": "sxm6C7wvcYkpoyfWv4osTmkGoAuzi5G8h9VLnTNEs2d9WET4h3ggbjR7NWXVRMdbL4UUgXy4GgjCdPhwb2wr5MY",
  "key10": "28YagP3BaFwUei3Cy2NYUvcLdjJsy1j7odVzjtrQyZDt9kGCgU9cSLRLgPiQeLvgU1FmWLKxs73g8HKoB7uHbC8V",
  "key11": "2HbemT4TT9xQc5no5LHGKZhRVkX1UPc9ki1y8P3jfgQMihvdsHRRoUqPb6hhEJqVkMNd6uDoGJXpWYYbP6XFymqe",
  "key12": "3CGNKS4qkzkoK43jNHwPXedNaEwhkNBdKKwTsx2rag387z9fwYzqfEkVo9HyCBmBr34Lr5P28dg1SGXzyk1YVdQe",
  "key13": "3fBjtJroKHj3mXnG4kDLRbbMKdgAo62weEeWEuuQVAeYGP2HxXxW3ACf9fbymRtEDatmFy9nGoVtiax4H4REv3vM",
  "key14": "3q8xcmUHopUUQWjxrXQCVoKqXBNdMyGugFmjFesgTgqcrokTFRnPgHWNBpGdoJ9x3mknXJmKTmDWFTgUcK11WhGv",
  "key15": "1wJBnrnCHrLzDRnATYZG2uCEuUtnd8m35i9zGAJqVnpEMUSnxXbRPfStvBoy8kbLXchfXHeDCS5VU1bwe9e4Jwa",
  "key16": "5PM1cwN2yxuFNvduJ4RLAd1TnWYJvy1ku6vFHq73UJTQSDUdLNQo9iP6SV4FfXquAvfziwCmN1QA4n3PqfTkve7b",
  "key17": "5pwhszd5NzLSxaVNdNFtQMphoQLkA3Tk4Yz7eVPfvEKcgnuJVV7cx1G6xxtBudx6o7c4SdyAyDnZtoF9HshQxSMF",
  "key18": "4P2C9MmEjH5C1zpJafmEQJsC6wicMKwUs6PY6sx9r49mDjCsYUBiEkrMPWfyzTegB63BZDhbNcNRvNriiRcFhkbw",
  "key19": "61YxJ9bgpqesH2j6DrN4zoH6oA2LXBQqCdkzaqXES3NFEkcj89rKjUmwfBXxKjdB3X6CLrwbaPtAaJw6joiErdXk",
  "key20": "37KreYAJbD3iiGh231asKnof4ZHud87kBQCCmTHmPDcKgu6SkpJx7stvKSVXbnQkj232XoFeAnNvQp9xVZ8GEzVu",
  "key21": "2agw8MbaRaSouRV69BJneZ8o7gzTsmgdNYrKvv2XXN8c4hrg5ecooKLpzEWTbDa5LFfop39rZcfPM2DgS9yPsLYa",
  "key22": "4j7YGSusKqu75FgFYJ384upyatudw5qGaAPLV22JjTo86EhCb9CHKZ9ACPEr39UA45A1gqRPVJgJ4jnu7vZ7EfQZ",
  "key23": "4bxnfSFGjhKrX4vpzgBMwSc6sxChrQbDiwZcminXwDsTgRv6DLMukQCwvKFVVDyDa23SrMyRQA3Hbi5inQjpDvWL",
  "key24": "66bt4hThNbAT8ziyptmqXyfU2zgavfR1BHPCTfJLVt1yeqcKrHSX2aTbJcZSjNAn3drBaEt2ZCuhnQh1qnWB85Jh",
  "key25": "41XKvjF4RqYgKcbrVnTpiN1bvaFp85EGn9uzoW5DJ5jLw7aHGn7mcEGiBrmrs78Uzwm7svHQ4WDpj88ebbKHUH53",
  "key26": "2XSLrFjCH3pVSAgsZCrNvQU3CPw5eYJEQM5Cq3RfzuWMVh5TG9FqrfwARVEK1VoaBaXsZFDcct25WRJbSJuFAjy1",
  "key27": "64yKpvaMryBfcZfEEp25q8MFSmMh6r56xznAk1Hnqew3x95SY5aM9jiRSc88odni4k87kMQw5fGobYpyUKMsf4uW",
  "key28": "5vonFUZ2mVKw2F3xxkfm74FJ6kLZ6pZr8uoyjgyDVKFKgQwKZeDhkzsRLpRRptt3yMAodqfCzVTp1uFLN7cTTfgz",
  "key29": "46XVMFpLW9ipJj6eJa1gBS1SgLn2cwH8Dpi3NKAzNEVQbRA5CnMYbUnHV6JNzXjnvTk1RFNPFhCArPTE9a3vjNcA",
  "key30": "5CGZmp3FVUioZY1KbqM9Jx2qQgKf5pmicvHtLFEtnPs9MfcZCcXZgZZsvsnn9qJX2LthYvg8EUYQLxKM2UCRvciP",
  "key31": "4ig92RBcj2Gj7UraDyarFViPk7TqTFKSKNfT51MjQpzXeTZCiUC3WjXcUxUfhEM2oHpbjo7LJ47v16TNiyyCMKZK",
  "key32": "45V63m4yk9b9s8zUSShgJcqEe6HWXUSQRKrW6P5P7R3bXbfeytYRqsd5zFkAP5wEvtTHCvZhmeWovw2pTuBrQKq",
  "key33": "4t8eHqq9gDv2xEWfBVx4RgBBb4UW99pby745gpW8JgMvKPyAVynfmrU243p3vBEgLttrXhG3jqtrgWewYxEVyvfh",
  "key34": "5EV3s3W695HcTjavSQUZbwRkD6npT9LvHGWTf3weznVxNVnq6UHhuYDhnvQSXJYrDBMkXeqL1XKdGocrXkEmCN1J",
  "key35": "4mGV886eArc4Qr3r7xbCKwkA3ZLUB8Vwz1WHVtSE8ZANYaUyRMYbGAKK7tvmnexXNnYVy3wT62vbL39ySN6dbGEq",
  "key36": "4WjPYKrMn2xbwwpVjge2dHaAbTyLqvJCCDuC5xyDnMnE4XJmuS7E4J7pHzSEJPkVPmwM6T7zWorcubvhHMQEVt4h",
  "key37": "5mJNPDPx8KnkA7ZrN5Mwn1tRJu7XC9Wh2pR1tnbBW6KPWLwUqQCdoAvqHQFPi5K25QMKR1Gm94JsDBhLVqqHctJ7",
  "key38": "2Y7kW934GsfwyWwsKvu8K8cdD9aD3uQ2Pww3i13iNUyYNZNJ1qynH7aoXN74USFQL5fYQQgyHNVyvzkfSTwdjUUj",
  "key39": "4JuVRR162KqoUE8uue7PDgiAf9cBRihna5R6HL5zvv6KBX6Lofzy1smLapFFqm4Wr2r8LCwxgxg6jqUtpx2kFyEA",
  "key40": "4HHWWyoGnqJ185N7rL8fCcNNZjUgemw6MyA2KuY3UXxh14jYxebzUYqQvbBpgYTB6CDoDnrhwkofYMJ8w2P5q6aJ",
  "key41": "4HtJsSDCtEWQejv7yGv3uHPyGxAu2j3wmyjRPHUSiJ8aMytgJ26hnmeTjS6xTET6yvsWajHniFVVaVkLmQPUMV8r",
  "key42": "Y8V3pxrqL4BUh5BRryy4tY8XuuWWmTcGJyJCXf6F6eZwKXJwjB71SQGF5grAZ5TkCWkZ8ovmMohzcS4MbPH5pJa",
  "key43": "4AY1NGLKyeuJXFn9PWWWC9ZVN5kMcP5iuE51Q6nG6Dj7s9rhoVe2eps6qWrhZDcnfZreGaPLU26U3dSXWZ7aYT2s",
  "key44": "4w8LSr4vmwe4VnXSWkURF7VfAAuEYkEVDqfuYWiDQWL9ProgMiyVgEUJMCFVN6MFRvvLuQqz7tuAdvsbSfPyCFhd",
  "key45": "125WUMA3fe2CGzytYPkfyXFmTcEuwwyFVHkAesDV93h684jUtT2fSRPvGa4va4iE5AZe1ifjsJzcCfmcDvJLCp47",
  "key46": "RXpJfZRJtWRNnYenPYNaMAU3RyhGsL8W5e8iCtmK6LVBZQkLUoe4hQXP12rdyQWh15y1rN3cLJXjHMmbfvoJjnb",
  "key47": "2uqr2eDDwpbhhwtLiS86WdXeJG8kF9A9qhYwV3AWYqcRfPzjsBm6JaFbZURJuPmnxqqMMvt2SvSqAFVCrH9smBt8",
  "key48": "YUHUbuXvtgcmgqDroNjBug33gy5u2FJ36jBGTSuN3wHCTmCpnjAtCTmdr2KcaGiwsA8Xugapk25Atufy36PD5g8"
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
