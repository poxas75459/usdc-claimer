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
    "3Ht94yNMZ1J6L5wRnqUiuyQNDhNsdFacL7BDEv2JVXaD2n9rR3Zc4w66Z2bxu4ZqUicLWgJ8M7AAuW6C7mzmdqhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lp8xQWpZZvYVHHfx4ZnfBTDEHXtYkem37unMwAkc92WQJ5JkN8Z6Cw8PzgmmAGMGH1c9Lii7HEPfLQPSF5DsSXN",
  "key1": "LoLEBfpjxev4wRrU3sPzPgPsNdehJu6MjTxWU2nyfcWpTLXykyFJhZr6fsqzDpBVMYDDNKLiqHg1ZkvukzoiH89",
  "key2": "rEcQhw4xwxPXEFCheLsmxuSGsi6vvX67namyZhDrVyi82o1YrV4XLhUAuq5Bf5uz8cXoGihpqAB21ECdiM8AGhZ",
  "key3": "5snZYMX9T4UVGLTx1pmwMQmkYQh9a9PE4Wp6HYbnfPcreDj6GMgo4tmQKQei5E2PM1RisC6HYktEGFC1KTcfZZZE",
  "key4": "C5TUtk1UBcx7TtjyZrX59q5baaevPDvfnHusoRFUenrZWHaGUTYfgz7oDf22tn7UjN3LeCfmLDpbYnmScdxEaXy",
  "key5": "23HSRc4w1F5sRxbEapGD8JwHmqk9VqrqZXybpt5uw9vtvtDbAnCN2w9rcHyqTFg5Q4MfoqJCDi61RK9fBpFKux3q",
  "key6": "5vTnVtepimxnE4SD16q88N8YYWSENwKAK9GvdzsiURKtJHK5HzNwhQ14WBVU2haYd6o2714oRqhete69Zp7rXXN",
  "key7": "2CXAPphZt5A285MwvG6XK28uVK4SaqgtQrZc5SRKPN4gt1aSzBTHwhebudw9ubB5TqvMkMai9s1wxVw4fT7fHZVG",
  "key8": "2vjtMPDgH4L2BTjXktdTwqHvqeimw1tZoKDQbDg6Gfvdc1iGXcJJjaq2qXmwmj856iCAq71i13ZukLyyMohWrr2U",
  "key9": "3CTXJJ5K6izgRBe3kVtV4v3UeDBswMLhozwLCNvWMarHS9sf64bqkhmnkaiCjXB4RQqgKHeBhAGBGFSkeSRJJF5k",
  "key10": "4dFQWyVGkSfvzrWgGrZU6vjocbSSanjqux32wdVv9FEbSWz2ybETFE7deWeU8B7Z2saiYKRwhnoSyAyLotQKP5eJ",
  "key11": "4JhdT2q912aUtc1AN64FnEkWoG3RVYgsxEnruoJ9HcxWapsWvfdCVVemv35VF4VQUyZdfzyGepAc43VWb8zD8ps",
  "key12": "5iwdrdmZTPP3AVFbRZGGz5BYDmYGns8T8qfRJwhgjNbSCQRMznY61NP1oZXAKn8HnwMPegFc6GwGnVkAVtwZRguy",
  "key13": "2HKXPgJoTofwcyaJRF7uZZFtDwZfRoMdP884BMKQvKP5uxsPYntaqifq3aEnAdphEkVT5NGG5S2tqNef4SRDH82D",
  "key14": "4Gup6aj7tQPEJwrZTFhNXs57AHqfekBJ13wuEiNSrL5A4FjjLrZLfE1wkyfECCQHfPSe3HGoiedacNbwH4gBiuFG",
  "key15": "2JCmmqTNaJ8v7BBPXTRR94g77995jFEnnt3UZA1vXjj2dsTAdBaKkRmMnbmFoUkZC8hUoHzYSdqnPRMmDZJSDQ5o",
  "key16": "JWXLVGBP69VtJva5ZBeTwC2ktMcdTFsQZssRQkQemDx6YBF7zmWFNwJm4nkZfUPWKnkA1DFv8JUbphvzq4RHVme",
  "key17": "2mn1jQvu6cVKekgKUJE4aHtjUqRu6dZGWjFUkqyvHU7HteULCXY2VyGRcKYAF5PaqMHd6XMoaXTX5WrA2jVHsbp9",
  "key18": "5H1ZKJFYJ6yjH5zffgt5bZXux6jAxzaHon2Z3rhEhVKE4gkv9qxzJuLryAqtWtEhrR6KF9NGkg8oCR7w27YBkbzH",
  "key19": "3hFydi6QcSBNuGuiD8nPVs5r1XM1jVNmvoWufbgRWu8Eo9QUJ2qcsVAqz1PceEi8QPn1SUSjjnvgtDXfjUdGB5rg",
  "key20": "2kWtVpLtXnGB4Ay3MwNuXdTBQ3gdVGUBa73hJLwHNa1BmX9pHLNECpdnaxMoWD5AcRFki53fp8UQ64nc25ocQpsj",
  "key21": "5YHJnUPAJE4yVCtFGkJ8Tv8catKeqgdCLXXLHm2wX5PmRk8dSRwgtGyezbBdgMBTGFJJqkKSrfqvKc2d4TD7F29X",
  "key22": "3bLvuyH6vVDWgfpQV3UL5ixYnrQPmu69T9ej64eWrzYsT3aeCLZWdBnEUG5aEbUA8DDQvRB9AFArTNCLB2oMN3PW",
  "key23": "4XdKUQVbaZUjMSiFkeJSNY6xmApw4awUqjc9DaiCSguaQBfxVzWWBh43HtNNCy7z31DEy4GYbRVQofgix7neH6Dk",
  "key24": "4iEAQxXoaV8bBk67TJ2Kz9qx1GrZzoQ1yMdxDJ4f1ETmQaX5mYUBdHDWepkBZ723CKZ5Yn6RkfJueiwqpqhV5WWG",
  "key25": "2oqLe47mWx8br83wbuQs5sCf1MWgTG7ZuHe6VuRjjCGz3v4VUumy5LAtnauzTHwxES4qMsyDq1ybUdyr7GgjwEKA",
  "key26": "3pm6hd4vz3kwoQXk3oNqDrXGCPm5V8CjtahTqYZYFPxJCVc7QFSqSVivnBPRht9rjGcL2CNhG8tPZHoeEWF4rUzt",
  "key27": "3Snzz2Tkr9LtxfGvJ1tmP8JW5a16Wixyd5m4oQqGynRvanPW4NYRRJYtcFy7aJvdeqdN9cppmgmitareYbhfaQfN",
  "key28": "4ikbBSGneVsFbgijBJiueAavfCb8dtd2L4JABB8ewA3Qfhtbuo2YKdVDWt1NFjSHou7KTY7sfgy1HAtRykq2mMHB",
  "key29": "2dgXJYh7VvnvJRXAPD1k8M9WwB5dAHvpPrNkAuSuG2TB7nP3uhA2GJCJvyLperSByLec4KnRRTSfb1gAzaXPk3Wj",
  "key30": "5tuJ4WwXcgp4yFcQVruAUS7XA4zqregifY66AUqYxG5fCN69AZdNDRqPrS1HwNgh4E36JJMSRcY1CsB7ucztbQHk",
  "key31": "648G6TaLSKyRDs53XgDXGqyaeyYNoWnaBjugnRKWBBAS16uiECpF2cqZYHmDcNgn8jpwBwfBFQ9caxcZ8JEEoq12",
  "key32": "4CgjCKueqHFHMEt6kNJub5Gjwb6zjKD3S3gJikysCtY81NAQ65QAtRppr9oo2wXtDcjszNpoqeQUrBTNtDw5JZBN",
  "key33": "4KesMmYxZjgWjXEB5k4oKwiwYZsdR6UFpifJQQVwRc1MMTmYjg2TxkPErb1uYuyNA3TZJgjUvXXMPUY4XR6VuJes",
  "key34": "3zN4vJeTW4a68QKQ5hKhcSmB9MZKDFzSvBuAYHgS4ChoKTz1j9RrrowvtDiL25YRXpYv95qgoUz5EoJdGafxeEZo",
  "key35": "23eJTPBAnjjBRLUSYFpkhm6PW4ijet7EKsB1HUgCVMaMTsF4gen2HMeLTdNo13Q7yq2b4Z98AQWyZiMzd8mseZxm",
  "key36": "4uir3ox4ivTCRDwLYb4yzXfhQAKgn3vxqJCxP8wzzPr1vgm6zrEkin2WYC73GMuQMywNrYpWG7P2qSzqLefgp646"
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
