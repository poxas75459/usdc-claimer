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
    "5mHLfE2S3eFcXsfuVrKxkK1Jj9uH5rNwF1WeAD8PaFoQANsWmiiTgN7BPziqFNzyjtLzn3gDUuvkKr4D1yAgyWhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32HS88GhKVnxyqaq2PhstiD3ZYWoz751NQXEfShaA5NkMB4mW8MRQhATma2XM9UKr85q3JJKHFwe8iEBQT3dKjUa",
  "key1": "48Uhdm8T8cPL9ZCK3HGar9Tv1joo7i4az2ctXxn6ciq5p4U1g4YbaAnBPqwhc1wwRnxxqoZ8mwVfwA2dxakd4Axk",
  "key2": "5htABzy6zLaXTHmeiYrHaBTwh2paMS2kWyompEJAgptzmJDEQgVE1epz65z9XzFowYYWi7hpKvzTKL8nwvuhem4g",
  "key3": "5uZFKQTvpcCmXdaFqiXbN3mgdtUKJZbcJgRSiGdWfW8oaWPSwNFGgMShYdxA3VhAC7JDWAA1VsQGxr9KSPSP9cwy",
  "key4": "5sDU22poMuuL7VLTibxR6yxgwbusBGvuLjnRJCtcyXCbQdfci1mMscGeRtyGBrjdcicH6y5rUGfCJFrzkiAJ7woW",
  "key5": "2cGycUHNHfh1KhdAvaCvF3MFTR9ngunN31SrS8shYs8WQyYDuBnL8tSWtqfdSbawX7uLjDn4Svzx8f7TVWxMSAcm",
  "key6": "55GvY1vzsZHxKJFHQDLPJoqLgscsDQQRKoedV6Szp6v4EttQrarJNhk64eUPcU1JaGaYUsMKSrqHA2qZJihS9n9q",
  "key7": "2YSJPrad9b7iJWGd6Ss1aNUnmaXkrR8Jzcuk1NeshyupyHzFmgsUdtveTQ9X9652Rjn7x3MeanxJuDo9U7YELUQH",
  "key8": "2FmLVB5KmJF2Ya43SVPaYXQJdeB61tw4U3drb7vhzMNL9ysHuvCB9CUEhcP9k9mSM3B3DXKuA11E6NDfJw842FXi",
  "key9": "55C5LAqjiQtqcmuZNRf9NvCoHAZHxAoCkuN7NLn5i4JMVxYxhYf9Wg86uADfnkJJJtaLLT6DSHrSrz4PVTrp3EZY",
  "key10": "jMqsAKBvvTSSP841AtW5JFMhFAqCAmkuZTUYEsJcTdmzAgzAA3owaX3ghGxMiX3Ukk5hsfX7Kit7u27xt5JsM1c",
  "key11": "3iNGzqMJH97M3RaFAG4QxJHnR1tyUQKnzKVuFsy96QWWxqpchEChSLvztjjMd5kntc67FQPui8kzhYCgnbcn3nNX",
  "key12": "BRXawHJCunbEvGb17yyJWP7ERwr5achFLfjVvwr6gxaCA5UkhqRGPF7dPW8AAbmeJBxAawSKqjDnEec6wMW2UKn",
  "key13": "mBi9ajrSvNj1e1wd38Mm823mfBf9TUj2h91b54RXbrxULG87zV1btpqiyktgKpBFDf5ZatqmXdYktfLMdkaiYKC",
  "key14": "4dsrCJpSWXvCUbYHr27cubbvYjkn2zC5XBHHJGW1zHYnXJRgUcBWRSHHGYpJtfs8UHhFrheL3JMAsBUTAaoxRn17",
  "key15": "38cSKvyUSsqLSrVm5Q9xzkk1AXpsbah7pN69CjQKGTo4LKYgkaReEhbFQ351SVwCCjVA6ZjmdWpbHn8mPwdWVJ7x",
  "key16": "5iG1vJ7opbCxArATeTmpU4YEnzihTMsa9CzjjHrZas6jq98Aiihbdos8bsAwL6TGZthNRocmkUncSR5sM7evUQoT",
  "key17": "3XwBejGmnbh5rdNMZ6RDq5F4MWTu7hm8auxByBD4DMi1fLTo4HjUgzoXjNX76pWSNPNQCE5JEqzZpKj4PXzXy75L",
  "key18": "nAyS4EE4Cjvt1SUJ5SGdSpfbuzh5LgGjeEiAwXgQAf7QzhX4pngiLHaLpK1x8d6FcKZTZQ5yady37RYHbEUmjz8",
  "key19": "2G2iv8evKkwAHnqAiceBtuHsSM3FGj3rkrsdiSYhZfmYz3n6JTZE9tN4efQTmSh2396sbAyUZUnvPnHVLib3zCX6",
  "key20": "3X8yRq3vSktXCWVHeoxdQRGgY46SHRjMrwyEuqLb1URDJHMd5XfM3Fed2LMCQMM2vavMTUwNVz3rjoHehBLEgc3g",
  "key21": "299jhy6xfgBRPLRK6yGdx47GP28wFQHjgakuuoidseKa8SiDJB5gzNqi8DCm3dQKcBmKRMpS6PbR7u82DKFdqjMd",
  "key22": "3hUAbJBFbqMp2B1YEyaZaeFuvdgGypv87htrEE9z3MUBz9138MPNEvz3jZvaBM1jFqsBCkhjx87kV53GLXEJ8Vme",
  "key23": "mtZvQLjMJ9RtNuFxZYcHh8xQLMs4PsgeXLdAZtJH1ZA1Nt55iaojM7VafEURE59Ah9pPpkb6JY9hWkvfvHP1mVR",
  "key24": "3o44VWatSC3FhZGmAzKEPBPdRLa5YpwSh84YEBqWzBWudUC4ZQb5BRoeLfByjLCsRAVSEc5MougWsEPHb95bUheW",
  "key25": "2xouGasF431mCJ5TFfj8vykujKRyfC25vtoMM93xctuaLGxKHAzHGmLBT6dpe5CJ5U8epzpZ7xXH9nZ5VX6BzqDs",
  "key26": "48TZjdcQx9Rv7Tm86rQyjpvCFkCq6zB4syz9zNwKhkcZvL3sZEVUoxnvhydPX7XTEqSLEJHBpruTVKG6dyZqRDSS"
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
