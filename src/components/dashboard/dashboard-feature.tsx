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
    "mGjnqa9ANecJ6VrLK4KSbf6wjyQAZQQALhNiwzFCGcoQcbx3BCiwuohsNxpa1yC8cby569enFdoziXjkH65e8gw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7L8r3gTL959yJNRoXEXe9K8REwsyv7bPMfMgonF37jT8rzWHqjq54HH1gfjwsBeWLCyyLZh65yTpcvbGpLKSGc4",
  "key1": "3jAu17ghMrQyhVcPeNnm4kGx3EMUGyTJEpwMxiKm94sAwsWGHMCuvE1MuYxzMxmhqPsWeJEBRrr5i9eSxTN62v2V",
  "key2": "3SmgLQXQnAkwMbXVkZFisKNUQb5BF7e8TNiDYgAbs62XD1T8dZ1BQkuWqj8TRL8ZiG5MEHNmcZAbBeVBCawVUSNx",
  "key3": "hgT3JbRHvSCCzBGB5J3KL624aSN7eiqhFLyU8oVQx5KvdXr9kBdEY3QgaouHty5SCYAfme5cTDKzsQ6rFLuCqXK",
  "key4": "4nyADmWdiWn7qNqE27vNZnzmbvkkjq89p91E7JCS6DtpYxRM2UMXyYqsjEW79afyXnxGroMs8m8HLaJADMKnXVSU",
  "key5": "5vUh3ZiXsArpiDitgH5po7STpAcDRqmFBqvPK7NLx6sFAUZzBzYsLyKz7mYaiH1bsbDdxBwrwyFHm1XtSPGkv1ky",
  "key6": "4SCKWw5BetNaKnNNtgxRRADj8ZQakvVxmfvUuaTXtfJB7sku8JD69KbZc4sQ1ADBsMuZTf4ZpDFEEKKg7D3Jc2ZJ",
  "key7": "2wabsetkCFGDBifgTbESiZ8LmoNnFCqoZaczkLMEYhf8btaT5v3G9CBjkDUzWnm7XawnFgrE5193rKfkqnzn9tJS",
  "key8": "3eZstnHqE9QjEYtEsyzgeHHMhjD41uDusnwyTjQt1ty5FTQdrzdU8wUne4qh353uLAqdkznuFeohHum2deesocvQ",
  "key9": "5mvQuyCEEjpeKHnwT3o3tKWWgTxHKWsXPGrVE14CKBbSxT3hx1q3fvBSj9FC6qfVH8981ZQ2TpQes45BvVEUS37x",
  "key10": "3qsXiqvZW6gNWqz3mG8WP9SDTEEAwERohPjAEufMFyVm6n6abr1oeVd9Z6cuQKqrzNVqHoSNHv5PhqpSNQ2YkpN4",
  "key11": "ctnZMkoquATKXqx1znAr2CZPoNJY7m1yGmVm12cfM6gfhNzD5MVS1wLmcs2WpgYcd69m5otqD1MVtAfd93Nbiei",
  "key12": "BzAV71m95E5MSw6qxncsoqW1yG6dbzjXT9bfpjfFGwa98EiXov6ZUqzXvq3DzSwEkuJobMiRn7K1uC1f6PXEbBN",
  "key13": "3PmiXQJ8ipFjMreAJsZ2hUKepTrNcqt4hzQSdG74Wup3ypXEAS7WKg7N18rXyfzeAFUcG4KRdfLENGReLgv5d1LC",
  "key14": "6yLuwvgE4tRA7KRhX4uDesTYBAMuZ3sLRdAvkV5VrNVXN1c8ZTZuSkdQMJW7cUxyfhexhvLtv8i7ev6xXMj1HZV",
  "key15": "63wffK6Jg8yFQJAf7tgb89gvnDtFUTd1ZRYo1frMmAG7SWdsquEgXoJyVtpn5vd8QXe4wuArUgophfH92gdcqnCu",
  "key16": "3hjYY9PSe9RKGWzGLZnjXA2zxUqKr937ezqULHwgzA4adG2oP2wKQgEdxxaEyXDNECVC1Z5rwJXQAUQuk652iaQW",
  "key17": "jycqVenxinqmhJ6c5qtW3n3dioTJY2LHQxhVPeHKPxKRLA3bTpwhcJYRhbgkmMWiL1KirHrmkEDsv8DAQsdpc31",
  "key18": "5mCcenn189bJCityarKRwA18Y3b2Yt54KcMGE5KK3RHL8x2rM7CEv3WZb9jEQjmht6QM4mbeyfQwbUdxCgthXCjw",
  "key19": "5EdZkz9eUmKeyedTjWhf7ToJAtUDbrSzRjzdZjVgX8uziqCuFK3PNGBUJLesZQusPMmZG7UJGhGCk4hUSHfeBf3n",
  "key20": "49mUE44E7FCuD9D4aKCRwU2aTMTk4k1xW2oaN9EYJNSdhBK7dFTocryTEq7FuF2nxo5N8wxF1fSRrdwpMbWU7TGh",
  "key21": "4KdVYWboWuX2kxQ5udVHT3smXYrn9qWxAxyHSQtCoP2HaXgkXgor6q4GmYP3sop86C89CSwLCcAhxgcfLhFMuBn1",
  "key22": "iAEB21dfUoEdUnmQxTBL1C3tSmcLam4KHiNaRQ21shyqnGYSCYB65DUHqaQLaU1YRuAXrzJ3e2RoBLtoqnyPgDS",
  "key23": "3uPedwZRQaTGp4yQ9SgTUXDGz6YDka6zj6p8UD2sXFTvEXW3LLm6XfmUWZHFa1bD1s8Z4wp39GwE1N42oAAnQ9mK",
  "key24": "61F9uJDQy7UMigve2PtMrAQUg4AYBbcTBkvnDvVKw6zQFqbQ7auNjQBFz2vmDbQx3t7uVSiUoWLrtX3oacC5qAbS",
  "key25": "3KqNSzVSCQsdBDMd5x6gDyh6xjtEJrRBLduNwHqp8uQp34trJsgkjiDBA3JhUyWKgxhYBkomdhn8dPtauhinQmG9",
  "key26": "7dakQJNPy8AC7giGN3EJSXgCHe4exm57EWSxXaV66VzQpAasm4Bmn2RvukT7CoKzca1aBHnEQf2uxteWSPDUFrT",
  "key27": "3sgZuYDUpFDexw4RCPTeVVRwJZHVdacWhkTj83uEimH7VrbVhnKBCwsRZSh7sHjLMcYhcAXx7qyt8vhEVEMAYrhs",
  "key28": "C1hSaDreUgAUvtmYYUhE4i3N8PupjYKirTGEBogHtr59x5hZqf7vBzFgbz5Y2UHD63FmWeGzWdRhBKb7YZhy2Sj",
  "key29": "22wQsDmVg8RBUyRjosSPZz9Q1dGoupmg4ipVRCxXkxq6GMR6qr3nHTvQvghabcfQW1HquAv8t7vs61mYDSWyMLky",
  "key30": "4sf3iuShP8MMWfPkqbneqyFExkhT14628FaiejKEtGu1oqEnhpUKF9K1kgAoLQWRZaR41KJBgsz2Y7C89J16BxJT",
  "key31": "4mTvVfn1VD8SRTk8nVasvPrsw4YhiSbi11WJGxmixHDvVHMZitYoFNSZKGiHWMCAcjXfM6QaVU3dP6GqgKekx4J1",
  "key32": "JSA6uR2SbrFED3CDHDhDw3xfqLK1nAPfCU7oko7WwEm4aBYV8ZkuQyiry5xtF8dS1aG2CVTsQzDTtwjcGmkxPeV",
  "key33": "4PRp32ULVKXcNC8JhF6zK15s1EKCXn4ox9u4ocMqvTT2gE5iJ7DNQiysehNum36EnK6h5pA1CzXiEWuQpzd6qRin",
  "key34": "4c6p5vdzC4FNx2nvKkESqEGS1jMs93opx6WjiMuN6GEAmPfkZeceZgWAUdz8pVfRpkDgWvRuwx5MfinmsC5TMfiE",
  "key35": "3DdFakJPsGJ5nurMMhNxYcQayeJFXKfUGZFs3MdJTLD5VDQqybCi7jKNP6pZ2g7jR7hFiEzHwwXAPJrrnG4kn3DB",
  "key36": "CtM9EEdjCRT8CGv3dCCWgEofNvY1BmeFGxTQqEcRY4aWG8iwAx2S1nApH6nnDuT5sFxXncFLY26zVnCLGov1Ccb",
  "key37": "J2uVtwtY6s4Z2Kro3zDkkmdvHFhHk2v67AE7TKkktAKKmLoAdWEPEtgcLN6jSFk1UrjiPzdwe5b2AWiNYhofZLm",
  "key38": "3rmdzqsP1LxRNojtvEhWwKHs6EfJd6rYJQPobMFykuKhvZTbJGuDurrKCaNxnYict7rqkZa9P7xtjN4D9Wgpvfn7",
  "key39": "49ozMKbpwRVabLGM29Hfc35i3inaCtSE5TzrbHoTgExG72DpshBHhqhmazxPsHrqkx6kTYKXr7fXjpXezR3zgri1",
  "key40": "5P5HrWZfo1wA5UW75BJDFVfDMY8fkFXnEVrrxbuxJmNpnBMRcwy4Sh8HKnYQSxWXWkKc8ZfKcQEXPDyvbbJAsNZt",
  "key41": "5KMY5dsRiiYJm62eeowaWBytwRLtBz2EWMABsJExSGux6apS7dzKhmEHbBwv7h7cLWsL925BtLPu2aPeNbQPkjg4",
  "key42": "3fHtD3JBFs9iLyFMXLSTMuG7R5qSuR71y22Q1xFdgQmvMx9HaiWsMhbVgPDHYgVdTC5AKUYcFvHqch3cRpkV5Z2g",
  "key43": "65ybzHgKii7XLraAEipZ4CcN7UfRUBUofZAei1uK6ZFuFRFMm4t3ZvfPXVsDNgkRe39781LXtgJjibVWJdBLQinj",
  "key44": "D5UQFY4DSkieWxKz3iqppyz4MaojAUccaybRUoCPbSVRkkjB1GcNXs5oe8vThPSbjDo4E1cephSoUs6sM5uPDt7"
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
