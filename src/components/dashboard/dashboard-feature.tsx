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
    "4E4jKpRGg64ZH3ry3uiXjRqg5Kdvkfih1vLndjiCRbPYHspkJy3HtWz4vaLQABdgYSatFeZb87R58SJuCnqEMahp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNMUHqYBued325SJdWCe4imfWKY9Aj1DT44F8FeMZgqSKiYzBe9uKwXEGaCbq8sreooFdhXvPM49jnR6Rs9QuGz",
  "key1": "4Kxe7QEZ6kpVc2EAUgfFaibwY8nzsEohMAJgGXJJGLBF87fTLPrXWSNjVx7wNF6d9QZTbmwJgtvt4mv4tnePQi2K",
  "key2": "4nNneA9LPPJbb5Y37669ywKkNSaxREPV6Px2Q5m7v7oEiedb6tmt9oBLhaan2oGMx1Lu1yYRnjmRE33sWux51dqj",
  "key3": "2A424xfQMSZxSLVomjRXii21Lq1F9RDbBbHFLa6cjZoQoUZu2Ysgrtdsr42C1Bi8ezdskt3hiG9UbLHu12qyNkuq",
  "key4": "2q31Xv5DaL2LYCmyLE1kWN72z8eb9BMYK7FzP57ZKJHGjutyr31HMewr1YCWVXcznTAYmiZMihyzWwVT7ifNA9nC",
  "key5": "5pxgp5q5jSGXSzQ1KHQEHjtMMeM5qVCJM9BgV9ptgzhTjtcDprQynUPqbkfKwmQxxTUhowiAS5DgjJLrxmz4dXQ1",
  "key6": "3QKD4hpp4x67LEoC23ds62AUZjVu6GsgKUbDTGsWj1QMkdZ6yXK2cgKmj24Kq6pqs1YYZimsMQt2Arj23H6UbLVR",
  "key7": "4LGisFQEinokrNSZZa8sk3aGFVjSpLF1eANranmHbCYfJUFkoTGFTyuC1f693ttBT6XB2aFVMhkvJd2umoWN4jnf",
  "key8": "3bMRa1CzMDd9bt3woKH5d23LkSSrXr9ARW99DWgAtKnxA5R1B2mr4DixRTcroEr9hMK5vFusivaYcHagkVZkXQQu",
  "key9": "4ErFPNfcphKdBghUUJryTD2jiRiYrgv2H3kBXyXH8jHsYw69sswuP9v3nNtaneqPzpoQnvHTDT1uz9cuueKvRfzg",
  "key10": "3jspDkonjEipYVtWdip6vJnWYB7ptybwZy3yJ4uY1uKXP8EaFk1XzHARHkXnUMqyhw4VkuT2owcoAveUim1cHCEC",
  "key11": "fVR4GFMSnN77r2jP4dXAJCvBeikkGK49AqGXvsEcWFy1SYE8QsC9N43MtjRmnbzH5CuzETnpVYVag4yDCWUMDdJ",
  "key12": "xuFwsH2dzAyFTBkUytZgdLs3qT5LffTcogk4KvS3pd9rCRw5CBAU7tjrmoZQ9eZy7vYAs58vbfJTewUrazWTRPM",
  "key13": "4Z1x6ATn2xZXBhBjkGwmCM84XyPXurKcJToMukmGsXwty8fyDpfU3zXnLvPgUEN6KrgXHuywL838oan9M3fpuUNh",
  "key14": "3usCqMM5ve8CCBx4H2scp12dQAyXsUnLUUbkYLqjHegEPX2f4yznBCx5NnMKBzvsu1EZWqnYFGoEueAArBfYmAFv",
  "key15": "3dkgAAoesnUyjKmhihQ1Vrmr46ZbtHgAdDtyYBYnrKprHs9ZwYZenGc7NyicJRa3W6FygCTQATTuHpFhqVy3Yjv7",
  "key16": "4FCgAE17MzQH4KoXf9LxFMEWUhaQM2aaboeC4gePEDxhMJLZF7fstXA6WuZ87AaWxJYoFxMjFDqpJbFiWjvP9SSW",
  "key17": "2NgTcmyHhqnmnrxS7Sy8aJEKC8PHQjFo9GoYoN6koY3GamRuEuVd1Ur3KFBJjz8vbqC54ytkVuTKzhmr9pmVCAfJ",
  "key18": "5F4UxD3f9ueQaSZdad8RxType7bMkj94TcjdwXaf5PSkeZp5YYNMwXkhYfsdy2bzy6GBD6Vw2BhgP6t5UTva2VNY",
  "key19": "8uA6bLH8nErvBVLG8aCoQej6xYasELM8dkvdyM2MXTLM8XfXHAmz8CWvD8oBNhu1c3EmvKPmcXvNVuYpMWyRksz",
  "key20": "42YgsDMeNr5skdhq9VW5XTCyG434tFC9VfoD9RWCXxSYzyYg7WRxhJyexsb671NV7wu16Uf9QDMCXiGV8ZFDbCRe",
  "key21": "2VYRrjP9gQQ1z3gFDpVzmoVGbcMG8BXoAgnBZLPoHXVVLsLvcdC28umVFhzmZHF76eW36E1xmXoFsRfyAXAfyH4u",
  "key22": "2LRnGUiiWy4hdug5hdvnYm8anVb2PEitZ3N4UemE7WuMVwaym2rjuR6hiNMSGdEEjRMtyNBL1PkmNh2ggszkMxBv",
  "key23": "qmUchxPAjmrj4mtXdMePBBnSfYMXDGy3D2Z1ashWq5EU2sFnDG6w66GzqzP4sVrxzboGtd5gBEYSh6CrTejXf4z",
  "key24": "2sJuN63iHj2CAnNxYoDD7zhEkqbQS79NHibYQrEKFXyZ7rnDJumDofw87heFqcuKdQXAodj9AVDH32xMSxKKKMPi",
  "key25": "xNg3kfzr6JgWvxDYwmSJjqcZcA6cJHkbJbe7bNKeh5sVnKyfmyiYiAEqLABZQWRQUMCcxKAX1onEamTFZpw3j4f",
  "key26": "3Pify9m2ZTvy8uR7sjqcketvQHtQiLjxWhFABdXmq5J7MHzoiZZX1eCjd7LbQiDVxfFxknZAqshNMMfRYA58PMo5",
  "key27": "mzedzLQLq7EEYv8fL6ycUf8VUQ1GzzauSkDB5hiGg7Y47bdwkmoiNNzzsLJHSMYXnnA9mvnJbWbvmk1BsgG4qkk",
  "key28": "2WooDZ6tXacn2N66gbtjRZX6LGnLbg4RZQcgDf4cmxy7JFAY3z3CZ76e1kmksEboeqLPFzEHoNU2K14fJsWUV6i",
  "key29": "5R6CVN25jEGq155F5UvpzR4k3dmc9ugE7mFwUa6xVhg4tAEZ2YX8466Bz8dTd3T91MyJwYFfmhumdomkFUYavawo",
  "key30": "2TSre97iCSxxF6uim9qRWJdYwymeFdkUwNz2fhCue5GLAqaDc2rGmxrFr6xog6QSKd2kCtR72rL1n31EcTwaHXN3",
  "key31": "3NBCaPqeVXymLxi3GrM8vkVRuPBJfK4axLiLNnTa5iXHWeFCm3BSRgYKtYyGvxXuUuEFpMdfzKSmtYLDT23iEydm",
  "key32": "8x4rGEkTrrqahiv6NXzy5GATL4f78aevqA3ya5AY5QWS5NN8wjpM5AgDUSdaCwivNwg4zKwHxMKY7w3uky82ac9"
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
