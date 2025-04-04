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
    "5BJjoyppp2tQPJzgReEFjFhQ8RdGM53ZippC8jzi1fBBVJAFjz4XaMZS5Vuy3gSbpUjpeKJQPXFqcqafMQTAVjZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJKG2TS7JM36VrBqbJzkSp5vxwGHnX76swmkPwKxBAuiyq5Trat16irfDT7Skm5ubikpLFj78b3BkH1Hov9yvAc",
  "key1": "5Y1yGnhDoaDgArPVEZ9ct41NBRdbwzKAK3RNkSFSvZ1j1izSwfnFe962DmgJizV8MRS9X1MUCuj6xKc47ozW8YBF",
  "key2": "4KYUgkjUnSdEhRiEt27mebj21vo23bfvMyeUqy18KTzZdQJKARD7B1eTa9KhYSwX7AtFBVMyYVPfVs8gnxezoHyx",
  "key3": "NB865FXPhTYMZLQy7MiKaEu4QeZyGFNx1JGuDQDNpa9h7zKCpGtCEg7xDV1gxUNYUpTeQHMcCo4SqVQBwJfnk2G",
  "key4": "28YQW6JPTaPrY1LAkDjPQXeyBRjuAsdMsn5RxGPCkcawcauHW3WyxDrusPShbkFEj1AFWMn2KK2sGusVznJfwSG8",
  "key5": "5cPsrTrVYDE4nrSpZcRrVppe7zGCXaQmDYQHE1EFUeA5efVZdYi7QY3tQPSf24E2hvrp2m4WXNETbcuEEhrppCSn",
  "key6": "2jqCjHErF53WXX4kbbGmX1AAZM3rrLQJVyeT37yGTGyth4pGw7V5ERtxGm8pp6urq8BUMdxnppxDGEmaR74rzpvF",
  "key7": "3ArmX5LrCnsF778U3y6jJPeSTTF5pB4sJccq1LtNm9Hgs1KCr4fodr9xcbq4J2266ehbhoUY9eLsKGKoEhfaBuXY",
  "key8": "4yXRLf8JMsUwvCAKpWXypmM9rNHjJWhrMeVj2D11NveMkUVERDNqzAZUg8J2eDme4nW6ictCGrY9Uc67KeHkDBuc",
  "key9": "49czyhBGaDLkD5D1WJ6sGq28ubtTwq8NjnnEDbEpZfuLV9JxzjD8vkoK5B5cZ3kxmkissT8dQumsFP3hAMvpviEY",
  "key10": "6229L8UHrn83YcaDXVpNvxrGYpjCDZZj4A8G5BqmYYEmMrxW2ZWwLcoRy8VrcYsa1wrPRWJELsfRS4WPgZnTKTC9",
  "key11": "5eBgVFvMXyD8LM58LCNbjBqkM9CXFBE3QWsWosSqgD7QNx4ue6mv2c18Zi1BQFhj1R6GL5TgMsmgg7zdmtdvPmNx",
  "key12": "4yFa7fSPbGTvSwYbSGuhydjMGXESh9f1iu1owX2jpy9fciEghb93SbDm3P3ePJYZBqY6wNwDQF787wzh3E9X49iA",
  "key13": "ukCmnzvGvsgZv12DfVUdb7S4AjEmayQR3Z6Dh4rtZffJRvrDnAF3nC4UuhYQCV2WXgaXSrpkzZu2BgexgxAbH1M",
  "key14": "2unuPZ8qotMiRYL9hsBoVwCsk1VeduXn8P2TyqoiLw3kgqR9QgEZpeVPteRp9py3q7ZmhXiZk4kQEWCw6MPv7yfF",
  "key15": "2jWjgjpRZf5bAqRFTYDFce1iEPacFkD8wwDSYAXrMZz4EguLRBe12jA8MwwYZxDDdw15YExNgUQNrtx8iSjakSwU",
  "key16": "5kR9n9DPkhXb6YwiZLA4g7Z5cPvzFPgNEgTWtQD9Gfoz8nAYnP484xm5njnQJyZhcUe2ENjVfMzcefZHzTPXHnSj",
  "key17": "2Wtfz42CzP454ApUXNiV77QjL5qMTxKzZnbomCXvnY3fCwapd7JRM3bdaCPXBgBZGHh935nVYa4yLExZLcnt6W2u",
  "key18": "5fgEZqaBaNahRGvPr1pRR6gMHXSbAe95FmNY2C1LQpYfPTQCqTDkSHdzzdr9EzLdR6o76bJwkMbEa1NZZ89Gmf83",
  "key19": "3v85ZSrtfWgtE4qMFh5XaMxPsHbVouwk285p5wE26WPbPXNTFrNSEkJU4E8MyaEfWQg38aw5KFrmmJ7pQt2e1j2r",
  "key20": "3gN85W8zLc72bAMzjooSzyc3RULg8EFRxtz9wP2M2owFzZ14FBoW3Kb2dNRw4BKYuhd3ojfrDeBWGxLoECkRTgU5",
  "key21": "3pdTeekQoggfVFPUPFpVfPFqbQmM6CJen8kJrUjYMqiUFbnzpuNeEJEx5G5G8xJB9DigwUrj7ig6YD5yCx7aiy3m",
  "key22": "4HsN7oPwYev6XrN1aPmmB2H57UuzcEPg4jjZ7UvL5yTn9ksbx2EDqHKwoc9wuGLibPAhas7JNCnymj8pcJbf5dZ5",
  "key23": "5R1zqpxQhmzvSSHWGxExdQAbB2RFugYAVQcxqjyX2crRSoNg1PTAuQsDdwRasWFWwGEaifEJT1h5nsAjXBLTkPdS",
  "key24": "4kAaPdcHBFLEsNgtNwccojocJde6AuJgtgjNCUEVF1Y52B93gqxL4UemHAJ1HLBy96JsfB32D1i8XiUZ1wKSaGS9",
  "key25": "2iTXZ38HiradE6SSMXPuLS9uD8hiL6ibJQnvB3Zv1PiGtU4hBFvCNNp6fa31sWvJv28tuMXZHHUFFNL3nEbb42Qw",
  "key26": "36t7RkMjZNYfrmC8P1rJ9uCjpAc2Nw27qVATVqXnSEA2NVjiFJ9foSrHg5kxhWJvbS7q5JX7TbeKJRd8cmetXqtm",
  "key27": "57PtdVCqvtwRrBDjZbgfu3cytL4MZ4m6Fns1yy2ovVwgUcNgbpQ5xcMpoZoEytj67iRVDUZ7BEkpwwoxAerXNpDk",
  "key28": "5w1RzLFbtP3gCs4XNUksLJ2k4AQrb4zcyb8SU9kNnFsimMhqs8nP22wrjyXQS5Fen1L2mh2K8p7cE9stwvyQndyJ",
  "key29": "3tHwghgD9TUtiGs9AVyuTYfUL969zu3szVuyYVv539LBbvHPfLxTQFfiADWVQeDmMqScB4wbkezgkrYVTDBEYmSR",
  "key30": "3EuqcQZgTWzqcUAMpTDYeKjAJf3sfm1c9aE3h6hASfmpa5TGdkspt7vCDSjB8o4BTrQKj9mWM2gMVez6T9GwKo6w",
  "key31": "kkTQ9eq4Jo6gMJLVkVz7GTYC9pFsUgh3rEQew1fT2VmK52EerYUrdZzh9e6j33rkN5oTpkphYDVL9bNSe6caLzG",
  "key32": "5AUz5B3gXqASA2Uq8TsDb9Fh4X5t4izcK4weQeTPKkeJeRGoyAb16W8U54eWCEmhmQDmmHMrTu8CdFDEmp3kaAxm",
  "key33": "3F9edPmmXYPot98fuvkc9bPMrBgNXSmu12zNB9kQkRTMdFQENmMebfGmypwWVpjxQKrBSBndCfTdGsZHuFq9fWj1"
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
