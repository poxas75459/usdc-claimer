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
    "2pPcuYhXnBkU2rwBqnJ25G1ULzy35gAR6Cpys7emwb6EznN8tCmjAJxDZTDh3tiYWQpBEn3HUJjyPRRsrQYMyKJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W6RjV5jd6Y2wqv3GVbKy32xDUQSKtDKJF6Ni3Xau1SsMqMaQcJSohGCenZveLH181jjjsMfjwnibTS3YpQEdbHQ",
  "key1": "mfRyCmK7x1kTGH7ym5EJoYbFAcQhH8A2fyUavgEDPkV4rUWPJ61FsaN51UZ6jQzcph9JLXbWhib4Uj9DH9hagR5",
  "key2": "nudEy8muaXHnbtmvqDafthRCir3fSqEhJXquVfjgLgHCrkY2DxKdycdq7PUZVtPSq7NLBNhh4Vfab4ThKnuBRHR",
  "key3": "4fYYkLteX3sFgDiRG27Jz5pyJj3iNjo6YGnUQ8T5zuU4kPcKA5zvGqEhubASxn8NNZnnzQ1yvA2tvKQTFsyHDusS",
  "key4": "4AAyeRK8pB5HbN7A3PvkLXxvfLAUG8CVx2Xz8Y2P6GNjesiaMXTPth3zAFx8iXCTLdkSQoG3J2ybDGehu6jtLjat",
  "key5": "5XUTbdfi8ar7FccBBq1MQYXX8MaBKsaaLGL4dWuodkfiEK2sCPV9HinCqV4y4sXy2q1kBpquoFbUsBmBUf8hKrbM",
  "key6": "31az1r4aybQzH4ETFJ9Y6k9vwFX1CKS8i52mKuVUPv2tfzf5ygPc2VdjrBT9ejZkjxVy61gUoYs87osZaHQ3psh8",
  "key7": "2Dc3onj9TLHQQNfwrYJ8tZQhHzm3Yo7qvb5HirPgmW5FLPtC6q71Vtq7RMjLW63vxgUnafK7PztzYF4CEHJuyxbg",
  "key8": "3BKWzcbikiAWizy4kf3yKYa3EU6UKKkXdTQi2c5zXWhmWZ4rZFFxPjjN5AhsmiffoF9pg8P6yHGhD5EQJVKzR46w",
  "key9": "3PAnGh64ogPeMpDBgCzsgf29TLPdRcE4j8ZF4qcECdnrXYTpmjLsJKJyauMaYnfk5h5MFLrs69Linm88FyRg7r6H",
  "key10": "3f3Q83TjBmHagrGMqrgAxsLwWPc6LxXn4vWrfo29nJ7QMGRim6EPFVRg9rdwyXvXsSxTcvReQDjsvzX6ebdG2Ek7",
  "key11": "3ygvH78ZhgnjyPPUvarDHLn8iULKP37XMpY37wqj3KUsbXDWbqo7Rso6FhTNRRjC8ZfJKPW7UnBSAncRndtwxynp",
  "key12": "icQE8oxAwJy6zfdnYs66JsZ5nMjyFKhWJ6BdqNNZ8Yy2ADVG8s7AfHLeeCEV7NbZxHopAggTXALaLhKU9r2ZVgd",
  "key13": "2jkBmw8Cixvyiow4jpg2M43co6pCDK2v2sVnZW3u9NUWDs51mZ8Ht2XYuBKDC8sDWEaEKmxTH1kZBgziLfdKD52E",
  "key14": "3akHHLyNYHTvPwxEXTQKkTW8cCmAqG1JNJB9KNM4Z942camR9LaecKo3HmFbLAmttD3rptFbDTKV1596pKJDwJJC",
  "key15": "EzhtDNzt72vumVATtauyqgubkWxEcS6is7jz7EwkyLueggqETBKpXyTFTZ9eJHQoEPJd9TbPdJipwN29X8vdAwX",
  "key16": "YuCL2mQmNuoHcD96i9k4RLry82iKeiN75pfMj7Jf7oFQvuxosot4BJd9Y7486z76MF6iQcwMTaC2KptV32Up3Zs",
  "key17": "3aJAcbv7cvn9zpfTXFjAYcfnajJAGpvEsvqz5wMbrYhKivcvT5mMGtZg4vC5rKk59tcswktMGyTsYM7g6vV7ty2X",
  "key18": "3WVmfbNoKgXqw46HhrqdxWpXQgxXSmWyBfJgtj9SJpSrayjRHC5cmfh1ZN97Vd5ZeoFE2v79b4a4NUoSHV3qi8BS",
  "key19": "k2s91RSrQL6MFZRnUVBog53we5JaGGiSSP59qvgM7BDU6QWCXVZVF8M2Cm8URFdo2Eaionxouie8XKnF35ckbVK",
  "key20": "2KwYStTF6N3SwDwzLv17ThqJHrsbpxYw8qRhFhBqQuws96qziKWnq7XmzBUVuR6JuLg8SRtjrzQk6WaLCJ5R7wpm",
  "key21": "2wmYRU9N7CyYyykaHNprcZoWiMw9Q8XAoVQfu4u19R7eeoJLpBZwSgEgDTrmtbVyQ8Ze18i6VZbfH2TjGqbofftT",
  "key22": "57T2jJeJHfdMsuLDrSWJx9AmJYrWdg1EMbUdTqy5pdrLsPDYHWWfggJnEbYpvJRiF7qxag7MsP582eHWxsbghQAV",
  "key23": "67g4SLoMU2mx2ZPexHd16AAvvbFY5YaEKH4s6EyKXUn5t75wkt5hZyoWzWvaVdkX3V9ZWxJFR11X6xceUgFmYXkS",
  "key24": "47MYV7WHHbX23caAeEsUqvkWLi35vfmASk4zxgsctq9eNm6kaYnVmmbyFbourhDHMNAtuWKdenvjVthrGNWSUVLQ",
  "key25": "4fNtKvBSvmLP1gcVsffmNczbEfkqQfxxvbjNMEP7g8WkRZVxM3Y1n5NcLxD76zqdKVMw34mukSAr2HyA5s4PmUa7"
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
