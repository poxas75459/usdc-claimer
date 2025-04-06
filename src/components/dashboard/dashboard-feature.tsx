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
    "4XpYqbvScMDMTTFACC71C2uqWRVVh4HzPmT8dz3ecF1NhM4VbSyVWNqRs1wgDPUxdxj8HzKuLMx3vK7sjRbHEVFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ACVXQT4qW2evvMTTYwVdzRTm3JqAFaFMcEyPo9w13Vf6DNHdjLDQ5Xb2c9K8vSKDgbfWeMaxVt2k95NDkt4u4m4",
  "key1": "4SzKAE2o1FZTukFWwTrwjgL6vxyQajRLqNok1sRTKTR9dAvLkgBydW8JMZSwSg6BbwhtoNoffNsRN31rHQbudF9A",
  "key2": "j8HWiYdANujf8zTVHG5bVnZbWVZrTJ9AcdECC4MsvWxZVvJym57xpu6PxpY2AqhntxdVxbLaUy3TdsAQXd6MzeQ",
  "key3": "knaTmHtH83zcUzkU6v9gJF55q942KQzZtWZdScv8KXhWJV7W1gPYSqj2VRTd7qrpW5B7QdgcYpi8G79zrqWnNkk",
  "key4": "4Qy1K6Z9iEnds2YYBpkHVnRwZgHzhQAnWDEyNjet7rt6ebgGHZ4uYFVt9pFYM3P1T4ihswfe6LQSseJer8ytNdsK",
  "key5": "594caAqo2Jgt19McJeidmCABhYh5XBNhoH41LYqUN2xqo4spAK6ZCh93dfQm2fYh6LXxrXugZToEXyHw9cZ9hi83",
  "key6": "5dJb41jj84QwfXzhvoZxVSz5fERkNmZv2t7K5Vs4Y1HY5bsenkTBcsdkKQar8uauiP4L2Lw2jQHMAstibWd5iHLe",
  "key7": "4xFwxCWSL83duRMi691H27yNjokit43JhcuNbNxSVA35wCckRsvudoL1zCR42UzbUwhCbvveAsRWrSxbTUmGbAX",
  "key8": "49p7Niujjvdjvu6EeAkyJcm8hdnkqnoBFcMNEbUZaTZZkAHk9FUcxqWnGctNaJAgQrFgZUzW6dW9DJoo6YPjuDrr",
  "key9": "2WcEw5nbQ3GXkhTDunTH1NpBUC8P5ZY5zeKAVbBNx2x6xxiK6fjQUfmkJYSBeKHtkC548ZtGLC5BGC26aYxx3i7c",
  "key10": "3xxQu4YErp1h149mNLunPrsgaUN8GHnYMU6pTzERoTZCs1KV7ccryhfZXdKx3ZAd3uAxjegBhS1nVpAuMAjpPqey",
  "key11": "67gendaFJEGYxJQdr8xipJqaQfGmoTVvNJKwG2EHdVcQkGkKJPobt5up2369jUJ1vV9tPhLwtUe9ZeA8jjLhM2qq",
  "key12": "2ekfr6g5b8YthfpJCbJUvvWPMLb4ALcp9ygQMB9YdZhqeqXdqsAgkBefyNfHftBx6fhf2Lppkfw6VSqWPdV4KKiy",
  "key13": "nvxftMTKRBE8qNagZTY4YdoLhLPbtPVSwxRwcZW4BvPc9STmaoa9Vs9951o5CfvX6ZmZvAN2AgHwJHpDa4RK4XJ",
  "key14": "nA8yBpttNc56ANgKE88wYZF32YJdRMu5Lv9doZwLuwht2GmxbvF1W7yZFbMLtJhZQMeaB7pBBQ7rkrUA1hq6AwS",
  "key15": "2NeUCMBi2Yyi8aqZugoh7wWZxBeHtQcq5zgg82kmEVXWcRbTFrUaUkfNUmHDKBTxYgHcbXLVpLr3xnaSLgQXDrbG",
  "key16": "3vgZUurHVFwpPRQhiyA1JExtBiLLiwsKZJ28UEfpfu3oKe8fKbkWV6UQD1KVnqgqYycYDY4XmNFLGrcGnmRjXLHi",
  "key17": "2v3ntDNBc8wtdV7uYN4jmBsiPajVqz35AX8fSS8L2E66dgBbgP8NUu1t18hbv1NxDpwbMCboQgwjLnerswZmr2wg",
  "key18": "3qHyCwaavL6ouaxFAJyyvmuyyPFdoVDHqQmpVbCYSADyDq6eCL2VSFpaBxY85geEFyWwd9XCz3eN7J1WnAzQLUgS",
  "key19": "376XfzmHgxd2JFVFNQj2GR1RFCHBa2ij94YTZt95AFNosXHymGcg9Sccy47zsyRqZ48zVwz6uLgMyoWArKshEeQy",
  "key20": "Wm8SCnubJ2iJuYBSGo2GMVfGZ3UrhSvWxntcmhdazBEeHUPW314VjvSZNoT41N1A64v6jrWYqVKDBRYwUAYeW6M",
  "key21": "32Fv23ZBgFcgyD155rNQmAeFyAn6MQbdjBwtxVYi7uDuE2eHnKNedCHXGqPPxk8N5YdHjTiGKP3NZR8FwkRuZ9dw",
  "key22": "2dxqu2MAjh2uPB42uRHC2qWcDEzm4171ZZz7MFQqBE1b3WWydGmMHkQEvFdSZkSnhD8viHUshvHiaNRLTMBkUjQZ",
  "key23": "5cpcH2ZCLeEghx4wKHP7sjK1YNggWtue1zYWN3WD2WAmMMvrWA63xuyF8JcCPM38gaojFxrpEPN4fTn5v2sEhwqR",
  "key24": "CbDT9dMbGsfh64RH9XQvHtKLdJWFvm3chjYGEKLsd3AUTUmDb5Av3KZ8mhyxdAkviRF1rSiJEr5RVAvDZ6T9YDq",
  "key25": "5SntEZmdVyrJzhHGYGDJdbnzNcjNRhwhjY9PWQ5WheMneAewuspsEsZEJYP2aFFazfqgdAmk4iTBg6FSsrKWTHJp",
  "key26": "YgVCwDEKyQDjQkbKZtCd9nhkux118wedE436zq21KNxmUoSKZBnKqccEtkLkoYzbGWRjhvmyvvii9wMFth4bi1B",
  "key27": "2ahY74RQabWXoSLr8Vf2L9UC8AYQgudzqU6FN3FkKGNCrV5u6dYd2pbSfXhEPj5DWtFrQpEnL24cemVdr71kSFkv",
  "key28": "jU1VKokmNGbuQQpTcfdfgSf2sDV3PoyaaRBCKtFTLgvPoNQNNYUTmmysp1hdtHbDsrysSniJ24PCjtnNzer7qGR",
  "key29": "2PMP8ws1vfcLz2Nfu7AwjwZu5SJpXyTGGxAYq845N83gkzHivP2EFnyw3qCLKXq9LGRNQMyLxpjpHH9cFiTmFQep",
  "key30": "2YrpGETDAC971Q6m2HK3Sdp6LvMxJuAB9w7ezu1isFzy4ELeUbQNv4x8i6Jbt6GrezMQ3ezpxer5dWVbZFGL6Mm7",
  "key31": "UMmWUXVdRoRVMoHmwQChJLFohR3iCRQ1YpJzgDikRhfhzPryehoTW2F1xKGMGusJEAtR65amoGoZSNjtage5MFm",
  "key32": "2zkUVv7e7o822tXGG2y2vbhxAyLuSFmrRYhpFNDo7EzshboPAoSGbT5Y7ReqgZQbPLx4Z7hxge7apdoh9yoVoUMT",
  "key33": "4tXyLSqrVw9vesR3G2C9S4AHwnyPPnpTgAJQrDNG26YpVWijWzPqkzxB17XXg3vhqr7FVThbgktgUo79Y3iL4xkh",
  "key34": "56iw19Wqo4ivYgzdCt87R9pkdHHBuXcX4DBruWZugeniE4wspN8PDwcNVCRgJfSYYm4zvdokox1VHr58HwCfPCCM",
  "key35": "39CDjKXzCue2N5fvKqhv7diEywPBm9x55fy6dWSStbepc3kJFa1wMB5QdCbnWUxAAWuK6AweyUtXgmHvz9S9PRne",
  "key36": "2At8FFkrm1oyBUNLkGRNttfwK4iG7wA6qqcguWpxMYGwAhHwmQsAipcwCUMvniXWYnF2UY7swAWJPwh8Cg8P1U1C",
  "key37": "3LeH57cWhwM3Zv8rsUJu6m5cJMsChG6u8F1hBNMEMmGy3DCxLBJJvLxo6rKv7Mbt53Pr8n5TjHEUvSm9GC2tZ6Ho",
  "key38": "dpYGV8NmMvarACi4exFyciePdL6SoNCzwaxxumFPy7w117YxDwacfmPbW5Fgavf2zDbJodjP6XJzy9R7Bk6N2Kn",
  "key39": "3Dy7YYwnWzdsVcDL4W3vaNWXRAbRDe16C7YWpyyu7WdoX9bd2XEFYRF6ujMnZjwrZnoDhFHQ2RZ1jUMJX2wnmij",
  "key40": "5mxjrasah3KBMFeT8boJkYVi45Kt5EXt5UQsTF4xh79tuANAtU3zybp5pZ5anewL7hYYDhSgVW8rABbJMx8xDd58",
  "key41": "2h4uSmRZe6evoAYXtdZLMPEhJSQtJKRmqEqs9EigJLQmowFFBZNFPLHnJn5yACX1pYFDd1nyCaU5SjDYsqs9QfjY",
  "key42": "3Skx52a91oWYfsj8GJZJUNUUv5cVHtnkWJWii19jtsgeYjy8Gk5TswmSB3A1nrdFmyhAdqSE41VS3F6NkSJoQtm3",
  "key43": "5hKiUKosRSAcS6Z7aTG96prub87pgxxsFfzSHs18RNcxeEhzWybeL44pv2qKH1d7rPEv8pXwH3X6VvwsdaSQGFhv"
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
