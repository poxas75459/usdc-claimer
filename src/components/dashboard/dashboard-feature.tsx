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
    "5ryBxTSDeatCQPi6z7BMBC9Q2jsa8rw5cavuY7Ta3yFiNQYD4F59zYUxZe4QcsSwyd1Q7gw5vFEqsZSpmYmLaNfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "246jzMSiBG2cBMrE6jqEeC48qqwG8skzm3nRYTv5XxGknYrd9W9rX736vyQa5WQ5hitb771h2KHemfYP7CcHzz4Z",
  "key1": "RNdM1dnXpHDRVvMAjezZjVeTngcPmkfyH1Qp6B9jXksdK1LuaMEMjuZrj3AMR8MmSSwNocGuphMGXUFEySBeek2",
  "key2": "23rGw56SPrmt64umjszQyY7NLPBd7MRJZbhWstQUGsdcY3L3Ks6TvfpcTYhN6ufEEk2z9msLE7VwG8ANA57bmTy5",
  "key3": "4VPAEG4QNB5eRzdz1SmUHJDG9yQMfrpjJWi7t1QGk8dD6RDjmySVXeSx4ysyv9AZH3rYtJKvMEzFUKz6rhkaDVcM",
  "key4": "ep1SnBsq3jjcadGo7dmk4TDXbRzgKg2e9ohEib8fp5zyfT3iAYdZpz33ST9vKUPEBByFDMRrD6Y3U4CKmoWaCQB",
  "key5": "3SXqXmqJSMQJkta7u8tKM58d1LiWBEzuNbaHBxB5tQLF12UWGRuqUG2VJiBiSCFvrjAQSQn4Zt9gC2tmafGRzMxX",
  "key6": "3GsPjvxEy1mvUrUzqu76wuMhGxwdaJ8kWY1PHLshUvdAu8e95fch2vUYJRGAm4h74ZX8MtLSaZALovVaF4WXsNkb",
  "key7": "4CLawLxHdgFwJgYcPNhaNBG3KZr1nvQGhj3gsm8LSJd3GjBNnZXWsNWNEq5E9bgNJxDRdob8JiRqFAffTgF17Udu",
  "key8": "3cYQ9MF44MxYMP6TLY7z6xsMUiR1WwYWX2sEukCpv17YxwY6m55hmWgB5PQvKYtU3EcL7kbBLb6urviBDwSWpXw4",
  "key9": "5f8D6jkc8ozuAUq79GF94sdLHnDduYYQ9v3hStvAqWTNfTr8EnJbgL8itkEtCKDACrqHUcPgoNUqjvWYZ1vNCr9Z",
  "key10": "2EeTGu4xxy41c1Gzx3nuevpTWY9ePFoUoTdPv1QaFMMrmTGbmxmvdw2XjXqwKcNygNmSgeENbp1wZszU4ayVXWmS",
  "key11": "2tKXdgCrByXg6H7pkaSBnjwWyCFyEJtYNaeA81diE7PBSNFdTWkENra8LA5PjQmtQbQpGCeCSjwxwLDTrSixP4ZY",
  "key12": "2zeoT8oEPMHd2q3Yz8LM17iUNR4KmKhSCqg5U2BcszTpD23chmRDVQ184RSBbhNMvaZHmR6kwjvbiSnnR9vp5PY4",
  "key13": "2EUXb1rB5YQE8bkwiAfGxk3y8cm25J5HMfZBseqYwFPjSZVyNgTxwT92ug8SyqmkoxDb91oN47M58gSEh9GubP1B",
  "key14": "61jDCzLCFyVzKoArqhrvLDjwcPfJSnhsE6PN4Nzpc5Zw4q7ahC2Hqv85XmxUeu1eqNgm6YDPwoyA8QKhyQQ1Mnxi",
  "key15": "2hxTRyjqXQy1hW82gmkzeCheSdbQze9QgbkV3Hc65CGpZyPCwKaysYe1ZXFbzXyLyyP3nfUCr5EnG7du5jc679cp",
  "key16": "4vzC6Zo14ZBkFuoAgCGtTknvKL88tiAmmnURzBsHkEGPeMdBwJUBwVnETaryRD3spnHoH1U3SYeiiZ6TEjYDkCcf",
  "key17": "4Gs8o9a2HooeicCkxdchfPWZZ591YhrZMSfhtPwCtFK5g4mZAM3cYibfmtPLQUmiG4eQBZsZ7qFrHTDTG3yDm1rq",
  "key18": "LET5iYTSNXDykxXm7HgQYDDCfgpuWu9EwkS9BfuZGkbnywAtpqKrx7kZiq8yagf66FnjC3pmJzsBiDr3bFMXdiX",
  "key19": "ZukSDz95zAZ9L5LFEXpDCtC4TPYZhzPGUUsq6LXbLpj8pwEWSaW21R5rVtAJE1oUdFKagq5QmiYQe3wxXEJF6ht",
  "key20": "4MWgEfAssfmcZNLMsufAYjSnfuRLe8RDoyv1733hV5czfnyLkgcm57ktNdHraTjNVR2yxp4ybMmAkRby2kSA5hfN",
  "key21": "2dYnhMXmftnd81G7RjwYNuhAYiXhdK6tRngJvBhsMTfidHx1DZxqUUQirnPmwBVTRWrBmeBqM5sPU4GyALAEVK4a",
  "key22": "2ycxi2LnB87cw4CewLf9xJ5xYS4ZGpiMZ7Hmeg8Z4gMpcPJHFtZ7nEUw2MGJ99qALB4Uf3dc16JyySAvt2KhcyLj",
  "key23": "2QycvjYGuVmnKZarnztBoASYe87Fft8VS8zNAdvtxRJxrykWnXpfN635wReg5C6yWkyBhk9F94QwY6G3ruRTDKXH",
  "key24": "2JKPdEQrNd9G9RnjtEfPce27oD9BUYZndDLmTMsQe6tYuYSUhGRM7oW9DNCmcvAERaYrKJhTejuhozwupPehkLcp",
  "key25": "3VEfyGdnxTM68ghJmtQejgkxuZnwZ89dgXgFmxHanP9NAQ63367c8UA1fYSrFjb1KKGoKbLPn6B2QvFxoW3cm7UH",
  "key26": "37MPnvryXSx3SEUwGLzHVXXyFReZnpvMCKj5wrtHp3E7mxUo1nDnpgpcKTMGb7cYVA2VVe9xbUCfA3mhSLbSH2DW",
  "key27": "549wVJDiBqkBruwB2VsB5fYeXgGjWkmqE9EjunuBozHnTUghpieikU6ds8FF8APBuoJRAAmaLbQUfFbsr6vgSmqR",
  "key28": "4TFz9DuyzSUu41es8MHxfsPvqQZ5aWCrMxnvmiNYNixsfnq11f2RVdU6jh8QUjFe1dmLxFcvLaJVRnitHACZT1wi",
  "key29": "QSFW3VwUMAyHmxbP7e1uaqwmQ7Kq9vEJ9AXfifp68FdCCte94DGt5ZXM3hv6kTtUmhpXezXdG1JvUpeyu96QVH9",
  "key30": "4A3Y9G61nwxmvPxyYbXVHw1XgrQf9BwQottKqTtaCa5MtXQczyLmCmpsY86Rab8Nk8t4va2Apr7HWWoRKj5n5xU",
  "key31": "NrMJzvB5bhY2QLnwhBG5kjSN5p8R5sGTCCUEKDcZSQzrfDh2yawN8fNK3FNNYiFnmUtbpKL2ictZbRx8tZDafEk"
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
