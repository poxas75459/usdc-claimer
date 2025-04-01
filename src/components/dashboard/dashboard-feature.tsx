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
    "5dzNR86yurWsCwTy3WVY1BzxcjNxa3ENFK5CqVg7W5e2QWeKtZtr6pUaDP89pmxbYazkVNLW5ugz4A8wWd6vDUhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26RojU76QmGvAcfUDWkpNzu8sVMHXUExc12LmCrDapfsanfpDcw6G9WZ8WBLmFqW5PEWoNsfpUUSKh2Ydc9aeFrF",
  "key1": "4RsHvWW4qbz8iZYdtzt2Bh8yZCyZbxVq8yFuN1uozGcmkiBGs44yMaz2ucR9hFeMFWvREy4X2sxZ7rQdL9SeH9xj",
  "key2": "3hxH2SSX97HQqtYDwSkpUaF3uY7QgpvMMiigGpKeTwyYdqRwJPNj53JS3GsPNHtHFuJZYaqLRQtsY1u1RFUvgmDk",
  "key3": "4FuMjN8aWhZU82sGnPZuWGtNXsh6vaKsFtMs9uKrCLa1MjaZKqyRe8Z7NMuDioS7DrfFwZVZ9fxwBDYRTPpQxtv8",
  "key4": "QWJmNHsNXmSH6k2DLSju9sQ8Pw6poDhVSXR9RBBYjeta43EPefZ6YKvpYUKKgH7sgUTqrMmySFwQJ2h3RCqQBD1",
  "key5": "3CpPUCb2RBS3ppw7SbvKSi52WHm8Vu6CTgD5MmeqZUL1iY8osrMrnrPq5UUxsu8AkCihn98zKw4Zx65utB6ry1Y7",
  "key6": "225oSKFXsXjJvJS8KyTVAajR2vRDmx5y2LGnk13FKez7qLShG5vhMgzM15LibNZK6JKmXrrwppiyMcHDnv4JYn5F",
  "key7": "2Cc2SGZGamjAkbxbrXd3kScQqAMDaehD8uurq8X6VFvWaB87XKr3NTCBU8HkzJ77VuU4oVqeaZF6J78QXUqeQQB3",
  "key8": "42fy1tHgs5oeY6ZPQVanWUyS5zKHPdUAHFsvBWXWGU1EdU1spW9qLJwPVzuQbvN81Fpwg621EsgAfkxd9j9GQMEK",
  "key9": "5CQUbkXg6qUkvB7gnx63xCGCSqnsq7rKEvhxyAY177fEsbq44wo1FV4CtQcCiq5YydHHJZDZY1saaDBdehpGQ51T",
  "key10": "5neW5YrUYgbq8dHPiMF9sdPAoTsm73txkprCWkpxLfPH723WsN3F6AJYpi1QbcoxbfxHxAukh8s8ZjG76XEj9Kt4",
  "key11": "2jGpdoZTcRMaxzFEHyDNPrwpgf3mS7dFuyrvXC8NpJ4VWoZVG2ys4KcbkjUtdpXTD4j9oXxZCZKEUDTSNCt3io8J",
  "key12": "2A6sEhqmnZDV3ZSEVgkEdLiTuBhT72WN1nMwNFm6ARArLWh4VKio1buTfQEem3yVYhKBdxk4j7V9igfUYBAruubt",
  "key13": "3JuucZ3t7gLCz9AxT5rv2VZTTFEcC18hekjQVYJypi8WcfTZ19iAyiVX54eMFmJ9LrM2j3cxshHQxQPEwaGVmQW7",
  "key14": "44hya4dsZatwnpHxnTv2sp3TakvQdJaV4Wm46fgnqtQ2YBE7KGqN45Lx4Nbyf7j76ZytKyvraWgwsfBcaGkzz4cH",
  "key15": "TZDd3JQa6mpMFcurK6UWAYHSMwDkP1Nv5PcgEDARdnqn5qf9gwHmc3QjyGMBN28RxZhrh6wiabVwrSwQG74aN9e",
  "key16": "3aVQESamr1YpJroxsNG5cz47Bx9eYpr4gHXLJM69JnzHMdxPWm6wUMmbcqYfingvRLG8uJFUMvWDCyoPMnZ9HPaH",
  "key17": "hFYcwMSTVPTJ59NqW4Dd8xz9oL66fQGe7oLHrC8BMmhXpFcjdp6oDfUX4khanEBsHyyMuU66JvUr2FhgP4hDHuR",
  "key18": "432udF4pHH7KgvHyad4BxixqcABj56fHfg6K11QVcF8RbYMtz58WWGf9WkUeoewZDL9nMbdEHRFpkWQ3UfY6os8",
  "key19": "3GumwCBxRLVnf3mzcFJtNJVXfqhdPFa4hueSTZGuUNmieatwYwNcGc7tG9fS9E7a2XrPqW7XqMAyW2jdEMeyVNmA",
  "key20": "4cSCib5SAU6AdgJHYTBS1xYXbabSeYSRjpqjGzyK36FF1SNz3m5pV6jD3TGYJCEzp3M11EvXcggLViWWrtdBhAi5",
  "key21": "3GizSC5mwzE8bZetWAWVc5oUDb1oFQiYdhcREL6nU24QGv3sAozeGopnVjgRPKR2EiHk1m2bMwQmKiTHEeB99f8E",
  "key22": "cTHc9j9fU4UBkXgEox9GWKw8Ngfeb5KMWuEVhvyFEs9VaKUZT2aVfV1xhp8CDTDZf8b2dcQt9reEBVhUHw2mUW8",
  "key23": "4RuAf5s138xzStKAfUCNyhc3aD9mogKNFAuXRVAmiBD8JZsQuprg6ik96R8jzQZWvBJKbmWSJJhVDaHsxwccXP2A",
  "key24": "2SJrWGrVtoJKsTQo7FEaJVWanANfuE7XA2TPEsDmMTzrZ74qV3L72KsCBsFSq1dESaFMBFbuRSSE8mPa61KAnFQt",
  "key25": "46rX9hHrrw7WjJZfHaytcWFQ8Hp6cDZKJZPGw6EkkJ2FGbarycNWAYRN3RR6byhf7Mfd2eZrvxxzhwm6vq7ymcFX",
  "key26": "4y4eeiUi9An5MUMpCSx7Xry12VzfPTtCELTooShzJiMpXBAD1JWUs9tCzfbz6zqcppmLpNmZaxd8dk8w4wraMyXD",
  "key27": "9FpEqVG6eZUjrxKuswMmnKg3tph2GevY95U6cCvDudYNtkyYJmvk6TRu7WBeZMdFwDgzHfTGhZKmNnECner8nxy",
  "key28": "KxohxB8n5HwfQo2y4DP5B39uJkMPFirMTvyH4jF3Q7aaFpwFydXXRKRe5ahRQhjZvYS82xy9re1ZAFSg11eU52s",
  "key29": "3iDDShqasx2Y6Qevur3jDhXZXQAnzrmrFSxcaTLhNLHnRmNULVdk4EySfAzy5tM4xkjVmfpSofwuefpdVN8wPu4E",
  "key30": "21kBQiz6J9Qc5Rse5Sin8dngotCE56JxkrLVoYmJ17ALyHb5QwMKmM2g8eVAjsp4uzYizPhtrisXnaBgRrhkn69C",
  "key31": "56FkQCYM3kGzhuZYj5SPgEXNirqcDFEpbUyRfrvRnuxD5JGKEbrAwaaWes58NJM76zhdxfUdF9e8QEHoR34zW5K5",
  "key32": "3eC2obeN6t7c1hHbkFmKbSvudtU6H4xiJsSZ293TUrF6awkgP8jQz1ZzUe35Fo9rJnXM9tF4nzmCC8F2Wu2ZPA6q",
  "key33": "FH7LPqDt1PrjJFxdX5UEDnoZoaaUvJoRasjCtwZbWDa6wJpQqVQ4SXVF9RkxL48A48Dk8Wi4q3HkKksAWCVn7zk",
  "key34": "VKmmq5eBzh4A3UVkZY7ifLXkZ8RwcwaM5tVq2CUd84o2Zy4yiqxPo6TJ82ayg7m8s9ssuhn8cD8uDZwJyVbAM2j",
  "key35": "qSyYCjEyy1U3AavyvEKv3oj1CmwiW1f63hQgznLbd2t3YBzP1rhzTom8QEDVQTszSHn9dLy1uFjVQZFSbSCw73x",
  "key36": "3DgRKMQFgAW1sVnJgbsojH48JARg25Xrk1Gr9nK8T76LCQiWkK5K3NbdV7npjpzoUR9DaxRMoPwRbSMhxqK1JCb7",
  "key37": "4WCgCY8G2136uNwV5UjMHYKhb4aqLLHWdoXsBhjyyNqsWcpgQQasJuQxFRsWWjHgsSGEGU9V9AjK3r9oF8GuLL16",
  "key38": "5J12vbtKgcAvXBtZXP7pjBqDcGA8Se7jcGbPxTtBxdhpEKa31Cm79NF2Uqj2HUBqqsS2x7GwjEysfYHGArjbaxts",
  "key39": "5YmJsGjcnwZFgq2At6Uupe3DZfHnMtxXfmh8f6MbxoHSjPtqFLMwybcYu4V9Rcvq4ra1ayfW6j5VChdBw5ynyaJg",
  "key40": "5NaDsvPvyfpA7P6ukfYqFUDDa7E4ijm5My8zibTUBsGZxdAHCKdEpZPhAnXkSxNrPvtmwwWbewNWYVgVdJ7nvraW",
  "key41": "sAVnFxP5s1DBazqrbo3TtL7s3gmU9vbDQS8zHxu4NWx48ow8GQi9wDTnMrv4NLd71VPCacMq7iSSPQzq8FnoAxP",
  "key42": "5nEtjp5J2JDzwJabMBGum5vmLitDuJxozfF6AVN97paL6WCRix9WFotEku8JAnKx915GAbqBLaTMmN6bXZ1W4gta",
  "key43": "2qKY2yQzRitLB87RqFsuPeAgZpLUcvvtgW8ehZrEj7H3s3uuoZA93zJz9YoCVfZpy2dVovhG38dHiGryAiFTkdNX"
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
