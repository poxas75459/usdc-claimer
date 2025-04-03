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
    "5U82JTWJMHjzsSw2YjUP3FkCgHSFSShveDqnzLD8rEMYEdk5jJGCCzVKRYqfhX9BkMAeAtoHd9avNXHiS2wvMU92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mzrB1xCJBUzzjsTXX8a6wvJdevnba7bbx9eRPnP6gaW8BJWRTWDWDvFLY4WvNmJPQoBscXtbweXZn3tUSUEtvmB",
  "key1": "2mcrigbXHjQKFvmTmu5p7tBZ6Z8UisKbpdAdbYx41LrJxjDy69WJScuNYaW2zzL13Xse1xgTeaT6QZpujzLdZNHt",
  "key2": "31zkor72FiAUUfsLsqeD9yYWGM7QZzEJuGU6ri3MqBot8V7BugrURtZrtAAkiNJVYmn72M4wst4LDbo2Yj7uXXVL",
  "key3": "MLQDqix7fwMe9JcQH9hjS9CX7ewbb7vbU2nSrtMZDGtnAtsNXm14PEKjqX7SKtDb8fsr9DxCmX11r1aQRRPkrA4",
  "key4": "5REEUAbti3NoAnVjGesCvcVJjqqACJwHvK2hWTWpEbfC4sUYzudTzs6MpqsgGshNQdSroCHbU2f4eJScnt4vZX9K",
  "key5": "2t2MqEUnWhaEJhjTvdzQqJ4egHBi1SJMy6c2xyvtTBaYk6e4a4yG84kc8gxUsknVmxLmgXTDuchMyiY7r5DinZYb",
  "key6": "5oXyitFr6SexNHiwVZLn58oZHhpugqH13rzJh3vrDzaVVyLMZ63yMj7Cn8go1TbtVXx6aTFzv9Lsd2DP69yRpkQp",
  "key7": "4poNo7QB7eAj9bJxnNkrjJRyiGCF4Vme6MgVHHjericPYpDsFiGVb4goCMsyjBnEw3YJkBxMLToBwTtw65SJkfpy",
  "key8": "3z7nvAvUViR3joCjMkE6dnEF9Jt67EWN8KXpf8TZ7YgDBTt9LJy7d7UxRSpBziHcfSiS3i6PSQuE8UuLr4roWa4L",
  "key9": "Cw2CrBc5UUTKhWtmdkNYiBqgMwzx46xWokrR4bYpfhbDc5yVX5AkuMdBYzktEjMmnVEzs6GnP8ZX3PoChnaVtTm",
  "key10": "4oP1skfkkhvdGcAxhyc2DtgCMMBd5inEmJd8b4JuEzLzEtkRRj3yrAScN62wERoEGj6AV5AhjWFyuyqwL6YNBjTn",
  "key11": "4ZGNqauFhrbzy1NofSm1j5B267BLHozeP7gbn7E8haa7tNaSUHu82PcGdk1c7okhChXqTKQ3MLEC8h3Zif9ncmEw",
  "key12": "2qPcxyiC1o5NGkf7DsWeQWdZJkhCZJAGdmQ5uzpTVaWVaqteVEHDQSC46nWaVJMy3vMCiNCJEF1wBd8TLpH7qCnA",
  "key13": "2GvBQ4X8qfUG9XY229P1F4z6eRszmE8PcKYvm57vgzbGEShnAZkXd7EFYKAikcEYUHrpGNXo2a5GZBNXTRE31vZF",
  "key14": "2yx2oqphh7A3qs96zGdgqZ366gSpLYVnDryet6orVkWupkWhGzGHptaKH1mPsDRHU13V53DeyY6BVs9YNAqjX2uS",
  "key15": "5ydFbNmxuxnmoJVrSzVP5op2TBX3LnQjTqmzHoqLoKzuMSviu4pYBZmoUQV86VsynfKLoZuiz7czVneFnFxAcTMZ",
  "key16": "2ygMfPs7HEGP6cm64FbqYwVyyyseiN5PJYNaivskZj8jzRAuV2xLJZmoTDe7ir4HFM2bACK4Yza1MGzspUbsCYn2",
  "key17": "2WeN3gW6vkGvzism3rpKXkAsxbNu72j4RWCKa6wo6wht1zJ8FZb1qNAyrBShkz3v8M2XBTNcKSS4uCujZHLvhCTF",
  "key18": "3kcJ9TCCTTxi4cKibTBFS3Ni2VznqP4UHxKD1RKBcRL8KKRZQtvTFz6Hey7SHiF3e3iM4SAxnMGi6p9YqnpaqszL",
  "key19": "5Qx9rezqfkAABW2ASY41BLiVj1pNuEGnYnpGLVM7RkBRz6BXpU5PxdJraKy2HAEUtcV1Mp4FBabEnYAVBKgZD7VY",
  "key20": "45AjetVoynPXVjAeVoNb4x61JpLfgPuyHyLC1RFvSssioKnCmd9d4766qUJxdeak3vcx7NdPjgytwuFqTp9HWxhK",
  "key21": "2X7J6CXwukNqwE7x4YLKRUUad9gDpFvQQFTWmxt9qwA4ukQpH3D7gwSAqsaSQzvX7vfgSJsENW5ucinFkieWhiGm",
  "key22": "4f1Shs2NVvZVLR91J7botzwPtELN6nNX3KEiv433HEa2w7AFJWYModpGCQiNB9GdGJeuktdgfF4KWnm2cQjT6X9B",
  "key23": "2n6sqEdJqWUh5dRNdGpq57iiar79mn3DXVKrqN7E7E6ZZUPWZdn89rZ11gKHTsex7WgoxnYEe2dwPTwamjhqjCHZ",
  "key24": "3dM6LnGY3DV2XV7Sos6PCKXHV5SM7zFZkHcaU3ZEnzsXrsBQDcueX9xh3XmpGUjnHjX4u29vWyfBLsT7FmAqThkD",
  "key25": "3e8XkfvUY8oCKCMDK5Eegb2DPsswShRpQhxxwfwoGTNSgxVkCc8iuaxrwBEP8mPiKJ7A62BJ32HtLMnotEaEmimf",
  "key26": "5GZ6jo3CTpDBcFoV9a3PB4HxnxJLxWPsbiPuYkpYAGCh8itiWh7u6PDaaABs813LM2M4eBydToKn6VMJMkbUnkS",
  "key27": "5DYgrMx6dceR4WMj5Dze9RD7hG9E14dvEyah9Q718jxzNHBSTn71MgDtQdZhiSne8fZNNPZjLS64Qx7QS5dzGAdW",
  "key28": "38s91e9Z3nHRCKKgjqiEHmVcyDzKgBbENPuTHztKGFKytSbWDrS7cYZNXLUtQ9j5JKREniTXwn8ru2MJ7ZbdYng2",
  "key29": "5QTU7ke3GY1rpBDvEesQRHB9adhXqcprPxTGPtFuoZTXoTFCN16v65FmwcYcE7ZFUHt82QUc3zWGinotYQSXsAkq",
  "key30": "4WjynfnC2XzRZDjZiQpiM2gZbSZjGog49mH25CvHSRYCvctipb2veKJ84zM53YeVyixK8mSm6XUWc3PU9tNaL7Sb",
  "key31": "3h9hATRAGTwTpLx4fDLrugyFbR19651x2GZHgZ9NfuBEV6zbnVjB3hqkoeTKTQNcWs7vMqTzezibxWcApoVJGEY3",
  "key32": "2bAf6Durx1A18JedziDFH4wuEB4Jp9B7NoyPGxMeBNyaQDfSfvuj2mwNjpjXp9yD8sPLLqb2VPriRBTgVbKhRjaD",
  "key33": "5cYRjEv7rthWJConwusG3885bXJpkexNFoYc1FWwEmbj3fMRdsVz31MQkjpxoPHyuZeLx1SSqU5WFUUc25oYFss9",
  "key34": "487TL7BnM9J3jEvEayvaYzyvnW82wFaTUm4wZGSsSvKrxhPEgM2LhoiQLxrbyn6CXcNx4ihVFXeYd75jQ2xXqfG4",
  "key35": "2gXi1p17icdHbgJQozs4sDyNd5Gp9214yZf3JyJMBEnjLtLUEPp4WcSVdZ2ZeU9LBgeXV2NmbWXcnBxdsyhmpvJ3",
  "key36": "3qeb75mAeyS6ZnvEV9ArQTRLVpFiDABEZawTwDRDHaRv4RCvaR7LX13CPs3CtDo4uRRPviA9GiEHUG8tRrqq7tiB",
  "key37": "5au23ks4yn2GU5v8XcRPmuVsb9mUNBUtsf1AuFLkBtj19GudDu7yWJ44eqjiwXdEYMRwdfFEkVBAZGKp1UZmssK8",
  "key38": "2ivicysouPbnLuwAD26YQJfh5G9C4wMR1i7K3AXjRZ2TEqcoEsqAGwRjZnmKJUonUS7NPRLivqUGyrXVUDSB2Hnj",
  "key39": "3apiSL1MrEUuT94keG3GWWtxBvLP1qXv7BdUmZ5A3yDBnmd7hH6v591hG4K3HGgbQGsB7P2jd2qCY1d6AM3wBY32",
  "key40": "4PyHXXvpY6X1K9G2RB12vGjbSTKgATnuF23gdVVNtFBAYecd2bS8u7qF5tJ76BuqNRF9TzZncVQa4p7HqQas8ZTa"
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
