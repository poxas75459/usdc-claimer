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
    "4DEHdi2tNwckYSJTcx5hi1QASaMfhXGfy64pFFDU4PXVjgyfTQFqYcAP25vojTRDLZkMBDX6HQbX26q6QyGspVQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qg3u2TBcnRmFsBMv7LFJgY3yKQG4wVJ84vYnFNB3QYpM9GB4ET8pVDJ1h7k1wcn5mrHzKtXUSvvGKnrEMqSfR14",
  "key1": "6zYfK43WGE1Ct224xi2DC1zJbAxEM9TDEkUUgwxYhc8JbrwjZ3e9MoMHfPP8jjc5ravUj7N2mMCkgAhrPRms4Pm",
  "key2": "5FtDxX3KfdvhA6f8WvwhAwAQQ7ysxU1639nBwbobTM6gDkDJhT3DW3Lai78SkEXeG4sucvrtB7kyfbajhjt8BYi2",
  "key3": "arKKSVSuowj545LyBuLW4LRq9ePXNx86z3wefHxpbH7XEjTWSqTuayQCfYn7122KoJEJVhUqoAzZNKbtuVsY7HW",
  "key4": "28LnQEYgMyA8Z6xuUKSpYXghcRXYisoSHDiueFQnzsn3RwJ6nM9abQkMYFbw19GZCKJtkyM1j5Q1WbrcmdwGsTud",
  "key5": "3RrzcvpJorvGW8mZEkXJvdp93hk3tJApuYk8E9UrseySkw52o1WJkc6YipRLhUtNtEztUUGgusqC7oznnh8WXmmA",
  "key6": "4Kfj8h8fdX1Ha6G1LKNfSyFqokiFgr6AKs9WnQEUjrqsk7FFvkTHsdmriyhKDSSx6G8QtJFVgK82d2itN3xLdnwq",
  "key7": "5JM6vxsiAApJEfcr3byAMZa59zinm1C59mVL49PhDp1saagJB1zh7FGizzWLkBmkUh9jJms2Moi54VpNBt4ED3YL",
  "key8": "4oECK4Ky9TcnTNqM6vmmT3Q7fsK7t6eutn1vrVjxuQPA71FzfwK1DD982Tte3ztN7jVwNFRv3osUuVHNDyqfhXuu",
  "key9": "5L5PahiYdgTpyYJy5TR6CdEJBtqvRUxGYGoL5X1ZwK3mmxEPGYKqgrdymBnVt7F7TcPdAVRhVQHeqdYVqrF1b8qC",
  "key10": "4utvjPwaDEZGDbXUo6aXeXdaKE16CE55JLtzK6KF2nuFHgQdAyffnSQ9SHcyVCaoZbX2QHzxKoTkxMpCCmXwzoKV",
  "key11": "pkrhiJWYRSYJY9ZiKG7dtHLHScLMdm3uoqzHgk4Q9YX9gEkY7wNSUaGsgg6i1eJqpTjfFB7JHCF33QkCXMRvEdY",
  "key12": "2YUeHRwfBYDtnEPKJgsyuKjVGvQdnDmX9zZdjkKb6s2epzV3NdhcdSWekf5sJ9mHyDQcvEEtpcGkVmytWNixYuMG",
  "key13": "31f4tVrPYAKNMymYWRceTBKfvAAmkVhCZE2LsNMVbvyNDKpgQaDwbDEiagxSE22uYWyFSUr5AebpSsTJELr7iSGd",
  "key14": "kGWTrBbsxfd7HemhBEJrWH3rmtnCtNDzX9H9PfF8tWBBWCsWZELUQaLGayvP7QPtSC9GmkpgcJyqii2ZjyDfvfY",
  "key15": "5yfCngW34xWrrJ4xNmA6RHeUtcZ5jnCh3hvyN5FWzCtBddLtdUV6JEVHDeXANn4dBJciH6rjWnbWsdQwiK9roxth",
  "key16": "UF3AE7KoXws6BYm5dSdNvEmwekmp2efj2F9mh9vAsfXp8L1yTCA7vgktthwfvEi5GvEyuEX5eBYQATiMxkJr8Cz",
  "key17": "5fjh7fqvR8WYgn97wG5pRju1UxCnAYbTzavjQ3MYkymgsHSXgU9tkwX9VyUGuy6wYVdpxhbM5ym9aT9q4VQCgcjs",
  "key18": "5qexuHDrTjvskSqo56rcziW3TrhZyAtcygucDpsU2R8ESf61Lq1ZhQr6gdf4Aop5b1n5kxsX5aEn4dmaXE9oY3oJ",
  "key19": "4b4mephJFkUpV9jfuhmadpEE4CDSfbwebT4CPV5umVgkhaQ4pa89iJo9JgDRYaQCYB1jDgYJoft22CQS6oLaLa9F",
  "key20": "CsdXQe2cz79HoHqujFPPJrPHMwAeEkA99smytsZxS8H6qqdZtGK4p2FfxLVHAtHhQwNnDWNTKEGP3kdB4Tss9DG",
  "key21": "jaDtuft1TsP5S2gF9MVCT5HatuiUAJ4xCuibhtjW11vmXgbtzCpZRMRFW2G1Eac21qRs3ySv5kEYKwRm6tTucYU",
  "key22": "5V9WHiBhb8MWDU8sXhgU7U1om2P3vdjURoT84T54vYEnpba1B12HjKwmEt8EFjbRxqgh6jwP7RkqSLtm9Mwt4Wk7",
  "key23": "5QuniS8MCa8t6uxMV5Y6sZ3MYzUqiRUfU7opRkCUZpHgdXSTyozc3jsF6JUDuTo3X86nEyiFfGfZcQKpmzWgzvDo",
  "key24": "47rLK3XfbCM2rmvRUyvcXGcdg7m88S8R5a2NToqf8WsMzw7mmmNX2GLJnwqLd75aWvqjCbWw4n3P998uXRAcRUPv",
  "key25": "2Hy7MSRRXgqnwJmUT6eXLSALQ6wSjcy9XVL6ay8Lh3ScwZeLXRNFdxi9yuS5D3FRy9rdhu2c6Z46a7V4zrFXCjyU",
  "key26": "51KSrkBNGhymEVm5htvrkzUuE1iJG5Q5UNPFxhSxDk39FTjzxcADvba6fGzmn7uyYkVMD1XYKq17anP2LC8j4jVX",
  "key27": "1AP6giQwZV34UthTjBT1LRdpFTexf1r9EMzUASDVRHcr28GdhnL8M8jyUa91hQwpuwJing5uJzSpWhdGEXAjGBK",
  "key28": "425s3KfMBpYVcy6XUQgxtppEZPFeAkenjRGzAP1T4usY31BgLjnbLdjjMAyJVnfQfhG9rJ9DYLf9MV1PA3prnm2j",
  "key29": "3nQc5yPXnzDLqp4b9u5sEM5UjCJJcU1khU7nbQiooHQNJRCnDMQktvRyiQYw348LRF8wyg6Hd5GivcSjdG6h3UfT",
  "key30": "42DaccHR5kTYAtJQSfdf9q6k3YRGK49NmnT2p5oKa2FdC6SMzYwAfWCaGFf34MMHKiyD8oG35Nt1TGxCeSpffX9h",
  "key31": "2eeuW89kLa4K8CafDPkzJpmYeZfWHFRT6WbZobEurnEcsxbrh2ULJMfhvMgmMPKCqCXPewRarUVBRCzTjkGVG7MA",
  "key32": "46wT9kCmuGtacGXUxFSz4yan6eQK5tJxYd649AdE1VWPrF1uRJVowKPzsVMZRHaiyAERS4RvriL3YAQSGBTQtWJW",
  "key33": "4JDfdyM13QChS699r4Lf6RYjsbvxrWUbcSDzvPxprEWVStbwP9nGdBBHC8G67zoL4up5aNZ1GF8NPvypNQp8TZfk",
  "key34": "5EzJF8E2u26xAAbsNmuqQ7qxaHF2Ec6MsmWhcTG81HuMfeowRwwgskFfQKuWhbwcYQ82vkRdoWatpvb4z3n9ppRE",
  "key35": "4zobhc98rABYPmxixnyXLPDiQQfkW75in2EjGBAfSTy1WkzGgxbJKEisBPHSWEML3a8TkF36toqgrs1dnzCHD9sJ"
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
