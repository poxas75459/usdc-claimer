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
    "kp9WPopEoXvrYP3UpkyZ9QwLcCdcsU1a7ZHEm84f7iixSAWfk2qrWyUGG8PQwiDpe9UmUypAq9bSRETzeTLvCEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n45b7Zvr2g1hJZBrbTCiBunEzBz5fQkcTmhGMK4e4MQrojvDMwXpsstgYaRHhA2WdAHMRdfKsC1EaEJkTuT5a31",
  "key1": "4hstw7cMS6vj1651pBhBhs3WKFUdyDLASDVKBXAt2pEoJtPgD7md9aYYFbYXXBSR5rkFz8225VZeVuPnXmJpQDkx",
  "key2": "4pMSbApEqA8RSG4biRQF3Ag5M4agd91jC1vMWfRE9LW5GgWiHnt6XAHMqMQdtSu39eLSZ9oPd5c2Si1GBqJn3EE4",
  "key3": "67DorhLg59B7vjBCydCbq2dPJpWfZhn3YxV2A5ZF8UdZ4PpPY45ZTYW3wS6z2C3jvZzqi3LiMbSZxMqGyTYMZw2d",
  "key4": "2B8BLH3bferFptNJgooP96YiWJuX5Vu6MaSA9PrGA71WPEsW87gnSk9NpDNgdYDPBW1bgSCfC7cNxrktiWs3ciz1",
  "key5": "3iryijfK8XQ3peieZKRmeFh6PGanYLfarT4sF4HDAMSBXwaW2fLENQRot8vDoirUJ78KAcvm4dxSsv2bXietUAeG",
  "key6": "3FxMUnAzTjY4cuqsLx2QWLYaDcsjEKZxDsnUZSgjx37DaqBGZPcbW3RVaekU2eDdWGDgXdpAvkzwurfK3qFnkPwY",
  "key7": "2Wbo8MethNvchERAZr5uMV8MA4YS574p5p79aj3xZrL7sVCAjM2HTnYXTtJ29uQigU4vKE6pLXJpkXTmkpw2jJKq",
  "key8": "2EYvtCK43oY7YYW3rhDmP8KSxEoB5oMtoYRF7HSnujemPzxXgjpBjFw8XH9phv2Qvj5wbeDMnxDbE3zgXYbspFoV",
  "key9": "5GMT1j6PXsYgjPEvfpBX13YwBgBduKQvB3J6K6VRiRTEXP8rMS4CoXQ3TfWobpxJCY4N9qj53XSQWGFWApLEWaPH",
  "key10": "43yhLPn5iVs45HjZkNNSq9iFesAit4jc3xcuKiswSSevWVR4dDPhWuCoRBVLUto4vGyxDExzFm91hLJMfUHEHQ1S",
  "key11": "4h5XEQKsszHm5UUDKVZJCUsRcbyPDupu8hmoMaaxQPiiS3Lts1b57YYRH7P53bgLnqDznsur24S3hW2wKcXzBCDL",
  "key12": "3X4TKoJrsan1a1pvJkBasGAQyvDSZJMh51Gm9uumhghcjDpXLbua24zRDv5HL4xMU8R7zwKhhtKPX5ax7gaXuwjN",
  "key13": "2TEujWLGHBmyZehW4xhaKmK4WRxkh1jBp9JYNiNPFynV8rECQpVF3R71vLzwku8DKZeDzA8ewDJDMMWSHiDCRwpj",
  "key14": "5f1ivUBcs5vP29Y9o42ZJ5BZRRCwAB5621cNp8QRFsEe7ioam9Amdw9aMC3v8xpKY8ZHRDGgH5gCwqAawLjUTmWV",
  "key15": "2aWrD6epc3Kx1QF3XmBse9vUNNMJZcauyZiavLS8KcNuQHaYVuGkqbWhR2d4emSTA9jRep1kdAVustGk2jiD9hTa",
  "key16": "2wnk5LHi19os3kS5M6LG68Z7N27QUczxsbwV9LUzMdDFXGnknuFdoASChRNe9qAhNnS5jRnjycGcYrwg35onk2WF",
  "key17": "44aoMsHk2BgEMxfxnXhmpG7FF4bnUFuNEznwnhMneSKRykqu8NvPhAbDu7T3XEFCZAC11rL8YeKu4UYhjLkAZ5VZ",
  "key18": "Sq9uf4hboyjSrNSyvwaojnidkj1j8AUckDwnrugajx2CdpEMN1zuX32M7g6zuDsojUAA5hNncR9LUdAKmdoEcmu",
  "key19": "3pWhKGa5gfBzLH2fP7KJxHcKeFQM6ZVwvRL46zS699p8JMFoWtz826RCTZNNbWpMa9MBYBXtUqeMvwXQ6BprSzCZ",
  "key20": "13uRbN5QVPdznw6wAJcXXpMdFnLuqJEWorxANhcZLp65s5VoQu9Q3ij99UXKx77ieUzXerQ4FniQLB66Gzck4hR",
  "key21": "3ruWs7GnNuzfxQXdNabbZxcNuktCioZdbuscDZq6LsTDTWbMbARDKQCgZ28EyoU5nzxe9y6Rn17XBnCD8rGRCa5Q",
  "key22": "5d32cJcjXf3bFamvkWdZPVX6zy3HMUGmddoSAyrRtvYmDiGzo9HxtPV779BsX5mUC2myiTbKTDr3dS2ahhGQFvkF",
  "key23": "2NyKs2tDDCPG3xMeF9AuxHv6aYd4okqpdj5Grgts3BPrsPwrtvctLDJQWqJhrGTzTKU9VLYCmoN45sBHRvuDHkyU",
  "key24": "4yrj4c1HRtHgrVJ6JqJTjVAgpAk9RfvZiqcyVLCoaar1nFbBKBBaCLuvLkHbEqRcqEQm9wvyRRhbchtfE3Qegfth",
  "key25": "2kegBzpv8ZiUnm9NfGx7BSmntbtXmmkL9ptQF2hBwFjJtqk4mDScByWLPAx7uWKjvQwxzMhzmpeHKpPopjo6VRjC",
  "key26": "2eRqiFY718xCrV6eYWUAosAD4zt5fXwHdZnwsMzQfGqM6R7GSLnpqDXiYy41chQjQ12amnevCxRNCiPj4Q1CsEZD",
  "key27": "5UY68AGiLrSY7nwzNpCosd8B2SqiM4rD9NqpQoquAWAnTGfgy4hcGDQ78TXaKHZirzqae6UL76FvyEB9rK1xsqAo",
  "key28": "5yrcospDcLicNmacZ9rGPsb31v5kxXJiMCcPotayukVA3NYzUKnbTgNeoS9dSUT49Hco3tfwTRGw3jfeMG7oNLAG",
  "key29": "3ncpJ7frKLnow5bvZDf6gwvqePSf9wEdg43GLNnzK2V9CHeBiPsfiDLRT8sANqsd1C4Pfyb7GHqbCKgWFFsR8gjq"
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
