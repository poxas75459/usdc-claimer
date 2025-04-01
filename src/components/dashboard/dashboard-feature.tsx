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
    "5dcqUgaSYxLe2iQuyPsTfsjVU6BNPyyfWB1KosyeNmSsbCGNdWYufG7ViNGX8Jt8KV9xxqXHM1Lhua27U4vE9cue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "228b8ueLRXrChed83vdtSSGFrKUrwhoejbBStJARq9eqrX7ye1DLLctsmJCEtpHJ196XzYRPCTPR3uJsECxT4RyM",
  "key1": "4HYv2eW3XnQwZ6Pkr23n2XhkC2wnrxLin2WmfWgxPemoScTx9yn6x41uwYRd6xuSCZr8tGnHFFPuewn5f1tYcERw",
  "key2": "2Z56L1GrJcWFjUaU9VarCYWVtZtoAu8yD5GSWpGtWu8TfYdx1NxXz4R3gC1BANCKxLNDSKDPUysh17ueQSbrzAun",
  "key3": "4UxMtKzutUsoW1jhWqXkGhZp74Vd5wkbZ7p4gw2jcopmt9Rwcikpk941Wins1a9uwXyit5P7Qoq5viWhDyesJCJ9",
  "key4": "MC3FPuB5b3BwPpdQbF8RLajZFyEZTwjs7gY1ayXjSTd6CynU1Gsq4Gh5msonjBduQdb8a21Mw8jb1B5f9jabfT3",
  "key5": "kdLwTFTCpdctnM8jtsyofqxXkjeJ7LdNhXorgiC5pDZ1UZLgyx8oNZvw2jNn8wV5kayFb8VKArEWybvFnomFnsp",
  "key6": "4ZomGeQD1A8NJrhhThhXU1JmTXgGPktWtFX1hvTHPsmqQamKiFqqwWDgazcFwU1vtteTNCidwMrk9WpfJ6Kqezmn",
  "key7": "3WaMxkgNFnYbtwqAQNw8pm5JXi65ZnkYuDtEPSUtTGPEqX79sRYkayuNLE4Tkpqwhc8UfskcqtNqbuJXKT1Ltzqj",
  "key8": "PKXT8YGauXVGE5x3H3maZ5B3M6k75em2aXq6kmgSNkgtoYkPdmQ1bpUuGKYbXwBpToaqJMJZFeb8fTnW9EGSdrL",
  "key9": "534V5MNvaeAKsEKkJHwmkQ4yQrYWoAXhw1HvqcVUT5qAQzf3vU4fs9hqvPjWHy392WRRQb1r24Cg9bRYCbja16Gp",
  "key10": "5ShszerVRqgv3nxcv3EurxiUpCwnnZeHb6i3aH5Vnw6Cv5ZLe3yTJte9rQXzRvjmBvnuBKh7N9Hgws3KvwVtjck",
  "key11": "27qHuDbcC4UeFbzeTFNQruEALVXcsc3ds3SbXuPAbE3mrd2iiFLh1bZ1C1hx4UtYAqZsD6uxUFogmhz5iaCa1os3",
  "key12": "25FQp9dWBfbfHHCZEhF9huscvP4ojSdTTAEqkRYETyYEdfHTE9yeU1h5TchRanhG8tLizxB1zxhXMpkhWydMiR6A",
  "key13": "32QNDdT47uGoHjn356KuBeRHGwKRD5gk3ctUioWY71fEMB7RhB1wDkPTp8maw4L7Djp2AQ62qv9TQa1TiFc8F9oT",
  "key14": "5gJ7C4WjvhwXCd1xCWKYP5kpBRmJppT6vTtT4adbwQ9hnfM5YKz7MoE5MuHVejLNRoHwEhhkVtTzGdcqF7vtNoTv",
  "key15": "X6U5yTVJw8VgC8hsHgwnMvpk2JLcp8oXFRukyzsQ25BfvZbJtGubMtxQ8XPvafmJcfLS1HKjfvhDaSH8XUkwWj9",
  "key16": "4G2TcnHqz2x1T2RFot3nkY2GqXaY25jBhuGrVHxmtnADk4AyHZK9ScWWiY5h9j75NTJwC8C7rL1o3JVZXpzTP4zH",
  "key17": "3MxTqfWUSag6gqnwPz1J69pKcTy2xNxmeJzXoYtGru5N3wNaVL3EfB95NrRYChsL8v2z2ard8gWg1RPFsMtxjfa2",
  "key18": "3y2z7Y5GDtCtLZxKHcTyuXAwoAHtRa42itan7UVLGZ9CTh7pTNVcRRCkcHuJhztrTqYMC5yoea5cFVhG4iCvwHh2",
  "key19": "Ng2pXdZN52bxZjEyPguHSFMTYzLvbjrSRG8sYmEoq8HGTSqyZfDhVwoXh9zJLkv3E1sZ6yiM3u48vZde6q5WPh8",
  "key20": "2qZn5tpNurktoAqj3MoVM3SjNXSP6qscjoFL6hHwsiouiLhq3SESRs5qrjWPwqaCmXKysECFbnMychHNe3Bjrk4V",
  "key21": "67AbZAzp6seZvyfGtrvddP2UPwFrnKPmuYTYLwGgGX7egaWLNMkphuPzzxpBCaKDcjZfadqEMpBMrmYDqKKMirDy",
  "key22": "A7MPDm9asdzNkT91UwcwJkYeFLPQ7opdTsmMRL83UQ9Ckdw54cweBHhJ3cXBK48wFY5RbXo9SYHYUebfuu1iNXJ",
  "key23": "QJ2tnhK7qHQbkJdMDkmMvTkVxBa8FKQuWdMAcTRTEwpJnXjxGbrqqLT59DT2NBsYezruG89RmsLEbkV5B9Ha4UB",
  "key24": "5sJWtjDtgPTx3qfLomtRXpqczkiGw7BhuJfKA1TtDFqSJW3JhB7ivE4znZgvJCkiNh38btCv9RanBRyxBPtu9ozg"
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
