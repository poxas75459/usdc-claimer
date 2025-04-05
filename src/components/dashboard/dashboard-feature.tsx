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
    "5Y8SU3CJGJsZaoW4BuDYyic79osQ4tqTzj7Sr9ewosMrDS5LWpkwduxai2AAQn8nB5je21w6icb6o6xSx8BRwVt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsgqWaFqzGjnMA8PBgfWQj368R4bd4zHL9zK5WEXTobXUxZTxjNUmy41bTzzJL7vnrdsgkWd6GLBd2bJFMjfuMx",
  "key1": "5QSp7hyUHTAsuVZam1viw1Vjscb9EVWQaJJQS91iEGF1e9cFEoVoAtZyPdtxeDAnmFWyhNREHgX3ifysTKQ2zvbN",
  "key2": "4Cpp4sTR5NAKwDG7FYorHgfZxZL299UG77hgnkhrF7NM1qactVDjWqppAJq5SXRMpPhtA97PQRbB8gyrDv6ZKo3k",
  "key3": "nvCWXeEfuzbmFt8Wsgp7tc8pXs7ahTbwLDbP1b2fY65afMPntBbTp3LunjSJg4CqZ3Q2Xf9pt7Tzcxi1aPi3jgD",
  "key4": "5HFKZfkNbQCzKkKh8xzYbhWeb9wpbkJ2UnTjPKwAUYCsAVdgR5C5XFEuQpv7pQZGZa259gfCosgjGZKU1ZPPRsnc",
  "key5": "2tJc2D2Ff5Dt6YhrfB7ZE2ifTa1d8NMHyeyqxS9THnNw3AQS7Fp9QMXmoW7pTicJtvNfx9LvS4PbfV84NsCzWHkE",
  "key6": "5FmKiMiUwWNbqWDru4djjfYUxy5D2dHqzxKoS6ibgavJyD1mYMyNhc6Tcjz6QrzKj92vQqqW9LVKKZJVbZRk4kAr",
  "key7": "2kdCCQpi7PFqVDmdC849VfVzMmwGSMZmQsu8aBZcXC5LsjzgE2Xv1jFs5KDeCVX1rqUhtKkjAjLhJpTTqdcQJr8h",
  "key8": "4cE4ZaNzVZVTzEmbr95uusqrZaxxHEppF341E41E1r4VRAfK6zy4zz7VV1pYTUtYC5w7LcEpG5jH17NYyun4XVCJ",
  "key9": "4Ue4TaF8sQnZ1umHLoazsR4gc5zqLjVRvHFQhFpsaPYGfJjKKTbVwfbHExc1oeM9cFZ2yLPUY9grZbdiwsD8VgsH",
  "key10": "JRn7LtVCBhFxN7Y7YZ8qhHk9hCiNcmVFUYgg5aYUS2ZrUaF8vU8DaDV77giv78Kbxqs13KmotCXnrmNDZ7ZwDbV",
  "key11": "51TmvNiN63xY3E3fn52TdNucVYVKYhL8kFCYe7NHFpECQfEztK1So3KWByr9JY11RzEHXn4W8DMU2yD4SWhTERV2",
  "key12": "3D31pESEHcgeztbDqTXETjCrQMdDzPTS1nB5XKShDPJWGPcvLG5rM5BVb18EPLFrJV8UswgoeLPa7cKmZ5oQNvqA",
  "key13": "5bMGmW9T39oT74Rm3S7rA2EJyyPjWCZfPkC2DVkcP32x9bB8snYxbAP4YYa9ihkbYeG5PRLebHZHznK8qZipjnQK",
  "key14": "5qLyJuKjvraanMKD4Yzgh9ha4178iXAsy27EBYR4EjwbamUveUo6wXGuNyEg1nMFrUVUBoKnVuynfLffkn2rF6EG",
  "key15": "5c7nPtYPeA5AK3NFKrqMNDnu3XCLVXCxvedoxtCQQWU2oa39tku4ruTBj49kTZaahdiMobeV81VYpgW15HWU7p6q",
  "key16": "bVztHEKa6vJauJi6Hh2rwBDTx2MXdFrF7ENNxmJCWf6Jbx7VdTJeWqVmyxsk4oZ8Z9yDrwA5KCW1BveCfkq7jMm",
  "key17": "2WmiazoNvQe7zZT3uTi5oMr1HXf1NCDdKoi7omQo1A6VDov7AdDYLbCAJDSp43mtAEKLmaEcBZ7ZnNWUUYRqta8e",
  "key18": "3QFwfyuoNWTVXinL5YHxqhLA4rcNgyfinNxo1coGGSFef1sVPBXuKdYWCkiWWVzv6uZk6mPjJcA2t86BBsZPXSBX",
  "key19": "4N6LvLRcmAhUwNxGb32EEjHsmhYRv8r8XuECEmUZyEF4ADVxaWUzrMhY4z1nBrwseh7THB2wqGxkwHHDAfsnBZ1d",
  "key20": "JunRxgqCeSRQ1LVeLwJKVWYWoMKPWZZRRDaFwfMhDWrHK9yuwfuZBMWqi8zsZSxysMgdF2s6k1PUTX35woQnqZQ",
  "key21": "2VYjnQyeK2XzNFagLBvRNmKyQKPiuhWGoPzZpAcBq7Cwd9gGuFvnL1Zq8jNvZ95b1tz7xYW1FxQQ4rtHDBD14UFo",
  "key22": "2XcpxxBE9YPfyzwYB5PgKXAiwckLQNz3qvUfmmxeewfLFs7FQgaZkeC5Qf3XWJeRAEGVEUV2grZoeUZ3PnJb9aFa",
  "key23": "4rP4Mf2XN4At9DWN4aeDvE82zvcYkENEmJ6qGTViGrhrAESFtGhsureqWkZtmFNqkAhNcspW2osLB5NhFmvfB6ad",
  "key24": "4KdbnAU2z9TyZTdqQaMd1JZnirLpKsnjzb9UfWanK9Rs58HR6H3Jv5vbtvuGDrUier9qbCE95Fm3PEeHRTrduRne",
  "key25": "4H3yunUPo1gZbaP9rxVFCeEra4LHU5XsxHvTrHtLwWWJei5ppgeMzBqHYTMLKRZxxhC14Ur6ByRJaHMYWPq7h9g2",
  "key26": "3gidqzzh5KEg5cgzL5BNMgM61MM7w9Nc5cx9QBBrrw778qnTFUNdMzmFzSA15TmPPybAi5Pce9Bmg7yX8HLDxQq3",
  "key27": "4ehVHx86PYV6gaQPLnmmQQL8HvbMDmhH6j718n7C9CMG3miAbSMV9TxXicYPqZAdS4Nw7awWWwE1p3t6CNo9RSEV",
  "key28": "3QPRKCJwee9x2YEwSrFJyD39GQA2vu4AmPwE98c4gHyr3L4v8upw4ndxGgmKgJL63Pmnx3suktAh1y1pb64szsZC",
  "key29": "2yJrL4UhZ1LXwk2hvM3BPSoF7wuABcmAhh7T4yGoGdWMqCdTvnBrYiChVhYvNnFLCwDrTBL9LWkYfVznZ8iurwH5",
  "key30": "34MukH6LyDhG3hHmtPgRARoVJrSWjC3Q17tTFDhsJptkd2C765q2SCYQ3Pr3zodhhXsfhTxv4e3DjPev7cFNMtuT",
  "key31": "3za4mYv5Q8WpN3dkv7k9XmqR84MkXsGgFsiPxkByzfLEqtwjN2qiHkrHGD9jn1272wk7McAubNTsWr9scnrii6ir",
  "key32": "5TjKg4duJp182NWubRYvTr3KYHoKkMLsqm34nZ9apiZaxKenBrG1QxWDC5gaXKV5VtkCcx5bEBignCa32Nuad2dJ",
  "key33": "3VbrZG5wsVdLV15fmBQvQiHuVKzurFg64tZdHztkjQijhp9hRzwypEKEQUKhdWsyWoDEei2nLtw7swY1Z8oo9PJ8",
  "key34": "65XHvE6X8RtEZyejmbwY7z9jQSKpNxr7iPcu5nTSi5P6X1VJ2S42NT27H49Gs9kJnLBQkFiNcStaLNeAyx6DfCKM",
  "key35": "5Fce435Sec6N7d83bFAQ7jhKVD5keFf4DYeBaYp3tgefB86df3TzhTEMNpeH2sKYmv9bcovZPB86tp2fndoB9ogq",
  "key36": "5i6qmR9gjt36kn7JTkZXAZJ1ZLuxLL4zpNdimp93rzUS2GptKMGpxZdN64GAvpN1W85PmSKbPbYDdBhsfx3bTvCa"
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
