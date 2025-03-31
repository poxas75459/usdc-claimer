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
    "4EyxeR9aJN23ihM4TMrQgFrykc4GSrAqFrGAyEDwKskMhCKxLwEkVyriX4gEkTGBnrca3gkoT95FtS8A1ngfH25Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eSGtdwGi43h1tU6sq96zZ8KYbqvezUxSp6q4XrTUh4voMrBThw2qS3LuCy6q7zUmsdHFXTtwhuABhdgcggfqb6",
  "key1": "3JvZQoiEWJRiXdByPjpAmSqyBByMgj5THmS2wvh49dUtpNzdjgVBJ17CmYbkJ7DfE6Zj1v5SnBrMF21bRagA8Axv",
  "key2": "aVnxSXD2ynVw54gREbaMWdhqVWVkxspQrY2BN4hodKmoAidz7fftq9XDvXregS87dQtxsKTuaCdjxSVXEvGcdwL",
  "key3": "5LfTmMTpga94g45p5AtwCc7xA1jW77CCn419nwiUggKiyFSWQ8e7ygqduadKFKrKyhefRGiEZ6W3y5E4KtqDsAVp",
  "key4": "4ecGX8t32f9hRroNYDFQLE3PHXkWNsU8BoF75ekfcM33PXMD67KumacuP19eUiJQ82yjY81Cadru8dkpYAEg1iWy",
  "key5": "5UnJ7VV1asd7VAxjjdvoeDPpULnSrHrcExRfQQbMxcfpH6JFABCfr7JSQHUmpqpamusHZa2CgJNL5b7iTA3NM9nn",
  "key6": "4fJo3mVou11nxw9eq8JHnzxPkjjsy8cZNvoC1gxDtnLhTvTHNcNewPt7zaYtW3cAgBWmquBPy3bieNxrBm4kZBU5",
  "key7": "543StAyCvYLp6w3GXxcZeGC2Z1SJ2eUMGBYiV1rgTCd4aMEw8unBP7uTMfMAvEmNGd5ZwJvLPJ37wSHLP41715hN",
  "key8": "3xsd7iSSsThgiC143mXAU72un6bicy7jrceNabs98LdPnxZ11qRS2Mqb86uLiE4aW1FuAeGtYkXpB8dLbyzfkMuG",
  "key9": "4qqZZwDJzDYM5j8vxJ5ui4kHAruLhY7AxXMbJsejv7RwjZTfgXopKLj3qc2dEfEdwGkLuthADjqSqzAf3Mm5UBXE",
  "key10": "4PGjuQhmfRkwA9GBjUeWZVUeBYepduZC6pjiMGk8SAp4Hqr8JTBkV8Q8WGV4um2KEf53JTWbS5YN3ZLGTgLmbozz",
  "key11": "4W4VnzW9LysQZDxzZLXgGcvDLA1CDgfT3ZNgHsLTbcX443MX6VJCAFntT7og75takyUgDU12bQ9jga8sg1PXk2h4",
  "key12": "ogEwT4QzxYwjSidjGbHu9YQri5j4Yfuz4xCXGYECfscY6Sujbo6nb7DLqQsJudJPgrk7QPsgLfeEpLK5cM2uK1J",
  "key13": "5DVBuBxs3FRjYifYfHKPYLVQJrvJmTXd3jueYMWSd842ibQPkuGEzPu7rbU1y4BvbkZ1U5oRjWSSnooPgHKGed5n",
  "key14": "2LGXMAapWMgiMauqd8e7vBtgx1q787sxiqJhcdB4Fk9QiwSQkaGQ1VsrH9J73TkLf3RwrDpXhudnwNfSYFPmtcpj",
  "key15": "36RVuPCH9qWy5ieqKp8tvH4DycqhJNoYjSKoA1HGJnQDpVKxmaqgCiVhy6XrX2FdER8sYPjGgQUctjCX7uaHet4N",
  "key16": "3toZfQfbGETMdcCkKR4MFMwWXTak5EDWkhc8SmnMo3QoTvbUo2nJDDHC4iEvvYRX5UFtV2QxKmQUrPqqjJ7KjJ49",
  "key17": "guq6oBg7Ye9ZymUQo2cakAgKGLsCifKkTsxb1z7cpZZ5jxUxqWDLrXa6Bsq5gqpem3RwKj1UGxEvd63ccuRKmAy",
  "key18": "5GnD1pa6Rv1gkGFuP8BVNqU9wGa2yPheFvXZLwk6JRVee6X4vYBj5MyTA9BpA98aVWi7xHgGS7J7NQZVaWEJuLoA",
  "key19": "fvndr4TVun1WGevB4RmkprnVmqvVRjhrHkGGDnrXFYxqVF3xgN5JH16oXW3SA316Kfj5aD7FbbD95TCGWLFqoUM",
  "key20": "4ysmieooKkdTEfihhKB49WjwdxFuwY5PXwdLwknmnuNCxCpE8wnngqJ2KBRs4C6M16BPZ8aqhM7Sq7GY26EZzaWJ",
  "key21": "4wzsRbVzggHAuXe2wYTnjcBGMM7YXfGqWVnbw7fFkWPbLScWshMVEkSh9g6pyydjqPzKM4ZHBNZTNzF23UdN5e6g",
  "key22": "2y1cHVQUN9L4LJYzwfRqHEkECWPLbtHLSv6ij6z7BCVvcTX2aeiVQsg8r84VTm2t4H4hX5qesYa1GFnPvsniKYAs",
  "key23": "22YrwZ1hHDhqa7gtq3cAnaSkzZTf9e3PteFd18LFJq7n7eExtwmc48oak4h6xFnYBKrwG86RbeYWUZq7CuvnFAfb",
  "key24": "2a5kGuYT6VBLeXMkkceQW5fEWwWvpfcQvwzy4B2XJ8ipWLBRX33dRyPYofQyJ996ycu11g51fDm4pzSGyBRwVVe7",
  "key25": "2vaxbtdnGTcHyDq1g6hUWrK1wavddkSU1EMGifonKZRxDDT3efEWKoxX1EsPdjLjP2CkBa1tBZXATfhmpHGbeWbN",
  "key26": "5X7fyqrrFiKpDKiubxxRevDwgD9N4oV9yNupBHj2iaQWyW5okY9iEbTHfL7KGaYFADYhUVC1i5DTwJpPxRxCXMYX",
  "key27": "5AZpNdJh5SHvgGPumwNMW3EortkT24Eav5p32ZKFa2zxnj2Anev49JLoG63EbwMqNJP8owVVo7qWSe3wYyoRQmKW",
  "key28": "w4yVwVSHMXv1W265WsxcMM7VMVWGrYgFofNN1hehvQaeiupvypPFKhGQxdk8vudy48PScb6DCwsCgzAMEMbeJtW",
  "key29": "3TzdqMk7rfmgGY7WbYB9SVNjH3fwkv3j9j4x3fQqiiXt4UmJq6VxTDht5gXS7gaLAv7QZErDpJ6UG1UjrPpBrEFX",
  "key30": "FG65292eFhbY9jsBTet4cP17p7BzxFmu3u2PenqJK4k8fapKhn2RLvX1M4Ja4nNAYbPMLk6j3UMMSLUCZb1xWfP",
  "key31": "5aNczrK4Ue51AfiUyfDK2LBNwKxkF7kE5pdyYueoSQLKNH25skTLpu3bxrY9aJ6XaXUVUoMrSinfn1ERSSQ9sp11",
  "key32": "5oq71uM1q6vi7ZWMp2M46AmukY8r5A7to2BKWoJUYoGHnVVzPe6qHsHzxj7SwV8unKv1QYdNFGnU3caKicYrDvj1",
  "key33": "3yPs6NCZBhQ3MXW9Bo56kci1w9BdUSpf3zgkgSregSUp4vxiMYUQ9BsvPMtd4dZ4tLFqSJ5fwcUWEy46EMA8KQ2J",
  "key34": "4VZiFpwtmHTDiWnSYt8zppz3bzSB4FYV1K9vQjhoyLiVwxddyhY5dtVzQ7CDrjFf8Z49AxktDrTnK3pt8ae8A84o",
  "key35": "5tmYoMk3YmJgn74QpUHqspwsbY9wZnzwhzaWwt9AbiNWDViXxsyh44S73ux61poRYHVmzJ5htEk2amvrGPUpyyzf",
  "key36": "2Psj7WEXskGzNKpQ6TrzYGF7yAtqteAoKrzYmCnn3C5eNCn37NcPam1c34N7j62ycidk79fVa7NjfJivAmP84zgC",
  "key37": "2hexbBwS76V5Sh5hAWXSxTf31UmFHFSNL6e9rEATCuJiTTEGvyGGfrEeKjXQ5FXBktQtKWbSrjQ66MaSQKwVeFuh",
  "key38": "2JVJhiYXyWKmbvgfq5Vs71jCdYGbx94FBKfqWo1yES516EsTtDxGqyeyFK8WM7v2dHaQ3b5EkqXGi1eQ58eUV6g",
  "key39": "3aipzxeGgBHCyysnJT8Ci1TMwYCdofsZVWXhMDZFNkWZYmpM7boPCLoxPuEB4T6Awf1Gnz7aj8Pt8GLkz4q5eAy6",
  "key40": "3fX3NB7L94HFvfUuEUjUdymFrWRb3sbMdRyinDYdXsY5AM5D5trapdkT4zZ5ouvcb4MExk7GLYvs4XSBe6hoBNwH"
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
