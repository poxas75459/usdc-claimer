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
    "5DveSRMCCYCaDpC4Um1adfQeGEfcKJzjizfveuKVvWRfNjZTYdC31JUGhm342wSFW6pGrg9mfb2mCJUTZJJ7iJmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FkbHdBuTVcSBxqntc7GQ1VVJhHrSaqYUYVRPLCfscnBHgg9V4xaFrkCZDEbBf3wPojexi5iDnUTkakHi7h6TSc8",
  "key1": "461dgQFCC4MLR4a6a8ii6vtMPY9fWKmtXgt5sLiFo7p6SKvRvFBMJLGV1hFTHmWnEXY9vCLxziQYBpS6zgjabTPy",
  "key2": "5mmDG34Z6siKSP66eqb64hu2LVdRCrqwRRWdioUjSiw4pjdgNAkzhFubh2BNh2L51GkERHRHwwDAU8ZgMaZTL72q",
  "key3": "2Kbi7oNwHkBg3CE7MoaHGxWwca35wdSmyKeSkAbz15uEgDMvYZirwYr1ngRSJhiFfr7VWLTvyzzfaVwvfGLXvfrj",
  "key4": "28Bb71sA2oWQeekbSPj7iX4Zn7TSNssHL6TfxbMyQurkYPZdhLdpXvjH67mmV8x3htddQDbNCgvwYfBtEcaxMRsA",
  "key5": "3qFHDKcTy7pKZXWU23dazBYK4znud1rCTASjQxdorMKNtyzAM4GTqtKSCddDHb4imQ6qaa2NwFGZ9rwrsFkzJ1JM",
  "key6": "fPsCgseJoQFHujJfj2JXrFXFNYqfeNVmdKZafitf83XKgoZNvLDCPAG5mmoEer2VF74yCbayvkkcWXhChp2Bd5G",
  "key7": "4izWxdYi5xGcs11FMXUy6xPJ65miMiHbUBYbb22GZ7SyjVHRNK1A9h7qwZwoMBp6A6iEsY1XAiiK9QA7VRKGKrFL",
  "key8": "4jY4FMN1rkmm6M1K58Ayarf5dEN4455VpAWFz8iLQASG5gpphH8mT3FBfHbAixUqGq67UiL7XV9VvAQso7GAAdmm",
  "key9": "2Tugser1wUXmUMctzTi8XyLsDNFZxqePNwF8TAp4gaqVzoH7U1qKdrFGCB31KqfM6ig6zJeZG35n74gE7LFDb667",
  "key10": "2gdVLWr5sKan2YdeJ8raCV7YiJt1Z6fDvfiaVwEGTTeRUge7yvujRGZ2B967w1oKwNrkbPp4DNXDSLL5Gdb6GoWg",
  "key11": "z8MLLa9PJ93AFHXCRg9yJERmRJj8wmGeNSCPj8HGW7UkkGWyZFVJCHe4kvuRpKf7aDt123uuJnrNdScR48PgVfW",
  "key12": "3my3ejbDa4YNAHxmBvTMwu5svNoZFhmhYYDTKubiCytXpkY6pLKdv2TgrcKyH45g8xkBdqoZZqYhkLixyBBkD91J",
  "key13": "by334Wwt4RnHhsgwGmxx2Bb6owcawru29Nfka2CaWPWafd9YbtwPs8XhqSMVdvHtZP5igFzfy5orvsFxK9hWifQ",
  "key14": "3X6PXXaAyS4f5RBNgFuYNronVKoSE8P8WjNU8doPm9zRj5KszvX1WuqPMjKTwm7jkpriPiXqWSXZbKWchSbaYRzs",
  "key15": "k6YurijzTG3mohWLDgfYoeZRa5wH4h5YjQBmH41dCs7JpD2VHqtSZYUdK4bC29Q9oDDTtsyLPVhTwiZmAwK1VAw",
  "key16": "3JNQ8P6wSBv1EAcUV5nVKtfmxyfLJbaXVbbmhgZRuzxZ1Y259zo1UAdwKDBQBgCGTzWwGgbnEgZAGFY9CJ2BdAsL",
  "key17": "2PoY8EdGwpx3UUcvcwuhdiqSDMHfueyMUznVPaGcWZtZvy267XPcJASXDHXVWK6i5pFNZ2tAbzt89CXPnpEAEJmd",
  "key18": "3YaNJvUfwyD3k3Dq1yTNLshcctyPcuy3WydQGbH4zoZQHCPfLRwsthBQPQ7jqTbcdwXcVmMJVXqttFjgTaUtxRHa",
  "key19": "3CrCyxXQ96646BoYP7uqKWm1nEnCFNUHHq28GgeGYxd1gYqB6Y7axcc5QKhjc1p7pcyD1QMJK5z9nkG5LwuZGSKf",
  "key20": "34uABjr9Qj1CDBhi2Pq4J4W4vwbv1e9StbNF6pDiCYPi2W9YrXcQpAEKTvknMpoMHmM5fV5ciNyjqUNtZ41xC3eB",
  "key21": "51fZcyD5r3yhthEE5J357ooAiPp2v1gyPbHbsWoWgvtu5Zf9KaXdSSkzTPi5gibMTyMKotF1VfaGEmz2kz5h8aWA",
  "key22": "2guGEHTZ55hNMAQALcguT4zFmnXpqGfhKL2sTj3LvLqnd4njBHUhMr3T1US6Y4XFNFmMQF2uVX3UCMe7xopMC3UC",
  "key23": "3cGyyC7kfmqmbV27TK4SGdLVz8GCPNwizT31qpNTvKVDY9hJ9hP8dRe8D5FLovTdZgiUxFQHuNDT19nBABAtEXtB",
  "key24": "wsjYLK8njSWHanwaVtQmywcrMZs9299y3RYo4tcEpPYuMFwRsPLm8sGJaiEYesGwsAZBaQekgrsfqCfcSj52bcZ",
  "key25": "5su85qjELub6W2Yt55qmyhxpKDZd1yyuECqijbgPKPQwbMa4U756uzjVPUoQufPAqjtEGMoU82s3uN2wYhDMFdpr",
  "key26": "26hACUnbh6wfCChJY8cC34JKiFDEe72corSRM1j9Ftci3BhKTEDbSb38X6si5TbA6VV3Usnay2oyfYrGqcUhZZgH",
  "key27": "3zkN8g15JmhmiSnXUG1vW3kN5ZcKvuKDNfcNTpiHJ9bpTsHZXmvUmr9jW7pFAqQwoRFXFFVV72C9XBeNQhmtuznS",
  "key28": "24nnLoJMdjTZo3mJDFe36uMYuxTVMjBJkgjQJpTp5rgrz8Yz7iNKfJbMm9JcrtcjAu6r7dMy5pB73ZkoAgWCfSUx",
  "key29": "4Qn2VRKkGJGaqas4vP6fHMZTK98vmkpR9CLbEVAvs4dZzS3cR4Fz5q7NHjCuWEbRLgqavEXXnv1uK7bbD4DEaiXH",
  "key30": "226wZBW1Tzcd1SXzjoyvhx4L3S3aWTcSBjNhbb5hEnVDFEUEkc9UnFD5aDhfAd5jpWWP6oLrpDPERCy22NcWAjBT",
  "key31": "4b4JGYjnu3ugFg79XQe2tSPxyDQDnyJnwBVR6xupuT2Q8H7ByXpx3DkJ3LNYxZfvzN95S8NzoLhpZSpQh97N1vvd",
  "key32": "4pEKHcJzLaksTKKAHJmqq3DhQddY95i9B2n8tuYN5kBMwR7NixScUgfc6iDD8DajE4roA9y24GN7brL9Hfcfp6rQ",
  "key33": "29XFJy9kLtgrkbCGb8DnN3gXnZamq5vq8ogjDtCHUFC829vEVpz6sprZ4H84R8nePFEmSMeZkEYHdGAJXWRuq6zf",
  "key34": "52bDZ3uU6Tg48cuMq18hesWLeniDxxdF1ZPvRq8yK55i9J6xexozR3FJUAfSiJTwYmP2vzoXmxL1LEZi4k1EAwr7"
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
