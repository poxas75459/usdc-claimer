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
    "4upor1HNhmCbw5GdJgDpEPPdvReJBghKbmZRnPiUUH5ELqejY49Q2oLNqqogVD1xC4jtHcdYKnoDRwRu6umcG4Kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YTCwxUNWRC7iKKDQbikzmviCKYS6d5xGpTQ2KZcFFra7v1i2CcL4gdGH2bntbQavHuQSDSi2damWGmnqZjkHTjc",
  "key1": "43Gp6uok3j6xQq81aTMUQTnt1PXQpoknPTNeSUdBe3yvzpe8EKujDs7565kYJcyzbdw7mKUPeH9jJaEc4L4mT8Hg",
  "key2": "5aC8WizgjHvSf47iQincwcTgYnCoUP1Z1GLxcPTv9F8GZJFBiN47SZJMX9BVqD84gax3NmEKN2stkUY9B6AqoTPb",
  "key3": "4DLireh3ZyZaj4JTyB9MguCBNKiJx75HubsEUYzKLiCoknuHp7boXzhaVs4NrUSwfkL9WcbUvcFdde5XA5Tei7D8",
  "key4": "36FZsMWa5gT1hXN6fjbDHHrZWcYErxJJ5k9KyzkRsjPg6hSJ7Wxm16YwPfHB6iAJaPMpDoH8V347U3J4bWgqNamD",
  "key5": "3ymCJAiyGZKvn5gz4mjbKxpgc75BYuyrDAfnLgbd9iDxdNNVFPJG363qiJ6wkuyWB9TX5aMzf4QBEWYafRYpB29Q",
  "key6": "2VVCpfEHpva9oAdZ11bU3aFbCfeimF7syC1itgPBRuYYmY5XU7p6bbNLt5f8seySC11jgsgTJqiZXt7HvjiCoo1M",
  "key7": "48ksWZEX77Hu5HMeAxmyWUDNyedpAf8A7qWrYUspTBE2pTxH7qyL4AawWJoSxHnG9meKKF1SaW9ZB67VcoMw9WD5",
  "key8": "Pe8QnzkMQ24xHBWdbeeW8LoUCAVskm5uuDBqTFf8yND6vN3zr59kW2wGEDyodPwMyEr91FRCgmU839GQMYfHgzG",
  "key9": "2TyPnCrHRAsH95LT1QXRLmpwDaMg9epc5q1HKvgQLxYNGbzvqxzQMM4XdLcxuXtE2JMcF14UymxX2o3ZHFMBLTJf",
  "key10": "3mLoWYdWYJFs3WddxxuUecbfupA9LgqTaon8ACLgnoTcasdWuozyQNiPKSYXLAwPFbXWyMN5ZooC25bEDWpuB6bR",
  "key11": "2gSjtHnPc2tKD2tzG2ZisgwEM5AsW1xJBZ9SUAeEaSGDcnsiDF1PuLJ5PVoqEcNPAJHy4PSbN1PGaKEVL61GYsdh",
  "key12": "5775rKpfyTsHguwWCV3sEjSztEEpYpdRjsMFAoRGsuceC4wn3JVmdKDbB2tEnqye2V4mypqcuXyrzRvuRi9CVqVW",
  "key13": "4kgoStANYrGDW4pTvtg2zrXMQ8XqZxKKE3pTzNpJWvUQixFouWr7DkqC2etuMvJ3u5WakFRCJYKgGpkKHfZwy4AU",
  "key14": "48ocwxfZU4x6N1xc7hNW2vDmJLtyxiohgyQxxFxvhg21Eea59K6P8QniAxodAXd6D3DqDtsJK9VPkFd6A2LYyjb4",
  "key15": "3hFyU62qtyq1RToCVZU5wrVUSWuKiPNvT6ZX5jWXcFNYcVyvrpX4hTfxuScq764uSLqqRQwxSZPenfJRzvga94BE",
  "key16": "s2zC5Y6gew3CKLtB7HB842B5TjXxv5XvyYbLLGwGYNV6dM6RFqvtVhjnKuH3BuK1z3Bng1U2DZWtv2gmoSj8Jzf",
  "key17": "3J5FWYoE3XWzqJj9fMaxgybKV4M9SjUidzR3SsrgGYQSHYMWdY5pQWrdExrZSSShFqXR6MxTzqNZNAd7RGUA8z44",
  "key18": "46xbAx9tY6N3sppqS6DAMNiV5bv8F7De7bPUY4uf3YykrmLct4tek3NJpWBt84TLoXxPWu75w9uGUCamp3rGYoF9",
  "key19": "ekUpvna6y4kfGi923jngxNeG1jLhLcyzBtZUX2jrnt8iRMqgCeR5ougEP4MWEVgV4fmYypSfGuX7LWaTLNYruco",
  "key20": "2CyHwRviiJtfxvj5RSTQo2HQviaayPsuJXDhw2wmSFp1efSeAaDw5Yv32Ar6SWgcMj56PbRHLexAcaXJR3NzaXwD",
  "key21": "3MP234PS7ZRcr75uQGN5TK6L2q1gWmnvMpTEniYiCvR1xPAbhhkekyYxquEx7WcQwXWQ2AdKUJ1kEPn8bQQ9jT1n",
  "key22": "2oXJHxq5D94jXmAK5YHRGtFuHQYvQb3nThhaz7hC1yAgpe5a34CygAWkZmziigeGZcmBjWabam7jKxUV5o3RSJGk",
  "key23": "3o8xuJUhdT319C3avXpSJCuVETh7aAqcat8ewY9bA81YLcChz9uYSkFSsSnFTd4zEwymRCfDW4JUUCkcf3uTfZNT",
  "key24": "2N1poYE3ECZ4mVcGY6rHm7ZWH6xHCi4NnPQ8DcRBpk2jZeYjoWxRGkCm4GScFo6UBV5fBYYJos9NNQTK9xDMPCZ2",
  "key25": "5RjTqoZYqLsxVyYJxojcxaHtqYX2JjU86sJXsXRNisofmJUnuriNoFQBYAJgYZ6Pck1AuzfJ8tQgRvQYDkCYC7pz",
  "key26": "23oKC6Ev3bwx4q9wjwesPbD9Xf2ThggzVtCxpvJbUL5ovYXXdZ2UW6RLrMfYQ5pj9eGeXrfCPcnKDNgmnberzihB",
  "key27": "3hjbTBPN9zp54agfAWqeW3tuTErbPdZ8WYYGDBVC2kcLFuKCPzUcwdABck83ag5SAq1n1nGQLNV5sgt12b6pEv7B",
  "key28": "3QRDTq8A45KvsAv89JrfdGhjKYt3ftu9HCzN1qoYhtPFzCDPyj7GaZ9NT2btErVhezHKgHuvBgS1HGjsC3VtndzP",
  "key29": "Fi7izrSVmgJ9dUX2ym8Dd3yPGnm3fKQ1bQFC1p5NfXXC6ymDmFrXSTNuHEAwiL3keiTHckw7aGmAEF9sCWcFiaH",
  "key30": "492bF7qC6xmACJr1j4zpABsGBsoNnKfUcwEhQrpkePuCWTToZaR674vHt13tfsBHvBhLKaTWHeKvwqc3vn6JCBX7",
  "key31": "28m9a7FEi2MKgofVJ2x7Lsdj5ZUchtSGKxbi4rMqfkTnNXMpdpSdxHDmhFKp7rU4fxuhm4NbJiH4NC7ECN6vQvSs",
  "key32": "oKLXqEMxztNWBJDaACnaKcu6HT8CC4dAmXfZRfCqcjdt2jWCBERXhaKvgfxQTntuGJithGztdyqbE8GmSFFWP29",
  "key33": "2xq4S9fKiC2R1aszfobdifuV6gi8D5KwacNpVw4GkQBSivdnuz5rZPmZ82AjGsVRC1FreNmHbVgM4BUcjv2T3RHo",
  "key34": "63hXEzsrWuF6Z24FLSWKDYsu1v98qCHdoAbR86pUx6uUjdVZQNkxX1pX8tBMoz78uFhoQwZzDDQh6HpYLTH8oafg",
  "key35": "3pSwHXhV4YDfMTzHVTvPhBghFTcJQqCiJxbu1Qk5PRwJtU7c2XUAKXTYJK4ka2hYZ8xj7G7oSuJCFn5DXVxiaSmE",
  "key36": "5Ax7JGbWL2fGA1SLhUMbRuze963MiNTX1rUpUkggkGG9Sudb33Grom4LF6ibEX331n2T92DHCYuwg88ATrxsv4pr"
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
