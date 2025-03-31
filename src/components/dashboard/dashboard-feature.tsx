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
    "51BJxeCR2YZ2hwv3eN8V98wj4gt6arMHh4ngVmSX9J5NLGn5mFyKeQ51kuEtc4MPVxdFycYwb6fehAvL1nxQj1Wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Q55q5QMomDS8kzcJUuZsmgKffF9kuypr38h3am85iG7SYZJuKnQijXqs9gFsUgwYBeusGke9VZy8gVPwvMfQhx",
  "key1": "4und4Qe3vMsvS4RGkmypNXurwEAC5Zyq5aEiXkS7DLGLtZnydY1CpJzniJnzqSAiS9pfKN72Xzrxw3isqfRXXunG",
  "key2": "3pMcbV7PC3hV2D2WKpnnDpL4RhD3fpmTmEoiKXcAi4AaTqdE4JxkmcADD6Eon3XWvqmEHPUQQReQXZ9gcNh4Kq1x",
  "key3": "5pU15k3N4XxixsagUBkdXsCjTBqGngbThckj4ymeapucv6hjUsbUFKEXz6HJzNu11E5eBq8fHtYSxazVpDzXXWGv",
  "key4": "u9Yocy4u83na6BB4PJZvTQm97QgfazBdXcCudpovkToL4ao4F5pqF9SQDobVPeDQoWiTkcfBpkXdkhGxvQ1mgNL",
  "key5": "TAeKk35iD5QzxLkKkc4sNcMMXVBpGMN9iJinp1hpjYRRCJL4wABNb8zfmRWwVo6acEATfXdKvb9DqrudqRBavne",
  "key6": "2R3fEmkBoW1nErbrx7PqVMbYwb7MMfDPLr1qWCG5YBvtsyVgFrpRtzgm9AF7DC6JN1JiDvYM79VJ1hRCfBBXkLa9",
  "key7": "5PWxVXrFbQkAv9yWMGXgewDcnecYNzsKcryqp4UcVXejuX9ZTxfEHAudvfZewJfQTKnBCYn3Tg3mxC9qnF29daZ4",
  "key8": "325fBvyp1kTFrjYpmJrSSKfNerWtEtFzkwC3MoSTd8PpUd56rc6myzKeCsxGhqDNUuxN8jrq5qH54qXQpGD6m6Vd",
  "key9": "3MMPTnZRaTnq4Cph6WrLrtepSJ7g3muef1zppWrpgiHYbQJY76gf7RZdvSiiHZboXoaJoEQWPEq4RZFij9YmJXS6",
  "key10": "yaArUAYKjBUo2RHyr9CQ1AUucGwQ6ZE3Lmi3DvuUKPoXyhb4hnF78odZctyzB2mogXm2BjfkNqbei4efPTogMiB",
  "key11": "4QYR8XyyRXpW4RdAaGnHozGbNFP8XsyBicBGNut32NWLzbHhCh6yEeuXy4x6T5Ck3yKWEeYJL1LSg6NpCAmi1gcD",
  "key12": "2S5vdf9to7jYzePCjGvEjzAxtDsFVPsAbxLPup4uTXx5pQ3ZxRxAy8mrFA5NetcNCk971BKCFoV9V87bBCgRyE29",
  "key13": "5PgcHU7YAcm7TMHkRNyLapUUKczNovo1unX8hUYj62bzd8gEX2itmnDUf7pby2N92Ag9Yrqa5suwtBAWzssY2WPy",
  "key14": "41Peh4h5A5J6bbpMF1GX5YCkKQ5s78ehr59szsphGoWfqdt86jgMgaEPGbt5Rb4x2BhCZyJtWRafxXeRSiweHTgm",
  "key15": "3feQNwr421NNkrwjVJWRaZaFdeKcsZ6hmF8dsUrmaTy82CzyxiL4g6UPHZnZ6sjE7HchJRCacUPnTL5wJEvyYPRJ",
  "key16": "JjB7c98s5Xbhzp4xjJgJhXoMB9cjX5HpjNaAtVk62LUP3r3gxZoVRh2jQ1mZM5uUt4whKrJF2c8NiTUrfqHNbsP",
  "key17": "3BHYETpavi8pAgGapbpS2LJwgBoic2Mt9KBgyY95MjpB6KYiNikED1iQefb7dVaKWkkhCxwqCqzD6x3NAqFwvTqW",
  "key18": "3eykecvu6d3YQdStvmL1KhHtH4c2iQffa6ZdQprG21i9pkHzbZa8wi14W3ZM4EoB8pzstmKndiFfZ39sJ8ncdRFr",
  "key19": "2qeHvVMt5zqUXfMEmQZLzoRh2aqvTN5SQdpeXENBP6g8TiQyPEBa3MtxF1w9rvbWfLTMkMacRmhdScRGZkStkYCi",
  "key20": "3RfSjqUi2r1gTy1ZSorA1VbeGRx3jFh2w9tkNKfCB9KaCkHVcMXq8rHSxoksmU2qVXeuuaXyRoWiNMDSWJKRcKjY",
  "key21": "2LufQHWXbDNCVktoLsFXFEmsJ4QVyKhUafvH4689KbcdQRbFBLRJVfjgXU8EavHSRt3R3cvvqheBruwHkfzXTCJ2",
  "key22": "2HiEh8rRjAa5U9kbQvwaPDrT7E1L3vzYxpER78Pkv4Zd2ecruxGdU7uNVsbnTK4NJJ1fsChnCcjtrmrMGAcj1J3H",
  "key23": "2aaUc7XBj2Jb3W1E5MqEsBaUsEVg2HASpFw4qTutwQiU9hDitQUZL1CGQAnu3V4G8HtW6JrQmXEWThm42dkmUvrw",
  "key24": "DiAzPJ43nh2uqUyy3Fyau9r14eYwC9YCaq6eoMRSosgBzPbxLWU4kDFnuq9CrxsBsi9qkvyC3ZLGSyQZ5113AFj",
  "key25": "3ZPjFjBKNbPSAtumMVqDrWt9hQaJj5i2jQNF7fp8cUK7earFFLmFoJza8Jdhaywk4TvFLUcqc2brzxbPQk3DZkpW",
  "key26": "4sfriGDCzdoJPV6f88LyTYv9UsaTMW9iLp3y8Jtak74caQ5AQZny17ZiBhqwGTV2fEdSwdTvbi8jVNtSf3y3qHeE",
  "key27": "5h79VLmeT9vTqAJRyXJcuVFdXCZTue1o5jeChANa1U2JGmpXtNZcY3qrRWD8otGZsTqBaH1zStjeutUU9kF5CVXo",
  "key28": "3fRUjE1CdqzdpY5PrN4Wrw4h9uFAdDHz1VoMrRk8TRFEfTb2zgWEXPCjBA5NGKhTDLTfVVgef8HzP3Kua4G9Ptxp",
  "key29": "3B2vQRGzBe2GQm4JHrb4bM9Aw8UuZouPAgV7UwmvpjnL2SkyzwxB7Jwz8eMPV3cFtGP3JTi7boX3mdKqTvZdfZ2y",
  "key30": "3XQMDSKmmm9rbhTPbZiUa62dgQbPKB5n2aQSXwJB9vsddQj5JvRjzUBiWkUNMv85NQhvRR3o4EPtFqYFW1WMX1jo"
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
