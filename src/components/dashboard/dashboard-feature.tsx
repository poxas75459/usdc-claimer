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
    "2jphfh155mb7UCv8XmifhjvPcvFPcUEdYuPumQGTqjoThKd9NSKtby1hA7XKDZJt3D9YBwYHQPu2e4ifxhuNm1nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21wE23ouZ4YwvaGXygWDWAZ8tWDTnxaFE4cyD2KjYAGGeijyG7NYQFMMcnvHZFVVXPH6h26SD6JQ5n72TcKDR6rf",
  "key1": "JLAqkvSsC5o1Jhw2RLdRYDRNUpVsm1cEYs7jDeJTEKNsr4PCo8j1G4pxNzYEFNeY1emfxxBzV6ZZKALfm94Rrnk",
  "key2": "4VhVxKKzDArnT7jjsP135Ratydb9guSfNr59GLm6YRvjaSKdu2kaGxQDAFvQEmbTN2CTCEb5NCwJK3Z4jE2oX6JY",
  "key3": "5Y9RJY1kbGxjQXEhDadxU7hC8SZpy3PGmbFxWksT8pTBQ9kmXP5pmq2vo8xKrx85qVdGCF3WoX8Biq2zE3brscos",
  "key4": "2qf7KCDZ1rd4YbJGtFMradCfv9QdUNZC44RoxWLKaEeLsThktjvz9sLt9A3eVdgZ7Bmq6XQ5hiYiP2NtjaVUEpNH",
  "key5": "nWojHjSxoeDutn99YV9fUYQuAeaNudPasyqwyYhmxjmzFXdWessmH9tPTWugC8d9i6FPFBowpx8P61kQqiKStjd",
  "key6": "4B9XNYYxvtiLvumCv4LsWWzEFXvLTswzfeygT1sZZAVzXUBdG7ykuXa9owW4uLgXrx5BFF6bWiSEdvQY84TadEvx",
  "key7": "3EEHg5v7CFmBBWamyT9a6vFgjmtChoi3mpctQmRFhgDbwxXc1fc5KkviN1cNRpzYR3YT6sy5NGpYq9eLH5eEj9it",
  "key8": "3KanKnKD4mSdsv3MNG3EpwbaR1znTunaGbUTKC9ims9M1vUcKrKNT8W3EoXHTFHYbUkApywK9ybns9uDLrJJwWhq",
  "key9": "2AnjouYkFoC8tNyjhqxKFNYK3Uy7fzp2KgRmesCbxdwj2WS8dw2zuvWt4yj1KYg9e4xQV1tvKhuqQaKguyQ7VpXQ",
  "key10": "678qJCy1okBmiA4PDPpK4JgBkteonrZhVAoYnVYDfiuoVCpVFNSMgxhaoS7xRKhKSCEmYR5UtMEnJ9WQyHrqVkTy",
  "key11": "2rr38CStPiotGuDrBvCy6d8wMboM4qtATHEY6freGMMkdGmVUtwp9ZBMzr3g5TqEt19uUcNAWjHBcYt88HwsDXyU",
  "key12": "aGb2hxpmaxCd3SNTjGtag4SB6vLpokfmUnx956XRgBDHmnU2MryMUtJ2muGCLAnhhc8Rf5bm2t5jXYisKY6NHqV",
  "key13": "3DY6w6z3sPVwXaVAHpeE7uW5uW2X1xFtJ47ws7ZyrhTQsReygA9kbrRSTLFbKnCmm1UgSexabeR7meYq4fpwtFpJ",
  "key14": "2iatDoXndnhMZBRqndRpr5kXSzgRqV8mFiUDgpoNUFGwDS6ZpXqRZtKrWmMn4826ivu3R2YhgBRKjv7pTEYdsSQn",
  "key15": "2TajuwoW6zvUjM16uawG3tucCGx7RfrzK3nz8D1dtiggBt8MfsuPY5TsgvG1uTG8SiXURZetzSBVmFt5csGCVWFd",
  "key16": "48EvoWSJDXkouc3mzTD1EUe5ayNLkcWC1grerefBk6Eqq1P2NFx3gp1SoS3qSnEQFAPg7PVHqzLycKok2eCBBtXb",
  "key17": "2ssPNURrcYoUgNhCfX3F5a2JqZTcSgYL7qhe1ZViuhG4enWJ3hmqNyHeDB2wKFmg2jSU9HWEUq5AXKnzoNyJZJHb",
  "key18": "3ZpuJAqciHJjnE8qKdkmsb2BNx2XPYvdenPCA86U8zpViGM1C7iWN4wqYkVcJzAD14TjGMTpnK6KZH53RZUpqbaF",
  "key19": "4ySDKuRGaqVfc8ddSfrSXrfgDkxRLXEb29iCbXbbzDfwwfEdTovgRkJGFmZqqd3RMoneBoKKxBMECZJ4f9yrtCsi",
  "key20": "2Qzg1tXFADJjEoDbqofzAEN3KMub9Tb8RfZMQv24cMwuFPBfMHYUMb5S37jfZUWudS5qXFRT8rMy6o7VtPgLA4Tv",
  "key21": "5K7tdhghe7kdQ1JYNNM3bHXb5cb44RKtSfLyBaVVwP7nR4dMNpdr56BnUgVMwYMJVjTXW69PtbrR22WYHAhwsn6e",
  "key22": "2C37ZFVZZsiebYdcBhXeTKuKgA8U9cNfJna1ZBPjKX6RinH8CVH9GW8B9aHNKEHRMGKQBV4QypfYLCoNquAATR81",
  "key23": "3tLGhsgWQbkhyJwWA6YVMKW2cUPfni7qcSPqPvvtikwv5YaX3jSoXQV12YLfkiXMGxgCDX6uxtWYTYtBDxtNdRNY",
  "key24": "2LN9WhCEjtH8S681pqJPfpk64zWJctkSPZWNswFPgsm62kWYtx4zsSxCMSPzYVz1hANBzG46gxWaQPLPWtCFRJDh",
  "key25": "5J1GZh2njugt4TGQ79tq89uq7xN1dLKLg2VXYVify429PBRsrDmf3ejS6Nsg9RzwDu2CMzTywHLT1NpzW3eqgpDk",
  "key26": "xSoVQmfXmULA2fCFxYVuMjHor6LDHBVGt8sAmJjUeko44m3kcZR7KAi5jqtCggwVGBo8i1Ek5nyZf1Xcp8XEMQR",
  "key27": "3Mjr1i2TCgoHLbBTerHh4sTQLvKFn3mw9yAQh5XVVwQGdxtiiuitmYPnBD77QnpRrKwJBjgRCtB6AAXHbrYQDuVq",
  "key28": "4yxRxaMQ1bQSuckXPHwR78xbf8TBeiEbKt5ezyc3xB8zpeUK95a8KkfjqFt8Ebwu4nBaprgo8ScgDVz9oDkBix6c",
  "key29": "n42Wc1pzZ2kEUpVPnXq96YAQMn6G2y6DQMZJvFZb7xbUJfbA1k1y5DxTPjyTLPsbtp7KxvT5DgVPVcDez3iNAKf",
  "key30": "4EEvsQVeu74fKLffxHzetA2TWS9kpHSdGbSNw7MYKCuUVUmBC769yntYX1fcZZvYTSvrBRq2Dp8KYkaKPaoyUgSq",
  "key31": "234X3hyChyyHmUdwXGuQkBaitHPakRhNyqU8XXRBpYdoB447KXg37qmSC1bNt8yKm1rowFbeFfwH2soRoP2sMXAD",
  "key32": "21x42Mnr4fwm6qfLMkhNRGwoYFKHB5GxoAvuhReAzbFpktLhAoS9QcY9iMuyoMEE53T63ZfsokUGkjQim8cqQtKr",
  "key33": "2GwKuN3yJPGEUcat2JGGKPFxiXU65EWbd2FpqAQgt8qWnHfRHNSrxotg2Gb3uTHE2pCqeMg7J7tCuTG5fmzb6ivK",
  "key34": "56UbLgyPjdmbDMvxajG7BBBhgB6noRXGnDMvR3CWF3Sje2UnCea45ds7LiBdjdMxToxWtSeCfbcu1BZUENmvFjeX"
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
