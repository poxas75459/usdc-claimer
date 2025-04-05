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
    "2FY4yeQvU2bhsh5SKDL5w7UJaX3uq59q82ACbKgDw3vxKTVyNi45LuKrokkDQWjQBXSCqujgy9ruZHam1XspqLyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CHqdgk8xEtvLc3vFzRqvZMj5cP6JQkfqLg7iXzGHQDenFXTGyPzXYVHogFdYNCEgYAp5jKbS9U4zh4E3FRJ61LN",
  "key1": "2saMxgSVxwMojL2BmoeBKc65qzp5W9dnebLX638J72kzJkwr5XWFfL5sYDKmkKunh5cuU6qNc3TdeGP8pRmiofmH",
  "key2": "iG3ji7y1Qn2RVBGhz6nffUDREYRdcnJhQbfjJ3iJazEsJdEx5oHWieLJdEqGXVGaovwNtZXUmDM2BHtHVbWzLjM",
  "key3": "5HAdH6xHyrUh2LZUpgY6uy5WzzsZ8CZwfVcTme5zgqpsGKaE399turRbje2JfEXBc5WqrEBx9SVt1PiVz2UkkFUM",
  "key4": "iRBZuNuZhKEQBhZa2FUEM2Zz7EiwQ27wQYVD4vs5z25mHbiv2nHk6B1DfcQLTvX7GDobZ4ELxT77zeHSRaqZjcw",
  "key5": "a21Aej4PBTLvaSu8HATjTuz12afomVcmDNBVPbwEVBF81yzVSDi1Ko3kvmuavchdGxe8a13b7miWqrQUZF3J1mb",
  "key6": "5ox9jF2BvW9ft7fdJVtndBmy5JYDX7LTEJ9auJJP2zmiWGB8XMQ8qiXjxc1hgqYehPmiArWpr6erM5sjeZKgXAKu",
  "key7": "qigRRj1GcQJphUNniuXiVkuXryofeqCAMFL1FWDgrnokn6txin9i1pnPixQuZsthhGqNcSHcaRxcsrKdLeRMHU3",
  "key8": "21nCT6PzYhVvS9uqfFLAD1Apjqib8gNuwTJu4NKwxHX1xV2dss3fJx2Zj6Auw1PLQWfeujXvKcAwCHaqDARWB1Ge",
  "key9": "4yqvBHJ4nutyNYAtXjA8H59RKM16HqaxZqsn6AshjmS64BU6yXjezTZYufVV7ShL9kgaMAU8gXhpYNfiGUwpYXPN",
  "key10": "4U8Cq134UsfDdtTaQq7A3SoRmdTtaPCzeAPRjpLtHrmHyKt1iPBHcytS5VBLjsay9ynM1cemrNCEnsHx6TU4FXJv",
  "key11": "4WCS6qwofFmZz5xergtj6piSRoTui2MNNpDxqAdxz2JeuGPSzr56rJhBPqPYbSR9Rfr5dWYu6Eg3YBAH215gmnEN",
  "key12": "ueVCvADu24EkWPLrJ5UMbfwPLExmR2fCJHq2MiHYxhrAywMepcXniJTPwtbt2T1qCEENCLWyjrdSAg5r7nkcRH8",
  "key13": "41sy6D5nnyXuvkpB9ymvtD6AkPqo8Ec7xUFegQo5CqosoXe6BLTfN1ggQGScuP5gMXKM9Fv3SNaYVhnDD6C98Vva",
  "key14": "2SANyzivvfvUWdoS8yKPZEjJGcuntKkX4PwNJQgXxsPBQgsTTEVkkjWTgQDb4t4CEgkAU9uGq2eBZbToyDtwz8qb",
  "key15": "3zrw5qWPQdRSiDjGMtrR2ryrUNBq1i6ewLHP6Siju6D1Y7ua4z7Dp5bcY11JbpFvoCjrtDhoG9DPspggs86SJWCa",
  "key16": "4iL7HffPciJPDVt4M7b5SrdFSLegG9uF31NpNtXMemvVzLnycWVDPURVZwNvouVTztxodXucDe6Ejnw2mTnhAnE1",
  "key17": "4QEwv7ZAhiVwYrbjtBHCj73MVRsybPgxDELPjuT9hHChFfq7WNV2hvNUb2bZZzXGtbSmA8oAynfkLXNR8MsBvDT4",
  "key18": "515zk5Du3efCNoNzH7K32L9e2CEraZuakiVpB4HdqyduB3ZjjuA3SWeykm6tcUcxMCs5H9bx7Da493pixoZw6a8G",
  "key19": "2ENoqSs1M6zyYi16QQso5gXNxPQpMcau8LNoMuNRnbKm2CrmBqyF1YVnMrixvoHPiGfDtj3LbYDEwdMVBHJGLaQk",
  "key20": "2yvYRWWkaN2syvqotzPbDfNjgH7nUXUNPbikcg8TWKzy529k4Z8L9upvMVVivWYabibePJq4LNuDR67AdrmsZcnH",
  "key21": "4MZYogXFCbHcnACUzQJrob3ZhgwEbez9cuuBFgYpUHEmTNrX9j59mDW2QNJiArm196dsPpSYwZ6ByeQbAPPThMUj",
  "key22": "gQByHLQCXuVbMpPdFgMPBj9H4njGnSit7bVX1A5a619v1q6NZiihqUMhPktzqaH11XSrkQBEzayaXquec6XFJAF",
  "key23": "4MraqCb7QatBiUQqfZyxxB1shnKgCTiu9fwg1pVVRN7WztZRQQeZ2ex4VtNx2nyf3rVkVLEKLE465ZH4hkcoyqQB",
  "key24": "3tbEBNMzsrYSRZPyqTVxXj68q7C7nxopnSzY4bjLFacKVNPvKXRRK8ruKZJv9KDe2GMD6x62LZpBHGNsmdVhBDaS",
  "key25": "NixtpRGL3qDUA37rqe4aEzSA33npVoVPM2eepCRFJgbi4FrtNt5i5oSp8gDPbpptPHtpaGsvduYedNapCZihc5X",
  "key26": "24FYPRMYPn1XMn6ZB1pbXnCKqTiYMEJLkvrUbhXV3sHJ8soHBuNtRZszbntr8mmukU4nShPX8s14xtxTJcoa7VgV",
  "key27": "5jS6GC6JyVbQfbCx6kzEdLnirR5iQ4nC4DcJjDCaNoKPZzcc5PdU68SDCA2mFc33eTj37G4wmEMCVTqotMGcqxrC",
  "key28": "qXboz3b5WCZSJkPhpiXeXu3YFK2nV3GM6cQSemnCWfevyfj1yW17yYhqvQ8DqmBu6V73i55eD9BCAAwXkV53hdD",
  "key29": "4yherpzT6c9vZqGH96uFeURTEKYdn7JNLrGgyi76hKVkZLJuET3rJiCj4is9kK2PP4fWTBp6oYpqGB1xrPGfLhv5",
  "key30": "5B3f4pZgSU66GWkoJm7Zjg8GhGw7tA5rTPUxjoFHvdbTwLFk6hepkAPqCTsHQFcWLznAKRSdwtfcBS5bvJqLUrMa",
  "key31": "3AsriMSsP7Prw1ULhBReGCCtrAmyLhesrehDQZxsLzf9LyrwTLnCESwWJMwKsHHTTfGak43TinUsfpNBRbNBGFS4",
  "key32": "2vxpSRTsBqnZ4Me1N5XiW6pxT9BUDXmy6w5kNEU7GJrKbT57YTa487WnZSCFmroCbvUfEXxjVBzG7kwQXKVueu26",
  "key33": "3QEMGMpA3inaZ1zrdpd4rnvwK1AHZjXRi9T3f4Uu35ABqeJdWJZwYKsgyBL22kAkJKMouvqwbEEzGgCvEyBgVfst",
  "key34": "chwgG4TbXanKjSoXQLqZCi9Xnyx3LiB6YrNyVD67AtHNrJotqhKcuN5Gxqdqu5tNv4Y5yNdk2FtTCsma4cvFNcy",
  "key35": "38bdaXea2u3MpaPqUhBewyZKfizVhczcjwZbaFeUfdBt3ayLxV89qrjJEPAtc8k4h2qsTDsdhjjnDPdDnxhtdJJW",
  "key36": "2WGekjYtp34aA8Hv6GYWpEvXtbY2PW3ACCqpbpzkUnieCfWho6TEcQAFD5TjY111UGES6nNDXb7sqc7fRsJvLWWx",
  "key37": "5e7TRz9sjDQu5uqkFyVzLU4HcLLPGPcz8n2WViYDEFwH8DePsoCyvRmNPfv7rsbBvTReJRkPRrf7SNvJHUJQEiBH",
  "key38": "24qFi8Q7SgvJb9dtiiGV3BoDcWvxSS174hG3CrZpBxFR4AbZEbtW1TMMQUSDqfkWew13r6ekGNijgswLrwKh5smb",
  "key39": "vdP12g1ev38JDeKZ4pR6AyGefU4zXcS7wrxMiGhnCHLifrA5cZ9baS1Riy7xwT3FXtjS8MpgWis3GK8dK6zztM4"
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
