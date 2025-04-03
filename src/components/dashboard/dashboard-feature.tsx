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
    "3B5WigTK53DYS3KuwhRiqe7x9dfKjsh4AsWFytoxu8LESvAazurUM7w2p1uxtvWKtqU6uoHduJMGNTwpwsuT6pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JAWXe4UMYZQmrsfBeUuY4nwzopFdV8jaks7c3bo5wmMdnxuiZ3mu4Qv61iD9JPVLnvuXHgygxMCVxuDpzfQw3sm",
  "key1": "4havRgPgRmobjhU1Xjzwf1Hb1itUDT5YJB8NQABVu5vT1PhV393gqZ9Ni2qcPiuL8Rn3ZcjNiZkSSvoXffCwFUe4",
  "key2": "53yhJxxKJcWh93ZQDkcEBb8fQvxwhP4VciPKQTPaAzf7Luso2YCzjJ3wSvUM173uoLfbu18qSXwp78rB6Jbz3JE8",
  "key3": "z9sHTruvPFHA46QKaY1hZRewTpwhEAWBc1ECDPTJzXHgkUCrHepQDkTV4ZmxFZotkrRWpiiz7tVukG3BEkcmPtT",
  "key4": "5XERHNhP95yoaHvJuQzpe1CX3Sc5BKX1bDetm1t44MPTE1Pi3pKM6qDDTcqnU8yTK15FSPTnRsHKk8T3S6pTUd41",
  "key5": "5siRKdAmjG4LxLbRfE1kq6FrFfKuNVGBMUwXrwaZt46AFWPVnVSKTnmRhfk7RQgZP5WzEdGHBQAczBFLYTRg7x7U",
  "key6": "5UBPwqYw9nypfT7jCGszvs3TZQ78iiiL4xbNuH1UoupxQ5CAZUDPz2QXUeE8F9vznWyFkgEghHneJTvGQaZnaeg2",
  "key7": "3gxeyUH4TVFqhMTsDA7hofyGVYuqRcTHKBSKKyh5WDBVXdqSr17162Ax8Rz2igNJTKeBenUGPVTFPxSjUtsMyTXG",
  "key8": "41Ro9k89JEZrLyWsS9KVK2ba98nCdwqvHrLUTcWk7mMqcAtW9niiCC61T4ddCMbz7f1PXfe4QSLh8YtnahYEmdkR",
  "key9": "5o7JSm4Ha1QxWFNSLXezuyCBj3cjGMTQtxYiPH1EwA3Njk4h9PDYddNwANeLs9LWYzKWt7gNU4VB9h5Qcf7iE6qZ",
  "key10": "49LXND5zxKWTztMLYevsiqiMKvcZE7De3M1GcYUGtqDvp5fpQhTdiMLsJ2fTZN5DsAyJ5kAZS6nifqjP5hT6Ki5q",
  "key11": "5ypF54ebqMUj1ftKmEuGNqVp3gJnHb1UuE6KSCsh51TvfLjmMTgCwARYMTt2ppPAzeSiUYbrSxxkyyWFAc3wu5WS",
  "key12": "2z6bEGy3VCVtvfzbZG9E2CfjWaQJygww5eCAjJ7yyuDTHgG3QtMcJQyYj6ax9tkxCHZLJqXjrDG49kN4uK8xzcMb",
  "key13": "48R69qYgDKpriin2mrohEHk3b45vn6gygvShwvgQNjuhiuRmCE8fE5pnSQ44fgMf1X2eer31nHjLZPiK7aJNfpeZ",
  "key14": "3WsGPbHELagLeb9cAfEHBC2JwKdKLVRMQyCBqhZFt9ZZJhx8spkT2P2GSBg8Q8YAaLYug4Go6QFUGDd2f5Lqu6wD",
  "key15": "3GJ5fHZkeFzhzVK7dqZ4F3tyRyDQsjuNDrf53p6aXKpjAtiUWjDtotW2mktA436UUHnBqF8ekFbFo6v8WiCEpF3B",
  "key16": "5EwSP3bnFAg2YayqinjikoaXrhYQiM4nCcrTaPb23DPz2os59nz4GZijR4JzMfcPk3o4AsxJpuVmVqtQDHXPbBi5",
  "key17": "3oVkxAAXyEAWsWewi6d2aeN2kwTLD1mcYWVab3WozCbAEnmCu1wrqLDHtRBRJdTFWPbmpwYY3cwDxUNaDcPvEt3N",
  "key18": "3vcKpnhzorbXnk49Q6eDGhtEVAZ41rpVRt4gcLNbhe3c5QogEEzhx3RjbgTE3i4AhmC36kUYuxTihqg2RqNh18AE",
  "key19": "3zNtjehRAiMd24ez5iUXgq9ePXLk1E9PbvtZsFS1nSGmKWu8hzPbZDRLFHgK2GTSdy78E7imxWEBYndBWE5GqgwK",
  "key20": "4DbF6K5QiodJR5Ct6uPFtRY9oapqrYrwNgTGDtQk1Lcdtv4LB8hNkcXML15QdJKjrpZkRhYSmDgVobpjbEk9PbAG",
  "key21": "2ADnkfHT7tssBjBF8ytbNcEefWQyFniZff31oZNaxvhapTKhgp1KVQZ5xMhJ9n1wPr4TojJBG3UrNGhKF3QuWo3u",
  "key22": "3ULxGmQwRPqRwoG9812cs3HTCxXCv5taG3nTsQB953rEbVFYMW8pWZxpxyBoCDxu9WVHeyRFX14TSgxf9Y8DAhWP",
  "key23": "2847CdE7ahpFX8Do1YhSCGWAmBGNjw4unFWbK3kHKjrZLDjwJbXkC1LjMNZU2pRFV63HS7cgNgPSNq2ShK1KUg1U",
  "key24": "pAh8CVKZVhGNXhgSPpEHoiXLPP3giQfCsrsdbAibnzgDmRrsPkkVCSZjo8BteEjaPecYxYDJEm5jatssVMCDATJ",
  "key25": "3FMpGo8M5Kv3T1bRcPcFyTQLbBKRkK8N297Wguo5RHLCqwUwE6WZi6dBUn71BYjXUsK89EX9RrNbvM7Raqs3f4qC",
  "key26": "4PSc2kCxL1QjKFxBNo3wMYkLuVoxnjx9jCcAvViM1RddBhuZs9ZnCQTLz4UQYgyVgtH4rH7fFvrVdyvHes3ZB8sX",
  "key27": "UYMzkAFQiqAKatHKfv3SzBnDEuvejSHhGZuveo2aHKjuCTk8D8eG8FDAPa5i2EpcG79kSkK18afujw5hp5W4Myt"
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
