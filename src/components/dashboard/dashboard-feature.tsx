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
    "3MzFZiAP95LhkVndtKkdfYhJ1HoSRPsxEngMUPbDnar6i4VwbQH2KdJGstUm9xFYc7oS8F1r9aUtf9x6htvK7rcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MspCip7wnxeCCAFKmpda7JybqEJ7cc5kgP5HZPr2Jk4h4DkE4pagj8xk5NPqSCBrJQ28x6YRY6zXVcaoKcvYkiz",
  "key1": "2JY7JbbrXXk3cKWW9C1VFC3L7cZDvcTP2GdCoSACPVCW6gt2E7zxHLuQLtTjQYQaJbuHQp6z1s8T6qj9KeT17NLY",
  "key2": "GEj9kdggSQR9xoLfrkGUG1YWo5YKtdere5Kh1cbPB7zYWfHx5vYFfm7JMD3JKJ3LuyZvd9611wAQjfRh7355x9X",
  "key3": "3Gy4vWxsSKyqyXn31KCnZyk1T8iMWKVV9hUPb7ZLRKpMnwADCydG3DGg7SDtBFkAKWWAdwtbndWSWvDRLygBnsNE",
  "key4": "59VXPxA6uwQrsFH8KXipbDMDa16dodueKEvYPRUbpfy5GndJeyAejB5NHj3RGvPrBkdnVqdXPZ4n9cPkEbaJ8Lqu",
  "key5": "2QFiPQY84guWRCKg8ueAotvV2R6ogmPKVijYWpSW8YvetpcqUAcu6nrZgVrDmhUEDAwRqHHQSQb5bg3PfdZo7jKX",
  "key6": "3uZ1VGKEkuEgroMAYPyyMiF9Q2Rf8AquzpTsuA6Kag8sooqYoAQaqd7zoc4Lt4RMWeFXP3f473TVPJk3atgrG4Ej",
  "key7": "31s1Prs9vMpiuz9AVUMbNG9B5Fg52RtGio5qr3dvvnbKpqyDg83HgPvBXrtRWh4DSB4xHPLhMkj8SQxM3yz6VSUW",
  "key8": "2o2uhCuNZGoF63TtwgdGwgVCo6s7qHLm2fMDa2GeuY2bweJnz68Cvx5nyaff6WmXEWKdW1FpdK99mxMm6cuoHiMk",
  "key9": "BZSgAranTUUmcx4zxSPAryA2n8wH67Way1nYQyKCrn33rHRz1rJsHFJbJD8rnfqWT4edYmVCGMuirVY3fp2hvDW",
  "key10": "4ZpJ5fs4u2Eh6W8uuca4KxzE6MFua3dNok4PX1FgEG7NsckZLJuqfRwq4y6kCZKG7KVLWH1ipp5yE9VK4puap784",
  "key11": "FPaePCJy9mnDHHy9sV8xunxtmfQtBv3SxLbEiEJwvVBEwfgCtQSyW8DEQazBUmZ8yb4pgZ286jgtAhcNTHxo5H5",
  "key12": "21S3viKBw7x8CSLg3K9P7b4FUFkT8KBk4QxVBPphuwegRoyTKLTrG31dNoTny8HxScC68nqeELu3ooiXjrx4fFBv",
  "key13": "3ns8RLiGvNjYzeXLk4E36baVSbST11fiaGbBYHVZecoUbQopJQUDamnFMSFbXn8atGRsxrwBhLyeEokqyfbjNYPs",
  "key14": "2EBgPsfMacUzHrbfn5UGZ6XvPoAGwBJc84rfF1uRnKzWqjVEViMwb32QbJGeoUAKTcvb9Vb7ZUxrRJ1av9nr6wXR",
  "key15": "4PnLHtSuZ67mTbZ4r33JUeKusJavrvZULSJaYChjrZwLuupikcgw5jsehLFmWgZRL1xsnKAE1NRtTAihiA8BZ7gz",
  "key16": "5i3Pj5fx37HRMAKe9hyzdwBcHdt3vQGDui5PwdJBnN1dYfZr9DxiRedZMxTWj3qeuuFR6Ur2K1Fw7G2vPq1R9ZLo",
  "key17": "4K4EWaV7kULj1A2uFzLXMpeZq3YqCS5SJVu9dJJWQF5YctaHmaDghBWrJvpEfdojXqGpkixuf38zD51AxnuqPJZx",
  "key18": "44A8kHUhF3Wp5YuMUHyEeuKpEb8Dd3zRij8mJpNGHfME7BZQ1VQL8LAaEBvdsPp7SHWgWWtUUtLSENRAmqWkzsah",
  "key19": "3kxt6aDFpNpxbte6wayuzfVLxb2DrP565GQnixGjEMQLCYJQndvyBN8QhVHRQNx4v6s5C7P6LH8E2Z4rLSsnCFB",
  "key20": "2Q4VdPjXDKeBLg3z3HNuiPrkGMfydy1h7YNS1ttnVYuC6BgeuNAbCWZeP1Y5Sw4iyJv8Aj7cZss3hvZZBjsr1Hbw",
  "key21": "3LkRvEY3JqWxxs1PYK94ECi9DVahUeUrmNFpUrc991Qhhy3giEZcRmzzBRmrZkQdP5xYtpg4WRjPXj9daogrER4w",
  "key22": "23F4dBb6JPbriChN78GykWYz4Sszuq8TnY1qFNDapEfE9XVLxGsyAZJAFxKdMo5h3tVLBDH91sUpNgAmbYsBtCqn",
  "key23": "3oPLo2uwc7bBmushnhxWFkwiNscdXPPxAy9uHJ1ZnwAaqVwQSYZweUJ2nkHY7Nti44ERJvzpJGGuLu4WRijEEZca",
  "key24": "jTj8BKG53RD4NiPj8RP9peaRrELEqF3qW7U1ij5v4g1rpbpePvqn1WsMJEYrU7F1nQALKe9MS81Ww7troJtqQcj",
  "key25": "4pKtjUECjZ5rudX8tT1ReuonwmkWw5SxDN619ARoeSgH1Fv2Y9w2caGaPz5P4yTzCAReiWoiAjqFUk4LzLgPSGT1",
  "key26": "pqAGMKSeM2X7q5ydrx415mVxwivLkzhrENTYNgKNrdDQxdfGX7bBWLVdx8xpeoLJma1VBwS1aLyEM2HboaJhURc",
  "key27": "458pE83epe8SEpXmjBGT4t1oTAMf7J7Me6f92p2HxDA3MqkzFtHQ4iap6U8aZ6zYQmVGXDmrASsFN1XD2mLndyCu",
  "key28": "4K5xt3fVQNVMPhkdehSTf7Rz8NE8V1hQJ6jqQth57z5f2RqkqcFvo3HJQ5uCShZ2r12S6Dv8DwmMU7fKtKQCkxFg",
  "key29": "26wTkhzX3af5FGMSQ5sMUEXGoAaUsXvfBRPoWZGNFa88Kc568TGC3Lk7mCQWhvSCRsD4uMXEJqJgeoA2hocFMfDV",
  "key30": "2FtRQzenB52mnbByoxeTojQD2hZWDrbGLdenYTSyZNpg394w4brsxiNpwDwth8ZvqYo46JH2Jz3weWyqfLdk61jX",
  "key31": "2jd8URp78h36XaQCgC4v62zpXgJWMEDwJ6CS6WPTxLpj6cQ7LvDJccyGrCGMCGk2SNg9D3R2seaCQubyusMgTuVx",
  "key32": "zPh9vwEQ5JtGfG51gM9cLW6gJo17q2DVkcDyKP6McwGfQEfVpD2jhWjdPo7MDwJ9wtLwm6XhpYQXZeKiDWE7bBD",
  "key33": "4gxMpscR12RzwSR4dJEqVXZsWk5ztC1DQ82A8u132CsM1LuQhGyRTZPtGpopWwMtehyWhFmqrLUqX8oazqvE8Qec",
  "key34": "5rGseagdBTABoTn4VchpYKHQwQGthTwt3DDv2LrHDrb88cXYF41VWnPWpkrqL85b1HLmv1H3zB5QcoipHBMkdFg9",
  "key35": "3s4E3uowA5naDSKRAu6nNCHp2brcjGWpVQRFrHqZnCJvYVffn9ngUAQeyQxMpLmPa3ZRJXnTac2mkmRcoBxN6JEQ",
  "key36": "413FahoRw4WhUsWYWFcdqtncWK9enBQFbYxHpm6ASB1dm2NoheCBn7EaZeRyehdJVGKZQWjT3dcUW4WEScaCC11v",
  "key37": "2kP1LmBLZ8grjeRJ1QbApMEd8MG1QpRUErh5NE3uEdkEYkPkBuLMc4kzuaXArVNgVvaCXZWqhoiA3aD4duetKUqD",
  "key38": "mhDyRGoDX8pCPp3ia6KbEUZbGZrdW9AdMmXjd5YRDr1WBuqnQVcRwCkBU3fktttiJcHVfnnXTyhpe9h1TQzvZET",
  "key39": "LxMmcm2VhoTt8GCGNKUes8tCZ7XLHBz9t7UFQ1cYJ1SUUXL1HvhZshMBcj9hYXVd1V4bbbwjbHmUZv5jMshtb5u",
  "key40": "XuBxTShQmvq5AMAENrg12SVjh2vpDAh581vWy1jRG12YYL8DN1aQ2H4oRuTjyvphc1JrpKS7xXu63m6PKtgh33f",
  "key41": "5znWzgR6gAcGmP7XQTdaoe4fjPxj3yASA1KKz37Ln7rpFC6cagob1ZVM4n6oaNyu6qJfzvmUSVjNj8am6GmWzMMM",
  "key42": "2zJdBzMDwaVvHKKW3BvQcbYHRa2QKWXghYBk2EZ4bXKWxEasWhhiJs4BV7HDpeZBeh7p44LcPcrm2tDcWV8HAebR",
  "key43": "L3onehXSA8vxzaoPwuC3xPEoz6xKZf1aZ1pPkJawkraVFqXCZwYDZQf6BiiKELser3L63LMf8WXYgaT7dPs46nT",
  "key44": "5BMLfhrVWjeyhjUD9mKN61eYKqFvLrCkuYn4oGYNz2uptqo5dbunrQgo2CkZ9QH88Gv7pVrvwPVuzSst1b56xgzL"
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
