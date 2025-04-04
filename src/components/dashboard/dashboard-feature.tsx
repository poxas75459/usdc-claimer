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
    "ynSoCV2SWEdpM1wJZGaRQVbiVBdJCiY7Qd9AcdhvLQXgFs2LLoBvTLZdab136zoATy1m44f3u6aaWtcg1JPVTrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jenpwj7bNoikiAEdd8eydXcZUEUNw3dahd4W2ekARiq5hutR9bWdQLysKgdss72XaYNnJZpMTWy74vUaaQWHcBc",
  "key1": "5RQXZNWEakg1KvHQUM4ywX6NS49oYm1GoqfU8JJtQZ3ZF7KV89BsuvYDfEBanLJobzknfLBet8JmLj1k77PpJm6X",
  "key2": "61VB8YJnxnNW9i5bpHoyhvxKUrAqK1TdjJCbbimjC2xrmXe291Jzcxb4RpQMjV8mq7gbafEGFmeA12oHEE4dyxv4",
  "key3": "3W3bCcEYd8RuTUhPppTVyGU47njsLa9Xxzp5kuL8hzCFav35pMaxBU9Uw2uy2UDWcCxte6EHZbxWicQDwEuFHQSU",
  "key4": "4CVTeScsJQJPNg5n3qA9mNFrNqfALQsfYRH4TZsKDGgV3UqakMqk3DHCDud4yVNFeCiR7Wbi925hiqrrq9S57zxF",
  "key5": "3Sm9qpPgLcYFzJhX74nLA6efpVGcFYjyr7NWD2A5SEqkmKnxhQsEBSEYmC5kSte2UVgUVgQ3mV7jzA1fxjpnePar",
  "key6": "FR1DvkXskfa87oAcEdSv5AZYYbGENfV3G3Jso6vbVzcdxmuV1sKKv1prN7NDg3ajaueDW1u6KVGgTnwKkSwZ2to",
  "key7": "5PEJUBMqFuC5pMA9HXD4N52Hpz9jTkrUWKUuzj93qUjTzwdm1TYtFTf6PgHer4WdTP5qFVbGKQATuE9H9mipWALa",
  "key8": "55MA7AUUgcMnxT8tVxPw8oSmrEXata99nTsrZHPKgEnqCk1u5SHkguqzUt8yVuT3a94gzPZbhqmNtBaHJGbqGkAS",
  "key9": "3TfvPWfR5UPKNHauPKF3uieCoe84cHDHRsVHtJ8xPicVaCw8judo1urG3mSsUkKXmMJxjpP2URuTQkA8z5cFucN1",
  "key10": "52KsLGFrqtoTokxHie7SQFu4t8umXhA8L1RhwWuApySEyDPCGTeCktFq1jzXpuw2pEgc5PoLNXzEyDNzJXmba9b9",
  "key11": "4NJsBKugsQRjto7jxwbJy3K4BxmrA2DPANP4PJU1NLbrwzG3m2kevASeUXQPo2ixW5BrWoB1HpSDyGYgVQ9Cphtn",
  "key12": "48CbBRRiMRC94YCFkFfdPbCUimaSrhVoefwyx6UuNd1YSXLFNsV42pVihyUwheuBwVK6A86fP5jKNFVUmSHNcL5C",
  "key13": "4PxnjXMmLSKZpWiQFTxbKJAVqmCk53FmzktFxbSjZERb5DUC28pSLTP5sWbZbWAok5KSamaK9huLiE9WqR2thdLa",
  "key14": "29rB2grm32YBRPKXreETT7MQo8iih7GeFa1iMY437Scy7115yX31VmxsyVAbR53eQE5PQn3vZsjBKxKAEgtbyQnY",
  "key15": "4FQrzAGA4hAtEDVRjMeqmGnKHtCsNsJTE3yZFAus3dTXUYXS5XhcXTogsQSVxUcy9TZwkgHL1oqo2hw9Mg8WG7YA",
  "key16": "mCA4quoSsns92xxEfAgQJfng4nEgMLupFRVxYYkS5nv5gzcs8ZvVuLwZrP4qC1KeUyvcdJ3GqNxsvERaJakTPUJ",
  "key17": "3W3qm8ixS7Cf1ZA1FB2f8Ee7cFnX4Lus4wUvzpwqCryXWyr6Jwze1Kof2rcMeRytzMhJbSqh8XtZkkDFjLcL9v3F",
  "key18": "5ioWpzHaH37gHPRCZf5kwKboYXhsPBopXmh2yvmV7mrLnw5ukihsi3qPsmWXMUYvg2XUzUypLAoiui3HZhncEVvi",
  "key19": "24rQdpkGUn7wNraqVqmcxJqqJnQPZgbNUvXPRCXVhwjm7fHpt1AEPMG9ZtjdMbv4uvtQFfLHgr5FzHSvUqDgyBSz",
  "key20": "4nusKcPMomcX3ZbvrgLkrh5RjELhsrcyiqbMoF87mGxyy6g3Dhb3wkgHtGa5R5XaScbFcejKnRwzy9NqWmWD9cu9",
  "key21": "52JqKi2hFcaCHBpwaaohD1amys9s9NpmetP4nSt7sime84WuEmZgRcGcH4sSanfg7m2PLAmqU2j8J7PrdQHrh9Ao",
  "key22": "2p2WYZJ8SwDHT5dKmxG6iwsLCMB96UvXcXqLPfJQMkjzT8knzm7c7KjDzKnhcqLgEMttWCVhNvkqC9VFgXk9v3Fq",
  "key23": "3s9TkjvGZE5VgB5nzSdxXaaNgvXpmCHLZc4TiAGvpydq4RzCHeQoeo2CPYif1xR8sdaPv52NwT7mYTocdKkMeuZs",
  "key24": "3UnRDhjvLpGJU76rtXfiBHvmFMf8SR2iY66NAF5ELAC7qfdoi1vuz7z6snvehsPi7ByCz5vep7AHPJFX6xhuN8Ua",
  "key25": "tpQdGbmqrifXrMnQf5Vk1Rne2ePGpgKLU789R6mHohwuXCw4XqDCwHd5swMjcWnrfADHhHKMQPEvGxbGcFEMrgv",
  "key26": "54ogy2wXxYLzzdNbYCPTFfyDPhncedrgzJik2BYhm2fJDXs8jwUrvsxbi73qgDQQ5pSRsm9jcsLyqg5NTTkFAB4L",
  "key27": "3JUWnNxmaAk6azsguHXpTGCQjpc4J5uYmh9YpdKJrhWWwntvbBsTbyU3NV1fWApubXpsX2T9T36TX7UE4RDNUsrS",
  "key28": "21mZUsdLns3FPqZFQ8BRHCxNo9uhDrzpL2YrLumRxbmVi6eTZDudqx3y4YGxMRrsyhATGyjnB7yZ4kUxX6xvBTHy",
  "key29": "5D2pYvKfRGV9UmkfUeBDzWjuZfBVxbD8DZr8JJa8o69yuAaYnj1R92wQ8DydaTEQxuS2DM8tAEFqrhTeLuUv5LV9",
  "key30": "5TXWXQekhn8cC1dyLKmsazgEQEdCX9GVwBfrsK9S7QY6GqA7D5cJiPkJrXBjqcvDyCRarzsf1Ef9e8XWCQn53QFE",
  "key31": "3hGh1KLFbtdhv4w2dQzR9PJZNi3qfzHEet7qoH9xS9F8tiAAWGs7yWGm16BQczBj6u8uK9kjcxKQhw2yp1f3SpCo",
  "key32": "98FZAs7EfqbNYsetjcJFrAMkqhRho1G87mSfaVXYrKJUayC6GgUU5LgGVGQ2robnjT9iwZYu9AycbHTEQryP4Zc",
  "key33": "2CEWpcG3q9ZBT9qqQE9XKQU6LxxTBu4arQc5ydjNq6KWNzn52n58No3q7C6cdSbTBNXeK525XrM9bVL4qaKpXe6P",
  "key34": "65E8v1j38r1azxKB7H8ksNwpqgwTofdcqZ89TU5L2Y7Y5iKdfTocrG47KYtJV2uyHddPQBMkFqdHcBpD4BZwX2L8",
  "key35": "67NPnr35u2kri2ZR56GC57arZY64LV2rJt9McpeL6NZbhesHEc9uMmfFUKjoEHkSZfoMWrNHXfE6prEcoSUzHBHh",
  "key36": "3dx9jFzJLYyz8bh54kDgHfgChuXJNNfiQvt8CQQ74B1FLAyxa4NXzsZ5Mps85ATyRwptmMux4c3PMPjW5k5YhAFR",
  "key37": "4PKyQHJUsZ2U446NFkkRJxdrvg1jmWAVDrRYcCy8KTxK4owNnfsa4cjc3fi8NfcDbdb9dg8eK7rihbKqRPUGn6Vb",
  "key38": "4JuRoiMrDudwvFoB8gaYpKBofgCCURdfSpN9pZgCH7E7wzVzpCcw4uMe5S6FYa6drtuZ95A9HGGABuk3DitZyd6y",
  "key39": "2VkU3w3m2z9XkzTbRsyDs5wiwAVHvZnwuMDts5ZafyZKRGFSHERgTkrSV8Bsc9ju9TtkaXGPaCz8twxnxh4X4HwS",
  "key40": "25gdU859g2BP5NLwdWfCrzwPozyncBqWxCVMvzfpwAQ59uEwt5c7Z1De7MDVrnAuu6QbZHhLQ9UVKT26SkwVp6dX",
  "key41": "5ViJHRLDoXoDpHgishRVhNVDgAy6QvbPUsu3GFKkDxyriVKucNwiCyGTuxCpk5KZrfNiTeySxMTDHATB3D4Rz6U2",
  "key42": "4TuyQDfhasgWR6TrL8v7TeEqcLm9ir1H2Row5Vp4RGHXEs8VwZJBTsfqUEKAKdh2PaYwb9WsLvHs7ti6xRAuFaMm",
  "key43": "9iwXxu5CHTrwKaeyQEc2iSyfBeTSQUv7w59uHDXjLtGW9nu3iuPGYKWDXrUw3y5mBLwnDHDgrhnpTUUNi3wNTM5",
  "key44": "4xSFmwEff7d8epba3RqS2Yqd9PPEEmwkyPdKWvxzznjCsdAnVA6WHAsxYSXEfK2FP6YyEERVL1pTrRdr4Nd6TuPi"
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
