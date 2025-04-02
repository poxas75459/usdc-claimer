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
    "3WJJYAafX5dV8G1Cdgvek8e5ecmznZ4ib9xHbkS5wCRhPFKNdi5c4XgGK8yrq2ooySVyJqeJ2AmMX8kDQbeSarP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eY58q1b4mEVTeVwpJuwefTgbWhSysjygB1ezxgAUrxoXfmcwXsvNK477119quo7esKwNjSyqsb8z31Ww4Bz8Hxe",
  "key1": "3kN3aJezPf5cfUJYyFK9EGJAirtXFLGyM8ZX4bstpuxs4nZT12WvSzrn45GpXGXWJvJCwLca4jW27Ck8BeM3Y7Xk",
  "key2": "4vbjhhL49c2teDMpafk2zN2xtNtuyErhxKBkrX8sDpeh2MBkKJQ7xbe9vLPJUA4wpgWjTWbzdSRHZEtHGzY2itTj",
  "key3": "49dyMfB1CbK4GfHbnxBZL2Kz1YpoUk3iM6AyUNXXxJyGUjsF5SeL1238Yht7BCFRBaU9CnBcU36JNTXbt6huhXzT",
  "key4": "3M1pT9MswcFtJKZCQPeEP7KucdPNztBtTzr5rRv7j75t8vXmqHLiTFLTic194H8ZEoVt5Lo9zxxaTEa55NKL9mW9",
  "key5": "2Fifs4XAxVxYejKB1Er6WeMeqR9mKnBDa1fKGR2Vo7CuK9fKncodwAZWPW1ZD9npYx6RnpQ4cjzZM6Tfb29837tr",
  "key6": "4mQAFmvWxsHHqLmK9eS3gJN57f45nvhEPwLbSpgygi5rpSDcogC3Qrsgny1MNafQ34jtnTenwFZSYPhHQgbzFNnK",
  "key7": "5zrp2aHGXfhAxbRqSMDu8vwx4TdkDqpo23GK2vkk2p7YqNgJEBw5TL5BWwTcX3E3wYHTy43UU1G9EUtF7nafLUiG",
  "key8": "5tekeSq9uKJA4Gj3RoBKKQNjh9LQwQJ9rV8HQB6X5G7mmphLKa6qyk5QkmeKUHRX9nDJbjFoKnWQd9RhWC7qiz6M",
  "key9": "WcszJRR1b4oZrJYtLpJpkjFfNXfvo3XrDRrP5yJdadiwpFz6vh8SMhFM71QEC5frbeZrJ5YACHkDCMLP1zeM2R9",
  "key10": "2cEvyAQT35P6hrKQ6Tb38JajEQrZaLpBALnD2WjHybwfrXZqJAuVvPQhs6kvBsLziDditj79LFWPYGSsfBJWRFyF",
  "key11": "46S3YxE7gqofP9QthGJfySUzURNdxZ74ZoGPR2HSi1dFiDexwt7btGSSxxTai5nRGaNp64mhSkkgKXy81mjdNdVG",
  "key12": "3kJgRT2FWXgDzi2AFfyXaLHXXhRHqARhHPTLi6WAHKU4xKa7fU75Mq3kN4iZva6n4HtijzqXzgmE2aPxyyXZp37p",
  "key13": "47jhT3XVTiZCNZiYAmV8Ab7C3F2R5A3c7Q4hsHbsGXfW8ESRNykNPnvWKUmvuhzVHUY1jLiT74hhHpdTeE4tphvc",
  "key14": "gx3EwwxoHDxPou8ntYFFspSf6CfPebiF4gsvWF1qGDtSnCe4REkBRaCYGEY4uFGXAGHSPvF1GrjYLXsMDKVEgg7",
  "key15": "3tPF66RrUxhVYQqLoZHJwS5rgjyqyHiMCfsVaEwontm95ppig3XJcCyfpBacPLWvuh9zJhQCnuUggkdTayE1qvSB",
  "key16": "5NQ1RDTcM5HgRFaQrwMwUExad73p2JS6bevBMEjvSa1i42eH8DZxULedqeQy6qzNeBZHrFbSvmUHtenH8zxwBRJ4",
  "key17": "3kTFdFnZFeoreAW1EUYTNqNQj4hVyETRem3RXtQtffgYfNbebrmJ4LsrqkXYoJknAC9aAFAuobHiFhbfJrzWFUA9",
  "key18": "5dkbiYn5B4AfRpCniiS6rqQPhYffhcqdc617AuMU4PRVxqQvGtyjEUdVHLqU3P2JPtjFez5oYgoGjfStgKAF735W",
  "key19": "4jKopYxt443bJLrqDCbTZoffv6cz8EsSnpbSX9mch5ofxapvgGcNbfkngKPC3HRHScd7Ly7PafzRxaGWxNMk7Z5w",
  "key20": "onVwfY2C3pf3mPuYDycbGsYPKchRTnJM2LKGGu9bGFTFazE9HqxYFgcpJTFvFVJUMCcSqHrTLSterRpvtDxVtzF",
  "key21": "hyVvBeybnGvQrvpJ6mETK4Ck9mtd5NC5ME7CMAC9sBXkwnA8Z5vFk8mzFidNAyxE61GMY3zHV3xUWmy8j99Fagn",
  "key22": "4Xi6Caw6nEpp5pQVvFeSjmAyZ9rF6dFr3mUM6uwreFiPbxoJHn5jZEnZgZTVsuTvPQaqY5aTKGz636jAEaWQAyje",
  "key23": "3ykbjP3zr2oDrMAEcwz3DLdK882KtxBAQxNxpUUqE2891kKt5FbdxWrpJX4j9kLuroNynfqZiauc1Srhua5M2AVY",
  "key24": "5BEpMsvp2JhewBACgRdTbBCRJwrJsUPYyRH8mh8eoJmecWtJHPVP7ssi1iYNojgu1VAAR3sY1NtDgmum6pQFMEs",
  "key25": "3ojZtN3xjtaH3BVQXVQSMQ52oW3pUX6x71hizE5yZ3ybWv81L1pp2TDtdhUpVBpRohfvu5L3tF7S3QxrNtQf8rd8",
  "key26": "qMrmWTWBAoUx9r1Ds7ZxbzewdsHam9AZq9bzBTMhUoFre25Y5FVYN2LjSP2y4exFbwmRYEgKgoTwebrJjfzkDWj",
  "key27": "5tGdhh3ZSqqYxuMNeRpDLstjM6UcxNvj6Ayhc5WFTWJRbee6CCqNKmFUGkFGPJWP1mAofedSgXN9dTcwPTkf2sBS",
  "key28": "5MtCcyAHdPg1UJq7mawe1LQDJUQ1WyECB6N16De2kFKzi7xDNfQuyjZcTiqxCtoxrMYoVx3bYpyKjXGUq7DL9V7o",
  "key29": "23kKUP6HsgmkEiVBddwBP9Bjnoas2r7zggAz1Pkd1t5Lt1yrNx85Cw4a3MEW2rFZJgDXdDNVS6ghCrkkFWZMFpcD",
  "key30": "4aujefFtB5a7RNE1yDnpJtys2jb2PUk4UnCeTrdNDiCCnFWs86CcrVVj4mHWark55wE1gAo22zLRREtNBsFg8kZh",
  "key31": "291jPLp9DeFz2FTghE29f2Dk9n5RGnWrDopJGhc71evzBhhDBiWfnQDvoHiDGkMNoW3kMGwZyy9LiPJW2DJRfXrj",
  "key32": "5zdShWnhwWrVnAbdWHumspizH7bG8VMxsNdjYaWw5NgfbzmAedr53DxiofpdFgk5sGKm7fAjyMi4nT3rEnvwARTZ",
  "key33": "LLE41NNA9DysRbbR2RrCW3JJhbn6QocGFiqg9P3T7t9Ccmph38yKbpFBZDRaBCssiRWDeviuw6BWgj4YzSkKdsT",
  "key34": "2eq5dyGnk3yEub8Jxh9cWcbiRJGF76XzXN9E4EUpHqe9rJ5vxNjwavvnp4QrptwE1kPoy6LooAuALaeNycxDQGsh",
  "key35": "5dEXnj9evzfEvbDvBcmwJnnF1pthPzvPxTMANoPodXeJXoU96HadYnBhcP8L5rVB57cdgDcsbpsg6KvQykiFGgg8",
  "key36": "3SAnzoXxLWLJRCNuYyUD7vXLS2FBoX4kBZwGx7Ka8mKe5a7E5tHx2xBQhEJRTMeNDERsBNTmsBu7vk2mVoiAFvKB",
  "key37": "3bhuipTppjSL3N41Y5Y6PP5CkrGKiPWnDA8gPozCaVwP3giguFwGh5ShwoNuKaRsJYFM1vzwe5hPM8t5EJp8aV8e",
  "key38": "5ZKmQRjajBXwzE4pfsZSiaFJB5CJXXnPekzFRMrxNC22uVwFEcmpDJw5eSKqzfgDR2inud8yauDCrwEkZFBVt8sr",
  "key39": "5vNZcsTNLysAwAwPuJPTU7cKD68HuqX3cSY3GfDEFuCifaX2Z3QkwhkXQQ26RiiPgpJYrB14tueC1wrN2NycVg6f",
  "key40": "Laghqkq7nkvLsRE3fvpt7kCxMMo8yRyh8FokNYk2PjYLUDkdeyWb4C2xAGuwYFGfNZ3djMtqh4ZzsTJGwdJyyA6",
  "key41": "2Qo9j5QcKfHypckfP4XRypAw1d5Fo1zEBRYmsGBNb2hfukyRLabG85JA6ce4x4MKQLrPcfV4AdczokDNG1jDSBVm",
  "key42": "YJMQrqsLVSaS1Zqh1mZP7rnUqwvwDwBptR8qRAaYnT1rrUNvuQ1n4HnG39BYGyxbAU7GoCmW6TQPJ9Q32TpPS8v",
  "key43": "5915YQuodaY7JutP7GytAyZ5en3T5SxVv4dYVQpfdmV6W3DUxjRsF4x2bmZkQBrmPo2k7KNYMEvXK4Ffa8FZ7m9w",
  "key44": "2SPesh68kPwKNXqmgJJEp2YDL5QoqBwA7W1MXKsWGSBSX4tSCERWWJ6ZauBhCCaqYCcw1DpYXXE3d8aLs7tZo4xi",
  "key45": "3aFxNSfYhTGzaVztt3a16FUHfv6nVVeb8jsVrgXnbgdJsRoar9F18pxKsCkMLrFxP4W1WUMWcZQUQaB4mMVZHfjL",
  "key46": "2eju1SgC6QQwZfWMUe3ygbpTXbyiGFaxSzaGp9aWEjquxv4CDVqaXf3NwmqcqYQ9WTPL51bMowRshfwrwUDngnxi",
  "key47": "2WY6kkYpV9VsuiymHDZKW1VT1r9pikqbEaGsVCxBh3eUj2xViqqjau1cze6XKd313CvN57m18WUtM7pXW4YHA6qD",
  "key48": "3bdMxQAHpPZetgz7cc7D6tXRT9TjkFdDq5kFVevLHMHjp9TiYiUgDTK31UnFwFBE6kmYoZRRF11hDtjzCB9WZdfd"
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
