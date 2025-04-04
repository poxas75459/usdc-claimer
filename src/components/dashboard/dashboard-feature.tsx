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
    "2hNuXwmbsbPbHkBsexiskzLisVSbGpUrF58aXt7yVYiKCTEgrKVBbDUsm4chMSmeDqu4vn9p9Legpg3dgKzrR9gU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BXNGrSmj14dwSCAcVNQipFAnGwmz9xEwfMywyh6WXpoLxx3GWaUbEVc8CWNxamcEtq9frjUBZcsDyetbkt93cyZ",
  "key1": "5Gb1u1RyTPgubfC7Wmh4BEse27kxYTN44hvYNafJn3LYTDukoVQ9J7Fi4MGADshXkW2jBemDT7ee26v4Mzv7pssC",
  "key2": "3XJG4zyAPZ1sJHWWVvHSRB6AWb3G7VF6RMBL6zhu7qAURqT49LS5SCfKNDT6gKHCfxdjovWo9wuncUZxKe8zRXWt",
  "key3": "2uejtL6N1vvGQzUDSTEhK9ckgtYXYRuYhXRANXVSyKb9NPRXQpoVRj9jgrhdpaboiw1SrngSVN9UEaaFS5SMrRML",
  "key4": "5mzDgtc6PvvmjXLYnMEKPvDtJVjtCeFtfkz1BMeyLC5ZMXh5rwUX4TmEgBvzKmydbqXrE9JwLEpU4mSoyCU46h25",
  "key5": "4wqNViqoRiBP7gysPr9T5hzrvRd6EkEdJbAuo4GvWszezbGe1VFYpp8uSwkr2stMEFDqdz1iDK98J4Lzf1Y865Fm",
  "key6": "nRsMeu7hA6RAs9hNwa9UX9yKGo5BhVwXaufGyNBT6jtTaEVfYtE5AYcj5ygMcn8Pde3kpRWKCa1XBedzx7k6XtT",
  "key7": "5zWLJyfHWkrdd7dApuzHpND21omexKbugsdDa6nn86itLmHre6KNNjvb5F4Ao3xGdi9TkWvSfSRhin8hALZLFVHY",
  "key8": "5wdxkSVFPk8wLcJnMZj9R5FB2uCdUEkvkf3pFpSrDoj6ZTXRsQN66phfM5LU9U4YeehaEcJ2JPiR1c4XvEPRSk8E",
  "key9": "3VakxB99ZBAWmUyfVCSQUV3JugP4StmZ7crP6EebiMQddgnKRFLRxayYGu8boHjKVKQTHxV2GzJLCRM9R6Surzit",
  "key10": "66GivVYjrkAo7LsnW6uid7FtAYUYhHF3KKgcC5fnwbBEfMkDE2AhuFx9mvYAoRPk2trAx5N8GjZ1cZgHGgrBDFUi",
  "key11": "5UiVdViUZ3ioLHQZmwCUrCB7GeabL5KwNkChHEvWpA82uNx7YtFgTijXFA9LXKFHSu7GfLjrvFimQyZ67AXXeACv",
  "key12": "qKDrRTLZqy2pwdigUjeYqTSpjT53npPfnbJvwtmzQrjTeaic9MJrUqh1LC3AuwoPPwy5KRJKW3TvF5PF1RMYdDW",
  "key13": "3VzKV1E5aWpCXzqdiLisod1vs6ATFHXZvVyR1SLgRfa4kv4ZrWQiEHKDGPgrU6y3jDjw1YRqEBRTrtkHWfYe2cAX",
  "key14": "2GriGoz4GEarWgLozqZ4Z5sgUETjf5462jF417iy32nJo9NuHNL8rMW6o5DsKv9Aeeg4N7V2rn5DcFCBnT6VTDmr",
  "key15": "Yd3j9pxixMeC5aifc3cphzCJmERtzw1hK66n5cT2Z4odZxehMPcsnYgttbs4n7exyZLbrKrjwpieiyKXdjhEzxE",
  "key16": "4VYiVqdY7LiiRaypVMNG92i4NSmz4cJLuokN3GuNJqNL83tzAab5ay99asnTMQoTKX61b7YdcqGfybhpXmvzj1Zn",
  "key17": "4Rx5Z9BPg8rjGXH3KqcjuEXA4bTfv4dRmmTwU8zFPhrFNDqbLQXUGbXEhEB9SfVjYH8KyDfiah4kk413ZaHEdMUA",
  "key18": "fZEUg2F8dnvgUQ2jm27Rw5cafwSk8kQ1VHbUvvXnva8Jc7r1Ho8GjMzMBiwz8wSbLG6CV3HvZGAP2udvzLQuWLa",
  "key19": "4wPYRUrJbNZ5jXeaSCMpnVLJU57y1Vb4H2g85gM4hptTizSmR4K2x7aFPYEb4VncogiByB2hKkfab8TqEfmPnA9w",
  "key20": "3yy26F2tKZFs9CCpEqHXbsi9iQXneGSDJ9WMHaZ8BtaMS7UbeFvNLp4FJ8GCBuWCVjc4tdiXWUisgTaFjqG9G4T8",
  "key21": "2FGqn7kfARNgtG4nACpikn7KWZkUdcyMw7z9WKgE3L4rynQ2QEuAWvstRfykSENQc3Vr9muDKrx9WgN7pnvGzAAA",
  "key22": "63QqSMs6e75HotiZ7Vnuv6jFgmwAhKUDxot6aWULjQnXhcqwTynp79YyRGedF4sb2UFRMJgJvcp1M7QuLQbM5zJ5",
  "key23": "XzGWS9v9xPdE4mZnzqaHGkExDxqu4ygDuz72koMwypEdXeES58417Dq5rpJru9g1C3JsMqtE714KGjZt7cnz3KG",
  "key24": "3mZH1bvDsStYs3o1XuPGAnaEiTNHnUF2Yza1k56sXtXWAzse1h7Lv6L2X7ENMCbDDZ82VX4FYiQXgEffuZqgLrJX",
  "key25": "JfhR9e26EcGKtqW2AeAti7sQt37D31uUwJef4BQ6wzhybGMUqot6vbNSLf8h6Jir1UjTN7VsdqceYDaMqU6xRN5",
  "key26": "5UCLRX5Q7vV59FSgB3vq64LXd3QZcTE5t4z6e5HJpatMo6fYRJEg48iwYiSY4DbNzyv4DuWsd3mUvh1PyUW6YhuV"
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
