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
    "LKX4vmeeiEt3KHmcw5Nefp6mWMjpWkEveRG7v4EUC8i6Q9emV9ddRvkeuCoRgLXBcfEPMTgWgVg3nFSDfntfSYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqgy6RSUcnTF8x1NnWYNdYoTuTPgJ1H4wUgC5q1StyyY5Ppc8sJvth9BZamnbDVFndjUbGomcR2jYHsB3GXz6qV",
  "key1": "3XRfq5uG9V2oy8BFAkAHU6cstxUJZcBuHiAQcQsRPsrkUgXBbx9jKRtuZNi2y6RP1wS1vXd8HmgvqZT5jKhva2YT",
  "key2": "vP2E6CyiVAAJN6ANna54NaZ8hbvYNfXoe9iHgGTwtS9LB1ij79QFe3jtFvWrtg7hrdwnSSM6rH8yuGHnNkS1SwJ",
  "key3": "5CfZxsJcnZDFkaFT2s3HEE8U7JbDRytWmBiS28kX4CtvnPoxzLPmJKutRoSjGJDQLv2tsrRrJdePFw64yt5Kvmdp",
  "key4": "4Jwxh2xcxTJKHBMMpG7op5S5THBjL7cfuSrCK7cXz7qViwd8fNbYyEvsVPmpRJCQQFtHff98rjJyaC2nzasZUaMd",
  "key5": "44SyLa7yaH5tJkJx4TbAsGHGwPhF6BF3iv4EwuyaEFzPmTRc6FzhEBd8R9zwhTiyKK8JcNipJ7PMmbKkDa75qsHS",
  "key6": "2zNT7xvvTg478f67HauvGPqRtBMxc5Ym1VdZyxRqCigayaxtGd11iBQ1NfCx1SYNyoH7Nm6xgcdnsAqGY9uTbGDc",
  "key7": "2xrZtsPUQsVfJh3NBmoR5h7rxqkPXCBCgmAJhx4ZP9vNFVCTUj9hbasxAJ7cECfpbjNMwaNhurG99ivwEJbXaF1L",
  "key8": "KMUykaaigBT69pU1XjcKbd6T8LfePoBT5i5PoeK9aP8bmacd1SDpFzZvrHLFzThgfLnEFFw3BGp2U1gxHn1ADTm",
  "key9": "euhFrMX2o99w3oREHtgmC8jayP5tSMhZjrSaaV6QvAHeeVsA47J9v6c8M2RsWpFBkTtQvFEJdsM7mZMYvx65jr2",
  "key10": "4R84uxcWtZrn8xxR3Fg9AQamHAJsPHhgzQehSbVh3KqdzjDwCHARPA8tAWvCVEmY4D8y23YFM1R7vb7oB73dW9ho",
  "key11": "WqFpu9t3uxjHxNSsrusAZnUbeBcM9JMwjFJ3wzWtTKUy3hJXC5utZS7ZfNtkoPm7Xi4876DaWdCWVfLwScuxGCw",
  "key12": "3vGEWpRgDRysmxW5Pv4weSu4zzWA9SAu4Esyh2V4pfRy5Yoz6u2iV9LvbwabgP7zfsXiQW1HtCzJB8dLEsbkZBbw",
  "key13": "3WH11hC1ZTFmWv4dYmxYGwePSsFLugzTAgb2DGQcarJT7jxuNrmBLyfM1TxRNmDSzkQJLaDWt6yvU1Gw2oQY2vfw",
  "key14": "2aDqtx2CBRx2GUgSiU6gHr3v46q9gcd4R5jxjKUAjT996CdPRHoqrhSerUfTx8HQvd53hDATJg9tZFAsApfD788u",
  "key15": "4PNm6hQtWmbtErR2F2RUaTicfM5jGPqHLFaD8NNFoHjAouLA3P3poNKMLeXhGzQ7Q4nTxH4yQ2odDLxxsroFSx4R",
  "key16": "358dB1Gb7kbyNxFPYt6T4jVRYNTZb51gSG9Gny2t2FjfSf2hYt3Yx1BysCdm8vp9DX2FFye71PEAxYkzyohRLvVD",
  "key17": "4mte3nHk7fGn32FJS8Fr1WEhLDLGYThXnQ5XVJQj51F9vroJpccWxtiEuM3mpHTrvkm86N34MtEmREFPdu36UrZR",
  "key18": "VC9PoY8gfYSjjgR12cHpvSAGqr7hYM4X75KtF3GuP6cV7vcpRDz4A23BsSSA79k1ArrFnpoXeYRhuz8fyVdSzyh",
  "key19": "2sBFXniTQumMf3nB5snUzTBd3hynvHCMy6gx8MuMQxBdj1KRtT5h3okFfyG2GGHE9AKZNrYPVyTC4HB19vaganHy",
  "key20": "4f35bKzL2CnsyFYFmnebPTjDRKEUnadapjq2kpHjmtYoGhnz97b9xZVVXjai2Hhe8ed7hxTjcU7mhz4umg59ooey",
  "key21": "R4XVFgpwsvTgzrEudYA6uwivwU88Z2C8fbCEdYydu6CtXjrLsoTheHxz9QZs81vhLYpjo9c4N8UJDmtBmeeSBhe",
  "key22": "5gVBYB8gz4zmQznFojtszr32Tm7fg71VzyA8AVj1aEZQ3qrUaN6WWFYjcJiq5WVTz5nzgRNMzmHTpByeDrvZo4K9",
  "key23": "3PaQRtDSRF4kgJDzY2uPkPGG8hJzanNRyPXAvLoUuVtPvZzaiA36pHGc6LTpdxT6XCJ9iL4vzuacpLmuLrKmpwjQ",
  "key24": "31cRmL3jD2FWE27moqdzVZtn5FNFTRhBKqRkCJJW4EyEF2q5bXW6RaKHqcqgcVB9fnfHSbFG3syEbc9JmWf4qUa5",
  "key25": "2woHgxXGSHpbpUhimH38xDX1RUwxwgHh5Ze5HV1sZrK27GgyosL93vMVr4Pv4KMxUJYkfKaf4yt6bWywypAYMJNW",
  "key26": "4UUZpacgj2n7jEEs8GjueofwLRPKznBLUEnSR9TX9gVkhJ4h9TuVjhxo8pqEiCMGLV6RVFv8gWJSb9A8Tj57HJ6b",
  "key27": "5sEiAtgatKqFhfV26RdGugodzro7AKckEXMe3gpyussYp1ny3hwqsZQUaGUwmTe5L1v6fwtHhWVUGBv42SHNtHtm",
  "key28": "2mvPz2U8YJqT1VSFLG9PtW5Ad8VzQiedQW5ZtaDLSbCi1eHsCdh951mHKbtsiqyooSaZkVXkUApDLsTMpu77iuUz",
  "key29": "2F5ypsipSUAiY9A1b5E4WXv6AVUiZKTzRvMzAsDxjbm5gwa1X37yzJeCyDhDErC8cqYCAsuVkVvyQ9hvYMnngZPg",
  "key30": "3V9L5Lmh95QVDA5tPyeHmf3KQsd3FQZF65CiMHNNw92K6W5NbL7iUVhRZdmDfePwe1kew6TZTTkKMXAG7WyfUwTz",
  "key31": "22aubNWVJCEFMYLkqWyni2hPhCvydDZ7jbYLruz8KSgdZe51zdz3vpotsx63b8MVbmfn3mhmBwCzPEUcrhzaC794",
  "key32": "382eCUAUmhoKgNprLtqjUXLRtHwv2oNcHF6X7yPTdrnAsaxiB1DfradtMYWPFoKR3YGbPZixuFsfstWbCsXYd7yn",
  "key33": "5vbyURYUkZc6a7eEwTjxTUPmB8gqca5qXNeeH9xRDTxDG3VYaH9LSQFWFdwKADTQkP2VeG4vLjno661u38T4Pwz2",
  "key34": "2RjgR3VK5UhXWQEzeaH8sZNL2rtUnYsX6qHa9jtMpbZ6BgfDucRLcGjSkFeHogNFkKGGTED4fGR7AmbvjEyjukgR"
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
