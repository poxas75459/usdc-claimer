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
    "2z7w8zHaeYoyTHKtWXBWmDnQzYzMhyjq5rUVqEwqx2p4m1vZRNP1YSjeBLVxonwBghi3u11UTByQrXQPik28Mctz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqqyJkFqaSgRr6xxR82eGMdLVKZDmz6SaeaAB6hX7ZpajWjwZTqNdxEUD1G1zjZu4QUK4VNBC6LSFd7uo8TDvPK",
  "key1": "3aFcWWxnpmrAeYrqWr3Sp1h6yxFqyHwRXZ3Nc4BLLvdc8YmKo6mYeQB8NJvpQF4MJbyndStm4Q3xwnFgJ1EcSVJr",
  "key2": "cWUWgpme8ChMBKqTAFF5GiU3qV5hdEvvjWAyNzsYeR3T9UwTouxjzu5h9uHaxiUJQQnSfY8f629LSAd11K1T4rN",
  "key3": "utzU77jV7QVSzed27yAfxkX9ri4CZ9J86BaGEPi42iLUFtuUUBhYg63QY9t7u6cwXevWcR7PumFmjVZPzDuFKVC",
  "key4": "21U7WNBn9qWBKpFpu2qd68Zpnr9fXdzEk71C97Ki6NH9MAhKF8Lns5bozjv4fh5X9AzBAr1nxYXCGn6hKE3avrZw",
  "key5": "3w2C927F1ywBNf8PH6zqEKU5ahgs8JSVQj63ZT5KGXng4eSW5VUkZAzbpdLr7cv3BTCJWvXyR6eRmBHqwkzgYq26",
  "key6": "3yTkX8CHvr6fJSbfKSkrEUnVnQdYN1qBeDXgexQhMxxH6fprkNF9zZtHbiqtkLejDkAEAaJ74SLxaTH8QCMUXgvA",
  "key7": "46bnyNMdDG7FZsapAfC7HkTe8UT5uxir8YVwxvgqBMvjQvGT6gVSpBw4nWMvJ7be4CHhj1C8eBiEdEN45n5SHGSh",
  "key8": "5K4WPNqw5x1WtoyM7ZWWjg5B6gHq6o4niM9m5VdB6ViEjgWwFd4MMThY6Yfzk8Te1Fw4FdegRsMdsgtqCedzS2ED",
  "key9": "3vaJ3WTkrDasZXFUmjcmWL1ajD44GJ4dvK8DhMqGH7PNg7GbZkKTdKfVoGoGL8yur9eMYFFeKT7S446Zv24ZtUck",
  "key10": "2qSsU2622SscJ991nxYdBmt7UT3qs6BNdtTUouqedwwXDHfmX4TH6nAHNUqJ4HuV76SusFFzKoVwuovPSaa6EWLr",
  "key11": "4CgrizoNcVMukLJZ7Y3iAoV7CpWiF2pEGfB2dU7ZmR3kpeUcPsdBWTQicJF9d65JYynQHacUAcoDBeTqY9YmYNP9",
  "key12": "XrfUNEbZ4GTd32oUoY2D5rg769mAUR1VKW579kg5yeMagEL8qYAfiwwSVhJdss2H5hhML446oEt2bkQUwnky5wc",
  "key13": "5kMdJBE76FC479JJxMMTbzzhk3U7JFSp57fhsSYCY94MjpsV5752nqAg7hs384wZjG76jftC9ECcRgCsFhrSMyHb",
  "key14": "3aS9smcvugyYgEATMHb3o5TQZTZaUoXNsG1ks1K7GYEVaAnh9WMHY1PgFvdQsMJsDf33ETthdBMF85pS2Pk5ANiA",
  "key15": "Xgd7X9DLCDMX8WgUvQHMPzjr4UVvE9auME51uWwyRcATVYV82t6nQiZHAFAcqLENGbCxQJjPAozFzmpjuBXDPEE",
  "key16": "bj1V8LTMkaQYU9oLHbgASDMJaT111p177JTGnB9RAhaJjWSSDeq5LF3EwwZJUivawsw9EzX2DPBT91DvW3ZjXpU",
  "key17": "4Gpgds4o5NcT2a9MXrmJysBrAkDzXfjySJ6qG5C2SN7rKwXnwNT6NDB74cNuWe8UGqjZQCkS5dVmqT9zh6mLNMYK",
  "key18": "5rThGW6aVkmbzUCsX24KUNvManMxJDxbpQMkMZqxQpU7XBf8YDWRN4wfrF94TMTxzZEkZoBVV4BwQLeEm4E7U9hz",
  "key19": "2hCgdJuUP2dgzYsaC21LPybwUdTcwCafzgjCu4w9T6nFGDTSPvSdY1RsNvGwawJ5dnn7DGbcKUTaiNDee77aorai",
  "key20": "4btYCrkchYixKMNA2LdwPzsAqjbbDoxnEh2vGsZ5ceNfELj1bx7QFXLaakqhwtZqwbM9CusHBBCxhfrEsAj4KbmL",
  "key21": "5KJ5U9w8Gfnvp7QjJSvLYr935F7L9T45HcPNBVXpcMSD6diW9YBPrduGuZh5Wa7kyeHbMwxfnxSp9gci8zhLNgL8",
  "key22": "5brnGnXsPPY1WKM4qFemMQTeDA3nvSyrigRxQM4Pe8R5gN5RiPgJsie9nLgsqGz98rpheRBfHDFZLCDrM1HGnAiK",
  "key23": "2Srh2E5nDWo3uAcivEQj5UTZcyXKQT4yMXZdUvupTFEgrFcsH2HLkKKomf6GU2PyvNGHMA8pTby3CuQ42CkUCme8",
  "key24": "2v6wM8uQ4o43ViWSfgTLBo3qKoDLLGhmKrYhDTZDwSn4aJ9xVZ3gwjbdUCp9GCnxSXEexqGMLpDo7X9fg4ufst3y",
  "key25": "25jRv8QXwYHf9mb4FkiXw9WZFRUhVVYXytNYyxWYbZuxj2VWk6rKSswjSMweYqCSoHQAhyxY1G1ERLPFKdEmZqwC",
  "key26": "izdVRQkkS3hCcH28r4F5XHTPdNyT9D734dRFGa7gJgQPZg7Nb2ck9aDvHPkjBjnj1goDY7QRAEJYoENBTnHWbzk",
  "key27": "319MsMG3qufi5tQaJVc1X1bjxXrBxZQogKdr482tsui6w918LqH2GmyVHZoHRjWjBHgR1pg32o7Q3ZKWBpFzeHkq",
  "key28": "4Ff3wWWkmQSKTwvRyuBHQAFd1FEUGGWQ5v5HFbfvNC8hHEb5uRxLMYREoSLiteEX8ryrXwftcXxiPFsQ14qQXLLH",
  "key29": "5zqPx6biiYKdeVy1ipuUqhDaLaZcyzteGPbzoTuNLGZvUFcVGXA37XQrvZnGG8b8qpkFY1aV61YJ3cerEtovTZfP",
  "key30": "5yvNvbK8CLsfmdALnwqPrJ3vxWZTWQXgJDo6rAkahQLwua55w5kEPnSZRiDCLBG9WLtbQXBke8jFPeLqKvAkheqK",
  "key31": "42Ndb5xQ5qB2N9jXBsyfTphfzsAaW22DQxvDHc2tK6uVDtZ4GzzV3387CBZ4DRaZAE3kZF4BQ8A9GeVqExZFs3mL",
  "key32": "1cJJ6sWyTguPnKvHsiks58rMCRSYFQgjfgFArQnF9VHwWu6UVuXwxHnM1GgsdCQgRYTRAxk8JFdwQ4me3U6Y4W6",
  "key33": "3LJdtQ6APReNGgG78quBy8Dq9qCU1edM439fYdUir45fvCDvrNhHrVMYVPrHR76YVAzsusU6xmNzqAY4fsSDCQaH",
  "key34": "5g7JHq2YxMSCEgdDEcz2fPikGhk13MrWatXbnhUx7KNa9aXT3ndw6nT2rVvzvTdERhhNpwUxwd6BUSYbh3Ta6bEy",
  "key35": "3oj2sVtAmohicdkq54VAPCEcnL1TSugwX5fYBYvZkZBHhv99HQvFv9LwVkui3899HMZ2vn63Y3C6cFYQrcb25AsD",
  "key36": "5xt6CJhpzqCg4hoE1GLLpdccdMpNVqViPVEs4ukiThkAjYG7YQDyjKyGAv5SztgbWSjBvSMdAYp2DZQC5QBAPzBE",
  "key37": "2df1MQAe7Tj1sHGDpAXE9jBNdtyj2cHxej8CAfHvzpr5dHP4UYT3ZTvqXLTwVuAaAWCfhAwoH37ytYUBoUuNGXm4",
  "key38": "3G2Ms6kDVDVRCfT9ZrCgC7ts5Woc85T6KGeA4hwoChxLhbQuidz7twUJQFF8W9A4wbvnEwiP8fHGCZqhjY7EQTiZ",
  "key39": "2bD1UkrpMjnWuQMZcZnyAVPwCsLwyfvhbx1qQyKYyUxFr7PYRKjiTDeUD3ibMk2CLdP1s28hMZx3VieHh887ndXC",
  "key40": "4Zn6525VU5rmnzJFDKZeJ8Y1y3AbPEKvwLnbANHACHi1sk5pC7UG5vAZ1TfaZUT5yGHDz67vSuxGPHsKYYkBWraB",
  "key41": "3MciqpLs57DhAAbvZf159dy6wdXsR6zZt5fgCpq4x9DAicV8nsCeEMomhGY5Cnbi5y8htJf7QecJ3cLcuxRN8bbN",
  "key42": "ZLVi2J74FZN2RUsYXbS6sqMt5VhVNXjM6qKYCnwYhs1arjphACazqzXYJjYsgMNxtmXzYvPuky1u9oVAobBC7tb",
  "key43": "39NbtSYqgHxx3jKu3NY1TQzxkrXq2zgwE8N9C4XefVykH6PWqW6bqAN7EzWpGq8tLxzjSQnjQmLbKoanFkJDGVMQ"
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
