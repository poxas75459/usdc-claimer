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
    "5LcR4pVLsVC9RXWVfWdvL4VAVwFECrKc5iSXHskQowTq1SebfgQe5go7wuDTidYGqbHYz9TFsKwA4tzKqJPfCJSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VJfZWJEjpvVYaVYD7gy5GFPTSJ1o6HDhKT4Y7bVGwMmbFMLQSo6Z1rRP6AYUP47gqyLBn84Yq52WyCXF3ctq2Jg",
  "key1": "pDTnVkkpV67Wg2kbBs8vavA5RBD8tnazpcJGqayjmA7Ew26KDc9Fs17uHBiAPmc7x3DBP9pX3kRYWv3QUAfgRxf",
  "key2": "5NSeUEghHyDwQA8VS4BZw3MBVV5WxhavpL3uCdCsVTk48dixZ274wk25DcitWSeVpUvf7VZUjYF3S1jgSbqbrHS5",
  "key3": "4mUn4ZyNoyQb6oSFyXPu2X85GtBUtptuF1oKnKBPFdbSKHtbBNHnYhXiCHrrjgYLN8xtu9MAUpJJNhZEiTn2hGfN",
  "key4": "378vFabf6GHss5pQL2zUNnDnmcXWYM3k3dxaEnABweoXRqgxMbftXGYmCMqpArajjqgVmMK3XV5cHNPqaPWUR5Ny",
  "key5": "4s4aSmmNGswepBY61uQPLXK7WgN6Yh9yLhkrMnhV5xEVJoptq7seSdEEnSnXyrpRYS8RHPkCs8nFHr6qhyuCLH8M",
  "key6": "4HJNaYqvkmLfYiZ7RJqJrTgY3sSbAPeHEN3tURAiyuYRYUxPDt1aiMGVxth4KxEZRvJ4WEhT3Fyr4eobEuKPiVx7",
  "key7": "4Sw7dw8Jcf4L3VjXxiYqjZb81N6qdrdBQU9m1RYmp1qXUrGVW6m1TuQ4q4JwBmBc3qeZtruMsaYamU4TDKWYrPKE",
  "key8": "PbF7sHR1tPmDkmUZSZj8xSds2ZhjmgU5bj2k9sT16AccKFJ1jBA5dfeMfzX2EGSCLkS6wW9Jj61CgSqfExU1mQG",
  "key9": "5gvkMX87zeuS6TuH9SYgurmN3x8ys8VnxVursBp3btj1isiKdzmEg3chmrRcdWo9xV4ufcg5pe5qkYSsKNrdyCHg",
  "key10": "fPQBorV6qcG7YqDetD9nh3DgkE6FouTbZz4BoAKZJ8EKNPSCoLgRJbYSPBJffXhk4wRMxMcdVx7TBrPvUoTxJUK",
  "key11": "VEYkGid1AxaJaWB1KiRa8yvHsEcYHVVX8MbitEjwk4LUqwBgHzepvW9p1o7qNMyYGBD1f3GkEPL16DcEbc3k4A2",
  "key12": "5vxo2pMJ2SbEQyknd6B5yfrVERVXE7M8WVKHXt32YSV16QTqz6qiXNkxLKoAVvMaGymp7F2tbCiF8KayhifKyAmi",
  "key13": "qEYvMzggVBg3in3jfx7517wBdLBqACdmTYujRkx3VUfSddsuUTHV4mgj9MBhn65QrrHq6WtMGTvVaWuCcnXQeJ6",
  "key14": "5HJetbqJmKB2ZFZMHf2VJ2HT4xpENyhvnj1PPPfhcXah45MbxVMuG92hWp28eUHSNzASfBiTtWKVPAUc25cZ2NZV",
  "key15": "2T3dN1swDCha9GSa8LgiimFJkNz36E9BAMa5HFwk7g6S1hGZjmbFjnZuuAVejNTadDcckcw4US6hYmyBr29ej2CX",
  "key16": "3XNDY6hHgBo9eLrtTx1oUqKTqFBCU4jPiVXKUkDeyYNWRASPrtH1MSytHmRQ5t4WCckAwwJWL4pGFyZkPkcLD4Qn",
  "key17": "3sJivU5r1PvC2dC5MR2C6frWzgHwZ2fkZVhXRuEpMQ8vdQUh9wruyBP27hDQVJ39YLZ5qELRVQGziW6d8yVyJZUd",
  "key18": "5JcMEFr8CA5rfuxkj2pe4nyrSDRAwXdiosM6Jm7R2Rbs32MrpDSU18HZ8bjsa7hnGopcWBF6yYaKmS5AkEdZGSx6",
  "key19": "2dqHmrJxgdGM7oSfB8AdmY8EZRb9TyqLxWSZMzRfEMFbm9VKJnDes3VpAX81jYN2Kz5QqKKGRzRCVcXBU4QShArn",
  "key20": "4p3krVdeWRkpqqLYYzU7esj4QH9DHjhfdKksZv6CbXLokpYKQgp6jeuRuSRk6A6ZxTYwSfy3Z4GiPLpGJ3HBbz1b",
  "key21": "4fR68rijsXGAgEeA7csV1nMX3hZXC37Wtv72k6YYLazXKjaptyGTPgiK7mNjSSn2FdtMGfTcP5zjjZbMmqmd6a2Q",
  "key22": "4pRAhgsYn4yLQoi4RneCvz1rdM9zK5SyKdrqMv41spJvWFaXcK2Xr3ngZ5gDgV5t5yzRCvacSPRL11zaqc6htncZ",
  "key23": "644ARTFvrgRi1w4EPXV4GRKJbWydGqKX4cwhUx4uTitxi94NMLMrwSfFxvh5zEGXEyjA1YQqeV9prMmjJgNPuq3b",
  "key24": "5GX5yF6QpLR45R85zbopXMWjc1pnnZwHck6dJDVrdruFDU18AKoUUb7MS56aw8ZMNSnrNCNrnLT7oYW2H5jv5iS",
  "key25": "3Wo2U7C5NkgrG2o3fdeuc37V3ThsRR96NedAcccJa4AvSVmMFbKBGA4vEr4DawG7wQQm68eJUMwbeSgELUwyobgk",
  "key26": "5nBxSgNUMsEwoL4XRsqV6J4WJTdMXCKoGLubk6WDnvFcBNb2CUiX8gRdqEz9Gte1Rg9d5aZd7BssLj38gUjLypu7",
  "key27": "3e3C1CRkncS7oVCJCHE73x5vmnxrHq1nYEeAibC16crT8db1FSNpQhWc2PdB1JgZbjnKMEYM7bd8VewcwXt5Y8ed"
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
