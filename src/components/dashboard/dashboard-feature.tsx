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
    "4fDmHZE8KHLypXzjhHxd74wTTSGvGNEb8sNMePz4xfdvdHPLxz1tJX6jY8D8debxJawrRgxAFJ8r27xUsXR3YLsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9g4hGdMKeSAjUg7kwSetp1KBTgvWBxwh2TXVueG3xQ4BuSKrs1RJLcmaZQmcqWM161KkyzosJt22ev1KjdHoLEd",
  "key1": "4SRHdCEQkum3sceRt5QU54nUzKJ6NvrpigiMEitgTbmEUbAuYApno8nZwAZ5m8Km6ziPt9en8G6G5s9gGzsrJrN6",
  "key2": "3sZX2dRm1XxxYpzeY9zRLaHbXcba9ep9RtW8v9SuVvEf4tYtDHxHWWu3KSqGiQoYWo4LtFvRhWffQgjtKR9rw23L",
  "key3": "46UqhGJn9nuiVzjhSH9qjTvawfp9SKJHBLHLvbaK9g4Q31jjYP2uE19F7MQWikRn2q7HfdrTXt1xd4mzL6oC7M5x",
  "key4": "F9mZZ1bCUSaxsVzGB5V3gQg5YiDArDD2NiAGpBUu1Smf4UXXJtfrhaa17UFiK9LcxJDsjf761TTbWbtw5HMBE5f",
  "key5": "3qSiisKD2mp9d6ss4uSqJA7AnonAQkVCPqYywpEL1Es8FcxeTXGBRDhsa8xG572zfNPETYWusoxvv2iBSEbDEPFP",
  "key6": "4XTHDozSv1kjfjtQU3QYmr9tjNy5QGfs8W8C5mSXotazTXYHoAiH17pGuwmzqzS7duWsKnf6rrL1SBpvxGosAd5b",
  "key7": "2unkfrCSe5HGM8TowMApQG6VFSqzDGmuHiQJvxgmaWfEo47bURdfmdGNMZimT4Pc5UW1DS47tTf8gRkgBYtDBsBk",
  "key8": "2tMWoEXyrbQUGVMM7yXSv6Tn8V6qes4SNKbLaNDhq1C4SXfof1yo3cXBryB9ZPU1KA223mys6T6GtiH9ctzaGPfb",
  "key9": "3Gn8dnDJiyJVsLv3Sx6ozKTqTP4t4VcCj7uHC31z5u6zg7cf8LLX9U7E4V9dNFi3K9XSLdxuY24SAr4D6aFhnBAD",
  "key10": "3X1bNUMUwMGFeY6cv79igFLhZCARKHxZsg6dKmjcnhfzR1EzamK1qcaQ35Yi4rY7oaMVQaNGTDZscnRyJ6RamKhC",
  "key11": "3gyDiGp422UDW2wtsQtkf6r3ERy1F6GGXyikSXxLfNs2tFjwbioWq5wrGBuVmBRiHG9KbUt82rZPQkHw53hgdFVM",
  "key12": "22sQQmJN1YGUekpqDeWRVe9dzMjimD3AGmqYx3DMkiTQRxweNLkf4DRmmgakmB1HFgJWy421HfQWw8jDCHxpa7yw",
  "key13": "55vTR73WcYCvMWMSGsoS5TUZeuLQWXMUcXR9s16B3HWawhuz6rigH6AA4d6hUHVBBvLYYBPAaXPJXzFhvZTFnUrL",
  "key14": "5jiv3eZDw3BNrHuyKGptEDnQ49nkDfa7RPK1MDUbWFZj28s6ZNufn9nXuuvDQmP8NhRPZVgRWiNfdi3beoEknHqh",
  "key15": "4M5emCfhfaVt8RUTMzt2BENTqN6TztPcv3ChVuUeATMaVo5WuavYSFJMPKp4mtHfo1qt1kfPVXQ6vry75j1aHq63",
  "key16": "3xycYAN399WBjmAs9L954vfAXbks4Tkr5n4RaEGmvASfQg1KPdFFh3kFurr5K4YpxsgETBjXKmdsZo6Kk9Au5bKT",
  "key17": "xFJAA2NS3cJ2XH2et8rmepYSEHxxdXRk8FA1w1Ui2RcvDLSk7tMwfahac3DByNCBXia4ugFrcKuX6XToJNQ6fLJ",
  "key18": "4PjGAg92YdVFcagFsfhFrj7YNTb16bcMiwEFy4m7pWt7YxRU15GtpUfBhqpuKF5RfFtGvsG13VXcjLdxmiVs2Vwb",
  "key19": "3HGAfyCWPmh6SoGGR4BJoe2FcPcXH7NwcaRMSMqZdkByYEnLEtDCrzGMeUfdCYKSqizeQyVgNhPiS8YgfxxWW5BN",
  "key20": "3iGt7XArSpZKp5uTxFAKeYcz2JaS3PWvnG2yygVMhMjeAwuWiyUh7LcLVKBRGqzVvEm9LPJX7uRxkqiF4n76iLr3",
  "key21": "3WwLPmcfUxtN6bK9WZN4hP8sLozcmRcVBp2EvQWE5MaB6z2w1yECr7zcivqMtszv5qq996T1j2SZRqTSjRFUP4y2",
  "key22": "4exSdUHUoHvft8B3XoRcMCSRJX9yacgAZnU3J82Pn2SKNSmwUwvKAJxyzaQ26yEN8SaTT5WGPtPJAzVXRVFd9zkE",
  "key23": "5HBPniTWwBv8Au72SDK1wmJd2k4tR4eNMkdtgTBozrUUHwyseu6hER1H5XyBzDvXx72qBRQeYq2MJZ1bxgfBjD68",
  "key24": "65ifpfGzLhTUs82cjXu14Cgf2xmVCyXAPgxtYYV5NL9mvWdeLYRVP5SFVKGY7adBhbak5qecyFac4Ezm3zCEuycF",
  "key25": "2FKq2tKF7oKVE7BzHPgU1Eo4DRPDV6hA2hT2xLtM5MofkNWvaB9oZWDK7UBMJknVSCydYPjWjwShuaUrxTyMqhtS"
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
