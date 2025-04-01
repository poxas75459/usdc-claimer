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
    "2dDaYMo9cKAsrHBhg6JUmuwkueKTUmUpW8sgCa8fjfMm3oQomF2buZtmBQDQsMUjWmmFUPW1o9VLnN9saFULfbcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bwUinuSeVaDCgKyzYUAv95X11MBg86j5LyjfUhSGeNo3J65cQCrSZNPeoohURvru97oJFZMRnxiyQRVyrkHVT6U",
  "key1": "93yAxVoZLjTC78J3Lv8Lspj941AQ8Hrd9AfXMnZb6A6SFswUpD21j1r4nBNNihCMB31Qt8urVY97hUy2E2APbwV",
  "key2": "3Py8JNEkxy7YTEthND1CtuooqdyCkxCwmUunLrjDx48M3zBSLTPKjpEimnzYSWUFG1uU63QUKJFNbTczf6XAKufJ",
  "key3": "L39Pbs8jjF9zYe5t6uF7SZpwGRdQ6HR1EG5qseLKqiKjUM4mf6zMB259fsXofQcARhVnJitZ92xppPGGvUrAqAy",
  "key4": "5UQxxPbtvCg6sd5C8eVvXq9iGvu2xCMufdgdLtDQ4tB6HfNwPjstPjddG1ZccNaBsnjp7sqiddxK6m9HSpaVcGeA",
  "key5": "62paZACqsrURh2Qf29GUcRskyuPKC2VqeKf7b6DMyeH8kZQcocMY7zPaZCAKHnXY4hSmCrmUMRkmqwpR2r7AD1Qe",
  "key6": "5ZT7o9ntgBuYoWpNZnFjWSyuqb9ouk27KdBHcTkRd82kYXymxRMAmYtXxG8y62Lo5SMRh7xAfzxMUDckHEmwWFTr",
  "key7": "2ninFNCL5FAx5DzFD9aPnSnQLi5JFpsy2G6AJNvvVQAm2tWtzfR7Kg1ZwZ5ENsu1iXZRPfFaAtNQG1V3Am8wMEgY",
  "key8": "5ZQyoYXFDP1eNH8X4aWeNr7j2hP8UHu9QN9ryrGZ9ez6pxLvcgvGWuVaNcGS9BGeKK7xWvsqimPb3tVMBbFAzuPD",
  "key9": "3uHHZYH4Z8z8kbB9f36hQtg2UqDZmCSUFDFqSPTAPVnRTELCNVhURLK4hj6BmbNRZE4RV2zW9Te3pWbhjVW5Ad24",
  "key10": "5QsKoHtSAzW1Q22N4P2DfT14RAi2cnq1WWTytoLm8ccTpiq3dLQjn4iDxEjrsSLWYGjguZFyEiJ46sg4BPceWFso",
  "key11": "5YRr8AFboR2TvUjVbX2LMPpRs62z8id5cwKpHEuHQMpQwfFdBqBQMax8yF9uJUf7GdDtnCbduFAh5V3fnVUiB83m",
  "key12": "4hu4TsAgGkD8k8e7RLZN1t4tMV7KGJjphBtcWXjdDxLadE4XkjyYAXK9GDa5QHVm1myCFJbBGVBpvLsz6cCRKeG7",
  "key13": "5Cw7Rh9tZaWcG5Xmjfs8GfCjBRGPM4oXNDJA1j7jnvZ67sr4iRE4JWEwrwGrydXj5p3JhMZsbxq6xPKXjHzSx53Q",
  "key14": "4UziNWmPFfdL4kTcbXR7eDubtEAs8tQohT59YsAj8i1S1r44ULmWYxPdPLb3EZ6kJLzAt9JAyJvtcBgLypoxhDBG",
  "key15": "4mJ6Ttk8uadhR8DSDQetDfFLXxxgBYH21mX7U2oTWFXY98Es5VZvKA29kKFkfir2cgrddypFD1RZBz8BVgY61ca7",
  "key16": "4YRMRYXYcwaN32zi8cYp24cccZ8Uk8R7eGvGEUDFvYuZDPTW6UtMe9ZXv2mmV3zet9W1T9Ed6ziDbuioP2KDDqip",
  "key17": "3q4EnUHK8V7yTzLXgekdy3kZVESxHB3Ui1B11GuUgkgoesiXvr4UPxdGpJbMpczkvgqa5deo2AKXqrvnsf8FH2br",
  "key18": "WGqoRMBV8Yv2axL7fpHgz1ackLnj628UdZCeh9h2Gn7HTWKfMqsTKj66djzmUsg9VnNLTC2PTcKFbAEQ5BLDckH",
  "key19": "42YxjWEdrHkx6Vv2UAuaitpHJHPz7VZ16p3jG7peabGSonUmGbdAu5Q9KYUF2KoeVouSPmrDq3hCjyv3uBArFcUn",
  "key20": "2myFCAcVVDM3eTKvb5PoiWgyQGnnjhXHy1zYEQC2iZHYEEz9yeaWuCudAkmaCXBCRgvYU1V1kP98NCp6HGHpWoQV",
  "key21": "28JoJBK6JXrvg5M21bNue7LZCfaWtV3C2rDANoktYadbv7wTAMiHP33Fbo4U4Rxoy4R3nno3oDsV813HXi6Ayxzo",
  "key22": "2vAt9ZQ6iuon81RqumYi2NJLeoeC2oDE7BXfUZdsho1rdke5C9VFE7Eo45CUBsPsY3BaTc39PHsLqUWXBZPJj3g2",
  "key23": "5G9SKxs9n6nyvT89CmT7Pxh8Vf1njwqPQbAhpRsBxafKkVPPTZMvRnStyMdSmodqzV9aQSYHiZDzeXAeMWUG1jkg",
  "key24": "2FNW6NGirUr4keBsp7wWWtnnF19d5gniwhRZMpk6yWMh2JEcHE6WiowYdcDAEQKNJULG49uLTyWBGmiETnMajEfD",
  "key25": "2wyLRzuCxE62hiswjbJnXopav9iNNPio2LnraEaP3Lkk4K3Yro1GXxsogagFPkVN6WoAPeRzj6CBW5TWtmCfxZ52",
  "key26": "XJWmhQF4Q14Vrfn32EqfCkpSWZPNKM83tiCU8xNyWDyiTZ4wBc4TRSFpkyy8BYbeHhgGr7Sp5MZTURE6weiBaiZ",
  "key27": "4wCcfCU7dVxzyr86SP3sj8miXVtNJji2kCaxiUPUkyLZWHCVtzzi8ZPWbCKZsEQNQrDuRRB69aMQz9Rze746fcjJ",
  "key28": "2xRV8P6xWbj8dEGBApqbBwtyY5sgRtTr23EYRb1DFrFCavAS4bJ74PEJbV9eLtkr2cLGSya8G22yh8TXrSnoPncG",
  "key29": "33vYpWXG5HaLqQePSbHMbLAyjk3LK2YdXaSiMYS6dACBAYjGL6wTBx2wu6tR6qjpejFRfXRc5P3zFKPpjpQGYcuW"
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
