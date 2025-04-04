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
    "4To1RRgCuQoF4i7n5n5xbKuQ7DqVNMnKcXVwN7LwZ6NT26i6GzGfQAgfXRcQa463PAHFNqoSdwLAg1GBMnNQM7Re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DNvJAwz2KqHh9bLPuXFM4B9E7dwkgp5r2rxLe66pc7njjHgmaXGfXFc3u5R56PxdNbifdUJoB8xrf7JANxx7Y2s",
  "key1": "2x7XEvXNByNXDehJdri9qf2GUrBeQpjXR6zdzd43cGasUaQLiXyhUZWzgjMTkynF4cR6aKPUnaURk12gKib5Kvyi",
  "key2": "5UVX51r2WaKZnsHLBcgSm9cN285zZB8nwmpTdTeZP8mVqog1RaFXeWWeQXkh8F8Hp5C6GQhdfkevKHJpdpyeCwf9",
  "key3": "5SLEorasJk32d9adWK2Y4MX4k52dPAneGXfdo2cwGqSYo8YuZwwshFbknityK9xdjsjEweJT3yhKi2fbPcyQ1kJ6",
  "key4": "36FYPhnjNJ1qWnxsbuuKuLZEe8wgLCU64SHr2v7imYjrc8HxnEJxQqyBZdtgYUTekVuNi81dTNzvJ66aqvttpTG4",
  "key5": "3uUphLc3MRkTXYFR5cgvqNCAM6eMtTsGGdnTXwo8zZjwrFtLxk2owWazACnp43HmWedduAYVpcbgafvoA1TzXqrn",
  "key6": "57H7StkHGZdKXWBkjCPbTK4HCBUADK8rSuDdhuFVLiEbvitMnQigDXeFbSTCPziB4eJ2taS9ZhRQsAy9qQcMzEV4",
  "key7": "42ay5mNUsZBuNYg8nMY8HAmKBpR7A48r6m8QPV3J8tj9CQ9zCFVEJMXD7BUU3nuuFHEyT3WeYAhNdg8CKP2RV87M",
  "key8": "rDwkhPA31Z4FGdjgfqhBPuTjRy8XPEAZHkS8nmj7LGSxUMijED6Xu6ZLAxWVv2tJXAW9GmzMC2sZX6bbiSwCL2f",
  "key9": "4vDMhMfDbJbxzXdGduVHZMWHq1nM72n5ZreRaZZuiKNJzevkaY3f4HU9GRpt5mAZHg7eC8EhWC7ycLc7eqStBt6m",
  "key10": "3ZmagJXEnjPiEXTmJbXHMoxCiiDwaYA6Jfy4iEzAbpXV9DY2oRN3G76B2BnwsUvkNwSQsZeWDmP5qkvsKmEDUPdV",
  "key11": "2Kn6FAFovh3cfCqikNTQc7Lj9oPnJhTaQkMCVXvdTS3y2un3PoPKEhKLV8quEHQkyTHpMR5JdwcHLYcTWNLaEU2L",
  "key12": "3QGePojMe8tFB8zA2mYbh6pYSjKuthuc9Z8FXUSdogXfZSosvBRMDZ3DhgidMoa9zHXyRb858E9LpBQDLGXYfJJG",
  "key13": "5A2yytJ2YYV8nVM946j1Scg82ahz6ZPLF1ZunF2SbjGYuesDAU15nEL1YzvpxvXRjSvzGU7xoCgzdEdasyPkP5VU",
  "key14": "2FkPTcBn7HL1x9vyPGX14qjNyivWfmx5EiippfL9UUPvaHEaKwxvQ8FaDCkCy5tZ3nucyRruCiF1fSHFk7qM3DbA",
  "key15": "2WwLejbmUfho1rX3fADuCFBusFtKFEKuGKvHMzviogcydCv2j4Ws97gig2whs12uFFdnuGH16wAipRLJjRnGKk5T",
  "key16": "FLdt1r4qKScxzc29kMEgUg4WRaDM3cRP7ewfu4wqGpt81EL8PXBdqqvL9jGJeYrToMcFqgjRmFytPhVQ2dnN49P",
  "key17": "4WhrkPQrEDvLspmzAKYxpCDXBLVyiGkQp9kyuvUcyKDuHp5ekGGaJFzqVuuLPsYPoDYHuGe1iPXd9XBWGKxsd5DV",
  "key18": "3epHrCKZ4K7KFSCr41NoNSPkpukfcgcNLti3c5FTJeH3WLzT8UWbmbs78dU7X5nqZvRNrCf4RS1ek2ukEZw9R5YU",
  "key19": "4hKJsAqvgcgBBt4a2HJkXynEBFNWfPj1ZFHuEG7yk1p6Gawt5a2HE5UzZVNE9mspLv1MxxMcJvzjEBPHUdDXreaV",
  "key20": "eW8V7jZ7EgU5pTgsm4TCr2mBEsTbqReGiuoFDroTibyXtu1ewWH7DGPgdAP8WELYYeVwy9iwKQ5mMsqATV3jsLS",
  "key21": "2HYLh6N5SSs7gRgY4RyaiMayvusmzuKXDzYUpbRZuS4ci1hDYhhmnLYGbdHDgU7bDj81Sd8XWA4gbooFGTbBRLiC",
  "key22": "6Yw856jHVoCJ1pioawnpVaK5EfF33hLLTuGBM5odEsWxWw3dyXuDe9YCkTHQNdmJXVbsKCqExN8KQEzKxRdFRd8",
  "key23": "3TrGEvNrt2wP5apGNU1kkQ181pqn2r5SWRJ9bavYGYbdgDw1YWexBXix8Yb2pdrHZNLBjgVLQHrn6gvCuHVTvW87",
  "key24": "4b6DfKEuxuyKMsvAwZpoJFEBQuAfUyXyvpNf94pggqMfzoSgsjmXKpcTwJcfGbyjMWuqpMLct7GpjBtTBuTPMSrt",
  "key25": "4zzGeKA6LKGBsAzKusSAB4rcQXDUx9PeianW1gejJREro8nfTSvhTh7UWB9Aq2uEaDkLpud3bqe3EsKYYXRJ76e1",
  "key26": "m3yzR3aLKobafck2RaX9NeEXtMNR5pyBaNWsM2bxs1euxtFTnxjFxBC3UuZaBAthFAo1SNKBGF2UvxMTbMCF9Qc",
  "key27": "4sPS1Yh2U8WF2XSoKGf7UC92oxrsoP3bz3wtiwjRdThsgRmi4iiuWUnEmBfKsVWeX63eWqpk7baxrpMYGTrprhtZ",
  "key28": "59SVnXcV6j9ZQ11mUHaH1FgZ2fBY7HysePHBDEgFQznimA3mVpfR4VngVN7CZ56LjVaUW7dUXbF9xX7nZTa727Q9",
  "key29": "3RgLPHxCwpQt23T1HuCM5zfxt1nZqfurXReeAhADjawZgU87sbAEjroPGP5tQ5tt56QgHSgDW3Gzf8bsadQwmadW",
  "key30": "55fRxZToWRKz1vy786KjwNwuLii3TrnPpQm36DxPn6AnAnxPFtdpcpBBNJctfmq6fjSLwzHpAyRTBz4UtyNSzgU1",
  "key31": "3gQwEYNJsNFcwFPUUmLCcmyWpR4hXXdQJpqATSBJadfX8BRmTi3t9ee8ES2xoNXwgPYnDjXfG1sYoQURn3pxu5HX",
  "key32": "5Q5gomtEtoEosJwVDXM1R4r55gnWgmcNfjs6jVinvFxoehgPSM8juf1vHqkte4ceYnumJXYWhuJhtoseK73e2t7a"
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
