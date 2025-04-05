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
    "352qwk7J9hgNZMowrsFEuQmgycCKTetvJpv9ejDJ1YnPgTrg2ZBEn8Qw3FKdMTuo1BWTa7cXXzFecUf3SBZRmuXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tRJqobxVre7z5VbNcFMFFD9YtDTEBuX45y6rumqsJ9aK5973pH9DgyhqHLumJRajAqJktGDxAHtTHaBQWnaMEX2",
  "key1": "5xdvWiVS4c579Kh6BQurqWQG6PZz1sCJ9qEmw8RQ632s4KeSswk65cUWwp7ZDYvUEY8VcaDcmS9Qt1Df8oyZwMaV",
  "key2": "34AkqgBkAZL6hA3bMv3y6ZixRZTB2yPUvo86TnzxqSXLkNX7jYgQPewkEEw2upVCmsazHey7CNjByDZ5EFGmDmwX",
  "key3": "7nLj8KbPda7sfkoMewU26SXSTjGksNiYaywvWcNw5ndMphWBLpduE27pxWJ2J6Yo5caR8J2PryAzHTNCFp3D9a8",
  "key4": "uopnjzQejF57nnAhBYvSegXQ23mHJo5Q62yvgKLEnWQT2juDGM6JSyYPkCtCSAjuu8h6pKFPpM5nwZbxBTFW1ZZ",
  "key5": "4Cm8CAaHTNrL3Si7K1WqbRbbGgmVt5jEftKmL8b5WTKKMvL2uGefBShKqAUQPpmahx8zp9x9nuPWx3mT1h88gJvu",
  "key6": "3ckEFyNSvaBJYsGTuE8URxHk59N7fFLs2WnexZzMY3VexuH7thngtYrVXC8hmDkso5j99ru6uf5MsZjmL3DJCpKL",
  "key7": "3jzcsvyuGkjJAYAt98rMonbnWtjkuAzkj4ijMhFy8eBXHkeU4FyW6L6AJzGKgoeSn6d5NYsC9vj7sBviidqUGZbF",
  "key8": "398g6u8zofqbUFwUEw2dewhBguQd1544TLcCLyowWYRLKc7aMv9Q2dfdokXKV97oY114dsa5whuMvaqQZnrDqcjo",
  "key9": "i62eWsUUUj41RZRoA1iZFaArjFSD1AAqEMQT6MeqgRwVU9qhmHYjEwT1WE7r5mCpsQ8QH61t1Re5mXkoR5R5my5",
  "key10": "2FJW4dbEW79mT2UUBpBYvTFeJf3MkcTSEkp89K8fwuboB3CixmQzvLtt6e5CLpeQHgj8VF8X5E1JyviFqicjH2AB",
  "key11": "2SMkTJmQPQBYd6XvSfufQqw5BDa3CLa1GMf7c8xmLcyAjxwLJQmgKM2Cg9QsdDt5pufiGMQcVYZj7utdmEzTaxKy",
  "key12": "42WQfjppSQCaTYp6mah2FAM9yU8k6k6s8Eqqe66vGcgRsxxjNT8ZscR3fkx5ApzB8WkBo7DBtmewfm1n9WefATJh",
  "key13": "TZbzRdHUMySEQ1LpR44fwGRxd6c8Xvidk4dCAjRrLQNG6Fr2Nk1xoWZTra8NyzHvuLxh9DQ9CD7gsmQdae4vDBm",
  "key14": "46EsgsFGW5m3cTxb1LkfEVtoaAXR5BfjmKTbN8Z98NaWzs6Zhcom2yUSaUryri2RPuqaAdWssXujtvKz13VUdL6i",
  "key15": "3hM9xpVpsogSuU4ovDoVC2auvikTBMXxb3v3kZNn4jtE1ChCwGhWgoPxHzzKqUPiuZfuy6Q23tpNWLJP2xVxiDSM",
  "key16": "sLh3MoKwU1QwH4f3scDKrd7pcYAmsLK9YWCpwogk3PnZJWXcReLkXwHEiB4CXoyv3GsCwjti5w8XivZDwikCZyd",
  "key17": "5NobYmZz7JGcMMZgwnoHMAPGsSRCeHVsmgef8po53cPW2NCNoqha2jxf6a3ArDK8Wnjm2sypwPDinM8Pp5D4fb5d",
  "key18": "2vbNnnB67pvBTDm1oCSQcsYD7aqDUEGR4gZqgM8tKGoEM4nZSdSoAoyZGVfmVkKWQFfodb1Ls2fbiN8pZ9DtvNJ9",
  "key19": "42xUvqgpEawZUw3hCVhSJ1MdRVQ8woGdfNmvKV16bVKXhoApbnavZ4k32v7JVMy9CAxDXxngb5aANL7A8eiKbUHB",
  "key20": "3VHvBpKwj42noWeyAUVFUP1fZig4ubYPGsmfRMMhL63NduXSxnS2NQDnjHrWfFD3DNzDz8wuVdXhKk47NaLwLACm",
  "key21": "BGN33TGN5zEei6kQCfg5rrQVF9hrboGLBS8Pfa2hucRLnkVUm6nV4GdL8S6HhySR5ddjVrsw7NHFbbUJ5HUrYVh",
  "key22": "3yyMVH1wYart9Sz7uRtuFbgqjz9HcmV6rVGUrjGXqaDd96sfcT4ua6eE6JPP5xesF1yBjEFwpqHhM8L8M8H5ZcZk",
  "key23": "4AMaCRZjXGFKDbyZTTHUY22rYtRdC9vir3xP9pS3s9iKMTd12Wy4F97G7yprRjYEa1cpQNaqF5h886eXJgGJhWXm",
  "key24": "2zxRiqZeDW766jCwMvvkuF8YSgnp769yxU3duigMkSS98GovGM9mts3BBJ6fQkQj18Ds2wZSTMVmUPup4uFVJRGS",
  "key25": "4TwT38KPMZSKMqcAHhwoGMYtMAsehfUvCbwac5yE8316XvrKvpzvzufdWGfAkCPLiZhSNhGtBBgZ95kY2g9Tsph2",
  "key26": "4hBoWr9LBbv8NJGjhV8gTJDQHn4XBCUZUTTghv3NYAwfNP8yePartYQTcDL3W9mjtsjoed3N4Ck2mcq2SenQBsx3",
  "key27": "5mJSQY1i1ZcuYg9JaTNeyeD5FNk2xNAypKpATEFyNhugVHdAzyFzCYjZDthgQmPbRykVkErF6uouBrMFqPiFWDtd",
  "key28": "4KykcQKGDKYg5REeKLaUV5C2SXHCoMZdNT4iV7QB5fDypCkhjiqnmKMUR6oeu8abGSBnzPkYHxXK45QADaeFJ7iB",
  "key29": "485fM1aMTtS34T3FhLG9jR9oscWZEFHRTFmvKrAApwQAkA4xmZpgSufZvfHGhcmvHumPnC87trFWRP5CVj72xUzc",
  "key30": "5K2qBtLaQJZEr1q1fwPMp7rdTogcdEDLKkbLHuyQYr6799ct857H7DceLmvAXub4TeqQ6iPECFsvfYRRKEHL5yKH",
  "key31": "2ozcKWB7y4zaoP6A7orMfH7QKQte9oEBX8oFGMkseyoJqGrZXzBFAeMygwvPeBfFDUrz8fGcSyFJDpzKocDfgNYM",
  "key32": "5Vsk19U4crnTZV6ER7yEAQfuyGSo3YVgGbgT4tSEAzFKz4oAmNHA7yQ3tCaHH9r5SbHPton9XL3zs61LLEEmeYNB",
  "key33": "4J2FpJDFjc9VtsV4mCcmgHKftrMAa1CZD7rWQRD3SrmLLV7xsKaxrBhbHKE2ATG2t76NXy4wkaPA6ki1vpTPpV3P",
  "key34": "5kgdwTYgsuyvPpEsCkGvHZeBMqP2iBuKdkti19Vyx7wq8XfZAzg5GGV4dciLH7JZmNjfzhTSiYCN2Lk5Tvihg4Lb",
  "key35": "3Gn9Jg1cB99mYguYWq53Qoy4AzGNLHfngghmbPU7VEYXLV8Mb5bhgtkqXDAMBNs1MwFpBazBZWR3eRumbzMBGv7C",
  "key36": "48ijfEGeJwt6WoXCR3m5uzmxSmEiKao8BewjUWDhmwj8qkVrH5R8PL8FPYFb4H6HqvsiM92LWALakqHL1cRd1v9F",
  "key37": "5KqwRmGFJSDpkzw5bruyjqnyY9N9gjfq7WbK9Bane2SZSmyF8yejDrTbzah5TAp1rbCT6oUr5oafCFBAs8otoaWp",
  "key38": "3Jm1oArycY1nTeFkBFrqtqjELwVRpBw83WTf8N928z8jdbjR85NFbfcSTU6YgbVmpqzGnmt16cC5wcbpsiMrTUe"
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
