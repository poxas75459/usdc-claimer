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
    "JyPCd3UpsrQinXBSvTu17td2MtngtoQNfuZpmcAgPr1md9rb4b9drZLGDxTukKkXFvnFGJnp9cPM7JcCHgqC5QL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCDKWKApRKP8yDoMXGwzSHtujydhPHBndScAGYgUvKQVbGh388tDUAVLW1R44K1VV5pMhszAw7J7PbKsb4toGcY",
  "key1": "2C9P28o54uokKpEbRCm78Gjk6fi8CyeFcf2N2Wu3is8whQk7anDGxwwEeZnCAVoSZwUy3yEbhjFUEryv78nrhfn2",
  "key2": "3sn5PCcorMWTErF4tXghjLECWLVHQ2nXZv3ex8Zbb58NoxdG1qfYXMPz9AQCxPLhXum6jnnrJ3i6igB5hgE5A4dQ",
  "key3": "45quyWV7L3XSYvPQdUw9UDksK4L1bbdnRJS2vyvvRNAF8quAApsJLrEsa2YyiUeFFx63CdFUZz8erf6Dgf6shaXZ",
  "key4": "3aHuVf8itbZAQetJWet8bQct8VwccEZcKs4dKTvidGHHUuxCvSHhZFiYrcUW7RwBWhzmUPjmMFUd5vvSGrFhKQXQ",
  "key5": "4mWWTEdXZiKar4PG8rYggfKbmFTaSp3V2zTzUYYL7DrCzAwdkZLftMqBgHqfSqJt89kfEx9CYbKAhhxbhgSjv2NZ",
  "key6": "29YE2N4q8ScZ2eBSNmp8ffiZvw85rjnsNo9CK2vZwpGRxVx4QAwsXzHn3dxPjJjgLVv1fgdMFULu828bAPqEzp5Q",
  "key7": "4sATT2DAKFTZppk6wn3Pb8nXKzja2KxSS55jwz2THmzJbJCi879fc9fffNUsVPzj6VchnuEywmWsK8nc3p5pfbDg",
  "key8": "2WkB3B6LmwX6tvoJH3Ht6LhcquD3ivHw5iAP3EXCqcnBUUH2yM5kuvrQtxrQFTPBRfWeTKkynj7mSGyQZyQFv14F",
  "key9": "3CjG4j4PiQcw7zSTumNXkT1yjSPJw4NJKQWsJXQrAnzoPuUY8A2NBaEWEFAVt6gchNckQM6T51JtZkZWfLM7fH6v",
  "key10": "55HfbXsmCaCtESCNaTQ5sJi3bf3hajVruFjKZBCzpCqCtxZusoBk8yvaC7oFyyYXWTn8VRvANfyk34PuH9HJ45tt",
  "key11": "42JdKY5hGmnY2jZobnrT6qUUaqrenGmoeMXvsY9gB7cDLAQ5rbR8CV6ribPAEfx1cUQnUEzqopUJvWKEP6bxCXfK",
  "key12": "5a5AZ9hcFtKmjecvPu8GsEX9gHzog3DRvw2UDYyWQK64y4sGwtk2B5SYzBueqg75q6GU7bg1sqGXnbJx6YpJejVy",
  "key13": "3a7uKQc4P7EhbAzwy859iBAodPk6Nppa1P87Ym43Q86nNkorczkU8ZTFFLA5Htmc9Av8uMN7mDYRdLDDW1kVbeYg",
  "key14": "ZZ4RL33eVTHdbEFmksq2YCydepj8ZRNHm7QQjckBvgnGGV97xGksxcY6DgmxpjKZT3HfjJQQHwQnmEkJasgrHys",
  "key15": "xfoYU5TNSmsHQHNoRXPgtSpLk5z1Xo5aaybX6d3g8Dww12GxbrT3BfniysBiVzMDbH8ffVgLDs4mrZm9iHMe3s9",
  "key16": "2BH1HAgFPfSsWGw8L4azVJ9t9GP51e2A2vnm1ydZXS5m5jGp6nVaR4A8fUFn1Yk3Qs5ZSwfkBZ63aecydQEtBWqX",
  "key17": "2u5o4oF3ZFM6NuqoBZPB7mqTmiFxcr3seP9rLVAN3nfaHvACKH7MPJXj19kq7U7AAz5CCP1uXcxd9LV9ccv43Kct",
  "key18": "2BhgasQXUyJ8PminpkUimLrx3ujK46KVQdqtmEkqc8uvEnJRQr1682E8gasKJ9LKzns2BPo6QuhXn7Xzme6kb4Vq",
  "key19": "3nyCUSCQoNNzCcLbSSvBDMToza7ntZ2RXajpwqtVFWsfFGGvheTf2GX9xwPR4MoYdQz5YqU9vJNJW3mUGTqpAtHR",
  "key20": "27rhe9BpFXoTAddC6pYqmqaWSALaFM32rNtEUGtfNVefGy91wahP1NZ8q4UZ3cAbNLLzhF2wA4b5zS8ggrxSmpLy",
  "key21": "3enHCDnacWBZWXdiD9KqVcUJoRjU5Sm4Z3b1vAXFq66vCpSUYQCNBFPhv8iweaqBVDcpzgzRqifbQ6v4JpfnvESo",
  "key22": "27JtmFLaTccaSV5uHoAWKF1ddNXua8h5G7kVrxCdbYQ9DrYGCe274S9apdJNxx4KSSYRXcAqk8oWyjKpKAEMTHZg",
  "key23": "3Cxb9UL66PfKS6jY4Wdb2yTcv4XFqLkVZ51MeC51SVcaT2Bn4aK3JNXNCRVmQ7ZTeuWdYsUiLU1D7JAbCRSnRbk3",
  "key24": "5Hre5RBqLQHtd5ss6k8ST7ZJ3wUaCZ1W6xCt9rb8YhMDtXRJ4BFEihURNdiKDnwRxJNAj8DdRXPZ7iJ4v3Ev57XF",
  "key25": "Z156HGhaJwizyRLoWDTfxQNFiwK1CKSpj1TPmtDE6PZ9qnjpPuTzFXMwEhu9mUoS9nhAoopMwU73DttGsVmPvh4",
  "key26": "3bdA9moffM6zx9ZGW8tFifUHt5rWLmR9eKahjvuqCBsAf2j2uxHE92Hrat94AAw8dDb3fbF21HYrdJYXHGXMsG9W",
  "key27": "2NrKcHjReArJGmq16AanxW8x1CFYJtZvRgvLpHTy4VLtGewZ9wEGGde6Wjmv5acWZaEEAb88RYmX2c4vxSASCxYX",
  "key28": "t4ueimHbxKTP9nDMeosEEQpTAn1M5AaDtrPr8CQ6CG9rdzxWjDmogyeMacadDpk7vDwEboLPMvD7zFoTDaEs9jB",
  "key29": "GhBEXHegT8GYgEXpkfWeghbHxPTbKVnAYp3h8gBJj9fUTj9v8an89k6p1rTKGjGZquAtpFYVAbubg7nqoCtHTBb",
  "key30": "4myJ8ZdX1r5YZRxs3sTZLY9zFVN8CUNHk5QTjyYS118Upm6jRgGrUeVzmYtDuSaig9kqKJhXsNdKi6Z3TV2BJri8",
  "key31": "4Yhm8s2j1hTBwYaE513usXvv81LvgpXu4MayXy8h5YWcV3rfdRnzKaTeZDt2PByuvQt7XEk1wXXSTBm5vb158A2W",
  "key32": "prGdDvchJqBVkgmm44VKDUQBtRsL68hzfK4NzgxpFwij8ukDtPjU5vnrjgjzJ8VZVs3pDb3TofrWCb9nPQzGCY8",
  "key33": "6USzj5yr9cLJhEi2n5ftWYMn22nFyCKxXfqZdMJBXxFi6g8DcDM9UfiCrV38bt8qyLxrXaegjwXwMG6BYDC91wK",
  "key34": "3pdtQcXDTCwTPKwFWsE1PMF6paJp9NczcBkiXg4hCKtJ1xyR4S3Ytxj3fastN4Up9xbuicRWLgv7z6c1rSTg5abB",
  "key35": "4AuzS5JQyE7cRYJFhMa7xDHNMs9GfzJ5dTagWRRksV84a3JzvzHt5AV1poA9G5C9ChzCpHFJ4SAQ1EQ4dBWgBWkQ",
  "key36": "5j4P8wPLyyCBGgU28H3c7gB7Es2MCLhjzAHCBnjSvMnD58QCfgBeEZTbtvLxSbhzbNXMxTarmAJjHWybQCwiTtJC",
  "key37": "5jcy76B3AELuQdG7ZehPp9i3wL4zX1B4rR2p9VM1p1DHaKdwZjurFv2CphFxAFVzRFj8Z1h1KmRgP8QsHbXaPxCc",
  "key38": "2yYQzMz3amPsAs678XTs4yNipCxwKTDX6PrbUTouX9KtvU8SrsxqPEvUXXUVNGA7sut2c56cZ8zNQmHeFTv57t3s",
  "key39": "3JLgUGs9JKbxsFHSibXsB1M3QXFNiq9MArDk54N75kCtGVqv3eGBFrxxHiVg8PnH1V5YvNzJ8ci51LwhJUJD6FsP",
  "key40": "iArLzqzorf6foSxhcrNCkTpesMug9M1nnEQnrmCbxbsoaX7vrYBV3vzf464SPpJk7HbdAFramQhxcao45qvdikx",
  "key41": "4FQQRDpxxYb4YEwKW8eJSaVEjuC9utFWFwgfYQA2d4nZJLmVHPFN4g9RgMMGTM5BxzVaSPksJLjmy5QNoWWikgBh",
  "key42": "2v4TdDcJdtzCsMAQggc8HqLQ32GLSDo3mUpsqNSTECA1DRpZ5yvkS49b7Y8W4HbqVmN6Fvy1muefjF4eBkSeyRBv",
  "key43": "2zHzjsK6gvgwTr3fTU3KhD4fe5UmE57Y6EjMjMThhZTSGsszVFD5NV8VDWHLLgaEvbVEaQNdaUrKZLr9x9DzXysP",
  "key44": "53thTvuF79BESmE3c7hVQDDB9tx7kN9AMNat9sJHApNnPpWXcDuBZYGZaLSd2b8MKhmu2GBggT8J827jRZAzo3H5",
  "key45": "2xyKeXNB5jwkFrUHTrQmGcG14U2CSc3N3LHeSA6uyg8yHSdUNTYyW9A4HU74Ky3skj5zpGyYeR1J3yxRrcr5zX5t",
  "key46": "4jrXVFYK41m3EYSXCtcrF3hTTzPmgM8bEtKAyr7xbWeDpuBjbvwZn6DsjYFB13TPuspNZp2hfMpx4HqJfgTjnwVk",
  "key47": "27MJGD7exknw1qFFBPE6pkQE8x99nJkpeLP4iUxNU6HE8q5qjixYnXTp47Kygo6tkKxcPKWA1KNvjjYSNEqk8EjF"
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
