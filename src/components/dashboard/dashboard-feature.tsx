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
    "5v5Z6mzMYa5c1LNwP242kWiztT42jkdD7okvQCPqdd4qqq4mGQFh9xQRL3oAZhaxSJwTXe2tN1Cusad3D1mXp2z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647ksuWJVvVQkzMu129ZqvoN9DdjYVim1SWiQpnfcYwEusmwuXW2ycMECjGAUmvUbxdrTS2GpbkDQVRNAGqsDkPu",
  "key1": "5cRzoAv71ff5reusSMfXjs9b3SnAdpiewELKQYFXEA9npGitnUhPbpQaoVwGNMfBzYpW5ybJdJbBt8HZ79XyTnD2",
  "key2": "461bpNXzsJgCF2rRhkHbsWmUknM84byLDxcVuhZ1XGa5ju5KPdXdhzC1WC4CBFWuyqDYXojBTf1B18ekXrNBCAbD",
  "key3": "2Hhg7WraYJM6FzcvK9HYo4fyxNPWiFKJvf6YQVZ3xZVCYpQMj6StUSwUj86REjCWb4o8o6Z8zEpLwhngzWZyCBFF",
  "key4": "4yozv4D1Z8YKipC9xPm4wvFtY36HDUVDgZLV6pMvX124ERdT7EU3tX9DJysrQ7dE25F8vm18P7VMP9vQBc4WXKNF",
  "key5": "5jzu6EWShrti437rbQabsRrKvh9iRX6HWdnF9JSJxDKxo2KrG474XJojVE8o42LQh24Vmbhv8XSYkUye4aKoZJiR",
  "key6": "3m5CmrbcGxkMcLLTzEz2DFJe21YLHfUxZJJG6fKqvfmVJtMQf9zuhzaBWHqDWTCPEGxMGhpGE9d4S7Ar7H2eUCjp",
  "key7": "2sfs6tuwubDx1E4WUhMFxqjCMQdK1dRRJCQwRGYfwK5YTsDXsEguRw1V231eQRH7kM95YRzjdDKEtGYy9hThT8HW",
  "key8": "2tZDAKmKK4TR7WjGJCCSu6c5vzhgTo5bWsXgwUk7CCsywV2U8gxK7waPzoUS2arCV4taAofMd2Msag2jS9ewg7os",
  "key9": "tuMaZ9JXv7cVi1rak8rX3ivxWZzVix969yKraBqHqoV3YtgGczeXCBsdko91X5KMerDTZRPV3K1tykQrgRECv7Q",
  "key10": "P8Cyfi9wKJLzi8ebNKMD1oN7gmkfT1wrfjXXGmAVMNjffXCh6Xc6yW71wQNLkFy74QZg9rBjUkxpKwVzEgnT6DA",
  "key11": "4o53SdbrXFbaqojqDhtQTcHAfTJaiPoSRdTC1XFuh7h8yvn4zX1V13H6HssX5z5QPwPewceGMoyBQWSEqnVyGD1v",
  "key12": "3tYZG5FzyydcU7stknzafVBUY9RCckSwC8ktsXG6JyDsCa7SoDA3xobttF62twauLXNv9Ecqub9LkobpFURCEGJk",
  "key13": "5Q6Zy7bLwCqBHU32PsfuRQ3Gqu1Fcs5nmBYvAxzHiYTkqiVqjtLLVab5P4MBPAjXNwT5vZhgb4qMiG9q1FGj4SUg",
  "key14": "ZbX1dQpur1ey5ZE9j2cU74kU61SvGngwfyQUAYsULqtfJWKz8apQuywQfUgaWDPPyzpNLW1FpD1fyCwtzzWJ1wY",
  "key15": "5TE8UYrPAprRge9QWVr6C4a76HvKh44TheT8TdUxbqyfrqQvkzbgBSQvgahczjz677CkgYWwRWdtXC2g8jsneYio",
  "key16": "gar1YtYmeLe2F2rfWoPNtiNC7UZb6SCxfpKU5tsDZwQcmfoJ99gNyMKp2vigApuA2Dn9CgPn7oNgfzhSquWoFhR",
  "key17": "5y2dBjd2ENVZpVcS9aoADXU4e38n1xXfCbj6LGXAtwK1B41x8UAVeMGre6PXfh7MGMSweyZWDJP7f2MCGc9bzNw8",
  "key18": "49zPn4zQQb6YZMBzjvGSwhQ6GzuDRtgetkMxkGXqh9j9RkCAC2rtQ1Xo82Wed3DZwDHRXfEJFL4Mc9P2SyeLUQjB",
  "key19": "32efQksU3epYS2EWr7rsNdiXM7FoJqPzCHj6RJbTXzmFgbErG6Uj96FzPEX7vRp2EYDCT6FiBBX7vgNRWp6xjgDL",
  "key20": "5RFgEJoqFHw4bFyRKPRt3uNJnNS2GeFP5gzAh7Et2f21fMT4chC8pLz2Nn3G5yrmeP98d73RFgZ4YbinnudTx7rB",
  "key21": "2HV2EwXyECbHgU1zCnhrCQkCKCUvVVNWbumedC22PWdMguXNHjYsGtdqgMgoJwTvjLNktNnhw4iv72isZdhdzVz4",
  "key22": "5hXfzGjCkGpiE7MXchKdugMsdmMMzehUXoWWXun1RKLQ9ix32rdzJdkcQXJ5Bd5MzTgXeQbWpyzZnQrgiB8H2aBm",
  "key23": "5mbeRCmPMcreDTeEKeaDfNSEEwUmHvXsNAA4V9sp6npN1sHVU32cc9sGixHRHBFvgWy7jsFZnE3qksX4xwTexMb2",
  "key24": "295gwMx7yJEswZZP4ZcYR9h5q3BtxyEAnhnx3RH5u5Ekxb1jGDr2YgsyjiuYdnJiCCsYFjvQdhaRsqS8joFNcGkV",
  "key25": "4UH3Pew5p1cr9vVgXhAD2ad1YutURTBShUjF7fJsEXC1ZjsHypiHemFoDa7uL8Enhw6vn7XysPL8YmoGiBnypKdb",
  "key26": "5Bb6bQjwzvesQ2z9oF1G3WRYv1Ydk6i61umMKxdpatycYBHyiXk9vERNd3N8pqUnCHtKDhZB8Gzxi3YTTm4zFViQ",
  "key27": "2PFiPTzv45iJc6twCayCYAtJF8C4AgECoPH6jmAkB8ivFMKge7PyFAB3pvku2PR9wBJXeu6mzHHWuxEyxr7p6Gsj",
  "key28": "3qpGVMaJxkyXeyAp64DdaY512XzHzj18TqRNc9uufBtdhqiKERZ1J9hLJHbCeWGciSw14Fnj6SPoAG3cMGsH8LDJ",
  "key29": "3orRKKYS7nPVAkVjxYF8fxJXbPah1oXNjm4ve8txGTAmF5M9y8w6MMoyKoHibM1myXVjvFYB2UzRCUqWtgi9Dk9e",
  "key30": "2SThRNJfRKC1ZP9Ta2WUsm4f4EqqDJ5qLuwSauBPnU7QdteWYRbdhua6KVh9FXXxyXskhSS2JXWLhAh76NwQr5YN",
  "key31": "2wAUKStqCg9EiTtkkC7582VE5rhALtBQAdDkx19ZsHJrsCp2ffDEy4Dq5xak6Z8FvZpSZ4pS998C6wPYATPEcG7u",
  "key32": "5NdJ82KRnvq56frq54ya27pCQWnKf9HLPQN5mfb652t6VgqdR4aayEcH2J8JsEYfuk8AdcXZ9iwe3mwDN7SDnPy3",
  "key33": "7cQQ24GC6qXecfyMQHLbSDKvR27DE5ZKrGijkUm63KmGanREajV1qdjwBPvrUo5oJT7Qhu8hCUGx3kg9RsEmNQb",
  "key34": "4FREfxxa94dQ1gQxHARgsfokPXgJWGqdzriqc7PJhowSG4z8snckVAuxbGsEz7MQ2SQbY6NLT6QWLABKePaYRLgZ",
  "key35": "3N4UyQFnf4uiWR577CQZuKNfLSLL2xZuubuG2r2sfnJQeFQnHeCN74cJctpMeDanYtKch8MQiSEE5bujrN2afD82",
  "key36": "5s8jcG7skZ6UTBopYPMdgFNdhmv3K9mWPd9MwSttHQxAz8X17hxa4uj5qjGxLEN6WUU4fY9hRcaMGxkyvTcUYubt",
  "key37": "3xqaXcDX6Czh8reBTghZrUNLcM1YxeMPkXFiNb7Pm8uKH7oXESwHRzvBJzeVioYtYjgEWxH2Br8GaDD6QCpmX2FE",
  "key38": "5h9ypeTnbqZDXKB8urr3KDHYjbc5SYJ98HKdZ4H27X1iBF7Df9BAW8jYMwwLnmYAshySyfJaD32M8HxTcCv3YSZP",
  "key39": "2xVC5q7296VFwhNkAzRuh4cRzLz2zNtEyNcrMAS1KD1A73GY9jgEjoYiLj9r2aGmaa5jz79eaikvakawYnVE4K9Q",
  "key40": "3T8bdCyDb117yWVJFfE1ky1qW22kewYhenoH3bruiJPVr6GAsuRzqS7YZ2kZrZiJh6Q2pn2uXDyTpywuGdmQyCts",
  "key41": "4s1ho8tU9yddgnBXd8mgbiRhisbHasC8Ct8hTDGHWy47FqCKeDNM1zG9WfTrdANT6pHQciTKTRt47C8ongEyfkPC",
  "key42": "2KYUTN9QaJrLyXyDeafuXG2tQWLgymUV1FYYpXKZ7pcsLiHBp3gedEjKJGadzz1d3zWyLaGiecgQ98Fr9AXAwcNy"
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
