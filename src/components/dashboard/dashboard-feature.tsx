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
    "sZczXdSpU64b7t9mRTynYdJ7P6cDgUh9zoYnFf6PH71msJcuet6FQgr4U3dwTDjHDmBPnrtAqnX5eDTefBa5tuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28JwuyrpVuMPsXgmcVRJHX1knpCJ36yT33CcBnWVxDGaCFnHePpdK1KdGPGE6sWNaNoGQVxW1H4Ec2gV4w5eyHf7",
  "key1": "4A8kvU9sdYC6VTZmc9PKGJJWwfmDM3oCvovDH3styqysnjD1QHW4aWSgC7wuusebFjpsdbLi4MvkBxUrR3gGiqrm",
  "key2": "65X4Ndaw8TmLJvAgc91dmFeHiaYXpeoMD5Hq7SMrAZnPsAUU6AG2rGX6JwuDNLmA1HTDPzXSnCSmJUKNbRVhsfNp",
  "key3": "QXgAqHXZbNekY247qZQfN3sDJZKeLAvCv9hbUGakFt2uQsFgTd2jqzWqMQp3ZvWVybf9qYce1bAz7ZhQwtZg7cK",
  "key4": "s67gBb5J2aUxPob6PV5ZUcVGDKgJaQJ4uev1hMCcqtSDGekVzPBk3cih1EfZ6FRJSRKRtGfP74kSpDUBha5cJXN",
  "key5": "5L4U6A7vYtEpjdgS2hGrci8x9C7BhFrtw1a6xpBZFy9jdwd7cQCxWKjeNByGQGpjsLtEp4FMXX8CYdT7ANjkSTNV",
  "key6": "2o2oJijj8GFFfsY1ybj6HX1y1h4XVsNpoQn84wAQJn7w7z3qppxrzvdj6vKKoQiwenZcYTybGr7dsv3wskxccadd",
  "key7": "64u8BmwSvP9fm9QaDnvmi8WNN8h1P5e9tfQCASWD4sH3kmwR2yh5xGcD3yziN7TBu9qRDbnPMFCJWKWHqJnqKzcd",
  "key8": "34iU1VZXbMrZqQHqwDV2NwyN5UH3KgqUitSwUmt5eUcmqCmHQVmHJvkEqS3kWJVA73qwNoQAfRBtxDQnNi2THwAR",
  "key9": "LJjL8icRjR8NsDEx94eDuSg8LidCenSebThqycNtsMDkRcJ2Zar5vCtNic3zvnW3xUpFwr1oesf4qn3oiP3RkRs",
  "key10": "M5yvJPDZ1gVfVHK8rXUb5GJBsmLceN35wq4uB1BLLeH2Mj6VUPRVZXyU1dabLxDCgHPGFoGMHC5vuZj8Xf1pRMc",
  "key11": "3DMfDV9Q58tyhgCEP9rhaf2udVhQLCy3gU1eNe1UvYzAgFyn119GSr9c5whsf6RRVdg2qfZuSpGMnBCQpVWHsNei",
  "key12": "3KkvZYY1D1Yg7e54jka6e73RAK5g2AWeJGek6e2UPdoQqrgicLYu9ZU3tKgSC57iXqe6o8jBgN9oiUGTVhbhJw9q",
  "key13": "5ahvxbarWxhiW4s3gBGZDQ31bXBy7RQS1JgWazgNPpgVBHReNPyK5RXkrAewiyStjEkcb42UrKH3hBLcK4Vbg6Qj",
  "key14": "4xq29TzDAqTb8jq4XRx2bFuKuFeiyoCttgYGzd7M1UQkg9xFVEm8ZmoMeZRicbq5rtuBU3cYsxBhYGzuRsjdkxW2",
  "key15": "2g1hwrQstFVSArpTCUK1Evr29pk878hHdRiEMneeewWM1GBbo7QfX8oCSNcR7jtvnAorzgNLwr5mUoe6Ve16Gc5P",
  "key16": "2xoBFpd6QqdVFWZVVKQ2PhkKnf2WMVWKEg4ZELBRtaBLPCLPyrdv1ppyc2DPis8fo5m7wBtdx53XfUGw6GYr5syS",
  "key17": "5ZN2RAZcMxSewwXFf711bkdNRmzqcy9YBcCRREuF9rXCgW1SvhVRYcxJzsKgXrFX6MWQn7LHxDzqHWE7UvJEubda",
  "key18": "3iDgfWvR2pJhLkNoef8x8WWWVKVWCrjJfoyjiCLtWcM3eDuFNup4Thagh4sYg15R6KQw81YyfHNaxisGnioEqc9B",
  "key19": "2MsqeWk9RwvQMptjxq3tTaa686iJvp2QJHgS2iAkb2XJvTBeSM9J7AkJQNwKfDDHbX6AGebMzQbdAkHtuQofv6oh",
  "key20": "3Auwu7dAmiXSXz2QvivyX6sSTwaG3PgteJUG9fBKbvKHHgRMXMr92mf5k23yYxJ2RnY7Jjp6THmLmqNYoWTNDdVb",
  "key21": "xeuyBvpZVnfHavaeXr9JCGAQoAzeh7y5VnnaqBGqLmtGV1ZBr5NqikdZ6BJXnuf3Eyj4sNnQQq4Q4SwXuxsKgjG",
  "key22": "49beZMQGeKETPXJR7UcqD3EifERE6WpDGHwyKb6YMtKHrp5tNf3JCUFYop8XBSG19Sp6JhA5L4zdunctRbd4c1SG",
  "key23": "5kCJipjBb6eLxonnNaAssifXRKmCt1JeGoSefNYfSFnMveyzdJX1Eq12KzhgiRsvQfHzw9kgrF23pbLvpqMQBTJp",
  "key24": "PEWXv6s6JgPDXDTNSwS5Z2ZGHRResmfUhRXGp8MkBgMKbru5h1SCjicPr15DWx4BK3uWbQNwPzneHTxDM1D5sV8",
  "key25": "4EqRYY1HzVAkKTEP33GdqtB9QNVnTQqYRTvBxHZe7BB3yezkNC4y724epRbGroPX4LgtP9H33h4GF2FHLksgkG56",
  "key26": "4u1CQf6hhctbGiPThLU3guBodHwiLQWGvwXd3C5DX8RSX5YrDHCLmawuQL5TLyjVD5TSHPDpKR8Wo6LQ81A2xPmL",
  "key27": "5W4mx7CnqC6UQ2LQWKKjmTz44MxyUxFuJA5GXJoPy8PFnYWri2ab6Yuaf3uxGq5GNSAURHzFaVMAYi4uBGPYGfw4",
  "key28": "4q1eJiUXGvAT4NATXp1LmNXTXUJHB4pY7j8UQzVY3sPJqWmtHNW4JuwDTqZB6LCvyptbhfC6bdD5BSyZUxFbW2oX",
  "key29": "M9edfGVjgTkK8SRxRyt1uCjFdn9mjQPaX7Vuei3BoftBuNMRqL9N4RnumYKBoMq1meL9P6BqtDTgceU7XtUHDLk",
  "key30": "4wT3qcd1JXGs4JfcAsD2gvfm8gQuZuDNVTNgKjoVsYF7XoSPuMsbwBeSsrogjyu3Un8rVZPVhEhdmmPbkzebub6Y",
  "key31": "3XDSiy7iachLieHw7q7q6rS3eiPhxmUVV2o3YMEDWPFJJjHRSH4PhPtRyopSKuLCriu8rwgpW1ZkXXN6kBAuD8jz",
  "key32": "45eQxC2dH6UPz3D4uMUfwapq1ENJaPxsNRHaXU68JfR83xY3B51EEyTiRvuB9cZgNQXjsD5jCL7pfvRZYY47jK7o",
  "key33": "4kTBw8yA2rqKW2nfkDCAUkuPgsn2veUzJVKbwRWeVoJRnobGUgkwfXAQVLN3qsFiae8ve1bipf7a9awV4i811fdm",
  "key34": "2dzhexnTJbVM4FshsK17so4ubUwarXNbAq7NADLk1uH1TT38U1jbDoMsDPjkpRFfDALaxYVYocCD7r2tGDC99our",
  "key35": "2uLGuRtUhhKyu4KRJu22psRX8Zmg74L8TvSEdjCmZexrnkfqYnmu2XmbY4yFMxeDdck724TuK3kWw78N1LmGU1e4",
  "key36": "4kdAK6VbnATXRFzcZT6WkYF6H2qXdRQtF27gavxUPEmFju3Y1ABRb38sk6FQCSK8m9RoPTFTfeCQnm75te7yQvTs",
  "key37": "5LJhd2XfDtJRRPGEQ8bZXEnvmPpuvaZV3dYCp8ihoJUh9xF3KdxNRu7UiSw9rH8sq3zDZ4HgqNzbzVHvtX1ncU2j",
  "key38": "3tdGPHU22E3zVSu7Myck8qs5fantrvfzkZGMSk6J9xsrc4q919VF2YPs81JkHpGm6pGHr7VF7adM8DS8PLX5YDio",
  "key39": "3JYN7aLuhfpg9CnycfakAKr5E2Rue2fhBnLbkUrdChEz29D4FE8FyrnrU7pVBR25kQ6zkSnNHcuj2oQDFNzq8pkW",
  "key40": "5aj38fC1uSUhH8SFJ6ZcSr9VrgirwgD5mC5Qax2CjzgeUx9mL7dYU72yo3GMcrUbGvPjBuVZeyof1G26ECaV8VhB",
  "key41": "4kZi39J7hTZXCx3BXvXYRhPzUGFD8f6bqMG7F7tJWpPp58ZXXhYCb7mxf5butsgSF1EU2q3vjVuEiz2CA91Q6MkB",
  "key42": "yJJmJHKbHybEEWpVfXW2Pkfqm45iZ2ttYKKL96R16fgDSmNjpduoyUWs9TKR4VFiTMSRbRAySqCuJKtvb6CFSYe",
  "key43": "62XxCZ3skraR3hvwNm7XE6sq6VgkhNnnodEbi6BAighhbfF53EXeN9Mjs2BVKRLbmkN3KYi7CWRui7oBMXtWUCNX",
  "key44": "3Y4kJfAQo5LfriszivwGjowqrqp2D7AHi2q4QUr1BKFNC5TTBqNneyrhoLnMXot7xaVqMbWGQRazBoKwX2Yr3rBD",
  "key45": "2MLAMMXTZ2kphuagWd2hjAvsWGupQNGs7JepDL6Zg3AX6cP4oipb5zBUE5t98g8iv6HG1NetttNCKogwns6F1yqz",
  "key46": "2JiYKa95EDuv8eUkj6SJ2ADVrpk6DY9kiqvvdApMCNTBVrnWggKCfCYqGUvgkii7tDwMmE9SBZHCbJ5v6QpycqVM"
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
