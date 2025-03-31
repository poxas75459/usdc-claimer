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
    "41Z7XXagm3zxpbkZbUmgYD9tmQiDfTzEubbAaFQjy6rjrjMNbYzJ5qumTK1n39i19qzCxRmQhr8phyW5RUaZmMnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vMaacdQTcQ78tmGewLqWoSgnmrKmd7hYiMAKosTv8E9PviuvcdqQAzV5yuEC3RQLfEKpGYGLzGao8MRdHC6HdYU",
  "key1": "3Mzmm5rcYvfeL4PxqqX7iVTo1HAvMYYNDhLQJUD1kthstxr7o9x8NoGSHquLaToH5EZRkuBsL8jqFw5oZkRYGs4e",
  "key2": "4jYTYdPRkEVKS4DjSbCoED59td64tps8uCv82wDaS3BucfLmAM6gjtzE7YyUVsjBWV11KN58XBRTmWNuusYAam8H",
  "key3": "2xNEcWvjG2ewvrfbAKdqMSNZ2xBTQrJYgMFsZcSWXbRzG42XmZoBCUnNtkJVj1gzgSNeaoB6GfpZ2zLVayvj1AhH",
  "key4": "3gm6A5PwgK5Uqzu7U11WfGSCF3D2t9ahteW35ZBjCGHpK3RjsX1GgyEiGyoLNu37jf3qpN1zhcZuVLAivN5HTfqK",
  "key5": "316U8N2FrFNgUeK2Yv2nnZSSA5EPt5aMC5XuQKuwmJtyC7E6rf4d6q56b4VpP3XktDNZzPUqZVkyeMjjJemHhKH5",
  "key6": "413bSfwkKuyPRtQky2WrU1hmLB4R77YLxYnXB82DbdsnvHxbGe8nwg3RA4qNGbSZN5Hb3DFm6QGM8Tbb3Rtn4JMv",
  "key7": "9hRB9b492SbAVyP7EGhHg6oovxrQESjFBoUGygAU1BQ7CvJgcWpCskzwHLFbhxFcGfb6LyWPKKK7aPgAbVbHdtq",
  "key8": "4938MvUf48W7jJ7LSTWV2rWUV8if8zUYWNe4Fgy59f8L5DYJvZyjtLDSDyyBXySg1GgA2UNsdJhdHtWQTcvqQ4Cx",
  "key9": "2DUZaetbvtV5mjAbjaoqqkVdZcEdKF7AnFHQnZkhY32UBMpwz3xYfT9zCLKXBWwv1kBvHcNBrK5NyYHbygsZoLH8",
  "key10": "3Bnm1w6H7JwxNXf4iog3yaZdgM5qPd5vu22ujvGoweQ7VPNX9FUnxFJjoTxadCdJVR8bJnFsBaahUHrwkoTFSEoz",
  "key11": "5mukKKDzqHdRTnDggkM97qra9PJqJMjyd5FVKKoA9fc9kTwx1Z1HhJoHn6SCoMkvdaWR7KjUXkzrz1qSDwgn7hm9",
  "key12": "5sSYqx3uCRJyMeuErmcy2YdBd6abwzdeemWtWVj7dXFvvAjcGS424aY1e7wKZm5DJNdTufLipcaKdESWi66nEdKq",
  "key13": "48LtFdVTEFmue6gKEeQGn6tn7FGsBUzW4f3KciEfoMetkqw51ULKk4RowU6Fph57fLbHv46dX1hQedEYceY1GchD",
  "key14": "1LUXFkFU5rS7MTk6khCiKEU6CRhDZC3LvnxXYzzcYt9g3ZXVwkyxDpLe2yKnnZpnYdJd4vS8XpW3LYPFo7rEhFc",
  "key15": "4HmihPRtWQmXtPZjbQkCfTtJ5iRESHrJz11VfdqJHe1JpYVprRo56k5eDJYG5z1DmnPovHZna7Ks9vQPpXF9wNWe",
  "key16": "4r9Z6PEicg9W2BaSjPYZvufagpNx12Wr8s1h3CNSTwcUKALxPbwmt4D1G9PgLh8LovDqXeTknC568EKenRxqishp",
  "key17": "34yZLjuYx851ndvqDrsV6cMWyG6qt9MDgEBVBzwfuipdzBRYYSzxWAftV7QAQCAB3939pUEWq1DqG6hxNxNqdNpf",
  "key18": "5t3wu44znspmJxzDXWExLciFJUcEC5PQiSiJRixDiR1xjmrzoxMuuAESpFpjMYJC7YYvZJymZ9gyXBAN7CX2nVn3",
  "key19": "5QfYS71hn3mLQGZBTSy3SobtNLz3dvHLo8G8KKtQxSZHaFrg3DnZbEe49xh3BCabB4aVR44YeHTdjcNYJf7vN1Bf",
  "key20": "31iNwiUgGztNB1EJq4dKGCgnEsQKsSp885ovPYxJ6rDm2yJ18kuaCvksDBsMMm4wn9sNBGNKfH2vvUbtaXuc2GYo",
  "key21": "24rciMbo7itZXkz9jvj5r4DWWBPvMARM22vLkJoDdSttPsagN9ECUGnuPgKYMgP8Ap3R521wg1dJkBq4KEHM3gvY",
  "key22": "1BjQUy4gAgp3gW1SGCXePsUSmZPQMxohXvMjHfKhrKHt48qZ8e4fHCtWHEHgZEAarF15Mp23C4rPG2dVL8eNfqx",
  "key23": "61VD9NaMB64tnen4HoWJF8jR2f7wp5rmh8KhR5fjsUPQVyRseWNdUHcrRJC2RZxozFXZ6hzPFrhf6jPfSxybaTYf",
  "key24": "EaAmWBN7xp9AEY4Uekq5jP5PMU6gLdA1tUdiBwBVSgo7b6dwZQEvMZEokFz3Xz4HCuMYp9sZd68Dgw7P86ad1rz",
  "key25": "5NZgt1yyjz4QwUWaMMfF6QZ8gxAyzFYFq3T8M1qLaQtZsyjegyTRyBNCNcbtHQyW3LVrAPYcMt411AKuckCjHWb3",
  "key26": "2xtYdbURNn2qZdr9NT1y8MVqSbocPpmALjHnvGj1LsZZHsweuDRbTJ6jmxqLp7ZNL2z9y2DUQTJkBUsqevjKqqry",
  "key27": "2fYMh1d6WpXMzHsk2n7KVy8nTLfXpZsxPohgr8brFSbSDFnD5JJoGkkXa4qGkg2GGxUrMFPX52jBbGxbixNghGEn",
  "key28": "4MawVsxjExq2U7baJPRAUuNRr9axuQdydPcR2QdC5YhRhNouu8RpvcfYZgDpuhGF3S4otoEJd9UeUGZa7JUjd4CF",
  "key29": "2VXPLprbBiHE2sXLBYu3KPM7Ft2kG5LnfCNorMLqRW7Zu18Cp6Mek6fPmqBVtcwEyy6t8tSNW1mciXQ4L7jKoXnR",
  "key30": "3BK5bxpZzmP9GsAHsDYPpzqVWHmyenJhXtrGA3rNWAVE2CnBimhyQQqPhiD6UXYCoN9EvJ4UPi8y6dMevLBV69yA",
  "key31": "3csWL1Fxn4nrqPGafNvMvYh2eiMCwG6oCZLTaZAxAirYSevrhmGaEbLBFuCSMCv8du9mcWXQquXrRQfKCk7gkoWh",
  "key32": "GQvPb5Hj95DUG2yYchEjXazRajV2q5LeRr8U6gvdoQCAoJkn2NRaZ4qJN4TNbpcTBeKAa4pukKkRgJhuoGBGi2W",
  "key33": "27his7sn9yn1EE1KJ6BTo6aYCULtPKnXCrFKuNtP41mHNw2Ld6neuo99NbNCMEnWfmpSrX5j75kN8fANWdx1ur8w",
  "key34": "53QM7k7TtVkojaJFTEJtDKD1bVErBGDBFB6ZX1Y7PnFP4cRzarrnVCQgnFbbMt2vBs4FrjuPXscEJByb1JnHy7zw",
  "key35": "iik4YtTVPn56g2cxMYEEuFzoTfzZp6umwLojqyDJZcRCFTMVGdnnthZ8Zfpt4u1RyAxaK8YryUXDD2jGGfix7YW",
  "key36": "3V9iJQT7QrbGpDFxk8WJJEfh2xTKQJW2xmpDvQAXurtCHERd9YBuBFrZfLM7NzhDmmnWZJ93YnpijwD6rCVS4QHH",
  "key37": "5AaqkELMyAmQKV7xQuqtgiABdqiniDn7SjzrYu5XK44M7epLfnTjCThfCTGGZxhiHwgnMBd33aUEu9hdXXuvZoL1"
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
