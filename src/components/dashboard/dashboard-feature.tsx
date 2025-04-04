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
    "47xGozRPFPDkgA6NdHTEfEHEBnbRFc7iXRK5KcuQ8bSDPwcoDStCsLbGKcvCV5xwFJMFcuY8xuyPZW5gHBVF9xQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52dAfUMjVoWNdzc6tBAfDYQXkwLHsLopcWpQ93vnrQK9tdCSpeJgTZfFxVP8zgsffrWJvTLhxtvpuTSsKNdf9aVZ",
  "key1": "46r2Kyghw3VFHzQKGtSLkaLJXghB2UbKZGs61KZnLMV4VpL6SpZhtMeGBzUHjPQiyoGs5aWspnt5X7MjEQtiJjkt",
  "key2": "371ctkw9QSw2m4mzjBpoxymjLhbma9nKe1gaRdXH3vNMGeSXJhBLe5E2ssrwxkVJJ7EzcFRhf7XnA2T3nitMfj3n",
  "key3": "2BemQDvfbvqxJvZSMKC8mveV9m9eE1gRAf2m4nSjKCH4JvKf4AnnqmrK2o9YRfcB7X374AQ19JvssLA89B6Rmrz2",
  "key4": "3iv6Hipd8LRjMNu5MpDExof4MiRnzcAyUMNLikL8Q3JD7waNP329KvvxT444riNgiw48yRTxjcJN9VJqkudMZDrt",
  "key5": "3NhisewypnH8dBzDKxi6J2CjNKjB1uico6UY8xLfBryTz7SdzbGuVYhgbMQFYrrQHybsJxFcBDGhvja7qe8FNkSp",
  "key6": "2HYTttHBrkpxjKpWcHZRSBKz1vpVNABCwP6tJKg4DS41Aj8mCunrvnezXhtqNFfwW7Uxc1MaiNLJxmK13BKnvzCb",
  "key7": "5roKSZHRJuX1NF4wdDEQ2xibVbLMSAQtcStm5BPtnvHduoZ2kXajmotxA288WNrqGVDjrmhPqjgYZZncppgS1Uwh",
  "key8": "5RGMc2x1KAUnyAd6CawAYqdxKK7AKAyL5nfXvgGBSS6gjyJaNqtXEmv8ujV6ZpgHj6c3PfkQqS5bWtWBNRZuUoGs",
  "key9": "3qFP7GzmdA4mrJpTz3G6JZCtkbRz9FNkWZEn3Apt9vskkQRDNWyuRn519bhmFqR9VruEfsW7etHZYuM7cErCzEzc",
  "key10": "3b3xR8KYHsuP3eEWJkkNyLMJTF4v4GJo1ZLU1ZJVDoV8QudFWannumZd94WEVocti8DGkqNGFpzHqcfFPoABXkKT",
  "key11": "5X717UvUDghr24jEgKNfa9PioZ7F92zEGthJr1PdSMAxHh3Pih8Kver2K7ZD6E2fSn2EfLVrGa4mStVrJQkb84Xq",
  "key12": "36AER2W5ZPyS8t4boP2b37jRVaVqu59adDBZsFVDe7Tpx3iwjcJtXNXHbebaL1pF3TvtwfE8v9x1AQwN3fRUgER3",
  "key13": "2DjL8LiziWdiLBuZSwkzPjSn2K4PHNK44p8YDpiVdyMNvHLA4LDgpHnZhR12Xi6eoCxcnsj1x7KU5Kvpf2oCEUKc",
  "key14": "5Y3ePNN9un81MJ9MS9rtpkNacc81TQLL8L9nREPytYyTQ7nhkgLoVYJ3fz1LJQ3oh4Bvde2LucQqaFLzHen55ir4",
  "key15": "XSMyzaU34UqWTjWGmGfEXiiQgzVb9krRoDwYCtLKU2jwTqUukUSwzHg9zJQgRSWzzPGhMkVYKYNvn7noY7ShtSx",
  "key16": "4mmTQ8FMg4Z6LeyvBsm5pdyQyNxnW7uo1Y2RjnWddLBEf35mSV5FtpBmBKUTuukzj6LCYmeJEepTmUZ6SjPo1yxx",
  "key17": "127ZPoYTVUFZKCVY5mC3eqvC5RLgk4g3CWTPpn18qDB9Xyj4SotQdXeukGLVhWMBQMagqkfLJgEtiCSLap37osqr",
  "key18": "54o5jdztybbCz4qNFBkCcpUgfkYk1btymqkn33mPPSBRc9Ctc3jfLj3rnMRuzqZadDiTj7UKidA64X66SZTKmCHy",
  "key19": "2tkQpFZXAdFfy522Fqjbk67j5iJaYQCs5JKtPqQm7YbDhW2okQyodjT3XKBiYmUHFB5QPd2FoMJGf5U9h5tKR2nW",
  "key20": "Mj7W3VsXpDVbLo7rV9CXNfZQgfvgGYh6p64M2DatEsLhtHJxN89ZVjUsZreuamDSgoBdscqjzwbXQ2NP5QekB9u",
  "key21": "3tdD9t94YXizsHd9QRYF4MhBr6AcQPMmzfkR3qcPaxuxSNqUMuXYsp4MZzYjNQuWbXqvkwbLehnkE3JK4wS1i7HG",
  "key22": "26Wtx13VAPwrSGkvnxACgJsg8VsHkNVbxUiqXEy5NXSJkqkozqan8BPV4w3te9faemiNcPZEWtrnEvLbaGRHU8iC",
  "key23": "5G15rHQHswTriRrYuyeuJw7eQ5w1EWG6Ea9XjoJQ4wgn5T6xg4BxtvFEyf6GfJ7cfiWL8nME2GJB42UEHyJU4QSK",
  "key24": "ZXuE1EadsaydM1ZFAQ4h1nFQqixcasU7GjtZmPANTjus7UwgrrdHKgyb9gUYJP1v4dBJGekgrcqNrxwZESL1C9p",
  "key25": "2nTbZW2KfacA16p1UG362QXabZRV8NovJxPvwxPgDosCejjcQfnGf2fTzmzmBwYi7AFw7e41ytDytCop1xSnTaWX",
  "key26": "5WfH9Y9TmDzPb1H8cHCXLjkx8dcyLPWK6i28sW5zcJWMxUxySPpyCYraE5NLpwwQEurr6Y3srNCbovboytTQhgnQ",
  "key27": "4fHY45xBHjZSvdPEg8L8kKhYGkUTTRBjp4DKN2oQEC6xC8BuPLDKbvktMnQ9yEpGHQYwYWwR6axyhW4m5o2YaUDu",
  "key28": "HJeVfRrp1dKhYrzJSBggUFJ4TnvPaoYUjqKGdVe9mZuJzXea1DxGw5gxP4FfuMNj3Kci8wVtG9San57hxmyJ7Nd",
  "key29": "4bp4whCmV6QvMW8tvmyE2oZ4ZbKuKRTwEDvMTxU1KYp6mBDB6AkcR6tyB1kZwgmZxhkqaAYyKKELC13QAWVv9ypd",
  "key30": "3tP3peXkqvmYGxFHLomn1uneedsrZRaZhpo45pFzM31LTtugnPS5mBYfSCR37BdU7nC8WB6v8J63quBwoqVr5Hxm",
  "key31": "fiUoP3NF9aD2vpWtZbvtxBHpDh1P3GSzKbhhLvyeq9fCLHLjBR2xCLR14agT19196VwUTFuaWvUGEfmezohZ2BN",
  "key32": "5zXGh3z6jKaPSYC7gVYx5Lzndna2dxoRZ5UXkMbJ6uxRG531kdDndzbSjtHVvNNeBQmTk3Zd78H4HSviwWms1r9T",
  "key33": "ntHnxHxjUFYJWFhfjSzDAKEzqu1EbYZYKnHHxvow56niEykRvxs8ihygGsnxXH3dgSgHtqQNSaCY8mEXi6tcQ1u",
  "key34": "5JFADtfWEayPff58x462zfZKjFjYtwVqPHhSE1ajTLsCj9kUvNXJZpLKKmQ2Nf2h8UgmY8Wyj7nXinSr5fYk4ixz",
  "key35": "2LrtTiTPvzfaj1pcHmfwg4ZuHyjWRy9apdww61D3Bg6ku92z5qnpLkEZrjb394NHH85fQ3dN4jvcuJ75pMhdcLAs",
  "key36": "3zpsbXpJNzCFj4D6qkohat3kBMvyZKJhbwjHrYqXLRJt3P1HHzZ2mPhhKv9JFt16JbKJAzNH78hxd6qMeGnrCwsp",
  "key37": "5epMSh7vophzh6St6vooJRTJqC8C8Djf71AJkkrcsLPpbzzdhWVsAoBGZHbJK1XqoWfhSutgH4HhsN98Dg5c1bE2"
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
