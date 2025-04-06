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
    "2AHnb3CPuyR7h7mBphSgi1tGneSBWYLqRPW1KB17SX4nPNxxnevfawAiKyDRfftFQzTXjS5n77nFPMa2uRnreKyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gX3GMq66mUgDaqgoiyhvZor9JmaZmx84VmD6ukSy6Px7v9jrcjc9K3KcdjRMtt479cX3hsEioa4dhrN1EVVrFVw",
  "key1": "2LMjRSBF6rv3pB34zjoZRUuwFd42Qjhsi27FY1GTWV3cY2oc6DxFsCUCmUk5whbiNjr4LBG9NWQPz86oDinK3kr5",
  "key2": "2bJKhfbpkBvdoXrXhU53gCmMsrtTCfarB8UoYAAV2qugeUrT5J3JJLa3mYAbLC2tN1gJaeX9Ww2zPSF7M8SjdouU",
  "key3": "NfFNYFVRgyv9n4QB1ATYvH15yiZWKd9tU5j94S8KCZjpLUVbKX4ThtrfyANbMrLDDVjtNMDaBH5BWpCayW2hpYK",
  "key4": "34sHdw6nqUd3XCiK1zF1GUcYhJZfZg8UkVAL7mtEfmyBa6PtTPPppNywN4drfEsVVFMFj5LS8V1f1qL3jWHp4EKB",
  "key5": "dc97WJnuRfeTBhucwwAC574v9q5HmLbV2tPnFfUixxLxLdaeYwkGHUZf1s6d72xL35D3ReTWaBJpKvzuynqwqgK",
  "key6": "oYPa2QRnosMdhcRJW58tGda5t3GxmbKomsHrB3wU2MGvLQ91weAnEf5BVqGV8qPGBbUfbMS5koMzJTZjJBhsJ5W",
  "key7": "65aJiq2s4tjJ84JfN5YA5HFQudNudq9Ex76D9WRwmwdCjXfFY71kbjq7kTkAApUgJX3f5o5hYxucx7eg36dbTd8H",
  "key8": "CUh5Etb3EGuvq9DR9Y6RqbroFXuQfgv9gLwue1ZyJHffZt1BvW3gP54zvxgvTDjtEc6AJa68osw8RP55RyUzkDG",
  "key9": "4JApzRHfz8p2Xon1i6UvRZ6sAgBKvFDgnkU9DR3gTBEpYqm48KURR8Htwf8NWGXABbZhafopRXttYcmWgwXW2NE8",
  "key10": "3goftNLSr3MzmX6neMjPLd4EPwzZbst22T6kbJGLFfbtjPo4bCtfexhp2HG1RdumtpUoNdH9DmEJNAB4kjSExCBD",
  "key11": "36iYjwMKX2FKieC4rzhY2uyfTfbSozwCQi8U2hz73Bj4CnRngU25nt7HJfFXVQ67yv1pWwdfNbn2CSk83SswwAQu",
  "key12": "4YWFhcPd9jJvnHD5oc1vcrcV8a5fjqrG5UhJEhDeuvmjL5Ret9xHdjLXryFLnKGtMnuEkRh8TDfn6hxDXh9FS6eN",
  "key13": "hQugJdAW5eUXY1bjjtaNcRBu9EyNDzht1wBnnD34SDQ5TmEL53ststnQ717zSJTg95RtsGAtLNFMYv9c9ZL1wuw",
  "key14": "3vYLB4UUsT3NeUAVESZWMBSRQFwBjK7m4apCUvwj6P15S77t2LsoNz35skuFoaUPVyL36EJiLePcMCkaAWKJyqfh",
  "key15": "2NQPemjcqNDq8hYeafhTNciFLFVGKhvQEwbyrJQCxddpv2RoJ43WJHUzsvduvzJJqa9zHn2qDW5V75Bh5gVVaw6z",
  "key16": "5nHEawdu9kL3Q67sxfWcWSaqP4v7f2mhxfGW8KwZCF4caaAtkhkBGYZTDajyokLJASu2mPrdene7TemVwjzNv23z",
  "key17": "hJBWpDAx6Body2doMNYDcvuMVMsN9DpV47XRMJih6bqqjHuJdHNbL4stU332zLtpQjqU9XmRzL4Qjo9kKeVDG5r",
  "key18": "3Rovdzj8Pxb2q6RWeZYBPg6QPnvgDmL4e7YmoVuRG3hDtiFJ8Ppa2MVYH5JxAJji48BGD2Wdvn2tTniB5P8iBBwy",
  "key19": "S6y2sJL23yBj1Kr6ZLThtP9jQ4HNNZV9zH32XazWYcjfJBY8mHrRWdNm7CDKMGKQrcJ3sov3ytSuPhkcKxKmEgx",
  "key20": "vzwhcqoaFVE34tY6moyFjFUfkUcQZ5u5fwUppRVAEQswopTcidjhBau756Qwozx5dtT9PY55n7YSzpPuJEsdZhQ",
  "key21": "3fi2ZKy7vFEGWHkf8inJs8bZZ15rPsNPk6MyuNeNM8yZKDB5qdsxNjpQt32DeRQckwCru76thUUxAz9xRfuxY5S",
  "key22": "4sSrqEfPVmbYj5TC4Vc4ujhCV8t8JX4HKawva8z9ww6zwA1KJ7ZM71iZgZg89vehpoA5wNJY2TpHnP2mzwbx8Hpm",
  "key23": "4XXRpa41uHLSfoaY27PJh5PXS4VTGeqtZz84Ybqruh9g5LVnWNkw591uhPXKy5ErhZXEF4YeyWBwGFHsWEDxjqnd",
  "key24": "577yzpVnpZeTDoD3ZRMVDa1o95YyhRhQ9fgGeTSvjiF4sn5rfd2zRjrBH6R2m3FaAgZT7n51Wpv5p6VCMW9MQb3o",
  "key25": "3qT3Egc4WdQXNowyV3381yEK63qycJ7W33hvUENwHwL26i1yptHxjfFPj9BtS1NKqE3Nm7f9UGFQxnjHqNtPqAjU",
  "key26": "5Amed4ipBf6jx8bF8zDu1Zx9wcNLfy38fKg7HypWb62WUnxxNGRHr4G1xw5G4wj7uMUotEqtnj3CEZYsfPvbqkW",
  "key27": "5zzKhVLpgypcqefr6h1tUB29qxGyLKV9df6cvqVPch4gtUypbD17eMUmsnsMLo5f2FuyVhi131pquTqNk7EgD9n2",
  "key28": "zFXz6Hn7aUbV1epY9nqyhvHAoRfgpGPfrx5d7n3d5qHfAD1o7QwyfXskdGSsG81sr2qRdFTKNRVJrkXm3ibQbhM",
  "key29": "2DwMHRvy4ePARmyzxzotA37tphU4f26VFd6otxTismngoo5qiTQRWZAXaxXmwjdXhi1nhdBarRpLWFg1FohSR343",
  "key30": "2f9mU9cfVgoBzG5K7v4RRRvP6togo57zdpq2WpEBpGtWhuvMbvEGAF5tbMXR6PuxTxWJy4JrT2BxsEUCQzwV4Fay",
  "key31": "2kdda4kKWmM3794jKwYCYMqjszA664UjPzmnbdhtFoWoYB6CttPX6NaxHDBbrMVpTdSizYkCdPZGPt3gPX22BfQf",
  "key32": "6GWcBtyju9cDvvycAacEVB3yT8oRE2DhJGecwHQ4M83TVQzarC1EnBfrHCFJ6goVm9LbABEjXx9cKH27Q84FVLY",
  "key33": "4Et5S2G2BU1siyDzzZhAReNubpV4Dh4s4FRSST8yEb6tNMtAX1nGmxd7h4HTpuCRSQ8seG63UtRSGhrzvcK2nKGi",
  "key34": "3H8z7VKN7TE2rt3yroegdcX8rxZZFogTeYt7QbYrMEfPBn5vpHsZvCLTk9ZXeMjtf6U5oyrPmCMMUfKTKkU4ftsL",
  "key35": "4Uk3VSMmXRB3wmAwNXzVMeV2tjoGftYcyVzMmc4jRFhY246Ug91pZXMXMnzhae71k72RhWmXg444WcBXaAowb6EK",
  "key36": "43rbEmvMd3wPwVuNdceKnzYoS1nD2z7gj2S15jL5FeePRMjiJu7gLDRvkNjFUKKqj7KpZzchW3hhQqW7hp8EQnTf",
  "key37": "zrBbK6C21qPFfvhSqwe4CSKzhpRPNKVnyZ3DapnsppZYWCBLCzbNCowHy4EUSYHPZHogeyj8ie5cT6Bh6Uq5wFP"
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
