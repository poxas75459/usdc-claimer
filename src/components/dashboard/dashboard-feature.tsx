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
    "5UrQZjQKmEmXzUpjARQ7uvbsd9jtiFwccdMKxsgVpdjDT4ST4pnozarRZzWnc2ZySGJBHrb59z4rqr1pxedXpYZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SaWQSC4QVhTh3ruCepWKa5t82WMmNhm2kSfkcatSZqFrJww13F24GzieMj2qBPtZEzk8LvDwywnNEYYj6dyBtAg",
  "key1": "2zR4vUp3i5m6FQzo6czZVfc1RyfXwzZCSSktHL5dNWNcHW88kzx3nUPPB3P9QEYq2LfSgw9enPeG31B2QdSy4VgD",
  "key2": "4vBizZNKM4g5yJSE38dPikKmFGfwbKDuurAtyna59HyFnbpriJNfYkAwAxyBWpZyA86gnfcuFeNzHZiG7zWf7yKf",
  "key3": "2xE9GXsykcn9X5pJW5Jz7Ls65cdacXfD9S2b1HRRjktNBdTMBN5thYuHL22gonkfr4HjNcS4vaWjZ4RTtZ7BT9Dt",
  "key4": "4zLdxxSbTGgxsjCULZGh4NQU1nXKET7v22R1RRbiMCjrDsvCY9PLGuxcVZgwobpeA6xuHsXGaqQxJoB2hwdxHhat",
  "key5": "5sUWkJkZDjjSGXo4xkNdkwVvve3JQwtonMnjZZ5b22iZo5QHCCUVTKgmYbkUFQE34mXsr1NDmEpUuDme9t2MsMtZ",
  "key6": "SWzzjj2hBYyEJDFPD59WZfKJM2AUnS2UqU5MeHqezSiYxKG3itbt8nnKC9Wtawn1gVbbUJXR3YthopgHjLcVX4i",
  "key7": "4jChe2fvBCPSJaCV73WUv9ATDinTp8zVx47ySiAUiZXtJkqi9KFotvq3H28QnCopNd8NtF9BmenK64YkC4faUocm",
  "key8": "32Hw1MBQqszJsSDHwhJpDNWgsGxdhvx7q9gnjqAU3ox4h4VhR9Qzsum4XRmkskvcVu9hZVZ7FD2QoBmeswtcLCkt",
  "key9": "ZrxjS3MJejiDwSQ7dA4SpBWFWoBqAtU6QP2MviLnJibWL6rizhsgBBQkUs6bWqjdyJ6qQt12o1trmKJ777V4kqC",
  "key10": "4FPCC6S7T4DD9RUvzbwDGt8pkxyuGkCt5R1Jnk5WiZPuAbrSKfZ99pNnRjGKb1nAdWrfnjNSuyJkXX67KK6r4r5i",
  "key11": "4iosSyeAT2ob97BnyUpCazmrR2om3yrYW8sTLt5x2H61Hw7HycQAurRyaDEL5qgSyftW6dWVr8Ly1GW4QVEHRyMb",
  "key12": "2sy7sN6eeC7HTgSLUxtgb9fQEf8x8o1xUvXc2W4rvJZvXmzAnx6XDnngL6DezahhGoM86F3VsXYaVAvaRR8hpXda",
  "key13": "2nvuSgTCYNetBYqmHzgmh3hL9vjveK3xSsipnYMauChJbo3XSYkjMunU3buTyCEXcBMD5ASbhBRoChsMnBY12Anq",
  "key14": "4NEGSnBxtAdgYxtN2ipsCLWSyvx72fGotfzRizMVtCbckghEioob3kbyJ4eGUw5N6pJJmWkqxP97M6JsDcXEEBBy",
  "key15": "57ft4nPggtd8JtGzuZgdumHKkeUVUVFtHbMAd7vJmrRsfdfq2352EjixrBNYZKhN2btfaNx3sANGYDQPdfkTTrN9",
  "key16": "4XgYx5JY8ovYzvGTsz7yYG9wGjQGZcbB9xU1C5xQMAov1bTPzbBUywNBbfvgypGWNyiq7vdX4xqfbQ5cCjEuCWY",
  "key17": "4we1QQp2gQciqJN5v2ERBbXPgY1RbCGwLcEWXEdXmMuoTgyTMDDVC5Z7LiY8KqgWKvpwFGJvKbQeUVD6M6gRXcSy",
  "key18": "5TQmfA22Hu32Eth95Pex3ceLSH9Tw3RmkVzG7763QDyY1XtzyGFu2cDN8houXa6jDF5pPwdpdxGsdiy68JLaimUc",
  "key19": "5zfz6uUPoAhVFbdT9mnof5skoJp2LKo5rjjAKPfrTZ9XUJ6EqGLdFSyDLipCBJh1izWRfwESJLBoPqMnSMNxgE7L",
  "key20": "4YrKv61QMDRMuq4trc3qGA2RYoAANebMPWQv7HX2GToBvBJLbdNnQy4mrmPdrNDzruAmqrGUu7vH7Ty7G8i4UJkv",
  "key21": "5xyZ329Qexbwrx7MXHsuuiDZZHkNXk1sR7JUiGgYzUkR9e6BoJMeQxE9wrKTgKHL3BwK57HkhszAdKQt9TWHpHMG",
  "key22": "4EbcRScGmyb7jmXtimevGqRctxA5qJuMTNf6heHoMgPkSeXaBr5Hy69W5AGXuaM79BNN9d66wnYvjF4zZ3Db9hg6",
  "key23": "2raD3fbNS6gWiwJnGo4nsX6JtaHoa1Xmkuk9X1TcEcxp2wiTkY3q1ZSEYbCGtAjyF2c3io7yNJEMT4xK4UHVG9Ac",
  "key24": "3LSWKyESyWhJ8t3PJW4UtCFd6jsXEJcfK7ydAXP3V6ixGDAMt3P772ZjJJPuJ4LFVfJhJAeeaJgdHKe2Xo59QZag",
  "key25": "2q4SfpjcwyVXJMPkfPoQVz8hj48z7FWV44JikqK9Bu4brmVCXaphWugodekjLtiuWqVw4YqoVxABeRePZP8SwYdW",
  "key26": "3yykufyHTNw3Y8W5vvwsn3FC3hWQPar2u2k1APrFWfX5MiCpScJjbsDCNu4uLXTprP88JVJnUQBHAoF1J5CdUr54",
  "key27": "4MujayubkHerX8jMZKW9U2FUrEWCNxcj3PmHrtqputdw7tXPWMTekSZqa2v5Vkjby97CgCLysu9sxuNFk65xTroj"
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
