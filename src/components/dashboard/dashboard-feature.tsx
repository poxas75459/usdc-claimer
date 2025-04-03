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
    "5priq5RtiFZhG24Ab119ga3grbthYZADqyJE5Pm7mz8urPNCq8HWgrdpgGvPRyKGiXZhnQH3argyeAd9i2ShxzXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z31djTe91MANbH3T8bixMqNN1GBFrFDHQoEKf6fQPR7ZbY5auBBCkWu6wFP2qAhdpnDqhg5RFnRDiBk3ATGa89n",
  "key1": "2BF7A4vMDDkQBsnHWDw2m38fWKz4CszJHzUkhCa5e2UGA71Q3xQBfXtN4gThRCS9mcsmd5hs7takEi8tUuMxALX1",
  "key2": "4wcmUGFdn6uaJV7QDb8K1mRvfDJQutYzjFxV3BtCzkNz23BaTsTTKuRTm9xAAnAjSmS4FyfBgQjMbbqDxN5m78Ap",
  "key3": "sr2tZY6gakeKYWE2dGsMsnEdzzBWc2xq3JXVUKKTrLC8uh6Luxmw8VmHpmzD8Udy9DBk3XbjKbfSmdhR1SLNVWf",
  "key4": "4Drn4VcbcjRwvJ3DKjhUNKaEkYju2Ks2yEn4VhV4UNTBKjjqbrcd3ZwX2iuCybNkU7gYSqdykhuZCzCjX5GtBY1B",
  "key5": "2SXMZsqY7NnS5fDuDRYo6u6nwCSMpE6653SBZb6RCxF9wuFnWkZqxnQiL2fJLwkzoX2njwCfbfxn8Mwz7gqBwSSC",
  "key6": "5pnFYvRaKcinfQhakC9MjRrGpefF74rf4YYxM8jqxXKvKrU16VB5HGCU82ZsEeKHRAyPAupNFNc2J2ziLuP3QdGC",
  "key7": "5k7nZm9nicaphmt3nqLdDxsaqDKKeUUDwS85P3f6kKcsdCVb7nFVyn6ovwsm9Sp67RoBTWtW1ygXZxqCFyfcuUoG",
  "key8": "65gYzHvNG2Y1MQdoK89WGun5RxfcT8b9SwmSLxbYo5J88s4vb4rUYUtduMcdVuDoWMX4SCFWiNTn7wvX1Z3PRmq8",
  "key9": "2aLouuQygAaPPFbvAKkkkM2zyRrWUMgdivi8SQWaSuun9BmzwSqXodSRRA9V1LeowcX3bePg3hCpGyGES3kw1FLR",
  "key10": "5vms18YMjSQbbA8C9yFMxJJSGAyaRDXUBbnUT27ACb8QNv6A6bkutmk14iiwXMy5kdkNSLnMDnQBRW3N25KdU1Um",
  "key11": "5t8me9CMZYpidVhG9kBXxSZZo8o4oazA7mHGQWSE8AKWEgqiURz6ygmVqPSFpkskHAEowdWHT6cfXHTMkjv6w6jt",
  "key12": "2uThoxqHw5ZL8TLJ4YhRpiJaojJL1aEFrmoimz4afhH9rCVso77Jfc7ENJ85FFeck9pG1hGxEXj3TjXtEM26dtwr",
  "key13": "2su4ZuzE2CDV3DXnmT2emqAmHPQSeSAjRWaUvNytZqKSEsnWowb3d3Js4cnKxoe1KANf7QmaBLDiNLPy7JJq2Udi",
  "key14": "bfAC4g4Kn4TDLNko1eemvb69Yf8qx4ycWZPfpcZK5xJG7AsaPVdgUPmt8aWxBBy7c6j1EDdyjXumb8yB6q4d8NZ",
  "key15": "f5ze8ou16qVrKZSjCiW6rYGuxiayEjNuo8C5hJrtvo9hz1eDEfZHfwLfvrzkEmSdkb6vACku3AAdnM38NEvxa8U",
  "key16": "4ykKmS1Gr82e7n1bQLFNi69WTCPYbothwYcv7Zx7U6pijUdiWV8DmF5cD1sa4phDAYC1SQEUtW7VkfBCbdkhM8qW",
  "key17": "42MDonQ9YrKbsQ91Jo1E6Z53ErMjR2ni5dZFjRLPgXZepg7ZKg1P3qcdfHiYF6fjrWMTsXp2Lg5TWZ579VqHEYfy",
  "key18": "37MAczCCxNcGAqnLUtRkoMg9tVVGAuqQeJFvuuZ9qGQFTvcrHu6o9gTHjmfeZsyLLXcNXgxE4Vs35CnkZkcqii7E",
  "key19": "2KTdUTSPTVh3zZqhGAVke14z4KKEVtTB7oQENy3eboxNJZqirohupwae7UucLgD78P4coPKJrvwyXREgP5NssfMv",
  "key20": "5MMCuh5jjNb1A5nFJtdbgcrbSsCa6xzrmthneafHRWGsDMANKbDN9RrGW9sTsBUmrR2iUmAxngcNYHKxs2ttBqzE",
  "key21": "4UxgKWu5wXZLxHcKaXqiaBK623dAcSbRqEdSeT1kwe2o1P2f1hKT7FNqeMwoLSL17qT29HKS8yU4efqnW8ziEwS9",
  "key22": "4p6cnqkduBidu5P2uPbzgjPueVn9GjMbYjF3bFQTL5jAdbv88LE8puL2whtvshVSkiyLka3kvXYri58KjWSHfg4f",
  "key23": "3Go3K9vGEhFxexNJLwGfVhLUFPKr5dCMgW7XXDBEdnCc3xSo1FsuMaCX1cpKQpqu6MuWpptb64C5BoMe7K8hxdLa",
  "key24": "2MBfgzpejAKvbZt9hGLBGii3rqTuWNH7RJZysqq2P59pwuiMMoi2RFXCCEoXKdnAmjLWVfsewQJhsUexXR42YaMZ",
  "key25": "3X2WAa7du82QxBETkMfcDB4iTBS3Xkchy7ULaZcUM4z2outhc19FiLbFN1T7VvgsWcXEN8MvMy39bHzKCvwSjgSc",
  "key26": "2rffiRNcx7vYPcxvb8TpJyM7j5jBNvqeVT5GRnRsinmFbaDd6bFgdCPQPpv2BwqWVJjywaAnDdazY3f7chZs7BXT",
  "key27": "ng5NPaQ9SJMsNpCGgHXZwwY7TxULxq1LtVyAAdfrAr5ckBRBjTog2LooVN5wT6oaqxA8eLRzeYU9b1FwkKSdv97",
  "key28": "4XNRWEc1aLjYq7VWfzGFp4QeZwB15Eq5Hby8ZF6Ao5mWE7W4cRXBC9vtsnEg9BuLhxHxTd3vfjMCkQtzzqSukqWX"
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
