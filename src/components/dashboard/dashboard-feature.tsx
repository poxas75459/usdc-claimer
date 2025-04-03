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
    "25b8kNb1ZAyDVDXNHjzZ3GbYFuzwijV59tx5Tz5KX1WS3VNLULtMkbDLnXX3zhCJnPrfWMLGybRDPeQxJ5ibbdmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j2UDxfkYyShZRQzatgQ43oRVJpUCPnEm4MZa6sgCpzD97u68Egu9BSxnQZ1V1kVZ9xYo22isNFesFpvamqEEYMJ",
  "key1": "2ZgCaiq3iSUPZkm1eaMfLyf1XkzSgg8QJzHyopny6BYoXacK46L9Y234qUAXZj4Ci5W4YgFJ8fma791Qq2gKDY5E",
  "key2": "GptZxMTVTh7dZ4ahEnKM8BH3ynNiAnDfaoQw1Uy5BaLZHWuVP14Tfjoo8JN5NrMt7z4Szb2GYSiRyGaiUTZ5fkz",
  "key3": "3c7EEKaZs8PD1jahPfywuuPmEQ583UgRd5ZRxAKMBs6YDKR5sunxBhyV7Nurk6bSFD36DtWHL1Sp65V8f6YKBeVQ",
  "key4": "3CuW8vgKhzgmE1k12J87E6yrgshZjwcjRCLDtv7HxMs1DZTN2c8RhMuA6FjKf7fXFwfgB4PL9SoYkvgPP58tyTST",
  "key5": "5FDbAToee3HZqQSQfGFoWtUZqDxXofdoWTANe6KBZcBZcjhqvRo9LkTBCLn3Zvk5Z1kmdYrRrHaVzVkKHwSWgKY6",
  "key6": "AcxzCvwWats9tizSWAcoRDbqh2xDRo4QSGAj9pvPkiq65jmqePs1rdQUDVqHjjYczacetE4amgXBXuXMcpyjY8W",
  "key7": "3WBnGZVchsExLV18Kceizx5uTaoBEaM499d78ikCixJt9Fav7tRBFq3e6FvgYjVdjLLgB9NXHWRA6ZJ8cPUJcUWY",
  "key8": "2S4hcJaRBmGxeoUgWf1HB2FSH8NoMQkeyhvHV9KokKTnhE6CnX389Dj4bQch62VpuuDd1J19yEJKf31Dee1y3e3A",
  "key9": "c9iqKRd6toV4JP49HrY3koSYxgd5PVjxBxtaUce7b9tuNX5pN4xTWd8cVkNZ5BArnifUQmx4FPfpTVUbVUzZPpR",
  "key10": "4Bwxna3bnRGurSD11UYCfdgAQVkyUagepGGSdG4hSHWaDqSY5AjEtTavQ8DurqXZzuvkuYTtmEfDydNdXPPtW1Tk",
  "key11": "5srPZPwjampu15Bqwgq53yLyWdhJBx52HbNYTjaN9QLYhetiAZTtfKeBXpj9WHb6WfEm5Nh121YtKSGheHFeXsrq",
  "key12": "GLV2Ze9Au3Kv8StryVmEUAztGs8KKCjt1kzTSASy3NuXsYcJA5xrAtWLvPxzuKsKJzbUvijmLerU8tCPDXXBXN1",
  "key13": "5Hj98ycMv77VxNNbXeen6mMLxYLAYzde1js9QLr46aVwGtZN993efBHkmopZTzG7jxQva8dfDqPtZNuRtXrR7qKw",
  "key14": "2qr7jn5Tu3pASWcRqNJESox4tURf6ZU8E34Kxoo4uzSJqeryP2Dman1k729bDxwz1UaPGrYNEpLCZfDMt7bchZci",
  "key15": "Rt17NBpVtXQJEj6VARAdNBAoWQ1mEbmMAeY8CtUjYoVMngPPix6xJRptL7ukZPyBUggWCCwZ669XwfMDumvTPUU",
  "key16": "ch1rHZpiEoRir49GefUANe6yDEjTXwh9ntD3kEvtywWsoLU1mqgerJ9eH4WMdxwMHmsWSpFonJ6Nuq2LqPkd6cD",
  "key17": "2KYgT5h57FBfbgTGf7u9vC9xrN8ByteCgog7TeWYbk5hCPLNcd5HwBaMVoKyuKob9Ea7xcoNhvFgjNadqkX51rpz",
  "key18": "4Fh1WksZAeok6g7kFEZ9KZBv271mKEfwYwCXRYzXv1yGkf9SMRAEiG3WhyP7U75V16PqCp5wNUewqMSvEyoEANQ1",
  "key19": "VBrxFvKWnincHkE41M2Mti62HrL2RUVsxhkL6Vt5A7Quovt8R9wAUZRZtLk72raJugk1E3jeHn4wa9voskqv7XU",
  "key20": "5urtEut4P3ZPjBAb7AHCM57XRCtU4FrTH36fZSYtqEvdpTqAV2nQ23A8yMJBKYxF83X4NoATwCweZQtFbNzJ5Xbx",
  "key21": "2hJfFp8VPwusX6qANZJjaxtepTfTzyaiAuMWYqvbzpYboe9o9QJEaXg6zFD1Ew62xbpUcUk7sTiwRYoGNPxkSX9q",
  "key22": "5w5a4GL9dRXw7QgPnKVfex8LhkkzZwd8Vz8bJXCdjLbLtBvj2Lf3QCHi1Ar4yvATX7gd3vBo6UKp2V7PdT1j8KHM",
  "key23": "5qE5vGHtVzEfFpTRN5Xd9jzQLXbgN2th97LWTJg83EXsxotwvg25EhXbqM7dWUJ79gQaSHmEaYTp7rAzpd1x74FP",
  "key24": "sZPuJVC46Ex5jMbZhNY8LPEeJFYZgC1hWk1Uq24eCoy6taNY6q9aLrat5GTUSuDLYvvR53Quy6BLg6Zn2SsAc4p",
  "key25": "4ugBbU3xLyFTBhvVNdh3GTMoX72Ezg1N8Ge5bMRK4YrS1qat9dQyg7jEfSQRVsRjwLqPVzbPTFc3UE2b2np9oYx7",
  "key26": "37mjNjoqvSd4JVEWYCwooMGDhSR9evHW581s6YgnBWefLxC1MuRwX9qkuSNUUSry18v4Tx2r6qQjZ1T3XaKb6uts",
  "key27": "41GeW7WVQHJ7Ur17nQy71acCfotfB4Ff5Pp7rvwoV91BEKbe2j6XJCPG7i94ZRVc3bSJoPnJ5JXdYTWSeeVtfdNE",
  "key28": "3PG53MU1uPFani4qc611CrMu1eHWaz9ifQWK7LdfGYXiY5dvrCqBiXekEpx6EJZyPmEwPo6ZMoxqA8tc2qzxE8Hn",
  "key29": "EJzdE6LHTsH2Nc6X3MNABCrTtqvk8Ve93FbV5JwUJYAKVFUWL12ZYBDbs5LEZnNXeB3cnqTs7YeRhJFzDgdv4sz",
  "key30": "4kJiDeSnJN278vCWzFkxkLaMeSbNRHw2njdrttGakZ7BSvPkbEbDvVgLohNXRHwxmvzctQG2THZiZRafUuNmZrqD",
  "key31": "3Gs3YTLeszPDBTrApPsd6X7AAVponMKik47WoShU8iYpyUSDHmqyt1qECL6knR4vAePoqSig9iLBtsG78XbijnzQ",
  "key32": "2WPz71dqdm1jRKDbWzhnvTfuJS8usyiREZdpGVHwm296CyLf8DMvNBgYvtcnqjgmck3BApGF3TzaKpYE9Locuq7y",
  "key33": "5A13vTWu9nbGiwNKDNA2fbQdQ7N75hb5kNXGBfYx5bnk4bhhtdjwAW93j8uwaeP4pUcUgRaFUWbdip9BU1PBf2JM",
  "key34": "3GraAXiE17Hb1T3n1D7g7N3bvfZb8UFV74mvchwvXXpgbAzpD4pnYt2EL2ynbxbB2hYYCimN7BKibDS6Rqfn8owL",
  "key35": "4nNYMq1DDy45J4QwBXe8Ri4zhTp8WsMKi8A35L8tez2m33JtBW4EKzLJW2XNLmUvY5nhSivyvc9iPkoLUnGN7zqm",
  "key36": "3jVgTRP7LpPeqgoeBkBpoPiWctmFBS8bPcAH1NzD8eF61tuH7cTcXwqWSuqbsEfrZTHL9SRgFgfE78i61Qdbdfwf",
  "key37": "2hbi4Au1K36QudTRMQVcKRTSpoxkvKFaSiCSG5op5Nw3NvXyoF9jsDUAMML7JX3fNDCytxSA7DiUmNkQuuunR4Md",
  "key38": "dzF98N2o9KNvfs3gTBycmbWMMuQ2pBNgs9jmB7GukCFmtjDx7Ht8XrKuH5JsH8pxzyQEeM6bATCPMhLRBLp4A8n",
  "key39": "5NszG5Ws1nFbBmgikcK4UU7sJYRkQxnUD6U9vdARpEvE2sUoLmBGXuRNiEwHbBB7KhKjw3agM8zJKafVxwJMrtEr",
  "key40": "5UFV2dPmrkKR8CXUmuj5zRZyBB57DaEcLZtb6dSwJEZ1EmJ1sXk4tB3hufTJV7UFGSmBc3EuMrY2EPqxZbWKNm6Z"
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
