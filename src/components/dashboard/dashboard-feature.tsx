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
    "3G5BHnSdpYP1WE2YYQD93p97QKep1q1HjuN5kvjTAgJTzVHw9GiJonp7bN7KALC9YvM4nmmUdaL9mNo58er3dPRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Gj3K5SFy1ryh7b6HtEngZFBvNXGA3EypQJwiUoWNnn6JraLN71rqBwVv45Ssrk4j7ASEi97vp3zUv78dHitsFK",
  "key1": "2mPegeGqhCXyZgMRMEvSXXiNuoXUATqKyF42WmnVKzGDHgJLGRouQPKPrXPyvvfD3Xsrd8WPUBX8imRhCMCEfSGa",
  "key2": "4WXhhbhebcyjg42RwytLfeYcvYGPYk6U5dK9MijDFX6Ym3LUZYRmMuPTFuKVMS3kdGeqwQF1joNUwSeMsSUeNAoQ",
  "key3": "2qeSHLRscJ8sdhRy5heL9z4RwGrjwE45aH1oj5xhhS99poG6z196YMva9QgyBL6X4Vns3tuBBKSkfwBvird1qTn7",
  "key4": "3a9wKsNA4GwHSXASUWmQVgDP4daNcWJzVNvajv6EZG7nHwv7hRmz8xGmCjq6BQVoWzzxzcqjrVceAZCwy54QNUka",
  "key5": "5kGyQxsJt73CMKeYNVj2HwLkhkmbSWfcbLPguuBRxnaRm4XwW5m3imgBQnzqKb5yFHR1v1ueZaiVVCvG6zFfLp5g",
  "key6": "34GJMq7sRoURfV32qvM6cwY8BCv9Y1VAS7igDo4mx1A1LDqr4NmyCdFZae28ubm2KWtqpTiELQXDw16UWrnFEavW",
  "key7": "3CcX8SLb7zhnxuudnuU4845WiRP5FrSzZXL4UbZXcKreAH3FmWxS3uoauTBY3aV9Ctu9BtDUQUGrPCUtN4BFhcBR",
  "key8": "4J4ckrThzc2bbtWkBciEmjGA7xBbHgtiRs5171MdDLfpgBNmeVgDX8MC3vvwAPuFWdqHD4LAyzvK3t5Hqpik6nch",
  "key9": "4zwUiLbXrWF39e7B6rGXwgRbivTrDjcJcjPxHAVtY4vYz8JyUCbpnzQcEoqfAxVkxp8otHu37oJKq5YyxGSfezHu",
  "key10": "4FurWhTzwoANcXA27dYQ7zw9yyVLK8UEmAr5Hk9fRkNkJL8ocdqvtVVfLN6iaSVxhB25YfeQ9ehCD7HTfz1HX9sK",
  "key11": "2XUAUFZkwMGLfLfw6eJhamWM2MaBTNA2drVJcrCVFHSdS4xxmRayU83LywPBwvjFVf1GyFE8Ku5LKpsxJbie3Mbu",
  "key12": "ZQiwobR8TerUT4tMYHfVXLwKisf2tnrdobukyL52MhYQAwuFiJ7imRpoxLTNLd8Mzzo1oi1Anv5BALndRH5yZGm",
  "key13": "3MNCve3tYsG9s6tGpUCQVvXSGNJT6ZbyHRvbPiUdjFicTDYV5GjdbcAJ3Md6gnPXf4vAHhQKRMcBtonvYpavgMpA",
  "key14": "3AgojjagHosvGHbaD6cTvht6FBq7XngwSGp3Ng7p8KS1SxHVB9TQMeQXk359hRA69YpL88HQj1LXswDGzaXvpV2Z",
  "key15": "5yzkGeNz6NSWf5UrMJwKHZFwkXwWPFdJf3gRzkS7aaHz8h4ouu1t5iJhT9oAGhGPBAx8vZiFu2WjvHzsi3V2GsL3",
  "key16": "2koyzP7g1VD3Pus4V1oduaJCcT3AikAWExtkwhC9NctWVUWYJiW5pttf8Q5DT5Ddt6f4S6q2EsCZS7s9ucpatFs3",
  "key17": "4gxiCGaR9zHTL8KBMJH6RR9FWTbnxHY3qHtMZntMTGeUDth1if8cBsAYPCSm4Uwc4epcjwvhy3erJ4mzDuuQkv7M",
  "key18": "33TvCHgw3ZbKRQ8jHiPdpZjuTJ3AQiMrcn3y868fR4jWBGwPNrTn75Exta7cyJk1uqanyBpLpf93YAV2n5UwSJxe",
  "key19": "53h8z2i4mvnzUkf35fLeEoA2VMDQ8bhqsxQ2FxfM5QSXNG56AeioApeBYbJYDeRz5LMggxm9H7PFztUE5bTVFHV",
  "key20": "4XRaxyfJTd6cSMJouuuPxWfMEoW2ZviPLRerKQk9VhQmmMEU82qrfazr3QNRtjSagmukVjCXj4UQMX58HaWTaS65",
  "key21": "36fsxj5XnsxyQ1MBkMsCfrWAo4GTZn6zTAq7mMXfdQETS891sqoCMF9bu7qoN8ZVm6neRahGcQ4iSpbBbQLSoopD",
  "key22": "5wHhLxoA14iNbbsJMy7ZQXQxwegRaKULABpkz34xQK5NhoQtZUVYRV9Q2Ndw8GyNfKEhAQRzPvJaHf8W5SeaFQVF",
  "key23": "yA2wkas54MU2VeMnxuBUqFriJGyJK2bEhq5xWnnucCs7F1i2YfLvgaaW7usF4iAsc2vcqKyqws9WkNqdjjbPRRw",
  "key24": "2qEkGk2f9RRjU7JggR9RtnnNKM1RSFLcZN2NkaoyM8JkUNzyuH26FWk5qMdoNoeGLs4XoBjxZFYeDt1ttbQfhB8U",
  "key25": "3wXuj5zQcsFNGkvg4nmfSJHFJr1dhkX36ZXEuadi3NCrwmssa1npcHFC7WVjhVCPuzXRQg6nzSTEJAMEwpdHXvCw",
  "key26": "31s6tUoSKdfRWBfci1b6A9W28Ehs3CT4vg9eaM4QtgNmHwfybAriX68othBqYn8zhvMS61pRbMuDkvP8iei7kYKP",
  "key27": "3Cvsxb19WtQmu639qXGStafeP5owEHLem5TchrgBMn42w4Y7snWpcX2eFYBhWcfrKNsa611oTV9naKcKu96pcqw5",
  "key28": "43uA6JsnDXZrwiSS32GJFkKzYHExwNEMJJHvm6WcUPWE5k6QV7C7zfN4pSTd3W2dsxErnS7jVNu6iq7GjwN7C7S",
  "key29": "3jP4KDTQiSkuucCV2mt2DgRThHh9RMFRsRBcyFt53qDTcDZkkumaVxoqTpu9SsqCuaCAtu6ZJakJQKeV1bn6sm7i",
  "key30": "2FhHYdTjzJUrKWbi8oMFdCVwcDME8GerjLRk4jXekfVuLLkRmwfQhw7fsYCzeEWtbsqDSmqNVYw1irnmzatt7wN3",
  "key31": "2R1Cc4C7GbcoWuu5VpFVCCMGzRs9CNrb9jdLWjKRsxffKyXkFZEecdayo9aZQJEc3jsZDxvKBYdHiTSNvrSwZuWr",
  "key32": "359ieCo2D1ArftgRHy15QkyyodJ8SddDirejuPE1zjQ7S8RscxQNdRAWvCEKcHuHuQdr6WGPNbxfs28U8wzhwWQR",
  "key33": "4dtS9ZBF5PjksRt4YRTYMJ2gGbpNUWeWEAaubAUdzyoSSAUJrK4d9Zx1WU9bpWATSkVZ3SXFgYkP59GQFYzUwrFK",
  "key34": "2hbC3acUZg7rG5oV2q5nAELePgkpEX2dAeJfvUeQmELRaqSwFzJQWPMHjQTRXNsUxr6d58hnXXGWVk9xqWbSxojg"
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
