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
    "5L8f4NZrvgcJmbxqKydymox2F7gvnUixjCxYNBfUWYQDyDKddVunvHf251RN5aUXXTccyzeXeEdwGb91nZXReUjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ls33Tw1E1Ns1YyhedKp7MibB9XbqsMor3jCoUCqPS8pRkBaNq4b5Zo5tZuT9ep1mWufxvw5LuzmGnzdCkEiMM8n",
  "key1": "5kN35nrAqA3EknNZop1CdVk2PYLG2X2rWt6FWzUkLfSzuKf1RAg7oh5Qk9jszGFVuyLfTe8ceiS9CKRiVG53zXvW",
  "key2": "4bGVWoUv5SHo5QuTpkgj2LJeNWaQfXfU6JdWZYJhK9GCsULaAnTY8m5PnESWATtYYWNMVjb5JgVwYqMaXm3gchsv",
  "key3": "5GoCM7gua6B3EvgJ2XjQhHhv1Yyaxw4FkrCJPNUPEKgoDFLYAFR5wMt399n21CNSqrP13xbX7ZqPoGPYRG3tpjc6",
  "key4": "2qhK3cctyTZGi8dxNeKoRgpv5urCyqXwziBjLtNF8usAS7E1KKM38TJY9AhEsaeMhFHacJ5yhaNfYXEL8Z11Kmc9",
  "key5": "4HHMkoLVePqF3XShwKJUUVt61qZLVmCSf8A1TCENQmjsxAxVhvL2H5zxSPGLHjL1gs1b7P2PhPLC64fgwMcym5Zt",
  "key6": "5HUxTaeduc8Rbr55BsBxMcTYQB41xMZD8Y54YsBY63w31rHiR9fN9RJgZNsaL7ArzcRBas5qtHXPEVWp1jGcYF6f",
  "key7": "3pnqcMMvPm9A6o9Hi31NFfPgoAz4FLqb15Y27h7C2Pp7PgMDcfaBzDwDwqeyiDMCycj7mC1qC7f79aKHdPNfMoqV",
  "key8": "DTp3qec8JvhGjc1PAhk8GXXmVt7JsDgav3g31dqWVnt9NAN9M9grCpsu5psin21FD24585ANL1AKBkJeehJRmai",
  "key9": "fNpmxsdYpSDMphmWS3MiansX2AJPguB4EsGTJzSwmMGv2fbWJrJ4ygtx6Ei71a9vx5FkmgTa38xuYKr3JrDaTK7",
  "key10": "3ntj717PbdT8neBu19AKh6WAnWvkDGgZY6QnrDhij3eRF4raFn9Q7orDSPHtfnGcEfVDFMTMHLLLsHgQcGruy7AU",
  "key11": "4RKaGmHmCvXDoqqX48fxUvy749v221nuUchc8KyQQNjAt5x87sRAPsbyp6EnGoHqDCbLExYj1sT5fRVruzcgFEhC",
  "key12": "5TcW1iyhABuv2NRAuXtMRJz8Z1MLS3fQK9bA7zDWEGn1aA8u4HiHopw1e5xZdW5gXPgff3LmrQM8zwURVXgNoG7Q",
  "key13": "21HZFpFbvq5GYFAHLtWdEUynwUw2cMGXfbVRPKsYqhtRhGEBUyrTZZyC11CMazCkVqCB5TqfNAHUYcX3HeMukARD",
  "key14": "54RRiZsJj4SG52xdhTZHg4TkVuic8nt9F41LmuZtLwH5QFLMfvTTvtmR9EADDsTwzzkbVTbok56V3zgty1CvepYk",
  "key15": "5pkygECYbr4hbxXWK9cgUystiHyBZM2Cxtf1ajJ5nMVuCGZoSGyadt2HnR7yNi6JQZbPj5HrxfEULoG64iUbfxu2",
  "key16": "EWgc3ayaEorwCyB6xDHeM74ce6dTwL5yeB8sU8SvrVybutnbpmxa6UX8rjjgng1WXWpyHjQHQGWULHphX714aUu",
  "key17": "3oe3juH3ffX8fSTPxzqhs888o1H5S2282eoqgCGVWG7thK7ByMLCj3dWCuqJfitopkGKEs6gTxD5LZTaRzWjKxdE",
  "key18": "4iNpUerfS2EQkjDzjvHvBazG44BgKMQycAcSqpnNzGqER9vKX5fmuwrAqxqkGb8uh7rnk6VbXeKBw4bYknnG9gff",
  "key19": "3adLrqaN8dphTonzirBAC7MYHL7fFBupxAArjAxZ17esp26hMjAEBH9tKEBem8AYteuCkSGVsxJCUdStzPYgCBsi",
  "key20": "g3Y3ouY9yCoCthJLmw7Rk4Lc5jSKX4v9V6a4an4aqXFHTC3px7GmbP7s3M74hoHsiD9yhSZh2eXDrwTaCenRxhh",
  "key21": "51pkuGJuBeu7UZCoGBLUGdKdyvTrLyYAx1Ym94nesdKBuhWtM22M81KDFMqY4vG74UV2mT5kBGyqHUwXrRU5w9TM",
  "key22": "3tZoWVZwA5ZV3Gt1oqf3EYpHPmzgsZrdf36a5pXkKfbeqWTcrnLY2HQgay7hLtn7FSYFCbYfjyiWh6x1S1SjMrSC",
  "key23": "TPRcX5ULgip9siFJxGSWBnNpomBKDeZxjZgAUEzjEcvCMwsjzbBnpaKUKgFx4z8KU889QpXEE8bEzAaLMJE9TYh",
  "key24": "4yTjapU3cSgL66NBm2Yd234zJYTQFAthrJkpN93tvfDeUvSWaDEJfKVfXhiyor5sjusXReHi7yU3xiy1SvieS6r8",
  "key25": "3uhXFhATn5UgdYxSLisMpwDRcHQLPrjctx5hL2b9AEAe7A9V5rAyvmMANTFnzAngNQ8ax1JhJ9Q8jvBrC8Q7gC2w",
  "key26": "tgKjERij6d61xvYUprtu8UuwccNx7u4jVnzQoiqkX5SH1EU6iikrdhf6ihmFJ6VNdqqspKWDqYrLYrfB9cCoM5F",
  "key27": "5mA17KCc3FdM2Go13Q8SJb36ukaGFz3y9qU4DRiqNVGdYrMocTo489tmnEa7aTwdY63FPgVQ6UnpexL5rDWy18XN",
  "key28": "3WYZbACYmbfmTw4LEakUyrwSCn7p4RaziMnpkUJhb6HVGw1yhDHsSe6NzrdSRh1ZGb1yDshCLsEmFrQ3dc62f9h5",
  "key29": "5tTcGwbj3pH8k7nfp4X7LgCFSx11xaYKe86oPoXePjfPCPXveHwsgmSgkGfZWpqZ5d1Ru8PiLQYPRsma5v1uoFvS"
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
