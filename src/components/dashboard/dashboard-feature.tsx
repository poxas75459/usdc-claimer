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
    "jr5W7MzEioKwt3SDUWbVSED77hK72EcT8B1UiAigGuDjADeqK8tz3E5KfitEzKErvTsRPvswA2eVHjCoe42j7iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZhT3GbhJozJPV54cfjjHccw5iuyhtzZN2YweDz8NAjKxoHfGkkurXCTCc3DtVKL4wDD3VTzLrjq2yaSGSKHm8Z6",
  "key1": "4MvPF9KZxoWMt4BEePfiTcNaWFZ15ACXxKzAchBqi9iEDDbUXUfY99e9fWc2qeK46LSnK6vWDB8npjjcjSdtY491",
  "key2": "2ch4DfySCh5XMai7WodHDkpCB1hnTFfZrd2LHaWvsJKhqrZGtCxFxFKLrZYqfFMS8J88zQ9jMX4jr71iKhikaZyf",
  "key3": "3km3JPsWcY5ZsXxVBCr8yibR81c5H54m19Rjgnm8QyuRKr2ctCKUT7uoceZYAkC7dEfS5Y66Lx8Bwfa93myRPns4",
  "key4": "3oco4Dv5FVRrLa1ipHwvJgwbBwGBzLuse9VAEPm3jUQE5P3Ua5QfxN7hMpJy1D3hPLqiK9L5DFnHpEsQXnsgyjuL",
  "key5": "3abwR2N68XmS4TDvivtZigS41X2UaBXHpYBhDtCA9Q55KdmJruDRWrWeMupYVcshhDsVFFyVNozg4t3FC9nAbGdC",
  "key6": "54bofzGa1dNdsax9H2NngXszkU5dZfBLGeMAXD511QJGejxbzFtfVn4DdnDeCsqPgrtwVET2zVnSoDY8QeBHKRvH",
  "key7": "3xrdqDCrx1JHxvNU1ThJdiHuBpmd3tb1ANo9uF2qP9sFHwkte6gUcazveEFk66o5D4hA9PMYCmFmenuoPAj38yy6",
  "key8": "aSAdHbrGUStPQ7EoE8ihrBpLTLA7Pbvs3npCsbzmMn2yXKLuTAqU11NBVyoYjRqmXnvpmiEsCnqvkFKcCehW9aP",
  "key9": "2ZjqkX7uepRbgXTBNcsnJ1VMj6AQNd2m24KGdrJ5W3KePPRPRPNkA15M8t9AqddFS8XtBhDWQo6APfkEo89ybPgU",
  "key10": "4cB7eskzzN1XEPkYhuqavdAixCBSUwYSbHmvsWPzxPG8iAy8nm8vWCmaYoa2yQJbiryEnxZRVFMoHGK7FJCHGmGn",
  "key11": "4H9xhvPZoobdqL1iz6zWU5hyrqygwGe3gERWj8V55WZpqdSEWtEp6jqKc5B4SbXVEuKjhVTeQhE9wouA9S4ok6pY",
  "key12": "544upnP5WDhuuvCKysabzm3jwqSiT9ScKKS3ivJYEHnvpEjP2xGAoU965SSLkj7zZv9yR3ySs99pm1KyQtnjW96f",
  "key13": "3LGHikRjQgWHWRZyjr53YXgrqgQQ2yAVPgD6vkz65nPoArLDDwN78SprswoweEe2wjE6PVd1dEWTzzgnj8u7q3nU",
  "key14": "5auDY4vnus1mfaUG4SbS4Gf4NH4wkWyEQfe8yEMdahyiebQKZtNCiG1zEnJTs2YbnucPfcCs7mTBNcAu1DsXnjct",
  "key15": "4L7fPfoSNo2gvKrUeLNuG7P8XKggF2WBPXDXdHS2rBox8Rp4tAb4MdexRq7s11zpAm59upzeXcuVjs4K6vgREzbi",
  "key16": "kyo6aLM8HSvx4yqr1yhj5cB13oaPfRVAcLM5Y9JKRwJqmYzDk5o6qMC59BB9oZcoeBeRPAHsKV58AvbV378BnDn",
  "key17": "3E6rmfzaYcwDaBCfZHf8LG5rAKECq1HJquaMmHNwStwtEkWyNsueses12hm5T6ji311vsKSayPoWUbGyKZ9qARyN",
  "key18": "5AfFDMG6yxD7ieUvgsyQoQfSrs2dKyHuvYDCVGgHwt2RDsoQPnTc7bYb3qn1N3xVnhrELbFkPYAL4XgjFZ6dbrPF",
  "key19": "aaDTr71jLrGFg8doeTAbcpPbiuUuB3fw97qU9pxoSrhuMDsTr9kGZHNUaBSbcBP5k5LHRVdK9pL6MHxfAxjQLTW",
  "key20": "2yXVsmU3P6hEnupzTGtHxiKhRLh5us3Lesgykw834jik2nsRhTWaVyee93DrshwwgYjqUk3gi29XxhXjzMKjzwyf",
  "key21": "2TDnEXihjZoBMUrgBNAoKvR2nYRp3LN91q3dEkTpHiP8onkYcgzLauah4C7PXGvpaHq9nvXfsGAZkjCw8mpLKPUU",
  "key22": "5XM697hm9uccZY1nsnFjZ6mHpuNa5dNwCZ4TqrwjM1jFvEr1JunqsVXj4df8iTMu85GaubYSjQN5aCxEWS9yPRcU",
  "key23": "QptvzeiWZ5wCkwfe6DKLLb1dCmb2vdVFKbQC2RfmGRBewTQYhudtge3ZxPiBN5uDQJFzLc3n9MeBHLJb2G7epdS",
  "key24": "5QpgzR5wULuAFiwp1GPYbXyChXfH6pnP9H8QuLqwic8cEJRS2kv2jTTdXcp5cEC2EaYzYdTY4ReuY8yHEwvbgAAQ",
  "key25": "3YXbNuHmX8wJpig7t2PJLohDeTugmCRG41EMvhaFgK9mXbexZ6S24ovePZVa6VvEMZQnWbFN9RpkhScECssdJHpY",
  "key26": "4AGcZ3CqQpLpAnd6UcLTACbpvueEjHS2H77e7rbbCqqBTvNmCbqwvrP8eMhauGEBQ8JNzg5bHshpTxhmho2QCiF1",
  "key27": "66gokrYacSuFNqGKhdiHeW5kkVTSCHmWvFynxordAmuH9pMdFVusqoiAWXAS6QsPw7BzcysgZn8vbXnYAHQaniAP",
  "key28": "3uthbwAn5e38AYNFMfHMDvvGGCfMtMFoCrr6QoWUZaKNZs9Rt1So9HZDU377bnYr5Re4JK1W3vrWBkvfBwh3AQNd",
  "key29": "bfuJGnyzPexsJh6qFCpM1hSjNzRkgP2AGX9RZhV1GaCmsT2MMcyWbbsoAHr5umZzGaVLTXnzaENET8KdPkHAekN",
  "key30": "36rvSFccTaUhPWaGV8AeGkfQvg4WRHhGzqhaPWBGuxs9oiuzxMVqbBueRaxkdv5yuZQaWGyUp8zr57tsTZKZ3VVV",
  "key31": "5w3QW3pg3KKcQT7faFKi1qKc9R2mNBsufhfAaiU5u8w5MkzFztomtvGheuNz6TJ14ZcLm5Jh3HPHPHZ2eMHCSL8S",
  "key32": "4VcC1EVonhHrBD6bwWrioC1ezDA1Nic9t3WaHzSh39ghmotpwSHhq3LvXyPZv6bVs8FFVGK8RVEuXuemvgQbpzmJ",
  "key33": "4H1E4iWrRUaLFGJTGbixgMVXiTRw7StFNryy9YEv2ntKT6fd8jjZhe4J5Yy7FBfHRLofreYjpVM4b3oS1L1aZwXW",
  "key34": "3VaP54oviaPDsz6eA4HoJepCjiz758NzyDbTs6nbKivnRXPz1pJH6zoj6YxQeAPvtqU1hFJK6eLLhAE9Nnr3uzBj",
  "key35": "2o7BWX1JiB4Zk71eznap5MmCuJ3bkeJLMsQxYJLRrhw13mb6jX53TXtELNakhuDANkDe5MomhYxhs1fWhNBfGcEi"
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
