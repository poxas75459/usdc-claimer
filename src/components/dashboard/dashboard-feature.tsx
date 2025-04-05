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
    "337oLUED8g6QXqJi4r8Zp3RQuEwZ9cbZ3scM9gLQxMmLfPqiAvaxcukLeNQMrk7R8He6jQ6wtQb453Dd2azfeVX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DeVYp1nxMQKz8Cs8jvUEyx7Adj4ZxsQi1z1qvquoAFRCaGy521DKAqMnBj6d9vGr21BE8vdp9WqhUt8n7pqBwbR",
  "key1": "4JtvuRMceJscXm4vVWiFb8tYsr5ByYYhEsypqXVMzunTvBUbyuny27SG2jqqzDDMkRP96fZHqTmjyLeEQTa9P5tq",
  "key2": "MVQdRkDbehGdFwBeQPRXvU1nULaqEvNEic8TEGJz4sirev7aJ31qncpnSh7hhPzdMiZKfkHPWnkb8fCrK3T9v2Z",
  "key3": "3YgDHA3XAWvbt3oh9mofzVMxTLu6dCoLFhMdMaMmA3VgKJxUT9ZSKPtzGHdRG5UUtdmyGHm6raxJLeJfVGXcN38o",
  "key4": "4bAmv3jo7PVsWVf7Er6dEg88k2ih571L37UGoUK61ZwrjSe5Y39a8EYJkL2ukrqUjkomKQCWoXXmH1jJcDevQUsY",
  "key5": "4KoG8moY1H1gMiPQuwXUEZtnPSdMK7F3SqjU2fmNjEXRqGjKXF4tVPgk5rbZw9KTXeE1LN58T1VVYCWdDobcgSro",
  "key6": "2fqfyupcrVLgJfZCQVjbC3oif6M3MqY7djQMd8PgJFhoeTf7QEMr2tC66VTz8B7wnPwRDnkqv9P4vFj6sumCTrS7",
  "key7": "54xgRsa3hXtw3Am4fWBU5ZPkyAZgxk72tLpVKP965yQGT6SCqLe7UjzTQJixBHncMAaewtJFvjiK7LqZtBTmMcaw",
  "key8": "3i9YvqnFSzDuZn3VFJfcMAkTpGZjBrFCxBbKUKiLx3xiWmY1TKRbx2E1SPFsEqt8FrhTQrYUdqUk52h3SQ9JBqJ9",
  "key9": "45QMz389VdHJKyx4NT1kNHbBeFotXXEEDjywsEx7ctMeXMksFKncmxyCnX5wyrYJuVtbSJak9a4G2dW4nuQJyCTh",
  "key10": "33Uf48FodDbqk8mC8Nx2qSCMugtfqRbs3weGqrho3XsxDg28fufVoSfPu9j3fyYhnAXws3FEtiR7MXPWK28B7o8G",
  "key11": "38vtoo2PcdqakenkCGfj1ergJk8b3Wu5MZ2MXK4zN8n7enDCjd6D5B4pSPkrnVyWMxbBHptBtFdtf6YtLbf8hJH8",
  "key12": "2NXBV8zELAAjqw9HdaFy9PCWrmhEa2eM9EsNh43C2Yg1QRGY8uUx6jrrAGjMfWZi1gW5XGHZakjbJd8GiJjsaYnB",
  "key13": "5iZS3AisAAs8U1K4fUp7CaTAXgEGXtQd3vapqb8D8xSSC9ueK1rUJLPhDpdtJnL68eqkBX68RX1ZGCfYgtPX5JC9",
  "key14": "4bdQnw9cBt2urtyiMc1yTpiQE2TYb317Hv31i6zebsXpMXWqyfqMwBunhZAE7hiEMsdjBQuhWJrbMpciaGxDsBkF",
  "key15": "4ExpjSkMQ7beEVXxNM7DnHvLQPXftQZZa5Gr3ESv4d6n23KkA6f2sjC3XKH4d2Xk3SMT7EqtGH6xsdjiLTA7ALqM",
  "key16": "YrcoyBANcVigneq493yua3p6pL3VL1Q7RfAiuFE8kFvdpSwVY2Q76DgkNdD2U2tyQGTgoGZbZPMQCGLqDQU1oTE",
  "key17": "3FtRST1GBHaMFvVXcmVVCZtLuU9kKe8GJn7YRPVZAt9ruRXBFi8dSuWez2d8xM82ywSriASztiM9xC7LXxmxASaF",
  "key18": "Y1gTxMSD81byEJMopbNykL89tAjcnJrvnDpPRECjDoCWvexUmnPC95iUwFjhL2BnEhkyoWQftFCkwB4i2Mhdgup",
  "key19": "65iXFnt3TekoC3t3zojA8PUQDFbR54sykyumAVjxbCTk2SFXtnq1kZzXumdHWzbPbGtUGt6PGEvNfeKokyRnWWHQ",
  "key20": "54sR497sfE8Ps7XKggeManCp9zMMFAunjWoeBbnZG1AJbSnzAETfm9gTseNLEfbnAAkNP29vPzjPSd7bfgjJVHM4",
  "key21": "7bZ4LEM9tS1mhz2Efj7bXQDHNur4pX2fvTtmccrJWjMUiRzomSU1dvLaqij86UPViv7s1uSKUjmtmmJnkbreym6",
  "key22": "4iBb9UVMvXE4gyo1y9Q2JNMKCAv1CaZcwjui7kxkYtpwZZNSJrSUX2M33jB3vmWNsGqVTJ3Jrmsw3fkf1M32mXkN",
  "key23": "oLkN9ejF4cLUgi6FNB5y39CYMwCRJ9F8s3SsAXEDWLKfPopnvCAvW5w1rNCCDwDdqyaNdyAhnCKurzwo3sJUspS",
  "key24": "575V4cT1AVM8sPpk39Piyws7sGLBrSygA9LwavnQW5z4xFQATsxP4iVS7i8B32LcEmjez6F11Ud4xhUVLM4KKpFZ",
  "key25": "4n4XKkF6mHKnGMtpy93JtvFHkZAJ8F7KkNua5LpoQsj3DiN5d3rDMnZWQgwCpzaVvCRe9HGhTUvJbMPmW7pqF3Mk",
  "key26": "5umgN4yn46jgTnLCFUju79bnDrV1ejhpWwrwCSVPE1z5oevtiQSyn81e3toobe8gcCYiR71VLNrTmxkaTxLs6eRL",
  "key27": "3PGftJG4YDUVdMBVE8xjPoAgKnNANDo6E6jBLg543aVYcm3SSN4pCQY1eiFgCxeoqa9kV5Ei8CToXMjkVHBwmRjt",
  "key28": "2nVKdig9d1syMzmuPySV11wfMZFppnz68isLg9vpDBxy2A7TbRnTn4AQ6bCaz5eDj9GN12La1qFevciTu4NS2Jyh",
  "key29": "12ABcyv5q6BwmE9mSbH9FbdtNjfGTmHWLqcccgCmdwL644e4upxaREN9xH2EAJBcTeSBRPALwbdN1Fr1BW3okma7",
  "key30": "3eV69TMN14SUkqsrdqBmR7FF4gSQVMo4L18qwRrKsQ2Gf1X1ZqU2rJuW2P8kxHYRj48Lvy2JbbBV9uWDCgWevUfk",
  "key31": "4hLDR2QLvRkgBPmUP294ES9zc8nPyHUGArxsW5cwhLKqxTjVzWALaJq3R3b5uSYWtHBC8BMoXCc5Tw1qgFRozPjP",
  "key32": "25dkLAcLhUfy8ZGz4WwB7utpBcU8GwojY2eczv9Qmq9zbSmrcwiPs2Srm7Uk9XPJikNvSoqu1LzWh8T29AZhABn5",
  "key33": "2T7azXqm7yxov4km5ZqTEbFcZjcL5Y1xXSHEiSNVxKSCMevpvbURdjnRqFGsQF4xd3Lky6LNiRty91CGkXjttP9b",
  "key34": "JjViW9HqDk9PT9bvfu3f13JGV8fDSiZRA62yzT9n3PFtCR6f2uwhh3EGXSd6JtrzesRPJuWgeZAfab4BpYKZnkr",
  "key35": "5dW8SyW7i1PuX177ZtuUYxWQA8DgPTw2BVXVQ7DYF8SRT5m5gXW4GokAV6jESdHgyw2xKnwq1RiPcYwg23FoMrEh",
  "key36": "hMfyf7RTaUQepqHrZbXDEht4Yh8bWC5fouFHP7gTBgh5qpwq1H77Nk2ZFFBckH5cXWw9Cyk3BpvRbkkyK8kjsxB",
  "key37": "5bgueyGoxXwYKsbckGR62E2LqPfg1EG3vzYntRn1sTQJA8NLQSGbc1UkVEXU5jWApVGS4K4uj6jkSj6YkTxipn3N",
  "key38": "3zxH1TEJyTywcTpd3TPWd4FX1XXso1cC5bFkBNP2AvfKg5yaaPFCWwBjLgocmau62gKGKuNNemXHGjvyioX3QAof",
  "key39": "53pYujsHm1MyWnFW3VNQ2kuLwC658n8tvRTfFE1wm5nsg1mbfm2Erxd1PStrGRC71XHMQv8SzBoDw8ASXFAkwpqf",
  "key40": "4NYhnZam2euTbJNquLup1VCZTZgi9Hq7mai1iVcuSEpgkDnrTgQV3m8Htnf6vicRd38f1JtJrzXmrkWftzfSQQHQ",
  "key41": "3GArt8LQXuNbdkzaV2ziHSnfeMZmh7XdyKCZtcD5ssujEnVCGmTdn8eFYr3Xt2t2Fayhzc9jqKQnMLKXZWytoUeP",
  "key42": "5R1swjLhjrzEU37pq7Yr3VnwQwA9HY83ouSRkFKaJZKkL8gsLcZdGnLMjQAxiSiaRWNtP85E8vmZgnMEmwMpDRDz",
  "key43": "5B5cabu2qgT9g9bUgteN7gMFyzNj8LdTh6jXwQp6i676S44LrNX6p675c8XdTU1MXMB6R6ezEQb4XcZRdhvrCvaM",
  "key44": "2ZXvTERqhRuy7ySsE1UvGnLqbQZSLnae6jBuYYdNhnGYECrHWgSLj7YCNizEFeKNKFwDLyky9dXcuxPhozGgXo9W"
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
