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
    "4a9HgdcV4Wubn8VEhMW3yvfC3vDKALy5X6azq41ty37btAf2awdAG3sVD3FQxaP39VsPXvzzpZteyZAWiZnp3G3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7daohjAtxuHKdvc8X8oDyGfwy6fBAK6kThxWA3yvcbrue13oesFrP8rQ6mZnQSCYRR84VoEigraYHiNCvXYd8PU",
  "key1": "2oQnE9DWN31BwBoPfCBJArdQvksxv88VzX6aXcLUMuR9e6Bca4vGtiJA5BgtRZkmzVRxaWzXkmCGGefZ3G77jfnh",
  "key2": "4nFhqeJzcTTm16wesEdtRyyXvbmC2iypnLoobHeE24ngtvPV3rxtMYy5d9tNUUCtZmSq2qCtjinygT5SemhRXFCG",
  "key3": "3SCLVbK5vho7Cn4qBAazNxCEYgztmV9Eys5ufMZT1zJGANmEP5yDENYuc2yzBbQX9m6E8UhZmWrSPiipvpedgurM",
  "key4": "2hoKbjixj2piw3K2VDqGK3NPspQtvU2an7qzL9g4z7BcKMmtndfZdSgZQA5y9wsKaGFkFoxASZYaguoCrkZUr67Y",
  "key5": "63pUSipwmvRPp9ZaU6dwFp4cwsEvdNfQMedJsvnsCDXwHnExcCvG4vast6NqetLkBDUGmRyHGZzjNBGp1jWq7WDU",
  "key6": "4a6DNZDehxwUnKCGWnVgRokaRwZwRD9EwynnCUaGoXNB3nZe112MtqtcBk8EYGSff2H5er4SRhTHn9afLjuBeKNo",
  "key7": "4HvXffd2CvXwKmVn2H2tzziM9g2hSoRSM6RXM5r5Rf69GMCY3xRvhihWd2mDQB85Mf7NLd9TqNSkNej9Dc4ayEYK",
  "key8": "5VVk8cZxPqRboLmPfdqK3XMJyZVKRDfc1RxWuRcVaXRYQPDJby5DtfNso9mLFozNRME9abb1NYCy89hRdq8TTd4u",
  "key9": "3nLKWj2XwZxBRrT19e3g1LeMGxrireC1bLsHNU7f9Bj7bFMh2LbTzCPduepAZpM9eWp4DsyCxHisRoKuzrgDvJG9",
  "key10": "38xnJ3KbDgi288yE56eLV5yBDM4iA9bQ5uANQSS2x6vLvvu458sjDiiMQgcc816V4Z59h5ETdG8yyu5UyvzDuZFu",
  "key11": "2U3xThV7Gh5fqHKe9qG39ynVmnNmqUh9yGtjHdy2kWR3ksUNKyjoJayNqS6GfqHAf4vgMxxuqhn6R94JkggJLrY9",
  "key12": "3L4gjWBERBpfZBPgv5Cn4kiFC9FkwHNtrUXaqjESE91wCVv4SKy3QHV1gEuGuMxFWRgj4pp6McEeVsDBphY3GQaj",
  "key13": "3tHsmcZuuNNb3LyF135AxmXu6bQTZiUBXWSKHfFh9pL2Ab3JaVA3fgof5pAm5Ya9TzeHc62Y25N8b9vJLnEwmXqg",
  "key14": "5mDjFt4ZPHyweZhs2EK32sLT8iBDX8zS7anMdhKJKHcy592xPPtrUDkz6HuiG1pNRdrER1YAfUKSSVjP5D3ygsEE",
  "key15": "huhBU7MCfWcaJmFWeBJx8aCGPBanFTon3uRw5BUcDkpqtrAQ1iPnayFRgqrxjPSZREb9gGP9UcdqR1v81C9P7rg",
  "key16": "3yJrPoHpxFEEpGkpXLNZRhbfwrotZCxNxAXNJZLBjx8QxnKrHwhDbTUo977BU7GLoTH92HpxVbjmFJow2QK49j7r",
  "key17": "3RT1FzTn4jUxNiZVZuAjJfhosG2vzAo9Y4ucvAUZc41SoCACe3aFmoRpHY8MH4BFGwRtD24k3QgwM6HR83Tnurzf",
  "key18": "4fZxFsxuKjTgcu8ZQgu4Vw3Ghi9swPa88JB1jiSCzJHQpw4hsQBhCHGpM452WAt8P7PJZ8ow9xDdWETuSDfQB6pD",
  "key19": "2BTxuAtgiv8koHrqr6N6PSxJqFWki5VgKP5ee7rzYwQ9pEmERjBBTNbEgAcswsg3qGGY2jy1oRPrPUWEh63rss3H",
  "key20": "59SmzYKWgurCQr9nk5VE25V6a8L7sBp1oFMBophiNEgFZD6dk9aY5rWPrQECqwZ4PyE6CAERQZY4kWzEBVTWsQED",
  "key21": "4KJgpdAAvZ7PqxSKfyuRcDTxQQLjMXhbFgnWXBrwM6YFESGUa9WQgn33BbMGphqXVxvdGNc5N3nNPzq5rVwDLqe2",
  "key22": "17P2AAVDMMN3v18XxhNZyLFxd33iSTkZP1BSuE29x6AB19eT9MSVdDXYn8KnYDi2eNnGqgy4ojbERmWV3Uuyh5L",
  "key23": "5fyMjuNEkPNcR5cqvuXoPkX5S6jhgwTqmokcbFPNb8i1naWv38RsehPNrvaWjLdb8k6D3Ae57WN6wPX3N1rdQYJy",
  "key24": "59ay3fiFqkXUb7qdThM98JHs4PckMaRGdiuQYs65tdavb6E37X9RZRPSeX5dozsrUs6WSmHVonTCW4U6aSncqDVf",
  "key25": "Laze9pkU2z9Jg15PNUohdHSFmgNxLrYXJoiK1Tp4s2XRost18UBS72H17LPbfWcSWuue4VYPAog2iPfTvH9ygCE",
  "key26": "4E1vWWQgiTKsbLXR7YrMD5t7GgN1P4EMaNbjjZSKm3k5YDFEa21wXcPH23c7Y6q5EqSvw7S6WPWmrU7LkyR15Cbz",
  "key27": "3kvzrBGyypw3V1ULZ16MAwME6ergFVQEa3azBit33hATosemB5ax1x1Z3Z5gK92DuhhUh9NhzxqwcyDDQtHdbViW",
  "key28": "3CfcHG7WTuwr4uQqhWoXMgdXMxdgj5TqYJEsi77AGZ54wFeMLnhxVr45T3c33d7KHQYwrHUSjNqHKuPRMsKzS6i",
  "key29": "4QEgYdoN2dmythSZJnzM5x4UnmLLbj1E3fWfxdD3R4hgeDZz53DNjZyrGnoawqErX7i5hzyjq3ZDG3HLy2APDTEe",
  "key30": "8KKfQPsY3HCzQqwZiDBAojgQkWY8sR8UpGGHLa9kHgE5DVNnLtyJGifgDk31QGJbNNTgG4YbbAh5rc4t5W5SuPt",
  "key31": "5ffXCHPJp5rnyvYJsLSChmuDWYmf48bG76RexBzyHM45rc7dHhvdFVf8egNuQ1DBUYVYN3TVGN6KtdDLqfruiHKN",
  "key32": "2WH5Khoye5LKnHJ4BLzQyNi66vzNtxAc5eWCNjaRvJwLaG2tnicAm4hq2rReF8UpdMLZK9FYx1kTeMkD8oDLKT3p",
  "key33": "3B6AE4c79kkUwhp2zjGUJGwPzWceDQJeZtDxSGgfayLhP7JSF92B885cQPJQWY1aT3xX9Dy6tm4v16ysCVBZVWb8",
  "key34": "3VQQGicPae5mq6A3Mq2mzMazz6kDPVecqV1JtxjaZPVoVVLbQzhpWYTrpu13iYHHywS7dkA6ZvdpSGQjmbvo8MxH",
  "key35": "5XojNLbuSdrCDWJtr43yuZeTk56vzJZjkH93m7ACK43FVycVRrzm672wHQp1td2pDjXTWPVquJDFhm3h2WmeTU9G",
  "key36": "37euM51gTVE92CYYruMfQoUpgtW2JVLexsz8HArPEUsyPVvJ294vPZ7wGRjo9nQoD38BDBrCCV7h8dBzbZ6MJZka",
  "key37": "41PbgQPpvGrSPmDgS1M1FsoDUn8Fdhwx7pHcuBoQAJNdXSkmLLgYgQ8UK8WZN6QDkNNCYn7dik8rhxTTBTYCHibb",
  "key38": "9A3MncQVx2JTEXvts7EvUb9TbnoNZhnxBEz48uUj6BXUifk7Rdn3dckuXgHkGiV4vboTtDhhNjpL55KiycEqj12",
  "key39": "2bWY3N5TujJR1tmD86tc1maE51xB8RrB35goUWEJxUoYu9NLyNHeKoc8icGmXwxWmDVHigEar9D5QwtfPtXoEeR6",
  "key40": "5b2eQHuZ5NWMSjFMdtTA8goW18bBJJ8FSRkBfpTxEddXMGC4JVEwCHYfFpZtKhhnKMVc4ebWPVgzGLuRvFurH7SA",
  "key41": "3onrNrn4myeT7WXd3eydmRU3hpoD15A4zGWJuSFzeiAEPuQWJTbtp43VLN4ziMxMRhtkAm9jBFHi8XJQkgxvkKpp"
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
