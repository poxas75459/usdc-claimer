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
    "343GeodMZMCSNf6tH9ybQeYf4fN4xoMcPdeeLsyBg5G6kbEGhk7UFm9tvSEDppmeodMhjYXAhshZG9Z9rWN9vSXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KvYYmRFd98z8NBE9qFBKx97SvNQhymhqncd2ajDDLutgtUyTmNY8b2ajWNegPDR5mV3huXh6GbGm5TEeoQNFFbk",
  "key1": "66tAwsZ3ArQn3yBHudxbsSVWzTrJxE72RvEDJhY9xMmBumog6T6aiqExMBGRy8oTHHx9g1ujyZkJd1P83dHLk5q2",
  "key2": "2fuFrjmQQMxYfmtCqRx6UV7LYiX9gMvFQpKasJ1gCQTg5mr57quaXhY8J3xr6eLGmQB5AHhPky2a796LzjZED6d7",
  "key3": "3foFE6MhTw2z4jugoMYTF2DMCCwKRx5Qx9GJJyJ4938Se9NAW7m4j92w2nEFuJwwtXkHxPBZyV5HjFYWQum2FMk6",
  "key4": "2gzaUbHeuw2YAEZ9UhSFTCrhJ4uDHkjmKpD4DvDWren1psCXUj3KnYWvzcFoM3zBP118Hei8tWvGuqpP4pr2dVWU",
  "key5": "sG1UZrkedjLXRdoMFTd6WLCKjWNcP26WwQW9ARkBtyGbBMPj3v9PGBZQs9CmM4ypga8ekiHzJv3JK9GKfNHTXBw",
  "key6": "2fagbkzt1pT2WtcDVjeVjcPmyf3DrvwidY2WtpVUtFg61deUQU1a1HVaN4ZBAL4sH6EEP8HEsUCG8c6SnkePToEM",
  "key7": "5U1rUjXGSpnDEWaCRikhih8EH16o7YvBNL4a1VCwHq33iFXeotrt98xnXf9QGEGefMgivhxwzSvCgTFE71wi7Qir",
  "key8": "3i8zHewkpkYHhbp1kbHu4BHd3SUyWik1AZ51U8ZyqwqP3MR2utZ9uwePxS5X8Fd59un49BnAvqpJB3cHsGrM1ZtL",
  "key9": "5bs9XeuyhCtbypchYgC7BYXuEJfpFrTJtwpqMMAJBb7d7QgPdnkuAM8A34pk2SXBWwMXmgTnKczGq3PizJNv2mFX",
  "key10": "4zEXA5j3NBSp1e7cJ9QkVUyAKNKoaLx6a28J8hkE1N7b2t4wGufTshuTUyxJWPXAxeSyoEydgbw7SYhS8nAAAesZ",
  "key11": "4hcAh9SAbVEf6N6sAdfZRyREmfSTqKdXifJ8Yc6Gunq22tGmrQivtJSYWC1tSAJA6xDMWD3yZx93pQmySjFXtkXL",
  "key12": "4wz2wcXECSBsn527mbHuxFhhs1YDUYZLWp9ZxwJFKWmxn2ZL2uXgRVFLBvG6mTJmshtGek18JLxJCNL2Xar3qRCj",
  "key13": "FnKtHXzD5gTa1mEZ34EJWze59bDd5GK95tPPYpHa6dKExStW59EmjwvRiLPjDFQBj3Fj872CfRraiYnefgrxLTL",
  "key14": "LhcSS21kMmGcRJeCyb7TKg5jrAGpBnALy1Hj4EDcVfQSAwz8Z5Feramnmk1somsyEj7C3GfAwHweULjkS7BnEYH",
  "key15": "49yUZVcBD7BMbW7MncGuvL6cFTAyXKD9PfbMKjpnhyoMJ5vpfk9knjr3CqYyQYTaPLneAP2CrxVPA5SNKRA6n9mM",
  "key16": "4gZUSVDY7Z4CaK7t6LbkWHcQ3uuuR6V392TCtHMZ4gAsVhEuo6ztVuKKZamJSK7AeHJC47qWQrbWJh9cdGjSm6p5",
  "key17": "JPy3yvBgX1sw3hSvgGVT6b3BnwtAit98Vszdnqxe5x7QVxXjnPxR5Jc1F3Zdf8SuBkJr98iu775jjRDEc5DZaJV",
  "key18": "4vLNPk3jhT1FiKfpcYwVfpaKLXkHWJ7tQMCUTBcefDnGqL8YU1U8jjPuSQJu9ZJVRCXqoAyGbJa9juS6pZj2Cf29",
  "key19": "1S4arF7RpZ3FjEWq9Hfm77Faje6ykQ87ZuURBqa9bpbfHNKYy6y9skv8krnZ4E5cXnSVuM3zgqRWjPrsRPYiKUm",
  "key20": "5JEbAuGwHeYryw4s4rs1k3ZbVv7KYYZtVAwUERWiVDXxntfonvvNuq45Kk62qAppK1kX2AMWMNVZR3v1Bs7KvUrc",
  "key21": "Le7svAe4FoeMafswRJ8zVFWKiZBMbYCWEqNc2CMoAYc7G7CnMBVxAmSS8ZsryMmmbwr915GEtih9ViqiRF7xMTo",
  "key22": "59RBXitK4CSFR9r77B2ravQGwzcSmbwdDLBHKBSdJ94fCpTcVv7f62vSYABcoA8MFDiQnEMuQyjJpNMN9ZG2JdRP",
  "key23": "4xR1QSSDntjV3kCx7x9oB2CQrfaMfiVtUM1oyT6BapaT8MTgeYywDXcMvMRzMXzkKVQ1QZvtLypRaAJQf1DppRFD",
  "key24": "JsX8EYhwvj1Vp8wH2oZyaAm1FjUAiVqDQza7x7R9zBXvtPGknC7AYNaZQ3WJqDhVFZLz4mHoQx3UPntEfRHAnx3",
  "key25": "4x4ojN3QfGTyCUqe7d7LPGP3VLXG7Xgqx9ULfMpA69HGE7SZqZd2GUmzwih5HFwER7kifefgqxzJ4uGQALSgiKUc",
  "key26": "3SNx83ZHzh6FDZVa1JADNDN6P1hZnCBYrHZ7bThWX4k2674YvJpSfuQUxjPdQzAVXwW7UeK3kfw9oQ7WeS1rcN2Y",
  "key27": "29RHcrmL2vmSajL9rYnrdvh6ZVduNvmWCm1FhtwkEtna9Zk94Y1Czk2VNgXaZUXqjzgeZLC7pKrgyBNuwiKcBSju",
  "key28": "4sRdPRQEVVTuMRDRZ7vx7Tva4gJc7AEc2MW2Q9n1M4ET2Ypj9vaVZvYMtniHKFmnnwtwSwG3UMxg7oUhhRTUbA7",
  "key29": "2QY229JR6wwAQzBzvvXnjfen6Cbpxio6aATf8Bbi3BGaybCkR9ZFN478JWXeBC9tcc9LSpwiUC4eEL5BBxuAhmQ7",
  "key30": "3uqRSnDs6BTdc3knC3DzaMWwry5DjyCWX5tnw6gNTm2jf1rSmDKtJcSG8Vh74b3fq2votQSoCHsssQhM7mx7R33r",
  "key31": "3ZrBnuzKe7cXjK1UWFZgX5bgpBnk4N8EsnSH418Nj6tJVmokXnKBkWBCbEKTwpaXFXZKKZzCKZoxWoQUEQEsKMRH",
  "key32": "4HuP19PuA3JFJBVEsD9VPfi8VCYcDfdvcHxUn3Edr7KgTJWSqfqrvbrNeNAajUmnHqhemHWp9m7aD84PKv5pgumw",
  "key33": "54HuvFAzHRheRbCxU1i8SZPzU5DKeaaqk89RGavcgsDT3HfDSmre9SwZqdK1kkPWjC79vRHjp22neYxAQkYrLr5M",
  "key34": "TiN849HdgvNvTxpKpquUBRTSVUwvLhmkKCjad6D5YMxjuapwPTsiYr24np8RjWueiYDnnr2maL538zd7Jxsphns",
  "key35": "2411NTYrM5rhQ8XPPqjHVRwqSToyyrggS5ZxCWX9nctmNuAD5rEXcBxjtXFaKCSD7Dnahe5ZYScXB6qbebCMfPF1",
  "key36": "4LpDBNu2WepXhhNe5iVQRzex2CR8nRCavPWdr9a4eJXzxrwLmmZ1ngkvKqZJ7QC6bBeNjzSbfPhENAdNZJVCEko",
  "key37": "31JNQL2AedmpjonhRjV5ziWeKPGA23hNBQCADL7FSLZLZdsaUU3QuGdUSgVrJjJBoVmjq85zuExJy7Uo6mRwnyq4"
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
