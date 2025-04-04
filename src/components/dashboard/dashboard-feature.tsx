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
    "rN7eWoS5nb5zcMaXFPnmNjiiZpZwaa6ZxeftVbDRSacWf7UNp8ETJFrPFWGhg9hq7NgC4p1HASnLcHdUJ82GAck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59pxJAEEZkNyd8V57tjpvGmBb4uRBnyi5rN6JRVp6WWvfy8wAz2XrgNBfYGnmQDRw4YTsbVzoEijUNjT37JZr5Wb",
  "key1": "Zh6xPEsHTxjoQcx2msQcZseaM3ePKsMNfTm9ghkQfuTrRhAfURL2yGQ1Ha9ZoCqBSJSYRWCMrxQSQ8FGP2aMTYs",
  "key2": "2oPhgZETGpkqZN66NXCMANaayWAZNnRJvpoUYvG23o6WESEyQTdxXMNLWoyL2rFkNBVbWAynMs2hD9JAFGdp79mn",
  "key3": "4hrLRFEp6ujDsmfAin2HHCiffYjwyibvBJeiDhNzAAPsBtyazZWYzNehQNFGJ9dF7sM3jcbqtDKQWCXaWa8UmxZE",
  "key4": "5Mav4922Bbjs8mNuWbUB525DV3v4uHsQawCVXNwoyqonWUtM6uMsnb4QQe4zSGaPhtSc9MHHmAMvSdbuLdCmsioz",
  "key5": "4TY2VkLosFD2pfsgsQCyhFSHViMLu6Soj3vUDwSPcgHtCEYsHoNXGUmUxZZ7zZdXgCpNYhTWwqPS9Hmd3JAZJPtm",
  "key6": "h62mDN5PAu3hZyBtNEqPEmaDPcSt4MFbGpKGcjfmqAT7Gyu1cGu7HSe8LMRqbC7rATt6LFvNtKBPCGKsjSeU3PE",
  "key7": "2v8jAGGBbd6YGmWp7gtUvBAcQXCkgSAyPhetGzW7DAmjH6dd8jjDet1LUhhJXZCaoprdy4YECnwbyekqPYF3txYo",
  "key8": "62gcwSfregeV5UFvmhSm66GuXS69KWZrzdb3NjCMyidvDGF2XYYfZpeSunLn36u5cqBAK5PhPMPdUETwTZtMsVNs",
  "key9": "vp83VwnuxvmhfohhW19psFvbsX8AnVskLVbBrGp2EsAttcQRuV7xo59Z5oaQ7iKWZ9QiXsffwkMhUNDM8SiVbMY",
  "key10": "3ueu3VdoVhXDtYReYLYLfnd6AAibwEMefn65iVxMHM4FuTjoSQEawRVaKJSgdbi9AadVWcgZY1mmBiKWnpwJNuWC",
  "key11": "5uAYzqndWQqAYoFftEh9wXQ1Lf4WDXm4CwcoC2qHXakX5Jia36DtjzSiU7wMiBpukQLVYbSNEHxMR9zEcS1AkJYN",
  "key12": "2jEMETByx8ioojfkXytBSBxRFs8sYb6nwvhJiYCJCjiXBBdD6A3bJrrFFkF6W26dcCiBpV3jmAeETXU18NFSZvQ9",
  "key13": "3ksLqj4nY3f9GhGTWMnKUxTMapFTJ7tT44fua5rYXMRfbPXqthRcRacRgeCsp3gfkyCYfkMXJaxP86qMtts5rb9T",
  "key14": "28XXCyH7AGKiHnxtK15phqPtJvv49sMP3hecQUCpouuAxe5jEMEkCjBAqAvmXit7EJmYqoqYtySNZc5h1LJjQZje",
  "key15": "6Vpa5UWKNZyB7NyooYh9xqqovNrVLpPAJLNBSUEFK1m2k8BEmq9rcVq1e5nPcNQmd6nggGWJg3PpsAXMLD9mJDD",
  "key16": "qf41Ujqyp2cJZEQeQRF47Z2rKwW1XTyC1hy2Ad8GJ6byXX9jtrj6oraU3ce2yVYX5HdeyGmbb7WjJqG4GKFwLbm",
  "key17": "5UY5fEpHNvNAZz187GtE9kBsxVe8ZVQbm1CxtkPGAJMD2Wa5VQoNJ3qFsKsbmMkh2ESG68eZ2Fztn7D2m1SiqUoC",
  "key18": "54K4HGftKSsA8YHFd3G1s4T1arCJqyizViD6msz9qnCCMqVLmuc24nNLYZ1T9dbUTnEqXtaRBe8vsWnp6nDA6YMa",
  "key19": "2W8QvPE5NwhpVf5en2Z7vaYMqzY7LTqSMQYVKME3APvcnNtHBvXQ1sscGDJbjMrv1FvZWvakQ9EepPWmJgksB9mV",
  "key20": "31bYSVhaNqMoeWT3m337wwUqauaNBvwN4eaVs3h3scnefmuarEdX7Hvc3HgJTt4TwZkATg2jwRFY3CBVwye7MvPK",
  "key21": "2HiDgAF23Vpkr1CNctMXK2Mmmpk5g3uWxtyPLaSnDG9FypHeWQtwmcJyGEisgsZCu1ChRuMQBGEjn8wHbz4UbJ9E",
  "key22": "496KC5ku9FqAnTk4MGJF5CUQi5syDTwjJP67HfgvGn1EvhBYbqnEbdKkjV962zjEpNELqEeMPaseFx4X93MVSXx5",
  "key23": "596srr9JNnkHoxZFFv3MbWsF4E7gNHnt5Q6dUqBB8a8o6cVCLMFqxPGsSxTRveLqYtFxk9oYBgAoieSrU8VfRGYM",
  "key24": "4e8SAEz17y6ywJ27Zb9k3d6Sw7yW3JeuTWuAvt8JPgmHZWe2weqDdze8XHHheiarHJunu9S2eeAAM8D1Sm8nLpY6",
  "key25": "2nwq2uhcR1A2q2sMsdwZom1aUDGppFpwgiMAfePXthqWYLTbGhvhihTEocBk1VxcmfRKB38HYSu26ZVqZTaqRCtj",
  "key26": "4UfXgua2ADnz4wkGbFnwpWxdq3P4dnPUDiJUVmthszWKdagJhbp7XV5gApLBYUfhtPvegYhXzxDbbPVo1TV1TenU",
  "key27": "yYJr5V9AFi5fJjBJb7WarDjdN1VnrLaDWpVhcAEJNAB9Y8zsnyVC8ALHjWZex3PhSLhfg7t8nC4KBHp3ZB5iU2V",
  "key28": "4hLy7roM5vLDRCZY9Jf3AYuQYRj7pbuFWngmQAderZw58J56hkC9PpmnBZwZEp43zDiiDpJ1UD8WVqBAL3YAEhww",
  "key29": "2mezVFT8DFyYSrQ1eAHUkNQvW9gPT4Wa88E71eDJDFQ6nnbhXXPo1BAYD3G7muWWLJ6x215detJBHQookboi5CeH",
  "key30": "XhZYZiJKVaYCSFGXbEbAEgvasiX2C7zYHzA3Yo48LXsDQA9y7U8Ls1irdRQVCt43RD5pS2iY8Kr1Mx8ucvEYXgW",
  "key31": "5DqmXFfNs3Z8MSQSMyBjEfS7toFxDSdFmUhq9u6SDyiQ99az3oCrSz231xX3CgvncRHeBGwjiXZ9heHV874okEmC",
  "key32": "2epBbu9cVZL4AGwzHwLf7PHw8YEC5XS9AWF16uFAyTwwuB76DzjfU2AQ1Z6EC8Dobt8zo9vuBUvuFLSJL8gNjQYW",
  "key33": "5JjBCA1tBW6xgok78coXqHDHJ5bqFavZQgbUTrD1aa9MUjueHg18L18pT62gEYPiHpeeMJ6RtM54cT14W8nyxdRU",
  "key34": "4uQytG3FE4VeEkxWdXWEv7LeD76BWZLpcu5QNWTbdZXgetPSELExajiVGuMXTp8TJy9FFW7CTxd8E1DzJiSFPrLw",
  "key35": "4Vd6ha5iJBfrM25JxQUFLscZFypqkZA9xZmc5s38AHCqcvJzpBps6HiGf8gVqqUa3EuA5terUedSSrgRbaKveX5b",
  "key36": "3L538ZSJeNZRxnizAXM7iX97CxxavP1nErGoyUT9at3CsLMQ7poS3CXwgTor7om7dvRyB2hfWhgXm7WL7YENcguT"
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
