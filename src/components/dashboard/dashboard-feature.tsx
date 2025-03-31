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
    "4Cj99ngKCsgKMfcH88RQHGo833eshuVggibtewxV4WgPNBHL9d2jfdQm3sayi4nV1R63f1rD2ymTpZVqz6jx7xW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LxthEQiP2efRojVHK1Aqxj4eNq4Fsf6vSh7M5SMMo2bCEBEtmk7mHtLHqzVLvczLsig41mAxJYCDp5z2ybcnFzL",
  "key1": "3vDdjVRtkzo6Lv6JFPKG37U7zgpfgNurXtFZNzbjj71q8vKG3Wgb4koaanyT39aK4W4Q7NttxkaDPXYRxec1h6GX",
  "key2": "k7h1rKKknZqyW85bhLKpj4yPJtyrsCJTb68XxLZdJuHtYFC1U4Kjj3yw48JHb4cp8NLnT4izoaqdHJuySQF9zH9",
  "key3": "5f6dyCB3o8GPsMKjWatEaDHve5iyvNUp4v8GgHgCwgY11AxV39mraBR2U8YYXS67MLF6HDQ8C1BKZarmXzoeMbcr",
  "key4": "2xqj4adAxyzUpoYNqpk7gEbWXXTU9E3zY5MqwRKwJviidgbFJdt6oNqWThuNJSAnEh6Y1AuSx7ymLwseN6CZfVqb",
  "key5": "3XfsPDGwdWPVgB41FPzg6to3SrXdcXAJ8KFGZE47ugYt9B8RK6iUrDxxZR4opCFhR3p5hPHzyMwMnF1p1CkZCxA",
  "key6": "5PM3SYyo85aMzk21kBZRPc47WTNfvzSn6gChHM7rceBfXU848Dv2qx3GRwCtgTw73tDAbF9NiWjAYnvMSuhTfGqB",
  "key7": "4UBzCWtnrTQnqWX3RnL65hoKuLSe9BJftN6aWprSH19avXMoG4Ekm6WJMjdE7dftqcpyE1VaruBdTk2UcxsBhHPA",
  "key8": "4WzdPdA7M4N7CxrNUEDSkoP2XCKfMT6YshQ6rFD58qR3BH3sEpWSaULKEAp1gd86gSkaptHs6MKrwdJTJ1BMK4aF",
  "key9": "3oB51KTb7QVd3qyjj7BtfbsdmuJSx1zr6YarcgHQAzHhy8aPc3V9PsMh5ocELYTbPHkHskWSRM3gEGoedKZFtXuU",
  "key10": "47EK6tUkQFUWZQCKUYAGQGVjTEphwVLkBiJrdAuGbpbdetjcQq3pbDgcLFUJJ2ydBp97tmmaxnUeN4Sy9aBMU3JG",
  "key11": "2DDPP3w52fBXRq4D9LWwgjmSBbBnd8cE46eczZB2TJWna4yEMqk16pPEvNTiPC8ZWTwQbsnf4DNbaHD6PqsYwJRx",
  "key12": "3z8fuwaPAYvTArZnEM78T8MoFCneCQkALAmHqy1qx6w2xGUtUQ9F97kdSuBKEzQQZDT9GvNUJXReLMiKHZpC3vaq",
  "key13": "4RoYXbuDYP4VxWt6FTE9vwoV9q8m5oMCRyRzDFRMfkJhRmSFPoa3swz5cya2cehvCUfY4Fvf5ALRNQzh6tgCQrT3",
  "key14": "5sxWxRHbMnH9W1qsGpZn1KYXmTZ1BXWguTw2XEoCHb3KE65BB5p8ZLpcsrS1tcsyKnTw6aWAHgC3Zws4TKwYsetY",
  "key15": "5EH2FgfhWq9HyWRiUohGcBo6PAw2SttudRy2fsnnmcJPKZZcmURyBSnxHEtzoFf48HYJD9Dpi2RoXCZ5237pms7U",
  "key16": "KyeuzWdBG1yZgvwh8HreEacXH2UNU41youoQKcG9XY3snHk7iucQDZHTKFC8NwbGHAHtJaEhV789fzyxK1bgGuC",
  "key17": "51KuUttWaYmqF8BeLCdzHcUk4K4yzJ3DCcGRn2e93tviCVBiMRJ12ufFkXC5D7frGc8Ruq8q84PEEhY2hsUUxy1V",
  "key18": "2FimKaSzjBM6tahfLrnPWwx4M64xmiNiUA96AmKkadFLmEi8R4kjVPez29Rg7TyzeQujPWqA8DWKMsRBDUBEKXnG",
  "key19": "59M22Q22ZMUSvKnMjY5KT3jnQGbL5HEdZ5aygB2Q9mFDVTrfaoWpNpAgXHu1LWZV1to1392TfvVmAtXKWc7SqKCM",
  "key20": "emS7JRyZrEsXHMsSqxC6ZzrHCRKdbBtp4AgDExsTBQkhtZqy3juHc6Wqedp6YBTr7K2GV3tPn4zqqKhYqyeZ3Jm",
  "key21": "49jKYm6Ae3aXArPnFt3nGtKDtxB2XGkikkJ1q7fqRkKUYkkvqDDkSfnm7jRb8X9F97wBeRNLPxqk1zKycL4ru58t",
  "key22": "5gdDpVcA8BWKikzSuFJDzHwoBWC7pp6jaEebxjK2WuBn5czRgE7G8ypMiquvTmPL6KcNYhfGGzt17T19zoxsdCBh",
  "key23": "bdJMg2q7Jk9nxsi7XtjBdDCcrdj4vgvviDxXLdeL95edG3vmXBVdGTvkbUKXhyfiqg7fMtw6piqhMX9pgxm92cx",
  "key24": "3NbbMHkB4VQDVwf3RAmdif3tfZdwp5RheLd1HFiQ3eiPaQCjwWNoo6TVdMWSUHbHYWXCBhwqrL9PieA8j4g1Xb6Z",
  "key25": "i7vaSpSPhEJABsfHVH9qENxDW7m9PrstJGR5sYmR5xURJyRpy1xs4Bep6vwGAwPteaHnqGVsvLK5tyV2dNQXuqX",
  "key26": "4U4FeKvwzWSNfqu9Ts62MDCpMjrAUGmA1RtaWskb3JmRmGrWgjt6kZjYpnJHGu31ECnmGVpsBvVoDhY9zjjyzcFn",
  "key27": "49wgH7Ern42nk154aHHVdTQHuv89c7N7UBnaxaM325eQXtecFgA8ro1GJXmjvGS5k6QtyhBd3MJ2hTzbodUocFJk",
  "key28": "58PcME81zAQDgRpDk1QFSHJ8bDfqTihgLtHk1C4xjWS56vyUkgcMWEVuv6tTBKgy2cebMpZ6qjDiiXBcbxuXjKNE",
  "key29": "3ZBziKfEK6RFEZAJ94x79jtnUc2EXgBfQGmucnjbMFiCoLJtNzBmxJFJV217SaDbUceYNmvn2pw1CjGncHRLqQCG",
  "key30": "59b681bcmztaFmBQGYYyApYnHydPLRa98ifLqJJGKyf4u5dReMivCkJHcsNCrhczkM5WBSjSSCFMXvCFSy8roecA",
  "key31": "3TbVh3U9dzNQUjKYXMDj4DhCsbf7rzzhW1PnGNBSAxUZQ4Tu1y1T9ij865jdeUvCmpjATXPP6fnHEEa47d7VSsPg",
  "key32": "3x7qHHPNvWinwrh24V2NLiyA3ayeHTpUctj4SUDy4ReVmfjr8mdeqcPrGycSLfg8iPWJ19u6hQqieuBnTqNfudCh",
  "key33": "48KnGcBmkr4Fxd5rCwr6uPxDtdnui4vi9Jsyzx2NbiP8244BvB1cakVjfkSwUxfh6iy1Ts5VfYZzA4pUdCunAG1V",
  "key34": "3TBFHnWhk6igPX1ms5swV4aqFapQpVJkXDgGB49ukefH8GaMaMbaqWgmrY1e9MNXn5gMBvGSBzEh42NhFNqTCRos",
  "key35": "5f21hq3n91rLzosG6ppr8XdW6WWUfunhqQMSMMdiBBeRCq6DVB1BHvxRfbNecdw8Q4zNkb57a1BTFq9vVi3hBSpP",
  "key36": "2vsKyppvbmLExZjkqBKz5zXn6jEwQyuRBicN9tUkZ1ZBh3m2caoXQywKheHPMAunzr3RC8WWRDi7dY8VnJGzzyZM",
  "key37": "3GvpEGSPgVgeTjXRSYzWeytYNwYcwfZ59Lq9FdQzuhBQZvb8HCZ5aq4nXss7ys1iEsuYNdjUi3iJ9DeLMX4PrYrb",
  "key38": "vj8RgkCw17WyBdZ7tgyBpt9PfDhnbu8rVrEfoCMueDZAXaX3g1nk3QHyjobutLVmHKdPMDUmDUL2dZsYN45ybQH",
  "key39": "5RezPfpc8NkYCrs2bjtMLVom1guqPZm7KS7eqGrerPJHKPCNt11GptK9QjTPaTFRNTyKcZ7oX6YVcoqeLuszu5jw",
  "key40": "5KLLkZw9sAF3N1fYDhnnSo1Qdt6kpw4QQBPbSpULQsbai8t6kHj9KYFUfXxkegD56c3QubMeTh1CZAGcWL8upz9y",
  "key41": "5VYVoRu7WdXd8Uej8pZ4KFU93zMt8S2QE7WtumPwZk5CHkTkGneyzCDyEWiUTQa99Liv4Y9G2ScAyx2x4VhKpZ3K"
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
