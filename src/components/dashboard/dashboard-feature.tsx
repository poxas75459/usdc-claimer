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
    "4s194MEVGo8Eh1ipX95eWNWsuWv7qmXux8KfxGt86HrvLm6zsopJUQeh5tX8Qvz3SdBz3RX7gAvVMzDxwbdK1cem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ykmHZuYqbTUVfPuzAPwMMjQ162BLPH11mfHqbeb6M5wBCTc9PG3HMVshVEeWSyhV3b8mMMt3rn7RoeumLbm8Vd5",
  "key1": "3fAM4KhdAJaH4yFwGSp3oaPhJacNum46Xncs3thP5fYpMU6aF5RLNQFXWf4KmjtMX13PUMT8fexg4ba7yGTpWPaJ",
  "key2": "4vWUCe8VeH6EVPZMZgWAo7A2vcaVgjWj8mbC2pLW7BZwRuksMfcjTngxXD5a6VrYgHtLkfPPFW9DpjXtpKeANmEn",
  "key3": "FZQrBN8BwpNvacLov4TkpdDfKwK5Hdq7qERCFzcq1MiUbGVt1C3FoARYmDMWRswZou4jFqPG54qHw5VDrkdjq9h",
  "key4": "9HM75Dwi6ubweeJtUTEUS4gfgdDiY2mwHiNTP6LSNmG71jAoRFeseWdKw1gHfVRo85UfQV7wtUW8f9YL8AC38cp",
  "key5": "5dfdbL8UKWSM7GnD1uiUJseaxMnCqsB18KjjsqzCom2mB2h72arQesG7LtpFftpFYmb9Lu6GmpY6kg2jKvFDikyX",
  "key6": "DT9uyL2XGFdzvZTYg51DKUZEQHebM6w4wTPYi8LtcmpEYrFiLiQBVaLsdkW4ULmdLgm4mHHH5qbsXCumhZrK7BB",
  "key7": "3LxpPPeLiRnyFZFvvbkc2wzmm4ibH8W7Nqx6pUV9xTsBr95os5kDcX5ZahKLTqd5kwhbzjn4AmsfdMrY1JpPs28t",
  "key8": "PgnNrTJCcsYQtfixjjyVKnv3R7dRSHZxcTQeEY5MzbK42Snm8oPBw28UyGYpwhG8KGdqJWmDJxzqvpT6fRYikjr",
  "key9": "DYF8S3f8MdeoEV63s1Z91v5BKVY8mkNFE1ZXrDrdLmScrTsrGoiJRBvDqhacxE3CD8bVaey2LiEKDXXnPedivTg",
  "key10": "ZJSCYYskzWCQ7fk71Kiya1YnqJGDv1HF7679FNdopChi2QoLYAPNyqXdZf5EEy1kqjeaJewihzwSyZoE7p4wops",
  "key11": "2FCTfM6MCci9qu4e1W326HKikJFb22eGQYz2T9xkXzXZ7cRnFvw7peXk5qFAPzFZFNEfLJSHq6jzWGw9HYisQECx",
  "key12": "291zPGeTuCSNiy4XPfxdbUCAEGH66hXjpTKTXxBQk4qDUmBvDRdUiBbyuhjqCvkhcFM7as2X5RoyEgVfa5gu55Z5",
  "key13": "69HW9f7uWWJgG7KmpncczBZxjNo3ADENdhajtKveo16DnKbhjqDg9PguZZUwEJp5xjKpHeEeaKjtw8jsdfNiQWh",
  "key14": "33oD5Tqw3vSYZthPs9Hgp2UiWPD9Rsv9LiEHJSHwuRJ7LEThE4H5kHNfXFnUJie2yAhyZ3zFu1vm5Q5FDgbHH1QE",
  "key15": "zUGMbnitwPUFBqx5eVuGeSfQtkRqZ93syFzFaogy5WaoBgHdBeG4Qv1AFzMjW4MqnYAoja6sSrd2MCijStJhLZM",
  "key16": "4QDiFajH9Uko2FZYfrj8s4hYfXCM1nn47iopzfoL2XCPuUMdh8Kddz8ows4QjpfjhLHJ9vuCQJJLu1Mom4NfPCXK",
  "key17": "416sqK61qQNdUAD1mEkdttAkvVwM1AGZnE1jSi8dKFmVZNH6TogKsmyuhYmicyUMkFT7EuAygAeH4n8Fk9wz2ZiV",
  "key18": "3pEtMLowqH5es2UZEhPJpBTMcWjpt2YpcsVar45LsAQihHV65A1rXCmWArtv1CB3ZPrFLsyXH9eBUMojqmk2MFfX",
  "key19": "QdmSyXSg7cnFvBV6dRm98e3qsnjUcGPbyKDd58orsgEyo3RoT44yMiSar3NJVzP2Ccaxzs6xkZRa1c5kXdpx1me",
  "key20": "4r26ekHwTq6cTpygwCoP9bBJSriTUxJ6XqBryY7VJCeJbZAE9YWTcTMJjWbsXCPCB77NJsR5LGthxbigxx9UdKyY",
  "key21": "3y42LfuQqHXLHVZ3AfjVGb8kpMdD17tAnNrpoWPUwZHE8vs95MEwGpofESetspvTXyaWUeZtaSEwLzRT7U8A3s8D",
  "key22": "5kQweydgWiPdyQ6ifh4Pj6QZGMknwiuibkx9RtM8vr59xW2QVfxeB9BecdeYv2NnUAkrJ5wqH4HLGu2vsdi1nW1V",
  "key23": "2NEJcihRtfg5httZZ7mTMCpbjMcaC9BhRUGJNze89PENeLsRDQxsoA7ybQJ3dFnXT8nad6ghCC79dH97eKwu1D5x",
  "key24": "4awGGpjZNk81Sdjr4o8kDo5ZRKGoF7LFRSee7ehDkACoWY1DyKkW4QtcyMAQkca7McZDC5FJ55nHx7Dx4dii5J7c",
  "key25": "5NcjQHJTkJDkeWvVr6eDFKL7zFrMpw93FNF5tkkzfSf6hFvXbnQF4aisLjyUA5T8gnxWmcCi1biojFKrewpH2LpF",
  "key26": "cHNrbA8bfCDxhKC8CMrGyod4vHnT3PEc5bExMt1Koqs3RtsCHnimZNK4Vp9J3Sv4bGsWQMa5D4JALpadVzMD95D",
  "key27": "61Q7CasUdTNqqJoSBNU6ihrPn9EdkSbUKF2E1wS4HcgkU69ymdwSDpVM8zYdAW7YiVKUhXm8EQA8ZYehqhyw9g5G",
  "key28": "3p1jXhZCvdS7GG93g4FmaU5an5cswWjPYCyBcpcb9cNoLNJtzrXSk2eRorbdmkY6mR9AAfAZbvwfZMpbtua6qbNi",
  "key29": "jYyAY5NKHrPoeTJ3PB34R32K3vMCvkcU2Y97MAvpwrKJEMnPcnPxbTLSzecn87tkvBHJJCmzzMjunF47MeuFWG5",
  "key30": "431FttNoJexhaQR7qXgBmBcu8FP15DN8vpkxecb6LeHw7d826iQg1uUZVQkhPLu15FSBfKZN6XUQ6idimETMbSCF",
  "key31": "4Gi9Hd9q9egivszmvP7oYhsYHpdSxj7pHc6Mk3G9gH3qZM8CUs39frY6cD6TEYYvxQ9wh4JFA1kRiWeNidLKTvCw"
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
