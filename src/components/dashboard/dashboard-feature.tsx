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
    "3NBg82EDNPjtn3cPpyMLLD2Kubn9ai5dESkWoLt1pLzcYtbFgRsY3gXRKQie3a2FGAkN1f4H25tku3HtCAaJZCaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pv3bZXnMVoY7717CYxCPwXSE956cGenrNGDbRktJfqG8oh1wvybLom6izrERMWdLFTfkLopfBvS1cfCXUnYqg1s",
  "key1": "5hGMcDLYnwRz8EDS5X71gFR32XGpcGYh1kJYBacYarpGHteR7Bg72vvn3kdXmxGsfj4qzui5mL2c7U2NK9JGJHzL",
  "key2": "32GcP9UkAWEirdZcsM8JvKyhpsPXXyDD7RkAzo9aNQvtU1vNsGEFsucYEVHo36NPRwX5XJnJFn2fqNJe6EPQwMr7",
  "key3": "4YwYTtjTLCgnkGnU3G1xXsRTw5FyfQbU5RGQvsrdxwVRyZocAqo8kRGa57tyoXsRFCmrrSH8XBinm5eSURVnf1NF",
  "key4": "3HqsFBPUuy9FsJeM5q4pgBpP2jdhUzfb7gPmdiFSsHuihN6kQVNyHhtyoGpeK3vyFed4tNfFSFuobEbgmsYS73E9",
  "key5": "2CEpLPJ2Xi3X9W3f8DiwhDvrvn8XiqUt3FxyQoU9qY5oo3boRWu5MMtfsx85LcZHXF2N9QngL6UcR4BYJa3JNekw",
  "key6": "2MeWBD1g4oW3QEYK97d7fTfNRxZ91JYS14mEskedrRvpy4z6Nw4uNTSYV7gm6rtMGLcuEqpbYN6MAXAAwFffhJUm",
  "key7": "4PU6tW9TUX2SbYcGBmJAxN4fH5kRqq2MeAKtsCo6XtXRuPkZSfE1yN85FsvvwTxtgvhs2QHPAafgJ1rqY8Ti9VJj",
  "key8": "2qkorAuSzfM5mSPbRBJ36qPfxAu4kpcdPSxZRNWuJfLdi1KQaMTXSb9c6eXndYcP4Q3fwXCPgVkxpqyFMRTJSF1d",
  "key9": "44JQ18Eddn1M9uMBQVwfRx6TZhbwoWe1xxJ1mMm4MACRpxaFoujZuipCYuiBgFQ1x8Unq4WNUqyy9262ykFH5iSk",
  "key10": "4m1UyefZ6B3rx3gUeZ3AKZqUtTfWk1oRZG8XcKqLg5wKYHL6H1MXv15x3jCrU7stXJ3LsAw2Z3ts2dekmuv4AtLi",
  "key11": "63dkwfT3SWLGvepURoZPwuFkEVx8QQfk4CLHYV23MTQ9TTihTHYvimrfrgD8c8YSc9JNuWQozy6HdrFHorZDyW1K",
  "key12": "4PCJY2THuaq29pdUBbAeWkWk7UfHvXaRMMseBNxwHMGw5KNFG5k4ijWqp85drMrB6ZFHdvfRxim5rHyZFpuL54Ti",
  "key13": "4epQRGzYGk6DaqdvUKeujzBixrV3DDEx35GRbwhDCYK6gzeDHm1Gh8fsbhbus2H82TR8TPppR9Niqd3qyG9tbw26",
  "key14": "32gn6qW6wEjUmJjVYJ4vgSTpMRT7E8mMYnRqaagG4cd9u4HYWuPi6Yy5YSBHSe1EjbF5F4PFhvpirwa95UGWT5eK",
  "key15": "veYRTwa7CZsnN1YzRq2fW19LNwJ2BJsMjSVJXYXWzMLySAn8VzxepDRPr8UHGjVJ7eAGXvAQKa7Guy2rpqJYwaV",
  "key16": "5HBmmYXF3hWNnXpW3cH26L7NivTEYJnnKzjsAxcY5x7QJvonUuwQQqECpW6hCKXutcsZKWwLkgJQPyiR95QJdFa2",
  "key17": "wgZzGQF8LQvWmQfofM8j8XvD1ba8vYqHTxVK5VKCwvkdFK37z2ppwNiudE8XW46BBAAEdBLECwxgoKQhuojMb1Z",
  "key18": "34B8ww47ZbbPbgkRLh3mmQNuw2fjoWVgQ4C9FpGfN4eG1ZdkzBSMdsR1cv6HN4EoKL52AhJwCHmoTitEzBNWz8Fz",
  "key19": "FiMDr5FozkwQJovb1ruf6qY1eceJ8utjtBVadkTZYJ4zxT1m2wV81q6Yh4PS9MfUoWgnepejAqTThfri6Jdeinx",
  "key20": "2ZQKnnhynLGsdnVfFaFDDVWSoRUyEKLJZRerHJrjsvnHMtRnxXmtLRjqFDB1FwHXMTR96YttpR3Uz93FYETteCBY",
  "key21": "LDzyeEtfQbVNy5aaF1qR54sPNab3kjiEVou9tLC9KLtizcADjqmKroxBUgvtt4EZ6Lrzud5q1M93Vi5NFLMtb5U",
  "key22": "3JEm8xoG78xpAb2g2LJ2UvJFUzCQt4kUXCPFCnQx59XdvM1G9d9iDysGCwZHcoFbsasdGPBxU7stPoLR79Sguqf8",
  "key23": "2H7f9bukBpikwqrYeWQmwnwmbo9nADTssfL9T78gWL1r2KkrnZ8iDhfbtndQHZx8xCztCVoxjRNyeBSa2PzVEvcD",
  "key24": "3Mk32eRfqJBPiXTX9py64cffiCNcfu1HGF5MkTYDvJFrd2ioV1LECZfgGvs6yf1up1zD3zWEtEDafW1gYiv2rdfp",
  "key25": "3T82QUe5qYwFDubtqHkJKTV3Cr4prVo23C3u4amxDanzkQcU2Y2DVndhbEVH9jKX4NmNnTv9vbVPzGwbU5fHRZDw",
  "key26": "5dmrog7LJ8s8dgprAVHezxNwch27c9y61d3oQKfDGM1DesUBqpTDCotgEJ6cKepfe472EsZ5jMpaPKjjyP1iVNqe",
  "key27": "4AtktfZ45CgB2P1qsCSbhGyCtM9nPQDcnViHo5NYWmidtTKPaNixpPcFet1GMYRBdWS6GPeSWaYGFHxYhsThoDfu",
  "key28": "ysuarUnysNXQRgsysM25sniaASJEv6RtnoXJYveB73Yagbrs88CxrkDwF7iTyx9kroe84txm1ddvKBunAp8emXH",
  "key29": "4Wsuvw5h2hyEbVvmpqQpSLKJesCkga9tYNzD9euzxEKNVvyXu552o44EWjH6i5FTXfJzLKfHj3uG8qsuKacKKXJo",
  "key30": "352KewdiEtmxBusr1uGN6Ha3NiWrs2tk2aTsSPkEX4qGGMB33ZePudHFgmN5MqyCUYsWAHawy5CDvUJYxGzotAbu",
  "key31": "4eksuLHUrnWSPRbgBMirxj7ZmjAnSgp1y2kVWyEyAFCTX1qJd9DeWnmqWMdHvfjGYaUDfkJxKrrZ6c4zJ6q3LXfJ",
  "key32": "4XRPGURV7V4NNafVRd7CKmqzQSJWGSw7snkyKQJhTrvjuBdwEs7qb7kEMU1h4bkk42Qy4dE3U2eCNo31j1x4kFYq",
  "key33": "4TnwrNkUPVeomNtXKeWCLdXmNvreGAyNwyPzsfiqMnj46fwmQpHMrPJR3PCL2QUDkaZ5tdACPpzN1nv5Fr6tZeQa",
  "key34": "4Rna7bJYzsSVz1pNgD3c6nEpKPRas77x4XficU53JpUNXK3hB5FirVANyZnkWryzhkKgUoH4u7WRBuySyY4LUPCL",
  "key35": "2L7xXGtHRU7AGEctjfNMFnxCpe8NFoRwz3HvVPiEticgNdnbALgBNenhmexCiQcdheCrpSEJRk4hh8ZNHLDxNhKT",
  "key36": "3WwjBWGNYfAgTMo7N7xktbY8mTDbiCYFjrSz5W7PGAyLtxoNEDBuszc6K5JqkWMEqTvGWb2GSqfjyFXVm3G4jWH4",
  "key37": "2XanWNxeunQKhGNxSEJbgbSpszLm35ueRsTHuv3r89YvVLBuGz2RBCFkR1aeRTaYJb4DDE2vtSBibjoiUTG1qBJG",
  "key38": "3UnQ3acC94qSxAL9C5PgbdSmiYPDsCuKogQTR6qcPUtzgnYw5ASF6A5WjuzTiUAU6q7qr8LTtDv7naGwsZ7ThyWj",
  "key39": "488Wpz2P4jQwFZVQs2c6BGpQAgKxua61AQJCBD92tywoijX52zuVK1DSQRMjpWXfYhAkxcvyQmKuHtG9jvAUBv15"
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
