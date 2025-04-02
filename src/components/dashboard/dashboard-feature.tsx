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
    "6qTdc3964vBheTXjW7hz5igTWSfMfh2r3BjvuLmzLfDdBXXK81gJmBecY4vZ63t8hWfdB6jsicEDttTSQQhhRV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qu4UTfa8V4WPuvikrqzK5mkWbaLhRtz35XtZRDaPncYM8TNM3JDr7VzHG7wVJNPAhCf4gpBodwrtz1Xg9NviiSE",
  "key1": "5CjWtf1y9oJBUzgUTKy5gHWnEfx5XZ9fk9yku91HmgV8Fa1UJMiXkmV4Axe65nMVGdf87AEREp22yjrj9orJ27L2",
  "key2": "2hpBzQYqUSZxRQdh4y4zuPaR1vFCWm88SSaJARv7HbnUkKUfR9Pi19eFjwWmYuSht9uWmvSZSELvQhQkk7a8HeRP",
  "key3": "3b354MRHPLcRGDP9k44ejb1tUiWxGdSG4geBHHj5pVgW95EW7e9Tu38P5es7FkFGFN1zFF2gnqoQRj5ihQDP3r55",
  "key4": "5pL5xBeNiq4sP6J7xHAKkxucFL44gmJs776QxDBrJV7pZ9FR534rNJyVd1Fydsay3vFCaPhgg8kwJN2ctAU9QPa5",
  "key5": "21KwVsR5kMtBthVgL6xmdUNTVW29W4ZbUhJ9hNte1T7qEibaTUvMn72XhMwjFSz76bGMbB3hhSC5wzwUKwkET5uK",
  "key6": "21hykXcoRzj1VYYHwFWyf8fnV89LTGsDCZ3fmiEUJiqKxDGq8sEXvkLVuaBh9hqacf2gxuHJF3XWVy3T12A5QsHG",
  "key7": "5C8ppq5WcjzgRvnsm8tMDgroQA5Fjscz9hCSuvEgFxF5kjizq447xiop2kCx7P6D4vFoNPsrCgsuhaHtiW9A6wUm",
  "key8": "5Pwku6H2gJLHbda9oHa98TPqJXo96qSc4rUMEHpsRXnc9DosgAi1fSU8fNRAg3V5pKxYgmptYGJsWuPay9pLUFSe",
  "key9": "3Z2qYHechxpdY73un6LHZzjwPsVNy3WWTkmioTGeruPjxgQ6xjqG9VcyWwf5j63a7864WjoQtZc27e61PWQmXVnM",
  "key10": "5i7mhpPzejZAxQzJagbdu2wmzmvtnqJyQNtX1AnfP9x8hgdxCUHo7snp3YkJX6pRxmifKWM8ww3HyFTYjNyQ22BW",
  "key11": "2ujNC1WQpFG1uZCwKMwG5DPEhShDLyvjNdQU53RKmMaFLz8H6yTmXuwBJWXBcYCpe6A9yK1RXEZySyrCMAkcUtkq",
  "key12": "qqHS9WbGstKohdRFBXvpQxhFArZrb8viy4ERa4DvWZy7pG9qiVgqo4G3TG6Cv63vYxnpAyRAwMBQ8rm5T4rT2Si",
  "key13": "2Qr5ERTsrRQhQEGhWKXZiRa2irs23sujmpnw291Xhn2AxWQ14SAMTSYtVgNNrrtqPRxw8maEyc1hfunb6RwCZKyv",
  "key14": "myjM8ecnM4xwVr51LNTXn5SRM2gVbthT2SJ8g1h9ue82TbzodTRf9jX7M7GXsb8ziHhDEwNw4N6MwAvZUH5z8z9",
  "key15": "LtnTBzETWchtYLCbMvshabmfKQ4JcGD6vXPqPpK93T1knbfTxCmcBuG665rbVfd4LAMp5fAD8qS2e9oYZavLqgW",
  "key16": "5UeuSU2xMYEkMih9W1z9dQzGHmPCrseurnr1vsM6xzMFisCF8gm39XCbCGxZ1MP6XEyaXpmUgAmMMqRg7jq2R6Xv",
  "key17": "3wxhpWSae8hyGFz2ehCjceTHXAooQLMEmxuRhUQgmAFWhSz1sTdPuJRWfv4b7YcYH7D6icw6rtXCrYqah6gPgJXa",
  "key18": "48Ba73UwCfJnnSvCCMPs1DHbAUnjwCi96heT2uX32ob8ziL6XcRm7MEMSy5jLb64LLg3pWEv4A4Dc8YpUN2ZqsNE",
  "key19": "oDnxGYJBjmDqdZEBdpbTxZHdM9aSjQyCqm9w6GnFPaXg7QAc7dRMXLk4j2BVbFX1Q7iZaJagKQQrfgWpg7rT1ne",
  "key20": "5aZCVGJKJuUhPFxYy7QJJzUZwEgkCHF2K77ev7LkHipVaAzKkL9D8go3odzZcqXnwjEJe2KucseGSXZojeXE7uUR",
  "key21": "3AbpcQ74jTuCu4tT6uHJ4M5Uonce43cDep4vbVzooT1RWSLF2SaVJkWcHPrGecA9eGbTsJqBrxUg1HnbfM4ZqhP",
  "key22": "45rq3byqkeTiqisdFBFwHbuLHkg4BsNBY6ehod3FaRRVBfkiVKd3x8AXYfNrVMW5PXVPAsqYY8kiMH4sSpsQSbSN",
  "key23": "2ZYpPk6Rbf4xuZzTFJTFmxhMM8DshqbE9D6c7zh6jxWzHinHiy5GcCrw29Jg2HDVhahpqG4ViGDHA5Uk1WXUDjV4",
  "key24": "52oXmNRB5mBr9yLpLJAZwWziWyMcGibd6iHRzcwBMekdjyw1s7kReVPyAXimmFW4UdigA6GBM4Fta6qLZy9JZa8V",
  "key25": "339UmySpfy2kAibSmMFc9xd4i1zeXqgent45zMKzEv35Aepp4oXJYmW3188c2pci1ZsRDLHyfT32AVNuHYVTbN5H",
  "key26": "2mU9gzXn1f6rYeM3QLNLbc7DGtFoarXAYeodsST2Kae29jwjE8JV23dt5wyKB3qxapk1bTQCBSEbjzXksMYvpAtD",
  "key27": "5o4kNqdYLU4JW6SweUBJove4GbWgXALYHToqEhbynCGpva73rXHTZYnEUSY2DEMkLQAyd7edZr8wNFSctEdfxKGq",
  "key28": "2JxjHzr99CNKhTxjGPqdbTLQvuVNiRzfu3H5zko31iYJS3a5oX8XaW9dPnHaT9ktW1Qa2qiq1r1uerDAqsejkFHi",
  "key29": "394uFHasMUeVD82tEQ2WUHr5hQaUssDjzVXp29hsD9GxccEQTdbem8j738JPFnitsqaHt7zyJ9TZrf5PpbLjdK2J",
  "key30": "2P1FL9sheNJUiAJDqvWkgjhzNAj8rA5yXZLMJ8etjz9p7rSt7hjrnnvenAaQTxQP9YqYGcWcdt18puAoTzgFr9KM",
  "key31": "4XDZ7PxmQtVJQFer3QwV7ZVLvVGgpB7aWRSqK5JtsxMLizLT39citbfiiyCUCTdAgHsvuEb8MA32riKBKmCGsfnr",
  "key32": "3enpov5QeXksPLYnwhbiYLh6qBWrNEmZCHFLgmbFLZ5YK7RtFTc7wPuCT6VzvL6yppJzUnxoqHz4j7exv9iXVMqS",
  "key33": "4kvY4PqSSwSeawT58PBecn33C42uphRm5BWUxAvFe6k9ZCkSiG9gUxzszfKiXsPX7tU7yT9Wzpufk6wTpuRAp9FW",
  "key34": "3nA46B7mgoqjwrvrZrTQ6SHjkbxiW5XiYmFhxhUd3bEaxkgDHy2AKDaD3yTEAWX8pLHi7mFR1R5pHzgXSsH1H6DM",
  "key35": "3B9gGwk3KSQB8kFh2sr7tGfjMZDxGF5o6TpAB6zvkWpc64AMv6PX4WhqSzdTY8SJ5D2nTQxJaAtTTfxoiZHDGNwm",
  "key36": "2WQ69MQwZxWhsnPJZ5bUvxo3T8AoeeMzWxv71ax4L3tfT4uPRPeqijFKdaK2uFsGYADreaWYUenvbMmTFQdadzek",
  "key37": "42LcyrCxGPr6Q3nu9Aas6H4nkBD1HNWAStEMPvEFccypW8cGVyhsUGiBVCh3vGC8intkKoaYDsWorG5RXHzUvWja",
  "key38": "396UMP5mQpnafi74Ka3X6QCLr5UmeHox4chrEZcyusc3atei1M1b7GDYooyUXW6TCwP3PNP8eAdyp8RHVPRZC5Y1",
  "key39": "3BjMRGSHGmcjyv55s8tyKfCwk9Togp5hwSHWE2J6bLqCbG7z97pD6t42Ev4JBmSpfU9w1cGKeTaZ26d8KAiS9n4W"
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
