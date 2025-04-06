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
    "CSXntoTBzbFSLNqpYmujTpm5GRPojeZ6gtJXHHvMdPnsMqy39dApcH76iUVSoKDNypHhCKRr4rgP77arbCVNkk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32RGzFQCEMFEtxijJD4duohzsLn6wDkLQiH5xQoB8tujzLPEZcGibm7gSR3h5yvRFpdzarRbg3voKJMK7nL9JMSn",
  "key1": "5Qkpvg2iFNo72AZtakCkzQFNbGhntLc8vTTBB5EF7FaQEoZTKsw8ect9CnaBRX8wGxoMDZhXrjx4BS5XKY2n8cq7",
  "key2": "2XSvGa5trNTv98BzDtRq8aqKtqGsAPupkRwQtdo5cLLykoQmQdGpdJYfmnYAUKjSEmEyoR2o9zoMX83vtfNxS3UC",
  "key3": "38uYUqC5tBnoG8QsBsBGhLtoqfcprMX7FanzGQ3GFZAKqrRuJpwwEdB75omZB25nKsBSPdV5MfCNxGKeUWWzsAqY",
  "key4": "4VeqpLgzckD7D6tFBwBdoLN9KcQuKNiBCovT55tsP2bnN5T4bAnXdQyPnJbhdrJpXqt4UwTuEfhSnmSrU4fb26Kg",
  "key5": "53mH9UknjzsUKeeCcriWJqnTtbBbseSHPJpG7NBumLEFYcrp2xFxXabNd9YTEd5bKdsSawoBrZaPi25KyNMgycR2",
  "key6": "8BHpABEZgP7K6xaWGjRyRUZDkb19uzdYii7UTv3LKTgVHkEC5HmmacDhddjbzsFFrGxBTPUyyDTozyJPYTEpFKn",
  "key7": "5mW9ph6t6tQ4u8g4zhym3e3rB5Sh6tendZSyQ5HgJ1CaqPWbGu5UwHJEvnLDbVzWfzyZAvsC8ZywHKDJeQnXyfG8",
  "key8": "59vK9JNm9Mn11YLzBP3ikFQWvkWCMzTUCXZvD1RpDMneQx7Lg4iZxyN8F1eWcT8fH4kCSJH3ZGTxRryoCGn5X7vc",
  "key9": "48RMEJThoQEc8s2hg5j525h1GCStZPLWEQ5zjtoMdHQbXE1NhbxJkg9kr61zrJtDXzQCRVeK3bJn3mfdNUJ2ciwD",
  "key10": "4auB8ozradwn4XK5ubzeNFfBjxF9bfP4eJNkSngP8SP6eAqqnNmjgrCfd9pLkR2Vs2QWhLjEGn6QYEn4kGuDzxwm",
  "key11": "2HnUeMKipTCo7YqepHu6TCn5iPC3uMUcrSXdeiwTREkUUYKBu4G588vTF1372t1wSgaUPUtrH6P4hdHwL5DM9UED",
  "key12": "62MwY4xvbed7ZUjtxi7knxmji2uTf8jEtM34u4QJDih2rgN16RC2R9m89szLDUJ8Ff4jhf1U2cwjDVquVV7ctqqb",
  "key13": "2HuzzN6zfGhhqxfPQaqqPMFNUSjyVaNCG5C361JK7L7gAy5pAbSR2uX9aNZmnXFPA8akVHsSrgTJWuh531sBtHjt",
  "key14": "2sU4sCSdbYwaxE4U4anyrXT3d4PBsFHrNh8zvsBRapHE1tYN9TVQsejGBKXxGLsbcYMDSSChaB7CUfQHNJUxGSS6",
  "key15": "4Md9zY9ZFCGEBn7skvGNpojkTCxufGmthhht6aKahVhL4p4u1CRsvmc2G5bSSrdunFK4x764hHjWg8Pevvvpx6wE",
  "key16": "4mrrHiWZ9EJ966LYuTZ8txZuL8qDeZGYiepFePLJsQsBgwXwirKCW5o1HJLQnysX1cuGu5a7cU2toKswLGJCEZYZ",
  "key17": "YSourpf3eL9G3tpXcQFAXmb6hBDZyjTVes8i2RdfjvYUfj6BszGv4H59uXs2nv8bwFVqGMn7avvj3HtEjwfFja7",
  "key18": "3RmZGPXjv4uyQhzvF14niutRuyB3M9fX8w8gAbDipsWf7qft7Jad2aq6xVQRYRFkCHWacYrRuauT1Diw2C1kAojU",
  "key19": "2hm8fTLmCWhPE3u4pd3eTmTfdwHGYruSyxqxcbpA8XqSVAp8VM3Tn4BeGVFue6ZNySEe1691SU4Tesaj9mFtyw6a",
  "key20": "2Nt5f6NcFXxmP3Q2Q8cgXmXvGmj2wr7dwKZ7DxiycwQFKSFdK2wFvd7AyajxMqR2nDubjxmeVgRRQdudVW3QPW9Z",
  "key21": "A7Nojx81MzFkqNMoABkSXdtF2kZhvSDQSWKrc1sQW1j9c87Mjgpo7ThTC1SLUx22EueiyjAuFv8nboLxnh6PwLr",
  "key22": "4wQHBKSA8o4DR4eDGd6khnynqRGsFk66XGkoPt72j7cdgoiLeQcS4zzVthUnNiDdpEi8jzoW3ZH5Vkds2mj3kY9g",
  "key23": "fuHsKFtcumWXqwXZN5aPbYc8BoSSKHtMv5oQdnKwW7S4SeXhNjdokXqRWCtU6aPaMZ1SMPmf5KrMfNFc4jYhW1q",
  "key24": "xJbio6ZBRm78F1UTDhDUveVkUCDTJjpRP1gPg6ABv794f7JThdNGH86mFY6dEdMGHTCq2hhPW4XR65SDf7YMiTQ",
  "key25": "5u5W3xFVPA1iqfLLM9wa948SPuLUFoaRUy482WM7tb8xa3T8DLPJ3MhMrFKQoZsjcnJsTGHBezWNxuWLe2Z747Cz",
  "key26": "4kjSJbTV63v8UmwpPmdbMSADpgVsrdjYkoHquovVkNUn8thmKJTxVC5iopTubkRo4JXQzqX9D122yCxQteWkrTD3",
  "key27": "RH5X7V5ZVfudNBEoFhmc3GoaKp184LMgeM43Pi9UmiSY3dNQHJhmv5vNm4ktPXu3MzgAHhagnkEKrmg5FpUtXS6",
  "key28": "4HMZQBwJ1wwvZMXnnjS8FRpfF4ftbEeoRB9QWRomKZsP8MWVsXTnaFuLhbAxX97QJpmw5A3BRGddSU3ov9kjMAqD",
  "key29": "2NrCQ1uTT3seBfpSsjYy7pmsyfdRP6ggNJwhaa39RTJj8KUrqp1cGJPAbFEGChi48YmCcitWVugt4opgLn4xqvPN",
  "key30": "4UavnS4f7TDs4iYqygPK9CcTPLWKvwb9U6MpsdJyGdyYMAEaDe446ED6xYb1EQV6DAQSCGgJfTDCUAwVVMr4JgZ6",
  "key31": "49YPqiyUWgEmVTo8ejFjpX5GrdJcXjQKSm1BoGkmE5skC7cLGrrLu978aGjVcHkSnGw3vUc3MeSAW1KSrr1nUmXn",
  "key32": "4iT4URHtio4CBJoah7EF2vTZPFcnp4pNQj8SX2SdyV5JRA2BVeGRNF4TCu7tGgaax3cH1xWUMHsTFJ4AfpPpx1NT",
  "key33": "2cFgYAApcqq8gEn5JiGUaJarSoPzSBoFgWczK3Dj64bh674kt2HSQFK6G5YkMWx7drS1GzghzG9MZisqGGQbmmYJ",
  "key34": "5YDrTJvoN3eXyV3uRY6WHavSFnKJavbmgeKPWuC1gq3BiMABZVBMZg8zVdD3BLDsNiRYfQVyhB2PV88QnhpxRffc",
  "key35": "2ATE46LH2B2ye4E2voYRadMNeq8592pg6KJwv8fiofy9hXQT7gtosEfvqdiKJjs6SwgNToJAwwYYD9YRVidN9nLN",
  "key36": "5y2UaNdkHVEUZiMb1AgvHqrwpcgJBT1pLRqqW5rgQ6w7WY1qr3dGm1LpW9hJqCpJm1K7JEPMcTZeCSyaGG6S8qaD",
  "key37": "57Fd7gHqmU1huno94CzAnD3eTwWrTnNQ1quSFq7GMw8NcBs8jo8VZ8DuQPosshDjBg2k5C2tbR3sxexfFu9Qo1rb",
  "key38": "2BSGz9rPqBBx37soX3CaoegywFJoyRkGRq3G3ENqGthHYdBWG5SmhstVLevjh482KHB4jx4Kb2k1GgtuZFmfEEX8",
  "key39": "22BVrVQby3LcTwRN2ABmaJMpXHZQwyMy6Sa8bs1igozyqj8U9QsvpKh2NXEvFaYj13Z8ywCaoGyjDM2AnD2neDxg",
  "key40": "44MCAF5KkgBj3r16resGKgfvLEJDmVpFinqBfJJMQNDYbB7Ug3sJPXdbqLAnUTDtnhHRJ6vooQrf1i7zodnUANcQ"
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
