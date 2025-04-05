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
    "2wFpn8GCYeKTt4aiZMKKGKDaEnzg9A3SKSqJHBUZN63pL5Nh2TNAjXdeUuKXyqMEbBaPtxfM2AzqFXDqY1C5EYRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nWTNSZvyuhvQJFTYRdYfqZP1o3tej6rqGLhKjV7Lm3gixXQnZNoZ7fZ7Ewo9tnhTRYtH2ES337hYzvKt2iULupN",
  "key1": "2m8VSZiakKCzaF2RLpxFwjdHHEBTJhStTKiiMc8GkULoT771B7RH2GTwrbFBs9tmfzTWdw7SeBhoqfAMVVadPv9D",
  "key2": "5PjaunVmeeFY954vniH2mbjvoArKsBVBFJy7gM2DUC3gfxCg9p5yUdjq6ruZS1aYW4yjysRxx5e6aYTwxmbtHWnY",
  "key3": "5kND2cySUYAwYhoSXGJQ2zHvBJyK69Kzrq8ccCcPLK7SyrvDQ2cnbbzMVRnEz3HCNa8dYjMm6Gdff97PqpJ9tpSS",
  "key4": "4xoSsf5z9WG6HqbzwxzZZSLxDddXXcuVxMthBNhZ18pTJ28td9KpKgTxepmiQjfR4FtXzP8uSMTFvD9fkH8wGU77",
  "key5": "37TnA4adWf1G97UAkxJANo3vfsWDbGANgQCQ2pqjzL4UL5hGPtFzZzVTy3fc6LjARZEfmfqpss1VSQyWyPd1d3BY",
  "key6": "54RAfh3yAaqe9hZoNLQ6frRER83MEXS4LwhG8MmbmEVzLEyvBZsSwEg5zkcTccBLyRYoHX7epXZrS5G45eJ2Tkw3",
  "key7": "5yPoioxLTN2JqejGKCBV2zgGozV2ZvMqeoPF6HfcnPLwhNje9wY7TQDE5dnvGmFKTMsD2RwXnk3sMX4utF4Hvjkb",
  "key8": "491JmkdAWaGsoVMuaMuh3nkxtHY2oSTndNC4qsAmss821QwTDyj9KJrWLkpjtchobeGTrGa3TcnhgupmWHgTaDJy",
  "key9": "3rZLXZ7fXnv2aBdRsnLgWBqqpqQynT5vC1qb7gEna7mXbPYHuXXHtfLRuQ6Ph5GXo5jj1Z1nuh1FrtPEY3FJ9sQK",
  "key10": "3ZyxUz9mwifgrZVxdnjQyd6RjmA5voEftZhAYqcUjpkCyrdQuuCMxJdf1XzvDgoWVGVQhgmv6DLBEUfP82YP7oPX",
  "key11": "4ipge916Sk7EgXgpRji1KPkRQgTSfLaimAHBEHc7KG6ZCAfucCnzmbh9yoPbnC2FHWKWoVr6Gbg2tYufBZCct2S1",
  "key12": "VHfxuRwGaazpPZvQmK3NBa7GaNsDp8pc7TD5qzuX3oxskctDBHMSBXGjAh8MEc4zibHt6M9dJWLbwoF7cBsiDS4",
  "key13": "67DqRgefy9RuEJnCT2DicTDowwcq5jV1RF6r8VtzKNdnTpdnR9khTYqbnq5DLj6uAB66VSgBhUnhkJuaroLkhj7B",
  "key14": "3A92HHz6Mc6CZxHFecRNrnjnewCoJjXTK3HBn1KJ6AhY3khPJhWU1XQRmtqdYvHB5Yd1fgj5Kim6LPvHsT5Wfij3",
  "key15": "3rZF18W2BwJUYSW8Q9pTFbMEzunJykVuABB8TR5XkB5tNTLdb5SCzqVjNkbJT2uWVwyPLDot9hpU1qZpRqKLzhy4",
  "key16": "EAP7eXsnoH9f7TLyzZHS2Z32CxqBMqafh9XwnB5AgX9UZzo1jzCxhGccEqSTbpZnXxvpVV3be8GuekZQ2wjTjav",
  "key17": "2vz5C1LNxj1jt9fuuLA2Q1K8nQMCnmPqJuyH5ucGbmoZ2D2NZ5Ad4Y1UvnEVMFwoCWRBNeFCsjPYr8NpDFnKtePq",
  "key18": "4BoMKbdFqi9rgbbAQheJMXHoeJJfBjZcAVWn7JAPQbym8cb1Qpyv6RJ2pZZuHqQTHB9tY3D2RKmewApk1bbsKjVu",
  "key19": "4HHzQDgjJrXhn4UCXVWLCugnU46FKQEs1zVjrMQGrVkxuW4PZCQwmWPd94qygaT3cNMt7wNrcEgzsPQ95aSgUnCZ",
  "key20": "3tFx19YbNSXVQYSZa14TwSABMxLuUuMwdBqmFVFpU5vKuZAKbdb2z6nA1qU8uQT66oJdnA6PuZxGcVGecmmaRHnH",
  "key21": "3ha1py4YibJksXFQqjyriBz72rNDojDAKQPQnicY6wEBt8SiFHK6eZrMBudtNAbFX9qEZrUVQJqGMMPDg9XFCphq",
  "key22": "qbwyK2ES5d6WJFvvRUJ8iBYs59HumUE8PPV5o6o6znXJWiYsXiGBCcVcg9pvrWsFccE9nbsN3GYrb82fPDtPu11",
  "key23": "3Uqnc2RD9X2ieS8PNWkkpCmKqiRZdYnmAT1APV9Tq4wjJnCWT2r3YKWDDf4YAKxT5wLC7V4J52V1JT7FR5waoHUz",
  "key24": "2hGEho6LhXHHEGCs3MP97HVHCev3WT2jTfermo1tZ35xEUkeoSMh1U7mm3tChfVSVVvmSKKsmxAQ8NrihwNirdyP",
  "key25": "3fchTeTrRUVsTWH7PJwqMMfdbfqeM4E2oNRhJor4REPkPqr8crYZ9XZK78VJxkP7jydUATELCLht89svZkZb4BVB",
  "key26": "4RWaQP4zJ1G3pQR8moZ2ptyXCHrgzTKwF8aYd4nAxmEkYKq4yEg7PhRfutv4sT3aAWzsyabn4uEV2Yc6NSos3Ma2",
  "key27": "3JZSWjpDtgfutJ3ZcLVAePFkLhK4WnmB5ZxUWenj2BoLtY77ZznHRm5dHHFx4DpZa7NEvH6nB1JRfuNYCtaFAwrS",
  "key28": "4CfGEnrGHhqLE2TMkEMnzGnArndBXeQEpgV1sLPXCD1ZjxMZxSboP8aYkJp6o3P1xJjJhiPD2nsxChwevfW1W4F8",
  "key29": "5uT2rkMKgx17Ni558RRGnfxmwfsLoRAsDT52m2r5NabTyWu6Enf9afnUBBttUUHKkc6N1bGbJCEhkWvqz2y7EJT",
  "key30": "2WY8azqhrYBRrnyAAhr3sKK7j37pmPTefLwS4yrPPqQ35caFZhUwz8wQy9cSj4t1xrGEc3PPmRWZZdiMXdNNf8JJ"
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
