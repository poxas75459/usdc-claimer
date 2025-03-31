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
    "3oD5rA6bkYLzCgVve8uUq4HAuemnX3TwLWWAXjhMaR28J3r6u5uRXzvNS1imfAcGnvpkhMwobAoVyA24QiZ5GyAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vJ5CSgNvcrMUic8dQGHErVGqLdhm74hUEMjpohbJZnvaJG1efKzS12yduD93naPQ1J7EH8wcBUC4VN2EQ2XryjF",
  "key1": "2UQEwUgzTcivo5f4gtesBp4cczQKx43wDML9kNBbuNybWMD2QdkGtoMX8x5Yon912FL3KD9Wh8fuAK9RnJdJcRjo",
  "key2": "2nVhNs2oTiwaymuLeh98bKeCTL3hh19ZLkToo8jdRXoQ7TfD6NqWHzsmN2aDyfjPBBeq8wxBqAJ2UkP5S3fFAK9H",
  "key3": "36Aqj9Wi8MKUtCb4mtQ8z6jVNohD7gcnyDwAJeH8Km3FY3wJWwRA3apFHVxheE6UYcZkvxUfXqHFCBSPcePwBnuo",
  "key4": "4E3z1fsU513cp7vmrEgoVgB8FzaKAXGr6wNDSRZCaum7jt5PHNbnLmju1QwxeTsT3xcEALA4TK4jTn6CqZPbfMvk",
  "key5": "2sxEqbWdS8CFxQvsAAgPeZLRUAFP1wUQ4kEFswDDD45TFmcGVCc7rwBsKmaRFBoz9zwFwHWuedBJQYnB548GYgpg",
  "key6": "8Sf2yj8mqRhkq4TRguDnJbysC8XLdu8ehrnoEeQDxnTb31f8h6WDDnSgcpwbzzmNXEhNyteGctPsK3VEnewuvGe",
  "key7": "3tFJ8RKiqVrH66sP5DBYV6LSb5ww617WgrtJrbRVof3AXw6Bk723qZmeP4ZGmu6Q69KzYvg1xry1khV2qGGS9Udd",
  "key8": "JwaEtSuHfhkJPYS9wkCywmq1rthYiHHzgfJ8Dv7gzxJ4hiijL5RL1bTj3G1BPCKexu2JpzyfiEvojvbehaAVbJr",
  "key9": "4vEAmzbVE5meAhS5izACFqFpESjujTh9BKuiaiGmKTPnxUaBASt2XjKtBbwabaATW4LizLBZtULsv1KhAETVaBDK",
  "key10": "4jwEFxojAhAEVGbeqQUK3mNvduUu7wxbqZZ5z643MPYS1FeVrou5Rka6fV1VMd8WHn2gLJ3XMnFsZf9MhJxsx865",
  "key11": "4jm86i4HZj9Y51gVAEgvauGXhxWFj6JzpWWym9cf2WgE5hDNL93ybzSdLyWGi6weZaBB4A1S33DhZMejZKVXpdG7",
  "key12": "53dehDuf5hBwZbEaRLyurL7uiZtNK4tSNqiVFNXz82x27LCtV1di1Fb8PxtMAuyGHPRYjEfwzBemzx8zSiRRMYWq",
  "key13": "NqzG8WctkfhhMSoSvb4JPHwTSU9ZXRy68aaV8NNEX1SeMacGQKxmp447yeyjye5fn4oPniWfDdWhG495CTwLrG7",
  "key14": "5UEXsPrDiXLdTKuGbgt1k8CNjQtSFtPUaA12Nkt7dUSXhQyHAU7EkmLdSYXmoVmYrmABrG7LWvq6Fudj8QbpEbNU",
  "key15": "3WBczKDmgsdb9ACiPGCy7xpbugVhZpPvJ1o7TzbZtYKTqTJbDs84J9pCALKX3yyTjo3g44eKXAj2fbURrKXNsG7b",
  "key16": "3Tn9LRPWbHAMqp9q4t9nyyahxCvP3hshEVr8UMkcXnjJM7FiMg2e9vC268WFdDca5dhEHnLFA9EcnXPiS7RpP572",
  "key17": "yzih14wJ771S3vfFWi8TcYw3hhQuEfQDwroHRH8CmfiiC6aXntbkpZARLrvwS8qXscLNvKao4hafVvMBqcCh1f3",
  "key18": "4FcUzej3US2r7XVYYiCPRwyBnwcfm5cEGJ9JYse4yDJxCDZC65T65QUnokj7rbHGeW6Koy7vopy15Ry2aQtYqJaR",
  "key19": "5vh9e9q2KWbPMSagrVb6GkuRDBYKXM5Z7DosZP5t1QcVwwr4VVha4LPbEXWLgUodQLgzeUw1pQUMpQPxNBefHmfb",
  "key20": "mV2DvacGWnuPooCntjCJYn7iym74GJbmrwX28mfcau7gfazMQUKyUgXdkj1T5dneRvZMAmj8s5CaZGLhBG54rzx",
  "key21": "5oT5tg3o4jrZ7qtFApkDTA4X65cv6N4JPu1B7g2dZLiUPhCuqJHg3iCmb9QKe84KUinfXwBnFPDB8EMS73NkznnC",
  "key22": "23Hv2kTwKY97ztXQHd7EJ3yN6sqsJkVHiRZVJDob2Khev5zK1qyTMwr9aDWtgKVXbMdbSXPPt6jkEGRuYtMnZZjV",
  "key23": "4Dc2cJkFQAG5v4AGKH5Er17Hr8QZ3JqcDUKtZueviHcm8kr6of24enHvjqwQ1zXyE63aqEQquuyeQ9iL8UodPSj6",
  "key24": "bNfyHQhzdApdcnitw36ouZLGCvAusQzkZk1wXpt1wisXCDTDqXDHRtdHvCMUHfDnnEYxBpvFz7SLDBgggdAdmQY",
  "key25": "3FMd7Kd5hZ47UnLnNEkBwmL48ejPaQo3Jj5p2B4dTCmwnamwhjMG6vwgnEEcJJDtZD2W5g8JRnA7ECRbtAFmf6at",
  "key26": "MFjouxw5ZTetCWPs5xsK1xketv5MMGukZ9GVR7HQB7mpg3QstZUNy8eBo8eUreYKAnNEAPyBC6QNeu1czGr3xCj"
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
