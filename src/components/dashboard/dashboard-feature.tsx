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
    "5tgJ7yzvynmEgjNLUkkCrr2qqB2YL2X4zUaHdNbZZMos7BwzGWNWWowsQQ2ovHniZhn4KJHJJN4gyQ8jinWf7jLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CYfk4fHRTusZm3sfqBuTqR1yQxHtB197gvwDnVRfXWuDUuUtwbKqGKXpcoXrD9pDkcxaumVKFBH3dyzaU3fbaTA",
  "key1": "cNnPL4pL6Yj4pLptHYRgDwoEGLuMbAHwuUe2edkA1B1JEwNjp4fPdQqbncr3GQ3ufqTh3LqsZPJo2F4CjSE9nuc",
  "key2": "3KX2RpaeymEsoaQcvujR7zi4aJGC2XM8KisBUm4X2tkgynjSHa2FJSLEYt3Mnx8kEqwuBqN8cTnXEvxBdW4NNc2U",
  "key3": "5zGBH2udJ7ZGKFPyRBgN5J1npZ37P3SgFtrLGsgRAomDLZaJbjiqq1zD6EqM2AswpV45kwCfRG7RUhmgW9q8ZvnP",
  "key4": "2Y8PpyCbxDQyvR9ZhuqR7GFurCkYaUZAyHABVLWSyiF1T6V768VYvxYx2uqCmEtqvtemK3cnLp1wc4Me7aaJwUYg",
  "key5": "3ezNyb1aZt4k1rEnjJ6xcTMyd6gaZZvbue2pv8SuZpiG1fLss4i4T4WeanUCSdPsmXZUVXnJh662DoM5xJrfETbd",
  "key6": "5rAt7TTE3d84eRsqQQBGQFbnHHfii4FCbFEZCvYpy71RAbdMj8dzrUuHsmfdsDAadAvoLUNWCeKFzCbAETfz3QNF",
  "key7": "65Bv7VqU5EK3UPpphVaMthyJwko8NgzongC86PZL1eVm4KbU6CdPfKyXRHeDQUASZDs5FssBQSLLXJ27Hx6bY9Jd",
  "key8": "5DQoStrnkiNZoijLZegux5pUudj6mvDRexBt1JMRuEg2jUXNqMSht9CcKKBqjgSHFWA5ETMo8HnvTsyVHqAjN5XF",
  "key9": "oNCw8eKYGYpQZzJUzWWoBzHhtgJ3bEoZvt4nD8cLM8GjYoR8KmjSe5nGD568iGLpngsuPrw7aPEqPVh1256gn6T",
  "key10": "5ohoJPRkFxxbr7Dmas933yxRfSYq21E67ikXxWUmpvijkQZW5PEJSx5APLmNcw7kyoJBdJ4YZf5Cb54aaVt3NBgV",
  "key11": "4PUYfBMFKowDGY3G6CedJqB2EPKT9oQrAJLBe9cRQZLKKyfKSvb1jzAfMecbTzGv3Q6L5qwa4bZfEASBYsK5fm8X",
  "key12": "3PVN38VEmSHM4sGJmWJFHKPK1zuAe9t6pCMPwtJGdWLfzqsFNMLmiUm9KXhzKJAqWK4kphfv9Mmb5fbuLU8asBxe",
  "key13": "56Dmkb458czp9Tksf4m1aNQ2frhsNHtoimDs85KNhpBXgXrqK3ALXXB7v2JURuWyBTzxcp31XwLTup4c2o6mCDpz",
  "key14": "2d4efTBY5GUr7wK5GxucQy9eMcVguz3Ygf7sRpV9SKM7zEVX1dtKu8KrW4JkvmPBR4roPX5N4pQDw3rLHoqVcSF1",
  "key15": "2k91K5kqryssdr7xW3TrzRjZ789m3i5BMxFUbKgRZZBijYUsZB8YX3LVHwyP8aMHs8pAHXB2ry7mV3Mss86H7jHi",
  "key16": "3ufANx4q8fH1AFzdwCuDgn24mPThrwHbUw9nUcXDX4qJ5EiiV7yWyzx8DvPuSPQKqNC86VUEuD4HixYyYrEJiR8Y",
  "key17": "2x4i4n3FPYDpVC5fq4ZiMBGyPcuF9kXDXPcatd8TwxSZ6P6kbQjJEyjVtvNQHkwwEHthuT8dQ1sE5YFy2X2ubwKv",
  "key18": "2TWjPcfSn31RLMHZUikj35G3WUSiREX9gF3UyV1qZyijJ5qJ3qYLtqvN5rQ3diySEm8acSdZuAvzUKXTa8MgpCFo",
  "key19": "gQTNa59YXTdVVdcs1weAcSN23MEc36HxwCDnGHJv56W1hU1yY2qXPFqwqGGhSSpYx3dNZcWWSoSUbGZm6gcvhFo",
  "key20": "2X9TN3h8m7YSupJu7LtVjV7PvdQWn8efcjwbd3Y4YXBN2UL8FyAtqDFAgvYoRcfFi5BbXyoeJVuK64HgVQXznKsN",
  "key21": "2Q56DvSXWvc7ENUdacLr9KMN9XeV84ATToC7KmmqV6RBFJy2t34QXxgCEFJDtw36Yw4W2y8JQjRTj7DAn6FiKMBc",
  "key22": "64bGTV6av5GxryvipVdq3gursZ6WUCiqbrdYB2VEh9ADtbudxFuFgNwikZg2ba53MWxispqSuzpZ6Y1YntSZsuo2",
  "key23": "5qKGsdWoCuEWNqZVaFLXsKdou5irXmc6Bv8NyVnGGxwpnrYofMJCZvavjp9dhSKqVNevcB9ScMEs4Xf3DRKxUkL7",
  "key24": "2S9foHqtxvqzaYdha8oLPrsD3EHrGQtatVMshGzLojxTHkWk3E3yYkQCnMNXXLMhQcPtGgHfhSnRHBHRSiJeRS1p",
  "key25": "4884xuWwMe9x9scWJxpT1GBXo76nTq6nZo2zJcJCnG4bYv2ifvTGHnwZvDMGX9i8anB1tx9Co6keMtJ3oWNwmyto",
  "key26": "3Af5nr7RjCuXpKxLReWtVj5fW8WScLyPjFWMQp9tmXdsYcWHkzi5BcLbUm4qmUwwP73j7StSPkxeCLc8pyPdDYFa",
  "key27": "35ksUTk59RKLNnG9wdxfto3CrvAd97g6vE6LBJS3ZsippQKmzivkTrcFU1xHU3iitKybsgiGVKsQ6nVakX1zrvGZ",
  "key28": "2Kr1n6o6CKkzdgJx2KqLQWqqrxbUbCuqTWK54zr4gL26WTo4oW6SqMkVzVoLoDjcHfsGNo5mTSoyvdfYmpehXwTE",
  "key29": "2UJWuzZgXzsPhNHvpUKTG6fvP9E2XMDLNHkDstqsAmdfDJtKaTDNq5SFYqyzYJDfNCK7T8HXUmhS9732T41T4cKf",
  "key30": "5pNhAbNCC9FqtZurSkQa7NVBDHAWBS9EgDPzZhqCFqEJLZzaCQc1b2gmbw5nSacmmGC47Ayen1YvMyBjwwzqdoVt",
  "key31": "331w5RR31uej3UXnEBbAygY6gxAT8hEznPMVsFkCyY3njyXUjVqBYMeYbb7p2NkgKuWoati7qGx4hQAqaGmqSAvg",
  "key32": "5m6o48W9u37yc6URNBAsfKzEoJwtvNu2qxyJYiFoZfn54dMpsPAB4GxRbHcdKQhZ2q1yJ4uXaEMgnBuHnTfFGyt4",
  "key33": "5rUgWN7xh2W8GzKAqZCuRTogdznT6QLgzBSHeUF6mRmbwwpMrfgy5zdQVxnynabqMrNPjZWPNDQ23KkKBycp2HvL",
  "key34": "286D78HF9HpzKYHkEJCA2CoLwugn8NrGhjreiuhZZaHceFNMFRQhxyiBBVYQR1CfcCySbE2sQanMKruabkgdbY3L",
  "key35": "5UrzQe3vBcRPL3saF48fEFgd9NPPuKQi4NN75gAcRHWCCYKY8e11fik7PFfWujJiMaQC9gJediRDEmXG6WLhe4dD",
  "key36": "WWD9fRJuUsn2VMkwj11Nvw8jytkghmqcMaoriLr9yvAbzaJP3BdGZpptmRPXGz5nhZWcQn6t7urW2MLfuU5wRer",
  "key37": "5Unb4arcbT2aTio2B1iNwaevKReM6VJS6TFdb2gUTuJRPd7jcRtbAcUygpk73r4kng6M7LEavYuANCo7U3P4VL4c",
  "key38": "4oyfZk8EaeiBGXL5F6zAJeUafmxhcZJMVQVE967gQnVy6yWrNENgTXcrchdh4isQ6CGPoQmREZC7tDghPqKvLXqv"
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
