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
    "kL4Ph42PLkyBTbdzzvkj8rRfhstjh2yuGkEW1WfZXMt3RFBE2dePjb9Qf8o3Wq9J9eferde9bvkwu6e64nCXZSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btA8WwYVXht8haD8PCaMG9z4RpdkPiSiQGAAxv2jw79L1yRNewMprmRdwMF8omJN5krf272m4XFFWAz4ivUmLnT",
  "key1": "5QwPuP4NDsSRfTcHJaT9qWAD9K8iW4JHZEEg92Yu9LGejVYurX6g7EW5trGyU4XG5JsrmjC1a1k4w4xFwfA7V7uA",
  "key2": "ndGwtyaBW9tucHKLHckaFrpumTC6QEtGTbALs3aLsRYRmoKxii98JghF7Qy1BgkEcY88V9EXA4r8K3QVCgxP35g",
  "key3": "5ohVTZx91QMxzAwzswrVyTLL7f7nMKAs1G7SBPfNDxQyPUMfjTjN9nRVwaYtyW2WA51MYwj9pNdnPuQ1EyvZGBAR",
  "key4": "592i79fJXXbKnxJm2WbJUzrV9QAhMthHm1nJhHeVj1mtJ6bfGL2eiMpBYhb1RnvDQqPScQiUgMKJvSwutEUdfuDg",
  "key5": "2Muiq7x8D68oukPoBD2X28SWVbMj2ZtX34Efq7LQdJN6R6f8myo2g13FWnbTUjG69smYop9gqfcyhj6e8mSzPnwE",
  "key6": "3eQ2mUviyvmHiDkSk6FHviCMK4nD6A33WUEG3cAQy9QtRKSSkPr3PfzXEbGYhXCMBWcxfLa4swmXC3YZ3Rggjaew",
  "key7": "5GeLoUbXP6R44suRBFqTRzmYeeTgVo4DvN55vFDrRRuiDaD4458W3JHsYcNnNeu62sMxWF91bhV1PwMbz4A7Tq1W",
  "key8": "3cKyRZrB1maokTb9y44RrCWmqhkkhp3Y4kw5PQtVokYJu61ojjhNiNjQSDMKaBZHaRnkz9wb9XuEZ6shS4RTLkwH",
  "key9": "47on75h3RqUhZwQtHrwnar8oTtuu6y3A5yNa2LkhDJLsUBDJxWugCKDnAcaE2xN9kExsLJCYSVF9CwB8bU6wK2yN",
  "key10": "324x1ZJFVLYXGgPvWpD8LRe6NkguUuSnkqwty6hVEmAZn7JJrA3qvTycLi7pY79gMAjL88TvfpGnPxWrsm8Uw3jB",
  "key11": "3THxW4HYsZ7tidJjwppd51uu59Knmabjzp4EygSWnvmw1xFn7mEkxpNoyovaBdrBXfdvNMMmSAgGQxFjYJfhoDuv",
  "key12": "4CXeoJrNFadkHcKHftzCivcodpR3tSqx5WM2Wy1sqgYXQ29DLJTTdZV5atHrxUQ9zKExCVDsbgpZSUr6M2TTKvYj",
  "key13": "2DYrmEFEx4Dopzm8P7uXh4yeR7Cfhn43LXpQgWBqeJZ8TAqCFsuLh1AFNgkSs1cD9dmJR2xBuNsn33Rj2QMRyYLz",
  "key14": "53siLwoQkeksyJxnwZRnsA3axhptsuEKAvUFDpt5KuZ8KikxSHScsVtH5VYvLKmpWyiVpVUw8uVBzVD95zwFgP5G",
  "key15": "PPFgncmtg9VEQgKYjKCMjNJ1WrfbH5tvWgqofGApbMGvt5Ar9Tjqqf5eEGGYtUVPjajESFd275Uee99iSM6bVbe",
  "key16": "2HkJruGXh6Qk9zxaN3o5SBfNGRJzzkx2K3y1sqsAfp7uUuHZ3aLc4wtQBhouM4Y4m5tRs5WALuH55Cf3UYN7iqL",
  "key17": "5ntyptxgFRVq1TGTG58ncy4fBQXgsuaWN3YDQhbeR18nqPsj1twzwsqA2VytXB81aiPmNuK17JG4avpSGkU43KJ9",
  "key18": "2rBYsfWcHedbi8b8Sp1N4N8HBdB2CrsKK1suxGR3XKNryU3otRLFCStYoP2aYVE4X7mxokZ3LB11trb4vnUZmngf",
  "key19": "kEZ73aB2JXXgCPekGzHJBPUanUjzDZtxg98GKNgMyPFEuXs5EgSw7JdAXE4FZVqFjferqW4QXUEaRD7UGnmEyyX",
  "key20": "3cUh6Jd4awtd2XADdJmSuABhd6Zhf9cLQpEyMAexuaLqakdiKox8PeZRxfBqY4xf5krdZpdcQzcaUUEc4p8LzhK3",
  "key21": "5huxndCoNF4dYZB3iL3x8Fkarj2kyngCE3wFeNtRPS85BPyVCFobTbQf5AJqHDdLFZU16KwvZRuSpDq6kVJncRq9",
  "key22": "9Q4HD7ivdoHV4Lias1i6K3dd2y6zNfpEETKbwVbCmRWd3CFf76AWXYtfRpVS1abMgy6osZaAR23z9txV9pb6YSX",
  "key23": "WLgkejfTpvbvrWdsQXd2XfNTVjxU5aBkuZdLxAAcJxDDo4DdRwhPsdqBXbHERc3oxaWs3erfyCg7Vmj9KEKyChr",
  "key24": "VU7YvYN2L99tfHexoWSye7EdnNx9UzaeonJfukpPBX62cFBSfyfXJ1Gvqr1mV74T4t3XTrEQwUzQFYM5VkiTYLU",
  "key25": "3afSzBdFwPXUVrP3hTezr97QnaXAtwkuoQCr94Jp8prtu9TZ8cbSy1KB2hU6YMFNt878Mo1DRPaPuiX2c8aWoMec",
  "key26": "3HoZ3L1PAsndMj9zrbbsJHCmkgNEMTAP7JuoSYibtCRVh99uU4Jj5oLfeNhT1RJkmWhCZKK7APEu4WeokiSWaxFE",
  "key27": "gv2aBX5qV9EjjKkCc7P4cPff5yDWv9dEaTyFoActoFXt2BBDgaiJArgaFtZrcsjTEaXBfJXJF7SappgoMj98Khz"
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
