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
    "5axBBP1Gi29De7tNmtkJF7yTUUzkvze2gBTxSWw9wMQZTEs3KaJrwYb6jXzZaHexQYtKRXzPqxrfLu5EMRKphXKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkxqi8jsTu5faUhmSd6zzLePzs1wrboahH1bgb9ikowCUzoQ63H6Pstphzm2qyEVyNayottgR1QbsUjYYfTcSLq",
  "key1": "4pN89WDafgW3b8KQLo29gKiPv59gjkvffFG81HvZa5YBeQhQcbNCahu3bx6CrNZpfpKfroP49cA5exXBatbDK6KD",
  "key2": "4WAzt7Qzw5oP26s3ccGX3LdmakihsETSPTSRDMQJ225wJqw1bhxrSrG7F5Lb8hTCuBTV8p2cr2ytYkf2d5wyDmS7",
  "key3": "2GH1EkEbtYgyskWrLvT3QBYxxXAyrF7Z35a28K6uqSyGtg1hvb1Ax4NNKRbkTLgdkKvcSwNgqd35XRng7UEs7G3V",
  "key4": "2XHoNyiTK65PvS84PemPqwko19Ujd5eQEmVZ5R1yktBXZNQ4zZJP6g4Ws9wnyUseBpExzGSGMePWDNgdSzce4bC6",
  "key5": "56DxXFQWAXTguFFFgbGnTypL5Wht4fnQb41hUnGHyBdM2YMLDQj86GeSz5xT6o8EkbMUGdEp87M98MF3rGXtirUY",
  "key6": "3PdYW3ZB7tnswkBdN1WsW9T6Zu6LUxTzEhuFcGUVGFj8dHxD5tFy41VjQJje9YoiSbmhavkGFeZ5ngPuvfFEL11X",
  "key7": "xmbacVUx1uRVXGfCAUNkHmA8gNh8KVjBCT9z4Nrh2fpx5m1WZfMVxwxWVLBe7cWjQGoDEG9Mde6jduZqsEJVJkk",
  "key8": "3UMcpLMmbu45Q9Uk81ZZTbhoQB3n77Zt9gzWDNgN8uCWdKDFNXGeXnvs2h9i6uQnrMkupVEaGRM4NMEpBWiYVpHZ",
  "key9": "5WJacV1pCuGvJdm2FQMpTZpb4TrT96jPY9SpqFooc6mfivvhqEqfGCByVzCRPYJpGsJDoCSZG2z9Z75xaKcUiKPL",
  "key10": "5Pw9YR6jGREQDzdvQ3ZyEU4cDQRTtF4kA2rfVf6XjcmmoUBXEG7HDtRyvP96NWNzVRf1VjNU6HG41Rtj2QXkfvD6",
  "key11": "2N9tHGC693H3m63iEw6tsWnG16tHqgHyJYEZR3Ax46BeH1K9rgD3V6xFm7eMv4stU9tG8PjDssfSaYVAvXBCpNdL",
  "key12": "2HQ19PxEo48BtSoPVFXUHJCFyp1XgkJVGr9jrPfPYhqDxiwrrwycDfgPoTvu5PXKjWHR53TKWmEyaXpqsWojmRFR",
  "key13": "3YsxNQ1hECwPB3bUTeuyfiarAGc82fVHgWnNzXC893Rdj7PmeFZY2YYWxSrCnqywyZMKeiEWXM5bsJiX1tvniFkf",
  "key14": "3LeDcRAGde6XnCumbstRapxnSWg3jf9LkVsYQaKyeLBYYKCuZUQfhGKiknjanydp1pSGipgiyCwPJLttreLxtqnj",
  "key15": "3Noaybjj62tohQfBtjdXm8oXafeCZ9GQKszvrxRmCKdQ5u2Xnw5LbcUZDMrB1abBRZNtVrPN6Kd7AFHeTM8npvNw",
  "key16": "5uuBRok7RHpCT8fBsq5vrf5pD7oi5pmEh6B3NxbQ76reKT1WPWQtptA8dci8wye9Z7EGprkbxgGF5PbuYZJJiJFC",
  "key17": "742D2hTWfnTDxKXfsC7orPrJuA27ZqsQ4yafRTPszTnEgzNUMFUDsiGZbkhT6ZxiwcSZxX3oQn6PqsckaQ3KDbS",
  "key18": "4ATgCQu67Tbdn9BvmASMsLWhtj6qCGPxSgnzE5TbndzoQnS2C2fY2Qwan7HavRm6vFCpx8XSFuF21gj22uobm8py",
  "key19": "PcJehQfLkwzVpjVgz6ZDg88cFEwQvPM71ZoTAYtTNSrjDxfAG3WGMeNDLJykcDf5jxdGPAabDwouVueUanMy7W4",
  "key20": "mzdpGJxDmmCUcPu2VxZAVsSXvm3bWr3buZDam2mkGPeZZj5KtPCYcETcH3A5o9JWUn6NWpZt7jQHTgeGQvFCUyQ",
  "key21": "U9usRvf4DEAyfdQYnbXD4PqS7UuP12PiztKfWQ8e8VosTufw7GRSH4V18QxSP4fbViH6zJSVFHB9dQbk1PTVHeo",
  "key22": "3jMQSN1dFt1r2LrY9yzEcB5t9oaHMGXfYPrKJkpXqetUSsWVpKVLp4Q5uGEj8YN4uLtvBiv44CD74WfWU1oRwsbo",
  "key23": "2d1SKckJ5XXqh2LKUT6aMyAtVKrr1L47PHj6QrKHbCB8N4nbE58VfTT1TWbnr4CqYHbP7xNaVfQG89AHYKQxALWr",
  "key24": "3RWojFhG4xhmAqcErjUJKtWf6m7bWRbQTNZMpLyKXUCK2SCRhdtmncMtr4dQcs7rduXcedeXdikzVXqrG8UGZ2fD",
  "key25": "5uv8DzomroSax2FPwEnUeHoKAkGbp6KxHMDSUW7Nfy1pMk378ftxw7kmoE1FXGJjfrUqFhrfHBfmny2SfzjFQvGN",
  "key26": "5aKLKDuzPvPx4LqM2RrZYGZjeR515MpGwTLegUQtfMCzpyG2vKvx9fua7tKpbte4jRdzKniXWJQvcTpfRjNEG5tm",
  "key27": "3orT7KFbnSoKVUkhKcRG1BGZLHNeWsjYewkgTwT42FGWhUxfqQg7D9o2htWJmXxiDaywuXuoDKEAL7oPmypYaZzN"
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
