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
    "WoiSnixEozzkLBQHHFTAFMNyCUFLrJdZNtzXDQWBHg6UCJrcU9txcT2fpN3x3PK8Y1rDRYHzyfvaZ6npitpMSGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xw9oFC2oT3zZdEpCiwm8rfHjMCJAkLoVPiKCcdBuGe9LgXjmAq99V7Lb6wuKoF665GmwYaxge4gQmjHiVmurMRc",
  "key1": "4k8B1LdCH2LwENDJKRnc9zsahVuBx2djoq1p9pLwdBJAvtzidBEqBReLJbPbvGKisUWnnKCKRhnEaMTpGHz35rxj",
  "key2": "4T1TQkn1jEobace4TkfSsP9o2n7C9bW6Bd2sTr4L64TYXAYimAB4Qwoi3bgXeDoJtCnxtvWMnTNKEtBEPBxxe48G",
  "key3": "2ojtxyMUCZer2DKXemasx3PbJwopcioypc6cNWMFoE6xisPe6iXq8nC6viu2pZg5z2ZRZEFeUb3TVkHcaZ9FXiMS",
  "key4": "31J5dVC3RpfDo6kYxjijr3uccea8gCtFcC7CKDnaVEEeiH5abnVa1s2pbW7ZkECZWnWdz8FQ2ywuRPnUxttSwjmE",
  "key5": "iwYCnfPNY7TXxHHCEaXtZWzB2rCkapXunaSQ8rqSoz6EhNs8grBUpbFXyEwTUbxiNwmpxxyzvJi8qbxd6CKxFJ9",
  "key6": "2tnGXQ3eRZr2UAbvmSRWox8Jr1AVqnP58Jg18hfGtKhp78V38x8eBrvQJMZjYvbiTcZ6pmvXfMrTowvdt7uD3UcP",
  "key7": "24aWsniqnM7XefwNPsbjy9rVwcxyT5aE2x8DnEmALWARMU2yATxbtQHVGumFF3uV6Ak33RxWh5y8SS1pB2M777tD",
  "key8": "43wtxbq6Jjg4KBWz2Uhh1e4LsgLaVCfyNn2zSdtvHjJcRV7SvAHevTQj9sDgrMrcvuyaiLwHE85oSnjd7F9DyrH1",
  "key9": "3f1TAzmdWdB8kSRbxbhStGvCD1519gnUYLgtaQxWE4RJMckLRFrJUBe8XUQCMBfHHogJom36qDMJNtzYisfyXVmy",
  "key10": "2reZg1t6KriZooaUvYNxBxiBNmf4a6kbXz3cFMv61X1jBrErgBD5kRmCVRfMCBWyQeVw5P9R2eX65ubVVYhpeuue",
  "key11": "K1NfGocxjYtBZnJMAJneirXQ58iBY4niqeE38ndQTrGhoUfrbXU6KeQy6ByCVtCZE9yZaH1LoBJdvg8GBKTxBJe",
  "key12": "4niXYuFAvXJcjjGypGdKwHT7TTigNjRFW4yK128bAy26n3LNPzG2PzRv3tkVTcBjX4p3ocKq6aQUQgPjhLiPQ7ML",
  "key13": "47vgVMNethA93yiu1bTqucgH9nog4sKMSywYMjL4xCygnM6Mp3XiHSSdUDH3m2oVgyjaVN9hxDZUnXUQZ7Vm1sXv",
  "key14": "3fSndadQ1KB4R9sz44YdNajoza7jnw8Rz7Px1aVeCRcRUQSfxhPMwsUgJvAeBDonnYxXnW6Yz6BbBPuBrnK9PsSd",
  "key15": "36JXtnNpSsme2Uf6ZfWMDKSUnEhwD9pZrCAAnKGKmNKfrdJsTghKW1uFYqGqRBFAxPLE8fcTtJYhGcKddJxpajPG",
  "key16": "3KiqtnhFurNdxeKfuUFPy3Lin4jRKEGeudZjybB2oej7xAWtwcV6X7buaC3gFnN3zJGHfk4nZ5uitXBjwJ8i45M4",
  "key17": "wqHZVQn8H5JxyLkCWVi5AS8CJTVguxArtAcjn4KCuPgEgCUDrUgT3V3yoNmjq45tEL8rbysYbSY2iMW2cpwUsCi",
  "key18": "auKdCys3HeTKC41YKiwspRV3QcUnbs4wh6Xs5ZaDSAjnkJdgHBzmqAPNxqYurJFViQkYL5ZsXNzmqxdsMPERq66",
  "key19": "37BUdSW8DgkbvA7DoUYmMavyevPBhyA4tTBhogmVT7U9LYxVPRqE1KAzwZnPB8J9qXN9k8f1uc7HpAcmE9LkE79R",
  "key20": "2wJEcJ6NZG7A4eWfTe1nYKgvFF9XmJgmqWY2Efo8mFHS4PCJdQ2zcHSTtFvJMGjwgkKejT9e1Wv3adHByjL3y8oq",
  "key21": "4nYor9FfyewF5wjoe4ujzGNDKkJsPGcWkhm9gS6hfwzmHjtcaMy15vXKooW6UmVaFkFpjZDivLcqHkksS3JtU412",
  "key22": "3SGv5HdZyLuz8wVFxy28tQKpAunddxKUAYk9cp8XdEbYAo7EwpVSLCqBMVg1eFNEQd7yw8BQruhz3NGQjEKkmXfK",
  "key23": "4zz3MJMGmnuX4df11wMnghzAkcCUaF27MZuyfgff5E2Scv1GXqvVUpjbc1NsUBUmPCExvjm7rDoVeyszLXfyUPEn",
  "key24": "4VJMGDB1DHfcnsSJyxCtAqGroNXyZ53ZAdNdJ71XyhVYmh7kUvSA1S6K5ToskyTcYJoFp2upXsCBGq2ttY3AcASJ",
  "key25": "3TRoR2LaNJJPk123uk22RjUAyjz3ekqBP3vjQABE4b5Fvej1Dqqqjnx8gBAXsZnEWqm6svhTzMB2wvpyLQNVei1c",
  "key26": "24ydS6niod4Hbyt2iCJjBvByVnbvk3LRJJMiMgkuSVzApWWzyqyeFpAkP19fNLMUinZhhopicW2uGZ2DXyVtH2JA",
  "key27": "wPLP5yk5vWz6Jf6AeqJnptGtmz5ZXrpSM3VNduhzcXcqc3SgZth9fUEcC3ALdibnzVNexHpRzTLvA3MBD6pWBxS",
  "key28": "3yjDYcSX3TAyH7dx12DFdocctjDYMdZbJQjsVnj75SrMJD12G3YmD4YHPCufzm7Br9kgY5wtMAhy5KFBrCnGbquc",
  "key29": "4eNpXhRYjqPsbgEAX25b4G8U1rbXSQnkqBqf1zRegTxSmWFRy7Em52eqBcaGgWWU5QuoSprzcqai6A8QgsiBvySB",
  "key30": "2TbYLahkrhMY9LndusbpMNnsBc9heMaBez1MRkee5cwLNt6oF8eMrLrMxmE3vmandko65P23bnPdtMF2uGUZ6aw8",
  "key31": "4nsibCeej9XA2RdZFRmGmgg3tnrng5xioBB54pVs3fpAerB6VfYh3mpTavcRAG5R7J2XUMZVMdv1WyBB4HXCe7Lr",
  "key32": "2g42747FR4R48CYrtRkD1PAGRy24XHQkx65K8u5TZfkDCnF85RntDQNRqarF7oVe79GApWY9YDBLHgmcJBGcpPgA",
  "key33": "2PbRQEj3bqUnhaPN22uK1eY6E87r1UBtQizQcuG2hKrFoZZmDqT1h2qAUTQwfU5TsK2MNMudeWSVnJpvcvCWs6Q7",
  "key34": "vvj1sQKapwyQW72B3oaAypjhLF1GAoyG25BRxiFRTi8BzCu1qcKv2zw2XK5mreNGx8peeR3eRkGfqCb1G93Kwov",
  "key35": "5R7pweykKiV71F2p2sFyDRwYdu6nthYXKaxQuYipXcK9K2CcbWdbfKwJgsZe37BkryW8qyZkcZ4YH6usMkBsEjhU",
  "key36": "4PxcBWHgaRM6dssSN3sJLBaC8jTVJwh6xHBESk2BTfqirwcuUdvd2FKusYMtRuLAdqtoemuLvDamQ5LHQMmmHcG2",
  "key37": "5pxZvLfuHhk8VduSsZxjxF5QGN6vctvE6a3nCui1kNzHku8GYteMA8p68kuHQss6Qu4PfLwQcVXSzEBinJkXGA9P",
  "key38": "4K8LMN6LtFwE1tkc555B8NNBM5VPktzHGHiQoaz6L4yuEiSVuuFrLvJyA5dBJFBMWbe1xE3DkAGQZbuavvaQtJe6",
  "key39": "34r5s4R3AGj9ysk8FLBzbyy6SmbqVNVFdWBjV1k1PCNq4av4J4SaZvUGPwuqbQZGpG55tfQZKuxMX7oeLT7swy9G",
  "key40": "3QsAGhw1fbcBRMoHT3x4J239aTKfXuYGHmnWqoq4mzAs4LSGRidpNKroHsh9WKDiwCATSjSeVonVBGmu5gsKqHCk",
  "key41": "4byEpLaF9TvKvoNxLvZf6NBdbrRwrebi2Lkc19c1vzEg3jZctpEeQdEpeqhKTqpngZhi8kBt6BDHvd56gYUuBEA7",
  "key42": "2a24AssUuGWEfsunrGFpxHLyWKRvoBEUz6g3ezrt1si9wfWHmoGWoUmK2wH8E2g8LeLtbJMLt24M9BPg5gdiMA2b"
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
