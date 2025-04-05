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
    "RWXio6boEMo2q3Yupa2tGzrGGJhD8s8AC5vZCG5yRvn7KEQoFX3EJ41xcZ8cUYZ8FxFgVr6wQii8gCLQBFCfMHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fmbX6jurScJiw8tcg7ZPPyq42LsgswKT97EjBjLNFu6WF6wXzkcg57dkUTLyJvrMc6A1MRwi8KrowZDcnj8GH2W",
  "key1": "wjSCH9bH9yuvLuJgi8us977Qit87PK56Z9WjQA1yNjoYLHoxb3baHxw1WyD4Nx6TBidBWPWuDhyJQCfwjmEspZw",
  "key2": "55kRakAPEmxCqm37muqhsm69iQVvpREVY8HNGJ5BHE2RmbLW8c74BKgcm8ZsAa7FybzZNJvyksm81Z6CaDTiDXZk",
  "key3": "pGJS4hJNB2MCkD6PPt4aVCkqGnJrhCcjhUkDvw5aVJ9wqyESgp7U3qNcN4sLU5QxQTPWVhdkwbPyZzNXePhM2un",
  "key4": "qyuEdWJxw7g8rCJbbi1EwewaNoT2zNcnnoWaHJj1tKe9LFDvpZRC64hdgMTEp8sEvNdsonJzmWibMEehCpT3MwE",
  "key5": "4dN3PaYjjGuDpHYG12cwAuPALsgM1ELC45Mq5iEeRQwLibZ9GdLqVPdhKzMh8mC1NFA3NQMq9ZEPPC3y1qVNLmJ",
  "key6": "2mm2tLQy3Bqucd1hghfoBUs71knBdFv7sUSyUCGFghadELxnY8JTBXfF81sBwiyK2FAzqtdqESsrp2s7BDvRiDgM",
  "key7": "tEbvLh8PWyvCB7WCNkPPAqu289awdKDshTqyGLZ8ydMFd2oNSct61iGTJ5kuoK55pbr1D4W2co9YKRNtSbQfhC9",
  "key8": "2fThn8yRJCWEkuXy9yujPv6aHRLD3hDumbxLu5RPUQirjohGFkwSaaBSCPNwGwjPHoBTayK9fLcBRJ8wrazsfzzz",
  "key9": "5RajpKP7vuvQCNtLoppDZ5MXsRhvmatUDJfQyvKPfkySjF2JqMCY2dYQSit8Zb8h4JQ3goHkuifKo2497hUctZX3",
  "key10": "39Me7WRWc7sSWApHmcdgiqZYRb2XekPNpioDZLg7voXDUek8msQV3pzmVXmEYki4KaZc1jkFe5Z54fjQW8QTfrcU",
  "key11": "5eXCY5mzBuuqGs67zbf3E4C3hbTb3Vd53TdRGm2oGAe9ghzEa3Nn9zw6tY5B2v7mqNdTPHaWRJLsYzm3FEFKGGbR",
  "key12": "3iH3TPq5vE5PtcRVCSzicUhMrou43sw7y5xzka3fereCjU4RurxMQsRPzzbwEWrmPJBE8gbJvCF2XmAGyXKNHzD7",
  "key13": "63p6WgyoWY9dUSYJVGCxpbHieXLLPajsBhFVvFuKvMbcwnCkBJQ1y8S6HLmZbyA2qR9tUg3LvHbWhGop1LELpYwg",
  "key14": "3aH2Xk8q5uPYZeW44eQk7mLqJa18eehjyTbzw4TedVJbFKvqPUcSyC6vxmSPmC34NA2xtoRM4uCYzM2f8orex8bP",
  "key15": "45HwS1P9d1a1ggTcYbCwT4Jzu1YZrPSSS8rxL2Y8iNXggMZWrFpKZLuHXZbYifHZ4gjcmHm8Pcb2bHCQSLawfFuw",
  "key16": "2Z8EWs8XbLu3rKgCQFRpynoLtM3LC9FifJqMQiYXhEgRknqrz8p66k6hcrrzsm3RUUaJ4jvqgf791itPq4effFgk",
  "key17": "3gseuiiZtEU3Mkzhvc9WckWgGDFEp2YC5U7xp2metWUHhUe1fdWAZ5w7oFehJ5hf3BHBPJLyCoX7CERKB5uWDmjL",
  "key18": "5qpMwoxdH5WPkJviM4F48a9fBXqnE962o8myvJ2MALT4jWqzPyXdB3cQuU2P2XvvbTsGaK2WNcGpmeQcWyR2PEnm",
  "key19": "3VwhamDs7zx1Q5khd9vjFa3sv1tjujhB6nrXZRuffGJXudACXksCjaPbXfxV4woy9RLV77UEcbpJkViHjjuBrxbP",
  "key20": "2jEfCkn6Dr6iL8Lx8sxupmEYT2YhwhvoFs1RsSFywU7arcSdJoKNd4Bj6rN2CVMYnhKwFwBgZwGi2nG64t5XV6Av",
  "key21": "X41yWhiVmmiGVCHCRfvtHGmWspB4XY6iHaJ29g8YryUs4B2sjq33e8xAzYzcQdC6u3JnW6T9szNnKZSzVp7Rewm",
  "key22": "5TBg9xWZT4ehvFrU2wTmPyB3TYa6j6tRs91YSpFvt8sU6rNcijQLxFg1Gs6mGTcp2XSPatMfSyJwCmLP7k3Y378a",
  "key23": "5cyxtsZVcQTaqbUVHVigAwzrnvhajEn6aSYFxQVrbZyaWxoHfEefh73twoFZb6D8VRNQdXmXuKmuSHYTekArXRNw",
  "key24": "61kfw59HMvZCyfvSFJT5bG6fa4thGM1Qe4UNaDCefgyUTshDUShxm6gpy7amgzDUKT8kyg84k9qZ3UWt3EyeJa5W",
  "key25": "2dZRcZiG2r2n8AhuiC5Kw5tY1Ha4RidKQHwrNfNrQ5ZjiEEGgM8A8t72okriXFkY5LbHTwFe965rRzNaRjNzFWD",
  "key26": "5pdoWWQbbKUAWPHVFXewArvPPHJanXunKU2Bi3b4Asec4z76gHWpoiKhLQydgR7nAQApWCbocC73BNhq9mHfpM2z",
  "key27": "2SyLDGLtutMj21rDVTAEMYaMTnKJVEULCsWsbPnqcu5TwQgL2pGizFngQ8kryYWvwm4CZdvJLvUP9ymZzGGKtn6r",
  "key28": "5326ecjut6kgQ9axxgEvnitCh1QQYB2J7s5uGXZF62Ak1i6yjpQDZb8tSbwgJ893q8RAtvBmqXdQeMYg4L4gVq1D",
  "key29": "5RVv5M5Sn6LDUoKqyPhDvg4WC1arQW6cW4mCSxr3srCzMMbZ5jSEXsY3ZHCJLBVsFwyBW53yeBtw2UiTg3gShXft",
  "key30": "3HW2xc6YKMmNYnrhKzg7tv5EvZA34kq9CqWRYgr9Pmd5heEBETsSmGqCrbmpsDxoT2hHyKqhju1Kp2NQqCp4FUdu",
  "key31": "5iKH1be45mQhfjk1w1cFgvqghXVvNfHyBbctDjm8uHcAnYbddHdecNxWdZChuaS1vA1cXwqG59LjfNvkL3sT3YvL",
  "key32": "5iwS5E91gHoVWshw4Vx1z1oLVHbRagU6TosZZZoqBNyN7NEjrU8AnVGCJY1SKWMNgmZbawyXDQvWEePPxMYJKcLN",
  "key33": "2M3xuWkGk2TgL7w1tAfGqcuVRXehC18uHSGJBvVnPVqx6Dyy85cbqsbMkAaPtNgYFVjWfu4MjjRZzrUoQ3jFCT7j",
  "key34": "3aya8tH976aYTdajtj8g6JZMUZ9YhQUtsiwnr2jqB9xRWbee7p8H63AzmBuvmYHbyobGdRgdAdzwrfefGB5YKuFs"
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
