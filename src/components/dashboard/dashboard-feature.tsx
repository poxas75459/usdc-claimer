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
    "2mogVc6KRE882NWBkfUhpoHup87J9FRDwPFuhZHjXwBq25AaoDkGAZZSNL4E2e5yGiRBETsHmd8NnkukaTMGm2f7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NA8JZcoGdf4WJk6fzyGMAJQC6KHXecTi1QEHmXS3W8FmgueYmqqj5c4URbQXhMYo989X6nqnTcYnihRrecRbvXy",
  "key1": "5kj4HY27DqGGZz2i8M7WPmqZhEh8Y4YGgCRs6w1qF3TcvWYDjbayGpMRq6x8Dcyh2VE1hJiMykpoYkvMV9G9r47x",
  "key2": "48wVbGsVkeewqaF4F81u8vzqauGHKytMVimfqWtRJJbH5e99FF9ENdbiJExjBJHgAuAMVLjERkwmMAA8K63eWSSm",
  "key3": "2hctzVnxxy9k4c1y9UhZSAk4zQgRjR7gdnHEw7LyftLxYNenFPYXA5TWgog4pKtuYBZRez3c1CkUueGmBPkGG5DS",
  "key4": "4RResJ4BQQTVB57YEhZrv9BsePgqzxi5C4mpENboZqVKKzCNkAQjuv1ufxLtxZ4Yp2ipDo74gQyVvVq76eF8Mvzi",
  "key5": "2EGDMw9CNbFxw7sq8Hzz1JDpY5eQ23KUQzNfAxZJssrtgXHwRUbsieNP5S8c9jdAvTdJTAd4JxE6PcH3xmdWGUJd",
  "key6": "5UGpgHwDnK754iCv7hgKQAkiyzdebsjjC1ppp9bd69d67vvXBkh2JhJKgiNSVGcnU4SaFSP6owZQursBaWDoJzCr",
  "key7": "2RzQSVdW5fwRLEpEu19NNRzD8t7mVoyc8e5WwyfdZESNGJkwNqQhAvYBhCy496YN43jK2h1R5Lx69xREwxEUZZEZ",
  "key8": "38Knc2yog3U7H5Lz6iz1fB7UDbbE4UXWqcAYjSKZWXCCGJ5cah1zKNTUgUs7wghJAb7TvHrJRQ9XDzeHc7vYGWjS",
  "key9": "5WjoYDGqWcggwcjuhauy88jRqUys6cYdacKVdzoPtiL3FCZ1JXDysXdgL7e9hNwvspnmuzaY5opEsyHZLfWWn87q",
  "key10": "4hzMXGhsCRaHD6gK347uJsVBinwT9njjLDqtog4BddD2af9uDUppWdtAiNSZxwk4KNks5ghgY6aYFAtJRmHNxF6C",
  "key11": "3r5bSLu5jAErbEiuZjKC6i566MBf8M2Mvbuo4oLZsxMv5XfxD1az1LmNzveScHLW9vrv3XAKkAsruMA1ryDTn4k8",
  "key12": "4LR2DMYF8NTNy7rP6nARnrU2qoVreUfS8mUjZzSyfK965McN4uZTZ2fezPXuHRdv6b3S4kTByhNbLoz3nhYtMLM1",
  "key13": "uq7J2hrQcGWpA32TbmhfBPSFv8bYdt3MNPfv2WPtaDSoEbDhVbr4gRxVWrwY5gCin5HtuLS2qbCPB35DRuFMTU5",
  "key14": "3Rea8FUt9UoBnKrcYFxSeGUtXMExEJMJWfd3RMBACsv4LNitJKmrL16Z4SMDDuM7xYCAisbrUMaspbChjojjyg7Z",
  "key15": "2KpEfnj1NNtAyWrtQsQccQhJyGqs22TChwujvsDjL7QGLZjGm556LMCvYyoECfuEbyK2qQuWUPh6siT4mqRjRyaK",
  "key16": "5jXcofdarpsMbwDN8qKyMR8HdDyqbt8vr7LQ91jD3euCwKsvWQ2mLm6rRKQUibEmspVosX9RincD6Lpa65Wwi4bQ",
  "key17": "3DJfKVBnLMgoU68aaQNSTioQoKGGd6h3hu9NzaYiNnYqNJXCRxPPoSf1Ypp1UkGvzrtp4T9dhoPYCbaPmJH3pHcV",
  "key18": "3YPzm89RNZZbP9NPdh6bWgUamAaLFU6iiPyhD5ULtt5L8841Eah53S8mtdEJdp89tBx1PtBQBb4qThZYiDfZedp6",
  "key19": "2qpUL5Qpfm6SXTdqwvx8TTRpv3K9Eapbnw6DPDka6wcj1n86D6q7oK2DkrpZvKhQh8MqwLjqdvxQou6Qa7KBxbNF",
  "key20": "hy3DRjhwcG1wrsPaLZAAwx96rYisfNSBnyTFuCT5jKXWuSL2c1jJiGYsudHuo1wCAdC52nGr9Fqh1mfaUykQgYR",
  "key21": "23PhKCcWJnJhMbcxd2SSfjWvFGP3co97j5fPKPcAD6RXKtB55DvbXY3yA4DkWt2dytMVNjqaPizkPKpomyUAoPwR",
  "key22": "y1LtBCNJvoBnuSUoRNmtsQX223zGBoiPZf8PctNJ3iStGMja14SEthtXw4YWt7p4W1ZRbpWeFUE5e4KzA9iFd9Z",
  "key23": "48jqd7461PfB885Kko8sEBw2APqXbdLLVMSzPX4XD5FYsHdDZv9BEuqteUaSEaXZRxDzdRHBjWd2QU6cyForECzc",
  "key24": "wrAawxgFJ81QLPHdhcyiPjcYwGESh15CUYeDiKR53JxyFVRWsRu86vrtMhAX7f67M4Wh7gw64Xn6jXti2rKz5Gx",
  "key25": "5yvi4jjiQhVxsXDiuBMngYCZDcw5tipbJz3GdFLt4rMwrisu3b5N3um6n4AvWB9dyaJiNYuGmja3wdc7zvzB8pUW",
  "key26": "5djoZiTqfNXT4JZaQadrMTx6rK9BHfjuSnVJXkvhWg32BcsspAcu9DqtbdC6EUimdK4CKW7iENjJgHK8mkXTKUYj",
  "key27": "4YuHLpveH3BtAKm3btud6Bq9dpuwTovKLrxksXq1VWsEvYxCDF4skTfrKjNmpKDL6GEoHTVum7jLKawFS6Xv9J6h",
  "key28": "2zvyFNiu123YvxuYe4w8ssHugCcNTKwixxr8Kq3fqiBj7VyqbUorZ7n5eEXrTAUggDKPx4GoThhWBdknSFppHMh3",
  "key29": "RDggsWKXDyhsiawhYnhedQo624unG9T8QJNhyJtMPAgFPwghpBWzxV18Mjdss294yVfHuoDRbWiXtCYbBfME8Ld",
  "key30": "4PeiJVJ2TwvEzF8g4oJ6DkayxLtM5ZTAu9RBEhboqvSdY1VQLK6KHxkPb6n32yRrTNFy2p9ZTKjPmSja1YiZyK8D",
  "key31": "4V7H9mrBDkM6otMH7WcLQYQ3rpaKWwJexZ3erRh7H3b2WxcKpPdH8WfyKmw7hd79is5NxA7iM8uyCex3F5k5yqtx",
  "key32": "4MwBiA5NVemC7mB3MsFKGD3LRGXqL7LkaPnVZi14bQzoB2TZyg9rE9f9pWMKKnnMxSbQNBVf83gYDTLnty9SLvsM"
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
