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
    "52dWF8VZQw5kHkS3m3xeg691Skfsd2mvBQWnyExjVnwqPdXQJRSA5ArD6Hm3GpxRji1bFhpn3pPG2xrRTAJwWKUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dYjueGQoUYxG9frLeXvJMzwcUNq37hj94HsFd511oqdq1cPSQ8qVYU7Kvk926fzSwT7puRytSSEhmkomcxyYMfQ",
  "key1": "6Ycnit2dtccuNyx6BSfvLNXV35qkbv7cjLkHD1BA5E8ejkggQqNVA1G4xx8zUoYFcNkjSsB469ZAX6SFRKgi4LQ",
  "key2": "2FoZKJCDrSsKWxk8yrP7skBRTgRCaCiLLNMmFMHwbv8K4exmyfEXTTm3VRbUDsTkpdBySqUvofc2Vw7EW1YydvhT",
  "key3": "5cceXjQVT3XQeTA8j6HW4naQ4bwtibmj1jrAT6kQRxShzZ1RmSZp1AutyXNubaXiW4uPqJjD9rMJDzuNG2WYDW35",
  "key4": "4JVKQ8NtVq7jvDEnzwuNJ83ZwQV7tDNYQVmDLh6wnbBd13PLUK4ac2PxhmPthjnbonXy8hq2J7VeJo5BroFT6ZdW",
  "key5": "5aFWyJfvot7Qd4xpgkRZcNn7sCwkKVYM9gFFo5sP6o4vQH1ovUFuC7njjWSeeCnFBb9RoTPkdgsVFZtC7MWKKzjG",
  "key6": "2NLQu2Ubx3ffufUNk7cv59nkkzyHinAVnmx1vWgk5EgW6WYpi16tk4a2Mkmsd4vy1JH6YFKHZCrKmN7gUVczq1GB",
  "key7": "3MxmRBccjbD72j4628nnkdBr6zx5wzT9AG8bBvr3czS3A1ZbstDWUTvNNb3UdD2kavZE5r8SmSct3gTEVTMHzMLj",
  "key8": "2NEWNVSP2v7dQxvyBbb8jjiJPRQsDqNepmmRScP5uKU2vRBvmi7UkFz7S7qMFXFJwT3fycLEya9n6jmb3zRyhLXt",
  "key9": "5pYw3sTiE5xi43MqvpAJenBQNm8bgmJEjPnBxZurrDpy7kmyNv1TZtW48Jub4jpbmkBEjbQVgjrXpE6SHkVVvxv4",
  "key10": "368r5o7JSvtZDa5ycpNogDraqicnbPuGcyvxuPXkNuVCaS1yBhmuKrK7aQgioqYDbhibXKUdVah5gYQzucvnLsTz",
  "key11": "LA7NPRbsvAsHwECZeAizeU5FMYbGUcbYLsJ1XE9zGThv3anJeSQcZCHGgq9kYF5T9BN8MMbU68J1DYyJZtrWPM2",
  "key12": "2kbCzCwSQwFW6S6R26sEpYrJqVrfK7RCuHbNY3Yzqn5RdMTc1gp82Uo4DUnLETuJcq3GiDcdfyp64ADvxKvCwthH",
  "key13": "3XFCeDMsMyLzgADq58S26x4paLTjvabnjHPP4iKQUuqCTiUJ185mGHzNCGP239SNZ5UfH2Srq8RSwVmqLyDoeEfF",
  "key14": "pUY6FaWiqmtNdsN1AEUZYHPGkSS93CVUC3vm6fuAiWrD4VD6YJb676j6at4d46Bhg1ugUcKW9rBhm6zV6qiMRZv",
  "key15": "BmzT8gZNdvBJg7ReSBRnps3ofTXB1C4FR5WKHb7BEJnSqyRFZcz9hYLCzRqFRYnTGyUb4W2iKgPSpTifEwANciC",
  "key16": "2UfEY8DrcgTuWfiMrDawF2pXPoa2N1p2MhtNoBPrD2gXkmdsdZQqH9UPFve3dCJynmSqH7CG35RX9He168q6A9Yd",
  "key17": "FTBbnRv6YSQdaNN9iUv31TMEjNi8p5UUTnDUw4tN2CWGN188RndjD4ZtEKkZtDtEmDmH9oESfrhz5B2Pcg7KAMt",
  "key18": "5DAGPKkLcT8gbTY2B8gGvpBRrJpLvXwGscSoqBnCUt9rW9YhaiDjHYHeRPUddXF5eSwqDQ2ebnK9P3hstPy6APwn",
  "key19": "3ZwTDFwSKUVo4Js83rvgsJYR29bFazw62mq5m8HXsjkq5vtdp5Zk6WPqQn2UdfDnvSrq7NnXP2DVTB92N6nJ1CBi",
  "key20": "3FV7CLSSASPSLcusR3boAHVuTrXRk9dqD8aV6zEmivVC5BiTGwQmFb6i2c3qBUo8zUj7Gpo6JmmZAomed2LnZWLj",
  "key21": "2cZqn1gf29g6zLhCPMNQyRQyjXdbp8npYpmUdgVPQRGu2uun73fPSSK9hDuef9bBR3o9tTjmwAViuwv5c9ruWt4G",
  "key22": "5VRKk6Ap36KAHucSJ5TZ7fednbnYteEVzDjWJqkGE2fs8SGzVzVwPgQDqsqrgPW9RwVn9Y8HfPhX9J11y3apdwQn",
  "key23": "2YY28fnPA5BZc6RtHqcQbiPNvHTyv3TqD8XBQfa78P6vsL9AzGhgRwBAGfVnZGz5KRxoVjpEJsSkoCPMGdBvqTQQ",
  "key24": "268dTNKhFn6zvUM7XgFL71o22gs6yzE3CLgFhzGe4MocmgmncrbZjWrfcgLFbx64HTMtU1HFefxpw1nc7re8t5gp",
  "key25": "3x5np252as6U5thY9m7vejVXMsm4iJjYq2hvwia3tm2WC44qoWBZNwrXZajWj1pJoaect2zaXmeaKo53HySRLHat",
  "key26": "2qwGKPS1yAvMYjRsFMoU9snvSFkHaBGbWTjDmZhQSakifmgwTQnc6YFvozMvWtoFBZvXtQPxo6jFX4aBjjPrssZH",
  "key27": "2Tz76kRwXMrpj7mGpUARsybYMdu1UqgxQkqsgLhz1PXanyYfVXJaVwAhkbvEPppvBmiBnQj1waRZWizXPk5zsvJS",
  "key28": "ySuwavtqUvmRAgAVYJMCJJHwrZV5zVpTyy8Fed9sdNDhhGaqvsRtpBtLLvPE7ovxtNBWrMAiit56ehuZpWyZUNp",
  "key29": "mm1FTeW6e5gUL3dej5uvXVFv9kqY6WTd5kr2KwAjNnVyhakqf8vzcGLPbmMB4B3yjNTjgxZ6BZEmtMKekxTaqSQ"
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
