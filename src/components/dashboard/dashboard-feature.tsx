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
    "5hiziAoi5URKKbvMJgQde6UHSV3adrWadN61k5MYUBinEXAnKc5y176dfHZgYHDECcH7VTLYmF7BfeuWF8b4xP2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e5wMzzjywVJQpEeZ94Q5tLV38xSMyAeeQdtsKSX9kii6QmnGgmydTHBgHJLQDtBRxUH3ktW6XQdWs9QfMd3rzCS",
  "key1": "3bTu52UVkpgF6QJt6dRvu2Pk5k5dvwhqnYpxWNTuX5TMwc9VK8Zx6nyN3SH5EZDh3xgbmFH2zaefbz6QuoCzio4u",
  "key2": "3Kh47Js2RgCTkLnvQZGpMscZGe7X1pP9dZGJXCLcZSek9KkfJdMqKSTVuHXzpiZcpvsRMyCmaJDYXsockdxCjFom",
  "key3": "2t6xC7F6toMfiSiejccraz2P8tjcyFd6JUXPmE6msgx3XBocFwv5a5HuixA6ghdVfbHR5P9u7hTHxkCUqGWc6WQ1",
  "key4": "ecsY68H4owRLLTCudEV3HUEaUaBh2QTFnjezLYENBxCrsrwCcbS7f4fWnNLsDR7YkBU1mXocdzMbr73XYNkLxQi",
  "key5": "iaqyJkLysDYvQS6L73S5vpWy2hvCYDcJwA5pexfwV5FLB3WdXN5xziEeCUVpW2MtsGW6QWL86xq6LkjKBhnEMKL",
  "key6": "5tadojdkdZjDbhHXnBL26FudXguYJCYB82FAsRAh1roDw4Fr7beuVYsGPEmVU8ZL42Ttbkaein4cFhCCSViVyLwm",
  "key7": "iKLnL3NZHMMaBzH6ojHJjc4QqBfboesm4ZRQcvoM9ys2c9s1ysDQ3fsgyAM6fsgGzBFURALXCnkoZSHxh6ksmiQ",
  "key8": "VocJWDMeYBkY4J8G5AUiTn64DX9odYFAYM6oNnrgnpVktF6UBipkUaTtJ3kVrGdYmXbgdJCoaM12i3YNuygUrwh",
  "key9": "2WjwdthLMMy1GHuuHPYPaJLSU4NiX96t1Qnbo6mLZpJf4zTNmehUdv3XHQKjJMkC9wAbZDGPaxEXSn44GjSNJzwb",
  "key10": "YTpGKA7UffhsRk7joY7Zf4QBfRaJA1dPBCfFZfyDs9DwuBV1eQ1NLYmaGMW6Q4RD31XgLZhprU9cwcWXCGuzdmC",
  "key11": "3J6PdvsTqRdaPhqaDEkkZTFdNjtig8vML7bJEoYDSENzmFhUQKMZq2VZYWcRc8o43FGAnZ3GQ6Dh5vrtnVSmE48Y",
  "key12": "5amc7kPPu8TvJ5qWnhuWsqNuPjuKfZfrJdZ5BPQPK7jrkBNv8qfwqycsB6HqxfuKCGod3ayXok2gLQ4sLKrm9mAD",
  "key13": "5prhrr6JrXJXFyomF1zPn5nsZxT3Y5HkD65w5Mw6u19csX4FVTp3SQ1R7jk7xmkuEt4HGFxnXL9eryuRkJ3pQyoq",
  "key14": "64BVJEbfEjdBsp6TrUs7rJZWy4DUcghu8d8Fv9WgaB9JWhCKLEa3pwKRsiZgb8WchTQNLdcdjsMXfpjajDNQH5Mc",
  "key15": "2YhJM1mnGeXYtLukAi7XATmLY2Xfbxdd5mRrBRHtXj8WhY9GPJJ1U8YT8rcvnYJ3f6YiiWZyJrVPfkh9YY7hPvHt",
  "key16": "pQC47cth7mMaFegQYwKWQsv6epqSRhcFrAyjkLCRC83wk2zWbL2MG91zh6YBb3dWP89dcqdv4nw9Y5VTJyLJ1XY",
  "key17": "672gMYVGsdozkKCWtRo9qi76xeqbsfSaqYUvPNDfFjg8sEDCRJWb4r4Zv2BM84rHVnSjXe9ZG5TYBn9MfuWHzrhi",
  "key18": "tG5w1M3GxJ7h8n6tenYUUV5dGUXDjXmzJvV9iLdrPnrW1GonWXhVHTahqkApjDhnyMkkoucfcFRewvSyssjPtmE",
  "key19": "3Zequi1pHwiyBie1Q2V9m5WFPTV5hRP9NwtyLQMiJPBmWjAzxhmHtR2SfDm32uN8wnouR5f6T3f7tcQXoCvDF6Ty",
  "key20": "3p7AJF6TEdhLdNNQLERW8p6Ch4ownftxmseTntG5Xh3185pt6Ngcj4YLSzBZWiuAHDbM8X7WhshCVEvbNErvEACY",
  "key21": "5Dh7TJ1PA6YC8qbxDNc4PUfatpKAQLTQoYrTDjQNfzsSMmaDqkWU9dQrpb4QQtgEihqP1XNsDwbFPeLVHo9k1kkc",
  "key22": "gLhWmbZ1vh4aqrPCCegMJrivyTzmP1Xar6sMCE9g626e9ZoifWZ3akgMYZjsoytSyc1n7u1pnmWZUxPfmYiKjgD",
  "key23": "4vjzsuuUA4V9KEwWXyVcuYL4DZoGV3E69ckMVzYH1Ut6GXfcps44dpBrYKPrD9Zo6mdL61cbhhywtCmhTQNMxjAJ",
  "key24": "52m13TV1a88SkoosmpxPeVSxrP8w48n3DBDtyg1YWEyfi8xFo6uYuSRB26N1Y1b3bDn2diUYkbygkkzhrLmN7cUb",
  "key25": "vV5K1FTQ9Qe51fsjSNrRpo8BGrJpDWgg7ccJnPUMWEZJRSSzxpSUA9Dk3xneacnnnFZowxzAqvikiSDRvyoaAvC",
  "key26": "2NDpbnTVYmjFFiiMGNDLbgnZoFCtvCLtdZXYQ8kMGy1ainjDQe6YACL8bG3nuZTN36WGzzZg94UdsuT3ASvkcdCr",
  "key27": "4K86GvqWATu3pf6W3YxDujxwKeYDPPJSLz6kYqEbcuCnevbgR3rKWDPnbQvYcQj6wQs2NJpymBEqmGBF5ry1FKmK",
  "key28": "4LybhpMrxkZMrz7SSr2X2iQ4ephPgVYE5dyvagQQ8Grww8f3c2AV1vDj2KBL5UeQXTCk3D7Tt4H1EGoG5g2MYvSc",
  "key29": "53oTFWhQdbS2uBmULKi9GnrPK3Kg2DcuuLrBJAZFKSDEaDwvhXWg6Dcc1hGvCSHTqLwxsp7zUBxrt3SWXp6WVk8f",
  "key30": "2PUHF1L66ZAqxxiBSnWY7R924knvt1HT4PWrsf2EvwADhpeVjynRprciudhHeGm5qW5g2W2uk9dzy6XCVohKKuE6",
  "key31": "4VwsvfJFXh6RUwDDpJd7PjqSEYtPTCsPETpe6Hrs8ahANwUsb4FPtGFwakMyosMnbAXsLvJYVLBdguhFmujRRGpj",
  "key32": "14w8rxMpcnsrBAKmLSUqx2JQ1akMiCPohD5uJ6qcMsR4UPYnrVYgv2B3vQ8AsX59oQEoKv8rzrZ4FxX9jn27tAa",
  "key33": "4nVWLUa5avdmY69Czwc6xY51Gfv6TyDBecQGtR36JNSwKMSTgAAaVGpWyo9qfbBJcDJJENutCznUdFgnxzRembAx",
  "key34": "3cUvnfWqj6sbKxJkcxKnq76tuhGcc9ysizbpzSFCxmfknJAXXhV2QW1GF9f9Qe7J5vGRDpGRshghF2x1EBqn1op5",
  "key35": "iTsPUQZm18nb7APSj7XVyyBJ2Eqi7ZAWGzEGchKcztrjXXh7fWgy34TdFk2D6YMktce8p322bH1csjToajkfGFc",
  "key36": "47LjNpx6Ar2FMqCJLLhTeLtYoNAjBszvCkQT6wKLNVaWueufKVyEVRPTRks7ZsHLSPaTnW78HaLnqvTegMUw77SN",
  "key37": "wnY9WQrCEVA2EnT3zQm55B5HCNRPHzxd71hBDAa2CWHvoFats6GTDqrZ4HLC2GX6bYyvva6WMvLGwoRXMFkHDoq",
  "key38": "3n85JresHjv31jgSdcyTkdHd3vhcrzSPogcqAu1MUzxQRHYgBP5bWTfR5eVBjxJDXvsRKzc4sVWjQ5KWcuaoFB9g"
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
