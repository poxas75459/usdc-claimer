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
    "5CVaGuQcFuNkjiavq9kxZAcwtsCMdrUFn1DPyMF5wTEUd5nLCmEoTMkuJ8q7u4jPmGq8xzjjcXGGTLRicqUVr4U2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vxUo9iANibz8vMGChPbZXC4Y3YLg2JeQ6JcN8cbwPPocE6wQg3jJxTMmqqLSoeM7CBzhECWQLMqEifcdsMKyuJm",
  "key1": "4xdTjJbzu7ev49a5mYfaw5ABENmNCHgmbEAq9og1SSyKKQpg9SFwyYs7wXgRGrfonorzEiZQNR96QNcmYync4fhx",
  "key2": "26VriayRJHBJbjfXChJQ4CMUSfLtqPv1Hu5PdMBDMUDFafqBQSxium5hTBu3bBmoBMecHjY9XHSmzRja8jcb8bTU",
  "key3": "3Rb4KJcTCmBrsbcPrtxNfkthanHvJ9wj8onqmZRi5RVJomTAYCkpvRAdmq3wwpknNmenN3ShmN4BeMGVnqbTsCy4",
  "key4": "56otJfmbBKsaGtSyJ2wp1nfVfsTq8xT1uvX3acZvSx6L9vCkPR7jbEHNHJn3SCozYCoi2fKn2RbsxgKv1DMRHxrW",
  "key5": "3uhVgyqG4u7NMuJ9aY7sn297gtxt7yUqJh11YThDnRd5ec2BU32Jj1HofZ5ELDFYhJ5hL4hUK42G8Y7ELYggkhut",
  "key6": "61RsidW3W7cCvZ1drsiY9bXgqTAEq58njV6k9yjXxqzJPyHsxdGzCMo3fsGGn41rCDbLbvfQc2SF7jzB2BxG5qSu",
  "key7": "41CnUYwKLgvqgJKEUARh542uygB7L2gms2ejq62emZaMN6bd5XpuGs1cV63eKvfnpVjgQg3edovjxL899j8vsgB9",
  "key8": "zvpTr8DcYNR6QkaWHDaU48ng3iwCd42BshU1w8evuCJsgr7nxfwKFmY5TFRC6nCvQrVud5pf1wZ5LcJbfxBhFVm",
  "key9": "28x4WcJFMURmHRcyGjzBF4Gq7Pvde1zTRUAxuRWYsznkwQK9yEMSZutazy2UvkebqSMNZkv3n693f2aN836DYiAf",
  "key10": "3iJRRTP3ntTTsYg9yyUf1oofCYFwLYfS1ZCpbgyebBsCXbZ8xLTLZHekTQMTMr1ige4n7s5BmR1kt8ggwNHSMhA",
  "key11": "5VUrVnHQqMebGFGr3BB54G8RoY7LA7dcX8z9CRYEJDUwRgvwsQM8DHRAVNztD29JpsEwuVKu8Gx5dxvZjJF5e4Nw",
  "key12": "vB9DYVb8FyknryMNyVYsW29aKUT6rPcC5YNHCpoapdx9cYg7uyUVXS9w3Y8G7buzAbEcmM28cvAyx1rHvY5D2Lf",
  "key13": "434tmPGBXgsGYQvDuvxSrMbo6xjSzweNcEtkkRrAopAHBSrBDG9z1KvoaHmadV5c9PU4Z3KFjwzk58vZ2J2UgcJu",
  "key14": "h2ruUKHxyEGDFNxk9fuy7tyAmqAjYpMarxfbovJCSFQPtQCQuBCgGxcxYDS4nokDowHZg36YCv44R2xAfm4JDvd",
  "key15": "bXG4B4frsYwV95A9kFFJ6Q3nD92bBtS5XfLBZp8d53rv4dtrRCW8mQ4HRnPkHMFNJwonTTM8JAKLKwi6oXiqxJC",
  "key16": "3fpCvY2fyb5JQhMA54vnkoF7kQkZS4JMuzXeWn2h9a2PVyA99oV2MktA8sev6shr83Rm152ZMnh8kov2A8sdZifG",
  "key17": "djmiux5hAwbF65Dj3uMGewMD8EBC2f6rEbmka4S6FG4f1dTmw4LVPyghP4TxWCoJfPN2JAjT7Z7NVYevaX4tJKW",
  "key18": "4wiiw9Uw3hfMmyhM9E8EwEm1ZwKLUXrEt3yDSLA8NZmjKfHv9eer1eV8K5usKYJvLmEUc2N9uqEWhqJmNwREFx7A",
  "key19": "5DJHLBBcnxsi6yiSyjaHhHgeXEmutR1ZHZ3cx2Vzz9eMov66MgYyrjggV5qMPsZG1dejSqPLDUMYvKQbghdgt7am",
  "key20": "G51x1nHKboE3ctFtGF9Ducc3csWTj6Kc1bzusaND4ihQ36GxVhbR3QusgLFaBiNsaD5xe1XLZbja5FUbDjsfBEB",
  "key21": "2cej3ZmW6PUhyJj92CLuWi6nxWxFSKa8TwSLYQ6YqZhvxcDePQ7dgJ33PFtUncRfqzZavpZ7rM8Ebqg6efUFJ5Sn",
  "key22": "4TXpZPVBQD9ryaxmHfMvEecfmtbPG3yvptKVpYqcnXTBmrgfuajSABuWtJiiD3LCaras6ym7QZ6EhbnFCSQZ94vA",
  "key23": "3UW2s4NEmsheR1mvxWj714VT74gzZjvrzVNx3VqbfEuBeCYEHSMDPATGRJPTyGuH5JLPmVCvwcLxRQpfpJ6cMLky",
  "key24": "53ySVgQwFdk8oAA5xxZgE3gudqFqX4RwtKTkcMNh5eV7JQZewMMHg9pAJFeHw6TXHnVBXFQ2sWgBF1BW857yMZ5E",
  "key25": "2WJhBSYfATUXNx8J2r3nieapEtSBoakNkHZUhzjQ33fWnyNM7VeaeEwS4LG9mcTwqSjfJ11FNXuzacByzeyD27kF",
  "key26": "wWWYZuELueZAA9BBdxynJUyZzpEMXdsKZ5BBZhpcA5mGmakFL4ZQhCADc7Admo7VNVHE7pmgSjAapkPfgaK6TV7",
  "key27": "4XwEfGXo7vDt3zogeq4EapSiULiHWNNGkYT7bM26r6c6ujghf7DF64BjjHmh8etE5RYue4eFF73PAWJYxJaBjmmv",
  "key28": "hYz2sBfMYPLJcJZ8s5sxeYYx1utqpARaQJDs7oxiuHJang2TdBfgcG2LDM5BWhircrxLrn1JKiszNmRzeaW2J8t",
  "key29": "Ce1KUy44swTogvYf7aLApF6qAaT6yJkKcWhmxqmWbHbM5Wu9bPXn1hE4eBQ7LxMYJKBmcQuQKLGFrC3Dri9aUot",
  "key30": "Df2EASVH2oEnyjXNGpnAkdgvPwiDC6MtWv3Qr1LUQLCqskeeLJkE7r9vNExGMEQtuUBYyfptqZh55Qd2dFF4aJy",
  "key31": "21NKRgGUvT3TepSdiGNJn6JoGbvvQTSmD7XvTYkFHaFoV4Z4ppx74ao5HoKCSV8JNFXXRAfJMt7tzA7nbKoVp2k4",
  "key32": "3xR7oiCwAM6u4ySHTNTVq6gEM2TfwN9mdUPmmfUSNrAQaGQSQbKqoReRoM5KYJ9Ukn1NZC8EjZ1T1sCHJMD5fq3r",
  "key33": "42Gbvn4BxVdPt3KDK9ZsyRKUrYP5JEKoazRnggcLwGsotcw1hVfdUrExkKf6SwNgyk6FGU39MXKaCVpfR3sVJBCs",
  "key34": "5azLtZwgmBeMgVbeTmhBGcnEdjimMaKrLXmRdPyq25QHjGYtj6uAmcWjWpsPsrFLURkNcf59LDGFSTnDKgsETHmu",
  "key35": "654iCCtV98yCLpoPWHTWYtE13mMA3dJEMRGXXPm6dUFGzoCYwKd1MTwgAYsygRLi9816ZjWzdfi35jdQtZDFyKh1",
  "key36": "2ywBjZaraCim8VAyTZqAiAdd3GXjCnuJ8Ws1dpJu24rLgXHz7S3moc1SaCn3UJRTwoQ6siVB4NwD9uWTJJ2e6W9C",
  "key37": "5BmpSP9dyumiZV1NtwbzYHUGk9q2UsMH46Z7pXTEAet17MF1TVe9F5nVVYtAZrY6YxTwHwgjdgyScRPH1qYUzwMU",
  "key38": "2SzpLegHcQjn9miJCoXUdR7oM2L4dYyia9AD2axMunWL6tYjGGor5ES9F2SEsbzqgqZzLmQ5wW7ta7yBS59JPNxd",
  "key39": "rv7NfrHtDjevL6gzFDXuwXzwRtpq9veA8CeRM5KYfCdmtJXfNoADxLWzJc8pBkaFUE1fDCEdtPr6CV73R1stFAm",
  "key40": "FzesQ5tMo6YncNRbAysy5VSRGjKSSXAeN5Dapw1L3KaZuhzbYDeF2RUaGFRYVGCoaJfDxnsXmjinJ94iadbk7H7",
  "key41": "3aGF8mPnvJmhSQX2SxgdfvzLyDq4oPnvNrT4emvhB5gYw6n3Er8WJ1bFGuB92UTNqJjBEcipuyXvUX9Gty4NdUey"
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
