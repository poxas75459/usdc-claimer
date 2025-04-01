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
    "Qh1ee5pBj34myCGcPepQVJsuWDNARnoS8937pFN61gdgcE248k3XL3uKi9fxBNBWzF4k8jRz56mRUvY2UL4bsb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBZFfjvVG584TZWtjsVvTN6kyVNZ29nG2F7JeqPSN1eh6wrCQBxxzrDF73RY3FEu3epWFNeAtrtFcxZDitp84v1",
  "key1": "29vjrb3jvLqLndohekE4DLHcoDwhviya62Tqf1XhgdG7cLq6EY4pKVqHZMcS82EtQDaMrh3h41SYzJpucWd8kJpz",
  "key2": "kw3ZhxJz3ES6RMDbqZSq8vh2YExCkzsjBZr5TtzLwLRRJdq3vYVQPgovvsrmikiWZ7aMFUd5TzJv1rCi347RGJn",
  "key3": "5oJ1hzKBsoMuqXqukgh89F8emBPyaBdPQzWc3guRXMKs6AQSZWUatphN6BYQX9aVzhaDMyQXNPXbpdAtFiRVgWNE",
  "key4": "jzXs9cDeK6aP64JvY3sPZZ9A5qhWY4cJWu14m9TznDU8uG1pBnSe4QkhTrcDZiJJ6xtjzx39c9MnMLtpngtRbw3",
  "key5": "5aUokuYFWx2ehChCqTXjHPEMjwkNE1Ubvw2xRZaYER6VkiY2ZLW9gEqgs2PRd98fWE8v7CKJDH2Vq3MYD38wRmWF",
  "key6": "4VGVk8eP4VbmYkMnri12Zi97V6T4ibPz7zawmTRce8FSRbu6127eJPPCpLmCkYbBVHEtQcN6L88oVUMTsoLzrV7w",
  "key7": "4X3bFjDGqabhugCewbnHbg8B1oxspqZ5QpKonYkLxHmtvfR5M5rQpdTKjUjfLbuAqcMCFey6qtR1cqDamBrdzdjt",
  "key8": "64fxZHiExc2L2UGKRo2NDn2gncg1JhfW5XryYKQGQPyVgPxo1aGqNKvSa5ocSQzmbsQXqKRn2CPVjq1kqhytTDCY",
  "key9": "5Qkb6KiE9jckcjWZmuKX3Ku8iLPe9hmoNXYpUYrxyTKFtWSdNyyu69WsiwCXkjWit9oQdmBkKzQCMjBzQ9aqwe9U",
  "key10": "2wKM6FdpU4zAWnAPK1ZJgsAYqDtMP24yoPXRu7Q4oL8x6gq5cykAU4eH3Q1c8jn41d83vWGQUwpKx9jovjMHJyHh",
  "key11": "2pYUz7tqriotHjrXjEBq7ywLS79dwbdEodqWvdnsttnEXTc8aJfn6rJ3aiY6brjc5qeLdyphEiTzVLcgGYizQYJL",
  "key12": "4yQFSkGTiYk7f5nmm4fqWx6YbeCCjdwKVw6aHF7hu2tL4woP2HA3B6gZruB8T1egpYBGMNzR4b4aiEr9SgYXezs9",
  "key13": "cNkS3cxqr9wq9B4rc6oun8RXqQSiY5NYAZpB5bpSJyAkX6WTdu2QNEJsymcvwKCEtdAHGiPdscsA4BHpkRUJFs9",
  "key14": "aSgnyxnSbPnUvkpqBnU9oV85wv6Qt8Eoy9RZV2h4Pt1GNvTLA9npDqE6skMNczbhDwtXeYq18UKe6jdtCCZaDqB",
  "key15": "5p2211KWEo9RXUuYryyJJd8AUVC4zftsdocgqLueTynQosS7i8PRqCywHLq3oizJ7LDhFkdsnTB4PvurnwitzdpS",
  "key16": "2AhH5BLRC6gdZdLLT8krCndV5JsBV1mFxqQqUpGnofmp1QAKogEYxCYzZaCu4puNmL7xXab6mCQyjadYsJhXwgJL",
  "key17": "4oMWzUN29RkCXMPCDRB65MDZQssLMu8id19KUhXvrDfs1AARQPk9CFjfbfUXTqZ94We2Zq1geCgiYmWyFsME27X3",
  "key18": "jCv1tuHgzGmVoukxGDURXf5cqjVRqgNUtLhQhiB99nt5K1ieppruk5Z6ZKw9WbFdan4eB9JV3fHw3deNKZV3uQQ",
  "key19": "4bjXJw8cQuvLCBJVfMBqLs7FSZCFtKNiMNscdEmWVtCZLzQEyUK3b3REhpTb5ChJ5SG13p2fLHgmVnmzG9wXzUSb",
  "key20": "5aLCeZFAsqNiJnLhjxPL5jaFV3zpNvttxQYenxm3s8FTggThunWi6hheMaWcrhkBZVCJ1zskBtFuK3Sod7bsJYyg",
  "key21": "jnUtzu3ik8dStDP7FNdkRAkiHLJnE4eoQdc9hfJFnfyGWYFcQRs9Ht4sZK8x2z2Pf8dR2V6Ymp53iEhJQbyVxDn",
  "key22": "62AM8MXGRyAR5mw5MnBnbQTpJMAKuG4RfgeUm2gTsxsc2VanufdjWY7Sn1XFhGmLViMwDV81PWkfZaZKVcmGbBob",
  "key23": "3oc4BasoGYxpwDVVkSdqVDecsc7V7fzRXgXo6DBmW9nPbUDLAdLb6kCwhLE7aMrtRcuwU89ns28XpLLAMFa8cn46",
  "key24": "5y8VZWFZ4oCYEgduDPu85HvePijEbq9qD4RJUu7VwQQMDQvzsnmQGEo6KYrejAXmY8KtxaKbz3E5JnP4rpaXSgKc",
  "key25": "3ezD8dKSmpt3xk9v5V9xDAW98vMCUujjpKWNnFAyQqPsJp667b98haCYq4moq4KnDmSpJWmdJb8YUviNyanUZPzi",
  "key26": "3Chaa7xchuGofFpA5U7vKorSdWJ6V1zdaBJ5X3RxF132LEaSAsFvnAstMuTu2CNT6D2QuVy3y2g1CCi1UqqHZ1Nj",
  "key27": "3dpcSp6A5nW9ZFESAGeKyKGxYbJsV52Td6JgSj9HqAqGVj828ciwVXgnWsN3BCMVvm4pdHaaAPjtEBRCE7n8AXg8",
  "key28": "Pq2cfPhLyzmhTgZkMkghnX7PuKGct7qjY6DwwT5wUpUddmykoUfGG6M2JJEGGRpRkeeMfPr9dBBwXbWsKrFL237",
  "key29": "5hY4z6Pkum6TJbFrsPbqXyFzgnFihDRC5EoBA8ApbErBDCKpgDWGjgnJNhuuPQFrTKMGcPaeBzLxKnZNe4XE5oxW",
  "key30": "5hguCn2sVYpiFxHyF9uAH4WuYGucomTT3KTjAnKirgGStcxLfvYySSogM3GTJPy2rKWYFb1akuBcF2YCztTE3CBX"
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
