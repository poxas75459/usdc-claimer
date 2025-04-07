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
    "2vjcMWwCg2WwMCdcnFhzycWhHVE4d8EGwVNGrNA8hCfc3p5wR9fg5BR1ipTQUwr1LBZczHTpgdkcAmVFRfLSpWLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KMXmGAA7V4isbgLemZpQUNsaoVUnqj1mJd2JcZ6pay6DxmHvbs8fVxpuBYHRQUwpNPQfr8czgJ4cvodzEZ5Ua4e",
  "key1": "2BNeaurW5xw63afzv9e8PtrDcMBRpCHL2feB92CL7nZrydgBSRwpmYWnLoq39gQtu1KdQ9ZhExUQVdGuJZd5jhn7",
  "key2": "4o2fNMQ2tsXceQUy3KSq6V4zEbZvcuE98KVpdPhUYcZTabffe8JXmFKUHK6KC7KGFaZkXfHhT7TNwtmHYayovv8R",
  "key3": "2HeSXXrS4y3LGR3f98DKhKHZsrvRUzb7L8nUxsNx12EL4KS1JFuF2rDD3rMcjbwUFzCuCyfq1DctmUy229LFmJZ3",
  "key4": "4CBzGeyo5SY4L96C5KKDdxduD5L49XYVZYKdppHgXnVkMwqCYru7bnfYArh1UBDu6dMdatq9ikpJxksiTZ7qoqt9",
  "key5": "34jquhVnWS9ub8bCjAbg48eJYzv9GYV6od3e8zdSHYAH6kBSP3ME9YsY6JngWDfcUBEVRfPPowNPoHAGRVkSs1cq",
  "key6": "5LfrmecEfsiMVGzg3aLZr3pxfDyqrtADy7pA3iZk5TRHJhxxCfNDgsTgbPxFcM9xd8JE8yQ3pUHP6FE4caDDX9wF",
  "key7": "tSoNsF2cBVsbwEuagDaGJBWpxUNd6LM1EP2mKBe3RnRVCYSE5ds9AKhwzd8euyLPNaLyYdAaHgRAbd8BtwgKuKA",
  "key8": "41gtyZJaJziqehfN91NkzAPtuP8RMXDKX5mo5KjvGNTAnXRQ8acvrosyoSeRYdygAqGSFe23kmrRAUDkHHz2Mi9f",
  "key9": "2JVo2Gqjk1Zg891wS8PNLTRV64YfCFyFzpnMCyizwqUsa7ZTgghiRmY7cH6W7u7KemXNftYYUqTjC89rF8zBk3JG",
  "key10": "3gfnoTBafE9V4T76te6RuPW3dtNmEVFwjRnJzgGzHcw69YRxhhqDs669vuuRwnrEWoGcjq33AJK7nHhsMehMzE1g",
  "key11": "2XRJyacirmSPam9AjkF7yQNwyEGjRQaH45LyEEN2eU7XRLtuJ8E1Ppk14Zh96CC3z6iS8oEWChkfDes8x4ug7h6K",
  "key12": "54YRiSCxpSBG3qmHEVRsB2AxerRWDNZGWkvfz6U48zfnVyTcCQf9hkKfjmpJTpwJnermhJt5exBp1zip68YuxNXb",
  "key13": "sMsHgbYoFdWyGV2CbRB7s8pvd5JCcHaYzHspmmnuWcZTnwdiSX4E2cKxdrdaShxJZdmSf822koYzHb1DDKJ8cHc",
  "key14": "WpXcXfQHpKsCirwWKdHwsHKNzeBJd7Go17CfwAKCbeDRykHkRDtRLj5T5F7qM3u4WgkHukSrQH4MYhMj6ZTcozH",
  "key15": "5RfSPgPC4uoFijyjFNqnNfAbMxoE4HiQMvdKdR4Z4KTT1yWJzAZAfa3gYfErP2jx6LaEvGvs2KYb7P7B512X7byD",
  "key16": "2yv482LnqCUXCwa5goLepTFqj1SxPfvgtH2uCsALytaWW3gkErHuxN1H95zpwKSFFcrqbJkGZ91c36JQAmitFrDj",
  "key17": "4fofkJo8QVhgmHuyvVqVcSuWkbA3gbjnsk9gvH3C3MYn9WTeG1S3wHTzmaXeWxZ96wdeeLFvb8G3b5yKwQRh965g",
  "key18": "2Xg1ZzwYjKi82ybmZgQFcqrX8aePB4tJSF2DnzUJZzcnMMsQQvfTnvsZdqe4HgKY2A7whK5aug7Ybj7yZkAD1qhg",
  "key19": "41tDMbyjTCdgr6tzei1ExDzUUKeJTYHPoa83YPMhwXxNvtWyUtVC1gH1rkskMr4kiUQV4qjMYVxSjkvmyh6gXzn3",
  "key20": "66dNApEGLiSvnDGKVjgmUM7YN4i4xDFjesc2RUMPcedJK3YfsdUhbsHAFXx11kkzx1YiKbnoBQjzs2n3UzbyGANy",
  "key21": "5goc5LCcagH44atmvW3h9sqQzXt2cyD2YDWp8guUHzbFvghQHjFpExdeg5jY3wSxGFN9hFnGH838kvgE6hhDwjHx",
  "key22": "311DQBFo7ivQgf5yT1ysWdAPPGk4oWzyYWCSiAbtfM2PTQKgYXT8fATxN7zNtgW2jEAAPdypVcuHt2DqDmV7go17",
  "key23": "2ZaYTg5nPbQYJoMenkZ2P2DAcFajgmoWGZhXn4EfEu4bsgKmngjbc1P7Xmnuaz7nB5vgMk4FHJxxc1iCsgp8c4FC",
  "key24": "2Uf8UA6AiXuGXnDqhQoJZBWEUatcVuFjFfo5qqbDBsAZ5Av1N2pp6JbPhbmY9izd8rxSpoDgmgTP7FfG1XzeUtBJ",
  "key25": "xCN8KF5V8ijW8dpJQ6MMGsmqbefNuqLxutMWmKXzfsYfvk7KpV4RX6MKf3muYki3SzQvCZFW59DYJ5yw7xzfsaY",
  "key26": "4tpbccyu4nDgcFQ2KbM7eKqEAKfbdEA9cw3iZtxwhBeJuTMNytZmq3LPNDmHrDtLBKfzBojg7Pv8HUDUTvChHZiv",
  "key27": "YjJ75gRhZx7faJG1UY4evNpZctVSGvxc81QkBq7StTc5mD5YFxMZkDyZUH1X5qCcCXwpHvTqGuM6JLYXZrDjxno"
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
