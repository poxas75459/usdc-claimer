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
    "2wc3H9Vx3b2U9rhDCovX6gqgcMwvr1W8bB2WcY2F1VnzKZYp4SqxheU7toUNp834uQCoCaaiNXjpEs8XiqmHdZcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nR48AhjppZPsB2MJe3Uvq5ngcc7XKky756bBwprKJeenCT5oSBNJtDXVoJxiHvahgQSayA6kc4jSzg7BKxWD1Ny",
  "key1": "5DQSeg7wsyBst4jyZZ2RFYaUdC1SRbGisvGeFPjUpwwebnMyybPnevrnDxUKp3rasjeWK8gFjYbP6HtwzCmhLHwN",
  "key2": "4HhCrmVsZg7PUaHH3vPrugwW2G54HxhSpbwfsKqz2ipsxtYVAgbGdLc5gUjFsgmi2JQzoWPu15t6K2ZqYR1zPbox",
  "key3": "2jX1acYFGNE9QR6KXkU8J17Wzut7u5sGLaQXP6x2Z2s8pfRB6L6veceYUjMJGktBAtVtU9teyY8xXS4jSG3ANgus",
  "key4": "2qGgR51bk98W8MtEJEtr7JGGNwCECiuAN3A32j19ayfbGNBbK6yGYkygHe5mkBHngWQ1ApX8XJ3Fu9TPnRvBhUcW",
  "key5": "4wHjfCdSR8UvAZoQ5J149xvJNHNVtK85Fp2uAzrfdfvbdzErt4tcDRq4HedHL3py7CvkL33M5zfinrgTo1CoCjk9",
  "key6": "3yzkJLzBeJ2791Y6A7kizGnNXAUyJENBpb3VJhXYL8cjhXwGtz13e7qdbZDBs2HjVFBbYY8LzY4LsXs8eL4zR6Dz",
  "key7": "4TFxETjFdga9WA6swPyYjGM7NK9f2nwmztQActcrW8FHphTq18JptWugwPp7n5b5MyTB93xS4Do6fxBgmqYTS3Cu",
  "key8": "3XsCScNTZQDdFAu4ofm7FLovszjYqyn7PwvgHn6ifDo1f6Wmifa3SmLQ8jozaFS5yn7fB9jjqew41ton21tqyvt5",
  "key9": "22Awt9jXuy5mnGJTE68Q977b6PkUifiumE8WPR1Cthk2kLELuW8fWEjbC6n1TUtYghkFYNh4qYv3CzFPkKaQCr7U",
  "key10": "3Stbxgi88GW4HgkS3Hn1mQYVxM5urg29wKSmkTQDiEigrmma7sTqqMkhzYSZEHKV2yuZjvouW48GNkJe5uvdrmdm",
  "key11": "5TMdpgG5mKZMDgTHb4WRnZDDjF9nJMsXjVtgshP8RqyBtJNRF4kAfsLHdPp7FUmBYUvYCsPwq8zmkm6rZEUQ9PwR",
  "key12": "24zzmJ3WcqLp5Y6Pohipj3kfrmUhFZD1UQ39fQsxoeVuiFcjQ7eQUeBYYcFKg5Yki6y5ZikwmCFKhbLWSAqqS13q",
  "key13": "5KWs4ydCniJnferNASfjebdkuG5rLVEnpXED8nWdbU4r3hJhRVk5yT4pUbGfqbYK9D1PSJsZpjMtsrcFYiZGWG2h",
  "key14": "2MxQj2pNpHcSTZsjkbuuErFDuA1LCpk28MezMejz7gmbNMijAq5TXSypZAXbZ5z25WNHgRJctf3XXoZD8ZfHMNXr",
  "key15": "5zAg924pqdozFbarXVeHbvZkobJhFnomrwGy28STqN44eWTddeJdQoGi387UUddiL7oFuuvGXq5R4CHSMBxNS2xL",
  "key16": "5HX2q32D7E5MLbGpXSwHeTXDm2A4JSjLaR7uFTVvkKaZbAeqPnL7j668PMSRVSWLJyxZvPfLsa7DzwJzJC2xTaaa",
  "key17": "4TLCiepd1t3zjiZpih6PFnsVyDkKquKjzySQorSBPioGZjYLSsseTR4LFbDbGjVaX7juLWDDsRvtLQKDbxTqEmFD",
  "key18": "4bne3jTiqHWWVT51Pt1mxZQeHu9eWB2pRGRKHnQkfUiX8WKxBgweCpNTzWX4d1Rx7dBFcwt4CyZ4YoXJxWGdJev",
  "key19": "51jH9W9sHBSFwxHducSK2je83dDQxuedYHzmHVah9dXue5sPGYkfTXGFfJBMCr4adpLLkT9vKv7gqPSPCGFvVnDt",
  "key20": "2SEKc2LCereDntiyVVxJfSZFFadcTEES9Qy2BrGrsUkJYGstDtGmQjQCVL74gJaXWc2XvwWqLs1AKL8dWpe6dMu6",
  "key21": "5Ks2SbBqMeR4Hm6vqZUgT1BG4bPU3zukNV91TK8ZVgtcee6L1BCkXen2DTXcn1yMeGqyLFuqTyAeYSbW1iHUVEx1",
  "key22": "5NSVZgPPFMA8mtqTqabH1mXzhsDgfiDc2jXnHscDyBz3ENLCtm38wAn1GjmeJPTLLTd1QaUivKSXcuRbtBzDL93K",
  "key23": "5xgVAWvhcpnXxLhQcHLz66NfCdywK2UjuQ5bYbe9Ka6tW5HdEwY3GXiEdHzugEeRcVcJGGbaX8TiWjTQvthMAvwW",
  "key24": "2su5YVEauKJAi5yhfWfu5zHfVStLpBTdgiTCviep9o3bQngU1TWhjWVLQw391feXQMJmmMBZZxUcnTjv5iuKLTa8",
  "key25": "46aD3cPUMfEwWUb97k4Zzy92KgPPmMocW75VmuKdsN8Te5zXFk1Us1pv5ksM4cBRsXQUp89AfKwjApSoJ3LgP3BK",
  "key26": "ZZvYazmtARWJtu38JQfcLu9YoCwBkBjtrb4KEw9gFr89rF2UfUNoS4JR2HVFggTiiqsvnL3nYhe1SKoMsSGyaWd",
  "key27": "WHduEt1EY9a1rNNdga6w6E6L7zdRbF2yza5o9x2brTDiQEeRrDRH7LLwLiiAZwBhdv5zEGzEBpKVGRqi4SeQJav",
  "key28": "4Hg3HCRnEjR9Ar1NSXepDz6SDwqRdRKQ9Mh2xRiBQ81i7AkHSdHnvK553ncWMNAZgx48sZttRUys5JuTSU8FoXr9",
  "key29": "5hBHuYhKcjCo2NeYiiJZufuuZciUQ8pZKo5LC6AnLW4eU6bSvPDveSHn86TH2r8tA2X8e7X8NEEeTaZqNyXLzsse",
  "key30": "5RrjPM5VySgsVTsNes1BUAGmtucEyjKGjs4yRr3JFnEM518PAeVZaqYNhWXZa6X13YzrzUGwoW4GGfbWaora6Z84",
  "key31": "5sjJmxyrovLpNJ1bqMXZWVcZJNB5VQuMLdEQkfo5ZGsdB59YGeBZ5Z3tPjc22fLT8cWuTMEN621WFMTnSasvTTmq",
  "key32": "vgTvaFE1WjxgsDueJibpNddbT6u9aJ5nEjbVLjBWktoJhQk5e7K9NGCFoSzdNC5dYLC6TuUvuHGxNJgcVNqnQUL",
  "key33": "5SQAAoKM2qBHBGy7o9zQYF2NYTWyXezVqZma9bJu4dJMkta3PzFCFWSLKePyBZHYS4Xgv2fJKtyvVG9C851MhCNP",
  "key34": "4uY3bFVDF4rZQ3z5aeawAEqhoJdQq82fRHqVSfKHb6pgMzZD1ZeAV98cteoUmNGcaogVgHFmTbGuwM6s8VJMRKa9",
  "key35": "UZPPvdCA2eX2z5weSZKmdkbonyUQzv9noCX2JHtFAWo29tPp4VNkmPYZpkMte1SDK6y2FWv7Z1ZCiQeNh7Zyyo4"
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
