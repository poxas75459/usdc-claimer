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
    "3rzbu35u8Gb17rkGse5UeVDXVNJFL82FswssUGytQws2fAnwKxbeGYAntQBsk4AmJp5Pkkrhpmhy4LpwUZQ9AirX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u6SoR7DR6tDwQfL6J7URYpr3qyGRwLpBXa9EciGnL2rgR41VUMXzNym3VLtMjxxqveYSVPP3bRNuYmRQqWrxFg9",
  "key1": "2HV7JxXKgCtJr2efxuH9onercu7DFwHbJU9YRmBvFXeb491UMNuf5Lf1EnyPxcFdib1qtnYnBQYiSC9mxCpGNHQE",
  "key2": "4GnQTbyYwiVQUMipUUR2E2NnX2oSmT35eyeZgci59zdU5y1x1bCRJ6uv3fRHTnYQgo7BRQxfMxJr5AHpZBXEXVEN",
  "key3": "2KWxqDJNEjAdknaPvCxAJhtkMQMkcAq7LgBrDBLiponz7GW8bHe5X5hLsUnrcebhxrpGLjWdHsxb3pJXFyFNNm6J",
  "key4": "4kxNQ2BTGS5CtCc3GqrY477iepXkEC1pzivPYB7JAHgo4dY74SuYiW1QSLcPMPjS4gsYAdwR4V8pdT31uLtAg3uy",
  "key5": "5dLf888xex6TZmsYfmw5M9LzLtnx2Yk5aJL8UYfXG2sFdP8bg5APBWsj4ADUUkdUeqNeDZi46En6QygwXjgqowRL",
  "key6": "5f29SmWYjHD5Y8k6bFrCyNdK7MgUM5krY3MwHYm1DefV6po86Xpzyhu8EehFeE1H7szPixsgAYx3oGQygtdULEES",
  "key7": "3paqXKEsVVD2pnGruXStogE71AZjeKo5HVgmpToSjwanw8ggDx5rnYgj4mUbNBZemZTgSyNhRJ9S3H588Zpt6QBQ",
  "key8": "3zfa4K8eCfr8owyTddQbdH4HbvCe9vj1ru83mn5BTR2SMavmqL36gZ6GzWcY2wmZjMgP6BcpzD2pCRSwZxs1RrSd",
  "key9": "5ppZmiYoYuaGEnrsYh73QHBroEYbV7s9tTuNYwbTuRKaXUPWHDqX3ipuczHv4MdUKtmWew6VXRjxHAeXMeWVzxt8",
  "key10": "2u3YKtwr2PQUC8Fx4C31LTnA6EB768zfwSuM8xQByadG9aZLiVMKycPgmF5mFSoorDHA6mqgLMUBffBQk5np9oRD",
  "key11": "5VPsUx2U5d15Wab1cv1Rux91kHXrjKNvtjkwpgwCXL8itRB1UDsci4Nai3AYmaxd6whrWTmnHpYawGVsqH7hdKDp",
  "key12": "2ERFuqpXtbCUTaqJY5wvGky75aoNr42j98zG35myb72wBvf8j5NRiiBzYdB3qM5grKcp3UhrEaNwT7XorAGVJPgD",
  "key13": "5iMwPMbjz8DosopkQVZbvXtDUR9inKMEkfq5zdwEEf8c1mb2THGidqGoMvdsmdtQUSkrvKqnTMNeLhf7o1uzhdJG",
  "key14": "4o8hXWJ2BddQf2HyZLqCy6ib4AXVdHvrY5B8cAvW6pNc2Wcst9q3BcE3MGK5cBshTxqnmxTbj34xutLeBHoEV89z",
  "key15": "2tfKDKTngXfYZEjuUDF1EsXjx9Y1JLTvBarVHFHs3uiVkaBX4YYedq3p4GgfFh1TqKnvRNYpGXJigRNKZSDkYdkj",
  "key16": "4oeCJPLcRjCgqHnigf9Y5Wbsi3BpHTLTPWcvap9Ut9BuR9vieuE8YgxBCZgDayFMyoAzR9hdWSmJv3NaFapfKu5f",
  "key17": "39svx43CkatBXCW1R7vc6KXa79qpsTKLR41CTsW1x7PQnPbALAziVrSemUeU5YH2i5QCHVHDvVtMhvgB6vb4YeBE",
  "key18": "hqvhP98jygCKUxHcrB4PfZnKsxNLcdNDSjzucnRv9Bhi53RY2JkEr6MZqoCPcYsY5EmFq8CYs1AQgEehPEx6z2w",
  "key19": "2Cyq5f34K7KgEGxu9xa2n2a1XSq3kFwRmieqUY8KSNxZ1kgPcay3ugWc1U66PxYxA3FGsM7x5jJsnrvYDutssAtv",
  "key20": "4sxB6C5aCYjTK745CcE4mkYrvZb9UMNdPRo4nQxyMstzFX2c8aFomsrDKkbKAGvmRQq9Xcoi35a43qbGfirfwWmU",
  "key21": "2czYL33rUXxWDVXR3XVJb1oAYKnL2e41h54z5rwExYgApMkek98FLyNHKLkyDarQgR5py1QobfDxSGt8XgBrx5eq",
  "key22": "5JYodK54q5pDNhwiYVvKEQVa6Ggp7oyeQ916viQMnEgDd89wdThAUXp6ZqiMkXYX16dawsA3Ptd5kxS1q8DjCgEJ",
  "key23": "3ttBJKwiBp6XM3ose5fKcreJWhPV4FJYbTRGPHDb3uASp3AwEASNguiqMCv122sz2Kya7QndJoomVdBNAMJVq3uF",
  "key24": "3Fd4SrauXVoB93jAPXfbk1hSWKvrmLYqHcu1vDZ6hE5DrApcLz7wj5tAJzcUJd56BzVS7UBHxqg6LgDWLLJbqoXZ",
  "key25": "3id4HDbrSBDB8TkkuRoTBCbRmtLWYfcLf7Px4ETyEKSdKGiLvcUgpSxmMycLUXZ7deG7v9eDjYEzCtYiyvjcrtiS",
  "key26": "3r282t6rFbMLmwzRaChPcXBN89dZsL3vNxNjvgLPFaqMAzJX9yy5rUZkfBaRKVS3CPeTvHMdmKSXx64K4kG52WY",
  "key27": "BX4Ppe8JGAFsDtyLPWdqdTZ8hAZs2oAnYtzHVcUYLEVy7jkViesQqx5wFj43Q5ro4n95RSxA87J1ZuJ55bmjN6p",
  "key28": "38RA2yMpAbuKp6GjBGzp2DqrE6qpbcXsLP9oTejBkB5KcKSfipZ9sWvW7mn4shaHsQvi2FpeVTwDBkU5kZ9RfWvy",
  "key29": "3gN73dgx36qhoJJ1m8yNAXw7EKKupPA2x5xkQ4j6XAKicPjJmidXoT5sbvKcC8BE1ejzqSKFMqQbcYKhkoZht1Nd",
  "key30": "3uUKiVb2wxA5wsor9nXwxs6AQYkwsnJPMekavc3yQGJShCsK4taar1y3DddKZie6sH9hba2RdG7Y53Wfy4K5Vty7"
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
