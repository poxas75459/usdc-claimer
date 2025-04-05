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
    "5U7ikmUe2YK4VC2HfCy4uA8A6wsd7NSaYQkBREfARG9x6UWbUbjDUvXY2Cs4XeaaRfCx7DaL3xyWbJKb6WFHTtym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZyQ9BiSf3xodRCNwY2S3A3Es9BFuo9T939efUxQWvwhBsA4YixF2a3z9qoNipr2Xw7psPyPvztdfG8u9iHxHAj",
  "key1": "HwfFKKXNJpv5QBjq9cGy6CKGg1w9DkWmiRwXJtQLgQafpxyRLh7b744wUag3FW5WoUJHzDyBRe84yYn3cA9i4R1",
  "key2": "2t3Xf7mg1raa7YLCFNxVAZ1t31SjXFkzVSoiUyrfwgLS1ZF2MSYj5EKHAAbBDEeJwd9gU8bAi6pZGBdqUP4jtRcX",
  "key3": "3siuy9iMce3ShpKz4HXAbmEU7bfyMpf9iEhaxiASbVF1X3EyJSz4mg78SEp8yG8ughipK2JxPZNXEZFyTsKNHDmX",
  "key4": "46ZA65WmKKMG69EmKZDjwtHPZ3Nroe7x1xj92Tgm4GniM1K7jnYQda6j66g7GJaWWz7mLRHQYcKZCWAG2k2ELR5V",
  "key5": "5Fcr9QyZzNKnApxQLioUtFaZn3vrobwsgviFAPYYj3gz4iSxFDZs6VaQr8KNKG5hMFz6iXcFVZ9cYeHq7npWmikJ",
  "key6": "5Xjh3EEb2BCpf3BfPh1FEV5pi1tnLeCnRDKW5TU3S7CqyWE6TPNnhEnvkkJhQaRtD6MGywKkKkDNwEBK4hrLzqnc",
  "key7": "rHYMzTAvqqsHAArjg1EnJfJtewp68zosSXAqPqAx2dPQ7ByG6xQkiZ67q8oYEqTDpiLvMiYkVaBNeqLGtCkuHBV",
  "key8": "NGTRa85MDU84UWFMEmheKwzbEkUr7bBQfqToKzWAwpA7QJR15PKvenCgPtnCJ7dLpnVN7Ud5EnRFbqTSG6B8wf4",
  "key9": "AGotgHchWpUWbFSoyHgY1mMbcdMhAoXMsGSawnAxYP93inKNb1Bd4KyscokJdCBs2w7az3hkmPFHUBxxbye5wsi",
  "key10": "5qNNRTaCfNa3ZtLBqmyupWN8gm86JdpwC4evCsf5izuPbBUcsPwVzCYFZSaS7r3rttPGLJVagNDvNmPCxYxyzrD9",
  "key11": "evjB7rLryUJcbTEuNqWygEXyFdVEXTCABNYLVbacqcMcAGxyUkvJ9ZVXFF5aC6AM8jhzMMPvdeNpii4eNMuLVw6",
  "key12": "35cYcA76eFnwmBVuSFbX5ERMrBLsS8LCj4Wvz6GqcWvx5vjLZFAJxEEkArNZJ5QjiRaj9ynMVxzqyZHirzU4zJi",
  "key13": "4emUyh6LbU1csVow4MCs1Vsd7kUWFc5DQF1B75nGBgEdNbmZGmnL4asw34wJVZcW2cHTvn9ujeGtUEX8YDiSiUEM",
  "key14": "pyZKRK9MciLY8Ub5Fy7eqnzGSH2RmubgwsF4Q7yDU6yakcJSnqPDp1EXogQ2iTSjQtFXKv1bZvv4fQeC2SDkypo",
  "key15": "5J4or4pqkRyzK2byveJyue16GyqnacTa1Z8QzsonbWpKWvgKDgjCeoAMWcp1dEWrXZQG8JeYqid77S4oBjQWd1Sm",
  "key16": "3zRHHNpYiFePHGWTRs1KoSSqLqVdWiWXJgE85T2iLw6rZCopQ9fsNo32QmmPGo9tsoABVowa16JE35iXX94AW1HA",
  "key17": "38nQjn4eRT7AgMedWrBZmMhaW51murr5qnDmXjBvo94155j685k8xisFeUo9RxZ93GTCUdyoVguXgc4WS3c2aS3Z",
  "key18": "2rwafi62MWRXrCPktiK2XwJdde3pzftMZXdnTXrSo5K3YvFywG7wzm5mogpuyCwpgpkrt6RD38rvcG2gXmhZUGmy",
  "key19": "5osCdGjN1eX4PXyAjoFH9qJ9ER4Ahmj6wF98fhrYZWuJbdZFDbcsyUNtU8MjVbwqC9M1HVUoC7ue43AFVEYgHNSq",
  "key20": "4Z1mvJCQqhVmzzyiiHeznmDGX76FUn3HJ8HPdHzcbewQSjzHJ5rhNkWnYVVNNKXpRbcRuVYWc1suTEwhAunahd6f",
  "key21": "5AjVuSvYYgryYVJTeG6fLWCgqzgoVeMfNTLcRhSpnJXxfcrJqpqEMV4iqTNsNDYnwpni1YPdjgCGmUkZTmQBzSsL",
  "key22": "2Qu9UeLkEU7HARYmr9HH6puajpj7Pi3Wg96jtgGXY6h4fE1JjJ5dkzvjdHWnJZxYtn2dpHWoAyLQE3Ws6Lo284Qz",
  "key23": "3F8JvGaS31XHrChEkYFJTtEuw2ERZnVQiDkFMcbzuxvdHns9EQKguuDZcP2aje7wbQFKdt8anWdwapgKoU8cYkTS",
  "key24": "3pkLmiHuazP9sRcjduR6BGmofkd85r9rJFujMYv94RRJUHweFaqW5JtXhwvm815FNtGMVaVgC2gvnsAVmYfrAuWm",
  "key25": "2AfR7T8N2sNfAABpWPd8MCyTVsLHBjMkiq4N8M8yBdC4pR2QqevLHKX78F64pVWK7RJFdVZFnqeY7D4F89WeXpPc",
  "key26": "3rdzXfYvCbWb8JaKW6P3pWLXDHUwkH6RsQqDKEbQEyVdEAxYjFgk15HmNaKxJjUyE68YTMEkMTzrsQHv7BVj3HRL"
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
