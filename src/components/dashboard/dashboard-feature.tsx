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
    "3kS6m6UaJ9mC6Z98wGYxUEZyb8HuYUTER7asbBBVHXgjcqyCVEJHppYT7CfaZDNwRtCQiLnw3yaDb3exW9oNmrAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r65Mnb6eEJTjkkJxBsbni3W28Zxg5uVUkePtR83YzeaQnJGU1Qb23uJaKW3UdRkNgURj8u2etvi8tBtxyw6rnhT",
  "key1": "2diSGhAsQuJ1SME1aiHa15Q1PSn8Gx2iTfWNxvoVSSztoq19ZY65BJi9niie4bZcEbGmSP1Lx2HNqjQ9923udvFt",
  "key2": "WEz1cSHDcixsiLLghkNaMVy3Nw1eoRET73oE61YDSYqkbXQvMMQvxZDVutrsBS3rDFzxzc8S4adacKVQqj492Fv",
  "key3": "36htQo8KoixHBAGmj1uRfrxF5ru5YisfpVpfDzJ5geCzgHAJLcWD4yyFkkTuUdJgsCM9HuDTnmte4YhyqB4mssKN",
  "key4": "4CehiHJ5W2LX9KZ8aVnJEBLog3PbJQ5P8WrjUbn7SRRSYJzexNALNE34bQAQNJoeJ7RdJUZcApasakMVBB52P6N8",
  "key5": "KvrwmEpL9RjJHT3n4PFo1WaoCAgAfpmkiYE3GYVWu2Bf3mVvpxUJRgYm2ghoQeSYsmpa6M2CAadtTPLwpU1SHS4",
  "key6": "hEyRiYqDbt4BtHFCj5ntBseuTteW6USchFfWikMve4Fkd1vaSfLA1XAztERM2Ms6Nfnri5pCVc38bE7qTzPscCu",
  "key7": "5qALjNmFeMeWZ1WF9zrmQGioy58bWpQVXVznpF51btLwj9MiUqpC7uUHboEpJ5Pnb448rYFyyqq9dPocoDEWoixv",
  "key8": "5SyEe2JT6Vx3zzqZh1uXvRtoCW94u5pPvYrzLsZr6YvzFzTBjJPdBUThK3vVFBgF5Nhi3HKGoXAs1RQHG6xWGVxe",
  "key9": "5MCEe6tqV4NqPQcBveSAqhag1uTVdX715G1TmhVgecN31nPkZ2CjXTzfPfCpNSF3k91ShL83UydnFGLjjuSVSyBe",
  "key10": "2H47c8iy68pvu4XJ2S5wWLR7Ww4U1X4nuTXAJXyxhM3C2cmt9rPWjUiu3fhFvmgQNH7wfFNMuEicL2Gmbym2RwNE",
  "key11": "3RuMZpttYhmt2rNPBy5JBJWeGdDRp5h8Z2wXxHGFprGLLovmfng23Aj8eM1sv31jHd4zfkxmFbuzqyN1uQnveJ5Y",
  "key12": "27M6U5WcW9pbzwwxcHa9NNy2QN6VXaQQwA1K8d3nrNEdPQ38ds3Cv8ioRzJMJQzxWyYBeQ91YbC4QbxiHuj8dWZ3",
  "key13": "3FVHoQexk7hhwez5gNDR6fbJfgffqvtxbdNxhwX9ccviFms4voCx47BRbpXyRjPLuvkuove745LAHXiXnTRh6xC3",
  "key14": "2LgAYo9vmfLeEXvv9AshQhQrHqqJbobvDSWWQH4RQxxgx5Bo4FK9y8Rqn2hBXLiJwwZa5RVNfz1SEr8ReuScvcDb",
  "key15": "4i9umgxUFKF34DMisVdnkxZ64na3Tk4SGkuXCFTRHNvK79XnqS8ckqCXfc8e4JWAhicous1dpfE8cnGD2Q1eRGTT",
  "key16": "iDth5qFsJn9SDN9yuqn5RcAhYDeHNBoeqjvYdT9SuKjZFViPU669Nwsobbf8bRJDV1cn5bxHAywYiDQCeX1bXCZ",
  "key17": "5LR35V9hPNXUNTgsioLymbWiDZYQswa8RbFvD5Mi7rPGGGx8WMR835yYutGreeaHfvUSf3MS5kkVhNuCRvtenQN3",
  "key18": "4GZEFMb61UNhF3nKMw3pGzFTfbXQ2uLCCNCc8Wh9CtqQbwmqgQSwZ2G3nh3YqzJJtLhRXbTqB2pMevP4hmxW4zqf",
  "key19": "5mhfhALA95yW7Ho89b2q9yBP6D6pzJmh7hqZoZwc4nTuXPWsEDg9JdciusAQ8aWfKRMmjGRahxDwMm4rTFgTvMXq",
  "key20": "3pgTYAHZTMQBNbetnMTCpapgP9VgfH2mp1CnqFMnKtggrMX23TA5TeAPipiFC53irzZJbbG25164zMoYWH3w195u",
  "key21": "TPVqFqGZwEDrrY9uMcqyL9aAAnbcqoz1p6FkSaqC4YFhtL2nRhEuCGz9ARZvMHG3MUowuzVJjM4PcLX9ojgrUq4",
  "key22": "48hZdyfX4fF1C7oKBz6LF8bccSNPFeE2T2cXGFWbcRzEyaauJPKpmjjfeZMt4vqng3s1Md8QGK86YfA9NEvdsGVT",
  "key23": "2H9UEZTfrjtJJfYF3XWimECSP16uFCEQu6NUFrsvJJNZPmmnV24n8RcGg2ZyWP2VAU5r9yBSo9tfif67VZCMBQvt",
  "key24": "2jjAaM391vhb5EKziBjfQnHSocsVResPx79VL2igVJ23SVNLd9fPwXd22gGBxFgtc8iBBkSaerRoQd78yDp67yYo",
  "key25": "2eUaYvKNmc2psXFjzTtego8E32RjfpGv43G3tJzjghRqhHwc4VrkJXtWNasDPhyVXfr64meYy8ZUu5giYqPrvdJX",
  "key26": "2UZo2Mu4NxsAVxaRQz48Lf4MAiTCYy8MJ5e5EsC4MBK4jnZUp5YV9rqEpZAcESdjyttotZoUdQM7HiVvEJb2LDPG",
  "key27": "2N4aXFFCzcHsFMA29T8reA7DosseVXUD74L7LFEef3HJAgS1HHFGfk9KrSY3SAdV1no2ghjn1ocAeMFBXofT6bp1",
  "key28": "42ffc1R5VVWjqWuPbbduW7KshPMz1Jd3xzni2jobJsr8KGFEWXj8HcKyqYP8xeWY2dNkQ6w7bjzLZbCimwejNjQ",
  "key29": "4ZKwede2HmQQUPNpdCksiAcyifaLWp1d2ErF4nZHgeiYnL1ckDJFTbgd7iP5qMThr6cai84JbmUGmGNJv6vFedUW",
  "key30": "5Xa67HUbAHHm31Yi3qKFuVYRNk6gEFdbQjG1xWRrkt9itPKWeEtiPvMp9cBK4FDV8FUW7phEdQnJQTgvjjmHaC3Y",
  "key31": "5eqRTvWD9EeH1DjN4ZyzBAScUXq22RyiD6FGQeK91NQ4yuej1G2t3G4KwqYrayEQUj5XZLDkNEYfEJf8oR4GyHHd",
  "key32": "5DeCzfnUFoCEhNPyjSnZ6abvNMFRGQLZHurH3Fv6GCgoSaYYVk7b9cReZ9if6SHcMuUd36TkVtBd8fkSXLo9Ud41",
  "key33": "2YTTGhJHbdGbtvWmkusbenDW9ZcacGimJ2AYi4nMFzmTfFwVcLK51FHPeRCTcwrHGnAg6n2c9XtR2uCv8hmRrUEL",
  "key34": "42deehcd426wzMkbMjbQS9hSs6kmvvB6HqJHtne8fALgzLC7jmQZct3K2viDXhziDQExMqemrBprC4d55EgUfNRC",
  "key35": "2VkU9sa4JtGijDHEk63PCCg5PGLPMzwaftwcwNxpNjqs58UJvKZyS5J1YMzLHW3WKFPP8MR9NZexc4MswHW5MVaW",
  "key36": "5yXnFmESvUwrucyrUw2LbFD1eToL3BEPGh4yQz1vq4RURZZEYHNipKWquKuKotnNwq89YRvNB7LLEP5vzDBLrJnG",
  "key37": "5xgRtr6ukYnRBJxF2LjPk2v9W7ts3VpqgEq4KtBHPMKxwr2Qpay4E5WZUTZwz3Rv1vcYw2YuRLyGioAhZnnHX4TH",
  "key38": "2QchLjHhHzHUyV2X2qWQbwJhPtZYfaKvP4zA3awyxm4MEBxfNoUGXcpAdb1J6JNg8Mmfvsr894Vra9dKiB7Tc5XU",
  "key39": "2Qv1a586krnWUxdATnyip6UCs5svFkZEMvUVuxQwgbtU1cC8si5gWNkWabK3nLfVQyBCp1ha3YH5RfXsP9Cj4Qam",
  "key40": "3JwT2PXZa3nWZigQwkRUqMD9PTegP83wrAPhHk8odJyvZmkQJwAMHtg7fTiUNJUZ4ivYxL5rCCJ6nU5pnYq8xxKJ",
  "key41": "4xJPGGE5T9bHinw7vR32nk2iCBx99F5EiLwPcMCKtfPFgHFvAjCYUAQQaR4LjYSd74xxRvC7C6Bek6mjaN3ffebX",
  "key42": "2dHeUG4SCK4mEs4B7pBERX8TnSY9mGLzRt4rof8TWWLat5N7B9ariBCq5A2AQeKRy7UE3J4sNH6C4rRuYDjdeuCT",
  "key43": "DuQhHfWQ6W52sKF9TW7M7huMHa9XTrcjZro5Vwm92Cs8NWWtnfACp5uYLYQdwwsHyUjsZAU11LTjavvpCd5Xhxt",
  "key44": "5X1AVbfEDxPmWybdedbEay5MA57toK3RnFCjsmfnJceQ46RznodVsAiH8jX9ekCFCY9sJD4qWL7wPEpfGUVY3det"
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
