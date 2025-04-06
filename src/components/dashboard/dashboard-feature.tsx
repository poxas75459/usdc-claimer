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
    "2ur1y1ToJxXUt726a2GE3dgbwfMjEmj2YBPjXcF9F7tvaiXXkbszKB3NQdDshR7x3mznoPy5Gmuk9Q5ercW9Vs3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1soh4cVhBEVDRoeRZUuSUQT32g9Hs8Pq7RdBAiGfAmfGF2jxmvwftpGWQAuHRbo74f8879ycZgpTHEWDeC3MHW7",
  "key1": "wusV9xgjjKSyKXHKcYbGCn1SaMNnyLCHQA5X36G6NRUMjkoNNWBB6bcZHRGdBCJvgboSYJxRH5LK9Lj5vuMZejB",
  "key2": "5mRkWhDLDUHyBuh4f1fwPw5iCpZoJKvECargbroXLRZJ778pHgHNvFxEnG4yKzQF35NTzziykuHJ7L4H8nKwQkFK",
  "key3": "37WcujFdGfFhV3CVWmcN5oTMsAo4CLm5oordCm7QuhPjWWGeFL9pQCuEVrd5rdzdi7WTy1owAsKcjh7nzjN3aGZi",
  "key4": "X9Bv6FjQKYyph5of7H6EgdrjPTdzCVyB9ZkCQVYDv6XxxV6JCsVE59kLLCFF9yR2h63Dvghgqoj8hiUa9pXT2VF",
  "key5": "4kbB6LiDJiXwJeQNEGKGTdjNt7B6v96aXfrmaHuXRWuirMe2tTpJoWEAmGvmrsXomZnUMAhL76mRe14kok3i1XMA",
  "key6": "5WrK62Fe1XYZ5LJb4yKDCo7mRcCGtKZ5mspSohrXNsuokyxCg8ei8gNrhCCuem6tW6NUgJ3yD1zsMXzJqiViCxvT",
  "key7": "3WRz6BsC1N2iBSoUUxZsTdqFGP4vuKrQtmJi1dAc5GwFqfvwPwPxYJfANUxsh19zjzCMhJk5HRHw1kuqWqvnUrAT",
  "key8": "2ZGTVGrux5KUVbKPix8n7RVBKHVWcH7PVREhec1jDznVbJJre9xwT37FvKuuqY2fTrUp6Lum72kNfN2NUtg55g2q",
  "key9": "31ASPmdbXVVAxQAPz4aag6aXYsrxvFE4fpqcLr17KDhdYRCL4GajrAS1Xv2SzMDgouSZwX5rCk6P4U6XqT6QSy5f",
  "key10": "42ncMM9D1cPakEfM3tVVJiEo1B8p9ViM33ZzFWqF5EisruEJ8qqYMvB9WvB5h8dkag6VyrJTUmFZZZNz4XrMYcn6",
  "key11": "4gXtWgS6QdErpBm7uSUZupqFJfuXz6K8CDP7j4fRQnQuF2JQVh1iWAXXK9RFYdGH9u9g4Eg8BgRDovxFktRQxoe9",
  "key12": "3VEJY12GZ7yXfxJ8eKhJjDxPxFHWCcF94RsXevs37rM4e5yXGX9ysJbgT93Hiiv5WXeh3s7CCXSFgZeRFhEdZRVs",
  "key13": "3X6A1QJ1eK8X6VTC5BV3YWgDXwyG8rNsj5Zq3ZRxTpLXaorMzc5wtEE2iQYYZZsmavYVbe8xyLz2WfxBX1sRAMVg",
  "key14": "4HrCbzN1ShtCaXpPE8djWyL9f5SeymyoR2xKa7AKycH7GVpcko8mg4X6DD7fCNeH7wXyb7iMD6bS5F2LhSTdQfmS",
  "key15": "28w6J4nn1wvUdAA8M1Nh7Kzr2eb5Fg3LayCEZUjyEwcyCVE3fnHYrCZpnFwAoQ8EKB3s6E9cNB1ybJ4PY4NCsovx",
  "key16": "4wCcrcEkvxtRdKNJGhRPB3TxofimsBWnwHCx334pU9U8cJrDebXBxAq6zpsEsKgaxtZ6yUwG9z6Be2yb86hhoTtL",
  "key17": "xPnMUrcpya76LD8RSvnLqdERsycitEe4hL2wy9reqfcKLPgvkxk2g5TcxwHLLdBPaJeHK8Uk8Nimx7QGdDb9q2w",
  "key18": "4TnYgFYRXwp9ESqorfshbJjd2zz5MtQdnStUEd3DH8Yewcnn8zjDiSXquMxQsP1Wpi3uVEV39TvuyatDjV3n525A",
  "key19": "36BU2BrwukZUSJvvpFV9PaE9e6uBJd6GvzSAznR6viMu1mCdxBUmKbGvj6QyCEZkv9QuPsS5G6NoyPT5Mmo8Bz7H",
  "key20": "37qz91nsmL2mr6dYnPQX5BCiP7PRAzP84vYuv4Se4fTRBYCJEXwBn85vUq9Y2MYFBLE7N2wLDS7yN5qMSjTYA5e8",
  "key21": "GG6bUvurv4qcxxkBh9WYdUzACUB3bBTfFr19o6KF9mGMV7fGY2J4rwKZnq1H8LEhNBAtJT1HcT2awN9PkukNd8C",
  "key22": "21v9UkHrmuL1eJRVdv53JpfpvoxKPb2Vs6EfFLZBPkBBiJ5BmKkqUUFr8mAK2GN2SNpF3f9Ga2m8X7SMthWYWgNy",
  "key23": "2EUG6f5G5TmvzJJeab24Fp2ss2D8S4pYVA8AhL5E4Yf18BqtwbMtCb1GKgdy75b4fjZbb4zwxPRXL94FKXceJHQ3",
  "key24": "2QokBHSLJLUFyP2rdnpcJTF4wHgEKw8ScFDFgzCd2oS516evoktbN5xCwMwb7AQGyxsPCN7yp876Ep8Q9e7pDV4T",
  "key25": "3a6jHUcbzpR7iXqHF7sew5Jo2EFQdQ8rPwihYJ41RmTXNfk12YnLZfD5Lnogaw4QkH34Gzv8xGN4mNVzUEyfjo1V"
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
