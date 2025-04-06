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
    "5dvuWW1MfSx6LCygrkGwQfbuLakmi96XnQhLJS8g5WwuxmjrnezXuABhgi2S8vaBCvF3WLwnhmCurpkQUqWjCd5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jd3dvgwqhWJhf3c7NQFqnpM987RCo2XazAyvC74jQrVgrW4YrAYZ4Hutjj76eejUV4w8r8DTWuh5oz2k9Zu5poM",
  "key1": "3RkBbvD8cbxZ93Eq4jc9rJTh51Doh5D2Tv3XoSMGeTAYnTJERgmVnJjBX1zbzAz8VejGnuX5vhxso9aCiXSsjQpe",
  "key2": "2taW5T53Q6Uy9nUsJXt5LxEsZUXAFoZXho5u7ojZ2GehJD1iQ5Dr9dXj19HbAL6aJZ6CyLPoY8QnF1isCEcN5SVR",
  "key3": "3eN9BiFAgEEbdrQ17n8GivaGTxWDAGKYhxYBUYxwk2UHcyrZkxqUbPEeJcd3v8hF6ziHZFMWCSE1GFp93VsM6VZJ",
  "key4": "c34iT4jZZD5gJGceDvhpdcBnP9egwjCp3yDDLvFSFe8SctteZ2RC1rQWLbY8f5Tkagsz3NWrc12abrNcDLdgU9t",
  "key5": "5vu78GyC45WzL6sPzdCBt7RBNJznWdVpe1HwoR4HYHWPHevyfxCZLNx9hmk36r1v8JxwuL6uEx4nA7AKNpDxYPM7",
  "key6": "2z6CuM8zJ5Z7t8Lq3ZYSfFcWVhZkDMi2arJri2ciWGEvWBBAX469Yk8JMWjX5JsQLzq4CivGgYgoWpHMje5N3CQo",
  "key7": "5z2MMBad6YYCHehTXB18LZbdgAazrN6x84ygb6HzZT4rL9AXyCvyjeUPErGfAELsnZECUDtfabTgu6GyQXgDwGBv",
  "key8": "53ZtTpLg3WDGn6NWyXkxVbxzXs4kEQHWodxKK462bk8z4rDxB6UtD9m8bCYCdZJAEFyQcUwMDmwM9VBw3s7hZ7jg",
  "key9": "3sdpk5ASSwrbs1iq2EDmVsczLkeC27WAnaeZft1MaPLVsiYTUDmemhyTw3oibkeG1msAxVZu3xmWh7ezC7CgQMLY",
  "key10": "2KsDRtMPK8XdqcsyBTTrwW435qMt4tWqfhVXMdjXDXNF4sy8tin54YFMeV9iQC9kqsawUKM3kaKiBW13pNeKq88C",
  "key11": "2ChWuoMBS5LKeduKsHW6AoFPJVhMR5iRtBshrpXn3EUBWrsujxpCdEuk3FqLdMnZdkGT3AKdwca6Ru7FhX9C8aRo",
  "key12": "3z8HxsPVuPX1QbuMALk4Eg33ymERAbrgBVEXhNRYRWW2Vz9Hirk72RNZurEqdgaUTUcYLJWwbtvERXpv79ZJrkF2",
  "key13": "62NVryqxasjQkB3aJmbudMDwYpFGqyzZPLbXV7kupBtGqJ4ZrpkAmAbQsdVuM8BiRsReYgVzZpJvm8mvVidvSKmJ",
  "key14": "x8ZNq3bCcWZ8SzQMEryvSxxUzrS8aWsrqz4LNz6cV8s6ybE1uvvjajtouR2n9FyfByJpvnnM4T5HZbY2rgreCkg",
  "key15": "3UmmNGWXFV6Mf8DYcSKWBEnf3J1t3ERwbVqKq1o5KEC8LrRRvgnZ8YdKTjZUbVsrac9ZjPDQ37wA2WBVBRsXdiZL",
  "key16": "2GBsLQ8UzqKb796T1WavMTqnpxBxugs799GwNi6dqYZkAief4bfaWkEwPmmz4YiCXgKcGmDEZPRQ7DuFmQWKyQT4",
  "key17": "317qHdzrYN1y1rVC1QYbL4ZkBGaGyhhyhrxquzPS5v86gz5Ub5Mt3T2YPz4Y2oefJozcEuD8RZwFTMyFy7f5StX6",
  "key18": "38WRpyuo46NEHkDKRieztJVnfbVfpoGxVPjvdaDMnU36iNw2G3WeJM94nSSG85JE5LuwUaBmYMMd5X71HGuKvcUp",
  "key19": "5RmHtMueZN3vzjUawxkci85QABmyMcCptyjkwkpa8w2PeSASaCzCrcLN2MLtu1JzA5Bb7rNRm4w4FLdWNNv7HRTe",
  "key20": "31YF1rWS93bzFnxJQyRQfZCrVQQ7FcZoHhxo3WdbnuMD7EcL1CFfEcAHKePZbn7Nanbd4paYqmfBTMT5E9ArteGj",
  "key21": "4LgmrchBoqSzsAEA6ELgKAVa556q9k5oUZPxr3sVWvuYHNHDEWyVBKUVprZq7pbScGqqBYi8sFwfqXZQkmVjLPdd",
  "key22": "2HeHy7YdJU3UamAeGMkAJoNz6DT1Sc8zYXapMXVUAhDMwbsY9nVP6LdR8xZDXkDrqbFXGZaMVbLmFWjwEKNSZcTw",
  "key23": "3WKdARPjBzUgXJrmNCKsh9oQHU8rtgPSRJiV8jrttM27JAsmL3TsQprXeBbDanz6RT68giLs2D7cNitesag5S2B5",
  "key24": "4jQ2GhiquXJpKkjkbQdwdEZAUWVRaTGG315EV57PN2r7B1V5nu5MvFHWjkEtcDTqGBfqHhV5kZ5frPFLoiRa3ybh",
  "key25": "2Aq61ciXyJ4jFyeFdZ2HLxtFpESBsYTq9jtF1iJ9t4UJS5rfBZquX1NGwPofpbKCjY4E3MKtn2uG7wCq5uedgALY",
  "key26": "3TJfnuyx1izhj7JrtfVm5NniJVCJFPiKxCVT1Den47AJC4ty9Dz6e9EcTPvr3tSzShdLt4MnA5cPJLTVgQgDm83H",
  "key27": "3gcst3oCLTWyMDitHkcfy9SSX3HiATfXTss2rb1joqXBRwEri19dPmPtvnS9sh9fWT77ivUovTqqYiM7WGCzdxiF",
  "key28": "3ViJap1orXpqfYW6sCFxDq3i4GrAz6zsdUr3a11RAcnNZKXfT7L1DK8uAShvvL71cyeoL5LvD1PjtzMxioSy3abc",
  "key29": "5RtJCVcT98zrmFMDzkroNjiK6yfTpe53qTmLtnhx8W3EDJop6kczpycv2WTzNTA2w3VyRSJLv19817kKjD729i2M",
  "key30": "4HXhaKzU5vLHuzXimW23Vyfq1vk15pEYsKUf2PUqw6En5cRwb6zqHutJ1qB6MZcHhJRCM26gGERbpkSZX2NH8UmW",
  "key31": "61So4uzTDHvNeFyDJy6YauiFhTyhBVDhVPuQxDkWK9HG9nmfnyUVyXjs4GZJxAbLNYPjdSJ8FzbLcMbiybaZP5Pc",
  "key32": "3phRvdKDBEcHg2BPsEVzFH1iey4VJnW9X9PQvMnuTh6MeYyBWoZQiU2SKx4bvBj5vBtoDsVFqLRigDLq4hJmHCbx",
  "key33": "3xHENoLNVGAmZ7eVxY5zccSQyoMZP6mYk7XxWamRWpV4KKLTmZYgq7v6sCAK4Z1W9CLiHNBubKfnJqNToQrFgh8v",
  "key34": "4HkDB6qUtk9v7yk7wqx2r6Y3EsGNFVyugggeKcvou4QAzr2NhfHLLMVzt5akidbBTTfKSXMghda7nS8gZ2xcCiaa",
  "key35": "5TKsL5tPksLzdkVTJRLUTGgNgZyxMEXKQWAGctTdmTVLewJj5LrR3hDZGr84ifqZF6Pp1JZXSr884Pgmi3THEK3S",
  "key36": "Xfk74cTF9u3b3RXPgRPmcp41Pru3Gfh6ycBKBxGcAQdWDK3ogLGVE6TZECEUzXChDNMaWFuM9DzYrC1N2rnpF39",
  "key37": "usJGU2BcCBJkWeZwspCUGWRuUokCM6cCXrgegwCH82MwVeXvNiLesBXSLrhbJvtKmF7V33s6Hpy6kzazTMfPmVA",
  "key38": "65iXZknoUDAMeGcr9P1o7YMz7bVXQfkXZwDeEUQhs8pGP5sZ93j6HkSLxfoKGPew52kPKunUAzrrSzqm6voLZwzz",
  "key39": "2wLVVpiRuQtNFSFjj47CKKPtbNq8g5MWSDVVmwdKUsnPLBVF6jwDXSeHuERPpv74NDRP29feyNMYcQKQx9usxHXu",
  "key40": "4GNGnZDA4pUY8y1xo3h4TUxbAajrHeGYasZkJJUrN15VTta7ZHz4vTcagLCokfzyMGGzm2REpPL4hNgQHV3MoMG2",
  "key41": "XFmDH2BiqaDMWXQWf4rTEFBkzGMZ32pXf3aX1Wke8cYjFXekyM35xh6x4p4LdzemCgRtRdrY6xfEBai1jMdiEWx",
  "key42": "2MTZKcS5fTgRMfDojs39JPzfQ6FCUxji11D6qUmM73mN7EF5VfVN2q9qpsEK15yeRSLXb4pgg59B84cLbswBVUoe",
  "key43": "BjmHxSEA28ojm67Uk2iBjHdvaz6YMkHHNqkvQHUdf59H5P49fdrzE5sp6Am9q9QZ3mLVAwfJdJzAg3VTqtGqNCP",
  "key44": "4TQxxRtaggLGhmhmihUveUrf7o3qfT3W3i1jYsE3iVMDDeXyPxbPKGCxJvhN6uZYMa96cqohdoeQjnrtnuDy6xNq",
  "key45": "2ofSgFZupSL3rqQuF93PBmh1K2w91KLypQpG91TuYFZgAPz83kx5y8q7X9EETWJ2Ec9iAgwMLJrrcivfdxvw1HqK",
  "key46": "5uwfMr4s998xLJgAwPxvQwk246468YqdQE7eSHsDNhNybUKfVuiusU38n8sdL5nEpm5Gf2bxcKhCdSXFzwj1SF8b",
  "key47": "5DVxgdviy8eDRDH29ag7Qd1nJeqVR6usJNbdevBAtX5x7GvNtaNFZoQox1afaZToeqm4dAwajx95DQY5RMsQurtQ",
  "key48": "jcWsst4opy1L79tR2B2MmtXxbVTs81Yps59khCdqFcDQsurqXpPAfbFRgtVH2FLpQBrx8nMJ9RMb5HVVDs7A4S2"
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
