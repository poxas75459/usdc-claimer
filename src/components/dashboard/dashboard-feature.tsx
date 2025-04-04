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
    "iMpgJnRoFUFBtY9EjJ7nxLcFCZCvEr4cie4svpCEJJXYVKeZ7XFDWkGzEDWcFTUSSMgjZjJo8hq7YTWEkgw73GG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d83eLv59Jp4o2k6c6ky6uxERqSMFANSWLBSHUKAGLzU3tT2Do4Q1roorz5XbkD4oSSw8WcQXFrLeW3HHvC7WPKx",
  "key1": "Y2CbiDSJnrkbMhKnAvJd5GoVJm1quZDCswwmp1MPzSYFX6BdBNjRwCh5f6d7TYsmWuYwbxpuPDYCH2dyzSvAk1s",
  "key2": "5YM8XFUqL7vzfQ9Y2YZc5r8DgBscrzhLGPcJM7EQx6tBPxRs9LJcWHBjDVmA5HAVMrHEWbAFiEyvsAgMToynYyj5",
  "key3": "55pyW57KFB13mywjXC2WDz3DHYHwtsz555WSF2qp1tEWhzcCczrFXCwC1pPefe14aAd66jCE5aKsFvJAxXgFQmtx",
  "key4": "3TdJNyxpN87uxfgbjVRtQombrPUDHS7emw1sZv21BXMEBtWvHmMMwwTG1qdZMx1oZeb3rA5rkMjP3hJBzfYdbn2C",
  "key5": "TxQrqETC8FQJSUa3rcBiyNdux3DD6jKkHF2Ma86jv4GwWzvBti3cpZr944NiNQgvSock7tK9JrBzrMqssrGqbrD",
  "key6": "5sgEjxFxqZceQjwPGkW9c2Ux7EmVUGwbHyYsi8amKedst8jSdhQeHSHMjekDYmSHxz9MdLY6rMtFpw7fLD1qRqcJ",
  "key7": "i3WhUCKZX1qS5cnWUPoD5EXrujvDwjecSo58eSzkPrnTEuqrXeXxcQUnoytdELsAFfsCbN45J8ci2sk1ECZmeSM",
  "key8": "Jnv57SPenFRgG8vXvvZ93E3jT6zWwMGb7xGUZKJuJDBv1YMZNs2uZrz2ozfAzLGHW9MTBuM3YgZm4rLQeRA2UYG",
  "key9": "5Z8LC47SuEUQpDuNwpK4zx8upJTzq6FTheEL7kHv4PiKeXjiQjGnYaMjtjK86cs8Wy6DcmJR2jNftG3uoeiFFkpE",
  "key10": "4Gk4cbmiKLwfVNrpq7FxiTGJituwFvm11e4F4275KNmR7trDA2uHvf6rMYpMgxYYwVAfVtqCRBdN8BAcTP9RwD4H",
  "key11": "54apRRPrKxVCdpjF9trC7ouCtTCeXvJdomwk8RjgbexpnQu2SBdmCqbU4PCnfCB73XNYq4xjtPMa1AGzpANGske",
  "key12": "3MJ9Htv5ffkV4sgwEjxwCjNBdPbnwLn3MqGR2grhgrmRs6ezTRru29SCC4nMKPMHf1ppFgSavpZ7vXiVNJ6sqBzg",
  "key13": "HaErPAgskwPjzk4aRVMDbJK7h1QxrGzqkEhJkYkRd8wE4XB83cq8HADAzsUxKAX3b7eGc4Gmsp9JXk51jYUSPHW",
  "key14": "3JFff4uZvKCGjC88qAuduFm5Ur1xZtracXqQvCaum8Zws6oojN2HN7szwzX6676C4J9ehN5NoDaxWByXQy4tSLSw",
  "key15": "Pj7kbTTf6FQWt4PzJxVrmtUkVGJBtaPriv9nZ3EsqCurr6jr485MJhuB4JsaANjKCjCWedMYWSzKUjJ5L8rMzZQ",
  "key16": "2CFJewnMpMr2DnutL6TmrByGWiCkyonuHZq1pJ2KLYQWFrjEU8zKW8psvqe4B3KG4upcRdSxnDXKuUf1NAVvGrhx",
  "key17": "VXdWj3bbMNWA3UbYWV2s3NgT5j4mfFeAnuAYmiksRDaAy7oYEatKEvjTED2nPGZhmGZjS9jvY9h5ng5X2XF5abY",
  "key18": "3wW6amq4HyqZ3JnzbzD1caQAC1DKwVwJNJ6L7oBkSLiqtAeD4a52Y74eZ1c6k9SqFELZ4uo56Yqt8zpTsYV2Dsac",
  "key19": "3vkxmzYETfzm9BxAgBEo3Ykv1DEGnqtYPWSNueSEz6jtZsJYKaK7kLucDUyvDPjayzYwcCfZUd4TdNVvrAsmzLhf",
  "key20": "2FNLXcZWzLKnN9ipfE9Fi8hYrCHSJc6x4TyntNsUHgN8D8NfaZVMyfAyPu1RoMDf2X7sWGxKyfkxTaFxy6h6ma3K",
  "key21": "64zXkWLkHpnWzDbLHuchSj1QnBYcuEGeCEHfDdTBPbiK19XWq9CxqxoXgvPgBUjE1UYqPm4ZKNd6o2S32r8jRr1K",
  "key22": "4G6xZ353nHJztTC8fbhRN3HX1ibcvMUkqSvkTbCi2unjg98XDYQbfHBiEkDS1gmagGWnQCB3kET5wM7FwmPH5HUL",
  "key23": "Kp7vaueJqSsVthX2PJ9CRXWoTWM7DCX4EmntCdS7E2Tk2UoLgfnuPvSnK1qBTGTxkw2C2ftqaqg5ybpy4DJsTEd",
  "key24": "KDueNzyv2Yh2MAL16JyXw3s9TvRJGWWM9rBYHip8P268mSfg8yA8XmeUfdg1J4preoL9roQcANjvoJUiL7f9ztY",
  "key25": "2QXxRb4ronAd3nCz8AYi4QbiAF8CTGYJu8HBsfq9ttcfYrqsfrggjqw3d2Rx93nYbbQ2CoQcgdEMdEdGNQfzrSqo",
  "key26": "369GxAVvobpDmDSdG1WuuDuDKmtzWf3TgSfRKPp79Ua5ktCbsmxioF6xEq4tna1fvJzLMpnMyfgixjDPMj3fZvy1",
  "key27": "3XGom9QRNvhqbkkvN3AU5mxeFoUd6yPYPxNgcbAw7hPcu2ho2SYbCW5yvKHUrcMftDCG9YFweAfv7NVizfb2jGhQ",
  "key28": "L7isnmCejoLZT3JoX8L1qFoBgLuCJm2g4ddTfN7WC9Zd82P4UfncNBdsaThUEi5Js39qZ2tBhv7v4ustGkyHvuM",
  "key29": "YjSAfT1XcVVTpuAJ8RQLub5rduqHJLDzazfciwtoDmEQMxPt8zHmWEwb6JxuPbeoAg5DaYiZEZ7fRRDsY8RRWPF",
  "key30": "fFaPBqvPaXCQNgf7Gw4nWN5t3DdPSmXFJy22dQZT8Tyqrx1msjVo8EYAyyyZQ9UTvmAqifMaXsw17xfRbtek8Su",
  "key31": "2rNnygzFiEhajDNjhQM2eqMHpJRCJkjW9EvdGe2t7w1FBqr2PPmvwKViEBwqPGjzeU9E3rMkLuAgGFT43tUKTu3E",
  "key32": "XVTCymiKurBmkqi7JpxecwD4CiVSro3f8wcfenMoMkLwNfwLykSzUT1nEjuVRZEmcJtYd4pZ84ebjf8gSGM6edM",
  "key33": "sAAhFXk7fNoexm7xk5bjRNfxN5HkQgXh1CP72iDy21syyggMEgPkvV2BiPqgx18oQArmt1r5opTQFj7GNQXHDpe",
  "key34": "x4VJPCYE4AGYVnFg443HKuDC9bYeg16kiBSJnvNJHZAJu8SnpyKRueiFWRqinVdN9Rpf7wC7tAKnUbEkz2YMfqJ",
  "key35": "8EZAFiBZqmcAfew9AsRwamst4R27ttCzJNStGgKNgAfQAbW5jthop8RQoYZVBQMvdcJGVZ9DbhqmyR2xSxWxEGw",
  "key36": "4JCBzaqF88zNo6zbyj1Noe6RUmxToGCMZLuUQNmHJQx9GT9evBAGB288XJL3nEc8q4RQE5GF8szQQU9YKYnp5fLf",
  "key37": "qVoNJ9Mm9B1x4WFcW5kfAYYQu7zSrzZMyEKSsgEsnveGLSHJdZhLti6EHgVnCUFUZznMN4SciMRJVifcs5jcj1T",
  "key38": "44ETLVDp9okgpWRKiC4WbJporDSU6bURrgBhhAhNVRsP2wT76PdH4XrFAzGhUC7s71RMQXRF5U7DJsNk5ALDJKkC",
  "key39": "67doBr89ZqAKeFpogN4VN15xFUfvx7AVTnND4AUFdJ7H1DmXiRvSaMypWpUCozGQJiBX1DQG4uiQh71zyQCa2y4h",
  "key40": "37MyzB1kDJRTjyE6KHWRPgpcvddbw9SHvRLtEyeLWUyUDo8LdAo7QTVRvYiJ2Jp5QhrP9DXAddsYMYgPekant3dG",
  "key41": "oGWg5eHfZcCanGD2eX46YKui5yLqMU2NZkuVrob73M1yisz3nR4zacC6FY7Ej8LARKz2qpGEtNfNUPbZp3zAWbS",
  "key42": "Qih8UwcLxRj59tQQkDrGGo8m4YY6kr2k3o1KCNTNaxG9GaSzDQmoAv488b8Jz8z5uFqiamgoqN5UcfLXVAFptHj",
  "key43": "gjsn1X7o4A6BHNCY4WzMDQGFnk7MFvRJHPLDPGouGzRPPBsBYdsGd2pNeDGNpSCMtFk7M78uopdjkJMXqiLWr4G",
  "key44": "2ZpqYuePuUUboYVaR8wmdp1c115PJ4skH2JDd6wG6JL7gW3YXMKYij6B5YhwQttjM3YWdgMmmVGQtPTc7RdvTru7",
  "key45": "5nwarvbzgb3tQRJPdrc2zn5GUT4z9jPVvfuQ2HExVnAvQSbJxni2GHiWc8CNA46FdBjaD9eUv2azLZh4sP1SRLkr",
  "key46": "2MFVwaxgSGLh66FyqMaUUzSjdUjGvhBxDtJVvHRzjNaWrBPpVciCEogKws9NxBL7cKumH8gQh5Uk3Q5PEusnZxzU",
  "key47": "23c9zLgzA6Sjks26RN8dBXjjsDHQfEFJdqfum5PiR3icK3k8co1HCquSLcavEjzohS6GEbaVk53rLy7gcXGSvDgr",
  "key48": "3xbM2f7VawwJRKSJLgCsZZkCcTYqgCYsz2LxqiNL5RhB8qpTk5htrQ1QhDgAF8WKw4LyxekuSYy5vi4JHVz7HPKZ",
  "key49": "4rW8KGe3V6541jxYxqr5B2ETbX6dWfA2AvXvu1FN3tTm6q8uVnVfPMNeHZiBc6TCBCT8W3Qz6LqctzysvHssKudb"
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
