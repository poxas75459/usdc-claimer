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
    "3ajnGLUnL2Qt3z8pdKBwaHZTkrYzNFRySmeQFkGqNcyNFhv19R2GH2LJpznNkBNW9sVmLRMS4YPR5X55Udg6TaxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ypDfUtvbe342AAA1SzHFn5Mjj8dc4HiFba86skfuzfydGWL2ABsqADpfyWXTtzfzhXoKcJeaZx5AdxosvCpRpnv",
  "key1": "28KrsvKsrt95CPZfgF5U4Rwr9yKxnMCadNERHkK9MnQ2MGG5rrgBPHHpcmf7xAnRbEgD9GEDz7fe5T9oqgCaBUZg",
  "key2": "5D8sKr6rPG2nW6QvrjeEeSaY9qaAnFPZWV8DcyTRD4kDmgnMMzs7ybA9HZAPyQeL9k4P44TFuMtMUgDvnUMWrXdz",
  "key3": "3JxrkVgFN9qsgqU6XoEPc5uZrWQhEyv3uMKeTtmZdjoZUjQk198xtXvnWjwpT5jXY6qbfxqAwTiuHDx82qLf7w6W",
  "key4": "n99bjTVfM8dJDSEzk6CAZTtxE3EvvBijEJAkkbYCD4aDB2bQGTk4AsJejNN5sPPVALAASimNQYn5XnsbwAsaoSn",
  "key5": "2JNDoxfXA9YyKp9MvEppow41vcnNbSPe5ihhaig4BNAtnzeFBNQU3xRaPT7PAjHS3xTbsGY312yCX5rcT2PgJnF3",
  "key6": "61GxtsDgcwJeHstK2S9RVU155c4hsaicf8DQbZx23A7i8Ah3hg9rs75votkymA6M93kRc5hRwM9zqU4QcUqLipyh",
  "key7": "5JA3kGeSQzziffrJWueE9nmSYxAzE8UYNSRV6ypPkRJjpqf71kfnnTPRnYMx21uuU16w1M5UJbsRRgmo4uNy4VNG",
  "key8": "5KmY2tM2XtFQtGTVnkkopUeJ8RRVyXecnwrCmRrr4HbMdzEQpNi9fTBXEAbE6sczEkKFyGUFcbBJfA6EpBqi1B5T",
  "key9": "24Cfab4KN1MX7JS6iut8fRs5nTTp4PoRRbsTZpSdMSLjYQSGstta95HCFgrMuRLj5ZAn2uwAFDJb3KmM711QvuHw",
  "key10": "5ztbGDTdHc8va2gGEEdexkBV8LYNrVByZo4v5aBNeumULXTMRR9ficMthKASqEALkoNnYbCm7eBABLiBVtyfXx3F",
  "key11": "2bLsRoYX9ZBkoWRX7S6gMbZjbXzoW4hnkSwBiPumNcuigJJogsGTZdTVtzh4SkCSbYkoFr7mRFufg4L5ArFBAMeQ",
  "key12": "hQuA1DtnJ7F4BpPSFd8L3ziainLjey5yvp91vGvDDyhVBKSVQpzwxFKRwwckM1oYjWr9JjFwtd1qJkfK4zxpkrx",
  "key13": "3XbXG8bFQ9yWo1Cxh4iC2U2n2uJPtn94vjAqs5T2zzLQpLQpFt7EjqT2zrn3AevPinvDhmHtVKGwRHpJg8oJzDso",
  "key14": "ewCERkihRTrVQcm5xdGQDrYTLiNdNyDCzqhxVcW4ZzXzLNmLWa4445qBYG69UqeHEiUDVesd4Ai4W7Tjb6psxam",
  "key15": "3uWEoRxmRdjhWVtKnYfmeBwSbqsrr1RyidDvgqfDRZw5a8Cbdi9afAmYgrEmrKWhQFDbR7HndPF4TEjAGRQUvsMy",
  "key16": "5SjFdprW7mDiFGodTRioDnFeRfoLNxg3hGV2VHdFPcSQ5JTSSsCRXTrKuD9AwHBE4oSAMLGfcFQnK1uzhy7EwqRQ",
  "key17": "4c58sjW4EGdjjKrfVSmqsakFb7vooRDKWSxP5oi7qtY8eAr6WZxB6zinPctCAWw53CxtQPLZGtMGhcmVoVQbzm8w",
  "key18": "5KLHjnhC6aPVjCmC3ZA9D6xAKFvongiK3iMWKHMyDXawGVWnuZ5v6JvyL3g5VS7Xvt1KZeK6pc5GKjMGjtQe53td",
  "key19": "P7Qiq57RQwfZX9VFJ2b5tF7gcxrA8kmzFHqWPhXhC9g72YHxj98XnMC6Nn4CWY37WTRLfocU8eo4s41sFYju7XL",
  "key20": "3jxtRh8DBG1HF4v8HUCKBtBFDcRUPorM8svec1Zpu45vHumrwwR1R65N2eZLWzmfAqVSkxj2RNzcLftGDPWpARUg",
  "key21": "4QbV3GSBH5P5Cr3cHGfWzY3JaqTRncbGaUqXCief1XawFnL6ZNDT1G8xPzzHj8Vwq6foNqiXfWUmgjhtHcQnFEFX",
  "key22": "3rQbjhaSKmMSxoyD8tFpuptzHbZAUkKvG8y8LK1mFRy3SiQ6DNugdJwK6n954Tz1bSVu5GKmhz4HTymVhuCYqmo3",
  "key23": "44MZQwks9Rw2UTENQeomsKfHk46fXYzj2QbnnZzuKG9JuMWa37io14tb9gcjzSiKbsTB83FZ6JBeMYGWnbc4Mbxm",
  "key24": "56DF5nUGpJxiRgaE7Zpmou1fkVu37oPWh5eMsVW5JPhLESnTqjtcAiJyZr3jWFfG7GEn7bEtpoe53sBPfzHvoMQe",
  "key25": "247qhsVp8o6gB92bfBCG6dbabaM9GnRAPZPuv8H1CguvJifiyjUsWzadTDiUUgH6TiFUbWLKKuMQRwJbrmG938gE",
  "key26": "3DXBhVKP1oKtjSyZeheqj5Cm6B6RAXVERhbySzu7rWJ2cRnVAa5hWKRvaeiNcH1xEg5AuDnNmyDXyAjFzX9x1FHr",
  "key27": "3HTcL1R1ReqptR4vDPeNyEc2feq21c6u7tMzYmVaBBhKDFw7hJLcqmHy5Fks75LVUkz1vuZhaShMGHPQh4w7KBHc",
  "key28": "34rKZxKPmpCGJ5gpbkmm9FW57n2gRuGwWzoKT2A36wARQjoiHtyjxB9qRRbPxEDQD8p4y9eFpFKcr4VDz7oLiMu4",
  "key29": "4yvu82anvStxyspnL9gAn5TCpDfM5ZWScycFViFwghT9mBoP8bZT8X6uLAuHW5rxF1p44i1TR8L8ARSSb59enc6q",
  "key30": "47iCGeXp7wzAKyWXjYrzLbWqrzW18L23JxsJFtFn8wUVYZuv8SPHjxkShFxWDy8iMvbmdfV4394Sf6rtNscnFm6w"
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
