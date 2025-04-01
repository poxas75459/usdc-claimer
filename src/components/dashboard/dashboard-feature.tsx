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
    "ZLdJCJqR9LEh2xer6yWsCYEFeckWmXU1cjFZvQkuLd4i3GgJooW7G5usSJLWzjoLwyYJZ7pXJGLVoZFKnXFy2df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24yvUx3aVtpMcDZPucmdyTTjsdRHygH4Uqs1WTrbVhcpbmps3XtNGyKbHznt5FJQvMZhN8TmRFj8e1BZ92zisvhb",
  "key1": "3ZxjyafUaQa4JiTHV3uHbjDYfHcK7TytoEzsnB3GTxq6xhhkgBUvT9oFi4H2ieGMi4sZigT9vBkom2L2CRCRoSbw",
  "key2": "4Rwh14LmMosRNhSfqbfFE75TLf9N8nSerYN3zq9Qwy1yG8C2jFsePjcS2NbbdvcppSVRKbGCPuUtEkp8WfQ41JUS",
  "key3": "3Sc8FCfm2kZoHEG8sWqa2QKZfS4dVZdt1UKrxvpSNm6an5rJxGKowpJdwv3TENexzBRDAHRCrzkxZ1CLLaq6BVKg",
  "key4": "5s5HYAM3qizCMehJ8oCiK5U1JRjBQvKK7QtfTxrdh9NF1M5qpm14FtmrKC4bqS6wUJN2mGwzNbrxo288M3XBLoMp",
  "key5": "2oCgTvVpoZ2HHFaDiCJBRj71B4eEJoyWbyhjpbhJVJLshvRejzDVCvxe14FEUsaXYBLuL6FFDKSFJQ1qLT7Xc2bR",
  "key6": "4WABPAXmtoG7JVCty6uVkjGfVED7eJNZvwD9T2PMkxiKo4fssSEsJdV9t8a6zdAFtWo3oTearJHadWgCP1wTi5FL",
  "key7": "4iJaTyMbCBVHCkQWgGK396GaRomajXDXEFUQGU5ZsVsKi1uJPtStcV4FNbQLcD7GeTZqXgK1uBieswmbsyJm8dJe",
  "key8": "4UdQGEzg14adckYckrmmG5VELfgdceJ9NGSYHsc2XuvX8CtMbV6XFd4h3BDadQh24SUfxbCZzeH7nizMoeE4JsLS",
  "key9": "65ZURHi2o7K4Tt3mZ8rn25BYp69bqokysuKyY7GvxqgLVJpKQ3TKEcPsFb176RJfcbaqvtyWCgAPSr4D8y2rnQNj",
  "key10": "4nd2AUBGFv7y6m1HCwg5Wd2CBM66UtP1B1tH3jxoZqrWDEu18DmCM1NT2oL5pNZC9XKk4PNWjpH1ZHvoVAeQGTNf",
  "key11": "5hc23diY3Fsksf4bjt3VK3ku26nyUs63qyphHkDckqCw1J8eqNpY23Qj5bb1CTkXZYU2NF8ngSUS7AFVozvyBRPC",
  "key12": "63N1Md47T417mcBgqMUiBDchsAh81nCzbkViRmSz9DhZziS1Ueo5rK9Em8pLQsvHVHUUfCVN1rho8V8GzGBYYajS",
  "key13": "3zTFXr2zAAXCEazz1sBKCUJC8aTz1i6JcBEJ7V2my1Rb3nmXERCm6yYUwnFqsGHbBNmjq931949JqAB3hB4o735K",
  "key14": "5sz9wxSDQT9vyqfDdgnFcz5Hvd2mejNNtruQpSGgzhS7kcyXVSyoRahDNM8iMxBjBN6c7dTrQyCuYVVW8XgRW2vT",
  "key15": "3wTbi92gcLyc5VNypAMdjkQZnNGXhrVmCsLBRwf7w2CNyM92vR3nEyZczwAtJx4L6fttdcnjAcooEmGxQFAq1256",
  "key16": "461b4aezUG18XtJ8NyAvvXrvEazzAmLvSgs3WjDBdDun9cJqpco6W82kxuCQoHiMK89r2RauCudHUhw8ZLdeFswf",
  "key17": "3j7xR4YyLrJ5JGjiFPpxPkbhTWMs5twt6uk2KufahFiJQoWdUUWDwcoezNjTKgGFzGTyZr3useGy6KtRBCcn6zVV",
  "key18": "qTmsvVRXguD4V9UWBCKBdiGBM6zFFNoD6NrFv7CByRzWKbxAgZLimibMThNin6UErr2UUwzbq8mnMUG3HQes59k",
  "key19": "3stXPRWp8onRdn1X4yTVZrqec8jcPwvhofi7tR6fk2bPjAP9Nq2YiPHpzPfwSx8xPv3jtMPTYzAaFStcYrqPkSf9",
  "key20": "QBgYB8cafPBovrNCbx3cYD5aFjrLQrmhijwpXM2BSAfkuRYw1FuJXD2xdvy4koTs5Po8vvPxqfaSEppnuooChtN",
  "key21": "ZEKsjpkyKc5TVN9fiyDhXXhY6mdGYqRG2yDcbuGK1ucnhZrFwkpRuxsRhf1dA4NWyWqJa2bxbFY8RepFZk2Usmf",
  "key22": "66scX148pDZMrY9Xc64adbiuSBKBW4edabZy47gR3PoXBmM5biFwZLUdWfJh7Pw76emW4h5baK9obV1D2RLnDzru",
  "key23": "3oQ6rRqBVn1uPb52de3qo1vmt3PKw2Zru5NudtAFz7Pjtr1i1mtB3mx3npgksHHhtuEJGuYLBEStLndpaFKXVkNj",
  "key24": "45TJaP941H9ikU6dg2XBgAQra1cP2tx1D2ACg4KJ9Fs7bBDMqApoorpwv5xnDZFxbDQB4ScFRYSSs1XEKgYgdik5",
  "key25": "sjSdEw4RMbuDiUwVyoHHnD2EKLLKfZ9KD7YYBvEB5yGV6493DZqfDx69WTx536eEwgraJ9nmHc6gvMb36cNojqA",
  "key26": "3xgpCK9Lpeyus69i1J968poDBCgz7oa3DekN1LPfaDUA2AUbMVjy5Sg5GwV2PHGteNkffXweSVWm48dqwXRZwcfP",
  "key27": "5G4xJcSFYHYUesbfqbwfLkdwmjNoN2s2RnuUdZiFJhSKUBocqhjV4iBZ6NjEToNChHNcjiCepvnupr3qq11hBL1Q",
  "key28": "6VuHbnbwLRdaRCj7TgBPropCidVMWP25MFy2eVRuDFXutqq1WFp9jSgJfZSrDnnPQBFhP7jG1FXvLjxzfBD2mTu",
  "key29": "4devt9ZmtRGVDB9UGKDxn4kuWFvJm68QXJsZGbgtVFUn7vnqU1YVzk2ZNeDgsiZjXBibX5mKfR9N4rAUvNzNfiK3"
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
