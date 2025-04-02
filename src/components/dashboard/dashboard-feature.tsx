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
    "4jJ1Kq6KveZfoNXbQkAsCSF6oo9uDyERHCbGgLvfqXiGxfbM7xBKbEZ6rY8snbafL7wkgY5ZigJnQbvy3FkkAu5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1EWLfoeedwrUKgTCaehYKMRkvsN7uuKdswG9DxYtCaDWYcwTp1tkGxC6BgH28HdNDJeF9FZumtaGuYNyfF3aXi",
  "key1": "3mZPhg6g3WRJAsrs4ojJgkYiqzQPUKzsN1h4fk5j4eJca5LbiU19hUqAnGCk5aoSrmcX77T1PUmBzHzHFuGG2SLR",
  "key2": "J2bFVyt9oieHDW3dvrmvDMv5RNewjMQHfbUFCSZWp4gG7bzdzDNASnPD2xekZs1A7d9VnFH7LTZY3JMtb8CcC17",
  "key3": "56CW1sAmRX1x5oFgtJw9bKgkb4NU7R16bwtkmckoBpvNCqSeJhqvuaguWv4QeEXniSCsH68aw8JUtgkh4N1nU9DT",
  "key4": "4s5ZPssvWpg3mi8pKbNWTMXMQzwmdXCgvbUnBfAJDCBEbidkGtPJL4qjQW1DMJMf8TpXBz5gx2KWqcfGAeRsv8hW",
  "key5": "2SNsFCmL4KPsGHnGyr8NRjcR3CA1eStwTDk8xsrtXfs2NWbE1cXqNCXr4jvKPDT4eFHfJbJSzN3ZiJp1Qdv4LFSR",
  "key6": "5FUQ3eev4frfvYhtojfXQgPrusJdMMvsFNFqeGTC145CTb3DbDub1QsjT8VVL5CDK5CN2WutTedM7cRUmrEEHeka",
  "key7": "3g1otJMACDubUHYt15LzStPuatZuU9G7g48U5a3TpvX5z9ThxoNAse1JSZktVgTwaBaLFkMMS8S4NMZXGWBowmvr",
  "key8": "fR7Q8ohkbvMPXTtMUwGD5p4D5Up1WWWvLSkTACVcJApYGgFZweukA4mZqNDYShPigfXwvuGbnYrfZtyniJej3Uh",
  "key9": "yzZaB9qDLzSVZqkmHKiVvxX37egk7nDWSv7sY5fGRrFvUUzfyn2H4h8vQhPuUPq7ktbqUCM3kkL8sRxGps5KhZS",
  "key10": "5CXwnvPHKYXroB2E3CCiBsbSoCeRqr5roH2apoqVvYLKDHdpXnU1rBxUYDi3JKBCVNkygjYLtK5sTWf8c2V1q8xG",
  "key11": "2pMYFmM4SAEnmfYX5vZu5en4kjtjc47R8sAkQKG8FRNoNutLzMwqWWgECw59x4XpmmLiXFEfEQU4geu82uySf9iN",
  "key12": "25ogS77XtZpN3Wo4V2wWw8LErTC3iernQKKz52FkNmSoyy8puabTXmwQTXJRwYuYCBybbxGwmGTcgWntBYnExGDK",
  "key13": "5cWu7jcwX4X4nHhiQB32jAZSraPg5BCSDvSikBGUEaUcmsqkcMRNEuVCAQ5xbYCS6AbtaXnGJeDguDrAEpKea8n1",
  "key14": "iAxdrXwMHJEcD9so3D5RMAmBANM2xNRvs4hu6kQVhUXEL7Yv3qPWtyqxFCBZZsBAifZoteGxNadEN8d4V7TUcDg",
  "key15": "3utCH2ov1VYR8F5rBsRvqoFPxZrcXNFgshRvjaavdA5HMUv9FP26b3c3szGmgi9CBEoGXAZsytKRJ5eQjGMweH4z",
  "key16": "4iNSgVUcbwzEZcstvR4ZLbVsYpYNwapsbk4bWvS3yMzLUfW5SEeiaAfK8XDig6oGhACn7NLoSxnhGa6EF5gsgxnz",
  "key17": "4HJpHA8chrTCP8t7BR9wFWPQ8V6tHpDavaYqDgPGiMCZpMS8tkanDHWGqj2Ky4yhskUWMsCHKbFhXg2ff6DvtYfX",
  "key18": "3K1moA8XcKBZXyE7hnJkBUUNu67EdXAqqEsfUuzspasV9gv15zjmiuPkrZCYSrmfGX1rCeaJeqrJJxnwBRSzKPCK",
  "key19": "3q652LdLrQYriSBPcFhRRimrS7UGG2AhgofQQVK58YLqvF4S5ZbMKagRWJ3DK8smYbUQeTvW3QLGqUm3xiLEvPLe",
  "key20": "qBdrWhZZfXCLmdBjvQzSs2KqXuCarJUbD4vaxnTik6nRVQLUEc7VRtbGGE1bJsSST2Usr6MRoehG5oZinNjMqHJ",
  "key21": "2AP7vFnN71rqWz6FVRq7n3fL3S7J44XxVCvgmpX9dpEexAwZFYJyjzcPtKggHzAxs3gsDu7mHEfNb6X5DA4AjUP9",
  "key22": "Xh2g9hB6CkGkHCxhJwvw3YDg9sYWD133QiFUT44ipD99rDQ6gwEwzNCZAB2P7SMzpybSA6YZrWbjGb93NUYN4Kd",
  "key23": "5oWgTduvhgJFiibyQLrPogCYr5zL3FNMdywBPJZAzYKWcTt68kp4dEMtoc1ovBZNssJPe7Hrt9Ch6e146dSu5ZTY",
  "key24": "36UABMoSo2J6Gc9efQ4R7yYqt353ZBH7U2cemYyC5TF28QNhKChkP6bNhF3hoH86PJxvyp6Pjsgt5TbHKNedBzr5",
  "key25": "4iqtxBZJBbByvngcdhYH9Q9vBiqfvePMSmfXGmqp1tpHAUKngqvbReyJrpoPq77zh97YcghZvxkQAg6ucqV3tUH2",
  "key26": "3TRNkgi6PPpJwgiFdCnPLKer4zctNJtXt5BVMaZStnZTr35op87qcUhYbLFtA1FkSxQ7uopbaJBSyHarx2BAuGDD",
  "key27": "5fTWsiQFeiwaZb1Tpnjif75HXJsikYHPtxgcuWgM7Qf76YRkTAGctBnjK2yhTHiRYm7o7cksu7eJBShkh4AGLM3H",
  "key28": "26mWjYR899QrTEuQPxfzsW2sNL6zQEhbns7NmBk65bJxBdPJgQdQL6a5vYy2Dpmc1Wdb1CoaaEcjRDjzmdtD1DM2",
  "key29": "66RK8qHKKQmN56WUvV1vvpYF1wGz7t2sE19tv8miqsutxKtJQHJ7mqaQSAmG2CENvo73qqniSEvsnrNoSHPok7Jg",
  "key30": "3VpwrxsEUcvbTZXi5gexEh4Pgkcc5i6NaHUHTQ6DvK4SYxw9EJkFqXgctpHKjCA1V1Ao5coshLcrxQxSa4iEz5X5",
  "key31": "PPCDpMTNs9BMhL23bTy9xU9Bbsf5xgivzs5vKTEXnEZ5RkGb7Rsnq6hyoceAkcpctVGsN9EHLZ1Wck58hrWFY7Q",
  "key32": "2zJoKizzxxnGxkGFeUeiG8SbxVEBZ2nuBe6szeQ6FQTJxUAsZLF6NnAGBkMvtUq78oVswuffLtZVPJXmiT59T77b",
  "key33": "5M7K8W3NFf3ZCy9xjeBkDRth2YN3m9kVW5La5qrH13LcroQWkCNh7PsEraZYg2TSVbhL9k8vCKLBft6SJQNWswR9",
  "key34": "5HVzUUfSs12pvyGptrTcztqd5JfwtRgwweWTJs3kahkr16Qc5aFTdcqDErif4RQtPFatEKKfE3Vo9w6cHoTWzsDs",
  "key35": "5rbpHqvbfX3UzE58KWMEUvinYqTqX72gyKnKC4pZeSJHhjmhdS8UECGZjBpabhKtEN3hYxCxeRPH4RfASykFAWdd",
  "key36": "1zoShT2Xvn1JsJKq8siPj7FwoBZ1KTvfnKhuDQaBH8gc72uqLBMHQeSr2RgmkZa1HMfL3pUWGafdftxoAFvy1oH",
  "key37": "4kn9vD3XMxCpN6EMrSfWJ8xrkkXgZujCoToBactfE5JRdqX2cTG9hzncsrSg3vNjE1APUrWkCwFQ6axN4TwHYce8",
  "key38": "5VUfToyVsSW4Pjqnv2mjwqyf95MFykKichhrWnc88LTQJsUcGKwUKAn8i9ToTDdMA9iDd3L1ewK92mMHTLw3ud7n",
  "key39": "248Ezc2mTc8rAcrHL4HExbjefSxejEi6ShQtn31sqa5apFbXv77STpa6shqxSJpC46VrwE2RuiW2HLp3VLG9BB62",
  "key40": "5J4qDA5qas8B8Ln8eJPdPCn7KHhFzmzpL26iESzW9koaZ9RP5yu9bbw8f19matBMavV9AZiaBbCLY78gHve9kDwS"
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
