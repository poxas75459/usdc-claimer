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
    "3SbnGMSa4nRwzbkqaxSJojZunrsCUbuD3hPRpX8c9k8yiR7sXVKpSKZY6ZkKdeMYH2Qdcu5Y33ndC6K46dobQCJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ut86k3xsoryMYakH8uBptUA6SdptencMXdwEbt7sXKCKZsToANXz4Vv5oUt7Cp8mFAJJwY6mjHSQNye6FqeUpmw",
  "key1": "5bk9LXv6sRCisggymUDeDV8XvMMmS1iei1YoscRGipVajtedJjbCRjRMhwxGrZr6Gm914M1pUTTbcuphWoFE7MZc",
  "key2": "ECuWycLyMVFaRmJG6bqZnS6rYTZCTrGqtZvPaep9Z9W56osrezhA1HmHrXsDzyDCdavGHkkARRXyKuixoEP8A6H",
  "key3": "3W4KCBVSeiJNUHSzaTJkJtrFifx1RtmegwqUdbYo6i5BoVrAARBZ59gxwQugBQ4JmyNrP7273RhURVH8njepp5ks",
  "key4": "wiNy4Wzs9bKCe3fusZ5cMv4MpPMeHkEkfvq7ktRje6R1HEnLAGHpAthE24f4UhGajaCA5LZdTWvYhbVqYRTkNUU",
  "key5": "4oXFgt8T7mbNqVjsXsgSDaCedycTmFqEnTRxdLUGPx9WsCo9Ws36ixL47UicxKNvyRfg8YX9uwGh4xCuG9VgCB5F",
  "key6": "gDaJq9ubDhp57Ez67yPZHhmUmwV6o3Yt6yYr2YStYe2AMwtEcREQSWFnjAxc8Ct9vjrtwTurMQqQQ9w5J1kntfW",
  "key7": "3G5UVJf6qV1CNoJRiFf5mUskXWn9otMn5NG6sUqErBS69zG7yUqMWVkoHHqSjXdaTvwTW8Un9VZyGvaF3d1169KK",
  "key8": "3awqdpvoV4qWdhh9MSF6G4UAzmXnmVHhiHC7Z5oEpSdRtWrrABYV9JHXUyXahhBYmMbNsAzH1NmusYNytRKF2dFW",
  "key9": "3UZCvT8bx75c2y2mFDkkE9utUMXEoT9heh8vU4PXfsed5P4jtSk7JjSZ3oCmczvuUAbz6tN83s9joxpa5yTN8eZt",
  "key10": "2gEcnPwbw3GxEJT2CVL4MSZGDAKTmFuQ3QhYM1k8SVxonCk9A2R1suRv7DiYdx5CD4rYnGL36B7yEhQ4HV4jAHKG",
  "key11": "5FUdVKkx1y5PszuN1sr3zAj8C9wfDoBFFBaeBPmcjwQ4R5LUoafva1mj94A8akEjd4jhTfRLNbjtzmZ5sVjxxbig",
  "key12": "5qge9hPqDGMKYYizjmiafudtKq6uHCmiAR7n7FP8gL6g8dK4RstVt8GKXqUo4Q82HwTw8GMdcebcjZKGE5XKho5u",
  "key13": "2yLX4xzRzvhRSRuAG7SDyZN2zxETmyWM2uA8HogjFNyJVoNh7giavXB91ZtPodT27x3CmmCnaw4reYCJhVEVbrq1",
  "key14": "3kJ2YAtfpUAMFbttCbU7KVP4xt2UehHHsH2VuEuAHXuiiURv9PcwB6ez8Jd52BJHfRZSUZiFQo3KNhfEZ2MB1iwN",
  "key15": "5wH3eBeH1x5ZDBwsBQJXaz5233PjAeGFs2DDY9Et7GKYfLmoNYX9VrDXN65WcddU2Y7w8ThtVc6aAa7qNDPhf77W",
  "key16": "6mcbei53JmwBCzftR6cqJyasv8yczt6FXJAr5o3e6E2Eci27ZA8crf4nL214Fz9khtvVFBJGBqi856a8Pr32pHk",
  "key17": "4VfeTA51psdiJgrpcygL83vRab1KA3zxM7c7srTSczGAiP2PqPdbkTEVSMJ1LwjMjRDyTBKchFT7wSZaJPTg6WsW",
  "key18": "4EbE4S1yYfqyjgkgzemFLTK5TsdeJxwhhfPhoanhB9Ay5sh1NgnSW56FntdBxgWNG2vP1k5kub87QXDRBWZTFYiM",
  "key19": "22LmJdtTutvzohj2FVGn5QVae7QtnTDpfmUrgWT9Bd3hW7TDVUCapRat6diWCchDhvdSPZRb86jPku4gX6TY5FTC",
  "key20": "5h1TKLhbchr1ZLayAnbiDEsRLybdNQrq1bVygvVM9d4gPGaKuRixujatP7x1phWQuaZtYFAu1WitKwK8aRyKXnvK",
  "key21": "4x2cm253DfEEVCAioXXfKwQRhSiz665xndCrSLDPm3WEH1PCFVfXzXAL11uuJp5fmrw2912mZvYTYEYQt3v2198p",
  "key22": "5Y4Jv8a8Mb8T28iT2KadrjYxA9dt8MkopmFBBrTop6JVkJmJkv6YKXtaxMntirzGZ4DfuR1yBpTLFw3TGyN42FAF",
  "key23": "GFeEYRNzXSPrcy7wjo7GSBnbapmvWA1AT5n4VNgDpfLSBqYYNdJab256178N8qa298xBEnygJvuXupucxMFHbEw",
  "key24": "64hAR2X8du7ghvRB78dcQEuFXWupvPfPX1VpfHvnad6kmM7B4WxRxTQUUU5D7Y5CPjHxRqq2nq7yCNp2zyxjCVxw",
  "key25": "4q3SxDVLrNZihBbVLhwqZWZviKKYN4k45YsdZFAFVr4C1GCgCdP9YJVdwQZhfWErNpz9ASanyztSWGz9Em36QW1Q"
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
