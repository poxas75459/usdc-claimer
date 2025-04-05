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
    "2DGto8UFKAaBXAA3EWNKj4stkW1PnD8q4j1MeKNmh8FfV5LB8E8vgQoEBptm8PC2WwrjaVA8UTwTkSQUJPQcg8Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EaD9FEpdUbyBN446str8nbnhZCut86TY31BrGaU2Q63SLVzQ7sSSTcq4CiHrwBzFMXVMXY3Vkqf2w84RyPf5tWJ",
  "key1": "5rcRDGg2gqB3PXKiRRezSBb5zwBDM8RDBW7tcssEGz5JuEBshQsXhVrRpcCSMJGj2tWojK7QmPzDnRiYFiS9Ugis",
  "key2": "TTr9VM6XLwvSsgyG2AqX8T483tYU8otJQi3j8XjKuPLdE9H2oVGsSUhdPdYpmAcW3F4R8HkGaKjkh9MmDGEV8ib",
  "key3": "4LoBTt8vUzzL2UAWCHSzABu7zzfFcHhwyDQAohn9NKm3kHBYrghk3HenLqMp95AotrbZeguGDwN1JzCiYw1gYACn",
  "key4": "3Y6bKMh5ZAwykvMPc6WvZcAx67rpbs7gw5YfKXzEV2buZ7awY9QeD3osyPBwTKorWGq73aqAy79PzPyyqBq17wNp",
  "key5": "RzYWMo8RzAzzyqDQtgLFVFyHX9qWxoWSfBRFe5jtDbDcVeEAzHW9cEfSikXjPajXboKFRCrBYJKgsUyjt2YB4wu",
  "key6": "4CgnBUQEPoVr27zFWUp9hko82ktLyMd7DdnGRQpqJCunCQzzEvx1fkda2HDbPRsJ7svNdjWdBSwcBRo45USfG8kn",
  "key7": "51WfgiPCNvGHuLFpGSStyQbQZK2gftMJfX6NHhRsMr9M4TrxPGi2VwLHhpcPoucszcdCDRQ2E6W36D5Crfgiwm3N",
  "key8": "3ygzJLZn8M7oCSPnPe4tWhJUvnem9WFro8aFzt2ZkJ6DwtLesUggspK5aXWVFxa4W11QM3pDVcU1mUnkyGRgNtHv",
  "key9": "2mP8ptp4Po2j7ZDEc2mZNErdTwKCdQAheEo365mQko22Z5P68vowToqz8TM4edma58hH1ggyckLvjqGVQuhDNL4K",
  "key10": "5Jztfyf3hHN4yArHKexxHQighWSVo8SzUR9wsbubPJiuidoHd8Fq51H7m1btpdGKCSFQL4BN2osX4oWESa94jmeS",
  "key11": "62v41E8nVqs4b38MNVCs88X5oakCzFDQU3hKF9YPV6fV3wz4WdWvuEUskaemqrXNZ6hLXGsSvmEdZvSYw7Mixzz6",
  "key12": "3hgpbN7gN7F27PsEYz8ZWVAB8JGowYziyaVu77dc7fmS2qYwvwuEQFWDyhX3oUnapZc5DDJkiaa9f3xNNdE5xABA",
  "key13": "3Wk14t2Te9bum3dpzcNK89JrSfz657jpLeZFCo6QEmZXhWYr7oWrs3mv4SGH6digEpD9SfRqHPVLaMrFXkq6Z5pF",
  "key14": "2ZYemFZv3LWdXDkzDgRb1kqGFeHWTNDw6uExaaZfjzeyFEix1kTAV6URJizcjcVbPc8xtLnGBAa9PBfNX8ZPDtiU",
  "key15": "318me9Gr25mtMGbx82c4kUuNKrZfer966Nnx3Pdy8ByJTQEwSgj9F464Xa5gKxkuYyVqhtSYe8zWHGh7kQsPejpW",
  "key16": "5b8dWMafhzTipmfgH7caefKBCDGrRRccd7Ju2rnxTAJRzASf3BaHD8RfP9bH3nA3KjGAU8Lo9b3Kmw52xWbuMTd5",
  "key17": "2onvFcCTcy4BLh1rCUNmGncDmYfg92cPUwBWSUAnAVcocZgLEh8nfd4w4sPK6QVmXTVceaWqTxGRfhXVx1Yo2sfz",
  "key18": "4yvqSLyJR5Gp6HD62ovYLd4wNCCauyKU5H6pAAMWaD5FstPtwNySCdHZRz1uNt2CSVNfEDnuL9Uwoq5xj6TbnkDg",
  "key19": "3zQ8LffJCAcGeTVVrZCVfMqxiR2BG87SH9DaY7dyzVg3y1oXJh8MdceT2TdWojZnQxcnqEYQMZPJw1K7y7qjpXcu",
  "key20": "wsey8dmsuUhqAzT6iTaVzd5k9e26BtiMEj31BKbWRv4nFuqpgooBoatXatarsFX6AubgMrkLFq1GoN4rZ5kivWM",
  "key21": "5jUNfdGcbEerYaSqsrpBBi7UAHXuBWBrj1jpb1mUfDkqcZB7wXUsy8CGTj4j6LbDVUi15eCE3sBjA3C8yNhZECQe",
  "key22": "32QD1KQM9iJZg9sxST9WQvqF3kuazPXhnPxpTSGUY7S7Z4aWMoDpqW1BHPkv6vyee3BnXusyJsVLvPYtH3MKVFsH",
  "key23": "4csBSdhCRsyCoGPXmk35ZaZJKB6dh7paf9fy8beDqhhNuXTTQDChwM6mzjEMFUCC3WcAXCHmAeej4NfMpKSntCW7",
  "key24": "26AZv36sy5qFrgvxo7Lrn4M3vgwMXMK8ci6yoMWwPZuRV3Ze5q1tEeGkm1q88B5xRe1nhL4ToU66txcSX8H489Lp",
  "key25": "41mH9i52PwCua8mmJeQFFkMmuMpMzBzn5gGkRVqZfNBgyDeBtsLni2V8rS6h8vSfRa2EE8Q1Gu5MNUifNG7nXN2c",
  "key26": "3fYRAKPdeJGKNKCnre4fiauzwYWoPK8sPvWCKc6RWNaEb14zx4iNGNQHAdxAGhhQfDPSDDhjA4aWd1Tm11Y2MgNS",
  "key27": "5bmShUr76M9Nq5yncdz6zFFUUtBNCLJDCghqVWyA3pXK1vMzwccpxbsJzJD2wioj7cazU4ZSWQ9dehzmrETAwS32",
  "key28": "2e43LMkMmjU1uwLsUb47N1QSRmstAtpATxPW1PvKvdmMo2fBZJVwPF2SigvcRWGW1V9uQJxUS1gNbFxXJLoCuxjM",
  "key29": "4ofWTztSVDNMoGEE2koLy7rJdFrVLfXncSmosZUs5tP3DFwmKDjXu7wuzjLy3YpSTAd1wtnwLriSCQjSSPvJjEPE",
  "key30": "5iJNdJJAVT2SqfcQZLccqkz19zzxojiCtAeq45df1jMNUtLXrDfM2YLUpSapsAn9pEdpHU1bvWyGnDH5Pi4zgegC",
  "key31": "EwdggLn4nA8kYaoGHwmyz3GLQjSz1XbcKTPa5xo5hZr8MndRHKmHwfRCqJywB3Vqm4toYzaeGN7qeTNDGzKnrmo",
  "key32": "4Z19deVJTB1dYy2DdkR8fscsJnrYpeJ62nh4iR7uCbMv25k5jCMVeidNLVWfL51Mmhxr7rHFZgyPtLjnXwvej6j6",
  "key33": "67Qit3WCTRJRvRqgFZjbzM7jdBgWCWFjRs93iobmkXr1Q6WUBaMCaGBQ8rU26T477zRPCuDgCZQ6b5ciZrfV2Wj6",
  "key34": "29mD55wvQ6AwT8A9S2RGAxStFd8BpfREJaJAQkpbF8XMrJAjYREscBBESLr3TQcyis3yG2J6FdMm6VrfpYLJtsc1",
  "key35": "zxjuNg8GZFTuiqiMcjuu3u2whxXtxjJfBLwtoJb83yKJM1BdyVkL4vE9s9uRvTdNHD7bLG5vqa46XR7esmqGK8C",
  "key36": "4LS5ydJD1y43jsNUxfrixKD6MeNZVVKU22J49Gcbb2iwBX2mmJGdTNTJ73VvryDpj3Q7vvN6nQZnXMbRMkjmTmaX",
  "key37": "5gXJ8qeHBXswXhK51HFV4R4wf8JVZkdURxQYNEFoMKbUJDw4qsaHWq44mEjDRhJtxMorBzgNM8i4paDLaPE2HScm",
  "key38": "5LKc5FHMSgoxRrjXtfro3ULiKkrHjqqQn444NGpZyXYf75a6PrkTALEGKtL8bQmdRzTWq2Vre7f4ZxskFtVcgerh",
  "key39": "5Tq5tEgZjgYN5qcqBZNedXSqjQt11mY5KeniZmPQuD4bZHb9SBTLjjWp8FEuEfWj8DMh4shUvQK6FnwR3Vyg8qeG",
  "key40": "5rgcq4feCYrB6xK2NibShhGzxA2WKcjFCe2CkZfpFJn7dv9JTUP8GrHA6CwLdMzcNbWaeFgcZKyCwQmSfYKaU4B3",
  "key41": "3HNZsxGWrTQRGduMaw28hkfhkF9ZY7NLQxjnZ7CeYWq3614JfCp2oAPhksTJk69VegAm7XiRzjDUN8bC8h6RADeu",
  "key42": "5hRTSVPEcLD4vfdgejiWNkqovHPXYkTAJJSWRdqJW3eFwbeeitdjn9HczEFS863c7L4Vb72eZL3E97TE11vRsTjK",
  "key43": "2iUqBVT6YJUbuc6B5bftQs5vYBypioa5Qbp7fo2FQajBz2T4AJDKjpb3UBx2g8pUfWnp45Np1EaL37ML1EkBsK5w",
  "key44": "cag8p5PFyRvFTxuF2RSS8csvpjCgNwbazMrEUDAtD2mzGAyBsa1id3SGt7j2aDF8s1CoTbi4MtkwjKmkiYU2D9v",
  "key45": "2y71uLX4QwmfYqcJo5LMSSwuYbxVtqcKzKvjhWSSDFNfTDSczZxMZxzbqog4oCaR7VA5npH9f3zobQtcjkvtbRVW"
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
