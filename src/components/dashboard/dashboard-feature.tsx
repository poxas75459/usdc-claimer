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
    "4qgRcmFS9RfrQAMwQyyAVqAq6ufvdyhjRePcQCaUrQNWDqaDbFBGrM7UEJW5tZDcRYfTJ3mxfka7k9ubCCH8q15C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGDYbBDDdSMt97Xo8pEiSxnXCPn63XBJm88XSEfBDtqWuPTFy18e9TiuFpsW6fSVmjpSgh24cuFLUTNxDMdjDfJ",
  "key1": "3ouajMMKr3Z1xL3Wv3GKiTEkgRaM6PMt1rbj8JuVFJpWhJvz6oEyXTkHwcGpQ61vF8ixZ5EFc4nB1wXmDdydkARg",
  "key2": "3oee5ndmfSPekZo8SJnPnwviZW6pqk1yAhHJKQ7825kE9ZbvfaDMFRv5cbgpTJD3u39EMQkKX5KDCVnVRA4i6ipY",
  "key3": "2go3Tv74tLdyeSYdzmgdgCWv9Nz754TRnG1ZLb1e3EjfszEnEa52dqMZ8QKCjJtjzLCzF4m78QsXQBwNXyxQK8Yb",
  "key4": "NT2Ct4HwvLVBwAdyHJJLCHdr27FusLqzyL4uMymyMmYohSmff6LqkJ7Viys4QG5KTT63nPBaYGbkzSjTacqEJRf",
  "key5": "5yAPxsTPEJ2nsSrvk8HYanxZE5qPa4rtytgdqXPSqPVaRG6LepLgBVAxgSQbWmj3D8Cx7aSap1gydqYRiFZQ9Udq",
  "key6": "2kpVLMw85cyyepeLRWgvpr62HKbVuxip21ayVDm5qyWT259ebp6oa99iufdzRzLDGJaGrB9aQuTKFELDqQbev8Hu",
  "key7": "4ZG5PomJVrZsoHu1MSRv54aTgeKWsBPghv3W3xyADQBpM7QAdV8ccmTuwNMR5LhN86rkAxSnqmk5MHCuS4JFhKfZ",
  "key8": "sHZNSmxGXp7khUgLBLTWZJ5E4fENprK8TGJHwynH9PenfTDJxtVhqgrC8hwNttzKGWtB7KvRJP3rd5F3UVh3BhZ",
  "key9": "34gC7ovCQ1MUnrKBL2zZddnY1dM4u75EQViabTmJ7aUC6cyDaV2GJGRou1BqP4NYsSEPrLzGSPAkFGi2AYFas6Tw",
  "key10": "5VU9TtXJj1PZFt5hreZVmVtHxyvL8J59TNTAC7dUy47RY8Xy4eSkg4EqYiP3QQJyrpGU766Gv4TDajvSzQKgW7dN",
  "key11": "4CqUfrrSryY7h6zA9aM5oDkNTH3rGY9N2Gcd585K5nNJBeeYc5RRQzav1En1Yrsv7c8b84w2yWk447S3f66YZ9dm",
  "key12": "38fBtWyWEz2t5eke3ogHRK1QYP7zEBixpND5X6sn6F86oKaBeokq1pbSuDVne92kEeExJrjdKDj6ewHisY22Q4X1",
  "key13": "5GN5Ac4apC5sVWAFQPc42VwVCsWp7Vqg8XQAsR85h9hkRmENpYxLoR3qABRQwKhKV4wkZcwwhVExYWjcxTtWgbdP",
  "key14": "G9q9vKwworEQ5viZWb5zkgKGAqMHWjw6VVGxxJoe47d9oKU62a5wdUVC9y4KGsafGz3dnrpcYa6NjiRKeUWCtC5",
  "key15": "5anLxiAt3cPxwYoVRY6s9GWu9jjrYo2bGHdmHGZ2wUwRpokhYR4ev3KCEcUXyK8mrem4iWifEdfvhSEaDHSVf7WD",
  "key16": "4BeyEkfQNYGo6sjpaUZjPYnryDeq9vuzef3aqxq944igR1yZ72eHJC2CJKzukKXTFihe43K3UA8KxZpf4vy5nWKs",
  "key17": "3Smi6QceLrRYqv7CLp9ZEQ5YPa8ULFoTWFWaJ9ZV9U3XdK36CQR7ZbcvNPJqmZ6UCuyHJWPDer8ME6empAW6tkQd",
  "key18": "3mtdpyK2cRcLBaazT2ZQDkPzURzmoGqRUS68XhN1ppnqD7WMxmH6YpE7cqtKvgWvbdEvm7rgNpwu9VLxvVKcjW3d",
  "key19": "5feNP1JEEAUyaYEZJdstrsBPhWHYkXFQRVgJbLy1Vtk5t4kKe93KAcMGCzKT96FKrXGKWwCixJZfLKeVXRUfCnzS",
  "key20": "4hJB6TPfwAGh7zCmkYdMWVjssqnz5rupTkF8uieU7C327YADCJRsmUqVn5t27P5XkLVZPBLKJd19d5xhvZZcyM1d",
  "key21": "pgFC98EuevbvLaHsbjYnw5riNxrshVRDARtFHq5M2x85YvY22n6iLtXMnrR1pGL8CViWZqB9xoetugr1Y6PZpsm",
  "key22": "3e5C1JoLihzZ2nFudCpEgHQE32PSmX52EByqMvbus8hKhRq99nqZ9GXkWZdj6gU8hg3rc9TAREFj8sfQDdAbeCgB",
  "key23": "5Mi3GfYPWTv8zM7BANZ5ujX8MeNx3oug61JebBwSEfEK4D5rXbpdbGtZ2ogRtGn9aDPPw7GT71LzYgYwmzTwNmrx",
  "key24": "5ZqgEZuppt2mAR9fkpgVD6JjPgHuHkXKeNuFuPTMe6N6x1irgMbAw1op1xiducSZJdYCTNigaQcBy1pjqS21uxEr",
  "key25": "4hZZ4xBS3jhsntbX3DbF7ypNMWsFf2VSEw12zhjRRw1e93HdQ2R7ENJNs1gYPdW72WfPGeQ4xyqxDnJWNwQVorSD",
  "key26": "4dBCtoM6doF9kWXotT5odHBNCaG4odAqfRPuG7Va2BYwLfyhKPo4F2bw5heu3XmCpgNXpPPA4zMe2cKEQhuCzgCj",
  "key27": "3ZN3nCFQiXQwYncrCw1tQkqxVZuhLVYfdmE3qRYeNSXw7hzJQ6EXqgDEoo49jaAHusJNC9ZjhRCvKGHthZ6aEXiu",
  "key28": "35gXgtWmEC3JtZPsXjcSAFc1bMmSGbWZLNUV36EwEenwX5Ts23tgq6wqZkZ7A8bUU5Ch2h6iWC8RHEFbZ1TsbtgV",
  "key29": "2875boPW8b1L6vpGvPoAoXCPJgFG1eahjd1vjepk3dh15zxoUZ8eEYMNxwoH7AyNbogxtdGhq36UocuDqYzn1BCV",
  "key30": "4ujJ4hzSaqVVWRveH1FHgAkh9edszNeUwNnEtajcqWUY4EDC4zpzb8Zw7gKRq1ntkUo4bvQxNDinvB7FhdgXeFPu",
  "key31": "2WeMtEbBgAjQHjUMGpSMQG7ZFnh2gHri68XZxhvVm3zCqnjtDvr9anTxCndYvL4TDFCMjb2WmBonvAT9R1sorCJj",
  "key32": "34MsqFkA2Z9SEdFrycA1QnhANEt6M8VKvyDqt9srKuZySFZuPM4aNqsGyGFC8NQeM4yKa1zZwEhzdxczLHzWZPwc"
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
