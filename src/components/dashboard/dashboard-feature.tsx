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
    "4uweKdhfWfo6u9qZjtnPXrBtrfyYepGaU2Tx6Q59zfzRuESdkys7ZPxf1DL5zwZL2LRr2oZY6RCedgWVpfmw9M7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5M8j7DT4Cc1pDTuqcsKgmU4GAkgbTNPzjY68s7RczwZfwoMDkzSMTqP2tHXThWVUfUz1Qevd1fwx1oHHuJVCSt",
  "key1": "PHbNjJc5XCzR1WzbpfdVimeyiNLnkkPLFZseha2agdHAQfK1LwsGqDUaPRFX4V3jSHtwzLSEGEqe9Bg3xmEvcof",
  "key2": "3TWpy2ainWcmP49xt7SZUwP64ZtkJns7FLtrTULCwGDgqs9FcVS7gzUk8ceQhxthvMDsGwcPxDGuqwG7quTaKpoV",
  "key3": "g8dZsKvZvXz2EMVxowwWv5g161ziZvcXGcAPSmZYHUjAKNtjsFQCDYNMshNRPhGpbimNKwGAP6WMxFTUqztpVBN",
  "key4": "64vpCqZhcDz7qpv7DnGsnCZsWm2foiDJtruE9tPKArpoMzAmMsnbo1SfWpTgSjpQKpvFcT74sF6xDHBvdQzTWdKM",
  "key5": "4LvbS2nFE7EkGHsaAzLbtQdP2DftN5Bu1LtPMArHYy5ww4cUtgyje1uV9eYo9ehLbmmYDVpAR8REyTkJqrV6gXfA",
  "key6": "4A27cyPa2P2K6Sk4XiS1a1JUoq6zMbo93Y83L7XHizVAVntCykWnBFaJWeFLaWDX1SZpQQUqgaSW9Sxdn92V7z8Y",
  "key7": "5h9t3nYi4p6GVdVhDbEjfmboq5DvnohwJPAnA8xVVAnYSBJ8jhmyMe8T6LM5Z57836ZkgPMNMjejsP4xUN4dH9GG",
  "key8": "5fMs6UjEWt5jxsNQz6Si2LFdr9T8d8PryaYrbJK7eHLBGojzu4KqSdjthpx8mA3fe4L2kB8NtStbo6APVe11TvFB",
  "key9": "gqYJjJw3XxQG9r6WrrtKDL8Lz9whB6TYYPPZ7iZdSx5EDquXgouhNZxxVmqtX5dGHzQVNeBT9TmUk4BxgHoYTac",
  "key10": "3pgjKZmr81q7bB4mCz9ZZaWzNLWHoPsynyw17AK3t8oUtoDa8E2LEEwPbS6WngjsB4Hsf9XJ7gBnUf7SkYNVbxVV",
  "key11": "3T2G2jt8wgc9PnbfzCSMvRtd9jxZ8s25N1qqqpSJx7NmiVWxcojLgG4VdA7Xgf2jLnPVsZw2GSEfVoNcmtPxF4DB",
  "key12": "4we5YnrAn4wZvPqk48RVbfXbtKeM3JVSgQWcXNGx5BJ6uatFEsHS3ta4NDdP7JC6PPw8tTA2d6Fg1u5nbanq3c5B",
  "key13": "3krDkSqExwBfrRaaAke66e5JfgTZdGKkDiyi8JQcxULsRzXxsisbjbiA6wgEeDteuE6sMciU8LfwpTeAyb21hk45",
  "key14": "43g3HuQ57HPQF8tjnX7j7FCh1FeA9JVCZMvonafkRbgYR2xih23f55p5iFSJM2wWKLxcud8szKEvumwasB1cujWd",
  "key15": "4vwBYsmXM3Mfxmc5ea1WetZyATnyA9EvH2Q14LKCXpB2BnYhokeDXKwWhb5ET9cu3MA4JdRtDwd8TdLurMceDRx9",
  "key16": "7NJnoVLPxnSPzkSqP7QbbBpza5UJ7NtfJcXU6Y8HF3Ht1hPvxXZsxrJDZ7P7RxPgLk6qQU8M7oxiZQ1jY97M4Pg",
  "key17": "23bLHDEpTcW1oueNboJnPCmvFJchANmAu3XWtgwqxfydFBgqvXuY7NGAkQ99B4vuT2t5jKTqRzeqa2H2Mzvdpnr7",
  "key18": "4f1dGXBfyCskhvZXP4PXhbjqoMfHNsVAsZmCGo2HxDCvEPLgRSXnb9PWV2a1eXBDKitY4c6SiqoirWJzPkcPpTnZ",
  "key19": "TPgQBEt91FoeLyMU8frkzydbZnoqQWjGqbfDxbyaxMUQq8EawKjLkcHwRV8oiF1h6dP8Cr7S3y9jbnY1GZUt4Go",
  "key20": "NTBDSeGRyoGrZxV879CWb7bSb8YA55nwsAthgJP3trmy2kLgra2wHcRPBsdRwEErsm7RnycG4GPQFJSB3BdqyVe",
  "key21": "3DHwLoqNFME7GXQjSuZTYkbbLRSfT5DbA4kZsP5iXdKGZq9vjg4NQdSHNiKg37kmAXaYzbxeJs4xeigvtgMB85es",
  "key22": "Egx465iX9ojqMmvRhRtAMeAFgiV4xUkttFpkQUGU81ArzD5DDE2TBFcYAaHW5vSrCQZUpCVJUuvUqzCfeuukJcv",
  "key23": "2p5ASFMpKoHcC2YYYEvQjrkQcjXBBUGJD6wzAx6ar1a1PbqJtf5Vd1KJ2iN23E8Uq2VanP4rys7N1QiPaTxRzP15",
  "key24": "2ZeUAGyv4W2B6YQWxNDr2YMgBVAQEZUPhNnFiH3sV9SY3AQ6JqqsTMei1vjdMTcDzUhTqyxKDEME3F1BJzseH798",
  "key25": "ieGqi9Ki9MMekdRQmKKYUiDprxyZjSAf7zxKnjFfq8NKkdryV9PXSgzqSEmh5weqAQGFjxRKsnNgpbkQQJGAvzi",
  "key26": "3j1LBGBUhs2ZsNjqs8hp6U6JXnZgnLqgZxymhvKuuSFkuKzEtRjjDdz3vUza2wrhKKkyMz2nkcMFWHXfWftAsZkc",
  "key27": "4gJVJXRY7PEDpLHbaJRvz6KUVmwiFBoNSAd4fp8tEh7SeLe3jpiSpi4VShombQG4RENZkXkbzDTJzGGLmxLtwimV",
  "key28": "2xoHZRbvScjkvxSG6QNpSv4TgjPueexydUGoJYMfEf6WFp2uVRVmU4KKysgCGXR73SQ7T7MECbALmrRYLCRyfFCR",
  "key29": "LW82RzmE11o6MT3ZBxGD9R2byixTZcHemYeF9WguTxxr1u85aH17AfebE5ntvxYQmJBCzWzAG7cQm1Nc4xH7GyW",
  "key30": "8e5H7iw4MdoChUoEddYTF8qLJqsV4pxmyaoj7wVayMvGAvagUe1mtfvdSNZKwQN9haF87oRHfDz675kKZGbiNsQ",
  "key31": "61sbGt3u4N1ETHyZmXPqGDta9MnfAwNsE15o2wLLQywDDuCuHcCfEkRPBENbryKfhiT8Dc1K36iPkFroMxvx2oAm",
  "key32": "37qRCGhzdj6ibj1T7TuYTFiawNWfiPyvgqCeW8DgBsrABbLRNFBCTyiEJYijMgDGLM2TCJ1kUE3rn5a3ptjxwRUy",
  "key33": "39asN9vN9YKAuYePa3hDirXDS5UBxgNXAMieUiZeTHTqvDs66kLuxebrCNjvZrRd36ESxiM5NFqaTep9wEnv1kkC",
  "key34": "331ZNTucENTBkmnJmiMaq7U26v48cX4wWg7fzaZzgmB5LvWnXWvpfP9FCAiuZFeYBSMyw8x9gYGFm7ADsf3L3W5B"
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
