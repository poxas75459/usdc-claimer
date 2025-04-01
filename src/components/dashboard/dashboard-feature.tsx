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
    "3EwgzLKNhLvvfujyhDMtW6cCUGARtWp4b3hM9cqMhJzkC5Fsi7Vbd7zqiVNhMVyyGqzPNd1g7gB2MBzejnhDMjaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URqwpJtU34b8jNqF5qwpcHCw3PUuh8Laa3sTS8iCwuucmAT6kgTWRRCaov591nhntEvkmDkUrBFSEnhZ9gsvg3P",
  "key1": "21pYXdLj1NxbSWhrhfHQuMWDh3uf1ZeoEuThZZorD9z7i1joVnCSeH3sF3mheZ6qrdabR4miMxT7HAC7piMR2tmy",
  "key2": "3LaRa5AvdnegjgXYUcoFkmXYzudGmLXxZnQRzeqyfAxbyQvJnKbzKfPmnmDPm43Kof9fo43vctFQgK4QGK6pQU5k",
  "key3": "5MMz7dUjNjouneEyqW6RPWjsz3ChvN6iW7AVmywWh93gmUzZR7iXS8FfcXzS9k4WUX3fMPf6dYicWTMiiqDaprUr",
  "key4": "2NP1jZAHgAyWqdFbE3EUUstTeR2edQe8Up6fbU2oNFmcL5MdcN25uRzyiixtcns8CMqvoLPTgSVstQtgaN4rB9DQ",
  "key5": "3xwKF3P2xAKN1NsV2kQuGYMTeP5qDpdQssGSswuTtZSULFZHqwoayU1k1FVPkhGxvAnEiKAksPwMmiWHJExQks8P",
  "key6": "2NUmkiXnXNJgu9MkrY6bbYPDGkgsHaJ5Bi6zW1NpdE5jXqcaqos6hUN8WTsdDfSxvRe18Z16dJmg39NZMNyTUD5q",
  "key7": "5hzsqr44QqhDuoDym7C4XYqQ8tpUFo8q6mvj5Yy7AZGaNn9M4kfbzpibMmKTDTorhqqLr6kTyNTvLGTY4cAGNVNb",
  "key8": "4xuv5zUU4nqb9HTBU9N9kiZCKHqHam945QB3txBdzZumLSbadJesueYGSYbaVHMyDdfCd3HNabcYpFC8nA6o97yE",
  "key9": "4tYMQTA98tGC6MinY5uUN3WngJNsQYGeNv91YLGKLsTfxPCBumKu4qGQmUREyWLVSWH1TPVvfYqUbwchnSJhaUAv",
  "key10": "3Yd1R3HPhczpue6FWvnHWBSN72RgKDtqbgGBVDStpnZq4uWkdfYaDSeSsqP4t8BuuMHqWnYZNRyBrQAEqEVG7h69",
  "key11": "Xz7eVao8Hdb3ap23B5VgZv9suNJKDFGZDw7WWdquCh18gBNsE2y5tdrPCnzgGKAciAtsf49WveAFXpvDk4awWZY",
  "key12": "4YHULCiSsBdXmKMzri6NMQZSUcW8yQ3jbNsNh1MoCZyexW7V2ZMf39gQeS6YRP91Kt2J2ByVgdMprsAAY3dbe4tZ",
  "key13": "647bkbVTEQ5x7WaW3oFDNTKc1gVcvHMt1KCkVRhU4ozEZHCkxeGUsDjRQef56Y3VK3zFnr7Gc8xi3LY9d1uUdM1j",
  "key14": "2S2E7STeYwtjPsGb85FeDBcKqJfmrigUajRwtkAcYw1dafFbQLFAgXKD4yLkut9bH1ofNoZqLMrodKdCHQUQsedv",
  "key15": "2vWhWPw7ZWSiBDjZQiPWbDS1daQQ3p2aHhzHc59tda59YAgyNHprZWLaWgz2FduTj7QmFZm8TbKcVhpxzS2JcFzz",
  "key16": "2g4J8xeMGnoomYJ3CVhe6AxK7qTveE2Vh5gKioADzLH8S51xgzu4DucqUMngBMR1WDrzBsmo874bCDBCjeewfqM8",
  "key17": "4ZqLGNRx8k1bcYgFbZVU86Ytx8HM6yR5xKmapZGkJFEARVv338tupV4za2AhueHqhubN8etDy23jgLxXhYZtHXaJ",
  "key18": "3ZSMmERH9qRNinM8c12RXYZUvym5LtEMLs6K8fhrz5b3GxjWFX8h8EAFa8egqRZUCibKYovDBJi93bKHogdDBn9P",
  "key19": "3gztqbfjsFdHnY3RpWNKduJZ3rj1g1CsFVfrrwmxUfmQDNQHEN5JJ4ZubcgzBjk3zNeaSzXj6k1fgoCY3Gvp4q9c",
  "key20": "3N1PpjwHoYyFHhiPXipAAR2E29rTgaSuRREgXz6phPfA7sexVBYqCzwJMyrZAJGw7BnYdcctGvrFGCuvBCXFLboW",
  "key21": "5YJKLrCqecZ7Q4kwmYii6ELBH4uRbPWvHq8nDPrT9xMr9jzrCrVYuyrNQfoJKn58Tgu3k3A9yXNzykvTS3ZRQzQn",
  "key22": "5STmAXCbrdVvHDPytHws51YvH5EUWhYqCcP5XdKWYdpeyR8B4ZV5yH6XUVTWAa5fGeXc7BNKmcCPA1AhvSzkbcn5",
  "key23": "4qkstK27QLpDiHgA9MUP2k7asUv6SsLAr2rkXAp6PJiq98MsBTYVdPX6zsmU8rjQf1ATFSUrCSUjKk61AR3kqfGy",
  "key24": "3Jy67UrzEwVg3Bayid8X6fx4sciRpoNAe1DkhudU1UVEkdcXttUZZNBtGAk4tsFUsyjM16NfLUtKwzTw9Vfz8u6V",
  "key25": "WRGuVsMw9yuH5bybCiQHr87gvkVvS9wbVPBFwjEWhCoNsi4cZ2Nz18bQqLugfuZzLU3zC8SfZtivi1gWJaAF2HJ",
  "key26": "2h1dKzZEF6R8D7qZtAqGAATc6cx1fzTWWC7FEz9fFXyXFafoZgdCV8d2rkWiqJRGEbNbk6GnDUotH3UFtuoeXtSh",
  "key27": "28F3j9ttJqt3Mqq7KP62n7JDmdJSWarr9jRv7uDs1rRuy2bJmJx9WhB7tE79Qi7b1txn5VhPkBMN2ArZYE4vk4su",
  "key28": "4ujmKM97SmUqvFvwymj4f6fEYBsbx23a1jmt39x2wrvw9AfJ2UBR5JTwTz3snwyR5iVKza1C8pg1e8sQVgoErAhm",
  "key29": "2jsfTdoPuUcDiY8jBJGczeaRvE2SYwgB38UUUHWxG7prEUE2e4Shk8aWmVduu7JyQ3EWXViHyb9QBCYLrigpjSGq",
  "key30": "39q786JgC9327MGjunr1bm3VfgrxeYobNnmp5AzeCFedygYLaSgn9Z25yzoHi9pt82jXx651F8F4ikYUB78RtkXG",
  "key31": "58xct7jG5FVPyBRF5VUSNfa7dLfeFfQHvCM8HuEyaVuyynn1jdnPqS7tZt5nE6PdUG3HDBQvFmRkyqBDZNmGfpo5"
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
