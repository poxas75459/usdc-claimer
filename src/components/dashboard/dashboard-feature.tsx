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
    "2gNmAZ9frvo3HVB8DHcGjdFZLqp7zogG2Muuiwg1cqwLFvg12bMG1crRceHaZJUNDRfmYqLVqLPsp8xMxij5DaBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nsQvGsffnr79EJt6gbd4RUC7wLVYyH4ZeukQdzMj2V1cgksiw4dappda7S11JZXauxPj2gTR28LjY8ebwwWdEnf",
  "key1": "5SxBSeGXjAA24c6P2SHePRFhW14TXJb2B6WcUQpPy2ZKSUxLppydzRRMfdtYHAwmASRQU2duoHa7tavRQ4CxGFmf",
  "key2": "3FvfJRT1nafiCXHpuhDZG4er2Ra5VF9DyeBGaojVKDuXmBsUKVRjxph5w9QjWcyunuAs8fsGeC7CH6ZXxs3e6WFZ",
  "key3": "3gJcXffB5z5SJmUSpymjsQxCxVvq5iHHr2DsLxcvFeNCGmmtJPRmBqrxQ9EybFrZ9dQWcCDbfohZocm8Z72xFBrF",
  "key4": "5imUU4CycXs5TnqwwTfrTaiett9B5pm3tv9VFxoFFboEUWJjc4CU4jizdHZ85kgAKMkUupuLvBidxK6C9LD2U2qA",
  "key5": "4qNNP6gSNugfVAFysZZ5XwUF1rVcb7hFRBubjLyPKERRqX7sRwE8yGa2waMz1Hrwob6zARC6qpiAMLkndMYcGH4Q",
  "key6": "YCVS1DFyKJ1JnQWqpudni1J3kmxB744Je8cvjdjCXyJxyBQQNXVAN7xYgW1mM5Tfwtp4z4Kj9Ex7yD2TfF5QrNs",
  "key7": "huKuV7PfUHoQR55cjUxVu2K3Hi2JvJjujj4GT8EfB9P3XeANattzdszgCRR6u3AzEGgJTpP9SCxDVW4uZAT1tdQ",
  "key8": "5aVjmuyVSUWRwypvi76GY4M4wetxnisaQkJXathCBiTmXoGvJNynjs2YBEY5YfyeWFM41aocxfVosRg1gjPrEejM",
  "key9": "5pH3357MwZkweH8pacozcpwQjHDfj6vd7Kdza4j5y99ihXGLMQ16dt9zzyGJoLNb3bnt6fxTd5Exov7Yk7utY1Gq",
  "key10": "387xSczKPFqR1ESV7wQgESeqpDaTY2WebajGr7ByreZGB4AZst3cXxm9nTLEUhfciw7K1KCsgLKTF9Dm6M8kvq85",
  "key11": "4yKH9cMNjygtLSgC6b51G9xZMVGyvzNRXE9jgtDY3a3neCyuui1wtv59uyTFkE6hXRBkadLXqYeuvrgUUCdMPFqr",
  "key12": "3K3dwh3Y9kNv4JRvPkPN8Xteoac1MHjDCXCThQKJrvefgtJ6pGaQtg5X5fhX5YD49NR4pNHCXVoQEzNH3FoS4REG",
  "key13": "3eRddTcYvVC8jCG8yjRCWvtqeCW2qBvGQHgLZ7dzRTwN83bhJsLgn8PJTeeN7dPMur2LgeyhEUPc7tPG6uGREyp1",
  "key14": "4jsjdHuDC2pvzQ3LWFEsTs6bqNZn8HtdPGfH9mKousRhgQpnoYD1oLCmsuvWDsoMDGDRvB74Kj6NLv7wC74muiFM",
  "key15": "2nPHXX5Pfa4rZVCE2dqt9vNSALVx9u4nLz7DKVa9VfHNUN6s2GyZM5LmvqBiEdZNTTWfWpvZQdbFDdKhQWpXF7LL",
  "key16": "5uHnyjxeagb8K2K2G5S3hQEXfC8yNM7YMXD9jVbsiseJis1p4LxsnzvZnCvUZLJDzsZK2qRMcRyWEqB94hYSR99w",
  "key17": "3reMTgS1Bkz7HdsrHvDXxxSkRJtve8o6XvikrQ8QMFEQ5tDiCJVYHUsGCYKbBPXP8Bd7ah6vY8iEykHhfHLyYLZE",
  "key18": "4QzvSR9H7ZL6he219VUV7FVS7gmbW786gBowtEjhwiNp2RaY8vwZHQ1mYQ9Ns4xZuk2wKeQekH9GtgcqVhWMLK9r",
  "key19": "5ZwChsomi7rn84bS1Uu59YoCYyf3wXG22PD9V5eoeoP5NLCyKqGKYo9MTumPwJXF8VGXfUaVKzcFEmQnmPa6CEdx",
  "key20": "3wodrLWkskugPoBvgzobvwi3Pdt4xxtx6eP6vB2dsn9zgmAXCygp44AxassjJUFzfKywUuSjrCsSDnvfxcWr4BPV",
  "key21": "BriUZdAmX5owfaBV1qVsHNrcjf9JubmrCy8GPgQAkR88XwxAd2zpAgCQtC7yN8sJipCcot9UGUdfGTWGndYs9QU",
  "key22": "3UEh7dxuBGYuS2Kc2GjWPRzivYQXB3A63ojxgasyHC6Ajj3WHyk1wtpmEQ1uyxahcnB1by4bQwXhAzjSRETrpyj5",
  "key23": "3KP8Dk2uADFJBVDmdgz18KdqCd7G3b5euQ1Koc9Cu67B7v9Jp3QRKUses8NMTieqaD7mbYpJRZeK89cWFDroXMgx",
  "key24": "3L3Vv5A8risXSdorECwrys22A3fB7jTDCeye8dQ6iWA8Nhsexvoz2qfPZXkEwc6EpQfH9277qgBfUn28QS4BpbML",
  "key25": "2vQen6j7zLEqN9wnVYsuF3rq1CMFcJ1o3ruvULLbzSsTHq2FjjdQeB5ugDeUrZYC6wqPzotr9P1CPkf1Netd4mQE",
  "key26": "2CpauUgfi3H554N11sNkvHsziGxoKxMEPcPPLd9v9eDCHd6SufAo7CC2FqgaH43M9wHKGNzvsUGU4gGXbbM7PCM6",
  "key27": "23gT3DKDPwr4sSeNv7U5ZWZi4VS5EN9t8gWJxVKen6pfTqYeQk4rtQu4HMPETmbS2i8Fk5CVp4zWn8WeL2CCJr2F",
  "key28": "2QTKwV7KwbowjwLAQZMsCi4rkdhZBLefwoftPEKf7A7LDDSSyX2HEebTuNKCHqFTgpdE85oo1vY52RaJbPgyfPS4",
  "key29": "5tifhiGDeesnW6G2CVhG8eCgXbQVnMny4CtGAnhaHaYLXysGF5tBmjSckJxXopdZ4t8yvxZhqcMqSU2q4UHu3B6R",
  "key30": "4mnNcSUx3BLccKFju75f6zUDb7bftdtAT7t2ok4rbGmDozXamwfydjgHn743sgJLbfayZ3peZpQuK5UjnqDZpMzb",
  "key31": "59frFCTBdicw2x1fUDqiD8dxb4QNmGtriWMabppb2nwcC1PMSW1nvFj1Ffsi922suFdWFf6vP5wMVmTfQS9Sqou",
  "key32": "5beYkdmBHGgyX6prqwpapzmtLfi9W2Ygr5ATn3FVLMxFA8EVv8iGq7w3cXzJJv6hktaGR5LGfEXpLxJ5QZDut5nm"
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
