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
    "pY4FrE7ecqo6nqDZF6BNxs537nZRdGrVG3dfG9wj6zXku16n6nZtLY4ZtvtA6JVtmyxHsjXGtgeRujjisMXyAvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGZxd9r1t1v4hxYRF47x5uZUKxAafkj7gzuwLyCjAGXhwQx2wZEDWDHHy69Tg7Bc98CYeo3wLECcX7tNfYnyr16",
  "key1": "4Hy61tvWbT7G1JUNEYcq4NmJKZdMv8zSkbnUDKx5y5sx4S1GtsGLFAaBrqFUmUUsbjF21shKiw4kFV2A5me7kypZ",
  "key2": "guL6Fn4rdm5FK193qFgCftV3iHE7qQrVT9FzgkNrfhaAW34u9GZqRmjGekEZMaaVGuX59jGuy6F9vMQS494tXuA",
  "key3": "FoAes2vQmrFVyRwmmvaACBEa7NcirRkjRPVbZdn3SJhWfdodLroEdDdenqMkRR8tFPmAFMdt8AuUvLpzR3SoJjH",
  "key4": "54c87yqpAVszDwzq9mBkskuk4BCQuD6k97A6TzgHXPSDggAFzow35W3M3KHeqsrsG54V2PJFfK5kBkR9PtR1y4Pv",
  "key5": "2v83diWTa52bHX9KCDvgb2NMiao8X9Bzp92JkpHsz2fRqFuZguHBCXCJfJ9uU4n4WrY2RixiDox8et5jX1cTZoEt",
  "key6": "38fR1YUoEzUs1bhByFXL74S12Wk2DuUjAZfAdrR6ok9tDxsMPNBuQyrr1LFdSkexTMKPVLLbyckk8xuf5XD39VTw",
  "key7": "5xdmqTNWUxy1JYv8BvB1YKB2aPPfioXBifmcBMQesm9hrQTQeQVCqnagHPtaH43879TXGvFDGcMqS7cBj8z2sUTK",
  "key8": "MZhzrzspqUQnm5nrfyzenpx6ZqxoGdRr1TvH1d6c3emAJZktCMvMuv6FMv8i37feNBZtVa8vG79aP6UpefUMA7v",
  "key9": "tTBAstiRgnpULBhAntPMv3bsU74MtRDBzcEpmCXKaNTxA5Y7VVP8pZAZQnxxjfYxVCuMUqzAooeh7Dm4kBXWeac",
  "key10": "3vPDa9f4kpcNnHp7eWvBMwKPP2QxPWsRTE7JWn1Dt772Q4v171DGmvUAvSw7Ypaq17otMR8zkgs3eSzSzAcfuocG",
  "key11": "MsrATnKg59X9pF9TTKq1noQR372axfSXzDDFDvEY14VEAVsBYtifL45yUk2vc7wNJpc6bv3Pbq1LCBtgYtFDg7F",
  "key12": "4ZYLJBQUuTbcCykiBxdcSVQ4y6PLWZLB8pYEZTfEYzYqixcZmLHdwVRikbG9ReAwdchevue9y6pCGuwxxJc36DnG",
  "key13": "3UDQGZWrj6ws7h9TDLrs6dg6BQtzv8iconJnaKkkQs93FMFfZEGXY347GUNSVLZiitqzNKVxrF4dBxaDkFoXmv3B",
  "key14": "36m6PXjL1KugUaBGuEaCSJr7UChBKqhu1iPnSzscadwG7ZHiX2q5Nvs8MZW2nPjZiDeDZ5brk7A5tH61zyDbTkP4",
  "key15": "4qo8fJmwwM92ZYZHVcpkxmVDuy8Xu8MGwHRAnd4sXy4HgLtHS3p1yiJ5oJDYJgBg5EjWeXy8wSaSwEvWsPaNXbZa",
  "key16": "4h6KhEdKZTeW8nrADV6rtr7G8WXX6bChXD1FfFpaoGEuHRsT96phqtrrL4K78UPs5W6VXekiR93L4bEA48FKyaGw",
  "key17": "cqUL8djExWWYKKHeg6fRa6TVHf2FfVfrATXFJyRp2toMFpEc8CDPeTriFdzbqkDjBPgcd5RhCwHsbrLMLebWh3h",
  "key18": "66xrta6s4Thec9s3az5idiwVS7zi3TVqDYq2RFYVPX4qWRxzsZz4VAGNgUb99pQ3zvDwXewST6GGfZFKrHJwmdoa",
  "key19": "4Z3tTVTyXG45Km6emnFxzffkVvfDvKqrhxP4f1Gv5ijUtSAauAJKjnG6qpwnDf5T5aqEnrzMAndebFQWSZtm4KTV",
  "key20": "oZheHjCkLik6MYkuz9z5SDCph4gqcSZy53FyQ6VUERyS62DE9nBHq66PkwUFTCtRRPWDM8Mc5oj48j4dnvxKkFi",
  "key21": "4SfX6sSoWdtmDnNuEYhwih3CJZPcY8wPBMFc38C7SKTtFUZxnJWZcrWocUqnuvezBUMLd38PknsNRRnY3roaZHPz",
  "key22": "35DkDTsx3RHHtGCRNF8mjUcttizyjQrMduWAAZrXtxxKS3BdNMpMqCtXz1gBJjwy9x9QQDc3QiCYxSuT6UGKB8xS",
  "key23": "4q4bGtq7qapipxj5r6YsQmsX3q5py63pybpFvBZJHgn2GYvYdJPi9x4ho76b19rbJaqx5n2odM9TQ4roDjgo72aJ",
  "key24": "321cCU2ggUswi2hQxRorTnW34ELEhHxgroq24nGPNxT3JoC4LAP7AgGX8AeheEPgfPs1qHXKQ12qJEAT2ZLqCom9",
  "key25": "5ZFHNoRe5vyAe9cix3q7BaQvng2TpLMR9BzbjCyiXy4EebaECS7urZvT1ciPzCR5YBurTK7nPuQic6GZaqD42TEe",
  "key26": "4EFxEYr7mp4UGUJABhhApQnJZnGvF1FnifoN2CApuw6p2i17Y3Ce5tCYfue6niF3hacZHpqUNEqdMBEKLkvTEkg4",
  "key27": "3hWZSBJKduuSUcvxwtcTfWCZ9NKyEgvRK8jEcsTFoS3x5qQXoTECangY5NR5BQbUDicMDKLpW2ZSpzyEpCphvRe4",
  "key28": "3bDikcH4ASSECqGKxaHL1o1ByB8iX3rq3D4UUD2dQspHp4V9x3c3G1m5kLPHaBqqLbCY1W7cNw4qd2vC1uvmfWbx",
  "key29": "37RchbDzB5v9jiGMhzSJmyUVw2DYMRtiDL2v3QTCQzsVUpP7et7TXMdusuLKkY6Pp72Xbh9DNkxnLGAkT2DZhP9R"
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
