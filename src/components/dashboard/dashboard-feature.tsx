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
    "34rXbAFcg5Wdx3ShcrpiQTr5sg3B2XfytY3F5JYv7tEzSLXJ3zBouw35WADVbZf5ESnMkjHdjEmwqFopevnJn5vN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z246U4LDHgRwnoy7T35xkwtHtABacybxvbkGo7uFuW9So3WLRcMK4kEgJWea53xcJSLVMZnXGo4fyTAdVjDqhns",
  "key1": "yVdDYHssAPy8LAqNwTguEkVAqtfEmrHQ32Sx3DKBBG2LZv8D58WYspe9VdDAVRVY9h6L6dsy7Bkg9hTATW8a7JD",
  "key2": "49tooq3XMSiXEyJ1fpjF1act7A6hLopX9TCXwhCg8tdYj5vWFnHQPTFifYZCXTz6C4UZvJ3yo5ks5ExgJiiBXKSn",
  "key3": "4NCAmVggzV3Pbjt4aGVofNJWstCj9UJHE8chybijy3PkgyqQe6h2M6zWtHysnoSDycFjNVgv6YUKFqpNHDQxR46P",
  "key4": "4mfuAjYi1KmworoZu6R4dd7EPXEMva8CuFQVKNH6WoGznFgCw5MuRibkAenwfZiHDGZhQB2LDrDKQtH2C14w3vG7",
  "key5": "3WYa7XaseKU1PLVoi6RVTTZ4KPenDYtnz9vH7tu6cTXES43u4i4WFf9HgPQQiSmSsYSn8Z6zMuVD4DdoUjbD4Squ",
  "key6": "3j8C8hVuGfR9upJthUoPWcPteMa2QFwT8ihYPgf93r5qLUMwyxiUj8qZC4jGKjyw1HGYJBTvf6RiAo6QQu5nVtSo",
  "key7": "3kFEJGF3do3XPqu3DXPNrUgG4gxxpMcLK9FHLKThtNubGyqTXfMiHGxAHsSvBhN3PKxBsi1aKfVZK2P6TMc5PEHF",
  "key8": "yfQT2dvha6S43b8L3iZMzCNGiNUVajxvbsrVuyZZxWsxx47EHVRckmC9FTyaiVVwLq1ssiJBSvcqQ1nCJ4nNnxy",
  "key9": "3JyqGjgQE1AaoEmEgJjZfq5Pb648MZ78f7QAxgGRRwrBqhuBrB36TfimAeLv8FrPpuLh3jsPmYHp8ZHKnmKTgGQF",
  "key10": "2CTL9SwzLuxr1fuQEDFzGZwCyWV5HH6Kt2GPQ1BJoHqe3dVxoF3CVRfCjCbT3xCrV2QECUqXto4FS33pfZearG6M",
  "key11": "4UKewet2k9PeJqN8g2ds7vAo5YwoFD276rJZ7cnxjAPMx2DFCNTzqWgSspJZ14Do7nizHeFepHAe8Se8Eoek4yqU",
  "key12": "4Xi7aotajR7QaNefWqNHAFQv5tyyRTDjfFXoWJu1ujzzfRVDdqryfGMS4S9PbqN1G4cEHt4iS9jAV9RXxS73CNLF",
  "key13": "4hBrBCpmEWdtiFmHcvLRonTCn45SEpyvuV4BW99oJeE1bNK5c4MK6DxvVhkDk1u7LudzrMYVr11tzCrrFL2C6sVF",
  "key14": "398VBaxDrGTbxCCn4654NLFBA3d9g5DdfV3tVuSSYHFcJtevddwwgsQodTy9W6AVrmVnE9wnWzYGTmCkWrYowYpu",
  "key15": "3JcEpmko4rJf8fgzRt8g5YiNYAsgsQ51JYKXB6xfjYwNTUD5MpkgbQuD2cx5UsYU5FDU9xhxoWPWXfCFqmqeeAma",
  "key16": "4eTefZEq9D6GWSnEWvx84eF6xv1LDb6Q5GeeystQi4TQYTfize4FmjTVVtXS3WsYj3EHoBy3WGpVQKNCKBE5SLsc",
  "key17": "2PykPQxWY3Rj6DvK2vjzGkwKqQjLbHBrZ3uwivx5vSz3ND6eZ6XExiYjVxajWYaVF9TYJzKQJWhxhQeBNAG5bZod",
  "key18": "24qdLdX2ZNdir4Vqcm5yvUWANBAdBfYwQGNZTDTp1eqSMceUiyogK1VmALqmnfMtmr6voJi6LJ5vN1wA2pU2k3zu",
  "key19": "3KY3Uh7ArBZbe6Xx5ceHCKQYafr5aUo51ayca8H6n3AowHf9mm4QSuxnTuAHNQMPQqQpgF5PdHZnSbhnkhmBMcW",
  "key20": "hEAN1AAbxibixFkM9H31ia9JPTyK9JSk99piPgfDKbdsuWLtkGVz8nBoWqipZY4XQVkVVyxLPYv63uMTm7zLAUG",
  "key21": "ALfhccaYmnzZVtR5cKLmQyGj5nZcwtdiM3hUyG6JJT46QiM5s2CjBhB9rvjKKmqstt8Gpa6h6tmgbif9mUSdfp5",
  "key22": "tBA855WtwCDvhyZ7N5caCdvSMasbWBpfYefTTDGgbNQKzQDmwWZBnTRYWtnpTpe9QyAshRVrfjv8N3nnvrv3NbU",
  "key23": "4k4xmob2xJqFYM1KzCYaQC5pJgG5hT9FDwsRMVSQdfGnMVajXYpvxSBhT5cr3Qk6Qj6SRepYX6Lm9r7KzDrrtM3U",
  "key24": "56safQvcqMQ16ttvGvaoX59V2yus2CsXPU99qb9JbcZXJUxcNHBX3mShx6u92Zb18pLZENbv2AGUu6GY7P3pz2uU",
  "key25": "2KojCgPx8L88Q8TWf4nXiYdWAhTFSNqPMRrKTJ7e8cBavR5UnCB4qq8fXV8BMbu3tKTiFuWYU4n1dLo4m5TNHaYf",
  "key26": "Z1n1Xy6FdmYWFwitmkb8zqejS4yxqngUnZzadXXv8MM3RVnKVbbqeWVBB9bohFE5pbgXSiaSw7wxxHn48hwcBdJ",
  "key27": "4Wmf1LpyrtW3JhqdDV6HaDHCkpvM73GpsXCeRt1Nu8aLtBSvqQoNQQFN2B9zNDNM6uvBQtDKQBhG2JPiuXE3iJDH",
  "key28": "heMD96HkuKttr2iVpuWsMPmKiv1G6FqPL3De6KLKrwhBwcYqwJPCBPC7ckK3PZ7MQeTyxgNGUZTNxpo9v1Fi6RT",
  "key29": "27DQfyPFQ3nDsjqrgAbes7PMR52Wrnp13L2kPwyFyNaLQbM7j2jppDSq6wqraEe1AeNjHjR5Y3XRWfrgwCTvmBhj",
  "key30": "ZPLK8iwcogLUNNTFGtZ3zJVwj7ttKuG4gicur6iBRu18DgqYuyfGHBXUD7HYqH6FBUonu4U5AC8aUEvXeQwM6H6",
  "key31": "51MgYK9SAjR7LHuUqXABLm34wVfayiwY1NChhJFr5qStjvt5GWagNfpPtwG7CgygGUS7CvAxkmpLWV9FZeoKgQMo",
  "key32": "JfoPRZZiZ1RUdqiuSzsV36kn7q3ndaPeE37VEwjLgX3YpGqHB3yrGFCKBYesry5Vn62P28qXb5BW8U3a6dqS7sP",
  "key33": "3e7Nwpu9EJPwHwmosdUrUZLtu5bGtuCnRVjU1EFXh9wc3TRo3B9R6EFF2b1vRB8cXecMXxFcDujT5TzANEFyw5fQ",
  "key34": "2k8v1Fn2F8NEe1yJase2rMFNcR5dUoyYbKe2cWt3yHpU1MHkeKvX6KNdEM5BPaa4UKE5EvLwqKLFCpQz8bLPdJpE",
  "key35": "Vc5JfcRjdA9vPk6jRXccG6Dv4Xcxvtx8aNyiNAhiGo7MQwRTbpJ9erGGj1KjQKgChssovRR7QgivqXKPfNRMUQZ",
  "key36": "2vwW6rZH6LYpzPKGxCurYkuLX6nkwsZYrwt4sTe1enEkEB3dF3wn8GB7hD1QLgrhc1EajG5uUq7mFEZ9r76Q6zpS",
  "key37": "ZdFHofiskuLZoSjdYuAd8WC7brPwKaLCckF9H1dgbzTi33i2Y5sPj1TmR5RtFFpmG2JwDjTofEwpfHahrqH32kK",
  "key38": "5wsMVrkB7BWyB3vrtR5EutRnKT6WsbNYsz5v1KCtpg9YCGvea6Gq19cj2BqYTo3vt4jGyFjEUjUrfQsCniWubVMy",
  "key39": "2uhKQZXDVczHWcVUhFjqxKdJmEcMGZK5oxGRgw2MkZnEsTSXMjwHvttjHoCbZunZN731r8XeSbHYNus2v4cZZnmp",
  "key40": "tUQAGTRAq61sn5VZzEKonLjN5Ww4dstcUdf4JttnBPPXVAaoxh4bANcMdNEXQfcorHgLZeHKeT586SN3yxhvpyw",
  "key41": "2WvvKdZgAk9twiZjY5xBYf3k17NgKk8bvXXAXjZSQ1fw72DEmE1uL1rJAGo3KEqMVzQsWEAkAh77GHwjqyD18agA",
  "key42": "5WmAnKBURAhMHYzXZRdSpsKHBKPStUMbcRNhH6U3Tsdx3UEwVEcCrs1HjPWXP9gMA4qGbugKCW1xLF7gpfYhZpLf",
  "key43": "3QjDKTh7PW1NpfAM4894zTZxx6cP2wjMSsBPssdiRxD5MXmVC6sd53qXfcfqdyuVFS5HRSQ2ZfeDVE8Qh2KENDC4",
  "key44": "2QwjZtLhY8qQZH9ZWMfms5A2hBVVFNFSNfhh6fwWQQ5VJfCXyG2JNWzzK1uHcFWdLt94mcnhymA6wGUwutfDxb15",
  "key45": "4GBuZ3a8eqBs6c2ZV7fQ2E3oWrYkYPDvmB7C5Fo5bTfaXpWzJijFm2Y5rUTi1pcZ8v4ab6tQCBqncuvY42JBCTBX",
  "key46": "4nqT5JJzjahm6pH7Wr7ZqaNUhmjVPgy9CANndVJqEaXDjrkRva88BcNykskE8Vm5TrikC5ZpwFDNvEjbEbQi8d3X",
  "key47": "5ZGqjKJqT1nWtmznN6LxnDjPMdM8UYu73xMhUfUzc93qT8LmNYWaBEj2ty7Y1a6wUoyiA2gwdwosc9j3MKpSxDvV"
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
