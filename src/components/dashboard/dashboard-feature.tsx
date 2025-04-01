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
    "4QsH9xqeYtvyWViwTKsDVXQioumCgZTbYYKEXH3ef7wDvcnqAHp2JQ8KKVYf1v5JWjAQRhmjMNJhwWx14W53k7FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XD3kfmbUAAw3kmAsMaCC8ZEFYiotPx87XDSbcLRwjdQFkqDdMUBUQ255LJRqk5NFwzyaRcCuWW6Y8wtKEYwGQyF",
  "key1": "2Jrm14TGnm2pJsRq61VaStFu7Av9MtniCPbYsA9Qw7nU6miDYgExDyiWnfE2jhm62FDSmKXw8jTC3nwy2Yx63LQh",
  "key2": "3G9Y6T53UDn4dhURxTsFdGKyc269PQUeermMN16UZvFXmhyhKmamfWa43ncTW5xrnggaK2TBSbNzVQktgQeTpagW",
  "key3": "2h4mqsqNnj7pjnuGz8jU8QwPRcFUQQWZm28aSgPzxBNumS398WU1866mvBTTK65ubtjMZPdwAVxYojdQ5xn9xpvZ",
  "key4": "32XnmjurKxpdTYQ8JPY7Rt5RuwxRJ9mGqKbvReQETV6xPaY91dJCcX4MqX6sFjboKMowW1M3p8EHbwJpLpxm6DCw",
  "key5": "5t4c3EG7R1mJmEz1Kjv6cGV5MTK3m6PXhmEL2QKU82ZPK9BJSXEhUDxGhxYVbv6HWX3Ghbry8KuvT4UyxxCJYKQP",
  "key6": "4Xc5GEZr5XrCnumGY3cEtNmKHiWzeFQqSzQGCUEPd7JgFMabef4EmbXV2nR8qmJTLuFhPKPYfTxXK9nqTeV3Y2bm",
  "key7": "8S2ZAJBQrkspjX6ycTYNchUhfXEQPwDT4ZajVuejQpKwpsqkHXjZthgQY2rUKCmWmE4YkmWqF5RcQ7TQWggRGow",
  "key8": "4CKmigzg225x9Kt2hpr3A2nU8wX8jD7jxv5X39X3ZJN5Pog3rzitTtcj6c5BuXi2Ti81juYrki9BF3EnSjH5N7rK",
  "key9": "4cpJn8Gy8UGtG5mMTiDDuN6exdRS3i13M1j4fy1V8JvhJL5doBND5ApFw9GFMt2i82VPRv6WkMqTQ6s123mL1NXN",
  "key10": "22Bd1PTezZy73S8r8XHMK95LkW5TrbEHNbh5tGR5RVGaEEEt1ckoMjP8o31gJ46sM7mmbcod4ArppQqnWzP4L5tq",
  "key11": "2Kj7HyAqdoMfSDUeZpd7moMsQxZSmZc6nK6xWtkBk1Eodi8mXhXVBPRSSDmA8oWN7q4Bi4zpPg7P4cdGNGbrPfVH",
  "key12": "KKSXZc5BGn6SMxiH6f7naT3z4gjs5Frzzto7zEZtAqRPjueQMQmGaULzw2fWwLaAu4QSvNx7uBtTGw9H1WgCJtb",
  "key13": "4dZD2hbxqDN4v3HkEn5hx2pjLgnuQFqNBb7X8msJoCAuqVtr3kbppQvH6JCJetnYBDikyYcZEBACWZXQh2oq6NnL",
  "key14": "2sypWzzduEMXfTHLgsBcdAXdRYztENXxEu6rgxAB3bpXRtz2SWYha9YRaiVrSwE4oFR1jJhJ99673ZsUUDCukqeM",
  "key15": "2qcimBy5twqX3pWvTGbjUBhnbz7f1m3TqnPC8qAyj9FAAGuS7oj4XqYaepg8eMNz9ooAkyeUV4CTswzCbkf5LMnQ",
  "key16": "5fVxvW77LgkC6GFR9aKVjaYj5FcYvkiHp5866h1rFofqSyQTYmftBxX9se7SfZXqJywfPzoQJ4ymM5LAMQhaxUB8",
  "key17": "3stAVBneiwhJDyebx6VG1yp7LoMUWVqF6mFdWfR4GCC8zpwr1YHbRhcJyQz26gB8A4V4GCDNUCTDUV8uTKuZJU1h",
  "key18": "42affQGArREgfQHxEAgreQb3Bu16JgEi3Uo7krAhPb3tdicRtct8s1QSCn99H64Acwq3vjE5QFmHbp884SU9o9SR",
  "key19": "8jJcbXdimDn8oaoeaPgZxZSA8aLtxPADkDcXQCz7nBVGrKSEFQGDGBS5pVq8VSJn52zfr77GAgDeYwcyZ5e3TJD",
  "key20": "3hSqzV6qPLezLiy5NAa2m5oBKLe7UzidFj75wxX2V6KMhjoiPTvMmvy6zLCGoEnRnGpQysp3Yx9R76CF4uNfCLn",
  "key21": "5tNEJUJGJJgJ2mUvLF8yzuM1pXWbFHiMVyzcQMPbqMnr4kzZUFCVUW4gBAHxC5QbrxCpWiQxuBshW58tFY2Ht4pr",
  "key22": "EjuMHL3oFqfvHT4Fx2hfRQjsXhd2e3uxbHbxPpQeT62LqddsJdJN7VqNp8i9wcSU2X3GouE1b6gTuzcmAyDJ43D",
  "key23": "5P7DZMHYJtsqLYbGQMfxAE7QVsMS9H5ibqHsAa1E8jePiaBz8VomgHsemZQLMyeSdZEahruBBU6FAzXNSyen1KFa",
  "key24": "5E9CnuVXhaDUEsgemxzH1zpuS9iNE9FMbKKmqFtHJBYR8ihjkbXBAmCP4BWdvDKJJPmTjKqDWwWe4vr28Hj91tgF",
  "key25": "3CdKMx1LkgaeYUrcBaSe7cr15xnPuCGxmgF7ieL3114BQrJK3LNJaaDeocuQEhnrXccjbzh14dALcd91FDzJKiwZ",
  "key26": "5YoWeJX1toEVoLLYkVQLen966qM384EwSmqKq4LxQSgr9Teqwovh2Dfou2i1ZFiV88p2pReDT7VL9c8RNuSZ3uSC",
  "key27": "5JWhbPGgnyvR9tWMkZ6REdjHYy8GLX4rJcP3PdFdnwuR9Bb4fp8NAuv5DLH5a3pX72ZiXjy8BPLJhAQeixo6i8Rr",
  "key28": "3qZiSePmUmfkdyKohXnttxEbQdEWsuYn7N8nFCchHEULR7dZGUGw1pMEUMNsTPq5E63tiCjJH3TmnUr3mz6nVxjp",
  "key29": "3S9gSb5tJJbwPgzpCZ2UAtch7WT9QVG7S6ihBYrQAVwjXU9e4HB76L3qVxS4Dh3dLhd4UwpzN4ZFNhRqdmaV7zwC",
  "key30": "3fSsrWvzft3j16SspFSX97LmiG5PSwwwK9xHwPdhcteBGLEzs9GAwJ1tKnei5TyAov1cid15dKMoYh3Wj3KWABQw",
  "key31": "3DDwQYZ89Ev3CGcHpMk4jGCKoE1iwcGoNvfdURytWS5FQWgvp81SyDNATcdaxfa8LNcsb6u1yX8PjEXVqUnm1ArE"
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
