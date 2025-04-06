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
    "5joziooSGp9DATVPxMPfqXMBNusxDus2jkRdeu2Fc3oHQzLFGCYsbeTaHtAsiosqfmu7AMvdqUmhEnEuxaumZAF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26E8mj78qBpgiCvvsZb4DDM2u1K6cUr5BRYvSczAcxdyDSPCeXLKwLvca76S3qgBuwp9QMAeaMemHGTSsZTgu8Hi",
  "key1": "4FBQ3NRpWUUQMgpbyLYjTGQUyM5dJc6j2YiJUffdDsv3QakE6J8ESXSxHj8TEi2RMYmGr3GDgag7iAxZGpgMr1tv",
  "key2": "5HMz7xoYseGYLDmnm4ExJbQ1mmCStb8Ve1pPNpZ4dW2sdqTAbPAvT6vQJ4xudbKU846vUQ5wUFdrX6MMMxGiYJDC",
  "key3": "4SRjqHhByEt41fxazVW7umP8QcbiTLNmNmKBQD5kHsgHG3aDcUtUmmh66pw4gceFLbBxs6WmYsa7Rr7bEqrR6Cnm",
  "key4": "5ymLqKzyJwjdi387BwvwyG73G6bg9Kot3MTT7yGtvpq9sK6zNSVnCXxxhD2FYojqaqAFC17G2DYKD37j6jskeFf9",
  "key5": "2ENqYn4kcvueDxgM79RbvdvXBgy2HAzq1LC27NuTGw1EHjvWPoyR2JidVVm7K1UKHHeZysfwx2cvNS75JYDjFzpY",
  "key6": "3ppY9uvQ4ohfic5yxUhhzw3rJfiqPpmvmpVP2UBcJkBy6L2i6NoyCAVB7CfbjAKe9ShKrLERZNVYBq7UdrppXKvh",
  "key7": "GzpWDsCWchFxXEuLeRmy64CnL5AXkPpVfnybjyQNhSsCRxSgCYfUCrfjVah4rXZDFDiRgq19Kyg6KwrCeFmP3uW",
  "key8": "2hVy4ZmWwzL7qmoYDEfS9gkfFPTxwyGuFySxXAxCLat9JcT3p1QX244SWracWtedJ5f4CdosoYYkGXWfAkZUw9jp",
  "key9": "uhfhijBX6SHMn2SXBnSex7XuUP6i3tcRzbcD1Mp1P2cLLEWFzsnMbcQTk6Nvv4QXToh37Pi7Up3k42j4dZUJyyh",
  "key10": "4sB9f6JixKAhuxakgJ5Qhp4ERUXUDL5x9nzv56QssXSGNmd7TGnyphNzjhueUjyuJyEtCBCDHfrVfygGuEot4BTF",
  "key11": "63dC59ZQnFxdts4xAjZBjSNpuVySuVKg6aoYGjaqVZ4HRTagLo1gX3Mmpe41ULi6JdXKSnzTfNgEDuHv4TWhC55Y",
  "key12": "4p9XjvHKyXK5bg925uks58CChKcrRMCLfusAJsLmixorYmW4E9iPh5gYgatCUXM9zeUauwwvprnB6tagjCkXs6JV",
  "key13": "5jJB9brobM7Sqhu2idxmbom4CZzaWiZ4Afk1QBN9yPs4YoFDAjpEFBJ7hfUqSDNecy9hEbJZKWZGiNF3GTGyHVBU",
  "key14": "c8ZknR3mtrsg8qrt7KaTPnyFV4u36LeNofYWmwJfMmah69eCe41BMkyVSoaW3k9kWxUQSaEnkTUdBedj1hzbyYs",
  "key15": "5SUFwJhUPsGtwwi51vriEpVRHKH6DTkSmtaNDgvMbcgZ5cZLVowSoic99BE9DpHqwtobtBztHUXJXf9QsNK8LU1F",
  "key16": "rwauX9i4BYjE5XftDs5ZWM17UKZawMSAwNno1ur9WypDhD8DsVQ55SSZ6tcXYfeTzUpA2jm4bhkhXhs25iuQtxY",
  "key17": "2nYPRowgU79CAjZFFXFpLuZ82L4jXwdo9NSv4E3cLqw81D266NXyNWp2eCB9gWxdjRmsei2VvyKFVjF2Nnvc4V5j",
  "key18": "3a57TQirwNyyStto39t17pdED8SLTLkXVwSvVMhbqzLqqPmEGFLmpBbT7fHjdx5bUAZ2wXEGSi43tG1RZmVvXQK5",
  "key19": "3XMTQbwiwUrFddTdPhwG8XJ7p4ae7juGkuXydUnwG3Qb3QUcvwUR1cGytGBMbo5fy8Q9zh3rCiAXe7hS9tC6wmmD",
  "key20": "4JEV786aq4gfZHuku4X9t9yeA2fap3bH3VTThN3s9CcgS6wpVsL8ztP96AvEe4SAr6EJxds4TiywJudkZHAHjaLa",
  "key21": "2z7q5xiz81CjdRGAKwHpGyVAyaEkfAHU9LinfcrMEBRLdAHEPjJBUgFDsmdqf1kqka2fNme4gvxiBazprHa55V7S",
  "key22": "iPRTtC8f2bZHKXcWN6dwTEfvLCVCTCq6mw8jUtxrNhmVoHdhrs5wcrNihdU56XtSEcN1EMtxoPg8jMFczSAYVuW",
  "key23": "26SJRB2Nwg4p9DF197MkzRDrkuepJx58BdjvBmqQNQoTN3L3SMYN2Vr1oqSFSoLYrdiutQCRUjHiQYyJYhAw3STt",
  "key24": "2L5Y7gKnKAR1SMssr1JwmrafdX7Css4fgBMQVNKUcuqbQGZr9fhVAmuKAjHHeL7RkpdC1PT3jc3eRxYZtknko47q",
  "key25": "4rGrkj4xtAAByAsSd9DvXjKJAtzose6QasPw2G5nHHXZPnAbwbLdkJaLUMkMyfL3WQHToqDChrxBtMAdfsDnSYaC",
  "key26": "4oT8uJ9WGz9eas6xbd8FrLPXjHAhPyb4fPRoWaJLyMudT9XFMFb8MitnBefxKW9sCzJ6YfHbDUjGBNocuqtVMJDT",
  "key27": "w8KCVNmWGJtwNnSUvFZFpKp23XYUP3yKZ8G9iz59HLM6NgnhqFTqALbwmf2LuCPkQU5KqFarPy6uzE1pWUvKUoy",
  "key28": "A4EJJ5Sjiqr7sgQJP6LENn1vvVwzao93p3aXZC5eqtpb2za1BM1j3TTCrny7W8n1bDUGhmhK9qK1C8boqMP1wPK",
  "key29": "YAdemFhRzQBbKbrcYrAGX4KT32kcDqhGsKJUZ7G4uUgo8MahxPa4Pth4k44ALPeAhmPqtSsp2hgQcaan9JNVwvg",
  "key30": "5k5aPuT4jQ3G4gXadb3EHQZmFiGTgPa85v8x32SqxcD9aSXoBr1gjfm9gfX2u7VGYoYE6H6NKH44R6rsiBu7svo7",
  "key31": "3NNdZ1525NGtbuRsutqxBQLwN28op6bZ2DkgG3XET1v3PGB7ktpT28vmz1Phj4MfifQr1v3BpGWUQyvsDWrHceLD",
  "key32": "2oAPssFsPJPp3cxcmUmkzwUWWUueyijG95994SjmoBze9sCywyqXqMGGKWCGxLNBu6Yi7scMCR3Bvm3epzve9Up9",
  "key33": "44zjyyAKHJv63YzwA1N5JJoNWiHDFeMkgb82eRKYM2QX5qqEJnmc5XVMqEDtsYHA4wPGA2kPX9vqnHGZKDJr4F35",
  "key34": "3NmrUUQBK45Cjd5dWtJveVZyVPBLXe7tRpXaDNgd9odeqWW1LfMQmgxZRndP7y8YKcbzsRNjj5FGb6dCsfBjBNbT",
  "key35": "4cmwsPwdhkm3PKoeJoe8RJYPybxDUc5MgKuhqrZaUra7MtHu1AvqQ6qJQ5wYAsfYmoDL6pRLw3NortyNrYQ4tDKr",
  "key36": "5wQcEFbSdsYAaUdJLu3farwmRzfw5RkDY7a4iKb5XPzkNQ6v5tS9LzrbN4G5gSVTsGfPu8AAHRMpdmZTgrvH6Jsm",
  "key37": "34aoEewk1Drxc7LA9WKP5TgswpZCB17gEqKPoZUA3zRPLePNc3jD66Vd4wzqEtUM8ei5tkHoKGFAJ8JcJThRH8Jw",
  "key38": "2Co4x4zt8WFZAYhTpi4c5CsArEVRNL6W7xBti2CALY5wyJeGYm8ANaDgqMQ3eundouvzbS6sA31qqLLnmFpTZ3wL",
  "key39": "5zT4HfBiN9xbQeTYnxhxBSoZucS9Pkey7WJkSrMfEns7wjLWrgp4hsDt6csixyuLKWABR4C7RXqb6JLYJvc1dpnc",
  "key40": "gfvYPvW5o6mQzxVD97WZuyVcQNDNpZTm6JVDmgfXLrMMvNuqpz2BBYVRpk3jRLxoKG11yHotHnwXBye8cKVVUFo"
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
