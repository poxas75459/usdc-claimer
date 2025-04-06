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
    "3nEMZvTK2FSrf7hR4XRYtPyKktEvWFBxyTnPpPcwmfw7jYNcV3USHMwwJC3zpKC31hyfq6Ciyo4Hbng1Bspo4L7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53wziZN1upXJ4G7RfSQY3qQVCAue49KLqqMt6ST3a3quvxfZKh1PnsqpnBXT7k4NJN9KRkiJnj1MpScboRQ39aLp",
  "key1": "2Rf5awQeWaBbassYBudH7rk1MgcxiSc8eTTr4sNPM2uFVv8yeaawu6UhQS6M4Wjhmk8CzCS9RW4g8ysaYhMm2BSh",
  "key2": "3MTAJC5Y7ai7tSNqLisFkZUgHBrKPcvguhyuSsNDzjUmrmPXkta2fF9mjKsUfqjNwAwBdoAzd6dK95oyaXDpbHyk",
  "key3": "b7e6wRvihdKGb9H2f2ED7uk1cBnvQKA5NaCG43umgZ1z84PSG6ETL4jLeN1eNgudb9TAYFge2Z7jGsf51KY9DYy",
  "key4": "4nBoQgaHuaeQBFK6GXQLZVB8omDGeSrqTYwunG2ez3tgWLEYmWYXBRWU8179J2ot6sKMw4TAF4mTvSpMt4qWif4c",
  "key5": "iXLd3CGBLBJMPU95XH5725EXPKq6bcxXeDXzvRioTWhjEHURWE3ahkMfDD4KUCQQLAsQiS4YhAiFpiFvKgycPnL",
  "key6": "4vyNQdauJJwcmyt1CtA27WBrSWyCoFA1Vp461cStvpBuXpptvsFUjJuCpwMTHt6ogDbrLtHTNA2C1BGaUwEd9g4o",
  "key7": "4bDs2G714n1sRLAxTTrLgRBv42pberxPdMHWKQysuEjcAWr2KSoWzFGhTTGvafptGC5QUyBPjj9GEkpnFSv6ogNj",
  "key8": "5hb8HyNJNNECcv6nav8Ub3v8F7ewcGpo8Kq5k69tivHHBgsgQN3jMLxSeSuAsDfgJwJQNubjsLxbXfuu97E9njyL",
  "key9": "57vguz8gzqu9gnThHRA6rR6hvZv1DpJ3zLT9s1VaTK3hWj5iq3V594EehP9ys1GFQtEzdTQkqaBSZUpu7EpfZEM3",
  "key10": "5CUPNKmRaJtb1fHpML3ShaoPyYD1nzbS3QnQCdmiEwtJHDtQ6oK6E2aLgKgj6eefANn4pASJwcEqUfTB1XvFyTsm",
  "key11": "3ANqcczgPhhcHK2PvojDimWAVJbo4ANDkdYMQGjBYhjntKTurX8s92wDJqiaqjWFo4pW8gCRawoC1XsmF2ix1CRy",
  "key12": "5HYLdSWdr8waRf9oreTJunqAefKzxjtc4dy3oZNseoKwD9CecMrgVq35F6642gMpLMuURNBrypAaAw1V2wPjpr4B",
  "key13": "3y4hpbhvmidXSUwtAeeEGZRD9gbRZZ8cbGtUgrGHjqsRGuVKB4YTnLsgQoXG7kBaoeWdntjJksRtwqKLS6xbdiKR",
  "key14": "5bqfGovqGFZoGMgjprYhvhUR52G6h2FtpnhwPRB4H63iJxpRq1S9J5GzrYTjaXXyUQfP3p26xaThkqTMgVWkjiE4",
  "key15": "2hDV2dEiydkQEBJZq3so7xPkFdT4dYcmM89FQPxdin7AFWqb1N9BwkjRcy27fSpDA5PQd2KiuYdz1wTxJQe78YbB",
  "key16": "TT2uV37M7eHDKAFouKW5PELafiAcjQRXoejFz9dxzMBcATKrijK8bq78pCdgKTmotfjTDbri2xaSsVQdKjGjLBj",
  "key17": "4BZjAGAwUksPAqkisQjSTxvqKpmtNujbGKrcEEFL43HAubFKkr5N7V6FsR1srGk9nwn75xzEg4aQgjwA93HNymu5",
  "key18": "3q3TBA6aCcBNteBU3LcL9v5qGaJTULdvRg1bYakUNAi5PkJxRofP9VC3QyyeciHGJgZdAPgK38gGedVokibekUmA",
  "key19": "3wVFf7fJKrGHDR5M9kJcd4f8XjrWZke7orbFwYHaACg34NEdNUriZ8XCzeDC43wFVdtZPDM68rVvXY91V6DvbP1r",
  "key20": "37JMBYnft429wJ3n4QXAAQLvbdBXr11RsinmDTDkzn2ZLAB8SRktnoL7ArRAFBbn7gLAD56Nbq6nQyVS9UQUbk1b",
  "key21": "2T52PDkByrjcWRsVmoD6kZDgwmxm1FBGRpaFmVGnexKg7FdFaXiXVad1HqBptoLRMpb9eBH8Ejtnecr4g9YVnPCH",
  "key22": "5Vnpqa3i6C1CYBvg7VchJLGMDuGsYm84wX2PH6yfAoybDtmGGkuV7WTFmNcfv4Bx5QhEonhQMriT8JqS4phu69fq",
  "key23": "3gB8ttVHijmGkjAwBDvCQd5wztcg3eYMLZwwaESwTpsfrHCqzR4FKbfM9PbpSdFZp3zR4udCiXk12Fce3svCq3JH",
  "key24": "4g9DL6nc7RSsQiNDZvU3G2BsJiKQeBW45jLXoT2ZBF1vbGjdT6QZTMJRumGnF2gH3GrRJxHpBQvWTPg2CcLoPvF7",
  "key25": "4hHLLgyunEJuoySkHg7y1cxdi7fscstxELXxVtH6BYyPpQ2W3zd2ScJAduccUiaausmkBQcv3m2YEe2jebViXRUy",
  "key26": "3Evt9Kph2B7eKnfx5HyRLnu4kqZcmWqsdT1h59EVAbKkkzupXv4xf8HxNVzHvodTAbaGdwV8UgwMYZ8Ww5ZgWe4X",
  "key27": "2GSpLVbuQTt9RFU6cKhH6usJ2piDgVtLUFmBVoyU4WJr5RxA7FRg8BPr2qJ8G8ej9fipZvwjEP8YqrUcgbjWyiS3",
  "key28": "4Q8C2Mv5M6WjhqEbdj6eFaQQFYEtNHrRg8dJqBTbbsyFAWT1we2HuFeDuxz7AADWa5xqJZGxxpbPYucTtCVNyPLc",
  "key29": "4faGGxJbVPV8hYNt1u9bPHywYT4rDt4eB4cr7umyGHrrhRZzdDJPygCMyUVrZYhzy44EwQDEiyJYxJehPnan2ZMP",
  "key30": "3t54AENqzCvJdJQVjeJ3upnZW1RvtsEP8YNConbBUBDEWm551eTYYMphJ764u6FjPvMr6V42fQCcAg2XRsQZrDxr",
  "key31": "5Vm95sW748PyTtT51ZTrQYvzpk2XcjhFUiMPpJutjXHSfULkuKMxKcn5HxPR7qQ73n2MF3czqDPtT2zq75HSWmve",
  "key32": "3R6cW2p2BQ3bDHYga1fLmabMoRS5EcQP8aXcf3of6jyL3cvnKSnMdbZTiYn8mHMjdXtsAy5NJHMWV5jQhz7D5xcb",
  "key33": "2apzUdjSUmKVJ9hk1zaydVgy2rcVCqe5wh8wJGAvgdHuSzkxtsJoFnaaSx3mDLYFKV82h6uvjspo5DmMZARspW1M",
  "key34": "2Gn1UPRUun3nUXrWrrkKEuLmTnKU2V3zsUWqwHwo8iZTtAbyZx6RoA3DuLvNEYyJDF1SC6cV8xvu5fnDM3eWaGR8",
  "key35": "54WCJUPx8wJZQ2XdETCrLkc2UMj1cAgoeFHtfne1f4RQTJrNU8gvcCb2cVYVXYk6Y1yKJaieCqL7TpXzLHTZf6uy",
  "key36": "5mopnW3x35cCBJdfqt2h2wWJ6mVTDdNiAwdjA9i5iqmNC3cp9UorRRTGLVbGejDkLwjU916qw53VKpY64YY4DvH4"
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
