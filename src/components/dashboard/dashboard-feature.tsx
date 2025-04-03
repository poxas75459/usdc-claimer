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
    "3uSYgBdttsE1NJ6mynqbnvwNjTHoyvaWbXjmS8HFXbZ8EjwtTCy93q5Z3SvQWaCeSNPEvbbpPZTgC9kBThLyg2fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26LrnuvL4LgxguSWmGKDWCbEvVu9xo3oPQjn1tWC8Mr11oQa5C36abKHSQKks9duiA4gb1bPK9aNNXUaJzZYuZZ2",
  "key1": "xDnxixCTC1zb5Em3QRmgEuaYaBrW2bFrntnZGyLioBiLVaR2cpjUS1k8CqsQY2TqEVFnv7sP6vzFgtwEvTpo2No",
  "key2": "2x79mHZQkF38TMED4JcCFPM3xCNQK6LME2yyVFpwJ6EFNLtNpgtKJ6q1NEbGscMCsXtW9uqyuS4vwUoZ9ZEwv9Rr",
  "key3": "c42q2t1dG6v93h4WowC8QtrYLVcmEzjC29YdkHJeADJUrSUyR4ApMy2o7gcL9GqGBiuvxqCHyTrk4hxWjhMetgs",
  "key4": "4JsJBq7shqCiyveoqcvyJzH4nVAi9fnYR9u6YcpvHHKUBnTwX2JDCXZfUhn8vw6goooBW6rSvG9HZuSWTtpjRRgd",
  "key5": "3PJYf5EznWSXuMdawWwXyfCEsQArnLX3Gxisd5EPa73DaEuFqS11o3bttRvLk7e3UnJ4YsmxAu2YJjkbZz1xbJYU",
  "key6": "UZEtob22RFrm9t2s9TnFxjWqXrAu3nUyGX3NigJjkpiyavhC8zjgaC8mPRiqQEy3Q5d93vW9J6y4LpxJy2Cs2rm",
  "key7": "3L6eL8SuX8jPyaQyJpQss13U8GdRmMbzkNjV2c8h4QByBUeMgMnFocTWjZXJ3jVbXa8tpNUq2RhiVP8m8qjsWEFs",
  "key8": "5mtafKsta1S67biA3cbYwoJpXwCq9DazLFYowH5fgB2snRdEwaMftymftP22ZM32shHpHQ5uWS5ZsnJrYTaRpoQ1",
  "key9": "2R7sbdqvpeToTDYHxWVV3KRh1LtmhyhoyGYaQkMpkRqAwMmA3JKnhLRT8kNciDSKdjuJsEtgDj3NhKYwBh8ngGrC",
  "key10": "5czb3tJyuSseCFSPZmPZPDDRXE7gyXxSro1G2Q72jCeHWgdYbnzVDPZ2veNUt5vp1RSzZVzJNAmmXhuiTBWUghDA",
  "key11": "4pFz5d5PYMmpFTHhTtUBJLRZ7MtgbiJEqjURUJR8C6KmQa7B63GXh9iBWYQRk64TRKGhycCvZ1j6j4HF3WPF6ZJJ",
  "key12": "4MSLXpYrh9aQ7F7eM5P3huNKX6CG7yg9pyX74DeVTLwM2UhHavmzZ4Ei9x2DLD5X5D6AzzHeaR5QNWWgpaWVnTgN",
  "key13": "29SvPw1iHPNvkA77fRpeUcxgFP57AoSCfxQnai2GPybwQ7SdqdQLsRVsaSb5bqCmQ6mWo1NmXznXpWUHmzsAD1sX",
  "key14": "4xFW8ALGVCprSAMym2KWY24TEVG2vbeAsDwjWtbmDSpLEPyxrGRmWQaWhbWxpmWgYvvK9qUoub7FPrC5Tz5dYUVf",
  "key15": "2JfkKLShTQeySEWSy8n8fEa22dDb6cKmY47VDqbKyVVFoN3R6ow4Fq6cAZP1wqTWC2Lq3xFaqTUFFjZz5tssp7EE",
  "key16": "3DDCeWBLCkiWKid9DHtT5mbfRU5p77VuXJ5deuXB6MxvD8vtrp1XBDnMGq8GPUCYJT4io5mcYNLySjGmqHaRzvSM",
  "key17": "5xqCpCCcfbdSxheUhPo3gZsJttTjpMefzkGe5iHAfQJt3vSXpjJ3BsSTMZXmHyTjoWYZ96f2dq4njLZqr5Gog5BQ",
  "key18": "5iJTSwbY31WHN1a5hRWM9AbnhzJjKdhxmggVQWe5SD56SwBYfTxpCS8UpHtR88QQANiEeXddkzBEuDcfCfzs1bA5",
  "key19": "q9aV7TV8f3m8gq5zFeqv7gNMsyQGbscxPviH4UgbFRu785DU1AcqaYbNEh28QQ1aDJAdEkqAUkyZS4cShfAcB2b",
  "key20": "4y1f1rzUxNCp74Seyg56KtmFSzF5cj6huRvWB6RvY2scG5X3hgB3iX4THaNaXyGik5XXnf4YSEvLnGizvpHK9EgQ",
  "key21": "2xRhZDBaQwQPPx325VbugPHjT8yWTnpG16xXGv5F3xn25R5Gcb9Q4pTdgec8GGd5job8udQpJnXvj3jCzsWT5JLN",
  "key22": "4fWeBrqEF9KYmdPyyQhSPvr7rYuZbxTPybbK9UbtQzGpEyouxSdgmegxFUG78UBGf6YTuiEdLt9JSbFrNfxxL43H",
  "key23": "35xyqs5hy6sPMkw5dHXMQc2sPoRaMKGSfUrE7CkggaqkTseqhZ2FAfgU47v7vMPdEHHvhe385S8i95F45hgA2ovB",
  "key24": "3z2azNhrjYKYZMUHjYfKcaxtXNfXRqbqXZCgTcfPjnLVDSumNyT9MPWxTtcAMeVLnRJHggU73uNUD2BKcLZm9Ycq",
  "key25": "3hYnb9iFL36y1Gdai8DDWeVCguw38knRxaHqq1G66dZcEGE9ffpQdFRDkmB5EGEkQB9K22RNUnSeeab9QXnK9csa",
  "key26": "2rkxpYPt3qG19FkHVJfyuehhgVLduC6DHWWW3H4DUemafC84RkjRmwzuWdoVYTNUa6P6TbW8TidG5sxN1v6HZUDZ",
  "key27": "5vzyEtSr5pwBLESRzpxnZaZXEZ1spEFqX14E5DpHLoRyKV6LoEQPJjbQCvDYSA9A8sdWP8VgGYpxHUQsZWT9SzHh",
  "key28": "4KPGcUKe7ugEG845A3CLjBH22kVGE6UF4ziX9FqfVGdrvBtui1DCTQ4EtTULS8PCY9r63ywEkUwQ1dTjGmhf7sMQ",
  "key29": "5MAjUg99mhkwmET822S5X7FWzgAZAumsNoFWSvhsDbtbvNUvbyaLd7HQkiGsj2aY8N1jKULcVZ1eZ2uawNePvb1y",
  "key30": "3x6Rh4wUvEd42QMkanuySXqjySdgnv9pBAPCe8fNWFVHNvc4bGQZvcQ7ZLkmUxKAFgV1Dues74FXUvWqBjHJbjYL",
  "key31": "3hRFzA55hsXV33WNMG6S1XRPAYZ4PVurFVMmaEGs4V2P3cM2JDZxRYkA7rE8C1kRrrQjMTVcrGoz1hvHkmFkbMtn",
  "key32": "5mM9Gm86tjyjDhfw9ZAPKDkVmXMFUtzoxDJ7k8Ekjh3hWs753V6eSgkmUReyTjfEVusSwAvUcUPbhbsJwpGpori2",
  "key33": "5Y3yp2CvyBMuGfzSnbgQeifBbgA5eewMZrjwiZ9q3hQMHGGyfFk574h5DtCq8DHSxJk4CaddkaWDLLp5s52tjWWr",
  "key34": "5NVRJtoPm1HrfXGLumX1JdnuTu2SSqWk1Py4VmY89K3in4GW86BTQBTCvrpYoqBhfQNtTew8jgLUogCs8uyoCdT9",
  "key35": "56ausVzExrapo595mt1v5EGkqNcwYV63H7osMGRSp9fY8Ed591FVp9u8hR1GBfMTD58cfPDbnA812guH9DEUdADT",
  "key36": "3N8EHPbgTxof17xjVsedEcHjpNnVtza8Q3HPHKwtRswwKkEoVRZJXHqe2s5uwYLK3RzjAwqPAPxdHKgvb3sPNWaf",
  "key37": "3t3hHcLCya6vbwKnkohPKmGWyvN3bUb8hiet9f7VUDNb5Ka6cZH7pgpfpbiuqsGwdiLPAd3fpovTHdEutHVcFKto",
  "key38": "4xxiobmL5SDRJ2KSajZ7iWAeeNCfq7Z1eS4ybp6aXuHauKd6CF8FkHm6vyhjqYWgrBpa3PvGnbf9H5DwecgvPvVQ"
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
