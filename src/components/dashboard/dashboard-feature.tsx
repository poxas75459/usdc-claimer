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
    "359JHE8KCvAeVAPVTXH4McpHr15Yq11JChB7wMsZiSbWALf56W4QbBS4yc2tDQCkJFeAxXdyAsHwyymXjeawKeBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vUhhQJfwSex8Yguqrhst8BgCjWbdHX8dh8SFC8veK1rGHJSV6jALHzUmupyJ2p7cRo8fzKvWyUksjpiSEtebKxb",
  "key1": "5f6WQkM6wyUgQ2r5Cq3ABm4TBVuPHwrDqyiiAexhbDfs9x3m5NHg6JDqnTQpdpdzM7gkgME782CqY5go5tzGW1xt",
  "key2": "39HuhD46hQfzZrbQKiBfTMaaBm3pgtmfPrL8CjAU5SACMAxJQbmsoKVR5MjLt7MvDeLSTfRg1KMuZKNnt8YdAYF8",
  "key3": "4PupV7LFLSYytXLkjNwD3NpHddMsFqJ4xGm2jn6EzBkVFCu5cQ83ADNiWwrKkRgT5nzrC1wJn9Uzy8aPFkigprpB",
  "key4": "5yfWBPeKMkQ3qFW1CTGP2VQEp7i7wHZsnJwZKwLj9vzNG2QzPtmdrJHWeDuB12CpLCHSd5AzVbDR7wUKsat16pc6",
  "key5": "ki8Zknakjw8WvJ3JorVZBMFy91hGStNBSoFvAE5nU1wLpqpEjyCjrNQZn624193JZz3CrUeKorJQQaTMDrfwke8",
  "key6": "2DDKZ1pjaozNLTX8z6dodj1m9fiqkSgy5BnN92nF1godsj3oCnaxUNpVDjJCvQ2Xc4HhfrZ4XJfyQEcNLLndwqm7",
  "key7": "33iGg9V6rZA1k5agJmbSpuyzALamA93nkJ6MTLvHVUtfptCQKGb4UGc1WtMthSpBupLoCvzBQbuBfsNH7q45gaks",
  "key8": "5CM26o2yVDG33tduio5ER14DxxsYTecoanvZwcR5b9G4XZkB49vJ89kZmubbgy1yjYjZKaUfEZinga1oUvrF39ex",
  "key9": "4Qpi7L8ELyy6MKGRMeWt1DvKWwvcE7bgtgazDpjDu3FQF3dCR6CCebdPg5tW2dWLL94NNhnQkiofvNzNAz6ztLee",
  "key10": "3Q4f8wsGbGQbv9CEsNw4tBQiP9SnTwUQgVDaL6wkwSEbkYUCcB6TMFTZjZpDmxB3EjrCARTYNkGa8Lj55SxWMKT7",
  "key11": "3fLXuzZBq6PH7X2wXXqnfSTfPWbzzstJjB3m8h73sj4d3oxyCJsadhpxVwzySFvoTdgXE8ARDyYkKnTvvhgxrApq",
  "key12": "Vdz6f3TqqKk4ymrkMW7aPXPULoh3z7EBmJ46e3NPSMp5aFpQJLKZjT2tH6tLC4QU1bgyrsVVuxQoZmDDuUyvGLi",
  "key13": "m6f8PhwmCN3PBPUWzZGL1vxas1KDhrnaHjTW6unNBQZPZKDjCF4xjPe3XfzfuUnTgLhNtfXTnEHq3Fhxte64sez",
  "key14": "4kmUCTfRvEpjZsHab65mPmHMWMRVTYQXy7kLjHcCGZGEJNCK2fnJnouifvPEdiVk6dBua2VQ8h9kLCtopEWD2ysi",
  "key15": "VgUWvn6pTM5RFprUTXa9anTYjKhAdhTZTJoY2htTHVwP3UDnNh8Njfp3UxhqL1Z1ZyouxrHWPcBomqg8Z1UPk4Z",
  "key16": "mUy3nB4GcpN3QFLPJaxnf1iSkBFPKyQXPDGdtchf1kzfj1HZFCsKto2bH15Lhx2MTcr1VCiCRjMGqA4YRQjY69t",
  "key17": "3fPdp3ZqoUfPcBPo6XRNRVLsWaJpFLLZimXgL1zAiiGMSmT7XtXNdubwq9gT1pyqKuQxkTbwzuyM22pXGiAvmkzg",
  "key18": "4kj8SkCgeiY5nu2rvduv4QMRPyBQNpohxhZUQitS9gSrbqKDpoHYZkwy1rXqu6eQcX6K3y42FNuRX9GsPr1JY6pW",
  "key19": "4Z5y8SgZwPRZW47HBN6uy6wiU1DgRDAgBnZWA1NDWx4p5xGfU4v76tgtWj5hApmgV1Ch2eF2qHpzZsFBfK2N996U",
  "key20": "5265uPxty7rv9cK15boje6W1F2U42Xm6X2jWQ5ftiiZvr58k3F1zYtvJQ6kJqQvPkoz2j8BryyKhmf6AvbX9daG1",
  "key21": "4WwJFh2eGDkjEL2vTpEpWQngGwNk8gawbWhErkAfK9SHda8nQD9u3jKFowaJ1SfQc2o4Eb7cNkLpizp6HrBWTKVy",
  "key22": "2ZmBReJa1R4zUQTjiomcAR9Yow7CNczmqRfmr8dkpdCavW4JJUuwZbeyYFj8Wf7JEUzLC2AxDNAv7Mf2ok2iejcC",
  "key23": "4PaMUxsxs5UNTXFHdWj1KyF4Gmv4dqmJe3kU2n3jswhhjW9GeRex4bciDcaUjZom4CAtDnKMYSJihdToLMiLQCCm",
  "key24": "jevTYm6aizGRyJt9HkwEVvsMwexyUFD89WP8nR9jGZd7QU2kNDJTufqGVTrVM7JdmZdccyMEgUknrH7pEuEmTb5",
  "key25": "5HuTscEHdTxGvQdxLf6HG7WvUyfs1N28vzS5GpyYVmUo8kDjgM7EzCdfGjX6wqx6rQgtJ38tk4W3SVPHHZ7ENHXs",
  "key26": "3zfzZUpkc5nSvpFPqHjUvyYccNft4UoqUC9L2FULHgAjVV3GohWDRavE9QMy3BhxYZfJh3R98JUoL7jgdoVUedo4",
  "key27": "5XgDERZaitDSYNcrxbmkZdAWuuKioMnrMHzLmPQszAm9VNfczQ1vPG7h66rciHXDiR4cPSz2ZCocLTm421LUq9mk",
  "key28": "5K8aP1HwAYf68LTgDKgTgfRYGQU9aPrePieuULnGsQiUSMpXCaRaHEoHt2P4ZfES6jyMkywH174sg9Ts89tn6VWx",
  "key29": "ssrRFQXXUCZhVcw9a9N9Xa4gsP2qrZckF39Ti8ffYnypYetk9RuMbn4NQmYjiMTm6j8G6JBgQWJqLsCNc5FC2NP",
  "key30": "34MNx1RQP7jc88STcBJMynkVCSEwc2i9p2GftT2Y5K2Dviz5yzgMQiiz1bmc2muk5WShFYNa7aktEZwkqNkCaVuN"
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
