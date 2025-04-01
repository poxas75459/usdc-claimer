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
    "2mBeAuvYR11XRmft1YjRBF4L12Y2869v3aC1fNWYsS18wFWKR61ba17tpvc7o8HfMU5YdZCpQgjzne9SdKFvXZq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZRkXQxZGFFs8tk8yA4aZb6cPdPsDfhToLAPRqNTXBtBAX2z6Yt5MumGVQpbb17kFEDsjqK51qS8yXxyZZKnzcWu",
  "key1": "4RwzWpRpQYKhr7rBf5YcaFzGBEayEaVEznzSqa7KVSBToJnjoNzhR4mZhrqnmtUVMTTVvCaBSbPwXmL9knTBUGbd",
  "key2": "hoEV9cHPsxAZvoQkAgpvM16NoKpD8hertgHpsLhe6QFabac4EVcTjPijAi58JRw9Ca7dK6DugZV9AsdWfCgyN61",
  "key3": "3FQi7rVZGnkyqWuMYqgN6oqXdGoU7JDgFfRQ2TVLJ87konWXKejuHTWfCKxoTxwWjcm28qX5ukmpExxcVE86bDAa",
  "key4": "4Jgeu6rNKw3KMgLwqK5pehSKDTD8TM7F3pzWv9ff3vEiSMwWwcbWkvRgeKxx9AJLzdkTowoU6wYXzfMNmtLAnv7f",
  "key5": "28JH562qdNCpqAfczWreqJBip4QS6SUSHM9z4jeg6UEQpXMDKVTTUBq8eAyEfzkN7ZfT9jPhmATtUa6mQcjncFEQ",
  "key6": "k7o22eRcXeafqMEwQJkZF4Y4Uu31WMyV7nyQXybCH2wd4HW3pVrcqQinqDUV6bYisr8RLTTJ6ANxsy2QVobSUPW",
  "key7": "384YSSgMAN7XtKYNEBz1djfEbWUEfur52enGJCxHqSTWVsBjrxZW9hHZMGwa8kgZ8iP2oVXfJZMxV6sJqQ6XSXV7",
  "key8": "KsdmEjztGYZ5v81oaQ9G5pLQT5NnuQR4FkwtT2dXig38L68wrFGsrmusNXM4jjSq3Q17zZbUHZvvbuB4M615AqV",
  "key9": "5J9dZWXGw7Gc8oqbySd7qrsQRL3W8phRVDTEyQNyGpZqPihdoHMknQKXFoeTMWKSQ6HdneT4Z6r3itiwNfjvePm",
  "key10": "bjqq1QGtq3aB6YJgPSRNCufNy6V5jmLMRL9yEMCgMatrSiHpHSy5ZFmwehn1DJUrwZPUj8XYN8NjbDQyEiSmxmb",
  "key11": "54EMqGoDU7WrbTBxeZ62dHFjfofH5VAzYzVFh71cZAn1XHKRMn9jDfM8NX4rk9EifMuYooVTaSeknhVEjwVaVWD6",
  "key12": "3Ktbeao9WYv7dJrS7378uCU18WfNSbRC8gnGZSZ66ctfs5B4Uyy7u5jNfB96kdenRaBjLKM7TiF6y7W5v5YFsLX1",
  "key13": "5GzUXqXcQr757Fb3deEPdSuChQyk74k8FZ93BPddRa3iTZAE7zWz6FT479eqaYCZo2EeJU9egj3vSBPzGrGjteh7",
  "key14": "5ffZr7yNiUra5XN1sKeh62iL1Jo7BvPtY8LGRetVDnHZHBD4HuKoDcrt1igqAwyeYiv25SrohTZHFsYPhyYTX35v",
  "key15": "2zMXV2wqT9StEEpPucTeqBaHhteD4tiVjEXnv8qjEYTPG6B7SrRM25bm55aqoN2oUqDAK4K3fEFWeGr316KY1zf5",
  "key16": "uUjGGTW7SuKV45Ew8T3dRaDsYruaawNmnb33vyp8vpU8oa1LXGDK36SYdWXCkDcUigWSru7ze2YZZKEeCVNkkdH",
  "key17": "34jY4EQqsnyFGqVQqA89ZVq14Eh7MDduR1g5otXKQRYbYNGNtCQKSx6nbbYfH3QJDkRxvSEujrgHerMDd4ALMHZs",
  "key18": "3V5CHFcqrEfJuTdUn64AtfciB9fuwJYFYtTXpKTQn3BaWwrkhdE3PzBR6zRht1bHjQQ6vqXXNSZaKk6Yom1Xp1nB",
  "key19": "BP8gsKRb4cQNfCBkBZ6SXbsNp52CCwGUtqzgz4EG1RkCN8QVcBfSy7dNHYJ318GwCMp9hGTKHY2VWi9wQmh6zyg",
  "key20": "x1wG6M5ew4SA9TWtKfTsDC7Pq96vV9b7hqz6u9ZogxH45W7NwtU4MnfL5yuiofS8qg38wpKarBnZULFYFM3rvwq",
  "key21": "45wU1i7HFEfbRvjz2D4L5uQPjRmtBzRScpccBqWgBZ2ndcBQLpg1cDw9SthcRjh91HywvAvNLBbV3BuoFJ7hqQe7",
  "key22": "pgg3vBx3bMJ3y3KKqs5wbhRzNYqt2511HrFcjK5WZxKXutWj1j9p5giv7Q3ajsmZe32TjwBnAy8JBErUDfteD4K",
  "key23": "24eJqsJG9g2bf8An6zPXFDM5oJXVUgGp8NEkoLJNQ8igNnDykduhrfpp3trr7xN867zYoygcquz6wyhohZvaqExQ",
  "key24": "2R8H6vMBoJDwQNYDYMZrzda4S1wov2dQ8wrRqQZbNNKLQe7C2VMZkiLLoT6S1Bvhh9ViBYtorFwMFDf18h84SHa7",
  "key25": "4sjYpFzgd6fuZLEzAkXthcabTjrk48bLNLV3uCTkpksnKhDVZUmeN1tZgPYu4KBmT9WcZPDFbWVhjaCrsFbjpzPs",
  "key26": "6m4cc7Xnaij6THieskcfyTzDacSrpujaqUsBZZKebei1NfvpsED1exxYKxg2RZifYnsoxJnw4W4YaaSX7iUUMWg",
  "key27": "2k9siowRD9tYNGCFiA8Lc8k5emfYTcqLTQn1PvaWEUUNM9Nh323bUXLhpQsVXWBtMG6ir5U56C8xG4JzwWichA2M"
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
