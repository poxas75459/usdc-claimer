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
    "4X52RsvsH7jXp5XQiXsYHArmapTM3ETX7xL6oJnXLFgzC7TcCqtELBUjTkwKcfQLLp5EcQP7YD4e5pJXr6oNSr5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rje84Qx4XRzpGiUoUsda6LNizDdXJGecJVdQwBnJrQjFSPDrEk3LMmmVxw71G7S5U835CmSDJEdNNLvC2v2fE6a",
  "key1": "ENLsk2aAJbcxb8MgKwMWPMpEDdUBitXtj3RXsqV9xeeeZMKFpf54Px5z9XrojeCKRcwF5StsMfvMbxyBfEZMrY2",
  "key2": "5gh2g3kjEJfznAn3jiUS561aSwNedCLDwxuL36viCaPGeRigquL4RnfVHBjRZBnSvW3eEubg671MPYBswucNBrcx",
  "key3": "4ycrERdGirLwukYytDbBvTi5aAdvDCmFM9T3Q2hvhRAb6EXq1BRHAJ5y8ESVH19jtwk6W6w89qptVCbU47YKhdtJ",
  "key4": "5n6BK2mUFkkqHUkjgf9RV38qiNLDQfMCshaytNRwUNE1HbQKCgwyo6Dxxgp6v5s72mueCdvfYorn39ZW2PjycZD1",
  "key5": "2HoBkcvvjEvJpnsJmzKtnPbio58ekUTUP9jhZUtXx69zExYR1d8xWfrowYHzFbyu9JrjPsTDcE8M8YU8CfAxJvEy",
  "key6": "e7N8pW3sFXoWx3rJNiYbtBHU4oy4DGcWPgfxjqiwmU9UPZ2LT2xKv77hzq1hRaBdFufdYssTJsiS3djUcWRASF9",
  "key7": "5CXESuW3GTqdTXBQgHPTcB8PDoUrYBMy2ovAzkefMAUK4QnPA5frrnapA5JAePbgaKz9UQAeFFPii6Ybjrm96EkR",
  "key8": "3xHjREbA5K9Hwe3UUDxXh9R4VCXVwPG8mh6NnAMxBAEqNEkbpQ7Tau8q6RvJmECsxwEqbCoMscyyQLnZB985mupF",
  "key9": "RVCcpWBCPeeqfhqbGFCs5YMJpfz4S8Mn6ztuyvc5EfhoCUne8NLakg6CKETre2gQmcfN7MzixpL9ftS3gGNBFcc",
  "key10": "67F6SgFktfmGFmC2GnuWHLmXGm486K7YqtAS6BTAo1TmvCd9BVmtdnkNv2EpwvJYgomQtzvS9rzVYzoax3GMGvqW",
  "key11": "4PyoGfjoNttzQpevW1WpstSFaWZB4vdf2cCWn1ztbDjXar5kWhpR4TD39GMjromFcUv4vymtGMrMhC9THtbaMxnL",
  "key12": "58LwXhZ2zhN6j3JewDucETmmmFFEdMUgrjDozeeWwnDS5QjwRR4LPA7RnakZWmoHFgExMQ8JnYgKGfE9Vt67h48d",
  "key13": "4QBrf1pao3L9VzhrfK4mxdNAwNSGwwej7zc5Kf3Fseb6tAvVxfLEQTH3MMaFQ9TxEsAhZZQ3r7em35nqVdrdYZft",
  "key14": "5nmzkG2Kpi47Jh9sNWY1doW8QeeBiyhbEnS2QCu8SZ8NHhrupuDKzihMvuCCiVsKFnyBEDNXXdTtPsZGfvqhNuGq",
  "key15": "2j4oSThdKyaH2fbWhb2AVZ8sxw1NUeCPXPt6pjFoujfME8Q6WFQnr4akp9qJWhUim3vQouSgBf9q2SAL4WGB1nvV",
  "key16": "2XBupNsddhrUyPxMYNr9ADJF34hUpmhdx3WN9su8PKYmTbwMX6Uz3pyuSWagyhBYVSqXJmwA2UKPNCrE3N9UZSJK",
  "key17": "3tnVcsfrWk7sr7nACHv41UzmHtktbYKRzSPfacNBGYnanQbh9xnz7JH9upWPFp6hpzvoX13YFYtF5CWRoUuD2XCC",
  "key18": "5CVN4smXDcEyt7GSVXiYaDiYqzS2KWkBhFy1pKNzE4jFmxpK8Ma7egDWCWg8ruuRfFZhAtiRok5xMJ3kmnEzXR34",
  "key19": "3xxGQRjnkuJYH2twg5PPd6NLzPnb5C5DxAzBegaaDmXA14hGQqBb9GnhD9RjmUcVVt4FYfPXALfHXbBAZdv6BHuY",
  "key20": "5VjGeeuXebFRL2xFjJVKyvAaPd3xHhjBE8y8gnfexgj1EopWrMH56Qqwv1EYdhPE5NNFinow8aCRzMaPbPzmx2op",
  "key21": "4yMLcus74LkK8FQn5CUuV2LJ9mN5ZLvhUvqbac3GMhvbfYJ4Px56mFkRUwDnCdBhNEN8jWAPJtME45iCBKwHkrdD",
  "key22": "3huvPXoUeyViomf72BiwZ4HSu2AfczeDwYZr5i1XCySH1GE997xoCGK6PZPsVM8zw1LBCf1dzxfTDzA3bGXbsozL",
  "key23": "vNuGewgvuudnWiCUQ7q4219upH6Bc9qxo286QfhwkWKyjCXqCFwmi4M8HbAkZVAkoqi9BfDBNDxLyNFzZMAFwgd",
  "key24": "33bLpHWY58NM8FrJQ1cversAtaYrEk2gzRytkuoaxZRkAVmtLnJZarc4QUQaofxZq57sX1cg93He4ZrgYibnqeqL",
  "key25": "yM92hZQm2EFDHyvHdPKBtkocKUNRg57MqQThjgp7gXo59geehPWjtL44s8MGqzzi3dEi1J8kbmNh4U52jvE1dAR",
  "key26": "5KDRCdTxNpdLCtKK1iwCUU5uiSmETW399shXZWN4hQbKMMuRb7ExDiVfEFY3h7WaJTtuJHsMnemMt9gP6vLGvHnp",
  "key27": "jvrNanZNaEcHNp4JtN3uRbQCcYy8sj5nejry39iEk7Q9mioBhHR8Q6xaCT4UgJ3cYmad3uf18tfoE5yYHiEDGEJ",
  "key28": "5hhkbnZf4g7EBmVmPgmrdim3VdmH7wFQ4nUm7mTf9CNP5hqAtoiJYHKGuuwCSKKS1TkHdwG7zfneFoYNWPyBNR1q",
  "key29": "35nrMfrY8KKdYvPiyhdks7ea5HopkoNzJxCZj59AAe4QZHt6pSp6CN3tEveFZarWfWJESTsTj4Zr4iNVHhEeNNDw",
  "key30": "v89ay7ukXE53RjuPNHedR3yxJEQ11AVBwDsNdzMmE4VfibfyuhWwaFiTZMe2B7hk7GJ48EADKm9TCAKmBG6bc3L",
  "key31": "5RbrBvPPkxHi5jfAWLjibQCf13ukhT9VyyzoE4odCnM6s1MMbUFpT2ek1dZsjFYrHN4mbNnGry4CmE9AKocXL3UB",
  "key32": "4tYUcVqaiaHsCfZBVQTGepg4k7dxv4Tr9dqXxCA4uq4SPjBL5dTvi9TpqWDmxKCvY34m9mCvMuygnF1fqy8onzts",
  "key33": "64s9R8x4rcGN5HruvqUgFD9h4mN4SsgVPcbBWBAL7vb9Zj321AwiiXs2YdcxnkUg8kgvyVhiL8QHRbrNxm4gjcrh",
  "key34": "4XeAR5PTD6KpJD3vKNYpxg6ASLewW86qzHHUbyVdZs8KwLUteEQYrxk4pD6Pae4buwenv78H2PBLqa9XHTvWMZtn",
  "key35": "258zWNAiVkx35cu5Qv3kXdjiGwB7YNcPbpYrd4K6bCyMXPKuQPxcnSHNaBQjMTbGoP7hn4CaeqyZ37QLG1wqoRMS",
  "key36": "2uKdpcKpmvwYFijYHeqHjZGdwYPouSmcC8nypWYzzmxshmrA1L9eFoEwPVzmhJ9gruhzuwGM2R5bqxWQmAtZHNWm",
  "key37": "3hFPqnyYYHzkMcGhycNBCZBfDmFJn44SLVvym7jEDgLrWCCnSySQMJT44Jp1DDQ5zFCcVjUwMEZw8DLM6QPju49K",
  "key38": "3ZRWzAMifX8CEdSFM974zHKSvgEDPN7ZjTuXn656sEymLgMYcaSk4Fs2XWXJSuVE9oZfHEWCmfNNx89QpYxPMRfj",
  "key39": "58HqmvtZaUwqf2VDz2M6NZ57diBo4kvSVAEvAXTqkGDWeLyahq64kXxWd4UFeyLF9Pg9M7dkLWxbq7uZSwx6JwC5",
  "key40": "3QegBqYPzhH4FCA4tFdvrHsbas9DavthEaNEtJ4BVrx6SAhNwjchUcQMSHHP1DFC8FDXjAzhNDQEKDvC7qGS1BkZ",
  "key41": "2tjbjbcqKEP9MwjJemKoKEnzEmCo7pVeJEWZkAWTcp6XSsuszkmfqF2XLTnxwuwM6sMYMea5Dy1wRbBBYuDUBcoy",
  "key42": "5KMbkptkbpnisWx1mLzAqunnxCwL7hdwoeYZRCwvwh7bqGiRJjnqwwY1XV6zrBHysk5bvQUa2mk6tan8Vh1LnbmU"
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
