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
    "mbh9rbGYhiaPb7e63CtaQwhVEdUGJv7x3swofwZQQB7GN77PDDiB8H39QogohzohRixe2V1M3R26Cfhzw7SQpXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JkUQpKYRiL4bMGRox838ph1vJEnjuMuLfi9FC5eGeuUeGzt2PuWQ4hkk2qCTNitirYKucJ3tQ8Gr59ugDCPVrPv",
  "key1": "2PyBSAP9w7VCQXhpMHCk2YGMg5VubFWEKFXZP5bTsSyy3igRoPwY3hBB6zPv7r1NKXCHmbyVPrijHsMEQfqg8K73",
  "key2": "3moQzWHVDk8MqiqfgDRUo1SzindoMDBgic54ki3EyJ2ecfm5GmBfiRfKnQ1WjLE5bRBZhqZXPr7QMP5JPQV99esT",
  "key3": "dETRPVLttrTCfupUzCzCJm2CxmjMcPAiE5Q95ZdjDsfd4XguzhqvWNvrwqMzhACv1Xs2iEoJDQGzgyjroF9gvNV",
  "key4": "3Wiv4C5sdjhETHorkEuDsbRX6BK9RB9k5NVNt3rQq1UBjiB72eyhHLjC2VVpFNfpRGC4BR39zTqYUuRefiAETm9P",
  "key5": "Msm2HNrRBYhpnksU9HBZv1zJZVJ1Dhw3jESxA8n1bd5ixQwaqFu9p2L6KFddaXMRycFSjKY6VRE9j2MkJ1R8eAX",
  "key6": "5kV8XxwcZ9JniKFFa9tcJF2YYt34urk7kLE7jFM3vs97f16YgRrUSQyuiMrGwpPLjujYf29HwY5LB5TbAe8BLMRx",
  "key7": "z14pb5sEsJtNWLQTnoiEZpMH2oy1RsNdS4TrfqpaavxyzpkzH3frSwxXcS8tJYrzfqnB6TRuAc4BMTs5goRpRCh",
  "key8": "33jS1pd8T8NSKzcxb6pG2HLi3ineucEwagAVZ6zo9fnfSYxfnqP3r1CAMJTK8VsFVqctWLhe7SerY56eEe5WzKxy",
  "key9": "5zQwqRz584Wuj2aLWqBdvoqyTdMKvcAQU4JmReehXYwBgStiovVVuTyYe9xrkAMiF3vjLmriR75Dm9J2QNayFLXZ",
  "key10": "3MzMwnN8Wy8kCmLVLAMkLdhCHtUNTvgkSmiLa7pyobELL1AF3HxyFnik4cHRbELVAi3FF1PoqHdrHU88CTwJsSBG",
  "key11": "3XfNzYttfu3Z1ChmhgZpTwKVhqnFp2BGsX2mBKEDyn1Nb2wSqE7vU3L666a9RA1HhvRF7cTQ9F4S5FXHjjAeMML9",
  "key12": "4QCvSF7ui6p5WH6gmE1dcq8eY4UBnSxNciUsD91hqiEKbUoCjuVNqJnK6J3ofrXQ8kdFgHryH9J2riP7XcmhV49b",
  "key13": "sfeCG2f9XZaY5XFNvsVfnjTewMmwnnw2vmH5W8ajHDCzEhYS8Hci3ZkQTXM4W3aFrkoe3j1PkAdQsCDycn8mW4a",
  "key14": "2Q1YcZp83hNARzpwWiR9LmfoUE1PHpdS1eghBdh9yVmeeeMDKJkJGetrSgZ9iq4AjDWtWk6HohFVcR3Yp3u495sJ",
  "key15": "4sgaeEZeeU8dJPJwe18SKN7ArWYXd2NDykwJvvHwzUn8vJ4SgjxYQBEbwXS8Kpz3VXbDF6r4Ta7Me2hNkpgihyny",
  "key16": "4KRVfBnQd5Pv2GxzB6oU1b62tAFXRqecxok9a56d4moiuCPoFZQsSqVHdEkoDKRTYQhcztRfaV16ZLWyErcfBSX7",
  "key17": "2wBGdLtFGbVUM1X2j8vuvuDu57sXZxxhtxMq9iCdojhztNcwzruW5yEwBKBTv7iv6xhAfWt9yzgz4HFZDPyCrhdA",
  "key18": "4fuxkzLg6AkxhiMBX723V1qvd1xGMFWPksi1FAQ7hQoC2WKoCK98Zwc8ihmTimKtKJykpzn1LLGUm3vkUCJK6oYP",
  "key19": "3x6fsWCp4iKAL3Qk48UkhfKwVacZHp41x6EDFBqNukSWnFYqfNXKBhsHRfL2RKonqPBrXrSMzTttSfnDGqQoDmDN",
  "key20": "4cGh9DmfrBRWSSVexdsXQSb4J3XPMjVW472RnsK78nfGtzzZSiGG8DJJyYtYA4wZdUKgW4sdaH5jJ12hMRu41MMD",
  "key21": "xRkQnkDwhQvHYTeyGe4ERj7taATqwKr5r75PQyJTUc6zZN37B2JkHWFCx8NRYY2m9H7GKyJVPQv6EfwqKLB2rLs",
  "key22": "34ytaXn6G8LJysoMzNfr5iLe3SnXRv2bpR5cmvDnLDuxDkJr984t2LCLb3FtPKsxSNEpw8GNizD1gbfeNSKEmspB",
  "key23": "2JgRRJZsVemssDtEzTvxn42wTbaiMmbTJ4un8Zc4ALZcHpUw8hXoXQWggWCgEkd2eckwwMzxLBQ7tFMztyn51FoL",
  "key24": "4Lu8YG1ZMkC7wbJtUVd3FnxGPk68Do6G5iVK6iX8AjtgvYeJjWUCqAH1h9625XWcWkNK3mLzWu3fGURrHxys2rur",
  "key25": "2K76iXoCS3macmoeiRCJWF3Ksk9wucsqU5MXtXJRW1UTUGTbdHzxNHnPmbkoQiXQZ43VnGXiQ8bcVSReh1ady78D",
  "key26": "3KWssEE3mZd88d1GzEYATHCpPSa6Kf35ncmSK9egh8JXZ7TmVYB6VF6TffAcgBbpdeSZeZJ9Uf3USXWJNsPm7LF9",
  "key27": "3eQ1LJnHJdJn1FChwwVD9AUBUoyoLhSF58FAP9LmjU93aDejkwvNa8Zox98mAQH6gHqair4ZGxEsd2zvyXdMPv2F",
  "key28": "4pRUJtmPGqrCo7Xn7LnnqscJuM4nuybMBWeS7cj4xdVRbHRMbqLCkS7AX2hhZvxbCcqN2jAEf6CLhPBWjWhfshL8",
  "key29": "Mq6NmFeJocb9C6KSE8ZXq673TiYMUR747RDTJCyavuvb8js7UYupcVWyjAYmJDx7sFHt7rBymvAywFbc4FQjNzb",
  "key30": "dyVPrbFSAxogvdDwwEuMKGUVFvV4aEJexQQBqGAgDhQfSK1oXGckoXmrQL35AeAgphTfo2cWainPKA1Y19YNrRR",
  "key31": "oaUn4KF75wKSN1fqZ449HMW48ZSRZBPwQdAyoDiXerTyed8ctgVC75jzKZYuwo3hwCfq7RwJrLUv3W4oE5iaLTw",
  "key32": "2zLf5EFWfGqHvrGzFDpmRFi9qCnHJiutH4DHgDXJY3iHQspiwxTqATkPcGS91AE5GV9PMw24f9qMMTnhdwBSnZXS",
  "key33": "4FjwjKuWX7UGxXUorwy8W9xdZYFsoUZKrc2ZoPmhKLTuPjpk48bmpBhtbxei3Kf9dYzvYHVfaLotJhftAnmm5DAB",
  "key34": "3A3uCLDQzsM9LhUuDdc8pJH2ywHNBLNTzgYK6PYVazsNUEmqNMkDd4r2D3s4ddSDNuUvtypvVdgpUVTBX8sAMW7L",
  "key35": "41gRcbTH8WiEsGn5oSMdNEy5qv62PMwKGEj6XveHLDzmUEQhzDKmEM4A54xDNHNmxaQqtiPqnfQdLMGSvKh3XvfL",
  "key36": "5eZNPUip1u9RwgSk8ZexJzwJ9Ti8b4xsMzgygfpqa8RAhQjVVXRYtfmiWt8fsY8S6N6e533fkkYZd4P5xiGKD286",
  "key37": "3PafyizXKM8iV2KrV3Xg3YmK2WU7yxyXJbYt1BEe7e6C5SgCsNEDz2gPBEeLQ71MpPnnRBDRy4m8gwTTbWuViTDZ",
  "key38": "33NJW9xJCYbrAzYzJ7jHgtDSzHhMb5aEXgSnKRuzCb4Hkr8YsRx9mQddBmw5bpVRerKhEFjVz3w8ndHTbUJsdaC5",
  "key39": "2BbdqWGHbEUsmbr7F8zQVvbHyhXVpgmFhwdj4Ens4Sq4kz4YYfoPdWRWEfNebnnviAMfBTATbum8QpKGZLHow35p",
  "key40": "3th8vmXdAKrBxhG5sD8tYJaNjXAopFFViz6xBHK56AVoFVKB2nYgUSCyR28urWkmGqDyFHSDn89fxxnNSWLCWHA3",
  "key41": "5L8MAZr7Ri8bwfELLZS1iF1MwPM6SkPtp7fNeeAAc7Keaf43Pa919dxD15MKgB9txMXJvuq9puQrJ6P6qd2aHcVG",
  "key42": "4apxxoctXLCBmPjfzMbC6ndrPgUpFBnjfTp1BChrGKv3K4ZDLaUsK9VzZnPYmMP435UkjbchjowLh4bDduyTRtwF",
  "key43": "3UJHeg7SrznYjvUPcGB4JcdKp98D8ZNdTamfa7aE121oXxBkJzupgAqEiDkKyRL7b4wRwZ2y9usmRbHdchuGfpHV",
  "key44": "54yJc7dQ3beRGmwouPjoANBeEEXKDGZeisuFW9pKFF67mdiwrxmpCJiVZkEgZTceUbEwiuNwQyqKtoVmvfBHebju",
  "key45": "5FPc99WnzKrwT8vksHaWXvZT91t8cX4PJsR1KErutgFwpJ4CT75dUjkStWjJWqbUk73xRVcGrB4q6BskBrF8FSZu",
  "key46": "kYFaa9eVRQ22k3thJB7DmnY2zDmmgCbpzVNryVpkEj9h7ckuaP37wqcqdevrjHXrXV94NcB5xdFTrmvYceFD4Jn",
  "key47": "32ougaZneu9HBiZaHcCpkshy3wuEZeaJ55Sq9MMQ4EiUr27BqUfeV2wMYUYN7zTvgcQtQBwnzyoDa7k8cHSt1ecS"
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
