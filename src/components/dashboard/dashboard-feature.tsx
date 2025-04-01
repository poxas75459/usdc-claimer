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
    "2kzkeo5n3F5DHeyDZz9YbvwXc28TZL9aNymYqcYYgZ34scCuDEMmkGME6WwsLa4odZ7S8TZvi6qbo7KqHJBb97Hp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8Zgt77SG6XBHrLwH919Ca1oF3MNoYsRko1ap6sep4fn5vB6yyY98WGw4ipRE67Rf737LyHP9m9ucqtxrPHSqFF",
  "key1": "4MBgXrT1pMe9aWsWawR1sE48Ag61Z9y94J9t1MbQJFhM5eqKFboe48L3jCWYjs687F2AWsVPP5pFzFcmKMVhjtt8",
  "key2": "46qYpUU2Yt3FNa9pWtA1UZP8xSZiZ3f4NsrJPvNvRogeLbRJ6Rrw4WQzGNEvZs8i5VUa83P2jDQZAS5ee7TiDRQt",
  "key3": "2Jf3RaWuHMEJgbxxwMMkXLxTk9PAuQZwMBQ51kkq5E88nA1qj2XJ8viDkx1PX79wfBttKGZENjWh6weg33hPAWBE",
  "key4": "3gSvSQiiRm3sGtg7C8U4kAuwrYFw3H1fVqe1hvmpcyJfG6xBcKunMrWPcZC9etevY5uXr4jGSfchgRF4HK4LbEm6",
  "key5": "5MPEz8BSs9KkVZyQALQb8KpXguP7dMQM9m39QHzAWFgbjcTPnk978K7bUYEWowjG2o1qzazmyMN75NW83PhjM9r9",
  "key6": "2TiB3nJcEs1E9bxKjfPTjkecwJvLzRJyR35aaTRvLXRfrm2mnhGFrHGXf8ApXNzca3G7yGg4eDQ6qRFG5ra8Wkkv",
  "key7": "3WnBCQrhbhxRsGBANWBnTvsAx9LBxHBFJiRUuMNd9U4rJS84uNiwoNCkzGtmHNoH18RmJ3CkG7P3pMsjHDgxiNax",
  "key8": "5Gq2hb6kqFgXrRtmtxQJgQzNWaQcqR1oEaWTDrkh8SB3xXK5naTmqA6Ak82hVcF4BG7E6JirYNjMPnqeJzsgGDvQ",
  "key9": "5URckqN9MdL2AbxLR97L74qQM1N5weM5ooxAwjXBFR77oYVePoNy3K7AgYGre7Druoy1cRCLuqUoyAVwJYH2jhGC",
  "key10": "2YxfmiabHpKhsbsfy1DECGnyWx8YAn6myvsAD7cTR8ez6Df84ES9saAUvGCb1zXwnK83qcB3T8VBj5z2NuvtWKg6",
  "key11": "qaMa4vjn9YXnsRwjeq27aaebxwabAb7NYyKRQNkB6hnE5P5373YLSdB71ieSehJ8rPrS41Atq67pzBVVG37dko1",
  "key12": "5PPbpLgHzHbFBJ8iHesYPCCH9fMuuzoDVFKqgbqwp4uVbQYRMfhUc6iFcxyCUTVMrPwchwtPq23dMmXXZgrxxWgL",
  "key13": "2exDPKN2Nr5qUsPW8BgeBkasmEJLvo1LaMC7Zkn7peTPvtWyq14fyCHxMq9BSakTxWbkm48CoG7ijEsu4ViHGnwR",
  "key14": "2vx3fZKa7iC4eHBqVe3ocYPu6739aqXJ3f32mvi4ig6GhZimpz4UyDP8PeMmEBZ41bfsKCJSDRZm7idRqZb8oD7w",
  "key15": "3W3ug4gXDKaShUmV2euAWMthnbLdMYRbqGAF3Fj43XeVm6NeSkAryj9VJP1Uof8NMgHskurrHhzANspaY2SbuyGo",
  "key16": "2eEhkWUgioGEo6YqNcsjAy42HBcr3HaFaZMhxKDaoVyhdfo11nECotnqQPHR9LkUQ48uDkn3buD9GVomPWtaF4G5",
  "key17": "4eqsZJNaSnHJeYRKmMAe3R2akPLmtsvzzPcTEBGY6e925Nz1KRMJ2wMaNw4chg9ToGdwByzxkzQfiJe5FdaYeM9q",
  "key18": "32KAUFgQeWhA7du3KQsyfD8fmP3GNTcjLGFeAPrja7qYUA8vfW75xqpeyybeSvQcSaYXnx6F9TyBoiCWmvuZnxwB",
  "key19": "5uVBpe4NgF8mxCidh9fSaeTodmEiepN4iGWor5nxkPcyaZQxm4y2WdhewSrZVg4sbJLUg8TQRVMa3teRwaHfZRuR",
  "key20": "2xmJEJ7YKWenGHTBf74hdd17QE7sw8541ffFtbi4WFsFcAdFjzwSqY863YyNCseUmGzkxV463ysw92DEKovHNwqM",
  "key21": "3Cqu6DYwr8J6USUfhyJHKJKsKvow9hj3NxzW2j2iJo4DyRx4YsQgw9n54V38q5288rR3dc6UMS7MEH2L2DEWKhcj",
  "key22": "2bDa3baFkh1ywpbGzhjVqpspd7DLtVSxt6NHhc3sx6wH6kgyDXWTKq79vocaJb7bUXMudu4YB43r97ptCoLQy7D1",
  "key23": "NfnUDeLwovQwkUtJukZ1AcGQJBRvocnCGWnDhJfYgtUEahquBfa5R2kpdq8ThttbRof6AkRmPNENxGg28Q47sdd",
  "key24": "5AiodUfDBRHzdtz3pQrEwQtR3FaNJUupd4n4nLtmA9XjYEKbE7GtNYCsZ9LMTb4vA2zENn5RVoiHNMR6wuFxhnEF",
  "key25": "3dcpYoo5HgAzycuqnMcFqV1qirP41n3mep8oH7ZuR3XEKfGNYbUwR1zR6nJZsKYhyiWRR52YxAsNRNnrrKqy27wD",
  "key26": "NqtKnWopbG9BXBCapp92fRoyKxejF6tTWveKMtStz9875jQcBvYAjcJmhMJHcnXtdq9Vcp3h6zBwBcygYpTDJT2",
  "key27": "7abPRMZGoA5AGHt7dAJqv31EkJDLKviCqmZBb89ZUowtePe3utMj8sAfB4tcqHbwzRhSVUnyWC4RRr887roqiir",
  "key28": "3ZQxzLeC9Msz2CCKwXMEnmmWHq9PX2ys1VcxXuw1X6N32FbKVQbfEFnGH2VNpfWdUXw2yxFooeAVR9iWZq8hR99q",
  "key29": "5sJP367u55DFedqaVBdN8wweF8oXGNPWdNyEENrx8hxmsuagg5M5EzpSP72hLNgpZSQJ3KoG51fSS7ntWYYKS2nY",
  "key30": "3sez1sdtqXo4nny4uFqJ6KUGtDG85AD5V13mTiDcSYcVZCxCbgCDyPhYhNSSKit5JYtMCP8EtzJLo3DyYbbFQzrw",
  "key31": "415JkJ8kRVrnqN2Beaum65G4Hnia5c5Uanaa3No9mj5UMuLnqQJSsu4suZa8i3RWTQ5XmUYWrWgTfK3i8pRDP2re",
  "key32": "tYkzjVuFX5pLVLQCtNT6ExsAAsFhtdBaBFLmtSN6RCtXWYQ7ecKJ3MJwUZ5vL9SiC55aZQD9ekNxAGrJntBe2kk",
  "key33": "2hVxFw5VXJx5kPgKoNRo8euVgtv9FvncfEbCpGXcXGVxkt9BdCLQAxm71WgLj65HRK5tDDN2SJvdfGkveJrYwk7B",
  "key34": "57KwrKmv8PZ1ieqbj97cWgKydEoCZyDj7m89rJQquxPtBVZyG3g5u5b9uwpjYKvtCrGxtzpWvYaZG9Ux71DKA4Ft",
  "key35": "2vNBwJyY12Nebbx44bzXpT22Q2F3wZ4xuceisV4zJPWM1tQb7N5AdLxwo7JSi73KdpSphopULpWjZX2reSfxpapA",
  "key36": "2GwniD3Jnqku4zSQbarEGweH2tARbZhvZ7R4ujEUmnfmqSer1AwuHJmus5D2iL6ZASq3zG5B5BWoyuNLmBPZSAjn",
  "key37": "HGWJimUfaBnscTYY7ZfPB2s1aTyepzFKC453xMeBzqgqrHRQsz32GS2JPUFtx8sx35DacpnfLS1jP5jJZzxRadz",
  "key38": "Mni4ZxZVqfD4h6cgmJrtLtWiSJ6Vzy6NeyiBYTsQ3zHSjJyNybXgZzu1rBiCTR4gkf5jMCQ5AmdoPaHT1r1Y7rN",
  "key39": "5Z5uDxxjABAQwxk2LkcE9RF3sWYYSaxbeXbcMoiTcryBbejHA7cykid8b2RU6aqet1ZMJAhzJXnN1sviFpM1pVS2",
  "key40": "4SkSgF1azf1n2uXwpj63dLDGH2p8aZ8g9Jn4fh7jiUx7jBLQ6SWqbSmMgc8cai5cJTMSmWoP2DKswuNr4NnZRGhf",
  "key41": "2EjNZtN6isWrPgvG79WB1nsZH4ZAqLanTLjshEjBvq9kYcYFfSfHiPqLn62RULKJBtNp8gCYjekr4ULXexii1fbk",
  "key42": "3Wu8sY4s85RvYdDPcDM7arQQhCa3mFBKoxCvQsFqmhvfh4vawK4Mi6L5BkhXRN4xsAhFgUMvH6bqv7xrpjSnsFuH",
  "key43": "r2Qh32a2Nr13s8SzgU8iYDFGZetvD72B68NmX5JPXzaWtjD81ferbS3bYFSsc88oEQCMquPZRsyBzX2oujs8HbG",
  "key44": "47pJPsa8j9uznaB9rqv6DKBQGbDpb1vHF3sSApdSq284kSC8pUToRvf7GLo87MzoP6ANKLvFxCG4BLoExuLwBp4q"
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
