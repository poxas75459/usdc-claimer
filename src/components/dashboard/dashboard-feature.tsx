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
    "tx5UBtzBmayF4ZZnUzqASkEuZqtggfYmVQAdFLo98LpKSkoBNkkhyUqEfPssmNg7k7hLNj8WRF66QfJvn9JnrfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i6uWDAT5s9SxjWnrjYDHJowCsFr1174NNkAnrhFdDdire7yFtyyFHpSKtqDrzpztn5VETMdjzBh9WKEPAUngbNt",
  "key1": "4aDQ4fTsDs3fvmhpZHuFPNSLrsmtkVEp4LUXT6yqm3KCuy7VDVMsB2ZF1UyBdZg2bBqDZW4T4xDbMFHdV9fTFj7y",
  "key2": "3uZ3fi7Fq1oiN2iQ1JaYTBsaoAzv7dpC525878zEwWdWMgcCZpmXUiNAFjhYEjYnF7WPRTJoiLCpbDxa9M5fL7D4",
  "key3": "635BTbQFh7k9ZepppvLutB16SUVKDkwz8gcKe7uJySB4nSsQD3xz1e66mFWebmPYF96X7dPqEqasKVTf3PMezhZW",
  "key4": "3xDASwdkKuPFCXHrpoi72EkqZWKp553ryAM4SPQpSt7oLHMchScdydW2RAyoxanXBiGmjSqrBrVpcc3ZwqtaMcUu",
  "key5": "4KqKD8pfdEhBJ8zZU56vpGv7MbeNgLQ1NS2Mdpj6eE8zVYSjUY8EvcMU9Ad5Djq7FAUNWsZ8t5fAg9U5ScTi535s",
  "key6": "ey3ArbHvxaYAsQLHSVa5HUj4hUUvbh1UiA3rb4PfaMju1Aq9fQ4JshxTtsHYALWaJvN8BvTkHXVR68EwuRFTqHZ",
  "key7": "4f9eZfTD8VAKALzjucBnWrPGRMEFw3kG7TB5FLAi6gGA2rNpT54sH1ZCfGshXtcRffJDPM4G3w4Py5Gb1e4Z8JDu",
  "key8": "53W4DkQ8TwzUQdorg9oWNCpzNSFTtC4iwciPHQYwJbqBdBsxJwWAnabvd3X5A8b2ktwxYuwwCAkNoi6yjDqersuD",
  "key9": "2wu4fEPbEbHA5nC8yPrTwtGW67nHjasrgmFA3qwqUs8RAw6ZB2F3ytmK6N2UZgeP4ZkG5tdJC8VUoDMsXBEcpudD",
  "key10": "tAPjFYbYybUYnpJc1iYmebhYskpVBmpQEQrbjoZpcrCE9rEnfxY7FoxXcnKFtdedFaXdxASap4hnGRtG15coM6b",
  "key11": "mSmV3kXv4FKA6e3mWy7kX4B9q6YTkA2woKY4qqNnmK1hwUkL75XQjE3Wt9t3Hu7x4gJMkTYSWB4ksYYLBfenYRp",
  "key12": "5NBgKPHnr482thu46HENAmuDgyQj4QG26Bi8xpBBf51PV6VcRJKEe76YGnMqsFhBDQ3n7ov1HnQe3vh8Dno7MKCb",
  "key13": "3VkLBCkovbcD9Hz4HCcB4fcyqvi4gF9FVVXHP4yuZCNrSbvFTP8HGxMMZFPEp66V43AeCscQMQTY1SgGo4GMf1iY",
  "key14": "4QTsVvHujLixQAd3G2AtdMF86LH4nrCPKKLb57b3EPBJc7WVPj476CHuEzeM8HFXGWnv8XiJRDsKaKh8PmDRjoj7",
  "key15": "2qUBzmPjjPfnnXuEAF4Fq9NXzBod46H9wETft31dKeD9ftaqyVDJwPudhV8VqfXnrTAbZcSqHumbcwN7cUp5N6tT",
  "key16": "2ftzPyhWgPMV33bZZFp3EsWp6iwha5mkzmTfxsMSLUQM1WGMvgww1aefSWpV7y8RZr3QJB45sZkFHSQomZvD93Wg",
  "key17": "kLiw2fFMtxmryYw7CP6MV2tv1WpkT9JmqaLkMpWH3UESiHv7SbZcSyyFtJmjMoeFuhYD9hxfuf2V9X1eW1nF3YM",
  "key18": "5SyJCaYhAg5nysM2PhMnaihEDGF4nUAvDhSVEjJ6HZ6SYi9jMg51ExKjc97xx5JeZxu1pDP7wmW7JqEzCpkMjq9y",
  "key19": "5Ao5BcWhw8yXUjZtFNhdmYE5fxP4QwuzAnJq7PSGh11o4Gvr4eJf8YhpKusZY9ZRzAETVbqtuZVDZyxEK27L1bQt",
  "key20": "3gZjWVPiam3Uey9KoPpreasdoqL6CwKxioXx4yvqk4R1TmmbjPHYjuhAbQnuDXwsWpXFMwwkqUV4RKYSN6knwrqK",
  "key21": "2WG7WE24dkt4hhCLQ8WYYEtdxdDrPL2ET7wSC7JmAvTXJrV7C5ivTC2hRHmRcCNuhPKTgRis5DouZgkc6zGZ2beE",
  "key22": "aLtbp81kAtKTnKVpnU1UMksemZrSC3rrPdfgMVd5bzQN3ALH1rLUGQRAcRLr5ntcvGJrGPfWREszwE6iSvZDoDG",
  "key23": "bBL9SJuhnaEKvnv3QsQ7YLgDa1b5mYMCiTQ5PxfgYdjdwf8trrXvcbpah8JmSHGSYikhvtyYXPD11a8nu8ALYdc",
  "key24": "5XcWGjYuTFUteM9WrckNfgFpWfHPYt5B2qr9Q4QTkmfqvAxikJtGz1rYss7ojbefjQjvmL1deJ7p2tBPXaWctinS",
  "key25": "m5oy7xcAoZkGTtkMyhXUqLGGPzQHZHTPsQ5chhszbhBrYSKUNmZLYTiKVVk3mj9W7Q2J1CdUJTKsaKH8swSJuwk",
  "key26": "62qk4TRTKXEsYinv3xxfXNnBFw9JYnFBFoW6aqggvBYFxDrX69FfPjxNod9QaV5hEDjXCWYJ8PdjVWzHQw7Uojqi",
  "key27": "R8yULDA9CXdFkrS6Kc4bX47HUhYbEyZPPdDvd4tRhFSJG4AYFSWmguuk73RjWvuuSi5ABpzyzbKXHQThgGWFgGT",
  "key28": "3KipYfVCphMAXkk8AvNixzoscsGBN3UD4W9g4fV7MRq7zzUVMgSUTQ4nNEk8bMNqUBZ7AtjmPvsE3psqkgZbiiu9",
  "key29": "3Rkk4sqv7LnZVVRTT5PQejnDNt9QfXCRTY4YCMsWeXS5wX2tko4SFi6WH3TUfWeuG2aDGU967Sg3c2cvWb6ZKBF4",
  "key30": "5TMoQjgSdfP5B1fCVsShrCiE2ShBpCHXHWJgfESkNLdeGP69trmc65NiFbBAkFoTHHA7kcPhAenTybQnZ48twtLB",
  "key31": "4gTfiyEJXAnfmBn8WZ3HjD7396W7hFWt6FabiF7yKfUgMQ5E1tvWpqtYGJ52F2aqUPzRxuC4YTmoBQUBgcQFB2Ah",
  "key32": "32kFecSvtKXCB3Vw1jmksrimJRyMCCnicGmWCMzpb2kSCzwCg8mDSX9z5NPMX9ov8s8s72XFPjqRNvxxhmaAsTYe",
  "key33": "2ttjKMA3YebRSSYzHJEvcfErtdm7Pjc6ug51r1uMck7qLHtX3ao3FeSJnJKQrrdYAmfVPRKyUYVUQ2Lgz8a1eTSc",
  "key34": "226jvwCP5F4p3KyVFVMiDNinSL3A8LF2jaJrxCPoXknHEuPXspyjAD4iftyH6Ht1GDoCTEvDzrdBPrFPUpUCdCYX",
  "key35": "28ehD9HYKaFrqT5tSGpU3up67G9FP6NgbTAif1YGXDtpoNbiPKyh8BBxfwRbchG51FYfDyoHrfzSQdBVLLE52a4t",
  "key36": "3FPg6fHXfaXaJPi8qJFv5HN936mjUdERg7D2hmU2yEtHmNQphqssj7v97D3Wnhtbxk6wCQ1XdmRzUoM255tjhhAc",
  "key37": "AQyCnBP2JSrDy25G2B3FKwR9hvhjrgaR3fo6gqBGvecmsz7LUz1GjHkx9LyS4dSXEdaT9Vq9kyoZ1Qdcqa3uQkV",
  "key38": "2ZPNXkJzdJtA8dy2YgZq3TsN7r9YuzsANdMMAnNQhDEeAZttPQBNUBzoHN1fq6KxzyqmhnuwDCfonLB5omprU8mJ",
  "key39": "2x2ZmpfroL9FfdBSqpA6ufq4JvvvifkzJ2G2Y5ng6eheECy1VG4Ha9CucKHzj2dxfGHuZrAAi1rXKcUypSjqVpfE",
  "key40": "5g2AX1U6EC4hAMCJHeM97Bameq7SuQWyb4uR7w4WVkvck9eURgcRMhWKAzhsiySGwCRV52E88VLEEfoWbEcLom8x",
  "key41": "36iPsEwFSHSsPFPeBHyaQHxs8ujCXBsBqR3hh9mjymydTrMxRM16VdFDipCx2YaCEA6GJXQkotfdaNCKquEpzhzf",
  "key42": "4pMAdtCKJJB6hDaMZaNqmyN21t6GvHdLzv8qxz6BMVpNTA6eGdJDSFbL9BxfQqJzLLapVs2MM8VgXeC9wzNGnz4X"
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
