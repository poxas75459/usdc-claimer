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
    "5qBHuCWCQwCTv1GkUFA4g1NKTxrf6bRF4SQ5fS3dvaeFtaAK1x42dV5FX6QaEbG1H5CvqebL1hJMyb9zozQwomQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2npUofTFPMHBciE6LdieWEeohqKbAvie7eDPtTaR5huRwnFP6H5Bptd5Phod5RU1n7pGAdKfXUJpr3RQwz1hXE5q",
  "key1": "jbcqTGppghdTVQ6BCx8ZzTstuYEMVVsv2Tpnpf87t2tBzhXMHoz8MkpRrz7Sr6kouSmChxsgtJvF8RY5xdebngu",
  "key2": "54rna8wrvKYirbbC6ScDBSLJwAhCY68cQEhTw8YHn15MrtR9UzVsenaHeU8KP2yEYjjJnRjEbcro1Wr1kXdmj3A7",
  "key3": "4DjqE6hAt3kZpEa1Qdmj2q8M5x7rjPEKK83bABdKtTpx8YobxY6zyA7cgkPpC9YuvACRwfiuKcygqM4xTyMWPBqF",
  "key4": "2HHGGzgNYkaze4NqZQcaStGZi6pYz6hyRx658ZFHhPz5pBJF1zSgSU1yQExnaPiKPqGwj9gfDeyvbPCW3B13cJFi",
  "key5": "5s3jsUHea1FfTAscpNUJihny5MHQ4pMtmpMg5BvqPu7vnunStWcxVzT4wMkgwZNxq3ni2LnDRw3JNXoVYzMmU6TD",
  "key6": "4oH24HEZwroF7173iyrJTKMVDs2Q1wHWsEtqmUetgsWNjt1LhXVimsiH8Gc9T9EPBXiB7nfgZse9eLhYfJgaMF5E",
  "key7": "5LGYTsc2nFYyUs4SZSqA7D3uW6njN5nqqYJ6wiXCjDuR9GiJbajG81nvJguJ1xG2pGVCyjCijVrYn1fMzxzZya31",
  "key8": "hEJ3mHHMLmBUYqbE2UCrpdsuG3GD2uR3NdgwbgrtUhg9SCUbUW3KHhLoYEr4u4AfkES7Pry73p61pY4NvLxJVnB",
  "key9": "26dLp1yTWv8jQyPNmZxMRTi89nVmLd9U1RsQCuaJWsYqxxBgCgXFwDcuM5EBzdmGZA5wTH24duSgdHaSak6n93ya",
  "key10": "ka2rsRuMZ5mG3RG759K9mtDbAvsQ5o3BPPZneMTjYHZ4183bbsJ6A4HB8eHpGfXsAUjYFhv72XcZ234MeQuM2rv",
  "key11": "io1DiHrZaP8yFGbLfT9SSbcF8wyyHHWQRszGheYyeRGyqc387wqcTq87tCcpn56Ce6838pP1dBfbnbt876gX7d1",
  "key12": "2cgNvWCz2aunKxfwJgzVZDErx7GeBK39pRJFCj6TJRxavErqwxH2TfxPoe35GUceNQszQ5qarK8giS5VdPkWNkk8",
  "key13": "55EzMWrJ2YTZJRBQDs7Zfnb86m5UbMjMvH7ga8613rqqQq6dbKyRs1YEEan6XiYAW4VRhnuhrvWpMegrvZXe9op6",
  "key14": "3VY6BsmQdminYZRp27ibHrgRMHMAyv59hciBumbg8jxBZrPXZ1JFG9XrfkzTadrA6uURN7uMATqyWHGQb9zGi3P4",
  "key15": "2K3sr7oT71UTuXbZzE9P6rypAQt5o7MuysZiXWT4TSmLrWYrLH95Dit2BHxSDqM1ZEzceLa3uZrTxE2oCrbkCSGm",
  "key16": "34AqGkxsGQprxGDB8JPVdSmS8RijQ3XnzTWgPzE1BmSXfN4tBFNBikXXgkQ1ARTjzV8JRt8XG1D2LZzJeySCRqei",
  "key17": "64jCNyoZriWFUHdqozJ5RUokvZQJbrpHrdWTU82QAKe6zAxeztgBwqhvF3XbCNQK5r98xRNBzoAVhcNHn7cqDjqv",
  "key18": "2QJZHwqx8qbaLXsJkeMVMVaGyW6QdySvTE2T8UqEDHZNksXTvo2sXk4UfhDbHz1z8NXW1DNimxBQ3zWdecFbdWX2",
  "key19": "2BpP9J8WpexUoi2bGwGwVeyGHFRPwGvxzg2U77LRx7Zx5NdxXH6aoyJLcKQ8daLsqhZXwLz6RHA92LQZvQgeeUno",
  "key20": "Qfw2aEqrdVVApkz53oZqCYZmKWQtmnV4aTeGwjQPPCStRp3XtzBZP4mGBcNHQZzJkWifPHGrvaiQMb6ny6jLHp2",
  "key21": "U6ExSsffAp2149fxtDHHtmqTUf6E1TjQHvKCVMQ1FecbyoLSUDYUXC2iEnJmWbmfH9aLJsbPLjAjpmf5HTWo2aU",
  "key22": "3LhwFMgMDhAJm3Wd3CwN6iWcbsp44A9T2wUt9mer29LGbJBEXkTTEvF1ubSZkh7WXAxj3pDivtzvZRHxABUt7pGH",
  "key23": "2eWxaecBjmcnj8Z4TbuUbPU63u3LbR19PJ2hq4PjW5eVh7JauV1mnJS4JGW8x17tuc4dVuAmeZMiPg6vJCTFtRoh",
  "key24": "3RAqrKtzLfctCW52PYj7SfQuhSBcTdKMGGhRXfQDq9WTv7gTz19SXr7rCcCokLSfrEsmXBCHmwSEiLgdMzReVKnp",
  "key25": "38QM9cVSg3yEay9Z7Y8wnMK9uLCHUVX9PneEAew1Q6A8wdW4ngPRPKk8K4WjpgsB15nT3Z8C5ftoX4R6KXit5EAp",
  "key26": "3A5BaYjU4jjFwrseBxyAN8AhGENwgDjVoy4uHzKpntJtdAZfv1G53MSfuevQ3rQJgdfHG7x6y31yGACDdU6t7MEd",
  "key27": "3vYgv1meJmmqTTDjs7sQb6n87fZ2Frh6kfE3GH7u5mpvKDj9m7qMqrcbp6XG54XcZFwUwx4JBd7CG7jiDfLZFoJ6",
  "key28": "2TpvAfEhWD6wmfv4TcqysxFWpRUUVVAgmQX2XEneXF1wkn4nadQvNy9ifpciCkR96wDFXAKq5LAqy49T63krVx4B",
  "key29": "2PCYHMpNZC4baDekHRBTi8PrMQHkdrufE21pUnBqeo5T1usKySU7JFgvoQPso3L1fdYiFW5CEaG4PJQsq4wL48Bw",
  "key30": "RK6f2UJ2cU4maUU8Z2HooS8d7TS1NshF4siL85MHaj4mYDbJH54ZgKytGCV6L7XQj8AervYy12EZTSQFJiRHjZo",
  "key31": "aYEQQk4kAp117GiA6dBocEhtihhnsUZmEyz2X5MpFPme8U7bAG1wDiXeN9KNVPBvKAWBBor2xqBqkCZgN4WKShn",
  "key32": "4g9cWa3e2ngVhvunpAdHJsrSqWxcurx8KhAjq5EDPx1TgQYy1QVoaRyGJSFzmSh8heN9uzBcrTT9ZmVJytTC1nSY",
  "key33": "5F18y6XFdk2kC4e7XVEVnSpZyMvzJBpMEpnY75WEU5UfKxBpppEyeqpkKLaLXgJW9SRCwRFGCgNMay7Vp3dhYQ5Z"
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
