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
    "4aM1893AUPR6PicSj7uvNFFh7cUY1kc7QLVr8w375RLm8eKNWyDcXuBVh9fmAr8zKyb3RYhNyoNbz4rgHGV8ZqRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWT8RxMWza47j4U7ezWZqqskD5ewu3vMhTfCULWJL3oJTAEx4AUyPAnjUSaARqWDn94qgmRk1AQ4XgXgZpWRmDs",
  "key1": "3x1jyWuQvKcqzY2QxEJfK8xfGwPeMZSebGqUU7Um7Yyt4cVnJBn9aMBTVY8EY4JUcCYwb5eL18353sNmE8oBzA2f",
  "key2": "5y5vpY69WUPYVXscs7wQKadH2w6xi1F3C3R6Rx1E4C1dvBD87EByEAPAteGYwCXaW8841ch9dpfVMMXFNzMpqsfA",
  "key3": "4VYuBiYmcc9ZxiKjBBZsWw5C63RA1k7CwgbAKY9sf2cwtEgxgxJrTLL43mcVrDD18U81fLZKg8YthLKRM8cpZQmG",
  "key4": "23ex5ye5LCRY12D4jonhSFWUmcw2rwXdcDhGpgM1dJftTrrgC5dbuC27L6wAFzrb7SFUXfVwGmVbF44GPqyfLs9V",
  "key5": "45fWGC7yM9zN8NX2yVXEwhd2P8osvufUzow99xwPuaygkr8a69EWqXgEKPTQ3gv9a5oFd2u82NULyuL6A3TD3ZgC",
  "key6": "4FLx9SuVj7Xd4AwFpJvY8tCyd2spEtYzDEoMfPmnLQ25xM53nVdMk7SrE5Nfjhtvq3shuQjhGosLe7ZUW1oPZTp8",
  "key7": "HWRLtWd5Rcn8RZGxU3WrnNMLpUqFifj7UQ85tWqbQZpKQjTdtDnWyR2RqcVTP1m8ndnDXWF8mUEpFQqiSUW5qyP",
  "key8": "4gSTTnVuRLGdr2G3pkWfUAoKoUphcjAKAhYLnLjNRuiX4f3Y2zBep8NWcb6fRGLdPGaXZHCEhXBnqbCVY6Mnzyrm",
  "key9": "5DDfH93Texq9PUddzvUfZkbUmzLbffvXSLLYAkJMgm68fRxno81987BoA1DaYfMiTmquKho4rp7RWQtPH4hKnEaJ",
  "key10": "4YzvainQzQXTLRwGFzvRKeiknC5a8jtJZr6mbekktFaeeRHtV1oJSbqjMYxAzLUyF6Vkx2PxX3AWRgZMdyVbxtxG",
  "key11": "JFJLvdwbnyxuGRvyfWER6u3BeYqy7UbEdxGBfwyf2SrnZYoZ9y7hMWwDzUKU9qTwiafDDmVLZNqMwR3tui63VjE",
  "key12": "5VqeF38WtJmv7awHk7VQDx77QsVTmQuSo6qRySpnig7vrzVsbF5uqMSWTZn92MWPqzKCxHh9TyGJdNfqAYUPWteQ",
  "key13": "2GgYwvfSpQDmBgudaDa3BbArAL49qknk6Q1o9UjbMjEC3iXPiiV3biZUKWFr8eCuToLSn5J7ywXXm54hosn37Y2V",
  "key14": "4fRfzF9rJrwXU1HqtwtLqGmqD8mcAbeoQg4tDL6Gv8fXd1gPik7mw9XiuFtMotYx9PFqosQ2uLu46gd4AiL8TcP7",
  "key15": "4C5R9MmZ73mVAbj9uQEZESUoawuKrda25xEdLYvrxPxutaQZ2HUeS3YSTkNXpoGQjgd6wy1EYYAAxQTqfDYD4AAt",
  "key16": "4QgSR5QeJ5dKk3ZCEq3KfDJ6d6R4DChTvkcjrsjYv4Yciv2j3QTeeJr5zyEuBjD1CjQAUJ1mUpy2cpktz6NMAW4t",
  "key17": "2GqX5nK592inSp9QQFRn6tdTQxjLqBZuDetjZfXmkPNxd6BcE87wVfr2dXB1o9KynfJQXHzuQ8x2Uh5mjmBRCF55",
  "key18": "38judCVJTxCBetEEcfCh1ktZqBciXvVQHkXuCMmzSzvPuXnWjw75xsu3KyzYqV28Pxcj8415ZjfdGnQFg3zew56J",
  "key19": "4goLWn1Weoc78Hm9fG2DcNeuR5F5duYqLLFVSyJW8t4X3TcFQPf9ABQdasp8wqG9dRQTkGEYYMNwVbHox5w1DdJJ",
  "key20": "3Ac9vfFA19h9jr6cJauFMPR7fX8SQqop3N71nwSTSp6pE16uhqP1iRCLu9zTsHtLc9CoQZVR56cGMfoCAmtNqWUT",
  "key21": "2LcxaqfarE6XNGdJLEajqExiBKnMakCKD2omhZUszZWXZfSpvUrKRwRCJNs2CNp9K1JvbRE1ijvaRwPSqi2E9qUL",
  "key22": "4FWBFPSqfyyTXXkJZescNjWAHARZeckvKggSwPfc8hwfxB67Wf6TN8VRfW9q7io86ca5c9Qb1Q8EFPhT5qModQxX",
  "key23": "2TrfRvZJRzwFNdtoQB64s8LBfpfTYyeG5AUoSFVeUwQnh7aJZvP214bJRGCP8Y3PBQZq1rYm6T5NbL52HqPts6jM",
  "key24": "4ccS166sDtFCbxHUqru9Ud4KRr7bzrEJL6njN1h5utMCADNFZUs8zswMB5wggymEDhzA2ht9g3ciM8YDKNyc7VjP",
  "key25": "4VxwTUh7Jts7ZLxk4jMhcL5dYu8Kj24QwkXYMyx65HSyBhgwEM24V6HemDnAUJwPopwGqUyZXWURL3CE6ZaNrGLU",
  "key26": "5fYxeUtP1M92DkB7q8UYxt5wcWZJV73o6qFGz8JZFV2D2xbvfKHKzvzmevxR8mMBJ2QQJsgQpMU3Q7t2sNnwWTwx",
  "key27": "3xWMmufJDhVWQWe2MpFFxdVSJ99Sk6cGkDK8oU1FMsVSeBtx4ggWBvernqZ5fpY99WMYYGX2HQUgXEhsRgFsJpx7"
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
