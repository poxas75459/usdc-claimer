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
    "57JjC87tLaCmsN2vvLKEGd1YfyYHPo6dTQG6S2623oWW8uSNp48EbrXnQBmCjYnyh4RSnGbAdMebULtsjT9KoyJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pAL1djrP3F7mAvTdzHzLhLuAAzJefaFwKYLKp9Jct8WkVKXpox9J4xKU8zT81Go6wfGVBLCY4W4pUquTBooyF8G",
  "key1": "59asKR2KM79gbFj4DG5YWjF8cW3csEUWdFeYfzeZr4Xf1Kahw215S2KBb637pzuLnNDJwToA9aGR1TWggrmEZABL",
  "key2": "4wsRxGJQFqEc1dfAhgUV2P1z8hxLwdU3qV1Gpsjr5tccrVoyR5v56J2Hc74pZAuosccUeiBHxu4ej7UjqJHWbZQ3",
  "key3": "27YgituihSDytVKtC14Vb4stWm5WzrU6f8AJi24ioVbiBELHywnXmTqzAXihfLcUmKm7wqzrobLX9mUeLeiaPaY3",
  "key4": "2JAui16NZdN25Gx9g5Ts4jatjYhJSoAaJarMK8gFC4byo7GqKoGgiwP3zpuypmkdgQQKEwPuWFZyebzU53vRWKTe",
  "key5": "2JThKaRQorUPAdEtpVfp7n68hKvCFU6pAD7TQp1g2HqxSE7t2Qwb4mcumywMWi8rE3ptkse1RqhqUJHt8DvLcsvK",
  "key6": "223SBTZLEkUzgE3Jmu2MGk1GdMUCSAJTdLaZAW5u8mrNwaJ74wafGM9qLjFApmuaMMMvK4AchxA63m7ay6QNGmCY",
  "key7": "5TE1htB4KiJ8JxwWzommsxzM9LjKAiD6WMHwPPs6t9FAtMLrXCFzZJAB1XXsNuf59yFEeLmmxvDrtz3s9pgsN4wS",
  "key8": "3necV6QeHSJ598xp94c9WaXaCNK8DgqdxjBumhAKhDjWyUXTUXtHWiNhhJQrphrhvGbM952EygYZiK4pUrRqXyj8",
  "key9": "t12KHMsd5MzJNSzjJCfa2bHV76J97XJuuvqfha5WBkDeAocjpSvG5c5QLKufWY6b4zJF9diraq8L4gqaApwZukF",
  "key10": "4LFtP5CquyFfaE8d9iCYpKgB2sbTNiaaazfNexnTzJXnFp3PaEtQCq3YfxFKfiPEi5siG4Q1AFBiJFuYgK1ZBgmJ",
  "key11": "2voJ2CTkkxivq18nnkPGUbHrevsQkAr6ciJrzJXXrYsxwaYVWQNDPbBjHZUHCYPWDhUP29zo7ooB8TpvuoCcaJdE",
  "key12": "4ADv5xPQF8NSuLAWJgWn7EY2SU299MJcjmiQyzxdn54JrBMZ9VNKGCwJ5eXG5kCXdiEi5Gd5vVjsc8ELxmS6AxV1",
  "key13": "TZvmEsvMD6xqQ1TqxbwkfESGHrWBaFW6r8NsqF7KXH6g97i9PnenHmGcmG16kfqzjAvauLbXD3fzncvrmGZRNQo",
  "key14": "3eZpQNcEsxir969SFV534umA98hvzPJJRi7HzwuCezMWfrQm7rkgLK2JiMGtKizRXQGaBeYTCqjDpB1DsE9jjAtr",
  "key15": "47G9oJHAd18wjEQv9URHKByfNBGZh9Uttbi24B5PJXqSybgdq69r4PUjazDaHTuiUpvutjGx9RbS2p6M5dxEP3aP",
  "key16": "YLjr6GBYRDm5WrNuBWpn4ZNiCBNBbgUAftjLsjJ4paJHS11ChHGTKvbepbEf2F4uuJ73nm9tnzbfd5zq4ZxPXcf",
  "key17": "3Wo6AbAqmEtLN5237SVAPiQS51pwxXBvFjkJZbBJJqSohkSnkLARC3fW8nchQ1rVSb1o95GmQ31ztcHt2ucXP7ZN",
  "key18": "F4qRr2XnZGjhnKSyTN2n5UtuwNH9YH4S1nYHU9xQXwfvL5dMtJa6yAscvKr38EaXoPabQszsXJ3CjFmVw7HFJzd",
  "key19": "3kLCa7iiY7H3KEo1LtNUkf7AX4LArLvFXRR121JKtBs1GpjsKuG2BYW6PXFtKyydK7gMJRXs9cY44ULuPnNrLDtW",
  "key20": "3kUoQbcnpPQkZNEoDBxswrgMquHt5hTyeB9XT48dAeYc76ryQy18vimry2TbPezVXdaW5pY4nX7EiozaQdtkz9KP",
  "key21": "2dBFuEW38Ux4sgnuX3eqid3THdaET61oJUFYgKCPMyb6zP1gqHVxwpbiLP4Eqc6PiuYT5a5T6e8337KcJKp5KqGe",
  "key22": "4XYihi6zcjaybN1MEuaFdxKxB4jGYzyjtpzbU5adWL7xHRrnCndmJioJ31e76xH4S1a2vog7hBaQ2GJjLWqFgGV6",
  "key23": "4zcCXRhAe65dQ8iKkJ3W7vRBjg8DA6Suxw3mjDzRj5dX7P81PxWoiGjrmkYZgv98uZvMPJFKRhmqrhjfY4Lrb4sx",
  "key24": "2QsF3G9dwtjukZz9MTy6PL3y2t3uDrGjNcC48hkqczbgV6QppTDwASgoEhkYczCuuweRAeS9jhe7ZCkhjwoTbLJQ",
  "key25": "2YPhVqdMrkjjqfDrBSFtJVjtvRq8dpcCYJUuc9YAAvX86Fgk8WkvE7tkL5NGPJh57bpExaMQzbEpNEtmS6Dg2ZbP",
  "key26": "3NHkgcrH9fhJipYbfjgfFPCoW7LpDjEiRiyKpLhJJyvQEutXVsnYSHijJmXoHWQ6ok6oW1r1cc2D7v5i84DNXWzF",
  "key27": "3YAD6SGZFiuTy3AJE72BdjqLzZXLPKSWZN434NdwRua9c3AzccqELgPwio97KinAG3Tm1Zo7pa3qCetaV2seBnLo",
  "key28": "njwCV9WpYXuFMDHV3aZ7Lzsve7y2ioAMhNL5YsZPuEeNxc1tNWariowAvLw2VhVLxgc92rYkyic5u4rvcbGQaCF",
  "key29": "4CHNsNuThNvjndmuuf88w3AA6apJAK5k5npuPkq9Hed5DESof6CnmkuFdfCjFbMZvENKE5SX8R3Ak16aGWxdytyt",
  "key30": "5TQU61Y27byZMAqEhhrYqXjf7W5h5Ldsb6teVaVkuueRVVhjZHLn95NzaweDMJRr8j9gmFYfAkvjdoWVC5CYVoz9",
  "key31": "5AyRVpZkorPxpQgF6uBhFYzg2z7G3ZcmCnhnADJcbVJ2zRm9YmZeCiVVUYK4ysh3Ej4kDspqyGe31m6BBeFmm7SR",
  "key32": "4qQK2iA1T89PokbAXQiCJtVEh63LY8XFC9vavxheWbtwLB9QmdJwvZzUMuuaqXGo5mVQTjEiwHnExudJ1bAiNVn4",
  "key33": "2XAM4pXThybqt5NSxpCsrjcEJurQjqaqM3VLfDzVRJW3bgg1ghRCCsfYjnPigKpMnBtdddCkhX3Cwv9iwTxzyfHw",
  "key34": "yXxKTf3ySG7cGJ2yqgwqn2BghavB73peAyqYin6LhUJpPByf3rwQXxoM1VZigGyDt6XUKbvU4FgP57tEeT2cTCJ",
  "key35": "4teFD2ijikkEbJRw7SwDzn98QtyfNZsqVnCZXqQeGzSbodAuGEdks7NNkKGHupPkNYRu7HDiJjYZjzsX1hnbJ1kS",
  "key36": "61Ti2tqY8KG5Y8kMnA3yWf7cwKKCnTTmKFjQV1V1YPKGqum4G6DbU4L8LwWuS52QkW4hxV9we5E652CJCjLKFGg2",
  "key37": "3KEDgDVh38bFLiAb1UZycxfQVmjbLXBjmKEt2NWP3hbwnEnDeDip9Qd63nUcVDUJxM97nCrJGSxagHNCpAnwVAMm",
  "key38": "3Ay78JixkBGNyXGwjFC14kwrGDcc7SHoygvH3DafydrRKY8dPo3tzjN6XQdsMnyx8HG3xHTDtXRLBw4zXPQFoU5p",
  "key39": "3YPupKyMkNe1ru99B22Cfv1yfds2tiU2LtUN1DEnohtmmwSRVNrCQKNuPX3YcJvDANVYEXJzwKotQCeDAGL73qKA",
  "key40": "2wr45opLb3ebVHyLw7Ti18DMAmR2QBCt1A7Px1cwgsF1tzYoGePtLzYLr7tvBXAiHc4xdxJfvAW8y9SRNE2ALmcL"
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
