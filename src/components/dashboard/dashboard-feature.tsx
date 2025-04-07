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
    "4NHRr6MzBdA9jHPeRfk8nz8RbHHSL2jEG9UsidXpoNPSnVLsU6KyiyxPgquEofHwZa9Un6UdqRC3KhefG1kRCtUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2reGspozQyzR5nhk1fK7sZHFp7QgamYhoHkqupfi9cUrz1iwDyBqMUbYGA6kKEUkwp29DEPpDj6AFiYgrZ49ctLZ",
  "key1": "2EQiDQsgXXVmyMAHxBUeWbWeEys6HtNpDPAwyqtshBB7Wuy8KMkChA7rSFbQ6ytPKgQJ6b9uMWmbK4mNU7g9tHqJ",
  "key2": "4vmDULWyVR9H1hZHmbdGNzF7gxuH8jGQpb3fMHLGgKazK4GyD2gxqg8ZmsrzFaxMvmTpeTnuFomvymE6HXqN6B1F",
  "key3": "9Zt1EEdvsgEUpQZ5wy6pW165DLHqPPp73Dsri1DYpaRDLjzopPTFjeAtQxnfBxMtEUWy9PUQiEZfkDKW8tZpe1g",
  "key4": "3hYJhYJKveqhH61uEmtxMSi1cHakvZiPsiqAfAi6ajRoCY9R6WmN2E7zVZjTNnZCmiQ7dD66kfkUo9n9zNckBmtG",
  "key5": "59ihzbxdfn94t5rwsNC7XmwzJmYQitCbDg3csrMxVQacJdzzWapjmKwxzomwvSXWx1SEKMCh1djzNa5V1yMLmoSz",
  "key6": "2hNgA5e9bizbL6nU4gvVW1S9GeLuyPU3oLddpunD3mBFEmR2KKMX27DS53EDC3Bsq2QGk3S14DnbYQNaA4pcFty7",
  "key7": "4MkxtkHYSpCSGi8mK6GPAifv6oxJpA1VrFZsZh9jVm2c8KRd1xMvXw98FpLGPzade4FcGAhqB95YkYZdiicwSpES",
  "key8": "5nNcui8cJSoyLVBe1zYdqfSAmuWc9KC2rxkNzXncrz7bicGE4HCfP3FoegNTQ2SNfwJ9Ee6Zj1xW3Gvi6rmCHrhy",
  "key9": "3UizzNRMbLbhZdCzLBYYEVVi4z1VYYk5Edez6s4CiNYxopqZyah3aqByn17Df9oXZNfeE28pNp6achjYNgB3WPjB",
  "key10": "GQ9vZTyLJC41GaubuSNtgyDzWKYCms3QM1ppYmV1oaEDNWQhwPks54fLKvqvJFukjiWipKVr1v7M5CWZFGLXMKw",
  "key11": "2EP76HaK7dZDJ54vfbByE888cWkFurnUTdVdgJhsuJk3gDwLSHGY64uxaMWVmf9ftrtF1akLtUepgaZvRBDtFMGU",
  "key12": "4SJQFDDLRUQvTG6UboraXjCtTZmkzarCwdMFU9VbvFkYM9jC5SokRyBD1vgsrH2sfCBsDYhuHnh18KRnADAmmoYQ",
  "key13": "5BZT9pnaSpLXKRoLn8PFFfkYQoVSHWYgQDN4FtifRKyeu3jgohJ9V2VwuZRFhFyzvWANC8UWk8gjAMLBzP4ejxow",
  "key14": "4215faSDvwf7X3TfcmpFUBs3bpFtiBDSvJRqpdKMJypaQUARHB7jL7GmeCEuYFf86w3xB5o7ncXGi6r1DXxGtTvc",
  "key15": "2dLenmZiyeSowE6pJ4Z5bz6GRJ12oLBd84tQTrHnD4kwEjPPBAfE4cQGxPeCuq1CRgG7wbAPz6QgGCaNxHSEPPUi",
  "key16": "5it1ukFvqcfuxf3g9RGTh1Xdm2BaB2Uv2GCYYZnD9hLmT3LcADmuZeu7rYomVmXSsqjRHH72pgjrY53mW86TA5uR",
  "key17": "4vEePigz4tnyNCWC16NQM22XyamsRyLgSLyU3jSxybxB8RWJqjsx3vAfKXsBJ8kCQBAkamHwmooNQLb3czDEJGTQ",
  "key18": "5hxUWeepXyRaYsmzC6uGb6sKvXhLWq1e1gVQSZgjWRh2XMpEr5yjeZosXYnBmRKo5sY8mnXqqJ8EqbJxi1VwjQFC",
  "key19": "61SV6nCXrYUP6zuTYNJMVXrnwdbWrCNAq9nxsTo49hDR7N4nhX69BrHtbAtmyo981Jmk3ZuJxrmkjRvB3VtLRsHd",
  "key20": "3f19uEDQ1GHd4ac7X8VjasRRfUpURZT458zaxioDVnkugz4uQaLK5gS6xFQRetV2FiXbVQhF4mU7TZfPfoSt21hc",
  "key21": "3BMMqzeBABS2yDGqHpzEUiU7EAJopDJ3QpvoY6f1tLyau4iQxWwj7gpVo4G3fzpS5Rh8uUBJotFNzVuBvbYZJSF4",
  "key22": "3MRv5yXBuZ23PNqAKeE8L8MJaT1pSJFceCPs1zMuaPpteWCSRgnCU3kFzH1gbJJaKuMCtT3wUd7wacokHfpWiAat",
  "key23": "BXwBp6MmAXroasmTujrRqeJD65C8FzxeJVTgNBnnimK6qKcJKDZ2pYQu7S7Prnt2sJFaY4K5NW9aUS6p47oHF9r",
  "key24": "3vjJ9LXMRu3ewY86bjWyMt2m2EowH7g827xrAKMD1sQG5B9cgPTsZG3AKF5cWXHrF4Ho7fogWPDKxTUnPCppQZKb",
  "key25": "u1v1JPKDSVp2tQWGuB2Q56P9rPtHuG1R16g5dgnYpxxh35gzJCxeSuv4JS4ENsRQNVfU37D1J5ULKAncVgSZbET",
  "key26": "3VMHvfJBp9sJVUtNQmqGtzXUEhgutQnHBZKuoHtmKTCt4EwqXcPgoTKG1SPQZ3iba3YRK6QJ2YuJMkVuccUXHYsi",
  "key27": "5Dg7X297CJv6jW8qmDwbjrU8juERc3sBBQkCr8gV48dDWhUWVUW81E1F23Ay9LUrLvLDWzC3YpG2YUfMNRXeq9aT",
  "key28": "29FnmKrRhdLjvMV78k42SFGYZc4usmCW3VrvSv8B4XcsChSiKbSUcdpd9trnUwfc4yBRxaykGAU8f49KCdNjquCM",
  "key29": "2pjCk8Gbhoz5a3ASxRWDb5ihHNSqbczdvNeye3A6wkWaEqzHXbAqdBxVJkhGLbawc71Yiho76X5WNFDw9Zh8vLFH",
  "key30": "5Y1YDz8wFL2jGUPqPbKYwX3jM7dUAuvHvAJYRVMDrKertrEYigmksVVPYNKyBYvJRcqCq1NY1H9dwP9wynnnJuBm"
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
