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
    "31DTdcttCrAEEQ7u5N2cnBmEpvHK98zmjUKz2ucrJZwwUmmcptjXYvTYZk5uV4KB8k2C2AvL4SN66wuAeQJSdTb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BCTji6fRckt6h1pyTf7fFVSUmVewoCDZ63r1YV9UqfdnZjk3ghzykFnJ1xrDfyYZ3LtVCs6vuL2UgnT9xiJLBfH",
  "key1": "3V9rFhy26XArYDX99nUZ1eXFjqimyn6SzJVAfos5mCiMY3bWREfa4KgTkASRDaFXe2WQmwQczNBRjwqXJbXkNj2R",
  "key2": "4owZLfabwNhbR67oDsZ3SongaBz84uVmvWSLkihzLchEvo8csi4krqqpQXKCzTVyqAkMTRKuRUNgMitk8RW4a6VR",
  "key3": "365HVZw56592xUw5pagofz3EBaWFcd4bo4BYDAYHdfpK7v6HLDdNSfeHiPKWkJKkyFoGpjD2wQ1hjZHEqf3XPnuQ",
  "key4": "25sLNKG6v7EmCfYh9BJzBBPdcmxueweV94JoLwUy6MLEzSzrwpGynhe4njN9WEGx239AR3p85pLzevF9Yv1zNhEN",
  "key5": "5CToBEVRavG4B5tkagFmpppvyHDMC1LLqaQqDzEZdrLabqdXJjUfj4FGHChLkheokZrKK5KQah4KE9rF1LqkkrVU",
  "key6": "xAnjM47RAMamdNsqTiPJUMDfEYD5EJCCJGNZeZ8uwxAAqXdRHcgsbJC7pRzg1b5Muyib7MsG3CAyiqTjgCprW9D",
  "key7": "3PRNA62uEPF8iBSnMVyLHQ2cPwDX8YmN8FNXgWqqZUrZ5wrtVARE5Fndv7HdLJdBqZcsHurdRwXCaWETShsaLSun",
  "key8": "2vvSKhPe25qBe62WnA4FE8iwyXjrs1BHnM49GqsphMFMEbrYACqDbMkoYTszyU2tpjL1bYq46Sp94ySj2ZHLBVz",
  "key9": "4rv8XSnJtkLLBfS2UWFdF3my7cBeQ4XxB8oSf1WV1oi3dgmCaKPCTsM1npqQKp5dpAQqzoGQqFwktPVn61cUEPGD",
  "key10": "4kVE47TLk32BJkH1oDFbzG7mXX4nnqwKtDNFCpVh95YVuyVhYFRKzHDUtXgdkMBtYyek2eyfiyV9GtZZADT7XQR3",
  "key11": "4QVwXusMoqHXR6qCTmzWuaJeCuSKsusWxAMzYF2fws9jBFrVEdxi2wGzDG9seQdUwReqM4Qs5VTmxWAqMjAeucXq",
  "key12": "3rm2g3xEHW9Ga6RaqL2AEu1ZtfNTAnoFjASuBR5EFbbHDNrY8A6gybiQs26H9ms4DXYRzHyD83eCurgBa4Hzosdm",
  "key13": "3WNNPeJNXzB3kqvqvNRgeD2sUo9qLkZPVtxvG5Kfa3iukXPZS93eW4fmEYPT2sssWLXmnooR7xd6w4yJJUiDDorV",
  "key14": "2H1MNro7uBAg8rTmRRzAKg51YPXbKqvYQeLEX64NAVRFNg3RfKkjvMBM8kn11Zy5MNnYbyhUZUW14YZ7m3yzjAS3",
  "key15": "45WxuQVGP3Mt2AKca1rAZLCCGWtTziqnbUK6yUWFe7hCyQ36ws9p7PfEoHAv8if5V3Xi6mPwWCYPYWmXQhUhpv3P",
  "key16": "3qA2XWGAHod2DNesGWaKkBetDRm2EKZUXPpgGoCiueZRCAbqhjHxfHHrQMrURdHzP2erfhXGfhyAVykRmMbYYamM",
  "key17": "21x7XESuAgU5PACAM2esVuPE9Dk2UoH9gP1aBXzVrjw2uVv7fw3m6HekuJsQqMrStbcxkGRTk9W1S89djStiteD7",
  "key18": "MWgvqUBDJzo8bDUpnak8Ty4ycEnomk1HLcdGWWbt71jVzFwChCh43krJRETMw9rkbA9wThyR89pJJAdrQGHqEgZ",
  "key19": "4Yo6NpPADHiKVpmnvezLH7pUicPmfW9QXJg7rikkVw5XcXVAGbZa469urikJQQHvixjqtN51nLVsP41G5EJyAwr",
  "key20": "eUmdSitiCsXPNCwUyiJRDzxVhRdL4pGbvkkDCiEfnozS3Szw7BhVUkVjjk9zKaE1QuLaYFmGjxYaXSAMcpPf2qN",
  "key21": "2BviYicmkJLQQpbMhVhvCr6iR2nvF7h1X5R2dCpp12rX2PWNfrVQCH55EGjVgTwcZdv5PXw5xD7bwcGikcWWHvnP",
  "key22": "5e7eB3DwLCXMRk8md1huHnGiRS4GzGRB2QaZbUCBWZUUu2t4SQ9PUFizywK53mnAMGVF72y1SbX8m8jvjQvZkVZH",
  "key23": "5UyqFDiBZ9U9rjn4WZbbsihz3WZHhyq6d4tXroYc9C2cWUg97JzCi9Gwagd4rN6SQEoKMkowmgnrePBzVQQuQiko",
  "key24": "5aEbDPuynP1K8MLAxdPvGsnB7AG5u1MQK8Xnxp37qmuQHUBF8dMSFXSa4N1o9aAW1M3CfAkeZthZBwoMRss677Qg",
  "key25": "5WnGhDCR1AmnNxEDXTp7xG47XYx1MJ59kvDaVNRQXFmDq17zaJKWZuDRWyNEbz6Ba7MoAupXnTp9oVBfqxJ4BBW6",
  "key26": "mMsQowT2b3yAcycx1x3n7sXucpiRHnCsei9nnpHjwQAHLx7UdStbN7XdEdJ2RrY4AFcTroeHx75q4q4t8enNecj",
  "key27": "4jNerNpAtAxVgLetf9wKYkcLxh3DMS4d4QDGvjoETH6SXQ7iRePp8EN2giPUXuu5F84X22zgwndj1QCqshbpn6Tt",
  "key28": "5vX42Ep8fWhxbE251NxBfk6e8oVG8ro9i8PnsqQBXEFGR4zPpxk7oxfLpqhaqfKVuTN1bj3mCpzhWx4w5GEC5PhX",
  "key29": "4RknUE7ChaQjh2Y3qbKLnnPaa1694MxFiJ16ETGp1AK497SeU9eqJRzabmZrbw8A9HfuMpRqPYfDFGpnbDV6AJ3D",
  "key30": "2yTc6z4t6YJvv695SpNL2SnuxW6uyuZ8Ds8piwN7DC5yKRTLDCkfeRF258DTzKnN9vShSBHYgvg3cCHAtFMS2KEP",
  "key31": "anNQuEGQQq9GnWbVgx3bKxdUj95qt8Pgnvxy76P63d9yymbzTLyHSvwZvzy9oLeiLS18BzJhjxXUtSeugSBdzKw",
  "key32": "4d1Ptfv3Dbw2WmQ79tkFNdoc8H4jQhNkBz3uVuKEQy7zCZhmYQ4ueYsHXr8bTm5QArjaaA5z7f78qijiwMYbcY6h",
  "key33": "UZW5SbAXzBjfS5zSufBUEXbZNPcuyZyTANyPuJ8daSseKcxD5EbAuGy55MEV7vVDybM6X9WUQocXvYoVv8gKRPf",
  "key34": "2eJvkt3yK9Lxn4vmZrePjZ2RzAETLiwkbRYw6v8DZAM7LDJwKxo8FYQi6wkhknNzxY6aoh3zNNAUaiVCWQDG56bH"
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
