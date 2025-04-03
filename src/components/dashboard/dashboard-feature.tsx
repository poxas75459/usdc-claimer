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
    "2WFLN7sdKvUhj7DNvC8RxRkecL2imqBJcrwsg6VCWqt9ywpNHGezw2Homme732ZKR8Xho4oUWaSGNiD9i83NZb1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yJnydzVt5FSqPaE35Sx5BLnXUtVGtFQSw9C4nFANpTdS3QKEWzjmc2djL2eAvwB54tYZQJY7XB4iiekr6xRREYY",
  "key1": "U86ub6VX7rqthFds9qbAEQJUjGCzFMoWhtRFbRmmrxDpYYyavBUcgMbyKSabH1J6GSGJ5Lo7ebS3QgktkEq4Qcy",
  "key2": "4w17vh7STF1zsDJH1PqiHadqURGK2qGKQQxck5V4waguzMwGAhpu4ovYWWaXk2n1G8R6mp96TQAfvnqXwGRov75c",
  "key3": "26BhnLgbASvkrxPaADz3726itvL5SMC1FSdP6aEQDL72Gj66yAZWdX5yCAnFkQEH7kJQj6F82bnMU6NWxDQojJpi",
  "key4": "5iNrcsrFFP5VBQo7Mjswtj2twAR7fyuLZ5dtrs99Txxa1Ny1URdSkXthxp3xwftjTx9RM6vs3uPLdqadAmarhiS4",
  "key5": "3Qs3XHaYiPWFW6q5DsFEi97TdGwdowF77rmEFWx93VBYyuRbabvxsghQP6UiLtRjo6VmpD5eSVt15HyZs7kq4hEJ",
  "key6": "4mFnBjKedqGYrqZphXbG9TE41PYVr9C8jfs9fSpCNY6jq8uM9JUMK9Fqu7kcTkNy6KzNV8pZUmhiHK4pNQ7xMD4s",
  "key7": "byVXNLejCzCCbSdpSSCRTaEg5io5mqmqb9toa6pLuSa2HBP19gkwnXqDK3w52bzJgrYdRB6ErjyWi1RQjoYD5Re",
  "key8": "3SP2bMZBWWhMCBZcKqs6frecrZsDYBRpE5TwwfPrusxJEAqmcqZcBry7cFWXtBUN3nFqPaaXV1bi5aMT9dDz5kCk",
  "key9": "4BdgiDn4HKQKm9Dch3cuAEsJxmqAku4R6cDfreVnfgmqN6Fmd9QG6xGg7KjXREctJo1s1qyaUa4fz1p2NV3b2SMF",
  "key10": "2QrkLSpX7GEQzojM1y19mvCajUEapAKE2V1Xocpx4YXVBsqLB6hkWapSghJaKKttBtv43XiTf3hXun2sorF2vr43",
  "key11": "2HVtFUgH7tosJdbL65HKain3dEZdWGmDCsX1uaq6AfrNytoA2kxmw1Wo2fmJyCxJ63A4bXpbB6ncfhYMrvh23153",
  "key12": "enCKMLqPRxRTUujMehy971vui66WWsyRhjYPRqTJzoeo7EG7WiRLG4tziXXKTZsezDoSxoYqVaSCifTRCY5mSbn",
  "key13": "31WnkcthJRxFPFNpKYtUHbiTNddT82YZVwNauhHG8uHBtLT5PchvKxS3Y6nm64P5Nss5hm3TRcmZQM78VL9fA8yD",
  "key14": "4kPAMzS4fb4ps56Hyaq4bUrSF7uGfSGzmcVwWSYm6wCEQbhoG8zz9ajquEruRkUbbJb1cLYk2b7zw4PQMEnptXPx",
  "key15": "3MyGDFqcA7HCQkVA1fTMJXE2o8unPWw3rxfMtWV7gZQijTo1nPeTWAgwCRwA7yh88bk78ahPexwWyBefAmNrnPTN",
  "key16": "2juWVYgumx1ij949NcqDCoUoh1r6vjYngGvoNha8t77QS74KnHE767FARcFw8D5zXo5cviGknp41p7tRcD1bFzbg",
  "key17": "2UkzuXYJnDH34LgZoYgFunLbAP7M4ZWMrMTFuf3QVbo8EP6gpkQNnLjUPRLLWY65hu6FX5Wy2EbRxGXaVnUKBYfd",
  "key18": "5kEDZzBTew72JKiz8QfauM3waT4pTnqEzz8c27KVHVsG91vfQzByv3RNMcM8DGwSMJzqdDEomPXWDoYmFSHESXBF",
  "key19": "5PUd2r2ywr8fXJ2ywbqfEhd6zwBdUZGWrwTZarJzd2Ci3ouBLwvgdKnAG6cwNJXtAkZR1wpHRcKmVztRi6WFDa3J",
  "key20": "64VNrQtZCMYVMouiYgm7awxnVQzo87hLt52mxKfuKBPaHbNqghDkU7s7aRx9NHoAhhLnWMju1gk2cjhDUjPtxBkJ",
  "key21": "4NtqyPcxxt4MFvUypizDjwE74aovBEJ4jrwixUWQUb5dBuVbFYqdrg8rRS2j3Ygi4q7E3KzqB7wRftWzUsRjgbgo",
  "key22": "63pTroD4cKP93XBkHX86rBnnsitjcxRcs3txhfzf8TvPsh3C7ehEkRcmM91T4KGszi9E4q8vDsjVB2W6ZGbmisZd",
  "key23": "4sBp4Nu3QPLKyAqCYBPxAdC1sxKkSiYuAvySvEv566Pme4umorxmed6Ysq9ieGXtHQcixiJkVh3zC3HxsVE7YNnu",
  "key24": "4p5G5Afektisv3mTaYh4SJaHnFEx39eH2DbnFPoHvh5owcSpW8SK1fCvoyLAdgnuCy56RZxLUT1NbBEHDpBktDv4",
  "key25": "yNkCtoMsRUPAiatKTE9Kmjk7UD1vueDSdbPvLRvTcLqdpBBs2L339bFAZcC1p2jobyqGttgCz4wWiVDKAVNDHVp",
  "key26": "587Zx2321cq6E24HhUnaeS1g8SQAVRCPV4z6CVQYDo9qbDDbndqqBJXS7TSux3dhWWFm3JCfLtJCQM6brxRGcic3",
  "key27": "3BSoDWSMq9pAjAAXRNfYWoiEBJHCxePCphmDWd8UUsy1uwH87KtCTzeqHU9js6gtkQqXV242WZ4YM6PC6h8vGfht",
  "key28": "5Mkr1mp9wvmmH9fgDDmTcuwhPMsTq9yh97YFJeDYwyZPqe6yYCy8hReshUJsjFkiWoTwoXKgXkV655bbHtQpwSa9",
  "key29": "5HKpdNdErhyBAa2ZuscxyC6uEa13TQ2MQ8NCwrJXre4S7tEpW5wEiwkurwmrJqjcXCLG7xqsLyALEgLF1ZSnrprz",
  "key30": "MZmpuCFUvGivc9NK3ELEteFUHzyQB8B2n8ur9M1Hn32bEiYw17oz292m5EXbaPaP9ZeZayr3VUNxmizxYzYGFbr",
  "key31": "5jhujABHeULYdGmo1p4tX9bQEKy7a8Yv95nWEC9535CAAxAMvpFzcoQHzsG8UL4yV1FJX3VqXYTeN6AiXC9NEKa4",
  "key32": "Eqgu1w1tXjxW5tNUuLxVNokbfa7EJEHhjgKx33X5CTn9jakkvME1P1x4q6KH19GKqPHaa2iC9VDHMtaEF4ge13e",
  "key33": "2GGDqySD5PvgC6eYdXU2k6N91QrCSxeuNkWgLMrngTJ2iDGdYWuSYqfa2sFmPrASugqrABsscg2Dj1Y7dghkCMYA",
  "key34": "42Cud85bNkVmtEwtYP6j42mQYm9sp3nK7mAVrHJowCkQqentdNo6s44uxPRdj3JH228TtNdYxZxYkb6GdUdEVHXX"
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
