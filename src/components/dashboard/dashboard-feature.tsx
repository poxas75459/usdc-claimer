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
    "Bbpya1wKTTMMUJYm3W7Xqy4CUMJ43PccVWYFg37mPCffPCkkXQ6L8paXft6kwoaGPSh9sdH2ieix27SXmHnxfPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a6xRDuPPGtfMFwkjitwYuDGhovYwhWRHV6neGQy7c2d4DnGau81Vqkj1HDpSsBfbnevH41zDqTER8Ha5Gb6EM7r",
  "key1": "Q9HJwKm149baLQqenWmdL1ZXbA1Mhh5PWapmr35LzfiyznygRG39sqCrg3noHV8zssdRd6hLriVWainSeS9iBCB",
  "key2": "5VHYpBWSs6UTsGm52NZtDnfjJpQ88LcDvNfwDRftG6TxDNUuQUpq7vfYvuTBkJBac8bxLMtZfUfWbhYPaHU3Ri3L",
  "key3": "5FX6WaN4vXbFTQcThJBuLbJoyonzHNSY2bU4EfRDyUYeh4tVa6eMAUsgDRVso6urmompkY7L5uCS8HadxRhMGjpv",
  "key4": "5VtohayTSZibPUGT2heUzyE3vxSScYrv8ZeFepHt1BUuCw4qtAwpyYwxHWhGchXhHicrbqsKvtUJwm6kM17Hnwgq",
  "key5": "TEABXxdrFGzeDdwBZH3RcNmd7DbZA61wFvPyt98jejxNmyZNv7fSsDerQksAbk2gwC9F1fqZzf4c6vXkZ1wf9MF",
  "key6": "25LZgSQjRZR6tHiFLzNQuXGjPwoUSxSg8v13oVshDNuuPgiqtxZAQsc9eA2icfTTQDXzUHymPr2G5zghGTK72uRL",
  "key7": "4L97J5PqKuc1T18MbKKPLtyXYdZd8zWMxFZPwA3RvCxLR318kUd7KewoxPfkxQeaKpXuHbYfNeJD3k5nceLE5qkH",
  "key8": "542BgsJ16yrs57LLPgnQFaeSBVzFFTL3qHfA6RdwRn9B1eErawKZ6VTxjdiePTruKDuefyLMNH2jZQLTDmpEUAu1",
  "key9": "2vGmk5U5TQG6vf7CisTMQLZ587jM6j89Q3G9VGpjia1jwDRJFUVxtETpYqcEsm1EvrKCDfcDTfoNJDQdgD34jPhR",
  "key10": "4Piaz95jVQLvGgLRGfBD2Nnx2Y3xngjZqzfibcD11NaTLzNb3z5wBpBWaYegD1HCNpLpxfuatBrmBDUNkovcSUHA",
  "key11": "3eDz999dthyKh1trQT3Jea1sTR6QJNrnLwdEXYniYS184TPL8zJoeXxPXnbvt42cH23ZnMSScuM5HteqNZL6EUZs",
  "key12": "4N2qscRMunuTotz81SvNEkuppHSyP4Szw4xJB1HE7zVTt1aKYEs56DHpHbeFqJFqb9cr46XG2GQSG21DGa1hskSj",
  "key13": "MEpUMJ2kg9qvx57u3fMoRAHBHdoR7zgPwfVMZ69a5gZv4n1C1RsSRp57oPj2DWX1JUPJEi1xbZTD8MwnJj6H8AU",
  "key14": "3CQZasYFHshAEVri7kd4E9nfMoatqZ2JkJBjsj9ZeAukfHo8pV81QBZA2Xnre66VkSQCWFuEFpinQ1zhZFw5p7Na",
  "key15": "59vZdA6wKqoNLuCxzx1851c4VMQwZfCEHnP5yppVtoq4rbb1FMtjCY9widGibyGtxqcm3tLgdG4pfQTy3XjxC7Nk",
  "key16": "3GzbUXVxjNZ9zvSeCgjasK48wZ4Ps2kP6DbFfJzmuDHjXJQeUv2REmrWkbsEyw9zHczc177sf6HdF8coo6Nm7RUX",
  "key17": "MSskSWfq3mghddHXRC48baRuACrpzF5G1to9MJYqwsLmGzdB28SXA4RXYMYCMfTiEumrc2jXZPD6R911PioH16S",
  "key18": "3mk5ehdEu29hCi59wdtEvkb6W8HiKufNgRHF1a3VpL94yC1T2HyqcKEKVEqVi9SMyoWy3ZjVKSNd3WaRYxcNPs4W",
  "key19": "5vmvuWDdPtDsa33aBGpi4mfAiZMGVkyHoLbygiqa8cSewX8pt9zk2xwfpSvJZcB5pRtpWh1tdKrmPQFdRNUmkSr6",
  "key20": "2A6a8qTvm81fgyge3c64zmUTwyE5X5hKtmmv5XP5FyuhJfMyjHQWeZcivCM6MWHWzNHnrLXLyEN6f6zpHQ1Zm43K",
  "key21": "3Lkm5yyqF86pYQtshQMsTQkdrmgQT3LWdzCRm828UL34QgN8jegbSDaK7AKfDLeg4TCWhy3YV5cHKX62ibajrqM1",
  "key22": "25w6ymfNTF9Dg1Z1sesBrcX1wa4s2KhqKHA4oz2ddiXa2QHSzLjc6dd8ob5bkqtjH4Z4FGU5Aa4J1dAJt6TvqcWi",
  "key23": "2ZrM7XnzuCW2b8naxFxGz462Wm7U1vwvQUJvoZjaVef4ECAdMe74caGpvaYPXwvxZPFLsBZniZbHrmwWCijNog6q",
  "key24": "2Syk863d97G2RJFUpZD4TjQrbsW5iAmhfYC57CwneaDCmqTcfNdpKcVdaoFYMCbqnUYX1AKwBeADYrLbdiaQ4foE",
  "key25": "LJ7sLw6GeRTKaNZ28CbGhwa7y188nG6E6DN3MV9HdZhUGWyYPmzsWvqpf4CnmuRKvqp6PGUC7q3kVnnXSH6BSDq",
  "key26": "2dpUjfHsiwoHsE6SAXwShnvxe2QAxbHMKNhJcLjswqBGg8WQ6Z6vmwYpFoGUnCH9qZrP5xvqn2mZVkeAuy6e6t1S",
  "key27": "2Zake4fNV3iL6LZY9GwB2dqkbKuV2TgMG8Esi93r2ZojbqHXMbs37WrTwS9pUnsaaqBw3EmAnrAXoiBxqiXz2EED",
  "key28": "44US8EuVsDHvT7HaFsJ9kTSauGnXsYefj4ZsEThGqCq1KcHqnahYhyUPcicznkR7aWEmzppHRDenQNRqVzKWf5e",
  "key29": "gnrfa13U4qmHgka4mQTz8XTxUbLgxeMvns92yUTH2X1VH8hKXC2JVGRHtmX23WNqK9KoX8osBh5uUG8VvCX2oPD",
  "key30": "4LVQ76z72oBFY3weBAUTacXMmZ2ptVsZrWA6BXKSgBgGCiJPL87vJcpe5krTemm5qxuuBBMwcxKMFkhzAa4TRVdf",
  "key31": "486pbhCJXn4aoNczoedM8WPrhuPEmQxmcjv4KGMpf8X6qsm8tp4PY4YinajK51WDRKJGSDCnXfhP32SMtAzTAZgN",
  "key32": "31hSREhUWU9q91vN1VybumZw4gMRBz9xFXJqUoxBicGzPY5MSYKCqk5H1xSYGziBPkExDXrsmZaa2LKke7e9LnPc",
  "key33": "YXF4DJUNrtsDKercAQDeT8jKqgNFRfDFYbo3MCEPHG4HzYxND8QDHYFMKdGY7jx8Ak376hYHeMrpVYgzCzsfnju",
  "key34": "2r4ogt7NizjnkmQhGdvJk2YgUATRz1zZzwuJR8rA2ZZryJDiiU5xsKP1XVK5PVQqZX6WxupakMhYsf4cMbymrmYe",
  "key35": "3JCEAG19hannedSubDhcijtxKNedXPjghWsBMimkf635X7qk25rW51CvFtrLJnhErd6RuGHETCW47YdLXgmMHn87",
  "key36": "LJwf7wm5ZvtPrjHpZujXc9Ewa7HUdA5D2RGfC3asP1nk2oEsfxo3seebwzxW5VLddNphGT1ktBJ6UAnG8kgVVS6"
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
