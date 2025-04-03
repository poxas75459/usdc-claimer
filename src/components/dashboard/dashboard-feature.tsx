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
    "27SN6XHnH1NRWj3g91h4keZyjNLiWP38RKw5iq1FwTNktoaUPupwqowVYbqsF9gK7Gm7uqk4H6KA9gsaJ2d6uNhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PoUbV6spdbPjbQCTsXnVUbWKK78dAW9AHRFXf4XZ19xREzqTndAG6Keh5rDKALxWNmMp9bd57woSRo5KgNUByVF",
  "key1": "5dYCMuphX9VSgL9NsuT1pAv7dGyYnu1Mh3WjmHdUqsNmUkqm5jSjM6CbioSSiC7GsaLXEWRCeUdA8NDzouhVAjib",
  "key2": "2o9wf8qJAsa5d3kutthxnozy3p9TqyuETz9v93LYcoziP1uBiXcBWpq4egKcJ7arKp7tTzwdEoLkJRAETtbTfyyd",
  "key3": "9mfMTJSG8vF6SfWdiHutPccmKm8qdG4Rj6TMm86XJD7YDrRwtRS3hkx63F8YX5nGqTvdmZxj45ggEf8tqbv3ukd",
  "key4": "4w8hvirkwKZqBYCwFSXbYKJeGg3x7rn418BmnH3aQyroKGi1R8k5gmgg5e3ww9fHT6oPP96MFMXb4Zjn8ZsR2FD",
  "key5": "5UQ7JFvJjQvufpNJq4Btz5xUET6qRhuLMoK2CEvnqMhWWcnt6XBufam3LB71zfAyfr5ygdgu1S5vxXj84Ctsgv4o",
  "key6": "4kwJVYYhf7yztLz9q4FHyvKoYKfPS2zrkZ8rm3wsVtMNozC6UKiLgS8PgKyQMi9N7c7tG2g8zc8Czus4jUetBxui",
  "key7": "2TLeaogcabwpHecZbYMRUgTe6Frw9fAxxe7fwrLAP82jXkjTpT2kC5HViZTXfbJGCwXf1xagn7eJkh6aDry1sdd2",
  "key8": "3ErYpuoGexsiFWHTeZmStpPtqfVfZN1jAYpRvJiqr3y6sYjkYVoTn1WGf5pJCddG8CnHeZu8gVyb4SBmudoQTgEV",
  "key9": "qrxLBhR6YtcqGLKYEbS5FXYBvDExEFMUUKGangfxUwJhMRS2vzMnLNWddFxLMRCB2yiQbXEvFdTZ43PoLN6cktb",
  "key10": "5fqMG63PirRPDYetKnWHiGr1REouLR9Tz59sfFBSXdv8DfG4xicTGCPwNZz7hepYTAFpmKnmhYbQy1kRVkYsfoqb",
  "key11": "5vX5HhSRkrXxeKW75AVCZ5RsKdpTojiefNudFtbs5Mz3AZ7YFwgCnNWYdWvWnEyBddda6rP9ETmUuzwAhqzhwDy4",
  "key12": "5RY2iXp2UmzSSUJbVjkHnscVz7mJePebMLZ5HxwPRwhB26pMY4ecccrhfhkVfq6tuc8DmSgG9ddAwox62XXt219i",
  "key13": "2SfFQNmdvBDhddcQS11Hjs64U7EzNA4dtVdXK8qP8oBASD6EVbQcRnCht39yuvqjQfKgBVcR4n84SZU6cpcMSbfq",
  "key14": "RPHGxhrSooVGWMtC7Rn8ZuAR9LywSRyiSvsm2YnTMEiAiAFxfKJ4TJNdba4CjfU4Vu6fJSYAQj6ztoD89oXqpDs",
  "key15": "3iP8Kk2yU9W4Ngf4MyzxJnjzxmQg6RbXXkFxe9U5fpj8ZmhtHfB7p2arXUiD2nRvJRv6NybiB5dyhvedeNSMe3mm",
  "key16": "2Qk4UjiyQCEVTg69tZJQp7h1zi33n8zWJ8b5a68udy52uXzMxyzkTXwrTdgs1aQc5A5nCAa2xGiVBYCKZjKKCzXQ",
  "key17": "4b9o6YUBU2oysrfQmmABafra9rjcYpUcf32AqEjVfuEsV9Dy6rG2JTqXYBpCc8jdj9sFXaLsufidZZASRKepqrBG",
  "key18": "61gaE8NjfAY71UkqraGDnRJK2cxVJ2gUSEomosYD1b49aYusa5rrzWxohDsFeMkDjEt2428AyYFBTsiN13jZhUdf",
  "key19": "2EoYdzDqcFGvnpyCPL4VE1CHGDjBLtY7FAbd2rjBqztz3k8c4AZLC7xzSqYk7FiAeyubCewNfaX9uSmpVBQ8m4Ra",
  "key20": "2cUMBnjW82425uzeBjsz9HQekkAw9cDepvxXf8HNUL3rCgJUPY9GupepkdxJB75xuEjKFnSgaqV91z4Ux8Vt4yp9",
  "key21": "m9zrXYzT1vAzJRfpXfdQSD79y19iSuNVAKg1cD31z7DNZD1sF8stxvjUYUyHkUt5JzogpDKYBSbTgB2mHRbJutE",
  "key22": "47XmVjYvZ76zAAfyWysmpKJH7M8BC2Hq6tec5TwQVBWkkpM7f6zSCaoJrp11iBxUsmFtnPduoRLQKa3PoWVZh56w",
  "key23": "59jzjbRaFPC8vEYEGR8dsvDRmksikba7EbLNh7KZjmiyKi2iaQeRSKXg1SpigDMCbXijCwwSZNGY4hmaETh95BF4",
  "key24": "2j6TvJ3p1rwyiYRwua49PF7cEJeK4LJFp76eEBKYVGY9ShbLLYDXSqkGN3z3CpkEqQLiFqMSeX2v2vVUaM83MhAF",
  "key25": "544JnqGPv3i1j9er5aKDkV8jZzVQXNVFa7jwp7hK64E6FN7zB2nQUspu7KBJt5eJGcUQpYeGyB4Cacro5KgAuDXi",
  "key26": "JRA5kP2DpsQLS8oVLLUApVPGN8dT3kBHnw9isiZGuzPv2X4F7izZre215amm3Zh726cz2uxZWQ2c1jjGf4vXppK",
  "key27": "5Y93hwDWrtP58zzzyUYQSRg6cuRuei3PTiG8H3yM3Lf1zYdHvj9N2czhdTw6W38BzbZSHBYcADYkYfxvYZ8SrarA",
  "key28": "3pkPay7VV7uK7zdchsSoixbGq624bjrXLwqFHxbfR3KcKmtkUG9SKnKMBASsgwx5TH59cNb7fvE4UdAvhxNbeeJE",
  "key29": "66DbJMM8xFwFgvDiJMMdGwU8sHKTocHzPDvgtmZxN9Kqm39cN7r9Njz7PDhkAwCXURJ92ZYUcdmr1tK5sGKLJov",
  "key30": "2KUBhC7HRvdiiWxEhMRzTweHuCy3FGdiX8usUTWikX6fApkgbjQbey4ckRyukwGPb8NT2ogX5ptVkV8oqwMRzd4X",
  "key31": "fU7MkfGF35i6C98DuzSZQAcAfd3M1Cw2XfxQSudqhJyPaqQFfr6pdXX3dCbi9X1KxXRPj6WheQf1cfqbiJbvpCA",
  "key32": "3XphrxD5qMVsGVezhXYUBRa7x7JWWfa1G8rPjNc9DJWg9uAgfb6VfPshXoQ9ZnMJzEuLEQnxw6TwmsEunhyuuKP3",
  "key33": "3CnmrTtaTPxtC6915z1TAvpsKjyKpoCstdbXdwaq3eh4eBxVSo3wS7tst9qV92Qi7QCv2m1LMPUexqNVb2BXRtYU",
  "key34": "3koh8gGoJbRqS7z9DZHiDfbE471Fs55tcTAa3dy1J48RpgjRoXqqf4vwRSfErdXiG8vx25hKS8JUXGVqo4WfFicT",
  "key35": "3mwE3GGTv1vccycWWoK2H1HCPKeQHaSvozLMKJcdN5SGxDVwg7ZnW3vcC1XkqRr38eB4H3HBwSzKQvzEzXautVA3",
  "key36": "3UwMpnYG68cJG8pmUdCmFPwx58CaR215vUbWAG9sbowRgVKCCYZWSQN5ikxGUPsjgHicWiyJUJr2hjfppEPRVWzZ",
  "key37": "4NEdovYqCCvNyPLDkWAKrc3iEvhN6R4HGbqMtT7NMZ6LKmBdH9XfBnfUvirdzuc7tCRHfYPqRFB7ia3MhsoSobwX",
  "key38": "3r1ewx5bMVHFgGSPWaYJsYwn9f21e3nHka8cSCtuBQWvvG5BkdQvAE1KQVCpkMF6pPRn6whbvtXoYRySAaRiJSAU",
  "key39": "5YwpHf52F1dortmZmPPXmkb2THXxAuLDbhTqGoBfBmj21MxUNWyXsGGvhC1cvzkUJ2K9TSnD3Bivy7qyQyLXGrWB",
  "key40": "3T2ocCQuiufdmKJJAkqeWCVrrUGzA5hNY63yhWBXXDvcjB8cqieZBgGwYwTLyuMYfEA91eFRCBstVstqgvNN2Gxo",
  "key41": "3qQ7uXR3cUzFHV4xtx5nYZ6gfwk7QEbUW5fpdUYZh2htiwKfVT9UKVyot2zD5dvwmYnYB1xk7vihH387ruqEeHMp",
  "key42": "5pScDRiSCF4doDLiUuneHfHF2jdTKhXyphSDmVWXGvpi2Etzp7mub9YRV6tsqD4LbXEYUabwRJbYqYca1dZYmbWk",
  "key43": "2rdLs2bzCYARGBjddcDy4P7ti92SCPYd3cVE5jY23xsdVEYiCNGPrPCyVWqQ6CznoA9n5UeTRAJWAg42QgfbqnqD",
  "key44": "2wYrAD3GeserXbGwJnwF3nGkdXAFjWWCy7gUTxWJE1jNuDWLiLxgPGA8bvuZhhXa6z1BR9b1dToBm3vw78ntkJzN",
  "key45": "4xoW3BtDGZmb9vwpe3agsma1FRLTCuj7PF8TuEtrwD19WZ9grpU9FDFnPcMfYis5gzDnaoURV7cUJUq6j6bsn7dc",
  "key46": "m32j924GD3pzSnCMiCx2idC66PgvmEKYdo1qkucde1cWi6oo85KEhMSg6RYZbA9q34qHXVn4u8akZr8tDZf2UAu",
  "key47": "4Zki9XFTKvA3FGcD5GcdJ4spXnuWfij6aQkG46xy4hC3WtF4ysJin4PEuUpd8B4AdGvjKYVbVBtgPfSZaG2CJz61",
  "key48": "3qdkTKA4hR3sNssWQh2LS4pyA5qk8x6RMLTL1KSBJv3X213FqmziedPNm8qyRhfdCtFqgAHN8YYvEGoBNP4De33D",
  "key49": "3CD9VeaEZZPxDsp1Ehfasx6tFvNVCQnW3awhmYixrUdcu5ZFoELU7mBbkKDFxfMKCya4SiLBx8tYhzMsWxnB5Tkv"
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
