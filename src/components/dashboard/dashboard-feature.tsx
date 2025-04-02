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
    "4CuzkAeTN9VugceTxTr9SziZ2FkZva2m91xKm8BGQuBVF8887XSxA227k8PVbfuFh9ZL3ATGQF8u56NmpdzhsyEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "554Tj4udj5LG1BytNgA6PPpdk8uXiZhCcDY34Ga5E9Nb9br5SrGfnZiBmg8g168zY2yxWY49Jd6hwtb37jufcyp6",
  "key1": "QTZjkteXRHoLFmFJRx4Axzk3AQxxP5h1ooTuFsDeEd23Mt3BxCUx6ytMgnydzLi7NLvNihCKLLkx8afEzvch3SC",
  "key2": "4Wu1tHQFF7htLJpraUmTptHtM5bJEkuANSjPrmULn5RrL5ZufS593fcJJBX7vuCUPJ8BY6mCJVQGJtHVJkbRQXci",
  "key3": "5HQYbRAA7fEo5Fz2h9SvSnB7ENznkwspiywfRjhWpyjUfe4FaWmxftm56AZmJQKxiYXM4GGDYAnv1oHSBgxBBBgZ",
  "key4": "3GkpnddqCn6S7RrxUc3yBHLQMpQfWs7ZKypabS2j4wp8Sq2w21t6GX8Y8qFG6sxo4KoRQwrzz5txPfL7SRREErhW",
  "key5": "3yve16PNJSYAmU2LZWqSEDxn5Q8twgTaewS8RWhB54DRkJStxczqvG8WT45B5To66VfFwJ1W86GUfNxfzQcGS1UZ",
  "key6": "5Yh3pDtAN4a4qs5yawAW66uXL8SjGUuQw5C5MRLCknwEyb3mNjr3fxLJg1sDGz21XNZDcbjyHWfupf7nuh5nWRjy",
  "key7": "b9XN3GGS1M3pR5yLQNGu49Xb8qKgFP5YZD8rHpkZH12E7sCxz6k13vMSMa95Ds31MJikj84dKHN3gso1xPBAUgf",
  "key8": "5FjRYEsisY287sv1akLTu7hih4nXhvTZ7NqNf39rga85t3FT1AaSrEZWcmUPDMZvfxFRWRLjnNo4rL9XoFxYZGhy",
  "key9": "4HvqhwmVuh43a6X4KckViVi2nNadXBTk5HTfYaDHUu2dd52ZJb2iETat3GAWLsG26kVC7FM2qLUXgMKhNRZLMgDA",
  "key10": "49QHtp8Qpz1xcWtDHPBy4LbPvUkfQzijLmDyihaHKsJMmTJ4Fg2wxzaQZ36TkzUkfoWo5UQAsoXQYGMg4C4jQAK2",
  "key11": "oZgLXjUYcP65kijbgCNt1Y7tuvSNHqX3exccnQfZTavrFsVTCBAtTK1U8M4FpuabtN5z8Euu7U71aLudLJdFzo2",
  "key12": "2P9HR7pYqw8XC1uaJMh3391LAqLcYUdo4o2ztdVLFyKVwLvoBWAfxM19JZ8UpY1Qaw3rjmf9YCda8NwM7GyDSQ7v",
  "key13": "4WbhGHxsNyDnTXpzsGvfCp2AiEzWq7v8TdpwmAHEHsUagrD7XqFc5u1mankEpo9b2FMSjmivGVHAoffBqkB9QEUb",
  "key14": "w9MpzRijXnefeQHV3g3fyfaZ1kKZ9kNa4FpJ6Ykhg3nhqAJS6F9WLWoPy38JnVfEyfpbtXvChHiUPG5nSz8Mr9H",
  "key15": "emeL6aC8pfAD7P2DrNjRF6NRMZUKks8aiNCBVmQieaPvuRd2u7StcJ1D5z7eE2hnfCash9PrrFQ5cS3nvw1jsRZ",
  "key16": "2Rmke4dH38VuyYmk7pKEXGG1JvFgmUcEPatvH2qRHrPqLJCx2NHfFVvUJU7hoGQovEzGttfxvitfG5SYRzaThG5V",
  "key17": "4ruVd25h7fhGwxU9zK4xLfxfd7M4bAigR7Lxbeng634KkRYJhmJyLB2S9EFiorULQgMXzA1SZ1FgH1bmMAFw6LSS",
  "key18": "2Vj4DXN7cLUgnut7TjmX39Q83Dc5cbq6djbWpa5uiQjn1AkFAWxqLm5vRQo1Yrkx7SiJYywc5Bi98xtVPbw8EZWs",
  "key19": "CBB68UHjNn3J3iZs6BJQQbAtWC6212Mf99X4VSk3NR1kp92FqJb1DFuDZ8d3WeQzSkzzGyaEukc23WavLQpMdEL",
  "key20": "31LWdYXvTYrK1nQNZr68YHwYay5zHJ7wgDVPcPLYC6fphAzS9tS24vsTS1c3tNuzbkXK82Dt1swdV9HBWjspN8hv",
  "key21": "4ZbEAGJhW7oPPxPKrpmukP1oHrRYCqowjtqWpEhH3LZsmqJ2JP5MLGYwyawppU1Mi2XSvpS6un38imKmQnowHgwz",
  "key22": "4fxvdgbTNVu23v6w59DsswvfKDPr5z7fgKVqXihxTkqi8JwJqzC7zUv5UAWHe94mgM1cwxH1jz1BXcE325jpLCtY",
  "key23": "5scNgk17jvfhcS1WzEL1FKX4omrw8SxGdqJv9MUhAjsKLUgLki2HKkiwhzBVLmJEw5vpGgbANmcWoSnSLjv2mRFm",
  "key24": "5C8Q5p4twSEVh9Mxza4Pvorc1PLzqj8N9RqyR1F6PrEsYtwzsTRZP9NTh42ddezfnWXcJMx4y5RNxbmTHsV1nfcv",
  "key25": "nWw5W8eerXmzo4idAw3JSEdKs2bt1ZA2M5Sh7hec2XK18vX1PiSxp2JQpx8FPeji4ro7i9RX8KiRaryTdKwmoEz",
  "key26": "2pKE6cr1B7sCsgLrCfP3JvEVwZbSzVd8TVMePbRaXNcWddqNdxcemoc491FVsL2tS7wKqDrgSbwRW5Cxt6Jf3ev9"
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
