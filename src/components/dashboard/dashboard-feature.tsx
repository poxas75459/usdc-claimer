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
    "3tzxp483vdW7Kx7KYhPSR9MfDDLstiTFSAzovcXczsKZJjU532piiVSoeqrMhBABaeKGv8GQbyr3LtQ1Hh2aCrit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q1QoRAscLuXPzpviNd4VWQcjQhHWHMKTHSzYpVvEdR3TuP2PsmZzzqsA5AzpVkqqXz9yBMGwNkKgj2JhwkpoUvf",
  "key1": "2bMRTHKsEFa5EFLYQpLwdo6qy282HhTPEhbjaPciw73S1tp5cKVxUKfwTF8tHhgVDeKp8W1X3dnBKhXrZBb3JqMH",
  "key2": "2wNp8QqBDHbVaCkJA5ndxEJfnReaXa4RSC8to5ysS6vCJQhXhGz1Vsw5vK92ueKKxdwgmGrUVBQfg2Hc2TEK12bE",
  "key3": "zquYSDxhdCtTFrJ6Xd5LJ5vdsnkpuBV6E4LaHbavZVm4rDoqsau9mbKf8LT94pEHji2Gmvf8i273fYKkRmcT93o",
  "key4": "4atp3s79XRMNdSAgBDkcFFBiLXB4ZKnUZ4dfZuZ2n39juRJygSn3dk6yqxSeL1iGpEoqcqBGhBVZJkjhVeY4FrP4",
  "key5": "4DdrM6tXH8jToP5JCtjmAnoCezf9V1dp7spjK12P7sMuuRLeup9hD7VnPtEyZvxPnZVhNcGytxpvhLCTZ2qB9KNh",
  "key6": "5sfACawegUS3Mu83hLUEmNW52QrVVPPR2j4CgPnDAnVmh9bqhK6N5RM3w58UknW6Ev5Xj9MqXSCrt8ibqXMHePX4",
  "key7": "376TkRBsdqzt4viLcncerxTHC8TYwDEt3Qvg9VHDN8T5s6wXNHysTEVgu1R7smEvb5s68CdSDbZyfPfHmrxpoGnd",
  "key8": "3WGxcdii1xKruu6cn8Dzsx8YgUvT3U3mNLXaSLhiMFNMJNcv9aU3fg23Xd6Nsb4e4iwPUDUGitcKUs3yzQcRf9Tq",
  "key9": "5X4P4RkcS9xAhyLi8DJRdWJgAgEnAViGXDaKdoHDbkqn6knsvD5AmQNfWthdgAyXpXK9DAMqAzKAcp4bkZZk2pZc",
  "key10": "58Uhk4fQJbGopc3hxd9qmYpGzjRokLoAyra1TEUxMD259fUGjPzjDmMDhyJgumqzD7yeRvTa26xPjMotmTpvYT1D",
  "key11": "5DzEQMy7i3E6tQrEf2ge8VSDApc3TLwMcQYbhvKz7HyQhrPMqD6io3zK4Ndi18YXJEnxvL66HjfGb58wqE96156j",
  "key12": "3bEdtDqmxhXu9Uj7npztLKRK3eia9e1H72qXvWp9ex1RFVQQtxTq3APHiLXprGEXQUF4S6bJNSCKgKnxDjzqk3W1",
  "key13": "5gp2T8TUNsonFiN7eNjjQZ5HEvSDvHkdZ1VR9bTJW93pkFRBLRxdRSXU84g8wBzBMdQPddYMbpnMAp4cGnBMsd8b",
  "key14": "4oCZ2kror7gRt3F1UTZiTurweRp9GgLyPzAxweELZnou6cZihWhGpwChcjE5rKRbeznJ65Szjt7kR187MVYBQzJx",
  "key15": "UnbSVwcGCawFwDYDnYyq6eNeTNVpirVxu6hEYC5vBLxXNRyuo3Evjd8d79Aj1J8hEmawqjEosq6KtWBCcaFr22o",
  "key16": "WyXbnvhAoiVqmaHH85qs54T52dndHKhxwrf26ZLT88pHKeBxSJVUyq4dsP3u2EaxWCepF3Mvds52EUwc74YpFYH",
  "key17": "25iyMBxCorXUXiwzFtMVhpDzquEoEwtYpcaVUmGA5ejgMg2hGgMZoADPdKcUEqw2TGBwzZrJFZvZ8HXC5GRBgpzp",
  "key18": "4qDEvbToBhGjsxAumzNprvqWnZt8b6k326AX9RrfjxZVwTyZbZDf4aivrAohkGf4eZz13jG21gXwiCGWDyvU3Gop",
  "key19": "5voA9szxvh6meC1fNJartnnsMRxfBHdNkNzBYzRAtiZ8hZ4uSY31n3twFPoFSGixjUSd6Q7KHcmLdSkr7TxBef4z",
  "key20": "4DUbZkVoAA6auKVPPGbtxt8cAwRJeKJQcfc4qikfJSwWCardCGgT7GH4RHheMRMzdwBX3oFHD9XG9U451w6AZ9AB",
  "key21": "4EBhC1LuE7SHesV8n1xRYh5xHHuwFCGRgPf9gkFTiWveaUNbJwwijmsnyLzdz768sKYTCDuMeCmbkLVqUMdwV5P2",
  "key22": "j3UUr7cU1TEGvNEmxb2j57cX5yGqvXBP2uDfEQnq8AgpbumfB2gcxnXh51hc12Qss8tYdM5r83ea8njsStsDgDD",
  "key23": "4AvTM6cgvwHVNtEzVzg8YtNYaTCf9LUG6ny3yD1YT5Ws7646SwdVmt79HV4oUrx18VqMb6qgBScRj4LhMt2ZJjx3",
  "key24": "4AcDi6aY9f6X2Yfukan6n9k58Ua17Wzi7dQHvE8MgwBhYXPRXnjotojPH3N1Dv5corGq4XFrrqyDDkQ77zfKVnH9",
  "key25": "216BBK2cAWUXSqmSPp5dN8HF1z4GPv1tEkmSshudNMWeJpbNs44UAPhC3ac3vachQHuz3UreH2YZuUNv69UDPfQP",
  "key26": "gEjWHrxJCRkcENcuyEcNWm15z6kfUB94CteixRYh5gQZDBJsEVFY8XWEiYVa9xKwanVn99xq2edP3vCDYM1jjhm",
  "key27": "4DZxQ48K683JvNSy6WKJvbr6z1Hhi8T1FWT2kzsGDjHRFLq573ApwY62Pdkdyf9zpoDxcQs3keTmZ9cHPUUFhPg5",
  "key28": "5P3uBfWjW3tLihynNJQsWp9pkzWpxvViKspW7CktB6QL5iogvEEDLbJppfruojbFaQ9aUCVw2W33ttYbPAtsW93x",
  "key29": "4FGofycPhyPRcAqEwfVxmmAhxpcoXYsosqGDvTdJyGmGjE8BTTfRnE99XUvH6Rqy1DPr4Tkx58TokxpRDD13BXcH",
  "key30": "4YSTVEJ7PGS2UcR5eyGVif5sUmdvPZWAs3hXZ6fcoAymRBQACSzu3JfnyUUxpcBQFnDvJEQm8bfr8RauwnnCbocu",
  "key31": "5ipkrCSmHmBziTqXgD6GGm75MVZcqzCJinoS8JyRSYi7zYWwQfVj3rtoMgZgay8SBQFUgYsPQEHow1SdG22gMG6V",
  "key32": "4caeDuU6KdLZAAkjjurCqjvyHAbyoAwAT2gUEfRA3PCw3vkvkyPRLdqypBmcdeK9b8RYPUvHJ4kf8oACV9vPx11x",
  "key33": "5foxhTnQJAhmq54X5Uyn28pj6bFzewMqCuQMH6a3tX5hcdy4jZnPUKLzcrdCrt3Yjge5TCkeDrfEDGSAsXfjQ4SP"
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
