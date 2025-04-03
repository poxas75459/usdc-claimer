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
    "4Ye8tue5nE8yJmpQoAcCAhS9fTfxqWBa3cqAaSy1PE992Pt36BGqiTybZM2hgx56kPocxkx8DFVbeb22qnUrDt6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aBedAvU6kVo29kmFaXUMgXTgtqcEmFjSpJqsu3oa2xjdck9RNM99EkNieUuwXefkiqjECgbKrWQMJYXXA622KYS",
  "key1": "2S21HkpwK9Pr1kFh2boU6SafXSM46EZ6w4eqmevvBScPcfvwrHnH6e41p84K7K8N9QyMqAEz6GUKJSuCJz7Pv4Ny",
  "key2": "2jidRV5j5hy5QRVUgDNeeS3EoM94oQvWhnC7imbJQxB7QtZFJwdYgSLDh9Hd9rg1v1CVcAeXsi3gS9Qpd1Qrm4j3",
  "key3": "3QUVtoDpq6SF9SThpmtkxy19Yanumakc5PjmJ1uQS9jFT6V6rY8X7Dq3rdnZpEKJVFJVSTkjX2d4wxajHCjddfeX",
  "key4": "dN5rwswCdJgaEf9c2wsYMZRswWJjnq6AU2jkUJwU55uYCCDDkPBZVVVuEBfWwXfojcLBagsbDGCRL9Qsyd5wEdP",
  "key5": "3R1NLptBdk7BwFEW7BFsMhDgDPsJBQvDHVyemU5cTGd6uSGmHBtstr99NoMRo5rZdGTmm2H9nfKpw1Ay43q43ZLz",
  "key6": "3CJnF6ZwtY2DFKgjXsG9XHaEuCQCWUcSFQDjJjEc5SxfzuEw2vVwGTdSjidL6Tcoh7fEgqJ5PcQ3fMZ43ZACDYHn",
  "key7": "3sFR6bKTNNKaRDRsRq5JQQevthKno4JPxLLg4evRbURvUwL2qsSPxcdiYUSjfTTnC41NfMU3TVAyedBWEbGVHiU3",
  "key8": "22xxFd1isFhDtu25Bv5xyHk5c7num723ZRbaf8QRM16fFtMPsZtgnMcoyf1FLWnEAQ7U8fsLpYxVqALCHauHGWVB",
  "key9": "2CQNtNeBePdwdyMmNLxmRYWXwvqxf5CB5bS4Lbr3i6Gyz4DydZB9yBQZnkZgmAjm5b4tRzKD9bAaLvzFthDV5usf",
  "key10": "3Kuu5SrgLfbHFX7RonJLq7HpE6Kfa4qX2iiKoRReiRmwFGayWGcSnfCt2iQaVs58FpNyT2F2rxUctG2yg9f8vtJU",
  "key11": "daGp4D2oxGhSymwsbcBmkinKzi1KU3rn84dVnhGWRtKZLZFEdeHW9coZmvmsMnkBgi19DroUJ5rGTiv2cyg1Uht",
  "key12": "45vRffMqKBDBA8YR2n4yQLYshThRuQ7wTP2CZtN2sDQNtSAgCNPTVUrTxsfH2oXsnEzH8u4G4VAxtUrMDLoHbor3",
  "key13": "37bUH5s5fZ59SE8HdK8xTBkA7JiHbA11BHgfxbErwEHWjZcQy32VJP9ztKduAzf8ygPu62wDRdou4y3o5sh4KoF9",
  "key14": "Bhnm84Bdomc2irTk3NGAt8uPB6xZgXVPdncEB5U5xBBmQPbY8Z3s1YJsgtg4KGdX6mZbFGMJcGFTZcaRk9mpccv",
  "key15": "54on4hbti1teXYop6AHrA9BaAwNVxd6bSzS4Qi8r5F2CipsRM68zBDfugNaZe5KW7DHjzfFiVuSKUEhU7GqvPQLN",
  "key16": "4a4ZJnuxYnAo1ELBjHSca75dYfrum6Fa5ehVjYVGhhfG5ujLtMwpJXk54Nhym6R298u5pdo2N8AfopqPhNh4KxAn",
  "key17": "5CGRVqb2eWeShA7qDiK2uSPsFU2jCxBPqBpykHWajonGBcu5K3Ez1p3sHJFHnXrrVZLkLH28FkjKU9cUnh7XrZQ6",
  "key18": "2Cf2P4EjRuHJ45yAFnurfJh3iBSJZgQwMe6SxZV8JBnrC1HJoHAoSvFig1XABLa851AAzSRxEtEwHzjsbL7bLx8U",
  "key19": "2jVxYziejYDMcqiUD7EmpzeRey7wacSjkBEpZdu7iwSeufuenJGAN2GzGY8eoxvq1A2B44z7xUmkNp6W56kfVa3F",
  "key20": "3tPwAQAToXdR4pwK72CCHpLyVu6ZeGpSdcYBdrLFFu43e5nehAVJ3wbRbAsTmoo2PgTfDPzYpZjGVMfTBzjnGFKz",
  "key21": "3LK4J1f69Mf4VBLvXiru7uC8LKb8gDBBsvb4emoHeomGRveqehyn9eA2x7gBr1vQ9HCTQcWnHXhH3PdMXsW1Lf7s",
  "key22": "9tKNtXiaX2hHGXAQNzZxK8toj2WFYi8UmZy8RV3Monsxr6xQWH4jYc51noaFKLrBu24dBTALxZeop3pGgR8JPFh",
  "key23": "zavv48WLFeWeJ6eCHgxdJqUaCDwVJLmpkUHJrDaHUj1y8bcbxUg2RpEKfzWyasEFGFyt9a4RHf8kvYpyqB1SDM9",
  "key24": "2VuaeqoP3L8nuYJdCoJSHYd7s6XQPzS7F3Swtjq9TznhjpLfRrFCcrVDir66QctYfRqyzw3DWSJFhYHrf9Crhqds",
  "key25": "2uT2cJyhxmHqsR1qxHwuqwd46PcUhCjd5v4FXvEkEPtXz12CzdmpJ3kpJzza1pWZ9B9eKJh4q1x3WDRtCAyjUALh",
  "key26": "3fGDfSihv723NRucKFi346msgSnYa7SXC1yxh6eCM5erQhDoVV7Kcmz29xc9CNQ9Sh9mJKK1wFiz63nJAbNuPABz",
  "key27": "4M32tmaWCfoMM5ij6cwMMvN221oec7pucYLbQoBDUgtud15sm1uJqPG8tqEeyBQq4qTBmcWqemqY4bHm6vV4P585",
  "key28": "DoW9WoWt8CspnnZKX3dKzyFoxNXfBRoXt4GBjwYQnJC9RV33s247iCin2DX6VVLqLCDxby3QaFex1FQnbyXx5NC",
  "key29": "4nufjHSM3EfatcgVFCEYHfSvL8iTaa8TakYWhb7B7Y8vKNqEYWPJJDkj1uivBxMwexszQmtLtdptkJf2jWEXpwij",
  "key30": "2viHgt94iJcxcoatuohTJrULUPAgD3thykx5KgqqPXYoXfzbfDeHDzozzCTPSYb9yE1wQLm76f53zAVfaqbhM19y",
  "key31": "4H52Wun2XYAhcAFC5P1ELF8wrV9P55cnSvD3hzsLJAYZ6ibGSgZhF8EpnF3vQ8rNJ4VDHmhu8oMEWNsMyQrJg5D6",
  "key32": "4rYwHvBvbLoyLSvtezCNyn2YPdLb3w2ZXJrhVcQwGfdGEb7Eo2LSUVZXXWbfRwKDAQQgt4fyYVxvmLJkxqeLv4BL",
  "key33": "4nt9BqdDyUzqtbkTUTnrpmbtgRbnU1CFagtm3LRVF1aGN2EmxSmNVHh1ke3upbZ1BCFKoa6gG6btmeQSVxYQasrq",
  "key34": "64bD7svQVsvrb9WJEcy5s7au5Tt3u9ZXL63i6EEsqSF2UiEQRqyELW8VHMeyHESwroTr1pqXzi5MsyCWT3m1htSE",
  "key35": "54JkCyWFWsn1usqQRP6grxWFFPrPAWJDxxD45vnerqhQ34mt7tyB5gjZ8kZqkd53krevNYZktfuKjouJiHgQmk5N",
  "key36": "2LDuSCibX45p3oYBhzMa7i2L6fseuHwki7UzX8jRvLiTotMrxTYwPoyWGPyTgN2pg11wm8dw5wjTb1R7z9RXczvs",
  "key37": "4UFMHPmXas7cTQf7arMpFAzeQz1FscQwc6o58Ezs9nYM2SGJAjiqUePvxqZe7A4a8xUSTBjtENsVeez1wxYDdvu9"
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
