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
    "3jk4vV7yjZQfLodRrWBZnjuN6JJVWhJ1bdQKxfJjZJzciLwcYMyMWHU9kjNngdo9mUyhr8G4h8P8taxFm1QZreJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37osnr9WKGrBLYRG1e74QxHB26v4Nh9u4RwBMQogJZJ246K93jDwTN2UvDXbWXDKN29eNn81gJiWtAbfSCHeifF2",
  "key1": "3xH18wLUgiDsBPBuLdvBqwUYcXXrn2u5mkJwh7a4BFqMUsuExrSVb8rWhfGeAJ7jP9e42QirUq1QwZq3ZkFhGF2Q",
  "key2": "4QCncRTfa8XcXnrDc2aMafp91jGmr2zPpigkDoEpwy24f9iSbUtgmGDpFT7cM4hFn45QZXRRPF4GMRTYRjJVLeRx",
  "key3": "exLDy4EjtmELv8dR4izYGGpEYrceUBMVxLE8Tt5Ndh45eVCbi7xdL5qNGKLWsug11J6DGFZhpF64mDifpKqPKM9",
  "key4": "2yjqeMUVzrnBewiQ1kfj1F6ZDx5KtKJYxBzC7jdMJoFJPJAYQHd99S7tCnssDxmnfkoqmgS7a8hXyWZVcvGra2BG",
  "key5": "5Zi5DqC3tZ4FQ2FVYcsZ8dQE6L2gu2vrGiAbm6CXYQzREcg5HRZog4qB6fvKdSXvEhm9bT8yrHkbjQQALM7bAYQa",
  "key6": "4bBzmzifCKHaFNE5ddD1eAA7zTqfffWKnDNmGh1t1ZZMzvrac74i1iqc4wFpETepi7S3JCxgkvmGrdYhMW6MBWZs",
  "key7": "4Pnq4A4bd4WZriTW8TADNQsqtNWbFDgS8Mpx9Ahu4PKCK4v3M9PpJ5862qHGpzJAikvJFRANEHeGvg7tBa1QEecN",
  "key8": "39hKjsXe24RBChMcFzeBt2KGdCiRVveBPK5weU8sv6E8mzgtCgryuthcN9WUwr3xovJUPgnRhzQ3n8KRxiW9jhco",
  "key9": "5bsoas3irhudmEeMnFnJY43neqnpCPVn4zNQwFqHKTCimc4VTiPt7iBeFcStj7bMvqizJq3V5XUFUSoMhYKb3Qtz",
  "key10": "5XvbpReVEHVJWCn631orypX8JBpcCr2zkiQ8Y22Dxvvz8xAjpdNNFcRbJXaa4d1vAmCkaE76jpYnc6BkNceA986t",
  "key11": "4ie881gMPBBmXaCpfxHyqBvDheC3HFVmEBrgQr7cZo6EsaYWRdg4iCJhknn1ArQBDtyEh9qWEGSbSuSueTksE1xn",
  "key12": "27B8QdFBYn384onJuHdSw3wFuqx1w2R3V5HsTDKB4foJS4PWx5Ahy3qDc6cQcjrmm92h1fPEfhw5WasyddaVtNyg",
  "key13": "3azUyGSt5jiFur9vZD9mCY2BSxAgidxGdc3LteLQewVMLin61BuZkqF3eKFCPPzXAuh4B7NyrpVTb6bKtSuDCAdX",
  "key14": "5Nq8YkshviMkhbXSTAWZ3B1mKww2sM1zN2bPkSPXhGL5JcXzS9RSwkxr7SMTnUQ9T9WY5QXY8WaYDeX74FoSV7Fa",
  "key15": "2Z8jWsXZYEkgQNErAuX5k1jAqZRvk9T3M6yV2Ssze8Rz7HmRCDgHgacEbo6J9pn1dgNzzV1rPWVCB8en2sBnymjQ",
  "key16": "38PuTezWP895nmnY88RnmKP1LcRqDNxEahQNK26GjFvvfwK2h5HbpGZCeXQsXR2frBdRdJGyaRjneYRLB16jXqUr",
  "key17": "3qtcnfYE25aCecGnCEwTKBPzz7qaq5gqryhYQLWdVFKoMqoYiygPn7qBMxcGCdaHpGSpvMHEF19Y3yE2XsKpAc5G",
  "key18": "tvPywtWJ8bFTqbRtzQhokzdjANvCFe1ECH5bN3TcAQNmge9JHr8q9ZCLb5YzniL25fPr5ZoDoAhnPccbdq4eo9F",
  "key19": "2HzvThb19GjrmH3bYY9u1B4wXRCcZ9j6Ru8LyxKj262im3oZNkZu27bnGNP7ez113xoh1esXSjJCqAg9Qx4kVRKf",
  "key20": "3Q5oBijZQKMQmsSotKSk6d96BEnoUrx15LMwYAeuWBvYJkpW7npye8PacbEyzZ79MmwLFJJKUpJbLPewWTT83pvC",
  "key21": "5HXpnHjw2zo9Y45xHSBefV8GkjMBHo5RLATdgDQ8uk9voEYqqeNJMztfrvf6Z3RJWHwGeuTceyyKxv1fykkp7RB5",
  "key22": "2DsiwCoJ2LmA99eDQUs7FDY6HsLMZkCReZh6zuc37BqevxeWzTKeQEmaaHuBP2QaTjUpXrEZAVybTCcArYL4SLMg",
  "key23": "2HC3Uu5jw5oHbPm9o7zKbkaX9E9xkwXVrjcLBM3Apxo2o8Vmc6Jw4G4ZZ9gDuhtDZEr6wXTFPgNJxUTjDK5GkTk6",
  "key24": "4YvkMbRUZPcLGr363929rVdVjTVXios1jjsbhWrxdGbEsni9LnwWy5kefbvHqR7ekppM6B1gSgy9294UpQNRuPRN",
  "key25": "2smJGeeQ4n1w7riX8Lb5BeX17mvdynm2BEQW1H7xv5yTjKDYjeqHuYp7g41Xv7fG4NCTx2qbUUGhvguA99YW5CAv",
  "key26": "L2JH9wSJHmYMe6Wre3qHTadGmunFafbUR59kRFzr6FhxsDc54i9B1yavRFYtNUc6x4n2VBE9puJBmgUWZq6L5Np",
  "key27": "26EPe5UucDqgwVENpc45FvUh23qEHfDxafWzej3LK35FmSEntyQk2dXMy8AKTZfXePkw29Q1re78dYCcbq5y5VM4",
  "key28": "3d4s8sFusnwB9zoSuTs1cCChMdFMMaDp5sERP71KnDMtjqQmmexeiBYgEVHwYZqqd1PQx2TdFh2ij4sq4cbUaDm",
  "key29": "4Dt6HW7Axd4kVRJ6VBvf5923QHyeBhqygEWTNAZeghWvGA2EfBDQZWHWXaS6h8UT6nDUB1ronznjZW3MbWESfrFr",
  "key30": "4miR6f2F7W3RLLJEzCiEH4zeFBurbCUHiJHpid8bCbf7sCFJEmEMp3dQQA2KKm2jLM5yyLNtQ3rMNHyx2tAiKcjv",
  "key31": "219qLJTQC65v3VomDh4avanb1QafbRBMpfKP3MppBWud4vi7hksWA21pJQx9BZ1DQYuackC6Aj2cVtpD8UZ752Mj"
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
