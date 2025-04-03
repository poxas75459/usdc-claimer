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
    "4MbNLVeHrSinbP6eNXYzQ1KKLAPtdXHpR7kmVedBQjtvGbVDKfhTjyo3KJUtEzSrkrRBtMBmTfd4MoJG1KgYTqgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSyutaDuHzJ5GFAEM4fwedVLgHNqtEKRmouvEWSPJW7cTkqt4TXbn6tPpBR3etAoNv6yTNTWvKwomuesgsn6Mqa",
  "key1": "4Gip97eQDjDPY1VUtMg254X5HVhBu3RW7MQa9DUEBR6cDnXAobLyMLWcymP9FUnAft6jjdK8sRp4evWArue1H6kG",
  "key2": "5s6hnMXiTdVB3UESijmLGvdyL4W6sF4a8LmdU2pfApQkheP4QvMKzizZ7YLA8gN5QEhwgrG29G3v6G5Hyop8Zfsq",
  "key3": "Z66Y9kFfnMQPU4ofxdbPW1S6D5ackKB5MVDxKATkHEqkHdyiUPMdZLdNu4iEEa2xfwqb84mXEFVBUhmTV3B2abx",
  "key4": "2dqPPaY7enudyVTnc1q7cEvifrHzuaJxz2bP1UZbkJQPyw5e7brdE5NAuw1V51Fr571g7USfz32sZ6cN5mc1i4Wi",
  "key5": "4uqdiyRmHY1ZBik1KDigqjASuss6pkYpQUFKBXug3H534NDr58rkXXMZQFm2hzsJVhyaUy2Phs6jXfNpDuyqbVJf",
  "key6": "4u2p1Fdj8KQDne9kcwwosF7KybGqfeNgugvEp3DueUpzUk6iG7zj2WZuBkNfbADGTbuQJxcvi4iswxtC6Z3PQnSM",
  "key7": "29NMZMvpRChc5kJSpXdtK1WC3153qc3vuW8UXnq5ZeoiMHMiXzNPiDzpLU8JnbaK2i1DVjuhLTyUULELaW993wCV",
  "key8": "5uNyJznZEJv95Z984CGaWY5JFum7BwFjdx61YPMhV1SKybXQAmZwr74eWdfWjTPYZhBvngELSGS77CdqJBxgUhAd",
  "key9": "4cxDmuF4ZveZn8wXvcmG1PvdJFp2Gd87CASAR3dLBdTjz7uEyhESsQVncTovisy439zowZBNEYMt8Qv1vebVJzuw",
  "key10": "jthpSbJDr1fzdnEfUR5HvzCmxssBGh5u7wGaBRr6R6frttcW5rVNumqQoaQH52ZySDgdu32JdvUcgbUSYQrJUPm",
  "key11": "3GVRQwPd8ttjXpFpsnQKfqpdPMo6TpheFaBiqB6HURVx8rWoEuYEfkSpJYZHFptJwwVmyKPGS4HqXzhPW1qZrr2K",
  "key12": "5qnJc2rNVpZzJs47PQD6tCP8X4wBJ8cKrbdNQV1aPT76eSLgMR9VHAiMLdZFLjz9U9VMTNzZFY5VGzCR5R71tPJy",
  "key13": "2i2NPRyTnXXVoYfnKXm1aH9iBRcoE8kFn9REZLCyKQCcEPcmHhsjAvjbzfsz35LoKfprknMwTbjFAndWQ7eG7MMb",
  "key14": "2wDSAcAAm8oj97CtjsCFHPBhcd7FkgQxRa64wKRNh1FP8semwPmCxEp1UsBSomnjXFs82YoAtNqfgA6mJfkAvjDs",
  "key15": "37JyAUyAk79sE3PV4NYF6pjEqURcg32oUTsJXnzVU9CZ6N9ksbhM3qKRijqSj4QR4c11bEQj3XmF83haBAWZ5nVn",
  "key16": "3MQvb21m5sKnhhE1PXGLdKgn5FHNfKAkVAHhZWfkUPKXBoB58x5TYyvGt1bEozkZawYPBMr7dm8gUGwm88Xv1KDL",
  "key17": "2WMRjA9V2j57vZm9DoAZfYMtbXmSXgAM536cR25QvAzcnuDUHRy5HfLPHmBcJfh4pkqtNvxS6tdwFmovfhJp5j9H",
  "key18": "3Q8ab5HnfvixZeDGYTtPxQrBAag6c1zWTJk2encEEfMgWUsVGxDXZ9bqev2vgyH9onESkFB2xVe4JiUJpR4QSUu8",
  "key19": "trZM5W1XtMFRMsZabif1D81KE1GYRvsAdcmVfJZyVagNaw8VGuod6FK24kTmMBKjXPW649aPowxZ6hXVmeDugeW",
  "key20": "3Hgn3Gxww9ac55DEK6X9u7ELUSYfUnCKacUBDvcRqYbQ48Xe9ZaZL2jRqmR1GBWsg5kNQfDFX1x2689eqG7sJ7dv",
  "key21": "3FTmQsYpaTA3fu4hjFqXzs11z2WNKWDY7BoEYAfGs77CME9Us97H9ueXVfP3rQSSJpL67KXq95hNAyRAd3zqbE21",
  "key22": "4tQdq4ShfCzQxPYPuaJKQvz9so3YwjZUuphLHZMAyytw6ZfVBfL6yWHGtgGAbnrFWt1oJT89t5a5cvBR7mWe6c5t",
  "key23": "3sVx3Qz1UwJ2i6MauzY5gEtTKD2kaWdhqT69GZ2zwonC7oThAWARr2AxhyYmCo6i1TfhTdL4shKGvpNYk9Ehi2yN",
  "key24": "2uYYUxEcEPAyhYYgfp1tLQMiq4eeiUBERrjpXhVSP3JTr6owsRaKpmuCrAepWSKaTRkPtKbszHxBPHZTHMgbYaLk",
  "key25": "4DMc2sG2u38BXqrCpkowpdRAbfxKwiJkfLYZzxrTS4uW2nmayXtMccX9TPuF2AcPPtKv8qELeUbpTuZR4Sb5XuMi",
  "key26": "3kxdYX3H2qkjMvBg3s8X7fRQDkC7C32w8idquEgfxZvjTqFn5YaiAJiBCZXVeDxWQPp3mAMcp7sWtq8Tv83RsxeQ",
  "key27": "dLD1fg59Jtfr7RYbV4KxkspkaFZsg2HcyCLFPzaFCZK5bHfEsDAFyz8dDCxYB7GJEAGnUodrhpHBwhEDXxyJAFn",
  "key28": "fzcWR4L3rFwitfLw9fhm56vbx3zfp4kWPQobvhqfzZEWYBPj8Z3JrrrmnFKVQnAScrxsVkHjjSQ6obbmChbfbvf",
  "key29": "4NDtjayrm9nnZzRAJk6Ww2DWwqzrnHYdNBNo8ZXZPGhHcfhS8xwkWKKigyiDeZba3gkpRPGzgFAK9g9G5tDrAZ1N",
  "key30": "5eMxhEYksoF15EpiubY21T74LjGg4W1GkS24oEvA5vbqFEZF5fE1rsBPnvwsGT4DTXXjsaAGyzGGGraaPeztLeHT",
  "key31": "53fzR1NzQxhasRsVmb6868EmorQZzv1WVLfw3HdUtEr322UoYDXHFBJXqiqTE2sN88tmV9nX3B3vuYq8VJ7Ppw9M"
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
