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
    "4gFdoZaFMuTKyKS2GkReotuUdQxJ52LmKji1q4ymnXeGoKinLL13dRY3M2Sfd6MFJNyFJ8ekiqNE4c1h4AdnkgVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CtVDYFdYoH2giHNMYtqr5JiAuXAd5m7uqfwsgvqjwbpQTtjP499hmkdaEjBoh7ZGJPCux6bX79wggwHQnHgxoZC",
  "key1": "4zAuxXnfift8sn9f5Pco2JBzi7DEJPbwBghkn11Pz2E2BSoZpnFH6twzPX2qP8t4gGatJxfTPwEWtgERALhs6fzv",
  "key2": "4oBEaZtMr3rfM26Jggqqii8vJRWcZxFRcyoGwTSbfrAP468T2HebDKBNatjcHAH7zHWhHJc5BHE7uX58B8QWUHU4",
  "key3": "3xbVKyHmjbMi26cBdY5TKZoiyteibqGuGRkNW4VJ7zZFEize4t82FHcmJvhPcSxvHbMLPVbuLvrS2CUWU6nawPze",
  "key4": "2pSUpNp5weWkqHUarQkW6T3c7qmQsksL5eSZzHuv2VLvDWMM8MX6RuMRFLNXpTMhF5VPpVxu9G4R2We65DuLyZB",
  "key5": "5UKH6U3LnVeR9MA9tQbCGsU15r1Byjy1iJeeDmNCvRvbRqkD5EK6HAN9zMLum6H4uh8rod1n7pxaGuNzJo5A8Wfj",
  "key6": "KHU6Dan7seP3getScBHjpGvm9b5brPb3AFqxDHLvrL99jrgzisJJBRMWzLSTP5nkK6Mv6tBzSHeTVzs7RpTAHjx",
  "key7": "52n5kvMZbeE3fQj4tP7o3rVXg4FpJ7e5yx8UAHhTYeGzsoXtfcLTgJLWJ5rzVtPD87rMXKX4APrC7tTM1ZEi39cC",
  "key8": "37ucdb1wWpF9kxzJUJApMTKrcVramsacDQz9GBitzvZjotSrJXC4EbnpwxkPfVS7Ar5fFw97bDotRd2AT8G327rF",
  "key9": "5RP6m6GVkjA2qX3YmXb3YoEhAw5VmKhdZfZU3SpQ4uVQADSogcEZLrpWbHoBxxSx24zPtproFZsM1ueuhpkS2UUG",
  "key10": "3fFgMNFpGkrpVFVjuZz1C56B8VgM3s8kEewXPC3MTPGkXCtGjGyGZpbtZoTiCMfztNFbuVvPKqC7qK6YaasfxtJa",
  "key11": "5CBprLS2gY7ALHQdpDqDFEuH9HpcZ9VqPXFycTCz4BkHKKBEj33Sr3Ajnv8YFuo86RKAg1iuw6SFcYvAm9hn1EvC",
  "key12": "5Yy8LdcjAyrgTmuSNc2LCnf8UX78QLe6fYDRJFvMcYmrFFoTZfZcFYN5pZ8LVuSP8gWusGE11ERFTQ5jjaUQeT4A",
  "key13": "5XT1n8AFbzRrwGE2R6Nqyt6v6EAZu9Qi7Kqj8ga6PNRXqc1XFUnKBsnuHPzacuWBKzeRLJSbrmaqvCo9BRVZ4Kze",
  "key14": "64c1g42DpFdrZFm8bdUq1HTV9RT1kzgMdWimGj6DdxQhZPu5gG8aA2E8TiqdfsZGy3MREKdxBy88iYFj6hKNRCGq",
  "key15": "3WdAw49DYCtiRJErj7NCVofngWqi2xPvVFCBn1XhSyb1Qq12iK25ivRcdTKvELDsXH6TqYvQLThYE33dxbaPSck4",
  "key16": "gWbpKJDFDEfzwh5apL47hWdZDH4dFPp3exz6f1FGTANwFNcHwd1GRSK8vQWJTQ5arB2UWzahDFXfw9X1eS8FbEv",
  "key17": "3t4Y6x5EFiRhoDRYB3Fko5E99PNFTsmZGrHnroZYMp4UXY3ZLedQDcYNRbQbHHCtBoTi7kqJ5KxDPT55DCQsi9ny",
  "key18": "3AWHHTDsJ7SPsfMY2A7GpJgFixUZXkkZgmjAYx7ycFFwfeyCMj9XqCizATK6RrzRzzeN8g4HL3tuNkPuJJkZ5qzD",
  "key19": "5KHnwX7m3h5crnhCDng3GHwxf1mnQzXYf9xe55N9M66HddRXj86Vo6fYaEtBfjcuTJnnXNGnvyZEcNoJ3RtuTjbL",
  "key20": "2ZRvBKTv9gEsdJxPcFysaERcRtNr5GC6GYnK8JAVt7Ag7KNJYa2D4eFnoNJUJhxRdtK7TqSVhPW2krtg9CPVbZzk",
  "key21": "4uApPgtV794iezJo52PSTVx7F2H1afY44qGVD6YtJdkCcEdcHWt2pftMsMtfccgsUG9C2HnWPPnKoZRtxjz8swam",
  "key22": "4m6jg5VNDm1Cnix44XTAN3LjcZnPm5oRd6otPKKGgAPVykfj3Z9dQQDTLtTykGx64HvsskAGHpEXzrHthKhT5EvM",
  "key23": "5ief9wr4tEnc9yyLPXSNaih5r9nMM5fL3wheUxQLhiwj3goTDKXxyVJta2ySSXQqK2AhwQ4TfAjcDRWCGoDkJMVU",
  "key24": "3JJTgcrMf6ydv24Vk5e3ax4sJXPAjdppKCxeGzcXA3L69wEuYkBY3XpC54kw6ZZGVVvm4Em7UA7FNK8PEHwUHow3",
  "key25": "5NQMSiV1zTxjDFyVViVAHyMsSu7vMZ3x3by9dviPTkQf8eoGWRgRht9YpUs9fNVA9d8fvSr5qfJgcPuazqPSVunu",
  "key26": "5cpBFDfTJPGgnwQKG6V9AhTsUtCBS7UpNMX3JbyNAftFChQVqbFQ5FofkryydXGdD4xHNWSTYErsrAeKCRJFJ2Vm",
  "key27": "dhf9bSd67jae7Mjr2WRXLc95Bz2sZjcNd7PeeKJ5LThCvJZDKVVPx8c5MWLNuireWL9SAtCu11AjUBtgqVm9rfo",
  "key28": "4Xprx9jR91wcP4Pm2CU7hYqdCVBo681gJWScfC5oakG9djfYiY4YvExbdFDkCgPHs9BCCUsU2jDau4xVnxDiK1KS",
  "key29": "28oLMhrSUDmf9QRD6gcXqrqaTrsLW3WiafZTyXnJCG9XS3a17YazeHVmZYvbC16QvmQT2X9XVdwZdsGFF5cg3HA3",
  "key30": "3H1BugMH4RrAWcV8A7e8S9ZnYsDjk4YNJVSsvPQssTRWhoyKraRfyz4SLtohoiSh262AbSzJnY1rNQ3FV6vEq3is",
  "key31": "NwyKdNeRZhTJEb63zQw3Tcwr7rd1cP8mKLZXsvwYNDbAEg3qfuRZYMbpx2tpHNckre6hd7JZDnx4Gi9WSDpdK4D",
  "key32": "2WMMosgXYVFuMkmRAsvnBzQNeT22zrSQyXrvQsuzpotV3RQBk39PKZQEmG8dJH3FFucmPE4B5m4JWgF1PGnarH68",
  "key33": "4VqCM6sNiFkNYHd6ZotG7Mm6NDW7LnnsE3TyriSfqmrKhVePYo9HQ2KHEX4dmSMAJ6q8TYDUALeuWG4wfdxHSsWv",
  "key34": "5vDMLjgQAtnHpKdqJCU64bvnrBMDTk48EEUfDLd9L3edW1xczVxRxoMS2u5XsEuwieENmNCHSgHhQLmJss4xgCVp",
  "key35": "8Jyj2qYhs5sFg45UBMCytoS6C1xj1fCybeq3LmchfDWs827QvGfCPUF9AfwR22pYhjqgg4vErczKvyTzQxsw2VH",
  "key36": "3ZXgFxQ1b5QXV3FvEJkTNfKMc4EmgaetKoJFTqqC7uUPhrAD2SE56HbLyQw9yLZvpfXzxv7FPLqe3bLzNLfYeZzW",
  "key37": "2sB24x6GVWLpnzrZRs5se6b1Quvbg2jXz13vwsTY3wAtBnzi9GSWVRJYihuzSXhCBhj7xPKDBTYvVbQbgTwbHJRA",
  "key38": "67dPZwRbfvTUwfvouLfEY372eDaFkA9569WUa7BNgm3wfygr1XFytcAhSKtU3m2NYx1on5hz6z3DsiCGTRwe3sgb"
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
