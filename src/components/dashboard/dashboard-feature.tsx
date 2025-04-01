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
    "4fx5UGvRYWky6e4prwcwjW71D7xfPhwH45D3k9LegjzhLZfc7bovrp6udAjXvVKA6g2uxcLM5QK4iQf72FCGRy1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKz7TjhKaqdHf4435kT2SMoGt8csfAwY2w9PBkBwLmpvmWxZAR2Vg8UeJWkfRwP4TmEj8Ev9Heto3B11Fb5eFSs",
  "key1": "2c27BowBmto6a1jmbPCXfLwkrHRL9ufwE24fMgLswu77JscgouJ3H1vdiRaM1P4WjeSBtcDp1pFvRjNSMaozEcvJ",
  "key2": "7mm62q89XNZ4Fg4YyoaPja3syjJFzZTycaVXUBeomdLo663HRz33GCpPX2hzDdf7sZibQQqPEBVWEtmvDDBVK7E",
  "key3": "4u4brb3vZkTedXb5zSXhNwivEBDL3Czjg5BrZGnYEDLVPMLVbi1QRpG4VsNR7KnKmyeABQsdTqfcJETCPbvhSUar",
  "key4": "4dbiKRcfGfAVLxBr1AoZZDcpYa2HUk2Mxtn89Mfyy4JtTTsgQcbByFV8JCKG4Qh8amsnVR9VWkUFepsaSxzTwCFF",
  "key5": "rc54BuzPsTNQMqFjJowADxgHayHdwViXJ7iCUVP2LcmM3nqFoFznMxpBnN6eEYEShxDYspETHDoZd3p8yNbVaV3",
  "key6": "4dzdtive3Yk52HVrzb2gWrSS4FWBPbWaR4mYoUToXBrdMoU78cgTFShPXwrt8ehqbiR9pabmJ8dPGJAjRsZjsUPa",
  "key7": "5nR5NrHRpKFrhbr1JAqHtdf7m1DzcJPo7zMQbSAZnARRBVa2cjviqYcMjFXLxixAUcfm5vJLUx52vmHFVP7cGS6W",
  "key8": "57HLcsh6xjZNcP1ccUfBJo51j5XTb6yq3baVW5remcc5ZdjXbvc11yWriPrVuAuVHkkrApqjTf7BRDgAqfFN5buj",
  "key9": "2ysoQFvzTGfPtmEBtJRtaqkhRYsFbo245A4VuVrqhDXgLCBpsF2TTaUM9xrj8NMyDf6HkGLCHrbNkc4rApTEYtAn",
  "key10": "5nkD7MXWGuyySvG7yWxGkDFvbYJmWCPUQ9bAfJhrUmsuREysKC1ZgYWjQZR3aqs7jrYfjXcqgA9b6o7KdonDVh8d",
  "key11": "57qV3kopndZBvREepXGfQCW3gm3HiSoQCMTVwesSMfNUNjztqExVnX1dyT3D9WhxyA6HBHqqaHBCdjVNqgaXHo1U",
  "key12": "3ABTES6XhuBabERjPpqjZQykpbze5Skw4b3Q5x8qPsRuDEXkdL3C46W8BTbt1TpfZwBcVAwXn1oQSrPmkpwx6s7W",
  "key13": "3gJCcCjeunn4qVMiqKMG9sBwr5mzoFE1NZRhStiZ6FF5azhAqFKjJfQ2o8fSirFredZJBZtmfwMy6wZXHWxzBhNq",
  "key14": "2xU1hbr3yxWsW96aC77Agfxs7Q4RueVAyMFN8e2mV5ucPNuCuwMfeQr4ttH1iXwtzFSUCUBg8YyAKK36cgq1s3L3",
  "key15": "NpU6MRqBSTTTRuSTz7WnHB7ZAENpiiuQY7VDFqmBtzXbV61QoUJsLd5BqvXnTUmafNuzhBCWwSWmh8YiexMbKeP",
  "key16": "5TFSScPWhDqKc7CXqxfqXXqWYhTdmBLrYTLqKQcB8ygqJytBXHxf14gANo8mGiSkpNqMUATyJaEvDMZgnjHKEMWv",
  "key17": "5AeKqPrhSv6TBeZq9d7p1SYfWFciV8vdS9nkzP9F5BYxCUQPNf37CohzFN12cDqtCp6kbAjg8YwKxNdewTxK1GiX",
  "key18": "49SpLzRMQX1cKi62dbTgAvju8dTPDhhiWrDnpwUC5nE4F1xSHQpdFeMwrR3ThSXFQUV3LDYTgApXXGvCtVtkzzxe",
  "key19": "2D5iVH7da41b5xjdktKFSezU43w2Bihy31LiQdGJMPTW8fnXjSeEToMcoz1nF74u7BXW7V5KGYwUPL1wSmVqtWLg",
  "key20": "2fjwEapo5eZ2E8j4TmfzehnCa6WxmKdQzcHJmZn3VhP1SFqye27V5S3jWSyU5ctDrYyfd9Ar8C8AgmVneixZvrLm",
  "key21": "3L1TYAHfBBYbEjBVJE6GJcEeR9T8x3qZNQL1xM7w9XnDwGn9aNSoU4MBapCtMkDV1PnhhJuAz184MEZqDcFgzbh5",
  "key22": "3iY31TPueGaA9vxG8iQG6hXGEafZp9B4rTbAA71Jxuv51RWmoYLDvZ2wXjL3AnxfALowJJEmisDWEmWMa7QCbKxQ",
  "key23": "3ef3WTQhZT89qfdti86CSdWPEXh1vXyqX5YTdNktLAqmeYgAbYmc7epPjsEnJBnhafUGxA2HyptUJYfnYHAscqUY",
  "key24": "3ki2WEhkk2FWFmDCXdP6QoYr28bxspfAKy3GZsjXNJiUDjXYiWzP4HotE4sjjUPzJwsuV418m3rVzP7achRFixJ3",
  "key25": "2m2ZuwA7b4XVQnJyHVxPbpASee1FGsZA4rTSxWZTpWcZ6xa2erLyHe7mGR6KX3fCTGvXKCWX3633xFX8Zj9TQBDp",
  "key26": "2YQFnYk1B9WcZG2XT4qk7S5G6dx2sSMxfLFmGjhFjAWSfmVCmXL16wsGFhghekmdHAFQZfG3XxBmMbs3o4DCCUKa",
  "key27": "2cZnjWqGGEs6D2VNidNJUfmFCSMFpCNSZmsNnddPyKHzeKw37zBANgwtR47LZsnLKD3AtSxach48W6TzEL55JRoX",
  "key28": "44rwg4doC9mLPUqopH3Ea8z7m3oKnc2Lq3cY5Ar9N85AJGzJfewSM98UyeaCaHK4eY4jNdt3t6VzaxwMkvmt9nc6",
  "key29": "3K7uxAXokeDSDrWuj5h5BBYtiMhzCifSKpB1xJ7Cvdi3oubxGsenC3HqE8bqzbdV4GoKG2u1MkDCr3debvg3xLFW",
  "key30": "2ms5VXE6RAxBJNvHpvhUcgiVBtDudRVjxjCHYbuQkEaYdJWzQDAFi48VcWTJSCDx4RS5meS1QkSY2me2ZZwmU18e",
  "key31": "4qfm62Wy8wC2CZNnRBf6dqD9EhMmSfNyYJf5MBrtCKSkrengoBATScn8rma7Y3D3wXqgPC3WanghcTAKhjAhZmtq",
  "key32": "3cUCReCzqnUmKwpHP9diUGNnbbQJiGLqxugJonYzvMTeh3Lpc8wDoGcWAWjxLzzUv78MezXheBnmDK2VouL8hBJ6",
  "key33": "5k3zjFHLnneLkzCvD4YAaTUqj2a2a1o1NjRzTy7MkYqJuJabWf5cHdzsjUJVfLr1UEuF2HjMpy1SCgnq7EQVuNRT",
  "key34": "3Vohy8qsYoAmZMm9yyZcVvrxVYAp46VpERUpctwYY5TcuYjVbvfuLTieXTZ9UHEffykPii6s5XsuvWyk22nPvjMw"
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
