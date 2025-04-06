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
    "2BZtUnnTuU1Eq3E9gEr9jeD4akYk7bpBVcGggSxXW6JQjAFwHH85h9vzTkY5Y1yE9831v4jiVB8Bb9r91786iK5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pVLVATDTD1siqEs5PrWZvkEJv9cwWbPaasGTtboessc3wmSfCMwGtkauTeZokzfgwZeJ1SJ4ERuChsZ2UsrHNax",
  "key1": "4mFJq4WKNHuH5KoRygBNZHLKJ9nY9QbottKjTbp9R1o4Cn7hRKKax6gjY1gSEcUbmYv4tcZVnMyFEUZQ86qzmT73",
  "key2": "26c3c1MhZk1HtdzDwNwztgsdJmvq5HHiwGAW6xeGc3gKTN2Azd8oh6f1eWoKVddSFL2HjUCAAcY78SkopN1gWvkk",
  "key3": "4oTaazRkWPcvd1dzZPmRJbazEiDDp3tcKirGw2nyCKkzeKhnWT6479tHXGF4gjvhS5ti8JekrUC3CMadohewBmyz",
  "key4": "2QVjmoB9pWBUaLYPyriPHtrjrAYZbhjwiZ7kGys3CzL6yR5QZy62ztwAyf9fVb3RecuArFAdJ8rwsWLyE6S1cR3x",
  "key5": "5ec9fjAqg2NweVBGjQaiWayfUPC7VF1bR8JifHuoHmijMBB7qutY3y3Qjxt9EnTAwNrusBRbHJiSsWN38BSgh9F6",
  "key6": "kUiKruksh8Z2oY3fdyJCF3A5k6zstLD9oa2oJ9XyVSoYoUeiT9poSSv3KUxu4kVXfUrFMxBKBWbx9yQ2sfS4A4y",
  "key7": "Gdxv5squxezchvx7N4pdBkPh14yyxfSvTd9983A8HCLXs4caCKnWGzKJtqztPiRa2BZBqvxd6oWsACWGkNsxRzH",
  "key8": "CGL5aLugczVyZXYab2wFmHkdN6dFjtXaXNoURVY7CDWRBPwbrt7qqEddSxR2xSQa2jp8XCUovLcyvgV841vGWm1",
  "key9": "2Hjx35KA1vRQ8ETp5tc6sFRtLU756JacXNwmxUAZ4EYgaDfTdMt1CqNJkrQTBpduUrkTt8cjrh6aJpu5vJp4yQTr",
  "key10": "5nEprkBN8pLrfEUV8NTW8p31ypw6g5pLwt2fvcx47YfHMZWhvHDjJ76uHG541hStbZuKMatf4vCZsg2EHsfSihnW",
  "key11": "4f3Xa1t2W5hFNjXXvVgzcrkWBPwv9e1zLhM1FagEvF9vBmjRJtWQ4tec9KFV6j4dzQXBTfuGJxUxgHjSU6MHs813",
  "key12": "2u7VDFdB54avhaDSvpMCTRvVpthLt7RndqnbwJvd3zpS2ZGo2LVQkjCxUxmGv6dRzpFcJ3XtRZLrc1WKQ6JeXbzz",
  "key13": "WdMacSTfPj8QChfejGk9L12cXu3L2CYWXQoRot45UaH78euyy4jrnxP6YdWGq79GtymzmFThDznM1nnz73qS9NU",
  "key14": "5qAcQTf43KdWPmMQtgnMuhNtdMvihDG7gmf8dRtzHEb1KoJspN5WzgyR7Woax5j6LyNCGWqWeE45Ghy567NUnTGf",
  "key15": "asDipowohwmGWydLeXjfQvm5DamBVL7EYhCkd36q1NEg1kocc26RfvKx43PbfEosSmu3fEkUdiH8tHUVeTv29MP",
  "key16": "3HqyfPsjpMsJxJKeTzDiK6zeUX4emCfgykbYeDfmEW53qNgJmeS5L84XBsKjWB5Av3RZgwAiPLLY1QLi43jNbBPF",
  "key17": "4kVAZsoSdJ7UzcksBYGteMxKxrwfDxGzAAgj1Js18pmcBxS8PjjPPRWQvUgeGTmbcLwwnvVszjGb7jjtojMryA1g",
  "key18": "3snkzVXxDi7wpMNXxWd9ZANgG1tKVLhUWh1msezguHjHSuwEEQNCJnVP2PoMVKRqhLK242pBXAmmWuyZJcePTXq6",
  "key19": "4oWo91uJyP9pCqywCeU6THMfMQ9vNNNWqQPB15hQ38SUWyZaX8KuqhDYgP9DexT8Q4nRpaPHaavMK4xpAN8F1a7b",
  "key20": "uXA2dv9H3zCifiQLxAyFgz6J1mZQqBqQUKUCGKBHFtLz8tN5CgJLQGUk3VscA2tbfueztFkexfgwZhz98ggUMPq",
  "key21": "2wDgoMUeZcEsPDM5JrGWAEhv263DMNkfUN9QzdYQm8qU4SqMqaajovtvk9ts1U4vAPhpPYgKpuk6nWsEXXd3CoyY",
  "key22": "3rgBphmqavyTMn1R9ZibKASDufwd1h47GbyQN4b6ZQPE79xZKamJ9Dxex5eEcQPBH2Dm1aXPHtWCBo9i52G4MEKg",
  "key23": "2xvhcgkDRYbsMgx4N7vCugjBQk25ezqNsGqkkXUurRYghYM5tkkGg3mfWUJbgndT7z15Quo7yzbJSYs75qHba7rB",
  "key24": "2MxZHArr8oBc1AhtSWYDXsY2NGLSddPNoR4W4yZHiU2ux2H44BoYYVnDAKvaUJ3TW4BLj2sDL3PvYDsCwdYtokKT",
  "key25": "4aJoZy7mJaYMfv23rffFzKBsL31Vk29LmNR2UvdnQuJmFyT5BPTCEapKfczBoGMgL9ECGJdvQnndXvjZVednFtxS",
  "key26": "48wzmVcchz2ZUqcKPd9JR64NyAv7i9GqGkVnSssgKdy4xvXJcbxu6TnsrFyxiFMWQ5rHEKSPZPsQTPprXNrJzaML",
  "key27": "4zD6NM3NU1XNHgQzwg9EQCuBtLt8nf62gof4WyQ54pGAhM83BV6tkZ6VZdX5BPqYyNzWvB6ayG4w3sgzV9WNRcfu",
  "key28": "5FTp9FrXCm2M6MuAM1FUrZiPvSV3cFu2NxQL5ona1uXoYzX1bNm3p3g16YN3ztv4s83z9WHcEZMmCLfPgFEnRsgi"
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
