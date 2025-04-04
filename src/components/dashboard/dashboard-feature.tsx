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
    "3Fqayt17XN2omMg9jrhpwBsemuLYzf5492gMC6oWf83Fmqf9junG29aG7dNjNnhBAqm8cNvYo4g6qMrQyhzoBRYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MtrsxTfmDUmfSek4qJCLgjt1nbWMEfndvJ5bA4t7MEQNUed3XHcDFMzdmspEHVUDgg7Ti7WjmjT2NghRuxDvo65",
  "key1": "27nJReUXt64d2qKr3HNsgchZvUcQHmzu4axS84VVj1DMso2ok1PuuzDnZdPJi1cY9JbEgahmXnkXH4YP6Sbr5KYk",
  "key2": "3mobZ5R96mRGepgMbE1X7xNSWaXWfA2cPew7e6RkAEoptu6m2rpQxDc2yGqQ5qjm2Ajij3J3J6MugBfpEdk9UyVt",
  "key3": "yLTaoooivgpoLLCRF2QoEPTZYAqqSqqsMGbTjvryBQYePo43KqBmKXeWpKNoBkfcBjFvZPck79o3VapJJ9pBtRC",
  "key4": "5mFnnJatkrGGkGpuspME5B7H5A2HpPWkRXrBehnH4isbF1yoNMYtZY6NFNp7eouWN2rLmXjmWYxiDW8bhKoSMJ3v",
  "key5": "5Pq7MB18UYFfVY92UeAJ6edRKNKEcHcZSGPXMbk7Ymu55CuM1qc2Rub5ezY82YLqvW7nhZ9rAq3s5hcAFWXLZpde",
  "key6": "5YikyHMy4fyh4pRoNDscmm7qVLD7T2bvmxHjXYAHBFCNCMNzQZjS21EugWhHpcuePfqL2tq922AxtHz2N1dNvRQf",
  "key7": "4oQZyGZLrjUo8qvByqnjnB5HGhcRnQL9QozoHLsoWmM9xS3qTN3eNpJSY7Rc3qPN2X5ZJooT6hDyPSFx3RLFZnup",
  "key8": "4RoUchG2hpU6TKqAXQ8WbVgaMbGqnSigyBchYyxhzzUoMVd3VuJDzTUwW4o9PEreXwxpYfRZHjRJC9tpY2udti3v",
  "key9": "2xCy85aYyh8KWaVwFyedcALPv82jqkRpcVVksmJqvVFcRSGqjU9usbc545MfUGa93gqtvyieuEXkx5V4nayUokK1",
  "key10": "3o7Y6nUuH3DByPZyNgz9Q3VmYY2pdLWP9hmTrwoySNnwbv9bYcFgoqe9B2bR9F1ewy4SsTHvJH8BNvmG2Kvtyiu4",
  "key11": "3m4MFA36XUrJNVQJMEHfSPENqG8Wvsxc5qfod71as7vfhynA3na7PuCcTukVAoV4TyV5wRiiFoqQSFw4wft1Vuam",
  "key12": "fsynFY6sEF4nh6on2LrF1Stb78YVM3FBUvSxDkkxyovoRVkS7E3oT6ZbRFo8XCfCWJtRpkhxaLvFYn2So681dgd",
  "key13": "4uPvTbWjojHNenvcbDmwng8SokimyjvbS6yqcYRmE29tpeTUjSdUFYPPcdWGQJSBXSmG26qwE2kF3QHQz4tapPD7",
  "key14": "2wKuVSHcTrAXSGZ1nrun5y9Jfmw51Tn8qTsvFm3ay8fe9LRyTJDqF5gY9ifgFqunwbxvMFD8jiNC7a1RBM7DJCnP",
  "key15": "4w6XXMUPh1eQiwaNoXTLx6f1NFwfZouJTt4HrT1mDYDAfvwSSnF7eJoSCbXj3fNuGkWNVSNX9vUgtDEkbgTXZUph",
  "key16": "3ezdVHunTERaaG8eMSLaJLPQXbPEp1YyLXasDy8cBDaLec6QZSzzVNK66iYctaWk2N79nNcZDMG4LLtBLWx7V52n",
  "key17": "5q9DVkqRGVJiQmkeSKKECE5pEwXncKDX2YuZmpUthD9t4Y1mr1UYsugcbjiiaYUrXFn3wjxdMkWztCyBdMeaWQR6",
  "key18": "66JRwuEwKGYnEz1V93aNuU69LLCPxHwa6kYW1PWbfqG3odL1eNfLsZpUc9f7tZ6kUcEEseC1BkjqgeNmGC67CTir",
  "key19": "wdjwmB1Kbv1rk5i553wZD7Nwa9xXgoxqHLerYAo8BHxE2N4FeJEuWETk2RgrAhtQyyTMWRdVtEuLjLpMmFduPR8",
  "key20": "2VAM2KE1uf53jsJD1cpMZiiKyvDM3eceq2a5cXzws3sRvCqGBd6Fm1H77FcfKJa7aVQs8HnDzPiPehNzz57W2Byy",
  "key21": "3rGfiigV7C97QaBFe95Xq7H99hJnUmp9gm1oYMmbwZep4HcpjB3w4ZownHH25agtDngBpyZuEvwG7RgafT9Z1rnk",
  "key22": "3keL2xC2QZ926dTNj1xKg3nPCjUe6tBmwJwhFRUZTCrg7dfs7VuKaYkHd1xf3rgQdXb1d36UZfsSfWRwvUctscRr",
  "key23": "3jW3M1ypGamczxQiZ2xZL6dxLjtBnXmCgERnjXoQExmaTPx2BeeCXtwKTPYe1jcVbbE8qpjhsQxDt2sUACgdJNPJ",
  "key24": "2RSCmVGdBrFXjbXFP9PVawbNgxjbkLvNpR2Ji9BcjxGV18f2mQemkuXP4wJNGtpbZV3yNsp5NTrwwAisrye4LJus",
  "key25": "5LqRSA4VaN6yyLA1KQ3BsoA8QcvuEQY55p6xVsG87E4xfKCa3c5GzJeKKMzVYTxoEcbHhuiTYKEGComajJDcsy4E",
  "key26": "34qv4mLPBbomEKfz1N6vnzJ3m6XiZ2Uggb1qR5NtRPocgcKLjR3L7UEbwFA4BgfneitEkUGq89yUktCBfuRxrZ29",
  "key27": "2SBZPVniheW5URmYKh7ke9t2nLkvmwB8qGej9maQxaKUB6e6TA36EBbmYdGacowZE92e8YUq4NCTakWak8zdCenJ",
  "key28": "52yinuMyRhkT7uY9KWqngn3AjqBzk3LwFYVFyAhcKZoJMK4JTUuAnDxqYiinWaCtmSTfUcTtEJ2ENAihXYLoGzaG",
  "key29": "3Nqbybmx6BHApgh12WFeEJiHQdjxR5JA81GsA5S6RwhPS9UstrpPWi51hNGq6EV9RdCd9k4fe79NjcXgjc248DBd",
  "key30": "4rLwJTCoqpa5C69KSxLHccC39KdWEauRN9FHji7v2DkrHpqnWV7MeXg3bEycKXpSEybjN3jsLy64ZwbpUDCcWddE",
  "key31": "5jotSSpAALufNA5N6VYU7y5HevSmef12k6YrKFSDFqZ8HPh7ZAwuUyUxyc7gRaxRUQLEYCvvJ4ubZxgzPrMCcFpp",
  "key32": "57t7AQbEXTQRyhjHBAjQ5y9j3WaDcbvJTzv2yMyGn4WS91LNCBf3KczRsyo9dpzq5w1d1S5iskDHCuf9NhghaPv5",
  "key33": "4v43Psvt1hVX8j1mjBGHDwhTH2XWgux5tr2nVCfnfu3NqyycGhU2jHm3D5Yqy7thbfm3URe4PR2KGUZUCVuyo67f",
  "key34": "rH2Lia1A135n4ZpxAfgVrd4zpsbCrdNrx2wGpjMFGDrk2PvcAjCyCd49ehjT6WfXxer4U6AxHyeZ23jDSvkhVvd"
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
