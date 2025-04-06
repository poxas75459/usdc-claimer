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
    "4beitYQ3Pi4GdHfzkmsoxTPmtZ3frAkqTxGoiFDwQhqtTDV2tCNhpotzHS1pcGHtqhwY33WXYZvQ8sE7T7EGChq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sq2qKF39hdv4GGzisYWUD2MhJNqeaSNJW9A459GUQUaVnrH3HmA3u5vD57e1KhXuFRg9qc63gYNav1LjTdwDzE7",
  "key1": "4yYKN3sDDqZ6Yy8bbvnJv4QFFybGz7iuA4tiFV15bkTL4YXcYq27kwzFK5wumnHbDWCGxb4pp6RjY4DwCyGYFPZc",
  "key2": "iWg8TVXdSp3qD8EVcBivUVKQB7AR2uJZDjqEKKN3DiZ5zEQN5PDqE8rqhyNnEdr7rxDBUj9Tpcs8xUEjiuDTftJ",
  "key3": "WK2X34GwLPVMXPwzLKJt8uHsmPR54esuB3ttHiBZL8VntRYdV5zQPeR4RAntCUBrkJuGiUsNhtHAEYYyUJJWveg",
  "key4": "6ES4bM3sMaPDrYoaeGqBcAzUBvwsH3eEtjmMgwrjm9NbHrmYVqwy1d1s1K7BVJ9f8JmNEnVp1yxScQRDfhpTSbJ",
  "key5": "5ZgRfgaegFmB1VKmCncrqUar7SJye9vkzPXK7EkxX6peFa1PQiNV7QMu9KK6wECyy7WyknUHRRZog6nxftT13LJS",
  "key6": "3k68vA6Kfpr6NmiG2Ce3QB1qKQBGpygsUm4yaHXWkn9EfVjdCriTmDZ1KJ2TtotuBoLFZc7vBw9cuRju23Zj2n4j",
  "key7": "2HHov5KVkPm1iFzCGPY7cyEH341nNV7apBnNjSwSBga2Lh5LMbFkj51Gw6kNi8XLjATDh3PhoJbPtkXkpys8VKFC",
  "key8": "3adUhDXZpoCRc5K6HerP9KjDxUFianEUVSRWzo7qALghW8QpNwi65v8wyTiQX44CoiRoA5ydHGmNbjwrJUct8HXF",
  "key9": "2vGiha6Zcu8q4Y8eR4R91cCFCszvZ3AggxsHWiKJ8mSvj12jWzTnuQWkLifd4w7WSNwdKizxCji8awgMxUhWX3GG",
  "key10": "3Fnmg83ZYJPGTSnZKzD2D3aWUPaxjgGEARbTMsHNczFLGxY6UDd4zwK1aZ8R1wF2eAA3Nra6HCJL3Mh3ud9uhwj7",
  "key11": "56pZCFRVq1EosYTWaf6ENcnyfFSG1fSPy5X23rFEhacynwUdcNvdYKY5se1R7WBwuPJvw4qvKuuysi9kqTffMJEF",
  "key12": "CeCR2FrcCCQyNEw2sCM4oBQKKJ44Sj3Srr5rEGDNVYxY2JuEqhaWAXi5ffYaL1KqFsGtDLNGk2Wad2s38ETtf12",
  "key13": "gWuBow6FKXd6RzYrQUnAKorrJ6z9b4NqDKWc8yhwQmSy3QvtHgDba3aVCiMtjyZ6Adxsd6ryyihy4jsGLH7fewk",
  "key14": "5i1bFy9kJjS5Bh62kF72nbkWFMeRpCnpHuE6XV95wMRA5tCSAZb2taX6MTNZBXMmFTaMmGyBzRBCZzxbhwiYCexB",
  "key15": "2geGm775jH7aGZG85F3DLu9y7ouxQZj5dXr69r3ZWfrz2Kf8uRKKiK55ntPQom8QG8m8rfvv2FkhjjxEei6f3KZE",
  "key16": "5wZNDHZf7Kk6NzTS79cLeNWDNN7PDdHSrDC99QgKPDPq6HiyPnnLLBpk7NUGK8q2Lh1VuDPUSdSWi18TCAFGr4B8",
  "key17": "5ZWCn1hRRrELbNfUWr1GdNWdue1gRvLnFFZHcJbdENTnD6rgAyB6t4wsD75zz3e8YBxsJrPA1XiZigz456FvS4Cq",
  "key18": "3oo5GtSATBvAfAqNFSv3MMvpdMUWByA9SxBxxBp2YY5gYAtRwo8ku34fwniysKgGj5ZWWNs4NbZYCxQUxuXbXtSo",
  "key19": "5jkS9EUUGG3upfzGMuuMoC9G4suk7hQLR3isJ77bfxAmpZSxXW4CFaJXrufRanyvATCimcHNPzhxwbNPdce2pQVa",
  "key20": "3f6hW5aG6pi7gyrEB2h2MJAakdQVcVYpp6i6wCR6YPj1eW7gsrbckcyFNJxWiDSHzYQ3uYaBAU1LvmxTFawpg9Pt",
  "key21": "5shsetn3u4u9gg1SkUirp81HaGvkkapp6n2X6S2meoKWJTyi3x6DEvu9szMnMtSYHBAmbM6H9xTBzEDEvcdMXPcX",
  "key22": "2EDN6H5hmwT9LiSeMWh1A7GSxY6Uw6M72qnj3XKUWFLRuXsHhAXu9FDQHdKaswQUWWveSCxRYd2bu7Er2d8WCtku",
  "key23": "56nYdVE69tQuB8kT4gyGmpMXiJV8my1i57rRDMZAqGGSGa2jcnoyZVbhruHb4zVBJ4bYUBxrosLzgTUV5gL5LGYF",
  "key24": "5etFkaEQ41xuNjVdMzRjspAjHxwsyEyt63om85RCKRkqvRrR2E8YHFnvbMQ9exX1jGvuv3jUNoZ1ysNe921roaea",
  "key25": "44EpQKG2KPSjBDfaTpfD6e5pRsVst9keZJezguoMNHmYcDH2iRYH2dM12fbCwnmeuXopEFYVxBnVUEyrNvaAnuv1",
  "key26": "YpHh3EM5cd3WkeFTt29UGG4LnczEuZMvsP9B7NqdGsF5BSkadAxA4wEyY8JY9DmcjS4hHg6kYoKrct7dHXibtG4",
  "key27": "2VF9AKzNnYuxTx227StFtcY7HgyYPo2Vtg35QyUcXvMdi3dpMJTMmgSLXMweEckZfcCYH9LoQk9ZLHZE8BVQaxy3",
  "key28": "3WEKPqZ5Ed1JSyWjzSJk5kXhBJLiau2vX7jJ4X4SGLsHYhYR8JUirViVUALt2jkG6ZtGUkuSFjGR5VrURQ7BH4Eu",
  "key29": "2GueoGkmy9GHJqneKsw9wGpaEWUGoyG4JiS3hnNNB5HFfpcGU6Ut5Gc18JMzR7azHdimbwUXehGcvzL6sG9uqXmP",
  "key30": "3KMtkBmt3UQFUfQd7RhAgUycSFReVtnbRTEUoaqisYhU3yRThNVVRvW3FwfC4KdtZkqQo4v6QnNSKX8U42hEQa3y",
  "key31": "4qsuJzy4ze1QuGc2mmaqFuCHPn1WoDTGfCSQei7PcxuCXARmnwVUT9vTn1hLYVYbWLw1XirVbfV9fsfB4pyR64dT",
  "key32": "459quUWEs9sxc3Mgpi8S8gFiWJMpde9B1BBh3DPRG5ZhG3wFgC4nTE9mpezSVG5pG5mX2SH3nKaEnJwmmU2psQdy",
  "key33": "3ysKYmns8BWidUrCfXHjJ3BycEQUZendhFZjqq9m6QsehRSUNe2PM6JR6Uj1HZDv9LuhCApEWqdaTvT4d8jF9abt"
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
