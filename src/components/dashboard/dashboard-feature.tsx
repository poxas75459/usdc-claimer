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
    "4qA7LfQFfDyFchGELvpwNJQLa28NmVdDK4v9co9zxd3f84hz9was7ficzw5AC6YU6d6kSnbBjhf7aTgrdPK8naZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ibhRgFCHmfP97eAHHnFcR7KA2nmurQrSAe5j5oPyQFDEvUdyyktwvXnAVQvTuN4Q335iiwJmks5behd4im1H537",
  "key1": "3GEWUVkyP6ajVWBv2BhHgJXn2fZTuxiXbPt8hWKCLjUDCZbZQXeQDKKXimBrp6fMX52Dcr6FepGUVc92FLmfmE7A",
  "key2": "2XaUf7sNzvhBxtCqBzyJnUKeA8JVbSYoJVskqC4zQrXZwjFEs1nbiZuyUWCqH1qERXGtqZ2boAc1TtaUGMkZajDE",
  "key3": "5a6yMU6C3VXUj62qhBAvJAsr93HC4oPGHaLx7kX6YiJUQKMvGQnGisvhrdT6urTjf8tTT4XLcFaAJX9BRaehvXdA",
  "key4": "5Mq1ywpeBf1B14WTKEkfLQgn6sojXp6KuN8avQnBrgDj2SY3BaCT1msAxcPLLTxFyhUmXd7i1KBCccN93SJD9aED",
  "key5": "3DfC3NABjjkv7vuZPNrkwsrK2jEm7Rnsgai5imGcnKZm9weCB5HeWMu227q4d2ws9Kpyr6NB8es4tbdxJoPrqSGA",
  "key6": "5wsWkDYwU7Aqa9N8bVeJpujZAwkQJYhkVbFwEeM5YELP6LtHDr9Xb4DZy7bLjJ2HyjnCL9RuYBteRmc5nUmpHZTx",
  "key7": "3TEJ9dnx15vdE89wYAepnzDes1eXG3USeuv6aPzYtTfNzJUeiPLhY81DFCKjthKHbLjkmdV2ACruTeFb6gLj9Kv3",
  "key8": "4PE8m12UtTj76S3e8VmJhW34LheoeMbYVZRNH6UJNDpFee8Nz3ixai1kufFgCNweGpC8t2WYboMSLY86FC9RVt2",
  "key9": "35hpJrpsUyPVsTmpcaGkhNt859QXYj8YsifJD3MF1VGR9LBmfmqDyKtUtsjBaisxhqgxdrBgdinRNxYXgQ158KsB",
  "key10": "2jm8zVzra1JWrvDtYzS9VGGK1UyfR2nt9ju7UDag1LrCzzYgWcdY15cK6piwPN4fxR1XUB1mW7EfUgrZP7ESoDXh",
  "key11": "eazjmjkxNGMh2u5RmtKYwj1Wj1MMXgEQ7YcitLZ1cXfsPezHXjFS3xJvbe9x73bhqpitKrn2D6T1P5Behwnrmmp",
  "key12": "4fqr9SC2AQHvJED3xYBmeE6ymgCqX6Gz85tKwsX2pjSrfbVH8CFiUt476VrPkaPU4RWBBLYhkQoY6Gshrjg2cB37",
  "key13": "YhR5xraVMuyaN5XoUB3UGYjN3STxN6auuCCmPrtc9ezLVWcdU5z3aZ2EU7GZ1pz4jrxw7sMoPCh7HyXdVRxySLD",
  "key14": "2nBfYEfZ14wWeUdaVVouXakTu7T31ezJw3Pv2j517jQL8ZeA2XVJbB8QREjfG1PNAJUZsQocfRiMyVKrGoG9ZMBF",
  "key15": "5c4qvc3RCDesgzEr2RFuydPy2dp4KXv3zXkvH5VNPBskbLEXWyhKxiqGtoCcSMUaHrV8EuuUpGDPBBiAFWCStWZj",
  "key16": "YAwFY27efR9Yu1GzDzYSnfsq9b4CP82n6oV7nogR2TW1UMKrLehNrJU7S6vLL5RraJBnU7Pc3DmYb5zNFTAzzVk",
  "key17": "2LDSkT9jmJQyugYYoJAWgpqQAqmJbsdgexrxrdyi9X8NzjkpupJ5txfkoKYVgVaJb9WkjWzqkHbhLbTP2YuVYbjx",
  "key18": "5fG1M5vG6ifcdCG8xB7fXFTz7fakmAA888PNDB2yXJqTfTpXCZQ5n7AzurWhBXY57y1UdDYdcbxQ2jjnUN2i8k9x",
  "key19": "4u5qsD8N9TWj7j1mpZDk412vG9nFX8K9bqhfj7rk5EtoPGLAGWdGdXJBiH8icon7jENMC1bNCiowscfjKB8oXeY1",
  "key20": "28FRRC83UyqfwyCLJG6Nbn1fBRWChRUaM2xSJyzmtcvmie6uk6vsKAqEHNCdo8ra2d5DkrEk7LRf22UsX4GYtffX",
  "key21": "5G2jgha9EbricbeFiotLmzjTSuN74iQeyNnGnWLqWgPDo9NoXRHJKPw5VDWCmZLgX25BbzPCaC8bNnR4vN2RDRLV",
  "key22": "fZC86BpYyTvGm85XbWKJ6RsFunTb5feRzYUw3nWgtxa9CtDMvHJTij27uV5pZefSocsqMVqjFGGe9wFBWPFqiSV",
  "key23": "S2ZfYHv2hM6TJVyqtyjRPC4JU9NrDm92ZbXuGYLV8aRrNcUwPMmoB8C6QuagK8rp5LvR8cD183FK83bqcW8jWLU",
  "key24": "hW5udQBsny3L6Rz7U27QYc5t17upxz7hRJsegz5ydXoN2uTKDxeSZmkA8WCpedBw7HkThreMn7Ho4Ki9jg1oRkx"
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
