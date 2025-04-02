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
    "4jWm65xDagdisQ6GTakVXBX92oU2KxYn6Wvbs5gdZU5jcJoLqjUm8zH4dtupxJ2QR3mrjYmtQaQg18oUhDJbXc6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjG3vdxrKPyCeDdpjF5aGeUW8SUYcwgF8DfE5cBWA2doYo6FKb1oy3atDvibtHdJBURevSesHEFzr6bt8TVc92T",
  "key1": "G4of2R1qzpAGsNL87tvq5FnaBTtiujb1D1LFqRhwgWTFExzz9bP4g4xv5XFtEeSRAGSTxRPBxKvLhnMawarYo37",
  "key2": "s6MdTrqMqitKiou8SJ9LV7Awu4MDaTiet9kevvLTMJaSsar5tTFozYEVu8rQ2UWDYurggAQrLBhuijSuVJckRcH",
  "key3": "5fyWsniSRbT41i9Jp9vAXG7pmm6wqXr6mb2qPDrsZs5jkuce2BdhtLgsHudStVLL5irkUpoREpCuTxdKvToebfj",
  "key4": "2hLEHnX6UkBBg8PXSH6oapPpwGfxRTXDg7ndKyRaJeofPTsHtZnzpbPzReD2Q39Ewk3Vu9DPJpQCMahqWK7LEgwu",
  "key5": "3nEp1CTt37ucu1L1dmnZqcYrLG6e5TMByxPPhBjMvfWfoeZ5ZrfeH3LrVHYR1R8uzyDDSmNDz7LStt1J5BSCs7ya",
  "key6": "4NyZ98Ce6NpD7caFe2FtkghwZYFZEF1Fh5o5HNPPtLFDyeEpVuVcTPJapEYBMZajMad4oiCP1GYmreLLdoB5qKA7",
  "key7": "2AoFYPN32sHhb3ni8rdFLBuKdMW8gbfk5JRVNJiS89h3YKyrMyAAzyuiCoifVzNPtq1JEcXwC7oTW5ERarav6pJy",
  "key8": "BtQFefqiYKXjFWG5KexVjgmsXbxxKRUta9uWhGsYrZeXL3uGxcyWTnrde9qASHzqavYetQiu4QZHijy2ivMsbVA",
  "key9": "26sfqaZCwx3P6gNRBtxp82gzJ1nyDVgcXJFwpNnmaiZrZyiSDhshrKv7QFNrbSFKmNhX1yMia2y1TheYuBqyzqPE",
  "key10": "5QuB18hgHz6wykb7pQm9DepSrTtks5soyxctC6z2VyHw9u341sM7QskzmHE52kr2JLS1FnfrU3MP8FmraZ7cytYY",
  "key11": "5tWoAXuhT22j9wipEA77WyW1e8n49TrHqh1N12LrmXX35rWaA4Qed74K2huH8UwabUBTfuTYrcxqYYAnEhqiEP12",
  "key12": "HnjGodHkHeVaHxi1CmXbz7YjgmTM8qawWZ94JX4utCnm9oqMFNHy7Edkt8zeZ2Kw4NgqtA11aHECEedTjARaCE1",
  "key13": "5SMHB11Yr7GhtLz6mCLHvsLHfXVuSXW9PxFjXbmQEw3uzPc7RRxUzMrA9ZcaqVeo14kjqKqBxkat59WES6K1i6V6",
  "key14": "2ya8R4uw7puuAjvG43W86q7jpELFZExaAaxC51Lq49LPXuhzeJvSt2YuvpP1oMjw6nvuMncmEst2nb9MEEwbMkkf",
  "key15": "4fCfwy2ZCFcJoRxLR4n8NynMXSueMdoe2wPAXfvaaD8umoRTajgTZFN3u6W7sv33s78qEpcoBuWwNXnka4yxEaan",
  "key16": "4wefGcDKASbfjMHWYFfSp2A5FFtmsBNeRDgRAnHGnyMLBqPWQy1QtJjLpypUsVvvnCafaDbPgVWQ3gz8Se2h93Tx",
  "key17": "aiETdvvKPzWjjaWj1c94jNATxaaY4uGiHMcxJWCGuRk7eBYcdKfV4PvJsf9ZReoM9HHhKgZeEGRtRv9scy3m5Dz",
  "key18": "M5Ak3YCBcj7d5HvBqCFjgBazWmV1DUbN96V5JSTFwoYp1T3iuvctp9PahKdpeqqoE6WUNBHiLS6do36qm4i8yzV",
  "key19": "2ovT1eLn3rCLxUqadpBFoAgm4Uy152B2fm478bZegZbfVmDBDjKkb52KCV583byUbaRicE1pA9L8UsuiLcEccKgU",
  "key20": "45emG6x2BYUFhuwGAFZ4j8dMF3b5gBZGAXFBHQCWKLxjv9X8cHxmiYeqezhcBVxG1HghwHt5y4oJhH1QqkouCtwb",
  "key21": "3bogdiM4rFXzte8Gq3eze6AmiPRBcneT8Nz9E6q1b4P69PspQ7T1cXw1VXWTj7dywBvMUDiPELWrsczpt3h3WNhu",
  "key22": "4bTKb7BCePyTowXYe6jkqRU17T5aQjoBm2K7PvfnEH4it8MxFb9VWNbgVXPCa2kskUBLAg4zUkoi6NPbxLhQVgZD",
  "key23": "3iHJ3CpEjXywpZ7PMXfCCvy52TnDcGvT1Tvu4zWCxaqm79eiAoCC1Stb956MDFhXzo9jF8Mk1QrPf3u2HwQW3ea5",
  "key24": "57oDD5Y5WeEqYXFT73ipRMPtmFEdDgEWn6e1RFbAJ6id1FLnYXCmtJcgnnTcv5XziMdJU1FyzqeAVFef7n22v75L",
  "key25": "zofU1s6SVaxwjcnwt21UvSRzWpQNH9FUyKNRrZEGKaD2aVmV5CcEetiCXqU5UqVcJb6Zq5GSFfxtWzvej5stnhT",
  "key26": "3LRZde9AapcBZpXa3SvkLFGhQYnZcnyma8TAq1u9zy7GkUfW6AYqFatGSYTjURDoR5c38ppcNiMuPxTaxq6uxx1H",
  "key27": "2sACToXBTX9DPbfQ6de5xD3mErsF9KYf5vRBn6wDSkMoHqTgENQFb5aQoMiR6cw6rPkMrjsjFLm6fCjTJNyMD48n",
  "key28": "3fxTFd59gsiYJJ52pPzgQgD3yASvPxTuVQnW6oSGJTyczwNPe4qqyNSWDdb9qLheV4jwTuZfRrMJVsmpjnoy4QkQ",
  "key29": "4kaZ39Pj8aC6qNLvj8RycdbCV86wfJmxjdsEHX6prLqktTvZGg2vHBdbxZ52GVu8aZ2QnSWNYNva2BS14Zh7f11W",
  "key30": "4GDN4p1hgPBnt39ydC6h7JGWh98emExa4DhZwgL9WSCDZNSihf9eNMKA2wAtJYMmUaXbD8ymBomBVGnxeLysvDAa",
  "key31": "3nXZ4KPtCKAkT3ZSFxnJwf8JBzq4zjX5P4rxyvem2fLrK71nBk1AHFjusNM2EGK2EYcUGhyt3g87qgXhPiPvcaWY",
  "key32": "gY4dkTCVxGVh8qgWnVDBwmFrLP66fKZTxjae9edq7NEGuQGtPC19mi8H3Jb7p8R3kGo83548x5uu9waCQm3a7rw",
  "key33": "5iyuCkgLZ2mKjFE1rqzy5kTZQKaihvQxZqnpK4Woaxoy8qBX8JWvvEFY9sNHKgLQ3VW5kEGASVyfhyCKtfZb2wij",
  "key34": "3PviZCCvfLVv11q5ckb8VAJcGFjJG3TEccxBwov625gcTWzubEUo8XAm7NoPJnygCgjXiUcK57dLXX3zFLUzdthU",
  "key35": "64SQtMicDuQpSPnjTo5KFvPeMkwMi11xEHA3PMqb5a1MgLqLchYREC177hHsrZ5goBR7h9u3BRPkFDCSURoqJYLZ",
  "key36": "39cMUB1d3LPS3twbWhQDdNCwTrGYFCQnjF6ce5maxgD5X3qFcQMLwMvSsrAZmbpEbakurfZK2KAq64TWM2XSxebT",
  "key37": "3XqQgSQq3KCw4PxL1BHayMVpczJ5EFKR495sZUxbfQaEveeSUD58NNzXboVeKMdd7SVCs7iTdFGuNzwgVjanxgyZ",
  "key38": "5cEuLbq7ukYRHPrwNvezfANwwuAygsfKTimmESgQ4pNahDmy3SAuxH78Me5jQp9LwZRhpFN9Pn6YsAFu15om2dMz",
  "key39": "4yNedhkCBN8nqRxxEDrEhnKHRLdsLCmkrqAfqxTFqrvpUdDXnNTduFY2veT8sP1cDKougKKbqtq22XSUeBHN4WtN",
  "key40": "5u7sxRKSi5QMgzmfSBqEN8nkcoxVUJ7mZgGkvkD1NF3u35eUpP8HQo7bHmFikRwUmXHUqdBhehMr2iHY2qgsPW69",
  "key41": "2v2zw2apMxixqF5n5TAaXuRKBTqRrAqe1ySyM9eTvv65xbY1vCpRpXGw4CVsANzpp6rXmw19DPcn3jgRTY6phr9J",
  "key42": "28FtkZGCqZqwJMKgwGDChuhpRj4ke3QwE7h2diq7ykzmmL76JqoMdkvzxKxaJBtgjSHorGpA59cMb8LzJKWVj2Vq",
  "key43": "32S13tfFHHf2Drqx1bVEqQuxrGYiV4jndZUKLyzwMsJ2ywygRAJDwzk8Mk1ufVY3zm9zcEgqdNZLyLytLDTrsLnv",
  "key44": "4QQNXvCoq9fuUxS9H9FLGZPu6M7dpByzQNUdtt5b4Sy6iW6QzAVTV75V6caaeLZiteufe3kPFvP24sCgtazQTo1u"
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
