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
    "47cRaEYp6X3BwLUCeHFVN66DqvgtjJz5Ab962cq4d1LfXYagBHDHsZnqNTJJS8vS1dczuPNBMZuCUHpq6pVQXj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSZnkUb7CcKc5xEBdm5B8FVmLt1UdceJ2h6cxvyScYiRLBh8EksxBC9XQHeHb7pdexo6JRfYtXJzUNsjNsQ6PNe",
  "key1": "2KEzYTPtofJ5jBkFbmAaPyPUy5JMJV78A6VUkXiQweSgQoc45EiYGNAgYyt86CZxDpcNZa7EvuiGJ419MNLYw5Xq",
  "key2": "4M5jaU3NzXGEg8YpyW6Y2RCyCGTjFkzrJcnPkqYpgWVPhuYCEh1VyS9GVXqDNxkxpgnmUi59LrToPQCnoCDtZZMo",
  "key3": "2QohcAwbzM7MvhN7K4hXKx3kytkPcjyZXUenGE66ZvxSejNHr5gt11rGPBQJqTWi7ZDrH6hEfZRprGxM1T6eddvZ",
  "key4": "2Zk3R8FzWHivvvGwQJpNN154VdpuokJDvWyAAC5JoZW7MnoYaYotdyM3buJwXwqZ5pnnypYUEz3yphvvan6eHBaw",
  "key5": "43Ube78DU84wk3s1d8acGz8WdEfKx4eEPTwyjhbkDBpTtGVknBY5h36rxR6T58BaofhRbU16Jj4HQ5LQgRxqiQYz",
  "key6": "PyDw5JEVWbLMoYBxNM1dW31wuPZ3ViS1jn4zMRov4sz8Gfr6Nhpghz5a86L4Ro3pjCrtJYgkLT8boEkFWq3r3Ed",
  "key7": "2EVjnj6U4MZqehHsA6hxjBRNGyrgYQH7bhV4vr2EhApY7a34nGbst1iY5W5dtmrA384ENHWomYWTxnDm7DnZEHQb",
  "key8": "3mazMCuKZpi4TV3vHvfkvCbjNN1VqZuoCKqufoBmpe7Xu8iHfURPKo341Z9FFEyN16pYzDJWmf9aXJ3TXK6J1nEK",
  "key9": "7h5YbC9BVtSnzV9aL7ngbYYvjeaqCjq9X3z7YPZdqefRiZL2t8ooQ4C91B5mTyfvcaEjd9is7k4VTcuikH9RzCx",
  "key10": "5msUfsrFw9AyiPzNjkynP2e4p4184JBtigVAFdYtu22s9y9DWH3AxkE1pAoYoUn9SiCeMRhwvM1arMgQc4LgnNuA",
  "key11": "4fxnzP39L3ZPg94jX197YcufAo5S3LeHdHd1y1jmFL9cFZDUDyisYrP7dfxVePNKRzhxmh8WQ2TvnPSwYgzihaS",
  "key12": "4ysYHmr1eUX4HKDM8kywtpMg3vmxitqePKWm1puTnS1iQWb8a1VSiFSJ91685xR68B8K2bFBzJpJbCu3fetLZy4j",
  "key13": "64FKtWEz6wztCK5E9XkkFPvMmEkSjpR8fqjqSoP8R5cPQvQ4e7FrEU7Xb1zhMyWSiJ9b4f7eMQuAR9XALntgQ2F1",
  "key14": "5Be59TatDdgWVZEQpJk4gCJtVVYiqxdfqPe6nWnTDaJDCJLJxAts5niFD3LjErSAy5ruTRcp7bBQJ3cMTksEsSfL",
  "key15": "3a8YRhmV7oaP7r2FbPDGJU4rptediY2Gw741NfesdR1NSo8zfqbxPcQvdEu49X2E2vZQLG91cTnmvsdyQZTHFznx",
  "key16": "6i5uX4bHocrmUg4u9JPuifQSKTqqZ4BDbi9qpojEJjocpGhzXuR9sj5WuQcDiqyaAvtUqYAfWkxX74B193E7FV1",
  "key17": "22fhwJjhmC4Y3steiK3DsuUWffy4wbM8uyVUNEAR9dXN4hvceSfzq3pNWMVqMcQY1x6UMfUvyLhBDb7prhcLJcdy",
  "key18": "59rP2vdVnT1HxRsiK19JFW8q5fuUvrWPxxfmDMuNhEw5Vak7TmcvZdj4VsQeda5Ewys73Pcog66AozQKtNB7tPzn",
  "key19": "5AQQQVGLShq3jGKARQpDi76K56CUCKcFXrwfrCGJ4qSVaBjXmcstmutGM1gYQzvz8eveYtFgeAqKhjwrkzN6tjdU",
  "key20": "66FHBAeFnWXr4hVbHohADP9nFU93Q3TZWP11ZifmSTDaNQtxfdphcfAm6sZpFdrmvgQo7VA2CgEyETkvuR2twDye",
  "key21": "2cKVYUsXxVkFuuaV8bfLg61nWf9rccZrHZ7WWQvxNA4bdqYQZtjxvQjNnb3YYekdiwU7w7fpDygMG6qxD2gEjtn8",
  "key22": "16dNKL97Mfp9cqtZCsYTW9RCMeXBnhSnxnJEeUq7iU1oEuiKgLrSnvGrVyF5q9QwTCdrgxseCxrER6bxk3A8aVo",
  "key23": "2DVortpafzoLtY4nwYJw9R2y3mQ1SsSREQBrD2khdDBExNAtoHrWHS3wSVmnYwGwuk58MnZr3rMYpM4PqMQCFcRB",
  "key24": "JG5tMhBmVeLuBYeA6qjkN7iRVuDZZeV8Lcmpvfj5usVzno2JWQnz2BmWq5X1k1dFcn3LNUCmsXzFHZMbWxy6zL3",
  "key25": "2Ni4QZupp3aJeW3T6LmNwrorvkbtrPrC4frYuiHck69vJwASyMGWcuwnffQmNMs8nBQC4akehA9KJtz61RkpCzsY",
  "key26": "2N2f27Yea3U2zosLpTyquzsRoyyQNESZf3hShCUTxTaqdnejqZ3GeWa2PcCK4VjBqaiMYqdcoaGQJkPNoc76zvGK",
  "key27": "T25nbYz33FmtSStATmvVisatXJczUS4t2ibxYi2NsJyhchC6B9W6s8GWAVxFGgHhVLgkpXsimsDr29TyVSeLsjm",
  "key28": "31UTk6azzM4dE7q6nGaYtMudXkUfpqNp95JoSwDZieE24QsxqrdnoNZXvyKX1qKq1WZYdM5qZ1ZrMg5gm58syKfH",
  "key29": "5RLaVGnDvm4pwbnmPjbXfkFHRWYNdQHF1wWX18V9DhYyMh1hwwJXPtUbjVV3aTw9vFVZsxNHkySSde86CLhYntqg",
  "key30": "5dPqZKD7odGSm1UHXcbx84NkDD5iJ59a1AEp3i2sz8AqBCxoGG2NgPHYMRWkNcDmMmw8Qku5gs4LqNHecLa91nnH",
  "key31": "TYjGQzJwFTSR7FzvHxzGfQhTqvoQmPXhmXJmzYBaMcUroN1QsSm9nFHjRa9ZhqLMxvjTFtVQvZQbDksnB6ttKwk",
  "key32": "3xN2szWBmDVV5thgyNRx6LYjETyN82GSKy5bugFfhB5fKR53ErLq6BtDf4MTpVmjBbPTvmdn7Bph9nDLst5Umjjv",
  "key33": "3Wo4fH9bJC6Gde8v7Lc1LJdeCbChcVLttPUHywZnaWBD9FNTTv4KzGNVX7upZeUrbx9pn1x3bTs41vLD37okqw36",
  "key34": "4iDjG4ZMwE68eSMzgZxzSyqaWyXLZkgnELPAw24jRN1KtZk7YBpwk1MVLGPMK1qwB9bUxMmLpt7qryUBvLPh5RPM",
  "key35": "t99pNBxHmK5Z1okTxPXSQLbcNmb6kVMH2CmUx62mf55b5uXrRQN1eeNuMCQxEVvQsJfrd7wW8sqCddMpF21fipN"
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
