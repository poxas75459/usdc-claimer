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
    "3xEekj9QMb7TzofWRDvwJ8xTLJiVkByQ2oubWtcau5HqtcuUXhgD1H5Qc4KFrYjqnfA8mtHEfmcV6mXda6ViCo21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K8XtdiyxcKRgCyhdzezRFmstCvTxkY3TpZT7ZtXRgsWX4ySkAPP2SfWYDCEtUcni1HdTcVTpXR9v2MhKud5ikJZ",
  "key1": "v6hsGzBPWk1f8NYfxwSVVqGZwq86jETqJ9vbrdNjVdU6Y7yJfGmAhhnVPjdpNHhCNyiyUBVvVJWxUaPnx8Fxm5L",
  "key2": "3wS8TBqhisCPzTeKQmccwMZwwFk2kxgJv2nEyehjKJj935ATZUuSL9nkWjm8mwkJNg4LBpoMWE6qu8zLKD8qfpSQ",
  "key3": "2zKWSr7iZSDxUmRsah1dSYQk2aT17XvJnjKsYaUaM6c7pkECnK4xEuEycAxyNAcZDx6fvUfNGXyyQ3ZvgTt3mLsu",
  "key4": "ATwyksVw4ehNXrATeDn2hWVciHCFcYAnqfd4ZYr3a9rAZHJCJTcaa7ogTTTSMm1fMzsjUpm1N48u94FzCmsM4td",
  "key5": "54RKv2R7GbkMsBXoZ8WAhcxLY5SKee6ZavKukN3SCiVYLWFQB8VKq7RBCidJPZ6tkhacdi48RGaj5qyjgDBAxiNR",
  "key6": "4eJVPZ11tFTZ1vpovzAEWG9UD9BhMBJcY13r9LViLCV5GrQUsBQL3dmvMr1bFoQEM1Dbp5LqG4uv3SBmZuH7imqB",
  "key7": "5PwPJdkQHxUcNcWrALXDE9LUxekYi35bHhkfDY3M9MtSMs5UW9QEspR7RsmMfQ1RBYDzWD1CfsdJbcR5rTqsp96D",
  "key8": "62Gamb2QEtkWU3yERpubLkmaEvLAotk5Z6TqRw8ZPuxfjV62AG3do4EXwvqJ4do1riuyKXuXW8aduM4Dcz7qFLAf",
  "key9": "43gdRWvKFAZZjiXypervqfRmaE21nze3verB25aAUHYHmhWuikf5rFkgucvvhfM6HkvuNjNzdLZJuZuW5ZwFeLvP",
  "key10": "4ufMHEM9VtF2KWiHL9yhZ7xqG2QEWeCSi7zGV9Bs1HV3g9yXmg2GSiuk2GkvwhLkNXRXhYwqQFwXa11c1s5cVxy5",
  "key11": "4wJrvHBbS2wXuvfbZuL63h33SBSRnyAQutLzce4hsuNFW3AWtW7rwqNMnq3FFu5wgm2Kp89if8h6nG3R1wLW4kqq",
  "key12": "3ZLy8MNHBfsWthEq14iYm8pBhPe5XFY1SkmLNCbmaJzXqJ8U3iNUFcgoLHuRgxWxqvNUws24b6Byz9EphdoJY87N",
  "key13": "4yr3MUXBxGV5JkgEturA11tdRACuw2JfpQ5WnGg1HoGtB8kMqsmN2EpdGnxxt6HwWBbY1ZA39DpQfz6d8vNLX1SY",
  "key14": "3XynM2W8fyG3m5KKCqdaHRn87zJhz1Ue8g8ESK1GyoocYpVLofjNgEfqQyS6WcAt3fkge3J6g91P3d2bow2FScbv",
  "key15": "4KNsRGJje2Ni5Py3PUU5eFLLNSgkm2sLfuFTmPwfCEeH4txwHBoQtM2azDExpp77E3Tud9v5DWjmye6TTkRGxZev",
  "key16": "WyhdugKjVuGWYeGdGpdEBqkLDZBLimjdPyJooMRZmwfU47pae1kT99MuEc2m6k9qybxhr9N1PKUmb5KU7bjoo4M",
  "key17": "59iCGMbAavCU2sf4sQK8wUT6jZ26VbPirqrLRS1PY9w8crJSJYJgsuYCuSYh4qt9yHp9MCrBaMWwTrP5CzQjaaT1",
  "key18": "5ygjBTN4Ywe7AtRB69QjmqtuCa978nKGuGXYcv99h1eQGpEvSzepseatSfYvdxp3Zg9VNwqEEs71Qf7U5NjDTJHH",
  "key19": "5wRdMinBCBZxPvsKWWbXPUAj3NPEqk8C6AVTeLpPpHPUMPkGFdCarYMGLvoyEkyVmRPGWx62KyBGR2NP9Vq69Sgm",
  "key20": "2FuzHxjGMaAxB3sXTPQu6nGc3fvi9VyoA6tW3Sg9RLF32sA539oghcR15hxGc5TAC7kG3LDK4FrXTU8faNe5nvmZ",
  "key21": "2fzKLovEdVgQiPm85hmAziPbEWuTDHKksPkRPBWhYob3RaQ3ybxGwFrvCuPpNpxqGwsUgnh15yD6DJXTiHPQGyrE",
  "key22": "38N3ACFcmKQ911UAuWC6q2ETov2hAFXje4oPuJsFERk9JKudmmKryzadVt5S942zheknNFQrjSAbq7tTwJKfEyMf",
  "key23": "5xoq9MvCYa2MT9CsaBoz6vq6Jg7g9WMdQEPT95xzoD2pFB4GJxcGBqD44ywhtyA9w3HSYKmK7iKhZX7jqGJguWhy",
  "key24": "4DUikoxkdpLFc1EVSvQyzfCsArCELzxLMGu3wit2YjP1J71kGUqJDGGuJsQ725P6WRTD3yYSxXe1L8biTjVT2eB8",
  "key25": "2sh6sEcEzhJSSes48mTo5XS9iPTLBpHiAbZZn6Z6BAn4RjWsdUPCutzcsvmKW2sM7tij66iSUQzA1kzbVUQEBBiv",
  "key26": "C2DYVq2WN9CH8PHwdz14nwAffxi6ak3qKhHkSevJopC4KaWvvNjBhbuq1Cmh2FFc1Xw6mwuCEZA5VtqX8Zw3nTh",
  "key27": "5rzzE1mqfvUiTh8k22eMubhG3pnGb3ds2J5ZQJtd5y9JuJ2rpqxuoQWKEzdLy4XcVwKENX2ZJqFE42ZvTW2TGrrh",
  "key28": "66Cnfgtc3GByzqcMt9bF8xyoa1gS47KNaM9aXBsiJk2DH1sYSz3EUkLLUCSiot4ZmyE8S5x9sqduccueeSWpx7aX",
  "key29": "5vuQMij4vW6boXKvm6yzhEzuwuKMiQqcAagZPQQN4LtuQ1JTBdnTBkfNn8NFr127ftBbcukvHxpoHkk6tyucRmYu"
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
