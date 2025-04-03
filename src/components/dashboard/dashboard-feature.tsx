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
    "5z95bejWrBRRQyiypH5tkrkNZbnjjjKBq8Cf5b8fhcfqLmrYCzju25XabcgzDjgeXkQTsDExBaRGZdQM1LJShWDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vz8qHWVdA2UCwKcgMBJ6HMdwRRZo7ax96EpQSsQTp4zSfwvDE6zn3rynMZUwo3ozKnq4sYE8Wg7AVVND6XYCMtS",
  "key1": "4ZmCChm3RLsYE5NDBKgHefEiBAZembBCHcpPJWxpMKyacxTkxWT17XcDc5XXMPyXTKHQyu64R1DJ1bD6rSfu66J7",
  "key2": "2yYBHLfx7uNTXcsRm83doYHMcGiustjh5hhePue33AR6YbHbGe4oeRNjAofWhbq2uAkMDyqXnTL7SEUdHsu4e6by",
  "key3": "2N8rDyB4DzVq3HSRNDaECPrXnaGDTU5RpnKzYkHWasRaKyTMwzULuBD6x13tCgCqEH6DCpvPTFjc7dPBTfrBRnq2",
  "key4": "3HCn9pfLeG8VNWUFqmFKJ35dRzF7ELFuZUE9XEjBtP2JP5sYripLqehJqfxHMmQbXQwF496ssbt9dpZpb4JjawTb",
  "key5": "3wHEAWVHSGaP4whE7Pgc3mnpWXD3YcL17tXxsCHHm3nrs8vm2oQ9fWKjNHRwLCLqJFPk4bVxxoTW5bKjEycQCxcz",
  "key6": "3Sm4FDwKbmeuUrHZY81f6KpF5Wj9Bxn3SoRWVTyNveZEhjjRAECfHMZeHKAJe9vDZVSyDQd5cK3BdrEi6dvTxD8G",
  "key7": "6763zJYqF3qMT57kymVzeuHJXFwrwgCQ1yXhHt9t7Yw5fmwKesbggeQswVSD5fiC9iPDraRcCsaLczNE2oGJYEdm",
  "key8": "3Y4UaeRJCnXX4K4ksvWzMy3DecQoCWYtCtqck1GM7fFWuAkf4QURrCCvcukEctT4niR2uVkDZYv7pzBGRfwv4Rd2",
  "key9": "yE4QkRzTv5pdEfrZN6YN9Hwoa2Dv3R6WArJuEJBHXn3dWn9GAr66SwtR365HQQ1U7BxKrTTZMrM5ebbzYGkUgj1",
  "key10": "3PKDucbjA9UUA5T7e2nAZzGLLKg9ndWnnxJgWYa9B3M8xWAfMj9fDis7YHA5xJHxHdj6YvK6nx2svzRkSL9guDHR",
  "key11": "3RVfEtKFff2CuYjLrK5JpDb59YUpj5Q8R5A26Tk6mxd7QNDYb1wNaqZq9MWNiNyokrsTvU37KtkWewuoXjVWWDRu",
  "key12": "5CuhtKuSerY4bVEjpqdUjUqmQ7h8Y957J2aBt9sfy8ApUC1kByoiGePBsK47QsLxjagv93VMxSLs7VGVCYRpr5e9",
  "key13": "4KRTrT4EysjpYUvTrfQKYeUGN5cFAD4Asqyir3iz7Bdyp9ghX1EPWtLRwvYhSdG5wnuwu2R8AwSzMkSMxsHZ16mD",
  "key14": "5ZrX2gUeMjD7S57zJRNg7NxinJ2RnRDtvc3VyXCxpnYnXiyCzoW6CHyWstaj6NqJfxnkh7Yhb7QR9hFvnofdjoRr",
  "key15": "z8XES9TW8rBybmTHPMrn7vVPCepdB2oZTR1RqaNFwDepgkqvZQW9DwY9WDEb3bz216viUiNt3F2Axs5CzcukHiu",
  "key16": "2mbujyq8Mxg3yJgSSNBHSVZXmxiyxwexiB9FoovgV7MXQHckABx6yKEmkL6RhrMnuAfzrcmBDsTNhZRfNNJxbCXa",
  "key17": "5BAa5XtLQmSAWg1ian8skekt7S6K2sJc8zNH8XpTSgG8s5rDb2u5rTHVv48XTVYqgLd66FxqpXAbq7i21qS7hUCN",
  "key18": "5EuAdFPd66jLaS2pPLyW3hNDmVemSKVEYTvnQ3aqaieF3ZYG7Uvkst7xraDvbEsFUQwnjDNQasP4PQNrtRf59eM3",
  "key19": "44LFHPD5VgHUUPrZGmU7FK5gUVxqPSvTuuiKjcU3t7vXkvx5KvgBNBnHqDg1KsvNFbyKjxVzagnSU6ifW2xht4TS",
  "key20": "5xdZDKRYvWMJa1o2DsKTYJ2QGqXw7nvWGP8RKBuV2WWgrV8i6fPrM6r7s6zjgrZGvev8A9JEkn1GyrRZALkxqSWc",
  "key21": "3PwRbd4yzEUHehTqb4Mu9XgXCUHwXucHJh8HUzdLVi6pTL2CPG7SWeRkFjk2Eb7n7Mjx9hUK25bNtGYh3AhUpiG3",
  "key22": "5TD4rY6Wrpc8pnDYC5biXWAWGGFWeEJNVxofvtBTtk9jeF3RFmgWhX2CA6NJLKCcwXgSP7DADHJWEihT7pANVRos",
  "key23": "4GCFC3N4CdRYeJ6QtWGKjHEMZS4UT57yXeKgkxe4pVaw9VAvA7i8vrvnWBvYfj14mhXMpjHy1r4Ec9LYfdcjtCUE",
  "key24": "5oX6bgDxvWYxTFdwXgQ2NZpuNXqq4Q8FCsN68pLKiY6M8mVW2VnDPQCQGi5KK4vYnrF4ePXHNXpqkBTX7VmezfiB",
  "key25": "3umGmV1k7qEauFkED9yXu5vdaybUYXN9fbN2VRu8PY6eYMHCxqohd5XzbnddtQKQjYNUnPEbbzGGwh6s9pNmwCdb",
  "key26": "5uK7fW2B1rei8SVVsGU9YS1f5LH5fPdV8CfR3geeVvjPevVP5xcYneT5skqv5DUCtj7kvXHUZbXXW3i93kGWTbbw",
  "key27": "pKBwCSCqrxodHndVmHd5WTxK2KNKG1STYyxJypuBkHWzSj2qwwxV5M6B4wxDC6Pn7sgq83AmR7T64GHNP6dX2KX",
  "key28": "26HJTJqYQKGgs1L3do1mKBYVZWnR3ergU8V7syxgCTJX8osUakkpKrdnSz8tiQnHudoUZH3AytqCtFodcXa5wnp9",
  "key29": "LFyXP6wsWvLUWbX6cAKQPZrsWkpcLVHwvDTZMgUzaze5FfzAtAjDk5NHZLkVr8sgLbk4HDqfjrEzXdaP8LfoC6x",
  "key30": "eCKzLAJgG4KNvgguwxfrzTn92Xto6iysM8V1V5hCtnDjMc3skhmoRNtoKW4WdWETDPCdnXMaiH9zbYv4hZy23Ti",
  "key31": "3sx2rRVuPBZeMFUswo1B3p2cM6RGowQ8CZTpf95faXHauPKDSLPbXLY549mfK3s3oBD88kD5BRphGYZHH1bCrFz5",
  "key32": "5Ca4iQxZAjnwRSSooYeKtBf4ATUaocNem5VxtvXgYm1eP6wumer32n1kAb6sz4Px5JWvZHfR27EBcKYKqxWJzLWF",
  "key33": "2huRYBdB5kgWVziFDp9J5DKsBWBjN5fYVnZXGJsav9E1ccAyZNadQrEosUgrc2Dhv7Ath35AGcX9cusXjTbXcFKF",
  "key34": "3x5dpCXHGs8FjjF7h5tMj6mvZg9rv4xD6rpqCRK5Zf1iJtG5r9AHKCXWatcNGr8kD71PqUp57g9RLTeXK2C1LY3b",
  "key35": "xNY82jDeWs2egCNjfFB6d2CKjDaHuBJgJsBbvzsygshXS9ZkGQnDjunr4pzfwTWHZmtp6eSzqUCJSk6py6ihRPR",
  "key36": "4qmqHhbzephqCzwrUp2ixwy7xGb1ycgx1xTDWiy8CrtFg9JjAytYADqApTMmgPH2m1LUcsU5om3NMRru3fvBDvKQ",
  "key37": "4H1w51VmCKUVydkWw3EiaPmgTgGSJdAH5aX5wYsbgL8kZQbcPA277Ax2g19DGEqWDhuw8SiCD43LrcHVz1EhzpSA",
  "key38": "2kYGCTfy9Sip5oZrhPzmT8BwXM7znQ7hMdQnMqnp7nFKn5mpWeJykrB8rMoEhDBZXHSpn4vpw23fjqdqwekBq85e",
  "key39": "4S4mT5TvXqE8bWPqAfiaBoxZGdKrqj3wjndBCWLStpHxQGMBkRpsLTRhzEExowN352qjvU451ZT71gi9zqJAyPKS",
  "key40": "5gUrBeivFtAB1VpDSsS1AAq2AQLVGcBEMYTQgFtWnkiU6Wc357AxgUHfBJn5D5BGJdxxQ3d4cZUb82iDGqdF2wfn",
  "key41": "5J3AxxbKGV8Dg6mmxsBNGPtYewiu4yTMC1VimMZ4ApKipPv7FZdSGVdUPMKFQamNASwDjZhxpUUGAzi2Z7GySu1m",
  "key42": "4xppYkRhDFDqJq5bdkA3ruVMR2mDeXHQzCH9zrBBnXu58t9315gs2AoS3r7Fz1BJhm92dWaXTLVAe869i2ZpN9vx"
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
