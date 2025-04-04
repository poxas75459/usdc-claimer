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
    "3KktZrv6cFzDhh14A55FbxdCdCS8jE35SQpauKUHT4y1FuqGJG7XSCfBpJj39UQBdvHLupv8J7WdwkTowU1m5AYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dptCE6X6KDj3jGANXm6FuJCZ2Jx5oXjpbXf5eXEjYnpB5GCh224MHEwjuUJztBDyYbz6bH1gzjsyvCjXQRDg1RZ",
  "key1": "L3nEeMJUWhR45QF88xbtR8KUL4DXLomoYSCW5Ti39TT4GN4NeeCUBtfriVbwqDjW2swEvhoS6x6wKSLaZQzpsuy",
  "key2": "5KRHF3hny2JBmL7mSkJJuscBRvpw9iBNdGfXCyNiKS8UuJr6UHUW1up4tDpXYr29f6TU7dbvrt6VDAXW3hnZjs3f",
  "key3": "2pK4UTAqnsjgsDNqEUNjqid5yHazajA8B3gdVoS6MxrLEMppGgWzxkqhgsQYwnLHEjFokXKmj4kgmdmAdWUi2hU8",
  "key4": "5BbLJs37MpyLq5APeK2nCRaFygfLBM9ypJZn9bbMrngHaSEtRZz8kvLi7rxR8S3xCNN6g6G7QCfQFF7CBqjY6wik",
  "key5": "ia475De3FMACMv61nk4EspTYSCJMa1yXu7zqy1qWArUQ28c2tUA6U1vp5xsrxVZL8iXumHCK3SpriimwhhieZMG",
  "key6": "22ZF4CcrpB1nBBLRokBHS6Ypswv9nniPx5ggNnF35ngfrRwqDNhNN4Ck3avRAp67D8N7fmDEqMZKKKy4BfqSgUu1",
  "key7": "3wBy2uio9G4kaEEvfGwsW4dgty1quA7yPQtYie9mRCCdLix7naKi5h8Ld3yHqDPWCYKTfpgK3En5R8rbtAgSGoYg",
  "key8": "32MutW598v5eoPxjAcKHq8oc6n4P8zQmezsLDhERd7T8zUdNRmonF7Q8CsJmsQL4Ea45g1KNiRW1dg3b6v4ZDghF",
  "key9": "61mJDGfwhG8jViAz5vUvLZs54Gab9A5pahJo7mDVhxEKFqfuudz5jgrumH9Rk1t3XCRaBF9F7zD6NgSmyagnBMj1",
  "key10": "1ipG4QwYy3gBQmUy8nf5T4dSEVMSzq5SeqgsHKCfnyuvowLDud7KDmY7h5TkA5dtkysHTY19cbh8tPmpPAfj6UC",
  "key11": "5vYg1ybsRUufmQPNUt4brEDH5YGE8cdpsrAQgvyckH39Mi7Q1DAPiMTii5Hq2TgTdcovLCRpQjWEtmifDvcoT9Ra",
  "key12": "3pFFjsWc35HCUJPekXrv6xSqkDG211My4kSj8VAbevDjFKwa8q11Nbu6Dfz4VM1Jp7yz6qA5RaWHWsjGDUDnTWkD",
  "key13": "2sd5wN2ZRYYZEfZg82djG2ExgCAdGhrjafQCsFCgHqCzQuifQV3WSkvUJRt3wTueJkMaxzvHbinKN7m4fysLHx1a",
  "key14": "ccVmLTMDEfat9ZgFxu1E5ECwKGLENgkYSRYYA4oWTahHeoBqL8Up8UEJppBvYX39w5K9RAZT4RQwKu8t6edkhUB",
  "key15": "3fnjNrmQjXi1fKQeUWQthqtsc9waSJ5vttq7cN2GazfLjAcsjSgH8k6FjPGGpuyqAmcvYycavkmQW6gwEMxFgeMu",
  "key16": "52EL3Sn4WeV2Fkb6eHNxabHVjv7g5akoPg7KeJRbcn5iyeMW2KLGNxxDJCn4JfXHUfsyDtp99uFtZ6x4JyM4xKUT",
  "key17": "iAybvUJsTzcgVkoJeTyPcKV6zUATPx8dZ1TKQP3XxTYU3xwh2qeNwqB2gQTfrwf5tYgqe1L7nVrCnJfu9uSYgwb",
  "key18": "4A35JMj93e1GJZ54T5h4HqdePnBYq5wiHW6M99HiWWsoXgB7kw3Swz1g2SnFtYy1ThGcbMY1xE11KQMYLE13U8nu",
  "key19": "XijiAv4k1TJDEFYTK4Ed3uqVfiMyV2aZVnC4zxRdTVKqBmWXucQjvNNW1V1c14eKNtnGaFpzjb2PNhMcyw7eUfX",
  "key20": "4GMJYTtU3AH2urBWRTb7tyPyULr6mPMGFAHnPsJvySZ9r4vu4xrs38XTdJaWXm5Ee72SVaJ21zfqbkeSFSe6MDet",
  "key21": "3RQuojYipFr1FMnNGRxFnx8xts6h9gGgU1rXkG53m89Fr1gXARRjwyya2mhuFwmNsqWnyesMCT5R8VNnRmvAty6Z",
  "key22": "3okGaTukBZGZjPKixVfEty5ccNSGu3Rh7JCJQQgMNPNiwRoH1W1FJ5NfrPtGQBv2U5fyUqY884mLTELZv2VhZknz",
  "key23": "5wesNfM4wEVfGjg4Ee7zDev7gf2QEqdvfszxhqbEPSv21GBw7asbzRq4rvRgwtx3CZaiteJvibsQV7E2U8uDK8mN",
  "key24": "5KnbFgUBnWKfBXdLcLZ92iUDthPpWGDCoqwxFHQ3S2ertbkuYLzABDPnT14XVxyqNRNHqxrrdfaey6gpGBJE114H",
  "key25": "5y6CMUNx1oMc7Zzs4Khy9A8FW8mqZxYZkyjZN6KM1TmYAgPF2zxYwq9kE66tjSvMGnE6gytSBUmZqRFvKWYAj724",
  "key26": "2rwQ54i6BvnLx3FHhgzLqqLXrzZDQrhzwpYEH7Arfa49AedyDFwUFhSxEhwQiASZmDVpF4DoRBp2AHcJBUojArX1",
  "key27": "2qEBjRUm56RGW8jHVdXSuJWVMM4zZZC6QVRvabmTWfgVJyG6ZJ9pNXDrhBowJtTyhzAFnBjrZb82EoCLJeny3EbY",
  "key28": "3i5zXB5xdvzynwSoi3Bqbx2FnWL4p8LHhxYkkP5vnuif7okB5xhbqsgzby5dhbFCXT5mK8SL8B95J3PK8XBcXEUn",
  "key29": "27E6jgorEaaavPbjxNJfC3DV1eX9QNAqzNSp28iBrG2YKtNsSHzDiEx524W7W2i9E6t7iiiQQXFk2NMWtipcx4t5",
  "key30": "5Z95EYabmXJdZ2JAsWoZWSXN4oDjJkArdThGhtbdTanWknDcPQh15ePeLf8oVd8ZRZyFqTgZdzTguASfj2SqAoMh",
  "key31": "3KctA5ZCj14nQZ9Xkx7K6ut6kmWxavEShntiUCv961xX7BW746uv57gr6a7PdQDCuVpUoVQQzbGnVLAM4U1ReYQC",
  "key32": "5DZHrj9W8UGR23FemFJ1vo2wLxNTfQRMHozYxzKmsPWgMvDi4423mUvvJM6gp6iJXRA4R6Rc62RjGzd8rMHbsoL7",
  "key33": "4s9iB5Yjf8EaFVCyQXfoZtXcDrgxrWXXyRPqkMwVhE1A7wUXSpMmBrMBvc56V9uqhHEf8HY7v1ywz9LrtxvtEwsP"
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
