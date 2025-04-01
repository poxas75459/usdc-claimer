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
    "4SCkQiQ9Af45vbEi2jBfBs7XB2xpTp3KNUFSLvLZBg2QDmDaM79uDD8GHwXKDbH3bMFK4x7jdcq3xSrfnZZTw8Nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSGjaPszgM6ButCLfK3sRHzgWnqCNCQjGfv1ypf4gyvZ59ciep6uiyrNkZdQu2nqwxfXmGkoDTzEiZF2BCvRSDD",
  "key1": "cKuAMQUffByxzfHNRYNDUk7WQRKSqC9udPv8obG9AwCDUSCbhvxSzPd5c9A4inhpUAYVF6LSKzX77iFKNkmjzJ2",
  "key2": "2af36aDNwpjjj6vwK2wtvZufqbTAnzFGMxkAYXRTfUKoj6TWsqoKL5KPMUpKCtmzSeKd7mZCRH2suc9ncKMA8U85",
  "key3": "4G5T1YC2LPQ5MdqzZKsggEoVMJP7w6EXofWt3R2CK35mQgZMKWUPwWwhZBiTZ1fGzzZKiMMzp25jWNpwkXuPnZBH",
  "key4": "4tea85BiQ2nRUyDHnP9Uq61VCrpaoDmad3WQqzPxuhB1EwPksuVPybgWaJhq29AeMcJpCrZoEWcYUuieR3LMEVCu",
  "key5": "3rnCgK53FkuL6vdYeP4Y12YB3YeCi9zojKJ2fVMUxVEvvSDsyRRz372acKRscddfgLJdBRZN5iyu4XsS7B8uLn19",
  "key6": "3J6AYutcDMySL8K46nEtgzhCJCoU3JHVn6e3znoB6VeygYAV8YrkbD4NuD4H93L4RBgDWM7o6v4gHzkvAeYh52kD",
  "key7": "4cgkAT4skvvFB8DiNi6QgXM8vnk4ppP3TrtLJL27zRa8NTsNRbHvYs37EZQQTScazjGuCu7TD6JZoRWQUzABgTHc",
  "key8": "3KEmaG6F69v1xLhEKRPHuRRJtkC8iRjS3cqag1i7B5EBP5W1329S15HoLvFoQc9wQi36gTzvEJ6GRcgvW3WGaVYP",
  "key9": "2bQajSeKR4wy8yTLe5GuMc3zSyKLCZbjc2dLvahVrP6UDDwmYwV96MNJZE8cqGmD7sTGc5dLyQXNrCB2AwwWHTuK",
  "key10": "2hzkVPyvZMyLQskyE8UYQ36N1595enUQczHAYjzHBSNrtFNXXe6qLdu7mTYmvT4Xrdyh9v8akYj5vdHDsp1NY5dP",
  "key11": "2YKUu9hf4uzvLPoJ2MNwRVuBv4We6VEbN1qMbrHe5RxcRtrUUucRMMxArDNRhHtzftVkErvAA4xbTMmfpXQwzWiJ",
  "key12": "3ZzNmRtmMRy9kQGAqgEEDxHfHwfHRQPdLMf6JUp41fzMnANscKGGZGcojNP9tubG61jgkNAZaW2xpqmz3ofRw9Zq",
  "key13": "66mp28sr6extxV43JHsfSGao3rBA6nb4BpAPeCetfYb3Ptu7Bo138gR5gvxdaJ9TGucYokXYse5c3eW41iFwbZi1",
  "key14": "oSBEJt6g2kDcaMB1Vig5pJs3bbornReDPoMCLsTDTrP7Exj1dYMzzdXyH4tmkNpDyVBYXdcgoieELgwivuZRCeL",
  "key15": "2WHF7s4FjohfnVM1DjHafsq3QajYLNoRFvtk3RegpePHfPTLiCWcUPFrGSe7pBgZkrEiSK6Q6WpNze9YrH3prwZk",
  "key16": "2jv7HtjZob5jCvC89nsxhHu3Qbcs8PiAZCW25XG81tukBrk561KLXzqad9UtD7859busNj9Ct67ur9yzQqevXdme",
  "key17": "67NJZc9gTkTDDzRDHRyQAt2BTdMA27Lmmm1hS8CDZhJVjvqLrjBR5538zN5MHsbaKANikDQ7CdrragtJCUiVamY7",
  "key18": "uGvur3rCBeVSoLYHPT6Ypnp1mvJeewp3xDvUggfJ2o4VE6Si12kW5XUi7XgavmTPXRTjFxPkVJi5yhJ5vju3bFo",
  "key19": "3r4auAYLTWgKVu1vEkCHBEsdpDjEShfMRLWgHxU2S77N8a27AyFPBR9QNrvfMc7qwm3GYP3Kpjnc1bMGLeh7Jhm1",
  "key20": "3ukn5jHssab9QVvkd8ZSBN1ZgCawWPYd2qm4CCSNoZt8xXJBmzV9iPyANgoqbKtCFgAgpHYwJHbZu2avSJp58nsH",
  "key21": "3v6SWc5qBuTUwrbSuMZVdpLtsbexuch93YbNZjdvDqcRyMNHRJoMub8zC9b282Dw2oEmckhFx1xDyE7oodEzbJSU",
  "key22": "4xZHwmvbiKKZgfGbKscNsQ7QCSNaDPvk764ZVtYgLKdf1oBsYTgVbyqnFh8Sx9K973Zp4vXWhjpbnwBXfDaGiHFX",
  "key23": "cMfkRHU6CMFocgGwR3C3C566oXkXZGnjuoA84LGqc6BEU6ZVhueLkSuAKRqq4ud1X9ppC6NAwDfwmA2VXSkxgpJ",
  "key24": "2j62XNy8r9V9aLmWPYfX2d5vcXqu5eAr6TD9w85g6NQSiDzp2vBC2d1k8ZdB3A5xnDYMTi7X2M6YijrVDN42k9f8",
  "key25": "3tSmTfAR8Gh2aKSdA1pHwwv6Nkqy7GQwhCeA4zfksJ1opkM9m4YKCEGnxbBLzDycN7bmWRPVFww8hv4pL6Fessbs",
  "key26": "Xzpu8XAyw313hW7wMFDAgCJiikCWQ1f63AtZpyb3BMRjNcmQtDEQJBZdchnRqjWXWzyPf3aXuByuaHKnxMsSk3V",
  "key27": "65QALX5F6FVVXgp37uvKXSZqmt3EQTXdR6tFsg7AsQt6YEtMD3W7vAzw6FEEb3Pq1khh8UvA5spgWGduFks7geWJ",
  "key28": "41tXJAchzHBVihFyHD9jMVcNe7KQKBD9nwcKJ3K4SxV8kj7kvmXCnzz8fepe2XNc33sUx643BvZ52Eoyw1HBSodM",
  "key29": "2xyJ134n5ZmN8tAw2tn2UtQU1snZvM1k193mqFDGqmv3YfME3Y1TeUknaCT7bZjUrmPhvZkdgRX9TCM7tBHBo6AY",
  "key30": "4DPKmRppyoTQkFeRbDcgJNpyyxn7Wnx2UC5xVuGwQiYUCLXghnXgtXdGcTC9eP5p9f9e5EMVhoHurm2eXBawAiTA",
  "key31": "3pYandzdjeXyuzr6DXKz51dzUnxqZKt7Et5Hr4tnR7hGMdaDr68GDEWKDAxc7DTG3rc1ide9ghKAhDsbyia8Pg9V",
  "key32": "282uGzT1UMtkbRaak5Sa4s7GDUABoMWwMXZgZjKRWz8WhVC7qYNnScMhs9C4A6p5fS3yJetzPxZVMnrJy8iGDkBS",
  "key33": "3YNzAvLCRto46QpJkEf3oCzv4Z342UMvsUKeztKS9S9ciSYeAmaxZmzi7oghn5Su4U8MNhEX9tzripUMfDZbiSpZ",
  "key34": "3SuDpQZKnRuSHKkveJxsiG898xcZY3JSSWG2SFPtbSqGDtgTBEBkitX4HjEDJkSdEx4LBSMfDNpyAW5NF6RXVbr",
  "key35": "3gaffdSrpouvgFfa6E3Ys2Y1ATWBmnYtHChobnpKxr2Cp33Hf76qiho8W6QL2dv1TVjSWpZdTW4CoL6r9CnNSXBn"
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
