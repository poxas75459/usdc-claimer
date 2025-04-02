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
    "34jHJMSfhuvCNPK54V8QsURUtwbi6GYtKyYRAZx8akV8uq3KBx7SPPvWbBgqJ3ah4dzgq5FkrmWkU1wAP2LYChpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3erK7Vpo5bZjHYjwwv8qoaLWPjMswjQWLievWsZ3LX57F92Ecu3ou3zMzVVbv3tTqZ3Mp61dPb2xVcpEZQweG9CN",
  "key1": "5oiWJAzhoULF5RydsnAz8eno5LKjv1K97Tjk1mi3Y4jvaFzBQnWWc7uqVuTPiRemsLcqQFC2QkVD5FoQHzmWhD2H",
  "key2": "2xXwK7NuyNujNUxjDLDTAsA2oZEumRBPYGR6UamZpn7y31vUqc3M4pmJh82mcXnASGqcPy1V96aEGjjwn9gPCb5T",
  "key3": "3bhZc5CnR3HJ59VaMJsC7Fxxs7MzXw8wnVQ3NJy7J8eY8AZzMYgxfZtNTBuD26zk3UDqgRLfnovvM51APM115qAK",
  "key4": "zyxt5J2QY9Xo7iTxbQ2c6R4BDQ8wEVNDk7MXgcec63YQGo9mpftt633uK3CBLQAgVdn35LQj5utmAtjNi8gQneE",
  "key5": "24ryN8poQd8JC2VG75E6WSgTZQs1ggsokuyMHNfiyR7qT9w1qptVa73erRZ86bpT7r1QVvP6s9TZWwQfqR6YyeQw",
  "key6": "41X2hq25cPtiF4a87R1ADtVzREh1STZwzPD5n62doXRBijWGQ57k6DJxRYJhiYjurc1JD3R2iBQDqVavU9JyRi7A",
  "key7": "4hXd5cXMrXH3C7P9FmzAF8T1iDU6HPqnsW6yptqCQ6Dnt6aX6kLRMccZ2FAAEeCRXHzU2p1918rZppurgezJ4FDV",
  "key8": "5Pb7vM1tBAR4f6TNSFsPvaj568WnYRPJghHuycYhWbiBWkbBhJ39WQHyn7BTgChhwW999vsbjVomsGiqU63w4sXQ",
  "key9": "5JD5yaESaJjmaXwnesiPqfgCWxp6hFyYhumwdpmcSJcmTkuww1c3Q9XgubFzJRScgXzW95dMdYgjaLQn5uxdfXhV",
  "key10": "5axUbTGjbWeYEEBvFShtS6qvQrLJ1uab5NtxbmppbNj8ussfj73shHf1vBghkBVGHodfeuYZg5Kd5VdR5B9cXpnd",
  "key11": "3pU61zsQ7TMsSuHbCYe1EHacH5aHD4JCwR6mYaBhRGR8361NVbWZy7gAUKdtawaMxoq7y2D7g4bTkVodrBhEVVdv",
  "key12": "RUg4o4PqRPkffgQV2HJwqvcVTxCjnNZgsBesZ8MSCxQg3jkb2CE4nuDrYvY8LjSkTaoYYBjy8pD66uQioVM7QsV",
  "key13": "5CpfyUPsm5x74pHioJBhPCw2kKvuvCsc9SivtCK6ATB2TXaiNUzDaiyeVBCFBoVpvmKt3qqVZgfB7Bm6sCrt2W4m",
  "key14": "k7SFXrAAtVUpfjzmnp2gSdvZfGuJSxXaMJJSjk3xYRTNUXVAzu9gVePXxWHo86nrtL2pdfWZJF5otXjKzXrLqoz",
  "key15": "2fBUWKY48mBpKjEdiqosCrY7xv1XdQrMztPT7NoHRffrvaKQkgkKcgM2XC8PorACY3ExK4bx48VagMZtR1rKSN7Y",
  "key16": "4xPvDo3QhWMBEY4BHHNUUTahXXubg2XjMRnL4cMw5UJw9bocyf5ZW5tYaHL3YFWadmUZ6dmuzNfWtzksc1HBWoYX",
  "key17": "3ASczYt8h3o6BqSuZznEwPQcudG9jkW68ykeJq1Q3csF1NcZheWgMFgEZcNjhw7rh2R42RbTkC9ppH8ueCBDXMwR",
  "key18": "sHyruHQq8HPLqUGCXVSH21TEkmwVSUioFpViPr8QZzBwpxyJrpQCFkJRgcShGgRw3f7gub2aKnWNLEoTiUjdMro",
  "key19": "Eew6fpXZdNzVb8KXaWJA4wEShRGBEkmm85MJ3T4Rb3qMLeYQ2ooc7TLnohfXB4nfZoBZ4fyKzxkxCu2wjESTzYi",
  "key20": "65xq3EawUuFYfrZBeJTYAXbqMtS5cMwhPF7hMsvEpGJ8t52nAdEfE9415hJndFYWTQ8SiJSYqZGUTeVx5yubJUNe",
  "key21": "4nvMnXggZifYfttiuT2b3Wo2hzrsE4e6Bqyu8b1YfEUTLVc7Kqjd6zfSZaYNtKe5r15DSEJ2vQhcqai1FjuaLYr3",
  "key22": "JgSYZvWkSv1NXqkRYRmBzi4qZFWYPazzf2hTBdVX3GzNR1t73JJj8utFNEPfvGXx8ha8obySDX1TQe5ssGhHEWT",
  "key23": "4UNQwsmgMnoP5kAZtATDUb8nwZtu7KS273RCQ1DzQAKNJwYSFiWdfwPhZE8EwngMPXxaQfLw8oz99bJEmCfvhNig",
  "key24": "4vLK8WC8RbF6VyqM932qWBSTpK4tAfPZycoLWokHWLws8nA8nEGCy6kkQTqQHnBuFssuGckpLoxUHfckWhqVGmAf",
  "key25": "4j95w3aT2Xup6UaqgjutwffnZXiyGnfNd5EieeNqetTGC7i9f9gNbu7NEPdhufSuRDT5HWEELQJsyw575E27UUbo",
  "key26": "5WEeUVTo6GEUiRR8rjyrCDjaST5p9VWz2Pi3NS4xK1FqvYBD7GEKChprGEocYgJUniX2vqeyovpNt17Lc5wmubgu",
  "key27": "3MYPWvHFH2FaToDhhRPZ1UYs3pzQeqiY6UmXR9eGCNPehFvJAGyqHnw3wx3tgcLDgfvAvfWcmeyQX1Z4AQpvcr8w",
  "key28": "5stP53aUFWeSejAX1QLqPZmFz1LB9PrpR3C4YAfGNkLgNq252pL281YXYGbk7X2rZdpyXT9oE3E9hDgr8WMcJgqm",
  "key29": "5qB5c1RKUe3RMxKrnuRE1x7pAmap6nRobvCuEFqtaYjXVehTqjxLXqCBdcSojfgaErZWsFsSNXBVPWjWyaB15nyq",
  "key30": "JD4F5PvdAWn91TvF2ENKxJ3dp36rziNi4hhcNS5Y66EZyggG8EZkGSaPNsgeQCzJYGCqfiVFM23uhCmXABaZTuc",
  "key31": "5MrmAZKAzDg4JLo119vagtnJ4CEFLpmzby1AS9HrE15FfbRNvUCtkrZRLvEKMS3Na3uTydR71m78RioeViKVrubq",
  "key32": "3kKDG2ZdYfMSnG2k1QMqUyJhAAU73NTtjsczXvXPs2YS5eeWCTXXX9MEyPBT4Vomb1k4Sk6h4C36VisG2KB6pZzh",
  "key33": "2J8h4qH8teY5Dps1vwz45cm13aS9oF4zN1aWmcEnMz9zgnVeCFmp9xMP79GUmRGMLPs7F1TsVdGuBQJtD5hguMqN",
  "key34": "qrEftn91d578JLEFDVy6Duh4PAhCMsPkaSeBj2RmrL1F6WNSem5akJy7kAFaKtby7dBwK2zYUWB7KjcZ6ZCu4SF",
  "key35": "3yKKce2pmPe9GZGYTQeu6qAyjPVykFshjTjGfC2YLqEem2KFnYtzfaKy22fZqts6TWF2ti7NJ7Xsku2BtUpisdrk",
  "key36": "3SuuwLVWHy6Q8xzxGSg1eyrtkcXx2f5G8pDPdg3eXvNig6n4QkncG9aYALJqsBuxzazxHFNY9rU7dZtmrAvmbpm1",
  "key37": "3EYQYRwbznHkYwLpNxFbNtvPm1FjHn5DGdBLYoBtrKCz2DaTBnzsnm4cMUz3NeDkq5Lt71TuNMTAkZdwJA66Kuiw",
  "key38": "7S7fYpox7zsKtyAQJH1oSU5vYFBojtUP9haAATgQwyK8pR1uhC1Yin7EEUcFV17E53KZ97xPTuUUeVRp1bxBK1F",
  "key39": "4SeRs5G5Q8gx9B2Xx6AYdywT1KV1Pts8RR9rdXFEdRkxPair5qKbymP4DVTr5UoCdhquxxekvLtB6QRTi6hgk4LT",
  "key40": "2MPdFbfNRDW876YMuvJV1rCffjgd1AEu5BV82qHfR4uFUkF6yKPPGLGNA7RvEDpn7n32awYdtFM7mzS4MJms654q",
  "key41": "55krSJ3nfaxSp2kH9VkHEfuP4ma58PeqdsxxB11xrY3CKZbkwWiXQTbGeeXdfqGrJ6erMRnmigE5ACtbEXEyxyfv"
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
