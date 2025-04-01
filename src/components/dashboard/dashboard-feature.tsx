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
    "4PtBM5YqCk9ng1b8bx5XhUdW5yT6KHAW3AQmjUb59M6s5QknncPkFNU52kvhnJduE3mNdUJJCYeLYzzhmFriAQS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M91GzfeLChuMmnTH4D4MkZtwbz4vwiGp3RtuyKoJ5sbdxNDUMdkDYKhnFmPD4U6QLAi4xS3z3EvpWSmswFrAZPh",
  "key1": "4V5RojtgEcZ3Yd74JtBMR27XQrVjRxU5fX8SmZUkgrxoJEByga989qgrnSptj73H61iDfoZtBFVqgh91gJEzSHNJ",
  "key2": "4RRKZ6nGeRC4UvdTefbh1LVjUtLVn9QEhzvbkuVa1YF32Jnz8bpwqmWKNDM5dbvUgSkzw1rixgsSd9rawcwER6oo",
  "key3": "2ivMoXih66MzTzu5vxChFnrd45TtF9Hk6mJqpjaZEyWbcdsXXdzZjutTynSqJVFvMGyxjxEyL7ep5QdjZ7pHJ8ee",
  "key4": "2dpugv8jrwqbDHgv1C5uRckbnT7q1E8Ls2LAjwNhMMz5ZSvgFn57fE84gc13M9xCDKroaFdN3nJTzc5WAqvnmpeA",
  "key5": "LFG2wBzuKYsa7Rkvrq9TFYqE4p9t5q4yg4cKgazC66Tar5zBazQxT186egdhh4AbskZVooK2zPK9uCawC1vYMS3",
  "key6": "3MfAFPZnyFsSiqDUp6qzmtGfsWnBL7a75fdQCtbg7SD8jZYFt2kpp1CpDAH1MZHkLzPYh9NYytD3CkZHQ7uNTHNV",
  "key7": "jDWAmz6jvqfX19gvRknpZ4rpqhfxqk1h3hyYVRYJqifqt9yZFttA3YwhgcaD57eSJyyhPKue6VcZBLJeejnHaFW",
  "key8": "5BMHi67nFEh3kxjJh8MaW1A8rvr86DzM72RUPbStEvFiPTVbEf4tZhwMPkhByX6A7WsAWwHApA4Mp5AWd3ax7nUd",
  "key9": "jPAbQ9VjCGf4JMYuuxWruaK9YZtCqiVrc74LfNbd3rHwTqZgHvKAjHR34MqhwSkNYmUm9qdUyXbnT7zykvRczUy",
  "key10": "5uNqkvRUomgYyDvMrBq4EDZa45riptmrCjQYdbJP6RGvgpMqHWMLAggpbMXEu8xfkY5vvkuqo9jH4K5heGhNup3H",
  "key11": "5kLTkEAi8DYLi573ZzRXquRzVshRuMVFLPmyRYraNrz6VYxVvMByuYoapCAnekVAWotUNqHVRFmQ9k8eqX15LoWR",
  "key12": "3vcv266XJav1ChVUwpji2ii2tbEKUzewpzMCd45Sjo1PpTvenLzBQZremnzhinLU8j2sVsnsg5Gd4r3kg2Fv95H9",
  "key13": "32VrihVkezZbY8BehY15gPdGkDYDNsPtY6MpkvvNApjCzY7XaysY8jwrsDpTnS6Lgx7rDraUP2TFeM9oKBGztXzK",
  "key14": "2oejPqwjHM7L1hcNZv6VqsQUERRzaySzYk9A3SVdHQHRUj1XhojSwQpuX1vdRm19tp3FLcAfonioBZXg7D21vHoL",
  "key15": "4qiRCg3d5YVnQBwDDWegiK1bRMYSoC9i7ukLf8oSFsvDC3vaTHJ9MQRr6qJ1oZzdN6YV8DhQbyMnuHeTP9L6rXZU",
  "key16": "4Rz3WBKwDmUaR16Q3WSnqjkdnksEbgovL6B8pptgFCvj3qhnxpzwKpe1qaPxpFrkNRKfun6sC4hsTF6NqNbRQo1J",
  "key17": "jERq2mkrXuhT5QfqnsrZJj8VhcucfZBbnnZDhJqoFjwZmj7pUqaY3y8ybqNTQgP23jYCBas6UZgFMJRrLA6ExMY",
  "key18": "4ThmNGfnnDRifJ7fZjSJGqHzdeYQofgNdQ2qSbny92bH3fmGHoH5hatU5cifhTSYP4WozCzDPsGbm4FLavD2tAjs",
  "key19": "2BsEkVSCoUX2FLQwYZyp1k8tgrkLofjRDheQcsWuPPrED6BmAz8vsf6hwQpTtpo2jRXpserCfw6MZYJyFMhv5nLe",
  "key20": "3EcZnsj9VfTUz1QMzvTf7RQQH6asVauPPq5aFtDpjCCywpNCRNK37DEziuxuNrQ9pJppF5b9AtaDPXWTg2nZQXYF",
  "key21": "3yEUTHKjgM2TvoBvdbAHcfjRmY1DMYfs2yH8ktaAQzfU2WKmxvTLSNEaALBy11NYon3YteJ5NTTsdospxFksGJbK",
  "key22": "4PdJAHsXpRRDC5n2hUoPYicqY1nbnsjVGqpM53ta7ramMRWpMvtTASyJsc37kbeUegFqs7pN9wVGM42FtVPRdk1c",
  "key23": "9KC8CJSbLCZQwTzQEutyg9bSwJ1DUuoxrNxzFLSQFCW9QxmytNUeEPXqWEMd5GFt12LNU5EdchFkm9DzFKtoupK",
  "key24": "3tp8ThM1u7Gs3b1wsgzRwQ3sG6b17MDFR1RxNzt2583d69bJ3WFJAKsQhjcCtRQ9cJ5AbxSxEK2NzsnX6pwVnsvR",
  "key25": "3Yus8AZZaQFT3oUucdZRSE5HGoVmDMMMryoKQUT9feVjS63HfNcgUMn1vkxmd5bnscexZtcz57UZ3TvrddvTtKbC",
  "key26": "5usK6gJMoiezguC2t41AVud9oQAzbWEqKB6syoqVsKDmfQsbMqDXzjdvWmZs7fj6Beh9vwk1TGroKHGs514fGwZH",
  "key27": "46wzR4qFzLpFoFCZcuMNhtWybwafTFHudWsBfyLmEnmLjo9fJJEaZirsPTB3SWBQKua6yLqMdNitjXq4Jjw6CCuR",
  "key28": "59eppiMBGBMSWmYPVdXKu1ZCWhPWwHLPBBDtvjX53YatZtPncMh6PZjB159Gp7xxcNA1j94Aavx64Mie58wmNiDi",
  "key29": "375aYurZ3GNMZKpa1fYch9k1N8X8foPtHzuBcbGoUiuFYETrzcV5siKTtQJFDndWRDvtkh3dHHu4NKFb6SSLWfK7",
  "key30": "57qzGsAhTrzbGn7rMtvFBhQpnYh4TNNyFcjjHywbfmPM8WLfRTbs95cQEwV4z8KBA2P8JYyx9ST3QJmuZg4Hmhwr",
  "key31": "25Ay131sTiroL6rpsNoLUYTYB5Z76pDGCjRapwYYKiHYAypkgyooUmuzYx8zNRHgunv6ngCHRBiHXiL69LU9TB3i",
  "key32": "5p6N5XYEH3EifdEZrh4CiCZvgfR6KMSYhcLmDVdfPQ9Y8u6oLSGhHJdgBmnrqKiG5WtgymmNXL4j7i18vRj2aRof"
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
