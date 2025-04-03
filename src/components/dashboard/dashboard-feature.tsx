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
    "2KCjEgNsDiNADpBe6JvKQqvsRgs86Sta2e34QiHsYVHiH6UxUhiG4kq8dDBjWsn8MDcAAh3BnnjoqQDjPQFnjRc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rQCvEa9Ads9CVu3S742PgwqqSSKnkmjtoq6UrJLvyfYfTDvhDEoy8Y31vjm9BsTfrFx53L4wDBUHPQm54MwSz1G",
  "key1": "2bmMcXZiu2SBXCSr7FRf1BJQ8omAG9TiiBA7xHPCagpLKY6UGdfEBUm3EDa4tGC1A9okbxWry3AXMWpptTtxhSxQ",
  "key2": "2kshC7ooR9mTMbLLZHnQiocnWLKx7KnuLUpwFZEujUJ5e9MB1assaN2tdvgFzUKJQ5hYWsqMLLxTsSCph9EjSeC5",
  "key3": "2i3Hb9qEh2dFaDaY2x18PqTs71p8C1GFRBQegvvn2mU5iXACvEJFU92DrMKrvYTmUkktnqoj8jgj6D8JDH55YJHt",
  "key4": "Cbsdq14EmEEef64SG2PcM2CCUY5WNiw8Yfvq5K3ztXtd3frwk4TutWL6gzHr3cY7wd9xTy6rGqg6t1kNq6Rsx7i",
  "key5": "2hjMQGvye7PLyqTDHQrcJCRvdafiBMZfMaeACScPd8MXPZ63f9gjK3fRSC7Vev4puQWvRxM5X3PvjQjC8LPD7FaM",
  "key6": "5rMpufZ8Q4uUXTrQiiZKHxzkS6tjTELqkzaJdjQoHzBi5pWfc3xyq2fXYV8j8XUYBhrFtzQQBiHisw6kuYwFKAx5",
  "key7": "3orMd7X5qLfcKn2MEcyQB5FNEgvrD9vFWcf6DxL6X4USPHU1gdMZXAnApj6baFjW9UkurbtsGhn8asUvULJhRvSc",
  "key8": "3SxqEahVgvuE1h7eqAQ9XK9pV6ug4EqA3UU5qWg8Tqsypg9D6brMCYYrm6jyt8ehUgkMPzYpZ4PwSYgXrgWhg5Uq",
  "key9": "fiduPC2CGy9M8ZTUt7x4rYo9ivdWKbisWXYf6jUzExqNuxvWxHbmJmGMjpUBQzjkG4Y46Xmutrj1kWHJgsUXZew",
  "key10": "5cuPgqE8FjWHZc7N7Bm8p5erPxhWAToWuWL7FLzxp8aDwB4FYRYQeZpHTvbv8dg4vYHCPfXbgNcvh1VjkB6QvXDC",
  "key11": "31D1KhpiHsiR4WmsE93WrV8KzgAb4EF3HNuG4kM4u6zXn9i7wFBNSbx8F4WxoNynBrzBfAaKE5P5g9taihu7sUA9",
  "key12": "2RBUMnzBAFdkxiyALDkXmzwXTD2Uszvz1UX4pURY6TuVYYmyQ1Pq4RQpipZytLt1b7GXEhnBko7Hosebhrnw1cKb",
  "key13": "3nKiJKMMyAZFfdCTAUdNic599FRabH9o7rofaRVR68HNGhr3NRJ7PttvyFvFaBKZzepg6JASa8i9DkZ95Jx1Qxdd",
  "key14": "3CCtNVqNL1BLDZ7NHGbRtEcGyPD5xZngsNtuSi49rv1qN8xRT1VANKMAxPsCQiBjzeMaW62SEibS3KMG829JFxoF",
  "key15": "3uwKXXvrTsUA79Rkh25udNf7ibjbXpzHUFhA61xp7wcnp2EP5AybGLHwJ4MWTgGkoiTUgaQ6utTgiUePct9QyzRa",
  "key16": "22TtSAQpBPFpFoqTpEFzKPH5bPWBT5Qw6GzWdng2JGgkz64HnpadV6GKs2jjaZNMdG2ALkf4zbbvk7BtR32zFeHb",
  "key17": "4EwYrbYjV6xh6vyyE8GXUGZ5mwRjhekQaJAoFHqQrMtjxrvxDbHGGZRK1UyuCfxHdAwmyKoGfuAddqneL8U3ggUG",
  "key18": "22YYTGHC3oTSasz8WEdzMnfvTNPaCQVjBuQmqoHk9nnVhwf3EV3uk9AV6uT8GjxvzgHUrNdnDaySUWkMXhryvKcC",
  "key19": "3FU5Tp64iwYPotcfR5aFKkRXy4P5481ir1dECky1G9FVC4zHRZis1KvKPVHiygdH9N8pBNxjdEjhBJ5N2Su6JKwn",
  "key20": "5VjThu6pu1uHd7fu9ypHegBRiMk3rMnyYfQNjog6S1112vAGUQRBD7D42ZzYkdJSFiJsT9Mz2fyTYQr7ysxrS6wb",
  "key21": "4QEe4PaUNr7T4EKGgeQFw82YDUcar3ALFNjXuQX33erZNvAiHGbarLRMin3gTkm7P82txo2TZ6ZJtNtqDitNkvzk",
  "key22": "3kyHD7NUB7oymvN6MzMyvXNbQHY2eGz7EXVerecJSNZ7hbdD4szNP6JgMnAMSTGKTEDt9UMoEGY9cMj1rHw4CA6F",
  "key23": "4znZ1BJGCcvCvAD9yfFjvRNSi9zNVZBAbEnMEjC5MagapLBwvUv4pssGVXXMYfvnV6cd5pWJsn45BcSJrKd5fG3t",
  "key24": "fnh7NJYymh7Akc2rcSPac9CZgu4mJYxgXvXiRKerNAeeyTLQ4X6RVyLNXahF7sgmxP4YPmzejFtq1oFoJzYQCpy",
  "key25": "3Mxv4euU1hbCMCWvpRRxpSbwGq2oB7obwiqVU6FmieP3siF5U4PzxWsr5Q5XMg1vnbMUZ3yvWMSu3eNsbHN1xsw3",
  "key26": "4TndSRjGqkYpcEaNzbj2GESko5AeMA9WM6ekCEBHEpzL3QnfZZeqMcU47ZYaTRC13HnHDUwM69pdLVnCuF3N7EgM",
  "key27": "E3q9vxaoF39a3d8L4Ys41BNqESRrJBwbwxA6KmBmiTU7gYkaxQDsYRgn6DsVhHsxffomQBzaykuXuamJbxcWfWj",
  "key28": "3n1ALcruHAeo37FB9Bk683yZESznSuN1Zw3HtZLMBMGVxHziFNeCtaL9irSk8zsTHVEHoXFTAD3uLP1Z35PimnBU",
  "key29": "rJajksGNa2y1aMkWfZtBpdS3dAgoAtjGgEeVYENtTqyrxSRvD4DtLjgQRsNoaym9mto5zwVs48h3FN7z32ZtaMq",
  "key30": "5RyP68uodZezSzqfijarXywJaZvBT8xWRQApL7TgBq6re73UQVRnqj8Tu3nnTXqypU3xfTMc7gfNkiJQrNnE7vWG",
  "key31": "5WvXjUE8KXsUSYs4Xz4kxcHFRuhK3xcxu6jVBcet1ASxvDV44bHUK9gycjH74v6pDtU6aWMBYqR6H136sTNvzGU6",
  "key32": "5SkXJ8Socsc5Z3Jp5aCumoXk7XVdeYEcBDaQBReKusi5H8M27CjSmukP6HySbejjnpHuYbmBMpvAFbS1yYpfBXxz",
  "key33": "2KB5d9ULBDifDpmnkhR1DKMNUPHQtejgjRxyZeHd9q5JH6tjsEE2jr9YhzqQoHU2BzmJUcbYntGYD8YwEzXbwVuR",
  "key34": "4cfqcngFw3Luy3oyNxTzb644uVY3HywKG6KwgrYijejeKqENcrXLXzQxDWwa57mVuiem18gEEybunZSrSpjDgCNR",
  "key35": "2oBeaP8tFk6njN33G7eVAuydQUQw9yVt897c88CsHF66it5R6CPDUsHg5fMCA8dByS7o31FN27cKq8YbFZLCDvS4",
  "key36": "5L4k5WCTdTF1DH4bdA6DvFqpWcZAeAXRmdwXXHnnLcaYsYhb9vQaWvXwNVEd4cW4oq9zaDFPxESmdBnYtush8DJc"
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
