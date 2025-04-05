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
    "2oCzPLQ4ohnSWjUbJu4EXL2LimiiZZLTnRQ3PWhGFHKjxwAw6bZVe8nTRBGE6bsPdE1hWX9p2ivGYTssLQGZcYYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dmsWqM7qETqVX3Ha2aZuHFQ71CVdGKyCG4tHWv24kpGPXe4nXxufEWhEx1LFy25iDdZDYWr6NYB2r7tPqkdRS6",
  "key1": "5oKsWQju1DVvGybZmCF1ASAXEsBiocy28cXikRpu6xP7xwh5p1F657ZztVmqcwLvKoGKA8FWGNBt9GKkMcHDT8mA",
  "key2": "2CGhU6sK26QkvQ5AcW6EQgp5p4DTG2nE4EBSJXvPokFDKUbh1iSB2MfmVnXnGK1cckuiUH9uwcneBQ4kSATniqH4",
  "key3": "3LnmC42phq7Ntrhge5QFsAPbNp22XXTkp9SeM4TkFVZNYkCewPFAxu8rGKFuEhaUSZPBseCKmnt3MoaYGMjv7TPg",
  "key4": "3qi8a1wfhjYs3jZcykw1MBccdFH4pkgMgszZtjYeGkSA7A7Lxi8gVYRcXXSCJrh47r1Abn4z5Yak3D1fCJvxr5ba",
  "key5": "4gJt18ac7xtDHFg3ZE99fudaiTSV2KRVSzWDzXq3Azage3ASeKj1T3YDkBciGf6Smrh52tFoD1S9H2Z5phnw6QZF",
  "key6": "3Fy1EwxHKStC14rjFZCWeqTHorjXwabRq81vwcm2XsHm7uZDd6ofMTBBqhG6cMAby7YWG4zTft7uoqXPuyrNsAk8",
  "key7": "3zvo5hCmDVX6nihFo3PjNroJgQvZpymwfoJDcr8eX6j3Rz6HBNCmaxK9bRiVADQ1Abk3RbpADfcCGcbGHiDnuJy4",
  "key8": "5vUNe3VkoYUHZZiZ5GfuejK66CHnR66yLttru7EwgKYQMtJANjyeW2K2bBVq7eCeQ2QZ8viKh9AuqeapuYeHA6VJ",
  "key9": "4KmCAoNvvKCpqikGv54oCjJRe52Fmvm2CXcXVPFeEvh5q48xaJ1qGyWkA1m4W27amBsPsSJ9K1AuJR7HhY7NWty1",
  "key10": "5h9YuUKV58VX7nyjsHLZ5eui4aFJQHDuhC9iyfqK98BjkNY72HyuPpJk48gE4NdRu9JPb8svq2c4YoGFqg6Livbr",
  "key11": "3XmYkfk6w1j3GKnTq5sjujQG8gJpkZfvLiYjSQu1XL2JCAH3Tt34cDEAe7YgpnBH2DqB5XbUbuaLTUWnBWWpEv9F",
  "key12": "Z8kbY44ShG1Rss4Ndtef9jWDENxQgd8E2efm5n33ZwhzpQwEKbtatJWZu23a4sSgLX32LEj2qT11mfR4HBt3qzW",
  "key13": "2uC8EVuKjD7Z7Qw8wJHiUnYnaTDXGUanVaSGsYaW7eD7NrRvr3WmaxEQeMd9bu14dpsrAhThRek4MALG86x2GFzX",
  "key14": "4ceosCbtFQ2auvyPvhzoJV9jYrT2qSxvmTUMWmBZCkYwsnjWztWkxXtDtkmBLEoz5G8NPAhSSTxpSRe5QGCMVAoW",
  "key15": "52bqbw4ScRbS4AUTXJuq9TTEdHLQVs6cj7Wv5H2X15EhLABhkyySpSRwuGtQsn49qimgJP56jjPjXE7YVRoKj8B",
  "key16": "5MhRbpBpiZuMck7JLrevaYxww64sqszzn8pNFi2jLVWJdnT6zxNXqsQ8nNCj75z587xmfQ36otCouKQhixoZLEHJ",
  "key17": "xkwTtwaedjWX9fVVLpQXbn5Rvx4Gogwz6XytexxvTC3PPT9wHczan3vTYT9uHaWM3zDPBBBU4gERbyHYShoGvMt",
  "key18": "3SeBYdUDsaNSGR1gHK7YYPNUcSi5ext83XjtyZQg4TufZNW4Ek9iwWTs2FhkKBVch5hPaSUJtvuWh8xY8y1qSUmS",
  "key19": "2E4r8mexqxpffTvBWcacxQ8vHGVkXtp2fNm2TUmMxhWTEnCs4toVHsP5GYLaFbC3q9FPkVAGu8XZhBGj9nuwwz54",
  "key20": "5TMjimXBqD8zfg4ejdfdkJi8dfDViN3RWKPyGSAubsh61sVM1DoXapHFbZMB1keSMEfSzpF8eoKP9jgUn4PUKMnu",
  "key21": "4wh1rw6jRcgb2bgGByoLVKNmbGtKFhMA24UZMJ5c21x7VRPKuFcJYxsXBo4yLL1nUVGi3WnXha6WqXosNvWEiuxm",
  "key22": "4uKowgg9DmnoYWbmGVJsk4fdSskUqpA4LJ3RkQiswuaujsDDepMzU9FvoWYTSLsUdRpmVa4TfLuJuab1k2N5TjA9",
  "key23": "33oWvay3Mr3SdSgyNLx78YZBeb7dQWwFfybs9VyxRvtGm7evHjzzBirG8y3ZrmwmucoPjodbgEJ5y69A4jmJCTaN",
  "key24": "3CQkdKCucMexdurJibsB4vyzoHcesPTPYrAbAxzVXDtKPNqj1asUU6s999QGERnNEJmXqXBL1r73gnMme7EaHrip",
  "key25": "3D5bkBWSuwGC5kn64YYtFEgME7dnapNQSPhobuaXhvgN28KRu9HxZbJnKrDnkVhPh1kMiK7HFHekaTnRLDnppKCb",
  "key26": "37mjFkmGMgBcAKAHepFzj5aK9yeDream8R51Nu5yinSJ8uyTmrZ8PFRAAW5R7b94BT6TD94sAMy9AUrivfiTyLJw",
  "key27": "3HeJnSjD11RageAsjiD2X1JKW6Sm4rvvYda24G9E8D8DqGXFDpXxtBHcuS2ZSVkQP8xFwAU1WkcyGp5hLeUfvnVc",
  "key28": "3nQuNubBPh36SCqSjrp8ESD4LXrQ5V3oAsJKBYCJ6tQ1pNsrsvh7XeCMtg4Y1Wm5UshEjVfXpVUcMH5fpu9zAUaL",
  "key29": "2L1qvs44yZvEQAd95Pba9bn3hJpa28MezBSyGN16G5ryDXZxkDpZgoMdH7vgwFmmNcgukZwQ9ky1s2fSA5bK1T1Z",
  "key30": "33ZkNw3kWUuxKftP3ZdDA1HKGuJnE1qoFz1t3ozdJJjj68pg2fhG862dPC1N3C8rTifqJD8ybJn7cqccJoCHPM2Q"
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
