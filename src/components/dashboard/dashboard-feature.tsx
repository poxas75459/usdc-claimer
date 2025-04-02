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
    "2E3uNhiht8nu1mRmyUAh5gWjVRwbGc8xPU2sgGshuPpNveRJKpGxvkS634PQfiBmkBQW9bGBZCHkX2zbyK5gd2ZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RpwRy6CEMt66ps7Kspd85z1KAdLq5oemwme9J4X25eGtw6qA816CAo1jfsCXEhciDNfQwNj1VVsXbw9QnatmPv8",
  "key1": "292piYYPiFTBixgbnDZEKTTBmR7W65MTkjAWmbJ5tcVTjGSvBFquZ3n5WPwaUxi2rS5YcogXSNhLKnoadVhmQppY",
  "key2": "4arNBM55qySHzaoUsnendN5gBeZ5GrXt321thCBDRKDni4cMyrHnTz5YswB4vkA6GGbJZTfCa3kZaQXHN213ig4T",
  "key3": "4dAAadp7Cy2tHFkuWi39CPhgDguxtCNwedfh588139mUmDF7dX7KL3Q48St4hjtMci9jGpz1VVsMWPamNp1apKB4",
  "key4": "63popbLXS99g4yigBBtXSMhST8ACa9HXhmnT2wT1TVHByNRspoSo2L5Vz3HhAZ6UvWs2wJ44NiaW3Zf2H76hAvJc",
  "key5": "5Ys3UyhTUsf7DJaT2RRcj8i8MtSGrQ6bN7x6He2o2ZqN518mVknLqUFia8zcs8yim8xAtBS56wW6FH5D1jv5LkFp",
  "key6": "2UymXYnkAmxctBcpKusyEadaGYXgW3oBGJXLq5hWNmpyHCsANR2Ldo3u39hrtnoj4rVLZXRMofXbDCZLGh78EAjA",
  "key7": "4pQh5d8P4ZEU19kwUDkQS8AfRbsaL7QSoiV3egkq9RVNxeZ2RoHxW4GeFoNmFtVwQPmd6uPhkaqRidy1U2nNqaj8",
  "key8": "VZDNnzxwYohX658dceZbmGeEgGqYRJZf48LquQZdnb122Z7Utgf4qisMscrbyG6TMjQKnYcrSnGbctoy4NgBEBG",
  "key9": "3BFbPhfbvQQ9hEtzRxDc8VLQv1GtGWXTHrPtraFVyipCvT66DTahm7qb9ooGwFrsk1uEYHRa3f9dsPER9vwkm5Ma",
  "key10": "5BVorFkm6uH8DZYBhckWcziTQWxUc6FUvejCw1QmGtdchvCcoZsEZVFRh3XNsrFHqvnLeMz1SJi6toV5hYFQ5yKz",
  "key11": "3rK4ScWQGRWqoSqQvfCPgDdqeY5mwPLXyFZLcwihvKGp9rBAaTSaMyeV6NhsqoPnuVGf7SxjKivS3G6PeqDWaof5",
  "key12": "9eoRSymBrc8nt2CSUsg8QVEts59u3YiwktoahHCa5FpsK95VU64DeuaASuVjmiz35ty7ooYTT2LjYLKVaaxrdoX",
  "key13": "91uG7VYHQWSmMrXVQeuE7mXhC1xtq2sDMuRcjQgu3XhevUvB6pka3chN7Enm73B6b5bBcEABymUnoiyWRgQW2sd",
  "key14": "5jJ2b9eGg537iTi5AFjeS31rTxowgfxbcCLhoXUf8NXin7gYaxxgz3Gj7DULjLWs9WgLu5FXdxVzb93EAU6PUsKj",
  "key15": "4KbAZKJcWFwnfcCDBwBYP1foKMDZod7Ft9zuU7ywTLi4myANuYjaZL5pZBaJALPrqFiXa8qinu4xoWmN8CMJSGpA",
  "key16": "qC6ZB4PYNoeGr15AfnDBymNUSRXqa7M1WnxWzexMMhVfRXvQr7ZsZTu9xpgg2ckBvvWNPrJjtyBtryxwfRPEQkH",
  "key17": "3oaQPWDxcBrNUBR12b6tvzLDDrXzq37LZdJyDVqTnVG8csNA3tdFbZoYJsCWZUbZsALYE17Rixd9iWywCD24f88v",
  "key18": "2NyN9ZCmwowYrifT5NCCCRXy1MNy4NSzkLAEeqhGccE2xMikLgRJs3AKY74LbTeBMvM79AhsNCsyuPcxCeRYtFSR",
  "key19": "2y91iM7RYbcgYAgYSZYnJWrxt4Z2M3RhNGF6EK76yTmESQR26Jmcecq3NVhAdLaF1EsDNun6MQTsr4EBcAVoqh5k",
  "key20": "4vqphrDzMGyMzEr7aQwKx2zLMRNjxAaLvgQHgEFyUEiEkLc6PMuFNTLroFEr5YVERJNKALGEAXYTK9aWG41Va5iv",
  "key21": "2m2auYt2psHwQnTrdJTo8neNU7sWeUBSVEMf3LKGoQvbaxB2JvhKQuBEnVvv3TYCQG6xTKxRc8qU1fdARAezxz6y",
  "key22": "4KCqpeJaQhrSZwwRtghF6FF2FJBQjQh4BvuubnEydZy5f8Xx3LCYxDW8ruCXRyGRwcwfy9fpaXup5kAo7nvGzmLp",
  "key23": "2pk7XK5hQ9ZeKEnGMqYXcBABPyWqkGRyxiqUva9G3JwesgakYakncBMMfNMDNekUjAnrRAoN4Um7AqnS54fH1764",
  "key24": "52EJw7FWkembNkcLwDvAB5b9QTH8zp81A8yZcKFowNpxpU1boXyh3QtCboifbb6hLTbQPSoC2DE4uXX8QBi8Cx1A",
  "key25": "tScsNriUYA1buVcZuKWGanHffS4YFmqry51sxMFtCHUS2mnrU3yyNXHxN8og738njS2zfrxG6KwRBGn9idw22Vc",
  "key26": "2pdDkVXGaWNTgWFftLsB6TxYqHchgpfbEcFry1wwqontjErrbpViWVzSubvhver8SW9TLzeb3SYxUkAsohPZjA2M",
  "key27": "5doBoxz1FR2YmAW3TZC4iakmv5aLxJxvFpufk2KehjsonRgZmk46SseFhXTHJsUkF14WsHsPjDTsuhX4huRMvdNg",
  "key28": "4z6tJK3Y8huE57qHASFV8jffMaPfskrjHfANbBdSoAkFPdN8z8pvKmTNS7h4nu87V77qKGSCWy3bcWyLF4aSNuAK",
  "key29": "3QuNeENarEU1fwAPP7tPqGK2CzbkfEbcAuKPacT1ZuyesP8AfHCKANp4MUn6xHj4X6y6Uu5fa2xYZ8fv5LBsFxaP",
  "key30": "34ycv4LMH8v4sjMx7ztFM2ePUom46i94hjktmTXY1VV32ANDwJxMExedZXMLU3T58vCVvQJTdNgSCgHhfL558Jtt",
  "key31": "4JiqSx3PHqgbyKBsVnuH3C9oL5MCy6PP821AiExJ2thT8WFnmFHzunD2ZVYoRsgjR9p7E5q8xTb2VVAHHYCoXTDC",
  "key32": "3XYfGNLosTStCED3L61XJWvEaMDyXQ42smjjWDW1McHsH53QbdvefdH1B2gjDVfngmXrnA5wJB1Jvwuqb6N8rL9c"
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
