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
    "qCq4UZjKVTBbQd7vx9xMeYweR8EPadCJ562uGLmvuqz8rkBh45ymdHCztFLpA5w9DZrSSbd42oajPKgFnvzkRRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxUQu4iwWurdeWm59HA97wd7A2P2azDyPAFLUPvDoKEnCPR3t5xAKgmDEcEAA1DhQFT69j1aTQC8BENR4VSQeWH",
  "key1": "3EXLdE64xGXWGfxCud5omv6XPKQxgtmz4DUzWpNipRREtkK4FJEAtvEXCkgheV7vgcPE6apqnLUz8iZV5eJU3eUQ",
  "key2": "2bqn3ufZS9rSkuEq2MSwK7GfemssJ9AY5GYD8RCKheVaAzBRk5SVsHZn6fNmeLCM7TbAHr7hPAFa2NeDzJwcxf2J",
  "key3": "42cAVVEA6r5CuTyTkoNn8yNWfyBankWxeQMf5sfYi2HATTnjfi7GjAcLufLdvV9mafqJbuicCMe8Jm1Ecvcdqus",
  "key4": "i4xt3oJLBoy4FbYVSYBDECzz8UkXgNgtdP2vne5B7buA1sfiBcZr3YMxMBDMU9ums1R2bdRFkNtDkW53UCFaCfD",
  "key5": "2jq9EhJ39kRGAWja6DXm9CyZM7oyWgxawoNa6TpPAicy66h6jrHwZw7DC5hKe3TqM88EwkwnYfuNYFBpjuSsVBVT",
  "key6": "4oBBrLb945qNnYUfiJthqwU59thQGqFgjaUWbiRehy7XUHyvcLqv3DMkwCQvhJ9Uh3RNjF6hgunXcyR39ZTy9VX7",
  "key7": "5ZuuB4GH8woBFuPtvYBpeCRshdaRjcXDpDnFDCAkQcPCorGy8qLU3FrGf7GLty3gvVXS14zvkp3dDvmc8HqVGVyf",
  "key8": "5fUeTqyCdNYdy5ASfups9q6Kbk51FsFQkkBRigHtj8imx5uqsyE67mGkKvdwDubF4eDyyrD1mhVQMHkcMdHhfZni",
  "key9": "N7neXLjX7S6ruPyEw3daqh1piiFo5KQAcZygsf1qiTwKFeanxXjzHK1DcfzQjxd7gQ1SXVtbffHns8J2KEKQG7N",
  "key10": "5rM4WEwYwn72BPBN3aA9zNQ3zsY4SafecE1jJTXHveMnQtt6HwrSk7fnzyRtvYFDQpZ54jPD1gi6e8FZhp4Z6C5i",
  "key11": "3rkEFQMo9KfESRfviL1pndZCH2aTYjXvH9dGJdsrJYuf53Ma7KE7f8XviB369MJGJPnccHHK3FaWdDfriWzrMRGE",
  "key12": "59kLb2xhaz2fW9y9XeAuv7kVMpz2YAdL9dcEzWtHH6gChm347RxGuqGSHthmo5S1SB9ARbQTnxXwAbTU4GmtbmS2",
  "key13": "3bmbeP1FqURP4cUXUbRuqNnLvnLuD8YMkU2xtfFmfyCbHEw6pycwrG9Hpd33Rba7sjdpPRBgiijgyAfJKBbQho24",
  "key14": "61GhKuwBi2sxVH5PJgHtjCDMozRwwKp5ALCw2pxayGoqoudoPgCYaPi47m9GQ5Y1RKi9PJj2hiiM3XZGUopwVLnr",
  "key15": "67ohD1y5EVusMFXEwd2zmfoCHBoTv7CA2gU7VpqHgHUKFdv6RNGJ82tAKNHWWGVM3bsTtPPZrmzZ5X9a7VuYsKs9",
  "key16": "3bSpLaLteE4dW26P4Dace2QPw1euhMv12GGvSvtN9vfRJs3P3m2K2nK97P3AkNTRS1bqrWu5BKzDJRH6roxKdQFd",
  "key17": "4kzAKa7aqCEyNWKiACqqrMMWWxKYHDyCabE9wW9JFdjU3L2UpXdo2mk69a4HNgGJvH9c2mnqD2X4ZhvkhwPKdUUX",
  "key18": "5EdnRY96exsZ7Q9RGw9YZXJNCtVXJDnZe7HoxwV3xEVkvfAgXQEiynAGcoisRPBPe9m2LTJtu7nYPxQ4guAWeahP",
  "key19": "323krQ4gnTvcSDJ2zPisnfsgf1JZziuq5TLSEMLGsX4MGYsRgMCRnU5kM3dSiUvscpGp9S921Cifn8ZYqYhrfGWj",
  "key20": "3NT8dDgYsernUnUB291xwahsSZBGxAFgVXq7NFiBwujzPG6SZFBj6hXN5wmoc9y1Uohcj6cm9yVjsNkgaoSADjTz",
  "key21": "2vqRDJcs3o3kA2JrMo6WbLiNuZvKFHBgED9xTRpcB2MGFZsSwdatAAvXR8AEpr9hj4CHJcM7MyK4SdZsukhyBtFC",
  "key22": "3o8hgyHPWNjLv9nwfFdBTUi7ZVA73ZBaDLk46m94YxgquzhRtgCyUvgNwqLVRwgkdGHVRC8ZnmSNkmxta9DxYidb",
  "key23": "2zzLPRoGXWoHtqW3MZVFEBsLCrZFV3NpJMkxgJsMpPBxAaWEkc16VQFvPXtNqdawwqwYgQ1TqSqZX8EjjGmcfE4q",
  "key24": "3pwFNns3UxKqS689oh7drQERH71uEEt9K4geRT9sf7GT4rmSoRNJV51oyQdppeTZCSN6MU3zPpw2Jpo58gwtu8v7",
  "key25": "5mDGJFKkHfzNGhC5V31bspMZtMiTuuVff9ZtNYSUH4tqEPzCXzaY4XhrPawDUNTNzPM757HCatRkePGhXbBydNz4",
  "key26": "4YjkaJyQNy1eedWA6BE1WudnKTtL5djJTMRBc1VLpgX3xoNQUjwidiSNJY3X44Vk18WeESqUjfjtpZEkmMxDWeyQ",
  "key27": "4VLDJdJjfobsk9eDDeW1t1BvE5WHKUwoM5GCNWiDkUFxq9CCk7NA8YXtDryUh6g7WqfYKiz68M65CtwjvoKZfNMd",
  "key28": "5zSzeeaW16ZwNow61ZKrpqt6yLGKYUqS4ezgAPXd935dHkceB4YDkxJNiPwiWgMwiVsxQ5Hu66nFsckHxhCcpQZJ",
  "key29": "2ckH3Y5Y4iJmaRMy6qsFNtc6DHDAfWSDndfiAM568vCPnWdB2EdNpKY6Ep6rYHpXC9ttwmWKiyY88jkeLLmDS4WV",
  "key30": "5x549FzhRWrpLbom83YZhXPozUGsJVfLa3MgLzW1GYt9yGAGJfNSkfvWNsTvSHhEvqEmjfsk6kjgnWH8iG9heCdW",
  "key31": "4r4Je7pziz9tWaPutV46ADTQAThbZLMm2iFVKov1qgohZ6ZmWnMYXKthh8XCAq9DChAzWzhJ3uDe3hH6phxzkSQ7",
  "key32": "4yFM4JDewuYUPoU96rKXi3obeQDqVDKF1LKHzkaF6PbDQBLcD5pQAFwqvQwQzkdUjFpAfv7jVTYt99jByJa53dNS",
  "key33": "624HHVumraCmGxmaLZwjYRDxMqiRhBngFB58BWw22KDYUYs7fx3BHoK3jte6W4XSxnk9ap6Lm3HbHieNsWpCBwTo"
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
