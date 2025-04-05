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
    "kxFa12nTKt5TyABccYzpbJcHuN1U7vKWnrLxNcTFajhAx3MZF9LQt3LAQsEr2wvj3RbjRKFQbC5Zbt7cxg4YzjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hUUFfrFxvkeXcnJuZrw6fSMsWUT4YvwAF6Ua9KJxy7LUudjZVfn9NA8zLyJ13W3ANCJKo4oHpsvqnwWwbcnqbn7",
  "key1": "6jAyiC75sCKwVLb2aFPXzZViJnSfNpErzVDLSb1Y2PtMLys2TwoFy1xXtm1kH3zvDXgzZfnjncNWeDuwo5HLurd",
  "key2": "4mYEDvRq6j3Z9d8vbK5XBJAYrS6AH7LWnpsQ9TrW2e2cRLoPSmRAUrbBdr14k5oSVfsNvfsFPzvVp1uNv4gwtZGg",
  "key3": "48ZVoixYidhkCvrzHci9e4PpWWns4ge17sRvHPM7GENNnmDbeCAroWJbW7VwTLtGV8zrVgLvjabggPs5VcTQeoHG",
  "key4": "4n4XEWuvbyuzD8xy3f2eHemacgBbZTZ2N4JGDtE7nyLJvWeUTNHmN2HSPNDwZ1nHBcxRC9ftMs4uPWA7KmKYuYFm",
  "key5": "3saY46psuqJUcuZV2Q9z3MAjTjZ41UBg7ikZpwtqZrePLGdHYYmy2pZTjLV7LHd9nVosWirr9mHGwSNtsnBJ1xNA",
  "key6": "29xw6Y1bgERGvQobENGSwWcsLyuiRiFVu89wRuSkrxSgEY2JgdMGei4AF1BzoeNa2DrwaZAUex6SP2DvL1vCunxa",
  "key7": "Kh4r9E7SC9PeoWmVq2zS5ky7uNYMD5kDS26ssnTbiUdC9kJdMbeaAQ5uxr3uNVPfBcv2zmQcBa17sJdTKNtXHuo",
  "key8": "5XqrGvSduhviUD34cKVTPKVcZKpDaZuLbQzBL4zFGwTbks2uLBTBeay86CgZ9kkNkd7YdsHu8dox5CkJFTDbi3QL",
  "key9": "63fbDvLTP9fr42RLvi4ah2fRRyd6WpZnJTZq8JB331a2c8pHsmX2CAdoaQyntUZSzLJkQVxLZhp1MWd5nr1e24hb",
  "key10": "59mQzfS9NCEFWYNynXB6nF9s7RW2dJ3uDHDzv5rJpiYtBKwJNsznoT2iCmjwHoMjCWbzEVMkcpaUDWJChfKyMXrR",
  "key11": "48Nhjd9Z9xFWcN7e3Akqc9Rq6H4G2iriPydX9j5ECHREqWeUQKjofXN9xcJAcmx2tLM1GoUfGhZsgqewGbGusNgS",
  "key12": "2r4pZJ8MNvcQxVuDiYXJ6CKjpTUuHn7YdxPnnmnyYBFE9km6bBymc8cdwS8UW549vrVTaEQ2uuvXtLFcJtRkETB5",
  "key13": "3yqewZEgvUUwWBxeJ5sQ5hRA7S2VvXfZxir7iUR8M4ViyK4XGwDJPCh7jd6wcHL5oVFY6RhPUVmETxfqX2BJj2Jg",
  "key14": "3NEd4rRgLWNLrWCpEXdRNxsC2QHKRqCGYsbyK2ogPA5A3zN5ijgbt2kUV44ZoRRBi5mdGmuLYkE5V9xYuSmYzuRm",
  "key15": "TdviVvK9RQnxEc9um2T7NzR7VSupkFfKu3mrm5sXZWty7KRA8U77eqfDtFfwXF2wLMBGUBsHejq663pLuyBQw3L",
  "key16": "64Ccsug6vXzzdexuVSJLeVu3FJhHczKHs71nB2bBBEx7vD7tYfLYg2YMfQAc4bfP4hLTUNKk5YkipZRANGyCLFSP",
  "key17": "SnvbvAYMHeuxJHHdEKR6s32yFm3oNQDs2kiqR37FyMQB4qMp9TY7Vr7VEZS19G6o2RDuJy31GvqatnVJvpfA96n",
  "key18": "2xAnxmyAdTwihwynzfehu1ANrJDyonKRgWX4HaBmiXoWMuWTQNGY563N7DLfUJyodMMfp46AHHnKTwQn3btbghGd",
  "key19": "3vjJVRqjBJo3pgqpyBR2JAEiVeXJp44A3dr6QsZfxYoZNorZzo8Y9nhEQZiLYs6tEJn8hswsYa6nutepaH81bsA9",
  "key20": "4cikLf6v6QjWaNGVifQVX37tSAV7u54sj6UCHyF7nYf2qZEuCBU26wr313x7s7XDqXQwBxRdtm4danDQhbZiZJz1",
  "key21": "5fLmt4sRjDR6tvetU4DcbN4MTaaaxtZZiEweQ1ieQezVmZeWV2dWVcikyiGdKHAJLXf2PK9JrtT8CXxyUz7ohYzx",
  "key22": "4T4nE2LPsxvbXWCYLSq3n9WS8mTqpEZgDZUuAT4rCR3d5QfKV8MrGS4Ag75oY6FBWpMxzqfD2dhYxJXU9dMjYsjL",
  "key23": "4g3RCchD5DZW4JN9r1iVUyocXxZFdCLvKqLuybqFupYLKWKo45N3A1SxeqccTbQqeeJoktynogHvzJfHkpo76ZKb",
  "key24": "4axYcwZcutythTj8AoZDk35WAETDgJUG34bKzYs6Q6ygeynJiUW1F7Q9VEGaeY8Zjfct1yj7iJKNYd4Gjk4AeWFB"
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
