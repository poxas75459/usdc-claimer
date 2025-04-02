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
    "JstPyDGD87JvwGLtNJM2v62bcM8gW8Mx6CrEhpujrvzvdEfkdHs43QkohEcyj49gBzQRUBBdVaAGZWEpwyv2cUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U4kU2wDFhBwnw3TeuiZunqfKcvU1dWUvfs3JmCeQ2DzxY3pDr9vCsQWz3KW2KaZKDiUsZCYTPrGQ7xqszz6YF8e",
  "key1": "35mFCBEcQ8odyA3oyvgweWBfyuT691wQyfN4hPJF2ReGMQTFJB6NdS3ACRBZNYtcx6KVWq825EN3DhBLDCB7tBzG",
  "key2": "daEbfNZso6aHeqiReiy2PYshLnYRRxDMZRJ1kTKka1qpWGGe61kLSvaBKbgcumVfNCZCaxaUgBgSKD94R24z2BN",
  "key3": "yYSgsG7iyGYEeCoD13rwh6KZvWAQy7AN3JTAwz7nud9hRk5djQVzR6ojC2yhRFrMF3Get5brHsJsRWv24cShTqm",
  "key4": "5UEwDbiFmyvR9eWsQfpZxCiBE31KtnpU6ELnkDc7dYqfyP1BiAtDpqLWwNU52ZeV4ZS7UzbgMDZy41gx8eghCEr4",
  "key5": "2rfLEb67sAFwCvmji8n6jhSk1LLiRYQ4jACPPxcoEUgmGXfpv5gppFqky4hMceJV2StbcHRpcSoYLuwKyaPFjH3t",
  "key6": "2FuHFb7Sm8dq8KfACxaTZVEJDk75YbYVJPq7Br4pxp3Abw6vMytD7qX3GMHbKbKPWJ4w6fjwujti4cD6CJbapgU2",
  "key7": "5D711n6DKYVAXHG8saAY7zpZJpcWvUSqmPjNMWgwrquaVVi7Ky4tWayW1WrhSU5QB7VkRN5bxdR8aeDj4hW7v75d",
  "key8": "BndYHC6tV79HmVYkSShCQgUuiEFJGEoU3HCABBNt7isfvMo1xXYy8ETqnVTpCbRuAeWa44vMBSNQYZZCoZvbgxt",
  "key9": "RVytkRQ1iZWtaRwAtZRJbBrT1z6sTUBsN7SN98xG3NQ6oEHFAD3wHxByknoVJcTCL6AApYPSrsWCHGyBsQXQWHo",
  "key10": "4LTqd6oe8NYjXk4tqYaHf6TvKxzgvQJJ7PgHHL1kVrCYJnPxVpQUu69tJ6HRfUvFeZNcRL8hPYytqEH6LRj4hJ7K",
  "key11": "7a8fw9ctwuFDdaYdt3HSWB8DxPGrrXMbhAzHZwWusL9msKtroi7H3TvGXPNDVPWHDKNahC1wXC64FqmgstcwsRW",
  "key12": "3z3muwdMEyn5YBUSf1NcM1x9PUcTiRiABhCwUdm9qvNvYCaiS8xNJxyr2BDtLeK42buKJCEVezsoj1zsgcocdqqj",
  "key13": "5bMroGgqq7d53CCEETvAvhRLanm2A5bRMPkVCVZ2g2KfYMGJEH8ysR8kdn3fmjvbpawP4S86jNJUiNvdTnAsPttP",
  "key14": "DxrwY4p8huBGuoCkRLRNcvC55YhNKUWgTpC8JeM7xLbXyrDsAMQLtY8kMNvvPd9JNzN1aXk97p3uQYx6rVuTya5",
  "key15": "54XjyfjtdwK4QnDjs42DSi9srmZ75c2rPJ6LyJb4AY6BaBJwS3PUFRJXQsSiNUJvZAyRYnTNEujHqxW71ctSjyyv",
  "key16": "5rQiEaR5vpETxuDT8FEXwdyoCAWPADZAZxjP2gMo9AZw3DVGAKPh51op15LwX9dB8MaqtkweU9xAKbqPtGBjTGhB",
  "key17": "2tdhvVUu2GRMvDUbzGiq5yXKXS4eJhF5gRujXMaJe87hp7eGWdnaLxnjkPxrLnzG884eHH7vC9Qfdj9USdwkuSda",
  "key18": "2UCddNdiEm1pzdKrvrt7msqiGKq25Ufnr7UPz8k8muUS4L9WogEASK1rLJf4CJ58Vynnd5zytqh4vnBfYHnyyoYD",
  "key19": "5Q1N9azprh8ctD8srSmekEuFPPNY6AE93jGhLJ2tnfNmAH9zjHg4JuDKky2SsRCHhQw1LEAEL4XQAK6oG8Z1n3dW",
  "key20": "3GoX9WEgiaLeu8kQcj3vp6iVju59xjpmDtKRacVXSMCPSeLxT7SQDNFxAEHtPfeCLKZVDbEq6291Ruq3dhNi9hJV",
  "key21": "4YPs8UN7HK58jcRuj7kSeFVePDxpAsC1bg6oLySaQWmwpMRg1R8N4JUdKHuztsA4RjhTmyqeXc4jfMSs8pKJmfAF",
  "key22": "5YKxZtTxRocSir1WREXnTsfC6HxJX8RuQtoi2wfzPa2BmNer5ffCGKc2pAamNDkpGyFdUWSo9bzeU5J7KC5NbsBp",
  "key23": "XMaKxa2hHRuNmPYbkCSzpb9pYbarYRkReNM67e47B8vkqg83LYmQbg6wBaoD3cxMGWGUzXSJ1hKmTBPCAeAvevV",
  "key24": "kouLk2LJzFskxe9E1PUpsrJaN4NW81egdnv2Zu5Cj2SxMju5dU9xBf8ELhQrSvLY2VaLx8GxGZHVfgxQ9FmAJGB",
  "key25": "igkeEgLRc8x9bBghi41rxRiZbZraX279THuEbyZnPujjLy11ncdEjWeuxzWUAuautr9s4rkQKYfqU7DvyAofW19",
  "key26": "3tTZeH4o9gaTw5x63x6VmU3YaSgmUBQF4mK3FnHmZKnXsg57iG4L99hvAHFBCHUPap2fTDYiJ3sewLSAzywyL5SN",
  "key27": "4y2Cvh9hkahypxNt8xTeKQc3YZCe5wZxzLY7DREF7iVbQGQRvNrZ6wFC7e77FYuC52S7HJP74HW9v4TLXWstKKkp",
  "key28": "2RSEvEu1P8PwYZMBbj2F24aVCBF3A2PbKn6E67HBwxKBWB1wGnJqbtmMC4UeYVk1kCfLF4TNxiM224RP5mo2DxFB",
  "key29": "4m9K83fSQkFzU7m15GUtyHXDrRkia36hujsqbX7d8PnPnio3JWa4TWGAbGyKhE9zTQszEKcbLQfyruZ2jBTFMUkL",
  "key30": "LjbK8p4dTW1ARAJh7KVZzuv3upEM5oaVUzhDhFGuta5zY2HC1DttdMBhx9tuqFD2gAHrnLouJf3K5Jd3sVTikFy",
  "key31": "4WedQ7pX9xqLeB69hznTdZsuzYwVrH1LPcqVHxtJmCkX58AcxEShNacWRHiVa96JC3V9443GscYP6YGnK4i8PK8k",
  "key32": "4UpEPXCM5QUHuYRrMKSdrp5iTFLmBuXJjreer68QxV52ZQVSx6RU92cmy8PqCUgMtSvoYLVLjb5PgrJbXdFC4RuK",
  "key33": "6bvLWPhaD5jzYrrUaZX937ynoEAqeH97UQD39UrWPyQyW8MngeYBsTPrgj4x1UYMd5BYcg75L3PfUK9V6MNhxhF",
  "key34": "4dAiFeibzxCjC9PjuwRbJiKhecRAZZW7YPsfGcquAHkuUeLrzZhoV9iSdFqgZ4iJU91JGE4wtEzpCNePkuBDoZKW",
  "key35": "3DKF6oGMeVg3mJ9zgvEHWgN24LPP3idbBhYxHoQyz38BYA4ZEQF1zFBEnbw5MM5Jrq9YfSu9YLE4b1oBKRNpCMNr",
  "key36": "4jfhTVERh4zD6nkU8hPKoiS1SBMrxVjFKZ1aC6uSPhfJJhQp7uVYyptq2oPBqQPyo6sMBrFUUee7DtEL7KXNxQk2",
  "key37": "29g4BZbfCFkwvjvsfka7rQPsfNnqCUTuPvR6K6cynWVkjZKWFQEvPkGERh8bmuWdCHtU57d1soFHw6CEirvQo8Mq",
  "key38": "UXDjaJnZh971mVAqzzEAHYxri7gp6HLdjhd2L7dDR3sotkV1ESJiCGbWgc4pec1pz2qz2DceUYfbg2YiTNnKJT4",
  "key39": "4dPSo1nwgpoUDjePHQihGPGuaqhxNd7wcmR6pgqEk7CM2WRvkRENkK8aBqM8DvKUi71qHULHKWMEraUc1xZ6G5pP",
  "key40": "2rZthrZgKBqHMs4jQWZGtAVnBDMgZxRsbyMnNiXwWsQgQL5bs1UxeBzFNkpTKfL6jadq552uT8JUXY8h2ACJK9DL",
  "key41": "2NqM7yGcfE5kqfzCvNzuTLYhPvaYWdfhUaTPEXcosL1mENXUFDBFCUibAhHLWR1HDLwE3DRLKzqNJ6X3JQ2Rdgkr"
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
