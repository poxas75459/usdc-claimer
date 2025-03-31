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
    "4VM8so98XzKtQ6r1UpCF7j7ZX5GY3jAQgkrbpbLB5L7kAXc6LtTeqvg5wHVT2xUqwJxxqxtFTb2Em8m4ZDkhSBpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxEV5SBYXgrF2EpKdA8xoBXvWc8Pg8bvSLZrJbZqRpTmNaiX7qAEh9tqVdsXBbhrcFkvfqnK7P22TuMhmcZmyte",
  "key1": "61YuHXxvDHydB3JXg7a1yw57KG6jDc71BgNAt1MGFfBfEVQJNnfc24GvSXTsqVdKnaVQuR8ApED1FUWjy3U5F1XL",
  "key2": "xzCrjk6sDkC854BpZhPg5MiziWSVYMMGqF2fw6BMK3SexougRH4wGisuRy2gjWQz76r3pgxPnpKeEocznkqz8PD",
  "key3": "4Pi45mgeePrSQPgcnu61LpHEFzzbDnyLeUrseH1TY6ZPGF2PbmDuGFLpehQHTRB7atU1V5gykFMmKkumA3Di94Am",
  "key4": "9bUU7Pw9LJ8Rf1RLx71dBLyG7fjXKWBajHbV7y17MEXxSwwnNp2QgLyPSc1XD5dkjWFgEmUbUTN59o8nwPYH7Lc",
  "key5": "5MmtgZozmut2wbWYUU7VtAbpEkAPgnsDC3D3iQtAFQbAQWxiheQ5wVdvpNuWBgRN9WhhDptQ4siNqJyVdYJZ1Xuo",
  "key6": "tbFJzSvfFYjXb9s6ert5MXfjYC1gM6DkBLMVQFsC8mo7ede1H4meVxsw71M4krVZPZ6cACLUrov9pqC9ku2Kcfh",
  "key7": "5PMQcu6MRU215f74Xh17tdS7hY3QDuTEhp9uob5o7NMnK22cJej6NQw1aFpoqxK9q7CWripqWT8yaKSg3HKwreTt",
  "key8": "25LkWbVQBdoWFfrqbJSbCLfp7dLumExDeio8m1ZzgZmjUmp2vCoXxbZowtpLpAhwdHeH5BSahRbWsJ96MJBVBeUk",
  "key9": "3KQNHGU3VE2LpSvuLn649kmyuyGyvJRzrsR6PmT4DsHAKbPBfWQcUyNWnZPZNqoNW2kD2ESm5Awcc7GzLnWThHiG",
  "key10": "vobZe1Nn9GeXXFBDZw22VWZfVcjVAqCW1fj9WHGam8T2eHQ6Kk5zLeNdX9K2bdSmPqH2LN5Ygj3bsaGqVW7NMrh",
  "key11": "2mfXQ53yd1JqedcSinnTJ64p2m7VdLSruVxSpF1GnRgVAzjFBsZPfhy3nVUzj5kvMr7YzHAw6DgxAumBbftZBF3B",
  "key12": "yoVAdTF54udHbriZdLBpMiHq1EhmmqonQtNSqSFAGdswEmTq1Vqt7BQ9upK1uxnvpQ6nPm7JFMGHckiVbggS3we",
  "key13": "54U7MDEkUeXrgmPcfhG1vKeGRUxo8Qj9Cfqnvx8vfJLr3Si6X896GYbEeUi5i223jD4bBESsubHP9HGSep8EAxxT",
  "key14": "5RwBxyi64M837qLJm7BzaGrFBJqcC6D7sZcAGYqMKoZr6fANw4kUEg4BHSV4UD1dkYzepyw5eoBfuBEJSby1Qk11",
  "key15": "2txDHQA4nFmh5MT4P9xuMTjborVyqNanY4AQVpLrp1XVcNkNB6uUs6wHU5nrbgxpTonRse4U36CaJ3YtiCQGh1pQ",
  "key16": "4D74ysQPU8FfyikBE6V5znBfCoJv7Nf8hbBYwhq9qX76aDzcUvyYinyqCg95A2Uzy8PtkeMQjMeQFeKGdwD2QEyu",
  "key17": "3ynT9VH1fwmaMExdXCaDgXUoJSBYKUEiRGssnEKFZMD5SPetNJbKLtjsZSbvqzpdyzaCwCMxhSSNMZjMrNgB8eN",
  "key18": "5WbKApMb71wEp7cUiQzHjAwuHdEQ1mR77TG34JMfRECq5GoS3V11hTAycns7Wd4cV853J1CjKykLvsD5PUgsvLTf",
  "key19": "35hgsb4QTiNnhhNoWYRsVkKbGR7W6s9e9AxdgU3fNCbc8hzG1GB5dbJXdZw351LqtJUcee14qPiAvMYjpfhhT4bL",
  "key20": "4ePMQgko1H2m85fkE5BVdQCHbuudHndkTyoitcu2e1wAUH7UCWuom31my2X2u4VWpJPu8uJQ8btM9fxYWDGZJcoM",
  "key21": "3pgEDTyYg8o9ysAW7z22oVfx9boj2P9W1XeJ4gjcymwGZLfvNjLvtUtJgWiSke2H5Wch9HPpA8MhNvnzcyUvJ2DX",
  "key22": "63LjtE2s8UmCmvZT1HBfYTebh36iTn3ruqQwo2euV61QVRY7nV6z253ZTozPB24EN6DGG4auGDSmHUKCNAtdqZkX",
  "key23": "CzJRFLJKWBzpmitYTCLq17rihQ3SDULJ5GprapBy5F2RJkD7V1XCP1bPVDRwjPFzgFbeGUkumkF9cdD2zdxBKrn",
  "key24": "52tn6BDV3PnTJ9rnNtoLENPreQW4Py3NkmA7H9DgwtzL8ieLHts5sBoM2T6Zf2to2tr4ZgpLBYMXtpDF5xEeDbJi",
  "key25": "5s5EXdFVedcjkTMpa4Zpedzf8zhLMsW5p5Xh13vBVCyQXDWbxhvhhzxYEtMGJ2X5R3eqxY5t7ZNRXkwAz2exA2GF",
  "key26": "5jNLGk5w2eFwwmnpxqfR3Pqz5g9M17921kQKgjsDw5fzD6GrNhwgyYxA98eS35MkTrdHtdEx4e5Lk1bqKqDYfdJu",
  "key27": "5NzQytdrRzroyG2pYyr6TUqLpGMahkVafwEHERreesKFFLBjttp8xr8vMPev5ScQWcdxLoXypHHEC67CWcphPoBD",
  "key28": "5sXt7GBGwkU7oAuRhsqh3WjebDPXJmfo3z5YXwr2kq9LNEoKUYtWXNSwYhYqho6yYHzryb7PRtXdJoTSXBnbB5g6",
  "key29": "4dvDrp7PL1LU9A9HbrMUDBeEb9iXsnS2xwsfK6uact2VVQy3ZdEALQPpuu1V5pW8svCZzQxNu8xQeT8fZ2yAENk3",
  "key30": "3kueSn7EpgvVw3vyL8SpPXeYFtPuQpCL225YmcUPqrS9BwUJpY5XfH1THDjjMcVFuLhafP8AgDcpRs4NYCxaizCC",
  "key31": "5Mmw9e8QJDdRd9LjVak91f1hNtBF7asb4WvoAzeK7q317wN8pTYpKDEHg5CfjE3VCUHKMDyRVnnnsTc8ob8bjeSt",
  "key32": "65FTgRruG9Z4qGxtWpbA1uzKv6ucayp4YtaGKgkdt6hn8JUXe3DjuRRhPJpZCKA98GkmzLS8MetoNvmJSWm7mTa5",
  "key33": "2gqZedkwZ9m3ngJTfYzk74YFcJbGumJirnyMcDoZCEHqzj68qxBSzV6bohSJusMSSA48CNv1UQ1GENNrj38MDmtT",
  "key34": "2Y1YSbQLPqMg83RBp9ZoWmHywhxac4MYNh5Wn6mHDhSZWKmLUWqh5EMBvgHHJKaA6LMH7v1rssFgpDn8YSY4rUj3",
  "key35": "2UXDBQEr7QrWsZ7bnQnmohR85yMUNMMZf7mEXsM3w3LSufW8QpF5yynp6HEssMW4H6F3omPNHbRTwCVSg6WntLr4",
  "key36": "3rk9Q5SgGNDsSQQ8Vvb4AWiGPVdaXeXFcE6KwAotHYtyRhCi2mQa1Rfy6gkz4hPYaiXoVy8kruaSH7N6DMGaCvMZ",
  "key37": "4BG9M3w165yEEmbGn34TnCza8XW1fPb9ZtVd6GbteVv8RgX2tGmWvBvtdF7FCTAFtDrRL8BijmKiztywTLipHPB4",
  "key38": "5nUutX6TcutEMbcYVxKKNxzfdKfYMENRMF1qnsyLs7856KpfuzVWVMGszFh9UPbp3GZZnB18FgrqGjUaht6DFyw",
  "key39": "39SKMCMstzavEhWp9cAWdDD7nkwEWq76Q4j2vSvBTVBBYsxvYpJPmsbXbB5ctavm6xJu2kqAm6SNoGxFUeLwE5iU"
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
