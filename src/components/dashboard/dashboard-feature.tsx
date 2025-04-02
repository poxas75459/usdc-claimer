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
    "4uog7muAoKLnqUBytxPU2kMKjvcm4aSxHLCH7pirbvGQukEAPfwzz9k2Q9op6f3PtdKNubbyknCyj2mn398jfeyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NmiF3saGXABU43qu3sZnwpMNidZTJs61w81ATv1511GCAmUY2QmvM1YVPbtHxh8jzYAiXfmvL4aPXfsydX9LfuD",
  "key1": "5BkNuJZgjxU4tYjLjzwvVMEhrh4Ct2kAK7GP2HtyBdHyTMgAgu4Mm6XaBf2eEqc5YBuQp3M7Aj8LM1j5A833EHvv",
  "key2": "4WwXgF7RZMgbkYxYyFbnFYzDkjNB6oLuCMoimmQDuQh87YSvFLgX67fvqpBtxoExU3LbudQSwLudVAjs4s8HoeQw",
  "key3": "oDWjXEVz1w8JmPQmujXS2UMpSxP6AdLQ84DsVD2K9sQPeLxVwuNt4y8BjuTwAmxwnsgK9epovHKaGma67cjEjUS",
  "key4": "41FRZhH7k3YxekvDppx5BTDbuokVk6XgKuSALdn84pdLSwAagXjKT9QKzNtZsk3Y3G9mq9aBRTDz7qQe1nrpbcTj",
  "key5": "2j5gWAVbrdPLt95f42DXFMEQYEE2RWFZ6jThoLF9fxVVgXWZenM7HXR6moFUwm31uet1kLVZGG6TQbcpfKGUcKLj",
  "key6": "2eGQgYprrMrj5VrYmTGPZ5tkaMogVjCJrfC1stsKDWwsYzBv8PkVqnNmp8inJ6sKgGTNHhTkZemSVn15r4kE5Emb",
  "key7": "3BxxepY1Et6NxYvJNZkDpMX7Zvi6zhqR2PwwU723CMUV82Lcw8Z85C76Q6yWR2Dbq2QyqDF2KodhG7RPu1vR7DTb",
  "key8": "34sVpvDUKNPveqt3mB1iCqEiSUuLpVCz7yuGpFEazMGBULVJ7gVS4H3sDkwvEbQZ5ekQ5ikidYta6UsaZHe9vdt5",
  "key9": "2WTX6Nkv99CRjNPha2r6J4ptSEG5z58C7pmXRVgSxsygpoaQxMCcdXYAKjPWSaS5RYEyJ7hoaCgfpojBqij61eZh",
  "key10": "3cpgx8cjLY8spVST6tEGcKRQAbJQFJS6CaLjQbXDMFWKmmCKaEs3WFyEE98q78Es3DGkWX91iGvsjT5AgXqWx1RF",
  "key11": "4xdSLF667rVRe5aEXcxVgJ5VYD28UexT8xfPDbo7r2BGoMAZ5VjmZ5iLfYriMcrqNK1eF6FbiCe9EGqawosVciTr",
  "key12": "3hRsCYYaNXAvjVALLfLz6hpUTmQ1z9KtPVQdXnXPd4sF4y2TrfN2j4dM6Zi7YAK7ESFUsWd5RLd5aQAgtjJ3xW6n",
  "key13": "4Ekmr9tKwmjVdYoYU11gNBUoovvYt7fatY8BiHqJYgjVZFT419diyjFoRXeXJX4ExJhfYX66ozfDVagXagNMeXX",
  "key14": "3Bqqq39FBzXV7HTh9DAu3ya2d17LxszVT9phVfuWBHzP1ef3pkxr59VKb11jvysUiV6a7ByVP9Nd8kXmSnfdrCnK",
  "key15": "3NnMVQ3G71RiiMBAKCkXtWJr6BJWDmZndfAdEDLWRqFHTBFKjf9kwsiRvQgWbQxZ3bMvr9deMwc3zSoNwQYWVCCK",
  "key16": "7buzYWFjSsuamDFm46acSMjfVtxvbSm7t1HSiY87Hq6s4dnRmDvFbMJT11vVzmUArv9VfAwLWSRKtZqkw67RL7v",
  "key17": "4NTPG2iwLCtaPrwcgzZDNsc62phnX5mkVhL3RL7tnfuC7KKSQ6eewqCVmaiyeMN8XzeEVfozhiceWrzkVPr55azh",
  "key18": "38Zgi424xmbLYLDe48NENBdyMxkMv2gpvkFCtdAy8EMxNuRjS6qGqB5Luc6Gsre4kxE9PYP7NCNx8Ymm6EB9NbNJ",
  "key19": "2ELQGsERaJDs97AM5iReys9apHbqUvdcB5K5nyd7caJKnV1e5Hnb6oPZQTRifSpCC4APoscjscEPyJzRwxBG8smg",
  "key20": "3hprSANLd5Gcsj8umNBx1NNyBv9vrhRePQNSVyMcuJhtkVhajWuTuLnBHJKAxt1hW4zTuemW5EHPxY3KhHRBaxjA",
  "key21": "3gJUxVm6FpBPok64v9Xyzsqbn49YD7oBbBXSCeuR1fGRHewPUY3X3KAi572oLdVWBKuimY5yXFaSvopNK8vdHeYo",
  "key22": "4sen1UotSrbFouRs4ifSnyKPDzwStvLgQDrvzwXvZwbci9gVUnkmVvsxRBhogtk2jEj24bizzCoyXRfVPs2aUeg3",
  "key23": "2HWREQPu8HCPzAGQWBaHBw2tuKkCPdssC7eUju6hJnKeKM7n1M6VfMPYXKTUD4FzCpXE1Ae5eCUSvV1FLn21tY7d",
  "key24": "5HBGJnfjRCpgKpu1ts3scLoYs6QqoYLaxzUhWczi7p2U8yKAop6mjKw1dLX2iqNb6yFxmiVevi73DXJVHHRuahMV",
  "key25": "5J9ma5UbkBw9ghNzwQLhFs1xqbGe2U5pzKV4atP9qPswYkGFmewzfpZgtUqGpmDg5ufZHDiXyuCaixffL43mPicn",
  "key26": "5g7YZL6EcuvxFzj9GZzP4gxhcMnrc79BeQGhJvFLGjdTWNzyLrbHs5xfp2ucNTyugBongok7YdDss2bURYZupVLP",
  "key27": "5zmRg8cnwwPMpdSfW7EN7uS1ts14snUnTKsgiFre9uehPkg326ab9AQCo5QVwZCzLuDcQsvXTHaUw8bBSGjripTr",
  "key28": "3Xzdza1RotgcXPzYDAT2pFKdphd7vHTmGD2LR87BRK6nVniuK21w1xyWQRqoRQuYpfuFoCPk5K4r4Ht2SEjSe3Lo",
  "key29": "2BRGUqNERGtj6PnyUQHJA8D2vABaaMzKQHCq8LpyGZu3aCaYGM5afkcvrRQYZXTx16yHy9AmxwLjpffSnyWDBVSs",
  "key30": "56kddvJ8K73UxHbo7g7hjpeUbZeWm84GTDJUvnJvhR17AGLcNm4qZkKzEzjt6Fx22b711RNwBJWJPenhdD3a9XST",
  "key31": "24rAFTTWcrLioGk66nr4XTViHm1yErPqRrBs24KVPWXtKnugw2MhTPSop53rvNDc7Lmbx7DdvvuKy2weH6Efumx7",
  "key32": "3DzjC1omusEsZBayuf7nKA1Fsmg1SdpqUGdhnSYD9YBwKiFSEFY8GYghVgKF7gh7LidxJmyWYonsLMPzo3nvebHT",
  "key33": "3mBWST4wyFgXa15LqThsrkW9ep87HkgV4svtQcvMpHfJzGk6c1EChC7MncdSxtYdG9GF5Q9J367AWz9DqmhDvNjC",
  "key34": "5MKpG45XTuJRr2AqgSNTQNjW7ZevsWxaQWHRX8BkzNrcwAzRgmYuJEfR6buVa5TnjSodW57HGXKdA2ZzAjMSQbC1",
  "key35": "614LzL4Nx3Qc7AfBoWnwJDj6acBnPLWUEU6TrfABWWQJWSmri3ZkymEQYxGBRfswG99rye7zpHLZCHj89W2brV1g",
  "key36": "2cENw3V8QGZtb8tVjnZTbGZF8ZR4kEEYt5JUgPqk8Z62HjfCmbjKDbr7rQBcQoua9Uds6rvwhN95iUFyiZ9mZVbd",
  "key37": "2JKXShuoVP72Cd4tAennNbyv93hGQ7FfwLNnRcZEKdkk6z2hLSBr4skPQu4zZCjYwhWDK6LUuBPCE9UviCzDyCeD"
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
