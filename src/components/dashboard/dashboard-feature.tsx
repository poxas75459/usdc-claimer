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
    "8qkQ6dU3T4PHSSDLLgpauQxxN7FMfUcDN1oni3RLZJgh6QAQLiZ4vPi33mqgzB2tuKBpznxwRgSymwHgzncSBL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PUzSFqgFtyce2py9ygG12eNWcd6ASJDGkJgCudyq4iCVuDFUUWPDE8eZAQxSaLpbL7XpG4cPqnSGArHGBrQ3hwQ",
  "key1": "5ykV7xz2pdRmHx8XLLHBjQmubMtoMx44cYJNwooFiZRk9Lxd2x5mqecxGh37u1sV2VTxosEgr3HqXtZymEmbpEmC",
  "key2": "5qWr1TpkFc4Kk7Df7NfFyvY8HG5B1J2aoG6C3kAo7vmxpqF7cKAKZ3Z1KaQNPJKDVX7ELVU5T5Qz5V4pKoALnKQh",
  "key3": "4GLWYDaSWdZtEeCG27guWvuoLU7snpGMnGoPztUsBMv8W17gS8x6nycTpf54azv8VG2ZHz8desSUaQFRyZTtwnKf",
  "key4": "29GZCSJdMhmJy1JkoKgqobXaWauKwFmAoexs3HzPP81umyDkpTScEEVpQUVXCx5qCqeRpL49WWkrv4GBGFJaSCpT",
  "key5": "3g6zCHE6o76FTUfzBg9owzZPyU5P9xwemaSx9z7akNMjt7oa78qpEGNAJdoWb3Niu7gyt4gZ2d3oEBCD2FKqGGeV",
  "key6": "4UEM9H6J9ncKPUxspLntstBCyxD8ZL7sdHA8HJ2SXa2SsR5ssqNSWcrqwsZcff4Le7vXTACsfFXC9M33MVYtYAzu",
  "key7": "3UGxkZhQaXvwDgwWWeAFzBXKxqgqZsJRfkbroZaXixRqh2WPZgLMMgWUdjDUJC3qZPwgZKjpLwx7Vpb8yiKS5Wg1",
  "key8": "4G45hqZaoxuWkx9tNHBAYjm9Ju8D73u3mT3eY9mMfHLQnEZPwH77A2gcM2C2R5HfSw4sfzesiAMJDQjFWXjnn6qb",
  "key9": "5rwM9YgoiKZGtTtmCby2jUPbdaFGfwgzvE5DRXJGDyjMxdYYFzEn4P7RMM7WKqRzaxwKyT4f5RtUWkTNRpGU2wyq",
  "key10": "DRZA9WBAbx36vAEFF8QKYqbkPYhqTmmgziSTinb47s3bxdMSCAobsdnHYcQdoqUJqGA4pN88xbCyWyNSEb8Rwx8",
  "key11": "udxeByZPRWtyFCv7NR9soKcxt8dW4df4QXJRPDjVhW7DcNAXt7Ja3X7xshJzXQFfEtYxvc8wpbjY9i1BjABDb5y",
  "key12": "4T5nNzp3Vh6Tea4ttGcPXFQHyh2jMpP9igxHALkT1rjjfjFVreR2LtsSPA1mX1uRo7SShnw9Un6Kp3NTk3KL1CAW",
  "key13": "6J3oZy5dU1Xmtw2BvcaU6SqPJsg54XPdjXmgujUZzNqcEezLuDHYf4uVU1VSEGLg1BiUNDYgEpweCePknPyVN4b",
  "key14": "2kpUcYnGiKfc1ds1cmRGYWrR4LRLhRQDHnpHp4qnJaaZADMCS5FFUBZR9RSQz6qnnXJwbWFP2tgCZmCnoXdtUcZP",
  "key15": "5QqHcT9j7uvuooAJMKiKdPUbZEhyPWF2BLGfqPfNixaCySd7Yqa7sC9X1swmwN9WRZjm3gZvbsDrPsTFCU8PmvER",
  "key16": "4VtkCoMDh6c3LoTNEYSGA6u2egc8rrUsToHEZUV1YaKf54kucmhaiWZXd48UwKrJTjZft3a7Tmu2SfQ3wbgvGBPn",
  "key17": "3Aq9m4LS61dDjfp9xGpxezwTZ7mZMBxeHj6JSGdoUXQgtwJvpe1Zz82s2SPMiNUBYkdBMZMwCAPLyXm9mM8GP5Xp",
  "key18": "5k2MEt7mbTzQ3aa1ExikBLcGJeQ7K7Coat9y4MxTKLigTx6PY84HjoB9sV7saCnB2fzdgU6vjbrsw6UNwPfSDwuS",
  "key19": "BKcfxd6QVvTfaToZFPHfeWeTQ9vGPQcy2P3WncSAmTFbswr7mPcLcH44Gxwqfg3XeujHfEmXVb6jskTDEdKhBDs",
  "key20": "2fjNBFEjSHCx1k4n9WpoWZTqjssQaqN7wnjGvmMy2WJtup7iUcKxLDS6J89w2o266jsRMR8CDLqD3bgP8g83hivc",
  "key21": "2jBghPEB96Haf3HYSwE5nx2eGBc3UxJXbfNupZp7r5BDdZ1FQxBsmfh9hSRboLNnVMdqUjhwQroMM8B27h1PFjRF",
  "key22": "3BFxMdG1RHRVmd5wCeWr4PmXSwJNRgcqichkHSgj7bAB24hPWkrXiJyci2V12xcSe7XcYyw2eZqoevCgQ73zSxNe",
  "key23": "2NMmhyUG3ZrrGvqo5ckjnEr2pDA1ZTGPUvvnC6JUGr4pGLP1D5wtsXjf2UPztULgR9XkDX38pQiFMviaNkc8P6zy",
  "key24": "zcpiEbVfobcKkya58TB3d8S27MWSjyawqqtw9vWZidyjhLBY5hFxLY24yW4uaCZiis6XAX8mkB9wmbVbvEYwuTi",
  "key25": "4iALVVrTUCY256ATmEaVzSEJexhsUHp1PiWcys9zswkeQGXX5CPuF3UnpY5m1rH3V2QoL7geFZ3ScjefPurvt8uj",
  "key26": "3u55NvK75h4z3A61ES3HZ2Qrt2KUb5txCdhx8DwzUABJSpDvLbiQ7FbAyAQEYLHpSZ75BvvrBAKcR4h6bo8MEkgX",
  "key27": "4QfR3qqPm29ZWFjCgTmTQo1EP3M3hg363LXr7kxpeSyNDJt2sAU2yxAmgGNV2Ky1wDZZ8kg4jRrquK6sZLXn7Ran",
  "key28": "2iddXzRBepna7xXUQQVSYTNfoTXHEJxRzN2HDEENbqWhr5118gMrsK1pkYUnT1ghaPKP5gxQCvN8VzRpU5wuvTbi",
  "key29": "44VhcFCGsMx47b7MD73RVnRXbNZhKmT2kHsEzv7aAxVAxnx1rCczpnYfzhrWukGBQPdHTdHFtmvpBojdTVhhQhEK",
  "key30": "4zb9ZCmF4mdMMu4Rk2sRSJejDVevdBfsFyStwCbSFF8BPxnk4EpHSw2ATtJmxsb9RKGD6ePEoFaw63mHqvMbSpxd",
  "key31": "33LZ5zPWHvXGY8B9movAZ37XHtWyTq5kfhbSyX4ZfsuDFWpx8hJTVKZ5uiYHqCwL8Wsq5ozRaPkBWiU7nKgCso2g",
  "key32": "3MRVwbv9MEGGo273kKUWTMFwQcf6GocZXgVnCsxuEY3AEjjQMqE12MXWktnLavk4ds5DkcH1iNjZGyNRWTd13fp4",
  "key33": "cKE211uXdhntEJx7AfjEkp2DezeDueFfECuHgVpccrirgUR4qeYHBMcZAkT4q8jAT1iHhsq8TVyx3zmRBJkbYBx",
  "key34": "4SURXLka7rmj8uaBdTKGwycg6fFP4zkDeFpJaUX9ogiFZ6MNWtEtBL12ASmNTStAM5CukHAR9PhNNZstDLgLFbvd",
  "key35": "63VLipqoJWjL1Ej8CUqb7pQUaMoxTLz6ZK74AexGo4FGeJskQ9UoboVbcVsFvxx9mXq8g9nDVFpWKMqYoXazWdK3",
  "key36": "4GrJiNuG9gxYCzEThiENAQDfy6QxjW8TZUgPw26vMwadWgtXD2W4s5RpBuEFGoRyHJtdF9txzcKwwgD7DyY8E8ys",
  "key37": "yqwmFTdhq5hp27pBubzMPwd4zgf7ckZ3HNpNMJ41YzUAbB8PR6qMpnJY5Jrvzhra5mgrV2U3rcka2gM8vDAMCDE",
  "key38": "5DrYQsPd5pAC4WZkXhAXE75ViE8d7HuTmGk38pwuWPTGBPL4Q4qB33JhFKyns2smZbB8QecGVe4UBuzW7sFvQCeh",
  "key39": "4JPoi68hNd33kuGW1GGzFXEkdbF8dGe5LVMNR78w6aHvtH94Vs81NM2ZL9R5KX32oabYscpET4JsshQ8Y8s1JcbG",
  "key40": "3vv6udpy88FUfiocYwLcZvtHzAwHegcKuDDgnnEGWwif5JuezeUpYYzJ6hyz2RAGWniznEVCz7vppo9yi3Dy6eqQ",
  "key41": "7vwUAmK19T913MRJvXfgQCDDZK1GJbyaQAvJfUNkqfsRRcPSTcXzFQAH8RFdbbxvRgdxvwTB2mN4QdTNxidDBXP"
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
