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
    "4Z5vCEFfJvMdRUuRzXxnZKES5UVL9U91nA59FRhayM1a7c1GmYB7tVPRQtvW52wrXeq4t92UVQtprSHjGRBXjejW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LqbLqLUsaJsskbsGT4EybDHgabRTcrUC6UGoBzkHwQyBX9LYepxggpr8LqPPZDjXqk5kqBRUrQUiRM7ZfNbRLpZ",
  "key1": "2ZMe4UX1UkM76v86vqbk5DwspkrQV3g7Ho4pU5rxeDTm9NihbPczJnDE4Zhw4MVoe3MiPe2tGC9aS6nrD1MjMLby",
  "key2": "2B9agEShAbzMMtWKePVc856eQ8jSa9FxHjeRGVhNUBaWFcizhviHWLUeWaCqNpQne2fZx8DbSG5ZNDcVfhc2Va1",
  "key3": "4vY5X6cCaRFqZJRUtHwn42HssDDgJWC57UnDwFS6iRc8VqfAQdJWyeSttGrzokhh1LVU2sYYYMJFVeV9CCCDVe3N",
  "key4": "4THgJCHh7Xmv7zjAgVWzitiy6TpuMs1RDNdS7Ytz7iPwUmcUeWTLLZ5A6miMJ6QFkeFuFm5STLQHT3uBguyAxFkB",
  "key5": "ZfK5wGRQ7CTYJCEhCi8m72vmdNsJMSYFEN8Ji7CRV3eDZheBhBSmbpmG9PbWosqYiTM3GWtH4car8wnddDJBo27",
  "key6": "3A49hZrPrpochJutaHpKga7PyZQzEi5FcPV7ZpYZAGmiZpk5omVLrU8KKpLZ4iuL3qpjPeJ6CL1kgcRSZeXG8RA4",
  "key7": "4Fkc6XbLmojAqw4yAuEpQtEjEvqWBSfSmVSFAcf1NckETUKGde7W2ZypZeyHQfmiAtfufMpJUEzNm2rHdTwkpwSC",
  "key8": "XCE657M798RG2DMEJL4MhoRDpGF9za4XJbe5Z7DfpUoFQXcyEjdHho5ewGCp1HN6iZh2HdngKJ23qFSZHUEys3v",
  "key9": "5vf7LpGe2E5ZLDvCZ3ZKj27pLPPmRckrkcUqHPug1LXGiFSCA6KrYGRxCPobPVczeFXnuBnfoaacNLkFaFESyvQ1",
  "key10": "2NJFbKTzsKwwSUoJAuVnNYqRewqzKaH4wKFtPTTqJPhA1QpDoyLCnvzpzhvFt2nncsJLz4egdu86DACx6u3A8Fv3",
  "key11": "3rZL8kikN5kk5LQbpYm3mKJ27S4wbt8xW3X8ACFKLfnAgTp46HrVvEMNCnjR9rJVGAHMutn84hp7gEyHbVomMCQM",
  "key12": "2hkL664Wtxfbnfz127RkVtXRRasuVyVosMztzaPfqsHi4FQkFqSVQnPzBNXwnGqL7JiYnjLpqyh4PJBiePPiM7uk",
  "key13": "bbWzZsb4RXJjKFsQC5yjx9rMcDcvTtBq19vZ1oqkvfoL6qpeTEjPt2oss18yLctb9sj51mjChAx1samW3sdrv7P",
  "key14": "5deZc1DLAezEeqFCubvGRuHtWVnmVqAd45tyWhj4DMtFHV5YfTwRA2idpQRRyiJzpUCQiEzy1Jz3cngBs475RxMN",
  "key15": "2AQjPVfTHE7EFQ5Qkqjnf4tyCcvdSABBZFzDfsfzZaXBwMjG9n6GCJEmY8v2nGUVJ7jq7cU97DiG4Y6BQVELDeLf",
  "key16": "3RBQw1HEkEGA3Q5tDk6kaPjudHVEyR6kAEXVzpKx6sdShJRKLeZSpR2uEUyQ31YLFGrQovXSCSFrfXGVFfkqte2x",
  "key17": "4DvvmiyfwfApWgSi3VXifGEdQRX3iE73WfdrCUkcqxQBqeXDRZ6GcBUbdahHSZ1pux8H778SjBk7Zerkybk8vBoM",
  "key18": "3Pg683QCZ5Cw3HmpH7X5GbgkkdFahKNRRD4rjDtJLGpDkwGxuNAKMiz9Zted8DTBxX6k9ZCxNU8YvRLEeRF9ARkt",
  "key19": "3NpqMmTvo1EPf87Wi5yLve5zLBbwgAnMmf74dW3wk4Vt1rbW7JxBQQ3aJqJwNL5vNFdeWCGnK4Dp7JaVRa1Vy9f4",
  "key20": "2tMxtoihPuRPAwP5nvVzyBsJ6ZtFv4kp2YNdQnC6WpZcdjztPJzBm4ksfhASAEKJskZxBHQfVHCuzgmsmtjKpXAj",
  "key21": "5rXz6PgMxM4ojaY4LPvRmXBLtLKZRaUg781BC9QmCFYwdXgHXQBTRyZWoNUp3Wi2kyXkrhedSukW4fsHa9hGTYk9",
  "key22": "hexfTVc5NVJCUJGwbuU2NRBvjmafiyg9Z7MLneK49Nug5guCh1VAEgyRULbQouedYZdmhCuQQxkguzxiG1U6E8J",
  "key23": "5AvsQQYRMDhLn6YBcm9VGqTUX8AXyft8DHqeCZ8sJ28KwTyUzr6N2TjDVUfLuVD8WvVXRVM3xrf3a3g9DmJ15Fi4",
  "key24": "3bh7Zq9R8wThfhVzBm6rv2DK3xoidoMrZc3jgY2A6vEP7LURvmzSApLxJpEkCGY8DTUKiAibpWbjzE7jktT9L5iP",
  "key25": "43XT6zRNeT5YkDvbmH5DgWK3WsTRoh1W72Gv2dZ6ygFUGnkZjanNH6t5iTWXabq789yby7JMNjmQ8cYsnz6afLiK",
  "key26": "2AdMdkApXxDLcywfbFc7Q8SruetDaj7e11BuUjrwrRxwHSxmgyMDEdCyJWKasLtmTfGkwwPeEcw5BnZznLJ9Lops",
  "key27": "4BWpd36KpnW4tFo3Fjj2ajm1MCa3ysKKUxyU3SNsu6pMVhcUGEpPokWLcQpXxvMuevckYK2NJetkqCaVoAX2dCRf",
  "key28": "2UzLQEyGNmhDmCEbVsF9cR2NyiZPPAUgt3xGFXqm4UiqQM1ovc3NZN1U1tvM5tChUi64x6GrQ1kUHHpaWAAfZTTb",
  "key29": "3BB41ZcFax9V6RgBVoBNpYKLvT6N4oTKbTLM6uuyi3kNDJbSiDEZeXztK7N1bQRhhvtEGFD2wrPK73vXd43iYPxe",
  "key30": "ufVdEEM2QnmJ8eMPZCwfYQL6WnQNHiEL7ctbP977U51x51vgv7RVL1epwSc8PqzQQ6MHBpREAqhNZJWRCf3jVRc",
  "key31": "8MaPpUT7H8iApLBjAoW6nR8fmCZFAtRFn3jRLBvJo6RnTwxAuL1QiVAa6mLdnqxMPdvRjdaS3tPkeuRTjDT1HVx",
  "key32": "2MAFEFhR3ZZ8Fpury9xiphLFbnfRVrUtJFfv87gG4nr71oAb1LW7ir8fYwN5yvXzRCVCYj2fofZrnfDNqLW5DUm7",
  "key33": "tWaCiBYfXpH7Th1n8c155ExSWFJYn939mfqJHnsm71RmBWyikZX84uxBfFyVV46Gqn3nT5N3iTgWmeQP3SarBcU",
  "key34": "4rro35PQmkNpmuDiEmjgBYUsdzPmookQqLnVErJfqDzS6r3UNyMJhLES3iiEkRXiq4kRrRi1U89THXZVVHZV1QeM",
  "key35": "5CVnQpZjrLzktiSDSsawPbE6AAM5MLbcJ5YbMDkmM6E64QCjPXRrxYTAVitbU3GEuMxmLK53vMBYHkU8VL4LW7ta",
  "key36": "5YCJ8mPHiaRPVaFeQAMHCA57332CiAptqFEsLExCnzqSaY4Raj1mJgdT8AUu4tYYriZcigdntXr9UZ2VjeUwpyJF",
  "key37": "5N7XzRNsib8kpjQFf1kcK1Y6dyeNBgKKRjoMFVHs6CYRQ7X6CKRApNDAZ1Ba54r71ZQdAyP7JRndR5XJew1xm4ae",
  "key38": "2wfhSKc1soQ3T31otru1hcXsixhzv3RHEJbKxoqU4NvUAioP5uuwqtfhGyyZ7L1DMKVfm3Zd8nZAPpdhekMP9wMg",
  "key39": "5Uk1Gpm2vbGrxup4nvJ4MUwkqWw56DSbzLrXRANRo3DfBF5W71YDADK61PJjc9T6w878PpbqW4gXPdufq6nwp2fv",
  "key40": "2ZNsCF3PEnUgnSAZuzeUwqh1H4eHnEXmYfqfgYBzMq3HGmm54Mqiip8CmPVvF1xByvJPdHBFf63BgLVneNSNN774",
  "key41": "2A2VS3JsDs61CYFzXSJUAArNcVCY1D1uf9SSHUPVFkt5QHP8n8ULNkaBHsr23n6s4uER8GHq99RbkYWm8ENFmmSQ",
  "key42": "uemDwtMb6tVpSbSB3cNWyDFNWWQRZXjB8K7szpCxuug9sb61PNUmL3nocMrNEa69yY3b36tABMxxyjmkwFtiSJY"
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
