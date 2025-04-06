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
    "48eovxZcjJBdKo6yWTZUyfN2593KprPbHu1eqBgz6xqMi9Tr4CkNVYe1CeQWMkXPMJEk9fMcm8nRY7kTp1Ft9TXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bYTfPUiwWFPkHLmbLTgcnn2cEjJxCk6V4M1oTDZjpK1B4o8ZiM8tS1QtsHaWZAsq9xfWnNxWG2smKy9LcD19b51",
  "key1": "4AtNjDFqEVEwzsB4pzqBWqB4ncUML12ypQSxXC8rBVyLGJr6MCC4y5g3XFciEKx6RvTHCyTUimKiTBUxWVNf29o5",
  "key2": "5fTRy9K5LMEjonKa8x6CJqSQgQn5MUg4eEFbeDjDdipfyEZ498MVn5N39ooV6aqnEkNucQ8GQyvg3g8AvnSYtPr7",
  "key3": "4n9GKhCZ2ioBYBF1VZgDCSGDsm4FPwDkxMjEoieZ4PrNFkgowipYa7hsTjRraaa88sQyxk6vYLqaekL9uW7N8Sp9",
  "key4": "3Xmqy6FWexBD8hT7xzLXVU91hJhC9U1xJS7erLTC4AE4XbJj7eHoAurQFmtYazFUTDRADrwwQUPnQYkhGdktdNVt",
  "key5": "3RJD5LSub6NfErG9oYhymbY9dUnbgmPVW81wVFgNBo1VhC5RKCA2MG553etoKqPvFJ6FQ8dJvZcpdp8g4F9woNoG",
  "key6": "3tVNAARbbfYoq2su2b8KQ4icMigdDnMgxVnUZPfPCP2t3sNFuQdP6EgLQ1XmsjqtW7wv9LU29pWPj1LZtcNT1JA5",
  "key7": "4HXHmniD7AwgTU22z64aA3j2JS6bjpmENDjVcuq8PZfeYxNnP3i98mKVSaqARKF6mGtj7AKbhKSGFkHxQYzs23WG",
  "key8": "3RY3FZ24oZCm4NWWWs9Du9ZYBJ2X4pMEDjeezka7hi8uFNgE4VpYoAqP1Vwpjj5MwK3gpeVX46wrBQLt1axqWrSp",
  "key9": "4apxURxehspBzZZsgFLnsEdXnLMGQdxA4TRiiV9G8TXiAVNWeEDd2FzUjMSBvcTbcGfm9ZcUrwgMmRFEJFchPKpL",
  "key10": "2rBxAd5uLMT7qcmy5Qbj1gcTymZeZtKfqbyuGpw1DikJvc1qSqQFHruYnwx4g3JyWX8jstQ6sDvGPmxpWSK6Udmr",
  "key11": "4K1fgJYuyAVnq7vzNdhxfb1z9xtMDNrN1ZHNZG8wvmwBLg4kDHFPzivqaQqcbK6sHWKwaYYPupySZ8HVoxmYKyZ1",
  "key12": "2B2LVBMg25GQKkPHanUmTZgywh482xQoUPRbgGN1MRbPdugnx16PDC4CfdCNGtQVTwqMUe7RJ1Hid99o4A2n8MjR",
  "key13": "2FKauS6CPv9CBtGg97QVcFvNKWbkGqh43Sdmy1Uw2GifKZY8Eiyd2we13C6AishHJYLiJoBmLMvwwYKGspBcvJu8",
  "key14": "216A7H4qpQHeKkAHtXSWXsT4JuuWAMCwgg4KG3KgCKEFvxjqeaw6nFef8fV9YnfXPEuJQgumV8yxpjJHXLHqqhiT",
  "key15": "3Hcv169FrcEbRw1nu8dZNKpPnSjcPqSZtRCxRZqu2PNhbQfPTQkqsTGBg4cMFuAdyjbmYbVj8fY91jCdbNjVfmW",
  "key16": "5ZYvKFNtcajyHSEeoAAzQ7j4D15Uxd7jpuCZ4FJQ2xzP6Wfg4hjRnfnniX6FtRyFcBJWnKge7F1Ac3Hb7oc3bDSx",
  "key17": "5SR5dbcQ3mzRgZLGbduhgBXPLhdzyoggmUBR4TyKCGnwU3emCzzfegGNnpLRkzhTL7E7EzjEMnAENXVRYX6nsAgV",
  "key18": "2rdgvs4Fd8iyX4kFysKgYYafPiaALBsPb2X4GyHKS8maNAVRs5uyXa5oQh7yGfQHSrwr3udfe72UhCDJTdSwLoz9",
  "key19": "5xwwxU2gHcdb3KTFyuNEsH16XCHVs1u3Wh79sKBBXWMei38Ts1U1qpZN5KEfZSHwzGpNkQSvuMujRXozNgH8Nhnz",
  "key20": "3xWmnQQvdh79sq8t8RDKS6CmQvBj9jguo4xvrn5QmxHyzY4nZoKX2tusXjhu8jtaJmhXHq5JNRk8QmjFAydgajfA",
  "key21": "5skefYtkCJyCCXaGfb6XRgjxJBchU4tvEKhdmpF2wu7fSDUYSqkgicfFeDZDXo88QHSyQN84s6EeyXEDiqbddeYk",
  "key22": "2cdk7TBXuPGJBXnnPq4snFtt3RWvk9zox9ZWRnf495aZcFJVfMsPoKsaNaxpwYWozYZWMEVHi4VebhY6maXYkeiZ",
  "key23": "5NZLsqehTPeJxzepFqL7W6UNXC7mtqyDH4ECPAQxgYwWdgMYg4TSPm112U5yFDyYftSPdUEaNv8buuVpqxWVvybz",
  "key24": "qMhAo4KpK2jpmKGe4ERDzssVbuRHFhFxirz4tmzbytrAJqh5ysXdH3HjuXj4gJnaJdgxipx9Ufw2Zw7djYbeAZA",
  "key25": "2N5bZm7pK2QrvB7NkdJ967VSAnWEkkc7KyKVDTc4zpqq7Ayg8xhitksQjKTXMubdHD5KYXVh7kuCBbQZmEXENgSN",
  "key26": "3epfA5QM56S621ByPWxEAtvaSHkVWjKMkpLdDYAC1ucmo76iMzdZGn4bEEj1VHtALqGhdgFJteJVHDa219oT1J8M",
  "key27": "4YfviXn8XARuHypaWyaRhmxxqLWfzA3Xo8VfCyez4QTrS4nbJk9wGMtK2N5NvFVY4cCPyE9Kp9P1craeW9uQjrdp",
  "key28": "3r13MwkuoYh8L6AYtUQUmgSA4aYGxDewiUxLyFbiVWmTUgNuDedw9561AmKbVpoZ1SQRZwbjADoQNUAhsuwTsCYy",
  "key29": "4FmstvAsKJFboFmZEdfXFR32jj9MLyxpGiW8Hwkm2RfbQt9rBLGnPpauq31Jcpcv6ayucKKspcCoEEaCzSeaZMUU",
  "key30": "2rTA9ufLpfrKkXM8z3a3tWuzVK8eZrcaK1Ux79iXG1uG8oa6vq3fMPPtffgJGhXtqGRXaGKJq3bCDbHhyqtZBVVy"
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
