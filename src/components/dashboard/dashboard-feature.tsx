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
    "5arZRG2RvNz5sgByZAebDzEVSzjCtNXWtFTYWd6UsgeuavTk9L881fQMd1KvNtAuK7QayGsRmRSkVVAuk2ZEnQFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVXF865ZzaR8ZnYpZERxEn5VxyscErdqRR8jCDDAZD6zPMnCYTjowgHgSmpnwdGZHw3nAkHdbhW3JJCxNak6EXK",
  "key1": "2hVha1G3Q8FpCAfZf98fpohNAW4TiH5tGQAVDzuZr9CqwfAnH1HGwrr5aaWMQFKRkCTNk9pVpap7KtDr1G2Hy3Yh",
  "key2": "2pubaJpahJ1BWvas4H51677mDBQBnPTQ4RYn5pQcsmGZ9v5oLMNfpnMmhF5vErvzBouQh8GMwUugV2jL7TFzePMX",
  "key3": "4opJVWBwzxrnWVsrtE8scry4P7hsALu1hJvoXpeKYFe79md9T9seFP3SPV4gcsEPiDmdJNaECgH39NKWyvpcvtpZ",
  "key4": "YS1w2hrn4b5m553patcJSJtdPgQQgWiQ93wEVgwsVbhMYdbhM1yZcCpcSxVkvaLvZAMPTxU2v7BmYyxD1ipc5Dk",
  "key5": "2qop6E91PMUAyeEricJ5R25fGjcL8NmNNDTUeSX2iryU96TKVRS6nUQD8A8RnuMRNvoqv6E48WmzZ5Ni4T7zsNVu",
  "key6": "2E65UWuDPH2B3MZRjj33FRBJejKJCffgweqmr4rojdc4MJL2ExRpuSdZ6F1xyc6RrQcuXSZspVgu2KmMBJkoTMNE",
  "key7": "i7JmHF5drFfhHbhBDBNx44Sb1YKaDMchGi5nPku77mbJV8xMYbCprCkPMegn3Ag3VRDenSBxXe41bN8k6idD66v",
  "key8": "3gNYLEwVpEcfS4kxoNAXScfcQwFAkNXJuda7JjdRNknutmnQiSy7HsTCT4GLbKij3Sx5HrtkZiDanhgqoMUNJeDV",
  "key9": "g34b7iEfb3L5oFJFah3omYCdDqqezqw9kvcUVGkSq8PGTh3jpPPL7Z31vaWDWSMTYUcuSgyv6GG7dpk3G5xnJ1Y",
  "key10": "5iN4MDA3c1MaxL7M27EHnzB7AF5NVZ9gLKvuYbUMEK1s9QgqeWZvTg6usPGS2maoffKR4o1QX85HivJ3J76X3eM9",
  "key11": "5gi69bjY4rsZDgZuUCTKMmfYkrAg3YU1kJ4Y1r71XXpgtjyoweG3aaGQTmktXYGVVUFsmUaqVVnKcLZr17Vw5sb1",
  "key12": "2GrmYQ12hPYsgbe7P5QLqusrhTwpm914dLpkt9TRbtf1xeBbmQFotW3QJyHyRaf6Z5meon4ci89vZWDRx1xZbUdF",
  "key13": "3RTvkV4FWCAPdXhTQsn2MN3RaaMYVwXK7dbErJg1zzfosKZpj1KcBrCzVCgh14855wEGfsCP8ruhPoCC58fVsM6Q",
  "key14": "4hpvV5kcx8PLEUF86BYq3PCFc9ZSKHPYKgoum9wyADqGgSj7h2ewSTUotGA2fW1EoudX8xcyJFjNi8mRnd7trXxb",
  "key15": "24myzy4v1DGEdAc4hNM5UxHY2yfHBPuMS3WQ1zYWQTFjXHSBSK24jR5Zth1wueejHuafTNJnmfGhv4FSyyUd1Ko7",
  "key16": "2oDSxUHMQTsAZHynxpe9VB9yV4fEdrkENgF7c6bysNTsxbFs4mqBB3bGHt3xjV5qe8rz9AC9rKGDdKbrVvUDjjzT",
  "key17": "4HxdY58xFDUEPsjp8n4vDxVsMY4RSryDVqQH6iZS8nkhpQXM3GJpiiDQb6yCB6zZCUSegnFcJzPTeu3ao2X6KzPn",
  "key18": "4fQydwEhL9r4QLE1mRG158RQPrBnbhMEp2VkGxaLxjuax3SzpNryeCA9F4gCMEofWaDvtFt6wkHiCdC2oEs2x9cT",
  "key19": "5WJ53ZpnjwXtZCfsPt2PPPkyW46fiS7bD38M6W8f1Z9hvEGABFsGEA6zVnYJidKLQD6M4PrcT2X9Gmztunf4YU5s",
  "key20": "txSazBmaTkBJXdBW2WuGFj8rDcDDLUiHXatx46UYfStGP9ygn6Z1MJUuABHLnU645jPW5XqDvzoh5jRp16UMGr2",
  "key21": "5qUxXa4tCgnpzxdhXzgXVdspVNLqnsUK4PA6yiAs6BZPT7JeoTxyeDXboy9dPa5VVaS1aXojBV4jAwCRZLpgSRUE",
  "key22": "5jiqJCX7mmS1nUZH7fmAMmK3u97PVF42h5pjhafiQWCUt8A6phhRd6k1zCbJZrTcnZLUPv5DqcmkSbbCbW1dXGxA",
  "key23": "3hAnquqnLTSNeTvsVHAaTEFv6KELc7ktRBYF5DknV1MB2kqeJpoLd9bqD4QVx7adtUrmyM9vUhEHjxXqPxqijVDg",
  "key24": "3TUZEM9emydxukyUtZEY3s9DWaSQKtWMWYsrynJww9spVoufh1XVxo3y6V7GWWW1YF2EKfj1JVYDsCZ8XM3dEwe1",
  "key25": "23SgcwoGKwHtUTVByaZYwZDf8BpDPnX7y4auHnnTkEzNTjum89si35q9mmRhrmmoyXDqNXaQwQiV8Kzicc8rpZBp",
  "key26": "3hV3PXPG6N9gPGHzM3LMxZL27PYAvirjQmLVhrG7sdammcupFBmxi7mnUgK43aJLBV24nVymg47yL8xVwVngjCqP",
  "key27": "3rMnFuqYjkSxtGZRikscm3EwsgFrLwf3PLLdJ3KxKdF1kYnA126w1Q2Su44RXPHkeJFtNkNzbjA6WRjfWtyJQcqs",
  "key28": "VATAf3JLBEkPE9PS45Yc2RcFSyEJfauU9Nw7LiZP9Bve3fCsJqS28xTUuuu68bXJfnU9zDSE8KJDtfs5a7TWHNw",
  "key29": "5rGgrohrHh9L78fZ1aggeUdZY2uvV48s2Kz5hRuZQXxnnXCmCeLrnpi1ptw74Bxie27oJeSiWHEBSafDt4LNhzsz",
  "key30": "3jHTbpbAFkzsYAJB96mwGq87gxDvdxEogproX5cdRcNAxPxZxrBDXBQXL1oQ176DrYz4X7oVNQ8ETd5GU9Jr4EWG",
  "key31": "2LhBcHMv6iVhrkP5xJ24AxMVWR44twsVHp5JD8nheKReETFbzV99NSRqRyqq1jzDzxGrBtVjMMAuRBAi8hh4zzZi",
  "key32": "3AZvePqNPxzPhp3AY88saj4hz4sH934N8wpdZAD6eqEzGiNRr5Yo1CnAcYyRPqnvWqV8TYWgEMtcJw9nZgaGUrSq",
  "key33": "3vcehY2zAHYbNKFcmUEzjbr71g1J9egrZN8MBAbGd1y5CNuUokR8p7irFoqZ9yjo3WwioSB8Swn5Q3DyAfKAk8go",
  "key34": "mwHJh7paK7mCAKh2W2GhdWxNMukMtFiTrz5QpGMFwSWZYCVkWueD2Yo3A3pgNg6qfsPiomut91bzzeyFz9NngcW",
  "key35": "3vr7kvRdkXUyyNn5gFJpFuN7zdxKdfnUMkraHRB4oiW8yPNFeMT3TRpF5XVV6ZGfkY46vw6TJXCM2oeYMAQmPnWq",
  "key36": "AAjPMC8ZmEr2DZzT7PV7MAgz1iA3HJKcKe5hjfy78hUHwbxbH5UJdrYXeRiVj7Ymjq4ihCdtDrDi8gcYUFkdSDB",
  "key37": "4ZuzyzDGpBmN3ES2PZGPWJ5bPo3YnZ8S27yu2fiji8U9YzeFxTN44KA5e7yuN25YEskdS9KkpoCpuQbfHF8qxUG9",
  "key38": "2gbsuSi7YokqGJo1Do4tL7kuos5jwKqLydRvmLvrXxf5hTP4FbnxRJzTwER8Ro8n794wE8iEzsx3thbkwXbTrvmv"
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
