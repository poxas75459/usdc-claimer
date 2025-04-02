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
    "4Kj3MxEzGbH3WY8JPaTngn6XRPE1QFPG9mgbKt7uZTgfP5PyC58e9hbD6evriSA2dVFm56tYdHRT46nrbZKJyR5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kW9fLWUCXYuKkqCPpyzyWAwaJ6e73hoUgWXoHdvemR8vtWfrVD38k1ziq7bx68h7SjFB6tTC3YNRASh2Bj4JjZ4",
  "key1": "2J2hahp1bJkREQMr69BU3t4SfBpU1sS11jbrRHnUujV1WNy7QkiWcB2aEZzRF9AEVCnm2aUF6qX4jv2RzBRhhycY",
  "key2": "4hWaqWYKdLHgBRhuE9jQ2XVxtiXgmSNPsLdkGFKgEKbJ2heepU28bx5okgAWmsFdNH9yfp8Xcek6k6XTZYiawVca",
  "key3": "54dRg17ordywU4P347kD3S5furABGvRz2i9nA7BL62BSQqiMRbAYz76G5hzy1j3rq1NvKcwbNN5CPCwqPDScZbFJ",
  "key4": "4mo8fefeEQrLBVK8UHSkQnc34VENKck7JHrrLHZiKpa55YgtZ3Lrk3PTkmF3QrLrmj8iktetWADUW4JdSQ56UKT8",
  "key5": "24bMaYXBmhU9neaRurB3ZqUSWiCDkFC2nF3VVU4aKbr178VVvkSPTvehkh5mqgxbrYR7Qo3ycVLgP9rLoimXzpWD",
  "key6": "4yRQkqPQtjSkRVghk7YqPuz2Z4T2D1pa3Yya5KJEEmB947eJTKQVzm3FEy24RBnwDAaK5W1jXpYSASWKGmEsnGXW",
  "key7": "4m45vXvrBHzp6Qv6HDgQmcqrRx2Jc4FiBVtTHGdx5TPMCmH8KpxKkZAjZQcgVNXTXAy3f1yvFq25TRhz9Bs2gFfp",
  "key8": "28PDdxuvUMdFwn2QZY3EU8thCKrJVvU4zZY3HRAuowAjFAn8HXceSbgJ799PxYZ5zgZEin6YSasdc98fifkEsH8Q",
  "key9": "3yR1J1DkdFLJvQg3K2RkLkQvMf8X34EKoMZK33XF9d2kRhjPzzfhDLw9HS4arg6zomw8jppUF4Tr13TE73viQMBL",
  "key10": "26PGxmCtAbobVSgooon86XKjNEPsejAxZ24ET9P5uZ2dWNevfxhYdC3ExN5aSWwhMz7HqfeQzqPGpTiUQfkSor5Y",
  "key11": "4b7PrcyogTGiKDG5ifoynAZhCoFy7tCYH7xSXnTJFPL35PgRvv3wv8TrL4Zdu4VT1x5SBhvp2p9f4jHV5SRYgKzo",
  "key12": "4pMxQa55SgnAYJx6Bs7wcddqzyqQPFeiDkALny4vxa7yDcyJWZRCiCTJguYiAND9ym1jBEd8r8awXveQNyJpUdu6",
  "key13": "3yom2Djtgp6HMYLQaY21SR8vDSVBFypUDULQu7gL9mRgWGeZG7higxbsFUimxPUxroNdK6hSW7b6au8YBrYWqPH5",
  "key14": "4BUiexXxBY1kj4jj9poRerSR9GuRvyuj8YkKGbhBBQPwf5KSoCBTKV5aw7gH4syur9Hvos3eyEqg3Gjs1jK1eard",
  "key15": "3WUA2apJneekv3xZ8U14gu8J6oQYW6r28cvPjMt6Xzz6VJ6MWUbZyQd4AT5EcMYc7biUCRqfLaEtVL5o97ejLw7T",
  "key16": "4Erh7gc8SBZQ1Jn8edXPbPNtJHZAZmHtqb1wyfSEgie2AuG6Cnwsgm3FmKVGj8pS6GKo3dUZbbXt7iohSrtKuJ4p",
  "key17": "5BFuPzJPDDXEXPG5dVBCNvmZAxeoFfd8eSfVmTu9Trzt4DntskJonCuXCNGhQqiTxJPncZHRFypF2fdNZSNUegDU",
  "key18": "62jYe7tqYU1D3WvnvK1YCQKUJ685V3Ui8hTgKmoA6zE8U4t9aMWdNFHCFXA65L9L171FY9g7ATmQwJv16yjZ3LjN",
  "key19": "4uFDX1FBLGBKzDMdWjpzw3gmj2hdg3AtZNMGC4xsGrxpDEkuFvDufwqVDqsvmdNgSUg9fD5Rz4xYHcbmaENNtiRR",
  "key20": "3yVSifkvAjJiuicUebrdCSn9DvBMzoYnfeHCMV2zhxRixckHENGKRBuuqG2x3AFacwyA26Gs3iLaWHTKxL7yeghm",
  "key21": "4m8WSnUdocGM29he1ZDJDuFkFNjGevdzouNgGWHCRGGnjnmtjZV513E2cqgj9yNEPJKSmaecgzmf7fGRnZA57BBj",
  "key22": "2nHnhGtAxdQLWswtpwkhFHkUURFMw6NDrijpofPGPzeYB5eCbPgu5dwVVbZoym8aTtSuwhkZCar2JCMZ9nAqYcbc",
  "key23": "5zxzDUsF5NgViQGGytnbgXbYcgeRKDzpXk5duSxCKoTCJiZ45JhTuVUkFZgFAnB7HVvq7coz7tsDB8dVQACzqKJN",
  "key24": "39GGubkbviEb8DX4ZG8twNJny2PYxa914uiXKtdqFdC8xiZ6rrCC2u7wW2gZz1JfGwEA9nEmcjyWQus131HV548B",
  "key25": "5sYxej3vYiZMLdwb9pqwYR7C6K36hGSgUCm49BWYfSshskMEczpw9xoPVqN1YbMpHJB2gfoEwqGPcF1Q8SHifUFw",
  "key26": "4ypzEDkA19jjhYHLSk1qKnM2RSpJgAB6y8YmzsQbQRn2jJAVv97WHKN5x5cLEuji9DFJXhrp2em1W2U1zmfSMEbd",
  "key27": "5Zd8iTTurE4HhEajokazKwFiSqoSKj6WQSbLBFbCsZiNguyHhHr6wvMufkbYQueZzsjFo2fQdThti8xKU4qfKaAw",
  "key28": "5N4fGpdrNwvK25J3FixrgCRu2PYPNEWaLYKCTiKHVsP6VzJwWSTDaHohMuvMuEyDe1Ek9LUQEd3dLLBkU9EvC9cr",
  "key29": "5hzmJSGZaVaYdCuXJ1MBigqDx69CXPoW74ep74nDiEUL2EkpXr6qJzo5TCVkd1PuKhNN3eTozf5CvDZzSmCKBWE4",
  "key30": "5dixukhAYGrzhH3mAQbwVpptdY7T9H7kagd89Rh728fwei6ExAee5Ndbz4juezebJ9zCKyEb8hFW4diHQSXQsqtc",
  "key31": "2qSUwFk4jrQgX3MBafR7WnDiLuMX4QdcmQZuRDuHfcPNbiLf1Em5WpLnteFZkJ1QDqpueZZVxmzTMx8kdovo8N3s",
  "key32": "VgPesZiywYBz5kkjYaTZzYZrJMZ6uS6qPmciX6LZLZyQeJ6eHPcqUDmcHjbdMDnDvd5EfLq7gHfHZ5C39q7YGnZ"
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
