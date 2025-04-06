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
    "qM1KyedP6topyMhoZq4DiNt4jQT3Gw8Pq378z9eKSrKtScsQHJHEYBkyMEePTiabhXZeaxaJRZqXvjn736uC7rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7yENmcyTmcqeGKhw3A6LLaKzWWGk5G4ML3QZ3NGkhb3oKFM67NcVeaDrNLjAmuJ8oLLZ9fnXaMWdcQvyxqQCan",
  "key1": "2NDEnmFSpbQE5YvkkTRk26WFsgjU5zVcqRPCopvGfZhzTLt6nKHhibEcYoBh2jY1xMsScr9PF1XDQf12gP7iaHXK",
  "key2": "3oMvERt11GzyzwFQFHcyrWGLQmzNarUmXS4BUUTbH9AXCWowkn4D1ncEVS1BpRvmE9CWfAH1YYWTHxfq2Vc4iqSR",
  "key3": "4Q1f6mPKmkDsws7jWsR7EyGTmQwRcuhfhkTHa1Fd2XTTB2sP9HHVRUi4VSW2jWoiWRAmuVZfD9hQYMJZAFoEZC4r",
  "key4": "2p3DeEU6VdD1ySddzyf8BYEiEYEC62j5WK63sBn9NPavJUi2m9RocBwXFNads3gHZPiHMWv98XSq9NVP2fCvWRKD",
  "key5": "4W2Gecx7ELnCKDVVC1WDwD2AEj25hSd9NvDHCUAcqTaNCcQ9hmNQUhVR4dQCSkVS8YrMdanqsynfZchyVEoCLxmx",
  "key6": "2Y3XtZQzXTrUszZTRV9R7WUt6qpQtCACRBjVoHZsJuZZMjouDD1mFn576WRmf5fJFw7ZDj6aYYu5ST5TGH2uqBQs",
  "key7": "2sKmR22b4q4YhmSHpyBfuJ4bbFNZ8pbZSNUcA3vhuCX95vHUZy8KEGezkNyQP9uGFLB46qdTLiEtoaegX2xy3yyG",
  "key8": "4fTM21sst8GSN4JMNhLvfkjb23bSi78xSmaFne7izMZpjtvEBD5KLB9bc4BLSokxnrYZjSNYktuAhdjAXANir2jv",
  "key9": "5Lj3dCBW75wyQ6TqcbUmu67dYJidb85rDGYXmVvwkwzPpFLkMP8mY55y6uJeuUSYdaTDT9ELe6BesWGEgvEpqLJY",
  "key10": "4yCpPfsdcGHRcAaW1oeEcsyYe5WbsXUdESaxdDurEG9ECkB7RjnUBfaPCwdnGs2uwivd52D37RNrr5AzKE4R7xgT",
  "key11": "3wTvVrET3ypFZKR4H4cnQEXvz95nt8q56scdaWuNr8sggknhKPy4bbCBSeXJTXomS6UnEXcFxF6k4ZMwkkSZTzwk",
  "key12": "2VjKDC2p29smgV5LksWZMtdqurzjaH4P7JjcAzBqvHbdfbC4a6VCYJHEBTbjAWDubDMqBE53RCdp6tNDL6TtkL5h",
  "key13": "3Pg6cm3eGpqbRZJ4mydwJF4zvh3ZCiR9pgY3wz68nHrNSV92RqMbKCRzci5bEcEHDebsDBbhWAenBxcxqqcUTL5J",
  "key14": "3MXdirhmWpypbVGrGR2AkXNxVhwp569D9H3s3hLsG9CzuY9NVLmbHQZ68U9ESjD4a4QiRJxkJY8TiAKto3MfXBxG",
  "key15": "3TrTj2E7QxWbeqFULEPpo2nfToG2iKdrQ9wRtkMTnrvpd8x7pTamxbapyXjAm4E1DDwjBTzfEZ5NdGa3Wx8rYNYm",
  "key16": "2QTs76xjkQdmrV9xc5jJJKu4q7Wq1PFUmDTbq7e7voGYsJwqzLhCvUPo6bcD7ZDQMdbkatqd6ioRT9fqhCab2W8j",
  "key17": "4V8jT4f1cjMEAeS95XvJdcGaFdUKnGtmc1QaUNKDGMtwdDB9tpDTtV2fzkVwKQrc6UqRAMVkWP7XGTjrSftyfny8",
  "key18": "YmmAZzzk6DyTNbESWE5Fmaru3XfstyzxQNx85SbJrwigq7LgDLY8SiVDiHyf327ja7WzLxHkq87DdpZjW8MHV2r",
  "key19": "51ULURvTy8M4jWePg7pRAoHqbCN2d3ugU9feTfGfbaXQgzhzzVWSCG4RZU1iNaJSZVNeRLQF3R5RESZXNhs5bgwr",
  "key20": "2JS9P2tutuJpwQvhZXQatpWNMzHpiJSutypV3AMv3PMu6kRWRaEjhtqmMGT6ip5gsTRwSo9xCor95uwxuLbGwkR2",
  "key21": "2R2v5mewyTsdzVqXL8n2WqtcBYD5iiswjhRiQ1RWam69bNtLhKrDN7xVzEtWYaZYdMYZJAsukH3GAjb4J9Es76B7",
  "key22": "KMEuUeopwfUY6ZvtNWHLdrPAV9ALetLSeS4eiUX5BkjQZsveaQJF4mrJEQzpSPANxiJZvdE9r8sxX63kGqPwi3R",
  "key23": "h63WL6V8qJ6mHE9W3dEmpZgRcXT6qTVCchf31KXbPqqs9hw3GiGvKGaxqLHPRKhFD7tBa81f9FuEcgCsxfPJ5Eg",
  "key24": "31jL5oYexsVuL52cK521XHyHVUWLRqvYuQjCVtfC9VJQnePsVNej7VcjTpdA9RRU1Bqj3H17gUcScoyv5aob1R3n",
  "key25": "2mJ9wvcdHDVkPkbXosyRg2f5yZHcP6K1peDsizYyC7gPynuSBVFAqSdMjHC5AxfisKgMbQGDSos3nrzLHT6wPjnU",
  "key26": "34MEG8paA9VPsJ1vnNbHX18S3qoLNC8YWTqmw5nF3sH7TZqxRQhfqcCk3ue2WyMMYqncjqXb24mR51csUETPuSfJ",
  "key27": "3buHL1ZUA1xvNYaBRXro4xFMh3KZ5jaZDkWaPUXumWtKhjy2qUQq53nf4eJZ9ZgaF7Qsu2zun9rrazSms5AQikSd",
  "key28": "61AXbyWmkJew7TXJzKuUF6PcNjs7DGgFKBtZiwApgzYNahZUmhi7w4H9CFZmEESLMnDoUW5pAD6J6JVm1xv8eh86",
  "key29": "4hNsGKUbPFvE9YAjStPfVKWF4zHvZQTT4rp4QNSNZGGvVxejcR9JTekYCFh3SShYTqp4eniGRA9BxMmEZFfDudL8",
  "key30": "5YKPLNLLw39FqGs2VQhuBMH2ioAojXZYTEDpyB39J2sMdeTjhy5X9XTFKjNmfkTmqTUDThTBTDkaoMWVFys2jPMw",
  "key31": "4cz6sdG8oceSyPRoLTv24g75g72ZMKZSh177Ybn6dAYgdCcs8n34Pcprexev1XyVKJGwspiidPgvXmxyg3iDo1TT",
  "key32": "46wcuYvXkTMf2XsAHSfvouupn5y8frUW9Qk1fJ442E9hLW9L9DnZyBRiePhTYGxEghwqMdtVZoUct6MaYjrWaBVr",
  "key33": "2V3TUdVFBvp6SpKYDjeTbKuFAbWRZtM8U3iAexpgiqPvYyxvrDRkh488rALeno1PRVdHkfnX87ACNW452zb41nzC",
  "key34": "3oR59zuf9cA6R2jxmD1dvYkf9M5aX6fYMnAQdPcUnKQGsEXDwsEjyaBsq6D9mTwYUqQZGF7G91KkvtaoLuV7fDNx",
  "key35": "2qu9iQwXpvBrFjwg6cZWneYMh5ncLmXTyRfBQbu16a1Ehf8Tw38FZnjJEcWUSrgWDpoxhhY93LXsjUnwUgq2qtgi",
  "key36": "6289AfbyhBKq5biZZHzTPKUxfhhJm2nHV6VsMprujHQmCXUz84JFP6vTNkJu9KxWSLkXdBZz3jP1M9s37thQ1M2C",
  "key37": "2y778PuG3Ayc7iu4yMRKpcue1cNLCEEMfFpfgRsSmvRBYnBTDVgVu5ThJWXyi1Y5SAWHhmfqv3WBHTYZ2kWkYbxV",
  "key38": "oKwjoX3fbB2H7k2FdpxBacD1EvJdsh7pLYp68BaHvadvPHLnYTC2BXpystR24pjxmNsXmcTaCWhERJtU7dRdba7",
  "key39": "5SdNgEkeofn9FqwyUoHj5zzihwW4K1oshAoMxgTJ4vQiJB91j8KbNd2DysavDz3uqemqFSChuJY4mxeKV4WUjgsu",
  "key40": "5rv4KCrKAmvQxiwZfR56WCsHzeykNurLtXRK5uC8g87gmZ9GGZTcV7sij1tt2Gh3CQ4ePmAtPrbhfKpc2LiZL12B",
  "key41": "2Bpe1PmPXfZYs2g1GM3G3vsQnKT8ZVtxwQmzVuPKAyzyLVMMMa1o4LXNMJ7EbEi2VXDDMzo8uGFvXoQayMCkz1A2"
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
