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
    "GBF2csGun3kmJPq5XS23w7VthBEqbGXLJDKXBEvsxWyrN4WUKVhf6TeQcT512n4qcAyTEtyNULepz6ZMGCpqbGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kagFWxJvtMubjsczQcaYUDCMZDkv3EXh1BmYAjdwtAPbbBMYzstWGXpoYr2bNygmt3HgDALw9EwCBynZUAbLowk",
  "key1": "2vgxhwzGUoCye92aUahSKwCG52LqVR9Px64CbYMy2HhTeKYPnusNbAmaajea3spMQBgmdDpnN7cNxnzjaNbFqae2",
  "key2": "2qksuvNkkipS3FznKKCS7w1wVsdXPgsvZJ5qdj3w6rZ4mGioSvunvWpmHVXu9oPBcR6nve5su2KX4i3c9QrPcooo",
  "key3": "45E2cKabQhsDeM4vmgx1BQKgeJg2hJRAQXfiTufgy8hVJ33M6UVMxrkgMtzFAsKyYtBbZNVac6bFYrDjPJFuhLvt",
  "key4": "5gdyBFpKfkYRN44XC1p43hhgZZ5r19gTe331zUw3p4FAiAVKndDJGL89zGCRmiakLnfhL6D1gpdXGs4vvnbSwBnP",
  "key5": "4C1BxH8wXWN12Xxk7Q8sa6cSPEc1tBURNknQCe3H8vx3JfaYNt5krooUdvWsNqxnV69jD75N2gT97Vgx58XYVy28",
  "key6": "4QqS1o8yUGVeAAY3d6p6xauAHkd7pM7NDW5ex27F5ZVP3sq975VzWakifA8ePaUW1RGoRTcbyKkJjCD7FxHSsjpx",
  "key7": "5XWej4X6Bq3Sby6UHXhfes4Y2jwqPwfYD3MjYXHaw41gWoxrnE3oqGQvCw9ZFeBuZRmaHz6E4ykuEcNL3rCibskU",
  "key8": "3tx5cogLetRz7NmxhHgQmAaH7ua73NHgHRZaRw9guzmDJPmouo6cURwoUfZEvGAtYLFWMCaJ3d9yRXDZjJezS9sw",
  "key9": "LvQz9ZpaWtdY6UHpXkX4Sj7bkrmMpZhq88k1NdxcRb7zbDQpRZPxuup6x3NSEhZQC5cMML8HBBJGZo327rNcHN1",
  "key10": "2xZLhkx1BqxaVPoKRRoMSHDcAVpdiKf2UFb2C6pRgy24JfZjryUGQ7L83AEarLAkH4Fz3ESDPEWReVrsJNpAvKFB",
  "key11": "WGZvzrneAnXWGNcHkqp4XLEiAPcmpCi6irj8tmUU3eWNgvqHaBWy7WurY1zwv7LrFrfU7JQnXdwqWtJG2W398QT",
  "key12": "5YV4mRcuzT3528HnCJhd3cE4SmQgvYQxyJXDCPtznwG9oAongdTWQw4gtNECZ9cq8un8rRqS7uaNnw48hDKSvxr9",
  "key13": "54ah7iiSbhNbw1E9Yw5rRrQVNbVdspdPEpNGXS65tiuRoxhhyXabbtyGTPjp5iWdLZCwSFbNYGZD2pBBBCNH2BnE",
  "key14": "32jKH9gXYQZU4ZvUAL4wSzKqsNgcYHiNbBcxVXXxq8zpcguYRBppjc48vz5zwiUw4XqLwP7MNTDWyF8xMGGGdLXm",
  "key15": "345AZ14d7YfcBABkXenC3hiwZAuAQJgDpkkQhWCksQ3pbbhWooi7zuX9fwEhzutjS4mG9NCETQN66ToHpHAWsfhF",
  "key16": "22eJJJx1iHpgtnbfeu1383ztDxt9jm5rsfpa6EgvVPmx8XFT8mcmpx58keN9LEdKrur5qSuqyodBQYHLSX6MY7Eo",
  "key17": "64hthqufTPpK6fQ88QPjDnDmw4Puht6mjJWX9ELHExCBKgpU6YFpQ613iVsHThr8fbsHQ2NZ2BZUipi7AQ2AKfrv",
  "key18": "9d6WiKzT2551FkvaCybYzd4NLRRXjoTYtNMtgWBX154xTYtAsAan3em9zD8BaKQ6xvhv74o7JyFfyVmCZMb89xF",
  "key19": "hGt5QCKi2W2kqPq9C1mXEjSzZEarD9oe7RsTY8xLstnHR52MkwDRVBp4XTCMBm4S8ZHRi8ccnmdsi1sEk8gFSE4",
  "key20": "mtyVwsHmVJH5LLFkQSX2PtJ8C11TGkGfZRPEwrt2oik95YQbeNYsPWuM2L6xPj5GPJKrFs5LuD1s9F5S4m5w7uY",
  "key21": "ErAL2xrf9un8j4xfoXXJS4TQtbU18MzXdy6EspUwVBNZsmv5gEpqoPw6LcZDv12CgitK1ifmrJTNXfnCPWBQog7",
  "key22": "5AWmwX6qvMVAJAMBqsggymZhBAqdRPLjYKxqmAX1zkWypxxbPvDFotxu51iQrfi45UqSDXqo6ABAeRgsxCvjh6QH",
  "key23": "24k89iXM2Q8KikiWa7MNVKVnH1drBYBKYrmwqWC6xN8RXtuFY8GDqNMC5musurawpnDxifENYu9LAsSH1zx3BGK9",
  "key24": "3jbA5HZBXqY7dDHDN68r5KqnTS7XbawBeKW3dsN72kctYpythT6YGerYC7yxFQnw9nUoYgRMmeaqC6Y9QZCN613j",
  "key25": "iDVLggVKyKFS4X2fYEWmkGggEsPgiDbJMzMHa48EefF89qocr5z2MmG9vrjGwhTrQvuMqhN3LrngQqJBsFY4No1",
  "key26": "XftBteCWE8aSnCREM9bNupTd1V7MmLoogwKqEPsdDioAEe3kDw6E6s3ro5GG77QgawfJDYnosJL2cJnfLbLm2nd",
  "key27": "3oMQXsSaJ18P8vNuu66QA3hsaxjEL9deteLmQF1vR8Ve8rsrxQ3HidTrwr3zbEeTHuSXpP1zNS5BArtR7ZkFRhv9",
  "key28": "29gtQbHMCsPewoYsHC2t1jMkU6dSq1NyCRkX2agkywnuLXgMHgxB1GpqbogYjBnCE7KhUSjM9AsNCoypTarhzGci",
  "key29": "54eyR9S3HYs9o7nQRSjkMp3CMBX5ygQg2qupTpcvtJfUiVrspPBvsJbmaGDcGeNqe5hF1nXgqm8zJmgn66mLXrzZ",
  "key30": "35w2RBAuMEiBzshN4fTdLauGwvJaGteqCn8WnW7Djx7NraGE7teCGbp2toXQFNvJGipZ679wnHhdHFjEmbYXskjn",
  "key31": "mJrpxTzLAdQSsvKwA9gW9xNpMqbuuhNYSg9ZRMsJeUugiEyMYvxJA3jdmFjHTEP1c8BH56Y7s8jMYWusMxgJxdv",
  "key32": "2R7nVzjHpus8mbBLtQxjnRhJHBmy1YoHWSG8TWykPrBg9gv3UM6ybJ4o6LFYk9S7BLKfvhxZUCKTNtpESJdvcgDK",
  "key33": "EN6YRBGk5W3FsxgCfx8QWpg6atX1y6A7jHS7B9Jpw7aeuEMpVJBLLFGmWT3PVeCLf1GcnVABpgRE7ZDmvYjWjY8",
  "key34": "23rSfFcRTag2zxTMeEmBLkRrsfgdL5WeHbF6whcMuY9M38MtJbYsPCaX8fPiX5xK6iuWfvrA8G2hJEwvNGkR3mPq",
  "key35": "eZmu5ChKq8s52gsjhZkXmbSod31gkmzn62LFMPcsRaXvw14i1tQTFePv3bDMoUvyXJAGAShKdSKoX77Bc54WwHt",
  "key36": "39o1GaLZX7n1KVm68yxGgGHokepHqf9uXGb3ebR7qpMjnbGEAzXokFiMJBKizkg4mJ1MSdqdt1bCAUB4Yuu59Xqx",
  "key37": "2y4DNHZhBmQ92sXKK9HA94VS1HJGkyPcwhq8tbjceXi21iJBHsmiWqRGw91JxiHwU6o4Z7iXAMvfVSYjTPAAJVSJ"
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
