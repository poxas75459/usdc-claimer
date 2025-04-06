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
    "36ByDNUhpFjAM8P2WPCyxs4MC6WWrgBPzkBjLVCcwnEet86phK5jCqaWR2EWdCceNto6MbNWskNa7F9MZ3wpJqam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ikLE9nfEdyAiiWHY4P5NhfBaqKgAZ9txCiSt688ica7XJAjYxtTNFhPWpqVzfx2o3DRExBtB3m9npJnS5eiWJmR",
  "key1": "4aX9BjCuygzFw6Rp2wEQ31nkQVBsqEkpSYNJcijfdpnnsotr5ChycDBBGnjFNSZFpDL9wryzQ7WeLvR475kQ5Kp8",
  "key2": "3seacaFz3BvnxNm6SREaGLdYvFKUoYJgahFFVn3LxXiQMqLsJmKP1rhdEuv9njVGBhyoEKSEYXF5MFvepsG5yrDp",
  "key3": "25XvGpZ1hq5pZHnvXLU2tHp9G8iW6C8MuDPBz9SBEYazbt4Cmtj7rBWnFr3Bw82CCuNrXsACdTdFQBFmV7n9ztba",
  "key4": "2kxc2pK1m617mJae6nEzKdfVjya9aWLpruZQbgjmLchT43eJMYeUhqdxcLF8GG9WQAn6GwqVSFiHLLD6ZCfdGnec",
  "key5": "2bLro71yP4JAuDs8BEq9jCuZuthYWPQp1sPoHcrXord3WJ8ThSSnVQ28PSFq3x31i4sj7hrZXQz9n9U2BPtfXnp6",
  "key6": "5CRfCPkQSUeRDhoUHBvsFhwDRWECg5WXXd5o8qtnYScyKHjGEjonYQw2H8EpzcCnEPSQdijwj3upLuWbujoffGLW",
  "key7": "2Kb3EQQmwZ8ccFTAHBkLvPvnDkiifBXpzFmmavRFy1H5FvbW14SJKhDqYDdewbswWAb9516wTdL3ujYgzBcPxDQE",
  "key8": "5gMwcQwM5DsTXxCRvLLdFvwRTX7Q5LeLughU9CNVuLMqo4YpRZChXmBwWvifZtDRdi3iCm8ij6ATkiVSCLiMHafK",
  "key9": "PqosyyKW13Qu3syjTcpSCMn7iDGPzfuS5KLU1Eb1zwCQN1D1WK4NPtabNG1WCGRLNb34DB8iGBp2f1yxhCp6yYA",
  "key10": "3d3Jgzh9krdhM6qJCZ4nMmApiY4Tbh5hghzvKajwpaCVUbMPxjRWVFLAz5HfeqnVskdXeiPwfiSwxhe5EJQyitP3",
  "key11": "oATTC9fq9PWKcMpwqmKfQxsEQF5kzFW37cQgSG1pPNoAfwGkwGyjXvCN1a7zyh1HcT3Khbf4i6hUE2aqaz9bnrz",
  "key12": "kTXe7VHaxNDJoXFE3FwdRDeg7P7M7VpCLe2xKFqyVpaXDan1soAwHVhSNxzyBAUXiRa7t8gKxrvTpVc6fmP9Tx8",
  "key13": "y53bMUEw4uAZydANWe2b1DDdfxEevzVZBfD66MHCKbRNeFRv1czSyUyJcLjdPD4vCx6zn8GPE5XV5fHBGtsdjYK",
  "key14": "5jdL6XKWco51UNTuLcvQPhwvz7dMoSqBi8ZJRhmBCTu782kgiHau7NrnfHkLHFHevae1Pm36bCxzXTdfV4Df3Kw6",
  "key15": "2gc7Qnr1o3PUjtWJFEBTjUYwR2dFC1BWmxpCAGmEMrvaV6YN5j8J7kU7Cjd5W1VbS3uA3ayUHfFN3k1U1heu8YZ3",
  "key16": "4GqxuqB8yQqk9oynawhqXNb2NEmtf2pqav3osuaTzbWyhfznq5bwmhupUV24tx3eZFgRE5xW3imxGbhCDQEKqHJq",
  "key17": "5fPBP4W6Nek7VPPh7P2K3LErsyvLszAqDLF59eGXf9uMeq7Frw3o2T5W2f9HfWvcaGUbv2rQUVEPynn1c5otsqBY",
  "key18": "5FwygYei4irvycY74qfd8SLrEnmJpz6idqsgikaFg5Lk2VnvpHrY3LBmpki16Gc7kmVV7gVBnXmpz5aDYBcBZ9in",
  "key19": "62ZZ2PwTzRmxrrWfMf7296BUQK6KgHJ2zypVriAG23nr4YThC2iuVK5qYDa1M51cyCBpc2FRrW5sGvdz4P7ZeCQE",
  "key20": "5iyctxW4m35LmwAE5inhx6yr67cGvFksv9n441MFv36JzSBb3sK1UTk8UeKvgwYfmRmLNV5xTSpTi3Jke2jp8asC",
  "key21": "49ZVk6MUWYNFUXhkM7ZPYqeRnSVW7N1wEuLBbyKeFutkT3eYb9x9mXd75bgVGsGRc8Mi1JraiSJw8p6wM9ERTfLK",
  "key22": "5J56f9FQuTR5pTN9hPy7mm3BZfvNh1jiuuV9QedMpq6HevzcUBHEa3kqhnrxKHKWWZdK4hX9crec4ULfLrKFP2MF",
  "key23": "5DNkUniqUUEvQByP8TTVjgKzpXmgLxnjePhaoENeFAtWSP8XK8uK2HMPmxdStBxzTrmZxJ78K1yZ2GW2Fd5eFajb",
  "key24": "5pNFtdyxLTWFgoaQRUtCZpKyZmTY2xsyo1niokqgDu71sKXdgXpUFwcuK5qzMk9q7o7njydwqYqJ8uLytq7QpiT4",
  "key25": "qVzMjoAyBSQXpt4JmzGHdAv3vFA2U8wRN6FrXSJgapEYoKhtX8jKQBvsESWu365sJqepVmviXYcoiMm4kWZnzW6",
  "key26": "4mKNmECY5VgR31PVWGLTzJtDcw9BrBiGt27juqnbXLpfrzGGfPXqKHweqwpR3wTcoT6pQMPJMgSTyDmRS6dHj2SH",
  "key27": "26RERqLjwoLAVg8B4EfcGnMwXFeFMboEbYcDxEJocvcj4cbjSeaE8eWAhZyu4A8aZooukaAwyimmKm3JgD7fQrm4",
  "key28": "4eu4oPNfCyCfUgFWpeAFis6xN7sdZ66GMF4cFKWGggQc7VtTYj6RKeE2dKeP1ne3tNLVEMdMiF7ok5EhvTMgreGv",
  "key29": "dmQKtmdxZfQo95onYX8nWqkE9xLHx5NJTeJfSXU8gcY6FjAg71NoDm3zXQVnjwjFQJ9RNmKFbq8iYQMfe3KT8T5",
  "key30": "ouXx7tdEvZifrczcagHm1f8JiyDsmmgi98pXDxvAXT2Eoh6Jw2qzD28zytHKNA5FRHAgqLBmYwqXTccG3gXxNfq",
  "key31": "2VWGj4UYf1epUyLA5EoVoR5u64aqhkBiUYznfn7btZEoqjGH7v1M7SN9JfhN2kvEAM7vXGHyLbBkf9ydXpF8VJaP",
  "key32": "31qagymUnPVF7CQn87jGR4vMEeENxuR5Tk2WzNfJNgVk8fmcokBsE8SMxk1G3gyjXk9Ea8NuCLoQeLQQVq3ZgCUs",
  "key33": "23CsUfXouyC8y92rXpnwBR7K5uUgBYcKEta6YUwk5mYi3wK62AiNjNbu4AD8x35WRNiqNzoN2zsYgCKz6gcExoEW",
  "key34": "2KdvKK6hPzrhkmLVEFAWFP5M4vYzVncT5Ce3F3j34N47BxgfS8MVFym457HcxETxJ86oLLJ363xxqxqdCXZUKmHs",
  "key35": "36gyDBbWXNnHmaKSSaSnguVhFWebTQKHmQqnpoSP2JnzzCNkGcd5gtGpzgMhxiem97h4HXpHTSk2MXUa7St7Wv3y",
  "key36": "3p3RCagP5411beyHhGcZVd9o34oVonWoWKj9aQLzZhZqeVHFUxNECALZ2mTw2FugfGQTUxGTBPafqcSNKGtTeUjY",
  "key37": "GMH3bvPGxtxvTw7QfaT5Lj69peG5VYGQXLDBJMugzuCs3YgxnRrwkvM8CYxRRmPWaZDHC3LQ86YoDGnH9jWKobq"
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
