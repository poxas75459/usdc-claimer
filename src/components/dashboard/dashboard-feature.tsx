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
    "3kAR297BDUk9YY8GbTyCeuphukwiC6tfU8aKns8nFYV4u3rLu1HFezskowHBpEGyTJcF4w1i4ppCJDkSRQz9vyAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DawS7TmK5rchvn1EPYhMMGBxW7w7rNVHmsMVaf61RtEbGfgVYZ6NKPBc8NBm8K7nnoiPs1P7V7fPMSRWKDDxoDm",
  "key1": "4AdGnBAL3C8DFeXV3CSWbiL3qyhsfaPY3EBT9Wn1Z1WaHrNX3VM7JwTbuidQQnsUGrqK1NN1hUCEafMtM41t6rTX",
  "key2": "62QGKS9aNgEqMM5QAUeho6dM3nWFNbYMKJ2KmMPBCsmrvpMt9PEHnpmNn69vvWTiTYoAHUib8rPeaQPziWLxmRMR",
  "key3": "2ccWeCatXqSpupFnQVx5EbhwFt5rPFk3ijP8r91TPqo2A6na1LZfsdpVGALMMXmEB8odbx6wL3FLx7gTB1infRLp",
  "key4": "5sxFggXQwzEnN9kZfWvDWjTCyp3fBrG4rcsgqDRDDqo9cYj3H8NFMrmx4j9jxJt3x2mj3gFpmQ1aELnytGfQQwg6",
  "key5": "3fQX6wczvWqqxKsXRo4Kt1GwaZ2NcNnAcBHB6qtmfAWjKqjqYiFoxcNND5KwJgYXNPCbGvJzV6BwhcdXXj3DHxDa",
  "key6": "4E5fsijSsPUyejUXEwzimeSusatBVmRb9iWTFDwVfCa1mGZ5aFnMGstRxJAa9Fb1BQYBU8JYpLaHzHMYv7dkDoTZ",
  "key7": "2or3XUM5SwbDecV6AJGWEcsdQTDott35fNwfB5FC7LSk5MQo8kWcNNRuoi9P1sPsim67HTSoccCMW1S4G9uqcaHx",
  "key8": "KHdvpQHWWbQHCkvTAQTb1NT7d5rdfXkGS7NcCwKZRMHj3KqDhvaQJ1ekfgpBj2kikCZx8HFDuibcLWdxz2VCC5U",
  "key9": "Jby18jEWL1PAxGFMnHs9gXVyZJ97DzSDggXYkvHodRzrnadQ2x1ybDinhp96xrcQ6seqRNofX3Z78nwe28KLfwD",
  "key10": "pi4a4Mx74rpxXxuXBnPW78cME49EDxT8gnARHCNg9akoW7bLgFx9vKEH7wwC16iSDoiJyW5vxdxiMzMadKfzC8s",
  "key11": "4N17KuH4EDrKHCw8rsGJzycth5iwK1pKRZPLqFWDeRsGsmF7YHYNog6xRzKPE8gC5bSNqLochKjnFTHKSbjG2Kmn",
  "key12": "w5hfvLcVjGqTfQkiy6GgBEN74M7MQSr5mvdd6WYhFCxboPporwDvXHQU43vNMRNPtPqUhn9w2TxRRQmsGwzmMVu",
  "key13": "5uzdR65T6vMJ6b3yJfgdVDfrEFPNuJg7bJQTMmysiha17Qa1mLtRdLAHoHHgq59jfP3EMzrML3tghJTg6Gdm2Zym",
  "key14": "3TJhDy1Q81fdDb3AcjTASWi9cV4DtEHRZC2Lh6P5iNeURHAnLbehfFJWfBXsMsxxgeNS2cEjYNdrK3bAM7g3XVQK",
  "key15": "3qXRqnLoZvwzV1AxbP3nQzTMZNqS3tYHBretLbswgqBEfBDadQVwehkhykqWFoMzsYBxgZXXkANFR7KXVAaXgXYK",
  "key16": "2niKH7UkYUjDpHmKUTWoqURC2xXyyEHRoVWNWCWnq1ejHy6jqRntHa2hp4kPrpzyS1magXWD8K8ECbfe7MCR1Lhk",
  "key17": "jekBxYDxQnvH5zSxR7aMe5h54giobrS1sPtmshYiquhV8S62udc11w4qvLejBGPmTovBwn1Kkp21gLsBxtGNQdo",
  "key18": "66kqCMyd2zg74Rfbm28Gf5sTb3qHXXZN6s3iEjses3bdu4T9g4VhyBh68eKkzRYgctySvVtwChWuxE3jxnbA8voE",
  "key19": "67UAjesVsnozspFYFBFjpxDmXy83kD7QS1BrScCeoz5EiWSyvcmg4yztwyVvrsPk3deXc991r8q9kEkrWc9ZDBkd",
  "key20": "4vh513KdqzZYcRFs1u6moW5BuNfeennPjfSCbrNDke8si79MKSQdV5Ckm292ix2os1G8X4YEYpXUcNP8v2N8bS3T",
  "key21": "cR6f8HbyzezMJiq26DeQh9sTinHRJyqEC4KLyrR1q6xqHAWFQa4otmWhTJ3G4E66mrpcRoh6JFMtxz25G3xbbPY",
  "key22": "N2xsCnF4C6rkPt5ovBWzmEnH7TMaD2itan9Fen1KgWdxpVcgUiHPuA1JfYwYcFDRCyW23mHJPqfkEDLoqCtWFds",
  "key23": "2TyXpsJM7B8rJJfC9FzrwD9P1JXyNBJE3KY4Hns8D2XU6VVmEFxfoDMLewSSrFnPGPkKjojiEUTqZtvqe64a4s4B",
  "key24": "PTUwLxuaAw9CHydxMZbVcrWrazATnQzfVzRPJteiX3DiM3q9Tqvv9XrwdeCwzMDbMnnRmBFt5AyVf5FcpmpZKWr",
  "key25": "5vZHBenvbciDRaCkQZJ2P5SP1rRYUYbWP9DiEkfGQosvZ3Ue2wSQPaQ4ppB9xfM6wT1TYv6aCoxUkWii34d71HH8",
  "key26": "4T6uPFzkkpfzfvoDZMfYYsXmb8V6Wdczjfdp5xPpeDKRaXWMkWZ92EBFZVVPWNA3Jff6Qm6mzUgWLKu6iqz2X6zo",
  "key27": "3hyHZSuMcDNGxFcpqcUvzxzCnsUuZSAxTbpDdL8Js91L2RssLmaU1N8iC87CzSyr7KE4g52ZWAWL2LUiQt2Dam34",
  "key28": "54y4oiY3WFVW4wBEk8aeLBaWLeHdNQhtsP4VDWSG5UA9E4oiTxt8B2VL5wq3pQwnLUQ5TCvGeCP7Qd2eGPZfiM27",
  "key29": "2Z2Aq8ZASdxKucZ2582LNoM348HW9N8fMwo9TVxGKbkT9s9TiDtdU191BiUdXxhBQQotUhooxbHPBXoQJ7uzenph",
  "key30": "Pe1A2bsFGk5NGx79G1e7BwbBKfB1hVrQDBLmouzCmU6aEuyJk3FpbPDEp2cfANPgamPLpMEMavuaeN6TLkwN9Q4",
  "key31": "3k3RwXJBe7RwnuTmFg1kdrtoea9WWZr52Xt4NcoDyjfebTuFW9ELjjAiPmbWuXCLojcpdNySpn7jWzD9hvw9KYVJ",
  "key32": "65EGaRzNoLB4BYVzQhVUgFcxtczZKmkxyWZHEKuHG8C2GgWgULzdhmhXKPunCbJve1dgfSd1rkPwAmNtiRAv5ina",
  "key33": "4iX1ERLvq9krMEvSmuUKGSnVriLD1HT3ktkwbiqAmUU8pwaeM6X2dro1uGxjJnB21usAotH5Tye2KURmvpGvvN58",
  "key34": "591Y5pWWuQBET6U3sh9gAz4ExssxcSWip3KPiDToRfak8F3o1ff8Sb73mqtpUzXAvTx9ksU9KSfNS4mDS53CvUEP"
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
