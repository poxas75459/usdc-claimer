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
    "5BgXZHdHEVgcTsABatrEuj3fTLq8AQh2fW4ve85HYQTvYpdWGFbEhjZMH87MdAXADiNj2jEgjzXbZ4oJzJi2eUQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sr864pcQYMfV2zecUn94CvgvhrDfwPKtPNir3FaSR8gzbsp7mSfze7xehNwpATPf1BqdNbXwwtkUY6LGxSspfHq",
  "key1": "bSfSUkU9SvP8WN5JuNY2aaFCAX4c4zb1j5fMW2tcbsH9maFurszhoJUZLp5tfavpW8JLAxU2SRD9oU3MUSCdEdz",
  "key2": "5xN2tbchNLMJQkFxQpWDJanKao1k478DTzZ2DfQReMNQup5ca9HZD8tdMZdffwDBVXoBUuwisdQg9qeRNXhopAvK",
  "key3": "2VENs9RuYBFcNer8vRabQfjiucmYstjmC26gbdUTyPchUmbitjtW3PifCA7U1UYNQ8Jnp5VgRx61Y9haX7ih7bVq",
  "key4": "3myDhwgywVhwsGoKxxm2xQ5fUEEzkPcvR3qAF2roGGUBwTfHtjV57W4EXi6sPx4ZXsRH1TwMQDo6Zn3bsL4M3Sxr",
  "key5": "36EnH4wJ6U2KP42CNrvfhDGCy32cNWthsENto2HfmmMfjvmfAkRPtTePF4xB1Pb4zHxYgBrETKmLkniXqiydTcuq",
  "key6": "4VAbu4R7UzxisnVAQbYwQSfb2KpfYRzbXQb1CkkgGHKGsp5YBtUAE67F7pYfKUq2JD27PK9xSujhXfyUMYrrtGo3",
  "key7": "2JKU5Zc7yNNcYwRnY2tCRWGoNgXes8MV4MhexJQX2Hq18Q9bmKAZeDGmQeFBuPJ8Ey9JZhsFkwwfYgTNLChQ5rZZ",
  "key8": "NgQTMfksR2qoY2jDXsxGrBY6iW8WsuEdBpvS1d8mga1Z8hynZJEXX6dGj3j8uVBXcw47mns7pe8VqicLRYx5yDL",
  "key9": "dWGdZurgKHRHVNzbSkTdpWrumozMzjD2Qi8A4Ko4WVE6gYMw1iXxDmgLC3ai3c7VmVtGWP9gyQexurxbbqekpWu",
  "key10": "2EaQKb72VVecbwLXPU9bDkd6RPDfTdUnAxNQVgwrN5kjLE4RV9JfqkPSzAGtFFCiwzVdpUNEiQZ9XS9mXWB85Zea",
  "key11": "4uQXjrZfMsN3EoX15GtTdagryVN8dtt6UQyeDCCveK5nK7szusAx5affHbcVEukFyhmpCtrrB4DQYppsoch2f2Mk",
  "key12": "28KNWRNTWS4qFRvh7fWVEoURWSnVW7waCQKLzD5T7AM5Jn5xDWVuwDAwYEnpK5iTbsNC53zApSx4kPT9wVMQR1zi",
  "key13": "2w325hejiqMkVPAPUitE6oBYY4gsrAsu7HV2wZs557ZJ5VFzmCK89PoSBNxXWJL6YoqWDAWpwPuEouzjAL5xfWzk",
  "key14": "4FaDsBmFHWTJa6LTJkcXG4BimRTabs1XY2CKM7sMkvZV3GLJm8BPp1bkEC1wxfqzD377LF8KuB64CwEQZjED4iby",
  "key15": "jfpeiRTpf4idUnLwUZex6zmmuA2RoFXGUEjNLR2c4qjHTM37cj8NdsY1drUh6yrs4prhMezvjgZop69qQC9erxJ",
  "key16": "3qCyH8NgkUQziqYbo86XHLd2H4E6MYTdSLR4QrDEgcP7VADuktBxtwzanaT4zkZ7cepsMznUGLA6BpKXnwa9vmP6",
  "key17": "2UKHZqsa2H44WybzWQeRQAa2xLQNkvhusJsouG1KRwPexXiLYR4dU1GpFpLzKiSZvZBVaX9g78rDn9LhYRLTaYt5",
  "key18": "33XWNQxouNyfbjC1ECyReoZtieieeeYSFrvWo3uFrWH7fciNQq4PP3vRsqucEaN5PC21YnUgfF5kVWu8LWQ9RxWj",
  "key19": "5P7ZgMWzCAwdvnkRPqb1nguMtwBHFAnAnmSpJGhzNa86hAjoCzjgZB9Js1NLkzbuWzbMgggLn8aPVsASKiM1f5V9",
  "key20": "3xJtU9e9NKrosaLdntFN4kRjW2JWG3EWQ3W692Ub77WY6Sj4s2vMLDAdHyfuHfBis8Tx3XvE9vbtDWsTZ6UEXFb7",
  "key21": "4rYvmxZRgNv2E2AHhjUPDXiGuVLoZrH1qVvQNFyKACuxjtb8f86CkDCbJXQSdR1u4ghjJamimBDFmJFxUyJQ5yij",
  "key22": "8EWT2w99NqDrHpDCPHzQ3rBBuroVJo9puxJjiYgafViXrYbdiyVJTNtqyqPmzKGvZUYfTvcbjtDDmnjxsfLKU1c",
  "key23": "kB8L2a25hpgGGUrEQPwzviXqHVgWXrN159AgPVNLbb6ka2pVmCdzZxnbp3wYGVDPhFdfZhxWwggYctt2Z9T2xMH",
  "key24": "3UtxFjAP3ew4d8CycB8g6rqgUvd9ywCgNQNzTWHE5bHp9BY1u97XkXFYdtsCgyDpd9pPQiGFFYPbifgbdHRtiZD",
  "key25": "5DFjAJg4MWBWHXDEMEdM3Fy9NjDQYH1jaFdBsJfM1rvy8sfxM6UhvUG5VYL9Hc3zJeLHL5ehdnXvxDSSVtqSSUk8",
  "key26": "2b3cMSTB4u8HdqQEa8xpzHLS3vPc23gMrL5tiqeuUjoDEmMPjdnRZPXP5zugEpgx8XHg9EHsD42iYdktC62P1fye",
  "key27": "4ruUpZSBssLp25Crry9BJuCpLjyV35uBMkNG6rbtktzV95pms5B53Cn2DPEWTGDFAhqZyqZsmsfsecRqiXupjApB",
  "key28": "2mJCqBxe1Qu3Yj7dbs78zqw3M2SqqjXguZupA6gRkPbVawrBq6s2BMNpqvjaGPPqNqUw3XvhVRsCg9cAozgtYbyv",
  "key29": "233Jj1Dy8MzJ6Bi9uo9HqjZh4WKNEfbLhTF92M2TnxPb8JjJoVUZMPzjGFr3krkz1TkgvzwMeXx8BV4mM4F23tMC",
  "key30": "2u1YFj588dQmhKZEhVNpaU7vpXKYYL5qmQGZSSmHenR8yMXNEEW2r5EUQmaagWYhRstMDNB2mva5nAK3ufhF4s3L",
  "key31": "2EsaqAYZNxCt8nmU92AYdarJ1QBftn4DnLAbYGVgwSGuZEs7Vb2bUNErbM1SzXvctjRhcxQnR34tHTbS8eahidmC",
  "key32": "32VocG9az5TxgGwLWTPro3z3Cf3vsp33ZTSmDCWYBPS4gS3NqQr8DYcMgUYMYry6fhdHVpZ3rbu9vjJ1G132Q7R"
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
