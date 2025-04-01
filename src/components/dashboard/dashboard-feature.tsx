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
    "4K8ByzLYEto86P65rDx55eAbAx88kr4ebTiekLTZ7z5J3L1AL94EoaHEpXfYHuk1wdhh8bBfh78LiJ33QJmGHNCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMrGqAuMAXEadEN6KGLhiVn7XTyotrJCnyHiM549C4tPiELTR6AEGokebwRSeBMkMMVjdLtutssvNx8vW54p3eT",
  "key1": "66JR9cphhwvFuMkdxscfTp5WeZ6oDgA5tSntMMchofr1BvZoV2xpHSSzMuoS7vovvMuvDBU5gDB6GU1Qhnb2LfFq",
  "key2": "2SmNLhtpvPHg8gWpjoCnhRBaFYChL2YJnxgLMCNfjeCAgw9x9vdvegYGofWA78kVdNi27orp5JAApXNFPUD5DG82",
  "key3": "a4LgfV2XCGqDaAkfptcvJeGKa3mhaDV6qP985Ez9n4HZnfGcv3vwc2jQ2k1YWZLs5RYD9MM9NvWREqrvJfakL2V",
  "key4": "4oVA7n8i4T1CDdKLdPt5CB3zrgNZvNKa4BX4Pf2wQQt4jKK5Gg1BEPWucfcv2SNSdQUGrKHU2uugdhKyaFKVtxpP",
  "key5": "2QhKE3AQLPZLqPpxybsGFKvEiJhDSoyoZ4XEphV9Htd62u9BPCSMt8DtvfgXMsdKvCJMYrmENXKRmGVKZTWoEmDq",
  "key6": "2d18yEgjw25nXLSuyvLnyvDQY78Mu7i2H5x4Nf4WLZvB3tMcZhdCHN16bpVEzZoDzvHJCWkLduwwwa5w3Uw6RQXR",
  "key7": "26q4J7zm6XDSCSUcZ9twZq3Qb4PToxj6nU7Qw6exUUw9kPvecLx2xMe8Scb3xQvtbwKdUT8ChWqhqcAAAsivXteE",
  "key8": "5SaScznw7yK1sNA7SgeU5waLUrj8hNfdPx8HiFNYqRrS8YJoMZtyKTT9qiEX2VMfhoEaTpRdtzjBSHQFsMejktkr",
  "key9": "4PZn2LxjMiukAThBWsB8jXzzfceJk4e3XhjjS1P3fAnBv7UjDPDXJTQhoeroAku9nR4fGmGvtyNf5kGwRFszSwHp",
  "key10": "ciHz8auHte43FKJepoECSxKfk3HC4TTXgGCknJCcqvkXLGd1yDg8JawGPqhfV1J33MLonGT5G56MGNdxVV9Hhp5",
  "key11": "3jqgL5hYtsTGFZbadM8txpM4b9JdcPot38aXFxmKR3vCJ1H2nDPdE8yinAHrdnWuxTrLR4PjYgFu69bVZNWA2JNd",
  "key12": "3QmQUqaX7CMpLkjoMWfXG3zSbDZc2BxwGBTSx5Zbun715A2LErB2X5gk3gQ6BK91HyEnpSjFwVc3dxBKpmT7VjSN",
  "key13": "pM9xJRUDwkj9pSPpUE6tZWKfF8pKUYocx9Y6TThRrvSBaP3ZvGEpwHjHr7N8VbkdScbH4JFxcS5Hsf4eaqtPaYn",
  "key14": "3FJZGabvuxmz463LwtVvVMoegdesBYsBJNNVkTMxMctdscjD12mK5NJbuyDBR11z8G4sKQ5UmNb2Ma5jWR5QQR7j",
  "key15": "tiPZp5jxxxKfTaftkNbDQFitBhTkHQu1p7RTwueLX6dQ9Tk7Kqcz1jqLUYn2SRbMxfxPMDQaMuT2KgofJEriyzr",
  "key16": "5oq7889vbTd1wohAqNQowt1zFA4T6UAzSXfA5ehnXbGFocKsMMWVV6kTTDAu6bwCgfXt5hhHEU3nNTJ6mc1oNzy4",
  "key17": "5p9adzWAhvy7xVL7FPCwbuefWEnFydxRvVMiiKygMF4u9z9m6SQZgQxf4AsKT9eNNZTz1tkcaGHwUc8cLMjxFxUA",
  "key18": "kRMnHJ1RscxBXZyHiDrbyLf266eTKpvVphCtNQ41KhxQvQhtDpsqVH2kei3J3ZRG6HveeFASspKQyLxoUEqZXCX",
  "key19": "4gHCg1eYzkXjWEmpfH4meobcNYuCvNFuvqSQu4WczXbA82JnfC3UdnhkHy4MtXq88efMCNmAsnuSbHwWY4tp5X9d",
  "key20": "5oHYceFimyndH742RXYvDZSxZGyyjJ8283NbTDKHbWojuqh5zhWYxF8RwfdUMtddmiCqfoDSL6sBByXY8Ftd9iUY",
  "key21": "qPBchRr4MjNsaHCMZQn6rgxEJx8siSkAy3C81dHpFvk6Do1kjrSK2XNGtnmTFkGHS6uuYtmqxQQfr8L4sjXqEQ9",
  "key22": "2aY19fVmcL84VveaL85eM9zPMEnQYzseNaCW9UCaGkPBZUd4rvEjMsbCtjhvW5a9XAuT8EVofhNF3KRWT5NBd9HY",
  "key23": "mqM4Y7Di7LiNqPjqD6QmLXfzZAgey8LaeGvxewRfbpUSZHPnJHc9eXgsSB9mfd8ouxPZbW8n83wz1yzkVtWc1uF",
  "key24": "JbMxLmcdafhwB1WVw5M7i5xLSXnEiwcC8WFMpArAC5uAhKcdiih5yrGMgefeTnUAjCZWBfcN2bZaBMF8epwf5UC",
  "key25": "5TpJgq8MXvxhTwkN6Lq77vdk6ngyXkwbQQqt5UL2iivXN8gZSk2UJU9kYwUNXpS23rGevXG76gHGeKTyVmYzaNLQ",
  "key26": "5Rao9aB1VqUZ88tvsSKNUNZBCrrAFF6xeUi9d7t9Kui3bb5UmGx5RmWBS4YUAVNx1GjR8B7ijMXZMeB7Fgmi86qf",
  "key27": "tENRxUJY4cJSJPmEUXXwdbxkvVwDhqbBuDNE5yvCA8pMjB9agtHjAUQV8t3UwPKxfXMrqqtq2yy2Xwa2eW2Mmhr"
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
