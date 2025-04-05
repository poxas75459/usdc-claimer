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
    "5zDNhpA74nKz5Q8YxuKRhrMCUb5gs5vGuvRbGXdhWBdg66SAvX87TfuorNgPDAvoekKLMDELsZd6WxbmmBjQDTC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44vg61kr8Pgc1CijaLm9XNxX8EGRt8PatFhJGDknr2FH4CVL9pHaGh6m4PZTe1QWdxmjc4ccYJK1BxXzpXakfmA9",
  "key1": "2Csjhbs7itevxSqpdf9sCj2a4wz5tFPpB479TbTGtGnuDKmY1q1zkuQx5vuSkQsXfC2njyMs8FeKZuxrGSKD9UZv",
  "key2": "41fVUwaREpS67NX6G7JspoLgxE47Xt8Cd2PQAiqMyX3p6TXBxVoKrSKfCeNjJEjFA485XXNDyEiXFShNN8ZaT5ED",
  "key3": "5kHabuzYGW4ptkG1DHrt4yVufowkfZTDrpM8PEPjBa99XSdU7L3yndW3bukuDNx2WzPC49eELTBgPdgNkAMmxxrw",
  "key4": "tQt84JmaAxQG54JjY81jwyh37C2mALcvguaMRN7A9muwXDWiVS96LH5h4t1MQozMjk4bV2n3YV6JUgugDcA8yKx",
  "key5": "2D8XMWMUMmpPb9fKBsNzZ1rvbRPR1M7RRVrn775X7UrrF97ZFdrwQuFECQBg5MwDg6diLG15Ujsm6HBEC8oj9bhN",
  "key6": "9fxVMdms4JkUBmiiTCe8LgkpHUtu55fG2i2qaAUzAL5zs4t5axnUyo2kQSqerKaCG2tt9qz12t9KoW15uNxMqtr",
  "key7": "5Z8b97hbpEYwdd4LuYnh7uSeM5jUKr7UTr9efPDki4Yja7Ee8pMHpZQfKxnJ7kvVmdhKtTC5tjunAFSUs2pXZbCA",
  "key8": "2HrMcxD8gdc2J8c4rXXrSTSavUs39qjC6YT8kMZeAPticdSgia8ZRE8PeK7k7r6rnnQP65Hr4922yvAKNvTVLNCy",
  "key9": "2Gi539K8Ka8U6Ga5rpCEEv2NTuPrRLqixG5gHEZ2mUuvoNh14CDK7yG7iG984QEEdXyRynEhq9866LsmXPLbmz7u",
  "key10": "jgmAjXB7CVu5zb6UWNHGDYUK7JWoVSEgZjp9JRTE5ayJjjYgoAySMTVz2Dp4u4nJK6hqCqQVwULiLrBdJBcN1zt",
  "key11": "5wywG2ayoH36dn7DgifViZrk9Ubd9uojpZiggoK5qoTYMv9WBmEaZGFNEGt1sKLYHH6mmfneAKF7B4diRB8vbWvZ",
  "key12": "4De9aUM9nUM99Ja7d4wSTqrwcJQaXNm3HqS6wFpZFz1RqZS9kAP4FUHufPYRjQqvQ55rP8WF8EP9WNuJG8ortrEz",
  "key13": "3mFMLRRMp2zqWD2F9sGbsoZVf8ZbCsFMcfEfoBhouEDih3Kkfz6VKz7hWETCc9n2TpfqyEJzXy1bNUBrM5fwSSpU",
  "key14": "3vrqFKJYoR3xiBWfD6GY9k8LNUhYJ8DvLCzZk8oF712j2fUsCVMd2ZUA2gYuj1R66vjgB1jzEdceqhHqiBwK3Ag1",
  "key15": "44hYMPEMhsxSzT6HPp7N6WLm9fw8P4zp5FMzGH8m5hFHRcmVyhu8hiTPJQFf9zdDpp6aJpf4cmkMQB8zXAjEAmkY",
  "key16": "5egDqUuDBK4myBSXqy4rX4PuLsqdoYKZcxHZkcu1goQkTuXBCjAiTvPJ2rmWLCC2zxGGby4RJrWZgd6aAJSuSZpR",
  "key17": "vAEXWK9z9YHKiBECTxzs6zgHCaR7ZbETPoZVbJXM3Fjp1kA3j9GXwsMEGCBtcS5vEdyD4tUsc1jXpikXsTnTkdU",
  "key18": "5AhVdBaFcW8wHxBKvX2tjU2Ak7SgGnzRFmmaAEjoqqzr2LiSiZMnBYeQ4XQnvqrr6HrtmqXzrhaqmqc8WT7ZUiPY",
  "key19": "WUcPmW8FcWciskiyc6BbAArrSPXn97Ds1SPknZiNaviP9WNEET8YhhErKg1CmrF1UPicK6SkDZqpcbsx2Gon6N4",
  "key20": "3V58v7cev89qZUZyEeFh13rUBiojHUcUkCd3RWyXXnsV9ZyAZgJCDmGwc3gCEkrrgWK8EEobz9CrUk3LiPMVvo1j",
  "key21": "Nv23hnDe6E2xdG9ssLGwzjcLLY4WajTaAWFfN1mn9W8WURXrRtAx476QXMbaREnkkyEkNV9duCxzJdmMNZeYTrm",
  "key22": "67RJLEPvbPBMQa14QCSfg6mH4B8obFKoxXaJpWPQC6dmjqFLwakCrcArvnxsyz2bUcHFNZQvYkSBuPNhbTmS8yCs",
  "key23": "2Ks4Sk7HKRAVxh2YxomiwuMyVSRS8JY5AzEEcbCqZUNUBTwmkdk3CJ8nFfH9QkofHybnd7vXLs8DKf6LnH8iYZ3p",
  "key24": "2ys4y7Rhn7LXFZ1Xv2hnswvXb9vkp2qjYHWf3tkqp9G6YPbd6rSGPoxxmdcfbdwW9fZWAyT5ohb6uUjUf8AJ6rod",
  "key25": "5LNjmNQzWfguf6V8B3YEryPxypapRNGFBkRWT6c7THWqXf63Lmqb6FdqXUJVW5hz7tdWgej2HKhuviDp12QgMFF7",
  "key26": "25ZGeBWDhcHqPNGgM8HazZJEdwmEqCLHP1LF9XdCPXVgAWGGTRvEvrwPYFBsjsUMpFGzsuAFseEyDhW3ZWgBdXfs",
  "key27": "5uY7Z9r3qN9dS2rLXRVuvKyKKHpekjy598Ad6CTH81fFAvbsM2w3FRikAsoE6C1H5tSspGKspKJCjLnxBoXcTPXn",
  "key28": "3YMnX9dAoYG1tksDbuiazMvU5TUC4rVpLVcTpngyGD7fhhhvPgvLhL7pbhwYHLurBN9dWmUUSiE2aafF1deMGKBk",
  "key29": "2sjCZwyzLb4UfLYiRwDfMNsg6sNKKZVbats32UNkLq2W4euUFvPG3inueU2eVZpro7PLdsezDwP9QhZ4Xeesg6NV",
  "key30": "439tgEP8tkdhsNAX7yjiu3HJkQiWMgdNoeyAsDgiJ3NoT3NVUfqduVknyH2zAtuctpVQMQ2VXnTrTcuG32asgkgH",
  "key31": "265yRpkkzSvUco4MX8XR9r64BGtfCBwi7q4q3xiHaexXwWsbygkKausbAjVDqj5nzPA5N3RoDjPUpsPAoQUEi9oW",
  "key32": "wYFXrgiwLdwYMmXVnowZ5KpQNuKVEHwbGPCwDMXvj66CChX9tqw96bPj5uedazT6ERmhBw3GxHcvfvwn3EJSXKu",
  "key33": "3stKTGqVNX84rvngvje5tSZ6Pr9w2cqBqqXaoLuesv55ksD8LfjUK9cs6f6t65hzbzZi2QxhtqtJru6TiusFG75C"
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
