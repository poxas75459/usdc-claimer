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
    "4XrDJPJGTL1jtwD1yGHHbSqb7vUMDK7dkGvmZbC82evqaCCGcSw7CvjMuRNTEGaZhExVQvuUzA91ubzxG4Qw9Sku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FoJPevnH6yjcXqai6XA6qkhNXnwkT5hBmEse3F2LBab3Tm4aEAqbgFFcNPwcKuB6fogmQKMEL5Y6iztv2CQVV9o",
  "key1": "5JbpKkoRpQAW4xRi2yTfanzQvPqjxDxKRwu8fUh3i3MezzPbbNyb3wHwvQhS72rjsvJxdYdk6EGXpHufCVf4GXHK",
  "key2": "5bA8k97qnH5dqczt36CxFScKBB3f1nAsKvyStyQxQg1cvtP3oe3oKZk9pXv7ZFnikRDD1hkaGBEEgCBSmvSUMSsW",
  "key3": "2nRx513yf9NyswBfX19u2atsBrDk9QnobWeiKQYW2ykPTMzmig2kcjiDZscWXedGmQyJHQny2cFQxu9psNjjF2x5",
  "key4": "SNVcFy7wUnGEHpgbEKXNq8byrSX47iTtxpJ4xQTbKaeJGcSnvCpFzhAVxrEooqvjpeBG1s9rhtWqhBZP8pFTYE9",
  "key5": "EmKWeAZsHovFNNcr2aYQFPxPLQrgwnAGRPSd2zqinYoo9y64TUk9HpNn89gHLqXtbSH9rQC22w6w6sTmQts1T8y",
  "key6": "48YzXJNdjNfQLUJNkfHUSdB7dpP1iAz297UeS38A84mzwhsKz5BER3DCkJTP8rKnabNDchaurLhCaDK5YQARoH1g",
  "key7": "L4wrYpGpg4r7rfEaFUABDavNdqg2hGyUXVENcXLY8p58TTsZrkWjKuaCi26P1atvB5LgyxxCeFqmDKxL6zEG6xw",
  "key8": "3dPtUHrQ2o9pNkckq1MFfrfjeAogEeMDbunAuavsnHTFLsVhUwS8MAwitnEBHEWTNyAgwEqDVFPW6eABVwJgv4XJ",
  "key9": "2ZE4D4FVVJDBYNFQm9KNSJk7ZMpXoApC4DrMU3fW962njf518YRC6neUJHqwRXQKyx6FqteGAnewnGYTQ76MwAzF",
  "key10": "2hb9E3FyVu3JN96BckSbNTEAvkNaLrLUomLJ69fWNhHLrP8RCSDMp8o3bxkiBgL7x8cXfG5HecoQwvwiprKL5ggz",
  "key11": "3HGNSjUhHRF5sUKcWbieeCDErbNxMxXh8qsw4yJsEJYyLQgxFMzC24Lw374xRdUXkzeYiXXB3huGwE8yEBDfLf7n",
  "key12": "3DzN4ai13w9b34brqfViHrnJP1TnyJzog5hxhy2c8ZMxHebym9RZLcCRet41aggepnuttf9uKERAp32GuZm89MPv",
  "key13": "HbTAUYkn1k1cgtciu6h3aeCJfzPitfeyddqcKbCqQkhDdx4oq1jcNZJvDVrndMMFbrqtyLQiUSbbKb3MFFvEaaw",
  "key14": "445KE46C5sgiPq2VdZ7eqvo2CjRbSh218g3JuALH84481unHtXJpPu927D6uV73DCvuZngoH5s7nXbEarT1m5WNr",
  "key15": "53b3pc1D9dSUMJLcyqpQhA52oqRvoi4bZcPRBTRpQXvsbFFyMcvoSTqsJJo4jSWV9qYsE7eJv7VfKgn6rrsMDbS4",
  "key16": "2imaeuitHPZJ6yYh912HvMB4SS9xWr2TrkFTyJSFWpGXtfYDfYhf4ELC5nv2s96mNZ2jVbvJQaBJ73HWuZ8NwkJP",
  "key17": "uTPzMog1hjqnuzHNPDRapiu5FeH5ZiUzCSy36VDnmDUvh1DDMrbXRpvkPF7ouorp5x5nk5xmaCjSD9wRgf4fUSF",
  "key18": "3MeeT1YevcotBeiqRD5SNoFAn8mGpDFCDP2d2tr2X8j6r3qBpwoHieYDe2FxYpFm1KNJZVNqhzGohGDpiyMkPPvb",
  "key19": "4pTy8urL1P7XUsZJ5R2TnbQz4yscMvK5PNqxBX3GGA892rx8PW9qxQZbYVmBchMTvGt7nHkYvSir8ZnRK6pCXfXj",
  "key20": "29Q7eVPuANQA9fKaX5NLYx9eNhBifk3es1svsccyFRosy57vCXb5xJNxmyi4n8GPyWFwCZbUJw4y8MxqCnbSE2Li",
  "key21": "5tUToPFcZB6bDN6f7K5TG57nNwE8fKt2jWSvz1SCBqZjuxXLZn29XhjavLWnza3jLQNMD6zfQhuA2TS3zfucUGj5",
  "key22": "5KdmkDftshUvWF3sKNa7atpYXvxv6PiJ4D3QPWZQ94zaBnPcikCpP7tdGkz3Y5GnhHKYgmc1VRbiNWaijwBSNZYD",
  "key23": "5RwNqLKNQVjeSYAJdvUKkmdRqRE8W7cvKurwBoND8Va5xNnkJ6D8o7YufQRjduTcYreAbmuyv1KBcWcLW1aAb21E",
  "key24": "2axyCGwRNDK6pynEF2csUoqHqWLzPvCH4SzQB6HA8ZBTkBQ1xnTszmuUxwUCjV2yfRqZuLnSmaCqTjmpioECnKEB",
  "key25": "4pKeviE33d8BxdjDgJh2mWWFoAWSQREBNEw4JLcDxkt4KpEFkrbH4joTErbNGiJFtMVVFuw4ecSZjmysRm5d4sw1",
  "key26": "X5mPSk7ZERv2zd93cMmEajeUy8FytVkERi7qbbozTrdhqqLvjqgxhJM5X9uXRDgzsGZgAGbYyTwjkfaeAYx6xtL",
  "key27": "2YZFbhqooTPjCHSphHqhLZG1Hnns49HodsyLENZwfEyTPeAovc8NWq7F3ot5BvttEwKaH8WWuqtPgWrBW4DzC7S",
  "key28": "29KzuWmhkiff5uqQJu4tW8thuLef7Yg2M6NKWxghQFgMcszML6vAVDVijPmVeac6bdMat8WewXZp8ZpePUKKYKEE",
  "key29": "3X5H7yqhcoUzY7o6TMVKZStWjQeHzat9GwkFLHSTeNs6oohLMyMmdPNChZ4M8WiBLSfzM3GWmnD6rpPRgU3usBF",
  "key30": "5eGQ7n9DEqgMGsgivtve9qK3kfyxtCZSPvEbMWCXGzpCRevQMpkcKtsXvfqF81AU4vBBBwG7oGNfmcoz7LVW1kpS",
  "key31": "41TK2cYHLQU9bcGzoKFg53RAvGmvydD6eWZaNcVBxkQqCVde6wrZrRbpAJ9xgcS3mppjixMnPeY9Hqqzi1hkUiDP",
  "key32": "66w5sMXBnBx76HwoSpnwfTmpFau5L4PeEos9CeBKZp18uBTHK6ZBkYo7xjbEzGyb68GsrbXBewWtAUTmRCVrsjuS",
  "key33": "ESZXEmFqQ1ja3FQ2ZeomFQuVfCSNhWNX2bGgFSd8Gjy2GukpHpDhxjg2MpFpzzQVmPUZKJTt3Bo4tBSatb9f11z"
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
