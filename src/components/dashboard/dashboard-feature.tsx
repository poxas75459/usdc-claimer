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
    "3E841585auXMgDeCatNSvSx6rWifpApoDUAZDpN5Ew73UHGia7eGyniPgzmUkwAVdYJVZ2ZCTxsvvcYhG9XDRUyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jb7MZZcjC6RNqH147qiPqFsWorNiycwh6TjqN7mrSmPE4HyJdteV4c3EGkmU1fesmAaYZnMX6JorN7jVa63dwqL",
  "key1": "2K45YKDkrq3mThnRPR3GnyV1WMBVNuKEcvZ1vtJSNvkyWZdvvqhioDEBKdBWQvCDDNo54zsK6CCLac6PGHrxF4Et",
  "key2": "3iCHTieL2JgGn6EKPVNGhVo4nUcFbD3ZcywT4WqGftQrF8QSrh24Wmgrf5FXryoNRtesbgUhd6Rxny3yPf4mrLM8",
  "key3": "4XEe3kQ8bwxPYc8eReyTWFZabj2B3TDW75n1bt8L6btcbuCYNFQEi1q5XvakqgoX91bTd38C6Hg6pQ4d3T1Ksyvt",
  "key4": "25h7tH1aSRrAfa8iTGBbBiDPZf1QYdHPfipfbjtnJi7fvpAunePj6YddNXHaoLvPDtxrxdkZiGKQxune3rCWYcQa",
  "key5": "5uYW4n6Y52m94EPf65fwUURBG3DtJcucxQ1EMRSUTwiw4cQ1fe85gj4NMNexSnHQ9QWRtdkrrPccBBk3FUg9znBB",
  "key6": "3sdf2YCU6YNsBebrK36gh51izuN2ETHetCCdr3rUX8FYYLnnuf3rZT2f3Af7ySMEgdtXMasqMQEqBo8P5bWkKpQo",
  "key7": "2JmZTVgnnKmPs91SdPre5KBJhyN8zaXJ3jqragCfDyQGXnQy4FrC8JkdLXNDuaSJpy1RHBHbkeuWiBydkANiYx8c",
  "key8": "5cc8M1yTn9ReKVEav1adfGo5v9MyCjPnphhu6jL7WqCLCth3evRLayS3ckSUqwSNPhbdXyMGDSyz5iJZ1k3P9sAx",
  "key9": "3jZSRHgwxMJfY76U7K99PQaXw5mBHA2y9g4ZmQKK2azYrmBYaiGHieJx6jAxZgqsz1N8mzDwN9wkGtQ9bpg7ozc4",
  "key10": "5H3Xzkg4bHPbNyp3pR4gWjQShs6QBLG622bPTMVpMc7G4ZgU6HFZGB4KGqCYqH74LH9g7UiEnmofRTfKgLfqXWjf",
  "key11": "4C1yus8YGqgEyLKJG5GhxsY2m3E7uYaUjqSeiYkxJiv8YDVmeHcZH8iqDNtNGfYnLqwYGwUJGFmjb34mHQzn4KoL",
  "key12": "3nk2hxzGEJ37ZyfZ1BcWrUcUEVPPz5KFHTrkaHV7cnxpiUMwK3JmQW1YQcGvt795SfL6EG7QwEQQxvt3BRD72ecH",
  "key13": "5abLRe2NjM2gehRLLvojo5E1irKSweBui5JoXqhB5VqUiAiVaudvr3zfcVDcjbcxEjkBz2gBviJ4zTR7WgdHadSr",
  "key14": "3qWyjvjnFfpy78X6Ype9zwbBSBbDU2j84abAsDSTkvBakpP6w7i6Xu5JXqBgkuw1syV5XM3ENbohPGzHBS99v658",
  "key15": "5tsnSn2Yo4UFEC9mDK5w2RSjsJBAdYwUMJYGxRwHakeoRBAgsKYMMqNXvDhDDwEqgxHRQ19VbdZgBpZHHc4DaEFQ",
  "key16": "42K4Gqv3CuFvcVmic8a4wLnksqqsXjAVMeY5dWbTF3kuhQPLW3Z7AQSTrY5VesUJ3Zj47KkrVanoA7RLcaDJgnqb",
  "key17": "37bc675Pehm36HTveDyXnhD3TcaPQFcp5skyEKGeHGFjThJXTk3TcSMeCoGvcdi96NJGHcZNemgNnLhqQE7BSijh",
  "key18": "4hTnBQEXmXtzZZStnbErph4b7iprj3yPi3zFztAziiLJSLWrJn8nZkbqy467ocdtnPnv2cKdeToBXSP42Lp2xFge",
  "key19": "3wiXg39hSGBkEJZY2WCNEjGNRnfToVpcKui1dhxhqGGg3HHwG3n3cHghycjrCajyYLamp4EhSM93mb7uEC22M5nR",
  "key20": "3sd5zT7UGgCs4LcDrzLKLUin34zw5XJVE6JKu2bNTqdS5sg22ivii8R1NDUykfCQCahqtKFYLebB29MGR9R6JEwm",
  "key21": "49NqNoKfybMm1SKCqUSWoFyJGH4YkbupAbEGPhaxFCrEbzS3nCbN4GQBvtead7E3K1R73944Q9sJe5oFzhh42CMC",
  "key22": "5NwP9xuamMbsE5Ju3TubgVZDccocxhE4Bz2QA5R6bviVKpaYCsHSYzc5FrBB2p7UGgSUttNvW6uCjjUYvGx842MT",
  "key23": "3MjJ6mQEcnbvwhsPGD2vMfSh8qkusxNvzpRsXDxtf3tSqTtRg4WTggzAr8oxPTGrMXrrFhqLMukAioojLg4SBjTQ",
  "key24": "5xYQ8Qm9BLXhouTkhQapWjHyTgTGPSTKWekv8qWnCoHbXPgiXR4tvZnRShkuem7jh5xGwJVPTAXD7JXBsDtZ8HUB",
  "key25": "8ZbXVWyhk321v1UPnHNcYooeyfZCa9yr6d7MVFWzYKCLf1vc2Zod1skpZoiEb1HFdwbptDWK1JLWTHr58RNgXeq",
  "key26": "5W2x1GwqEvUyDEcgdKCduj4A7FytHez56tXaMMCnXqyoNW8ZGCLBUdqLhfup5bSisFCNn4ZmrEDniiHTe7sgi8KG",
  "key27": "cFoR7F1SqHQFaAvJZmaHFxiCPt5tExMpgrjytt45wPJ5X83VKEG2uD2jhxCNDnbDTNUwDZWfvjjVRegZQbtP3Qo",
  "key28": "2M1FqrfY7PoUgqapLgPAWgC4xYTePVABQU2HJvivbtkmc9e13G3zp4yE9yH32BtMLGPu1oJxe2GL2KPrcRkRNUoy",
  "key29": "bG1xYHmV3eBnY11Abvo5x5wbL2Vb3aD5mPtFYG1CHpSp5833GeP65mDbvQ5n2GdbYV3pGv15VUSmvjB7cxoeWNG",
  "key30": "4Z3TW5Hm2H7XdPmJs8jRTmW19mFboJsDiP4pTQCs9xftF6gWosE3ag2nAyDHj2jN1uH9cDxVwAHLUXdBd91o831p",
  "key31": "3CHwpTuQ9JnntS18QMBhUaySRECPDmHPGZDNmMPaHC1H5ZFco8ct4ZoQwiG8xrMNBNGqF4KvTsFhF8RA5Ta2YydJ",
  "key32": "5YTc1tdUSyqy3vSJPAHqVyLStqQCfKJEbvjxZGvhEaM8pdLiBquChgphCWEQniN6qGWxcRhtXQbwyVkp4e6ctJt3"
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
