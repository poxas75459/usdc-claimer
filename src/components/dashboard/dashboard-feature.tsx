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
    "3n9R5CQy3GrFsvaKZKJ6dSejDYeHzPyhiPutLdavGLet6ghdrQAjE1yN8igt3PxdyVdU9htmXGQ8ddnZQmftHNxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ak29Mh8rvXhnc5kGP2htZQTUdwMUpPRsYir8rwPcGR1WXtnePJr3noGVU9GnNrbQSw3388jQAU3rSSoJ14M26JS",
  "key1": "315xRxn9tCNbXSRbBzPk4TS64TQ9VBfvbUfsZTjDTnHJwNRv1D5xacLWmpQwfS9FEBpZ49TS1dmuzooEHvDtSQms",
  "key2": "38hqNvCnGE7Ya1i7mZ4WAVMwWNSUhit2vBHDopC1kFBLDiV1UziFiWrQGz1tZFWRcYobEjcXT2jwARuzcCpRCGN8",
  "key3": "JwxZ3uGjmZyM2imgntZkHkg7kPGMvAPm5E77DK2sQpBNkGpgmy8mkim7cDejJcvxvjz6xxg7GzFebCQiBp9wE8g",
  "key4": "4Z99KdMC6RfH33FS6RXb1VVAtb96oN7fXDsn4e9xNs6LRo8XRLw5QpLnPRi6yxVZ4wyeJ4DBNZyrDEL5F7Dy5Jdq",
  "key5": "5uLDzospZYeoXpiwHbPdLZYsnU9YvAts3ycRFCopSymAvRovxVh11cphTbhoPoKhBnXoLNYWUvJEqiAchPyWUx89",
  "key6": "3ifiJuKFCHhARZkp6Bhz1GxSvxJ4sjwzFDX9cZRvFU4iqdrUudtSg24MP4uFt25P4777pbobhEAAReMdBDr98Khw",
  "key7": "39mjJiqh2hZBE3xHA3MJVAYahat2Q1NxH5EBWivak38XL29Hu5WQzBd9rzpEdB7j8px31aNddWgBRSuwUS6jCz2y",
  "key8": "5PthB62i1L9anU3VA9n9Z9MVtEj6Lgn1MCkRBaBRyPAnRsK6kr5Dkb6a95mE55XS1dMzbVQPf1Vie1XsFsf3GTgF",
  "key9": "4zUxLiWUc9Rj9J9LiDLs85GaK98pZHHQA1eFLGcmREY2U2qtdKCUaYmzyKkceDsngzUbqvjikzBMD7TjckfZPB9x",
  "key10": "3yTHtGyUhnpFNRDdG7mVPagyEqyCLdxhUGqx2MrBv88C3PAzZAMcVA41bteDJXvDonJiwEjMoL3Lwk9nkgoNirh",
  "key11": "5TF6jJk16Uq6e4BUutdXS7fMZrQsidskFFJ77bDeYCDfDaZ2YZjiqizQxt286TRHiXUh2eW7d6TywCmpnzrp2aYk",
  "key12": "4zLKsq5xuB8jMfY1zCJZQTxW8Aqi92imyey7esC1fG4LkUfaGWYVASpiMj4wkvCWcSHHMcwTpdD2Cy1LeDdLmdfm",
  "key13": "2g9ut9cBGN2gDXjTwKnBRSDqgMqYB8CYZDznjEvGpYREqrrFxn5vFGsp2V3rEqw3tAx8TLhMKZSMUQFskhBegNed",
  "key14": "4KN7eRQL1VMkSF5yYuCoLAeg32ZpP9kaSbirxEDWFDUeDsnCg5Msp6iuLwVYh5dmZ6WDiixEhEP1eoQwKrWgUKAF",
  "key15": "Rt31EjPdYhwRSGC8ApagY4q54pBSGVHD2x6GbhdwQfwChsJ9XVMjarQmNkQCuEepPU69GDqmi1mo5jt1cp4SgC7",
  "key16": "5jCMAdGU4U2JC68qnDQqnWJaoVc24Gdy4Z32PjE5FXs54HBYto9M1efEBAjWAuYjMTCqsM3TPq6QTBCYMa4ZsXnR",
  "key17": "4XgNbx74X9EgQPCnvXyimrQnc8o6KCgrcLiRH4TPJiUAJSSpDxJ6D9HnZuDx1LhMS9spKwt9yTcyhT1g3xJ6dPtY",
  "key18": "5mXSxpFn4dKUdu2GZojUfGcpcpxNxLTCRMzBvcnSDPu5c6sFtQMRRUKZQg494Yq9TEA7pA7PHS7Rv8m3WbsExe4D",
  "key19": "3VrzKvpn8g96K7nJSzSCSqGxD18xJw78hQPmUVXdr83jSGAEUcstswWAzJrR8eSf4Xtb48GY4CSRc118DWKm81gg",
  "key20": "57bTF9QUMQ3HsyViUQh31kKyiLgjuXLwrgqPjZctUSwuJmkUeW1dnwe4BpyM4awGFk78wa5kfJghRmTfuPBmGyxS",
  "key21": "4qYEdhFooSCdsxks8pwq4UNqhrtp5E3FqoFmkYCCcB122z2PCQYA7jcb8jKqRJ1xKsfteh4b6Ua6gj8XhDbSZDQJ",
  "key22": "23Ezz6eRsQagzZ9ayGySLwAxjoaNDDkJLRuwrRKB22EGnMiAS5R7ut3x8XzMTiPYpvfn6g1Ux2n5x9E7uxAZVKJq",
  "key23": "3ynF6fXa4TVSoxHbgb7bfnz2FVzVWLP3iKsi4dBTLnduvZmmD68eMWBhMhQiXVaJBJcNxKs95Ys8FJ81E78Cgx3j",
  "key24": "2ZZZsVmdjiv9zUHpLtnViocNPUHTZiZs13RG24ePhKsp4D8aDf7mFmkvhajXmiMKT4ypdNhLApVSziPAbATkmPWj",
  "key25": "g9nHmYkurEzpdShRknKBmwByHXcAwEBnEVG2ostA3NWsYna87C9Y29ey1o1nWvcsvej2Xq3HWJoNNdDR7hjbJM6",
  "key26": "3FMcKTgXedjFvNvD8MME11r3F17MKebwVRdk8RVkgh4n9DUwAqM11rXzqGurqgnQfM6teFxb8bEo7mXSdJZCXb7E",
  "key27": "5ZKC3xVwkm7MGnbLPZpVtHXvzxY234NuzNVp3H9sWYM3saxtnSq6Uh3JZbvLT8E7jPDNTt7qGVrQUmpu3NyPqaaK",
  "key28": "k3osP97wipVXFXpLXktA4viu7XBga3W4qAxhmmvS4jpd5ZRPAY3gUqNmeQ68mr4CNiZ8frdBhnLfwjP3fQw84cq",
  "key29": "34PeNxu6rupahhku49BU7X2uBMTm7m22mP4vJkvt6tx3JSbJYVpQ6SaiQd1a7mn1KeLW5zzKjx3ZRiadtF3K86Bq",
  "key30": "31c22MJfxKPDBEyHmKEZ5h1Sx5JFAegQ6BsauaJ9PZsVQZWpZzW8VS91ds23nTTePvEFWbFrGnr3Dq4DVWLYmNhh",
  "key31": "2WfjkUY9HYdbYNaPHhf4vfdXPgMM3Wi4Czqddn7gUa8kMazPoLprbn8uQZhFhSzd19dbxdTzZ976TsWwFywWnkBf",
  "key32": "3fiyExkryDyi7nGs8po49zXS1DnFV6oJ9rXhTvxwJ3gjafFKJSwFaTmPA14KnBLymST7fTzKwLefp1zUTKuurpCb"
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
