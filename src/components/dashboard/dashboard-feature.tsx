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
    "2sC67mTBRy17Gz7X6bgUdUodWtnYBdLshccYjEAKqA3uCczhzmQcySkTJUzMZp6tuJpURTFL2sbxJstARjYWkMfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MyKUornQWuCkSjZJiybS2JdRRJzExPEMMQ6JYAy1JGNq2aJxiB5CZWYLLGV4ssehVTxCrd8y5QQu7f5ARu648bW",
  "key1": "5GDfkvKXfr16TaoArgzvGrSz4XwZu1MSHVf9qAKESkZMnLeWdiZWZveJ1Qri3ZGtyLE6aiPtqKCTEaVhfUfqPKqW",
  "key2": "eVdnzt8aXitzk454Cp6mgJ8S4dBMrGg2X3iLGhnPmzh2jaSt3tVDzi6Qd5QdiybZvQa2UFtiqwJsfBqKrSVoW7S",
  "key3": "2RV9ePrDaAuNUWugmBUotppoeMD7D44TxR4EM5TqbxF7Gq5CXCNtxHkdQ58VmALViMqYZyHePysWi7XTX513njkq",
  "key4": "ySGwTcLVVcAbc27hUWTPYWhiwxixhBN5K6wpy6SPTRmgYna9sRRDhjL74VPFtSsAHLxwAXy78pHRX7g1B27H8rL",
  "key5": "3AtBxEBcf5QRvX8ef3FaDuGFBxfvjMVXaVznz4JaFNKwqb4SDDUrqkYvazARENxZcim5stMdmtKef6zYUNdX3b1f",
  "key6": "gajBL9y5MotdUbe4jx9xdyGvzN8ahrkVay6Qexamzn2e4wrJSQYHc7ptMxZYWUjx6ip82UWxdxnmV9pUkPj6dd6",
  "key7": "BTLrGrwi5L5txpHWM4MzH6ewoFwk3nZyRXw6o7GffeNXFCYvz4GoY3oJZoBJ6CzB2nSW7dMbXs48wTAVG83rHnG",
  "key8": "5f46y859gs5szdiMe6cY1T8JabPB1BMJDZbDRhjJugFrQwxHnEtES83whmuCPPEZFeSKUX8h49CwteAxuiaUzyC8",
  "key9": "2ENn8kYQnYvbscFt7gVcm4iVSWg5mG2hZpi4A75djiD9sTTgKsxrsFk2VG35bS719wYzyR6QZDt2SUcy73PJ1SKK",
  "key10": "3uDwdqogBzFRXGD82waZErLweJRvFnrJFUjNTadLsMKLUD8sbtRcP65dDYhX1n1estk3y6aisYsi7wpMgTiJj3eM",
  "key11": "5CxUYv4eaWXSTv9hHgDN4U3j39ns6jdpkGW6mXUFwQtQqWa5fpgnf2WMXBpsbHv3UTcKJx6x3CD9kQuwGuK6MkFs",
  "key12": "2paiHW7RFWkyGpgzxL7bDaWUw2L4uBS2t63XthCX1QX3hsoxA1dnWApobcU9viwKxQYT9kAJxNYsSvBisVL5d5Wt",
  "key13": "3VESEMJRP4PfEa8Jhz7jdkrULdwVzvgo4PqebqkbfoK94wbrKF3r3fP92j9jSitpejn5eWy7U6FsMyhwk9TmwpcZ",
  "key14": "4cmaWjQAeFmE9fn5qspMy5U9XkEpuLtM5SFAhU1D6GQUimCFFQuNZUsSK56whk1SNPUyXcs5iAPGGXPC79v42V7o",
  "key15": "4XzBVmWf95Goi2B9nEQNFfg8aiKYU59dX7rUsimx3CoikDCy6RVQHwm3RSjfguohS1vFpJj2pPxTf2HSJmBzJDko",
  "key16": "5Xfz26sm3qVMeTJTkJyKps7BdMdwAAaHVaBALoHoLUhfDvb5PQLV4ez2AzSFDhv7zZE8kx9U1mjSUMk4AenbCjKA",
  "key17": "Sz1iQiTebhGBvkLCT8ckeKZNhq5enYL9Jk55A6HjkxBUWkcEn6ZSMjZrEQLjFgPFvnDLbZneMhNzKpF5eG5V4ge",
  "key18": "4yyx2x6gSbH8uQoe38RHRMp5JZM5u6xctpnU2RttHWuXxHqqFHSqH3CqmKYHrNR5LB3gLDjFGj3XR4NxUUACELiC",
  "key19": "4SvZ1Geb67QNWENNuqya2Vptj44L4bcriewUTK9Jmq9pWmjHf6jHuxrSqJYoVVN2dNmdbueTsoFP1bNLpkFqYS5",
  "key20": "4A6wAPF1jttT88LuMJ5dKAS4o4s29rzwEk3p7qE6uc65iHCRkybxMGvAxP5Z4mr3hazMo5y8rKgEbpkfftoHuqBg",
  "key21": "2eGMRZV4RYBVHdVvWJQmRTcWVNuupJfgKZYu8sAwwmBR6FZpeVevttfLHQQwrTMx292KrSSErreowKTfiBgt2bYd",
  "key22": "4F1ndu7YbYRNXKKviiYtUhimJywpvRrW1dQfQqnDpuB34qusZDJRaijenjnPPqWB8AsFDmgdVTCsQx9GCL69WV3Q",
  "key23": "uPqjMThPvjjpvoqJ4WU6ppTZzL4QPtVHVFZa7BZcKkakeb7Wa1sFd6MFkoBCVwxeg9p2DGeqGcFzQpHjzNjb13y",
  "key24": "47VCC3H1NqPx7jWCk4r1uCGyADKwHFVyWddBS35pn4cGsS2TGRs7Gb8zi1J6uuTGsdscVdbxfFxuiUdwFbzcs55d",
  "key25": "2U54YZ7vQpEYprxrqy31FdQXt7SyGAbd5wKtTvqp7HDMvuRjKmrqiGs1KYgw3S2HR3uP49Wx1E9y5QxPnUv7PXEA",
  "key26": "34Tdivt4uREsmMjxDBnUBh5VR8K2J3D8SbaaARqQQrnc3a3pMPeezeAQzG7CuEoGbZTJmpABhAGCPdNJbAJu51ZS",
  "key27": "4e63Utdmbyt8AbC9LjP4FNN6AkgoYzfeCo4N1Rfeonf97Mpd35FvnfuFamxP4BH4EqMeMqaXRrMkPQnVFd1c1oXV",
  "key28": "29CSKwkiLSXmYhbcB8mmdPFetW3iiUqJn5VTLtqPzFEMGHNnfgR2ZFC3KPicVBw1N9Lza8hRHBEu2198fSjBB8bH",
  "key29": "rrmSopAb4dKfsMJPkwHHkBqFmiu2J7hWiBRhedNqX1ib7GCdgv4xASFsSqttGwsEwNsFbK4Yh4pTucpY38EwYVM",
  "key30": "3Pf8MZUXQBXvmXKsKfWudssmUD7Pio1onJPeB1Wi9HH1Jzidjps44mjzszvohtcy8XRZm2WJELkHvDkLEWrrFVKV",
  "key31": "2VaVWfku6dh5E5pb2qKwKPp9GUzdPhAHdhyTqm54ADHpnJqFBVoWgUH7SN7w8JGBcCC8u9TtkqZ1SJ8Ty4TNpYKS",
  "key32": "2E6j6cva8xjkTMBJ7rQC6yGkDXyUoMgPuqiDyKzHzbr2ruv8nxGAQpYPHFbokbyhUBtghmYKJ1Tb3RBPPzFYQLSk",
  "key33": "4yyaGropYymhwJiCv7mRqgdF6FmeXfQhBeFyA7Kuktaug2ZSvYY5THZfDVah88mcHACvVadUzXZ8KkGoGLBJoSCX",
  "key34": "3AyLvudzbk9d3rkXo1rm3nyJhonzVNm1dKEWgDQnyNiYhcFUywGXyLCzR9V41SvwZr53w6LPJnW1Jt6bMx5gMaES",
  "key35": "33sUYcEDH5LzhL7JJEK5zHSKLF2ojyP7rzk2sWUNoHLpRGH3KNQLwKG8fuNMb6RLzszpzzGaZt1A6ksdyvmxeFKp",
  "key36": "35nu1Tcd43PrTox21LLVXDor7bWZS7omVMt9oU6XQZQcvdiKfu8UMCtjkg5dAqZWBU28KDvaJhMtokpN4fN7YRnz",
  "key37": "4nTvPa4C49eShyGjUFd55jpeFyuPzVSAQ96DUcWNU1L3LTofzLRe2siRHzo2ADpgHR5ibbwGhR34W6Lwb31cZ1gc",
  "key38": "ShQEtiL812Qh8jGCxBVJET2uamCoDiG1HppjQMCgKyf44cSvbwm2CmztraT9YFYeQJUnutcexgp8CkbgwPYtvDa",
  "key39": "2f95rBNMHq2SDax3AGXjcyqQpRDsABdQ9XBS1LuhKMDXZvZHVgZTWc8QoUfQTro6MFTdLv1QGsZzVhYD1WJe6fNQ",
  "key40": "2wbrsS37kzUJJwVXNgNxPkoGQFbQ9V6QYjG7ZjWKbfCAJGsq9yL7iWqnxCvQ4g5NYUptHC7sJM3j9TfuRxmUEJuE",
  "key41": "2aCjiK6ZJ8EsoM6k51m1nKYC3wpKWPc4mmrkoWJdRBwrDKWg4wm88yToW5dtvi4rRi5WF2g9qfNF5C9a51c4CJi5",
  "key42": "2jzmZJVbYiHPa9Poxkj8EXpuV1dk9U6eusWBBkZshxbRGTukLhTEBrTppbeJz5iFTC8T6XemEZdncks5foM8HozE",
  "key43": "4afNe2dpRNfDFV3fC7KVCP2vuQ3PxkhAFKekKk8pmsrupDiguXEDtyhewYeHMVPYowGxQnNgaktJv4dfgGJshPb2",
  "key44": "3DLAqxSWVFz8k8RP5ys7xohBoMddNH54DNup3rMCWgZG1WUkb16xC3HEG33Nf2hB7kZDZzFGRjJSUBMMRewBJoSe"
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
