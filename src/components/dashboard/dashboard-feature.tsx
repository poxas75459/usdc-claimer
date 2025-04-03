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
    "4FgN7GcmWkUe8gMN2Dcys16wQUKXC7sDfuQpp2Yadorbw7gMkPQg4WFrWWWpktHL6kAceWdzWRbcMjGEWqVwxbcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "apLNfzzDoKCkopgpxAFHR738kLD5p8rpvL7e1pF7MpVLS2v81jwcg1GCPEfevAZxGEz4w66ncwQg91BTpxYuDo7",
  "key1": "Sgbc8siiW65FT9tMaCczkbBnKvq9DVgc9w7A3nZowqSmajAwCQeMH6a1ccmSzMY8QPw78aHxvz7PusJ2bFZNrvo",
  "key2": "3r9TdBdiMDte5YNvX871ykc9PE7VhfincTvnAKJ2L95u3PPJDXEfmBqqDd3MNNgXt3fS453mBZVNMjuAH9aHX9VR",
  "key3": "YaTYHtsqUfzDgk62KvxvCDAmLWztqvrYmjeNvvvXYWZC8yjkS3F1KHndDP4x3jRczXgyanGQbKczXCLJncVgXh9",
  "key4": "2E8ejhHxiyitP5H43QruCfqpKwCi8dJvJpqJYnnsy9tz8i1jXVBiFLV13b5KPUV8R62xjSJLhdpUXU9WaHqpzcL6",
  "key5": "5RiBy6kxXZmh5x9ox3Qyrs15CYa5dnAh57apYMBAXnzx4YhAuXfTB6S8LUtvmQy7ZHAeT1zUh9gX6LHp8pq8S7As",
  "key6": "gyLD7AATkX22X6uXuN7a3f8FPARDjrv1dBP3F5Utf6cG8spn24qfHVUwEtttULEuvyzcAK5tPM29zAiBobw3dVh",
  "key7": "4Tq2wXX9K5AmRMReTL2A8jDGWQ7xc8onghiQuzcbo43bEybdw93iuU9RaZ7YdbZRqej6s218m1GHpzCgT3yLd48G",
  "key8": "4iP3bkbSgpSvQDVGnuCdGs4vMzdV8eQnU4h9SyN3D4p2K5gAqDMMWpvQtBqBAwUUGutToaQ8N5ac8bSqdLsp4BuG",
  "key9": "2A8RBcLAY3dhPjmhJdGwF3NB9r45vA8RE6LNS1sdqBW2RNYA4tqnvtZaTHY3H4szVSWY4dq7TMDu5QgTnWwyGFKM",
  "key10": "2N6Uq6h4sQLDAPHmYP3RPKzpfaC9wZJEGw8uQgMYYC6zDRao3sNUF2N1WaVcDktjVxGFYNTgDWfZ18WbHj2gYeTS",
  "key11": "3rY1XzfiH2s88vBnnafKMGtX4cEHgJ5Lw21SWkArTkNGkMM1iCsK2BKFr6eb845KCX6UJUPuQogDaiibpS4ntZ1R",
  "key12": "6cT6BuonJseGKcihAgxFYcUxXJT7aKLCbA48yHKx8ziQGhuQtxDwFUtpmJGnZYnPuMGyqanBCGy6QTvsqNBfnNN",
  "key13": "4dAUFFyws6B4nV3TSFqV6pdeTuKjNWpHyWLPr5Xbf358rkx4DNDELjkpVpbBQuAfAEKkkiw1yZ7SgELA6eRNRFQ1",
  "key14": "3eFDKuTvUji2VZsjFGwvbqjUwRxk87jmZ7qSVLz2zuaQhdYMR8QJBJCnHXdXiGdYRXMVsPvZ6x2bkNy8ECqUsM3p",
  "key15": "27Ugp29vJauDUhnzPwrz5UfgfVmFnrJymVWkCDpN88vT5wwTyczXv83xjo5eRsv7cv4K8QvoYNvNdK2ZYcUdhLad",
  "key16": "PPfpDi24iRjuxJuoXkGa2j5DFvMaM4bFvSCEvKqqZvucTWSsYZAeG4j66P9mLvENjFrUrQsmWvpKQZz8He5bBQ2",
  "key17": "3JoqyaH69BKz7BAQLQqAy3BD7XagXHBBrn9VSvd6AsLD8jxeQn5J76uD8Wortg8Qy9fhgeVts676s8TP1egQiYGb",
  "key18": "vFmAwTs1MMEunX6Fxc1bMnnW6vLShBfC7B115zJsYuJnQgdZ9FFEnDHShtgCjGtUkwgq1Xv2Tq6SzogoNRUTQWm",
  "key19": "NAHAZ9snBkYrB1JpkHcgC66pTZAyFpa37x1kznnnEyi9taoJCQqpnaWSGNewkit8hcWDxvaYvFNvTeUYqQhaemx",
  "key20": "28FTkBjMR21bZ9RDeXSx1wq9vk6nFic2i4mkbHN4CjoJUfDgxRacx2M73mXZuqFJXXRaNVjTLzUWH23WdS4chvHu",
  "key21": "5um9hpB9UpNDnFmy4AgsshDdutNachtbQArVRsHy9eqXnramzayd9RCzWDTVihrucwasVzCAcdLFZKgzNTSUTxeL",
  "key22": "5158n7BZEAxmQx5uDqG4vz2LiXBSWt9DZyNDo8RGRL99Vt1aAMMHjNrZGXXFLCoEBppFo7umiDp2Sik4wV6Y7egH",
  "key23": "5GwmYVK5h2vga3W8DJz3N39H9LRNriMUTJzVZ3LDrnVBtk2DbGAoTpHMiQVpJN1j2QNu3bStYDgiWEnFQ91G5bXP",
  "key24": "4McM8awpHxTaiufCaaMMxbGhCYh2ChKR55Sdmv7SXFYf15eAYbDjVTSy4a1WrFnuFFw9ABbCLhKYwUBjQM3ppzLe",
  "key25": "zqMoogoVRkUYJyVdETbX6ksg58AQ1K3duAXiuSfxazkS9TevZRj4VM4A79UakrKBXENueUpLypJ3pL8Suw9Hvym",
  "key26": "5eQw6wASu1agzfEZw1mR21yeeBZ22zZtneABHSGbFbi1GN8wiw5CHE17GVWWCJDjir5bxx5iPutDnfU6uM4Q4BXo",
  "key27": "3vdEzaz6xDSHHJDqER2u6T68WzCzAPjbpjYGKD32t6k9YbrKjyXLVvMiLydtu7wBVMuxdKbYQgyJNpu8sBNBb2CE",
  "key28": "EVZZfzmSmXcvNHNjFyUtn9djY8hn18kwGsgqu8a7yiatJsqtq6R6uERwQmSter1vsXTc16CXxWo2J32SbdG12sq",
  "key29": "VzjJoFeEzwgoKbAkQwZwgbb78ErHzw6v5ZaducctNHTtPSNy1QvVdqqv2uYWAxg5Nagfy9GDqq3gAEuseqqoBkd",
  "key30": "4Z7696Nf3HQmURxY5Kt87iKLhytmfPvMd5gmbtgFPAR9vb6pDTDk9wyj174wVdTmaPRQWasawcDotX3nTm27Jhiq",
  "key31": "4xKW8tRvHwnW2Uw6NNSRXUAZrrHvnR3fN5S5CtrSnMnjuyasxCRZB6M92vZskbZz12W7uhSsD9JYHLMAAGWcUyAM",
  "key32": "65f8trLUZdFPrH9YaKcpycLQJevwLzfx4jgaKfpzdVKfn7Z8KqYNXujhjf11QCXhRCStXSjVk7MZbVPbLQFd1yNh",
  "key33": "mfWkz1koTYyKB3Z2iQjZxnHPvXvRdgiiMCiXytsrJ1Fntt2fTFtvCWpLGPBGLM4zYWUTKSbmNSQsFrfRb7tuYLN",
  "key34": "U9ezidHEK7adJ2Fo4kDkVh4T8B1gDZXJcqHteGiTUaNPVjQHwrEXqg16Ce6m6WRMCTd4BZm6YRRqJ3HkPnYvK3R",
  "key35": "LKosWL6HQ7brzPqJPf5isvuH9obQonNx2PfwHgAajF7FyHM52V348zhh3TTdgAYLsbZFHLYMFS6ztV7pnYYHtXP",
  "key36": "4tuibwjayNqGXD3qiKoBCTBAnu1oL5Gvsz6oQqKST9jAZe8HFUN5gB73f6jJ7xVrNUejyFUbKmDJfTwRPMB8LkxY",
  "key37": "2DTN1PXwTswSTZAP3j6xyoGQfCF6Acensbwo5ZxCyaG2QhRBAzfF1VdCoUpDpDF6iU8RZE3xzkhLQtJ5Pmg9NkdX",
  "key38": "2pKJ2VmeWx7rMVDvZLbYLRm8fKw4EfidWUc7HU6fYBsdeniH9MUbehenGGhBGUuPLJyaTT4NLYRoHFH7yHobyxW3",
  "key39": "3piBFuqxjUwA61vNj5x3WrXVueNHQjckf7Vs32WZNnVyiNiXP1r4FqzQAh8zjTHLJtTKvhzSwMWFWUbRX1KVfDiX",
  "key40": "4HjQNvAdQhcnDKZWeqzLJB8vjNgc2RJ7zvQ1UDaSYScviy3cZEWgmv4oYr1sU2DafXryqWBuHggRaAEgnKqnq69e",
  "key41": "4uMBP7RzgP6BR2bd3wtezi8E9ErtDP5M7xWDeaF9FSpKgncbstwu3HRycGiXJFvSGqLpHx98yCW4Hvh9cHNBEEva",
  "key42": "5FrGYER2epsbZJhdRn3xdZYbbwQpWCJcdt787ph9Acw9F8YucegbKyQhYmUBj1HLGhp57tcA4gaoB9dUrUVNxQ6b"
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
