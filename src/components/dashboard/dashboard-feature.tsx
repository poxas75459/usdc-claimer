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
    "RzbE5dJTVPGaBZX1UKTaYic6WmtyfCeYPUEKBK2cZVz52TreU4RgxqSajiWEqvrprgvSWividDL4P2RxUzGGCN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XoDf3WSxhWUUJGXzMXZVFL83rNoMYpoN9KRB6nkTPgfJN5RK23a7YpVBjNZY8sMjncoVRdMVQKzHV8BCcmcaoth",
  "key1": "Wv2QC2Y2FTpToLwcbWYw4DYTZqb8n7oa34NerY8aNCbnczRVyZV5thvETPBETAV1tMvzB81T25wrFsxuCj2s4kV",
  "key2": "2EJuVkZNcS1TVet6aHfNkDa2rvbow91NS59TVoBHmzWbdJQ4mV2u5MRgJWTdzmZuAhU3vT7EHwBqTbrnCKqP49y1",
  "key3": "2y8XCo4sAF5puFBAnpS27J1LYQU7tHnB1aiMGh2uEXV8jgUuk96araPdZobVWd4KmLi51k61JWDyBjiuUigvZnjk",
  "key4": "mhvpKAuiiPZnq1aFuyWQK3EGpSJ1JeEfoTkvWFfxkQTNh7geQFVW5PKrBXbBXgjjf1bTubqHLxCuGYsxE2v8C2e",
  "key5": "57AiH95WMYHf3DSEvzFd75JtDVTrvUnUrFhBvDeybYdS69erinq6fxS26hA8pZXB9c4dKi5iswVB3WToebbrjeM1",
  "key6": "5k5xekCWis8Ghc2P2Tc6A2nqLdzYZwzGim8JfQQk3P1PNRdBCZ7VKvfhMjtEws2cCPisNShJgKTotRiaib9vN3j5",
  "key7": "5REZ7sJHQwc2Hz4CkyrQUkkSjgeiKtTgcmTjDSivTsocgjnH9hCGBtvu4p8VavcGVRF4eXiRPLkYt9arwhSwEr9o",
  "key8": "2zh7L7eAbv9qAkFrRPFqoYBB7gFyyWyKCD7AaPdQbjqtm5QVH595P1WfuNichZ2yh7dcFRHuDCztE22wfdGU1fsv",
  "key9": "3GCCBi9KfJS6aqP1SefRjFE6AV29ZhzqqrVPkrz37SXBEKEAKSogJx4fN28nUXpyBpJp1CD6GvZXV3zzJZ7i9EKy",
  "key10": "2Snf3d7RRRzhFyWXTiaBb6QPy5zHe8VLnQB54LYqSpHgoSbxjAkg8w8hrC6jotgnyR38eYFJpG87VyiiibtwX4Wo",
  "key11": "3NJXEeNXyku27t5hPkFL7pFgCUBx1wTurTx2DxzJxWdH6t67ZMws45u7SNdB7rVVVzRmxAWSmv66cKfZfnfJLCvF",
  "key12": "2eD99XxFYA3BFoqsKrVYSXKtSnaubhz1aGB3jnYG5EtQHGmHaUxuZY1ft8B15A2XptsTLJrukMKy3KWCMZ5a6Mh4",
  "key13": "4QPUegBAbz9cKUhNegAbXUu4KMehF5iG6KxWZKp65YXFtHg5GGRANMZHUuU1xyXFcZq4VVc1dyce9aCbbZ6Zzy3K",
  "key14": "4BrybKnp1DCjFnKwdVwpMjdEa7qb2zQBwPTvzeWQM5nGnfoWAb47EfTh1diCYP38pudey4d1ixwh1pXuwygvWRCD",
  "key15": "fP6YczyECRFGLszWMaHCxxaUPKQAWLCzXqWs85TfpbT2o7Bn9LWZdbVUaZt6K2uD12sqZANNwdBs64c4ZxJUncF",
  "key16": "2UQ3MFFenRwkmuWAfbmj9bG29GkeaC4KMZo4fmMRQvqGBmFN2wJrS5NEJh6kEgCRRuUTSmYS94yAQ2B9hkSBoBns",
  "key17": "25qgZK8JbLb5VQH6soc289AN4aQ41ahnYtPtGMW9bPJdH2gQcgLfaZSoB7ACyAVmyhEU6mhNc1KqR9sqchZmUHNh",
  "key18": "xHh4qtXRrefUi7tXsRGP92cQTrK89mGJrV14br9R9cUbNESFZudEdJsav9W2wbv6WjpdGg4br6jWvFTE23zSzgT",
  "key19": "3xXD3hFm5NqEacyweqteDvkU7iQRZRoy9ATjV4Vx3CyQG95ZxppSs32LB7dVQTBNEh46nYUNXavRC7DHTWtUBiCZ",
  "key20": "3Kp3Bt5M9CJotkarSiVnDGykoxYTBpcZxbQyvjp9nVoMfSvAzjCLtFqies7JbBrc5g6tggWTPKhyp7sRaVKoyqT5",
  "key21": "5QWSJ2rktvy2nDv9ptpXryKFrZkKyqkaHgx7QiY4xLTcTKcQufsk739QhNNuyioy8G7sS2QoEBQEQDfqL5gn4fQh",
  "key22": "4pLR3M6nsK2NCVBhxCmH6y1DmMUSYbip7VJxf8N7nZFrty4TSFjDvGrs2uYaE9x8bmsSBfcnzPQgDXnTjGaaEs37",
  "key23": "5ZzT6RFtw2JdchdSXfWqSYwYAMYjsszs18JD9vFDrEH3rxKECBCHL3TLF6C4VJpumniSxXj6i4Ny8C5iFkmzwZGP",
  "key24": "8FJnik7roHshf84QYnrRFK48pYd7prPrAZ3nzeifCi3SAbT1TJPVeLbGFeog1Gw3tBCRw6LP5Ph9JxxfZnWN355",
  "key25": "4KFGSvpfVVFKDtMNZDFs6qb6dMTQUka38PWqnVRh9XqrZMVRe9T4d492Y5vpfyDK6MVbznNKEgRQbvRcrqWSvs2o",
  "key26": "t7h483x7ZnGpQ7Erz2FiKLxoKpkUZWgv4iVonCbqieUta9PHQ6gZGJN2AmY9boFe7VruqhvmSPnbgUgYYpeK4d6",
  "key27": "4fNEKpuN6QkEGjGtzV65pmsSiLf6XLMeSeqLwsKgF27hg5HS2ZsZVamZPFGZ8yGAPKgvebCGppRvw46DF6QUEmH9",
  "key28": "2C9ehDWZhmzwFbw8Yf5QHwfbygHZoPwcnceAPRebAHEKpCxcieTMdS292e49c2Hybi6Ay3doVJJZJvdUUdxNqLx",
  "key29": "3hbkRSVh2GGHD46VvmTpdKpg8jKqafySyq97p7xMZEGaUAnoJarMKa9UhZ6gppM8tzBKECxth89jJGUCjXaocKnX",
  "key30": "21451JDwAJCTcoxFSYLoyYhLzApXL65tUBr8rV88xij38tXbFaGJ5JALpPiPoJ7AQ5Fvt6AbsNyEcnTdgXtnjFX6",
  "key31": "4SKe82dqyuCYuuYAGiW3cfu1od3m5EqbJBumE46BHXxfmQcDs8GWqwyb3899mFw4aEnDmejrURW1rbVmMmjr6V7d",
  "key32": "5uZxWzMyWpWK2KDdP8htVPLRtdiZNWbTFeVyjL5yVwCey8WoerhtwiVScjr86LnQiMG5MJA652zyqjAHL84HqhRd"
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
