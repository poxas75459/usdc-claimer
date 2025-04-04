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
    "2KHqd95YNHJS4sRsbmrcRAPy8HFm7WL93iNcXk3kCPGqxMLBuHHtjoXrob9xNW814Hmia6XFqCheDhuusL52JRyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gXeNhJbCXT45THSd2WVMDVgCW8XQDpMfhXxttBXv5rLeiYAB3scZmDTimuTSuc1MLJ47M1hLbQ9crNVLbe3TNhT",
  "key1": "2aKKCpaNbfzxKHuK8GZgWMYZ3MNVKtFk4XtPvBEGS1b7HA8uNNZXPfuFtARWVznFaeqRNHDELjckJoQwxy1QaZ4L",
  "key2": "61G7eqyrS6xsiL2NJKPx5iWPzwceESkPRpxNcaCPQJA9ck4yBBfZhvz24Lfk18NDm3hKLPZmwMM6HJApfCubuqE7",
  "key3": "5cj3ECkzM4q8763ooyDSW84VuysUfrtWBfwGwdZRaksWTYPnhUyjYejYvwqrpYhiEbYrwBDA6xXiDRPmrdhiNT7e",
  "key4": "3LfVRRJ8EkR3hph3RuW9YDVNCDGjmYWgByecXifw2MgHZC4TmsYS4yocB2kQ5FXbhtsZUPyxmPfLhTpmqihWC4pi",
  "key5": "QM7teDjsKmTEab69eJ9qeG4xMqcaq6ZbKXgo15naMC1K8QgCSC6EPrNidTNy4cxEcyetrHue2qU72WYUe6BNHS1",
  "key6": "2YvV7bqt1rKPquKFJD8ZnELx2KyYA5oviBYb62XKnsG47E3gB3HBco6qLLmf45kJtBroddxhMcocBLPB8rdgc8E6",
  "key7": "2jFG3tNW33j2dW3UiNSamRuBV1cMeBdZg7oggsnHcrFbuEW7ZcqnTeoUAJ2nmNZzJnFBdNaFhTWehyeUywKEpWJy",
  "key8": "2jfTuLP1ToYtm7osnYdCbYUY66aW85Debe6gbntTnoX3j7EL81zaWVLout1HQydtQuxajFfjcX8U9NNM9b2kUymS",
  "key9": "3EyssViCtBgDZ6jUsVDHwK7xGGr7neYxtKBdkvWxZb79VgWMhEHeM5bNm2Tc56to5PMA7Dje7Xzc4GhWnZnZZi1Q",
  "key10": "4SFviE2QZG3GJuyABz6XrHQv2wBKZrizxaZkNQbaZ24G36w6qfyvFXJd42NYqtPoFdbtSYr9sN9PEtqKeUFMXBoy",
  "key11": "MErzQ3mBSn6eZZd5criHLqCKSFJnSBZ9TzZnSDSMu4AEkDhw3Y8W8BzN8HoR9wuGKvdKzwg9sJHWTXUB5yvhDQX",
  "key12": "5tCwW2AxoVR4ksKYHRsCKWdcoWG1sUNjqGMDbMcC7WpCGUrAW4iagsgvRjeTpxN6vkBeyM2ABcREz6SKvkVjchUW",
  "key13": "5uS4NiUdaWML7M9c1g4RnQocniUVZDkXADvW6rvkWjxNyGDuNKe3MQeu4DwXFbg427qcLFwsab6zkZAUv4ZXSZYb",
  "key14": "7iypN8PKDHvJxQf2agstQQmU9QntGteMDmgqa8a5iyKSWr7eg4GWiD8t7FbEeMFyDNGfNTu4gXJ9Y59B14Bz1uh",
  "key15": "4wMoiHQ6yE8W5MvJ6HGiNfov1v3qHySVoG6Ptppk8boGgSdHcGDkH1ZxRrBa2AuqY8y53yQm3hJGAmgVLyPYZ44i",
  "key16": "454wqfzi1aEWw9gLZC7V2jubF3mVFkMQw9kSeozeRMuGJN4eREp2rEWWEx81hRWvcmbTeLcFnDabf3c5cqSsdeB3",
  "key17": "jBL9JT6aek6rVVBooZnFm92MUd6XigU6U3pV4QzJTupEDRqSSunoQ2BgFuKQD14rFRnTMtjMpYT448xFgGYUHqg",
  "key18": "3FhNvYfDJWvEf9HBV7pdzwVAPMWP9GGrHRY3w1oAVr6ojDzQusn2gpsCH2hToFtfDardkAqMa5PNAscs2ExQcnDo",
  "key19": "36aBSaA1Ys3ENDsuiA1VRrJTy7k5PukH7msEb195EhkRZonJLHJaSZexW53Bzd1RevTZFpF94PEwtXj1gdDYN8uQ",
  "key20": "5wVLJhn4z2t2JjGEc4GRT1uQ7orSq1dN3B69F1PCHSNYFgwosmkMMktYfMu1gaR7pgGCjiqA8uwj2b8utFXvyQWG",
  "key21": "4WKVRo7GWXT31ZYrhYdJQ1CC7RLgfvzsRq2QMqF8E9FYPgkzW5wMfpx4bbFFZs8ipct3nUqYYKrdtcbaY7xRDsoW",
  "key22": "faoyAStpTAQ5DLGVFRRkRXu2Fvwcj9jHEdUvHVydwxqio64Kwu4UoSV9ZFrdk9ywhVnHYfh3M52PzCTzTFv3zwS",
  "key23": "2LutHsT1nF9AV9pHTp4z2LUce5nD7D6tn39w485VBkeVFKBYDemehJmpvnTPTkUF95EUMYNR2PJs3jREhiWXrpo2",
  "key24": "4yjypZVDWTVM3XHcXRSyk8DAPv3t2QqyPo7psBty27A2uJfmbqGE63burtmXFvJRLUdNfT6o1Lk2mXShPqvXsTQE",
  "key25": "2BeMbWcr8jkC2VKAMpnBSoBYRm3KSttnoCU4w9NGeYufAWv1RWHoDNRZuLvKcsFM3KmUuomBAf8viaUZsfEvEauL",
  "key26": "3Q6oPxc811v5UKEHYuFxwRajY8Sjna7PNJ7YDg6bcvs6s5wNVCmBS2LVicYFnhzN6YC9QKJUsrNMG9zMMx1Ak7i2",
  "key27": "4JA51PJazCjwat1of8tPTJhSFqYgiSkWMuxwru5XP2dFTLJuhVmRzS4CQDx8Wg8Y428sMi8og5W2k8P1bxk35UtE",
  "key28": "2oJ5nEgMisQReEdhXaGWRa1ZFuV8hxSkWHuamWrfAtuH5EWYViaa2xQLCguTt1KDWJDGzJznFSMhkE6dQWXPGHBF",
  "key29": "uLbLPZ2a7qV6HG9AMn585CgL9nTo68pon8XNCXrjrnjesk6kL4U9p26K53GvjEKCdvrZdnmBnytPDQBAkYVctSG",
  "key30": "641QVWcPKSK5Mf7GSkYsE2R4Gi9xLf5njw4F81RW3pt6BVi5S1wnP5Au9PxHSXhH571VwJZ5WsGfymamDS1vWDXo",
  "key31": "4VGXsveakzw3aRPCE2TBgTtSHSLvGJR3QjCqMoovVQLeV59npR6BYftNdtBHAvf9vyA2TTbLAM36pzdGaaDJB9Vt",
  "key32": "2FWwoKeZM9vnNW9jiSfeK6fR2xJo5k5PAwmm6saidj5osi9q5Zoj2CuqQYBYsnbmZFBP7D6wxuKKqVhjR3EREEHL"
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
