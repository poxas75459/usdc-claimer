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
    "qUEic3VSy3LUFBTM66AZpwn2z3mpQY19528PAnrNu9pYiCVqbDryxfexvvZBGD5msTLaiEni5bs1zNkFn9PjqCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C54W29KEHLXXUj2esbXVp58VZacVHVktVvrGUR7KQAX2i7o7HgHejRDFSUJBSw1sAs7ZXm6w53MjD1a8Ny4Ktv9",
  "key1": "2qHYsko8ub93LsebM18VuFDPHvnuYZb5cUucjM8Bad1xpQEtL5RPrs516wbB5Fu5d7whxjugpYfYLwGqJNnJ6nhP",
  "key2": "58C2YUNLwpUzALr9AeeZjCTyJqmLmW8Djd7K1LC6ttvwNNGXseU9GZHDMutvT6taoC4mXv1Nr4TQw8yF6Csrm6mM",
  "key3": "571AHG5bft1tkpRfN1NaHtnghUUttgvmJCF26np4bhxgrBP8FLMszLXez61gN8qSWc8Yhm1EiF1WfkS74mac3nhX",
  "key4": "61UQs1wvGuVxrYjTA89DiWVqtZezEjqrpdfE6ReNCej5aKSvajBrMKhKHzY1pedJaiK34h3KEvjbHLMmoV9hdo6S",
  "key5": "3usTTrt7UHGjL3CiiFmhZfhZCPRyf5T1wovAuqqUq2dt4UzpngFgjtWvX66mS934Am4Nu6CdPS6MD4CGKsbhDzMv",
  "key6": "5LhkwiEtY8RvhaFjyLA9aNqAqCtcvyYvEyNFxkMEzfn9GFTAeUBYpQgz9cpFpS8fi7bRNXTf3bkHeYzghc6ArV8J",
  "key7": "nyXvRe6tRVAPaonrXBXyTdwhEKkEXS1GEXFceSQGjK1ApQLAubj2y9bHUyjSGin8UbkeLaTE3Zj8eEM2Yb3tTwt",
  "key8": "2GHwYw2BkLtNzn4N5aHBE3SRozc9nxf3MdtdmJf5WtgCKNYRWUWEUHKcSmH2MDSE6KXqCVehMXK83z3K38po3ncM",
  "key9": "49nQC5hvdv3LdvATL7X1L6eBetCVqE4QcQpAwBNZoQHXLgam3AS4ByPa1jEqSYhvK3dVLNcjMqBrS3iQcMjsTn6P",
  "key10": "WAUCxyf1d1YzhRYwjxiW2atPSnsoKzuoNveiSh7vauZdFEjpeXtH4FZMWLNH2UhgR2XtKFmJnsXJganPGP59n14",
  "key11": "3vAXVVfnwY2RJDmFHwXNrccsxgAbV9rz1NPRhgsfG6fc5Qg2e2JRt1FUrs9K2Ae6YPdMEudCq2E5iKPAs5avpL69",
  "key12": "2xaDgZZitypAyCUD3FHGoKKqsBKspoS4gaZqb9AfZ96yTVAnc1HMaZUZnidjUqX8gNV3sRcRtr1TZ2MQSB6fur8M",
  "key13": "263Xv92YwH8CwWWrdajQkp6im4tftT9ynkhYqfwwc7hsJJw5feRxZRhFTm87UhJcd4JHy3Kn6h2exjjzbpdMc8LQ",
  "key14": "23n3gxYXFn7RbRSezBz4CzvC21G6ReTNYrmjM91PifahttjvEAsCt2GMR2Zx5bemtRAZj5VyLVZ4Nate2dm7diYp",
  "key15": "3SRY9zU3ZhXF8D5VdFjezYkMStkYhC7JwbD1CaMmL46XAKSSawjjdZMxNqacLnPMj1T6F7WFkNwYoytYm1x9Pm7E",
  "key16": "5B4bXoZtgfEAth3gt6bkRGH2gVZzb4gwzMzsz2cYoZz25Nrqbsc8piuyiTnRkXWCv6rNciUWTdMgTQsWHQ3onecK",
  "key17": "5YPLtdkv5nDaM6DeHnPda9oJWvMc75nqFxJdZkJ17jsGhjXpS1q1LMcp2pcWfot8o3oiGVHVFueu2uBP9mrvoia7",
  "key18": "L8p9tj9Mg5CvuLPqRfFg7uTxyv9mbjzU2bmY4u2dz15Fin39WpCZRXB4DZtofsX6ZRhvuk31DFxwFXquBaGhiZg",
  "key19": "2xLFcd8GeKDTYPEPUb3aNaRKfNgP7LXpRgqaDkLGpfJrbkouaq7reTRZRdnrbmJRtyZZHF26C3XV5Ff3rLF22qow",
  "key20": "LvTzYeEUqGfcfejabRqe2fPYNTasK4RCKPe7qWn1b1DXBBqkdymA7zMiaQhhHSuMzmvW6oBAvm4SsE5eA6hHXvi",
  "key21": "3BYDiWMvpQ61GULTB8HZd8iFpov4jXEtjJcYipX4LY1QtaCLXD2yNFZZSaBzDPZWnFMH8LxPxJ6K5aJBp9seaCMb",
  "key22": "2zrM1VjFhCB4xvBxo1YUgxNRkBLaEcnPGw8R6VDcKYkZxEETvvSHKRBHgm1EemTRJxGeSsDGNRpKaCuhEg7pR1ed",
  "key23": "5xYLPUMBT8U8vAMfhYQKFSxAVdsRAacUzqm3FeKuzLugxktJqJ81rJGHXK4ea3m9Kkn45xavx4UytnrBf8BARJxL",
  "key24": "4ShimtnWrNhGmn5hMSBWnhVwVmuQXWbirAKDKW9jysffQ3NZQGmdiQTxZZt64bSXDQ7XXnHkv2TVrzqoqRFvnEjD",
  "key25": "2sqS4gYHGfB9tCrsDZHqx8zgHCZcxxsXRDZJm4EW6DMrgc1Wjbn25bWLuEu7cf7A9S6j8w3iS435Gx4tdB9kqWfB",
  "key26": "32iTZgTBgxc4vHVAEmd5CN6fdx9i2BCnQuvunfJtxJnuKRWD8QFBy2TZzzfPYsHYHdQmgZBSkcBy31timaZeqm9a",
  "key27": "5UUvDeqKEcBEVHu2PHXk9CEStNas4gpgJ6LwmbBuSgSkXjRUk6Sx3rcqBWuaJpkaGyzSovUyNCCWNPSVLC4foFvb",
  "key28": "2KNssUc7KrNKvTK28zLHQWGVBiArNpwP3fKrWkVebUvRg6x6AuP5s2VyKEMP2fdjGPmMVLWNFAg5VzwRLTHXwU8q",
  "key29": "2W6icFmDAXU8EtnJqe7Dt3qHHVaYekmKpEFFD3VUSYDR7b9GNuSoyypPYVWYTscGojW1gQi5BnqLsADZ6dTX7YAa",
  "key30": "2uwaYHDQwTUwd7vECjJHMJBhmuYNeTUdPHojskGaq8CAoaTXgaMPuuwc78vGpAgH2Hufro66jiW8nrXA9GSDVgbt",
  "key31": "itzmxvzoRJE2Vdiphqw4NHrTitG1aHioa4x1FcKzMVy2M31B7YGMtDrj5mX9fWAM9zEA14KVYP5TNYBrEkJcveq",
  "key32": "5ePAQJiWQbW5kb3Kn5Z8fmNYkma8A1EDPCno5gPFbi4F6hagP6iFfD4AvST7hWearoNfUqdh9xhXevBN4Pnzhk56",
  "key33": "5caFxFmZ5DDuyCFVar4o2mcMfMNeW6sHDYvXxk3G28yGGCQwndU7F2QaNx64JybU1bnoS9ppN9RPctekCE2QLt1U",
  "key34": "eJPVAAq6mhmg4hvYbhReH2rg9GXRP1rQyJUHsKYZCHNFZ8q6HLE1VYZdRrDTJHsDcGN27eztJW3BJDa4wrgT8Mz",
  "key35": "5wZgz7SvCqz7cofmGAKa9LPCsqmQFQeSM3Z4kpSWhuS6KfYhBiD117nDDQA5BQX9cFEV4MCvrbdjUCiByBFLhmNC"
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
