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
    "eXDy573vE9gYaqx3biaChUrmXd5E3R5hYrJyQE4HH2XM2eqWRBEyg7WhTD1xpG8KoJPBTHBMZ2DjMxWbcUt8is9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYGgvgdn8fPzfeduSjHASTZEUr7FGD5WTuowhKYUTimmr1kYFabE62wwanJayvSqoEBCErVnBUM5smUq4rJGGqz",
  "key1": "459LPjUovdtv2d9a88TfLMUgReC6CuGQ9YfWKUAE3TDfqzwwg9vBTatAdfydxa714yddn1pGdhnR3nmAMQGPCyYb",
  "key2": "4HwufZpfuwBVMuG3wCsoMnQr1yZ69vvePnZCw2MkzzxrBgKEytyPzcCk59BSasFxZWPCqiZVTbJd6mAPf4cKk2K",
  "key3": "5VSJzEcXNDHQZ88shnVVL2TF4QSD7s8pv6JazwxykgHH1Q4snNhWLsCQ8WxfYvThEWSPzUTnmwHU3qjesMYXZ2zk",
  "key4": "3mdX92Ngpjg1HH4KysxFPGETHu26CkbqxUz2TGvrKdyRPr2yL517YrUr5XheDcZvQw3RBb8VrJ2NXKY1EG6uqUMt",
  "key5": "4yJKm4zT4mgkKq5e6JBfemYsaaphzSUpnf2xNqEPyUyRHfMpAXKWhQ4jJeoRBEJbps4gu3P6CLprV6T1LzDWWHvw",
  "key6": "4nm8W32QfCk7uG2MKcZxqGQ2TTijJsEcUxkzY9sZwwU2L1xTG9mhbWQTyyDqAuy1npgZx9jTMt8AkvsPHbev5a1T",
  "key7": "5YfS84HUviWJJNKgpUJoMsxsXbVvzBggF71afPjAMJMAfRqdgL3gSCKDqWEjF8UoDfTqLK6c4dyL1pn8r2xuytwq",
  "key8": "3hxxPPNGa4trYLNoV5GPoMgfDWsUy6XAEkPUMFFCgYM9EPXMxMcPRMrcg5ruEfu7yGiGHqoDY27aXPEaVjpSMA81",
  "key9": "4k3Ah9vzbbZfND8NaTF6BcwoiSh8f6x8Y3URcPHyZ7Eug5dRC5M7RjjhL1BbV8HSTNMz5sDbmGz9qE2DqLd4Bmeq",
  "key10": "4bX2iDSsoZFteeGpvhsfgqUtQve1AM6QXT3vzUpvvYFcnW7y6CovQ9AKf2n5q1HGdQMQ8ZZjXVupzfHEdkEuWa1L",
  "key11": "3BtGnJAijKznjrDQcfpwB7ngfSFE1KGsniospiKWEojALTaL2AGyFZ3dSKEuh5VVz8ci47jgCHu7eAXfB61z1thW",
  "key12": "27Me5ifDfn5qEv8fiRfic7hprpyFnUETcM78QP6q8oDiHPg1tQGvKZsHEoEqi4VeGrmA3myh44JciZLRQvTDF9uL",
  "key13": "pQ5Sv9nvnTiFV2BrxavjBvQ9THqVaLxnYYZidHYNZQjiufeQUF5coZCA36rbDiubGnhfDimHfA3iwFcryxPN3vi",
  "key14": "3YncSqMmG2jEmdZ6KcDMq8P89VagTfdeQaVyVRpjifSLnXp5836y4mFMgLLWv6mqeDFw6HuS4JWky4rwidYimCAn",
  "key15": "3t9u72Hdamz6PQsv9TUSP7x3Dwi7ZkYnCAQSWfTvsLtvG6rQjqedQuxSiLMfzQ4qWn2EEyGYQZWWW2Mg8RNFC3iL",
  "key16": "2TVvtu3Xniqt8Pz819fyPKTXNvUAbJNtFsAjRK6WZXdgY7hAdytPpeVSKqaT6Ji6q9Cg5qFMXWcJqhQ25CYSqeSr",
  "key17": "5yxEytra37j8zLHzSBW78yPUfFmfCyTLMQ9YTaDGSBvEqDGK5nrs4RvP5kQbyRCWXBgSqnUdc1K9w6KD19nAADqd",
  "key18": "5PNXZpVuTZyRQXEGh9rJCEsjEL1y3nLKpEYFduUmdkiMLvzBYhvsj9qB9xTc14ZGnxem3PD4jP5E9wL3m9YxCCvf",
  "key19": "4AQ9WHTEZpCTFpmaQUm39speFZyBWQhjzu6E7qChfL64yzsur9VXPJXnXHQnYphm6h9LKQopN5P9ijVQVSpurAPv",
  "key20": "3TH3xCFtWfUWvgoReFAMnwkVHzvh7QqJmwNnScjfb2NDnnkeiiLtCZ48YugN28vnEM4vypfUafY3xSrCzRUMFFkj",
  "key21": "3NXSFYDQNXHK8Zmfd9snABvQgQzXV5PhCDVedjeBbbEfvyA1XvNaaLtiDqfPbHcoV6Lth8jBVHY5h93YSfTv6UtT",
  "key22": "2Mm9h6M2oJyjopYGJXi42kCaFfdczVZASbdaUzynedhnSeSFReBEvkWar6HrFkM6kPXDQ77k2T1gB8CuzqeoPxK3",
  "key23": "41w56z249H6FioLcguVquTwrdUrizh9B9ACAdZBVtT7eKvQq9AkVSP1cvG3ynjYMnutsfqt6gNyPFunAhcRkXaJ1",
  "key24": "gWXypbSaaZsW3ah9bsK1KLdnso317XHpatj3fbxr7ASUu3iWSZKFY8xD2gujaJSFN2ZV2KDdrPukeE56AGMUBEZ",
  "key25": "3YHzVRdnD1YouaFJ7sUtMrtWHN8MLedjNhxWmvVy7gmtd16z3hVZMezkTaCcZEBw6PHG3CoZKdCzNEjuJvLcKso6",
  "key26": "nt5PYJUHeRKfZPkwaWHqJMxV9AxcWmJ2eXe1xXB9aoYrbtqExmeDskrLowWTwhiJ32DS8nsEgmfBFfU5gWQYgPj",
  "key27": "3RFNUdZbyCNG2mifk4b8Z9rYF7LsGzN17KJFsp3bLWDB6uxeK7Ah686hFpXQB23tz3ndQV9gmWii5kmzCMWVKiRY",
  "key28": "38ZMUoNueVru2NppH3S38c7Ax4mEgYjfeaja84WZYStWwNpmK8WziQjyhNHMHC7sWmxPHwLSUvubmZ7QT2iyo7wi",
  "key29": "3Xtyjq24fm4rxofpVBiQo6WCeeYsNHjvsJwG315wPwXdxevy19TP2422Ga3d21Wgo1jrYop6wif1nyLW4v7wxc3c",
  "key30": "ecJPAdM3kgCKjNc46k5pSERAEMF5RAAX4imDctMJpuZwoEprYxG6TRb3m7VzQJQbywodYzK3SrtU8AdbfB2fjjf",
  "key31": "3FZy6T5ViTk4nCYQEBPZaa2Y6BmV9yjT5rkNy3qogpj5wqGHG5i9KPvMtsFtBNYvFH32k9NEZx1BH7aVW9FGpW8r",
  "key32": "47JQJaT34wct1RyXWwLM2Gx5AJS4busJM4hPbt4Zjjgt9rxLjZ9SGvAG8EHM74EuDoHbGZcNkaptMiruk8kEPUgG",
  "key33": "31draAjgYcp3Eu3myyJurgC1dxWMh2Cdkgid1kVqVULW4fovXvi6Gsm54Ets5vKwQJ3pxN2gyueFUnDCEdmpQweN",
  "key34": "3RwKe2eL3wAyv14qaSzBNGSMMY8XEL1rT7NHhXV8uz61hdb7FyftQpbAppcmSf9MQBuw79YfGZ1ijDD2bDoLe9WZ",
  "key35": "28tLzsmmAsmyAFaD9hJQCH9wJDQedM2T4MUjREmJTHVq9b6cECVUA9tpRWwVZtKu1iKrwB41DnfJW2iucTSSQiMr",
  "key36": "3246qzDtW6sceTAk6GLrZkzi4xNBEPd7MPkTX2JS8i8fKZBvRS6QXyeSTedCxLJNFYiAky5VdGhBRU7HWRhdvmxn",
  "key37": "VkpTf7UXgR9keQMdYSjPNhfXV3KFjmgRjPDHeMb2Ye8S9txxu4HnquvJg5YFG4PSeirD4Ns6kS377rbRyCTn7WC",
  "key38": "4FSDywZyJfxfYjiheDbXce9yYWhpCZvPVEoCrncyvgyfA33ZRLXLuBd63GCzsJYrRtXLMTK2VfRF33aea25x5H9K",
  "key39": "2gkYjZtRdjvkawesBQ2DEfu8cNbPFHqWPRGYU17MW1wAx2BYNyEKT2g5arko8WXnaq5w6FrWQWLWd73RzGSh1KDd",
  "key40": "3aRaPrmKu5TiRCvu8yPAaQQE7C5eNXxNww3bov5qG9N97teXtrVXKgQbymevPxRwfP2XnBt6pLY8auPYS7ivhS5y",
  "key41": "3WiNefYAj2mbdAnUQSxnqDsURQfprhsTi5L5dYCoXZPRCDMY1oWCzQDrexZd6PTTmVCtFa4Vn28TXWnmSFhNQq6F",
  "key42": "4hG8WUdXRH5JZxwbX34fZNJhpTooHGJH3CWS8yVN73LDH9JAjQ14xVcdf2v3oxSizhbDwPEnBs4M3Vp3nTKrj2ip",
  "key43": "5bacs5kYXAPQK2ynAqFLbauzUBMv6LLfaRSuyAKkATAd1RBCFHSs3rbxF7zwQthbg7ZRdDqp1gDuBVMCkGiPkjxi",
  "key44": "52SrXcLErmLsLBQTs2xsyNhvotAyNy72JbCm6KKq9ch65EhpJ4KAbWENWd7ZgxxKrnEsoSBgToFFUMmhAZdeFMSW",
  "key45": "57iV5JyYZfwyzPNXhj93tQwHJmpwomrepK5DRJncFUuXhFoQdM5s8CVwJuMYcscihYs1Z8dT3ucMpiiWE3JnhXmm",
  "key46": "2KcXVUuE5b3xUESRSdJqjopiTgypcZrZRZJvTxyuqgCebftowA8G8hHdmNUFR9tZCfKUcaxZdBdoTCKYNJ68cw4e",
  "key47": "3PFR7jxfddv6nGsEvkZ3NaT2XZMvKiL2eBE2aEqdjn3GWixJtiZh2Y8DE6iZ3DXmb7EepqggNgnTR6AeiwUzB4XG",
  "key48": "coH3SqtGnkM9C3rboAUDxS4bFuMkXcTPM5t68mdU6R4yennAwJiEqtSYTpbfWCvoj4NhmhGhhKAxPBZLvHnhxnx"
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
