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
    "2dB3ET1kdpSzXWwZ6LXSAjBvkG2ve9ZVvfvrtHVn8HQXFTbf4PAUqgThMY5E3XNbfDCzDgwgHux77GWFkAHSdVg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBc2jqhkUyEbmhQK1zRmvQNernxftKMeESgfta2r36GEwvBR557b7raJguUsvJjE1bYviiY9eShhxxrkyHb4nj5",
  "key1": "2fGDdFH4g3e7pZLepiVrXadjTp5CmzuEdMpQThmh6pkKPjkLmsMZ8PvVSZ39yTkxux6Xe62BTcNXedQz16mua76b",
  "key2": "h1aN4ya9y45tWMYWyD5KV4is8fp9RS7yvyQhatG5hp4cFNcrXEMuMUEBV8oXvWpiGDY274oe8V11w44bQFB6XvU",
  "key3": "2DkkKch4HQPrn95NvQDpYiEpMBu63VTaVcseg9dr8GswEQtQ5e2c1aktPDAPiu79kXAHhZpmzBkxcZwUznjcsJaU",
  "key4": "37jXtFWKPTabmk1kdNvXqHByA8vkj8pdegHJVHQgwkXxBVufefS4y8nV5zmebWVa7mtLJ4yeWS53F4Y7JpFprvBq",
  "key5": "5sRMk7b528wfuNgHQPwhmMPVFDVou23PhZZ6kYgs1FTw2knbz75LS1yAhCmNQ5ojZcksdxXK4m1DXn7BrYbQp8RC",
  "key6": "5oqmzHd14jguLpwLAP2Xa6hxQHsj1pb8z3rghidWB9JLMW3S6yWK9bqNors8NiJVP5DfPaZLv1GnCD4AscqRinuX",
  "key7": "2s6das8czkZNkEwXgTQo4rZV58jvLWTfKznjEXXSjUYu1ZoL8qxTzoFrXDjqGQpy5DfQC7cZr8m3PyBYdtLwjFpg",
  "key8": "Z5X4pPvJ9durzS6ve6fAH9U4AveGPGAVNi5Y1nuFQKwMWa73HkEwzWppTT3A5y4fLo5y73jp2Hu68St5xM929aS",
  "key9": "2e8FqErQT989h9WqG3Yusr6LMy4j3EAB9h7roPUYVAHLbkRvRqs2wzfZ1tbq6enp4kcR3dwgtNqAyuvLRsWo9Wxq",
  "key10": "3tbmpCj8PDKqf64YqPF3VQ6kq8NUBFnQnNvCyi4ZeV6ByuQNUrJGMfCSMQ1oGRkyYkz6FKGcRzq7dQy7NPBtTxtg",
  "key11": "45yoj8cXwu6SSbhFGYHwTDu7XRngLFNLmSh3nZGMWabKow6RGgwrz3H7yhDa5GUrGgpUgowPDVXogCRvpuueXNVj",
  "key12": "2saNxU21ZXi2ULXZMZEWHYfHTGXHHztzZbryHdxsHM73KBGjoG45boaSgdfsmwyAR6Db2zfnrXeU2emWvqQJGvBa",
  "key13": "3FQinC99MEcMb7bmp6dx5U8uiK8TQzmU4kBWRuziJvi1yvozYE5kTTrJ7soGwkmp9t8xo6hQvRg4d6SKk7KRRGXf",
  "key14": "56GPV33suxm5LcwMC6qDFGcVo3CoMdQ3pybsKFGdHFNmQQekApv57dmZz28QMrveiD3QSUsPaGbCLKBTRqpNUebX",
  "key15": "hdTMzj6fPEEfnyNUy4WQGqFt4uDtwJjjN7uc1v5XeVB6EbsV4xR8vYFrfiDxrY4kRT8gN35MZyp2j1Kp2CBJEvf",
  "key16": "2zyTsSkQb8rTaSaVoW6osjk7H82Ykw9memcNUrYGun6XGskJeTxwxvzeygkdziSVsbjKNZjM6eUpDKYw8Tqp3oQ1",
  "key17": "YRfLjrYTAJroWXU4YFpLLy1Ex4H8g6SHHvrDgHY8D4ugT2qbcSd8JhaSAbbeCEa3cghwdRBuHE8NLsaQv8eDhUC",
  "key18": "4aCYDqQedo2YR6uDsPQAP4gTWt6a2vFy4fMcdqoyutfvnHuDsvXTmicUvskDBA8CACBFuVG3FTHT9BHGe6jgYKBR",
  "key19": "4hW4ameEZpbk2qiKJRRZsLkS5M3orPHVZztTUb2MgQD9vZFewHkHTyhkXoLHdye1qQNsELMEXap1w2meGKkBrfKG",
  "key20": "53tLNiDiW4Nk4SGz9gNkV66cdHdirKQkoyQ4Dg6fhes3AUo6AWaNxh7gbHYjHzJqnJ1NVHYv4n3BunRi6rP3Zjdq",
  "key21": "qcC2ajLxSRouGeKKHdo4VVzqGj3krLKHZduGmgZABih9DrCJvWy968AYfdiZMZrzrGQHmcYmE1p9mbsTMP8vZBx",
  "key22": "2SnjP44TW7PfkiKDBPNuG3VnaJvoA1ZozYhg51Qbs4KTz9Pm7EaWn5GHw1BBrLZMjCD8tBfDsHnpW91cUkgoRbgM",
  "key23": "4jogHT891hJBRqG1QBXfuciiSt5vFkspgmad71AJxDVrb3M6BSaVw49uEadZQVFonUT4kUVduuXRdD31N7fyM6xE",
  "key24": "BQq28fDT7mBdwTA9LyVPnWSWLTpgdqFSv4gVfLvLBxftBEc2hf78EFR7kJ7d3JhJnEhQwDwWfnKugQQKeyQe1j7",
  "key25": "2YcKtYxu9wYnwUGeZo59QSRRFYGpMBgicdnvsLNgX5SYXaNSH3cWj77xcVSodXDQtpe2Dxw6j1WWaGCfaa6puKNp",
  "key26": "uPgdVLNgFxNUoE3ZqgmTEktug4UQJYBoGaz1EjRS5JdWiYjGGYdMCCx37bWxhTfDFVwkD1ZTkD9dpp65DuCAUkT",
  "key27": "5KV4rBKzCDW6mxE92mkcXaz1DejJC4RDoripgGLQ7rQfxRgH7Ncpu3SaDdPD9jXUAb7Ksy1gnYnk78LqKzo8KByV",
  "key28": "2gmUKGAaXMPo5FFmT41drqYqsrovVQm8AwoNXrXBX1RjijSuiBisJ3T6aUz7QKnyyjHZtWsrSk49JJHvN6XhanjS",
  "key29": "56U8QDpDJte3RGx4voAaUWLB4Sh4MT9jHhXwgPZfn1rsQAubFr15tCMJqmH2pFfgtttQ7K6M8xWNcWngFUHMpN4i",
  "key30": "26X72qXCH78FVMH3Ekp58pHTP9279ULD7vhkfMHhP5UucbsJza5PBVc1ixLgX6piSpQGPUJb4EukYQzHYP4Rcvyb",
  "key31": "3VQxHj8TJLoobgayqLg5ZYginstbuNJrEt4DBvEo6nUfRNycwFkkMzAnrouRDkFKJ43NQCKuphzrJyvqgPak34bt",
  "key32": "2b636QxoTz1dUYUbZAjvEkQTGDjWbadhdLMFYct3oMfdZ7X2u56kFXTzrGLdRhYHU4BugB3tifPgNEDtcVXxyD4b",
  "key33": "AoFnhMsvDvbzRn89BcsnMQTkEGZ7YAM9AaWk2fNfakj3CGLmG3P6vQQXfchJJcwVyJzCnAK17ER3i5xKFF4zWWb",
  "key34": "2PZkAnte8rjvRwqkmQGP2PqNhmejfLpGMbno4ABvutodFcqraYzfAKmZFAmF6yDyWhKFTnFveRdswE9xpkYFNsK9",
  "key35": "5NwgCLYRnhp8zjJ9Wrp6nPUX8YndB5n813znNa57BEa7wCSfbSR9kJp3HKA59Px5PzzA83Eg8RPbKMP4nnR1Rzzg",
  "key36": "AMSb1Srb1pSnxVHJTtGLVyrfNrKN95jDSobhrtcp9KiJAiCmqZMK7fwZ4emoxYFzunoTpGn7BeQUx4Rp8dYUQ1V",
  "key37": "3e9vRxgNwYya3rsZMssZyACvAxp3yEP7XqV8pRnpXED33mhVBwPCohKiNCE9vKAdvaAH4nUMQngztqWoMHDQrXBC",
  "key38": "3ojBbbYeo64HDzKrSthCFj4rXoxuXiZeZu6k4YwuVtzjAh4X6aNDZe83dgjPYmawsaARAiWq9zWr1kBrhtKUNYAt"
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
