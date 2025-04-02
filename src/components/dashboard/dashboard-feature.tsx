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
    "5tS4zUe9rDzh7k6xPY9pQKvqCNQsidK9uYM7vSk4Hkrfn7ix6xipa8fRr5meWipAjkjG1GDbXkKAhKrSRuQHScv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBj8okugbDAswXWJqpKJdJjVNGphxDk1heS4F7jvAiBkXiNknZjDy2nUKwdMbPSPBL9i5mHAbRY8c8GYzLEyxiz",
  "key1": "4LFHqqnor7MsdqEk9JQqqWWErvvzaNkXaUFXjoBCcHbjisiLQG7aRxqKZL3654o2j7U77KS6ZMSzLe1DHrBP7Ajm",
  "key2": "3LxwEdd7rc2BekqsX7URTErEcHGiEZCYYmySNNjL6pzXxnEtNsCCF8NrASfRkx3BBmkQUgr6eVrbJsbNPe5yqKhu",
  "key3": "oj9wze2E3ta3q68Gjwqzxz7ELuugCtBi6Utzvx382Q2FjmKxWF9k8Ge6M8rBnnfcgyvgHkhXYpApg3MMK6CpZTL",
  "key4": "xCVjvQNFitX6Jcgazxd2w5PErdkT2cwkD3MJye4mv8fu6zjQkcNic7JES4mRphhogacGcu6LNikXhQoRCjYiS6a",
  "key5": "53vYg64j798TKnSouMk3dszb5haUHbdRrnoo1hZc7LScXmz4H86CdDfikEzWnKYciBqD8anW1UbVCeqPX1SMyUWy",
  "key6": "43BVG4G8NvJo7jWVEucJTwbWJ5pKqwQQovyfuiZeQag4UPmNS3hySQFRei95gNKh9ik4jJLM1cs1HeGkbeZAFogn",
  "key7": "5848ieCoeFm3CRNXbWicxyd3RUcHuLkbxRrc6BK1Vfcyf6GeEF7ksC5WGVrWhYUP43d2s6Ev9Qzrq7d6M75XikD5",
  "key8": "5WQwP2TCrxym1Fyw8WmgisZ3oNPzyNnyGmwmG3yc5Ak7NDN3NdcYY1iEufQ847V9Gjsia95jo9tTmrnG2iY5Qr98",
  "key9": "5Bi8DHU4XvxeedEzoud7yoiameTe1W6Umg3ztwBrKuyCxq8CxM4keU5RuVcFydVFfzXqfUGBCAYyUfMxAQbMLPMR",
  "key10": "556GV7LeAMXpXmaBe6ETj12W5Az9hv1XYfQSW64JZqDBvQPK9NprShpGNPMACq1m54pThe9AZ85T6EqcGwHfHkbu",
  "key11": "35Ti2rPe9gZUHSAi8h5SKckgPkt7qYrYY3CoLchyHgesvhTgX2fwqR233ENsggVayFigmMM2NMDis6SLkegwzkfS",
  "key12": "4jo1Xe5NDC22jPR43mEN2ZERzNmPiGs4yWWLpeZk4WVLyB7MgZP1eqJyB359MRuSpDMQaxV7HtbiXHoTYZT1fSbx",
  "key13": "5QbSS9Mh9ztuZpy2ffEowuWr9nXEpxNbEaAVkQpzGKPYgG8yfEwg4cxhBnseQsmYKvQpk3hKkSToRQQSwZEyJoP",
  "key14": "4d1ZYz4ZAMNoUkqudrnBVE72SFGdos5NPg69q7mo24zuZFcjCh5w999X8CrYeRQy5WZ578mW8Jg2KwAfVSA3EpqZ",
  "key15": "CtQJq6Eak2UXbK4ZDuwb62DK1gcMuN9FumyyHbXRQAKvmctibZktaN12rphN2M4E3KAtazWr5R5Mg43Swogqy6P",
  "key16": "7HiGaeLxWhzAPBegbQxHcFVWiTZhidUj4UEtsQpJ7AvfhuohVpSER2i765aisDe3QCByuqQHQzBHpz4TS1nt6rb",
  "key17": "4PB6ySnjpYECfygWdEYzf38jjRTLk7cT6nQum162BUdfPowtavn6em8s1VKYTj9tKkkj6DZASJyJUcs9SfQYkSR1",
  "key18": "gnRFpnhdPNeDxZeat9X7ndQmxEaW8X3ak7gE6BjZRtk4ZaMpV7hbxSkZPEXm82QYsmYL1BBoijkF4Z6F93BP1ud",
  "key19": "3PhRXLeUrgQW83FdXqPke5dYMCSfAHXGv2NNQkYJ43rLfo6aEzueVqzK3gh4HKqy4i36aEuL6AJd4Huc4oHPxSQZ",
  "key20": "5FkAbvRUPBCvGtGYibwpgAvbxEvQNwuVVereWVWPW3NGhNZnwuJMCW9dP8Qv1U2qCPCmyKkbCkWMecA8suNmL31U",
  "key21": "9Qpt8YyDVwD6cC2CQ4jriQwXbcPyJAAGVEP2SY2jcjC9Y3epnWtiEdZrNjSvem2e9NXLE3snRmKnzNRvdcN4sXs",
  "key22": "4mcry5UumYpdDzYs7MmqpVPR5mxysBC2HtMXmnaE4i4gos41LL65Hek1fVZHjjNnk9Wevh8MzPynbob1nxssxbpV",
  "key23": "2ZtTExVQS9AUZVUpWdWRs2H49vnYJ6e8Gbde35uBoQy7Erci452GETKdyhk1Eyozg4Uw3WPfiL6noKH13QBcVBwD",
  "key24": "32QDLUHeLCHmQTBzbiNoki7oREXEJQjiFRHx8qVm8yNmQpkEjD6ecBagAJ8jznyXCFP3Hqti5KsPTWFhvRoTV2Zm",
  "key25": "3EfZf6XwSUME2YxKN2oau6EwEvKvqVqkThTdigyTeeEGYrNhKNNraCBoLQPFzucR9CGTZ1sLijaiHzQ9JP8hbmKK",
  "key26": "2g6PuF7wdVXcF37FfhgWhJXzDrWQvGqqswZTqW4gTWUmLuKweYGVpH2VXvr7GtQ74bJqpymNZNagEjcrgEJrzJRN",
  "key27": "3dpe9eNQTuuBRhzLpUpHtNVyvYufaBee495vcT9SHrWM54QUEAxFqSx4cZhLiP4wdzFf3AgarzRYjji79jkA8oM1",
  "key28": "5gxQao4yoZqxeFu86piHFhRgi5XvVAZHwz1Abuh43BJZSqibVUfNqajzormzMQvSnHsAUM11eQTPJqxSSnKZtmzt",
  "key29": "2fCTctt8Nobpa1jjxwRSSzy7qr9mWTCmAL7zSBbhXfcgxC1CdcRmKmdaMUE3JT26kKoANQJ1PFtzMHyEHto85MDn",
  "key30": "4xDwqRxdDTCyETNiH7XEmA18sWTwfGeCuERDAE76CNS3hcLauSpZ3FSn9Kfry5jmWxXk4Frx3hZBXbacmuZR2yBW",
  "key31": "2fANtinMVmAwSPnAuEAMSdUVxH7JpbpQwBmXTQ2SykDXXC1GWEYdWsnJHj4gZ33DsjKexGUH4vUpyiEcTi7wxPgo",
  "key32": "32y99P7R7rqhBgi9FwzMcqhNV76K48FW22YSegpDNrCVrYUeCjJC5eTcRfQhDsChBMijEj719FowVacDBokEYXBb",
  "key33": "3CF3zaQv1cQqByb5XtQ4hN6beVztbF7JR43ghjc6GFZtsLRrPB9WedGEteTZbBr5GCStpTvL4XmWu2S8ZGQxxHe7",
  "key34": "mbSMgnBionBxRich4TbiQJGsvaE5aZPMoT1uHZNfAFqz34qppL7dRB9uvER71cnsx3ZqSmynkjrNiNtA5Q5h5Bs",
  "key35": "565VWRfpYqg9UHQe6msmNyxUniCU4Nr6VUm3wLGLFJEMqvrd23n99nbtBEepiZSS78KeXxLsF9U6UKmBjV8Me4tX",
  "key36": "53qNfroWrTX4rpSW69wN8CmKkuKfFSkJN73EHCc17kEVxcU4HVv4ccSWgSr6mMyEsHnnvpGEXLux8wQRa63FUNhi",
  "key37": "2eARZdSQxBxT2BAuobXRVXZHP4AFmDmW51rmgzZkBmQLbGQ62PaMLCdqUKwWcUn8jxTZWFTkuTtzcMXrSB2bK7ES",
  "key38": "4y989AK1Wo8CKPNUDhkiRjtcQVZRtc9ibFBRgPE8SWQhbv7SgHNbD3hNvRupezFtcvYvrae9jw8ofBwnTC9KLjiF",
  "key39": "24urMnVNCF3Zix5fkNriRdjAxQVb78XePEtsfrLkK9U8CTNgJDBkQy9tN5crvQM9jzpzFUwkttux3t2ZyUQq5VA7",
  "key40": "61Uni3Vtwciz8qUdZq8tF1aPowhA254KbDfE6nSLHoPecGc3DryKq6maGxg6hVsZP9HfzmUgwyj1VuRfbkKG8ETo",
  "key41": "3ejJS9BKfH2Cddykny6pd3vmaiJg5P4ye5ytRL7tudDMLNerfCz4cXNbZioYNCcuLff3W5wXJJ2ENsWZQwUxieJv",
  "key42": "5gdAWU62tedXuSz8b5VtQAd9KLUZ1TXdUp7X52ySEHdFYRHyFU8oL3HftHLh8qKGNLCzZ7RHXv8QnTdQZKMrcmzV",
  "key43": "4jYS39ons6LF6xqFhFVmU8mssWAnZSUqTXrJyNu5BPzggGYFshV1WfQn39UZZ4cFJorhy51HGzemJ9b4byNVhii1",
  "key44": "3PTJGhDMXGCaQLx34v3wtQBGzXfrrcMnZj67fEpWGBC48wY31dmt4Qpa58iVDwabJfrWGKghGQUjAzewdCdzhvF5"
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
