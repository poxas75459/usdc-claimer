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
    "2DZAitUy7fQ6ftXJcwRjgQJP84uhPERw6QsKMeVeq61dxx6ivDAqgL66JaHcbt7u737E73zW1C1fquUnha8uQ9Cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJY7jWhgoqvZVL752Vwd1SjYd9CaHBgJ5MHJAgnuqQLX5GjBkF75gz8njeffq6C9PkkXqasLxVYFEBQyN1eG19r",
  "key1": "2PEzMCpfaX6QZMEsxbJyu5Akc9HtBwyLxnJRnBjPKHXCnT17vvD1ujzozFyHzG8R74T2J2YPMRe7RgzYTugr9U2z",
  "key2": "4KEoPQ2bZyQkdPHU5NPPJ8GsimXj1835sv2ap1F9TRCrXQDceJDWvbPoAfT5Lx5tq9kASwQADEsNQhc7SrUS1wy4",
  "key3": "5GtM2R2SDqs2yPxWoQdgVy3d3n1rgrZcFzWBAJnBTfGVb3bKwyo9xUmdCfDUUYZZjP4vV5QSVu99Ud49cBwKSQLW",
  "key4": "4uDAY3iVnch2ji95XdtRRUhJqUVJrYneCdeDVw4RZ99zNAZAMw2XtAHjugjHZLsMuiU6EHr8PNvZ83dRec2JktZ2",
  "key5": "2pHKTsVJHFeUDJ1MBM93tCmoiyHqCqkNqPFS4CtUrmEVTZvvBxu44H3UwuZiGLEcrsTF27endaZ4pXXa18xU8mpP",
  "key6": "Aisdn5xL8kEVLAvoPs2iRnvNPVAJ1WoySm8G1xV5VU7AeAPoEoHMctowTFtKdZEDFih7ib49Dpdqo2YUB4hpZBp",
  "key7": "4xeUSEVydaw6EQt5bN3YgP3TdKCCRCqNKMQ19mtxFkfxPCkiTs4N69PVXPqSDfY9CsooitLYjXKCXJqZJdFZbuWH",
  "key8": "5gVM6wZy7qGKAAR5CeapvfnFkLoqjJr24Gkn6itDi7fDseHJ9apTvQtmNTP5jBFqj5u3BVKU8MF6V4p8Qcio1SKt",
  "key9": "3ydkxW4Wkw8fSkamt7xSq2UfsUoyt4E9NonQXm9PgYMkXetJhEf3Pmk2juN9WQUDV2mCuZ6YQmBoRFQ8vMLtprbT",
  "key10": "5fbf76pnbJXZBSSxjnvYyxWMf9oeRK37rpAyVzfkQNdD6LaWvrG3aWfotddvirv2qsv9mwKfonGLdeRWr7dR53bN",
  "key11": "3VL3o3RMHamMGioWTXQ3BZEn8WL5anZS38UmPjV9fiBAKqgrpaZuvv7WeaGDZ2x8xoZ5Q6s6ivfU4KLjSg16Ynug",
  "key12": "5tCne3mQbvVmpzEL5XV2VgiDbKburynipSfa3UnJazwuwGrPGHEEHgH5ZjwmmvzVatWK6eXDmKTbjdc1ntqvn2db",
  "key13": "4W8nZvdMLjd4Ekge5yfPxPfDT5zwyjQzg5CB4MxevYnPSSEEX3wXgMDgz1f8cCpvuLfmZi6GnMdMjsfXdGhVfHvo",
  "key14": "3EeTAwxAn8kg9LGRp1Fj1e7zRrxLVxAG6bQhuXd6acfcNoHT7G6U4BH6NgpZVhfMTKXLYY48kpVJ32qo654dhexg",
  "key15": "JCRfy1r5dftbn7LxQwCZhRc93WGX8s5pEtdEZrnGafpSK4LdmSbfAoGP9em6RhJqLX84q3UcZU4vm9yvP5cGw7e",
  "key16": "4XCRPKDL2JYCnUUrwQp42ypdwBrxGFg5jjpJnrnXs89zX6u7zH59LTyNCmNggfrWohh579WcEzPzmPgqvUM2L6hD",
  "key17": "2LHSVAmdnEdMYNXF2wnvbC55argS1Vhii3LTGCeibmkgdqdN3LLGhSBV8Kuww4pc9m16NdrqUNQmxyunG2WcrvAo",
  "key18": "2TeWHev17spYkBnDEQcEsP4G3EXF9Nkuaiwo4CgekjmduKGe42hp9ygg6uYH2Lq1JqbwgG6x7T9gRYMHrreD3Xvj",
  "key19": "2D1uHZ1iH8d5qQwv7nvGqC9e3Epo1mRjqP6ft3GhyrEgygpo6ia3NwkMiiZZzMEMUEfUx3epZDtQihiKPajp4chS",
  "key20": "5qimUZ5X77zoCLSQJRoWy9CDcw31xLNoQ9QEYy5yrPiEhq3F3pQCUSMQjZ6UPkEWHX7e2yvtzzHyAYnjei6X4KX6",
  "key21": "5CroNRyQ8D35u6JTHhD6L9piRGVABvigV1TeRnq14fFFffZqSmzLbXm146Xv2scM1FikTXAmWzDaVDJunquQpVeJ",
  "key22": "5VAQN1NBYVLBNrEmhUyzejzfHu5aFro1sdpxg28RFuqiXQvHFPgGMANq3xrey5Jaux9BoKzPtDuYKinLZgzgBpRL",
  "key23": "3uPoEfvLjrw8u7U6Hqy1JM6cWjihsQVfgLzY3A3q5u6FbeDbo58mPdZUC3MjGnXunC4WTo5DwtjE4kJasHwFiTxJ",
  "key24": "4gdyDiTvABY3MXNQjyBejxobZdn97UuMzW4cfswduV2mnUANzvJq4JGxJUytkursmaaiNT1VmmG6tFHJwXHKVRwf",
  "key25": "b4UmR2WeVvkQJwkW3KApjeunZXuHyE2EBdyykpRPnuqh549n1psrbaF8zi1bg3b3gQKdFUGAi9CJ1a7K8xNfbCt",
  "key26": "41whMsynJoMdys3vEJEVQtQNF84FaYeT2sM4Z7AGs4YraqauaxETNyT5DrYfWHX2woNGUfJikKgQQ565Y371WjEs",
  "key27": "5E7Cxkc8cPYbj7Ae4qbNdYFJW7KRLPu7kvLXABSSSjtsMMrPYFYkYhDYUxr9gCe2oyE8c4ikbyxpj4RdEX21jKSD",
  "key28": "NvwFDKqEEHVUMhAoQqobXbChjGLQd8FEUkSJoLzjczk526XPyJ8QxfRJsqRGp5Lpuie4GdJ6VZwmCaYH7apZBPZ",
  "key29": "62jYEBNhq8ZXkFuUfzewHJ9pJ19zgspYCBr9s8ocs6aMd5cjDmt7rCRBUHoGDboM8Wim66U3hkjjRupdXqhTvHLH",
  "key30": "5QUD2fjELKgonzcgiv5iTDF4fr2por81wDohh6V4JQkxgVhtE2Gk5nxQGpUFkVsrApsWp32WPJWQUfHqmT9AFKD3",
  "key31": "3G4iNqFqTUoUfhy3YmepZt8gkbanciS6waaC2PujcRGFSCRDMvysuia3Wz6CpDys1fYES18FJx9FmTDrdVQJQvRC",
  "key32": "3HMHxe5D8JEjzcjMV9eXZNfPexAXiaLEZ18Aw5k8aphQFMZ1LwUmTA5jBo9ftbivW8ZX95MTstT7zdGNqvGw5HTD",
  "key33": "3z5s4odAJWc836sBrGUsAxbgPrBjLZV4D5R3d4jwD9uejyTWSUx1ynQZyXd9x5SGC4zVwxP8mjvixTCwscDrfHZ6",
  "key34": "4zFsjPaZAEYY7WDXZnEVdh67WSfFirKexiSCxf8N78vF6LU85k89siHf2jtt6xTbGaun2umES267A9TLJ73MU4aV",
  "key35": "5ESo5U9aVAzwQgGGQHNayWVRkMRUy8D5Pu3ZDs4w1kqhG6zmqvQC6dGN2xENZM6mMFKLLT4q6jagjA4S7TSQE2wc",
  "key36": "2LYvrWbQ7dfMZo1fWa9yGbXiamDpiy81Pk9Vdp9SrG5enpspZbG3Y5kC3y6BoY4sCMZ1VbXqPeFktHT7oVkk21vt",
  "key37": "3SnqdZcjPR8wipXfPEf2MNDfL6wdxcSCXT14rg5pa11GTcpZsuA5HEzZDwrG9gWGNozLvHRVVBAjZjfy5xSSudzo",
  "key38": "25xDiNHNbgv6FWaR7DhRho81bKi58GAgNW5Su329SDWrd6r7VDRwE1g2BTJgx7XNU5jtRDPu8utvmAVr3AWKG3Ui",
  "key39": "3UxtZQELa4EanUeGdEnmkuKQFx1h1eiezAXqXNYmaZTd4BcAjrv77Qwgxo5wrjAdmXoyf6d52CdBDjRV2ZFCTua7",
  "key40": "5d2amvwqAe4JmAC4NnLpoox8cU5Wd8PwZ6zAnAu3FcVLja9UKjyKiNYuPGzoXaU5PMLgzQ7Sk2oEdwGoq4WwiAFR",
  "key41": "5yMkZ2BPjzJiBATHjvVUwpEtXcwEYuh2hh3F7DYiFoK1GNegxRhYCU19iiMQi2cTbRD9qcaCZxjaL6PA8PdggzYB"
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
