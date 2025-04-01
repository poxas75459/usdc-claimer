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
    "3wPrvQT9xMuXas8qi3JsrfeYfBbWLhCnfjjuATbQPQ5VfNnDZMavNf4ANYwgd4jKDxbmb2kF9cavjpBv6RTDe7Zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1xgwUneQpWCxcCsHPbfFc1Ejb7Y5FpEJ5vn6yMSzx3RtFhjXzFK6JZr7AjGL9hhwx8q2PtRvGCKmjs9RPEGSnu",
  "key1": "5eJMUbtR2vX15HwEqzxTTRgXJnKfgAYC9X84iYjgkrNSS83uLydzVKVQFsGUponedz1TWXoVaEZLvwpbd4yyELQE",
  "key2": "XaxrfRagcnF9xTnBTm3XbjddNrafVVARerzFf4WQ8vq5pmAK4WXPB6pZK4xUx3mFJirxofUE1qQY687FvcwfPxx",
  "key3": "GwJCfevKgU9fEVbKZkLgDN35DfXcRjpYekbhAFRUdCKwuN3owarUWFSMsuyjPwSvc1uxKgzWymReJbwEWVhgaS7",
  "key4": "5yNUZWCnwtWDJ9MHM9paYRWwjKbYKfytsBKQfGymqLGo3uWq4DLRQK39WZoEjn9ZtXRR4DDbtMKfDCLMAEJg7N7N",
  "key5": "4ozcdFzT4MzH8KmqHuPZRLga8pdJFRGv7H1cKyJThcJLc97uJfVwV4hQqKwxoeeiP7rjZpVL1GV2KtwwT5seD4EG",
  "key6": "5WNMGCfGfHyUceVBF2KtxhiqM4ijzt6tQZr4FdZXKgkD1CUwUSBGZGSGddnFuFFQFdxtnPF6zNW2mivCsd5UQQmP",
  "key7": "4L8BkSX37CptNtuKivWLZ6Fqwzqx9BvmVxeAtNREn7ZTWJPnn8uLwBZNuXv6eFgJmu73T3PLTHs6dozTaKGTaPiv",
  "key8": "2MXpBhredHcpam3zaXadaUS2z3GXi668jHXfoe6F8iURdXaRfZrRkjFSfKTwhZdKFGVTd2QPc15JuiXLHYq9szoL",
  "key9": "4MYvW29idy413NfMHbREAk9twt1cTuMVE17h8zsEWLfCW9sgjRj5XpB8ucjMUppA1j3pwpJqUq2k8LpWPGJaRKJk",
  "key10": "1ZVRJ11aAWzTgExyRvSesHgcHr4oU9XHoGPM1h9qXFkQ2RWYJifRTDe7DU9mR2H4oEeaBVg9ZqdacyfSAFLKcgG",
  "key11": "22HZjJyVQyAkeBCfSiT2NXFWRMY8GZWqRpW76KWsHj2PGqmNe3nTUt81Y3HJn5zxEMDUXCXSeuxUJUGKmNhwTx3L",
  "key12": "3YEoGxa44n4DC9Bcwpjk7P2yfLaDreLKAqNWZrB2cAaz5wn6qKnibmqyXQ35a1W1EW2SPBXuEzEmdrdFYe7DjR3B",
  "key13": "sUs4TaGmkmFm1Z32RTRqMDvByCEWREFW7abmhFemGVgEB4Lc55bXNGiUxjdGUUpX4RqRhMdbnU14gwMLUGcJpwS",
  "key14": "3T71S4gLZ4WhRmGWtvSMttAZciMNRneX6uzfD9tmzixcprZu242NQPcjczcc25bwR5sovVu29Cpeeq3qhYurTgy8",
  "key15": "3PUKjZTixLJZCddVNWGP9ynnkQJ2k6rVxss9mtUKjFsPp524unFVraKfx5n5Nzi9yYPXxmoTga6eKBxsmHyyphiM",
  "key16": "2qGViw2wFCNAJJRqNjcFSavwfXKWVyPGEopFPnXsdVVh6sfsTuTUBTjf4aJxeaL3oNim1JiBUKJBVpPmd6aYAxJL",
  "key17": "tdSo5DwgsPTaZAiJ7JQMygBUiWibSVmp7vJZn5hZBbUTr7EiEvPpuv2zWKtHUAirHbvskzVNdb3eVTHZFSNTfbE",
  "key18": "3RgbD2ajG6bQxQ65k2KjqL8JSkTrjjkgfNsfpkNavedh1zHRCgSRysazreWLCJeukaLuGr2cUM2mmYPDjSoA3MvV",
  "key19": "YdruwsQG61Zy8LERHrYhDovwJ7TYEfUhAZoqsyPtNbxCMHpDanNJ3wqLsJKBzuxojpBhvn9jPvNcuN5kngbWNDX",
  "key20": "3YJDzr2sdsnkaD7CeNxKSX3xVct7tbBvDk6cTgoF6dgkv5J5G2GW9czPMZLwWPHV8AgwStTWJ19gH9WMkddrPBe",
  "key21": "5TeCSPed2d7cDrMX9Fc5QNGz1nCTks1tuJmPTubHSBKyqyhXzDAnMDPuw6YAEtkCk37yD7t4QjYTLwjMSEbTaWYh",
  "key22": "aqxzhzdbyygZtCiqTMbcFn8WFdhFQrn1SuzpTBrXiYnbAhZpV5vDhdksBYXUStQQNMmuFM8PrznvM2a3wfa8q8Z",
  "key23": "3PqEsAuw3oAo2JqHEWHb9nYJj1zTBAHLCxCy4gVYfZYc43GsY75J7T9dHHFDdnyb18zwBDHMzZ1iq3BJ99LHrX1u",
  "key24": "2dupGftehhu4HJkm5CZ8NBsVm86xrJj2intpc3NqjTLnk4MdhnQi5xkAtUVjtNshb8JGTKWgNyKTV9oVtratYQKR",
  "key25": "5BvhZ2LGLsYbnFeNmEKRiYyQgjfehmHP47awsxhoXhsqqSzZFVYMcT2paYuC5Q2aDKuj75H6qqCeaNBDWhRHFFau",
  "key26": "4E25SAfRNGehmq8ZbNiU4wA15KTD9yUfdzjrKtNRcJJCZsU3sr1ptwQNvR68WMFLTpYhbqJ22N84YD1GAkUumEU6",
  "key27": "3fLveqh78Dc1hFTA8tKAD7pAWgBbN5K9gKseKp64d1WkQKTCXtfkwBmuGXK7V4xW1DaNZBHk1KXpAQjrQyLiq8Yy",
  "key28": "48ycFvhvYLWtdMkrd85kCMUEZ2HaSAwRjDwevp8fcxPNnTwoRECkjLtWoALuz5ASNmKif8Jfzb73xSELyYcXnEpz",
  "key29": "mJDqH7eEtmVxZWDh1xjFmHSH7cWiVrRyvqLrAPi8D6tkbC2AggHfbJY3CQRzmnCMdnuLNeCJEDCVDruzFfQ32Qi",
  "key30": "5bertTyTXkCBVWpqUGHgAgtmgN8RYKxyCPjtSyMhX7XZPUeZantvWr4AU3L39a6P3nV5w9nQ3dVmc8DYi8YVxUcZ",
  "key31": "668H84YveDEwWpwYKUPJtigp5koDupFK3vEL9vimSAmneUr9FJz4GL59cmuNPWbgusmwaqJnJkbfUgy77mWP5PyP",
  "key32": "6nidH6iGe9xwUupyXxj9Rk9uAAVdk8VzY3gzrNMZEsKYRKaKKp8QscGH7JMdLPPM15yktsGc6M5RxYKMzrpePt3",
  "key33": "32KFCEcYbPmn31LQ1oKB9EGsTComfe1xC4sRJRVLAE9icR8JLuwRNLDWRhYcZkmthr7xMGmGtK55tLY3uEwyHvhX",
  "key34": "4eZixihLh5uU6vwfR2Sz412dEhgNJZyyTniy1Z6Jx7X1iYx6TSb9DDK4eN5JTABePeQ7sfmfuJkNpu3k1hjyPUzv",
  "key35": "2XcKYXSCT4eMivo8HoV1tsMcRQnkn5PRfnsJUwJVdXvvzz5UfUiXUc8qBqqt4wTzQXtvBfyHmP13AHTKD9HmAHxD",
  "key36": "JzDwah35xxTJ9pNo1L4b9MjLmbLHzdEDb5NpGGJvtwcwLiSXDAPRMHtxVuRBpkqdzT8v99ixZzwVTk2r1KHH2wo",
  "key37": "3wNeqhMepATV6TWoTmbAkkX5CGzKSwWxqYDN5uJqtb2YjDH8TjsCh1JRWLbcq1TCcYokM6qmmkf6TDpXbtJCq1mi",
  "key38": "54eMmXSYcSgDWTFeFakSok1uviu1vYpGidzRTuNToeFeBAELDkXEEYkikAzAgLrKfB9m83b4U7mwEYuhZUQCXEtV",
  "key39": "2hobMRyZzMTjKVjdSnxRt6df4WeWzSKNHxjZESsq3f58AD9ohWEecNVdxBM6QSTUA21gRQbCubJUAnrrnuVxurdR",
  "key40": "hGva19pcjKsGzMZW65GJLjGtdT1uTskN4AmkFU1dpv5SZZCsJr7dAToUeMRwiQJrBWF4QFPVPbgonLQkXvoQXHF",
  "key41": "4GBDuTXMk8GdEkN43jmud1YZwX2xwrQN9A59AxVqv6LnAm85BtqaiYuCjC7pzC9j91cGpPMpR8LtkYMrCpDHYjPc"
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
