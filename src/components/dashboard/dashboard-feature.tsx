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
    "udA3kqDmmWpGvf7SG8Kgp2nzpv4tPC4CbNPig5qza5hNC1mZNLHuhn47Sy3x1ZLfUvGa87wT16syZy8Rr2dLj4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwWX67XELF8AJgJZK95te85KedviNME8bwhM2FsbFKXJWt8Zin9yETUSLueTRYz3qqAQ1QpgG3DAkmGGUxVKpuN",
  "key1": "44X3mj6hPKgf9huaDJjG9XSe4zU2MKmus7A2aze5HNKYL7TKsSJut5DTdpB5VV4GE3tPEyKqEvUTeTtpAo14eswK",
  "key2": "35EvSfiLuLjYcQV6NVo1DDK9zXKSppuGqhsWx6KARz1qWQnFZpkgGvkMbbgJBCVqJcM54Ki38BZ5EZTtxk7e5vEZ",
  "key3": "3Wa5GL3vY4ne5mmwLDUrhLMgdByHZvzj1N1QgJN58v4xaZkAgaHnY3HfpD22E6TMYBjdgAFV4vptKMNeafK4Sa1g",
  "key4": "4zGVPQaVdvYKXcPdw3RF9fkLW5BXuEiWkX6B7aHWjJnUQ7bD1o3cSWv3oA5FLpC35ZJAN1NUas5xvQrtZcfuCSv",
  "key5": "2VDaECiZV7Xd2nZm43tt2DJbFT29j3wntUzoDg8D4PWCcpTop3mBh5Kr4JHMdzPSu4bR4FNhcLwkcHf1waJmLeCD",
  "key6": "3V6xy95TtkNNmW7ZWJqBhuVhhyYBk4vBDgJEDfSh6whMotv3zD8AdNChAKgL9ZNoQFX5z3QLJ1of821Y88LcBt4E",
  "key7": "3keYPdWwF3Dqey83FK8iD5YTEQ8vcSiopG8c7ppXebp4ocwNqBce2XxARmgouuZdqvdnYgoFb3YvfKq4JSLGK8wS",
  "key8": "2t2G99A8aTpvBbonQGSP5eDgM5AQjwpfVtiKmJj1VGoTqir6wEMWVZDfqBZaihnwa1zTTiNC33X1ZYfWkakGYDkh",
  "key9": "tjDf5pZCakkLndhVvYkXDTry1Ec54ip2KBmLi6saNMCQRjkWnpwQxptA9qiLGchbi2r5mqTFzyJxoafVQnjRBj7",
  "key10": "4hPaf3wAKuxwC9ez8wsGNLqkgwMeSSXU9Rg97qPf85UrFC3wf1bMW32eKZ9Kv7nVzgDyJWHPv7XLFxFDEjYqL8iG",
  "key11": "2cqZsVpq3ybubSh8XxyfUDeS7xDBTVjkY6CCvQGPJsDNBHJZTLkoi8w5edVNVxuz7sMCoQzRa3KpeyZPEuCvXjTS",
  "key12": "HmpNmUWXyByRcXNk42cQDLbYy18sxzkaLps8jzknZnrQemrLq1TjL5sBeguTmuuGBAYJJ9DvpLFdXLJTZgV5FD5",
  "key13": "4kFUpCxoBKBik2Jeb6tFdMVtSyuFVJnNKQLWgz51pKFsTvCv3EtE1UreMrZMgrmqnGWph7vNe1N4C7JcYhivw9Q",
  "key14": "2iezW6czctJCSAthBBbPhCA6vb5EmXQ6EykiMQSj72apVFxh1Ge3GU2Nvh1rbpq36Ja7M2jNHkWxnoz5bMBgP4nA",
  "key15": "5wXZm85mBNUFcayKVRiyxn86jcsvt8JAEWN8iTWayDXrRDJFVC8iuD3MigvS63zFeR9hSDGu3mWDmAH8UVP5vrSF",
  "key16": "3q3WD1vAoNWHQEYAVG1kZRY6mFjqtYqcnUJNJeGM8pGbETGmANeseqMbK1RVfZJozCc188LdKSz9VGFNJGTapQ6X",
  "key17": "hg1m7xgxpwfTkCCnvqaG1SW8BiAAy2yoDYu3ZzXoQva5YMpwkfjvdGGD3YiARRjTctEwqt9jD55PJ9yPm169XJv",
  "key18": "3kzLu4uPdEM85wyyDdTPbxSvYd9n7ZjYbQhTQnixaRRtoHoATbweabEsC2rtT1EypqVFMBNz2NWRJPV278HPVdWH",
  "key19": "3ESCucASMyia4uMPgnVPehrn5VGoeHaPP3Yk2Ys6cjKdSXG3yA9CptqXMYakGmDZMvY9KhBMVuZpyxcar5TdEmcB",
  "key20": "2sao8W8TLY26YVPy78E2uQJgRsfZ1HpeheoLAEcd9wUvhHGX5P7PNHq4CT4fpZ4jn8g2ZTaJBcxYeDRGe7pXVkEr",
  "key21": "5hn5dYUKbUwbPJryihEnpswLfLVg5JHddskoiygyusB7wZH5jW4aHkn1eHnGWFapQLExjrBGKWGE1oCFAhfSNTA4",
  "key22": "3sGexgYXx2GQE3ogcEZojaRtdwR9o3X1h6wPHe28Kmd3P8iov4ThU2VBEnW8g6z3ZGB9KPitBdvmCKuxG8GpEkDY",
  "key23": "5R1EipERU7T6sDEiRAUecUAxMdwFe8KC93RuJphnWFKGMdrJu8c5tMG7pBrAgp4VyThs1efHGygeZX71wAgs2yUH",
  "key24": "5s97sK2xcDdYiuLJzwMSx3Wg8aAgE9P7DF95XbgaubRwJbKhZk43P36n4rpVRoxKTKhhWde5tFn2AdGFqLeo85K5",
  "key25": "4wNaPLe7qbDjLcfgLhAJn53sHKmYDtg5VAXoUHj9KJBBR89ksFaVYBZ5tNLr3ynLDE6unoEdSkhMsJubPr5TDso1"
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
