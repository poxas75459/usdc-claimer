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
    "5ZNDYmfg3GSk86qpn7yvWHA7i1BUXssyqQ6rD5Adm2FJi5ydPRR39S8yF44WtaCGeqEHz2qgLk2HiKrgZQtzL7Y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TgqDhU1UHicdhTfkVeftAAkwHh8ugqrA4zQTKVSCjtBAwmVUVtD3yy1QdnNKTa566SzgjJFV4cBxs2WgQs8RBRj",
  "key1": "iTabFUgLfoiK3cccbrw7y4MK8H2JhmXWBE8bafRTZYZ1xhK1hyTFVeyCzWL7zXjJ2FG3thw4GdCmeC2tZEm2T9S",
  "key2": "3AkN2vk44wVaR6dLAYYS6132Zh3kSoLrM84GKAPhGTCR2Aurhc3kfFWSo4H6CpkAkD5vUndcM95bSm9WHAkTB4mx",
  "key3": "3cm2DaRu4H8MgmAAeDMenrRForn3gEboE9idctQWDbfDT3LcZZn2Uss55wcUkwPgMdL2brdsR4nu5spWiKbAFYdk",
  "key4": "3iVD3PRa4V6o1f9NgSkKba5E36Fa2qbX2RwxX89vXpWaVk2fJtYa1gHKC8n4jfZgNQisT1cmaoDBqd8VQJWENvSw",
  "key5": "3kwmM2emNJ8hMdEp9aE7yAX2SrWosEAC9b3EZtX9XAh85rDjYR6vsTt6ejuvuMD135GSubYwaHsaPfubm1aoC4q",
  "key6": "4u19J2ou3tt5s4NPZ7ibj7vTE76TCh3iraxDTwWfnLjjnbZZdUEeK38GxuXpcZVv5MGaqdYVEut5WGV1pN3FZ5a5",
  "key7": "2WrREDatEnCdFCoPfQTH4T2Fb2hMEwkKay6xu29U2jT9oR51DSSCxvLR1F159cVkwaF1Sz4LmK3ri8nT1GWmaed2",
  "key8": "2ABRyWLNnQcjtLEkPLGHP3tt4cXdK7onesaSdLGcuTzngcFEU4S5JH7jaus3FQUfkFiRUaP67uRmCgWNEvusiLVx",
  "key9": "2UGupA7h1me4mubSbhcBiVDcGuouWQVeVVGU2fgGf5WdcBCYzqhWE5Zv8iGGViBmSqfQWZVqB8p1kmnGccgTJevp",
  "key10": "CaeDS629L5uBq7ScpYoqdUrW1VUGRxYFgYYxJBgim5tSJbqZ63yyp8EA6wm9hc6QknqitRcRyURebUmmCrk4GqN",
  "key11": "391Zo7iMLheWqaTZaRrZuRY9Q83fLShoAdLkNBxLikWWLwp3PknmsDH6r1ZHLUVZLrkgr2RPZocHCwGWuJAejY43",
  "key12": "2J8qEn8rhyoxoAZpXTnZd29mWnVo9TWrmpk1RpHpfyFUGdzVJ2y3QtG9WduYKGdxXiqc1WNkQSksfC8k4hoxkKXz",
  "key13": "2omGEbD4HHpxzwsKW5CRnF8oVjBiFCgaFA5mZMF7ze1PEKbiBJXhPnRJoj3B3kJ6AnwSbvBL7mmfXv9BDRyhMnja",
  "key14": "2cG7paqAMBSqPXDJUMMWYMaK8GWC4gEooZLTEbQ3RfxmDNM5S1U6Y2o6AgBY4P5XUjyF3dvhLCKKN6nLex5sUX3P",
  "key15": "ydgNWgdDafBnnsi982rBuNSoBfPs3JBrvQQPqwJRrDt7iRxWX5UYHTaWuMSgK5n8X6UHC5xgNygfp7q4tVCyBss",
  "key16": "2SUVsUQvu6ewD6jE5qCScpLXB1jXj4VdptfRHncpb2WFtA5jXidS4B2tZQA2Xy44unfhdow6VA8arZTz1ab3WXtf",
  "key17": "2NLoDHFp7RdcPH1tnEfj4cZDKAKua8w79e9AooyUnbkv755rAfuqYULHfDTYDHHJPWneMtgW7Vua1wbMWe4DBG9b",
  "key18": "3k82UhG8PxrMsFpoMQKXfMZF2BK77iNYm1KAfWVpsRMAcKS1c5Jxa1M4v7mPSUgvVe9Wu6yhqfRtuRQ26hMBMJcT",
  "key19": "AoT7gkHyE9YoQ8Urp3VSzb1FLSkY3LVhQ4JQhCPCN6dhdWQXjNTAHFKsxiwAzGzyWCdQ5LWoZWKscNiz27vkLZB",
  "key20": "5cfqeEkS8uwF2CEtSb5cY7BcAFiiqtXVoJuzTSA7BwYMusgKwve3viLGvryP7aMrjPmCKiPsHRydhySa1GTa4tJg",
  "key21": "62Z9Xnd7ei8TdxNseAwLqrGnoYviK6spWcEW6gbwzr3ng4bQiV2Ssk7azKRMt6oVCjEvtHn2kE8gHNAU9ieRdmgA",
  "key22": "pDfuAfNbzTAM1bDcPJMwgxZKj7Sxn8PQbLdn9saL6ReiiCpKnJACD6oCg4Dh33uCPxEUyQP2EXv9SPqNNbZ2Rsx",
  "key23": "Vuqccr9qiQnPwEvd45fwhdbFbLpKDvExkyqeVQAqcpuneXEt2vnvytpvhmzmxeG75Y2EM2U7pQ3DXUWeERWCR5s",
  "key24": "W29TxCgJHKfCz26VUoajgpp6MenE96hTiGcWMDa7d8nWwYP9E1p3qKDmtPph8PUrNr5QkABQStDj1mx6qq1SZNT",
  "key25": "4tqDoLh7zoTyidNwiny5H13f6ZFwyyPYCBa8FcDVMBRHjxpUxVjEdLvgHksbm5bGwKVuSZpf93A86J6nkNzDvvC6",
  "key26": "2Y9HQ5CFfzqhq6HXeEa1Q4nGXMgLEF4rwj8DNko8JZHSUHR1yTRVRhimjguxMTKRMt7S2fy5bPxHxQfbrhZ8ouUT",
  "key27": "4bZQ8ddZ5y77WqiR516ThLVHfCiS6WDh75NxpKbHW3jqfpELuG67zjy5VzcB76yh1Ng6HGrc8umvqfb4cKPhonkN",
  "key28": "31nKhe2a9UzsEimPKxNbouwgt76fq7FhhW1C8hZgnNWQJsq463GbG2ZjuVcSv2CTXewBHoPMPLYeyjuqci9EXjgd",
  "key29": "g4mTExwCp5L62ZhD9WrRZfom8ZdjRXQwL8gT9F8vbC7dhfUjSk4ZmcsSEdYEFzNpmaTwAq2YM8jLsCsAW6dG756",
  "key30": "5nJWzYMANuytoZKj7ZqnkD1GFi9u6ncDVJxJDbg3fcTypVHGK8uu3dA6heoZPwMfHtt2qcRiE6cXDxeMdJF9ViM",
  "key31": "2zRBAjcuLSiSwKycS3QBV3FtaDCmHpfmHTESL3N2BTyFKbfoa4AvY6Va6rcRv2J8UATADh7SUoVfM1QqpiVZr1A9",
  "key32": "3rXXw4ynqzge3efypgTas8fidfn5MF81dRBAhny9sph9Jqhj649X5emnMD2ZeyQZyXcBGpgNxndtK9gRe6R5N2Z3",
  "key33": "3NqewCzGp2Z7v7PDw48yzPX9YGV2X3ykHnDmdqYWEJkfSepjTv6vB2tcgFRQ1hw7sUj4SuHB1LjR4BoXm67Hfypb",
  "key34": "588CaQLjUgkKFiSPXd4mjn4Pwta54XN9AS57nXz4uuR9f4ozH2uGcNkZo5bNTwM3zKYnsPQoknpVy5YCeiyLCtFp",
  "key35": "4sBGm3XctZ4Wcf36CyyxxAfjUyUpQsUBZTgG4CGhWSGZAF5AovLuKhURqsfwD7nU6ascF8k7XFerXamk19MJBnfD",
  "key36": "6CThR5LibhSezgy9fVBLUDjrPQnDZ5J8Myr6keHS9rkfd9rcUEAMfefSpYhoUxSSbyYwrFCcF9K4cyB1tUJYPfh",
  "key37": "Gv3uzdHzRpWivEzBLPPmWDZzuztzQUWf3wnR19Njk846EiELejHUxkW3mhrbfgBMVwoBjEwi9ZGQQbtK3SfbKYi",
  "key38": "4HE2ebBq8gqrjPLQXgAbgnKBg8xxtwAGSjJ8GjT1CnWsNfxqmojwSRbPYXsZ2Ko9NAm69TirPeVmc5QpBx3i8PbK"
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
