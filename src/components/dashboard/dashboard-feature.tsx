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
    "5gaoRKv9PeiQsAxKPwoz4zsjrdYYYJHy9Rujv6hqmFWamQRdFzepLyr57hPSV4GXpLPpCqLwYooPGAeEGLaGcimh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pmpAfc1DpFw9gEKVztuzU6fNmHCeHPtVYjaMZyUmJXTK2W7rLexisaaRPffe3yynT67SYqaLRJAxwx1pYUmXmyP",
  "key1": "4E22GHZ4RhvC1b2T7n1BgG84P1ViQusUUN5TwKfJJK2iDZKGVkitWCXFvGw2Gp7pP9oyKK7ArQxnoG3YhjqbsHmA",
  "key2": "27b5ogyRkRDA6fdvkKiFaaNYZz5pUkCr8ZHXqn3UCGW5w1Ngvm2QYB2Qm44FfzhxCdQQULhJMZ3D4iuvVjvn7U5n",
  "key3": "4LpMDytXqDECWuhsDaKHM4z2GGY3G3mg1ZpkQgUi9xTJrWuuzfu3mRbsdVmpzwJyVLGh4CHYYXuqPkgyBU4NCLYs",
  "key4": "5CdNh2mV8bNR4Aikn1qt3tN63uH4v9vCKY5FTsqAQCWS1rNg4AtzskGoFUBz6rbn5sr4drezdi28DTZXPwg13rd8",
  "key5": "itLetpHjm5Fcdy6VTHFMwvRHNJHY6ewfoM3pz3xjmn8JHKrqE1EE1BnTp26TvNwS2Z6yQyDdKrx2ipz7Zffjvjp",
  "key6": "sKT61YmmmqhVDn6jPocbsSewcpFWYrEzNZLKARFWpa4LLegjrjRBkmatFj7ctnmuYpYj8z3KeQvVtxkPgZYaoR9",
  "key7": "2nwugvxpaYtWBUd7VrNGuvLY24HxR4svG7eCRXYQKhUoisyfoZRH8zP7YnQ5Mg8YE2kKR1ng9hJMBMnD5ucyDfAZ",
  "key8": "4ALYZCTF5BRi5RiZCTc5Fotmpcgan6dnTzy5kZndihUcrMVConRCVK6uSbEM4ek7p5M8EhAxg6BzoEpUCPHEYcc9",
  "key9": "2Vm3o9GvEtAsSVsRd1fcRgmWeABc7CFvvJREePGV2aFDZNXqJ9Hv2VSSHSBU6zP6krANuYp7rNYEeYT2bdPQCCnW",
  "key10": "49cnQBuAVTBLtCFE36j8YUiwaWNLMWFDcys74a8fihXY3D84TH4AtzYCdYuesrswaeneDQL2x6BQS8pJNHvke4kW",
  "key11": "4xPG8PW2wG7qvhxtno4GnW3frb4piuBMUEEztrbk6DkWVz3n3NVjp5nt4Zi5Ldmo5LrusZebuUcJRbXD2yP5Br6K",
  "key12": "4GJ5CrasZrNHdXWBEFTcghYMzKdZRMnWDAWSLUsuts5kpqxoBziPxBJseK12sWwTovPGUtNFrk7oMQDrAWtXZpxF",
  "key13": "4rKy2bgu3poKZKsqB37rXT4TRUKDF2wS6hCBfS7cHbJKHo723X4iibnHuDgkDTQyvVYGJm9nzGtxaygHztq9y5VV",
  "key14": "5QxYc4itWBU5DyiBkufZhEd17aVsxJXShhmemAsAcvoMsbF4sNQFRdCZE1iNQwAnSBN4CBWKsx3rgV3ENJsL2xic",
  "key15": "8efSyzz6q8AQ7NHxBigB9q7tjznunhUm5MyUc2FwtoddhChvHd7RF9NbzVrpzrqdiaXkMgfiE22i3k23KU6jNcw",
  "key16": "4Z3xWxNTCqavrXqAFdojpuCX7GRBrcfgWB6VnSBRSgYfNkLBbpvMGFB35CSWnr3EqpEkXpn3Wjw8cumzv8n5S7BM",
  "key17": "4SnKUkQdfi8D7tnjecLcpQ7S7sMfaCHhgdG4N3VxnDorxd6DvD3o3teGr92wh8tDZLbdGaEKNvqFHJeJ1efwaUaN",
  "key18": "4wJjUiXFbQEjp4guyxejDqafu5VsZVqzVhvhCLbsGUwFVbsmbaVM7U5QHhaMAq9ZGPATCFgoQe6oLpXmP3MSkns",
  "key19": "2QPbMMRjSLCYT5gy2ZZRuheENYjrp3XDdcGTkiR2Ut7S1iZQ6ZnMHuVZWSG6oe6gd74FFT1nb4PvP5Gg3NAXsdP2",
  "key20": "2WQK1MaevHpVWGbHiFbkncsacMZ4r21ewFpE6fnsL7jr8VHhfebtrMfAArZcpVgBjb2ju5YYMe5HBz8momctyGhP",
  "key21": "3eDWJDT1oMTWpoCJxpZmmJvWJZ5yajdvZoD6tRBJxkD53kPgSxWHRTu3v2BJLiSGAi8twCqbBjKYqMHPmvbN8STT",
  "key22": "4JJvi27eVnffaQLj5Rp5GZr6TJvwH5rWCWdsRYWYs9caHqCnMhGk5B5GeyuHC4jFZ7x97hQ6VYNWsHxFM8UVSdkz",
  "key23": "2nZxgqk5thMvPZmMMMpip7Fpr8RnLGaoUTuDX6VywfjsCsyCj8YhpP73wP56WPf1tfy8fDRF6GcBTwdhKXyB5yi5",
  "key24": "3Mt4CvLHe6twLA9fbXghAnhTPxri5mHVYAmyR9rzDTmZMVZnHxVpjaMqpRtqN44275YgRrXvxu9r5zwCFt9BYSAR",
  "key25": "3ZSEarwajuiY8HQMqhB3NA9UZ4VsRFi9v3AC9ZqzBrA4LaWtiT9MB148wj82Q6WsBKkzixyYYLfBEEbWotmtPKsj",
  "key26": "2tvF4jdT3uwY8qXeGqPamXcwtboZGtUETnW7GvGxPSEL44a9Eit9xjo8YAD4JHCtzPtFucjrQ2YqNCCeUqazDaLn"
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
