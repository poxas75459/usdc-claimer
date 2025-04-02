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
    "GfXBXSxSTWrhSKck5HXoi8NG1jsSEfQwW4Rwwt5t4ed3EYBrTC9Wu3BfoPNws6JcqDW9MP7JHLH3CZyeLrRm1nJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8PRGycoex4svsDwxJTMzxoKZrqYLJsrTum8R4RtyGQco4WJMdqU9hWhPu3KJDK6Y4j1qME1EsbyVGpbH5KJXXdb",
  "key1": "5Cc1cWLMYxjp18quU3a2nrz9WgPMMDf1HWAy2CsFb5Up31yW5XxjEE47wJcWNR7xfcS6CeVyUXNfXtrpEAvNcctC",
  "key2": "2wNbwkEbDQgX2twoPM1AAzXz8YaPuRMZHyzTmCDypmGZ5bpXRqJE8LZmqe2vuG8RRk1HiobwEGNt7MsV6T7fxMNj",
  "key3": "4jHdoK7YyfsmTmSPsHUgfH4DWRnnLaxJH37syjpcMsfuk6dRcnLHEfq2MNzCFTjXvbfajQfb35GkfUDgLtVfHUYh",
  "key4": "eEPea8ABjEUYn8KUjiFN5BQagNQg48QnHGxMfBimGVmARL5v63TVRopW4JTe9sxVK4xmdeksD9bQSHM9BBQiRYC",
  "key5": "41TzobRoDxqtisncAPWXphhfRUug5tgDmuGn92GjCTiFLXcoeTPA2HWHXQXBhc831hjWNt4qFg7gQ8VHbowid3NK",
  "key6": "5pBjr81bB7Qu8uhsZmWpYHRebCPiwmAGHtuRF9XsPqpYbcno882T5qxsktJNDuudmUPvpFDdEwTGCMZFhqcniZvN",
  "key7": "5pjT9BghGHqh2uRfJhsxuXA266Edqz2u3X4PjAYEmSP3oPNr4Vk5zBqhBYt1CozaNkGHUJMMVpZy8Fc3nMhLJ9gA",
  "key8": "DDv6eZY2Ue8ejigMQpYyCHL71uYfAuqtWUfZtptf5HvkiECvvjaa2pQDR2Z4oEuVaGst5np98ckD8SzYp3uBj72",
  "key9": "3eCLwyqXzm8rmZ668J5RVyjy2LdvpW756jrYZBL1kVHosoUE5X9MU78mKmhqx9uVnTiSYumcDMjmyKk9MSUznJGJ",
  "key10": "FZPoJqtCwEakcABFav1ea1Xfwza7U6GpBde9pY6pc6i98yDK9xJpPvz88AUQCeq9u3Nvw1CYyVqtMdpLLDLkaxS",
  "key11": "5pd12mRFJcTngtE2RTv1CmfWptbFkvxpfPiws1mxrzvs6iCT5ugQzzrfwRM5kF3Csr1vKN6VoELs2F9WUaKvJe5",
  "key12": "4LmT9MLj7CfPwhw2o7qkPnhM6zaB1UQGeS87EkL3wyvkPDiwg6VunJdNPtuL74xu8wBMkXA25QmR1zZgpiGkxjnF",
  "key13": "5CjB1sN5n5BrvcGsr2hjiYYmvbimfyvZCFUTvMzMBHrjA5Ymgj4YtfT9ZWK9jfm9cAt3uZhtiY9qxRzXXk4CwQ45",
  "key14": "4j5ib2qgvxGWG6UHKVyRNuJ4GJfLN2eZjC1BCX8KoREcwSguB7dS4tmDtwaPukiLY1H9Y7aBhFP3sd4DyChN7eWa",
  "key15": "2GkQJrAXdKHB1gXmJAoCCGWvSTYeVtMsd1fq88WWRNkaGeCYgrEzF1coYxguG3hscPh4a81kj9FkhRda6nWFatxa",
  "key16": "4CwDVCkaLVE26EajBHo9JAnCyqhyVhU4deS1rosfm415TCfe7Jux2HYyqGD4PuKRZVP8rw8yYBqyaEs1g5eMQ6Aa",
  "key17": "4GrcKpxXXANhnuyq8jhqztZkDXydSFwazkuvqoVYkhby9BEaVtAWLdpgKm58zmwcemnyahS1K8benk848xZRhaXn",
  "key18": "vGgqcYbzuCSSQoqjrrRd4d66J8nKWUdkxjBFgsf3a7se8VgeLAsHgnQNvgMazPgdLwDJ2cXP8y3NErwcSjQNV7s",
  "key19": "3by4x7FPr3rmoBY6h4Wdnp6oKddCQuiU1Qt8dKa9tJiaQ7BFknZDhwY2c1FB37sJP2cXxZxpES7TVjxeGAia3Vfx",
  "key20": "35xwtSbKfXV23Nx42i3HmDzpjQboja7rXCyZso8tBfPjBY1V7sHi1554ZBRXJSbzXfCjTozRvjG2DQGVtXfukZfz",
  "key21": "52qC9Zrtjo2wDcE923ty3nSrd2JA6ZMoMcY8jA9jH8ZsMewodhA8PXeaUbRAAVQWWwihXTdrXNuTXoTpqVG9djav",
  "key22": "539esqBXZTm577x4tTBkDt6xq4WEp24TzjMqpMUXgT4vtnx4EhmpwpV1aH4C6UabPg5N8SDa3XQ794N2oxVUW2aL",
  "key23": "26fGSV91zvD2ZbnZi2esFyY9Zdkr5atjYAQpuyJ3qRDCBBPxKrGEB2vgWzdAVMF8c1hRehGZ9uEvx3HEjr9WBmck",
  "key24": "43v8YZWbMSjskQcCxMee8xNTiCs1HwBrdTXw95RT5aNgrecbqjCXK6dLStQTayzr99TqVy9C4Yb83scSoJCseQ6A",
  "key25": "3S9gBDuAkviLK5YgpA2iLwUfJoS1JxpKG82dJe1my1Acw4Q45c4sRwZQGD2NQF38xwUstADe8WcYRK2u41rxdcxR",
  "key26": "2qfTnuns2mduVSYrxrDGAoy2HShNL3zi5xuZb3Q2sHrqkVgUeVoQpb3mUY7tzvi347VNjfgexhc1bNdzMdfnutoQ",
  "key27": "2XahDCFHgHNUXGnstCgoy8Ntp7NenmJMeJg5SyM2HJLCJSGoogakqTz26Q8CRuDafnRpLYsB6yzJP66pHrwSgnPo",
  "key28": "2zxyx1Z2uhtwnXRWVWDc8PckVse13BiNWkXxePv8pCYWS9cru356eVPB64zzLUpVTZ97xBbF4NZ9LTLQDt62RTUV",
  "key29": "3UrtzDMnkjr4owTdmJm94zdwy2HkF1HFcFrt6ZE4RNu9gq8swpmTA6gsK1tQ89XNBbHbo7C1tywty6kL8kCzsKQV",
  "key30": "4a6Bu7zzWkNJW86ifjoKSQPLwS47UZMgr9t4xCZFqFxb3Fx6VvrE8xYJS8XYbdTUJdd45Hw6RwoiUfKffrdW6TFK",
  "key31": "241XXnKroEDGn6fQkbYiGdPVNMeUNimjRcgHMNha2R2S9RGGeqTh941Ne5kAGTbRBJeBqJHTgP1CQs6H8DmRS2He",
  "key32": "5FanYojeYhd8EhJtivDvD43nRLtM58JYPHaq2jiPnUdfJukSgvNzUjGRUE5JtEB334Hy8AcaYTwXvWAy3grznLmZ",
  "key33": "5DvipSV1Yuk3UfdYqyVqMCdL85vL6cm9S1R2o6CWJQCFLS4w2cVAMLo7pW5zJsj2ntKTnUrbFR2W98ebsySyJxDf",
  "key34": "2nXqsPw7LaCmCqazhZWEALXPnv8MPrNCKFgqvpehuQxvStbTte3pokWs4qwpD8noGpwntRqh8ydw1yWAJiVchRNP",
  "key35": "41ZJ7uYFaQU9NK4ANJrQfkyJc9y6AYumZqmZQrDNgtYycpyekrwQGHf821PVjEMjYs6jHT1rsYbQRjpDeubdqmBk"
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
