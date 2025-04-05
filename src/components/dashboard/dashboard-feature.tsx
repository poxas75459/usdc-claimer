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
    "5nQKL5b2WVMsiQbxMASoNxVkJ3WTumqXZsd5H15u4kBQiUMpW2piERJFJmc3c9SDtgAvbvxPTWUkVfdt1d2Vzc5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dQhzetK2BzLKYs7pgpNA2vNEsfMV17avZiQMGbTffh1GxSz7ifKH8aH5MYwKWPzHCpeo8Eyuee2STA4z9mPH2UB",
  "key1": "3UW8htFRY1s54LvfKCgYipEjEg5MUVfB9TqQhEWJJS39Vsc6DgNJJh3LH4wYu4h7KEhh939SWbEx1jiZmrLU1gmt",
  "key2": "5kHXubiYu1ZFsZYGnpL3EWuC2Xr4JDz22GJs2CpUzBnPmShJJ5eUymBwY7mouZN4drdC8KwWm6Tr4BS6zbs9ENUR",
  "key3": "38qa8FLYwCokzAyPSxP6PDy2q6TboguAXCvX58mmxDJUHAomXz6ej9tp3zw4C5MQsEgA4V7ToYiDuk3PDRx5yVEh",
  "key4": "5LaS56ZwjeEFwj6KAv4e2rC85cTDTCt2VofgLSfjzosov348U8696gWorgxL5Ksq8Ya6RZ78kcPb8QVxEtTZgDJp",
  "key5": "5VpBoRSDvDGCj1T6q2dsUCqTXpMAFRTq8pY9bbziyx5fNnTt6993uhSTRtMbPEBfhSVtkyRqpxak8hPLVYd4txyZ",
  "key6": "4ZZDf46xdKH1eRRFT2ign6Pd8r8mk2KFSEayxekHk4TaCcTv38BS1E81NN7hQsuNBPwAthB79fAmWehF3XDk3Bej",
  "key7": "2fwEEkgD2NaKfR7ZPkxgEdZc22qDTjBSMqh5RQMa8SuJ71b9Dq8cpur2Kb4fsE7BRyHQpK9oi4eDGNqVeneyVrvk",
  "key8": "3ZP6hmPAbKZLSMQKsbUsdyc96oxW2BAitC1yZdRyQhS274TwriNvyjbE1KqCYe6qv9btLGvdafY22MKMaaLeetDG",
  "key9": "2mNzVp48yXtXYVBBVF5qssu6NwEsJQPjYzj96MHEaEZdmGAvLqBSxqjFLND1JE2aBjpo7jdJDTc6Et5Y3ySvVaJV",
  "key10": "55W5qtuYTNvJXuBpAfoZSUGZ3Ktz79VSr7JFPzxEVWazBqpibcipVh6D1KpzT6HhDMZ78ZLrZnmnp4ZDCrSJcDki",
  "key11": "4KfTr7dZ75GjYNPgqBHwvJrgBxsd8V8AR1LmhGVLmDBT7HbVDHCmdEDXJYfzpkkcLHbDfcNbQW8zBke4wCRb8F35",
  "key12": "z8j8pTKoihS4NTAXmXfEMa1p5xQHMeTd9EyH5fRmmrvoqxpFuujKsNTEzhkNS3t6NEu5TGFmc9hZKc6tmS3zFKj",
  "key13": "3QKHwPiY6h3akSpLdCEeeJSDvP3Gw5XbgtoEspKXihdPLfAdbJGqfjKTMugfQk54EdhzBMshaJpyJcMJBsJrMyFr",
  "key14": "ALzqWz8G4Vsamx25fjpwcGUj8weSNnoiD6bwEMYBKP6tpPgDict9BikXpdmJF5VgNe3eaNRCEf45tm22areEDK3",
  "key15": "KVtWjGXr1iyySFCyUEr29A9XgbACoE6Mw95bdNdc8GtMdAWjHHsNembAKYUYYvPYuoRgANVefr25V34HY31fbYm",
  "key16": "519x121vS1xyWh44VaGrr8WxXih7Vw232u2wtv7AUkBWQiVRbkufMtB9UeHN6fuavythTbMfXLUPXhRJkWSDQQBz",
  "key17": "6274fsTh4FqSURpNfScaWswXeRXKAFsMNbAs7zaqpRReurmiiRoRwTYStYypAJGSfWhzPHMcXvwc79YdC6WPwNwu",
  "key18": "5dTDqLuEXcSRa6DjNmkJerGE1EdiMDr6LM2KzcrCLp9Q8xRYLXrcAhebdK465tEys9ben98UT2S2dS6cwnieoBgZ",
  "key19": "5UGJUzvfVTqVTJdZiRrM5g3G1RuvJNBr3YSvfEHHkUcEkZf7eCWiZEG15Fw76wEv3kuX8VPar64xZYHut5x4b6Cw",
  "key20": "3V3HbTBMNy9V1bJErwEY2iry4XMS81hhRKshtBAUkSbN2Nqsg3vQLmppLNAJr6XnuAJfxW2E22JZcuzRC5ESXFgM",
  "key21": "FDFi8VzucdtFcmdEVBs8ihNW1MyCTezgJ4LbQxxKT9jGMCevD7xpUUca7H9dYCR3Lo6jxixwCwSrEdFkSCiopvZ",
  "key22": "yJvvwjJ1B64KrjKptXemZPaHQv6V3TPJeXidM853QcQj7x313C6F9Mp13WwbaiJCpgZuHg21JACY9HyrHGCWGQd",
  "key23": "XKDBmR6FgEkSzn7n2M3sqX9XQ6FYURVvgPeVrbYTXta881tc2ynHFEhgQhqcrvSYXeYUvnUnYJ1nPCn3SZQTnV8",
  "key24": "2VQCV1A4manLfAvczQem9s6veQ3dDGcJ1jouqeRt7TSrPw7kzS3m2b9zdt2tBbmkkgKahYbAE1b4hDYvNpzdQbEv",
  "key25": "jz3FSb5q5bqbeMMNuSDhrGBjGWE5PA4YvQ6USqtiDEcrXmZ5rSnJsj7D2i83RVwuvAQS8M3RMe7sW5FoEtqAgfz",
  "key26": "2MT7SuWnpUvwP4mbUdmPeQ3Bhy61nxeSkLqNf6TVyNy5v2r1qaLLcKzzHFqKpCbARh9EuC68iR8tY3VnP7kCSUij",
  "key27": "4SQGDtdSvnfKdJG46Dj93LD9PEHKvkdpvbbTo6LWW2hNFvdLJkdBCHHX4Xpcxw9XTXVRYyyuiJZ7x7UcEX7BYmgD",
  "key28": "2gLfXPoCeFHJMgLv9GLt5MKPNbQzkeKfg2go8kAEpkUKKsT1zpj3z5GK8qnaxWevfxGWR9UXc4ysc1ggTcMQ7u52",
  "key29": "3dtU8DwUUpvjdS8M7p7tZfdRYvdS1asq6fFHpiPmtG9Fr2ohYrftmCAviRR5bgwgXKLXfFFC6ubQMZBCJKfzn6A8",
  "key30": "2WsGb7JoboeBfUzqmXXKijf4ccuZF6NesrYaeYHszvdAxJFfm2hFQ4mnKr1Ls4TR3X4PtPD58D3wuAHX2XsgFs2U",
  "key31": "NABXMqMD6ZsS2r2R8XAT84nRNk6CcQnrxYcvHr8h1W9ynEAHF5HDREusE3joxdNtebrvJgPEoapFqrFuisdfeFg",
  "key32": "4WBVTbMKW6cmhLem4E79zn2ZC835CGVZXLyQgpdXC9Uqks6mMaaFxYDqU3rhdfYdCqhD1Rw4VyAoykDU5jHdDjPt",
  "key33": "tfvPq5s5ay8Le5VpUCkzd5a1eGCCsA5Aw8uVbej476sdCEF34CqgMKvnYSsNZ8u2njYCnLMWpXEFuujwAHNJPe2",
  "key34": "4E7qWZ3hmXAZh6x9qFscjKjJbevuZeo9sRgAd2Q2X2j4mwD9ZRnEoUaVNBrDBaheeaSxAvdRc3DBFhTfPpHUqrga",
  "key35": "5xenzjB2Wvz9WztuPHkSdYFRCJPhWhUPhV4U1yX4ZWfqQDgZvfx8DsWNu4cs29Yx2XVGhrNbr7iK8GQbpLo6qmfN",
  "key36": "2BhM1PHysarhFYrjfSoTLPStwysZn3WSsSzhHivNFbGgHWBdV7dxRvgmZx2Xx9npCw75eUsJdtP5Uea38q44MoFE",
  "key37": "3RXfiqwmhs6f9LKdAfT6rgMJLcSeqLg8mijZUPAejfobQvS6ht4d4FQwtkqbr6et61LjMrQAvG46CghGotpN368H",
  "key38": "23wRBbNXxJHLhF6SdzY8AtbvdkcpKauadeNPQbbweRQa4dpxEnGLdeVwvXQeKPYNnEhoTPojatAqrP7FbyDtfmEy",
  "key39": "46nGNXN6GPw2zKP5s9MbRefJgW2Q7EXFbeUaxzCjKGqp7BaQ8Fe6S8TkygTZVSPbrod6g8dqAhAyoJN6Wo3NtgQ5",
  "key40": "2kRF6tq6wxqztZxfA1CG7oJndc2yr4tXLiUN65m5EHR7z9ciaqdpKdmV26vcE74ru1oMPMYMnXKPuNcGk6iaDfTz",
  "key41": "WioWnjQKvrAAQdTexh3vmsTcnQdkzB1ZmALh9Nf9jE4sQiGVC98DvXdzAdhqhWfNxCkoS243sjsNUtPUjB11erb",
  "key42": "3rtfP7NKEYHnEtak6kMg8WEfKR5ggmq8aXuG9Zhrj8MYqJYz1b1N182XbLz8tTnLdv4G2FF5SVYJ6EUL8hbBNhf8"
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
