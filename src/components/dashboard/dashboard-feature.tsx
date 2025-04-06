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
    "4zavaMqyWz4tgrRSv2918QZddA6jFDoJqsGAvrJRE2MhdibgAj5k1pLE2E5BYgnZQLs8BCSeWSw7aaWTE4KjMhKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bbMesmd4ZWMqFQXdwTQKEF21F82UHqKt7RXD44keMtBALZWzEMkZyh1mtYDPDtTnDCrw1iBYqrk7rGBcAzppNmV",
  "key1": "5dELFbrWUHb4rDsxxGRqCKgQnZ2tirfKeFHKUmqpJfHY7WR7bzkVad95wdktajir4ARt12f3bE92kxAgbDgdMLQa",
  "key2": "62ZuiXyGViNq1WMeehyDFq4v93mtanpHevFDK33CuS8QVf4P53PXBXPiyHBxMqba4pcYaeEezz8WQ54qQqMW14h7",
  "key3": "4WKfxTrzHKF9oBiaxc4ADisHPadjzL5cgc28RMnEgfkkFtiLvY57NydZaihhSRssBpmmXHUyHxu6qNioC6pCagbn",
  "key4": "4q9dsip9yo2XXXHHdCUnjck4VevZFPfzu1Npzxfn3oqasUEicUf7MWXt7RyMXkjHFBoUwizFyd9awrK6xetAy4Pp",
  "key5": "gN6tZqUtcdpizDBkYm7SkMLVcqScL9mE4VEEej6k17DRDtav2zsSk4B2ftLh1hFmdcGUkRRzigSVyxyJDUbp1DL",
  "key6": "2DkSTFT7ZdPPfuVANSGbEbboHEtYC6ULqKg4SmC9wNS6zaD3vY1jj1UUb8BQadCtJGgWbPyLDiFQAr1YsPEs6cg4",
  "key7": "2gVsnyQg2Bpn92un9xYA5WnVBchrz3spzR3ZtoM2kT5X4NuUqxaCEbQhxHKaN6oJv1aZgUdibqXrTSXQ95LS4zM1",
  "key8": "4jw8JAMS9Z4SMGkLBbtdXvmbb9N2EUVw8fX8bgnBe8Zmkzku2Qcm54PK3ARNZQK45NBU8ywaj6m7izKJobVCxdM6",
  "key9": "4cW39DYqWAQxHjVFaTXgLMJPXMk8H1LGXfcakTFtPUBkmSPDKxYnagkr91H3S16d4YQ35toGaP1sWrCMSmme8gn9",
  "key10": "3XqRsxvKv9vL5J3LbtmdBh5Z1fhHQgJp4xNiLgTQcuW5CBXHVBzVBF7Yu3jHUN3CgYKTJEVajyG4dBQ88uScyYAR",
  "key11": "3prXDywb5fHGQnmMGeo8N4u6j58ZCikDLRZS6poyFr68cpdnw73vwoQxn8BoAfgnpcrm2SmCd8y4984VZyeVyLEw",
  "key12": "2AvLr5j7NQ6SWgEj4geLMuVwpJooAiXxGcS59EgNTKkJL2o1wSkcURCtBfy14hn6U89XbBehEfjMFVJm5rmjbpaW",
  "key13": "4QMMc6jzguo2pUbLF6MXDxnsqWAZ7dUtmHoDa6koBHxfTrsrBu1n6DqiBQ6q7pGWTFTUnV4TwBtSwTMeSQHqUoDk",
  "key14": "3EGQsKnAdQAXEH8HyMU17yrjxVSBK6qTikushYvNMT6jVp8m2teVGjyev47NfEoWvm2hkWSx1PUbNT6bJ4eRWZgG",
  "key15": "qm7XhVs23YmLTVK9YCdfy2gqTpPS72jz6z8BDeeo1TpCpgMnDv3iSF8H77PLR8kfXV2wRattsmwwucM7EzJ59EC",
  "key16": "55uzfvvpPPo61gU9VzAvL3EuYqHA7WreuwKtJKvfbCxHaTtxoMiL39kyRdw6YNkgBr2KhmEXp2UzjVj8nNEpqR83",
  "key17": "4sTRoCAmkWg76GG8nL5TK8ygKVh34kovRCRsfGbj2xTZEm9DQskDwpYsWWKUiCyC9FkCYCEbKRLKcQppdvKWR8cW",
  "key18": "2wT1v2Ntx94b25h47YDwGAkh5xrVC1C6YUcRy59b1AkgvY764nXVfUmALGwhQv35XDSW45JoWhRhgxj4WSkeCfPm",
  "key19": "5eZJztb5g7SCY1HvDJd4MypxSd1LAKeJ4zrquo35S3kvkyUkgDCXvHV3iLjkmBUH4EjEAZetnbHK9rx5ViT338QL",
  "key20": "44D9Lfg4NcwSox7sJpQjYKsv1xka1S6ppqMYm546dQFJC28pZSnJuyNHwmbSayDnCJ3EzFvCfZav6wEQADz3dmvL",
  "key21": "2z8hpMTRGmx3EM4VkVfU8LgqiCaowsYfxZi1DvyT4XCsRaRqtHDWyTNjyTweWfuktKm8WnHsKaMMMdiEY24TjWf2",
  "key22": "62kSUpyqvrcxkLe9xqq5AEwgxcSu46UHrVDX4DHUsUQgYcCFappXZmtVU6GrKWXZGaLuw9MGDRkXMQYUwLFR6dvu",
  "key23": "4XzTMuoANG4xZrL8DuoiPrWXSnvTAeh3bx4xGLRPBCF9dVzRyQLByqMe5eY55g5sXGTy8dfkzcp8anea8fFL8Rz",
  "key24": "3ZwCPEkD2GLYtrTZ9MXGzPztDrEnYJ8FFFL8uFWayCjBd64of9hSxeWz8qWdvuAkKvpBozQadF39g2ucUcfSm7Bk",
  "key25": "3gftYhqQkijCd4txv4GRYecG1FELyRwJq9VjDS4E4KCoCEwn5TNLBqZhzWboSNAPvg1CuaP72gBmRXHBCzRqRanQ",
  "key26": "3q8Ba6UqDiD3jDCjte91DppfigrubzVgZyVCJWTYHeiFUqPbJG8wkYgCnxNXfNRckUsVq8C463ejgrpYYoPhRdJj",
  "key27": "53Wvi7vxt8LW4owoGf63pdGEWvr7jvhJuQWv1YsdfmVNtTQ46ctgpY4G7zsWnVj6kr87g3eXvFP2wT1wTGtJZbWE",
  "key28": "QNe3k5XLWkQdv1nbWEQjp6A6GREDmKpU4YkkWA72SqgT4kup7iWZu8p9Kqt6cgWbVHyN2QsWFHgdazfEvntRr1t",
  "key29": "oR6DX4JqUohXSsTAzYQPMQTMYgJnjJv9mFrJrDvARNxmLTBeVG9NKNhhpTeKHi3rjRb4GKMJQXGRj5db2bFYJiQ",
  "key30": "2LtDjo2Frt4otkomDiPLra7M1D98nRYbUF9SCH62qNRpudNJNCFYfY7qPnMA25J3TzTscy18vtBvAXcQqK8RmRA8",
  "key31": "3Uw6HMdsEv4tzzSJtBNcamxF6mdnAcNG9PFQSrgob3yYVZmPGcbCD1uHPvZNqtxiwbzXx1K1duQHXfgrxmUMKPNZ",
  "key32": "3VB9UPF4gLeWHat1YkH5tN3GszwXAdMB9BtsnbAVqoLcbwA8ZJfhH1nrQLkV7S9sKnn2jZt7h6L3Gf9xqZyas96Q",
  "key33": "3Abnz4hyPx8dsdhKJzDkpW8dKdsvvDTTAVU8cThA5MYn93khWXFzEymvBN6c9xqUMUkaWAB3EaUanJTXwVWdKFvx",
  "key34": "21zVM9xeyocQgpdc9jAJMeoHRF1UssfoRmpJiF2pSWBUmY6fpnSan2Hg3pRiFxWN8k9B1PHJj4gAAhgdA5qZeKDA",
  "key35": "93Hu8mRP9Ufbv2f7Q3dfHufyyxJ5o4SzXhXCvV99aCNw9fvazCmJPU3EYgBv6DfwumFRXSGquHuNaejqUP3jsXy",
  "key36": "4ak3AQSYCdfiGDSFcPPNL7yfgk8u9tFHBSYKtR9LLYxf7z8fyi4QsQqmzfbmZXS76vKpMjnkfRV9W34Z1ezSw8kT",
  "key37": "4xvQRsxyiJVFwtq3qtGAoLt6BbezDHRyRDAYbuY2yWAEKpSxSqFqktz19qudAAF24gVBCPCUKXQw87FLCpFd8q7k",
  "key38": "3ifehZioyXwYMfnQWg1xmtNa3a5TanVDuxc7P4PRENpaqKshnf2tYUqeLaCSJQcKQBHsivRbJTco11bcunwoKsBc"
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
