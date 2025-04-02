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
    "4vJUTCF4wLb4DwTLwQ9BbAq2oqSeorfGmoy4mYnxpVTWKju7fu69h4fomcQRo5EBcD5kgoYhiXZ8EKaWsRGf9LzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c84GybkMMFMV6oZuY7c7UuChPD2tSDYJyXncSsts81JoJP8QuKjxNdzXstVhk9T2m5CfPLuVUoiP1AeqtAK6bzt",
  "key1": "4YikdF9ppM9PnrSZP5KZGNVPiSCcsgk6sVLySwVY8MVjMMLf1gzyn4LDGP7Z3eARfpYKLCnZ62mWBXgzqwKD31Fj",
  "key2": "4V2ndYYZnsWZAFyz1uPZwDUGqMzEcebVb7HdG7BwiC9CMNyZWcdj8L3N2Q3YVCFYoTh2rBZ4GXLEuQWaiAFaQ21F",
  "key3": "5kSkUUpkmCJbnvvGnAMUaVXwCAxKUAJgQi1ks36gfXtLGz61hC1T9T7KDMm4r4sHt7Wcnizx7X7MEHWRQ9XrsEvy",
  "key4": "4f31whLkDhioENGdk8j1jcn36Zew8h6jaskw6SiKh2nN4exE9C8Rn3p6b4DTq3MMF5gaAQ2WpPZ6HTD6pjoW17tj",
  "key5": "4yZ37F5DnJ2csjmS3bJKLjuZhs2HvnjGPWGDfLDEKEsBZCj6AxKLzXpQFsAWbD7nUTgFbSBFS8D4eGKa64Hi3G6P",
  "key6": "4NvMf4W7pjEFN5C4BpcQqimKkbh2UARekygtKd8QtBro6NG933SazC33xxnjVd5sRMH5dSqF91ytyExWSRjdTBeH",
  "key7": "YT8zECuQsEp14mFLUjUsQ6EnDMa7qPEayvNybLUZX58hy3HNTgfGDi18cLNrRggNe98GKEkppnUAmueX4KoDHwq",
  "key8": "64g6Nge24hVNuztg26KYL7MTx8cbN34A9ELappdZw8iC74U6QzmCyC5ko3Y5wBkkEndEqv4teF4J4w4KvUGL7ZbX",
  "key9": "62cem56o43Nex4sWokwioyHBzttwRQtwPFFSAHNX97fonfk3TnvHExb2x8qj1RM6THKy9sdFfq7fFYfNJWzrK1Hr",
  "key10": "28nSEooKxaqN4g6HdeAQYXiXnXtGwFZLMo9FsqEY4RrgWHWm7ugsGky4ZviG7u9cPLx9ZDGqifZntwqH75Tio8xi",
  "key11": "3A5qd7hHXTPRKz3cm6qrMQjZnWZdgEAg8ZFAo2UQF7vLktSzK5NrCMoa91qwfi8WBFTwpSBbeeqkwxTCNrmeaESQ",
  "key12": "2JnmNGVoq1jAwX7T36arcCDRa9k9RNhRXF5xfebQTNqxfB32AjKkHzWsE78srAt9trBR5tKwK3FkKJTG4bSLxVrV",
  "key13": "RzePHh1KGvm6ARowkSS6Fi3vjG9YqwQbcci74suQmKpTcGeBnkmsHAE1nFqkpyEwoV7Cy9BUytGQE1ur1xExjiH",
  "key14": "tejBL91ajJ2CySHb4SxNPCdY581uTrD4oWuXfSuDKvi6X3UWFeXcr9g9z2mLd7dPLRBshUB4srpzmN1McA9HLnt",
  "key15": "5tTofPDNrff88xRfPfobx4Do2pQ31e2HUawfsZQctydjiXTYLd4q1tef29fUD7q6UwaTh39nu9jxduG9PhypqF6H",
  "key16": "66491yxyKJYDRfSRPVyNSDWqzp6ot2sHHwJuW1XKWPhetRSp7G3qpCBrEtBwBAa7EvpE8eydjfDaqdULvdzZzjh1",
  "key17": "4Vab1chV3hRt4XjpBUToQt7zNJpFK2z55d3D5zBopNQUtAkTMZFEdQdAJmQhdCDmFctKX6j18eLBb8C4VGQAX7qr",
  "key18": "2mDEihmcyTL25x6LVgCCSfHwU92aWPXGdwfvrEH1thfbgga6JSF3uM6mJRyNq49Kq6eFyTW8iupGjM3sZC1xno2t",
  "key19": "28ufimq34rMMQeMs4KXaoG3f5MKTQhqxMFuHQBepKenifck3s1uvihvGNKNqhxZU5PRRiLs74WCdkNf651YcGe7V",
  "key20": "4xcTAM7ELfj1XEEwx4uk9qEca5tpg4bV8TYHMHayGPNNEsCjujNX8NCkypZ7N43q9X1APNEJ3LGocuAQp3XegiKE",
  "key21": "5ED6TKcc3Z583zVTRZ2A1HVnR1m8dJw36Z11rJLJFaQ3ApXjMKACzNFUmMU8p9b4Zn5wScMhCCBHsQMdK58ihB55",
  "key22": "5xUh3mMMwqY2NfZwi4AkP69rDqDz4wkMDduSCaBKRTJYVFnriggVYMmqBZUJ3VfjnU1mJqxkMAExaMMwd1XdLohv",
  "key23": "5MDk8bCLXc95PZ15eLJcXy1U4Kuxt5WL7JkKBeNNg8KdHM8dxX51yPdSKiYugTPbFPw1fkieRTXhSSgXpRk5wwdk",
  "key24": "27zoyFwn2yY6KhkCP9xo2zBJZptH1UWceVjesBqnu7mcYj9aRnzXPkaCyd1WVZAo4xH3LRG6q2m7suW3XXQyNQhE",
  "key25": "SHH2du67giYGETtFMgynXTesrqjy4pfZA9PNhvcLc3UqYkZB744VdRoTMhpjoSRnwbCtG8vBW18ta9sDZd1RBr8",
  "key26": "5e7FKJjFjJut45y5SDxtXmJirRFsGcxtcdAjYr6vDm8aczrAsEShW5TvySc4GWjbmBC3TmHr81CjrStBVXro3xFt",
  "key27": "2x3kDUZ5U5FsyjcaPXxyQ6YhymLSETR5ZZjRQWicor4NRL1kJzKXJk6ESrBEQ2NiNMPqAWrQrUqYojQu4eUPzsow",
  "key28": "3b9x3gbPyzaXLKrMti8cTw52evSkHR5ptxZDHEmgFpBsCGGcr19ghJEdq6PNr6RupMZnty67Wwx1ZvcZyqeptfiE",
  "key29": "PKMN6waRN21tkpbF7zZURZNuCrLW6HwcM15mVm1C7uS6yXE18F56kBMTdyh7EhAhH7QruDwDTDykrRqH9HMEqhL",
  "key30": "rDXi6BmBbqMN2VWVDMPoxTRZutvXLZu8BHzSeXV1ZvJQPYUR2pLC9esGB8p3NQfYjbQ569aFNR7oBL2keoes17U",
  "key31": "4DhBXHUojkkbJPo1erPNDuZBwHzgw9R7nY1Bt7gkj1tgwByH9fPh8ZYNdbyHoqrdMAFabj6JDXFRqpJAb6Dm6Hzn"
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
