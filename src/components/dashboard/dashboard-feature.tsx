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
    "3u75GBSEC8eQMq56LmwoqsDT6QFgFbzDGsjfrgEFV4faKhocQ4Y9gDPAHQLMeAT7yR38HPXfeNhuZiNyoSWW7ffQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xagJMgtBeyuuhefmpEjHW4z69BvoryfZo7LeSZBHV6KRXdcNL9M9nDJErPSWyPfdRvnRTnGXwjEQ8rZrTELg931",
  "key1": "3PB6mNf3wco9kXy4gVuTig193gCtf4qrVb1EM58REMEhEznXoVvzAbMKUJPSr4MfnmqAFyGZcrDJALNsbRuRqmaC",
  "key2": "2H31MZM9bK4rqZEDpqmNwYSicpu8jWKgaZVjhH2jCwXfmiFoTwWXsXWgBqnqXUUNyz4GEvbdxqJBz1bNLzEZrtkU",
  "key3": "4bBAxf5MPXkYShdSqj1RrNDUkUPv41zEB9kR22mRRg328uxzj7SswQUuUwob4wWqaAAwT8dQJQYqivbPoEbBapfG",
  "key4": "2p7MQRNjxNWcfDyzqvzQbdB9AgD8f6F7owFQRo618rZZhjaMBTxUmUGA3A15P4ygn5cYZy7XLNovtBAC6Hz291iX",
  "key5": "366SEqrdhQNNdDEXGoaoGTaCgT1PRjRV4bykMmto4GVHgCE2q1n4iePSNE8WTFKxD1yCBcU56dZbjvdUcxYro1Rb",
  "key6": "41Q5PxMXMjaEyZkmxejuqwiH9i8rnzH9PBJ5BZvJqCRoc6t1buRBBsnwBKwyrdojCNTv7x7LR9dGaUuEtDBfoxje",
  "key7": "4c9huFyFvTiZBZbx1g7m9L5ZMB5htSXTdtsrpuQuL6Ud4oJsEaCvoerjNZ4JrFUcwEt5peNaikgpwUPzFPjJ3u6e",
  "key8": "S8m79t6SaJCjuwFdAFLejpzi7DqWTpDHCB3UHrZWHGEJcJ1SuU318oPNQ5U4HmZoAtTDkvf3YG5QDZM1VRDZJXK",
  "key9": "5RSGaLBQEYk3UAUwsCH9P8djYn7cv9CG8YvKbN2k7s5fB3FzHjHe1zgB6W95xLoKWMciqHU2kBvFtn4NvLVJrEjU",
  "key10": "2dr3S7DgnWAtuvMbLbnj4r1hsJ2vPAzfbC3nWQ64P25Yyrjg11t7Y2PWbTfg3wBUoaNnm71rJwSwpENbzAiXmbFA",
  "key11": "bwiEcW9oeaGGj81T3xxJrwAA3qo6rH8gDt35kM4NtDB325Mdb3VAJCTmBTrKA7N9stPKRmNwCKuztJU4W8L37Rk",
  "key12": "3Hdcw7eTcYj8VquicQVtUwr25PdeUw6mu4taSRcHxzUcY7UDMpRi1sBNdnbqf4CvSwFDgZt1QqreQYvzsi1Nz8wg",
  "key13": "3kQ8AjLe3sFu8bJu8dS7oP2WqctSY2Zh6pC2NkE3JxwHmnPS63u84Ta818m5TwoXpCEaZxTJgrKf7oibFY1rB2qq",
  "key14": "53p46cfR35JhJBH63F77jRX4kgFvyc4xphSVRX721kAzfaDTabSmcqPFV5u3saWq1Z4mq7dvXJCaKTks5AHJmEB6",
  "key15": "2wcksYcW7EtgEnnpBXwYN21XjuKLHbQ7dJgansj7zL7RyuyPaGrM9VkSVzaD6AvdcJoSnupi8GYGJhMiBh2B64GX",
  "key16": "2ZfsQ539AjAbMSoPaa62toaR7aUgGbbyLqKHm7QWo1Wex6GVhTy4LhZG2SQR2RA8soFByUhNdhLYyLXghUSjrcMz",
  "key17": "3n57M74oRmGqSYjPZk5eALVGY1DR445DUfkDAo2wupNbcN1De7rQHrW3ENgK2RcEzcshtksjLZu2KcToVZ7fHS21",
  "key18": "4FHijqqbxQnubXXRfm46mAixoTpuvY8Fo3i6QKH6RVkxXNvMPkk9XB4B4XBYMZ7Y34uasJ3gCVMomBqMUTJbwKyS",
  "key19": "56qVWuR3DjQmRPCpTowAdHHo69z96mdPpcpnaEnCgY1ZkPCrDLaL5m7XvSRAJ58PJuq8bDq81Am7MCRyxFWegWKq",
  "key20": "2gFgwGuDqG6wz1PjsiHzgVcAdGpoTjNHtKAg814wnQJEueDQSTGpGwF3TbBQ6qu9fmfW4ooV6imnKzSEdCrDsiDD",
  "key21": "2YB4D58oNp3N8THcJA99HqdeyMkj1UsE251hR3zdTmoUysAwtvwucP2EMVX7UB6koJXzs5TsM99SWwG6acFFrEdv",
  "key22": "3k6VKMdHtnRrjjTJP6njwwEsk74MPxxbjWKKnTeXrXigHQEo2nYdTUjFAUjMj8nvULVRBSbWz8yPHLeXciPs9tAz",
  "key23": "59ZnE1is15jY6b8dc6rRYPbPBcreRJZoSUmCuRyjikFsMJKWiEUs7GPEoTG7jdMcCKnLbBztjzYn4G6mT8iH6XyZ",
  "key24": "4D29GNSgyJHYCqJSgk7QSWh3zpKB49f2Pm2uHMtaE5xmFuUwyBvXETaUSVoWSCQb9hbGp3dxoQgSBZGr2SzJpyvc",
  "key25": "2wUny7qvTEMN3ZcFSJUMbwYve2AZ2yNxwU1e6Z2Lc6F8TQUb7JKxAJK5XLq9SnM4Ffxdo8yxcJHuR3Nawh4h4igf",
  "key26": "2nnKoQLwRyeDtua5o4VUMsSbAuDehT67aZvA5fqvnyWULvD7Nkky3DMCYNENv6DFw63rjuoMTwGhuDfGxn9nmMYd",
  "key27": "5jos2LgEuRycFpbhn2vocnnq6wjHyBZ8qKPbov2khj3qxMfRamN27fmyEYKccDw5auSyio6GgKM9yrrkdKHegbtD",
  "key28": "3s69oY7iorKnuM6fkL9EguwFF1irmXnXSVMtE1tNPnGfwrWg9ihtdgWpNe9zgmKdTNfpupSGWsaJbaEfJ8G816xh",
  "key29": "4M77WMbCGnCHwpim44rbjxjawYiMFDdPHbPi9dXTjjPMEFWgCnLcRuztPuUHEWxgGZSvt3SxNva6X6asBkAEGe5q",
  "key30": "3munnx2D1Tj8ADFa7aHsMRKVRCcDxqcaijkcY45td4ycbrwScRfPPvBtZ2nxFLWpzcZg3VU9DYnYPHtQZXg98PYE",
  "key31": "4k3gKiiiGd7E5TYqLikQkY1wfoCLWfwjTYJyWrKJ2xxt3ZYTzdxAvDjtiPxbzoG3VBQmp6oWQwb8TnR3UwpuPPx5",
  "key32": "3NdNLGfnpqSYgy2QG6FZGvLA3DoNHU6yquuSpQgpKEZrRWBkTYtAtsF3tck5ZQmgoewUvaRH4Jq6jv4Xyn742kvs",
  "key33": "44Qvrt8oiarcsopkPeqrUYpiNfpaL7DBRD6AFL5HRu8zrMLdBcpVCiCcww97GrXG4UWqg9pH8u8gLqdgHFQ7FDcD"
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
