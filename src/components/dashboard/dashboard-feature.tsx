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
    "29Dckv59Q6hKJH5NtsG92SBsSX3a5YhGTeZWhxGPj6CussuwtYNp5fJ2MgYcpBnj2isWfNfaZYM9oy7x3yb6aJV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S4kq6CdS8rNrQv5haovdiimV8UiyKqER6mRGouYDQVvJxANNNCTW5GQwVZ1MLM6j6pfvAvSq47QnXzSHj2ndbLn",
  "key1": "2WnBKY249n8T1psvzYZF11AxoR5SS9HJRwRxCvELsL7brgmoa3tKDdcdrAN3hb8FSqzrBTC6sw3CAxdQ5BPVa2uT",
  "key2": "BJd2oHaVnfMp2KQ5sdGxrizqHVtxqVMdxmq915HnFgzdusD23HgQCxaTMM21zaEsEwVwN7HjCAaZXdDLC1EceFK",
  "key3": "3SYQwfLUjhQPYLA98UNnWyAop4CcFBjbxvMFDrxgBLsumuhsfZNrpvCdVnjX9k1uHmXpSeisgdBZnpWnsNH95Q6A",
  "key4": "5xEzwkYgs49RbsRFiQc719dTxaSqGn3CeWiCHDo4tavkTbGyoM7vL8v7FZbbYg9nv6uczgStRhamnQtGDwQCvoW7",
  "key5": "63kzrCxzw74SucdrcYaJ5WYXJ9KuX7EAwxu2Xnsri8oKFvvbyZaYustxkjGFFqRE1fRVwFwN5A86DS7bvZ9SLSxi",
  "key6": "3WFgGHZgXV8DK1nH2EZywjmvuUNA9f729SeD3xL8obiDBc4SjXidqb1kJKjqiHYVpyFZRZxqZXuqsns1YEeFRgVB",
  "key7": "5yfye1Y2i91FqBpBjz3eqwk3viJjSy7d1kmMMN5y77Tr48S898QiJ6TvcyFtXXYbjwZMdYkp5CZjTBXpU86XVVWd",
  "key8": "3azf9mBwPPYKV4XmkuaELaCpAuAmgxfDcP27vh87WBpaWKgnQw3Ysj5uM75GpiaRzbDtYZHhrUwfwXkVkEeZUGs2",
  "key9": "nk5GkfPD7hzbDvxFWR2zzR9ZYEUfLdzC1Cf4xT5EFWHNdPoK8UU4fVigj5NnEGJRvUaoXjitZLgqWGHu5q99QSM",
  "key10": "2uDPMYZjau4z91uoH3DfDSAXoFY4neyQt2i31HRHTQ3BsZzqmRF8cz9AG6iNw2fczsgDAe5QGxdjeYCo11idWvMc",
  "key11": "3dfB65XZSWAErxuGvXznavDDtJ1vG6KhxfDLBJLbrmoeQEpc8kg2sfDTrDRFXKh2JTqt4q47ApoE5FUxqVziVZ5z",
  "key12": "5k2wpGWUnwhH92aRdhAVChXcVHPUEBR9srEnaauVVv4FC8aNVjKMvzZCMSGfYxn7fXUq4pEwAvTS6EDFUob3KX6w",
  "key13": "NGrYFZn6RVneqkVm6Nucgq3vxxHz7CXT6xtQbgKNGx7Ht2eQ1qbsKWUTvDCTKZic4ajoYZWVV9KSx5toDd5EnEM",
  "key14": "5m2zpXi615XV1QqNnng46urXF7PhH4ivxKz8K5pcHdnf7RK57SeH8wGiCqA4D9PAPrATU4XpqN9mysf5kjRBYVaP",
  "key15": "DgQ1GA5ANaeJrzTbHdmacu59oGrdu1fwAUYMAc95Faj8J2RmNTdspwsRDQLxWjdAr43poBp3ARbrge4jwc9X1LZ",
  "key16": "65gjSQe5cEuRwremABaZY48oFfNSNFp9an6KH2QmZQUaWb5EJZBtMgdkAh4SwQ1CFstZxkBgCZoZHYHLkz2mcNNM",
  "key17": "tBeciG2HRt4KtDYkTsmQJWGYW3yRz4LiKuWRTWHVzwqr3kAS2rYNsWzkBNx2N8p3T2tDuUfqsmyYhMuHBvL6VF9",
  "key18": "4d8xjDSdmsvT273Em9exqqhKw4iY3su292zxPRJeAWHYNehUZWEyBKpbSeVfZ3KeUktL7qFQePhj3WXJb8jUTJbh",
  "key19": "y3YuuXEAUweTZPXJruTR4xYxiMuQbStdAPx6KejX7nocwoefnnNvvojTqqfGTk5dFo8WgbRyK76PBLnJQKusujo",
  "key20": "5dpda96YvzQKEejEGZrWEHssEzWW8HBvDuNv4AxE9Yb4Ai7zBEubrvWBH3ACcyDFHG6Xga4V1txpPJL9zgHoRhLj",
  "key21": "3Nb1bU1yxePBxiLhY64PSjWwwWfGKDVtN5KPu6JtBg8LEFdkG4YbSmY42Rsz4XFbbboJEaXf4HrtKUMf3B2nDk6K",
  "key22": "5L2a1daXYJzqYTpsuisDd6UVm1YMWpKto2GYqgZHc12pJEvrYHDnvwPMMdftjJuLu96psHrhSj7GTKPbf1xrRtvj",
  "key23": "5bEjBbwWg9jXLCvtZZf6mnYGAjBsSkAeqTFCxiYfY7r9o7DCQseohopZJbBxmDR5nVpA8opMQA5zZkjphhrnDJox",
  "key24": "LSjHYWQPEsSiFtDqCc8rXF5Gaw8CUhKrmMarXvLRywNbjvNBNwxTEpgQogKiFNh8iLHhJtryM7Lajxqwd7D8LmY",
  "key25": "5Ciybj74btEJadAdfntLdK3niaHipq7WEagiYDmmyW13zXBMxFARXijuc5jDV53mgKgpzu1F9PDkYgvAKfQJ5N2v",
  "key26": "2oCT59kj1zk1pqo8RtmY1TjBHAGaGzWFFzAR8JEB5RgcmxkGkh5daUgxA2xwMhtoUTmHBRnEuKYSSAr9yqqDqstg"
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
