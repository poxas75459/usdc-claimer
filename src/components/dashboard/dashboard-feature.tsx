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
    "xfmB5YAtdWiC5Wzu45j5BDbdbZ4SaEQDVZsim4yTt6KNAUkw1X2cvHfFjp1EV3LRua2LHS23bGyw5fhv99F6HRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBop7E3jejMwtor8we8gUDtHzK7DFgduXgYtjcdvddh3RgVpAQc21cu7qCPUFPfPC55A27dKpUi6YZgMEGLkRmc",
  "key1": "3ZJ9qZwu75yc8ycjA67epbiWohnJuhZ8Nn9DVrBUrm3pxT7WYjgjGCZcQ8wFx3NhDwKfER5xaCszj75KD2DvPNd",
  "key2": "2FcKKsrWYtKFSQ8BuKWpiM4ALKMrig7bdLquphZZKJJZLSipUAgPnNGuXHibkJapdhGDPu6rPkK7AJYSYGt4zShD",
  "key3": "2ox92diU9hUV2N4t9AFeepBqeNzqmLFBdEs36i8quQUbeZ2vxEmXCo1u677RdttWAeT3vKZjcU9XZ6LuEApL2R2n",
  "key4": "2xYTJUfK1PJkaFHM1HQiFDhnHmL7YrJnu9z2Qqzf1CuZ1aajewJraqXvxbWcVBvy4cMX7sJ4ADR2cFVzB5zSsXCu",
  "key5": "NefYQJp6GtZ154g6LUnedakscsLZCp6Hrrpx9Gk3qAqLySsJVJLoej2An82xX4PwfuxjuzdtLouh1rffe6oXkAm",
  "key6": "44prWYQsRtSoxmHJ29GbL7ogqaZGm82DuLLkBfrBnHzeVZwkv5KacR8fgNY53b1JsBgpCL4ABSZofXxeXD5d1Auw",
  "key7": "61fNvZresmunGA7xxXzzT5gXg9Uu9qY7TiE6PRvGp31tyL847aBJKECd79FoCCo7W6rxe644qPVM3Ac7H7U5oNns",
  "key8": "FcXvM9vivAuD7GY87ng89kPSLGksnMdY8qqJH65tW1k2gLGVpAgb27hQNsJjr2mQRH4HtD7M1q5Yp78xHkgYXag",
  "key9": "UnVG3mDbLrz9TFzFn78kaGr3xnSagpT2ng84t1XDrYCpJL8yodtm98uE6Crsp89jcL2nwPz3EobYBPhGkq8HVxT",
  "key10": "nSAH8Qv4muPBKGRfwt5jkra8KRrvwZF4u3EtbeA5TaKnyfkxKaTaW3guMKaAiW3sBCKfdkJRVpQq7pVPmohaDh3",
  "key11": "2LCerp3gtezefc3SmRStANLwZPSGu4nCYT9GMHcpZvzLmsgDeBcMxvafkcQVESTHVE1uaBduKKCLjiHSRkS1qNKc",
  "key12": "M6JMPucUhKV2c5hKwk33tjXi5t7Rzb2FT4ztrnbRXz2uXZjKnH4eun3BWXMB3qXHJjnBmW3kAsaqGRNGBgWyezy",
  "key13": "vxkZ7G5ct1RhBHghiAhWL6g1eYWnnydjStgmi5dUFVMugNpSitu2rC1ipKw5W5fBZbmjcKRNgVbhGVfCUNiJa8M",
  "key14": "595KWDoiExZuyrXZbnUpPvDAfokVQHCks7FwXTaBaH7UFzDwcUBURdTYGWqxW6VEYDqsnYJNeobEdySBiUwDgxdd",
  "key15": "SUizJ7xUL7sKLj14wuDzHoeCQ4pr5D9VvjaeyzyFf5LkpSrcV7i8bb2FeaD3XtqBSjg4Q6GTbXNG4TvgErAgvcd",
  "key16": "4wVR8wdp2sZA8U3qkLyBdN7xeFcdaTNxkFYEg3BHUdMerwNxsnJrYCmiXknyrJNM9UBzGUCM1Vv58G8MqQU8F5Ao",
  "key17": "3tmRkhs8HXmzFmrFek91MsQUtZ3T24pxstRcZMEKjnsuo63FM54FrFH556ZzWMpUrhhfPVaT993puo72dqW2bSqU",
  "key18": "qufBwBt7VEKNS16CKMHYLCnksv3RERXddFRgnXRrooUKmUkK6K6DbpCrobZNczjZ3s657ahx8GfM4r8vUV8GM8n",
  "key19": "zjTvmxkf7mWud8JiQzxnP3W3x8UDYPzhavCmyJHcoUNW17SsctXc8SRWG9nrPdtjLehQ83K4ynT34ScZDyY2bQw",
  "key20": "4WJmjob1FXuH9gTAutQeJaMiwDvFXV6Z7AxqS1tJbcTHeNvv7BxsFix7Tc5b3tTeuU94Xb98CuJ4GPhyzYW9QGDZ",
  "key21": "4gk4teJFun2V36C5eQbqzrsBr9Eyz5QQALHQLDc1UZzdK5c6XJu8M9UKnFXGGJ2HPWDLzSXRXzV6Si72XeC3HFnw",
  "key22": "2km8M2fSqWsG7DjfztPRtybXJLSrbkA3PLRz4Hjn7s3Lz5eHoohx5vg5YFiP6ebnRaeRAxRCPRQLVhYAQctXS1TT",
  "key23": "4uuJe1R173bXkri9uF33x2cfGANL7L3wFRogsTsANdVkCchNHffhVCcYSfkw3EUaGjyvCbKNcDiEg7ug6F1QcqUP",
  "key24": "3oTM7pUaBtJXttvkG3GYkr35PqAa2P53Tzti883UzRJwkY6wBYVTufMCYC9fb6eodS8SACqZvULvkqkrdETrMuzc",
  "key25": "4US3Usr9CDZviWemrt7TTqNVTnUdBoF3FcLuyXE85JE9MQbrdHeknzGR37KShcT3iaA4K3tVHKGxqTLKH3SkFRLr",
  "key26": "537nDVSRLQ7tL5GsvhADTkF2dGxJpbLALbT1hLdsKTdzY4so9oe4qANqG3GQzLWFVW9fR8me1akbQ53MUVhJ9LsW",
  "key27": "2imvvudVbn7CGFk7go4rH4XGfMyNkR8uypqudr512YPFv5khbtMmiKbvgAnVcvbjeE8Tg3Wa4nRdX1oqZEJr32yc",
  "key28": "4zaeittTqhNynkx4avfz7oB9nxGyvN4BcPYmyrKJeigGcZcdjbB6GB62eiHy256QBz3x4TATw6NJ8KPK6DQDqAAk"
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
