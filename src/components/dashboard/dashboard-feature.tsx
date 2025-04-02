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
    "4Uw1a4bxgsKR5jTACseudmjExuMa6Av5oZadh9feQKNp8q96z6y1oAp4zCVrBP5Vzb6RM4aYaPn7SV6pZe6vB73U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "419sBgbbm9BdHiutxFGC1q3UcGyFx8wDmqrJm2Cb1b88xu9WhCxot4FrSGQ6xkhUbNdBSFxUP75VVc8TRmoaKsZB",
  "key1": "5s5tjb2CdFxqDA2fHEWin5B5qvPwdmLu95t5TsuW48T1RUmuPeRn2jqy2uG1cL31EXL8n2B15cpRyKLmtRpYFM4i",
  "key2": "gpF5CVL5uf64Zohz3qJ2QcKu9uWPQibzPP7K96v62eCvgKxEu7ZPat61FpYHwpxbZfgksL69pu1M6k22pdEvsXf",
  "key3": "2u2iY3zV6fyf2sdCcUT5N9zvzqnSax1SQmkWjPTEkCXnwbjQTYfnmL5Dkir9pSajar5kYhQXqeedemYWuHyWzwtN",
  "key4": "2PxmLrhwocAy55kD3Ce1R8L7Eo6QkS6hZJhVUZB3K8Z8nyBZawKfA5BG3bmDntAw1ren7P62PZ8Z5NLxeGLmnAT3",
  "key5": "243gydmX537WBfmyiJ57yMc3fv2EGwqbuS9PSWE79Evi3HsPBfyPW8gJuov9YqeLw3UvApsVWKDkC6yJgPRJqGyv",
  "key6": "2m6FP7NJiQBBVCeXQPXBKLnBbUp7C8YGq5ooMCAFyHSVrgsaSNioZR7z4boHy4PE1qxgYD4JJXNdwuU5deTm2vov",
  "key7": "4yJfYc34JyPRXV2uJ7jGP1PkQ2K8soufkK7GXUJbA8Lcvkr51V2TMPNqtwtW4SvauxfMinWic29kHtY5UwbvNu7t",
  "key8": "3KwkUPndyCdQLky14uSDdCkrC4Qe3BokAPVY33rAZ1qhthhNPDagXXTftAx7fADSYMJNh5DCmoNBMcMXxRwCgwwq",
  "key9": "5z4DivTFUhPJffnR2eu9KRoiodnPEfwewTqTopybJvhyAcwtSTgZV8Vw87wt43S2iRWaTAHW47626e6hnhtUMyM",
  "key10": "WruBJMa6m5J3z35WfE9JfxxXYWtNREdF319YksMSwgt9iGA1upwT3YLCrSyhTB7R1m2fwUpTWzRhSuQwhzBumQs",
  "key11": "33FVeMbyFuiQVuixkuVSqFz6Mtp1sRgBCwf9hThRnBR2Yy29rL3Wuik2Z4ZLHGfNJBFJmS9iUSn1jZoqBuwRJDoA",
  "key12": "8eWaVGCtwgeaHaEYbCaVJxaPEDNKyveCcdQ7jtEqhgEEiq3ef3N4h8HjQVErXP8zdFwAALze5dvcbwXej5oDaJu",
  "key13": "wk4G5ZwCsQagfz9r52Qv2ejaPh3KqfJcink3dB2pyX1FdFZ5owoBLxWAvv83K52gzGG2QLy73VwNGCieMZFBz1M",
  "key14": "67aZkfvJmCvz9WiRhxMhqovRvX87NqeFUot6AzwMNzrt39RxcLNnW1JvmQ9A7ytuPuP7fNMFsxnjxYVesgD3wuSN",
  "key15": "34jJNd73kDBKZdkMFsDSjWhW53VNZobdHjSVcKvPKKVCKAPeaUXngMQUr5f2vXrZ8p2V2KWJT9HdzQckKubaxYPt",
  "key16": "iiPj6iQ2YC9Gn6sBvaevxsn7Fko1d1DovzSxHjVvpZh5FZUQJZS8FuB1sCXDiV1z9G6PGDyXGYkN677wBa8uH4p",
  "key17": "2pnyBeohwdL8A777nBhWeuU91QJRdrWnFFjZ3FnRfnrd3bMkUpEvPRC8EAPUGTA4q8UJibHCgtw2AHBESEbpkkL5",
  "key18": "3kdcU3acy63CRUy36xoqurt6Qu3b3VZGEYRzHxzBFzdvcq9wES3vy4bn1FcAoffG8bG6KfmETAEn4Uc2XVt22tgz",
  "key19": "KpRbwKp71uPVZCHNWxYuoLnbBEaDFcCcX9SS3J3cAVDR89qfWSC1aifm59SXP58TWkz91j4fDciPb5ea2wwWMhB",
  "key20": "2LXajUMZ7p7P8S3pTR1oKJgkosjCUh69zDfT2EV9e3JuDvm2Ma3CpPzTEnC3Fg6GHTtepa9qxdXDbDe5WTotbsaj",
  "key21": "5NNNSBArZoS3LGFbD3aSziJ5Y8sHDh2NbBMCdG3y4hN9BnS9JFYCZeHFkms7aUcEw33gRAQB2ssAMGjhRxnbzCkf",
  "key22": "4XiR7qz2eVC5thionTuYkdwTwMSE1mhETbJQ969suwTCqCFzTb5yX2nUvTxDFT59mth8RRWNs4C2MAWVcFQfPYsM",
  "key23": "27rnR8Nsx3xGmg72LftnUE15eeb7mWD9GHPy5vb1Pnn7gDoenHiWYyyH218FtNUydpkNf3wMFRQEMJsB3sJkRrvK",
  "key24": "5u3MTod5SKKnw8FKf7C5bEkDiU34Q7Kx3QWovDmMZnFxCAirAqW6QLRt6RV69ojf8sVaKZmKYwrZmtXMgZx4BbRa",
  "key25": "4fapQULbJm1aX4akWkTdQPHr1bCHAy9Ttr2eceCVhsfDMMnTLoLVfKZ4ZJra55ZZKwfQreVC4jrgsXSXjkEmz8mx",
  "key26": "3d4bGBHtXC1jtr8sTM1xLeph5u1CVov3MFUXoAJY6wHm8TYrxBH2S3EML2nWawQtf8uuK5xxy2TZnxSS8EKLs91Q",
  "key27": "42PNYdVX975xgpHNdUY1QedjLL67k43nvGCUNPHtFJ1muFsUxpUPzduWrbwAustPDsLAbhCq1UhC9sm2p4aD9Cqs",
  "key28": "2sPukiHCVqnoq4JJjz8Mzc3vK95dd9ZNAjdBzwJFaNb4fnb68MLenWu4cej3JZPm2fMGx5EEn9WWs9KnChixBbxk",
  "key29": "2FeTpKUP8V5r2N6UP2924JdS9XFXDuFCuo1oShJdadW3RvHuQuKkrobURQGSitsze9EmwjknXiwHDfsQ3KizCzph",
  "key30": "3ET1iTjYfaCVoX1yn4vm46Q8jSMjxaHGyNs1NtmNDBkrK1UsyM7EeThY5vPuJUgcPS1zQvEEfu1AM82A82o5ZBYF",
  "key31": "3mCbQBq5385xveSa16YTrTEz5VwKj6Y7NaMe7u4KET31xPUgeajRqhdnKMBT4ryVK9RVJ1DDqVSiTBXJZ8r2r8p7",
  "key32": "49snVpgBnjEFNEhFQqEDdzuHRfZdaVRsYAGVGM6zwdJpmgdMBydjcYq718qjU3iRwkeAcPckdU3uH1aSmxb5LmPp"
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
