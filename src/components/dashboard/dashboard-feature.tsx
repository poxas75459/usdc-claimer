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
    "5wWBkv5NMju8hfCaxdAwhudgVRggD7nuWiaC1mUwoGN2pi7ySR5HwdVtY74wT5SzLyByMZYtxJMYcjXL67jkQAyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCtuNmQRxJfhiVPhxJuMsXkH934ps6Bw5Z7BzkAm8u3ZuQrkcwiGfnxioGVGA6khjX5hjcDK8kZM1pkL9mEcGLU",
  "key1": "3YxpNyzy5ULgTgcr5dQ2riJsym7xnZxcP24mvBWrNtHKNXcc4QhyjdrqJ9ttzuFJG38Uew1h3F7uGxdJBFPyfUxm",
  "key2": "2tbuvjmTrhhwcPNuvrDHENGEukPCSKggyVMqgCuZbdiPtUhtA57jCcw8aMW4h4VA4yAgMy5wxSAcdxgNd8jEmJpy",
  "key3": "4DKPNcFgzFYutUjUoEtAvMn18WFY6pkqi8ae3AitBQMrZriC5YGL8o5GMez7dhu56khSPUNaRpQHhtSHAhXgqfG4",
  "key4": "583ceLgeKpzgrXGzSsUQRAqpYts1FimnZa7M2nUsYxTFTx7XuRGxCZa9ss9jgcT24CbEmyMzuGLv4AimzNo9nacY",
  "key5": "4RVa3gqkn2GDKm3qQJdoYABxwxn2Z7twd27ojU1DpJbryyN4AwqDTonWqY7JC2s7xsBRJTJps9R8H8wn21dPvsy",
  "key6": "is2hbmbV1bHvuMKhzqDsULE1D5JCxECyQ5japrCgS3CxDuLXdqw5nKdD7bi6m88SsZTknNoNAnSEnBvWSMeWncY",
  "key7": "4qNPMKJ3fqL1SdeEFERTPHJEzxhdTfsR9tWq3ofWd6JaNGPJs6eCZhyNFMT1qULM3Fn3UPYKdmUztn3PBoRaMu1w",
  "key8": "4qkkoAoBGAps4vwaRdqa5bMBA1T7pEKRRGTFwsgwruvCnchAaZ75ES6Z8EkdhGbjXNSK7TE8bAfiisgm8YXZK2qr",
  "key9": "yeh194jtUnfz52h7vfJBDAgikzyHJcRwzAsz3jWNmqotYGdFeaSQ4tJBwLgBtNzqmYsHRJ7RgSVq5kz3iLokxiH",
  "key10": "3c64eR7etxAyv9Lgx31Z374PxfcRoh2wXHTLVj4BbyJUsC565zGeF41BTPusvTaEUKtPXn67wPcVc81yLt8HsJdQ",
  "key11": "5CFDn7EEccL7d2PmczT2iVSbKpgJmYwdBs92hh7ZsU2rrvPjij6vC7CKsQMGt68zDPWanYd5Q4eDnYbJ2HAFGxAF",
  "key12": "5NWC24zuha6AwcUVTiCp1Nb2SQ6NEmHHnNgxs5WYEsGfLYafpLja9tUGNVuR6cPFCHsiREnV6oCjtM6U9QmGJw8f",
  "key13": "3CeqmxL2HrYRGwWfrbJmwVPjvoopMrr7dHVGpUpwUULxURPnRTxPRg6rTz2r41w6hRDTvaJeupxY35Udqu5P8BQ4",
  "key14": "5SYciDd4TRad9HbvcFhSHzbdtjULiaHrsdaRy27KkstfnqwpSDsjZPmbnYiJPVJDMZoNJ8QewGoLwJa9WFBEQoc7",
  "key15": "2ZbmiCTPkENmn1R6vtH8JDfsKRBpA9UoBbBH6EobKgH2ThcwTp1QakhGzrhRknDNeXxrdMHCH33cuhsnxA4Yc777",
  "key16": "5NLjsojZLMWxUuT8ciojgEvHVT51AMf5wgAk9cjwGLUGmTZqjPFV8xNKTLKiRUC9NLVcFvCQpdRukqwryViHL2nL",
  "key17": "2KzmjYK1YVnnAJWxvuNr3GiasRPBT6CysBKoa679yQ48iSLopth2d18nCs8hJKZGiiGgpGmDBdcRipUHG14p8cVW",
  "key18": "3XWBQqQ4eYT65BBq6k8wctPLCiGQf89xPvXNdrHiKfVEVzCxfxN6ZLMQKiS8GPaxDx2k6THatZNt7o39E3aa3f38",
  "key19": "4twpAdX8Pc9M8G7oC7QS6zzoLLCu4qpVbKymx8SZKGUCQjL5ECoPnCRepBih9Mmn2oHEnCyuB5eCz24Tmg139WHU",
  "key20": "3ypTaoxAqj4g3ibDWaf6zgc5F7g4varW87p9zQGNkdv8aKCqMSyxqq9KSPZLCxWPkBcWWLWWEef1wfzSeo8m8EiK",
  "key21": "qfzuavY6jiyHRLTkkcUtqkVo4xgaw5LBttSEttsBkgfMjxHSu7gyhQwahYmhmeMpGcVty692GBcXqMBq4mRFBBc",
  "key22": "2ABoVBkjcRhdidh9L27pa8oZrTRYU6gGwzQyuqYpSfK1tz1KDgVqz7foJSHpgvSsYWJLFNJdS6y3Jpb6JVDUjnsz",
  "key23": "53UsVfUe8ASkXULhjXTfxKL5b1QcQxAn6cFEchGUwkUKF6NP4XN4Jpb4Nm8bLM12jPGCRun4U4oqc7x21Hd7orG5",
  "key24": "2DkdfXYR1752fVMQqFPV74nY2gQihJhTAx72M9nDtQ98aghABbN1b4ZtAL59oj2ocfkhxKyJwJfBdgqrH5PFitj2",
  "key25": "3Bac1Bs9eUezn45AcbLT3proz4Hiq9pk22rz91Dg2bH7qpqquxUHbU6RCAz8nu127WRoUDSEd7YtWftPenEhnEEg",
  "key26": "2EUG5WcvcWedVPXUEt5bvvDDhkhKS1Ax3pfuGJP8upsMQfR9ktynqGjwv2t5RAkrga5r8uiprbqd9cBhNqpJpMxS",
  "key27": "5PLhJejVQELhUygUy8hFnNkLTRfx9NUb15huSVssFnoJVsDQxmx7mr1xeLejf33cquBEYd9omCQVrgRzCxXBsnS2",
  "key28": "Bj62TuRcataAYUCjFfV3o7wA9ue4wEW7ENuDi9niy5b8K71tUVeyaSc4ZMBh61qqYJ756xvzYAdY1gj9htY6Wfg",
  "key29": "3UHdWoFfRR4ko5ZmSSYYyRcqwiDHahxaEB1kaSdvNsZ4rdQGRpVx3fLuKToFW8jnt8zCEahbFDHfkr9s1rTfej1c",
  "key30": "3U4gw6DLhF4TR5CYJ1eKhbRkZaG64WNUHPhNe5EH5Wn1ntWb3PwEYAQyKTBFoA9mPQXFyZFf6v4Gm1uqoPtHrngd",
  "key31": "5BTEggLPkrvnA3H3pU9iKVwniPiREEeSKvZmTpoKpjedaQ38b2z82uKeGss8Kj31nCGeb1YWLHuWScgzLuTUU6cQ",
  "key32": "57gJhMuAKten9VEWcnPuSk97nUmDz3GNRAMU6vJ7rQMmi7gpCkJrkRT4GjSFdH5f5Br4iXDHHrkbsgZZJd2WUaFM",
  "key33": "477sh1cBFCgvSGyN4Pzk6rn2EXi37Don6d3Gwi21aPQzCqstX3B1wB15azBmSbnAmhVgCdYMfL4syeunyrJRzmVa",
  "key34": "4JRQsxBaiCutaVZ5vDtEH66DCzz3SFk7DW81tkgapDLWJQLSGzik3Bn27r2hArQUYBVhvQxuV9P61SZRzhuwWe7Y",
  "key35": "3CJ2ogX6jtDfXhymXdCBmwALe6MZ5KZ6BkRUrzJLnkGQwZEDJwphiJqDvPgH1B2Qo5Hnx66r3tSJw7i2FhvySQQ3",
  "key36": "3N2ELEFMUvqg1gGrjGwaM4zcBhsbpjsYTSFdUjsQeGaxm4XVDo4B5aBPW8LjoxFSoExjjuKp6BCvnZd9Kp5DmjfC"
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
