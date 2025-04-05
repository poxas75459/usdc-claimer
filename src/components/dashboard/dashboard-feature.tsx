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
    "3RpqhR6nxe7RdNZShRhWPa69J5ZLT4T2hpYAccmVec1dnw7qzqS2WGFbA7KEywV1PeNNoMXZFQLiYcJ1NW9rKNCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8MYx4KxtPjQS8wvCvgveCjRjrkaQjkcJMLxzHpcboc38aGywiNWKMKccv7JL5WKuZzqRWWuJJVzGV8xEjhHnPb",
  "key1": "47xnQpKqaQMYEzHsWxszzJDQcKsDtUfdFMdSV1kbZg9kFLvAeGTpe8jy8v8ScmpbX5bQX2Ds6W5oUKsHxJxrj1At",
  "key2": "5AXnFGxU5R3taRFSPFUdj5f6L86DEmXWLSQsnat4WMUPvFm5eUyMvAxxRn2WrSQxkrg5hXH4fbeM7j6brBGWw3Rw",
  "key3": "2mn6jFx2geqfQaBX57ufogBmYjjBuzrxDYUB4r7bR7sK97kXqJbXbbELQ39xdeb3NhyotMydpgu5FX6YQhGg8gwG",
  "key4": "4oE4tyScjio9v8o7xtcB3d8H6PnxC2FRpXcoCZQdJiexNbi3J4oyEhezo5QfrtyDMLn5Vgbs6zd7pUExHHz17jAU",
  "key5": "4tRETqFNaa5PMMikF39zhuNkQSUybbD9KbiVWoDF75zDFNoNmN8iE1jA9tUu3AAB9eJSY4fBpCuGrCx1sGvp5pQm",
  "key6": "2frnD9uwWDq2fiWkWbHFBt1PDEzQqE7gLg19Uh6N6aJFzgPXkGwSb2hnjjvmBYqPQULpSVFKDoPASVhECGgGnaF5",
  "key7": "5SZCCeg3jziyXx77kWrPuPWY8yS2HZahsqdXetP1BbVhtFTt1duSz61YvjCoTTP8JuNJka2rcQACcGERtKQBEiJk",
  "key8": "Km4KnAvFCg5ynsdvDV6A6WpQxrTg5oGcFwgbj59Rd6SDLABBtzPBhHPnjQ9Q2PSWTg9K4aY9UHXzpdAP9kLEtiY",
  "key9": "3tWjBkULeQeCnaYuU1idd13684PzuQuHEH7KetJUhZDyV4iEMq7XNYXbhPhx9thutPU3A1pzUiC4AUdH1VuRxaCo",
  "key10": "3Q6WnSV8jRJCzFVFQo82DZ6AAKTjJTi5jA68nDW5WEq6CcfiDB74GwXTYk2wJViGt9jkKZzVq4ZXD1Bad3BZTVmm",
  "key11": "4X5FFJqyRrSPvH5L2mBvMe58dZAdow1EkT8xrW49g6M2F24VsNGpjZ96Uu77CubV2KokiU6Mx8iVViutfopEKVZ5",
  "key12": "4R8ocicNza4mh16yngFPZDFhRMQw49fLUS35kYhh5N8yao1s7vTe22asgLep9AzSs5PEN9monM7fBUhZfVWiWG4z",
  "key13": "25ycfXgM5jE9eLxZ43k43D7pWcqnbNCfewca9Knuy3ZPSR6FwXg8cZpiXNUvvei6ky9bVJzBoniVcpFwcnPPLGhs",
  "key14": "4M6VirQyqaZHPSbu1f5r36pBbjSn9SN8vryv6q4ZM8Grr4zZ4f9cCJBXJctNCZkszXan1D5W7csnbrBqrcNGXHax",
  "key15": "2VqN6qFKsjunCkN4zLxxje6Ctbrppp9xMudfVBLa88f7sqqGbwxicyHaFgbDGsqwQP3GCS7Ws7jY7TT1enHrjU7z",
  "key16": "627HY5yybfvnzCjzBdsoRtpJzjxC2rUiinXF3wq6iBSBswLaJxaGpatTEcWHH4qfz5qiJdgUgr93WA99ebpSpSvJ",
  "key17": "2ABj9UC1q1YBUW3HGsEf74gFwAWCroT6CkPvSU8KhTWnT6Jd6fDggUyaYxZJBngQBcrvoCsKJZwcGrwpzRWrHy4F",
  "key18": "22GogZtgDHNrmtW1aQ9JbnBmuBXHxJki11KKhaXmtebpZMrWjP8q3dYZ6wFbyYEUdWYzP4H1Ljw4nnBcpTchotqG",
  "key19": "4Qsr852Az9QcysZ9QRFuvEhhXgKyDKdz6X2FSQDCYBvL7yhrifSHESmfMw5FxwRrZ138ZvHUcYqhMA8SgZgXy6w",
  "key20": "2CYEk9V3KEre9uZ732NRVcRNsrgNDKFDLqU1t5wyPJ5sfYnZSWavuP7ZDNaBwtZAXUAK3bL2jo2LuU8FiV6sefir",
  "key21": "22rdphwQgDVGbazDAWjidgKcQwSQPNJnxaaQMzxhNn8L8USYHXsaX1dnvoc8rCAyfVnTywZ48eMjoqZ77pWaNPAz",
  "key22": "3kHeWYnPBBizW57KZMWpanW8rX6AEDhqo7ZhEPrhwDEFfJojuz2F7U6y4aP5tnSmFGyVREZVSEYVZRbrpwR6MZwP",
  "key23": "NkvyGSLDgLCdKMEupkJQcUwQM7FS7CiPd4ze5cs575otC8EAn9Cpcce3JHEUbxgte6i54M117tmL77jZodysz4o",
  "key24": "2Q3oxLxEGqyYgxUaMPGEfGeMmBVgss9u1oPf6QM6ddfL7DfuMHSWgjZktaChLbUHtCqgiHp4SpBKsRkbYUcKhgNT",
  "key25": "32JTyCqhRnYrvu6dR4KgckRbkwQ3xRYPiQwRi7dou3uQVQPvsBhSqH1XfvqsoW3daA3TUUXYnyZGamr2q6zn8DPP",
  "key26": "2cyCZqk8HNsggeYN7hCcNS8BGCqhARcLsNxzcqk4aygcdWrsCDqZoh8txMiHZdkN2DCKTXMAaUwonUbyxWsHtX7j",
  "key27": "57SK8XrUTBjf4i9hJyKcEPAfWYpFMWJDWwrtTryX1yAVRZJfvzmdLsGpDMwVkUDMjB3V2gocH798xstwWQY6Ntx3",
  "key28": "4QJBm6XqFywDXCwauGMxjfGtXr2RKPFjFRi96gou8pvFRnaXW4oAfM3Yfw7LcLJeFR2r1TJYZM1ZhP8LoLNo1X2G",
  "key29": "3PfFPtg5ZKcdJDEMRvgNoyfp1NNsvos8QVpxdwcEr8MwVEfDLCxegwosf7GvCeXrnnmHCXvDrJSv1CHfz4x3DF6L",
  "key30": "Pg9NFJziFxPbLwNKEbwKHqR5qm5zBnuLY8iDyDDa9ApZx7vWtpVy8aWBaCXsP5R4DV2AR4Pm1J3SqUSnMtZ9nd2",
  "key31": "56sozi7Xo6fGFxFovtyYattRbAu1Mt5rNoPSR9FWLHDfccW15ukLF9JVoVygQMzZukiyJe3iRufMAPaZmfrr7Swp",
  "key32": "3nFtBAa4qaSwQSNvr8TPZqPtHcJv7rtdDCTSzUiiyHxkBqbCDatR9VB1XUY9Fp7Q7TqhkQ2SJzEoUU4VkKGJMFZC",
  "key33": "5DbUfCEp21ff3ad7KS78KToRadCmtkFeAR3x6S7cTV9WW9kdiSCXT2HB88qqE4V5hv1YkjxsKGTY1PuiRy58Enhq",
  "key34": "EvWpmgNF28m5hwUK5VLDLG2Ud33pwFTCAvoo5SgKfkT7x2eToWiquwDK61vnwJ2ReHHrgC6jwSzsnwktefkkNa2"
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
