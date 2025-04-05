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
    "3qsmeY4Vr6FboLWbmzR2gHQX3FGpNZWGLRZSZYaktnXJqvksxwgvWiKKP3t3q4RU8mMvQZ9uSzi5seggwG59xGk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "257yiYAK6ityFDX2nV1ezaqAVV9xGFH2jPdZ5KPWGiMhSYAWmwr7b8x7KdhVc6dKaYcraTC7BpqgkEN7SmTZuJa2",
  "key1": "2KZ3x7uW7q7AprEPAZtdT7WUm87KXnkuMnyrDmqEenNmYxDA52y8UYBUoKsFdxQHbadLYUeJUcWNMnkb5UfXGFfT",
  "key2": "3q9j22TMN4jmKrC2gaPG1mRBnsN6kBpZhZ6AJeSwKHgExtcthUp7K29y9TVrqarMLAyS6V8xtqwYBSUm2HHfF3ua",
  "key3": "3GFN5vX5akYY9bLsPHyuwtNxQjqNS1GLM9BGPBJAeFy8syqzGqSmfupRkbGj8mZVnKXJ4bGCfvCoBZyUmjv6LnCk",
  "key4": "3UGqheapBSeNcqYzVJQqpsBA4kwQEjqYRPkJ7TE12vxbt5ws5WKMRJNfNB6EK8ifnFMd2aDEVmo8sP7CgmBUTre4",
  "key5": "3SKxvyyqPEFosUn4c2yFJBTiC1Yuq11JYJDNPdz8wgn9VmArrb5AN38DrHjb2vbs2k89oPUcmLD4Kqd9EciEAXay",
  "key6": "482qqzP8J2RpC8nf2ZEctQVnwWB7avXc5v1hgwB3aAkk31EuyocMMCuTR6z7qZ5fkFUJuCuevT6f2QkQW6kMxgfK",
  "key7": "4DRLhohWR8Q5C4NbV2ceuZK3r4FasC7uPEzwj4Pn6Xn35weJFm978mfJmwJQhF7b5z9ukZ8EgEnr7SiE5CKMSZZQ",
  "key8": "5hA6BpTzTproi65bkSAivMN64Y2oFTacn5biD7kuGZ6F6ZvsYwsJvh2DW59Coi1zBM18H2GX7UL5Q7HxphHQgm1s",
  "key9": "4WvjJoQMPSVjYVNHEDBAqJibVGzNumsTE87YNnzMrc64w2fuWR8mVmuMSJ7SWzbtzP3zWDJEz2jG5XihA2d52eAB",
  "key10": "42uBjXMw7q5e4vqyB1VCDsKjUeoXqHSbkUHEW7HEkZMFu8QWvzuziR1AaZ7PsVsVt9PakqFn9NJzKoUcJZ2NT4uz",
  "key11": "59m1sGZHq4YCLEeTi3XjR96m1NcZUBu3pEDyaRwJqw2iC9gE2FvEWFqHnUMqWMXmpTNMw5BbqXZnuWmrzvVNgYj8",
  "key12": "57j8QAUfBxyXg3XbSXcZokxHryHyXiryqDg1YXXUUS5Epwkom1HGveM2nEbCMUTyVXktc4KmUjbW5WLvy1bQUYic",
  "key13": "5zEGpceRAmiGf1goWwbRiRxozThXqzUBzAdqrwxQtc7D4jWNnuHFoWp2Yc7fr7VxjqS2XRE45RpSU3R2QrEojdL2",
  "key14": "VriWyRKoMnb5ixSCAPQtpCVZLFuCLzmtpxfA3Pq118CcrAobfdu8jgdyqNYSRbaappCtAV9zo8KBN8i2Ucu1e4b",
  "key15": "2zzZCBu3TCx6VMRRkAFNrpDXaqigaWPbEF8adXiCjp5B4m66SdFS92NnaMLci5BNJibjdmrhYfTuhExD79jwEd8r",
  "key16": "3qDNFKxDhKheRHTdGrWcGAsjEkZa2yfXNeBvEk66v7udpb7YqEyCCYnqyjt6jZnVM5fHy69W5pU73MYAZ42KnWeH",
  "key17": "LHcUbKaDUpe3KpgaJRY8rfPJm9BW9Wic3KABo9VMdBzM7jESJxnAqrr2Hwmkmi7A7EL2iiCcHpGgU2yqC91Vqg3",
  "key18": "3CSfq9cHiETNhfivQjexqAZpxAGWDLSKR5fh891fN4BLUq2ydkUR2b38rYJUCLruNvhBMTLcFMPGVBFGxKQNBSuz",
  "key19": "mFVA1kkrgT6iVkdFWazvgRPbyQtn5rvXcgKt5rCZhAG333RUqJ9JZDwiyhw5sfBW8anTk38aPuCicBNqiyeQ2Pz",
  "key20": "vE16WoRrfJGNAEKnBmREicgcgvz2kPPUWGwFvALx2v1Vz4wup8k7EM6i1awQ5d5MBAcqRYPa4be7fe6TjeQeVr4",
  "key21": "2QNmEr9kUmnbisz11tGGniumYeZtRC9RniGnVJK82XiMj9socmx25MFNFhzxL3X6P2EAimfTRKcS7t3TcJd7moig",
  "key22": "5C6WLtEVkTCKziKGzaDXmtcU83gBbFkG2hDskSNHqvp45yuL8sycfRpAFH1H9mabCK5ebVaqgQBGDqewQ7VNtAp1",
  "key23": "4pqLxnA4WsndxUJ6ysU2D66uZWmazeU2yW5Gsa1j4Ym9jE5oWtphv65uFN9eWCDM8fqQ6wRmwyhPYREBFAg7syBA",
  "key24": "47UN1u4bQoFkLGvH9hh2MyM9Z3oHoBqCCJS2fuwRiSxBrV8eTst8haDKf7vd8KMgrJ9qkuSwink5n1p58s5kLwjR",
  "key25": "q5CZpP6w57QJUFdATLKUdBjDjTBKuMESocRWeq8cVRE2y7f74gQYUXYVPAAcfEnXvzWdhJcMqAYi5itpPF41oR8",
  "key26": "4jqmn45c871HYZc3mVShJDfkDQThKCPFjAqSYA2MY9R5CpSkw1KxGx1GNiGmKKdfENENkuqqTtg3MLWKL2pH8i7H",
  "key27": "5g36uHMdbQcFdy15QjUKzoDj2dpAWe1FMq8oegyuGpW1t78cFsejzZSAzrLp4GQMqkaUL6FCM1Yr9atnJw3HgqY",
  "key28": "2tLfbrmtA5J4Ed9DLAzbEUGY2cW91dj38CBdeW6J5TKa3QGULJSL7F8KhCg6By8BAa4p2GY6i4C9Ap8eT9mn9NXS",
  "key29": "L6P2m4TPDTZ6TSSQ5AmiFTENuJLt1c86uG4w4A2uPNEhb3f1FLBxoiXr9ngSMStFC2e1B911YP6CZfmoMrRRkR2",
  "key30": "2vUwUeMatajMiZrHYih8Cs8PMxqrSuatPCjPp4BSsi7wStkzgyakdMWj3YqzeGe2MqPm234hFmBG86YnqQ9TojYX"
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
