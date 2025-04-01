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
    "tvhP9xDidSnTRAaUXet62efZZiSBojZ7H82XFHhTpBzKA3EYmTMnLCoKTAcX4YQ3Tfgtm4DkdXvu9E3Y8GLdkz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Db6qKv6YXWpmSSjo5vVyTNCrzEpii3WcdpEWNHUDLeUT1u2aWUzWPRs62RExamkZxXJEhJa4WfR9LAzZFXzq1t",
  "key1": "359mSkSQrDy8fo3yxr7ZfJN1iFXwCmqDcfYVcFtu5J1zxufZVe6U3w6QHeExRzGyarhT1yUx5MeDAhtozovyKZop",
  "key2": "3byAZkMTCwv9QALyRwe26iumRTsR5SBgNYVUrYfmPopP3rz7u3FBF7uJrFFbN9JqtRMsJVu6FKGz9Tv5o4kT6pJn",
  "key3": "5fFnD2GPZviF5oFhXfCE2Ywo33Vt9ZFe6AWA9buAA6uZKXHkQrhbWVfskLu9U7n59oJT55mFdXfebSSswZxNAnrg",
  "key4": "b3uxcmsTRbxiUXux2wwsjYLe1fQQYFB7HxGn4GUha2UQsv2wVy3bVecVyVWTZuVcGfh6gQi9bymWvY2FXMk1tjD",
  "key5": "fB5xvRfZwUMBp7887NtnXkDnFDSBsxRdjXUjBSJWq7gGHuD1EN2w26uQ8U4EXx5MQDXPgwTNEbhxmABBLG7ijbp",
  "key6": "4YjLrfT4wksj9Rh7m1Dnsin1u9AocJRwAmQweeEjL8xrnc4QuzEZ9aa1uxx9fMk7EhU65BikVr5iriw9US3DGHmy",
  "key7": "4TQieDPBqRS4fVAd1vyF9nmYvWzLj84sr8nNDD1PDmsRNdHVgECGiKTvPAyuzCSjJBTTQvs3zxvrwfQvcfD9qtav",
  "key8": "mecR2Ne9DWzukHchtzwZyRzwZmYVVdDe4oyc5vd2hM7k7xnZ3qmqDAa33w2q7PBmbuz64XDHvonwAPsknhqo8LC",
  "key9": "67Z9iTzWT7DZcsd5EWjaQ29E4GiWB11ghwpByiYaWW7yYB5RTfpc3cDubPm4ddxrRwQE6qm2JYew7w1D4mswo5jn",
  "key10": "2hUG596HsojC8UMnPFGfasizzeAcnFMdtfdRWwLeAEuFCbfGpW1P7MirXTQg7BteQAnc6vesvZHAecrZsWd4eXgu",
  "key11": "mwbcXGLsqmZqUDY36CJkrDdwehgteZnrHFVcc6Gk9XXmh8bUaX1m69nkXKWynrxu9HrG1W19WoFq3wiHUkFWCMW",
  "key12": "47APpw9UCDEYE3QhWw8XqqgEgN4zgZQbvqSLjjFxTF1QhiqYxLgzou1w1aH3EXx2zWDJ3RU2yE1kLctPdHSptdjq",
  "key13": "5WdJ2Jescme6BcKETBSZS6XensxuHDrky3RvhGg4yn25eE5ZMNCBueyfTnRwcANeLuXnkSewR3aXWqg8Um3VvKHn",
  "key14": "3ZewG5sSgmXas4rH2G4fTtZ7N3YiFDVP5xMbcqmUyyYqmc2VFAEB47MgMciyRY6D9UxRsqtGwMj8ma2Wd1JexYby",
  "key15": "oKFiLgkeeS3WTaVNQP3AxpE9z6VAsRDeAbFthbjSDpsK6hRt2hCKuXiji984R74fKdN3qJpXKbqn8mRc3FrPVTi",
  "key16": "62YsUDgoioSKPEXMTXrJTGaXrvyEgjcZxUJjZQVT2AnNT3gWVhgxDzFrMCNA6eD9BkYDAvQCikueJC5wvzUtFw5F",
  "key17": "485jdXECHZUgxAVbLJtmBpSzog5LhJtK7V7Rv3hLyK62EY7kiWQouZCUNLVmDDzarf1Pe1b6eUpdg4uoq8UTC1VH",
  "key18": "4pmK4AcH182Rq26jAmTvvnfmh9UAUu7Y1wZMocMqw7MEzpnY8BvKWUT66jrdYhaGcCFtfneGiB9yb6szGTQbbr1e",
  "key19": "4q7RUwvjp8rP5jXdtiCACWBwnMcuKzKKmXuGRBGZk8qSYX7M2RMzPZrCemzGsnFXwrVjEW7vH5aD8S3L9t4xVieu",
  "key20": "241zjbFQPUqxx9fQP1nXwsqSP9WqL2vt8cH2fzBDJnffd35QiMAt51e8pBxEwgidjeQvtv9ZRKJgi2zHEUunbhiN",
  "key21": "56DQS6D2h7WQqtAdnqSJxEZwm73ogpjYQiButy251bz4WaBZjjfMo9sHZFYezdZTiY2i3kRvjXHThj5ayDTkhEKb",
  "key22": "2kTCtySzkk5SWP1LQEGgB3ZdzDQ2skjkfruWa6QAbTtYw8CgPzDhFFndycGvAJ1XEUczHEHGVxEtdw4JtefJ4hMV",
  "key23": "4Pad6wDRDZcZfvW2afQKzdqhoEtucEimey6j244zkbCENcUD3yUuEG2HjFSq7MBLiMm8nfkAYz2e7NGjmy5gV8MQ",
  "key24": "xF6tNBX5dn9MfaTjFxGfqsps5nVKbwZzhRW79pXFDcuaSfbsUp7VHrVCz8PyL8QLnTAYeTHU7b2Wtfzzoixhvi5",
  "key25": "5Mxwgs2B2GaDBC98bzBit1met1wuN5JuWvr16mbYMZE3Qz9ggioC5r6QrKqPyjwF5VaY7SXMZvK6xEVMvJwyTiLV",
  "key26": "4WyUrWyhJ2L4kvRGLHJEaKy1gpWDHYFDPv99EYtS4bbqNPmDGWFebV1UiHZLaFw4qa19zFYjPQn7QdqARWBiUyAv",
  "key27": "2rfXzkLoRPfiNKvPjEQX96RuRpvVi3FNUN3P6HPtyaFDLnx1fdjk9u8Q5JUagniWWaL9LEB5tYsF4bgtHZoPKBp6",
  "key28": "293sQrEC6Cj66UeNPGTEprAViRSLpU86i6opcu5J1Zk3wN3LWNC9wLiniqwVfGXBMyFNn1GiJeb75XacciPf2mHn"
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
