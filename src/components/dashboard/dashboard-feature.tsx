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
    "4bqegZm6ihFYyy1WoaEsXUimBpLeBxxNk8sx1zsYSZWzw9Po7kJujS5A7TPsranxxUJJ54M6R7T2yYZooPxducrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zGZqZ3YjUTXGEyrG3XzPdKEtmLEFJRufRrkSkaDdaDHC5DVq2nZJEzgMT7sUuwAJEows5L16bv6aoceGTJGii2d",
  "key1": "3hMV2Yr4t7gR5XTk9MApbBoWD42ASzfR6vNPvmEMHZpC15JiVVgpdE9J41V9kKUpLSv88e73UL5LvNBjvon4kGg7",
  "key2": "2M4Q5yqnAK99vs7thv58qDmxoAESmTLHMebr9omZJZLe79KL7BQN9Bm8XevVm6ub6Vj3f7ynwS6iksf42ZBfK2VU",
  "key3": "4wUss4nBz5HPD9iVjVF3xDnDaUBh5JqvavZq2DXaU6LhsHzwehXsCywfS5ZamN4B5AmwYWuNvBgkF9givEZh4jT8",
  "key4": "5AdPvBDMwa93it2yoaqjCUsGTRRqLbTpeP9YBNt6ocqSJLQiWe6zQYWAcRaEYHgCpdxytBUpUv5ZVVWDG7a1HBp4",
  "key5": "4mQex1F5Sj29jdYoRcFNcfh7ax8inasj5jRijqU5JUUA23JcTmjtQggapAcWcquRUnvKMgE6z6txnzHisTGmGzSY",
  "key6": "2KnUkoKJXtQWSWXvZbHcrXhf1f9gMgNj8nYvxedHbtmP9SjKm5wyqYDf1LyfdRW9HorsY7dh498bSEPkrZG7hxsh",
  "key7": "3x1862XqptcPo9BCLiDFfYq1ehzHtKbXUdYooaGmd4upd7G3B6Fj3NsnyAZqQkLfMhBdje8BgGvkpuoKp6SzyrQP",
  "key8": "5ek9vro7oEMpjwoDFStxiGeSTXFojurFjM9qGukrxsPW9pRtYPCwSx2iyxoYEUwmStYqDAiwePS9zWUvhVpkgRzA",
  "key9": "3P1nzxuEdUhTFLmJ3fZXxGgGjkaZtDYQNmWwYGe4gpYXnYoKKTetnreyhG7M7Ef8kRgZt6JhoFbLbZG6CTP9C3vn",
  "key10": "4QPKoEz2De2eMBcJ78irxd9ykmkUbgCa5mu8JYKSCVejMNVLiXR1J7LdVeyxiFGegy86Vbft5YUt3pwcihBysSJD",
  "key11": "C6ZytGuByATN1Y9UBPm8XWd6aauTNKQZTshDwkRrwVkuUh38Jwd7NT8ZJwe77fyJYfLSYGPbN3mWomQYE7xX8Mk",
  "key12": "2Eg85De1xnLsowpKWETfcxV72Ejv7un9tUEdWHBgBB9Z2kE1o3wG9YGQqoAN2qbLC57DEMeZS7N1xENcRXmT4ijD",
  "key13": "2adXCNYjuxGbdc1ovd12FnnMPa3dtP5hMFwTfqrg4Aon5q1xGBTZm8FdQZhstHeKaC3sXdfP2eFfWRYTPWRXttnN",
  "key14": "4kym5JoU9SaqRT2NLCY6ZLScgkuAnZVZUYCur9szPTPhdCKUsonUcDEaH78mmTo8be6F3HfgX4EireNdihWgo8uS",
  "key15": "3kxzUBiXSvBDtBg6RhsBfQkTKKTfdRTXNXNgK7dYUnhCRjgJfmTK3FtMD7shBR8SrUq7y1wQ7dum81w64rQ26wkE",
  "key16": "32xCBoBYeXTTqYECVSrfYmk8eHxicJAEx1obpeJY4CR38VmQo9ehjMUjnRFQiocVZ4HfnsLgRPQKfLh63246kzYE",
  "key17": "48agsKywBJJ3xcK56mZHuz97u2MgeL5BQZL3A8CPh5RqQM8sRtgNbHgo976swFavH9EMoUvVJyaQvqqitQMhtJmY",
  "key18": "4Cz8BL63eTP3wDryXpjGVKzJwhRJb3uxk9Mkq1x1mQ7jdVdWkfYpxBS9kdhxzmvAh75ufxXh4pEaRpRDx36YCxJp",
  "key19": "5V1DofYqtYZ9fyDQAPQHVKK8pDPZPKGU8xWhNL4QkVSHYNgwgnCKGGFMnXaxnH9G5mmZLrvfmowMCGZpL2dpn6dk",
  "key20": "Q7mCiqqVUa6J6NAbkXFBbqS8e2kTWUoN3KfNtTbSrnbkx39HKx2qZsHgQUA4HmoqAHGh96S5VscjGVqZ7iDD3vi",
  "key21": "UUPnptvkxbWbVAcgGDbqxcHBdXBNMXFSVJeyAsaitM6dsWFGz5UZB8eAFJUUdFzreQ7KLKPzE7KvXgBQsFdgmV9",
  "key22": "36yNMWDgT4ANcEEtJGYvavMCPTSZ5BLJtikj3eAMtXkgFCwvWXaN8BXUt3D85jPQwdzdADjAbi3155qqdQjWqp6",
  "key23": "52gyMaoe2z2hRqUPh2XZWs8XX24h4MB5GC9Jh5nbW7orUxTyTvQgLuhuneAuckTbsFUQD1NqXpPmCECzYvefTH7c",
  "key24": "2yD5BUUTGG3kTp51uYxTx8BHSDc6ycdqAQ37XBqDwJd6ZQpfEaQ5vdGMZqpMDytNytxmCfS9rfGkTvF9Vj4bgQg6",
  "key25": "47Xe7n6zTcBj5qLdEhpb9zMiaM6MWrGBgZgFcBiqtoqM7zsmHmB79nfGR8Zom6Uw8kqpqCzRm5FturgBFqTikq5o"
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
