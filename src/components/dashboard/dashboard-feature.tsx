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
    "4FtyKEnL7CRt94nHordkDYjDNRAi93VXNtErvJxFfN7LyodNExB3HbvEKTLaogX7EP4KRax2BFrark9HUHUhwLdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SChpBsvTLXCXahqUAMcCer4dgY1xBSyNSv4uBqBL25nhWYkqDHiLe2SJaZUwupJz3SoPAqnAuPJsYYn7iDtAHo3",
  "key1": "4wtnPZReMvUkk4U2Pzm6NCoMcGs1UUtPrkY2mJMdsFTHnhEmMUnBFmsuxywN8W8CAzTeosXH5UXf3eZkeRCz6VSU",
  "key2": "5Q2hRwctFjCYjp3jkQcvY5PbVc16Q3DnE2H8Em1goRVDMXyWC6TwRe8scVugVtyfhWw1abkpidtsymSFVWLS9dVR",
  "key3": "4j522KHFkmNdR6Y545mHJ4fxmbKU2n2Gx64LsVddpkoG943ekWDk2ZCS9pCnQyDHb8yfnLcd4Z1FrpHt9wFzmAMP",
  "key4": "UC93kPGeeAW8uewCrPAecrgcmcvVRGNUZaW4KphpSsx8BajAScBd9C7hUdeyFWR5ECsYbr16ZHGbPvbsxRDhzCP",
  "key5": "29nXvo5yE2ZA1Cmeh6T7biLFEThSTVExx6KB19DyC33cr2vx9hHxte1whFZwUhTTWgrmJSfW2oNk13xKiBMVJ7Ay",
  "key6": "5UWWvxntKyciH22AMDpQESQTfWFMBUw5TqqYVg61mtwqAUbZWZyjpyR82rzcKRyWD2bktibtsHA9FbzpRGmuiLa2",
  "key7": "4vsCGKmfd7xRLtKM5z666X2QtyAKgUdCMYeF49VH51uoSrxETrs9L3g79KqVTYRMqNnfLikR2x3X5SbczhJBM6ty",
  "key8": "B6uwEpfkwRNT9VuCFDh6Rk96HQKXxYcAarjoUHCWzo6D1XthD915emHkpKVQgLv6tfLoE5PBMrowDEVejSGpbQK",
  "key9": "5N9qE5rZ7funnFBk7TqZkaws8hn1NuTuCQu6A7LMsQrtY8jAu2kLxSd9JpPKGWjFGUNCU8uPFK5VQAqsgKf8kem1",
  "key10": "2wXwLEr6RYUts8QHsTxQtu4eH7zUFhRebHpwW7AjVjWNoeCc8ckXZmL6hYPqBjytBmiY86vRCk64pTA41ZmrP31",
  "key11": "37JQ6dwWUbNEzvn8HaGZnBp966Cu3ZK5n2pRk8RvJfgZHvkC58reWtrBWjw8GpQ9mzQN6YXspAVdXJX59tfvKHzv",
  "key12": "4JRYwG4Jv3M6hETZBaDfHyQjAJ4taDbw8eCdR1vZdZY4QPaDfB8MGUqn3fPJdt1g7pFFeQiFjd6SYkZiua41houN",
  "key13": "Xe2i7hbWbNJmWsuZmRYSeK2kVn5ANui66gHtAQxQqDQiHsGf3hGFRsaUzC9sWXZcY1SV5uXQZr6MJfEc6jKxjhn",
  "key14": "5JM3yRqKzyoDt4hKMjWhoHTBfHcrU6mGnPHxWALNB1uU8UTob93rR88MNCeNnm5mQEMcXzfsZLgbxUGB6VqXNY7G",
  "key15": "3NxB672Y193AMtDS2Z3zSBqGZZc3SGRYSsMVzUpFKhuffU7Bk1qvCiV7rxLo9eBKgxjmBUaeG5cHjXgUsbD6qeUA",
  "key16": "4AxbHBegrqnudzZ1DNAvz7yGmJJdMgNbUMjboHYB81RRAkwU7McFQNsNzHeicUVF8SdDbyU6PkpNuNvqWHjnA6TD",
  "key17": "5Bcb3me4xnFagqRdyPxYSoW2KtiE1kGCSn2t7Akv3QL7ozWkcSv4CDxRVq8UXtPXJzrosnMGJ3gVebZCXMg31UiK",
  "key18": "4vj6ksKNXA8ayhKcw9MgsD1ActYj6KFckS9E6MrqNybrp8DR2Ejg3REwndCAEw8jgvWdticJX76Pz4wcTWCHy1gG",
  "key19": "3dQmCC2TrQG4EmhoKsmeFew1VRhWGZ7nJGJ3QTF5snNq5HTafCYq1756HcqR6XPVHcNKfM2GT6QrQSy5Q9J14yzP",
  "key20": "58LG4eTFi2o8WCChM3h2RzqeBip21oBcDExRd7AkphXoUTcMyPFgHS674FjeKGpXAKoqZUfjfG6wk2nZLbmEG6VQ",
  "key21": "3V5hWkCFQiNA2LBgX6ntbuRJDE4HVo5FhwTTn1DbVQhTXn9HscoHJE6cDvePKYqwstScSAeJimTP4gARZo61Fo2m",
  "key22": "61gxPWnmKcqW7DyGNEoLsMS64Ee8psQMr1orNFkC8fix7TCHvjod74G9ww4rwP2h91ZCQDTp7F3iuH7UpjVnEjiM",
  "key23": "5W2HsiPxTmX3CjfiT7JtzPmGQhM7eVcZqgACPduUyeDDMJVQwwkJM4vNUgMEogYDV7AK5XZibygxE1bepgtTF5y9",
  "key24": "JsanGfJJoQUiUKYSLkAmwQC13q9xZNz7SkW4KjwtbBZLrhJKXdYpodkgVMwahEnv2Nqrxcb1VBxcmnHdWB9ZGJZ",
  "key25": "4TYV3jEHZk474zqLVr2pL57x6SGj6LdVrjmzs7wrVKRnH97uQ6j1f1am1CMCsemoG72FTb67ekGbxcoqq3HJXd4u",
  "key26": "oar5fw1tZn67BXTWbhdoAJCe7aXPRfJfMoQz8R1AY7sNSy8PA4by6LCcbEkxZeTMCu5U8EnuD7XXNE9rQTpYQCn",
  "key27": "n8SZZ2Nfw4nf7QyDoyP9vXM2DC6oyVq1hadY75LVnBtwEsVYFuTEfanpAY7ZbTjNrnxfq48TLS24XiazUuwNZit",
  "key28": "m4i4FgVkH6DgKGYSn8CqKmiqQ6HRRGTiXQfdmfHHv9kqzTDuazNTsDW491vBKDZo8vtEeeM8hUyXaBj7QMkD8v3",
  "key29": "39QqhZ2CrSEkbiWj9adpTsLDCqG2nfE4GUBgcv9aAMpFeuP8aawoPY8FTMQJN9zeN3Vt856aBgRNeB1p6x1iw9wM",
  "key30": "4H8ougMsuGRnJmHyH7y1yiAzua9qL5Z77aU6uN9eD4Ne7Xnsk8LffowUdGzxLohzTwCkSZSWHqYNwH2bfNc3Jk1K"
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
