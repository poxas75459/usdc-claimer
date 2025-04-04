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
    "2Z7vLWfdATpSRWuMBXAaVR7sgrVG2AN6ye8fcZDLetqc8e9BhM4RnsvvJPuRReugtbbCXNZ3ic2pfx5kesYSH48e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YsjhkE7EzLoU4F54P1VG4pZXF5UPiVKNGNotKvA5CpeaX92bbm3zarQFcLyBHJLxh2oLgXBk3fWmZy8QjLs1sbB",
  "key1": "4pdyyurCFKAfd4W7uM9SfAkmgbcWLXDBShXHa3XaVYhnGzZvfa2D7vxvV3xNQkpfkREbN9RPZaioBbbCHnEqzKhM",
  "key2": "BgQviNy9ecPG14a8AtwfGCnCcHAhQws5BftBVfggtSRjYXar8nnp1dpF1JrMLmwSAi4yzzpN5Nv2FUZL37zfyjC",
  "key3": "2EVQkMAmjUNhjLxfwjaebZGqdUNW2fHw1a8bKsTV3rsCng36cFUPEEwhKiVraPwdgBjzxT4KW8nTZTQLcPHrn6Bc",
  "key4": "3hTGsUBq5ZENcYGPcTXeSRFhkJ2VFznJ2UYCotWA6mQJ192jMiEVsT4KVwJrpa6AQAaQU7BMkE2W8KvatZDs8gX2",
  "key5": "TNaPtNBsCL8QcCMFAFhzi56TuWFMmmomdZf4A62vEGW5i1R1j5DtmEPy22uzEbXdMa3KXHX473id75989XNVQ9Z",
  "key6": "4ySubVRNyM6NDQEnUn8buKg3GC8WF6fjBarL41C4r7qhy2TPM9Vgxxc4fDSdukLLDZ5njq2BCVAoxHP58bHQZnSa",
  "key7": "5hFCnTjuJeBXhFK4Uqw2X4BFguRsmxtktdSUPKzFbMqPpCFZMj4tKHnzMbQbG4524rJT7c48tDYvCmdesynTt1KL",
  "key8": "3DVuBt3GgGcq4KKvSFCS24WWC5sML1qSFT1YVHfX7wtEpz3qh6fbwDYcx3bXVUgYBW962HH23ZcazevuG8x8AXyT",
  "key9": "2BZopMpJCgFgb67oqnKjXdbA4hhuXh8TTgSyuTtCWUGjxLZutJFGjsrfG7CawzHCXih9GjthEzGyEz2PeKFep1ti",
  "key10": "3vDhUhVirzPwMwXHEpqb6ScusNC52Nfx8wpi4ToQqfJccesoZTCXC7S6hDuU6DWnDheWgbzsThNhKZWbhop72Tz5",
  "key11": "4vq3PN8BwcKMVeJDLtNf2MzBbMTX6eC7WonPTLQD9jw1p3ihTvWXzwMocGwkG8y3wVjGaEobn3L62G7VVQ4nzto7",
  "key12": "5ugkgYCdscdqRSQdHBHYasorMKQCKs79WdRGpaJNiJ6oHDBV6JK3PWHXapBXrYUDowgAoyGkjP2YcoNwatTQjW8h",
  "key13": "2MyvAb5521Ptq5qQoPdH39N3fnhrGYaXXnY221EnbhmkYka6nzk3ujpTBECUxSKZQsBQCDSx63qAZmJcLpSc96Rg",
  "key14": "4Nt1UGCFMsneHyyLwsg5YFzC9fsj1P8FrXzzxyiGRmoRxgEM1U6rhHcVuZJ9TmPCS9sELoCb8t3bRdduPnZKs3Bu",
  "key15": "4oaXt7ZRiCXYY2M9D621Z56mEt9sAm3cYLDwQM9kXkJDSLN8HqtyTFAg1X71xLQL46AYGCHsQcHiYi8y6fQ7ntXp",
  "key16": "4Li4Mj8iivmcgLqRS5USn3dUbwCveqW8iJZDVHY7nKx5PKH8h42DeudtyLskSJeMnTj4j25jCGVKnnNtWEWSjQrX",
  "key17": "RSiCdeabqMmr3hLbmcg8rLFcY1DkCdZM85bHhi54PhK8zuKceMmuyE6y96JmysyjjHD5ttR5UKqPqkshUhyUTWv",
  "key18": "GrDw69Q8oHELQNHw4HwNucyfJvu4uTWNsx3VHkHqv4x3ythJmujZvZULd7XoPsUb4mHFFGuWAm8yftNdkcUe3TN",
  "key19": "5GmVAKYQuckVQJ7kbBV1FnfZMoqWzWCUkfAj3f5xhbGV8wbMPM8Dbgg2dTvEmHEJjE2S3CGvpftPqMFVtJaRyDT4",
  "key20": "5mnSxLuPbXDf7qA4pk34KnZKAz3rWA8kfiWpHjPfS3xktZ4k3rcDdT2ebyWWHhrYuDDkeTYk8UytnvNUs5QEXuiS",
  "key21": "4G9sm7u6xGZymBRezavq1iCeUnko8zgHDxFGpReKezoWJMCbPgBdDvUmiQNWpn3m79jZL2pvm95hqfG7sZ7iu4Y2",
  "key22": "3f3BpBqoepwwyrideYR7bgznoAowr9n7kPjJMVrf2iwhjNgE5ACQR9MzCoTBqkTud2z2YS3TBDau4jHRNWrjs9uc",
  "key23": "6691v71kjZXK3wntXAFTb48Za3Lspxib2s4otX6kBkPy5NC9wGTHqwSnQE4UZ8yNTSZ8ip73trgbStQHNbTBKeku",
  "key24": "5Nwb8grAByfLhBshCm2gYuQYpguomQxBe6CJiA45u7NJGwX6tMkQ4ou4rtwY4HpXDhihD1fbtNxeGB1QZYKLanQV",
  "key25": "3bRgenWsQgvnz9BbZctssMBiTzw47TpNsQadiAeShLUSQ7q79tZGBKVtv8y8DcTXatiaeAfjNqJt6BBGxHZAo2XW",
  "key26": "5uXWaTeW6LtUjtCvTahzCqEQD6rfX4zqt78Q6W1kH2iMsnXkf7sLAMaCQmbeiZpy4LcvDkrGkBLJWcUdUGrNXXA9",
  "key27": "3LVJ2RNx2c8LLGzvaHimAsRYgCWWitC7neCtNqHWxuSrfQ44FnyvdnnA8hbHb19M9B4vdssyoB47dRTuXhy3a6xz",
  "key28": "2hRNZ7YHzicZ6qdWnR42H73nvP3fC8a1grtKFTtf6GETYL8Xya7YYu1VXZqhcnMcEvsoEdrvTo5ULFwMq8a6ACYS",
  "key29": "6wNLortKyg4vsPYXhd3yFrza2fWSVMJoH8QbQNUqxUm7MjYJ8T8kfyDdrGYDLCzLMQTZP2ow9WUx9pb4Uk7HqU6",
  "key30": "3TxSUkrbUKpmKa344P5YHSUubJbxrvEM2y9Jw61sN3xYYgn9YFU49ZuS3eTj5sJme4idgV7mxvc46G3AdoEETxzb",
  "key31": "5xdFm2srx5xzegGPwAUyd11BCMQeLvfNa8Npr6qecM5Yv8GxJXp17vEwNUaRkSoiUyYPKbQyw1Y1hwuPR7NvBHQy",
  "key32": "4HFcwn9zoEDxECcaPHsn79Nnvi1q21TsLE2bEtJQsfFWgkJgqAUQwFd2s8efWmSSkR8BGGfKx3q1Yiw7pPW7RMrn",
  "key33": "2TPtbyZyEFXw6v86CFBwtAcgrSR6EYw9UgmYxyJsWC2QNwo51qiz2XwfewX4ZqcCRdAo7yop46cHkLeEvchXNa2L",
  "key34": "2xBzxv1BvT8sQhFDLoAM5m5d4JQJ1UTVt9eScqHStyarjWrmPpNKNs8hhEsDXmeMyfQvUPVCnGKddzFD2FFZtBNz",
  "key35": "zqRa3WekMUmicECnib9u3Pd5Sx8yUJ7rt4zsfgCsfpsi3V8hceLRDxFSPs3Atvrhwv7j51jxddd4RhvfYp1U7Cs"
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
