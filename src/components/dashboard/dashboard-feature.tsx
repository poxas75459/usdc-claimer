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
    "A9dsw9fdRT9SEq3MFy43vVDhhkjNGpUZCSxZDrF3UR8KhEdPGkV2EN5zZQkuoAJ4mCF4rP4Qj8X61tC6hdT88xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465W8fgiBDmepHuXS24SvELsiUqLC3PrFpoPar5vv4mca65FYJ5aiGB9jnTGPF619jrG7svsDeFfce1YnfpDzHoW",
  "key1": "2UCKUuh5dPuN543SbKfs7fAPsHEqyVHkf48MphKhRJ7TnMQVayYUCE8hgd4Q9GmejjLgiWR4qi9FsRw99u8rjbVP",
  "key2": "5M9a4N71kmDBjvVCh6Jy21VyyUfexj4oh1LcxwyYhw7h6eQM9LdF4FyzfveUkXaRK5e9X6UdPuDUe1hViFqBHU1i",
  "key3": "4QLHQak4noL1HL37GgnszH38QKqQXdYc9deWWj2fj6ion6bLTmtTKDwbeSMvNUh9XNbPfYnGxF1oXCDpLTmTFN63",
  "key4": "4Taw4B39P39VUMDSuGEHUYkvZzz3CGb6uRCFCVS9V24iotmZNWyGeThcFYo1MAWnXDZbhyNrXFs5jmvkRKMfERGG",
  "key5": "Grzcy1cdbAF5Ap6sQdkEW7AaftJqbCCbLWc8LTkVq9K2scuc3dBcjHAi2Bf2ocvKKLJPHN2SG7GesvuNQgnjtZ9",
  "key6": "5ehJwmATTDBLoLku5A7AytjaZy59n3emCb2p9d7oPmwqJNb23SrCJ1c1CfpAQhNjMqR3wdfxtghfKSs5pjjZ8uvd",
  "key7": "bf3CjaVwKX5shADZoUci5FBpqfCKohGkoU3WyE2Z9ZXcZrfZzdWVKtVqbTLLXCGw5XepnvMKtAUh4SLhXVizbE4",
  "key8": "2GGCeXbEisATEHUawgqY24nMcM1ehmNPeLPW6mQtwotUo8dkKNHazNUtvtoANu2RG5KXXi9R7srF4nPzZZTQpagS",
  "key9": "49n6wYmaxZ64CqpGp8DP8sTNtHRzjSK6vcpcNZ8wQLbf7oD8A8zsz2VPUkXPmfryHroLY7GK9aK1tJoTd2Z57vDc",
  "key10": "65EQTBBF2Le785AXrFNwBDbR3rDguQ5CEVgkTzj6pdhyuCjtohjXi9VTWeub7c3RApKdT2HFbVUS4HwMCTGBtfFP",
  "key11": "JVCGKzsLMFWqRg6kCCZzAeAkfFRK8eY4iTMsdycsk2iMPEpJHSCFGmwZTbaWvXnmV4zfQ8MjcZjjdARmFDKrSZv",
  "key12": "76B56xyhRwcmVDBaaYh4oeNJcqRRRgPg45nWrcAa9KC7gAkKqeTUnTLVjf9gQ9N524rc6W5g1ggWR7D9JNhwgQT",
  "key13": "3ZdxhHyoZUsdpwYwR8gVgCoBMggnxUg72VCDqFMABsk5zC4pjsisDKxgHgdnsp4GhTHSQLRq7bzxn2ZUn7VPiajF",
  "key14": "3Ka3nVZ9b31Vp1eVA8fmFnQvDuNZ9DEueLjySCFtEy7KjBy1NyjZzg1BfFY4SRWrPqN5dbYFaUY38XGXgWwoQZ97",
  "key15": "5fwHcZdgTSeJK49gwnkvpZL6SPjwsYsE6iGhjzZehorpKAbhL9673Rq6zwjg4V4B4uUW9mNFaKUv58hf9wARdK7a",
  "key16": "22fXBtzPdWaENc5JjRhoj3GYPeGZW3apuLe2UTa3ZAgeabkMPr2MgPgwYacyCpFfrKgLv9GFoqLnkgSerksSV9Lx",
  "key17": "2XrPdTCjYAioM3LqWSR8yd7Qfq95qqxYgR3i5FETbhsZzh6hyk4sP9ySfZ2ARAikorHYd1arGBd8cWy1uaEgEp1Q",
  "key18": "5R66FEuoc78nipkyweNatQqekYQg14uXQFyrFuZgGatLDKJ4gnCo1tauEjMdaCbwNXEFE88wH76gVam2thGwwHLD",
  "key19": "ZrbTYSFAXY57fuV8XQvvryapJcAocrt7ordyCNuz8RrwrZdSCZmDCb8b3fRmGHDtPgqDC4nm42KeQaM8rFfMsXu",
  "key20": "4jkhg7EEdLrmGNdX3zFRb1MLvoWGGGfBLGc6crbtwvwTsjHks3gVXDeSjkDkRRpviQPW9kuQLsZVKJUzuQ8Tq5Q6",
  "key21": "4vnhKxhJcHDH8jn8Go5wg4pEfsEg9wkgTL6zTnU8zBpPxZKZ2yZRVfifUhwrZRZbuouY5DK7UkmFJibyFd9sCFbt",
  "key22": "4YgLbDs5PxTNrjynX9f3LwaQVH3UNcbCsrTtQXRR8W59G7KH9PRMvw5t61jBFgY3HTxHY13oiVkJY7G6LWHcBAWL",
  "key23": "5jgd95qQHpQeSsCtsoBPVyuvsXrMU2RDSTkoUypzjW1fGW4qyJBPvUsMZakQb4JarPps96X4aNeJTMBJW7Pvx94Q",
  "key24": "27UGpJJgpAseguFHDbG7rJ6TepFDeoJPgvqvACJtCNdBuFMp3HDUbieBXMq4zCo1Nvo9YCm9WZ9u2Qu97YXhPrR9",
  "key25": "2vJNTDPFxj2FtVA585DunECYQRiEvKjk1c66zCCSM3EZPW6V8tu4qRFda3XHTY8xp7yWjujpzdUzQwZpKNb9yxNQ",
  "key26": "5NfzNaNq5NcGQD3o2Gberrd4o9TioForUJ4FgQdCrUtqaXj5stZgJwh7UPJdAyoqEKawk7WkS23fBuHVm7oj59sE",
  "key27": "4TkV11zC3tqhcKMD3SkNkmcZiJkmZApnz9pkmoHTBZWtiDAYRbx2KdXps9vtjKWXwmk34qz7wGtj3QGtGfKwgW4L",
  "key28": "42GENoYr2rZV6oCBZzj4NfQSsSXBLX1Ynug5ZAbhZ1TR4b5qTbT6bB7tBTHoRBsDfRfZwecL6ASG1GLmbhJUHGGc",
  "key29": "2uLxZs1nE4ZEhGErcPcuGTK4amxSAxTamSvaRnXvtwHVxa77yAShw68gHpuJZKGbzDagTLRQiGZ9Uybe1hHXXjCc",
  "key30": "62xS1ggHsaMLVk5ty9Z3gxyaMs2rQbsUKvBBDKY5B4zWPLXt2ZFubM4YSRNVuAEpMYZ6C1VAo2noF5nh6o8o2Jxm",
  "key31": "5UXcis5XG9GfhvT72t3wFUqub2jxBCLiTKpjR8XaV53g2Vpkmw73d8sg1fYpW47skpfa84ZPL1YKwafLJSFTnPZa",
  "key32": "2vvCR67JBjoEZaWMoVVuJ4HxjFKL7ygC9JgQvdYfa1GoRoxmh4A3Db6GhvT11yYgHkMUGmqvUdjEaNqSPwWaRYrv",
  "key33": "3VQWMo67LC8f9Pjh2yEE7QuUZttcovGSgxHhrZ7akYayeTzVSgrgbG8ZrTRrnHsSUJxHCMiTTYXWymDhRgY9iguG",
  "key34": "GAwH6UB8BnpTvDm1AYw7SHCs3EVLC7c4uxxPQt2FNbfWya7BQ7CKbkyonuhFebngru6AerSDsSHi2DTeFx9s8dw",
  "key35": "3azwRgUzY5oJ3tQvVSVuavepUdp3aqCNr9ANHJDNaVXqjDbEnJ845AtASeunfY99Mv6N6kByaWjfTe7TuNeshdLG",
  "key36": "3Js9A51zEBUaLXSPpBan4tJ36hfsnLowbMnWJHgJizaSb5tamcRgJWchz89QWfTM1cccBEkmqUsQg7Fh6KmPMo7e",
  "key37": "umnEScyjRp8SnW1emsEYNT8QbtTKScyNvZMC2Ww8dAUBkPyMvsuuk8KijN7qZVxSn4osNSmxnekEm4GMtsZZYQV",
  "key38": "tssQTeMaUqTgVewq1SWu55iPVD3yjXaHjB3kaZHiEZhSLtNKtm9U3WW7JraDFB9PycAn8LmBRUFmFHTkNnuDMnB",
  "key39": "py9Rh6LyPYKFQnBDzWrmN9gjP56XaVqpvxmfHgpZrXFJyGfVQ8MQ6c1rpeeHsn3Qftq2K7fQd612ijLEWb2A8iL",
  "key40": "3HKiA2s2TjatFuHd7aiFS8jA29buQ9EV2n8yHwDXataDu98feupt6WxBWmJFaDc8nFcywhr6shgBopiL2Dk8K4PR",
  "key41": "E5zNmjiqnL2jZ3ahqGW1qNHgZ69ooBvAWWKzcU5k7RAvG9emfFLxEyCAqFYr64EaEoEBo6zVb3yFvKgpWqMgv2p",
  "key42": "2fV4S3oJPmMQ5YYHg5MZ2ceNUTJsGpiLAc2gzqWUXvqs5GYSwA8r9MhahjdpCtWMRop1uKZXBNuxsQH4sAYhafLy",
  "key43": "5rfJLVtxsphucxAPEGeWDb8CGYHbcxawWKZPNf8vk72Tf2tspoPQAPLtK3aiZQq7JodGXerYbprntDZqx6q55kzm",
  "key44": "3RuBfo7iMAGBbtZHGmqLjt6Sptqg1kupVxVaSWof2zNEvjeQeZVRc9JrVoeYtnpW3m1UeJKLDxUFYvxzL2SD1RQV",
  "key45": "3HTZUh18KJfBb2ntoLtJHzi4ri8oZVtn89zybExUAKxm8Jcbe1DxfRZ44nDJx4yw2tZMPqMe3ipcVdi2vYoZULPn",
  "key46": "4HfZi7EhsRz2tUSCuC5HktUmosokL9wC9rSWWAaXeLepeECi3c5ELoUeT5uGZEoQ36fGtEWKpabNSVvT9Qko7en8",
  "key47": "4oLKm3EAnNDLGHNDQvhiRi9JyxiFYneCfdT3SArt9uSn44PrkkyjjUzgfCJg1QEewusbHgTTETaKazfUEgEgdggN",
  "key48": "4auN5nvZNDwVHC5mo4P53Y2fF1Kv8jCrBrai6MwEcTdhtGG9xe1eiCV2DXAcWjnphrrX7Jxqb5UYaShVZZbtMJH3"
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
