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
    "3NuhKPCYshqAhtrmWmn26bs7TFY9VpSYLHHkpkzBdLhASzJerFCjEWDQ8DLGmstW7dbFKACzJR1zi4Ggxbae5p9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23JEMxX1uutpaKcKkJhCo9NmS2BCfzK2ZiqTtWDBTdUPt9YUdooWc7LGuZiBTFguAS1ESNzRejDFV1CAsS5TyNmA",
  "key1": "3HbP8dcgfseJbT75SbFWmKV412KFsHuR4rprn355QHwivr41f22vbCuqSY273Fm6ZmshsiScmx2sjQF2pqMh88b6",
  "key2": "2HSSUEgXugEG2LNnaE8E9XXM4aL1hKcaPpD645BXTBvopPTxHzdYoWudJX3rxxyEyBMVdBcJWDhcgNXDXfVTPczT",
  "key3": "QhN5xYgX2vrrrnWbafKyGpUTzeMpLJUBV9VuHUChTqWqesLj2ZBJuCWcDHuWnqJCNyBRzPP4UqjJpQBefkCP9nK",
  "key4": "WC3gjQ2aWAXq52ACvZdqhxMbvcfbmgif2P19mmndw42WMtXbj1x4EHMScqkBD7gfHoHFqbxqH87NgrHFqY7iNCZ",
  "key5": "5VeGDneASZRx6iwgHSG83AY2ofDiMtAgHkUV4q14Jq2rB29BZiESuRNJ8nEcyFopitoSvKocrPRWGTK5S4C8o3eu",
  "key6": "4T7y39YFvyJ1L93hiKaBQTYNxidhaooaQkrd71Xxvm5nU99eUhb3SBRMF71oE4XVS4KMq2ypKECiS3tewqyLtzuB",
  "key7": "2BHjomTzEfq1kJ1MJTKaviQZGAqSdeyNUf5WHt2mAph6WmcdzMNTrtkmNaTH5TMDWunbWTp36jpyqWoKzFA3zoFX",
  "key8": "2d7VT2FwDeZQ6r4ZLpsHaVpTSX1XkJZyD41ph1xBWfCNT4CDCd9USbJJX6FVjkFav4dZgtrbMGbhAFREuWJQfarL",
  "key9": "2cfSuKqZdn78jiQGWcG3yhUas1aQqwkchFrpfzXPDDkPAvJohWvuHG1HDrqtvz5ghnPpGioU2JEcCeYUKhyAeyPd",
  "key10": "5XDzc4jyfqufdg37Us2kFkZYzGBchpYXP2QgpxjoHPyH2JGbNPsroeFrAyhh2V5bBNbty8M1Bizn14S9ch4ukDkk",
  "key11": "aPUNgLDN4rVxgc71DoGAbBKzduJAjAeVK9hGddJDkPwoRxCz3tNjSvkCCdKEddZhr8jSuDbPzdDaE6CDng3NfkB",
  "key12": "5B4Y5LdFrn1HrafKWwEnvn4xA4TYBBpYoppXFHUJzPJCDvvHEAdokrFEEqERun4EJsG4pq8UJox93ZJVmmMtWeRo",
  "key13": "gj1qNRx2GaLhvTg4bykwdiTUAAyeNBE6eA4bmjo6LXCAZKP4Qztcju9xJUJHRyfK5p7u21kYG5Q66ADQPuVK146",
  "key14": "4oxF6a3Mzf8WiSQeMunGAo8thqgsizfMZcUcZy3p9C8WKftUHbXKeNfgMu5ZVfXxzZFMPsAsLRrVFyDwUR3fUrsg",
  "key15": "3EiBGyTuATk1T7hEMCuXCdKN6qRQzN3qGf8BzEVpZAfuTKH3ZrApwqyxrCKYHxF2dzF9owRYBiKTiQZuU8X7Fudu",
  "key16": "48CArXTnrVrfuzZGACafMTr8M4vinTvk4jWLqWxKse3orKNoaNytEVK7zmySZqz62wvwoBB5JtAKffhKJYueapXU",
  "key17": "43LRqg56iR6wxrGU296MbbTGirdy3fh2EhoVK9etWhyHK1HZYFYPSXUzio4X1ooJwyYkGngg8FHfnxEcy69Z3UAu",
  "key18": "3mYwiYvAfB7cTDriRLWrkyGivNwrWjH4tjXQgJGLFxUYr8yTqCY4MVHFMZMka5UFi4rVVpKu51nyVUZMhuseQ2Ej",
  "key19": "4TdQaNJXUKgrZ1veNhZ3WkEPYmNhpEKrzoz8KqeLrGAYMnxWK9rfKBBdJ4EhJrU2L6oTRynEzTT6CrPmYQL9G74x",
  "key20": "2JJ7Uzm1zwx2fee1cgJjRSSSuDWBWQm2NXwdAXLHzW45PJMuGpt6Cc4VNKutSDafPA8o3W731vfBjVXHzhJWxcAz",
  "key21": "5k2iZfYNCNqdc3hmhyBuaUZPCj6Kg4x7d4KziVic6TpjAdBPaDNDz6utWad6d2VpSHY5nP5ML5v8hrc8kAwYGcc9",
  "key22": "4wyi9JxJTzFsoZf5MUGE7WnxkHHrtZDo8cKzNvjczSYQpMGxUhGehB3bZdmvvHRMea4QyjP5vo9nVSHyT1NxLf1K",
  "key23": "5uZwy9p5vS8KWZCCU93gftdcWsZKCpNjX1mSp1nCqvFsBANLaQGbVFS4A3xWFPngnfqLVT4wcpwkGBShavx667BE",
  "key24": "CN3P9E6njCG8F6siwnavweZYG1Gh5G6EY6ZwSNLrRJVCPi5aJ7kNaoWYZQN1e1gUJp4VJAp6Xaz4pziFnppcGq5",
  "key25": "p4ssNu1AS6ApCvyeexfk2UftKvRHpvGb4weXTKQHqfhCTnysLKi6CryAyX8FK9f2GS5jk22e1rb5uz5WsmRJE8P",
  "key26": "4S9X8sGZa2GyvjmTgKjJPFp8NHqrGwoej42RXxxSeSZETTcBstoF3PK7Aj2U4quD4gDHjsEPVNyFixc3GxBXaTma",
  "key27": "4VNN3K4ZNZM3VJURsaTW7bg5q6k5miiEFiRGefawh7AoUzKqFX8kh7w6TF6a4aZQJjxjEW15TZzXvMW1djB6pdd1",
  "key28": "4sUzqa1CjPLzHJoJgnekKvTJza4fY5eUy5j1uj4vZ5zwX7KbM82wVysfUKkEopRvtCDnnky9UDdM1mA8RepuT5rd",
  "key29": "2ngQE9hjSVvB3z5nJrBF9Ezgd8QkjhGbFfXWAkuBxRNgjuC8BfRr87mjHHX7BCYNLo9qWagMWB8Cj9cMNonqSkiP",
  "key30": "4WqbQvJWQfWpNbfFYw8rrPbrHVMsHXQCL1WCiU9XH57jz16HVCo841PrikqwQvYQccg7fcWHDKPbZvGvLQcaE6eH",
  "key31": "2vdTxcHhRePjmotjVBVmm8V8k4UxGPCRPWgEyCPD2nhHKUj8LTc1TjEoX4QBfz93rUUKFnSGQgQGhfzS6BT7Px47",
  "key32": "3fTkE2uHTbbjVs7oS7SRJ5Jw7sGvhmuMSCzvq53YarBDCnuZfkC9CPRyNfyHgti3j7bBxRbN76oNfrWNBNvToknJ",
  "key33": "vWLjYKhSk4ef4BbHY6RKWCviEiRPW7mfaktdDcggBSRXG7ZLtEuDRNCEmpbELt5x5iRa2UpfEUMSK2vhrUUoGJf"
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
