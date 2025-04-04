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
    "2onVQPK6EqLj2qoNksbdwLHptfheKVoRd2F2UBkpnD4kJpRyBqnQPE2FTBH2noDz2P3EWD2vVysPipNtHVMZHgk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRMwt7GTxzeeXmVVwprwFUaEznughgTMLYHPQeNCUULoEC6vtoVeNPH5waNoEEjD8RB16j8eDgYgDqELStqo3uY",
  "key1": "29Qe6KHT8ZbYW31T9e6VHEAH7Ts8tYdfLAahTdsRR8hKFVXLKJ75twiakyccJhSLWYL8nsRCNkx7EfwmfZCuCQHd",
  "key2": "24DpRRDwXer689SrXJo9EEhNnJ7SrJNY1JWm5SPGEM6WEfH4thVt1dKCu1Y53nGE2fJeVxhjfrX3dMjvQJZaFzrp",
  "key3": "2HdFEm6HotjgVo8cBTPsJ3bs72vkwRAikfp31ycKjAvmW4y8sUVAQnsGYXmavNnY3Z3cLmnpGSQm6bBfm7j29dCF",
  "key4": "63JUyewieK6HU641aQdznRiSUkcdJpJeW95uHtaXLHeaidB7UtDzQ6PvwkfCMXsEQWF4ZHwfasJ9QBKuFrNtEZ3k",
  "key5": "2riwb692HUq5r7fsqUbs1Mg9E1gPRYRdLUc3GAk1FhUgEUZpTEMoZyPWDvR6ai5ggshtHuHhkv2yx3ejGkUqhDAx",
  "key6": "4VNVU62CHgmTQdy4mpZgxReTKeJBDoASjVzYdhdyqAjtNAGxQyU1dCV1nRUxjcWePkFN69E1RkyufF6tGAt66pFy",
  "key7": "3Nioq42s3jMH3aHGNMtxi1NpBjfJ79CvfsKw8PnqmjQBqYH4Htk93nof56nDyyg2y9R7jDWD1Cuhjjgfg63Er2EQ",
  "key8": "DhNfAqbWSez5iE5fPFgYhxB3EfWAm568vnqshPvdyYeR4dRF4WBB7PUeB3rifkRA9x6i5qyNxkRmzzdLRgFuPwS",
  "key9": "2SWtTwd5X1FgDL3UrQkf19A87UXDxfSF335YpKCYiBUrpUVyTkVMhELwPWhTRkkV9v98iRt22yTW6WMQJJhKFDDr",
  "key10": "2Xr9v4K3rD1kMrhwfxCzSYpBVh3wrfy1NBFpcRX7qvxC7Y9Z53hMCbmcrmsKAVuZExdxJZgH1yon6fcJLrrqw8Pr",
  "key11": "3eugezZyedmAy7MRyeC2NrRvWu8CkSwDF6cYZWfPnxhmbAR9AhWctdCLND4kfT2i87WjXZgj3Xax4N7CNnYywP5x",
  "key12": "3DaBP3HvCjtQmqBCg2q3KtEGDz84xB4aCk9wXA88cNTpJ5sg3qavMXZFdTCHCoo6EZTG3vhVsRZUBW1rGofbcbbT",
  "key13": "3WJsF33d1GrRnChwoa6mzhq1u7pbosDYVN3pKve3JJB4nCgZ8e46SVBVhH821BgfsBJR8UAaqzGu3GoWLKU5E2GF",
  "key14": "4Gnau32BamQ6H79fzsxu7qqRs4jV8RuiLHUUNmNwC4R1AY3Zf1kdoFebCEtSziCgmMu4tLup44JHZePNXU2rTqH7",
  "key15": "2So9qTYXniy6UkxmhrtvumEE96uWr1wHzs86S78jMmDdkpQD8L4e2zYAfyUkTE9jBExmHjYd9fYHDhdzPsLzozfh",
  "key16": "4EGN42X6b6iehLZrLsTKQT89nxGZ6n59CqgXMSmeBGKBugrYRS5S3uH1xmFJWhiVrJ3kiTxhiAr9YbX6891Y7Y2P",
  "key17": "5P9SUxCKGY4EPcyo4h44oFFdb8UfCgQWSWhoemgCWPwxGFB3s6MKQ2DGkzrusx9wAu1UMDf8Qz3gsYNLRxG5UgZ4",
  "key18": "2CwFQ52TWC9wMsX2Egdmcv4QMwobg5ajpps387tKUqCDF3jsykxWw6jm4HDeursyv87a1QY8CWkBGU5c2kpe8dVo",
  "key19": "31EVxsSaKvt4g9oHueiMKWmUzsZf3ecxE1yiWtpUcR6zSZXZiUKBF7W3mUq3tcCBsKLC3ruTemCVpt3HdtsL8S3b",
  "key20": "jC12sFP3yFfYVC6MqHhnErQqGvAvT93hq3MzgYsgrmtohXpT1g8fvNnVWTKp7G26Dmt2j84dvjahvpbh98rd1qR",
  "key21": "48ANQ37WRikkpJjz44SAcxWXEZdHfmLz35jDVZHiwjaEV5TtbrndMXP8PsDobf1wsePnGijD5TtMmWJMfb7mFyDD",
  "key22": "31rw32wWqjgbjHWkNKztvYkNxfLP8znwLGYfyWqcoUL7CE2g42QkGW8Yknpa9mmsEA9T1jh4siYdvpCTMJLtmXVc",
  "key23": "5jeMnLexCyFJxZxuAkZxtNYyNpyqLNSdTjP6AUut6eRZdvA9muLcujH8TKyFnJgVFRU2vMsPXw6uB9UGLy8wqQgc",
  "key24": "5VvbWFwoyY1MLp53zwu6xmLScbAWU2y17qGkUoe63zXZJQpPvuKttGtGs2xAovVSzfFQsDbJRWAHBZAVBtc7qVJx",
  "key25": "2jfLgeaJcfiuciEYsYTCdDMk2BVp4MJh8JhJxta1x4U2VpmY1NGiDBMUmogqH1N8SFhAhAMCxmRC9wp1uH2N75eM",
  "key26": "3gxkxrhfD4b1SxKEFNGSEDGKpkkSQQ7eYwhxa7dLSYMtcvvq7H7XP9eSnAKVZ7GfE9Y5VhsDfCj3HANJUonVLvbX",
  "key27": "3A2afEZrH2Regv87v1U7irFPFZhSNrirFNMmmpfWRHYYsHYSLFkY2CfHyYePXfYdhTdEV8hQLd5KL1hGgRgixGSP",
  "key28": "2sxAQB3YkEu1c7EbCcCdiCgAwQnduPLTWBFxTRz2dtsy37aGv2Fn6fLZgRkZHbXr4ThMdB7F3hvBiBjoDsUZMc9U",
  "key29": "Eg6To3xkWkDtgx8zGHSGUfAB5r6mUnXnPxB2jFUTu3ntPzEgzZ1iK3MRzR2DH8bV3sFr46KLzntDv5AxK8vMX9w",
  "key30": "5YeyGcfM69KuTem3QndAGSUNWHB5cU6pA6xNP6JDtRTiSXJx7JFfTd9LQbbhmB3Uy46PRK5Gk8HnGqhEAmNZ1XW6"
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
