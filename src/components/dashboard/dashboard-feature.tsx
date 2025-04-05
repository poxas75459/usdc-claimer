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
    "4Ft64RV4Lge4hwpLUydRjPkEe64NT4nD6R1aHWnbH1CHgRcK7pFPvohscuTJZVvTJZvdoY9k2diecC8ZE1RQdFKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A5wD2v1qNNBnKx6uX24WPYhgi6ECuDTuCLpFMjYBsXYnz5WifrWFw7Jpvjs2QdVkcD8Tg9QqPJGopYMn6uMFKTa",
  "key1": "RZWQKXDSGstKj7hCWGerS1mx8ZHdFQJ2iaYLEk2ph1vK4iqBYLcdAHc15RfeSbVkeC8uWS6TwyxCyQ9qJrm7K6Q",
  "key2": "2egKFqcbmMRDCr1Jxo9xHJCepzcGEUUUc3rcTGamFhnrpcVmsNBY92NyMDkeXXisdziLtS9QgBhrjnZ5k1TGFuiy",
  "key3": "4QNDKbYqJsGES6fogk7rwtAff1PktUr4ArVZmKutKvGpyonaLXpopuvbt6MwWSCabnrydU1vbqrgvvRSMsdcZpm",
  "key4": "feKcrc8awvj1KBapMbxsUMi9xFwRtYFa4ysAASGHa6kDydo9Rv8PhRF1wt939yV2Q5CxCkUwd99F67wZh9gSa1J",
  "key5": "4hucdsnyrEfKPAUtcmN6xJL7YWUhTUkHCPGykiY9XSLzaGe6dPSnp9a3FFnFubWXc5YwD7tvxP3HLFgsxBJHt2oW",
  "key6": "2aECcTptiqJdP7Zi3hJDEshRZ9rqrntDKEhecPqXEb97TRphvgvLajuAuKvtCD5NXeqLTCr2FocMc6gKG8iTeYBH",
  "key7": "PLTkH4JP4oEmsdPhbbq8Rf8fcxthP98EW42zjdLXxfkXCtEUKGdAj2kXxaqQdKomHFW4ASj4b8QMEhtGQ7YguJq",
  "key8": "5NMGqh63oJ5vFLN8K28TioKrSGpBKn4E6eKEnNNfqDjv3ppmeEjWaBPjBvCS7NJSwjHfhA8ohfff1Wd4pv7PxP3J",
  "key9": "5qzTppcBEhu4CxRqDJK8ZMV9jcDF5zV7HDafRt8imfPJCSbT7Cd9Fu8P8QfU1snMKpjVPBbdqYNaxxEsQKKiwQU5",
  "key10": "3HHFN4h6FP6dg3RCBc5wqTy2HZ91JrpKTARTcDGDBu7JHZoFZsBh7e9t8VEAmiY77PyzMhrQjRz9FyzfuHuMPczC",
  "key11": "66bCWp6ZdStDprmvBzQKmnHgWmeScdtoaFuNRtdXL2VVBS9vCgUApbqLz3DC5TRXJUo1NMC5dnrdyKMdPdQnZTjH",
  "key12": "3Home5z6WNqMEEmLtEYk9nSPTv4LNbRXWF5x5eSfXKZJ86AFzZy6nT9kpqmiu1ZXD9iLPy5o33JiVcmjpqLaL8ac",
  "key13": "5xjRLZfb2v17dZWQDqmYUasD2GoGoD8F2wFQdLHduojKsPsJyzftQzkPNNZx56zxCKKMyhH19mC913DRjysVSG59",
  "key14": "42gGyTxc131NNGKybMuhxriRGywKgQdubJNaJvQCjfAJNa9BY918ra3Weai5fPFo4DovcRjPnFKoQs4QKrz2H5aE",
  "key15": "2EyprfoXtB193ytX4sPoFjWTCTXGwNy5XsYmxoirhHUzkZy82m1bFguawQXp6J4sYpQgbiLeW1tyaVyxh1AgYwTZ",
  "key16": "3Foq934RtvbYY4qzzSYP67ipyL7CLYneiF6eip9P53xBCneNHtubQuYyPyf88ZW8rfJVLHqmZLnbw833FtEuvxWa",
  "key17": "3xmscajFz2bZt1LsGVMSaoxaTP1XhVGeUXvrTW7AnfSuYzYrgQFU2A2fG6Urr5fwkt7BWbPrQMpB68d9bXtBsdfV",
  "key18": "5pmY79DGiSHJ87yYsJ5pZJ6SwSuj9vD6yje4HgrtfmALUjSmCsKUW8c9T13L89uzXZn6HHsU3YueuT55jVSrW955",
  "key19": "58xEJWU83u5b44yTf8J8cPVk4k1hPmLtbYdoGg7rWtFCddostmtVPp7En2WjUFFE5oVMsfWoWPTasUkhsJ5chF3M",
  "key20": "J4wZB8vk63CN1yPna1nGBhaMsPNMJSDE3ifS8QYF3RRHjzEniVwpqUFr7pGSADvdaH7gKMyTBiX5Kp85SMTidro",
  "key21": "4KUiLvDGqyPSYc3h2xJDh1a4HSSQs8V1YyKrQdof7piK3SahFCgYjjngoqhGi9w1tzMdfCUDPkSBpF4XwgWEYevc",
  "key22": "5gmkimLUX32kJ2quiyBrdFDprV7tYgaaNno9MN1kyuFd7UG81W33MXjh9RaN5GXuJ7Krdzywru9W4stb7rnPWVuo",
  "key23": "5LC67VfddfvjHgX39WqFZ6zRnNffqj6SNcRpp1Gn1NMxRi7JViEWMosXZwVx4e9vQtAL7D11V3A55SzDzk5CVtMY",
  "key24": "5uKbhfBqBpxAvmSD1VtvggKJPNgGyBBtLUfrNpHtuHP8k4YuePspbV3FR5UsUX2giB15xJKanLyhTMJpNcKx8otw",
  "key25": "4HNmNYeNcTMpTHsJebtXTN92df5iW9YtHXzV2QXVcWhX3VFt28L7SLoy3sPYJi39L5Fw8qH7yPZ6UKxauNxWibpo",
  "key26": "3uM75hY7vLP7MM5g1LXevzW4bYFDvW5ssCQPdfQZTE45YW1fzAHQk36kXubVicB7HtpNShgr4p6UKyoL3fCafDyg",
  "key27": "2bzEx97QkyvHYU94WPrMEuoAvHgp4ZuyL3emmFPFg4MWumaMaXUDtwE8isVJHEsBFTsu3VSD3TxuJnTqx3A4uSR5",
  "key28": "5YhBna7gUHKrtZaasvgKamRZjCXbBroAjG585YjoJ8QpkHyBixjVg8DKZ7gtD92XE8uN2r75c65ykc4Df7FgvBbV",
  "key29": "rPjpX6RW8eMMeQWR29xPnnDbixw6M43CanYkX7Pf3xsQSZxGYYdRhc1pFG3XbcVaTjd885tf7CcXtWRemzbwfea",
  "key30": "5WCPFe4rdJgwxyYotpFFx4PLaYzrL3yPC9wnGUSdY9JARdukiMTTzKdwzb7sti35YTecFwELowifJFQ5yro1x2Wu",
  "key31": "28VVyZcy8gmuAsVah3GmvwVZ9UGhrU7iJRb6FNov4Q43LGASnio6q3WfDBUHAGpgbhA7LtkadQuV96BMykDK8Y1k",
  "key32": "21yx8HY7cRcjzp5PrAD3UhLsEVfaawKDY6v27YU3EjE1HKNmy3LcUMPVVSACuy8mD9Sq9WmFzqJmTJQRJKZXY5Mv",
  "key33": "4pwFaQSm4Cq7x8DeEKDahVHFk4j4aBTNePadPr6sTpu2QtZZGHhJx8ipit1mYJQKZdRyzCJHz4Y6M1aHYfSbdZhD",
  "key34": "kcFTmtfdgq4QumnY8TYTHqd7iRWPeM3LQ2PDqFL9vw6rKEiBgAgPUbc6Z7fygJFwnkYC7GcQET3Z4EbU7yfCBYs",
  "key35": "4YVjDnBkWcCZYHtpCbyy4pkmGJQuMTk7nK3azByiYhFA6o4AxjQDVpE4mDYBqv7VwxHzJ8RHThtYRV27duT7VpGU",
  "key36": "2WYUBd754uUmz7amirDgXbb1vcoEBXDakUZZS9ZHnry72h4tk1iHu8cnQQoWi2QYpu4Hz4R4qrdkHjLNCyHJWHEo",
  "key37": "3MCYgryMDKhG1NHaoyZDVd3scZbpj2TfCZ4UWPrRCMBYNPzK9cZGngzqYauKp7V3i3Kaw21byPCr29zDB2YphmnH",
  "key38": "2iyRKkzTzkEemYggwqhkHoFMPi5R9wusCc8grZaZQsbwfihSMxcmAWNbqoMTS4B2SLrGucN69ZgcLCwkEY5qjo7d",
  "key39": "2ed99PwJ7HaQZzetrpSH4gbpUabbvyjLG3WhYtue5vGs8Tveq1DQ84vGpnffvpUVXUa6kcu9N8Tt8vR2Jtw5XxWF",
  "key40": "5X2FQbZRQxGiJxhZ2sY6uYUnobFKjo2ZURQ7pL9khHXt7UMdfuAkLVWk5gCigwQqmACULWqcvoCrtrSJMbhfpmT8",
  "key41": "4F3eicDcP8xFZ6HoHeXR1uPShc81Qa3XvhUz9JQoQj1FTHpx9dVEmypr4Qk19sXDTxNnCoDR2ta5HrJmLugJzhWN",
  "key42": "3fhRFdpkFUTCCDumSq8EXNAbDNQw7PJUSJGraUdngPS8ZU8f8mi5g2QZx4urjv1kQzcRYhzDejcS469A1op63Rna",
  "key43": "5pgHoESnLnc3MPf77o67z4iVDaNPHuowW3MApYAXinU9stkPBLGZmfFaCUKA2eQf4WWsXMFN7zNPiGdQ3v2fz6VC",
  "key44": "4n2Ww7XgVyJsCT3YtCSwa77NkfCA2ppJ1dnJoFuaySNNjUza84pbguLhFXPKDUQ7SACv46caCYkkwfXf7BrApmDk",
  "key45": "54hBg5VjPNocrJrkE65w9dSrxo33oVxae8M5sn92cPxF8FmjyEDfJkxaMJygsxhirA3PEcs7pjaDTTJY6moG5Ftv",
  "key46": "2qEaoCRxhFYXcHfDGr2pBaLzuzux2DUZPuYuT4biCPWDznXxAHFo3nbCA4fi1rfNTKsgZBu5ohWVktkXzwM81XUp"
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
