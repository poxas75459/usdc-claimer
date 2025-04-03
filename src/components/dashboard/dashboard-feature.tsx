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
    "gqTzjdCy9aBNJ4zeMoTNrBkyz3HHbgNreKTGoAiz2N9w4gEFEsv4QpJj3YoW2QMZCmfyXSp1VajkRCbEXjJe8o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SWEvufyruoNHaZajgsScAn5nQWs5cu1mc3nuYUfYzKJ6FbDBjGkBNEVLYy7PssXF9ybSuYTbge17WSAjF9x4pKE",
  "key1": "5xZXhjw2xo9p3h1fZwmzJtMmvoeGcjArLym1RqYHL8Pdrjht1ZFuqVwwJBnkSxYVjfmU54SJofUi75iUeV9cTUu1",
  "key2": "5ifE7aYqFZNiw87JLFn3RN67Nq3iGFDfrHXpiqGZjzsePbR7r9aBYNwAVMsLLDgFMEyzkdukFFhMryFtf9CeJ4Yf",
  "key3": "3pEtDYB3ermdivfFhjsXYGTvfFimDPDDjmWLNj2sQje8PjZHqekQYSekkY1LXNjW9Y75RkcLJ3mdinK5m72eduuA",
  "key4": "5iznjyrghMvCMDJz6eW88oBP62NPQVbPgh8GASmQy6cGFiPaRavkKWdNXqWhuMU9eFKig56zTnJyFbjK87jNVZws",
  "key5": "53UjheuASCCVbhSy9h4cEeZAXbuKT5kCMdRD3vsAKJ3gjYsgNFgwro4na1P8r94pvSJ8RVuqf2SdRwWgUXza1aYL",
  "key6": "4NKmymt7Hv7xL7oKGA3zEN8HmvsVpPNFwo4FF4e6ebpa5JWCfCzejqmdvLq1osVr8m5RZgxohgptGRuVtoKHGwCE",
  "key7": "2F2hYUdRBZXULCTUPZog7b1DTEbT2AQfFD3WKCtU81yDcm7V71DA1oDjzxE6afAgNY7xtTgbe6A6jzubUr4DZYn4",
  "key8": "2c8K4VRheozn5umgZ3b3yGgESMNnYRYrWtdrAtSTpYZMdoxr97s8izpA99KBG8Wz47aMXewcRS5B2tJaJ2bGv34r",
  "key9": "36giqhsr9PUaZRNFeaVq4y1nd2kUqAeMHx76GW4gMntv6emzLKafXgLUuSs2ci2LeUdBbCv3LenPjmfHmjtVtekX",
  "key10": "2DLo1LzLrN7ZCDYKvXjqqa5vsibyytBYn2rVMoBztpugNzVyUAwfHDUmh2Su1h5P9KT74zdELjM1EriR66gUwDz2",
  "key11": "63kPh4kCTArwixzF9Z6GkVzeSWCAbZaMMGoXkykEW7y7FdPU19UccXpQ3o81QqnUo5Fn2FxxcTNBfUZiftyXs4DC",
  "key12": "5hBerDg9Y5a4EFF5z4NPC2KvEdC5GT88iUWN8e3JbfR1uKsUYmK7u9bTktN6ZkM2FACGWxV4AhqX3AcQrhgjhrxb",
  "key13": "2gneCNPm6veBwpsw3tHi6AnXQmJQoxQ68zDaZiuef6BYtMZAQs2n41Ufe53egoi4QpL6LAmVrcjJJCFfyLbYBLPA",
  "key14": "dP1dHQot5GWhXSWLM7WiwrmNbY9K74E8MiRa19YHTuWt4ZeNPDtKeEzj4vvEXQzeQ9WHQNpH9JWaY1TGHKvqEQ7",
  "key15": "5hbjBVbgDRjLyZuWvNjzRUuLjBgUZsxZipp5TwfoRMEUQApbJajUDTBxd1R2GCBjSGLAyqh5WzdjmadcBMED5vof",
  "key16": "h2S2RWQXwASRNxYd1nPAfq3FbukNiShzWW7gbX4r92UCooca9imMHb9y38pAi5DudnGXQpnLUwwAZCVxMzjk2ro",
  "key17": "2zWsVt5D1ejWDYbg8Rj7i6A7APpMGgxWhcQuJDbQ1mRZKfV9iAHg8j3PsFSNvrF4nk1juvGYbnAXktKkkQg4XHyw",
  "key18": "2MHuKVVc46w84TEYbRMPPKRNeb4yVvjSSUrMDEn8jWhbhvGQZMt1tigvhrReEREfkvDqK7NsrgtnAKeN3fxRLKB2",
  "key19": "iRuJgLY6FemHwBJv9hZ7CPASoab37MN3XWmsiF8tUdftiNxUimpraBNo9U9EVf1QKv1CmgWuvY8zKzxT58Y9QwE",
  "key20": "4jVsXuVoEdBjsbNuN7sgHahz3d1tYkvc2RNkYFR1jKVJR3V9Z2V115qvvjDHgpzvWKm2x3uZVRGfbwsfLVULKF7T",
  "key21": "3V7GoAoBNb4LFdp3s59HyJRQtVXC6z1gr2cprv9Xrd9PRnPQW1UQAgUqDdsuznZMbdiLM9o1Gw4pgebWnyf4xVZc",
  "key22": "393BT3MdBp3k2sNmK8ZvGVNxf8k6buGLw9XNb5uWoKAzGWNHt1MCWwhpKkLitZcsabuEvNojSuUofkPKNaezF433",
  "key23": "3Qm1gtfAArbz3UugxD5Ercw9KG3BSKH7K154ZAa6roABUxZs5KkPFKVg577qi4zv5u7pv9dzjozxYuRBZYapfjTM",
  "key24": "4ZjvACVVZtv5qAMShpJsnpr8ZiQHjA9HPGzttHqHaAdCTbZ9kd5fV4i9VhaHdjeaGBwBtdxyG4a12JpB3XixkMCN",
  "key25": "3HkyrXJMGNdbzTYMiMrZ8bdLz8zs5UmK3j1DdbaMVAbWm6LDQdo58pGakU5QvfyYpCAbJRRR3kdHc5pEKyWX6j5T",
  "key26": "3eNs9LQd7fJcQ36XEfYgifqS2XA9PdzrUchoURybYqhvEX6GH63oGbViMth3ohycHGhVSycc6S2433natK6fMcX2",
  "key27": "5rvJcqozdJLcAkrpF9Detg8G2Qmsfd8QY9NmrRUVJoNWBZ2Def8qZRd8PrVhmdhVKHqtW1Q8x1rM5ybZzFFT9mwp"
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
