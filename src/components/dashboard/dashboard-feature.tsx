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
    "2o3D7Tr4XvpSuUgKdPSYRHtJHdn5u7xVjH2SVarFpVVSYtxtjZgR9BWS4XsqbuVCpzZ1xkAV69VPQBLhzz58RZp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpXcj7oJqdAYHuit8YxLuxWQqANcS1sPdv9Wfm2uEjq23bnGYVJ5fhWsMJHy34tGq2Qj7kVBwejYjJTFR2891LT",
  "key1": "56ovqT8pwEBs3YWKeFfiRKvDDczSgch4p2vQsVb8RgQQG67j5t9vY78GFyvaEtC8LNqNoxk5KV1jQN95XzEwmSk6",
  "key2": "3STtRdtmS8FpXauJ9GceqFf4uddMQxMeJHg58UTyMk461jQGKrNTxYC93AfoUmUdunid2FV5qvJjjV9PWiYxwiZ",
  "key3": "3Ef2TKQbUGBJk7zAAY4natc6Lw6LjuRisokUKkdmY1fbhsteuqzUVi8MusfHag4iUMKsie2sKpJcRe9ypmtp4UZe",
  "key4": "2TKeYAbXfvGc3NYiz4DXUSyDeJUM9hMtWPjc63Ni8TPXwTgJqLiJ9X77tPoUvWWwKuuGfLsCvqCEMVFVXT81igk9",
  "key5": "38HCpnDCYCVaWPbnGSgarLVV6JvGATM6n4YEi2gAswhSmFTzsNFyp5ZMFVFEMw9x68oLEgB1U5JyY16vQw6SDUf7",
  "key6": "3xebN3xgf6JawfU3NZjYSScaHdbvGLCpdteDxneP9YinXXrvnDrDaShX6ZWGspBumqjoJYKWMxS7rGNn7vEmn3pT",
  "key7": "3RDJjPgNcRM8mv9VvBpX6HeJTLBWHfekDWko3o5TMkWrw3pDhWRRkFrnguYsPkVxnGQpsB2hQ5bjVFWg1zxyERKe",
  "key8": "5Jxe8hoLpz1BwuWF3uGn9PM4vjLvdrGQAuEBfMRQcp1qxqbbM2j8S99UYiNkq5wTJp6DR3ot5h2FDEMgZrBFanGW",
  "key9": "3HT3ErE6iyxod25vFUeM8LdDsLyiSqzRrpaiWuPuKrL7GcmkQV2k6KutV3B8cPHRuxtnvG3KTwhbRd27qiNjsNya",
  "key10": "bDKe4TztLa9R31q11DPXTe6QwWaBHe8KGmdH4yHJcUZa6JtS8Z3e3UNFdizALH62Jv238rSpLnKUezaooAJC3Pe",
  "key11": "486B2M1eZy8PXVt94xTSTq15UmR8sDkhGfcUGAwt6RLw5duXHHNhm9uj3XaRSUhk5pJPrPXtKWfpMjQBPd32b2Fo",
  "key12": "3UCy8Y2QdtbrrYj1yk4CXhkD2R5Qdy6bD5gqcKwLuHpgXJTPqLGH2bSQcFtLMJ7UMmikLhPxAGB4BJmRhZ1nR8XM",
  "key13": "5veLGLypmrdsBP717JDHtRzP2sKJDLX8xZmDDJPnnx3myS6TGFKx21C9dgwHsDQk5onx7qzhnsKpdmaRCkBKExuR",
  "key14": "2UyJAdZHDadGvZztf7hcWsnH5uhBiQ8NAgMXcX3S49DCnewsqpwQy4fB5yRzDTXAtRjueNNYtaBKDdrJFgiqvmwG",
  "key15": "Dh6RKT2eG37j8ekd2zrmiRrMmB3spixDoav5fTvuboe6W3LdQYZXSRVtkCXnd9z5ysAMoet4PJ9jmDqHdFwV9Qo",
  "key16": "5iJbrUe8zkpXw2NcEwUp6zEyuMhHCMfz1gqqBTtzyfxcDqTNMA3BCCtruqjP9NnkKwWP5vqhiKk5p8o7xERrdgJn",
  "key17": "bYR6Nc62gfuesSsRpbki1CmMfhyEbQ854NMe2pnf39DVv6N232MnUsi5HXC1ybNpo8MnnatRDgvwLvrt9yvtkrt",
  "key18": "3eUTGcw36YvQeBo3XLnuEDgs1Jkb7g1TW5FaCixEQUGw9PSxQjVvQfGDAe48bCMTDFGkAVRGJ2LCuMykBhCkxgvz",
  "key19": "4u9ceeP7UYWa2B14nNQg7ojzEHqDPYhhGCJZe4sEfnnnf2kzhdUbj9htenUM1v2u5ZsUrdhTihKNxi7NeGitauUA",
  "key20": "2K1fBwfQ3hn1Ma3sRNpEmvfhuyDrotuPARy5nh3p3WBorxcQHA3awNP44XoNXUoXV3tUbxHqBguVHuSmA59Poy2k",
  "key21": "3u2fHveaycQh2dro5dr3SUqgDLoSWFbuHVnWU5MtAxdDYAcZY2B938RExVwuvMgoYW8sCHmJK5mtfDSQQptYBx4e",
  "key22": "5sLbz8VV66Tp6seCFEbiHjuSps1qtaaZiYs1bUJpmRwN8btu6J7AaSUmktxim1zos84Anto4iUcq2Edodv479w7X",
  "key23": "fcXX6hEwBC7vQkGxVjYSvMZpAR1kMEuS2ES3tqNiBcTuQwdppFmgZueNKWvc75GzMJSJcGf5TMFLDN3nSoRQMMU",
  "key24": "3WTGP3qKwQ776FctK8njasx6Us7iZ4XbBqxaR7QN8VBiYqU19x5MJ1uR6MfJZagfjEvgSFz4XPSf59tzmhkjj72q",
  "key25": "5aJ949AZmZysBWK2FnKhUbXvLy9WgP3i2bjNMffe2CLNvSyBmnadDMVECM4432BkzeDh57f8keLmvhfAs188H6tw",
  "key26": "HhBt35zaigCanvazmb1KoYNTSkf1srS1wd2rCZDGMLziBV4JcYFdZ9mVvLrZGMWMLfP4f4YhP5TMkkQtJ4HEzhG",
  "key27": "5xgTBKA6Y8DvxKoE5CkPP65R5p7RnbakQF8LeFSyhNcyVZRQqgwWMG6u5gf8rNvo9iveF1smkF8yGHFcrkQgMUqL",
  "key28": "5cVmtjswehjFMvYxXYm4Yj3C1ySfRwX54st8GrAD26kSAtNVzGaLfWbcAzPnUJmc2Qh9F9Fs75Vi7VQ1yfhzzqD8",
  "key29": "oSewgSWHKNN3Yw3mFkvy9oLWGVwWnW8AGQVaEHABm3HchqtXrLHWuET9sajDT5i8BjNMNCqDs3MGtQ1UfhPRqau"
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
