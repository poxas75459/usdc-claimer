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
    "31RcV2SB1a9WVq2tsqM8ADmCCNHmiHvE84sUw4KLgKEEyBxWsfZAThrbCRNd75pKycQ6nuDtDcC63xVeYDf1Pskq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rubCTjzq1ewNiRcmEhxFugSCT6cp9nmQLEtYVseU8twFpAR7P269EDT7xeAksgK4np9vajY35yGExnZTkG7tY3M",
  "key1": "4aq5f1mk5ghtetNwfykrscfgcKb8RtDMa9MCNEV7Xb6GqJhhmTovkBK2zfGtEys81tge6nd8kDGtN47pZtPKLwSx",
  "key2": "3rQySCyoU6xq6r9zjz6HoLibfFqL2nCpHZQ3N135jw9kN8vkEvfmKjBk4YFgw8GYpqfiw1Srv3wnAX34wajN99Cd",
  "key3": "WBzr9J1QPezhUQsQJcYqHZsfY35AmCLiRQeboHVD5cjHQFcgyDUDX6bCXLQSV5Ki4d3iRyNrZCeXsGKTFF61kxK",
  "key4": "5YKxHZb42x67pf38AY8RkFWYog2qkipRxhMpcrfAbXG2LQ6brGGi5QoQfaK4SgGPaX4u3wsuJHTa7nMVc6VeBydL",
  "key5": "4iRnYvUjmkq3dzP4m4vzMes4Sf7WFAgJAJDWiTWHGA1LYiAkKHGLrNfj3yp2JRp9WiRcw2tHwhBRZmM9j5UhAHs4",
  "key6": "4YJ5QoDxphjd63EKoYD3w6fDA1T9xNVbynxEipSc7czuJzZ4UFtptECt8xP9siBxC8VUUbcqKK8GHD9wNNw4b47d",
  "key7": "36T48c6ChGicntYNPVwCdRfUhqdCTNLeUQZZ3i4FDNK6kphsC6Qpsd823NsjVoGRy9UpFBkEH89MHxx3ejwoc2aL",
  "key8": "33jg5f4oFo7v8mB3U8dv2NWSmeow7svu6TLqLEfqm2AYPwwu8rwVMGR5tWSTkyjHa69BtugdLVXa3vBUgJZBShUK",
  "key9": "5gJqhyyFJmSh2mvcCfZQVm8nexozoA4uaSnVt32qEUGFBKeNMZYzVwFrAz4dFdm8YyAWXjgra4WyFvCDaEk6Zcpw",
  "key10": "2Cy34mQAXW1fbQnF2owrx3xh3zsJQqydBFBbBz5KgMCbqWdtctwQiWuWMm5gj69ep5UMjm4PhNkaGtaEceDffYFP",
  "key11": "5K2dr4KTjTrmkh7ccgN7U72QHUQiQCbuucBkbb8sfHJw9SZVi2Qiqvfk1BUoJMYwiDdTcuw6f4QFYmD14HqVV4sT",
  "key12": "AB7zYaVvbbYQMZs5WjYbzTg4tMud64mdXmszMKPGEEUjGpa5fDWExGT6AdM3B2gbbKLYfQDv9bwDQkNCtoCUEgy",
  "key13": "2amM17ft65kqSy5Z2ofqRxs8BQect16jG22kndS2Vk2FJjJSQQQcqZeZK9vXNGmhYu9y2Q1EYg5iMR1b5kGsFbXE",
  "key14": "4LBCRmnfkeL2huFu5HjmBeSFRb3UwyHG9HDcAV4vbGkfM8rHAYSkycnj8jcZwzAVr1xtMBhPUstmHxgPTbJPYL3J",
  "key15": "5uYbXHKAyX69Ze4jVNjTFdyVbU4sRnf46RtpMZres7vbtNadY7Drw9vBYi2rJW57FrPYKxALkYxty7fpqh42HKdK",
  "key16": "4K8HGhbwNSK3ZLaWYxwibnt29ChrwXmsPPv2BgxBS4wzEv2ba8YmYbFpUkXpjAXY2eQyEMmExEhurH28xDhXx8NB",
  "key17": "3zWombw67qvTToZGCGR65SuvNMQJNkZ9B56mEc9LgDXBTJupNeChsFDEdZX6me3bNRwcgSZonMn9B8A1HpaWimR4",
  "key18": "3cMd95yHvT7cEFfPm6LidCEAZCePKqxpJV4TtdBsierYWPUowSy3QGtwbSV2ZZdemchCwsBJ8t9GuvnpVb87A18d",
  "key19": "PsVwWSTdD7RmATEu119CrDSuxpB1HGDdVXKbHypiT9qB6aynWJJP8rtkFxDMwKBx2bMutGC3n7RjH7FwrmAukxG",
  "key20": "5yM26xhuBthsT2qpnVJseNJLpji3QAZN7Soay813ycUsJ2a6rGo3r2bsZxJzThBK2qtxkUPJT18wcHt9j7nJS26w",
  "key21": "52tRX4yXmwjVsiipt7bz1koqVFvAApcmWRqbjnNKBu6sAJzrh6cbeY7G8mRYgHx9hrxQaSJbKH58NeR88oB4yTmx",
  "key22": "5PHCNS3aupDUcti1QPmixcAybktNDywLD1hMSTxBuj5n2RicmgXF7YvAJhD7HJzmHX8JrNWqaQq98dUrzzUyKQMF",
  "key23": "3BLKqqPHHGwN7PY92B68872wDTAaGMhmKiv4fe4i42YiuwwjHk3gh2XrfqjZy7MWizpSMW6tTtfppjUCwSYUfTEM",
  "key24": "5WFgj4swcY44n1LmJ8NVC7v8rhKaHZaMcgd4NmBnnZkvC1uBuXbH1Y8ppS3gsUikaEwMLrTEfDZTm9ghfuCWsJtH",
  "key25": "3umFgbVJcHx6g8p5n8ByCaFiu1wWRD357b6gEJPdpQq5VrGNE71r9ww6ZkVGZgoWtAboh4AyiuuX3Gq9n8ch1Ehn",
  "key26": "9oGdgstrj5a1Wfqnf8KWEB3qm3XrDkVXLDbYf4GnM48v5GZDm1n7uV8SHn2h3i3s1mspc6FD385ikBngDMcXmZ4",
  "key27": "F9XJEKGxZFwNcqrV6mgbTgBbMRYbwcTMstAs1S57fp1Stas8VKL9FzZuKYdw8eG8xtzim21LhuCx1yJD4kyzpod",
  "key28": "5HcrkfFwmfpTq61LnVdrXYwzBqvPNqDU5pdgk4gspZtaxen7rSEy1xs2zFMrqKa4tjKniBi9mUkyHfFYJRAqokdt",
  "key29": "3821fDvPXHnMWodGhCjZbHvVtirpP6y4Qy1tAcyDKWLLr9cDzmnaMJAHs7oBVpPmxikxBjqw3vd2ELzbn2zEVRCR",
  "key30": "2msaE2yQPa518d1odwewo1jbaqdcXELQUQfUvaKEvawfJ8wsDbDgp1LwpV7TfaPGZHxrKr43FNvPNuTZxjFNSyqm",
  "key31": "59xM6yF5FHGfGfAqshXKLrxrEzVgeMWS6dC1fmk8V4s4FmZszogHozKB5FmW6dchWjCJ9sEbDyhRNHnc3jSQJueY",
  "key32": "32JyvQqgCDsi9Fy1czxF1ivX3xJqJsAxPX3MXcmzPTSwKxCZD2HYkaP7a1erbJtvDcPpALwcCK5rNsxt3ej4q1iK",
  "key33": "7491pLKKd4jDsy5Wrbb8Pc28TAPYtY3BRHUvCfLJ779yKYcWbpos9u12equMZ9jNCWU2DszwmMGMEpCSuH1boQM",
  "key34": "LzACoKwUhwzbuSrVu92w6DDNidDmhrd9qQrKD53vu1FjpSRaWALHziAn8SvDh48wL611tQUgU3gmvhtrUyvUSAu",
  "key35": "4nTJVnN25Fc6D9J9ZeHzwiPtLUtc6rMciXhx4WyH1YwBZHqYBsANP7V1fqwkj4hwwsHtYwumCWNT1GKtx6E5iMss",
  "key36": "25a6QVWD3t9PgBfPmFUKx41n1HKu6b9fNCTDG1NGLKCCa5cibmpmBHuATf4Rc3ZpbJzach9sor8p8DAopePd8H3H",
  "key37": "P1bHGrfx9J3uPnLSgNRazC7caSWdekpvjU2kUy7B9BjQZk7LrZPHJhqUm8To3BhBGQ5hRUJKx3GD112xYnAoffS"
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
