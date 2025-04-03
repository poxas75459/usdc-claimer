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
    "2AyP3N9PEkQ1h3JhG9QfBxUVMVqW4EjxdV24GwN5XP4HZBWxUvxnafFH77g7ddo7512F6FygkJhQxW8hMkpPSM3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFPdH7d5SeSvscGfoq7mrCk3w98spMcGJRcvcssExgfrfPA2D2QrRtVswWPHq6Rbe65ztBtcMhbLhs5UapQTttu",
  "key1": "4o3SsRpcUqVphbbvVJkMA67tQuRjh7mEknZnpXKti1ArRhsMvuJoVN2HRVAk7CQnnUFWfwi3yytUaC3HQWhh84yR",
  "key2": "5C8Qr2mv1H4zdYHT18RNZG8nXudptDC4nw17T1E7kpFJYLbu3N9soba2YgAfjurcbDR8EJZvm58pmsya9KgTBtc4",
  "key3": "4MFDxxZmmpi368n1ysZ3Zy5UWGbqi7EvMd4bQ5yFys9qt5KHjcqH6XVXLuXVvQvPXtvUFuVqFoDP3pVzjXom5QVm",
  "key4": "367c3LRtCwExvpt6dotgyCZKFBagHF6SqDWEkhmpge8Jsfran1AnyuYSMfbswHmZtaBdvwbogHwYbEW6N52MJrBQ",
  "key5": "5wt1YmqkNd7VCLML7NUVfJbRCr1F7PuVUUNftrSCmiKB7XE8fToPHrdaP4RNjB5n5Qzbu1j4efcUXe8jDB2D3FKc",
  "key6": "3QJzKU8WwFf8CUopUGPuG7n8eZstbFChEzaFpNqrcEikdsyDc84fKgg4BYFiCP5aRvVqThFp3cmWRA8AeYNbqgpV",
  "key7": "3kTnSx5EuQRMyTy2hFoUE2riu7KEnENPzBc2TX5nEo2v6dkB8vsiEGsghq5nk2eaa9RS43ZCGT7iZP3GYQnjrXLE",
  "key8": "2J5ZtNkcT2aDcVbv5i51wDGSsTu12s6tWTaZYEkuagvjJ8gScvSP3boEZA4kdtDt7brFjRE4vDiEhQkwTfL8Tw8v",
  "key9": "3kJuyViUGjByR3hkbJ3EajjeNfueb6QgameSy1Y7V7LHHfCdQZStjn3S2QzZfHKtg9nN2BFtbwiDk4Qr2Ewbb8Na",
  "key10": "3L6ik8J5VLYrHtsPGCMscKRP9YAmRUHwSCwohV9xaLf64zSPvk5PjgnwHv6HewpALGMR4QDQS4iNbSJcAjgg2fPw",
  "key11": "p9h1RNSKoKC5fFymzhwLW2AP1UbDeiq7adZByq5oWRRX5uCU6V3L6Tw8J9541tn8WjBFiXwK114dnShn4JKKnFu",
  "key12": "4Y2xWhrAdXBJUVixk7htTE7rujBmjbQRLPF8m7TUPn9dSM7Am4Tn74o9CWXzTy1mKXh2PXesqEmA6dGevzDgk2DN",
  "key13": "nBJ7Kt3WC4YZUifDc6Co8YgMnvQJWMnPbzdDsTwdRpSfwBMkYHeWuNj5FAPXR3ePfPuGBkfzuY5A5vewWfjBgL1",
  "key14": "2TZzd38cxJ4eZN5KG2n59h5cVBWiiZiDckrBQJgV7oetC9btzy776w4ANPZbckHVPesaUjuZ9QEkvDiP46jTPkZi",
  "key15": "4iVr8VeBb5pqCtWXtuqVq3jJm2KnM4gmUAGyqZSXiM27n9sRUj4DPpXd3TfCu52Jfko7po93UCrgmABZchDx3MaK",
  "key16": "5pZZS767FDwuQuYa6f8CuXYxfnaPNjL1w5byepKx11fSEn5YHr4Nvbq3dGMirEryC7dgn53FuChzpYgdoX1pWcDw",
  "key17": "4yqD4ZLsuH1FA1RN1KHHXuriuaD4UtBzpTPHye2SAVsjYgh1yacNeZWpnBcg48v34aBoSBovBWvsRXfqQh9ZK3Xc",
  "key18": "655E7yqiuMJKbrKSZ8rheHbudc5BnvcWjk3xFdmFLNCXczTXqeuSsHuM9yGUp8oBpKCQ8h3XfGArBetg7CKjBgr6",
  "key19": "4AtGCcySSCWibfzqDh9iduY7YhGnNyBVfLn6n1x49VaB8Hu28bR7DKUScimnc3nQZgfYvCfrBiZ1TdF1AosEPt1m",
  "key20": "3YXLtXQfqW4zMHc1yRyrgSh6WVJGpLnyUnsB9YCJFK3PQ6bNEZoQVZArgLCQPxeGRpzUCNbDK7jHpJE216TfBKL5",
  "key21": "343sK1MKVJ5jCmDjyVfc5hQGqzQkz7cFicbAb9fhxt7rJ9WYy1hN39AHGXBX8sTHaihtmLrV7LviULiJQR7sHr19",
  "key22": "3hukvTZtVcknpqnSiYeP52beWbArva3Htb6yUbXX4Ux1je7KRfMs3sm8g175Jy83NR2QYMdqcADWVSQeGY2nS8K1",
  "key23": "5c69B1SSwb2qJorJkpcWcjfPWViDwF3QJqkwqvMJX6F8gj7czRMiyWiWKT7CR3XQzYndEPLLEdsE8bo5xAeGzBxs",
  "key24": "2qYz9QTDzGd7CvFeqzob3nJh6Q6y6NCcBjRVYVnpAbXAcxUrdWmVpGew8npBsQSKNNi8i1EnqdcSHB4ioDVwHHw4",
  "key25": "3Y9XH7MgHi6HtgSKSdu1ifpdGedjUwSLaW6hR1ahBVAbts9NAArzukdRMS8bSL9RUG9VBuCGuhQKCsifqr2QiBf2",
  "key26": "2wvCwVQQ6K3fm5scdDrUqiM3RZxmd4fVNn15ie7297vAGXcc99M46BD95FYKgxEP5yrhgKQ3CqiQEdPjXSWBBnkK",
  "key27": "5jPcW2tj3e17NNPvVFSrajWWLbiRMTTNTLNB9zHsPwFtVDCBtx7qiTV22mGAS2qrqm9jGHWCc4byGnr5w4jygppE",
  "key28": "vbZ7grCv748ub51QjkwKAMEjsVwXLRuzuriHVknjuTU7tAisLL6g39uKQTczKPVEipEmciYCm8V4wmtZCCqMDP8",
  "key29": "2VxUng3jC5ye64ERLRbC8DGM482kptTetpV1eAi3YDkUqf2NkzQ74P6sfqvaERsXYheiUuFGPhMGSJBUDpGgGLch",
  "key30": "2hi3qY4dzVrH79mvZCNuDGMhZNaEn1Wc7K8xMAYK7iG4D6uW4BKicj9gt2SU2RayCo9AkgnEkJh9LKXrBpePffaz",
  "key31": "5XLaddXqS8X76rH6qksqy1ZZwn8Q9bnEycVjJiBU2EbNkoWL3tRzE7wHCupKdmnuwEShBvHmY72QgTQydQTy2Bfa",
  "key32": "5JgWuCpJckdd7JLjhUsgpBAwrARYegxzHQcEuyxekQniafkoVtXHbF86YRt6CcXazFCi9juuLGjq7HYg5aNbuTo7",
  "key33": "4hyACMAj4G86TykMbZ7hqFAH2XLLsmoyAuW17vPq7aD3VQPdbJXTZySZjsy3bRykVpiJwEkkbjCDjyit2XXZRSiH",
  "key34": "5itQmM2a8f9H8Qh7Y2c3RZ7vZGpxTvn7ycCvUGWQaZcUCCYD7MjX9BgaqjA4eqxTwqbhFyfjah6cSpSndgefWKQK",
  "key35": "5LkEgv1RJNk5UJCekDXNabaaHhcmh6WKYh3Z3mwBTrnMo1GheXcu96AniTQL16wXpB9BsSkivJEt5MtdYdxv3UWt"
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
